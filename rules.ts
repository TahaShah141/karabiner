// @ts-ignore
import fs from "fs";
import { KarabinerRules } from "./types";
import { createHyperSubLayers, app, open, shell, openRaycast } from "./utils";

const rules: KarabinerRules[] = [
  // Define the Hyper key itself
  {
    description: "Hyper Key (⌃⌥⇧⌘)",
    manipulators: [
      {
        // description: "Caps Lock -> Hyper Key",
        description: "Function -> Hyper Key",
        from: {
          // key_code: "caps_lock",
          apple_vendor_top_case_key_code: "keyboard_fn",
          modifiers: {
            optional: ["any"],
          },
        },
        to: [
          {
            set_variable: {
              name: "hyper",
              value: 1,
            },
          },
        ],
        to_after_key_up: [
          {
            set_variable: {
              name: "hyper",
              value: 0,
            },
          },
        ],
        to_if_alone: [
          {
            key_code: "escape",
          },
        ],
        type: "basic",
      },
    ],
  },
  ...createHyperSubLayers({
    // spacebar: open(
    //   "raycast://extensions/stellate/mxstbr-commands/create-notion-todo"
    // ),

    // s = "Safari"
    s: {
      t: open("https://twitter.com"),
      y: open("https://youtube.com"),
      g: open("https://google.com"),
      f: open("https://facebook.com"),
      q: open("https://qalam.nust.edu.pk/student/dashboard"),
      l: open("https://lms.nust.edu.pk/portal/my/"),
      r: open("https://reddit.com"),
      b: open("raycast://extensions/loris/safari/search-bookmarks")
    },

    // f = "Finder"
    f: {
      e: open("~/Downloads"),
      k: open("~/Desktop"),
      a: open("/Applications"),
      d: open("~/Documents"),
    },
    
    // o = "Open" applications
    o: {
      s: app("Safari"),
      m: app("Spotify"),
      y: open("https://youtube.com"),
      v: app("Visual Studio Code"),
      a: app("Android Studio"),
      b: app("Blender"),
      c: app("ChatGPT"),
      f: app("Finder"),
      i: app("Mail"),
      w: app("Whatsapp"),
      t: app("Warp"),
      x: app("XCode")
    },

    // w = "Window"
    w: {
      c: openRaycast("raycast://extensions/raycast/window-management/center"),
      m: openRaycast("raycast://extensions/raycast/window-management/almost-maximize"),
      f: openRaycast("raycast://extensions/raycast/window-management/toggle-fullscreen"),
      j: openRaycast("raycast://extensions/raycast/window-management/left-half"),
      k: openRaycast("raycast://extensions/raycast/window-management/right-half"),
      r: openRaycast("raycast://extensions/raycast/window-management/reasonable-size"),
      h: openRaycast("raycast://extensions/raycast/system/hide-all-apps-except-frontmost"),
      s: openRaycast("raycast://extensions/raycast/system/unhide-all-hidden-apps")
    },

    // r = "Raycast"
    r: {
      p: openRaycast("raycast://extensions/thomas/color-picker/pick-color?launchType=background"),
      h: open("raycast://extensions/raycast/clipboard-history/clipboard-history"),
      1: openRaycast("raycast://extensions/VladCuciureanu/toothpick/connect-favorite-device-1?launchType=background"),
      2: openRaycast("raycast://extensions/VladCuciureanu/toothpick/connect-favorite-device-2?launchType=background"),
      q: openRaycast("raycast://extensions/raycast/system/quit-all-applications"),
      c: openRaycast("raycast://extensions/raycast/raycast/reset-raycast-window-position")
    },

    // d = "Display"
    d: {
      1: openRaycast("raycast://extensions/eluce2/displayplacer/preset4"),
      2: openRaycast("raycast://extensions/eluce2/displayplacer/preset1"),
      3: openRaycast("raycast://extensions/eluce2/displayplacer/preset3"),
      4: openRaycast("raycast://extensions/eluce2/displayplacer/preset2"),
    },

    // m = "Music"
    m: {
      l: openRaycast("raycast://extensions/mattisssa/spotify-player/like?launchType=background"),
      p: openRaycast("raycast://extensions/mattisssa/spotify-player/togglePlayPause?launchType=background"),
      k: openRaycast("raycast://extensions/mattisssa/spotify-player/next?launchType=background"),
      j: openRaycast("raycast://extensions/mattisssa/spotify-player/previous?launchType=background"),
      n: open("raycast://extensions/mattisssa/spotify-player/nowPlaying"),
      s: open("raycast://extensions/mattisssa/spotify-player/search"),
      q: open("raycast://extensions/mattisssa/spotify-player/queue"),
    }
  }),
];

fs.writeFileSync(
  "karabiner.json",
  JSON.stringify(
    {
      global: {
        show_in_menu_bar: false,
      },
      profiles: [
        {
          name: "Default",
          complex_modifications: {
            rules,
          },
          // simple_modifications: [
          //     {
          //         from: { key_code: "caps_lock" },
          //         to: [{ apple_vendor_top_case_key_code: "keyboard_fn" }]
          //     },
          //     {
          //         from: { apple_vendor_top_case_key_code: "keyboard_fn" },
          //         to: [{ key_code: "caps_lock" }]
          //     }
          // ]
        },
      ],
    },
    null,
    2
  )
);
