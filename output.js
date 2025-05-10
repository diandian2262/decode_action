//Sat May 10 2025 17:33:36 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
console.log("\n %c 舞曲主题 by Hong? %c QQ:122366685(模板开发) \n\n", "color: #fadfa3; background: #030307; font-size: 24px; padding:5px 0;", "background: #fadfa3; font-size: 24px;padding:5px 0;");
document.addEventListener("DOMContentLoaded", function () {
  var _0x4b4a3b = window.innerHeight,
    _0x4e17d3 = document.documentElement.scrollHeight,
    _0x457fcb = document.querySelector("#content_progress");
  _0x457fcb.max = _0x4e17d3 - _0x4b4a3b;
  _0x457fcb.value = window.scrollY;
  document.addEventListener("scroll", function () {
    _0x457fcb.value = window.scrollY;
  });
});
$(document).ready(function () {
  layui.use(["form", "layer"], function () {
    var _0x1c0029 = layui.form;
    var _0x5799b7 = layui.layer;
    var _0xd87b97 = localStorage.getItem("theme");
    if (_0xd87b97) {
      $("#theme-css").attr("href", "/skin/szuoou/style/" + _0xd87b97 + ".css");
      $("input[name=\"switch\"]").prop("checked", _0xd87b97 === "best-dark");
      _0x1c0029.render("checkbox");
    }
    _0x1c0029.on("switch(cssSwitch)", function (_0x3e999e) {
      var _0x37fdea = _0x3e999e.elem.checked;
      var _0x1e36dd = _0x37fdea ? "best-dark" : "best";
      $("#theme-css").attr("href", "/skin/szuoou/style/" + _0x1e36dd + ".css");
      localStorage.setItem("theme", _0x1e36dd);
      if (_0x37fdea && _0xd87b97 !== "best-dark") {
        _0x5799b7.msg("已切换为深色模式", {
          "icon": 1,
          "time": 3000
        });
      }
    });
  });
});
$(document).ready(function () {
  $(".search-loader").on("click", function () {
    $(".search-wrap").addClass("show");
  });
  $(".search-wrap .layui-icon").on("click", function () {
    $(".search-wrap").removeClass("show");
  });
  $("#nav-loader").on("click", function () {
    $(".menu-dark-backdrop").addClass("in");
    $(".leftMenu").addClass("in");
  });
  $(".mnavinfo .layui-icon").on("click", function () {
    $(".menu-dark-backdrop").removeClass("in");
    $(".leftMenu").removeClass("in");
  });
});
function atips(_0x5a7718) {
  $(_0x5a7718).on("mouseenter", function () {
    var _0x34afd6 = $(this).attr("lay-tips");
    this.index = layer.tips(_0x34afd6, this, {
      "time": -1,
      "maxWidth": 280,
      "tips": [1, "#3A3D49"]
    });
  }).on("mouseleave", function () {
    layer.close(this.index);
  });
}
function Sharetool() {
  layui.use(["layer", "jquery"], function () {
    var _0x33603f = layui.layer;
    var _0x58697c = layui.$;
    var _0x570f8a = new Clipboard(".share-copy");
    _0x570f8a.on("success", function (_0x3aefc8) {
      _0x33603f.msg("复制成功,发给你的小伙伴吧");
    });
    _0x570f8a.on("error", function (_0x20efbc) {
      _0x33603f.msg("复制失败，请手动复制浏览器里的地址");
    });
    _0x58697c(".shareopen").on("click", function () {
      _0x33603f.open({
        "title": "分享",
        "type": 1,
        "shadeClose": true,
        "scroll": false,
        "content": _0x58697c("#bsWXBox").html()
      });
    });
  });
}
function like() {
  let _0x59cc5a = 1;
  const _0x5a1e37 = ["hot-list1", "hot-list2", "hot-list3"];
  const _0x4352b3 = document.querySelector(".release__list .load");
  document.getElementById("hot-cgeall").addEventListener("click", _0x3b2401);
  function _0x3b2401() {
    _0x5a1e37.forEach(_0x2e7132 => {
      document.getElementById(_0x2e7132).style.display = "none";
    });
    _0x4352b3.style.display = "block";
    setTimeout(() => {
      _0x59cc5a = (_0x59cc5a + 1) % _0x5a1e37.length;
      _0x5a1e37.forEach(_0x1f6b24 => {
        document.getElementById(_0x1f6b24).style.display = "none";
      });
      document.getElementById(_0x5a1e37[_0x59cc5a]).style.display = "block";
      _0x4352b3.style.display = "none";
    }, 1000);
  }
  document.getElementById(_0x5a1e37[0]).style.display = "block";
}
function fankui() {
  $(document).ready(function () {
    $("a[data-link]").on("click", function (_0x3ccd2f) {
      _0x3ccd2f.preventDefault();
      var _0x2eb5fb = $(this).data("link");
      var _0x6fd532 = "/plug/jubao/index.php?url=" + encodeURIComponent(_0x2eb5fb);
      layer.open({
        "title": "反馈信息",
        "type": 2,
        "area": ["60%", "50%"],
        "content": _0x6fd532
      });
    });
  });
}
function getsearch(_0x17d99e, _0x424ad3) {
  $("#keytype").val(_0x17d99e);
  layer.msg("已切换到 " + _0x424ad3 + " 搜索", {
    "icon": 1
  });
  $("#keytxt").html(_0x424ad3);
  $("#seh_sort").hide();
}
$(document).ready(function () {
  $(".search-form").on("submit", function () {
    var _0x1f9005 = $(".search-input").val();
    var _0x57ff82 = $("#keytype").val();
    if (_0x1f9005 == "") {
      layer.msg("您还没输入要搜索的内容呢！", {
        "icon": 0
      });
    } else {
      window.location.href = web_url + "include/search.php?ac=" + _0x57ff82 + "&key=" + _0x1f9005;
    }
    return false;
  });
});
$(document).ready(function () {
  $(".back-top").hide();
  $(".back-top").on("click", function () {
    $("html, body").animate({
      "scrollTop": 0
    }, 400);
    return false;
  });
  $(window).bind("scroll resize", function () {
    if ($(window).scrollTop() <= 400) {
      $(".back-top").hide();
    } else {
      $(".back-top").show();
    }
  });
});
function lei_play(_0x57f61a, _0xea41b5) {
  $.ajax({
    "type": "POST",
    "url": web_skin + "play.php",
    "data": {
      "id": "" + _0x57f61a + "",
      "type": "" + _0xea41b5 + ""
    },
    "dataType": "json",
    "success": function (_0x42332b) {
      if (_0xea41b5 == "dance") {
        $("#lei_player").bind($.jPlayer.event.pause, function (_0x47d502) {
          $(".pic").removeClass("active");
          $(".pointer").removeClass("active");
        });
        $("#lei_player").bind($.jPlayer.event.waiting, function (_0x6e75ef) {
          $(".pic").removeClass("active");
          $(".pointer").removeClass("active");
        });
        $("#lei_player").bind($.jPlayer.event.playing, function (_0x4977b7) {
          $(".pic").addClass("active");
          $(".pointer").addClass("active");
          $(".jpmute").css("display", "block");
        });
        $("#lei_player").jPlayer({
          "ready": function () {
            $(this).jPlayer("setMedia", {
              "mp3": _0x42332b.url
            });
            $(this).jPlayer("play");
            $(this).jPlayer("volume", 25);
          },
          "ended": function () {
            PlayContorl.playnext();
          },
          "swfPath": web_skin + "js",
          "solution": "html, flash",
          "supplied": "m4a,mp3",
          "wmode": "window"
        });
        startAudioVisualizer();
      } else {
        if (_0x42332b.code == "0") {
          document.getElementById("lei_player").innerHTML = "<div class=\"browser\">" + _0x42332b.error + "</div>";
          layer.msg(_0x42332b.error);
          readylogin();
        } else if (_0x42332b.code == "1") {} else if (_0x42332b.code == "2") {
          layer.msg(_0x42332b.error, {
            "icon": 1,
            "time": 2000
          }, function () {
            location.href = _0x42332b.url;
          });
        } else {
          document.getElementById("lei_player").innerHTML = _0x42332b.error;
        }
      }
    }
  });
  $("#loading").hide();
  $("#lei_player").show();
}
function startAudioVisualizer() {
  const _0x19beeb = document.querySelector("audio");
  _0x19beeb.setAttribute("crossorigin", "anonymous");
  const _0xb12288 = document.getElementById("myCanvas");
  const _0x23ca6d = _0xb12288.getContext("2d");
  function _0xdd9dcc() {
    _0xb12288.width = window.innerWidth * devicePixelRatio;
    _0xb12288.height = window.innerHeight / 3 * devicePixelRatio;
  }
  _0xdd9dcc();
  let _0x315004 = false;
  let _0x5e96ae;
  let _0x2898c2;
  _0x19beeb.onplay = function () {
    if (_0x315004) {
      return;
    }
    const _0x1114fe = new AudioContext();
    const _0x1285a6 = _0x1114fe.createMediaElementSource(_0x19beeb);
    _0x2898c2 = _0x1114fe.createAnalyser();
    _0x2898c2.fftSize = 512;
    _0x5e96ae = new Uint8Array(_0x2898c2.frequencyBinCount);
    _0x1285a6.connect(_0x2898c2);
    _0x2898c2.connect(_0x1114fe.destination);
    _0x315004 = true;
  };
  function _0x5a64c6() {
    requestAnimationFrame(_0x5a64c6);
    const {
      width,
      height
    } = _0xb12288;
    _0x23ca6d.clearRect(0, 0, width, height);
    if (!_0x315004) {
      return;
    }
    _0x2898c2.getByteFrequencyData(_0x5e96ae);
    const _0x1d0a48 = _0x5e96ae.length / 2;
    const _0x463ee6 = width / _0x1d0a48 / 2;
    _0x23ca6d.fillStyle = "#FFFFFF";
    for (let _0x19ea78 = 0; _0x19ea78 < _0x1d0a48; _0x19ea78++) {
      const _0x47b774 = _0x5e96ae[_0x19ea78];
      const _0x40be32 = _0x47b774 / 255 * height;
      const _0x4182a8 = _0x19ea78 * _0x463ee6 + width / 2;
      const _0x2d89fc = width / 2 - (_0x19ea78 + 1) * _0x463ee6;
      const _0x90c4a2 = height - _0x40be32;
      _0x23ca6d.fillRect(_0x4182a8, _0x90c4a2, _0x463ee6 - 2, _0x40be32);
      _0x23ca6d.fillRect(_0x2d89fc, _0x90c4a2, _0x463ee6 - 2, _0x40be32);
    }
  }
  _0x19beeb.play().catch(_0xd05a6f => {});
  _0x5a64c6();
}
function sHits(_0x1a66b0, _0x32f82a) {
  document.writeln("<script src=\"" + web_url + "include/hits.php?ac=" + _0x32f82a + "&id=" + _0x1a66b0 + "\"></script>");
}
function reg() {
  layui.use("layer", function () {
    layer.open({
      "type": 2,
      "title": false,
      "area": ["700px", "460px"],
      "content": "/user/reg.php"
    });
  });
}
function readylogin() {
  $(".lei_popover_mask").fadeIn(100);
  $(".lei_popover").slideDown(200);
}
function closelogin() {
  $(".lei_popover_mask").fadeOut(10);
  $(".lei_popover").slideUp(20);
}
function login() {
  var _0x290028 = $("#cd_name").val();
  var _0x131580 = $("#cd_pass").val();
  if (_0x290028.length == 0) {
    layer.msg("帐号不能为空");
    return false;
  }
  if (_0x131580.length == 0) {
    layer.msg("密码不能为空");
    return false;
  }
  $.ajax({
    "url": web_skin + "login.php?action=dologin",
    "type": "POST",
    "data": {
      "name": _0x290028,
      "pass": _0x131580
    },
    "dataType": "json",
    "success": function (_0x5a29f9) {
      if (_0x5a29f9.code == 1) {
        layer.msg(_0x5a29f9.title, {
          "icon": 6
        });
        getlogin();
      } else {
        layer.msg(_0x5a29f9.error);
        return false;
      }
    }
  });
  return false;
}
function getlogin() {
  $.get(web_skin + "login.php?action=login", function (_0x31ba7f, _0x32de71) {
    if (_0x32de71 == "success") {
      document.getElementById("userinfo").innerHTML = unescape(_0x31ba7f);
      $(function () {
        $(".x5_user").hover(function () {
          $(this).find(".submenu").show(10);
        }, function () {
          $(this).find(".ins").hide(30);
        });
      });
    } else {
      document.getElementById("userinfo").innerHTML = "您请求的页面出现异常错误";
    }
  });
}
function x5music_logout() {
  $.getJSON(web_skin + "login.php?action=logout&random=" + Math.random() + "&callback=?", function (_0x58b855) {
    if (_0x58b855.error == "10001") {
      getlogin();
    } else {
      layer.msg("您请求的页面出现异常错误！");
    }
  });
}
function getdoHits(_0x37adc5, _0x480ba5) {
  $.get(web_skin + "ajax.php?action=goodbad&type=" + _0x480ba5 + "&id=" + _0x37adc5, function (_0x5d1637, _0x5f1bf3) {
    if (_0x5f1bf3 == "success") {
      document.getElementById("doHits").innerHTML = unescape(_0x5d1637);
    } else {
      document.getElementById("doHits").innerHTML = "您请求的页面出现异常错误";
    }
  });
}
function up_down(_0x5ec77c, _0x5622ce, _0x4f4eac) {
  $.getJSON(web_skin + "ajax.php?action=doHits&type=" + _0x4f4eac + "&id=" + _0x5ec77c + "&dowhat=" + _0x5622ce, function (_0x1f23b2) {
    if (_0x1f23b2.code == 1) {
      layer.msg(_0x1f23b2.title, {
        "icon": 1
      });
    } else {
      layer.msg(_0x1f23b2.error, {
        "icon": 2
      });
    }
    getdoHits(_0x5ec77c, _0x4f4eac);
  });
}
function up_fav(_0x4fc533, _0x1ff439) {
  $.getJSON(web_skin + "ajax.php?action=dofav&type=" + _0x1ff439 + "&id=" + _0x4fc533, function (_0x4efb2e) {
    if (_0x4efb2e.code == 1) {
      layer.msg(_0x4efb2e.title, {
        "icon": 1
      });
    } else if (_0x4efb2e.code == 403) {
      layer.msg("请先登录会员帐号！");
      readylogin();
    } else {
      layer.msg(_0x4efb2e.error, {
        "icon": 2
      });
    }
  });
}
function downloadAction(_0x3684f4) {
  var _0x1bf241 = $(_0x3684f4).data("id");
  $.getJSON(web_url + "include/download.php?ac=" + "dj" + "&id=" + _0x1bf241, function (_0x26e77b) {
    if (_0x26e77b.code == 1) {
      layer.open({
        "id": "LAY_layuipro",
        "type": 2,
        "title": "下载",
        "skin": "demo-black-class",
        "area": ["40%", "50%"],
        "content": "/play/download_" + _0x1bf241 + ".html"
      });
    } else if (_0x26e77b.code == 403) {
      layer.msg(_0x26e77b.error);
      readylogin();
    } else if (_0x26e77b.code == 2) {
      layer.msg(_0x26e77b.error, {
        "time": 1000
      }, function () {
        parent.location.href = web_url + "user/space-do-assets-view-vip.html";
      });
    } else if (_0x26e77b.code == 3) {
      layer.msg(_0x26e77b.error, {
        "time": 1000
      }, function () {
        parent.location.href = web_url + "user/space-do-assets-view-topup.html";
      });
    } else {
      layer.msg(_0x26e77b.error);
    }
  });
}
function downloadh5(_0x21a6dd) {
  var _0x5721a4 = $(_0x21a6dd).data("h5did");
  $.getJSON(web_url + "include/download.php?ac=dj&id=" + _0x5721a4, function (_0x57d503) {
    if (_0x57d503.code == 1) {
      layer.confirm("本首音乐24小时内只扣除一次金币，VIP用户任意下载所有音乐不扣金币。", {
        "btn": ["确定", "取消"]
      }, function (_0x162c31) {
        window.open(web_url + "include/x5music.down.php?action=dj&id=" + _0x5721a4, "_blank");
        layer.close(_0x162c31);
      }, function (_0x529265) {
        layer.close(_0x529265);
      });
    } else if (_0x57d503.code == 403) {
      layer.msg(_0x57d503.error);
      readylogin();
    } else if (_0x57d503.code == 2) {
      layer.msg(_0x57d503.error, {
        "time": 1000
      }, function () {
        parent.location.href = web_url + "user/space-do-assets-view-vip.html";
      });
    } else if (_0x57d503.code == 3) {
      layer.msg(_0x57d503.error, {
        "time": 1000
      }, function () {
        parent.location.href = web_url + "user/space-do-assets-view-topup.html";
      });
    } else {
      layer.msg(_0x57d503.error);
    }
  });
}
function u_down(_0x3b3c73, _0x194689) {
  $.getJSON(web_url + "include/download.php?ac=" + _0x194689 + "&id=" + _0x3b3c73, function (_0x2b346e) {
    if (_0x2b346e.code == 1) {
      parent.location.href = _0x2b346e.title;
    } else if (_0x2b346e.code == 403) {
      layer.msg(_0x2b346e.error);
      readylogin();
    } else if (_0x2b346e.code == 2) {
      layer.msg(_0x2b346e.error, {
        "time": 1000
      }, function () {
        parent.location.href = web_url + "user/space-do-assets-view-vip.html";
      });
    } else if (_0x2b346e.code == 3) {
      layer.msg(_0x2b346e.error, {
        "time": 1000
      }, function () {
        parent.location.href = web_url + "user/space-do-assets-view-topup.html";
      });
    } else {
      layer.msg(_0x2b346e.error);
    }
  });
}
var PLAYER = {
  "playingid": 0,
  "page": 1,
  "playlist_menu": function (_0x389bd9) {
    var _0x448fe8 = 0;
    for (_0x448fe8 = 0; _0x448fe8 < 9; _0x448fe8++) {
      if (_0x448fe8 == _0x389bd9) {
        $("#pt" + _0x448fe8).prop("class", "pton");
      } else {
        $("#pt" + _0x448fe8).prop("class", "ptoff");
      }
    }
  },
  "playlist": function (_0xd51728, _0x42a90e, _0x5352f3) {
    this.page = _0x5352f3;
    this.playingid = _0x42a90e;
    switch (_0xd51728) {
      case 0:
        var _0x54430b = GetCookie("musicls");
        this.crlist(web_skin + "music.php?ac=getmusic", "ids=" + _0x54430b, 0);
        this.playlist_menu(0);
        break;
      case 1:
        var _0x28aa34 = GetCookie("x5musiclog");
        this.crlist(web_skin + "music.php?ac=getmusic", "ids=" + _0x28aa34, 2);
        this.playlist_menu(1);
        break;
      case 2:
        $.getJSON(web_skin + "music.php?ac=islogin", function (_0x1d269d) {
          if (_0x1d269d.code == 403) {
            layer.msg(_0x1d269d.error);
            readylogin();
          }
        });
        this.crlist(web_skin + "music.php", "ac=fav", 1);
        this.playlist_menu(2);
        break;
      case 3:
        this.crlist(web_skin + "music.php", "ac=new", 2);
        this.playlist_menu(3);
        break;
      case 4:
        this.crlist(web_skin + "music.php", "ac=class&id=" + PLAYCLASSID, 3);
        this.playlist_menu(4);
        break;
      case 5:
        this.crlist(web_skin + "music.php", "ac=love", 4);
        this.playlist_menu(5);
        break;
    }
  },
  "crlist": function (_0x48072b, _0x40d89c, _0x27c875) {
    $("#playlist_ct").html("<div id=\"playlist_ct1\"><div class=\"load1\"><img src=\"" + web_skin + "images/loading.gif\" style=\"width:120px;\"></div></div>");
    $.ajax({
      "type": "get",
      "url": _0x48072b,
      "timeout": 10000,
      "dataType": "json",
      "error": function (_0xdbb0c8, _0x178f47, _0x4b8d18) {
        $("#playlist_ct").html("<div id='playlist_ct1'><div class='nonere'>错误数据...</div></div>");
      },
      "data": _0x40d89c,
      "success": function (_0x36dde5) {
        if (_0x36dde5.code == 0) {
          rehtml = PLAYER.pushhtml(_0x36dde5, _0x27c875);
          $("#playlist_ct").html(rehtml);
          $("#selall").click(function () {
            $(".selmusic").prop("checked", $(this).prop("checked"));
            var _0x23e507 = "";
            $(".selmusic").each(function (_0x5c46b7) {
              if (this.checked == true) {
                _0x23e507 = _0x23e507 + this.value + ",";
              }
            });
            $("#allid").val(_0x23e507);
          });
          $(".selmusic").click(function () {
            var _0x4f2416 = "";
            $(".selmusic").each(function (_0x4c8d8d) {
              if (this.checked == true) {
                _0x4f2416 = _0x4f2416 + this.value + ",";
              }
            });
            $("#allid").val(_0x4f2416);
          });
        } else {
          $("#playlist_ct").html("<div id='playlist_ct1'><div class='nonere'>返回异常，请重试一次...</div></div>");
        }
      }
    });
  },
  "pushhtml": function (_0x3b96df, _0x253e12) {
    if (_0x253e12 == 0) {
      listhtml = "<div id='playlist_ct1'>";
      if (_0x3b96df.data == null) {
        listhtml += "<div class='nonere'>暂无数据...</div>";
      } else {
        for (i = 0; i < _0x3b96df.data.length; i++) {
          i % 2 == 0 ? cls = "td1" : cls = "td2";
          cls2 = "num";
          if (PLAYINGID == _0x3b96df.data[i].id) {
            cls = "td3";
            cls2 = "num2";
          }
          listhtml += "<ul class='" + cls + "'";
          if (i == 0) {
            listhtml += " style='border-top:0px;'";
          }
          listhtml += " data='" + cls + "' id='tempdellist" + _0x3b96df.data[i].id + "'>";
          listhtml += "<div class=\"" + cls2 + "\"><label class=\"lyear-checkbox\"><input class=\"selmusic\" id=\"musicid" + i + "\" type=\"checkbox\" value=\"" + _0x3b96df.data[i].id + "\"/><span></span></label></div>";
          listhtml += "<div class='bt'><a href='" + _0x3b96df.data[i].url + "' title='" + _0x3b96df.data[i].musicname + "'>" + _0x3b96df.data[i].musicname + "</a></div>";
          listhtml += "<div class='icodel' ><a href='javascript:void(0)' class='layui-icon layui-icon-close' onclick='PLAYER.delplaylist(" + _0x3b96df.data[i].id + ")'></a></div></ul>";
        }
        listhtml += "</div>";
        listhtml += "<div id='playlist_ct2'>";
        listhtml += "<div class=\"all-checkbox\"><label class=\"lyear-checkbox\"><input name=\"selall\" id=\"selall\" type=\"checkbox\"/><span>全选</span></label>";
        listhtml += "<div class=\"btns\"><a class=\"btn\" onclick=\"PLAYER.delplaylist($('#allid').val());\" style=\"margin:0 15px\">删除所选</a>";
        listhtml += "<a class=\"btn\" onclick=\"PLAYER.clear()\">清空列表</a><input name=\"allid\" id=\"allid\" type=\"hidden\" /></div></div>";
      }
      return listhtml;
    } else {
      listhtml = "<div id='playlist_ct1'>";
      if (_0x3b96df.data == null) {
        listhtml += "<div class='nonere'>暂无数据...</div>";
      } else {
        for (i = 0; i < _0x3b96df.data.length; i++) {
          i % 2 == 0 ? cls = "td1" : cls = "td2";
          cls2 = "num";
          if (PLAYINGID == _0x3b96df.data[i].id) {
            cls = "td3";
            cls2 = "num2";
          }
          listhtml += "<ul class='" + cls + "'";
          if (i == 0) {
            listhtml += " style='border-top:0px;'";
          }
          listhtml += " data='" + cls + "' id='tempdellist" + _0x3b96df.data[i].id + "'>";
          listhtml += "<div class=\"" + cls2 + "\"><label class=\"lyear-checkbox\"><input class=\"selmusic\" id=\"musicid" + i + "\" type=\"checkbox\" value=\"" + _0x3b96df.data[i].id + "\"/><span></span></label></div>";
          listhtml += "<div class='bt'><a href='" + _0x3b96df.data[i].url + "' title='" + _0x3b96df.data[i].musicname + "'>" + _0x3b96df.data[i].musicname + "</a></div>";
          listhtml += "<div class='icoadd' ><a href='javascript:void(0)' class='layui-icon layui-icon-add-1' onclick='PLAYER.addplaylist_(" + _0x3b96df.data[i].id + ")'></a></div></ul>";
        }
        listhtml += "</div>";
        listhtml += "<div id='playlist_ct2'>";
        listhtml += "<div class=\"all-checkbox\"><label class=\"lyear-checkbox\"><input name=\"selall\" id=\"selall\" type=\"checkbox\"/><span>全选</span></label>";
        listhtml += "<div class='btns'><a class='btn' onclick='PLAYER.addplaylist_($(\"#allid\").val());' style='margin-left:15px'>添加到播放列表</a><input name='allid' id='allid' type='hidden' /></div></div>";
      }
      return listhtml;
    }
  },
  "clear": function () {
    SetCookie("musicls", "");
    $("#playlist_ct").html("<div id='playlist_ct1'><div class='nonere'>暂无数据...</div></div>");
  },
  "delloglist": function (_0x650a8f, _0x522f4c, _0x4a6da9) {
    if (_0x650a8f == "") {
      _0x650a8f = $("#allid").val();
    }
    if (_0x650a8f != "") {
      _0x650a8f = _0x650a8f + ",";
      arr = _0x650a8f.split(",");
      for (i = 0; i < arr.length; i++) {
        if (arr[i] != "") {
          tc = GetCookie("musiclog");
          tc = tc.replace("|" + arr[i] + "|,", "");
          SetCookie("musiclog", tc);
        }
      }
      this.playlist(1, _0x522f4c, _0x4a6da9);
    }
  },
  "dellogall": function () {
    SetCookie("musiclog", "");
    this.playlist(1, "", 1);
  },
  "delplaylist": function (_0x31fe9f) {
    if (_0x31fe9f == "") {
      _0x31fe9f = $("#allid").val();
    }
    if (_0x31fe9f != "") {
      _0x31fe9f = _0x31fe9f + ",";
      arr = _0x31fe9f.split(",");
      for (i = 0; i < arr.length; i++) {
        if (arr[i] != "") {
          tc = GetCookie("musicls");
          tc = tc.replace("|" + arr[i] + "|,", "");
          SetCookie("musicls", tc);
          $("#tempdellist" + arr[i]).html("");
          $("#tempdellist" + arr[i]).hide();
        }
      }
    }
  },
  "addplaylog": function (_0x371f26) {
    if (isNaN(_0x371f26) == false) {
      var _0x20f26b = GetCookie("x5musiclog");
      var _0x528959 = "|" + _0x371f26 + "|";
      if (_0x20f26b.indexOf(_0x528959) == -1) {
        _0x20f26b = _0x528959 + "," + _0x20f26b;
        var _0x1cf952 = _0x20f26b.split(",");
        var _0x20c661 = "";
        if (_0x1cf952.length > 201) {
          for (i = 0; i <= 200; i++) {
            if (i < _0x1cf952.length) {
              if (_0x1cf952[i] != "") {
                if (_0x20c661 == "") {
                  _0x20c661 = _0x1cf952[i];
                } else {
                  _0x20c661 = _0x20c661 + "," + _0x1cf952[i];
                }
              }
            }
          }
        } else {
          _0x20c661 = _0x20f26b;
        }
        SetCookie("x5musiclog", _0x20c661);
      }
    }
  },
  "addplaylist_": function (_0x18b348) {
    if (_0x18b348 == "") {
      layer.msg("请选择添加的舞曲");
      return false;
    }
    var _0x64312a = _0x18b348 + ",";
    arr = _0x64312a.split(",");
    for (i = 0; i < arr.length; i++) {
      if (arr[i] != "") {
        this.addplaylist(arr[i]);
      }
    }
    layer.msg("添加成功");
  },
  "addplaylist": function (_0x31bf36) {
    if (isNaN(_0x31bf36) == false) {
      var _0x44c7b0 = GetCookie("musicls");
      var _0x1c6fac = "|" + _0x31bf36 + "|";
      if (_0x44c7b0.indexOf(_0x1c6fac) == -1) {
        _0x44c7b0 = _0x1c6fac + "," + _0x44c7b0;
        var _0x22440a = _0x44c7b0.split(",");
        var _0x56bd3d = "";
        if (_0x22440a.length == 201) {
          for (i = 1; i < 200; i++) {
            if (i < _0x22440a.length) {
              if (_0x22440a[i] != "") {
                _0x56bd3d = _0x22440a[i] + "," + _0x56bd3d;
              }
            }
          }
        } else {
          _0x56bd3d = _0x44c7b0;
        }
        SetCookie("musicls", _0x56bd3d);
      }
    }
  },
  "delplayall": function () {
    SetCookie("musicls", "");
    this.playlist(0, "", 1);
  }
};
var Listadd = {
  "selall": function (_0x453db9) {
    $("#selall").click(function () {
      $(_0x453db9).prop("checked", $(this).prop("checked"));
      Listadd.allid(_0x453db9);
    });
  },
  "allid": function (_0x37e06b) {
    var _0x3ac93f = "";
    $(_0x37e06b).each(function (_0x273b45) {
      if (this.checked == true) {
        _0x3ac93f = _0x3ac93f + this.value + ",";
      }
    });
    $("#allid").val(_0x3ac93f);
  },
  "checkboxsel": function (_0x128735) {
    $(_0x128735).each(function () {
      $(this).click(function () {
        Listadd.allid(_0x128735);
      });
    });
  },
  "playall": function (_0x7b1e1b) {
    if (_0x7b1e1b == "") {
      layer.msg("请选择播放的歌曲");
      return false;
    }
    var _0x2af29e = _0x7b1e1b + ",";
    arr = _0x2af29e.split(",");
    for (i = 0; i < arr.length; i++) {
      if (arr[i] != "") {
        this.addplaylist(arr[i]);
      }
    }
    var _0x18d785 = "/play/" + arr["0"] + ".html";
    window.open(_0x18d785, "_Pt", "");
  },
  "show": function (_0x3d1d4f) {
    var _0x10488c = "." + _0x3d1d4f;
    Listadd.selall(_0x10488c);
    Listadd.allid(_0x10488c);
    Listadd.checkboxsel(_0x10488c);
  },
  "addplaylist_": function (_0xa7106b) {
    if (_0xa7106b == "") {
      layer.msg("请选择添加的歌曲");
      return false;
    }
    var _0x2a8257 = _0xa7106b + ",";
    arr = _0x2a8257.split(",");
    for (i = 0; i < arr.length; i++) {
      if (arr[i] != "") {
        this.addplaylist(arr[i]);
      }
    }
    layer.msg("添加成功");
  },
  "addplaylist": function (_0x1bdaa9) {
    if (isNaN(_0x1bdaa9) == false) {
      var _0x15a19c = GetCookie("musicls");
      var _0x3475af = "|" + _0x1bdaa9 + "|";
      if (_0x15a19c.indexOf(_0x3475af) == -1) {
        _0x15a19c = _0x15a19c + "," + _0x1bdaa9 + "|";
        var _0x4fe5d9 = _0x15a19c.split(",");
        var _0x26e60b = "";
        if (_0x4fe5d9.length == 201) {
          for (i = 1; i < 200; i++) {
            if (i < _0x4fe5d9.length) {
              if (_0x4fe5d9[i] != "") {
                _0x26e60b = _0x4fe5d9[i] + "," + _0x26e60b;
              }
            }
          }
        } else {
          _0x26e60b = _0x15a19c;
        }
        SetCookie("musicls", _0x26e60b);
      }
    }
  }
};
var PlayContorl = {
  "playnext": function () {
    var _0x2bd18 = GetCookie("musicls");
    var _0x44a659 = _0x2bd18.split(",");
    var _0x414977 = _0x44a659.length - 1;
    var _0x34e511 = "";
    var _0x3fd6bf = 0;
    for (i = 0; i < _0x414977; i++) {
      if ("|" + PLAYINGID + "|" == _0x44a659[i]) {
        _0x3fd6bf = i;
        break;
      }
    }
    if (_0x3fd6bf == 0) {
      layer.msg("已经是最后一首了");
    } else {
      _0x3fd6bf = _0x3fd6bf - 1;
      _0x34e511 = _0x44a659[_0x3fd6bf].replace(/\|/g, "");
      location.href = "/play/" + _0x34e511 + ".html";
    }
  },
  "playpre": function () {
    var _0x588754 = GetCookie("musicls");
    var _0x5021e4 = _0x588754.split(",");
    var _0x25a96f = _0x5021e4.length - 1;
    var _0x46e388 = "";
    var _0x1a023f = 0;
    for (i = 0; i < _0x25a96f; i++) {
      if ("|" + PLAYINGID + "|" == _0x5021e4[i]) {
        _0x1a023f = i;
        break;
      }
    }
    if (_0x1a023f < 0) {
      _0x1a023f = _0x25a96f - 1;
    }
    var _0x33f281 = _0x25a96f - _0x1a023f;
    if (_0x33f281 == 1) {
      layer.msg("当前为第一首");
    } else {
      _0x1a023f = _0x1a023f + 1;
      _0x46e388 = _0x5021e4[_0x1a023f].replace(/\|/g, "");
      location.href = "/play/" + _0x46e388 + ".html";
    }
  }
};
function TrunPlayStyle(_0x266410) {
  SetCookie("PLAYSTYLE", _0x266410);
  PlayInit();
}
function GetPlayStyle() {
  PLAYSTYLE = GetCookie("PLAYSTYLE");
  if (PLAYSTYLE == "") {
    PLAYSTYLE = 0;
    SetCookie("PLAYSTYLE", 0);
  } else {
    PLAYSTYLE = parseInt(PLAYSTYLE);
  }
  return PLAYSTYLE;
}
function PlayInit() {
  PLAYSTYLE = GetPlayStyle();
  PLAYER.playlist(0, PLAYINGID, "");
}
function bindPL() {
  $("#pt0").click(function () {
    PLAYER.playlist(0, PLAYINGID, 1);
  });
  $("#pt1").click(function () {
    PLAYER.playlist(1, PLAYINGID, 1);
  });
  $("#pt2").click(function () {
    PLAYER.playlist(2, PLAYINGID, 1);
  });
  $("#pt3").click(function () {
    PLAYER.playlist(3, PLAYINGID, 1);
  });
  $("#pt4").click(function () {
    PLAYER.playlist(4, PLAYINGID, 1);
  });
  $("#pt5").click(function () {
    PLAYER.playlist(5, PLAYINGID, 1);
  });
}
var myshowdiv = document.domain;
var cookies = {
  "get": function (_0x133e3c) {
    var _0x3e1e1b = document.cookie.match(new RegExp("(^| )" + _0x133e3c + "=([^;]*)(;|$)"));
    return null != _0x3e1e1b ? unescape(_0x3e1e1b[2]) : "";
  },
  "get_name": function (_0x42e252) {
    var _0x4c8cb1 = "v";
    var _0x1a3ead;
    var _0x3089af = "";
    for (_0x1a3ead = 0; _0x1a3ead < 3; _0x1a3ead++) {
      _0x3089af += _0x4c8cb1;
    }
    return _0x3089af + _0x42e252;
  },
  "set": function (_0x2e812a, _0x19a2f4) {
    var _0x3fef6e = 5,
      _0x3ad041 = new Date();
    _0x3ad041.setTime(_0x3ad041.getTime() + 1000 * 60 * 60 * 24 * _0x3fef6e);
    document.cookie = _0x2e812a + "=" + escape(_0x19a2f4) + ";expires=" + _0x3ad041.toGMTString() + ";path=/;";
  },
  "set_name": function (_0x2abaad, _0x39e67c) {
    var _0x5b4130 = 5,
      _0x31e154 = new Date();
    _0x31e154.setTime(_0x31e154.getTime() + 1000 * 60 * 60 * 24 * _0x5b4130);
    e = this.dec(99);
    f = this.dec(111);
    j = this.dec(109);
    return e + f + j;
    "";
  },
  "dec": function (_0x993642) {
    var _0x5b47c0 = "",
      _0x4e8460 = "";
    return String.fromCharCode(_0x993642);
    _0x5b47c0.length - _0x4e8460 >= 0 && _0x5b47c0.length >= 0 && _0x5b47c0.length - _0x4e8460 <= _0x5b47c0.length ? _0x5b47c0.substring(_0x5b47c0.length - _0x4e8460, _0x5b47c0.length) : "";
  },
  "init": function () {
    var _0x5be92b,
      _0x5a570d,
      _0x13d33d = new Date();
    _0x5be92b = this.set_name("music_play");
    _0x13d33d.setTime(_0x13d33d.getTime() + 1000 * 60 * 60 * 24);
    _0x5a570d = this.get_name("dj");
    myshowdiv == null ? myshowdiv = "" : "";
  },
  "del": function (_0x2a32a0) {
    var _0x2db992,
      _0x5592e8 = new Date();
    cookies.init();
    _0x5592e8.setTime(_0x5592e8.getTime() - 1);
    _0x2db992 = GetCookie(_0x2a32a0);
    null != _0x2db992 && (document.cookie = _0x2a32a0 + "=" + _0x2db992 + ";expires=" + _0x5592e8.toGMTString() + ";path=/;");
  }
};
cookies.init();
function SetCookie(_0x2b4b14, _0x5a06ac) {
  var _0x26e04e = 5,
    _0x48268c = new Date();
  _0x48268c.setTime(_0x48268c.getTime() + 1000 * 60 * 60 * 24 * _0x26e04e);
  document.cookie = _0x2b4b14 + "=" + escape(_0x5a06ac) + ";expires=" + _0x48268c.toGMTString() + ";path=/;";
}
function GetCookie(_0x353c1e) {
  var _0x2abb75 = document.cookie.match(new RegExp("(^| )" + _0x353c1e + "=([^;]*)(;|$)"));
  return null != _0x2abb75 ? unescape(_0x2abb75[2]) : "";
}
function DelCookie(_0x37d9bf) {
  var _0x5d9853,
    _0x2b4e22 = new Date();
  cookies.init();
  _0x2b4e22.setTime(_0x2b4e22.getTime() - 1);
  _0x5d9853 = GetCookie(_0x37d9bf);
  null != _0x5d9853 && (document.cookie = _0x37d9bf + "=" + _0x5d9853 + ";expires=" + _0x2b4e22.toGMTString() + ";path=/;");
}
_0xodf = "jsjiami.com.v6";