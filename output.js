//Sun Apr 06 2025 13:24:06 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(() => {
  'use strict';

  var _0x2ccaf5 = {
      411: (_0x26bfe4, _0x2c79ad, _0x3a53ff) => {
        _0x3a53ff.d(_0x2c79ad, {
          A: () => _0x26e517
        });
        var _0x536436 = _0x3a53ff(672),
          _0x3c6cbf = _0x3a53ff(526);
        const _0x26e517 = new class {
          constructor() {
            this.currentUser = null;
            this.userInfoTimer = null;
            this.currentToken = null;
          }
          isPlanExpired(_0x438593) {
            return !_0x438593.planEndTime || new Date(_0x438593.planEndTime) < new Date();
          }
          async saveCredentials(_0x1ff815, _0x2c7402, _0x2fdf54 = null) {
            const _0x5ef297 = {
              savedUsername: _0x1ff815,
              savedPassword: _0x2c7402,
              token: _0x2fdf54
            };
            _0x2fdf54 && (this.currentToken = _0x2fdf54);
            await _0x536436.hC.set(_0x5ef297);
          }
          async getToken() {
            if (this.currentToken) {
              return this.currentToken;
            }
            const _0x210478 = await _0x536436.hC.get(["token"]);
            this.currentToken = _0x210478.token;
            return _0x210478.token;
          }
          async checkLoginStatus(_0x5b900a = !0) {
            try {
              return await this.updateUserInfo(_0x5b900a);
            } catch (_0x5a75f7) {
              return !1;
            }
          }
          async updateUserInfo(_0x7c9466 = !0) {
            try {
              const _0xeae336 = await _0x3c6cbf.A.getUserInfo();
              return !(1000 !== _0xeae336.code || !_0xeae336.data || (this.currentUser = _0xeae336.data, this.isPlanExpired(_0xeae336.data) ? (alert("您的套餐已过期，请续费后使用"), await this.logout(), 1) : (_0xeae336.data.cookie && _0x7c9466 && (await _0x536436.UM.importCookies(_0xeae336.data.cookie), await _0x536436.UM.reloadPlugin(), await _0x536436.UM.redirectIndex()), 0)));
            } catch (_0x2f8003) {
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
          async login(_0x3c972e, _0xa7a08c) {
            try {
              const _0x3d83e6 = await _0x3c6cbf.A.login(_0x3c972e, _0xa7a08c);
              if (1000 === _0x3d83e6.code) {
                const _0x5ae421 = _0x3d83e6.data?.["token"];
                if (_0x5ae421 && (this.currentToken = _0x5ae421, await this.saveCredentials(_0x3c972e, _0xa7a08c, _0x5ae421)), !(await this.updateUserInfo())) {
                  throw new Error("获取用户信息失败");
                }
                this.startUserInfoTimer();
              }
              return _0x3d83e6;
            } catch (_0x24225c) {
              throw _0x24225c;
            }
          }
          async getSavedCredentials() {
            try {
              const _0x28924d = await _0x536436.hC.get(["savedUsername", "savedPassword"]);
              return {
                savedUsername: _0x28924d.savedUsername || "",
                savedPassword: _0x28924d.savedPassword || ""
              };
            } catch (_0x245840) {
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
            await _0x536436.hC.remove(["token"]);
            await _0x536436.UM.clearCookies();
            await _0x536436.UM.reloadPlugin();
            await _0x536436.UM.redirectIndex();
          }
        }();
      },
      526: (_0x56c654, _0x11edbd, _0x310adc) => {
        _0x310adc.d(_0x11edbd, {
          A: () => _0x341454
        });
        var _0x397558 = _0x310adc(956);
        const _0x341454 = new class {
          async login(_0xef833f, _0x33862c) {
            return _0x397558.A.post("/app/sider/user/login", {
              username: _0xef833f,
              password: _0x33862c
            });
          }
          async getNoticeAndQrCode() {
            return _0x397558.A.get("/app/sider/user/getNoticeAndQrCode");
          }
          async getAccounts() {
            return _0x397558.A.get("/app/sider/user/getAccount");
          }
          async selectAccount(_0x57003b) {
            return _0x397558.A.post("/app/sider/user/selectAccount", {
              accountId: _0x57003b
            });
          }
          async getUserInfo() {
            return _0x397558.A.get("/app/sider/user/userinfo");
          }
        }();
      },
      672: (_0xb01fb0, _0x3fa143, _0x5531d7) => {
        _0x5531d7.d(_0x3fa143, {
          UM: () => _0xe803e7,
          hC: () => _0x860c7d
        });
        class _0x860c7d {
          static async get(_0x2f8ab6) {
            return new Promise(_0x72027c => {
              chrome.storage.local.get(_0x2f8ab6, _0x72027c);
            });
          }
          static async set(_0xbe2d41) {
            return new Promise(_0x553fe9 => {
              chrome.storage.local.set(_0xbe2d41, _0x553fe9);
            });
          }
          static async remove(_0xcc55e2) {
            return new Promise(_0x2cd3b1 => {
              chrome.storage.local.remove(_0xcc55e2, _0x2cd3b1);
            });
          }
        }
        class _0xe803e7 {
          static async importCookies(_0xf6fb04) {
            try {
              const _0x57b0d9 = JSON.parse(_0xf6fb04);
              if (!_0x57b0d9.cookies || !Array.isArray(_0x57b0d9.cookies)) {
                throw new Error("无效的cookie格式");
              }
              for (const _0x1ee0a8 of _0x57b0d9.cookies) await chrome.cookies.set({
                url: _0x57b0d9.url,
                name: _0x1ee0a8.name,
                value: _0x1ee0a8.value,
                domain: _0x1ee0a8.domain,
                path: _0x1ee0a8.path,
                secure: _0x1ee0a8.secure,
                httpOnly: _0x1ee0a8.httpOnly,
                sameSite: _0x1ee0a8.sameSite,
                expirationDate: _0x1ee0a8.expirationDate,
                storeId: _0x1ee0a8.storeId
              });
              return !0;
            } catch (_0x486966) {
              alert("导入cookie失败");
              return !1;
            }
          }
          static async reloadPlugin() {
            try {
              const _0x293b73 = (await chrome.management.getAll()).filter(_0x436971 => _0x436971.name.indexOf("Sider: ChatGPT 侧边栏") > -1 && "extension" === _0x436971.type);
              for (const _0x3ebf3b of _0x293b73) {
                await chrome.management.setEnabled(_0x3ebf3b.id, !1);
                await new Promise(_0xdc1304 => setTimeout(_0xdc1304, 500));
                await chrome.management.setEnabled(_0x3ebf3b.id, !0);
              }
            } catch (_0x43e304) {}
          }
          static async clearCookies(_0x15b718 = ".sider.ai") {
            try {
              const _0x3a05bc = await chrome.cookies.getAll({
                domain: _0x15b718
              });
              for (const _0x180a3d of _0x3a05bc) await chrome.cookies.remove({
                url: "https://" + _0x180a3d.domain + _0x180a3d.path,
                name: _0x180a3d.name
              });
              return !0;
            } catch (_0x35ad5f) {
              return !1;
            }
          }
          static async redirectIndex(_0x219207 = "sider.ai") {
            const _0x1ebb25 = await chrome.tabs.query({
              url: "https://" + _0x219207 + "/*"
            });
            if (_0x1ebb25.length > 0) {
              for (const _0x1ca988 of _0x1ebb25) await chrome.tabs.update(_0x1ca988.id, {
                url: "https://sider.ai"
              });
            } else {
              await chrome.tabs.create({
                url: "https://sider.ai",
                active: !0
              });
            }
          }
          static async getCookies(_0xd60008 = "sider.ai") {
            try {
              return {
                url: "https://" + _0xd60008,
                cookies: (await chrome.cookies.getAll({
                  domain: _0xd60008
                })).map(_0x385424 => ({
                  name: _0x385424.name,
                  value: _0x385424.value,
                  domain: _0x385424.domain,
                  path: _0x385424.path,
                  secure: _0x385424.secure,
                  httpOnly: _0x385424.httpOnly,
                  sameSite: _0x385424.sameSite,
                  expirationDate: _0x385424.expirationDate,
                  storeId: _0x385424.storeId
                }))
              };
            } catch (_0x2cf04c) {
              return null;
            }
          }
          static async getCookieString(_0x4193a7 = "sider.ai") {
            try {
              const _0x5bb457 = await this.getCookies(_0x4193a7);
              return _0x5bb457 ? JSON.stringify(_0x5bb457) : "";
            } catch (_0x3c2701) {
              return "";
            }
          }
        }
      },
      956: (_0x347af7, _0x533f21, _0x560603) => {
        _0x560603.d(_0x533f21, {
          A: () => _0x1ba27b
        });
        var _0x85168d = _0x560603(411);
        const _0x1ba27b = new class {
          constructor() {
            this.baseURL = "https://sider.spbst.cn";
          }
          async getHeaders() {
            const _0x468462 = await _0x85168d.A.getToken(),
              _0x401ba7 = {
                "Content-Type": "application/json",
                Authorization: _0x468462
              };
            _0x468462;
            return _0x401ba7;
          }
          async handleResponse(_0x2146f8) {
            const _0x3223af = await _0x2146f8.json();
            return 401 === _0x3223af.code || _0x3223af.needLogin ? (await StorageManager.remove(["token"]), {
              ..._0x3223af,
              needLogin: !0
            }) : _0x3223af;
          }
          async get(_0x3d871e) {
            try {
              const _0x458c4b = await this.getHeaders(),
                _0x255e97 = await fetch("" + this.baseURL + _0x3d871e, {
                  method: "GET",
                  headers: _0x458c4b
                });
              return this.handleResponse(_0x255e97);
            } catch (_0x30472c) {
              throw _0x30472c;
            }
          }
          async post(_0x4d854e, _0x44572c) {
            try {
              const _0x46ea43 = await this.getHeaders(),
                _0x5f0412 = await fetch("" + this.baseURL + _0x4d854e, {
                  method: "POST",
                  headers: _0x46ea43,
                  body: JSON.stringify(_0x44572c)
                });
              return this.handleResponse(_0x5f0412);
            } catch (_0x4390f1) {
              throw _0x4390f1;
            }
          }
        }();
      }
    },
    _0x4d75bd = {};
  function _0x4cb9e7(_0x446fa7) {
    var _0x1cc496 = _0x4d75bd[_0x446fa7];
    if (void 0 !== _0x1cc496) {
      return _0x1cc496.exports;
    }
    _0x4d75bd[_0x446fa7] = {
      exports: {}
    };
    var _0x323251 = _0x4d75bd[_0x446fa7];
    _0x2ccaf5[_0x446fa7](_0x323251, _0x323251.exports, _0x4cb9e7);
    return _0x323251.exports;
  }
  _0x4cb9e7.d = (_0x333fca, _0x99c0f9) => {
    for (var _0x4150e0 in _0x99c0f9) _0x4cb9e7.o(_0x99c0f9, _0x4150e0) && !_0x4cb9e7.o(_0x333fca, _0x4150e0) && Object.defineProperty(_0x333fca, _0x4150e0, {
      enumerable: !0,
      get: _0x99c0f9[_0x4150e0]
    });
  };
  _0x4cb9e7.o = (_0x2afe5e, _0x62c3c5) => Object.prototype.hasOwnProperty.call(_0x2afe5e, _0x62c3c5);
  _0x4cb9e7(526);
  _0x4cb9e7(411);
})();