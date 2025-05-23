import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import CodeBlock from "@theme/CodeBlock";

function HeroSection() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-br from-gray-900 via-purple-950 to-blue-950 py-24 sm:py-32"
    >
      <div className="absolute inset-0 hero-image opacity-25"></div>
      <div className="container px-6 relative z-10 grid lg:grid-cols-2 gap-10 items-center">
        {/* Left col */}
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 text-white leading-tight">
            {siteConfig.title}
          </h1>
          <p className="text-xl text-gray-300 mb-8">{siteConfig.tagline}</p>
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="bg-gray-500 text-white px-3 py-1.5 rounded-lg flex items-center text-sm font-medium shadow">
              <svg xmlns='http://www.w3.org/2000/svg'
                className="w-4 h-4 mr-1.5"
                viewBox="0 0 1024 1024"
              >
                <g fill='#fff'>
                  <path d='M417.615 76.875c-42.392 9.424-84.326 22.545-123.642 42.334.899 34.716 3.143 67.98 7.693 101.768-15.268 9.782-31.315 18.177-45.576 29.628-14.49 11.148-29.29 21.813-42.41 34.85-26.212-17.337-53.955-33.63-82.535-48.012C100.337 270.6 71.53 306.383 48 346.428c18.493 29.029 38.33 58.205 56.7 80.959v245.765c.449.005.898.021 1.343.063l150.67 14.527a16.22 16.22 0 0 1 14.627 15.024l4.646 66.51 131.43 9.378 9.055-61.386a16.22 16.22 0 0 1 16.05-13.858h158.961c8.047 0 14.873 5.899 16.047 13.858l9.055 61.386 131.434-9.379 4.642-66.51a16.23 16.23 0 0 1 14.627-15.023l150.611-14.527c.446-.042.89-.058 1.34-.063v-19.611l.063-.02V427.387c21.216-26.71 41.307-56.172 56.699-80.96-23.523-40.044-52.345-75.828-83.152-108.984-28.573 14.382-56.325 30.675-82.537 48.012-13.117-13.037-27.89-23.702-42.4-34.85-14.258-11.45-30.324-19.846-45.563-29.628 4.537-33.788 6.78-67.052 7.683-101.768-39.32-19.79-81.249-32.91-123.662-42.334-16.933 28.46-32.42 59.28-45.906 89.408-15.993-2.672-32.06-3.662-48.149-3.853v-.026c-.112 0-.216.026-.312.026-.1 0-.205-.026-.305-.026v.026c-16.117.191-32.17 1.18-48.168 3.853-13.478-30.129-28.955-60.948-45.914-89.408M298.416 436.398c50.151 0 90.799 40.618 90.799 90.752 0 50.168-40.648 90.809-90.799 90.809-50.126 0-90.787-40.64-90.787-90.809 0-50.134 40.66-90.752 90.787-90.752m427.178 0c50.122 0 90.779 40.618 90.779 90.752 0 50.168-40.657 90.809-90.78 90.809-50.159 0-90.806-40.64-90.806-90.809 0-50.134 40.647-90.752 90.807-90.752m-213.6 53.11c16.143 0 29.254 11.908 29.254 26.56v83.59c0 14.665-13.111 26.563-29.254 26.563-16.142 0-29.226-11.898-29.226-26.563v-83.59c0-14.652 13.084-26.56 29.226-26.56'></path>
                  <path d='m784.071 718.723-4.666 66.864c-.562 8.059-6.972 14.474-15.031 15.052l-160.49 11.451q-.587.043-1.17.042c-7.975 0-14.856-5.853-16.034-13.861l-9.203-62.415H446.525l-9.203 62.415c-1.237 8.4-8.746 14.44-17.204 13.82l-160.49-11.452c-8.059-.578-14.469-6.993-15.03-15.052l-4.667-66.864-135.48-13.062c.062 14.56.249 30.512.249 33.688 0 143.085 181.51 211.86 407.024 212.651h.554c225.514-.79 406.962-69.566 406.962-212.651 0-3.234.195-19.119.262-33.688zM367.367 532.537c0 33.276-26.97 60.246-60.27 60.246-33.285 0-60.271-26.97-60.271-60.246s26.986-60.27 60.27-60.27c33.301 0 60.27 26.994 60.27 60.27M656.64 532.537c0 33.276 26.962 60.246 60.238 60.246 33.309 0 60.27-26.97 60.27-60.246s-26.961-60.27-60.27-60.27c-33.276 0-60.237 26.994-60.237 60.27'></path>
                </g>
              </svg>
              Godot 4.2+
            </span>
            <span className="bg-gray-500 text-white px-3 py-1.5 rounded-lg flex items-center text-sm font-medium shadow">
              <svg
                xmlns='http://www.w3.org/2000/svg'
                xmlSpace='preserve'
                className="w-4 h-4 mr-1.5"
                version='1.1'
                viewBox='0 0 647.167 750.977'
              >
                <defs>
                  <clipPath id='a' clipPathUnits='userSpaceOnUse'>
                    <path d='M0 790.889h900V0H0Z'></path>
                  </clipPath>
                </defs>
                <g transform='matrix(1.33333 0 0 -1.33333 -278.052 902.583)'>
                  <g>
                    <g clipPath='url(#a)'>
                      <g transform='translate(649.836 676.938)'>
                        <path
                          fill='#2f2d2e'
                          fillOpacity='1'
                          fillRule='evenodd'
                          stroke='none'
                          d='M0 0h-397.219c-32.196 0-44.078-11.882-44.078-44.093v-388.676c0-3.645.147-7.031.469-10.168.733-7.031.871-13.844 7.41-21.601.639-.76 7.315-5.728 7.315-5.728 3.591-1.761 6.043-3.058 10.093-4.688l195.596-81.948c10.154-4.655 14.4-6.469 21.775-6.323v-.001h.058v.001c7.375-.146 11.621 1.668 21.776 6.323L18.79-474.954c4.051 1.63 6.502 2.927 10.094 4.688 0 0 6.676 4.968 7.314 5.728 6.539 7.757 6.677 14.57 7.41 21.601.322 3.137.47 6.523.47 10.168v388.676C44.078-11.882 32.195 0 0 0'
                        ></path>
                      </g>
                      <g transform='translate(623.23 286.175)'>
                        <path
                          fill='#fff'
                          fillOpacity='1'
                          fillRule='nonzero'
                          stroke='none'
                          d='m0 0-.09-.897-.089-.985-.18-.897-.268-.896-.174-.807-.27-.897-.358-.807-.359-.718-.353-.806-.448-.717-.448-.718-.533-.717-.449-.717-.532-.627-.628-.628-.533-.538-.716-.628-.623-.538-.717-.538-.712-.442-.712-.538-.807-.448-.802-.359-.801-.448-.897-.359-.891-.359-.891-.268-.891-.27-.807-.268-.891-.18-.802-.179-.801-.179-.897-.18-.892-.089-.801-.09-.897-.09-.98-.09-.892-.089h-3.749l-.892.089h-.98l-.892.09-.896.09-.981.09-.891.179-.891.09-.897.179-.892.179-.891.18-.891.179-.896.268-.802.18-.891.269-.892.269-.806.359-.891.269-.802.268-.892.359-.806.359-.802.359-.802.442-.806.359-.802.449-.712.447-.807.449-.712.448-.717.448-.712.538-.712.538-.717.538-.713.538-.627.538-.712.627.538.717.622.628.538.718.623.717.538.627.532.717.628.718.532.627.628.717.533.628.627.717.533.718.538.627.622.717.538.718.622.627.538.717.712-.538.802-.538.717-.538.802-.538.717-.448.802-.537.711-.449.808-.358.711-.449.802-.359.807-.358.801-.359.803-.269.806-.358.891-.269.892-.269.801-.269.897-.18.891-.179.891-.179.981-.09.896-.179h.892l.98-.089h1.962l.981.089.897.179.801.18.802.179.717.269.623.358.717.538.532.628.359.718.27.806.088.897v.179l-.088 1.076-.359.897-.449.627-.622.538-.718.538-.712.358-.801.359-.897.359-1.07.447-.623.18-.711.179-.807.27-.802.179-.891.269-.897.179-.98.269-.892.179-.981.269-.891.179-.897.269-.89.18-.892.269-.807.268-.89.18-.803.269-.801.269-.807.269-.981.359-.891.359-.892.358-.896.359-.801.448-.892.448-.717.448-.802.448-.712.538-.717.448-.622.539-.627.627-.623.628-.538.628-.532.627-.449.627-.443.718-.448.806-.359.622-.269.718-.263.807-.269.717-.18.897-.179.807-.09.896-.089.897-.09.985v2.063l.09.896.089.807.09.897.179.806.18.807.269.808.179.806.353.807.359.807.358.806.444.808.447.806.533.718.539.717.622.717.627.627.623.718.717.628.622.448.717.538.713.538.711.448.807.448.802.359.801.448.807.358.891.27.891.358.807.269.712.18.803.179.806.179.891.179.802.18.891.089.897.09.891.09.891.089h3.839l.981-.089.981-.09h.891l.986-.09.891-.179.981-.09.892-.179.807-.179.891-.179.891-.18.802-.179.896-.269.802-.269.802-.18.896-.358.802-.269.801-.358.802-.359.896-.359.802-.448.712-.359.807-.448.802-.448.712-.449.806-.538.713-.447.717-.539.712-.538.711-.537-.532-.718-.448-.717-.533-.717-.538-.718-.532-.806-.449-.717-.538-.718-.533-.717-.447-.717-.534-.718-.537-.717-.449-.717-.532-.807-.539-.717-.532-.717-.448-.717-.533-.717-.717.537-.801.449-.713.448-.717.538-.801.358-.718.449-.801.359-.712.358-.807.359-.712.358-.801.269-.717.359-.982.268-.891.27-.891.268-.897.18-.891.179-.891.18-.891.09-.897.089-.801.09h-1.962l-.981-.179-.897-.18-.801-.179-.712-.359-.628-.358-.802-.718-.538-.807-.352-.807-.091-.896v-.18l.091-1.165.442-.986.359-.538.622-.628.807-.448.712-.448.891-.359.986-.359 1.071-.358.712-.179.712-.269.807-.179.801-.269.891-.18.987-.269.981-.268.981-.27.98-.179.891-.269.981-.269.897-.179.892-.269.891-.269.801-.269.897-.269.802-.269.801-.269.986-.353.891-.449.891-.358.892-.448.807-.449.802-.448.711-.448.717-.538.713-.448.712-.628.717-.627.622-.718.627-.627.533-.718.538-.806.443-.717.449-.808.358-.717.269-.806.264-.807.179-.807.179-.897.179-.897.09-.896.09-.986V.986zm-62.594-17.926h-51.143v65.258h51.587V32.538h-34.543V21.87h31.062V7.979h-31.062V-3.137h34.991v-14.789zm-65.214 0h-16.333v38.589l-.447-.717-.533-.813-.449-.717-.532-.718-.448-.806-.539-.718-.442-.717-.449-.812-.532-.717-.449-.717-.537-.718-.443-.812-.538-.717-.443-.717-.449-.807-.538-.722-.443-.718-.538-.806-.442-.718-.538-.717-.443-.812-.449-.718-.537-.717-.443-.807-.538-.722-.443-.717-.538-.718-.449-.806-.443-.722-.537-.718-.443-.807-.538-.717-.448-.717-.533-.813-.448-.717h-.354l-.537.807-.449.723-.533.807-.448.717-.533.806-.448.723-.532.807-.449.718-.538.806-.443.717-.538.813-.442.717-.538.807-.449.717-.532.812-.449.717-.532.807-.538.717-.448.812-.533.717-.448.807-.533.717-.448.813-.533.717-.448.807-.538.717-.443.807-.538.723-.443.806-.538.718-.448.807-.532.716-.45.813-.532.717v-38.409h-16.96v65.258h18.3l.443-.718.448-.806.532-.712.449-.807.448-.717.443-.808.448-.711.534-.808.447-.717.449-.717.443-.801.448-.718.533-.806.448-.718.448-.801.443-.717.538-.717.449-.803.442-.716.448-.807.444-.718.538-.801.448-.718.442-.806.449-.712.443-.717.538-.807.448-.718.443-.807.448-.712.443-.807.539-.717.448-.801.443-.718.448.718.448.801.533.717.447.807.444.712.448.807.533.718.448.807.449.717.442.712.538.806.443.718.449.801.447.718.533.807.448.716.449.803.442.717.45.717.532.801.448.718.448.806.444.718.537.801.444.717.447.717.449.808.532.711.449.808.442.717.449.807.538.712.443.806.448.718h18.294v-65.258zM-231.367 8.965l-.269.812-.353.897-.359.807-.269.812-.353.807-.358.897-.27.812-.359.807-.352.806-.27.812-.359.897-.263.807-.359.812-.359.807-.268.807-.354.901-.358.808-.269.806-.359.812-.353.897-.269.812-.359.807-.353-.807-.268-.812-.359-.897-.359-.812-.264-.806-.358-.808-.359-.901-.353-.807-.27-.807-.358-.812-.359-.807-.264-.897-.358-.812-.359-.806-.268-.807-.354-.812-.359-.897-.358-.807-.263-.812-.359-.807-.359-.897-.269-.812-.353-.807h15.082zm28.03-26.891h-17.498l-.354.808-.269.807-.358.807-.359.896-.264.802-.358.806-.359.807-.264.807-.358.807-.359.807-.268.807-.354.896-.359.807-.269.807-.359.807h-25.614l-.353-.807-.269-.807-.359-.807-.358-.896-.264-.807-.358-.807-.359-.807-.269-.807-.353-.807-.359-.806-.269-.802-.354-.896-.358-.807-.269-.807-.359-.808h-18.025l.353.808.359.807.358.807.354.896.269.802.359.806.358.807.353.807.359.807.359.897.353.807.359.806.268.807.359.807.353.807.359.896.358.807.354.808.359.806.358.807.269.807.353.897.359.806.359.807.353.807.359.807.359.807.353.897.269.806.359.807.358.807.354.807.358.807.358.896.354.807.358.807.269.807.359.806.353.807.359.897.359.807.353.807.358.807.359.806.269.808.354.801.358.897.358.806.354.808.358.807.359.806.353.807.269.897.359.806.358.807.354.807.359.807.358.807.354.897.358.806.269.807.358.807.354.807.358.807.359.896.353.807.359.807.359.807.263.806.359.808.359.896.359.807.353.807.359.807.358.807.353.806.27.897.358.807.359.807.353.807h16.512l.358-.807.359-.807.354-.807.358-.897.269-.806.353-.807.359-.807.358-.807.359-.807.353-.896.359-.808.359-.806.263-.807.359-.807.359-.807.359-.896.353-.807.358-.807.359-.807.353-.807.269-.806.358-.897.354-.807.359-.807.358-.807.359-.807.353-.806.358-.897.27-.807.353-.806.358-.807.359-.808.359-.806.353-.897.359-.801.358-.808.264-.806.358-.807.359-.807.354-.807.358-.897.359-.807.359-.806.353-.807.269-.807.358-.807.354-.896.358-.807.359-.807.358-.807.354-.807.359-.806.268-.897.354-.807.358-.807.359-.807.353-.807.359-.806.359-.897.359-.807.263-.807.359-.806.359-.808.353-.807.358-.896.359-.807.358-.807.353-.807.27-.806.359-.807.353-.897.358-.807.358-.807.354-.807.358-.806.359-.802.27-.896.352-.807.359-.807.358-.808zm-78.193 8.334-.717-.538-.623-.449-.717-.538-.712-.448-.712-.538-.717-.448-.712-.449-.807-.447-.802-.449-.802-.448-.806-.353-.802-.449-.891-.358-.801-.359-.897-.358-.801-.359-.803-.269-.806-.269-.802-.27-.891-.268-.801-.27-.897-.179-.802-.179-.891-.179-.896-.179-.892-.09-.981-.09-.891-.09-.981-.089-.897-.09-.98-.089h-3.84l-.891.089-.981.09-.891.089-.891.09-.897.09-.891.179-.892.18-.801.179-.896.179-.802.269-.891.179-.807.27-.802.358-.802.269-.89.359-.807.358-.802.358-.801.359-.808.448-.711.444-.802.448-.717.449-.712.447-.717.539-.712.537-.713.538-.627.538-.622.538-.628.628-.622.537-.628.628-.622.628-.538.627-.533.717-.538.628-.448.717-.533.718-.447.716-.444.718-.448.807-.448.717-.353.807-.359.807-.358.807-.354.806-.269.717-.359.808-.179.807-.264.806-.179.896-.269.808-.179.896-.09.807-.18.897-.088.806-.091.897-.084.897-.089.896V15.6l.089.986v.896l.084.897.091.986.179.891.089.897.179.807.269.896.18.897.263.807.269.896.269.807.359.897.354.806.358.807.359.807.353.807.448.807.448.717.444.718.447.717.449.717.532.717.538.717.533.717.538.629.622.627.538.628.623.626.627.629.622.537.717.628.623.538.712.538.717.448.712.538.718.448.711.448.802.449.807.448.801.448.802.359.806.358.892.449.712.268.891.27.808.358.801.18.801.269.896.179.802.269.891.179.892.09.896.179.892.09.89.089.892.09.897.09h3.833l.987-.09.981-.09h.891l.891-.089.981-.18.807-.089.891-.18.892-.179.806-.179.801-.179.803-.18.807-.269.801-.179.712-.269.807-.269.802-.358.801-.359.807-.359.802-.448.801-.359.718-.448.801-.448.712-.448.807-.449.712-.537.712-.449.717-.538.712-.538.717-.627.712-.538-.538-.718-.622-.627-.538-.717-.622-.717-.538-.718-.533-.627-.628-.717-.532-.717-.538-.629-.623-.717-.537-.717-.623-.717-.538-.628-.532-.717-.627-.717-.534-.717-.627-.628-.533-.717-.717.538-.712.627-.717.449-.712.538-.712.448-.717.449-.713.447-.801.449-.717.358-.712.359-.717.269-.802.269-.801.269-.807.179-.891.18-.891.179-.892.089-.981.09-.986.089h-1.872l-.891-.089-.807-.09-.891-.179-.802-.18-.807-.268-.801-.269-.802-.359-.802-.358-.717-.448-.711-.449-.718-.449-.622-.537-.628-.538-.622-.538-.538-.627-.622-.628-.538-.717-.444-.628-.448-.717-.442-.807-.449-.717-.358-.807-.269-.807-.354-.807-.269-.896-.179-.892-.179-.806-.18-.987-.089-.896-.084-.896v-2.063l.084-.896.089-.807.09-.897.179-.806.18-.808.179-.806.269-.807.264-.717.359-.896.358-.808.443-.807.448-.717.448-.717.533-.718.538-.627.622-.628.539-.627.621-.538.718-.538.712-.538.711-.448.717-.448.803-.359.801-.359.806-.358.892-.269.891-.269.897-.18.891-.179.891-.089.981-.09h2.051l.987.09.981.089.891.09.891.18.897.179.891.268.801.18.803.358.717.359.801.359.627.358.713.449v8.158h-13.032v13.084h29.454V-9.055z'
                        ></path>
                      </g>
                      <g transform='translate(312.995 481.16)'>
                        <path
                          fill='#fff'
                          fillOpacity='1'
                          fillRule='nonzero'
                          stroke='none'
                          d='M0 0h38.683v29.922H0v61.086h40.223v29.922h-73.072V-95.021h73.684v29.923H0z'
                        ></path>
                      </g>
                      <g transform='translate(590.07 474.677)'>
                        <path
                          fill='#fff'
                          fillOpacity='1'
                          fillRule='nonzero'
                          stroke='none'
                          d='M0 0v-48.744c0-8.639-3.993-12.647-12.278-12.647h-6.144c-8.595 0-12.588 4.008-12.588 12.647V87.618c0 8.638 3.993 12.646 12.588 12.646h5.527c8.29 0 12.283-4.008 12.283-12.646V45.349h32.233v44.12c0 26.837-12.895 39.795-39.6 39.795h-15.969c-26.706 0-39.912-13.264-39.912-40.106V-50.284c0-26.843 13.206-40.106 39.912-40.106h16.274c26.712 0 39.911 13.263 39.911 40.106V0z'
                        ></path>
                      </g>
                      <path
                        fill='#fff'
                        fillOpacity='1'
                        fillRule='nonzero'
                        stroke='none'
                        d='M475.995 386.138h32.854V602.09h-32.854z'
                      ></path>
                      <g transform='translate(428.326 506.146)'>
                        <path
                          fill='#fff'
                          fillOpacity='1'
                          fillRule='nonzero'
                          stroke='none'
                          d='M0 0c0-8.639-3.987-12.652-12.277-12.652h-13.511v79.596h13.511C-3.987 66.944 0 62.935 0 54.298Zm-7.061 95.944h-51.577v-215.952h32.85v78.362h18.727c26.711 0 39.911 13.263 39.911 40.1v57.384c0 26.842-13.2 40.106-39.911 40.106'
                        ></path>
                      </g>
                      <g transform='translate(357.642 190.875)'>
                        <path
                          fill='#fff'
                          fillOpacity='1'
                          fillRule='evenodd'
                          stroke='none'
                          d='M0 0h188.054L92.068-31.654Z'
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              EOS SDK 1.17.0
            </span>
          </div>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="https://github.com/3ddelano/epic-online-services-godot/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition shadow-lg hover:shadow-blue-500/30"
            >
              Download Latest
            </a>
            <a
              href="#"
              className="bg-gray-700 hover:bg-gray-600 text-white font-medium px-6 py-3 rounded-lg transition shadow-md"
            >
              Quickstart
            </a>
          </div>

          <div className="text-gray-400">
            <p className="mb-3 font-medium text-gray-300">Supports:</p>
            <div className="flex flex-wrap gap-2">
              <span className="platform-badge bg-gray-800 px-3 py-1 rounded-full text-xs font-semibold shadow-sm transition-transform duration-200 hover:scale-105">
                🖥️ Windows x64
              </span>
              <span className="platform-badge bg-gray-800 px-3 py-1 rounded-full text-xs font-semibold shadow-sm transition-transform duration-200 hover:scale-105">
                🐧 Linux x64/arm64
              </span>
              <span className="platform-badge bg-gray-800 px-3 py-1 rounded-full text-xs font-semibold shadow-sm transition-transform duration-200 hover:scale-105">
                🤖 Android x64/arm64
              </span>
              <span className="platform-badge bg-gray-800 px-3 py-1 rounded-full text-xs font-semibold shadow-sm transition-transform duration-200 hover:scale-105">
                🍎 MacOS
              </span>
              <span className="platform-badge bg-gray-800 px-3 py-1 rounded-full text-xs font-semibold shadow-sm transition-transform duration-200 hover:scale-105">
                🍏 iOS arm64
              </span>
            </div>
          </div>
        </div>

        {/* Logo Column */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src="img/eosg-logo.svg"
            alt="Logo"
            className="w-64 h-64 object-contain rounded-md"
          />
        </div>
      </div>
    </section>
  );
}

function MainSystemsSection() {
  return (
    <section id="main-systems" className="py-16 sm:py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          Two Main Systems
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="feature-card from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="feature-icon-bg bg-blue-700 mb-4 w-12 h-12 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-white">
              High Level EOS (Recommended)
            </h3>
            <p className="text-blue-200 mb-4">
              Provides easy-to-use methods and signals to interact with EOS.
              Ideal for most cases and rapid development.
            </p>
            <a
              href="#high-level"
              className="inline-flex items-center text-blue-300 hover:text-white font-medium"
            >
              Learn more
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </a>
          </div>
          <div className="feature-card from-purple-900 to-purple-800 hover:from-purple-800 hover:to-purple-700 p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="feature-icon-bg bg-purple-700 mb-4 w-12 h-12 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                ></path>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-white">
              GDExtension EOS
            </h3>
            <p className="text-purple-200 mb-4">
              Offers advanced EOS usage with direct access to the C SDK via
              GDExtension. Suitable for complex needs.
            </p>
            <p className="text-purple-300 text-sm">
              Provides{" "}
              <code className="bg-purple-950 px-1.5 py-0.5 rounded text-purple-200">
                EOS
              </code>{" "}
              and{" "}
              <code className="bg-purple-950 px-1.5 py-0.5 rounded text-purple-200">
                IEOS
              </code>{" "}
              classes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    "Authentication",
    "Social Overlay (Win)",
    "Achievements",
    "Stats & Leaderboards",
    "Lobby & Sessions",
    "Multiplayer (P2P)",
    "Voice",
    "Metrics",
    "Mods",
    "Player/Title Storage",
    "Progression Snapshot",
    "Reports & Sanctions",
    "Ecommerce (EGS)",
    "AntiCheat",
  ];
  return (
    <section id="features" className="py-16 sm:py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          Core Features Included
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
            >
              <span className="flex items-center text-sm sm:text-base">
                <svg
                  className="w-4 h-4 mr-2 text-green-400 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-lg">{feature}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HighLevelSection() {
  const classes = [
    "HPlatform",
    "HAuth",
    "HAchievements",
    "HFriends",
    "HStats",
    "HLeaderboards",
    "HLobbies",
    "HP2P",
    "HLog",
  ];
  return (
    <section id="high-level" className="py-16 sm:py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">
          High Level EOS Classes
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-center">
          These classes simplify interaction with EOS services. They include
          built-in documentation accessible directly within the Godot Editor.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {classes.map((className, index) => (
            <div
              key={index}
              className="bg-blue-900/80 hover:bg-blue-800/80 p-4 rounded-lg text-center shadow transition"
            >
              <span className="font-mono font-medium text-blue-100">
                {className}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const codeExample = `
# In main script
extends Node

func _ready() -> void:
    # Setup HEOS Logs
    HLog.log_level = HLog.LogLevel.INFO

    var init_opts = EOS.Platform.InitializeOptions.new()
    init_opts.product_name = "PRODUCT_NAME_HERE"
    init_opts.product_version = "PRODUCT_VERSION_HERE"

    var create_opts = EOS.Platform.CreateOptions.new()
    create_opts.product_id = "PRODUCT_ID_HERE"
    create_opts.sandbox_id = "SANDBOX_ID_HERE"
    create_opts.deployment_id = "DEPLOYMENT_ID_HERE"
    create_opts.client_id = "CLIENT_ID_HERE"
    create_opts.client_secret = "CLIENT_SECRET_HERE"
    create_opts.encryption_key = "ENCRYPTION_KEY_HERE"

    # Enable Social Overlay on Windows
    if OS.get_name() == "Windows":
        HAuth.auth_login_flags = EOS.Auth.LoginFlags.None
        create_opts.flags = EOS.Platform.PlatformFlags.WindowsEnableOverlayOpengl

    # Initialize the SDK
    var init_res := await HPlatform.initialize_async(init_opts)
    if not EOS.is_success(init_res):
        printerr("Failed to initialize EOS SDK: ", EOS.result_str(init_res))
        return

    # Create platform
    var create_success := await HPlatform.create_platform_async(create_opts)
    if not create_success:
        printerr("Failed to create EOS Platform")
        return

    # Setup Logs from EOS
    HPlatform.log_msg.connect(_on_eos_log_msg)
    var log_res := HPlatform.set_eos_log_level(EOS.Logging.LogCategory.AllCategories, EOS.Logging.LogLevel.Info)
    if not EOS.is_success(log_res):
        printerr("Failed to set logging level")
        return

    HAuth.logged_in.connect(_on_logged_in)

    # During development use the devauth tool to login
    HAuth.login_devtool_async("localhost:4545", "CREDENTIAL_NAME_HERE")

    # Only on mobile device (Login without any credentials)
    # await HAuth.login_anonymous_async()


func _on_logged_in():
    print("Logged in successfully: product_user_id=%s" % HAuth.product_user_id)

    # Example: Get top records for a leaderboard
    var records := await HLeaderboards.get_leaderboard_records_async("LEADERBOARD_ID_HERE")
    print(records)


func _on_eos_log_msg(msg: EOS.Logging.LogMessage) -> void:
    print("SDK %s | %s" % [msg.category, msg.message])
`;

function ExampleSection() {
  return (
    <section id="example" className="py-16 sm:py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          Basic Usage Example (GDScript)
        </h2>
        <div className="max-w-4xl mx-auto">
          <CodeBlock language="gdscript">{codeExample}</CodeBlock>
        </div>
      </div>
    </section>
  );
}

function ScreenshotsSection() {
  return (
    <section id="screenshots" className="py-16 sm:py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          Screenshots & Demos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 screenshot-container">
          <div className="flex items-center flex-col">
            <h3 className="text-xl font-semibold mb-3 text-center">Windows</h3>
            <img
              src="img/screenshots/windows_auth_success.png"
              alt="Windows Auth Success Screenshot"
              className="w-full max-w-[800px] h-auto rounded-lg shadow-md border border-gray-700"
            />
          </div>
          <div className="flex items-center flex-col">
            <h3 className="text-xl font-semibold mb-3 text-center">Android</h3>
            <img
              src="img/screenshots/android_auth_success.jpg"
              alt="Android Auth Success Screenshot"
              className="w-full max-w-[800px] h-auto mb-4 rounded-lg shadow-md border border-gray-700"
            />
            <img
              src="img/screenshots/android_p2p_game.jpg"
              alt="Android P2P Game Screenshot"
              className="w-full max-w-[800px] h-auto rounded-lg shadow-md border border-gray-700"
            />
          </div>
          <div className="flex items-center flex-col">
            <h3 className="text-xl font-semibold mb-3 text-center">
              iOS / macOS
            </h3>
            <img
              src="img/screenshots/ios_simulator_auth_success.png"
              alt="iOS Simulator Auth Success Screenshot"
              className="w-full max-w-[800px] h-auto mb-4 rounded-lg shadow-md border border-gray-700"
            />
            <h4 className="text-lg font-medium my-2 text-center">
              Cross-Platform Lobbies
            </h4>
            <img
              src="img/screenshots/ios_simulator_in_lobby.png"
              alt="iOS Simulator In Lobby Screenshot"
              className="w-full max-w-[800px] h-auto mb-4 rounded-lg shadow-md border border-gray-700"
            />
            <img
              src="img/screenshots/mac_in_lobby.png"
              alt="macOS In Lobby Screenshot"
              className="w-full max-w-[800px] h-auto rounded-lg shadow-md border border-gray-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function DemoSection() {
  return (
    <section id="demo" className="py-16 sm:py-20 bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-white">
          Demo & Tutorial Video
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Watch the tutorial playlist on YouTube for a visual guide and
          examples.
        </p>
        <div className="max-w-3xl mx-auto aspect-video shadow-xl rounded-lg overflow-hidden border border-gray-700">
          <a
            href="https://www.youtube.com/playlist?list=PL5t0hR7ADzun5JYF4e2a2FtZEWYHxK83_"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative"
          >
            <img
              src="https://img.youtube.com/vi/ENyvF4yVjKg/0.jpg"
              alt="Epic Online Services Tutorial Series Thumbnail"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <svg
                className="w-20 h-20 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </a>
        </div>
        <a
          href="https://www.youtube.com/playlist?list=PL5t0hR7ADzun5JYF4e2a2FtZEWYHxK83_"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 text-blue-400 hover:text-blue-300 underline font-medium"
        >
          Watch the playlist on YouTube
        </a>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">How It Works</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            This project utilizes Godot's{" "}
            <strong className="text-blue-400">GDExtension</strong> system to
            wrap the official Epic Online Services C SDK. This allows seamless
            integration and usage within Godot projects using GDScript, C#, or
            other supported languages. It provides a familiar class hierarchy
            and leverages Godot's signal system for handling asynchronous events
            like user login, achievement unlocks, lobby updates, and more.
          </p>
        </div>
      </div>
    </section>
  );
}

function InstallationSection() {
  return (
    <section id="installation" className="py-16 sm:py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          Installation
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-white">
              Method 1: Asset Library (Recommended)
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-300">
              <li>
                Open the <strong className="text-white">AssetLib</strong> tab in
                the Godot editor.
              </li>
              <li>
                Search for{" "}
                <code className="bg-gray-700 px-1.5 py-0.5 rounded text-gray-100">
                  EOSG
                </code>{" "}
                or{" "}
                <code className="bg-gray-700 px-1.5 py-0.5 rounded text-gray-100">
                  Epic Online Services Godot
                </code>
                .
              </li>
              <li>
                Find the plugin by{" "}
                <strong className="text-white">3ddelano</strong> and click on
                it.
              </li>
              <li>
                Click <strong className="text-blue-400">Download</strong>, then{" "}
                <strong className="text-blue-400">Install</strong>.
              </li>
              <li>
                Go to{" "}
                <strong className="text-white">
                  Project {"->"} Project Settings {"->"} Plugins
                </strong>
                .
              </li>
              <li>
                Enable the{" "}
                <strong className="text-white">
                  Epic Online Services Godot (EOSG)
                </strong>{" "}
                plugin.
              </li>
              <li>Restart the Godot editor.</li>
            </ol>
            <a
              href="https://godotengine.org/asset-library/asset/2453"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-400 hover:text-blue-300 underline"
            >
              View on Godot Asset Library
            </a>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-white">
              Method 2: GitHub Release
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-300">
              <li>
                Download the latest release{" "}
                <code className="bg-gray-700 px-1.5 py-0.5 rounded text-gray-100">
                  .zip
                </code>{" "}
                file from GitHub.
              </li>
              <li>Extract the zip archive.</li>
              <li>
                Copy the{" "}
                <code className="bg-gray-700 px-1.5 py-0.5 rounded text-gray-100">
                  addons/epic-online-services-godot
                </code>{" "}
                folder into your project's{" "}
                <code className="bg-gray-700 px-1.5 py-0.5 rounded text-gray-100">
                  res://addons/
                </code>{" "}
                folder (create it if needed).
              </li>
              <li>
                Go to{" "}
                <strong className="text-white">
                  Project {"->"} Project Settings {"->"} Plugins
                </strong>
                .
              </li>
              <li>
                Enable the{" "}
                <strong className="text-white">
                  Epic Online Services Godot (EOSG)
                </strong>{" "}
                plugin.
              </li>
              <li>Restart the Godot editor.</li>
            </ol>
            <a
              href="https://github.com/3ddelano/epic-online-services-godot/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-400 hover:text-blue-300 underline"
            >
              Download from GitHub Releases
            </a>
          </div>
        </div>
        <p className="text-center mt-8 text-gray-400">
          After installation, you can start using the{" "}
          <code className="bg-gray-700 px-1.5 py-0.5 rounded text-gray-100">
            EOS
          </code>{" "}
          and{" "}
          <code className="bg-gray-700 px-1.5 py-0.5 rounded text-gray-100">
            H
          </code>{" "}
          classes in your scripts.
        </p>
      </div>
    </section>
  );
}

function SupportSection() {
  return (
    <section id="support" className="py-16 sm:py-20 bg-gray-950">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">
          Support Development
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Creating and maintaining this plugin requires significant time and
          effort, including extensive work with the EOS SDK documentation and
          testing. If you find this project helpful, please consider supporting
          its development.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
          <a
            href="https://www.buymeacoffee.com/3ddelano"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition transform hover:scale-105"
          >
            <img
              height="45"
              width="180"
              src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png"
              alt="Buy Me A Coffee"
            />
          </a>
          <a
            href="https://github.com/sponsors/3ddelano"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-600 hover:bg-pink-700 text-white font-medium px-6 py-3 rounded-lg transition shadow-md inline-flex items-center"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              />
            </svg>
            GitHub Sponsor
          </a>
        </div>
        <p className="text-gray-400 mb-2">
          Need help, have suggestions, or found a bug?
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <a
            href="https://discord.gg/FZY9TqW"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg transition shadow-md inline-flex items-center"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09a.09.09 0 0 0-.07-.03c-1.5.26-2.93.71-4.27 1.33a.07.07 0 0 0-.05.08c-.67 1.9-.94 3.9-.94 6s.27 4.09.94 6a.07.07 0 0 0 .05.08c1.34.61 2.77 1.07 4.27 1.33a.09.09 0 0 0 .07-.03c.19-.34.4-.77.54-1.1a16.28 16.28 0 0 0 5.34-.01c.14.33.35.76.53 1.1a.09.09 0 0 0 .07.03c1.5-.26 2.93-.71 4.27-1.33a.07.07 0 0 0 .05-.08c.67-1.91.94-3.91.94-6s-.28-4.09-.94-6a.07.07 0 0 0-.05-.08zM8.5 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
            </svg>
            Join Discord: 3ddelano Cafe
          </a>
          <span className="text-gray-400">
            or contact on Discord:{" "}
            <code className="bg-gray-700 px-1.5 py-0.5 rounded text-gray-100">
              @3ddelano
            </code>
          </span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-700/50 pt-12 pb-8">
      <div className="container px-6">
        <div className="bg-yellow-900/20 border border-yellow-700/40 text-yellow-300 text-xs p-4 rounded-lg max-w-3xl mb-8">
          <p>
            <strong>Disclaimer: </strong>This project Epic Online Services Godot
            (EOSG) is <strong>NOT</strong> affiliated with Epic Games Inc or
            Godot Engine. It does not endorse Epic Online Services. This project
            and the sample Godot scenes are provided solely for educational
            purposes and may or may not comply with Epic Games' Design
            Guidelines. If you plan to release a game using EOS, ensure you read
            the official{" "}
            <a
              href="https://dev.epicgames.com/docs/services/en-US/EpicAccountServices/DesignGuidelines/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-yellow-100"
            >
              Guidelines
            </a>{" "}
            and fulfill all requirements (user consent, data deletion, privacy
            policy, etc.).
          </p>
        </div>

        <p className="text-gray-400 text-sm">
          Copyright &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://github.com/3ddelano"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            Delano Lourenco
          </a>
          . All rights reserved.
        </p>
        <p className="text-gray-500 text-xs mt-2">
          Epic Games, Epic Online Services, Godot Engine, and their respective
          logos are trademarks or registered trademarks of their respective
          owners.
        </p>
      </div>
    </footer>
  );
}

function NavBar() {
  return (
    <nav className="bg-gray-900 border-b border-gray-700/50">
      <div className="container mx-auto px-6 py-4 flex items-center gap-6">
        <a
          href="/epic-online-services-godot/"
          className="text-white text-lg font-bold shrink-0 flex items-center gap-2"
        >
          Epic Online Services Godot
        </a>

        <div className="flex justify-between w-full">
          <div className="flex space-x-4">
            <a href="docs/introduction" className="text-gray-300 hover:text-white">
              Docs
            </a>
            <a href="showcase" className="text-gray-300 hover:text-white">
              Showcase
            </a>
          </div>

          <div className="flex space-x-4">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/3ddelano/epic-online-services-godot"
              className="text-gray-300 hover:text-white flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="#fff"
                viewBox="0 0 256 256"
              >
                <path
                  d="M17.791 46.836A2 2 0 0 0 19 45v-5.4q.002-.297.041-.61L19 39h-3.6c-1.5 0-2.8-.6-3.4-1.8-.7-1.3-1-3.5-2.8-4.7-.3-.2-.1-.5.5-.5.6.1 1.9.9 2.7 2 .9 1.1 1.8 2 3.4 2 2.487 0 3.82-.125 4.622-.555C21.356 34.056 22.649 33 24 33v-.025c-5.668-.182-9.289-2.066-10.975-4.975-3.665.042-6.856.405-8.677.707a22 22 0 0 1-.151-.987c1.797-.296 4.843-.647 8.345-.714a8 8 0 0 1-.291-.849c-3.511-.178-6.541-.039-8.187.097-.02-.332-.047-.663-.051-.999 1.649-.135 4.597-.27 8.018-.111a10 10 0 0 1-.13-1.543c0-1.7.6-3.5 1.7-5-.5-1.7-1.2-5.3.2-6.6 2.7 0 4.6 1.3 5.5 2.1C21 13.4 22.9 13 25 13s4 .4 5.6 1.1c.9-.8 2.8-2.1 5.5-2.1 1.5 1.4.7 5 .2 6.6 1.1 1.5 1.7 3.2 1.6 5 0 .484-.045.951-.11 1.409 3.499-.172 6.527-.034 8.204.102-.002.337-.033.666-.051.999-1.671-.138-4.775-.28-8.359-.089a8 8 0 0 1-.325.98c3.546.046 6.665.389 8.548.689q-.064.498-.151.987c-1.912-.306-5.171-.664-8.879-.682-1.665 2.878-5.22 4.755-10.777 4.974V33c2.6 0 5 3.9 5 6.6V45c0 .823.498 1.53 1.209 1.836C41.37 43.804 48 35.164 48 25 48 12.318 37.683 2 25 2S2 12.318 2 25c0 10.164 6.63 18.804 15.791 21.836"
                  fontFamily="none"
                  fontSize="none"
                  fontWeight="none"
                  style={{ mixBlendMode: "normal" }}
                  textAnchor="none"
                  transform="scale(5.12)"
                ></path>
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    // <Layout
    //   title={`Hello from title`}
    //   description="Description will go into a meta tag in <head />"
    // >
    <div className="min-h-screen bg-gray-900 text-gray-200 antialiased">
      <NavBar />
      <main>
        <HeroSection />
        <MainSystemsSection />
        <FeaturesSection />
        {/* <HighLevelSection /> */}
        {/* <ExampleSection /> */}
        <ScreenshotsSection />
        <DemoSection />
        {/* <HowItWorksSection /> */}
        {/* <InstallationSection /> */}
        <SupportSection />
      </main>
      <Footer />
    </div>
    // </Layout>
  );
}
