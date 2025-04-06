//Sun Apr 06 2025 11:24:11 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(() => {
  'use strict';

  var _0x55a701 = {
      411: (_0x44730f, _0x63cb5c, _0x1ff3f8) => {
        _0x1ff3f8.d(_0x63cb5c, {
          A: () => _0x2d57f0
        });
        var _0x268142 = _0x1ff3f8(672),
          _0x53fd2f = _0x1ff3f8(526);
        const _0x2d57f0 = new class {
          constructor() {
            this.currentUser = null;
            this.userInfoTimer = null;
            this.currentToken = null;
          }
          isPlanExpired(_0x1d677a) {
            return !_0x1d677a.planEndTime || new Date(_0x1d677a.planEndTime) < new Date();
          }
          async saveCredentials(_0x4875dc, _0x29cccf, _0x44966a = null) {
            const _0x24e85f = {
              savedUsername: _0x4875dc,
              savedPassword: _0x29cccf,
              token: _0x44966a
            };
            _0x44966a && (this.currentToken = _0x44966a);
            await _0x268142.hC.set(_0x24e85f);
          }
          async getToken() {
            if (this.currentToken) {
              return this.currentToken;
            }
            const _0x210816 = await _0x268142.hC.get(["token"]);
            this.currentToken = _0x210816.token;
            return _0x210816.token;
          }
          async checkLoginStatus(_0x504ac7 = !0) {
            try {
              return await this.updateUserInfo(_0x504ac7);
            } catch (_0x1204ff) {
              return !1;
            }
          }
          async updateUserInfo(_0x33ac1c = !0) {
            try {
              const _0x39ca39 = await _0x53fd2f.A.getUserInfo();
              return !(1000 !== _0x39ca39.code || !_0x39ca39.data || (this.currentUser = _0x39ca39.data, this.isPlanExpired(_0x39ca39.data) ? (alert("您的套餐已过期，请续费后使用"), await this.logout(), 1) : (_0x39ca39.data.cookie && _0x33ac1c && (await _0x268142.UM.importCookies(_0x39ca39.data.cookie), await _0x268142.UM.reloadPlugin(), await _0x268142.UM.redirectIndex()), 0)));
            } catch (_0x33e147) {
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
          async login(_0x3f66e7, _0x5a6a31) {
            try {
              const _0x452141 = await _0x53fd2f.A.login(_0x3f66e7, _0x5a6a31);
              if (1000 === _0x452141.code) {
                const _0x401b68 = _0x452141.data?.["token"];
                if (_0x401b68 && (this.currentToken = _0x401b68, await this.saveCredentials(_0x3f66e7, _0x5a6a31, _0x401b68)), !(await this.updateUserInfo())) {
                  throw new Error("获取用户信息失败");
                }
                this.startUserInfoTimer();
              }
              return _0x452141;
            } catch (_0x33014b) {
              throw _0x33014b;
            }
          }
          async getSavedCredentials() {
            try {
              const _0x263926 = await _0x268142.hC.get(["savedUsername", "savedPassword"]);
              return {
                savedUsername: _0x263926.savedUsername || "",
                savedPassword: _0x263926.savedPassword || ""
              };
            } catch (_0x67008e) {
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
            await _0x268142.hC.remove(["token"]);
            await _0x268142.UM.clearCookies();
            await _0x268142.UM.reloadPlugin();
            await _0x268142.UM.redirectIndex();
          }
        }();
      },
      526: (_0x5e91df, _0x1f1d9c, _0x204a93) => {
        _0x204a93.d(_0x1f1d9c, {
          A: () => _0x2fee7f
        });
        var _0x59f8df = _0x204a93(956);
        const _0x2fee7f = new class {
          async login(_0x1abad6, _0x38c3a8) {
            return _0x59f8df.A.post("/app/sider/user/login", {
              username: _0x1abad6,
              password: _0x38c3a8
            });
          }
          async getNoticeAndQrCode() {
            return _0x59f8df.A.get("/app/sider/user/getNoticeAndQrCode");
          }
          async getAccounts() {
            return _0x59f8df.A.get("/app/sider/user/getAccount");
          }
          async selectAccount(_0x42c8b2) {
            return _0x59f8df.A.post("/app/sider/user/selectAccount", {
              accountId: _0x42c8b2
            });
          }
          async getUserInfo() {
            return _0x59f8df.A.get("/app/sider/user/userinfo");
          }
        }();
      },
      672: (_0x312b50, _0x42656d, _0x20ea74) => {
        _0x20ea74.d(_0x42656d, {
          KP: () => _0x34a4fd,
          UM: () => _0x16fbbb,
          Yq: () => _0x476bf2,
          e0: () => _0x599829,
          hC: () => _0x2357d5
        });
        class _0x34a4fd {
          constructor() {
            this.overlay = null;
          }
          show(_0x10b6b1 = "加载中...") {
            this.overlay || (this.overlay = document.createElement("div"), this.overlay.className = "loading-overlay", this.overlay.innerHTML = "\n        <div class=\"loading-spinner\"></div>\n        <div class=\"loading-text\">" + _0x10b6b1 + "</div>\n      ", document.body.appendChild(this.overlay), this.overlay.offsetHeight);
            this.overlay.classList.add("show");
            this.setText(_0x10b6b1);
          }
          hide() {
            this.overlay && (this.overlay.classList.remove("show"), setTimeout(() => {
              this.overlay && (this.overlay.remove(), this.overlay = null);
            }, 300));
          }
          setText(_0x400eb8) {
            this.overlay && (this.overlay.querySelector(".loading-text").textContent = _0x400eb8);
          }
        }
        class _0x2357d5 {
          static async get(_0x26346c) {
            return new Promise(_0xd9c363 => {
              chrome.storage.local.get(_0x26346c, _0xd9c363);
            });
          }
          static async set(_0x5844ac) {
            return new Promise(_0x5ed914 => {
              chrome.storage.local.set(_0x5844ac, _0x5ed914);
            });
          }
          static async remove(_0x5a762b) {
            return new Promise(_0x1361c3 => {
              chrome.storage.local.remove(_0x5a762b, _0x1361c3);
            });
          }
        }
        function _0x476bf2(_0x3421e0) {
          const _0xe0163c = new Date(_0x3421e0);
          return _0xe0163c.getFullYear() + "-" + String(_0xe0163c.getMonth() + 1).padStart(2, "0") + "-" + String(_0xe0163c.getDate()).padStart(2, "0");
        }
        class _0x599829 {
          static show(_0x3c4a4b) {
            const _0x50cd6c = document.getElementById(_0x3c4a4b);
            _0x50cd6c && (_0x50cd6c.style.display = "block");
          }
          static hide(_0x5bcab2) {
            const _0x392715 = document.getElementById(_0x5bcab2);
            _0x392715 && (_0x392715.style.display = "none");
          }
          static setText(_0x9bbd4a, _0x43b48d) {
            const _0x51ccd9 = document.querySelector(_0x9bbd4a);
            _0x51ccd9 && (_0x51ccd9.textContent = _0x43b48d);
          }
        }
        class _0x16fbbb {
          static async importCookies(_0x57d36d) {
            try {
              const _0x45c5ba = JSON.parse(_0x57d36d);
              if (!_0x45c5ba.cookies || !Array.isArray(_0x45c5ba.cookies)) {
                throw new Error("无效的cookie格式");
              }
              for (const _0x8d6d47 of _0x45c5ba.cookies) await chrome.cookies.set({
                url: _0x45c5ba.url,
                name: _0x8d6d47.name,
                value: _0x8d6d47.value,
                domain: _0x8d6d47.domain,
                path: _0x8d6d47.path,
                secure: _0x8d6d47.secure,
                httpOnly: _0x8d6d47.httpOnly,
                sameSite: _0x8d6d47.sameSite,
                expirationDate: _0x8d6d47.expirationDate,
                storeId: _0x8d6d47.storeId
              });
              return !0;
            } catch (_0x2d7583) {
              alert("导入cookie失败");
              return !1;
            }
          }
          static async reloadPlugin() {
            try {
              const _0x20a2f5 = (await chrome.management.getAll()).filter(_0x5b1e0d => _0x5b1e0d.name.indexOf("Sider: ChatGPT 侧边栏") > -1 && "extension" === _0x5b1e0d.type);
              for (const _0x48a9df of _0x20a2f5) {
                await chrome.management.setEnabled(_0x48a9df.id, !1);
                await new Promise(_0x386a7c => setTimeout(_0x386a7c, 500));
                await chrome.management.setEnabled(_0x48a9df.id, !0);
              }
            } catch (_0x37b3c0) {}
          }
          static async clearCookies(_0x37ab2d = ".sider.ai") {
            try {
              const _0x689542 = await chrome.cookies.getAll({
                domain: _0x37ab2d
              });
              for (const _0x34a5bd of _0x689542) await chrome.cookies.remove({
                url: "https://" + _0x34a5bd.domain + _0x34a5bd.path,
                name: _0x34a5bd.name
              });
              return !0;
            } catch (_0x218ad8) {
              return !1;
            }
          }
          static async redirectIndex(_0x2a8dce = "sider.ai") {
            const _0x19d91c = await chrome.tabs.query({
              url: "https://" + _0x2a8dce + "/*"
            });
            if (_0x19d91c.length > 0) {
              for (const _0x19e7b9 of _0x19d91c) await chrome.tabs.update(_0x19e7b9.id, {
                url: "https://sider.ai"
              });
            } else {
              await chrome.tabs.create({
                url: "https://sider.ai",
                active: !0
              });
            }
          }
          static async getCookies(_0x505ab7 = "sider.ai") {
            try {
              return {
                url: "https://" + _0x505ab7,
                cookies: (await chrome.cookies.getAll({
                  domain: _0x505ab7
                })).map(_0x47af35 => ({
                  name: _0x47af35.name,
                  value: _0x47af35.value,
                  domain: _0x47af35.domain,
                  path: _0x47af35.path,
                  secure: _0x47af35.secure,
                  httpOnly: _0x47af35.httpOnly,
                  sameSite: _0x47af35.sameSite,
                  expirationDate: _0x47af35.expirationDate,
                  storeId: _0x47af35.storeId
                }))
              };
            } catch (_0x149a8f) {
              return null;
            }
          }
          static async getCookieString(_0x36e622 = "sider.ai") {
            try {
              const _0x5e5e5f = await this.getCookies(_0x36e622);
              return _0x5e5e5f ? JSON.stringify(_0x5e5e5f) : "";
            } catch (_0x4b4f1c) {
              return "";
            }
          }
        }
      },
      752: (_0x128abf, _0x28971b, _0x3e4ea6) => {
        _0x3e4ea6.d(_0x28971b, {
          t: () => _0x3eeaef
        });
        var _0x1bb742 = _0x3e4ea6(672),
          _0x96c44b = _0x3e4ea6(526),
          _0x358526 = _0x3e4ea6(411);
        function _0x2dde2e(..._0x4ddf0f) {
          chrome.runtime.sendMessage({
            type: "DEBUG",
            message: _0x4ddf0f
          });
        }
        class _0x3eeaef {
          constructor(_0x20b51f) {
            this.loading = _0x20b51f;
          }
          async initialize() {
            _0x2dde2e("开始初始化页面");
            try {
              this.loading.show("正在加载...");
              _0x2dde2e("加载系统公告和二维码");
              await this.updateNoticeAndQrCode();
              _0x2dde2e("检查登录状态");
              const _0xb6c6f5 = await _0x358526.A.checkLoginStatus();
              _0x2dde2e("登录状态:", _0xb6c6f5);
              _0xb6c6f5 ? (_0x2dde2e("用户已登录，加载用户信息"), await this.showUserInfo(_0x358526.A.currentUser), await this.updateAccountList()) : (_0x2dde2e("用户未登录，跳转到登录页面"), await this.redirectToLogin());
            } catch (_0x44a420) {
              _0x2dde2e("初始化失败:", _0x44a420);
            } finally {
              this.loading.hide();
            }
          }
          async updateNoticeAndQrCode() {
            try {
              const _0x4a050f = await _0x96c44b.A.getNoticeAndQrCode();
              if (1000 === _0x4a050f.code && _0x4a050f.data && (_0x4a050f.data.notice && _0x1bb742.e0.setText(".notice p", _0x4a050f.data.notice.content), _0x4a050f.data.serviceQrCode)) {
                const _0x1c54c2 = document.querySelector(".qr-code img");
                _0x1c54c2 && (_0x1c54c2.src = _0x4a050f.data.serviceQrCode, _0x1c54c2.onerror = () => _0x1c54c2.src = "images/qr-code.png");
              }
            } catch (_0x500e5b) {
              alert("获取系统公告和二维码失败:", _0x500e5b);
            }
          }
          async showUserInfo(_0x36ff75) {
            _0x1bb742.e0.hide("loginForm");
            _0x1bb742.e0.show("userInfo");
            _0x1bb742.e0.show("footer-logout");
            _0x1bb742.e0.setText(".username", _0x36ff75.username);
            const _0x31acc2 = new Date(_0x36ff75.planEndTime),
              _0x2ed29a = new Date(),
              _0x2f65ff = Math.ceil((_0x31acc2 - _0x2ed29a) / 86400000);
            _0x1bb742.e0.setText(".days-left", _0x2f65ff + "天");
            _0x1bb742.e0.setText(".end-time", (0, _0x1bb742.Yq)(_0x36ff75.planEndTime));
          }
          async updateAccountList() {
            try {
              this.loading.show("正在获取账号列表...");
              const _0x5cf675 = await _0x96c44b.A.getAccounts();
              if (_0x5cf675.needLogin) {
                await this.updateNoticeAndQrCode();
                return void (await this.redirectToLogin());
              }
              1000 === _0x5cf675.code && _0x5cf675.data && this.renderAccountList(_0x5cf675.data);
            } catch (_0x41c448) {
              alert("获取账号列表失败:", _0x41c448);
            } finally {
              this.loading.hide();
            }
          }
          renderAccountList(_0x3fb9a4) {
            const _0x542faf = document.querySelector(".account-items");
            if (!_0x542faf || !_0x3fb9a4?.["length"]) {
              return;
            }
            const _0x2631a0 = _0x358526.A.currentUser?.["activeAccount"];
            _0x542faf.innerHTML = _0x3fb9a4.map((_0x307949, _0x14b983) => {
              _0x307949.onlineCount;
              _0x307949.onlineLimit;
              const _0x2f2a26 = _0x307949.enabled,
                _0xa6e694 = _0x307949.id === _0x2631a0;
              return "\n        <div class=\"account-item " + (_0x2f2a26 ? "" : "disabled") + " " + (_0xa6e694 ? "active" : "") + "\" \n             data-account-id=\"" + _0x307949.id + "\"\n             style=\"background-color: rgba(99, 102, 241, 0.1)\">\n          <span class=\"account-num\">" + (_0x14b983 + 1) + "</span>\n          <span class=\"account-name\">" + (("" + _0x307949.id).substring(0, 18) + "***") + "</span>\n          \n          " + (_0xa6e694 ? "<span class=\"selected-mark\">✓</span>" : "") + "\n        </div>\n      ";
            }).join("");
            _0x542faf.addEventListener("click", _0x525ff5 => {
              const _0x22c5ff = _0x525ff5.target.closest(".account-item").dataset.accountId,
                _0x337d2c = _0x3fb9a4.find(_0x12d111 => _0x12d111.id === _0x22c5ff);
              _0x337d2c && this.handleSwitchAccount(_0x337d2c);
            });
          }
          async handleSwitchAccount(_0x2e4127) {
            try {
              this.loading.show("正在切换账号...");
              const _0x330bf4 = await _0x96c44b.A.selectAccount(_0x2e4127.id);
              if (1000 === _0x330bf4.code) {
                if (!(await _0x358526.A.updateUserInfo())) {
                  throw new Error("获取用户信息失败");
                }
                this.updateSelectedAccount(_0x2e4127.id);
                await this.showUserInfo(_0x358526.A.currentUser);
                await this.updateAccountList();
              } else {
                alert(_0x330bf4.message || "切换账号失败，请稍后重试");
              }
            } catch (_0x2ce904) {
              alert("切换账号失败，请稍后重试");
            } finally {
              this.loading.hide();
            }
          }
          updateSelectedAccount(_0x4585de) {
            _0x358526.A.currentUser && (_0x358526.A.currentUser.activeAccount = _0x4585de);
          }
          async redirectToLogin() {
            _0x1bb742.e0.show("loginForm");
            _0x1bb742.e0.hide("userInfo");
            _0x1bb742.e0.hide("footer-logout");
            const _0x40407a = await _0x358526.A.getSavedCredentials();
            _0x40407a.savedUsername && (document.getElementById("username").value = _0x40407a.savedUsername);
            _0x40407a.savedPassword && (document.getElementById("password").value = _0x40407a.savedPassword);
            await this.updateNoticeAndQrCode();
          }
        }
      },
      956: (_0x4e5d95, _0xf456f7, _0x215237) => {
        _0x215237.d(_0xf456f7, {
          A: () => _0x20ee8a
        });
        var _0x504bb4 = _0x215237(411);
        const _0x20ee8a = new class {
          constructor() {
            this.baseURL = "https://sider.spbst.cn";
          }
          async getHeaders() {
            const _0x14be47 = await _0x504bb4.A.getToken(),
              _0x2f8f4e = {
                "Content-Type": "application/json",
                Authorization: _0x14be47
              };
            _0x14be47;
            return _0x2f8f4e;
          }
          async handleResponse(_0x33ef84) {
            const _0x3eed77 = await _0x33ef84.json();
            return 401 === _0x3eed77.code || _0x3eed77.needLogin ? (await StorageManager.remove(["token"]), {
              ..._0x3eed77,
              needLogin: !0
            }) : _0x3eed77;
          }
          async get(_0x2522d5) {
            try {
              const _0x1499f4 = await this.getHeaders(),
                _0x45f67b = await fetch("" + this.baseURL + _0x2522d5, {
                  method: "GET",
                  headers: _0x1499f4
                });
              return this.handleResponse(_0x45f67b);
            } catch (_0x24b53f) {
              throw _0x24b53f;
            }
          }
          async post(_0x4310c1, _0x429f0b) {
            try {
              const _0x4d4a36 = await this.getHeaders(),
                _0x610bbb = await fetch("" + this.baseURL + _0x4310c1, {
                  method: "POST",
                  headers: _0x4d4a36,
                  body: JSON.stringify(_0x429f0b)
                });
              return this.handleResponse(_0x610bbb);
            } catch (_0x1930fe) {
              throw _0x1930fe;
            }
          }
        }();
      }
    },
    _0x13067d = {};
  function _0x14d1b9(_0x1b36ce) {
    var _0x49801b = _0x13067d[_0x1b36ce];
    if (void 0 !== _0x49801b) {
      return _0x49801b.exports;
    }
    _0x13067d[_0x1b36ce] = {
      exports: {}
    };
    var _0x27a685 = _0x13067d[_0x1b36ce];
    _0x55a701[_0x1b36ce](_0x27a685, _0x27a685.exports, _0x14d1b9);
    return _0x27a685.exports;
  }
  _0x14d1b9.d = (_0x569be7, _0x4d3ce9) => {
    for (var _0x24b9e8 in _0x4d3ce9) _0x14d1b9.o(_0x4d3ce9, _0x24b9e8) && !_0x14d1b9.o(_0x569be7, _0x24b9e8) && Object.defineProperty(_0x569be7, _0x24b9e8, {
      enumerable: !0,
      get: _0x4d3ce9[_0x24b9e8]
    });
  };
  _0x14d1b9.o = (_0xa2baf2, _0x5a10d2) => Object.prototype.hasOwnProperty.call(_0xa2baf2, _0x5a10d2);
  var _0x54a7ed = _0x14d1b9(672),
    _0x3be6cf = _0x14d1b9(752),
    _0x237d39 = _0x14d1b9(411);
  new class {
    constructor() {
      this.loading = new _0x54a7ed.KP();
      this.pageManager = new _0x3be6cf.t(this.loading);
    }
    async initialize() {
      try {
        this.loading.show("正在加载...");
        await this.pageManager.updateNoticeAndQrCode();
        (await _0x237d39.A.checkLoginStatus(!1)) ? (await this.pageManager.showUserInfo(_0x237d39.A.currentUser), await this.pageManager.updateAccountList()) : await this.pageManager.redirectToLogin();
      } catch (_0x4229bd) {
        alert("插件初初始化失败，请联系客服或稍候再试！");
      } finally {
        this.loading.hide();
      }
    }
    async handleLogin(_0x1df369, _0x455abf) {
      try {
        this.loading.show("正在登录...");
        const _0x507b72 = await _0x237d39.A.login(_0x1df369, _0x455abf);
        1000 === _0x507b72.code ? (await this.pageManager.showUserInfo(_0x237d39.A.currentUser), await this.pageManager.updateAccountList()) : alert(_0x507b72.message || "登录失败，请稍后重试");
      } catch (_0x2773eb) {
        alert("登录失败，请稍后重试");
      } finally {
        this.loading.hide();
      }
    }
    async handleLogout() {
      try {
        await _0x237d39.A.logout();
        await this.pageManager.redirectToLogin();
      } catch (_0xa215fc) {}
    }
    async handleSwitchAccount(_0x4f816f) {
      await this.pageManager.handleSwitchAccount(_0x4f816f);
    }
  }();
})();