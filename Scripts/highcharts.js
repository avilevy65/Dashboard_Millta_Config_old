/*
 Highcharts JS v9.0.0 (2021-02-02)

 (c) 2009-2018 Torstein Honsi

 License: www.highcharts.com/license
*/
(function (W, O) { "object" === typeof module && module.exports ? (O["default"] = O, module.exports = W.document ? O(W) : O) : "function" === typeof define && define.amd ? define("highcharts/highcharts", function () { return O(W) }) : (W.Highcharts && W.Highcharts.error(16, !0), W.Highcharts = O(W)) })("undefined" !== typeof window ? window : this, function (W) {
    function O(e, b, l, w) { e.hasOwnProperty(b) || (e[b] = w.apply(null, l)) } var l = {}; O(l, "Core/Globals.js", [], function () {
        var e = "undefined" !== typeof W ? W : "undefined" !== typeof window ? window : {}, b = e.document,
        l = e.navigator && e.navigator.userAgent || "", w = b && b.createElementNS && !!b.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, D = /(edge|msie|trident)/i.test(l) && !e.opera, F = -1 !== l.indexOf("Firefox"), E = -1 !== l.indexOf("Chrome"), H = F && 4 > parseInt(l.split("Firefox/")[1], 10), r = function () { }; return {
            product: "Highcharts", version: "9.0.0", deg2rad: 2 * Math.PI / 360, doc: b, hasBidiBug: H, hasTouch: !!e.TouchEvent, isMS: D, isWebKit: -1 !== l.indexOf("AppleWebKit"), isFirefox: F, isChrome: E, isSafari: !E && -1 !== l.indexOf("Safari"),
            isTouchDevice: /(Mobile|Android|Windows Phone)/.test(l), SVG_NS: "http://www.w3.org/2000/svg", chartCount: 0, seriesTypes: {}, supportsPassiveEvents: function () { var A = !1; if (!D) { var k = Object.defineProperty({}, "passive", { get: function () { A = !0 } }); e.addEventListener && e.removeEventListener && (e.addEventListener("testPassive", r, k), e.removeEventListener("testPassive", r, k)) } return A }(), symbolSizes: {}, svg: w, win: e, marginNames: ["plotTop", "marginRight", "marginBottom", "plotLeft"], noop: r, charts: [], dateFormats: {}
        }
    }); O(l, "Core/Utilities.js",
        [l["Core/Globals.js"]], function (e) {
            function b(a, h, u, f) { var n = h ? "Highcharts error" : "Highcharts warning"; 32 === a && (a = n + ": Deprecated member"); var M = k(a), G = M ? n + " #" + a + ": www.highcharts.com/errors/" + a + "/" : a.toString(); n = function () { if (h) throw Error(G); c.console && -1 === b.messages.indexOf(G) && console.warn(G) }; if ("undefined" !== typeof f) { var R = ""; M && (G += "?"); m(f, function (x, n) { R += "\n - " + n + ": " + x; M && (G += encodeURI(n) + "=" + encodeURI(x)) }); G += R } u ? d(u, "displayError", { code: a, message: G, params: f }, n) : n(); b.messages.push(G) }
            function l() { var a, c = arguments, u = {}, d = function (n, u) { "object" !== typeof n && (n = {}); m(u, function (a, x) { "__proto__" !== x && "constructor" !== x && (!H(a, !0) || A(a) || r(a) ? n[x] = u[x] : n[x] = d(n[x] || {}, a)) }); return n }; !0 === c[0] && (u = c[1], c = Array.prototype.slice.call(c, 2)); var n = c.length; for (a = 0; a < n; a++)u = d(u, c[a]); return u } function w(a, c) { var u = {}; m(a, function (d, n) { if (H(a[n], !0) && !a.nodeType && c[n]) d = w(a[n], c[n]), Object.keys(d).length && (u[n] = d); else if (H(a[n]) || a[n] !== c[n]) u[n] = a[n] }); return u } function D(a, c) {
                return parseInt(a,
                    c || 10)
            } function F(a) { return "string" === typeof a } function E(a) { a = Object.prototype.toString.call(a); return "[object Array]" === a || "[object Array Iterator]" === a } function H(a, c) { return !!a && "object" === typeof a && (!c || !E(a)) } function r(a) { return H(a) && "number" === typeof a.nodeType } function A(a) { var c = a && a.constructor; return !(!H(a, !0) || r(a) || !c || !c.name || "Object" === c.name) } function k(a) { return "number" === typeof a && !isNaN(a) && Infinity > a && -Infinity < a } function C(a) { return "undefined" !== typeof a && null !== a } function g(a,
                c, u) { var d; F(c) ? C(u) ? a.setAttribute(c, u) : a && a.getAttribute && ((d = a.getAttribute(c)) || "class" !== c || (d = a.getAttribute(c + "Name"))) : m(c, function (n, u) { a.setAttribute(u, n) }); return d } function q(a, c) { var u; a || (a = {}); for (u in c) a[u] = c[u]; return a } function f() { for (var a = arguments, c = a.length, u = 0; u < c; u++) { var d = a[u]; if ("undefined" !== typeof d && null !== d) return d } } function p(a, c) { e.isMS && !e.svg && c && "undefined" !== typeof c.opacity && (c.filter = "alpha(opacity=" + 100 * c.opacity + ")"); q(a.style, c) } function B(c, d, u, h, n) {
                    c =
                    a.createElement(c); d && q(c, d); n && p(c, { padding: "0", border: "none", margin: "0" }); u && p(c, u); h && h.appendChild(c); return c
                } function I(a, c) { return parseFloat(a.toPrecision(c || 14)) } function Q(a, c, u, d) {
                    a = +a || 0; c = +c; var n = e.defaultOptions.lang, M = (a.toString().split(".")[1] || "").split("e")[0].length, h = a.toString().split("e"), m = c; if (-1 === c) c = Math.min(M, 20); else if (!k(c)) c = 2; else if (c && h[1] && 0 > h[1]) {
                        var x = c + +h[1]; 0 <= x ? (h[0] = (+h[0]).toExponential(x).split("e")[0], c = x) : (h[0] = h[0].split(".")[0] || 0, a = 20 > c ? (h[0] * Math.pow(10,
                            h[1])).toFixed(c) : 0, h[1] = 0)
                    } var R = (Math.abs(h[1] ? h[0] : a) + Math.pow(10, -Math.max(c, M) - 1)).toFixed(c); M = String(D(R)); x = 3 < M.length ? M.length % 3 : 0; u = f(u, n.decimalPoint); d = f(d, n.thousandsSep); a = (0 > a ? "-" : "") + (x ? M.substr(0, x) + d : ""); a = 0 > +h[1] && !m ? "0" : a + M.substr(x).replace(/(\d{3})(?=\d)/g, "$1" + d); c && (a += u + R.slice(-c)); h[1] && 0 !== +a && (a += "e" + h[1]); return a
                } function z(a, c) {
                    if (!a) return c; var u = a.split(".").reverse(); if (1 === u.length) return c[a]; for (a = u.pop(); "undefined" !== typeof a && "undefined" !== typeof c && null !==
                        c;)c = c[a], a = u.pop(); return c
                } function m(a, c, u) { for (var d in a) Object.hasOwnProperty.call(a, d) && c.call(u || a[d], a[d], d, a) } function t(a, c, u) {
                    function d(n, x) { var c = a.removeEventListener || e.removeEventListenerPolyfill; c && c.call(a, n, x, !1) } function n(n) { var x; if (a.nodeName) { if (c) { var u = {}; u[c] = !0 } else u = n; m(u, function (a, c) { if (n[c]) for (x = n[c].length; x--;)d(c, n[c][x].fn) }) } } var M = "function" === typeof a && a.prototype || a; if (Object.hasOwnProperty.call(M, "hcEvents")) {
                        var h = M.hcEvents; c ? (M = h[c] || [], u ? (h[c] = M.filter(function (a) {
                            return u !==
                                a.fn
                        }), d(c, u)) : (n(h), h[c] = [])) : (n(h), delete M.hcEvents)
                    }
                } function d(c, d, u, h) {
                    u = u || {}; if (a.createEvent && (c.dispatchEvent || c.fireEvent)) { var n = a.createEvent("Events"); n.initEvent(d, !0, !0); q(n, u); c.dispatchEvent ? c.dispatchEvent(n) : c.fireEvent(d, n) } else if (c.hcEvents) {
                    u.target || q(u, { preventDefault: function () { u.defaultPrevented = !0 }, target: c, type: d }); n = []; for (var M = c, f = !1; M.hcEvents;)Object.hasOwnProperty.call(M, "hcEvents") && M.hcEvents[d] && (n.length && (f = !0), n.unshift.apply(n, M.hcEvents[d])), M = Object.getPrototypeOf(M);
                        f && n.sort(function (a, c) { return a.order - c.order }); n.forEach(function (a) { !1 === a.fn.call(c, u) && u.preventDefault() })
                    } h && !u.defaultPrevented && h.call(c, u)
                } var h = e.charts, a = e.doc, c = e.win; ""; (b || (b = {})).messages = []; var v; Math.easeInOutSine = function (a) { return -.5 * (Math.cos(Math.PI * a) - 1) }; var K = Array.prototype.find ? function (a, c) { return a.find(c) } : function (a, c) { var u, d = a.length; for (u = 0; u < d; u++)if (c(a[u], u)) return a[u] }; m({ map: "map", each: "forEach", grep: "filter", reduce: "reduce", some: "some" }, function (a, c) {
                e[c] =
                    function (u) { var d; b(32, !1, void 0, (d = {}, d["Highcharts." + c] = "use Array." + a, d)); return Array.prototype[a].apply(u, [].slice.call(arguments, 1)) }
                }); var P, y = function () { var a = Math.random().toString(36).substring(2, 9) + "-", c = 0; return function () { return "highcharts-" + (P ? "" : a) + c++ } }(), L = e.getOptions = function () { return e.defaultOptions }, S = e.setOptions = function (a) { e.defaultOptions = l(!0, e.defaultOptions, a); (a.time || a.global) && e.time.update(l(e.defaultOptions.global, e.defaultOptions.time, a.global, a.time)); return e.defaultOptions };
            c.jQuery && (c.jQuery.fn.highcharts = function () { var a = [].slice.call(arguments); if (this[0]) return a[0] ? (new (e[F(a[0]) ? a.shift() : "Chart"])(this[0], a[0], a[1]), this) : h[g(this[0], "data-highcharts-chart")] }); return {
                addEvent: function (a, c, u, d) {
                void 0 === d && (d = {}); var n = "function" === typeof a && a.prototype || a; Object.hasOwnProperty.call(n, "hcEvents") || (n.hcEvents = {}); n = n.hcEvents; e.Point && a instanceof e.Point && a.series && a.series.chart && (a.series.chart.runTrackerClick = !0); var M = a.addEventListener || e.addEventListenerPolyfill;
                    M && M.call(a, c, u, e.supportsPassiveEvents ? { passive: void 0 === d.passive ? -1 !== c.indexOf("touch") : d.passive, capture: !1 } : !1); n[c] || (n[c] = []); n[c].push({ fn: u, order: "number" === typeof d.order ? d.order : Infinity }); n[c].sort(function (a, c) { return a.order - c.order }); return function () { t(a, c, u) }
                }, arrayMax: function (a) { for (var c = a.length, u = a[0]; c--;)a[c] > u && (u = a[c]); return u }, arrayMin: function (a) { for (var c = a.length, u = a[0]; c--;)a[c] < u && (u = a[c]); return u }, attr: g, clamp: function (a, c, u) { return a > c ? a < u ? a : u : c }, cleanRecursively: w,
                clearTimeout: function (a) { C(a) && clearTimeout(a) }, correctFloat: I, createElement: B, css: p, defined: C, destroyObjectProperties: function (a, c) { m(a, function (u, d) { u && u !== c && u.destroy && u.destroy(); delete a[d] }) }, discardElement: function (a) { v || (v = B("div")); a && v.appendChild(a); v.innerHTML = "" }, erase: function (a, c) { for (var u = a.length; u--;)if (a[u] === c) { a.splice(u, 1); break } }, error: b, extend: q, extendClass: function (a, c) { var u = function () { }; u.prototype = new a; q(u.prototype, c); return u }, find: K, fireEvent: d, format: function (a,
                    c, u) { var d = "{", n = !1, M = [], h = /f$/, f = /\.([0-9])/, x = e.defaultOptions.lang, m = u && u.time || e.time; for (u = u && u.numberFormatter || Q; a;) { var J = a.indexOf(d); if (-1 === J) break; var g = a.slice(0, J); if (n) { g = g.split(":"); d = z(g.shift() || "", c); if (g.length && "number" === typeof d) if (g = g.join(":"), h.test(g)) { var v = parseInt((g.match(f) || ["", "-1"])[1], 10); null !== d && (d = u(d, v, x.decimalPoint, -1 < g.indexOf(",") ? x.thousandsSep : "")) } else d = m.dateFormat(g, d); M.push(d) } else M.push(g); a = a.slice(J + 1); d = (n = !n) ? "}" : "{" } M.push(a); return M.join("") },
                getMagnitude: function (a) { return Math.pow(10, Math.floor(Math.log(a) / Math.LN10)) }, getNestedProperty: z, getOptions: L, getStyle: function (a, d, u) {
                    if ("width" === d) return d = Math.min(a.offsetWidth, a.scrollWidth), u = a.getBoundingClientRect && a.getBoundingClientRect().width, u < d && u >= d - 1 && (d = Math.floor(u)), Math.max(0, d - e.getStyle(a, "padding-left") - e.getStyle(a, "padding-right")); if ("height" === d) return Math.max(0, Math.min(a.offsetHeight, a.scrollHeight) - e.getStyle(a, "padding-top") - e.getStyle(a, "padding-bottom")); c.getComputedStyle ||
                        b(27, !0); if (a = c.getComputedStyle(a, void 0)) a = a.getPropertyValue(d), f(u, "opacity" !== d) && (a = D(a)); return a
                }, inArray: function (a, c, u) { b(32, !1, void 0, { "Highcharts.inArray": "use Array.indexOf" }); return c.indexOf(a, u) }, isArray: E, isClass: A, isDOMElement: r, isFunction: function (a) { return "function" === typeof a }, isNumber: k, isObject: H, isString: F, keys: function (a) { b(32, !1, void 0, { "Highcharts.keys": "use Object.keys" }); return Object.keys(a) }, merge: l, normalizeTickInterval: function (a, c, u, d, n) {
                    var M = a; u = f(u, 1); var h = a /
                        u; c || (c = n ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], !1 === d && (1 === u ? c = c.filter(function (a) { return 0 === a % 1 }) : .1 >= u && (c = [1 / u]))); for (d = 0; d < c.length && !(M = c[d], n && M * u >= a || !n && h <= (c[d] + (c[d + 1] || c[d])) / 2); d++); return M = I(M * u, -Math.round(Math.log(.001) / Math.LN10))
                }, numberFormat: Q, objectEach: m, offset: function (d) {
                    var h = a.documentElement; d = d.parentElement || d.parentNode ? d.getBoundingClientRect() : { top: 0, left: 0 }; return {
                        top: d.top + (c.pageYOffset || h.scrollTop) - (h.clientTop || 0), left: d.left + (c.pageXOffset || h.scrollLeft) -
                            (h.clientLeft || 0)
                    }
                }, pad: function (a, c, u) { return Array((c || 2) + 1 - String(a).replace("-", "").length).join(u || "0") + a }, pick: f, pInt: D, relativeLength: function (a, c, u) { return /%$/.test(a) ? c * parseFloat(a) / 100 + (u || 0) : parseFloat(a) }, removeEvent: t, setOptions: S, splat: function (a) { return E(a) ? a : [a] }, stableSort: function (a, c) { var u = a.length, d, n; for (n = 0; n < u; n++)a[n].safeI = n; a.sort(function (a, n) { d = c(a, n); return 0 === d ? a.safeI - n.safeI : d }); for (n = 0; n < u; n++)delete a[n].safeI }, syncTimeout: function (a, c, u) {
                    if (0 < c) return setTimeout(a,
                        c, u); a.call(0, u); return -1
                }, timeUnits: { millisecond: 1, second: 1E3, minute: 6E4, hour: 36E5, day: 864E5, week: 6048E5, month: 24192E5, year: 314496E5 }, uniqueKey: y, useSerialIds: function (a) { return P = f(a, P) }, wrap: function (a, c, u) { var d = a[c]; a[c] = function () { var a = Array.prototype.slice.call(arguments), c = arguments, h = this; h.proceed = function () { d.apply(h, arguments.length ? arguments : c) }; a.unshift(d); a = u.apply(this, a); h.proceed = null; return a } }
            }
        }); O(l, "Core/Color/Color.js", [l["Core/Globals.js"], l["Core/Utilities.js"]], function (e,
            b) {
                var l = b.isNumber, w = b.merge, D = b.pInt; ""; b = function () {
                    function b(E) { this.parsers = [{ regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/, parse: function (b) { return [D(b[1]), D(b[2]), D(b[3]), parseFloat(b[4], 10)] } }, { regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/, parse: function (b) { return [D(b[1]), D(b[2]), D(b[3]), 1] } }]; this.rgba = []; if (e.Color !== b) return new e.Color(E); if (!(this instanceof b)) return new b(E); this.init(E) } b.parse = function (e) { return new b(e) };
                    b.prototype.init = function (e) { var l, r; if ((this.input = e = b.names[e && e.toLowerCase ? e.toLowerCase() : ""] || e) && e.stops) this.stops = e.stops.map(function (k) { return new b(k[1]) }); else { if (e && e.charAt && "#" === e.charAt()) { var A = e.length; e = parseInt(e.substr(1), 16); 7 === A ? l = [(e & 16711680) >> 16, (e & 65280) >> 8, e & 255, 1] : 4 === A && (l = [(e & 3840) >> 4 | (e & 3840) >> 8, (e & 240) >> 4 | e & 240, (e & 15) << 4 | e & 15, 1]) } if (!l) for (r = this.parsers.length; r-- && !l;) { var k = this.parsers[r]; (A = k.regex.exec(e)) && (l = k.parse(A)) } } this.rgba = l || [] }; b.prototype.get =
                        function (b) { var e = this.input, r = this.rgba; if ("undefined" !== typeof this.stops) { var A = w(e); A.stops = [].concat(A.stops); this.stops.forEach(function (k, C) { A.stops[C] = [A.stops[C][0], k.get(b)] }) } else A = r && l(r[0]) ? "rgb" === b || !b && 1 === r[3] ? "rgb(" + r[0] + "," + r[1] + "," + r[2] + ")" : "a" === b ? r[3] : "rgba(" + r.join(",") + ")" : e; return A }; b.prototype.brighten = function (b) {
                            var e, r = this.rgba; if (this.stops) this.stops.forEach(function (A) { A.brighten(b) }); else if (l(b) && 0 !== b) for (e = 0; 3 > e; e++)r[e] += D(255 * b), 0 > r[e] && (r[e] = 0), 255 < r[e] &&
                                (r[e] = 255); return this
                        }; b.prototype.setOpacity = function (b) { this.rgba[3] = b; return this }; b.prototype.tweenTo = function (b, e) { var r = this.rgba, A = b.rgba; A.length && r && r.length ? (b = 1 !== A[3] || 1 !== r[3], e = (b ? "rgba(" : "rgb(") + Math.round(A[0] + (r[0] - A[0]) * (1 - e)) + "," + Math.round(A[1] + (r[1] - A[1]) * (1 - e)) + "," + Math.round(A[2] + (r[2] - A[2]) * (1 - e)) + (b ? "," + (A[3] + (r[3] - A[3]) * (1 - e)) : "") + ")") : e = b.input || "none"; return e }; b.names = { white: "#ffffff", black: "#000000" }; return b
                }(); e.Color = b; e.color = b.parse; return b
        }); O(l, "Core/Color/Palette.js",
            [], function () {
                return {
                    colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "), backgroundColor: "#ffffff", neutralColor100: "#000000", neutralColor80: "#333333", neutralColor60: "#666666", neutralColor40: "#999999", neutralColor20: "#cccccc", neutralColor10: "#e6e6e6", neutralColor5: "#f2f2f2", neutralColor3: "#f7f7f7", highlightColor100: "#003399", highlightColor80: "#335cad", highlightColor60: "#6685c2", highlightColor20: "#ccd6eb", highlightColor10: "#e6ebf5", indicatorPositiveLine: "#06b535",
                    indicatorNegativeLine: "#f21313"
                }
            }); O(l, "Core/Animation/Fx.js", [l["Core/Globals.js"], l["Core/Utilities.js"]], function (e, b) {
                var l = e.win, w = b.isNumber, D = b.objectEach; b = function () {
                    function b(b, e, r) { this.pos = NaN; this.options = e; this.elem = b; this.prop = r } b.prototype.dSetter = function () {
                        var b = this.paths, e = b && b[0]; b = b && b[1]; var r = [], A = this.now || 0; if (1 !== A && e && b) if (e.length === b.length && 1 > A) for (var k = 0; k < b.length; k++) {
                            for (var C = e[k], g = b[k], q = [], f = 0; f < g.length; f++) {
                                var p = C[f], B = g[f]; w(p) && w(B) && ("A" !== g[0] || 4 !==
                                    f && 5 !== f) ? q[f] = p + A * (B - p) : q[f] = B
                            } r.push(q)
                        } else r = b; else r = this.toD || []; this.elem.attr("d", r, void 0, !0)
                    }; b.prototype.update = function () { var b = this.elem, e = this.prop, r = this.now, A = this.options.step; if (this[e + "Setter"]) this[e + "Setter"](); else b.attr ? b.element && b.attr(e, r, null, !0) : b.style[e] = r + this.unit; A && A.call(b, r, this) }; b.prototype.run = function (e, H, r) {
                        var A = this, k = A.options, C = function (f) { return C.stopped ? !1 : A.step(f) }, g = l.requestAnimationFrame || function (f) { setTimeout(f, 13) }, q = function () {
                            for (var f = 0; f <
                                b.timers.length; f++)b.timers[f]() || b.timers.splice(f--, 1); b.timers.length && g(q)
                        }; e !== H || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +new Date, this.start = e, this.end = H, this.unit = r, this.now = this.start, this.pos = 0, C.elem = this.elem, C.prop = this.prop, C() && 1 === b.timers.push(C) && g(q)) : (delete k.curAnim[this.prop], k.complete && 0 === Object.keys(k.curAnim).length && k.complete.call(this.elem))
                    }; b.prototype.step = function (b) {
                        var e = +new Date, r = this.options, A = this.elem, k = r.complete, C = r.duration, g = r.curAnim; if (A.attr &&
                            !A.element) b = !1; else if (b || e >= C + this.startTime) { this.now = this.end; this.pos = 1; this.update(); var q = g[this.prop] = !0; D(g, function (f) { !0 !== f && (q = !1) }); q && k && k.call(A); b = !1 } else this.pos = r.easing((e - this.startTime) / C), this.now = this.start + (this.end - this.start) * this.pos, this.update(), b = !0; return b
                    }; b.prototype.initPath = function (b, e, r) {
                        function A(f, g) {
                            for (; f.length < I;) {
                                var m = f[0], p = g[I - f.length]; p && "M" === m[0] && (f[0] = "C" === p[0] ? ["C", m[1], m[2], m[1], m[2], m[1], m[2]] : ["L", m[1], m[2]]); f.unshift(m); q && f.push(f[f.length -
                                    1])
                            }
                        } function k(g, p) { for (; g.length < I;)if (p = g[g.length / f - 1].slice(), "C" === p[0] && (p[1] = p[5], p[2] = p[6]), q) { var m = g[g.length / f].slice(); g.splice(g.length / 2, 0, p, m) } else g.push(p) } var C = b.startX, g = b.endX; e = e && e.slice(); r = r.slice(); var q = b.isArea, f = q ? 2 : 1; if (!e) return [r, r]; if (C && g) { for (b = 0; b < C.length; b++)if (C[b] === g[0]) { var p = b; break } else if (C[0] === g[g.length - C.length + b]) { p = b; var B = !0; break } else if (C[C.length - 1] === g[g.length - C.length + b]) { p = C.length - b; break } "undefined" === typeof p && (e = []) } if (e.length && w(p)) {
                            var I =
                                r.length + p * f; B ? (A(e, r), k(r, e)) : (A(r, e), k(e, r))
                        } return [e, r]
                    }; b.prototype.fillSetter = function () { b.prototype.strokeSetter.apply(this, arguments) }; b.prototype.strokeSetter = function () { this.elem.attr(this.prop, e.color(this.start).tweenTo(e.color(this.end), this.pos), null, !0) }; b.timers = []; return b
                }(); e.Fx = b; e.timers = b.timers; return b
            }); O(l, "Core/Animation/AnimationUtilities.js", [l["Core/Animation/Fx.js"], l["Core/Globals.js"], l["Core/Utilities.js"]], function (e, b, l) {
                var w = l.defined, D = l.getStyle, U = l.isArray,
                E = l.isNumber, H = l.isObject, r = l.merge, A = l.objectEach, k = l.pick; l = b.setAnimation = function (f, g) { g.renderer.globalAnimation = k(f, g.options.chart.animation, !0) }; var C = b.animObject = function (f) { return H(f) ? r({ duration: 500, defer: 0 }, f) : { duration: f ? 500 : 0, defer: 0 } }, g = b.getDeferredAnimation = function (f, g, B) {
                    var p = C(g), k = 0, q = 0; (B ? [B] : f.series).forEach(function (f) { f = C(f.options.animation); k = g && w(g.defer) ? p.defer : Math.max(k, f.duration + f.defer); q = Math.min(p.duration, f.duration) }); f.renderer.forExport && (k = 0); return {
                        defer: Math.max(0,
                            k - q), duration: Math.min(k, q)
                    }
                }, q = b.stop = function (f, g) { for (var p = e.timers.length; p--;)e.timers[p].elem !== f || g && g !== e.timers[p].prop || (e.timers[p].stopped = !0) }; return {
                    animate: function (f, g, B) {
                        var p, k = "", C, m; if (!H(B)) { var t = arguments; B = { duration: t[2], easing: t[3], complete: t[4] } } E(B.duration) || (B.duration = 400); B.easing = "function" === typeof B.easing ? B.easing : Math[B.easing] || Math.easeInOutSine; B.curAnim = r(g); A(g, function (d, h) {
                            q(f, h); m = new e(f, B, h); C = null; "d" === h && U(g.d) ? (m.paths = m.initPath(f, f.pathArray, g.d),
                                m.toD = g.d, p = 0, C = 1) : f.attr ? p = f.attr(h) : (p = parseFloat(D(f, h)) || 0, "opacity" !== h && (k = "px")); C || (C = d); C && C.match && C.match("px") && (C = C.replace(/px/g, "")); m.run(p, C, k)
                        })
                    }, animObject: C, getDeferredAnimation: g, setAnimation: l, stop: q
                }
            }); O(l, "Core/Renderer/HTML/AST.js", [l["Core/Globals.js"], l["Core/Utilities.js"]], function (e, b) {
                var l = b.attr, w = b.createElement, D = b.discardElement, F = b.error, E = b.objectEach, H = b.splat; ""; return function () {
                    function b(b) { this.nodes = "string" === typeof b ? this.parseMarkup(b) : b } b.filterUserAttributes =
                        function (A) { E(A, function (k, C) { var g = !0; -1 === b.allowedAttributes.indexOf(C) && (g = !1); -1 !== ["background", "dynsrc", "href", "lowsrc", "src"].indexOf(C) && (g = /^(http|\/)/.test(k)); g || (F("Highcharts warning: Invalid attribute '" + C + "' in config"), delete A[C]) }); return A }; b.setElementHTML = function (A, k) { A.innerHTML = ""; k && (new b(k)).addToDOM(A) }; b.prototype.addToDOM = function (A) {
                            function k(g, q) {
                                var f; H(g).forEach(function (g) {
                                    var p = g.tagName, I = g.textContent ? e.doc.createTextNode(g.textContent) : void 0; if (p) if ("#text" ===
                                        p) var A = I; else if (-1 !== b.allowedTags.indexOf(p)) { p = e.doc.createElementNS(C, p); var z = g.attributes || {}; E(g, function (f, g) { "tagName" !== g && "attributes" !== g && "children" !== g && "textContent" !== g && (z[g] = f) }); l(p, b.filterUserAttributes(z)); I && p.appendChild(I); k(g.children || [], p); A = p } else F("Highcharts warning: Invalid tagName '" + p + "' in config"); A && q.appendChild(A); f = A
                                }); return f
                            } var C = A.namespaceURI || e.SVG_NS; return k(this.nodes, A)
                        }; b.prototype.parseMarkup = function (b) {
                            var k = []; if (/MSIE 9.0/.test(navigator.userAgent) ||
                                "undefined" === typeof DOMParser) { var C = w("div"); C.innerHTML = b; b = { body: C } } else b = (new DOMParser).parseFromString(b, "text/html"); var g = function (k, f) { var p = k.nodeName.toLowerCase(), B = { tagName: p }; if ("#text" === p) { p = k.textContent || ""; if (/^[\s]*$/.test(p)) return; B.textContent = p } if (p = k.attributes) { var q = {};[].forEach.call(p, function (f) { q[f.name] = f.value }); B.attributes = q } if (k.childNodes.length) { var b = [];[].forEach.call(k.childNodes, function (f) { g(f, b) }); b.length && (B.children = b) } f.push(B) };[].forEach.call(b.body.childNodes,
                                    function (q) { return g(q, k) }); C && D(C); return k
                        }; b.allowedTags = "a b br button caption circle code div em feComponentTransfer feFuncA feFuncB feFuncG feFuncR feGaussianBlur feOffset feMerge feMergeNode filter h1 h2 h3 h4 h5 h6 hr i img li linearGradient marker ol p path pattern pre rect small span stop strong style sub sup table text thead tbody tspan td th tr ul #text".split(" "); b.allowedAttributes = "aria-controls aria-describedby aria-expanded aria-haspopup aria-hidden aria-label aria-labelledby aria-live aria-pressed aria-readonly aria-roledescription aria-selected class color colspan cx cy d dx dy disabled fill height href id in markerHeight markerWidth offset opacity orient padding paddingLeft patternUnits r refX refY role scope slope src startOffset stdDeviation stroke stroke-linecap stroke-width style result rowspan summary tabindex text-align textAnchor textLength type valign width x x1 xy y y1 y2 zIndex".split(" ");
                    return b
                }()
            }); O(l, "Core/Renderer/SVG/SVGElement.js", [l["Core/Animation/AnimationUtilities.js"], l["Core/Renderer/HTML/AST.js"], l["Core/Color/Color.js"], l["Core/Globals.js"], l["Core/Color/Palette.js"], l["Core/Utilities.js"]], function (e, b, l, w, D, F) {
                var E = e.animate, H = e.animObject, r = e.stop, A = w.deg2rad, k = w.doc, C = w.hasTouch, g = w.noop, q = w.svg, f = w.SVG_NS, p = w.win, B = F.attr, I = F.createElement, Q = F.css, z = F.defined, m = F.erase, t = F.extend, d = F.fireEvent, h = F.isArray, a = F.isFunction, c = F.isNumber, v = F.isString, K = F.merge, P =
                    F.objectEach, y = F.pick, L = F.pInt, S = F.syncTimeout, N = F.uniqueKey; ""; e = function () {
                        function G() { this.height = this.element = void 0; this.opacity = 1; this.renderer = void 0; this.SVG_NS = f; this.symbolCustomAttribs = "x y width height r start end innerR anchorX anchorY rounded".split(" "); this.width = void 0 } G.prototype._defaultGetter = function (a) { a = y(this[a + "Value"], this[a], this.element ? this.element.getAttribute(a) : null, 0); /^[\-0-9\.]+$/.test(a) && (a = parseFloat(a)); return a }; G.prototype._defaultSetter = function (a, c, n) {
                            n.setAttribute(c,
                                a)
                        }; G.prototype.add = function (a) { var c = this.renderer, n = this.element; a && (this.parentGroup = a); this.parentInverted = a && a.inverted; "undefined" !== typeof this.textStr && "text" === this.element.nodeName && c.buildText(this); this.added = !0; if (!a || a.handleZ || this.zIndex) var u = this.zIndexSetter(); u || (a ? a.element : c.box).appendChild(n); if (this.onAdd) this.onAdd(); return this }; G.prototype.addClass = function (a, c) {
                            var n = c ? "" : this.attr("class") || ""; a = (a || "").split(/ /g).reduce(function (a, c) { -1 === n.indexOf(c) && a.push(c); return a },
                                n ? [n] : []).join(" "); a !== n && this.attr("class", a); return this
                        }; G.prototype.afterSetters = function () { this.doTransform && (this.updateTransform(), this.doTransform = !1) }; G.prototype.align = function (a, c, n) {
                            var u, d = {}; var h = this.renderer; var x = h.alignedObjects; var f, J; if (a) { if (this.alignOptions = a, this.alignByTranslate = c, !n || v(n)) this.alignTo = u = n || "renderer", m(x, this), x.push(this), n = void 0 } else a = this.alignOptions, c = this.alignByTranslate, u = this.alignTo; n = y(n, h[u], h); u = a.align; h = a.verticalAlign; x = (n.x || 0) + (a.x ||
                                0); var g = (n.y || 0) + (a.y || 0); "right" === u ? f = 1 : "center" === u && (f = 2); f && (x += (n.width - (a.width || 0)) / f); d[c ? "translateX" : "x"] = Math.round(x); "bottom" === h ? J = 1 : "middle" === h && (J = 2); J && (g += (n.height - (a.height || 0)) / J); d[c ? "translateY" : "y"] = Math.round(g); this[this.placed ? "animate" : "attr"](d); this.placed = !0; this.alignAttr = d; return this
                        }; G.prototype.alignSetter = function (a) { var c = { left: "start", center: "middle", right: "end" }; c[a] && (this.alignValue = a, this.element.setAttribute("text-anchor", c[a])) }; G.prototype.animate =
                            function (a, c, n) { var u = this, d = H(y(c, this.renderer.globalAnimation, !0)); c = d.defer; y(k.hidden, k.msHidden, k.webkitHidden, !1) && (d.duration = 0); 0 !== d.duration ? (n && (d.complete = n), S(function () { u.element && E(u, a, d) }, c)) : (this.attr(a, void 0, n), P(a, function (a, c) { d.step && d.step.call(this, a, { prop: c, pos: 1, elem: this }) }, this)); return this }; G.prototype.applyTextOutline = function (a) {
                                var c = this.element; -1 !== a.indexOf("contrast") && (a = a.replace(/contrast/g, this.renderer.getContrast(c.style.fill))); var n = a.split(" "); a = n[n.length -
                                    1]; if ((n = n[0]) && "none" !== n && w.svg) {
                                    this.fakeTS = !0; this.ySetter = this.xSetter; n = n.replace(/(^[\d\.]+)(.*?)$/g, function (a, c, n) { return 2 * Number(c) + n }); this.removeTextOutline(); var u = k.createElementNS(f, "tspan"); B(u, { "class": "highcharts-text-outline", fill: a, stroke: a, "stroke-width": n, "stroke-linejoin": "round" });[].forEach.call(c.childNodes, function (a) { var c = a.cloneNode(!0); c.removeAttribute && ["fill", "stroke", "stroke-width", "stroke"].forEach(function (a) { return c.removeAttribute(a) }); u.appendChild(c) }); a =
                                        k.createElementNS(f, "tspan"); a.textContent = "\u200b"; B(a, { x: c.getAttribute("x"), y: c.getAttribute("y") }); u.appendChild(a); c.insertBefore(u, c.firstChild)
                                    }
                            }; G.prototype.attr = function (a, c, n, d) {
                                var u = this.element, M, x = this, h, f, g = this.symbolCustomAttribs; if ("string" === typeof a && "undefined" !== typeof c) { var m = a; a = {}; a[m] = c } "string" === typeof a ? x = (this[a + "Getter"] || this._defaultGetter).call(this, a, u) : (P(a, function (c, n) {
                                    h = !1; d || r(this, n); this.symbolName && -1 !== g.indexOf(n) && (M || (this.symbolAttr(a), M = !0), h = !0);
                                    !this.rotation || "x" !== n && "y" !== n || (this.doTransform = !0); h || (f = this[n + "Setter"] || this._defaultSetter, f.call(this, c, n, u), !this.styledMode && this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(n) && this.updateShadows(n, c, f))
                                }, this), this.afterSetters()); n && n.call(this); return x
                            }; G.prototype.clip = function (a) { return this.attr("clip-path", a ? "url(" + this.renderer.url + "#" + a.id + ")" : "none") }; G.prototype.crisp = function (a, c) {
                                c = c || a.strokeWidth || 0; var n = Math.round(c) % 2 / 2; a.x = Math.floor(a.x || this.x ||
                                    0) + n; a.y = Math.floor(a.y || this.y || 0) + n; a.width = Math.floor((a.width || this.width || 0) - 2 * n); a.height = Math.floor((a.height || this.height || 0) - 2 * n); z(a.strokeWidth) && (a.strokeWidth = c); return a
                            }; G.prototype.complexColor = function (a, c, n) {
                                var u = this.renderer, f, g, x, m, J, p, v, t, k, R, y = [], B; d(this.renderer, "complexColor", { args: arguments }, function () {
                                    a.radialGradient ? g = "radialGradient" : a.linearGradient && (g = "linearGradient"); if (g) {
                                        x = a[g]; J = u.gradients; p = a.stops; k = n.radialReference; h(x) && (a[g] = x = {
                                            x1: x[0], y1: x[1], x2: x[2],
                                            y2: x[3], gradientUnits: "userSpaceOnUse"
                                        }); "radialGradient" === g && k && !z(x.gradientUnits) && (m = x, x = K(x, u.getRadialAttr(k, m), { gradientUnits: "userSpaceOnUse" })); P(x, function (a, c) { "id" !== c && y.push(c, a) }); P(p, function (a) { y.push(a) }); y = y.join(","); if (J[y]) R = J[y].attr("id"); else {
                                        x.id = R = N(); var d = J[y] = u.createElement(g).attr(x).add(u.defs); d.radAttr = m; d.stops = []; p.forEach(function (a) {
                                            0 === a[1].indexOf("rgba") ? (f = l.parse(a[1]), v = f.get("rgb"), t = f.get("a")) : (v = a[1], t = 1); a = u.createElement("stop").attr({
                                                offset: a[0],
                                                "stop-color": v, "stop-opacity": t
                                            }).add(d); d.stops.push(a)
                                        })
                                        } B = "url(" + u.url + "#" + R + ")"; n.setAttribute(c, B); n.gradient = y; a.toString = function () { return B }
                                    }
                                })
                            }; G.prototype.css = function (a) {
                                var c = this.styles, n = {}, d = this.element, u = "", h = !c, x = ["textOutline", "textOverflow", "width"]; a && a.color && (a.fill = a.color); c && P(a, function (a, x) { c && c[x] !== a && (n[x] = a, h = !0) }); if (h) {
                                    c && (a = t(c, n)); if (a) if (null === a.width || "auto" === a.width) delete this.textWidth; else if ("text" === d.nodeName.toLowerCase() && a.width) var f = this.textWidth =
                                        L(a.width); this.styles = a; f && !q && this.renderer.forExport && delete a.width; if (d.namespaceURI === this.SVG_NS) { var J = function (a, c) { return "-" + c.toLowerCase() }; P(a, function (a, c) { -1 === x.indexOf(c) && (u += c.replace(/([A-Z])/g, J) + ":" + a + ";") }); u && B(d, "style", u) } else Q(d, a); this.added && ("text" === this.element.nodeName && this.renderer.buildText(this), a && a.textOutline && this.applyTextOutline(a.textOutline))
                                } return this
                            }; G.prototype.dashstyleSetter = function (a) {
                                var c = this["stroke-width"]; "inherit" === c && (c = 1); if (a = a && a.toLowerCase()) {
                                    var n =
                                        a.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(","); for (a = n.length; a--;)n[a] = "" + L(n[a]) * y(c, NaN); a = n.join(",").replace(/NaN/g, "none"); this.element.setAttribute("stroke-dasharray", a)
                                }
                            }; G.prototype.destroy = function () {
                                var a = this, c = a.element || {}, n = a.renderer, d = n.isSVG && "SPAN" === c.nodeName && a.parentGroup || void 0, h = c.ownerSVGElement;
                                c.onclick = c.onmouseout = c.onmouseover = c.onmousemove = c.point = null; r(a); if (a.clipPath && h) { var f = a.clipPath;[].forEach.call(h.querySelectorAll("[clip-path],[CLIP-PATH]"), function (a) { -1 < a.getAttribute("clip-path").indexOf(f.element.id) && a.removeAttribute("clip-path") }); a.clipPath = f.destroy() } if (a.stops) { for (h = 0; h < a.stops.length; h++)a.stops[h].destroy(); a.stops.length = 0; a.stops = void 0 } a.safeRemoveChild(c); for (n.styledMode || a.destroyShadows(); d && d.div && 0 === d.div.childNodes.length;)c = d.parentGroup, a.safeRemoveChild(d.div),
                                    delete d.div, d = c; a.alignTo && m(n.alignedObjects, a); P(a, function (c, n) { a[n] && a[n].parentGroup === a && a[n].destroy && a[n].destroy(); delete a[n] })
                            }; G.prototype.destroyShadows = function () { (this.shadows || []).forEach(function (a) { this.safeRemoveChild(a) }, this); this.shadows = void 0 }; G.prototype.destroyTextPath = function (a, c) {
                                var n = a.getElementsByTagName("text")[0]; if (n) {
                                    if (n.removeAttribute("dx"), n.removeAttribute("dy"), c.element.setAttribute("id", ""), this.textPathWrapper && n.getElementsByTagName("textPath").length) {
                                        for (a =
                                            this.textPathWrapper.element.childNodes; a.length;)n.appendChild(a[0]); n.removeChild(this.textPathWrapper.element)
                                    }
                                } else if (a.getAttribute("dx") || a.getAttribute("dy")) a.removeAttribute("dx"), a.removeAttribute("dy"); this.textPathWrapper && (this.textPathWrapper = this.textPathWrapper.destroy())
                            }; G.prototype.dSetter = function (a, c, n) {
                            h(a) && ("string" === typeof a[0] && (a = this.renderer.pathToSegments(a)), this.pathArray = a, a = a.reduce(function (a, c, n) { return c && c.join ? (n ? a + " " : "") + c.join(" ") : (c || "").toString() }, ""));
                                /(NaN| {2}|^$)/.test(a) && (a = "M 0 0"); this[c] !== a && (n.setAttribute(c, a), this[c] = a)
                            }; G.prototype.fadeOut = function (a) { var c = this; c.animate({ opacity: 0 }, { duration: y(a, 150), complete: function () { c.attr({ y: -9999 }).hide() } }) }; G.prototype.fillSetter = function (a, c, n) { "string" === typeof a ? n.setAttribute(c, a) : a && this.complexColor(a, c, n) }; G.prototype.getBBox = function (c, d) {
                                var n, u = this.renderer, h = this.element, f = this.styles, x = this.textStr, g = u.cache, J = u.cacheKeys, m = h.namespaceURI === this.SVG_NS; d = y(d, this.rotation, 0);
                                var p = u.styledMode ? h && G.prototype.getStyle.call(h, "font-size") : f && f.fontSize; if (z(x)) { var v = x.toString(); -1 === v.indexOf("<") && (v = v.replace(/[0-9]/g, "0")); v += ["", d, p, this.textWidth, f && f.textOverflow, f && f.fontWeight].join() } v && !c && (n = g[v]); if (!n) {
                                    if (m || u.forExport) {
                                        try { var K = this.fakeTS && function (a) { var c = h.querySelector(".highcharts-text-outline"); c && Q(c, { display: a }) }; a(K) && K("none"); n = h.getBBox ? t({}, h.getBBox()) : { width: h.offsetWidth, height: h.offsetHeight }; a(K) && K("") } catch (da) { "" } if (!n || 0 > n.width) n =
                                            { width: 0, height: 0 }
                                    } else n = this.htmlGetBBox(); u.isSVG && (c = n.width, u = n.height, m && (n.height = u = { "11px,17": 14, "13px,20": 16 }[f && f.fontSize + "," + Math.round(u)] || u), d && (f = d * A, n.width = Math.abs(u * Math.sin(f)) + Math.abs(c * Math.cos(f)), n.height = Math.abs(u * Math.cos(f)) + Math.abs(c * Math.sin(f)))); if (v && 0 < n.height) { for (; 250 < J.length;)delete g[J.shift()]; g[v] || J.push(v); g[v] = n }
                                } return n
                            }; G.prototype.getStyle = function (a) { return p.getComputedStyle(this.element || this, "").getPropertyValue(a) }; G.prototype.hasClass = function (a) {
                                return -1 !==
                                    ("" + this.attr("class")).split(" ").indexOf(a)
                            }; G.prototype.hide = function (a) { a ? this.attr({ y: -9999 }) : this.attr({ visibility: "hidden" }); return this }; G.prototype.htmlGetBBox = function () { return { height: 0, width: 0, x: 0, y: 0 } }; G.prototype.init = function (a, c) { this.element = "span" === c ? I(c) : k.createElementNS(this.SVG_NS, c); this.renderer = a; d(this, "afterInit") }; G.prototype.invert = function (a) { this.inverted = a; this.updateTransform(); return this }; G.prototype.on = function (a, c) {
                                var n, d, h = this.element, u; C && "click" === a ? (h.ontouchstart =
                                    function (a) { n = a.touches[0].clientX; d = a.touches[0].clientY }, h.ontouchend = function (a) { n && 4 <= Math.sqrt(Math.pow(n - a.changedTouches[0].clientX, 2) + Math.pow(d - a.changedTouches[0].clientY, 2)) || c.call(h, a); u = !0; !1 !== a.cancelable && a.preventDefault() }, h.onclick = function (a) { u || c.call(h, a) }) : h["on" + a] = c; return this
                            }; G.prototype.opacitySetter = function (a, c, n) { this.opacity = a = Number(Number(a).toFixed(3)); n.setAttribute(c, a) }; G.prototype.removeClass = function (a) {
                                return this.attr("class", ("" + this.attr("class")).replace(v(a) ?
                                    new RegExp("(^| )" + a + "( |$)") : a, " ").replace(/ +/g, " ").trim())
                            }; G.prototype.removeTextOutline = function () { var a = this.element.querySelector("tspan.highcharts-text-outline"); a && this.safeRemoveChild(a) }; G.prototype.safeRemoveChild = function (a) { var c = a.parentNode; c && c.removeChild(a) }; G.prototype.setRadialReference = function (a) { var c = this.element.gradient && this.renderer.gradients[this.element.gradient]; this.element.radialReference = a; c && c.radAttr && c.animate(this.renderer.getRadialAttr(a, c.radAttr)); return this };
                        G.prototype.setTextPath = function (a, d) {
                            var n = this.element, h = this.text ? this.text.element : n, f = { textAnchor: "text-anchor" }, u = !1, x = this.textPathWrapper, m = !x; d = K(!0, { enabled: !0, attributes: { dy: -5, startOffset: "50%", textAnchor: "middle" } }, d); var J = b.filterUserAttributes(d.attributes); if (a && d && d.enabled) {
                                x && null === x.element.parentNode ? (m = !0, x = x.destroy()) : x && this.removeTextOutline.call(x.parentGroup); this.options && this.options.padding && (J.dx = -this.options.padding); x || (this.textPathWrapper = x = this.renderer.createElement("textPath"),
                                    u = !0); var v = x.element; (d = a.element.getAttribute("id")) || a.element.setAttribute("id", d = N()); if (m) for (h.setAttribute("y", 0), c(J.dx) && h.setAttribute("x", -J.dx), a = [].slice.call(h.childNodes), m = 0; m < a.length; m++) { var p = a[m]; p.nodeType !== Node.TEXT_NODE && "tspan" !== p.nodeName || v.appendChild(p) } u && x && x.add({ element: h }); v.setAttributeNS("http://www.w3.org/1999/xlink", "href", this.renderer.url + "#" + d); z(J.dy) && (v.parentNode.setAttribute("dy", J.dy), delete J.dy); z(J.dx) && (v.parentNode.setAttribute("dx", J.dx), delete J.dx);
                                P(J, function (a, c) { v.setAttribute(f[c] || c, a) }); n.removeAttribute("transform"); this.removeTextOutline.call(x); this.text && !this.renderer.styledMode && this.attr({ fill: "none", "stroke-width": 0 }); this.applyTextOutline = this.updateTransform = g
                            } else x && (delete this.updateTransform, delete this.applyTextOutline, this.destroyTextPath(n, a), this.updateTransform(), this.options && this.options.rotation && this.applyTextOutline(this.options.style.textOutline)); return this
                        }; G.prototype.shadow = function (a, c, n) {
                            var d = [], h = this.element,
                            f = !1, x = this.oldShadowOptions; var u = { color: D.neutralColor100, offsetX: 1, offsetY: 1, opacity: .15, width: 3 }; var J; !0 === a ? J = u : "object" === typeof a && (J = t(u, a)); J && (J && x && P(J, function (a, c) { a !== x[c] && (f = !0) }), f && this.destroyShadows(), this.oldShadowOptions = J); if (!J) this.destroyShadows(); else if (!this.shadows) {
                                var g = J.opacity / J.width; var m = this.parentInverted ? "translate(-1,-1)" : "translate(" + J.offsetX + ", " + J.offsetY + ")"; for (u = 1; u <= J.width; u++) {
                                    var v = h.cloneNode(!1); var p = 2 * J.width + 1 - 2 * u; B(v, {
                                        stroke: a.color || D.neutralColor100,
                                        "stroke-opacity": g * u, "stroke-width": p, transform: m, fill: "none"
                                    }); v.setAttribute("class", (v.getAttribute("class") || "") + " highcharts-shadow"); n && (B(v, "height", Math.max(B(v, "height") - p, 0)), v.cutHeight = p); c ? c.element.appendChild(v) : h.parentNode && h.parentNode.insertBefore(v, h); d.push(v)
                                } this.shadows = d
                            } return this
                        }; G.prototype.show = function (a) { return this.attr({ visibility: a ? "inherit" : "visible" }) }; G.prototype.strokeSetter = function (a, c, n) {
                        this[c] = a; this.stroke && this["stroke-width"] ? (G.prototype.fillSetter.call(this,
                            this.stroke, "stroke", n), n.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0) : "stroke-width" === c && 0 === a && this.hasStroke ? (n.removeAttribute("stroke"), this.hasStroke = !1) : this.renderer.styledMode && this["stroke-width"] && (n.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0)
                        }; G.prototype.strokeWidth = function () {
                            if (!this.renderer.styledMode) return this["stroke-width"] || 0; var a = this.getStyle("stroke-width"), c = 0; if (a.indexOf("px") === a.length - 2) c = L(a); else if ("" !== a) {
                                var n =
                                    k.createElementNS(f, "rect"); B(n, { width: a, "stroke-width": 0 }); this.element.parentNode.appendChild(n); c = n.getBBox().width; n.parentNode.removeChild(n)
                            } return c
                        }; G.prototype.symbolAttr = function (a) { var c = this; "x y r start end width height innerR anchorX anchorY clockwise".split(" ").forEach(function (n) { c[n] = y(a[n], c[n]) }); c.attr({ d: c.renderer.symbols[c.symbolName](c.x, c.y, c.width, c.height, c) }) }; G.prototype.textSetter = function (a) { a !== this.textStr && (delete this.textPxLength, this.textStr = a, this.added && this.renderer.buildText(this)) };
                        G.prototype.titleSetter = function (a) { var c = this.element, n = c.getElementsByTagName("title")[0] || k.createElementNS(this.SVG_NS, "title"); c.insertBefore ? c.insertBefore(n, c.firstChild) : c.appendChild(n); n.textContent = String(y(a, "")).replace(/<[^>]*>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">") }; G.prototype.toFront = function () { var a = this.element; a.parentNode.appendChild(a); return this }; G.prototype.translate = function (a, c) { return this.attr({ translateX: a, translateY: c }) }; G.prototype.updateShadows = function (a,
                            c, n) { var d = this.shadows; if (d) for (var h = d.length; h--;)n.call(d[h], "height" === a ? Math.max(c - (d[h].cutHeight || 0), 0) : "d" === a ? this.d : c, a, d[h]) }; G.prototype.updateTransform = function () {
                                var a = this.translateX || 0, c = this.translateY || 0, n = this.scaleX, d = this.scaleY, h = this.inverted, f = this.rotation, x = this.matrix, g = this.element; h && (a += this.width, c += this.height); a = ["translate(" + a + "," + c + ")"]; z(x) && a.push("matrix(" + x.join(",") + ")"); h ? a.push("rotate(90) scale(-1,1)") : f && a.push("rotate(" + f + " " + y(this.rotationOriginX, g.getAttribute("x"),
                                    0) + " " + y(this.rotationOriginY, g.getAttribute("y") || 0) + ")"); (z(n) || z(d)) && a.push("scale(" + y(n, 1) + " " + y(d, 1) + ")"); a.length && g.setAttribute("transform", a.join(" "))
                            }; G.prototype.visibilitySetter = function (a, c, n) { "inherit" === a ? n.removeAttribute(c) : this[c] !== a && n.setAttribute(c, a); this[c] = a }; G.prototype.xGetter = function (a) { "circle" === this.element.nodeName && ("x" === a ? a = "cx" : "y" === a && (a = "cy")); return this._defaultGetter(a) }; G.prototype.zIndexSetter = function (a, c) {
                                var n = this.renderer, d = this.parentGroup, h = (d ||
                                    n).element || n.box, f = this.element, x = !1; n = h === n.box; var g = this.added; var J; z(a) ? (f.setAttribute("data-z-index", a), a = +a, this[c] === a && (g = !1)) : z(this[c]) && f.removeAttribute("data-z-index"); this[c] = a; if (g) { (a = this.zIndex) && d && (d.handleZ = !0); c = h.childNodes; for (J = c.length - 1; 0 <= J && !x; J--) { d = c[J]; g = d.getAttribute("data-z-index"); var m = !z(g); if (d !== f) if (0 > a && m && !n && !J) h.insertBefore(f, c[J]), x = !0; else if (L(g) <= a || m && (!z(a) || 0 <= a)) h.insertBefore(f, c[J + 1] || null), x = !0 } x || (h.insertBefore(f, c[n ? 3 : 0] || null), x = !0) } return x
                            };
                        return G
                    }(); e.prototype["stroke-widthSetter"] = e.prototype.strokeSetter; e.prototype.yGetter = e.prototype.xGetter; e.prototype.matrixSetter = e.prototype.rotationOriginXSetter = e.prototype.rotationOriginYSetter = e.prototype.rotationSetter = e.prototype.scaleXSetter = e.prototype.scaleYSetter = e.prototype.translateXSetter = e.prototype.translateYSetter = e.prototype.verticalAlignSetter = function (a, c) { this[c] = a; this.doTransform = !0 }; w.SVGElement = e; return w.SVGElement
            }); O(l, "Core/Renderer/SVG/SVGLabel.js", [l["Core/Renderer/SVG/SVGElement.js"],
            l["Core/Utilities.js"]], function (e, b) {
                function l(k, b) { E(k) ? k !== this[b] && (this[b] = k, this.updateTextPadding()) : this[b] = void 0 } var w = this && this.__extends || function () { var k = function (b, g) { k = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (g, f) { g.__proto__ = f } || function (g, f) { for (var p in f) f.hasOwnProperty(p) && (g[p] = f[p]) }; return k(b, g) }; return function (b, g) { function q() { this.constructor = b } k(b, g); b.prototype = null === g ? Object.create(g) : (q.prototype = g.prototype, new q) } }(), D = b.defined, F = b.extend,
                    E = b.isNumber, H = b.merge, r = b.pick, A = b.removeEvent; return function (k) {
                        function b(g, q, f, p, B, I, C, z, m, t) {
                            var d = k.call(this) || this; d.paddingSetter = l; d.paddingLeftSetter = l; d.paddingRightSetter = l; d.init(g, "g"); d.textStr = q; d.x = f; d.y = p; d.anchorX = I; d.anchorY = C; d.baseline = m; d.className = t; "button" !== t && d.addClass("highcharts-label"); t && d.addClass("highcharts-" + t); d.text = g.text("", 0, 0, z).attr({ zIndex: 1 }); if ("string" === typeof B) { var h = /^url\((.*?)\)$/.test(B); if (d.renderer.symbols[B] || h) d.symbolKey = B } d.bBox = b.emptyBBox;
                            d.padding = 3; d.baselineOffset = 0; d.needsBox = g.styledMode || h; d.deferredAttr = {}; d.alignFactor = 0; return d
                        } w(b, k); b.prototype.alignSetter = function (g) { g = { left: 0, center: .5, right: 1 }[g]; g !== this.alignFactor && (this.alignFactor = g, this.bBox && E(this.xSetting) && this.attr({ x: this.xSetting })) }; b.prototype.anchorXSetter = function (g, b) { this.anchorX = g; this.boxAttr(b, Math.round(g) - this.getCrispAdjust() - this.xSetting) }; b.prototype.anchorYSetter = function (g, b) { this.anchorY = g; this.boxAttr(b, g - this.ySetting) }; b.prototype.boxAttr =
                            function (g, b) { this.box ? this.box.attr(g, b) : this.deferredAttr[g] = b }; b.prototype.css = function (g) { if (g) { var k = {}; g = H(g); b.textProps.forEach(function (f) { "undefined" !== typeof g[f] && (k[f] = g[f], delete g[f]) }); this.text.css(k); var f = "width" in k; "fontSize" in k || "fontWeight" in k ? this.updateTextPadding() : f && this.updateBoxSize() } return e.prototype.css.call(this, g) }; b.prototype.destroy = function () {
                                A(this.element, "mouseenter"); A(this.element, "mouseleave"); this.text && this.text.destroy(); this.box && (this.box = this.box.destroy());
                                e.prototype.destroy.call(this)
                            }; b.prototype.fillSetter = function (g, b) { g && (this.needsBox = !0); this.fill = g; this.boxAttr(b, g) }; b.prototype.getBBox = function () { var g = this.bBox, b = this.padding, f = r(this.paddingLeft, b); return { width: this.width, height: this.height, x: g.x - f, y: g.y - b } }; b.prototype.getCrispAdjust = function () { return this.renderer.styledMode && this.box ? this.box.strokeWidth() % 2 / 2 : (this["stroke-width"] ? parseInt(this["stroke-width"], 10) : 0) % 2 / 2 }; b.prototype.heightSetter = function (g) { this.heightSetting = g }; b.prototype.on =
                                function (g, b) { var f = this, p = f.text, k = p && "SPAN" === p.element.tagName ? p : void 0; if (k) { var q = function (p) { ("mouseenter" === g || "mouseleave" === g) && p.relatedTarget instanceof Element && (f.element.contains(p.relatedTarget) || k.element.contains(p.relatedTarget)) || b.call(f.element, p) }; k.on(g, q) } e.prototype.on.call(f, g, q || b); return f }; b.prototype.onAdd = function () { var g = this.textStr; this.text.add(this); this.attr({ text: D(g) ? g : "", x: this.x, y: this.y }); this.box && D(this.anchorX) && this.attr({ anchorX: this.anchorX, anchorY: this.anchorY }) };
                        b.prototype.rSetter = function (g, b) { this.boxAttr(b, g) }; b.prototype.shadow = function (g) { g && !this.renderer.styledMode && (this.updateBoxSize(), this.box && this.box.shadow(g)); return this }; b.prototype.strokeSetter = function (g, b) { this.stroke = g; this.boxAttr(b, g) }; b.prototype["stroke-widthSetter"] = function (g, b) { g && (this.needsBox = !0); this["stroke-width"] = g; this.boxAttr(b, g) }; b.prototype["text-alignSetter"] = function (g) { this.textAlign = g }; b.prototype.textSetter = function (g) {
                        "undefined" !== typeof g && this.text.attr({ text: g });
                            this.updateTextPadding()
                        }; b.prototype.updateBoxSize = function () {
                            var g = this.text.element.style, k = {}, f = this.padding, p = this.bBox = E(this.widthSetting) && E(this.heightSetting) && !this.textAlign || !D(this.text.textStr) ? b.emptyBBox : this.text.getBBox(); this.width = this.getPaddedWidth(); this.height = (this.heightSetting || p.height || 0) + 2 * f; this.baselineOffset = f + Math.min(this.renderer.fontMetrics(g && g.fontSize, this.text).b, p.height || Infinity); this.needsBox && (this.box || (g = this.box = this.symbolKey ? this.renderer.symbol(this.symbolKey) :
                                this.renderer.rect(), g.addClass(("button" === this.className ? "" : "highcharts-label-box") + (this.className ? " highcharts-" + this.className + "-box" : "")), g.add(this)), g = this.getCrispAdjust(), k.x = g, k.y = (this.baseline ? -this.baselineOffset : 0) + g, k.width = Math.round(this.width), k.height = Math.round(this.height), this.box.attr(F(k, this.deferredAttr)), this.deferredAttr = {})
                        }; b.prototype.updateTextPadding = function () {
                            var g = this.text; this.updateBoxSize(); var b = this.baseline ? 0 : this.baselineOffset, f = r(this.paddingLeft, this.padding);
                            D(this.widthSetting) && this.bBox && ("center" === this.textAlign || "right" === this.textAlign) && (f += { center: .5, right: 1 }[this.textAlign] * (this.widthSetting - this.bBox.width)); if (f !== g.x || b !== g.y) g.attr("x", f), g.hasBoxWidthChanged && (this.bBox = g.getBBox(!0)), "undefined" !== typeof b && g.attr("y", b); g.x = f; g.y = b
                        }; b.prototype.widthSetter = function (g) { this.widthSetting = E(g) ? g : void 0 }; b.prototype.getPaddedWidth = function () {
                            var g = this.padding, b = r(this.paddingLeft, g); g = r(this.paddingRight, g); return (this.widthSetting || this.bBox.width ||
                                0) + b + g
                        }; b.prototype.xSetter = function (g) { this.x = g; this.alignFactor && (g -= this.alignFactor * this.getPaddedWidth(), this["forceAnimate:x"] = !0); this.xSetting = Math.round(g); this.attr("translateX", this.xSetting) }; b.prototype.ySetter = function (g) { this.ySetting = this.y = Math.round(g); this.attr("translateY", this.ySetting) }; b.emptyBBox = { width: 0, height: 0, x: 0, y: 0 }; b.textProps = "color direction fontFamily fontSize fontStyle fontWeight lineHeight textAlign textDecoration textOutline textOverflow width".split(" "); return b
                    }(e)
            });
    O(l, "Core/Renderer/SVG/TextBuilder.js", [l["Core/Globals.js"], l["Core/Utilities.js"], l["Core/Renderer/HTML/AST.js"]], function (e, b, l) {
        var w = e.doc, D = e.SVG_NS, U = b.attr, E = b.isString, H = b.objectEach, r = b.pick; return function () {
            function b(b) { var k = b.styles; this.renderer = b.renderer; this.svgElement = b; this.width = b.textWidth; this.textLineHeight = k && k.lineHeight; this.textOutline = k && k.textOutline; this.ellipsis = !(!k || "ellipsis" !== k.textOverflow); this.noWrap = !(!k || "nowrap" !== k.whiteSpace); this.fontSize = k && k.fontSize }
            b.prototype.buildSVG = function () {
                var b = this.svgElement, C = b.element, g = b.renderer, q = r(b.textStr, "").toString(), f = -1 !== q.indexOf("<"), p = C.childNodes, B = p.length; g = this.width && !b.added && g.box; var I = /<br.*?>/g; var e = [q, this.ellipsis, this.noWrap, this.textLineHeight, this.textOutline, this.fontSize, this.width].join(); if (e !== b.textCache) {
                b.textCache = e; for (delete b.actualWidth; B--;)C.removeChild(p[B]); f || this.ellipsis || this.width || -1 !== q.indexOf(" ") && (!this.noWrap || I.test(q)) ? "" !== q && (g && g.appendChild(C), q = new l(q),
                    this.modifyTree(q.nodes), q.addToDOM(b.element), this.modifyDOM(), this.ellipsis && -1 !== (C.textContent || "").indexOf("\u2026") && b.attr("title", this.unescapeEntities(b.textStr || "", ["&lt;", "&gt;"])), g && g.removeChild(C)) : C.appendChild(w.createTextNode(this.unescapeEntities(q))); E(this.textOutline) && b.applyTextOutline && b.applyTextOutline(this.textOutline)
                }
            }; b.prototype.modifyDOM = function () {
                var b = this, e = this.svgElement, g = U(e.element, "x");[].forEach.call(e.element.querySelectorAll("tspan.highcharts-br"), function (f) {
                f.nextSibling &&
                    f.previousSibling && U(f, { dy: b.getLineHeight(f.nextSibling), x: g })
                }); var q = this.width || 0; if (q) {
                    var f = function (f, p) {
                        var k = f.textContent || "", B = k.replace(/([^\^])-/g, "$1- ").split(" "), m = !b.noWrap && (1 < B.length || 1 < e.element.childNodes.length), t = b.getLineHeight(p), d = 0, h = e.actualWidth; if (b.ellipsis) k && b.truncate(f, k, void 0, 0, Math.max(0, q - parseInt(b.fontSize || 12, 10)), function (a, c) { return a.substring(0, c) + "\u2026" }); else if (m) {
                            k = []; for (m = []; p.firstChild && p.firstChild !== f;)m.push(p.firstChild), p.removeChild(p.firstChild);
                            for (; B.length;)B.length && !b.noWrap && 0 < d && (k.push(f.textContent || ""), f.textContent = B.join(" ").replace(/- /g, "-")), b.truncate(f, void 0, B, 0 === d ? h || 0 : 0, q, function (a, c) { return B.slice(0, c).join(" ").replace(/- /g, "-") }), h = e.actualWidth, d++; m.forEach(function (a) { p.insertBefore(a, f) }); k.forEach(function (a) { p.insertBefore(w.createTextNode(a), f); a = w.createElementNS(D, "tspan"); a.textContent = "\u200b"; U(a, { dy: t, x: g }); p.insertBefore(a, f) })
                        }
                    }, p = function (g) {
                        [].slice.call(g.childNodes).forEach(function (b) {
                        b.nodeType ===
                            Node.TEXT_NODE ? f(b, g) : (-1 !== b.className.baseVal.indexOf("highcharts-br") && (e.actualWidth = 0), p(b))
                        })
                    }; p(e.element)
                }
            }; b.prototype.getLineHeight = function (b) { var k; b = b.nodeType === Node.TEXT_NODE ? b.parentElement : b; this.renderer.styledMode || (k = b && /(px|em)$/.test(b.style.fontSize) ? b.style.fontSize : this.fontSize || this.renderer.style.fontSize || 12); return this.textLineHeight ? parseInt(this.textLineHeight.toString(), 10) : this.renderer.fontMetrics(k, b || this.svgElement.element).h }; b.prototype.modifyTree = function (b) {
                var k =
                    this, g = function (q, f) {
                        var p = q.tagName, B = k.renderer.styledMode, I = q.attributes || {}; if ("b" === p || "strong" === p) B ? I["class"] = "highcharts-strong" : I.style = "font-weight:bold;" + (I.style || ""); else if ("i" === p || "em" === p) B ? I["class"] = "highcharts-emphasized" : I.style = "font-style:italic;" + (I.style || ""); E(I.style) && (I.style = I.style.replace(/(;| |^)color([ :])/, "$1fill$2")); "br" === p && (I["class"] = "highcharts-br", q.textContent = "\u200b", (f = b[f + 1]) && f.textContent && (f.textContent = f.textContent.replace(/^ +/gm, ""))); "#text" !==
                            p && "a" !== p && (q.tagName = "tspan"); q.attributes = I; q.children && q.children.filter(function (f) { return "#text" !== f.tagName }).forEach(g)
                    }; for (b.forEach(g); b[0] && "tspan" === b[0].tagName && !b[0].children;)b.splice(0, 1)
            }; b.prototype.truncate = function (b, e, g, q, f, p) {
                var k = this.svgElement, I = k.renderer, A = k.rotation, z = [], m = g ? 1 : 0, t = (e || g || "").length, d = t, h, a = function (a, c) {
                    c = c || a; var d = b.parentNode; if (d && "undefined" === typeof z[c]) if (d.getSubStringLength) try { z[c] = q + d.getSubStringLength(0, g ? c + 1 : c) } catch (y) { "" } else I.getSpanWidth &&
                        (b.textContent = p(e || g, a), z[c] = q + I.getSpanWidth(k, b)); return z[c]
                }; k.rotation = 0; var c = a(b.textContent.length); if (q + c > f) { for (; m <= t;)d = Math.ceil((m + t) / 2), g && (h = p(g, d)), c = a(d, h && h.length - 1), m === t ? m = t + 1 : c > f ? t = d - 1 : m = d; 0 === t ? b.textContent = "" : e && t === e.length - 1 || (b.textContent = h || p(e || g, d)) } g && g.splice(0, d); k.actualWidth = c; k.rotation = A
            }; b.prototype.unescapeEntities = function (b, e) { H(this.renderer.escapes, function (g, k) { e && -1 !== e.indexOf(g) || (b = b.toString().replace(new RegExp(g, "g"), k)) }); return b }; return b
        }()
    });
    O(l, "Core/Renderer/SVG/SVGRenderer.js", [l["Core/Color/Color.js"], l["Core/Globals.js"], l["Core/Color/Palette.js"], l["Core/Renderer/SVG/SVGElement.js"], l["Core/Renderer/SVG/SVGLabel.js"], l["Core/Renderer/HTML/AST.js"], l["Core/Renderer/SVG/TextBuilder.js"], l["Core/Utilities.js"]], function (e, b, l, w, D, F, E, H) {
        var r = H.addEvent, A = H.attr, k = H.createElement, C = H.css, g = H.defined, q = H.destroyObjectProperties, f = H.extend, p = H.isArray, B = H.isNumber, I = H.isObject, Q = H.isString, z = H.merge, m = H.pick, t = H.pInt, d = H.uniqueKey, h =
            b.charts, a = b.deg2rad, c = b.doc, v = b.isFirefox, K = b.isMS, P = b.isWebKit; H = b.noop; var y = b.SVG_NS, L = b.symbolSizes, S = b.win, N = function () {
                function b(a, c, n, d, h, f, x) { this.width = this.url = this.style = this.isSVG = this.imgCount = this.height = this.gradients = this.globalAnimation = this.defs = this.chartIndex = this.cacheKeys = this.cache = this.boxWrapper = this.box = this.alignedObjects = void 0; this.init(a, c, n, d, h, f, x) } b.prototype.init = function (a, d, n, h, f, g, x) {
                    var M = this.createElement("svg").attr({ version: "1.1", "class": "highcharts-root" });
                    x || M.css(this.getStyle(h)); h = M.element; a.appendChild(h); A(a, "dir", "ltr"); -1 === a.innerHTML.indexOf("xmlns") && A(h, "xmlns", this.SVG_NS); this.isSVG = !0; this.box = h; this.boxWrapper = M; this.alignedObjects = []; this.url = (v || P) && c.getElementsByTagName("base").length ? S.location.href.split("#")[0].replace(/<[^>]*>/g, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : ""; this.createElement("desc").add().element.appendChild(c.createTextNode("Created with Highcharts 9.0.0")); this.defs = this.createElement("defs").add();
                    this.allowHTML = g; this.forExport = f; this.styledMode = x; this.gradients = {}; this.cache = {}; this.cacheKeys = []; this.imgCount = 0; this.setSize(d, n, !1); var b; v && a.getBoundingClientRect && (d = function () { C(a, { left: 0, top: 0 }); b = a.getBoundingClientRect(); C(a, { left: Math.ceil(b.left) - b.left + "px", top: Math.ceil(b.top) - b.top + "px" }) }, d(), this.unSubPixelFix = r(S, "resize", d))
                }; b.prototype.definition = function (a) { return (new F([a])).addToDOM(this.defs.element) }; b.prototype.getStyle = function (a) {
                    return this.style = f({
                        fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                        fontSize: "12px"
                    }, a)
                }; b.prototype.setStyle = function (a) { this.boxWrapper.css(this.getStyle(a)) }; b.prototype.isHidden = function () { return !this.boxWrapper.getBBox().width }; b.prototype.destroy = function () { var a = this.defs; this.box = null; this.boxWrapper = this.boxWrapper.destroy(); q(this.gradients || {}); this.gradients = null; a && (this.defs = a.destroy()); this.unSubPixelFix && this.unSubPixelFix(); return this.alignedObjects = null }; b.prototype.createElement = function (a) { var c = new this.Element; c.init(this, a); return c }; b.prototype.getRadialAttr =
                    function (a, c) { return { cx: a[0] - a[2] / 2 + c.cx * a[2], cy: a[1] - a[2] / 2 + c.cy * a[2], r: c.r * a[2] } }; b.prototype.buildText = function (a) { (new E(a)).buildSVG() }; b.prototype.getContrast = function (a) { a = e.parse(a).rgba; a[0] *= 1; a[1] *= 1.2; a[2] *= .5; return 459 < a[0] + a[1] + a[2] ? "#000000" : "#FFFFFF" }; b.prototype.button = function (a, c, n, d, h, b, x, g, J, m) {
                        var M = this.label(a, c, n, J, void 0, void 0, m, void 0, "button"), p = 0, v = this.styledMode, u = h ? z(h) : {}; a = u && u.style || {}; u = F.filterUserAttributes(u); M.attr(z({ padding: 8, r: 2 }, u)); if (!v) {
                            u = z({
                                fill: l.neutralColor3,
                                stroke: l.neutralColor20, "stroke-width": 1, style: { color: l.neutralColor80, cursor: "pointer", fontWeight: "normal" }
                            }, { style: a }, u); var t = u.style; delete u.style; b = z(u, { fill: l.neutralColor10 }, F.filterUserAttributes(b || {})); var T = b.style; delete b.style; x = z(u, { fill: l.highlightColor10, style: { color: l.neutralColor100, fontWeight: "bold" } }, F.filterUserAttributes(x || {})); var k = x.style; delete x.style; g = z(u, { style: { color: l.neutralColor20 } }, F.filterUserAttributes(g || {})); var y = g.style; delete g.style
                        } r(M.element, K ? "mouseover" :
                            "mouseenter", function () { 3 !== p && M.setState(1) }); r(M.element, K ? "mouseout" : "mouseleave", function () { 3 !== p && M.setState(p) }); M.setState = function (a) { 1 !== a && (M.state = p = a); M.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][a || 0]); v || M.attr([u, b, x, g][a || 0]).css([t, T, k, y][a || 0]) }; v || M.attr(u).css(f({ cursor: "default" }, t)); return M.on("click", function (a) { 3 !== p && d.call(M, a) })
                    }; b.prototype.crispLine = function (a, c, n) {
                    void 0 === n &&
                        (n = "round"); var d = a[0], h = a[1]; d[1] === h[1] && (d[1] = h[1] = Math[n](d[1]) - c % 2 / 2); d[2] === h[2] && (d[2] = h[2] = Math[n](d[2]) + c % 2 / 2); return a
                    }; b.prototype.path = function (a) { var c = this.styledMode ? {} : { fill: "none" }; p(a) ? c.d = a : I(a) && f(c, a); return this.createElement("path").attr(c) }; b.prototype.circle = function (a, c, n) { a = I(a) ? a : "undefined" === typeof a ? {} : { x: a, y: c, r: n }; c = this.createElement("circle"); c.xSetter = c.ySetter = function (a, c, n) { n.setAttribute("c" + c, a) }; return c.attr(a) }; b.prototype.arc = function (a, c, n, d, h, f) {
                        I(a) ?
                        (d = a, c = d.y, n = d.r, a = d.x) : d = { innerR: d, start: h, end: f }; a = this.symbol("arc", a, c, n, n, d); a.r = n; return a
                    }; b.prototype.rect = function (a, c, n, d, h, f) { h = I(a) ? a.r : h; var x = this.createElement("rect"); a = I(a) ? a : "undefined" === typeof a ? {} : { x: a, y: c, width: Math.max(n, 0), height: Math.max(d, 0) }; this.styledMode || ("undefined" !== typeof f && (a.strokeWidth = f, a = x.crisp(a)), a.fill = "none"); h && (a.r = h); x.rSetter = function (a, c, n) { x.r = a; A(n, { rx: a, ry: a }) }; x.rGetter = function () { return x.r }; return x.attr(a) }; b.prototype.setSize = function (a, c,
                        n) { var d = this.alignedObjects, h = d.length; this.width = a; this.height = c; for (this.boxWrapper.animate({ width: a, height: c }, { step: function () { this.attr({ viewBox: "0 0 " + this.attr("width") + " " + this.attr("height") }) }, duration: m(n, !0) ? void 0 : 0 }); h--;)d[h].align() }; b.prototype.g = function (a) { var c = this.createElement("g"); return a ? c.attr({ "class": "highcharts-" + a }) : c }; b.prototype.image = function (a, c, n, d, h, b) {
                            var x = { preserveAspectRatio: "none" }, g = function (a, c) {
                                a.setAttributeNS ? a.setAttributeNS("http://www.w3.org/1999/xlink",
                                    "href", c) : a.setAttribute("hc-svg-href", c)
                            }, M = function (c) { g(m.element, a); b.call(m, c) }; 1 < arguments.length && f(x, { x: c, y: n, width: d, height: h }); var m = this.createElement("image").attr(x); b ? (g(m.element, "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="), x = new S.Image, r(x, "load", M), x.src = a, x.complete && M({})) : g(m.element, a); return m
                        }; b.prototype.symbol = function (a, d, n, b, p, v) {
                            var x = this, M = /^url\((.*?)\)$/, J = M.test(a), u = !J && (this.symbols[a] ? a : "circle"), t = u && this.symbols[u], K; if (t) {
                            "number" ===
                                typeof d && (K = t.call(this.symbols, Math.round(d || 0), Math.round(n || 0), b || 0, p || 0, v)); var y = this.path(K); x.styledMode || y.attr("fill", "none"); f(y, { symbolName: u, x: d, y: n, width: b, height: p }); v && f(y, v)
                            } else if (J) {
                                var B = a.match(M)[1]; y = this.image(B); y.imgwidth = m(L[B] && L[B].width, v && v.width); y.imgheight = m(L[B] && L[B].height, v && v.height); var q = function () { y.attr({ width: y.width, height: y.height }) };["width", "height"].forEach(function (a) {
                                y[a + "Setter"] = function (a, c) {
                                    var n = {}, d = this["img" + c], x = "width" === c ? "translateX" :
                                        "translateY"; this[c] = a; g(d) && (v && "within" === v.backgroundSize && this.width && this.height && (d = Math.round(d * Math.min(this.width / this.imgwidth, this.height / this.imgheight))), this.element && this.element.setAttribute(c, d), this.alignByTranslate || (n[x] = ((this[c] || 0) - d) / 2, this.attr(n)))
                                }
                                }); g(d) && y.attr({ x: d, y: n }); y.isImg = !0; g(y.imgwidth) && g(y.imgheight) ? q() : (y.attr({ width: 0, height: 0 }), k("img", {
                                    onload: function () {
                                        var a = h[x.chartIndex]; 0 === this.width && (C(this, { position: "absolute", top: "-999em" }), c.body.appendChild(this));
                                        L[B] = { width: this.width, height: this.height }; y.imgwidth = this.width; y.imgheight = this.height; y.element && q(); this.parentNode && this.parentNode.removeChild(this); x.imgCount--; if (!x.imgCount && a && !a.hasLoaded) a.onload()
                                    }, src: B
                                }), this.imgCount++)
                            } return y
                        }; b.prototype.clipRect = function (a, c, n, h) { var f = d() + "-", b = this.createElement("clipPath").attr({ id: f }).add(this.defs); a = this.rect(a, c, n, h, 0).add(b); a.id = f; a.clipPath = b; a.count = 0; return a }; b.prototype.text = function (a, c, n, d) {
                            var h = {}; if (d && (this.allowHTML || !this.forExport)) return this.html(a,
                                c, n); h.x = Math.round(c || 0); n && (h.y = Math.round(n)); g(a) && (h.text = a); a = this.createElement("text").attr(h); d || (a.xSetter = function (a, c, n) { var d = n.getElementsByTagName("tspan"), x = n.getAttribute(c), h; for (h = 0; h < d.length; h++) { var f = d[h]; f.getAttribute(c) === x && f.setAttribute(c, a) } n.setAttribute(c, a) }); return a
                        }; b.prototype.fontMetrics = function (a, c) {
                            a = !this.styledMode && /px/.test(a) || !S.getComputedStyle ? a || c && c.style && c.style.fontSize || this.style && this.style.fontSize : c && w.prototype.getStyle.call(c, "font-size");
                            a = /px/.test(a) ? t(a) : 12; c = 24 > a ? a + 3 : Math.round(1.2 * a); return { h: c, b: Math.round(.8 * c), f: a }
                        }; b.prototype.rotCorr = function (c, d, n) { var h = c; d && n && (h = Math.max(h * Math.cos(d * a), 4)); return { x: -c / 3 * Math.sin(d * a), y: h } }; b.prototype.pathToSegments = function (a) {
                            for (var c = [], n = [], d = { A: 8, C: 7, H: 2, L: 3, M: 3, Q: 5, S: 5, T: 3, V: 2 }, h = 0; h < a.length; h++)Q(n[0]) && B(a[h]) && n.length === d[n[0].toUpperCase()] && a.splice(h, 0, n[0].replace("M", "L").replace("m", "l")), "string" === typeof a[h] && (n.length && c.push(n.slice(0)), n.length = 0), n.push(a[h]);
                            c.push(n.slice(0)); return c
                        }; b.prototype.label = function (a, c, d, h, f, b, x, g, m) { return new D(this, a, c, d, h, f, b, x, g, m) }; return b
            }(); N.prototype.Element = w; N.prototype.SVG_NS = y; N.prototype.draw = H; N.prototype.escapes = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }; N.prototype.symbols = {
                circle: function (a, c, d, n) { return this.arc(a + d / 2, c + n / 2, d / 2, n / 2, { start: .5 * Math.PI, end: 2.5 * Math.PI, open: !1 }) }, square: function (a, c, d, n) { return [["M", a, c], ["L", a + d, c], ["L", a + d, c + n], ["L", a, c + n], ["Z"]] }, triangle: function (a,
                    c, d, n) { return [["M", a + d / 2, c], ["L", a + d, c + n], ["L", a, c + n], ["Z"]] }, "triangle-down": function (a, c, d, n) { return [["M", a, c], ["L", a + d, c], ["L", a + d / 2, c + n], ["Z"]] }, diamond: function (a, c, d, n) { return [["M", a + d / 2, c], ["L", a + d, c + n / 2], ["L", a + d / 2, c + n], ["L", a, c + n / 2], ["Z"]] }, arc: function (a, c, d, n, h) {
                        var f = []; if (h) {
                            var b = h.start || 0, x = h.end || 0, M = h.r || d; d = h.r || n || d; var J = .001 > Math.abs(x - b - 2 * Math.PI); x -= .001; n = h.innerR; J = m(h.open, J); var v = Math.cos(b), p = Math.sin(b), t = Math.cos(x), y = Math.sin(x); b = m(h.longArc, .001 > x - b - Math.PI ? 0 : 1);
                            f.push(["M", a + M * v, c + d * p], ["A", M, d, 0, b, m(h.clockwise, 1), a + M * t, c + d * y]); g(n) && f.push(J ? ["M", a + n * t, c + n * y] : ["L", a + n * t, c + n * y], ["A", n, n, 0, b, g(h.clockwise) ? 1 - h.clockwise : 0, a + n * v, c + n * p]); J || f.push(["Z"])
                        } return f
                    }, callout: function (a, c, d, n, h) {
                        var f = Math.min(h && h.r || 0, d, n), b = f + 6, x = h && h.anchorX; h = h && h.anchorY || 0; var g = [["M", a + f, c], ["L", a + d - f, c], ["C", a + d, c, a + d, c, a + d, c + f], ["L", a + d, c + n - f], ["C", a + d, c + n, a + d, c + n, a + d - f, c + n], ["L", a + f, c + n], ["C", a, c + n, a, c + n, a, c + n - f], ["L", a, c + f], ["C", a, c, a, c, a + f, c]]; if (!B(x)) return g; a +
                            x >= d ? h > c + b && h < c + n - b ? g.splice(3, 1, ["L", a + d, h - 6], ["L", a + d + 6, h], ["L", a + d, h + 6], ["L", a + d, c + n - f]) : g.splice(3, 1, ["L", a + d, n / 2], ["L", x, h], ["L", a + d, n / 2], ["L", a + d, c + n - f]) : 0 >= a + x ? h > c + b && h < c + n - b ? g.splice(7, 1, ["L", a, h + 6], ["L", a - 6, h], ["L", a, h - 6], ["L", a, c + f]) : g.splice(7, 1, ["L", a, n / 2], ["L", x, h], ["L", a, n / 2], ["L", a, c + f]) : h && h > n && x > a + b && x < a + d - b ? g.splice(5, 1, ["L", x + 6, c + n], ["L", x, c + n + 6], ["L", x - 6, c + n], ["L", a + f, c + n]) : h && 0 > h && x > a + b && x < a + d - b && g.splice(1, 1, ["L", x - 6, c], ["L", x, c - 6], ["L", x + 6, c], ["L", d - f, c]); return g
                    }
            }; b.SVGRenderer =
                N; b.Renderer = b.SVGRenderer; return b.Renderer
    }); O(l, "Core/Renderer/HTML/HTMLElement.js", [l["Core/Globals.js"], l["Core/Renderer/SVG/SVGElement.js"], l["Core/Utilities.js"]], function (e, b, l) {
        var w = l.css, D = l.defined, F = l.extend, E = l.pick, H = l.pInt, r = e.isFirefox; F(b.prototype, {
            htmlCss: function (b) {
                var k = "SPAN" === this.element.tagName && b && "width" in b, e = E(k && b.width, void 0); if (k) { delete b.width; this.textWidth = e; var g = !0 } b && "ellipsis" === b.textOverflow && (b.whiteSpace = "nowrap", b.overflow = "hidden"); this.styles = F(this.styles,
                    b); w(this.element, b); g && this.htmlUpdateTransform(); return this
            }, htmlGetBBox: function () { var b = this.element; return { x: b.offsetLeft, y: b.offsetTop, width: b.offsetWidth, height: b.offsetHeight } }, htmlUpdateTransform: function () {
                if (this.added) {
                    var b = this.renderer, k = this.element, e = this.translateX || 0, g = this.translateY || 0, q = this.x || 0, f = this.y || 0, p = this.textAlign || "left", B = { left: 0, center: .5, right: 1 }[p], I = this.styles, r = I && I.whiteSpace; w(k, { marginLeft: e, marginTop: g }); !b.styledMode && this.shadows && this.shadows.forEach(function (d) {
                        w(d,
                            { marginLeft: e + 1, marginTop: g + 1 })
                    }); this.inverted && [].forEach.call(k.childNodes, function (d) { b.invertChild(d, k) }); if ("SPAN" === k.tagName) {
                        I = this.rotation; var z = this.textWidth && H(this.textWidth), m = [I, p, k.innerHTML, this.textWidth, this.textAlign].join(), t; (t = z !== this.oldTextWidth) && !(t = z > this.oldTextWidth) && ((t = this.textPxLength) || (w(k, { width: "", whiteSpace: r || "nowrap" }), t = k.offsetWidth), t = t > z); t && (/[ \-]/.test(k.textContent || k.innerText) || "ellipsis" === k.style.textOverflow) ? (w(k, {
                            width: z + "px", display: "block",
                            whiteSpace: r || "normal"
                        }), this.oldTextWidth = z, this.hasBoxWidthChanged = !0) : this.hasBoxWidthChanged = !1; m !== this.cTT && (r = b.fontMetrics(k.style.fontSize, k).b, !D(I) || I === (this.oldRotation || 0) && p === this.oldAlign || this.setSpanRotation(I, B, r), this.getSpanCorrection(!D(I) && this.textPxLength || k.offsetWidth, r, B, I, p)); w(k, { left: q + (this.xCorr || 0) + "px", top: f + (this.yCorr || 0) + "px" }); this.cTT = m; this.oldRotation = I; this.oldAlign = p
                    }
                } else this.alignOnAdd = !0
            }, setSpanRotation: function (b, k, e) {
                var g = {}, q = this.renderer.getTransformKey();
                g[q] = g.transform = "rotate(" + b + "deg)"; g[q + (r ? "Origin" : "-origin")] = g.transformOrigin = 100 * k + "% " + e + "px"; w(this.element, g)
            }, getSpanCorrection: function (b, k, e) { this.xCorr = -b * e; this.yCorr = -k }
        }); return b
    }); O(l, "Core/Renderer/HTML/HTMLRenderer.js", [l["Core/Globals.js"], l["Core/Renderer/HTML/AST.js"], l["Core/Renderer/SVG/SVGElement.js"], l["Core/Renderer/SVG/SVGRenderer.js"], l["Core/Utilities.js"]], function (e, b, l, w, D) {
        var F = e.isFirefox, E = e.isMS, H = e.isWebKit, r = e.win, A = D.attr, k = D.createElement, C = D.extend, g = D.pick;
        C(w.prototype, {
            getTransformKey: function () { return E && !/Edge/.test(r.navigator.userAgent) ? "-ms-transform" : H ? "-webkit-transform" : F ? "MozTransform" : r.opera ? "-o-transform" : "" }, html: function (q, f, p) {
                var B = this.createElement("span"), e = B.element, r = B.renderer, z = r.isSVG, m = function (f, d) { ["opacity", "visibility"].forEach(function (h) { f[h + "Setter"] = function (a, c, b) { var g = f.div ? f.div.style : d; l.prototype[h + "Setter"].call(this, a, c, b); g && (g[c] = a) } }); f.addedSetters = !0 }; B.textSetter = function (f) {
                f !== this.textStr && (delete this.bBox,
                    delete this.oldTextWidth, b.setElementHTML(this.element, g(f, "")), this.textStr = f, B.doTransform = !0)
                }; z && m(B, B.element.style); B.xSetter = B.ySetter = B.alignSetter = B.rotationSetter = function (f, d) { "align" === d ? B.alignValue = B.textAlign = f : B[d] = f; B.doTransform = !0 }; B.afterSetters = function () { this.doTransform && (this.htmlUpdateTransform(), this.doTransform = !1) }; B.attr({ text: q, x: Math.round(f), y: Math.round(p) }).css({ position: "absolute" }); r.styledMode || B.css({ fontFamily: this.style.fontFamily, fontSize: this.style.fontSize });
                e.style.whiteSpace = "nowrap"; B.css = B.htmlCss; z && (B.add = function (f) {
                    var d = r.box.parentNode, h = []; if (this.parentGroup = f) {
                        var a = f.div; if (!a) {
                            for (; f;)h.push(f), f = f.parentGroup; h.reverse().forEach(function (c) {
                                function f(a, d) { c[d] = a; "translateX" === d ? p.left = a + "px" : p.top = a + "px"; c.doTransform = !0 } var b = A(c.element, "class"), g = c.styles || {}; a = c.div = c.div || k("div", b ? { className: b } : void 0, {
                                    position: "absolute", left: (c.translateX || 0) + "px", top: (c.translateY || 0) + "px", display: c.display, opacity: c.opacity, cursor: g.cursor,
                                    pointerEvents: g.pointerEvents
                                }, a || d); var p = a.style; C(c, { classSetter: function (a) { return function (c) { this.element.setAttribute("class", c); a.className = c } }(a), on: function () { h[0].div && B.on.apply({ element: h[0].div }, arguments); return c }, translateXSetter: f, translateYSetter: f }); c.addedSetters || m(c)
                            })
                        }
                    } else a = d; a.appendChild(e); B.added = !0; B.alignOnAdd && B.htmlUpdateTransform(); return B
                }); return B
            }
        }); return w
    }); O(l, "Core/Time.js", [l["Core/Globals.js"], l["Core/Utilities.js"]], function (e, b) {
        var l = e.win, w = b.defined,
        D = b.error, F = b.extend, E = b.isObject, H = b.merge, r = b.objectEach, A = b.pad, k = b.pick, C = b.splat, g = b.timeUnits; ""; b = function () {
            function b(f) { this.options = {}; this.variableTimezone = this.useUTC = !1; this.Date = l.Date; this.getTimezoneOffset = this.timezoneOffsetFunction(); this.update(f) } b.prototype.get = function (f, b) { if (this.variableTimezone || this.timezoneOffset) { var g = b.getTime(), p = g - this.getTimezoneOffset(b); b.setTime(p); f = b["getUTC" + f](); b.setTime(g); return f } return this.useUTC ? b["getUTC" + f]() : b["get" + f]() }; b.prototype.set =
                function (f, b, g) { if (this.variableTimezone || this.timezoneOffset) { if ("Milliseconds" === f || "Seconds" === f || "Minutes" === f && 0 === this.getTimezoneOffset(b) % 36E5) return b["setUTC" + f](g); var p = this.getTimezoneOffset(b); p = b.getTime() - p; b.setTime(p); b["setUTC" + f](g); f = this.getTimezoneOffset(b); p = b.getTime() + f; return b.setTime(p) } return this.useUTC ? b["setUTC" + f](g) : b["set" + f](g) }; b.prototype.update = function (f) {
                    var b = k(f && f.useUTC, !0); this.options = f = H(!0, this.options || {}, f); this.Date = f.Date || l.Date || Date; this.timezoneOffset =
                        (this.useUTC = b) && f.timezoneOffset; this.getTimezoneOffset = this.timezoneOffsetFunction(); this.variableTimezone = b && !(!f.getTimezoneOffset && !f.timezone)
                }; b.prototype.makeTime = function (f, b, g, q, r, z) { if (this.useUTC) { var m = this.Date.UTC.apply(0, arguments); var p = this.getTimezoneOffset(m); m += p; var d = this.getTimezoneOffset(m); p !== d ? m += d - p : p - 36E5 !== this.getTimezoneOffset(m - 36E5) || e.isSafari || (m -= 36E5) } else m = (new this.Date(f, b, k(g, 1), k(q, 0), k(r, 0), k(z, 0))).getTime(); return m }; b.prototype.timezoneOffsetFunction =
                    function () { var f = this, b = this.options, g = b.moment || l.moment; if (!this.useUTC) return function (f) { return 6E4 * (new Date(f.toString())).getTimezoneOffset() }; if (b.timezone) { if (g) return function (f) { return 6E4 * -g.tz(f, b.timezone).utcOffset() }; D(25) } return this.useUTC && b.getTimezoneOffset ? function (f) { return 6E4 * b.getTimezoneOffset(f.valueOf()) } : function () { return 6E4 * (f.timezoneOffset || 0) } }; b.prototype.dateFormat = function (f, b, g) {
                        var p; if (!w(b) || isNaN(b)) return (null === (p = e.defaultOptions.lang) || void 0 === p ? void 0 :
                            p.invalidDate) || ""; f = k(f, "%Y-%m-%d %H:%M:%S"); var B = this; p = new this.Date(b); var q = this.get("Hours", p), m = this.get("Day", p), t = this.get("Date", p), d = this.get("Month", p), h = this.get("FullYear", p), a = e.defaultOptions.lang, c = null === a || void 0 === a ? void 0 : a.weekdays, v = null === a || void 0 === a ? void 0 : a.shortWeekdays; p = F({
                                a: v ? v[m] : c[m].substr(0, 3), A: c[m], d: A(t), e: A(t, 2, " "), w: m, b: a.shortMonths[d], B: a.months[d], m: A(d + 1), o: d + 1, y: h.toString().substr(2, 2), Y: h, H: A(q), k: q, I: A(q % 12 || 12), l: q % 12 || 12, M: A(this.get("Minutes",
                                    p)), p: 12 > q ? "AM" : "PM", P: 12 > q ? "am" : "pm", S: A(p.getSeconds()), L: A(Math.floor(b % 1E3), 3)
                            }, e.dateFormats); r(p, function (a, c) { for (; -1 !== f.indexOf("%" + c);)f = f.replace("%" + c, "function" === typeof a ? a.call(B, b) : a) }); return g ? f.substr(0, 1).toUpperCase() + f.substr(1) : f
                    }; b.prototype.resolveDTLFormat = function (f) { return E(f, !0) ? f : (f = C(f), { main: f[0], from: f[1], to: f[2] }) }; b.prototype.getTimeTicks = function (f, b, B, q) {
                        var p = this, e = [], m = {}; var t = new p.Date(b); var d = f.unitRange, h = f.count || 1, a; q = k(q, 1); if (w(b)) {
                            p.set("Milliseconds",
                                t, d >= g.second ? 0 : h * Math.floor(p.get("Milliseconds", t) / h)); d >= g.second && p.set("Seconds", t, d >= g.minute ? 0 : h * Math.floor(p.get("Seconds", t) / h)); d >= g.minute && p.set("Minutes", t, d >= g.hour ? 0 : h * Math.floor(p.get("Minutes", t) / h)); d >= g.hour && p.set("Hours", t, d >= g.day ? 0 : h * Math.floor(p.get("Hours", t) / h)); d >= g.day && p.set("Date", t, d >= g.month ? 1 : Math.max(1, h * Math.floor(p.get("Date", t) / h))); if (d >= g.month) { p.set("Month", t, d >= g.year ? 0 : h * Math.floor(p.get("Month", t) / h)); var c = p.get("FullYear", t) } d >= g.year && p.set("FullYear",
                                    t, c - c % h); d === g.week && (c = p.get("Day", t), p.set("Date", t, p.get("Date", t) - c + q + (c < q ? -7 : 0))); c = p.get("FullYear", t); q = p.get("Month", t); var v = p.get("Date", t), K = p.get("Hours", t); b = t.getTime(); !p.variableTimezone && p.useUTC || !w(B) || (a = B - b > 4 * g.month || p.getTimezoneOffset(b) !== p.getTimezoneOffset(B)); b = t.getTime(); for (t = 1; b < B;)e.push(b), b = d === g.year ? p.makeTime(c + t * h, 0) : d === g.month ? p.makeTime(c, q + t * h) : !a || d !== g.day && d !== g.week ? a && d === g.hour && 1 < h ? p.makeTime(c, q, v, K + t * h) : b + d * h : p.makeTime(c, q, v + t * h * (d === g.day ? 1 : 7)),
                                        t++; e.push(b); d <= g.hour && 1E4 > e.length && e.forEach(function (a) { 0 === a % 18E5 && "000000000" === p.dateFormat("%H%M%S%L", a) && (m[a] = "day") })
                        } e.info = F(f, { higherRanks: m, totalRange: d * h }); return e
                    }; return b
        }(); e.Time = b; return e.Time
    }); O(l, "Core/Options.js", [l["Core/Globals.js"], l["Core/Color/Color.js"], l["Core/Color/Palette.js"], l["Core/Time.js"], l["Core/Utilities.js"]], function (e, b, l, w, D) {
        var F = e.isTouchDevice, E = e.svg; b = b.parse; D = D.merge; ""; e.defaultOptions = {
            colors: l.colors, symbols: ["circle", "diamond", "square",
                "triangle", "triangle-down"], lang: { loading: "Loading...", months: "January February March April May June July August September October November December".split(" "), shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), decimalPoint: ".", numericSymbols: "kMGTPE".split(""), resetZoom: "Reset zoom", resetZoomTitle: "Reset zoom level 1:1", thousandsSep: " " }, global: {}, time: {
                    Date: void 0, getTimezoneOffset: void 0, timezone: void 0,
                    timezoneOffset: 0, useUTC: !0
                }, chart: { styledMode: !1, borderRadius: 0, colorCount: 10, defaultSeriesType: "line", ignoreHiddenSeries: !0, spacing: [10, 10, 15, 10], resetZoomButton: { theme: { zIndex: 6 }, position: { align: "right", x: -10, y: 10 } }, zoomBySingleTouch: !1, width: null, height: null, borderColor: l.highlightColor80, backgroundColor: l.backgroundColor, plotBorderColor: l.neutralColor20 }, title: { text: "Chart title", align: "center", margin: 15, widthAdjust: -44 }, subtitle: { text: "", align: "center", widthAdjust: -44 }, caption: {
                    margin: 15, text: "",
                    align: "left", verticalAlign: "bottom"
                }, plotOptions: {}, labels: { style: { position: "absolute", color: l.neutralColor80 } }, legend: {
                    enabled: !0, align: "center", alignColumns: !0, layout: "horizontal", labelFormatter: function () { return this.name }, borderColor: l.neutralColor40, borderRadius: 0, navigation: { activeColor: l.highlightColor100, inactiveColor: l.neutralColor20 }, itemStyle: { color: l.neutralColor80, cursor: "pointer", fontSize: "12px", fontWeight: "bold", textOverflow: "ellipsis" }, itemHoverStyle: { color: l.neutralColor100 }, itemHiddenStyle: { color: l.neutralColor20 },
                    shadow: !1, itemCheckboxStyle: { position: "absolute", width: "13px", height: "13px" }, squareSymbol: !0, symbolPadding: 5, verticalAlign: "bottom", x: 0, y: 0, title: { style: { fontWeight: "bold" } }
                }, loading: { labelStyle: { fontWeight: "bold", position: "relative", top: "45%" }, style: { position: "absolute", backgroundColor: l.backgroundColor, opacity: .5, textAlign: "center" } }, tooltip: {
                    enabled: !0, animation: E, borderRadius: 3, dateTimeLabelFormats: {
                        millisecond: "%A, %b %e, %H:%M:%S.%L", second: "%A, %b %e, %H:%M:%S", minute: "%A, %b %e, %H:%M", hour: "%A, %b %e, %H:%M",
                        day: "%A, %b %e, %Y", week: "Week from %A, %b %e, %Y", month: "%B %Y", year: "%Y"
                    }, footerFormat: "", padding: 8, snap: F ? 25 : 10, headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>', pointFormat: '<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>', backgroundColor: b(l.neutralColor3).setOpacity(.85).get(), borderWidth: 1, shadow: !0, style: { color: l.neutralColor80, cursor: "default", fontSize: "12px", whiteSpace: "nowrap" }
                }, credits: {
                    enabled: !0, href: "https://www.highcharts.com?credits",
                    position: { align: "right", x: -10, verticalAlign: "bottom", y: -5 }, style: { cursor: "pointer", color: l.neutralColor40, fontSize: "9px" }, text: "Highcharts.com"
                }
        }; e.defaultOptions.chart.styledMode = !1; ""; e.time = new w(D(e.defaultOptions.global, e.defaultOptions.time)); e.dateFormat = function (b, r, A) { return e.time.dateFormat(b, r, A) }; return { dateFormat: e.dateFormat, defaultOptions: e.defaultOptions, time: e.time }
    }); O(l, "Core/Axis/Tick.js", [l["Core/Globals.js"], l["Core/Utilities.js"]], function (e, b) {
        var l = e.deg2rad, w = b.clamp, D =
            b.correctFloat, F = b.defined, E = b.destroyObjectProperties, H = b.extend, r = b.fireEvent, A = b.isNumber, k = b.merge, C = b.objectEach, g = b.pick; ""; b = function () {
                function b(b, g, k, e, q) { this.isNewLabel = this.isNew = !0; this.axis = b; this.pos = g; this.type = k || ""; this.parameters = q || {}; this.tickmarkOffset = this.parameters.tickmarkOffset; this.options = this.parameters.options; r(this, "init"); k || e || this.addLabel() } b.prototype.addLabel = function () {
                    var b = this, p = b.axis, k = p.options, e = p.chart, q = p.categories, z = p.logarithmic, m = p.names, t = b.pos,
                    d = g(b.options && b.options.labels, k.labels), h = p.tickPositions, a = t === h[0], c = t === h[h.length - 1]; m = this.parameters.category || (q ? g(q[t], m[t], t) : t); var v = b.label; q = (!d.step || 1 === d.step) && 1 === p.tickInterval; h = h.info; var K, P; if (p.dateTime && h) { var y = e.time.resolveDTLFormat(k.dateTimeLabelFormats[!k.grid && h.higherRanks[t] || h.unitName]); var L = y.main } b.isFirst = a; b.isLast = c; b.formatCtx = { axis: p, chart: e, isFirst: a, isLast: c, dateTimeLabelFormat: L, tickPositionInfo: h, value: z ? D(z.lin2log(m)) : m, pos: t }; k = p.labelFormatter.call(b.formatCtx,
                        this.formatCtx); if (P = y && y.list) b.shortenLabel = function () { for (K = 0; K < P.length; K++)if (v.attr({ text: p.labelFormatter.call(H(b.formatCtx, { dateTimeLabelFormat: P[K] })) }), v.getBBox().width < p.getSlotWidth(b) - 2 * g(d.padding, 5)) return; v.attr({ text: "" }) }; q && p._addedPlotLB && b.moveLabel(k, d); F(v) || b.movedLabel ? v && v.textStr !== k && !q && (!v.textWidth || d.style && d.style.width || v.styles.width || v.css({ width: null }), v.attr({ text: k }), v.textPxLength = v.getBBox().width) : (b.label = v = b.createLabel({ x: 0, y: 0 }, k, d), b.rotation = 0)
                }; b.prototype.createLabel =
                    function (b, g, B) { var f = this.axis, p = f.chart; if (b = F(g) && B.enabled ? p.renderer.text(g, b.x, b.y, B.useHTML).add(f.labelGroup) : null) p.styledMode || b.css(k(B.style)), b.textPxLength = b.getBBox().width; return b }; b.prototype.destroy = function () { E(this, this.axis) }; b.prototype.getPosition = function (b, g, k, e) {
                        var f = this.axis, p = f.chart, m = e && p.oldChartHeight || p.chartHeight; b = {
                            x: b ? D(f.translate(g + k, null, null, e) + f.transB) : f.left + f.offset + (f.opposite ? (e && p.oldChartWidth || p.chartWidth) - f.right - f.left : 0), y: b ? m - f.bottom + f.offset -
                                (f.opposite ? f.height : 0) : D(m - f.translate(g + k, null, null, e) - f.transB)
                        }; b.y = w(b.y, -1E5, 1E5); r(this, "afterGetPosition", { pos: b }); return b
                    }; b.prototype.getLabelPosition = function (b, g, k, e, q, z, m, t) {
                        var d = this.axis, h = d.transA, a = d.isLinked && d.linkedParent ? d.linkedParent.reversed : d.reversed, c = d.staggerLines, f = d.tickRotCorr || { x: 0, y: 0 }, p = q.y, B = e || d.reserveSpaceDefault ? 0 : -d.labelOffset * ("center" === d.labelAlign ? .5 : 1), y = {}; F(p) || (p = 0 === d.side ? k.rotation ? -8 : -k.getBBox().height : 2 === d.side ? f.y + 8 : Math.cos(k.rotation * l) *
                            (f.y - k.getBBox(!1, 0).height / 2)); b = b + q.x + B + f.x - (z && e ? z * h * (a ? -1 : 1) : 0); g = g + p - (z && !e ? z * h * (a ? 1 : -1) : 0); c && (k = m / (t || 1) % c, d.opposite && (k = c - k - 1), g += d.labelOffset / c * k); y.x = b; y.y = Math.round(g); r(this, "afterGetLabelPosition", { pos: y, tickmarkOffset: z, index: m }); return y
                    }; b.prototype.getLabelSize = function () { return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0 }; b.prototype.getMarkPath = function (b, g, k, e, q, z) { return z.crispLine([["M", b, g], ["L", b + (q ? 0 : -k), g + (q ? k : 0)]], e) }; b.prototype.handleOverflow =
                        function (b) {
                            var f = this.axis, k = f.options.labels, e = b.x, q = f.chart.chartWidth, z = f.chart.spacing, m = g(f.labelLeft, Math.min(f.pos, z[3])); z = g(f.labelRight, Math.max(f.isRadial ? 0 : f.pos + f.len, q - z[1])); var t = this.label, d = this.rotation, h = { left: 0, center: .5, right: 1 }[f.labelAlign || t.attr("align")], a = t.getBBox().width, c = f.getSlotWidth(this), v = c, K = 1, P, y = {}; if (d || "justify" !== g(k.overflow, "justify")) 0 > d && e - h * a < m ? P = Math.round(e / Math.cos(d * l) - m) : 0 < d && e + h * a > z && (P = Math.round((q - e) / Math.cos(d * l))); else if (q = e + (1 - h) * a, e - h *
                                a < m ? v = b.x + v * (1 - h) - m : q > z && (v = z - b.x + v * h, K = -1), v = Math.min(c, v), v < c && "center" === f.labelAlign && (b.x += K * (c - v - h * (c - Math.min(a, v)))), a > v || f.autoRotation && (t.styles || {}).width) P = v; P && (this.shortenLabel ? this.shortenLabel() : (y.width = Math.floor(P) + "px", (k.style || {}).textOverflow || (y.textOverflow = "ellipsis"), t.css(y)))
                        }; b.prototype.moveLabel = function (b, g) {
                            var f = this, p = f.label, k = !1, e = f.axis, m = e.reversed; p && p.textStr === b ? (f.movedLabel = p, k = !0, delete f.label) : C(e.ticks, function (d) {
                            k || d.isNew || d === f || !d.label || d.label.textStr !==
                                b || (f.movedLabel = d.label, k = !0, d.labelPos = f.movedLabel.xy, delete d.label)
                            }); if (!k && (f.labelPos || p)) { var t = f.labelPos || p.xy; p = e.horiz ? m ? 0 : e.width + e.left : t.x; e = e.horiz ? t.y : m ? e.width + e.left : 0; f.movedLabel = f.createLabel({ x: p, y: e }, b, g); f.movedLabel && f.movedLabel.attr({ opacity: 0 }) }
                        }; b.prototype.render = function (b, p, k) {
                            var f = this.axis, e = f.horiz, q = this.pos, m = g(this.tickmarkOffset, f.tickmarkOffset); q = this.getPosition(e, q, m, p); m = q.x; var t = q.y; f = e && m === f.pos + f.len || !e && t === f.pos ? -1 : 1; k = g(k, 1); this.isActive = !0;
                            this.renderGridLine(p, k, f); this.renderMark(q, k, f); this.renderLabel(q, p, k, b); this.isNew = !1; r(this, "afterRender")
                        }; b.prototype.renderGridLine = function (b, p, k) {
                            var f = this.axis, e = f.options, q = this.gridLine, m = {}, t = this.pos, d = this.type, h = g(this.tickmarkOffset, f.tickmarkOffset), a = f.chart.renderer, c = d ? d + "Grid" : "grid", v = e[c + "LineWidth"], K = e[c + "LineColor"]; e = e[c + "LineDashStyle"]; q || (f.chart.styledMode || (m.stroke = K, m["stroke-width"] = v, e && (m.dashstyle = e)), d || (m.zIndex = 1), b && (p = 0), this.gridLine = q = a.path().attr(m).addClass("highcharts-" +
                                (d ? d + "-" : "") + "grid-line").add(f.gridGroup)); if (q && (k = f.getPlotLinePath({ value: t + h, lineWidth: q.strokeWidth() * k, force: "pass", old: b }))) q[b || this.isNew ? "attr" : "animate"]({ d: k, opacity: p })
                        }; b.prototype.renderMark = function (b, p, k) {
                            var f = this.axis, e = f.options, q = f.chart.renderer, m = this.type, t = m ? m + "Tick" : "tick", d = f.tickSize(t), h = this.mark, a = !h, c = b.x; b = b.y; var v = g(e[t + "Width"], !m && f.isXAxis ? 1 : 0); e = e[t + "Color"]; d && (f.opposite && (d[0] = -d[0]), a && (this.mark = h = q.path().addClass("highcharts-" + (m ? m + "-" : "") + "tick").add(f.axisGroup),
                                f.chart.styledMode || h.attr({ stroke: e, "stroke-width": v })), h[a ? "attr" : "animate"]({ d: this.getMarkPath(c, b, d[0], h.strokeWidth() * k, f.horiz, q), opacity: p }))
                        }; b.prototype.renderLabel = function (b, p, k, e) {
                            var f = this.axis, q = f.horiz, m = f.options, t = this.label, d = m.labels, h = d.step; f = g(this.tickmarkOffset, f.tickmarkOffset); var a = !0, c = b.x; b = b.y; t && A(c) && (t.xy = b = this.getLabelPosition(c, b, t, q, d, f, e, h), this.isFirst && !this.isLast && !g(m.showFirstLabel, 1) || this.isLast && !this.isFirst && !g(m.showLastLabel, 1) ? a = !1 : !q || d.step ||
                                d.rotation || p || 0 === k || this.handleOverflow(b), h && e % h && (a = !1), a && A(b.y) ? (b.opacity = k, t[this.isNewLabel ? "attr" : "animate"](b), this.isNewLabel = !1) : (t.attr("y", -9999), this.isNewLabel = !0))
                        }; b.prototype.replaceMovedLabel = function () { var b = this.label, g = this.axis, k = g.reversed; if (b && !this.isNew) { var e = g.horiz ? k ? g.left : g.width + g.left : b.xy.x; k = g.horiz ? b.xy.y : k ? g.width + g.top : g.top; b.animate({ x: e, y: k, opacity: 0 }, void 0, b.destroy); delete this.label } g.isDirty = !0; this.label = this.movedLabel; delete this.movedLabel }; return b
            }();
        e.Tick = b; return e.Tick
    }); O(l, "Core/Axis/Axis.js", [l["Core/Animation/AnimationUtilities.js"], l["Core/Color/Color.js"], l["Core/Globals.js"], l["Core/Color/Palette.js"], l["Core/Options.js"], l["Core/Axis/Tick.js"], l["Core/Utilities.js"]], function (e, b, l, w, D, F, E) {
        var H = e.animObject, r = D.defaultOptions, A = E.addEvent, k = E.arrayMax, C = E.arrayMin, g = E.clamp, q = E.correctFloat, f = E.defined, p = E.destroyObjectProperties, B = E.erase, I = E.error, Q = E.extend, z = E.fireEvent, m = E.format, t = E.getMagnitude, d = E.isArray, h = E.isFunction,
        a = E.isNumber, c = E.isString, v = E.merge, K = E.normalizeTickInterval, P = E.objectEach, y = E.pick, L = E.relativeLength, S = E.removeEvent, N = E.splat, G = E.syncTimeout; ""; var u = l.deg2rad; e = function () {
            function e(a, c) {
            this.zoomEnabled = this.width = this.visible = this.userOptions = this.translationSlope = this.transB = this.transA = this.top = this.ticks = this.tickRotCorr = this.tickPositions = this.tickmarkOffset = this.tickInterval = this.tickAmount = this.side = this.series = this.right = this.positiveValuesOnly = this.pos = this.pointRangePadding = this.pointRange =
                this.plotLinesAndBandsGroups = this.plotLinesAndBands = this.paddedTicks = this.overlap = this.options = this.offset = this.names = this.minPixelPadding = this.minorTicks = this.minorTickInterval = this.min = this.maxLabelLength = this.max = this.len = this.left = this.labelFormatter = this.labelEdge = this.isLinked = this.height = this.hasVisibleSeries = this.hasNames = this.coll = this.closestPointRange = this.chart = this.categories = this.bottom = this.alternateBands = void 0; this.init(a, c)
            } e.prototype.init = function (a, c) {
                var d = c.isX, n = this; n.chart =
                    a; n.horiz = a.inverted && !n.isZAxis ? !d : d; n.isXAxis = d; n.coll = n.coll || (d ? "xAxis" : "yAxis"); z(this, "init", { userOptions: c }); n.opposite = y(c.opposite, n.opposite); n.side = y(c.side, n.side, n.horiz ? n.opposite ? 0 : 2 : n.opposite ? 1 : 3); n.setOptions(c); var b = this.options, g = b.type; n.labelFormatter = b.labels.formatter || n.defaultLabelFormatter; n.userOptions = c; n.minPixelPadding = 0; n.reversed = y(b.reversed, n.reversed); n.visible = !1 !== b.visible; n.zoomEnabled = !1 !== b.zoomEnabled; n.hasNames = "category" === g || !0 === b.categories; n.categories =
                        b.categories || n.hasNames; n.names || (n.names = [], n.names.keys = {}); n.plotLinesAndBandsGroups = {}; n.positiveValuesOnly = !!n.logarithmic; n.isLinked = f(b.linkedTo); n.ticks = {}; n.labelEdge = []; n.minorTicks = {}; n.plotLinesAndBands = []; n.alternateBands = {}; n.len = 0; n.minRange = n.userMinRange = b.minRange || b.maxZoom; n.range = b.range; n.offset = b.offset || 0; n.max = null; n.min = null; n.crosshair = y(b.crosshair, N(a.options.tooltip.crosshairs)[d ? 0 : 1], !1); c = n.options.events; -1 === a.axes.indexOf(n) && (d ? a.axes.splice(a.xAxis.length, 0, n) :
                            a.axes.push(n), a[n.coll].push(n)); n.series = n.series || []; a.inverted && !n.isZAxis && d && "undefined" === typeof n.reversed && (n.reversed = !0); n.labelRotation = n.options.labels.rotation; P(c, function (a, c) { h(a) && A(n, c, a) }); z(this, "afterInit")
            }; e.prototype.setOptions = function (a) { this.options = v(e.defaultOptions, "yAxis" === this.coll && e.defaultYAxisOptions, [e.defaultTopAxisOptions, e.defaultRightAxisOptions, e.defaultBottomAxisOptions, e.defaultLeftAxisOptions][this.side], v(r[this.coll], a)); z(this, "afterSetOptions", { userOptions: a }) };
            e.prototype.defaultLabelFormatter = function () {
                var c = this.axis, d = a(this.value) ? this.value : NaN, b = c.chart.time, h = c.categories, x = this.dateTimeLabelFormat, f = r.lang, g = f.numericSymbols; f = f.numericSymbolMagnitude || 1E3; var v = g && g.length, p = c.options.labels.format; c = c.logarithmic ? Math.abs(d) : c.tickInterval; var e = this.chart, k = e.numberFormatter; if (p) var y = m(p, this, e); else if (h) y = "" + this.value; else if (x) y = b.dateFormat(x, d); else if (v && 1E3 <= c) for (; v-- && "undefined" === typeof y;)b = Math.pow(f, v + 1), c >= b && 0 === 10 * d % b && null !==
                    g[v] && 0 !== d && (y = k(d / b, -1) + g[v]); "undefined" === typeof y && (y = 1E4 <= Math.abs(d) ? k(d, -1) : k(d, -1, void 0, "")); return y
            }; e.prototype.getSeriesExtremes = function () {
                var c = this, d = c.chart, b; z(this, "getSeriesExtremes", null, function () {
                c.hasVisibleSeries = !1; c.dataMin = c.dataMax = c.threshold = null; c.softThreshold = !c.isXAxis; c.stacking && c.stacking.buildStacks(); c.series.forEach(function (n) {
                    if (n.visible || !d.options.chart.ignoreHiddenSeries) {
                        var h = n.options, g = h.threshold; c.hasVisibleSeries = !0; c.positiveValuesOnly && 0 >= g &&
                            (g = null); if (c.isXAxis) { if (h = n.xData, h.length) { h = c.logarithmic ? h.filter(c.validatePositiveValue) : h; b = n.getXExtremes(h); var m = b.min; var v = b.max; a(m) || m instanceof Date || (h = h.filter(a), b = n.getXExtremes(h), m = b.min, v = b.max); h.length && (c.dataMin = Math.min(y(c.dataMin, m), m), c.dataMax = Math.max(y(c.dataMax, v), v)) } } else if (n = n.applyExtremes(), a(n.dataMin) && (m = n.dataMin, c.dataMin = Math.min(y(c.dataMin, m), m)), a(n.dataMax) && (v = n.dataMax, c.dataMax = Math.max(y(c.dataMax, v), v)), f(g) && (c.threshold = g), !h.softThreshold ||
                                c.positiveValuesOnly) c.softThreshold = !1
                    }
                })
                }); z(this, "afterGetSeriesExtremes")
            }; e.prototype.translate = function (c, d, b, h, x, f) {
                var n = this.linkedParent || this, g = 1, m = 0, v = h && n.old ? n.old.transA : n.transA; h = h && n.old ? n.old.min : n.min; var p = n.minPixelPadding; x = (n.isOrdinal || n.brokenAxis && n.brokenAxis.hasBreaks || n.logarithmic && x) && n.lin2val; v || (v = n.transA); b && (g *= -1, m = n.len); n.reversed && (g *= -1, m -= g * (n.sector || n.len)); d ? (c = (c * g + m - p) / v + h, x && (c = n.lin2val(c))) : (x && (c = n.val2lin(c)), c = a(h) ? g * (c - h) * v + m + g * p + (a(f) ? v * f : 0) :
                    void 0); return c
            }; e.prototype.toPixels = function (a, c) { return this.translate(a, !1, !this.horiz, null, !0) + (c ? 0 : this.pos) }; e.prototype.toValue = function (a, c) { return this.translate(a - (c ? 0 : this.pos), !0, !this.horiz, null, !0) }; e.prototype.getPlotLinePath = function (c) {
                function d(a, c, d) { if ("pass" !== k && a < c || a > d) k ? a = g(a, c, d) : ca = !0; return a } var n = this, b = n.chart, h = n.left, f = n.top, m = c.old, v = c.value, p = c.translatedValue, e = c.lineWidth, k = c.force, t, K, q, u, L = m && b.oldChartHeight || b.chartHeight, X = m && b.oldChartWidth || b.chartWidth,
                    ca, B = n.transB; c = { value: v, lineWidth: e, old: m, force: k, acrossPanes: c.acrossPanes, translatedValue: p }; z(this, "getPlotLinePath", c, function (c) { p = y(p, n.translate(v, null, null, m)); p = g(p, -1E5, 1E5); t = q = Math.round(p + B); K = u = Math.round(L - p - B); a(p) ? n.horiz ? (K = f, u = L - n.bottom, t = q = d(t, h, h + n.width)) : (t = h, q = X - n.right, K = u = d(K, f, f + n.height)) : (ca = !0, k = !1); c.path = ca && !k ? null : b.renderer.crispLine([["M", t, K], ["L", q, u]], e || 1) }); return c.path
            }; e.prototype.getLinearTickPositions = function (a, c, d) {
                var n = q(Math.floor(c / a) * a); d = q(Math.ceil(d /
                    a) * a); var b = [], h; q(n + a) === n && (h = 20); if (this.single) return [c]; for (c = n; c <= d;) { b.push(c); c = q(c + a, h); if (c === f) break; var f = c } return b
            }; e.prototype.getMinorTickInterval = function () { var a = this.options; return !0 === a.minorTicks ? y(a.minorTickInterval, "auto") : !1 === a.minorTicks ? null : a.minorTickInterval }; e.prototype.getMinorTickPositions = function () {
                var a = this.options, c = this.tickPositions, d = this.minorTickInterval, b = [], h = this.pointRangePadding || 0, f = this.min - h; h = this.max + h; var g = h - f; if (g && g / d < this.len / 3) {
                    var m = this.logarithmic;
                    if (m) this.paddedTicks.forEach(function (a, c, n) { c && b.push.apply(b, m.getLogTickPositions(d, n[c - 1], n[c], !0)) }); else if (this.dateTime && "auto" === this.getMinorTickInterval()) b = b.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(d), f, h, a.startOfWeek)); else for (a = f + (c[0] - f) % d; a <= h && a !== b[0]; a += d)b.push(a)
                } 0 !== b.length && this.trimTicks(b); return b
            }; e.prototype.adjustForMinRange = function () {
                var a = this.options, c = this.min, d = this.max, b = this.logarithmic, h = 0, g, m, v, p; this.isXAxis && "undefined" === typeof this.minRange &&
                    !b && (f(a.min) || f(a.max) ? this.minRange = null : (this.series.forEach(function (a) { v = a.xData; p = a.xIncrement ? 1 : v.length - 1; if (1 < v.length) for (g = p; 0 < g; g--)if (m = v[g] - v[g - 1], !h || m < h) h = m }), this.minRange = Math.min(5 * h, this.dataMax - this.dataMin))); if (d - c < this.minRange) {
                        var e = this.dataMax - this.dataMin >= this.minRange; var t = this.minRange; var K = (t - d + c) / 2; K = [c - K, y(a.min, c - K)]; e && (K[2] = this.logarithmic ? this.logarithmic.log2lin(this.dataMin) : this.dataMin); c = k(K); d = [c + t, y(a.max, c + t)]; e && (d[2] = b ? b.log2lin(this.dataMax) : this.dataMax);
                        d = C(d); d - c < t && (K[0] = d - t, K[1] = y(a.min, d - t), c = k(K))
                    } this.min = c; this.max = d
            }; e.prototype.getClosest = function () { var a; this.categories ? a = 1 : this.series.forEach(function (c) { var d = c.closestPointRange, b = c.visible || !c.chart.options.chart.ignoreHiddenSeries; !c.noSharedTooltip && f(d) && b && (a = f(a) ? Math.min(a, d) : d) }); return a }; e.prototype.nameToX = function (a) {
                var c = d(this.categories), b = c ? this.categories : this.names, n = a.options.x; a.series.requireSorting = !1; f(n) || (n = !1 === this.options.uniqueNames ? a.series.autoIncrement() :
                    c ? b.indexOf(a.name) : y(b.keys[a.name], -1)); if (-1 === n) { if (!c) var h = b.length } else h = n; "undefined" !== typeof h && (this.names[h] = a.name, this.names.keys[a.name] = h); return h
            }; e.prototype.updateNames = function () {
                var a = this, c = this.names; 0 < c.length && (Object.keys(c.keys).forEach(function (a) { delete c.keys[a] }), c.length = 0, this.minRange = this.userMinRange, (this.series || []).forEach(function (c) {
                c.xIncrement = null; if (!c.points || c.isDirtyData) a.max = Math.max(a.max, c.xData.length - 1), c.processData(), c.generatePoints(); c.data.forEach(function (d,
                    b) { if (d && d.options && "undefined" !== typeof d.name) { var n = a.nameToX(d); "undefined" !== typeof n && n !== d.x && (d.x = n, c.xData[b] = n) } })
                }))
            }; e.prototype.setAxisTranslation = function () {
                var a = this, d = a.max - a.min, b = a.axisPointRange || 0, h = 0, f = 0, g = a.linkedParent, m = !!a.categories, v = a.transA, p = a.isXAxis; if (p || m || b) {
                    var e = a.getClosest(); g ? (h = g.minPointOffset, f = g.pointRangePadding) : a.series.forEach(function (d) {
                        var n = m ? 1 : p ? y(d.options.pointRange, e, 0) : a.axisPointRange || 0, x = d.options.pointPlacement; b = Math.max(b, n); if (!a.single ||
                            m) d = d.is("xrange") ? !p : p, h = Math.max(h, d && c(x) ? 0 : n / 2), f = Math.max(f, d && "on" === x ? 0 : n)
                    }); g = a.ordinal && a.ordinal.slope && e ? a.ordinal.slope / e : 1; a.minPointOffset = h *= g; a.pointRangePadding = f *= g; a.pointRange = Math.min(b, a.single && m ? 1 : d); p && (a.closestPointRange = e)
                } a.translationSlope = a.transA = v = a.staticScale || a.len / (d + f || 1); a.transB = a.horiz ? a.left : a.bottom; a.minPixelPadding = v * h; z(this, "afterSetAxisTranslation")
            }; e.prototype.minFromRange = function () { return this.max - this.range }; e.prototype.setTickInterval = function (c) {
                var d =
                    this, b = d.chart, h = d.logarithmic, n = d.options, g = d.isXAxis, m = d.isLinked, v = n.maxPadding, p = n.minPadding, e = n.tickInterval, k = n.tickPixelInterval, u = d.categories, L = a(d.threshold) ? d.threshold : null, B = d.softThreshold; d.dateTime || u || m || this.getTickAmount(); var P = y(d.userMin, n.min); var r = y(d.userMax, n.max); if (m) { d.linkedParent = b[d.coll][n.linkedTo]; var X = d.linkedParent.getExtremes(); d.min = y(X.min, X.dataMin); d.max = y(X.max, X.dataMax); n.type !== d.linkedParent.options.type && I(11, 1, b) } else {
                        if (B && f(L)) if (d.dataMin >= L) X =
                            L, p = 0; else if (d.dataMax <= L) { var ca = L; v = 0 } d.min = y(P, X, d.dataMin); d.max = y(r, ca, d.dataMax)
                    } h && (d.positiveValuesOnly && !c && 0 >= Math.min(d.min, y(d.dataMin, d.min)) && I(10, 1, b), d.min = q(h.log2lin(d.min), 16), d.max = q(h.log2lin(d.max), 16)); d.range && f(d.max) && (d.userMin = d.min = P = Math.max(d.dataMin, d.minFromRange()), d.userMax = r = d.max, d.range = null); z(d, "foundExtremes"); d.beforePadding && d.beforePadding(); d.adjustForMinRange(); !(u || d.axisPointRange || d.stacking && d.stacking.usePercentage || m) && f(d.min) && f(d.max) && (b = d.max -
                        d.min) && (!f(P) && p && (d.min -= b * p), !f(r) && v && (d.max += b * v)); a(d.userMin) || (a(n.softMin) && n.softMin < d.min && (d.min = P = n.softMin), a(n.floor) && (d.min = Math.max(d.min, n.floor))); a(d.userMax) || (a(n.softMax) && n.softMax > d.max && (d.max = r = n.softMax), a(n.ceiling) && (d.max = Math.min(d.max, n.ceiling))); B && f(d.dataMin) && (L = L || 0, !f(P) && d.min < L && d.dataMin >= L ? d.min = d.options.minRange ? Math.min(L, d.max - d.minRange) : L : !f(r) && d.max > L && d.dataMax <= L && (d.max = d.options.minRange ? Math.max(L, d.min + d.minRange) : L)); a(d.min) && a(d.max) &&
                            !this.chart.polar && d.min > d.max && (f(d.options.min) ? d.max = d.min : f(d.options.max) && (d.min = d.max)); d.tickInterval = d.min === d.max || "undefined" === typeof d.min || "undefined" === typeof d.max ? 1 : m && !e && k === d.linkedParent.options.tickPixelInterval ? e = d.linkedParent.tickInterval : y(e, this.tickAmount ? (d.max - d.min) / Math.max(this.tickAmount - 1, 1) : void 0, u ? 1 : (d.max - d.min) * k / Math.max(d.len, k)); g && !c && d.series.forEach(function (a) {
                                var c, b; a.processData(d.min !== (null === (c = d.old) || void 0 === c ? void 0 : c.min) || d.max !== (null ===
                                    (b = d.old) || void 0 === b ? void 0 : b.max))
                            }); d.setAxisTranslation(); z(this, "initialAxisTranslation"); d.pointRange && !e && (d.tickInterval = Math.max(d.pointRange, d.tickInterval)); c = y(n.minTickInterval, d.dateTime && !d.series.some(function (a) { return a.noSharedTooltip }) ? d.closestPointRange : 0); !e && d.tickInterval < c && (d.tickInterval = c); d.dateTime || d.logarithmic || e || (d.tickInterval = K(d.tickInterval, void 0, t(d.tickInterval), y(n.allowDecimals, .5 > d.tickInterval || void 0 !== this.tickAmount), !!this.tickAmount)); this.tickAmount ||
                                (d.tickInterval = d.unsquish()); this.setTickPositions()
            }; e.prototype.setTickPositions = function () {
                var a = this.options, c = a.tickPositions; var d = this.getMinorTickInterval(); var b = a.tickPositioner, h = this.hasVerticalPanning(), g = "colorAxis" === this.coll, m = (g || !h) && a.startOnTick; h = (g || !h) && a.endOnTick; this.tickmarkOffset = this.categories && "between" === a.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0; this.minorTickInterval = "auto" === d && this.tickInterval ? this.tickInterval / 5 : d; this.single = this.min === this.max && f(this.min) &&
                    !this.tickAmount && (parseInt(this.min, 10) === this.min || !1 !== a.allowDecimals); this.tickPositions = d = c && c.slice(); !d && (this.ordinal && this.ordinal.positions || !((this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200)) ? d = this.dateTime ? this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(this.tickInterval, a.units), this.min, this.max, a.startOfWeek, this.ordinal && this.ordinal.positions, this.closestPointRange, !0) : this.logarithmic ? this.logarithmic.getLogTickPositions(this.tickInterval, this.min, this.max) :
                        this.getLinearTickPositions(this.tickInterval, this.min, this.max) : (d = [this.min, this.max], I(19, !1, this.chart)), d.length > this.len && (d = [d[0], d.pop()], d[0] === d[1] && (d.length = 1)), this.tickPositions = d, b && (b = b.apply(this, [this.min, this.max]))) && (this.tickPositions = d = b); this.paddedTicks = d.slice(0); this.trimTicks(d, m, h); this.isLinked || (this.single && 2 > d.length && !this.categories && !this.series.some(function (a) { return a.is("heatmap") && "between" === a.options.pointPlacement }) && (this.min -= .5, this.max += .5), c || b || this.adjustTickAmount());
                z(this, "afterSetTickPositions")
            }; e.prototype.trimTicks = function (a, c, d) { var b = a[0], h = a[a.length - 1], n = !this.isOrdinal && this.minPointOffset || 0; z(this, "trimTicks"); if (!this.isLinked) { if (c && -Infinity !== b) this.min = b; else for (; this.min - n > a[0];)a.shift(); if (d) this.max = h; else for (; this.max + n < a[a.length - 1];)a.pop(); 0 === a.length && f(b) && !this.options.tickPositions && a.push((h + b) / 2) } }; e.prototype.alignToOthers = function () {
                var a = {}, c, d = this.options; !1 === this.chart.options.chart.alignTicks || !1 === d.alignTicks || !1 ===
                    d.startOnTick || !1 === d.endOnTick || this.logarithmic || this.chart[this.coll].forEach(function (d) { var b = d.options; b = [d.horiz ? b.left : b.top, b.width, b.height, b.pane].join(); d.series.length && (a[b] ? c = !0 : a[b] = 1) }); return c
            }; e.prototype.getTickAmount = function () {
                var a = this.options, c = a.tickAmount, d = a.tickPixelInterval; !f(a.tickInterval) && !c && this.len < d && !this.isRadial && !this.logarithmic && a.startOnTick && a.endOnTick && (c = 2); !c && this.alignToOthers() && (c = Math.ceil(this.len / d) + 1); 4 > c && (this.finalTickAmt = c, c = 5); this.tickAmount =
                    c
            }; e.prototype.adjustTickAmount = function () {
                var c = this.options, d = this.tickInterval, b = this.tickPositions, h = this.tickAmount, g = this.finalTickAmt, m = b && b.length, v = y(this.threshold, this.softThreshold ? 0 : null); if (this.hasData() && a(this.min) && a(this.max)) {
                    if (m < h) { for (; b.length < h;)b.length % 2 || this.min === v ? b.push(q(b[b.length - 1] + d)) : b.unshift(q(b[0] - d)); this.transA *= (m - 1) / (h - 1); this.min = c.startOnTick ? b[0] : Math.min(this.min, b[0]); this.max = c.endOnTick ? b[b.length - 1] : Math.max(this.max, b[b.length - 1]) } else m > h && (this.tickInterval *=
                        2, this.setTickPositions()); if (f(g)) { for (d = c = b.length; d--;)(3 === g && 1 === d % 2 || 2 >= g && 0 < d && d < c - 1) && b.splice(d, 1); this.finalTickAmt = void 0 }
                }
            }; e.prototype.setScale = function () {
                var a, c, d, b, h, f, g = !1, m = !1; this.series.forEach(function (a) { var c; g = g || a.isDirtyData || a.isDirty; m = m || (null === (c = a.xAxis) || void 0 === c ? void 0 : c.isDirty) || !1 }); this.setAxisSize(); (f = this.len !== (null === (a = this.old) || void 0 === a ? void 0 : a.len)) || g || m || this.isLinked || this.forceRedraw || this.userMin !== (null === (c = this.old) || void 0 === c ? void 0 : c.userMin) ||
                    this.userMax !== (null === (d = this.old) || void 0 === d ? void 0 : d.userMax) || this.alignToOthers() ? (this.stacking && this.stacking.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.isDirty || (this.isDirty = f || this.min !== (null === (b = this.old) || void 0 === b ? void 0 : b.min) || this.max !== (null === (h = this.old) || void 0 === h ? void 0 : h.max))) : this.stacking && this.stacking.cleanStacks(); g && this.panningState && (this.panningState.isDirty = !0); z(this, "afterSetScale")
            }; e.prototype.setExtremes = function (a,
                c, d, b, h) { var n = this, f = n.chart; d = y(d, !0); n.series.forEach(function (a) { delete a.kdTree }); h = Q(h, { min: a, max: c }); z(n, "setExtremes", h, function () { n.userMin = a; n.userMax = c; n.eventArgs = h; d && f.redraw(b) }) }; e.prototype.zoom = function (a, c) {
                    var d = this, b = this.dataMin, h = this.dataMax, n = this.options, g = Math.min(b, y(n.min, b)), m = Math.max(h, y(n.max, h)); a = { newMin: a, newMax: c }; z(this, "zoom", a, function (a) {
                        var c = a.newMin, n = a.newMax; if (c !== d.min || n !== d.max) d.allowZoomOutside || (f(b) && (c < g && (c = g), c > m && (c = m)), f(h) && (n < g && (n = g),
                            n > m && (n = m))), d.displayBtn = "undefined" !== typeof c || "undefined" !== typeof n, d.setExtremes(c, n, !1, void 0, { trigger: "zoom" }); a.zoomed = !0
                    }); return a.zoomed
                }; e.prototype.setAxisSize = function () {
                    var a = this.chart, c = this.options, d = c.offsets || [0, 0, 0, 0], b = this.horiz, h = this.width = Math.round(L(y(c.width, a.plotWidth - d[3] + d[1]), a.plotWidth)), f = this.height = Math.round(L(y(c.height, a.plotHeight - d[0] + d[2]), a.plotHeight)), g = this.top = Math.round(L(y(c.top, a.plotTop + d[0]), a.plotHeight, a.plotTop)); c = this.left = Math.round(L(y(c.left,
                        a.plotLeft + d[3]), a.plotWidth, a.plotLeft)); this.bottom = a.chartHeight - f - g; this.right = a.chartWidth - h - c; this.len = Math.max(b ? h : f, 0); this.pos = b ? c : g
                }; e.prototype.getExtremes = function () { var a = this.logarithmic; return { min: a ? q(a.lin2log(this.min)) : this.min, max: a ? q(a.lin2log(this.max)) : this.max, dataMin: this.dataMin, dataMax: this.dataMax, userMin: this.userMin, userMax: this.userMax } }; e.prototype.getThreshold = function (a) {
                    var c = this.logarithmic, d = c ? c.lin2log(this.min) : this.min; c = c ? c.lin2log(this.max) : this.max; null ===
                        a || -Infinity === a ? a = d : Infinity === a ? a = c : d > a ? a = d : c < a && (a = c); return this.translate(a, 0, 1, 0, 1)
                }; e.prototype.autoLabelAlign = function (a) { var c = (y(a, 0) - 90 * this.side + 720) % 360; a = { align: "center" }; z(this, "autoLabelAlign", a, function (a) { 15 < c && 165 > c ? a.align = "right" : 195 < c && 345 > c && (a.align = "left") }); return a.align }; e.prototype.tickSize = function (a) {
                    var c = this.options, d = c["tick" === a ? "tickLength" : "minorTickLength"], b = y(c["tick" === a ? "tickWidth" : "minorTickWidth"], "tick" === a && this.isXAxis && !this.categories ? 1 : 0); if (b && d) {
                    "inside" ===
                        c[a + "Position"] && (d = -d); var h = [d, b]
                    } a = { tickSize: h }; z(this, "afterTickSize", a); return a.tickSize
                }; e.prototype.labelMetrics = function () { var a = this.tickPositions && this.tickPositions[0] || 0; return this.chart.renderer.fontMetrics(this.options.labels.style && this.options.labels.style.fontSize, this.ticks[a] && this.ticks[a].label) }; e.prototype.unsquish = function () {
                    var a = this.options.labels, c = this.horiz, d = this.tickInterval, b = d, h = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / d), g, m = a.rotation, v = this.labelMetrics(),
                    p, e = Number.MAX_VALUE, k, K = Math.max(this.max - this.min, 0), t = function (a) { var c = a / (h || 1); c = 1 < c ? Math.ceil(c) : 1; c * d > K && Infinity !== a && Infinity !== h && K && (c = Math.ceil(K / d)); return q(c * d) }; c ? (k = !a.staggerLines && !a.step && (f(m) ? [m] : h < y(a.autoRotationLimit, 80) && a.autoRotation)) && k.forEach(function (a) { if (a === m || a && -90 <= a && 90 >= a) { p = t(Math.abs(v.h / Math.sin(u * a))); var c = p + Math.abs(a / 360); c < e && (e = c, g = a, b = p) } }) : a.step || (b = t(v.h)); this.autoRotation = k; this.labelRotation = y(g, m); return b
                }; e.prototype.getSlotWidth = function (c) {
                    var d,
                    b = this.chart, h = this.horiz, f = this.options.labels, n = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1), g = b.margin[3]; if (c && a(c.slotWidth)) return c.slotWidth; if (h && f && 2 > (f.step || 0)) return f.rotation ? 0 : (this.staggerLines || 1) * this.len / n; if (!h) { c = null === (d = null === f || void 0 === f ? void 0 : f.style) || void 0 === d ? void 0 : d.width; if (void 0 !== c) return parseInt(c, 10); if (g) return g - b.spacing[3] } return .33 * b.chartWidth
                }; e.prototype.renderUnsquish = function () {
                    var a = this.chart, d = a.renderer, b = this.tickPositions, h =
                        this.ticks, f = this.options.labels, g = f && f.style || {}, m = this.horiz, v = this.getSlotWidth(), p = Math.max(1, Math.round(v - 2 * (f.padding || 5))), e = {}, k = this.labelMetrics(), y = f.style && f.style.textOverflow, K = 0; c(f.rotation) || (e.rotation = f.rotation || 0); b.forEach(function (a) { a = h[a]; a.movedLabel && a.replaceMovedLabel(); a && a.label && a.label.textPxLength > K && (K = a.label.textPxLength) }); this.maxLabelLength = K; if (this.autoRotation) K > p && K > k.h ? e.rotation = this.labelRotation : this.labelRotation = 0; else if (v) {
                            var t = p; if (!y) {
                                var q = "clip";
                                for (p = b.length; !m && p--;) { var u = b[p]; if (u = h[u].label) u.styles && "ellipsis" === u.styles.textOverflow ? u.css({ textOverflow: "clip" }) : u.textPxLength > v && u.css({ width: v + "px" }), u.getBBox().height > this.len / b.length - (k.h - k.f) && (u.specificTextOverflow = "ellipsis") }
                            }
                        } e.rotation && (t = K > .5 * a.chartHeight ? .33 * a.chartHeight : K, y || (q = "ellipsis")); if (this.labelAlign = f.align || this.autoLabelAlign(this.labelRotation)) e.align = this.labelAlign; b.forEach(function (a) {
                            var c = (a = h[a]) && a.label, d = g.width, b = {}; c && (c.attr(e), a.shortenLabel ?
                                a.shortenLabel() : t && !d && "nowrap" !== g.whiteSpace && (t < c.textPxLength || "SPAN" === c.element.tagName) ? (b.width = t + "px", y || (b.textOverflow = c.specificTextOverflow || q), c.css(b)) : c.styles && c.styles.width && !b.width && !d && c.css({ width: null }), delete c.specificTextOverflow, a.rotation = e.rotation)
                        }, this); this.tickRotCorr = d.rotCorr(k.b, this.labelRotation || 0, 0 !== this.side)
                }; e.prototype.hasData = function () { return this.series.some(function (a) { return a.hasData() }) || this.options.showEmpty && f(this.min) && f(this.max) }; e.prototype.addTitle =
                    function (a) {
                        var c = this.chart.renderer, d = this.horiz, b = this.opposite, h = this.options.title, f, n = this.chart.styledMode; this.axisTitle || ((f = h.textAlign) || (f = (d ? { low: "left", middle: "center", high: "right" } : { low: b ? "right" : "left", middle: "center", high: b ? "left" : "right" })[h.align]), this.axisTitle = c.text(h.text, 0, 0, h.useHTML).attr({ zIndex: 7, rotation: h.rotation || 0, align: f }).addClass("highcharts-axis-title"), n || this.axisTitle.css(v(h.style)), this.axisTitle.add(this.axisGroup), this.axisTitle.isNew = !0); n || h.style.width ||
                            this.isRadial || this.axisTitle.css({ width: this.len + "px" }); this.axisTitle[a ? "show" : "hide"](a)
                    }; e.prototype.generateTick = function (a) { var c = this.ticks; c[a] ? c[a].addLabel() : c[a] = new F(this, a) }; e.prototype.getOffset = function () {
                        var a = this, c = this, d = c.chart, b = d.renderer, h = c.options, g = c.tickPositions, m = c.ticks, v = c.horiz, p = c.side, e = d.inverted && !c.isZAxis ? [1, 0, 3, 2][p] : p, k, K = 0, t = 0, q = h.title, u = h.labels, L = 0, X = d.axisOffset; d = d.clipOffset; var B = [-1, 1, 1, -1][p], r = h.className, A = c.axisParent; var l = c.hasData(); c.showAxis =
                            k = l || y(h.showEmpty, !0); c.staggerLines = c.horiz && u.staggerLines; if (!c.axisGroup) { var C = function (c, d, h) { return b.g(c).attr({ zIndex: h }).addClass("highcharts-" + a.coll.toLowerCase() + d + " " + (a.isRadial ? "highcharts-radial-axis" + d + " " : "") + (r || "")).add(A) }; c.gridGroup = C("grid", "-grid", h.gridZIndex || 1); c.axisGroup = C("axis", "", h.zIndex || 2); c.labelGroup = C("axis-labels", "-labels", u.zIndex || 7) } l || c.isLinked ? (g.forEach(function (a, d) { c.generateTick(a, d) }), c.renderUnsquish(), c.reserveSpaceDefault = 0 === p || 2 === p || {
                                1: "left",
                                3: "right"
                            }[p] === c.labelAlign, y(u.reserveSpace, "center" === c.labelAlign ? !0 : null, c.reserveSpaceDefault) && g.forEach(function (a) { L = Math.max(m[a].getLabelSize(), L) }), c.staggerLines && (L *= c.staggerLines), c.labelOffset = L * (c.opposite ? -1 : 1)) : P(m, function (a, c) { a.destroy(); delete m[c] }); if (q && q.text && !1 !== q.enabled && (c.addTitle(k), k && !1 !== q.reserveSpace)) { c.titleOffset = K = c.axisTitle.getBBox()[v ? "height" : "width"]; var G = q.offset; t = f(G) ? 0 : y(q.margin, v ? 5 : 10) } c.renderLine(); c.offset = B * y(h.offset, X[p] ? X[p] + (h.margin ||
                                0) : 0); c.tickRotCorr = c.tickRotCorr || { x: 0, y: 0 }; q = 0 === p ? -c.labelMetrics().h : 2 === p ? c.tickRotCorr.y : 0; t = Math.abs(L) + t; L && (t = t - q + B * (v ? y(u.y, c.tickRotCorr.y + 8 * B) : u.x)); c.axisTitleMargin = y(G, t); c.getMaxLabelDimensions && (c.maxLabelDimensions = c.getMaxLabelDimensions(m, g)); v = this.tickSize("tick"); X[p] = Math.max(X[p], c.axisTitleMargin + K + B * c.offset, t, g && g.length && v ? v[0] + B * c.offset : 0); h = h.offset ? 0 : 2 * Math.floor(c.axisLine.strokeWidth() / 2); d[e] = Math.max(d[e], h); z(this, "afterGetOffset")
                    }; e.prototype.getLinePath = function (a) {
                        var c =
                            this.chart, d = this.opposite, b = this.offset, h = this.horiz, f = this.left + (d ? this.width : 0) + b; b = c.chartHeight - this.bottom - (d ? this.height : 0) + b; d && (a *= -1); return c.renderer.crispLine([["M", h ? this.left : f, h ? b : this.top], ["L", h ? c.chartWidth - this.right : f, h ? b : c.chartHeight - this.bottom]], a)
                    }; e.prototype.renderLine = function () {
                    this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.chart.styledMode || this.axisLine.attr({
                        stroke: this.options.lineColor, "stroke-width": this.options.lineWidth,
                        zIndex: 7
                    }))
                    }; e.prototype.getTitlePosition = function () {
                        var a = this.horiz, c = this.left, d = this.top, b = this.len, h = this.options.title, f = a ? c : d, g = this.opposite, m = this.offset, v = h.x || 0, p = h.y || 0, e = this.axisTitle, k = this.chart.renderer.fontMetrics(h.style && h.style.fontSize, e); e = Math.max(e.getBBox(null, 0).height - k.h - 1, 0); b = { low: f + (a ? 0 : b), middle: f + b / 2, high: f + (a ? b : 0) }[h.align]; c = (a ? d + this.height : c) + (a ? 1 : -1) * (g ? -1 : 1) * this.axisTitleMargin + [-e, e, k.f, -e][this.side]; a = {
                            x: a ? b + v : c + (g ? this.width : 0) + m + v, y: a ? c + p - (g ? this.height :
                                0) + m : b + p
                        }; z(this, "afterGetTitlePosition", { titlePosition: a }); return a
                    }; e.prototype.renderMinorTick = function (a) { var c = this.chart.hasRendered && this.old, d = this.minorTicks; d[a] || (d[a] = new F(this, a, "minor")); c && d[a].isNew && d[a].render(null, !0); d[a].render(null, !1, 1) }; e.prototype.renderTick = function (a, c) {
                        var d, b = this.ticks, h = this.chart.hasRendered && this.old; if (!this.isLinked || a >= this.min && a <= this.max || (null === (d = this.grid) || void 0 === d ? 0 : d.isColumn)) b[a] || (b[a] = new F(this, a)), h && b[a].isNew && b[a].render(c,
                            !0, -1), b[a].render(c)
                    }; e.prototype.render = function () {
                        var c = this, d = c.chart, b = c.logarithmic, h = c.options, f = c.isLinked, g = c.tickPositions, m = c.axisTitle, v = c.ticks, p = c.minorTicks, e = c.alternateBands, k = h.stackLabels, K = h.alternateGridColor, t = c.tickmarkOffset, y = c.axisLine, q = c.showAxis, u = H(d.renderer.globalAnimation), L, B; c.labelEdge.length = 0; c.overlap = !1;[v, p, e].forEach(function (a) { P(a, function (a) { a.isActive = !1 }) }); if (c.hasData() || f) c.minorTickInterval && !c.categories && c.getMinorTickPositions().forEach(function (a) { c.renderMinorTick(a) }),
                            g.length && (g.forEach(function (a, d) { c.renderTick(a, d) }), t && (0 === c.min || c.single) && (v[-1] || (v[-1] = new F(c, -1, null, !0)), v[-1].render(-1))), K && g.forEach(function (a, h) { B = "undefined" !== typeof g[h + 1] ? g[h + 1] + t : c.max - t; 0 === h % 2 && a < c.max && B <= c.max + (d.polar ? -t : t) && (e[a] || (e[a] = new l.PlotLineOrBand(c)), L = a + t, e[a].options = { from: b ? b.lin2log(L) : L, to: b ? b.lin2log(B) : B, color: K, className: "highcharts-alternate-grid" }, e[a].render(), e[a].isActive = !0) }), c._addedPlotLB || (c._addedPlotLB = !0, (h.plotLines || []).concat(h.plotBands ||
                                []).forEach(function (a) { c.addPlotBandOrLine(a) }));[v, p, e].forEach(function (a) { var c, b = [], h = u.duration; P(a, function (a, c) { a.isActive || (a.render(c, !1, 0), a.isActive = !1, b.push(c)) }); G(function () { for (c = b.length; c--;)a[b[c]] && !a[b[c]].isActive && (a[b[c]].destroy(), delete a[b[c]]) }, a !== e && d.hasRendered && h ? h : 0) }); y && (y[y.isPlaced ? "animate" : "attr"]({ d: this.getLinePath(y.strokeWidth()) }), y.isPlaced = !0, y[q ? "show" : "hide"](q)); m && q && (h = c.getTitlePosition(), a(h.y) ? (m[m.isNew ? "attr" : "animate"](h), m.isNew = !1) : (m.attr("y",
                                    -9999), m.isNew = !0)); k && k.enabled && c.stacking && c.stacking.renderStackTotals(); c.old = { len: c.len, max: c.max, min: c.min, transA: c.transA, userMax: c.userMax, userMin: c.userMin }; c.isDirty = !1; z(this, "afterRender")
                    }; e.prototype.redraw = function () { this.visible && (this.render(), this.plotLinesAndBands.forEach(function (a) { a.render() })); this.series.forEach(function (a) { a.isDirty = !0 }) }; e.prototype.getKeepProps = function () { return this.keepProps || e.keepProps }; e.prototype.destroy = function (a) {
                        var c = this, d = c.plotLinesAndBands,
                        b; z(this, "destroy", { keepEvents: a }); a || S(c);[c.ticks, c.minorTicks, c.alternateBands].forEach(function (a) { p(a) }); if (d) for (a = d.length; a--;)d[a].destroy(); "axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach(function (a) { c[a] && (c[a] = c[a].destroy()) }); for (b in c.plotLinesAndBandsGroups) c.plotLinesAndBandsGroups[b] = c.plotLinesAndBandsGroups[b].destroy(); P(c, function (a, d) { -1 === c.getKeepProps().indexOf(d) && delete c[d] })
                    }; e.prototype.drawCrosshair = function (a, c) {
                        var d = this.crosshair,
                        h = y(d.snap, !0), g, m = this.cross, n = this.chart; z(this, "drawCrosshair", { e: a, point: c }); a || (a = this.cross && this.cross.e); if (this.crosshair && !1 !== (f(c) || !h)) {
                            h ? f(c) && (g = y("colorAxis" !== this.coll ? c.crosshairPos : null, this.isXAxis ? c.plotX : this.len - c.plotY)) : g = a && (this.horiz ? a.chartX - this.pos : this.len - a.chartY + this.pos); if (f(g)) { var v = { value: c && (this.isXAxis ? c.x : y(c.stackY, c.y)), translatedValue: g }; n.polar && Q(v, { isCrosshair: !0, chartX: a && a.chartX, chartY: a && a.chartY, point: c }); v = this.getPlotLinePath(v) || null } if (!f(v)) {
                                this.hideCrosshair();
                                return
                            } h = this.categories && !this.isRadial; m || (this.cross = m = n.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (h ? "category " : "thin ") + d.className).attr({ zIndex: y(d.zIndex, 2) }).add(), n.styledMode || (m.attr({ stroke: d.color || (h ? b.parse(w.highlightColor20).setOpacity(.25).get() : w.neutralColor20), "stroke-width": y(d.width, 1) }).css({ "pointer-events": "none" }), d.dashStyle && m.attr({ dashstyle: d.dashStyle }))); m.show().attr({ d: v }); h && !d.width && m.attr({ "stroke-width": this.transA }); this.cross.e =
                                a
                        } else this.hideCrosshair(); z(this, "afterDrawCrosshair", { e: a, point: c })
                    }; e.prototype.hideCrosshair = function () { this.cross && this.cross.hide(); z(this, "afterHideCrosshair") }; e.prototype.hasVerticalPanning = function () { var a, c = null === (a = this.chart.options.chart) || void 0 === a ? void 0 : a.panning; return !!(c && c.enabled && /y/.test(c.type)) }; e.prototype.validatePositiveValue = function (c) { return a(c) && 0 < c }; e.prototype.update = function (a, c) {
                        var d = this.chart, b = a && a.events || {}; a = v(this.userOptions, a); d.options[this.coll].indexOf &&
                            (d.options[this.coll][d.options[this.coll].indexOf(this.userOptions)] = a); P(d.options[this.coll].events, function (a, c) { "undefined" === typeof b[c] && (b[c] = void 0) }); this.destroy(!0); this.init(d, Q(a, { events: b })); d.isDirtyBox = !0; y(c, !0) && d.redraw()
                    }; e.prototype.remove = function (a) {
                        for (var c = this.chart, b = this.coll, h = this.series, f = h.length; f--;)h[f] && h[f].remove(!1); B(c.axes, this); B(c[b], this); d(c.options[b]) ? c.options[b].splice(this.options.index, 1) : delete c.options[b]; c[b].forEach(function (a, c) {
                            a.options.index =
                            a.userOptions.index = c
                        }); this.destroy(); c.isDirtyBox = !0; y(a, !0) && c.redraw()
                    }; e.prototype.setTitle = function (a, c) { this.update({ title: a }, c) }; e.prototype.setCategories = function (a, c) { this.update({ categories: a }, c) }; e.defaultOptions = {
                        dateTimeLabelFormats: { millisecond: { main: "%H:%M:%S.%L", range: !1 }, second: { main: "%H:%M:%S", range: !1 }, minute: { main: "%H:%M", range: !1 }, hour: { main: "%H:%M", range: !1 }, day: { main: "%e. %b" }, week: { main: "%e. %b" }, month: { main: "%b '%y" }, year: { main: "%Y" } }, endOnTick: !1, labels: {
                            enabled: !0, indentation: 10,
                            x: 0, style: { color: w.neutralColor60, cursor: "default", fontSize: "11px" }
                        }, maxPadding: .01, minorTickLength: 2, minorTickPosition: "outside", minPadding: .01, showEmpty: !0, startOfWeek: 1, startOnTick: !1, tickLength: 10, tickPixelInterval: 100, tickmarkPlacement: "between", tickPosition: "outside", title: { align: "middle", style: { color: w.neutralColor60 } }, type: "linear", minorGridLineColor: w.neutralColor5, minorGridLineWidth: 1, minorTickColor: w.neutralColor40, lineColor: w.highlightColor20, lineWidth: 1, gridLineColor: w.neutralColor10,
                        tickColor: w.highlightColor20
                    }; e.defaultYAxisOptions = { endOnTick: !0, maxPadding: .05, minPadding: .05, tickPixelInterval: 72, showLastLabel: !0, labels: { x: -8 }, startOnTick: !0, title: { rotation: 270, text: "Values" }, stackLabels: { animation: {}, allowOverlap: !1, enabled: !1, crop: !0, overflow: "justify", formatter: function () { var a = this.axis.chart.numberFormatter; return a(this.total, -1) }, style: { color: w.neutralColor100, fontSize: "11px", fontWeight: "bold", textOutline: "1px contrast" } }, gridLineWidth: 1, lineWidth: 0 }; e.defaultLeftAxisOptions =
                        { labels: { x: -15 }, title: { rotation: 270 } }; e.defaultRightAxisOptions = { labels: { x: 15 }, title: { rotation: 90 } }; e.defaultBottomAxisOptions = { labels: { autoRotation: [-45], x: 0 }, margin: 15, title: { rotation: 0 } }; e.defaultTopAxisOptions = { labels: { autoRotation: [-45], x: 0 }, margin: 15, title: { rotation: 0 } }; e.keepProps = "extKey hcEvents names series userMax userMin".split(" "); return e
        }(); l.Axis = e; return l.Axis
    }); O(l, "Core/Axis/DateTimeAxis.js", [l["Core/Axis/Axis.js"], l["Core/Utilities.js"]], function (e, b) {
        var l = b.addEvent, w = b.getMagnitude,
        D = b.normalizeTickInterval, F = b.timeUnits, E = function () {
            function b(b) { this.axis = b } b.prototype.normalizeTimeTickInterval = function (b, e) {
                var k = e || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]]; e = k[k.length - 1]; var r = F[e[0]], g = e[1], q; for (q = 0; q < k.length && !(e = k[q], r = F[e[0]], g = e[1], k[q + 1] && b <= (r * g[g.length - 1] + F[k[q + 1][0]]) / 2); q++); r === F.year && b < 5 * r && (g = [1, 2, 5]);
                b = D(b / r, g, "year" === e[0] ? Math.max(w(b / r), 1) : 1); return { unitRange: r, count: b, unitName: e[0] }
            }; return b
        }(); b = function () { function b() { } b.compose = function (b) { b.keepProps.push("dateTime"); b.prototype.getTimeTicks = function () { return this.chart.time.getTimeTicks.apply(this.chart.time, arguments) }; l(b, "init", function (b) { "datetime" !== b.userOptions.type ? this.dateTime = void 0 : this.dateTime || (this.dateTime = new E(this)) }) }; b.AdditionsClass = E; return b }(); b.compose(e); return b
    }); O(l, "Core/Axis/LogarithmicAxis.js", [l["Core/Axis/Axis.js"],
    l["Core/Utilities.js"]], function (e, b) {
        var l = b.addEvent, w = b.getMagnitude, D = b.normalizeTickInterval, F = b.pick, E = function () {
            function b(b) { this.axis = b } b.prototype.getLogTickPositions = function (b, e, k, l) {
                var g = this.axis, q = g.len, f = g.options, p = []; l || (this.minorAutoInterval = void 0); if (.5 <= b) b = Math.round(b), p = g.getLinearTickPositions(b, e, k); else if (.08 <= b) {
                    f = Math.floor(e); var B, r; for (q = .3 < b ? [1, 2, 4] : .15 < b ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; f < k + 1 && !r; f++) {
                        var C = q.length; for (B = 0; B < C && !r; B++) {
                            var z = this.log2lin(this.lin2log(f) *
                                q[B]); z > e && (!l || m <= k) && "undefined" !== typeof m && p.push(m); m > k && (r = !0); var m = z
                        }
                    }
                } else e = this.lin2log(e), k = this.lin2log(k), b = l ? g.getMinorTickInterval() : f.tickInterval, b = F("auto" === b ? null : b, this.minorAutoInterval, f.tickPixelInterval / (l ? 5 : 1) * (k - e) / ((l ? q / g.tickPositions.length : q) || 1)), b = D(b, void 0, w(b)), p = g.getLinearTickPositions(b, e, k).map(this.log2lin), l || (this.minorAutoInterval = b / 5); l || (g.tickInterval = b); return p
            }; b.prototype.lin2log = function (b) { return Math.pow(10, b) }; b.prototype.log2lin = function (b) {
                return Math.log(b) /
                    Math.LN10
            }; return b
        }(); b = function () { function b() { } b.compose = function (b) { b.keepProps.push("logarithmic"); l(b, "init", function (b) { var e = this.logarithmic; "logarithmic" !== b.userOptions.type ? this.logarithmic = void 0 : e || (this.logarithmic = new E(this)) }); l(b, "afterInit", function () { var b = this.logarithmic; b && (this.lin2val = function (e) { return b.lin2log(e) }, this.val2lin = function (e) { return b.log2lin(e) }) }) }; return b }(); b.compose(e); return b
    }); O(l, "Core/Axis/PlotLineOrBand.js", [l["Core/Axis/Axis.js"], l["Core/Globals.js"],
    l["Core/Color/Palette.js"], l["Core/Utilities.js"]], function (e, b, l, w) {
        var D = w.arrayMax, F = w.arrayMin, E = w.defined, H = w.destroyObjectProperties, r = w.erase, A = w.extend, k = w.fireEvent, C = w.merge, g = w.objectEach, q = w.pick; w = function () {
            function b(b, f) { this.axis = b; f && (this.options = f, this.id = f.id) } b.prototype.render = function () {
                k(this, "render"); var b = this, f = b.axis, e = f.horiz, r = f.logarithmic, z = b.options, m = z.label, t = b.label, d = z.to, h = z.from, a = z.value, c = E(h) && E(d), v = E(a), K = b.svgElem, P = !K, y = [], L = z.color, A = q(z.zIndex, 0),
                    N = z.events; y = { "class": "highcharts-plot-" + (c ? "band " : "line ") + (z.className || "") }; var G = {}, u = f.chart.renderer, w = c ? "bands" : "lines"; r && (h = r.log2lin(h), d = r.log2lin(d), a = r.log2lin(a)); f.chart.styledMode || (v ? (y.stroke = L || l.neutralColor40, y["stroke-width"] = q(z.width, 1), z.dashStyle && (y.dashstyle = z.dashStyle)) : c && (y.fill = L || l.highlightColor10, z.borderWidth && (y.stroke = z.borderColor, y["stroke-width"] = z.borderWidth))); G.zIndex = A; w += "-" + A; (r = f.plotLinesAndBandsGroups[w]) || (f.plotLinesAndBandsGroups[w] = r = u.g("plot-" +
                        w).attr(G).add()); P && (b.svgElem = K = u.path().attr(y).add(r)); if (v) y = f.getPlotLinePath({ value: a, lineWidth: K.strokeWidth(), acrossPanes: z.acrossPanes }); else if (c) y = f.getPlotBandPath(h, d, z); else return; !b.eventsAdded && N && (g(N, function (a, c) { K.on(c, function (a) { N[c].apply(b, [a]) }) }), b.eventsAdded = !0); (P || !K.d) && y && y.length ? K.attr({ d: y }) : K && (y ? (K.show(!0), K.animate({ d: y })) : K.d && (K.hide(), t && (b.label = t = t.destroy()))); m && (E(m.text) || E(m.formatter)) && y && y.length && 0 < f.width && 0 < f.height && !y.isFlat ? (m = C({
                            align: e &&
                                c && "center", x: e ? !c && 4 : 10, verticalAlign: !e && c && "middle", y: e ? c ? 16 : 10 : c ? 6 : -4, rotation: e && !c && 90
                        }, m), this.renderLabel(m, y, c, A)) : t && t.hide(); return b
            }; b.prototype.renderLabel = function (b, f, g, e) {
                var p = this.label, m = this.axis.chart.renderer; p || (p = { align: b.textAlign || b.align, rotation: b.rotation, "class": "highcharts-plot-" + (g ? "band" : "line") + "-label " + (b.className || "") }, p.zIndex = e, e = this.getLabelText(b), this.label = p = m.text(e, 0, 0, b.useHTML).attr(p).add(), this.axis.chart.styledMode || p.css(b.style)); m = f.xBounds ||
                    [f[0][1], f[1][1], g ? f[2][1] : f[0][1]]; f = f.yBounds || [f[0][2], f[1][2], g ? f[2][2] : f[0][2]]; g = F(m); e = F(f); p.align(b, !1, { x: g, y: e, width: D(m) - g, height: D(f) - e }); p.show(!0)
            }; b.prototype.getLabelText = function (b) { return E(b.formatter) ? b.formatter.call(this) : b.text }; b.prototype.destroy = function () { r(this.axis.plotLinesAndBands, this); delete this.axis; H(this) }; return b
        }(); A(e.prototype, {
            getPlotBandPath: function (b, g, e) {
            void 0 === e && (e = this.options); var f = this.getPlotLinePath({ value: g, force: !0, acrossPanes: e.acrossPanes });
                e = this.getPlotLinePath({ value: b, force: !0, acrossPanes: e.acrossPanes }); var p = [], k = this.horiz, m = 1; b = b < this.min && g < this.min || b > this.max && g > this.max; if (e && f) {
                    if (b) { var t = e.toString() === f.toString(); m = 0 } for (b = 0; b < e.length; b += 2) {
                        g = e[b]; var d = e[b + 1], h = f[b], a = f[b + 1]; "M" !== g[0] && "L" !== g[0] || "M" !== d[0] && "L" !== d[0] || "M" !== h[0] && "L" !== h[0] || "M" !== a[0] && "L" !== a[0] || (k && h[1] === g[1] ? (h[1] += m, a[1] += m) : k || h[2] !== g[2] || (h[2] += m, a[2] += m), p.push(["M", g[1], g[2]], ["L", d[1], d[2]], ["L", a[1], a[2]], ["L", h[1], h[2]], ["Z"]));
                        p.isFlat = t
                    }
                } return p
            }, addPlotBand: function (b) { return this.addPlotBandOrLine(b, "plotBands") }, addPlotLine: function (b) { return this.addPlotBandOrLine(b, "plotLines") }, addPlotBandOrLine: function (f, g) { var e = this, p = new b.PlotLineOrBand(this, f), k = this.userOptions; this.visible && (p = p.render()); if (p) { this._addedPlotLB || (this._addedPlotLB = !0, (k.plotLines || []).concat(k.plotBands || []).forEach(function (b) { e.addPlotBandOrLine(b) })); if (g) { var q = k[g] || []; q.push(f); k[g] = q } this.plotLinesAndBands.push(p) } return p }, removePlotBandOrLine: function (b) {
                for (var f =
                    this.plotLinesAndBands, g = this.options, e = this.userOptions, k = f.length; k--;)f[k].id === b && f[k].destroy();[g.plotLines || [], e.plotLines || [], g.plotBands || [], e.plotBands || []].forEach(function (f) { for (k = f.length; k--;)(f[k] || {}).id === b && r(f, f[k]) })
            }, removePlotBand: function (b) { this.removePlotBandOrLine(b) }, removePlotLine: function (b) { this.removePlotBandOrLine(b) }
        }); b.PlotLineOrBand = w; return b.PlotLineOrBand
    }); O(l, "Core/Tooltip.js", [l["Core/Globals.js"], l["Core/Color/Palette.js"], l["Core/Utilities.js"]], function (e,
        b, l) {
            var w = e.doc, D = l.clamp, F = l.css, E = l.defined, H = l.discardElement, r = l.extend, A = l.fireEvent, k = l.format, C = l.isNumber, g = l.isString, q = l.merge, f = l.pick, p = l.splat, B = l.syncTimeout, I = l.timeUnits; ""; var Q = function () {
                function z(b, f) { this.container = void 0; this.crosshairs = []; this.distance = 0; this.isHidden = !0; this.isSticky = !1; this.now = {}; this.options = {}; this.outside = !1; this.chart = b; this.init(b, f) } z.prototype.applyFilter = function () {
                    var b = this.chart; b.renderer.definition({
                        tagName: "filter", attributes: {
                            id: "drop-shadow-" +
                                b.index, opacity: .5
                        }, children: [{ tagName: "feGaussianBlur", attributes: { "in": "SourceAlpha", stdDeviation: 1 } }, { tagName: "feOffset", attributes: { dx: 1, dy: 1 } }, { tagName: "feComponentTransfer", children: [{ tagName: "feFuncA", attributes: { type: "linear", slope: .3 } }] }, { tagName: "feMerge", children: [{ tagName: "feMergeNode" }, { tagName: "feMergeNode", attributes: { "in": "SourceGraphic" } }] }]
                    }); b.renderer.definition({ tagName: "style", textContent: ".highcharts-tooltip-" + b.index + "{filter:url(#drop-shadow-" + b.index + ")}" })
                }; z.prototype.bodyFormatter =
                    function (b) { return b.map(function (b) { var d = b.series.tooltipOptions; return (d[(b.point.formatPrefix || "point") + "Formatter"] || b.point.tooltipFormatter).call(b.point, d[(b.point.formatPrefix || "point") + "Format"] || "") }) }; z.prototype.cleanSplit = function (b) { this.chart.series.forEach(function (f) { var d = f && f.tt; d && (!d.isActive || b ? f.tt = d.destroy() : d.isActive = !1) }) }; z.prototype.defaultFormatter = function (b) {
                        var f = this.points || p(this); var d = [b.tooltipFooterHeaderFormatter(f[0])]; d = d.concat(b.bodyFormatter(f)); d.push(b.tooltipFooterHeaderFormatter(f[0],
                            !0)); return d
                    }; z.prototype.destroy = function () { this.label && (this.label = this.label.destroy()); this.split && this.tt && (this.cleanSplit(this.chart, !0), this.tt = this.tt.destroy()); this.renderer && (this.renderer = this.renderer.destroy(), H(this.container)); l.clearTimeout(this.hideTimer); l.clearTimeout(this.tooltipTimeout) }; z.prototype.getAnchor = function (b, f) {
                        var d = this.chart; var h = d.pointer; var a = d.inverted, c = d.plotTop, g = d.plotLeft, m = 0, e = 0, k, t; b = p(b); this.followPointer && f ? ("undefined" === typeof f.chartX && (f = h.normalize(f)),
                            h = [f.chartX - g, f.chartY - c]) : b[0].tooltipPos ? h = b[0].tooltipPos : (b.forEach(function (b) { k = b.series.yAxis; t = b.series.xAxis; m += b.plotX || 0; e += b.plotLow ? (b.plotLow + (b.plotHigh || 0)) / 2 : b.plotY || 0; t && k && (a ? (m += c + d.plotHeight - t.len - t.pos, e += g + d.plotWidth - k.len - k.pos) : (m += t.pos - g, e += k.pos - c)) }), m /= b.length, e /= b.length, h = [a ? d.plotWidth - e : m, a ? d.plotHeight - m : e], this.shared && 1 < b.length && f && (a ? h[0] = f.chartX - g : h[1] = f.chartY - c)); return h.map(Math.round)
                    }; z.prototype.getDateFormat = function (b, f, d, h) {
                        var a = this.chart.time,
                        c = a.dateFormat("%m-%d %H:%M:%S.%L", f), g = { millisecond: 15, second: 12, minute: 9, hour: 6, day: 3 }, m = "millisecond"; for (e in I) { if (b === I.week && +a.dateFormat("%w", f) === d && "00:00:00.000" === c.substr(6)) { var e = "week"; break } if (I[e] > b) { e = m; break } if (g[e] && c.substr(g[e]) !== "01-01 00:00:00.000".substr(g[e])) break; "week" !== e && (m = e) } if (e) var k = a.resolveDTLFormat(h[e]).main; return k
                    }; z.prototype.getLabel = function () {
                        var b, f, d, h = this, a = this.chart.renderer, c = this.chart.styledMode, g = this.options, k = "tooltip" + (E(g.className) ?
                            " " + g.className : ""), p = (null === (b = g.style) || void 0 === b ? void 0 : b.pointerEvents) || (!this.followPointer && g.stickOnContact ? "auto" : "none"), y; b = function () { h.inContact = !0 }; var q = function () { var a = h.chart.hoverSeries; h.inContact = !1; if (a && a.onMouseOut) a.onMouseOut() }; if (!this.label) {
                                if (this.outside) {
                                    var l = null === (f = this.chart.options.chart) || void 0 === f ? void 0 : f.style; this.container = y = e.doc.createElement("div"); y.className = "highcharts-tooltip-container"; F(y, {
                                        position: "absolute", top: "1px", pointerEvents: p, zIndex: Math.max((null ===
                                            (d = this.options.style) || void 0 === d ? void 0 : d.zIndex) || 0, ((null === l || void 0 === l ? void 0 : l.zIndex) || 0) + 3)
                                    }); e.doc.body.appendChild(y); this.renderer = a = new e.Renderer(y, 0, 0, l, void 0, void 0, a.styledMode)
                                } this.split ? this.label = a.g(k) : (this.label = a.label("", 0, 0, g.shape || "callout", null, null, g.useHTML, null, k).attr({ padding: g.padding, r: g.borderRadius }), c || this.label.attr({ fill: g.backgroundColor, "stroke-width": g.borderWidth }).css(g.style).css({ pointerEvents: p }).shadow(g.shadow)); c && (this.applyFilter(), this.label.addClass("highcharts-tooltip-" +
                                    this.chart.index)); if (h.outside && !h.split) { var r = this.label, B = r.xSetter, u = r.ySetter; r.xSetter = function (a) { B.call(r, h.distance); y.style.left = a + "px" }; r.ySetter = function (a) { u.call(r, h.distance); y.style.top = a + "px" } } this.label.on("mouseenter", b).on("mouseleave", q).attr({ zIndex: 8 }).add()
                            } return this.label
                    }; z.prototype.getPosition = function (b, g, d) {
                        var h = this.chart, a = this.distance, c = {}, e = h.inverted && d.h || 0, m, k = this.outside, p = k ? w.documentElement.clientWidth - 2 * a : h.chartWidth, t = k ? Math.max(w.body.scrollHeight,
                            w.documentElement.scrollHeight, w.body.offsetHeight, w.documentElement.offsetHeight, w.documentElement.clientHeight) : h.chartHeight, q = h.pointer.getChartPosition(), l = function (c) { var f = "x" === c; return [c, f ? p : t, f ? b : g].concat(k ? [f ? b * q.scaleX : g * q.scaleY, f ? q.left - a + (d.plotX + h.plotLeft) * q.scaleX : q.top - a + (d.plotY + h.plotTop) * q.scaleY, 0, f ? p : t] : [f ? b : g, f ? d.plotX + h.plotLeft : d.plotY + h.plotTop, f ? h.plotLeft : h.plotTop, f ? h.plotLeft + h.plotWidth : h.plotTop + h.plotHeight]) }, r = l("y"), u = l("x"), B = !this.followPointer && f(d.ttBelow,
                                !h.inverted === !!d.negative), n = function (d, b, h, f, g, m, n) { var x = "y" === d ? a * q.scaleY : a * q.scaleX, v = (h - f) / 2, k = f < g - a, p = g + a + f < b, y = g - x - h + v; g = g + x - v; if (B && p) c[d] = g; else if (!B && k) c[d] = y; else if (k) c[d] = Math.min(n - f, 0 > y - e ? y : y - e); else if (p) c[d] = Math.max(m, g + e + h > b ? g : g + e); else return !1 }, C = function (d, b, h, f, g) { var e; g < a || g > b - a ? e = !1 : c[d] = g < h / 2 ? 1 : g > b - f / 2 ? b - f - 2 : g - h / 2; return e }, A = function (a) { var c = r; r = u; u = c; m = a }, z = function () { !1 !== n.apply(0, r) ? !1 !== C.apply(0, u) || m || (A(!0), z()) : m ? c.x = c.y = 0 : (A(!0), z()) }; (h.inverted || 1 < this.len) &&
                                    A(); z(); return c
                    }; z.prototype.getXDateFormat = function (b, f, d) { f = f.dateTimeLabelFormats; var h = d && d.closestPointRange; return (h ? this.getDateFormat(h, b.x, d.options.startOfWeek, f) : f.day) || f.year }; z.prototype.hide = function (b) { var g = this; l.clearTimeout(this.hideTimer); b = f(b, this.options.hideDelay, 500); this.isHidden || (this.hideTimer = B(function () { g.getLabel().fadeOut(b ? void 0 : b); g.isHidden = !0 }, b)) }; z.prototype.init = function (b, g) {
                    this.chart = b; this.options = g; this.crosshairs = []; this.now = { x: 0, y: 0 }; this.isHidden =
                        !0; this.split = g.split && !b.inverted && !b.polar; this.shared = g.shared || this.split; this.outside = f(g.outside, !(!b.scrollablePixelsX && !b.scrollablePixelsY))
                    }; z.prototype.isStickyOnContact = function () { return !(this.followPointer || !this.options.stickOnContact || !this.inContact) }; z.prototype.move = function (b, f, d, h) {
                        var a = this, c = a.now, g = !1 !== a.options.animation && !a.isHidden && (1 < Math.abs(b - c.x) || 1 < Math.abs(f - c.y)), e = a.followPointer || 1 < a.len; r(c, {
                            x: g ? (2 * c.x + b) / 3 : b, y: g ? (c.y + f) / 2 : f, anchorX: e ? void 0 : g ? (2 * c.anchorX + d) /
                                3 : d, anchorY: e ? void 0 : g ? (c.anchorY + h) / 2 : h
                        }); a.getLabel().attr(c); a.drawTracker(); g && (l.clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function () { a && a.move(b, f, d, h) }, 32))
                    }; z.prototype.refresh = function (g, e) {
                        var d = this.chart, h = this.options, a = g, c = {}, m = [], k = h.formatter || this.defaultFormatter; c = this.shared; var q = d.styledMode; if (h.enabled) {
                            l.clearTimeout(this.hideTimer); this.followPointer = p(a)[0].series.tooltipOptions.followPointer; var y = this.getAnchor(a, e); e = y[0]; var t = y[1]; !c || a.series &&
                                a.series.noSharedTooltip ? c = a.getLabelConfig() : (d.pointer.applyInactiveState(a), a.forEach(function (a) { a.setState("hover"); m.push(a.getLabelConfig()) }), c = { x: a[0].category, y: a[0].y }, c.points = m, a = a[0]); this.len = m.length; d = k.call(c, this); k = a.series; this.distance = f(k.tooltipOptions.distance, 16); !1 === d ? this.hide() : (this.split ? this.renderSplit(d, p(g)) : (g = this.getLabel(), h.style.width && !q || g.css({ width: this.chart.spacingBox.width + "px" }), g.attr({ text: d && d.join ? d.join("") : d }), g.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-" +
                                    f(a.colorIndex, k.colorIndex)), q || g.attr({ stroke: h.borderColor || a.color || k.color || b.neutralColor60 }), this.updatePosition({ plotX: e, plotY: t, negative: a.negative, ttBelow: a.ttBelow, h: y[2] || 0 })), this.isHidden && this.label && this.label.attr({ opacity: 1 }).show(), this.isHidden = !1); A(this, "refresh")
                        }
                    }; z.prototype.renderSplit = function (m, k) {
                        function d(a, c, d, b, h) { void 0 === h && (h = !0); d ? (c = T ? 0 : V, a = D(a - b / 2, w.left, w.right - b)) : (c -= J, a = h ? a - b - n : a + n, a = D(a, h ? a : w.left, w.right)); return { x: a, y: c } } var h = this, a = h.chart, c = h.chart,
                            p = c.plotHeight, K = c.plotLeft, q = c.plotTop, y = c.pointer, t = c.renderer, l = c.scrollablePixelsY, B = void 0 === l ? 0 : l; l = c.scrollingContainer; l = void 0 === l ? { scrollLeft: 0, scrollTop: 0 } : l; var C = l.scrollLeft, u = l.scrollTop, A = c.styledMode, n = h.distance, z = h.options, I = h.options.positioner, w = { left: C, right: C + c.chartWidth, top: u, bottom: u + c.chartHeight }, x = h.getLabel(), T = !(!a.xAxis[0] || !a.xAxis[0].opposite), J = q + u, aa = 0, V = p - B; g(m) && (m = [!1, m]); m = m.slice(0, k.length + 1).reduce(function (a, c, g) {
                                if (!1 !== c && "" !== c) {
                                    g = k[g - 1] || {
                                        isHeader: !0,
                                        plotX: k[0].plotX, plotY: p, series: {}
                                    }; var e = g.isHeader, m = e ? h : g.series, v = m.tt, y = g.isHeader; var l = g.series; var L = "highcharts-color-" + f(g.colorIndex, l.colorIndex, "none"); v || (v = { padding: z.padding, r: z.borderRadius }, A || (v.fill = z.backgroundColor, v["stroke-width"] = z.borderWidth), v = t.label("", 0, 0, z[y ? "headerShape" : "shape"] || "callout", void 0, void 0, z.useHTML).addClass((y ? "highcharts-tooltip-header " : "") + "highcharts-tooltip-box " + L).attr(v).add(x)); v.isActive = !0; v.attr({ text: c }); A || v.css(z.style).shadow(z.shadow).attr({
                                        stroke: z.borderColor ||
                                            g.color || l.color || b.neutralColor80
                                    }); c = m.tt = v; y = c.getBBox(); m = y.width + c.strokeWidth(); e && (aa = y.height, V += aa, T && (J -= aa)); l = g.plotX; l = void 0 === l ? 0 : l; L = g.plotY; L = void 0 === L ? 0 : L; var r = g.series; if (g.isHeader) { l = K + l; var P = q + p / 2 } else v = r.xAxis, r = r.yAxis, l = v.pos + D(l, -n, v.len + n), r.pos + L >= u + q && r.pos + L <= u + q + p - B && (P = r.pos + L); l = D(l, w.left - n, w.right + n); "number" === typeof P ? (y = y.height + 1, L = I ? I.call(h, m, y, g) : d(l, P, e, m), a.push({
                                        align: I ? 0 : void 0, anchorX: l, anchorY: P, boxWidth: m, point: g, rank: f(L.rank, e ? 1 : 0), size: y, target: L.y,
                                        tt: c, x: L.x
                                    })) : c.isActive = !1
                                } return a
                            }, []); !I && m.some(function (a) { return a.x < w.left }) && (m = m.map(function (a) { var c = d(a.anchorX, a.anchorY, a.point.isHeader, a.boxWidth, !1); return r(a, { target: c.y, x: c.x }) })); h.cleanSplit(); e.distribute(m, V); m.forEach(function (a) { var c = a.pos; a.tt.attr({ visibility: "undefined" === typeof c ? "hidden" : "inherit", x: a.x, y: c + J, anchorX: a.anchorX, anchorY: a.anchorY }) }); m = h.container; a = h.renderer; h.outside && m && a && (c = x.getBBox(), a.setSize(c.width + c.x, c.height + c.y, !1), y = y.getChartPosition(),
                                m.style.left = y.left + "px", m.style.top = y.top + "px")
                    }; z.prototype.drawTracker = function () {
                        if (this.followPointer || !this.options.stickOnContact) this.tracker && this.tracker.destroy(); else {
                            var b = this.chart, f = this.label, d = b.hoverPoint; if (f && d) {
                                var h = { x: 0, y: 0, width: 0, height: 0 }; d = this.getAnchor(d); var a = f.getBBox(); d[0] += b.plotLeft - f.translateX; d[1] += b.plotTop - f.translateY; h.x = Math.min(0, d[0]); h.y = Math.min(0, d[1]); h.width = 0 > d[0] ? Math.max(Math.abs(d[0]), a.width - d[0]) : Math.max(Math.abs(d[0]), a.width); h.height = 0 >
                                    d[1] ? Math.max(Math.abs(d[1]), a.height - Math.abs(d[1])) : Math.max(Math.abs(d[1]), a.height); this.tracker ? this.tracker.attr(h) : (this.tracker = f.renderer.rect(h).addClass("highcharts-tracker").add(f), b.styledMode || this.tracker.attr({ fill: "rgba(0,0,0,0)" }))
                            }
                        }
                    }; z.prototype.styledModeFormat = function (b) { return b.replace('style="font-size: 10px"', 'class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g, 'class="highcharts-color-{$1.colorIndex}"') }; z.prototype.tooltipFooterHeaderFormatter =
                        function (b, f) { var d = f ? "footer" : "header", h = b.series, a = h.tooltipOptions, c = a.xDateFormat, g = h.xAxis, e = g && "datetime" === g.options.type && C(b.key), m = a[d + "Format"]; f = { isFooter: f, labelConfig: b }; A(this, "headerFormatter", f, function (d) { e && !c && (c = this.getXDateFormat(b, a, g)); e && c && (b.point && b.point.tooltipDateKeys || ["key"]).forEach(function (a) { m = m.replace("{point." + a + "}", "{point." + a + ":" + c + "}") }); h.chart.styledMode && (m = this.styledModeFormat(m)); d.text = k(m, { point: b, series: h }, this.chart) }); return f.text }; z.prototype.update =
                            function (b) { this.destroy(); q(!0, this.chart.options.tooltip.userOptions, b); this.init(this.chart, q(!0, this.options, b)) }; z.prototype.updatePosition = function (b) {
                                var f = this.chart, d = f.pointer, h = this.getLabel(), a = b.plotX + f.plotLeft; f = b.plotY + f.plotTop; d = d.getChartPosition(); b = (this.options.positioner || this.getPosition).call(this, h.width, h.height, b); if (this.outside) {
                                    var c = (this.options.borderWidth || 0) + 2 * this.distance; this.renderer.setSize(h.width + c, h.height + c, !1); if (1 !== d.scaleX || 1 !== d.scaleY) F(this.container,
                                        { transform: "scale(" + d.scaleX + ", " + d.scaleY + ")" }), a *= d.scaleX, f *= d.scaleY; a += d.left - b.x; f += d.top - b.y
                                } this.move(Math.round(b.x), Math.round(b.y || 0), a, f)
                            }; return z
            }(); e.Tooltip = Q; return e.Tooltip
    }); O(l, "Core/Pointer.js", [l["Core/Color/Color.js"], l["Core/Globals.js"], l["Core/Color/Palette.js"], l["Core/Tooltip.js"], l["Core/Utilities.js"]], function (e, b, l, w, D) {
        var F = e.parse, E = b.charts, H = b.noop, r = D.addEvent, A = D.attr, k = D.css, C = D.defined, g = D.extend, q = D.find, f = D.fireEvent, p = D.isNumber, B = D.isObject, I = D.objectEach,
        Q = D.offset, z = D.pick, m = D.splat; ""; e = function () {
            function e(b, h) { this.lastValidTouch = {}; this.pinchDown = []; this.runChartClick = !1; this.chart = b; this.hasDragged = !1; this.options = h; this.unbindContainerMouseLeave = function () { }; this.unbindContainerMouseEnter = function () { }; this.init(b, h) } e.prototype.applyInactiveState = function (b) {
                var d = [], a; (b || []).forEach(function (c) { a = c.series; d.push(a); a.linkedParent && d.push(a.linkedParent); a.linkedSeries && (d = d.concat(a.linkedSeries)); a.navigatorSeries && d.push(a.navigatorSeries) });
                this.chart.series.forEach(function (a) { -1 === d.indexOf(a) ? a.setState("inactive", !0) : a.options.inactiveOtherPoints && a.setAllPointsToState("inactive") })
            }; e.prototype.destroy = function () {
                var d = this; "undefined" !== typeof d.unDocMouseMove && d.unDocMouseMove(); this.unbindContainerMouseLeave(); b.chartCount || (b.unbindDocumentMouseUp && (b.unbindDocumentMouseUp = b.unbindDocumentMouseUp()), b.unbindDocumentTouchEnd && (b.unbindDocumentTouchEnd = b.unbindDocumentTouchEnd())); clearInterval(d.tooltipTimeout); I(d, function (b,
                    a) { d[a] = void 0 })
            }; e.prototype.drag = function (b) {
                var d = this.chart, a = d.options.chart, c = b.chartX, f = b.chartY, g = this.zoomHor, e = this.zoomVert, m = d.plotLeft, k = d.plotTop, p = d.plotWidth, q = d.plotHeight, t = this.selectionMarker, u = this.mouseDownX || 0, r = this.mouseDownY || 0, n = B(a.panning) ? a.panning && a.panning.enabled : a.panning, C = a.panKey && b[a.panKey + "Key"]; if (!t || !t.touch) if (c < m ? c = m : c > m + p && (c = m + p), f < k ? f = k : f > k + q && (f = k + q), this.hasDragged = Math.sqrt(Math.pow(u - c, 2) + Math.pow(r - f, 2)), 10 < this.hasDragged) {
                    var z = d.isInsidePlot(u -
                        m, r - k); d.hasCartesianSeries && (this.zoomX || this.zoomY) && z && !C && !t && (this.selectionMarker = t = d.renderer.rect(m, k, g ? 1 : p, e ? 1 : q, 0).attr({ "class": "highcharts-selection-marker", zIndex: 7 }).add(), d.styledMode || t.attr({ fill: a.selectionMarkerFill || F(l.highlightColor80).setOpacity(.25).get() })); t && g && (c -= u, t.attr({ width: Math.abs(c), x: (0 < c ? 0 : c) + u })); t && e && (c = f - r, t.attr({ height: Math.abs(c), y: (0 < c ? 0 : c) + r })); z && !t && n && d.pan(b, a.panning)
                }
            }; e.prototype.dragStart = function (b) {
                var d = this.chart; d.mouseIsDown = b.type; d.cancelClick =
                    !1; d.mouseDownX = this.mouseDownX = b.chartX; d.mouseDownY = this.mouseDownY = b.chartY
            }; e.prototype.drop = function (b) {
                var d = this, a = this.chart, c = this.hasPinched; if (this.selectionMarker) {
                    var e = { originalEvent: b, xAxis: [], yAxis: [] }, m = this.selectionMarker, q = m.attr ? m.attr("x") : m.x, y = m.attr ? m.attr("y") : m.y, l = m.attr ? m.attr("width") : m.width, t = m.attr ? m.attr("height") : m.height, r; if (this.hasDragged || c) a.axes.forEach(function (a) {
                        if (a.zoomEnabled && C(a.min) && (c || d[{ xAxis: "zoomX", yAxis: "zoomY" }[a.coll]]) && p(q) && p(y)) {
                            var h =
                                a.horiz, f = "touchend" === b.type ? a.minPixelPadding : 0, g = a.toValue((h ? q : y) + f); h = a.toValue((h ? q + l : y + t) - f); e[a.coll].push({ axis: a, min: Math.min(g, h), max: Math.max(g, h) }); r = !0
                        }
                    }), r && f(a, "selection", e, function (b) { a.zoom(g(b, c ? { animation: !1 } : null)) }); p(a.index) && (this.selectionMarker = this.selectionMarker.destroy()); c && this.scaleGroups()
                } a && p(a.index) && (k(a.container, { cursor: a._cursor }), a.cancelClick = 10 < this.hasDragged, a.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = [])
            }; e.prototype.findNearestKDPoint =
                function (b, h, a) { var c = this.chart, d = c.hoverPoint; c = c.tooltip; if (d && c && c.isStickyOnContact()) return d; var f; b.forEach(function (c) { var b = !(c.noSharedTooltip && h) && 0 > c.options.findNearestPointBy.indexOf("y"); c = c.searchPoint(a, b); if ((b = B(c, !0) && c.series) && !(b = !B(f, !0))) { b = f.distX - c.distX; var d = f.dist - c.dist, g = (c.series.group && c.series.group.zIndex) - (f.series.group && f.series.group.zIndex); b = 0 < (0 !== b && h ? b : 0 !== d ? d : 0 !== g ? g : f.series.index > c.series.index ? -1 : 1) } b && (f = c) }); return f }; e.prototype.getChartCoordinatesFromPoint =
                    function (b, h) { var a = b.series, c = a.xAxis; a = a.yAxis; var d = z(b.clientX, b.plotX), f = b.shapeArgs; if (c && a) return h ? { chartX: c.len + c.pos - d, chartY: a.len + a.pos - b.plotY } : { chartX: d + c.pos, chartY: b.plotY + a.pos }; if (f && f.x && f.y) return { chartX: f.x, chartY: f.y } }; e.prototype.getChartPosition = function () {
                        if (this.chartPosition) return this.chartPosition; var b = this.chart.container, h = Q(b); this.chartPosition = { left: h.left, top: h.top, scaleX: 1, scaleY: 1 }; 2 < b.offsetWidth && 2 < b.offsetHeight && b.getBoundingClientRect && (h = b.getBoundingClientRect(),
                            this.chartPosition.scaleX = h.width / b.offsetWidth, this.chartPosition.scaleY = h.height / b.offsetHeight); return this.chartPosition
                    }; e.prototype.getCoordinates = function (b) { var d = { xAxis: [], yAxis: [] }; this.chart.axes.forEach(function (a) { d[a.isXAxis ? "xAxis" : "yAxis"].push({ axis: a, value: a.toValue(b[a.horiz ? "chartX" : "chartY"]) }) }); return d }; e.prototype.getHoverData = function (b, h, a, c, g, e) {
                        var d, m = []; c = !(!c || !b); var k = h && !h.stickyTracking, p = { chartX: e ? e.chartX : void 0, chartY: e ? e.chartY : void 0, shared: g }; f(this, "beforeGetHoverData",
                            p); k = k ? [h] : a.filter(function (a) { return p.filter ? p.filter(a) : a.visible && !(!g && a.directTouch) && z(a.options.enableMouseTracking, !0) && a.stickyTracking }); h = (d = c || !e ? b : this.findNearestKDPoint(k, g, e)) && d.series; d && (g && !h.noSharedTooltip ? (k = a.filter(function (a) { return p.filter ? p.filter(a) : a.visible && !(!g && a.directTouch) && z(a.options.enableMouseTracking, !0) && !a.noSharedTooltip }), k.forEach(function (a) { var c = q(a.points, function (a) { return a.x === d.x && !a.isNull }); B(c) && (a.chart.isBoosting && (c = a.getPoint(c)), m.push(c)) })) :
                                m.push(d)); p = { hoverPoint: d }; f(this, "afterGetHoverData", p); return { hoverPoint: p.hoverPoint, hoverSeries: h, hoverPoints: m }
                    }; e.prototype.getPointFromEvent = function (b) { b = b.target; for (var d; b && !d;)d = b.point, b = b.parentNode; return d }; e.prototype.onTrackerMouseOut = function (b) { b = b.relatedTarget || b.toElement; var d = this.chart.hoverSeries; this.isDirectTouch = !1; if (!(!d || !b || d.stickyTracking || this.inClass(b, "highcharts-tooltip") || this.inClass(b, "highcharts-series-" + d.index) && this.inClass(b, "highcharts-tracker"))) d.onMouseOut() };
            e.prototype.inClass = function (b, f) { for (var a; b;) { if (a = A(b, "class")) { if (-1 !== a.indexOf(f)) return !0; if (-1 !== a.indexOf("highcharts-container")) return !1 } b = b.parentNode } }; e.prototype.init = function (b, f) { this.options = f; this.chart = b; this.runChartClick = f.chart.events && !!f.chart.events.click; this.pinchDown = []; this.lastValidTouch = {}; w && (b.tooltip = new w(b, f.tooltip), this.followTouchMove = z(f.tooltip.followTouchMove, !0)); this.setDOMEvents() }; e.prototype.normalize = function (b, f) {
                var a = b.touches, c = a ? a.length ? a.item(0) :
                    z(a.changedTouches, b.changedTouches)[0] : b; f || (f = this.getChartPosition()); a = c.pageX - f.left; c = c.pageY - f.top; a /= f.scaleX; c /= f.scaleY; return g(b, { chartX: Math.round(a), chartY: Math.round(c) })
            }; e.prototype.onContainerClick = function (b) {
                var d = this.chart, a = d.hoverPoint; b = this.normalize(b); var c = d.plotLeft, e = d.plotTop; d.cancelClick || (a && this.inClass(b.target, "highcharts-tracker") ? (f(a.series, "click", g(b, { point: a })), d.hoverPoint && a.firePointEvent("click", b)) : (g(b, this.getCoordinates(b)), d.isInsidePlot(b.chartX -
                    c, b.chartY - e) && f(d, "click", b)))
            }; e.prototype.onContainerMouseDown = function (d) { var f = 1 === ((d.buttons || d.button) & 1); d = this.normalize(d); if (b.isFirefox && 0 !== d.button) this.onContainerMouseMove(d); if ("undefined" === typeof d.button || f) this.zoomOption(d), f && d.preventDefault && d.preventDefault(), this.dragStart(d) }; e.prototype.onContainerMouseLeave = function (d) {
                var f = E[z(b.hoverChartIndex, -1)], a = this.chart.tooltip; d = this.normalize(d); f && (d.relatedTarget || d.toElement) && (f.pointer.reset(), f.pointer.chartPosition =
                    void 0); a && !a.isHidden && this.reset()
            }; e.prototype.onContainerMouseEnter = function (b) { delete this.chartPosition }; e.prototype.onContainerMouseMove = function (b) { var d = this.chart; b = this.normalize(b); this.setHoverChartIndex(); b.preventDefault || (b.returnValue = !1); ("mousedown" === d.mouseIsDown || this.touchSelect(b)) && this.drag(b); d.openMenu || !this.inClass(b.target, "highcharts-tracker") && !d.isInsidePlot(b.chartX - d.plotLeft, b.chartY - d.plotTop) || this.runPointActions(b) }; e.prototype.onDocumentTouchEnd = function (d) {
            E[b.hoverChartIndex] &&
                E[b.hoverChartIndex].pointer.drop(d)
            }; e.prototype.onContainerTouchMove = function (b) { if (this.touchSelect(b)) this.onContainerMouseMove(b); else this.touch(b) }; e.prototype.onContainerTouchStart = function (b) { if (this.touchSelect(b)) this.onContainerMouseDown(b); else this.zoomOption(b), this.touch(b, !0) }; e.prototype.onDocumentMouseMove = function (b) {
                var d = this.chart, a = this.chartPosition; b = this.normalize(b, a); var c = d.tooltip; !a || c && c.isStickyOnContact() || d.isInsidePlot(b.chartX - d.plotLeft, b.chartY - d.plotTop) ||
                    this.inClass(b.target, "highcharts-tracker") || this.reset()
            }; e.prototype.onDocumentMouseUp = function (d) { var f = E[z(b.hoverChartIndex, -1)]; f && f.pointer.drop(d) }; e.prototype.pinch = function (b) {
                var d = this, a = d.chart, c = d.pinchDown, f = b.touches || [], e = f.length, m = d.lastValidTouch, k = d.hasZoom, p = d.selectionMarker, q = {}, l = 1 === e && (d.inClass(b.target, "highcharts-tracker") && a.runTrackerClick || d.runChartClick), t = {}; 1 < e && (d.initiated = !0); k && d.initiated && !l && !1 !== b.cancelable && b.preventDefault();[].map.call(f, function (a) { return d.normalize(a) });
                "touchstart" === b.type ? ([].forEach.call(f, function (a, b) { c[b] = { chartX: a.chartX, chartY: a.chartY } }), m.x = [c[0].chartX, c[1] && c[1].chartX], m.y = [c[0].chartY, c[1] && c[1].chartY], a.axes.forEach(function (c) { if (c.zoomEnabled) { var b = a.bounds[c.horiz ? "h" : "v"], d = c.minPixelPadding, f = c.toPixels(Math.min(z(c.options.min, c.dataMin), c.dataMin)), g = c.toPixels(Math.max(z(c.options.max, c.dataMax), c.dataMax)), h = Math.max(f, g); b.min = Math.min(c.pos, Math.min(f, g) - d); b.max = Math.max(c.pos + c.len, h + d) } }), d.res = !0) : d.followTouchMove &&
                    1 === e ? this.runPointActions(d.normalize(b)) : c.length && (p || (d.selectionMarker = p = g({ destroy: H, touch: !0 }, a.plotBox)), d.pinchTranslate(c, f, q, p, t, m), d.hasPinched = k, d.scaleGroups(q, t), d.res && (d.res = !1, this.reset(!1, 0)))
            }; e.prototype.pinchTranslate = function (b, f, a, c, g, e) { this.zoomHor && this.pinchTranslateDirection(!0, b, f, a, c, g, e); this.zoomVert && this.pinchTranslateDirection(!1, b, f, a, c, g, e) }; e.prototype.pinchTranslateDirection = function (b, f, a, c, g, e, m, k) {
                var d = this.chart, h = b ? "x" : "y", p = b ? "X" : "Y", v = "chart" + p, q = b ?
                    "width" : "height", y = d["plot" + (b ? "Left" : "Top")], n, K, l = k || 1, t = d.inverted, x = d.bounds[b ? "h" : "v"], r = 1 === f.length, J = f[0][v], B = a[0][v], C = !r && f[1][v], z = !r && a[1][v]; a = function () { "number" === typeof z && 20 < Math.abs(J - C) && (l = k || Math.abs(B - z) / Math.abs(J - C)); K = (y - B) / l + J; n = d["plot" + (b ? "Width" : "Height")] / l }; a(); f = K; if (f < x.min) { f = x.min; var A = !0 } else f + n > x.max && (f = x.max - n, A = !0); A ? (B -= .8 * (B - m[h][0]), "number" === typeof z && (z -= .8 * (z - m[h][1])), a()) : m[h] = [B, z]; t || (e[h] = K - y, e[q] = n); e = t ? 1 / l : l; g[q] = n; g[h] = f; c[t ? b ? "scaleY" : "scaleX" :
                        "scale" + p] = l; c["translate" + p] = e * y + (B - e * J)
            }; e.prototype.reset = function (b, f) {
                var a = this.chart, c = a.hoverSeries, d = a.hoverPoint, g = a.hoverPoints, h = a.tooltip, e = h && h.shared ? g : d; b && e && m(e).forEach(function (a) { a.series.isCartesian && "undefined" === typeof a.plotX && (b = !1) }); if (b) h && e && m(e).length && (h.refresh(e), h.shared && g ? g.forEach(function (a) {
                    a.setState(a.state, !0); a.series.isCartesian && (a.series.xAxis.crosshair && a.series.xAxis.drawCrosshair(null, a), a.series.yAxis.crosshair && a.series.yAxis.drawCrosshair(null,
                        a))
                }) : d && (d.setState(d.state, !0), a.axes.forEach(function (a) { a.crosshair && d.series[a.coll] === a && a.drawCrosshair(null, d) }))); else { if (d) d.onMouseOut(); g && g.forEach(function (a) { a.setState() }); if (c) c.onMouseOut(); h && h.hide(f); this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove()); a.axes.forEach(function (a) { a.hideCrosshair() }); this.hoverX = a.hoverPoints = a.hoverPoint = null }
            }; e.prototype.runPointActions = function (d, f) {
                var a = this.chart, c = a.tooltip && a.tooltip.options.enabled ? a.tooltip : void 0, g = c ? c.shared :
                    !1, h = f || a.hoverPoint, e = h && h.series || a.hoverSeries; e = this.getHoverData(h, e, a.series, (!d || "touchmove" !== d.type) && (!!f || e && e.directTouch && this.isDirectTouch), g, d); h = e.hoverPoint; var m = e.hoverPoints; f = (e = e.hoverSeries) && e.tooltipOptions.followPointer; g = g && e && !e.noSharedTooltip; if (h && (h !== a.hoverPoint || c && c.isHidden)) {
                        (a.hoverPoints || []).forEach(function (a) { -1 === m.indexOf(a) && a.setState() }); if (a.hoverSeries !== e) e.onMouseOver(); this.applyInactiveState(m); (m || []).forEach(function (a) { a.setState("hover") });
                        a.hoverPoint && a.hoverPoint.firePointEvent("mouseOut"); if (!h.series) return; a.hoverPoints = m; a.hoverPoint = h; h.firePointEvent("mouseOver"); c && c.refresh(g ? m : h, d)
                    } else f && c && !c.isHidden && (h = c.getAnchor([{}], d), c.updatePosition({ plotX: h[0], plotY: h[1] })); this.unDocMouseMove || (this.unDocMouseMove = r(a.container.ownerDocument, "mousemove", function (a) { var c = E[b.hoverChartIndex]; if (c) c.pointer.onDocumentMouseMove(a) })); a.axes.forEach(function (c) {
                        var b = z((c.crosshair || {}).snap, !0), f; b && ((f = a.hoverPoint) && f.series[c.coll] ===
                            c || (f = q(m, function (a) { return a.series[c.coll] === c }))); f || !b ? c.drawCrosshair(d, f) : c.hideCrosshair()
                    })
            }; e.prototype.scaleGroups = function (b, f) { var a = this.chart, c; a.series.forEach(function (d) { c = b || d.getPlotBox(); d.xAxis && d.xAxis.zoomEnabled && d.group && (d.group.attr(c), d.markerGroup && (d.markerGroup.attr(c), d.markerGroup.clip(f ? a.clipRect : null)), d.dataLabelsGroup && d.dataLabelsGroup.attr(c)) }); a.clipRect.attr(f || a.clipBox) }; e.prototype.setDOMEvents = function () {
                var d = this, f = this.chart.container, a = f.ownerDocument;
                f.onmousedown = this.onContainerMouseDown.bind(this); f.onmousemove = this.onContainerMouseMove.bind(this); f.onclick = this.onContainerClick.bind(this); this.unbindContainerMouseEnter = r(f, "mouseenter", this.onContainerMouseEnter.bind(this)); this.unbindContainerMouseLeave = r(f, "mouseleave", this.onContainerMouseLeave.bind(this)); b.unbindDocumentMouseUp || (b.unbindDocumentMouseUp = r(a, "mouseup", this.onDocumentMouseUp.bind(this))); for (var c = this.chart.renderTo.parentElement; c && "BODY" !== c.tagName;)r(c, "scroll", function () { delete d.chartPosition }),
                    c = c.parentElement; b.hasTouch && (r(f, "touchstart", this.onContainerTouchStart.bind(this), { passive: !1 }), r(f, "touchmove", this.onContainerTouchMove.bind(this), { passive: !1 }), b.unbindDocumentTouchEnd || (b.unbindDocumentTouchEnd = r(a, "touchend", this.onDocumentTouchEnd.bind(this), { passive: !1 })))
            }; e.prototype.setHoverChartIndex = function () { var d = this.chart, f = b.charts[z(b.hoverChartIndex, -1)]; if (f && f !== d) f.pointer.onContainerMouseLeave({ relatedTarget: !0 }); f && f.mouseIsDown || (b.hoverChartIndex = d.index) }; e.prototype.touch =
                function (b, f) { var a = this.chart, c; this.setHoverChartIndex(); if (1 === b.touches.length) if (b = this.normalize(b), (c = a.isInsidePlot(b.chartX - a.plotLeft, b.chartY - a.plotTop)) && !a.openMenu) { f && this.runPointActions(b); if ("touchmove" === b.type) { f = this.pinchDown; var d = f[0] ? 4 <= Math.sqrt(Math.pow(f[0].chartX - b.chartX, 2) + Math.pow(f[0].chartY - b.chartY, 2)) : !1 } z(d, !0) && this.pinch(b) } else f && this.reset(); else 2 === b.touches.length && this.pinch(b) }; e.prototype.touchSelect = function (b) {
                    return !(!this.chart.options.chart.zoomBySingleTouch ||
                        !b.touches || 1 !== b.touches.length)
                }; e.prototype.zoomOption = function (b) { var d = this.chart, a = d.options.chart, c = a.zoomType || ""; d = d.inverted; /touch/.test(b.type) && (c = z(a.pinchType, c)); this.zoomX = b = /x/.test(c); this.zoomY = c = /y/.test(c); this.zoomHor = b && !d || c && d; this.zoomVert = c && !d || b && d; this.hasZoom = b || c }; return e
        }(); return b.Pointer = e
    }); O(l, "Core/MSPointer.js", [l["Core/Globals.js"], l["Core/Pointer.js"], l["Core/Utilities.js"]], function (e, b, l) {
        function w() {
            var b = []; b.item = function (b) { return this[b] }; C(q, function (f) {
                b.push({
                    pageX: f.pageX,
                    pageY: f.pageY, target: f.target
                })
            }); return b
        } function D(b, f, g, k) { "touch" !== b.pointerType && b.pointerType !== b.MSPOINTER_TYPE_TOUCH || !E[e.hoverChartIndex] || (k(b), k = E[e.hoverChartIndex].pointer, k[f]({ type: g, target: b.currentTarget, preventDefault: r, touches: w() })) } var F = this && this.__extends || function () {
            var b = function (f, g) { b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, f) { b.__proto__ = f } || function (b, f) { for (var g in f) f.hasOwnProperty(g) && (b[g] = f[g]) }; return b(f, g) }; return function (f, g) {
                function e() {
                this.constructor =
                    f
                } b(f, g); f.prototype = null === g ? Object.create(g) : (e.prototype = g.prototype, new e)
            }
        }(), E = e.charts, H = e.doc, r = e.noop, A = l.addEvent, k = l.css, C = l.objectEach, g = l.removeEvent, q = {}, f = !!e.win.PointerEvent; return function (b) {
            function e() { return null !== b && b.apply(this, arguments) || this } F(e, b); e.prototype.batchMSEvents = function (b) {
                b(this.chart.container, f ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown); b(this.chart.container, f ? "pointermove" : "MSPointerMove", this.onContainerPointerMove); b(H, f ? "pointerup" :
                    "MSPointerUp", this.onDocumentPointerUp)
            }; e.prototype.destroy = function () { this.batchMSEvents(g); b.prototype.destroy.call(this) }; e.prototype.init = function (f, g) { b.prototype.init.call(this, f, g); this.hasZoom && k(f.container, { "-ms-touch-action": "none", "touch-action": "none" }) }; e.prototype.onContainerPointerDown = function (b) { D(b, "onContainerTouchStart", "touchstart", function (b) { q[b.pointerId] = { pageX: b.pageX, pageY: b.pageY, target: b.currentTarget } }) }; e.prototype.onContainerPointerMove = function (b) {
                D(b, "onContainerTouchMove",
                    "touchmove", function (b) { q[b.pointerId] = { pageX: b.pageX, pageY: b.pageY }; q[b.pointerId].target || (q[b.pointerId].target = b.currentTarget) })
            }; e.prototype.onDocumentPointerUp = function (b) { D(b, "onDocumentTouchEnd", "touchend", function (b) { delete q[b.pointerId] }) }; e.prototype.setDOMEvents = function () { b.prototype.setDOMEvents.call(this); (this.hasZoom || this.followTouchMove) && this.batchMSEvents(A) }; return e
        }(b)
    }); O(l, "Core/Series/Point.js", [l["Core/Renderer/HTML/AST.js"], l["Core/Animation/AnimationUtilities.js"],
    l["Core/Globals.js"], l["Core/Options.js"], l["Core/Utilities.js"]], function (e, b, l, w, D) {
        var F = b.animObject, E = w.defaultOptions, H = D.addEvent, r = D.defined, A = D.erase, k = D.extend, C = D.fireEvent, g = D.format, q = D.getNestedProperty, f = D.isArray, p = D.isFunction, B = D.isNumber, I = D.isObject, Q = D.merge, z = D.objectEach, m = D.pick, t = D.syncTimeout, d = D.removeEvent, h = D.uniqueKey; ""; b = function () {
            function a() {
            this.colorIndex = this.category = void 0; this.formatPrefix = "point"; this.id = void 0; this.isNull = !1; this.percentage = this.options =
                this.name = void 0; this.selected = !1; this.total = this.series = void 0; this.visible = !0; this.x = void 0
            } a.prototype.animateBeforeDestroy = function () { var a = this, b = { x: a.startXPos, opacity: 0 }, d, f = a.getGraphicalProps(); f.singular.forEach(function (c) { d = "dataLabel" === c; a[c] = a[c].animate(d ? { x: a[c].startXPos, y: a[c].startYPos, opacity: 0 } : b) }); f.plural.forEach(function (c) { a[c].forEach(function (c) { c.element && c.animate(k({ x: a.startXPos }, c.startYPos ? { x: c.startXPos, y: c.startYPos } : {})) }) }) }; a.prototype.applyOptions = function (c,
                b) {
                    var d = this.series, f = d.options.pointValKey || d.pointValKey; c = a.prototype.optionsToObject.call(this, c); k(this, c); this.options = this.options ? k(this.options, c) : c; c.group && delete this.group; c.dataLabels && delete this.dataLabels; f && (this.y = a.prototype.getNestedProperty.call(this, f)); this.formatPrefix = (this.isNull = m(this.isValid && !this.isValid(), null === this.x || !B(this.y))) ? "null" : "point"; this.selected && (this.state = "select"); "name" in this && "undefined" === typeof b && d.xAxis && d.xAxis.hasNames && (this.x = d.xAxis.nameToX(this));
                "undefined" === typeof this.x && d && (this.x = "undefined" === typeof b ? d.autoIncrement(this) : b); return this
            }; a.prototype.destroy = function () {
                function a() { if (b.graphic || b.dataLabel || b.dataLabels) d(b), b.destroyElements(); for (m in b) b[m] = null } var b = this, f = b.series, g = f.chart; f = f.options.dataSorting; var h = g.hoverPoints, e = F(b.series.chart.renderer.globalAnimation), m; b.legendItem && g.legend.destroyItem(b); h && (b.setState(), A(h, b), h.length || (g.hoverPoints = null)); if (b === g.hoverPoint) b.onMouseOut(); f && f.enabled ? (this.animateBeforeDestroy(),
                    t(a, e.duration)) : a(); g.pointCount--
            }; a.prototype.destroyElements = function (a) { var c = this; a = c.getGraphicalProps(a); a.singular.forEach(function (a) { c[a] = c[a].destroy() }); a.plural.forEach(function (a) { c[a].forEach(function (a) { a.element && a.destroy() }); delete c[a] }) }; a.prototype.firePointEvent = function (a, b, d) {
                var c = this, f = this.series.options; (f.point.events[a] || c.options && c.options.events && c.options.events[a]) && c.importEvents(); "click" === a && f.allowPointSelect && (d = function (a) {
                c.select && c.select(null, a.ctrlKey ||
                    a.metaKey || a.shiftKey)
                }); C(c, a, b, d)
            }; a.prototype.getClassName = function () { return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + ("undefined" !== typeof this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "") }; a.prototype.getGraphicalProps = function (a) {
                var c =
                    this, b = [], d, f = { singular: [], plural: [] }; a = a || { graphic: 1, dataLabel: 1 }; a.graphic && b.push("graphic", "upperGraphic", "shadowGroup"); a.dataLabel && b.push("dataLabel", "dataLabelUpper", "connector"); for (d = b.length; d--;) { var g = b[d]; c[g] && f.singular.push(g) } ["dataLabel", "connector"].forEach(function (b) { var d = b + "s"; a[b] && c[d] && f.plural.push(d) }); return f
            }; a.prototype.getLabelConfig = function () {
                return {
                    x: this.category, y: this.y, color: this.color, colorIndex: this.colorIndex, key: this.name || this.category, series: this.series,
                    point: this, percentage: this.percentage, total: this.total || this.stackTotal
                }
            }; a.prototype.getNestedProperty = function (a) { if (a) return 0 === a.indexOf("custom.") ? q(a, this.options) : this[a] }; a.prototype.getZone = function () { var a = this.series, b = a.zones; a = a.zoneAxis || "y"; var d = 0, f; for (f = b[d]; this[a] >= f.value;)f = b[++d]; this.nonZonedColor || (this.nonZonedColor = this.color); this.color = f && f.color && !this.options.color ? f.color : this.nonZonedColor; return f }; a.prototype.hasNewShapeType = function () {
                return (this.graphic && (this.graphic.symbolName ||
                    this.graphic.element.nodeName)) !== this.shapeType
            }; a.prototype.init = function (a, b, d) { this.series = a; this.applyOptions(b, d); this.id = r(this.id) ? this.id : h(); this.resolveColor(); a.chart.pointCount++; C(this, "afterInit"); return this }; a.prototype.optionsToObject = function (c) {
                var b = {}, d = this.series, g = d.options.keys, h = g || d.pointArrayMap || ["y"], e = h.length, m = 0, k = 0; if (B(c) || null === c) b[h[0]] = c; else if (f(c)) for (!g && c.length > e && (d = typeof c[0], "string" === d ? b.name = c[0] : "number" === d && (b.x = c[0]), m++); k < e;)g && "undefined" ===
                    typeof c[m] || (0 < h[k].indexOf(".") ? a.prototype.setNestedProperty(b, c[m], h[k]) : b[h[k]] = c[m]), m++ , k++; else "object" === typeof c && (b = c, c.dataLabels && (d._hasPointLabels = !0), c.marker && (d._hasPointMarkers = !0)); return b
            }; a.prototype.resolveColor = function () {
                var a = this.series; var b = a.chart.options.chart.colorCount; var d = a.chart.styledMode; delete this.nonZonedColor; d || this.options.color || (this.color = a.color); a.options.colorByPoint ? (d || (b = a.options.colors || a.chart.options.colors, this.color = this.color || b[a.colorCounter],
                    b = b.length), d = a.colorCounter, a.colorCounter++ , a.colorCounter === b && (a.colorCounter = 0)) : d = a.colorIndex; this.colorIndex = m(this.options.colorIndex, d)
            }; a.prototype.setNestedProperty = function (a, b, d) { d.split(".").reduce(function (a, c, d, f) { a[c] = f.length - 1 === d ? b : I(a[c], !0) ? a[c] : {}; return a[c] }, a); return a }; a.prototype.tooltipFormatter = function (a) {
                var c = this.series, b = c.tooltipOptions, d = m(b.valueDecimals, ""), f = b.valuePrefix || "", h = b.valueSuffix || ""; c.chart.styledMode && (a = c.chart.tooltip.styledModeFormat(a)); (c.pointArrayMap ||
                    ["y"]).forEach(function (c) { c = "{point." + c; if (f || h) a = a.replace(RegExp(c + "}", "g"), f + c + "}" + h); a = a.replace(RegExp(c + "}", "g"), c + ":,." + d + "f}") }); return g(a, { point: this, series: this.series }, c.chart)
            }; a.prototype.update = function (a, b, d, f) {
                function c() {
                    g.applyOptions(a); var c = e && g.hasDummyGraphic; c = null === g.y ? !c : c; e && c && (g.graphic = e.destroy(), delete g.hasDummyGraphic); I(a, !0) && (e && e.element && a && a.marker && "undefined" !== typeof a.marker.symbol && (g.graphic = e.destroy()), a && a.dataLabels && g.dataLabel && (g.dataLabel =
                        g.dataLabel.destroy()), g.connector && (g.connector = g.connector.destroy())); k = g.index; h.updateParallelArrays(g, k); q.data[k] = I(q.data[k], !0) || I(a, !0) ? g.options : m(a, q.data[k]); h.isDirty = h.isDirtyData = !0; !h.fixedBox && h.hasCartesianSeries && (p.isDirtyBox = !0); "point" === q.legendType && (p.isDirtyLegend = !0); b && p.redraw(d)
                } var g = this, h = g.series, e = g.graphic, k, p = h.chart, q = h.options; b = m(b, !0); !1 === f ? c() : g.firePointEvent("update", { options: a }, c)
            }; a.prototype.remove = function (a, b) {
                this.series.removePoint(this.series.data.indexOf(this),
                    a, b)
            }; a.prototype.select = function (a, b) {
                var c = this, d = c.series, f = d.chart; this.selectedStaging = a = m(a, !c.selected); c.firePointEvent(a ? "select" : "unselect", { accumulate: b }, function () {
                c.selected = c.options.selected = a; d.options.data[d.data.indexOf(c)] = c.options; c.setState(a && "select"); b || f.getSelectedPoints().forEach(function (a) {
                    var b = a.series; a.selected && a !== c && (a.selected = a.options.selected = !1, b.options.data[b.data.indexOf(a)] = a.options, a.setState(f.hoverPoints && b.options.inactiveOtherPoints ? "inactive" : ""),
                        a.firePointEvent("unselect"))
                })
                }); delete this.selectedStaging
            }; a.prototype.onMouseOver = function (a) { var c = this.series.chart, b = c.pointer; a = a ? b.normalize(a) : b.getChartCoordinatesFromPoint(this, c.inverted); b.runPointActions(a, this) }; a.prototype.onMouseOut = function () { var a = this.series.chart; this.firePointEvent("mouseOut"); this.series.options.inactiveOtherPoints || (a.hoverPoints || []).forEach(function (a) { a.setState() }); a.hoverPoints = a.hoverPoint = null }; a.prototype.importEvents = function () {
                if (!this.hasImportedEvents) {
                    var a =
                        this, b = Q(a.series.options.point, a.options).events; a.events = b; z(b, function (c, b) { p(c) && H(a, b, c) }); this.hasImportedEvents = !0
                }
            }; a.prototype.setState = function (a, b) {
                var c = this.series, d = this.state, f = c.options.states[a || "normal"] || {}, g = E.plotOptions[c.type].marker && c.options.marker, h = g && !1 === g.enabled, p = g && g.states && g.states[a || "normal"] || {}, q = !1 === p.enabled, v = c.stateMarkerGraphic, l = this.marker || {}, n = c.chart, t = c.halo, r, z = g && c.markerAttribs; a = a || ""; if (!(a === this.state && !b || this.selected && "select" !== a || !1 ===
                    f.enabled || a && (q || h && !1 === p.enabled) || a && l.states && l.states[a] && !1 === l.states[a].enabled)) {
                    this.state = a; z && (r = c.markerAttribs(this, a)); if (this.graphic) {
                        d && this.graphic.removeClass("highcharts-point-" + d); a && this.graphic.addClass("highcharts-point-" + a); if (!n.styledMode) {
                            var x = c.pointAttribs(this, a); var B = m(n.options.chart.animation, f.animation); c.options.inactiveOtherPoints && x.opacity && ((this.dataLabels || []).forEach(function (a) { a && a.animate({ opacity: x.opacity }, B) }), this.connector && this.connector.animate({ opacity: x.opacity },
                                B)); this.graphic.animate(x, B)
                        } r && this.graphic.animate(r, m(n.options.chart.animation, p.animation, g.animation)); v && v.hide()
                    } else { if (a && p) { d = l.symbol || c.symbol; v && v.currentSymbol !== d && (v = v.destroy()); if (r) if (v) v[b ? "animate" : "attr"]({ x: r.x, y: r.y }); else d && (c.stateMarkerGraphic = v = n.renderer.symbol(d, r.x, r.y, r.width, r.height).add(c.markerGroup), v.currentSymbol = d); !n.styledMode && v && v.attr(c.pointAttribs(this, a)) } v && (v[a && this.isInside ? "show" : "hide"](), v.element.point = this) } a = f.halo; f = (v = this.graphic || v) &&
                        v.visibility || "inherit"; a && a.size && v && "hidden" !== f && !this.isCluster ? (t || (c.halo = t = n.renderer.path().add(v.parentGroup)), t.show()[b ? "animate" : "attr"]({ d: this.haloPath(a.size) }), t.attr({ "class": "highcharts-halo highcharts-color-" + m(this.colorIndex, c.colorIndex) + (this.className ? " " + this.className : ""), visibility: f, zIndex: -1 }), t.point = this, n.styledMode || t.attr(k({ fill: this.color || c.color, "fill-opacity": a.opacity }, e.filterUserAttributes(a.attributes || {})))) : t && t.point && t.point.haloPath && t.animate({ d: t.point.haloPath(0) },
                            null, t.hide); C(this, "afterSetState")
                }
            }; a.prototype.haloPath = function (a) { return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX) - a, this.plotY - a, 2 * a, 2 * a) }; return a
        }(); return l.Point = b
    }); O(l, "Core/Legend.js", [l["Core/Animation/AnimationUtilities.js"], l["Core/Globals.js"], l["Core/Series/Point.js"], l["Core/Utilities.js"]], function (e, b, l, w) {
        var D = e.animObject, F = e.setAnimation; e = b.isFirefox; var E = b.marginNames, H = b.win, r = w.addEvent, A = w.createElement, k = w.css, C = w.defined, g = w.discardElement,
            q = w.find, f = w.fireEvent, p = w.format, B = w.isNumber, I = w.merge, Q = w.pick, z = w.relativeLength, m = w.stableSort, t = w.syncTimeout; w = w.wrap; var d = function () {
                function d(a, c) {
                this.allItems = []; this.contentGroup = this.box = void 0; this.display = !1; this.group = void 0; this.offsetWidth = this.maxLegendWidth = this.maxItemWidth = this.legendWidth = this.legendHeight = this.lastLineHeight = this.lastItemY = this.itemY = this.itemX = this.itemMarginTop = this.itemMarginBottom = this.itemHeight = this.initialItemY = 0; this.options = {}; this.padding = 0; this.pages =
                    []; this.proximate = !1; this.scrollGroup = void 0; this.widthOption = this.totalItemWidth = this.titleHeight = this.symbolWidth = this.symbolHeight = 0; this.chart = a; this.init(a, c)
                } d.prototype.init = function (a, c) { this.chart = a; this.setOptions(c); c.enabled && (this.render(), r(this.chart, "endResize", function () { this.legend.positionCheckboxes() }), this.proximate ? this.unchartrender = r(this.chart, "render", function () { this.legend.proximatePositions(); this.legend.positionItems() }) : this.unchartrender && this.unchartrender()) }; d.prototype.setOptions =
                    function (a) { var c = Q(a.padding, 8); this.options = a; this.chart.styledMode || (this.itemStyle = a.itemStyle, this.itemHiddenStyle = I(this.itemStyle, a.itemHiddenStyle)); this.itemMarginTop = a.itemMarginTop || 0; this.itemMarginBottom = a.itemMarginBottom || 0; this.padding = c; this.initialItemY = c - 5; this.symbolWidth = Q(a.symbolWidth, 16); this.pages = []; this.proximate = "proximate" === a.layout && !this.chart.inverted; this.baseline = void 0 }; d.prototype.update = function (a, c) {
                        var b = this.chart; this.setOptions(I(!0, this.options, a)); this.destroy();
                        b.isDirtyLegend = b.isDirtyBox = !0; Q(c, !0) && b.redraw(); f(this, "afterUpdate")
                    }; d.prototype.colorizeItem = function (a, c) {
                    a.legendGroup[c ? "removeClass" : "addClass"]("highcharts-legend-item-hidden"); if (!this.chart.styledMode) {
                        var b = this.options, d = a.legendItem, g = a.legendLine, h = a.legendSymbol, e = this.itemHiddenStyle.color; b = c ? b.itemStyle.color : e; var m = c ? a.color || e : e, k = a.options && a.options.marker, p = { fill: m }; d && d.css({ fill: b, color: b }); g && g.attr({ stroke: m }); h && (k && h.isMarker && (p = a.pointAttribs(), c || (p.stroke = p.fill =
                            e)), h.attr(p))
                    } f(this, "afterColorizeItem", { item: a, visible: c })
                    }; d.prototype.positionItems = function () { this.allItems.forEach(this.positionItem, this); this.chart.isResizing || this.positionCheckboxes() }; d.prototype.positionItem = function (a) {
                        var c = this, b = this.options, d = b.symbolPadding, g = !b.rtl, h = a._legendItemPos; b = h[0]; h = h[1]; var e = a.checkbox, m = a.legendGroup; m && m.element && (d = { translateX: g ? b : this.legendWidth - b - 2 * d - 4, translateY: h }, g = function () { f(c, "afterPositionItem", { item: a }) }, C(m.translateY) ? m.animate(d, void 0,
                            g) : (m.attr(d), g())); e && (e.x = b, e.y = h)
                    }; d.prototype.destroyItem = function (a) { var c = a.checkbox;["legendItem", "legendLine", "legendSymbol", "legendGroup"].forEach(function (c) { a[c] && (a[c] = a[c].destroy()) }); c && g(a.checkbox) }; d.prototype.destroy = function () { function a(a) { this[a] && (this[a] = this[a].destroy()) } this.getAllItems().forEach(function (c) { ["legendItem", "legendGroup"].forEach(a, c) }); "clipRect up down pager nav box title group".split(" ").forEach(a, this); this.display = null }; d.prototype.positionCheckboxes =
                        function () { var a = this.group && this.group.alignAttr, c = this.clipHeight || this.legendHeight, b = this.titleHeight; if (a) { var d = a.translateY; this.allItems.forEach(function (f) { var g = f.checkbox; if (g) { var h = d + b + g.y + (this.scrollOffset || 0) + 3; k(g, { left: a.translateX + f.checkboxOffset + g.x - 20 + "px", top: h + "px", display: this.proximate || h > d - 6 && h < d + c - 6 ? "" : "none" }) } }, this) } }; d.prototype.renderTitle = function () {
                            var a = this.options, c = this.padding, b = a.title, d = 0; b.text && (this.title || (this.title = this.chart.renderer.label(b.text, c -
                                3, c - 4, null, null, null, a.useHTML, null, "legend-title").attr({ zIndex: 1 }), this.chart.styledMode || this.title.css(b.style), this.title.add(this.group)), b.width || this.title.css({ width: this.maxLegendWidth + "px" }), a = this.title.getBBox(), d = a.height, this.offsetWidth = a.width, this.contentGroup.attr({ translateY: d })); this.titleHeight = d
                        }; d.prototype.setText = function (a) { var c = this.options; a.legendItem.attr({ text: c.labelFormat ? p(c.labelFormat, a, this.chart) : c.labelFormatter.call(a) }) }; d.prototype.renderItem = function (a) {
                            var c =
                                this.chart, b = c.renderer, d = this.options, f = this.symbolWidth, g = d.symbolPadding, h = this.itemStyle, e = this.itemHiddenStyle, m = "horizontal" === d.layout ? Q(d.itemDistance, 20) : 0, k = !d.rtl, p = a.legendItem, q = !a.series, n = !q && a.series.drawLegendSymbol ? a.series : a, l = n.options; l = this.createCheckboxForItem && l && l.showCheckbox; m = f + g + m + (l ? 20 : 0); var t = d.useHTML, r = a.options.className; p || (a.legendGroup = b.g("legend-item").addClass("highcharts-" + n.type + "-series highcharts-color-" + a.colorIndex + (r ? " " + r : "") + (q ? " highcharts-series-" +
                                    a.index : "")).attr({ zIndex: 1 }).add(this.scrollGroup), a.legendItem = p = b.text("", k ? f + g : -g, this.baseline || 0, t), c.styledMode || p.css(I(a.visible ? h : e)), p.attr({ align: k ? "left" : "right", zIndex: 2 }).add(a.legendGroup), this.baseline || (this.fontMetrics = b.fontMetrics(c.styledMode ? 12 : h.fontSize, p), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, p.attr("y", this.baseline)), this.symbolHeight = d.symbolHeight || this.fontMetrics.f, n.drawLegendSymbol(this, a), this.setItemEvents && this.setItemEvents(a, p, t)); l && !a.checkbox &&
                                        this.createCheckboxForItem && this.createCheckboxForItem(a); this.colorizeItem(a, a.visible); !c.styledMode && h.width || p.css({ width: (d.itemWidth || this.widthOption || c.spacingBox.width) - m + "px" }); this.setText(a); c = p.getBBox(); a.itemWidth = a.checkboxOffset = d.itemWidth || a.legendItemWidth || c.width + m; this.maxItemWidth = Math.max(this.maxItemWidth, a.itemWidth); this.totalItemWidth += a.itemWidth; this.itemHeight = a.itemHeight = Math.round(a.legendItemHeight || c.height || this.symbolHeight)
                        }; d.prototype.layoutItem = function (a) {
                            var c =
                                this.options, b = this.padding, d = "horizontal" === c.layout, f = a.itemHeight, g = this.itemMarginBottom, h = this.itemMarginTop, e = d ? Q(c.itemDistance, 20) : 0, m = this.maxLegendWidth; c = c.alignColumns && this.totalItemWidth > m ? this.maxItemWidth : a.itemWidth; d && this.itemX - b + c > m && (this.itemX = b, this.lastLineHeight && (this.itemY += h + this.lastLineHeight + g), this.lastLineHeight = 0); this.lastItemY = h + this.itemY + g; this.lastLineHeight = Math.max(f, this.lastLineHeight); a._legendItemPos = [this.itemX, this.itemY]; d ? this.itemX += c : (this.itemY +=
                                    h + f + g, this.lastLineHeight = f); this.offsetWidth = this.widthOption || Math.max((d ? this.itemX - b - (a.checkbox ? 0 : e) : c) + b, this.offsetWidth)
                        }; d.prototype.getAllItems = function () { var a = []; this.chart.series.forEach(function (c) { var b = c && c.options; c && Q(b.showInLegend, C(b.linkedTo) ? !1 : void 0, !0) && (a = a.concat(c.legendItems || ("point" === b.legendType ? c.data : c))) }); f(this, "afterGetAllItems", { allItems: a }); return a }; d.prototype.getAlignment = function () {
                            var a = this.options; return this.proximate ? a.align.charAt(0) + "tv" : a.floating ?
                                "" : a.align.charAt(0) + a.verticalAlign.charAt(0) + a.layout.charAt(0)
                        }; d.prototype.adjustMargins = function (a, c) { var b = this.chart, d = this.options, f = this.getAlignment(); f && [/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/].forEach(function (g, h) { g.test(f) && !C(a[h]) && (b[E[h]] = Math.max(b[E[h]], b.legend[(h + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][h] * d[h % 2 ? "x" : "y"] + Q(d.margin, 12) + c[h] + (b.titleOffset[h] || 0))) }) }; d.prototype.proximatePositions = function () {
                            var a = this.chart, c = [], d = "left" === this.options.align;
                            this.allItems.forEach(function (b) { var f; var g = d; if (b.yAxis) { b.xAxis.options.reversed && (g = !g); b.points && (f = q(g ? b.points : b.points.slice(0).reverse(), function (a) { return B(a.plotY) })); g = this.itemMarginTop + b.legendItem.getBBox().height + this.itemMarginBottom; var h = b.yAxis.top - a.plotTop; b.visible ? (f = f ? f.plotY : b.yAxis.height, f += h - .3 * g) : f = h + b.yAxis.height; c.push({ target: f, size: g, item: b }) } }, this); b.distribute(c, a.plotHeight); c.forEach(function (c) { c.item._legendItemPos[1] = a.plotTop - a.spacing[0] + c.pos })
                        }; d.prototype.render =
                            function () {
                                var a = this.chart, c = a.renderer, b = this.group, d = this.box, g = this.options, h = this.padding; this.itemX = h; this.itemY = this.initialItemY; this.lastItemY = this.offsetWidth = 0; this.widthOption = z(g.width, a.spacingBox.width - h); var e = a.spacingBox.width - 2 * h - g.x; -1 < ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) && (e /= 2); this.maxLegendWidth = this.widthOption || e; b || (this.group = b = c.g("legend").attr({ zIndex: 7 }).add(), this.contentGroup = c.g().attr({ zIndex: 1 }).add(b), this.scrollGroup = c.g().add(this.contentGroup));
                                this.renderTitle(); var k = this.getAllItems(); m(k, function (a, c) { return (a.options && a.options.legendIndex || 0) - (c.options && c.options.legendIndex || 0) }); g.reversed && k.reverse(); this.allItems = k; this.display = e = !!k.length; this.itemHeight = this.totalItemWidth = this.maxItemWidth = this.lastLineHeight = 0; k.forEach(this.renderItem, this); k.forEach(this.layoutItem, this); k = (this.widthOption || this.offsetWidth) + h; var p = this.lastItemY + this.lastLineHeight + this.titleHeight; p = this.handleOverflow(p); p += h; d || (this.box = d = c.rect().addClass("highcharts-legend-box").attr({ r: g.borderRadius }).add(b),
                                    d.isNew = !0); a.styledMode || d.attr({ stroke: g.borderColor, "stroke-width": g.borderWidth || 0, fill: g.backgroundColor || "none" }).shadow(g.shadow); 0 < k && 0 < p && (d[d.isNew ? "attr" : "animate"](d.crisp.call({}, { x: 0, y: 0, width: k, height: p }, d.strokeWidth())), d.isNew = !1); d[e ? "show" : "hide"](); a.styledMode && "none" === b.getStyle("display") && (k = p = 0); this.legendWidth = k; this.legendHeight = p; e && this.align(); this.proximate || this.positionItems(); f(this, "afterRender")
                            }; d.prototype.align = function (a) {
                            void 0 === a && (a = this.chart.spacingBox);
                                var c = this.chart, b = this.options, d = a.y; /(lth|ct|rth)/.test(this.getAlignment()) && 0 < c.titleOffset[0] ? d += c.titleOffset[0] : /(lbh|cb|rbh)/.test(this.getAlignment()) && 0 < c.titleOffset[2] && (d -= c.titleOffset[2]); d !== a.y && (a = I(a, { y: d })); this.group.align(I(b, { width: this.legendWidth, height: this.legendHeight, verticalAlign: this.proximate ? "top" : b.verticalAlign }), !0, a)
                            }; d.prototype.handleOverflow = function (a) {
                                var c = this, b = this.chart, d = b.renderer, f = this.options, g = f.y, h = this.padding; g = b.spacingBox.height + ("top" === f.verticalAlign ?
                                    -g : g) - h; var e = f.maxHeight, m, k = this.clipRect, p = f.navigation, q = Q(p.animation, !0), n = p.arrowSize || 12, l = this.nav, t = this.pages, r, x = this.allItems, C = function (a) { "number" === typeof a ? k.attr({ height: a }) : k && (c.clipRect = k.destroy(), c.contentGroup.clip()); c.contentGroup.div && (c.contentGroup.div.style.clip = a ? "rect(" + h + "px,9999px," + (h + a) + "px,0)" : "auto") }, J = function (a) { c[a] = d.circle(0, 0, 1.3 * n).translate(n / 2, n / 2).add(l); b.styledMode || c[a].attr("fill", "rgba(0,0,0,0.0001)"); return c[a] }; "horizontal" !== f.layout || "middle" ===
                                        f.verticalAlign || f.floating || (g /= 2); e && (g = Math.min(g, e)); t.length = 0; a > g && !1 !== p.enabled ? (this.clipHeight = m = Math.max(g - 20 - this.titleHeight - h, 0), this.currentPage = Q(this.currentPage, 1), this.fullHeight = a, x.forEach(function (a, c) { var b = a._legendItemPos[1], d = Math.round(a.legendItem.getBBox().height), f = t.length; if (!f || b - t[f - 1] > m && (r || b) !== t[f - 1]) t.push(r || b), f++; a.pageIx = f - 1; r && (x[c - 1].pageIx = f - 1); c === x.length - 1 && b + d - t[f - 1] > m && b !== r && (t.push(b), a.pageIx = f); b !== r && (r = b) }), k || (k = c.clipRect = d.clipRect(0, h, 9999,
                                            0), c.contentGroup.clip(k)), C(m), l || (this.nav = l = d.g().attr({ zIndex: 1 }).add(this.group), this.up = d.symbol("triangle", 0, 0, n, n).add(l), J("upTracker").on("click", function () { c.scroll(-1, q) }), this.pager = d.text("", 15, 10).addClass("highcharts-legend-navigation"), b.styledMode || this.pager.css(p.style), this.pager.add(l), this.down = d.symbol("triangle-down", 0, 0, n, n).add(l), J("downTracker").on("click", function () { c.scroll(1, q) })), c.scroll(0), a = g) : l && (C(), this.nav = l.destroy(), this.scrollGroup.attr({ translateY: 1 }), this.clipHeight =
                                                0); return a
                            }; d.prototype.scroll = function (a, c) {
                                var b = this, d = this.chart, g = this.pages, h = g.length, e = this.currentPage + a; a = this.clipHeight; var m = this.options.navigation, k = this.pager, p = this.padding; e > h && (e = h); 0 < e && ("undefined" !== typeof c && F(c, d), this.nav.attr({ translateX: p, translateY: a + this.padding + 7 + this.titleHeight, visibility: "visible" }), [this.up, this.upTracker].forEach(function (a) { a.attr({ "class": 1 === e ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" }) }), k.attr({ text: e + "/" + h }), [this.down,
                                this.downTracker].forEach(function (a) { a.attr({ x: 18 + this.pager.getBBox().width, "class": e === h ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" }) }, this), d.styledMode || (this.up.attr({ fill: 1 === e ? m.inactiveColor : m.activeColor }), this.upTracker.css({ cursor: 1 === e ? "default" : "pointer" }), this.down.attr({ fill: e === h ? m.inactiveColor : m.activeColor }), this.downTracker.css({ cursor: e === h ? "default" : "pointer" })), this.scrollOffset = -g[e - 1] + this.initialItemY, this.scrollGroup.animate({ translateY: this.scrollOffset }),
                                    this.currentPage = e, this.positionCheckboxes(), c = D(Q(c, d.renderer.globalAnimation, !0)), t(function () { f(b, "afterScroll", { currentPage: e }) }, c.duration))
                            }; d.prototype.setItemEvents = function (a, c, b) {
                                var d = this, g = d.chart.renderer.boxWrapper, h = a instanceof l, e = "highcharts-legend-" + (h ? "point" : "series") + "-active", m = d.chart.styledMode; (b ? [c, a.legendSymbol] : [a.legendGroup]).forEach(function (b) {
                                    if (b) b.on("mouseover", function () {
                                    a.visible && d.allItems.forEach(function (c) { a !== c && c.setState("inactive", !h) }); a.setState("hover");
                                        a.visible && g.addClass(e); m || c.css(d.options.itemHoverStyle)
                                    }).on("mouseout", function () { d.chart.styledMode || c.css(I(a.visible ? d.itemStyle : d.itemHiddenStyle)); d.allItems.forEach(function (c) { a !== c && c.setState("", !h) }); g.removeClass(e); a.setState() }).on("click", function (c) {
                                        var b = function () { a.setVisible && a.setVisible(); d.allItems.forEach(function (c) { a !== c && c.setState(a.visible ? "inactive" : "", !h) }) }; g.removeClass(e); c = { browserEvent: c }; a.firePointEvent ? a.firePointEvent("legendItemClick", c, b) : f(a, "legendItemClick",
                                            c, b)
                                    })
                                })
                            }; d.prototype.createCheckboxForItem = function (a) { a.checkbox = A("input", { type: "checkbox", className: "highcharts-legend-checkbox", checked: a.selected, defaultChecked: a.selected }, this.options.itemCheckboxStyle, this.chart.container); r(a.checkbox, "click", function (c) { f(a.series || a, "checkboxClick", { checked: c.target.checked, item: a }, function () { a.select() }) }) }; return d
            }(); (/Trident\/7\.0/.test(H.navigator && H.navigator.userAgent) || e) && w(d.prototype, "positionItem", function (b, a) {
                var c = this, d = function () {
                a._legendItemPos &&
                    b.call(c, a)
                }; d(); c.bubbleLegend || setTimeout(d)
            }); b.Legend = d; return b.Legend
    }); O(l, "Core/Series/SeriesRegistry.js", [l["Core/Globals.js"], l["Core/Options.js"], l["Core/Series/Point.js"], l["Core/Utilities.js"]], function (e, b, l, w) {
        var D = b.defaultOptions, F = w.error, E = w.extendClass, H = w.merge, r; (function (b) {
            function e(e, g) { var k = D.plotOptions || {}, f = g.defaultOptions; g.prototype.pointClass || (g.prototype.pointClass = l); g.prototype.type = e; f && (k[e] = f); b.seriesTypes[e] = g } b.seriesTypes = {}; b.getSeries = function (e, g) {
            void 0 ===
                g && (g = {}); var k = e.options.chart; k = g.type || k.type || k.defaultSeriesType || ""; var f = b.seriesTypes[k]; b || F(17, !0, e, { missingModuleFor: k }); k = new f; "function" === typeof k.init && k.init(e, g); return k
            }; b.registerSeriesType = e; b.seriesType = function (k, g, q, f, p) { var r = D.plotOptions || {}; g = g || ""; r[k] = H(r[g], q); e(k, E(b.seriesTypes[g] || function () { }, f)); b.seriesTypes[k].prototype.type = k; p && (b.seriesTypes[k].prototype.pointClass = E(l, p)); return b.seriesTypes[k] }
        })(r || (r = {})); e.seriesType = r.seriesType; e.seriesTypes = r.seriesTypes;
        return r
    }); O(l, "Core/Chart/Chart.js", [l["Core/Animation/AnimationUtilities.js"], l["Core/Axis/Axis.js"], l["Core/Globals.js"], l["Core/Legend.js"], l["Core/MSPointer.js"], l["Core/Options.js"], l["Core/Color/Palette.js"], l["Core/Pointer.js"], l["Core/Series/SeriesRegistry.js"], l["Core/Time.js"], l["Core/Utilities.js"], l["Core/Renderer/HTML/AST.js"]], function (e, b, l, w, D, F, E, H, r, A, k, C) {
        var g = e.animate, q = e.animObject, f = e.setAnimation, p = l.charts, B = l.doc, I = l.win, Q = F.defaultOptions, z = F.time, m = r.seriesTypes, t = k.addEvent,
        d = k.attr, h = k.cleanRecursively, a = k.createElement, c = k.css, v = k.defined, K = k.discardElement, P = k.erase, y = k.error, L = k.extend, S = k.find, N = k.fireEvent, G = k.getStyle, u = k.isArray, R = k.isFunction, n = k.isNumber, M = k.isObject, U = k.isString, Z = k.merge, x = k.numberFormat, T = k.objectEach, J = k.pick, aa = k.pInt, V = k.relativeLength, ea = k.removeEvent, Y = k.splat, da = k.syncTimeout, ha = k.uniqueKey, fa = l.marginNames, ba = function () {
            function e(a, c, b) {
            this.yAxis = this.xAxis = this.userOptions = this.titleOffset = this.time = this.symbolCounter = this.spacingBox =
                this.spacing = this.series = this.renderTo = this.renderer = this.pointer = this.pointCount = this.plotWidth = this.plotTop = this.plotLeft = this.plotHeight = this.plotBox = this.options = this.numberFormatter = this.margin = this.legend = this.labelCollectors = this.isResizing = this.index = this.container = this.colorCounter = this.clipBox = this.chartWidth = this.chartHeight = this.bounds = this.axisOffset = this.axes = void 0; this.getArgs(a, c, b)
            } e.prototype.getArgs = function (a, c, b) {
            U(a) || a.nodeName ? (this.renderTo = a, this.init(c, b)) : this.init(a,
                c)
            }; e.prototype.init = function (a, c) {
                var b, d = a.series, f = a.plotOptions || {}; N(this, "init", { args: arguments }, function () {
                a.series = null; b = Z(Q, a); var g = b.chart || {}; T(b.plotOptions, function (a, c) { M(a) && (a.tooltip = f[c] && Z(f[c].tooltip) || void 0) }); b.tooltip.userOptions = a.chart && a.chart.forExport && a.tooltip.userOptions || a.tooltip; b.series = a.series = d; this.userOptions = a; var e = g.events; this.margin = []; this.spacing = []; this.bounds = { h: {}, v: {} }; this.labelCollectors = []; this.callback = c; this.isResizing = 0; this.options = b; this.axes =
                    []; this.series = []; this.time = a.time && Object.keys(a.time).length ? new A(a.time) : l.time; this.numberFormatter = g.numberFormatter || x; this.styledMode = g.styledMode; this.hasCartesianSeries = g.showAxes; var h = this; h.index = p.length; p.push(h); l.chartCount++; e && T(e, function (a, c) { R(a) && t(h, c, a) }); h.xAxis = []; h.yAxis = []; h.pointCount = h.colorCounter = h.symbolCounter = 0; N(h, "afterInit"); h.firstRender()
                })
            }; e.prototype.initSeries = function (a) {
                var c = this.options.chart; c = a.type || c.type || c.defaultSeriesType; var b = m[c]; b || y(17,
                    !0, this, { missingModuleFor: c }); c = new b; "function" === typeof c.init && c.init(this, a); return c
            }; e.prototype.setSeriesData = function () { this.getSeriesOrderByLinks().forEach(function (a) { a.points || a.data || !a.enabledDataSorting || a.setData(a.options.data, !1) }) }; e.prototype.getSeriesOrderByLinks = function () { return this.series.concat().sort(function (a, c) { return a.linkedSeries.length || c.linkedSeries.length ? c.linkedSeries.length - a.linkedSeries.length : 0 }) }; e.prototype.orderSeries = function (a) {
                var c = this.series; for (a =
                    a || 0; a < c.length; a++)c[a] && (c[a].index = a, c[a].name = c[a].getName())
            }; e.prototype.isInsidePlot = function (a, c, b) { var d = b ? c : a; a = b ? a : c; d = { x: d, y: a, isInsidePlot: 0 <= d && d <= this.plotWidth && 0 <= a && a <= this.plotHeight }; N(this, "afterIsInsidePlot", d); return d.isInsidePlot }; e.prototype.redraw = function (a) {
                N(this, "beforeRedraw"); var c = this.axes, b = this.series, d = this.pointer, g = this.legend, h = this.userOptions.legend, e = this.isDirtyLegend, m = this.hasCartesianSeries, k = this.isDirtyBox, n = this.renderer, p = n.isHidden(), x = []; this.setResponsive &&
                    this.setResponsive(!1); f(this.hasRendered ? a : !1, this); p && this.temporaryDisplay(); this.layOutTitles(); for (a = b.length; a--;) { var q = b[a]; if (q.options.stacking || q.options.centerInCategory) { var l = !0; if (q.isDirty) { var J = !0; break } } } if (J) for (a = b.length; a--;)q = b[a], q.options.stacking && (q.isDirty = !0); b.forEach(function (a) { a.isDirty && ("point" === a.options.legendType ? ("function" === typeof a.updateTotals && a.updateTotals(), e = !0) : h && (h.labelFormatter || h.labelFormat) && (e = !0)); a.isDirtyData && N(a, "updatedData") }); e && g &&
                        g.options.enabled && (g.render(), this.isDirtyLegend = !1); l && this.getStacks(); m && c.forEach(function (a) { a.updateNames(); a.setScale() }); this.getMargins(); m && (c.forEach(function (a) { a.isDirty && (k = !0) }), c.forEach(function (a) { var c = a.min + "," + a.max; a.extKey !== c && (a.extKey = c, x.push(function () { N(a, "afterSetExtremes", L(a.eventArgs, a.getExtremes())); delete a.eventArgs })); (k || l) && a.redraw() })); k && this.drawChartBox(); N(this, "predraw"); b.forEach(function (a) { (k || a.isDirty) && a.visible && a.redraw(); a.isDirtyData = !1 });
                d && d.reset(!0); n.draw(); N(this, "redraw"); N(this, "render"); p && this.temporaryDisplay(!0); x.forEach(function (a) { a.call() })
            }; e.prototype.get = function (a) { function c(c) { return c.id === a || c.options && c.options.id === a } var b = this.series, d; var f = S(this.axes, c) || S(this.series, c); for (d = 0; !f && d < b.length; d++)f = S(b[d].points || [], c); return f }; e.prototype.getAxes = function () {
                var a = this, c = this.options, d = c.xAxis = Y(c.xAxis || {}); c = c.yAxis = Y(c.yAxis || {}); N(this, "getAxes"); d.forEach(function (a, c) { a.index = c; a.isX = !0 }); c.forEach(function (a,
                    c) { a.index = c }); d.concat(c).forEach(function (c) { new b(a, c) }); N(this, "afterGetAxes")
            }; e.prototype.getSelectedPoints = function () { var a = []; this.series.forEach(function (c) { a = a.concat(c.getPointsCollection().filter(function (a) { return J(a.selectedStaging, a.selected) })) }); return a }; e.prototype.getSelectedSeries = function () { return this.series.filter(function (a) { return a.selected }) }; e.prototype.setTitle = function (a, c, b) {
                this.applyDescription("title", a); this.applyDescription("subtitle", c); this.applyDescription("caption",
                    void 0); this.layOutTitles(b)
            }; e.prototype.applyDescription = function (a, c) {
                var b = this, d = "title" === a ? { color: E.neutralColor80, fontSize: this.options.isStock ? "16px" : "18px" } : { color: E.neutralColor60 }; d = this.options[a] = Z(!this.styledMode && { style: d }, this.options[a], c); var f = this[a]; f && c && (this[a] = f = f.destroy()); d && !f && (f = this.renderer.text(d.text, 0, 0, d.useHTML).attr({ align: d.align, "class": "highcharts-" + a, zIndex: d.zIndex || 4 }).add(), f.update = function (c) { b[{ title: "setTitle", subtitle: "setSubtitle", caption: "setCaption" }[a]](c) },
                    this.styledMode || f.css(d.style), this[a] = f)
            }; e.prototype.layOutTitles = function (a) {
                var c = [0, 0, 0], b = this.renderer, d = this.spacingBox;["title", "subtitle", "caption"].forEach(function (a) {
                    var f = this[a], g = this.options[a], h = g.verticalAlign || "top"; a = "title" === a ? -3 : "top" === h ? c[0] + 2 : 0; if (f) {
                        if (!this.styledMode) var e = g.style.fontSize; e = b.fontMetrics(e, f).b; f.css({ width: (g.width || d.width + (g.widthAdjust || 0)) + "px" }); var m = Math.round(f.getBBox(g.useHTML).height); f.align(L({ y: "bottom" === h ? e : a + e, height: m }, g), !1, "spacingBox");
                        g.floating || ("top" === h ? c[0] = Math.ceil(c[0] + m) : "bottom" === h && (c[2] = Math.ceil(c[2] + m)))
                    }
                }, this); c[0] && "top" === (this.options.title.verticalAlign || "top") && (c[0] += this.options.title.margin); c[2] && "bottom" === this.options.caption.verticalAlign && (c[2] += this.options.caption.margin); var f = !this.titleOffset || this.titleOffset.join(",") !== c.join(","); this.titleOffset = c; N(this, "afterLayOutTitles"); !this.isDirtyBox && f && (this.isDirtyBox = this.isDirtyLegend = f, this.hasRendered && J(a, !0) && this.isDirtyBox && this.redraw())
            };
            e.prototype.getChartSize = function () { var a = this.options.chart, c = a.width; a = a.height; var b = this.renderTo; v(c) || (this.containerWidth = G(b, "width")); v(a) || (this.containerHeight = G(b, "height")); this.chartWidth = Math.max(0, c || this.containerWidth || 600); this.chartHeight = Math.max(0, V(a, this.chartWidth) || (1 < this.containerHeight ? this.containerHeight : 400)) }; e.prototype.temporaryDisplay = function (a) {
                var b = this.renderTo; if (a) for (; b && b.style;)b.hcOrigStyle && (c(b, b.hcOrigStyle), delete b.hcOrigStyle), b.hcOrigDetached &&
                    (B.body.removeChild(b), b.hcOrigDetached = !1), b = b.parentNode; else for (; b && b.style;) { B.body.contains(b) || b.parentNode || (b.hcOrigDetached = !0, B.body.appendChild(b)); if ("none" === G(b, "display", !1) || b.hcOricDetached) b.hcOrigStyle = { display: b.style.display, height: b.style.height, overflow: b.style.overflow }, a = { display: "block", overflow: "hidden" }, b !== this.renderTo && (a.height = 0), c(b, a), b.offsetWidth || b.style.setProperty("display", "block", "important"); b = b.parentNode; if (b === B.body) break }
            }; e.prototype.setClassName =
                function (a) { this.container.className = "highcharts-container " + (a || "") }; e.prototype.getContainer = function () {
                    var b = this.options, g = b.chart; var h = this.renderTo; var e = ha(), m, k; h || (this.renderTo = h = g.renderTo); U(h) && (this.renderTo = h = B.getElementById(h)); h || y(13, !0, this); var x = aa(d(h, "data-highcharts-chart")); n(x) && p[x] && p[x].hasRendered && p[x].destroy(); d(h, "data-highcharts-chart", this.index); h.innerHTML = ""; g.skipClone || h.offsetWidth || this.temporaryDisplay(); this.getChartSize(); x = this.chartWidth; var q = this.chartHeight;
                    c(h, { overflow: "hidden" }); this.styledMode || (m = L({ position: "relative", overflow: "hidden", width: x + "px", height: q + "px", textAlign: "left", lineHeight: "normal", zIndex: 0, "-webkit-tap-highlight-color": "rgba(0,0,0,0)", userSelect: "none" }, g.style)); this.container = h = a("div", { id: e }, m, h); this._cursor = h.style.cursor; this.renderer = new (l[g.renderer] || l.Renderer)(h, x, q, null, g.forExport, b.exporting && b.exporting.allowHTML, this.styledMode); f(void 0, this); this.setClassName(g.className); if (this.styledMode) for (k in b.defs) this.renderer.definition(b.defs[k]);
                    else this.renderer.setStyle(g.style); this.renderer.chartIndex = this.index; N(this, "afterGetContainer")
                }; e.prototype.getMargins = function (a) { var c = this.spacing, b = this.margin, d = this.titleOffset; this.resetMargins(); d[0] && !v(b[0]) && (this.plotTop = Math.max(this.plotTop, d[0] + c[0])); d[2] && !v(b[2]) && (this.marginBottom = Math.max(this.marginBottom, d[2] + c[2])); this.legend && this.legend.display && this.legend.adjustMargins(b, c); N(this, "getMargins"); a || this.getAxisMargins() }; e.prototype.getAxisMargins = function () {
                    var a =
                        this, c = a.axisOffset = [0, 0, 0, 0], b = a.colorAxis, d = a.margin, f = function (a) { a.forEach(function (a) { a.visible && a.getOffset() }) }; a.hasCartesianSeries ? f(a.axes) : b && b.length && f(b); fa.forEach(function (b, f) { v(d[f]) || (a[b] += c[f]) }); a.setChartSize()
                }; e.prototype.reflow = function (a) {
                    var c = this, b = c.options.chart, d = c.renderTo, f = v(b.width) && v(b.height), g = b.width || G(d, "width"); b = b.height || G(d, "height"); d = a ? a.target : I; delete c.pointer.chartPosition; if (!f && !c.isPrinting && g && b && (d === I || d === B)) {
                        if (g !== c.containerWidth || b !==
                            c.containerHeight) k.clearTimeout(c.reflowTimeout), c.reflowTimeout = da(function () { c.container && c.setSize(void 0, void 0, !1) }, a ? 100 : 0); c.containerWidth = g; c.containerHeight = b
                    }
                }; e.prototype.setReflow = function (a) { var c = this; !1 === a || this.unbindReflow ? !1 === a && this.unbindReflow && (this.unbindReflow = this.unbindReflow()) : (this.unbindReflow = t(I, "resize", function (a) { c.options && c.reflow(a) }), t(this, "destroy", this.unbindReflow)) }; e.prototype.setSize = function (a, b, d) {
                    var h = this, e = h.renderer; h.isResizing += 1; f(d, h); d =
                        e.globalAnimation; h.oldChartHeight = h.chartHeight; h.oldChartWidth = h.chartWidth; "undefined" !== typeof a && (h.options.chart.width = a); "undefined" !== typeof b && (h.options.chart.height = b); h.getChartSize(); h.styledMode || (d ? g : c)(h.container, { width: h.chartWidth + "px", height: h.chartHeight + "px" }, d); h.setChartSize(!0); e.setSize(h.chartWidth, h.chartHeight, d); h.axes.forEach(function (a) { a.isDirty = !0; a.setScale() }); h.isDirtyLegend = !0; h.isDirtyBox = !0; h.layOutTitles(); h.getMargins(); h.redraw(d); h.oldChartHeight = null; N(h,
                            "resize"); da(function () { h && N(h, "endResize", null, function () { --h.isResizing }) }, q(d).duration)
                }; e.prototype.setChartSize = function (a) {
                    var c = this.inverted, b = this.renderer, d = this.chartWidth, f = this.chartHeight, g = this.options.chart, h = this.spacing, e = this.clipOffset, m, k, n, p; this.plotLeft = m = Math.round(this.plotLeft); this.plotTop = k = Math.round(this.plotTop); this.plotWidth = n = Math.max(0, Math.round(d - m - this.marginRight)); this.plotHeight = p = Math.max(0, Math.round(f - k - this.marginBottom)); this.plotSizeX = c ? p : n; this.plotSizeY =
                        c ? n : p; this.plotBorderWidth = g.plotBorderWidth || 0; this.spacingBox = b.spacingBox = { x: h[3], y: h[0], width: d - h[3] - h[1], height: f - h[0] - h[2] }; this.plotBox = b.plotBox = { x: m, y: k, width: n, height: p }; d = 2 * Math.floor(this.plotBorderWidth / 2); c = Math.ceil(Math.max(d, e[3]) / 2); b = Math.ceil(Math.max(d, e[0]) / 2); this.clipBox = { x: c, y: b, width: Math.floor(this.plotSizeX - Math.max(d, e[1]) / 2 - c), height: Math.max(0, Math.floor(this.plotSizeY - Math.max(d, e[2]) / 2 - b)) }; a || this.axes.forEach(function (a) { a.setAxisSize(); a.setAxisTranslation() });
                    N(this, "afterSetChartSize", { skipAxes: a })
                }; e.prototype.resetMargins = function () { N(this, "resetMargins"); var a = this, c = a.options.chart;["margin", "spacing"].forEach(function (b) { var d = c[b], f = M(d) ? d : [d, d, d, d];["Top", "Right", "Bottom", "Left"].forEach(function (d, g) { a[b][g] = J(c[b + d], f[g]) }) }); fa.forEach(function (c, b) { a[c] = J(a.margin[b], a.spacing[b]) }); a.axisOffset = [0, 0, 0, 0]; a.clipOffset = [0, 0, 0, 0] }; e.prototype.drawChartBox = function () {
                    var a = this.options.chart, c = this.renderer, b = this.chartWidth, d = this.chartHeight,
                    f = this.chartBackground, g = this.plotBackground, h = this.plotBorder, e = this.styledMode, m = this.plotBGImage, k = a.backgroundColor, n = a.plotBackgroundColor, p = a.plotBackgroundImage, x, q = this.plotLeft, l = this.plotTop, J = this.plotWidth, t = this.plotHeight, r = this.plotBox, v = this.clipRect, y = this.clipBox, u = "animate"; f || (this.chartBackground = f = c.rect().addClass("highcharts-background").add(), u = "attr"); if (e) var z = x = f.strokeWidth(); else {
                        z = a.borderWidth || 0; x = z + (a.shadow ? 8 : 0); k = { fill: k || "none" }; if (z || f["stroke-width"]) k.stroke =
                            a.borderColor, k["stroke-width"] = z; f.attr(k).shadow(a.shadow)
                    } f[u]({ x: x / 2, y: x / 2, width: b - x - z % 2, height: d - x - z % 2, r: a.borderRadius }); u = "animate"; g || (u = "attr", this.plotBackground = g = c.rect().addClass("highcharts-plot-background").add()); g[u](r); e || (g.attr({ fill: n || "none" }).shadow(a.plotShadow), p && (m ? (p !== m.attr("href") && m.attr("href", p), m.animate(r)) : this.plotBGImage = c.image(p, q, l, J, t).add())); v ? v.animate({ width: y.width, height: y.height }) : this.clipRect = c.clipRect(y); u = "animate"; h || (u = "attr", this.plotBorder =
                        h = c.rect().addClass("highcharts-plot-border").attr({ zIndex: 1 }).add()); e || h.attr({ stroke: a.plotBorderColor, "stroke-width": a.plotBorderWidth || 0, fill: "none" }); h[u](h.crisp({ x: q, y: l, width: J, height: t }, -h.strokeWidth())); this.isDirtyBox = !1; N(this, "afterDrawChartBox")
                }; e.prototype.propFromSeries = function () {
                    var a = this, c = a.options.chart, b, d = a.options.series, f, g;["inverted", "angular", "polar"].forEach(function (h) {
                        b = m[c.type || c.defaultSeriesType]; g = c[h] || b && b.prototype[h]; for (f = d && d.length; !g && f--;)(b = m[d[f].type]) &&
                            b.prototype[h] && (g = !0); a[h] = g
                    })
                }; e.prototype.linkSeries = function () { var a = this, c = a.series; c.forEach(function (a) { a.linkedSeries.length = 0 }); c.forEach(function (c) { var b = c.options.linkedTo; U(b) && (b = ":previous" === b ? a.series[c.index - 1] : a.get(b)) && b.linkedParent !== c && (b.linkedSeries.push(c), c.linkedParent = b, b.enabledDataSorting && c.setDataSortingOptions(), c.visible = J(c.options.visible, b.options.visible, c.visible)) }); N(this, "afterLinkSeries") }; e.prototype.renderSeries = function () {
                    this.series.forEach(function (a) {
                        a.translate();
                        a.render()
                    })
                }; e.prototype.renderLabels = function () { var a = this, c = a.options.labels; c.items && c.items.forEach(function (b) { var d = L(c.style, b.style), f = aa(d.left) + a.plotLeft, g = aa(d.top) + a.plotTop + 12; delete d.left; delete d.top; a.renderer.text(b.html, f, g).attr({ zIndex: 2 }).css(d).add() }) }; e.prototype.render = function () {
                    var a = this.axes, c = this.colorAxis, b = this.renderer, d = this.options, f = 0, g = function (a) { a.forEach(function (a) { a.visible && a.render() }) }; this.setTitle(); this.legend = new w(this, d.legend); this.getStacks &&
                        this.getStacks(); this.getMargins(!0); this.setChartSize(); d = this.plotWidth; a.some(function (a) { if (a.horiz && a.visible && a.options.labels.enabled && a.series.length) return f = 21, !0 }); var h = this.plotHeight = Math.max(this.plotHeight - f, 0); a.forEach(function (a) { a.setScale() }); this.getAxisMargins(); var e = 1.1 < d / this.plotWidth; var m = 1.05 < h / this.plotHeight; if (e || m) a.forEach(function (a) { (a.horiz && e || !a.horiz && m) && a.setTickInterval(!0) }), this.getMargins(); this.drawChartBox(); this.hasCartesianSeries ? g(a) : c && c.length &&
                            g(c); this.seriesGroup || (this.seriesGroup = b.g("series-group").attr({ zIndex: 3 }).add()); this.renderSeries(); this.renderLabels(); this.addCredits(); this.setResponsive && this.setResponsive(); this.hasRendered = !0
                }; e.prototype.addCredits = function (a) {
                    var c = this, b = Z(!0, this.options.credits, a); b.enabled && !this.credits && (this.credits = this.renderer.text(b.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function () { b.href && (I.location.href = b.href) }).attr({ align: b.position.align, zIndex: 8 }),
                        c.styledMode || this.credits.css(b.style), this.credits.add().align(b.position), this.credits.update = function (a) { c.credits = c.credits.destroy(); c.addCredits(a) })
                }; e.prototype.destroy = function () {
                    var a = this, c = a.axes, b = a.series, d = a.container, f, g = d && d.parentNode; N(a, "destroy"); a.renderer.forExport ? P(p, a) : p[a.index] = void 0; l.chartCount--; a.renderTo.removeAttribute("data-highcharts-chart"); ea(a); for (f = c.length; f--;)c[f] = c[f].destroy(); this.scroller && this.scroller.destroy && this.scroller.destroy(); for (f = b.length; f--;)b[f] =
                        b[f].destroy(); "title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach(function (c) { var b = a[c]; b && b.destroy && (a[c] = b.destroy()) }); d && (d.innerHTML = "", ea(d), g && K(d)); T(a, function (c, b) { delete a[b] })
                }; e.prototype.firstRender = function () {
                    var a = this, c = a.options; if (!a.isReadyToRender || a.isReadyToRender()) {
                        a.getContainer(); a.resetMargins(); a.setChartSize(); a.propFromSeries(); a.getAxes();
                        (u(c.series) ? c.series : []).forEach(function (c) { a.initSeries(c) }); a.linkSeries(); a.setSeriesData(); N(a, "beforeRender"); H && (a.pointer = l.hasTouch || !I.PointerEvent && !I.MSPointerEvent ? new H(a, c) : new D(a, c)); a.render(); if (!a.renderer.imgCount && !a.hasLoaded) a.onload(); a.temporaryDisplay(!0)
                    }
                }; e.prototype.onload = function () {
                    this.callbacks.concat([this.callback]).forEach(function (a) { a && "undefined" !== typeof this.index && a.apply(this, [this]) }, this); N(this, "load"); N(this, "render"); v(this.index) && this.setReflow(this.options.chart.reflow);
                    this.hasLoaded = !0
                }; e.prototype.addSeries = function (a, c, b) { var d, f = this; a && (c = J(c, !0), N(f, "addSeries", { options: a }, function () { d = f.initSeries(a); f.isDirtyLegend = !0; f.linkSeries(); d.enabledDataSorting && d.setData(a.data, !1); N(f, "afterAddSeries", { series: d }); c && f.redraw(b) })); return d }; e.prototype.addAxis = function (a, c, b, d) { return this.createAxis(c ? "xAxis" : "yAxis", { axis: a, redraw: b, animation: d }) }; e.prototype.addColorAxis = function (a, c, b) { return this.createAxis("colorAxis", { axis: a, redraw: c, animation: b }) }; e.prototype.createAxis =
                    function (a, c) { var d = this.options, f = "colorAxis" === a, g = c.redraw, h = c.animation; c = Z(c.axis, { index: this[a].length, isX: "xAxis" === a }); var e = f ? new l.ColorAxis(this, c) : new b(this, c); d[a] = Y(d[a] || {}); d[a].push(c); f && (this.isDirtyLegend = !0, this.axes.forEach(function (a) { a.series = [] }), this.series.forEach(function (a) { a.bindAxes(); a.isDirtyData = !0 })); J(g, !0) && this.redraw(h); return e }; e.prototype.showLoading = function (b) {
                        var d = this, f = d.options, h = d.loadingDiv, e = d.loadingSpan, m = f.loading, k = function () {
                            h && c(h, {
                                left: d.plotLeft +
                                    "px", top: d.plotTop + "px", width: d.plotWidth + "px", height: d.plotHeight + "px"
                            })
                        }; h || (d.loadingDiv = h = a("div", { className: "highcharts-loading highcharts-loading-hidden" }, null, d.container)); e || (d.loadingSpan = e = a("span", { className: "highcharts-loading-inner" }, null, h), t(d, "redraw", k)); h.className = "highcharts-loading"; C.setElementHTML(e, J(b, f.lang.loading, "")); d.styledMode || (c(h, L(m.style, { zIndex: 10 })), c(e, m.labelStyle), d.loadingShown || (c(h, { opacity: 0, display: "" }), g(h, { opacity: m.style.opacity || .5 }, {
                            duration: m.showDuration ||
                                0
                        }))); d.loadingShown = !0; k()
                    }; e.prototype.hideLoading = function () { var a = this.options, b = this.loadingDiv; b && (b.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || g(b, { opacity: 0 }, { duration: a.loading.hideDuration || 100, complete: function () { c(b, { display: "none" }) } })); this.loadingShown = !1 }; e.prototype.update = function (a, c, b, d) {
                        var f = this, g = { credits: "addCredits", title: "setTitle", subtitle: "setSubtitle", caption: "setCaption" }, e, m, k, p = a.isResponsiveOptions, x = []; N(f, "update", { options: a }); p ||
                            f.setResponsive(!1, !0); a = h(a, f.options); f.userOptions = Z(f.userOptions, a); if (e = a.chart) {
                                Z(!0, f.options.chart, e); "className" in e && f.setClassName(e.className); "reflow" in e && f.setReflow(e.reflow); if ("inverted" in e || "polar" in e || "type" in e) { f.propFromSeries(); var q = !0 } "alignTicks" in e && (q = !0); T(e, function (a, c) { -1 !== f.propsRequireUpdateSeries.indexOf("chart." + c) && (m = !0); -1 !== f.propsRequireDirtyBox.indexOf(c) && (f.isDirtyBox = !0); -1 !== f.propsRequireReflow.indexOf(c) && (p ? f.isDirtyBox = !0 : k = !0) }); !f.styledMode &&
                                    "style" in e && f.renderer.setStyle(e.style)
                            } !f.styledMode && a.colors && (this.options.colors = a.colors); a.time && (this.time === z && (this.time = new A(a.time)), Z(!0, f.options.time, a.time)); T(a, function (c, b) { if (f[b] && "function" === typeof f[b].update) f[b].update(c, !1); else if ("function" === typeof f[g[b]]) f[g[b]](c); else "color" !== b && -1 === f.collectionsWithUpdate.indexOf(b) && Z(!0, f.options[b], a[b]); "chart" !== b && -1 !== f.propsRequireUpdateSeries.indexOf(b) && (m = !0) }); this.collectionsWithUpdate.forEach(function (c) {
                                if (a[c]) {
                                    if ("series" ===
                                        c) { var d = []; f[c].forEach(function (a, c) { a.options.isInternal || d.push(J(a.options.index, c)) }) } Y(a[c]).forEach(function (a, g) { var h = v(a.id), e; h && (e = f.get(a.id)); !e && f[c] && (e = f[c][d ? d[g] : g]) && h && v(e.options.id) && (e = void 0); e && e.coll === c && (e.update(a, !1), b && (e.touched = !0)); !e && b && f.collectionsWithInit[c] && (f.collectionsWithInit[c][0].apply(f, [a].concat(f.collectionsWithInit[c][1] || []).concat([!1])).touched = !0) }); b && f[c].forEach(function (a) { a.touched || a.options.isInternal ? delete a.touched : x.push(a) })
                                }
                            });
                        x.forEach(function (a) { a.chart && a.remove(!1) }); q && f.axes.forEach(function (a) { a.update({}, !1) }); m && f.getSeriesOrderByLinks().forEach(function (a) { a.chart && a.update({}, !1) }, this); q = e && e.width; e = e && e.height; U(e) && (e = V(e, q || f.chartWidth)); k || n(q) && q !== f.chartWidth || n(e) && e !== f.chartHeight ? f.setSize(q, e, d) : J(c, !0) && f.redraw(d); N(f, "afterUpdate", { options: a, redraw: c, animation: d })
                    }; e.prototype.setSubtitle = function (a, c) { this.applyDescription("subtitle", a); this.layOutTitles(c) }; e.prototype.setCaption = function (a,
                        c) { this.applyDescription("caption", a); this.layOutTitles(c) }; e.prototype.showResetZoom = function () {
                            function a() { c.zoomOut() } var c = this, b = Q.lang, d = c.options.chart.resetZoomButton, f = d.theme, g = f.states, h = "chart" === d.relativeTo || "spaceBox" === d.relativeTo ? null : "plotBox"; N(this, "beforeShowResetZoom", null, function () { c.resetZoomButton = c.renderer.button(b.resetZoom, null, null, a, f, g && g.hover).attr({ align: d.position.align, title: b.resetZoomTitle }).addClass("highcharts-reset-zoom").add().align(d.position, !1, h) });
                            N(this, "afterShowResetZoom")
                        }; e.prototype.zoomOut = function () { N(this, "selection", { resetSelection: !0 }, this.zoom) }; e.prototype.zoom = function (a) {
                            var c = this, b, d = c.pointer, f = !1, g = c.inverted ? d.mouseDownX : d.mouseDownY; !a || a.resetSelection ? (c.axes.forEach(function (a) { b = a.zoom() }), d.initiated = !1) : a.xAxis.concat(a.yAxis).forEach(function (a) {
                                var h = a.axis, e = c.inverted ? h.left : h.top, m = c.inverted ? e + h.width : e + h.height, k = h.isXAxis, p = !1; if (!k && g >= e && g <= m || k || !v(g)) p = !0; d[k ? "zoomX" : "zoomY"] && p && (b = h.zoom(a.min, a.max),
                                    h.displayBtn && (f = !0))
                            }); var h = c.resetZoomButton; f && !h ? c.showResetZoom() : !f && M(h) && (c.resetZoomButton = h.destroy()); b && c.redraw(J(c.options.chart.animation, a && a.animation, 100 > c.pointCount))
                        }; e.prototype.pan = function (a, b) {
                            var d = this, f = d.hoverPoints, g = d.options.chart, h = d.options.mapNavigation && d.options.mapNavigation.enabled, e; b = "object" === typeof b ? b : { enabled: b, type: "x" }; g && g.panning && (g.panning = b); var m = b.type; N(this, "pan", { originalEvent: a }, function () {
                                f && f.forEach(function (a) { a.setState() }); var b = [1];
                                "xy" === m ? b = [1, 0] : "y" === m && (b = [0]); b.forEach(function (c) {
                                    var b = d[c ? "xAxis" : "yAxis"][0], f = b.horiz, g = a[f ? "chartX" : "chartY"]; f = f ? "mouseDownX" : "mouseDownY"; var k = d[f], p = (b.pointRange || 0) / 2, x = b.reversed && !d.inverted || !b.reversed && d.inverted ? -1 : 1, q = b.getExtremes(), l = b.toValue(k - g, !0) + p * x; x = b.toValue(k + b.len - g, !0) - p * x; var t = x < l; k = t ? x : l; l = t ? l : x; var r = b.hasVerticalPanning(), v = b.panningState; b.series.forEach(function (a) {
                                        if (r && !c && (!v || v.isDirty)) {
                                            var b = a.getProcessedData(!0); b = a.getExtremes(b.yData, !0); v || (v =
                                                { startMin: Number.MAX_VALUE, startMax: -Number.MAX_VALUE }); n(b.dataMin) && n(b.dataMax) && (v.startMin = Math.min(J(a.options.threshold, Infinity), b.dataMin, v.startMin), v.startMax = Math.max(J(a.options.threshold, -Infinity), b.dataMax, v.startMax))
                                        }
                                    }); x = Math.min(J(null === v || void 0 === v ? void 0 : v.startMin, q.dataMin), p ? q.min : b.toValue(b.toPixels(q.min) - b.minPixelPadding)); p = Math.max(J(null === v || void 0 === v ? void 0 : v.startMax, q.dataMax), p ? q.max : b.toValue(b.toPixels(q.max) + b.minPixelPadding)); b.panningState = v; b.isOrdinal ||
                                        (t = x - k, 0 < t && (l += t, k = x), t = l - p, 0 < t && (l = p, k -= t), b.series.length && k !== q.min && l !== q.max && k >= x && l <= p && (b.setExtremes(k, l, !1, !1, { trigger: "pan" }), d.resetZoomButton || h || k === x || l === p || !m.match("y") || (d.showResetZoom(), b.displayBtn = !1), e = !0), d[f] = g)
                                }); e && d.redraw(!1); c(d.container, { cursor: "move" })
                            })
                        }; return e
        }(); L(ba.prototype, {
            callbacks: [], collectionsWithInit: { xAxis: [ba.prototype.addAxis, [!0]], yAxis: [ba.prototype.addAxis, [!1]], series: [ba.prototype.addSeries] }, collectionsWithUpdate: ["xAxis", "yAxis", "zAxis",
                "series"], propsRequireDirtyBox: "backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "), propsRequireReflow: "margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(" "), propsRequireUpdateSeries: "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" ")
        }); l.chart = function (a, c, b) {
            return new ba(a,
                c, b)
        }; l.Chart = ba; ""; return ba
    }); O(l, "Extensions/ScrollablePlotArea.js", [l["Core/Animation/AnimationUtilities.js"], l["Core/Chart/Chart.js"], l["Core/Globals.js"], l["Core/Utilities.js"]], function (e, b, l, w) {
        var D = e.stop, F = w.addEvent, E = w.createElement, H = w.pick; ""; F(b, "afterSetChartSize", function (b) {
            var e = this.options.chart.scrollablePlotArea, k = e && e.minWidth; e = e && e.minHeight; if (!this.renderer.forExport) {
                if (k) {
                    if (this.scrollablePixelsX = k = Math.max(0, k - this.chartWidth)) {
                    this.plotWidth += k; this.inverted ? (this.clipBox.height +=
                        k, this.plotBox.height += k) : (this.clipBox.width += k, this.plotBox.width += k); var r = { 1: { name: "right", value: k } }
                    }
                } else e && (this.scrollablePixelsY = k = Math.max(0, e - this.chartHeight)) && (this.plotHeight += k, this.inverted ? (this.clipBox.width += k, this.plotBox.width += k) : (this.clipBox.height += k, this.plotBox.height += k), r = { 2: { name: "bottom", value: k } }); r && !b.skipAxes && this.axes.forEach(function (b) {
                    r[b.side] ? b.getPlotLinePath = function () {
                        var g = r[b.side].name, f = this[g]; this[g] = f - r[b.side].value; var e = l.Axis.prototype.getPlotLinePath.apply(this,
                            arguments); this[g] = f; return e
                    } : (b.setAxisSize(), b.setAxisTranslation())
                })
            }
        }); F(b, "render", function () { this.scrollablePixelsX || this.scrollablePixelsY ? (this.setUpScrolling && this.setUpScrolling(), this.applyFixed()) : this.fixedDiv && this.applyFixed() }); b.prototype.setUpScrolling = function () {
            var b = this, e = { WebkitOverflowScrolling: "touch", overflowX: "hidden", overflowY: "hidden" }; this.scrollablePixelsX && (e.overflowX = "auto"); this.scrollablePixelsY && (e.overflowY = "auto"); this.scrollingParent = E("div", { className: "highcharts-scrolling-parent" },
                { position: "relative" }, this.renderTo); this.scrollingContainer = E("div", { className: "highcharts-scrolling" }, e, this.scrollingParent); F(this.scrollingContainer, "scroll", function () { b.pointer && delete b.pointer.chartPosition }); this.innerContainer = E("div", { className: "highcharts-inner-container" }, null, this.scrollingContainer); this.innerContainer.appendChild(this.container); this.setUpScrolling = null
        }; b.prototype.moveFixedElements = function () {
            var b = this.container, e = this.fixedRenderer, k = ".highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-legend-checkbox .highcharts-navigator-series .highcharts-navigator-xaxis .highcharts-navigator-yaxis .highcharts-navigator .highcharts-reset-zoom .highcharts-scrollbar .highcharts-subtitle .highcharts-title".split(" "),
            l; this.scrollablePixelsX && !this.inverted ? l = ".highcharts-yaxis" : this.scrollablePixelsX && this.inverted ? l = ".highcharts-xaxis" : this.scrollablePixelsY && !this.inverted ? l = ".highcharts-xaxis" : this.scrollablePixelsY && this.inverted && (l = ".highcharts-yaxis"); l && k.push(l + ":not(.highcharts-radial-axis)", l + "-labels:not(.highcharts-radial-axis-labels)"); k.forEach(function (g) { [].forEach.call(b.querySelectorAll(g), function (b) { (b.namespaceURI === e.SVG_NS ? e.box : e.box.parentNode).appendChild(b); b.style.pointerEvents = "auto" }) })
        };
        b.prototype.applyFixed = function () {
            var b, e, k, C = !this.fixedDiv, g = this.options.chart, q = g.scrollablePlotArea; C ? (this.fixedDiv = E("div", { className: "highcharts-fixed" }, { position: "absolute", overflow: "hidden", pointerEvents: "none", zIndex: ((null === (b = g.style) || void 0 === b ? void 0 : b.zIndex) || 0) + 2, top: 0 }, null, !0), null === (e = this.scrollingContainer) || void 0 === e ? void 0 : e.parentNode.insertBefore(this.fixedDiv, this.scrollingContainer), this.renderTo.style.overflow = "visible", this.fixedRenderer = b = new l.Renderer(this.fixedDiv,
                this.chartWidth, this.chartHeight, null === (k = this.options.chart) || void 0 === k ? void 0 : k.style), this.scrollableMask = b.path().attr({ fill: this.options.chart.backgroundColor || "#fff", "fill-opacity": H(q.opacity, .85), zIndex: -1 }).addClass("highcharts-scrollable-mask").add(), this.moveFixedElements(), F(this, "afterShowResetZoom", this.moveFixedElements), F(this, "afterLayOutTitles", this.moveFixedElements)) : this.fixedRenderer.setSize(this.chartWidth, this.chartHeight); k = this.chartWidth + (this.scrollablePixelsX || 0); b =
                    this.chartHeight + (this.scrollablePixelsY || 0); D(this.container); this.container.style.width = k + "px"; this.container.style.height = b + "px"; this.renderer.boxWrapper.attr({ width: k, height: b, viewBox: [0, 0, k, b].join(" ") }); this.chartBackground.attr({ width: k, height: b }); this.scrollingContainer.style.height = this.chartHeight + "px"; C && (q.scrollPositionX && (this.scrollingContainer.scrollLeft = this.scrollablePixelsX * q.scrollPositionX), q.scrollPositionY && (this.scrollingContainer.scrollTop = this.scrollablePixelsY * q.scrollPositionY));
            b = this.axisOffset; C = this.plotTop - b[0] - 1; q = this.plotLeft - b[3] - 1; k = this.plotTop + this.plotHeight + b[2] + 1; b = this.plotLeft + this.plotWidth + b[1] + 1; e = this.plotLeft + this.plotWidth - (this.scrollablePixelsX || 0); g = this.plotTop + this.plotHeight - (this.scrollablePixelsY || 0); C = this.scrollablePixelsX ? [["M", 0, C], ["L", this.plotLeft - 1, C], ["L", this.plotLeft - 1, k], ["L", 0, k], ["Z"], ["M", e, C], ["L", this.chartWidth, C], ["L", this.chartWidth, k], ["L", e, k], ["Z"]] : this.scrollablePixelsY ? [["M", q, 0], ["L", q, this.plotTop - 1], ["L", b, this.plotTop -
                1], ["L", b, 0], ["Z"], ["M", q, g], ["L", q, this.chartHeight], ["L", b, this.chartHeight], ["L", b, g], ["Z"]] : [["M", 0, 0]]; "adjustHeight" !== this.redrawTrigger && this.scrollableMask.attr({ d: C })
        }
    }); O(l, "Mixins/LegendSymbol.js", [l["Core/Globals.js"], l["Core/Utilities.js"]], function (e, b) {
        var l = b.merge, w = b.pick; return e.LegendSymbolMixin = {
            drawRectangle: function (b, e) {
                var l = b.symbolHeight, H = b.options.squareSymbol; e.legendSymbol = this.chart.renderer.rect(H ? (b.symbolWidth - l) / 2 : 0, b.baseline - l + 1, H ? l : b.symbolWidth, l, w(b.options.symbolRadius,
                    l / 2)).addClass("highcharts-point").attr({ zIndex: 3 }).add(e.legendGroup)
            }, drawLineMarker: function (b) {
                var e = this.options, E = e.marker, H = b.symbolWidth, r = b.symbolHeight, A = r / 2, k = this.chart.renderer, C = this.legendGroup; b = b.baseline - Math.round(.3 * b.fontMetrics.b); var g = {}; this.chart.styledMode || (g = { "stroke-width": e.lineWidth || 0 }, e.dashStyle && (g.dashstyle = e.dashStyle)); this.legendLine = k.path([["M", 0, b], ["L", H, b]]).addClass("highcharts-graph").attr(g).add(C); E && !1 !== E.enabled && H && (e = Math.min(w(E.radius, A), A),
                    0 === this.symbol.indexOf("url") && (E = l(E, { width: r, height: r }), e = 0), this.legendSymbol = E = k.symbol(this.symbol, H / 2 - e, b - e, 2 * e, 2 * e, E).addClass("highcharts-point").add(C), E.isMarker = !0)
            }
        }
    }); O(l, "Core/Series/Series.js", [l["Core/Animation/AnimationUtilities.js"], l["Core/Globals.js"], l["Mixins/LegendSymbol.js"], l["Core/Options.js"], l["Core/Color/Palette.js"], l["Core/Series/Point.js"], l["Core/Series/SeriesRegistry.js"], l["Core/Renderer/SVG/SVGElement.js"], l["Core/Utilities.js"]], function (e, b, l, w, D, F, E, H, r) {
        var A =
            e.animObject, k = e.setAnimation, C = b.hasTouch, g = b.svg, q = b.win, f = w.defaultOptions, p = E.seriesTypes, B = r.addEvent, I = r.arrayMax, Q = r.arrayMin, z = r.clamp, m = r.cleanRecursively, t = r.correctFloat, d = r.defined, h = r.erase, a = r.error, c = r.extend, v = r.find, K = r.fireEvent, P = r.getNestedProperty, y = r.isArray, L = r.isFunction, S = r.isNumber, N = r.isString, G = r.merge, u = r.objectEach, R = r.pick, n = r.removeEvent, M = r.splat, U = r.syncTimeout; e = function () {
                function b() {
                this.zones = this.yAxis = this.xAxis = this.userOptions = this.tooltipOptions = this.processedYData =
                    this.processedXData = this.points = this.options = this.linkedSeries = this.index = this.eventsToUnbind = this.eventOptions = this.data = this.chart = this._i = void 0
                } b.prototype.init = function (a, b) {
                    K(this, "init", { options: b }); var d = this, f = a.series, g; this.eventOptions = this.eventOptions || {}; this.eventsToUnbind = []; d.chart = a; d.options = b = d.setOptions(b); d.linkedSeries = []; d.bindAxes(); c(d, { name: b.name, state: "", visible: !1 !== b.visible, selected: !0 === b.selected }); var e = b.events; u(e, function (a, b) {
                    L(a) && d.eventOptions[b] !== a && (L(d.eventOptions[b]) &&
                        n(d, b, d.eventOptions[b]), d.eventOptions[b] = a, B(d, b, a))
                    }); if (e && e.click || b.point && b.point.events && b.point.events.click || b.allowPointSelect) a.runTrackerClick = !0; d.getColor(); d.getSymbol(); d.parallelArrays.forEach(function (a) { d[a + "Data"] || (d[a + "Data"] = []) }); d.isCartesian && (a.hasCartesianSeries = !0); f.length && (g = f[f.length - 1]); d._i = R(g && g._i, -1) + 1; d.opacity = d.options.opacity; a.orderSeries(this.insert(f)); b.dataSorting && b.dataSorting.enabled ? d.setDataSortingOptions() : d.points || d.data || d.setData(b.data,
                        !1); K(this, "afterInit")
                }; b.prototype.is = function (a) { return p[a] && this instanceof p[a] }; b.prototype.insert = function (a) { var b = this.options.index, c; if (S(b)) { for (c = a.length; c--;)if (b >= R(a[c].options.index, a[c]._i)) { a.splice(c + 1, 0, this); break } -1 === c && a.unshift(this); c += 1 } else a.push(this); return R(c, a.length - 1) }; b.prototype.bindAxes = function () {
                    var b = this, c = b.options, d = b.chart, f; K(this, "bindAxes", null, function () {
                        (b.axisTypes || []).forEach(function (g) {
                            d[g].forEach(function (a) {
                                f = a.options; if (c[g] === f.index ||
                                    "undefined" !== typeof c[g] && c[g] === f.id || "undefined" === typeof c[g] && 0 === f.index) b.insert(a.series), b[g] = a, a.isDirty = !0
                            }); b[g] || b.optionalAxis === g || a(18, !0, d)
                        })
                    }); K(this, "afterBindAxes")
                }; b.prototype.updateParallelArrays = function (a, b) { var c = a.series, d = arguments, f = S(b) ? function (d) { var f = "y" === d && c.toYData ? c.toYData(a) : a[d]; c[d + "Data"][b] = f } : function (a) { Array.prototype[b].apply(c[a + "Data"], Array.prototype.slice.call(d, 2)) }; c.parallelArrays.forEach(f) }; b.prototype.hasData = function () {
                    return this.visible &&
                        "undefined" !== typeof this.dataMax && "undefined" !== typeof this.dataMin || this.visible && this.yData && 0 < this.yData.length
                }; b.prototype.autoIncrement = function () {
                    var a = this.options, b = this.xIncrement, c, d = a.pointIntervalUnit, f = this.chart.time; b = R(b, a.pointStart, 0); this.pointInterval = c = R(this.pointInterval, a.pointInterval, 1); d && (a = new f.Date(b), "day" === d ? f.set("Date", a, f.get("Date", a) + c) : "month" === d ? f.set("Month", a, f.get("Month", a) + c) : "year" === d && f.set("FullYear", a, f.get("FullYear", a) + c), c = a.getTime() - b); this.xIncrement =
                        b + c; return b
                }; b.prototype.setDataSortingOptions = function () { var a = this.options; c(this, { requireSorting: !1, sorted: !1, enabledDataSorting: !0, allowDG: !1 }); d(a.pointRange) || (a.pointRange = 1) }; b.prototype.setOptions = function (a) {
                    var b = this.chart, c = b.options, g = c.plotOptions, e = b.userOptions || {}; a = G(a); b = b.styledMode; var h = { plotOptions: g, userOptions: a }; K(this, "setOptions", h); var m = h.plotOptions[this.type], k = e.plotOptions || {}; this.userOptions = h.userOptions; e = G(m, g.series, e.plotOptions && e.plotOptions[this.type],
                        a); this.tooltipOptions = G(f.tooltip, f.plotOptions.series && f.plotOptions.series.tooltip, f.plotOptions[this.type].tooltip, c.tooltip.userOptions, g.series && g.series.tooltip, g[this.type].tooltip, a.tooltip); this.stickyTracking = R(a.stickyTracking, k[this.type] && k[this.type].stickyTracking, k.series && k.series.stickyTracking, this.tooltipOptions.shared && !this.noSharedTooltip ? !0 : e.stickyTracking); null === m.marker && delete e.marker; this.zoneAxis = e.zoneAxis; c = this.zones = (e.zones || []).slice(); !e.negativeColor && !e.negativeFillColor ||
                            e.zones || (g = { value: e[this.zoneAxis + "Threshold"] || e.threshold || 0, className: "highcharts-negative" }, b || (g.color = e.negativeColor, g.fillColor = e.negativeFillColor), c.push(g)); c.length && d(c[c.length - 1].value) && c.push(b ? {} : { color: this.color, fillColor: this.fillColor }); K(this, "afterSetOptions", { options: e }); return e
                }; b.prototype.getName = function () { return R(this.options.name, "Series " + (this.index + 1)) }; b.prototype.getCyclic = function (a, b, c) {
                    var f = this.chart, g = this.userOptions, e = a + "Index", h = a + "Counter", m = c ? c.length :
                        R(f.options.chart[a + "Count"], f[a + "Count"]); if (!b) { var k = R(g[e], g["_" + e]); d(k) || (f.series.length || (f[h] = 0), g["_" + e] = k = f[h] % m, f[h] += 1); c && (b = c[k]) } "undefined" !== typeof k && (this[e] = k); this[a] = b
                }; b.prototype.getColor = function () { this.chart.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.options.color = null : this.getCyclic("color", this.options.color || f.plotOptions[this.type].color, this.chart.options.colors) }; b.prototype.getPointsCollection = function () {
                    return (this.hasGroupedData ? this.points :
                        this.data) || []
                }; b.prototype.getSymbol = function () { this.getCyclic("symbol", this.options.marker.symbol, this.chart.options.symbols) }; b.prototype.findPointIndex = function (a, b) {
                    var c = a.id, d = a.x, f = this.points, g, e = this.options.dataSorting; if (c) var h = this.chart.get(c); else if (this.linkedParent || this.enabledDataSorting) { var m = e && e.matchByName ? "name" : "index"; h = v(f, function (b) { return !b.touched && b[m] === a[m] }); if (!h) return } if (h) { var k = h && h.index; "undefined" !== typeof k && (g = !0) } "undefined" === typeof k && S(d) && (k = this.xData.indexOf(d,
                        b)); -1 !== k && "undefined" !== typeof k && this.cropped && (k = k >= this.cropStart ? k - this.cropStart : k); !g && f[k] && f[k].touched && (k = void 0); return k
                }; b.prototype.updateData = function (a, b) {
                    var c = this.options, f = c.dataSorting, g = this.points, e = [], h, k, m, p = this.requireSorting, n = a.length === g.length, x = !0; this.xIncrement = null; a.forEach(function (a, b) {
                        var k = d(a) && this.pointClass.prototype.optionsToObject.call({ series: this }, a) || {}; var x = k.x; if (k.id || S(x)) {
                            if (x = this.findPointIndex(k, m), -1 === x || "undefined" === typeof x ? e.push(a) :
                                g[x] && a !== c.data[x] ? (g[x].update(a, !1, null, !1), g[x].touched = !0, p && (m = x + 1)) : g[x] && (g[x].touched = !0), !n || b !== x || f && f.enabled || this.hasDerivedData) h = !0
                        } else e.push(a)
                    }, this); if (h) for (a = g.length; a--;)(k = g[a]) && !k.touched && k.remove && k.remove(!1, b); else !n || f && f.enabled ? x = !1 : (a.forEach(function (a, b) { g[b].update && a !== g[b].y && g[b].update(a, !1, null, !1) }), e.length = 0); g.forEach(function (a) { a && (a.touched = !1) }); if (!x) return !1; e.forEach(function (a) { this.addPoint(a, !1, null, null, !1) }, this); null === this.xIncrement &&
                        this.xData && this.xData.length && (this.xIncrement = I(this.xData), this.autoIncrement()); return !0
                }; b.prototype.setData = function (b, c, d, f) {
                    var g = this, e = g.points, h = e && e.length || 0, k, m = g.options, p = g.chart, n = m.dataSorting, x = null, q = g.xAxis; x = m.turboThreshold; var l = this.xData, t = this.yData, v = (k = g.pointArrayMap) && k.length, r = m.keys, u = 0, J = 1, z; b = b || []; k = b.length; c = R(c, !0); n && n.enabled && (b = this.sortData(b)); !1 !== f && k && h && !g.cropped && !g.hasGroupedData && g.visible && !g.isSeriesBoosting && (z = this.updateData(b, d)); if (!z) {
                    g.xIncrement =
                        null; g.colorCounter = 0; this.parallelArrays.forEach(function (a) { g[a + "Data"].length = 0 }); if (x && k > x) if (x = g.getFirstValidPoint(b), S(x)) for (d = 0; d < k; d++)l[d] = this.autoIncrement(), t[d] = b[d]; else if (y(x)) if (v) for (d = 0; d < k; d++)f = b[d], l[d] = f[0], t[d] = f.slice(1, v + 1); else for (r && (u = r.indexOf("x"), J = r.indexOf("y"), u = 0 <= u ? u : 0, J = 0 <= J ? J : 1), d = 0; d < k; d++)f = b[d], l[d] = f[u], t[d] = f[J]; else a(12, !1, p); else for (d = 0; d < k; d++)"undefined" !== typeof b[d] && (f = { series: g }, g.pointClass.prototype.applyOptions.apply(f, [b[d]]), g.updateParallelArrays(f,
                            d)); t && N(t[0]) && a(14, !0, p); g.data = []; g.options.data = g.userOptions.data = b; for (d = h; d--;)e[d] && e[d].destroy && e[d].destroy(); q && (q.minRange = q.userMinRange); g.isDirty = p.isDirtyBox = !0; g.isDirtyData = !!e; d = !1
                    } "point" === m.legendType && (this.processData(), this.generatePoints()); c && p.redraw(d)
                }; b.prototype.sortData = function (a) {
                    var b = this, c = b.options.dataSorting.sortKey || "y", f = function (a, b) { return d(b) && a.pointClass.prototype.optionsToObject.call({ series: a }, b) || {} }; a.forEach(function (c, d) {
                    a[d] = f(b, c); a[d].index =
                        d
                    }, this); a.concat().sort(function (a, b) { a = P(c, a); b = P(c, b); return b < a ? -1 : b > a ? 1 : 0 }).forEach(function (a, b) { a.x = b }, this); b.linkedSeries && b.linkedSeries.forEach(function (b) { var c = b.options, d = c.data; c.dataSorting && c.dataSorting.enabled || !d || (d.forEach(function (c, g) { d[g] = f(b, c); a[g] && (d[g].x = a[g].x, d[g].index = g) }), b.setData(d, !1)) }); return a
                }; b.prototype.getProcessedData = function (b) {
                    var c = this.xData, d = this.yData, f = c.length; var g = 0; var e = this.xAxis, h = this.options; var k = h.cropThreshold; var m = b || this.getExtremesFromAll ||
                        h.getExtremesFromAll, p = this.isCartesian; b = e && e.val2lin; h = !(!e || !e.logarithmic); var n = this.requireSorting; if (e) { e = e.getExtremes(); var x = e.min; var q = e.max } if (p && this.sorted && !m && (!k || f > k || this.forceCrop)) if (c[f - 1] < x || c[0] > q) c = [], d = []; else if (this.yData && (c[0] < x || c[f - 1] > q)) { g = this.cropData(this.xData, this.yData, x, q); c = g.xData; d = g.yData; g = g.start; var l = !0 } for (k = c.length || 1; --k;)if (f = h ? b(c[k]) - b(c[k - 1]) : c[k] - c[k - 1], 0 < f && ("undefined" === typeof t || f < t)) var t = f; else 0 > f && n && (a(15, !1, this.chart), n = !1); return {
                            xData: c,
                            yData: d, cropped: l, cropStart: g, closestPointRange: t
                        }
                }; b.prototype.processData = function (a) { var b = this.xAxis; if (this.isCartesian && !this.isDirty && !b.isDirty && !this.yAxis.isDirty && !a) return !1; a = this.getProcessedData(); this.cropped = a.cropped; this.cropStart = a.cropStart; this.processedXData = a.xData; this.processedYData = a.yData; this.closestPointRange = this.basePointRange = a.closestPointRange }; b.prototype.cropData = function (a, b, c, d, f) {
                    var g = a.length, e = 0, h = g, k; f = R(f, this.cropShoulder); for (k = 0; k < g; k++)if (a[k] >= c) {
                        e =
                        Math.max(0, k - f); break
                    } for (c = k; c < g; c++)if (a[c] > d) { h = c + f; break } return { xData: a.slice(e, h), yData: b.slice(e, h), start: e, end: h }
                }; b.prototype.generatePoints = function () {
                    var a = this.options, b = a.data, d = this.data, f, g = this.processedXData, e = this.processedYData, h = this.pointClass, k = g.length, m = this.cropStart || 0, p = this.hasGroupedData; a = a.keys; var n = [], q; d || p || (d = [], d.length = b.length, d = this.data = d); a && p && (this.options.keys = !1); for (q = 0; q < k; q++) {
                        var l = m + q; if (p) {
                            var t = (new h).init(this, [g[q]].concat(M(e[q]))); t.dataGroup =
                                this.groupMap[q]; t.dataGroup.options && (t.options = t.dataGroup.options, c(t, t.dataGroup.options), delete t.dataLabels)
                        } else (t = d[l]) || "undefined" === typeof b[l] || (d[l] = t = (new h).init(this, b[l], g[q])); t && (t.index = l, n[q] = t)
                    } this.options.keys = a; if (d && (k !== (f = d.length) || p)) for (q = 0; q < f; q++)q !== m || p || (q += k), d[q] && (d[q].destroyElements(), d[q].plotX = void 0); this.data = d; this.points = n; K(this, "afterGeneratePoints")
                }; b.prototype.getXExtremes = function (a) { return { min: Q(a), max: I(a) } }; b.prototype.getExtremes = function (a,
                    b) {
                        var c = this.xAxis, d = this.yAxis, f = this.processedXData || this.xData, g = [], e = 0, h = 0; var k = 0; var m = this.requireSorting ? this.cropShoulder : 0, p = d ? d.positiveValuesOnly : !1, n; a = a || this.stackedYData || this.processedYData || []; d = a.length; c && (k = c.getExtremes(), h = k.min, k = k.max); for (n = 0; n < d; n++) {
                            var q = f[n]; var x = a[n]; var l = (S(x) || y(x)) && (x.length || 0 < x || !p); q = b || this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || !c || (f[n + m] || q) >= h && (f[n - m] || q) <= k; if (l && q) if (l = x.length) for (; l--;)S(x[l]) && (g[e++] =
                                x[l]); else g[e++] = x
                        } a = { dataMin: Q(g), dataMax: I(g) }; K(this, "afterGetExtremes", { dataExtremes: a }); return a
                }; b.prototype.applyExtremes = function () { var a = this.getExtremes(); this.dataMin = a.dataMin; this.dataMax = a.dataMax; return a }; b.prototype.getFirstValidPoint = function (a) { for (var b = null, c = a.length, d = 0; null === b && d < c;)b = a[d], d++; return b }; b.prototype.translate = function () {
                this.processedXData || this.processData(); this.generatePoints(); var a = this.options, b = a.stacking, c = this.xAxis, f = c.categories, g = this.enabledDataSorting,
                    e = this.yAxis, h = this.points, k = h.length, m = !!this.modifyValue, p, n = this.pointPlacementToXValue(), q = !!n, l = a.threshold, v = a.startFromThreshold ? l : 0, r, u = this.zoneAxis || "y", B = Number.MAX_VALUE; for (p = 0; p < k; p++) {
                        var C = h[p], A = C.x, G = C.y, I = C.low, w = b && e.stacking && e.stacking.stacks[(this.negStacks && G < (v ? 0 : l) ? "-" : "") + this.stackKey]; if (e.positiveValuesOnly && !e.validatePositiveValue(G) || c.positiveValuesOnly && !c.validatePositiveValue(A)) C.isNull = !0; C.plotX = r = t(z(c.translate(A, 0, 0, 0, 1, n, "flags" === this.type), -1E5, 1E5));
                        if (b && this.visible && w && w[A]) { var L = this.getStackIndicator(L, A, this.index); if (!C.isNull) { var N = w[A]; var H = N.points[L.key] } } y(H) && (I = H[0], G = H[1], I === v && L.key === w[A].base && (I = R(S(l) && l, e.min)), e.positiveValuesOnly && 0 >= I && (I = null), C.total = C.stackTotal = N.total, C.percentage = N.total && C.y / N.total * 100, C.stackY = G, this.irregularWidths || N.setOffset(this.pointXOffset || 0, this.barW || 0)); C.yBottom = d(I) ? z(e.translate(I, 0, 1, 0, 1), -1E5, 1E5) : null; m && (G = this.modifyValue(G, C)); C.plotY = void 0; S(G) && (G = e.translate(G, !1, !0,
                            !1, !0), "undefined" !== typeof G && (C.plotY = z(G, -1E5, 1E5))); C.isInside = this.isPointInside(C); C.clientX = q ? t(c.translate(A, 0, 0, 0, 1, n)) : r; C.negative = C[u] < (a[u + "Threshold"] || l || 0); C.category = f && "undefined" !== typeof f[C.x] ? f[C.x] : C.x; if (!C.isNull && !1 !== C.visible) { "undefined" !== typeof E && (B = Math.min(B, Math.abs(r - E))); var E = r } C.zone = this.zones.length && C.getZone(); !C.graphic && this.group && g && (C.isNew = !0)
                    } this.closestPointRangePx = B; K(this, "afterTranslate")
                }; b.prototype.getValidPoints = function (a, b, c) {
                    var d = this.chart;
                    return (a || this.points || []).filter(function (a) { return b && !d.isInsidePlot(a.plotX, a.plotY, d.inverted) ? !1 : !1 !== a.visible && (c || !a.isNull) })
                }; b.prototype.getClipBox = function (a, b) {
                    var c = this.options, d = this.chart, f = d.inverted, g = this.xAxis, e = g && this.yAxis, h = d.options.chart.scrollablePlotArea || {}; a && !1 === c.clip && e ? a = f ? { y: -d.chartWidth + e.len + e.pos, height: d.chartWidth, width: d.chartHeight, x: -d.chartHeight + g.len + g.pos } : { y: -e.pos, height: d.chartHeight, width: d.chartWidth, x: -g.pos } : (a = this.clipBox || d.clipBox, b && (a.width =
                        d.plotSizeX, a.x = (d.scrollablePixelsX || 0) * (h.scrollPositionX || 0))); return b ? { width: a.width, x: a.x } : a
                }; b.prototype.setClip = function (a) {
                    var b = this.chart, c = this.options, d = b.renderer, f = b.inverted, g = this.clipBox, e = this.getClipBox(a), h = this.sharedClipKey || ["_sharedClip", a && a.duration, a && a.easing, a && a.defer, e.height, c.xAxis, c.yAxis].join(), k = b[h], m = b[h + "m"]; a && (e.width = 0, f && (e.x = b.plotHeight + (!1 !== c.clip ? 0 : b.plotTop))); k ? b.hasLoaded || k.attr(e) : (a && (b[h + "m"] = m = d.clipRect(f ? b.plotSizeX + 99 : -99, f ? -b.plotLeft :
                        -b.plotTop, 99, f ? b.chartWidth : b.chartHeight)), b[h] = k = d.clipRect(e), k.count = { length: 0 }); a && !k.count[this.index] && (k.count[this.index] = !0, k.count.length += 1); if (!1 !== c.clip || a) this.group.clip(a || g ? k : b.clipRect), this.markerGroup.clip(m), this.sharedClipKey = h; a || (k.count[this.index] && (delete k.count[this.index], --k.count.length), 0 === k.count.length && h && b[h] && (g || (b[h] = b[h].destroy()), b[h + "m"] && (b[h + "m"] = b[h + "m"].destroy())))
                }; b.prototype.animate = function (a) {
                    var b = this.chart, c = A(this.options.animation); if (a) this.setClip(c);
                    else { var d = this.sharedClipKey; a = b[d]; var f = this.getClipBox(c, !0); a && a.animate(f, c); b[d + "m"] && b[d + "m"].animate({ width: f.width + 99, x: f.x - (b.inverted ? 0 : 99) }, c) }
                }; b.prototype.afterAnimate = function () { this.setClip(); K(this, "afterAnimate"); this.finishedAnimating = !0 }; b.prototype.drawPoints = function () {
                    var a = this.points, b = this.chart, c, d, f = this.options.marker, g = this[this.specialGroup] || this.markerGroup, e = this.xAxis, h = R(f.enabled, !e || e.isRadial ? !0 : null, this.closestPointRangePx >= f.enabledThreshold * f.radius); if (!1 !==
                        f.enabled || this._hasPointMarkers) for (c = 0; c < a.length; c++) {
                            var k = a[c]; var m = (d = k.graphic) ? "animate" : "attr"; var p = k.marker || {}; var n = !!k.marker; if ((h && "undefined" === typeof p.enabled || p.enabled) && !k.isNull && !1 !== k.visible) {
                                var q = R(p.symbol, this.symbol); var l = this.markerAttribs(k, k.selected && "select"); this.enabledDataSorting && (k.startXPos = e.reversed ? -l.width : e.width); var t = !1 !== k.isInside; d ? d[t ? "show" : "hide"](t).animate(l) : t && (0 < l.width || k.hasImage) && (k.graphic = d = b.renderer.symbol(q, l.x, l.y, l.width, l.height,
                                    n ? p : f).add(g), this.enabledDataSorting && b.hasRendered && (d.attr({ x: k.startXPos }), m = "animate")); d && "animate" === m && d[t ? "show" : "hide"](t).animate(l); if (d && !b.styledMode) d[m](this.pointAttribs(k, k.selected && "select")); d && d.addClass(k.getClassName(), !0)
                            } else d && (k.graphic = d.destroy())
                        }
                }; b.prototype.markerAttribs = function (a, b) {
                    var c = this.options, d = c.marker, f = a.marker || {}, g = f.symbol || d.symbol, e = R(f.radius, d.radius); b && (d = d.states[b], b = f.states && f.states[b], e = R(b && b.radius, d && d.radius, e + (d && d.radiusPlus || 0)));
                    a.hasImage = g && 0 === g.indexOf("url"); a.hasImage && (e = 0); a = { x: c.crisp ? Math.floor(a.plotX) - e : a.plotX - e, y: a.plotY - e }; e && (a.width = a.height = 2 * e); return a
                }; b.prototype.pointAttribs = function (a, b) {
                    var c = this.options.marker, d = a && a.options, f = d && d.marker || {}, g = this.color, e = d && d.color, h = a && a.color; d = R(f.lineWidth, c.lineWidth); var k = a && a.zone && a.zone.color; a = 1; g = e || k || h || g; e = f.fillColor || c.fillColor || g; g = f.lineColor || c.lineColor || g; b = b || "normal"; c = c.states[b]; b = f.states && f.states[b] || {}; d = R(b.lineWidth, c.lineWidth,
                        d + R(b.lineWidthPlus, c.lineWidthPlus, 0)); e = b.fillColor || c.fillColor || e; g = b.lineColor || c.lineColor || g; a = R(b.opacity, c.opacity, a); return { stroke: g, "stroke-width": d, fill: e, opacity: a }
                }; b.prototype.destroy = function (a) {
                    var b = this, c = b.chart, d = /AppleWebKit\/533/.test(q.navigator.userAgent), f, g, e = b.data || [], k, m; K(b, "destroy"); this.removeEvents(a); (b.axisTypes || []).forEach(function (a) { (m = b[a]) && m.series && (h(m.series, b), m.isDirty = m.forceRedraw = !0) }); b.legendItem && b.chart.legend.destroyItem(b); for (g = e.length; g--;)(k =
                        e[g]) && k.destroy && k.destroy(); b.points = null; r.clearTimeout(b.animationTimeout); u(b, function (a, b) { a instanceof H && !a.survive && (f = d && "group" === b ? "hide" : "destroy", a[f]()) }); c.hoverSeries === b && (c.hoverSeries = null); h(c.series, b); c.orderSeries(); u(b, function (c, d) { a && "hcEvents" === d || delete b[d] })
                }; b.prototype.applyZones = function () {
                    var a = this, b = this.chart, c = b.renderer, d = this.zones, f, g, e = this.clips || [], h, k = this.graph, m = this.area, p = Math.max(b.chartWidth, b.chartHeight), n = this[(this.zoneAxis || "y") + "Axis"], q =
                        b.inverted, l, t, v, r = !1, y, u; if (d.length && (k || m) && n && "undefined" !== typeof n.min) {
                            var C = n.reversed; var B = n.horiz; k && !this.showLine && k.hide(); m && m.hide(); var A = n.getExtremes(); d.forEach(function (d, x) {
                                f = C ? B ? b.plotWidth : 0 : B ? 0 : n.toPixels(A.min) || 0; f = z(R(g, f), 0, p); g = z(Math.round(n.toPixels(R(d.value, A.max), !0) || 0), 0, p); r && (f = g = n.toPixels(A.max)); l = Math.abs(f - g); t = Math.min(f, g); v = Math.max(f, g); n.isXAxis ? (h = { x: q ? v : t, y: 0, width: l, height: p }, B || (h.x = b.plotHeight - h.x)) : (h = { x: 0, y: q ? v : t, width: p, height: l }, B && (h.y = b.plotWidth -
                                    h.y)); q && c.isVML && (h = n.isXAxis ? { x: 0, y: C ? t : v, height: h.width, width: b.chartWidth } : { x: h.y - b.plotLeft - b.spacingBox.x, y: 0, width: h.height, height: b.chartHeight }); e[x] ? e[x].animate(h) : e[x] = c.clipRect(h); y = a["zone-area-" + x]; u = a["zone-graph-" + x]; k && u && u.clip(e[x]); m && y && y.clip(e[x]); r = d.value > A.max; a.resetZones && 0 === g && (g = void 0)
                            }); this.clips = e
                        } else a.visible && (k && k.show(!0), m && m.show(!0))
                }; b.prototype.invertGroups = function (a) {
                    function b() {
                        ["group", "markerGroup"].forEach(function (b) {
                        c[b] && (d.renderer.isVML &&
                            c[b].attr({ width: c.yAxis.len, height: c.xAxis.len }), c[b].width = c.yAxis.len, c[b].height = c.xAxis.len, c[b].invert(c.isRadialSeries ? !1 : a))
                        })
                    } var c = this, d = c.chart; c.xAxis && (c.eventsToUnbind.push(B(d, "resize", b)), b(), c.invertGroups = b)
                }; b.prototype.plotGroup = function (a, b, c, f, g) {
                    var e = this[a], h = !e; c = { visibility: c, zIndex: f || .1 }; "undefined" === typeof this.opacity || this.chart.styledMode || "inactive" === this.state || (c.opacity = this.opacity); h && (this[a] = e = this.chart.renderer.g().add(g)); e.addClass("highcharts-" + b + " highcharts-series-" +
                        this.index + " highcharts-" + this.type + "-series " + (d(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (e.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), !0); e.attr(c)[h ? "attr" : "animate"](this.getPlotBox()); return e
                }; b.prototype.getPlotBox = function () { var a = this.chart, b = this.xAxis, c = this.yAxis; a.inverted && (b = c, c = this.xAxis); return { translateX: b ? b.left : a.plotLeft, translateY: c ? c.top : a.plotTop, scaleX: 1, scaleY: 1 } }; b.prototype.removeEvents = function (a) {
                    a || n(this);
                    this.eventsToUnbind.length && (this.eventsToUnbind.forEach(function (a) { a() }), this.eventsToUnbind.length = 0)
                }; b.prototype.render = function () {
                    var a = this, b = a.chart, c = a.options, d = A(c.animation), f = !a.finishedAnimating && b.renderer.isSVG && d.duration, g = a.visible ? "inherit" : "hidden", e = c.zIndex, h = a.hasRendered, k = b.seriesGroup, m = b.inverted; K(this, "render"); var p = a.plotGroup("group", "series", g, e, k); a.markerGroup = a.plotGroup("markerGroup", "markers", g, e, k); f && a.animate && a.animate(!0); p.inverted = a.isCartesian || a.invertable ?
                        m : !1; a.drawGraph && (a.drawGraph(), a.applyZones()); a.visible && a.drawPoints(); a.drawDataLabels && a.drawDataLabels(); a.redrawPoints && a.redrawPoints(); a.drawTracker && !1 !== a.options.enableMouseTracking && a.drawTracker(); a.invertGroups(m); !1 === c.clip || a.sharedClipKey || h || p.clip(b.clipRect); f && a.animate && a.animate(); h || (f && d.defer && (f += d.defer), a.animationTimeout = U(function () { a.afterAnimate() }, f || 0)); a.isDirty = !1; a.hasRendered = !0; K(a, "afterRender")
                }; b.prototype.redraw = function () {
                    var a = this.chart, b = this.isDirty ||
                        this.isDirtyData, c = this.group, d = this.xAxis, f = this.yAxis; c && (a.inverted && c.attr({ width: a.plotWidth, height: a.plotHeight }), c.animate({ translateX: R(d && d.left, a.plotLeft), translateY: R(f && f.top, a.plotTop) })); this.translate(); this.render(); b && delete this.kdTree
                }; b.prototype.searchPoint = function (a, b) { var c = this.xAxis, d = this.yAxis, f = this.chart.inverted; return this.searchKDTree({ clientX: f ? c.len - a.chartY + c.pos : a.chartX - c.pos, plotY: f ? d.len - a.chartX + d.pos : a.chartY - d.pos }, b, a) }; b.prototype.buildKDTree = function (a) {
                    function b(a,
                        d, f) { var g; if (g = a && a.length) { var e = c.kdAxisArray[d % f]; a.sort(function (a, b) { return a[e] - b[e] }); g = Math.floor(g / 2); return { point: a[g], left: b(a.slice(0, g), d + 1, f), right: b(a.slice(g + 1), d + 1, f) } } } this.buildingKdTree = !0; var c = this, d = -1 < c.options.findNearestPointBy.indexOf("y") ? 2 : 1; delete c.kdTree; U(function () { c.kdTree = b(c.getValidPoints(null, !c.directTouch), d, d); c.buildingKdTree = !1 }, c.options.kdNow || a && "touchstart" === a.type ? 0 : 1)
                }; b.prototype.searchKDTree = function (a, b, c) {
                    function f(a, b, c, m) {
                        var p = b.point, n =
                            g.kdAxisArray[c % m], q = p; var l = d(a[e]) && d(p[e]) ? Math.pow(a[e] - p[e], 2) : null; var t = d(a[h]) && d(p[h]) ? Math.pow(a[h] - p[h], 2) : null; t = (l || 0) + (t || 0); p.dist = d(t) ? Math.sqrt(t) : Number.MAX_VALUE; p.distX = d(l) ? Math.sqrt(l) : Number.MAX_VALUE; n = a[n] - p[n]; t = 0 > n ? "left" : "right"; l = 0 > n ? "right" : "left"; b[t] && (t = f(a, b[t], c + 1, m), q = t[k] < q[k] ? t : p); b[l] && Math.sqrt(n * n) < q[k] && (a = f(a, b[l], c + 1, m), q = a[k] < q[k] ? a : q); return q
                    } var g = this, e = this.kdAxisArray[0], h = this.kdAxisArray[1], k = b ? "distX" : "dist"; b = -1 < g.options.findNearestPointBy.indexOf("y") ?
                        2 : 1; this.kdTree || this.buildingKdTree || this.buildKDTree(c); if (this.kdTree) return f(a, this.kdTree, b, b)
                }; b.prototype.pointPlacementToXValue = function () { var a = this.options, b = a.pointRange, c = this.xAxis; a = a.pointPlacement; "between" === a && (a = c.reversed ? -.5 : .5); return S(a) ? a * (b || c.pointRange) : 0 }; b.prototype.isPointInside = function (a) { return "undefined" !== typeof a.plotY && "undefined" !== typeof a.plotX && 0 <= a.plotY && a.plotY <= this.yAxis.len && 0 <= a.plotX && a.plotX <= this.xAxis.len }; b.prototype.drawTracker = function () {
                    var a =
                        this, b = a.options, c = b.trackByArea, d = [].concat(c ? a.areaPath : a.graphPath), f = a.chart, e = f.pointer, h = f.renderer, k = f.options.tooltip.snap, m = a.tracker, p = function (b) { if (f.hoverSeries !== a) a.onMouseOver() }, n = "rgba(192,192,192," + (g ? .0001 : .002) + ")"; m ? m.attr({ d: d }) : a.graph && (a.tracker = h.path(d).attr({ visibility: a.visible ? "visible" : "hidden", zIndex: 2 }).addClass(c ? "highcharts-tracker-area" : "highcharts-tracker-line").add(a.group), f.styledMode || a.tracker.attr({
                            "stroke-linecap": "round", "stroke-linejoin": "round", stroke: n,
                            fill: c ? n : "none", "stroke-width": a.graph.strokeWidth() + (c ? 0 : 2 * k)
                        }), [a.tracker, a.markerGroup].forEach(function (a) { a.addClass("highcharts-tracker").on("mouseover", p).on("mouseout", function (a) { e.onTrackerMouseOut(a) }); b.cursor && !f.styledMode && a.css({ cursor: b.cursor }); if (C) a.on("touchstart", p) })); K(this, "afterDrawTracker")
                }; b.prototype.addPoint = function (a, b, c, d, f) {
                    var g = this.options, e = this.data, h = this.chart, k = this.xAxis; k = k && k.hasNames && k.names; var m = g.data, p = this.xData, n; b = R(b, !0); var q = { series: this };
                    this.pointClass.prototype.applyOptions.apply(q, [a]); var l = q.x; var t = p.length; if (this.requireSorting && l < p[t - 1]) for (n = !0; t && p[t - 1] > l;)t--; this.updateParallelArrays(q, "splice", t, 0, 0); this.updateParallelArrays(q, t); k && q.name && (k[l] = q.name); m.splice(t, 0, a); n && (this.data.splice(t, 0, null), this.processData()); "point" === g.legendType && this.generatePoints(); c && (e[0] && e[0].remove ? e[0].remove(!1) : (e.shift(), this.updateParallelArrays(q, "shift"), m.shift())); !1 !== f && K(this, "addPoint", { point: q }); this.isDirtyData =
                        this.isDirty = !0; b && h.redraw(d)
                }; b.prototype.removePoint = function (a, b, c) { var d = this, f = d.data, g = f[a], e = d.points, h = d.chart, m = function () { e && e.length === f.length && e.splice(a, 1); f.splice(a, 1); d.options.data.splice(a, 1); d.updateParallelArrays(g || { series: d }, "splice", a, 1); g && g.destroy(); d.isDirty = !0; d.isDirtyData = !0; b && h.redraw() }; k(c, h); b = R(b, !0); g ? g.firePointEvent("remove", null, m) : m() }; b.prototype.remove = function (a, b, c, d) {
                    function f() { g.destroy(d); e.isDirtyLegend = e.isDirtyBox = !0; e.linkSeries(); R(a, !0) && e.redraw(b) }
                    var g = this, e = g.chart; !1 !== c ? K(g, "remove", null, f) : f()
                }; b.prototype.update = function (b, d) {
                    b = m(b, this.userOptions); K(this, "update", { options: b }); var f = this, g = f.chart, e = f.userOptions, h = f.initialType || f.type, k = g.options.plotOptions, n = b.type || e.type || g.options.chart.type, q = !(this.hasDerivedData || n && n !== this.type || "undefined" !== typeof b.pointStart || "undefined" !== typeof b.pointInterval || f.hasOptionChanged("dataGrouping") || f.hasOptionChanged("pointStart") || f.hasOptionChanged("pointInterval") || f.hasOptionChanged("pointIntervalUnit") ||
                        f.hasOptionChanged("keys")), l = p[h].prototype, t, v = ["eventOptions", "navigatorSeries", "baseSeries"], r = f.finishedAnimating && { animation: !1 }, y = {}; q && (v.push("data", "isDirtyData", "points", "processedXData", "processedYData", "xIncrement", "cropped", "_hasPointMarkers", "_hasPointLabels", "nodes", "layout", "mapMap", "mapData", "minY", "maxY", "minX", "maxX"), !1 !== b.visible && v.push("area", "graph"), f.parallelArrays.forEach(function (a) { v.push(a + "Data") }), b.data && (b.dataSorting && c(f.options.dataSorting, b.dataSorting), this.setData(b.data,
                            !1))); b = G(e, r, { index: "undefined" === typeof e.index ? f.index : e.index, pointStart: R(k && k.series && k.series.pointStart, e.pointStart, f.xData[0]) }, !q && { data: f.options.data }, b); q && b.data && (b.data = f.options.data); v = ["group", "markerGroup", "dataLabelsGroup", "transformGroup"].concat(v); v.forEach(function (a) { v[a] = f[a]; delete f[a] }); if (p[n || h]) {
                                if (e = n !== f.type, f.remove(!1, !1, !1, !0), e) if (Object.setPrototypeOf) Object.setPrototypeOf(f, p[n || h].prototype); else {
                                    e = Object.hasOwnProperty.call(f, "hcEvents") && f.hcEvents; for (t in l) f[t] =
                                        void 0; c(f, p[n || h].prototype); e ? f.hcEvents = e : delete f.hcEvents
                                }
                            } else a(17, !0, g, { missingModuleFor: n || h }); v.forEach(function (a) { f[a] = v[a] }); f.init(g, b); if (q && this.points) {
                                var u = f.options; !1 === u.visible ? (y.graphic = 1, y.dataLabel = 1) : f._hasPointLabels || (b = u.marker, n = u.dataLabels, b && (!1 === b.enabled || "symbol" in b) && (y.graphic = 1), n && !1 === n.enabled && (y.dataLabel = 1)); this.points.forEach(function (a) {
                                a && a.series && (a.resolveColor(), Object.keys(y).length && a.destroyElements(y), !1 === u.showInLegend && a.legendItem &&
                                    g.legend.destroyItem(a))
                                }, this)
                            } f.initialType = h; g.linkSeries(); K(this, "afterUpdate"); R(d, !0) && g.redraw(q ? void 0 : !1)
                }; b.prototype.setName = function (a) { this.name = this.options.name = this.userOptions.name = a; this.chart.isDirtyLegend = !0 }; b.prototype.hasOptionChanged = function (a) { var b = this.options[a], c = this.chart.options.plotOptions, d = this.userOptions[a]; return d ? b !== d : b !== R(c && c[this.type] && c[this.type][a], c && c.series && c.series[a], b) }; b.prototype.onMouseOver = function () {
                    var a = this.chart, b = a.hoverSeries; a.pointer.setHoverChartIndex();
                    if (b && b !== this) b.onMouseOut(); this.options.events.mouseOver && K(this, "mouseOver"); this.setState("hover"); a.hoverSeries = this
                }; b.prototype.onMouseOut = function () { var a = this.options, b = this.chart, c = b.tooltip, d = b.hoverPoint; b.hoverSeries = null; if (d) d.onMouseOut(); this && a.events.mouseOut && K(this, "mouseOut"); !c || this.stickyTracking || c.shared && !this.noSharedTooltip || c.hide(); b.series.forEach(function (a) { a.setState("", !0) }) }; b.prototype.setState = function (a, b) {
                    var c = this, d = c.options, f = c.graph, g = d.inactiveOtherPoints,
                    e = d.states, h = d.lineWidth, k = d.opacity, m = R(e[a || "normal"] && e[a || "normal"].animation, c.chart.options.chart.animation); d = 0; a = a || ""; if (c.state !== a && ([c.group, c.markerGroup, c.dataLabelsGroup].forEach(function (b) { b && (c.state && b.removeClass("highcharts-series-" + c.state), a && b.addClass("highcharts-series-" + a)) }), c.state = a, !c.chart.styledMode)) {
                        if (e[a] && !1 === e[a].enabled) return; a && (h = e[a].lineWidth || h + (e[a].lineWidthPlus || 0), k = R(e[a].opacity, k)); if (f && !f.dashstyle) for (e = { "stroke-width": h }, f.animate(e, m); c["zone-graph-" +
                            d];)c["zone-graph-" + d].attr(e), d += 1; g || [c.group, c.markerGroup, c.dataLabelsGroup, c.labelBySeries].forEach(function (a) { a && a.animate({ opacity: k }, m) })
                    } b && g && c.points && c.setAllPointsToState(a || void 0)
                }; b.prototype.setAllPointsToState = function (a) { this.points.forEach(function (b) { b.setState && b.setState(a) }) }; b.prototype.setVisible = function (a, b) {
                    var c = this, d = c.chart, f = c.legendItem, g = d.options.chart.ignoreHiddenSeries, e = c.visible; var h = (c.visible = a = c.options.visible = c.userOptions.visible = "undefined" === typeof a ?
                        !e : a) ? "show" : "hide";["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"].forEach(function (a) { if (c[a]) c[a][h]() }); if (d.hoverSeries === c || (d.hoverPoint && d.hoverPoint.series) === c) c.onMouseOut(); f && d.legend.colorizeItem(c, a); c.isDirty = !0; c.options.stacking && d.series.forEach(function (a) { a.options.stacking && a.visible && (a.isDirty = !0) }); c.linkedSeries.forEach(function (b) { b.setVisible(a, !1) }); g && (d.isDirtyBox = !0); K(c, h); !1 !== b && d.redraw()
                }; b.prototype.show = function () { this.setVisible(!0) }; b.prototype.hide =
                    function () { this.setVisible(!1) }; b.prototype.select = function (a) { this.selected = a = this.options.selected = "undefined" === typeof a ? !this.selected : a; this.checkbox && (this.checkbox.checked = a); K(this, a ? "select" : "unselect") }; b.defaultOptions = {
                        lineWidth: 2, allowPointSelect: !1, crisp: !0, showCheckbox: !1, animation: { duration: 1E3 }, events: {}, marker: {
                            enabledThreshold: 2, lineColor: D.backgroundColor, lineWidth: 0, radius: 4, states: {
                                normal: { animation: !0 }, hover: { animation: { duration: 50 }, enabled: !0, radiusPlus: 2, lineWidthPlus: 1 },
                                select: { fillColor: D.neutralColor20, lineColor: D.neutralColor100, lineWidth: 2 }
                            }
                        }, point: { events: {} }, dataLabels: { animation: {}, align: "center", defer: !0, formatter: function () { var a = this.series.chart.numberFormatter; return "number" !== typeof this.y ? "" : a(this.y, -1) }, padding: 5, style: { fontSize: "11px", fontWeight: "bold", color: "contrast", textOutline: "1px contrast" }, verticalAlign: "bottom", x: 0, y: 0 }, cropThreshold: 300, opacity: 1, pointRange: 0, softThreshold: !0, states: {
                            normal: { animation: !0 }, hover: {
                                animation: { duration: 50 },
                                lineWidthPlus: 1, marker: {}, halo: { size: 10, opacity: .25 }
                            }, select: { animation: { duration: 0 } }, inactive: { animation: { duration: 50 }, opacity: .2 }
                        }, stickyTracking: !0, turboThreshold: 1E3, findNearestPointBy: "x"
                    }; return b
            }(); c(e.prototype, { axisTypes: ["xAxis", "yAxis"], coll: "series", colorCounter: 0, cropShoulder: 1, directTouch: !1, drawLegendSymbol: l.drawLineMarker, isCartesian: !0, kdAxisArray: ["clientX", "plotY"], parallelArrays: ["x", "y"], pointClass: F, requireSorting: !0, sorted: !0 }); E.series = e; ""; ""; return e
    }); O(l, "Core/Axis/StackingAxis.js",
        [l["Core/Animation/AnimationUtilities.js"], l["Core/Utilities.js"]], function (e, b) {
            var l = e.getDeferredAnimation, w = b.addEvent, D = b.destroyObjectProperties, F = b.fireEvent, E = b.objectEach, H = b.pick, r = function () {
                function b(b) { this.oldStacks = {}; this.stacks = {}; this.stacksTouched = 0; this.axis = b } b.prototype.buildStacks = function () {
                    var b = this.axis, e = b.series, g = H(b.options.reversedStacks, !0), q = e.length, f; if (!b.isXAxis) {
                    this.usePercentage = !1; for (f = q; f--;) { var p = e[g ? f : q - f - 1]; p.setStackedPoints(); p.setGroupedPoints() } for (f =
                        0; f < q; f++)e[f].modifyStacks(); F(b, "afterBuildStacks")
                    }
                }; b.prototype.cleanStacks = function () { if (!this.axis.isXAxis) { if (this.oldStacks) var b = this.stacks = this.oldStacks; E(b, function (b) { E(b, function (b) { b.cumulative = b.total }) }) } }; b.prototype.resetStacks = function () { var b = this, e = b.stacks; b.axis.isXAxis || E(e, function (g) { E(g, function (e, f) { e.touched < b.stacksTouched ? (e.destroy(), delete g[f]) : (e.total = null, e.cumulative = null) }) }) }; b.prototype.renderStackTotals = function () {
                    var b = this.axis, e = b.chart, g = e.renderer,
                    q = this.stacks; b = l(e, b.options.stackLabels.animation); var f = this.stackTotalGroup = this.stackTotalGroup || g.g("stack-labels").attr({ visibility: "visible", zIndex: 6, opacity: 0 }).add(); f.translate(e.plotLeft, e.plotTop); E(q, function (b) { E(b, function (b) { b.render(f) }) }); f.animate({ opacity: 1 }, b)
                }; return b
            }(); return function () {
                function b() { } b.compose = function (e) { w(e, "init", b.onInit); w(e, "destroy", b.onDestroy) }; b.onDestroy = function () {
                    var b = this.stacking; if (b) {
                        var e = b.stacks; E(e, function (b, k) { D(b); e[k] = null }); b &&
                            b.stackTotalGroup && b.stackTotalGroup.destroy()
                    }
                }; b.onInit = function () { this.stacking || (this.stacking = new r(this)) }; return b
            }()
        }); O(l, "Extensions/Stacking.js", [l["Core/Axis/Axis.js"], l["Core/Chart/Chart.js"], l["Core/Globals.js"], l["Core/Series/Series.js"], l["Core/Axis/StackingAxis.js"], l["Core/Utilities.js"]], function (e, b, l, w, D, F) {
            var E = F.correctFloat, H = F.defined, r = F.destroyObjectProperties, A = F.format, k = F.isNumber, C = F.pick; ""; var g = function () {
                function b(b, g, e, k, q) {
                    var f = b.chart.inverted; this.axis = b;
                    this.isNegative = e; this.options = g = g || {}; this.x = k; this.total = null; this.points = {}; this.hasValidPoints = !1; this.stack = q; this.rightCliff = this.leftCliff = 0; this.alignOptions = { align: g.align || (f ? e ? "left" : "right" : "center"), verticalAlign: g.verticalAlign || (f ? "middle" : e ? "bottom" : "top"), y: g.y, x: g.x }; this.textAlign = g.textAlign || (f ? e ? "right" : "left" : "center")
                } b.prototype.destroy = function () { r(this, this.axis) }; b.prototype.render = function (b) {
                    var f = this.axis.chart, g = this.options, e = g.format; e = e ? A(e, this, f) : g.formatter.call(this);
                    this.label ? this.label.attr({ text: e, visibility: "hidden" }) : (this.label = f.renderer.label(e, null, null, g.shape, null, null, g.useHTML, !1, "stack-labels"), e = { r: g.borderRadius || 0, text: e, rotation: g.rotation, padding: C(g.padding, 5), visibility: "hidden" }, f.styledMode || (e.fill = g.backgroundColor, e.stroke = g.borderColor, e["stroke-width"] = g.borderWidth, this.label.css(g.style)), this.label.attr(e), this.label.added || this.label.add(b)); this.label.labelrank = f.plotSizeY
                }; b.prototype.setOffset = function (b, g, e, q, l) {
                    var f = this.axis,
                    m = f.chart; q = f.translate(f.stacking.usePercentage ? 100 : q ? q : this.total, 0, 0, 0, 1); e = f.translate(e ? e : 0); e = H(q) && Math.abs(q - e); b = C(l, m.xAxis[0].translate(this.x)) + b; f = H(q) && this.getStackBox(m, this, b, q, g, e, f); g = this.label; e = this.isNegative; b = "justify" === C(this.options.overflow, "justify"); var p = this.textAlign; g && f && (l = g.getBBox(), q = g.padding, p = "left" === p ? m.inverted ? -q : q : "right" === p ? l.width : m.inverted && "center" === p ? l.width / 2 : m.inverted ? e ? l.width + q : -q : l.width / 2, e = m.inverted ? l.height / 2 : e ? -q : l.height, this.alignOptions.x =
                        C(this.options.x, 0), this.alignOptions.y = C(this.options.y, 0), f.x -= p, f.y -= e, g.align(this.alignOptions, null, f), m.isInsidePlot(g.alignAttr.x + p - this.alignOptions.x, g.alignAttr.y + e - this.alignOptions.y) ? g.show() : (g.alignAttr.y = -9999, b = !1), b && w.prototype.justifyDataLabel.call(this.axis, g, this.alignOptions, g.alignAttr, l, f), g.attr({ x: g.alignAttr.x, y: g.alignAttr.y }), C(!b && this.options.crop, !0) && ((m = k(g.x) && k(g.y) && m.isInsidePlot(g.x - q + g.width, g.y) && m.isInsidePlot(g.x + q, g.y)) || g.hide()))
                }; b.prototype.getStackBox =
                    function (b, g, e, k, q, l, m) { var f = g.axis.reversed, d = b.inverted, h = m.height + m.pos - (d ? b.plotLeft : b.plotTop); g = g.isNegative && !f || !g.isNegative && f; return { x: d ? g ? k - m.right : k - l + m.pos - b.plotLeft : e + b.xAxis[0].transB - b.plotLeft, y: d ? m.height - e - q : g ? h - k - l : h - k, width: d ? l : q, height: d ? q : l } }; return b
            }(); b.prototype.getStacks = function () {
                var b = this, f = b.inverted; b.yAxis.forEach(function (b) { b.stacking && b.stacking.stacks && b.hasVisibleSeries && (b.stacking.oldStacks = b.stacking.stacks) }); b.series.forEach(function (g) {
                    var e = g.xAxis &&
                        g.xAxis.options || {}; !g.options.stacking || !0 !== g.visible && !1 !== b.options.chart.ignoreHiddenSeries || (g.stackKey = [g.type, C(g.options.stack, ""), f ? e.top : e.left, f ? e.height : e.width].join())
                })
            }; D.compose(e); w.prototype.setGroupedPoints = function () { this.options.centerInCategory && (this.is("column") || this.is("columnrange")) && !this.options.stacking && 1 < this.chart.series.length && w.prototype.setStackedPoints.call(this, "group") }; w.prototype.setStackedPoints = function (b) {
                var f = b || this.options.stacking; if (f && (!0 === this.visible ||
                    !1 === this.chart.options.chart.ignoreHiddenSeries)) {
                        var e = this.processedXData, k = this.processedYData, l = [], q = k.length, r = this.options, m = r.threshold, t = C(r.startFromThreshold && m, 0); r = r.stack; b = b ? this.type + "," + f : this.stackKey; var d = "-" + b, h = this.negStacks, a = this.yAxis, c = a.stacking.stacks, v = a.stacking.oldStacks, A, w; a.stacking.stacksTouched += 1; for (w = 0; w < q; w++) {
                            var y = e[w]; var L = k[w]; var D = this.getStackIndicator(D, y, this.index); var N = D.key; var G = (A = h && L < (t ? 0 : m)) ? d : b; c[G] || (c[G] = {}); c[G][y] || (v[G] && v[G][y] ? (c[G][y] =
                                v[G][y], c[G][y].total = null) : c[G][y] = new g(a, a.options.stackLabels, A, y, r)); G = c[G][y]; null !== L ? (G.points[N] = G.points[this.index] = [C(G.cumulative, t)], H(G.cumulative) || (G.base = N), G.touched = a.stacking.stacksTouched, 0 < D.index && !1 === this.singleStacks && (G.points[N][0] = G.points[this.index + "," + y + ",0"][0])) : G.points[N] = G.points[this.index] = null; "percent" === f ? (A = A ? b : d, h && c[A] && c[A][y] ? (A = c[A][y], G.total = A.total = Math.max(A.total, G.total) + Math.abs(L) || 0) : G.total = E(G.total + (Math.abs(L) || 0))) : "group" === f ? null !==
                                    L && (G.total = (G.total || 0) + 1) : G.total = E(G.total + (L || 0)); G.cumulative = "group" === f ? (G.total || 1) - 1 : C(G.cumulative, t) + (L || 0); null !== L && (G.points[N].push(G.cumulative), l[w] = G.cumulative, G.hasValidPoints = !0)
                        } "percent" === f && (a.stacking.usePercentage = !0); "group" !== f && (this.stackedYData = l); a.stacking.oldStacks = {}
                }
            }; w.prototype.modifyStacks = function () {
                var b = this, f = b.stackKey, g = b.yAxis.stacking.stacks, e = b.processedXData, k, l = b.options.stacking; b[l + "Stacker"] && [f, "-" + f].forEach(function (f) {
                    for (var m = e.length, p,
                        d; m--;)if (p = e[m], k = b.getStackIndicator(k, p, b.index, f), d = (p = g[f] && g[f][p]) && p.points[k.key]) b[l + "Stacker"](d, p, m)
                })
            }; w.prototype.percentStacker = function (b, f, g) { f = f.total ? 100 / f.total : 0; b[0] = E(b[0] * f); b[1] = E(b[1] * f); this.stackedYData[g] = b[1] }; w.prototype.getStackIndicator = function (b, f, g, e) { !H(b) || b.x !== f || e && b.key !== e ? b = { x: f, index: 0, key: e } : b.index++; b.key = [g, f, b.index].join(); return b }; l.StackItem = g; return l.StackItem
        }); O(l, "Series/Line/LineSeries.js", [l["Core/Color/Palette.js"], l["Core/Series/Series.js"],
        l["Core/Series/SeriesRegistry.js"], l["Core/Utilities.js"]], function (e, b, l, w) {
            var D = this && this.__extends || function () { var b = function (e, l) { b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, e) { b.__proto__ = e } || function (b, e) { for (var g in e) e.hasOwnProperty(g) && (b[g] = e[g]) }; return b(e, l) }; return function (e, l) { function k() { this.constructor = e } b(e, l); e.prototype = null === l ? Object.create(l) : (k.prototype = l.prototype, new k) } }(), F = w.defined, E = w.merge; w = function (l) {
                function r() {
                    var b = null !== l && l.apply(this,
                        arguments) || this; b.data = void 0; b.options = void 0; b.points = void 0; return b
                } D(r, l); r.prototype.drawGraph = function () {
                    var b = this, k = this.options, l = (this.gappedPath || this.getGraphPath).call(this), g = this.chart.styledMode, q = [["graph", "highcharts-graph"]]; g || q[0].push(k.lineColor || this.color || e.neutralColor20, k.dashStyle); q = b.getZonesGraphs(q); q.forEach(function (f, e) {
                        var p = f[0], q = b[p], r = q ? "animate" : "attr"; q ? (q.endX = b.preventGraphAnimation ? null : l.xMap, q.animate({ d: l })) : l.length && (b[p] = q = b.chart.renderer.path(l).addClass(f[1]).attr({ zIndex: 1 }).add(b.group));
                        q && !g && (p = { stroke: f[2], "stroke-width": k.lineWidth, fill: b.fillGraph && b.color || "none" }, f[3] ? p.dashstyle = f[3] : "square" !== k.linecap && (p["stroke-linecap"] = p["stroke-linejoin"] = "round"), q[r](p).shadow(2 > e && k.shadow)); q && (q.startX = l.xMap, q.isArea = l.isArea)
                    })
                }; r.prototype.getGraphPath = function (b, e, l) {
                    var g = this, k = g.options, f = k.step, p, r = [], C = [], A; b = b || g.points; (p = b.reversed) && b.reverse(); (f = { right: 1, center: 2 }[f] || f && 3) && p && (f = 4 - f); b = this.getValidPoints(b, !1, !(k.connectNulls && !e && !l)); b.forEach(function (p,
                        m) { var q = p.plotX, d = p.plotY, h = b[m - 1]; (p.leftCliff || h && h.rightCliff) && !l && (A = !0); p.isNull && !F(e) && 0 < m ? A = !k.connectNulls : p.isNull && !e ? A = !0 : (0 === m || A ? m = [["M", p.plotX, p.plotY]] : g.getPointSpline ? m = [g.getPointSpline(b, p, m)] : f ? (m = 1 === f ? [["L", h.plotX, d]] : 2 === f ? [["L", (h.plotX + q) / 2, h.plotY], ["L", (h.plotX + q) / 2, d]] : [["L", q, h.plotY]], m.push(["L", q, d])) : m = [["L", q, d]], C.push(p.x), f && (C.push(p.x), 2 === f && C.push(p.x)), r.push.apply(r, m), A = !1) }); r.xMap = C; return g.graphPath = r
                }; r.prototype.getZonesGraphs = function (b) {
                    this.zones.forEach(function (e,
                        l) { l = ["zone-graph-" + l, "highcharts-graph highcharts-zone-graph-" + l + " " + (e.className || "")]; this.chart.styledMode || l.push(e.color || this.color, e.dashStyle || this.options.dashStyle); b.push(l) }, this); return b
                }; r.defaultOptions = E(b.defaultOptions, {}); return r
            }(b); l.registerSeriesType("line", w); ""; return w
        }); O(l, "Series/Area/AreaSeries.js", [l["Core/Color/Color.js"], l["Mixins/LegendSymbol.js"], l["Core/Series/SeriesRegistry.js"], l["Core/Utilities.js"]], function (e, b, l, w) {
            var D = this && this.__extends || function () {
                var b =
                    function (e, g) { b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, f) { b.__proto__ = f } || function (b, f) { for (var g in f) f.hasOwnProperty(g) && (b[g] = f[g]) }; return b(e, g) }; return function (e, g) { function k() { this.constructor = e } b(e, g); e.prototype = null === g ? Object.create(g) : (k.prototype = g.prototype, new k) }
            }(), F = e.parse, E = l.seriesTypes.line; e = w.extend; var H = w.merge, r = w.objectEach, A = w.pick; w = function (b) {
                function e() {
                    var g = null !== b && b.apply(this, arguments) || this; g.data = void 0; g.options = void 0; g.points =
                        void 0; return g
                } D(e, b); e.prototype.drawGraph = function () {
                this.areaPath = []; b.prototype.drawGraph.apply(this); var g = this, e = this.areaPath, f = this.options, k = [["area", "highcharts-area", this.color, f.fillColor]]; this.zones.forEach(function (b, e) { k.push(["zone-area-" + e, "highcharts-area highcharts-zone-area-" + e + " " + b.className, b.color || g.color, b.fillColor || f.fillColor]) }); k.forEach(function (b) {
                    var k = b[0], p = g[k], l = p ? "animate" : "attr", m = {}; p ? (p.endX = g.preventGraphAnimation ? null : e.xMap, p.animate({ d: e })) : (m.zIndex =
                        0, p = g[k] = g.chart.renderer.path(e).addClass(b[1]).add(g.group), p.isArea = !0); g.chart.styledMode || (m.fill = A(b[3], F(b[2]).setOpacity(A(f.fillOpacity, .75)).get())); p[l](m); p.startX = e.xMap; p.shiftUnit = f.step ? 2 : 1
                })
                }; e.prototype.getGraphPath = function (b) {
                    var g = E.prototype.getGraphPath, f = this.options, e = f.stacking, k = this.yAxis, l, r = [], C = [], m = this.index, t = k.stacking.stacks[this.stackKey], d = f.threshold, h = Math.round(k.getThreshold(f.threshold)); f = A(f.connectNulls, "percent" === e); var a = function (a, c, f) {
                        var g = b[a];
                        a = e && t[g.x].points[m]; var p = g[f + "Null"] || 0; f = g[f + "Cliff"] || 0; g = !0; if (f || p) { var l = (p ? a[0] : a[1]) + f; var q = a[0] + f; g = !!p } else !e && b[c] && b[c].isNull && (l = q = d); "undefined" !== typeof l && (C.push({ plotX: v, plotY: null === l ? h : k.getThreshold(l), isNull: g, isCliff: !0 }), r.push({ plotX: v, plotY: null === q ? h : k.getThreshold(q), doCurve: !1 }))
                    }; b = b || this.points; e && (b = this.getStackPoints(b)); for (l = 0; l < b.length; l++) {
                        e || (b[l].leftCliff = b[l].rightCliff = b[l].leftNull = b[l].rightNull = void 0); var c = b[l].isNull; var v = A(b[l].rectPlotX, b[l].plotX);
                        var w = e ? A(b[l].yBottom, h) : h; if (!c || f) f || a(l, l - 1, "left"), c && !e && f || (C.push(b[l]), r.push({ x: l, plotX: v, plotY: w })), f || a(l, l + 1, "right")
                    } l = g.call(this, C, !0, !0); r.reversed = !0; c = g.call(this, r, !0, !0); (w = c[0]) && "M" === w[0] && (c[0] = ["L", w[1], w[2]]); c = l.concat(c); g = g.call(this, C, !1, f); c.xMap = l.xMap; this.areaPath = c; return g
                }; e.prototype.getStackPoints = function (b) {
                    var g = [], f = [], e = this.xAxis, k = this.yAxis, l = k.stacking.stacks[this.stackKey], C = {}, z = this.index, m = k.series, t = m.length, d = A(k.options.reversedStacks, !0) ? 1 :
                        -1, h; b = b || this.points; if (this.options.stacking) {
                            for (h = 0; h < b.length; h++)b[h].leftNull = b[h].rightNull = void 0, C[b[h].x] = b[h]; r(l, function (a, b) { null !== a.total && f.push(b) }); f.sort(function (a, b) { return a - b }); var a = m.map(function (a) { return a.visible }); f.forEach(function (b, m) {
                                var c = 0, p, q; if (C[b] && !C[b].isNull) g.push(C[b]), [-1, 1].forEach(function (c) {
                                    var g = 1 === c ? "rightNull" : "leftNull", e = 0, k = l[f[m + c]]; if (k) for (h = z; 0 <= h && h < t;)p = k.points[h], p || (h === z ? C[b][g] = !0 : a[h] && (q = l[b].points[h]) && (e -= q[1] - q[0])), h += d; C[b][1 ===
                                        c ? "rightCliff" : "leftCliff"] = e
                                }); else { for (h = z; 0 <= h && h < t;) { if (p = l[b].points[h]) { c = p[1]; break } h += d } c = k.translate(c, 0, 1, 0, 1); g.push({ isNull: !0, plotX: e.translate(b, 0, 0, 0, 1), x: b, plotY: c, yBottom: c }) }
                            })
                        } return g
                }; e.defaultOptions = H(E.defaultOptions, { threshold: 0 }); return e
            }(E); e(w.prototype, { singleStacks: !1, drawLegendSymbol: b.drawRectangle }); l.registerSeriesType("area", w); ""; return w
        }); O(l, "Series/Spline/SplineSeries.js", [l["Core/Series/SeriesRegistry.js"], l["Core/Utilities.js"]], function (e, b) {
            var l = this &&
                this.__extends || function () { var b = function (e, l) { b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, e) { b.__proto__ = e } || function (b, e) { for (var k in e) e.hasOwnProperty(k) && (b[k] = e[k]) }; return b(e, l) }; return function (e, l) { function r() { this.constructor = e } b(e, l); e.prototype = null === l ? Object.create(l) : (r.prototype = l.prototype, new r) } }(), w = e.seriesTypes.line, D = b.merge, F = b.pick; b = function (b) {
                    function e() {
                        var e = null !== b && b.apply(this, arguments) || this; e.data = void 0; e.options = void 0; e.points = void 0;
                        return e
                    } l(e, b); e.prototype.getPointSpline = function (b, e, k) {
                        var l = e.plotX || 0, g = e.plotY || 0, q = b[k - 1]; k = b[k + 1]; if (q && !q.isNull && !1 !== q.doCurve && !e.isCliff && k && !k.isNull && !1 !== k.doCurve && !e.isCliff) {
                            b = q.plotY || 0; var f = k.plotX || 0; k = k.plotY || 0; var p = 0; var r = (1.5 * l + (q.plotX || 0)) / 2.5; var A = (1.5 * g + b) / 2.5; f = (1.5 * l + f) / 2.5; var w = (1.5 * g + k) / 2.5; f !== r && (p = (w - A) * (f - l) / (f - r) + g - w); A += p; w += p; A > b && A > g ? (A = Math.max(b, g), w = 2 * g - A) : A < b && A < g && (A = Math.min(b, g), w = 2 * g - A); w > k && w > g ? (w = Math.max(k, g), A = 2 * g - w) : w < k && w < g && (w = Math.min(k,
                                g), A = 2 * g - w); e.rightContX = f; e.rightContY = w
                        } e = ["C", F(q.rightContX, q.plotX, 0), F(q.rightContY, q.plotY, 0), F(r, l, 0), F(A, g, 0), l, g]; q.rightContX = q.rightContY = void 0; return e
                    }; e.defaultOptions = D(w.defaultOptions); return e
                }(w); e.registerSeriesType("spline", b); ""; return b
        }); O(l, "Series/AreaSpline/AreaSplineSeries.js", [l["Series/Area/AreaSeries.js"], l["Series/Spline/SplineSeries.js"], l["Mixins/LegendSymbol.js"], l["Core/Series/SeriesRegistry.js"], l["Core/Utilities.js"]], function (e, b, l, w, D) {
            var F = this && this.__extends ||
                function () { var b = function (e, l) { b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, e) { b.__proto__ = e } || function (b, e) { for (var f in e) e.hasOwnProperty(f) && (b[f] = e[f]) }; return b(e, l) }; return function (e, l) { function g() { this.constructor = e } b(e, l); e.prototype = null === l ? Object.create(l) : (g.prototype = l.prototype, new g) } }(), E = e.prototype, H = D.extend, r = D.merge; D = function (l) {
                    function k() { var b = null !== l && l.apply(this, arguments) || this; b.data = void 0; b.points = void 0; b.options = void 0; return b } F(k, l);
                    k.defaultOptions = r(b.defaultOptions, e.defaultOptions); return k
                }(b); H(D.prototype, { getGraphPath: E.getGraphPath, getStackPoints: E.getStackPoints, drawGraph: E.drawGraph, drawLegendSymbol: l.drawRectangle }); w.registerSeriesType("areaspline", D); ""; return D
        }); O(l, "Series/Column/ColumnSeries.js", [l["Core/Animation/AnimationUtilities.js"], l["Core/Color/Color.js"], l["Core/Globals.js"], l["Mixins/LegendSymbol.js"], l["Core/Color/Palette.js"], l["Core/Series/Series.js"], l["Core/Series/SeriesRegistry.js"], l["Core/Utilities.js"]],
            function (e, b, l, w, D, F, E, H) {
                var r = this && this.__extends || function () { var b = function (d, a) { b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, b) { a.__proto__ = b } || function (a, b) { for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]) }; return b(d, a) }; return function (d, a) { function c() { this.constructor = d } b(d, a); d.prototype = null === a ? Object.create(a) : (c.prototype = a.prototype, new c) } }(), A = e.animObject, k = b.parse, C = l.hasTouch; e = l.noop; var g = H.clamp, q = H.css, f = H.defined, p = H.extend, B = H.fireEvent, I = H.isArray,
                    Q = H.isNumber, z = H.merge, m = H.pick, t = H.objectEach; H = function (b) {
                        function d() { var a = null !== b && b.apply(this, arguments) || this; a.borderWidth = void 0; a.data = void 0; a.group = void 0; a.options = void 0; a.points = void 0; return a } r(d, b); d.prototype.animate = function (a) {
                            var b = this, d = this.yAxis, f = b.options, e = this.chart.inverted, h = {}, k = e ? "translateX" : "translateY"; if (a) h.scaleY = .001, a = g(d.toPixels(f.threshold), d.pos, d.pos + d.len), e ? h.translateX = a - d.len : h.translateY = a, b.clipBox && b.setClip(), b.group.attr(h); else {
                                var m = b.group.attr(k);
                                b.group.animate({ scaleY: 1 }, p(A(b.options.animation), { step: function (a, c) { b.group && (h[k] = m + c.pos * (d.pos - m), b.group.attr(h)) } }))
                            }
                        }; d.prototype.init = function (a, c) { b.prototype.init.apply(this, arguments); var d = this; a = d.chart; a.hasRendered && a.series.forEach(function (a) { a.type === d.type && (a.isDirty = !0) }) }; d.prototype.getColumnMetrics = function () {
                            var a = this, b = a.options, d = a.xAxis, f = a.yAxis, e = d.options.reversedStacks; e = d.reversed && !e || !d.reversed && e; var g, h = {}, k = 0; !1 === b.grouping ? k = 1 : a.chart.series.forEach(function (b) {
                                var c =
                                    b.yAxis, d = b.options; if (b.type === a.type && (b.visible || !a.chart.options.chart.ignoreHiddenSeries) && f.len === c.len && f.pos === c.pos) { if (d.stacking && "group" !== d.stacking) { g = b.stackKey; "undefined" === typeof h[g] && (h[g] = k++); var e = h[g] } else !1 !== d.grouping && (e = k++); b.columnIndex = e }
                            }); var l = Math.min(Math.abs(d.transA) * (d.ordinal && d.ordinal.slope || b.pointRange || d.closestPointRange || d.tickInterval || 1), d.len), p = l * b.groupPadding, q = (l - 2 * p) / (k || 1); b = Math.min(b.maxPointWidth || d.len, m(b.pointWidth, q * (1 - 2 * b.pointPadding)));
                            a.columnMetrics = { width: b, offset: (q - b) / 2 + (p + ((a.columnIndex || 0) + (e ? 1 : 0)) * q - l / 2) * (e ? -1 : 1), paddedWidth: q, columnCount: k }; return a.columnMetrics
                        }; d.prototype.crispCol = function (a, b, d, f) { var c = this.chart, e = this.borderWidth, g = -(e % 2 ? .5 : 0); e = e % 2 ? .5 : 1; c.inverted && c.renderer.isVML && (e += 1); this.options.crisp && (d = Math.round(a + d) + g, a = Math.round(a) + g, d -= a); f = Math.round(b + f) + e; g = .5 >= Math.abs(b) && .5 < f; b = Math.round(b) + e; f -= b; g && f && (--b, f += 1); return { x: a, y: b, width: d, height: f } }; d.prototype.adjustForMissingColumns = function (a,
                            b, d, f) { var c = this, e = this.options.stacking; if (!d.isNull && 1 < f.columnCount) { var g = 0, h = 0; t(this.yAxis.stacking && this.yAxis.stacking.stacks, function (a) { if ("number" === typeof d.x && (a = a[d.x.toString()])) { var b = a.points[c.index], f = a.total; e ? (b && (g = h), a.hasValidPoints && h++) : I(b) && (g = b[1], h = f || 0) } }); a = (d.plotX || 0) + ((h - 1) * f.paddedWidth + b) / 2 - b - g * f.paddedWidth } return a }; d.prototype.translate = function () {
                                var a = this, b = a.chart, d = a.options, e = a.dense = 2 > a.closestPointRange * a.xAxis.transA; e = a.borderWidth = m(d.borderWidth,
                                    e ? 0 : 1); var h = a.xAxis, k = a.yAxis, l = d.threshold, p = a.translatedThreshold = k.getThreshold(l), q = m(d.minPointLength, 5), t = a.getColumnMetrics(), r = t.width, z = a.barW = Math.max(r, 1 + 2 * e), n = a.pointXOffset = t.offset, C = a.dataMin, A = a.dataMax; b.inverted && (p -= .5); d.pointPadding && (z = Math.ceil(z)); F.prototype.translate.apply(a); a.points.forEach(function (c) {
                                        var e = m(c.yBottom, p), v = 999 + Math.abs(e), u = r, y = c.plotX || 0; v = g(c.plotY, -v, k.len + v); var w = y + n, B = z, G = Math.min(v, e), E = Math.max(v, e) - G; if (q && Math.abs(E) < q) {
                                            E = q; var D = !k.reversed &&
                                                !c.negative || k.reversed && c.negative; Q(l) && Q(A) && c.y === l && A <= l && (k.min || 0) < l && (C !== A || (k.max || 0) <= l) && (D = !D); G = Math.abs(G - p) > q ? e - q : p - (D ? q : 0)
                                        } f(c.options.pointWidth) && (u = B = Math.ceil(c.options.pointWidth), w -= Math.round((u - r) / 2)); d.centerInCategory && (w = a.adjustForMissingColumns(w, u, c, t)); c.barX = w; c.pointWidth = u; c.tooltipPos = b.inverted ? [g(k.len + k.pos - b.plotLeft - v, k.pos - b.plotLeft, k.len + k.pos - b.plotLeft), h.len + h.pos - b.plotTop - (y || 0) - n - B / 2, E] : [h.left - b.plotLeft + w + B / 2, g(v + k.pos - b.plotTop, k.pos - b.plotTop,
                                            k.len + k.pos - b.plotTop), E]; c.shapeType = a.pointClass.prototype.shapeType || "rect"; c.shapeArgs = a.crispCol.apply(a, c.isNull ? [w, p, B, 0] : [w, G, B, E])
                                    })
                            }; d.prototype.drawGraph = function () { this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data") }; d.prototype.pointAttribs = function (a, b) {
                                var c = this.options, d = this.pointAttrToOptions || {}; var f = d.stroke || "borderColor"; var e = d["stroke-width"] || "borderWidth", g = a && a.color || this.color, h = a && a[f] || c[f] || this.color || g, l = a && a[e] || c[e] || this[e] || 0; d = a && a.options.dashStyle ||
                                    c.dashStyle; var p = m(a && a.opacity, c.opacity, 1); if (a && this.zones.length) { var q = a.getZone(); g = a.options.color || q && (q.color || a.nonZonedColor) || this.color; q && (h = q.borderColor || h, d = q.dashStyle || d, l = q.borderWidth || l) } b && a && (a = z(c.states[b], a.options.states && a.options.states[b] || {}), b = a.brightness, g = a.color || "undefined" !== typeof b && k(g).brighten(a.brightness).get() || g, h = a[f] || h, l = a[e] || l, d = a.dashStyle || d, p = m(a.opacity, p)); f = { fill: g, stroke: h, "stroke-width": l, opacity: p }; d && (f.dashstyle = d); return f
                            }; d.prototype.drawPoints =
                                function () {
                                    var a = this, b = this.chart, d = a.options, f = b.renderer, e = d.animationLimit || 250, g; a.points.forEach(function (c) {
                                        var h = c.graphic, k = !!h, m = h && b.pointCount < e ? "animate" : "attr"; if (Q(c.plotY) && null !== c.y) {
                                            g = c.shapeArgs; h && c.hasNewShapeType() && (h = h.destroy()); a.enabledDataSorting && (c.startXPos = a.xAxis.reversed ? -(g ? g.width : 0) : a.xAxis.width); h || (c.graphic = h = f[c.shapeType](g).add(c.group || a.group)) && a.enabledDataSorting && b.hasRendered && b.pointCount < e && (h.attr({ x: c.startXPos }), k = !0, m = "animate"); if (h && k) h[m](z(g));
                                            if (d.borderRadius) h[m]({ r: d.borderRadius }); b.styledMode || h[m](a.pointAttribs(c, c.selected && "select")).shadow(!1 !== c.allowShadow && d.shadow, null, d.stacking && !d.borderRadius); h && (h.addClass(c.getClassName(), !0), h.attr({ visibility: c.visible ? "inherit" : "hidden" }))
                                        } else h && (c.graphic = h.destroy())
                                    })
                                }; d.prototype.drawTracker = function () {
                                    var a = this, b = a.chart, d = b.pointer, f = function (a) { var b = d.getPointFromEvent(a); "undefined" !== typeof b && (d.isDirectTouch = !0, b.onMouseOver(a)) }, e; a.points.forEach(function (a) {
                                        e =
                                        I(a.dataLabels) ? a.dataLabels : a.dataLabel ? [a.dataLabel] : []; a.graphic && (a.graphic.element.point = a); e.forEach(function (b) { b.div ? b.div.point = a : b.element.point = a })
                                    }); a._hasTracking || (a.trackerGroups.forEach(function (c) { if (a[c]) { a[c].addClass("highcharts-tracker").on("mouseover", f).on("mouseout", function (a) { d.onTrackerMouseOut(a) }); if (C) a[c].on("touchstart", f); !b.styledMode && a.options.cursor && a[c].css(q).css({ cursor: a.options.cursor }) } }), a._hasTracking = !0); B(this, "afterDrawTracker")
                                }; d.prototype.remove =
                                    function () { var a = this, b = a.chart; b.hasRendered && b.series.forEach(function (b) { b.type === a.type && (b.isDirty = !0) }); F.prototype.remove.apply(a, arguments) }; d.defaultOptions = z(F.defaultOptions, {
                                        borderRadius: 0, centerInCategory: !1, groupPadding: .2, marker: null, pointPadding: .1, minPointLength: 0, cropThreshold: 50, pointRange: null, states: { hover: { halo: !1, brightness: .1 }, select: { color: D.neutralColor20, borderColor: D.neutralColor100 } }, dataLabels: { align: void 0, verticalAlign: void 0, y: void 0 }, startFromThreshold: !0, stickyTracking: !1,
                                        tooltip: { distance: 6 }, threshold: 0, borderColor: D.backgroundColor
                                    }); return d
                    }(F); p(H.prototype, { cropShoulder: 0, directTouch: !0, drawLegendSymbol: w.drawRectangle, getSymbol: e, negStacks: !0, trackerGroups: ["group", "dataLabelsGroup"] }); E.registerSeriesType("column", H); ""; ""; return H
            }); O(l, "Series/Bar/BarSeries.js", [l["Series/Column/ColumnSeries.js"], l["Core/Series/SeriesRegistry.js"], l["Core/Utilities.js"]], function (e, b, l) {
                var w = this && this.__extends || function () {
                    var b = function (e, l) {
                        b = Object.setPrototypeOf || { __proto__: [] } instanceof
                        Array && function (b, e) { b.__proto__ = e } || function (b, e) { for (var k in e) e.hasOwnProperty(k) && (b[k] = e[k]) }; return b(e, l)
                    }; return function (e, l) { function r() { this.constructor = e } b(e, l); e.prototype = null === l ? Object.create(l) : (r.prototype = l.prototype, new r) }
                }(), D = l.extend, F = l.merge; l = function (b) { function l() { var e = null !== b && b.apply(this, arguments) || this; e.data = void 0; e.options = void 0; e.points = void 0; return e } w(l, b); l.defaultOptions = F(e.defaultOptions, {}); return l }(e); D(l.prototype, { inverted: !0 }); b.registerSeriesType("bar",
                    l); ""; return l
            }); O(l, "Series/Scatter/ScatterSeries.js", [l["Series/Column/ColumnSeries.js"], l["Series/Line/LineSeries.js"], l["Core/Series/SeriesRegistry.js"], l["Core/Utilities.js"]], function (e, b, l, w) {
                var D = this && this.__extends || function () {
                    var b = function (e, k) { b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, e) { b.__proto__ = e } || function (b, e) { for (var g in e) e.hasOwnProperty(g) && (b[g] = e[g]) }; return b(e, k) }; return function (e, k) {
                        function l() { this.constructor = e } b(e, k); e.prototype = null ===
                            k ? Object.create(k) : (l.prototype = k.prototype, new l)
                    }
                }(), F = w.addEvent, E = w.extend, H = w.merge; w = function (e) {
                    function l() { var b = null !== e && e.apply(this, arguments) || this; b.data = void 0; b.options = void 0; b.points = void 0; return b } D(l, e); l.prototype.applyJitter = function () {
                        var b = this, e = this.options.jitter, g = this.points.length; e && this.points.forEach(function (k, f) {
                            ["x", "y"].forEach(function (l, q) {
                                var p = "plot" + l.toUpperCase(); if (e[l] && !k.isNull) {
                                    var r = b[l + "Axis"]; var z = e[l] * r.transA; if (r && !r.isLog) {
                                        var m = Math.max(0,
                                            k[p] - z); r = Math.min(r.len, k[p] + z); q = 1E4 * Math.sin(f + q * g); k[p] = m + (r - m) * (q - Math.floor(q)); "x" === l && (k.clientX = k.plotX)
                                    }
                                }
                            })
                        })
                    }; l.prototype.drawGraph = function () { (this.options.lineWidth || 0 === this.options.lineWidth && this.graph && this.graph.strokeWidth()) && e.prototype.drawGraph.call(this) }; l.defaultOptions = H(b.defaultOptions, {
                        lineWidth: 0, findNearestPointBy: "xy", jitter: { x: 0, y: 0 }, marker: { enabled: !0 }, tooltip: {
                            headerFormat: '<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px"> {series.name}</span><br/>',
                            pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
                        }
                    }); return l
                }(b); E(w.prototype, { drawTracker: e.prototype.drawTracker, sorted: !1, requireSorting: !1, noSharedTooltip: !0, trackerGroups: ["group", "markerGroup", "dataLabelsGroup"], takeOrdinalPosition: !1 }); F(w, "afterTranslate", function () { this.applyJitter() }); l.registerSeriesType("scatter", w); ""; return w
            }); O(l, "Mixins/CenteredSeries.js", [l["Core/Globals.js"], l["Core/Series/Series.js"], l["Core/Utilities.js"]], function (e, b, l) {
                var w = l.isNumber, D = l.pick,
                F = l.relativeLength, E = e.deg2rad; return e.CenteredSeriesMixin = {
                    getCenter: function () {
                        var e = this.options, l = this.chart, w = 2 * (e.slicedOffset || 0), k = l.plotWidth - 2 * w, C = l.plotHeight - 2 * w, g = e.center, q = Math.min(k, C), f = e.size, p = e.innerSize || 0; "string" === typeof f && (f = parseFloat(f)); "string" === typeof p && (p = parseFloat(p)); e = [D(g[0], "50%"), D(g[1], "50%"), D(f && 0 > f ? void 0 : e.size, "100%"), D(p && 0 > p ? void 0 : e.innerSize || 0, "0%")]; !l.angular || this instanceof b || (e[3] = 0); for (g = 0; 4 > g; ++g)f = e[g], l = 2 > g || 2 === g && /%$/.test(f), e[g] =
                            F(f, [k, C, q, e[2]][g]) + (l ? w : 0); e[3] > e[2] && (e[3] = e[2]); return e
                    }, getStartAndEndRadians: function (b, e) { b = w(b) ? b : 0; e = w(e) && e > b && 360 > e - b ? e : b + 360; return { start: E * (b + -90), end: E * (e + -90) } }
                }
            }); O(l, "Series/Pie/PiePoint.js", [l["Core/Animation/AnimationUtilities.js"], l["Core/Series/Point.js"], l["Core/Utilities.js"]], function (e, b, l) {
                var w = this && this.__extends || function () {
                    var b = function (e, g) {
                        b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, f) { b.__proto__ = f } || function (b, f) {
                            for (var e in f) f.hasOwnProperty(e) &&
                                (b[e] = f[e])
                        }; return b(e, g)
                    }; return function (e, g) { function k() { this.constructor = e } b(e, g); e.prototype = null === g ? Object.create(g) : (k.prototype = g.prototype, new k) }
                }(), D = e.setAnimation, F = l.addEvent, E = l.defined; e = l.extend; var H = l.isNumber, r = l.pick, A = l.relativeLength; l = function (e) {
                    function k() { var b = null !== e && e.apply(this, arguments) || this; b.labelDistance = void 0; b.options = void 0; b.series = void 0; return b } w(k, e); k.prototype.getConnectorPath = function () {
                        var b = this.labelPosition, e = this.series.options.dataLabels,
                        f = e.connectorShape, k = this.connectorShapes; k[f] && (f = k[f]); return f.call(this, { x: b.final.x, y: b.final.y, alignment: b.alignment }, b.connectorPosition, e)
                    }; k.prototype.getTranslate = function () { return this.sliced ? this.slicedTranslation : { translateX: 0, translateY: 0 } }; k.prototype.haloPath = function (b) { var e = this.shapeArgs; return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(e.x, e.y, e.r + b, e.r + b, { innerR: e.r - 1, start: e.start, end: e.end }) }; k.prototype.init = function () {
                        b.prototype.init.apply(this,
                            arguments); var e = this; e.name = r(e.name, "Slice"); var k = function (b) { e.slice("select" === b.type) }; F(e, "select", k); F(e, "unselect", k); return e
                    }; k.prototype.isValid = function () { return H(this.y) && 0 <= this.y }; k.prototype.setVisible = function (b, e) {
                        var f = this, g = f.series, k = g.chart, l = g.options.ignoreHiddenPoint; e = r(e, l); b !== f.visible && (f.visible = f.options.visible = b = "undefined" === typeof b ? !f.visible : b, g.options.data[g.data.indexOf(f)] = f.options, ["graphic", "dataLabel", "connector", "shadowGroup"].forEach(function (e) {
                            if (f[e]) f[e][b ?
                                "show" : "hide"](b)
                        }), f.legendItem && k.legend.colorizeItem(f, b), b || "hover" !== f.state || f.setState(""), l && (g.isDirty = !0), e && k.redraw())
                    }; k.prototype.slice = function (b, e, f) { var g = this.series; D(f, g.chart); r(e, !0); this.sliced = this.options.sliced = E(b) ? b : !this.sliced; g.options.data[g.data.indexOf(this)] = this.options; this.graphic && this.graphic.animate(this.getTranslate()); this.shadowGroup && this.shadowGroup.animate(this.getTranslate()) }; return k
                }(b); e(l.prototype, {
                    connectorShapes: {
                        fixedOffset: function (b, e, g) {
                            var k =
                                e.breakAt; e = e.touchingSliceAt; return [["M", b.x, b.y], g.softConnector ? ["C", b.x + ("left" === b.alignment ? -5 : 5), b.y, 2 * k.x - e.x, 2 * k.y - e.y, k.x, k.y] : ["L", k.x, k.y], ["L", e.x, e.y]]
                        }, straight: function (b, e) { e = e.touchingSliceAt; return [["M", b.x, b.y], ["L", e.x, e.y]] }, crookedLine: function (b, e, g) {
                            e = e.touchingSliceAt; var k = this.series, f = k.center[0], l = k.chart.plotWidth, r = k.chart.plotLeft; k = b.alignment; var w = this.shapeArgs.r; g = A(g.crookDistance, 1); l = "left" === k ? f + w + (l + r - f - w) * (1 - g) : r + (f - w) * g; g = ["L", l, b.y]; f = !0; if ("left" === k ?
                                l > b.x || l < e.x : l < b.x || l > e.x) f = !1; b = [["M", b.x, b.y]]; f && b.push(g); b.push(["L", e.x, e.y]); return b
                        }
                    }
                }); return l
            }); O(l, "Series/Pie/PieSeries.js", [l["Mixins/CenteredSeries.js"], l["Series/Column/ColumnSeries.js"], l["Core/Globals.js"], l["Mixins/LegendSymbol.js"], l["Core/Color/Palette.js"], l["Series/Pie/PiePoint.js"], l["Core/Series/Series.js"], l["Core/Series/SeriesRegistry.js"], l["Core/Renderer/SVG/SVGRenderer.js"], l["Core/Utilities.js"]], function (e, b, l, w, D, F, E, H, r, A) {
                var k = this && this.__extends || function () {
                    var b =
                        function (e, f) { b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, d) { b.__proto__ = d } || function (b, d) { for (var e in d) d.hasOwnProperty(e) && (b[e] = d[e]) }; return b(e, f) }; return function (e, f) { function g() { this.constructor = e } b(e, f); e.prototype = null === f ? Object.create(f) : (g.prototype = f.prototype, new g) }
                }(), C = e.getStartAndEndRadians; l = l.noop; var g = A.clamp, q = A.extend, f = A.fireEvent, p = A.merge, B = A.pick, I = A.relativeLength; A = function (b) {
                    function e() {
                        var e = null !== b && b.apply(this, arguments) || this; e.center =
                            void 0; e.data = void 0; e.maxLabelDistance = void 0; e.options = void 0; e.points = void 0; return e
                    } k(e, b); e.prototype.animate = function (b) { var e = this, d = e.points, f = e.startAngleRad; b || d.forEach(function (a) { var b = a.graphic, d = a.shapeArgs; b && d && (b.attr({ r: B(a.startR, e.center && e.center[3] / 2), start: f, end: f }), b.animate({ r: d.r, start: d.start, end: d.end }, e.options.animation)) }) }; e.prototype.drawEmpty = function () {
                        var b = this.startAngleRad, e = this.endAngleRad, d = this.options; if (0 === this.total && this.center) {
                            var f = this.center[0];
                            var a = this.center[1]; this.graph || (this.graph = this.chart.renderer.arc(f, a, this.center[1] / 2, 0, b, e).addClass("highcharts-empty-series").add(this.group)); this.graph.attr({ d: r.prototype.symbols.arc(f, a, this.center[2] / 2, 0, { start: b, end: e, innerR: this.center[3] / 2 }) }); this.chart.styledMode || this.graph.attr({ "stroke-width": d.borderWidth, fill: d.fillColor || "none", stroke: d.color || D.neutralColor20 })
                        } else this.graph && (this.graph = this.graph.destroy())
                    }; e.prototype.drawPoints = function () {
                        var b = this.chart.renderer; this.points.forEach(function (e) {
                        e.graphic &&
                            e.hasNewShapeType() && (e.graphic = e.graphic.destroy()); e.graphic || (e.graphic = b[e.shapeType](e.shapeArgs).add(e.series.group), e.delayedRendering = !0)
                        })
                    }; e.prototype.generatePoints = function () { b.prototype.generatePoints.call(this); this.updateTotals() }; e.prototype.getX = function (b, e, d) {
                        var f = this.center, a = this.radii ? this.radii[d.index] || 0 : f[2] / 2; b = Math.asin(g((b - f[1]) / (a + d.labelDistance), -1, 1)); return f[0] + (e ? -1 : 1) * Math.cos(b) * (a + d.labelDistance) + (0 < d.labelDistance ? (e ? -1 : 1) * this.options.dataLabels.padding :
                            0)
                    }; e.prototype.hasData = function () { return !!this.processedXData.length }; e.prototype.redrawPoints = function () {
                        var b = this, e = b.chart, d = e.renderer, f, a, c, g, k = b.options.shadow; this.drawEmpty(); !k || b.shadowGroup || e.styledMode || (b.shadowGroup = d.g("shadow").attr({ zIndex: -1 }).add(b.group)); b.points.forEach(function (h) {
                            var l = {}; a = h.graphic; if (!h.isNull && a) {
                                g = h.shapeArgs; f = h.getTranslate(); if (!e.styledMode) {
                                    var m = h.shadowGroup; k && !m && (m = h.shadowGroup = d.g("shadow").add(b.shadowGroup)); m && m.attr(f); c = b.pointAttribs(h,
                                        h.selected && "select")
                                } h.delayedRendering ? (a.setRadialReference(b.center).attr(g).attr(f), e.styledMode || a.attr(c).attr({ "stroke-linejoin": "round" }).shadow(k, m), h.delayedRendering = !1) : (a.setRadialReference(b.center), e.styledMode || p(!0, l, c), p(!0, l, g, f), a.animate(l)); a.attr({ visibility: h.visible ? "inherit" : "hidden" }); a.addClass(h.getClassName(), !0)
                            } else a && (h.graphic = a.destroy())
                        })
                    }; e.prototype.sortByAngle = function (b, e) { b.sort(function (b, f) { return "undefined" !== typeof b.angle && (f.angle - b.angle) * e }) }; e.prototype.translate =
                        function (b) {
                            this.generatePoints(); var e = 0, d = this.options, g = d.slicedOffset, a = g + (d.borderWidth || 0), c = C(d.startAngle, d.endAngle), k = this.startAngleRad = c.start; c = (this.endAngleRad = c.end) - k; var l = this.points, m = d.dataLabels.distance; d = d.ignoreHiddenPoint; var p, q = l.length; b || (this.center = b = this.getCenter()); for (p = 0; p < q; p++) {
                                var r = l[p]; var z = k + e * c; !r.isValid() || d && !r.visible || (e += r.percentage / 100); var w = k + e * c; r.shapeType = "arc"; r.shapeArgs = {
                                    x: b[0], y: b[1], r: b[2] / 2, innerR: b[3] / 2, start: Math.round(1E3 * z) / 1E3, end: Math.round(1E3 *
                                        w) / 1E3
                                }; r.labelDistance = B(r.options.dataLabels && r.options.dataLabels.distance, m); r.labelDistance = I(r.labelDistance, r.shapeArgs.r); this.maxLabelDistance = Math.max(this.maxLabelDistance || 0, r.labelDistance); w = (w + z) / 2; w > 1.5 * Math.PI ? w -= 2 * Math.PI : w < -Math.PI / 2 && (w += 2 * Math.PI); r.slicedTranslation = { translateX: Math.round(Math.cos(w) * g), translateY: Math.round(Math.sin(w) * g) }; var u = Math.cos(w) * b[2] / 2; var A = Math.sin(w) * b[2] / 2; r.tooltipPos = [b[0] + .7 * u, b[1] + .7 * A]; r.half = w < -Math.PI / 2 || w > Math.PI / 2 ? 1 : 0; r.angle = w; z = Math.min(a,
                                    r.labelDistance / 5); r.labelPosition = { natural: { x: b[0] + u + Math.cos(w) * r.labelDistance, y: b[1] + A + Math.sin(w) * r.labelDistance }, "final": {}, alignment: 0 > r.labelDistance ? "center" : r.half ? "right" : "left", connectorPosition: { breakAt: { x: b[0] + u + Math.cos(w) * z, y: b[1] + A + Math.sin(w) * z }, touchingSliceAt: { x: b[0] + u, y: b[1] + A } } }
                            } f(this, "afterTranslate")
                        }; e.prototype.updateTotals = function () {
                            var b, e = 0, d = this.points, f = d.length, a = this.options.ignoreHiddenPoint; for (b = 0; b < f; b++) { var c = d[b]; !c.isValid() || a && !c.visible || (e += c.y) } this.total =
                                e; for (b = 0; b < f; b++)c = d[b], c.percentage = 0 < e && (c.visible || !a) ? c.y / e * 100 : 0, c.total = e
                        }; e.defaultOptions = p(E.defaultOptions, {
                            center: [null, null], clip: !1, colorByPoint: !0, dataLabels: { allowOverlap: !0, connectorPadding: 5, connectorShape: "fixedOffset", crookDistance: "70%", distance: 30, enabled: !0, formatter: function () { return this.point.isNull ? void 0 : this.point.name }, softConnector: !0, x: 0 }, fillColor: void 0, ignoreHiddenPoint: !0, inactiveOtherPoints: !0, legendType: "point", marker: null, size: null, showInLegend: !1, slicedOffset: 10,
                            stickyTracking: !1, tooltip: { followPointer: !0 }, borderColor: D.backgroundColor, borderWidth: 1, lineWidth: void 0, states: { hover: { brightness: .1 } }
                        }); return e
                }(E); q(A.prototype, { axisTypes: [], directTouch: !0, drawGraph: null, drawLegendSymbol: w.drawRectangle, drawTracker: b.prototype.drawTracker, getCenter: e.getCenter, getSymbol: l, isCartesian: !1, noSharedTooltip: !0, pointAttribs: b.prototype.pointAttribs, pointClass: F, requireSorting: !1, searchPoint: l, trackerGroups: ["group", "dataLabelsGroup"] }); H.registerSeriesType("pie",
                    A); ""; return A
            }); O(l, "Core/Series/DataLabels.js", [l["Core/Animation/AnimationUtilities.js"], l["Core/Globals.js"], l["Core/Color/Palette.js"], l["Core/Series/Series.js"], l["Core/Series/SeriesRegistry.js"], l["Core/Utilities.js"]], function (e, b, l, w, D, F) {
                var E = e.getDeferredAnimation; e = b.noop; D = D.seriesTypes; var H = F.arrayMax, r = F.clamp, A = F.defined, k = F.extend, C = F.fireEvent, g = F.format, q = F.isArray, f = F.merge, p = F.objectEach, B = F.pick, I = F.relativeLength, Q = F.splat, z = F.stableSort; ""; b.distribute = function (e, f, d) {
                    function g(a,
                        b) { return a.target - b.target } var a, c = !0, k = e, l = []; var m = 0; var p = k.reducedLen || f; for (a = e.length; a--;)m += e[a].size; if (m > p) { z(e, function (a, b) { return (b.rank || 0) - (a.rank || 0) }); for (m = a = 0; m <= p;)m += e[a].size, a++; l = e.splice(a - 1, e.length) } z(e, g); for (e = e.map(function (a) { return { size: a.size, targets: [a.target], align: B(a.align, .5) } }); c;) {
                            for (a = e.length; a--;)c = e[a], m = (Math.min.apply(0, c.targets) + Math.max.apply(0, c.targets)) / 2, c.pos = r(m - c.size * c.align, 0, f - c.size); a = e.length; for (c = !1; a--;)0 < a && e[a - 1].pos + e[a - 1].size >
                                e[a].pos && (e[a - 1].size += e[a].size, e[a - 1].targets = e[a - 1].targets.concat(e[a].targets), e[a - 1].align = .5, e[a - 1].pos + e[a - 1].size > f && (e[a - 1].pos = f - e[a - 1].size), e.splice(a, 1), c = !0)
                        } k.push.apply(k, l); a = 0; e.some(function (c) { var e = 0; if (c.targets.some(function () { k[a].pos = c.pos + e; if ("undefined" !== typeof d && Math.abs(k[a].pos - k[a].target) > d) return k.slice(0, a + 1).forEach(function (a) { delete a.pos }), k.reducedLen = (k.reducedLen || f) - .1 * f, k.reducedLen > .1 * f && b.distribute(k, f, d), !0; e += k[a].size; a++ })) return !0 }); z(k, g)
                };
                w.prototype.drawDataLabels = function () {
                    function b(a, b) { var c = b.filter; return c ? (b = c.operator, a = a[c.property], c = c.value, ">" === b && a > c || "<" === b && a < c || ">=" === b && a >= c || "<=" === b && a <= c || "==" === b && a == c || "===" === b && a === c ? !0 : !1) : !0 } function e(a, b) { var c = [], d; if (q(a) && !q(b)) c = a.map(function (a) { return f(a, b) }); else if (q(b) && !q(a)) c = b.map(function (b) { return f(a, b) }); else if (q(a) || q(b)) for (d = Math.max(a.length, b.length); d--;)c[d] = f(a[d], b[d]); else c = f(a, b); return c } var d = this, h = d.chart, a = d.options, c = a.dataLabels,
                        k = d.points, r, w = d.hasRendered || 0, y = c.animation; y = c.defer ? E(h, y, d) : { defer: 0, duration: 0 }; var z = h.renderer; c = e(e(h.options.plotOptions && h.options.plotOptions.series && h.options.plotOptions.series.dataLabels, h.options.plotOptions && h.options.plotOptions[d.type] && h.options.plotOptions[d.type].dataLabels), c); C(this, "drawDataLabels"); if (q(c) || c.enabled || d._hasPointLabels) {
                            var D = d.plotGroup("dataLabelsGroup", "data-labels", w ? "inherit" : "hidden", c.zIndex || 6); D.attr({ opacity: +w }); !w && (w = d.dataLabelsGroup) && (d.visible &&
                                D.show(!0), w[a.animation ? "animate" : "attr"]({ opacity: 1 }, y)); k.forEach(function (f) {
                                    r = Q(e(c, f.dlOptions || f.options && f.options.dataLabels)); r.forEach(function (c, e) {
                                        var k = c.enabled && (!f.isNull || f.dataLabelOnNull) && b(f, c), m = f.dataLabels ? f.dataLabels[e] : f.dataLabel, q = f.connectors ? f.connectors[e] : f.connector, t = B(c.distance, f.labelDistance), r = !m; if (k) {
                                            var v = f.getLabelConfig(); var u = B(c[f.formatPrefix + "Format"], c.format); v = A(u) ? g(u, v, h) : (c[f.formatPrefix + "Formatter"] || c.formatter).call(v, c); u = c.style; var y =
                                                c.rotation; h.styledMode || (u.color = B(c.color, u.color, d.color, l.neutralColor100), "contrast" === u.color ? (f.contrastColor = z.getContrast(f.color || d.color), u.color = !A(t) && c.inside || 0 > t || a.stacking ? f.contrastColor : l.neutralColor100) : delete f.contrastColor, a.cursor && (u.cursor = a.cursor)); var w = { r: c.borderRadius || 0, rotation: y, padding: c.padding, zIndex: 1 }; h.styledMode || (w.fill = c.backgroundColor, w.stroke = c.borderColor, w["stroke-width"] = c.borderWidth); p(w, function (a, b) { "undefined" === typeof a && delete w[b] })
                                        } !m ||
                                            k && A(v) ? k && A(v) && (m ? w.text = v : (f.dataLabels = f.dataLabels || [], m = f.dataLabels[e] = y ? z.text(v, 0, -9999, c.useHTML).addClass("highcharts-data-label") : z.label(v, 0, -9999, c.shape, null, null, c.useHTML, null, "data-label"), e || (f.dataLabel = m), m.addClass(" highcharts-data-label-color-" + f.colorIndex + " " + (c.className || "") + (c.useHTML ? " highcharts-tracker" : ""))), m.options = c, m.attr(w), h.styledMode || m.css(u).shadow(c.shadow), m.added || m.add(D), c.textPath && !c.useHTML && (m.setTextPath(f.getDataLabelPath && f.getDataLabelPath(m) ||
                                                f.graphic, c.textPath), f.dataLabelPath && !c.textPath.enabled && (f.dataLabelPath = f.dataLabelPath.destroy())), d.alignDataLabel(f, m, c, null, r)) : (f.dataLabel = f.dataLabel && f.dataLabel.destroy(), f.dataLabels && (1 === f.dataLabels.length ? delete f.dataLabels : delete f.dataLabels[e]), e || delete f.dataLabel, q && (f.connector = f.connector.destroy(), f.connectors && (1 === f.connectors.length ? delete f.connectors : delete f.connectors[e])))
                                    })
                                })
                        } C(this, "afterDrawDataLabels")
                }; w.prototype.alignDataLabel = function (b, e, d, f, a) {
                    var c =
                        this, g = this.chart, h = this.isCartesian && g.inverted, l = this.enabledDataSorting, m = B(b.dlBox && b.dlBox.centerX, b.plotX, -9999), p = B(b.plotY, -9999), q = e.getBBox(), t = d.rotation, r = d.align, u = g.isInsidePlot(m, Math.round(p), h), w = "justify" === B(d.overflow, l ? "none" : "justify"), n = this.visible && !1 !== b.visible && (b.series.forceDL || l && !w || u || d.inside && f && g.isInsidePlot(m, h ? f.x + 1 : f.y + f.height - 1, h)); var z = function (d) { l && c.xAxis && !w && c.setDataLabelStartPos(b, e, a, u, d) }; if (n) {
                            var A = g.renderer.fontMetrics(g.styledMode ? void 0 : d.style.fontSize,
                                e).b; f = k({ x: h ? this.yAxis.len - p : m, y: Math.round(h ? this.xAxis.len - m : p), width: 0, height: 0 }, f); k(d, { width: q.width, height: q.height }); t ? (w = !1, m = g.renderer.rotCorr(A, t), m = { x: f.x + (d.x || 0) + f.width / 2 + m.x, y: f.y + (d.y || 0) + { top: 0, middle: .5, bottom: 1 }[d.verticalAlign] * f.height }, z(m), e[a ? "attr" : "animate"](m).attr({ align: r }), z = (t + 720) % 360, z = 180 < z && 360 > z, "left" === r ? m.y -= z ? q.height : 0 : "center" === r ? (m.x -= q.width / 2, m.y -= q.height / 2) : "right" === r && (m.x -= q.width, m.y -= z ? 0 : q.height), e.placed = !0, e.alignAttr = m) : (z(f), e.align(d, null,
                                    f), m = e.alignAttr); w && 0 <= f.height ? this.justifyDataLabel(e, d, m, q, f, a) : B(d.crop, !0) && (n = g.isInsidePlot(m.x, m.y) && g.isInsidePlot(m.x + q.width, m.y + q.height)); if (d.shape && !t) e[a ? "attr" : "animate"]({ anchorX: h ? g.plotWidth - b.plotY : b.plotX, anchorY: h ? g.plotHeight - b.plotX : b.plotY })
                        } a && l && (e.placed = !1); n || l && !w || (e.hide(!0), e.placed = !1)
                }; w.prototype.setDataLabelStartPos = function (b, e, d, f, a) {
                    var c = this.chart, g = c.inverted, h = this.xAxis, k = h.reversed, l = g ? e.height / 2 : e.width / 2; b = (b = b.pointWidth) ? b / 2 : 0; h = g ? a.x : k ? -l - b : h.width -
                        l + b; a = g ? k ? this.yAxis.height - l + b : -l - b : a.y; e.startXPos = h; e.startYPos = a; f ? "hidden" === e.visibility && (e.show(), e.attr({ opacity: 0 }).animate({ opacity: 1 })) : e.attr({ opacity: 1 }).animate({ opacity: 0 }, void 0, e.hide); c.hasRendered && (d && e.attr({ x: e.startXPos, y: e.startYPos }), e.placed = !0)
                }; w.prototype.justifyDataLabel = function (b, e, d, f, a, c) {
                    var g = this.chart, h = e.align, k = e.verticalAlign, l = b.box ? 0 : b.padding || 0, m = e.x; m = void 0 === m ? 0 : m; var p = e.y; var q = void 0 === p ? 0 : p; p = d.x + l; if (0 > p) {
                    "right" === h && 0 <= m ? (e.align = "left", e.inside =
                        !0) : m -= p; var r = !0
                    } p = d.x + f.width - l; p > g.plotWidth && ("left" === h && 0 >= m ? (e.align = "right", e.inside = !0) : m += g.plotWidth - p, r = !0); p = d.y + l; 0 > p && ("bottom" === k && 0 <= q ? (e.verticalAlign = "top", e.inside = !0) : q -= p, r = !0); p = d.y + f.height - l; p > g.plotHeight && ("top" === k && 0 >= q ? (e.verticalAlign = "bottom", e.inside = !0) : q += g.plotHeight - p, r = !0); r && (e.x = m, e.y = q, b.placed = !c, b.align(e, void 0, a)); return r
                }; D.pie && (D.pie.prototype.dataLabelPositioners = {
                    radialDistributionY: function (b) { return b.top + b.distributeBox.pos }, radialDistributionX: function (b,
                        e, d, f) { return b.getX(d < e.top + 2 || d > e.bottom - 2 ? f : d, e.half, e) }, justify: function (b, e, d) { return d[0] + (b.half ? -1 : 1) * (e + b.labelDistance) }, alignToPlotEdges: function (b, e, d, f) { b = b.getBBox().width; return e ? b + f : d - b - f }, alignToConnectors: function (b, e, d, f) { var a = 0, c; b.forEach(function (b) { c = b.dataLabel.getBBox().width; c > a && (a = c) }); return e ? a + f : d - a - f }
                }, D.pie.prototype.drawDataLabels = function () {
                    var e = this, g = e.data, d, h = e.chart, a = e.options.dataLabels || {}, c = a.connectorPadding, k, p = h.plotWidth, q = h.plotHeight, r = h.plotLeft,
                    z = Math.round(h.chartWidth / 3), C, D = e.center, E = D[2] / 2, u = D[1], F, n, I, Q, O = [[], []], x, T, J, U, V = [0, 0, 0, 0], W = e.dataLabelPositioners, Y; e.visible && (a.enabled || e._hasPointLabels) && (g.forEach(function (a) { a.dataLabel && a.visible && a.dataLabel.shortened && (a.dataLabel.attr({ width: "auto" }).css({ width: "auto", textOverflow: "clip" }), a.dataLabel.shortened = !1) }), w.prototype.drawDataLabels.apply(e), g.forEach(function (b) {
                    b.dataLabel && (b.visible ? (O[b.half].push(b), b.dataLabel._pos = null, !A(a.style.width) && !A(b.options.dataLabels &&
                        b.options.dataLabels.style && b.options.dataLabels.style.width) && b.dataLabel.getBBox().width > z && (b.dataLabel.css({ width: Math.round(.7 * z) + "px" }), b.dataLabel.shortened = !0)) : (b.dataLabel = b.dataLabel.destroy(), b.dataLabels && 1 === b.dataLabels.length && delete b.dataLabels))
                    }), O.forEach(function (f, g) {
                        var k = f.length, l = [], m; if (k) {
                            e.sortByAngle(f, g - .5); if (0 < e.maxLabelDistance) {
                                var t = Math.max(0, u - E - e.maxLabelDistance); var v = Math.min(u + E + e.maxLabelDistance, h.plotHeight); f.forEach(function (a) {
                                0 < a.labelDistance && a.dataLabel &&
                                    (a.top = Math.max(0, u - E - a.labelDistance), a.bottom = Math.min(u + E + a.labelDistance, h.plotHeight), m = a.dataLabel.getBBox().height || 21, a.distributeBox = { target: a.labelPosition.natural.y - a.top + m / 2, size: m, rank: a.y }, l.push(a.distributeBox))
                                }); t = v + m - t; b.distribute(l, t, t / 5)
                            } for (U = 0; U < k; U++) {
                                d = f[U]; I = d.labelPosition; F = d.dataLabel; J = !1 === d.visible ? "hidden" : "inherit"; T = t = I.natural.y; l && A(d.distributeBox) && ("undefined" === typeof d.distributeBox.pos ? J = "hidden" : (Q = d.distributeBox.size, T = W.radialDistributionY(d))); delete d.positionIndex;
                                if (a.justify) x = W.justify(d, E, D); else switch (a.alignTo) { case "connectors": x = W.alignToConnectors(f, g, p, r); break; case "plotEdges": x = W.alignToPlotEdges(F, g, p, r); break; default: x = W.radialDistributionX(e, d, T, t) }F._attr = { visibility: J, align: I.alignment }; Y = d.options.dataLabels || {}; F._pos = { x: x + B(Y.x, a.x) + ({ left: c, right: -c }[I.alignment] || 0), y: T + B(Y.y, a.y) - 10 }; I.final.x = x; I.final.y = T; B(a.crop, !0) && (n = F.getBBox().width, t = null, x - n < c && 1 === g ? (t = Math.round(n - x + c), V[3] = Math.max(t, V[3])) : x + n > p - c && 0 === g && (t = Math.round(x +
                                    n - p + c), V[1] = Math.max(t, V[1])), 0 > T - Q / 2 ? V[0] = Math.max(Math.round(-T + Q / 2), V[0]) : T + Q / 2 > q && (V[2] = Math.max(Math.round(T + Q / 2 - q), V[2])), F.sideOverflow = t)
                            }
                        }
                    }), 0 === H(V) || this.verifyDataLabelOverflow(V)) && (this.placeDataLabels(), this.points.forEach(function (b) {
                        Y = f(a, b.options.dataLabels); if (k = B(Y.connectorWidth, 1)) {
                            var c; C = b.connector; if ((F = b.dataLabel) && F._pos && b.visible && 0 < b.labelDistance) {
                                J = F._attr.visibility; if (c = !C) b.connector = C = h.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" +
                                    b.colorIndex + (b.className ? " " + b.className : "")).add(e.dataLabelsGroup), h.styledMode || C.attr({ "stroke-width": k, stroke: Y.connectorColor || b.color || l.neutralColor60 }); C[c ? "attr" : "animate"]({ d: b.getConnectorPath() }); C.attr("visibility", J)
                            } else C && (b.connector = C.destroy())
                        }
                    }))
                }, D.pie.prototype.placeDataLabels = function () {
                    this.points.forEach(function (b) {
                        var e = b.dataLabel, d; e && b.visible && ((d = e._pos) ? (e.sideOverflow && (e._attr.width = Math.max(e.getBBox().width - e.sideOverflow, 0), e.css({
                            width: e._attr.width + "px",
                            textOverflow: (this.options.dataLabels.style || {}).textOverflow || "ellipsis"
                        }), e.shortened = !0), e.attr(e._attr), e[e.moved ? "animate" : "attr"](d), e.moved = !0) : e && e.attr({ y: -9999 })); delete b.distributeBox
                    }, this)
                }, D.pie.prototype.alignDataLabel = e, D.pie.prototype.verifyDataLabelOverflow = function (b) {
                    var e = this.center, d = this.options, f = d.center, a = d.minSize || 80, c = null !== d.size; if (!c) {
                        if (null !== f[0]) var g = Math.max(e[2] - Math.max(b[1], b[3]), a); else g = Math.max(e[2] - b[1] - b[3], a), e[0] += (b[3] - b[1]) / 2; null !== f[1] ? g = r(g,
                            a, e[2] - Math.max(b[0], b[2])) : (g = r(g, a, e[2] - b[0] - b[2]), e[1] += (b[0] - b[2]) / 2); g < e[2] ? (e[2] = g, e[3] = Math.min(I(d.innerSize || 0, g), g), this.translate(e), this.drawDataLabels && this.drawDataLabels()) : c = !0
                    } return c
                }); D.column && (D.column.prototype.alignDataLabel = function (b, e, d, g, a) {
                    var c = this.chart.inverted, h = b.series, k = b.dlBox || b.shapeArgs, l = B(b.below, b.plotY > B(this.translatedThreshold, h.yAxis.len)), m = B(d.inside, !!this.options.stacking); k && (g = f(k), 0 > g.y && (g.height += g.y, g.y = 0), k = g.y + g.height - h.yAxis.len, 0 < k && k <
                        g.height && (g.height -= k), c && (g = { x: h.yAxis.len - g.y - g.height, y: h.xAxis.len - g.x - g.width, width: g.height, height: g.width }), m || (c ? (g.x += l ? 0 : g.width, g.width = 0) : (g.y += l ? g.height : 0, g.height = 0))); d.align = B(d.align, !c || m ? "center" : l ? "right" : "left"); d.verticalAlign = B(d.verticalAlign, c || m ? "middle" : l ? "top" : "bottom"); w.prototype.alignDataLabel.call(this, b, e, d, g, a); d.inside && b.contrastColor && e.css({ color: b.contrastColor })
                })
            }); O(l, "Extensions/OverlappingDataLabels.js", [l["Core/Chart/Chart.js"], l["Core/Utilities.js"]],
                function (e, b) {
                    var l = b.addEvent, w = b.fireEvent, D = b.isArray, F = b.isNumber, E = b.objectEach, H = b.pick; l(e, "render", function () {
                        var b = []; (this.labelCollectors || []).forEach(function (e) { b = b.concat(e()) }); (this.yAxis || []).forEach(function (e) { e.stacking && e.options.stackLabels && !e.options.stackLabels.allowOverlap && E(e.stacking.stacks, function (e) { E(e, function (e) { b.push(e.label) }) }) }); (this.series || []).forEach(function (e) {
                            var k = e.options.dataLabels; e.visible && (!1 !== k.enabled || e._hasPointLabels) && (k = function (e) {
                                return e.forEach(function (e) {
                                e.visible &&
                                    (D(e.dataLabels) ? e.dataLabels : e.dataLabel ? [e.dataLabel] : []).forEach(function (g) { var f = g.options; g.labelrank = H(f.labelrank, e.labelrank, e.shapeArgs && e.shapeArgs.height); f.allowOverlap || b.push(g) })
                                })
                            }, k(e.nodes || []), k(e.points))
                        }); this.hideOverlappingLabels(b)
                    }); e.prototype.hideOverlappingLabels = function (b) {
                        var e = this, k = b.length, l = e.renderer, g, q, f, p = !1; var r = function (b) {
                            var e, f = b.box ? 0 : b.padding || 0, d = e = 0, g; if (b && (!b.alignAttr || b.placed)) {
                                var a = b.alignAttr || { x: b.attr("x"), y: b.attr("y") }; var c = b.parentGroup;
                                b.width || (e = b.getBBox(), b.width = e.width, b.height = e.height, e = l.fontMetrics(null, b.element).h); var k = b.width - 2 * f; (g = { left: "0", center: "0.5", right: "1" }[b.alignValue]) ? d = +g * k : F(b.x) && Math.round(b.x) !== b.translateX && (d = b.x - b.translateX); return { x: a.x + (c.translateX || 0) + f - (d || 0), y: a.y + (c.translateY || 0) + f - e, width: b.width - 2 * f, height: b.height - 2 * f }
                            }
                        }; for (q = 0; q < k; q++)if (g = b[q]) g.oldOpacity = g.opacity, g.newOpacity = 1, g.absoluteBox = r(g); b.sort(function (b, e) { return (e.labelrank || 0) - (b.labelrank || 0) }); for (q = 0; q < k; q++) {
                            var D =
                                (r = b[q]) && r.absoluteBox; for (g = q + 1; g < k; ++g) { var E = (f = b[g]) && f.absoluteBox; !D || !E || r === f || 0 === r.newOpacity || 0 === f.newOpacity || E.x >= D.x + D.width || E.x + E.width <= D.x || E.y >= D.y + D.height || E.y + E.height <= D.y || ((r.labelrank < f.labelrank ? r : f).newOpacity = 0) }
                        } b.forEach(function (b) {
                            if (b) {
                                var f = b.newOpacity; b.oldOpacity !== f && (b.alignAttr && b.placed ? (b[f ? "removeClass" : "addClass"]("highcharts-data-label-hidden"), p = !0, b.alignAttr.opacity = f, b[b.isOld ? "animate" : "attr"](b.alignAttr, null, function () {
                                e.styledMode || b.css({
                                    pointerEvents: f ?
                                        "auto" : "none"
                                }); b.visibility = f ? "inherit" : "hidden"
                                }), w(e, "afterHideOverlappingLabel")) : b.attr({ opacity: f })); b.isOld = !0
                            }
                        }); p && w(e, "afterHideAllOverlappingLabels")
                    }
                }); O(l, "Core/Responsive.js", [l["Core/Chart/Chart.js"], l["Core/Utilities.js"]], function (e, b) {
                    var l = b.find, w = b.isArray, D = b.isObject, F = b.merge, E = b.objectEach, H = b.pick, r = b.splat, A = b.uniqueKey; e.prototype.setResponsive = function (b, e) {
                        var g = this.options.responsive, k = [], f = this.currentResponsive; !e && g && g.rules && g.rules.forEach(function (b) {
                        "undefined" ===
                            typeof b._id && (b._id = A()); this.matchResponsiveRule(b, k)
                        }, this); e = F.apply(0, k.map(function (b) { return l(g.rules, function (e) { return e._id === b }).chartOptions })); e.isResponsiveOptions = !0; k = k.toString() || void 0; k !== (f && f.ruleIds) && (f && this.update(f.undoOptions, b, !0), k ? (f = this.currentOptions(e), f.isResponsiveOptions = !0, this.currentResponsive = { ruleIds: k, mergedOptions: e, undoOptions: f }, this.update(e, b, !0)) : this.currentResponsive = void 0)
                    }; e.prototype.matchResponsiveRule = function (b, e) {
                        var g = b.condition; (g.callback ||
                            function () { return this.chartWidth <= H(g.maxWidth, Number.MAX_VALUE) && this.chartHeight <= H(g.maxHeight, Number.MAX_VALUE) && this.chartWidth >= H(g.minWidth, 0) && this.chartHeight >= H(g.minHeight, 0) }).call(this) && e.push(b._id)
                    }; e.prototype.currentOptions = function (b) {
                        function e(b, k, l, q) {
                            var f; E(b, function (b, m) {
                                if (!q && -1 < g.collectionsWithUpdate.indexOf(m) && k[m]) for (b = r(b), l[m] = [], f = 0; f < Math.max(b.length, k[m].length); f++)k[m][f] && (void 0 === b[f] ? l[m][f] = k[m][f] : (l[m][f] = {}, e(b[f], k[m][f], l[m][f], q + 1))); else D(b) ?
                                    (l[m] = w(b) ? [] : {}, e(b, k[m] || {}, l[m], q + 1)) : l[m] = "undefined" === typeof k[m] ? null : k[m]
                            })
                        } var g = this, k = {}; e(b, this.options, k, 0); return k
                    }
                }); O(l, "masters/highcharts.src.js", [l["Core/Globals.js"], l["Core/Utilities.js"], l["Core/Series/Series.js"]], function (e, b, l) {
                e.addEvent = b.addEvent; e.arrayMax = b.arrayMax; e.arrayMin = b.arrayMin; e.attr = b.attr; e.clearTimeout = b.clearTimeout; e.correctFloat = b.correctFloat; e.createElement = b.createElement; e.css = b.css; e.defined = b.defined; e.destroyObjectProperties = b.destroyObjectProperties;
                    e.discardElement = b.discardElement; e.erase = b.erase; e.error = b.error; e.extend = b.extend; e.extendClass = b.extendClass; e.find = b.find; e.fireEvent = b.fireEvent; e.format = b.format; e.getMagnitude = b.getMagnitude; e.getStyle = b.getStyle; e.inArray = b.inArray; e.isArray = b.isArray; e.isClass = b.isClass; e.isDOMElement = b.isDOMElement; e.isFunction = b.isFunction; e.isNumber = b.isNumber; e.isObject = b.isObject; e.isString = b.isString; e.keys = b.keys; e.merge = b.merge; e.normalizeTickInterval = b.normalizeTickInterval; e.numberFormat = b.numberFormat;
                    e.objectEach = b.objectEach; e.offset = b.offset; e.pad = b.pad; e.pick = b.pick; e.pInt = b.pInt; e.relativeLength = b.relativeLength; e.removeEvent = b.removeEvent; e.splat = b.splat; e.stableSort = b.stableSort; e.syncTimeout = b.syncTimeout; e.timeUnits = b.timeUnits; e.uniqueKey = b.uniqueKey; e.useSerialIds = b.useSerialIds; e.wrap = b.wrap; e.Series = l; return e
                }); l["masters/highcharts.src.js"]._modules = l; return l["masters/highcharts.src.js"]
});
//# sourceMappingURL=highcharts.js.map