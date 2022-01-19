const shortcuts = [
  {
    category: "layout/view",
    shortcuts: [{ title: "view switcher", keys: ["ctrl", "´"] }],
  },
  {
    category: "File Handling",
    shortcuts: [
      {
        title: "switcher",
        description:
          "To jump between the opened files and tool windows with the switcher.",
        keys: ["ctrl", "tab"],
      },
      {
        title: "close active tab",
        keys: ["cmd", "w"],
      },
      {
        title: "find in files",
        keys: ["cmd", "shift", "f"],
      },
      {
        title: "go to file",
        keys: ["cmd", "shift", "o"],
      },
      { title: "switch recent files", keys: ["cmd", "e"] },
    ],
  },
  {
    category: "Cursor Navigation",
    shortcuts: [
      {
        title: "navigate back",
        description:
          "Jump forward or backward in this history of your cursor. For instance, this helps to quickly go back to where you were before following a code path (Main menu -> Navigate -> Back/Forward)",
        keys: ["cmd", "alt", "left"],
      },
      {
        title: "last edit location",
        description:
          "Jump backward to the cursor where you last edited code. This is sometimes more efficient than pressing the above shortcut keys multiple times. (Main menu -> Navigate -> Last edit location)",
        keys: ["cmd", "shift", "backspace"],
      },
      {
        title: "extend selection",
        description:
          "Extend or shrink currently selected text/code, with code-sensing: wherever your cursor is, by repeatedly pressing the shortcut keys, it will select more and more (or less and less) of the surrounding code of your cursor. See video below. (Extend selection, Shrink selection)",
        keys: ["option", "up"],
      },
      {
        title: "go to next splitter",
        description:
          "Switch between editor windows when you are in split screen.",
        keys: ["option", "tab"],
      },
    ],
  },
  {
    category: "Code Navigation",
    shortcuts: [
      { title: "go to declaration", keys: ["cmd", "b"] },
      { title: "go to implementation", keys: ["option", "cmd", "b"] },
      { title: "navigate file structure", keys: ["cmd", "f12"] },
      { title: "quick documentation", keys: ["f1"] },
      { title: "parameter info", keys: ["cmd", "p"] },
    ],
  },
  {
    category: "Code and Text Manipulation",
    shortcuts: [
      { title: "Add or Remove Caret", keys: ["option", "click"] },
      { title: "Comment with Line Comment", keys: ["cmd", "shift", "/"] },
      { title: "Move Statement Up", keys: ["cmd", "shift", "up"] },
      { title: "Delete Line", keys: ["cmd", "backspace"] },
      { title: "Unwrap/Remove", keys: ["cmd", "shift", "backspace"] },
      { title: "Surround With…", keys: ["cmd", "option", "t"] },
      { title: "Select Next Occurrence", keys: ["ctrl", "g"] },
    ],
  },
  {
    category: "Refactoring",
    shortcuts: [
      { title: "Rename", keys: ["shift", "f6"] },
      { title: "Optimize imports", keys: ["ctrl", "option", "o"] },
      { title: "Reformat code", keys: ["option", "cmd", "l"] },
      { title: "Refactor this…", keys: ["ctrl", "t"] },
    ],
  },
  {
    category: "Copy & Paste",
    shortcuts: [{ title: "Paste from History…", keys: ["cmd", "shift", "v"] }],
  },
];

export default shortcuts;
