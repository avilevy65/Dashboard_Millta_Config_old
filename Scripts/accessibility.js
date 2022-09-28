/*
 Highcharts JS v9.0.0 (2021-02-02)

 Accessibility module

 (c) 2010-2019 Highsoft AS
 Author: Oystein Moseng

 License: www.highcharts.com/license
*/
(function (b) { "object" === typeof module && module.exports ? (b["default"] = b, module.exports = b) : "function" === typeof define && define.amd ? define("highcharts/modules/accessibility", ["highcharts"], function (t) { b(t); b.Highcharts = t; return b }) : b("undefined" !== typeof Highcharts ? Highcharts : void 0) })(function (b) {
    function t(b, k, m, p) { b.hasOwnProperty(k) || (b[k] = p.apply(null, m)) } b = b ? b._modules : {}; t(b, "Accessibility/Utils/HTMLUtilities.js", [b["Core/Globals.js"], b["Core/Utilities.js"]], function (b, k) {
        var y = b.doc, p = b.win, q =
            k.merge; return {
                addClass: function (b, f) { b.classList ? b.classList.add(f) : 0 > b.className.indexOf(f) && (b.className += f) }, escapeStringForHTML: function (b) { return b.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;") }, getElement: function (b) { return y.getElementById(b) }, getFakeMouseEvent: function (b) {
                    if ("function" === typeof p.MouseEvent) return new p.MouseEvent(b); if (y.createEvent) {
                        var g = y.createEvent("MouseEvent"); if (g.initMouseEvent) return g.initMouseEvent(b,
                            !0, !0, p, "click" === b ? 1 : 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), g
                    } return { type: b }
                }, removeElement: function (b) { b && b.parentNode && b.parentNode.removeChild(b) }, reverseChildNodes: function (b) { for (var g = b.childNodes.length; g--;)b.appendChild(b.childNodes[g]) }, setElAttrs: function (b, f) { Object.keys(f).forEach(function (g) { var r = f[g]; null === r ? b.removeAttribute(g) : b.setAttribute(g, r) }) }, stripHTMLTagsFromString: function (b) { return "string" === typeof b ? b.replace(/<\/?[^>]+(>|$)/g, "") : b }, visuallyHideElement: function (b) {
                    q(!0, b.style,
                        { position: "absolute", width: "1px", height: "1px", overflow: "hidden", whiteSpace: "nowrap", clip: "rect(1px, 1px, 1px, 1px)", marginTop: "-3px", "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=1)", filter: "alpha(opacity=1)", opacity: "0.01" })
                }
            }
    }); t(b, "Accessibility/Utils/ChartUtilities.js", [b["Accessibility/Utils/HTMLUtilities.js"], b["Core/Utilities.js"]], function (b, k) {
        function y(a) {
            var c = a.chart, e = {}, l = "Seconds"; e.Seconds = ((a.max || 0) - (a.min || 0)) / 1E3; e.Minutes = e.Seconds / 60; e.Hours = e.Minutes / 60; e.Days =
                e.Hours / 24;["Minutes", "Hours", "Days"].forEach(function (a) { 2 < e[a] && (l = a) }); var d = e[l].toFixed("Seconds" !== l && "Minutes" !== l ? 1 : 0); return c.langFormat("accessibility.axis.timeRange" + l, { chart: c, axis: a, range: d.replace(".0", "") })
        } function p(a) {
            var c, e, l = a.chart, d = (null === (e = null === (c = l.options) || void 0 === c ? void 0 : c.accessibility) || void 0 === e ? void 0 : e.screenReaderSection.axisRangeDateFormat) || ""; c = function (c) { return a.dateTime ? l.time.dateFormat(d, a[c]) : a[c] }; return l.langFormat("accessibility.axis.rangeFromTo",
                { chart: l, axis: a, rangeFrom: c("min"), rangeTo: c("max") })
        } function q(a) { var c, e; if (null === (c = a.points) || void 0 === c ? 0 : c.length) return a = h(a.points, function (a) { return !!a.graphic }), null === (e = null === a || void 0 === a ? void 0 : a.graphic) || void 0 === e ? void 0 : e.element } function g(a) { var c = q(a); return c && c.parentNode || a.graph && a.graph.element || a.group && a.group.element } function f(a, c) {
            c.setAttribute("aria-hidden", !1); c !== a.renderTo && c.parentNode && (Array.prototype.forEach.call(c.parentNode.childNodes, function (a) {
                a.hasAttribute("aria-hidden") ||
                a.setAttribute("aria-hidden", !0)
            }), f(a, c.parentNode))
        } var u = b.stripHTMLTagsFromString, r = k.defined, h = k.find, d = k.fireEvent; return {
            getChartTitle: function (a) { return u(a.options.title.text || a.langFormat("accessibility.defaultChartTitle", { chart: a })) }, getAxisDescription: function (a) { return a && (a.userOptions && a.userOptions.accessibility && a.userOptions.accessibility.description || a.axisTitle && a.axisTitle.textStr || a.options.id || a.categories && "categories" || a.dateTime && "Time" || "values") }, getAxisRangeDescription: function (a) {
                var c =
                    a.options || {}; return c.accessibility && "undefined" !== typeof c.accessibility.rangeDescription ? c.accessibility.rangeDescription : a.categories ? (c = a.chart, a = a.dataMax && a.dataMin ? c.langFormat("accessibility.axis.rangeCategories", { chart: c, axis: a, numCategories: a.dataMax - a.dataMin + 1 }) : "", a) : !a.dateTime || 0 !== a.min && 0 !== a.dataMin ? p(a) : y(a)
            }, getPointFromXY: function (a, c, e) { for (var l = a.length, d; l--;)if (d = h(a[l].points || [], function (a) { return a.x === c && a.y === e })) return d }, getSeriesFirstPointElement: q, getSeriesFromName: function (a,
                c) { return c ? (a.series || []).filter(function (a) { return a.name === c }) : a.series }, getSeriesA11yElement: g, unhideChartElementFromAT: f, hideSeriesFromAT: function (a) { (a = g(a)) && a.setAttribute("aria-hidden", !0) }, scrollToPoint: function (a) {
                    var c = a.series.xAxis, e = a.series.yAxis, l = (null === c || void 0 === c ? 0 : c.scrollbar) ? c : e; if ((c = null === l || void 0 === l ? void 0 : l.scrollbar) && r(c.to) && r(c.from)) {
                        e = c.to - c.from; if (r(l.dataMin) && r(l.dataMax)) {
                            var n = l.toPixels(l.dataMin), b = l.toPixels(l.dataMax); a = (l.toPixels(a["xAxis" === l.coll ?
                                "x" : "y"] || 0) - n) / (b - n)
                        } else a = 0; c.updatePosition(a - e / 2, a + e / 2); d(c, "changed", { from: c.from, to: c.to, trigger: "scrollbar", DOMEvent: null })
                    }
                }
        }
    }); t(b, "Accessibility/KeyboardNavigationHandler.js", [b["Core/Utilities.js"]], function (b) {
        function k(b, k) { this.chart = b; this.keyCodeMap = k.keyCodeMap || []; this.validate = k.validate; this.init = k.init; this.terminate = k.terminate; this.response = { success: 1, prev: 2, next: 3, noHandler: 4, fail: 5 } } var y = b.find; k.prototype = {
            run: function (b) {
                var k = b.which || b.keyCode, g = this.response.noHandler,
                f = y(this.keyCodeMap, function (b) { return -1 < b[0].indexOf(k) }); f ? g = f[1].call(this, k, b) : 9 === k && (g = this.response[b.shiftKey ? "prev" : "next"]); return g
            }
        }; return k
    }); t(b, "Accessibility/Utils/DOMElementProvider.js", [b["Core/Globals.js"], b["Accessibility/Utils/HTMLUtilities.js"], b["Core/Utilities.js"]], function (b, k, m) {
        var y = b.doc, q = k.removeElement; b = m.extend; k = function () { this.elements = [] }; b(k.prototype, {
            createElement: function () { var b = y.createElement.apply(y, arguments); this.elements.push(b); return b }, destroyCreatedElements: function () {
                this.elements.forEach(function (b) { q(b) });
                this.elements = []
            }
        }); return k
    }); t(b, "Accessibility/Utils/EventProvider.js", [b["Core/Globals.js"], b["Core/Utilities.js"]], function (b, k) { var y = k.addEvent; k = k.extend; var p = function () { this.eventRemovers = [] }; k(p.prototype, { addEvent: function () { var k = y.apply(b, arguments); this.eventRemovers.push(k); return k }, removeAddedEvents: function () { this.eventRemovers.forEach(function (b) { b() }); this.eventRemovers = [] } }); return p }); t(b, "Accessibility/AccessibilityComponent.js", [b["Accessibility/Utils/ChartUtilities.js"],
    b["Accessibility/Utils/DOMElementProvider.js"], b["Accessibility/Utils/EventProvider.js"], b["Core/Globals.js"], b["Accessibility/Utils/HTMLUtilities.js"], b["Core/Utilities.js"]], function (b, k, m, p, q, g) {
        function f() { } var u = b.unhideChartElementFromAT, r = p.doc, h = p.win, d = q.removeElement, a = q.getFakeMouseEvent; b = g.extend; var c = g.fireEvent, e = g.merge; f.prototype = {
            initBase: function (a) {
            this.chart = a; this.eventProvider = new m; this.domElementProvider = new k; this.keyCodes = {
                left: 37, right: 39, up: 38, down: 40, enter: 13, space: 32,
                esc: 27, tab: 9
            }
            }, addEvent: function () { return this.eventProvider.addEvent.apply(this.eventProvider, arguments) }, createElement: function () { return this.domElementProvider.createElement.apply(this.domElementProvider, arguments) }, fireEventOnWrappedOrUnwrappedElement: function (a, e) { var l = e.type; r.createEvent && (a.dispatchEvent || a.fireEvent) ? a.dispatchEvent ? a.dispatchEvent(e) : a.fireEvent(l, e) : c(a, l, e) }, fakeClickEvent: function (c) { if (c) { var e = a("click"); this.fireEventOnWrappedOrUnwrappedElement(c, e) } }, addProxyGroup: function (a) {
                this.createOrUpdateProxyContainer();
                var c = this.createElement("div"); Object.keys(a || {}).forEach(function (e) { null !== a[e] && c.setAttribute(e, a[e]) }); this.chart.a11yProxyContainer.appendChild(c); return c
            }, createOrUpdateProxyContainer: function () { var a = this.chart, c = a.renderer.box; a.a11yProxyContainer = a.a11yProxyContainer || this.createProxyContainerElement(); c.nextSibling !== a.a11yProxyContainer && a.container.insertBefore(a.a11yProxyContainer, c.nextSibling) }, createProxyContainerElement: function () {
                var a = r.createElement("div"); a.className = "highcharts-a11y-proxy-container";
                return a
            }, createProxyButton: function (a, c, d, b, h) { var l = a.element, n = this.createElement("button"), g = e({ "aria-label": l.getAttribute("aria-label") }, d); Object.keys(g).forEach(function (a) { null !== g[a] && n.setAttribute(a, g[a]) }); n.className = "highcharts-a11y-proxy-button"; h && this.addEvent(n, "click", h); this.setProxyButtonStyle(n); this.updateProxyButtonPosition(n, b || a); this.proxyMouseEventsForButton(l, n); c.appendChild(n); g["aria-hidden"] || u(this.chart, n); return n }, getElementPosition: function (a) {
                var c = a.element;
                return (a = this.chart.renderTo) && c && c.getBoundingClientRect ? (c = c.getBoundingClientRect(), a = a.getBoundingClientRect(), { x: c.left - a.left, y: c.top - a.top, width: c.right - c.left, height: c.bottom - c.top }) : { x: 0, y: 0, width: 1, height: 1 }
            }, setProxyButtonStyle: function (a) {
                e(!0, a.style, {
                    "border-width": 0, "background-color": "transparent", cursor: "pointer", outline: "none", opacity: .001, filter: "alpha(opacity=1)", "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=1)", zIndex: 999, overflow: "hidden", padding: 0, margin: 0, display: "block",
                    position: "absolute"
                })
            }, updateProxyButtonPosition: function (a, c) { c = this.getElementPosition(c); e(!0, a.style, { width: (c.width || 1) + "px", height: (c.height || 1) + "px", left: (c.x || 0) + "px", top: (c.y || 0) + "px" }) }, proxyMouseEventsForButton: function (a, c) {
                var e = this; "click touchstart touchend touchcancel touchmove mouseover mouseenter mouseleave mouseout".split(" ").forEach(function (l) {
                    var d = 0 === l.indexOf("touch"); e.addEvent(c, l, function (c) {
                        var l = d ? e.cloneTouchEvent(c) : e.cloneMouseEvent(c); a && e.fireEventOnWrappedOrUnwrappedElement(a,
                            l); c.stopPropagation(); c.preventDefault()
                    }, { passive: !1 })
                })
            }, cloneMouseEvent: function (c) { if ("function" === typeof h.MouseEvent) return new h.MouseEvent(c.type, c); if (r.createEvent) { var e = r.createEvent("MouseEvent"); if (e.initMouseEvent) return e.initMouseEvent(c.type, c.bubbles, c.cancelable, c.view || h, c.detail, c.screenX, c.screenY, c.clientX, c.clientY, c.ctrlKey, c.altKey, c.shiftKey, c.metaKey, c.button, c.relatedTarget), e } return a(c.type) }, cloneTouchEvent: function (a) {
                var c = function (a) {
                    for (var c = [], e = 0; e < a.length; ++e) {
                        var d =
                            a.item(e); d && c.push(d)
                    } return c
                }; if ("function" === typeof h.TouchEvent) return c = new h.TouchEvent(a.type, { touches: c(a.touches), targetTouches: c(a.targetTouches), changedTouches: c(a.changedTouches), ctrlKey: a.ctrlKey, shiftKey: a.shiftKey, altKey: a.altKey, metaKey: a.metaKey, bubbles: a.bubbles, cancelable: a.cancelable, composed: a.composed, detail: a.detail, view: a.view }), a.defaultPrevented && c.preventDefault(), c; c = this.cloneMouseEvent(a); c.touches = a.touches; c.changedTouches = a.changedTouches; c.targetTouches = a.targetTouches;
                return c
            }, destroyBase: function () { d(this.chart.a11yProxyContainer); this.domElementProvider.destroyCreatedElements(); this.eventProvider.removeAddedEvents() }
        }; b(f.prototype, { init: function () { }, getKeyboardNavigation: function () { }, onChartUpdate: function () { }, onChartRender: function () { }, destroy: function () { } }); return f
    }); t(b, "Accessibility/KeyboardNavigation.js", [b["Core/Globals.js"], b["Core/Utilities.js"], b["Accessibility/Utils/HTMLUtilities.js"], b["Accessibility/Utils/EventProvider.js"]], function (b, k, m, p) {
        function y(d,
            a) { this.init(d, a) } var g = b.doc, f = b.win, u = k.addEvent, r = k.fireEvent, h = m.getElement; u(g, "keydown", function (d) { 27 === (d.which || d.keyCode) && b.charts && b.charts.forEach(function (a) { a && a.dismissPopupContent && a.dismissPopupContent() }) }); b.Chart.prototype.dismissPopupContent = function () { var d = this; r(this, "dismissPopupContent", {}, function () { d.tooltip && d.tooltip.hide(0); d.hideExportMenu() }) }; y.prototype = {
                init: function (d, a) {
                    var c = this, e = this.eventProvider = new p; this.chart = d; this.components = a; this.modules = []; this.currentModuleIx =
                        0; this.update(); e.addEvent(this.tabindexContainer, "keydown", function (a) { return c.onKeydown(a) }); e.addEvent(this.tabindexContainer, "focus", function (a) { return c.onFocus(a) });["mouseup", "touchend"].forEach(function (a) { return e.addEvent(g, a, function () { return c.onMouseUp() }) });["mousedown", "touchstart"].forEach(function (a) { return e.addEvent(d.renderTo, a, function () { c.isClickingChart = !0 }) }); e.addEvent(d.renderTo, "mouseover", function () { c.pointerIsOverChart = !0 }); e.addEvent(d.renderTo, "mouseout", function () {
                        c.pointerIsOverChart =
                            !1
                        }); this.modules.length && this.modules[0].init(1)
                }, update: function (d) { var a = this.chart.options.accessibility; a = a && a.keyboardNavigation; var c = this.components; this.updateContainerTabindex(); a && a.enabled && d && d.length ? (this.modules = d.reduce(function (a, d) { d = c[d].getKeyboardNavigation(); return a.concat(d) }, []), this.updateExitAnchor()) : (this.modules = [], this.currentModuleIx = 0, this.removeExitAnchor()) }, onFocus: function (d) {
                    var a, c = this.chart; d = d.relatedTarget && c.container.contains(d.relatedTarget); this.isClickingChart ||
                        d || (null === (a = this.modules[0]) || void 0 === a ? void 0 : a.init(1))
                }, onMouseUp: function () { delete this.isClickingChart; if (!this.keyboardReset && !this.pointerIsOverChart) { var d = this.chart, a = this.modules && this.modules[this.currentModuleIx || 0]; a && a.terminate && a.terminate(); d.focusElement && d.focusElement.removeFocusBorder(); this.currentModuleIx = 0; this.keyboardReset = !0 } }, onKeydown: function (d) {
                    d = d || f.event; var a, c = this.modules && this.modules.length && this.modules[this.currentModuleIx]; this.keyboardReset = !1; if (c) {
                        var e =
                            c.run(d); e === c.response.success ? a = !0 : e === c.response.prev ? a = this.prev() : e === c.response.next && (a = this.next()); a && (d.preventDefault(), d.stopPropagation())
                    }
                }, prev: function () { return this.move(-1) }, next: function () { return this.move(1) }, move: function (d) {
                    var a = this.modules && this.modules[this.currentModuleIx]; a && a.terminate && a.terminate(d); this.chart.focusElement && this.chart.focusElement.removeFocusBorder(); this.currentModuleIx += d; if (a = this.modules && this.modules[this.currentModuleIx]) {
                        if (a.validate && !a.validate()) return this.move(d);
                        if (a.init) return a.init(d), !0
                    } this.currentModuleIx = 0; 0 < d ? (this.exiting = !0, this.exitAnchor.focus()) : this.tabindexContainer.focus(); return !1
                }, updateExitAnchor: function () { var d = h("highcharts-end-of-chart-marker-" + this.chart.index); this.removeExitAnchor(); d ? (this.makeElementAnExitAnchor(d), this.exitAnchor = d) : this.createExitAnchor() }, updateContainerTabindex: function () {
                    var d = this.chart.options.accessibility; d = d && d.keyboardNavigation; d = !(d && !1 === d.enabled); var a = this.chart, c = a.container; a.renderTo.hasAttribute("tabindex") &&
                        (c.removeAttribute("tabindex"), c = a.renderTo); this.tabindexContainer = c; var e = c.getAttribute("tabindex"); d && !e ? c.setAttribute("tabindex", "0") : d || a.container.removeAttribute("tabindex")
                }, makeElementAnExitAnchor: function (d) { var a = this.tabindexContainer.getAttribute("tabindex") || 0; d.setAttribute("class", "highcharts-exit-anchor"); d.setAttribute("tabindex", a); d.setAttribute("aria-hidden", !1); this.addExitAnchorEventsToEl(d) }, createExitAnchor: function () {
                    var d = this.chart, a = this.exitAnchor = g.createElement("div");
                    d.renderTo.appendChild(a); this.makeElementAnExitAnchor(a)
                }, removeExitAnchor: function () { this.exitAnchor && this.exitAnchor.parentNode && (this.exitAnchor.parentNode.removeChild(this.exitAnchor), delete this.exitAnchor) }, addExitAnchorEventsToEl: function (d) {
                    var a = this.chart, c = this; this.eventProvider.addEvent(d, "focus", function (e) {
                        e = e || f.event; e.relatedTarget && a.container.contains(e.relatedTarget) || c.exiting ? c.exiting = !1 : (c.tabindexContainer.focus(), e.preventDefault(), c.modules && c.modules.length && (c.currentModuleIx =
                            c.modules.length - 1, (e = c.modules[c.currentModuleIx]) && e.validate && !e.validate() ? c.prev() : e && e.init(-1)))
                    })
                }, destroy: function () { this.removeExitAnchor(); this.eventProvider.removeAddedEvents(); this.chart.container.removeAttribute("tabindex") }
            }; return y
    }); t(b, "Accessibility/Components/LegendComponent.js", [b["Core/Globals.js"], b["Core/Legend.js"], b["Core/Utilities.js"], b["Accessibility/AccessibilityComponent.js"], b["Accessibility/KeyboardNavigationHandler.js"], b["Accessibility/Utils/HTMLUtilities.js"]],
        function (b, k, m, p, q, g) {
            function f(a) { var c = a.legend && a.legend.allItems, e = a.options.legend.accessibility || {}; return !(!c || !c.length || a.colorAxis && a.colorAxis.length || !1 === e.enabled) } var u = m.addEvent, r = m.extend, h = m.find, d = m.fireEvent, a = g.removeElement, c = g.stripHTMLTagsFromString; b.Chart.prototype.highlightLegendItem = function (a) {
                var c = this.legend.allItems, e = this.highlightedLegendItemIx; if (c[a]) {
                c[e] && d(c[e].legendGroup.element, "mouseout"); e = this.legend; var b = e.allItems[a].pageIx, h = e.currentPage; "undefined" !==
                    typeof b && b + 1 !== h && e.scroll(1 + b - h); this.setFocusToElement(c[a].legendItem, c[a].a11yProxyElement); d(c[a].legendGroup.element, "mouseover"); return !0
                } return !1
            }; u(k, "afterColorizeItem", function (a) { var c = a.item; this.chart.options.accessibility.enabled && c && c.a11yProxyElement && c.a11yProxyElement.setAttribute("aria-pressed", a.visible ? "true" : "false") }); b = function () { }; b.prototype = new p; r(b.prototype, {
                init: function () {
                    var a = this; this.proxyElementsList = []; this.recreateProxies(); this.addEvent(k, "afterScroll", function () {
                    this.chart ===
                        a.chart && (a.updateProxiesPositions(), a.updateLegendItemProxyVisibility(), this.chart.highlightLegendItem(a.highlightedLegendItemIx))
                    }); this.addEvent(k, "afterPositionItem", function (c) { this.chart === a.chart && this.chart.renderer && a.updateProxyPositionForItem(c.item) })
                }, updateLegendItemProxyVisibility: function () {
                    var a = this.chart.legend, c = a.currentPage || 1, d = a.clipHeight || 0; (a.allItems || []).forEach(function (e) {
                        var b = e.pageIx || 0, l = e._legendItemPos ? e._legendItemPos[1] : 0, n = e.legendItem ? Math.round(e.legendItem.getBBox().height) :
                            0; b = l + n - a.pages[b] > d || b !== c - 1; e.a11yProxyElement && (e.a11yProxyElement.style.visibility = b ? "hidden" : "visible")
                    })
                }, onChartRender: function () { f(this.chart) ? this.updateProxiesPositions() : this.removeProxies() }, onChartUpdate: function () { this.updateLegendTitle() }, updateProxiesPositions: function () { for (var a = 0, c = this.proxyElementsList; a < c.length; a++) { var d = c[a]; this.updateProxyButtonPosition(d.element, d.posElement) } }, updateProxyPositionForItem: function (a) {
                    var c = h(this.proxyElementsList, function (c) {
                        return c.item ===
                            a
                    }); c && this.updateProxyButtonPosition(c.element, c.posElement)
                }, recreateProxies: function () { this.removeProxies(); f(this.chart) && (this.addLegendProxyGroup(), this.proxyLegendItems(), this.updateLegendItemProxyVisibility()) }, removeProxies: function () { a(this.legendProxyGroup); this.proxyElementsList = [] }, updateLegendTitle: function () {
                    var a, d, b = this.chart, h = c(((null === (d = null === (a = b.legend) || void 0 === a ? void 0 : a.options.title) || void 0 === d ? void 0 : d.text) || "").replace(/<br ?\/?>/g, " ")); a = b.langFormat("accessibility.legend.legendLabel" +
                        (h ? "" : "NoTitle"), { chart: b, legendTitle: h }); this.legendProxyGroup && this.legendProxyGroup.setAttribute("aria-label", a)
                }, addLegendProxyGroup: function () { this.legendProxyGroup = this.addProxyGroup({ "aria-label": "_placeholder_", role: "all" === this.chart.options.accessibility.landmarkVerbosity ? "region" : null }) }, proxyLegendItems: function () { var a = this; (this.chart.legend && this.chart.legend.allItems || []).forEach(function (c) { c.legendItem && c.legendItem.element && a.proxyLegendItem(c) }) }, proxyLegendItem: function (a) {
                    if (a.legendItem &&
                        a.legendGroup) { var e = this.chart.langFormat("accessibility.legend.legendItem", { chart: this.chart, itemName: c(a.name) }), d = a.legendGroup.div ? a.legendItem : a.legendGroup; a.a11yProxyElement = this.createProxyButton(a.legendItem, this.legendProxyGroup, { tabindex: -1, "aria-pressed": a.visible, "aria-label": e }, d); this.proxyElementsList.push({ item: a, element: a.a11yProxyElement, posElement: d }) }
                }, getKeyboardNavigation: function () {
                    var a = this.keyCodes, c = this; return new q(this.chart, {
                        keyCodeMap: [[[a.left, a.right, a.up, a.down],
                        function (a) { return c.onKbdArrowKey(this, a) }], [[a.enter, a.space], function () { return c.onKbdClick(this) }]], validate: function () { return c.shouldHaveLegendNavigation() }, init: function (a) { return c.onKbdNavigationInit(a) }
                    })
                }, onKbdArrowKey: function (a, c) {
                    var e = this.keyCodes, d = a.response, b = this.chart, l = b.options.accessibility, h = b.legend.allItems.length; c = c === e.left || c === e.up ? -1 : 1; return b.highlightLegendItem(this.highlightedLegendItemIx + c) ? (this.highlightedLegendItemIx += c, d.success) : 1 < h && l.keyboardNavigation.wrapAround ?
                        (a.init(c), d.success) : d[0 < c ? "next" : "prev"]
                }, onKbdClick: function (a) { var c = this.chart.legend.allItems[this.highlightedLegendItemIx]; c && c.a11yProxyElement && d(c.a11yProxyElement, "click"); return a.response.success }, shouldHaveLegendNavigation: function () { var a = this.chart, c = a.colorAxis && a.colorAxis.length, d = (a.options.legend || {}).accessibility || {}; return !!(a.legend && a.legend.allItems && a.legend.display && !c && d.enabled && d.keyboardNavigation && d.keyboardNavigation.enabled) }, onKbdNavigationInit: function (a) {
                    var c =
                        this.chart, d = c.legend.allItems.length - 1; a = 0 < a ? 0 : d; c.highlightLegendItem(a); this.highlightedLegendItemIx = a
                }
            }); return b
        }); t(b, "Accessibility/Components/MenuComponent.js", [b["Core/Globals.js"], b["Core/Utilities.js"], b["Accessibility/AccessibilityComponent.js"], b["Accessibility/KeyboardNavigationHandler.js"], b["Accessibility/Utils/ChartUtilities.js"], b["Accessibility/Utils/HTMLUtilities.js"]], function (b, k, m, p, q, g) {
            function f(d) { return d.exportSVGElements && d.exportSVGElements[0] } k = k.extend; var u = q.unhideChartElementFromAT,
                r = g.removeElement, h = g.getFakeMouseEvent; b.Chart.prototype.showExportMenu = function () { var d = f(this); if (d && (d = d.element, d.onclick)) d.onclick(h("click")) }; b.Chart.prototype.hideExportMenu = function () { var d = this.exportDivElements; d && this.exportContextMenu && (d.forEach(function (a) { if ("highcharts-menu-item" === a.className && a.onmouseout) a.onmouseout(h("mouseout")) }), this.highlightedExportItemIx = 0, this.exportContextMenu.hideMenu(), this.container.focus()) }; b.Chart.prototype.highlightExportItem = function (d) {
                    var a =
                        this.exportDivElements && this.exportDivElements[d], c = this.exportDivElements && this.exportDivElements[this.highlightedExportItemIx]; if (a && "LI" === a.tagName && (!a.children || !a.children.length)) { var b = !!(this.renderTo.getElementsByTagName("g")[0] || {}).focus; a.focus && b && a.focus(); if (c && c.onmouseout) c.onmouseout(h("mouseout")); if (a.onmouseover) a.onmouseover(h("mouseover")); this.highlightedExportItemIx = d; return !0 } return !1
                }; b.Chart.prototype.highlightLastExportItem = function () {
                    var d; if (this.exportDivElements) for (d =
                        this.exportDivElements.length; d--;)if (this.highlightExportItem(d)) return !0; return !1
                }; b = function () { }; b.prototype = new m; k(b.prototype, {
                    init: function () { var d = this.chart, a = this; this.addEvent(d, "exportMenuShown", function () { a.onMenuShown() }); this.addEvent(d, "exportMenuHidden", function () { a.onMenuHidden() }) }, onMenuHidden: function () { var d = this.chart.exportContextMenu; d && d.setAttribute("aria-hidden", "true"); this.isExportMenuShown = !1; this.setExportButtonExpandedState("false") }, onMenuShown: function () {
                        var d = this.chart,
                        a = d.exportContextMenu; a && (this.addAccessibleContextMenuAttribs(), u(d, a)); this.isExportMenuShown = !0; this.setExportButtonExpandedState("true")
                    }, setExportButtonExpandedState: function (d) { var a = this.exportButtonProxy; a && a.setAttribute("aria-expanded", d) }, onChartRender: function () {
                        var d = this.chart, a = d.options.accessibility; r(this.exportProxyGroup); var c = d.options.exporting, b = f(d); c && !1 !== c.enabled && c.accessibility && c.accessibility.enabled && b && b.element && (this.exportProxyGroup = this.addProxyGroup("all" ===
                            a.landmarkVerbosity ? { "aria-label": d.langFormat("accessibility.exporting.exportRegionLabel", { chart: d }), role: "region" } : {}), a = f(this.chart), this.exportButtonProxy = this.createProxyButton(a, this.exportProxyGroup, { "aria-label": d.langFormat("accessibility.exporting.menuButtonLabel", { chart: d }), "aria-expanded": "false" }))
                    }, addAccessibleContextMenuAttribs: function () {
                        var d = this.chart, a = d.exportDivElements; a && a.length && (a.forEach(function (a) {
                        "LI" !== a.tagName || a.children && a.children.length ? a.setAttribute("aria-hidden",
                            "true") : a.setAttribute("tabindex", -1)
                        }), a = a[0].parentNode, a.removeAttribute("aria-hidden"), a.setAttribute("aria-label", d.langFormat("accessibility.exporting.chartMenuLabel", { chart: d })))
                    }, getKeyboardNavigation: function () {
                        var d = this.keyCodes, a = this.chart, c = this; return new p(a, {
                            keyCodeMap: [[[d.left, d.up], function () { return c.onKbdPrevious(this) }], [[d.right, d.down], function () { return c.onKbdNext(this) }], [[d.enter, d.space], function () { return c.onKbdClick(this) }]], validate: function () {
                                return a.exportChart &&
                                    !1 !== a.options.exporting.enabled && !1 !== a.options.exporting.accessibility.enabled
                            }, init: function () { var d = c.exportButtonProxy, b = a.exportingGroup; b && d && a.setFocusToElement(b, d) }, terminate: function () { a.hideExportMenu() }
                        })
                    }, onKbdPrevious: function (d) { var a = this.chart, c = a.options.accessibility; d = d.response; for (var b = a.highlightedExportItemIx || 0; b--;)if (a.highlightExportItem(b)) return d.success; return c.keyboardNavigation.wrapAround ? (a.highlightLastExportItem(), d.success) : d.prev }, onKbdNext: function (d) {
                        var a =
                            this.chart, c = a.options.accessibility; d = d.response; for (var b = (a.highlightedExportItemIx || 0) + 1; b < a.exportDivElements.length; ++b)if (a.highlightExportItem(b)) return d.success; return c.keyboardNavigation.wrapAround ? (a.highlightExportItem(0), d.success) : d.next
                    }, onKbdClick: function (d) { var a = this.chart, c = a.exportDivElements[a.highlightedExportItemIx], b = f(a).element; this.isExportMenuShown ? this.fakeClickEvent(c) : (this.fakeClickEvent(b), a.highlightExportItem(0)); return d.response.success }
                }); return b
        }); t(b, "Accessibility/Components/SeriesComponent/SeriesKeyboardNavigation.js",
            [b["Core/Chart/Chart.js"], b["Core/Series/Point.js"], b["Core/Series/Series.js"], b["Core/Series/SeriesRegistry.js"], b["Core/Utilities.js"], b["Accessibility/KeyboardNavigationHandler.js"], b["Accessibility/Utils/EventProvider.js"], b["Accessibility/Utils/ChartUtilities.js"]], function (b, k, m, p, q, g, f, u) {
                function r(a) { var c = a.index, b = a.series.points, d = b.length; if (b[c] !== a) for (; d--;) { if (b[d] === a) return d } else return c } function h(a) {
                    var c = a.chart.options.accessibility.keyboardNavigation.seriesNavigation, b = a.options.accessibility ||
                        {}, d = b.keyboardNavigation; return d && !1 === d.enabled || !1 === b.enabled || !1 === a.options.enableMouseTracking || !a.visible || c.pointNavigationEnabledThreshold && c.pointNavigationEnabledThreshold <= a.points.length
                } function d(a) { var c = a.series.chart.options.accessibility; return a.isNull && c.keyboardNavigation.seriesNavigation.skipNullPoints || !1 === a.visible || !1 === a.isInside || h(a.series) } function a(a, c, b, d) {
                    var e = Infinity, x = c.points.length, l = function (a) { return !(n(a.plotX) && n(a.plotY)) }; if (!l(a)) {
                        for (; x--;) {
                            var h =
                                c.points[x]; if (!l(h) && (h = (a.plotX - h.plotX) * (a.plotX - h.plotX) * (b || 1) + (a.plotY - h.plotY) * (a.plotY - h.plotY) * (d || 1), h < e)) { e = h; var w = x }
                        } return n(w) ? c.points[w] : void 0
                    }
                } function c(a) { var c = !1; delete a.highlightedPoint; return c = a.series.reduce(function (a, c) { return a || c.highlightFirstValidPoint() }, !1) } function e(a, c) { this.keyCodes = c; this.chart = a } var l = p.seriesTypes, n = q.defined, C = q.extend, F = q.fireEvent, y = u.getPointFromXY, t = u.getSeriesFromName, G = u.scrollToPoint; m.prototype.keyboardMoveVertical = !0;["column",
                    "pie"].forEach(function (a) { l[a] && (l[a].prototype.keyboardMoveVertical = !1) }); k.prototype.highlight = function () { var a = this.series.chart; if (this.isNull) a.tooltip && a.tooltip.hide(0); else this.onMouseOver(); G(this); this.graphic && a.setFocusToElement(this.graphic); a.highlightedPoint = this; return this }; b.prototype.highlightAdjacentPoint = function (a) {
                        var c = this.series, b = this.highlightedPoint, e = b && r(b) || 0, l = b && b.series.points, n = this.series && this.series[this.series.length - 1]; n = n && n.points && n.points[n.points.length -
                            1]; if (!c[0] || !c[0].points) return !1; if (b) { if (c = c[b.series.index + (a ? 1 : -1)], e = l[e + (a ? 1 : -1)], !e && c && (e = c.points[a ? 0 : c.points.length - 1]), !e) return !1 } else e = a ? c[0].points[0] : n; return d(e) ? (c = e.series, h(c) ? this.highlightedPoint = a ? c.points[c.points.length - 1] : c.points[0] : this.highlightedPoint = e, this.highlightAdjacentPoint(a)) : e.highlight()
                    }; m.prototype.highlightFirstValidPoint = function () {
                        var a = this.chart.highlightedPoint, c = (a && a.series) === this ? r(a) : 0; a = this.points; var b = a.length; if (a && b) {
                            for (var e = c; e < b; ++e)if (!d(a[e])) return a[e].highlight();
                            for (; 0 <= c; --c)if (!d(a[c])) return a[c].highlight()
                        } return !1
                    }; b.prototype.highlightAdjacentSeries = function (c) {
                        var b, d = this.highlightedPoint; var e = (b = this.series && this.series[this.series.length - 1]) && b.points && b.points[b.points.length - 1]; if (!this.highlightedPoint) return b = c ? this.series && this.series[0] : b, (e = c ? b && b.points && b.points[0] : e) ? e.highlight() : !1; b = this.series[d.series.index + (c ? -1 : 1)]; if (!b) return !1; e = a(d, b, 4); if (!e) return !1; if (h(b)) return e.highlight(), c = this.highlightAdjacentSeries(c), c ? c : (d.highlight(),
                            !1); e.highlight(); return e.series.highlightFirstValidPoint()
                    }; b.prototype.highlightAdjacentPointVertical = function (a) { var c = this.highlightedPoint, b = Infinity, e; if (!n(c.plotX) || !n(c.plotY)) return !1; this.series.forEach(function (l) { h(l) || l.points.forEach(function (x) { if (n(x.plotY) && n(x.plotX) && x !== c) { var h = x.plotY - c.plotY, g = Math.abs(x.plotX - c.plotX); g = Math.abs(h) * Math.abs(h) + g * g * 4; l.yAxis && l.yAxis.reversed && (h *= -1); !(0 >= h && a || 0 <= h && !a || 5 > g || d(x)) && g < b && (b = g, e = x) } }) }); return e ? e.highlight() : !1 }; C(e.prototype,
                        {
                            init: function () { var a = this, b = this.chart, d = this.eventProvider = new f; d.addEvent(m, "destroy", function () { return a.onSeriesDestroy(this) }); d.addEvent(b, "afterDrilldown", function () { c(this); this.focusElement && this.focusElement.removeFocusBorder() }); d.addEvent(b, "drilldown", function (c) { c = c.point; var b = c.series; a.lastDrilledDownPoint = { x: c.x, y: c.y, seriesName: b ? b.name : "" } }); d.addEvent(b, "drillupall", function () { setTimeout(function () { a.onDrillupAll() }, 10) }) }, onDrillupAll: function () {
                                var a = this.lastDrilledDownPoint,
                                c = this.chart, b = a && t(c, a.seriesName), d; a && b && n(a.x) && n(a.y) && (d = y(b, a.x, a.y)); c.container && c.container.focus(); d && d.highlight && d.highlight(); c.focusElement && c.focusElement.removeFocusBorder()
                            }, getKeyboardNavigationHandler: function () {
                                var a = this, c = this.keyCodes, b = this.chart, d = b.inverted; return new g(b, {
                                    keyCodeMap: [[d ? [c.up, c.down] : [c.left, c.right], function (c) { return a.onKbdSideways(this, c) }], [d ? [c.left, c.right] : [c.up, c.down], function (c) { return a.onKbdVertical(this, c) }], [[c.enter, c.space], function (a,
                                        c) { if (a = b.highlightedPoint) F(a.series, "click", C(c, { point: a })), a.firePointEvent("click"); return this.response.success }]], init: function (c) { return a.onHandlerInit(this, c) }, terminate: function () { return a.onHandlerTerminate() }
                                })
                            }, onKbdSideways: function (a, c) { var b = this.keyCodes; return this.attemptHighlightAdjacentPoint(a, c === b.right || c === b.down) }, onKbdVertical: function (a, c) {
                                var b = this.chart, d = this.keyCodes; c = c === d.down || c === d.right; d = b.options.accessibility.keyboardNavigation.seriesNavigation; if (d.mode &&
                                    "serialize" === d.mode) return this.attemptHighlightAdjacentPoint(a, c); b[b.highlightedPoint && b.highlightedPoint.series.keyboardMoveVertical ? "highlightAdjacentPointVertical" : "highlightAdjacentSeries"](c); return a.response.success
                            }, onHandlerInit: function (a, b) { var d = this.chart; if (0 < b) c(d); else { b = d.series.length; for (var e; b-- && !(d.highlightedPoint = d.series[b].points[d.series[b].points.length - 1], e = d.series[b].highlightFirstValidPoint());); } return a.response.success }, onHandlerTerminate: function () {
                                var a, c,
                                b = this.chart, d = b.highlightedPoint; null === (a = b.tooltip) || void 0 === a ? void 0 : a.hide(0); null === (c = null === d || void 0 === d ? void 0 : d.onMouseOut) || void 0 === c ? void 0 : c.call(d); delete b.highlightedPoint
                            }, attemptHighlightAdjacentPoint: function (a, c) { var b = this.chart, d = b.options.accessibility.keyboardNavigation.wrapAround; return b.highlightAdjacentPoint(c) ? a.response.success : d ? a.init(c ? 1 : -1) : a.response[c ? "next" : "prev"] }, onSeriesDestroy: function (a) {
                                var c = this.chart; c.highlightedPoint && c.highlightedPoint.series ===
                                    a && (delete c.highlightedPoint, c.focusElement && c.focusElement.removeFocusBorder())
                            }, destroy: function () { this.eventProvider.removeAddedEvents() }
                        }); return e
            }); t(b, "Accessibility/Components/AnnotationsA11y.js", [b["Accessibility/Utils/HTMLUtilities.js"]], function (b) {
                function k(b) { return (b.annotations || []).reduce(function (b, h) { var d; !1 !== (null === (d = h.options) || void 0 === d ? void 0 : d.visible) && (b = b.concat(h.labels)); return b }, []) } function m(b) {
                    var g, h, d, a, c = null === (h = null === (g = b.options) || void 0 === g ? void 0 :
                        g.accessibility) || void 0 === h ? void 0 : h.description; return c ? c : (null === (a = null === (d = b.graphic) || void 0 === d ? void 0 : d.text) || void 0 === a ? void 0 : a.textStr) || ""
                } function p(b) {
                    var g, h, d = null === (h = null === (g = b.options) || void 0 === g ? void 0 : g.accessibility) || void 0 === h ? void 0 : h.description; if (d) return d; g = b.chart; h = m(b); d = b.points.filter(function (a) { return !!a.graphic }).map(function (a) {
                        var c, b; if (!(b = null === (c = null === a || void 0 === a ? void 0 : a.accessibility) || void 0 === c ? void 0 : c.valueDescription)) {
                            var d, h; b = (null ===
                                (h = null === (d = null === a || void 0 === a ? void 0 : a.graphic) || void 0 === d ? void 0 : d.element) || void 0 === h ? void 0 : h.getAttribute("aria-label")) || ""
                        } a = (null === a || void 0 === a ? void 0 : a.series.name) || ""; return (a ? a + ", " : "") + "data point " + b
                    }).filter(function (a) { return !!a }); var a = d.length; b = "accessibility.screenReaderSection.annotations.description" + (1 < a ? "MultiplePoints" : a ? "SinglePoint" : "NoPoints"); h = { annotationText: h, numPoints: a, annotationPoint: d[0], additionalAnnotationPoints: d.slice(1) }; return g.langFormat(b, h)
                } function q(b) {
                    return k(b).map(function (b) {
                        return (b =
                            g(f(p(b)))) ? "<li>" + b + "</li>" : ""
                    })
                } var g = b.escapeStringForHTML, f = b.stripHTMLTagsFromString; return { getAnnotationsInfoHTML: function (b) { var g = b.annotations; return g && g.length ? "<ul>" + q(b).join(" ") + "</ul>" : "" }, getAnnotationLabelDescription: p, getAnnotationListItems: q, getPointAnnotationTexts: function (b) { var g = k(b.series.chart).filter(function (h) { return -1 < h.points.indexOf(b) }); return g.length ? g.map(function (b) { return "" + m(b) }) : [] } }
            }); t(b, "Accessibility/Components/SeriesComponent/SeriesDescriber.js", [b["Accessibility/Components/AnnotationsA11y.js"],
            b["Accessibility/Utils/ChartUtilities.js"], b["Accessibility/Utils/HTMLUtilities.js"], b["Core/Tooltip.js"], b["Core/Utilities.js"]], function (b, k, m, p, q) {
                function g(a) { var c = a.index; return a.series && a.series.data && J(c) ? M(a.series.data, function (a) { return !!(a && "undefined" !== typeof a.index && a.index > c && a.graphic && a.graphic.element) }) || null : null } function f(a) { var c = a.chart.options.accessibility.series.pointDescriptionEnabledThreshold; return !!(!1 !== c && a.points && a.points.length >= c) } function u(a) {
                    var c = a.options.accessibility ||
                        {}; return !f(a) && !c.exposeAsGroupOnly
                } function r(a) { var c = a.chart.options.accessibility.keyboardNavigation.seriesNavigation; return !(!a.points || !(a.points.length < c.pointNavigationEnabledThreshold || !1 === c.pointNavigationEnabledThreshold)) } function h(a, c) { var b = a.series.chart, d = b.options.accessibility.point || {}; a = a.series.tooltipOptions || {}; b = b.options.lang; return w(c) ? A(c, d.valueDecimals || a.valueDecimals || -1, b.decimalPoint, b.accessibility.thousandsSep || b.thousandsSep) : c } function d(a) {
                    var c = (a.options.accessibility ||
                        {}).description; return c && a.chart.langFormat("accessibility.series.description", { description: c, series: a }) || ""
                } function a(a, c) { return a.chart.langFormat("accessibility.series." + c + "Description", { name: B(a[c]), series: a }) } function c(a) {
                    var c = a.series, b = c.chart, d = b.options.accessibility.point || {}; if (c.xAxis && c.xAxis.dateTime) return c = p.prototype.getXDateFormat.call({ getDateFormat: p.prototype.getDateFormat, chart: b }, a, b.options.tooltip, c.xAxis), d = d.dateFormatter && d.dateFormatter(a) || d.dateFormat || c, b.time.dateFormat(d,
                        a.x, void 0)
                } function e(a) { var b = c(a), d = (a.series.xAxis || {}).categories && J(a.category) && ("" + a.category).replace("<br/>", " "), e = a.id && 0 > a.id.indexOf("highcharts-"), w = "x, " + a.x; return a.name || b || d || (e ? a.id : w) } function l(a, c, b) { var d = c || "", e = b || ""; return a.series.pointArrayMap.reduce(function (c, b) { c += c.length ? ", " : ""; var w = h(a, E(a[b], a.options[b])); return c + (b + ": " + d + w + e) }, "") } function n(a) {
                    var c = a.series, b = c.chart.options.accessibility.point || {}, d = c.tooltipOptions || {}, e = b.valuePrefix || d.valuePrefix ||
                        ""; b = b.valueSuffix || d.valueSuffix || ""; d = h(a, a["undefined" !== typeof a.value ? "value" : "y"]); return a.isNull ? c.chart.langFormat("accessibility.series.nullPointValue", { point: a }) : c.pointArrayMap ? l(a, e, b) : e + d + b
                } function C(a) {
                    var c = a.series, b = c.chart, d = b.options.accessibility.point.valueDescriptionFormat, w = (c = E(c.xAxis && c.xAxis.options.accessibility && c.xAxis.options.accessibility.enabled, !b.angular)) ? e(a) : ""; a = { point: a, index: J(a.index) ? a.index + 1 : "", xDescription: w, value: n(a), separator: c ? ", " : "" }; return v(d,
                        a, b)
                } function F(a) { var c = a.series, b = c.chart, d = C(a), e = a.options && a.options.accessibility && a.options.accessibility.description; e = e ? " " + e : ""; c = 1 < b.series.length && c.name ? " " + c.name + "." : ""; b = a.series.chart; var w = G(a), l = { point: a, annotations: w }; b = w.length ? b.langFormat("accessibility.series.pointAnnotationsDescription", l) : ""; a.accessibility = a.accessibility || {}; a.accessibility.valueDescription = d; return d + e + c + (b ? " " + b : "") } function y(a) {
                    var c = u(a), b = r(a); (c || b) && a.points.forEach(function (a) {
                        var b; if (!(b = a.graphic &&
                            a.graphic.element) && (b = a.series && a.series.is("sunburst"), b = a.isNull && !b)) {
                                var d = a.series, e = g(a); d = (b = e && e.graphic) ? b.parentGroup : d.graph || d.group; e = e ? { x: E(a.plotX, e.plotX, 0), y: E(a.plotY, e.plotY, 0) } : { x: E(a.plotX, 0), y: E(a.plotY, 0) }; e = a.series.chart.renderer.rect(e.x, e.y, 1, 1); e.attr({ "class": "highcharts-a11y-dummy-point", fill: "none", opacity: 0, "fill-opacity": 0, "stroke-opacity": 0 }); d && d.element ? (a.graphic = e, a.hasDummyGraphic = !0, e.add(d), d.element.insertBefore(e.element, b ? b.element : null), b = e.element) : b =
                                    void 0
                        } b && (b.setAttribute("tabindex", "-1"), b.style.outline = "0", c ? (e = a.series, d = e.chart.options.accessibility.point || {}, e = e.options.accessibility || {}, a = I(e.pointDescriptionFormatter && e.pointDescriptionFormatter(a) || d.descriptionFormatter && d.descriptionFormatter(a) || F(a)), b.setAttribute("role", "img"), b.setAttribute("aria-label", a)) : b.setAttribute("aria-hidden", !0))
                    })
                } function t(c) {
                    var b = c.chart, e = b.types || [], w = d(c), l = function (a) { return b[a] && 1 < b[a].length && c[a] }, h = a(c, "xAxis"), g = a(c, "yAxis"), n = {
                        name: c.name ||
                            "", ix: c.index + 1, numSeries: b.series && b.series.length, numPoints: c.points && c.points.length, series: c
                    }; e = 1 < e.length ? "Combination" : ""; return (b.langFormat("accessibility.series.summary." + c.type + e, n) || b.langFormat("accessibility.series.summary.default" + e, n)) + (w ? " " + w : "") + (l("yAxis") ? " " + g : "") + (l("xAxis") ? " " + h : "")
                } var G = b.getPointAnnotationTexts, B = k.getAxisDescription, x = k.getSeriesFirstPointElement, z = k.getSeriesA11yElement, D = k.unhideChartElementFromAT, H = m.reverseChildNodes, I = m.stripHTMLTagsFromString, M = q.find,
                    v = q.format, w = q.isNumber, A = q.numberFormat, E = q.pick, J = q.defined; return {
                        describeSeries: function (a) {
                            var c = a.chart, b = x(a), d = z(a), e = c.is3d && c.is3d(); if (d) {
                            d.lastChild !== b || e || H(d); y(a); D(c, d); e = a.chart; c = e.options.chart || {}; b = 1 < e.series.length; e = e.options.accessibility.series.describeSingleSeries; var w = (a.options.accessibility || {}).exposeAsGroupOnly; c.options3d && c.options3d.enabled && b || !(b || e || w || f(a)) ? d.setAttribute("aria-label", "") : (c = a.chart.options.accessibility, b = c.landmarkVerbosity, (a.options.accessibility ||
                                {}).exposeAsGroupOnly ? d.setAttribute("role", "img") : "all" === b && d.setAttribute("role", "region"), d.setAttribute("tabindex", "-1"), d.style.outline = "0", d.setAttribute("aria-label", I(c.series.descriptionFormatter && c.series.descriptionFormatter(a) || t(a))))
                            }
                        }, defaultPointDescriptionFormatter: F, defaultSeriesDescriptionFormatter: t, getPointA11yTimeDescription: c, getPointXDescription: e, getPointValue: n, getPointValueDescription: C
                    }
            }); t(b, "Accessibility/Utils/Announcer.js", [b["Core/Globals.js"], b["Core/Renderer/HTML/AST.js"],
            b["Accessibility/Utils/DOMElementProvider.js"], b["Accessibility/Utils/HTMLUtilities.js"]], function (b, k, m, p) {
                var q = b.doc, g = p.setElAttrs, f = p.visuallyHideElement; p = function () {
                    function b(b, h) { this.chart = b; this.domElementProvider = new m; this.announceRegion = this.addAnnounceRegion(h) } b.prototype.destroy = function () { this.domElementProvider.destroyCreatedElements() }; b.prototype.announce = function (b) {
                        var h = this; k.setElementHTML(this.announceRegion, b); this.clearAnnouncementRegionTimer && clearTimeout(this.clearAnnouncementRegionTimer);
                        this.clearAnnouncementRegionTimer = setTimeout(function () { h.announceRegion.innerHTML = ""; delete h.clearAnnouncementRegionTimer }, 1E3)
                    }; b.prototype.addAnnounceRegion = function (b) { var h = this.chart.announcerContainer || this.createAnnouncerContainer(), d = this.domElementProvider.createElement("div"); g(d, { "aria-hidden": !1, "aria-live": b }); f(d); h.appendChild(d); return d }; b.prototype.createAnnouncerContainer = function () {
                        var b = this.chart, h = q.createElement("div"); g(h, { "aria-hidden": !1, style: "position:relative", "class": "highcharts-announcer-container" });
                        b.renderTo.insertBefore(h, b.renderTo.firstChild); return b.announcerContainer = h
                    }; return b
                }(); return b.Announcer = p
            }); t(b, "Accessibility/Components/SeriesComponent/NewDataAnnouncer.js", [b["Core/Globals.js"], b["Core/Series/Series.js"], b["Core/Utilities.js"], b["Accessibility/Utils/ChartUtilities.js"], b["Accessibility/Components/SeriesComponent/SeriesDescriber.js"], b["Accessibility/Utils/Announcer.js"], b["Accessibility/Utils/EventProvider.js"]], function (b, k, m, p, q, g, f) {
                function u(a) {
                    var c = a.series.data.filter(function (c) {
                        return a.x ===
                            c.x && a.y === c.y
                    }); return 1 === c.length ? c[0] : a
                } function r(a, c) { var b = (a || []).concat(c || []).reduce(function (a, c) { a[c.name + c.index] = c; return a }, {}); return Object.keys(b).map(function (a) { return b[a] }) } var h = m.extend, d = m.defined, a = p.getChartTitle, c = q.defaultPointDescriptionFormatter, e = q.defaultSeriesDescriptionFormatter; m = function (a) { this.chart = a }; h(m.prototype, {
                    init: function () {
                        var a = this.chart, c = a.options.accessibility.announceNewData.interruptUser ? "assertive" : "polite"; this.lastAnnouncementTime = 0; this.dirty =
                            { allSeries: {} }; this.eventProvider = new f; this.announcer = new g(a, c); this.addEventListeners()
                    }, destroy: function () { this.eventProvider.removeAddedEvents(); this.announcer.destroy() }, addEventListeners: function () {
                        var a = this, c = this.chart, b = this.eventProvider; b.addEvent(c, "afterDrilldown", function () { a.lastAnnouncementTime = 0 }); b.addEvent(k, "updatedData", function () { a.onSeriesUpdatedData(this) }); b.addEvent(c, "afterAddSeries", function (c) { a.onSeriesAdded(c.series) }); b.addEvent(k, "addPoint", function (c) { a.onPointAdded(c.point) });
                        b.addEvent(c, "redraw", function () { a.announceDirtyData() })
                    }, onSeriesUpdatedData: function (a) { var c = this.chart; a.chart === c && c.options.accessibility.announceNewData.enabled && (this.dirty.hasDirty = !0, this.dirty.allSeries[a.name + a.index] = a) }, onSeriesAdded: function (a) { this.chart.options.accessibility.announceNewData.enabled && (this.dirty.hasDirty = !0, this.dirty.allSeries[a.name + a.index] = a, this.dirty.newSeries = d(this.dirty.newSeries) ? void 0 : a) }, onPointAdded: function (a) {
                        var c = a.series.chart; this.chart === c && c.options.accessibility.announceNewData.enabled &&
                            (this.dirty.newPoint = d(this.dirty.newPoint) ? void 0 : a)
                    }, announceDirtyData: function () { var a = this; if (this.chart.options.accessibility.announceNewData && this.dirty.hasDirty) { var c = this.dirty.newPoint; c && (c = u(c)); this.queueAnnouncement(Object.keys(this.dirty.allSeries).map(function (c) { return a.dirty.allSeries[c] }), this.dirty.newSeries, c); this.dirty = { allSeries: {} } } }, queueAnnouncement: function (a, c, b) {
                        var d = this, e = this.chart.options.accessibility.announceNewData; if (e.enabled) {
                            var h = +new Date; e = Math.max(0,
                                e.minAnnounceInterval - (h - this.lastAnnouncementTime)); a = r(this.queuedAnnouncement && this.queuedAnnouncement.series, a); if (c = this.buildAnnouncementMessage(a, c, b)) this.queuedAnnouncement && clearTimeout(this.queuedAnnouncementTimer), this.queuedAnnouncement = { time: h, message: c, series: a }, this.queuedAnnouncementTimer = setTimeout(function () { d && d.announcer && (d.lastAnnouncementTime = +new Date, d.announcer.announce(d.queuedAnnouncement.message), delete d.queuedAnnouncement, delete d.queuedAnnouncementTimer) }, e)
                        }
                    }, buildAnnouncementMessage: function (d,
                        h, g) { var l = this.chart, f = l.options.accessibility.announceNewData; if (f.announcementFormatter && (d = f.announcementFormatter(d, h, g), !1 !== d)) return d.length ? d : null; d = b.charts && 1 < b.charts.length ? "Multiple" : "Single"; d = h ? "newSeriesAnnounce" + d : g ? "newPointAnnounce" + d : "newDataAnnounce"; f = a(l); return l.langFormat("accessibility.announceNewData." + d, { chartTitle: f, seriesDesc: h ? e(h) : null, pointDesc: g ? c(g) : null, point: g, series: h }) }
                }); return m
            }); t(b, "Accessibility/Components/SeriesComponent/ForcedMarkers.js", [b["Core/Series/Series.js"],
            b["Core/Utilities.js"]], function (b, k) {
                function m(b) { q(!0, b, { marker: { enabled: !0, states: { normal: { opacity: 0 } } } }) } var p = k.addEvent, q = k.merge; return function () {
                    p(b, "render", function () {
                        var b = this.options, f = !1 !== (this.options.accessibility && this.options.accessibility.enabled); if (f = this.chart.options.accessibility.enabled && f) f = this.chart.options.accessibility, f = this.points.length < f.series.pointDescriptionEnabledThreshold || !1 === f.series.pointDescriptionEnabledThreshold; if (f) {
                            if (b.marker && !1 === b.marker.enabled &&
                                (this.a11yMarkersForced = !0, m(this.options)), this._hasPointMarkers && this.points && this.points.length) for (b = this.points.length; b--;) { f = this.points[b]; var k = f.options; delete f.hasForcedA11yMarker; k.marker && (k.marker.enabled ? (q(!0, k.marker, { states: { normal: { opacity: k.marker.states && k.marker.states.normal && k.marker.states.normal.opacity || 1 } } }), f.hasForcedA11yMarker = !1) : (m(k), f.hasForcedA11yMarker = !0)) }
                        } else this.a11yMarkersForced && (delete this.a11yMarkersForced, (b = this.resetA11yMarkerOptions) && q(!0, this.options,
                            { marker: { enabled: b.enabled, states: { normal: { opacity: b.states && b.states.normal && b.states.normal.opacity } } } }))
                    }); p(b, "afterSetOptions", function (b) { this.resetA11yMarkerOptions = q(b.options.marker || {}, this.userOptions.marker || {}) }); p(b, "afterRender", function () {
                        if (this.chart.styledMode) {
                            if (this.markerGroup) this.markerGroup[this.a11yMarkersForced ? "addClass" : "removeClass"]("highcharts-a11y-markers-hidden"); this._hasPointMarkers && this.points && this.points.length && this.points.forEach(function (b) {
                            b.graphic && (b.graphic[b.hasForcedA11yMarker ?
                                "addClass" : "removeClass"]("highcharts-a11y-marker-hidden"), b.graphic[!1 === b.hasForcedA11yMarker ? "addClass" : "removeClass"]("highcharts-a11y-marker-visible"))
                            })
                        }
                    })
                }
            }); t(b, "Accessibility/Components/SeriesComponent/SeriesComponent.js", [b["Core/Globals.js"], b["Core/Utilities.js"], b["Accessibility/AccessibilityComponent.js"], b["Accessibility/Components/SeriesComponent/SeriesKeyboardNavigation.js"], b["Accessibility/Components/SeriesComponent/NewDataAnnouncer.js"], b["Accessibility/Components/SeriesComponent/ForcedMarkers.js"],
            b["Accessibility/Utils/ChartUtilities.js"], b["Accessibility/Components/SeriesComponent/SeriesDescriber.js"], b["Core/Tooltip.js"]], function (b, k, m, p, q, g, f, u, r) {
                k = k.extend; var h = f.hideSeriesFromAT, d = u.describeSeries; b.SeriesAccessibilityDescriber = u; g(); b = function () { }; b.prototype = new m; k(b.prototype, {
                    init: function () {
                    this.newDataAnnouncer = new q(this.chart); this.newDataAnnouncer.init(); this.keyboardNavigation = new p(this.chart, this.keyCodes); this.keyboardNavigation.init(); this.hideTooltipFromATWhenShown();
                        this.hideSeriesLabelsFromATWhenShown()
                    }, hideTooltipFromATWhenShown: function () { var a = this; this.addEvent(r, "refresh", function () { this.chart === a.chart && this.label && this.label.element && this.label.element.setAttribute("aria-hidden", !0) }) }, hideSeriesLabelsFromATWhenShown: function () { this.addEvent(this.chart, "afterDrawSeriesLabels", function () { this.series.forEach(function (a) { a.labelBySeries && a.labelBySeries.attr("aria-hidden", !0) }) }) }, onChartRender: function () {
                        this.chart.series.forEach(function (a) {
                        !1 !== (a.options.accessibility &&
                            a.options.accessibility.enabled) && a.visible ? d(a) : h(a)
                        })
                    }, getKeyboardNavigation: function () { return this.keyboardNavigation.getKeyboardNavigationHandler() }, destroy: function () { this.newDataAnnouncer.destroy(); this.keyboardNavigation.destroy() }
                }); return b
            }); t(b, "Accessibility/Components/ZoomComponent.js", [b["Accessibility/AccessibilityComponent.js"], b["Accessibility/Utils/ChartUtilities.js"], b["Core/Globals.js"], b["Accessibility/Utils/HTMLUtilities.js"], b["Accessibility/KeyboardNavigationHandler.js"], b["Core/Utilities.js"]],
                function (b, k, m, p, q, g) {
                    var f = k.unhideChartElementFromAT; k = m.noop; var u = p.removeElement, r = p.setElAttrs; p = g.extend; var h = g.pick; m.Axis.prototype.panStep = function (b, a) { var c = a || 3; a = this.getExtremes(); var d = (a.max - a.min) / c * b; c = a.max + d; d = a.min + d; var h = c - d; 0 > b && d < a.dataMin ? (d = a.dataMin, c = d + h) : 0 < b && c > a.dataMax && (c = a.dataMax, d = c - h); this.setExtremes(d, c) }; k.prototype = new b; p(k.prototype, {
                        init: function () {
                            var b = this, a = this.chart;["afterShowResetZoom", "afterDrilldown", "drillupall"].forEach(function (c) {
                                b.addEvent(a,
                                    c, function () { b.updateProxyOverlays() })
                            })
                        }, onChartUpdate: function () { var b = this.chart, a = this; b.mapNavButtons && b.mapNavButtons.forEach(function (c, d) { f(b, c.element); a.setMapNavButtonAttrs(c.element, "accessibility.zoom.mapZoom" + (d ? "Out" : "In")) }) }, setMapNavButtonAttrs: function (b, a) { var c = this.chart; a = c.langFormat(a, { chart: c }); r(b, { tabindex: -1, role: "button", "aria-label": a }) }, onChartRender: function () { this.updateProxyOverlays() }, updateProxyOverlays: function () {
                            var b = this.chart; u(this.drillUpProxyGroup); u(this.resetZoomProxyGroup);
                            b.resetZoomButton && this.recreateProxyButtonAndGroup(b.resetZoomButton, "resetZoomProxyButton", "resetZoomProxyGroup", b.langFormat("accessibility.zoom.resetZoomButton", { chart: b })); b.drillUpButton && this.recreateProxyButtonAndGroup(b.drillUpButton, "drillUpProxyButton", "drillUpProxyGroup", b.langFormat("accessibility.drillUpButton", { chart: b, buttonText: b.getDrilldownBackText() }))
                        }, recreateProxyButtonAndGroup: function (b, a, c, e) {
                            u(this[c]); this[c] = this.addProxyGroup(); this[a] = this.createProxyButton(b, this[c],
                                { "aria-label": e, tabindex: -1 })
                        }, getMapZoomNavigation: function () { var b = this.keyCodes, a = this.chart, c = this; return new q(a, { keyCodeMap: [[[b.up, b.down, b.left, b.right], function (a) { return c.onMapKbdArrow(this, a) }], [[b.tab], function (a, b) { return c.onMapKbdTab(this, b) }], [[b.space, b.enter], function () { return c.onMapKbdClick(this) }]], validate: function () { return !!(a.mapZoom && a.mapNavButtons && a.mapNavButtons.length) }, init: function (a) { return c.onMapNavInit(a) } }) }, onMapKbdArrow: function (b, a) {
                            var c = this.keyCodes; this.chart[a ===
                                c.up || a === c.down ? "yAxis" : "xAxis"][0].panStep(a === c.left || a === c.up ? -1 : 1); return b.response.success
                        }, onMapKbdTab: function (b, a) { var c = this.chart; b = b.response; var d = (a = a.shiftKey) && !this.focusedMapNavButtonIx || !a && this.focusedMapNavButtonIx; c.mapNavButtons[this.focusedMapNavButtonIx].setState(0); if (d) return c.mapZoom(), b[a ? "prev" : "next"]; this.focusedMapNavButtonIx += a ? -1 : 1; a = c.mapNavButtons[this.focusedMapNavButtonIx]; c.setFocusToElement(a.box, a.element); a.setState(2); return b.success }, onMapKbdClick: function (b) {
                            this.fakeClickEvent(this.chart.mapNavButtons[this.focusedMapNavButtonIx].element);
                            return b.response.success
                        }, onMapNavInit: function (b) { var a = this.chart, c = a.mapNavButtons[0], d = a.mapNavButtons[1]; c = 0 < b ? c : d; a.setFocusToElement(c.box, c.element); c.setState(2); this.focusedMapNavButtonIx = 0 < b ? 0 : 1 }, simpleButtonNavigation: function (b, a, c) {
                            var d = this.keyCodes, g = this, f = this.chart; return new q(f, {
                                keyCodeMap: [[[d.tab, d.up, d.down, d.left, d.right], function (a, c) { return this.response[a === d.tab && c.shiftKey || a === d.left || a === d.up ? "prev" : "next"] }], [[d.space, d.enter], function () {
                                    var a = c(this, f); return h(a,
                                        this.response.success)
                                }]], validate: function () { return f[b] && f[b].box && g[a] }, init: function () { f.setFocusToElement(f[b].box, g[a]) }
                            })
                        }, getKeyboardNavigation: function () { return [this.simpleButtonNavigation("resetZoomButton", "resetZoomProxyButton", function (b, a) { a.zoomOut() }), this.simpleButtonNavigation("drillUpButton", "drillUpProxyButton", function (b, a) { a.drillUp(); return b.response.prev }), this.getMapZoomNavigation()] }
                    }); return k
                }); t(b, "Extensions/RangeSelector.js", [b["Core/Axis/Axis.js"], b["Core/Chart/Chart.js"],
                b["Core/Globals.js"], b["Core/Options.js"], b["Core/Color/Palette.js"], b["Core/Renderer/SVG/SVGElement.js"], b["Core/Utilities.js"]], function (b, k, m, p, q, g, f) {
                    function u(a) { if (-1 !== a.indexOf("%L")) return "text"; var c = "aAdewbBmoyY".split("").some(function (c) { return -1 !== a.indexOf("%" + c) }), b = "HkIlMS".split("").some(function (c) { return -1 !== a.indexOf("%" + c) }); return c && b ? "datetime-local" : c ? "date" : b ? "time" : "text" } var r = p.defaultOptions, h = f.addEvent, d = f.createElement, a = f.css, c = f.defined, e = f.destroyObjectProperties,
                        l = f.discardElement, n = f.extend, C = f.find, F = f.fireEvent, y = f.isNumber, t = f.merge, G = f.objectEach, B = f.pad, x = f.pick, z = f.pInt, D = f.splat; n(r, {
                            rangeSelector: {
                                allButtonsEnabled: !1, buttons: void 0, buttonSpacing: 5, dropdown: "responsive", enabled: void 0, verticalAlign: "top", buttonTheme: { width: 28, height: 18, padding: 2, zIndex: 7 }, floating: !1, x: 0, y: 0, height: void 0, inputBoxBorderColor: "none", inputBoxHeight: 17, inputBoxWidth: void 0, inputDateFormat: "%b %e, %Y", inputDateParser: void 0, inputEditDateFormat: "%Y-%m-%d", inputEnabled: !0,
                                inputPosition: { align: "right", x: 0, y: 0 }, inputSpacing: 5, selected: void 0, buttonPosition: { align: "left", x: 0, y: 0 }, inputStyle: { color: q.highlightColor80, cursor: "pointer" }, labelStyle: { color: q.neutralColor60 }
                            }
                        }); n(r.lang, { rangeSelectorZoom: "Zoom", rangeSelectorFrom: "", rangeSelectorTo: "\u2192" }); var H = function () {
                            function f(a) { this.buttons = void 0; this.buttonOptions = f.prototype.defaultButtons; this.initialButtonGroupWidth = 0; this.options = void 0; this.chart = a; this.init(a) } f.prototype.clickButton = function (a, d) {
                                var e =
                                    this.chart, w = this.buttonOptions[a], f = e.xAxis[0], g = e.scroller && e.scroller.getUnionExtremes() || f || {}, l = g.dataMin, A = g.dataMax, k = f && Math.round(Math.min(f.max, x(A, f.max))), n = w.type; g = w._range; var z, r = w.dataGrouping; if (null !== l && null !== A) {
                                    e.fixedRange = g; r && (this.forcedDataGrouping = !0, b.prototype.setDataGrouping.call(f || { chart: this.chart }, r, !1), this.frozenStates = w.preserveDataGrouping); if ("month" === n || "year" === n) if (f) {
                                        n = { range: w, max: k, chart: e, dataMin: l, dataMax: A }; var v = f.minFromRange.call(n); y(n.newMax) &&
                                            (k = n.newMax)
                                    } else g = w; else if (g) v = Math.max(k - g, l), k = Math.min(v + g, A); else if ("ytd" === n) if (f) "undefined" === typeof A && (l = Number.MAX_VALUE, A = Number.MIN_VALUE, e.series.forEach(function (a) { a = a.xData; l = Math.min(a[0], l); A = Math.max(a[a.length - 1], A) }), d = !1), k = this.getYTDExtremes(A, l, e.time.useUTC), v = z = k.min, k = k.max; else { this.deferredYTDClick = a; return } else "all" === n && f && (v = l, k = A); c(v) && (v += w._offsetMin); c(k) && (k += w._offsetMax); this.setSelected(a); this.dropdown && (this.dropdown.selectedIndex = a + 1); if (f) f.setExtremes(v,
                                        k, x(d, !0), void 0, { trigger: "rangeSelectorButton", rangeSelectorButton: w }); else { var m = D(e.options.xAxis)[0]; var q = m.range; m.range = g; var C = m.min; m.min = z; h(e, "load", function () { m.range = q; m.min = C }) } F(this, "afterBtnClick")
                                    }
                            }; f.prototype.setSelected = function (a) { this.selected = this.options.selected = a }; f.prototype.init = function (a) {
                                var c = this, b = a.options.rangeSelector, d = b.buttons || c.defaultButtons.slice(), e = b.selected, w = function () { var a = c.minInput, b = c.maxInput; a && a.blur && F(a, "blur"); b && b.blur && F(b, "blur") }; c.chart =
                                    a; c.options = b; c.buttons = []; c.buttonOptions = d; this.eventsToUnbind = []; this.eventsToUnbind.push(h(a.container, "mousedown", w)); this.eventsToUnbind.push(h(a, "resize", w)); d.forEach(c.computeButtonRange); "undefined" !== typeof e && d[e] && this.clickButton(e, !1); this.eventsToUnbind.push(h(a, "load", function () {
                                    a.xAxis && a.xAxis[0] && h(a.xAxis[0], "setExtremes", function (b) {
                                    this.max - this.min !== a.fixedRange && "rangeSelectorButton" !== b.trigger && "updatedData" !== b.trigger && c.forcedDataGrouping && !c.frozenStates && this.setDataGrouping(!1,
                                        !1)
                                    })
                                    }))
                            }; f.prototype.updateButtonStates = function () {
                                var a = this, c = this.chart, b = this.dropdown, d = c.xAxis[0], e = Math.round(d.max - d.min), h = !d.hasVisibleSeries, f = c.scroller && c.scroller.getUnionExtremes() || d, g = f.dataMin, l = f.dataMax; c = a.getYTDExtremes(l, g, c.time.useUTC); var k = c.min, x = c.max, n = a.selected, z = y(n), v = a.options.allButtonsEnabled, r = a.buttons; a.buttonOptions.forEach(function (c, w) {
                                    var f = c._range, A = c.type, J = c.count || 1, N = r[w], E = 0, D = c._offsetMax - c._offsetMin; c = w === n; var m = f > l - g, O = f < d.minRange, q = !1, C = !1;
                                    f = f === e; ("month" === A || "year" === A) && e + 36E5 >= 864E5 * { month: 28, year: 365 }[A] * J - D && e - 36E5 <= 864E5 * { month: 31, year: 366 }[A] * J + D ? f = !0 : "ytd" === A ? (f = x - k + D === e, q = !c) : "all" === A && (f = d.max - d.min >= l - g, C = !c && z && f); A = !v && (m || O || C || h); J = c && f || f && !z && !q || c && a.frozenStates; A ? E = 3 : J && (z = !0, E = 2); N.state !== E && (N.setState(E), b && (b.options[w + 1].disabled = A, 2 === E && (b.selectedIndex = w + 1)), 0 === E && n === w && a.setSelected())
                                })
                            }; f.prototype.computeButtonRange = function (a) {
                                var c = a.type, b = a.count || 1, d = {
                                    millisecond: 1, second: 1E3, minute: 6E4,
                                    hour: 36E5, day: 864E5, week: 6048E5
                                }; if (d[c]) a._range = d[c] * b; else if ("month" === c || "year" === c) a._range = 864E5 * { month: 30, year: 365 }[c] * b; a._offsetMin = x(a.offsetMin, 0); a._offsetMax = x(a.offsetMax, 0); a._range += a._offsetMax - a._offsetMin
                            }; f.prototype.getInputValue = function (a) { a = "min" === a ? this.minInput : this.maxInput; var c = this.chart.options.rangeSelector, b = this.chart.time; return a ? ("text" === a.type && c.inputDateParser || this.defaultInputDateParser)(a.value, b.useUTC, b) : 0 }; f.prototype.setInputValue = function (a, b) {
                                var d =
                                    this.options, e = this.chart.time, f = "min" === a ? this.minInput : this.maxInput; a = "min" === a ? this.minDateBox : this.maxDateBox; if (f) { var h = f.getAttribute("data-hc-time"); h = c(h) ? Number(h) : void 0; c(b) && (c(h) && f.setAttribute("data-hc-time-previous", h), f.setAttribute("data-hc-time", b), h = b); f.value = e.dateFormat(this.inputTypeFormats[f.type] || d.inputEditDateFormat, h); a && a.attr({ text: e.dateFormat(d.inputDateFormat, h) }) }
                            }; f.prototype.setInputExtremes = function (a, c, b) {
                                if (a = "min" === a ? this.minInput : this.maxInput) {
                                    var d =
                                        this.inputTypeFormats[a.type], e = this.chart.time; d && (c = e.dateFormat(d, c), a.min !== c && (a.min = c), b = e.dateFormat(d, b), a.max !== b && (a.max = b))
                                }
                            }; f.prototype.showInput = function (c) {
                                var b = "min" === c ? this.minDateBox : this.maxDateBox; if ((c = "min" === c ? this.minInput : this.maxInput) && b && this.inputGroup) {
                                    var d = "text" === c.type, e = this.inputGroup, f = e.translateX; e = e.translateY; a(c, { width: d ? b.width - 2 + "px" : "auto", height: d ? b.height - 2 + "px" : "auto", border: "2px solid silver" }); d ? a(c, { left: f + b.x + "px", top: e + "px" }) : a(c, {
                                        left: Math.min(Math.round(b.x +
                                            f - (c.offsetWidth - b.width) / 2), this.chart.chartWidth - c.offsetWidth) + "px", top: e - (c.offsetHeight - b.height) / 2 + "px"
                                    })
                                }
                            }; f.prototype.hideInput = function (c) { (c = "min" === c ? this.minInput : this.maxInput) && a(c, { top: "-9999em", border: 0, width: "1px", height: "1px" }) }; f.prototype.defaultInputDateParser = function (a, c, b) {
                                var d = a.split("/").join("-").split(" ").join("T"); -1 === d.indexOf("T") && (d += "T00:00"); if (c) d += "Z"; else {
                                    var e; if (e = m.isSafari) e = d, e = !(6 < e.length && (e.lastIndexOf("-") === e.length - 6 || e.lastIndexOf("+") === e.length -
                                        6)); e && (e = (new Date(d)).getTimezoneOffset() / 60, d += 0 >= e ? "+" + B(-e) + ":00" : "-" + B(e) + ":00")
                                } d = Date.parse(d); y(d) || (a = a.split("-"), d = Date.UTC(z(a[0]), z(a[1]) - 1, z(a[2]))); b && c && (d += b.getTimezoneOffset(d)); return d
                            }; f.prototype.drawInput = function (c) {
                                function b() {
                                    var a = g.getInputValue(c), b = e.xAxis[0], d = e.scroller && e.scroller.xAxis ? e.scroller.xAxis : b, f = d.dataMin; d = d.dataMax; var h = g.maxInput, l = g.minInput; a !== Number(v.getAttribute("data-hc-time-previous")) && y(a) && (v.setAttribute("data-hc-time-previous", a), x &&
                                        h && y(f) ? a > Number(h.getAttribute("data-hc-time")) ? a = void 0 : a < f && (a = f) : l && y(d) && (a < Number(l.getAttribute("data-hc-time")) ? a = void 0 : a > d && (a = d)), "undefined" !== typeof a && b.setExtremes(x ? a : b.min, x ? b.max : a, void 0, void 0, { trigger: "rangeSelectorInput" }))
                                } var e = this.chart, f = this.div, h = this.inputGroup, g = this, w = e.renderer.style || {}, l = e.renderer, k = e.options.rangeSelector, x = "min" === c, z = r.lang[x ? "rangeSelectorFrom" : "rangeSelectorTo"]; z = l.label(z, 0).addClass("highcharts-range-label").attr({ padding: z ? 2 : 0 }).add(h);
                                l = l.label("", 0).addClass("highcharts-range-input").attr({ padding: 2, width: k.inputBoxWidth, height: k.inputBoxHeight, "text-align": "center" }).on("click", function () { g.showInput(c); g[c + "Input"].focus() }); e.styledMode || l.attr({ stroke: k.inputBoxBorderColor, "stroke-width": 1 }); l.add(h); var v = d("input", { name: c, className: "highcharts-range-selector" }, void 0, f); v.setAttribute("type", u(k.inputDateFormat || "%b %e, %Y")); e.styledMode || (z.css(t(w, k.labelStyle)), l.css(t({ color: q.neutralColor80 }, w, k.inputStyle)), a(v, n({
                                    position: "absolute",
                                    border: 0, boxShadow: "0 0 15px rgba(0,0,0,0.3)", width: "1px", height: "1px", padding: 0, textAlign: "center", fontSize: w.fontSize, fontFamily: w.fontFamily, top: "-9999em"
                                }, k.inputStyle))); v.onfocus = function () { g.showInput(c) }; v.onblur = function () { v === m.doc.activeElement && b(); g.hideInput(c); g.setInputValue(c); v.blur() }; var D = !1; v.onchange = function () { b(); D || (g.hideInput(c), v.blur()) }; v.onkeypress = function (a) { 13 === a.keyCode && b() }; v.onkeydown = function () { D = !0 }; v.onkeyup = function () { D = !1 }; return { dateBox: l, input: v, label: z }
                            };
                            f.prototype.getPosition = function () { var a = this.chart, c = a.options.rangeSelector; a = "top" === c.verticalAlign ? a.plotTop - a.axisOffset[0] : 0; return { buttonTop: a + c.buttonPosition.y, inputTop: a + c.inputPosition.y - 10 } }; f.prototype.getYTDExtremes = function (a, c, b) { var d = this.chart.time, e = new d.Date(a), f = d.get("FullYear", e); b = b ? d.Date.UTC(f, 0, 1) : +new d.Date(f, 0, 1); c = Math.max(c, b); e = e.getTime(); return { max: Math.min(a || e, e), min: c } }; f.prototype.render = function (a, b) {
                                var e = this.chart, f = e.renderer, h = e.container, g = e.options,
                                l = g.rangeSelector, k = x(g.chart.style && g.chart.style.zIndex, 0) + 1; g = l.inputEnabled; if (!1 !== l.enabled) {
                                this.rendered || (this.group = f.g("range-selector-group").attr({ zIndex: 7 }).add(), this.div = d("div", void 0, { position: "relative", height: 0, zIndex: k }), this.renderButtons(), h.parentNode && h.parentNode.insertBefore(this.div, h), g && (this.inputGroup = f.g("input-group").add(this.group), f = this.drawInput("min"), this.minDateBox = f.dateBox, this.minLabel = f.label, this.minInput = f.input, f = this.drawInput("max"), this.maxDateBox =
                                    f.dateBox, this.maxLabel = f.label, this.maxInput = f.input)); if (g && (this.setInputValue("min", a), this.setInputValue("max", b), a = e.scroller && e.scroller.getUnionExtremes() || e.xAxis[0] || {}, c(a.dataMin) && c(a.dataMax) && (e = e.xAxis[0].minRange || 0, this.setInputExtremes("min", a.dataMin, Math.min(a.dataMax, this.getInputValue("max")) - e), this.setInputExtremes("max", Math.max(a.dataMin, this.getInputValue("min")) + e, a.dataMax)), this.inputGroup)) {
                                        var w = 0;[this.minLabel, this.minDateBox, this.maxLabel, this.maxDateBox].forEach(function (a) {
                                        a &&
                                            a.width && (a.attr({ x: w }), w += a.width + l.inputSpacing)
                                        })
                                    } this.alignElements(); this.rendered = !0
                                }
                            }; f.prototype.renderButtons = function () {
                                var a = this, c = this.buttons, b = this.options, e = r.lang, f = this.chart.renderer, g = t(b.buttonTheme), l = g && g.states, k = g.width || 28; delete g.width; this.buttonGroup = f.g("range-selector-buttons").add(this.group); var n = this.dropdown = d("select", void 0, { position: "absolute", width: "1px", height: "1px", padding: 0, border: 0, top: "-9999em", cursor: "pointer", opacity: .0001 }, this.div); h(n, "touchstart",
                                    function () { n.style.fontSize = "16px" });[[m.isMS ? "mouseover" : "mouseenter"], [m.isMS ? "mouseout" : "mouseleave"], ["change", "click"]].forEach(function (b) { var d = b[0], e = b[1]; h(n, d, function () { var b = c[a.currentButtonIndex()]; b && F(b.element, e || d) }) }); this.zoomText = f.text(e.rangeSelectorZoom, 0, 15).add(this.buttonGroup); this.chart.styledMode || (this.zoomText.css(b.labelStyle), g["stroke-width"] = x(g["stroke-width"], 0)); d("option", { textContent: this.zoomText.textStr, disabled: !0 }, void 0, n); this.buttonOptions.forEach(function (b,
                                        e) { d("option", { textContent: b.title || b.text }, void 0, n); c[e] = f.button(b.text, 0, 0, function (c) { var d = b.events && b.events.click, f; d && (f = d.call(b, c)); !1 !== f && a.clickButton(e); a.isActive = !0 }, g, l && l.hover, l && l.select, l && l.disabled).attr({ "text-align": "center", width: k }).add(a.buttonGroup); b.title && c[e].attr("title", b.title) })
                            }; f.prototype.alignElements = function () {
                                var a = this, c = this.buttonGroup, b = this.buttons, d = this.chart, e = this.group, f = this.inputGroup, h = this.options, g = this.zoomText, l = d.options, k = l.exporting &&
                                    !1 !== l.exporting.enabled && l.navigation && l.navigation.buttonOptions; l = h.buttonPosition; var n = h.inputPosition, z = h.verticalAlign, v = function (c, b) { return k && a.titleCollision(d) && "top" === z && "right" === b.align && b.y - c.getBBox().height - 12 < (k.y || 0) + (k.height || 0) + d.spacing[0] ? -40 : 0 }, D = d.plotLeft; if (e && l && n) {
                                        var r = l.x - d.spacing[3]; if (c) {
                                            this.positionButtons(); if (!this.initialButtonGroupWidth) {
                                                var m = 0; g && (m += g.getBBox().width + 5); b.forEach(function (a, c) { m += a.width; c !== b.length - 1 && (m += h.buttonSpacing) }); this.initialButtonGroupWidth =
                                                    m
                                            } D -= d.spacing[3]; this.updateButtonStates(); g = v(c, l); this.alignButtonGroup(g); e.placed = c.placed = d.hasLoaded
                                        } c = 0; f && (c = v(f, n), "left" === n.align ? r = D : "right" === n.align && (r = -Math.max(d.axisOffset[1], -c)), f.align({ y: n.y, width: f.getBBox().width, align: n.align, x: n.x + r - 2 }, !0, d.spacingBox), f.placed = d.hasLoaded); this.handleCollision(c); e.align({ verticalAlign: z }, !0, d.spacingBox); f = e.alignAttr.translateY; c = e.getBBox().height + 20; v = 0; "bottom" === z && (v = (v = d.legend && d.legend.options) && "bottom" === v.verticalAlign && v.enabled &&
                                            !v.floating ? d.legend.legendHeight + x(v.margin, 10) : 0, c = c + v - 20, v = f - c - (h.floating ? 0 : h.y) - (d.titleOffset ? d.titleOffset[2] : 0) - 10); if ("top" === z) h.floating && (v = 0), d.titleOffset && d.titleOffset[0] && (v = d.titleOffset[0]), v += d.margin[0] - d.spacing[0] || 0; else if ("middle" === z) if (n.y === l.y) v = f; else if (n.y || l.y) v = 0 > n.y || 0 > l.y ? v - Math.min(n.y, l.y) : f - c; e.translate(h.x, h.y + Math.floor(v)); l = this.minInput; n = this.maxInput; f = this.dropdown; h.inputEnabled && l && n && (l.style.marginTop = e.translateY + "px", n.style.marginTop = e.translateY +
                                                "px"); f && (f.style.marginTop = e.translateY + "px")
                                    }
                            }; f.prototype.alignButtonGroup = function (a, c) { var b = this.chart, d = this.buttonGroup, e = this.options.buttonPosition, f = b.plotLeft - b.spacing[3], h = e.x - b.spacing[3]; "right" === e.align ? h += a - f : "center" === e.align && (h -= f / 2); d && d.align({ y: e.y, width: x(c, this.initialButtonGroupWidth), align: e.align, x: h }, !0, b.spacingBox) }; f.prototype.positionButtons = function () {
                                var a = this.buttons, c = this.chart, b = this.options, d = this.zoomText, e = c.hasLoaded ? "animate" : "attr", f = b.buttonPosition,
                                h = c.plotLeft, g = h; d && "hidden" !== d.visibility && (d[e]({ x: x(h + f.x, h) }), g += f.x + d.getBBox().width + 5); this.buttonOptions.forEach(function (c, d) { if ("hidden" !== a[d].visibility) a[d][e]({ x: g }), g += a[d].width + b.buttonSpacing; else a[d][e]({ x: h }) })
                            }; f.prototype.handleCollision = function (a) {
                                var c = this, b = this.chart, d = this.buttonGroup, e = this.inputGroup, f = this.options, h = f.buttonPosition, g = f.dropdown, l = f.inputPosition; f = function () { var a = 0; c.buttons.forEach(function (c) { c = c.getBBox(); c.width > a && (a = c.width) }); return a }; var k =
                                    function (c) { if (e && d) { var b = e.alignAttr.translateX + e.alignOptions.x - a + e.getBBox().x + 2, f = e.alignOptions.width, g = d.alignAttr.translateX + d.getBBox().x; return g + c > b && b + f > g && h.y < l.y + e.getBBox().height } return !1 }, n = function () { e && d && e.attr({ translateX: e.alignAttr.translateX + (b.axisOffset[1] >= -a ? 0 : -a), translateY: e.alignAttr.translateY + d.getBBox().height + 10 }) }; if (d) { if ("always" === g) { this.collapseButtons(a); k(f()) && n(); return } "never" === g && this.expandButtons() } e && d ? l.align === h.align || k(this.initialButtonGroupWidth +
                                        20) ? "responsive" === g ? (this.collapseButtons(a), k(f()) && n()) : n() : "responsive" === g && this.expandButtons() : d && "responsive" === g && (this.initialButtonGroupWidth > b.plotWidth ? this.collapseButtons(a) : this.expandButtons())
                            }; f.prototype.collapseButtons = function (a) {
                                var c, b = this.buttons, d = this.buttonOptions, e = this.dropdown, f = this.options, h = this.zoomText, g = function (a) { return { text: a ? a + " \u25be" : "\u25be", width: "auto", paddingLeft: 8, paddingRight: 8 } }; h && h.hide(); var l = !1; d.forEach(function (a, c) {
                                    c = b[c]; 2 !== c.state ? c.hide() :
                                        (c.show(), c.attr(g(a.text)), l = !0)
                                }); !l && 0 < b.length && (e && (e.selectedIndex = 0), b[0].show(), b[0].attr(g(null === (c = this.zoomText) || void 0 === c ? void 0 : c.textStr))); c = f.buttonPosition.align; this.positionButtons(); "right" !== c && "center" !== c || this.alignButtonGroup(a, b[this.currentButtonIndex()].getBBox().width); this.showDropdown()
                            }; f.prototype.expandButtons = function () {
                                var a = this.buttons, c = this.buttonOptions, b = this.options, d = this.zoomText; this.hideDropdown(); d && d.show(); c.forEach(function (c, d) {
                                    d = a[d]; d.show();
                                    d.attr({ text: c.text, width: b.buttonTheme.width || 28, paddingLeft: "unset", paddingRight: "unset" }); 2 > d.state && d.setState(0)
                                }); this.positionButtons()
                            }; f.prototype.currentButtonIndex = function () { var a = this.dropdown; return a && 0 < a.selectedIndex ? a.selectedIndex - 1 : 0 }; f.prototype.showDropdown = function () {
                                var c = this.buttonGroup, b = this.buttons, d = this.chart, e = this.dropdown; if (c && e) {
                                    var f = c.translateX; c = c.translateY; b = b[this.currentButtonIndex()].getBBox(); a(e, {
                                        left: d.plotLeft + f + "px", top: c + .5 + "px", width: b.width + "px",
                                        height: b.height + "px"
                                    }); this.hasVisibleDropdown = !0
                                }
                            }; f.prototype.hideDropdown = function () { var c = this.dropdown; c && (a(c, { top: "-9999em", width: "1px", height: "1px" }), this.hasVisibleDropdown = !1) }; f.prototype.getHeight = function () { var a = this.options, c = this.group, b = a.y, d = a.buttonPosition.y, e = a.inputPosition.y; if (a.height) return a.height; this.alignElements(); a = c ? c.getBBox(!0).height + 13 + b : 0; c = Math.min(e, d); if (0 > e && 0 > d || 0 < e && 0 < d) a += Math.abs(c); return a }; f.prototype.titleCollision = function (a) {
                                return !(a.options.title.text ||
                                    a.options.subtitle.text)
                            }; f.prototype.update = function (a) { var c = this.chart; t(!0, c.options.rangeSelector, a); this.destroy(); this.init(c); this.render() }; f.prototype.destroy = function () {
                                var a = this, c = a.minInput, b = a.maxInput; a.eventsToUnbind && (a.eventsToUnbind.forEach(function (a) { return a() }), a.eventsToUnbind = void 0); e(a.buttons); c && (c.onfocus = c.onblur = c.onchange = null); b && (b.onfocus = b.onblur = b.onchange = null); G(a, function (c, b) {
                                c && "chart" !== b && (c instanceof g ? c.destroy() : c instanceof window.HTMLElement && l(c));
                                    c !== f.prototype[b] && (a[b] = null)
                                }, this)
                            }; return f
                        }(); H.prototype.defaultButtons = [{ type: "month", count: 1, text: "1m", title: "View 1 month" }, { type: "month", count: 3, text: "3m", title: "View 3 months" }, { type: "month", count: 6, text: "6m", title: "View 6 months" }, { type: "ytd", text: "YTD", title: "View year to date" }, { type: "year", count: 1, text: "1y", title: "View 1 year" }, { type: "all", text: "All", title: "View all" }]; H.prototype.inputTypeFormats = { "datetime-local": "%Y-%m-%dT%H:%M:%S", date: "%Y-%m-%d", time: "%H:%M:%S" }; b.prototype.minFromRange =
                            function () { var a = this.range, c = a.type, b = this.max, d = this.chart.time, e = function (a, b) { var e = "year" === c ? "FullYear" : "Month", f = new d.Date(a), h = d.get(e, f); d.set(e, f, h + b); h === d.get(e, f) && d.set("Date", f, 0); return f.getTime() - a }; if (y(a)) { var f = b - a; var h = a } else f = b + e(b, -a.count), this.chart && (this.chart.fixedRange = b - f); var g = x(this.dataMin, Number.MIN_VALUE); y(f) || (f = g); f <= g && (f = g, "undefined" === typeof h && (h = e(f, a.count)), this.newMax = Math.min(f + h, this.dataMax)); y(b) || (f = void 0); return f }; if (!m.RangeSelector) {
                                var I =
                                    [], M = function (a) { function c() { d && (b = a.xAxis[0].getExtremes(), e = a.legend, g = null === d || void 0 === d ? void 0 : d.options.verticalAlign, y(b.min) && d.render(b.min, b.max), e.display && "top" === g && g === e.options.verticalAlign && (f = t(a.spacingBox), f.y = "vertical" === e.options.layout ? a.plotTop : f.y + d.getHeight(), e.group.placed = !1, e.align(f))) } var b, d = a.rangeSelector, e, f, g; d && (C(I, function (c) { return c[0] === a }) || I.push([a, [h(a.xAxis[0], "afterSetExtremes", function (a) { d && d.render(a.min, a.max) }), h(a, "redraw", c)]]), c()) }; h(k,
                                        "afterGetContainer", function () { var a; if (null === (a = this.options.rangeSelector) || void 0 === a ? 0 : a.enabled) this.rangeSelector = new H(this) }); h(k, "beforeRender", function () { var a = this.axes, c = this.rangeSelector; c && (y(c.deferredYTDClick) && (c.clickButton(c.deferredYTDClick), delete c.deferredYTDClick), a.forEach(function (a) { a.updateNames(); a.setScale() }), this.getAxisMargins(), c.render(), a = c.options.verticalAlign, c.options.floating || ("bottom" === a ? this.extraBottomMargin = !0 : "middle" !== a && (this.extraTopMargin = !0))) });
                                h(k, "update", function (a) {
                                    var b = a.options.rangeSelector; a = this.rangeSelector; var d = this.extraBottomMargin, e = this.extraTopMargin; b && b.enabled && !c(a) && this.options.rangeSelector && (this.options.rangeSelector.enabled = !0, this.rangeSelector = a = new H(this)); this.extraTopMargin = this.extraBottomMargin = !1; a && (M(this), b = b && b.verticalAlign || a.options && a.options.verticalAlign, a.options.floating || ("bottom" === b ? this.extraBottomMargin = !0 : "middle" !== b && (this.extraTopMargin = !0)), this.extraBottomMargin !== d || this.extraTopMargin !==
                                        e) && (this.isDirtyBox = !0)
                                }); h(k, "render", function () { var a = this.rangeSelector; a && !a.options.floating && (a.render(), a = a.options.verticalAlign, "bottom" === a ? this.extraBottomMargin = !0 : "middle" !== a && (this.extraTopMargin = !0)) }); h(k, "getMargins", function () { var a = this.rangeSelector; a && (a = a.getHeight(), this.extraTopMargin && (this.plotTop += a), this.extraBottomMargin && (this.marginBottom += a)) }); k.prototype.callbacks.push(M); h(k, "destroy", function () {
                                    for (var a = 0; a < I.length; a++) {
                                        var c = I[a]; if (c[0] === this) {
                                            c[1].forEach(function (a) { return a() });
                                            I.splice(a, 1); break
                                        }
                                    }
                                }); m.RangeSelector = H
                            } return m.RangeSelector
                }); t(b, "Accessibility/Components/RangeSelectorComponent.js", [b["Accessibility/AccessibilityComponent.js"], b["Accessibility/Utils/ChartUtilities.js"], b["Accessibility/Utils/Announcer.js"], b["Core/Globals.js"], b["Accessibility/Utils/HTMLUtilities.js"], b["Accessibility/KeyboardNavigationHandler.js"], b["Core/Utilities.js"], b["Extensions/RangeSelector.js"]], function (b, k, m, p, q, g, f, u) {
                    var r = k.unhideChartElementFromAT, h = k.getAxisRangeDescription,
                    d = q.setElAttrs, a = f.addEvent; k = f.extend; p.Chart.prototype.highlightRangeSelectorButton = function (a) {
                        var c, b, d = (null === (c = this.rangeSelector) || void 0 === c ? void 0 : c.buttons) || []; c = this.highlightedRangeSelectorItemIx; var f = null === (b = this.rangeSelector) || void 0 === b ? void 0 : b.selected; "undefined" !== typeof c && d[c] && c !== f && d[c].setState(this.oldRangeSelectorItemState || 0); this.highlightedRangeSelectorItemIx = a; return d[a] ? (this.setFocusToElement(d[a].box, d[a].element), a !== f && (this.oldRangeSelectorItemState = d[a].state,
                            d[a].setState(1)), !0) : !1
                    }; a(u, "afterBtnClick", function () { var a, b = null === (a = this.chart.accessibility) || void 0 === a ? void 0 : a.components.rangeSelector; return null === b || void 0 === b ? void 0 : b.onAfterBtnClick() }); p = function () { }; p.prototype = new b; k(p.prototype, {
                        init: function () { this.announcer = new m(this.chart, "polite") }, onChartUpdate: function () {
                            var a, b = this.chart, d = this, f = b.rangeSelector; f && (this.updateSelectorVisibility(), this.setDropdownAttrs(), (null === (a = f.buttons) || void 0 === a ? 0 : a.length) && f.buttons.forEach(function (a) { d.setRangeButtonAttrs(a) }),
                                f.maxInput && f.minInput && ["minInput", "maxInput"].forEach(function (a, c) { if (a = f[a]) r(b, a), d.setRangeInputAttrs(a, "accessibility.rangeSelector." + (c ? "max" : "min") + "InputLabel") }))
                        }, updateSelectorVisibility: function () {
                            var a = this.chart, b = a.rangeSelector, d = null === b || void 0 === b ? void 0 : b.dropdown, f = (null === b || void 0 === b ? void 0 : b.buttons) || []; (null === b || void 0 === b ? 0 : b.hasVisibleDropdown) && d ? (r(a, d), f.forEach(function (a) { return a.element.setAttribute("aria-hidden", !0) })) : (d && d.setAttribute("aria-hidden", !0), f.forEach(function (c) {
                                return r(a,
                                    c.element)
                            }))
                        }, setDropdownAttrs: function () { var a, b = this.chart, d = null === (a = b.rangeSelector) || void 0 === a ? void 0 : a.dropdown; d && (a = b.langFormat("accessibility.rangeSelector.dropdownLabel", { rangeTitle: b.options.lang.rangeSelectorZoom }), d.setAttribute("aria-label", a), d.setAttribute("tabindex", -1)) }, setRangeButtonAttrs: function (a) { d(a.element, { tabindex: -1, role: "button" }) }, setRangeInputAttrs: function (a, b) { var c = this.chart; d(a, { tabindex: -1, "aria-label": c.langFormat(b, { chart: c }) }) }, onButtonNavKbdArrowKey: function (a,
                            b) { var c = a.response, d = this.keyCodes, e = this.chart, f = e.options.accessibility.keyboardNavigation.wrapAround; b = b === d.left || b === d.up ? -1 : 1; return e.highlightRangeSelectorButton(e.highlightedRangeSelectorItemIx + b) ? c.success : f ? (a.init(b), c.success) : c[0 < b ? "next" : "prev"] }, onButtonNavKbdClick: function (a) { a = a.response; var c = this.chart; 3 !== c.oldRangeSelectorItemState && this.fakeClickEvent(c.rangeSelector.buttons[c.highlightedRangeSelectorItemIx].element); return a.success }, onAfterBtnClick: function () {
                                var a = this.chart,
                                b = h(a.xAxis[0]); (a = a.langFormat("accessibility.rangeSelector.clickButtonAnnouncement", { chart: a, axisRangeDescription: b })) && this.announcer.announce(a)
                            }, onInputKbdMove: function (a) {
                                var c, b, d = this.chart, f = d.rangeSelector, h = d.highlightedInputRangeIx = (d.highlightedInputRangeIx || 0) + a; 1 < h || 0 > h ? (null === (c = d.accessibility) || void 0 === c ? void 0 : c.keyboardNavigation.tabindexContainer.focus(), null === (b = d.accessibility) || void 0 === b ? void 0 : b.keyboardNavigation[0 > a ? "prev" : "next"]()) : f && (a = f[h ? "maxDateBox" : "minDateBox"],
                                    f = f[h ? "maxInput" : "minInput"], a && f && d.setFocusToElement(a, f))
                            }, onInputNavInit: function (c) {
                                var b = this, d = this, f = this.chart, h = 0 < c ? 0 : 1, g = f.rangeSelector, k = null === g || void 0 === g ? void 0 : g[h ? "maxDateBox" : "minDateBox"]; c = null === g || void 0 === g ? void 0 : g.minInput; g = null === g || void 0 === g ? void 0 : g.maxInput; f.highlightedInputRangeIx = h; if (k && c && g) {
                                    f.setFocusToElement(k, h ? g : c); this.removeInputKeydownHandler && this.removeInputKeydownHandler(); f = function (a) {
                                    (a.which || a.keyCode) === b.keyCodes.tab && (a.preventDefault(), a.stopPropagation(),
                                        d.onInputKbdMove(a.shiftKey ? -1 : 1))
                                    }; var r = a(c, "keydown", f), m = a(g, "keydown", f); this.removeInputKeydownHandler = function () { r(); m() }
                                }
                            }, onInputNavTerminate: function () { var a = this.chart.rangeSelector || {}; a.maxInput && a.hideInput("max"); a.minInput && a.hideInput("min"); this.removeInputKeydownHandler && (this.removeInputKeydownHandler(), delete this.removeInputKeydownHandler) }, initDropdownNav: function () {
                                var c = this, b = this.chart, d = b.rangeSelector, f = null === d || void 0 === d ? void 0 : d.dropdown; d && f && (b.setFocusToElement(d.buttonGroup,
                                    f), this.removeDropdownKeydownHandler && this.removeDropdownKeydownHandler(), this.removeDropdownKeydownHandler = a(f, "keydown", function (a) { var d, e; (a.which || a.keyCode) === c.keyCodes.tab && (a.preventDefault(), a.stopPropagation(), null === (d = b.accessibility) || void 0 === d ? void 0 : d.keyboardNavigation.tabindexContainer.focus(), null === (e = b.accessibility) || void 0 === e ? void 0 : e.keyboardNavigation[a.shiftKey ? "prev" : "next"]()) }))
                            }, getRangeSelectorButtonNavigation: function () {
                                var a = this.chart, b = this.keyCodes, d = this; return new g(a,
                                    {
                                        keyCodeMap: [[[b.left, b.right, b.up, b.down], function (a) { return d.onButtonNavKbdArrowKey(this, a) }], [[b.enter, b.space], function () { return d.onButtonNavKbdClick(this) }]], validate: function () { var c, b; return !(null === (b = null === (c = a.rangeSelector) || void 0 === c ? void 0 : c.buttons) || void 0 === b || !b.length) }, init: function (c) { var b = a.rangeSelector; (null === b || void 0 === b ? 0 : b.hasVisibleDropdown) ? d.initDropdownNav() : b && (b = b.buttons.length - 1, a.highlightRangeSelectorButton(0 < c ? 0 : b)) }, terminate: function () {
                                        d.removeDropdownKeydownHandler &&
                                            (d.removeDropdownKeydownHandler(), delete d.removeDropdownKeydownHandler)
                                        }
                                    })
                            }, getRangeSelectorInputNavigation: function () { var a = this.chart, b = this; return new g(a, { keyCodeMap: [], validate: function () { return !!(a.rangeSelector && a.rangeSelector.inputGroup && "hidden" !== a.rangeSelector.inputGroup.element.getAttribute("visibility") && !1 !== a.options.rangeSelector.inputEnabled && a.rangeSelector.minInput && a.rangeSelector.maxInput) }, init: function (a) { b.onInputNavInit(a) }, terminate: function () { b.onInputNavTerminate() } }) },
                        getKeyboardNavigation: function () { return [this.getRangeSelectorButtonNavigation(), this.getRangeSelectorInputNavigation()] }, destroy: function () { var a; this.removeDropdownKeydownHandler && this.removeDropdownKeydownHandler(); this.removeInputKeydownHandler && this.removeInputKeydownHandler(); null === (a = this.announcer) || void 0 === a ? void 0 : a.destroy() }
                    }); return p
                }); t(b, "Accessibility/Components/InfoRegionsComponent.js", [b["Core/Globals.js"], b["Core/Renderer/HTML/AST.js"], b["Core/Utilities.js"], b["Accessibility/AccessibilityComponent.js"],
                b["Accessibility/Utils/Announcer.js"], b["Accessibility/Components/AnnotationsA11y.js"], b["Accessibility/Utils/ChartUtilities.js"], b["Accessibility/Utils/HTMLUtilities.js"]], function (b, k, m, p, q, g, f, u) {
                    var r = b.doc, h = m.extend, d = m.format, a = m.pick, c = g.getAnnotationsInfoHTML, e = f.getAxisDescription, l = f.getAxisRangeDescription, n = f.getChartTitle, y = f.unhideChartElementFromAT, t = u.addClass, K = u.setElAttrs, L = u.stripHTMLTagsFromString, G = u.getElement, B = u.visuallyHideElement; b.Chart.prototype.getTypeDescription = function (a) {
                        var b =
                            a[0], c = this.series && this.series[0] || {}; c = { numSeries: this.series.length, numPoints: c.points && c.points.length, chart: this, mapTitle: c.mapTitle }; if (!b) return this.langFormat("accessibility.chartTypes.emptyChart", c); if ("map" === b) return c.mapTitle ? this.langFormat("accessibility.chartTypes.mapTypeDescription", c) : this.langFormat("accessibility.chartTypes.unknownMap", c); if (1 < this.types.length) return this.langFormat("accessibility.chartTypes.combinationChart", c); a = a[0]; b = this.langFormat("accessibility.seriesTypeDescriptions." +
                                a, c); var d = this.series && 2 > this.series.length ? "Single" : "Multiple"; return (this.langFormat("accessibility.chartTypes." + a + d, c) || this.langFormat("accessibility.chartTypes.default" + d, c)) + (b ? " " + b : "")
                    }; m = function () { }; m.prototype = new p; h(m.prototype, {
                        init: function () {
                            var a = this.chart, b = this; this.initRegionsDefinitions(); this.addEvent(a, "aftergetTableAST", function (a) { b.onDataTableCreated(a) }); this.addEvent(a, "afterViewData", function (a) { b.dataTableDiv = a; setTimeout(function () { b.focusDataTable() }, 300) }); this.announcer =
                                new q(a, "assertive")
                        }, initRegionsDefinitions: function () {
                            var a = this; this.screenReaderSections = {
                                before: { element: null, buildContent: function (b) { var c = b.options.accessibility.screenReaderSection.beforeChartFormatter; return c ? c(b) : a.defaultBeforeChartFormatter(b) }, insertIntoDOM: function (a, b) { b.renderTo.insertBefore(a, b.renderTo.firstChild) }, afterInserted: function () { "undefined" !== typeof a.sonifyButtonId && a.initSonifyButton(a.sonifyButtonId); "undefined" !== typeof a.dataTableButtonId && a.initDataTableButton(a.dataTableButtonId) } },
                                after: { element: null, buildContent: function (b) { var c = b.options.accessibility.screenReaderSection.afterChartFormatter; return c ? c(b) : a.defaultAfterChartFormatter() }, insertIntoDOM: function (a, b) { b.renderTo.insertBefore(a, b.container.nextSibling) } }
                            }
                        }, onChartRender: function () { var a = this; this.linkedDescriptionElement = this.getLinkedDescriptionElement(); this.setLinkedDescriptionAttrs(); Object.keys(this.screenReaderSections).forEach(function (b) { a.updateScreenReaderSection(b) }) }, getLinkedDescriptionElement: function () {
                            var a =
                                this.chart.options.accessibility.linkedDescription; if (a) { if ("string" !== typeof a) return a; a = d(a, this.chart); a = r.querySelectorAll(a); if (1 === a.length) return a[0] }
                        }, setLinkedDescriptionAttrs: function () { var a = this.linkedDescriptionElement; a && (a.setAttribute("aria-hidden", "true"), t(a, "highcharts-linked-description")) }, updateScreenReaderSection: function (a) {
                            var b = this.chart, c = this.screenReaderSections[a], d = c.buildContent(b), e = c.element = c.element || this.createElement("div"), f = e.firstChild || this.createElement("div");
                            this.setScreenReaderSectionAttribs(e, a); k.setElementHTML(f, d); e.appendChild(f); c.insertIntoDOM(e, b); B(f); y(b, f); c.afterInserted && c.afterInserted()
                        }, setScreenReaderSectionAttribs: function (a, b) { var c = this.chart, d = c.langFormat("accessibility.screenReaderSection." + b + "RegionLabel", { chart: c }); K(a, { id: "highcharts-screen-reader-region-" + b + "-" + c.index, "aria-label": d }); a.style.position = "relative"; "all" === c.options.accessibility.landmarkVerbosity && d && a.setAttribute("role", "region") }, defaultBeforeChartFormatter: function () {
                            var a,
                            d = this.chart, e = d.options.accessibility.screenReaderSection.beforeChartFormat, f = this.getAxesDescription(), h = d.sonify && (null === (a = d.options.sonification) || void 0 === a ? void 0 : a.enabled); a = "highcharts-a11y-sonify-data-btn-" + d.index; var g = "hc-linkto-highcharts-data-table-" + d.index, k = c(d), l = d.langFormat("accessibility.screenReaderSection.annotations.heading", { chart: d }); f = {
                                chartTitle: n(d), typeDescription: this.getTypeDescriptionText(), chartSubtitle: this.getSubtitleText(), chartLongdesc: this.getLongdescText(),
                                xAxisDescription: f.xAxis, yAxisDescription: f.yAxis, playAsSoundButton: h ? this.getSonifyButtonText(a) : "", viewTableButton: d.getCSV ? this.getDataTableButtonText(g) : "", annotationsTitle: k ? l : "", annotationsList: k
                            }; d = b.i18nFormat(e, f, d); this.dataTableButtonId = g; this.sonifyButtonId = a; return d.replace(/<(\w+)[^>]*?>\s*<\/\1>/g, "")
                        }, defaultAfterChartFormatter: function () {
                            var a = this.chart, c = a.options.accessibility.screenReaderSection.afterChartFormat, d = { endOfChartMarker: this.getEndOfChartMarkerText() }; return b.i18nFormat(c,
                                d, a).replace(/<(\w+)[^>]*?>\s*<\/\1>/g, "")
                        }, getLinkedDescription: function () { var a = this.linkedDescriptionElement; return L(a && a.innerHTML || "") }, getLongdescText: function () { var a = this.chart.options, b = a.caption; b = b && b.text; var c = this.getLinkedDescription(); return a.accessibility.description || c || b || "" }, getTypeDescriptionText: function () { var a = this.chart; return a.types ? a.options.accessibility.typeDescription || a.getTypeDescription(a.types) : "" }, getDataTableButtonText: function (a) {
                            var b = this.chart; b = b.langFormat("accessibility.table.viewAsDataTableButtonText",
                                { chart: b, chartTitle: n(b) }); return '<button id="' + a + '">' + b + "</button>"
                        }, getSonifyButtonText: function (a) { var b, c = this.chart; if (!1 === (null === (b = c.options.sonification) || void 0 === b ? void 0 : b.enabled)) return ""; b = c.langFormat("accessibility.sonification.playAsSoundButtonText", { chart: c, chartTitle: n(c) }); return '<button id="' + a + '">' + b + "</button>" }, getSubtitleText: function () { var a = this.chart.options.subtitle; return L(a && a.text || "") }, getEndOfChartMarkerText: function () {
                            var a = this.chart, b = a.langFormat("accessibility.screenReaderSection.endOfChartMarker",
                                { chart: a }); return '<div id="highcharts-end-of-chart-marker-' + a.index + '">' + b + "</div>"
                        }, onDataTableCreated: function (a) { var b = this.chart; if (b.options.accessibility.enabled) { this.viewDataTableButton && this.viewDataTableButton.setAttribute("aria-expanded", "true"); var c = a.tree.attributes || {}; c.tabindex = -1; c.summary = b.langFormat("accessibility.table.tableSummary", { chart: b }); a.tree.attributes = c } }, focusDataTable: function () { var a = this.dataTableDiv; (a = a && a.getElementsByTagName("table")[0]) && a.focus && a.focus() },
                        initSonifyButton: function (a) {
                            var b = this, c = this.sonifyButton = G(a), d = this.chart, e = function (a) {
                            null === c || void 0 === c ? void 0 : c.setAttribute("aria-hidden", "true"); null === c || void 0 === c ? void 0 : c.setAttribute("aria-label", ""); a.preventDefault(); a.stopPropagation(); a = d.langFormat("accessibility.sonification.playAsSoundClickAnnouncement", { chart: d }); b.announcer.announce(a); setTimeout(function () {
                            null === c || void 0 === c ? void 0 : c.removeAttribute("aria-hidden"); null === c || void 0 === c ? void 0 : c.removeAttribute("aria-label");
                                d.sonify && d.sonify()
                            }, 1E3)
                            }; c && d && (K(c, { tabindex: "-1" }), c.onclick = function (a) { var b; ((null === (b = d.options.accessibility) || void 0 === b ? void 0 : b.screenReaderSection.onPlayAsSoundClick) || e).call(this, a, d) })
                        }, initDataTableButton: function (a) { var b = this.viewDataTableButton = G(a), c = this.chart; a = a.replace("hc-linkto-", ""); b && (K(b, { tabindex: "-1", "aria-expanded": !!G(a) }), b.onclick = c.options.accessibility.screenReaderSection.onViewDataTableClick || function () { c.viewData() }) }, getAxesDescription: function () {
                            var b =
                                this.chart, c = function (c, d) { c = b[c]; return 1 < c.length || c[0] && a(c[0].options.accessibility && c[0].options.accessibility.enabled, d) }, d = !!b.types && 0 > b.types.indexOf("map"), e = !!b.hasCartesianSeries, f = c("xAxis", !b.angular && e && d); c = c("yAxis", e && d); d = {}; f && (d.xAxis = this.getAxisDescriptionText("xAxis")); c && (d.yAxis = this.getAxisDescriptionText("yAxis")); return d
                        }, getAxisDescriptionText: function (a) {
                            var b = this.chart, c = b[a]; return b.langFormat("accessibility.axis." + a + "Description" + (1 < c.length ? "Plural" : "Singular"),
                                { chart: b, names: c.map(function (a) { return e(a) }), ranges: c.map(function (a) { return l(a) }), numAxes: c.length })
                        }, destroy: function () { var a; null === (a = this.announcer) || void 0 === a ? void 0 : a.destroy() }
                    }); return m
                }); t(b, "Accessibility/Components/ContainerComponent.js", [b["Accessibility/AccessibilityComponent.js"], b["Accessibility/Utils/ChartUtilities.js"], b["Core/Globals.js"], b["Accessibility/Utils/HTMLUtilities.js"], b["Core/Utilities.js"]], function (b, k, m, p, q) {
                    var g = k.unhideChartElementFromAT, f = k.getChartTitle,
                    u = m.doc, r = p.stripHTMLTagsFromString; k = q.extend; m = function () { }; m.prototype = new b; k(m.prototype, {
                        onChartUpdate: function () { this.handleSVGTitleElement(); this.setSVGContainerLabel(); this.setGraphicContainerAttrs(); this.setRenderToAttrs(); this.makeCreditsAccessible() }, handleSVGTitleElement: function () {
                            var b = this.chart, d = "highcharts-title-" + b.index, a = r(b.langFormat("accessibility.svgContainerTitle", { chartTitle: f(b) })); if (a.length) {
                                var c = this.svgTitleElement = this.svgTitleElement || u.createElementNS("http://www.w3.org/2000/svg",
                                    "title"); c.textContent = a; c.id = d; b.renderTo.insertBefore(c, b.renderTo.firstChild)
                            }
                        }, setSVGContainerLabel: function () { var b = this.chart, d = b.langFormat("accessibility.svgContainerLabel", { chartTitle: f(b) }); b.renderer.box && d.length && b.renderer.box.setAttribute("aria-label", d) }, setGraphicContainerAttrs: function () { var b = this.chart, d = b.langFormat("accessibility.graphicContainerLabel", { chartTitle: f(b) }); d.length && b.container.setAttribute("aria-label", d) }, setRenderToAttrs: function () {
                            var b = this.chart; "disabled" !==
                                b.options.accessibility.landmarkVerbosity ? b.renderTo.setAttribute("role", "region") : b.renderTo.removeAttribute("role"); b.renderTo.setAttribute("aria-label", b.langFormat("accessibility.chartContainerLabel", { title: f(b), chart: b }))
                        }, makeCreditsAccessible: function () { var b = this.chart, d = b.credits; d && (d.textStr && d.element.setAttribute("aria-label", b.langFormat("accessibility.credits", { creditsStr: r(d.textStr) })), g(b, d.element)) }, destroy: function () { this.chart.renderTo.setAttribute("aria-hidden", !0) }
                    }); return m
                });
    t(b, "Accessibility/HighContrastMode.js", [b["Core/Globals.js"]], function (b) {
        var k = b.doc, m = b.isMS, p = b.win; return {
            isHighContrastModeActive: function () {
                var b = /(Edg)/.test(p.navigator.userAgent); if (p.matchMedia && b) return p.matchMedia("(-ms-high-contrast: active)").matches; if (m && p.getComputedStyle) {
                    b = k.createElement("div"); b.style.backgroundImage = "url(data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)"; k.body.appendChild(b); var g = (b.currentStyle || p.getComputedStyle(b)).backgroundImage;
                    k.body.removeChild(b); return "none" === g
                } return !1
            }, setHighContrastTheme: function (b) { b.highContrastModeActive = !0; var g = b.options.accessibility.highContrastTheme; b.update(g, !1); b.series.forEach(function (b) { var f = g.plotOptions[b.type] || {}; b.update({ color: f.color || "windowText", colors: [f.color || "windowText"], borderColor: f.borderColor || "window" }); b.points.forEach(function (b) { b.options && b.options.color && b.update({ color: f.color || "windowText", borderColor: f.borderColor || "window" }, !1) }) }); b.redraw() }
        }
    }); t(b, "Accessibility/HighContrastTheme.js",
        [], function () {
            return {
                chart: { backgroundColor: "window" }, title: { style: { color: "windowText" } }, subtitle: { style: { color: "windowText" } }, colorAxis: { minColor: "windowText", maxColor: "windowText", stops: [] }, colors: ["windowText"], xAxis: { gridLineColor: "windowText", labels: { style: { color: "windowText" } }, lineColor: "windowText", minorGridLineColor: "windowText", tickColor: "windowText", title: { style: { color: "windowText" } } }, yAxis: {
                    gridLineColor: "windowText", labels: { style: { color: "windowText" } }, lineColor: "windowText", minorGridLineColor: "windowText",
                    tickColor: "windowText", title: { style: { color: "windowText" } }
                }, tooltip: { backgroundColor: "window", borderColor: "windowText", style: { color: "windowText" } }, plotOptions: {
                    series: { lineColor: "windowText", fillColor: "window", borderColor: "windowText", edgeColor: "windowText", borderWidth: 1, dataLabels: { connectorColor: "windowText", color: "windowText", style: { color: "windowText", textOutline: "none" } }, marker: { lineColor: "windowText", fillColor: "windowText" } }, pie: { color: "window", colors: ["window"], borderColor: "windowText", borderWidth: 1 },
                    boxplot: { fillColor: "window" }, candlestick: { lineColor: "windowText", fillColor: "window" }, errorbar: { fillColor: "window" }
                }, legend: { backgroundColor: "window", itemStyle: { color: "windowText" }, itemHoverStyle: { color: "windowText" }, itemHiddenStyle: { color: "#555" }, title: { style: { color: "windowText" } } }, credits: { style: { color: "windowText" } }, labels: { style: { color: "windowText" } }, drilldown: { activeAxisLabelStyle: { color: "windowText" }, activeDataLabelStyle: { color: "windowText" } }, navigation: {
                    buttonOptions: {
                        symbolStroke: "windowText",
                        theme: { fill: "window" }
                    }
                }, rangeSelector: { buttonTheme: { fill: "window", stroke: "windowText", style: { color: "windowText" }, states: { hover: { fill: "window", stroke: "windowText", style: { color: "windowText" } }, select: { fill: "#444", stroke: "windowText", style: { color: "windowText" } } } }, inputBoxBorderColor: "windowText", inputStyle: { backgroundColor: "window", color: "windowText" }, labelStyle: { color: "windowText" } }, navigator: {
                    handles: { backgroundColor: "window", borderColor: "windowText" }, outlineColor: "windowText", maskFill: "transparent",
                    series: { color: "windowText", lineColor: "windowText" }, xAxis: { gridLineColor: "windowText" }
                }, scrollbar: { barBackgroundColor: "#444", barBorderColor: "windowText", buttonArrowColor: "windowText", buttonBackgroundColor: "window", buttonBorderColor: "windowText", rifleColor: "windowText", trackBackgroundColor: "window", trackBorderColor: "windowText" }
            }
        }); t(b, "Accessibility/Options/Options.js", [b["Core/Color/Palette.js"]], function (b) {
            return {
                accessibility: {
                    enabled: !0, screenReaderSection: {
                        beforeChartFormat: "<h5>{chartTitle}</h5><div>{typeDescription}</div><div>{chartSubtitle}</div><div>{chartLongdesc}</div><div>{playAsSoundButton}</div><div>{viewTableButton}</div><div>{xAxisDescription}</div><div>{yAxisDescription}</div><div>{annotationsTitle}{annotationsList}</div>",
                        afterChartFormat: "{endOfChartMarker}", axisRangeDateFormat: "%Y-%m-%d %H:%M:%S"
                    }, series: { describeSingleSeries: !1, pointDescriptionEnabledThreshold: 200 }, point: { valueDescriptionFormat: "{index}. {xDescription}{separator}{value}." }, landmarkVerbosity: "all", linkedDescription: '*[data-highcharts-chart="{index}"] + .highcharts-description', keyboardNavigation: {
                        enabled: !0, focusBorder: { enabled: !0, hideBrowserFocusOutline: !0, style: { color: b.highlightColor80, lineWidth: 2, borderRadius: 3 }, margin: 2 }, order: ["series", "zoom",
                            "rangeSelector", "legend", "chartMenu"], wrapAround: !0, seriesNavigation: { skipNullPoints: !0, pointNavigationEnabledThreshold: !1 }
                    }, announceNewData: { enabled: !1, minAnnounceInterval: 5E3, interruptUser: !1 }
                }, legend: { accessibility: { enabled: !0, keyboardNavigation: { enabled: !0 } } }, exporting: { accessibility: { enabled: !0 } }
            }
        }); t(b, "Accessibility/Options/LangOptions.js", [], function () {
            return {
                accessibility: {
                    defaultChartTitle: "Chart", chartContainerLabel: "{title}. Highcharts interactive chart.", svgContainerLabel: "Interactive chart",
                    drillUpButton: "{buttonText}", credits: "Chart credits: {creditsStr}", thousandsSep: ",", svgContainerTitle: "", graphicContainerLabel: "", screenReaderSection: {
                        beforeRegionLabel: "Chart screen reader information.", afterRegionLabel: "", annotations: { heading: "Chart annotations summary", descriptionSinglePoint: "{annotationText}. Related to {annotationPoint}", descriptionMultiplePoints: "{annotationText}. Related to {annotationPoint}{ Also related to, #each(additionalAnnotationPoints)}", descriptionNoPoints: "{annotationText}" },
                        endOfChartMarker: "End of interactive chart."
                    }, sonification: { playAsSoundButtonText: "Play as sound, {chartTitle}", playAsSoundClickAnnouncement: "Play" }, legend: { legendLabelNoTitle: "Toggle series visibility", legendLabel: "Chart legend: {legendTitle}", legendItem: "Show {itemName}" }, zoom: { mapZoomIn: "Zoom chart", mapZoomOut: "Zoom out chart", resetZoomButton: "Reset zoom" }, rangeSelector: { dropdownLabel: "{rangeTitle}", minInputLabel: "Select start date.", maxInputLabel: "Select end date.", clickButtonAnnouncement: "Viewing {axisRangeDescription}" },
                    table: { viewAsDataTableButtonText: "View as data table, {chartTitle}", tableSummary: "Table representation of chart." }, announceNewData: { newDataAnnounce: "Updated data for chart {chartTitle}", newSeriesAnnounceSingle: "New data series: {seriesDesc}", newPointAnnounceSingle: "New data point: {pointDesc}", newSeriesAnnounceMultiple: "New data series in chart {chartTitle}: {seriesDesc}", newPointAnnounceMultiple: "New data point in chart {chartTitle}: {pointDesc}" }, seriesTypeDescriptions: {
                        boxplot: "Box plot charts are typically used to display groups of statistical data. Each data point in the chart can have up to 5 values: minimum, lower quartile, median, upper quartile, and maximum.",
                        arearange: "Arearange charts are line charts displaying a range between a lower and higher value for each point.", areasplinerange: "These charts are line charts displaying a range between a lower and higher value for each point.", bubble: "Bubble charts are scatter charts where each data point also has a size value.", columnrange: "Columnrange charts are column charts displaying a range between a lower and higher value for each point.", errorbar: "Errorbar series are used to display the variability of the data.",
                        funnel: "Funnel charts are used to display reduction of data in stages.", pyramid: "Pyramid charts consist of a single pyramid with item heights corresponding to each point value.", waterfall: "A waterfall chart is a column chart where each column contributes towards a total end value."
                    }, chartTypes: {
                        emptyChart: "Empty chart", mapTypeDescription: "Map of {mapTitle} with {numSeries} data series.", unknownMap: "Map of unspecified region with {numSeries} data series.", combinationChart: "Combination chart with {numSeries} data series.",
                        defaultSingle: "Chart with {numPoints} data {#plural(numPoints, points, point)}.", defaultMultiple: "Chart with {numSeries} data series.", splineSingle: "Line chart with {numPoints} data {#plural(numPoints, points, point)}.", splineMultiple: "Line chart with {numSeries} lines.", lineSingle: "Line chart with {numPoints} data {#plural(numPoints, points, point)}.", lineMultiple: "Line chart with {numSeries} lines.", columnSingle: "Bar chart with {numPoints} {#plural(numPoints, bars, bar)}.", columnMultiple: "Bar chart with {numSeries} data series.",
                        barSingle: "Bar chart with {numPoints} {#plural(numPoints, bars, bar)}.", barMultiple: "Bar chart with {numSeries} data series.", pieSingle: "Pie chart with {numPoints} {#plural(numPoints, slices, slice)}.", pieMultiple: "Pie chart with {numSeries} pies.", scatterSingle: "Scatter chart with {numPoints} {#plural(numPoints, points, point)}.", scatterMultiple: "Scatter chart with {numSeries} data series.", boxplotSingle: "Boxplot with {numPoints} {#plural(numPoints, boxes, box)}.", boxplotMultiple: "Boxplot with {numSeries} data series.",
                        bubbleSingle: "Bubble chart with {numPoints} {#plural(numPoints, bubbles, bubble)}.", bubbleMultiple: "Bubble chart with {numSeries} data series."
                    }, axis: {
                        xAxisDescriptionSingular: "The chart has 1 X axis displaying {names[0]}. {ranges[0]}", xAxisDescriptionPlural: "The chart has {numAxes} X axes displaying {#each(names, -1) }and {names[-1]}.", yAxisDescriptionSingular: "The chart has 1 Y axis displaying {names[0]}. {ranges[0]}", yAxisDescriptionPlural: "The chart has {numAxes} Y axes displaying {#each(names, -1) }and {names[-1]}.",
                        timeRangeDays: "Range: {range} days.", timeRangeHours: "Range: {range} hours.", timeRangeMinutes: "Range: {range} minutes.", timeRangeSeconds: "Range: {range} seconds.", rangeFromTo: "Range: {rangeFrom} to {rangeTo}.", rangeCategories: "Range: {numCategories} categories."
                    }, exporting: { chartMenuLabel: "Chart menu", menuButtonLabel: "View chart menu", exportRegionLabel: "Chart menu" }, series: {
                        summary: {
                            "default": "{name}, series {ix} of {numSeries} with {numPoints} data {#plural(numPoints, points, point)}.", defaultCombination: "{name}, series {ix} of {numSeries} with {numPoints} data {#plural(numPoints, points, point)}.",
                            line: "{name}, line {ix} of {numSeries} with {numPoints} data {#plural(numPoints, points, point)}.", lineCombination: "{name}, series {ix} of {numSeries}. Line with {numPoints} data {#plural(numPoints, points, point)}.", spline: "{name}, line {ix} of {numSeries} with {numPoints} data {#plural(numPoints, points, point)}.", splineCombination: "{name}, series {ix} of {numSeries}. Line with {numPoints} data {#plural(numPoints, points, point)}.", column: "{name}, bar series {ix} of {numSeries} with {numPoints} {#plural(numPoints, bars, bar)}.",
                            columnCombination: "{name}, series {ix} of {numSeries}. Bar series with {numPoints} {#plural(numPoints, bars, bar)}.", bar: "{name}, bar series {ix} of {numSeries} with {numPoints} {#plural(numPoints, bars, bar)}.", barCombination: "{name}, series {ix} of {numSeries}. Bar series with {numPoints} {#plural(numPoints, bars, bar)}.", pie: "{name}, pie {ix} of {numSeries} with {numPoints} {#plural(numPoints, slices, slice)}.", pieCombination: "{name}, series {ix} of {numSeries}. Pie with {numPoints} {#plural(numPoints, slices, slice)}.",
                            scatter: "{name}, scatter plot {ix} of {numSeries} with {numPoints} {#plural(numPoints, points, point)}.", scatterCombination: "{name}, series {ix} of {numSeries}, scatter plot with {numPoints} {#plural(numPoints, points, point)}.", boxplot: "{name}, boxplot {ix} of {numSeries} with {numPoints} {#plural(numPoints, boxes, box)}.", boxplotCombination: "{name}, series {ix} of {numSeries}. Boxplot with {numPoints} {#plural(numPoints, boxes, box)}.", bubble: "{name}, bubble series {ix} of {numSeries} with {numPoints} {#plural(numPoints, bubbles, bubble)}.",
                            bubbleCombination: "{name}, series {ix} of {numSeries}. Bubble series with {numPoints} {#plural(numPoints, bubbles, bubble)}.", map: "{name}, map {ix} of {numSeries} with {numPoints} {#plural(numPoints, areas, area)}.", mapCombination: "{name}, series {ix} of {numSeries}. Map with {numPoints} {#plural(numPoints, areas, area)}.", mapline: "{name}, line {ix} of {numSeries} with {numPoints} data {#plural(numPoints, points, point)}.", maplineCombination: "{name}, series {ix} of {numSeries}. Line with {numPoints} data {#plural(numPoints, points, point)}.",
                            mapbubble: "{name}, bubble series {ix} of {numSeries} with {numPoints} {#plural(numPoints, bubbles, bubble)}.", mapbubbleCombination: "{name}, series {ix} of {numSeries}. Bubble series with {numPoints} {#plural(numPoints, bubbles, bubble)}."
                        }, description: "{description}", xAxisDescription: "X axis, {name}", yAxisDescription: "Y axis, {name}", nullPointValue: "No value", pointAnnotationsDescription: "{Annotation: #each(annotations). }"
                    }
                }
            }
        }); t(b, "Accessibility/Options/DeprecatedOptions.js", [b["Core/Utilities.js"]],
            function (b) {
                function k(b, f, d) { for (var a, c = 0; c < f.length - 1; ++c)a = f[c], b = b[a] = u(b[a], {}); b[f[f.length - 1]] = d } function m(b, g, d, a) { function c(a, b) { return b.reduce(function (a, b) { return a[b] }, a) } var e = c(b.options, g), h = c(b.options, d); Object.keys(a).forEach(function (c) { var l, n = e[c]; "undefined" !== typeof n && (k(h, a[c], n), f(32, !1, b, (l = {}, l[g.join(".") + "." + c] = d.join(".") + "." + a[c].join("."), l))) }) } function p(b) {
                    var g = b.options.chart || {}, d = b.options.accessibility || {};["description", "typeDescription"].forEach(function (a) {
                        var c;
                        g[a] && (d[a] = g[a], f(32, !1, b, (c = {}, c["chart." + a] = "use accessibility." + a, c)))
                    })
                } function q(b) { b.axes.forEach(function (g) { (g = g.options) && g.description && (g.accessibility = g.accessibility || {}, g.accessibility.description = g.description, f(32, !1, b, { "axis.description": "use axis.accessibility.description" })) }) } function g(b) {
                    var g = {
                        description: ["accessibility", "description"], exposeElementToA11y: ["accessibility", "exposeAsGroupOnly"], pointDescriptionFormatter: ["accessibility", "pointDescriptionFormatter"], skipKeyboardNavigation: ["accessibility",
                            "keyboardNavigation", "enabled"]
                    }; b.series.forEach(function (d) { Object.keys(g).forEach(function (a) { var c, e = d.options[a]; "undefined" !== typeof e && (k(d.options, g[a], "skipKeyboardNavigation" === a ? !e : e), f(32, !1, b, (c = {}, c["series." + a] = "series." + g[a].join("."), c))) }) })
                } var f = b.error, u = b.pick; return function (b) {
                    p(b); q(b); b.series && g(b); m(b, ["accessibility"], ["accessibility"], {
                        pointDateFormat: ["point", "dateFormat"], pointDateFormatter: ["point", "dateFormatter"], pointDescriptionFormatter: ["point", "descriptionFormatter"],
                        pointDescriptionThreshold: ["series", "pointDescriptionEnabledThreshold"], pointNavigationThreshold: ["keyboardNavigation", "seriesNavigation", "pointNavigationEnabledThreshold"], pointValueDecimals: ["point", "valueDecimals"], pointValuePrefix: ["point", "valuePrefix"], pointValueSuffix: ["point", "valueSuffix"], screenReaderSectionFormatter: ["screenReaderSection", "beforeChartFormatter"], describeSingleSeries: ["series", "describeSingleSeries"], seriesDescriptionFormatter: ["series", "descriptionFormatter"], onTableAnchorClick: ["screenReaderSection",
                            "onViewDataTableClick"], axisRangeDateFormat: ["screenReaderSection", "axisRangeDateFormat"]
                    }); m(b, ["accessibility", "keyboardNavigation"], ["accessibility", "keyboardNavigation", "seriesNavigation"], { skipNullPoints: ["skipNullPoints"], mode: ["mode"] }); m(b, ["lang", "accessibility"], ["lang", "accessibility"], {
                        legendItem: ["legend", "legendItem"], legendLabel: ["legend", "legendLabel"], mapZoomIn: ["zoom", "mapZoomIn"], mapZoomOut: ["zoom", "mapZoomOut"], resetZoomButton: ["zoom", "resetZoomButton"], screenReaderRegionLabel: ["screenReaderSection",
                            "beforeRegionLabel"], rangeSelectorButton: ["rangeSelector", "buttonText"], rangeSelectorMaxInput: ["rangeSelector", "maxInputLabel"], rangeSelectorMinInput: ["rangeSelector", "minInputLabel"], svgContainerEnd: ["screenReaderSection", "endOfChartMarker"], viewAsDataTable: ["table", "viewAsDataTableButtonText"], tableSummary: ["table", "tableSummary"]
                    })
                }
            }); t(b, "Accessibility/A11yI18n.js", [b["Core/Globals.js"], b["Core/Utilities.js"]], function (b, k) {
                function m(b, f) {
                    var g = b.indexOf("#each("), k = b.indexOf("#plural("), h = b.indexOf("["),
                    d = b.indexOf("]"); if (-1 < g) { h = b.slice(g).indexOf(")") + g; var a = b.substring(0, g); k = b.substring(h + 1); h = b.substring(g + 6, h).split(","); g = Number(h[1]); b = ""; if (f = f[h[0]]) for (g = isNaN(g) ? f.length : g, g = 0 > g ? f.length + g : Math.min(g, f.length), h = 0; h < g; ++h)b += a + f[h] + k; return b.length ? b : "" } if (-1 < k) {
                        a = b.slice(k).indexOf(")") + k; b = b.substring(k + 8, a).split(","); switch (Number(f[b[0]])) { case 0: b = q(b[4], b[1]); break; case 1: b = q(b[2], b[1]); break; case 2: b = q(b[3], b[1]); break; default: b = b[1] }b ? (f = b, f = f.trim && f.trim() || f.replace(/^\s+|\s+$/g,
                            "")) : f = ""; return f
                    } return -1 < h ? (k = b.substring(0, h), b = Number(b.substring(h + 1, d)), f = f[k], !isNaN(b) && f && (0 > b ? (a = f[f.length + b], "undefined" === typeof a && (a = f[0])) : (a = f[b], "undefined" === typeof a && (a = f[f.length - 1]))), "undefined" !== typeof a ? a : "") : "{" + b + "}"
                } var p = k.format, q = k.pick; b.i18nFormat = function (b, f, k) {
                    var g = function (a, b) { a = a.slice(b || 0); var c = a.indexOf("{"), d = a.indexOf("}"); if (-1 < c && d > c) return { statement: a.substring(c + 1, d), begin: b + c + 1, end: b + d } }, h = [], d = 0; do {
                        var a = g(b, d); var c = b.substring(d, a && a.begin -
                            1); c.length && h.push({ value: c, type: "constant" }); a && h.push({ value: a.statement, type: "statement" }); d = a ? a.end + 1 : d + 1
                    } while (a); h.forEach(function (a) { "statement" === a.type && (a.value = m(a.value, f)) }); return p(h.reduce(function (a, b) { return a + b.value }, ""), f, k)
                }; b.Chart.prototype.langFormat = function (g, f) { g = g.split("."); for (var k = this.options.lang, m = 0; m < g.length; ++m)k = k && k[g[m]]; return "string" === typeof k ? b.i18nFormat(k, f, this) : "" }
            }); t(b, "Accessibility/FocusBorder.js", [b["Core/Globals.js"], b["Core/Renderer/SVG/SVGElement.js"],
            b["Core/Renderer/SVG/SVGLabel.js"], b["Core/Utilities.js"]], function (b, k, m, p) {
                function q(a) { if (!a.focusBorderDestroyHook) { var b = a.destroy; a.destroy = function () { var c, d; null === (d = null === (c = a.focusBorder) || void 0 === c ? void 0 : c.destroy) || void 0 === d ? void 0 : d.call(c); return b.apply(a, arguments) }; a.focusBorderDestroyHook = b } } function g(a) {
                    for (var b = [], e = 1; e < arguments.length; e++)b[e - 1] = arguments[e]; a.focusBorderUpdateHooks || (a.focusBorderUpdateHooks = {}, d.forEach(function (c) {
                        c += "Setter"; var d = a[c] || a._defaultSetter;
                        a.focusBorderUpdateHooks[c] = d; a[c] = function () { var c = d.apply(a, arguments); a.addFocusBorder.apply(a, b); return c }
                    }))
                } function f(a) { a.focusBorderUpdateHooks && (Object.keys(a.focusBorderUpdateHooks).forEach(function (b) { var c = a.focusBorderUpdateHooks[b]; c === a._defaultSetter ? delete a[b] : a[b] = c }), delete a.focusBorderUpdateHooks) } var t = p.addEvent, r = p.extend, h = p.pick, d = "x y transform width height r d stroke-width".split(" "); r(k.prototype, {
                    addFocusBorder: function (a, c) {
                    this.focusBorder && this.removeFocusBorder();
                        var d = this.getBBox(), f = h(a, 3); d.x += this.translateX ? this.translateX : 0; d.y += this.translateY ? this.translateY : 0; var k = d.x - f, p = d.y - f, r = d.width + 2 * f, t = d.height + 2 * f, u = this instanceof m; if ("text" === this.element.nodeName || u) {
                            var y = !!this.rotation; if (u) var B = { x: y ? 1 : 0, y: 0 }; else { var x = B = 0; "middle" === this.attr("text-anchor") ? (B = b.isFirefox && this.rotation ? .25 : .5, x = b.isFirefox && !this.rotation ? .75 : .5) : this.rotation ? B = .25 : x = .75; B = { x: B, y: x } } x = +this.attr("x"); var z = +this.attr("y"); isNaN(x) || (k = x - d.width * B.x - f); isNaN(z) ||
                                (p = z - d.height * B.y - f); u && y && (u = r, r = t, t = u, isNaN(x) || (k = x - d.height * B.x - f), isNaN(z) || (p = z - d.width * B.y - f))
                        } this.focusBorder = this.renderer.rect(k, p, r, t, parseInt((c && c.borderRadius || 0).toString(), 10)).addClass("highcharts-focus-border").attr({ zIndex: 99 }).add(this.parentGroup); this.renderer.styledMode || this.focusBorder.attr({ stroke: c && c.stroke, "stroke-width": c && c.strokeWidth }); g(this, a, c); q(this)
                    }, removeFocusBorder: function () {
                        f(this); this.focusBorderDestroyHook && (this.destroy = this.focusBorderDestroyHook,
                            delete this.focusBorderDestroyHook); this.focusBorder && (this.focusBorder.destroy(), delete this.focusBorder)
                    }
                }); b.Chart.prototype.renderFocusBorder = function () { var a = this.focusElement, b = this.options.accessibility.keyboardNavigation.focusBorder; a && (a.removeFocusBorder(), b.enabled && a.addFocusBorder(b.margin, { stroke: b.style.color, strokeWidth: b.style.lineWidth, borderRadius: b.style.borderRadius })) }; b.Chart.prototype.setFocusToElement = function (a, b) {
                    var c = this.options.accessibility.keyboardNavigation.focusBorder;
                    (b = b || a.element) && b.focus && (b.hcEvents && b.hcEvents.focusin || t(b, "focusin", function () { }), b.focus(), c.hideBrowserFocusOutline && (b.style.outline = "none")); this.focusElement && this.focusElement.removeFocusBorder(); this.focusElement = a; this.renderFocusBorder()
                }
            }); t(b, "Accessibility/Accessibility.js", [b["Accessibility/Utils/ChartUtilities.js"], b["Core/Globals.js"], b["Accessibility/KeyboardNavigationHandler.js"], b["Core/Options.js"], b["Core/Series/Point.js"], b["Core/Series/Series.js"], b["Core/Utilities.js"],
            b["Accessibility/AccessibilityComponent.js"], b["Accessibility/KeyboardNavigation.js"], b["Accessibility/Components/LegendComponent.js"], b["Accessibility/Components/MenuComponent.js"], b["Accessibility/Components/SeriesComponent/SeriesComponent.js"], b["Accessibility/Components/ZoomComponent.js"], b["Accessibility/Components/RangeSelectorComponent.js"], b["Accessibility/Components/InfoRegionsComponent.js"], b["Accessibility/Components/ContainerComponent.js"], b["Accessibility/HighContrastMode.js"], b["Accessibility/HighContrastTheme.js"],
            b["Accessibility/Options/Options.js"], b["Accessibility/Options/LangOptions.js"], b["Accessibility/Options/DeprecatedOptions.js"]], function (b, k, m, p, q, g, f, t, r, h, d, a, c, e, l, n, C, F, K, L, G) {
                function u(a) { this.init(a) } var x = k.doc, z = f.addEvent, y = f.extend, H = f.fireEvent, I = f.merge; I(!0, p.defaultOptions, K, { accessibility: { highContrastTheme: F }, lang: L }); k.A11yChartUtilities = b; k.KeyboardNavigationHandler = m; k.AccessibilityComponent = t; u.prototype = {
                    init: function (a) {
                    this.chart = a; x.addEventListener && a.renderer.isSVG ? (G(a),
                        this.initComponents(), this.keyboardNavigation = new r(a, this.components), this.update()) : a.renderTo.setAttribute("aria-hidden", !0)
                    }, initComponents: function () { var b = this.chart, f = b.options.accessibility; this.components = { container: new n, infoRegions: new l, legend: new h, chartMenu: new d, rangeSelector: new e, series: new a, zoom: new c }; f.customComponents && y(this.components, f.customComponents); var g = this.components; this.getComponentOrder().forEach(function (a) { g[a].initBase(b); g[a].init() }) }, getComponentOrder: function () {
                        if (!this.components) return [];
                        if (!this.components.series) return Object.keys(this.components); var a = Object.keys(this.components).filter(function (a) { return "series" !== a }); return ["series"].concat(a)
                    }, update: function () {
                        var a = this.components, b = this.chart, c = b.options.accessibility; H(b, "beforeA11yUpdate"); b.types = this.getChartTypes(); this.getComponentOrder().forEach(function (c) { a[c].onChartUpdate(); H(b, "afterA11yComponentUpdate", { name: c, component: a[c] }) }); this.keyboardNavigation.update(c.keyboardNavigation.order); !b.highContrastModeActive &&
                            C.isHighContrastModeActive() && C.setHighContrastTheme(b); H(b, "afterA11yUpdate", { accessibility: this })
                    }, destroy: function () { var a = this.chart || {}, b = this.components; Object.keys(b).forEach(function (a) { b[a].destroy(); b[a].destroyBase() }); this.keyboardNavigation && this.keyboardNavigation.destroy(); a.renderTo && a.renderTo.setAttribute("aria-hidden", !0); a.focusElement && a.focusElement.removeFocusBorder() }, getChartTypes: function () { var a = {}; this.chart.series.forEach(function (b) { a[b.type] = 1 }); return Object.keys(a) }
                };
                k.Chart.prototype.updateA11yEnabled = function () { var a = this.accessibility, b = this.options.accessibility; b && b.enabled ? a ? a.update() : this.accessibility = new u(this) : a ? (a.destroy && a.destroy(), delete this.accessibility) : this.renderTo.setAttribute("aria-hidden", !0) }; z(k.Chart, "render", function (a) { this.a11yDirty && this.renderTo && (delete this.a11yDirty, this.updateA11yEnabled()); var b = this.accessibility; b && b.getComponentOrder().forEach(function (a) { b.components[a].onChartRender() }) }); z(k.Chart, "update", function (a) {
                    if (a =
                        a.options.accessibility) a.customComponents && (this.options.accessibility.customComponents = a.customComponents, delete a.customComponents), I(!0, this.options.accessibility, a), this.accessibility && this.accessibility.destroy && (this.accessibility.destroy(), delete this.accessibility); this.a11yDirty = !0
                }); z(q, "update", function () { this.series.chart.accessibility && (this.series.chart.a11yDirty = !0) });["addSeries", "init"].forEach(function (a) { z(k.Chart, a, function () { this.a11yDirty = !0 }) });["update", "updatedData", "remove"].forEach(function (a) {
                    z(g,
                        a, function () { this.chart.accessibility && (this.chart.a11yDirty = !0) })
                });["afterDrilldown", "drillupall"].forEach(function (a) { z(k.Chart, a, function () { this.accessibility && this.accessibility.update() }) }); z(k.Chart, "destroy", function () { this.accessibility && this.accessibility.destroy() })
            }); t(b, "masters/modules/accessibility.src.js", [], function () { })
});
//# sourceMappingURL=accessibility.js.map