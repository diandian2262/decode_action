//Sun Apr 06 2025 13:46:16 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(() => {
  'use strict';

  var _0x207f07 = {
      411: (_0x5e2ccb, _0x4ce120, _0x30d1c7) => {
        _0x30d1c7.d(_0x4ce120, {
          A: () => _0x5bfa8f
        });
        var _0x41e879 = _0x30d1c7(672),
          _0xc55123 = _0x30d1c7(526);
        const _0x5bfa8f = new class {
          constructor() {
            this.currentUser = null;
            this.userInfoTimer = null;
            this.currentToken = null;
          }
          isPlanExpired(_0x589392) {
            return !_0x589392.planEndTime || new Date(_0x589392.planEndTime) < new Date();
          }
          async saveCredentials(_0x342a4c, _0xa0697, _0x4fea4f = null) {
            const _0x40ef21 = {
              savedUsername: _0x342a4c,
              savedPassword: _0xa0697,
              token: _0x4fea4f
            };
            _0x4fea4f && (this.currentToken = _0x4fea4f);
            await _0x41e879.hC.set(_0x40ef21);
          }
          async getToken() {
            if (this.currentToken) {
              return this.currentToken;
            }
            const _0x389e0c = await _0x41e879.hC.get(["token"]);
            this.currentToken = _0x389e0c.token;
            return _0x389e0c.token;
          }
          async checkLoginStatus(_0x6d387c = !0) {
            try {
              return await this.updateUserInfo(_0x6d387c);
            } catch (_0x594047) {
              return !1;
            }
          }
          async updateUserInfo(_0x43b209 = !0) {
            try {
              const _0x150cfb = await _0xc55123.A.getUserInfo();
              return !(1000 !== _0x150cfb.code || !_0x150cfb.data || (this.currentUser = _0x150cfb.data, this.isPlanExpired(_0x150cfb.data) ? (alert("您的套餐已过期，请续费后使用"), await this.logout(), 1) : (_0x150cfb.data.cookie && _0x43b209 && (await _0x41e879.UM.importCookies(_0x150cfb.data.cookie), await _0x41e879.UM.reloadPlugin(), await _0x41e879.UM.redirectIndex()), 0)));
            } catch (_0x40de46) {
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
          async login(_0x74c74c, _0x37afd8) {
            try {
              const _0x2b9903 = await _0xc55123.A.login(_0x74c74c, _0x37afd8);
              if (1000 === _0x2b9903.code) {
                const _0x10787e = _0x2b9903.data?.["token"];
                if (_0x10787e && (this.currentToken = _0x10787e, await this.saveCredentials(_0x74c74c, _0x37afd8, _0x10787e)), !(await this.updateUserInfo())) {
                  throw new Error("获取用户信息失败");
                }
                this.startUserInfoTimer();
              }
              return _0x2b9903;
            } catch (_0x254105) {
              throw _0x254105;
            }
          }
          async getSavedCredentials() {
            try {
              const _0x22992e = await _0x41e879.hC.get(["savedUsername", "savedPassword"]);
              return {
                savedUsername: _0x22992e.savedUsername || "",
                savedPassword: _0x22992e.savedPassword || ""
              };
            } catch (_0x9f3eeb) {
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
            await _0x41e879.hC.remove(["token"]);
            await _0x41e879.UM.clearCookies();
            await _0x41e879.UM.reloadPlugin();
            await _0x41e879.UM.redirectIndex();
          }
        }();
      },
      526: (_0x37c708, _0x468653, _0x3b3ebd) => {
        _0x3b3ebd.d(_0x468653, {
          A: () => _0xa8c283
        });
        var _0x5342ff = _0x3b3ebd(956);
        const _0xa8c283 = new class {
          async login(_0x55030c, _0x50cb73) {
            return _0x5342ff.A.post("/app/sider/user/login", {
              username: _0x55030c,
              password: _0x50cb73
            });
          }
          async getNoticeAndQrCode() {
            return _0x5342ff.A.get("/app/sider/user/getNoticeAndQrCode");
          }
          async getAccounts() {
            return _0x5342ff.A.get("/app/sider/user/getAccount");
          }
          async selectAccount(_0x5e54fa) {
            return _0x5342ff.A.post("/app/sider/user/selectAccount", {
              accountId: _0x5e54fa
            });
          }
          async getUserInfo() {
            return _0x5342ff.A.get("/app/sider/user/userinfo");
          }
        }();
      },
      672: (_0x167558, _0x528d72, _0x698103) => {
        _0x698103.d(_0x528d72, {
          UM: () => _0x52bc3f,
          hC: () => _0x1a17c0
        });
        class _0x1a17c0 {
          static async get(_0x265ad1) {
            return new Promise(_0x20f3df => {
              chrome.storage.local.get(_0x265ad1, _0x20f3df);
            });
          }
          static async set(_0x47ec33) {
            return new Promise(_0x166467 => {
              chrome.storage.local.set(_0x47ec33, _0x166467);
            });
          }
          static async remove(_0x40acc1) {
            return new Promise(_0x2a4f26 => {
              chrome.storage.local.remove(_0x40acc1, _0x2a4f26);
            });
          }
        }
        class _0x52bc3f {
          static async importCookies(_0x3e25fb) {
            try {
              const _0x33827d = JSON.parse(_0x3e25fb);
              if (!_0x33827d.cookies || !Array.isArray(_0x33827d.cookies)) {
                throw new Error("无效的cookie格式");
              }
              for (const _0x326435 of _0x33827d.cookies) await chrome.cookies.set({
                url: _0x33827d.url,
                name: _0x326435.name,
                value: _0x326435.value,
                domain: _0x326435.domain,
                path: _0x326435.path,
                secure: _0x326435.secure,
                httpOnly: _0x326435.httpOnly,
                sameSite: _0x326435.sameSite,
                expirationDate: _0x326435.expirationDate,
                storeId: _0x326435.storeId
              });
              return !0;
            } catch (_0x4f1329) {
              alert("导入cookie失败");
              return !1;
            }
          }
          static async reloadPlugin() {
            try {
              const _0x247abd = (await chrome.management.getAll()).filter(_0x1863df => _0x1863df.name.indexOf("Sider: ChatGPT 侧边栏") > -1 && "extension" === _0x1863df.type);
              for (const _0x1af3ae of _0x247abd) {
                await chrome.management.setEnabled(_0x1af3ae.id, !1);
                await new Promise(_0x11ec5d => setTimeout(_0x11ec5d, 500));
                await chrome.management.setEnabled(_0x1af3ae.id, !0);
              }
            } catch (_0x36a50f) {}
          }
          static async clearCookies(_0x2ed4ea = ".sider.ai") {
            try {
              const _0x38c891 = await chrome.cookies.getAll({
                domain: _0x2ed4ea
              });
              for (const _0x195ddf of _0x38c891) await chrome.cookies.remove({
                url: "https://" + _0x195ddf.domain + _0x195ddf.path,
                name: _0x195ddf.name
              });
              return !0;
            } catch (_0x1cd883) {
              return !1;
            }
          }
          static async redirectIndex(_0xcb9eed = "sider.ai") {
            const _0x2919c8 = await chrome.tabs.query({
              url: "https://" + _0xcb9eed + "/*"
            });
            if (_0x2919c8.length > 0) {
              for (const _0x29bba2 of _0x2919c8) await chrome.tabs.update(_0x29bba2.id, {
                url: "https://sider.ai"
              });
            } else {
              await chrome.tabs.create({
                url: "https://sider.ai",
                active: !0
              });
            }
          }
          static async getCookies(_0x3dbefd = "sider.ai") {
            try {
              return {
                url: "https://" + _0x3dbefd,
                cookies: (await chrome.cookies.getAll({
                  domain: _0x3dbefd
                })).map(_0x581f2f => ({
                  name: _0x581f2f.name,
                  value: _0x581f2f.value,
                  domain: _0x581f2f.domain,
                  path: _0x581f2f.path,
                  secure: _0x581f2f.secure,
                  httpOnly: _0x581f2f.httpOnly,
                  sameSite: _0x581f2f.sameSite,
                  expirationDate: _0x581f2f.expirationDate,
                  storeId: _0x581f2f.storeId
                }))
              };
            } catch (_0x112881) {
              return null;
            }
          }
          static async getCookieString(_0x4b0410 = "sider.ai") {
            try {
              const _0x3a5fde = await this.getCookies(_0x4b0410);
              return _0x3a5fde ? JSON.stringify(_0x3a5fde) : "";
            } catch (_0x5d0489) {
              return "";
            }
          }
        }
      },
      956: (_0xccc6d, _0xb4111e, _0x3d448e) => {
        _0x3d448e.d(_0xb4111e, {
          A: () => _0x4dac1d
        });
        var _0x1df2f4 = _0x3d448e(411);
        const _0x4dac1d = new class {
          constructor() {
            this.baseURL = "https://sider.spbst.cn";
          }
          async getHeaders() {
            const _0x2ed4c0 = await _0x1df2f4.A.getToken(),
              _0x58d430 = {
                "Content-Type": "application/json",
                Authorization: _0x2ed4c0
              };
            _0x2ed4c0;
            return _0x58d430;
          }
          async handleResponse(_0x4d50f3) {
            const _0x6ac4be = await _0x4d50f3.json();
            return 401 === _0x6ac4be.code || _0x6ac4be.needLogin ? (await StorageManager.remove(["token"]), {
              ..._0x6ac4be,
              needLogin: !0
            }) : _0x6ac4be;
          }
          async get(_0x40eb78) {
            try {
              const _0x4ef416 = await this.getHeaders(),
                _0x1ad94c = await fetch("" + this.baseURL + _0x40eb78, {
                  method: "GET",
                  headers: _0x4ef416
                });
              return this.handleResponse(_0x1ad94c);
            } catch (_0x3727bd) {
              throw _0x3727bd;
            }
          }
          async post(_0x190901, _0x178671) {
            try {
              const _0x404dd9 = await this.getHeaders(),
                _0x4b9a23 = await fetch("" + this.baseURL + _0x190901, {
                  method: "POST",
                  headers: _0x404dd9,
                  body: JSON.stringify(_0x178671)
                });
              return this.handleResponse(_0x4b9a23);
            } catch (_0x254525) {
              throw _0x254525;
            }
          }
        }();
      }
    },
    _0x481305 = {};
  function _0x1ac242(_0x10d3f5) {
    var _0x451744 = _0x481305[_0x10d3f5];
    if (void 0 !== _0x451744) {
      return _0x451744.exports;
    }
    _0x481305[_0x10d3f5] = {
      exports: {}
    };
    var _0x1863cc = _0x481305[_0x10d3f5];
    _0x207f07[_0x10d3f5](_0x1863cc, _0x1863cc.exports, _0x1ac242);
    return _0x1863cc.exports;
  }
  _0x1ac242.d = (_0x867006, _0x3025b1) => {
    for (var _0x5c9147 in _0x3025b1) _0x1ac242.o(_0x3025b1, _0x5c9147) && !_0x1ac242.o(_0x867006, _0x5c9147) && Object.defineProperty(_0x867006, _0x5c9147, {
      enumerable: !0,
      get: _0x3025b1[_0x5c9147]
    });
  };
  _0x1ac242.o = (_0x150afd, _0x3af489) => Object.prototype.hasOwnProperty.call(_0x150afd, _0x3af489);
  _0x1ac242(411);
})();