//Sat May 10 2025 14:45:50 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const resp_geo = {
    longitude: undefined,
    latitude: undefined,
    hash_lonlat: undefined,
    message: undefined,
    code: undefined
  },
  showOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
function showPosition(_0x2f6f6e) {
  let _0x147b31 = _0x2f6f6e.coords.longitude + "$$" + _0x2f6f6e.coords.latitude + "$$0$$Successfully generated..",
    _0x54022b = unescape && encodeURIComponent ? unescape(encodeURIComponent(_0x147b31)) : _0x147b31,
    _0x279c85 = window.btoa ? window.btoa(_0x54022b) : Base64.encode(_0x54022b);
  resp_geo.longitude = _0x2f6f6e.coords.longitude;
  resp_geo.latitude = _0x2f6f6e.coords.latitude;
  resp_geo.message = "Successfully generated..";
  resp_geo.code = 0;
  resp_geo.hash_lonlat = _0x279c85;
}
function showError(_0x9f5d3e) {
  let _0x4bdb56 = "",
    _0x7c16a3,
    _0x487187,
    _0x7cb05 = 0,
    _0x333f66 = "Found";
  switch (_0x9f5d3e.code) {
    case _0x9f5d3e.PERMISSION_DENIED:
      _0x333f66 = "User denied the request for Geolocation..";
      _0x7cb05 = 2;
      break;
    case _0x9f5d3e.POSITION_UNAVAILABLE:
      _0x333f66 = "Location information is unavailable..";
      _0x7cb05 = 3;
      break;
    case _0x9f5d3e.TIMEOUT:
      _0x333f66 = "The request to get user location timed out..";
      _0x7cb05 = 4;
      break;
    case _0x9f5d3e.UNKNOWN_ERROR:
      _0x333f66 = "An unknown error occurred..";
      _0x7cb05 = 5;
      break;
  }
  resp_geo.code = _0x7cb05;
  resp_geo.message = _0x333f66;
  _0x4bdb56 = "$$$$" + _0x7cb05 + "$$" + _0x333f66;
  _0x7c16a3 = unescape && encodeURIComponent ? unescape(encodeURIComponent(_0x4bdb56)) : _0x4bdb56;
  _0x487187 = window.btoa ? window.btoa(_0x7c16a3) : Base64.encode(_0x7c16a3);
  resp_geo.hash_lonlat = _0x487187;
}
try {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError, showOptions);
  } else {
    let value = "$$$$1$$Geolocation is not supported by this browser",
      _var = unescape && encodeURIComponent ? unescape(encodeURIComponent(value)) : value,
      _con = window.btoa ? window.btoa(_var) : Base64.encode(_var);
    resp_geo.message = "Geolocation is not supported by this browser";
    resp_geo.code = 1;
    resp_geo.hash_lonlat = _con;
  }
} catch (_0x1a3da9) {
  let value = "$$$$1$$Geolocation is not supported by this browser",
    _var = unescape && encodeURIComponent ? unescape(encodeURIComponent(value)) : value,
    _con = window.btoa ? window.btoa(_var) : Base64.encode(_var);
  resp_geo.message = "Geolocation is not supported by this browser";
  resp_geo.code = 1;
  resp_geo.hash_lonlat = _con;
}
export { resp_geo };