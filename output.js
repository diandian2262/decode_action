//Sun Apr 06 2025 13:13:24 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(() => {
  'use strict';

  var _0x25925f = {
      394: (_0x463e18, _0x461ec7, _0x3b2404) => {
        var _0x12feb4 = _0x3b2404(672),
          _0x354f8f = _0x3b2404(752),
          _0x2e3150 = _0x3b2404(411);
        new class {
          constructor() {
            this.loading = new _0x12feb4.KP();
            this.pageManager = new _0x354f8f.t(this.loading);
          }
          async initialize() {
            try {
              this.loading.show("正在加载...");
              await this.pageManager.updateNoticeAndQrCode();
              (await _0x2e3150.A.checkLoginStatus(!1)) ? (await this.pageManager.showUserInfo(_0x2e3150.A.currentUser), await this.pageManager.updateAccountList()) : await this.pageManager.redirectToLogin();
            } catch (_0x1f73ac) {
              alert("插件初初始化失败，请联系客服或稍候再试！");
            } finally {
              this.loading.hide();
            }
          }
          async handleLogin(_0x1e5de5, _0x26e940) {
            try {
              this.loading.show("正在登录...");
              const _0x3d1f5e = await _0x2e3150.A.login(_0x1e5de5, _0x26e940);
              1000 === _0x3d1f5e.code ? (await this.pageManager.showUserInfo(_0x2e3150.A.currentUser), await this.pageManager.updateAccountList()) : alert(_0x3d1f5e.message || "登录失败，请稍后重试");
            } catch (_0x515b9a) {
              alert("登录失败，请稍后重试");
            } finally {
              this.loading.hide();
            }
          }
          async handleLogout() {
            try {
              await _0x2e3150.A.logout();
              await this.pageManager.redirectToLogin();
            } catch (_0x519c28) {}
          }
          async handleSwitchAccount(_0xfe560d) {
            await this.pageManager.handleSwitchAccount(_0xfe560d);
          }
        }();
      },
      411: (_0x37ebe7, _0x4c6377, _0x440cf1) => {
        _0x440cf1.d(_0x4c6377, {
          A: () => _0x356b4b
        });
        var _0x971000 = _0x440cf1(672),
          _0x4b0856 = _0x440cf1(526);
        const _0x356b4b = new class {
          constructor() {
            this.currentUser = null;
            this.userInfoTimer = null;
            this.currentToken = null;
          }
          isPlanExpired(_0x5508ff) {
            return !_0x5508ff.planEndTime || new Date(_0x5508ff.planEndTime) < new Date();
          }
          async saveCredentials(_0x41143a, _0x162415, _0xab3a2a = null) {
            const _0x5a534c = {
              savedUsername: _0x41143a,
              savedPassword: _0x162415,
              token: _0xab3a2a
            };
            _0xab3a2a && (this.currentToken = _0xab3a2a);
            await _0x971000.hC.set(_0x5a534c);
          }
          async getToken() {
            if (this.currentToken) {
              return this.currentToken;
            }
            const _0x2db350 = await _0x971000.hC.get(["token"]);
            this.currentToken = _0x2db350.token;
            return _0x2db350.token;
          }
          async checkLoginStatus(_0x3bee5c = !0) {
            try {
              return await this.updateUserInfo(_0x3bee5c);
            } catch (_0x2d31a6) {
              return !1;
            }
          }
          async updateUserInfo(_0x500694 = !0) {
            try {
              const _0x516087 = await _0x4b0856.A.getUserInfo();
              return !(1000 !== _0x516087.code || !_0x516087.data || (this.currentUser = _0x516087.data, this.isPlanExpired(_0x516087.data) ? (alert("您的套餐已过期，请续费后使用"), await this.logout(), 1) : (_0x516087.data.cookie && _0x500694 && (await _0x971000.UM.importCookies(_0x516087.data.cookie), await _0x971000.UM.reloadPlugin(), await _0x971000.UM.redirectIndex()), 0)));
            } catch (_0x16aa80) {
              return !1;
            }
          }
          startUserInfoTimer() {
            this.stopUserInfoTimer();
            this.userInfoTimer = setInterval(async () => {
              await this.updateUserInfo(!1);
            }, 30000);
          }
          stopUserInfoTimer() {
            this.userInfoTimer && (clearInterval(this.userInfoTimer), this.userInfoTimer = null);
          }
          async login(_0x30c995, _0xf7229) {
            try {
              const _0x5d9ab1 = await _0x4b0856.A.login(_0x30c995, _0xf7229);
              if (1000 === _0x5d9ab1.code) {
                const _0x4175f6 = _0x5d9ab1.data?.["token"];
                if (_0x4175f6 && (this.currentToken = _0x4175f6, await this.saveCredentials(_0x30c995, _0xf7229, _0x4175f6)), !(await this.updateUserInfo())) {
                  throw new Error("获取用户信息失败");
                }
                this.startUserInfoTimer();
              }
              return _0x5d9ab1;
            } catch (_0x548225) {
              throw _0x548225;
            }
          }
          async getSavedCredentials() {
            try {
              const _0x3e4a07 = await _0x971000.hC.get(["savedUsername", "savedPassword"]);
              return {
                savedUsername: _0x3e4a07.savedUsername || "",
                savedPassword: _0x3e4a07.savedPassword || ""
              };
            } catch (_0x52d05b) {
              return {
                savedUsername: "",
                savedPassword: ""
              };
            }
          }
          async logout() {
            this.stopUserInfoTimer();
            this.currentUser = null;
            this.currentToken = null;
            await _0x971000.hC.remove(["token"]);
            await _0x971000.UM.clearCookies();
            await _0x971000.UM.reloadPlugin();
            await _0x971000.UM.redirectIndex();
          }
        }();
      },
      526: (_0x4e2400, _0x40be00, _0x203483) => {
        _0x203483.d(_0x40be00, {
          A: () => _0x71afa8
        });
        var _0x1fbb28 = _0x203483(956);
        const _0x71afa8 = new class {
          async login(_0x2dfe0d, _0x5123ef) {
            return _0x1fbb28.A.post("/app/sider/user/login", {
              username: _0x2dfe0d,
              password: _0x5123ef
            });
          }
          async getNoticeAndQrCode() {
            return _0x1fbb28.A.get("/app/sider/user/getNoticeAndQrCode");
          }
          async getAccounts() {
            return _0x1fbb28.A.get("/app/sider/user/getAccount");
          }
          async selectAccount(_0x16f47d) {
            return _0x1fbb28.A.post("/app/sider/user/selectAccount", {
              accountId: _0x16f47d
            });
          }
          async getUserInfo() {
            return _0x1fbb28.A.get("/app/sider/user/userinfo");
          }
        }();
      },
      672: (_0x4ade52, _0x3df872, _0x233fc8) => {
        _0x233fc8.d(_0x3df872, {
          KP: () => _0x1fc2d9,
          UM: () => _0xd32945,
          Yq: () => _0x4754d2,
          e0: () => _0x23ef8d,
          hC: () => _0x4bbefa
        });
        class _0x1fc2d9 {
          constructor() {
            this.overlay = null;
          }
          show(_0xa9d438 = "加载中...") {
            this.overlay || (this.overlay = document.createElement("div"), this.overlay.className = "loading-overlay", this.overlay.innerHTML = "\n        <div class=\"loading-spinner\"></div>\n        <div class=\"loading-text\">" + _0xa9d438 + "</div>\n      ", document.body.appendChild(this.overlay), this.overlay.offsetHeight);
            this.overlay.classList.add("show");
            this.setText(_0xa9d438);
          }
          hide() {
            this.overlay && (this.overlay.classList.remove("show"), setTimeout(() => {
              this.overlay && (this.overlay.remove(), this.overlay = null);
            }, 300));
          }
          setText(_0x39ef62) {
            this.overlay && (this.overlay.querySelector(".loading-text").textContent = _0x39ef62);
          }
        }
        class _0x4bbefa {
          static async get(_0x1f9a45) {
            return new Promise(_0x1a0c0a => {
              chrome.storage.local.get(_0x1f9a45, _0x1a0c0a);
            });
          }
          static async set(_0x3f2ca3) {
            return new Promise(_0x3d7b60 => {
              chrome.storage.local.set(_0x3f2ca3, _0x3d7b60);
            });
          }
          static async remove(_0x9b89d7) {
            return new Promise(_0x51d74b => {
              chrome.storage.local.remove(_0x9b89d7, _0x51d74b);
            });
          }
        }
        function _0x4754d2(_0xa7b4f6) {
          const _0x229e94 = new Date(_0xa7b4f6);
          return _0x229e94.getFullYear() + "-" + String(_0x229e94.getMonth() + 1).padStart(2, "0") + "-" + String(_0x229e94.getDate()).padStart(2, "0");
        }
        class _0x23ef8d {
          static show(_0x255fac) {
            const _0x16dc8c = document.getElementById(_0x255fac);
            _0x16dc8c && (_0x16dc8c.style.display = "block");
          }
          static hide(_0x118fd8) {
            const _0x675b05 = document.getElementById(_0x118fd8);
            _0x675b05 && (_0x675b05.style.display = "none");
          }
          static setText(_0xa8edc3, _0x34901c) {
            const _0x340dc4 = document.querySelector(_0xa8edc3);
            _0x340dc4 && (_0x340dc4.textContent = _0x34901c);
          }
        }
        class _0xd32945 {
          static async importCookies(_0x42a050) {
            try {
              const _0x595840 = JSON.parse(_0x42a050);
              if (!_0x595840.cookies || !Array.isArray(_0x595840.cookies)) {
                throw new Error("无效的cookie格式");
              }
              for (const _0x406f9d of _0x595840.cookies) await chrome.cookies.set({
                url: _0x595840.url,
                name: _0x406f9d.name,
                value: _0x406f9d.value,
                domain: _0x406f9d.domain,
                path: _0x406f9d.path,
                secure: _0x406f9d.secure,
                httpOnly: _0x406f9d.httpOnly,
                sameSite: _0x406f9d.sameSite,
                expirationDate: _0x406f9d.expirationDate,
                storeId: _0x406f9d.storeId
              });
              return !0;
            } catch (_0x2cc98b) {
              alert("导入cookie失败");
              return !1;
            }
          }
          static async reloadPlugin() {
            try {
              const _0x55b08a = (await chrome.management.getAll()).filter(_0x1ba1a5 => _0x1ba1a5.name.indexOf("Sider: ChatGPT 侧边栏") > -1 && "extension" === _0x1ba1a5.type);
              for (const _0x556071 of _0x55b08a) {
                await chrome.management.setEnabled(_0x556071.id, !1);
                await new Promise(_0x185033 => setTimeout(_0x185033, 500));
                await chrome.management.setEnabled(_0x556071.id, !0);
              }
            } catch (_0x32edb0) {}
          }
          static async clearCookies(_0x571f0b = ".sider.ai") {
            try {
              const _0x4d575d = await chrome.cookies.getAll({
                domain: _0x571f0b
              });
              for (const _0x2821e0 of _0x4d575d) await chrome.cookies.remove({
                url: "https://" + _0x2821e0.domain + _0x2821e0.path,
                name: _0x2821e0.name
              });
              return !0;
            } catch (_0xd18af5) {
              return !1;
            }
          }
          static async redirectIndex(_0x2ed9c5 = "sider.ai") {
            const _0x22b909 = await chrome.tabs.query({
              url: "https://" + _0x2ed9c5 + "/*"
            });
            if (_0x22b909.length > 0) {
              for (const _0x164e3c of _0x22b909) await chrome.tabs.update(_0x164e3c.id, {
                url: "https://sider.ai"
              });
            } else {
              await chrome.tabs.create({
                url: "https://sider.ai",
                active: !0
              });
            }
          }
          static async getCookies(_0x32a124 = "sider.ai") {
            try {
              return {
                url: "https://" + _0x32a124,
                cookies: (await chrome.cookies.getAll({
                  domain: _0x32a124
                })).map(_0x29ed88 => ({
                  name: _0x29ed88.name,
                  value: _0x29ed88.value,
                  domain: _0x29ed88.domain,
                  path: _0x29ed88.path,
                  secure: _0x29ed88.secure,
                  httpOnly: _0x29ed88.httpOnly,
                  sameSite: _0x29ed88.sameSite,
                  expirationDate: _0x29ed88.expirationDate,
                  storeId: _0x29ed88.storeId
                }))
              };
            } catch (_0x5afdba) {
              return null;
            }
          }
          static async getCookieString(_0x197f28 = "sider.ai") {
            try {
              const _0x130b3f = await this.getCookies(_0x197f28);
              return _0x130b3f ? JSON.stringify(_0x130b3f) : "";
            } catch (_0x280e84) {
              return "";
            }
          }
        }
      },
      752: (_0x1b11eb, _0x151c02, _0xd8c9b1) => {
        _0xd8c9b1.d(_0x151c02, {
          t: () => _0x1dddbe
        });
        var _0x3ea076 = _0xd8c9b1(672),
          _0x363de9 = _0xd8c9b1(526),
          _0xa7c3d7 = _0xd8c9b1(411);
        function _0x1f295d(..._0x311d67) {
          chrome.runtime.sendMessage({
            type: "DEBUG",
            message: _0x311d67
          });
        }
        class _0x1dddbe {
          constructor(_0x1de267) {
            this.loading = _0x1de267;
          }
          async initialize() {
            _0x1f295d("开始初始化页面");
            try {
              this.loading.show("正在加载...");
              _0x1f295d("加载系统公告和二维码");
              await this.updateNoticeAndQrCode();
              _0x1f295d("检查登录状态");
              const _0x46fde0 = await _0xa7c3d7.A.checkLoginStatus();
              _0x1f295d("登录状态:", _0x46fde0);
              _0x46fde0 ? (_0x1f295d("用户已登录，加载用户信息"), await this.showUserInfo(_0xa7c3d7.A.currentUser), await this.updateAccountList()) : (_0x1f295d("用户未登录，跳转到登录页面"), await this.redirectToLogin());
            } catch (_0x590403) {
              _0x1f295d("初始化失败:", _0x590403);
            } finally {
              this.loading.hide();
            }
          }
          async updateNoticeAndQrCode() {
            try {
              const _0xefeac7 = await _0x363de9.A.getNoticeAndQrCode();
              if (1000 === _0xefeac7.code && _0xefeac7.data && (_0xefeac7.data.notice && _0x3ea076.e0.setText(".notice p", _0xefeac7.data.notice.content), _0xefeac7.data.serviceQrCode)) {
                const _0x2e086b = document.querySelector(".qr-code img");
                _0x2e086b && (_0x2e086b.src = _0xefeac7.data.serviceQrCode, _0x2e086b.onerror = () => _0x2e086b.src = "images/qr-code.png");
              }
            } catch (_0x33896c) {
              alert("获取系统公告和二维码失败:", _0x33896c);
            }
          }
          async showUserInfo(_0xb635e4) {
            _0x3ea076.e0.hide("loginForm");
            _0x3ea076.e0.show("userInfo");
            _0x3ea076.e0.show("footer-logout");
            _0x3ea076.e0.setText(".username", _0xb635e4.username);
            const _0x468a92 = new Date(_0xb635e4.planEndTime),
              _0x3e1b49 = new Date(),
              _0x15cded = Math.ceil((_0x468a92 - _0x3e1b49) / 86400000);
            _0x3ea076.e0.setText(".days-left", _0x15cded + "天");
            _0x3ea076.e0.setText(".end-time", (0, _0x3ea076.Yq)(_0xb635e4.planEndTime));
          }
          async updateAccountList() {
            try {
              this.loading.show("正在获取账号列表...");
              const _0x3772ad = await _0x363de9.A.getAccounts();
              if (_0x3772ad.needLogin) {
                await this.updateNoticeAndQrCode();
                return void (await this.redirectToLogin());
              }
              1000 === _0x3772ad.code && _0x3772ad.data && this.renderAccountList(_0x3772ad.data);
            } catch (_0x1d6f4a) {
              alert("获取账号列表失败:", _0x1d6f4a);
            } finally {
              this.loading.hide();
            }
          }
          renderAccountList(_0x5e4d76) {
            const _0x4dd9ec = document.querySelector(".account-items");
            if (!_0x4dd9ec || !_0x5e4d76?.["length"]) {
              return;
            }
            const _0x45b6e3 = _0xa7c3d7.A.currentUser?.["activeAccount"];
            _0x4dd9ec.innerHTML = _0x5e4d76.map((_0x1026b7, _0x9016ef) => {
              _0x1026b7.onlineCount;
              _0x1026b7.onlineLimit;
              const _0x291cca = _0x1026b7.enabled,
                _0x42c158 = _0x1026b7.id === _0x45b6e3;
              return "\n        <div class=\"account-item " + (_0x291cca ? "" : "disabled") + " " + (_0x42c158 ? "active" : "") + "\" \n             data-account-id=\"" + _0x1026b7.id + "\"\n             style=\"background-color: rgba(99, 102, 241, 0.1)\">\n          <span class=\"account-num\">" + (_0x9016ef + 1) + "</span>\n          <span class=\"account-name\">" + (("" + _0x1026b7.id).substring(0, 18) + "***") + "</span>\n          \n          " + (_0x42c158 ? "<span class=\"selected-mark\">✓</span>" : "") + "\n        </div>\n      ";
            }).join("");
            _0x4dd9ec.addEventListener("click", _0x10fb7e => {
              const _0x4a97ab = _0x10fb7e.target.closest(".account-item").dataset.accountId,
                _0x3add13 = _0x5e4d76.find(_0x35457c => _0x35457c.id === _0x4a97ab);
              _0x3add13 && this.handleSwitchAccount(_0x3add13);
            });
          }
          async handleSwitchAccount(_0xc98656) {
            try {
              this.loading.show("正在切换账号...");
              const _0x321cf3 = await _0x363de9.A.selectAccount(_0xc98656.id);
              if (1000 === _0x321cf3.code) {
                if (!(await _0xa7c3d7.A.updateUserInfo())) {
                  throw new Error("获取用户信息失败");
                }
                this.updateSelectedAccount(_0xc98656.id);
                await this.showUserInfo(_0xa7c3d7.A.currentUser);
                await this.updateAccountList();
              } else {
                alert(_0x321cf3.message || "切换账号失败，请稍后重试");
              }
            } catch (_0x44b861) {
              alert("切换账号失败，请稍后重试");
            } finally {
              this.loading.hide();
            }
          }
          updateSelectedAccount(_0x1450a7) {
            _0xa7c3d7.A.currentUser && (_0xa7c3d7.A.currentUser.activeAccount = _0x1450a7);
          }
          async redirectToLogin() {
            _0x3ea076.e0.show("loginForm");
            _0x3ea076.e0.hide("userInfo");
            _0x3ea076.e0.hide("footer-logout");
            const _0x3d7b18 = await _0xa7c3d7.A.getSavedCredentials();
            _0x3d7b18.savedUsername && (document.getElementById("username").value = _0x3d7b18.savedUsername);
            _0x3d7b18.savedPassword && (document.getElementById("password").value = _0x3d7b18.savedPassword);
            await this.updateNoticeAndQrCode();
          }
        }
      },
      956: (_0x109276, _0x4622ba, _0x83b2e0) => {
        _0x83b2e0.d(_0x4622ba, {
          A: () => _0x1100a2
        });
        var _0x2c1ffa = _0x83b2e0(411);
        const _0x1100a2 = new class {
          constructor() {
            this.baseURL = "https://sider.spbst.cn";
          }
          async getHeaders() {
            const _0x309361 = await _0x2c1ffa.A.getToken(),
              _0x5f20b3 = {
                "Content-Type": "application/json",
                Authorization: _0x309361
              };
            _0x309361;
            return _0x5f20b3;
          }
          async handleResponse(_0x49bb15) {
            const _0x172b34 = await _0x49bb15.json();
            return 401 === _0x172b34.code || _0x172b34.needLogin ? (await StorageManager.remove(["token"]), {
              ..._0x172b34,
              needLogin: !0
            }) : _0x172b34;
          }
          async get(_0x18ba3c) {
            try {
              const _0x4bb4e4 = await this.getHeaders(),
                _0x3de90a = await fetch("" + this.baseURL + _0x18ba3c, {
                  method: "GET",
                  headers: _0x4bb4e4
                });
              return this.handleResponse(_0x3de90a);
            } catch (_0x52262e) {
              throw _0x52262e;
            }
          }
          async post(_0x54ed14, _0x15128c) {
            try {
              const _0x4f7fe8 = await this.getHeaders(),
                _0xf93e95 = await fetch("" + this.baseURL + _0x54ed14, {
                  method: "POST",
                  headers: _0x4f7fe8,
                  body: JSON.stringify(_0x15128c)
                });
              return this.handleResponse(_0xf93e95);
            } catch (_0x17239b) {
              throw _0x17239b;
            }
          }
        }();
      }
    },
    _0x580551 = {};
  function _0x507cd7(_0x2e6206) {
    var _0x527077 = _0x580551[_0x2e6206];
    if (void 0 !== _0x527077) {
      return _0x527077.exports;
    }
    _0x580551[_0x2e6206] = {
      exports: {}
    };
    var _0x1631f4 = _0x580551[_0x2e6206];
    _0x25925f[_0x2e6206](_0x1631f4, _0x1631f4.exports, _0x507cd7);
    return _0x1631f4.exports;
  }
  _0x507cd7.d = (_0x3d22f7, _0x287568) => {
    for (var _0xd2d788 in _0x287568) _0x507cd7.o(_0x287568, _0xd2d788) && !_0x507cd7.o(_0x3d22f7, _0xd2d788) && Object.defineProperty(_0x3d22f7, _0xd2d788, {
      enumerable: !0,
      get: _0x287568[_0xd2d788]
    });
  };
  _0x507cd7.o = (_0x38fac2, _0x3c21de) => Object.prototype.hasOwnProperty.call(_0x38fac2, _0x3c21de);
  _0x507cd7(394);
  chrome.runtime.onInstalled.addListener(_0x18d497 => {
    "install" === _0x18d497.reason || _0x18d497.reason;
  });
  chrome.action.onClicked.addListener(() => {});
  chrome.runtime.onConnect.addListener(_0x3c0adf => {
    "popup" === _0x3c0adf.name && _0x3c0adf.postMessage({
      type: "INITIALIZE"
    });
  });
  chrome.runtime.onMessage.addListener((_0x2b50eb, _0x5202c2, _0x437241) => !0);
  chrome.runtime.onMessage.addListener((_0x1212f8, _0xba78cf) => (_0x1212f8.type, !0));
})();