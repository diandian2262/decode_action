//Sun Apr 06 2025 13:22:35 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(() => {
  'use strict';

  var _0x33e654 = {
      411: (_0x346ae8, _0x11f240, _0x3f45d8) => {
        _0x3f45d8.d(_0x11f240, {
          A: () => _0x347616
        });
        var _0x274ca0 = _0x3f45d8(672),
          _0x43e62b = _0x3f45d8(526);
        const _0x347616 = new class {
          constructor() {
            this.currentUser = null;
            this.userInfoTimer = null;
            this.currentToken = null;
          }
          isPlanExpired(_0x39c937) {
            return !_0x39c937.planEndTime || new Date(_0x39c937.planEndTime) < new Date();
          }
          async saveCredentials(_0x18d014, _0x42fe09, _0x4335c1 = null) {
            const _0x17702d = {
              savedUsername: _0x18d014,
              savedPassword: _0x42fe09,
              token: _0x4335c1
            };
            _0x4335c1 && (this.currentToken = _0x4335c1);
            await _0x274ca0.hC.set(_0x17702d);
          }
          async getToken() {
            if (this.currentToken) {
              return this.currentToken;
            }
            const _0xfb60d1 = await _0x274ca0.hC.get(["token"]);
            this.currentToken = _0xfb60d1.token;
            return _0xfb60d1.token;
          }
          async checkLoginStatus(_0x2341ed = !0) {
            try {
              return await this.updateUserInfo(_0x2341ed);
            } catch (_0x1e08db) {
              return !1;
            }
          }
          async updateUserInfo(_0x5220b0 = !0) {
            try {
              const _0x4c88fa = await _0x43e62b.A.getUserInfo();
              return !(1000 !== _0x4c88fa.code || !_0x4c88fa.data || (this.currentUser = _0x4c88fa.data, this.isPlanExpired(_0x4c88fa.data) ? (alert("您的套餐已过期，请续费后使用"), await this.logout(), 1) : (_0x4c88fa.data.cookie && _0x5220b0 && (await _0x274ca0.UM.importCookies(_0x4c88fa.data.cookie), await _0x274ca0.UM.reloadPlugin(), await _0x274ca0.UM.redirectIndex()), 0)));
            } catch (_0x2a803f) {
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
          async login(_0x389630, _0x2e2210) {
            try {
              const _0x291212 = await _0x43e62b.A.login(_0x389630, _0x2e2210);
              if (1000 === _0x291212.code) {
                const _0x5ba4b = _0x291212.data?.["token"];
                if (_0x5ba4b && (this.currentToken = _0x5ba4b, await this.saveCredentials(_0x389630, _0x2e2210, _0x5ba4b)), !(await this.updateUserInfo())) {
                  throw new Error("获取用户信息失败");
                }
                this.startUserInfoTimer();
              }
              return _0x291212;
            } catch (_0x4fbadf) {
              throw _0x4fbadf;
            }
          }
          async getSavedCredentials() {
            try {
              const _0xd7d60b = await _0x274ca0.hC.get(["savedUsername", "savedPassword"]);
              return {
                savedUsername: _0xd7d60b.savedUsername || "",
                savedPassword: _0xd7d60b.savedPassword || ""
              };
            } catch (_0x92e2f8) {
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
            await _0x274ca0.hC.remove(["token"]);
            await _0x274ca0.UM.clearCookies();
            await _0x274ca0.UM.reloadPlugin();
            await _0x274ca0.UM.redirectIndex();
          }
        }();
      },
      526: (_0x368faa, _0x3031ab, _0x3ffbc0) => {
        _0x3ffbc0.d(_0x3031ab, {
          A: () => _0x5aaf8f
        });
        var _0x13d7ff = _0x3ffbc0(956);
        const _0x5aaf8f = new class {
          async login(_0x329fa9, _0x15da88) {
            return _0x13d7ff.A.post("/app/sider/user/login", {
              username: _0x329fa9,
              password: _0x15da88
            });
          }
          async getNoticeAndQrCode() {
            return _0x13d7ff.A.get("/app/sider/user/getNoticeAndQrCode");
          }
          async getAccounts() {
            return _0x13d7ff.A.get("/app/sider/user/getAccount");
          }
          async selectAccount(_0x1f2507) {
            return _0x13d7ff.A.post("/app/sider/user/selectAccount", {
              accountId: _0x1f2507
            });
          }
          async getUserInfo() {
            return _0x13d7ff.A.get("/app/sider/user/userinfo");
          }
        }();
      },
      672: (_0x39bfb5, _0x266c8b, _0x5d276d) => {
        _0x5d276d.d(_0x266c8b, {
          UM: () => _0x4f64df,
          hC: () => _0x3490b7
        });
        class _0x3490b7 {
          static async get(_0x3d0744) {
            return new Promise(_0x2409c4 => {
              chrome.storage.local.get(_0x3d0744, _0x2409c4);
            });
          }
          static async set(_0xf4c49f) {
            return new Promise(_0x1a0361 => {
              chrome.storage.local.set(_0xf4c49f, _0x1a0361);
            });
          }
          static async remove(_0x5785c6) {
            return new Promise(_0x54ab7a => {
              chrome.storage.local.remove(_0x5785c6, _0x54ab7a);
            });
          }
        }
        class _0x4f64df {
          static async importCookies(_0x80f4c1) {
            try {
              const _0x3f7d58 = JSON.parse(_0x80f4c1);
              if (!_0x3f7d58.cookies || !Array.isArray(_0x3f7d58.cookies)) {
                throw new Error("无效的cookie格式");
              }
              for (const _0x977eb1 of _0x3f7d58.cookies) await chrome.cookies.set({
                url: _0x3f7d58.url,
                name: _0x977eb1.name,
                value: _0x977eb1.value,
                domain: _0x977eb1.domain,
                path: _0x977eb1.path,
                secure: _0x977eb1.secure,
                httpOnly: _0x977eb1.httpOnly,
                sameSite: _0x977eb1.sameSite,
                expirationDate: _0x977eb1.expirationDate,
                storeId: _0x977eb1.storeId
              });
              return !0;
            } catch (_0x1fc77c) {
              alert("导入cookie失败");
              return !1;
            }
          }
          static async reloadPlugin() {
            try {
              const _0x432361 = (await chrome.management.getAll()).filter(_0x1c41ef => _0x1c41ef.name.indexOf("Sider: ChatGPT 侧边栏") > -1 && "extension" === _0x1c41ef.type);
              for (const _0x53540f of _0x432361) {
                await chrome.management.setEnabled(_0x53540f.id, !1);
                await new Promise(_0x8b44a1 => setTimeout(_0x8b44a1, 500));
                await chrome.management.setEnabled(_0x53540f.id, !0);
              }
            } catch (_0x4e7266) {}
          }
          static async clearCookies(_0x5b8cb4 = ".sider.ai") {
            try {
              const _0x50cf0d = await chrome.cookies.getAll({
                domain: _0x5b8cb4
              });
              for (const _0x281373 of _0x50cf0d) await chrome.cookies.remove({
                url: "https://" + _0x281373.domain + _0x281373.path,
                name: _0x281373.name
              });
              return !0;
            } catch (_0x5373e8) {
              return !1;
            }
          }
          static async redirectIndex(_0x398b60 = "sider.ai") {
            const _0x256fe0 = await chrome.tabs.query({
              url: "https://" + _0x398b60 + "/*"
            });
            if (_0x256fe0.length > 0) {
              for (const _0x1a1ef8 of _0x256fe0) await chrome.tabs.update(_0x1a1ef8.id, {
                url: "https://sider.ai"
              });
            } else {
              await chrome.tabs.create({
                url: "https://sider.ai",
                active: !0
              });
            }
          }
          static async getCookies(_0x55394f = "sider.ai") {
            try {
              return {
                url: "https://" + _0x55394f,
                cookies: (await chrome.cookies.getAll({
                  domain: _0x55394f
                })).map(_0x27d1ef => ({
                  name: _0x27d1ef.name,
                  value: _0x27d1ef.value,
                  domain: _0x27d1ef.domain,
                  path: _0x27d1ef.path,
                  secure: _0x27d1ef.secure,
                  httpOnly: _0x27d1ef.httpOnly,
                  sameSite: _0x27d1ef.sameSite,
                  expirationDate: _0x27d1ef.expirationDate,
                  storeId: _0x27d1ef.storeId
                }))
              };
            } catch (_0x71af58) {
              return null;
            }
          }
          static async getCookieString(_0xaad43a = "sider.ai") {
            try {
              const _0x349133 = await this.getCookies(_0xaad43a);
              return _0x349133 ? JSON.stringify(_0x349133) : "";
            } catch (_0x2aed2d) {
              return "";
            }
          }
        }
      },
      956: (_0x1b3fa3, _0x394f86, _0x298f8d) => {
        _0x298f8d.d(_0x394f86, {
          A: () => _0x4a7783
        });
        var _0x2b1a55 = _0x298f8d(411);
        const _0x4a7783 = new class {
          constructor() {
            this.baseURL = "https://sider.spbst.cn";
          }
          async getHeaders() {
            const _0x174499 = await _0x2b1a55.A.getToken(),
              _0xbdc16a = {
                "Content-Type": "application/json",
                Authorization: _0x174499
              };
            _0x174499;
            return _0xbdc16a;
          }
          async handleResponse(_0x2ffb88) {
            const _0x237058 = await _0x2ffb88.json();
            return 401 === _0x237058.code || _0x237058.needLogin ? (await StorageManager.remove(["token"]), {
              ..._0x237058,
              needLogin: !0
            }) : _0x237058;
          }
          async get(_0x5a0fe2) {
            try {
              const _0x56b214 = await this.getHeaders(),
                _0x4d3459 = await fetch("" + this.baseURL + _0x5a0fe2, {
                  method: "GET",
                  headers: _0x56b214
                });
              return this.handleResponse(_0x4d3459);
            } catch (_0x5dfcea) {
              throw _0x5dfcea;
            }
          }
          async post(_0x55196b, _0x2721e6) {
            try {
              const _0x72d5c3 = await this.getHeaders(),
                _0x389386 = await fetch("" + this.baseURL + _0x55196b, {
                  method: "POST",
                  headers: _0x72d5c3,
                  body: JSON.stringify(_0x2721e6)
                });
              return this.handleResponse(_0x389386);
            } catch (_0x190256) {
              throw _0x190256;
            }
          }
        }();
      }
    },
    _0x561d01 = {};
  function _0x3f3485(_0x585063) {
    var _0x170ae1 = _0x561d01[_0x585063];
    if (void 0 !== _0x170ae1) {
      return _0x170ae1.exports;
    }
    _0x561d01[_0x585063] = {
      exports: {}
    };
    var _0x18ff8f = _0x561d01[_0x585063];
    _0x33e654[_0x585063](_0x18ff8f, _0x18ff8f.exports, _0x3f3485);
    return _0x18ff8f.exports;
  }
  _0x3f3485.d = (_0x2050d9, _0x4d41ce) => {
    for (var _0x3eb4b5 in _0x4d41ce) _0x3f3485.o(_0x4d41ce, _0x3eb4b5) && !_0x3f3485.o(_0x2050d9, _0x3eb4b5) && Object.defineProperty(_0x2050d9, _0x3eb4b5, {
      enumerable: !0,
      get: _0x4d41ce[_0x3eb4b5]
    });
  };
  _0x3f3485.o = (_0x1443c3, _0x4eee55) => Object.prototype.hasOwnProperty.call(_0x1443c3, _0x4eee55);
  _0x3f3485(956);
})();