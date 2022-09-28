/*
 Highcharts JS v9.0.0 (2021-02-02)

 Exporting module

 (c) 2010-2019 Torstein Honsi

 License: www.highcharts.com/license
*/
(function (e) { "object" === typeof module && module.exports ? (e["default"] = e, module.exports = e) : "function" === typeof define && define.amd ? define("highcharts/modules/exporting", ["highcharts"], function (q) { e(q); e.Highcharts = q; return e }) : e("undefined" !== typeof Highcharts ? Highcharts : void 0) })(function (e) {
    function q(e, k, g, l) { e.hasOwnProperty(k) || (e[k] = l.apply(null, g)) } e = e ? e._modules : {}; q(e, "Extensions/FullScreen.js", [e["Core/Chart/Chart.js"], e["Core/Globals.js"], e["Core/Renderer/HTML/AST.js"], e["Core/Utilities.js"]],
        function (e, k, g, l) {
            var m = l.addEvent; l = function () {
                function e(f) {
                this.chart = f; this.isOpen = !1; f = f.renderTo; this.browserProps || ("function" === typeof f.requestFullscreen ? this.browserProps = { fullscreenChange: "fullscreenchange", requestFullscreen: "requestFullscreen", exitFullscreen: "exitFullscreen" } : f.mozRequestFullScreen ? this.browserProps = { fullscreenChange: "mozfullscreenchange", requestFullscreen: "mozRequestFullScreen", exitFullscreen: "mozCancelFullScreen" } : f.webkitRequestFullScreen ? this.browserProps = {
                    fullscreenChange: "webkitfullscreenchange",
                    requestFullscreen: "webkitRequestFullScreen", exitFullscreen: "webkitExitFullscreen"
                } : f.msRequestFullscreen && (this.browserProps = { fullscreenChange: "MSFullscreenChange", requestFullscreen: "msRequestFullscreen", exitFullscreen: "msExitFullscreen" }))
                } e.prototype.close = function () {
                    var f = this.chart; if (this.isOpen && this.browserProps && f.container.ownerDocument instanceof Document) f.container.ownerDocument[this.browserProps.exitFullscreen](); this.unbindFullscreenEvent && this.unbindFullscreenEvent(); this.isOpen = !1;
                    this.setButtonText()
                }; e.prototype.open = function () { var f = this, e = f.chart; if (f.browserProps) { f.unbindFullscreenEvent = m(e.container.ownerDocument, f.browserProps.fullscreenChange, function () { f.isOpen ? (f.isOpen = !1, f.close()) : (f.isOpen = !0, f.setButtonText()) }); var g = e.renderTo[f.browserProps.requestFullscreen](); if (g) g["catch"](function () { alert("Full screen is not supported inside a frame.") }); m(e, "destroy", f.unbindFullscreenEvent) } }; e.prototype.setButtonText = function () {
                    var f, e = this.chart, l = e.exportDivElements,
                    k = e.options.exporting, m = null === (f = null === k || void 0 === k ? void 0 : k.buttons) || void 0 === f ? void 0 : f.contextButton.menuItems; f = e.options.lang; (null === k || void 0 === k ? 0 : k.menuItemDefinitions) && (null === f || void 0 === f ? 0 : f.exitFullscreen) && f.viewFullscreen && m && l && l.length && g.setElementHTML(l[m.indexOf("viewFullscreen")], this.isOpen ? f.exitFullscreen : k.menuItemDefinitions.viewFullscreen.text || f.viewFullscreen)
                }; e.prototype.toggle = function () { this.isOpen ? this.close() : this.open() }; return e
            }(); k.Fullscreen = l; m(e, "beforeRender",
                function () { this.fullscreen = new k.Fullscreen(this) }); return k.Fullscreen
        }); q(e, "Mixins/Navigation.js", [], function () { return { initUpdate: function (e) { e.navigation || (e.navigation = { updates: [], update: function (e, g) { this.updates.forEach(function (k) { k.update.call(k.context, e, g) }) } }) }, addUpdate: function (e, k) { k.navigation || this.initUpdate(k); k.navigation.updates.push({ update: e, context: k }) } } }); q(e, "Extensions/Exporting.js", [e["Core/Chart/Chart.js"], e["Mixins/Navigation.js"], e["Core/Globals.js"], e["Core/Options.js"],
        e["Core/Color/Palette.js"], e["Core/Renderer/SVG/SVGRenderer.js"], e["Core/Utilities.js"]], function (e, k, g, l, m, q, f) {
            var w = g.doc, G = g.isTouchDevice, B = g.win; l = l.defaultOptions; var y = f.addEvent, r = f.css, z = f.createElement, E = f.discardElement, A = f.extend, H = f.find, D = f.fireEvent, I = f.isObject, u = f.merge, F = f.objectEach, t = f.pick, J = f.removeEvent, K = f.uniqueKey; A(l.lang, {
                viewFullscreen: "View in full screen", exitFullscreen: "Exit from full screen", printChart: "Print chart", downloadPNG: "Download PNG image", downloadJPEG: "Download JPEG image",
                downloadPDF: "Download PDF document", downloadSVG: "Download SVG vector image", contextButtonTitle: "Chart context menu"
            }); l.navigation || (l.navigation = {}); u(!0, l.navigation, { buttonOptions: { theme: {}, symbolSize: 14, symbolX: 12.5, symbolY: 10.5, align: "right", buttonSpacing: 3, height: 22, verticalAlign: "top", width: 24 } }); u(!0, l.navigation, {
                menuStyle: { border: "1px solid " + m.neutralColor40, background: m.backgroundColor, padding: "5px 0" }, menuItemStyle: {
                    padding: "0.5em 1em", color: m.neutralColor80, background: "none", fontSize: G ?
                        "14px" : "11px", transition: "background 250ms, color 250ms"
                }, menuItemHoverStyle: { background: m.highlightColor80, color: m.backgroundColor }, buttonOptions: { symbolFill: m.neutralColor60, symbolStroke: m.neutralColor60, symbolStrokeWidth: 3, theme: { padding: 5 } }
            }); l.exporting = {
                type: "image/png", url: "https://export.highcharts.com/", printMaxWidth: 780, scale: 2, buttons: { contextButton: { className: "highcharts-contextbutton", menuClassName: "highcharts-contextmenu", symbol: "menu", titleKey: "contextButtonTitle", menuItems: "viewFullscreen printChart separator downloadPNG downloadJPEG downloadPDF downloadSVG".split(" ") } },
                menuItemDefinitions: {
                    viewFullscreen: { textKey: "viewFullscreen", onclick: function () { this.fullscreen.toggle() } }, printChart: { textKey: "printChart", onclick: function () { this.print() } }, separator: { separator: !0 }, downloadPNG: { textKey: "downloadPNG", onclick: function () { this.exportChart() } }, downloadJPEG: { textKey: "downloadJPEG", onclick: function () { this.exportChart({ type: "image/jpeg" }) } }, downloadPDF: { textKey: "downloadPDF", onclick: function () { this.exportChart({ type: "application/pdf" }) } }, downloadSVG: {
                        textKey: "downloadSVG",
                        onclick: function () { this.exportChart({ type: "image/svg+xml" }) }
                    }
                }
            }; g.post = function (a, b, c) { var d = z("form", u({ method: "post", action: a, enctype: "multipart/form-data" }, c), { display: "none" }, w.body); F(b, function (a, b) { z("input", { type: "hidden", name: b, value: a }, null, d) }); d.submit(); E(d) }; g.isSafari && g.win.matchMedia("print").addListener(function (a) { g.printingChart && (a.matches ? g.printingChart.beforePrint() : g.printingChart.afterPrint()) }); A(e.prototype, {
                sanitizeSVG: function (a, b) {
                    var c = a.indexOf("</svg>") + 6, d = a.substr(c);
                    a = a.substr(0, c); b && b.exporting && b.exporting.allowHTML && d && (d = '<foreignObject x="0" y="0" width="' + b.chart.width + '" height="' + b.chart.height + '"><body xmlns="http://www.w3.org/1999/xhtml">' + d.replace(/(<(?:img|br).*?(?=>))>/g, "$1 />") + "</body></foreignObject>", a = a.replace("</svg>", d + "</svg>")); a = a.replace(/zIndex="[^"]+"/g, "").replace(/symbolName="[^"]+"/g, "").replace(/jQuery[0-9]+="[^"]+"/g, "").replace(/url\(("|&quot;)(.*?)("|&quot;);?\)/g, "url($2)").replace(/url\([^#]+#/g, "url(#").replace(/<svg /,
                        '<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ (|NS[0-9]+:)href=/g, " xlink:href=").replace(/\n/, " ").replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g, '$1="rgb($2)" $1-opacity="$3"').replace(/&nbsp;/g, "\u00a0").replace(/&shy;/g, "\u00ad"); this.ieSanitizeSVG && (a = this.ieSanitizeSVG(a)); return a
                }, getChartHTML: function () { this.styledMode && this.inlineStyles(); return this.container.innerHTML }, getSVG: function (a) {
                    var b, c = u(this.options, a); c.plotOptions = u(this.userOptions.plotOptions,
                        a && a.plotOptions); c.time = u(this.userOptions.time, a && a.time); var d = z("div", null, { position: "absolute", top: "-9999em", width: this.chartWidth + "px", height: this.chartHeight + "px" }, w.body); var f = this.renderTo.style.width; var x = this.renderTo.style.height; f = c.exporting.sourceWidth || c.chart.width || /px$/.test(f) && parseInt(f, 10) || (c.isGantt ? 800 : 600); x = c.exporting.sourceHeight || c.chart.height || /px$/.test(x) && parseInt(x, 10) || 400; A(c.chart, { animation: !1, renderTo: d, forExport: !0, renderer: "SVGRenderer", width: f, height: x });
                    c.exporting.enabled = !1; delete c.data; c.series = []; this.series.forEach(function (a) { b = u(a.userOptions, { animation: !1, enableMouseTracking: !1, showCheckbox: !1, visible: a.visible }); b.isInternal || c.series.push(b) }); this.axes.forEach(function (a) { a.userOptions.internalKey || (a.userOptions.internalKey = K()) }); var g = new e(c, this.callback); a && ["xAxis", "yAxis", "series"].forEach(function (b) { var d = {}; a[b] && (d[b] = a[b], g.update(d)) }); this.axes.forEach(function (a) {
                        var b = H(g.axes, function (b) {
                            return b.options.internalKey ===
                                a.userOptions.internalKey
                        }), d = a.getExtremes(), c = d.userMin; d = d.userMax; b && ("undefined" !== typeof c && c !== b.min || "undefined" !== typeof d && d !== b.max) && b.setExtremes(c, d, !0, !1)
                    }); f = g.getChartHTML(); D(this, "getSVG", { chartCopy: g }); f = this.sanitizeSVG(f, c); c = null; g.destroy(); E(d); return f
                }, getSVGForExport: function (a, b) { var c = this.options.exporting; return this.getSVG(u({ chart: { borderRadius: 0 } }, c.chartOptions, b, { exporting: { sourceWidth: a && a.sourceWidth || c.sourceWidth, sourceHeight: a && a.sourceHeight || c.sourceHeight } })) },
                getFilename: function () { var a = this.userOptions.title && this.userOptions.title.text, b = this.options.exporting.filename; if (b) return b.replace(/\//g, "-"); "string" === typeof a && (b = a.toLowerCase().replace(/<\/?[^>]+(>|$)/g, "").replace(/[\s_]+/g, "-").replace(/[^a-z0-9\-]/g, "").replace(/^[\-]+/g, "").replace(/[\-]+/g, "-").substr(0, 24).replace(/[\-]+$/g, "")); if (!b || 5 > b.length) b = "chart"; return b }, exportChart: function (a, b) {
                    b = this.getSVGForExport(a, b); a = u(this.options.exporting, a); g.post(a.url, {
                        filename: a.filename ?
                            a.filename.replace(/\//g, "-") : this.getFilename(), type: a.type, width: a.width || 0, scale: a.scale, svg: b
                    }, a.formAttributes)
                }, moveContainers: function (a) { (this.fixedDiv ? [this.fixedDiv, this.scrollingContainer] : [this.container]).forEach(function (b) { a.appendChild(b) }) }, beforePrint: function () {
                    var a = w.body, b = this.options.exporting.printMaxWidth, c = { childNodes: a.childNodes, origDisplay: [], resetParams: void 0 }; this.isPrinting = !0; this.pointer.reset(null, 0); D(this, "beforePrint"); b && this.chartWidth > b && (c.resetParams = [this.options.chart.width,
                    void 0, !1], this.setSize(b, void 0, !1));[].forEach.call(c.childNodes, function (a, b) { 1 === a.nodeType && (c.origDisplay[b] = a.style.display, a.style.display = "none") }); this.moveContainers(a); this.printReverseInfo = c
                }, afterPrint: function () {
                    if (this.printReverseInfo) {
                        var a = this.printReverseInfo.childNodes, b = this.printReverseInfo.origDisplay, c = this.printReverseInfo.resetParams; this.moveContainers(this.renderTo);[].forEach.call(a, function (a, c) { 1 === a.nodeType && (a.style.display = b[c] || "") }); this.isPrinting = !1; c && this.setSize.apply(this,
                            c); delete this.printReverseInfo; delete g.printingChart; D(this, "afterPrint")
                    }
                }, print: function () { var a = this; a.isPrinting || (g.printingChart = a, g.isSafari || a.beforePrint(), setTimeout(function () { B.focus(); B.print(); g.isSafari || setTimeout(function () { a.afterPrint() }, 1E3) }, 1)) }, contextMenu: function (a, b, c, d, e, g, k) {
                    var h = this, x = h.options.navigation, l = h.chartWidth, C = h.chartHeight, p = "cache-" + a, n = h[p], v = Math.max(e, g); if (!n) {
                    h.exportContextMenu = h[p] = n = z("div", { className: a }, {
                        position: "absolute", zIndex: 1E3, padding: v +
                            "px", pointerEvents: "auto"
                    }, h.fixedDiv || h.container); var m = z("ul", { className: "highcharts-menu" }, { listStyle: "none", margin: 0, padding: 0 }, n); h.styledMode || r(m, A({ MozBoxShadow: "3px 3px 10px #888", WebkitBoxShadow: "3px 3px 10px #888", boxShadow: "3px 3px 10px #888" }, x.menuStyle)); n.hideMenu = function () { r(n, { display: "none" }); k && k.setState(0); h.openMenu = !1; r(h.renderTo, { overflow: "hidden" }); f.clearTimeout(n.hideTimer); D(h, "exportMenuHidden") }; h.exportEvents.push(y(n, "mouseleave", function () {
                    n.hideTimer = B.setTimeout(n.hideMenu,
                        500)
                    }), y(n, "mouseenter", function () { f.clearTimeout(n.hideTimer) }), y(w, "mouseup", function (b) { h.pointer.inClass(b.target, a) || n.hideMenu() }), y(n, "click", function () { h.openMenu && n.hideMenu() })); b.forEach(function (a) {
                    "string" === typeof a && (a = h.options.exporting.menuItemDefinitions[a]); if (I(a, !0)) {
                        if (a.separator) var b = z("hr", null, null, m); else "viewData" === a.textKey && h.isDataTableVisible && (a.textKey = "hideData"), b = z("li", {
                            className: "highcharts-menu-item", onclick: function (b) {
                                b && b.stopPropagation(); n.hideMenu();
                                a.onclick && a.onclick.apply(h, arguments)
                            }
                        }, null, m), b.appendChild(w.createTextNode(a.text || h.options.lang[a.textKey])), h.styledMode || (b.onmouseover = function () { r(this, x.menuItemHoverStyle) }, b.onmouseout = function () { r(this, x.menuItemStyle) }, r(b, A({ cursor: "pointer" }, x.menuItemStyle))); h.exportDivElements.push(b)
                    }
                    }); h.exportDivElements.push(m, n); h.exportMenuWidth = n.offsetWidth; h.exportMenuHeight = n.offsetHeight
                    } b = { display: "block" }; c + h.exportMenuWidth > l ? b.right = l - c - e - v + "px" : b.left = c - v + "px"; d + g + h.exportMenuHeight >
                        C && "top" !== k.alignOptions.verticalAlign ? b.bottom = C - d - v + "px" : b.top = d + g - v + "px"; r(n, b); r(h.renderTo, { overflow: "" }); h.openMenu = !0; D(h, "exportMenuShown")
                }, addButton: function (a) {
                    var b = this, c = b.renderer, d = u(b.options.navigation.buttonOptions, a), e = d.onclick, f = d.menuItems, g = d.symbolSize || 12; b.btnCount || (b.btnCount = 0); b.exportDivElements || (b.exportDivElements = [], b.exportSVGElements = []); if (!1 !== d.enabled) {
                        var h = d.theme, k = h.states, l = k && k.hover; k = k && k.select; var C; b.styledMode || (h.fill = t(h.fill, m.backgroundColor),
                            h.stroke = t(h.stroke, "none")); delete h.states; e ? C = function (a) { a && a.stopPropagation(); e.call(b, a) } : f && (C = function (a) { a && a.stopPropagation(); b.contextMenu(p.menuClassName, f, p.translateX, p.translateY, p.width, p.height, p); p.setState(2) }); d.text && d.symbol ? h.paddingLeft = t(h.paddingLeft, 30) : d.text || A(h, { width: d.width, height: d.height, padding: 0 }); b.styledMode || (h["stroke-linecap"] = "round", h.fill = t(h.fill, m.backgroundColor), h.stroke = t(h.stroke, "none")); var p = c.button(d.text, 0, 0, C, h, l, k).addClass(a.className).attr({
                                title: t(b.options.lang[d._titleKey ||
                                    d.titleKey], "")
                            }); p.menuClassName = a.menuClassName || "highcharts-menu-" + b.btnCount++; if (d.symbol) { var n = c.symbol(d.symbol, d.symbolX - g / 2, d.symbolY - g / 2, g, g, { width: g, height: g }).addClass("highcharts-button-symbol").attr({ zIndex: 1 }).add(p); b.styledMode || n.attr({ stroke: d.symbolStroke, fill: d.symbolFill, "stroke-width": d.symbolStrokeWidth || 1 }) } p.add(b.exportingGroup).align(A(d, { width: p.width, x: t(d.x, b.buttonOffset) }), !0, "spacingBox"); b.buttonOffset += (p.width + d.buttonSpacing) * ("right" === d.align ? -1 : 1); b.exportSVGElements.push(p,
                                n)
                    }
                }, destroyExport: function (a) {
                    var b = a ? a.target : this; a = b.exportSVGElements; var c = b.exportDivElements, d = b.exportEvents, e; a && (a.forEach(function (a, d) { a && (a.onclick = a.ontouchstart = null, e = "cache-" + a.menuClassName, b[e] && delete b[e], b.exportSVGElements[d] = a.destroy()) }), a.length = 0); b.exportingGroup && (b.exportingGroup.destroy(), delete b.exportingGroup); c && (c.forEach(function (a, d) {
                        f.clearTimeout(a.hideTimer); J(a, "mouseleave"); b.exportDivElements[d] = a.onmouseout = a.onmouseover = a.ontouchstart = a.onclick = null;
                        E(a)
                    }), c.length = 0); d && (d.forEach(function (a) { a() }), d.length = 0)
                }
            }); q.prototype.inlineToAttributes = "fill stroke strokeLinecap strokeLinejoin strokeWidth textAnchor x y".split(" "); q.prototype.inlineBlacklist = [/-/, /^(clipPath|cssText|d|height|width)$/, /^font$/, /[lL]ogical(Width|Height)$/, /perspective/, /TapHighlightColor/, /^transition/, /^length$/]; q.prototype.unstyledElements = ["clipPath", "defs", "desc"]; e.prototype.inlineStyles = function () {
                function a(a) {
                    return a.replace(/([A-Z])/g, function (a, b) {
                        return "-" +
                            b.toLowerCase()
                    })
                } function b(c) {
                    function p(b, g) { v = q = !1; if (f) { for (r = f.length; r-- && !q;)q = f[r].test(g); v = !q } "transform" === g && "none" === b && (v = !0); for (r = e.length; r-- && !v;)v = e[r].test(g) || "function" === typeof b; v || x[g] === b && "svg" !== c.nodeName || h[c.nodeName][g] === b || (d && -1 === d.indexOf(g) ? n += a(g) + ":" + b + ";" : b && c.setAttribute(a(g), b)) } var n = "", v, q, r; if (1 === c.nodeType && -1 === k.indexOf(c.nodeName)) {
                        var t = B.getComputedStyle(c, null); var x = "svg" === c.nodeName ? {} : B.getComputedStyle(c.parentNode, null); if (!h[c.nodeName]) {
                            l =
                            m.getElementsByTagName("svg")[0]; var w = m.createElementNS(c.namespaceURI, c.nodeName); l.appendChild(w); h[c.nodeName] = u(B.getComputedStyle(w, null)); "text" === c.nodeName && delete h.text.fill; l.removeChild(w)
                        } if (g.isFirefox || g.isMS) for (var y in t) p(t[y], y); else F(t, p); n && (t = c.getAttribute("style"), c.setAttribute("style", (t ? t + ";" : "") + n)); "svg" === c.nodeName && c.setAttribute("stroke-width", "1px"); "text" !== c.nodeName && [].forEach.call(c.children || c.childNodes, b)
                    }
                } var c = this.renderer, d = c.inlineToAttributes, e = c.inlineBlacklist,
                    f = c.inlineWhitelist, k = c.unstyledElements, h = {}, l; c = w.createElement("iframe"); r(c, { width: "1px", height: "1px", visibility: "hidden" }); w.body.appendChild(c); var m = c.contentWindow.document; m.open(); m.write('<svg xmlns="http://www.w3.org/2000/svg"></svg>'); m.close(); b(this.container.querySelector("svg")); l.parentNode.remove(); c.remove()
            }; g.Renderer.prototype.symbols.menu = function (a, b, c, d) { return [["M", a, b + 2.5], ["L", a + c, b + 2.5], ["M", a, b + d / 2 + .5], ["L", a + c, b + d / 2 + .5], ["M", a, b + d - 1.5], ["L", a + c, b + d - 1.5]] }; g.Renderer.prototype.symbols.menuball =
                function (a, b, c, d) { a = []; d = d / 3 - 2; return a = a.concat(this.circle(c - d, b, d, d), this.circle(c - d, b + d + 4, d, d), this.circle(c - d, b + 2 * (d + 4), d, d)) }; e.prototype.renderExporting = function () { var a = this, b = a.options.exporting, c = b.buttons, d = a.isDirtyExporting || !a.exportSVGElements; a.buttonOffset = 0; a.isDirtyExporting && a.destroyExport(); d && !1 !== b.enabled && (a.exportEvents = [], a.exportingGroup = a.exportingGroup || a.renderer.g("exporting-group").attr({ zIndex: 3 }).add(), F(c, function (b) { a.addButton(b) }), a.isDirtyExporting = !1) }; y(e,
                    "init", function () { var a = this; a.exporting = { update: function (b, c) { a.isDirtyExporting = !0; u(!0, a.options.exporting, b); t(c, !0) && a.redraw() } }; k.addUpdate(function (b, c) { a.isDirtyExporting = !0; u(!0, a.options.navigation, b); t(c, !0) && a.redraw() }, a) }); e.prototype.callbacks.push(function (a) { a.renderExporting(); y(a, "redraw", a.renderExporting); y(a, "destroy", a.destroyExport) })
        }); q(e, "masters/modules/exporting.src.js", [], function () { })
});
//# sourceMappingURL=exporting.js.map