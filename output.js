//Sun Apr 06 2025 13:18:57 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(() => {
  const _0x5bd497 = document.createElement("style");
  _0x5bd497.textContent = "\n  a[href=\"/signOut\"] { display: none !important; }\n  #my-tabs { display: none !important; }\n  \n  /* 处理 Shadow DOM */\n  chatgpt-sidebar::part(bottom-area-cursor) { display: none !important; }\n";
  document.head.appendChild(_0x5bd497);
  new MutationObserver(() => {
    !function () {
      const _0x2b2361 = document.querySelector("chatgpt-sidebar");
      if (_0x2b2361 && _0x2b2361.shadowRoot) {
        const _0xf96a3b = document.createElement("style");
        _0xf96a3b.textContent = "\n      .bottom-area .cursor-pointer { display: none !important; }\n    ";
        _0x2b2361.shadowRoot.appendChild(_0xf96a3b);
      }
    }();
  }).observe(document.documentElement, {
    childList: !0,
    subtree: !0
  });
})();