#pragma once
#include "eos_presence.h"
#include "godot_cpp/classes/ref_counted.hpp"

namespace godot {

class EOSGPresenceModification : public RefCounted {
    GDCLASS(EOSGPresenceModification, RefCounted)

protected:
    EOS_HPresenceModification m_internal = nullptr;
    static void _bind_methods();

public:
    int delete_data(Array p_keys);
    int set_data(Dictionary p_data);
    int set_join_info(const String &p_join_info);
    int set_raw_rich_text(const String &p_raw_rich_text);
    int set_status(int new_status);

    EOSGPresenceModification(){};
    ~EOSGPresenceModification() {
        if (m_internal != nullptr) {
            EOS_PresenceModification_Release(m_internal);
			m_internal = nullptr;
        }
    };

    void set_internal(EOS_HPresenceModification p_internal) {
        m_internal = p_internal;
    }

    EOS_HPresenceModification get_internal() {
        return m_internal;
    }
};

} // namespace godot