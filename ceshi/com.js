!
    function(e) {
        function t(i) {
            if (n[i]) return n[i].exports;
            var o = n[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return e[i].call(o.exports, o, o.exports, t), o.l = !0, o.exports
        }
        var n = {};
        t.m = e, t.c = n, t.i = function(e) {
            return e
        }, t.d = function(e, n, i) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: i
            })
        }, t.n = function(e) {
            var n = e && e.__esModule ?
                function() {
                    return e["default"]
                } : function() {
                    return e
                };
            return t.d(n, "a", n), n
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 42)
    }([function(e, t) {
        e.exports = jQuery
    }, function(e, t, n) {
        var i = i || {};
        e.exports = i;
        var o = jQuery = n(0);
        i.getQueryString = function(e) {
            var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
                n = location.search.substr(1).match(t);
            return null != n ? unescape(decodeURI(n[2])) : null

        }, i.getCurrentScript = function() {
            if (document.currentScript) return document.currentScript.src;
            var e;
            try {
                throw new Error
            } catch (t) {
                e = t.stack, !e && window.opera && (e = (String(t).match(/of linked script \S+/g) || []).join(" "))
            }
            if (e) return e = e.split(/[@ ]/g).pop(), e = "(" == e[0] ? e.slice(1, -1) : e, e.replace(/(:\d+)?:\d+$/i, "");
            for (var t, n = document.getElementsByTagName("script"), i = 0; t = n[i++];) if ("interactive" === t.readyState) return t.className = t.src
        }, i.isElementVisible = function(e) {
            var t = e.getBoundingClientRect(),
                n = document,
                i = window.innerWidth || n.documentElement.clientWidth,
                o = window.innerHeight || n.documentElement.clientHeight,
                r = function(e, t) {
                    return document.elementFromPoint(e, t)
                };
            return !(t.right < 0 || t.bottom < 0 || t.left > i || t.top > o) && (e.contains(r(t.left, t.top)) || e.contains(r(t.right, t.top)) || e.contains(r(t.right, t.bottom)) || e.contains(r(t.left, t.bottom)))
        }, i.jqueryPlugin = function() {
            var e = n(0);
            return e.fn.isOnScreen = function() {
                var t = e(window),
                    n = {
                        top: t.scrollTop(),
                        left: t.scrollLeft()
                    };
                n.right = n.left + t.width(), n.bottom = n.top + t.height();
                var i = this.offset();
                return i.right = i.left + this.outerWidth(), i.bottom = i.top + this.outerHeight(), !(n.right < i.left || n.left > i.right || n.bottom < i.top || n.top > i.bottom)
            }, e.fn.inViewport = function() {
                return !!this.length && i.isElementVisible(this.get(0))
            }, e
        }, i.once = function(e) {
            function t(e, t) {
                var i;
                if ("function" != typeof t) throw new TypeError(n);
                return e = Number(e) || 2, function() {
                    return --e > 0 && (i = t.apply(this, arguments)), e <= 1 && (t = undefined), i
                }
            }
            var n = "Expected a function";
            return function(e) {
                return t(2, e)
            }(e)
        }, i.throttle = function(e, t, n) {
            function i(e, t, n) {
                function i(t) {
                    var n = g,
                        i = m;
                    return g = m = undefined, _ = t, w = e.apply(i, n)
                }
                function s(e) {
                    return _ = e, y = setTimeout(u, t), x ? i(e) : w
                }
                function c(e) {
                    var n = e - b,
                        i = e - _,
                        o = t - n;
                    return k ? Math.min(o, v - i) : o
                }
                function l(e) {
                    var n = e - b,
                        i = e - _;
                    return b === undefined || n >= t || n < 0 || k && i >= v
                }
                function u() {
                    var e = a();
                    if (l(e)) return d(e);
                    y = setTimeout(u, c(e))
                }
                function d(e) {
                    return y = undefined, j && g ? i(e) : (g = m = undefined, w)
                }
                function f() {
                    y !== undefined && clearTimeout(y), _ = 0, g = b = m = y = undefined
                }
                function h() {
                    return y === undefined ? w : d(a())
                }
                function p() {
                    var e = a(),
                        n = l(e);
                    if (g = arguments, m = this, b = e, n) {
                        if (y === undefined) return s(b);
                        if (k) return y = setTimeout(u, t), i(b)
                    }
                    return y === undefined && (y = setTimeout(u, t)), w
                }
                var g, m, v, w, y, b, _ = 0,
                    x = !1,
                    k = !1,
                    j = !0;
                if ("function" != typeof e) throw new TypeError(FUNC_ERROR_TEXT);
                return t = r(t) || 0, o(n) && (x = !! n.leading, k = "maxWait" in n, v = k ? Math.max(r(n.maxWait) || 0, t) : v, j = "trailing" in n ? !! n.trailing : j), p.cancel = f, p.flush = h, p
            }
            function o(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }
            function r(e) {
                return Number(e)
            }
            Date.now || (Date.now = function() {
                return (new Date).getTime()
            });
            var a = function() {
                return Date.now()
            };
            return function(e, t, n) {
                var r = !0,
                    a = !0;
                if ("function" != typeof e) throw new TypeError(FUNC_ERROR_TEXT);
                return o(n) && (r = "leading" in n ? !! n.leading : r, a = "trailing" in n ? !! n.trailing : a), i(e, t, {
                    leading: r,
                    maxWait: t,
                    trailing: a
                })
            }(e, t, n)
        }
    }, function(e, t, n) {
        var i, o;
        /*!
         * $script.js JS loader & dependency manager
         * https://github.com/ded/script.js
         * (c) Dustin Diaz 2014 | License MIT
         */
        !
            function(r, a) {
                void 0 !== e && e.exports ? e.exports = a() : (i = a, (o = "function" == typeof i ? i.call(t, n, t, e) : i) !== undefined && (e.exports = o))
            }(0, function() {
                function e(e, t) {
                    for (var n = 0, i = e.length; n < i; ++n) if (!t(e[n])) return c;
                    return 1
                }
                function t(t, n) {
                    e(t, function(e) {
                        return !n(e)
                    })
                }
                function n(r, a, s) {
                    function c(e) {
                        return e.call ? e() : f[e]
                    }
                    function u() {
                        if (!--w) {
                            f[v] = 1, m && m();
                            for (var n in p) e(n.split("|"), c) && !t(p[n], c) && (p[n] = [])
                        }
                    }
                    r = r[l] ? r : [r];
                    var d = a && a.call,
                        m = d ? a : s,
                        v = d ? r.join("") : a,
                        w = r.length;
                    return setTimeout(function() {
                        t(r, function e(t, n) {
                            return null === t ? u() : (!n && !/^https?:\/\//.test(t) && o && (t = t.indexOf(".js") === -1 ? o + t + ".js" : o + t), g[t] ? (v && (h[v] = 1), 2 == g[t] ? u() : setTimeout(function() {
                                e(t, !0)
                            }, 0)) : (g[t] = 1, v && (h[v] = 1), i(t, u), void 0))
                        })
                    }, 0), n
                }
                function i(e, t) {
                    var n, i = a.createElement("script");
                    i.onload = i.onerror = i[d] = function() {
                        i[u] && !/^c|loade/.test(i[u]) || n || (i.onload = i[d] = null, n = 1, g[e] = 2, t())
                    }, i.async = 1, i.src = r ? e + (e.indexOf("?") === -1 ? "?" : "&") + r : e, s.insertBefore(i, s.lastChild)
                }
                var o, r, a = document,
                    s = a.getElementsByTagName("head")[0],
                    c = !1,
                    l = "push",
                    u = "readyState",
                    d = "onreadystatechange",
                    f = {},
                    h = {},
                    p = {},
                    g = {};
                return n.get = i, n.order = function(e, t, i) {
                    !
                        function o(r) {
                            r = e.shift(), e.length ? n(r, o) : n(r, t, i)
                        }()
                }, n.path = function(e) {
                    o = e
                }, n.urlArgs = function(e) {
                    r = e
                }, n.ready = function(i, o, r) {
                    i = i[l] ? i : [i];
                    var a = [];
                    return !t(i, function(e) {
                        f[e] || a[l](e)
                    }) && e(i, function(e) {
                        return f[e]
                    }) ? o() : function(e) {
                        p[e] = p[e] || [], p[e][l](o), r && r(a)
                    }(i.join("|")), n
                }, n.done = function(e) {
                    n([null], e)
                }, n
            })
    }, function(e, t, n) {

    }, function(e, t, n) {

    }, function(e, t, n) {

    }, function(e, t) {
        var n = n || {};
        e.exports = n, window.mobVideoFlag = !1, window.orgbanners = new Array
    }, function(e, t, n) {
        var i = i || {};
        e.exports = i;
        var o = jQuery = n(0),
            r = n(2);
        i.click = function() {

        }, i.harwar_navMenuMobile = {
            open: function() {
                o("#header, #footer").addClass("open"), o("#footer").css("top", o("#header").height()), o("#mob_nav").addClass("open")
            },
            close: function() {
                o("#footer").css("top", "initial"), o("#mob_nav").removeClass("open"), o("#header, #footer").removeClass("open")
            }
        }, i.mastheadMenu = function() {
            function e() {
                i(!1), t(c.$el.find("li.active a"), !1)
            }
            function t(e, t) {
                t ? e.parent().addClass("active") : e.parent().removeClass("active")
            }
            function i(e) {
                if (e) {
                    if (l.hasClass(u)) {
                        var t = l.data("section");
                        o("#subnav").css({
                            "background-color": "transparent"
                        }).find('[data-section="' + t + '"]').css({
                            left: l.parent().offset().left - o("#subnav .lg-container").offset().left + 15 + "px"
                        })
                    } else o("#subnav").css({
                        "background-color": "#f1f1f1"
                    });
                    o("body").addClass("showing"), c.isopen = !0
                } else c.isopen = !1, o("#subnav").css("top", ""), c.$sectionShowing = o(".subnav_section.open"), !c.isopen && c.$sectionShowing.length && (c.$sectionShowing.removeClass("open"), c.$sectionShowing = null, o("#subnav").removeAttr("style")), o("body").removeClass("showing")
            }
            function r(e) {
                o("#subnav").outerHeight(o(".subnav_section[data-section='" + e + "']").outerHeight()),
                o("#masthead").hasClass("fixed") && o("#subnav").css("top", o("#masthead").outerHeight()),
                    c.$sectionShowing = o(".subnav_section[data-section='" + e + "']").addClass("open")
            }
            n(18);
            var a, s, c = {
                $closeButtonLink: null,
                $el: null,
                $sectionShowing: null,
                isopen: !1,
                $panelShowing: null
            };
            c.$el = o(".nav");
            var l = o(document),
                u = "js-menu-special";
            return o(".nav").hoverIntent(function() {
                l = o(this);
                var n = this.getAttribute("data-menutype"),
                    s = this.getAttribute("data-section");
                a = s, e(), "dropdown" === n || "has_no_submenu" === n ? o("#subnav").height("auto") : "megamenu" === n && (r(s), i(!0), t(o(this), !0))
            }, function() {}, ">li>a").off("vclick", ">li>a").on("vclick", ">li>a", function(n) {
                l = o(this);
                var a = this.getAttribute("data-menutype"),
                    s = this.getAttribute("data-section");
                "dropdown" === a ? (n.preventDefault(), t(o(this), !0)) : "megamenu" !== a || o(this).parent().hasClass("active") ? "megamenu" === a && o(this).parent().hasClass("active") && e() : (n.preventDefault(), r(s), t(o(this), !0), i(!0))
            }), o(".nav li,#subnav").hover(function(e) {
                l.hasClass(u) && o(e.currentTarget).is("#subnav") || clearTimeout(s)
            }, function() {
                clearTimeout(s), s = setTimeout(function() {
                    e()
                }, 500)
            }), o(document).on("mouseenter", "#subnav .subnav_section." + u, function(e) {
                clearTimeout(s)
            }).on("mouseleave", "#subnav .subnav_section." + u, function(t) {
                clearTimeout(s), s = setTimeout(function() {
                    e()
                }, 500)
            }), {
                increment: function(e) {
                    o("#subnav").length <= 0 || o("#subnav").get(0).contains(o(e.target).get(0)) || o(".nav").get(0).contains(o(e.target).get(0)) || i(!1)
                }
            }
        }, i.topSkinny = function() {
            o(window).width() > 991 && o(window).scroll(function() {
                var e = o(window).scrollTop(),
                    t = o("#masthead");
                e > 1 ? t.addClass("fixed") : e <= 104 && t.removeClass("fixed")
            })
        }, i.harwar_click = function() {
            o(document).on("click", "#mob_menuitem,#mob_nav_close", function(e) {
                return "vclick" === e.type ? ((navigator.userAgent.indexOf("MSIE ") > 0 || navigator.userAgent.indexOf("Trident") > 0) && o("#mob_menuitem").trigger("tap"), !1) : ("0px" == o("#header").css("left") ? i.harwar_navMenuMobile.open() : i.harwar_navMenuMobile.close(), !1)
            }).on("click", ".has_more>a", function() {
                var e = o(this).parent().children("ul").first(),
                    t = o(this).parent();
                return o(".has_more").each(function(n, i) {
                    n == t.attr("data-index") ? (o(this).parent().addClass("active"), "none" == e.css("display") ? e.slideDown() : e.slideUp()) : (o(this).parent().removeClass("active"), "block" == o(i).children("ul").first().css("display") && o(i).children("ul").first().slideUp())
                }), !1

            }).on("click", function(e) {
                i.mastheadMenu().increment(e), "block" == o("#headsearch_box").css("display") && (!o(e.target) || o(e.target).hasClass("dropdown-toggle") || jQuery.contains(o("#headsearch_box").get(0), o(e.target).get(0)) || o("#headsearch_box").slideUp())
            })
        }, i.resize = function() {
            o(window).width() > 768 && (i.harwar_navMenuMobile.close())

        }, i.init = function() {
            i.harwar_click(), i.topSkinny(), o(window).resize(function() {
                i.resize()
            }),i.click(), n(11).lazyload_init(), i.mastheadMenu(), n(14).pageTop();
            n(17);

        }
    }, function(module, exports, __webpack_require__) {

    }, function(e, t, n) {

    }, function(e, t, n) {

    }, function(e, t, n) {
        var i = i || {};
        e.exports = i, i.lazyload = function(e) {
            function t() {
                i(this).parent().css({
                    "padding-top": ""
                }).removeClass("lazy-placeholder").addClass("lazy-loaded").addClass("over")
            }
            var i = jQuery = n(0);
            n(2);
            e = e || "img.lazy";
            var o = i(e).wrap("<span class='lazy-placeholder'/>");
            n(19);
            o.lazyload({
                effect: "fadeIn",
                failure_limit: 10,
                threshold: 100,
                placeholder: "http://www.harwar.com/static/image/loading.gif",
                load: t
            })
        }, i.lazyload_init = function(e) {
            var t = $.Deferred();
            $("#index-card .harwar_img").show(), i.lazyload(e), i.imgHeightIndex(), i.imgHeightList(), t.resolve(), $(window).on("load", function(e) {
                var t = 0,
                    n = setInterval(function() {
                        t > 5 && clearInterval(n), t++, $("html,body").trigger("scroll")
                    }, 500)
            }), $(document).on("mouseenter", ".nav li a", function(e) {
                $("#subnav [data-section='" + $(this).data("section") + "'] img.lazy").trigger("appear")
            }), $(document).on("webkitTransitionEnd transitionend oTransitionEnd otransitionend", "#index-card .animate-item", function(e) {
                $(this).hasClass("transitionend") || ($(this).addClass("transitionend"), $(window).trigger("scroll"))
            }), t.promise()
        }, $.fn.extend({
            setWidthHeight: function(e) {
                var t = {
                        scale: 4 / 3
                    },
                    n = $.extend({}, t, e);
                n.scale = 100 / (100 * n.scale) * 100;
                var i = $(this),
                    o = i.width(),
                    r = o / n.scale;
                i.css("padding-top", n.scale + "%"), $(window).resize(function() {
                    i.each(function() {
                        $(this).hasClass("over") || (o = i.width(), r = o * n.h / n.w, i.css("padding-top", n.scale + "%"))
                    })
                })
            }
        }), i.imgHeightIndex = function() {
            $("#index-card img.lazy").parent().setWidthHeight({
                scale: 755 / 369
            }), $("#index-card img.lazy").first().parent().setWidthHeight({
                scale: 700 / 704
            })
        }, i.imgHeightList = function() {}
    }, function(e, t, n) {

    }, function(e, t, n) {

    }, function(e, t, n) {
        var i = i || {};
        e.exports = i;
        var o = jQuery = n(0);
        i.pageTop = function() {
            o(window).scroll(function() {
                o(window).scrollTop() > 1e3 ? o("#top").fadeIn() : o("#top").fadeOut()
            })
        }
    }, function(e, t, n) {

    }, function(e, t, n) {

    }, function(e, t, n) {

    }, function(e, t) {
        !
            function(e) {
                e.fn.hoverIntent = function(t, n, i) {
                    var o = {
                        interval: 100,
                        sensitivity: 6,
                        timeout: 0
                    };
                    o = "object" == typeof t ? e.extend(o, t) : e.isFunction(n) ? e.extend(o, {
                        over: t,
                        out: n,
                        selector: i
                    }) : e.extend(o, {
                        over: t,
                        out: t,
                        selector: n
                    });
                    var r, a, s, c, l = function(e) {
                            r = e.pageX, a = e.pageY
                        },
                        u = function(t, n) {
                            return n.hoverIntent_t = clearTimeout(n.hoverIntent_t), Math.sqrt((s - r) * (s - r) + (c - a) * (c - a)) < o.sensitivity ? (e(n).off("mousemove.hoverIntent", l), n.hoverIntent_s = !0, o.over.apply(n, [t])) : (s = r, c = a, void(n.hoverIntent_t = setTimeout(function() {
                                u(t, n)
                            }, o.interval)))
                        },
                        d = function(e, t) {
                            return t.hoverIntent_t = clearTimeout(t.hoverIntent_t), t.hoverIntent_s = !1, o.out.apply(t, [e])
                        },
                        f = function(t) {
                            var n = e.extend({}, t),
                                i = this;
                            i.hoverIntent_t && (i.hoverIntent_t = clearTimeout(i.hoverIntent_t)), "mouseenter" === t.type ? (s = n.pageX, c = n.pageY, e(i).on("mousemove.hoverIntent", l), i.hoverIntent_s || (i.hoverIntent_t = setTimeout(function() {
                                u(n, i)
                            }, o.interval))) : (e(i).off("mousemove.hoverIntent", l), i.hoverIntent_s && (i.hoverIntent_t = setTimeout(function() {
                                d(n, i)
                            }, o.timeout)))
                        };
                    return this.on({
                        "mouseenter.hoverIntent": f,
                        "mouseleave.hoverIntent": f
                    }, o.selector)
                }
            }(jQuery)
    }, function(e, t) { /*! Lazy Load 1.9.7 - MIT license - Copyright 2010-2015 Mika Tuupola */
        !
            function(e, t, n, i) {
                var o = e(t);
                e.fn.lazyload = function(r) {
                    function a() {
                        var t = 0;
                        c.each(function() {
                            var n = e(this);
                            if (!l.skip_invisible || n.is(":visible")) if (e.abovethetop(this, l) || e.leftofbegin(this, l));
                            else if (e.belowthefold(this, l) || e.rightoffold(this, l)) {
                                if (++t > l.failure_limit) return !1
                            } else n.trigger("appear"), t = 0
                        })
                    }
                    var s, c = this,
                        l = {
                            threshold: 0,
                            failure_limit: 0,
                            event: "scroll",
                            effect: "show",
                            container: t,
                            data_attribute: "original",
                            skip_invisible: !1,
                            appear: null,
                            load: null,
                            placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                        };
                    return r && (i !== r.failurelimit && (r.failure_limit = r.failurelimit, delete r.failurelimit), i !== r.effectspeed && (r.effect_speed = r.effectspeed, delete r.effectspeed), e.extend(l, r)), s = l.container === i || l.container === t ? o : e(l.container), 0 === l.event.indexOf("scroll") && s.bind(l.event, function() {
                        return a()
                    }), this.each(function() {
                        var t = this,
                            n = e(t);
                        t.loaded = !1, (n.attr("src") === i || n.attr("src") === !1) && n.is("img") && n.attr("src", l.placeholder), n.one("appear", function() {
                            if (!this.loaded) {
                                if (l.appear) {
                                    var i = c.length;
                                    l.appear.call(t, i, l)
                                }
                                e("<img />").bind("load", function() {
                                    var i = n.attr("data-" + l.data_attribute);
                                    n.hide(), n.is("img") ? n.attr("src", i) : n.css("background-image", "url('" + i + "')"), n[l.effect](l.effect_speed), t.loaded = !0;
                                    var o = e.grep(c, function(e) {
                                        return !e.loaded
                                    });
                                    if (c = e(o), l.load) {
                                        var r = c.length;
                                        l.load.call(t, r, l)
                                    }
                                }).attr("src", n.attr("data-" + l.data_attribute))
                            }
                        }), 0 !== l.event.indexOf("scroll") && n.bind(l.event, function() {
                            t.loaded || n.trigger("appear")
                        })
                    }), o.bind("resize", function() {
                        a()
                    }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && o.bind("pageshow", function(t) {
                        t.originalEvent && t.originalEvent.persisted && c.each(function() {
                            e(this).trigger("appear")
                        })
                    }), e(n).ready(function() {
                        a()
                    }), this
                }, e.belowthefold = function(n, r) {
                    return (r.container === i || r.container === t ? (t.innerHeight ? t.innerHeight : o.height()) + o.scrollTop() : e(r.container).offset().top + e(r.container).height()) <= e(n).offset().top - r.threshold
                }, e.rightoffold = function(n, r) {
                    return (r.container === i || r.container === t ? o.width() + o.scrollLeft() : e(r.container).offset().left + e(r.container).width()) <= e(n).offset().left - r.threshold
                }, e.abovethetop = function(n, r) {
                    return (r.container === i || r.container === t ? o.scrollTop() : e(r.container).offset().top) >= e(n).offset().top + r.threshold + e(n).height()
                }, e.leftofbegin = function(n, r) {
                    return (r.container === i || r.container === t ? o.scrollLeft() : e(r.container).offset().left) >= e(n).offset().left + r.threshold + e(n).width()
                }, e.inviewport = function(t, n) {
                    return !(e.rightoffold(t, n) || e.leftofbegin(t, n) || e.belowthefold(t, n) || e.abovethetop(t, n))
                }, e.extend(e.expr[":"], {
                    "below-the-fold": function(t) {
                        return e.belowthefold(t, {
                            threshold: 0

                        })
                    },
                    "above-the-top": function(t) {
                        return !e.belowthefold(t, {
                            threshold: 0
                        })
                    },
                    "right-of-screen": function(t) {
                        return e.rightoffold(t, {
                            threshold: 0
                        })
                    },
                    "left-of-screen": function(t) {
                        return !e.rightoffold(t, {
                            threshold: 0
                        })
                    },
                    "in-viewport": function(t) {
                        return e.inviewport(t, {
                            threshold: 0
                        })
                    },
                    "above-the-fold": function(t) {
                        return !e.belowthefold(t, {
                            threshold: 0
                        })
                    },
                    "right-of-fold": function(t) {
                        return e.rightoffold(t, {
                            threshold: 0
                        })
                    },
                    "left-of-fold": function(t) {
                        return !e.rightoffold(t, {
                            threshold: 0
                        })
                    }
                })
            }(jQuery, window, document)
    }, , , , , , , , , function(e, t, n) {
        var i = i || {};
        e.exports = i;
        var o = jQuery = n(0);
        i.init = function() {
            i.harwar_preload(), i.reBulidMenuDom(), o(window).resize(function() {
                i.reBulidMenuDom()
            })

        }, i.harwar_preload = function() {
            o("#harwar_preloader").length > 0 && ($app = o(".harwar_banner"), o("#harwar_preloader").show())
        }, i.reBulidMenuDom = function() {
            o("#headsearch_box").appendTo(o(".headsearch")), o(window).width() >= 1024 ? (o("#headsearch_box").insertAfter, o("#headsearch_box").removeAttr("style")) : (o("#headsearch_box").insertAfter(o("#masthead")), o("#headsearch_box").css("width", o(window).width())), o(".dropdown-toggle").off("click").on("click", function(e) {
                return o("#headsearch_box").slideToggle("100"), o("#headsearch_box input[type='text']").focus(), !1
            }), o(".harwar_img_subinfo a").hover(function() {
                $this = this, $img = o(this).parentsUntil(".harwar_multi_img", ".harwar_img_subinfo").prev(), $img.hasClass("hover") || ($img = $img.addClass("hover"))
            }, function() {
                $img.hasClass("hover") && ($img = $img.removeClass("hover"))
            })

        }
    }, , , function(e, t, n) {

    }, function(e, t, n) {

    }, , , , , function(e, t, n) {
        var i, o, r, a, i, s;
        /*!
         * imagesLoaded PACKAGED v3.2.0
         * JavaScript is all like "You images are done yet or what?"
         * MIT License
         */
        (function() {
            "use strict";

            function e() {}
            function n(e, t) {
                for (var n = e.length; n--;) if (e[n].listener === t) return n;
                return -1
            }
            function r(e) {
                return function() {
                    return this[e].apply(this, arguments)
                }
            }
            var a = e.prototype,
                s = this,
                c = s.EventEmitter;
            a.getListeners = function(e) {
                var t, n, i = this._getEvents();
                if ("object" == typeof e) {
                    t = {};
                    for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
                } else t = i[e] || (i[e] = []);
                return t
            }, a.flattenListeners = function(e) {
                var t, n = [];
                for (t = 0; t < e.length; t += 1) n.push(e[t].listener);
                return n
            }, a.getListenersAsObject = function(e) {
                var t, n = this.getListeners(e);
                return n instanceof Array && (t = {}, t[e] = n), t || n
            }, a.addListener = function(e, t) {
                var i, o = this.getListenersAsObject(e),
                    r = "object" == typeof t;
                for (i in o) o.hasOwnProperty(i) && -1 === n(o[i], t) && o[i].push(r ? t : {
                    listener: t,
                    once: !1
                });
                return this
            }, a.on = r("addListener"), a.addOnceListener = function(e, t) {
                return this.addListener(e, {
                    listener: t,
                    once: !0
                })
            }, a.once = r("addOnceListener"), a.defineEvent = function(e) {
                return this.getListeners(e), this
            }, a.defineEvents = function(e) {
                for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
                return this
            }, a.removeListener = function(e, t) {
                var i, o, r = this.getListenersAsObject(e);
                for (o in r) r.hasOwnProperty(o) && -1 !== (i = n(r[o], t)) && r[o].splice(i, 1);
                return this
            }, a.off = r("removeListener"), a.addListeners = function(e, t) {
                return this.manipulateListeners(!1, e, t)
            }, a.removeListeners = function(e, t) {
                return this.manipulateListeners(!0, e, t)
            }, a.manipulateListeners = function(e, t, n) {
                var i, o, r = e ? this.removeListener : this.addListener,
                    a = e ? this.removeListeners : this.addListeners;
                if ("object" != typeof t || t instanceof RegExp) for (i = n.length; i--;) r.call(this, t, n[i]);
                else for (i in t) t.hasOwnProperty(i) && (o = t[i]) && ("function" == typeof o ? r.call(this, i, o) : a.call(this, i, o));
                return this
            }, a.removeEvent = function(e) {
                var t, n = typeof e,
                    i = this._getEvents();
                if ("string" === n) delete i[e];
                else if ("object" === n) for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
                else delete this._events;
                return this
            }, a.removeAllListeners = r("removeEvent"), a.emitEvent = function(e, t) {
                var n, i, o, r = this.getListenersAsObject(e);
                for (o in r) if (r.hasOwnProperty(o)) for (i = r[o].length; i--;) n = r[o][i], n.once === !0 && this.removeListener(e, n.listener), n.listener.apply(this, t || []) === this._getOnceReturnValue() && this.removeListener(e, n.listener);
                return this
            }, a.trigger = r("emitEvent"), a.emit = function(e) {
                var t = Array.prototype.slice.call(arguments, 1);
                return this.emitEvent(e, t)
            }, a.setOnceReturnValue = function(e) {
                return this._onceReturnValue = e, this
            }, a._getOnceReturnValue = function() {
                return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
            }, a._getEvents = function() {
                return this._events || (this._events = {})
            }, e.noConflict = function() {
                return s.EventEmitter = c, e
            }, i = [], o = function() {
                return e
            }.apply(t, i)
        }).call(this), function(i) {
            function o(e) {
                var t = i.event;
                return t.target = t.target || t.srcElement || e, t
            }
            var s = document.documentElement,
                c = function() {};
            s.addEventListener ? c = function(e, t, n) {
                e.addEventListener(t, n, !1)
            } : s.attachEvent && (c = function(e, t, n) {
                e[t + n] = n.handleEvent ?
                    function() {
                        var t = o(e);
                        n.handleEvent.call(n, t)
                    } : function() {
                        var t = o(e);
                        n.call(e, t)
                    }, e.attachEvent("on" + t, e[t + n])
            });
            var l = function() {};
            s.removeEventListener ? l = function(e, t, n) {
                e.removeEventListener(t, n, !1)
            } : s.detachEvent && (l = function(e, t, n) {
                e.detachEvent("on" + t, e[t + n]);
                try {
                    delete e[t + n]
                } catch (i) {
                    e[t + n] = void 0
                }
            });
            var u = {
                bind: c,
                unbind: l
            };
            r = u, a = "function" == typeof r ? r.call(t, n, t, e) : r
        }(window || this), function(n, r) {
            "use strict";
            i = [o, a], (s = function(e, t) {
                return r(n, e, t)
            }.apply(t, i)) !== undefined && (e.exports = s)
        }(window, function(e, t, n) {
            function i(e, t) {
                for (var n in t) e[n] = t[n];
                return e
            }
            function o(e) {
                return "[object Array]" == d.call(e)
            }
            function r(e) {
                var t = [];
                if (o(e)) t = e;
                else if ("number" == typeof e.length) for (var n = 0; n < e.length; n++) t.push(e[n]);
                else t.push(e);
                return t
            }
            function a(e, t, n) {
                if (!(this instanceof a)) return new a(e, t, n);
                "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = r(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), l && (this.jqDeferred = new l.Deferred);
                var o = this;
                setTimeout(function() {
                    o.check()
                })
            }
            function s(e) {
                this.img = e
            }
            function c(e, t) {
                this.url = e, this.element = t, this.img = new Image
            }
            var l = e.jQuery,
                u = e.console,
                d = Object.prototype.toString;
            a.prototype = new t, a.prototype.options = {}, a.prototype.getImages = function() {
                this.images = [];
                for (var e = 0; e < this.elements.length; e++) {
                    var t = this.elements[e];
                    this.addElementImages(t)
                }
            }, a.prototype.addElementImages = function(e) {
                "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
                var t = e.nodeType;
                if (t && f[t]) {
                    for (var n = e.querySelectorAll("img"), i = 0; i < n.length; i++) {
                        var o = n[i];
                        this.addImage(o)
                    }
                    if ("string" == typeof this.options.background) {
                        var r = e.querySelectorAll(this.options.background);
                        for (i = 0; i < r.length; i++) {
                            var a = r[i];
                            this.addElementBackgroundImages(a)
                        }
                    }
                }
            };
            var f = {
                1: !0,
                9: !0,
                11: !0
            };
            a.prototype.addElementBackgroundImages = function(e) {
                for (var t = h(e), n = /url\(['"]*([^'"\)]+)['"]*\)/gi, i = n.exec(t.backgroundImage); null !== i;) {
                    var o = i && i[1];
                    o && this.addBackground(o, e), i = n.exec(t.backgroundImage)
                }
            };
            var h = e.getComputedStyle ||
                function(e) {
                    return e.currentStyle
                };
            return a.prototype.addImage = function(e) {
                var t = new s(e);
                this.images.push(t)
            }, a.prototype.addBackground = function(e, t) {
                var n = new c(e, t);
                this.images.push(n)
            }, a.prototype.check = function() {
                function e(e, n, i) {
                    setTimeout(function() {
                        t.progress(e, n, i)
                    })
                }
                var t = this;
                if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length) return void this.complete();
                for (var n = 0; n < this.images.length; n++) {
                    var i = this.images[n];
                    i.once("progress", e), i.check()
                }
            }, a.prototype.progress = function(e, t, n) {
                this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emit("progress", this, e, t), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && u && u.log("progress: " + n, e, t)
            }, a.prototype.complete = function() {
                var e = this.hasAnyBroken ? "fail" : "done";
                if (this.isComplete = !0, this.emit(e, this), this.emit("always", this), this.jqDeferred) {
                    var t = this.hasAnyBroken ? "reject" : "resolve";
                    this.jqDeferred[t](this)
                }
            }, s.prototype = new t, s.prototype.check = function() {
                return this.getIsImageComplete() ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, n.bind(this.proxyImage, "load", this), n.bind(this.proxyImage, "error", this), n.bind(this.img, "load", this), n.bind(this.img, "error", this), void(this.proxyImage.src = this.img.src))
            }, s.prototype.getIsImageComplete = function() {
                return this.img.complete && void 0 !== this.img.naturalWidth
            }, s.prototype.confirm = function(e, t) {
                this.isLoaded = e, this.emit("progress", this, this.img, t)
            }, s.prototype.handleEvent = function(e) {
                var t = "on" + e.type;
                this[t] && this[t](e)
            }, s.prototype.onload = function() {
                this.confirm(!0, "onload"), this.unbindEvents()
            }, s.prototype.onerror = function() {
                this.confirm(!1, "onerror"), this.unbindEvents()
            }, s.prototype.unbindEvents = function() {
                n.unbind(this.proxyImage, "load", this), n.unbind(this.proxyImage, "error", this), n.unbind(this.img, "load", this), n.unbind(this.img, "error", this)
            }, c.prototype = new s, c.prototype.check = function() {
                n.bind(this.img, "load", this), n.bind(this.img, "error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
            }, c.prototype.unbindEvents = function() {
                n.unbind(this.img, "load", this), n.unbind(this.img, "error", this)
            }, c.prototype.confirm = function(e, t) {
                this.isLoaded = e, this.emit("progress", this, this.element, t)
            }, a.makeJQueryPlugin = function(t) {
                (t = t || e.jQuery) && (l = t, l.fn.imagesLoaded = function(e, t) {
                    return new a(this, e, t).jqDeferred.promise(l(this))
                })
            }, a.makeJQueryPlugin(), a
        })
    }, , , , , function(e, t, n) {
        var i = i || {};
        e.exports = i, n(6), window.animateGrid = function() {
            function e() {
                if (t.elementsVisible != t.$el.length) {
                    t.viewTop = window.pageYOffset, t.windowHeight = $(window).height(), t.viewBottom = t.viewTop + t.windowHeight;
                    var e = 0;
                    t.$el.each(function(n, i) {
                        var o = ($(this), $(i).parent().offset().top),
                            r = t.viewBottom - o;
                        if (!this.initalized && r > 1 && t.elementStatus[n] !== !0) {
                            var a = "animate-start";
                            e++ > 0 && (a += " animate-delay-" + (e - 1)), $(i).addClass(a), t.elementStatus[n] = !0, t.elementsVisible++
                        }
                    })
                }
            }
            var t = {};
            t.$el = $(".animate-item"), t.elementStatus = [], t.elementsVisible = 0, $(window).scroll(function() {
                e()
            }), e()

        }, function(e) {
            e(function(e) {
                window.animateGrid(), n(7).init(), n(28).init(),  n(8);
            })
        }(jQuery), function(e, t, i) {

        }(jQuery, window)
    }]);

/**add by singkiang**/

$('#language').hover(function() {
    $(this).children().addClass('show');
}, function() {
    $(this).children().removeClass('show');
});


function Usearch ()
{
    if (formsearch.q.value.length < 2)
    {
        alert("关键词不能少于2个字符！");
        formsearch.q.focus();
        return false;
    }
    document.formsearch.submit();

}

$(window).scroll(function(){
    if($(window).scrollTop()>0){
        $('#gototop').show();
    }else{
        $('#gototop').hide();
    }
})