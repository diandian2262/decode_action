//Sun Apr 06 2025 13:12:05 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(() => {
  'use strict';

  var _0x5d9812 = {
      411: (_0x4f362a, _0x4ddbd5, _0x109c0b) => {
        _0x109c0b.d(_0x4ddbd5, {
          A: () => _0x43975c
        });
        var _0x4398a6 = _0x109c0b(672),
          _0x26d125 = _0x109c0b(526);
        const _0x43975c = new class {
          constructor() {
            this.currentUser = null;
            this.userInfoTimer = null;
            this.currentToken = null;
          }
          isPlanExpired(_0x766a89) {
            return !_0x766a89.planEndTime || new Date(_0x766a89.planEndTime) < new Date();
          }
          async saveCredentials(_0x2171b3, _0x31f98b, _0x48f130 = null) {
            const _0x3be3c5 = {
              savedUsername: _0x2171b3,
              savedPassword: _0x31f98b,
              token: _0x48f130
            };
            _0x48f130 && (this.currentToken = _0x48f130);
            await _0x4398a6.hC.set(_0x3be3c5);
          }
          async getToken() {
            if (this.currentToken) {
              return this.currentToken;
            }
            const _0x4553be = await _0x4398a6.hC.get(["token"]);
            this.currentToken = _0x4553be.token;
            return _0x4553be.token;
          }
          async checkLoginStatus(_0x58000b = !0) {
            try {
              return await this.updateUserInfo(_0x58000b);
            } catch (_0x59909e) {
              return !1;
            }
          }
          async updateUserInfo(_0x5d6fe1 = !0) {
            try {
              const _0x4bce1d = await _0x26d125.A.getUserInfo();
              return !(1000 !== _0x4bce1d.code || !_0x4bce1d.data || (this.currentUser = _0x4bce1d.data, this.isPlanExpired(_0x4bce1d.data) ? (alert("您的套餐已过期，请续费后使用"), await this.logout(), 1) : (_0x4bce1d.data.cookie && _0x5d6fe1 && (await _0x4398a6.UM.importCookies(_0x4bce1d.data.cookie), await _0x4398a6.UM.reloadPlugin(), await _0x4398a6.UM.redirectIndex()), 0)));
            } catch (_0x26d887) {
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
          async login(_0x30a245, _0x559a5c) {
            try {
              const _0x29ff2a = await _0x26d125.A.login(_0x30a245, _0x559a5c);
              if (1000 === _0x29ff2a.code) {
                const _0x161dc2 = _0x29ff2a.data?.["token"];
                if (_0x161dc2 && (this.currentToken = _0x161dc2, await this.saveCredentials(_0x30a245, _0x559a5c, _0x161dc2)), !(await this.updateUserInfo())) {
                  throw new Error("获取用户信息失败");
                }
                this.startUserInfoTimer();
              }
              return _0x29ff2a;
            } catch (_0x16c3fa) {
              throw _0x16c3fa;
            }
          }
          async getSavedCredentials() {
            try {
              const _0x486eaa = await _0x4398a6.hC.get(["savedUsername", "savedPassword"]);
              return {
                savedUsername: _0x486eaa.savedUsername || "",
                savedPassword: _0x486eaa.savedPassword || ""
              };
            } catch (_0x57cd73) {
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
            await _0x4398a6.hC.remove(["token"]);
            await _0x4398a6.UM.clearCookies();
            await _0x4398a6.UM.reloadPlugin();
            await _0x4398a6.UM.redirectIndex();
          }
        }();
      },
      526: (_0x4eef10, _0xede952, _0x40f378) => {
        _0x40f378.d(_0xede952, {
          A: () => _0x1e4a9f
        });
        var _0x642756 = _0x40f378(956);
        const _0x1e4a9f = new class {
          async login(_0x387f62, _0x3ab1a3) {
            return _0x642756.A.post("/app/sider/user/login", {
              username: _0x387f62,
              password: _0x3ab1a3
            });
          }
          async getNoticeAndQrCode() {
            return _0x642756.A.get("/app/sider/user/getNoticeAndQrCode");
          }
          async getAccounts() {
            return _0x642756.A.get("/app/sider/user/getAccount");
          }
          async selectAccount(_0xfcdb2d) {
            return _0x642756.A.post("/app/sider/user/selectAccount", {
              accountId: _0xfcdb2d
            });
          }
          async getUserInfo() {
            return _0x642756.A.get("/app/sider/user/userinfo");
          }
        }();
      },
      672: (_0x3a33e2, _0x25b738, _0x1ef7a4) => {
        _0x1ef7a4.d(_0x25b738, {
          UM: () => _0x5c0e76,
          hC: () => _0x1173c0
        });
        class _0x1173c0 {
          static async get(_0x4688ef) {
            return new Promise(_0x172ca0 => {
              chrome.storage.local.get(_0x4688ef, _0x172ca0);
            });
          }
          static async set(_0x36f9a9) {
            return new Promise(_0x4337ba => {
              chrome.storage.local.set(_0x36f9a9, _0x4337ba);
            });
          }
          static async remove(_0x1655a1) {
            return new Promise(_0x58dc15 => {
              chrome.storage.local.remove(_0x1655a1, _0x58dc15);
            });
          }
        }
        class _0x5c0e76 {
          static async importCookies(_0x4dfda6) {
            try {
              const _0x230e10 = JSON.parse(_0x4dfda6);
              if (!_0x230e10.cookies || !Array.isArray(_0x230e10.cookies)) {
                throw new Error("无效的cookie格式");
              }
              for (const _0x121717 of _0x230e10.cookies) await chrome.cookies.set({
                url: _0x230e10.url,
                name: _0x121717.name,
                value: _0x121717.value,
                domain: _0x121717.domain,
                path: _0x121717.path,
                secure: _0x121717.secure,
                httpOnly: _0x121717.httpOnly,
                sameSite: _0x121717.sameSite,
                expirationDate: _0x121717.expirationDate,
                storeId: _0x121717.storeId
              });
              return !0;
            } catch (_0x5d31ac) {
              alert("导入cookie失败");
              return !1;
            }
          }
          static async reloadPlugin() {
            try {
              const _0x51e7a9 = (await chrome.management.getAll()).filter(_0x5bb06e => _0x5bb06e.name.indexOf("Sider: ChatGPT 侧边栏") > -1 && "extension" === _0x5bb06e.type);
              for (const _0xcce3e8 of _0x51e7a9) {
                await chrome.management.setEnabled(_0xcce3e8.id, !1);
                await new Promise(_0x46ba6c => setTimeout(_0x46ba6c, 500));
                await chrome.management.setEnabled(_0xcce3e8.id, !0);
              }
            } catch (_0xcf8a7f) {}
          }
          static async clearCookies(_0x30f95b = ".sider.ai") {
            try {
              const _0x32727d = await chrome.cookies.getAll({
                domain: _0x30f95b
              });
              for (const _0x2762c8 of _0x32727d) await chrome.cookies.remove({
                url: "https://" + _0x2762c8.domain + _0x2762c8.path,
                name: _0x2762c8.name
              });
              return !0;
            } catch (_0x26c80e) {
              return !1;
            }
          }
          static async redirectIndex(_0x2024a7 = "sider.ai") {
            const _0x116069 = await chrome.tabs.query({
              url: "https://" + _0x2024a7 + "/*"
            });
            if (_0x116069.length > 0) {
              for (const _0x238e75 of _0x116069) await chrome.tabs.update(_0x238e75.id, {
                url: "https://sider.ai"
              });
            } else {
              await chrome.tabs.create({
                url: "https://sider.ai",
                active: !0
              });
            }
          }
          static async getCookies(_0x3e0024 = "sider.ai") {
            try {
              return {
                url: "https://" + _0x3e0024,
                cookies: (await chrome.cookies.getAll({
                  domain: _0x3e0024
                })).map(_0x57fa46 => ({
                  name: _0x57fa46.name,
                  value: _0x57fa46.value,
                  domain: _0x57fa46.domain,
                  path: _0x57fa46.path,
                  secure: _0x57fa46.secure,
                  httpOnly: _0x57fa46.httpOnly,
                  sameSite: _0x57fa46.sameSite,
                  expirationDate: _0x57fa46.expirationDate,
                  storeId: _0x57fa46.storeId
                }))
              };
            } catch (_0x31557a) {
              return null;
            }
          }
          static async getCookieString(_0x4eb87b = "sider.ai") {
            try {
              const _0x47e9e3 = await this.getCookies(_0x4eb87b);
              return _0x47e9e3 ? JSON.stringify(_0x47e9e3) : "";
            } catch (_0x54ae59) {
              return "";
            }
          }
        }
      },
      956: (_0x5c3535, _0x3170ff, _0x20a878) => {
        _0x20a878.d(_0x3170ff, {
          A: () => _0x1a6058
        });
        var _0x2de152 = _0x20a878(411);
        const _0x1a6058 = new class {
          constructor() {
            this.baseURL = "https://sider.spbst.cn";
          }
          async getHeaders() {
            const _0x223509 = await _0x2de152.A.getToken(),
              _0x25d247 = {
                "Content-Type": "application/json",
                Authorization: _0x223509
              };
            _0x223509;
            return _0x25d247;
          }
          async handleResponse(_0x53f4f5) {
            const _0x1e3015 = await _0x53f4f5.json();
            return 401 === _0x1e3015.code || _0x1e3015.needLogin ? (await StorageManager.remove(["token"]), {
              ..._0x1e3015,
              needLogin: !0
            }) : _0x1e3015;
          }
          async get(_0x205b27) {
            try {
              const _0x562643 = await this.getHeaders(),
                _0x145b34 = await fetch("" + this.baseURL + _0x205b27, {
                  method: "GET",
                  headers: _0x562643
                });
              return this.handleResponse(_0x145b34);
            } catch (_0x26acd2) {
              throw _0x26acd2;
            }
          }
          async post(_0x1f90f6, _0xecf0c5) {
            try {
              const _0x2c63ae = await this.getHeaders(),
                _0xc590d = await fetch("" + this.baseURL + _0x1f90f6, {
                  method: "POST",
                  headers: _0x2c63ae,
                  body: JSON.stringify(_0xecf0c5)
                });
              return this.handleResponse(_0xc590d);
            } catch (_0x2e57dc) {
              throw _0x2e57dc;
            }
          }
        }();
      }
    },
    _0x59907b = {};
  function _0x9615ed(_0x1fcb53) {
    var _0x12c2d7 = _0x59907b[_0x1fcb53];
    if (void 0 !== _0x12c2d7) {
      return _0x12c2d7.exports;
    }
    _0x59907b[_0x1fcb53] = {
      exports: {}
    };
    var _0x104684 = _0x59907b[_0x1fcb53];
    _0x5d9812[_0x1fcb53](_0x104684, _0x104684.exports, _0x9615ed);
    return _0x104684.exports;
  }
  _0x9615ed.d = (_0x4ccdb8, _0x497109) => {
    for (var _0x3dbf56 in _0x497109) _0x9615ed.o(_0x497109, _0x3dbf56) && !_0x9615ed.o(_0x4ccdb8, _0x3dbf56) && Object.defineProperty(_0x4ccdb8, _0x3dbf56, {
      enumerable: !0,
      get: _0x497109[_0x3dbf56]
    });
  };
  _0x9615ed.o = (_0x3d8e88, _0x27880b) => Object.prototype.hasOwnProperty.call(_0x3d8e88, _0x27880b);
  _0x9615ed(526);
})();