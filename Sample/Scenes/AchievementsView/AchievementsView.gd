class_name AchievementsView
extends VBoxContainer

# Local cache of achievements
var achievements = {}

onready var achievements_list = $RR/AchievementsList
onready var achievement_popup = $RR/AchievementPopup
onready var refresh_btn = $MC/RefreshBtn

onready var AchievementUnlockNotificationScene = preload("res://Scenes/AchievementsView/AchievementUnlockNotification.tscn")

func _ready() -> void:
	# Achievements callbacks
	var _c = EOS.get_instance().connect("achievements_interface_achievements_unlocked_callback", self, "_on_achievements_interface_achievements_unlocked_callback")
	_c = EOS.get_instance().connect("achievements_interface_unlock_achievements_complete_callback", self, "_on_achievements_interface_unlock_achievements_complete_callback")

	_c = Store.connect("login_success", self, "_on_login_success")
	_c = Store.connect("logout_success", self, "_on_logout_success")
	_c = achievements_list.connect("achievement_pressed", self, "_on_achievement_pressed")
	_c = refresh_btn.connect("pressed", self, "_on_refresh_btn_pressed")

func _on_login_success():
	var query_options = EOS.Achievements.QueryDefinitionsOptions.new()
	query_options.local_user_id = Store.product_user_id
	EOS.Achievements.AchievementsInterface.query_definitions(query_options)
	yield(EOS.get_instance(), "achievements_interface_query_definitions_complete_callback")

	var definition_count_options = EOS.Achievements.GetAchievementDefinitionCountOptions.new()
	var definition_count = EOS.Achievements.AchievementsInterface.get_achievement_definition_count(definition_count_options)
	print("Achievement Definition Count: ", definition_count)

	achievements = {}
	for i in definition_count:
		var copy_by_index_options = EOS.Achievements.CopyAchievementDefinitionV2ByIndexOptions.new()
		copy_by_index_options.achievement_index = i

		var achievement_definition = EOS.Achievements.AchievementsInterface.copy_achievement_definition_v2_by_index(copy_by_index_options).definition_v2
		achievement_definition.unlock_time = ""
		achievements[achievement_definition.achievement_id] = achievement_definition
		# print(JSON.print(achievement_definition, "\t", true))

	var player_query_options = EOS.Achievements.QueryPlayerAchievementsOptions.new()
	player_query_options.local_user_id = Store.product_user_id
	player_query_options.target_user_id = Store.product_user_id
	EOS.Achievements.AchievementsInterface.query_player_achievements(player_query_options)
	yield(EOS.get_instance(), "achievements_interface_query_player_achievements_complete_callback")
	print("Done query player achievements")

	var player_achievement_count_options = EOS.Achievements.GetPlayerAchievementCountOptions.new()
	player_achievement_count_options.user_id = Store.product_user_id
	var player_achievement_count = EOS.Achievements.AchievementsInterface.get_player_achievement_count(player_achievement_count_options)
	print("Player Achievement Count: ", player_achievement_count)

	for i in player_achievement_count:
		var player_copy_by_index_options = EOS.Achievements.CopyPlayerAchievementByIndexOptions.new()
		player_copy_by_index_options.local_user_id = Store.product_user_id
		player_copy_by_index_options.target_user_id = Store.product_user_id
		player_copy_by_index_options.achievement_index = i

		var player_achievement = EOS.Achievements.AchievementsInterface.copy_player_achievement_by_index(player_copy_by_index_options).player_achievement

		achievements[player_achievement.achievement_id].unlock_time = player_achievement.unlock_time

	_rebuild_ui()
#	var player_copy_by_index_options = EOS.Achievements.CopyPlayerAchievementByIndexOptions.new()
#	player_copy_by_index_options.achievement_index = 0
#	player_copy_by_index_options.target_user_id = Store.product_user_id
#	player_copy_by_index_options.local_user_id = Store.product_user_id
#	print("Player Achievement By Index: ", EOS.Achievements.AchievementsInterface.copy_player_achievement_by_index(player_copy_by_index_options).player_achievement.achievement_id)

#	var player_copy_by_id_options = EOS.Achievements.CopyPlayerAchievementByAchievementIdOptions.new()
#	player_copy_by_id_options.achievement_id = "achievement_hidden_min_300"
#	player_copy_by_id_options.target_user_id = Store.product_user_id
#	player_copy_by_id_options.local_user_id = Store.product_user_id
#	print("Player Achievement By Id: ", EOS.Achievements.AchievementsInterface.copy_player_achievement_by_achievement_id(player_copy_by_id_options).player_achievement.achievement_id)


func _on_logout_success():
	achievements = {}
	_rebuild_ui()


func _rebuild_ui():
	achievements_list.from_achievements_array(achievements.values())


func _on_achievement_pressed(node: AchievementsListAchievement):
	achievement_popup.from_achievement_node(node)
	achievement_popup.popup_centered()


func _on_achievements_interface_achievements_unlocked_callback(data: Dictionary):
	print("--- Auth: Achievements Unlocked Callback")
#	print(data)
	if data.user_id == Store.product_user_id:
		achievements[data.achievement_id].unlock_time = data.unlock_time
	_rebuild_ui()

	# Show achivement unlocked notification
	var achievement_unlock_notification = AchievementUnlockNotificationScene.instance()
	Store.get_view("Notifications").add_notification(achievement_unlock_notification)
	achievement_unlock_notification.from_achievement_data(achievements[data.achievement_id])


func _on_achievements_interface_unlock_achievements_complete_callback(data: Dictionary):
	print("--- Auth: Unlock Achievements Complete Callback")
	#print(data)

func _on_refresh_btn_pressed():
	_on_login_success()
