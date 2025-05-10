//Sat May 10 2025 14:19:54 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const devtools = {
    io: "0",
    dr: undefined,
    nw: undefined,
    bt: undefined,
    bl: undefined,
    ap: "",
    st: "0",
    cf: undefined,
    wg: undefined,
    wp: undefined,
    sf: undefined,
    hc: undefined,
    dm: undefined,
    tz: undefined,
    to: undefined,
    fn: undefined,
    pg: undefined,
    im: "0",
    pm: "0"
  },
  respinfo = {
    ce: undefined
  },
  threshold = 160,
  emitEvent = (_0x28118c, _0x114f12) => {
    globalThis.dispatchEvent(new globalThis.CustomEvent("devtoolschange", {
      detail: {
        io: _0x28118c,
        dr: _0x114f12
      }
    }));
  };
async function sha256(_0x7e0eed) {
  const _0x7a4e6d = new TextEncoder(),
    _0x24980e = _0x7a4e6d.encode(_0x7e0eed),
    _0x533215 = await crypto.subtle.digest("SHA-256", _0x24980e),
    _0xf88bcf = Array.from(new Uint8Array(_0x533215)),
    _0x2e8b76 = _0xf88bcf.map(_0x3fe7ad => _0x3fe7ad.toString(16).padStart(2, "0")).join("");
  return _0x2e8b76;
}
function get_ip_address() {
  return new Promise((_0x1abe8c, _0x1437c1) => {
    const _0x1852a6 = new RTCPeerConnection({
      iceServers: [{
        urls: "stun:stun.l.google.com:19302"
      }]
    });
    _0x1852a6.createDataChannel("");
    _0x1852a6.createOffer().then(_0x3c3319 => _0x1852a6.setLocalDescription(_0x3c3319)).catch(_0x3e87c8 => _0x1437c1(_0x3e87c8));
    _0x1852a6.onicecandidate = _0x5e78cd => {
      if (!_0x5e78cd.candidate) {
        _0x1852a6.close();
        _0x1437c1("No ICE candidates found");
        return;
      }
      const _0x59d89d = /\d+\.\d+\.\d+\.\d+/,
        _0x5c0684 = _0x59d89d.exec(_0x5e78cd.candidate.candidate);
      if (!_0x5c0684) {
        return;
      }
      const _0x5e479d = _0x5c0684[0];
      _0x1abe8c(_0x5e479d);
    };
  });
}
function getCanvasFingerprint() {
  const _0x7a7b61 = document.createElement("canvas"),
    _0x17888c = _0x7a7b61.getContext("2d");
  _0x17888c.textBaseline = "alphabetic";
  _0x17888c.fillStyle = "#f60";
  _0x17888c.fillRect(125, 1, 62, 20);
  _0x17888c.fillStyle = "#069";
  _0x17888c.fillText("Cwm fjordbank", 2, 15);
  _0x17888c.fillStyle = "rgba(102, 204, 0, 0.7)";
  _0x17888c.fillText("Cwm fjordbank", 4, 17);
  const _0x291304 = _0x7a7b61.toDataURL();
  sha256(_0x291304).then(_0x3d07d2 => devtools.cf = _0x3d07d2).catch(_0x4342ee => console.error(_0x4342ee));
}
function getWebGLFingerprint() {
  let _0x42f265 = document.createElement("canvas"),
    _0xb70ff9 = _0x42f265.getContext("webgl") || _0x42f265.getContext("experimental-webgl");
  if (!_0xb70ff9) {
    return "";
  }
  let _0x60b6ee = [],
    _0x3f7ea8 = _0xb70ff9.getParameter(_0xb70ff9.RENDERER),
    _0x334546 = _0xb70ff9.getParameter(_0xb70ff9.VENDOR);
  _0x60b6ee.push(_0x3f7ea8);
  _0x60b6ee.push(_0x334546);
  let _0x4f14b4 = _0xb70ff9.getSupportedExtensions();
  _0x4f14b4 && _0x60b6ee.push(_0x4f14b4.join(";"));
  let _0x16e698 = ["ALIASED_LINE_WIDTH_RANGE", "ALIASED_POINT_SIZE_RANGE", "MAX_TEXTURE_SIZE", "MAX_VIEWPORT_DIMS", "RED_BITS", "GREEN_BITS", "BLUE_BITS", "ALPHA_BITS", "DEPTH_BITS", "STENCIL_BITS", "MAX_COMBINED_TEXTURE_IMAGE_UNITS", "MAX_VERTEX_ATTRIBS", "MAX_VERTEX_UNIFORM_VECTORS", "MAX_VARYING_VECTORS", "MAX_FRAGMENT_UNIFORM_VECTORS", "MAX_TEXTURE_IMAGE_UNITS"];
  for (var _0x5a3900 = 0; _0x5a3900 < _0x16e698.length; _0x5a3900++) {
    let _0x31be8e = _0xb70ff9.getParameter(_0xb70ff9[_0x16e698[_0x5a3900]]);
    _0x60b6ee.push(_0x16e698[_0x5a3900] + ":" + _0x31be8e);
  }
  let _0x4cc364 = _0x60b6ee.join(";");
  sha256(_0x4cc364).then(_0x162c45 => devtools.wg = _0x162c45).catch(_0x4d2aa2 => console.error(_0x4d2aa2));
}
function getWindowFingerprint() {
  return window.innerWidth + "x" + window.innerHeight + ":" + window.outerWidth + "x" + window.outerHeight;
}
function getScreenFingerprint() {
  return window.screen.width + "x" + window.screen.height + ":" + window.screen.pixelDepth + ":" + window.screen.colorDepth;
}
function getHardwareConcurrencyFingerprint() {
  let _0x15d175 = navigator.hardwareConcurrency || 1;
  return _0x15d175;
}
function getDeviceMemoryFingerprint() {
  let _0x5c197f = navigator.deviceMemory || "";
  return _0x5c197f;
}
function getTimeZoneFingerprint() {
  let _0x174efd = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
  return _0x174efd;
}
function getTimeZoneOffsetFingerprint() {
  return new Date().getTimezoneOffset();
}
function getFontsFingerprint() {
  var _0x1c7984 = ["Arial", "Arial Black", "Arial Narrow", "Arial Rounded MT Bold", "Calibri", "Cambria", "Cambria Math", "Courier", "Courier New", "Georgia", "Helvetica", "Impact", "Lucida Console", "Tahoma", "Times New Roman", "Trebuchet MS", "Verdana", "Webdings", "Wingdings"],
    _0xcb5972 = "",
    _0x5639a2 = document.createElement("span");
  _0x5639a2.style.visibility = "hidden";
  _0x5639a2.style.position = "absolute";
  _0x5639a2.style.top = "-9999px";
  document.body.appendChild(_0x5639a2);
  for (var _0x55e308 = 0; _0x55e308 < _0x1c7984.length; _0x55e308++) {
    _0x5639a2.style.fontFamily = _0x1c7984[_0x55e308];
    _0x5639a2.textContent = "abcdefghijklmnopqrstuvwxyz0123456789";
    var _0x3131fd = _0x5639a2.offsetWidth;
    _0xcb5972 += _0x1c7984[_0x55e308] + ":" + _0x3131fd + "px;";
  }
  document.body.removeChild(_0x5639a2);
  _0xcb5972 = _0xcb5972 + navigator.userAgent;
  sha256(_0xcb5972).then(_0x31eb4f => devtools.fn = _0x31eb4f).catch(_0x514c1d => console.error(_0x514c1d));
}
function getPluginsFingerprint() {
  var _0x3d9b46 = "";
  if (navigator.plugins && navigator.plugins.length > 0) {
    for (var _0x5a8280 = 0; _0x5a8280 < navigator.plugins.length; _0x5a8280++) {
      _0x3d9b46 += navigator.plugins[_0x5a8280].name + ",";
    }
  }
  _0x3d9b46 == "" && (_0x3d9b46 = "NA");
  _0x3d9b46 = _0x3d9b46 + navigator.userAgent;
  sha256(_0x3d9b46).then(_0x2af75e => devtools.pg = _0x2af75e).catch(_0x301024 => console.error(_0x301024));
}
function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (_0x2fda38) {
    var _0x5d2689 = Math.random() * 16 | 0,
      _0x391d4f = _0x2fda38 == "x" ? _0x5d2689 : _0x5d2689 & 3 | 8;
    return _0x391d4f.toString(16);
  });
}
function setCookie(_0x125273, _0x19c7b0, _0x387e6) {
  if (_0x387e6) {
    var _0x2b2f61 = new Date();
    _0x2b2f61.setTime(_0x2b2f61.getTime() + _0x387e6 * 24 * 60 * 60 * 1000);
    var _0x59571a = "; expires=" + _0x2b2f61.toGMTString();
  } else {
    var _0x59571a = "";
  }
  document.cookie = _0x125273 + "=" + _0x19c7b0 + _0x59571a + "; path=/";
}
function getCookie(_0x3ef43e) {
  var _0x5a0036 = _0x3ef43e + "=",
    _0x26fa74 = document.cookie.split(";");
  for (var _0x58c061 = 0; _0x58c061 < _0x26fa74.length; _0x58c061++) {
    var _0x4e24f8 = _0x26fa74[_0x58c061];
    while (_0x4e24f8.charAt(0) == " ") {
      _0x4e24f8 = _0x4e24f8.substring(1, _0x4e24f8.length);
    }
    if (_0x4e24f8.indexOf(_0x5a0036) == 0) {
      return _0x4e24f8.substring(_0x5a0036.length, _0x4e24f8.length);
    }
  }
  return null;
}
const main = ({
  emitEvents = true
} = {}) => {
  const _0x1f2aad = globalThis.outerWidth - globalThis.innerWidth > threshold,
    _0x3d46e1 = globalThis.outerHeight - globalThis.innerHeight > threshold,
    _0x270542 = _0x1f2aad ? "vertical" : "horizontal",
    _0x4dc5b2 = new Date(),
    _0x1dd59b = _0x4dc5b2.getFullYear() + "-" + (_0x4dc5b2.getMonth() + 1) + "-" + _0x4dc5b2.getDate(),
    _0x50fdc6 = _0x4dc5b2.getHours() + ":" + _0x4dc5b2.getMinutes() + ":" + _0x4dc5b2.getSeconds(),
    _0x1ede8a = _0x1dd59b + " " + _0x50fdc6;
  !(_0x3d46e1 && _0x1f2aad) && (globalThis.Firebug && globalThis.Firebug.chrome && globalThis.Firebug.chrome.isInitialized || _0x1f2aad || _0x3d46e1) ? ((!devtools.io || devtools.dr !== _0x270542) && emitEvents && emitEvent(true, _0x270542), devtools.io = "1", devtools.dr = _0x270542) : (devtools.io && emitEvents && emitEvent(false, undefined), devtools.io = "0", devtools.dr = undefined);
  navigator.webdriver == true ? devtools.nw = "1" : devtools.nw = "0";
  devtools.bt = _0x1ede8a;
  devtools.bl = navigator.language || navigator.userLanguage;
};
get_ip_address().then(_0x169d40 => {
  devtools.ap = _0x169d40;
  devtools.st = "1";
}).catch(_0xa65698 => {
  devtools.ap = "";
  devtools.st = "1";
  console.error(_0xa65698);
});
getCanvasFingerprint();
getWebGLFingerprint();
devtools.wp = getWindowFingerprint();
devtools.sf = getScreenFingerprint();
devtools.hc = getHardwareConcurrencyFingerprint();
devtools.dm = getDeviceMemoryFingerprint();
devtools.tz = getTimeZoneFingerprint();
devtools.to = getTimeZoneOffsetFingerprint();
getFontsFingerprint();
getPluginsFingerprint();
main({
  emitEvents: false
});
setInterval(main, 500);
function encrypt_value(_0x5a7131) {
  if (window.btoa) {
    return btoa(unescape(encodeURIComponent(_0x5a7131)));
  } else {
    throw new Error("Base64 encoding is not supported in this browser.");
  }
}
function to_object(_0x327539) {
  try {
    return JSON.parse(_0x327539);
  } catch (_0x321404) {
    _0x327539 = _0x327539.slice(0, -1);
    return JSON.parse(_0x327539);
  }
}
function pass_params() {
  try {
    let _0x1b573c = navigator.userAgent,
      _0x252694 = _0x1b573c.toLowerCase(),
      _0x2a79dc = _0x252694.includes("iphone"),
      _0x539cd0 = devtools.cf + "$$$$" + devtools.wg + "$$$$" + devtools.wp + "$$$$" + devtools.sf + "$$$$" + devtools.hc + "$$$$" + devtools.dm + "$$$$" + devtools.tz + "$$$$" + devtools.to + "$$$$" + devtools.fn + "$$$$" + devtools.pg,
      _0x4235b5 = unescape && encodeURIComponent ? unescape(encodeURIComponent(_0x539cd0)) : _0x539cd0,
      _0x39e457 = encrypt_value(_0x4235b5),
      _0x13f19c = "0##0##" + devtools.bl + "##" + devtools.bt + "####" + _0x39e457,
      _0x4533cc = devtools.nw + "##" + devtools.io + "##" + devtools.bl + "##" + devtools.bt + "##" + devtools.ap + "##" + _0x39e457,
      _0x2cc4a3 = _0x2a79dc == true ? _0x13f19c : _0x4533cc,
      _0x2cde75 = unescape && encodeURIComponent ? unescape(encodeURIComponent(_0x2cc4a3)) : _0x2cc4a3,
      _0x217a84 = encrypt_value(_0x2cde75);
    return _0x217a84;
  } catch (_0x4c1e09) {
    console.error("An error occurred in pass_params:", _0x4c1e09);
    return null;
  }
}
function is_ready() {
  return devtools.st;
}
function ua_detect() {
  return navigator.userAgent;
}
function ua_detect_lower() {
  return navigator.userAgent.toLowerCase();
}
function is_ua_detect_iphone() {
  return navigator.userAgent.toLowerCase().includes("iphone");
}
respinfo.ce = uuidv4();
try {
  let v_cookie = getCookie("rt_ce_ud");
  v_cookie == null ? localStorage.getItem("rt_ce_ud") == null ? (localStorage.setItem("rt_ce_ud", respinfo.ce), setCookie("rt_ce_ud", respinfo.ce, 365), respinfo.ce = respinfo.ce) : (respinfo.ce = localStorage.getItem("rt_ce_ud"), setCookie("rt_ce_ud", respinfo.ce, 365)) : (respinfo.ce = v_cookie, localStorage.getItem("rt_ce_ud") == null && localStorage.setItem("rt_ce_ud", v_cookie));
  console.log(respinfo.ce);
} catch (_0x5a626b) {
  console.log(_0x5a626b);
}
export { devtools, encrypt_value, to_object, pass_params, respinfo, is_ready, ua_detect, ua_detect_lower, is_ua_detect_iphone };