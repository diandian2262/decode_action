//Mon Apr 07 2025 13:02:11 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x470f07 = function () {
    let _0x405e13 = true;
    return function (_0x5ed8fe, _0x3229cc) {
      const _0x333cba = _0x405e13 ? function () {
        if (_0x3229cc) {
          const _0xa14aa5 = _0x3229cc.apply(_0x5ed8fe, arguments);
          _0x3229cc = null;
          return _0xa14aa5;
        }
      } : function () {};
      _0x405e13 = false;
      return _0x333cba;
    };
  }(),
  _0x361a58 = _0x470f07(this, function () {
    const _0x21d579 = function () {
        let _0x27e4db;
        try {
          _0x27e4db = Function("return (function() {}.constructor(\"return this\")( ));")();
        } catch (_0x51018c) {
          _0x27e4db = window;
        }
        return _0x27e4db;
      },
      _0x30ca76 = _0x21d579(),
      _0x3558f6 = new RegExp("[CZgMFNALtPttfZrpLdWQjnIjldrFhARlmxdERZqkyJmIelIARkXlYOhCjqzjCFYENWeRKSr]", "g"),
      _0x38dfb0 = "H5CZgM944F1N9A0L3;1t15.Ptt19fZrp0.11Ld.1WQ4jn0IjldrFhARlmxdERZqkyJmIelIARkXlYOhCjqzjCFYENWeRKSr".replace(_0x3558f6, "").split(";");
    let _0x573f85, _0x340396, _0x2e0f91, _0x3a2a62;
    const _0x296ba9 = function (_0x3b0f01, _0x130811, _0x267f99) {
        if (_0x3b0f01.length != _0x130811) {
          return false;
        }
        for (let _0x56a357 = 0; _0x56a357 < _0x130811; _0x56a357++) {
          for (let _0x14da27 = 0; _0x14da27 < _0x267f99.length; _0x14da27 += 2) {
            if (_0x56a357 == _0x267f99[_0x14da27] && _0x3b0f01.charCodeAt(_0x56a357) != _0x267f99[_0x14da27 + 1]) {
              return false;
            }
          }
        }
        return true;
      },
      _0x30dd87 = function (_0x43a081, _0x43992f, _0xbfefea) {
        return _0x296ba9(_0x43992f, _0xbfefea, _0x43a081);
      },
      _0xe77ba0 = function (_0x1b3771, _0x5ec412, _0x2e1d57) {
        return _0x30dd87(_0x5ec412, _0x1b3771, _0x2e1d57);
      },
      _0x1622a5 = function (_0x455c55, _0x597ee1, _0xe61a89) {
        return _0xe77ba0(_0x597ee1, _0xe61a89, _0x455c55);
      };
    for (let _0x2c7e5a in _0x30ca76) {
      if (_0x296ba9(_0x2c7e5a, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
        _0x573f85 = _0x2c7e5a;
        break;
      }
    }
    for (let _0x238cce in _0x30ca76[_0x573f85]) {
      if (_0x1622a5(6, _0x238cce, [5, 110, 0, 100])) {
        _0x340396 = _0x238cce;
        break;
      }
    }
    for (let _0x5c7a65 in _0x30ca76[_0x573f85]) {
      if (_0xe77ba0(_0x5c7a65, [7, 110, 0, 108], 8)) {
        _0x2e0f91 = _0x5c7a65;
        break;
      }
    }
    if (!("~" > _0x340396)) {
      for (let _0x853654 in _0x30ca76[_0x573f85][_0x2e0f91]) {
        if (_0x30dd87([7, 101, 0, 104], _0x853654, 8)) {
          _0x3a2a62 = _0x853654;
          break;
        }
      }
    }
    if (!_0x573f85 || !_0x30ca76[_0x573f85]) {
      return;
    }
    const _0x455340 = _0x30ca76[_0x573f85][_0x340396],
      _0x3af380 = !!_0x30ca76[_0x573f85][_0x2e0f91] && _0x30ca76[_0x573f85][_0x2e0f91][_0x3a2a62],
      _0x12ea02 = _0x455340 || _0x3af380;
    if (!_0x12ea02) {
      return;
    }
    let _0x2415d1 = false;
    for (let _0x2a6b42 = 0; _0x2a6b42 < _0x38dfb0.length; _0x2a6b42++) {
      const _0x349a6a = _0x38dfb0[_0x2a6b42],
        _0x435ee9 = _0x349a6a[0] === String.fromCharCode(46) ? _0x349a6a.slice(1) : _0x349a6a,
        _0x184fbb = _0x12ea02.length - _0x435ee9.length,
        _0x1e2881 = _0x12ea02.indexOf(_0x435ee9, _0x184fbb),
        _0x48f4d9 = _0x1e2881 !== -1 && _0x1e2881 === _0x184fbb;
      _0x48f4d9 && (_0x12ea02.length == _0x349a6a.length || _0x349a6a.indexOf(".") === 0) && (_0x2415d1 = true);
    }
    if (!_0x2415d1) {
      const _0x5d72be = new RegExp("[SJGjfXhdfsifZOTjcxMMsBrsjOU]", "g"),
        _0x48bfac = "SJGabjfoXuthdfs:ifblZOTajnckxMMsBrsjOU".replace(_0x5d72be, "");
      _0x30ca76[_0x573f85][_0x2e0f91] = _0x48bfac;
    }
  });
_0x361a58();
App = window;
window.mainGame = null;
window.Panghu = function (_0x2ce32b) {
  window.mainGame = _0x2ce32b;
  loginPanghu();
};
window.stringZip = function (_0x1f57bc) {
  try {
    const _0x4cc7c5 = new TextEncoder().encode(_0x1f57bc),
      _0xe51d4 = pako.deflate(_0x4cc7c5),
      _0x1533a6 = btoa(String.fromCharCode.apply(null, _0xe51d4));
    return _0x1533a6;
  } catch (_0x361c9a) {
    return null;
  }
};
window.stringUnzip = function (_0x1c1099) {
  try {
    let _0x2db4ec = atob(_0x1c1099),
      _0x34da8e = _0x2db4ec.split("").map(function (_0x183425) {
        return _0x183425.charCodeAt(0);
      }),
      _0x1e02bd = new Uint8Array(_0x34da8e),
      _0x8f4281 = pako.inflate(_0x1e02bd);
    _0x2db4ec = new TextDecoder().decode(_0x8f4281);
    return decodeURIComponent(_0x2db4ec);
  } catch (_0x5981dd) {
    return null;
  }
};
window.tokenData = null;
window.AccountLimits = null;
window.AccountLoginId = null;
window.ResUrl = "http://115.190.11.140/";
function loginPanghu() {
  if (window.plus && plus.runtime.appid != "H59441903") {
    plus.runtime.quit();
    return;
  }
  if (!window.plus) {
    let _0x5af822 = "eJwzNDTVM7Q00DM01DM0MQAAFFoCsw==",
      _0x35e7bc = "eJwztDTSMzSz0DPQMzW3srQEABf/Aw4=";
    if (window.location.href.indexOf(stringUnzip(_0x5af822)) == -1 && window.location.href.indexOf(window.App.stringUnzip(_0x35e7bc)) == -1) {
      return;
    }
  }
  window.accountNode = createNode("accountNode", 0, 0, 680, 700, "6F6F6F", cc.Canvas.instance.node, true, _0x5585f7 => {});
  window.accountNode.group = "ui";
  let _0x3947f0 = new cc.Node("Box");
  window.Box = _0x3947f0;
  _0x3947f0.x = 0;
  _0x3947f0.y = 230;
  window.accountNode.addChild(_0x3947f0);
  createLabel("accountTips", "===登陆界面===", "FFE87E", "000000", 0, 300, 40, window.accountNode);
  createLabel("accounLabel", "专属账号", "FFFFFF", "000000", -160, 0, 36, window.Box);
  window.AccountInput = createEditBox("AccountInput", "输入账号", "", "000000", "000000", -50, 5, 280, 45, 36, window.Box, _0x4fe0ca => {});
  createLabel("accounLabel", "账号状态", "FFFFFF", "000000", -160, -80, 36, window.Box);
  window.AccountState = createLabel("AccountState", "无账号", "FFFFFF", "000000", 0, -80, 36, window.Box);
  localAccount();
  window.deleteAccountBtn = createButton("deleteAccountBtn", 160, -75, 140, 40, "debb4f", "删除", "FFFFFF", "000000", 34, window.Box, () => {
    delAccount();
  });
  createLabel("channelLabel", "渠道选择", "FFFFFF", "000000", -160, -160, 36, window.Box);
  window.ChannelList = createSelectList("ChannelList", ["微信", "TapTap", "IOS-APP", "联盟", "抖音"], "000000", "ffffff", 90, -160, 280, 45, 30, window.Box, _0x4086c8 => {
    cc.sys.localStorage.setItem("ChannelListSelectIdx", _0x4086c8);
    updateChannel();
  });
  window.location.href.indexOf("192.168.0.57") != -1 && (window.ChannelList.items = window.ChannelList.items.concat(["测试服"]));
  cc.sys.localStorage.getItem("ChannelListSelectIdx") && cc.sys.localStorage.getItem("ChannelListSelectIdx") != "" && (window.ChannelList.selectIdx = cc.sys.localStorage.getItem("ChannelListSelectIdx"), window.ChannelList.selectLabel.string = window.ChannelList.items[window.ChannelList.selectIdx], updateChannel());
  window.loginAccontBtn = createButton("loginAccontBtn", 0, -230, 250, 55, "debb4f", "登陆", "FFFFFF", "000000", 45, window.Box, () => {
    loginAccount();
  });
  window.loginAccontBtn.btnLabel.y = -5;
  createLabel("codeTips", "迷雾攻略交流群：", "FF8C8C", "000000", -120, -330, 30, window.Box);
  createLabel("codeTips2", "任何人都可加", "FF8C8C", "000000", -130, -380, 30, window.Box);
  createLabel("codeTips2", "不想进别进，别犯贱", "FF8C8C", "000000", -140, -430, 30, window.Box);
  window.code = createIconButton("menu", 140, -370, 60, 60, "code.png", "", "EDDA60", "000000", 40, window.Box);
  createLabel("accounLabel", "本软件仅供学习交流，请勿用于非法用途", "79FF71", "000000", 0, -500, 32, window.Box);
  createLabel("accounLabel", "一切责任与作者无关", "79FF71", "000000", 0, -550, 32, window.Box);
  if (cc.sys.localStorage.getItem("RestartLogin") && cc.sys.localStorage.getItem("RestartLogin") != "false" && cc.sys.localStorage.getItem("RestartLogin") != "") {
    cc.sys.localStorage.setItem("RestartLogin", false);
    cc.sys.localStorage.getItem("StatisticsData") && cc.sys.localStorage.getItem("StatisticsData") != "" && (window.StatisticsData = JSON.parse(cc.sys.localStorage.getItem("StatisticsData")));
    loginAccount();
    window.AutoLoginTime = setInterval(() => {
      if (!window.LoginScene || !window.Account || !window.Account.data.roles || !window.Account.data.roles.length) {
        return;
      }
      window.firstLogin = true;
      window.LoginScene.onSelectRole(window.Account.data.roles[0].id);
      window.LoginScene.welcomeGO.enterRefreshUI();
      clearInterval(window.AutoLoginTime);
      window.AutoLoginTime2 = setInterval(() => {
        window.firstLogin ? restartGame() : clearInterval(window.AutoLoginTime2);
      }, 60000);
    }, 1000);
  } else {
    const _0x34dc2c = {
      time: 0,
      battle3Num: 0,
      num: 0,
      nonum: 0,
      item900002: 0,
      item900003: 0,
      quality1: 0,
      quality2: 0,
      quality3: 0,
      quality4: 0,
      quality5: 0,
      quality6: 0,
      quality7: 0
    };
    window.StatisticsData = _0x34dc2c;
  }
  cc.sys.localStorage.getItem("NextAccountLogin") && cc.sys.localStorage.getItem("NextAccountLogin") != "false" && cc.sys.localStorage.getItem("NextAccountLogin") != "" && (cc.sys.localStorage.setItem("NextAccountLogin", false), autoLoginAccount());
  window.AutoChangeRestart = setInterval(() => {
    let _0x19fb28 = new Date(),
      _0x1bbbbc = _0x19fb28.getHours(),
      _0x20434c = _0x19fb28.getMinutes(),
      _0xd29adb = _0x19fb28.getSeconds();
    window.accountNode.active;
    _0x1bbbbc == 5 && _0x20434c == 0 && _0xd29adb == 0 && (resetAutoChangeAccountData(), window.accountNode.active && autoLoginAccount());
  }, 1000);
  window.AutoChangeRestart = setInterval(() => {
    window.accountNode.active && autoLoginAccount();
  }, 1800000);
  cc.sys.localStorage.getItem("AutoCloseGame") && cc.sys.localStorage.getItem("AutoCloseGame") != "false" && cc.sys.localStorage.getItem("AutoCloseGame") != "" ? cc.sys.localStorage.setItem("AutoCloseGame", false) : resetAutoChangeAccountData(false);
}
function delAccount() {
  window.AccountInput.string = "";
  if (!window.tokenData) {
    showTips("【账号系统】账号不存在，无需删除", true);
    return;
  }
  window.tokenData = null;
  showTips("【账号系统】账号删除成功", true);
  cc.sys.localStorage.setItem("tokenData", null);
  localAccount();
}
function localAccount() {
  cc.sys.localStorage.getItem("tokenData") && cc.sys.localStorage.getItem("tokenData") != "" && cc.sys.localStorage.getItem("tokenData") != "null" && (window.tokenData = JSON.parse(cc.sys.localStorage.getItem("tokenData")));
  !window.tokenData ? (window.AccountState.getComponent(cc.Label).string = "无账号", window.AccountState.color = cc.color().fromHEX("FFFFFF")) : (window.AccountState.getComponent(cc.Label).string = "有账号", window.AccountState.color = cc.color().fromHEX("79FF71"), window.AccountInput.string = "上次登录账号");
}
function saveAccount() {
  if (!window.tokenData) {
    showTips("【账号系统】账号为空或数据错误", true);
    return;
  }
  window.tokenData.data.combSdkInfo.uniqueId == "4244b85a98689a614c2d35567b5155dc" && (window.tokenData.data.combSdkInfo.uniqueId = "4fd6c31c538a151927f03f1189f9a32c");
  window.AccountLimits.isTransitionId && (window.tokenData.data.combSdkInfo.uniqueId = window.AccountLoginId);
  cc.sys.localStorage.setItem("tokenData", JSON.stringify(window.tokenData));
  showTips("【账号系统】自动保存", true);
}
function copyAccount() {
  if (!window.tokenData) {
    showTips("【账号系统】账号为空", true);
    return;
  }
  let _0x1a8598 = window.tokenData.account;
  if (!_0x1a8598) {
    showTips("【账号系统】账号错误", true);
    return;
  }
  wx.setClipboardData({
    data: _0x1a8598,
    success: function () {
      const _0x45e826 = {
        title: "复制成功，发给胖虎"
      };
      wx.showToast(_0x45e826);
    },
    fail: function (_0xa0b3ec) {
      showTips("【账号系统】复制失败，联系胖虎", true);
    }
  });
}
function updateChannel() {
  let _0x58829e = Number(window.ChannelList.selectIdx);
  switch (_0x58829e) {
    case 0:
      env.APP_SERVER = "https://poyun.hortorgames.com";
      break;
    case 1:
      env.APP_SERVER = "https://poyun-mwdl-app.hortorgames.com";
      break;
    case 2:
      env.APP_SERVER = "https://poyun-mwdl-ios.hortorgames.com";
      break;
    case 3:
      env.APP_SERVER = "https://poyun-mwdl-live.hortorgames.com";
      break;
    case 4:
      env.APP_SERVER = "https://poyun-mwdl-douyin.hortorgames.com";
      break;
    case 5:
      env.APP_SERVER = "https://poyun-audit.hortorgames.com";
      break;
  }
}
function loginAccount() {
  if (!window.tokenData && (!window.AccountInput || window.AccountInput.string == "")) {
    showTips("【账号系统】本地账号为空或输入错误", true);
    return;
  }
  let _0x3acdc9 = window.tokenData || JSON.parse(stringUnzip(window.AccountInput.string));
  if (!_0x3acdc9) {
    showTips("【账号系统】本地账号为空或输入错误", true);
    return;
  }
  window.tokenData = _0x3acdc9;
  const _0x2ad7d3 = {
    uniqueId: window.tokenData.data.combSdkInfo.uniqueId
  };
  _0x2ad7d3.ip = window.location.href;
  let _0x184b7d = Math.random().toString(36).substring(2);
  _0x2ad7d3.seed = _0x184b7d;
  window.App.it = _0x184b7d;
  let _0x7d87b4 = window.App.stringZip(JSON.stringify(_0x2ad7d3));
  _0x7d87b4 = insertCharAt(_0x7d87b4, 8, MD5(window.tokenData.data.combSdkInfo.uniqueId + _0x184b7d));
  const _0x23e0d6 = {
    data: _0x7d87b4
  };
  httpPostJson("http://115.190.11.140:3005/account", _0x23e0d6, function (_0x4da88c, _0x374291) {
    let _0x3b5be6 = _0x374291.data,
      _0x361943 = 0,
      _0x31c773 = 31,
      _0x1a63a9 = _0x3b5be6.substring(_0x361943, _0x31c773 + 1),
      _0x1fcae8 = _0x3b5be6.substring(0, _0x361943) + _0x3b5be6.substring(_0x31c773 + 1);
    window.App.ve = _0x1a63a9;
    if (MD5(App.tokenData.data.combSdkInfo.uniqueId + window.App.it + "PH") != _0x1a63a9) {
      return;
    }
    let _0x568bd4 = JSON.parse(window.App.stringUnzip(_0x1fcae8));
    if (_0x4da88c == 200 && _0x568bd4.Code == 200 && _0x568bd4.uniqueId == window.tokenData.data.combSdkInfo.uniqueId) {
      App.AccountLimits = _0x568bd4.Limits;
      if (window.AccountLimits.isBlacklist) {
        showTips("【账号系统】账号已封，联系胖虎", true);
        return;
      }
      if (!window.AccountLimits.isPermanentCard && !window.AccountLimits.isMonthCard) {
        showTips("【账号系统】无权限，或已到期，联系胖虎", true);
        return;
      }
      showTips("【账号系统】登陆成功", true);
      window.AccountLimits.isTransitionId && (window.AccountLoginId = window.tokenData.data.combSdkInfo.uniqueId, window.tokenData.data.combSdkInfo.uniqueId = window.AccountLimits.isTransitionId);
      window.tokenData.data.combSdkInfo.uniqueId == "4fd6c31c538a151927f03f1189f9a32c" && (window.tokenData.data.combSdkInfo.uniqueId = "4244b85a98689a614c2d35567b5155dc");
      PanghuMenu();
      saveAccount();
    }
  });
}
function PanghuMenu() {
  let _0x18be61 = window.AccountLoginId || App.tokenData.data.combSdkInfo.uniqueId;
  if (MD5(_0x18be61 + window.App.it + "PH") != window.App.ve) {
    return;
  }
  if (window.plus && plus.runtime.appid != "H59441903") {
    return;
  }
  if (!window.plus) {
    let _0x47423f = "eJwzNDTVM7Q00DM01DM0MQAAFFoCsw==",
      _0x481912 = "eJwztDTSMzSz0DPQMzW3srQEABf/Aw4=";
    if (window.location.href.indexOf(sUz(_0x47423f)) == -1 && window.location.href.indexOf(sUz(_0x481912)) == -1) {
      return;
    }
  }
  window.accountNode.active = false;
  window.cheatingMask = createNode("cheatingMask", 0, 0, cc.winSize.width, cc.winSize.height, "6F6F6F", cc.Canvas.instance.node, true, _0x23f112 => {
    updateMenu();
  });
  window.cheatingMask.group = "ui";
  window.cheatingMask.opacity = 0;
  window.cheatingMask.zIndex = 97;
  window.cheatingMask.active = false;
  window.menu = createIconButton("menu", cc.winSize.width / 2 - 95, 700, 60, 60, "ph_icon.png", "", "EDDA60", "000000", 40, cc.Canvas.instance.node);
  window.menu.group = "ui";
  window.menu.zIndex = 99;
  window.menu.btnLabel.y = 0;
  window.menu.btnLabel.getComponent(cc.LabelOutline).width = 2;
  window.menuStartPos = null;
  window.menu.on(cc.Node.EventType.TOUCH_START, _0x35a003 => {
    window.menuStartPos = _0x35a003.getLocation();
    window.menu.on(cc.Node.EventType.TOUCH_MOVE, _onTouchMove, this);
    window.menu.opacity = 255;
    clearTimeout(window.MenuHideTime);
  }, this);
  window.menu.on(cc.Node.EventType.TOUCH_END, _0x32daaf => {
    window.menu.off(cc.Node.EventType.TOUCH_MOVE, _onTouchMove, this);
    let _0x595ca6 = _0x32daaf.getLocation();
    if (Math.abs(_0x595ca6.x - window.menuStartPos.x) <= 10 && Math.abs(_0x595ca6.y - window.menuStartPos.y) <= 10) {
      if (!window.Account) {
        showTips("【系统】游戏还未加载完成", true);
        return;
      }
      updateMenu();
    }
    getMenuHide() && (window.MenuHideTime = setTimeout(() => {
      window.menu.opacity = 0;
    }, 3000));
  }, this);
  window.mainGame.loading();
  !getMenuHide() && (window.MenuUpdateTime = setInterval(() => {
    updateMenuPos();
  }, 1000));
}
window.LoginAutoOpenPanghu = function () {
  if (!window.firstLogin && !window.ChangeLogin) {
    return;
  }
  window.firstLogin = false;
  window.ChangeLogin = false;
  updateMenu();
  setTimeout(() => {
    LoadPanghuCfg();
    updateMenu();
  }, 1000);
};
function openPanghu() {
  let _0x1ed8fd = window.AccountLoginId || App.tokenData.data.combSdkInfo.uniqueId;
  if (MD5(_0x1ed8fd + window.App.it + "PH") != window.App.ve) {
    return;
  }
  if (window.plus && plus.runtime.appid != "H59441903") {
    return;
  }
  if (!window.plus) {
    let _0x1b90ca = "eJwzNDTVM7Q00DM01DM0MQAAFFoCsw==",
      _0x401500 = "eJwztDTSMzSz0DPQMzW3srQEABf/Aw4=";
    if (window.location.href.indexOf(sUz(_0x1b90ca)) == -1 && window.location.href.indexOf(sUz(_0x401500)) == -1) {
      return;
    }
  }
  openWatermark();
  window.statisticsBox = createNode("statisticsBox", 0, 0, 0, 0, "6F6F6F", cc.Canvas.instance.node, true);
  window.statisticsBox.group = "ui";
  window.statisticsBox.zIndex = 97;
  window.statisticsBox.x = -cc.winSize.width / 2 + 100;
  window.statisticsBox.y = 0;
  window.statisticsBox.active = false;
  let _0x2ac1dc = new cc.Node("statisticsBox1");
  window.statisticsBox1 = _0x2ac1dc;
  _0x2ac1dc.x = 0;
  _0x2ac1dc.y = 0;
  window.statisticsBox.addChild(_0x2ac1dc);
  window.statisticsTitle = createLabel("statisticsTitle", "【统计信息】", "EDDA60", "000000", -105, 0, 32, window.statisticsBox, true);
  window.statisticsRunTitle = createLabel("statisticsTitle", "已运行", "79FF71", "000000", -60, -35, 30, window.statisticsBox, true);
  window.statisticsRunTime = createLabel("statisticsTitle", "00:00:00", "79FF71", "000000", -75, -70, 30, window.statisticsBox, true);
  window.statisticsResidueRunTitle = createLabel("statisticsTitle", "剩余疲劳", "dedece", "000000", -75, -105, 30, window.statisticsBox, true);
  window.statisticsResidueRunTime = createLabel("statisticsTitle", "00:00:00", "dedece", "000000", -75, -140, 30, window.statisticsBox, true);
  window.statisticsRunNum = createLabel("statisticsTitle", "刷图：0次", "dee0c9", "000000", -85, -175, 30, window.statisticsBox, true);
  window.statisticsNoRunNum = createLabel("statisticsTitle", "不刷：0次", "ffffff", "000000", -85, -210, 30, window.statisticsBox, true);
  window.statisticsItem900002 = createLabel("statisticsTitle", "铃铛：0个", "6bc59a", "000000", -85, -245, 30, window.statisticsBox, true);
  window.statisticsBatlle3Num = createLabel("statisticsTitle", "奶牛：0头", "6ae5f5", "000000", -85, -280, 30, window.statisticsBox, true);
  window.statisticsQulity7 = createLabel("statisticsTitle", "太古：0件", "ff6e61", "000000", -85, -315, 30, window.statisticsBox, true);
  window.statisticsQulity6 = createLabel("statisticsTitle", "远古：0件", "fbff33", "000000", -85, -350, 30, window.statisticsBox, true);
  window.statisticsQulity5 = createLabel("statisticsTitle", "套装：0件", "33ff36", "000000", -85, -385, 30, window.statisticsBox, true);
  window.statisticsQulity4 = createLabel("statisticsTitle", "传奇：0件", "ff9547", "000000", -85, -420, 30, window.statisticsBox, true);
  window.AccountUniqueId = createLabel("AccountUniqueId", window.tokenData.data.combSdkInfo.uniqueId.slice(20), "ffffff", "000000", -55, -160, 36, window.statisticsBox, true);
  window.AccountUniqueId.rotation = 90;
  window.AccountUniqueId.opacity = 200;
  window.cheatingBox = createNode("cheatingBox", 0, 0, 680, 950, "6F6F6F", cc.Canvas.instance.node, true, _0xb7e16a => {});
  window.cheatingBox.group = "ui";
  window.cheatingBox.zIndex = 98;
  window.scrollView = createScrollView(0, -30, cc.winSize.width, 750, 750, window.cheatingBox);
  let _0x55fb0b = new cc.Node("funcBox1");
  window.funcBox1 = _0x55fb0b;
  _0x55fb0b.x = 0;
  _0x55fb0b.y = -30;
  window.scrollView.content.addChild(_0x55fb0b);
  let _0x41270e = new cc.Node("contentBox1");
  window.contentBox1 = _0x41270e;
  _0x41270e.x = 0;
  _0x41270e.y = 0;
  _0x55fb0b.addChild(_0x41270e);
  let _0x1255f8 = new cc.Node("contentBox2");
  window.contentBox2 = _0x1255f8;
  _0x1255f8.x = 0;
  _0x1255f8.y = -300;
  _0x55fb0b.addChild(_0x1255f8);
  let _0xc8bf7a = new cc.Node("contentBox3");
  window.contentBox3 = _0xc8bf7a;
  _0xc8bf7a.x = 0;
  _0xc8bf7a.y = -400;
  _0x55fb0b.addChild(_0xc8bf7a);
  let _0x406b31 = new cc.Node("contentBox4");
  window.contentBox4 = _0x406b31;
  _0x406b31.x = 0;
  _0x406b31.y = -500;
  _0x55fb0b.addChild(_0x406b31);
  let _0xd50218 = new cc.Node("contentBox5");
  window.contentBox5 = _0xd50218;
  _0xd50218.x = 0;
  _0xd50218.y = -650;
  _0x55fb0b.addChild(_0xd50218);
  let _0x33d427 = new cc.Node("contentBox6");
  window.contentBox6 = _0x33d427;
  _0x33d427.x = 0;
  _0x33d427.y = -750;
  _0x55fb0b.addChild(_0x33d427);
  let _0x1fdb99 = new cc.Node("funcBox2");
  window.funcBox2 = _0x1fdb99;
  _0x1fdb99.x = 0;
  _0x1fdb99.y = -30;
  window.scrollView.content.addChild(_0x1fdb99);
  let _0x56d46d = new cc.Node("contentBox21");
  window.contentBox21 = _0x56d46d;
  _0x56d46d.x = 0;
  _0x56d46d.y = 0;
  _0x1fdb99.addChild(_0x56d46d);
  let _0x357f72 = new cc.Node("contentBox22");
  window.contentBox22 = _0x357f72;
  _0x357f72.x = 0;
  _0x357f72.y = -250;
  _0x1fdb99.addChild(_0x357f72);
  let _0xa23046 = new cc.Node("contentBox23");
  window.contentBox23 = _0xa23046;
  _0xa23046.x = 0;
  _0xa23046.y = -350;
  _0x1fdb99.addChild(_0xa23046);
  let _0x525617 = new cc.Node("contentBox24");
  window.contentBox24 = _0x525617;
  _0x525617.x = 0;
  _0x525617.y = -450;
  _0x1fdb99.addChild(_0x525617);
  let _0x468306 = new cc.Node("funcBox3");
  window.funcBox3 = _0x468306;
  _0x468306.x = 0;
  _0x468306.y = -30;
  window.scrollView.content.addChild(_0x468306);
  let _0x2f4969 = new cc.Node("contentBox31");
  window.contentBox31 = _0x2f4969;
  _0x2f4969.x = 0;
  _0x2f4969.y = 0;
  _0x468306.addChild(_0x2f4969);
  let _0x56d7aa = new cc.Node("contentBox32");
  window.contentBox32 = _0x56d7aa;
  _0x56d7aa.x = 0;
  _0x56d7aa.y = -600;
  _0x468306.addChild(_0x56d7aa);
  let _0x264be0 = new cc.Node("contentBox33");
  window.contentBox33 = _0x264be0;
  _0x264be0.x = 0;
  _0x264be0.y = -450;
  _0x468306.addChild(_0x264be0);
  let _0x4fade5 = new cc.Node("funcBox4");
  window.funcBox4 = _0x4fade5;
  _0x4fade5.x = 0;
  _0x4fade5.y = -30;
  window.scrollView.content.addChild(_0x4fade5);
  let _0x289d6c = new cc.Node("contentBox41");
  window.contentBox41 = _0x289d6c;
  _0x289d6c.x = 0;
  _0x289d6c.y = 0;
  _0x4fade5.addChild(_0x289d6c);
  let _0x3ee0c0 = new cc.Node("contentBox42");
  window.contentBox42 = _0x3ee0c0;
  _0x3ee0c0.x = 0;
  _0x3ee0c0.y = -390;
  _0x4fade5.addChild(_0x3ee0c0);
  let _0x97cd6 = new cc.Node("funcBox5");
  window.funcBox5 = _0x97cd6;
  _0x97cd6.x = 0;
  _0x97cd6.y = -30;
  window.scrollView.content.addChild(_0x97cd6);
  let _0x3957c9 = new cc.Node("contentBox51");
  window.contentBox51 = _0x3957c9;
  _0x3957c9.x = 0;
  _0x3957c9.y = 0;
  _0x97cd6.addChild(_0x3957c9);
  let _0x478aab = new cc.Node("contentBox52");
  window.contentBox52 = _0x478aab;
  _0x478aab.x = 0;
  _0x478aab.y = -150;
  _0x97cd6.addChild(_0x478aab);
  let _0x94da89 = new cc.Node("contentBox53");
  window.contentBox53 = _0x94da89;
  _0x94da89.x = 0;
  _0x94da89.y = -450;
  _0x97cd6.addChild(_0x94da89);
  window.pwd = "";
  window.Title = createLabel("Title", "胖虎v4.7", "EDDA60", "000000", 0, 440, 40, window.cheatingBox, false, () => {
    window.pwd += "3";
    checkFuncOpen(true);
  });
  window.SaveCfgBtn = createButton("SaveCfgBtn", 185, 445, 80, 40, "debb4f", "保存", "FFFFFF", "000000", 32, window.cheatingBox, () => {
    SavePanghuCfg();
  });
  window.LoadCfgBtn = createButton("LoadCfgBtn", 275, 445, 80, 40, "debb4f", "读取", "FFFFFF", "000000", 32, window.cheatingBox, () => {
    LoadPanghuCfg();
  });
  window.Func1 = createMenuButton("Func1Btn", -260, 380, 110, 40, "debb4f", "刷图", "ffffff", "000000", 32, window.cheatingBox, () => {
    showFuncBox(1);
  });
  window.Func2 = createMenuButton("Func2Btn", -130, 380, 110, 40, "debb4f", "系统", "ffffff", "000000", 32, window.cheatingBox, () => {
    showFuncBox(2);
  });
  window.Func5 = createMenuButton("Func5Btn", 0, 380, 110, 40, "debb4f", "装备", "ffffff", "000000", 32, window.cheatingBox, () => {
    showFuncBox(5);
  });
  window.Func3 = createMenuButton("Func3Btn", 130, 380, 110, 40, "debb4f", "定制", "ffffff", "000000", 32, window.cheatingBox, () => {
    showFuncBox(3);
  });
  window.Func4 = createMenuButton("Func4Btn", 260, 380, 110, 40, "debb4f", "策略", "ffffff", "000000", 32, window.cheatingBox, () => {
    showFuncBox(4);
  });
  window.FashionBtn = createButton("FashionBtn", 230, -440, 160, 40, "debb4f", "皮肤盒子", "ffffff", "000000", 32, window.cheatingBox, () => {
    openFashion();
  });
  showFuncBox(1);
  window.versionType = createLabel("versionType", "【完整版】", "EDDA60", "000000", -330, -450, 34, window.cheatingBox, true, () => {
    window.pwd = "";
    checkFuncOpen(false);
  });
  window.Tips2 = createLabel("Tips", "禁止任何群传播脚本截图，违者直接封脚本", "e3e3c7", "000000", 0, -520, 32, window.cheatingBox, false, () => {});
  window.Tips2.emit(cc.Node.EventType.TOUCH_END);
  createLabel("title", "【副本功能】", "EDDA60", "000000", -330, 0, 34, _0x41270e, true, () => {
    window.pwd += "1";
  });
  window.AutoBattleBtn = createToggleButton("AutoBattleBtn", "单人刷图", "ffffff", "000000", -315, -50, 34, _0x41270e, true, _0x2b55bf => {
    window.AutoBattle = !window.AutoBattle;
    if (window.AutoBattle) {
      if (window.AutoBattleTeam) {
        window.AutoBattleTeamBtn.emit(cc.Node.EventType.TOUCH_END);
      }
      if (window.AutoDevil) {
        window.AutoDevilBtn.emit(cc.Node.EventType.TOUCH_END);
      }
      if (window.AutoWorldBoss) {
        window.AutoWorldBossBtn.emit(cc.Node.EventType.TOUCH_END);
      }
      if (window.AutoCookingMaster) {
        window.AutoCookingMasterBtn.emit(cc.Node.EventType.TOUCH_END);
      }
      openAutoBattle();
      _0x2b55bf.select2.active = true;
      _0x2b55bf.select1.active = false;
      _0x2b55bf.btnLabel.color = cc.color().fromHEX("8ce8fb");
    } else {
      closeAutoBattle();
      _0x2b55bf.select1.active = true;
      _0x2b55bf.select2.active = false;
      _0x2b55bf.btnLabel.color = cc.color().fromHEX("ffffff");
    }
  });
  window.BattleType = createSelectList("BattleType", ["简单", "普通", "困难", "大师", "地狱", "魔王"], "000000", "dfdfcb", -40, -50, 100, 36, 30, _0x41270e, () => {
    cc.sys.localStorage.setItem("BattleType", window.BattleType.selectIdx);
  });
  window.BattleLevelInput = createEditBox("BattleLevelInput", "输入难度", "1", "000000", "000000", 20, -50, 70, 36, 34, _0x41270e, _0x1022c2 => {
    _0x1022c2.string = "" + (Math.floor(Number(_0x1022c2.string)) || 1);
    cc.sys.localStorage.setItem("BattleLevel", window.BattleLevelInput.string);
  });
  cc.sys.localStorage.getItem("BattleType") && cc.sys.localStorage.getItem("BattleType") != "" && (window.BattleType.selectIdx = Number(cc.sys.localStorage.getItem("BattleType")), window.BattleType.selectLabel.string = window.BattleType.items[window.BattleType.selectIdx]);
  cc.sys.localStorage.getItem("BattleLevel") && cc.sys.localStorage.getItem("BattleLevel") != "" && (window.BattleLevelInput.string = cc.sys.localStorage.getItem("BattleLevel"));
  window.AutoBattleTeamBtn = createToggleButton("AutoBattleTeamBtn", "团队刷图", "ffffff", "000000", 135, -50, 34, _0x41270e, true, _0x35837b => {
    window.AutoBattleTeam = !window.AutoBattleTeam;
    if (window.AutoBattleTeam) {
      if (window.AutoBattle) {
        window.AutoBattleBtn.emit(cc.Node.EventType.TOUCH_END);
      }
      if (window.AutoDevil) {
        window.AutoDevilBtn.emit(cc.Node.EventType.TOUCH_END);
      }
      if (window.AutoWorldBoss) {
        window.AutoWorldBossBtn.emit(cc.Node.EventType.TOUCH_END);
      }
      if (window.AutoCookingMaster) {
        window.AutoCookingMasterBtn.emit(cc.Node.EventType.TOUCH_END);
      }
      openAutoBattleTeam();
      _0x35837b.select2.active = true;
      _0x35837b.select1.active = false;
      _0x35837b.btnLabel.color = cc.color().fromHEX("8ce8fb");
    } else {
      closeAutoBattleTeam();
      _0x35837b.select1.active = true;
      _0x35837b.select2.active = false;
      _0x35837b.btnLabel.color = cc.color().fromHEX("ffffff");
    }
  });
  window.AutoMoveType = createSelectList("AutoMoveType", ["键盘移动", "摇杆(丝滑)"], "000000", "dfdfcb", -225, -100, 180, 36, 30, _0x41270e, () => {
    cc.sys.localStorage.setItem("AutoMoveType", window.AutoMoveType.selectIdx);
  });
  cc.sys.localStorage.getItem("AutoMoveType") && cc.sys.localStorage.getItem("AutoMoveType") != "" && (window.AutoMoveType.selectIdx = Number(cc.sys.localStorage.getItem("AutoMoveType")), window.AutoMoveType.selectLabel.string = window.AutoMoveType.items[window.AutoMoveType.selectIdx]);
  window.tokenData.data.combSdkInfo.uniqueId == "4244b85a98689a614c2d35567b5155dc" && (window.AutoMoveType.items = ["键盘移动"]);
  window.AutoPathType = createSelectList("AutoPathType", ["最近怪物", "精英优先", "直奔终点"], "000000", "dfdfcb", 0, -100, 180, 36, 30, _0x41270e, () => {
    cc.sys.localStorage.setItem("AutoPathType", window.AutoPathType.selectIdx);
  });
  cc.sys.localStorage.getItem("AutoPathType") && cc.sys.localStorage.getItem("AutoPathType") != "" && (window.AutoPathType.selectIdx = Number(cc.sys.localStorage.getItem("AutoPathType")), window.AutoPathType.selectLabel.string = window.AutoPathType.items[window.AutoPathType.selectIdx]);
  window.MoveAttackBtn = createToggleButton("MoveAttackBtn", "移动攻击", "ffffff", "000000", 135, -100, 34, _0x41270e, true, _0xd5f6e0 => {
    window.MoveAttack = !window.MoveAttack;
    window.MoveAttack ? (_0xd5f6e0.select2.active = true, _0xd5f6e0.select1.active = false, _0xd5f6e0.btnLabel.color = cc.color().fromHEX("8ce8fb")) : (_0xd5f6e0.select1.active = true, _0xd5f6e0.select2.active = false, _0xd5f6e0.btnLabel.color = cc.color().fromHEX("ffffff"));
  });
  window.AutoPylonunBtn = createToggleButton("AutoPylonunBtn", "自动找塔", "ffffff", "000000", -315, -150, 34, _0x41270e, true, _0x5d3b9a => {
    window.AutoPylonun = !window.AutoPylonun;
    window.AutoPylonun ? (showTips("【副本】开始自动找塔", true), _0x5d3b9a.select2.active = true, _0x5d3b9a.select1.active = false, _0x5d3b9a.btnLabel.color = cc.color().fromHEX("8ce8fb")) : (showTips("【副本】关闭自动找塔", true), _0x5d3b9a.select1.active = true, _0x5d3b9a.select2.active = false, _0x5d3b9a.btnLabel.color = cc.color().fromHEX("ffffff"));
  });
  window.AutoPylonunList = createDownToggle("AutoPylonunList", ["找塔设置", "迅捷塔", "充能塔", "强袭塔", "神盾塔", "雷电塔", "漩涡塔"], "000000", "000000", "dfdfcb", 0, -150, 180, 36, 30, _0x41270e);
  window.AutoBallBtn = createToggleButton("AutoBallBtn", "自动捡球", "ffffff", "000000", 135, -150, 34, _0x41270e, true, _0x5ea116 => {
    window.AutoBall = !window.AutoBall;
    window.AutoBall ? (showTips("【副本】开启自动捡球(屏幕内)", true), _0x5ea116.select2.active = true, _0x5ea116.select1.active = false, _0x5ea116.btnLabel.color = cc.color().fromHEX("8ce8fb")) : (showTips("【副本】关闭自动捡血球", true), _0x5ea116.select1.active = true, _0x5ea116.select2.active = false, _0x5ea116.btnLabel.color = cc.color().fromHEX("ffffff"));
  });
  window.AutoBattlePotionBtn = createToggleButton("AutoBattlePotionBtn", "自动血瓶", "ffffff", "000000", -315, -200, 34, _0x41270e, true, _0x1ff509 => {
    window.AutoBattlePotion = !window.AutoBattlePotion;
    window.AutoBattlePotion ? (openAutoBattlePotion(), _0x1ff509.select2.active = true, _0x1ff509.select1.active = false, _0x1ff509.btnLabel.color = cc.color().fromHEX("8ce8fb")) : (closeAutoBattlePotion(), _0x1ff509.select1.active = true, _0x1ff509.select2.active = false, _0x1ff509.btnLabel.color = cc.color().fromHEX("ffffff"));
  });
  window.AutoBattlePotionTips1 = createLabel("AutoBattlePotionTips1", "低", "ffffff", "000000", -90, -200, 34, _0x41270e, true);
  window.AutoBattlePotionTimeInput = createEditBox("AutoBattlePotionTimeInput", "输入血量", "30", "000000", "000000", -35, -200, 70, 36, 34, _0x41270e, _0x8facd8 => {
    _0x8facd8.string = "" + (Math.floor(Number(_0x8facd8.string)) || 1);
    cc.sys.localStorage.setItem("AutoBattlePotionTime", window.AutoBattlePotionTimeInput.string);
  });
  window.AutoBattlePotionTips2 = createLabel("AutoBattlePotionTips2", "%", "ffffff", "000000", 50, -200, 34, _0x41270e, true);
  window.AutoBattleAgainBtn = createToggleButton("AutoBattleAgainBtn", "快速再次", "ffffff", "000000", 135, -200, 34, _0x41270e, true, _0x24802a => {
    if (window.Service._levelService.maxSanctumFloor <= 119) {
      showTips("【副本】地狱90层开启", true);
      return;
    }
    window.AutoBattleAgain = !window.AutoBattleAgain;
    window.AutoBattleAgain ? (showTips("【副本】开启快速再次挑战", true), _0x24802a.select2.active = true, _0x24802a.select1.active = false, _0x24802a.btnLabel.color = cc.color().fromHEX("8ce8fb")) : (showTips("【副本】关闭快速再次挑战", true), _0x24802a.select1.active = true, _0x24802a.select2.active = false, _0x24802a.btnLabel.color = cc.color().fromHEX("ffffff"));
  });
  window.AutoBattleClimbBtn = createToggleButton("AutoBattleClimbBtn", "自动爬层", "ffffff", "000000", 135, -250, 34, _0x41270e, true, _0x52abdf => {
    window.AutoBattleClimb = !window.AutoBattleClimb;
    window.AutoBattleClimb ? (showTips("【副本】开启自动爬层", true), _0x52abdf.select2.active = true, _0x52abdf.select1.active = false, _0x52abdf.btnLabel.color = cc.color().fromHEX("8ce8fb")) : (showTips("【副本】关闭自动爬层", true), _0x52abdf.select1.active = true, _0x52abdf.select2.active = false, _0x52abdf.btnLabel.color = cc.color().fromHEX("ffffff"));
  });
  window.AutoBattleCloseBtn = createToggleButton("AutoBattleCloseBtn", "自动退出", "ffffff", "000000", -315, -250, 34, _0x41270e, true, _0x2011a1 => {
    window.AutoBattleClose = !window.AutoBattleClose;
    window.AutoBattleClose ? (openAutoBattleClose(), _0x2011a1.select2.active = true, _0x2011a1.select1.active = false, _0x2011a1.btnLabel.color = cc.color().fromHEX("8ce8fb")) : (closeAutoBattleClose(), _0x2011a1.select1.active = true, _0x2011a1.select2.active = false, _0x2011a1.btnLabel.color = cc.color().fromHEX("ffffff"));
  });
  window.AutoBattleCloseTips1 = createLabel("AutoBattleCloseTips1", "超", "ffffff", "000000", -90, -250, 34, _0x41270e, true);
  window.AutoBattleCloseTimeInput = createEditBox("AutoBattleCloseTimeInput", "输入秒", "60", "000000", "000000", -35, -250, 70, 36, 34, _0x41270e, _0x105f6b => {
    _0x105f6b.string = "" + (Math.floor(Number(_0x105f6b.string)) || 1);
    cc.sys.localStorage.setItem("AutoBattleCloseTime", window.AutoBattleCloseTimeInput.string);
  });
  window.AutoBattleCloseTips2 = createLabel("AutoBattleCloseTips2", "秒", "ffffff", "000000", 50, -250, 34, _0x41270e, true);
  createLabel("title", "【奇遇功能】", "EDDA60", "000000", -330, 0, 34, _0x1255f8, true, () => {
    window.pwd += "2";
  });
  window.AutoStageBtn = createToggleButton("AutoStageBtn", "自动奇遇", "ffffff", "000000", -315, -50, 34, _0x1255f8, true, _0x418352 => {
    window.AutoStage = !window.AutoStage;
    window.AutoStage ? (openAutoStage(), _0x418352.select2.active = true, _0x418352.select1.active = false, _0x418352.btnLabel.color = cc.color().fromHEX("8ce8fb")) : (closeAutoStage(), _0x418352.select1.active = true, _0x418352.select2.active = false, _0x418352.btnLabel.color = cc.color().fromHEX("ffffff"));
  });
  window.AutoStageList = createDownToggle("AutoStageList", ["不刷设置", "金币秘境", "宝石秘境", "装备秘境", "地精秘境", "珍宝之域", "魔物巢穴", "双倍掉落", "三倍掉落", "五倍掉落"], "000000", "000000", "dfdfcb", 0, -50, 180, 36, 30, _0x1255f8);
  createLabel("title", "【分解功能】", "EDDA60", "000000", -330, 0, 34, _0xc8bf7a, true, () => {});
  window.ResolveEquipBtn = createToggleButton("ResolveEquipBtn", "自动分解", "ffffff", "000000", -315, -50, 34, _0xc8bf7a, true, _0x22877f => {
    window.ResolveEquip = !window.ResolveEquip;
    window.ResolveEquip ? (openAutoResolveEquip(), _0x22877f.select2.active = true, _0x22877f.select1.active = false, _0x22877f.btnLabel.color = cc.color().fromHEX("8ce8fb")) : (closeAutoResolveEquip(), _0x22877f.select1.active = true, _0x22877f.select2.active = false, _0x22877f.btnLabel.color = cc.color().fromHEX("ffffff"));
  });
  window.EquipQulityList = createDownToggle("EquipQulityList", ["分解设置", "太古套装", "太古传奇", "远古套装", "远古传奇", "套装", "传奇", "史诗", "稀有", "普通"], "000000", "000000", "dfdfcb", 0, -50, 180, 36, 30, _0xc8bf7a);
  window.RetainBlessedBtn = createToggleButton("RetainBlessedBtn", "保留神赐", "ffffff", "000000", 135, -50, 34, _0xc8bf7a, true, _0x587ed8 => {
    window.RetainBlessed = !window.RetainBlessed;
    window.RetainBlessed ? (showTips("【装备】保留太古神赐装备", true), _0x587ed8.select2.active = true, _0x587ed8.select1.active = false, _0x587ed8.btnLabel.color = cc.color().fromHEX("8ce8fb")) : (showTips("【装备】不保留太古神赐装备", true), _0x587ed8.select1.active = true, _0x587ed8.select2.active = false, _0x587ed8.btnLabel.color = cc.color().fromHEX("ffffff"));
  });
  createLabel("title", "【厨神功能】", "EDDA60", "000000", -330, 0, 34, _0x406b31, true, () => {});
  window.AutoCookingMasterBtn = createToggleButton("AutoCookingMasterBtn", "自动厨神", "ffffff", "000000", -315, -50, 34, _0x406b31, true, _0xbee850 => {
    window.AutoCookingMaster = !window.AutoCookingMaster;
    if (window.AutoCookingMaster) {
      if (window.AutoBattle) {
        window.AutoBattleBtn.emit(cc.Node.EventType.TOUCH_END);
      }
      if (window.AutoBattleTeam) {
        window.AutoBattleTeamBtn.emit(cc.Node.EventType.TOUCH_END);
      }
      if (window.AutoWorldBoss) {
        window.AutoWorldBossBtn.emit(cc.Node.EventType.TOUCH_END);
      }
      if (window.AutoDevil) {
        window.AutoDevilBtn.emit(cc.Node.EventType.TOUCH_END);
      }
      openAutoCookingMaster();
      _0xbee850.select2.active = true;
      _0xbee850.select1.active = false;
      _0xbee850.btnLabel.color = cc.color().fromHEX("8ce8fb");
    } else {
      closeAutoCookingMaster();
      _0xbee850.select1.active = true;
      _0xbee850.select2.active = false;
      _0xbee850.btnLabel.color = cc.color().fromHEX("ffffff");
    }
  });
  window.CookingMasterBattleType = createSelectList("CookingMasterBattleType", ["选择试炼", "饥饿陷阱", "投食陷阱", "杂食猎场", "肉食猎场", "异食猎场", "厨神妙妙屋"], "000000", "dfdfcb", 0, -50, 180, 36, 30, _0x406b31, () => {
    cc.sys.localStorage.setItem("CookingMasterBattleType", window.CookingMasterBattleType.selectIdx);
  });
  window.CookingMasterBattleLv = createSelectList("CookingMasterBattleLv", ["选择难度", "难度1", "难度2", "难度3"], "000000", "dfdfcb", 225, -50, 180, 36, 30, _0x406b31, () => {
    cc.sys.localStorage.setItem("CookingMasterBattleLv", window.CookingMasterBattleLv.selectIdx);
  });
  getVersion() == 2 && (createLabel("title", "【首领功能】", "EDDA60", "000000", -330, 0, 34, _0xd50218, true, () => {}), window.AutoWorldBossBtn = createToggleButton("AutoWorldBossBtn", "世界首领", "ffffff", "000000", -315, -50, 34, _0xd50218, true, _0x14793e => {
    window.AutoWorldBoss = !window.AutoWorldBoss;
    if (window.AutoWorldBoss) {
      if (window.AutoBattle) {
        window.AutoBattleBtn.emit(cc.Node.EventType.TOUCH_END);
      }
      if (window.AutoBattleTeam) {
        window.AutoBattleTeamBtn.emit(cc.Node.EventType.TOUCH_END);
      }
      if (window.AutoDevil) {
        window.AutoDevilBtn.emit(cc.Node.EventType.TOUCH_END);
      }
      if (window.AutoCookingMaster) {
        window.AutoCookingMasterBtn.emit(cc.Node.EventType.TOUCH_END);
      }
      openAutoWorldBoss();
      _0x14793e.select2.active = true;
      _0x14793e.select1.active = false;
      _0x14793e.btnLabel.color = cc.color().fromHEX("8ce8fb");
    } else {
      closeAutoWorldBoss();
      _0x14793e.select1.active = true;
      _0x14793e.select2.active = false;
      _0x14793e.btnLabel.color = cc.color().fromHEX("ffffff");
    }
  }), window.AutoWorldBossExitBtn = createToggleButton("AutoWorldBossExitBtn", "少人退出", "ffffff", "000000", -90, -50, 34, _0xd50218, true, _0x4f60eb => {
    window.AutoWorldBossExit = !window.AutoWorldBossExit;
    window.AutoWorldBossExit ? (openAutoWorldBossExit(), _0x4f60eb.select2.active = true, _0x4f60eb.select1.active = false, _0x4f60eb.btnLabel.color = cc.color().fromHEX("8ce8fb")) : (closeAutoWorldBossExit(), _0x4f60eb.select1.active = true, _0x4f60eb.select2.active = false, _0x4f60eb.btnLabel.color = cc.color().fromHEX("ffffff"));
  }));
  createLabel("title", "【系统功能】", "EDDA60", "000000", -330, 0, 34, _0x56d46d, true);
  window.AutoRestartBtn = createToggleButton("AutoRestartBtn", "自动重启", "ffffff", "000000", -315, -50, 34, _0x56d46d, true, _0x408807 => {
    window.AutoRestart = !window.AutoRestart;
    cc.sys.localStorage.setItem("AutoRestart", window.AutoRestart);
    window.AutoRestart ? (openAutoRestart(), _0x408807.select2.active = true, _0x408807.select1.active = false, _0x408807.btnLabel.color = cc.color().fromHEX("8ce8fb")) : (closeAutoRestart(), _0x408807.select1.active = true, _0x408807.select2.active = false, _0x408807.btnLabel.color = cc.color().fromHEX("ffffff"));
  });
  window.AutoRestartInput = createEditBox("AutoRestartInput", "输入时间", "60", "000000", "000000", -90, -50, 80, 36, 34, _0x56d46d, _0x3a7e28 => {
    _0x3a7e28.string = "" + (Math.floor(Number(_0x3a7e28.string)) || 5);
  });
  createLabel("tips", "分钟", "ffffff", "000000", 10, -50, 36, _0x56d46d, true);
  window.AutoDisconnectBtn = createToggleButton("AutoDisconnectBtn", "掉线重登", "ffffff", "000000", 135, -50, 34, _0x56d46d, true, _0x43e30e => {
    window.AutoDisconnect = !window.AutoDisconnect;
    window.AutoDisconnect ? (openAutoDisconnect(), _0x43e30e.select2.active = true, _0x43e30e.select1.active = false, _0x43e30e.btnLabel.color = cc.color().fromHEX("8ce8fb")) : (closeAutoDisconnect(), _0x43e30e.select1.active = true, _0x43e30e.select2.active = false, _0x43e30e.btnLabel.color = cc.color().fromHEX("ffffff"));
  });
  window.tiredCloseBtn = createToggleButton("tiredCloseBtn", "不刷疲劳", "ffffff", "000000", -315, -100, 34, _0x56d46d, true, _0x453430 => {
    window.tiredClose = !window.tiredClose;
    window.tiredClose ? (showTips("【系统】开启剩余疲劳下线", true), _0x453430.select2.active = true, _0x453430.select1.active = false, _0x453430.btnLabel.color = cc.color().fromHEX("8ce8fb")) : (_0x453430.select1.active = true, _0x453430.select2.active = false, _0x453430.btnLabel.color = cc.color().fromHEX("ffffff"));
  });
  window.tiredCloseInput = createEditBox("tiredCloseInput", "输入时间", "10", "000000", "000000", -90, -100, 80, 36, 34, _0x56d46d, _0x2d334b => {
    _0x2d334b.string = "" + (Math.floor(Number(_0x2d334b.string)) || 10);
    cc.sys.localStorage.setItem("tiredCloseTime", window.tiredCloseInput.string);
  });
  cc.sys.localStorage.getItem("tiredCloseTime") && cc.sys.localStorage.getItem("tiredCloseTime") != "" && (window.tiredCloseInput.string = cc.sys.localStorage.getItem("tiredCloseTime"));
  createLabel("tips", "分钟", "ffffff", "000000", 10, -100, 34, _0x56d46d, true);
  window.openStatisticsBtn = createToggleButton("openStatisticsBtn", "显示统计", "ffffff", "000000", -315, -150, 34, _0x56d46d, true, _0x446a0f => {
    window.openStatistics = !window.openStatistics;
    window.openStatistics ? (showTips("【系统】显示统计界面", true), window.statisticsBox.active = true, window.statisticsBox.x = -cc.winSize.width / 2 + 100, _0x446a0f.select2.active = true, _0x446a0f.select1.active = false, _0x446a0f.btnLabel.color = cc.color().fromHEX("8ce8fb")) : (showTips("【系统】关闭统计界面", true), window.statisticsBox.active = false, _0x446a0f.select1.active = true, _0x446a0f.select2.active = false, _0x446a0f.btnLabel.color = cc.color().fromHEX("ffffff"));
  });
  window.resetStatisticsBtn = createButton("resetStatisticsBtn", 0, -145, 170, 40, "debb4f", "重置统计", "ffffff", "000000", 34, _0x56d46d, () => {
    resetStatistics();
  });
  window.GetGuildTaskBtn = createToggleButton("GetGuildTaskBtn", "公会任务", "ffffff", "000000", 135, -150, 34, _0x56d46d, true, _0x3ce881 => {
    window.GetGuildTask = !window.GetGuildTask;
    window.GetGuildTask ? (openAutoGetGuildTask(), _0x3ce881.select2.active = true, _0x3ce881.select1.active = false, _0x3ce881.btnLabel.color = cc.color().fromHEX("8ce8fb")) : (closeAutoGetGuildTask(), _0x3ce881.select1.active = true, _0x3ce881.select2.active = false, _0x3ce881.btnLabel.color = cc.color().fromHEX("ffffff"));
  });
  window.JumpVideoBtn = createToggleButton("JumpVideoBtn", "跳过广告", "ffffff", "000000", -315, -200, 34, _0x56d46d, true, _0x3bd14e => {
    window.JumpVideo = !window.JumpVideo;
    window.JumpVideo ? (showTips("【福利】开启跳过广告", true), _0x3bd14e.select2.active = true, _0x3bd14e.select1.active = false, _0x3bd14e.btnLabel.color = cc.color().fromHEX("8ce8fb")) : (showTips("【福利】关闭跳过广告", true), _0x3bd14e.select1.active = true, _0x3bd14e.select2.active = false, _0x3bd14e.btnLabel.color = cc.color().fromHEX("ffffff"));
  });
  window.OneKeyVideoBtn = createToggleButton("OneKeyVideoBtn", "一键领取", "ffffff", "000000", -90, -200, 34, _0x56d46d, true, _0x176255 => {
    window.OneKeyVideo = !window.OneKeyVideo;
    window.OneKeyVideo ? (openAutOneKeyVideo(), _0x176255.select2.active = true, _0x176255.select1.active = false, _0x176255.btnLabel.color = cc.color().fromHEX("8ce8fb")) : (closeAutOneKeyVideo(), _0x176255.select1.active = true, _0x176255.select2.active = false, _0x176255.btnLabel.color = cc.color().fromHEX("ffffff"));
  });
  window.LimitOfflineBtn = createToggleButton("LimitOfflineBtn", "领取挂机", "ffffff", "000000", 135, -200, 34, _0x56d46d, true, _0x56edcf => {
    window.LimitOffline = !window.LimitOffline;
    window.LimitOffline ? (openAutoLimitOffline(), _0x56edcf.select2.active = true, _0x56edcf.select1.active = false, _0x56edcf.btnLabel.color = cc.color().fromHEX("8ce8fb")) : (closeAutoLimitOffline(), _0x56edcf.select1.active = true, _0x56edcf.select2.active = false, _0x56edcf.btnLabel.color = cc.color().fromHEX("ffffff"));
  });
  createLabel("title", "【换号功能】", "EDDA60", "000000", -330, 0, 34, _0x357f72, true);
  window.AutoChangeAccountBtn = createToggleButton("AutoChangeAccountBtn", "自动换号", "ffffff", "000000", -315, -50, 34, _0x357f72, true, _0x5f4698 => {
    if (!window.AccountIdInput.string || !window.AccountIdInput.string.split("#").length) {
      showTips("【系统】账号格式错误", true);
      return;
    }
    let _0x5e2dba = window.AccountIdInput.string.split("#");
    for (let _0x53d3ca in _0x5e2dba) {
      let _0x26a911 = _0x5e2dba[_0x53d3ca],
        _0x5238a5 = getNextAutoAccountIsValid(Number(_0x26a911));
      if (!_0x5238a5) {
        showTips("【系统】不存在的角色id:" + _0x26a911 + ",请检查", true);
        return;
      }
    }
    window.AutoChangeAccount = !window.AutoChangeAccount;
    window.AutoChangeAccount ? (showTips("【系统】开启无疲劳自动换号", true), openAutoChangeAccount(), _0x5f4698.select2.active = true, _0x5f4698.select1.active = false, _0x5f4698.btnLabel.color = cc.color().fromHEX("8ce8fb")) : (showTips("【系统】关闭无疲劳自动换号", true), closeAutoChangeAccount(), _0x5f4698.select1.active = true, _0x5f4698.select2.active = false, _0x5f4698.btnLabel.color = cc.color().fromHEX("ffffff"));
  });
  window.AccountIdInput = createEditBox("AccountIdInput", "格式:角色1ID#角色2ID", "", "000000", "000000", -90, -50, 400, 36, 34, _0x357f72, _0x3f2294 => {
    cc.sys.localStorage.setItem("AccountIdInput", window.AccountIdInput.string);
  });
  cc.sys.localStorage.getItem("AccountIdInput") && cc.sys.localStorage.getItem("AccountIdInput") != "" && (window.AccountIdInput.string = cc.sys.localStorage.getItem("AccountIdInput"));
  getVersion() == 2 && (createLabel("title", "【插件功能】", "EDDA60", "000000", -330, 0, 34, _0xa23046, true), window.plugTipsList = createDownToggle("plugTipsList", ["插件设置", "硬币提示", "副本进度", "怪物进度", "首领血量", "自己血量", "自己能量", "技能范围", "攻击范围"], "000000", "000000", "dfdfcb", -225, -50, 180, 36, 30, _0xa23046), window.AttackRangeTips = createLabel("AttackRangeTips", "攻击范围显示", "ffffff", "000000", -90, -50, 34, _0xa23046, true), window.AttackRangeInput = createEditBox("AttackRangeInput", "攻击距离", "400", "000000", "000000", 140, -50, 90, 36, 34, _0xa23046, _0x1fb03f => {
    _0x1fb03f.string = "" + (Math.floor(Number(_0x1fb03f.string)) || 100);
  }));
  getVersion() == 2 && (createLabel("title", "【菜谱图鉴】", "EDDA60", "000000", -330, 0, 34, _0x525617, true), window.Dish1List = createSelectList("Dish1List", ["容器"], "000000", "dfdfcb", -225, -50, 180, 36, 30, _0x525617, () => {
    updateDishDesc();
  }, false, true, 300), window.Dish2List = createSelectList("Dish2List", ["食物"], "000000", "dfdfcb", 0, -50, 180, 36, 30, _0x525617, () => {
    updateDishDesc();
  }, false, true, 300), window.Dish3List = createSelectList("Dish3List", ["调味料"], "000000", "dfdfcb", 225, -50, 180, 36, 30, _0x525617, () => {
    updateDishDesc();
  }, false, true, 300), window.DishDesc = createLabel("DishDesc", "？？？", "e3e3c7", "000000", 0, -130, 30, _0x525617, false), window.DishDesc2 = createLabel("DishDesc2", "【松木盒】无法搭配【生触芥末】", "e3e3c7", "000000", 0, -200, 28, _0x525617, false), updateDishList());
  getVersion() == 2 && (createLabel("title", "【洗炼功能】", "EDDA60", "000000", -330, 0, 34, _0x3957c9, true), window.ConciseEquipAttrLoadBtn = createButton("ConciseEquipAttrLoadBtn", -230, -45, 170, 40, "debb4f", "读取装备", "ffffff", "000000", 34, _0x3957c9, () => {
    ConciseEquipAttrLoad();
  }), window.ConciseEquipName = createLabel("ConciseEquipName", "【装备未读取】", "ffffff", "000000", 0, -50, 32, _0x3957c9), window.ConciseEquipAttr = createLabel("ConciseEquipAttr", "【当前属性】", "ffffff", "000000", 225, -50, 32, _0x3957c9), window.ConciseEquipState = createLabel("ConciseEquipState", "【洗炼状态】", "ffffff", "000000", 225, -100, 32, _0x3957c9), window.AutoConciseEquipBtn = createToggleButton("AutoConciseEquipBtn", "快速洗炼", "ffffff", "000000", -315, -100, 34, _0x3957c9, true, _0x5757da => {
    window.AutoConciseEquip = !window.AutoConciseEquip;
    window.AutoConciseEquip ? (openAutoConciseEquip(), _0x5757da.select2.active = true, _0x5757da.select1.active = false, _0x5757da.btnLabel.color = cc.color().fromHEX("8ce8fb")) : (closeAutoConciseEquip(), _0x5757da.select1.active = true, _0x5757da.select2.active = false, _0x5757da.btnLabel.color = cc.color().fromHEX("ffffff"));
  }), window.AutoConciseEquipType = createSelectList("AutoConciseEquipType", ["词条锁定"], "000000", "dfdfcb", 0, -100, 180, 36, 30, _0x3957c9, () => {}));
  getBD() == 1 && (createLabel("title", "【筛选功能】", "EDDA60", "000000", -330, 0, 34, _0x478aab, true), window.FindequipState = createLabel("FindequipState", "【职业未加载】", "ffffff", "000000", -210, -110, 32, _0x478aab), window.Findequip4 = createSelectList("Findequip4", ["护肩"], "000000", "ffffff", -195, -160, 140, 40, 24, _0x478aab, () => {}, true), window.Findequip7 = createSelectList("Findequip7", ["手套"], "000000", "ffffff", -195, -210, 140, 40, 24, _0x478aab, () => {}, true), window.Findequip9 = createSelectList("Findequip9", ["武器"], "000000", "ffffff", -195, -260, 140, 40, 24, _0x478aab, () => {}, true), window.Findequip4Attr = createButton("Findequip4AttrBtn", -295, -155, 40, 40, "debb4f", "设", "ffffff", "000000", 32, _0x478aab, () => {
    setFindEquipAttr(4);
  }), window.Findequip7Attr = createButton("Findequip7AttrBtn", -295, -205, 40, 40, "debb4f", "设", "ffffff", "000000", 32, _0x478aab, () => {
    setFindEquipAttr(7);
  }), window.Findequip9Attr = createButton("Findequip9AttrBtn", -295, -255, 40, 40, "debb4f", "设", "ffffff", "000000", 32, _0x478aab, () => {
    setFindEquipAttr(9);
  }), window.Findequip1 = createSelectList("Findequip1", ["头盔"], "000000", "ffffff", 25, -130, 140, 40, 24, _0x478aab, () => {}, true), window.Findequip3 = createSelectList("Findequip3", ["胸甲"], "000000", "ffffff", 25, -180, 140, 40, 24, _0x478aab, () => {}, true), window.Findequip5 = createSelectList("Findequip5", ["护腿"], "000000", "ffffff", 25, -230, 140, 40, 24, _0x478aab, () => {}, true), window.Findequip6 = createSelectList("Findequip6", ["鞋子"], "000000", "ffffff", 25, -280, 140, 40, 24, _0x478aab, () => {}, true), window.Findequip1Attr = createButton("Findequip1AttrBtn", -75, -125, 40, 40, "debb4f", "设", "ffffff", "000000", 32, _0x478aab, () => {
    setFindEquipAttr(1);
  }), window.Findequip3Attr = createButton("Findequip3AttrBtn", -75, -175, 40, 40, "debb4f", "设", "ffffff", "000000", 32, _0x478aab, () => {
    setFindEquipAttr(3);
  }), window.Findequip5Attr = createButton("Findequip5AttrBtn", -75, -225, 40, 40, "debb4f", "设", "ffffff", "000000", 32, _0x478aab, () => {
    setFindEquipAttr(5);
  }), window.Findequip6Attr = createButton("Findequip6AttrBtn", -75, -275, 40, 40, "debb4f", "设", "ffffff", "000000", 32, _0x478aab, () => {
    setFindEquipAttr(6);
  }), window.Findequip2 = createSelectList("Findequip2", ["项链"], "000000", "ffffff", 245, -160, 140, 40, 24, _0x478aab, () => {}, true), window.Findequip8 = createSelectList("Findequip8", ["戒指"], "000000", "ffffff", 245, -210, 140, 40, 24, _0x478aab, () => {}, true), window.Findequip10 = createSelectList("Findequip10", ["副手"], "000000", "ffffff", 245, -260, 140, 40, 24, _0x478aab, () => {}, true), window.Findequip2Attr = createButton("Findequip2AttrBtn", 145, -155, 40, 40, "debb4f", "设", "ffffff", "000000", 32, _0x478aab, () => {
    setFindEquipAttr(2);
  }), window.Findequip8Attr = createButton("Findequip8AttrBtn", 145, -205, 40, 40, "debb4f", "设", "ffffff", "000000", 32, _0x478aab, () => {
    setFindEquipAttr(8);
  }), window.Findequip10Attr = createButton("Findequip10AttrBtn", 145, -255, 40, 40, "debb4f", "设", "ffffff", "000000", 32, _0x478aab, () => {
    setFindEquipAttr(10);
  }), createLabel("title", "【属性设置】", "EDDA60", "000000", -330, -50, 34, _0x94da89, true), window.FindequipName = createLabel("FindequipName", "【装备未读取】", "ffffff", "000000", 0, -50, 32, _0x94da89), window.FindequipAttrVal = createSelectList("FindequipAttrVal", ["词条数量", "任意1条", "任意2条", "任意3条"], "000000", "dfdfcb", -225, -100, 180, 36, 30, _0x94da89, () => {
    cc.sys.localStorage.setItem("FindequipAttrVal", window.FindequipAttrVal.selectIdx);
  }), window.AFindequipQualityList = createDownToggle("AFindequipQualityList", ["筛选品质", "太古套装", "太古传奇", "远古套装", "远古传奇", "套装", "传奇"], "000000", "000000", "dfdfcb", -225, -150, 180, 36, 30, _0x94da89), window.FindequipAttr1 = createSelectList("FindequipAttr1", ["词条1"], "000000", "dfdfcb", 0, -100, 180, 36, 30, _0x94da89, () => {
    cc.sys.localStorage.setItem("FindequipAttr1", window.FindequipAttr1.selectIdx);
  }, false, true, 300), window.FindequipAttr2 = createSelectList("FindequipAttr2", ["词条2"], "000000", "dfdfcb", 225, -100, 180, 36, 30, _0x94da89, () => {
    cc.sys.localStorage.setItem("FindequipAttr2", window.FindequipAttr2.selectIdx);
  }, false, true, 300), window.FindequipAttr3 = createSelectList("FindequipAttr3", ["词条3"], "000000", "dfdfcb", 0, -150, 180, 36, 30, _0x94da89, () => {
    cc.sys.localStorage.setItem("FindequipAttr3", window.FindequipAttr3.selectIdx);
  }, false, true, 300), window.FindequipAttr4 = createSelectList("FindequipAttr4", ["词条4"], "000000", "dfdfcb", 225, -150, 180, 36, 30, _0x94da89, () => {
    cc.sys.localStorage.setItem("FindequipAttr4", window.FindequipAttr4.selectIdx);
  }, false, true, 300), window.AutoFindequipLockBtn = createToggleButton("AutoFindequipLock", "开始查找", "ffffff", "000000", -315, -200, 34, _0x94da89, true, _0x108527 => {
    window.AutoFindequipLock = !window.AutoFindequipLock;
    window.AutoFindequipLock ? (openAutoFindequipLock(), _0x108527.select2.active = true, _0x108527.select1.active = false, _0x108527.btnLabel.color = cc.color().fromHEX("8ce8fb")) : (closeAutoFindequipLock(), _0x108527.select1.active = true, _0x108527.select2.active = false, _0x108527.btnLabel.color = cc.color().fromHEX("ffffff"));
  }), window.FindequipLockBtn = createToggleButton("FindequipLockBtn", "找到上锁", "ffffff", "000000", -90, -200, 34, _0x94da89, true, _0x32849e => {
    window.FindequipLock = !window.FindequipLock;
    window.FindequipLock ? (showTips("【装备】开启找到后上锁", true), _0x32849e.select2.active = true, _0x32849e.select1.active = false, _0x32849e.btnLabel.color = cc.color().fromHEX("8ce8fb")) : (_0x32849e.select1.active = true, _0x32849e.select2.active = false, _0x32849e.btnLabel.color = cc.color().fromHEX("ffffff"));
  }), window.FindequipWarehouseBtn = createToggleButton("FindequipWarehouseBtn", "找到仓库", "ffffff", "000000", 135, -200, 34, _0x94da89, true, _0x5c2014 => {
    window.FindequipWarehouse = !window.FindequipWarehouse;
    window.FindequipWarehouse ? (showTips("【装备】开启找到后存仓库", true), _0x5c2014.select2.active = true, _0x5c2014.select1.active = false, _0x5c2014.btnLabel.color = cc.color().fromHEX("8ce8fb")) : (_0x5c2014.select1.active = true, _0x5c2014.select2.active = false, _0x5c2014.btnLabel.color = cc.color().fromHEX("ffffff"));
  }), window.FindequipSave = createButton("FindequipSaveBtn", 225, -45, 180, 40, "debb4f", "保存词条", "ffffff", "000000", 30, _0x94da89, () => {
    saveFindEquipData();
  }), window.FindequipLoadBtn = createButton("FindequipLoadBtn", -275, -245, 80, 40, "debb4f", "导入", "ffffff", "000000", 30, _0x94da89, () => {
    findequipLoadCfg();
  }), window.FindequipSaveBtn = createButton("FindequipSaveBtn", -185, -245, 80, 40, "debb4f", "导出", "ffffff", "000000", 30, _0x94da89, () => {
    findequipSaveCfg();
  }), window.FindequipInput = createEditBox("FindequipInput", "导入导出的数据", "", "000000", "000000", -125, -250, 440, 40, 32, _0x94da89, _0x253871 => {}), window.FindequipServerBtn = createButton("FindequipServerBtn", -230, -300, 170, 40, "debb4f", "使用配置", "ffffff", "000000", 32, _0x94da89, () => {
    FindequipServerUse();
  }), window.FindequipServerConfigList = createSelectList("FindequipServerConfigList", ["服务器配置", "暂无"], "000000", "dfdfcb", 95, -305, 440, 40, 32, _0x94da89, () => {}, false, true, 400), updateFindequipServerConfigList(), window.FindequipDelNum = 0, window.FindequipDelBtn = createButton("FindequipDelBtn", 225, -360, 180, 40, "debb4f", "删除配置", "ffffff", "000000", 30, _0x94da89, () => {
    window.FindequipDelNum++;
    window.FindequipDelNum >= 2 ? (window.FindequipDelNum = 0, findequipDelCfg()) : showTips("【装备】再点一次，确定删除配置", true);
  }), updateFindData(), window.EquipSuit1 = createMenuButton("EquipSuit1Btn", -260, -50, 110, 40, "debb4f", "第一套", "ffffff", "000000", 30, _0x478aab, () => {
    showEquipSuitBox(1);
  }), window.EquipSuit2 = createMenuButton("EquipSuit2Btn", -130, -50, 110, 40, "debb4f", "第二套", "ffffff", "000000", 30, _0x478aab, () => {
    showEquipSuitBox(2);
  }), window.EquipSuit3 = createMenuButton("EquipSuit3Btn", 0, -50, 110, 40, "debb4f", "第三套", "ffffff", "000000", 30, _0x478aab, () => {
    showEquipSuitBox(3);
  }), window.EquipSuit4 = createMenuButton("EquipSuit4Btn", 130, -50, 110, 40, "debb4f", "第四套", "ffffff", "000000", 30, _0x478aab, () => {
    showEquipSuitBox(4);
  }), window.EquipSuit5 = createMenuButton("EquipSuit5Btn", 260, -50, 110, 40, "debb4f", "第五套", "ffffff", "000000", 30, _0x478aab, () => {
    showEquipSuitBox(5);
  }), showEquipSuitBox(1));
  (getNavigation() || getMatch()) && (createLabel("title", "【竞速功能】", "EDDA60", "000000", -330, 0, 34, _0x2f4969, true), getNavigation() && (window.NavigationTipsBtn = createToggleButton("NavigationTipsBtn", "开启高德", "ffffff", "000000", -315, -50, 34, _0x2f4969, true, _0x1706b7 => {
    window.NavigationTips = !window.NavigationTips;
    window.NavigationTips ? (openNavigationTips(), _0x1706b7.select2.active = true, _0x1706b7.select1.active = false, _0x1706b7.btnLabel.color = cc.color().fromHEX("8ce8fb")) : (closeNavigationTips(), _0x1706b7.select1.active = true, _0x1706b7.select2.active = false, _0x1706b7.btnLabel.color = cc.color().fromHEX("ffffff"));
  }), window.NavigationList = createDownToggle("NavigationList", ["高德设置", "显迅捷塔", "显充能塔", "显强袭塔", "显神盾塔", "显雷电塔", "显漩涡塔"], "000000", "000000", "dfdfcb", 0, -50, 180, 36, 30, _0x2f4969)), getMatch() && (window.MatchBtn = createToggleButton("MatchBtn", "竞速模式", "ffffff", "000000", -315, -100, 34, _0x2f4969, true, _0x6081b8 => {
    window.Match = !window.Match;
    window.Match ? (showTips("【副本】开启竞速模式", true), showTips("可选指定地图", true), showTips("找塔距离1000码(不是首塔)", true), _0x6081b8.select2.active = true, _0x6081b8.select1.active = false, _0x6081b8.btnLabel.color = cc.color().fromHEX("8ce8fb")) : (showTips("【副本】关闭竞速模式", true), _0x6081b8.select1.active = true, _0x6081b8.select2.active = false, _0x6081b8.btnLabel.color = cc.color().fromHEX("ffffff"));
  }), window.MapList = createDownToggle("MapList", ["地图设置", "刷沼泽", "刷炼狱", "刷沙漠", "刷洞穴", "刷雪地", "刷森林"], "000000", "000000", "dfdfcb", 0, -100, 180, 36, 30, _0x2f4969), window.FirstTowerBtn = createToggleButton("FirstTowerBtn", "首塔查找", "ffffff", "000000", -315, -150, 34, _0x2f4969, true, _0x3e8dc7 => {
    window.FirstTower = !window.FirstTower;
    window.FirstTower ? (_0x3e8dc7.select2.active = true, _0x3e8dc7.select1.active = false, _0x3e8dc7.btnLabel.color = cc.color().fromHEX("8ce8fb")) : (_0x3e8dc7.select1.active = true, _0x3e8dc7.select2.active = false, _0x3e8dc7.btnLabel.color = cc.color().fromHEX("ffffff"));
  }), window.FirstTowerList = createDownToggle("FirstTowerList", ["首塔设置", "迅捷塔", "充能塔", "强袭塔", "神盾塔", "雷电塔", "漩涡塔"], "000000", "000000", "dfdfcb", 0, -150, 180, 36, 30, _0x2f4969), window.FirstTowerTimeInput = createEditBox("FirstTowerTimeInput", "距离", "1500", "000000", "000000", 140, -150, 90, 36, 34, _0x2f4969, _0x239384 => {
    _0x239384.string = "" + (Math.floor(Number(_0x239384.string)) || 1500);
  }), window.FirstTowerTimeTips = createLabel("FirstTowerTimeTips", "距离", "ffffff", "000000", 240, -150, 34, _0x2f4969, true), window.BossTowerBtn = createToggleButton("BossTowerBtn", "尾塔查找", "ffffff", "000000", -315, -200, 34, _0x2f4969, true, _0x2cc5e3 => {
    window.BossTower = !window.BossTower;
    window.BossTower ? (_0x2cc5e3.select2.active = true, _0x2cc5e3.select1.active = false, _0x2cc5e3.btnLabel.color = cc.color().fromHEX("8ce8fb")) : (_0x2cc5e3.select1.active = true, _0x2cc5e3.select2.active = false, _0x2cc5e3.btnLabel.color = cc.color().fromHEX("ffffff"));
  }), window.BossTowerList = createDownToggle("BossTowerList", ["尾塔设置", "迅捷塔", "充能塔", "强袭塔", "神盾塔", "雷电塔", "漩涡塔"], "000000", "000000", "dfdfcb", 0, -200, 180, 36, 30, _0x2f4969), window.BossTowerInput = createEditBox("BossTowerInput", "距离", "1500", "000000", "000000", 140, -200, 90, 36, 34, _0x2f4969, _0x58c114 => {
    _0x58c114.string = "" + (Math.floor(Number(_0x58c114.string)) || 1500);
  }), window.BossTowerTips = createLabel("BossTowerTips", "距离", "ffffff", "000000", 240, -200, 34, _0x2f4969, true), window.AttackDistanceBtn = createToggleButton("AttackDistanceBtn", "攻击距离", "ffffff", "000000", -315, -250, 34, _0x2f4969, true, _0x3399e9 => {
    window.AttackDistance = !window.AttackDistance;
    window.AttackDistance ? (showTips("【副本】开启BOSS指定攻击距离", true), _0x3399e9.select2.active = true, _0x3399e9.select1.active = false, _0x3399e9.btnLabel.color = cc.color().fromHEX("8ce8fb")) : (showTips("【副本】关闭BOSS指定攻击距离", true), _0x3399e9.select1.active = true, _0x3399e9.select2.active = false, _0x3399e9.btnLabel.color = cc.color().fromHEX("ffffff"));
  }), window.AttackDistanceInput = createEditBox("AttackDistanceInput", "距离", "200", "000000", "000000", -90, -250, 180, 36, 34, _0x2f4969, _0x2e9df7 => {
    _0x2e9df7.string = "" + (Math.floor(Number(_0x2e9df7.string)) || 200);
  }), window.AttackNoMoveBtn = createToggleButton("AttackNoMoveBtn", "最优先级", "ffffff", "000000", 135, -250, 34, _0x2f4969, true, _0x411135 => {
    window.AttackNoMove = !window.AttackNoMove;
    window.AttackNoMove ? (showTips("【副本】开启BOSS屏蔽【移动攻击】", true), _0x411135.select2.active = true, _0x411135.select1.active = false, _0x411135.btnLabel.color = cc.color().fromHEX("8ce8fb")) : (showTips("【副本】关闭BOSS屏蔽【移动攻击】", true), _0x411135.select1.active = true, _0x411135.select2.active = false, _0x411135.btnLabel.color = cc.color().fromHEX("ffffff"));
  }), window.SuperPathBtn = createToggleButton("SuperPathBtn", "超级寻路", "ffffff", "000000", -315, -300, 34, _0x2f4969, true, _0x131851 => {
    window.SuperPath = !window.SuperPath;
    window.SuperPath ? (showTips("【副本】切换超级寻路", true), _0x131851.select2.active = true, _0x131851.select1.active = false, _0x131851.btnLabel.color = cc.color().fromHEX("8ce8fb")) : (closeAutoSuperPath(), showTips("【副本】关闭超级寻路", true), _0x131851.select1.active = true, _0x131851.select2.active = false, _0x131851.btnLabel.color = cc.color().fromHEX("ffffff"));
  }), window.SuperPathBtnTips = createLabel("SuperPathBtnTips", "超级寻路测试版本，卡不卡看设备", "e3e3c7", "000000", -315, -350, 32, _0x2f4969, true), window.PassingMonsterBtn = createToggleButton("PassingMonsterBtn", "顺路精英", "ffffff", "000000", -90, -300, 34, _0x2f4969, true, _0x5c0221 => {
    window.PassingMonster = !window.PassingMonster;
    window.PassingMonster ? (showTips("【副本】竞速模式下直奔终点顺路杀精英", true), _0x5c0221.select2.active = true, _0x5c0221.select1.active = false, _0x5c0221.btnLabel.color = cc.color().fromHEX("8ce8fb")) : (showTips("【副本】关闭顺路杀精英", true), _0x5c0221.select1.active = true, _0x5c0221.select2.active = false, _0x5c0221.btnLabel.color = cc.color().fromHEX("ffffff"));
  }), window.PassingMonsterDInput = createEditBox("PassingMonsterDInput", "距离", "500", "000000", "000000", 140, -300, 90, 36, 34, _0x2f4969, _0x3186f0 => {
    _0x3186f0.string = "" + Math.floor(Number(_0x3186f0.string));
  }), window.PassingMonsterTips = createLabel("PassingMonsterTips", "距离", "ffffff", "000000", 240, -300, 34, _0x2f4969, true)));
  (getGameSpeedLimits() || getBattleInfiniteBossLimits() || getSvip() || getBattleExpert()) && (createLabel("title", "【扩展功能】", "EDDA60", "000000", -330, 0, 34, _0x56d7aa, true), getBattleExpert() && (window.ExpertBattleBtn = createToggleButton("ExpertBattleBtn", "专家免死", "ffffff", "000000", -315, -50, 34, _0x56d7aa, true, _0x53296a => {
    window.ExpertBattle = !window.ExpertBattle;
    window.ExpertBattle ? (showTips("【副本】开启专家免死，死前自动退出", true), _0x53296a.select2.active = true, _0x53296a.select1.active = false, _0x53296a.btnLabel.color = cc.color().fromHEX("8ce8fb")) : (showTips("【副本】关闭专家免死", true), _0x53296a.select1.active = true, _0x53296a.select2.active = false, _0x53296a.btnLabel.color = cc.color().fromHEX("ffffff"));
  })), getGameSpeedLimits() && (window.GameSpeedChangeBtn = createToggleButton("GameSpeedChangeBtn", "定制", "B7B7B7", "000000", -315, -100, 34, _0x56d7aa, true, _0x2cf747 => {
    showTips("【系统】已和谐，开了就一把3分钟疲劳", true);
    _0x2cf747.select1.active = true;
    return;
    window.GameSpeedChange = !window.GameSpeedChange;
    window.GameSpeedChange ? (openGameSpeedChange(), label.string = "▩定制", label.node.color = cc.color().fromHEX("79FF71")) : (showTips("【系统】关闭全局变速", true), label.string = "☐定制", label.node.color = cc.color().fromHEX("ffffff"));
  }), window.GameSpeedInput = createEditBox("GameSpeedInput", "输入速度", "1.5", "000000", "000000", -200, -100, 60, 36, 34, _0x56d7aa, _0x508f24 => {
    let _0x20538b = _0xe608ef(_0x508f24.string);
    isNaN(_0x20538b) ? _0x508f24.string = this.lastValidValue || "1.5" : this.lastValidValue = _0x508f24.string;
    cc.sys.localStorage.setItem("GameSpeed", window.GameSpeedInput.string);
    function _0xe608ef(_0xc69f85) {
      let _0x5285b3 = /^\d+(\.\d+)?$/;
      if (_0x5285b3.test(_0xc69f85)) {
        return parseFloat(_0xc69f85);
      }
      return NaN;
    }
  }), cc.sys.localStorage.getItem("GameSpeed") && cc.sys.localStorage.getItem("GameSpeed") != "" && (window.GameSpeedInput.string = cc.sys.localStorage.getItem("GameSpeed"))), getSvip() && (window.GameSpeedSvipBtn = createToggleButton("GameSpeedSvipBtn", "Svip", "B7B7B7", "000000", -90, -100, 34, _0x56d7aa, true, _0x49ed3c => {
    window.GameSpeedSvip = !window.GameSpeedSvip;
    window.GameSpeedSvip ? (showTips("【系统】开启加速，有检测锁定倍率", true), openGameSpeedSvip(), _0x49ed3c.select2.active = true, _0x49ed3c.select1.active = false, _0x49ed3c.btnLabel.color = cc.color().fromHEX("8ce8fb")) : (showTips("【系统】关闭加速", true), _0x49ed3c.select1.active = true, _0x49ed3c.select2.active = false, _0x49ed3c.btnLabel.color = cc.color().fromHEX("ffffff"));
  }), window.GameSpeedSvipInput = createEditBox("GameSpeedSvipInput", "输入速度", "1", "000000", "000000", 25, -100, 60, 36, 34, _0x56d7aa, _0x284479 => {
    _0x284479.string = "" + (Math.floor(Number(_0x284479.string)) || 1);
    !getSSvip() && Number(_0x284479.string) >= 3 && (_0x284479.string = 3);
    cc.sys.localStorage.setItem("GameSpeedSvip", window.GameSpeedSvipInput.string);
  }), cc.sys.localStorage.getItem("GameSpeedSvip") && cc.sys.localStorage.getItem("GameSpeedSvip") != "" && (window.GameSpeedSvipInput.string = cc.sys.localStorage.getItem("GameSpeedSvip"))), getBattleInfiniteBossLimits() && (window.AutoBattleLostBtn = createToggleButton("AutoBattleLostBtn", "不刷首领", "B7B7B7", "000000", 135, -100, 34, _0x56d7aa, true, _0x4954f4 => {
    window.AutoBattleLost = !window.AutoBattleLost;
    window.AutoBattleLost ? (showTips("【副本】开启不刷首领", true), _0x4954f4.select2.active = true, _0x4954f4.select1.active = false, _0x4954f4.btnLabel.color = cc.color().fromHEX("8ce8fb")) : (showTips("【副本】关闭不刷首领", true), _0x4954f4.select1.active = true, _0x4954f4.select2.active = false, _0x4954f4.btnLabel.color = cc.color().fromHEX("ffffff"));
  })));
  getBD() && (window.EquipOccupationState = createLabel("EquipOccupationState", "【职业未加载】", "ffffff", "000000", -210, 0, 32, _0x289d6c), window.equip4 = createSelectList("equip4", ["护肩"], "000000", "ffffff", -195, -50, 140, 40, 24, _0x289d6c, () => {}, true), window.equip7 = createSelectList("equip7", ["手套"], "000000", "ffffff", -195, -100, 140, 40, 24, _0x289d6c, () => {}, true), window.equip9 = createSelectList("equip9", ["武器"], "000000", "ffffff", -195, -150, 140, 40, 24, _0x289d6c, () => {}, true), window.equipAttrCheck4 = createButton("equipAttrCheck4Btn", -295, -45, 40, 40, "debb4f", "详", "ffffff", "000000", 30, _0x289d6c, () => {
    showEquipAttrInfoBox(4);
  }), window.equipAttrCheck7 = createButton("equipAttrCheck7Btn", -295, -95, 40, 40, "debb4f", "详", "ffffff", "000000", 30, _0x289d6c, () => {
    showEquipAttrInfoBox(7);
  }), window.equipAttrCheck9 = createButton("equipAttrCheck9Btn", -295, -145, 40, 40, "debb4f", "详", "ffffff", "000000", 30, _0x289d6c, () => {
    showEquipAttrInfoBox(9);
  }), window.equip1 = createSelectList("equip1", ["头盔"], "000000", "ffffff", 25, -20, 140, 40, 24, _0x289d6c, () => {}, true), window.equip3 = createSelectList("equip3", ["胸甲"], "000000", "ffffff", 25, -70, 140, 40, 24, _0x289d6c, () => {}, true), window.equip5 = createSelectList("equip5", ["护腿"], "000000", "ffffff", 25, -120, 140, 40, 24, _0x289d6c, () => {}, true), window.equip6 = createSelectList("equip6", ["鞋子"], "000000", "ffffff", 25, -170, 140, 40, 24, _0x289d6c, () => {}, true), window.equipAttrCheck1 = createButton("equipAttrCheck1Btn", -75, -15, 40, 40, "debb4f", "详", "ffffff", "000000", 30, _0x289d6c, () => {
    showEquipAttrInfoBox(1);
  }), window.equipAttrCheck3 = createButton("equipAttrCheck3Btn", -75, -65, 40, 40, "debb4f", "详", "ffffff", "000000", 30, _0x289d6c, () => {
    showEquipAttrInfoBox(3);
  }), window.equipAttrCheck5 = createButton("equipAttrCheck5Btn", -75, -115, 40, 40, "debb4f", "详", "ffffff", "000000", 30, _0x289d6c, () => {
    showEquipAttrInfoBox(5);
  }), window.equipAttrCheck6 = createButton("equipAttrCheck6Btn", -75, -165, 40, 40, "debb4f", "详", "ffffff", "000000", 30, _0x289d6c, () => {
    showEquipAttrInfoBox(6);
  }), window.equip2 = createSelectList("equip2", ["项链"], "000000", "ffffff", 245, -50, 140, 40, 24, _0x289d6c, () => {}, true), window.equip8 = createSelectList("equip8", ["戒指"], "000000", "ffffff", 245, -100, 140, 40, 24, _0x289d6c, () => {}, true), window.equip10 = createSelectList("equip10", ["副手"], "000000", "ffffff", 245, -150, 140, 40, 24, _0x289d6c, () => {}, true), window.equipAttrCheck2 = createButton("equipAttrCheck2Btn", 145, -45, 40, 40, "debb4f", "详", "ffffff", "000000", 30, _0x289d6c, () => {
    showEquipAttrInfoBox(2);
  }), window.equipAttrCheck8 = createButton("equipAttrCheck8Btn", 145, -95, 40, 40, "debb4f", "详", "ffffff", "000000", 30, _0x289d6c, () => {
    showEquipAttrInfoBox(8);
  }), window.equipAttrCheck10 = createButton("equipAttrCheck10Btn", 145, -145, 40, 40, "debb4f", "详", "ffffff", "000000", 30, _0x289d6c, () => {
    showEquipAttrInfoBox(10);
  }), window.extractedEquip1Tips = createLabel("extractedEquip1Tips", "共", "ffffff", "000000", -295, -225, 30, _0x289d6c), window.extractedEquip1 = createSelectList("extractedEquip1", ["共鸣空"], "000000", "ffffff", -195, -220, 140, 40, 24, _0x289d6c, () => {}, true), window.extractedEquip2Tips = createLabel("extractedEquip2Tips", "共", "ffffff", "000000", -75, -225, 30, _0x289d6c), window.extractedEquip2 = createSelectList("extractedEquip2", ["共鸣空"], "000000", "ffffff", 25, -220, 140, 40, 24, _0x289d6c, () => {}, true), window.extractedEquip3Tips = createLabel("extractedEquip3Tips", "共", "ffffff", "000000", 145, -225, 30, _0x289d6c), window.extractedEquip3 = createSelectList("extractedEquip3", ["共鸣空"], "000000", "ffffff", 245, -220, 140, 40, 24, _0x289d6c, () => {}, true), window.AutoEquipCrossBtn = createToggleButton("AutoEquipCrossBtn", "自动穿戴", "ffffff", "000000", -315, -270, 34, _0x289d6c, true, _0x4b36b4 => {
    window.AutoEquipCross = !window.AutoEquipCross;
    window.AutoEquipCross ? (openAutoEquipCross(), _0x4b36b4.select2.active = true, _0x4b36b4.select1.active = false, _0x4b36b4.btnLabel.color = cc.color().fromHEX("8ce8fb")) : (closeAutoEquipCross(), _0x4b36b4.select1.active = true, _0x4b36b4.select2.active = false, _0x4b36b4.btnLabel.color = cc.color().fromHEX("ffffff"));
  }), window.AutoEquipCrossQualityList = createDownToggle("AutoEquipCrossQualityList", ["穿戴品质", "太古套装", "太古传奇", "远古套装", "远古传奇", "套装", "传奇"], "000000", "000000", "dfdfcb", -225, -320, 180, 36, 30, _0x289d6c), window.AutoEquipLockBtn = createToggleButton("AutoEquipLockBtn", "自动上锁", "ffffff", "000000", -90, -270, 34, _0x289d6c, true, _0x2d43e1 => {
    window.AutoEquipLock = !window.AutoEquipLock;
    window.AutoEquipLock ? (openAutoEquipLock(), _0x2d43e1.select2.active = true, _0x2d43e1.select1.active = false, _0x2d43e1.btnLabel.color = cc.color().fromHEX("8ce8fb")) : (closeAutoEquipLock(), _0x2d43e1.select1.active = true, _0x2d43e1.select2.active = false, _0x2d43e1.btnLabel.color = cc.color().fromHEX("ffffff"));
  }), window.AutoEquipLockQualityList = createDownToggle("AutoEquipLockQualityList", ["上锁品质", "太古套装", "太古传奇", "远古套装", "远古传奇", "套装", "传奇"], "000000", "000000", "dfdfcb", 0, -320, 180, 36, 30, _0x289d6c), window.AutoEquipWarehouseBtn = createToggleButton("AutoEquipWarehouseBtn", "自动仓库", "ffffff", "000000", 135, -270, 34, _0x289d6c, true, _0x2d06e2 => {
    window.AutoEquipWarehouse = !window.AutoEquipWarehouse;
    window.AutoEquipWarehouse ? (openAutoEquipWarehouse(), _0x2d06e2.select2.active = true, _0x2d06e2.select1.active = false, _0x2d06e2.btnLabel.color = cc.color().fromHEX("8ce8fb")) : (closeAutoEquipWarehouse(), _0x2d06e2.select1.active = true, _0x2d06e2.select2.active = false, _0x2d06e2.btnLabel.color = cc.color().fromHEX("ffffff"));
  }), window.AutoEquipWarehouseQualityList = createDownToggle("AutoEquipWarehouseQualityList", ["仓库品质", "太古套装", "太古传奇", "远古套装", "远古传奇", "套装", "传奇"], "000000", "000000", "dfdfcb", 225, -320, 180, 36, 30, _0x289d6c), showEquipAttrCheckBtn(false), updateDBData(), createLabel("title", "【策略功能】", "EDDA60", "000000", -330, 0, 34, _0x3ee0c0, true), window.BDUseBtn = createButton("BDUseBtn", -230, -50, 170, 40, "debb4f", "使用策略", "ffffff", "000000", 32, _0x3ee0c0, () => {
    BDUse();
  }), window.BDTemplateList = createSelectList("BDTemplateList", ["本地策略列表"], "000000", "dfdfcb", 95, -55, 440, 40, 32, _0x3ee0c0, () => {}, false, true, 500), updateBDTemplateList(), window.BDExtractBtn = createButton("BDExtractBtn", -230, -100, 170, 40, "debb4f", "提取别人", "ffffff", "000000", 32, _0x3ee0c0, () => {
    BDExtract();
  }), window.BDLookBtn = createButton("BDLookBtn", -55, -100, 140, 40, "debb4f", "查看", "ffffff", "000000", 32, _0x3ee0c0, () => {
    BDLook();
  }), window.BDShareBtn = createButton("BDShareBtn", 95, -100, 140, 40, "debb4f", "分享", "ffffff", "000000", 32, _0x3ee0c0, () => {
    BDShare();
  }), window.BDDelNum = 0, window.BDDelBtn = createButton("BDDelBtn", 245, -100, 140, 40, "debb4f", "删除", "ffffff", "000000", 32, _0x3ee0c0, () => {
    window.BDDelNum++;
    window.BDDelNum >= 2 ? (window.BDDelNum = 0, BDDel()) : showTips("【策略】再点一次确定删除", true);
  }), window.BDReadBtn = createButton("BDReadBtn", -230, -150, 170, 40, "debb4f", "导入策略", "ffffff", "000000", 32, _0x3ee0c0, () => {
    BDRead();
  }), window.BDReadInput = createEditBox("BDReadInput", "导入的策略数据", "", "000000", "000000", -125, -155, 440, 40, 32, _0x3ee0c0, _0x2fe3bf => {}), window.BDMakeBtn = createButton("BDMakeBtn", -230, -200, 170, 40, "debb4f", "制作策略", "ffffff", "000000", 32, _0x3ee0c0, () => {
    BDMake();
  }), window.BDMakeNameInput = createEditBox("BDMakeNameInput", "策略描述", "", "000000", "000000", -125, -205, 440, 40, 32, _0x3ee0c0, _0x110b16 => {}), window.DBTips1 = createLabel("DBTips1", "【策略数据】", "ffffff", "000000", -330, -260, 34, _0x3ee0c0, true, _0x443b3e => {}), window.DBDataInput = createEditBox("DBDataInput", "策略数据", "", "000000", "000000", -125, -255, 440, 40, 32, _0x3ee0c0, _0x4679b2 => {}), window.BDServerBtn = createButton("BDServerBtn", -230, -300, 170, 40, "debb4f", "使用策略", "ffffff", "000000", 32, _0x3ee0c0, () => {
    BDServerUse();
  }), window.BDServerTemplateList = createSelectList("BDServerTemplateList", ["服务器策略列表", "游侠【暂无】", "法师【暂无】", "野蛮人【暂无】", "德鲁伊【暂无】", "魂灵师【暂无】"], "000000", "dfdfcb", 95, -305, 440, 40, 32, _0x3ee0c0, () => {}, false, true, 400), updateBDServerTemplateList());
  (getNavigation() || getMatch() || getBD() || getBattleExpert()) && (window.FightRewardBtn = createToggleButton("FightRewardBtn", "速通宝箱", "ffffff", "000000", -315, 0, 34, _0x264be0, true, _0x4be870 => {
    window.FightReward = !window.FightReward;
    window.FightReward ? (openAutoFightReward(), _0x4be870.select2.active = true, _0x4be870.select1.active = false, _0x4be870.btnLabel.color = cc.color().fromHEX("8ce8fb")) : (closeAutoFightReward(), _0x4be870.select1.active = true, _0x4be870.select2.active = false, _0x4be870.btnLabel.color = cc.color().fromHEX("ffffff"));
  }));
  getVersion() == 1;
  getHiddenList();
  showEndTime();
}
window.lastFuncIndex = 0;
function showFuncBox(_0x444074) {
  if (window.lastFuncIndex == _0x444074) {
    return;
  }
  window.lastFuncIndex = _0x444074;
  for (let _0x2ae93e = 1; _0x2ae93e <= 5; _0x2ae93e++) {
    if (!window["Func" + _0x2ae93e]) {
      continue;
    }
    let _0x10fd05 = window["Func" + _0x2ae93e].selectBg;
    _0x10fd05 && (_0x10fd05.opacity = 0);
    let _0x4d7d8e = window["funcBox" + _0x2ae93e];
    _0x4d7d8e && (_0x4d7d8e.active = false);
  }
  window["Func" + _0x444074].selectBg.opacity = 255;
  window["funcBox" + _0x444074].active = true;
  window.scrollView.content.height = 750;
  window.scrollView.content.y = 375;
  switch (_0x444074) {
    case 1:
      break;
    case 5:
      window.scrollView.content.height = 900;
      break;
  }
}
function openWatermark() {
  if (getNoWatermark()) {
    showTips("【系统】水印已移除", true);
    return;
  }
  window.AccountUniqueBox = createNode("AccountUniqueBox", 0, 0, 0, 0, "6F6F6F", cc.Canvas.instance.node, true);
  window.AccountUniqueBox.group = "ui";
  window.AccountUniqueBox.zIndex = 99;
  window.AccountUniqueBox.x = -400;
  window.AccountUniqueBox.y = 0;
  let _0xa393db = new cc.Node("AccountUniqueInfo");
  window.AccountUniqueInfo = _0xa393db;
  _0xa393db.x = 0;
  _0xa393db.y = 0;
  window.AccountUniqueBox.addChild(_0xa393db);
  window.AccountUniqueId1 = createLabel("AccountUniqueId1", window.tokenData.data.combSdkInfo.uniqueId.slice(16), "ffffff", "000000", 0, 150, 36, window.AccountUniqueInfo, true);
  window.AccountUniqueId1.rotation = 45;
  window.AccountUniqueId1.opacity = 30;
  window.AccountUniqueId2 = createLabel("AccountUniqueId2", window.tokenData.data.combSdkInfo.uniqueId.slice(16), "ffffff", "000000", 300, 150, 36, window.AccountUniqueInfo, true);
  window.AccountUniqueId2.rotation = 45;
  window.AccountUniqueId2.opacity = 30;
  window.AccountUniqueId3 = createLabel("AccountUniqueId3", window.tokenData.data.combSdkInfo.uniqueId.slice(16), "ffffff", "000000", 600, 150, 36, window.AccountUniqueInfo, true);
  window.AccountUniqueId3.rotation = 45;
  window.AccountUniqueId3.opacity = 30;
  window.AccountUniqueId4 = createLabel("AccountUniqueId4", window.tokenData.data.combSdkInfo.uniqueId.slice(16), "ffffff", "000000", 0, -150, 36, window.AccountUniqueInfo, true);
  window.AccountUniqueId4.rotation = 45;
  window.AccountUniqueId4.opacity = 30;
  window.AccountUniqueId5 = createLabel("AccountUniqueId5", window.tokenData.data.combSdkInfo.uniqueId.slice(16), "ffffff", "000000", 300, -150, 36, window.AccountUniqueInfo, true);
  window.AccountUniqueId5.rotation = 45;
  window.AccountUniqueId5.opacity = 30;
  window.AccountUniqueId6 = createLabel("AccountUniqueId6", window.tokenData.data.combSdkInfo.uniqueId.slice(16), "ffffff", "000000", 600, -150, 36, window.AccountUniqueInfo, true);
  window.AccountUniqueId6.rotation = 45;
  window.AccountUniqueId6.opacity = 30;
  window.AccountUniqueId7 = createLabel("AccountUniqueId7", window.tokenData.data.combSdkInfo.uniqueId.slice(16), "ffffff", "000000", 50, 450, 36, window.AccountUniqueInfo, true);
  window.AccountUniqueId7.rotation = 45;
  window.AccountUniqueId7.opacity = 30;
  window.AccountUniqueId8 = createLabel("AccountUniqueId8", window.tokenData.data.combSdkInfo.uniqueId.slice(16), "ffffff", "000000", 500, 450, 36, window.AccountUniqueInfo, true);
  window.AccountUniqueId8.rotation = 45;
  window.AccountUniqueId8.opacity = 30;
  window.AccountUniqueId9 = createLabel("AccountUniqueId9", window.tokenData.data.combSdkInfo.uniqueId.slice(16), "ffffff", "000000", 200, 550, 36, window.AccountUniqueInfo, true);
  window.AccountUniqueId9.rotation = 45;
  window.AccountUniqueId9.opacity = 30;
  window.AccountUniqueId10 = createLabel("AccountUniqueId10", window.tokenData.data.combSdkInfo.uniqueId.slice(16), "ffffff", "000000", 550, 750, 36, window.AccountUniqueInfo, true);
  window.AccountUniqueId10.rotation = 45;
  window.AccountUniqueId10.opacity = 30;
  window.AccountUniqueId11 = createLabel("AccountUniqueId11", window.tokenData.data.combSdkInfo.uniqueId.slice(16), "ffffff", "000000", 200, 750, 36, window.AccountUniqueInfo, true);
  window.AccountUniqueId11.rotation = 45;
  window.AccountUniqueId11.opacity = 30;
}
function openExplain() {
  if (window.ExplainBox) {
    window.ExplainBox.active = true;
    window.ExplainMask.active = true;
    return;
  }
  window.ExplainMask = createNode("ExplainMask", 0, 0, cc.winSize.width, cc.winSize.height, "6F6F6F", cc.Canvas.instance.node, true, _0x4e880a => {
    window.ExplainBox.active = false;
    window.ExplainMask.active = false;
  });
  window.ExplainMask.group = "ui";
  window.ExplainMask.opacity = 0;
  window.ExplainMask.zIndex = 97;
  window.ExplainBox = createNode("ExplainBox", 0, 0, 680, 950, "6F6F6F", cc.Canvas.instance.node, true, _0x2a8f36 => {});
  window.ExplainBox.group = "ui";
  window.ExplainBox.zIndex = 98;
  let _0x2d6609 = new cc.Node("ExplainContentBox");
  window.ExplainContentBox = _0x2d6609;
  _0x2d6609.x = 0;
  _0x2d6609.y = -30;
  let _0x3962f2 = new cc.Node("ExplainContentBox2");
  window.ExplainContentBox2 = _0x3962f2;
  _0x3962f2.x = 0;
  _0x3962f2.y = -570;
  let _0x13639a = new cc.Node("ExplainContentBox3");
  window.ExplainContentBox3 = _0x13639a;
  _0x13639a.x = 0;
  _0x13639a.y = -720;
  let _0xe59b59 = new cc.Node("ExplainContentBox4");
  window.ExplainContentBox4 = _0xe59b59;
  _0xe59b59.x = 0;
  _0xe59b59.y = -820;
  window.ExplainScrollView = createScrollView(0, -20, 750, 840, 1300, window.ExplainBox);
  window.ExplainScrollView.content.addChild(_0x2d6609);
  window.ExplainScrollView.content.addChild(_0x3962f2);
  window.ExplainScrollView.content.addChild(_0x13639a);
  window.ExplainScrollView.content.addChild(_0xe59b59);
  createLabel("title", "功能说明", "EDDA60", "000000", 0, 440, 40, window.ExplainBox, false);
  createLabel("title", "【功能说明】", "79FF71", "000000", -330, 0, 34, _0x2d6609, true);
  createLabel("label", "【自动刷图】AI全自动脚本，无任何修改", "ffffff", "000000", -330, -50, 30, _0x2d6609, true);
  createLabel("label", "【自动爬层】强制打最高层", "ffffff", "000000", -330, -100, 30, _0x2d6609, true);
  createLabel("label", "【只找精英】精英优先打，没有精英找普通", "ffffff", "000000", -330, -150, 30, _0x2d6609, true);
  createLabel("label", "【自动血瓶】血量低于30%自动使用", "ffffff", "000000", -330, -200, 30, _0x2d6609, true);
  createLabel("label", "【自动奇遇】自动进入", "ffffff", "000000", -330, -250, 30, _0x2d6609, true);
  createLabel("label", "【奇遇不刷】可选不刷指定奇遇", "ffffff", "000000", -330, -300, 30, _0x2d6609, true);
  createLabel("label", "【快速再次】不退副本继续挑战", "ffffff", "000000", -330, -350, 30, _0x2d6609, true);
  createLabel("label", "【掉线重登】掉线自动重启游戏", "ffffff", "000000", -330, -400, 30, _0x2d6609, true);
  createLabel("label", "【不刷疲劳】指定疲劳不刷自动下线", "ffffff", "000000", -330, -450, 30, _0x2d6609, true);
  createLabel("label", "【自动换号】无疲劳自动换下一个角色", "ffffff", "000000", -330, -500, 30, _0x2d6609, true);
  createLabel("label", "【分解功能】", "79FF71", "000000", -330, 0, 34, _0x3962f2, true);
  createLabel("label", "【自动分解】自动分解，不分解带锁的", "ffffff", "000000", -330, -50, 30, _0x3962f2, true);
  createLabel("label", "【保留神赐】保存太古神赐不分解", "ffffff", "000000", -330, -100, 30, _0x3962f2, true);
  createLabel("label", "【超级功能】", "79FF71", "000000", -330, 0, 34, _0x13639a, true);
  createLabel("label", "使用后造成封号，不提供换号", "EDDA60", "000000", -315, -50, 30, _0x13639a, true);
  createLabel("label", "【永久卡】", "FF8C8C", "000000", -330, 0, 34, _0xe59b59, true);
  createLabel("label", "月卡可升级永久卡，按时间抵扣", "ffffff", "000000", -315, -50, 30, _0xe59b59, true);
  createLabel("label", "辅助交流群联系胖虎", "ffffff", "000000", -315, -150, 30, _0xe59b59, true);
}
function changeVersion() {}
function showEndTime() {
  let _0x5d3e0e = window.versionType.getComponent(cc.Label);
  _0x5d3e0e.string = "【到期时间：" + (window.AccountLimits.isPermanentCard ? "永久" : window.AccountLimits.isMonthCard) + "】";
}
function getVersion() {
  let _0x67cef9 = getMonthlist() || getWhitelist();
  return _0x67cef9;
}
function getMonthlist() {
  if (window.AccountLimits.isMonthCard) {
    return 1;
  }
  return 0;
}
function getWhitelist() {
  if (window.AccountLimits.isPermanentCard) {
    return 2;
  }
  return 0;
}
function getBattleInfiniteBossLimits() {
  if (window.AccountLimits.isBoss) {
    return 1;
  }
  return 0;
}
function getBattleExpert() {
  if (window.AccountLimits.isExpert) {
    return 1;
  }
  return 0;
}
function getGameSpeedLimits() {
  if (window.AccountLimits.isSpeed) {
    return 1;
  }
  return 0;
}
function getSvip() {
  if (window.AccountLimits.isSvip) {
    return 1;
  }
  return 0;
}
function getSSvip() {
  if (window.AccountLimits.isSSvip) {
    return 1;
  }
  return 0;
}
function getBD() {
  if (window.AccountLimits.isBD) {
    return 1;
  }
  return 0;
}
function getFreeGem() {
  if (window.AccountLimits.isDayGem) {
    return 1;
  }
  return 0;
}
function getSuper() {
  if (window.AccountLimits.isSuper) {
    return 1;
  }
  return 0;
}
function getNavigation() {
  if (window.AccountLimits.isNavigation) {
    return 1;
  }
  return 0;
}
function getRecoverNavigation() {
  if (window.AccountLimits.isRecoverNavigation) {
    return 1;
  }
  return 0;
}
function getMenuHide() {
  if (window.AccountLimits.isMenuHide) {
    return 1;
  }
  return 0;
}
function getMatch() {
  if (window.AccountLimits.isMatch) {
    return 1;
  }
  return 0;
}
function getNoWatermark() {
  if (window.AccountLimits.isNoWatermark) {
    return 1;
  }
  return 0;
}
function getHiddenList() {
  return 0;
}
function getHiddenList2() {
  return 0;
}
function checkFuncOpen(_0x19a8c8) {
  if (_0x19a8c8 && window.pwd == "331213") {
    if (window.AccountUniqueBox) {
      window.AccountUniqueBox.active = false;
    }
  } else {
    if (!_0x19a8c8) {
      if (window.AccountUniqueBox) {
        window.AccountUniqueBox.active = true;
      }
      window.pwd = "";
    }
  }
}
function SavePanghuCfg() {
  showTips("【系统】配置保存成功", true);
  let _0x25327f = window.tokenData.data.combSdkInfo.userId,
    _0x30a4b7 = Service._playerService.pId;
  cc.sys.localStorage.setItem("PanghuCfg_" + _0x25327f + "_" + _0x30a4b7, JSON.stringify(getPanghuCfg()));
}
function LoadPanghuCfg() {
  let _0x42fc90 = window.tokenData.data.combSdkInfo.userId,
    _0x277356 = Service._playerService.pId;
  if (!cc.sys.localStorage.getItem("PanghuCfg_" + _0x42fc90 + "_" + _0x277356) || cc.sys.localStorage.getItem("PanghuCfg_" + _0x42fc90 + "_" + _0x277356) == "") {
    showTips("【系统】配置读取出错，重新保存吧", true);
    return;
  }
  let _0x9bacfc = JSON.parse(cc.sys.localStorage.getItem("PanghuCfg_" + _0x42fc90 + "_" + _0x277356));
  if (!_0x9bacfc) {
    showTips("【系统】配置读取出错，重新保存吧", true);
    return;
  }
  showTips("【系统】配置读取成功", true);
  updatePanghuBtn(_0x9bacfc);
}
function getPanghuCfg() {
  const _0x4be1b9 = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x289dc2 = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x140cad = {
    open: false,
    type: 3,
    index: 0
  };
  const _0x118bd1 = {
    open: false,
    type: 3,
    index: 0
  };
  const _0x44b719 = {
    open: false,
    type: 3,
    index: 0
  };
  const _0x32db27 = {
    open: false,
    type: 2,
    index: 0
  };
  const _0x1cd036 = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x9471ac = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x30e2fa = {
    open: false,
    type: 2,
    index: 0
  };
  const _0x1001f1 = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x38676c = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x341735 = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x158a87 = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x1e4c3c = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x547246 = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x54af52 = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x1299cb = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x176161 = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x1122fb = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x4c6752 = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x108323 = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x42244b = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x358bcf = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x4a4d1f = {
    open: false,
    type: 3,
    index: 0
  };
  const _0x463320 = {
    open: false,
    type: 3,
    index: 0
  };
  const _0x50c0d4 = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x897905 = {
    open: false,
    type: 3,
    index: 0
  };
  const _0x24c2f1 = {
    open: false,
    type: 2,
    index: 0
  };
  const _0x4cc1c9 = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x1eca99 = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x53d71b = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x48223c = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x7c4ab9 = {
    open: false,
    type: 2,
    index: 0
  };
  const _0x5d318e = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x4fdba4 = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x188a01 = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x8e4624 = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x130b32 = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x5b64d5 = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x143319 = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x295d4a = {
    open: false,
    type: 1,
    index: 0
  };
  const _0xabbd73 = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x2fdab7 = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x52fa62 = {
    open: false,
    type: 2,
    index: 0
  };
  const _0x18502d = {
    open: false,
    type: 1,
    index: 0
  };
  const _0xdad0c4 = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x212701 = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x382c2e = {
    open: false,
    type: 2,
    index: 0
  };
  const _0x1a3e5b = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x5571cc = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x33e362 = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x8d6180 = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x504749 = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x575e1e = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x1408bd = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x52b059 = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x28bf90 = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x48c2c6 = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x247c63 = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x1d6619 = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x366bef = {
    open: false,
    type: 1,
    index: 0
  };
  const _0xb0597e = {
    open: false,
    type: 2,
    index: 0
  };
  const _0x4bd09f = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x20b4a2 = {
    open: false,
    type: 2,
    index: 0
  };
  const _0x2360b0 = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x5a04ce = {
    open: false,
    type: 2,
    index: 0
  };
  const _0x16cbf7 = {
    open: false,
    type: 1,
    index: 0
  };
  const _0xe141e2 = {
    open: false,
    type: 2,
    index: 0
  };
  const _0x53f66e = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x49e78e = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x375765 = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x3fc314 = {
    open: false,
    type: 1,
    index: 0
  };
  const _0x14ed6a = {
    open: false,
    type: 5,
    index: 0
  };
  const _0x8b7788 = {
    open: false,
    type: 5,
    index: 0
  };
  const _0x19187e = {
    open: false,
    type: 5,
    index: 0
  };
  const _0xb38123 = {
    open: false,
    type: 5,
    index: 0
  };
  const _0x14dbcf = {
    open: false,
    type: 5,
    index: 0
  };
  const _0x3684c6 = {
    open: false,
    type: 5,
    index: 0
  };
  const _0x1d503c = {
    open: false,
    type: 5,
    index: 0
  };
  const _0x3c7ba4 = {
    open: false,
    type: 5,
    index: 0
  };
  const _0x29263b = {
    open: false,
    type: 5,
    index: 0
  };
  const _0x5aaa76 = {
    open: false,
    type: 5,
    index: 0
  };
  let _0x532c74 = {
    AutoBattleBtn: _0x4be1b9,
    AutoBattleTeamBtn: _0x289dc2,
    BattleType: _0x140cad,
    AutoMoveType: _0x118bd1,
    AutoPathType: _0x44b719,
    BattleLevelInput: _0x32db27,
    AutoBattleClimbBtn: _0x1cd036,
    AutoBattlePotionBtn: _0x9471ac,
    AutoBattlePotionTimeInput: _0x30e2fa,
    AutoBallBtn: _0x1001f1,
    MoveAttackBtn: _0x38676c,
    AutoBattleAgainBtn: _0x341735,
    AutoStageBtn: _0x158a87,
    AutoStageList: {
      open: false,
      type: 4,
      index: JSON.stringify(AutoStageList.selectIdx)
    },
    NoStageType1Btn: _0x1e4c3c,
    NoStageType2Btn: _0x547246,
    NoStageType3Btn: _0x54af52,
    NoStageType4Btn: _0x1299cb,
    NoStageType5Btn: _0x176161,
    AutoBattleLostBtn: _0x1122fb,
    ExpertBattleBtn: _0x4c6752,
    GameSpeedChangeBtn: _0x108323,
    GameSpeedSvipBtn: _0x42244b,
    AutoCookingMasterBtn: _0x358bcf,
    CookingMasterBattleType: _0x4a4d1f,
    CookingMasterBattleLv: _0x463320,
    AutoDevilBtn: _0x50c0d4,
    DevilBattleType: _0x897905,
    DevilBattleTLevelInput: _0x24c2f1,
    AutoDevilAIBtn: _0x4cc1c9,
    AutoDevilClimbBtn: _0x1eca99,
    AutoPylonunBtn: _0x53d71b,
    AutoPylonunList: {
      open: false,
      type: 4,
      index: JSON.stringify(AutoPylonunList.selectIdx)
    },
    AutoBattleCloseBtn: _0x48223c,
    AutoBattleCloseTimeInput: _0x7c4ab9,
    AutoWorldBossBtn: _0x5d318e,
    ResolveEquipBtn: _0x4fdba4,
    EquipQulityList: {
      open: false,
      type: 4,
      index: JSON.stringify(EquipQulityList.selectIdx)
    },
    RetainBlessedBtn: _0x188a01,
    InvincibleBtn: _0x8e4624,
    MoveSpeedBtn: _0x130b32,
    InfiniteThunderBtn: _0x5b64d5,
    FullPickupBtn: _0x143319,
    FullChestBtn: _0x295d4a,
    AttackSpeedBtn: _0xabbd73,
    FightRewardBtn: _0x2fdab7,
    plugTipsList: {
      open: false,
      type: 4,
      index: window.plugTipsList ? JSON.stringify(plugTipsList.selectIdx) : 0
    },
    AttackRangeInput: _0x52fa62,
    JumpVideoBtn: _0x18502d,
    OneKeyVideoBtn: _0xdad0c4,
    AutoRestartBtn: _0x212701,
    AutoRestartInput: _0x382c2e,
    AutoDisconnectBtn: _0x1a3e5b,
    AutoChangeAccountBtn: _0x5571cc,
    tiredCloseBtn: _0x33e362,
    openStatisticsBtn: _0x8d6180,
    GetGuildTaskBtn: _0x504749,
    LimitOfflineBtn: _0x575e1e,
    AutoFindequipLockBtn: _0x1408bd,
    FindequipLockBtn: _0x52b059,
    FindequipWarehouseBtn: _0x28bf90,
    NavigationTipsBtn: _0x48c2c6,
    NavigationList: {
      open: false,
      type: 4,
      index: window.NavigationList ? JSON.stringify(window.NavigationList.selectIdx) : 0
    },
    MatchBtn: _0x247c63,
    MapList: {
      open: false,
      type: 4,
      index: window.MapList ? JSON.stringify(window.MapList.selectIdx) : 0
    },
    SuperPathBtn: _0x1d6619,
    PassingMonsterBtn: _0x366bef,
    PassingMonsterDInput: _0xb0597e,
    FirstTowerBtn: _0x4bd09f,
    FirstTowerList: {
      open: false,
      type: 4,
      index: window.FirstTowerList ? JSON.stringify(window.FirstTowerList.selectIdx) : 0
    },
    FirstTowerTimeInput: _0x20b4a2,
    BossTowerBtn: _0x2360b0,
    BossTowerList: {
      open: false,
      type: 4,
      index: window.BossTowerList ? JSON.stringify(window.BossTowerList.selectIdx) : 0
    },
    BossTowerInput: _0x5a04ce,
    AttackDistanceBtn: _0x16cbf7,
    AttackDistanceInput: _0xe141e2,
    AttackNoMoveBtn: _0x53f66e,
    AutoEquipCrossBtn: _0x49e78e,
    AutoEquipLockBtn: _0x375765,
    AutoEquipWarehouseBtn: _0x3fc314,
    AutoEquipCrossQualityList: {
      open: false,
      type: 4,
      index: window.AutoEquipCrossQualityList ? JSON.stringify(window.AutoEquipCrossQualityList.selectIdx) : 0
    },
    AutoEquipLockQualityList: {
      open: false,
      type: 4,
      index: window.AutoEquipLockQualityList ? JSON.stringify(window.AutoEquipLockQualityList.selectIdx) : 0
    },
    AutoEquipWarehouseQualityList: {
      open: false,
      type: 4,
      index: window.AutoEquipWarehouseQualityList ? JSON.stringify(window.AutoEquipWarehouseQualityList.selectIdx) : 0
    },
    equip1: _0x14ed6a,
    equip2: _0x8b7788,
    equip3: _0x19187e,
    equip4: _0xb38123,
    equip5: _0x14dbcf,
    equip6: _0x3684c6,
    equip7: _0x1d503c,
    equip8: _0x3c7ba4,
    equip9: _0x29263b,
    equip10: _0x5aaa76
  };
  for (let _0xe69894 in _0x532c74) {
    let _0x54e32e = _0x532c74[_0xe69894],
      _0x380579 = _0xe69894;
    switch (_0x54e32e.type) {
      case 1:
        if (_0x380579.indexOf("Btn")) {
          _0x380579 = _0x380579.slice(0, _0x380579.indexOf("Btn"));
        }
        _0x54e32e.open = window[_0x380579] || false;
        break;
      case 2:
        if (window[_0x380579]) {
          _0x54e32e.index = Number(window[_0x380579].string);
        }
        break;
      case 3:
        if (window[_0x380579]) {
          _0x54e32e.index = Number(window[_0x380579].selectIdx);
        }
        break;
      case 4:
        if (window[_0x380579]) {
          _0x54e32e.index = JSON.stringify(window[_0x380579].selectIdx);
        }
        break;
      case 5:
        if (window[_0x380579]) {
          _0x54e32e.index = Number(window[_0x380579].selectIdx);
        }
        break;
    }
  }
  return _0x532c74;
}
function updatePanghuBtn(_0x527218) {
  for (let _0x109b3a in _0x527218) {
    let _0x592a0a = _0x527218[_0x109b3a],
      _0x158eda = _0x109b3a;
    switch (_0x592a0a.type) {
      case 1:
        let _0x29f7be = _0x158eda;
        if (_0x158eda.indexOf("Btn")) {
          _0x29f7be = _0x158eda.slice(0, _0x158eda.indexOf("Btn"));
        }
        if (window[_0x29f7be] == undefined) {
          window[_0x29f7be] = false;
        }
        window[_0x29f7be] != _0x592a0a.open && window[_0x158eda] && window[_0x158eda].emit(cc.Node.EventType.TOUCH_END);
        break;
      case 2:
        _0x592a0a.index != null && window[_0x158eda] && (window[_0x158eda].string = _0x592a0a.index);
        break;
      case 3:
        window[_0x158eda] && (window[_0x158eda].selectIdx = _0x592a0a.index, window[_0x158eda].selectLabel.string = window[_0x158eda].items[_0x592a0a.index]);
        break;
      case 4:
        if (window[_0x158eda]) {
          for (let _0x485853 in window[_0x158eda].selectIdx) {
            window[_0x158eda].selectIdx[_0x485853] && window[_0x158eda].selectBox.list[Number(_0x485853) - 1].emit(cc.Node.EventType.TOUCH_END);
          }
          let _0x131b79 = JSON.parse(_0x592a0a.index);
          for (let _0x2403dc in _0x131b79) {
            _0x131b79[_0x2403dc] && window[_0x158eda].selectBox.list[Number(_0x2403dc) - 1].emit(cc.Node.EventType.TOUCH_END);
          }
        }
        break;
      case 5:
        if (window[_0x158eda]) {
          window[_0x158eda].selectIdx = _0x592a0a.index;
          window[_0x158eda].selectLabel.string = window[_0x158eda].items[_0x592a0a.index];
          let _0xf2ce77 = getEquipQuality(window[_0x158eda].items[_0x592a0a.index]);
          setEquipSelectListColor(window[_0x158eda], _0xf2ce77);
        }
        break;
    }
  }
}
function updatePanghuFunction() {
  updateAncestralData();
}
function autoLoginAccount() {
  loginAccount();
  window.AutoChangeTime = setInterval(() => {
    if (!window.LoginScene || !window.Account || !window.Account.data.roles || !window.Account.data.roles.length) {
      return;
    }
    window.ChangeLogin = true;
    clearInterval(window.AutoChangeTime);
    let _0x17a734 = getNextAutoAccount();
    _0x17a734 ? (window.LoginScene.onSelectRole(_0x17a734), window.LoginScene.welcomeGO.enterRefreshUI(), window.AutoChangeTime2 = setInterval(() => {
      window.ChangeLogin ? restartGameAccount() : clearInterval(window.AutoChangeTime2);
    }, 60000)) : (cc.sys.localStorage.setItem("AutoCloseGame", true), window.location.href = window.location.href);
  }, 1000);
}
function getNextAutoAccount() {
  if (!cc.sys.localStorage.getItem("AccountIdInput") || cc.sys.localStorage.getItem("AccountIdInput") == "") {
    return;
  }
  let _0xf17e42 = cc.sys.localStorage.getItem("AccountIdInput").split("#"),
    _0x1b4f02 = JSON.parse(cc.sys.localStorage.getItem("CompleteAccount")) || [];
  for (let _0x2c604f in _0xf17e42) {
    let _0xd02db2 = _0xf17e42[_0x2c604f];
    if (_0x1b4f02.indexOf(Number(_0xd02db2)) == -1) {
      let _0x10b733 = getNextAutoAccountIsValid(Number(_0xd02db2));
      return _0x10b733 ? Number(_0xd02db2) : (showTips("【系统】不存在的角色id，请检查", true), null);
    }
  }
  return null;
}
function getNextAutoAccountIsValid(_0x36c19b) {
  if (!window.Account || !window.Account.data || !window.Account.data.roles.length) {
    return false;
  }
  for (let _0x4b0fc9 in window.Account.data.roles) {
    let _0x59c0b6 = window.Account.data.roles[_0x4b0fc9];
    if (_0x59c0b6 && _0x59c0b6.id == _0x36c19b) {
      return true;
    }
  }
  return false;
}
function openAutoChangeAccount() {
  cc.sys.localStorage.setItem("AutoChangeAccount", true);
}
function closeAutoChangeAccount() {
  cc.sys.localStorage.setItem("AutoChangeAccount", false);
}
function saveCompleteAccount() {
  let _0x334ee2 = JSON.parse(cc.sys.localStorage.getItem("CompleteAccount")) || [];
  _0x334ee2.indexOf(Service._playerService.pId) == -1 && _0x334ee2.push(Service._playerService.pId);
  cc.sys.localStorage.setItem("CompleteAccount", JSON.stringify(_0x334ee2));
  window.AutoChangeAccount && cc.sys.localStorage.setItem("NextAccountLogin", true);
}
function resetAutoChangeAccountData(_0x345f75 = true) {
  if (_0x345f75) {
    showTips("【系统】重置换号状态", true);
  }
  cc.sys.localStorage.setItem("CompleteAccount", null);
  cc.sys.localStorage.setItem("NextAccountLogin", false);
}
function openFashion() {
  if (window.FashionBox) {
    window.FashionBox.active = true;
    window.FashionMask.active = true;
    window.cheatingBox.active = false;
    updateFashionData();
    return;
  }
  window.cheatingBox.active = false;
  window.FashionMask = createNode("FashionMask", 0, 0, cc.winSize.width, cc.winSize.height, "6F6F6F", cc.Canvas.instance.node, true, _0x4e4ede => {
    window.FashionBox.active = false;
    window.FashionMask.active = false;
    window.cheatingBox.active = true;
  });
  window.FashionMask.group = "ui";
  window.FashionMask.opacity = 0;
  window.FashionMask.zIndex = 97;
  window.FashionBox = createNode("FashionBox", 0, 0, 680, 950, "6F6F6F", cc.Canvas.instance.node, true, _0x253c87 => {});
  window.FashionBox.group = "ui";
  window.FashionBox.zIndex = 98;
  window.FashionBox.getComponent(cc.Sprite).spriteFrame = null;
  let _0x332bfc = new cc.Node("FashionContentBox");
  window.FashionContentBox = _0x332bfc;
  _0x332bfc.x = 0;
  _0x332bfc.y = -30;
  window.FashionScrollView = createScrollView(0, 0, cc.winSize.width, 840, 750, window.FashionBox);
  window.FashionScrollView.content.addChild(_0x332bfc);
  createLabel("title", "胖虎皮肤盒子", "EDDA60", "000000", 0, 440, 40, window.FashionBox, false);
  createLabel("title", "【时装功能】", "e3e3c7", "000000", -330, 0, 34, _0x332bfc, true);
  window.Fashion0 = createLabel("Fashion0", "头盔", "ffffff", "000000", -315, -50, 36, _0x332bfc, true);
  window.Fashion0List = createSelectList("Fashion0List", ["职业未加载"], "000000", "ffffff", -120, -50, 180, 40, 30, _0x332bfc, () => {
    updatePlayerFashion();
  });
  window.Fashion3 = createLabel("Fashion3", "胸甲", "ffffff", "000000", 0, -50, 36, _0x332bfc, true);
  window.Fashion3List = createSelectList("Fashion3List", ["职业未加载"], "000000", "ffffff", 195, -50, 180, 40, 30, _0x332bfc, () => {
    updatePlayerFashion();
  });
  window.Fashion9 = createLabel("Fashion9", "武器", "ffffff", "000000", -315, -100, 36, _0x332bfc, true);
  window.Fashion9List = createSelectList("Fashion9List", ["职业未加载"], "000000", "ffffff", -120, -100, 180, 40, 30, _0x332bfc, () => {
    updatePlayerFashion();
  });
  window.Fashion10 = createLabel("Fashion10", "副手", "ffffff", "000000", 0, -100, 36, _0x332bfc, true);
  window.Fashion10List = createSelectList("Fashion10List", ["职业未加载"], "000000", "ffffff", 195, -100, 180, 40, 30, _0x332bfc, () => {
    updatePlayerFashion();
  });
  window.Fashion4 = createLabel("Fashion4", "翅膀", "ffffff", "000000", -315, -150, 36, _0x332bfc, true);
  window.Fashion4List = createSelectList("Fashion4List", ["职业未加载"], "000000", "ffffff", -120, -150, 180, 40, 30, _0x332bfc, () => {
    updatePlayerFashion();
  });
  window.Fashion99 = createLabel("Fashion4", "套装", "ffffff", "000000", 0, -150, 36, _0x332bfc, true);
  window.Fashion99List = createSelectList("Fashion99List", ["职业未加载"], "000000", "ffffff", 195, -150, 180, 40, 30, _0x332bfc, () => {
    updatePlayerFashionSuit();
  });
  window.AutoFashionBtn = createToggleButton("AutoFashionBtn", "开启盒子", "ffffff", "000000", -315, -200, 34, _0x332bfc, true, _0x30fac6 => {
    window.AutoFashion = !window.AutoFashion;
    window.AutoFashion ? (updatePlayerFashion(), showTips("【时装】开启时装盒子", true), _0x30fac6.select2.active = true, _0x30fac6.select1.active = false, _0x30fac6.btnLabel.color = cc.color().fromHEX("8ce8fb")) : (_0x30fac6.select1.active = true, _0x30fac6.select2.active = false, _0x30fac6.btnLabel.color = cc.color().fromHEX("ffffff"));
  });
  window.FashionTips1 = createLabel("FashionTips", "英雄联盟同款换肤盒子，hhh", "79FF71", "000000", -315, -700, 36, _0x332bfc, true);
  window.FashionTips2 = createLabel("FashionTips", "无属性加成，别人也看不到，自慰效果", "79FF71", "000000", -315, -750, 36, _0x332bfc, true);
  window.FashionTips3 = createLabel("FashionTips", "翅膀需要在主城开启", "79FF71", "000000", -315, -800, 36, _0x332bfc, true);
  updateFashionData();
}
function openGameSpeedChange() {
  cc.director.calculateDeltaTime = function (_0x35a154) {
    _0x35a154 || (_0x35a154 = performance.now());
    this._deltaTime = _0x35a154 > this._lastUpdate ? (_0x35a154 - this._lastUpdate) / 1000 : 0;
    this._lastUpdate = _0x35a154;
    this._deltaTime *= window.GameSpeedChange ? Number(window.GameSpeedInput.string) : 1;
  };
}
function openGameSpeedSvip() {
  !getSSvip() && window.GameSpeedSvip && Number(window.GameSpeedSvipInput.string) >= 3 && (window.GameSpeedSvipInput.string = 3);
  cc.director.calculateDeltaTime = function (_0x3a3f5f) {
    _0x3a3f5f || (_0x3a3f5f = performance.now());
    this._deltaTime = _0x3a3f5f > this._lastUpdate ? (_0x3a3f5f - this._lastUpdate) / 1000 : 0;
    this._lastUpdate = _0x3a3f5f;
    this._deltaTime *= window.GameSpeedSvip ? Number(window.GameSpeedSvipInput.string) : 1;
  };
}
function specialFun2() {
  let _0x1dd86c = 2;
  for (let _0x4a4273 = 0; _0x4a4273 < _0x1dd86c; _0x4a4273++) {
    setTimeout(() => {
      window.fightMgr.fight.generateNextRoom();
    }, _0x4a4273 * 10);
  }
  let _0x1a19ed = 0;
  window.dieMonsterTime = setInterval(() => {
    _0x1a19ed++;
    if (_0x1a19ed >= 3) {
      clearInterval(window.dieMonsterTime);
      return;
    }
    for (let _0x1c8026 in window.fightMgr.fight.unitsManager.defenders) {
      let _0x1d57e9 = window.fightMgr.fight.unitsManager.defenders[_0x1c8026];
      if (_0x1d57e9.Dead) {
        continue;
      }
      _0x1d57e9.die();
    }
    setTimeout(() => {
      console.log("结束");
      fightMgr.fight.onSuccess();
    }, 1000);
  }, (_0x1dd86c + 5) * 10);
}
function openspecialFun3() {
  closespecialFun3();
  window.specialFun3Time = setInterval(() => {
    startspecialFun3();
  }, 500);
}
function closespecialFun3() {
  clearInterval(window.specialFun3Time);
}
function startspecialFun3() {
  if (!window.fightMgr || !window.fightMgr.fight.fightTime) {
    return;
  }
  if (window.fightMgr.fight.state == 3) {
    return;
  }
  for (let _0x589f0f in window.fightMgr.fight.teamComponent.heroStateDatas) {
    let _0x287002 = window.fightMgr.fight.teamComponent.heroStateDatas[_0x589f0f];
    if (!_0x287002) {
      window.fightMgr.fight.fightService.uiFightFrame.exitButton.onClickExit();
      return;
    }
  }
}
window.lastEquipSuitIndex = 0;
function showEquipSuitBox(_0xf78e9b) {
  if (window.lastEquipSuitIndex == _0xf78e9b) {
    return;
  }
  window.lastEquipSuitIndex = _0xf78e9b;
  for (let _0x3ffea3 = 1; _0x3ffea3 <= 5; _0x3ffea3++) {
    if (!window["EquipSuit" + _0x3ffea3]) {
      continue;
    }
    let _0x18b109 = window["EquipSuit" + _0x3ffea3].selectBg;
    _0x18b109 && (_0x18b109.opacity = 0);
    let _0x7121c4 = window["equipSuitBox" + _0x3ffea3];
    _0x7121c4 && (_0x7121c4.active = false);
  }
  window["EquipSuit" + _0xf78e9b].selectBg.opacity = 255;
  initFindEquipList();
  initFindEquipAttr();
}
window.EquipList = {};
window.saveFindEquipAttrs = {};
window.curFindEquipType = 0;
window.curFindfession = 0;
function updateFindData() {
  if (!getBD()) {
    return;
  }
  if (!window.mainScene) {
    return;
  }
  if (!Service._heroService.heroBaseData) {
    return;
  }
  if (window.curFindfession && window.curFindfession == Service._heroService.profession) {
    return;
  }
  let _0x4bc611 = Service._heroService.profession;
  window.curFindfession = _0x4bc611;
  window.FindequipState.label.string = "【" + gameConfig.Profession[configList.Profession[window.curFindfession]] + "】";
  window.EquipList = {};
  for (let _0xf2d942 in configList.Equip.list) {
    let _0x46c15c = configList.Equip.list[_0xf2d942];
    if (_0x46c15c.professionLimit == window.curFindfession && _0x46c15c.PrimeEquipId && _0x46c15c.quality >= 4) {
      if (!window.EquipList[_0x46c15c.type]) {
        window.EquipList[_0x46c15c.type] = [];
      }
      let _0x40ba15 = false;
      for (let _0x366bf0 in window.EquipList[_0x46c15c.type]) {
        let _0x39b487 = window.EquipList[_0x46c15c.type][_0x366bf0];
        if (_0x39b487.PrimeEquipId == _0x46c15c.PrimeEquipId) {
          _0x40ba15 = true;
          continue;
        }
      }
      !_0x40ba15 && window.EquipList[_0x46c15c.type].push(_0x46c15c);
    }
  }
  let _0x4d3928 = ["护肩"].concat(getEquipNameList(getEquipList(4)));
  updateEquipList(window.Findequip4, _0x4d3928);
  let _0x28c99d = ["手套"].concat(getEquipNameList(getEquipList(7)));
  updateEquipList(window.Findequip7, _0x28c99d);
  let _0x24937d = ["武器"].concat(getEquipNameList(getEquipList(9)));
  updateEquipList(window.Findequip9, _0x24937d);
  let _0x310c68 = ["头盔"].concat(getEquipNameList(getEquipList(1)));
  updateEquipList(window.Findequip1, _0x310c68);
  let _0x25e726 = ["胸甲"].concat(getEquipNameList(getEquipList(3)));
  updateEquipList(window.Findequip3, _0x25e726);
  let _0xf5ad28 = ["护腿"].concat(getEquipNameList(getEquipList(5)));
  updateEquipList(window.Findequip5, _0xf5ad28);
  let _0x621c4b = ["鞋子"].concat(getEquipNameList(getEquipList(6)));
  updateEquipList(window.Findequip6, _0x621c4b);
  let _0x5bebd5 = ["项链"].concat(getEquipNameList(getEquipList(2)));
  updateEquipList(window.Findequip2, _0x5bebd5);
  let _0x5af218 = ["戒指"].concat(getEquipNameList(getEquipList(8)));
  updateEquipList(window.Findequip8, _0x5af218);
  let _0x234afe = ["副手"].concat(getEquipNameList(getEquipList(10)));
  updateEquipList(window.Findequip10, _0x234afe);
  initFindEquipList();
}
function initFindEquipList() {
  window.saveFindEquipAttrs = {};
  updateFindEquipState();
  let _0x2c6096 = ["护肩"].concat(getEquipNameList(getEquipList(4)));
  updateEquipList(window.Findequip4, _0x2c6096);
  let _0x1dfcbb = ["手套"].concat(getEquipNameList(getEquipList(7)));
  updateEquipList(window.Findequip7, _0x1dfcbb);
  let _0x204d31 = ["武器"].concat(getEquipNameList(getEquipList(9)));
  updateEquipList(window.Findequip9, _0x204d31);
  let _0x11ccfe = ["头盔"].concat(getEquipNameList(getEquipList(1)));
  updateEquipList(window.Findequip1, _0x11ccfe);
  let _0x443e34 = ["胸甲"].concat(getEquipNameList(getEquipList(3)));
  updateEquipList(window.Findequip3, _0x443e34);
  let _0x13b24b = ["护腿"].concat(getEquipNameList(getEquipList(5)));
  updateEquipList(window.Findequip5, _0x13b24b);
  let _0x223fe4 = ["鞋子"].concat(getEquipNameList(getEquipList(6)));
  updateEquipList(window.Findequip6, _0x223fe4);
  let _0x12fcff = ["项链"].concat(getEquipNameList(getEquipList(2)));
  updateEquipList(window.Findequip2, _0x12fcff);
  let _0x109549 = ["戒指"].concat(getEquipNameList(getEquipList(8)));
  updateEquipList(window.Findequip8, _0x109549);
  let _0x5e03a9 = ["副手"].concat(getEquipNameList(getEquipList(10)));
  updateEquipList(window.Findequip10, _0x5e03a9);
  if (!window.lastEquipSuitIndex) {
    return;
  }
  let _0x5a2f34 = window.tokenData.data.combSdkInfo.userId,
    _0x2147d8 = Service._playerService.pId;
  if (!cc.sys.localStorage.getItem("FindEquipCfgs_" + _0x5a2f34 + "_" + _0x2147d8) || cc.sys.localStorage.getItem("FindEquipCfgs_" + _0x5a2f34 + "_" + _0x2147d8) == "") {
    return;
  }
  let _0x92e1a8 = JSON.parse(cc.sys.localStorage.getItem("FindEquipCfgs_" + _0x5a2f34 + "_" + _0x2147d8));
  if (!_0x92e1a8) {
    return;
  }
  window.saveFindEquipAttrs = _0x92e1a8;
  let _0x27f7d3 = window.saveFindEquipAttrs[window.lastEquipSuitIndex];
  if (_0x27f7d3) {
    for (let _0x1f27c1 in _0x27f7d3) {
      let _0x1e1791 = Number(_0x1f27c1),
        _0x3a68ff = _0x27f7d3[_0x1f27c1],
        _0x5233db = _0x3a68ff.equipId;
      if (_0x5233db) {
        let _0x2d5570 = getEquipCfg(_0x5233db),
          _0xc2c33e = window["Findequip" + _0x1e1791].items.indexOf(_0x2d5570.name);
        if (_0xc2c33e != -1) {
          window["Findequip" + _0x1e1791].selectIdx = _0xc2c33e;
          window["Findequip" + _0x1e1791].selectLabel.string = window["Findequip" + _0x1e1791].items[_0xc2c33e];
          let _0x13c910 = getEquipQuality(window["Findequip" + _0x1e1791].items[_0xc2c33e]);
          setEquipSelectListColor(window["Findequip" + _0x1e1791], _0x13c910);
        }
      }
    }
  }
  updateFindEquipState();
}
function initFindEquipAttr() {
  window.curFindEquipType = 0;
  window.FindequipName.label.string = "【装备未读取】";
  window.FindequipAttrVal.selectIdx = 0;
  window.FindequipAttrVal.selectLabel.string = window.FindequipAttrVal.items[0];
  for (let _0x265136 in window.AFindequipQualityList.selectIdx) {
    window.AFindequipQualityList.selectIdx[_0x265136] && window.AFindequipQualityList.selectBox.list[Number(_0x265136) - 1].emit(cc.Node.EventType.TOUCH_END);
  }
  window.FindequipAttr1.selectIdx = 0;
  window.FindequipAttr1.items = ["词条1"];
  window.FindequipAttr1.selectLabel.string = window.FindequipAttr1.items[0];
  window.FindequipAttr2.selectIdx = 0;
  window.FindequipAttr2.items = ["词条2"];
  window.FindequipAttr2.selectLabel.string = window.FindequipAttr2.items[0];
  window.FindequipAttr3.selectIdx = 0;
  window.FindequipAttr3.items = ["词条3"];
  window.FindequipAttr3.selectLabel.string = window.FindequipAttr3.items[0];
  window.FindequipAttr4.selectIdx = 0;
  window.FindequipAttr4.items = ["词条4"];
  window.FindequipAttr4.selectLabel.string = window.FindequipAttr4.items[0];
}
function setFindEquipAttr(_0x52f5f8) {
  initFindEquipAttr();
  if (!window.mainScene) {
    return;
  }
  if (!Service._heroService.heroBaseData) {
    return;
  }
  if (!window.curFindfession) {
    return;
  }
  if (!window["Findequip" + _0x52f5f8]) {
    return;
  }
  let _0x3c6a5c = window["Findequip" + _0x52f5f8].selectLabel.string;
  if (_0x3c6a5c == undefined) {
    return;
  }
  let _0x222ac7 = getEquipCfgName(_0x3c6a5c, window.curFindfession);
  if (!_0x222ac7) {
    return;
  }
  window.curFindEquipType = _0x52f5f8;
  window.FindequipName.label.string = "【" + _0x3c6a5c + "】";
  for (let _0x445347 in _0x222ac7.secondaryAttGroup) {
    let _0x1b2fa1 = Number(_0x445347) + 1,
      _0xc4a3de = _0x222ac7.secondaryAttGroup[_0x445347],
      _0x1dd3e3 = getEquipAttGroupCfg(_0xc4a3de),
      _0x550514 = [];
    for (let _0x1c1d9c in _0x1dd3e3) {
      let _0x425d11 = _0x1dd3e3[_0x1c1d9c],
        _0x2a4501 = getAttributeCfg(_0x425d11);
      _0x550514.push(_0x2a4501.name);
    }
    window["FindequipAttr" + _0x1b2fa1].items = ["词条1"].concat(_0x550514);
  }
  if (!window.saveFindEquipAttrs[window.lastEquipSuitIndex]) {
    return;
  }
  let _0x42fe54 = window.saveFindEquipAttrs[window.lastEquipSuitIndex][window.curFindEquipType];
  if (!_0x42fe54) {
    return;
  }
  window.FindequipAttrVal.selectIdx = _0x42fe54.attrSum;
  window.FindequipAttrVal.selectLabel.string = window.FindequipAttrVal.items[_0x42fe54.attrSum];
  for (let _0x459632 = 1; _0x459632 <= 4; _0x459632++) {
    let _0x27d0bf = Number(_0x459632),
      _0x142e83 = _0x42fe54["attr" + _0x459632];
    if (_0x142e83) {
      let _0x3da7d7 = getAttributeCfg(_0x142e83);
      if (_0x3da7d7) {
        let _0x2316b3 = window["FindequipAttr" + _0x27d0bf].items.indexOf(_0x3da7d7.name);
        window["FindequipAttr" + _0x27d0bf].selectIdx = _0x2316b3;
        window["FindequipAttr" + _0x27d0bf].selectLabel.string = _0x3da7d7.name;
      }
    }
  }
  for (let _0x3e5f24 in _0x42fe54.qualitys) {
    _0x42fe54.qualitys[_0x3e5f24] && window.AFindequipQualityList.selectBox.list[Number(_0x3e5f24) - 1].emit(cc.Node.EventType.TOUCH_END);
  }
}
function findequipLoadCfg() {
  if (!window.mainScene) {
    return;
  }
  if (!Service._heroService.heroBaseData) {
    return;
  }
  if (!window.FindequipInput || window.FindequipInput.string == "") {
    showTips("【装备】数据为空", true);
    window.FindequipInput.string = "";
    return;
  }
  let _0x3a65bd = JSON.parse(stringUnzip(window.FindequipInput.string));
  if (!_0x3a65bd) {
    showTips("【装备】数据格式错误，请重新输入", true);
    return;
  }
  if (_0x3a65bd.profession != window.curFindfession) {
    showTips("【装备】职业不匹配，配置无法使用", true);
    return;
  }
  showTips("【装备】导入本套配置成功", true);
  window.saveFindEquipAttrs[window.lastEquipSuitIndex] = _0x3a65bd.findEquipData;
  let _0x475027 = window.tokenData.data.combSdkInfo.userId,
    _0x5723c8 = Service._playerService.pId;
  cc.sys.localStorage.setItem("FindEquipCfgs_" + _0x475027 + "_" + _0x5723c8, JSON.stringify(window.saveFindEquipAttrs));
  initFindEquipList();
}
function findequipSaveCfg() {
  if (!window.mainScene) {
    return;
  }
  if (!Service._heroService.heroBaseData) {
    return;
  }
  if (!window.saveFindEquipAttrs[window.lastEquipSuitIndex]) {
    showTips("【装备】配置不存在", true);
    return;
  }
  showTips("【装备】本套配置导出成功", true);
  const _0x46de0d = {
    profession: window.curFindfession,
    findEquipData: window.saveFindEquipAttrs[window.lastEquipSuitIndex]
  };
  window.FindequipInput.string = stringZip(JSON.stringify(_0x46de0d));
}
function saveFindEquipData() {
  if (!window.FindequipAttrVal.selectIdx) {
    showTips("【装备】请先选择词条数量", true);
    return;
  }
  let _0x16c18a = false;
  for (let _0x3e028e in window.AFindequipQualityList.selectIdx) {
    if (window.AFindequipQualityList.selectIdx[_0x3e028e]) {
      _0x16c18a = true;
      break;
    }
  }
  if (!_0x16c18a) {
    showTips("【装备】请先选择品质", true);
    return;
  }
  if (!window.curFindEquipType) {
    showTips("【装备】未读取", true);
    return;
  }
  !window.saveFindEquipAttrs[window.lastEquipSuitIndex] && (window.saveFindEquipAttrs[window.lastEquipSuitIndex] = {});
  let _0x4469af = getEquipCfgName(window["Findequip" + window.curFindEquipType].selectLabel.string),
    _0x3dd6b0 = {
      equipId: _0x4469af ? _0x4469af.id : 0,
      attrSum: Number(window.FindequipAttrVal.selectIdx),
      attr1: 0,
      attr2: 0,
      attr3: 0,
      attr4: 0,
      qualitys: {}
    };
  if (window.FindequipAttr1.selectIdx) {
    let _0xef12ef = getAttributeCfgName(window.FindequipAttr1.selectLabel.string);
    if (_0xef12ef) {
      _0x3dd6b0.attr1 = _0xef12ef.id;
    }
  }
  if (window.FindequipAttr2.selectIdx) {
    let _0x520834 = getAttributeCfgName(window.FindequipAttr2.selectLabel.string);
    if (_0x520834) {
      _0x3dd6b0.attr2 = _0x520834.id;
    }
  }
  if (window.FindequipAttr3.selectIdx) {
    let _0x21fd86 = getAttributeCfgName(window.FindequipAttr3.selectLabel.string);
    if (_0x21fd86) {
      _0x3dd6b0.attr3 = _0x21fd86.id;
    }
  }
  if (window.FindequipAttr4.selectIdx) {
    let _0x4a13c1 = getAttributeCfgName(window.FindequipAttr4.selectLabel.string);
    if (_0x4a13c1) {
      _0x3dd6b0.attr4 = _0x4a13c1.id;
    }
  }
  for (let _0xcc7712 in window.AFindequipQualityList.selectIdx) {
    _0x3dd6b0.qualitys[_0xcc7712] = window.AFindequipQualityList.selectIdx[_0xcc7712];
  }
  window.saveFindEquipAttrs[window.lastEquipSuitIndex][window.curFindEquipType] = _0x3dd6b0;
  showTips("【装备】配置保存成功", true);
  let _0x31acf4 = window.tokenData.data.combSdkInfo.userId,
    _0x57b578 = Service._playerService.pId;
  cc.sys.localStorage.setItem("FindEquipCfgs_" + _0x31acf4 + "_" + _0x57b578, JSON.stringify(window.saveFindEquipAttrs));
  updateFindEquipState();
}
function findequipDelCfg() {
  showTips("【装备】删除本套配置", true);
  window.saveFindEquipAttrs[window.lastEquipSuitIndex] = {};
  let _0x911956 = window.tokenData.data.combSdkInfo.userId,
    _0x5579de = Service._playerService.pId;
  cc.sys.localStorage.setItem("FindEquipCfgs_" + _0x911956 + "_" + _0x5579de, JSON.stringify(window.saveFindEquipAttrs));
  initFindEquipList();
  initFindEquipAttr();
  updateFindEquipState();
}
function FindequipServerUse() {
  if (!window.mainScene) {
    return;
  }
  if (!Service._heroService.heroBaseData) {
    return;
  }
  let _0x3b6c08 = window.FindequipServerConfigList.selectIdx;
  if (!_0x3b6c08) {
    showTips("【装备】服务器配置选择错误", true);
    return;
  }
  let _0x57425e = null;
  for (let _0x3cc135 in window.findequipServerConfigDataList) {
    let _0x1d3fdd = window.findequipServerConfigDataList[_0x3cc135];
    if (Number(_0x3cc135) + 1 == _0x3b6c08) {
      _0x57425e = _0x1d3fdd;
      continue;
    }
  }
  let _0x2a8bc6 = JSON.parse(stringUnzip(_0x57425e.data));
  if (_0x2a8bc6.profession != window.curFindfession) {
    showTips("【装备】职业不匹配，配置无法使用", true);
    return;
  }
  showTips("【装备】使用配置成功", true);
  window.saveFindEquipAttrs[window.lastEquipSuitIndex] = _0x2a8bc6.findEquipData;
  let _0x2fd7b8 = window.tokenData.data.combSdkInfo.userId,
    _0x30377b = Service._playerService.pId;
  cc.sys.localStorage.setItem("FindEquipCfgs_" + _0x2fd7b8 + "_" + _0x30377b, JSON.stringify(window.saveFindEquipAttrs));
  initFindEquipList();
}
const _0x1d95ea = {
  desc: "德鲁伊-毒爆词条",
  data: "eJy11MtugzAQBdB/mTWL8RPjdbvoul9gKSAhpXnwWEQR/95xAZNaVpKF2URXyISjOwN3uHTnpu779nwCKwto2tPh8zq2lw83OLB3YP6n9le+DnRCIkNEJgpww9B9jz9gl0wH9Zw42GpOAixjc5R0M129ju7YDrd++euhG+sC+BrofOOOPSUZkgpJL2ma/m55YAmJnFiyesFaMfQcoTcX5nOJ/3UpFL6uMulSwaUDywSVB+ZSyXiIklTcvK3aaYgqLkv5sh6HyJ+y1nnTczKOUMcq7cvCZFmCBZYKrH02q4xZpWe92vgyqLaumMmnMvFmGVLpdFmbSqRXK2NbVeyq0O9W0mWef7ZyvogMI5f/mqLm77vMDnVN0y/U88W+"
};
const _0xf6b159 = {
  desc: "魂灵师-冰仪式词条",
  data: "eJy91DtuhDAQBuC7TE3hN7brpEidE1hakJA2+wBTrFbcPXYAY1lT4jToFxqjT+Nh3vAY7303TcP9BlY20A+3y+dzHh4fzjuwb6Dx0cU3X5dQIQklhDDagPN+/J5/wLI1h0KzJgaWbgUcrFBrFGBJA8/ZXQf/mrZP+3HuGmB7COW9u04hiZRkSmpLy/J3JGcJwiLLoKwdE85wlVzc1HDx0sWDi4rMRZNLYyxSQyVKlYgqjaqybonKLFnOloyXiDdrt7BkqaVSpUpFlURVPBstU5fVlqw2sDhBJ75NqgO1X/e5Kl1Olg4qiav+8z80pcvEbuVri2NrSx+sY22x81iUFK64TYlmqEtjrqNbsXHnuJblF8kVxYk="
};
const _0x135b82 = {
  desc: "魔法师-神圣激光词条",
  data: "eJzF1M1qhDAQB/B3mbOHySTGJOf20HOfILAKwnY/NB6WxXdvsq7RDYFC0fYif2QSfgyTucOlOzd137fnExheQNOeDu/Xob28WWfB3IGFTx3+fBx8hUCGiNxXWue6z+ELDE3ZF+opERjGpsjBCDVFAQYLuA722Lpb/7zadUNdAM3Blzf22PskYipjks80jo8jrywKLL1i8ciaMf4MqejiMrrCua1g/BVWIvcwrFYwFmEqumYMfzRp+3aJVCWCSmVVq3YJtS+rTFllYOksi9SfsWTKkl7FMMviS7fm8duLVaUzX4WZlz89xaVZ1R4qlaqUVxH+/0vUKUyH4WJZWHZzsWVz0XYshokrLFQU9CvXdv0ax28R2cZK"
};
const _0x329d63 = {
  desc: "野蛮人-火冲锋词条",
  data: "eJy91LmOgzAQBuB3mZpifGK73i223iewFJCQcnIUUcS7rx3AbCxHNCYN+oXG6NPM4Adc20tddV1zOYOhBdTN+fB9G5rrl+0tmAcQ/6j8m5+Dq+BIEJGxAmzft7/DCcycXaGeEgVDyBQZGC6myMHIAm6DPTb9vZs/3bdDVQBdgiuv7bFziYckQpJzGsfnkVcWdSyik6wF485QFVxMBhfHfDD2ChPIPKxMwlRwLRj2bNLMEvlUPFZxr1JJldyYYkaWiFni/RTp2q0Fs1e3ZMySjkUxyWLrcnHcl1XGO1/6bsmNIa690gHlJ59LpWKVet+sj/6JOoZpDyPp5Vp3XiX6xTLeXAQjl79QkdIN17/l2mOO4/gHtB/GLQ=="
};
const _0x2eadbb = {
  desc: "游侠-冰分裂词条",
  data: "eJzF1LuKxCAUBuB3sU6hHjVqvVtsvU8gTAKBueZSLEPefY+TREWEaZLdJvyEY/j4jT7Jvb+1zTB0tyuxrCJtdz19Pqbu/uFGR+yTMP9o/JuvE05IyiilDCfdOPbf04VYvmQcNEviOLcOALFCLVEQSyvymNy5G3+G9dNjPzUV4VvA8dadB0wiJBmSWtM8v5akLEE5smqVsCCwNgyu4Tq4ILrA7AeDvC+gXpbAWIDp4Now8Cpp/7pEXpdAlISiKqlLHMySeVnSl2WKLK7/jKVylvL/vCyyILYF5lhWnW9i7TexfBTroIoopo9Q6VylUaXKJzGqkgvioINocpfBPeTwxhXvBxNUvre9VIxmLH+dUvq/rHn+BQSixYI="
};
window.findequipServerConfigDataList = [_0x1d95ea, _0xf6b159, _0x135b82, _0x329d63, _0x2eadbb];
function updateFindequipServerConfigList() {
  let _0x5e2141 = [];
  for (let _0x3c0ed4 in window.findequipServerConfigDataList) {
    let _0x5cfc67 = window.findequipServerConfigDataList[_0x3c0ed4],
      _0x255ce = stringUnzip(_0x5cfc67.data);
    if (!_0x255ce || _0x255ce == "") {
      continue;
    }
    _0x255ce && _0x5e2141.push(_0x5cfc67.desc);
  }
  let _0x1a5102 = ["服务器配置列表"];
  window.FindequipServerConfigList.items = _0x1a5102.concat(_0x5e2141);
  window.FindequipServerConfigList.selectIdx = 0;
  window.FindequipServerConfigList.selectLabel.string = window.FindequipServerConfigList.items[window.FindequipServerConfigList.selectIdx];
}
function updateFindEquipState() {
  for (let _0x4582c8 = 1; _0x4582c8 <= 10; _0x4582c8++) {
    window["Findequip" + _0x4582c8].selectLabel.node.color = cc.color().fromHEX("000000");
  }
  let _0x2ae106 = window.saveFindEquipAttrs[window.lastEquipSuitIndex];
  if (!_0x2ae106) {
    return;
  }
  for (let _0x22e725 = 1; _0x22e725 <= 10; _0x22e725++) {
    let _0x3a53e5 = _0x2ae106[_0x22e725];
    (!_0x3a53e5 || !_0x3a53e5.equipId) && (window["Findequip" + _0x22e725].selectLabel.node.color = cc.color().fromHEX("ed1c24"));
  }
}
function findBagEquip() {
  if (!getBD()) {
    return;
  }
  let _0x42b0dd = getBagEquipList();
  for (let _0x15a89b in _0x42b0dd) {
    let _0x4cf9cd = Number(_0x15a89b),
      _0x5beb5f = _0x42b0dd[_0x15a89b];
    for (let _0x220c4a in _0x5beb5f) {
      let _0x2a23c1 = _0x5beb5f[_0x220c4a],
        _0x22403f = contrastFindEquipData(_0x2a23c1, _0x4cf9cd);
      if (_0x22403f) {
        !_0x2a23c1.gdEquip.locked && window.FindequipLock && (showTips("【装备】找到符合装备，自动上锁", true), window.Service._equipService.setLock(_0x2a23c1.gdEquip.id, true));
        if (window.FindequipWarehouse) {
          showTips("【装备】找到符合装备，自动存仓库", true);
          let _0x161f1d = getWarehouseIndex();
          _0x161f1d && window.Service._equipService.putIntoWarehouse(_0x161f1d, _0x2a23c1.gdEquip.id);
        }
      }
    }
  }
}
function contrastFindEquipData(_0x135ab3, _0xf4f816) {
  for (let _0x448963 in window.saveFindEquipAttrs) {
    let _0x31fbb5 = window.saveFindEquipAttrs[_0x448963],
      _0x2fca3d = _0x31fbb5[_0xf4f816];
    if (!_0x2fca3d) {
      continue;
    }
    let _0x4d62f7 = getEquipCfg(_0x2fca3d.equipId);
    if (_0x4d62f7.name == _0x135ab3.conf.name) {
      if (_0x2fca3d.qualitys[10 - _0x135ab3.conf.quality]) {
        let _0x2b60cd = 0,
          _0x4cb9ea = _0x135ab3.gdEquip.attrs;
        for (let _0x8a8a6c in _0x4cb9ea) {
          let _0x261f9a = _0x4cb9ea[_0x8a8a6c],
            _0x4be937 = _0x261f9a.t;
          for (let _0x1cfc3f = 1; _0x1cfc3f <= 4; _0x1cfc3f++) {
            let _0x487d8f = _0x2fca3d["attr" + _0x1cfc3f];
            if (_0x4be937 == _0x487d8f) {
              _0x2b60cd++;
              continue;
            }
          }
        }
        if (_0x2b60cd >= _0x2fca3d.attrSum) {
          return true;
        }
      }
    }
  }
  return false;
}
function openAutoFindequipLock() {
  showTips("【装备】开启查找装备", true);
  closeAutoFindequipLock();
  window.AutoFindequipLockTime = setInterval(() => {
    startAutoFindequipLock();
  }, 1000);
}
function closeAutoFindequipLock() {
  clearInterval(window.AutoFindequipLockTime);
}
function startAutoFindequipLock() {
  !window.FindequipLock && !window.FindequipWarehouse && showTips("【装备】找到后当空气？", true);
  findBagEquip();
}
window.curDBfession = 0;
function updateDBData() {
  if (!getBD()) {
    return;
  }
  if (!window.mainScene) {
    return;
  }
  if (!Service._heroService.heroBaseData) {
    return;
  }
  if (window.curDBfession && window.curDBfession == Service._heroService.profession) {
    return;
  }
  let _0x34f698 = Service._heroService.profession;
  window.curDBfession = _0x34f698;
  window.EquipOccupationState.label.string = "【" + gameConfig.Profession[configList.Profession[window.curDBfession]] + "】";
  let _0x59e2b0 = getEquipNameList(getEquipList(4));
  updateEquipList(window.equip4, _0x59e2b0);
  let _0x508030 = getEquipNameList(getEquipList(7));
  updateEquipList(window.equip7, _0x508030);
  let _0x4da3b2 = getEquipNameList(getEquipList(9));
  updateEquipList(window.equip9, _0x4da3b2);
  let _0x456a2c = getEquipNameList(getEquipList(1));
  updateEquipList(window.equip1, _0x456a2c);
  let _0x397b52 = getEquipNameList(getEquipList(3));
  updateEquipList(window.equip3, _0x397b52);
  let _0xd27a82 = getEquipNameList(getEquipList(5));
  updateEquipList(window.equip5, _0xd27a82);
  let _0x4714e2 = getEquipNameList(getEquipList(6));
  updateEquipList(window.equip6, _0x4714e2);
  let _0x5d5444 = getEquipNameList(getEquipList(2));
  updateEquipList(window.equip2, _0x5d5444);
  let _0x430609 = getEquipNameList(getEquipList(8));
  updateEquipList(window.equip8, _0x430609);
  let _0x11accc = getEquipNameList(getEquipList(10));
  updateEquipList(window.equip10, _0x11accc);
}
function updateEquipList(_0x4cd481, _0x13e554) {
  _0x4cd481.items = _0x13e554;
  _0x4cd481.selectIdx = 0;
  _0x4cd481.selectLabel.string = _0x4cd481.items[_0x4cd481.selectIdx];
  let _0x300458 = getEquipQuality(_0x4cd481.items[_0x4cd481.selectIdx]);
  setEquipSelectListColor(_0x4cd481, _0x300458);
}
function openAutoEquipCross() {
  showTips("【策略】开启装备自动穿戴", true);
  showTips("共鸣不会自动", true);
  closeAutoEquipCross();
  window.AutoEquipCrossTime = setInterval(() => {
    startAutoEquipCross();
  }, 100);
}
function closeAutoEquipCross() {
  clearInterval(window.AutoEquipCrossTime);
  for (let _0x46d7b3 = 1; _0x46d7b3 <= 10; _0x46d7b3++) {
    window["equip" + _0x46d7b3].selectLabel.node.color = cc.color().fromHEX("000000");
    window["equip" + _0x46d7b3].selectLabel.getComponent(cc.LabelOutline).width = 0;
  }
}
function startAutoEquipCross() {
  if (!window.Service._equipService.equipData) {
    return;
  }
  if (window.Service._levelService.inHardSanctum) {
    return;
  }
  let _0x2bb809 = getBagEquipList();
  for (let _0x44a5e5 = 1; _0x44a5e5 <= 10; _0x44a5e5++) {
    let _0x21a567 = getMaxQualityEquip(getBagEquip(_0x2bb809, _0x44a5e5, window["equip" + _0x44a5e5].selectLabel.string), window.AutoEquipCrossQualityList.selectIdx);
    if (getEquipCanWearing(_0x21a567, _0x44a5e5)) {
      window.Service._equipService.wear(_0x21a567.gdEquip.id);
    }
  }
  for (let _0x3549e7 = 1; _0x3549e7 <= 10; _0x3549e7++) {
    let _0x3e9657 = getEquipWearingisValid(_0x3549e7);
    _0x3e9657 && _0x3e9657.conf.name == window["equip" + _0x3549e7].selectLabel.string ? (window["equip" + _0x3549e7].selectLabel.node.color = cc.color().fromHEX("000000"), window["equip" + _0x3549e7].selectLabel.getComponent(cc.LabelOutline).width = 0) : (window["equip" + _0x3549e7].selectLabel.node.color = cc.color().fromHEX("ed1c24"), window["equip" + _0x3549e7].selectLabel.getComponent(cc.LabelOutline).width = 2);
  }
}
function openAutoEquipLock() {
  showTips("【策略】开启装备自动上锁", true);
  closeAutoEquipLock();
  window.AutoEquipLockTime = setInterval(() => {
    startAutoEquipLock();
  }, 100);
}
function closeAutoEquipLock() {
  clearInterval(window.AutoEquipLockTime);
}
function startAutoEquipLock() {
  if (!window.Service._equipService.equipData) {
    return;
  }
  let _0x2b9330 = getBagEquipList();
  for (let _0x3eb050 = 1; _0x3eb050 <= 10; _0x3eb050++) {
    lockEquip(getBagEquip(_0x2b9330, _0x3eb050, window["equip" + _0x3eb050].selectLabel.string), window.AutoEquipLockQualityList.selectIdx);
  }
}
function openAutoEquipWarehouse() {
  showTips("【策略】开启装备自动存仓库", true);
  closeAutoEquipWarehouse();
  window.AutoEquipWarehouseTime = setInterval(() => {
    startAutoEquipWarehouse();
  }, 500);
}
function closeAutoEquipWarehouse() {
  clearInterval(window.AutoEquipWarehouseTime);
}
function startAutoEquipWarehouse() {
  if (!window.Service._equipService.equipData) {
    return;
  }
  let _0x342e19 = getBagEquipList();
  for (let _0x3ca812 = 1; _0x3ca812 <= 10; _0x3ca812++) {
    setTimeout(() => {
      saveEquip(getBagEquip(_0x342e19, _0x3ca812, window["equip" + _0x3ca812].selectLabel.string), window.AutoEquipWarehouseQualityList.selectIdx);
    }, _0x3ca812 * 50);
  }
}
function setEquipSelectListColor(_0xa69b6e, _0x5aeb3d = 0) {
  let _0x183123 = null;
  if (_0x5aeb3d && _0x5aeb3d <= 4) {
    _0x183123 = cc.color().fromHEX("f1bd54");
  } else {
    _0x5aeb3d > 4 ? _0x183123 = cc.color().fromHEX("7dde6e") : _0x183123 = cc.color().fromHEX("ffffff");
  }
  let _0x37aa51 = new cc.Texture2D(),
    _0x58a1d3 = new cc.SpriteFrame();
  _0x37aa51.initWithData(new Uint8Array([_0x183123.r, _0x183123.g, _0x183123.b]), cc.Texture2D.PixelFormat.RGB888, 1, 1);
  _0x58a1d3.setTexture(_0x37aa51);
  _0x58a1d3.setRect(cc.rect(0, 0, _0xa69b6e.width, _0xa69b6e.height));
  _0xa69b6e.getComponent(cc.Sprite).spriteFrame = _0x58a1d3;
}
function showEquipAttrCheckBtn(_0x26d26a = false) {
  for (let _0x3af777 = 1; _0x3af777 <= 10; _0x3af777++) {
    window["equipAttrCheck" + _0x3af777].active = _0x26d26a;
  }
}
function getEquipList(_0x5fedd2) {
  return window.EquipList[_0x5fedd2];
}
function getEquipNameList(_0x4d96ca) {
  let _0x75d99 = [];
  for (let _0x4f4f87 in _0x4d96ca) {
    _0x75d99.push(_0x4d96ca[_0x4f4f87].name);
  }
  return _0x75d99;
}
function getEquipQuality(_0x4fcc5e) {
  for (let _0x5482b7 in window.EquipList) {
    let _0x4725a6 = window.EquipList[_0x5482b7];
    for (let _0xff7823 in _0x4725a6) {
      let _0x36ce3f = _0x4725a6[_0xff7823];
      if (_0x36ce3f.name == _0x4fcc5e) {
        return _0x36ce3f.quality;
      }
    }
  }
  return 0;
}
function getEquipCfg(_0x158682) {
  for (let _0x12eca8 in configList.Equip.list) {
    let _0x44b224 = configList.Equip.list[_0x12eca8];
    if (_0x44b224.id == _0x158682) {
      return _0x44b224;
    }
  }
  return null;
}
function getEquipCfgName(_0xfbbd56, _0x5bdf8b) {
  for (let _0x45580b in configList.Equip.list) {
    let _0x11fdbe = configList.Equip.list[_0x45580b];
    if (_0x5bdf8b) {
      if (_0x11fdbe.professionLimit == _0x5bdf8b && _0x11fdbe.name == _0xfbbd56) {
        return _0x11fdbe;
      }
    } else {
      if (_0x11fdbe.name == _0xfbbd56) {
        return _0x11fdbe;
      }
    }
  }
  return null;
}
function getBagMaxEquip(_0x2299d8, _0x23b3be) {
  let _0x46cd4c = getEquipCfg(_0x2299d8),
    _0x2b8e71 = getBagEquipList();
  const _0x266122 = {
    "1": true,
    "2": true,
    "3": true,
    "4": true,
    "5": true,
    "6": true
  };
  let _0x29b8e6 = getMaxQualityEquip(getBagEquip(_0x2b8e71, _0x23b3be, _0x46cd4c.name), _0x266122);
  if (_0x29b8e6) {
    return _0x29b8e6;
  }
  return null;
}
function getBagEquipList() {
  let _0x3ee7d3 = [];
  window.Service._equipService.inBag.forEach(_0x5067d6 => {
    _0x3ee7d3.push(_0x5067d6);
  });
  let _0x215ab5 = {};
  for (let _0x2b23df in _0x3ee7d3) {
    let _0x43a722 = _0x3ee7d3[_0x2b23df],
      _0x44f79f = _0x43a722.conf;
    if (_0x44f79f.quality >= 4) {
      if (!_0x215ab5[_0x44f79f.type]) {
        _0x215ab5[_0x44f79f.type] = [];
      }
      _0x215ab5[_0x44f79f.type].push(_0x43a722);
    }
  }
  return _0x215ab5;
}
function getBagEquip(_0x6e6568, _0x1c9da0, _0x23f074) {
  let _0x3bce5c = [];
  for (let _0x5a2e35 in _0x6e6568[_0x1c9da0]) {
    let _0x51315b = _0x6e6568[_0x1c9da0][_0x5a2e35];
    _0x51315b.conf.name == _0x23f074 && _0x3bce5c.push(_0x51315b);
  }
  return _0x3bce5c;
}
function getMaxQualityEquip(_0x5b167e, _0x57f899) {
  let _0x458067 = [];
  for (let _0x27af30 in _0x57f899) {
    _0x57f899[_0x27af30] && _0x458067.push(10 - Number(_0x27af30));
  }
  for (let _0x2be08f in _0x458067) {
    let _0x32a4f0 = _0x458067[_0x2be08f];
    for (let _0x4c1434 in _0x5b167e) {
      let _0x9bd2e8 = _0x5b167e[_0x4c1434];
      if (_0x9bd2e8.conf.quality == _0x32a4f0) {
        return _0x9bd2e8;
      }
    }
  }
  return null;
}
function getEquipCanWearing(_0x5313e7, _0xa54de9) {
  if (!_0x5313e7) {
    return false;
  }
  let _0x5d1849 = [];
  window.Service._equipService.wearing.forEach(_0x1a8c06 => {
    _0x5d1849.push(_0x1a8c06);
  });
  let _0x4e9a41 = false;
  for (let _0x168934 in _0x5d1849) {
    let _0x3a724f = _0x5d1849[_0x168934];
    if (_0x3a724f.conf.type == _0xa54de9) {
      if (_0x3a724f.conf.name != _0x5313e7.conf.name) {
        return true;
      }
      _0x4e9a41 = true;
      if (_0x5313e7.conf.quality > _0x3a724f.conf.quality) {
        return true;
      }
    }
  }
  if (!_0x4e9a41) {
    return true;
  }
  return false;
}
function getEquipWearingisValid(_0xa6a5a2) {
  let _0x43c806 = [];
  window.Service._equipService.wearing.forEach(_0x532a11 => {
    _0x43c806.push(_0x532a11);
  });
  for (let _0xe43d5e in _0x43c806) {
    let _0x3982c5 = _0x43c806[_0xe43d5e];
    if (_0x3982c5.conf.type == _0xa6a5a2) {
      return _0x3982c5;
    }
  }
  return null;
}
function lockEquip(_0x1f81cc, _0x5a91a8) {
  let _0x335c03 = [];
  for (let _0x1f2bad in _0x5a91a8) {
    _0x5a91a8[_0x1f2bad] && _0x335c03.push(10 - Number(_0x1f2bad));
  }
  for (let _0x405b2a in _0x335c03) {
    let _0x35e366 = _0x335c03[_0x405b2a];
    for (let _0x5ef596 in _0x1f81cc) {
      let _0x219044 = _0x1f81cc[_0x5ef596];
      _0x219044.conf.quality == _0x35e366 && !_0x219044.gdEquip.locked && window.Service._equipService.setLock(_0x219044.gdEquip.id, true);
    }
  }
}
function saveEquip(_0x49c64d, _0x4a8ac8) {
  let _0x130538 = [];
  for (let _0x43917f in _0x4a8ac8) {
    _0x4a8ac8[_0x43917f] && _0x130538.push(10 - Number(_0x43917f));
  }
  for (let _0x430521 in _0x130538) {
    let _0x35aebd = _0x130538[_0x430521];
    for (let _0x435ebc in _0x49c64d) {
      let _0x639f52 = _0x49c64d[_0x435ebc];
      if (_0x639f52.conf.quality == _0x35aebd) {
        let _0x3fe4a6 = getWarehouseIndex();
        _0x3fe4a6 && window.Service._equipService.putIntoWarehouse(_0x3fe4a6, _0x639f52.gdEquip.id);
        return;
      }
    }
  }
}
function getWarehouseIndex() {
  if (!window.Service._equipService.equipData) {
    return;
  }
  let _0x1fb937 = {};
  window.Service._equipService.warehouse.forEach((_0xc8b491, _0x4f42a5) => {
    _0x1fb937[_0x4f42a5] = _0xc8b491.size;
  });
  for (let _0x51219b in _0x1fb937) {
    if (_0x1fb937[Number(_0x51219b)] < 24) {
      return Number(_0x51219b);
    }
  }
  return null;
}
function getSealCfg(_0x1f0739) {
  const _0x2352d9 = {
    type: 0,
    level: 0
  };
  for (let _0xd1e6d8 in configList.Seal.list) {
    let _0x413c69 = configList.Seal.list[_0xd1e6d8];
    if (_0x413c69 && _0x413c69.id == _0x1f0739) {
      _0x2352d9.type = _0x413c69.sealType;
      _0x2352d9.level = _0x413c69.level;
      return _0x2352d9;
    }
  }
  return null;
}
function showEquipAttrInfoBox(_0x4c22ae) {
  if (!window.showBDData) {
    showTips("【策略】查看的数据不存在", true);
    return;
  }
  getShowEquipData(_0x4c22ae);
}
window.EquipBgNode = null;
function getShowEquipData(_0x4b8d54) {
  if (!window.showBDData) {
    return;
  }
  let _0x3de283 = JSON.parse(window.showBDData.equips);
  if (!_0x3de283) {
    showTips("【策略】装备数据错误", true);
    return;
  }
  let _0x499d22 = null;
  for (let _0x539db2 in _0x3de283) {
    if (Number(_0x539db2) == _0x4b8d54) {
      _0x499d22 = _0x3de283[_0x539db2];
    }
  }
  if (!_0x499d22) {
    showTips("【策略】装备部位为空", true);
    return;
  }
  let _0x48b37c = getEquipCfg(_0x499d22.id),
    _0x1542db = {
      ancientAtts: new Map(),
      ancientLevel: _0x499d22.ancientLevel,
      better: false,
      blessed: _0x499d22.blessed,
      uniqueId: _0x499d22.uniqueId,
      buffs: [],
      combat: 0,
      confAtt: new Map(),
      confId: _0x48b37c.id,
      extractCost: [],
      extractable: false,
      fake: false,
      forgeLevel: 100,
      isMine: false,
      isNew: false,
      levelLimit: _0x499d22.level,
      locked: false,
      mainAtt: new Map(),
      name: _0x48b37c.name,
      path: _0x48b37c.path,
      quality: _0x48b37c.quality,
      randAtt: _0x499d22.attrs,
      refined: true,
      refinedIndex: 0,
      roleLimit: _0x48b37c.professionLimit,
      suitId: _0x48b37c.suitId,
      type: _0x48b37c.type,
      weaponType: _0x48b37c.weaponType
    };
  for (let _0x2e6c2f in _0x499d22.ancientAdd) {
    let _0x5e5b7c = _0x499d22.ancientAdd[_0x2e6c2f];
    _0x5e5b7c && _0x1542db.ancientAtts.set(_0x5e5b7c.id, _0x5e5b7c.val);
  }
  for (let _0x461d46 in _0x499d22.mainAtt) {
    let _0x227cf5 = _0x499d22.mainAtt[_0x461d46];
    _0x227cf5 && _0x1542db.mainAtt.set(_0x227cf5.id, _0x227cf5.val);
  }
  const _0x3bef64 = {
    model: _0x1542db,
    buttonMode: 0
  };
  uiMgr.open(uiType.UIEquipDetailPanelGO, _0x3bef64);
  window.checkUIEquipDetailPanelGO = setInterval(() => {
    if (cc.isValid(window.UIEquipDetailPanelGO.node)) {
      clearInterval(window.checkUIEquipDetailPanelGO);
      if (cc.isValid(window.EquipBgNode)) {
        window.EquipBgNode.destroy();
      }
      window.EquipBgNode = createNode("EquipBgNode", 0, 0, cc.winSize.width, cc.winSize.height, "000000", window.cheatingBox, true, _0x54e5e5 => {
        cc.isValid(window.UIEquipDetailPanelGO.node) && (_0x54e5e5.destroy(), window.UIEquipDetailPanelGO.closeSelf());
      });
      EquipBgNode.opacity = 100;
      window.UIEquipDetailPanelGO.node.parent = window.cheatingBox;
    }
  }, 10);
}
window.showBDData = null;
window.BDUseCdState = false;
function BDUse() {
  if (window.Service._levelService.inHardSanctum) {
    showTips("【策略】副本内限制切换", true);
    return;
  }
  if (window.BDUseCdState) {
    showTips("【策略】点击过快", true);
    return;
  }
  if (!Service._heroService.heroBaseData) {
    return;
  }
  let _0x1cf538 = window.BDTemplateList.selectIdx;
  if (!_0x1cf538) {
    showTips("【策略】本地策略选择错误", true);
    return;
  }
  let _0x69d704 = null;
  for (let _0x5a7d16 in window.bDTemplateDataList) {
    let _0x31ec7e = window.bDTemplateDataList[_0x5a7d16];
    if (Number(_0x5a7d16) + 1 == _0x1cf538) {
      _0x69d704 = _0x31ec7e;
      continue;
    }
  }
  let _0x29f869 = JSON.parse(stringUnzip(_0x69d704));
  if (!_0x29f869.ver || _0x29f869.ver != window.BDMakeVer) {
    showTips("【策略】版本不同，策略无法使用", true);
    return;
  }
  if (_0x29f869.profession != Service._heroService.profession) {
    showTips("【策略】职业不匹配，策略无法使用", true);
    return;
  }
  window.showBDData = _0x29f869;
  showTips("【策略】加载数据中", true);
  window.BDUseCdState = true;
  showTips("【策略】加载装备", true);
  let _0xbf87b5 = JSON.parse(_0x29f869.equips);
  for (let _0x168bab in _0xbf87b5) {
    let _0x2e79a7 = _0xbf87b5[_0x168bab];
    if (!_0x2e79a7) {
      continue;
    }
    let _0x443ae5 = Number(_0x168bab),
      _0x5b24c0 = _0x2e79a7.id;
    if (_0x5b24c0) {
      let _0x27c51a = getEquipCfg(_0x5b24c0),
        _0x38b71a = window["equip" + _0x443ae5].items.indexOf(_0x27c51a.name);
      if (_0x38b71a != -1) {
        window["equip" + _0x443ae5].selectIdx = _0x38b71a;
        window["equip" + _0x443ae5].selectLabel.string = window["equip" + _0x443ae5].items[_0x38b71a];
        let _0x394f43 = getEquipQuality(window["equip" + _0x443ae5].items[_0x38b71a]);
        setEquipSelectListColor(window["equip" + _0x443ae5], _0x394f43);
      }
    }
  }
  loadBDEquip(_0xbf87b5);
  showEquipAttrCheckBtn(true);
  for (let _0x414845 = 1; _0x414845 <= 3; _0x414845++) {
    let _0x39eb83 = Number(_0x414845);
    window["extractedEquip" + _0x39eb83].items = ["共鸣空"];
    window["extractedEquip" + _0x39eb83].selectIdx = 0;
    window["extractedEquip" + _0x39eb83].selectLabel.string = window["extractedEquip" + _0x39eb83].items[0];
  }
  let _0x2994e9 = JSON.parse(_0x29f869.extracted);
  for (let _0x42b788 in _0x2994e9) {
    let _0x146630 = Number(_0x42b788),
      _0x7be85e = getEquipCfg(_0x2994e9[_0x42b788]),
      _0x52cbed = 0;
    if (_0x7be85e) {
      window["extractedEquip" + _0x146630].items = [_0x7be85e.name];
      window["extractedEquip" + _0x146630].selectIdx = _0x52cbed;
      window["extractedEquip" + _0x146630].selectLabel.string = window["extractedEquip" + _0x146630].items[_0x52cbed];
      let _0x30f712 = getEquipQuality(window["extractedEquip" + _0x146630].items[_0x52cbed]);
      setEquipSelectListColor(window["extractedEquip" + _0x146630], _0x30f712);
    }
  }
  setTimeout(() => {
    for (let _0x34e100 = 1; _0x34e100 <= 10; _0x34e100++) {
      let _0x45cbe5 = getEquipWearingisValid(_0x34e100);
      _0x45cbe5 && _0x45cbe5.conf.name == window["equip" + _0x34e100].selectLabel.string ? (window["equip" + _0x34e100].selectLabel.node.color = cc.color().fromHEX("000000"), window["equip" + _0x34e100].selectLabel.getComponent(cc.LabelOutline).width = 0) : (window["equip" + _0x34e100].selectLabel.node.color = cc.color().fromHEX("ed1c24"), window["equip" + _0x34e100].selectLabel.getComponent(cc.LabelOutline).width = 2);
    }
    showTips("【策略】加载巅峰", true);
    let _0x4d5bc0 = JSON.parse(_0x29f869.peakPoint);
    loadBDPeakPoint(_0x4d5bc0);
    showTips("【策略】加载共鸣", true);
    let _0x27f73a = JSON.parse(_0x29f869.extracted);
    loadExtracted(_0x27f73a);
    for (let _0x412ae4 in _0x27f73a) {
      let _0x4f6efc = Number(_0x412ae4),
        _0x395f79 = getExtractedEquipId(_0x27f73a[_0x412ae4]);
      _0x395f79 && _0x395f79.name == window["extractedEquip" + _0x4f6efc].selectLabel.string ? (window["extractedEquip" + _0x4f6efc].selectLabel.node.color = cc.color().fromHEX("000000"), window["extractedEquip" + _0x4f6efc].selectLabel.getComponent(cc.LabelOutline).width = 0) : (window["extractedEquip" + _0x4f6efc].selectLabel.node.color = cc.color().fromHEX("ed1c24"), window["extractedEquip" + _0x4f6efc].selectLabel.getComponent(cc.LabelOutline).width = 2);
    }
  }, 100);
  setTimeout(() => {
    showTips("【策略】加载宝石", true);
    let _0x363563 = JSON.parse(_0x29f869.seals);
    loadSeals(_0x363563);
  }, 150);
  setTimeout(() => {
    showTips("【策略】加载技能", true);
    let _0x399ff7 = JSON.parse(_0x29f869.talents);
    loadTalents(_0x399ff7, _0x29f869.profession);
  }, 200);
  setTimeout(() => {
    window.BDUseCdState = false;
    showTips("【策略】加载完成", true);
  }, 2000);
}
function BDServerUse() {
  if (window.Service._levelService.inHardSanctum) {
    showTips("【策略】副本内限制切换", true);
    return;
  }
  if (window.BDUseCdState) {
    showTips("【策略】点击过快", true);
    return;
  }
  if (!Service._heroService.heroBaseData) {
    return;
  }
  let _0x2d32bd = window.BDServerTemplateList.selectIdx;
  if (!_0x2d32bd) {
    showTips("【策略】服务器策略选择错误", true);
    return;
  }
  let _0x45c6b2 = null;
  for (let _0x45f4aa in window.bDServerTemplateDataList) {
    let _0x10f38f = window.bDServerTemplateDataList[_0x45f4aa];
    if (Number(_0x45f4aa) + 1 == _0x2d32bd) {
      _0x45c6b2 = _0x10f38f;
      continue;
    }
  }
  let _0x260c3f = JSON.parse(stringUnzip(_0x45c6b2));
  if (!_0x260c3f.ver || _0x260c3f.ver != window.BDMakeVer) {
    showTips("【策略】版本不同，策略无法使用", true);
    return;
  }
  if (_0x260c3f.profession != Service._heroService.profession) {
    showTips("【策略】职业不匹配，策略无法使用", true);
    return;
  }
  window.showBDData = _0x260c3f;
  showTips("【策略】加载数据中", true);
  window.BDUseCdState = true;
  showTips("【策略】加载装备", true);
  let _0x258c95 = JSON.parse(_0x260c3f.equips);
  for (let _0x17837c in _0x258c95) {
    let _0x453766 = _0x258c95[_0x17837c];
    if (!_0x453766) {
      continue;
    }
    let _0x44ee39 = Number(_0x17837c),
      _0x2e955f = _0x453766.id;
    if (_0x2e955f) {
      let _0x2d7ee1 = getEquipCfg(_0x2e955f),
        _0x3a8a6e = window["equip" + _0x44ee39].items.indexOf(_0x2d7ee1.name);
      if (_0x3a8a6e != -1) {
        window["equip" + _0x44ee39].selectIdx = _0x3a8a6e;
        window["equip" + _0x44ee39].selectLabel.string = window["equip" + _0x44ee39].items[_0x3a8a6e];
        let _0x5da368 = getEquipQuality(window["equip" + _0x44ee39].items[_0x3a8a6e]);
        setEquipSelectListColor(window["equip" + _0x44ee39], _0x5da368);
      }
    }
  }
  loadBDEquip(_0x258c95);
  showEquipAttrCheckBtn(true);
  for (let _0x1f1898 = 1; _0x1f1898 <= 3; _0x1f1898++) {
    let _0x1a5db2 = Number(_0x1f1898);
    window["extractedEquip" + _0x1a5db2].items = ["共鸣空"];
    window["extractedEquip" + _0x1a5db2].selectIdx = 0;
    window["extractedEquip" + _0x1a5db2].selectLabel.string = window["extractedEquip" + _0x1a5db2].items[0];
  }
  let _0x34baeb = JSON.parse(_0x260c3f.extracted);
  for (let _0x40710e in _0x34baeb) {
    let _0x4524ed = Number(_0x40710e),
      _0x1f49c3 = getEquipCfg(_0x34baeb[_0x40710e]),
      _0x59e359 = 0;
    if (_0x1f49c3) {
      window["extractedEquip" + _0x4524ed].items = [_0x1f49c3.name];
      window["extractedEquip" + _0x4524ed].selectIdx = _0x59e359;
      window["extractedEquip" + _0x4524ed].selectLabel.string = window["extractedEquip" + _0x4524ed].items[_0x59e359];
      let _0x927e9b = getEquipQuality(window["extractedEquip" + _0x4524ed].items[_0x59e359]);
      setEquipSelectListColor(window["extractedEquip" + _0x4524ed], _0x927e9b);
    }
  }
  setTimeout(() => {
    for (let _0x1570a8 = 1; _0x1570a8 <= 10; _0x1570a8++) {
      let _0x31b6fe = getEquipWearingisValid(_0x1570a8);
      _0x31b6fe && _0x31b6fe.conf.name == window["equip" + _0x1570a8].selectLabel.string ? (window["equip" + _0x1570a8].selectLabel.node.color = cc.color().fromHEX("000000"), window["equip" + _0x1570a8].selectLabel.getComponent(cc.LabelOutline).width = 0) : (window["equip" + _0x1570a8].selectLabel.node.color = cc.color().fromHEX("ed1c24"), window["equip" + _0x1570a8].selectLabel.getComponent(cc.LabelOutline).width = 2);
    }
    showTips("【策略】加载巅峰", true);
    let _0x1a5797 = JSON.parse(_0x260c3f.peakPoint);
    loadBDPeakPoint(_0x1a5797);
    showTips("【策略】加载共鸣", true);
    let _0x533537 = JSON.parse(_0x260c3f.extracted);
    loadExtracted(_0x533537);
    for (let _0x410df5 in _0x533537) {
      let _0x3fed85 = Number(_0x410df5),
        _0x5bb694 = getExtractedEquipId(_0x533537[_0x410df5]);
      _0x5bb694 && _0x5bb694.name == window["extractedEquip" + _0x3fed85].selectLabel.string ? (window["extractedEquip" + _0x3fed85].selectLabel.node.color = cc.color().fromHEX("000000"), window["extractedEquip" + _0x3fed85].selectLabel.getComponent(cc.LabelOutline).width = 0) : (window["extractedEquip" + _0x3fed85].selectLabel.node.color = cc.color().fromHEX("ed1c24"), window["extractedEquip" + _0x3fed85].selectLabel.getComponent(cc.LabelOutline).width = 2);
    }
  }, 100);
  setTimeout(() => {
    showTips("【策略】加载宝石", true);
    let _0x400caa = JSON.parse(_0x260c3f.seals);
    loadSeals(_0x400caa);
  }, 150);
  setTimeout(() => {
    showTips("【策略】加载技能", true);
    let _0x253955 = JSON.parse(_0x260c3f.talents);
    loadTalents(_0x253955, _0x260c3f.profession);
  }, 200);
  setTimeout(() => {
    window.BDUseCdState = false;
    showTips("【策略】加载完成", true);
  }, 2000);
}
function BDRead() {
  if (!window.BDReadInput || window.BDReadInput.string == "") {
    showTips("【策略】数据为空", true);
    window.BDReadInput.string = "";
    return;
  }
  if (!JSON.parse(stringUnzip(window.BDReadInput.string))) {
    showTips("【策略】数据格式错误，请重新输入", true);
    return;
  }
  let _0xfd1c2e = JSON.parse(stringUnzip(window.BDReadInput.string));
  if (!_0xfd1c2e.desc) {
    showTips("【策略】数据格式错误，请重新输入", true);
    return;
  }
  let _0x4368c0 = [];
  cc.sys.localStorage.getItem("BDTemplateList") && cc.sys.localStorage.getItem("BDTemplateList") != "" && (_0x4368c0 = JSON.parse(cc.sys.localStorage.getItem("BDTemplateList")));
  if (!_0x4368c0) {
    _0x4368c0 = [];
  }
  for (let _0x48a9b3 in _0x4368c0) {
    let _0x270b70 = _0x4368c0[_0x48a9b3],
      _0x47c990 = JSON.parse(stringUnzip(_0x270b70));
    if (_0x270b70 && _0x47c990.desc == _0xfd1c2e.desc) {
      showTips("【策略】请存在相同名字策略", true);
      return;
    }
  }
  showTips("【策略】导入成功，查看策略列表", true);
  _0x4368c0.push(window.BDReadInput.string);
  window.BDReadInput.string = "";
  cc.sys.localStorage.setItem("BDTemplateList", JSON.stringify(_0x4368c0));
  updateBDTemplateList();
}
function BDLook() {
  if (window.BDUseCdState) {
    showTips("【策略】点击过快", true);
    return;
  }
  if (!Service._heroService.heroBaseData) {
    return;
  }
  let _0x4dde89 = window.BDTemplateList.selectIdx;
  if (!_0x4dde89) {
    showTips("【策略】选择指定的本地策略", true);
    return;
  }
  let _0x5062f7 = null;
  for (let _0x3a5e0e in window.bDTemplateDataList) {
    let _0x32bfc3 = window.bDTemplateDataList[_0x3a5e0e];
    if (Number(_0x3a5e0e) + 1 == _0x4dde89) {
      _0x5062f7 = _0x32bfc3;
      continue;
    }
  }
  let _0x3a3b0d = JSON.parse(stringUnzip(_0x5062f7));
  if (!_0x3a3b0d.ver || _0x3a3b0d.ver != window.BDMakeVer) {
    showTips("【策略】版本不同，策略无法使用", true);
    return;
  }
  if (_0x3a3b0d.profession != Service._heroService.profession) {
    showTips("【策略】职业不匹配，策略无法查看", true);
    return;
  }
  showTips("【策略】加载数据中", true);
  window.showBDData = _0x3a3b0d;
  window.BDUseCdState = true;
  let _0x1b1f85 = JSON.parse(_0x3a3b0d.equips);
  for (let _0x59247e in _0x1b1f85) {
    let _0x357594 = _0x1b1f85[_0x59247e];
    if (!_0x357594) {
      continue;
    }
    let _0x3d2dae = Number(_0x59247e),
      _0x3f4380 = _0x357594.id;
    if (_0x3f4380) {
      let _0x5b5bd5 = getEquipCfg(_0x3f4380),
        _0x1cebd9 = window["equip" + _0x3d2dae].items.indexOf(_0x5b5bd5.name);
      if (_0x1cebd9 != -1) {
        window["equip" + _0x3d2dae].selectIdx = _0x1cebd9;
        window["equip" + _0x3d2dae].selectLabel.string = window["equip" + _0x3d2dae].items[_0x1cebd9];
        let _0x2a2f44 = getEquipQuality(window["equip" + _0x3d2dae].items[_0x1cebd9]);
        setEquipSelectListColor(window["equip" + _0x3d2dae], _0x2a2f44);
      }
    }
  }
  showEquipAttrCheckBtn(true);
  for (let _0x359eb0 = 1; _0x359eb0 <= 3; _0x359eb0++) {
    let _0x5d4ad4 = Number(_0x359eb0);
    window["extractedEquip" + _0x5d4ad4].items = ["共鸣空"];
    window["extractedEquip" + _0x5d4ad4].selectIdx = 0;
    window["extractedEquip" + _0x5d4ad4].selectLabel.string = window["extractedEquip" + _0x5d4ad4].items[0];
  }
  let _0x1335a2 = JSON.parse(_0x3a3b0d.extracted);
  for (let _0x59fb15 in _0x1335a2) {
    let _0x552e73 = Number(_0x59fb15),
      _0x54ec63 = getEquipCfg(_0x1335a2[_0x59fb15]),
      _0x17d04e = 0;
    if (_0x54ec63) {
      window["extractedEquip" + _0x552e73].items = [_0x54ec63.name];
      window["extractedEquip" + _0x552e73].selectIdx = _0x17d04e;
      window["extractedEquip" + _0x552e73].selectLabel.string = window["extractedEquip" + _0x552e73].items[_0x17d04e];
      let _0x598ae5 = getEquipQuality(window["extractedEquip" + _0x552e73].items[_0x17d04e]);
      setEquipSelectListColor(window["extractedEquip" + _0x552e73], _0x598ae5);
    }
  }
  setTimeout(() => {
    for (let _0x2510ce = 1; _0x2510ce <= 10; _0x2510ce++) {
      let _0x1fa98d = getEquipWearingisValid(_0x2510ce);
      _0x1fa98d && _0x1fa98d.conf.name == window["equip" + _0x2510ce].selectLabel.string ? (window["equip" + _0x2510ce].selectLabel.node.color = cc.color().fromHEX("000000"), window["equip" + _0x2510ce].selectLabel.getComponent(cc.LabelOutline).width = 0) : (window["equip" + _0x2510ce].selectLabel.node.color = cc.color().fromHEX("ed1c24"), window["equip" + _0x2510ce].selectLabel.getComponent(cc.LabelOutline).width = 2);
    }
    let _0x50ed0a = JSON.parse(_0x3a3b0d.extracted);
    for (let _0x54112f in _0x50ed0a) {
      let _0x5fbf23 = Number(_0x54112f),
        _0x463eb0 = getExtractedEquipId(_0x50ed0a[_0x54112f]);
      _0x463eb0 && _0x463eb0.name == window["extractedEquip" + _0x5fbf23].selectLabel.string ? (window["extractedEquip" + _0x5fbf23].selectLabel.node.color = cc.color().fromHEX("000000"), window["extractedEquip" + _0x5fbf23].selectLabel.getComponent(cc.LabelOutline).width = 0) : (window["extractedEquip" + _0x5fbf23].selectLabel.node.color = cc.color().fromHEX("ed1c24"), window["extractedEquip" + _0x5fbf23].selectLabel.getComponent(cc.LabelOutline).width = 2);
    }
  }, 100);
  setTimeout(() => {
    window.BDUseCdState = false;
    showTips("【策略】加载完成", true);
  }, 1000);
}
window.bDTemplateDataList = [];
function updateBDTemplateList() {
  if (cc.sys.localStorage.getItem("BDTemplateList") && cc.sys.localStorage.getItem("BDTemplateList") != "") {
    window.bDTemplateDataList = JSON.parse(cc.sys.localStorage.getItem("BDTemplateList"));
    let _0x5a2bd9 = [];
    for (let _0x246c73 in window.bDTemplateDataList) {
      let _0x4f7046 = stringUnzip(window.bDTemplateDataList[_0x246c73]);
      if (!_0x4f7046 || _0x4f7046 == "") {
        continue;
      }
      let _0x58ac1c = JSON.parse(_0x4f7046);
      _0x58ac1c && _0x5a2bd9.push(_0x58ac1c.desc);
    }
    let _0x107c0f = ["本地策略列表"];
    window.BDTemplateList.items = _0x107c0f.concat(_0x5a2bd9);
    window.BDTemplateList.selectIdx = 0;
    window.BDTemplateList.selectLabel.string = window.BDTemplateList.items[window.BDTemplateList.selectIdx];
  }
}
window.bDServerTemplateDataList = [];
function updateBDServerTemplateList() {
  let _0x478670 = [];
  for (let _0x3889cd in window.bDServerTemplateDataList) {
    let _0x4bf3cf = stringUnzip(window.bDServerTemplateDataList[_0x3889cd]);
    if (!_0x4bf3cf || _0x4bf3cf == "") {
      continue;
    }
    let _0x50b691 = JSON.parse(_0x4bf3cf);
    _0x50b691 && _0x478670.push(_0x50b691.desc);
  }
  let _0xa5ca27 = ["服务器策略列表"];
  window.BDServerTemplateList.items = _0xa5ca27.concat(_0x478670);
  window.BDServerTemplateList.selectIdx = 0;
  window.BDServerTemplateList.selectLabel.string = window.BDServerTemplateList.items[window.BDServerTemplateList.selectIdx];
}
function BDExtract() {
  if (!cc.isValid(window.UIRankingDetailPanelGO.node)) {
    showTips("【策略】请先打开别人详情界面", true);
    return;
  }
  let _0x158ffb = window.UIRankingDetailPanelGO.info;
  const _0x48b69f = {
    ver: 0,
    desc: "",
    profession: "",
    equips: "",
    peakPoint: "",
    extracted: "",
    seals: "",
    talents: ""
  };
  _0x48b69f.ver = window.BDMakeVer;
  _0x48b69f.desc = window.UIRankingDetailPanelGO.role.name;
  _0x48b69f.profession = _0x158ffb.profession;
  let _0x16fd9f = {};
  for (let _0x103da9 in _0x158ffb.equipBar.equips) {
    let _0x246627 = _0x158ffb.equipBar.equips[_0x103da9];
    if (!_0x246627.typeId) {
      continue;
    }
    let _0x5de643 = getEquipCfg(_0x246627.typeId);
    _0x16fd9f[_0x5de643.type] = {
      uniqueId: _0x246627.id,
      id: _0x5de643.id,
      ancientAdd: [],
      ancientLevel: _0x246627.ancientAdd.level,
      blessed: _0x246627.blessed,
      level: _0x246627.level,
      attrs: _0x246627.attrs,
      mainAtt: []
    };
    _0x246627.ancientAdd.add.forEach((_0x2d8d86, _0x2ab318) => {
      const _0xee31d9 = {
        val: _0x2d8d86,
        id: _0x2ab318
      };
      _0x16fd9f[_0x5de643.type].ancientAdd.push(_0xee31d9);
    });
    _0x246627.mainAtt.forEach((_0xe8e87b, _0x57e2fd) => {
      const _0x18220f = {
        val: _0xe8e87b,
        id: _0x57e2fd
      };
      _0x16fd9f[_0x5de643.type].mainAtt.push(_0x18220f);
    });
  }
  _0x48b69f.equips = JSON.stringify(_0x16fd9f);
  let _0x108253 = {};
  _0x158ffb.peakPoint.forEach((_0x42f54f, _0x3b1a64) => {
    _0x108253[_0x3b1a64] = _0x42f54f;
  });
  _0x48b69f.peakPoint = JSON.stringify(_0x108253);
  let _0x3d83fa = {};
  _0x158ffb.equipExtract.forEach((_0x3f3c3a, _0x5bbf63) => {
    _0x3d83fa[_0x5bbf63] = _0x3f3c3a;
  });
  _0x48b69f.extracted = JSON.stringify(_0x3d83fa);
  let _0x31be06 = {};
  _0x158ffb.seal.slots.forEach((_0x467de6, _0x3dc48b) => {
    _0x467de6.unlocked && (_0x31be06[_0x3dc48b] = getSealCfg(_0x467de6.sealId));
  });
  _0x48b69f.seals = JSON.stringify(_0x31be06);
  let _0x3e4814 = {};
  _0x158ffb.talent.forEach((_0x52ab8c, _0x5858b8) => {
    _0x3e4814[_0x5858b8] = _0x52ab8c;
  });
  _0x48b69f.talents = JSON.stringify(_0x3e4814);
  _0x48b69f ? (showTips("【策略】提取成功，自动导入本地", true), window.DBDataInput.string = "", window.BDReadInput.string = stringZip(JSON.stringify(_0x48b69f)), BDRead()) : showTips("【策略】提取失败", true);
}
function BDShare() {
  let _0xce302c = window.BDTemplateList.selectIdx;
  if (!_0xce302c) {
    showTips("【策略】选择指定的本地策略", true);
    return;
  }
  let _0x2c0d0b = null;
  for (let _0x331009 in window.bDTemplateDataList) {
    let _0x3124d0 = window.bDTemplateDataList[_0x331009];
    if (Number(_0x331009) + 1 == _0xce302c) {
      _0x2c0d0b = _0x3124d0;
      continue;
    }
  }
  showTips("【策略】导出成功，复制策略数据", true);
  window.DBDataInput.string = _0x2c0d0b;
}
function BDDel() {
  let _0x37f870 = window.BDTemplateList.selectIdx;
  if (!_0x37f870) {
    showTips("【策略】选择指定的本地策略", true);
    return;
  }
  let _0x589dec = [];
  for (let _0xd97eb0 in window.bDTemplateDataList) {
    let _0x41f350 = window.bDTemplateDataList[_0xd97eb0];
    if (_0x41f350 == "" || Number(_0xd97eb0) + 1 == _0x37f870) {
      continue;
    }
    _0x589dec.push(_0x41f350);
  }
  showTips("【策略】删除成功", true);
  window.bDTemplateDataList = _0x589dec;
  cc.sys.localStorage.setItem("BDTemplateList", JSON.stringify(window.bDTemplateDataList));
  updateBDTemplateList();
}
function loadBDEquip(_0x20e843) {
  for (let _0x53b4f7 in _0x20e843) {
    let _0x5183fc = _0x20e843[_0x53b4f7];
    if (!_0x5183fc) {
      continue;
    }
    let _0x50e79c = _0x5183fc.id;
    if (_0x50e79c) {
      let _0x259e18 = getBagMaxEquip(_0x50e79c, Number(_0x53b4f7));
      getEquipCanWearing(_0x259e18, Number(_0x53b4f7)) && _0x259e18 && window.Service._equipService.wear(_0x259e18.gdEquip.id);
    }
  }
}
function loadBDPeakPoint(_0x362385) {
  if (window.Service._skillService.skillData_.level_ != 50) {
    showTips("【策略】巅峰系统未开放自动跳过", true);
    return;
  }
  let _0x132f77 = [];
  for (let _0x5808f2 in _0x362385) {
    _0x132f77.push({
      id: Number(_0x5808f2),
      val: _0x362385[_0x5808f2]
    });
  }
  _0x132f77 = _0x132f77.reverse();
  let _0x4d1816 = window.Service._paragonService.paragonData_.paragonLevel_,
    _0x1640fc = new Map();
  for (let _0x1eb492 in _0x132f77) {
    let _0xf7346 = _0x132f77[_0x1eb492];
    _0x4d1816 <= 0 ? _0x1640fc.set(_0xf7346.id, 0) : _0x4d1816 > _0xf7346.val ? (_0x4d1816 -= _0xf7346.val, _0x1640fc.set(_0xf7346.id, _0xf7346.val)) : (_0x1640fc.set(_0xf7346.id, _0x4d1816), _0x4d1816 = 0);
  }
  window.Service._paragonService.setParagonPoint(_0x1640fc);
}
function loadExtracted(_0x48ce22) {
  if (window.Service._levelService.maxSanctumFloor <= 20) {
    showTips("【策略】萃取系统未开放自动跳过", true);
    return;
  }
  window.extractedService = null;
  window.services._services.forEach(_0x4cc258 => {
    _0x4cc258._module && _0x4cc258._module == 24 && (window.extractedService = _0x4cc258);
  });
  for (let _0x51b50e = 1; _0x51b50e <= 3; _0x51b50e++) {
    window.extractedService.deactivate(_0x51b50e);
  }
  for (let _0x557ddc in _0x48ce22) {
    let _0x226186 = getExtractedEquipId(_0x48ce22[_0x557ddc]);
    _0x226186 && window.extractedService.activateFree(_0x226186.id, Number(_0x557ddc));
  }
}
function getExtractedEquipId(_0x558f69) {
  let _0x2f1734 = getEquipCfg(_0x558f69);
  if (!_0x2f1734) {
    return null;
  }
  let _0x3ace37 = [];
  !window.extractedService && window.services._services.forEach(_0x19e589 => {
    _0x19e589._module && _0x19e589._module == 24 && (window.extractedService = _0x19e589);
  });
  window.extractedService.posGroupConf.forEach(_0x1617a0 => {
    _0x3ace37 = _0x3ace37.concat(_0x1617a0);
  });
  for (let _0x115c75 in _0x3ace37) {
    let _0x2bf21c = _0x3ace37[_0x115c75];
    if (_0x2bf21c.lastEquip && _0x2bf21c.lastEquip.name == _0x2f1734.name) {
      return _0x2bf21c.lastEquip;
    }
  }
  return null;
}
function loadSeals(_0x3291a6) {
  if (window.Service._levelService.maxSanctumFloor <= 12) {
    showTips("【策略】宝石系统未开放自动跳过", true);
    return;
  }
  for (let _0x442f1f in _0x3291a6) {
    let _0x1228b0 = _0x3291a6[_0x442f1f],
      _0x2eb314 = Number(_0x442f1f),
      _0x213084 = getSealSlotData(_0x2eb314);
    if (_0x213084.state != 1) {
      if (_0x213084.state == 2) {
        let _0x897779 = getSealCfg(_0x213084.gemId);
        if (_0x897779 && _0x897779.type != _0x1228b0.type) {
          let _0x17a1b6 = (_0x1228b0.type - 1) * 10 + _0x897779.level;
          window.Service._gemService.coverSeal(_0x17a1b6, _0x2eb314);
        }
      } else {
        let _0x2af0ea = (_0x1228b0.type - 1) * 10 + 1;
        window.Service._gemService.wearSeal(_0x2af0ea, _0x2eb314);
      }
    }
  }
}
function getSealSlotData(_0x3bb755) {
  let _0x5b2e04 = [];
  window.Service._gemService.gemData_.gemSlot_.forEach((_0x551cc6, _0xaf81dc) => {
    _0x5b2e04.push(_0x551cc6);
  });
  for (let _0x16e6c1 in _0x5b2e04) {
    let _0xa20e14 = _0x5b2e04[_0x16e6c1];
    if (_0xa20e14.slotId == _0x3bb755) {
      return _0xa20e14;
    }
  }
  return null;
}
function loadTalents(_0x403d00, _0x1eda1b) {
  window.Service._skillService.skillReset();
  let _0x22b53c = window.Service._skillService.skillData_.level_,
    _0x2106aa = getProfessionAllTalentList(_0x1eda1b),
    _0x9ec19a = [];
  for (let _0x142295 in _0x2106aa) {
    if (_0x22b53c <= 0) {
      continue;
    }
    let _0x2d0b5a = _0x2106aa[_0x142295];
    for (let _0x1efa33 in _0x2d0b5a.root) {
      if (_0x22b53c <= 0) {
        continue;
      }
      let _0x28b664 = Number(_0x1efa33),
        _0x3376cb = _0x2d0b5a.root[_0x28b664];
      if (!_0x403d00[_0x28b664]) {
        continue;
      }
      for (let _0x29a408 = 1; _0x29a408 <= _0x403d00[_0x28b664]; _0x29a408++) {
        if (_0x22b53c <= 0) {
          continue;
        }
        _0x22b53c--;
        _0x9ec19a.push(_0x28b664);
      }
      for (let _0x4b6962 in _0x3376cb.talen1) {
        let _0x4410ee = _0x3376cb.talen1[_0x4b6962];
        if (!_0x403d00[_0x4410ee.id]) {
          continue;
        }
        for (let _0xdcc85a = 1; _0xdcc85a <= _0x403d00[_0x4410ee.id]; _0xdcc85a++) {
          if (_0x22b53c <= 0) {
            continue;
          }
          _0x22b53c--;
          _0x9ec19a.push(_0x4410ee.id);
        }
      }
      for (let _0x1cde0f in _0x3376cb.talen2) {
        let _0x1a3bc1 = _0x3376cb.talen2[_0x1cde0f];
        if (!_0x403d00[_0x1a3bc1.id]) {
          continue;
        }
        for (let _0x464c94 = 1; _0x464c94 <= _0x403d00[_0x1a3bc1.id]; _0x464c94++) {
          if (_0x22b53c <= 0) {
            continue;
          }
          _0x22b53c--;
          _0x9ec19a.push(_0x1a3bc1.id);
        }
      }
      for (let _0xb7514c in _0x3376cb.talen3) {
        let _0x2b5314 = _0x3376cb.talen3[_0xb7514c];
        if (!_0x403d00[_0x2b5314.id]) {
          continue;
        }
        for (let _0x4c2cbe = 1; _0x4c2cbe <= _0x403d00[_0x2b5314.id]; _0x4c2cbe++) {
          if (_0x22b53c <= 0) {
            continue;
          }
          _0x22b53c--;
          _0x9ec19a.push(_0x2b5314.id);
        }
      }
    }
    for (let _0x47a650 in _0x2d0b5a.other) {
      if (_0x22b53c <= 0) {
        continue;
      }
      let _0x81106b = Number(_0x47a650),
        _0x3f2137 = _0x2d0b5a.other[_0x81106b];
      if (!_0x403d00[_0x81106b]) {
        continue;
      }
      for (let _0xee864c = 1; _0xee864c <= _0x403d00[_0x81106b]; _0xee864c++) {
        if (_0x22b53c <= 0) {
          continue;
        }
        _0x22b53c--;
        _0x9ec19a.push(_0x81106b);
      }
      for (let _0x51bf87 in _0x3f2137.talen1) {
        let _0x23473a = _0x3f2137.talen1[_0x51bf87];
        if (!_0x403d00[_0x23473a.id]) {
          continue;
        }
        for (let _0x4dbd4f = 1; _0x4dbd4f <= _0x403d00[_0x23473a.id]; _0x4dbd4f++) {
          if (_0x22b53c <= 0) {
            continue;
          }
          _0x22b53c--;
          _0x9ec19a.push(_0x23473a.id);
        }
      }
    }
  }
  for (let _0x5432f0 in _0x9ec19a) {
    let _0x412273 = _0x9ec19a[_0x5432f0];
    setTimeout(() => {
      window.Service._skillService.upgradeSkill(_0x412273);
    }, Number(_0x5432f0) * 10);
  }
  cc.isValid(window.UISkillPanel.node) && (uiMgr.close(uiType.UISkillPanelGO), setTimeout(() => {
    uiMgr.open(uiType.UISkillPanelGO);
  }, 500));
}
function getProfessionAllTalentList(_0x4380ca) {
  const _0x31a6f4 = {
    "1": {},
    "2": {},
    "3": {},
    "4": {},
    "5": {}
  };
  let _0xd04bf1 = getProfessionAllTalentCfg(_0x4380ca);
  for (let _0x47ddb5 in _0xd04bf1) {
    let _0x1503c8 = _0xd04bf1[_0x47ddb5];
    if (_0x1503c8.root) {
      if (!_0x31a6f4[_0x1503c8.stage].root) {
        _0x31a6f4[_0x1503c8.stage].root = [];
      }
      _0x31a6f4[_0x1503c8.stage].root[_0x1503c8.id] = {
        lv: _0x1503c8.maxLevel
      };
      let _0x10e656 = getTalentAllNextTalent(_0x1503c8.id, _0x4380ca);
      if (_0x10e656.length) {
        for (let _0x53efe5 in _0x10e656) {
          let _0xa49406 = _0x10e656[_0x53efe5];
          if (!_0x31a6f4[_0x1503c8.stage].root[_0x1503c8.id].talen1) {
            _0x31a6f4[_0x1503c8.stage].root[_0x1503c8.id].talen1 = [];
          }
          const _0xe6c36b = {
            id: _0xa49406.id,
            lv: _0xa49406.maxLevel
          };
          _0x31a6f4[_0x1503c8.stage].root[_0x1503c8.id].talen1.push(_0xe6c36b);
          let _0x5c21dc = getTalentAllNextTalent(_0xa49406.id, _0x4380ca);
          if (_0x5c21dc.length) {
            for (let _0x4e2593 in _0x5c21dc) {
              let _0x10ed5c = _0x5c21dc[_0x4e2593];
              if (!_0x31a6f4[_0x1503c8.stage].root[_0x1503c8.id].talen2) {
                _0x31a6f4[_0x1503c8.stage].root[_0x1503c8.id].talen2 = [];
              }
              const _0x59ec54 = {
                id: _0x10ed5c.id,
                lv: _0x10ed5c.maxLevel
              };
              _0x31a6f4[_0x1503c8.stage].root[_0x1503c8.id].talen2.push(_0x59ec54);
              let _0x5b6c96 = getTalentAllNextTalent(_0x10ed5c.id, _0x4380ca);
              if (_0x5b6c96.length) {
                for (let _0x5c95e9 in _0x5b6c96) {
                  let _0x1959b6 = _0x5b6c96[_0x5c95e9];
                  if (!_0x31a6f4[_0x1503c8.stage].root[_0x1503c8.id].talen3) {
                    _0x31a6f4[_0x1503c8.stage].root[_0x1503c8.id].talen3 = [];
                  }
                  const _0x3ae926 = {
                    id: _0x1959b6.id,
                    lv: _0x1959b6.maxLevel
                  };
                  _0x31a6f4[_0x1503c8.stage].root[_0x1503c8.id].talen3.push(_0x3ae926);
                }
              }
            }
          }
        }
      }
    } else {
      if (!getTalentLastId(_0x1503c8.id)) {
        if (!_0x31a6f4[_0x1503c8.stage].other) {
          _0x31a6f4[_0x1503c8.stage].other = [];
        }
        _0x31a6f4[_0x1503c8.stage].other[_0x1503c8.id] = {
          lv: _0x1503c8.maxLevel
        };
        let _0x550869 = getTalentAllNextTalent(_0x1503c8.id, _0x4380ca);
        if (_0x550869.length) {
          for (let _0x23a93a in _0x550869) {
            let _0x5984b1 = _0x550869[_0x23a93a];
            if (!_0x31a6f4[_0x1503c8.stage].other[_0x1503c8.id].talen1) {
              _0x31a6f4[_0x1503c8.stage].other[_0x1503c8.id].talen1 = [];
            }
            const _0x5da413 = {
              id: _0x5984b1.id,
              lv: _0x5984b1.maxLevel
            };
            _0x31a6f4[_0x1503c8.stage].other[_0x1503c8.id].talen1.push(_0x5da413);
          }
        }
      }
    }
  }
  return _0x31a6f4;
}
function getProfessionAllTalentCfg(_0x23afb2) {
  let _0x3d00a5 = [];
  for (let _0x2cfcb9 in configList.Talent.list) {
    let _0x3208a0 = configList.Talent.list[_0x2cfcb9];
    if (_0x3208a0.root == 0 && _0x3208a0.stage == 1 && !getTalentLastId(_0x3208a0.id)) {
      continue;
    }
    _0x3208a0.profession == _0x23afb2 && _0x3d00a5.push(_0x3208a0);
  }
  return _0x3d00a5;
}
function getTalentLastId(_0x2a49a2) {
  let _0x21ce7e = 0;
  configList.Talent.getById(_0x2a49a2).preTalent.forEach((_0x4367b6, _0x1977f1) => {
    _0x21ce7e = _0x1977f1;
  });
  return _0x21ce7e;
}
function getTalentAllNextTalent(_0x4ac87a, _0x5627b5) {
  let _0x7a62af = [],
    _0x524050 = getProfessionAllTalentCfg(_0x5627b5);
  for (let _0x1e3c67 in _0x524050) {
    let _0x22dafc = _0x524050[_0x1e3c67];
    _0x22dafc.preTalent.forEach((_0x5e834c, _0x560a6d) => {
      _0x560a6d == _0x4ac87a && _0x7a62af.push(_0x22dafc);
    });
  }
  return _0x7a62af;
}
window.BDMakeVer = 1;
function BDMake() {
  let _0x407cb3 = BDMakeData();
  _0x407cb3 && (showTips("【策略】制作成功，复制策略数据", true), window.DBDataInput.string = stringZip(JSON.stringify(_0x407cb3)));
}
function BDMakeData() {
  if (!window.BDMakeNameInput || window.BDMakeNameInput.string == "") {
    showTips("【策略】先取个牛逼点的描述吧", true);
    return;
  }
  const _0x544e68 = {
    ver: 0,
    desc: "",
    profession: "",
    equips: "",
    peakPoint: "",
    extracted: "",
    seals: "",
    talents: ""
  };
  _0x544e68.ver = window.BDMakeVer;
  _0x544e68.desc = window.BDMakeNameInput.string;
  _0x544e68.profession = Service._heroService.profession;
  let _0x460721 = {};
  window.Service._equipService.wearing.forEach(_0x3d74f6 => {
    _0x460721[_0x3d74f6.conf.type] = {
      uniqueId: _0x3d74f6.gdEquip.id,
      id: _0x3d74f6.conf.id,
      ancientAdd: [],
      ancientLevel: _0x3d74f6.gdEquip.ancientAdd.level,
      blessed: _0x3d74f6.gdEquip.blessed,
      level: _0x3d74f6.gdEquip.level,
      attrs: _0x3d74f6.gdEquip.attrs,
      mainAtt: []
    };
    _0x3d74f6.gdEquip.ancientAdd.add.forEach((_0x3a8dd6, _0x40dc0b) => {
      const _0x314b2d = {
        val: _0x3a8dd6,
        id: _0x40dc0b
      };
      _0x460721[_0x3d74f6.conf.type].ancientAdd.push(_0x314b2d);
    });
    _0x3d74f6.gdEquip.mainAtt.forEach((_0x482dac, _0x4d59fd) => {
      const _0x4727e6 = {
        val: _0x482dac,
        id: _0x4d59fd
      };
      _0x460721[_0x3d74f6.conf.type].mainAtt.push(_0x4727e6);
    });
  });
  _0x544e68.equips = JSON.stringify(_0x460721);
  let _0x3264c9 = {};
  window.Service._paragonService.paragonData_.pointsUsage_.forEach((_0x1ccb13, _0x2fca34) => {
    _0x3264c9[_0x2fca34] = _0x1ccb13;
  });
  _0x544e68.peakPoint = JSON.stringify(_0x3264c9);
  let _0x35f8df = {};
  window.Service._equipService.equipData_.extractUsed.forEach((_0x30054d, _0xe7f17f) => {
    _0x35f8df[_0xe7f17f] = _0x30054d.id;
  });
  _0x544e68.extracted = JSON.stringify(_0x35f8df);
  let _0x29ef8e = {};
  window.Service._gemService.gemData_.gemSlot_.forEach((_0x162240, _0x449365) => {
    _0x162240.state == 2 && (_0x29ef8e[_0x162240.slotId] = getSealCfg(_0x162240.gemId));
  });
  _0x544e68.seals = JSON.stringify(_0x29ef8e);
  let _0x2e2692 = {};
  window.Service._skillService.skillData_.talent_.forEach((_0x6a8092, _0x83d8f0) => {
    _0x2e2692[_0x83d8f0] = _0x6a8092;
  });
  _0x544e68.talents = JSON.stringify(_0x2e2692);
  return _0x544e68;
}
function openAutoSuperPath() {
  showTips("【副本】切换超级寻路模式", true);
  closeAutoSuperPath();
}
function closeAutoSuperPath() {
  window.MapAllPosList = [];
}
function updateSuperPath(_0x397d3c) {
  window.AutoBattleState == 1 && (window.MapAllPosList = []);
  if (!window.SuperPath) {
    return;
  }
  if (!window.fightMgr || !window.fightMgr.fight || !window.fightMgr.rooms || !window.fightMgr.rooms.length) {
    return;
  }
  if (!window.fightMgr.fight.renderer || !window.fightMgr.fight.renderer._fightSceneGO) {
    return;
  }
  for (let _0x4ad9c9 in window.fightMgr.rooms) {
    let _0x12e76f = Number(_0x4ad9c9);
    if (window.MapAllPosList[_0x12e76f] && window.MapAllPosList[_0x12e76f].length) {
      continue;
    }
    getMapAllPos(_0x12e76f);
  }
}
window.MapAllPosList = [];
window.MapAllCell = [];
window.isSHowMapCell = false;
function getMapAllPos(_0x359813, _0x240970 = window.isSHowMapCell || false) {
  if (window.MapAllPosList[_0x359813] && window.MapAllPosList[_0x359813].length) {
    console.log("该房间坐标已获取，房间索引:", _0x359813);
    return;
  }
  if (!window.MapAllPosList[_0x359813]) {
    window.MapAllPosList[_0x359813] = [];
  }
  window.MapAllCell = [];
  let _0x36524f = window.fightMgr.fight.renderer._fightSceneGO.tiles[_0x359813];
  if (!_0x36524f) {
    return;
  }
  let _0x21b591 = _0x36524f.tiledmap,
    _0x249026 = _0x36524f.tiledmap._mapSize.width,
    _0x2c7b34 = _0x36524f.tiledmap._mapSize.height;
  for (let _0x464f2e = 0; _0x464f2e < _0x249026; _0x464f2e++) {
    for (let _0x4d7ab8 = 0; _0x4d7ab8 < _0x2c7b34; _0x4d7ab8++) {
      let _0x277de0 = 128 * _0x464f2e + 64 + _0x21b591.node.x,
        _0x180a72 = 128 * (_0x2c7b34 - _0x4d7ab8) - 64 + _0x21b591.node.y,
        _0x38b91e = canStandHere1(cc.v2(_0x277de0, _0x180a72), _0x359813);
      if (_0x38b91e) {
        if (_0x240970) {
          let _0x121144 = createNode("plot", _0x277de0, _0x180a72, 126, 126, "7dde6e", window.fightMgr.fight.renderer._fightSceneGO.node, true);
          _0x121144.opacity = 55;
          window.MapAllCell.push(_0x121144);
        }
        window.MapAllPosList[_0x359813].push({
          posType: 1,
          pos: cc.v2(_0x277de0, _0x180a72)
        });
      } else {
        if (_0x240970) {
          let _0x54c321 = createNode("barrier", _0x277de0, _0x180a72, 126, 126, "ed1c24", window.fightMgr.fight.renderer._fightSceneGO.node, true);
          _0x54c321.opacity = 200;
          window.MapAllCell.push(_0x54c321);
        }
        window.MapAllPosList[_0x359813].push({
          posType: 0,
          pos: cc.v2(_0x277de0, _0x180a72)
        });
      }
    }
  }
}
function getSmallGrids(_0x2d4b0b, _0x4dd029) {
  const _0x4d23c6 = 128,
    _0x3bba4b = 32,
    _0x5865ac = _0x2d4b0b - _0x4d23c6 / 2,
    _0x45d887 = _0x4dd029 - _0x4d23c6 / 2,
    _0x43a1f8 = [];
  for (let _0x4c670e = 0; _0x4c670e < 16; _0x4c670e++) {
    const _0x3cab54 = Math.floor(_0x4c670e / 4),
      _0x405c55 = _0x4c670e % 4,
      _0x4735d5 = _0x5865ac + _0x405c55 * _0x3bba4b,
      _0x4fb9d0 = _0x45d887 + _0x3cab54 * _0x3bba4b,
      _0x19207a = {
        x: _0x4735d5,
        y: _0x4fb9d0
      };
    _0x43a1f8.push(_0x19207a);
  }
  return _0x43a1f8;
}
function shouldSkipStaticColliders(_0x3b9e02, _0x3e77d6) {
  let _0x13d6a2 = window.fightMgr.collider.navigators[_0x3e77d6],
    _0x233478 = Math.floor(_0x3b9e02.x / 128) - _0x13d6a2.origin.x,
    _0x340b1b = Math.floor(_0x3b9e02.y / 128) - _0x13d6a2.origin.y,
    _0x303a4a = _0x13d6a2.smallMapCollider.col;
  return _0x13d6a2.smallMapCollider.skip[_0x340b1b * _0x303a4a + _0x233478];
}
function canStandHere1(_0x22b9b8, _0x15fef6) {
  return window.fightMgr.collider.navigators[_0x15fef6].canStandHere1(_0x22b9b8);
}
function getTargetToPlayerAllPos(_0x3318a2, _0x5a3e2e) {
  let _0x4a781e = getBattlePlayer();
  if (!_0x4a781e || !_0x3318a2) {
    return null;
  }
  let _0x3e1d55 = _0x3318a2.Position || _0x5a3e2e,
    _0x26c88b = window.fightMgr.collider.getNavigatorIndex(_0x3e1d55),
    _0x2d9db3 = window.fightMgr.collider.getNavigatorIndex(_0x4a781e.Position),
    _0x32160e = [];
  for (let _0x51d0f4 = _0x2d9db3; _0x51d0f4 <= _0x26c88b; _0x51d0f4++) {
    window.MapAllPosList[_0x51d0f4] && window.MapAllPosList[_0x51d0f4].length && (_0x32160e = _0x32160e.concat(window.MapAllPosList[_0x51d0f4]));
  }
  return _0x32160e;
}
function getPosRecentlycanStand(_0x453f1d) {
  let _0x2378c5 = window.fightMgr.collider.getNavigatorIndex(_0x453f1d),
    _0x47fc6a = 0,
    _0x3f7a37 = null;
  for (let _0x160fa9 in window.MapAllPosList[_0x2378c5]) {
    let _0x1c3dd8 = window.MapAllPosList[_0x2378c5][_0x160fa9];
    if (_0x1c3dd8.posType) {
      let _0x2e8483 = getDistance(_0x1c3dd8.pos, _0x453f1d);
      (!_0x47fc6a || _0x47fc6a > _0x2e8483) && (_0x3f7a37 = _0x1c3dd8, _0x47fc6a = _0x2e8483);
    }
  }
  if (_0x3f7a37) {
    return _0x3f7a37;
  }
  return null;
}
function findNearestTarget(_0x365926, _0x3d1bb3) {
  let _0x59148e = null,
    _0x32abe4 = Infinity;
  for (const _0x293b2c of _0x3d1bb3) {
    const _0x3ab2bb = _0x293b2c.NextPosition || _0x293b2c.Position,
      _0x480db8 = Math.abs(_0x365926.x - _0x3ab2bb.x),
      _0x1f6e0a = Math.abs(_0x365926.y - _0x3ab2bb.y),
      _0x2bcc9 = _0x480db8 + _0x1f6e0a;
    _0x2bcc9 < _0x32abe4 && (_0x32abe4 = _0x2bcc9, _0x59148e = _0x293b2c);
  }
  return _0x59148e;
}
function openNavigationTips() {
  showTips("【副本】开启在线高德", true);
  closeNavigationTips();
  window.NavigationTipsTime = setInterval(() => {
    startNavigationTips();
  }, 500);
}
function closeNavigationTips() {
  clearInterval(window.NavigationTipsTime);
  delNavigationTips();
}
function startNavigationTips() {
  if (!window.fightMgr || !window.fightMgr.fight || !window.fightMgr.fight.fightService || !window.fightMgr.fight.fightService.uiFightFrame || !window.fightMgr.fight.fightService.uiFightFrame.minimap) {
    return;
  }
  window.fightMgr.fight.fightService.uiFightFrame.minimap.mask.getComponent(cc.Mask) && window.fightMgr.fight.fightService.uiFightFrame.minimap.mask.getComponent(cc.Mask).destroy();
  window.fightMgr.fight.fightService.uiFightFrame.minimap.mask.x = cc.winSize.width / 2 - window.fightMgr.fight.fightService.uiFightFrame.minimap.mask.width / 2;
  window.fightMgr.fight.fightService.uiFightFrame.minimap.mask.y = -200;
  window.fightMgr.fight.fightService.uiFightFrame.progressRoot.x = cc.winSize.width / 2 - window.fightMgr.fight.fightService.uiFightFrame.progressRoot.width / 2;
  window.fightMgr.fight.fightService.uiFightFrame.progressRoot.y = -120;
  for (let _0x47055a in window.fightMgr.fight.fightService.uiFightFrame.minimap.miniMap.roomRootNode.children) {
    let _0x504f45 = window.fightMgr.fight.fightService.uiFightFrame.minimap.miniMap.roomRootNode.children[_0x47055a],
      _0x43c921 = _0x504f45.children[0];
    _0x43c921 && _0x43c921.name != "label" && (_0x43c921.active = false);
  }
  for (let _0x220fd0 in window.fightMgr.fight.minimap.units) {
    let _0x57bed9 = window.fightMgr.fight.minimap.units[_0x220fd0];
    _0x57bed9.show = true;
  }
  for (let _0x3ec5be in window.fightMgr.fight.fightService.uiFightFrame.minimap.miniMap.roomRootNode.children) {
    let _0x358c45 = window.fightMgr.fight.fightService.uiFightFrame.minimap.miniMap.roomRootNode.children[_0x3ec5be];
    if (_0x358c45.name.indexOf("Pylon") != -1) {
      let _0x533e0a = _0x358c45.name.slice(5),
        _0x405bc7 = false;
      for (let _0x14f634 in window.fightMgr.fight.sceneManager.sceneUnits) {
        let _0x5829c4 = window.fightMgr.fight.sceneManager.sceneUnits[_0x14f634];
        if (_0x5829c4.sceneUnitType != 9 || _0x5829c4._triggerTime == 0.7) {
          continue;
        }
        if (_0x5829c4.id == _0x533e0a) {
          _0x405bc7 = true;
          break;
        }
      }
      !_0x405bc7 && _0x358c45.destroy();
    }
  }
  for (let _0x5ac006 in window.fightMgr.fight.sceneManager.sceneUnits) {
    let _0x1a00ab = window.fightMgr.fight.sceneManager.sceneUnits[_0x5ac006];
    if (_0x1a00ab.sceneUnitType != 9 || _0x1a00ab._triggerTime == 0.7) {
      continue;
    }
    let _0x3509d8 = window.fightMgr.fight.fightService.uiFightFrame.minimap.miniMap.roomRootNode.getChildByName("Pylon" + _0x1a00ab.id);
    if (_0x3509d8) {
      continue;
    }
    let _0xc5fd98 = [];
    for (let _0x2ce856 = 1; _0x2ce856 <= 6; _0x2ce856++) {
      if (window.NavigationList.selectIdx[_0x2ce856]) {
        switch (_0x2ce856) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            _0xc5fd98.push(_0x2ce856 + 4);
            break;
          case 6:
            _0xc5fd98.push(11);
            break;
        }
      }
    }
    if (_0xc5fd98.indexOf(_0x1a00ab.stageConfig.type) != -1) {
      let _0x4a6dbb = cc.v2(_0x1a00ab.Position.x, _0x1a00ab.Position.y),
        _0x3100d1 = _0x4a6dbb.mulSelf(0.0625);
      const _0x3b3090 = {
        "5": "79FF71",
        "6": "ff9547",
        "7": "ff6e61",
        "8": "6ae5f5",
        "9": "fbff33",
        "11": "a880d9"
      };
      let _0x129164 = createLabel("Pylon" + _0x1a00ab.id, "✪", _0x3b3090[_0x1a00ab.stageConfig.type], "000000", _0x3100d1.x, _0x3100d1.y, 32, window.fightMgr.fight.fightService.uiFightFrame.minimap.miniMap.roomRootNode);
      _0x129164.zIndex = 99;
    }
  }
}
function delNavigationTips() {
  if (!window.fightMgr || !window.fightMgr.fight || !window.fightMgr.fight.fightService || !window.fightMgr.fight.fightService.uiFightFrame || !window.fightMgr.fight.fightService.uiFightFrame.minimap) {
    return;
  }
  if (!window.fightMgr.fight.fightService.uiFightFrame.minimap.miniMap) {
    return;
  }
  for (let _0x40dd05 in window.fightMgr.fight.fightService.uiFightFrame.minimap.miniMap.roomRootNode.children) {
    let _0x41179d = window.fightMgr.fight.fightService.uiFightFrame.minimap.miniMap.roomRootNode.children[_0x40dd05];
    _0x41179d.name.indexOf("Pylon") != -1 && _0x41179d.destroy();
  }
  recoverNavigationTips();
}
function recoverNavigationTips() {
  if (!getRecoverNavigation()) {
    return;
  }
  window.fightMgr.fight.fightService.uiFightFrame.minimap.mask.x = 14.841;
  window.fightMgr.fight.fightService.uiFightFrame.minimap.mask.y = -3.907;
  window.fightMgr.fight.fightService.uiFightFrame.progressRoot.x = 176.839;
  window.fightMgr.fight.fightService.uiFightFrame.progressRoot.y = -299.749;
  window.fightMgr.fight.fightService.uiFightFrame.minimap.mask.addComponent(cc.Mask);
  for (let _0xbb5a3d in window.fightMgr.fight.fightService.uiFightFrame.minimap.miniMap.roomRootNode.children) {
    let _0x9de6f8 = window.fightMgr.fight.fightService.uiFightFrame.minimap.miniMap.roomRootNode.children[_0xbb5a3d],
      _0x1005aa = _0x9de6f8.children[0];
    _0x1005aa && _0x1005aa.name != "label" && (_0x1005aa.active = true);
  }
  for (let _0x31ea3e in window.fightMgr.fight.minimap.units) {
    let _0x31e813 = window.fightMgr.fight.minimap.units[_0x31ea3e];
    _0x31e813.show = false;
  }
}
window.tempFashionData = null;
function updatePlayerFashion() {
  if (!window.mainScene) {
    return;
  }
  if (!window.AutoFashion) {
    return;
  }
  if (!Service._heroService.heroBaseData) {
    return;
  }
  let _0x3bb44e = Service._heroService.profession;
  if (window.AutoBattleState == 1) {
    let _0x585f2d = getFashionList(_0x3bb44e, 1)[window.Fashion0List.selectIdx];
    _0x585f2d && _0x585f2d.id && (window.mainScene.fashionService.equipped[0] = _0x585f2d.id, window.mainScene.freshPlayer());
    let _0x51bfa6 = getFashionList(_0x3bb44e, 3)[window.Fashion3List.selectIdx];
    _0x51bfa6 && _0x51bfa6.id && (window.mainScene.fashionService.equipped[3] = _0x51bfa6.id, window.mainScene.freshPlayer());
    let _0x5b68bf = getFashionList(_0x3bb44e, 9)[window.Fashion9List.selectIdx];
    _0x5b68bf && _0x5b68bf.id && (window.mainScene.fashionService.equipped[9] = _0x5b68bf.id, window.mainScene.freshPlayer());
    let _0x281b9b = getFashionList(_0x3bb44e, 10)[window.Fashion10List.selectIdx];
    _0x281b9b && _0x281b9b.id && (window.mainScene.fashionService.equipped[10] = _0x281b9b.id, window.mainScene.freshPlayer());
    let _0x4c990a = getFashionList(_0x3bb44e, 11)[window.Fashion4List.selectIdx];
    _0x4c990a && _0x4c990a.id && (window.mainScene.fashionService.equipped[4] = _0x4c990a.id, window.mainScene.freshPlayer());
    window.tempFashionData = window.mainScene.fashionService.equipped;
  }
  if (window.AutoBattleState == 3) {
    let _0x337ee6 = getBattlePlayer();
    if (!_0x337ee6) {
      return;
    }
    let _0x14d037 = getFashionList(_0x3bb44e, 1)[window.Fashion0List.selectIdx];
    _0x14d037 && _0x14d037.id && (_0x337ee6.roleUnitRender._fashionIds[0] = _0x14d037.id);
    let _0x4628d1 = getFashionList(_0x3bb44e, 3)[window.Fashion3List.selectIdx];
    _0x4628d1 && _0x4628d1.id && (_0x337ee6.roleUnitRender._fashionIds[3] = _0x4628d1.id);
    let _0x34d975 = getFashionList(_0x3bb44e, 9)[window.Fashion9List.selectIdx];
    _0x34d975 && _0x34d975.id && (_0x337ee6.roleUnitRender._fashionIds[9] = _0x34d975.id);
    let _0x5797d0 = getFashionList(_0x3bb44e, 10)[window.Fashion10List.selectIdx];
    _0x5797d0 && _0x5797d0.id && (_0x337ee6.roleUnitRender._fashionIds[10] = _0x5797d0.id);
    let _0x6dda85 = getFashionList(_0x3bb44e, 11)[window.Fashion4List.selectIdx];
    _0x6dda85 && _0x6dda85.id && (_0x337ee6.roleUnitRender._fashionIds[4] = _0x6dda85.id);
    window.tempFashionData = _0x337ee6.roleUnitRender._fashionIds;
    window.updatePlayerFashionBattle();
  }
}
window.updatePlayerFashionMain = function () {
  updatePlayerFashion();
};
window.updatePlayerFashionBattle = function () {
  if (!window.AutoFashion) {
    return;
  }
  if (!window.tempFashionData) {
    return;
  }
  if (!Service._heroService.heroBaseData) {
    return;
  }
  let _0x474fcd = getBattlePlayer();
  if (!_0x474fcd) {
    return;
  }
  _0x474fcd.roleUnitRender.setRenderEquip(_0x474fcd.roleUnitRender._skins, window.tempFashionData);
};
function updatePlayerFashionSuit() {
  if (!window.mainScene) {
    return;
  }
  if (!Service._heroService.heroBaseData) {
    return;
  }
  let _0x28a4bc = Service._heroService.profession,
    _0x125d51 = getFashionSuitList(_0x28a4bc),
    _0x15fe5c = _0x125d51[window.Fashion99List.selectIdx],
    _0x31d9aa = getFashionSuitPos(getFashionList(_0x28a4bc, 1), _0x15fe5c);
  window.Fashion0List.selectIdx = _0x31d9aa;
  window.Fashion0List.selectLabel.string = window.Fashion0List.items[_0x31d9aa];
  let _0xcf3afc = getFashionSuitPos(getFashionList(_0x28a4bc, 1), _0x15fe5c);
  window.Fashion3List.selectIdx = _0xcf3afc;
  window.Fashion3List.selectLabel.string = window.Fashion3List.items[_0xcf3afc];
  let _0x160891 = getFashionSuitPos(getFashionList(_0x28a4bc, 1), _0x15fe5c);
  window.Fashion9List.selectIdx = _0x160891;
  window.Fashion9List.selectLabel.string = window.Fashion9List.items[_0x160891];
  let _0xf6001f = getFashionSuitPos(getFashionList(_0x28a4bc, 1), _0x15fe5c);
  window.Fashion10List.selectIdx = _0xf6001f;
  window.Fashion10List.selectLabel.string = window.Fashion10List.items[_0xf6001f];
  updatePlayerFashion();
}
window.curFashionProfession = 0;
function updateFashionData() {
  if (!window.mainScene) {
    return;
  }
  if (!Service._heroService.heroBaseData) {
    return;
  }
  if (window.curFashionProfession || window.curFashionProfession == Service._heroService.heroBaseData) {
    return;
  }
  let _0x1645e8 = Service._heroService.profession;
  window.curFashionProfession = _0x1645e8;
  let _0x4a4b7c = getFashionNameList(getFashionList(_0x1645e8, 1)),
    _0x1ef427 = getFashionNameList(getFashionList(_0x1645e8, 3)),
    _0x40cac1 = getFashionNameList(getFashionList(_0x1645e8, 9)),
    _0x1c42b0 = getFashionNameList(getFashionList(_0x1645e8, 10)),
    _0x39655b = getFashionNameList(getFashionList(_0x1645e8, 11));
  updateFashionList(window.Fashion0List, _0x4a4b7c);
  updateFashionList(window.Fashion3List, _0x1ef427);
  updateFashionList(window.Fashion9List, _0x40cac1);
  updateFashionList(window.Fashion10List, _0x1c42b0);
  updateFashionList(window.Fashion4List, _0x39655b);
  let _0x5d2701 = getFashionSuitList(_0x1645e8);
  updateFashionList(window.Fashion99List, getFashionSuitNameList(_0x5d2701));
}
function updateFashionList(_0x4ea9b1, _0x1362fe) {
  _0x4ea9b1.items = _0x1362fe;
  _0x4ea9b1.selectIdx = 0;
  _0x4ea9b1.selectLabel.string = _0x4ea9b1.items[_0x4ea9b1.selectIdx];
}
function getFashionList(_0x152594, _0x501574) {
  let _0xb90ae7 = [];
  for (let _0x30020a in window.configList.Fashion.list) {
    let _0x360425 = window.configList.Fashion.list[_0x30020a];
    (_0x360425.profession == 0 || _0x360425.profession && _0x360425.profession == _0x152594) && _0x360425.equipPos == _0x501574 && _0x360425.quality > 2 && _0xb90ae7.push(_0x360425);
  }
  _0xb90ae7.sort(function (_0x51cbc9, _0x4a123b) {
    return _0x51cbc9.quality - _0x4a123b.quality || _0x51cbc9.id - _0x4a123b.id;
  });
  return _0xb90ae7;
}
function getFashionNameList(_0x5c660d) {
  let _0x60a0be = [];
  for (let _0x1463e8 in _0x5c660d) {
    let _0x2ed5c7 = _0x5c660d[_0x1463e8];
    _0x60a0be.push(_0x2ed5c7.name);
  }
  return _0x60a0be;
}
function getFashionSuitList(_0x242235) {
  let _0x468009 = [];
  for (let _0x2d1f89 in window.configList.Fashion.list) {
    let _0x54a743 = window.configList.Fashion.list[_0x2d1f89];
    if ((_0x54a743.profession == 0 || _0x54a743.profession && _0x54a743.profession == _0x242235) && _0x54a743.equipPos != 11 && _0x54a743.quality > 2 && _0x54a743.suit) {
      if (_0x468009.indexOf(_0x54a743.suit) == -1) {
        _0x468009.push(_0x54a743.suit);
      }
    }
  }
  _0x468009.sort(function (_0x4b08a8, _0x191532) {
    return _0x4b08a8 - _0x191532;
  });
  return _0x468009;
}
function getFashionSuitNameList(_0x53b56e) {
  let _0x3c370f = [];
  for (let _0x2a0185 in _0x53b56e) {
    let _0x45095a = gameConfig.FashionSuit[_0x53b56e[_0x2a0185]];
    _0x45095a && _0x3c370f.push(_0x45095a.name);
  }
  return _0x3c370f;
}
function getFashionSuitPos(_0xeb0fd3, _0x112b85) {
  for (let _0xa5ffed in _0xeb0fd3) {
    let _0x299f27 = _0xeb0fd3[_0xa5ffed];
    if (_0x299f27.suit == _0x112b85) {
      return Number(_0xa5ffed);
    }
  }
  return 0;
}
function updatePlayerSkillSkin() {
  if (!window.mainScene) {
    return;
  }
  if (!window.AutoFashion) {
    return;
  }
  if (!Service._heroService.heroBaseData) {
    return;
  }
  let _0x5ebd98 = Service._heroService.profession;
  if (window.AutoBattleState == 1) {
    let _0x5e67e1 = getSkillSkinList(_0x5ebd98, 1)[window.SkillSkinList.selectIdx];
    _0x5e67e1 && _0x5e67e1.id && Service._skillSkinService._wearSkin.set(_0x5e67e1.fromTalent, _0x5e67e1.id);
    window.tempSkillData = Service._skillSkinService._wearSkin;
  }
  if (window.AutoBattleState == 3) {
    let _0x5aed7b = getBattlePlayer();
    if (!_0x5aed7b) {
      return;
    }
    let _0x2ce842 = getSkillSkinList(_0x5ebd98, 1)[window.SkillSkinList.selectIdx];
    _0x2ce842 && _0x2ce842.id && Service._skillSkinService._wearSkin.set(_0x2ce842.fromTalent, _0x2ce842.id);
    window.tempSkillData = Service._skillSkinService._wearSkin;
  }
}
function getSkillSkinNameList(_0x52d682) {
  let _0x36103b = [];
  for (let _0x1f7540 in _0x52d682) {
    let _0x20487d = _0x52d682[_0x1f7540];
    _0x36103b.push(_0x20487d.name);
  }
  return _0x36103b;
}
function getSkillSkinList(_0x55895e, _0x1bbbea) {
  let _0x13dc76 = [];
  for (let _0x160afa in window.configList.SkillSkin.list) {
    let _0x16593b = window.configList.SkillSkin.list[_0x160afa];
    _0x16593b.roleType && _0x16593b.roleType == _0x55895e && _0x13dc76.push(_0x16593b);
  }
  _0x13dc76.sort(function (_0x4704d0, _0x136cd7) {
    return _0x4704d0.id - _0x136cd7.id || _0x4704d0.id - _0x136cd7.id;
  });
  return _0x13dc76;
}
function openAutoBattleClose() {
  showTips("【副本】开启战斗超时退出", true);
  showTips("速刷专用，不是速刷不要开", true);
  closeAutoBattleClose();
  window.AutoBattleCloseTime = setInterval(() => {
    startAutoBattleClose();
  }, 1000);
}
function closeAutoBattleClose() {
  clearInterval(window.AutoBattleCloseTime);
}
function startAutoBattleClose() {
  if (!window.fightMgr || !window.fightMgr.fight.fightTime) {
    return;
  }
  if (window.fightMgr.fight.state == 3) {
    return;
  }
  let _0x6dfa58 = Number(window.AutoBattleCloseTimeInput.string) || 60;
  window.fightMgr.fight.fightTime >= _0x6dfa58 && (window.StatisticsData.num--, window.StatisticsData.nonum++, closeBattle(100));
}
function openAutoAncestral() {
  showTips("【神铸】开启自动赐福", true);
  closeAutoAncestral();
  window.AutoAncestralTime = setInterval(() => {
    startAutoAncestral();
  }, 600);
  window.AutoAncestralTime2 = setInterval(() => {
    updateAncestralData();
  }, 50);
}
function closeAutoAncestral() {
  clearInterval(window.AutoAncestralTime);
  clearInterval(window.AutoAncestralTime2);
}
function startAutoAncestral() {
  if (!window.UIAncestralWordPanel.node || !window.UIAncestralWordPanel.uniqueId) {
    return;
  }
  let _0x27db1c = Service._equipService.getEquipByUniqueId(window.UIAncestralWordPanel.uniqueId);
  if (!_0x27db1c) {
    return;
  }
  if (_0x27db1c.gdEquip.ancientAdd.level >= 20) {
    let _0x2e0577 = checkAncestralSkill();
    if (_0x2e0577 != 1) {
      let _0x1c6860 = configList.AncientWord.getById(_0x27db1c.gdEquip.ancientAdd.level);
      if (Service._walletService.Coin < _0x1c6860.levelReCost[0].num) {
        showTips("【神铸】金币不足，无法重置", true);
        return;
      }
      window.UIAncestralWordPanel.ancestralWordService.Reset(window.UIAncestralWordPanel.uniqueId);
      return;
    }
    showTips("【神铸】装备已满级", true);
    return;
  }
  let _0x4fe259 = configList.AncientWord.getById(_0x27db1c.gdEquip.ancientAdd.level + 1);
  if (Service._walletService.Coin < _0x4fe259.levelUpCost[0].num) {
    showTips("【神铸】金币不足", true);
    return;
  }
  if (!Service._itemService.items.get(900002) || Service._itemService.items.get(900002).amount <= 0) {
    showTips("【神铸】铃铛不足", true);
    return;
  }
  if (Number(window.AncestralEquipItemInput.string) <= 0) {
    showTips("【神铸】设置的铃铛已用完", true);
    return;
  }
  let _0x467584 = checkAncestralSkill();
  if (_0x467584 != 1) {
    if (_0x467584 == -1) {
      return;
    } else {
      let _0x473226 = configList.AncientWord.getById(_0x27db1c.gdEquip.ancientAdd.level);
      if (Service._walletService.Coin < _0x473226.levelReCost[0].num) {
        showTips("【神铸】金币不足，无法重置", true);
        return;
      }
      window.UIAncestralWordPanel.ancestralWordService.Reset(window.UIAncestralWordPanel.uniqueId);
    }
    return;
  }
  window.UIAncestralWordPanel.onClick_LevelUp();
  window.AncestralEquipItemInput.string = Number(window.AncestralEquipItemInput.string) - 1;
}
function checkAncestralSkill() {
  if (!window.UIAncestralWordPanel.node || !window.UIAncestralWordPanel.uniqueId) {
    return;
  }
  let _0x2abfcb = Service._equipService.getEquipByUniqueId(window.UIAncestralWordPanel.uniqueId);
  if (!_0x2abfcb) {
    return;
  }
  let _0x6c4bd = [];
  for (let _0x1e7e38 = 1; _0x1e7e38 <= 5; _0x1e7e38++) {
    let _0x4ccb48 = window["AncestralEquipSkill" + _0x1e7e38 + "List"].selectIdx,
      _0x204e89 = window["AncestralEquipSkill" + _0x1e7e38 + "List"].items,
      _0x2bfd4b = getEquipSkillList(_0x2abfcb.conf.type, _0x1e7e38 * 4),
      _0x50b4ca = -1;
    _0x2bfd4b.skillWeight.forEach((_0xbd4adf, _0x330ac0) => {
      _0x50b4ca++;
      if (_0x204e89[_0x4ccb48] == "任意") {
        _0x6c4bd.push(0);
      } else {
        if (_0x4ccb48 == _0x50b4ca) {
          _0x6c4bd.push(_0x330ac0);
        } else {
          if (_0x204e89[_0x4ccb48] == "不赐福" && _0x2abfcb.gdEquip.ancientAdd.level + 1 >= _0x1e7e38 * 4) {
            _0x6c4bd.push(-1);
            return -1;
          }
        }
      }
    });
  }
  let _0xcf8240 = [];
  _0x2abfcb.gdEquip.ancientAdd.add.forEach(_0x22fb1e => {
    _0xcf8240.push(_0x22fb1e);
  });
  for (let _0xc959e2 in _0xcf8240) {
    let _0x3927b0 = _0xcf8240[_0xc959e2],
      _0x6c9db2 = _0x6c4bd[_0xc959e2];
    if (_0x6c9db2 == -1) {
      return -1;
    }
    if (_0x6c9db2 > 0 && _0x6c9db2 != _0x3927b0.skillId) {
      return 0;
    }
  }
  return 1;
}
window.AncestralUniqueId = false;
window.AncestralDataState = true;
function updateAncestralData() {
  if (!window.UIAncestralWordPanel.node || !window.UIAncestralWordPanel.uniqueId) {
    resetAncestralData();
    return;
  }
  let _0x242017 = Service._equipService.getEquipByUniqueId(window.UIAncestralWordPanel.uniqueId);
  if (!_0x242017) {
    resetAncestralData();
    return;
  }
  window.AncestralUniqueId != window.UIAncestralWordPanel.uniqueId && resetAncestralData();
  window.AncestralUniqueId = window.UIAncestralWordPanel.uniqueId;
  window.AncestralEquipName.label.string = "【" + _0x242017.conf.name + "】";
  window.AncestralEquipLv.label.string = "等级【" + _0x242017.gdEquip.ancientAdd.level + "】";
  if (window.AncestralDataState) {
    for (let _0x44af04 = 1; _0x44af04 <= 5; _0x44af04++) {
      let _0x58050f = getEquipSkillList(_0x242017.conf.type, _0x44af04 * 4),
        _0x42318a = [];
      _0x58050f.skillWeight.forEach((_0x2ffc3d, _0x5c2273) => {
        _0x42318a.push(getEquipSkillDesc(_0x5c2273));
      });
      updateAncestralEquipSkillList(window["AncestralEquipSkill" + _0x44af04 + "List"], _0x42318a);
    }
    window.AncestralDataState = false;
  }
  let _0x11bbbd = [];
  for (let _0x502435 = 1; _0x502435 <= 5; _0x502435++) {
    let _0x9c9cd7 = window["AncestralEquipSkill" + _0x502435 + "List"].selectIdx,
      _0x2f581b = window["AncestralEquipSkill" + _0x502435 + "List"].items,
      _0x47262c = getEquipSkillList(_0x242017.conf.type, _0x502435 * 4),
      _0x385f21 = -1;
    _0x47262c.skillWeight.forEach((_0x197455, _0x49daa1) => {
      _0x385f21++;
      if (_0x2f581b[_0x9c9cd7] == "任意") {
        _0x11bbbd.push(0);
      } else {
        _0x9c9cd7 == _0x385f21 && _0x11bbbd.push(_0x49daa1);
      }
    });
  }
  let _0x46be61 = [];
  _0x242017.gdEquip.ancientAdd.add.forEach(_0x314d81 => {
    _0x46be61.push(_0x314d81);
  });
  for (let _0x2fd23c = 1; _0x2fd23c <= 5; _0x2fd23c++) {
    window["AncestralEquipLv" + _0x2fd23c + "Tips"].color = cc.color().fromHEX("ffffff");
  }
  for (let _0x457967 in _0x46be61) {
    let _0x1b2a24 = Number(_0x457967) + 1,
      _0x3c5b02 = _0x46be61[_0x457967],
      _0x1fa59 = _0x11bbbd[_0x457967];
    (_0x1fa59 == 0 || _0x1fa59 == _0x3c5b02.skillId) && (window["AncestralEquipLv" + _0x1b2a24 + "Tips"].color = cc.color().fromHEX("79FF71"));
  }
}
function resetAncestralData() {
  if (!window.AncestralEquipName) {
    return;
  }
  window.AncestralEquipName.label.string = "未放入装备";
  window.AncestralEquipLv.label.string = "等级【无】";
  updateAncestralEquipSkillList(window.AncestralEquipSkill1List, ["无装备", "无装备", "无装备", "无装备", "无装备"]);
  updateAncestralEquipSkillList(window.AncestralEquipSkill2List, ["无装备", "无装备", "无装备", "无装备"]);
  updateAncestralEquipSkillList(window.AncestralEquipSkill3List, ["无装备", "无装备", "无装备", "无装备"]);
  updateAncestralEquipSkillList(window.AncestralEquipSkill4List, ["无装备", "无装备", "无装备", "无装备"]);
  updateAncestralEquipSkillList(window.AncestralEquipSkill5List, ["无装备", "无装备", "无装备", "无装备"]);
  window.AncestralDataState = true;
}
function updateAncestralEquipSkillList(_0x5aa8bb, _0x21625c) {
  _0x21625c.push("任意");
  _0x21625c.push("不赐福");
  _0x5aa8bb.items = _0x21625c;
  _0x5aa8bb.selectIdx = 0;
  _0x5aa8bb.selectLabel.string = _0x5aa8bb.items[_0x5aa8bb.selectIdx];
}
function getEquipSkillList(_0x1e2fa4, _0x119ff1) {
  for (let _0x374491 in configList.AncientEntry.list) {
    var _0x5dab33 = configList.AncientEntry.list[_0x374491];
    if (_0x5dab33.profession === Service._heroService.profession && _0x5dab33.type === _0x1e2fa4 && _0x5dab33.level === _0x119ff1) {
      return _0x5dab33;
    }
  }
  return null;
}
function getEquipSkillDesc(_0x4ce2ed) {
  let _0x4d248e = "",
    _0x22d3fa = null;
  for (let _0x5abdb1 in configList.AncientSkill.list) {
    let _0x202a4e = configList.AncientSkill.list[_0x5abdb1];
    _0x202a4e.id == _0x4ce2ed && (_0x22d3fa = _0x202a4e);
  }
  if (!_0x22d3fa) {
    return null;
  }
  if (_0x22d3fa.skillDesc && _0x22d3fa.skillDesc.length > 0) {
    _0x4d248e = _0x22d3fa.skillName;
  } else {
    _0x22d3fa.attrsDesc && _0x22d3fa.attrsDesc.length > 0 && (_0x4d248e = _0x22d3fa.attrsDesc[0], _0x4d248e += _0x22d3fa.attrsDesc.length > 1 ? _0x22d3fa.attrsDesc[1] : "");
  }
  return _0x4d248e;
}
window.updatePanghuTime = function (_0x258819) {
  updateSuperPath(_0x258819);
  AutoAI(_0x258819);
  updateStatisticsInfo(_0x258819);
  showPlugTips(_0x258819);
};
window.GameRunTime = 0;
function openAutoRestart() {
  showTips("【系统】开启自动重启，运行指定时间重启", true);
  window.GameRunTime = 0;
  closeAutoRestart();
  window.AutoRestartTime = setInterval(() => {
    startAutoRestart();
  }, 1000);
}
function closeAutoRestart() {
  cc.sys.localStorage.setItem("RestartLogin", false);
  clearInterval(window.AutoRestartTime);
}
function startAutoRestart() {
  let _0x56b905 = Number(window.AutoRestartInput.string) || 60;
  window.GameRunTime += 1;
  window.GameRunTime >= _0x56b905 * 60 && (clearInterval(window.AutoRestartTime), restartGame());
}
function openAutoDisconnect() {
  showTips("【系统】开启掉线重登", true);
  closeAutoDisconnect();
  window.AutoDisconnectTime = setInterval(() => {
    startAutoDisconnect();
  }, 1000);
}
function closeAutoDisconnect() {
  clearInterval(window.AutoDisconnectTime);
}
function startAutoDisconnect() {
  window.GameDisconnect && (closeAutoDisconnect(), window.GameDisconnect = false, restartGame());
}
function openAutoFightReward() {
  showTips("【副本】开启自动打速通宝箱，需要开【单人刷图】", true);
  showTips("有速通宝箱会自动领", true);
  closeAutoFightReward();
  window.AutoFightRewardTime = setInterval(() => {
    startAutoFightReward();
  }, 1000);
}
function closeAutoFightReward() {
  clearInterval(window.AutoFightRewardTime);
}
function startAutoFightReward() {
  if (window.Service._equipService.isBagFull()) {
    return;
  }
  for (let _0x10039a in window.Service._levelService._stageLevels) {
    let _0xb62660 = window.Service._levelService._stageLevels[_0x10039a];
    if (_0xb62660.state == 1 && _0xb62660.time < 60) {
      showTips("【副本】有速通宝箱，自动领取成功", true);
      window.Service._levelService.getLimitReward(_0xb62660.id);
      return;
    }
  }
}
function getLevelServiceId() {
  for (let _0x46987a in window.Service._levelService._stageLevels) {
    let _0x1fc5aa = window.Service._levelService._stageLevels[_0x46987a];
    if (_0x1fc5aa.state == 0 && _0x1fc5aa.id <= window.Service._levelService.maxSanctumFloor) {
      return _0x1fc5aa.id;
    }
    if (_0x1fc5aa.state == 1 && _0x1fc5aa.time > 60) {
      return _0x1fc5aa.id;
    }
  }
  return null;
}
function showPlugTips(_0x438eb5) {
  if (!window.plugTipsList) {
    return;
  }
  window.plugTipsList.selectIdx[1] ? showCoinBuff(_0x438eb5) : closeCoinBuff();
  window.plugTipsList.selectIdx[2] ? showFightProgress(_0x438eb5) : closeFightProgress();
  window.plugTipsList.selectIdx[3] ? showMonsterProgress(_0x438eb5) : closeMonsterProgress();
  window.plugTipsList.selectIdx[4] ? showMonsterHp(_0x438eb5) : closeMonsterHp();
  window.plugTipsList.selectIdx[5] ? showPlayerHp(_0x438eb5) : closePlayerHp();
  window.plugTipsList.selectIdx[6] ? showPlayerEnergy(_0x438eb5) : closePlayerEnergy();
  window.plugTipsList.selectIdx[7] ? showSkillRange(_0x438eb5) : closeSkillRange();
  window.plugTipsList.selectIdx[8] ? showAttackRange(_0x438eb5) : closeAttackRange();
}
window.buffNode = null;
window.buffRefreshTime = 3000;
function showCoinBuff(_0x5d2014) {
  if (!window.fightMgr || !window.fightMgr.fight) {
    return;
  }
  let _0x44eb70 = getBattlePlayer();
  if (!_0x44eb70) {
    return;
  }
  let _0x1431cb = _0x44eb70.getBuffByTypeId(1705054);
  if (!_0x1431cb) {
    return;
  }
  if (!window.fightMgr.fight.fightService.uiFightFrame || !window.fightMgr.fight.fightService.uiFightFrame.heroStatus) {
    return;
  }
  let _0x49eb27 = _0x1431cb.buffId == 1705055 ? 1 : 2;
  if (!cc.isValid(window.buffNode)) {
    window.buffNode = createNode("buffNode", -200, 290, 40, 40, "626257", window.fightMgr.fight.fightService.uiFightFrame.heroStatus, true);
    let _0x1abdca = createLabel("buffType", "硬", "79FF71", "000000", 0, -10, 32, window.buffNode);
    window.buffNode.buffLabel = _0x1abdca;
    let _0x324ce6 = createNode("buffNode", 0, 20, 40, 40, "000000", window.buffNode, true),
      _0x4232e2 = createLabel("buffTimeLabel", "3", "79FF71", "000000", 0, 25, 28, window.buffNode);
    _0x324ce6.anchorY = 1;
    _0x324ce6.opacity = 100;
    window.buffNode.timeNode = _0x324ce6;
    window.buffNode.buffTimeLabel = _0x4232e2;
  }
  let _0x46d589 = 0;
  _0x49eb27 == 1 ? (window.buffNode.buffLabel.label.string = "正", window.buffNode.buffLabel.color = cc.color().fromHEX("79FF71"), window.buffRefreshTime = 3000, _0x46d589 = Number((_0x1431cb._duration / 3).toFixed(2))) : (window.buffNode.buffLabel.label.string = "反", window.buffNode.buffLabel.color = cc.color().fromHEX("ed1c24"), window.buffRefreshTime -= _0x5d2014 * 1000, _0x46d589 = Number((window.buffRefreshTime / 3000).toFixed(2)), window.buffRefreshTime <= 0 && (window.buffRefreshTime += 3000));
  window.buffNode.timeNode.height = 40 * (1 - _0x46d589);
  window.buffNode.buffTimeLabel.label.string = (3 * _0x46d589).toFixed(2);
}
function closeCoinBuff() {
  if (!window.fightMgr || !window.fightMgr.fight) {
    return;
  }
  let _0x4264b6 = getBattlePlayer();
  if (!_0x4264b6) {
    return;
  }
  if (!window.fightMgr.fight.fightService.uiFightFrame || !window.fightMgr.fight.fightService.uiFightFrame.heroStatus) {
    return;
  }
  cc.isValid(window.buffNode) && window.buffNode.destroy();
}
window.fightProgressLabel = null;
function showFightProgress(_0x52e5b0) {
  if (!window.fightMgr || !window.fightMgr.fight) {
    return;
  }
  let _0x7af2c9 = getBattlePlayer();
  if (!_0x7af2c9) {
    return;
  }
  if (!window.fightMgr.fight.fightService.uiFightFrame || !window.fightMgr.fight.fightService.uiFightFrame.progressRoot) {
    return;
  }
  if (!window.fightMgr.fight._totalProgress) {
    return;
  }
  !cc.isValid(window.fightProgressLabel) && (window.fightProgressLabel = createLabel("fightProgressLabel", "0%", "EDDA60", "000000", 130, -20, 30, window.fightMgr.fight.fightService.uiFightFrame.progressRoot), window.fightProgressLabel.zIndex = 99);
  let _0x176a43 = (window.fightMgr.fight._progress / window.fightMgr.fight._totalProgress * 100).toFixed(2);
  window.fightProgressLabel.label.string = _0x176a43 + "%";
}
function closeFightProgress() {
  if (!window.fightMgr || !window.fightMgr.fight) {
    return;
  }
  let _0x1de44b = getBattlePlayer();
  if (!_0x1de44b) {
    return;
  }
  if (!window.fightMgr.fight.fightService.uiFightFrame || !window.fightMgr.fight.fightService.uiFightFrame.progressRoot) {
    return;
  }
  cc.isValid(window.fightProgressLabel) && window.fightProgressLabel.destroy();
}
function showMonsterProgress(_0xe562a4) {
  if (!window.fightMgr || !window.fightMgr.fight) {
    return;
  }
  let _0x2bb0b4 = getBattlePlayer();
  if (!_0x2bb0b4) {
    return;
  }
  if (!window.fightMgr.fight.unitsManager) {
    return;
  }
  if (!window.fightMgr.fight._totalProgress) {
    return;
  }
  for (let _0x237e55 in window.fightMgr.fight.unitsManager.defenders) {
    let _0x23326b = window.fightMgr.fight.unitsManager.defenders[_0x237e55];
    if (_0x23326b.Dead) {
      continue;
    }
    if (!_0x23326b.monsterConfig) {
      continue;
    }
    if (!_0x23326b.roleUnitRender || !_0x23326b.roleUnitRender.unitGO) {
      continue;
    }
    if (!_0x23326b.monsterConfig.stageProgress) {
      continue;
    }
    if (cc.isValid(_0x23326b.roleUnitRender.unitGO.progressLabel)) {
      continue;
    }
    let _0x2a504f = createLabel("progressLabel", "0%", "EDDA60", "000000", 0, 0, 34, _0x23326b.roleUnitRender.unitGO.node);
    _0x2a504f.zIndex = 99;
    _0x23326b.roleUnitRender.unitGO.progressLabel = _0x2a504f;
    let _0x2ff8c0 = (_0x23326b.monsterConfig.stageProgress / window.fightMgr.fight._totalProgress * 100).toFixed(2);
    _0x2a504f.label.string = _0x2ff8c0 + "%";
  }
}
function closeMonsterProgress() {
  if (!window.fightMgr || !window.fightMgr.fight) {
    return;
  }
  let _0x59ea04 = getBattlePlayer();
  if (!_0x59ea04) {
    return;
  }
  if (!window.fightMgr.fight.unitsManager) {
    return;
  }
  for (let _0x21f550 in window.fightMgr.fight.unitsManager.defenders) {
    let _0xe405af = window.fightMgr.fight.unitsManager.defenders[_0x21f550];
    if (_0xe405af.Dead) {
      continue;
    }
    if (!_0xe405af.monsterConfig) {
      continue;
    }
    if (!_0xe405af.roleUnitRender || !_0xe405af.roleUnitRender.unitGO) {
      continue;
    }
    cc.isValid(_0xe405af.roleUnitRender.unitGO.progressLabel) && _0xe405af.roleUnitRender.unitGO.progressLabel.destroy();
  }
}
function showMonsterHp(_0x4880f2) {
  if (!window.fightMgr || !window.fightMgr.fight) {
    return;
  }
  let _0x136d98 = getBattlePlayer();
  if (!_0x136d98) {
    return;
  }
  if (!window.fightMgr.fight.unitsManager) {
    return;
  }
  if (!window.fightMgr.fight.unitsManager.boss) {
    return;
  }
  if (!window.fightMgr.fight.unitsManager.boss.roleUnitRender) {
    return;
  }
  if (!cc.isValid(window.fightMgr.fight.unitsManager.boss.roleUnitRender.unitGO.hpLabel)) {
    let _0x349758 = createLabel("hpLabel", "0%", "dcdec8", "000000", 0, 100, 32, window.fightMgr.fight.unitsManager.boss.roleUnitRender.unitGO.node);
    _0x349758.zIndex = 99;
    window.fightMgr.fight.unitsManager.boss.roleUnitRender.unitGO.hpLabel = _0x349758;
  }
  let _0x10df80 = window.fightMgr.fight.unitsManager.boss.AttributeComponent.hp.toLocaleString(),
    _0x5c31cf = window.fightMgr.fight.unitsManager.boss.AttributeComponent.MaxHp.toLocaleString();
  window.fightMgr.fight.unitsManager.boss.roleUnitRender.unitGO.hpLabel.label.string = _0x10df80 + "/" + _0x5c31cf;
}
function closeMonsterHp() {
  if (!window.fightMgr || !window.fightMgr.fight) {
    return;
  }
  let _0x1a4b4d = getBattlePlayer();
  if (!_0x1a4b4d) {
    return;
  }
  if (!window.fightMgr.fight.unitsManager) {
    return;
  }
  if (!window.fightMgr.fight.unitsManager.boss) {
    return;
  }
  if (!window.fightMgr.fight.unitsManager.boss.roleUnitRender) {
    return;
  }
  cc.isValid(window.fightMgr.fight.unitsManager.boss.roleUnitRender.unitGO.hpLabel) && window.fightMgr.fight.unitsManager.boss.roleUnitRender.unitGO.hpLabel.destroy();
}
window.playerHpLabel = null;
function showPlayerHp(_0x28e063) {
  let _0x28581f = getBattlePlayer();
  if (!window.fightMgr || !window.fightMgr.fight.fightTime || !_0x28581f || !window.fightMgr.fight.fightService.uiFightFrame) {
    return;
  }
  !cc.isValid(window.playerHpLabel) && (window.playerHpLabel = createLabel("playerHpLabel", "0%", "73f36c", "000000", 0, 170, 28, _0x28581f.roleUnitRender.hpSuperBar.node), window.playerHpLabel.zIndex = 99);
  let _0x7213f2 = _0x28581f.HpPercent.toFixed(1);
  window.playerHpLabel.label.string = _0x7213f2 + "%";
}
function closePlayerHp() {
  if (!window.fightMgr || !window.fightMgr.fight) {
    return;
  }
  let _0x33f52c = getBattlePlayer();
  if (!_0x33f52c) {
    return;
  }
  if (!window.fightMgr.fight.fightService.uiFightFrame) {
    return;
  }
  cc.isValid(window.playerHpLabel) && window.playerHpLabel.destroy();
}
window.playerEnergyLabel = null;
function showPlayerEnergy(_0x310673) {
  let _0x4fa331 = getBattlePlayer();
  if (!window.fightMgr || !window.fightMgr.fight.fightTime || !_0x4fa331 || !window.fightMgr.fight.fightService.uiFightFrame) {
    return;
  }
  if (!cc.isValid(window.playerEnergyLabel)) {
    window.playerEnergyLabel = createLabel("playerEnergyLabel", "0/0", "7cdcf0", "000000", 0, 140, 26, _0x4fa331.roleUnitRender.hpSuperBar.node);
    window.playerEnergyLabel.zIndex = 99;
    switch (Service._heroService.profession) {
      case 1:
        window.playerEnergyLabel.label.node.color = cc.color().fromHEX("d0c7b0");
        break;
      case 3:
        window.playerEnergyLabel.label.node.color = cc.color().fromHEX("0b88fb");
        break;
      case 2:
      case 4:
        window.playerEnergyLabel.label.node.color = cc.color().fromHEX("fc930b");
        break;
      case 5:
        window.playerEnergyLabel.label.node.color = cc.color().fromHEX("ff6e61");
        break;
    }
  }
  if (Service._heroService.profession == 5) {
    let _0x45887b = (_0x4fa331.AttributeComponent.BloodPoolPercent * 100).toFixed(1);
    window.playerEnergyLabel.label.string = _0x45887b + "%";
  } else {
    let _0x139f5e = _0x4fa331.AttributeComponent.Energy.toFixed(0);
    window.playerEnergyLabel.label.string = _0x139f5e + "/" + _0x4fa331.AttributeComponent.MaxEnergy;
  }
}
function closePlayerEnergy() {
  if (!window.fightMgr || !window.fightMgr.fight) {
    return;
  }
  let _0x1de2f9 = getBattlePlayer();
  if (!_0x1de2f9) {
    return;
  }
  if (!window.fightMgr.fight.fightService.uiFightFrame) {
    return;
  }
  cc.isValid(window.playerEnergyLabel) && window.playerEnergyLabel.destroy();
}
function showSkillRange(_0x20d0f3) {
  let _0x2ab050 = getBattlePlayer();
  if (!window.fightMgr || !window.fightMgr.fight.fightTime || !_0x2ab050 || !window.fightMgr.fight.fightService.uiFightFrame || !window.fightMgr.fight.fightService.uiFightFrame.skillPanel) {
    return;
  }
  for (let _0xab7ffd in _0x2ab050.SkillComponent._skills) {
    let _0x56cdf9 = Number(_0xab7ffd),
      _0x208edb = _0x2ab050.SkillComponent._skills[_0xab7ffd];
    if (!_0x208edb || !_0x208edb.skillConfig) {
      continue;
    }
    if (cc.isValid(window.fightMgr.fight.fightService.uiFightFrame.skillPanel["skillRange" + _0x56cdf9])) {
      continue;
    }
    let _0x55ff9e = -150 + _0x56cdf9 * 75,
      _0x57a7cb = createLabel("skillRange", 0, "dcdec7", "000000", _0x55ff9e, 240, 28, window.fightMgr.fight.fightService.uiFightFrame.skillPanel.node);
    window.fightMgr.fight.fightService.uiFightFrame.skillPanel["skillRange" + _0x56cdf9] = _0x57a7cb;
    _0x57a7cb.label.string = _0x208edb.skillConfig.range;
  }
}
function closeSkillRange() {
  if (!window.fightMgr || !window.fightMgr.fight) {
    return;
  }
  let _0x35d43a = getBattlePlayer();
  if (!_0x35d43a) {
    return;
  }
  if (!window.fightMgr.fight.fightService.uiFightFrame) {
    return;
  }
  if (!window.fightMgr.fight.fightService.uiFightFrame.skillPanel) {
    return;
  }
  for (let _0x1cf02f in _0x35d43a.SkillComponent._skills) {
    let _0x15c168 = Number(_0x1cf02f);
    cc.isValid(window.fightMgr.fight.fightService.uiFightFrame.skillPanel["skillRange" + _0x15c168]) && window.fightMgr.fight.fightService.uiFightFrame.skillPanel["skillRange" + _0x15c168].destroy();
  }
}
window.playerAttackRange = null;
function showAttackRange(_0x1ef600) {
  let _0x3d21e2 = getBattlePlayer();
  if (!window.fightMgr || !window.fightMgr.fight.fightTime || !_0x3d21e2 || !window.fightMgr.fight.fightService.uiFightFrame) {
    return;
  }
  if (cc.isValid(window.playerAttackRange)) {
    return;
  }
  let _0x39997a = Number(window.AttackRangeInput.string) || 100;
  window.playerAttackRange = _0x3d21e2.roleUnitRender.unitGO.node.addComponent(cc.Graphics);
  window.playerAttackRange.lineWidth = 10;
  window.playerAttackRange.strokeColor = cc.color().fromHEX("fa5252");
  window.playerAttackRange.circle(0, 0, _0x39997a);
  window.playerAttackRange.stroke();
}
function closeAttackRange() {
  if (!window.fightMgr || !window.fightMgr.fight) {
    return;
  }
  let _0x1df512 = getBattlePlayer();
  if (!_0x1df512) {
    return;
  }
  cc.isValid(window.playerAttackRange) && window.playerAttackRange.destroy();
}
function restartGame() {
  cc.sys.localStorage.setItem("AutoCloseGame", true);
  cc.sys.localStorage.setItem("RestartLogin", true);
  window.location.href = window.location.href;
}
function restartGameAccount() {
  cc.sys.localStorage.setItem("AutoCloseGame", true);
  cc.sys.localStorage.setItem("NextAccountLogin", true);
  window.location.href = window.location.href;
}
function closeGame() {
  saveCompleteAccount();
  cc.sys.localStorage.setItem("AutoCloseGame", true);
  window.location.href = window.location.href;
}
const _0x4d01d6 = {
  time: 0,
  battle3Num: 0,
  num: 0,
  nonum: 0,
  item900002: 0,
  item900003: 0,
  quality1: 0,
  quality2: 0,
  quality3: 0,
  quality4: 0,
  quality5: 0,
  quality6: 0,
  quality7: 0
};
window.StatisticsData = _0x4d01d6;
function updateStatisticsInfo(_0x509c8d) {
  window.StatisticsData.time += _0x509c8d * 1000;
  let _0x568be3 = Service._playerService.isExpert ? 28800 : 10800;
  if (Service._levelService.fatigueScore && window.statisticsResidueRunTime) {
    window.statisticsResidueRunTime.label.string = msToTime((_0x568be3 - Math.min(_0x568be3, Service._levelService.fatigueScore)) * 1000);
  }
  if (window.statisticsRunTime) {
    window.statisticsRunTime.label.string = msToTime(window.StatisticsData.time);
  }
  if (window.statisticsRunNum) {
    window.statisticsRunNum.label.string = "刷图：" + window.StatisticsData.num + "次";
  }
  if (window.statisticsNoRunNum) {
    window.statisticsNoRunNum.label.string = "不刷：" + window.StatisticsData.nonum + "次";
  }
  if (window.statisticsItem900002) {
    window.statisticsItem900002.label.string = "铃铛：" + window.StatisticsData.item900002 + "个";
  }
  if (window.statisticsBatlle3Num) {
    window.statisticsBatlle3Num.label.string = "奶牛：" + window.StatisticsData.battle3Num + "头";
  }
  if (window.statisticsQulity7) {
    window.statisticsQulity7.label.string = "太古：" + window.StatisticsData.quality7 + "件";
  }
  if (window.statisticsQulity6) {
    window.statisticsQulity6.label.string = "远古：" + window.StatisticsData.quality6 + "件";
  }
  if (window.statisticsQulity5) {
    window.statisticsQulity5.label.string = "套装：" + window.StatisticsData.quality5 + "件";
  }
  if (window.statisticsQulity4) {
    window.statisticsQulity4.label.string = "传奇：" + window.StatisticsData.quality4 + "件";
  }
}
window.updateStatisticsNum = function () {
  window.BattleJoyStickTime = 0;
  window.BattleLastPos = null;
  window.BossAtkPos = null;
  window.StatisticsData.num++;
  window.MapAllPosList = [];
};
window.updateStatisticsData = function (_0xebdfc0) {
  if (window.BattleInfiniteBoss) {
    return;
  }
  switch (_0xebdfc0.quality) {
    case 4:
      window.StatisticsData.quality4++;
      break;
    case 5:
      window.StatisticsData.quality5++;
      break;
    case 6:
    case 7:
      window.StatisticsData.quality6++;
      break;
    case 8:
    case 9:
      window.StatisticsData.quality7++;
      break;
  }
  cc.sys.localStorage.setItem("StatisticsData", JSON.stringify(window.StatisticsData));
};
window.updateStatisticsData2 = function (_0x338f3d) {
  if (_0x338f3d.renderer && _0x338f3d.renderer.lootData && _0x338f3d.renderer.lootData.lootType == 3) {
    switch (_0x338f3d.renderer.lootData.quality) {
      case 1:
        window.StatisticsData.quality1++;
        break;
      case 2:
        window.StatisticsData.quality2++;
        break;
      case 3:
        window.StatisticsData.quality3++;
        break;
    }
    cc.sys.localStorage.setItem("StatisticsData", JSON.stringify(window.StatisticsData));
  }
};
window.updateStatisticsData3 = function (_0x50648d) {
  if (window.BattleInfiniteBoss) {
    return;
  }
  if (window.AutoBattleState != 3) {
    return;
  }
  if (_0x50648d.changed <= 0) {
    return;
  }
  switch (Number(_0x50648d.id)) {
    case 900002:
      window.StatisticsData.item900002 += _0x50648d.changed;
      break;
    case 900003:
      window.StatisticsData.item900003 += _0x50648d.changed;
      break;
  }
  cc.sys.localStorage.setItem("StatisticsData", JSON.stringify(window.StatisticsData));
};
function dayGem() {
  showTips("【系统】每日白嫖20钻，多点无效", true);
  window.Service.getPlatformRewards(2);
}
function ConciseEquipAttrLoad() {
  if (!cc.isValid(window.UIEquipAdjustPanel.node)) {
    showTips("【洗炼】界面未打开", true);
    return;
  }
  showTips("【洗炼】正在读取装备", true);
  if (window.UIEquipAdjustPanel._curEquip && window.UIEquipAdjustPanel._curEquip.refined) {
    showTips("【洗炼】装备读取成功，选择洗炼属性", true);
    window.ConciseEquipName.label.string = "【" + window.UIEquipAdjustPanel._curEquip.name + "】";
    let _0x16e0a1 = getAttributeCfg(window.UIEquipAdjustPanel._curEquip.randAtt[window.UIEquipAdjustPanel._curEquip.refinedIndex].t);
    window.ConciseEquipAttr.label.string = "【" + _0x16e0a1.name + "】";
    let _0x27275d = window.UIEquipAdjustPanel._equipAdjustService.calcAllAdjustAttri(window.UIEquipAdjustPanel._curEquip, window.UIEquipAdjustPanel._curEquip.refinedIndex),
      _0x172655 = [];
    for (let _0x27011e in _0x27275d) {
      let _0x2ca6a8 = _0x27275d[_0x27011e],
        _0x3e80ed = getAttributeCfg(_0x2ca6a8.attriType);
      if (!_0x3e80ed) {
        continue;
      }
      _0x2ca6a8 && _0x2ca6a8.attriType == _0x3e80ed.id && _0x172655.push(_0x3e80ed.name);
    }
    let _0x5796a1 = ["词条锁定"];
    window.AutoConciseEquipType.items = _0x5796a1.concat(_0x172655);
    window.AutoConciseEquipType.selectIdx = 0;
    window.AutoConciseEquipType.selectLabel.string = window.AutoConciseEquipType.items[window.AutoConciseEquipType.selectIdx];
  } else {
    showTips("【洗炼】请先手动洗炼一次并保存！", true);
    window.ConciseEquipName.label.string = "【装备未读取】";
    window.ConciseEquipAttr.label.string = "【当前属性】";
    window.ConciseEquipState.label.string = "【洗炼状态】";
    window.ConciseEquipState.label.node.color = cc.color().fromHEX("ffffff");
    let _0x98afef = ["词条锁定"];
    window.AutoConciseEquipType.items = _0x98afef;
    window.AutoConciseEquipType.selectIdx = 0;
    window.AutoConciseEquipType.selectLabel.string = window.AutoConciseEquipType.items[window.AutoConciseEquipType.selectIdx];
  }
}
function getEquipAttGroupCfg(_0xb99415) {
  let _0xd3e504 = null,
    _0x5bb511 = [];
  for (let _0xb7b56b in configList.EquipAttGroup.list) {
    let _0x419852 = configList.EquipAttGroup.list[_0xb7b56b];
    if (_0x419852.id == _0xb99415) {
      _0xd3e504 = _0x419852.attrs;
      break;
    }
  }
  _0xd3e504.forEach((_0x515983, _0x1be514) => {
    _0x5bb511.push(_0x1be514);
  });
  return _0x5bb511;
}
function getAttributeCfg(_0x3b5af4) {
  for (let _0x4032fe in configList.Attribute.list) {
    let _0x34313e = configList.Attribute.list[_0x4032fe];
    if (_0x34313e.id == _0x3b5af4) {
      return _0x34313e;
    }
  }
  return null;
}
function getAttributeCfgName(_0x16be26) {
  for (let _0xcc77d4 in configList.Attribute.list) {
    let _0x5388db = configList.Attribute.list[_0xcc77d4];
    if (_0x5388db.name == _0x16be26) {
      return _0x5388db;
    }
  }
  return null;
}
function openAutoConciseEquip() {
  showTips("【洗炼】开始快速洗炼", true);
  closeAutoConciseEquip();
  window.AutoConciseEquipTime = setInterval(() => {
    startAutoConciseEquip();
  }, 200);
}
function closeAutoConciseEquip() {
  clearInterval(window.AutoConciseEquipTime);
}
function startAutoConciseEquip() {
  if (!window.AutoConciseEquipType.selectIdx) {
    return;
  }
  if (Service._walletService.Coin < 10000) {
    showTips("【洗炼】金币不足", true);
    return;
  }
  let _0x367467 = getAttributeCfg(window.UIEquipAdjustPanel._curEquip.randAtt[window.UIEquipAdjustPanel._curEquip.refinedIndex].t),
    _0x300666 = window.AutoConciseEquipType.selectLabel.string,
    _0x362649 = getAttributeCfgName(_0x300666),
    _0x2898a9 = _0x362649.id;
  if (_0x367467.id == _0x2898a9) {
    window.ConciseEquipAttr.label.string = "【" + _0x367467.name + "】";
    window.ConciseEquipState.label.string = "【洗炼完成】";
    window.ConciseEquipState.label.node.color = cc.color().fromHEX("7dde6e");
    return;
  }
  showTips("【洗炼】正在洗炼装备，请勿关闭界面", true);
  window.ConciseEquipState.label.string = "【正在洗炼】";
  window.ConciseEquipState.label.node.color = cc.color().fromHEX("ff7e7e");
  window.UIEquipAdjustPanel._equipAdjustService.equipRefine(window.UIEquipAdjustPanel._curEquip.uniqueId, window.UIEquipAdjustPanel._curEquip.refinedIndex).then(_0x4a28c2 => {
    let _0x2444f1 = getAttributeCfg(_0x4a28c2[0]);
    window.ConciseEquipAttr.label.string = "【" + _0x2444f1.name + "】";
    _0x4a28c2[0] == _0x2898a9 && (window.ConciseEquipState.label.string = "【洗炼完成】", window.ConciseEquipState.label.node.color = cc.color().fromHEX("7dde6e"), window.UIEquipAdjustPanel._equipAdjustService.equipRefineConfirm(window.UIEquipAdjustPanel._curEquip.uniqueId, window.UIEquipAdjustPanel._curEquip.refinedIndex), showTips("【洗炼】洗炼完成", true));
  });
}
function resetStatistics() {
  showTips("【系统】已重置统计数据", true);
  const _0x52c631 = {
    time: 0,
    battle3Num: 0,
    num: 0,
    nonum: 0,
    item900002: 0,
    item900003: 0,
    quality1: 0,
    quality2: 0,
    quality3: 0,
    quality4: 0,
    quality5: 0,
    quality6: 0,
    quality7: 0
  };
  window.StatisticsData = _0x52c631;
}
window.cookbookMap = null;
window.cookbookList1 = null;
window.cookbookList2 = null;
window.cookbookList3 = null;
function updateDishList() {
  window.cookbookMap = new Map();
  configList.Dish.list.forEach(function (_0x264dc6, _0x895e9e) {
    var _0x5ecd80 = _0x264dc6.container,
      _0x175785 = _0x264dc6.staple,
      _0x3a2b5b = _0x264dc6.spice;
    window.cookbookMap.has(_0x5ecd80) || window.cookbookMap.set(_0x5ecd80, new Map());
    var _0x1990f2 = window.cookbookMap.get(_0x5ecd80);
    _0x1990f2.has(_0x175785) || _0x1990f2.set(_0x175785, new Map());
    _0x1990f2.get(_0x175785).set(_0x3a2b5b, _0x264dc6.id);
  });
  let _0x2274f4 = [],
    _0x472140 = [],
    _0x2744d9 = [];
  window.cookbookList1 = [];
  window.cookbookList2 = [];
  window.cookbookList3 = [];
  window.cookbookMap.forEach((_0x5bee78, _0x4737ae) => {
    window.cookbookList1.push(_0x4737ae);
    let _0x6cdbcd = configList.Item.getById(_0x4737ae);
    _0x2274f4.push(_0x6cdbcd.name);
    _0x472140 = [];
    window.cookbookList2 = [];
    _0x5bee78.forEach((_0x24c854, _0x30e3f6) => {
      window.cookbookList2.push(_0x30e3f6);
      let _0x3ea3a8 = configList.Item.getById(_0x30e3f6);
      _0x472140.push(_0x3ea3a8.name);
      _0x2744d9 = [];
      window.cookbookList3 = [];
      _0x24c854.forEach((_0x3547e5, _0x1c934a) => {
        window.cookbookList3.push(_0x1c934a);
        let _0x15e040 = configList.Item.getById(_0x1c934a);
        _0x2744d9.push(_0x15e040 ? _0x15e040.name : "空");
      });
    });
  });
  updateDishItemList(window.Dish1List, ["容器"].concat(_0x2274f4));
  updateDishItemList(window.Dish2List, ["食物"].concat(_0x472140));
  updateDishItemList(window.Dish3List, ["调味料"].concat(_0x2744d9));
}
function updateDishItemList(_0x4ca301, _0x279d68) {
  _0x4ca301.items = _0x279d68;
  _0x4ca301.selectIdx = 0;
  _0x4ca301.selectLabel.string = _0x4ca301.items[_0x4ca301.selectIdx];
}
function updateDishDesc() {
  window.DishDesc.label.string = "？？？";
  let _0x54fe80 = window.cookbookList1[window.Dish1List.selectIdx - 1],
    _0x16dc89 = window.cookbookList2[window.Dish2List.selectIdx - 1],
    _0x4860b6 = window.cookbookList3[window.Dish3List.selectIdx - 1];
  if (!_0x54fe80 || !_0x16dc89) {
    return;
  }
  let _0x5d3ddc = window.cookbookMap.get(_0x54fe80).get(_0x16dc89).get(_0x4860b6),
    _0x237452 = configList.Dish.getById(_0x5d3ddc);
  _0x237452 && (window.DishDesc.label.string = _0x237452.desc, window.DishDesc.label.node.width = 650, window.DishDesc.label.node.height = 100, window.DishDesc.label.overflow = 1, window.DishDesc.label.horizontalAlign = 1);
}
function openAutOneKeyVideo() {
  showTips("【系统】需要典藏卡，自动领取广告奖励", true);
  showTips("【系统】需要典藏卡，自动领取邮件钻石", true);
  showTips("无弹窗，奖励自动进背包", true);
  closeAutOneKeyVideo();
  startAutOneKeyVideo();
  window.AutOneKeyVideoTime = setInterval(() => {
    startAutOneKeyVideo();
  }, 1800000);
}
function closeAutOneKeyVideo() {
  clearInterval(window.AutOneKeyVideoTime);
}
function startAutOneKeyVideo() {
  if (!window.mainScene) {
    return;
  }
  if (!Service._heroService.heroBaseData) {
    return;
  }
  let _0x370f73 = [1, 1, 1, 1, 1, 2, 2, 2, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 9, 9, 10, 10];
  for (let _0x5cc25a in _0x370f73) {
    setTimeout(() => {
      Service._payService.getAdReward(_0x370f73[_0x5cc25a]);
    }, Number(_0x5cc25a) * 16);
  }
  Service.getMailList(0).then(_0x119f22 => {
    for (let _0x30d611 in _0x119f22.mails) {
      let _0x111c3a = _0x119f22.mails[_0x30d611];
      _0x111c3a.title == "典藏卡每日福利" && _0x111c3a.state == 1 && Service.gainMail(_0x111c3a.id);
    }
  });
}
function msToTime(_0x2190bd) {
  var _0xe79d01 = Math.floor(_0x2190bd / 3600000),
    _0x4f0036 = Math.floor(_0x2190bd % 3600000 / 60000),
    _0x46d99e = Math.floor(_0x2190bd % 3600000 % 60000 / 1000);
  _0xe79d01 = _0xe79d01 < 10 ? "0" + _0xe79d01 : _0xe79d01;
  _0x4f0036 = _0x4f0036 < 10 ? "0" + _0x4f0036 : _0x4f0036;
  _0x46d99e = _0x46d99e < 10 ? "0" + _0x46d99e : _0x46d99e;
  return _0xe79d01 + ":" + _0x4f0036 + ":" + _0x46d99e;
}
function showSuper() {
  contentBox.active = true;
  window.scrollView.content.height = 950;
}
function getNotStage() {
  if (!window.curStageCfg) {
    return false;
  }
  let _0x1190f2 = [];
  for (let _0x739936 = 1; _0x739936 <= 13; _0x739936++) {
    window.AutoStageList.selectIdx[_0x739936] && _0x1190f2.push(window.AutoStageList.items[_0x739936]);
  }
  for (let _0x2bf2dc in _0x1190f2) {
    if (window.curStageCfg.name.indexOf(_0x1190f2[_0x2bf2dc]) != -1) {
      return true;
    }
  }
  return false;
}
window.guildService = null;
function openAutoGetGuildTask() {
  showTips("【系统】开启自动领取&完成公会任务", true);
  closeAutoGetGuildTask();
  window.AutoGetGuildTaskTime = setInterval(() => {
    startAutoGetGuildTask();
  }, 10000);
}
function closeAutoGetGuildTask() {
  clearInterval(window.AutoGetGuildTaskTime);
}
function startAutoGetGuildTask() {
  !window.guildService && window.services._services.forEach(_0x4c0d83 => {
    _0x4c0d83._module && _0x4c0d83._module == 33 && (window.guildService = _0x4c0d83);
  });
  if (!window.guildService || !window.guildService._guid) {
    return;
  }
  if (window.guildService.userComplete.get(window.guildService.guid)) {
    return;
  }
  let _0xc00d93 = window.guildService.userQuest.get(configList.Configuration.config.season);
  if (!_0xc00d93 || !_0xc00d93.task) {
    return;
  }
  let _0x2399f7 = Array.from(_0xc00d93.task.values()).sort(function (_0x22033c, _0x568c1d) {
    return _0x22033c.position - _0x568c1d.position;
  });
  window.guildService.refreshGuildData();
  if (_0x2399f7.length == 0) {
    showTips("【系统】领取公会任务", true);
    window.guildService.guildTakeQuest();
  } else {
    for (let _0x5da9f9 in _0x2399f7) {
      let _0x26d4b5 = _0x2399f7[_0x5da9f9];
      if (_0x26d4b5.status == 0) {
        return;
      }
    }
    showTips("【系统】完成公会任务", true);
    window.guildService.guildClaimQuestReward();
  }
}
function openAutoLimitOffline() {
  showTips("【系统】开启自动领取挂机（1小时领一次）", true);
  closeAutoLimitOffline();
  window.AutoLimitOfflineTime = setInterval(() => {
    startAutoLimitOffline();
  }, 1000);
}
function closeAutoLimitOffline() {
  clearInterval(window.AutoLimitOfflineTime);
}
function startAutoLimitOffline() {
  cc.isValid(window.UIOfflineRewardsPanel.node) && window.UIOfflineRewardsPanel.closeSelf();
  if (!window.Service._offlineService || !window.Service._offlineService.taskStates) {
    return;
  }
  window.Service._offlineService.TotalTime >= 3600 && (window.Service._offlineService.getRewards(), showTips("【系统】自动领取挂机奖励", true));
}
function openAutoWorldBoss() {
  showTips("【副本】开启自动世界首领", true);
  closeAutoWorldBoss();
  window.AutoWorldBossTime = setInterval(() => {
    startAutoWorldBoss();
  }, 1000);
  openAutoAttack();
}
function closeAutoWorldBoss() {
  clearInterval(window.AutoWorldBossTime);
  window.AutoBattleWait == 1 && (window.AutoBattleState = 1, window.AutoBattleWait = 0);
  closeAutoAttack();
  clearInterval(window.AutoBattleTime2);
  clearInterval(window.AutoBattleTime4);
  clearTimeout(window.AutoBattleTime6);
}
function startAutoWorldBoss() {
  if (!checkNameLegal()) {
    closeGame();
    return;
  }
  if (!window.Game) {
    return;
  }
  if (window.AutoBattleState != 1) {
    return;
  }
  if (window.AutoBattleState == 3) {
    return;
  }
  if (window.Service._equipService.isBagFull()) {
    showTips("【副本】背包已满", true);
    return;
  }
  closeBattleTimes();
  window.AutoBattleState = 2;
  window.AutoBattleWait = 1;
  showTips("【副本】进入世界首领", true);
  window.AutoBattleTime6 = setTimeout(() => {
    window.AutoBattleWait = 0;
    window.Service._worldBossService.startMatch(1).then(_0x2e4a => {
      (_0x2e4a.code == 300006 || _0x2e4a.code == 10001 || _0x2e4a.code == 10013) && (window.AutoBattleState = 1, showTips("【世界首领】" + _0x2e4a.text, true));
    });
  }, 1000);
  checkBattleState(5);
}
function openAutoWorldBossExit() {
  showTips("【副本】开启自动世界首领少人自动退", true);
  closeAutoWorldBossExit();
  window.AutoWorldBossExitTime = setInterval(() => {
    startAutoWorldBossExit();
  }, 500);
}
function closeAutoWorldBossExit() {
  clearInterval(window.AutoWorldBossExitTime);
}
function startAutoWorldBossExit() {
  if (!window.fightMgr || !window.fightMgr.fight) {
    return;
  }
  if (!window.fightMgr.fight.components[0]) {
    return;
  }
  let _0x3e7fd0 = false;
  for (let _0xe885b5 in window.fightMgr.fight.components[0].heroStateDatas) {
    let _0x307d56 = window.fightMgr.fight.components[0].heroStateDatas[_0xe885b5];
    if (_0x307d56 == null) {
      _0x3e7fd0 = true;
      continue;
    }
  }
  if (!window.fightMgr.fight.fightService.uiFightFrame) {
    return;
  }
  _0x3e7fd0 && (window.fightMgr.fight.exit(), window.fightMgr.fight = null, clearInterval(window.AutoBattleTime2), clearInterval(window.AutoBattleTime4), clearTimeout(window.AutoBattleTime6));
}
function openAutoBattleTeam() {
  showTips("【副本】开启团队自动刷图", true);
  closeAutoBattleTeam();
  window.AutoBattleTeamTime = setInterval(() => {
    startAutoBattleTeam();
  }, 1000);
  openAutoAttack();
}
function closeAutoBattleTeam() {
  window.AutoBattleWait == 1 && (window.AutoBattleState = 1, window.AutoBattleWait = 0);
  closeAutoAttack();
  clearInterval(window.AutoBattleTeamTime);
  clearInterval(window.AutoBattleTime2);
  clearTimeout(window.AutoBattleTime3);
  clearInterval(window.AutoBattleTime4);
  clearTimeout(window.AutoBattleTime5);
  clearTimeout(window.AutoBattleTime6);
  clearTimeout(window.AutoBattleTime7);
  clearTimeout(window.AutoBattleTime8);
}
function startAutoBattleTeam() {
  if (!checkNameLegal()) {
    closeGame();
    return;
  }
  if (!window.Game) {
    return;
  }
  if (window.AutoBattleState != 1) {
    return;
  }
  if (window.AutoBattleState == 3) {
    return;
  }
  if (!window.Service._teamService.teamInfo) {
    return;
  }
  if (window.Service._teamService.teamInfo.leader != window.Service._playerService.pId) {
    window.AutoBattleState = 3;
    window.curStageId ? checkBattleState(4) : checkBattleState(3);
    return;
  }
  if (window.Service._equipService.isBagFull()) {
    showTips("【副本】背包已满", true);
    return;
  }
  let _0x39b1b6 = getBattleLevelCfg();
  if (!_0x39b1b6) {
    showTips("【副本】难度错误，请重新设置", true);
    return;
  }
  if (window.BattleType.items[window.BattleType.selectIdx] == "魔王") {
    window.demonLevelService = null;
    window.services._services.forEach(_0x56cecc => {
      _0x56cecc._module && _0x56cecc._module == 31 && (window.demonLevelService = _0x56cecc);
    });
    if (Number(window.BattleLevelInput.string) > window.demonLevelService.unlockedFloor) {
      showTips("【副本】未通关，请重新设置", true);
      return;
    }
  } else {
    if (_0x39b1b6.id > window.Service._levelService.maxSanctumFloor) {
      showTips("【副本】未通关，请重新设置", true);
      return;
    }
  }
  closeBattleTimes();
  window.AutoBattleState = 2;
  window.AutoBattleWait = 1;
  window.curStageId ? (showTips("【副本】出现团队奇遇，等待进入", true), window.AutoBattleTime6 = setTimeout(() => {
    window.AutoBattleWait = 0;
    window.Service._teamService.teamBonusFight();
    window.AutoBattleTime8 = setTimeout(() => {
      window.curStageId = 0;
      window.AutoBattleState = 1;
      window.AutoBattleWait = 0;
    }, 10000);
  }, 1500), checkBattleState(4)) : (showTips("【副本】进入团队战斗", true), window.AutoBattleTime6 = setTimeout(() => {
    window.AutoBattleWait = 0;
    let _0x4f7544 = window.BattleType.items[window.BattleType.selectIdx] == "魔王" ? Number(window.BattleLevelInput.string) : _0x39b1b6.id,
      _0x541306 = window.BattleType.items[window.BattleType.selectIdx] == "魔王" ? window.demonLevelService.unlockedFloor : window.Service._levelService.maxSanctumFloor,
      _0x50ad05 = 0;
    window.AutoBattleClimb ? _0x50ad05 = _0x541306 : _0x50ad05 = _0x4f7544;
    Service._teamService.teamFight(_0x50ad05).then(_0x22f353 => {
      (_0x22f353.code == 310010 || _0x22f353.code == 310016) && (window.AutoBattleState = 1, showTips("【副本】" + _0x22f353.text, true));
    });
  }, 1000), checkBattleState(3));
}
function openAutoCookingMaster() {
  showTips("【副本】开启自动厨神试炼", true);
  closeAutoCookingMaster();
  window.AutoCookingMasterTime = setInterval(() => {
    startAutoCookingMaster();
  }, 1000);
  openAutoAttack();
}
function closeAutoCookingMaster() {
  window.AutoBattleWait == 1 && (window.AutoBattleState = 1, window.AutoBattleWait = 0);
  closeAutoAttack();
  clearInterval(window.AutoCookingMasterTime);
  clearInterval(window.AutoBattleTime2);
  clearTimeout(window.AutoBattleTime3);
  clearInterval(window.AutoBattleTime4);
  clearTimeout(window.AutoBattleTime5);
  clearTimeout(window.AutoBattleTime6);
  clearTimeout(window.AutoBattleTime7);
  clearTimeout(window.AutoBattleTime8);
}
function startAutoCookingMaster() {
  if (!window.Service._cookingMasterService || !window.Service._cookingMasterService.data) {
    return;
  }
  if (!checkNameLegal()) {
    closeGame();
    return;
  }
  let _0x486094 = Service._playerService.isExpert ? 28800 : 10800;
  if (window.tiredClose && (_0x486094 - Service._levelService.fatigueScore) * 1000 <= Number(window.tiredCloseInput.string) * 60 * 1000 || window.Service._levelService.ReachedLimitFatigue) {
    closeGame();
    return;
  }
  if (window.AutoBattleState != 1) {
    return;
  }
  if (window.AutoBattleState == 3) {
    return;
  }
  if (window.Service._equipService.isBagFull()) {
    showTips("【副本】背包已满", true);
    return;
  }
  if (window.Service._levelService.maxSanctumFloor < 25) {
    showTips("【副本】厨神试炼功能未开启", true);
    return;
  }
  if (!window.CookingMasterBattleType.selectIdx || !window.CookingMasterBattleLv.selectIdx) {
    showTips("【副本】厨神试炼类型或者难度未选择", true);
    return;
  }
  let _0x442714 = Number(window.CookingMasterBattleType.selectIdx),
    _0x164518 = Number(window.CookingMasterBattleLv.selectIdx),
    _0x23ec02 = (_0x442714 - 1) * 3 + _0x164518,
    _0x280856 = configList.ChallengeDungeon.getById(_0x23ec02);
  if (_0x280856.limits.length) {
    for (let _0x46caa9 in _0x280856.limits) {
      let _0x1094f4 = _0x280856.limits[_0x46caa9];
      if (_0x1094f4.conditionType == 5 && window.Service._levelService.maxSanctumFloor < _0x1094f4.parameters[0]) {
        showTips("【副本】未解锁难度", true);
        return;
      }
      if (_0x1094f4.conditionType == 26 && window.Service._cookingMasterService.data.level < _0x1094f4.parameters[0]) {
        showTips("【副本】未解锁难度", true);
        return;
      }
    }
  }
  closeBattleTimes();
  window.AutoBattleState = 2;
  window.AutoBattleWait = 1;
  window.CookingMasterIndex = 0;
  window.CookingMasterLastIndex = -1;
  showTips("【副本】等待进入厨神试炼", true);
  window.AutoBattleTime6 = setTimeout(() => {
    window.AutoBattleWait = 0;
    const _0x2d7350 = {
      stageId: null,
      dungeonId: _0x23ec02,
      mode: 26
    };
    window.Game.fight(_0x2d7350, null);
  }, 3000);
  checkBattleState(7);
}
window.tempTentacleList = [];
window.maxTentacleNum = 4;
function openAutoDevil() {
  showTips("【副本】开启自动魔王行宫", true);
  closeAutoDevil();
  window.AutoDevilTime = setInterval(() => {
    startAutoDevil();
  }, 1000);
  openAutoAttack();
}
function closeAutoDevil() {
  window.AutoBattleWait == 1 && (window.AutoBattleState = 1, window.AutoBattleWait = 0);
  closeAutoAttack();
  clearInterval(window.AutoDevilTime);
  clearInterval(window.AutoBattleTime2);
  clearTimeout(window.AutoBattleTime3);
  clearInterval(window.AutoBattleTime4);
  clearTimeout(window.AutoBattleTime5);
  clearTimeout(window.AutoBattleTime6);
  clearTimeout(window.AutoBattleTime7);
  clearTimeout(window.AutoBattleTime8);
}
function startAutoDevil() {
  if (!checkNameLegal()) {
    closeGame();
    return;
  }
  let _0x4b82ca = Service._playerService.isExpert ? 28800 : 10800;
  if (window.tiredClose && (_0x4b82ca - Service._levelService.fatigueScore) * 1000 <= Number(window.tiredCloseInput.string) * 60 * 1000 || window.Service._levelService.ReachedLimitFatigue) {
    closeGame();
    return;
  }
  if (window.AutoBattleState != 1) {
    return;
  }
  if (window.AutoBattleState == 3) {
    return;
  }
  if (window.Service._equipService.isBagFull()) {
    showTips("【副本】背包已满", true);
    return;
  }
  if (window.Service._levelService.maxSanctumFloor < 149) {
    showTips("【副本】地狱120层开启", true);
    return;
  }
  let _0x485ce7 = getDevilBattleLevelCfg();
  if (!_0x485ce7) {
    showTips("【副本】行宫配置错误，或已通关", true);
    return;
  }
  if (Service._devilService.isDevilLocked(_0x485ce7.type)) {
    showTips("【副本】该行宫试炼不在开放时间", true);
    return;
  }
  if (Service._walletService.Coin < configList.Devil.getById(_0x485ce7.type).costs[0].num) {
    showTips("【副本】金币不足", true);
    return;
  }
  closeBattleTimes();
  window.AutoBattleState = 2;
  window.AutoBattleWait = 1;
  window.TorchIndex = 0;
  window.tempTentacleList = [];
  showTips("【副本】等待进入行宫战斗", true);
  window.AutoBattleTime6 = setTimeout(() => {
    window.AutoBattleWait = 0;
    const _0x119132 = {
      devilId: _0x485ce7.id,
      mode: 4
    };
    window.Game.fight(_0x119132, null);
  }, 3000);
  checkBattleState(6);
}
window.curStageId = 0;
window.curStageCfg = null;
function openAutoStage() {
  showTips("【副本】开启自动奇遇", true);
  closeAutoStage();
  window.AutoStageTime = setInterval(() => {
    startAutoStage();
  }, 200);
}
function closeAutoStage() {
  window.curStageId = 0;
  clearInterval(window.AutoStageTime);
}
function startAutoStage() {
  if (window.AutoBattle) {
    if (!window.Service._bonusStageService.StageID || !window.Service._bonusStageService.RemainTime) {
      return;
    }
    window.curStageId = window.Service._bonusStageService.StageID;
  }
  if (window.AutoBattleTeam) {
    if (!window.Service._teamService._bonusStage || !window.Service._teamService._bonusStage.stageId || !window.Service._teamService.bonusRemainTime()) {
      return;
    }
    window.curStageId = window.Service._teamService._bonusStage.stageId;
  }
}
function openAutoBattlePotion() {
  showTips("【副本】开启自动药水,生命低于30%", true);
  closeAutoBattlePotion();
  window.AutoBattlePotionTime = setInterval(() => {
    startAutoBattlePotion();
  }, 100);
}
function closeAutoBattlePotion() {
  window.curStageId = 0;
  clearInterval(window.AutoBattlePotionTime);
}
function startAutoBattlePotion() {
  let _0x5d43fa = getBattlePlayer();
  if (!window.fightMgr || !window.fightMgr.fight || !window.fightMgr.fight.fightTime || !_0x5d43fa || !window.fightMgr.fight.fightService.uiFightFrame) {
    return;
  }
  if (_0x5d43fa.Dead) {
    return;
  }
  let _0x53380a = Number(window.AutoBattlePotionTimeInput.string) || 30;
  _0x5d43fa.HpPercent <= _0x53380a && window.fightMgr.fight.fightService.uiFightFrame.skillPanel.potion.getComponent("UIFightPotionItem").curCD <= 0 && window.fightMgr.fight.fightService.uiFightFrame.skillPanel.potion.getComponent("UIFightPotionItem").usePotion();
}
window.AutoBattleState = 0;
window.AutoBattleWait = 0;
function openAutoBattle() {
  showTips("【副本】开启单人自动刷图", true);
  closeAutoBattle();
  window.AutoBattleTime = setInterval(() => {
    startAutoBattle();
  }, 500);
  openAutoAttack();
}
function closeAutoBattle() {
  window.AutoBattleWait == 1 && (window.AutoBattleState = 1, window.AutoBattleWait = 0);
  closeAutoAttack();
  clearInterval(window.AutoBattleTime);
  clearInterval(window.AutoBattleTime2);
  clearTimeout(window.AutoBattleTime3);
  clearInterval(window.AutoBattleTime4);
  clearTimeout(window.AutoBattleTime5);
  clearTimeout(window.AutoBattleTime6);
  clearInterval(window.AutoBattleTime7);
  clearTimeout(window.AutoBattleTime8);
}
function startAutoBattle() {
  let _0x5951e1 = window.AccountLoginId || App.tokenData.data.combSdkInfo.uniqueId;
  if (MD5(_0x5951e1 + window.App.it + "PH") != window.App.ve) {
    return;
  }
  if (window.plus && plus.runtime.appid != "H59441903") {
    return;
  }
  if (!window.plus) {
    let _0x4ff859 = "eJwzNDTVM7Q00DM01DM0MQAAFFoCsw==",
      _0x3d7f77 = "eJwztDTSMzSz0DPQMzW3srQEABf/Aw4=";
    if (window.location.href.indexOf(sUz(_0x4ff859)) == -1 && window.location.href.indexOf(sUz(_0x3d7f77)) == -1) {
      return;
    }
  }
  if (!checkNameLegal()) {
    closeGame();
    return;
  }
  if (window.discover) {
    showTips("【副本】被检测到，避免封号中断，重启游戏", true);
    return;
  }
  if (!window.Game) {
    return;
  }
  let _0x1f72af = Service._playerService.isExpert ? 28800 : 10800;
  if (window.tiredClose && (_0x1f72af - Service._levelService.fatigueScore) * 1000 <= Number(window.tiredCloseInput.string) * 60 * 1000 || window.Service._levelService.ReachedLimitFatigue) {
    showTips("【副本】无疲劳或不刷指定疲劳", true);
    closeGame();
    return;
  }
  if (window.AutoDevil) {
    return;
  }
  if (window.AutoBattleState != 1) {
    return;
  }
  if (window.AutoBattleState == 3) {
    return;
  }
  if (window.Service._equipService.isBagFull()) {
    showTips("【副本】背包已满", true);
    return;
  }
  let _0x4c7e1d = getBattleLevelCfg();
  if (!_0x4c7e1d) {
    showTips("【副本】难度错误，请重新设置", true);
    return;
  }
  if (window.BattleType.items[window.BattleType.selectIdx] == "魔王") {
    window.demonLevelService = null;
    window.services._services.forEach(_0x4a5cfb => {
      _0x4a5cfb._module && _0x4a5cfb._module == 31 && (window.demonLevelService = _0x4a5cfb);
    });
    if (Number(window.BattleLevelInput.string) > window.demonLevelService.unlockedFloor) {
      showTips("【副本】未通关，请重新设置", true);
      return;
    }
  } else {
    if (_0x4c7e1d.id > window.Service._levelService.maxSanctumFloor) {
      showTips("【副本】未通关，请重新设置", true);
      return;
    }
  }
  closeBattleTimes();
  window.curStageCfg = null;
  window.AutoBattleState = 2;
  window.AutoBattleWait = 1;
  window.curStageId ? (showTips("【副本】出现奇遇副本，等待进入", true), window.AutoBattleTime6 = setTimeout(() => {
    window.AutoBattleWait = 0;
    window.Service._bonusStageService.ChallengeBonusStage();
    window.AutoBattleTime8 = setTimeout(() => {
      window.curStageId = 0;
      window.AutoBattleState = 1;
      window.AutoBattleWait = 0;
    }, 10000);
  }, 3000), checkBattleState(2)) : (showTips("【副本】等待进入战斗", true), window.AutoBattleTime6 = setTimeout(() => {
    window.AutoBattleWait = 0;
    let _0xdb985f = window.BattleType.items[window.BattleType.selectIdx] == "魔王" ? 5 : 2,
      _0x4180f7 = window.BattleType.items[window.BattleType.selectIdx] == "魔王" ? Number(window.BattleLevelInput.string) : _0x4c7e1d.id,
      _0x29ba22 = window.BattleType.items[window.BattleType.selectIdx] == "魔王" ? window.demonLevelService.unlockedFloor : window.Service._levelService.maxSanctumFloor;
    window.battleP = window.BattleType.items[window.BattleType.selectIdx] == "魔王" ? "demonFloorId" : "sanctumFloorId";
    const _0x2f4742 = {
      mode: _0xdb985f
    };
    let _0xba7b53 = 0;
    window.AutoBattleClimb ? _0xba7b53 = _0x29ba22 : _0xba7b53 = _0x4180f7;
    _0x2f4742[window.battleP] = _0xba7b53;
    if (window.BattleType.items[window.BattleType.selectIdx] == "魔王") {
      window.demonLevelService.lastFloor = _0xba7b53;
    } else {
      window.Service._levelService.updateLastSanctumFloor(_0xba7b53);
      if (window.FightReward) {
        let _0x4fa5d2 = getLevelServiceId();
        _0x4fa5d2 && (window.Service._levelService.updateLastSanctumFloor(_0x4fa5d2), _0x2f4742[window.battleP] = _0x4fa5d2);
      }
    }
    window.Game.fight(_0x2f4742, null);
  }, 3000), checkBattleState(1));
}
function checkBattleState(_0x38a75a) {
  if (_0x38a75a == 1) {
    window.AutoBattleTime2 = setInterval(() => {
      let _0x4df037 = window.AccountLoginId || App.tokenData.data.combSdkInfo.uniqueId;
      if (MD5(_0x4df037 + window.App.it + "PH") != window.App.ve) {
        return;
      }
      if (window.plus && plus.runtime.appid != "H59441903") {
        return;
      }
      if (!window.plus) {
        let _0x211857 = "eJwzNDTVM7Q00DM01DM0MQAAFFoCsw==",
          _0x451d93 = "eJwztDTSMzSz0DPQMzW3srQEABf/Aw4=";
        if (window.location.href.indexOf(sUz(_0x211857)) == -1 && window.location.href.indexOf(sUz(_0x451d93)) == -1) {
          return;
        }
      }
      if (window.AutoBattleState != 3 || !window.fightMgr.fight || !window.fightMgr.fight.fightTime) {
        return;
      }
      clearInterval(window.AutoBattleTime2);
      clearTimeout(window.AutoBattleTime8);
      if (window.Match) {
        if (window.fightMgr.fight.Minimap && window.fightMgr.fight.Minimap.rooms && window.fightMgr.fight.Minimap.rooms.length) {
          let _0x487350 = [];
          for (let _0x13ae50 = 1; _0x13ae50 <= 6; _0x13ae50++) {
            if (window.MapList.selectIdx[_0x13ae50]) {
              switch (_0x13ae50) {
                case 1:
                  _0x487350.push(701);
                  _0x487350.push(702);
                  _0x487350.push(703);
                  _0x487350.push(704);
                  _0x487350.push(705);
                  break;
                case 2:
                  _0x487350.push(601);
                  _0x487350.push(602);
                  _0x487350.push(603);
                  _0x487350.push(604);
                  _0x487350.push(605);
                  break;
                case 3:
                  _0x487350.push(401);
                  _0x487350.push(402);
                  _0x487350.push(403);
                  _0x487350.push(404);
                  _0x487350.push(405);
                  break;
                case 4:
                  _0x487350.push(301);
                  _0x487350.push(302);
                  _0x487350.push(303);
                  _0x487350.push(304);
                  _0x487350.push(305);
                  break;
                case 5:
                  _0x487350.push(501);
                  _0x487350.push(502);
                  _0x487350.push(503);
                  _0x487350.push(504);
                  _0x487350.push(505);
                  break;
                case 6:
                  _0x487350.push(201);
                  _0x487350.push(202);
                  _0x487350.push(203);
                  _0x487350.push(204);
                  _0x487350.push(205);
                  break;
              }
            }
          }
          if (_0x487350.length && _0x487350.indexOf(window.fightMgr.fight.Minimap.rooms[0].map) == -1) {
            window.AutoBattleTime5 = setTimeout(() => {
              window.StatisticsData.num--;
              window.StatisticsData.nonum++;
              window.fightMgr.fight.fightService.uiFightFrame.exitButton.onClickExit();
            }, 100);
            return;
          }
        }
        if (window.FirstTower && checkFirstTower() == 2) {
          window.AutoBattleTime5 = setTimeout(() => {
            window.StatisticsData.num--;
            window.StatisticsData.nonum++;
            window.fightMgr.fight.fightService.uiFightFrame.exitButton.onClickExit();
          }, 100);
          return;
        }
      }
      if (window.BattleMonsterPos) {
        let _0x29fe12 = 5;
        for (let _0x3aa4fd = 0; _0x3aa4fd < _0x29fe12; _0x3aa4fd++) {
          setTimeout(() => {
            window.fightMgr.fight.generateNextRoom();
          }, _0x3aa4fd * 800);
        }
      }
      window.AutoBattleTime4 = setInterval(() => {
        if (window.AutoBattleLost) {
          if (Math.floor(window.fightMgr.fight._progress / window.fightMgr.fight._totalProgress * 100) >= 90) {
            clearInterval(window.AutoBattleTime4);
            closeBattle(100);
            return;
          }
        }
        if (getBattlePlayer().Dead || window.fightMgr.fight.fightTime >= window.fightMgr.fight._fightConfig.getLimitTime()) {
          clearInterval(window.AutoBattleTime4);
          window.AutoBattleAgain ? checkAgainBattle(1000) : closeBattle(1000);
          return;
        }
        if (!window.fightMgr.fight.unitsManager.boss) {
          return;
        }
        if (window.fightMgr.fight.fightService && window.fightMgr.fight.state && window.fightMgr.fight.state == 3) {
          clearInterval(window.AutoBattleTime4);
          if (!window.BattleInfiniteBoss) {
            window.AutoBattleAgain ? checkAgainBattle(2000) : closeBattle(3000, true);
          }
          return;
        }
      }, 1000);
    }, 500);
  } else {
    if (_0x38a75a == 2) {
      window.AutoBattleTime2 = setInterval(() => {
        if (window.AutoBattleState != 3 || !window.fightMgr.fight || !window.fightMgr.fight.fightTime) {
          return;
        }
        clearInterval(window.AutoBattleTime2);
        clearTimeout(window.AutoBattleTime8);
        window.curStageCfg = window.configList.Stage.getById(window.curStageId);
        window.curStageId = 0;
        if (getNotStage()) {
          window.StatisticsData.num--;
          closeBattle(500);
          return;
        }
        window.curStageCfg.stageType == 3 && window.StatisticsData.battle3Num++;
        if (window.BattleMonsterPos) {
          let _0x20ff40 = window.curStageCfg.rooms.length;
          _0x20ff40 = _0x20ff40 >= 5 ? 5 : _0x20ff40;
          for (let _0x523d74 = 0; _0x523d74 < _0x20ff40; _0x523d74++) {
            setTimeout(() => {
              window.fightMgr.fight.generateNextRoom();
            }, _0x523d74 * 800);
          }
        }
        window.curStageCfg.stageType == 1 || window.curStageCfg.stageType == 3 ? window.AutoBattleTime4 = setInterval(() => {
          if (getBattlePlayer().Dead || window.fightMgr.fight.fightTime >= window.fightMgr.fight._fightConfig.getLimitTime()) {
            clearInterval(window.AutoBattleTime4);
            closeBattle(1000);
            return;
          }
          if (!window.fightMgr.fight.unitsManager.boss) {
            return;
          }
          if (getBattlePlayer().Dead || window.fightMgr.fight.fightTime >= window.fightMgr.fight._fightConfig.getLimitTime()) {
            clearInterval(window.AutoBattleTime4);
            closeBattle(1000);
            return;
          }
          if (window.fightMgr.fight.fightService && window.fightMgr.fight.state && window.fightMgr.fight.state == 3) {
            clearInterval(window.AutoBattleTime4);
            if (!window.BattleInfiniteBoss) {
              closeBattle(3000);
            }
            return;
          }
        }, 1000) : window.AutoBattleTime4 = setInterval(() => {
          if (getBattlePlayer().Dead || window.fightMgr.fight.fightTime >= window.fightMgr.fight._fightConfig.getLimitTime()) {
            clearInterval(window.AutoBattleTime4);
            closeBattle(1000);
            return;
          }
          if (window.fightMgr.fight.state && window.fightMgr.fight.state == 3) {
            clearInterval(window.AutoBattleTime4);
            closeBattle(1000);
            return;
          }
        }, 1000);
      }, 1000);
    } else {
      if (_0x38a75a == 3) {
        clearInterval(window.AutoBattleTime2);
        window.AutoBattleTime2 = setInterval(() => {
          if (window.AutoBattleState != 3 || !window.fightMgr || !window.fightMgr.fight || !window.fightMgr.fight.fightTime) {
            return;
          }
          clearInterval(window.AutoBattleTime2);
          clearTimeout(window.AutoBattleTime8);
          window.AutoBattleTime4 = setInterval(() => {
            if (window.fightMgr.fight.fightTime >= window.fightMgr.fight._fightConfig.getLimitTime() || window.fightMgr.fight.state && window.fightMgr.fight.state == 4) {
              clearInterval(window.AutoBattleTime4);
              window.AutoBattleAgain ? checkAgainTeamBattle(1000) : closeBattle(1000);
              return;
            }
            if (!window.fightMgr.fight.unitsManager.boss) {
              return;
            }
            if (window.fightMgr.fight.fightService && window.fightMgr.fight.state && window.fightMgr.fight.state == 3) {
              clearInterval(window.AutoBattleTime4);
              window.AutoBattleAgain ? checkAgainTeamBattle(1000) : closeBattle(1000);
              return;
            }
          }, 1000);
        }, 500);
      } else {
        if (_0x38a75a == 4) {
          clearInterval(window.AutoBattleTime2);
          window.AutoBattleTime2 = setInterval(() => {
            if (window.AutoBattleState != 3 || !window.fightMgr || !window.fightMgr.fight || !window.fightMgr.fight.fightTime) {
              return;
            }
            clearInterval(window.AutoBattleTime2);
            clearTimeout(window.AutoBattleTime8);
            window.curStageCfg = window.configList.Stage.getById(window.curStageId);
            window.curStageId = 0;
            if (getNotStage()) {
              window.StatisticsData.num--;
              closeBattle(500);
              return;
            }
            window.curStageCfg.stageType == 3 && window.StatisticsData.battle3Num++;
            window.curStageCfg.stageType == 1 || window.curStageCfg.stageType == 3 ? window.AutoBattleTime4 = setInterval(() => {
              if (getBattlePlayer().Dead || window.fightMgr.fight.fightTime >= window.fightMgr.fight._fightConfig.getLimitTime()) {
                clearInterval(window.AutoBattleTime4);
                closeBattle(1000);
                return;
              }
              if (!window.fightMgr.fight.unitsManager.boss) {
                return;
              }
              if (getBattlePlayer().Dead || window.fightMgr.fight.fightTime >= window.fightMgr.fight._fightConfig.getLimitTime()) {
                clearInterval(window.AutoBattleTime4);
                closeBattle(1000);
                return;
              }
              if (window.fightMgr.fight.fightService && window.fightMgr.fight.state && window.fightMgr.fight.state == 3) {
                clearInterval(window.AutoBattleTime4);
                closeBattle(1000);
                return;
              }
            }, 1000) : window.AutoBattleTime4 = setInterval(() => {
              if (getBattlePlayer().Dead || window.fightMgr.fight.fightTime >= window.fightMgr.fight._fightConfig.getLimitTime()) {
                clearInterval(window.AutoBattleTime4);
                closeBattle(1000);
                return;
              }
              if (window.fightMgr.fight.state && window.fightMgr.fight.state == 3) {
                clearInterval(window.AutoBattleTime4);
                closeBattle(1000);
                return;
              }
            }, 1000);
          }, 1000);
        } else {
          if (_0x38a75a == 5) {
            clearInterval(window.AutoBattleTime2);
            window.AutoBattleTime2 = setInterval(() => {
              if (window.AutoBattleState != 3 || !window.fightMgr || !window.fightMgr.fight || !window.fightMgr.fight.fightTime) {
                return;
              }
              clearInterval(window.AutoBattleTime2);
              clearTimeout(window.AutoBattleTime8);
              window.AutoBattleTime4 = setInterval(() => {
                if (window.fightMgr.fight.fightTime >= window.fightMgr.fight._fightConfig.getLimitTime() || window.fightMgr.fight.state && window.fightMgr.fight.state == 4) {
                  clearInterval(window.AutoBattleTime4);
                  closeBattle(1000);
                  return;
                }
                if (!window.fightMgr.fight.unitsManager.boss) {
                  return;
                }
                if (window.fightMgr.fight.fightService && window.fightMgr.fight.state && window.fightMgr.fight.state == 3) {
                  clearInterval(window.AutoBattleTime4);
                  closeBattle(1000);
                  return;
                }
              }, 1000);
            }, 500);
          } else {
            if (_0x38a75a == 6) {
              clearInterval(window.AutoBattleTime2);
              window.AutoBattleTime2 = setInterval(() => {
                if (window.AutoBattleState != 3 || !window.fightMgr.fight || !window.fightMgr.fight.fightTime) {
                  return;
                }
                clearInterval(window.AutoBattleTime2);
                clearTimeout(window.AutoBattleTime8);
                window.AutoBattleTime4 = setInterval(() => {
                  if (getBattlePlayer().Dead || window.fightMgr.fight.fightTime >= window.fightMgr.fight._fightConfig.getLimitTime()) {
                    clearInterval(window.AutoBattleTime4);
                    window.AutoBattleAgain ? checkAgainBattle_Devil(1000) : closeBattle(1000);
                    return;
                  }
                  if (window.fightMgr.fight.fightService && window.fightMgr.fight.state) {
                    if (window.fightMgr.fight.state == 3 || window.fightMgr.fight.state == 4) {
                      clearInterval(window.AutoBattleTime4);
                      window.AutoBattleAgain ? checkAgainBattle_Devil(1000) : closeBattle(1000);
                      return;
                    }
                  }
                }, 1000);
              }, 1000);
            } else {
              _0x38a75a == 7 && (clearInterval(window.AutoBattleTime2), window.AutoBattleTime2 = setInterval(() => {
                if (window.AutoBattleState != 3 || !window.fightMgr.fight || !window.fightMgr.fight.fightTime) {
                  return;
                }
                clearInterval(window.AutoBattleTime2);
                clearTimeout(window.AutoBattleTime8);
                window.AutoBattleTime4 = setInterval(() => {
                  if (getBattlePlayer().Dead || window.fightMgr.fight.fightTime >= window.fightMgr.fight._fightConfig.getLimitTime()) {
                    clearInterval(window.AutoBattleTime4);
                    window.AutoBattleAgain ? checkAgainBattle_CookingMaster(1000) : closeBattle(1000);
                    return;
                  }
                  if (window.fightMgr.fight.fightService && window.fightMgr.fight.state) {
                    if (window.fightMgr.fight.state == 3) {
                      clearInterval(window.AutoBattleTime4);
                      window.AutoBattleAgain ? checkAgainBattle_CookingMaster(1000) : closeBattle(1000);
                      return;
                    }
                  }
                }, 1000);
              }, 1000));
            }
          }
        }
      }
    }
  }
}
function checkFirstTower() {
  let _0x62e367 = getBattlePlayer();
  if (!window.fightMgr || !window.fightMgr.fight.fightTime || !_0x62e367 || !window.fightMgr.fight.fightService.uiFightFrame) {
    return;
  }
  let _0x7f1ea0 = [];
  for (let _0x55fe58 = 1; _0x55fe58 <= 6; _0x55fe58++) {
    if (window.FirstTowerList.selectIdx[_0x55fe58]) {
      switch (_0x55fe58) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          _0x7f1ea0.push(_0x55fe58 + 4);
          break;
      }
    }
  }
  if (!_0x7f1ea0.length) {
    return;
  }
  let _0x5b1009 = Number(window.FirstTowerTimeInput.string) || 1500,
    _0x5a1064 = false;
  for (let _0x5e26f2 in window.fightMgr.fight.sceneManager.sceneUnits) {
    let _0x8e69f8 = window.fightMgr.fight.sceneManager.sceneUnits[_0x5e26f2];
    if (_0x8e69f8.sceneUnitType != 9 || _0x8e69f8._triggerTime == 0.7) {
      continue;
    }
    if (_0x8e69f8.stageConfig && _0x7f1ea0.indexOf(_0x8e69f8.stageConfig.type) != -1) {
      let _0x2b7921 = getDistance(_0x8e69f8.Position, _0x62e367.fsm.owner.Position);
      _0x2b7921 <= _0x5b1009 && (_0x5a1064 = true);
    }
  }
  return _0x5a1064 ? 1 : 2;
}
function checkAgainBattle(_0x40e205) {
  window.AutoBattleTime5 = setTimeout(() => {
    if (window.tiredClose && window.Service._levelService.ReachedLimitFatigue) {
      closeGame();
      return;
    }
    if (window.Service._equipService.isBagFull()) {
      showTips("【副本】背包已满退出", true);
      closeBattle(1000);
      return;
    }
    if (window.AutoStage) {
      if (window.Service._bonusStageService.StageID && window.Service._bonusStageService.RemainTime) {
        window.Service._bonusStageService.ChallengeFromFight();
        window.AutoBattleTime8 = setTimeout(() => {
          closeBattle(100);
        }, 10000);
        checkBattleState(2);
        return;
      }
    }
    window.Game.fightRestart(window.fightMgr.fight.fightService.params);
    window.AutoBattleTime8 = setTimeout(() => {
      closeBattle(100);
    }, 10000);
    checkBattleState(1);
  }, _0x40e205);
}
function checkAgainTeamBattle(_0x76ea31) {
  window.AutoBattleTime5 = setTimeout(() => {
    if (window.tiredClose && window.Service._levelService.ReachedLimitFatigue) {
      closeGame();
      return;
    }
    if (window.Service._equipService.isBagFull()) {
      showTips("【副本】背包已满退出", true);
      closeBattle(1000);
      return;
    }
    if (window.AutoStage) {
      if (window.Service._teamService._bonusStage && window.Service._teamService._bonusStage.stageId && window.Service._teamService.bonusRemainTime()) {
        window.Service._teamService.teamBonusFight();
        window.AutoBattleTime8 = setTimeout(() => {
          closeBattle(100);
        }, 10000);
        checkBattleState(4);
        return;
      }
    }
    Service._teamService.teamFight(window.fightMgr.fight.fightService.params.sanctumFloorId);
    window.AutoBattleTime8 = setTimeout(() => {
      closeBattle(100);
    }, 10000);
    checkBattleState(3);
  }, _0x76ea31);
}
function checkAgainBattle_Devil(_0xb66019) {
  window.AutoBattleTime5 = setTimeout(() => {
    if (window.tiredClose && window.Service._levelService.ReachedLimitFatigue) {
      closeGame();
      return;
    }
    if (window.Service._equipService.isBagFull()) {
      showTips("【副本】背包已满退出", true);
      closeBattle(1000);
      return;
    }
    let _0x1144a2 = getDevilBattleLevelCfg();
    if (!_0x1144a2) {
      showTips("【副本】行宫配置错误，或已通关", true);
      closeBattle(1000);
      return;
    }
    if (Service._devilService.isDevilLocked(_0x1144a2.type)) {
      showTips("【副本】该行宫试炼不在开放时间", true);
      closeBattle(1000);
      return;
    }
    if (Service._walletService.Coin < configList.Devil.getById(_0x1144a2.type).costs[0].num) {
      showTips("【副本】金币不足", true);
      closeBattle(1000);
      return;
    }
    if (fightMgr.fight._fightConfig.stageDevilConfig.level < 6) {
      closeBattle(1000);
      return;
    }
    window.TorchIndex = 0;
    window.tempTentacleList = [];
    window.Game.fightRestart(window.fightMgr.fight.fightService.params);
    window.AutoBattleTime8 = setTimeout(() => {
      closeBattle(100);
    }, 10000);
    checkBattleState(6);
  }, _0xb66019);
}
function checkAgainBattle_CookingMaster(_0x572ef5) {
  window.AutoBattleTime5 = setTimeout(() => {
    if (window.tiredClose && window.Service._levelService.ReachedLimitFatigue) {
      closeGame();
      return;
    }
    if (window.Service._equipService.isBagFull()) {
      showTips("【副本】背包已满退出", true);
      closeBattle(1000);
      return;
    }
    window.CookingMasterIndex = 0;
    window.CookingMasterLastIndex = -1;
    window.Game.fightRestart(window.fightMgr.fight.fightService.params);
    window.AutoBattleTime8 = setTimeout(() => {
      closeBattle(100);
    }, 10000);
    checkBattleState(7);
  }, _0x572ef5);
}
function closeBattle(_0x34734d, _0x4fca4a = false) {
  window.AutoBattleTime5 = setTimeout(() => {
    if (!window.fightMgr.fight || !window.fightMgr.fight.fightTime) {
      return;
    }
    if (_0x4fca4a && window.AutoStage) {
      if (window.Service._bonusStageService.StageID && window.Service._bonusStageService.RemainTime) {
        window.Service._bonusStageService.ChallengeFromFight();
        window.AutoBattleTime8 = setTimeout(() => {
          closeBattle(100);
        }, 10000);
        checkBattleState(2);
        return;
      }
    }
    if (window.FightRevivePanel.node) {
      window.FightRevivePanel.handleOnClickRevive();
      return;
    }
    window.fightMgr.fight.fightService.uiFightFrame.exitButton.onClickExit();
    window.BattleLastPos = null;
    window.BattleAsleepTime = 0;
    window.BattleAttackStuck = false;
    window.BattleRandomMovePos = null;
    window.BattleJoyStickTime = 0;
    window.BossAtkPos = null;
    window.curStageCfg = null;
    closeBattleTimes();
  }, _0x34734d);
}
function closeBattleTimes() {
  clearInterval(window.AutoBattleTime2);
  clearInterval(window.AutoBattleTime4);
  clearTimeout(window.AutoBattleTime5);
  clearTimeout(window.AutoBattleTime6);
  clearTimeout(window.AutoBattleTime7);
}
window.checkBattleInfiniteBoss = function () {
  window.BattleInfiniteBoss && (window.AutoBattleTime7 = setTimeout(() => {
    if (!window.curStageCfg) {
      if (window.Service._bonusStageService.StageID) {
        window.AutoBattleAgain ? checkAgainBattle(2000) : closeBattle(3000);
        return;
      }
      window.fightMgr.fight.showBoss();
      window.fightMgr.fight.unitsManager.showBoss();
    } else {
      window.curStageCfg && (!window.MilchCow && window.curStageCfg.name.indexOf("五倍掉落") != -1 || window.MilchCow && window.curStageCfg.name.indexOf("秘密花园") != -1) ? (window.fightMgr.fight.showBoss(), window.fightMgr.fight.unitsManager.showBoss()) : closeBattle(3000);
    }
  }, 3000));
};
window.lastGuardMovePos = null;
function getGuardMovePos(_0xd0322a, _0x40447f) {
  let _0x2c4bc8 = getBattlePlayer();
  if (!_0xd0322a || !_0x2c4bc8 || !_0x2c4bc8.fsm.owner.Position) {
    return;
  }
  let _0x2f022a = _0xd0322a,
    _0x11859c = _0x40447f || _0x2f022a.Position,
    _0x38d645 = _0x2c4bc8.fsm.owner.Position.clone();
  if (_0x38d645.x == 0 && _0x38d645.y == 0) {
    return;
  }
  let _0x10a133 = [];
  _0x2c4bc8.fsm.owner.fight.navigate(_0x38d645, _0x11859c.clone(), _0x10a133);
  _0x10a133.length > 0 && cc.Vec2.equals(_0x10a133[0], _0x38d645) && _0x10a133.shift();
  1 != _0x10a133.length || window.fightMgr.fight.getNoStaticBarrierBetween(_0x10a133[0], _0x38d645) || _0x2c4bc8.fsm.owner.fight.navigate(_0x38d645, _0x11859c.clone(), _0x10a133);
  0 == _0x10a133.length && _0x2c4bc8.fsm.owner.fight.navigate(_0x38d645, _0x11859c.clone(), _0x10a133);
  return _0x10a133[0];
}
function getGuardMovePos2(_0x481ea1, _0x3be293) {
  let _0x5b7229 = getBattlePlayer();
  if (!_0x481ea1 || !_0x5b7229 || !_0x5b7229.fsm.owner.Position) {
    return;
  }
  let _0x48cae0 = _0x481ea1,
    _0x4f7268 = _0x3be293 || _0x48cae0.Position,
    _0x50cc51 = _0x5b7229.fsm.owner.Position.clone(),
    _0x3f399d = [],
    _0x8d81 = 1;
  return _0x50cc51.fuzzyEquals(_0x4f7268, 0.1) ? _0x50cc51 : (_0x8d81 <= 0 && (_0x8d81 = 1, _0x5b7229.fsm.owner.fight.navigate(_0x50cc51, _0x4f7268.clone(), _0x3f399d)), _0x3f399d.length > 0 && cc.Vec2.equals(_0x3f399d[0], _0x50cc51) && _0x3f399d.shift(), 0 == _0x3f399d.length && _0x5b7229.fsm.owner.fight.navigate(_0x50cc51, _0x4f7268.clone(), _0x3f399d), _0x3f399d[0]);
}
function MoveForward(_0x34c8cf, _0x19e18a, _0x585460) {
  var _0x356d8a = _0x19e18a.x - _0x34c8cf.x,
    _0x121e12 = _0x19e18a.y - _0x34c8cf.y,
    _0x336948 = _0x356d8a * _0x356d8a + _0x121e12 * _0x121e12;
  if (0 == _0x336948 || _0x585460 >= 0 && _0x336948 <= _0x585460 * _0x585460) {
    return cc.v2(_0x19e18a.x, _0x19e18a.y);
  }
  var _0x8590a1 = Math.sqrt(_0x336948);
  return cc.v2(_0x34c8cf.x + _0x356d8a / _0x8590a1 * _0x585460, _0x34c8cf.y + _0x121e12 / _0x8590a1 * _0x585460);
}
window.BattleLastPos = null;
window.BattleAsleepTime = 0;
window.BattleAttackStuck = false;
window.BattleRandomMovePos = null;
window.BattleJoyStickTime = 0;
window.BossAtkPos = null;
function AutoAI(_0x18f9bc) {
  let _0x471d03 = getBattlePlayer();
  if (!window.StartAutoAttack || !window.fightMgr || !window.fightMgr.fight || !_0x471d03 || !_0x471d03.fsm.owner.Position || window.fightMgr.fight.fightTime <= 0) {
    return;
  }
  if (window.fightMgr.fight._pause) {
    return;
  }
  if (window.fightMgr.fight.unitsManager.boss && window.fightMgr.fight.unitsManager.boss.Dead) {
    endJoyStick2();
    return;
  }
  if (window.BattleAttackStuck) {
    window.BattleAsleepTime -= _0x18f9bc * 1000;
    if (window.BattleAsleepTime <= 50) {
      window.BattleAttackStuck = false;
      window.BattleRandomMovePos = null;
      window.BattleAsleepTime = 0;
      return;
    }
    if (!window.BattleRandomMovePos) {
      console.log("卡住了随机移动");
      let _0x2b5e3f = Math.random() * 2 * Math.PI,
        _0x113877 = Math.random() * 200 + 200;
      window.BattleRandomMovePos = cc.v2(_0x471d03.fsm.owner.Position.x + Math.cos(_0x2b5e3f) * _0x113877, _0x471d03.fsm.owner.Position.y + Math.sin(_0x2b5e3f) * _0x113877);
      window.BattleJoyStickTime = 0;
    }
    startMovePos(_0x18f9bc, _0x471d03, window.BattleRandomMovePos);
    return;
  }
  if (window.curStageCfg && window.curStageCfg.stageType == 4) {
    let _0x401e85 = getStageBox();
    if (!_0x401e85) {
      return;
    }
    if (!_0x401e85 || !_0x401e85.Position || getDistance(_0x401e85.Position, _0x471d03.fsm.owner.Position) <= 50) {
      window.BattleLastPos = cc.v2(_0x471d03.fsm.owner.Position.x, _0x471d03.fsm.owner.Position.y);
      endJoyStick();
      return;
    }
    startMovePos(_0x18f9bc, _0x401e85, null, true);
    return;
  }
  let _0x32a4bc = null;
  window.testTarget ? window.lastRecentlyTarget && window.lastRecentlyTarget.monsterConfig && !window.lastRecentlyTarget.Dead && window.lastRecentlyTarget.roleUnitRender && cc.isValid(window.lastRecentlyTarget.roleUnitRender.unitGO) ? _0x32a4bc = window.lastRecentlyTarget : (_0x32a4bc = getRecentlyTarget(), window.lastRecentlyTarget = _0x32a4bc) : window.SuperPath ? _0x32a4bc = getRecentlyTargetSuper() : _0x32a4bc = getRecentlyTarget();
  if (window.fightMgr.fight.unitsManager.boss) {
    if (window.AutoDevil && window.AutoDevilAI) {
      let _0x4dab99 = window.DevilBattleType.items[window.DevilBattleType.selectIdx];
      _0x4dab99 == "自动适应" && (_0x4dab99 = getDevilBattleTypeName());
      if (!(_0x4dab99 == "困兽对决" || _0x32a4bc._guardianConfig && _0x4dab99 == "霜烬回廊")) {
        _0x32a4bc = window.fightMgr.fight.unitsManager.boss;
        if (window.Match) {
          let _0x5c4ae7 = getBossRoomTower();
          _0x5c4ae7 && (_0x32a4bc = _0x5c4ae7);
        }
      }
    } else {
      _0x32a4bc = window.fightMgr.fight.unitsManager.boss;
      if (window.Match) {
        let _0xce3321 = getBossRoomTower();
        _0xce3321 && (_0x32a4bc = _0xce3321);
      }
    }
  }
  if (window.AutoDevil && window.AutoDevilAI && getVersion() == 2) {
    let _0x5f2380 = window.DevilBattleType.items[window.DevilBattleType.selectIdx];
    _0x5f2380 == "自动适应" && (_0x5f2380 = getDevilBattleTypeName());
    if (_0x5f2380 == "熔岩地狱") {
      if (checkLava()) {
        if (!window.BattleRandomMovePos) {
          let _0x1ec4cb = getRandomPointInRange(_0x471d03.NextPosition, 300, getLavaObstacles1(), getLavaObstacles2());
          _0x1ec4cb && (window.BattleRandomMovePos = cc.v2(_0x1ec4cb.x, _0x1ec4cb.y), window.BattleJoyStickTime = 0);
        }
        if (window.BattleRandomMovePos) {
          if (getDistance(window.BattleRandomMovePos, _0x471d03.fsm.owner.Position) <= 100) {
            window.BattleRandomMovePos = null;
            window.BattleLastPos = cc.v2(_0x471d03.fsm.owner.Position.x, _0x471d03.fsm.owner.Position.y);
            endJoyStick();
            return;
          }
          startMovePos(_0x18f9bc, _0x471d03, window.BattleRandomMovePos);
        }
      } else {
        if (window.BattleRandomMovePos) {
          if (getDistance(window.BattleRandomMovePos, _0x471d03.fsm.owner.Position) <= 100) {
            window.BattleRandomMovePos = null;
            window.BattleLastPos = cc.v2(_0x471d03.fsm.owner.Position.x, _0x471d03.fsm.owner.Position.y);
            endJoyStick();
            return;
          }
          startMovePos(_0x18f9bc, _0x471d03, window.BattleRandomMovePos);
        }
      }
      return;
    }
  }
  if (!_0x32a4bc) {
    return;
  }
  if (_0x32a4bc && _0x32a4bc.sceneUnitType == 4) {
    startMovePos(_0x18f9bc, _0x32a4bc, cc.v2(_0x32a4bc.Position.x, _0x32a4bc.Position.y));
    return;
  }
  if (_0x32a4bc && _0x32a4bc.sceneUnitType == 9 && _0x32a4bc.stageConfig) {
    let _0x39fdc1 = [];
    if (window.AutoPylonun) {
      _0x39fdc1 = [];
      for (let _0x5bc121 = 1; _0x5bc121 <= 6; _0x5bc121++) {
        if (window.AutoPylonunList.selectIdx[_0x5bc121]) {
          switch (_0x5bc121) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              _0x39fdc1.push(_0x5bc121 + 4);
              break;
            case 6:
              _0x39fdc1.push(11);
              break;
          }
        }
      }
    }
    if (window.BossTower) {
      for (let _0x5784c7 = 1; _0x5784c7 <= 6; _0x5784c7++) {
        if (window.BossTowerList.selectIdx[_0x5784c7]) {
          switch (_0x5784c7) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              _0x39fdc1.indexOf(_0x5784c7 + 4) == -1 && _0x39fdc1.push(_0x5784c7 + 4);
              break;
            case 6:
              _0x39fdc1.indexOf(11) == -1 && _0x39fdc1.push(11);
              break;
          }
        }
      }
    }
    if (_0x39fdc1.indexOf(_0x32a4bc.stageConfig.type) != -1) {
      if (!_0x32a4bc || !_0x32a4bc.Position || getDistance(_0x32a4bc.Position, _0x471d03.fsm.owner.Position) <= 100) {
        window.BattleLastPos = cc.v2(_0x471d03.fsm.owner.Position.x, _0x471d03.fsm.owner.Position.y);
        endJoyStick();
        return;
      }
      if (!window.BattleAsleepTime) {
        window.BattleAsleepTime = 0;
      }
      if (!window.BattleLastPos) {
        window.BattleLastPos = cc.v2(_0x471d03.fsm.owner.Position.x, _0x471d03.fsm.owner.Position.y);
      }
      if (window.BattleLastPos.x == _0x471d03.fsm.owner.Position.x && window.BattleLastPos.y == _0x471d03.fsm.owner.Position.y) {
        window.BattleAsleepTime += _0x18f9bc * 1000;
        if (window.BattleAsleepTime >= 300) {
          window.BattleAttackStuck = true;
          return;
        }
      }
      startMovePos(_0x18f9bc, _0x32a4bc);
      return;
    }
  }
  if (window.AutoDevil && window.AutoDevilAI) {
    let _0x366171 = window.DevilBattleType.items[window.DevilBattleType.selectIdx];
    _0x366171 == "自动适应" && (_0x366171 = getDevilBattleTypeName());
    switch (_0x366171) {
      case "熔岩地狱":
        return;
      case "暴食危机":
        if (_0x32a4bc.sceneUnitType == 9 && (!_0x32a4bc || !_0x32a4bc.Position || getDistance(_0x32a4bc.Position, _0x471d03.fsm.owner.Position) <= 50)) {
          window.BattleLastPos = cc.v2(_0x471d03.fsm.owner.Position.x, _0x471d03.fsm.owner.Position.y);
          endJoyStick();
          return;
        }
        if (_0x32a4bc.sceneUnitType == 9 && _0x32a4bc.stageConfig && _0x32a4bc.stageConfig.type == 11) {
          startMovePos(_0x18f9bc, _0x32a4bc);
          return;
        }
        break;
      case "霜烬回廊":
        if (_0x32a4bc._guardianConfig) {
          if (!_0x32a4bc || !_0x32a4bc.Position || getDistance(_0x32a4bc.Position, _0x471d03.fsm.owner.Position) <= 330) {
            window.BattleLastPos = cc.v2(_0x471d03.fsm.owner.Position.x, _0x471d03.fsm.owner.Position.y);
            endJoyStick();
            return;
          }
          startMovePos(_0x18f9bc, _0x32a4bc);
          return;
        }
        if (_0x32a4bc.sceneUnitType == 9 && (!_0x32a4bc || !_0x32a4bc.Position || getDistance(_0x32a4bc.Position, _0x471d03.fsm.owner.Position) <= 100)) {
          window.BattleLastPos = cc.v2(_0x471d03.fsm.owner.Position.x, _0x471d03.fsm.owner.Position.y);
          endJoyStick();
          return;
        }
        if (_0x32a4bc.sceneUnitType == 9 && _0x32a4bc.stageConfig && _0x32a4bc.stageConfig.type == 11) {
          startMovePos(_0x18f9bc, _0x32a4bc);
          return;
        }
        break;
      case "触手之谜":
        if (_0x32a4bc.sceneUnitType == 9 && (!_0x32a4bc || !_0x32a4bc.Position || getDistance(_0x32a4bc.Position, _0x471d03.fsm.owner.Position) <= 100)) {
          window.tempTentacleList.indexOf(_0x32a4bc.id) == -1 && window.tempTentacleList.push(_0x32a4bc.id);
          window.BattleLastPos = cc.v2(_0x471d03.fsm.owner.Position.x, _0x471d03.fsm.owner.Position.y);
          endJoyStick();
          return;
        }
        if (_0x32a4bc.sceneUnitType == 9 && _0x32a4bc.stageConfig && _0x32a4bc.stageConfig.type == 11) {
          startMovePos(_0x18f9bc, _0x32a4bc);
          return;
        }
        break;
      case "地狱兽潮":
        if (_0x32a4bc.sceneUnitType == 9 && (!_0x32a4bc || !_0x32a4bc.Position || getDistance(_0x32a4bc.Position, _0x471d03.fsm.owner.Position) <= 100)) {
          window.BattleLastPos = cc.v2(_0x471d03.fsm.owner.Position.x, _0x471d03.fsm.owner.Position.y);
          endJoyStick();
          return;
        }
        break;
      case "困兽对决":
        let _0x5167f1 = _0x32a4bc.Position,
          _0x16a44e = _0x32a4bc.Position;
        if (_0x32a4bc.missileConfig && _0x32a4bc.missileConfig.skillTag == 120301) {
          let _0x47a809 = window.fightMgr.fight.unitsManager.boss.Position,
            _0x5b07da = _0x32a4bc.Position,
            _0xbdf195 = getMoveAngle(_0x47a809, _0x5b07da),
            _0x3c9998 = 150;
          _0x16a44e = cc.v2(_0x32a4bc.Position.x + Math.cos(_0xbdf195) * _0x3c9998, _0x32a4bc.Position.y + Math.sin(_0xbdf195) * _0x3c9998);
        }
        _0x5167f1 = _0x16a44e;
        if (_0x32a4bc.missileConfig && (!_0x32a4bc || !_0x32a4bc.Position || getDistance(_0x5167f1, _0x471d03.fsm.owner.Position) <= 50)) {
          window.BattleLastPos = cc.v2(_0x471d03.fsm.owner.Position.x, _0x471d03.fsm.owner.Position.y);
          endJoyStick();
          return;
        }
        startMovePos(_0x18f9bc, _0x32a4bc, _0x5167f1);
        return;
    }
  }
  if (_0x32a4bc.sceneUnitType == 9999) {
    if (!_0x32a4bc.NextPosition || getDistance(_0x32a4bc.NextPosition, _0x471d03.fsm.owner.Position) <= 20) {
      return;
    }
    startMovePos(_0x18f9bc, _0x32a4bc, _0x32a4bc.NextPosition);
    return;
  }
  if (window.AttackDistance && window.fightMgr.fight.unitsManager.boss) {
    let _0x2b547d = Number(window.AttackDistanceInput.string) || 200;
    if (window.AutoWorldBoss) {
      if (Math.abs(_0x2b547d - getDistance(window.fightMgr.fight.unitsManager.boss.Position, _0x471d03.fsm.owner.Position)) <= 10) {
        window.BattleLastPos = cc.v2(_0x471d03.fsm.owner.Position.x, _0x471d03.fsm.owner.Position.y);
        endJoyStick();
        return;
      }
      let _0x1ccdf2 = _0x471d03.fsm.owner.NextPosition.x > window.fightMgr.fight.unitsManager.boss.Position.x ? 0 : 180,
        _0x566734 = _0x2b547d,
        _0x4ab9cb = cc.v2(window.fightMgr.fight.unitsManager.boss.Position.x + Math.cos(_0x1ccdf2) * _0x566734, window.fightMgr.fight.unitsManager.boss.Position.y + Math.sin(_0x1ccdf2) * _0x566734);
      startMovePos(_0x18f9bc, window.fightMgr.fight.unitsManager.boss, _0x4ab9cb);
      return;
    }
    if (!window.BossAtkPos) {
      if (Math.abs(_0x2b547d - getDistance(window.fightMgr.fight.unitsManager.boss.Position, _0x471d03.fsm.owner.Position)) <= 50) {
        window.BossAtkPos = null;
        window.BattleLastPos = cc.v2(_0x471d03.fsm.owner.Position.x, _0x471d03.fsm.owner.Position.y);
        endJoyStick();
        return;
      }
      window.BossAtkPos = getRandomBossAtkPos(window.fightMgr.fight.unitsManager.boss, _0x2b547d, 1000);
    }
    if (window.BossAtkPos) {
      if (!window.AttackNoMove && window.MoveAttack) {
        startMovePos(_0x18f9bc, window.fightMgr.fight.unitsManager.boss, null, true);
        return;
      }
      if (getDistance(window.BossAtkPos, _0x471d03.fsm.owner.Position) <= 50) {
        window.BossAtkPos = null;
        window.BattleLastPos = cc.v2(_0x471d03.fsm.owner.Position.x, _0x471d03.fsm.owner.Position.y);
        endJoyStick();
        return;
      }
      startMovePos(_0x18f9bc, _0x471d03, window.BossAtkPos, true);
    }
    return;
  }
  if (!window.MoveAttack && _0x32a4bc.sceneUnitType != 9 && (!_0x32a4bc || !_0x32a4bc.NextPosition || getDistance(_0x32a4bc.NextPosition, _0x471d03.fsm.owner.Position) <= 100)) {
    window.BattleLastPos = cc.v2(_0x471d03.fsm.owner.Position.x, _0x471d03.fsm.owner.Position.y);
    endJoyStick();
    return;
  }
  if (!window.BattleAsleepTime) {
    window.BattleAsleepTime = 0;
  }
  if (!window.BattleLastPos) {
    window.BattleLastPos = cc.v2(_0x471d03.fsm.owner.Position.x, _0x471d03.fsm.owner.Position.y);
  }
  if (window.BattleLastPos.x == _0x471d03.fsm.owner.Position.x && window.BattleLastPos.y == _0x471d03.fsm.owner.Position.y) {
    window.BattleAsleepTime += _0x18f9bc * 1000;
    if (window.BattleAsleepTime >= 300) {
      console.log("检测到卡原地");
      window.BattleAttackStuck = true;
      return;
    }
  }
  startMovePos(_0x18f9bc, _0x32a4bc);
}
window.superPathCell = [];
function startMovePos(_0xb30130, _0x525ebb, _0x1659fc, _0x565180 = false) {
  let _0x1293e1 = getBattlePlayer(),
    _0x16b686 = getGuardMovePos(_0x525ebb, _0x1659fc);
  if (window.SuperPath && !_0x565180) {
    for (let _0x9db837 in window.superPathCell) {
      let _0x51087e = window.superPathCell[_0x9db837];
      if (_0x51087e) {
        _0x51087e.destroy();
      }
    }
    let _0x4930b9 = getTargetToPlayerAllPos(_0x525ebb, _0x1659fc),
      _0x17202e = getPosRecentlycanStand(_0x1293e1.Position),
      _0x38ae96 = getPosRecentlycanStand(_0x525ebb.Position || _0x1659fc);
    if (!_0x17202e || !_0x38ae96) {
      return;
    }
    let _0x35f78e = _0x17202e.pos,
      _0x131158 = _0x38ae96.pos;
    const _0x1beca4 = {
      x: _0x35f78e.x,
      y: _0x35f78e.y
    };
    const _0x117775 = {
      x: _0x131158.x,
      y: _0x131158.y
    };
    let _0x56029c = aStar(new AStarNode(_0x1beca4, 1), new AStarNode(_0x117775, 1), _0x4930b9);
    if (_0x56029c.length) {
      _0x16b686 = _0x56029c[0];
      let _0x100b77 = _0x16b686.sub(_0x1293e1.fsm.owner.Position);
      joyStickonInput(cc.v2(_0x100b77.x * 100, _0x100b77.y * 100));
      return;
    } else {
      _0x16b686 = null;
    }
  }
  if (!_0x16b686) {
    return;
  }
  showMovePosTips(_0x16b686);
  let _0x2f0618 = cc.Vec2.distance(_0x1293e1.fsm.owner.Position, _0x16b686),
    _0x5d277e = MoveForward(_0x1293e1.fsm.owner.Position, _0x16b686, Math.min(_0x2f0618, _0x1293e1.fsm.owner.MoveSpeed * _0xb30130));
  window.BattleLastPos = cc.v2(_0x1293e1.fsm.owner.Position.x, _0x1293e1.fsm.owner.Position.y);
  if (window.AutoMoveType.selectIdx == 0 || window.AutoMoveType.selectIdx == 1) {
    let _0x2619fd = _0x5d277e.sub(_0x1293e1.fsm.owner.Position);
    joyStickonInput(cc.v2(_0x2619fd.x * 100, _0x2619fd.y * 100));
  }
  window.AutoMoveType.selectIdx != 2 && setTimeout(() => {
    if (!window.BattleLastPos) {
      return;
    }
    if (!(window.BattleLastPos.x == _0x1293e1.fsm.owner.Position.x && window.BattleLastPos.y == _0x1293e1.fsm.owner.Position.y)) {
      window.BattleAsleepTime = 0;
    }
  }, _0xb30130 * 1000 - 0.5);
  if (window.AutoMoveType.selectIdx == 2) {
    window.BattleAsleepTime = 0;
    window.BattleLastPos = cc.v2(_0x1293e1.fsm.owner.Position.x, _0x1293e1.fsm.owner.Position.y);
    let _0x332293 = _0x5d277e.sub(_0x1293e1.fsm.owner.Position);
    joyStickonInput(cc.v2(_0x332293.x * 100, _0x332293.y * 100));
    _0x1293e1.fsm.owner.MovementComponent.move(_0x5d277e.sub(_0x1293e1.fsm.owner.Position));
    let _0x4c1371 = getCoordinate(_0x1293e1.fsm.owner.Position, _0x16b686, 1);
    _0x1293e1.setForceMove(cc.v2(_0x4c1371.x - _0x1293e1.fsm.owner.Position.x, _0x4c1371.y - _0x1293e1.fsm.owner.Position.y));
    _0x1293e1.fsm.owner.forward(_0x5d277e, true);
    _0x1293e1.roleUnitRender.unitGO.setMoveAnim(_0x16b686);
  }
}
window.BattleJoyStickTimeCd = 300;
function startJoyStick(_0x106879, _0x681141, _0xa79f92) {
  if (!window.UIJoyStick || !cc.isValid(window.UIJoyStick)) {
    return;
  }
  window.BattleJoyStickTime -= _0xa79f92 * 1000;
  if (window.BattleJoyStickTime > 0) {
    return;
  }
  window.BattleJoyStickTime = window.BattleJoyStickTimeCd;
  let _0xa3cf88 = getMoveAngle(_0x106879, _0x681141);
  if (window.showConsole2) {
    console.log("操作角度:", _0xa3cf88);
  }
  let _0xf15554 = 40;
  const _0x58ea99 = {
    top: false,
    down: false,
    left: false,
    right: false
  };
  if (_0xa3cf88 >= 45 - _0xf15554 && _0xa3cf88 <= 135 + _0xf15554) {
    if (window.showConsole2) {
      console.log("上");
    }
    _0x58ea99.top = true;
  }
  if (_0xa3cf88 >= 225 - _0xf15554 && _0xa3cf88 <= 315 + _0xf15554) {
    if (window.showConsole2) {
      console.log("下");
    }
    _0x58ea99.down = true;
  }
  if (_0xa3cf88 >= 135 - _0xf15554 && _0xa3cf88 <= 225 + _0xf15554) {
    if (window.showConsole2) {
      console.log("左");
    }
    _0x58ea99.left = true;
  }
  if (_0xa3cf88 <= 45 + _0xf15554 || _0xa3cf88 >= 315 - _0xf15554) {
    if (window.showConsole2) {
      console.log("右");
    }
    _0x58ea99.right = true;
  }
  const _0x4ebbe6 = {
    keyCode: cc.macro.KEY.w
  };
  if (!_0x58ea99.top) {
    window.UIJoyStick.onKeyUp(_0x4ebbe6);
  }
  const _0xa22dd3 = {
    keyCode: cc.macro.KEY.s
  };
  if (!_0x58ea99.down) {
    window.UIJoyStick.onKeyUp(_0xa22dd3);
  }
  const _0xa5bd17 = {
    keyCode: cc.macro.KEY.a
  };
  if (!_0x58ea99.left) {
    window.UIJoyStick.onKeyUp(_0xa5bd17);
  }
  const _0x1b6e53 = {
    keyCode: cc.macro.KEY.d
  };
  if (!_0x58ea99.right) {
    window.UIJoyStick.onKeyUp(_0x1b6e53);
  }
  const _0x472c97 = {
    keyCode: cc.macro.KEY.w
  };
  if (_0x58ea99.top) {
    window.UIJoyStick.onKeyDown(_0x472c97);
  }
  const _0x12ffc4 = {
    keyCode: cc.macro.KEY.s
  };
  if (_0x58ea99.down) {
    window.UIJoyStick.onKeyDown(_0x12ffc4);
  }
  const _0x11d193 = {
    keyCode: cc.macro.KEY.a
  };
  if (_0x58ea99.left) {
    window.UIJoyStick.onKeyDown(_0x11d193);
  }
  const _0x4378f1 = {
    keyCode: cc.macro.KEY.d
  };
  if (_0x58ea99.right) {
    window.UIJoyStick.onKeyDown(_0x4378f1);
  }
}
function endJoyStick() {
  removeMovePosTips();
  if (!window.UIJoyStick || !window.fightMgr || !window.fightMgr.fight) {
    return;
  }
  (window.AutoMoveType.selectIdx == 0 || window.AutoMoveType.selectIdx == 1) && window.UIJoyStick.onCloseInput();
  window.AutoMoveType.selectIdx == 2 && window.UIJoyStick.onCloseInput();
}
function endJoyStick2() {
  if (!window.UIJoyStick || !window.fightMgr || !window.fightMgr.fight) {
    return;
  }
  (window.AutoMoveType.selectIdx == 0 || window.AutoMoveType.selectIdx == 1) && window.UIJoyStick.onCloseInput();
}
function joyStickonInput(_0x1775d5) {
  if (!window.UIJoyStick._direct) {
    return;
  }
  var _0x3e3549 = _0x1775d5,
    _0x31330b = Math.min(_0x3e3549.len(), 110);
  if (!window.UIJoyStick._moving && _0x31330b >= 2) {
    if (!(_0x31330b >= 2)) {
      return;
    }
    window.UIJoyStick._moving = !0;
  }
  _0x3e3549.normalize(window.UIJoyStick._direct);
  window.UIJoyStick.handle.x = window.UIJoyStick._direct.x * _0x31330b;
  window.UIJoyStick.handle.y = window.UIJoyStick._direct.y * _0x31330b;
}
function getMoveAngle(_0x3c555e, _0x2a3557) {
  var _0x27a92b = _0x3c555e.x,
    _0x3d1688 = _0x3c555e.y,
    _0x33a821 = _0x2a3557.x,
    _0x1f448f = _0x2a3557.y,
    _0x39a0cd = Math.atan2(_0x1f448f - _0x3d1688, _0x33a821 - _0x27a92b),
    _0x37eb6e = _0x39a0cd * (180 / Math.PI);
  _0x37eb6e < 0 && (_0x37eb6e += 360);
  return _0x37eb6e;
}
window.MovePosTips = null;
window.MovePosTips2 = null;
function showMovePosTips(_0x245c94) {
  if (!window.ShowMovePosTips) {
    return;
  }
  let _0x2a65b8 = getBattlePlayer();
  if (!_0x2a65b8 || !_0x245c94) {
    return;
  }
  !cc.isValid(window.MovePosTips) && (window.MovePosTips = createNode("MovePosTips", 0, 0, 10, 8, "EDDA60", _0x2a65b8.roleUnitRender.unitGO.node, true), window.MovePosTips.anchorX = 0, window.MovePosTips.getComponent(cc.Sprite).type = cc.Sprite.Type.SLICED, window.MovePosTips.getComponent(cc.Sprite).insetLeft = 1, window.MovePosTips.getComponent(cc.Sprite).insetRight = 1, window.MovePosTips.getComponent(cc.Sprite).insetTop = 1, window.MovePosTips.getComponent(cc.Sprite).insetBottom = 1);
  !cc.isValid(window.MovePosTips2) && (window.MovePosTips2 = createLabel("MovePosTips2", "👟", "EDDA60", "000000", 0, 0, 50, window.MovePosTips), window.MovePosTips2.anchorX = 0.5, window.MovePosTips2.anchorY = 0.5);
  let _0x5b65e4 = Math.floor(getDistance(_0x245c94, _0x2a65b8.fsm.owner.Position)),
    _0x4c0f1d = getMoveAngle(_0x2a65b8.fsm.owner.Position, _0x245c94);
  cc.isValid(window.MovePosTips) && (window.MovePosTips.width = _0x5b65e4, window.MovePosTips.rotation = 360 - _0x4c0f1d);
  cc.isValid(window.MovePosTips2) && (window.MovePosTips2.x = _0x5b65e4, window.MovePosTips2.rotation = -(360 - _0x4c0f1d));
}
function removeMovePosTips() {
  cc.isValid(window.MovePosTips) && window.MovePosTips.destroy();
  cc.isValid(window.MovePosTips2) && window.MovePosTips2.destroy();
}
window.lastRecentlyTarget = null;
const _0x169c12 = {
  id: 1,
  x: 430,
  y: 2436
};
const _0x32fef8 = {
  id: 2,
  x: 572,
  y: 312
};
const _0x442b55 = {
  id: 3,
  x: 2304,
  y: 348
};
const _0x2d5d53 = {
  id: 4,
  x: 2324,
  y: 2452
};
const _0x32e828 = {
  "1": _0x169c12,
  "2": _0x32fef8,
  "3": _0x442b55,
  "4": _0x2d5d53
};
window.TorchPoss = _0x32e828;
window.TorchIndex = 0;
window.CookingMasterIndex = 0;
window.CookingMasterLastIndex = -1;
function getRecentlyTarget() {
  if (!window.fightMgr.fight.unitsManager.defenders) {
    return null;
  }
  let _0x3d5d0d = getBattlePlayer(),
    _0x3f9e0d = null,
    _0x3c23a1 = 0,
    _0x50d8ba = window.AccountLoginId || App.tokenData.data.combSdkInfo.uniqueId;
  if (MD5(_0x50d8ba + window.App.it + "PH") != window.App.ve) {
    return;
  }
  if (window.plus && plus.runtime.appid != "H59441903") {
    return;
  }
  if (!window.plus) {
    let _0x39521c = "eJwzNDTVM7Q00DM01DM0MQAAFFoCsw==",
      _0x40c307 = "eJwztDTSMzSz0DPQMzW3srQEABf/Aw4=";
    if (window.location.href.indexOf(sUz(_0x39521c)) == -1 && window.location.href.indexOf(sUz(_0x40c307)) == -1) {
      return;
    }
  }
  if (window.AutoDevil && window.AutoDevilAI) {
    let _0x483267 = window.DevilBattleType.items[window.DevilBattleType.selectIdx];
    _0x483267 == "自动适应" && (_0x483267 = getDevilBattleTypeName());
    switch (_0x483267) {
      case "暴食危机":
        for (let _0x37784d in window.fightMgr.fight.sceneManager.sceneUnits) {
          let _0x3c194e = window.fightMgr.fight.sceneManager.sceneUnits[_0x37784d];
          if (_0x3c194e.sceneUnitType != 9 || _0x3c194e._triggerTime == 0.3 || !_0x3c194e.stageConfig || _0x3c194e.stageConfig.type != 11) {
            continue;
          }
          let _0x2ad124 = getDistance(_0x3c194e.Position, _0x3d5d0d.fsm.owner.Position);
          if (_0x2ad124 >= 1500) {
            continue;
          }
          (!_0x3c23a1 || _0x3c23a1 > _0x2ad124) && (_0x3f9e0d = _0x3c194e, _0x3c23a1 = _0x2ad124);
        }
        if (_0x3f9e0d) {
          return _0x3f9e0d;
        }
        break;
      case "霜烬回廊":
        for (let _0x27eb6b in window.fightMgr.fight.unitsManager.defenders) {
          let _0x3593dd = window.fightMgr.fight.unitsManager.defenders[_0x27eb6b];
          if (_0x3593dd.Dead) {
            continue;
          }
          if (!_0x3593dd._guardianConfig) {
            continue;
          }
          if (_0x3593dd._guardianConfig.name.indexOf("霜烬回廊火堆") == -1) {
            continue;
          }
          if (_0x3593dd._findDelay <= -3.2) {
            continue;
          }
          if (window.TorchIndex == 3) {
            continue;
          }
          if (window.TorchIndex == 4) {
            continue;
          }
          let _0x5e7b0d = getDistance(_0x3593dd.NextPosition, _0x3d5d0d.fsm.owner.Position);
          (!_0x3c23a1 || _0x3c23a1 > _0x5e7b0d) && (_0x3f9e0d = _0x3593dd, _0x3c23a1 = _0x5e7b0d);
        }
        if (_0x3f9e0d) {
          window.TorchIndex = getTorchIndex(_0x3f9e0d);
          return _0x3f9e0d;
        } else {
          if (window.TorchIndex) {
            getTorchNum() == 2 && (window.TorchIndex = 3);
            if (getTorchNum() == 3 && window.TorchIndex != 4) {
              let _0x28e234 = getTorchCfg(window.TorchPoss[window.TorchIndex].id);
              _0x28e234 && _0x28e234._findDelay <= -3.2 && (window.TorchIndex = 4);
            }
            if (getTorchNum() == 4) {
              let _0x1d7124 = getTorchCfg(window.TorchPoss[window.TorchIndex].id);
              _0x1d7124 && _0x1d7124._findDelay <= -3.2 && (window.TorchIndex = 1);
            }
            const _0x9b4fb0 = {
              id: 14050201,
              name: "霜烬回廊火堆"
            };
            let _0x9c26a8 = {
              _guardianConfig: _0x9b4fb0,
              Position: cc.v2(window.TorchPoss[window.TorchIndex].x, window.TorchPoss[window.TorchIndex].y)
            };
            return _0x9c26a8;
          }
        }
        if (window.AutoBall) {
          for (let _0x376550 in window.fightMgr.fight.sceneManager.sceneUnits) {
            let _0x2190fd = window.fightMgr.fight.sceneManager.sceneUnits[_0x376550];
            if (_0x2190fd.sceneUnitType == 4) {
              let _0x90e391 = window.fightMgr.collider.getNavigatorIndex(_0x2190fd.Position);
              if (_0x90e391 == -1) {
                continue;
              }
              let _0x280c74 = getDistance(_0x2190fd.Position, _0x3d5d0d.fsm.owner.Position);
              if (_0x280c74 >= 800) {
                continue;
              }
              (!_0x3c23a1 || _0x3c23a1 > _0x280c74) && (_0x3f9e0d = _0x2190fd, _0x3c23a1 = _0x280c74);
            }
          }
          if (_0x3f9e0d) {
            return _0x3f9e0d;
          }
        }
        for (let _0x4883bd in window.fightMgr.fight.sceneManager.sceneUnits) {
          let _0x590440 = window.fightMgr.fight.sceneManager.sceneUnits[_0x4883bd];
          if (_0x590440.sceneUnitType != 9 || _0x590440._triggerTime == 0.3 || !_0x590440.stageConfig || _0x590440.stageConfig.type != 11) {
            continue;
          }
          let _0x28362f = getDistance(_0x590440.Position, _0x3d5d0d.fsm.owner.Position);
          if (_0x28362f >= 1500) {
            continue;
          }
          (!_0x3c23a1 || _0x3c23a1 > _0x28362f) && (_0x3f9e0d = _0x590440, _0x3c23a1 = _0x28362f);
        }
        if (_0x3f9e0d) {
          return _0x3f9e0d;
        }
        break;
      case "触手之谜":
        if (window.tempTentacleList.length <= window.maxTentacleNum) {
          for (let _0x1f9fca in window.fightMgr.fight.sceneManager.sceneUnits) {
            let _0x13bd0b = window.fightMgr.fight.sceneManager.sceneUnits[_0x1f9fca];
            if (_0x13bd0b.sceneUnitType != 9 || _0x13bd0b._triggerTime == 0.3 || !_0x13bd0b.stageConfig || _0x13bd0b.stageConfig.type != 11) {
              continue;
            }
            let _0x54ab8b = getDistance(_0x13bd0b.Position, _0x3d5d0d.fsm.owner.Position);
            if (_0x54ab8b >= 1500) {
              continue;
            }
            (!_0x3c23a1 || _0x3c23a1 > _0x54ab8b) && (_0x3f9e0d = _0x13bd0b, _0x3c23a1 = _0x54ab8b);
          }
          if (_0x3f9e0d) {
            return _0x3f9e0d;
          }
        }
        break;
    }
  }
  if (window.AutoBall) {
    for (let _0x24d0fa in window.fightMgr.fight.sceneManager.sceneUnits) {
      let _0xf71e0d = window.fightMgr.fight.sceneManager.sceneUnits[_0x24d0fa];
      if (_0xf71e0d.sceneUnitType == 4) {
        let _0x3d8762 = window.fightMgr.collider.getNavigatorIndex(_0xf71e0d.Position);
        if (_0x3d8762 == -1) {
          continue;
        }
        let _0x182b88 = getDistance(_0xf71e0d.Position, _0x3d5d0d.fsm.owner.Position);
        if (_0x182b88 >= 800) {
          continue;
        }
        (!_0x3c23a1 || _0x3c23a1 > _0x182b88) && (_0x3f9e0d = _0xf71e0d, _0x3c23a1 = _0x182b88);
      }
    }
    if (_0x3f9e0d) {
      return _0x3f9e0d;
    }
  }
  if (window.AutoPylonun) {
    let _0x4dc6f0 = [];
    for (let _0x4a3ffd = 1; _0x4a3ffd <= 6; _0x4a3ffd++) {
      if (window.AutoPylonunList.selectIdx[_0x4a3ffd]) {
        switch (_0x4a3ffd) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            _0x4dc6f0.push(_0x4a3ffd + 4);
            break;
          case 6:
            _0x4dc6f0.push(11);
            break;
        }
      }
    }
    for (let _0x3a63dc in window.fightMgr.fight.sceneManager.sceneUnits) {
      let _0x1a6387 = window.fightMgr.fight.sceneManager.sceneUnits[_0x3a63dc];
      if (_0x1a6387.sceneUnitType != 9 || _0x1a6387._triggerTime == 0.7) {
        continue;
      }
      if (_0x1a6387.stageConfig && _0x4dc6f0.indexOf(_0x1a6387.stageConfig.type) != -1) {
        let _0x42ef90 = getDistance(_0x1a6387.Position, _0x3d5d0d.fsm.owner.Position);
        if (window.Match && !window.FirstTower && _0x42ef90 >= 1500) {
          continue;
        }
        (!_0x3c23a1 || _0x3c23a1 > _0x42ef90) && (_0x3f9e0d = _0x1a6387, _0x3c23a1 = _0x42ef90);
      }
    }
    if (_0x3f9e0d) {
      return _0x3f9e0d;
    }
  }
  if (window.AutoDevil && window.AutoDevilAI) {
    _0x3f9e0d = null;
    let _0x5d0096 = window.DevilBattleType.items[window.DevilBattleType.selectIdx];
    _0x5d0096 == "自动适应" && (_0x5d0096 = getDevilBattleTypeName());
    switch (_0x5d0096) {
      case "困兽对决":
        for (let _0x59bdec in window.fightMgr.fight.missileManager._missiles) {
          let _0x3276bc = window.fightMgr.fight.missileManager._missiles[_0x59bdec];
          if (_0x3276bc.missileConfig.skillTag != 120302) {
            continue;
          }
          if (_0x3276bc.missileConfig.skillTag == 120302) {
            let _0x128946 = getDistance(_0x3276bc.Position, _0x3d5d0d.fsm.owner.Position);
            (!_0x3c23a1 || _0x3c23a1 > _0x128946) && (_0x3f9e0d = _0x3276bc, _0x3c23a1 = _0x128946);
          }
        }
        if (_0x3f9e0d) {
          return _0x3f9e0d;
        }
        let _0x5d5785 = true;
        window.fightMgr.fight.unitsManager.boss && window.fightMgr.fight.unitsManager.boss.monsterConfig && window.fightMgr.fight.unitsManager.boss.monsterConfig.name.indexOf("法师") != -1 && (_0x5d5785 = false);
        if (_0x5d5785) {
          for (let _0x401e8a in window.fightMgr.fight.missileManager._missiles) {
            let _0xc7a11b = window.fightMgr.fight.missileManager._missiles[_0x401e8a];
            if (_0xc7a11b.missileConfig.skillTag != 120301) {
              continue;
            }
            if (_0xc7a11b.missileConfig.skillTag == 120301) {
              let _0x3c70b8 = getDistance(_0xc7a11b.Position, _0x3d5d0d.fsm.owner.Position);
              (!_0x3c23a1 || _0x3c23a1 > _0x3c70b8) && (_0x3f9e0d = _0xc7a11b, _0x3c23a1 = _0x3c70b8);
            }
          }
          if (_0x3f9e0d) {
            return _0x3f9e0d;
          }
        }
        break;
      case "红魔狩猎":
        for (let _0x2c9dc6 in window.fightMgr.fight.unitsManager.defenders) {
          let _0x2b582a = window.fightMgr.fight.unitsManager.defenders[_0x2c9dc6];
          if (_0x2b582a.Dead) {
            continue;
          }
          if (_0x2b582a.monsterConfig.name.indexOf("红魔") == -1) {
            continue;
          }
          if (_0x2b582a.monsterConfig.stageProgress > 0) {
            continue;
          }
          let _0xe53281 = getDistance(_0x2b582a.NextPosition, _0x3d5d0d.fsm.owner.Position);
          (!_0x3c23a1 || _0x3c23a1 > _0xe53281) && (_0x3f9e0d = _0x2b582a, _0x3c23a1 = _0xe53281);
        }
        if (_0x3f9e0d) {
          return _0x3f9e0d;
        }
        break;
      case "地狱兽潮":
        for (let _0x9d8536 in window.fightMgr.fight.sceneManager.sceneUnits) {
          let _0x975c = window.fightMgr.fight.sceneManager.sceneUnits[_0x9d8536];
          if (_0x975c.sceneUnitType != 9 || _0x975c._triggerTime == 0.7) {
            continue;
          }
          let _0x595beb = getDistance(_0x975c.Position, _0x3d5d0d.fsm.owner.Position);
          (!_0x3c23a1 || _0x3c23a1 > _0x595beb) && (_0x3f9e0d = _0x975c, _0x3c23a1 = _0x595beb);
        }
        if (_0x3f9e0d) {
          return _0x3f9e0d;
        }
        break;
    }
  }
  if (window.AutoCookingMaster) {
    let _0x3f7682 = window.CookingMasterBattleType.items[window.CookingMasterBattleType.selectIdx];
    switch (_0x3f7682) {
      case "饥饿陷阱":
      case "投食陷阱":
        let _0x3ee8a3 = [14060321, 14060322, 14060323],
          _0x5ce691 = [14060311, 14060312, 14060313],
          _0x333853 = _0x3d5d0d.getBuffByTypeId(14060321);
        if (!_0x333853) {
          return null;
        }
        let _0x12ed78 = _0x3ee8a3.indexOf(_0x333853.buffId),
          _0x3dfcfe = _0x3d5d0d.getBuffByTypeId(_0x5ce691[_0x12ed78]),
          _0x5a7116 = _0x3dfcfe ? _0x3dfcfe.getStack() : 0;
        if (_0x5a7116 >= 50) {
          return window.fightMgr.fight.renderer._fightSceneGO._guardians[0].unit;
        }
        return window.fightMgr.fight.renderer._fightSceneGO._guardians[_0x12ed78 + 1].unit;
      case "杂食猎场":
      case "肉食猎场":
      case "异食猎场":
        for (let _0x5ee584 in window.fightMgr.fight.unitsManager.defenders) {
          let _0x32b170 = window.fightMgr.fight.unitsManager.defenders[_0x5ee584];
          if (_0x32b170.Dead) {
            continue;
          }
          if (_0x32b170.monsterConfig && _0x32b170.monsterConfig.type != 2) {
            continue;
          }
          let _0x3ad6c2 = getDistance(_0x32b170.NextPosition, _0x3d5d0d.fsm.owner.Position);
          (!_0x3c23a1 || _0x3c23a1 > _0x3ad6c2) && (_0x3f9e0d = _0x32b170, _0x3c23a1 = _0x3ad6c2);
        }
        if (_0x3f9e0d) {
          return _0x3f9e0d;
        }
        for (let _0x529414 in window.fightMgr.fight.unitsManager.defenders) {
          let _0x5317dc = window.fightMgr.fight.unitsManager.defenders[_0x529414];
          if (_0x5317dc.Dead) {
            continue;
          }
          let _0x1bb5d6 = getDistance(_0x5317dc.NextPosition, _0x3d5d0d.fsm.owner.Position);
          (!_0x3c23a1 || _0x3c23a1 > _0x1bb5d6) && (_0x3f9e0d = _0x5317dc, _0x3c23a1 = _0x1bb5d6);
        }
        return _0x3f9e0d;
      case "厨神妙妙屋":
        let _0x377b54 = [0, 1, 3, 2];
        if (!window.fightMgr.fight.renderer._fightSceneGO._guardians.length) {
          return;
        }
        if (window.CookingMasterIndex < 3) {
          let _0xbad059 = false,
            _0x1d4b6b = null;
          for (let _0x329a73 = 0; _0x329a73 < 4; _0x329a73++) {
            let _0x2be595 = window.fightMgr.fight.renderer._fightSceneGO._guardians[_0x329a73];
            if (_0x2be595.unit.State != 8) {
              _0xbad059 = true;
              break;
            }
          }
          if (_0xbad059) {
            window.fightMgr.fight.renderer._fightSceneGO._guardians[_0x377b54[window.CookingMasterIndex]].unit.State == 16 && window.CookingMasterIndex++;
            window.CookingMasterIndex == window.CookingMasterLastIndex && window.CookingMasterIndex++;
            if (window.CookingMasterIndex < 3) {
              _0x1d4b6b = window.fightMgr.fight.renderer._fightSceneGO._guardians[_0x377b54[window.CookingMasterIndex]].unit;
            } else {
              const _0x5d322f = {
                sceneUnitType: 9999,
                NextPosition: window.fightMgr.rooms[window.fightMgr.rooms.length - 1].bornPosition
              };
              _0x1d4b6b = _0x5d322f;
            }
          } else {
            window.CookingMasterLastIndex = window.CookingMasterIndex;
            if (window.CookingMasterIndex < 2) {
              _0x1d4b6b = window.fightMgr.fight.renderer._fightSceneGO._guardians[_0x377b54[window.CookingMasterIndex + 1]].unit;
            } else {
              const _0x22bbb3 = {
                sceneUnitType: 9999,
                NextPosition: window.fightMgr.rooms[window.fightMgr.rooms.length - 1].bornPosition
              };
              _0x1d4b6b = _0x22bbb3;
            }
          }
          for (let _0x544f5f in window.fightMgr.fight.unitsManager.defenders) {
            let _0x30716e = window.fightMgr.fight.unitsManager.defenders[_0x544f5f];
            if (Number(_0x544f5f) == 0) {
              continue;
            }
            if (_0x30716e.Dead) {
              continue;
            }
            if (!_0x30716e.monsterConfig) {
              continue;
            }
            let _0x39d4b1 = getDistance(_0x30716e.NextPosition, _0x1d4b6b.NextPosition);
            if (_0x39d4b1 <= 450) {
              return _0x30716e;
            }
          }
          return _0x1d4b6b;
        }
        let _0x1aa682 = _0x3d5d0d.getBuffByTypeId(14060101);
        if (!_0x1aa682) {
          return null;
        }
        for (let _0x4d29a5 in window.fightMgr.fight.renderer._fightSceneGO._guardians) {
          let _0x3a6e2e = window.fightMgr.fight.renderer._fightSceneGO._guardians[_0x4d29a5],
            _0x5e7182 = _0x3a6e2e.unit.SkillComponent._skills[0].params.checkBuffId;
          if (_0x5e7182 == _0x1aa682.buffId) {
            return _0x3a6e2e.unit;
          }
        }
        const _0x976727 = {
          sceneUnitType: 9999,
          NextPosition: window.fightMgr.rooms[window.fightMgr.rooms.length - 1].bornPosition
        };
        return _0x976727;
    }
  }
  if (window.curStageCfg && window.curStageCfg.stageType != 1) {
    for (let _0x11e855 in window.fightMgr.fight.unitsManager.defenders) {
      let _0x4816bd = window.fightMgr.fight.unitsManager.defenders[_0x11e855];
      if (_0x4816bd.Dead) {
        continue;
      }
      if (_0x4816bd.monsterConfig && _0x4816bd.monsterConfig.type != 2) {
        continue;
      }
      let _0x248a27 = getDistance(_0x4816bd.NextPosition, _0x3d5d0d.fsm.owner.Position);
      (!_0x3c23a1 || _0x3c23a1 > _0x248a27) && (_0x3f9e0d = _0x4816bd, _0x3c23a1 = _0x248a27);
    }
    if (_0x3f9e0d) {
      return _0x3f9e0d;
    }
    for (let _0x1d7d98 in window.fightMgr.fight.unitsManager.defenders) {
      let _0x1821c0 = window.fightMgr.fight.unitsManager.defenders[_0x1d7d98];
      if (_0x1821c0.Dead) {
        continue;
      }
      let _0x2a610e = getDistance(_0x1821c0.NextPosition, _0x3d5d0d.fsm.owner.Position);
      (!_0x3c23a1 || _0x3c23a1 > _0x2a610e) && (_0x3f9e0d = _0x1821c0, _0x3c23a1 = _0x2a610e);
    }
    return _0x3f9e0d;
  }
  if (window.AutoPathType.selectIdx == 2) {
    if (window.Match && window.PassingMonster) {
      let _0x16a01c = Number(window.PassingMonsterDInput.string);
      if (_0x16a01c) {
        for (let _0x4fff50 in window.fightMgr.fight.unitsManager.defenders) {
          let _0x5c3e14 = window.fightMgr.fight.unitsManager.defenders[_0x4fff50];
          if (_0x5c3e14.Dead) {
            continue;
          }
          if (_0x5c3e14.monsterConfig && _0x5c3e14.monsterConfig.type != 2) {
            continue;
          }
          let _0x950ce4 = getDistance(_0x5c3e14.NextPosition, _0x3d5d0d.fsm.owner.Position);
          if (_0x950ce4 <= _0x16a01c) {
            return _0x5c3e14;
          }
        }
      }
    }
    let _0xc05b70 = window.fightMgr.rooms[window.fightMgr.rooms.length - 1],
      _0x19a757 = _0xc05b70.leaveTile,
      _0x4f3c2e = _0xc05b70.minTile;
    if (_0x4f3c2e && _0x19a757) {
      let _0x415962 = _0x4f3c2e.add(_0x19a757).mulSelf(128);
      const _0x6a280a = {
        sceneUnitType: 9999,
        NextPosition: _0x415962
      };
      return _0x6a280a;
    }
  }
  if (window.AutoPathType.selectIdx == 3) {
    for (let _0x566ce7 in window.fightMgr.fight.unitsManager.defenders) {
      let _0x596009 = window.fightMgr.fight.unitsManager.defenders[_0x566ce7];
      if (_0x596009.Dead) {
        continue;
      }
      if (_0x596009.monsterConfig && _0x596009.monsterConfig.type != 2) {
        continue;
      }
      let _0x422300 = getDistance(_0x596009.NextPosition, _0x3d5d0d.fsm.owner.Position);
      if (_0x422300 <= 1000) {
        return _0x596009;
      }
    }
    let _0x4e97c0 = window.fightMgr.rooms[window.fightMgr.rooms.length - 1],
      _0x317fbb = _0x4e97c0.leaveTile,
      _0x49a7b8 = _0x4e97c0.minTile;
    if (_0x49a7b8 && _0x317fbb) {
      let _0x504580 = _0x49a7b8.add(_0x317fbb).mulSelf(128);
      const _0x39dab5 = {
        sceneUnitType: 9999,
        NextPosition: _0x504580
      };
      return _0x39dab5;
    }
  }
  if (window.AutoPathType.selectIdx == 1) {
    for (let _0x5f10d3 in window.fightMgr.fight.unitsManager.defenders) {
      let _0x2bf88a = window.fightMgr.fight.unitsManager.defenders[_0x5f10d3];
      if (_0x2bf88a.Dead) {
        continue;
      }
      if (_0x2bf88a.monsterConfig && _0x2bf88a.monsterConfig.type != 2) {
        continue;
      }
      if (_0x2bf88a.name.indexOf("Guardian") != -1) {
        continue;
      }
      let _0x53aa43 = getDistance(_0x2bf88a.NextPosition, _0x3d5d0d.fsm.owner.Position);
      (!_0x3c23a1 || _0x3c23a1 > _0x53aa43) && (_0x3f9e0d = _0x2bf88a, _0x3c23a1 = _0x53aa43);
    }
    if (_0x3f9e0d) {
      return _0x3f9e0d;
    }
  }
  for (let _0x583f9e in window.fightMgr.fight.unitsManager.defenders) {
    let _0x4077c1 = window.fightMgr.fight.unitsManager.defenders[_0x583f9e];
    if (_0x4077c1.Dead) {
      continue;
    }
    if (_0x4077c1.name.indexOf("Guardian") != -1) {
      continue;
    }
    let _0x31d86e = getDistance(_0x4077c1.NextPosition, _0x3d5d0d.fsm.owner.Position);
    (!_0x3c23a1 || _0x3c23a1 > _0x31d86e) && (_0x3f9e0d = _0x4077c1, _0x3c23a1 = _0x31d86e);
  }
  return _0x3f9e0d;
}
function getRecentlyTargetSuper() {
  if (!window.fightMgr.fight.unitsManager.defenders || !window.fightMgr.fight.unitsManager.defenders.length) {
    return null;
  }
  let _0x11d846 = getBattlePlayer(),
    _0x537ba3 = null,
    _0x354241 = 0,
    _0x24ae9a = [];
  if (window.AutoDevil && window.AutoDevilAI) {
    let _0x5be2d5 = window.DevilBattleType.items[window.DevilBattleType.selectIdx];
    _0x5be2d5 == "自动适应" && (_0x5be2d5 = getDevilBattleTypeName());
    switch (_0x5be2d5) {
      case "暴食危机":
        for (let _0x5e29d1 in window.fightMgr.fight.sceneManager.sceneUnits) {
          let _0x1efd8b = window.fightMgr.fight.sceneManager.sceneUnits[_0x5e29d1];
          if (_0x1efd8b.sceneUnitType != 9 || _0x1efd8b._triggerTime == 0.3 || !_0x1efd8b.stageConfig || _0x1efd8b.stageConfig.type != 11) {
            continue;
          }
          let _0x4b0742 = getDistance(_0x1efd8b.Position, _0x11d846.fsm.owner.Position);
          if (_0x4b0742 >= 1500) {
            continue;
          }
          (!_0x354241 || _0x354241 > _0x4b0742) && (_0x537ba3 = _0x1efd8b, _0x354241 = _0x4b0742);
        }
        if (_0x537ba3) {
          return _0x537ba3;
        }
        break;
      case "霜烬回廊":
        for (let _0x43d3f8 in window.fightMgr.fight.unitsManager.defenders) {
          let _0x542437 = window.fightMgr.fight.unitsManager.defenders[_0x43d3f8];
          if (_0x542437.Dead) {
            continue;
          }
          if (!_0x542437._guardianConfig) {
            continue;
          }
          if (_0x542437._guardianConfig.name.indexOf("霜烬回廊火堆") == -1) {
            continue;
          }
          if (_0x542437._findDelay <= -3.2) {
            continue;
          }
          if (window.TorchIndex == 3) {
            continue;
          }
          if (window.TorchIndex == 4) {
            continue;
          }
          let _0x4d093e = getDistance(_0x542437.NextPosition, _0x11d846.fsm.owner.Position);
          (!_0x354241 || _0x354241 > _0x4d093e) && (_0x537ba3 = _0x542437, _0x354241 = _0x4d093e);
        }
        if (_0x537ba3) {
          window.TorchIndex = getTorchIndex(_0x537ba3);
          return _0x537ba3;
        } else {
          if (window.TorchIndex) {
            getTorchNum() == 2 && (window.TorchIndex = 3);
            if (getTorchNum() == 3 && window.TorchIndex != 4) {
              let _0x46c169 = getTorchCfg(window.TorchPoss[window.TorchIndex].id);
              _0x46c169 && _0x46c169._findDelay <= -3.2 && (window.TorchIndex = 4);
            }
            if (getTorchNum() == 4) {
              let _0x203ed1 = getTorchCfg(window.TorchPoss[window.TorchIndex].id);
              _0x203ed1 && _0x203ed1._findDelay <= -3.2 && (window.TorchIndex = 1);
            }
            const _0x51f95a = {
              id: 14050201,
              name: "霜烬回廊火堆"
            };
            let _0x3f101b = {
              _guardianConfig: _0x51f95a,
              Position: cc.v2(window.TorchPoss[window.TorchIndex].x, window.TorchPoss[window.TorchIndex].y)
            };
            return _0x3f101b;
          }
        }
        if (window.AutoBall) {
          for (let _0x4601c5 in window.fightMgr.fight.sceneManager.sceneUnits) {
            let _0x467790 = window.fightMgr.fight.sceneManager.sceneUnits[_0x4601c5];
            if (_0x467790.sceneUnitType == 4) {
              let _0x4a18e2 = window.fightMgr.collider.getNavigatorIndex(_0x467790.Position);
              if (_0x4a18e2 == -1) {
                continue;
              }
              let _0xb160e8 = getDistance(_0x467790.Position, _0x11d846.fsm.owner.Position);
              if (_0xb160e8 >= 800) {
                continue;
              }
              (!_0x354241 || _0x354241 > _0xb160e8) && (_0x537ba3 = _0x467790, _0x354241 = _0xb160e8);
            }
          }
          if (_0x537ba3) {
            return _0x537ba3;
          }
        }
        for (let _0x45e809 in window.fightMgr.fight.sceneManager.sceneUnits) {
          let _0x3f3d11 = window.fightMgr.fight.sceneManager.sceneUnits[_0x45e809];
          if (_0x3f3d11.sceneUnitType != 9 || _0x3f3d11._triggerTime == 0.3 || !_0x3f3d11.stageConfig || _0x3f3d11.stageConfig.type != 11) {
            continue;
          }
          let _0xdac6f = getDistance(_0x3f3d11.Position, _0x11d846.fsm.owner.Position);
          if (_0xdac6f >= 1500) {
            continue;
          }
          (!_0x354241 || _0x354241 > _0xdac6f) && (_0x537ba3 = _0x3f3d11, _0x354241 = _0xdac6f);
        }
        if (_0x537ba3) {
          return _0x537ba3;
        }
        break;
      case "触手之谜":
        if (window.tempTentacleList.length <= window.maxTentacleNum) {
          for (let _0x1753db in window.fightMgr.fight.sceneManager.sceneUnits) {
            let _0x4bc64a = window.fightMgr.fight.sceneManager.sceneUnits[_0x1753db];
            if (_0x4bc64a.sceneUnitType != 9 || _0x4bc64a._triggerTime == 0.3 || !_0x4bc64a.stageConfig || _0x4bc64a.stageConfig.type != 11) {
              continue;
            }
            let _0x3546ce = getDistance(_0x4bc64a.Position, _0x11d846.fsm.owner.Position);
            if (_0x3546ce >= 1500) {
              continue;
            }
            (!_0x354241 || _0x354241 > _0x3546ce) && (_0x537ba3 = _0x4bc64a, _0x354241 = _0x3546ce);
          }
          if (_0x537ba3) {
            return _0x537ba3;
          }
        }
        break;
    }
  }
  if (window.AutoBall) {
    for (let _0x2a91ea in window.fightMgr.fight.sceneManager.sceneUnits) {
      let _0x128715 = window.fightMgr.fight.sceneManager.sceneUnits[_0x2a91ea];
      if (_0x128715.sceneUnitType == 4) {
        let _0x20f497 = window.fightMgr.collider.getNavigatorIndex(_0x128715.Position);
        if (_0x20f497 == -1) {
          continue;
        }
        let _0x3fa165 = getDistance(_0x128715.Position, _0x11d846.fsm.owner.Position);
        if (_0x3fa165 >= 800) {
          continue;
        }
        (!_0x354241 || _0x354241 > _0x3fa165) && (_0x537ba3 = _0x128715, _0x354241 = _0x3fa165);
      }
    }
    if (_0x537ba3) {
      return _0x537ba3;
    }
  }
  if (window.AutoPylonun) {
    let _0x208ea7 = [];
    for (let _0x462a70 = 1; _0x462a70 <= 6; _0x462a70++) {
      if (window.AutoPylonunList.selectIdx[_0x462a70]) {
        switch (_0x462a70) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            _0x208ea7.push(_0x462a70 + 4);
            break;
          case 6:
            _0x208ea7.push(11);
            break;
        }
      }
    }
    for (let _0x544cf0 in window.fightMgr.fight.sceneManager.sceneUnits) {
      let _0x1720f8 = window.fightMgr.fight.sceneManager.sceneUnits[_0x544cf0];
      if (_0x1720f8.sceneUnitType != 9 || _0x1720f8._triggerTime == 0.7) {
        continue;
      }
      _0x1720f8.stageConfig && _0x208ea7.indexOf(_0x1720f8.stageConfig.type) != -1 && _0x24ae9a.push(_0x1720f8);
    }
    if (_0x24ae9a.length == 1) {
      return _0x24ae9a[0];
    }
    let _0x1d4cef = findNearestTarget(_0x11d846.Position, _0x24ae9a);
    if (_0x1d4cef) {
      return _0x1d4cef;
    }
  }
  if (window.AutoCookingMaster) {
    let _0x192e84 = window.CookingMasterBattleType.items[window.CookingMasterBattleType.selectIdx];
    switch (_0x192e84) {
      case "饥饿陷阱":
      case "投食陷阱":
        let _0x5de441 = [14060321, 14060322, 14060323],
          _0x37d8e3 = [14060311, 14060312, 14060313],
          _0x1bf0ea = _0x11d846.getBuffByTypeId(14060321);
        if (!_0x1bf0ea) {
          return null;
        }
        let _0x10ba9e = _0x5de441.indexOf(_0x1bf0ea.buffId),
          _0x2d193f = _0x11d846.getBuffByTypeId(_0x37d8e3[_0x10ba9e]),
          _0x31e469 = _0x2d193f ? _0x2d193f.getStack() : 0;
        if (_0x31e469 >= 50) {
          return window.fightMgr.fight.renderer._fightSceneGO._guardians[0].unit;
        }
        return window.fightMgr.fight.renderer._fightSceneGO._guardians[_0x10ba9e + 1].unit;
      case "杂食猎场":
      case "肉食猎场":
      case "异食猎场":
        for (let _0x2db67e in window.fightMgr.fight.unitsManager.defenders) {
          let _0x47f582 = window.fightMgr.fight.unitsManager.defenders[_0x2db67e];
          if (_0x47f582.Dead) {
            continue;
          }
          if (_0x47f582.monsterConfig && _0x47f582.monsterConfig.type != 2) {
            continue;
          }
          let _0x19e16f = getDistance(_0x47f582.NextPosition, _0x11d846.fsm.owner.Position);
          (!_0x354241 || _0x354241 > _0x19e16f) && (_0x537ba3 = _0x47f582, _0x354241 = _0x19e16f);
        }
        if (_0x537ba3) {
          return _0x537ba3;
        }
        for (let _0x12a7c9 in window.fightMgr.fight.unitsManager.defenders) {
          let _0x38b35d = window.fightMgr.fight.unitsManager.defenders[_0x12a7c9];
          if (_0x38b35d.Dead) {
            continue;
          }
          let _0x39536f = getDistance(_0x38b35d.NextPosition, _0x11d846.fsm.owner.Position);
          (!_0x354241 || _0x354241 > _0x39536f) && (_0x537ba3 = _0x38b35d, _0x354241 = _0x39536f);
        }
        return _0x537ba3;
      case "厨神妙妙屋":
        let _0x19b859 = [0, 1, 3, 2];
        if (!window.fightMgr.fight.renderer._fightSceneGO._guardians.length) {
          return;
        }
        if (window.CookingMasterIndex < 3) {
          let _0x3b79e6 = false,
            _0x3a9781 = null;
          for (let _0x2d9c17 = 0; _0x2d9c17 < 4; _0x2d9c17++) {
            let _0x32407c = window.fightMgr.fight.renderer._fightSceneGO._guardians[_0x2d9c17];
            if (_0x32407c.unit.State != 8) {
              _0x3b79e6 = true;
              break;
            }
          }
          if (_0x3b79e6) {
            window.fightMgr.fight.renderer._fightSceneGO._guardians[_0x19b859[window.CookingMasterIndex]].unit.State == 16 && window.CookingMasterIndex++;
            window.CookingMasterIndex == window.CookingMasterLastIndex && window.CookingMasterIndex++;
            if (window.CookingMasterIndex < 3) {
              _0x3a9781 = window.fightMgr.fight.renderer._fightSceneGO._guardians[_0x19b859[window.CookingMasterIndex]].unit;
            } else {
              const _0x425da3 = {
                sceneUnitType: 9999,
                NextPosition: window.fightMgr.rooms[window.fightMgr.rooms.length - 1].bornPosition
              };
              _0x3a9781 = _0x425da3;
            }
          } else {
            window.CookingMasterLastIndex = window.CookingMasterIndex;
            if (window.CookingMasterIndex < 2) {
              _0x3a9781 = window.fightMgr.fight.renderer._fightSceneGO._guardians[_0x19b859[window.CookingMasterIndex + 1]].unit;
            } else {
              const _0x109271 = {
                sceneUnitType: 9999,
                NextPosition: window.fightMgr.rooms[window.fightMgr.rooms.length - 1].bornPosition
              };
              _0x3a9781 = _0x109271;
            }
          }
          for (let _0x1fed4e in window.fightMgr.fight.unitsManager.defenders) {
            let _0x33fcf3 = window.fightMgr.fight.unitsManager.defenders[_0x1fed4e];
            if (Number(_0x1fed4e) == 0) {
              continue;
            }
            if (_0x33fcf3.Dead) {
              continue;
            }
            if (!_0x33fcf3.monsterConfig) {
              continue;
            }
            let _0x50127a = getDistance(_0x33fcf3.NextPosition, _0x3a9781.NextPosition);
            if (_0x50127a <= 450) {
              return _0x33fcf3;
            }
          }
          return _0x3a9781;
        }
        let _0x12509a = _0x11d846.getBuffByTypeId(14060101);
        if (!_0x12509a) {
          return null;
        }
        for (let _0x1ea9c2 in window.fightMgr.fight.renderer._fightSceneGO._guardians) {
          let _0x5ee2cd = window.fightMgr.fight.renderer._fightSceneGO._guardians[_0x1ea9c2],
            _0x543746 = _0x5ee2cd.unit.SkillComponent._skills[0].params.checkBuffId;
          if (_0x543746 == _0x12509a.buffId) {
            return _0x5ee2cd.unit;
          }
        }
        const _0x1677bf = {
          sceneUnitType: 9999,
          NextPosition: window.fightMgr.rooms[window.fightMgr.rooms.length - 1].bornPosition
        };
        return _0x1677bf;
    }
  }
  if (window.curStageCfg && window.curStageCfg.stageType != 1) {
    for (let _0x26faa8 in window.fightMgr.fight.unitsManager.defenders) {
      let _0x4f42b4 = window.fightMgr.fight.unitsManager.defenders[_0x26faa8];
      if (_0x4f42b4.Dead) {
        continue;
      }
      if (_0x4f42b4.monsterConfig && _0x4f42b4.monsterConfig.type != 2) {
        continue;
      }
      _0x24ae9a.push(_0x4f42b4);
    }
    if (_0x24ae9a.length == 1) {
      return _0x24ae9a[0];
    }
    let _0x3a2f46 = findNearestTarget(_0x11d846.Position, _0x24ae9a);
    if (_0x3a2f46) {
      return _0x3a2f46;
    }
    for (let _0x3221ce in window.fightMgr.fight.unitsManager.defenders) {
      let _0x58260f = window.fightMgr.fight.unitsManager.defenders[_0x3221ce];
      if (_0x58260f.Dead) {
        continue;
      }
      _0x24ae9a.push(_0x58260f);
    }
    if (_0x24ae9a.length == 1) {
      return _0x24ae9a[0];
    }
    _0x3a2f46 = findNearestTarget(_0x11d846.Position, _0x24ae9a);
    return _0x3a2f46;
  }
  if (window.AutoPathType.selectIdx == 2) {
    if (window.Match && window.PassingMonster) {
      let _0x1073ce = Number(window.PassingMonsterDInput.string);
      if (_0x1073ce) {
        for (let _0x5bb6f3 in window.fightMgr.fight.unitsManager.defenders) {
          let _0x264ecd = window.fightMgr.fight.unitsManager.defenders[_0x5bb6f3];
          if (_0x264ecd.Dead) {
            continue;
          }
          if (_0x264ecd.monsterConfig && _0x264ecd.monsterConfig.type != 2) {
            continue;
          }
          _0x24ae9a.push(_0x264ecd);
        }
        let _0x1408e2 = Math.ceil(_0x1073ce / 128);
        for (let _0x564292 in _0x24ae9a) {
          let _0xa905b = _0x24ae9a[_0x564292],
            _0x3eef6e = getDistance(_0xa905b.NextPosition, _0x11d846.fsm.owner.Position);
          if (_0x3eef6e <= _0x1073ce) {
            let _0x162292 = getTargetToPlayerAllPos(_0xa905b),
              _0x4b3659 = getPosRecentlycanStand(_0x11d846.Position),
              _0x9a0680 = getPosRecentlycanStand(_0xa905b.Position);
            if (!_0x4b3659 || !_0x9a0680) {
              continue;
            }
            let _0x54b7d7 = _0x4b3659.pos,
              _0x5a548f = _0x9a0680.pos;
            const _0x3b278b = {
              x: _0x54b7d7.x,
              y: _0x54b7d7.y
            };
            const _0x43333e = {
              x: _0x5a548f.x,
              y: _0x5a548f.y
            };
            let _0x4c86ea = aStar(new AStarNode(_0x3b278b, 1), new AStarNode(_0x43333e, 1), _0x162292);
            if (_0x4c86ea.length <= _0x1408e2) {
              return _0xa905b;
            }
          }
        }
      }
    }
    let _0x56be74 = window.fightMgr.rooms[window.fightMgr.rooms.length - 1],
      _0x5be5e2 = _0x56be74.leaveTile,
      _0x112b42 = _0x56be74.minTile;
    if (_0x112b42 && _0x5be5e2) {
      let _0x1e40d0 = _0x112b42.add(_0x5be5e2).mulSelf(128);
      const _0x809ea4 = {
        sceneUnitType: 9999,
        NextPosition: _0x1e40d0
      };
      return _0x809ea4;
    }
  }
  if (window.AutoPathType.selectIdx == 1) {
    for (let _0x3d6d59 in window.fightMgr.fight.unitsManager.defenders) {
      let _0x863985 = window.fightMgr.fight.unitsManager.defenders[_0x3d6d59];
      if (_0x863985.Dead) {
        continue;
      }
      if (_0x863985.monsterConfig && _0x863985.monsterConfig.type != 2) {
        continue;
      }
      if (_0x863985.name.indexOf("Guardian") != -1) {
        continue;
      }
      _0x24ae9a.push(_0x863985);
    }
    if (_0x24ae9a.length == 1) {
      return _0x24ae9a[0];
    }
    let _0x382b04 = findNearestTarget(_0x11d846.Position, _0x24ae9a);
    if (_0x382b04) {
      return _0x382b04;
    }
  }
  for (let _0x35213c in window.fightMgr.fight.unitsManager.defenders) {
    let _0x5edfa1 = window.fightMgr.fight.unitsManager.defenders[_0x35213c];
    if (_0x5edfa1.Dead) {
      continue;
    }
    if (_0x5edfa1.name.indexOf("Guardian") != -1) {
      continue;
    }
    _0x24ae9a.push(_0x5edfa1);
  }
  if (_0x24ae9a.length == 1) {
    return _0x24ae9a[0];
  }
  _0x537ba3 = findNearestTarget(_0x11d846.Position, _0x24ae9a);
  return _0x537ba3;
}
function getTorchIndex(_0x624c69) {
  let _0x58143a = [];
  for (let _0x58bce0 in window.fightMgr.fight.unitsManager.defenders) {
    let _0x2549c7 = window.fightMgr.fight.unitsManager.defenders[_0x58bce0];
    if (_0x2549c7.Dead) {
      continue;
    }
    if (!_0x2549c7._guardianConfig) {
      continue;
    }
    if (_0x2549c7._guardianConfig.name.indexOf("霜烬回廊火堆") == -1) {
      continue;
    }
    _0x58143a.push(_0x2549c7);
  }
  for (let _0x2a7f10 in _0x58143a) {
    let _0x4e3b45 = _0x58143a[_0x2a7f10];
    if (_0x4e3b45 == _0x624c69) {
      return Number(_0x2a7f10) + 1;
    }
  }
  return 1;
}
function getTorchNum() {
  let _0x55a7f5 = 0;
  for (let _0x46398e in window.fightMgr.fight.unitsManager.defenders) {
    let _0x3d7260 = window.fightMgr.fight.unitsManager.defenders[_0x46398e];
    if (_0x3d7260.Dead) {
      continue;
    }
    if (!_0x3d7260._guardianConfig) {
      continue;
    }
    if (_0x3d7260._guardianConfig.name.indexOf("霜烬回廊火堆") == -1) {
      continue;
    }
    _0x55a7f5++;
  }
  return _0x55a7f5;
}
function getTorchCfg(_0x25db2a) {
  let _0x433be8 = 0;
  for (let _0x146bba in window.fightMgr.fight.unitsManager.defenders) {
    let _0x5ed171 = window.fightMgr.fight.unitsManager.defenders[_0x146bba];
    if (_0x5ed171.Dead) {
      continue;
    }
    if (!_0x5ed171._guardianConfig) {
      continue;
    }
    if (_0x5ed171._guardianConfig.name.indexOf("霜烬回廊火堆") == -1) {
      continue;
    }
    _0x433be8++;
    if (_0x433be8 == _0x25db2a) {
      return _0x5ed171;
    }
  }
  return null;
}
function getBossRoomTower() {
  if (!window.fightMgr.fight.unitsManager.defenders) {
    return null;
  }
  let _0x424dc6 = getBattlePlayer(),
    _0x189700 = null;
  if (window.BossTower) {
    let _0x2b6fd0 = [];
    for (let _0x1bc236 = 1; _0x1bc236 <= 6; _0x1bc236++) {
      if (window.BossTowerList.selectIdx[_0x1bc236]) {
        switch (_0x1bc236) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            _0x2b6fd0.push(_0x1bc236 + 4);
            break;
          case 6:
            _0x2b6fd0.push(11);
            break;
        }
      }
    }
    let _0x2cdd38 = Number(window.BossTowerInput.string) || 1500;
    for (let _0x4cec3c in window.fightMgr.fight.sceneManager.sceneUnits) {
      let _0x25a9b5 = window.fightMgr.fight.sceneManager.sceneUnits[_0x4cec3c];
      if (_0x25a9b5.sceneUnitType != 9 || _0x25a9b5._triggerTime == 0.7) {
        continue;
      }
      if (_0x25a9b5.stageConfig && _0x2b6fd0.indexOf(_0x25a9b5.stageConfig.type) != -1 && window.fightMgr.fight.getCurrRoom() == _0x25a9b5.roomIdx) {
        let _0x4b0c26 = getDistance(_0x25a9b5.Position, _0x424dc6.fsm.owner.Position);
        if (_0x4b0c26 >= _0x2cdd38) {
          continue;
        }
        (!_0x2cdd38 || _0x2cdd38 > _0x4b0c26) && (_0x189700 = _0x25a9b5, _0x2cdd38 = _0x4b0c26);
      }
    }
    if (_0x189700) {
      return _0x189700;
    }
  }
  return null;
}
function getCoordinate(_0x3d453b, _0x38feac, _0x5d2b87) {
  let _0x144bba = _0x38feac.x - _0x3d453b.x,
    _0x2efca6 = _0x38feac.y - _0x3d453b.y,
    _0x5d42b2 = Math.atan2(_0x2efca6, _0x144bba),
    _0x4d5a24 = _0x3d453b.x + _0x5d2b87 * Math.cos(_0x5d42b2),
    _0x6b8bc7 = _0x3d453b.y + _0x5d2b87 * Math.sin(_0x5d42b2);
  const _0x43aa21 = {
    x: _0x4d5a24,
    y: _0x6b8bc7
  };
  return _0x43aa21;
}
function getDistance(_0x35a2c5, _0x43a1c0) {
  const _0x4bcb39 = _0x43a1c0.x - _0x35a2c5.x,
    _0x408a75 = _0x43a1c0.y - _0x35a2c5.y;
  return Math.sqrt(Math.pow(_0x4bcb39, 2) + Math.pow(_0x408a75, 2));
}
function getRandomBossAtkPos(_0x5e525e, _0x28790d, _0x52f0c5 = 1000) {
  let _0x44f302 = cc.v2(_0x5e525e.Position.x, _0x5e525e.Position.y),
    _0x4b7df9,
    _0x1c7ffe,
    _0x219b93,
    _0x2401de = 0,
    _0x419c72 = _0x28790d;
  while (_0x419c72 <= _0x28790d) {
    do {
      _0x2401de++;
      if (_0x2401de > _0x52f0c5) {
        _0x219b93 = false;
        continue;
      }
      const _0xf4bd9d = Math.random() * 2 * Math.PI,
        _0x289f2d = _0x419c72;
      _0x4b7df9 = _0x44f302.x + _0x289f2d * Math.cos(_0xf4bd9d);
      _0x1c7ffe = _0x44f302.y + _0x289f2d * Math.sin(_0xf4bd9d);
      _0x219b93 = true;
      let _0x4ed6b5 = window.fightMgr.collider.getNavigatorIndex(cc.v2(_0x4b7df9, _0x1c7ffe));
      if (_0x4ed6b5 == -1) {
        _0x219b93 = false;
        continue;
      }
      if (_0x4ed6b5 != window.fightMgr.fight.getCurrRoom()) {
        _0x219b93 = false;
        continue;
      }
      let _0x27ff3d = canStandHere1(cc.v2(_0x4b7df9, _0x1c7ffe), window.fightMgr.fight.getCurrRoom());
      if (!_0x27ff3d) {
        _0x219b93 = false;
        continue;
      }
    } while (!_0x219b93 && _0x2401de <= _0x52f0c5);
    if (_0x219b93) {
      return cc.v2(_0x4b7df9, _0x1c7ffe);
    }
  }
  return null;
}
function getStageBox() {
  let _0xf90475 = getBattlePlayer(),
    _0x3010c8 = null,
    _0x15428c = 0;
  for (let _0x7e6af7 in window.fightMgr.fight.dropLootManager._loots) {
    let _0x309656 = window.fightMgr.fight.dropLootManager._loots[_0x7e6af7];
    if (_0x309656 && _0x309656.loot && _0x309656._quality >= 8) {
      return _0x309656;
    }
  }
  for (let _0x307c4d in window.fightMgr.fight.sceneManager.sceneUnits) {
    let _0x3e7a1e = window.fightMgr.fight.sceneManager.sceneUnits[_0x307c4d];
    if (_0x3e7a1e.sceneUnitType == 1 || _0x3e7a1e.sceneUnitType == 2 || _0x3e7a1e.sceneUnitType == 3) {
      let _0xa1ee32 = getDistance(_0x3e7a1e.Position, _0xf90475.fsm.owner.Position);
      (!_0x15428c || _0x15428c > _0xa1ee32) && (_0x3010c8 = _0x3e7a1e, _0x15428c = _0xa1ee32);
    }
  }
  if (_0x3010c8) {
    return _0x3010c8;
  }
  for (let _0x563346 in window.fightMgr.fight.unitsManager.defenders) {
    let _0x4f5c1b = window.fightMgr.fight.unitsManager.defenders[_0x563346];
    if (_0x4f5c1b.Dead) {
      continue;
    }
    return _0x4f5c1b;
  }
  return null;
}
function checkLava() {
  let _0x2bce07 = getBattlePlayer();
  for (let _0x405148 in window.fightMgr.fight.missileManager._missiles) {
    let _0x43c548 = window.fightMgr.fight.missileManager._missiles[_0x405148];
    if (_0x43c548.missileConfig.skillTag == 140506 && checkLavaList(140506)) {
      let _0x352fda = getDistance(_0x43c548.Position, _0x2bce07.fsm.owner.Position);
      if (_0x352fda <= 220) {
        return true;
      }
    }
    if (_0x43c548.missileConfig.skillTag == 20203 && checkLavaList(20203)) {
      let _0x390eaa = getDistance(_0x43c548.Position, _0x2bce07.fsm.owner.Position);
      if (_0x390eaa <= 200) {
        return true;
      }
    }
    if (_0x43c548.missileConfig.skillTag == 20106 && checkLavaList(20106)) {
      let _0x8557bb = getDistance(_0x43c548.Position, _0x2bce07.fsm.owner.Position);
      if (_0x8557bb <= 200) {
        return true;
      }
    }
  }
}
function checkLavaList(_0x426e66) {
  if (!window.DevilEludeSkillList) {
    return false;
  }
  switch (_0x426e66) {
    case 140506:
      if (window.DevilEludeSkillList.selectIdx[1]) {
        return true;
      }
      break;
    case 20203:
      if (window.DevilEludeSkillList.selectIdx[2]) {
        return true;
      }
      break;
    case 20106:
      if (window.DevilEludeSkillList.selectIdx[3]) {
        return true;
      }
      break;
  }
  return false;
}
function getLavaObstacles1() {
  const _0x57b63e = {
    x: 610,
    y: 790
  };
  const _0x4dcc27 = {
    x: 1190,
    y: 230
  };
  const _0x2c4f5d = {
    topLeft: _0x57b63e,
    bottomRight: _0x4dcc27
  };
  const _0x56723f = {
    x: 100,
    y: 1500
  };
  const _0x268948 = {
    x: 500,
    y: 1200
  };
  const _0x267718 = {
    topLeft: _0x56723f,
    bottomRight: _0x268948
  };
  return [_0x2c4f5d, _0x267718];
}
function getLavaObstacles2() {
  let _0x17e8c0 = [];
  for (let _0x3aee05 in window.fightMgr.fight.missileManager._missiles) {
    let _0x19f73f = window.fightMgr.fight.missileManager._missiles[_0x3aee05];
    if (_0x19f73f.missileConfig.skillTag == 140506) {
      const _0x4052ae = {
        x: _0x19f73f.NextPosition.x,
        y: _0x19f73f.NextPosition.y
      };
      const _0x21a0bf = {
        center: _0x4052ae,
        radius: 220
      };
      _0x17e8c0.push(_0x21a0bf);
    }
    if (_0x19f73f.missileConfig.skillTag == 20106) {
      const _0x577c76 = {
        x: _0x19f73f.NextPosition.x,
        y: _0x19f73f.NextPosition.y
      };
      const _0x3bdb9c = {
        center: _0x577c76,
        radius: 200
      };
      _0x17e8c0.push(_0x3bdb9c);
    }
    if (_0x19f73f.missileConfig.skillTag == 20203) {
      const _0xe05849 = {
        x: _0x19f73f.NextPosition.x,
        y: _0x19f73f.NextPosition.y
      };
      const _0x222d34 = {
        center: _0xe05849,
        radius: 200
      };
      _0x17e8c0.push(_0x222d34);
    }
  }
  return _0x17e8c0;
}
function getRandomPointInRange(_0x14c399, _0x173d19, _0x322643, _0x3f686e, _0x459a3c = 1000, _0xd128a9 = 5) {
  const _0x18f147 = {
    x: 30,
    y: 1780
  };
  const _0x344d38 = {
    x: 1762,
    y: 1780
  };
  const _0x2e812a = {
    x: 30,
    y: 140
  };
  const _0x2c415d = {
    x: 1762,
    y: 140
  };
  const _0x28aed2 = {
    topLeft: _0x18f147,
    topRight: _0x344d38,
    bottomLeft: _0x2e812a,
    bottomRight: _0x2c415d
  };
  if (_0x14c399.x < _0x28aed2.topLeft.x || _0x14c399.x > _0x28aed2.topRight.x || _0x14c399.y < _0x28aed2.bottomLeft.y - 110 || _0x14c399.y > _0x28aed2.topLeft.y + 110) {
    return null;
  }
  let _0x1d86f1,
    _0x292ce2,
    _0x5a0b8d,
    _0x4ecb7a = 0,
    _0xc30a5 = _0x173d19;
  while (_0xc30a5 <= _0x173d19 * _0xd128a9) {
    do {
      _0x4ecb7a++;
      if (_0x4ecb7a > _0x459a3c) {
        _0xc30a5 *= 1.5;
        _0x4ecb7a = 0;
        break;
      }
      const _0x314b8f = Math.random() * 2 * Math.PI,
        _0x3716a1 = Math.random() * _0xc30a5;
      _0x1d86f1 = _0x14c399.x + _0x3716a1 * Math.cos(_0x314b8f);
      _0x292ce2 = _0x14c399.y + _0x3716a1 * Math.sin(_0x314b8f);
      if (_0x1d86f1 < _0x28aed2.topLeft.x || _0x1d86f1 > _0x28aed2.topRight.x || _0x292ce2 < _0x28aed2.bottomLeft.y || _0x292ce2 > _0x28aed2.topLeft.y) {
        _0x5a0b8d = false;
        continue;
      }
      _0x5a0b8d = true;
      for (const _0x7b98e4 of _0x322643) {
        if (_0x1d86f1 >= _0x7b98e4.topLeft.x && _0x1d86f1 <= _0x7b98e4.bottomRight.x && _0x292ce2 >= _0x7b98e4.bottomRight.y && _0x292ce2 <= _0x7b98e4.topLeft.y) {
          _0x5a0b8d = false;
          break;
        }
      }
      if (_0x5a0b8d) {
        for (const _0xb66807 of _0x3f686e) {
          const _0x110b46 = Math.sqrt(Math.pow(_0x1d86f1 - _0xb66807.center.x, 2) + Math.pow(_0x292ce2 - _0xb66807.center.y, 2));
          if (_0x110b46 <= _0xb66807.radius) {
            _0x5a0b8d = false;
            break;
          }
        }
      }
    } while (!_0x5a0b8d && _0x4ecb7a <= _0x459a3c);
    if (_0x5a0b8d) {
      const _0x267b95 = {
        x: _0x1d86f1,
        y: _0x292ce2
      };
      return _0x267b95;
    }
  }
  return null;
}
function startJoyStickRecord(_0x4420ab, _0x211e7e) {
  if (!window.UIJoyStick) {
    return;
  }
  let _0x3c4d93 = getMoveAngle(_0x4420ab, _0x211e7e);
  if (window.showConsole2) {
    console.log("操作角度:", _0x3c4d93);
  }
  let _0x4d3276 = 25;
  const _0x13f931 = {
    top: false,
    down: false,
    left: false,
    right: false
  };
  if (_0x3c4d93 >= 45 - _0x4d3276 && _0x3c4d93 <= 135 + _0x4d3276) {
    if (window.showConsole2) {
      console.log("上");
    }
    _0x13f931.top = true;
  }
  if (_0x3c4d93 >= 225 - _0x4d3276 && _0x3c4d93 <= 315 + _0x4d3276) {
    if (window.showConsole2) {
      console.log("下");
    }
    _0x13f931.down = true;
  }
  if (_0x3c4d93 >= 135 - _0x4d3276 && _0x3c4d93 <= 225 + _0x4d3276) {
    if (window.showConsole2) {
      console.log("左");
    }
    _0x13f931.left = true;
  }
  if (_0x3c4d93 <= 45 + _0x4d3276 || _0x3c4d93 >= 315 - _0x4d3276) {
    if (window.showConsole2) {
      console.log("右");
    }
    _0x13f931.right = true;
  }
  const _0x3849be = {
    keyCode: cc.macro.KEY.w
  };
  if (!_0x13f931.top) {
    window.UIJoyStick.onKeyUp(_0x3849be);
  }
  const _0x22fc01 = {
    keyCode: cc.macro.KEY.s
  };
  if (!_0x13f931.down) {
    window.UIJoyStick.onKeyUp(_0x22fc01);
  }
  const _0x30119d = {
    keyCode: cc.macro.KEY.a
  };
  if (!_0x13f931.left) {
    window.UIJoyStick.onKeyUp(_0x30119d);
  }
  const _0xc2fa29 = {
    keyCode: cc.macro.KEY.d
  };
  if (!_0x13f931.right) {
    window.UIJoyStick.onKeyUp(_0xc2fa29);
  }
  const _0x5c2679 = {
    keyCode: cc.macro.KEY.w
  };
  if (_0x13f931.top) {
    window.UIJoyStick.onKeyDown(_0x5c2679);
  }
  const _0x26fa33 = {
    keyCode: cc.macro.KEY.s
  };
  if (_0x13f931.down) {
    window.UIJoyStick.onKeyDown(_0x26fa33);
  }
  const _0x2264cf = {
    keyCode: cc.macro.KEY.a
  };
  if (_0x13f931.left) {
    window.UIJoyStick.onKeyDown(_0x2264cf);
  }
  const _0x3bc9df = {
    keyCode: cc.macro.KEY.d
  };
  if (_0x13f931.right) {
    window.UIJoyStick.onKeyDown(_0x3bc9df);
  }
}
function endJoyStickRecord() {
  if (!window.UIJoyStick || !window.UIJoyStick.keyboardDirection || !window.fightMgr || !window.fightMgr.fight) {
    return;
  }
  const _0x31e789 = {
    keyCode: cc.macro.KEY.w
  };
  window.UIJoyStick.onKeyUp(_0x31e789);
  const _0x750f5f = {
    keyCode: cc.macro.KEY.s
  };
  window.UIJoyStick.onKeyUp(_0x750f5f);
  const _0x5f0a65 = {
    keyCode: cc.macro.KEY.a
  };
  window.UIJoyStick.onKeyUp(_0x5f0a65);
  const _0xe2b655 = {
    keyCode: cc.macro.KEY.d
  };
  window.UIJoyStick.onKeyUp(_0xe2b655);
}
window.StartAutoAttack = false;
function openAutoAttack() {
  window.StartAutoAttack = true;
}
function closeAutoAttack() {
  window.StartAutoAttack = false;
  endJoyStickRecord();
}
function getBattlePlayer() {
  if (!window.fightMgr || !window.fightMgr.fight) {
    return null;
  }
  if (!window.fightMgr.fight.teamComponent) {
    if (window.fightMgr.fight.components[0].playerIndex) {
      return window.fightMgr.fight.components[0].heroStateDatas[window.fightMgr.fight.components[0].playerIndex];
    }
    return window.fightMgr.fight.components[0].hero;
  }
  for (let _0x381339 in window.fightMgr.fight.teamComponent.heroStateDatas) {
    let _0x54c395 = window.fightMgr.fight.teamComponent.heroStateDatas[_0x381339];
    if (_0x54c395 && _0x54c395.isPlayerHero) {
      return window.fightMgr.fight.unitsManager.attackers[_0x381339];
    }
  }
}
function getBattleLevelCfg() {
  let _0x2ca423 = window.BattleType.items[window.BattleType.selectIdx],
    _0x1c4980 = Number(window.BattleLevelInput.string);
  if (_0x2ca423 == "魔王") {
    for (let _0x4da468 in gameConfig.DemonFloor) {
      let _0x4c8d59 = gameConfig.DemonFloor[_0x4da468];
      if (_0x4c8d59.name == _0x2ca423 + " " + _0x1c4980) {
        return _0x4c8d59;
      }
    }
  } else {
    for (let _0xa3c0b4 in gameConfig.SanctumFloor) {
      let _0x31a5d4 = gameConfig.SanctumFloor[_0xa3c0b4];
      if (_0x31a5d4.name == _0x2ca423 + " " + _0x1c4980) {
        return _0x31a5d4;
      }
    }
  }
  return null;
}
function getDevilBattleLevelCfg() {
  let _0x1b8cf0 = 0,
    _0x47280e = Service._heroService.profession;
  switch (window.DevilBattleType.items[window.DevilBattleType.selectIdx]) {
    case "触手之谜":
      _0x1b8cf0 = (_0x47280e - 1) * 4 + 1;
      break;
    case "霜烬回廊":
      _0x1b8cf0 = (_0x47280e - 1) * 4 + 2;
      break;
    case "暴食危机":
      _0x1b8cf0 = (_0x47280e - 1) * 4 + 3;
      break;
    case "熔岩地狱":
      _0x1b8cf0 = (_0x47280e - 1) * 4 + 4;
      break;
    case "自动适应":
      _0x1b8cf0 = getDevilBattleType();
      break;
  }
  let _0x50eead = window.Service._devilService._devils.get(_0x1b8cf0).point + 1,
    _0x568168 = Number(window.DevilBattleTLevelInput.string);
  window.AutoDevilClimb && (_0x568168 = _0x50eead);
  if (_0x568168 > _0x50eead) {
    return null;
  }
  for (let _0x1789d4 in window.configList.StageDevil.list) {
    let _0x5db1f9 = window.configList.StageDevil.list[_0x1789d4];
    if (_0x5db1f9.type == _0x1b8cf0 && _0x5db1f9.level == _0x568168) {
      return _0x5db1f9;
    }
  }
  return null;
}
function getDevilBattleType() {
  let _0x47d871 = 0,
    _0x4b75c4 = Service._heroService.profession,
    _0x2f5ffc = (_0x4b75c4 - 1) * 4 + 1,
    _0x21a04a = (_0x4b75c4 - 1) * 4 + 2,
    _0x5b4125 = (_0x4b75c4 - 1) * 4 + 3,
    _0x3585d2 = (_0x4b75c4 - 1) * 4 + 4;
  !Service._devilService.isDevilLocked(_0x2f5ffc) && (_0x47d871 = (_0x4b75c4 - 1) * 4 + 1);
  !Service._devilService.isDevilLocked(_0x21a04a) && (_0x47d871 = (_0x4b75c4 - 1) * 4 + 2);
  !Service._devilService.isDevilLocked(_0x5b4125) && (_0x47d871 = (_0x4b75c4 - 1) * 4 + 3);
  !Service._devilService.isDevilLocked(_0x3585d2) && (_0x47d871 = (_0x4b75c4 - 1) * 4 + 4);
  return _0x47d871;
}
function getDevilBattleTypeName() {
  let _0x2678d0 = Service._heroService.profession,
    _0x5a1796 = (_0x2678d0 - 1) * 4 + 1,
    _0x3e64bd = (_0x2678d0 - 1) * 4 + 2,
    _0x22b521 = (_0x2678d0 - 1) * 4 + 3,
    _0x18f822 = (_0x2678d0 - 1) * 4 + 4;
  if (!Service._devilService.isDevilLocked(_0x5a1796)) {
    return "触手之谜";
  }
  if (!Service._devilService.isDevilLocked(_0x3e64bd)) {
    return "霜烬回廊";
  }
  if (!Service._devilService.isDevilLocked(_0x22b521)) {
    return "暴食危机";
  }
  if (!Service._devilService.isDevilLocked(_0x18f822)) {
    return "熔岩地狱";
  }
}
function InfiniteKillBOSS() {
  let _0xcc91dc = getBattlePlayer();
  window.fightMgr.fight.unitsManager.showBoss();
  let _0x15a60b = window.fightMgr.fight.unitsManager.boss.monsterConfig;
  if (!_0x15a60b) {
    return;
  }
  let _0x2fb3bd = new Map();
  _0x2fb3bd.set(_0x15a60b.id, 1);
  let _0x1def8f = getSkillData(),
    _0x350ca5 = [window.fightMgr.fight.unitsManager.boss];
  window.fightMgr.fight.executeSkillAction(_0x1def8f, _0xcc91dc, _0x350ca5, null, null);
  let _0x4bd1bf = [];
  for (let _0x2bfa77 in _0x350ca5) {
    let _0x5f0245 = _0x350ca5[_0x2bfa77];
    if (!_0x5f0245.DeadData.length) {
      showTips("【副本】数据错误停止战斗", true);
      return;
    }
    const _0x33fe87 = {
      role: _0x5f0245,
      hurtData: _0x5f0245.DeadData
    };
    _0x4bd1bf.push(_0x33fe87);
  }
  window.fightMgr.fight.fightService.reportMonsterDead(_0x4bd1bf);
  window.fightMgr.fight.fightService.killMonster(_0x2fb3bd, Math.floor(window.fightMgr.fight.fightTime)).then(_0x32e0c6 => {
    _0x32e0c6.monsters.forEach(function (_0x57f480, _0x2c4487) {
      let _0x3fa2fe = window.gameConfig.Monster[_0x2c4487],
        _0x3c863b = _0x3fa2fe.type === 4,
        _0x1df257 = _0x32e0c6.stageLoots.get(_0x2c4487),
        _0xc00af8 = 0;
      window.fightMgr.dropLoots(cc.v2(_0xcc91dc.NextPosition.x, _0xcc91dc.NextPosition.y), null, _0x1df257, !1, _0x3c863b, _0x3c863b, _0xc00af8);
    });
  });
}
function LostBattle() {
  window.fightMgr.fight.updateFightProgress(100000);
  window.LostBattleTIme = setInterval(() => {
    if (!window.fightMgr.fight.unitsManager.boss) {
      return;
    }
    let _0x3bc245 = window.fightMgr.fight.unitsManager.boss.monsterConfig;
    if (!_0x3bc245) {
      return;
    }
    clearInterval(window.LostBattleTIme);
    let _0x41fab8 = [];
    for (let _0x5c3a50 in window.fightMgr.rooms) {
      let _0x5792b5 = window.fightMgr.rooms[_0x5c3a50];
      if (_0x5792b5) {
        _0x41fab8.push(_0x5792b5);
      }
    }
    window.fightMgr.rooms = _0x41fab8;
    window.Service.stageFail();
    window.Game.back2City(false);
    window.fightMgr.fight.fightTime = 0;
  }, 1000);
}
function lostBattleReward() {
  KillFullMonster();
  if (!window.fightMgr) {
    return;
  }
  for (let _0x46d39a in window.fightMgr.fight.dropLootManager._loots) {
    let _0x36cf42 = window.fightMgr.fight.dropLootManager._loots[_0x46d39a];
    _0x36cf42 && _0x36cf42.loot && window.fightMgr.fight.dropLootManager.addPickLoot(_0x36cf42);
  }
  window.fightMgr.pickUpDropLoot();
}
function KillFullMonster() {
  if (!window.fightMgr) {
    return;
  }
  let _0xf0f408 = new Map();
  for (let _0x4698a1 in window.fightMgr.rooms) {
    let _0x2bc82f = window.fightMgr.rooms[_0x4698a1];
    if (!_0x2bc82f) {
      continue;
    }
    for (let _0x3f74fa in _0x2bc82f.monsters) {
      let _0x34bc0a = _0x2bc82f.monsters[_0x3f74fa],
        _0x5dcf51 = _0xf0f408.get(_0x34bc0a.monsterId) || 0;
      _0x5dcf51++;
      _0xf0f408.set(_0x34bc0a.monsterId, _0x5dcf51);
    }
  }
  window.fightMgr.fight.fightService.killMonster(_0xf0f408, Math.floor(window.fightMgr.fight.fightTime)).then(_0x405c1a => {
    window.DorpData = _0x405c1a;
    _0x405c1a.monsters.forEach(function (_0xec3e3a, _0x1bfc32) {
      let _0x2ffb5a = window.gameConfig.Monster[_0x1bfc32],
        _0x19286f = _0x2ffb5a.type === 4,
        _0x4db95c = _0x405c1a.stageLoots.get(_0x1bfc32),
        _0x4e9548 = 0;
      window.fightMgr.dropLoots(cc.v2(window.fightMgr.fight.unitsManager.hero.NextPosition.x, window.fightMgr.fight.unitsManager.hero.NextPosition.y), null, _0x4db95c, !1, _0x19286f, _0x19286f, _0x4e9548);
    });
  });
}
window.battleSkill = 0;
function getSkillData() {
  let _0x8068ac = null;
  if (window.battleSkill) {
    _0x8068ac = window.gameConfig.Missile[window.battleSkill].onHit[0];
  } else {
    for (let _0x17ed31 = window.Service._skillService.talentData.skillBattleSkillId.length - 1; _0x17ed31 >= 0; _0x17ed31--) {
      let _0x523185 = window.Service._skillService.talentData.skillBattleSkillId[_0x17ed31],
        _0x5d7161 = false,
        _0x1d6586 = window.gameConfig.BattleSkill[_0x523185];
      if (_0x1d6586.priority >= 4) {
        continue;
      }
      for (let _0xdc4116 in _0x1d6586.actions) {
        let _0x4392b5 = _0x1d6586.actions[_0xdc4116],
          _0xca4650 = window.gameConfig.Missile[_0x4392b5.actionCode];
        if (_0xca4650 && _0xca4650.onHit.length) {
          _0x8068ac = _0xca4650.onHit[0];
          _0x5d7161 = true;
          break;
        }
      }
      if (_0x5d7161) {
        break;
      }
    }
  }
  return _0x8068ac;
}
function KillMonster40() {
  window.fightMgr.fight.fightTime += 120;
  for (let _0x50cc47 = 0; _0x50cc47 < 4; _0x50cc47++) {
    setTimeout(() => {
      window.fightMgr.fight.generateNextRoom();
    }, _0x50cc47 * 700);
  }
  setTimeout(() => {
    KillFullMonster();
  }, 1000);
}
function enterAllRoom() {
  if (!window.fightMgr) {
    return;
  }
  showTips("【副本】准备进入全部房间", true);
  for (let _0x447030 = 0; _0x447030 < 99; _0x447030++) {
    setTimeout(() => {
      showTips("【副本】开启房间" + _0x447030, true);
      window.fightMgr.fight.generateNextRoom();
    }, _0x447030 * 700);
  }
}
function enterRoom() {
  if (!window.fightMgr) {
    return;
  }
  showTips("【副本】进入下一个房间", true);
  window.fightMgr.fight.generateNextRoom();
}
function addBattleTime() {
  if (!window.fightMgr) {
    return;
  }
  showTips("【副本】战斗时间+10秒", true);
  window.fightMgr.fight.fightTime += 10;
}
function openAutoFullPickup() {
  showTips("【副本】开启全图自动拾取", true);
  closeAutoFullPickup();
  window.AutoFullPickupTime = setInterval(() => {
    startAutoFullPickup();
  }, 100);
}
function closeAutoFullPickup() {
  clearInterval(window.AutoFullPickupTime);
}
function startAutoFullPickup() {
  let _0x237a93 = getBattlePlayer();
  if (!window.fightMgr || !window.fightMgr.fight.unitsManager) {
    return;
  }
  for (let _0xff729e in window.fightMgr.fight.dropLootManager._loots) {
    let _0x5c28a8 = window.fightMgr.fight.dropLootManager._loots[_0xff729e];
    _0x5c28a8 && _0x5c28a8.loot && (_0x5c28a8.Position.x = _0x237a93.NextPosition.x, _0x5c28a8.Position.y = _0x237a93.NextPosition.y);
  }
}
function openAutoFullChest() {
  showTips("【副本】开启全屏自动开宝箱", true);
  closeAutoFullChest();
  window.AutoFullChestTime = setInterval(() => {
    startAutoFullChest();
  }, 200);
}
function closeAutoFullChest() {
  clearInterval(window.AutoFullChestTime);
}
function startAutoFullChest() {
  let _0x444838 = getBattlePlayer();
  if (!window.fightMgr) {
    return;
  }
  for (let _0xeff112 in window.fightMgr.fight.sceneManager.sceneUnits) {
    let _0x19c93e = window.fightMgr.fight.sceneManager.sceneUnits[_0xeff112];
    (_0x19c93e.sceneUnitType == 1 || _0x19c93e.sceneUnitType == 2 || _0x19c93e.sceneUnitType == 3) && _0x444838.Position && window.fightMgr.onInteract(_0x19c93e, cc.v2(_0x444838.Position.x, _0x444838.Position.y));
  }
}
function openAutoFullBalls() {
  showTips("【副本】开启全屏捡血球", true);
  closeAutoFullBalls();
  window.AutoFullBallsTime = setInterval(() => {
    startAutoFullBalls();
  }, 200);
}
function closeAutoFullBalls() {
  clearInterval(window.AutoFullBallsTime);
}
function startAutoFullBalls() {
  let _0x159965 = getBattlePlayer();
  if (!window.fightMgr) {
    return;
  }
  for (let _0x2b7c5b in window.fightMgr.fight.sceneManager.sceneUnits) {
    let _0x377e24 = window.fightMgr.fight.sceneManager.sceneUnits[_0x2b7c5b];
    _0x377e24.sceneUnitType == 4 && (_0x377e24.Position.x = _0x159965.NextPosition.x, _0x377e24.Position.y = _0x159965.NextPosition.y);
  }
}
function openAutoFullAttract() {
  showTips("【副本】开启全屏吸怪", true);
  closeAutoFullAttract();
  window.AutoFullAttractTime = setInterval(() => {
    startAutoFullAttract();
  }, 100);
}
function closeAutoFullAttract() {
  clearInterval(window.AutoFullAttractTime);
}
function startAutoFullAttract() {
  let _0x5377d9 = getBattlePlayer();
  if (!window.fightMgr || !window.fightMgr.fight._defenders) {
    return;
  }
  for (let _0x5d0a0e in window.fightMgr.fight.unitsManager.defenders) {
    let _0x29027e = window.fightMgr.fight.unitsManager.defenders[_0x5d0a0e];
    _0x29027e.NextPosition.x = _0x5377d9.NextPosition.x + 100;
    _0x29027e.NextPosition.y = _0x5377d9.NextPosition.y;
  }
}
function DelBagEquip() {
  showTips("【装备】一键分解背包", true);
  let _0x582cdc = window.Service._equipService.getInBagUniqueIds();
  _0x582cdc.length ? (showTips("一键分解成功", true), window.Service.deleteEquips(_0x582cdc).then(_0x2ad79b => {
    if (_0x2ad79b.equipIds && _0x2ad79b.equipIds.length) {
      for (let _0x3970ad in _0x2ad79b.equipIds) {
        let _0x400a37 = _0x2ad79b.equipIds[_0x3970ad];
        window.Service._equipService.inBag.delete(_0x400a37);
      }
    }
  })) : showTips("没有可分解装备", true);
}
function openAutoResolveEquip() {
  showTips("【装备】开启自动分解", true);
  closeAutoResolveEquip();
  window.AutoResolveEquipTime = setInterval(() => {
    startAutoResolveEquip();
  }, 1000);
}
function closeAutoResolveEquip() {
  clearInterval(window.AutoResolveEquipTime);
}
function startAutoResolveEquip() {
  let _0xa8307a = [];
  for (let _0x161b8c = 1; _0x161b8c <= 9; _0x161b8c++) {
    window.EquipQulityList.selectIdx[_0x161b8c] && _0xa8307a.push(10 - _0x161b8c);
  }
  let _0x1e11e7 = [];
  window.Service._equipService.inBag.forEach(_0x56b503 => {
    _0x56b503.conf.quality < 8 && _0xa8307a.indexOf(_0x56b503.conf.quality) != -1 && !_0x56b503.gdEquip.locked && _0x1e11e7.push(_0x56b503.gdEquip.id);
  });
  _0x1e11e7.length && (findBagEquip(), window.Service.deleteEquips(_0x1e11e7).then(_0x5ab307 => {
    if (_0x5ab307.equipIds && _0x5ab307.equipIds.length) {
      for (let _0x187ea4 in _0x5ab307.equipIds) {
        let _0x6654ae = _0x5ab307.equipIds[_0x187ea4];
        window.Service._equipService.inBag.delete(_0x6654ae);
      }
    }
  }));
  let _0x157eb6 = [],
    _0x2ab5b1 = [];
  window.Service._equipService.inBag.forEach(_0x44b70d => {
    _0x2ab5b1.push(_0x44b70d.gdEquip.id);
  });
  for (let _0x359ab6 in _0x2ab5b1) {
    let _0x390e5a = window.Service._equipService.inBag.get(_0x2ab5b1[_0x359ab6]);
    if (_0x390e5a && _0x390e5a.conf.quality >= 8 && _0xa8307a.indexOf(_0x390e5a.conf.quality) != -1) {
      if (!(_0x390e5a.gdEquip.locked || window.RetainBlessed && _0x390e5a.gdEquip.blessed)) {
        _0x157eb6.push(_0x390e5a.gdEquip.id);
        break;
      }
    }
  }
  _0x157eb6.length && (findBagEquip(), window.Service.deleteEquips(_0x157eb6).then(_0x7b6f34 => {
    if (_0x7b6f34.equipIds && _0x7b6f34.equipIds.length) {
      for (let _0x53bb4e in _0x7b6f34.equipIds) {
        let _0x5b49f2 = _0x7b6f34.equipIds[_0x53bb4e];
        window.Service._equipService.inBag.delete(_0x5b49f2);
      }
    }
  }));
}
function openAutoInfiniteThunder() {
  showTips("【副本】开启无限雷电", true);
  closeAutoInfiniteThunder();
  window.AutoInfiniteThunderTime = setInterval(() => {
    startAutoInfiniteThunder();
  }, 1000);
}
function closeAutoInfiniteThunder() {
  clearInterval(window.AutoInfiniteThunderTime);
}
function startAutoInfiniteThunder() {
  let _0x1b0d53 = getBattlePlayer();
  if (!window.fightMgr || !window.fightMgr.fight.unitsManager || !_0x1b0d53) {
    return;
  }
  _0x1b0d53.addBuff(30005, _0x1b0d53);
}
let tipsList = [];
function showTips(_0x72809f, _0x590319 = false) {
  if (!_0x590319 && !window.ShowTips) {
    return;
  }
  changeTipsLabelPos();
  let _0x2216ff = new cc.Node("labelNode");
  _0x2216ff.group = "ui";
  _0x2216ff.x = 0;
  _0x2216ff.y = 500;
  let _0x2ccbcb = _0x2216ff.addComponent(cc.Label);
  _0x2ccbcb.node.color = cc.color().fromHEX("ffffff");
  let _0x1d5312 = _0x2216ff.addComponent(cc.LabelOutline);
  _0x1d5312.width = 2;
  _0x1d5312.color = cc.color().fromHEX("000000");
  _0x2ccbcb.string = _0x72809f;
  _0x2ccbcb.fontSize = 34;
  tipsList.push(_0x2216ff);
  cc.Canvas.instance.node.addChild(_0x2216ff);
  const _0x432118 = {
    opacity: 0
  };
  cc.tween(_0x2216ff).to(2, {}).to(1, _0x432118).call(function (_0x3a0625) {
    let _0x4afb6e = tipsList.indexOf(_0x3a0625);
    tipsList.splice(_0x4afb6e, 1);
    _0x3a0625.destroy();
  }, _0x2216ff).start();
  return _0x2216ff;
}
function changeTipsLabelPos() {
  for (let _0x4ef601 in tipsList) {
    let _0x29a515 = tipsList[_0x4ef601];
    _0x29a515.y = 500 + 36 * (tipsList.length - tipsList.indexOf(_0x29a515));
  }
}
function createLabel(_0x2942ed, _0x569e42, _0x55af9d, _0x5b5be9, _0xb7caab, _0x5c0914, _0xab5c33, _0x4d0423, _0x1dcedd = false, _0x4aa4aa) {
  let _0x2e46ed = new cc.Node(_0x2942ed);
  if (_0x1dcedd) {
    _0x2e46ed.anchorX = 0;
  }
  _0x2e46ed.x = _0xb7caab;
  _0x2e46ed.y = _0x5c0914;
  _0x2e46ed.color = cc.color().fromHEX(_0x55af9d);
  let _0x371b55 = _0x2e46ed.addComponent(cc.Label),
    _0x205af7 = _0x2e46ed.addComponent(cc.LabelOutline);
  _0x205af7.width = 2;
  _0x205af7.color = cc.color().fromHEX(_0x5b5be9);
  _0x371b55.string = _0x569e42;
  _0x371b55.fontSize = _0xab5c33;
  _0x2e46ed.label = _0x371b55;
  _0x4d0423.addChild(_0x2e46ed);
  _0x4aa4aa && _0x2e46ed.on(cc.Node.EventType.TOUCH_END, () => {
    _0x4aa4aa(_0x371b55, _0x205af7);
  }, this);
  return _0x2e46ed;
}
function createIcon(_0x573eed, _0x24fa04, _0x203f9e, _0x25c423, _0x3beb15, _0xc89bb4, _0x57a753, _0xbd8b6f = true, _0xfb4fe2 = null) {
  let _0x41c5eb = new cc.Node(_0x573eed);
  _0x41c5eb.active = _0xbd8b6f;
  _0x41c5eb.x = _0x24fa04;
  _0x41c5eb.y = _0x203f9e;
  _0x41c5eb.width = _0x25c423;
  _0x41c5eb.height = _0x3beb15;
  cc.loader.load(_0xc89bb4, function (_0x42cdda, _0x246356) {
    let _0x5cc024 = new cc.SpriteFrame();
    _0x5cc024.setTexture(_0x246356);
    _0x41c5eb.addComponent(cc.Sprite).spriteFrame = _0x5cc024;
    if (_0xfb4fe2) {
      _0x41c5eb.on(cc.Node.EventType.TOUCH_END, () => {
        _0xfb4fe2(_0x41c5eb);
      }, this);
    }
    _0x57a753.addChild(_0x41c5eb);
  });
  return _0x41c5eb;
}
function createNode(_0x51f57b, _0x4a9f16, _0x4bfdd5, _0x2be99a, _0x53ac38, _0x14a80e, _0x4dafc7, _0x32a856 = true, _0x405b1c = null) {
  let _0x58bec4 = new cc.Node(_0x51f57b);
  _0x58bec4.active = _0x32a856;
  _0x58bec4.x = _0x4a9f16;
  _0x58bec4.y = _0x4bfdd5;
  _0x58bec4.width = _0x2be99a;
  _0x58bec4.height = _0x53ac38;
  var _0x5c99da = parseInt(_0x14a80e.substr(0, 2), 16),
    _0x59cf60 = parseInt(_0x14a80e.substr(2, 2), 16),
    _0x309855 = parseInt(_0x14a80e.substr(4, 2), 16);
  let _0x246aee = new cc.Texture2D(),
    _0x4f7d5b = new cc.SpriteFrame();
  _0x246aee.initWithData(new Uint8Array([_0x5c99da, _0x59cf60, _0x309855]), cc.Texture2D.PixelFormat.RGB888, 1, 1);
  _0x4f7d5b.setTexture(_0x246aee);
  _0x4f7d5b.setRect(cc.rect(0, 0, _0x2be99a, _0x53ac38));
  _0x58bec4.addComponent(cc.Sprite).spriteFrame = _0x4f7d5b;
  if (_0x405b1c) {
    _0x58bec4.on(cc.Node.EventType.TOUCH_END, () => {
      _0x405b1c(_0x58bec4);
    }, this);
  }
  _0x4dafc7.addChild(_0x58bec4);
  return _0x58bec4;
}
function createIconButton(_0x4b4569, _0x539d8d, _0x4679b1, _0x540bdc, _0x179714, _0x5d7897, _0x2634b9, _0x51b739, _0x5cebd8, _0x25d79a, _0x2217a5, _0x33cc41) {
  let _0x1e6f7a = createIcon(_0x4b4569, _0x539d8d, _0x4679b1, _0x540bdc, _0x179714, window.ResUrl + _0x5d7897, _0x2217a5, true, _0x584175 => {
      if (_0x33cc41) {
        _0x33cc41();
      }
    }),
    _0x3c4423 = createLabel(_0x4b4569, _0x2634b9, _0x51b739, _0x5cebd8, 0, -(_0x179714 - _0x25d79a) / 2 - 5, _0x25d79a, _0x1e6f7a);
  _0x1e6f7a.btnLabel = _0x3c4423;
  return _0x1e6f7a;
}
function createToggleButton(_0x3df60e, _0x400144, _0x341a89, _0x3c582f, _0x5ec313, _0xabac0d, _0x13efba, _0x41671d, _0x4b3a11, _0x5357d4) {
  let _0xa08c5c = createNode(_0x3df60e, _0x5ec313, _0xabac0d + 8, 180, 40, "ffffff", _0x41671d, true, _0x2d57d0 => {
    _0x5357d4 && _0x5357d4(_0xa08c5c);
  });
  if (_0x4b3a11) {
    _0xa08c5c.anchorX = 0;
  }
  _0xa08c5c.getComponent(cc.Sprite).spriteFrame = null;
  let _0x5ea0e9 = createIcon("select1", 17, 0, 0, 0, window.ResUrl + "select_1.png", _0xa08c5c, true);
  _0x5ea0e9.active = true;
  _0xa08c5c.select1 = _0x5ea0e9;
  let _0x3dd396 = createIcon("select2", 17, 0, 0, 0, window.ResUrl + "select_2.png", _0xa08c5c, true);
  _0x3dd396.active = false;
  _0xa08c5c.select2 = _0x3dd396;
  let _0x4a2517 = createLabel("label1", _0x400144, _0x341a89, _0x3c582f, 38, -(40 - _0x13efba) / 2 - 5, _0x13efba, _0xa08c5c, true);
  _0xa08c5c.btnLabel = _0x4a2517;
  return _0xa08c5c;
}
function createButton(_0x333b40, _0x2943bf, _0x5a9f41, _0x40d292, _0x4b022e, _0x202d9b, _0x33362d, _0x4281dd, _0x2e4dc5, _0x332c9f, _0x542d0e, _0x454f5e) {
  let _0x130efa = createNode(_0x333b40, _0x2943bf, _0x5a9f41, _0x40d292, _0x4b022e, _0x202d9b, _0x542d0e, true, _0x14f024 => {
      if (_0x454f5e) {
        _0x454f5e();
      }
    }),
    _0x2a8c92 = createLabel(_0x333b40, _0x33362d, _0x4281dd, _0x2e4dc5, 0, -(_0x4b022e - _0x332c9f) / 2 - 5, _0x332c9f, _0x130efa);
  _0x130efa.btnLabel = _0x2a8c92;
  return _0x130efa;
}
function createMenuButton(_0x5618f5, _0x23329c, _0x373827, _0x14ae04, _0xce1e4a, _0x49a25b, _0x53c98c, _0x417e91, _0x1c12b3, _0x29df35, _0x4f4db5, _0x1698e0) {
  let _0x266254 = createNode(_0x5618f5, _0x23329c, _0x373827, _0x14ae04, _0xce1e4a, _0x49a25b, _0x4f4db5, true, _0x4e871e => {
      if (_0x1698e0) {
        _0x1698e0();
      }
    }),
    _0x5e4484 = createNode(_0x5618f5, 0, 0, _0x14ae04, _0xce1e4a, "7dde6e", _0x266254, true);
  _0x266254.selectBg = _0x5e4484;
  let _0x2a3f17 = createLabel(_0x5618f5, _0x53c98c, _0x417e91, _0x1c12b3, 0, -(_0xce1e4a - _0x29df35) / 2 - 5, _0x29df35, _0x266254);
  _0x266254.btnLabel = _0x2a3f17;
  return _0x266254;
}
function createEditBox(_0x5ace44, _0x3eefd5, _0x160fbb, _0x533467, _0xdc5176, _0x2f9ed9, _0x4ad02a, _0x197968, _0x3e84fd, _0x55f991, _0x111579, _0x4cd365) {
  let _0x13f92e = new cc.Node(_0x5ace44);
  _0x13f92e.x = _0x2f9ed9;
  _0x13f92e.y = _0x4ad02a + 5;
  _0x13f92e.width = _0x197968;
  _0x13f92e.height = _0x3e84fd;
  _0x13f92e.anchorX = 0;
  _0x13f92e.anchorY = 0.5;
  let _0x2b0a00 = new cc.Texture2D(),
    _0x155bca = new cc.SpriteFrame();
  _0x2b0a00.initWithData(new Uint8Array([255, 255, 255]), cc.Texture2D.PixelFormat.RGB888, 1, 1);
  _0x155bca.setTexture(_0x2b0a00);
  _0x155bca.setRect(cc.rect(0, 0, _0x197968, _0x3e84fd));
  _0x13f92e.addComponent(cc.Sprite).spriteFrame = _0x155bca;
  let _0x4574f3 = new cc.Node();
  _0x13f92e.addChild(_0x4574f3);
  _0x4574f3.width = _0x197968;
  _0x4574f3.height = _0x3e84fd;
  let _0x5c27d0 = _0x4574f3.addComponent(cc.Label);
  _0x5c27d0.horizontalAlign = 1;
  _0x5c27d0.fontSize = _0x55f991;
  _0x5c27d0.lineHeight = _0x55f991 + 10;
  let _0x102ac1 = new cc.Node();
  _0x13f92e.addChild(_0x102ac1);
  _0x102ac1.width = _0x197968;
  _0x102ac1.height = _0x3e84fd;
  let _0x5a3de6 = _0x102ac1.addComponent(cc.Label);
  _0x5a3de6.horizontalAlign = 1;
  _0x5a3de6.fontSize = _0x55f991;
  _0x5a3de6.lineHeight = _0x55f991 + 10;
  let _0x1bde04 = _0x13f92e.addComponent(cc.EditBox);
  _0x1bde04.textLabel = _0x5c27d0;
  _0x1bde04.textLabel.node.color = new cc.Color().fromHEX(_0x533467);
  _0x1bde04.placeholderLabel = _0x5a3de6;
  _0x1bde04.placeholderLabel.node.color = new cc.Color().fromHEX(_0x533467);
  _0x1bde04.placeholder = _0x3eefd5;
  _0x1bde04.inputMode = cc.EditBox.InputMode.SINGLE_LINE;
  _0x1bde04.maxLength = 5000;
  _0x111579.addChild(_0x1bde04.node);
  _0x4574f3.anchorY = 0.5;
  _0x102ac1.anchorY = 0.5;
  _0x1bde04.string = _0x160fbb;
  _0x1bde04.node.on("text-changed", () => {
    if (_0x4cd365) {
      _0x4cd365(_0x1bde04);
    }
  }, this);
  return _0x1bde04;
}
function createScrollView(_0x54558b, _0x580158, _0x53da41, _0xee23a8, _0x15536e, _0x250be9) {
  let _0x95e49d = new cc.Node("ScrollView");
  _0x95e49d.x = _0x54558b;
  _0x95e49d.y = _0x580158;
  _0x95e49d.width = _0x53da41;
  _0x95e49d.height = _0xee23a8;
  _0x250be9.addChild(_0x95e49d);
  let _0x1fe787 = new cc.Node("view");
  _0x1fe787.width = _0x53da41;
  _0x1fe787.height = _0xee23a8;
  let _0x93dd70 = _0x1fe787.addComponent(cc.Mask);
  _0x93dd70.type = 0;
  _0x95e49d.addChild(_0x1fe787);
  let _0x4a2edb = new cc.Node("content");
  _0x4a2edb.width = _0x53da41;
  _0x4a2edb.height = _0x15536e;
  _0x4a2edb.anchorY = 1;
  _0x1fe787.addChild(_0x4a2edb);
  let _0x5a232e = _0x95e49d.addComponent(cc.ScrollView);
  _0x5a232e.horizontal = false;
  _0x5a232e.elastic = false;
  _0x5a232e.brake = 0.75;
  _0x5a232e.bounceDuration = 0.23;
  _0x5a232e.content = _0x4a2edb;
  return _0x5a232e;
}
function createSelectList(_0x5d2c78, _0x37b086, _0x149510, _0x3a8ba4, _0x1144e8, _0x22892a, _0x5253c2, _0x141732, _0x49010b, _0x1fdfbc, _0x496d95 = null, _0x26b928 = false, _0x384220 = false, _0x566081 = null) {
  let _0x2cfddd = new cc.Node(_0x5d2c78 + "bg");
  _0x2cfddd.x = _0x1144e8;
  _0x2cfddd.y = _0x22892a + 5;
  _0x2cfddd.width = cc.winSize.width;
  _0x2cfddd.height = cc.winSize.height;
  _0x2cfddd.selectIdx = 0;
  _0x2cfddd.items = _0x37b086;
  _0x1fdfbc.addChild(_0x2cfddd);
  let _0x2028c2 = new cc.Texture2D(),
    _0x5a2eb8 = new cc.SpriteFrame();
  _0x2028c2.initWithData(new Uint8Array([255, 255, 255]), cc.Texture2D.PixelFormat.RGB888, 1, 1);
  _0x5a2eb8.setTexture(_0x2028c2);
  _0x5a2eb8.setRect(cc.rect(0, 0, _0x5253c2, _0x141732));
  _0x2cfddd.addComponent(cc.Sprite).spriteFrame = _0x5a2eb8;
  let _0x4aefbe = new cc.Node(_0x5d2c78);
  _0x4aefbe.x = -10;
  _0x4aefbe.color = cc.color().fromHEX(_0x149510);
  _0x2cfddd.addChild(_0x4aefbe);
  let _0x334159 = _0x4aefbe.addComponent(cc.Label);
  _0x334159.verticalAlign = 1;
  _0x334159.string = _0x37b086[0];
  _0x334159.fontSize = _0x49010b;
  if (_0x26b928) {
    let _0x2ab418 = _0x4aefbe.addComponent(cc.LabelOutline);
    _0x2ab418.width = 0;
    _0x2ab418.color = cc.color().fromHEX("ffffff");
  }
  _0x2cfddd.selectLabel = _0x334159;
  let _0x577f7a = createLabel("arrow", "▼", "000000", "ffffff", _0x5253c2 / 2 - 14, -5, 32, _0x2cfddd);
  _0x577f7a.getComponent(cc.LabelOutline).width = 0;
  let _0x30f994 = [];
  _0x2cfddd.on(cc.Node.EventType.TOUCH_END, () => {
    if (window.scrollView) {
      window.scrollView.stopAutoScroll();
    }
    _0x577f7a.getComponent(cc.Label).string = "▲";
    let _0x155f7e = new cc.Node("selectBox");
    _0x155f7e.group = "ui";
    _0x155f7e.zIndex = 99;
    _0x155f7e.x = 0;
    _0x155f7e.y = 0;
    _0x155f7e.anchorX = 0.5;
    _0x155f7e.anchorY = 0.5;
    cc.Canvas.instance.node.addChild(_0x155f7e);
    let _0x425920 = new cc.Node("selectBoxBg");
    _0x425920.opacity = 0;
    let _0x71ac23 = new cc.Texture2D(),
      _0x506359 = new cc.SpriteFrame();
    _0x71ac23.initWithData(new Uint8Array([0, 0, 0]), cc.Texture2D.PixelFormat.RGB888, 1, 1);
    _0x506359.setTexture(_0x71ac23);
    _0x506359.setRect(cc.rect(0, 0, cc.winSize.width, cc.winSize.height));
    _0x425920.addComponent(cc.Sprite).spriteFrame = _0x506359;
    _0x425920.on(cc.Node.EventType.TOUCH_END, () => {
      _0x34a6bf();
    }, this);
    _0x155f7e.addChild(_0x425920);
    if (_0x384220) {
      let _0x5d148c = _0x2cfddd.parent.convertToWorldSpaceAR(_0x2cfddd.position),
        _0x237db4 = _0x155f7e.convertToNodeSpaceAR(_0x5d148c),
        _0x83de24 = createScrollView(_0x237db4.x, _0x237db4.y - _0x566081 / 2 - _0x141732 / 2, _0x5253c2, _0x566081, _0x2cfddd.items.length * (_0x141732 + 2), _0x155f7e);
      _0x155f7e.scrollView = _0x83de24;
    }
    let _0xc3408 = _0x2cfddd.parent.convertToWorldSpaceAR(_0x2cfddd.position),
      _0x5bb67e = _0x155f7e.convertToNodeSpaceAR(_0xc3408);
    for (let _0x12ab6f in _0x2cfddd.items) {
      let _0x300ca6 = 0;
      _0x26b928 && (_0x300ca6 = getEquipQuality(_0x2cfddd.items[_0x12ab6f]));
      let _0xdcb446 = _0x155f7e;
      if (_0x384220) {
        _0x5bb67e.x = 0;
        _0x5bb67e.y = _0x141732 / 2;
        if (_0x155f7e.scrollView) {
          _0xdcb446 = _0x155f7e.scrollView.content;
        }
      }
      let _0x1b6703 = createSelectCell(_0x2cfddd.items[_0x12ab6f], _0x149510, _0x3a8ba4, _0x5bb67e.x, _0x5bb67e.y, _0x5253c2, _0x141732, _0x49010b, Number(_0x12ab6f), _0xdcb446, _0x4e8ca0 => {
        _0x2cfddd.selectIdx = _0x4e8ca0;
        _0x4aefbe.getComponent(cc.Label).string = _0x2cfddd.items[_0x4e8ca0];
        _0x26b928 && setEquipSelectListColor(_0x2cfddd, _0x300ca6);
        _0x34a6bf();
        if (_0x496d95) {
          _0x496d95(_0x4e8ca0);
        }
      }, _0x26b928, _0x300ca6);
      _0x30f994.push(_0x1b6703);
    }
    function _0x34a6bf() {
      _0x155f7e.destroy();
      _0x30f994 = [];
      for (let _0x14cc1a in _0x30f994) {
        let _0xf724f0 = _0x30f994[_0x14cc1a];
        _0xf724f0 && cc.isValid(_0xf724f0) && _0xf724f0.destroy();
      }
      _0x30f994 = [];
      _0x577f7a.getComponent(cc.Label).string = "▼";
    }
  }, this);
  return _0x2cfddd;
}
function createSelectCell(_0xb2d0b8, _0x8e9fe9, _0x1c3af5, _0x48b0ea, _0x2d813e, _0x1bdee0, _0x2c65c7, _0x26c445, _0x4a0580, _0x396d08, _0x34c1a7, _0x5d23d2 = false, _0x265690 = null) {
  let _0x33d9d6 = new cc.Node("cell" + _0xb2d0b8 + "bg");
  _0x33d9d6.x = _0x48b0ea;
  _0x33d9d6.y = _0x2d813e - (_0x4a0580 + 1) * (_0x2c65c7 + 2);
  _0x33d9d6.width = _0x1bdee0;
  _0x33d9d6.height = _0x2c65c7;
  _0x396d08.addChild(_0x33d9d6);
  let _0x5afa0c = new cc.Texture2D(),
    _0x26074e = new cc.SpriteFrame(),
    _0x16032d = cc.color().fromHEX(_0x1c3af5);
  _0x5afa0c.initWithData(new Uint8Array([_0x16032d.r, _0x16032d.g, _0x16032d.b]), cc.Texture2D.PixelFormat.RGB888, 1, 1);
  _0x26074e.setTexture(_0x5afa0c);
  _0x26074e.setRect(cc.rect(0, 0, _0x1bdee0, _0x2c65c7));
  _0x33d9d6.addComponent(cc.Sprite).spriteFrame = _0x26074e;
  let _0x58070c = new cc.Node("cellLabel");
  _0x58070c.color = cc.color().fromHEX(_0x8e9fe9);
  _0x33d9d6.addChild(_0x58070c);
  let _0x2c6d6d = _0x58070c.addComponent(cc.Label);
  _0x2c6d6d.verticalAlign = 1;
  _0x2c6d6d.string = _0xb2d0b8;
  _0x2c6d6d.fontSize = _0x26c445;
  _0x34c1a7 && _0x33d9d6.on(cc.Node.EventType.TOUCH_END, () => {
    if (_0x34c1a7) {
      _0x34c1a7(_0x4a0580);
    }
  }, this);
  _0x5d23d2 && (setEquipSelectListColor(_0x33d9d6, _0x265690), _0xb2d0b8.length >= 6 && (_0x2c6d6d.fontSize = _0x26c445 - 2));
}
function createDownToggle(_0x3068ac, _0x1b9221, _0x28ce64, _0x979520, _0x522618, _0x2657c1, _0x4abc12, _0x534549, _0x13f54e, _0x5d6997, _0xc39b3b, _0x105d14 = null) {
  let _0x178392 = new cc.Node(_0x3068ac + "bg");
  _0x178392.x = _0x2657c1;
  _0x178392.y = _0x4abc12 + 5;
  _0x178392.width = cc.winSize.width;
  _0x178392.height = cc.winSize.height;
  const _0x1d2f90 = {
    "1": false,
    "2": false,
    "3": false,
    "4": false,
    "5": false,
    "6": false
  };
  _0x178392.selectIdx = _0x1d2f90;
  _0x178392.items = _0x1b9221;
  _0x178392.selectBox = null;
  _0xc39b3b.addChild(_0x178392);
  let _0x49577b = new cc.Texture2D(),
    _0x45b4f8 = new cc.SpriteFrame();
  _0x49577b.initWithData(new Uint8Array([255, 255, 255]), cc.Texture2D.PixelFormat.RGB888, 1, 1);
  _0x45b4f8.setTexture(_0x49577b);
  _0x45b4f8.setRect(cc.rect(0, 0, _0x534549, _0x13f54e));
  _0x178392.addComponent(cc.Sprite).spriteFrame = _0x45b4f8;
  let _0x5ce79a = new cc.Node(_0x3068ac);
  _0x5ce79a.x = -10;
  _0x5ce79a.color = cc.color().fromHEX(_0x28ce64);
  _0x178392.addChild(_0x5ce79a);
  let _0x3bd922 = _0x5ce79a.addComponent(cc.Label);
  _0x3bd922.verticalAlign = 1;
  _0x3bd922.string = _0x1b9221[0];
  _0x3bd922.fontSize = _0x5d6997;
  _0x178392.selectLabel = _0x3bd922;
  let _0x4b2748 = createLabel("arrow", "▼", "000000", "ffffff", _0x534549 / 2 - 14, -5, 32, _0x178392),
    _0xa440a8 = [];
  if (!_0x178392.selectBox) {
    let _0x490c77 = new cc.Node("selectBox");
    _0x178392.selectBox = _0x490c77;
    _0x178392.selectBox.active = false;
    _0x490c77.group = "ui";
    _0x490c77.zIndex = 99;
    _0x490c77.x = 0;
    _0x490c77.y = 0;
    _0x490c77.anchorX = 0.5;
    _0x490c77.anchorY = 0.5;
    cc.Canvas.instance.node.addChild(_0x490c77);
    let _0x8d5c60 = new cc.Node("selectBoxBg");
    _0x8d5c60.opacity = 0;
    let _0x380981 = new cc.Texture2D(),
      _0x4e4bd2 = new cc.SpriteFrame();
    _0x380981.initWithData(new Uint8Array([0, 0, 0]), cc.Texture2D.PixelFormat.RGB888, 1, 1);
    _0x4e4bd2.setTexture(_0x380981);
    _0x4e4bd2.setRect(cc.rect(0, 0, cc.winSize.width, cc.winSize.height));
    _0x8d5c60.addComponent(cc.Sprite).spriteFrame = _0x4e4bd2;
    _0x8d5c60.on(cc.Node.EventType.TOUCH_END, () => {
      _0x457960();
    }, this);
    _0x490c77.addChild(_0x8d5c60);
    let _0xf5f221 = _0x178392.parent.convertToWorldSpaceAR(_0x178392.position),
      _0x1909be = _0x490c77.convertToNodeSpaceAR(_0xf5f221);
    for (let _0x49126c = 1; _0x49126c <= _0x1b9221.length - 1; _0x49126c++) {
      let _0xdd5d0b = createDownToggleCell(_0x1b9221[_0x49126c], _0x28ce64, _0x979520, _0x522618, _0x1909be.x, _0x1909be.y, _0x534549, _0x13f54e, _0x5d6997, Number(_0x49126c) - 1, _0x490c77, _0x192398 => {
        let _0x3e8707 = _0x192398 + 1;
        _0x178392.selectIdx[_0x3e8707] = !_0x178392.selectIdx[_0x3e8707];
        _0x178392.selectIdx[_0x3e8707] ? (_0xdd5d0b.color = cc.color().fromHEX("82d7e9"), _0xdd5d0b.select2.active = true) : (_0xdd5d0b.color = cc.color().fromHEX("ffffff"), _0xdd5d0b.select1.active = true);
      });
      _0xa440a8.push(_0xdd5d0b);
    }
    _0x490c77.list = _0xa440a8;
    function _0x457960() {
      _0x178392.selectBox.active = false;
      _0x4b2748.getComponent(cc.Label).string = "▼";
    }
    _0x178392.on(cc.Node.EventType.TOUCH_END, () => {
      if (window.scrollView) {
        window.scrollView.stopAutoScroll();
      }
      _0x4b2748.getComponent(cc.Label).string = "▲";
      if (_0x178392.selectBox) {
        _0x178392.selectBox.active = true;
        for (let _0x3adb65 in _0x490c77.list) {
          let _0x1d7946 = _0x490c77.list[_0x3adb65];
          _0x1d7946.y = _0x1d7946.startY + (window.scrollView.content.y - 375);
        }
        return;
      }
    }, this);
  }
  return _0x178392;
}
function createDownToggleCell(_0x25fa1f, _0x32a1a6, _0x45de60, _0x362b7e, _0x22ee14, _0x341538, _0xa4f763, _0x28d179, _0x46d355, _0x3ab4a2, _0x4b62b9, _0x3de790) {
  let _0x465081 = new cc.Node("cell" + _0x25fa1f + "bg");
  _0x465081.x = _0x22ee14;
  _0x465081.y = _0x341538 - (_0x3ab4a2 + 1) * (_0x28d179 + 2);
  _0x465081.startX = _0x465081.x;
  _0x465081.startY = _0x465081.y;
  _0x465081.width = _0xa4f763;
  _0x465081.height = _0x28d179;
  _0x4b62b9.addChild(_0x465081);
  let _0x40cae7 = new cc.Texture2D(),
    _0x2ef7b1 = new cc.SpriteFrame(),
    _0x2a7eea = cc.color().fromHEX(_0x362b7e);
  _0x40cae7.initWithData(new Uint8Array([_0x2a7eea.r, _0x2a7eea.g, _0x2a7eea.b]), cc.Texture2D.PixelFormat.RGB888, 1, 1);
  _0x2ef7b1.setTexture(_0x40cae7);
  _0x2ef7b1.setRect(cc.rect(0, 0, _0xa4f763, _0x28d179));
  _0x465081.addComponent(cc.Sprite).spriteFrame = _0x2ef7b1;
  let _0x4d44b3 = 0;
  switch (_0x25fa1f.length) {
    case 2:
      _0x4d44b3 = 35;
      break;
    case 3:
      _0x4d44b3 = 20;
      break;
    case 4:
      _0x4d44b3 = 5;
      break;
    case 5:
      _0x4d44b3 = -10;
      break;
  }
  let _0x4ac7db = createIcon("select1", -_0xa4f763 / 2 + 20 + _0x4d44b3, 0, 0, 0, window.ResUrl + "select_1.png", _0x465081, true);
  _0x4ac7db.active = true;
  _0x465081.select1 = _0x4ac7db;
  let _0x418f70 = createIcon("select2", -_0xa4f763 / 2 + 20 + _0x4d44b3, 0, 0, 0, window.ResUrl + "select_2.png", _0x465081, true);
  _0x418f70.active = false;
  _0x465081.select2 = _0x418f70;
  let _0x129fb1 = createLabel("cellLabel", _0x25fa1f, _0x32a1a6, _0x45de60, -_0xa4f763 / 2 + 40 + _0x4d44b3, -10, _0x46d355, _0x465081, true);
  _0x129fb1.getComponent(cc.LabelOutline).width = 0;
  _0x465081.selectLabel = _0x129fb1;
  _0x3de790 && _0x465081.on(cc.Node.EventType.TOUCH_END, () => {
    _0x3de790 && (_0x465081.select1.active = false, _0x465081.select2.active = false, _0x3de790(_0x3ab4a2));
  }, this);
  return _0x465081;
}
function _onTouchMove(_0x5bab35) {
  let _0x465300 = window.menu.parent.convertToNodeSpaceAR(_0x5bab35.getLocation());
  window.menu.position = _0x465300;
  if (menu.x - 80 <= -cc.winSize.width / 2) {
    menu.x = -cc.winSize.width / 2 + 80;
  } else {
    menu.x + 80 >= cc.winSize.width / 2 && (menu.x = cc.winSize.width / 2 - 80);
  }
  if (menu.y - 80 <= -cc.winSize.height / 2) {
    menu.y = -cc.winSize.height / 2 + 80;
  } else {
    menu.y + 80 >= cc.winSize.height / 2 && (menu.y = cc.winSize.height / 2 - 80);
  }
}
function updateMenu() {
  window.MenuState = !window.MenuState;
  if (window.MenuState) {
    if (window.cheatingMask) {
      window.cheatingMask.active = true;
    }
    if (window.cheatingBox) {
      window.cheatingBox.active = true;
    }
    !window.cheatingBox && openPanghu();
    if (window.FashionBox) {
      window.FashionBox.active = false;
    }
    if (window.FashionMask) {
      window.FashionMask.active = false;
    }
    updatePanghuFunction();
    updateFindData();
    updateDBData();
    if (window.lastFuncIndex) {
      showFuncBox(window.lastFuncIndex);
    }
  } else {
    if (window.cheatingMask) {
      window.cheatingMask.active = false;
    }
    if (window.cheatingBox) {
      window.cheatingBox.active = false;
    }
    if (window.FashionBox) {
      window.FashionBox.active = false;
    }
    if (window.FashionMask) {
      window.FashionMask.active = false;
    }
  }
}
function updateMenuPos() {
  if (window.menu.x - 80 <= -cc.winSize.width / 2) {
    window.menu.x = -cc.winSize.width / 2 + 80;
  } else {
    window.menu.x + 80 >= cc.winSize.width / 2 && (window.menu.x = cc.winSize.width / 2 - 80);
  }
  if (window.menu.y - 80 <= -cc.winSize.height / 2) {
    window.menu.y = -cc.winSize.height / 2 + 80;
  } else {
    window.menu.y + 80 >= cc.winSize.height / 2 && (window.menu.y = cc.winSize.height / 2 - 80);
  }
}
function httpPostJson(_0x43c93e, _0x334c3e, _0x113636) {
  var _0x4cf433 = new XMLHttpRequest();
  _0x4cf433.open("POST", _0x43c93e, !0);
  _0x4cf433.setRequestHeader("Content-Type", "application/json;charset=utf-8");
  _0x4cf433.onreadystatechange = function () {
    if (4 == _0x4cf433.readyState) {
      var _0xb7eb91 = null;
      try {
        "" != _0x4cf433.responseText && (_0xb7eb91 = JSON.parse(_0x4cf433.responseText));
      } catch (_0x15e2da) {}
      _0x113636 && _0x113636(_0x4cf433.status, _0xb7eb91, _0x4cf433.responseText);
    }
  };
  _0x4cf433.onerror = function () {
    _0x113636 && _0x113636(-1, null, "Network error");
  };
  var _0x193b65 = "string" == typeof _0x334c3e ? _0x334c3e : JSON.stringify(_0x334c3e);
  _0x4cf433.send(_0x193b65);
  return _0x4cf433;
}
const _0x52e0b8 = {
  id: 1,
  name: "简单 1"
};
const _0x414bfb = {
  id: 2,
  name: "简单 2"
};
const _0x452e3e = {
  id: 3,
  name: "简单 3"
};
const _0x20ed49 = {
  id: 4,
  name: "简单 4"
};
const _0x3a39a9 = {
  id: 5,
  name: "普通 1"
};
const _0x23fb3b = {
  id: 6,
  name: "普通 2"
};
const _0x521657 = {
  id: 7,
  name: "普通 3"
};
const _0x126db3 = {
  id: 8,
  name: "普通 4"
};
const _0x1cdf10 = {
  id: 9,
  name: "普通 5"
};
const _0x5849de = {
  id: 10,
  name: "困难 1"
};
const _0x2f0dc9 = {
  id: 11,
  name: "困难 2"
};
const _0x5e619b = {
  id: 12,
  name: "困难 3"
};
const _0x1f7e8c = {
  id: 13,
  name: "困难 4"
};
const _0x1c4059 = {
  id: 14,
  name: "困难 5"
};
const _0x59f521 = {
  id: 15,
  name: "困难 6"
};
const _0x46d30e = {
  id: 16,
  name: "困难 7"
};
const _0x44dfae = {
  id: 17,
  name: "困难 8"
};
const _0x1594ef = {
  id: 18,
  name: "困难 9"
};
const _0x223290 = {
  id: 19,
  name: "困难 10"
};
const _0x521b63 = {
  id: 20,
  name: "大师 1"
};
const _0xab8386 = {
  id: 21,
  name: "大师 2"
};
const _0x2162ec = {
  id: 22,
  name: "大师 3"
};
const _0x37a1f2 = {
  id: 23,
  name: "大师 4"
};
const _0x39bb84 = {
  id: 24,
  name: "大师 5"
};
const _0x25b8c0 = {
  id: 25,
  name: "大师 6"
};
const _0x93a01c = {
  id: 26,
  name: "大师 7"
};
const _0x2aadaf = {
  id: 27,
  name: "大师 8"
};
const _0x20dbea = {
  id: 28,
  name: "大师 9"
};
const _0x348f2d = {
  id: 29,
  name: "大师 10"
};
const _0x5c7b26 = {
  id: 30,
  name: "地狱 1"
};
const _0x2fe4f9 = {
  id: 31,
  name: "地狱 2"
};
const _0x449d37 = {
  id: 32,
  name: "地狱 3"
};
const _0x5d3b7d = {
  id: 33,
  name: "地狱 4"
};
const _0x2e0448 = {
  id: 34,
  name: "地狱 5"
};
const _0x5eae04 = {
  id: 35,
  name: "地狱 6"
};
const _0x231593 = {
  id: 36,
  name: "地狱 7"
};
const _0x52be8d = {
  id: 37,
  name: "地狱 8"
};
const _0x5be3ec = {
  id: 38,
  name: "地狱 9"
};
const _0x141c80 = {
  id: 39,
  name: "地狱 10"
};
const _0x5e571c = {
  id: 40,
  name: "地狱 11"
};
const _0x3c777b = {
  id: 41,
  name: "地狱 12"
};
const _0x394f39 = {
  id: 42,
  name: "地狱 13"
};
const _0x3a0153 = {
  id: 43,
  name: "地狱 14"
};
const _0x3332e7 = {
  id: 44,
  name: "地狱 15"
};
const _0x515223 = {
  id: 45,
  name: "地狱 16"
};
const _0x1f8079 = {
  id: 46,
  name: "地狱 17"
};
const _0x19e17b = {
  id: 47,
  name: "地狱 18"
};
const _0x367f78 = {
  id: 48,
  name: "地狱 19"
};
const _0x26a7ab = {
  id: 49,
  name: "地狱 20"
};
const _0x4f0e75 = {
  id: 50,
  name: "地狱 21"
};
const _0x188f14 = {
  id: 51,
  name: "地狱 22"
};
const _0xa03082 = {
  id: 52,
  name: "地狱 23"
};
const _0xb60708 = {
  id: 53,
  name: "地狱 24"
};
const _0x473bb9 = {
  id: 54,
  name: "地狱 25"
};
const _0x503ca1 = {
  id: 55,
  name: "地狱 26"
};
const _0x28accb = {
  id: 56,
  name: "地狱 27"
};
const _0x281d2f = {
  id: 57,
  name: "地狱 28"
};
const _0x2dc3d5 = {
  id: 58,
  name: "地狱 29"
};
const _0x3af40a = {
  id: 59,
  name: "地狱 30"
};
const _0x1a8f43 = {
  id: 60,
  name: "地狱 31"
};
const _0x781812 = {
  id: 61,
  name: "地狱 32"
};
const _0x22d01e = {
  id: 62,
  name: "地狱 33"
};
const _0x10cb45 = {
  id: 63,
  name: "地狱 34"
};
const _0x2a9952 = {
  id: 64,
  name: "地狱 35"
};
const _0x12c60e = {
  id: 65,
  name: "地狱 36"
};
const _0x2454eb = {
  id: 66,
  name: "地狱 37"
};
const _0x79e852 = {
  id: 67,
  name: "地狱 38"
};
const _0x6384dc = {
  id: 68,
  name: "地狱 39"
};
const _0xa78d3 = {
  id: 69,
  name: "地狱 40"
};
const _0x312420 = {
  id: 70,
  name: "地狱 41"
};
const _0x301e0d = {
  id: 71,
  name: "地狱 42"
};
const _0x368085 = {
  id: 72,
  name: "地狱 43"
};
const _0x59d28a = {
  id: 73,
  name: "地狱 44"
};
const _0x5f34b0 = {
  id: 74,
  name: "地狱 45"
};
const _0x530dd1 = {
  id: 75,
  name: "地狱 46"
};
const _0x1aee3a = {
  id: 76,
  name: "地狱 47"
};
const _0x21e51d = {
  id: 77,
  name: "地狱 48"
};
const _0x587aef = {
  id: 78,
  name: "地狱 49"
};
const _0x452734 = {
  id: 79,
  name: "地狱 50"
};
const _0x11681e = {
  id: 80,
  name: "地狱 51"
};
const _0x56df89 = {
  id: 81,
  name: "地狱 52"
};
const _0x4c70ce = {
  id: 82,
  name: "地狱 53"
};
const _0x363b4e = {
  id: 83,
  name: "地狱 54"
};
const _0x539116 = {
  id: 84,
  name: "地狱 55"
};
const _0x39402e = {
  id: 85,
  name: "地狱 56"
};
const _0x1d8e2c = {
  id: 86,
  name: "地狱 57"
};
const _0x47a7ef = {
  id: 87,
  name: "地狱 58"
};
const _0x36aa10 = {
  id: 88,
  name: "地狱 59"
};
const _0x3205d5 = {
  id: 89,
  name: "地狱 60"
};
const _0x483ea9 = {
  id: 90,
  name: "地狱 61"
};
const _0x1f32fa = {
  id: 91,
  name: "地狱 62"
};
const _0x4d1a7c = {
  id: 92,
  name: "地狱 63"
};
const _0x517aee = {
  id: 93,
  name: "地狱 64"
};
const _0x30187d = {
  id: 94,
  name: "地狱 65"
};
const _0x347f5e = {
  id: 95,
  name: "地狱 66"
};
const _0x5ccf92 = {
  id: 96,
  name: "地狱 67"
};
const _0x40037f = {
  id: 97,
  name: "地狱 68"
};
const _0x29ee20 = {
  id: 98,
  name: "地狱 69"
};
const _0x8baf2e = {
  id: 99,
  name: "地狱 70"
};
const _0x3be2a1 = {
  id: 100,
  name: "地狱 71"
};
const _0x4278ff = {
  id: 101,
  name: "地狱 72"
};
const _0x23b334 = {
  id: 102,
  name: "地狱 73"
};
const _0x347d36 = {
  id: 103,
  name: "地狱 74"
};
const _0x2063d2 = {
  id: 104,
  name: "地狱 75"
};
const _0x289165 = {
  id: 105,
  name: "地狱 76"
};
const _0x3bd0f7 = {
  id: 106,
  name: "地狱 77"
};
const _0x3d3ca3 = {
  id: 107,
  name: "地狱 78"
};
const _0x25fae7 = {
  id: 108,
  name: "地狱 79"
};
const _0xab2621 = {
  id: 109,
  name: "地狱 80"
};
const _0xce333f = {
  id: 110,
  name: "地狱 81"
};
const _0xcd4f2e = {
  id: 111,
  name: "地狱 82"
};
const _0x1fc44d = {
  id: 112,
  name: "地狱 83"
};
const _0x5907a7 = {
  id: 113,
  name: "地狱 84"
};
const _0x5abac7 = {
  id: 114,
  name: "地狱 85"
};
const _0xf409f7 = {
  id: 115,
  name: "地狱 86"
};
const _0x1d485f = {
  id: 116,
  name: "地狱 87"
};
const _0xab2ab8 = {
  id: 117,
  name: "地狱 88"
};
const _0x40620d = {
  id: 118,
  name: "地狱 89"
};
const _0x2c5b1d = {
  id: 119,
  name: "地狱 90"
};
const _0x5ba81b = {
  id: 120,
  name: "地狱 91"
};
const _0x38a750 = {
  id: 121,
  name: "地狱 92"
};
const _0x521b84 = {
  id: 122,
  name: "地狱 93"
};
const _0xc0ad9d = {
  id: 123,
  name: "地狱 94"
};
const _0x5b89fc = {
  id: 124,
  name: "地狱 95"
};
const _0x207329 = {
  id: 125,
  name: "地狱 96"
};
const _0x2d3373 = {
  id: 126,
  name: "地狱 97"
};
const _0x39c292 = {
  id: 127,
  name: "地狱 98"
};
const _0xa5646c = {
  id: 128,
  name: "地狱 99"
};
const _0x4374be = {
  id: 129,
  name: "地狱 100"
};
const _0x458e77 = {
  id: 130,
  name: "地狱 101"
};
const _0x213bf9 = {
  id: 131,
  name: "地狱 102"
};
const _0x3c8eae = {
  id: 132,
  name: "地狱 103"
};
const _0x47c86a = {
  id: 133,
  name: "地狱 104"
};
const _0x2542a2 = {
  id: 134,
  name: "地狱 105"
};
const _0x324f69 = {
  id: 135,
  name: "地狱 106"
};
const _0x32538d = {
  id: 136,
  name: "地狱 107"
};
const _0x1ea27f = {
  id: 137,
  name: "地狱 108"
};
const _0x15a812 = {
  id: 138,
  name: "地狱 109"
};
const _0x3415cb = {
  id: 139,
  name: "地狱 110"
};
const _0x4f22c5 = {
  id: 140,
  name: "地狱 111"
};
const _0x1b3c7a = {
  id: 141,
  name: "地狱 112"
};
const _0xe643d9 = {
  id: 142,
  name: "地狱 113"
};
const _0x2b6356 = {
  id: 143,
  name: "地狱 114"
};
const _0x4fb009 = {
  id: 144,
  name: "地狱 115"
};
const _0x439113 = {
  id: 145,
  name: "地狱 116"
};
const _0x57b38b = {
  id: 146,
  name: "地狱 117"
};
const _0x389343 = {
  id: 147,
  name: "地狱 118"
};
const _0x4bd8e2 = {
  id: 148,
  name: "地狱 119"
};
const _0x5ec95e = {
  id: 149,
  name: "地狱 120"
};
const _0x202809 = {
  id: 150,
  name: "地狱 121"
};
const _0x378976 = {
  id: 151,
  name: "地狱 122"
};
const _0x335be3 = {
  id: 152,
  name: "地狱 123"
};
const _0x3c3004 = {
  id: 153,
  name: "地狱 124"
};
const _0x240cb1 = {
  id: 154,
  name: "地狱 125"
};
const _0x118023 = {
  id: 155,
  name: "地狱 126"
};
const _0x5a86fa = {
  id: 156,
  name: "地狱 127"
};
const _0x45ea8e = {
  id: 157,
  name: "地狱 128"
};
const _0x5880b5 = {
  id: 158,
  name: "地狱 129"
};
const _0x3e31c2 = {
  id: 159,
  name: "地狱 130"
};
const _0xd4b7e9 = {
  id: 160,
  name: "地狱 131"
};
const _0xaf101b = {
  id: 161,
  name: "地狱 132"
};
const _0x36526d = {
  id: 162,
  name: "地狱 133"
};
const _0x12b815 = {
  id: 163,
  name: "地狱 134"
};
const _0x5e44b6 = {
  id: 164,
  name: "地狱 135"
};
const _0x9e6266 = {
  id: 165,
  name: "地狱 136"
};
const _0x5226f7 = {
  id: 166,
  name: "地狱 137"
};
const _0x2dc637 = {
  id: 167,
  name: "地狱 138"
};
const _0x2dafc9 = {
  id: 168,
  name: "地狱 139"
};
const _0x197431 = {
  id: 169,
  name: "地狱 140"
};
const _0x1ab4ab = {
  id: 170,
  name: "地狱 141"
};
const _0x1f2ce3 = {
  id: 171,
  name: "地狱 142"
};
const _0x3709a2 = {
  id: 172,
  name: "地狱 143"
};
const _0x4fb912 = {
  id: 173,
  name: "地狱 144"
};
const _0x22cb9f = {
  id: 174,
  name: "地狱 145"
};
const _0x306160 = {
  id: 175,
  name: "地狱 146"
};
const _0x148ae6 = {
  id: 176,
  name: "地狱 147"
};
const _0x34f109 = {
  id: 177,
  name: "地狱 148"
};
const _0x532a41 = {
  id: 178,
  name: "地狱 149"
};
const _0x5e0a57 = {
  id: 179,
  name: "地狱 150"
};
const _0x9be5f7 = {
  id: 180,
  name: "地狱 151"
};
const _0x5e2c4c = {
  id: 181,
  name: "地狱 152"
};
const _0x30d2f9 = {
  id: 182,
  name: "地狱 153"
};
const _0x26fce9 = {
  id: 183,
  name: "地狱 154"
};
const _0xce94f3 = {
  id: 184,
  name: "地狱 155"
};
const _0x64c9c2 = {
  id: 185,
  name: "地狱 156"
};
const _0x83586a = {
  id: 186,
  name: "地狱 157"
};
const _0x2ea3f2 = {
  id: 187,
  name: "地狱 158"
};
const _0x469195 = {
  id: 188,
  name: "地狱 159"
};
const _0x5af2f3 = {
  id: 189,
  name: "地狱 160"
};
const _0xd16685 = {
  id: 190,
  name: "地狱 161"
};
const _0x2d6d5d = {
  id: 191,
  name: "地狱 162"
};
const _0xe47742 = {
  id: 192,
  name: "地狱 163"
};
const _0x120d57 = {
  id: 193,
  name: "地狱 164"
};
const _0x9abd6c = {
  id: 194,
  name: "地狱 165"
};
const _0x24350e = {
  id: 195,
  name: "地狱 166"
};
const _0x1215f4 = {
  id: 196,
  name: "地狱 167"
};
const _0x2ccfcc = {
  id: 197,
  name: "地狱 168"
};
const _0x3d78e0 = {
  id: 198,
  name: "地狱 169"
};
const _0x30d2dc = {
  id: 199,
  name: "地狱 170"
};
const _0x3115f5 = {
  id: 200,
  name: "地狱 171"
};
const _0x25b47a = {
  id: 201,
  name: "地狱 172"
};
const _0x553720 = {
  id: 202,
  name: "地狱 173"
};
const _0x3d60bc = {
  id: 203,
  name: "地狱 174"
};
const _0x1bf4f2 = {
  id: 204,
  name: "地狱 175"
};
const _0x40955c = {
  id: 205,
  name: "地狱 176"
};
const _0x373364 = {
  id: 206,
  name: "地狱 177"
};
const _0xe5bb68 = {
  id: 207,
  name: "地狱 178"
};
const _0x54f790 = {
  id: 208,
  name: "地狱 179"
};
const _0x320970 = {
  id: 209,
  name: "地狱 180"
};
const _0xac89c = {
  id: 210,
  name: "魔王 1"
};
const _0x576866 = {
  id: 211,
  name: "魔王 2"
};
const _0x22ea39 = {
  id: 212,
  name: "魔王 3"
};
const _0x240168 = {
  id: 213,
  name: "魔王 4"
};
const _0x3e0656 = {
  id: 214,
  name: "魔王 5"
};
const _0x463d0c = {
  id: 215,
  name: "魔王 6"
};
const _0x2c138e = {
  id: 216,
  name: "魔王 7"
};
const _0x5cdd93 = {
  id: 217,
  name: "魔王 8"
};
const _0x4acf59 = {
  id: 218,
  name: "魔王 9"
};
const _0x27501a = {
  id: 219,
  name: "魔王 10"
};
const _0x51e49f = {
  id: 220,
  name: "魔王 11"
};
const _0x2abd9c = {
  id: 221,
  name: "魔王 12"
};
const _0x57a809 = {
  id: 222,
  name: "魔王 13"
};
const _0x490eef = {
  id: 223,
  name: "魔王 14"
};
const _0x42ca44 = {
  id: 224,
  name: "魔王 15"
};
const _0x439ace = {
  id: 225,
  name: "魔王 16"
};
const _0x3f1c5f = {
  id: 226,
  name: "魔王 17"
};
const _0x176657 = {
  id: 227,
  name: "魔王 18"
};
const _0x4de79a = {
  id: 228,
  name: "魔王 19"
};
const _0x439d2a = {
  id: 229,
  name: "魔王 20"
};
window.BattleLevelCfg = [_0x52e0b8, _0x414bfb, _0x452e3e, _0x20ed49, _0x3a39a9, _0x23fb3b, _0x521657, _0x126db3, _0x1cdf10, _0x5849de, _0x2f0dc9, _0x5e619b, _0x1f7e8c, _0x1c4059, _0x59f521, _0x46d30e, _0x44dfae, _0x1594ef, _0x223290, _0x521b63, _0xab8386, _0x2162ec, _0x37a1f2, _0x39bb84, _0x25b8c0, _0x93a01c, _0x2aadaf, _0x20dbea, _0x348f2d, _0x5c7b26, _0x2fe4f9, _0x449d37, _0x5d3b7d, _0x2e0448, _0x5eae04, _0x231593, _0x52be8d, _0x5be3ec, _0x141c80, _0x5e571c, _0x3c777b, _0x394f39, _0x3a0153, _0x3332e7, _0x515223, _0x1f8079, _0x19e17b, _0x367f78, _0x26a7ab, _0x4f0e75, _0x188f14, _0xa03082, _0xb60708, _0x473bb9, _0x503ca1, _0x28accb, _0x281d2f, _0x2dc3d5, _0x3af40a, _0x1a8f43, _0x781812, _0x22d01e, _0x10cb45, _0x2a9952, _0x12c60e, _0x2454eb, _0x79e852, _0x6384dc, _0xa78d3, _0x312420, _0x301e0d, _0x368085, _0x59d28a, _0x5f34b0, _0x530dd1, _0x1aee3a, _0x21e51d, _0x587aef, _0x452734, _0x11681e, _0x56df89, _0x4c70ce, _0x363b4e, _0x539116, _0x39402e, _0x1d8e2c, _0x47a7ef, _0x36aa10, _0x3205d5, _0x483ea9, _0x1f32fa, _0x4d1a7c, _0x517aee, _0x30187d, _0x347f5e, _0x5ccf92, _0x40037f, _0x29ee20, _0x8baf2e, _0x3be2a1, _0x4278ff, _0x23b334, _0x347d36, _0x2063d2, _0x289165, _0x3bd0f7, _0x3d3ca3, _0x25fae7, _0xab2621, _0xce333f, _0xcd4f2e, _0x1fc44d, _0x5907a7, _0x5abac7, _0xf409f7, _0x1d485f, _0xab2ab8, _0x40620d, _0x2c5b1d, _0x5ba81b, _0x38a750, _0x521b84, _0xc0ad9d, _0x5b89fc, _0x207329, _0x2d3373, _0x39c292, _0xa5646c, _0x4374be, _0x458e77, _0x213bf9, _0x3c8eae, _0x47c86a, _0x2542a2, _0x324f69, _0x32538d, _0x1ea27f, _0x15a812, _0x3415cb, _0x4f22c5, _0x1b3c7a, _0xe643d9, _0x2b6356, _0x4fb009, _0x439113, _0x57b38b, _0x389343, _0x4bd8e2, _0x5ec95e, _0x202809, _0x378976, _0x335be3, _0x3c3004, _0x240cb1, _0x118023, _0x5a86fa, _0x45ea8e, _0x5880b5, _0x3e31c2, _0xd4b7e9, _0xaf101b, _0x36526d, _0x12b815, _0x5e44b6, _0x9e6266, _0x5226f7, _0x2dc637, _0x2dafc9, _0x197431, _0x1ab4ab, _0x1f2ce3, _0x3709a2, _0x4fb912, _0x22cb9f, _0x306160, _0x148ae6, _0x34f109, _0x532a41, _0x5e0a57, _0x9be5f7, _0x5e2c4c, _0x30d2f9, _0x26fce9, _0xce94f3, _0x64c9c2, _0x83586a, _0x2ea3f2, _0x469195, _0x5af2f3, _0xd16685, _0x2d6d5d, _0xe47742, _0x120d57, _0x9abd6c, _0x24350e, _0x1215f4, _0x2ccfcc, _0x3d78e0, _0x30d2dc, _0x3115f5, _0x25b47a, _0x553720, _0x3d60bc, _0x1bf4f2, _0x40955c, _0x373364, _0xe5bb68, _0x54f790, _0x320970, _0xac89c, _0x576866, _0x22ea39, _0x240168, _0x3e0656, _0x463d0c, _0x2c138e, _0x5cdd93, _0x4acf59, _0x27501a, _0x51e49f, _0x2abd9c, _0x57a809, _0x490eef, _0x42ca44, _0x439ace, _0x3f1c5f, _0x176657, _0x4de79a, _0x439d2a];
window.NameBlacklist = ["dy", "鹅哥", "D音", "抖", "抖音", "冠希哥", "音搜", "DY", "月读", "冠希", "d音", "抖y", "抖Y", "搜"];
window.NameWhiteList = ["", "", "", "", ""];
function checkNameLegal() {
  if (!Service || !Service._playerService || !Service._playerService.myName) {
    return;
  }
  let _0x1e9757 = Service._playerService.myName;
  for (let _0xb714da in window.NameWhiteList) {
    let _0xe885cf = window.NameWhiteList[_0xb714da];
    if (_0xe885cf == "") {
      continue;
    }
    if (_0x1e9757.indexOf(_0xe885cf) != -1) {
      return true;
    }
  }
  for (let _0x5643dc in window.NameBlacklist) {
    let _0x179510 = window.NameBlacklist[_0x5643dc];
    if (_0x179510 == "") {
      continue;
    }
    if (_0x1e9757.indexOf(_0x179510) != -1) {
      return false;
    }
  }
  return true;
}
window.PanghuNotice = "            ※※《胖虎迷雾》S6更新公告※※";
window.PanghuNotice += "\n\n【4.3更新说明】\n\n1.调整【厨神妙妙屋】自动流程";
window.PanghuNotice += "\n\n【3.31更新说明】\n\n1.修复【掉线重登】无效问题";
window.PanghuNotice += "\n\n【3.28更新说明】\n\n1.同步官方版本";
window.PanghuNotice += "\n\n【3.24更新说明】\n\n1.新增【厨神功能】\n\n【自动厨神】自动找食物塔\n\n【厨神妙妙屋】自动激活机关";
window.PanghuNotice += "\n\n2.新增【菜谱图鉴】可查看料理属性";
App.sZz = function (_0x4130f4) {
  try {
    const _0x57be63 = new TextEncoder().encode(_0x4130f4),
      _0xfaba9d = pako.deflate(_0x57be63),
      _0x1b7b54 = btoa(String.fromCharCode.apply(null, _0xfaba9d));
    return _0x1b7b54;
  } catch (_0x552523) {
    return null;
  }
};
App.sUz = function (_0x2194b3) {
  try {
    let _0x2f2f5d = atob(_0x2194b3),
      _0x220fe5 = _0x2f2f5d.split("").map(function (_0x42782a) {
        return _0x42782a.charCodeAt(0);
      }),
      _0x41771b = new Uint8Array(_0x220fe5),
      _0x108dec = pako.inflate(_0x41771b);
    _0x2f2f5d = new TextDecoder().decode(_0x108dec);
    return decodeURIComponent(_0x2f2f5d);
  } catch (_0x4ac469) {
    return null;
  }
};
function insertCharAt(_0x5f3b8d, _0x15d4ff, _0x14e433) {
  return _0x5f3b8d.slice(0, _0x15d4ff) + _0x14e433 + _0x5f3b8d.slice(_0x15d4ff);
}
var MD5 = function (_0x4c8454) {
  function _0x4758e7(_0x43ad40) {
    if (_0x197e9d[_0x43ad40]) {
      return _0x197e9d[_0x43ad40].exports;
    }
    _0x197e9d[_0x43ad40] = {
      i: _0x43ad40,
      l: !1,
      exports: {}
    };
    var _0x152081 = _0x197e9d[_0x43ad40];
    _0x4c8454[_0x43ad40].call(_0x152081.exports, _0x152081, _0x152081.exports, _0x4758e7);
    _0x152081.l = !0;
    return _0x152081.exports;
  }
  var _0x197e9d = {};
  _0x4758e7.m = _0x4c8454;
  _0x4758e7.c = _0x197e9d;
  _0x4758e7.i = function (_0x1cf843) {
    return _0x1cf843;
  };
  _0x4758e7.d = function (_0x895412, _0xf42fdd, _0x4ed338) {
    const _0x28e7c4 = {
      configurable: !1,
      enumerable: !0,
      get: _0x4ed338
    };
    _0x4758e7.o(_0x895412, _0xf42fdd) || Object.defineProperty(_0x895412, _0xf42fdd, _0x28e7c4);
  };
  _0x4758e7.n = function (_0x18f7fa) {
    var _0x124d28 = _0x18f7fa && _0x18f7fa.__esModule ? function () {
      return _0x18f7fa.default;
    } : function () {
      return _0x18f7fa;
    };
    _0x4758e7.d(_0x124d28, "a", _0x124d28);
    return _0x124d28;
  };
  _0x4758e7.o = function (_0x5b71a3, _0x39ca7b) {
    return Object.prototype.hasOwnProperty.call(_0x5b71a3, _0x39ca7b);
  };
  _0x4758e7.p = "";
  return _0x4758e7(_0x4758e7.s = 4);
}([function (_0x30b754, _0x589aa3) {
  var _0x2109dd = {
    utf8: {
      stringToBytes: function (_0x469372) {
        return _0x2109dd.bin.stringToBytes(unescape(encodeURIComponent(_0x469372)));
      },
      bytesToString: function (_0x53bc04) {
        return decodeURIComponent(escape(_0x2109dd.bin.bytesToString(_0x53bc04)));
      }
    },
    bin: {
      stringToBytes: function (_0x2b0332) {
        for (var _0x27656e = [], _0x5e3bb3 = 0; _0x5e3bb3 < _0x2b0332.length; _0x5e3bb3++) {
          _0x27656e.push(255 & _0x2b0332.charCodeAt(_0x5e3bb3));
        }
        return _0x27656e;
      },
      bytesToString: function (_0x4b8c98) {
        for (var _0x5174a8 = [], _0x34cc9b = 0; _0x34cc9b < _0x4b8c98.length; _0x34cc9b++) {
          _0x5174a8.push(String.fromCharCode(_0x4b8c98[_0x34cc9b]));
        }
        return _0x5174a8.join("");
      }
    }
  };
  _0x30b754.exports = _0x2109dd;
}, function (_0x411086, _0x3a6a42, _0x595e42) {
  !function () {
    var _0x2cb2af = _0x595e42(2),
      _0x53a578 = _0x595e42(0).utf8,
      _0x5efae9 = _0x595e42(3),
      _0xf41f21 = _0x595e42(0).bin,
      _0x172a9c = function (_0x5411c9, _0x4c5a9b) {
        _0x5411c9.constructor == String ? _0x5411c9 = _0x4c5a9b && "binary" === _0x4c5a9b.encoding ? _0xf41f21.stringToBytes(_0x5411c9) : _0x53a578.stringToBytes(_0x5411c9) : _0x5efae9(_0x5411c9) ? _0x5411c9 = Array.prototype.slice.call(_0x5411c9, 0) : Array.isArray(_0x5411c9) || (_0x5411c9 = _0x5411c9.toString());
        for (var _0x117689 = _0x2cb2af.bytesToWords(_0x5411c9), _0x378f4a = 8 * _0x5411c9.length, _0x3d42dc = 1732584193, _0x23c998 = -271733879, _0x1ab5bd = -1732584194, _0x148dd3 = 271733878, _0x23d324 = 0; _0x23d324 < _0x117689.length; _0x23d324++) {
          _0x117689[_0x23d324] = 16711935 & (_0x117689[_0x23d324] << 8 | _0x117689[_0x23d324] >>> 24) | 4278255360 & (_0x117689[_0x23d324] << 24 | _0x117689[_0x23d324] >>> 8);
        }
        _0x117689[_0x378f4a >>> 5] |= 128 << _0x378f4a % 32;
        _0x117689[14 + (_0x378f4a + 64 >>> 9 << 4)] = _0x378f4a;
        for (var _0x371992 = _0x172a9c._ff, _0x17bc26 = _0x172a9c._gg, _0x528e4b = _0x172a9c._hh, _0x25e9b0 = _0x172a9c._ii, _0x23d324 = 0; _0x23d324 < _0x117689.length; _0x23d324 += 16) {
          var _0x5974d0 = _0x3d42dc,
            _0x56a8f9 = _0x23c998,
            _0x3835c1 = _0x1ab5bd,
            _0x30afe3 = _0x148dd3;
          _0x3d42dc = _0x371992(_0x3d42dc, _0x23c998, _0x1ab5bd, _0x148dd3, _0x117689[_0x23d324 + 0], 7, -680876936);
          _0x148dd3 = _0x371992(_0x148dd3, _0x3d42dc, _0x23c998, _0x1ab5bd, _0x117689[_0x23d324 + 1], 12, -389564586);
          _0x1ab5bd = _0x371992(_0x1ab5bd, _0x148dd3, _0x3d42dc, _0x23c998, _0x117689[_0x23d324 + 2], 17, 606105819);
          _0x23c998 = _0x371992(_0x23c998, _0x1ab5bd, _0x148dd3, _0x3d42dc, _0x117689[_0x23d324 + 3], 22, -1044525330);
          _0x3d42dc = _0x371992(_0x3d42dc, _0x23c998, _0x1ab5bd, _0x148dd3, _0x117689[_0x23d324 + 4], 7, -176418897);
          _0x148dd3 = _0x371992(_0x148dd3, _0x3d42dc, _0x23c998, _0x1ab5bd, _0x117689[_0x23d324 + 5], 12, 1200080426);
          _0x1ab5bd = _0x371992(_0x1ab5bd, _0x148dd3, _0x3d42dc, _0x23c998, _0x117689[_0x23d324 + 6], 17, -1473231341);
          _0x23c998 = _0x371992(_0x23c998, _0x1ab5bd, _0x148dd3, _0x3d42dc, _0x117689[_0x23d324 + 7], 22, -45705983);
          _0x3d42dc = _0x371992(_0x3d42dc, _0x23c998, _0x1ab5bd, _0x148dd3, _0x117689[_0x23d324 + 8], 7, 1770035416);
          _0x148dd3 = _0x371992(_0x148dd3, _0x3d42dc, _0x23c998, _0x1ab5bd, _0x117689[_0x23d324 + 9], 12, -1958414417);
          _0x1ab5bd = _0x371992(_0x1ab5bd, _0x148dd3, _0x3d42dc, _0x23c998, _0x117689[_0x23d324 + 10], 17, -42063);
          _0x23c998 = _0x371992(_0x23c998, _0x1ab5bd, _0x148dd3, _0x3d42dc, _0x117689[_0x23d324 + 11], 22, -1990404162);
          _0x3d42dc = _0x371992(_0x3d42dc, _0x23c998, _0x1ab5bd, _0x148dd3, _0x117689[_0x23d324 + 12], 7, 1804603682);
          _0x148dd3 = _0x371992(_0x148dd3, _0x3d42dc, _0x23c998, _0x1ab5bd, _0x117689[_0x23d324 + 13], 12, -40341101);
          _0x1ab5bd = _0x371992(_0x1ab5bd, _0x148dd3, _0x3d42dc, _0x23c998, _0x117689[_0x23d324 + 14], 17, -1502002290);
          _0x23c998 = _0x371992(_0x23c998, _0x1ab5bd, _0x148dd3, _0x3d42dc, _0x117689[_0x23d324 + 15], 22, 1236535329);
          _0x3d42dc = _0x17bc26(_0x3d42dc, _0x23c998, _0x1ab5bd, _0x148dd3, _0x117689[_0x23d324 + 1], 5, -165796510);
          _0x148dd3 = _0x17bc26(_0x148dd3, _0x3d42dc, _0x23c998, _0x1ab5bd, _0x117689[_0x23d324 + 6], 9, -1069501632);
          _0x1ab5bd = _0x17bc26(_0x1ab5bd, _0x148dd3, _0x3d42dc, _0x23c998, _0x117689[_0x23d324 + 11], 14, 643717713);
          _0x23c998 = _0x17bc26(_0x23c998, _0x1ab5bd, _0x148dd3, _0x3d42dc, _0x117689[_0x23d324 + 0], 20, -373897302);
          _0x3d42dc = _0x17bc26(_0x3d42dc, _0x23c998, _0x1ab5bd, _0x148dd3, _0x117689[_0x23d324 + 5], 5, -701558691);
          _0x148dd3 = _0x17bc26(_0x148dd3, _0x3d42dc, _0x23c998, _0x1ab5bd, _0x117689[_0x23d324 + 10], 9, 38016083);
          _0x1ab5bd = _0x17bc26(_0x1ab5bd, _0x148dd3, _0x3d42dc, _0x23c998, _0x117689[_0x23d324 + 15], 14, -660478335);
          _0x23c998 = _0x17bc26(_0x23c998, _0x1ab5bd, _0x148dd3, _0x3d42dc, _0x117689[_0x23d324 + 4], 20, -405537848);
          _0x3d42dc = _0x17bc26(_0x3d42dc, _0x23c998, _0x1ab5bd, _0x148dd3, _0x117689[_0x23d324 + 9], 5, 568446438);
          _0x148dd3 = _0x17bc26(_0x148dd3, _0x3d42dc, _0x23c998, _0x1ab5bd, _0x117689[_0x23d324 + 14], 9, -1019803690);
          _0x1ab5bd = _0x17bc26(_0x1ab5bd, _0x148dd3, _0x3d42dc, _0x23c998, _0x117689[_0x23d324 + 3], 14, -187363961);
          _0x23c998 = _0x17bc26(_0x23c998, _0x1ab5bd, _0x148dd3, _0x3d42dc, _0x117689[_0x23d324 + 8], 20, 1163531501);
          _0x3d42dc = _0x17bc26(_0x3d42dc, _0x23c998, _0x1ab5bd, _0x148dd3, _0x117689[_0x23d324 + 13], 5, -1444681467);
          _0x148dd3 = _0x17bc26(_0x148dd3, _0x3d42dc, _0x23c998, _0x1ab5bd, _0x117689[_0x23d324 + 2], 9, -51403784);
          _0x1ab5bd = _0x17bc26(_0x1ab5bd, _0x148dd3, _0x3d42dc, _0x23c998, _0x117689[_0x23d324 + 7], 14, 1735328473);
          _0x23c998 = _0x17bc26(_0x23c998, _0x1ab5bd, _0x148dd3, _0x3d42dc, _0x117689[_0x23d324 + 12], 20, -1926607734);
          _0x3d42dc = _0x528e4b(_0x3d42dc, _0x23c998, _0x1ab5bd, _0x148dd3, _0x117689[_0x23d324 + 5], 4, -378558);
          _0x148dd3 = _0x528e4b(_0x148dd3, _0x3d42dc, _0x23c998, _0x1ab5bd, _0x117689[_0x23d324 + 8], 11, -2022574463);
          _0x1ab5bd = _0x528e4b(_0x1ab5bd, _0x148dd3, _0x3d42dc, _0x23c998, _0x117689[_0x23d324 + 11], 16, 1839030562);
          _0x23c998 = _0x528e4b(_0x23c998, _0x1ab5bd, _0x148dd3, _0x3d42dc, _0x117689[_0x23d324 + 14], 23, -35309556);
          _0x3d42dc = _0x528e4b(_0x3d42dc, _0x23c998, _0x1ab5bd, _0x148dd3, _0x117689[_0x23d324 + 1], 4, -1530992060);
          _0x148dd3 = _0x528e4b(_0x148dd3, _0x3d42dc, _0x23c998, _0x1ab5bd, _0x117689[_0x23d324 + 4], 11, 1272893353);
          _0x1ab5bd = _0x528e4b(_0x1ab5bd, _0x148dd3, _0x3d42dc, _0x23c998, _0x117689[_0x23d324 + 7], 16, -155497632);
          _0x23c998 = _0x528e4b(_0x23c998, _0x1ab5bd, _0x148dd3, _0x3d42dc, _0x117689[_0x23d324 + 10], 23, -1094730640);
          _0x3d42dc = _0x528e4b(_0x3d42dc, _0x23c998, _0x1ab5bd, _0x148dd3, _0x117689[_0x23d324 + 13], 4, 681279174);
          _0x148dd3 = _0x528e4b(_0x148dd3, _0x3d42dc, _0x23c998, _0x1ab5bd, _0x117689[_0x23d324 + 0], 11, -358537222);
          _0x1ab5bd = _0x528e4b(_0x1ab5bd, _0x148dd3, _0x3d42dc, _0x23c998, _0x117689[_0x23d324 + 3], 16, -722521979);
          _0x23c998 = _0x528e4b(_0x23c998, _0x1ab5bd, _0x148dd3, _0x3d42dc, _0x117689[_0x23d324 + 6], 23, 76029189);
          _0x3d42dc = _0x528e4b(_0x3d42dc, _0x23c998, _0x1ab5bd, _0x148dd3, _0x117689[_0x23d324 + 9], 4, -640364487);
          _0x148dd3 = _0x528e4b(_0x148dd3, _0x3d42dc, _0x23c998, _0x1ab5bd, _0x117689[_0x23d324 + 12], 11, -421815835);
          _0x1ab5bd = _0x528e4b(_0x1ab5bd, _0x148dd3, _0x3d42dc, _0x23c998, _0x117689[_0x23d324 + 15], 16, 530742520);
          _0x23c998 = _0x528e4b(_0x23c998, _0x1ab5bd, _0x148dd3, _0x3d42dc, _0x117689[_0x23d324 + 2], 23, -995338651);
          _0x3d42dc = _0x25e9b0(_0x3d42dc, _0x23c998, _0x1ab5bd, _0x148dd3, _0x117689[_0x23d324 + 0], 6, -198630844);
          _0x148dd3 = _0x25e9b0(_0x148dd3, _0x3d42dc, _0x23c998, _0x1ab5bd, _0x117689[_0x23d324 + 7], 10, 1126891415);
          _0x1ab5bd = _0x25e9b0(_0x1ab5bd, _0x148dd3, _0x3d42dc, _0x23c998, _0x117689[_0x23d324 + 14], 15, -1416354905);
          _0x23c998 = _0x25e9b0(_0x23c998, _0x1ab5bd, _0x148dd3, _0x3d42dc, _0x117689[_0x23d324 + 5], 21, -57434055);
          _0x3d42dc = _0x25e9b0(_0x3d42dc, _0x23c998, _0x1ab5bd, _0x148dd3, _0x117689[_0x23d324 + 12], 6, 1700485571);
          _0x148dd3 = _0x25e9b0(_0x148dd3, _0x3d42dc, _0x23c998, _0x1ab5bd, _0x117689[_0x23d324 + 3], 10, -1894986606);
          _0x1ab5bd = _0x25e9b0(_0x1ab5bd, _0x148dd3, _0x3d42dc, _0x23c998, _0x117689[_0x23d324 + 10], 15, -1051523);
          _0x23c998 = _0x25e9b0(_0x23c998, _0x1ab5bd, _0x148dd3, _0x3d42dc, _0x117689[_0x23d324 + 1], 21, -2054922799);
          _0x3d42dc = _0x25e9b0(_0x3d42dc, _0x23c998, _0x1ab5bd, _0x148dd3, _0x117689[_0x23d324 + 8], 6, 1873313359);
          _0x148dd3 = _0x25e9b0(_0x148dd3, _0x3d42dc, _0x23c998, _0x1ab5bd, _0x117689[_0x23d324 + 15], 10, -30611744);
          _0x1ab5bd = _0x25e9b0(_0x1ab5bd, _0x148dd3, _0x3d42dc, _0x23c998, _0x117689[_0x23d324 + 6], 15, -1560198380);
          _0x23c998 = _0x25e9b0(_0x23c998, _0x1ab5bd, _0x148dd3, _0x3d42dc, _0x117689[_0x23d324 + 13], 21, 1309151649);
          _0x3d42dc = _0x25e9b0(_0x3d42dc, _0x23c998, _0x1ab5bd, _0x148dd3, _0x117689[_0x23d324 + 4], 6, -145523070);
          _0x148dd3 = _0x25e9b0(_0x148dd3, _0x3d42dc, _0x23c998, _0x1ab5bd, _0x117689[_0x23d324 + 11], 10, -1120210379);
          _0x1ab5bd = _0x25e9b0(_0x1ab5bd, _0x148dd3, _0x3d42dc, _0x23c998, _0x117689[_0x23d324 + 2], 15, 718787259);
          _0x23c998 = _0x25e9b0(_0x23c998, _0x1ab5bd, _0x148dd3, _0x3d42dc, _0x117689[_0x23d324 + 9], 21, -343485551);
          _0x3d42dc = _0x3d42dc + _0x5974d0 >>> 0;
          _0x23c998 = _0x23c998 + _0x56a8f9 >>> 0;
          _0x1ab5bd = _0x1ab5bd + _0x3835c1 >>> 0;
          _0x148dd3 = _0x148dd3 + _0x30afe3 >>> 0;
        }
        return _0x2cb2af.endian([_0x3d42dc, _0x23c998, _0x1ab5bd, _0x148dd3]);
      };
    _0x172a9c._ff = function (_0xae01d1, _0x418e06, _0x1f11e3, _0x59d229, _0x43c200, _0xc6c147, _0x195fe1) {
      var _0x37a6ca = _0xae01d1 + (_0x418e06 & _0x1f11e3 | ~_0x418e06 & _0x59d229) + (_0x43c200 >>> 0) + _0x195fe1;
      return (_0x37a6ca << _0xc6c147 | _0x37a6ca >>> 32 - _0xc6c147) + _0x418e06;
    };
    _0x172a9c._gg = function (_0x30dc5f, _0xb36852, _0x203ac0, _0x76816e, _0x2ae97d, _0x1921f8, _0x501a3a) {
      var _0x254b33 = _0x30dc5f + (_0xb36852 & _0x76816e | _0x203ac0 & ~_0x76816e) + (_0x2ae97d >>> 0) + _0x501a3a;
      return (_0x254b33 << _0x1921f8 | _0x254b33 >>> 32 - _0x1921f8) + _0xb36852;
    };
    _0x172a9c._hh = function (_0x29de5a, _0x59292c, _0x15fe6c, _0x708192, _0x4379fe, _0x108f4a, _0x59abb7) {
      var _0x7f8b3 = _0x29de5a + (_0x59292c ^ _0x15fe6c ^ _0x708192) + (_0x4379fe >>> 0) + _0x59abb7;
      return (_0x7f8b3 << _0x108f4a | _0x7f8b3 >>> 32 - _0x108f4a) + _0x59292c;
    };
    _0x172a9c._ii = function (_0x1c6664, _0x596ab3, _0x9b1e7b, _0x1f840c, _0x32ba47, _0x2b7e28, _0x6bd44f) {
      var _0x2a6881 = _0x1c6664 + (_0x9b1e7b ^ (_0x596ab3 | ~_0x1f840c)) + (_0x32ba47 >>> 0) + _0x6bd44f;
      return (_0x2a6881 << _0x2b7e28 | _0x2a6881 >>> 32 - _0x2b7e28) + _0x596ab3;
    };
    _0x172a9c._blocksize = 16;
    _0x172a9c._digestsize = 16;
    _0x411086.exports = function (_0x15571a, _0x3c2b2d) {
      if (void 0 === _0x15571a || null === _0x15571a) {
        throw new Error("Illegal argument " + _0x15571a);
      }
      var _0xac71fd = _0x2cb2af.wordsToBytes(_0x172a9c(_0x15571a, _0x3c2b2d));
      return _0x3c2b2d && _0x3c2b2d.asBytes ? _0xac71fd : _0x3c2b2d && _0x3c2b2d.asString ? _0xf41f21.bytesToString(_0xac71fd) : _0x2cb2af.bytesToHex(_0xac71fd);
    };
  }();
}, function (_0x406d8f, _0x1e4a81) {
  !function () {
    var _0x38c8a3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      _0x4d9db8 = {
        rotl: function (_0x1349ce, _0x1087b1) {
          return _0x1349ce << _0x1087b1 | _0x1349ce >>> 32 - _0x1087b1;
        },
        rotr: function (_0x2292d6, _0x2687ac) {
          return _0x2292d6 << 32 - _0x2687ac | _0x2292d6 >>> _0x2687ac;
        },
        endian: function (_0x1b1b4a) {
          if (_0x1b1b4a.constructor == Number) {
            return 16711935 & _0x4d9db8.rotl(_0x1b1b4a, 8) | 4278255360 & _0x4d9db8.rotl(_0x1b1b4a, 24);
          }
          for (var _0x162c65 = 0; _0x162c65 < _0x1b1b4a.length; _0x162c65++) {
            _0x1b1b4a[_0x162c65] = _0x4d9db8.endian(_0x1b1b4a[_0x162c65]);
          }
          return _0x1b1b4a;
        },
        randomBytes: function (_0x1637f7) {
          for (var _0x1a0c97 = []; _0x1637f7 > 0; _0x1637f7--) {
            _0x1a0c97.push(Math.floor(256 * Math.random()));
          }
          return _0x1a0c97;
        },
        bytesToWords: function (_0x3193dc) {
          for (var _0x541c9b = [], _0x36bb5e = 0, _0x44e23c = 0; _0x36bb5e < _0x3193dc.length; _0x36bb5e++, _0x44e23c += 8) {
            _0x541c9b[_0x44e23c >>> 5] |= _0x3193dc[_0x36bb5e] << 24 - _0x44e23c % 32;
          }
          return _0x541c9b;
        },
        wordsToBytes: function (_0x1019c1) {
          for (var _0x158651 = [], _0x5376e0 = 0; _0x5376e0 < 32 * _0x1019c1.length; _0x5376e0 += 8) {
            _0x158651.push(_0x1019c1[_0x5376e0 >>> 5] >>> 24 - _0x5376e0 % 32 & 255);
          }
          return _0x158651;
        },
        bytesToHex: function (_0x40fbab) {
          for (var _0x2b9c81 = [], _0x4ab7a9 = 0; _0x4ab7a9 < _0x40fbab.length; _0x4ab7a9++) {
            _0x2b9c81.push((_0x40fbab[_0x4ab7a9] >>> 4).toString(16));
            _0x2b9c81.push((15 & _0x40fbab[_0x4ab7a9]).toString(16));
          }
          return _0x2b9c81.join("");
        },
        hexToBytes: function (_0x2f68d4) {
          for (var _0x1ede22 = [], _0x47daf2 = 0; _0x47daf2 < _0x2f68d4.length; _0x47daf2 += 2) {
            _0x1ede22.push(parseInt(_0x2f68d4.substr(_0x47daf2, 2), 16));
          }
          return _0x1ede22;
        },
        bytesToBase64: function (_0x5a07b2) {
          for (var _0x4932d5 = [], _0x11a3cb = 0; _0x11a3cb < _0x5a07b2.length; _0x11a3cb += 3) {
            for (var _0x4e8ee7 = _0x5a07b2[_0x11a3cb] << 16 | _0x5a07b2[_0x11a3cb + 1] << 8 | _0x5a07b2[_0x11a3cb + 2], _0x198312 = 0; _0x198312 < 4; _0x198312++) {
              8 * _0x11a3cb + 6 * _0x198312 <= 8 * _0x5a07b2.length ? _0x4932d5.push(_0x38c8a3.charAt(_0x4e8ee7 >>> 6 * (3 - _0x198312) & 63)) : _0x4932d5.push("=");
            }
          }
          return _0x4932d5.join("");
        },
        base64ToBytes: function (_0x43e967) {
          _0x43e967 = _0x43e967.replace(/[^A-Z0-9+\/]/gi, "");
          for (var _0x3df6f7 = [], _0x465881 = 0, _0x24146b = 0; _0x465881 < _0x43e967.length; _0x24146b = ++_0x465881 % 4) {
            0 != _0x24146b && _0x3df6f7.push((_0x38c8a3.indexOf(_0x43e967.charAt(_0x465881 - 1)) & Math.pow(2, -2 * _0x24146b + 8) - 1) << 2 * _0x24146b | _0x38c8a3.indexOf(_0x43e967.charAt(_0x465881)) >>> 6 - 2 * _0x24146b);
          }
          return _0x3df6f7;
        }
      };
    _0x406d8f.exports = _0x4d9db8;
  }();
}, function (_0x1554bc, _0x860ec3) {
  function _0x6b2ee1(_0x444d26) {
    return !!_0x444d26.constructor && "function" == typeof _0x444d26.constructor.isBuffer && _0x444d26.constructor.isBuffer(_0x444d26);
  }
  function _0x4c8bfe(_0x36f25f) {
    return "function" == typeof _0x36f25f.readFloatLE && "function" == typeof _0x36f25f.slice && _0x6b2ee1(_0x36f25f.slice(0, 0));
  }
  _0x1554bc.exports = function (_0x2e410d) {
    return null != _0x2e410d && (_0x6b2ee1(_0x2e410d) || _0x4c8bfe(_0x2e410d) || !!_0x2e410d._isBuffer);
  };
}, function (_0x4fd3d1, _0x2df5d9, _0x3d8a3f) {
  _0x4fd3d1.exports = _0x3d8a3f(1);
}]); /*! pako 2.0.3 https://github.com/nodeca/pako @license (MIT AND Zlib) */
!function (_0x523554, _0x50210d) {
  "object" == typeof exports && "undefined" != typeof module ? _0x50210d(exports) : "function" == typeof define && define.amd ? define(["exports"], _0x50210d) : _0x50210d((_0x523554 = "undefined" != typeof globalThis ? globalThis : _0x523554 || self).pako = {});
}(this, function (_0x5df6fc) {
  'use strict';

  function _0x19fe46(_0x34ce85) {
    let _0x1c2e06 = _0x34ce85.length;
    for (; --_0x1c2e06 >= 0;) {
      _0x34ce85[_0x1c2e06] = 0;
    }
  }
  const _0x208602 = 256,
    _0x5422fe = 286,
    _0x4316ff = 30,
    _0x2d5435 = 15,
    _0x5a3001 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]),
    _0x500b9d = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]),
    _0x51c5b1 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]),
    _0x285635 = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
    _0x4d8207 = new Array(576);
  _0x19fe46(_0x4d8207);
  const _0x3e2311 = new Array(60);
  _0x19fe46(_0x3e2311);
  const _0x4ad350 = new Array(512);
  _0x19fe46(_0x4ad350);
  const _0x5f5c34 = new Array(256);
  _0x19fe46(_0x5f5c34);
  const _0x2fbefe = new Array(29);
  _0x19fe46(_0x2fbefe);
  const _0x241ee4 = new Array(_0x4316ff);
  function _0x2866e9(_0x3a550d, _0xfeda90, _0x2bc4e0, _0x51a02b, _0xdced43) {
    this.static_tree = _0x3a550d;
    this.extra_bits = _0xfeda90;
    this.extra_base = _0x2bc4e0;
    this.elems = _0x51a02b;
    this.max_length = _0xdced43;
    this.has_stree = _0x3a550d && _0x3a550d.length;
  }
  let _0x160597, _0xa35ea9, _0x47dd30;
  function _0x56ef22(_0x12e698, _0x3b9e52) {
    this.dyn_tree = _0x12e698;
    this.max_code = 0;
    this.stat_desc = _0x3b9e52;
  }
  _0x19fe46(_0x241ee4);
  const _0x5621cb = _0x2ca1d5 => _0x2ca1d5 < 256 ? _0x4ad350[_0x2ca1d5] : _0x4ad350[256 + (_0x2ca1d5 >>> 7)],
    _0xd3b834 = (_0x3e514a, _0x254a7a) => {
      _0x3e514a.pending_buf[_0x3e514a.pending++] = 255 & _0x254a7a;
      _0x3e514a.pending_buf[_0x3e514a.pending++] = _0x254a7a >>> 8 & 255;
    },
    _0x59a158 = (_0x56413b, _0x36988f, _0x40fdd3) => {
      _0x56413b.bi_valid > 16 - _0x40fdd3 ? (_0x56413b.bi_buf |= _0x36988f << _0x56413b.bi_valid & 65535, _0xd3b834(_0x56413b, _0x56413b.bi_buf), _0x56413b.bi_buf = _0x36988f >> 16 - _0x56413b.bi_valid, _0x56413b.bi_valid += _0x40fdd3 - 16) : (_0x56413b.bi_buf |= _0x36988f << _0x56413b.bi_valid & 65535, _0x56413b.bi_valid += _0x40fdd3);
    },
    _0x24849a = (_0x271848, _0x49a411, _0x522ebf) => {
      _0x59a158(_0x271848, _0x522ebf[2 * _0x49a411], _0x522ebf[2 * _0x49a411 + 1]);
    },
    _0x2eab44 = (_0x21a854, _0x891839) => {
      let _0xf0caec = 0;
      do {
        _0xf0caec |= 1 & _0x21a854;
        _0x21a854 >>>= 1;
        _0xf0caec <<= 1;
      } while (--_0x891839 > 0);
      return _0xf0caec >>> 1;
    },
    _0x4e1c4e = (_0xb18bec, _0xd1c726, _0x1bb4f8) => {
      const _0x44b44f = new Array(16);
      let _0x53aed2,
        _0x352090,
        _0x129c7c = 0;
      for (_0x53aed2 = 1; _0x53aed2 <= _0x2d5435; _0x53aed2++) {
        _0x44b44f[_0x53aed2] = _0x129c7c = _0x129c7c + _0x1bb4f8[_0x53aed2 - 1] << 1;
      }
      for (_0x352090 = 0; _0x352090 <= _0xd1c726; _0x352090++) {
        let _0x2380a8 = _0xb18bec[2 * _0x352090 + 1];
        0 !== _0x2380a8 && (_0xb18bec[2 * _0x352090] = _0x2eab44(_0x44b44f[_0x2380a8]++, _0x2380a8));
      }
    },
    _0x4e9f27 = _0x225da2 => {
      let _0x445dea;
      for (_0x445dea = 0; _0x445dea < _0x5422fe; _0x445dea++) {
        _0x225da2.dyn_ltree[2 * _0x445dea] = 0;
      }
      for (_0x445dea = 0; _0x445dea < _0x4316ff; _0x445dea++) {
        _0x225da2.dyn_dtree[2 * _0x445dea] = 0;
      }
      for (_0x445dea = 0; _0x445dea < 19; _0x445dea++) {
        _0x225da2.bl_tree[2 * _0x445dea] = 0;
      }
      _0x225da2.dyn_ltree[512] = 1;
      _0x225da2.opt_len = _0x225da2.static_len = 0;
      _0x225da2.last_lit = _0x225da2.matches = 0;
    },
    _0x40a41f = _0xd9d577 => {
      _0xd9d577.bi_valid > 8 ? _0xd3b834(_0xd9d577, _0xd9d577.bi_buf) : _0xd9d577.bi_valid > 0 && (_0xd9d577.pending_buf[_0xd9d577.pending++] = _0xd9d577.bi_buf);
      _0xd9d577.bi_buf = 0;
      _0xd9d577.bi_valid = 0;
    },
    _0xe3ab0b = (_0x2f4c9a, _0x511f7e, _0x350292, _0x51bfce) => {
      const _0x171491 = 2 * _0x511f7e,
        _0x59c322 = 2 * _0x350292;
      return _0x2f4c9a[_0x171491] < _0x2f4c9a[_0x59c322] || _0x2f4c9a[_0x171491] === _0x2f4c9a[_0x59c322] && _0x51bfce[_0x511f7e] <= _0x51bfce[_0x350292];
    },
    _0x293759 = (_0x4e8243, _0x5c8255, _0x1df746) => {
      const _0x5f430b = _0x4e8243.heap[_0x1df746];
      let _0x487ef5 = _0x1df746 << 1;
      for (; _0x487ef5 <= _0x4e8243.heap_len && (_0x487ef5 < _0x4e8243.heap_len && _0xe3ab0b(_0x5c8255, _0x4e8243.heap[_0x487ef5 + 1], _0x4e8243.heap[_0x487ef5], _0x4e8243.depth) && _0x487ef5++, !_0xe3ab0b(_0x5c8255, _0x5f430b, _0x4e8243.heap[_0x487ef5], _0x4e8243.depth));) {
        _0x4e8243.heap[_0x1df746] = _0x4e8243.heap[_0x487ef5];
        _0x1df746 = _0x487ef5;
        _0x487ef5 <<= 1;
      }
      _0x4e8243.heap[_0x1df746] = _0x5f430b;
    },
    _0x12b297 = (_0x143820, _0x1518b1, _0x2196de) => {
      let _0x2c1b91,
        _0x43f80c,
        _0x2ad83c,
        _0x5b468f,
        _0x28ad36 = 0;
      if (0 !== _0x143820.last_lit) {
        do {
          _0x2c1b91 = _0x143820.pending_buf[_0x143820.d_buf + 2 * _0x28ad36] << 8 | _0x143820.pending_buf[_0x143820.d_buf + 2 * _0x28ad36 + 1];
          _0x43f80c = _0x143820.pending_buf[_0x143820.l_buf + _0x28ad36];
          _0x28ad36++;
          0 === _0x2c1b91 ? _0x24849a(_0x143820, _0x43f80c, _0x1518b1) : (_0x2ad83c = _0x5f5c34[_0x43f80c], _0x24849a(_0x143820, _0x2ad83c + _0x208602 + 1, _0x1518b1), _0x5b468f = _0x5a3001[_0x2ad83c], 0 !== _0x5b468f && (_0x43f80c -= _0x2fbefe[_0x2ad83c], _0x59a158(_0x143820, _0x43f80c, _0x5b468f)), _0x2c1b91--, _0x2ad83c = _0x5621cb(_0x2c1b91), _0x24849a(_0x143820, _0x2ad83c, _0x2196de), _0x5b468f = _0x500b9d[_0x2ad83c], 0 !== _0x5b468f && (_0x2c1b91 -= _0x241ee4[_0x2ad83c], _0x59a158(_0x143820, _0x2c1b91, _0x5b468f)));
        } while (_0x28ad36 < _0x143820.last_lit);
      }
      _0x24849a(_0x143820, 256, _0x1518b1);
    },
    _0x3f0e5f = (_0x2a4f5c, _0xae11b9) => {
      const _0xe331d7 = _0xae11b9.dyn_tree,
        _0x34b7ca = _0xae11b9.stat_desc.static_tree,
        _0x19fd5f = _0xae11b9.stat_desc.has_stree,
        _0x5624d5 = _0xae11b9.stat_desc.elems;
      let _0x4c680c,
        _0x3eca54,
        _0xbaa241,
        _0xdf5c56 = -1;
      for (_0x2a4f5c.heap_len = 0, _0x2a4f5c.heap_max = 573, _0x4c680c = 0; _0x4c680c < _0x5624d5; _0x4c680c++) {
        0 !== _0xe331d7[2 * _0x4c680c] ? (_0x2a4f5c.heap[++_0x2a4f5c.heap_len] = _0xdf5c56 = _0x4c680c, _0x2a4f5c.depth[_0x4c680c] = 0) : _0xe331d7[2 * _0x4c680c + 1] = 0;
      }
      for (; _0x2a4f5c.heap_len < 2;) {
        _0xbaa241 = _0x2a4f5c.heap[++_0x2a4f5c.heap_len] = _0xdf5c56 < 2 ? ++_0xdf5c56 : 0;
        _0xe331d7[2 * _0xbaa241] = 1;
        _0x2a4f5c.depth[_0xbaa241] = 0;
        _0x2a4f5c.opt_len--;
        _0x19fd5f && (_0x2a4f5c.static_len -= _0x34b7ca[2 * _0xbaa241 + 1]);
      }
      for (_0xae11b9.max_code = _0xdf5c56, _0x4c680c = _0x2a4f5c.heap_len >> 1; _0x4c680c >= 1; _0x4c680c--) {
        _0x293759(_0x2a4f5c, _0xe331d7, _0x4c680c);
      }
      _0xbaa241 = _0x5624d5;
      do {
        _0x4c680c = _0x2a4f5c.heap[1];
        _0x2a4f5c.heap[1] = _0x2a4f5c.heap[_0x2a4f5c.heap_len--];
        _0x293759(_0x2a4f5c, _0xe331d7, 1);
        _0x3eca54 = _0x2a4f5c.heap[1];
        _0x2a4f5c.heap[--_0x2a4f5c.heap_max] = _0x4c680c;
        _0x2a4f5c.heap[--_0x2a4f5c.heap_max] = _0x3eca54;
        _0xe331d7[2 * _0xbaa241] = _0xe331d7[2 * _0x4c680c] + _0xe331d7[2 * _0x3eca54];
        _0x2a4f5c.depth[_0xbaa241] = (_0x2a4f5c.depth[_0x4c680c] >= _0x2a4f5c.depth[_0x3eca54] ? _0x2a4f5c.depth[_0x4c680c] : _0x2a4f5c.depth[_0x3eca54]) + 1;
        _0xe331d7[2 * _0x4c680c + 1] = _0xe331d7[2 * _0x3eca54 + 1] = _0xbaa241;
        _0x2a4f5c.heap[1] = _0xbaa241++;
        _0x293759(_0x2a4f5c, _0xe331d7, 1);
      } while (_0x2a4f5c.heap_len >= 2);
      _0x2a4f5c.heap[--_0x2a4f5c.heap_max] = _0x2a4f5c.heap[1];
      ((_0x4deff8, _0x3168c3) => {
        const _0x5947e6 = _0x3168c3.dyn_tree,
          _0x348411 = _0x3168c3.max_code,
          _0x4bf643 = _0x3168c3.stat_desc.static_tree,
          _0x28d0bc = _0x3168c3.stat_desc.has_stree,
          _0x32bb6a = _0x3168c3.stat_desc.extra_bits,
          _0x274d54 = _0x3168c3.stat_desc.extra_base,
          _0xaefb67 = _0x3168c3.stat_desc.max_length;
        let _0x4703cb,
          _0x399fb7,
          _0x24ae3b,
          _0x1ebe25,
          _0x1c5765,
          _0x1b27b1,
          _0x31347e = 0;
        for (_0x1ebe25 = 0; _0x1ebe25 <= _0x2d5435; _0x1ebe25++) {
          _0x4deff8.bl_count[_0x1ebe25] = 0;
        }
        for (_0x5947e6[2 * _0x4deff8.heap[_0x4deff8.heap_max] + 1] = 0, _0x4703cb = _0x4deff8.heap_max + 1; _0x4703cb < 573; _0x4703cb++) {
          _0x399fb7 = _0x4deff8.heap[_0x4703cb];
          _0x1ebe25 = _0x5947e6[2 * _0x5947e6[2 * _0x399fb7 + 1] + 1] + 1;
          _0x1ebe25 > _0xaefb67 && (_0x1ebe25 = _0xaefb67, _0x31347e++);
          _0x5947e6[2 * _0x399fb7 + 1] = _0x1ebe25;
          _0x399fb7 > _0x348411 || (_0x4deff8.bl_count[_0x1ebe25]++, _0x1c5765 = 0, _0x399fb7 >= _0x274d54 && (_0x1c5765 = _0x32bb6a[_0x399fb7 - _0x274d54]), _0x1b27b1 = _0x5947e6[2 * _0x399fb7], _0x4deff8.opt_len += _0x1b27b1 * (_0x1ebe25 + _0x1c5765), _0x28d0bc && (_0x4deff8.static_len += _0x1b27b1 * (_0x4bf643[2 * _0x399fb7 + 1] + _0x1c5765)));
        }
        if (0 !== _0x31347e) {
          do {
            for (_0x1ebe25 = _0xaefb67 - 1; 0 === _0x4deff8.bl_count[_0x1ebe25];) {
              _0x1ebe25--;
            }
            _0x4deff8.bl_count[_0x1ebe25]--;
            _0x4deff8.bl_count[_0x1ebe25 + 1] += 2;
            _0x4deff8.bl_count[_0xaefb67]--;
            _0x31347e -= 2;
          } while (_0x31347e > 0);
          for (_0x1ebe25 = _0xaefb67; 0 !== _0x1ebe25; _0x1ebe25--) {
            for (_0x399fb7 = _0x4deff8.bl_count[_0x1ebe25]; 0 !== _0x399fb7;) {
              _0x24ae3b = _0x4deff8.heap[--_0x4703cb];
              _0x24ae3b > _0x348411 || (_0x5947e6[2 * _0x24ae3b + 1] !== _0x1ebe25 && (_0x4deff8.opt_len += (_0x1ebe25 - _0x5947e6[2 * _0x24ae3b + 1]) * _0x5947e6[2 * _0x24ae3b], _0x5947e6[2 * _0x24ae3b + 1] = _0x1ebe25), _0x399fb7--);
            }
          }
        }
      })(_0x2a4f5c, _0xae11b9);
      _0x4e1c4e(_0xe331d7, _0xdf5c56, _0x2a4f5c.bl_count);
    },
    _0x4df1ec = (_0x5e4cd3, _0x1a316e, _0x150cbe) => {
      let _0x59e06a,
        _0x43f0c4,
        _0x22f500 = -1,
        _0x29a4a9 = _0x1a316e[1],
        _0x2d3ac4 = 0,
        _0x214df4 = 7,
        _0xb594ef = 4;
      for (0 === _0x29a4a9 && (_0x214df4 = 138, _0xb594ef = 3), _0x1a316e[2 * (_0x150cbe + 1) + 1] = 65535, _0x59e06a = 0; _0x59e06a <= _0x150cbe; _0x59e06a++) {
        _0x43f0c4 = _0x29a4a9;
        _0x29a4a9 = _0x1a316e[2 * (_0x59e06a + 1) + 1];
        ++_0x2d3ac4 < _0x214df4 && _0x43f0c4 === _0x29a4a9 || (_0x2d3ac4 < _0xb594ef ? _0x5e4cd3.bl_tree[2 * _0x43f0c4] += _0x2d3ac4 : 0 !== _0x43f0c4 ? (_0x43f0c4 !== _0x22f500 && _0x5e4cd3.bl_tree[2 * _0x43f0c4]++, _0x5e4cd3.bl_tree[32]++) : _0x2d3ac4 <= 10 ? _0x5e4cd3.bl_tree[34]++ : _0x5e4cd3.bl_tree[36]++, _0x2d3ac4 = 0, _0x22f500 = _0x43f0c4, 0 === _0x29a4a9 ? (_0x214df4 = 138, _0xb594ef = 3) : _0x43f0c4 === _0x29a4a9 ? (_0x214df4 = 6, _0xb594ef = 3) : (_0x214df4 = 7, _0xb594ef = 4));
      }
    },
    _0x3b485c = (_0x20f693, _0x1dbfb4, _0x2b5210) => {
      let _0x10ac2b,
        _0x20cc32,
        _0x4e740b = -1,
        _0x5b9aae = _0x1dbfb4[1],
        _0x343c33 = 0,
        _0x4409fa = 7,
        _0x20c1d0 = 4;
      for (0 === _0x5b9aae && (_0x4409fa = 138, _0x20c1d0 = 3), _0x10ac2b = 0; _0x10ac2b <= _0x2b5210; _0x10ac2b++) {
        if (_0x20cc32 = _0x5b9aae, _0x5b9aae = _0x1dbfb4[2 * (_0x10ac2b + 1) + 1], !(++_0x343c33 < _0x4409fa && _0x20cc32 === _0x5b9aae)) {
          if (_0x343c33 < _0x20c1d0) {
            do {
              _0x24849a(_0x20f693, _0x20cc32, _0x20f693.bl_tree);
            } while (0 != --_0x343c33);
          } else {
            0 !== _0x20cc32 ? (_0x20cc32 !== _0x4e740b && (_0x24849a(_0x20f693, _0x20cc32, _0x20f693.bl_tree), _0x343c33--), _0x24849a(_0x20f693, 16, _0x20f693.bl_tree), _0x59a158(_0x20f693, _0x343c33 - 3, 2)) : _0x343c33 <= 10 ? (_0x24849a(_0x20f693, 17, _0x20f693.bl_tree), _0x59a158(_0x20f693, _0x343c33 - 3, 3)) : (_0x24849a(_0x20f693, 18, _0x20f693.bl_tree), _0x59a158(_0x20f693, _0x343c33 - 11, 7));
          }
          _0x343c33 = 0;
          _0x4e740b = _0x20cc32;
          0 === _0x5b9aae ? (_0x4409fa = 138, _0x20c1d0 = 3) : _0x20cc32 === _0x5b9aae ? (_0x4409fa = 6, _0x20c1d0 = 3) : (_0x4409fa = 7, _0x20c1d0 = 4);
        }
      }
    };
  let _0x13342a = !1;
  const _0x172ca2 = (_0x4fa56d, _0xfcf07c, _0x5b3bfc, _0xd3cb20) => {
    _0x59a158(_0x4fa56d, 0 + (_0xd3cb20 ? 1 : 0), 3);
    ((_0x45b5cb, _0x29189a, _0x2443f3, _0xd83a30) => {
      _0x40a41f(_0x45b5cb);
      _0xd83a30 && (_0xd3b834(_0x45b5cb, _0x2443f3), _0xd3b834(_0x45b5cb, ~_0x2443f3));
      _0x45b5cb.pending_buf.set(_0x45b5cb.window.subarray(_0x29189a, _0x29189a + _0x2443f3), _0x45b5cb.pending);
      _0x45b5cb.pending += _0x2443f3;
    })(_0x4fa56d, _0xfcf07c, _0x5b3bfc, !0);
  };
  var _0x12e94e = {
      _tr_init: _0x1305cc => {
        _0x13342a || ((() => {
          let _0x44b656, _0x5b9247, _0xc7c09e, _0x23b52e, _0x17b409;
          const _0x36cea8 = new Array(16);
          for (_0xc7c09e = 0, _0x23b52e = 0; _0x23b52e < 28; _0x23b52e++) {
            for (_0x2fbefe[_0x23b52e] = _0xc7c09e, _0x44b656 = 0; _0x44b656 < 1 << _0x5a3001[_0x23b52e]; _0x44b656++) {
              _0x5f5c34[_0xc7c09e++] = _0x23b52e;
            }
          }
          for (_0x5f5c34[_0xc7c09e - 1] = _0x23b52e, _0x17b409 = 0, _0x23b52e = 0; _0x23b52e < 16; _0x23b52e++) {
            for (_0x241ee4[_0x23b52e] = _0x17b409, _0x44b656 = 0; _0x44b656 < 1 << _0x500b9d[_0x23b52e]; _0x44b656++) {
              _0x4ad350[_0x17b409++] = _0x23b52e;
            }
          }
          for (_0x17b409 >>= 7; _0x23b52e < _0x4316ff; _0x23b52e++) {
            for (_0x241ee4[_0x23b52e] = _0x17b409 << 7, _0x44b656 = 0; _0x44b656 < 1 << _0x500b9d[_0x23b52e] - 7; _0x44b656++) {
              _0x4ad350[256 + _0x17b409++] = _0x23b52e;
            }
          }
          for (_0x5b9247 = 0; _0x5b9247 <= _0x2d5435; _0x5b9247++) {
            _0x36cea8[_0x5b9247] = 0;
          }
          for (_0x44b656 = 0; _0x44b656 <= 143;) {
            _0x4d8207[2 * _0x44b656 + 1] = 8;
            _0x44b656++;
            _0x36cea8[8]++;
          }
          for (; _0x44b656 <= 255;) {
            _0x4d8207[2 * _0x44b656 + 1] = 9;
            _0x44b656++;
            _0x36cea8[9]++;
          }
          for (; _0x44b656 <= 279;) {
            _0x4d8207[2 * _0x44b656 + 1] = 7;
            _0x44b656++;
            _0x36cea8[7]++;
          }
          for (; _0x44b656 <= 287;) {
            _0x4d8207[2 * _0x44b656 + 1] = 8;
            _0x44b656++;
            _0x36cea8[8]++;
          }
          for (_0x4e1c4e(_0x4d8207, 287, _0x36cea8), _0x44b656 = 0; _0x44b656 < _0x4316ff; _0x44b656++) {
            _0x3e2311[2 * _0x44b656 + 1] = 5;
            _0x3e2311[2 * _0x44b656] = _0x2eab44(_0x44b656, 5);
          }
          _0x160597 = new _0x2866e9(_0x4d8207, _0x5a3001, 257, _0x5422fe, _0x2d5435);
          _0xa35ea9 = new _0x2866e9(_0x3e2311, _0x500b9d, 0, _0x4316ff, _0x2d5435);
          _0x47dd30 = new _0x2866e9(new Array(0), _0x51c5b1, 0, 19, 7);
        })(), _0x13342a = !0);
        _0x1305cc.l_desc = new _0x56ef22(_0x1305cc.dyn_ltree, _0x160597);
        _0x1305cc.d_desc = new _0x56ef22(_0x1305cc.dyn_dtree, _0xa35ea9);
        _0x1305cc.bl_desc = new _0x56ef22(_0x1305cc.bl_tree, _0x47dd30);
        _0x1305cc.bi_buf = 0;
        _0x1305cc.bi_valid = 0;
        _0x4e9f27(_0x1305cc);
      },
      _tr_stored_block: _0x172ca2,
      _tr_flush_block: (_0x4f72a7, _0x285818, _0x5eb051, _0x3b413d) => {
        let _0x84a81e,
          _0x2e5733,
          _0x3433be = 0;
        _0x4f72a7.level > 0 ? (2 === _0x4f72a7.strm.data_type && (_0x4f72a7.strm.data_type = (_0x1f5e82 => {
          let _0x3e0794,
            _0x52e191 = 4093624447;
          for (_0x3e0794 = 0; _0x3e0794 <= 31; _0x3e0794++, _0x52e191 >>>= 1) {
            if (1 & _0x52e191 && 0 !== _0x1f5e82.dyn_ltree[2 * _0x3e0794]) {
              return 0;
            }
          }
          if (0 !== _0x1f5e82.dyn_ltree[18] || 0 !== _0x1f5e82.dyn_ltree[20] || 0 !== _0x1f5e82.dyn_ltree[26]) {
            return 1;
          }
          for (_0x3e0794 = 32; _0x3e0794 < _0x208602; _0x3e0794++) {
            if (0 !== _0x1f5e82.dyn_ltree[2 * _0x3e0794]) {
              return 1;
            }
          }
          return 0;
        })(_0x4f72a7)), _0x3f0e5f(_0x4f72a7, _0x4f72a7.l_desc), _0x3f0e5f(_0x4f72a7, _0x4f72a7.d_desc), _0x3433be = (_0x5696af => {
          let _0x33ddb7;
          for (_0x4df1ec(_0x5696af, _0x5696af.dyn_ltree, _0x5696af.l_desc.max_code), _0x4df1ec(_0x5696af, _0x5696af.dyn_dtree, _0x5696af.d_desc.max_code), _0x3f0e5f(_0x5696af, _0x5696af.bl_desc), _0x33ddb7 = 18; _0x33ddb7 >= 3 && 0 === _0x5696af.bl_tree[2 * _0x285635[_0x33ddb7] + 1]; _0x33ddb7--) {}
          _0x5696af.opt_len += 3 * (_0x33ddb7 + 1) + 5 + 5 + 4;
          return _0x33ddb7;
        })(_0x4f72a7), _0x84a81e = _0x4f72a7.opt_len + 3 + 7 >>> 3, _0x2e5733 = _0x4f72a7.static_len + 3 + 7 >>> 3, _0x2e5733 <= _0x84a81e && (_0x84a81e = _0x2e5733)) : _0x84a81e = _0x2e5733 = _0x5eb051 + 5;
        _0x5eb051 + 4 <= _0x84a81e && -1 !== _0x285818 ? _0x172ca2(_0x4f72a7, _0x285818, _0x5eb051, _0x3b413d) : 4 === _0x4f72a7.strategy || _0x2e5733 === _0x84a81e ? (_0x59a158(_0x4f72a7, 2 + (_0x3b413d ? 1 : 0), 3), _0x12b297(_0x4f72a7, _0x4d8207, _0x3e2311)) : (_0x59a158(_0x4f72a7, 4 + (_0x3b413d ? 1 : 0), 3), ((_0x1b3782, _0x236b65, _0xebcf57, _0x3c36ab) => {
          let _0x5200c4;
          for (_0x59a158(_0x1b3782, _0x236b65 - 257, 5), _0x59a158(_0x1b3782, _0xebcf57 - 1, 5), _0x59a158(_0x1b3782, _0x3c36ab - 4, 4), _0x5200c4 = 0; _0x5200c4 < _0x3c36ab; _0x5200c4++) {
            _0x59a158(_0x1b3782, _0x1b3782.bl_tree[2 * _0x285635[_0x5200c4] + 1], 3);
          }
          _0x3b485c(_0x1b3782, _0x1b3782.dyn_ltree, _0x236b65 - 1);
          _0x3b485c(_0x1b3782, _0x1b3782.dyn_dtree, _0xebcf57 - 1);
        })(_0x4f72a7, _0x4f72a7.l_desc.max_code + 1, _0x4f72a7.d_desc.max_code + 1, _0x3433be + 1), _0x12b297(_0x4f72a7, _0x4f72a7.dyn_ltree, _0x4f72a7.dyn_dtree));
        _0x4e9f27(_0x4f72a7);
        _0x3b413d && _0x40a41f(_0x4f72a7);
      },
      _tr_tally: (_0x2c87d5, _0x575856, _0x3b5d55) => (_0x2c87d5.pending_buf[_0x2c87d5.d_buf + 2 * _0x2c87d5.last_lit] = _0x575856 >>> 8 & 255, _0x2c87d5.pending_buf[_0x2c87d5.d_buf + 2 * _0x2c87d5.last_lit + 1] = 255 & _0x575856, _0x2c87d5.pending_buf[_0x2c87d5.l_buf + _0x2c87d5.last_lit] = 255 & _0x3b5d55, _0x2c87d5.last_lit++, 0 === _0x575856 ? _0x2c87d5.dyn_ltree[2 * _0x3b5d55]++ : (_0x2c87d5.matches++, _0x575856--, _0x2c87d5.dyn_ltree[2 * (_0x5f5c34[_0x3b5d55] + _0x208602 + 1)]++, _0x2c87d5.dyn_dtree[2 * _0x5621cb(_0x575856)]++), _0x2c87d5.last_lit === _0x2c87d5.lit_bufsize - 1),
      _tr_align: _0x3b6543 => {
        _0x59a158(_0x3b6543, 2, 3);
        _0x24849a(_0x3b6543, 256, _0x4d8207);
        (_0x1a61aa => {
          16 === _0x1a61aa.bi_valid ? (_0xd3b834(_0x1a61aa, _0x1a61aa.bi_buf), _0x1a61aa.bi_buf = 0, _0x1a61aa.bi_valid = 0) : _0x1a61aa.bi_valid >= 8 && (_0x1a61aa.pending_buf[_0x1a61aa.pending++] = 255 & _0x1a61aa.bi_buf, _0x1a61aa.bi_buf >>= 8, _0x1a61aa.bi_valid -= 8);
        })(_0x3b6543);
      }
    },
    _0x319380 = (_0x2e9d5f, _0x565cfc, _0x3f87f9, _0xfcf0d6) => {
      let _0x442f20 = 65535 & _0x2e9d5f | 0,
        _0x34d890 = _0x2e9d5f >>> 16 & 65535 | 0,
        _0x30e302 = 0;
      for (; 0 !== _0x3f87f9;) {
        _0x30e302 = _0x3f87f9 > 2000 ? 2000 : _0x3f87f9;
        _0x3f87f9 -= _0x30e302;
        do {
          _0x442f20 = _0x442f20 + _0x565cfc[_0xfcf0d6++] | 0;
          _0x34d890 = _0x34d890 + _0x442f20 | 0;
        } while (--_0x30e302);
        _0x442f20 %= 65521;
        _0x34d890 %= 65521;
      }
      return _0x442f20 | _0x34d890 << 16 | 0;
    };
  const _0x174fca = new Uint32Array((() => {
      let _0x5487a2,
        _0x33cc54 = [];
      for (var _0x37376a = 0; _0x37376a < 256; _0x37376a++) {
        _0x5487a2 = _0x37376a;
        for (var _0x4d9a75 = 0; _0x4d9a75 < 8; _0x4d9a75++) {
          _0x5487a2 = 1 & _0x5487a2 ? 3988292384 ^ _0x5487a2 >>> 1 : _0x5487a2 >>> 1;
        }
        _0x33cc54[_0x37376a] = _0x5487a2;
      }
      return _0x33cc54;
    })()),
    _0x3e7da8 = {
      "2": "need dictionary",
      "1": "stream end",
      "0": "",
      "-1": "file error",
      "-2": "stream error",
      "-3": "data error",
      "-4": "insufficient memory",
      "-5": "buffer error",
      "-6": "incompatible version"
    };
  const _0x3d81e7 = {
    Z_NO_FLUSH: 0,
    Z_PARTIAL_FLUSH: 1,
    Z_SYNC_FLUSH: 2,
    Z_FULL_FLUSH: 3,
    Z_FINISH: 4,
    Z_BLOCK: 5,
    Z_TREES: 6,
    Z_OK: 0,
    Z_STREAM_END: 1,
    Z_NEED_DICT: 2,
    Z_ERRNO: -1,
    Z_STREAM_ERROR: -2,
    Z_DATA_ERROR: -3,
    Z_MEM_ERROR: -4,
    Z_BUF_ERROR: -5,
    Z_NO_COMPRESSION: 0,
    Z_BEST_SPEED: 1,
    Z_BEST_COMPRESSION: 9,
    Z_DEFAULT_COMPRESSION: -1,
    Z_FILTERED: 1,
    Z_HUFFMAN_ONLY: 2,
    Z_RLE: 3,
    Z_FIXED: 4,
    Z_DEFAULT_STRATEGY: 0,
    Z_BINARY: 0,
    Z_TEXT: 1,
    Z_UNKNOWN: 2,
    Z_DEFLATED: 8
  };
  var _0x1b6282 = (_0x5cb126, _0x1ebfe9, _0x44b83c, _0x184caa) => {
    const _0x5e4ab9 = _0x174fca,
      _0x371de2 = _0x184caa + _0x44b83c;
    _0x5cb126 ^= -1;
    for (let _0x29f405 = _0x184caa; _0x29f405 < _0x371de2; _0x29f405++) {
      _0x5cb126 = _0x5cb126 >>> 8 ^ _0x5e4ab9[255 & (_0x5cb126 ^ _0x1ebfe9[_0x29f405])];
    }
    return -1 ^ _0x5cb126;
  };
  const {
      _tr_init: _0x30df86,
      _tr_stored_block: _0xe61912,
      _tr_flush_block: _0x2c927a,
      _tr_tally: _0x17c219,
      _tr_align: _0x47743d
    } = _0x12e94e,
    {
      Z_NO_FLUSH: _0x5bbff2,
      Z_PARTIAL_FLUSH: _0x4211b9,
      Z_FULL_FLUSH: _0x1414c3,
      Z_FINISH: _0x875bfc,
      Z_BLOCK: _0x35a17d,
      Z_OK: _0x55cb3b,
      Z_STREAM_END: _0x361813,
      Z_STREAM_ERROR: _0x12eed5,
      Z_DATA_ERROR: _0x5c7bab,
      Z_BUF_ERROR: _0x425343,
      Z_DEFAULT_COMPRESSION: _0xc036f,
      Z_FILTERED: _0x39f47d,
      Z_HUFFMAN_ONLY: _0x169111,
      Z_RLE: _0x3483d2,
      Z_FIXED: _0x57ba35,
      Z_DEFAULT_STRATEGY: _0x31843b,
      Z_UNKNOWN: _0xe5b2c9,
      Z_DEFLATED: _0x320581
    } = _0x3d81e7,
    _0x241a36 = 258,
    _0x4465c4 = 262,
    _0x1e2155 = 103,
    _0x4b8fb6 = 113,
    _0x17f573 = 666,
    _0x4fba1a = (_0x5620ea, _0x4eaacc) => (_0x5620ea.msg = _0x3e7da8[_0x4eaacc], _0x4eaacc),
    _0x38e712 = _0x5a20c5 => (_0x5a20c5 << 1) - (_0x5a20c5 > 4 ? 9 : 0),
    _0x3818e5 = _0x20a1d5 => {
      let _0x1adc95 = _0x20a1d5.length;
      for (; --_0x1adc95 >= 0;) {
        _0x20a1d5[_0x1adc95] = 0;
      }
    };
  let _0x157068 = (_0x742fae, _0x4a20ad, _0x5b0c95) => (_0x4a20ad << _0x742fae.hash_shift ^ _0x5b0c95) & _0x742fae.hash_mask;
  const _0x21ec56 = _0x2aad73 => {
      const _0x3f85f9 = _0x2aad73.state;
      let _0x551466 = _0x3f85f9.pending;
      _0x551466 > _0x2aad73.avail_out && (_0x551466 = _0x2aad73.avail_out);
      0 !== _0x551466 && (_0x2aad73.output.set(_0x3f85f9.pending_buf.subarray(_0x3f85f9.pending_out, _0x3f85f9.pending_out + _0x551466), _0x2aad73.next_out), _0x2aad73.next_out += _0x551466, _0x3f85f9.pending_out += _0x551466, _0x2aad73.total_out += _0x551466, _0x2aad73.avail_out -= _0x551466, _0x3f85f9.pending -= _0x551466, 0 === _0x3f85f9.pending && (_0x3f85f9.pending_out = 0));
    },
    _0x2a23e8 = (_0x300429, _0x528156) => {
      _0x2c927a(_0x300429, _0x300429.block_start >= 0 ? _0x300429.block_start : -1, _0x300429.strstart - _0x300429.block_start, _0x528156);
      _0x300429.block_start = _0x300429.strstart;
      _0x21ec56(_0x300429.strm);
    },
    _0x199b53 = (_0x2c6115, _0xcb1237) => {
      _0x2c6115.pending_buf[_0x2c6115.pending++] = _0xcb1237;
    },
    _0x26693d = (_0x3b9bdd, _0x4ac12e) => {
      _0x3b9bdd.pending_buf[_0x3b9bdd.pending++] = _0x4ac12e >>> 8 & 255;
      _0x3b9bdd.pending_buf[_0x3b9bdd.pending++] = 255 & _0x4ac12e;
    },
    _0x184eb2 = (_0x12ca0b, _0x16b423, _0x3fd7d2, _0x54412d) => {
      let _0x3fc64f = _0x12ca0b.avail_in;
      _0x3fc64f > _0x54412d && (_0x3fc64f = _0x54412d);
      return 0 === _0x3fc64f ? 0 : (_0x12ca0b.avail_in -= _0x3fc64f, _0x16b423.set(_0x12ca0b.input.subarray(_0x12ca0b.next_in, _0x12ca0b.next_in + _0x3fc64f), _0x3fd7d2), 1 === _0x12ca0b.state.wrap ? _0x12ca0b.adler = _0x319380(_0x12ca0b.adler, _0x16b423, _0x3fc64f, _0x3fd7d2) : 2 === _0x12ca0b.state.wrap && (_0x12ca0b.adler = _0x1b6282(_0x12ca0b.adler, _0x16b423, _0x3fc64f, _0x3fd7d2)), _0x12ca0b.next_in += _0x3fc64f, _0x12ca0b.total_in += _0x3fc64f, _0x3fc64f);
    },
    _0x364fc9 = (_0x293235, _0x5c9787) => {
      let _0x1d12c0,
        _0x4fa164,
        _0x37fcc5 = _0x293235.max_chain_length,
        _0x406f90 = _0x293235.strstart,
        _0x535a3a = _0x293235.prev_length,
        _0x2c150a = _0x293235.nice_match;
      const _0x2bf676 = _0x293235.strstart > _0x293235.w_size - _0x4465c4 ? _0x293235.strstart - (_0x293235.w_size - _0x4465c4) : 0,
        _0x9b643b = _0x293235.window,
        _0x146510 = _0x293235.w_mask,
        _0x15ff1b = _0x293235.prev,
        _0x12bb1b = _0x293235.strstart + _0x241a36;
      let _0x33cb3b = _0x9b643b[_0x406f90 + _0x535a3a - 1],
        _0xd93f9d = _0x9b643b[_0x406f90 + _0x535a3a];
      _0x293235.prev_length >= _0x293235.good_match && (_0x37fcc5 >>= 2);
      _0x2c150a > _0x293235.lookahead && (_0x2c150a = _0x293235.lookahead);
      do {
        if (_0x1d12c0 = _0x5c9787, _0x9b643b[_0x1d12c0 + _0x535a3a] === _0xd93f9d && _0x9b643b[_0x1d12c0 + _0x535a3a - 1] === _0x33cb3b && _0x9b643b[_0x1d12c0] === _0x9b643b[_0x406f90] && _0x9b643b[++_0x1d12c0] === _0x9b643b[_0x406f90 + 1]) {
          _0x406f90 += 2;
          _0x1d12c0++;
          do {} while (_0x9b643b[++_0x406f90] === _0x9b643b[++_0x1d12c0] && _0x9b643b[++_0x406f90] === _0x9b643b[++_0x1d12c0] && _0x9b643b[++_0x406f90] === _0x9b643b[++_0x1d12c0] && _0x9b643b[++_0x406f90] === _0x9b643b[++_0x1d12c0] && _0x9b643b[++_0x406f90] === _0x9b643b[++_0x1d12c0] && _0x9b643b[++_0x406f90] === _0x9b643b[++_0x1d12c0] && _0x9b643b[++_0x406f90] === _0x9b643b[++_0x1d12c0] && _0x9b643b[++_0x406f90] === _0x9b643b[++_0x1d12c0] && _0x406f90 < _0x12bb1b);
          if (_0x4fa164 = _0x241a36 - (_0x12bb1b - _0x406f90), _0x406f90 = _0x12bb1b - _0x241a36, _0x4fa164 > _0x535a3a) {
            if (_0x293235.match_start = _0x5c9787, _0x535a3a = _0x4fa164, _0x4fa164 >= _0x2c150a) {
              break;
            }
            _0x33cb3b = _0x9b643b[_0x406f90 + _0x535a3a - 1];
            _0xd93f9d = _0x9b643b[_0x406f90 + _0x535a3a];
          }
        }
      } while ((_0x5c9787 = _0x15ff1b[_0x5c9787 & _0x146510]) > _0x2bf676 && 0 != --_0x37fcc5);
      return _0x535a3a <= _0x293235.lookahead ? _0x535a3a : _0x293235.lookahead;
    },
    _0x5c016e = _0x4cdf75 => {
      const _0x4d468d = _0x4cdf75.w_size;
      let _0x237ac6, _0x4fda13, _0x3677a6, _0x2d7328, _0x57d85;
      do {
        if (_0x2d7328 = _0x4cdf75.window_size - _0x4cdf75.lookahead - _0x4cdf75.strstart, _0x4cdf75.strstart >= _0x4d468d + (_0x4d468d - _0x4465c4)) {
          _0x4cdf75.window.set(_0x4cdf75.window.subarray(_0x4d468d, _0x4d468d + _0x4d468d), 0);
          _0x4cdf75.match_start -= _0x4d468d;
          _0x4cdf75.strstart -= _0x4d468d;
          _0x4cdf75.block_start -= _0x4d468d;
          _0x4fda13 = _0x4cdf75.hash_size;
          _0x237ac6 = _0x4fda13;
          do {
            _0x3677a6 = _0x4cdf75.head[--_0x237ac6];
            _0x4cdf75.head[_0x237ac6] = _0x3677a6 >= _0x4d468d ? _0x3677a6 - _0x4d468d : 0;
          } while (--_0x4fda13);
          _0x4fda13 = _0x4d468d;
          _0x237ac6 = _0x4fda13;
          do {
            _0x3677a6 = _0x4cdf75.prev[--_0x237ac6];
            _0x4cdf75.prev[_0x237ac6] = _0x3677a6 >= _0x4d468d ? _0x3677a6 - _0x4d468d : 0;
          } while (--_0x4fda13);
          _0x2d7328 += _0x4d468d;
        }
        if (0 === _0x4cdf75.strm.avail_in) {
          break;
        }
        if (_0x4fda13 = _0x184eb2(_0x4cdf75.strm, _0x4cdf75.window, _0x4cdf75.strstart + _0x4cdf75.lookahead, _0x2d7328), _0x4cdf75.lookahead += _0x4fda13, _0x4cdf75.lookahead + _0x4cdf75.insert >= 3) {
          for (_0x57d85 = _0x4cdf75.strstart - _0x4cdf75.insert, _0x4cdf75.ins_h = _0x4cdf75.window[_0x57d85], _0x4cdf75.ins_h = _0x157068(_0x4cdf75, _0x4cdf75.ins_h, _0x4cdf75.window[_0x57d85 + 1]); _0x4cdf75.insert && (_0x4cdf75.ins_h = _0x157068(_0x4cdf75, _0x4cdf75.ins_h, _0x4cdf75.window[_0x57d85 + 3 - 1]), _0x4cdf75.prev[_0x57d85 & _0x4cdf75.w_mask] = _0x4cdf75.head[_0x4cdf75.ins_h], _0x4cdf75.head[_0x4cdf75.ins_h] = _0x57d85, _0x57d85++, _0x4cdf75.insert--, !(_0x4cdf75.lookahead + _0x4cdf75.insert < 3));) {}
        }
      } while (_0x4cdf75.lookahead < _0x4465c4 && 0 !== _0x4cdf75.strm.avail_in);
    },
    _0x4047d2 = (_0x4a2c3b, _0x3a2214) => {
      let _0x5eaf49, _0x3533ca;
      for (;;) {
        if (_0x4a2c3b.lookahead < _0x4465c4) {
          if (_0x5c016e(_0x4a2c3b), _0x4a2c3b.lookahead < _0x4465c4 && _0x3a2214 === _0x5bbff2) {
            return 1;
          }
          if (0 === _0x4a2c3b.lookahead) {
            break;
          }
        }
        if (_0x5eaf49 = 0, _0x4a2c3b.lookahead >= 3 && (_0x4a2c3b.ins_h = _0x157068(_0x4a2c3b, _0x4a2c3b.ins_h, _0x4a2c3b.window[_0x4a2c3b.strstart + 3 - 1]), _0x5eaf49 = _0x4a2c3b.prev[_0x4a2c3b.strstart & _0x4a2c3b.w_mask] = _0x4a2c3b.head[_0x4a2c3b.ins_h], _0x4a2c3b.head[_0x4a2c3b.ins_h] = _0x4a2c3b.strstart), 0 !== _0x5eaf49 && _0x4a2c3b.strstart - _0x5eaf49 <= _0x4a2c3b.w_size - _0x4465c4 && (_0x4a2c3b.match_length = _0x364fc9(_0x4a2c3b, _0x5eaf49)), _0x4a2c3b.match_length >= 3) {
          if (_0x3533ca = _0x17c219(_0x4a2c3b, _0x4a2c3b.strstart - _0x4a2c3b.match_start, _0x4a2c3b.match_length - 3), _0x4a2c3b.lookahead -= _0x4a2c3b.match_length, _0x4a2c3b.match_length <= _0x4a2c3b.max_lazy_match && _0x4a2c3b.lookahead >= 3) {
            _0x4a2c3b.match_length--;
            do {
              _0x4a2c3b.strstart++;
              _0x4a2c3b.ins_h = _0x157068(_0x4a2c3b, _0x4a2c3b.ins_h, _0x4a2c3b.window[_0x4a2c3b.strstart + 3 - 1]);
              _0x5eaf49 = _0x4a2c3b.prev[_0x4a2c3b.strstart & _0x4a2c3b.w_mask] = _0x4a2c3b.head[_0x4a2c3b.ins_h];
              _0x4a2c3b.head[_0x4a2c3b.ins_h] = _0x4a2c3b.strstart;
            } while (0 != --_0x4a2c3b.match_length);
            _0x4a2c3b.strstart++;
          } else {
            _0x4a2c3b.strstart += _0x4a2c3b.match_length;
            _0x4a2c3b.match_length = 0;
            _0x4a2c3b.ins_h = _0x4a2c3b.window[_0x4a2c3b.strstart];
            _0x4a2c3b.ins_h = _0x157068(_0x4a2c3b, _0x4a2c3b.ins_h, _0x4a2c3b.window[_0x4a2c3b.strstart + 1]);
          }
        } else {
          _0x3533ca = _0x17c219(_0x4a2c3b, 0, _0x4a2c3b.window[_0x4a2c3b.strstart]);
          _0x4a2c3b.lookahead--;
          _0x4a2c3b.strstart++;
        }
        if (_0x3533ca && (_0x2a23e8(_0x4a2c3b, !1), 0 === _0x4a2c3b.strm.avail_out)) {
          return 1;
        }
      }
      _0x4a2c3b.insert = _0x4a2c3b.strstart < 2 ? _0x4a2c3b.strstart : 2;
      return _0x3a2214 === _0x875bfc ? (_0x2a23e8(_0x4a2c3b, !0), 0 === _0x4a2c3b.strm.avail_out ? 3 : 4) : _0x4a2c3b.last_lit && (_0x2a23e8(_0x4a2c3b, !1), 0 === _0x4a2c3b.strm.avail_out) ? 1 : 2;
    },
    _0x20cf87 = (_0x3d2d95, _0x55b224) => {
      let _0x239f5f, _0x5d2ffa, _0x204799;
      for (;;) {
        if (_0x3d2d95.lookahead < _0x4465c4) {
          if (_0x5c016e(_0x3d2d95), _0x3d2d95.lookahead < _0x4465c4 && _0x55b224 === _0x5bbff2) {
            return 1;
          }
          if (0 === _0x3d2d95.lookahead) {
            break;
          }
        }
        if (_0x239f5f = 0, _0x3d2d95.lookahead >= 3 && (_0x3d2d95.ins_h = _0x157068(_0x3d2d95, _0x3d2d95.ins_h, _0x3d2d95.window[_0x3d2d95.strstart + 3 - 1]), _0x239f5f = _0x3d2d95.prev[_0x3d2d95.strstart & _0x3d2d95.w_mask] = _0x3d2d95.head[_0x3d2d95.ins_h], _0x3d2d95.head[_0x3d2d95.ins_h] = _0x3d2d95.strstart), _0x3d2d95.prev_length = _0x3d2d95.match_length, _0x3d2d95.prev_match = _0x3d2d95.match_start, _0x3d2d95.match_length = 2, 0 !== _0x239f5f && _0x3d2d95.prev_length < _0x3d2d95.max_lazy_match && _0x3d2d95.strstart - _0x239f5f <= _0x3d2d95.w_size - _0x4465c4 && (_0x3d2d95.match_length = _0x364fc9(_0x3d2d95, _0x239f5f), _0x3d2d95.match_length <= 5 && (_0x3d2d95.strategy === _0x39f47d || 3 === _0x3d2d95.match_length && _0x3d2d95.strstart - _0x3d2d95.match_start > 4096) && (_0x3d2d95.match_length = 2)), _0x3d2d95.prev_length >= 3 && _0x3d2d95.match_length <= _0x3d2d95.prev_length) {
          _0x204799 = _0x3d2d95.strstart + _0x3d2d95.lookahead - 3;
          _0x5d2ffa = _0x17c219(_0x3d2d95, _0x3d2d95.strstart - 1 - _0x3d2d95.prev_match, _0x3d2d95.prev_length - 3);
          _0x3d2d95.lookahead -= _0x3d2d95.prev_length - 1;
          _0x3d2d95.prev_length -= 2;
          do {
            ++_0x3d2d95.strstart <= _0x204799 && (_0x3d2d95.ins_h = _0x157068(_0x3d2d95, _0x3d2d95.ins_h, _0x3d2d95.window[_0x3d2d95.strstart + 3 - 1]), _0x239f5f = _0x3d2d95.prev[_0x3d2d95.strstart & _0x3d2d95.w_mask] = _0x3d2d95.head[_0x3d2d95.ins_h], _0x3d2d95.head[_0x3d2d95.ins_h] = _0x3d2d95.strstart);
          } while (0 != --_0x3d2d95.prev_length);
          if (_0x3d2d95.match_available = 0, _0x3d2d95.match_length = 2, _0x3d2d95.strstart++, _0x5d2ffa && (_0x2a23e8(_0x3d2d95, !1), 0 === _0x3d2d95.strm.avail_out)) {
            return 1;
          }
        } else {
          if (_0x3d2d95.match_available) {
            if (_0x5d2ffa = _0x17c219(_0x3d2d95, 0, _0x3d2d95.window[_0x3d2d95.strstart - 1]), _0x5d2ffa && _0x2a23e8(_0x3d2d95, !1), _0x3d2d95.strstart++, _0x3d2d95.lookahead--, 0 === _0x3d2d95.strm.avail_out) {
              return 1;
            }
          } else {
            _0x3d2d95.match_available = 1;
            _0x3d2d95.strstart++;
            _0x3d2d95.lookahead--;
          }
        }
      }
      _0x3d2d95.match_available && (_0x5d2ffa = _0x17c219(_0x3d2d95, 0, _0x3d2d95.window[_0x3d2d95.strstart - 1]), _0x3d2d95.match_available = 0);
      _0x3d2d95.insert = _0x3d2d95.strstart < 2 ? _0x3d2d95.strstart : 2;
      return _0x55b224 === _0x875bfc ? (_0x2a23e8(_0x3d2d95, !0), 0 === _0x3d2d95.strm.avail_out ? 3 : 4) : _0x3d2d95.last_lit && (_0x2a23e8(_0x3d2d95, !1), 0 === _0x3d2d95.strm.avail_out) ? 1 : 2;
    };
  function _0x50277a(_0x473c84, _0x159e56, _0xfe289c, _0x2b5a1b, _0x1221c2) {
    this.good_length = _0x473c84;
    this.max_lazy = _0x159e56;
    this.nice_length = _0xfe289c;
    this.max_chain = _0x2b5a1b;
    this.func = _0x1221c2;
  }
  const _0x1db737 = [new _0x50277a(0, 0, 0, 0, (_0x2daae8, _0x357d23) => {
    let _0x2f36f8 = 65535;
    for (_0x2f36f8 > _0x2daae8.pending_buf_size - 5 && (_0x2f36f8 = _0x2daae8.pending_buf_size - 5);;) {
      if (_0x2daae8.lookahead <= 1) {
        if (_0x5c016e(_0x2daae8), 0 === _0x2daae8.lookahead && _0x357d23 === _0x5bbff2) {
          return 1;
        }
        if (0 === _0x2daae8.lookahead) {
          break;
        }
      }
      _0x2daae8.strstart += _0x2daae8.lookahead;
      _0x2daae8.lookahead = 0;
      const _0x499620 = _0x2daae8.block_start + _0x2f36f8;
      if ((0 === _0x2daae8.strstart || _0x2daae8.strstart >= _0x499620) && (_0x2daae8.lookahead = _0x2daae8.strstart - _0x499620, _0x2daae8.strstart = _0x499620, _0x2a23e8(_0x2daae8, !1), 0 === _0x2daae8.strm.avail_out)) {
        return 1;
      }
      if (_0x2daae8.strstart - _0x2daae8.block_start >= _0x2daae8.w_size - _0x4465c4 && (_0x2a23e8(_0x2daae8, !1), 0 === _0x2daae8.strm.avail_out)) {
        return 1;
      }
    }
    _0x2daae8.insert = 0;
    return _0x357d23 === _0x875bfc ? (_0x2a23e8(_0x2daae8, !0), 0 === _0x2daae8.strm.avail_out ? 3 : 4) : (_0x2daae8.strstart > _0x2daae8.block_start && (_0x2a23e8(_0x2daae8, !1), _0x2daae8.strm.avail_out), 1);
  }), new _0x50277a(4, 4, 8, 4, _0x4047d2), new _0x50277a(4, 5, 16, 8, _0x4047d2), new _0x50277a(4, 6, 32, 32, _0x4047d2), new _0x50277a(4, 4, 16, 16, _0x20cf87), new _0x50277a(8, 16, 32, 32, _0x20cf87), new _0x50277a(8, 16, 128, 128, _0x20cf87), new _0x50277a(8, 32, 128, 256, _0x20cf87), new _0x50277a(32, 128, 258, 1024, _0x20cf87), new _0x50277a(32, 258, 258, 4096, _0x20cf87)];
  function _0x5cd818() {
    this.strm = null;
    this.status = 0;
    this.pending_buf = null;
    this.pending_buf_size = 0;
    this.pending_out = 0;
    this.pending = 0;
    this.wrap = 0;
    this.gzhead = null;
    this.gzindex = 0;
    this.method = _0x320581;
    this.last_flush = -1;
    this.w_size = 0;
    this.w_bits = 0;
    this.w_mask = 0;
    this.window = null;
    this.window_size = 0;
    this.prev = null;
    this.head = null;
    this.ins_h = 0;
    this.hash_size = 0;
    this.hash_bits = 0;
    this.hash_mask = 0;
    this.hash_shift = 0;
    this.block_start = 0;
    this.match_length = 0;
    this.prev_match = 0;
    this.match_available = 0;
    this.strstart = 0;
    this.match_start = 0;
    this.lookahead = 0;
    this.prev_length = 0;
    this.max_chain_length = 0;
    this.max_lazy_match = 0;
    this.level = 0;
    this.strategy = 0;
    this.good_match = 0;
    this.nice_match = 0;
    this.dyn_ltree = new Uint16Array(1146);
    this.dyn_dtree = new Uint16Array(122);
    this.bl_tree = new Uint16Array(78);
    _0x3818e5(this.dyn_ltree);
    _0x3818e5(this.dyn_dtree);
    _0x3818e5(this.bl_tree);
    this.l_desc = null;
    this.d_desc = null;
    this.bl_desc = null;
    this.bl_count = new Uint16Array(16);
    this.heap = new Uint16Array(573);
    _0x3818e5(this.heap);
    this.heap_len = 0;
    this.heap_max = 0;
    this.depth = new Uint16Array(573);
    _0x3818e5(this.depth);
    this.l_buf = 0;
    this.lit_bufsize = 0;
    this.last_lit = 0;
    this.d_buf = 0;
    this.opt_len = 0;
    this.static_len = 0;
    this.matches = 0;
    this.insert = 0;
    this.bi_buf = 0;
    this.bi_valid = 0;
  }
  const _0x15274e = _0xb749a7 => {
      if (!_0xb749a7 || !_0xb749a7.state) {
        return _0x4fba1a(_0xb749a7, _0x12eed5);
      }
      _0xb749a7.total_in = _0xb749a7.total_out = 0;
      _0xb749a7.data_type = _0xe5b2c9;
      const _0x1967cf = _0xb749a7.state;
      _0x1967cf.pending = 0;
      _0x1967cf.pending_out = 0;
      _0x1967cf.wrap < 0 && (_0x1967cf.wrap = -_0x1967cf.wrap);
      _0x1967cf.status = _0x1967cf.wrap ? 42 : _0x4b8fb6;
      _0xb749a7.adler = 2 === _0x1967cf.wrap ? 0 : 1;
      _0x1967cf.last_flush = _0x5bbff2;
      _0x30df86(_0x1967cf);
      return _0x55cb3b;
    },
    _0x4b8c58 = _0xa39af => {
      const _0xbedc2b = _0x15274e(_0xa39af);
      var _0x4656ab;
      _0xbedc2b === _0x55cb3b && ((_0x4656ab = _0xa39af.state).window_size = 2 * _0x4656ab.w_size, _0x3818e5(_0x4656ab.head), _0x4656ab.max_lazy_match = _0x1db737[_0x4656ab.level].max_lazy, _0x4656ab.good_match = _0x1db737[_0x4656ab.level].good_length, _0x4656ab.nice_match = _0x1db737[_0x4656ab.level].nice_length, _0x4656ab.max_chain_length = _0x1db737[_0x4656ab.level].max_chain, _0x4656ab.strstart = 0, _0x4656ab.block_start = 0, _0x4656ab.lookahead = 0, _0x4656ab.insert = 0, _0x4656ab.match_length = _0x4656ab.prev_length = 2, _0x4656ab.match_available = 0, _0x4656ab.ins_h = 0);
      return _0xbedc2b;
    },
    _0xfadccb = (_0x2faee5, _0x34eb8b, _0x1e73a8, _0x39d9ac, _0x460274, _0x4c76e8) => {
      if (!_0x2faee5) {
        return _0x12eed5;
      }
      let _0x13ee49 = 1;
      if (_0x34eb8b === _0xc036f && (_0x34eb8b = 6), _0x39d9ac < 0 ? (_0x13ee49 = 0, _0x39d9ac = -_0x39d9ac) : _0x39d9ac > 15 && (_0x13ee49 = 2, _0x39d9ac -= 16), _0x460274 < 1 || _0x460274 > 9 || _0x1e73a8 !== _0x320581 || _0x39d9ac < 8 || _0x39d9ac > 15 || _0x34eb8b < 0 || _0x34eb8b > 9 || _0x4c76e8 < 0 || _0x4c76e8 > _0x57ba35) {
        return _0x4fba1a(_0x2faee5, _0x12eed5);
      }
      8 === _0x39d9ac && (_0x39d9ac = 9);
      const _0x13468b = new _0x5cd818();
      _0x2faee5.state = _0x13468b;
      _0x13468b.strm = _0x2faee5;
      _0x13468b.wrap = _0x13ee49;
      _0x13468b.gzhead = null;
      _0x13468b.w_bits = _0x39d9ac;
      _0x13468b.w_size = 1 << _0x13468b.w_bits;
      _0x13468b.w_mask = _0x13468b.w_size - 1;
      _0x13468b.hash_bits = _0x460274 + 7;
      _0x13468b.hash_size = 1 << _0x13468b.hash_bits;
      _0x13468b.hash_mask = _0x13468b.hash_size - 1;
      _0x13468b.hash_shift = ~~((_0x13468b.hash_bits + 3 - 1) / 3);
      _0x13468b.window = new Uint8Array(2 * _0x13468b.w_size);
      _0x13468b.head = new Uint16Array(_0x13468b.hash_size);
      _0x13468b.prev = new Uint16Array(_0x13468b.w_size);
      _0x13468b.lit_bufsize = 1 << _0x460274 + 6;
      _0x13468b.pending_buf_size = 4 * _0x13468b.lit_bufsize;
      _0x13468b.pending_buf = new Uint8Array(_0x13468b.pending_buf_size);
      _0x13468b.d_buf = 1 * _0x13468b.lit_bufsize;
      _0x13468b.l_buf = 3 * _0x13468b.lit_bufsize;
      _0x13468b.level = _0x34eb8b;
      _0x13468b.strategy = _0x4c76e8;
      _0x13468b.method = _0x1e73a8;
      return _0x4b8c58(_0x2faee5);
    };
  var _0x5ce2c6 = {
    deflateInit: (_0x452603, _0x314c3c) => _0xfadccb(_0x452603, _0x314c3c, _0x320581, 15, 8, _0x31843b),
    deflateInit2: _0xfadccb,
    deflateReset: _0x4b8c58,
    deflateResetKeep: _0x15274e,
    deflateSetHeader: (_0x109f46, _0x54e943) => _0x109f46 && _0x109f46.state ? 2 !== _0x109f46.state.wrap ? _0x12eed5 : (_0x109f46.state.gzhead = _0x54e943, _0x55cb3b) : _0x12eed5,
    deflate: (_0x3e6245, _0x4e36b4) => {
      let _0x18f987, _0x33194c;
      if (!_0x3e6245 || !_0x3e6245.state || _0x4e36b4 > _0x35a17d || _0x4e36b4 < 0) {
        return _0x3e6245 ? _0x4fba1a(_0x3e6245, _0x12eed5) : _0x12eed5;
      }
      const _0x58b9f7 = _0x3e6245.state;
      if (!_0x3e6245.output || !_0x3e6245.input && 0 !== _0x3e6245.avail_in || _0x58b9f7.status === _0x17f573 && _0x4e36b4 !== _0x875bfc) {
        return _0x4fba1a(_0x3e6245, 0 === _0x3e6245.avail_out ? _0x425343 : _0x12eed5);
      }
      _0x58b9f7.strm = _0x3e6245;
      const _0x2156ff = _0x58b9f7.last_flush;
      if (_0x58b9f7.last_flush = _0x4e36b4, 42 === _0x58b9f7.status) {
        if (2 === _0x58b9f7.wrap) {
          _0x3e6245.adler = 0;
          _0x199b53(_0x58b9f7, 31);
          _0x199b53(_0x58b9f7, 139);
          _0x199b53(_0x58b9f7, 8);
          _0x58b9f7.gzhead ? (_0x199b53(_0x58b9f7, (_0x58b9f7.gzhead.text ? 1 : 0) + (_0x58b9f7.gzhead.hcrc ? 2 : 0) + (_0x58b9f7.gzhead.extra ? 4 : 0) + (_0x58b9f7.gzhead.name ? 8 : 0) + (_0x58b9f7.gzhead.comment ? 16 : 0)), _0x199b53(_0x58b9f7, 255 & _0x58b9f7.gzhead.time), _0x199b53(_0x58b9f7, _0x58b9f7.gzhead.time >> 8 & 255), _0x199b53(_0x58b9f7, _0x58b9f7.gzhead.time >> 16 & 255), _0x199b53(_0x58b9f7, _0x58b9f7.gzhead.time >> 24 & 255), _0x199b53(_0x58b9f7, 9 === _0x58b9f7.level ? 2 : _0x58b9f7.strategy >= _0x169111 || _0x58b9f7.level < 2 ? 4 : 0), _0x199b53(_0x58b9f7, 255 & _0x58b9f7.gzhead.os), _0x58b9f7.gzhead.extra && _0x58b9f7.gzhead.extra.length && (_0x199b53(_0x58b9f7, 255 & _0x58b9f7.gzhead.extra.length), _0x199b53(_0x58b9f7, _0x58b9f7.gzhead.extra.length >> 8 & 255)), _0x58b9f7.gzhead.hcrc && (_0x3e6245.adler = _0x1b6282(_0x3e6245.adler, _0x58b9f7.pending_buf, _0x58b9f7.pending, 0)), _0x58b9f7.gzindex = 0, _0x58b9f7.status = 69) : (_0x199b53(_0x58b9f7, 0), _0x199b53(_0x58b9f7, 0), _0x199b53(_0x58b9f7, 0), _0x199b53(_0x58b9f7, 0), _0x199b53(_0x58b9f7, 0), _0x199b53(_0x58b9f7, 9 === _0x58b9f7.level ? 2 : _0x58b9f7.strategy >= _0x169111 || _0x58b9f7.level < 2 ? 4 : 0), _0x199b53(_0x58b9f7, 3), _0x58b9f7.status = _0x4b8fb6);
        } else {
          let _0x3bca6f = _0x320581 + (_0x58b9f7.w_bits - 8 << 4) << 8,
            _0x34b962 = -1;
          _0x34b962 = _0x58b9f7.strategy >= _0x169111 || _0x58b9f7.level < 2 ? 0 : _0x58b9f7.level < 6 ? 1 : 6 === _0x58b9f7.level ? 2 : 3;
          _0x3bca6f |= _0x34b962 << 6;
          0 !== _0x58b9f7.strstart && (_0x3bca6f |= 32);
          _0x3bca6f += 31 - _0x3bca6f % 31;
          _0x58b9f7.status = _0x4b8fb6;
          _0x26693d(_0x58b9f7, _0x3bca6f);
          0 !== _0x58b9f7.strstart && (_0x26693d(_0x58b9f7, _0x3e6245.adler >>> 16), _0x26693d(_0x58b9f7, 65535 & _0x3e6245.adler));
          _0x3e6245.adler = 1;
        }
      }
      if (69 === _0x58b9f7.status) {
        if (_0x58b9f7.gzhead.extra) {
          for (_0x18f987 = _0x58b9f7.pending; _0x58b9f7.gzindex < (65535 & _0x58b9f7.gzhead.extra.length) && (_0x58b9f7.pending !== _0x58b9f7.pending_buf_size || (_0x58b9f7.gzhead.hcrc && _0x58b9f7.pending > _0x18f987 && (_0x3e6245.adler = _0x1b6282(_0x3e6245.adler, _0x58b9f7.pending_buf, _0x58b9f7.pending - _0x18f987, _0x18f987)), _0x21ec56(_0x3e6245), _0x18f987 = _0x58b9f7.pending, _0x58b9f7.pending !== _0x58b9f7.pending_buf_size));) {
            _0x199b53(_0x58b9f7, 255 & _0x58b9f7.gzhead.extra[_0x58b9f7.gzindex]);
            _0x58b9f7.gzindex++;
          }
          _0x58b9f7.gzhead.hcrc && _0x58b9f7.pending > _0x18f987 && (_0x3e6245.adler = _0x1b6282(_0x3e6245.adler, _0x58b9f7.pending_buf, _0x58b9f7.pending - _0x18f987, _0x18f987));
          _0x58b9f7.gzindex === _0x58b9f7.gzhead.extra.length && (_0x58b9f7.gzindex = 0, _0x58b9f7.status = 73);
        } else {
          _0x58b9f7.status = 73;
        }
      }
      if (73 === _0x58b9f7.status) {
        if (_0x58b9f7.gzhead.name) {
          _0x18f987 = _0x58b9f7.pending;
          do {
            if (_0x58b9f7.pending === _0x58b9f7.pending_buf_size && (_0x58b9f7.gzhead.hcrc && _0x58b9f7.pending > _0x18f987 && (_0x3e6245.adler = _0x1b6282(_0x3e6245.adler, _0x58b9f7.pending_buf, _0x58b9f7.pending - _0x18f987, _0x18f987)), _0x21ec56(_0x3e6245), _0x18f987 = _0x58b9f7.pending, _0x58b9f7.pending === _0x58b9f7.pending_buf_size)) {
              _0x33194c = 1;
              break;
            }
            _0x33194c = _0x58b9f7.gzindex < _0x58b9f7.gzhead.name.length ? 255 & _0x58b9f7.gzhead.name.charCodeAt(_0x58b9f7.gzindex++) : 0;
            _0x199b53(_0x58b9f7, _0x33194c);
          } while (0 !== _0x33194c);
          _0x58b9f7.gzhead.hcrc && _0x58b9f7.pending > _0x18f987 && (_0x3e6245.adler = _0x1b6282(_0x3e6245.adler, _0x58b9f7.pending_buf, _0x58b9f7.pending - _0x18f987, _0x18f987));
          0 === _0x33194c && (_0x58b9f7.gzindex = 0, _0x58b9f7.status = 91);
        } else {
          _0x58b9f7.status = 91;
        }
      }
      if (91 === _0x58b9f7.status) {
        if (_0x58b9f7.gzhead.comment) {
          _0x18f987 = _0x58b9f7.pending;
          do {
            if (_0x58b9f7.pending === _0x58b9f7.pending_buf_size && (_0x58b9f7.gzhead.hcrc && _0x58b9f7.pending > _0x18f987 && (_0x3e6245.adler = _0x1b6282(_0x3e6245.adler, _0x58b9f7.pending_buf, _0x58b9f7.pending - _0x18f987, _0x18f987)), _0x21ec56(_0x3e6245), _0x18f987 = _0x58b9f7.pending, _0x58b9f7.pending === _0x58b9f7.pending_buf_size)) {
              _0x33194c = 1;
              break;
            }
            _0x33194c = _0x58b9f7.gzindex < _0x58b9f7.gzhead.comment.length ? 255 & _0x58b9f7.gzhead.comment.charCodeAt(_0x58b9f7.gzindex++) : 0;
            _0x199b53(_0x58b9f7, _0x33194c);
          } while (0 !== _0x33194c);
          _0x58b9f7.gzhead.hcrc && _0x58b9f7.pending > _0x18f987 && (_0x3e6245.adler = _0x1b6282(_0x3e6245.adler, _0x58b9f7.pending_buf, _0x58b9f7.pending - _0x18f987, _0x18f987));
          0 === _0x33194c && (_0x58b9f7.status = _0x1e2155);
        } else {
          _0x58b9f7.status = _0x1e2155;
        }
      }
      if (_0x58b9f7.status === _0x1e2155 && (_0x58b9f7.gzhead.hcrc ? (_0x58b9f7.pending + 2 > _0x58b9f7.pending_buf_size && _0x21ec56(_0x3e6245), _0x58b9f7.pending + 2 <= _0x58b9f7.pending_buf_size && (_0x199b53(_0x58b9f7, 255 & _0x3e6245.adler), _0x199b53(_0x58b9f7, _0x3e6245.adler >> 8 & 255), _0x3e6245.adler = 0, _0x58b9f7.status = _0x4b8fb6)) : _0x58b9f7.status = _0x4b8fb6), 0 !== _0x58b9f7.pending) {
        if (_0x21ec56(_0x3e6245), 0 === _0x3e6245.avail_out) {
          _0x58b9f7.last_flush = -1;
          return _0x55cb3b;
        }
      } else {
        if (0 === _0x3e6245.avail_in && _0x38e712(_0x4e36b4) <= _0x38e712(_0x2156ff) && _0x4e36b4 !== _0x875bfc) {
          return _0x4fba1a(_0x3e6245, _0x425343);
        }
      }
      if (_0x58b9f7.status === _0x17f573 && 0 !== _0x3e6245.avail_in) {
        return _0x4fba1a(_0x3e6245, _0x425343);
      }
      if (0 !== _0x3e6245.avail_in || 0 !== _0x58b9f7.lookahead || _0x4e36b4 !== _0x5bbff2 && _0x58b9f7.status !== _0x17f573) {
        let _0xd920fe = _0x58b9f7.strategy === _0x169111 ? ((_0x361d87, _0x93a647) => {
          let _0x28066d;
          for (;;) {
            if (0 === _0x361d87.lookahead && (_0x5c016e(_0x361d87), 0 === _0x361d87.lookahead)) {
              if (_0x93a647 === _0x5bbff2) {
                return 1;
              }
              break;
            }
            if (_0x361d87.match_length = 0, _0x28066d = _0x17c219(_0x361d87, 0, _0x361d87.window[_0x361d87.strstart]), _0x361d87.lookahead--, _0x361d87.strstart++, _0x28066d && (_0x2a23e8(_0x361d87, !1), 0 === _0x361d87.strm.avail_out)) {
              return 1;
            }
          }
          _0x361d87.insert = 0;
          return _0x93a647 === _0x875bfc ? (_0x2a23e8(_0x361d87, !0), 0 === _0x361d87.strm.avail_out ? 3 : 4) : _0x361d87.last_lit && (_0x2a23e8(_0x361d87, !1), 0 === _0x361d87.strm.avail_out) ? 1 : 2;
        })(_0x58b9f7, _0x4e36b4) : _0x58b9f7.strategy === _0x3483d2 ? ((_0x357b85, _0x5927ce) => {
          let _0x33abd0, _0x173abe, _0x411065, _0x13b78f;
          const _0x95a7b9 = _0x357b85.window;
          for (;;) {
            if (_0x357b85.lookahead <= _0x241a36) {
              if (_0x5c016e(_0x357b85), _0x357b85.lookahead <= _0x241a36 && _0x5927ce === _0x5bbff2) {
                return 1;
              }
              if (0 === _0x357b85.lookahead) {
                break;
              }
            }
            if (_0x357b85.match_length = 0, _0x357b85.lookahead >= 3 && _0x357b85.strstart > 0 && (_0x411065 = _0x357b85.strstart - 1, _0x173abe = _0x95a7b9[_0x411065], _0x173abe === _0x95a7b9[++_0x411065] && _0x173abe === _0x95a7b9[++_0x411065] && _0x173abe === _0x95a7b9[++_0x411065])) {
              _0x13b78f = _0x357b85.strstart + _0x241a36;
              do {} while (_0x173abe === _0x95a7b9[++_0x411065] && _0x173abe === _0x95a7b9[++_0x411065] && _0x173abe === _0x95a7b9[++_0x411065] && _0x173abe === _0x95a7b9[++_0x411065] && _0x173abe === _0x95a7b9[++_0x411065] && _0x173abe === _0x95a7b9[++_0x411065] && _0x173abe === _0x95a7b9[++_0x411065] && _0x173abe === _0x95a7b9[++_0x411065] && _0x411065 < _0x13b78f);
              _0x357b85.match_length = _0x241a36 - (_0x13b78f - _0x411065);
              _0x357b85.match_length > _0x357b85.lookahead && (_0x357b85.match_length = _0x357b85.lookahead);
            }
            if (_0x357b85.match_length >= 3 ? (_0x33abd0 = _0x17c219(_0x357b85, 1, _0x357b85.match_length - 3), _0x357b85.lookahead -= _0x357b85.match_length, _0x357b85.strstart += _0x357b85.match_length, _0x357b85.match_length = 0) : (_0x33abd0 = _0x17c219(_0x357b85, 0, _0x357b85.window[_0x357b85.strstart]), _0x357b85.lookahead--, _0x357b85.strstart++), _0x33abd0 && (_0x2a23e8(_0x357b85, !1), 0 === _0x357b85.strm.avail_out)) {
              return 1;
            }
          }
          _0x357b85.insert = 0;
          return _0x5927ce === _0x875bfc ? (_0x2a23e8(_0x357b85, !0), 0 === _0x357b85.strm.avail_out ? 3 : 4) : _0x357b85.last_lit && (_0x2a23e8(_0x357b85, !1), 0 === _0x357b85.strm.avail_out) ? 1 : 2;
        })(_0x58b9f7, _0x4e36b4) : _0x1db737[_0x58b9f7.level].func(_0x58b9f7, _0x4e36b4);
        if (3 !== _0xd920fe && 4 !== _0xd920fe || (_0x58b9f7.status = _0x17f573), 1 === _0xd920fe || 3 === _0xd920fe) {
          0 === _0x3e6245.avail_out && (_0x58b9f7.last_flush = -1);
          return _0x55cb3b;
        }
        if (2 === _0xd920fe && (_0x4e36b4 === _0x4211b9 ? _0x47743d(_0x58b9f7) : _0x4e36b4 !== _0x35a17d && (_0xe61912(_0x58b9f7, 0, 0, !1), _0x4e36b4 === _0x1414c3 && (_0x3818e5(_0x58b9f7.head), 0 === _0x58b9f7.lookahead && (_0x58b9f7.strstart = 0, _0x58b9f7.block_start = 0, _0x58b9f7.insert = 0))), _0x21ec56(_0x3e6245), 0 === _0x3e6245.avail_out)) {
          _0x58b9f7.last_flush = -1;
          return _0x55cb3b;
        }
      }
      return _0x4e36b4 !== _0x875bfc ? _0x55cb3b : _0x58b9f7.wrap <= 0 ? _0x361813 : (2 === _0x58b9f7.wrap ? (_0x199b53(_0x58b9f7, 255 & _0x3e6245.adler), _0x199b53(_0x58b9f7, _0x3e6245.adler >> 8 & 255), _0x199b53(_0x58b9f7, _0x3e6245.adler >> 16 & 255), _0x199b53(_0x58b9f7, _0x3e6245.adler >> 24 & 255), _0x199b53(_0x58b9f7, 255 & _0x3e6245.total_in), _0x199b53(_0x58b9f7, _0x3e6245.total_in >> 8 & 255), _0x199b53(_0x58b9f7, _0x3e6245.total_in >> 16 & 255), _0x199b53(_0x58b9f7, _0x3e6245.total_in >> 24 & 255)) : (_0x26693d(_0x58b9f7, _0x3e6245.adler >>> 16), _0x26693d(_0x58b9f7, 65535 & _0x3e6245.adler)), _0x21ec56(_0x3e6245), _0x58b9f7.wrap > 0 && (_0x58b9f7.wrap = -_0x58b9f7.wrap), 0 !== _0x58b9f7.pending ? _0x55cb3b : _0x361813);
    },
    deflateEnd: _0x4ab85d => {
      if (!_0x4ab85d || !_0x4ab85d.state) {
        return _0x12eed5;
      }
      const _0x215d53 = _0x4ab85d.state.status;
      return 42 !== _0x215d53 && 69 !== _0x215d53 && 73 !== _0x215d53 && 91 !== _0x215d53 && _0x215d53 !== _0x1e2155 && _0x215d53 !== _0x4b8fb6 && _0x215d53 !== _0x17f573 ? _0x4fba1a(_0x4ab85d, _0x12eed5) : (_0x4ab85d.state = null, _0x215d53 === _0x4b8fb6 ? _0x4fba1a(_0x4ab85d, _0x5c7bab) : _0x55cb3b);
    },
    deflateSetDictionary: (_0xcfdeae, _0x5012b6) => {
      let _0x366f0b = _0x5012b6.length;
      if (!_0xcfdeae || !_0xcfdeae.state) {
        return _0x12eed5;
      }
      const _0x53ce1d = _0xcfdeae.state,
        _0x18542f = _0x53ce1d.wrap;
      if (2 === _0x18542f || 1 === _0x18542f && 42 !== _0x53ce1d.status || _0x53ce1d.lookahead) {
        return _0x12eed5;
      }
      if (1 === _0x18542f && (_0xcfdeae.adler = _0x319380(_0xcfdeae.adler, _0x5012b6, _0x366f0b, 0)), _0x53ce1d.wrap = 0, _0x366f0b >= _0x53ce1d.w_size) {
        0 === _0x18542f && (_0x3818e5(_0x53ce1d.head), _0x53ce1d.strstart = 0, _0x53ce1d.block_start = 0, _0x53ce1d.insert = 0);
        let _0x3791a5 = new Uint8Array(_0x53ce1d.w_size);
        _0x3791a5.set(_0x5012b6.subarray(_0x366f0b - _0x53ce1d.w_size, _0x366f0b), 0);
        _0x5012b6 = _0x3791a5;
        _0x366f0b = _0x53ce1d.w_size;
      }
      const _0x381822 = _0xcfdeae.avail_in,
        _0x3239b9 = _0xcfdeae.next_in,
        _0x5491c2 = _0xcfdeae.input;
      for (_0xcfdeae.avail_in = _0x366f0b, _0xcfdeae.next_in = 0, _0xcfdeae.input = _0x5012b6, _0x5c016e(_0x53ce1d); _0x53ce1d.lookahead >= 3;) {
        let _0x1a2a38 = _0x53ce1d.strstart,
          _0x261c11 = _0x53ce1d.lookahead - 2;
        do {
          _0x53ce1d.ins_h = _0x157068(_0x53ce1d, _0x53ce1d.ins_h, _0x53ce1d.window[_0x1a2a38 + 3 - 1]);
          _0x53ce1d.prev[_0x1a2a38 & _0x53ce1d.w_mask] = _0x53ce1d.head[_0x53ce1d.ins_h];
          _0x53ce1d.head[_0x53ce1d.ins_h] = _0x1a2a38;
          _0x1a2a38++;
        } while (--_0x261c11);
        _0x53ce1d.strstart = _0x1a2a38;
        _0x53ce1d.lookahead = 2;
        _0x5c016e(_0x53ce1d);
      }
      _0x53ce1d.strstart += _0x53ce1d.lookahead;
      _0x53ce1d.block_start = _0x53ce1d.strstart;
      _0x53ce1d.insert = _0x53ce1d.lookahead;
      _0x53ce1d.lookahead = 0;
      _0x53ce1d.match_length = _0x53ce1d.prev_length = 2;
      _0x53ce1d.match_available = 0;
      _0xcfdeae.next_in = _0x3239b9;
      _0xcfdeae.input = _0x5491c2;
      _0xcfdeae.avail_in = _0x381822;
      _0x53ce1d.wrap = _0x18542f;
      return _0x55cb3b;
    },
    deflateInfo: "pako deflate (from Nodeca project)"
  };
  const _0x45dbe9 = (_0x2879b0, _0x18b9bf) => Object.prototype.hasOwnProperty.call(_0x2879b0, _0x18b9bf);
  var _0x4a5be8 = function (_0x38233f) {
      const _0x556bf0 = Array.prototype.slice.call(arguments, 1);
      for (; _0x556bf0.length;) {
        const _0x4a30fd = _0x556bf0.shift();
        if (_0x4a30fd) {
          if ("object" != typeof _0x4a30fd) {
            throw new TypeError(_0x4a30fd + "must be non-object");
          }
          for (const _0x96506c in _0x4a30fd) _0x45dbe9(_0x4a30fd, _0x96506c) && (_0x38233f[_0x96506c] = _0x4a30fd[_0x96506c]);
        }
      }
      return _0x38233f;
    },
    _0x1a9734 = _0x4d250b => {
      let _0x3467a1 = 0;
      for (let _0x4145b0 = 0, _0x2ab6fb = _0x4d250b.length; _0x4145b0 < _0x2ab6fb; _0x4145b0++) {
        _0x3467a1 += _0x4d250b[_0x4145b0].length;
      }
      const _0x2b34e9 = new Uint8Array(_0x3467a1);
      for (let _0x218329 = 0, _0x142867 = 0, _0x2285e9 = _0x4d250b.length; _0x218329 < _0x2285e9; _0x218329++) {
        let _0x5c243e = _0x4d250b[_0x218329];
        _0x2b34e9.set(_0x5c243e, _0x142867);
        _0x142867 += _0x5c243e.length;
      }
      return _0x2b34e9;
    };
  let _0x362a5b = !0;
  try {
    String.fromCharCode.apply(null, new Uint8Array(1));
  } catch (_0x398836) {
    _0x362a5b = !1;
  }
  const _0x3cc6ad = new Uint8Array(256);
  for (let _0x3344c6 = 0; _0x3344c6 < 256; _0x3344c6++) {
    _0x3cc6ad[_0x3344c6] = _0x3344c6 >= 252 ? 6 : _0x3344c6 >= 248 ? 5 : _0x3344c6 >= 240 ? 4 : _0x3344c6 >= 224 ? 3 : _0x3344c6 >= 192 ? 2 : 1;
  }
  _0x3cc6ad[254] = _0x3cc6ad[254] = 1;
  var _0x1497b6 = _0x491f85 => {
      let _0x263e6b,
        _0x19ad7b,
        _0x55dc96,
        _0x165e18,
        _0x241f7a,
        _0x124da5 = _0x491f85.length,
        _0x5b9217 = 0;
      for (_0x165e18 = 0; _0x165e18 < _0x124da5; _0x165e18++) {
        _0x19ad7b = _0x491f85.charCodeAt(_0x165e18);
        55296 == (64512 & _0x19ad7b) && _0x165e18 + 1 < _0x124da5 && (_0x55dc96 = _0x491f85.charCodeAt(_0x165e18 + 1), 56320 == (64512 & _0x55dc96) && (_0x19ad7b = 65536 + (_0x19ad7b - 55296 << 10) + (_0x55dc96 - 56320), _0x165e18++));
        _0x5b9217 += _0x19ad7b < 128 ? 1 : _0x19ad7b < 2048 ? 2 : _0x19ad7b < 65536 ? 3 : 4;
      }
      for (_0x263e6b = new Uint8Array(_0x5b9217), _0x241f7a = 0, _0x165e18 = 0; _0x241f7a < _0x5b9217; _0x165e18++) {
        _0x19ad7b = _0x491f85.charCodeAt(_0x165e18);
        55296 == (64512 & _0x19ad7b) && _0x165e18 + 1 < _0x124da5 && (_0x55dc96 = _0x491f85.charCodeAt(_0x165e18 + 1), 56320 == (64512 & _0x55dc96) && (_0x19ad7b = 65536 + (_0x19ad7b - 55296 << 10) + (_0x55dc96 - 56320), _0x165e18++));
        _0x19ad7b < 128 ? _0x263e6b[_0x241f7a++] = _0x19ad7b : _0x19ad7b < 2048 ? (_0x263e6b[_0x241f7a++] = 192 | _0x19ad7b >>> 6, _0x263e6b[_0x241f7a++] = 128 | 63 & _0x19ad7b) : _0x19ad7b < 65536 ? (_0x263e6b[_0x241f7a++] = 224 | _0x19ad7b >>> 12, _0x263e6b[_0x241f7a++] = 128 | _0x19ad7b >>> 6 & 63, _0x263e6b[_0x241f7a++] = 128 | 63 & _0x19ad7b) : (_0x263e6b[_0x241f7a++] = 240 | _0x19ad7b >>> 18, _0x263e6b[_0x241f7a++] = 128 | _0x19ad7b >>> 12 & 63, _0x263e6b[_0x241f7a++] = 128 | _0x19ad7b >>> 6 & 63, _0x263e6b[_0x241f7a++] = 128 | 63 & _0x19ad7b);
      }
      return _0x263e6b;
    },
    _0x44b2c8 = (_0x49e063, _0x46b18d) => {
      let _0x1b7fb1, _0x252e59;
      const _0x38a077 = _0x46b18d || _0x49e063.length,
        _0x3017ea = new Array(2 * _0x38a077);
      for (_0x252e59 = 0, _0x1b7fb1 = 0; _0x1b7fb1 < _0x38a077;) {
        let _0x34eff0 = _0x49e063[_0x1b7fb1++];
        if (_0x34eff0 < 128) {
          _0x3017ea[_0x252e59++] = _0x34eff0;
          continue;
        }
        let _0xb9ed69 = _0x3cc6ad[_0x34eff0];
        if (_0xb9ed69 > 4) {
          _0x3017ea[_0x252e59++] = 65533;
          _0x1b7fb1 += _0xb9ed69 - 1;
        } else {
          for (_0x34eff0 &= 2 === _0xb9ed69 ? 31 : 3 === _0xb9ed69 ? 15 : 7; _0xb9ed69 > 1 && _0x1b7fb1 < _0x38a077;) {
            _0x34eff0 = _0x34eff0 << 6 | 63 & _0x49e063[_0x1b7fb1++];
            _0xb9ed69--;
          }
          _0xb9ed69 > 1 ? _0x3017ea[_0x252e59++] = 65533 : _0x34eff0 < 65536 ? _0x3017ea[_0x252e59++] = _0x34eff0 : (_0x34eff0 -= 65536, _0x3017ea[_0x252e59++] = 55296 | _0x34eff0 >> 10 & 1023, _0x3017ea[_0x252e59++] = 56320 | 1023 & _0x34eff0);
        }
      }
      return ((_0xc4d1ac, _0x5df9d7) => {
        if (_0x5df9d7 < 65534 && _0xc4d1ac.subarray && _0x362a5b) {
          return String.fromCharCode.apply(null, _0xc4d1ac.length === _0x5df9d7 ? _0xc4d1ac : _0xc4d1ac.subarray(0, _0x5df9d7));
        }
        let _0x162836 = "";
        for (let _0x4f566a = 0; _0x4f566a < _0x5df9d7; _0x4f566a++) {
          _0x162836 += String.fromCharCode(_0xc4d1ac[_0x4f566a]);
        }
        return _0x162836;
      })(_0x3017ea, _0x252e59);
    },
    _0x3ce672 = (_0x5c1650, _0x39bd25) => {
      (_0x39bd25 = _0x39bd25 || _0x5c1650.length) > _0x5c1650.length && (_0x39bd25 = _0x5c1650.length);
      let _0x4b19c1 = _0x39bd25 - 1;
      for (; _0x4b19c1 >= 0 && 128 == (192 & _0x5c1650[_0x4b19c1]);) {
        _0x4b19c1--;
      }
      return _0x4b19c1 < 0 || 0 === _0x4b19c1 ? _0x39bd25 : _0x4b19c1 + _0x3cc6ad[_0x5c1650[_0x4b19c1]] > _0x39bd25 ? _0x4b19c1 : _0x39bd25;
    },
    _0xa65915 = function () {
      this.input = null;
      this.next_in = 0;
      this.avail_in = 0;
      this.total_in = 0;
      this.output = null;
      this.next_out = 0;
      this.avail_out = 0;
      this.total_out = 0;
      this.msg = "";
      this.state = null;
      this.data_type = 2;
      this.adler = 0;
    };
  const _0x3f4d96 = Object.prototype.toString,
    {
      Z_NO_FLUSH: _0x1cf7df,
      Z_SYNC_FLUSH: _0x2f8df1,
      Z_FULL_FLUSH: _0x48e2ec,
      Z_FINISH: _0x90a4f3,
      Z_OK: _0x108fe5,
      Z_STREAM_END: _0x1fd65b,
      Z_DEFAULT_COMPRESSION: _0x5ba7c9,
      Z_DEFAULT_STRATEGY: _0x28961a,
      Z_DEFLATED: _0x1cba88
    } = _0x3d81e7;
  function _0x460e3e(_0x5697d6) {
    const _0x376b14 = {
      level: _0x5ba7c9,
      method: _0x1cba88,
      chunkSize: 16384,
      windowBits: 15,
      memLevel: 8,
      strategy: _0x28961a
    };
    this.options = _0x4a5be8(_0x376b14, _0x5697d6 || {});
    let _0x3a3d8e = this.options;
    _0x3a3d8e.raw && _0x3a3d8e.windowBits > 0 ? _0x3a3d8e.windowBits = -_0x3a3d8e.windowBits : _0x3a3d8e.gzip && _0x3a3d8e.windowBits > 0 && _0x3a3d8e.windowBits < 16 && (_0x3a3d8e.windowBits += 16);
    this.err = 0;
    this.msg = "";
    this.ended = !1;
    this.chunks = [];
    this.strm = new _0xa65915();
    this.strm.avail_out = 0;
    let _0x5dc2c0 = _0x5ce2c6.deflateInit2(this.strm, _0x3a3d8e.level, _0x3a3d8e.method, _0x3a3d8e.windowBits, _0x3a3d8e.memLevel, _0x3a3d8e.strategy);
    if (_0x5dc2c0 !== _0x108fe5) {
      throw new Error(_0x3e7da8[_0x5dc2c0]);
    }
    if (_0x3a3d8e.header && _0x5ce2c6.deflateSetHeader(this.strm, _0x3a3d8e.header), _0x3a3d8e.dictionary) {
      let _0x53d748;
      if (_0x53d748 = "string" == typeof _0x3a3d8e.dictionary ? _0x1497b6(_0x3a3d8e.dictionary) : "[object ArrayBuffer]" === _0x3f4d96.call(_0x3a3d8e.dictionary) ? new Uint8Array(_0x3a3d8e.dictionary) : _0x3a3d8e.dictionary, _0x5dc2c0 = _0x5ce2c6.deflateSetDictionary(this.strm, _0x53d748), _0x5dc2c0 !== _0x108fe5) {
        throw new Error(_0x3e7da8[_0x5dc2c0]);
      }
      this._dict_set = !0;
    }
  }
  function _0x18553c(_0x22c860, _0x563afe) {
    const _0x291e7f = new _0x460e3e(_0x563afe);
    if (_0x291e7f.push(_0x22c860, !0), _0x291e7f.err) {
      throw _0x291e7f.msg || _0x3e7da8[_0x291e7f.err];
    }
    return _0x291e7f.result;
  }
  _0x460e3e.prototype.push = function (_0x184bd3, _0x25879b) {
    const _0x23c082 = this.strm,
      _0x43e572 = this.options.chunkSize;
    let _0x1111cf, _0x412f78;
    if (this.ended) {
      return !1;
    }
    for (_0x412f78 = _0x25879b === ~~_0x25879b ? _0x25879b : !0 === _0x25879b ? _0x90a4f3 : _0x1cf7df, "string" == typeof _0x184bd3 ? _0x23c082.input = _0x1497b6(_0x184bd3) : "[object ArrayBuffer]" === _0x3f4d96.call(_0x184bd3) ? _0x23c082.input = new Uint8Array(_0x184bd3) : _0x23c082.input = _0x184bd3, _0x23c082.next_in = 0, _0x23c082.avail_in = _0x23c082.input.length;;) {
      if (0 === _0x23c082.avail_out && (_0x23c082.output = new Uint8Array(_0x43e572), _0x23c082.next_out = 0, _0x23c082.avail_out = _0x43e572), (_0x412f78 === _0x2f8df1 || _0x412f78 === _0x48e2ec) && _0x23c082.avail_out <= 6) {
        this.onData(_0x23c082.output.subarray(0, _0x23c082.next_out));
        _0x23c082.avail_out = 0;
      } else {
        if (_0x1111cf = _0x5ce2c6.deflate(_0x23c082, _0x412f78), _0x1111cf === _0x1fd65b) {
          _0x23c082.next_out > 0 && this.onData(_0x23c082.output.subarray(0, _0x23c082.next_out));
          _0x1111cf = _0x5ce2c6.deflateEnd(this.strm);
          this.onEnd(_0x1111cf);
          this.ended = !0;
          return _0x1111cf === _0x108fe5;
        }
        if (0 !== _0x23c082.avail_out) {
          if (_0x412f78 > 0 && _0x23c082.next_out > 0) {
            this.onData(_0x23c082.output.subarray(0, _0x23c082.next_out));
            _0x23c082.avail_out = 0;
          } else {
            if (0 === _0x23c082.avail_in) {
              break;
            }
          }
        } else {
          this.onData(_0x23c082.output);
        }
      }
    }
    return !0;
  };
  _0x460e3e.prototype.onData = function (_0xa7ad7c) {
    this.chunks.push(_0xa7ad7c);
  };
  _0x460e3e.prototype.onEnd = function (_0x1a355e) {
    _0x1a355e === _0x108fe5 && (this.result = _0x1a9734(this.chunks));
    this.chunks = [];
    this.err = _0x1a355e;
    this.msg = this.strm.msg;
  };
  var _0x134fa6 = {
      Deflate: _0x460e3e,
      deflate: _0x18553c,
      deflateRaw: function (_0x49e692, _0x1e89c4) {
        (_0x1e89c4 = _0x1e89c4 || {}).raw = !0;
        return _0x18553c(_0x49e692, _0x1e89c4);
      },
      gzip: function (_0x54af83, _0x1d1fd0) {
        (_0x1d1fd0 = _0x1d1fd0 || {}).gzip = !0;
        return _0x18553c(_0x54af83, _0x1d1fd0);
      },
      constants: _0x3d81e7
    },
    _0x49ac3e = function (_0x1c792b, _0x3efeee) {
      let _0x4a5cdf, _0x1d5c94, _0x17358f, _0x43536a, _0x444895, _0x4ac64a, _0x4d03c3, _0x40fb7f, _0x1d54c3, _0x2dbfcc, _0x439e23, _0xc0e1ad, _0x4ff5e9, _0x43fe4a, _0x2fd435, _0x216843, _0x59098a, _0x417072, _0x422e6f, _0x195cc2, _0x328ba1, _0x2415d7, _0xe9b198, _0x5c7785;
      const _0x3a0f23 = _0x1c792b.state;
      _0x4a5cdf = _0x1c792b.next_in;
      _0xe9b198 = _0x1c792b.input;
      _0x1d5c94 = _0x4a5cdf + (_0x1c792b.avail_in - 5);
      _0x17358f = _0x1c792b.next_out;
      _0x5c7785 = _0x1c792b.output;
      _0x43536a = _0x17358f - (_0x3efeee - _0x1c792b.avail_out);
      _0x444895 = _0x17358f + (_0x1c792b.avail_out - 257);
      _0x4ac64a = _0x3a0f23.dmax;
      _0x4d03c3 = _0x3a0f23.wsize;
      _0x40fb7f = _0x3a0f23.whave;
      _0x1d54c3 = _0x3a0f23.wnext;
      _0x2dbfcc = _0x3a0f23.window;
      _0x439e23 = _0x3a0f23.hold;
      _0xc0e1ad = _0x3a0f23.bits;
      _0x4ff5e9 = _0x3a0f23.lencode;
      _0x43fe4a = _0x3a0f23.distcode;
      _0x2fd435 = (1 << _0x3a0f23.lenbits) - 1;
      _0x216843 = (1 << _0x3a0f23.distbits) - 1;
      _0x56d4a7: do {
        _0xc0e1ad < 15 && (_0x439e23 += _0xe9b198[_0x4a5cdf++] << _0xc0e1ad, _0xc0e1ad += 8, _0x439e23 += _0xe9b198[_0x4a5cdf++] << _0xc0e1ad, _0xc0e1ad += 8);
        _0x59098a = _0x4ff5e9[_0x439e23 & _0x2fd435];
        _0x466d13: for (;;) {
          if (_0x417072 = _0x59098a >>> 24, _0x439e23 >>>= _0x417072, _0xc0e1ad -= _0x417072, _0x417072 = _0x59098a >>> 16 & 255, 0 === _0x417072) {
            _0x5c7785[_0x17358f++] = 65535 & _0x59098a;
          } else {
            if (!(16 & _0x417072)) {
              if (0 == (64 & _0x417072)) {
                _0x59098a = _0x4ff5e9[(65535 & _0x59098a) + (_0x439e23 & (1 << _0x417072) - 1)];
                continue _0x466d13;
              }
              if (32 & _0x417072) {
                _0x3a0f23.mode = 12;
                break _0x56d4a7;
              }
              _0x1c792b.msg = "invalid literal/length code";
              _0x3a0f23.mode = 30;
              break _0x56d4a7;
            }
            _0x422e6f = 65535 & _0x59098a;
            _0x417072 &= 15;
            _0x417072 && (_0xc0e1ad < _0x417072 && (_0x439e23 += _0xe9b198[_0x4a5cdf++] << _0xc0e1ad, _0xc0e1ad += 8), _0x422e6f += _0x439e23 & (1 << _0x417072) - 1, _0x439e23 >>>= _0x417072, _0xc0e1ad -= _0x417072);
            _0xc0e1ad < 15 && (_0x439e23 += _0xe9b198[_0x4a5cdf++] << _0xc0e1ad, _0xc0e1ad += 8, _0x439e23 += _0xe9b198[_0x4a5cdf++] << _0xc0e1ad, _0xc0e1ad += 8);
            _0x59098a = _0x43fe4a[_0x439e23 & _0x216843];
            _0x3dd4ea: for (;;) {
              if (_0x417072 = _0x59098a >>> 24, _0x439e23 >>>= _0x417072, _0xc0e1ad -= _0x417072, _0x417072 = _0x59098a >>> 16 & 255, !(16 & _0x417072)) {
                if (0 == (64 & _0x417072)) {
                  _0x59098a = _0x43fe4a[(65535 & _0x59098a) + (_0x439e23 & (1 << _0x417072) - 1)];
                  continue _0x3dd4ea;
                }
                _0x1c792b.msg = "invalid distance code";
                _0x3a0f23.mode = 30;
                break _0x56d4a7;
              }
              if (_0x195cc2 = 65535 & _0x59098a, _0x417072 &= 15, _0xc0e1ad < _0x417072 && (_0x439e23 += _0xe9b198[_0x4a5cdf++] << _0xc0e1ad, _0xc0e1ad += 8, _0xc0e1ad < _0x417072 && (_0x439e23 += _0xe9b198[_0x4a5cdf++] << _0xc0e1ad, _0xc0e1ad += 8)), _0x195cc2 += _0x439e23 & (1 << _0x417072) - 1, _0x195cc2 > _0x4ac64a) {
                _0x1c792b.msg = "invalid distance too far back";
                _0x3a0f23.mode = 30;
                break _0x56d4a7;
              }
              if (_0x439e23 >>>= _0x417072, _0xc0e1ad -= _0x417072, _0x417072 = _0x17358f - _0x43536a, _0x195cc2 > _0x417072) {
                if (_0x417072 = _0x195cc2 - _0x417072, _0x417072 > _0x40fb7f && _0x3a0f23.sane) {
                  _0x1c792b.msg = "invalid distance too far back";
                  _0x3a0f23.mode = 30;
                  break _0x56d4a7;
                }
                if (_0x328ba1 = 0, _0x2415d7 = _0x2dbfcc, 0 === _0x1d54c3) {
                  if (_0x328ba1 += _0x4d03c3 - _0x417072, _0x417072 < _0x422e6f) {
                    _0x422e6f -= _0x417072;
                    do {
                      _0x5c7785[_0x17358f++] = _0x2dbfcc[_0x328ba1++];
                    } while (--_0x417072);
                    _0x328ba1 = _0x17358f - _0x195cc2;
                    _0x2415d7 = _0x5c7785;
                  }
                } else {
                  if (_0x1d54c3 < _0x417072) {
                    if (_0x328ba1 += _0x4d03c3 + _0x1d54c3 - _0x417072, _0x417072 -= _0x1d54c3, _0x417072 < _0x422e6f) {
                      _0x422e6f -= _0x417072;
                      do {
                        _0x5c7785[_0x17358f++] = _0x2dbfcc[_0x328ba1++];
                      } while (--_0x417072);
                      if (_0x328ba1 = 0, _0x1d54c3 < _0x422e6f) {
                        _0x417072 = _0x1d54c3;
                        _0x422e6f -= _0x417072;
                        do {
                          _0x5c7785[_0x17358f++] = _0x2dbfcc[_0x328ba1++];
                        } while (--_0x417072);
                        _0x328ba1 = _0x17358f - _0x195cc2;
                        _0x2415d7 = _0x5c7785;
                      }
                    }
                  } else {
                    if (_0x328ba1 += _0x1d54c3 - _0x417072, _0x417072 < _0x422e6f) {
                      _0x422e6f -= _0x417072;
                      do {
                        _0x5c7785[_0x17358f++] = _0x2dbfcc[_0x328ba1++];
                      } while (--_0x417072);
                      _0x328ba1 = _0x17358f - _0x195cc2;
                      _0x2415d7 = _0x5c7785;
                    }
                  }
                }
                for (; _0x422e6f > 2;) {
                  _0x5c7785[_0x17358f++] = _0x2415d7[_0x328ba1++];
                  _0x5c7785[_0x17358f++] = _0x2415d7[_0x328ba1++];
                  _0x5c7785[_0x17358f++] = _0x2415d7[_0x328ba1++];
                  _0x422e6f -= 3;
                }
                _0x422e6f && (_0x5c7785[_0x17358f++] = _0x2415d7[_0x328ba1++], _0x422e6f > 1 && (_0x5c7785[_0x17358f++] = _0x2415d7[_0x328ba1++]));
              } else {
                _0x328ba1 = _0x17358f - _0x195cc2;
                do {
                  _0x5c7785[_0x17358f++] = _0x5c7785[_0x328ba1++];
                  _0x5c7785[_0x17358f++] = _0x5c7785[_0x328ba1++];
                  _0x5c7785[_0x17358f++] = _0x5c7785[_0x328ba1++];
                  _0x422e6f -= 3;
                } while (_0x422e6f > 2);
                _0x422e6f && (_0x5c7785[_0x17358f++] = _0x5c7785[_0x328ba1++], _0x422e6f > 1 && (_0x5c7785[_0x17358f++] = _0x5c7785[_0x328ba1++]));
              }
              break;
            }
          }
          break;
        }
      } while (_0x4a5cdf < _0x1d5c94 && _0x17358f < _0x444895);
      _0x422e6f = _0xc0e1ad >> 3;
      _0x4a5cdf -= _0x422e6f;
      _0xc0e1ad -= _0x422e6f << 3;
      _0x439e23 &= (1 << _0xc0e1ad) - 1;
      _0x1c792b.next_in = _0x4a5cdf;
      _0x1c792b.next_out = _0x17358f;
      _0x1c792b.avail_in = _0x4a5cdf < _0x1d5c94 ? _0x1d5c94 - _0x4a5cdf + 5 : 5 - (_0x4a5cdf - _0x1d5c94);
      _0x1c792b.avail_out = _0x17358f < _0x444895 ? _0x444895 - _0x17358f + 257 : 257 - (_0x17358f - _0x444895);
      _0x3a0f23.hold = _0x439e23;
      _0x3a0f23.bits = _0xc0e1ad;
    };
  const _0x508660 = 15,
    _0x26cf3c = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]),
    _0x198839 = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]),
    _0x11f25d = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]),
    _0x14252d = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
  var _0x2b6c48 = (_0x1f7227, _0x8fc47, _0x4f504f, _0x840fc0, _0x5e7028, _0x3bdb39, _0xa913c5, _0x3fcd10) => {
    const _0xc1b73b = _0x3fcd10.bits;
    let _0x37e3f5,
      _0x3b4ab0,
      _0x54da82,
      _0x121de5,
      _0x23cb70,
      _0x28a055,
      _0x6ade24 = 0,
      _0x20abe1 = 0,
      _0x1a6e53 = 0,
      _0x9b93ae = 0,
      _0x48025b = 0,
      _0x1fa6b3 = 0,
      _0x3e5b11 = 0,
      _0x3d597c = 0,
      _0x2c33cb = 0,
      _0x2323de = 0,
      _0xed0fbd = null,
      _0x541326 = 0;
    const _0x1bf470 = new Uint16Array(16),
      _0x54b560 = new Uint16Array(16);
    let _0x3a3f38,
      _0x1a152a,
      _0x6a85d,
      _0x28978a = null,
      _0x2d4d25 = 0;
    for (_0x6ade24 = 0; _0x6ade24 <= _0x508660; _0x6ade24++) {
      _0x1bf470[_0x6ade24] = 0;
    }
    for (_0x20abe1 = 0; _0x20abe1 < _0x840fc0; _0x20abe1++) {
      _0x1bf470[_0x8fc47[_0x4f504f + _0x20abe1]]++;
    }
    for (_0x48025b = _0xc1b73b, _0x9b93ae = _0x508660; _0x9b93ae >= 1 && 0 === _0x1bf470[_0x9b93ae]; _0x9b93ae--) {}
    if (_0x48025b > _0x9b93ae && (_0x48025b = _0x9b93ae), 0 === _0x9b93ae) {
      _0x5e7028[_0x3bdb39++] = 20971520;
      _0x5e7028[_0x3bdb39++] = 20971520;
      _0x3fcd10.bits = 1;
      return 0;
    }
    for (_0x1a6e53 = 1; _0x1a6e53 < _0x9b93ae && 0 === _0x1bf470[_0x1a6e53]; _0x1a6e53++) {}
    for (_0x48025b < _0x1a6e53 && (_0x48025b = _0x1a6e53), _0x3d597c = 1, _0x6ade24 = 1; _0x6ade24 <= _0x508660; _0x6ade24++) {
      if (_0x3d597c <<= 1, _0x3d597c -= _0x1bf470[_0x6ade24], _0x3d597c < 0) {
        return -1;
      }
    }
    if (_0x3d597c > 0 && (0 === _0x1f7227 || 1 !== _0x9b93ae)) {
      return -1;
    }
    for (_0x54b560[1] = 0, _0x6ade24 = 1; _0x6ade24 < _0x508660; _0x6ade24++) {
      _0x54b560[_0x6ade24 + 1] = _0x54b560[_0x6ade24] + _0x1bf470[_0x6ade24];
    }
    for (_0x20abe1 = 0; _0x20abe1 < _0x840fc0; _0x20abe1++) {
      0 !== _0x8fc47[_0x4f504f + _0x20abe1] && (_0xa913c5[_0x54b560[_0x8fc47[_0x4f504f + _0x20abe1]]++] = _0x20abe1);
    }
    if (0 === _0x1f7227 ? (_0xed0fbd = _0x28978a = _0xa913c5, _0x28a055 = 19) : 1 === _0x1f7227 ? (_0xed0fbd = _0x26cf3c, _0x541326 -= 257, _0x28978a = _0x198839, _0x2d4d25 -= 257, _0x28a055 = 256) : (_0xed0fbd = _0x11f25d, _0x28978a = _0x14252d, _0x28a055 = -1), _0x2323de = 0, _0x20abe1 = 0, _0x6ade24 = _0x1a6e53, _0x23cb70 = _0x3bdb39, _0x1fa6b3 = _0x48025b, _0x3e5b11 = 0, _0x54da82 = -1, _0x2c33cb = 1 << _0x48025b, _0x121de5 = _0x2c33cb - 1, 1 === _0x1f7227 && _0x2c33cb > 852 || 2 === _0x1f7227 && _0x2c33cb > 592) {
      return 1;
    }
    for (;;) {
      _0x3a3f38 = _0x6ade24 - _0x3e5b11;
      _0xa913c5[_0x20abe1] < _0x28a055 ? (_0x1a152a = 0, _0x6a85d = _0xa913c5[_0x20abe1]) : _0xa913c5[_0x20abe1] > _0x28a055 ? (_0x1a152a = _0x28978a[_0x2d4d25 + _0xa913c5[_0x20abe1]], _0x6a85d = _0xed0fbd[_0x541326 + _0xa913c5[_0x20abe1]]) : (_0x1a152a = 96, _0x6a85d = 0);
      _0x37e3f5 = 1 << _0x6ade24 - _0x3e5b11;
      _0x3b4ab0 = 1 << _0x1fa6b3;
      _0x1a6e53 = _0x3b4ab0;
      do {
        _0x3b4ab0 -= _0x37e3f5;
        _0x5e7028[_0x23cb70 + (_0x2323de >> _0x3e5b11) + _0x3b4ab0] = _0x3a3f38 << 24 | _0x1a152a << 16 | _0x6a85d | 0;
      } while (0 !== _0x3b4ab0);
      for (_0x37e3f5 = 1 << _0x6ade24 - 1; _0x2323de & _0x37e3f5;) {
        _0x37e3f5 >>= 1;
      }
      if (0 !== _0x37e3f5 ? (_0x2323de &= _0x37e3f5 - 1, _0x2323de += _0x37e3f5) : _0x2323de = 0, _0x20abe1++, 0 == --_0x1bf470[_0x6ade24]) {
        if (_0x6ade24 === _0x9b93ae) {
          break;
        }
        _0x6ade24 = _0x8fc47[_0x4f504f + _0xa913c5[_0x20abe1]];
      }
      if (_0x6ade24 > _0x48025b && (_0x2323de & _0x121de5) !== _0x54da82) {
        for (0 === _0x3e5b11 && (_0x3e5b11 = _0x48025b), _0x23cb70 += _0x1a6e53, _0x1fa6b3 = _0x6ade24 - _0x3e5b11, _0x3d597c = 1 << _0x1fa6b3; _0x1fa6b3 + _0x3e5b11 < _0x9b93ae && (_0x3d597c -= _0x1bf470[_0x1fa6b3 + _0x3e5b11], !(_0x3d597c <= 0));) {
          _0x1fa6b3++;
          _0x3d597c <<= 1;
        }
        if (_0x2c33cb += 1 << _0x1fa6b3, 1 === _0x1f7227 && _0x2c33cb > 852 || 2 === _0x1f7227 && _0x2c33cb > 592) {
          return 1;
        }
        _0x54da82 = _0x2323de & _0x121de5;
        _0x5e7028[_0x54da82] = _0x48025b << 24 | _0x1fa6b3 << 16 | _0x23cb70 - _0x3bdb39 | 0;
      }
    }
    0 !== _0x2323de && (_0x5e7028[_0x23cb70 + _0x2323de] = _0x6ade24 - _0x3e5b11 << 24 | 4194304 | 0);
    _0x3fcd10.bits = _0x48025b;
    return 0;
  };
  const {
      Z_FINISH: _0x54052e,
      Z_BLOCK: _0x4101cb,
      Z_TREES: _0x58148c,
      Z_OK: _0x24d2bc,
      Z_STREAM_END: _0x5b6b67,
      Z_NEED_DICT: _0x3f962f,
      Z_STREAM_ERROR: _0x4f383b,
      Z_DATA_ERROR: _0x1be280,
      Z_MEM_ERROR: _0x22c42f,
      Z_BUF_ERROR: _0x41b8c3,
      Z_DEFLATED: _0x4ab107
    } = _0x3d81e7,
    _0x34394 = 12,
    _0x86764a = 30,
    _0x3a9646 = _0x22493e => (_0x22493e >>> 24 & 255) + (_0x22493e >>> 8 & 65280) + ((65280 & _0x22493e) << 8) + ((255 & _0x22493e) << 24);
  function _0x1aa549() {
    this.mode = 0;
    this.last = !1;
    this.wrap = 0;
    this.havedict = !1;
    this.flags = 0;
    this.dmax = 0;
    this.check = 0;
    this.total = 0;
    this.head = null;
    this.wbits = 0;
    this.wsize = 0;
    this.whave = 0;
    this.wnext = 0;
    this.window = null;
    this.hold = 0;
    this.bits = 0;
    this.length = 0;
    this.offset = 0;
    this.extra = 0;
    this.lencode = null;
    this.distcode = null;
    this.lenbits = 0;
    this.distbits = 0;
    this.ncode = 0;
    this.nlen = 0;
    this.ndist = 0;
    this.have = 0;
    this.next = null;
    this.lens = new Uint16Array(320);
    this.work = new Uint16Array(288);
    this.lendyn = null;
    this.distdyn = null;
    this.sane = 0;
    this.back = 0;
    this.was = 0;
  }
  const _0x48d754 = _0x2c98e6 => {
      if (!_0x2c98e6 || !_0x2c98e6.state) {
        return _0x4f383b;
      }
      const _0x271ed8 = _0x2c98e6.state;
      _0x2c98e6.total_in = _0x2c98e6.total_out = _0x271ed8.total = 0;
      _0x2c98e6.msg = "";
      _0x271ed8.wrap && (_0x2c98e6.adler = 1 & _0x271ed8.wrap);
      _0x271ed8.mode = 1;
      _0x271ed8.last = 0;
      _0x271ed8.havedict = 0;
      _0x271ed8.dmax = 32768;
      _0x271ed8.head = null;
      _0x271ed8.hold = 0;
      _0x271ed8.bits = 0;
      _0x271ed8.lencode = _0x271ed8.lendyn = new Int32Array(852);
      _0x271ed8.distcode = _0x271ed8.distdyn = new Int32Array(592);
      _0x271ed8.sane = 1;
      _0x271ed8.back = -1;
      return _0x24d2bc;
    },
    _0x56adcd = _0x2fc2ec => {
      if (!_0x2fc2ec || !_0x2fc2ec.state) {
        return _0x4f383b;
      }
      const _0x2a0537 = _0x2fc2ec.state;
      _0x2a0537.wsize = 0;
      _0x2a0537.whave = 0;
      _0x2a0537.wnext = 0;
      return _0x48d754(_0x2fc2ec);
    },
    _0x3d9bae = (_0x422c9f, _0x2987cb) => {
      let _0x2b48df;
      if (!_0x422c9f || !_0x422c9f.state) {
        return _0x4f383b;
      }
      const _0x47c13f = _0x422c9f.state;
      _0x2987cb < 0 ? (_0x2b48df = 0, _0x2987cb = -_0x2987cb) : (_0x2b48df = 1 + (_0x2987cb >> 4), _0x2987cb < 48 && (_0x2987cb &= 15));
      return _0x2987cb && (_0x2987cb < 8 || _0x2987cb > 15) ? _0x4f383b : (null !== _0x47c13f.window && _0x47c13f.wbits !== _0x2987cb && (_0x47c13f.window = null), _0x47c13f.wrap = _0x2b48df, _0x47c13f.wbits = _0x2987cb, _0x56adcd(_0x422c9f));
    },
    _0x2e50aa = (_0x8156fd, _0xcc1003) => {
      if (!_0x8156fd) {
        return _0x4f383b;
      }
      const _0x2f25b4 = new _0x1aa549();
      _0x8156fd.state = _0x2f25b4;
      _0x2f25b4.window = null;
      const _0x443152 = _0x3d9bae(_0x8156fd, _0xcc1003);
      _0x443152 !== _0x24d2bc && (_0x8156fd.state = null);
      return _0x443152;
    };
  let _0x1b41e6,
    _0x1f9a61,
    _0x1b7c2d = !0;
  const _0x5782f4 = _0x3c81ae => {
      if (_0x1b7c2d) {
        _0x1b41e6 = new Int32Array(512);
        _0x1f9a61 = new Int32Array(32);
        let _0x5c7e3b = 0;
        for (; _0x5c7e3b < 144;) {
          _0x3c81ae.lens[_0x5c7e3b++] = 8;
        }
        for (; _0x5c7e3b < 256;) {
          _0x3c81ae.lens[_0x5c7e3b++] = 9;
        }
        for (; _0x5c7e3b < 280;) {
          _0x3c81ae.lens[_0x5c7e3b++] = 7;
        }
        for (; _0x5c7e3b < 288;) {
          _0x3c81ae.lens[_0x5c7e3b++] = 8;
        }
        const _0x439995 = {
          bits: 9
        };
        for (_0x2b6c48(1, _0x3c81ae.lens, 0, 288, _0x1b41e6, 0, _0x3c81ae.work, _0x439995), _0x5c7e3b = 0; _0x5c7e3b < 32;) {
          _0x3c81ae.lens[_0x5c7e3b++] = 5;
        }
        const _0x450c12 = {
          bits: 5
        };
        _0x2b6c48(2, _0x3c81ae.lens, 0, 32, _0x1f9a61, 0, _0x3c81ae.work, _0x450c12);
        _0x1b7c2d = !1;
      }
      _0x3c81ae.lencode = _0x1b41e6;
      _0x3c81ae.lenbits = 9;
      _0x3c81ae.distcode = _0x1f9a61;
      _0x3c81ae.distbits = 5;
    },
    _0x1e3f32 = (_0x37f25b, _0x71faff, _0x3a0b5f, _0x42b6b3) => {
      let _0x38529e;
      const _0x464142 = _0x37f25b.state;
      null === _0x464142.window && (_0x464142.wsize = 1 << _0x464142.wbits, _0x464142.wnext = 0, _0x464142.whave = 0, _0x464142.window = new Uint8Array(_0x464142.wsize));
      _0x42b6b3 >= _0x464142.wsize ? (_0x464142.window.set(_0x71faff.subarray(_0x3a0b5f - _0x464142.wsize, _0x3a0b5f), 0), _0x464142.wnext = 0, _0x464142.whave = _0x464142.wsize) : (_0x38529e = _0x464142.wsize - _0x464142.wnext, _0x38529e > _0x42b6b3 && (_0x38529e = _0x42b6b3), _0x464142.window.set(_0x71faff.subarray(_0x3a0b5f - _0x42b6b3, _0x3a0b5f - _0x42b6b3 + _0x38529e), _0x464142.wnext), (_0x42b6b3 -= _0x38529e) ? (_0x464142.window.set(_0x71faff.subarray(_0x3a0b5f - _0x42b6b3, _0x3a0b5f), 0), _0x464142.wnext = _0x42b6b3, _0x464142.whave = _0x464142.wsize) : (_0x464142.wnext += _0x38529e, _0x464142.wnext === _0x464142.wsize && (_0x464142.wnext = 0), _0x464142.whave < _0x464142.wsize && (_0x464142.whave += _0x38529e)));
      return 0;
    };
  var _0x47446e = {
      inflateReset: _0x56adcd,
      inflateReset2: _0x3d9bae,
      inflateResetKeep: _0x48d754,
      inflateInit: _0x5286eb => _0x2e50aa(_0x5286eb, 15),
      inflateInit2: _0x2e50aa,
      inflate: (_0x4c6d68, _0x19d4e9) => {
        let _0x418ca2,
          _0x5b7d7a,
          _0x484b3c,
          _0x4a257b,
          _0x433509,
          _0x302781,
          _0xd475b7,
          _0x4ff5fb,
          _0x2d5050,
          _0x5f240b,
          _0x577fa9,
          _0x46e455,
          _0x3fdebf,
          _0x1b7718,
          _0x40780c,
          _0x427e49,
          _0x12afcb,
          _0x2a0892,
          _0xb32302,
          _0x5ea8bb,
          _0x256d92,
          _0x54d2b7,
          _0x5038ab = 0;
        const _0x6c0b72 = new Uint8Array(4);
        let _0x35abf0, _0x1774d0;
        const _0x5778b5 = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
        if (!_0x4c6d68 || !_0x4c6d68.state || !_0x4c6d68.output || !_0x4c6d68.input && 0 !== _0x4c6d68.avail_in) {
          return _0x4f383b;
        }
        _0x418ca2 = _0x4c6d68.state;
        _0x418ca2.mode === _0x34394 && (_0x418ca2.mode = 13);
        _0x433509 = _0x4c6d68.next_out;
        _0x484b3c = _0x4c6d68.output;
        _0xd475b7 = _0x4c6d68.avail_out;
        _0x4a257b = _0x4c6d68.next_in;
        _0x5b7d7a = _0x4c6d68.input;
        _0x302781 = _0x4c6d68.avail_in;
        _0x4ff5fb = _0x418ca2.hold;
        _0x2d5050 = _0x418ca2.bits;
        _0x5f240b = _0x302781;
        _0x577fa9 = _0xd475b7;
        _0x54d2b7 = _0x24d2bc;
        _0x517c69: for (;;) {
          switch (_0x418ca2.mode) {
            case 1:
              if (0 === _0x418ca2.wrap) {
                _0x418ca2.mode = 13;
                break;
              }
              for (; _0x2d5050 < 16;) {
                if (0 === _0x302781) {
                  break _0x517c69;
                }
                _0x302781--;
                _0x4ff5fb += _0x5b7d7a[_0x4a257b++] << _0x2d5050;
                _0x2d5050 += 8;
              }
              if (2 & _0x418ca2.wrap && 35615 === _0x4ff5fb) {
                _0x418ca2.check = 0;
                _0x6c0b72[0] = 255 & _0x4ff5fb;
                _0x6c0b72[1] = _0x4ff5fb >>> 8 & 255;
                _0x418ca2.check = _0x1b6282(_0x418ca2.check, _0x6c0b72, 2, 0);
                _0x4ff5fb = 0;
                _0x2d5050 = 0;
                _0x418ca2.mode = 2;
                break;
              }
              if (_0x418ca2.flags = 0, _0x418ca2.head && (_0x418ca2.head.done = !1), !(1 & _0x418ca2.wrap) || (((255 & _0x4ff5fb) << 8) + (_0x4ff5fb >> 8)) % 31) {
                _0x4c6d68.msg = "incorrect header check";
                _0x418ca2.mode = _0x86764a;
                break;
              }
              if ((15 & _0x4ff5fb) !== _0x4ab107) {
                _0x4c6d68.msg = "unknown compression method";
                _0x418ca2.mode = _0x86764a;
                break;
              }
              if (_0x4ff5fb >>>= 4, _0x2d5050 -= 4, _0x256d92 = 8 + (15 & _0x4ff5fb), 0 === _0x418ca2.wbits) {
                _0x418ca2.wbits = _0x256d92;
              } else {
                if (_0x256d92 > _0x418ca2.wbits) {
                  _0x4c6d68.msg = "invalid window size";
                  _0x418ca2.mode = _0x86764a;
                  break;
                }
              }
              _0x418ca2.dmax = 1 << _0x418ca2.wbits;
              _0x4c6d68.adler = _0x418ca2.check = 1;
              _0x418ca2.mode = 512 & _0x4ff5fb ? 10 : _0x34394;
              _0x4ff5fb = 0;
              _0x2d5050 = 0;
              break;
            case 2:
              for (; _0x2d5050 < 16;) {
                if (0 === _0x302781) {
                  break _0x517c69;
                }
                _0x302781--;
                _0x4ff5fb += _0x5b7d7a[_0x4a257b++] << _0x2d5050;
                _0x2d5050 += 8;
              }
              if (_0x418ca2.flags = _0x4ff5fb, (255 & _0x418ca2.flags) !== _0x4ab107) {
                _0x4c6d68.msg = "unknown compression method";
                _0x418ca2.mode = _0x86764a;
                break;
              }
              if (57344 & _0x418ca2.flags) {
                _0x4c6d68.msg = "unknown header flags set";
                _0x418ca2.mode = _0x86764a;
                break;
              }
              _0x418ca2.head && (_0x418ca2.head.text = _0x4ff5fb >> 8 & 1);
              512 & _0x418ca2.flags && (_0x6c0b72[0] = 255 & _0x4ff5fb, _0x6c0b72[1] = _0x4ff5fb >>> 8 & 255, _0x418ca2.check = _0x1b6282(_0x418ca2.check, _0x6c0b72, 2, 0));
              _0x4ff5fb = 0;
              _0x2d5050 = 0;
              _0x418ca2.mode = 3;
            case 3:
              for (; _0x2d5050 < 32;) {
                if (0 === _0x302781) {
                  break _0x517c69;
                }
                _0x302781--;
                _0x4ff5fb += _0x5b7d7a[_0x4a257b++] << _0x2d5050;
                _0x2d5050 += 8;
              }
              _0x418ca2.head && (_0x418ca2.head.time = _0x4ff5fb);
              512 & _0x418ca2.flags && (_0x6c0b72[0] = 255 & _0x4ff5fb, _0x6c0b72[1] = _0x4ff5fb >>> 8 & 255, _0x6c0b72[2] = _0x4ff5fb >>> 16 & 255, _0x6c0b72[3] = _0x4ff5fb >>> 24 & 255, _0x418ca2.check = _0x1b6282(_0x418ca2.check, _0x6c0b72, 4, 0));
              _0x4ff5fb = 0;
              _0x2d5050 = 0;
              _0x418ca2.mode = 4;
            case 4:
              for (; _0x2d5050 < 16;) {
                if (0 === _0x302781) {
                  break _0x517c69;
                }
                _0x302781--;
                _0x4ff5fb += _0x5b7d7a[_0x4a257b++] << _0x2d5050;
                _0x2d5050 += 8;
              }
              _0x418ca2.head && (_0x418ca2.head.xflags = 255 & _0x4ff5fb, _0x418ca2.head.os = _0x4ff5fb >> 8);
              512 & _0x418ca2.flags && (_0x6c0b72[0] = 255 & _0x4ff5fb, _0x6c0b72[1] = _0x4ff5fb >>> 8 & 255, _0x418ca2.check = _0x1b6282(_0x418ca2.check, _0x6c0b72, 2, 0));
              _0x4ff5fb = 0;
              _0x2d5050 = 0;
              _0x418ca2.mode = 5;
            case 5:
              if (1024 & _0x418ca2.flags) {
                for (; _0x2d5050 < 16;) {
                  if (0 === _0x302781) {
                    break _0x517c69;
                  }
                  _0x302781--;
                  _0x4ff5fb += _0x5b7d7a[_0x4a257b++] << _0x2d5050;
                  _0x2d5050 += 8;
                }
                _0x418ca2.length = _0x4ff5fb;
                _0x418ca2.head && (_0x418ca2.head.extra_len = _0x4ff5fb);
                512 & _0x418ca2.flags && (_0x6c0b72[0] = 255 & _0x4ff5fb, _0x6c0b72[1] = _0x4ff5fb >>> 8 & 255, _0x418ca2.check = _0x1b6282(_0x418ca2.check, _0x6c0b72, 2, 0));
                _0x4ff5fb = 0;
                _0x2d5050 = 0;
              } else {
                _0x418ca2.head && (_0x418ca2.head.extra = null);
              }
              _0x418ca2.mode = 6;
            case 6:
              if (1024 & _0x418ca2.flags && (_0x46e455 = _0x418ca2.length, _0x46e455 > _0x302781 && (_0x46e455 = _0x302781), _0x46e455 && (_0x418ca2.head && (_0x256d92 = _0x418ca2.head.extra_len - _0x418ca2.length, _0x418ca2.head.extra || (_0x418ca2.head.extra = new Uint8Array(_0x418ca2.head.extra_len)), _0x418ca2.head.extra.set(_0x5b7d7a.subarray(_0x4a257b, _0x4a257b + _0x46e455), _0x256d92)), 512 & _0x418ca2.flags && (_0x418ca2.check = _0x1b6282(_0x418ca2.check, _0x5b7d7a, _0x46e455, _0x4a257b)), _0x302781 -= _0x46e455, _0x4a257b += _0x46e455, _0x418ca2.length -= _0x46e455), _0x418ca2.length)) {
                break _0x517c69;
              }
              _0x418ca2.length = 0;
              _0x418ca2.mode = 7;
            case 7:
              if (2048 & _0x418ca2.flags) {
                if (0 === _0x302781) {
                  break _0x517c69;
                }
                _0x46e455 = 0;
                do {
                  _0x256d92 = _0x5b7d7a[_0x4a257b + _0x46e455++];
                  _0x418ca2.head && _0x256d92 && _0x418ca2.length < 65536 && (_0x418ca2.head.name += String.fromCharCode(_0x256d92));
                } while (_0x256d92 && _0x46e455 < _0x302781);
                if (512 & _0x418ca2.flags && (_0x418ca2.check = _0x1b6282(_0x418ca2.check, _0x5b7d7a, _0x46e455, _0x4a257b)), _0x302781 -= _0x46e455, _0x4a257b += _0x46e455, _0x256d92) {
                  break _0x517c69;
                }
              } else {
                _0x418ca2.head && (_0x418ca2.head.name = null);
              }
              _0x418ca2.length = 0;
              _0x418ca2.mode = 8;
            case 8:
              if (4096 & _0x418ca2.flags) {
                if (0 === _0x302781) {
                  break _0x517c69;
                }
                _0x46e455 = 0;
                do {
                  _0x256d92 = _0x5b7d7a[_0x4a257b + _0x46e455++];
                  _0x418ca2.head && _0x256d92 && _0x418ca2.length < 65536 && (_0x418ca2.head.comment += String.fromCharCode(_0x256d92));
                } while (_0x256d92 && _0x46e455 < _0x302781);
                if (512 & _0x418ca2.flags && (_0x418ca2.check = _0x1b6282(_0x418ca2.check, _0x5b7d7a, _0x46e455, _0x4a257b)), _0x302781 -= _0x46e455, _0x4a257b += _0x46e455, _0x256d92) {
                  break _0x517c69;
                }
              } else {
                _0x418ca2.head && (_0x418ca2.head.comment = null);
              }
              _0x418ca2.mode = 9;
            case 9:
              if (512 & _0x418ca2.flags) {
                for (; _0x2d5050 < 16;) {
                  if (0 === _0x302781) {
                    break _0x517c69;
                  }
                  _0x302781--;
                  _0x4ff5fb += _0x5b7d7a[_0x4a257b++] << _0x2d5050;
                  _0x2d5050 += 8;
                }
                if (_0x4ff5fb !== (65535 & _0x418ca2.check)) {
                  _0x4c6d68.msg = "header crc mismatch";
                  _0x418ca2.mode = _0x86764a;
                  break;
                }
                _0x4ff5fb = 0;
                _0x2d5050 = 0;
              }
              _0x418ca2.head && (_0x418ca2.head.hcrc = _0x418ca2.flags >> 9 & 1, _0x418ca2.head.done = !0);
              _0x4c6d68.adler = _0x418ca2.check = 0;
              _0x418ca2.mode = _0x34394;
              break;
            case 10:
              for (; _0x2d5050 < 32;) {
                if (0 === _0x302781) {
                  break _0x517c69;
                }
                _0x302781--;
                _0x4ff5fb += _0x5b7d7a[_0x4a257b++] << _0x2d5050;
                _0x2d5050 += 8;
              }
              _0x4c6d68.adler = _0x418ca2.check = _0x3a9646(_0x4ff5fb);
              _0x4ff5fb = 0;
              _0x2d5050 = 0;
              _0x418ca2.mode = 11;
            case 11:
              if (0 === _0x418ca2.havedict) {
                _0x4c6d68.next_out = _0x433509;
                _0x4c6d68.avail_out = _0xd475b7;
                _0x4c6d68.next_in = _0x4a257b;
                _0x4c6d68.avail_in = _0x302781;
                _0x418ca2.hold = _0x4ff5fb;
                _0x418ca2.bits = _0x2d5050;
                return _0x3f962f;
              }
              _0x4c6d68.adler = _0x418ca2.check = 1;
              _0x418ca2.mode = _0x34394;
            case _0x34394:
              if (_0x19d4e9 === _0x4101cb || _0x19d4e9 === _0x58148c) {
                break _0x517c69;
              }
            case 13:
              if (_0x418ca2.last) {
                _0x4ff5fb >>>= 7 & _0x2d5050;
                _0x2d5050 -= 7 & _0x2d5050;
                _0x418ca2.mode = 27;
                break;
              }
              for (; _0x2d5050 < 3;) {
                if (0 === _0x302781) {
                  break _0x517c69;
                }
                _0x302781--;
                _0x4ff5fb += _0x5b7d7a[_0x4a257b++] << _0x2d5050;
                _0x2d5050 += 8;
              }
              switch (_0x418ca2.last = 1 & _0x4ff5fb, _0x4ff5fb >>>= 1, _0x2d5050 -= 1, 3 & _0x4ff5fb) {
                case 0:
                  _0x418ca2.mode = 14;
                  break;
                case 1:
                  if (_0x5782f4(_0x418ca2), _0x418ca2.mode = 20, _0x19d4e9 === _0x58148c) {
                    _0x4ff5fb >>>= 2;
                    _0x2d5050 -= 2;
                    break _0x517c69;
                  }
                  break;
                case 2:
                  _0x418ca2.mode = 17;
                  break;
                case 3:
                  _0x4c6d68.msg = "invalid block type";
                  _0x418ca2.mode = _0x86764a;
              }
              _0x4ff5fb >>>= 2;
              _0x2d5050 -= 2;
              break;
            case 14:
              for (_0x4ff5fb >>>= 7 & _0x2d5050, _0x2d5050 -= 7 & _0x2d5050; _0x2d5050 < 32;) {
                if (0 === _0x302781) {
                  break _0x517c69;
                }
                _0x302781--;
                _0x4ff5fb += _0x5b7d7a[_0x4a257b++] << _0x2d5050;
                _0x2d5050 += 8;
              }
              if ((65535 & _0x4ff5fb) != (_0x4ff5fb >>> 16 ^ 65535)) {
                _0x4c6d68.msg = "invalid stored block lengths";
                _0x418ca2.mode = _0x86764a;
                break;
              }
              if (_0x418ca2.length = 65535 & _0x4ff5fb, _0x4ff5fb = 0, _0x2d5050 = 0, _0x418ca2.mode = 15, _0x19d4e9 === _0x58148c) {
                break _0x517c69;
              }
            case 15:
              _0x418ca2.mode = 16;
            case 16:
              if (_0x46e455 = _0x418ca2.length, _0x46e455) {
                if (_0x46e455 > _0x302781 && (_0x46e455 = _0x302781), _0x46e455 > _0xd475b7 && (_0x46e455 = _0xd475b7), 0 === _0x46e455) {
                  break _0x517c69;
                }
                _0x484b3c.set(_0x5b7d7a.subarray(_0x4a257b, _0x4a257b + _0x46e455), _0x433509);
                _0x302781 -= _0x46e455;
                _0x4a257b += _0x46e455;
                _0xd475b7 -= _0x46e455;
                _0x433509 += _0x46e455;
                _0x418ca2.length -= _0x46e455;
                break;
              }
              _0x418ca2.mode = _0x34394;
              break;
            case 17:
              for (; _0x2d5050 < 14;) {
                if (0 === _0x302781) {
                  break _0x517c69;
                }
                _0x302781--;
                _0x4ff5fb += _0x5b7d7a[_0x4a257b++] << _0x2d5050;
                _0x2d5050 += 8;
              }
              if (_0x418ca2.nlen = 257 + (31 & _0x4ff5fb), _0x4ff5fb >>>= 5, _0x2d5050 -= 5, _0x418ca2.ndist = 1 + (31 & _0x4ff5fb), _0x4ff5fb >>>= 5, _0x2d5050 -= 5, _0x418ca2.ncode = 4 + (15 & _0x4ff5fb), _0x4ff5fb >>>= 4, _0x2d5050 -= 4, _0x418ca2.nlen > 286 || _0x418ca2.ndist > 30) {
                _0x4c6d68.msg = "too many length or distance symbols";
                _0x418ca2.mode = _0x86764a;
                break;
              }
              _0x418ca2.have = 0;
              _0x418ca2.mode = 18;
            case 18:
              for (; _0x418ca2.have < _0x418ca2.ncode;) {
                for (; _0x2d5050 < 3;) {
                  if (0 === _0x302781) {
                    break _0x517c69;
                  }
                  _0x302781--;
                  _0x4ff5fb += _0x5b7d7a[_0x4a257b++] << _0x2d5050;
                  _0x2d5050 += 8;
                }
                _0x418ca2.lens[_0x5778b5[_0x418ca2.have++]] = 7 & _0x4ff5fb;
                _0x4ff5fb >>>= 3;
                _0x2d5050 -= 3;
              }
              for (; _0x418ca2.have < 19;) {
                _0x418ca2.lens[_0x5778b5[_0x418ca2.have++]] = 0;
              }
              if (_0x418ca2.lencode = _0x418ca2.lendyn, _0x418ca2.lenbits = 7, _0x35abf0 = {
                bits: _0x418ca2.lenbits
              }, _0x54d2b7 = _0x2b6c48(0, _0x418ca2.lens, 0, 19, _0x418ca2.lencode, 0, _0x418ca2.work, _0x35abf0), _0x418ca2.lenbits = _0x35abf0.bits, _0x54d2b7) {
                _0x4c6d68.msg = "invalid code lengths set";
                _0x418ca2.mode = _0x86764a;
                break;
              }
              _0x418ca2.have = 0;
              _0x418ca2.mode = 19;
            case 19:
              for (; _0x418ca2.have < _0x418ca2.nlen + _0x418ca2.ndist;) {
                for (; _0x5038ab = _0x418ca2.lencode[_0x4ff5fb & (1 << _0x418ca2.lenbits) - 1], _0x40780c = _0x5038ab >>> 24, _0x427e49 = _0x5038ab >>> 16 & 255, _0x12afcb = 65535 & _0x5038ab, !(_0x40780c <= _0x2d5050);) {
                  if (0 === _0x302781) {
                    break _0x517c69;
                  }
                  _0x302781--;
                  _0x4ff5fb += _0x5b7d7a[_0x4a257b++] << _0x2d5050;
                  _0x2d5050 += 8;
                }
                if (_0x12afcb < 16) {
                  _0x4ff5fb >>>= _0x40780c;
                  _0x2d5050 -= _0x40780c;
                  _0x418ca2.lens[_0x418ca2.have++] = _0x12afcb;
                } else {
                  if (16 === _0x12afcb) {
                    for (_0x1774d0 = _0x40780c + 2; _0x2d5050 < _0x1774d0;) {
                      if (0 === _0x302781) {
                        break _0x517c69;
                      }
                      _0x302781--;
                      _0x4ff5fb += _0x5b7d7a[_0x4a257b++] << _0x2d5050;
                      _0x2d5050 += 8;
                    }
                    if (_0x4ff5fb >>>= _0x40780c, _0x2d5050 -= _0x40780c, 0 === _0x418ca2.have) {
                      _0x4c6d68.msg = "invalid bit length repeat";
                      _0x418ca2.mode = _0x86764a;
                      break;
                    }
                    _0x256d92 = _0x418ca2.lens[_0x418ca2.have - 1];
                    _0x46e455 = 3 + (3 & _0x4ff5fb);
                    _0x4ff5fb >>>= 2;
                    _0x2d5050 -= 2;
                  } else {
                    if (17 === _0x12afcb) {
                      for (_0x1774d0 = _0x40780c + 3; _0x2d5050 < _0x1774d0;) {
                        if (0 === _0x302781) {
                          break _0x517c69;
                        }
                        _0x302781--;
                        _0x4ff5fb += _0x5b7d7a[_0x4a257b++] << _0x2d5050;
                        _0x2d5050 += 8;
                      }
                      _0x4ff5fb >>>= _0x40780c;
                      _0x2d5050 -= _0x40780c;
                      _0x256d92 = 0;
                      _0x46e455 = 3 + (7 & _0x4ff5fb);
                      _0x4ff5fb >>>= 3;
                      _0x2d5050 -= 3;
                    } else {
                      for (_0x1774d0 = _0x40780c + 7; _0x2d5050 < _0x1774d0;) {
                        if (0 === _0x302781) {
                          break _0x517c69;
                        }
                        _0x302781--;
                        _0x4ff5fb += _0x5b7d7a[_0x4a257b++] << _0x2d5050;
                        _0x2d5050 += 8;
                      }
                      _0x4ff5fb >>>= _0x40780c;
                      _0x2d5050 -= _0x40780c;
                      _0x256d92 = 0;
                      _0x46e455 = 11 + (127 & _0x4ff5fb);
                      _0x4ff5fb >>>= 7;
                      _0x2d5050 -= 7;
                    }
                  }
                  if (_0x418ca2.have + _0x46e455 > _0x418ca2.nlen + _0x418ca2.ndist) {
                    _0x4c6d68.msg = "invalid bit length repeat";
                    _0x418ca2.mode = _0x86764a;
                    break;
                  }
                  for (; _0x46e455--;) {
                    _0x418ca2.lens[_0x418ca2.have++] = _0x256d92;
                  }
                }
              }
              if (_0x418ca2.mode === _0x86764a) {
                break;
              }
              if (0 === _0x418ca2.lens[256]) {
                _0x4c6d68.msg = "invalid code -- missing end-of-block";
                _0x418ca2.mode = _0x86764a;
                break;
              }
              if (_0x418ca2.lenbits = 9, _0x35abf0 = {
                bits: _0x418ca2.lenbits
              }, _0x54d2b7 = _0x2b6c48(1, _0x418ca2.lens, 0, _0x418ca2.nlen, _0x418ca2.lencode, 0, _0x418ca2.work, _0x35abf0), _0x418ca2.lenbits = _0x35abf0.bits, _0x54d2b7) {
                _0x4c6d68.msg = "invalid literal/lengths set";
                _0x418ca2.mode = _0x86764a;
                break;
              }
              if (_0x418ca2.distbits = 6, _0x418ca2.distcode = _0x418ca2.distdyn, _0x35abf0 = {
                bits: _0x418ca2.distbits
              }, _0x54d2b7 = _0x2b6c48(2, _0x418ca2.lens, _0x418ca2.nlen, _0x418ca2.ndist, _0x418ca2.distcode, 0, _0x418ca2.work, _0x35abf0), _0x418ca2.distbits = _0x35abf0.bits, _0x54d2b7) {
                _0x4c6d68.msg = "invalid distances set";
                _0x418ca2.mode = _0x86764a;
                break;
              }
              if (_0x418ca2.mode = 20, _0x19d4e9 === _0x58148c) {
                break _0x517c69;
              }
            case 20:
              _0x418ca2.mode = 21;
            case 21:
              if (_0x302781 >= 6 && _0xd475b7 >= 258) {
                _0x4c6d68.next_out = _0x433509;
                _0x4c6d68.avail_out = _0xd475b7;
                _0x4c6d68.next_in = _0x4a257b;
                _0x4c6d68.avail_in = _0x302781;
                _0x418ca2.hold = _0x4ff5fb;
                _0x418ca2.bits = _0x2d5050;
                _0x49ac3e(_0x4c6d68, _0x577fa9);
                _0x433509 = _0x4c6d68.next_out;
                _0x484b3c = _0x4c6d68.output;
                _0xd475b7 = _0x4c6d68.avail_out;
                _0x4a257b = _0x4c6d68.next_in;
                _0x5b7d7a = _0x4c6d68.input;
                _0x302781 = _0x4c6d68.avail_in;
                _0x4ff5fb = _0x418ca2.hold;
                _0x2d5050 = _0x418ca2.bits;
                _0x418ca2.mode === _0x34394 && (_0x418ca2.back = -1);
                break;
              }
              for (_0x418ca2.back = 0; _0x5038ab = _0x418ca2.lencode[_0x4ff5fb & (1 << _0x418ca2.lenbits) - 1], _0x40780c = _0x5038ab >>> 24, _0x427e49 = _0x5038ab >>> 16 & 255, _0x12afcb = 65535 & _0x5038ab, !(_0x40780c <= _0x2d5050);) {
                if (0 === _0x302781) {
                  break _0x517c69;
                }
                _0x302781--;
                _0x4ff5fb += _0x5b7d7a[_0x4a257b++] << _0x2d5050;
                _0x2d5050 += 8;
              }
              if (_0x427e49 && 0 == (240 & _0x427e49)) {
                for (_0x2a0892 = _0x40780c, _0xb32302 = _0x427e49, _0x5ea8bb = _0x12afcb; _0x5038ab = _0x418ca2.lencode[_0x5ea8bb + ((_0x4ff5fb & (1 << _0x2a0892 + _0xb32302) - 1) >> _0x2a0892)], _0x40780c = _0x5038ab >>> 24, _0x427e49 = _0x5038ab >>> 16 & 255, _0x12afcb = 65535 & _0x5038ab, !(_0x2a0892 + _0x40780c <= _0x2d5050);) {
                  if (0 === _0x302781) {
                    break _0x517c69;
                  }
                  _0x302781--;
                  _0x4ff5fb += _0x5b7d7a[_0x4a257b++] << _0x2d5050;
                  _0x2d5050 += 8;
                }
                _0x4ff5fb >>>= _0x2a0892;
                _0x2d5050 -= _0x2a0892;
                _0x418ca2.back += _0x2a0892;
              }
              if (_0x4ff5fb >>>= _0x40780c, _0x2d5050 -= _0x40780c, _0x418ca2.back += _0x40780c, _0x418ca2.length = _0x12afcb, 0 === _0x427e49) {
                _0x418ca2.mode = 26;
                break;
              }
              if (32 & _0x427e49) {
                _0x418ca2.back = -1;
                _0x418ca2.mode = _0x34394;
                break;
              }
              if (64 & _0x427e49) {
                _0x4c6d68.msg = "invalid literal/length code";
                _0x418ca2.mode = _0x86764a;
                break;
              }
              _0x418ca2.extra = 15 & _0x427e49;
              _0x418ca2.mode = 22;
            case 22:
              if (_0x418ca2.extra) {
                for (_0x1774d0 = _0x418ca2.extra; _0x2d5050 < _0x1774d0;) {
                  if (0 === _0x302781) {
                    break _0x517c69;
                  }
                  _0x302781--;
                  _0x4ff5fb += _0x5b7d7a[_0x4a257b++] << _0x2d5050;
                  _0x2d5050 += 8;
                }
                _0x418ca2.length += _0x4ff5fb & (1 << _0x418ca2.extra) - 1;
                _0x4ff5fb >>>= _0x418ca2.extra;
                _0x2d5050 -= _0x418ca2.extra;
                _0x418ca2.back += _0x418ca2.extra;
              }
              _0x418ca2.was = _0x418ca2.length;
              _0x418ca2.mode = 23;
            case 23:
              for (; _0x5038ab = _0x418ca2.distcode[_0x4ff5fb & (1 << _0x418ca2.distbits) - 1], _0x40780c = _0x5038ab >>> 24, _0x427e49 = _0x5038ab >>> 16 & 255, _0x12afcb = 65535 & _0x5038ab, !(_0x40780c <= _0x2d5050);) {
                if (0 === _0x302781) {
                  break _0x517c69;
                }
                _0x302781--;
                _0x4ff5fb += _0x5b7d7a[_0x4a257b++] << _0x2d5050;
                _0x2d5050 += 8;
              }
              if (0 == (240 & _0x427e49)) {
                for (_0x2a0892 = _0x40780c, _0xb32302 = _0x427e49, _0x5ea8bb = _0x12afcb; _0x5038ab = _0x418ca2.distcode[_0x5ea8bb + ((_0x4ff5fb & (1 << _0x2a0892 + _0xb32302) - 1) >> _0x2a0892)], _0x40780c = _0x5038ab >>> 24, _0x427e49 = _0x5038ab >>> 16 & 255, _0x12afcb = 65535 & _0x5038ab, !(_0x2a0892 + _0x40780c <= _0x2d5050);) {
                  if (0 === _0x302781) {
                    break _0x517c69;
                  }
                  _0x302781--;
                  _0x4ff5fb += _0x5b7d7a[_0x4a257b++] << _0x2d5050;
                  _0x2d5050 += 8;
                }
                _0x4ff5fb >>>= _0x2a0892;
                _0x2d5050 -= _0x2a0892;
                _0x418ca2.back += _0x2a0892;
              }
              if (_0x4ff5fb >>>= _0x40780c, _0x2d5050 -= _0x40780c, _0x418ca2.back += _0x40780c, 64 & _0x427e49) {
                _0x4c6d68.msg = "invalid distance code";
                _0x418ca2.mode = _0x86764a;
                break;
              }
              _0x418ca2.offset = _0x12afcb;
              _0x418ca2.extra = 15 & _0x427e49;
              _0x418ca2.mode = 24;
            case 24:
              if (_0x418ca2.extra) {
                for (_0x1774d0 = _0x418ca2.extra; _0x2d5050 < _0x1774d0;) {
                  if (0 === _0x302781) {
                    break _0x517c69;
                  }
                  _0x302781--;
                  _0x4ff5fb += _0x5b7d7a[_0x4a257b++] << _0x2d5050;
                  _0x2d5050 += 8;
                }
                _0x418ca2.offset += _0x4ff5fb & (1 << _0x418ca2.extra) - 1;
                _0x4ff5fb >>>= _0x418ca2.extra;
                _0x2d5050 -= _0x418ca2.extra;
                _0x418ca2.back += _0x418ca2.extra;
              }
              if (_0x418ca2.offset > _0x418ca2.dmax) {
                _0x4c6d68.msg = "invalid distance too far back";
                _0x418ca2.mode = _0x86764a;
                break;
              }
              _0x418ca2.mode = 25;
            case 25:
              if (0 === _0xd475b7) {
                break _0x517c69;
              }
              if (_0x46e455 = _0x577fa9 - _0xd475b7, _0x418ca2.offset > _0x46e455) {
                if (_0x46e455 = _0x418ca2.offset - _0x46e455, _0x46e455 > _0x418ca2.whave && _0x418ca2.sane) {
                  _0x4c6d68.msg = "invalid distance too far back";
                  _0x418ca2.mode = _0x86764a;
                  break;
                }
                _0x46e455 > _0x418ca2.wnext ? (_0x46e455 -= _0x418ca2.wnext, _0x3fdebf = _0x418ca2.wsize - _0x46e455) : _0x3fdebf = _0x418ca2.wnext - _0x46e455;
                _0x46e455 > _0x418ca2.length && (_0x46e455 = _0x418ca2.length);
                _0x1b7718 = _0x418ca2.window;
              } else {
                _0x1b7718 = _0x484b3c;
                _0x3fdebf = _0x433509 - _0x418ca2.offset;
                _0x46e455 = _0x418ca2.length;
              }
              _0x46e455 > _0xd475b7 && (_0x46e455 = _0xd475b7);
              _0xd475b7 -= _0x46e455;
              _0x418ca2.length -= _0x46e455;
              do {
                _0x484b3c[_0x433509++] = _0x1b7718[_0x3fdebf++];
              } while (--_0x46e455);
              0 === _0x418ca2.length && (_0x418ca2.mode = 21);
              break;
            case 26:
              if (0 === _0xd475b7) {
                break _0x517c69;
              }
              _0x484b3c[_0x433509++] = _0x418ca2.length;
              _0xd475b7--;
              _0x418ca2.mode = 21;
              break;
            case 27:
              if (_0x418ca2.wrap) {
                for (; _0x2d5050 < 32;) {
                  if (0 === _0x302781) {
                    break _0x517c69;
                  }
                  _0x302781--;
                  _0x4ff5fb |= _0x5b7d7a[_0x4a257b++] << _0x2d5050;
                  _0x2d5050 += 8;
                }
                if (_0x577fa9 -= _0xd475b7, _0x4c6d68.total_out += _0x577fa9, _0x418ca2.total += _0x577fa9, _0x577fa9 && (_0x4c6d68.adler = _0x418ca2.check = _0x418ca2.flags ? _0x1b6282(_0x418ca2.check, _0x484b3c, _0x577fa9, _0x433509 - _0x577fa9) : _0x319380(_0x418ca2.check, _0x484b3c, _0x577fa9, _0x433509 - _0x577fa9)), _0x577fa9 = _0xd475b7, (_0x418ca2.flags ? _0x4ff5fb : _0x3a9646(_0x4ff5fb)) !== _0x418ca2.check) {
                  _0x4c6d68.msg = "incorrect data check";
                  _0x418ca2.mode = _0x86764a;
                  break;
                }
                _0x4ff5fb = 0;
                _0x2d5050 = 0;
              }
              _0x418ca2.mode = 28;
            case 28:
              if (_0x418ca2.wrap && _0x418ca2.flags) {
                for (; _0x2d5050 < 32;) {
                  if (0 === _0x302781) {
                    break _0x517c69;
                  }
                  _0x302781--;
                  _0x4ff5fb += _0x5b7d7a[_0x4a257b++] << _0x2d5050;
                  _0x2d5050 += 8;
                }
                if (_0x4ff5fb !== (4294967295 & _0x418ca2.total)) {
                  _0x4c6d68.msg = "incorrect length check";
                  _0x418ca2.mode = _0x86764a;
                  break;
                }
                _0x4ff5fb = 0;
                _0x2d5050 = 0;
              }
              _0x418ca2.mode = 29;
            case 29:
              _0x54d2b7 = _0x5b6b67;
              break _0x517c69;
            case _0x86764a:
              _0x54d2b7 = _0x1be280;
              break _0x517c69;
            case 31:
              return _0x22c42f;
            case 32:
            default:
              return _0x4f383b;
          }
        }
        _0x4c6d68.next_out = _0x433509;
        _0x4c6d68.avail_out = _0xd475b7;
        _0x4c6d68.next_in = _0x4a257b;
        _0x4c6d68.avail_in = _0x302781;
        _0x418ca2.hold = _0x4ff5fb;
        _0x418ca2.bits = _0x2d5050;
        (_0x418ca2.wsize || _0x577fa9 !== _0x4c6d68.avail_out && _0x418ca2.mode < _0x86764a && (_0x418ca2.mode < 27 || _0x19d4e9 !== _0x54052e)) && _0x1e3f32(_0x4c6d68, _0x4c6d68.output, _0x4c6d68.next_out, _0x577fa9 - _0x4c6d68.avail_out);
        _0x5f240b -= _0x4c6d68.avail_in;
        _0x577fa9 -= _0x4c6d68.avail_out;
        _0x4c6d68.total_in += _0x5f240b;
        _0x4c6d68.total_out += _0x577fa9;
        _0x418ca2.total += _0x577fa9;
        _0x418ca2.wrap && _0x577fa9 && (_0x4c6d68.adler = _0x418ca2.check = _0x418ca2.flags ? _0x1b6282(_0x418ca2.check, _0x484b3c, _0x577fa9, _0x4c6d68.next_out - _0x577fa9) : _0x319380(_0x418ca2.check, _0x484b3c, _0x577fa9, _0x4c6d68.next_out - _0x577fa9));
        _0x4c6d68.data_type = _0x418ca2.bits + (_0x418ca2.last ? 64 : 0) + (_0x418ca2.mode === _0x34394 ? 128 : 0) + (20 === _0x418ca2.mode || 15 === _0x418ca2.mode ? 256 : 0);
        (0 === _0x5f240b && 0 === _0x577fa9 || _0x19d4e9 === _0x54052e) && _0x54d2b7 === _0x24d2bc && (_0x54d2b7 = _0x41b8c3);
        return _0x54d2b7;
      },
      inflateEnd: _0x287f60 => {
        if (!_0x287f60 || !_0x287f60.state) {
          return _0x4f383b;
        }
        let _0x435669 = _0x287f60.state;
        _0x435669.window && (_0x435669.window = null);
        _0x287f60.state = null;
        return _0x24d2bc;
      },
      inflateGetHeader: (_0xc29c36, _0x1ddafd) => {
        if (!_0xc29c36 || !_0xc29c36.state) {
          return _0x4f383b;
        }
        const _0x3b5ed5 = _0xc29c36.state;
        return 0 == (2 & _0x3b5ed5.wrap) ? _0x4f383b : (_0x3b5ed5.head = _0x1ddafd, _0x1ddafd.done = !1, _0x24d2bc);
      },
      inflateSetDictionary: (_0x3dbbc4, _0x3fafa3) => {
        const _0x5c5e54 = _0x3fafa3.length;
        let _0x2896c1, _0x59961e, _0x507295;
        return _0x3dbbc4 && _0x3dbbc4.state ? (_0x2896c1 = _0x3dbbc4.state, 0 !== _0x2896c1.wrap && 11 !== _0x2896c1.mode ? _0x4f383b : 11 === _0x2896c1.mode && (_0x59961e = 1, _0x59961e = _0x319380(_0x59961e, _0x3fafa3, _0x5c5e54, 0), _0x59961e !== _0x2896c1.check) ? _0x1be280 : (_0x507295 = _0x1e3f32(_0x3dbbc4, _0x3fafa3, _0x5c5e54, _0x5c5e54), _0x507295 ? (_0x2896c1.mode = 31, _0x22c42f) : (_0x2896c1.havedict = 1, _0x24d2bc))) : _0x4f383b;
      },
      inflateInfo: "pako inflate (from Nodeca project)"
    },
    _0xc7384d = function () {
      this.text = 0;
      this.time = 0;
      this.xflags = 0;
      this.os = 0;
      this.extra = null;
      this.extra_len = 0;
      this.name = "";
      this.comment = "";
      this.hcrc = 0;
      this.done = !1;
    };
  const _0x359575 = Object.prototype.toString,
    {
      Z_NO_FLUSH: _0x11dae2,
      Z_FINISH: _0x11d3dd,
      Z_OK: _0x5c09c3,
      Z_STREAM_END: _0x1cf120,
      Z_NEED_DICT: _0x5868c0,
      Z_STREAM_ERROR: _0x43141a,
      Z_DATA_ERROR: _0x1a9d38,
      Z_MEM_ERROR: _0x33f79e
    } = _0x3d81e7;
  function _0x4b272d(_0x275562) {
    const _0x93a8eb = {
      chunkSize: 65536,
      windowBits: 15,
      to: ""
    };
    this.options = _0x4a5be8(_0x93a8eb, _0x275562 || {});
    const _0x2317fd = this.options;
    _0x2317fd.raw && _0x2317fd.windowBits >= 0 && _0x2317fd.windowBits < 16 && (_0x2317fd.windowBits = -_0x2317fd.windowBits, 0 === _0x2317fd.windowBits && (_0x2317fd.windowBits = -15));
    !(_0x2317fd.windowBits >= 0 && _0x2317fd.windowBits < 16) || _0x275562 && _0x275562.windowBits || (_0x2317fd.windowBits += 32);
    _0x2317fd.windowBits > 15 && _0x2317fd.windowBits < 48 && 0 == (15 & _0x2317fd.windowBits) && (_0x2317fd.windowBits |= 15);
    this.err = 0;
    this.msg = "";
    this.ended = !1;
    this.chunks = [];
    this.strm = new _0xa65915();
    this.strm.avail_out = 0;
    let _0x59efb0 = _0x47446e.inflateInit2(this.strm, _0x2317fd.windowBits);
    if (_0x59efb0 !== _0x5c09c3) {
      throw new Error(_0x3e7da8[_0x59efb0]);
    }
    if (this.header = new _0xc7384d(), _0x47446e.inflateGetHeader(this.strm, this.header), _0x2317fd.dictionary && ("string" == typeof _0x2317fd.dictionary ? _0x2317fd.dictionary = _0x1497b6(_0x2317fd.dictionary) : "[object ArrayBuffer]" === _0x359575.call(_0x2317fd.dictionary) && (_0x2317fd.dictionary = new Uint8Array(_0x2317fd.dictionary)), _0x2317fd.raw && (_0x59efb0 = _0x47446e.inflateSetDictionary(this.strm, _0x2317fd.dictionary), _0x59efb0 !== _0x5c09c3))) {
      throw new Error(_0x3e7da8[_0x59efb0]);
    }
  }
  function _0x23191d(_0x538628, _0x3f3094) {
    const _0xcc1771 = new _0x4b272d(_0x3f3094);
    if (_0xcc1771.push(_0x538628), _0xcc1771.err) {
      throw _0xcc1771.msg || _0x3e7da8[_0xcc1771.err];
    }
    return _0xcc1771.result;
  }
  _0x4b272d.prototype.push = function (_0x3103d5, _0x3984ed) {
    const _0x3425e8 = this.strm,
      _0x15286c = this.options.chunkSize,
      _0x2206fd = this.options.dictionary;
    let _0x5a6532, _0x4b1e91, _0x35b3ff;
    if (this.ended) {
      return !1;
    }
    for (_0x4b1e91 = _0x3984ed === ~~_0x3984ed ? _0x3984ed : !0 === _0x3984ed ? _0x11d3dd : _0x11dae2, "[object ArrayBuffer]" === _0x359575.call(_0x3103d5) ? _0x3425e8.input = new Uint8Array(_0x3103d5) : _0x3425e8.input = _0x3103d5, _0x3425e8.next_in = 0, _0x3425e8.avail_in = _0x3425e8.input.length;;) {
      for (0 === _0x3425e8.avail_out && (_0x3425e8.output = new Uint8Array(_0x15286c), _0x3425e8.next_out = 0, _0x3425e8.avail_out = _0x15286c), _0x5a6532 = _0x47446e.inflate(_0x3425e8, _0x4b1e91), _0x5a6532 === _0x5868c0 && _0x2206fd && (_0x5a6532 = _0x47446e.inflateSetDictionary(_0x3425e8, _0x2206fd), _0x5a6532 === _0x5c09c3 ? _0x5a6532 = _0x47446e.inflate(_0x3425e8, _0x4b1e91) : _0x5a6532 === _0x1a9d38 && (_0x5a6532 = _0x5868c0)); _0x3425e8.avail_in > 0 && _0x5a6532 === _0x1cf120 && _0x3425e8.state.wrap > 0 && 0 !== _0x3103d5[_0x3425e8.next_in];) {
        _0x47446e.inflateReset(_0x3425e8);
        _0x5a6532 = _0x47446e.inflate(_0x3425e8, _0x4b1e91);
      }
      switch (_0x5a6532) {
        case _0x43141a:
        case _0x1a9d38:
        case _0x5868c0:
        case _0x33f79e:
          this.onEnd(_0x5a6532);
          this.ended = !0;
          return !1;
      }
      if (_0x35b3ff = _0x3425e8.avail_out, _0x3425e8.next_out && (0 === _0x3425e8.avail_out || _0x5a6532 === _0x1cf120)) {
        if ("string" === this.options.to) {
          let _0x40f211 = _0x3ce672(_0x3425e8.output, _0x3425e8.next_out),
            _0x343742 = _0x3425e8.next_out - _0x40f211,
            _0x39e292 = _0x44b2c8(_0x3425e8.output, _0x40f211);
          _0x3425e8.next_out = _0x343742;
          _0x3425e8.avail_out = _0x15286c - _0x343742;
          _0x343742 && _0x3425e8.output.set(_0x3425e8.output.subarray(_0x40f211, _0x40f211 + _0x343742), 0);
          this.onData(_0x39e292);
        } else {
          this.onData(_0x3425e8.output.length === _0x3425e8.next_out ? _0x3425e8.output : _0x3425e8.output.subarray(0, _0x3425e8.next_out));
        }
      }
      if (_0x5a6532 !== _0x5c09c3 || 0 !== _0x35b3ff) {
        if (_0x5a6532 === _0x1cf120) {
          _0x5a6532 = _0x47446e.inflateEnd(this.strm);
          this.onEnd(_0x5a6532);
          this.ended = !0;
          return !0;
        }
        if (0 === _0x3425e8.avail_in) {
          break;
        }
      }
    }
    return !0;
  };
  _0x4b272d.prototype.onData = function (_0x495bbf) {
    this.chunks.push(_0x495bbf);
  };
  _0x4b272d.prototype.onEnd = function (_0x8763e3) {
    _0x8763e3 === _0x5c09c3 && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = _0x1a9734(this.chunks));
    this.chunks = [];
    this.err = _0x8763e3;
    this.msg = this.strm.msg;
  };
  var _0x2e12c1 = {
    Inflate: _0x4b272d,
    inflate: _0x23191d,
    inflateRaw: function (_0x17d422, _0x3e4e9c) {
      (_0x3e4e9c = _0x3e4e9c || {}).raw = !0;
      return _0x23191d(_0x17d422, _0x3e4e9c);
    },
    ungzip: _0x23191d,
    constants: _0x3d81e7
  };
  const {
      Deflate: _0x341eca,
      deflate: _0x22c85b,
      deflateRaw: _0xd35dff,
      gzip: _0x3fcfb4
    } = _0x134fa6,
    {
      Inflate: _0x552f8e,
      inflate: _0x388094,
      inflateRaw: _0x4407a1,
      ungzip: _0x43c73e
    } = _0x2e12c1;
  var _0x46d063 = _0x341eca,
    _0x21ed56 = _0x22c85b,
    _0x2d84f8 = _0xd35dff,
    _0x54fc27 = _0x3fcfb4,
    _0x22578e = _0x552f8e,
    _0x3cdf46 = _0x388094,
    _0x47a37a = _0x4407a1,
    _0xb5a78f = _0x43c73e,
    _0x5ab203 = _0x3d81e7,
    _0x254bfd = {
      Deflate: _0x46d063,
      deflate: _0x21ed56,
      deflateRaw: _0x2d84f8,
      gzip: _0x54fc27,
      Inflate: _0x22578e,
      inflate: _0x3cdf46,
      inflateRaw: _0x47a37a,
      ungzip: _0xb5a78f,
      constants: _0x5ab203
    };
  const _0x588822 = {
    value: !0
  };
  _0x5df6fc.Deflate = _0x46d063;
  _0x5df6fc.Inflate = _0x22578e;
  _0x5df6fc.constants = _0x5ab203;
  _0x5df6fc.default = _0x254bfd;
  _0x5df6fc.deflate = _0x21ed56;
  _0x5df6fc.deflateRaw = _0x2d84f8;
  _0x5df6fc.gzip = _0x54fc27;
  _0x5df6fc.inflate = _0x3cdf46;
  _0x5df6fc.inflateRaw = _0x47a37a;
  _0x5df6fc.ungzip = _0xb5a78f;
  Object.defineProperty(_0x5df6fc, "__esModule", _0x588822);
});