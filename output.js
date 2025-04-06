//Sun Apr 06 2025 13:27:53 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(() => {
  'use strict';

  var _0x12a49f = {
      364: (_0x38816e, _0x17ebbe, _0x344749) => {
        function _0x4024d5() {
          document.querySelectorAll("input").forEach(_0x4b9ba7 => {
            _0x4b9ba7.addEventListener("focus", () => {
              _0x4b9ba7.parentElement.style.transform = "translateX(5px)";
              _0x4b9ba7.parentElement.style.transition = "transform 0.3s ease";
            });
            _0x4b9ba7.addEventListener("blur", () => {
              _0x4b9ba7.parentElement.style.transform = "translateX(0)";
            });
          });
        }
        _0x344749.d(_0x17ebbe, {
          T: () => _0x4024d5
        });
      },
      394: (_0x1afab4, _0x2f823e, _0x3a46c7) => {
        _0x3a46c7.d(_0x2f823e, {
          A: () => _0x1e442c
        });
        var _0x347a87 = _0x3a46c7(672),
          _0x1816fb = _0x3a46c7(752),
          _0x56e8c9 = _0x3a46c7(411);
        const _0x1e442c = new class {
          constructor() {
            this.loading = new _0x347a87.KP();
            this.pageManager = new _0x1816fb.t(this.loading);
          }
          async initialize() {
            try {
              this.loading.show("正在加载...");
              await this.pageManager.updateNoticeAndQrCode();
              (await _0x56e8c9.A.checkLoginStatus(!1)) ? (await this.pageManager.showUserInfo(_0x56e8c9.A.currentUser), await this.pageManager.updateAccountList()) : await this.pageManager.redirectToLogin();
            } catch (_0x8b16cf) {
              alert("插件初初始化失败，请联系客服或稍候再试！");
            } finally {
              this.loading.hide();
            }
          }
          async handleLogin(_0x48cb2e, _0x544b7d) {
            try {
              this.loading.show("正在登录...");
              const _0x56c136 = await _0x56e8c9.A.login(_0x48cb2e, _0x544b7d);
              1000 === _0x56c136.code ? (await this.pageManager.showUserInfo(_0x56e8c9.A.currentUser), await this.pageManager.updateAccountList()) : alert(_0x56c136.message || "登录失败，请稍后重试");
            } catch (_0x582276) {
              alert("登录失败，请稍后重试");
            } finally {
              this.loading.hide();
            }
          }
          async handleLogout() {
            try {
              await _0x56e8c9.A.logout();
              await this.pageManager.redirectToLogin();
            } catch (_0x40352c) {}
          }
          async handleSwitchAccount(_0xc0ba55) {
            await this.pageManager.handleSwitchAccount(_0xc0ba55);
          }
        }();
      },
      411: (_0x2a71a3, _0x2103f4, _0x1e253c) => {
        _0x1e253c.d(_0x2103f4, {
          A: () => _0x29558c
        });
        var _0x148428 = _0x1e253c(672),
          _0x2d871c = _0x1e253c(526);
        const _0x29558c = new class {
          constructor() {
            this.currentUser = null;
            this.userInfoTimer = null;
            this.currentToken = null;
          }
          isPlanExpired(_0x4e8bd4) {
            return !_0x4e8bd4.planEndTime || new Date(_0x4e8bd4.planEndTime) < new Date();
          }
          async saveCredentials(_0x47e308, _0x528cae, _0x3b6ab1 = null) {
            const _0x4ba1a0 = {
              savedUsername: _0x47e308,
              savedPassword: _0x528cae,
              token: _0x3b6ab1
            };
            _0x3b6ab1 && (this.currentToken = _0x3b6ab1);
            await _0x148428.hC.set(_0x4ba1a0);
          }
          async getToken() {
            if (this.currentToken) {
              return this.currentToken;
            }
            const _0x533382 = await _0x148428.hC.get(["token"]);
            this.currentToken = _0x533382.token;
            return _0x533382.token;
          }
          async checkLoginStatus(_0x5c7fbc = !0) {
            try {
              return await this.updateUserInfo(_0x5c7fbc);
            } catch (_0x5c83ec) {
              return !1;
            }
          }
          async updateUserInfo(_0x5e6b74 = !0) {
            try {
              const _0x25078c = await _0x2d871c.A.getUserInfo();
              return !(1000 !== _0x25078c.code || !_0x25078c.data || (this.currentUser = _0x25078c.data, this.isPlanExpired(_0x25078c.data) ? (alert("您的套餐已过期，请续费后使用"), await this.logout(), 1) : (_0x25078c.data.cookie && _0x5e6b74 && (await _0x148428.UM.importCookies(_0x25078c.data.cookie), await _0x148428.UM.reloadPlugin(), await _0x148428.UM.redirectIndex()), 0)));
            } catch (_0x23391f) {
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
          async login(_0x43d129, _0x49a50d) {
            try {
              const _0x5318e6 = await _0x2d871c.A.login(_0x43d129, _0x49a50d);
              if (1000 === _0x5318e6.code) {
                const _0x52136a = _0x5318e6.data?.["token"];
                if (_0x52136a && (this.currentToken = _0x52136a, await this.saveCredentials(_0x43d129, _0x49a50d, _0x52136a)), !(await this.updateUserInfo())) {
                  throw new Error("获取用户信息失败");
                }
                this.startUserInfoTimer();
              }
              return _0x5318e6;
            } catch (_0x5c9e51) {
              throw _0x5c9e51;
            }
          }
          async getSavedCredentials() {
            try {
              const _0x4c60ee = await _0x148428.hC.get(["savedUsername", "savedPassword"]);
              return {
                savedUsername: _0x4c60ee.savedUsername || "",
                savedPassword: _0x4c60ee.savedPassword || ""
              };
            } catch (_0x275a35) {
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
            await _0x148428.hC.remove(["token"]);
            await _0x148428.UM.clearCookies();
            await _0x148428.UM.reloadPlugin();
            await _0x148428.UM.redirectIndex();
          }
        }();
      },
      526: (_0x499578, _0xc3d088, _0x5edbe6) => {
        _0x5edbe6.d(_0xc3d088, {
          A: () => _0x2f14c9
        });
        var _0xeb7cf3 = _0x5edbe6(956);
        const _0x2f14c9 = new class {
          async login(_0x34e405, _0x4bd60e) {
            return _0xeb7cf3.A.post("/app/sider/user/login", {
              username: _0x34e405,
              password: _0x4bd60e
            });
          }
          async getNoticeAndQrCode() {
            return _0xeb7cf3.A.get("/app/sider/user/getNoticeAndQrCode");
          }
          async getAccounts() {
            return _0xeb7cf3.A.get("/app/sider/user/getAccount");
          }
          async selectAccount(_0x5e110b) {
            return _0xeb7cf3.A.post("/app/sider/user/selectAccount", {
              accountId: _0x5e110b
            });
          }
          async getUserInfo() {
            return _0xeb7cf3.A.get("/app/sider/user/userinfo");
          }
        }();
      },
      672: (_0x3a1191, _0x58202d, _0x577544) => {
        _0x577544.d(_0x58202d, {
          KP: () => _0x235560,
          UM: () => _0x193bbd,
          Yq: () => _0x2c70a9,
          e0: () => _0x4cc253,
          hC: () => _0x52304b
        });
        class _0x235560 {
          constructor() {
            this.overlay = null;
          }
          show(_0x103dc1 = "加载中...") {
            this.overlay || (this.overlay = document.createElement("div"), this.overlay.className = "loading-overlay", this.overlay.innerHTML = "\n        <div class=\"loading-spinner\"></div>\n        <div class=\"loading-text\">" + _0x103dc1 + "</div>\n      ", document.body.appendChild(this.overlay), this.overlay.offsetHeight);
            this.overlay.classList.add("show");
            this.setText(_0x103dc1);
          }
          hide() {
            this.overlay && (this.overlay.classList.remove("show"), setTimeout(() => {
              this.overlay && (this.overlay.remove(), this.overlay = null);
            }, 300));
          }
          setText(_0x483472) {
            this.overlay && (this.overlay.querySelector(".loading-text").textContent = _0x483472);
          }
        }
        class _0x52304b {
          static async get(_0x45944a) {
            return new Promise(_0x3a1a5d => {
              chrome.storage.local.get(_0x45944a, _0x3a1a5d);
            });
          }
          static async set(_0x27380f) {
            return new Promise(_0x45c5bc => {
              chrome.storage.local.set(_0x27380f, _0x45c5bc);
            });
          }
          static async remove(_0x4c7265) {
            return new Promise(_0x52dae4 => {
              chrome.storage.local.remove(_0x4c7265, _0x52dae4);
            });
          }
        }
        function _0x2c70a9(_0x22a4d3) {
          const _0xf43a6b = new Date(_0x22a4d3);
          return _0xf43a6b.getFullYear() + "-" + String(_0xf43a6b.getMonth() + 1).padStart(2, "0") + "-" + String(_0xf43a6b.getDate()).padStart(2, "0");
        }
        class _0x4cc253 {
          static show(_0xab065a) {
            const _0x27a727 = document.getElementById(_0xab065a);
            _0x27a727 && (_0x27a727.style.display = "block");
          }
          static hide(_0x43bb15) {
            const _0x3e7a54 = document.getElementById(_0x43bb15);
            _0x3e7a54 && (_0x3e7a54.style.display = "none");
          }
          static setText(_0x4abd5f, _0x5ca70f) {
            const _0x3f2fe1 = document.querySelector(_0x4abd5f);
            _0x3f2fe1 && (_0x3f2fe1.textContent = _0x5ca70f);
          }
        }
        class _0x193bbd {
          static async importCookies(_0x214beb) {
            try {
              const _0x2b6123 = JSON.parse(_0x214beb);
              if (!_0x2b6123.cookies || !Array.isArray(_0x2b6123.cookies)) {
                throw new Error("无效的cookie格式");
              }
              for (const _0x55d8da of _0x2b6123.cookies) await chrome.cookies.set({
                url: _0x2b6123.url,
                name: _0x55d8da.name,
                value: _0x55d8da.value,
                domain: _0x55d8da.domain,
                path: _0x55d8da.path,
                secure: _0x55d8da.secure,
                httpOnly: _0x55d8da.httpOnly,
                sameSite: _0x55d8da.sameSite,
                expirationDate: _0x55d8da.expirationDate,
                storeId: _0x55d8da.storeId
              });
              return !0;
            } catch (_0x52412f) {
              alert("导入cookie失败");
              return !1;
            }
          }
          static async reloadPlugin() {
            try {
              const _0x3612f5 = (await chrome.management.getAll()).filter(_0x3d2cf1 => _0x3d2cf1.name.indexOf("Sider: ChatGPT 侧边栏") > -1 && "extension" === _0x3d2cf1.type);
              for (const _0x4ccf9b of _0x3612f5) {
                await chrome.management.setEnabled(_0x4ccf9b.id, !1);
                await new Promise(_0x41e5d0 => setTimeout(_0x41e5d0, 500));
                await chrome.management.setEnabled(_0x4ccf9b.id, !0);
              }
            } catch (_0x3c1c2a) {}
          }
          static async clearCookies(_0x534de9 = ".sider.ai") {
            try {
              const _0x5657d7 = await chrome.cookies.getAll({
                domain: _0x534de9
              });
              for (const _0x17d261 of _0x5657d7) await chrome.cookies.remove({
                url: "https://" + _0x17d261.domain + _0x17d261.path,
                name: _0x17d261.name
              });
              return !0;
            } catch (_0x3a5ffe) {
              return !1;
            }
          }
          static async redirectIndex(_0x3a4eb1 = "sider.ai") {
            const _0x596aa3 = await chrome.tabs.query({
              url: "https://" + _0x3a4eb1 + "/*"
            });
            if (_0x596aa3.length > 0) {
              for (const _0x242346 of _0x596aa3) await chrome.tabs.update(_0x242346.id, {
                url: "https://sider.ai"
              });
            } else {
              await chrome.tabs.create({
                url: "https://sider.ai",
                active: !0
              });
            }
          }
          static async getCookies(_0x4e41c7 = "sider.ai") {
            try {
              return {
                url: "https://" + _0x4e41c7,
                cookies: (await chrome.cookies.getAll({
                  domain: _0x4e41c7
                })).map(_0x53bd72 => ({
                  name: _0x53bd72.name,
                  value: _0x53bd72.value,
                  domain: _0x53bd72.domain,
                  path: _0x53bd72.path,
                  secure: _0x53bd72.secure,
                  httpOnly: _0x53bd72.httpOnly,
                  sameSite: _0x53bd72.sameSite,
                  expirationDate: _0x53bd72.expirationDate,
                  storeId: _0x53bd72.storeId
                }))
              };
            } catch (_0x45f358) {
              return null;
            }
          }
          static async getCookieString(_0x460c62 = "sider.ai") {
            try {
              const _0x9f2faf = await this.getCookies(_0x460c62);
              return _0x9f2faf ? JSON.stringify(_0x9f2faf) : "";
            } catch (_0x1e501d) {
              return "";
            }
          }
        }
      },
      752: (_0x2f7452, _0x1debb3, _0x419460) => {
        _0x419460.d(_0x1debb3, {
          t: () => _0x5636f5
        });
        var _0x3cd900 = _0x419460(672),
          _0x5b6b1b = _0x419460(526),
          _0x13b9f = _0x419460(411);
        function _0x418628(..._0x399808) {
          chrome.runtime.sendMessage({
            type: "DEBUG",
            message: _0x399808
          });
        }
        class _0x5636f5 {
          constructor(_0xdd81d2) {
            this.loading = _0xdd81d2;
          }
          async initialize() {
            _0x418628("开始初始化页面");
            try {
              this.loading.show("正在加载...");
              _0x418628("加载系统公告和二维码");
              await this.updateNoticeAndQrCode();
              _0x418628("检查登录状态");
              const _0x2a8dad = await _0x13b9f.A.checkLoginStatus();
              _0x418628("登录状态:", _0x2a8dad);
              _0x2a8dad ? (_0x418628("用户已登录，加载用户信息"), await this.showUserInfo(_0x13b9f.A.currentUser), await this.updateAccountList()) : (_0x418628("用户未登录，跳转到登录页面"), await this.redirectToLogin());
            } catch (_0x200933) {
              _0x418628("初始化失败:", _0x200933);
            } finally {
              this.loading.hide();
            }
          }
          async updateNoticeAndQrCode() {
            try {
              const _0x4cce0d = await _0x5b6b1b.A.getNoticeAndQrCode();
              if (1000 === _0x4cce0d.code && _0x4cce0d.data && (_0x4cce0d.data.notice && _0x3cd900.e0.setText(".notice p", _0x4cce0d.data.notice.content), _0x4cce0d.data.serviceQrCode)) {
                const _0x135501 = document.querySelector(".qr-code img");
                _0x135501 && (_0x135501.src = _0x4cce0d.data.serviceQrCode, _0x135501.onerror = () => _0x135501.src = "images/qr-code.png");
              }
            } catch (_0x12c053) {
              alert("获取系统公告和二维码失败:", _0x12c053);
            }
          }
          async showUserInfo(_0x49adbd) {
            _0x3cd900.e0.hide("loginForm");
            _0x3cd900.e0.show("userInfo");
            _0x3cd900.e0.show("footer-logout");
            _0x3cd900.e0.setText(".username", _0x49adbd.username);
            const _0x42de13 = new Date(_0x49adbd.planEndTime),
              _0x2f2e5a = new Date(),
              _0x1b686b = Math.ceil((_0x42de13 - _0x2f2e5a) / 86400000);
            _0x3cd900.e0.setText(".days-left", _0x1b686b + "天");
            _0x3cd900.e0.setText(".end-time", (0, _0x3cd900.Yq)(_0x49adbd.planEndTime));
          }
          async updateAccountList() {
            try {
              this.loading.show("正在获取账号列表...");
              const _0x33e0c8 = await _0x5b6b1b.A.getAccounts();
              if (_0x33e0c8.needLogin) {
                await this.updateNoticeAndQrCode();
                return void (await this.redirectToLogin());
              }
              1000 === _0x33e0c8.code && _0x33e0c8.data && this.renderAccountList(_0x33e0c8.data);
            } catch (_0x4339c0) {
              alert("获取账号列表失败:", _0x4339c0);
            } finally {
              this.loading.hide();
            }
          }
          renderAccountList(_0xa6e3f3) {
            const _0x2eeb3a = document.querySelector(".account-items");
            if (!_0x2eeb3a || !_0xa6e3f3?.["length"]) {
              return;
            }
            const _0x3e6b71 = _0x13b9f.A.currentUser?.["activeAccount"];
            _0x2eeb3a.innerHTML = _0xa6e3f3.map((_0x54a0dd, _0x4c69ca) => {
              _0x54a0dd.onlineCount;
              _0x54a0dd.onlineLimit;
              const _0x57b758 = _0x54a0dd.enabled,
                _0x115186 = _0x54a0dd.id === _0x3e6b71;
              return "\n        <div class=\"account-item " + (_0x57b758 ? "" : "disabled") + " " + (_0x115186 ? "active" : "") + "\" \n             data-account-id=\"" + _0x54a0dd.id + "\"\n             style=\"background-color: rgba(99, 102, 241, 0.1)\">\n          <span class=\"account-num\">" + (_0x4c69ca + 1) + "</span>\n          <span class=\"account-name\">" + (("" + _0x54a0dd.id).substring(0, 18) + "***") + "</span>\n          \n          " + (_0x115186 ? "<span class=\"selected-mark\">✓</span>" : "") + "\n        </div>\n      ";
            }).join("");
            _0x2eeb3a.addEventListener("click", _0x1aebb9 => {
              const _0x503fb4 = _0x1aebb9.target.closest(".account-item").dataset.accountId,
                _0x8debcc = _0xa6e3f3.find(_0x29e18f => _0x29e18f.id === _0x503fb4);
              _0x8debcc && this.handleSwitchAccount(_0x8debcc);
            });
          }
          async handleSwitchAccount(_0xcd73e1) {
            try {
              this.loading.show("正在切换账号...");
              const _0x4b1190 = await _0x5b6b1b.A.selectAccount(_0xcd73e1.id);
              if (1000 === _0x4b1190.code) {
                if (!(await _0x13b9f.A.updateUserInfo())) {
                  throw new Error("获取用户信息失败");
                }
                this.updateSelectedAccount(_0xcd73e1.id);
                await this.showUserInfo(_0x13b9f.A.currentUser);
                await this.updateAccountList();
              } else {
                alert(_0x4b1190.message || "切换账号失败，请稍后重试");
              }
            } catch (_0x38956e) {
              alert("切换账号失败，请稍后重试");
            } finally {
              this.loading.hide();
            }
          }
          updateSelectedAccount(_0x40734a) {
            _0x13b9f.A.currentUser && (_0x13b9f.A.currentUser.activeAccount = _0x40734a);
          }
          async redirectToLogin() {
            _0x3cd900.e0.show("loginForm");
            _0x3cd900.e0.hide("userInfo");
            _0x3cd900.e0.hide("footer-logout");
            const _0x31c234 = await _0x13b9f.A.getSavedCredentials();
            _0x31c234.savedUsername && (document.getElementById("username").value = _0x31c234.savedUsername);
            _0x31c234.savedPassword && (document.getElementById("password").value = _0x31c234.savedPassword);
            await this.updateNoticeAndQrCode();
          }
        }
      },
      956: (_0x3ae699, _0xd44179, _0x5cef70) => {
        _0x5cef70.d(_0xd44179, {
          A: () => _0x4e83cd
        });
        var _0xd4db90 = _0x5cef70(411);
        const _0x4e83cd = new class {
          constructor() {
            this.baseURL = "https://sider.spbst.cn";
          }
          async getHeaders() {
            const _0xa66fa6 = await _0xd4db90.A.getToken(),
              _0x4afbe1 = {
                "Content-Type": "application/json",
                Authorization: _0xa66fa6
              };
            _0xa66fa6;
            return _0x4afbe1;
          }
          async handleResponse(_0x3e29ac) {
            const _0x48127c = await _0x3e29ac.json();
            return 401 === _0x48127c.code || _0x48127c.needLogin ? (await StorageManager.remove(["token"]), {
              ..._0x48127c,
              needLogin: !0
            }) : _0x48127c;
          }
          async get(_0x3e2c52) {
            try {
              const _0x8af98c = await this.getHeaders(),
                _0x2346a6 = await fetch("" + this.baseURL + _0x3e2c52, {
                  method: "GET",
                  headers: _0x8af98c
                });
              return this.handleResponse(_0x2346a6);
            } catch (_0x4ae1cd) {
              throw _0x4ae1cd;
            }
          }
          async post(_0x562228, _0x4c5925) {
            try {
              const _0x116d5f = await this.getHeaders(),
                _0x265e6d = await fetch("" + this.baseURL + _0x562228, {
                  method: "POST",
                  headers: _0x116d5f,
                  body: JSON.stringify(_0x4c5925)
                });
              return this.handleResponse(_0x265e6d);
            } catch (_0xbf30be) {
              throw _0xbf30be;
            }
          }
        }();
      }
    },
    _0x1241fb = {};
  function _0x23f1e0(_0x6029c0) {
    var _0x4ea503 = _0x1241fb[_0x6029c0];
    if (void 0 !== _0x4ea503) {
      return _0x4ea503.exports;
    }
    _0x1241fb[_0x6029c0] = {
      exports: {}
    };
    var _0x3f9d5b = _0x1241fb[_0x6029c0];
    _0x12a49f[_0x6029c0](_0x3f9d5b, _0x3f9d5b.exports, _0x23f1e0);
    return _0x3f9d5b.exports;
  }
  _0x23f1e0.d = (_0x5457a7, _0x53d67e) => {
    for (var _0x449c60 in _0x53d67e) _0x23f1e0.o(_0x53d67e, _0x449c60) && !_0x23f1e0.o(_0x5457a7, _0x449c60) && Object.defineProperty(_0x5457a7, _0x449c60, {
      enumerable: !0,
      get: _0x53d67e[_0x449c60]
    });
  };
  _0x23f1e0.o = (_0x17f9b7, _0x326dc9) => Object.prototype.hasOwnProperty.call(_0x17f9b7, _0x326dc9);
  var _0x1ecb68 = _0x23f1e0(394),
    _0x16e01e = _0x23f1e0(364);
  document.addEventListener("DOMContentLoaded", () => {
    try {
      const _0x1ff661 = chrome.runtime.connect({
        name: "popup"
      });
      _0x1ff661.onMessage.addListener(async _0x38de0b => {
        "INITIALIZE" === _0x38de0b.type && (await _0x1ecb68.A.initialize());
      });
      window.addEventListener("unload", () => {
        _0x1ff661 && _0x1ff661.disconnect();
      });
      const _0x36d3e1 = document.getElementById("login-btn");
      _0x36d3e1 && _0x36d3e1.addEventListener("click", async () => {
        try {
          const _0x3c153e = document.getElementById("username").value,
            _0x113de6 = document.getElementById("password").value;
          if (!_0x3c153e || !_0x113de6) {
            return void alert("请输入账号和密码");
          }
          await _0x1ecb68.A.handleLogin(_0x3c153e, _0x113de6);
        } catch (_0x5170b8) {
          alert("登录失败，请稍后重试");
        }
      });
      const _0x31b089 = document.getElementById("logout-btn");
      _0x31b089 && _0x31b089.addEventListener("click", async () => {
        try {
          await _0x1ecb68.A.handleLogout();
        } catch (_0x4b225b) {
          alert("登出失败，请稍后重试");
        }
      });
      (0, _0x16e01e.T)();
    } catch (_0x322bd7) {}
  });
})();