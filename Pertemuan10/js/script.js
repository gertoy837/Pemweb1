(function (f) {
  if (typeof exports === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (typeof define === "function" && define.amd) {
    define([], f);
  } else {
    var g;
    if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }
    g.angkaTerbilang = f();
  }
})(function () {
  var define, module, exports;
  return (function () {
    function r(e, n, t) {
      function o(i, f) {
        if (!n[i]) {
          if (!e[i]) {
            var c = "function" == typeof require && require;
            if (!f && c) return c(i, !0);
            if (u) return u(i, !0);
            var a = new Error("Cannot find module '" + i + "'");
            throw ((a.code = "MODULE_NOT_FOUND"), a);
          }
          var p = (n[i] = { exports: {} });
          e[i][0].call(
            p.exports,
            function (r) {
              var n = e[i][1][r];
              return o(n || r);
            },
            p,
            p.exports,
            r,
            e,
            n,
            t
          );
        }
        return n[i].exports;
      }
      for (
        var u = "function" == typeof require && require, i = 0;
        i < t.length;
        i++
      )
        o(t[i]);
      return o;
    }
    return r;
  })()(
    {
      1: [
        function (require, module, exports) {
          "use strict";
          var units = [
              "",
              "ribu",
              "juta",
              "milyar",
              "triliun",
              "quadriliun",
              "quintiliun",
              "sextiliun",
              "septiliun",
              "oktiliun",
              "noniliun",
              "desiliun",
              "undesiliun",
              "duodesiliun",
              "tredesiliun",
              "quattuordesiliun",
              "quindesiliun",
              "sexdesiliun",
              "septendesiliun",
              "oktodesiliun",
              "novemdesiliun",
              "vigintiliun",
            ],
            maxIndex = units.length - 1;
          function digitToUnit(n) {
            var i = n / 3;
            return i <= maxIndex ? units[i] : units[maxIndex];
          }
          var numbers = [
            "",
            "satu",
            "dua",
            "tiga",
            "empat",
            "lima",
            "enam",
            "tujuh",
            "delapan",
            "sembilan",
          ];
          function numberToText(n) {
            return numbers[n] || "";
          }
          var terbilang = function (n) {
              var i = n.length,
                t = i - 1;
              if (0 === t && 0 === Number(n[0])) return "nol";
              for (var e = "", u = "", a = 0; a !== i; ) {
                var r = t - a,
                  o = r % 3,
                  c = Number(n[a]);
                if (
                  3 === r &&
                  1 === c &&
                  (0 === a ||
                    (0 === Number(n[a - 2]) && 0 === Number(n[a - 1])))
                )
                  u += "".concat(e, "seribu");
                else if (0 !== c)
                  if (0 === o)
                    u += ""
                      .concat(e)
                      .concat(numberToText(c))
                      .concat(a === t ? "" : " ")
                      .concat(digitToUnit(r));
                  else if (2 === o)
                    u +=
                      1 === c
                        ? "".concat(e, "seratus")
                        : "".concat(e).concat(numberToText(c), " ratus");
                  else if (1 === c) {
                    a++;
                    var l = Number(n[a]);
                    0 === l
                      ? ((u += "".concat(e, "sepuluh")),
                        1 === r ||
                          (0 === Number(n[a - 2]) && 0 === Number(n[a - 1])) ||
                          (u += " ".concat(digitToUnit(r - 1))))
                      : ((u +=
                          1 === l
                            ? "".concat(e, "sebelas")
                            : "".concat(e).concat(numberToText(l), " belas")),
                        1 !== r && (u += " ".concat(digitToUnit(r - 1))));
                  } else u += "".concat(e).concat(numberToText(c), " puluh");
                else
                  0 !== o ||
                    (0 === Number(n[a - 2]) && 0 === Number(n[a - 1])) ||
                    0 === r ||
                    (u += " ".concat(digitToUnit(r)));
                a <= 1 && (e = " "), a++;
              }
              return u;
            },
            terbilangSatuSatu = function (n) {
              return n
                .split("")
                .map(function (n) {
                  return 0 == n ? "nol" : numberToText(n);
                })
                .join(" ");
            };
          module.exports = function (n) {
            var i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { decimal: "." };
            return (
              "string" != typeof n && (n = String(n)),
              n.indexOf(i.decimal) > -1
                ? ((n = n.split(i.decimal)),
                  ""
                    .concat(terbilang(n[0]), " koma ")
                    .concat(terbilangSatuSatu(n[1])))
                : terbilang(n)
            );
          };
        },
        {},
      ],
    },
    {},
    [1]
  )(1);
});
