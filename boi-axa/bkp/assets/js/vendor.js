function autoPlay() {
    var currentDate = $(settings.datesDiv).find("a." + settings.datesSelectedClass);
    "forward" == settings.autoPlayDirection ? currentDate.parent().is("li:last-child") ? $(settings.datesDiv + " li:first-child").find("a").trigger("click") : currentDate.parent().next().find("a").trigger("click") : "backward" == settings.autoPlayDirection && (currentDate.parent().is("li:first-child") ? $(settings.datesDiv + " li:last-child").find("a").trigger("click") : currentDate.parent().prev().find("a").trigger("click"));
}

window.Modernizr = function(a, b, c) {
    function D(a) {
        j.cssText = a;
    }
    function F(a, b) {
        return typeof a === b;
    }
    function G(a, b) {
        return !!~("" + a).indexOf(b);
    }
    function H(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!G(e, "-") && j[e] !== c) return "pfx" != b || e;
        }
        return !1;
    }
    function I(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c) return !1 === d ? a[e] : F(f, "function") ? f.bind(d || b) : f;
        }
        return !1;
    }
    function J(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1), e = (a + " " + p.join(d + " ") + d).split(" ");
        return F(b, "string") || F(b, "undefined") ? H(e, b) : I(e = (a + " " + q.join(d + " ") + d).split(" "), b, c);
    }
    var x, C, e = {}, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style, k = b.createElement("input"), l = ":)", m = {}.toString, n = " -webkit- -moz- -o- -ms- ".split(" "), o = "Webkit Moz O ms", p = o.split(" "), q = o.toLowerCase().split(" "), r_svg = "http://www.w3.org/2000/svg", s = {}, t = {}, u = {}, v = [], w = v.slice, y = function(a, c, d, e) {
        var f, i, j, k, l = b.createElement("div"), m = b.body, n = m || b.createElement("body");
        if (parseInt(d, 10)) for (;d--; ) (j = b.createElement("div")).id = e ? e[d] : h + (d + 1), 
        l.appendChild(j);
        return f = [ "&#173;", '<style id="s', h, '">', a, "</style>" ].join(""), l.id = h, 
        (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", 
        k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), 
        m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), 
        !!i;
    }, A = function() {
        var a = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
        return function(d, e) {
            e = e || b.createElement(a[d] || "div");
            var f = (d = "on" + d) in e;
            return f || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(d, ""), 
            f = F(e[d], "function"), F(e[d], "undefined") || (e[d] = c), e.removeAttribute(d))), 
            e = null, f;
        };
    }(), B = {}.hasOwnProperty;
    for (var L in C = F(B, "undefined") || F(B.call, "undefined") ? function(a, b) {
        return b in a && F(a.constructor.prototype[b], "undefined");
    } : function(a, b) {
        return B.call(a, b);
    }, Function.prototype.bind || (Function.prototype.bind = function(b) {
        var c = this;
        if ("function" != typeof c) throw new TypeError();
        var d = w.call(arguments, 1), e = function() {
            if (this instanceof e) {
                var a = function() {};
                a.prototype = c.prototype;
                var f = new a(), g = c.apply(f, d.concat(w.call(arguments)));
                return Object(g) === g ? g : f;
            }
            return c.apply(b, d.concat(w.call(arguments)));
        };
        return e;
    }), s.flexbox = function() {
        return J("flexWrap");
    }, s.canvas = function() {
        var a = b.createElement("canvas");
        return !!a.getContext && !!a.getContext("2d");
    }, s.canvastext = function() {
        return !!e.canvas && !!F(b.createElement("canvas").getContext("2d").fillText, "function");
    }, s.webgl = function() {
        return !!a.WebGLRenderingContext;
    }, s.touch = function() {
        var c;
        return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : y([ "@media (", n.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}" ].join(""), function(a) {
            c = 9 === a.offsetTop;
        }), c;
    }, s.geolocation = function() {
        return "geolocation" in navigator;
    }, s.postmessage = function() {
        return !!a.postMessage;
    }, s.websqldatabase = function() {
        return !!a.openDatabase;
    }, s.indexedDB = function() {
        return !!J("indexedDB", a);
    }, s.hashchange = function() {
        return A("hashchange", a) && (b.documentMode === c || 7 < b.documentMode);
    }, s.history = function() {
        return !!a.history && !!history.pushState;
    }, s.draganddrop = function() {
        var a = b.createElement("div");
        return "draggable" in a || "ondragstart" in a && "ondrop" in a;
    }, s.websockets = function() {
        return "WebSocket" in a || "MozWebSocket" in a;
    }, s.rgba = function() {
        return D("background-color:rgba(150,255,150,.5)"), G(j.backgroundColor, "rgba");
    }, s.hsla = function() {
        return D("background-color:hsla(120,40%,100%,.5)"), G(j.backgroundColor, "rgba") || G(j.backgroundColor, "hsla");
    }, s.multiplebgs = function() {
        return D("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(j.background);
    }, s.backgroundsize = function() {
        return J("backgroundSize");
    }, s.borderimage = function() {
        return J("borderImage");
    }, s.borderradius = function() {
        return J("borderRadius");
    }, s.boxshadow = function() {
        return J("boxShadow");
    }, s.textshadow = function() {
        return "" === b.createElement("div").style.textShadow;
    }, s.opacity = function() {
        return a = "opacity:.55", D(n.join(a + ";") + (b || "")), /^0.55$/.test(j.opacity);
        var a, b;
    }, s.cssanimations = function() {
        return J("animationName");
    }, s.csscolumns = function() {
        return J("columnCount");
    }, s.cssgradients = function() {
        var a = "background-image:";
        return D((a + "-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));" + a) + n.join("linear-gradient(left top,#9f9, white);" + a)).slice(0, -a.length)), 
        G(j.backgroundImage, "gradient");
    }, s.cssreflections = function() {
        return J("boxReflect");
    }, s.csstransforms = function() {
        return !!J("transform");
    }, s.csstransforms3d = function() {
        var a = !!J("perspective");
        return a && "webkitPerspective" in g.style && y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) {
            a = 9 === b.offsetLeft && 3 === b.offsetHeight;
        }), a;
    }, s.csstransitions = function() {
        return J("transition");
    }, s.fontface = function() {
        var a;
        return y('@font-face {font-family:"font";src:url("https://")}', function(c, d) {
            var e = b.getElementById("smodernizr"), f = e.sheet || e.styleSheet, g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";
            a = /src/i.test(g) && 0 === g.indexOf(d.split(" ")[0]);
        }), a;
    }, s.generatedcontent = function() {
        var a;
        return y([ "#", h, "{font:0/0 a}#", h, ':after{content:"', l, '";visibility:hidden;font:3px/1 a}' ].join(""), function(b) {
            a = 3 <= b.offsetHeight;
        }), a;
    }, s.video = function() {
        var a = b.createElement("video"), c = !1;
        try {
            (c = !!a.canPlayType) && ((c = new Boolean(c)).ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), 
            c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""));
        } catch (d) {}
        return c;
    }, s.audio = function() {
        var a = b.createElement("audio"), c = !1;
        try {
            (c = !!a.canPlayType) && ((c = new Boolean(c)).ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), 
            c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), 
            c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, ""));
        } catch (d) {}
        return c;
    }, s.localstorage = function() {
        try {
            return localStorage.setItem(h, h), localStorage.removeItem(h), !0;
        } catch (a) {
            return !1;
        }
    }, s.sessionstorage = function() {
        try {
            return sessionStorage.setItem(h, h), sessionStorage.removeItem(h), !0;
        } catch (a) {
            return !1;
        }
    }, s.webworkers = function() {
        return !!a.Worker;
    }, s.applicationcache = function() {
        return !!a.applicationCache;
    }, s.svg = function() {
        return !!b.createElementNS && !!b.createElementNS(r_svg, "svg").createSVGRect;
    }, s.inlinesvg = function() {
        var a = b.createElement("div");
        return a.innerHTML = "<svg/>", (a.firstChild && a.firstChild.namespaceURI) == r_svg;
    }, s.smil = function() {
        return !!b.createElementNS && /SVGAnimate/.test(m.call(b.createElementNS(r_svg, "animate")));
    }, s.svgclippaths = function() {
        return !!b.createElementNS && /SVGClipPath/.test(m.call(b.createElementNS(r_svg, "clipPath")));
    }, s) C(s, L) && (x = L.toLowerCase(), e[x] = s[L](), v.push((e[x] ? "" : "no-") + x));
    return e.input || (e.input = function(c) {
        for (var d = 0, e = c.length; d < e; d++) u[c[d]] = c[d] in k;
        return u.list && (u.list = !!b.createElement("datalist") && !!a.HTMLDataListElement), 
        u;
    }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), 
    e.inputtypes = function(a) {
        for (var e, f, h, d = 0, i = a.length; d < i; d++) k.setAttribute("type", f = a[d]), 
        (e = "text" !== k.type) && (k.value = l, k.style.cssText = "position:absolute;visibility:hidden;", 
        /^range$/.test(f) && k.style.WebkitAppearance !== c ? (g.appendChild(k), e = (h = b.defaultView).getComputedStyle && "textfield" !== h.getComputedStyle(k, null).WebkitAppearance && 0 !== k.offsetHeight, 
        g.removeChild(k)) : /^(search|tel)$/.test(f) || (e = /^(url|email)$/.test(f) ? k.checkValidity && !1 === k.checkValidity() : k.value != l)), 
        t[a[d]] = !!e;
        return t;
    }("search tel url email datetime date month week time datetime-local number range color".split(" "))), 
    e.addTest = function(a, b) {
        if ("object" == typeof a) for (var d in a) C(a, d) && e.addTest(d, a[d]); else {
            if (a = a.toLowerCase(), e[a] !== c) return e;
            b = "function" == typeof b ? b() : b, g.className += " " + (b ? "" : "no-") + a, 
            e[a] = b;
        }
        return e;
    }, D(""), i = k = null, function(a, b) {
        function l() {
            var a = r.elements;
            return "string" == typeof a ? a.split(" ") : a;
        }
        function m(a) {
            var b = i[a[g]];
            return b || (b = {}, h++, a[g] = h, i[h] = b), b;
        }
        function n(a, c, f) {
            return c || (c = b), j ? c.createElement(a) : (f || (f = m(c)), (g = f.cache[a] ? f.cache[a].cloneNode() : e.test(a) ? (f.cache[a] = f.createElem(a)).cloneNode() : f.createElem(a)).canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g);
            var g;
        }
        function q(a) {
            a || (a = b);
            var c = m(a);
            return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!function(a, b) {
                var c = a.createElement("p"), d = a.getElementsByTagName("head")[0] || a.documentElement;
                return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild);
            }(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), 
            j || function(a, b) {
                b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, 
                b.frag = b.createFrag()), a.createElement = function(c) {
                    return r.shivMethods ? n(c, a, b) : b.createElem(c);
                }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function(a) {
                    return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")';
                }) + ");return n}")(r, b.frag);
            }(a, c), a;
        }
        var f, j, c = a.html5 || {}, d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, g = "_html5shiv", h = 0, i = {};
        !function() {
            try {
                var a = b.createElement("a");
                a.innerHTML = "<xyz></xyz>", f = "hidden" in a, j = 1 == a.childNodes.length || function() {
                    b.createElement("a");
                    var a = b.createDocumentFragment();
                    return void 0 === a.cloneNode || void 0 === a.createDocumentFragment || void 0 === a.createElement;
                }();
            } catch (c) {
                j = f = !0;
            }
        }();
        var r = {
            elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
            shivCSS: !1 !== c.shivCSS,
            supportsUnknownElements: j,
            shivMethods: !1 !== c.shivMethods,
            type: "default",
            shivDocument: q,
            createElement: n,
            createDocumentFragment: function(a, c) {
                if (a || (a = b), j) return a.createDocumentFragment();
                for (var d = (c = c || m(a)).frag.cloneNode(), e = 0, f = l(), g = f.length; e < g; e++) d.createElement(f[e]);
                return d;
            }
        };
        a.html5 = r, q(b);
    }(this, b), e._version = "2.6.2", e._prefixes = n, e._domPrefixes = q, e._cssomPrefixes = p, 
    e.mq = function(b) {
        var d, c = a.matchMedia || a.msMatchMedia;
        return c ? c(b).matches : (y("@media " + b + " { #" + h + " { position: absolute; } }", function(b) {
            d = "absolute" == (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle).position;
        }), d);
    }, e.hasEvent = A, e.testProp = function(a) {
        return H([ a ]);
    }, e.testAllProps = J, e.testStyles = y, e.prefixed = function(a, b, c) {
        return b ? J(a, b, c) : J(a, "pfx");
    }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + " js " + v.join(" "), 
    e;
}(this, this.document), function(a, b, c) {
    function d(a) {
        return "[object Function]" == o.call(a);
    }
    function e(a) {
        return "string" == typeof a;
    }
    function f() {}
    function g(a) {
        return !a || "loaded" == a || "complete" == a || "uninitialized" == a;
    }
    function h() {
        var a = p.shift();
        q = 1, a ? a.t ? m(function() {
            ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1);
        }, 0) : (a(), h()) : q = 0;
    }
    function i(a, c, d, e, f, i, j) {
        function k(b) {
            if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, 
            b)) for (var d in "img" != a && m(function() {
                t.removeChild(l);
            }, 50), y[c]) y[c].hasOwnProperty(d) && y[c][d].onload();
        }
        j = j || B.errorTimeout;
        var l = b.createElement(a), o = 0, r = 0, u = {
            t: d,
            s: c,
            e: f,
            a: i,
            x: j
        };
        1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), 
        l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
            k.call(this, r);
        }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), 
        m(k, j)) : y[c].push(l));
    }
    function j(a, b, c, d, f) {
        return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 
        1 == p.length && h()), this;
    }
    function k() {
        var a = B;
        return a.loader = {
            load: j,
            i: 0
        }, a;
    }
    var A, B, l = b.documentElement, m = a.setTimeout, n = b.getElementsByTagName("script")[0], o = {}.toString, p = [], q = 0, r = "MozAppearance" in l.style, s = r && !!b.createRange().compareNode, t = s ? l : n.parentNode, u = (l = a.opera && "[object Opera]" == o.call(a.opera), 
    l = !!b.attachEvent && !l, r ? "object" : l ? "script" : "img"), v = l ? "script" : u, w = Array.isArray || function(a) {
        return "[object Array]" == o.call(a);
    }, x = [], y = {}, z = {
        timeout: function(a, b) {
            return b.length && (a.timeout = b[0]), a;
        }
    };
    (B = function(a) {
        function g(a, e, f, g, h) {
            var i = function(a) {
                a = a.split("!");
                var e, f, g, b = x.length, c = a.pop(), d = a.length;
                for (c = {
                    url: c,
                    origUrl: c,
                    prefixes: a
                }, f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
                for (f = 0; f < b; f++) c = x[f](c);
                return c;
            }(a), j = i.autoCallback;
            i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), 
            i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, 
            f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : void 0, i.noexec, i.attrs, i.timeout), 
            (d(e) || d(j)) && f.load(function() {
                k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2;
            })));
        }
        function h(a, b) {
            function c(a, c) {
                if (a) {
                    if (e(a)) c || (j = function() {
                        var a = [].slice.call(arguments);
                        k.apply(this, a), l();
                    }), g(a, j, b, 0, h); else if (Object(a) === a) for (n in m = function() {
                        var c, b = 0;
                        for (c in a) a.hasOwnProperty(c) && b++;
                        return b;
                    }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                        var a = [].slice.call(arguments);
                        k.apply(this, a), l();
                    } : j[n] = function(a) {
                        return function() {
                            var b = [].slice.call(arguments);
                            a && a.apply(this, b), l();
                        };
                    }(k[n])), g(a[n], j, b, n, h));
                } else !c && l();
            }
            var m, n, h = !!a.test, i = a.load || a.both, j = a.callback || f, k = j, l = a.complete || f;
            c(h ? a.yep : a.nope, !!i), i && c(i);
        }
        var i, j, l = this.yepnope.loader;
        if (e(a)) g(a, 0, l, 0); else if (w(a)) for (i = 0; i < a.length; i++) e(j = a[i]) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l); else Object(a) === a && h(a, l);
    }).addPrefix = function(a, b) {
        z[a] = b;
    }, B.addFilter = function(a) {
        x.push(a);
    }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", 
    b.addEventListener("DOMContentLoaded", A = function() {
        b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete";
    }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
        var l, o, k = b.createElement("script");
        e = e || B.errorTimeout;
        for (o in k.src = a, d) k.setAttribute(o, d[o]);
        c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
            !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null);
        }, m(function() {
            l || c(l = 1);
        }, e), i ? k.onload() : n.parentNode.insertBefore(k, n);
    }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
        var j;
        e = b.createElement("link"), c = i ? h : c || f;
        for (j in e.href = a, e.rel = "stylesheet", e.type = "text/css", d) e.setAttribute(j, d[j]);
        g || (n.parentNode.insertBefore(e, n), m(c, 0));
    };
}(this, document), Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0));
}, function(a, b) {
    var c = a.Modernizr, d = {
        addAllFeaturesAsClass: !1,
        detectDevice: !0,
        detectDeviceModel: !0,
        detectScreen: !0,
        detectOS: !0,
        detectBrowser: !0,
        detectPlugins: !0
    };
    function e(e) {
        var m, n, o, p, q, r, s, t, f = function(a, b) {
            var c, d, e;
            if (2 < arguments.length) for (c = 1, d = arguments.length; c < d; c += 1) f(a, arguments[c]); else for (e in b) b.hasOwnProperty(e) && (a[e] = b[e]);
            return a;
        }, g = this, h = c.Detectizr.device, i = document.documentElement, j = [ "tv", "tablet", "mobile", "desktop" ], k = /[\t\r\n]/g, l = {
            acrobat: {
                substrs: [ "Adobe", "Acrobat" ],
                progIds: [ "AcroPDF.PDF", "PDF.PDFCtrl.5" ]
            },
            flash: {
                substrs: [ "Shockwave", "Flash" ],
                progIds: [ "ShockwaveFlash.ShockwaveFlash.1" ]
            },
            mediaplayer: {
                substrs: [ "Windows Media" ],
                progIds: [ "wmplayer.ocx" ]
            },
            silverlight: {
                substrs: [ "Silverlight" ],
                progIds: [ "AgControl.AgControl" ]
            }
        };
        if (d = f({}, d, e || {}), g.is = function(a) {
            return -1 < h.userAgent.indexOf(a);
        }, g.test = function(a) {
            return a.test(h.userAgent);
        }, g.exec = function(a) {
            return a.exec(h.userAgent);
        }, g.trim = function(a) {
            return a.replace(/^\s+|\s+$/g, "");
        }, g.toCamel = function(a) {
            return null == a ? "" : String(a).replace(/((\s|\-|\.)+[a-z0-9])/g, function(a) {
                return a.toUpperCase().replace(/(\s|\-|\.)/g, "");
            });
        }, g.removeClass = function(a, b) {
            var c = b || "", d = 1 === a.nodeType && (a.className ? (" " + a.className + " ").replace(k, " ") : "");
            if (d) {
                for (;0 <= d.indexOf(" " + c + " "); ) d = d.replace(" " + c + " ", " ");
                a.className = b ? g.trim(d) : "";
            }
        }, g.addVersionTest = function(a, b, c) {
            null != b && "" !== b && ("" !== (b = g.toCamel(b)) && (void 0 !== c && 0 < c && (b = b.substr(0, c)), 
            g.addConditionalTest(a + b, !0)));
        }, g.checkOrientation = function() {
            a.clearTimeout(s), s = a.setTimeout(function() {
                t = h.orientation, h.orientation = a.innerHeight > a.innerWidth ? "portrait" : "landscape", 
                g.addConditionalTest(h.orientation, !0), t !== h.orientation && g.addConditionalTest(t, !1);
            }, 10);
        }, g.addConditionalTest = function(a, b) {
            null != a && "" !== a && (d.addAllFeaturesAsClass ? c.addTest(a, b) : (b = "function" == typeof b ? b() : b) ? c.addTest(a, !0) : (delete c[a], 
            g.removeClass(i, a)));
        }, d.detectDevice) {
            for (g.test(/GoogleTV|SmartTV|Internet.TV|NetCast|NETTV|AppleTV|boxee|Kylo|Roku|DLNADOC|CE\-HTML/i) ? (h.type = j[0], 
            h.model = "smartTv") : g.test(/Xbox|PLAYSTATION.3|Wii/i) ? (h.type = j[0], h.model = "gameConsole") : g.test(/iP(a|ro)d/i) ? (h.type = j[1], 
            h.model = "ipad") : g.test(/tablet/i) && !g.test(/RX-34/i) || g.test(/FOLIO/i) ? (h.type = j[1], 
            h.model = String(g.exec(/playbook/) || "")) : g.test(/Linux/i) && g.test(/Android/i) && !g.test(/Fennec|mobi|HTC.Magic|HTCX06HT|Nexus.One|SC-02B|fone.945/i) ? (h.type = j[1], 
            h.model = "android") : g.test(/Kindle/i) || g.test(/Mac.OS/i) && g.test(/Silk/i) ? (h.type = j[1], 
            h.model = "kindle") : g.test(/GT-P10|SC-01C|SHW-M180S|SGH-T849|SCH-I800|SHW-M180L|SPH-P100|SGH-I987|zt180|HTC(.Flyer|\_Flyer)|Sprint.ATP51|ViewPad7|pandigital(sprnova|nova)|Ideos.S7|Dell.Streak.7|Advent.Vega|A101IT|A70BHT|MID7015|Next2|nook/i) || g.test(/MB511/i) && g.test(/RUTEM/i) ? (h.type = j[1], 
            h.model = "android") : g.test(/BB10/i) ? (h.type = j[1], h.model = "blackberry") : (h.model = g.exec(/iphone|ipod|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec|j2me/i), 
            null !== h.model ? (h.type = j[2], h.model = String(h.model)) : (h.model = "", g.test(/BOLT|Fennec|Iris|Maemo|Minimo|Mobi|mowser|NetFront|Novarra|Prism|RX-34|Skyfire|Tear|XV6875|XV6975|Google.Wireless.Transcoder/i) ? h.type = j[2] : g.test(/Opera/i) && g.test(/Windows.NT.5/i) && g.test(/HTC|Xda|Mini|Vario|SAMSUNG\-GT\-i8000|SAMSUNG\-SGH\-i9/i) ? h.type = j[2] : g.test(/Windows.(NT|XP|ME|9)/i) && !g.test(/Phone/i) || g.test(/Win(9|.9|NT)/i) || g.test(/\(Windows 8\)/i) ? h.type = j[3] : g.test(/Macintosh|PowerPC/i) && !g.test(/Silk/i) ? h.type = j[3] : g.test(/Linux/i) && g.test(/X11/i) ? h.type = j[3] : g.test(/Solaris|SunOS|BSD/i) ? h.type = j[3] : g.test(/Bot|Crawler|Spider|Yahoo|ia_archiver|Covario-IDS|findlinks|DataparkSearch|larbin|Mediapartners-Google|NG-Search|Snappy|Teoma|Jeeves|TinEye/i) && !g.test(/Mobile/i) ? (h.type = j[3], 
            h.model = "crawler") : h.type = j[2])), m = 0, n = j.length; m < n; m += 1) g.addConditionalTest(j[m], h.type === j[m]);
            d.detectDeviceModel && g.addConditionalTest(g.toCamel(h.model), !0), (h.type === j[1] || h.type === j[2]) && (a.onresize = function(a) {
                g.checkOrientation(a);
            }, g.checkOrientation());
        }
        if (d.detectScreen && c.mq && (g.addConditionalTest("smallScreen", c.mq("only screen and (max-width: 480px)")), 
        g.addConditionalTest("verySmallScreen", c.mq("only screen and (max-width: 320px)")), 
        g.addConditionalTest("veryVerySmallScreen", c.mq("only screen and (max-width: 240px)"))), 
        d.detectOS && ("" !== h.model && ("ipad" === h.model || "iphone" === h.model || "ipod" === h.model ? (h.osVersion = g.test(/os\s(\d+)_/) ? RegExp.$1 : "", 
        h.os = "ios", h.osVersionFull = g.test(/os ([^\s]+)/) ? RegExp.$1.replace(/_/g, ".") : "") : "android" === h.model ? (h.osVersion = (g.test(/os\s(\d+)_/) ? RegExp.$1 : "").substr(0, 2), 
        h.osVersion || (h.osVersion = g.test(/android\s(\d+)\./) ? RegExp.$1 : "", h.osVersionFull = g.test(/android ([^\s]+)/) ? RegExp.$1.replace(/_/g, ".") : ""), 
        h.os = "android") : "blackberry" === h.model ? (h.osVersion = g.test(/version\/([^\s]+)/) ? RegExp.$1 : "", 
        h.os = "blackberry") : "playbook" === h.model && (h.osVersion = g.test(/os ([^\s]+)/) ? RegExp.$1.replace(";", "") : "", 
        h.os = "blackberry")), "" === h.os && (g.is("win") || g.is("16bit") ? (h.os = "windows", 
        g.is("windows nt 6.3") ? (h.osVersion = "8", h.osVersionFull = "8.1") : g.is("windows nt 6.2") || g.test(/\(windows 8\)/) ? h.osVersion = "8" : g.is("windows nt 6.1") ? h.osVersion = "7" : g.is("windows nt 6.0") ? h.osVersion = "vista" : g.is("windows nt 5.2") || g.is("windows nt 5.1") || g.is("windows xp") ? h.osVersion = "xp" : g.is("windows nt 5.0") || g.is("windows 2000") ? h.osVersion = "2k" : g.is("winnt") || g.is("windows nt") ? h.osVersion = "nt" : g.is("win98") || g.is("windows 98") ? h.osVersion = "98" : (g.is("win95") || g.is("windows 95")) && (h.osVersion = "95")) : g.is("mac") || g.is("darwin") ? (h.os = "mac", 
        g.is("68k") || g.is("68000") ? h.osVersion = "68k" : g.is("ppc") || g.is("powerpc") ? h.osVersion = "ppc" : g.is("os x") && (h.osVersion = "os x")) : g.is("webtv") ? h.os = "webtv" : g.is("x11") || g.is("inux") ? h.os = "linux" : g.is("sunos") ? h.os = "sun" : g.is("irix") ? h.os = "irix" : g.is("freebsd") ? h.os = "freebsd" : g.is("bsd") && (h.os = "bsd")), 
        "" !== h.os && (!h.osVersionFull && h.osVersion && (h.osVersionFull = h.osVersion), 
        g.addConditionalTest(h.os, !0), g.addVersionTest(h.os, h.osVersionFull.replace(/\./g, "_")), 
        g.addVersionTest(h.os, h.osVersion))), d.detectBrowser && (g.test(/opera|webtv/i) || !g.test(/msie\s([0-9]{1,})/) && !g.is("trident") ? g.is("firefox") ? (h.browserEngine = "gecko", 
        h.browser = "firefox", h.browserVersion = (g.test(/firefox\/(\d+(\.?\d+)*)/) ? RegExp.$1 : "").substr(0, 2)) : g.is("gecko/") ? h.browserEngine = "gecko" : g.is("opera") ? (h.browser = "opera", 
        h.browserEngine = "presto", h.browserVersion = g.test(/version\/(\d+)/) ? RegExp.$1 : g.test(/opera(\s|\/)(\d+)/) ? RegExp.$2 : "") : g.is("konqueror") ? h.browser = "konqueror" : g.is("chrome") ? (h.browserEngine = "webkit", 
        h.browser = "chrome", h.browserVersion = g.test(/chrome\/(\d+)/) ? RegExp.$1 : "") : g.is("iron") ? (h.browserEngine = "webkit", 
        h.browser = "iron") : g.is("crios") ? (h.browser = "chrome", h.browserEngine = "webkit", 
        h.browserVersion = g.test(/crios\/(\d+)/) ? RegExp.$1 : "") : g.is("applewebkit/") ? (h.browser = "safari", 
        h.browserEngine = "webkit", h.browserVersion = g.test(/version\/(\d+)/) ? RegExp.$1 : "") : g.is("mozilla/") && (h.browserEngine = "gecko") : (h.browserEngine = "trident", 
        h.browser = "ie", h.browserVersion = !a.addEventListener && document.documentMode && 7 === document.documentMode ? "8compat" : g.test(/trident.*rv[ :](\d+)\./) ? RegExp.$1 : g.test(/trident\/4\.0/) ? "8" : RegExp.$1), 
        "" !== h.browser && (g.addConditionalTest(h.browser, !0), "" !== h.browserVersion && g.addVersionTest(h.browser, h.browserVersion)), 
        g.addConditionalTest(h.browserEngine, !0)), d.detectPlugins) {
            if (g.detectPlugin = function(a) {
                for (m = 0, n = b.plugins.length; m < n; m++) {
                    var c = b.plugins[m], d = c.name + c.description, e = 0;
                    for (o = 0, p = a.length; o < p; o += 1) -1 !== d.indexOf(a[o]) && (e += 1);
                    if (e === a.length) return !0;
                }
                return !1;
            }, g.detectObject = function(a, b) {
                for (m = 0, n = a.length; m < n; m++) try {
                    var c = new ActiveXObject(a[m]);
                    if (c) return !b || !b[m] || b[m].call(c);
                } catch (d) {}
                return !1;
            }, a.ActiveXObject) for (q in l) l.hasOwnProperty(q) && (r = l[q], g.detectObject(r.progIds, r.fns) && (h.browserPlugins.push(q), 
            g.addConditionalTest(q, !0))); else if (b.plugins) for (q in l) l.hasOwnProperty(q) && (r = l[q], 
            g.detectPlugin(r.substrs) && (h.browserPlugins.push(q), g.addConditionalTest(q, !0)));
            b.javaEnabled() && (h.browserPlugins.push("java"), g.addConditionalTest("java", !0));
        }
    }
    void 0 !== c && (c.Detectizr = c.Detectizr || {}, c.Detectizr.device = {
        type: "",
        model: "",
        orientation: "",
        browser: "",
        browserEngine: "",
        browserPlugins: [],
        browserVersion: "",
        os: "",
        osVersion: "",
        osVersionFull: "",
        userAgent: (b.userAgent || b.vendor || a.opera).toLowerCase()
    }, c.Detectizr.detect = function(a) {
        return new e(a);
    });
}(this, navigator), function(a, b, c, d) {
    function e(b, c) {
        this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), 
        this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, 
        this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, 
        this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, 
        this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        }, this._states = {
            current: {},
            tags: {
                initializing: [ "busy" ],
                animating: [ "busy" ],
                dragging: [ "interacting" ]
            }
        }, a.each([ "onResize", "onThrottledResize" ], a.proxy(function(b, c) {
            this._handlers[c] = a.proxy(this[c], this);
        }, this)), a.each(e.Plugins, a.proxy(function(a, b) {
            this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this);
        }, this)), a.each(e.Workers, a.proxy(function(b, c) {
            this._pipe.push({
                filter: c.filter,
                run: a.proxy(c.run, this)
            });
        }, this)), this.setup(), this.initialize();
    }
    e.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, e.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, e.Type = {
        Event: "event",
        State: "state"
    }, e.Plugins = {}, e.Workers = [ {
        filter: [ "width", "settings" ],
        run: function() {
            this._width = this.$element.width();
        }
    }, {
        filter: [ "width", "items", "settings" ],
        run: function(a) {
            a.current = this._items && this._items[this.relative(this._current)];
        }
    }, {
        filter: [ "items", "settings" ],
        run: function() {
            this.$stage.children(".cloned").remove();
        }
    }, {
        filter: [ "width", "items", "settings" ],
        run: function(a) {
            var b = this.settings.margin || "", c = !this.settings.autoWidth, d = this.settings.rtl, e = {
                width: "auto",
                "margin-left": d ? b : "",
                "margin-right": d ? "" : b
            };
            !c && this.$stage.children().css(e), a.css = e;
        }
    }, {
        filter: [ "width", "items", "settings" ],
        run: function(a) {
            var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin, c = null, d = this._items.length, e = !this.settings.autoWidth, f = [];
            for (a.items = {
                merge: !1,
                width: b
            }; d--; ) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, 
            a.items.merge = 1 < c || a.items.merge, f[d] = e ? b * c : this._items[d].width();
            this._widths = f;
        }
    }, {
        filter: [ "items", "settings" ],
        run: function() {
            var b = [], c = this._items, d = this.settings, e = Math.max(2 * d.items, 4), f = 2 * Math.ceil(c.length / 2), g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0, h = "", i = "";
            for (g /= 2; g--; ) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, 
            b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i;
            this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage);
        }
    }, {
        filter: [ "width", "items", "settings" ],
        run: function() {
            for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b; ) d = f[c - 1] || 0, 
            e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
            this._coordinates = f;
        }
    }, {
        filter: [ "width", "items", "settings" ],
        run: function() {
            var a = this.settings.stagePadding, b = this._coordinates, c = {
                width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
                "padding-left": a || "",
                "padding-right": a || ""
            };
            this.$stage.css(c);
        }
    }, {
        filter: [ "width", "items", "settings" ],
        run: function(a) {
            var b = this._coordinates.length, c = !this.settings.autoWidth, d = this.$stage.children();
            if (c && a.items.merge) for (;b--; ) a.css.width = this._widths[this.relative(b)], 
            d.eq(b).css(a.css); else c && (a.css.width = a.items.width, d.css(a.css));
        }
    }, {
        filter: [ "items" ],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style");
        }
    }, {
        filter: [ "width", "items", "settings" ],
        run: function(a) {
            a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), 
            this.reset(a.current);
        }
    }, {
        filter: [ "position" ],
        run: function() {
            this.animate(this.coordinates(this._current));
        }
    }, {
        filter: [ "width", "position", "items", "settings" ],
        run: function() {
            var a, b, c, d, e = this.settings.rtl ? 1 : -1, f = 2 * this.settings.stagePadding, g = this.coordinates(this.current()) + f, h = g + this.width() * e, i = [];
            for (c = 0, d = this._coordinates.length; c < d; c++) a = this._coordinates[c - 1] || 0, 
            b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), 
            this.settings.center && (this.$stage.children(".center").removeClass("center"), 
            this.$stage.children().eq(this.current()).addClass("center"));
        }
    } ], e.prototype.initialize = function() {
        var b, c, e;
        (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), 
        this.settings.autoWidth && !this.is("pre-loading")) && (b = this.$element.find("img"), 
        c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, 
        e = this.$element.children(c).width(), b.length && e <= 0 && this.preloadAutoWidthImages(b));
        this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), 
        this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), 
        this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), 
        this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized");
    }, e.prototype.setup = function() {
        var b = this.viewport(), c = this.options.responsive, d = -1, e = null;
        c ? (a.each(c, function(a) {
            a <= b && d < a && (d = Number(a));
        }), "function" == typeof (e = a.extend({}, this.options, c[d])).stagePadding && (e.stagePadding = e.stagePadding()), 
        delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), 
        this.trigger("change", {
            property: {
                name: "settings",
                value: e
            }
        }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        });
    }, e.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1);
    }, e.prototype.prepare = function(b) {
        var c = this.trigger("prepare", {
            content: b
        });
        return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), 
        this.trigger("prepared", {
            content: c.data
        }), c.data;
    }, e.prototype.update = function() {
        for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
            return this[a];
        }, this._invalidated), e = {}; b < c; ) (this._invalidated.all || 0 < a.grep(this._pipe[b].filter, d).length) && this._pipe[b].run(e), 
        b++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid");
    }, e.prototype.width = function(a) {
        switch (a = a || e.Width.Default) {
          case e.Width.Inner:
          case e.Width.Outer:
            return this._width;

          default:
            return this._width - 2 * this.settings.stagePadding + this.settings.margin;
        }
    }, e.prototype.refresh = function() {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), 
        this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), 
        this.leave("refreshing"), this.trigger("refreshed");
    }, e.prototype.onThrottledResize = function() {
        b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
    }, e.prototype.onResize = function() {
        return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"), 
        this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), 
        this.refresh(), this.leave("resizing"), void this.trigger("resized")))));
    }, e.prototype.registerEventHandlers = function() {
        a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), 
        !1 !== this.settings.responsive && this.on(b, "resize", this._handlers.onThrottledResize), 
        this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), 
        this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
            return !1;
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), 
        this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)));
    }, e.prototype.onDragStart = function(b) {
        var d = null;
        3 !== b.which && (d = a.support.transform ? {
            x: (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === d.length ? 12 : 4],
            y: d[16 === d.length ? 13 : 5]
        } : (d = this.$stage.position(), {
            x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
            y: d.top
        }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), 
        this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), 
        this.speed(0), this._drag.time = new Date().getTime(), this._drag.target = a(b.target), 
        this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), 
        a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function(b) {
            var d = this.difference(this._drag.pointer, this.pointer(b));
            a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), 
            Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), 
            this.trigger("drag"));
        }, this)));
    }, e.prototype.onDragMove = function(a) {
        var b = null, c = null, d = null, e = this.difference(this._drag.pointer, this.pointer(a)), f = this.difference(this._drag.stage.start, e);
        this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), 
        c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), 
        c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), 
        d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), 
        this._drag.stage.current = f, this.animate(f.x));
    }, e.prototype.onDragEnd = function(b) {
        var d = this.difference(this._drag.pointer, this.pointer(b)), e = this._drag.stage.current, f = 0 < d.x ^ this.settings.rtl ? "left" : "right";
        a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), 
        this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), 
        this.update(), this._drag.direction = f, (3 < Math.abs(d.x) || 300 < new Date().getTime() - this._drag.time) && this._drag.target.one("click.owl.core", function() {
            return !1;
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"));
    }, e.prototype.closest = function(b, c) {
        var d = -1, f = this.width(), g = this.coordinates();
        return this.settings.freeDrag || a.each(g, a.proxy(function(a, h) {
            return "left" === c && h - 30 < b && b < h + 30 ? d = a : "right" === c && h - f - 30 < b && b < h - f + 30 ? d = a + 1 : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a), 
            -1 === d;
        }, this)), this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())), 
        d;
    }, e.prototype.animate = function(b) {
        var c = 0 < this.speed();
        this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), 
        a.support.transform3d && a.support.transition ? this.$stage.css({
            transform: "translate3d(" + b + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s"
        }) : c ? this.$stage.animate({
            left: b + "px"
        }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: b + "px"
        });
    }, e.prototype.is = function(a) {
        return this._states.current[a] && 0 < this._states.current[a];
    }, e.prototype.current = function(a) {
        if (a === d) return this._current;
        if (0 === this._items.length) return d;
        if (a = this.normalize(a), this._current !== a) {
            var b = this.trigger("change", {
                property: {
                    name: "position",
                    value: a
                }
            });
            b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), 
            this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            });
        }
        return this._current;
    }, e.prototype.invalidate = function(b) {
        return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), 
        a.map(this._invalidated, function(a, b) {
            return b;
        });
    }, e.prototype.reset = function(a) {
        (a = this.normalize(a)) !== d && (this._speed = 0, this._current = a, this.suppress([ "translate", "translated" ]), 
        this.animate(this.coordinates(a)), this.release([ "translate", "translated" ]));
    }, e.prototype.normalize = function(a, b) {
        var c = this._items.length, e = b ? 0 : this._clones.length;
        return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || c + e <= a) && (a = ((a - e / 2) % c + c) % c + e / 2), 
        a;
    }, e.prototype.relative = function(a) {
        return a -= this._clones.length / 2, this.normalize(a, !0);
    }, e.prototype.maximum = function(a) {
        var b, c, d, e = this.settings, f = this._coordinates.length;
        if (e.loop) f = this._clones.length / 2 + this._items.length - 1; else if (e.autoWidth || e.merge) {
            for (b = this._items.length, c = this._items[--b].width(), d = this.$element.width(); b-- && !(d < (c += this._items[b].width() + this.settings.margin)); ) ;
            f = b + 1;
        } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
        return a && (f -= this._clones.length / 2), Math.max(f, 0);
    }, e.prototype.minimum = function(a) {
        return a ? 0 : this._clones.length / 2;
    }, e.prototype.items = function(a) {
        return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a]);
    }, e.prototype.mergers = function(a) {
        return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a]);
    }, e.prototype.clones = function(b) {
        var c = this._clones.length / 2, e = c + this._items.length, f = function(a) {
            return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2;
        };
        return b === d ? a.map(this._clones, function(a, b) {
            return f(b);
        }) : a.map(this._clones, function(a, c) {
            return a === b ? f(c) : null;
        });
    }, e.prototype.speed = function(a) {
        return a !== d && (this._speed = a), this._speed;
    }, e.prototype.coordinates = function(b) {
        var c, e = 1, f = b - 1;
        return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
            return this.coordinates(b);
        }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], 
        c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, 
        c = Math.ceil(c));
    }, e.prototype.duration = function(a, b, c) {
        return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed);
    }, e.prototype.to = function(a, b) {
        var c = this.current(), d = null, e = a - this.relative(c), f = (0 < e) - (e < 0), g = this._items.length, h = this.minimum(), i = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g), 
        (d = (((a = c + e) - h) % g + g) % g + h) !== a && d - e <= i && 0 < d - e && (c = d - e, 
        a = d, this.reset(c))) : a = this.settings.rewind ? (a % (i += 1) + i) % i : Math.max(h, Math.min(i, a)), 
        this.speed(this.duration(c, a, b)), this.current(a), this.$element.is(":visible") && this.update();
    }, e.prototype.next = function(a) {
        a = a || !1, this.to(this.relative(this.current()) + 1, a);
    }, e.prototype.prev = function(a) {
        a = a || !1, this.to(this.relative(this.current()) - 1, a);
    }, e.prototype.onTransitionEnd = function(a) {
        return (a === d || (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) === this.$stage.get(0))) && (this.leave("animating"), 
        void this.trigger("translated"));
    }, e.prototype.viewport = function() {
        var d;
        if (this.options.responsiveBaseElement !== b) d = a(this.options.responsiveBaseElement).width(); else if (b.innerWidth) d = b.innerWidth; else {
            if (!c.documentElement || !c.documentElement.clientWidth) throw "Can not detect viewport width.";
            d = c.documentElement.clientWidth;
        }
        return d;
    }, e.prototype.replace = function(b) {
        this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), 
        this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), 
        b.filter(function() {
            return 1 === this.nodeType;
        }).each(a.proxy(function(a, b) {
            b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1);
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), 
        this.invalidate("items");
    }, e.prototype.add = function(b, c) {
        var e = this.relative(this._current);
        c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), 
        this.trigger("add", {
            content: b,
            position: c
        }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 
        0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), 
        this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), 
        this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), 
        this.trigger("added", {
            content: b,
            position: c
        });
    }, e.prototype.remove = function(a) {
        (a = this.normalize(a, !0)) !== d && (this.trigger("remove", {
            content: this._items[a],
            position: a
        }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), 
        this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: a
        }));
    }, e.prototype.preloadAutoWidthImages = function(b) {
        b.each(a.proxy(function(b, c) {
            this.enter("pre-loading"), c = a(c), a(new Image()).one("load", a.proxy(function(a) {
                c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh();
            }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"));
        }, this));
    }, e.prototype.destroy = function() {
        for (var d in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), 
        !1 !== this.settings.responsive && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize)), 
        this._plugins) this._plugins[d].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), 
        this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel");
    }, e.prototype.op = function(a, b, c) {
        var d = this.settings.rtl;
        switch (b) {
          case "<":
            return d ? c < a : a < c;

          case ">":
            return d ? a < c : c < a;

          case ">=":
            return d ? a <= c : c <= a;

          case "<=":
            return d ? c <= a : a <= c;
        }
    }, e.prototype.on = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c);
    }, e.prototype.off = function(a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c);
    }, e.prototype.trigger = function(b, c, d, f, g) {
        var h = {
            item: {
                count: this._items.length,
                index: this.current()
            }
        }, i = a.camelCase(a.grep([ "on", b, d ], function(a) {
            return a;
        }).join("-").toLowerCase()), j = a.Event([ b, "owl", d || "carousel" ].join(".").toLowerCase(), a.extend({
            relatedTarget: this
        }, h, c));
        return this._supress[b] || (a.each(this._plugins, function(a, b) {
            b.onTrigger && b.onTrigger(j);
        }), this.register({
            type: e.Type.Event,
            name: b
        }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), 
        j;
    }, e.prototype.enter = function(b) {
        a.each([ b ].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
            this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++;
        }, this));
    }, e.prototype.leave = function(b) {
        a.each([ b ].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
            this._states.current[b]--;
        }, this));
    }, e.prototype.register = function(b) {
        if (b.type === e.Type.Event) {
            if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
                var c = a.event.special[b.name]._default;
                a.event.special[b.name]._default = function(a) {
                    return !c || !c.apply || a.namespace && -1 !== a.namespace.indexOf("owl") ? a.namespace && -1 < a.namespace.indexOf("owl") : c.apply(this, arguments);
                }, a.event.special[b.name].owl = !0;
            }
        } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, 
        this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function(c, d) {
            return a.inArray(c, this._states.tags[b.name]) === d;
        }, this)));
    }, e.prototype.suppress = function(b) {
        a.each(b, a.proxy(function(a, b) {
            this._supress[b] = !0;
        }, this));
    }, e.prototype.release = function(b) {
        a.each(b, a.proxy(function(a, b) {
            delete this._supress[b];
        }, this));
    }, e.prototype.pointer = function(a) {
        var c = {
            x: null,
            y: null
        };
        return (a = (a = a.originalEvent || a || b.event).touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a).pageX ? (c.x = a.pageX, 
        c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c;
    }, e.prototype.isNumeric = function(a) {
        return !isNaN(parseFloat(a));
    }, e.prototype.difference = function(a, b) {
        return {
            x: a.x - b.x,
            y: a.y - b.y
        };
    }, a.fn.owlCarousel = function(b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var d = a(this), f = d.data("owl.carousel");
            f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each([ "next", "prev", "to", "destroy", "refresh", "replace", "add", "remove" ], function(b, c) {
                f.register({
                    type: e.Type.Event,
                    name: c
                }), f.$element.on(c + ".owl.carousel.core", a.proxy(function(a) {
                    a.namespace && a.relatedTarget !== this && (this.suppress([ c ]), f[c].apply(this, [].slice.call(arguments, 1)), 
                    this.release([ c ]));
                }, f));
            })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c);
        });
    }, a.fn.owlCarousel.Constructor = e;
}(window.Zepto || window.jQuery, window, document), function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoRefresh && this.watch();
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
    };
    e.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    }, e.prototype.watch = function() {
        this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval));
    }, e.prototype.refresh = function() {
        this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, 
        this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh());
    }, e.prototype.destroy = function() {
        var a, c;
        for (a in b.clearInterval(this._interval), this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null);
    }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e;
}(window.Zepto || window.jQuery, window, document), function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && -1 * e || 0, g = (b.property && void 0 !== b.property.value ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function(a, b) {
                    this.load(b);
                }, this); f++ < e; ) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), 
                g++;
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
    };
    e.Defaults = {
        lazyLoad: !1
    }, e.prototype.load = function(c) {
        var d = this._core.$stage.children().eq(c), e = d && d.find(".owl-lazy");
        !e || -1 < a.inArray(d.get(0), this._loaded) || (e.each(a.proxy(function(c, d) {
            var e, f = a(d), g = 1 < b.devicePixelRatio && f.attr("data-src-retina") || f.attr("data-src");
            this._core.trigger("load", {
                element: f,
                url: g
            }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
                f.css("opacity", 1), this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy");
            }, this)).attr("src", g) : ((e = new Image()).onload = a.proxy(function() {
                f.css({
                    "background-image": "url(" + g + ")",
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy");
            }, this), e.src = g);
        }, this)), this._loaded.push(d.get(0)));
    }, e.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
    }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e;
}(window.Zepto || window.jQuery, window, document), function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && this.update();
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update();
            }, this),
            "loaded.owl.lazy": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update();
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
    };
    e.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, e.prototype.update = function() {
        var f, b = this._core._current, c = b + this._core.settings.items, d = this._core.$stage.children().toArray().slice(b, c), e = [];
        a.each(d, function(b, c) {
            e.push(a(c).height());
        }), f = Math.max.apply(null, e), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass);
    }, e.prototype.destroy = function() {
        var a, b;
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
    }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e;
}(window.Zepto || window.jQuery, window, document), function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: [ "interacting" ]
                });
            }, this),
            "resize.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault();
            }, this),
            "refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove();
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" === a.property.name && this._playing && this.stop();
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                if (b.namespace) {
                    var c = a(b.content).find(".owl-video");
                    c.length && (c.css("display", "none"), this.fetch(c, a(b.content)));
                }
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), 
        this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
            this.play(a);
        }, this));
    };
    e.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, e.prototype.fetch = function(a, b) {
        var c = a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube", d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"), e = a.attr("data-width") || this._core.settings.videoWidth, f = a.attr("data-height") || this._core.settings.videoHeight, g = a.attr("href");
        if (!g) throw new Error("Missing video URL.");
        if (-1 < (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu")) c = "youtube"; else if (-1 < d[3].indexOf("vimeo")) c = "vimeo"; else {
            if (!(-1 < d[3].indexOf("vzaar"))) throw new Error("Video URL not supported.");
            c = "vzaar";
        }
        d = d[6], this._videos[g] = {
            type: c,
            id: d,
            width: e,
            height: f
        }, b.attr("data-video", g), this.thumbnail(a, this._videos[g]);
    }, e.prototype.thumbnail = function(b, c) {
        var d, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "", h = b.find("img"), i = "src", j = "", k = this._core.settings, l = function(a) {
            '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', 
            b.after(d), b.after('<div class="owl-video-play-icon"></div>');
        };
        return b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", 
        j = "owl-lazy"), h.length ? (l(h.attr(i)), h.remove(), !1) : void ("youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", 
        l(f)) : "vimeo" === c.type ? a.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(a) {
                f = a[0].thumbnail_large, l(f);
            }
        }) : "vzaar" === c.type && a.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(a) {
                f = a.framegrab_url, l(f);
            }
        }));
    }, e.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), 
        this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), 
        this._core.trigger("stopped", null, "video");
    }, e.prototype.play = function(b) {
        var c, e = a(b.target).closest("." + this._core.settings.itemClass), f = this._videos[e.attr("data-video")], g = f.width || "100%", h = f.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), 
        e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), 
        "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'), 
        a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")), 
        this._playing = e.addClass("owl-video-playing"));
    }, e.prototype.isInFullScreen = function() {
        var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
        return b && a(b).parent().hasClass("owl-video-frame");
    }, e.prototype.destroy = function() {
        var a, b;
        for (a in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
    }, a.fn.owlCarousel.Constructor.Plugins.Video = e;
}(window.Zepto || window.jQuery, window, document), function(a, b, c, d) {
    var e = function(b) {
        this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), 
        this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
            "change.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" == a.property.name && (this.previous = this.core.current(), 
                this.next = a.property.value);
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
                a.namespace && (this.swapping = "translated" == a.type);
            }, this),
            "translate.owl.carousel": a.proxy(function(a) {
                a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();
            }, this)
        }, this.core.$element.on(this.handlers);
    };
    e.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, e.prototype.swap = function() {
        if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
            this.core.speed(0);
            var b, c = a.proxy(this.clear, this), d = this.core.$stage.children().eq(this.previous), e = this.core.$stage.children().eq(this.next), f = this.core.settings.animateIn, g = this.core.settings.animateOut;
            this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), 
            d.one(a.support.animation.end, c).css({
                left: b + "px"
            }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f));
        }
    }, e.prototype.clear = function(b) {
        a(b.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), 
        this.core.onTransitionEnd();
    }, e.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
    }, a.fn.owlCarousel.Constructor.Plugins.Animate = e;
}(window.Zepto || window.jQuery, window, document), function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._timeout = null, this._paused = !1, this._handlers = {
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval();
            }, this),
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoplay && this.play();
            }, this),
            "play.owl.autoplay": a.proxy(function(a, b, c) {
                a.namespace && this.play(b, c);
            }, this),
            "stop.owl.autoplay": a.proxy(function(a) {
                a.namespace && this.stop();
            }, this),
            "mouseover.owl.autoplay": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
            }, this),
            "mouseleave.owl.autoplay": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play();
            }, this),
            "touchstart.owl.core": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
            }, this),
            "touchend.owl.core": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this.play();
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options);
    };
    e.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, e.prototype.play = function(a, b) {
        this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval());
    }, e.prototype._getNextTimeout = function(d, e) {
        return this._timeout && b.clearTimeout(this._timeout), b.setTimeout(a.proxy(function() {
            this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed);
        }, this), d || this._core.settings.autoplayTimeout);
    }, e.prototype._setAutoPlayInterval = function() {
        this._timeout = this._getNextTimeout();
    }, e.prototype.stop = function() {
        this._core.is("rotating") && (b.clearTimeout(this._timeout), this._core.leave("rotating"));
    }, e.prototype.pause = function() {
        this._core.is("rotating") && (this._paused = !0);
    }, e.prototype.destroy = function() {
        var a, b;
        for (a in this.stop(), this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
    }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e;
}(window.Zepto || window.jQuery, window, document), function(a, b, c, d) {
    "use strict";
    var e = function(b) {
        this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], 
        this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": a.proxy(function(b) {
                b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>");
            }, this),
            "added.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop());
            }, this),
            "remove.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1);
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" == a.property.name && this.draw();
            }, this),
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), 
                this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"));
            }, this),
            "refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), 
                this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"));
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers);
    };
    e.Defaults = {
        nav: !1,
        navText: [ "prev", "next" ],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: [ "owl-prev", "owl-next" ],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, e.prototype.initialize = function() {
        var b, c = this._core.settings;
        for (b in this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), 
        this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function(a) {
            this.prev(c.navSpeed);
        }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function(a) {
            this.next(c.navSpeed);
        }, this)), c.dotsData || (this._templates = [ a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML") ]), 
        this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), 
        this._controls.$absolute.on("click", "div", a.proxy(function(b) {
            var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(), this.to(d, c.dotsSpeed);
        }, this)), this._overrides) this._core[b] = a.proxy(this[b], this);
    }, e.prototype.destroy = function() {
        var a, b, c, d;
        for (a in this._handlers) this.$element.off(a, this._handlers[a]);
        for (b in this._controls) this._controls[b].remove();
        for (d in this.overides) this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null);
    }, e.prototype.update = function() {
        var a, b, d = this._core.clones().length / 2, e = d + this._core.items().length, f = this._core.maximum(!0), g = this._core.settings, h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
        if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy) for (this._pages = [], 
        a = d, b = 0; a < e; a++) {
            if (h <= b || 0 === b) {
                if (this._pages.push({
                    start: Math.min(f, a - d),
                    end: a - d + h - 1
                }), Math.min(f, a - d) === f) break;
                b = 0, 0;
            }
            b += this._core.mergers(this._core.relative(a));
        }
    }, e.prototype.draw = function() {
        var b, c = this._core.settings, d = this._core.items().length <= c.items, e = this._core.relative(this._core.current()), f = c.loop || c.rewind;
        this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), 
        this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), 
        this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, 
        c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : 0 < b ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), 
        this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"));
    }, e.prototype.onTrigger = function(b) {
        var c = this._core.settings;
        b.page = {
            index: a.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
        };
    }, e.prototype.current = function() {
        var b = this._core.relative(this._core.current());
        return a.grep(this._pages, a.proxy(function(a, c) {
            return a.start <= b && a.end >= b;
        }, this)).pop();
    }, e.prototype.getPosition = function(b) {
        var c, d, e = this._core.settings;
        return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, 
        b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), 
        d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c;
    }, e.prototype.next = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
    }, e.prototype.prev = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
    }, e.prototype.to = function(b, c, d) {
        var e;
        !d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c);
    }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e;
}(window.Zepto || window.jQuery, window, document), function(a, b, c, d) {
    "use strict";
    var e = function(c) {
        this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": a.proxy(function(c) {
                c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation");
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                if (b.namespace) {
                    var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!c) return;
                    this._hashes[c] = b.content;
                }
            }, this),
            "changed.owl.carousel": a.proxy(function(c) {
                if (c.namespace && "position" === c.property.name) {
                    var d = this._core.items(this._core.relative(this._core.current())), e = a.map(this._hashes, function(a, b) {
                        return a === d ? b : null;
                    }).join();
                    if (!e || b.location.hash.slice(1) === e) return;
                    b.location.hash = e;
                }
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), 
        a(b).on("hashchange.owl.navigation", a.proxy(function(a) {
            var c = b.location.hash.substring(1), e = this._core.$stage.children(), f = this._hashes[c] && e.index(this._hashes[c]);
            void 0 !== f && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0);
        }, this));
    };
    e.Defaults = {
        URLhashListener: !1
    }, e.prototype.destroy = function() {
        var c, d;
        for (c in a(b).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null);
    }, a.fn.owlCarousel.Constructor.Plugins.Hash = e;
}(window.Zepto || window.jQuery, window, document), function(a, b, c, d) {
    function e(b, c) {
        var e = !1, f = b.charAt(0).toUpperCase() + b.slice(1);
        return a.each((b + " " + h.join(f + " ") + f).split(" "), function(a, b) {
            return g[b] !== d ? (e = !c || b, !1) : void 0;
        }), e;
    }
    function f(a) {
        return e(a, !0);
    }
    var g = a("<support>").get(0).style, h = "Webkit Moz O ms".split(" "), i = {
        transition: {
            end: {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            }
        },
        animation: {
            end: {
                WebkitAnimation: "webkitAnimationEnd",
                MozAnimation: "animationend",
                OAnimation: "oAnimationEnd",
                animation: "animationend"
            }
        }
    }, j_csstransforms = function() {
        return !!e("transform");
    }, j_csstransforms3d = function() {
        return !!e("perspective");
    }, j_cssanimations = function() {
        return !!e("animation");
    };
    (function() {
        return !!e("transition");
    })() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), 
    j_cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), 
    j_csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j_csstransforms3d());
}(window.Zepto || window.jQuery, window, document), function(a) {
    "function" == typeof define && define.amd ? define([ "jquery" ], a) : "object" == typeof exports ? module.exports = a : a(jQuery);
}(function(a) {
    function b(b) {
        var g = b || window.event, h = i.call(arguments, 1), j = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
        if ((b = a.event.fix(g)).type = "mousewheel", "detail" in g && (m = -1 * g.detail), 
        "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), 
        "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, 
        m = 0), j = 0 === m ? l : m, "deltaY" in g && (j = m = -1 * g.deltaY), "deltaX" in g && (l = g.deltaX, 
        0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
            if (1 === g.deltaMode) {
                var q = a.data(this, "mousewheel-line-height");
                j *= q, m *= q, l *= q;
            } else if (2 === g.deltaMode) {
                var r = a.data(this, "mousewheel-page-height");
                j *= r, m *= r, l *= r;
            }
            if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || n < f) && (d(g, f = n) && (f /= 40)), 
            d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[1 <= j ? "floor" : "ceil"](j / f), 
            l = Math[1 <= l ? "floor" : "ceil"](l / f), m = Math[1 <= m ? "floor" : "ceil"](m / f), 
            k.settings.normalizeOffset && this.getBoundingClientRect) {
                var s = this.getBoundingClientRect();
                o = b.clientX - s.left, p = b.clientY - s.top;
            }
            return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, 
            b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), 
            (a.event.dispatch || a.event.handle).apply(this, h);
        }
    }
    function c() {
        f = null;
    }
    function d(a, b) {
        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 == 0;
    }
    var e, f, g = [ "wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll" ], h = "onwheel" in document || 9 <= document.documentMode ? [ "wheel" ] : [ "mousewheel", "DomMouseScroll", "MozMousePixelScroll" ], i = Array.prototype.slice;
    if (a.event.fixHooks) for (var j = g.length; j; ) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
    var k = a.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener) for (var c = h.length; c; ) this.addEventListener(h[--c], b, !1); else this.onmousewheel = b;
            a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this));
        },
        teardown: function() {
            if (this.removeEventListener) for (var c = h.length; c; ) this.removeEventListener(h[--c], b, !1); else this.onmousewheel = null;
            a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height");
        },
        getLineHeight: function(b) {
            var c = a(b), d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
            return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16;
        },
        getPageHeight: function(b) {
            return a(b).height();
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    a.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel");
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a);
        }
    });
}), function(a) {
    "function" == typeof define && define.amd ? define([ "jquery" ], a) : "object" == typeof exports ? module.exports = a : a(jQuery);
}(function(a) {
    function b(b) {
        var g = b || window.event, h = i.call(arguments, 1), j = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
        if ((b = a.event.fix(g)).type = "mousewheel", "detail" in g && (m = -1 * g.detail), 
        "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), 
        "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, 
        m = 0), j = 0 === m ? l : m, "deltaY" in g && (j = m = -1 * g.deltaY), "deltaX" in g && (l = g.deltaX, 
        0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
            if (1 === g.deltaMode) {
                var q = a.data(this, "mousewheel-line-height");
                j *= q, m *= q, l *= q;
            } else if (2 === g.deltaMode) {
                var r = a.data(this, "mousewheel-page-height");
                j *= r, m *= r, l *= r;
            }
            if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || n < f) && (d(g, f = n) && (f /= 40)), 
            d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[1 <= j ? "floor" : "ceil"](j / f), 
            l = Math[1 <= l ? "floor" : "ceil"](l / f), m = Math[1 <= m ? "floor" : "ceil"](m / f), 
            k.settings.normalizeOffset && this.getBoundingClientRect) {
                var s = this.getBoundingClientRect();
                o = b.clientX - s.left, p = b.clientY - s.top;
            }
            return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, 
            b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), 
            (a.event.dispatch || a.event.handle).apply(this, h);
        }
    }
    function c() {
        f = null;
    }
    function d(a, b) {
        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 == 0;
    }
    var e, f, g = [ "wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll" ], h = "onwheel" in document || 9 <= document.documentMode ? [ "wheel" ] : [ "mousewheel", "DomMouseScroll", "MozMousePixelScroll" ], i = Array.prototype.slice;
    if (a.event.fixHooks) for (var j = g.length; j; ) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
    var k = a.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener) for (var c = h.length; c; ) this.addEventListener(h[--c], b, !1); else this.onmousewheel = b;
            a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this));
        },
        teardown: function() {
            if (this.removeEventListener) for (var c = h.length; c; ) this.removeEventListener(h[--c], b, !1); else this.onmousewheel = null;
            a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height");
        },
        getLineHeight: function(b) {
            var c = a(b), d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
            return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16;
        },
        getPageHeight: function(b) {
            return a(b).height();
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    a.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel");
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a);
        }
    });
}), function(e) {
    "function" == typeof define && define.amd ? define([ "jquery" ], e) : "undefined" != typeof module && module.exports ? module.exports = e : e(jQuery, window, document);
}(function(e) {
    var o, a, n;
    o = "function" == typeof define && define.amd, a = "undefined" != typeof module && module.exports, 
    n = "https:" == document.location.protocol ? "https:" : "http:", o || (a ? require("jquery-mousewheel")(e) : e.event.special.mousewheel || e("head").append(decodeURI("%3Cscript src=" + n + "//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js%3E%3C/script%3E"))), 
    function() {
        var t, o = "mCustomScrollbar", a = "mCS", n = ".mCustomScrollbar", i = {
            setTop: 0,
            setLeft: 0,
            axis: "y",
            scrollbarPosition: "inside",
            scrollInertia: 950,
            autoDraggerLength: !0,
            alwaysShowScrollbar: 0,
            snapOffset: 0,
            mouseWheel: {
                enable: !0,
                scrollAmount: "auto",
                axis: "y",
                deltaFactor: "auto",
                disableOver: [ "select", "option", "keygen", "datalist", "textarea" ]
            },
            scrollButtons: {
                scrollType: "stepless",
                scrollAmount: "auto"
            },
            keyboard: {
                enable: !0,
                scrollType: "stepless",
                scrollAmount: "auto"
            },
            contentTouchScroll: 25,
            documentTouchScroll: !0,
            advanced: {
                autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                updateOnContentResize: !0,
                updateOnImageLoad: "auto",
                autoUpdateTimeout: 60
            },
            theme: "light",
            callbacks: {
                onTotalScrollOffset: 0,
                onTotalScrollBackOffset: 0,
                alwaysTriggerOffsets: !0
            }
        }, r = 0, l = {}, s = window.attachEvent && !window.addEventListener ? 1 : 0, c = !1, d = [ "mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight" ], u = {
            init: function(t) {
                var t = e.extend(!0, {}, i, t), o = f.call(this);
                if (t.live) {
                    var s = t.liveSelector || this.selector || n, c = e(s);
                    if ("off" === t.live) return void m(s);
                    l[s] = setTimeout(function() {
                        c.mCustomScrollbar(t), "once" === t.live && c.length && m(s);
                    }, 500);
                } else m(s);
                return t.setWidth = t.set_width ? t.set_width : t.setWidth, t.setHeight = t.set_height ? t.set_height : t.setHeight, 
                t.axis = t.horizontalScroll ? "x" : p(t.axis), t.scrollInertia = 0 < t.scrollInertia && t.scrollInertia < 17 ? 17 : t.scrollInertia, 
                "object" != typeof t.mouseWheel && 1 == t.mouseWheel && (t.mouseWheel = {
                    enable: !0,
                    scrollAmount: "auto",
                    axis: "y",
                    preventDefault: !1,
                    deltaFactor: "auto",
                    normalizeDelta: !1,
                    invert: !1
                }), t.mouseWheel.scrollAmount = t.mouseWheelPixels ? t.mouseWheelPixels : t.mouseWheel.scrollAmount, 
                t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta ? t.advanced.normalizeMouseWheelDelta : t.mouseWheel.normalizeDelta, 
                t.scrollButtons.scrollType = g(t.scrollButtons.scrollType), h(t), e(o).each(function() {
                    var o = e(this);
                    if (!o.data(a)) {
                        o.data(a, {
                            idx: ++r,
                            opt: t,
                            scrollRatio: {
                                y: null,
                                x: null
                            },
                            overflowed: null,
                            contentReset: {
                                y: null,
                                x: null
                            },
                            bindEvents: !1,
                            tweenRunning: !1,
                            sequential: {},
                            langDir: o.css("direction"),
                            cbOffsets: null,
                            trigger: null,
                            poll: {
                                size: {
                                    o: 0,
                                    n: 0
                                },
                                img: {
                                    o: 0,
                                    n: 0
                                },
                                change: {
                                    o: 0,
                                    n: 0
                                }
                            }
                        });
                        var n = o.data(a), i = n.opt, l = o.data("mcs-axis"), s = o.data("mcs-scrollbar-position"), c = o.data("mcs-theme");
                        l && (i.axis = l), s && (i.scrollbarPosition = s), c && (i.theme = c, h(i)), v.call(this), 
                        n && i.callbacks.onCreate && "function" == typeof i.callbacks.onCreate && i.callbacks.onCreate.call(this), 
                        e("#mCSB_" + n.idx + "_container img:not(." + d[2] + ")").addClass(d[2]), u.update.call(null, o);
                    }
                });
            },
            update: function(t, o) {
                var n = t || f.call(this);
                return e(n).each(function() {
                    var t = e(this);
                    if (t.data(a)) {
                        var n = t.data(a), i = n.opt, r = e("#mCSB_" + n.idx + "_container"), l = e("#mCSB_" + n.idx), s = [ e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal") ];
                        if (!r.length) return;
                        n.tweenRunning && Q(t), o && n && i.callbacks.onBeforeUpdate && "function" == typeof i.callbacks.onBeforeUpdate && i.callbacks.onBeforeUpdate.call(this), 
                        t.hasClass(d[3]) && t.removeClass(d[3]), t.hasClass(d[4]) && t.removeClass(d[4]), 
                        l.css("max-height", "none"), l.height() !== t.height() && l.css("max-height", t.height()), 
                        _.call(this), "y" === i.axis || i.advanced.autoExpandHorizontalScroll || r.css("width", x(r)), 
                        n.overflowed = y.call(this), M.call(this), i.autoDraggerLength && S.call(this), 
                        b.call(this), T.call(this);
                        var c = [ Math.abs(r[0].offsetTop), Math.abs(r[0].offsetLeft) ];
                        "x" !== i.axis && (n.overflowed[0] ? s[0].height() > s[0].parent().height() ? B.call(this) : (G(t, c[0].toString(), {
                            dir: "y",
                            dur: 0,
                            overwrite: "none"
                        }), n.contentReset.y = null) : (B.call(this), "y" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[1] && G(t, c[1].toString(), {
                            dir: "x",
                            dur: 0,
                            overwrite: "none"
                        }))), "y" !== i.axis && (n.overflowed[1] ? s[1].width() > s[1].parent().width() ? B.call(this) : (G(t, c[1].toString(), {
                            dir: "x",
                            dur: 0,
                            overwrite: "none"
                        }), n.contentReset.x = null) : (B.call(this), "x" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[0] && G(t, c[0].toString(), {
                            dir: "y",
                            dur: 0,
                            overwrite: "none"
                        }))), o && n && (2 === o && i.callbacks.onImageLoad && "function" == typeof i.callbacks.onImageLoad ? i.callbacks.onImageLoad.call(this) : 3 === o && i.callbacks.onSelectorChange && "function" == typeof i.callbacks.onSelectorChange ? i.callbacks.onSelectorChange.call(this) : i.callbacks.onUpdate && "function" == typeof i.callbacks.onUpdate && i.callbacks.onUpdate.call(this)), 
                        N.call(this);
                    }
                });
            },
            scrollTo: function(t, o) {
                if (void 0 !== t && null != t) {
                    var n = f.call(this);
                    return e(n).each(function() {
                        var n = e(this);
                        if (n.data(a)) {
                            var i = n.data(a), r = i.opt, l = {
                                trigger: "external",
                                scrollInertia: r.scrollInertia,
                                scrollEasing: "mcsEaseInOut",
                                moveDragger: !1,
                                timeout: 60,
                                callbacks: !0,
                                onStart: !0,
                                onUpdate: !0,
                                onComplete: !0
                            }, s = e.extend(!0, {}, l, o), c = Y.call(this, t), d = 0 < s.scrollInertia && s.scrollInertia < 17 ? 17 : s.scrollInertia;
                            c[0] = X.call(this, c[0], "y"), c[1] = X.call(this, c[1], "x"), s.moveDragger && (c[0] *= i.scrollRatio.y, 
                            c[1] *= i.scrollRatio.x), s.dur = ne() ? 0 : d, setTimeout(function() {
                                null !== c[0] && void 0 !== c[0] && "x" !== r.axis && i.overflowed[0] && (s.dir = "y", 
                                s.overwrite = "all", G(n, c[0].toString(), s)), null !== c[1] && void 0 !== c[1] && "y" !== r.axis && i.overflowed[1] && (s.dir = "x", 
                                s.overwrite = "none", G(n, c[1].toString(), s));
                            }, s.timeout);
                        }
                    });
                }
            },
            stop: function() {
                var t = f.call(this);
                return e(t).each(function() {
                    var t = e(this);
                    t.data(a) && Q(t);
                });
            },
            disable: function(t) {
                var o = f.call(this);
                return e(o).each(function() {
                    var o = e(this);
                    o.data(a) && (o.data(a), N.call(this, "remove"), k.call(this), t && B.call(this), 
                    M.call(this, !0), o.addClass(d[3]));
                });
            },
            destroy: function() {
                var t = f.call(this);
                return e(t).each(function() {
                    var n = e(this);
                    if (n.data(a)) {
                        var i = n.data(a), r = i.opt, l = e("#mCSB_" + i.idx), s = e("#mCSB_" + i.idx + "_container"), c = e(".mCSB_" + i.idx + "_scrollbar");
                        r.live && m(r.liveSelector || e(t).selector), N.call(this, "remove"), k.call(this), 
                        B.call(this), n.removeData(a), $(this, "mcs"), c.remove(), s.find("img." + d[2]).removeClass(d[2]), 
                        l.replaceWith(s.contents()), n.removeClass(o + " _" + a + "_" + i.idx + " " + d[6] + " " + d[7] + " " + d[5] + " " + d[3]).addClass(d[4]);
                    }
                });
            }
        }, f = function() {
            return "object" != typeof e(this) || e(this).length < 1 ? n : this;
        }, h = function(t) {
            t.autoDraggerLength = !(-1 < e.inArray(t.theme, [ "rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark" ])) && t.autoDraggerLength, 
            t.autoExpandScrollbar = !(-1 < e.inArray(t.theme, [ "rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark" ])) && t.autoExpandScrollbar, 
            t.scrollButtons.enable = !(-1 < e.inArray(t.theme, [ "minimal", "minimal-dark" ])) && t.scrollButtons.enable, 
            t.autoHideScrollbar = -1 < e.inArray(t.theme, [ "minimal", "minimal-dark" ]) || t.autoHideScrollbar, 
            t.scrollbarPosition = -1 < e.inArray(t.theme, [ "minimal", "minimal-dark" ]) ? "outside" : t.scrollbarPosition;
        }, m = function(e) {
            l[e] && (clearTimeout(l[e]), $(l, e));
        }, p = function(e) {
            return "yx" === e || "xy" === e || "auto" === e ? "yx" : "x" === e || "horizontal" === e ? "x" : "y";
        }, g = function(e) {
            return "stepped" === e || "pixels" === e || "step" === e || "click" === e ? "stepped" : "stepless";
        }, v = function() {
            var t = e(this), n = t.data(a), i = n.opt, r = i.autoExpandScrollbar ? " " + d[1] + "_expand" : "", l = [ "<div id='mCSB_" + n.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_vertical" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + n.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_horizontal" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>" ], s = "yx" === i.axis ? "mCSB_vertical_horizontal" : "x" === i.axis ? "mCSB_horizontal" : "mCSB_vertical", c = "yx" === i.axis ? l[0] + l[1] : "x" === i.axis ? l[1] : l[0], u = "yx" === i.axis ? "<div id='mCSB_" + n.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "", f = i.autoHideScrollbar ? " " + d[6] : "", h = "x" !== i.axis && "rtl" === n.langDir ? " " + d[7] : "";
            i.setWidth && t.css("width", i.setWidth), i.setHeight && t.css("height", i.setHeight), 
            i.setLeft = "y" !== i.axis && "rtl" === n.langDir ? "989999px" : i.setLeft, t.addClass(o + " _" + a + "_" + n.idx + f + h).wrapInner("<div id='mCSB_" + n.idx + "' class='mCustomScrollBox mCS-" + i.theme + " " + s + "'><div id='mCSB_" + n.idx + "_container' class='mCSB_container' style='position:relative; top:" + i.setTop + "; left:" + i.setLeft + ";' dir='" + n.langDir + "' /></div>");
            var m = e("#mCSB_" + n.idx), p = e("#mCSB_" + n.idx + "_container");
            "y" === i.axis || i.advanced.autoExpandHorizontalScroll || p.css("width", x(p)), 
            "outside" === i.scrollbarPosition ? ("static" === t.css("position") && t.css("position", "relative"), 
            t.css("overflow", "visible"), m.addClass("mCSB_outside").after(c)) : (m.addClass("mCSB_inside").append(c), 
            p.wrap(u)), w.call(this);
            var g = [ e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal") ];
            g[0].css("min-height", g[0].height()), g[1].css("min-width", g[1].width());
        }, x = function(t) {
            var o = [ t[0].scrollWidth, Math.max.apply(Math, t.children().map(function() {
                return e(this).outerWidth(!0);
            }).get()) ], a = t.parent().width();
            return a < o[0] ? o[0] : a < o[1] ? o[1] : "100%";
        }, _ = function() {
            var t = e(this), o = t.data(a), n = o.opt, i = e("#mCSB_" + o.idx + "_container");
            if (n.advanced.autoExpandHorizontalScroll && "y" !== n.axis) {
                i.css({
                    width: "auto",
                    "min-width": 0,
                    "overflow-x": "scroll"
                });
                var r = Math.ceil(i[0].scrollWidth);
                3 === n.advanced.autoExpandHorizontalScroll || 2 !== n.advanced.autoExpandHorizontalScroll && r > i.parent().width() ? i.css({
                    width: r,
                    "min-width": "100%",
                    "overflow-x": "inherit"
                }) : i.css({
                    "overflow-x": "inherit",
                    position: "absolute"
                }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                    width: Math.ceil(i[0].getBoundingClientRect().right + .4) - Math.floor(i[0].getBoundingClientRect().left),
                    "min-width": "100%",
                    position: "relative"
                }).unwrap();
            }
        }, w = function() {
            var t = e(this), o = t.data(a), n = o.opt, i = e(".mCSB_" + o.idx + "_scrollbar:first"), r = oe(n.scrollButtons.tabindex) ? "tabindex='" + n.scrollButtons.tabindex + "'" : "", l = [ "<a href='#' class='" + d[13] + "' " + r + " />", "<a href='#' class='" + d[14] + "' " + r + " />", "<a href='#' class='" + d[15] + "' " + r + " />", "<a href='#' class='" + d[16] + "' " + r + " />" ], s = [ "x" === n.axis ? l[2] : l[0], "x" === n.axis ? l[3] : l[1], l[2], l[3] ];
            n.scrollButtons.enable && i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3]);
        }, S = function() {
            var t = e(this), o = t.data(a), n = e("#mCSB_" + o.idx), i = e("#mCSB_" + o.idx + "_container"), r = [ e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal") ], l = [ n.height() / i.outerHeight(!1), n.width() / i.outerWidth(!1) ], c = [ parseInt(r[0].css("min-height")), Math.round(l[0] * r[0].parent().height()), parseInt(r[1].css("min-width")), Math.round(l[1] * r[1].parent().width()) ], d = s && c[1] < c[0] ? c[0] : c[1], u = s && c[3] < c[2] ? c[2] : c[3];
            r[0].css({
                height: d,
                "max-height": r[0].parent().height() - 10
            }).find(".mCSB_dragger_bar").css({
                "line-height": c[0] + "px"
            }), r[1].css({
                width: u,
                "max-width": r[1].parent().width() - 10
            });
        }, b = function() {
            var t = e(this), o = t.data(a), n = e("#mCSB_" + o.idx), i = e("#mCSB_" + o.idx + "_container"), r = [ e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal") ], l = [ i.outerHeight(!1) - n.height(), i.outerWidth(!1) - n.width() ], s = [ l[0] / (r[0].parent().height() - r[0].height()), l[1] / (r[1].parent().width() - r[1].width()) ];
            o.scrollRatio = {
                y: s[0],
                x: s[1]
            };
        }, C = function(e, t, o) {
            var a = o ? d[0] + "_expanded" : "", n = e.closest(".mCSB_scrollTools");
            "active" === t ? (e.toggleClass(d[0] + " " + a), n.toggleClass(d[1]), e[0]._draggable = e[0]._draggable ? 0 : 1) : e[0]._draggable || ("hide" === t ? (e.removeClass(d[0]), 
            n.removeClass(d[1])) : (e.addClass(d[0]), n.addClass(d[1])));
        }, y = function() {
            var t = e(this), o = t.data(a), n = e("#mCSB_" + o.idx), i = e("#mCSB_" + o.idx + "_container"), r = null == o.overflowed ? i.height() : i.outerHeight(!1), l = null == o.overflowed ? i.width() : i.outerWidth(!1), s = i[0].scrollHeight, c = i[0].scrollWidth;
            return r < s && (r = s), l < c && (l = c), [ r > n.height(), l > n.width() ];
        }, B = function() {
            var t = e(this), o = t.data(a), n = o.opt, i = e("#mCSB_" + o.idx), r = e("#mCSB_" + o.idx + "_container"), l = [ e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal") ];
            if (Q(t), ("x" !== n.axis && !o.overflowed[0] || "y" === n.axis && o.overflowed[0]) && (l[0].add(r).css("top", 0), 
            G(t, "_resetY")), "y" !== n.axis && !o.overflowed[1] || "x" === n.axis && o.overflowed[1]) {
                var s = dx = 0;
                "rtl" === o.langDir && (s = i.width() - r.outerWidth(!1), dx = Math.abs(s / o.scrollRatio.x)), 
                r.css("left", s), l[1].css("left", dx), G(t, "_resetX");
            }
        }, T = function() {
            var r, o = e(this), n = o.data(a), i = n.opt;
            n.bindEvents || (I.call(this), i.contentTouchScroll && D.call(this), E.call(this), 
            i.mouseWheel.enable && function t() {
                r = setTimeout(function() {
                    e.event.special.mousewheel ? (clearTimeout(r), W.call(o[0])) : t();
                }, 100);
            }(), P.call(this), U.call(this), i.advanced.autoScrollOnFocus && H.call(this), i.scrollButtons.enable && F.call(this), 
            i.keyboard.enable && q.call(this), n.bindEvents = !0);
        }, k = function() {
            var t = e(this), o = t.data(a), n = o.opt, i = a + "_" + o.idx, r = ".mCSB_" + o.idx + "_scrollbar", l = e("#mCSB_" + o.idx + ",#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper," + r + " ." + d[12] + ",#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal," + r + ">a"), s = e("#mCSB_" + o.idx + "_container");
            n.advanced.releaseDraggableSelectors && l.add(e(n.advanced.releaseDraggableSelectors)), 
            n.advanced.extraDraggableSelectors && l.add(e(n.advanced.extraDraggableSelectors)), 
            o.bindEvents && (e(document).add(e(!A() || top.document)).unbind("." + i), l.each(function() {
                e(this).unbind("." + i);
            }), clearTimeout(t[0]._focusTimeout), $(t[0], "_focusTimeout"), clearTimeout(o.sequential.step), 
            $(o.sequential, "step"), clearTimeout(s[0].onCompleteTimeout), $(s[0], "onCompleteTimeout"), 
            o.bindEvents = !1);
        }, M = function(t) {
            var o = e(this), n = o.data(a), i = n.opt, r = e("#mCSB_" + n.idx + "_container_wrapper"), l = r.length ? r : e("#mCSB_" + n.idx + "_container"), s = [ e("#mCSB_" + n.idx + "_scrollbar_vertical"), e("#mCSB_" + n.idx + "_scrollbar_horizontal") ], c = [ s[0].find(".mCSB_dragger"), s[1].find(".mCSB_dragger") ];
            "x" !== i.axis && (n.overflowed[0] && !t ? (s[0].add(c[0]).add(s[0].children("a")).css("display", "block"), 
            l.removeClass(d[8] + " " + d[10])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[0].css("display", "none"), 
            l.removeClass(d[10])) : (s[0].css("display", "none"), l.addClass(d[10])), l.addClass(d[8]))), 
            "y" !== i.axis && (n.overflowed[1] && !t ? (s[1].add(c[1]).add(s[1].children("a")).css("display", "block"), 
            l.removeClass(d[9] + " " + d[11])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[1].css("display", "none"), 
            l.removeClass(d[11])) : (s[1].css("display", "none"), l.addClass(d[11])), l.addClass(d[9]))), 
            n.overflowed[0] || n.overflowed[1] ? o.removeClass(d[5]) : o.addClass(d[5]);
        }, O = function(t) {
            var o = t.type, a = t.target.ownerDocument !== document && null !== frameElement ? [ e(frameElement).offset().top, e(frameElement).offset().left ] : null, n = A() && t.target.ownerDocument !== top.document && null !== frameElement ? [ e(t.view.frameElement).offset().top, e(t.view.frameElement).offset().left ] : [ 0, 0 ];
            switch (o) {
              case "pointerdown":
              case "MSPointerDown":
              case "pointermove":
              case "MSPointerMove":
              case "pointerup":
              case "MSPointerUp":
                return a ? [ t.originalEvent.pageY - a[0] + n[0], t.originalEvent.pageX - a[1] + n[1], !1 ] : [ t.originalEvent.pageY, t.originalEvent.pageX, !1 ];

              case "touchstart":
              case "touchmove":
              case "touchend":
                var i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0], r = t.originalEvent.touches.length || t.originalEvent.changedTouches.length;
                return t.target.ownerDocument !== document ? [ i.screenY, i.screenX, 1 < r ] : [ i.pageY, i.pageX, 1 < r ];

              default:
                return a ? [ t.pageY - a[0] + n[0], t.pageX - a[1] + n[1], !1 ] : [ t.pageY, t.pageX, !1 ];
            }
        }, I = function() {
            function t(e, t, a, n) {
                if (h[0].idleTimer = d.scrollInertia < 233 ? 250 : 0, o.attr("id") === f[1]) var i = "x", s = (o[0].offsetLeft - t + n) * l.scrollRatio.x; else var i = "y", s = (o[0].offsetTop - e + a) * l.scrollRatio.y;
                G(r, s.toString(), {
                    dir: i,
                    drag: !0
                });
            }
            var o, n, i, r = e(this), l = r.data(a), d = l.opt, u = a + "_" + l.idx, f = [ "mCSB_" + l.idx + "_dragger_vertical", "mCSB_" + l.idx + "_dragger_horizontal" ], h = e("#mCSB_" + l.idx + "_container"), m = e("#" + f[0] + ",#" + f[1]), p = d.advanced.releaseDraggableSelectors ? m.add(e(d.advanced.releaseDraggableSelectors)) : m, g = d.advanced.extraDraggableSelectors ? e(!A() || top.document).add(e(d.advanced.extraDraggableSelectors)) : e(!A() || top.document);
            m.bind("contextmenu." + u, function(e) {
                e.preventDefault();
            }).bind("mousedown." + u + " touchstart." + u + " pointerdown." + u + " MSPointerDown." + u, function(t) {
                if (t.stopImmediatePropagation(), t.preventDefault(), ee(t)) {
                    c = !0, s && (document.onselectstart = function() {
                        return !1;
                    }), L.call(h, !1), Q(r);
                    var a = (o = e(this)).offset(), l = O(t)[0] - a.top, u = O(t)[1] - a.left, f = o.height() + a.top, m = o.width() + a.left;
                    l < f && 0 < l && u < m && 0 < u && (n = l, i = u), C(o, "active", d.autoExpandScrollbar);
                }
            }).bind("touchmove." + u, function(e) {
                e.stopImmediatePropagation(), e.preventDefault();
                var a = o.offset(), r = O(e)[0] - a.top, l = O(e)[1] - a.left;
                t(n, i, r, l);
            }), e(document).add(g).bind("mousemove." + u + " pointermove." + u + " MSPointerMove." + u, function(e) {
                if (o) {
                    var a = o.offset(), r = O(e)[0] - a.top, l = O(e)[1] - a.left;
                    if (n === r && i === l) return;
                    t(n, i, r, l);
                }
            }).add(p).bind("mouseup." + u + " touchend." + u + " pointerup." + u + " MSPointerUp." + u, function() {
                o && (C(o, "active", d.autoExpandScrollbar), o = null), c = !1, s && (document.onselectstart = null), 
                L.call(h, !0);
            });
        }, D = function() {
            function o(e) {
                if (!te(e) || c || O(e)[2]) t = 0; else {
                    C = b = 0, d = t = 1, y.removeClass("mCS_touch_action");
                    var o = I.offset();
                    u = O(e)[0] - o.top, f = O(e)[1] - o.left, z = [ O(e)[0], O(e)[1] ];
                }
            }
            function n(e) {
                if (te(e) && !c && !O(e)[2] && (T.documentTouchScroll || e.preventDefault(), e.stopImmediatePropagation(), 
                (!C || b) && d)) {
                    g = K();
                    var t = M.offset(), o = O(e)[0] - t.top, a = O(e)[1] - t.left, n = "mcsLinearOut";
                    if (E.push(o), W.push(a), z[2] = Math.abs(O(e)[0] - z[0]), z[3] = Math.abs(O(e)[1] - z[1]), 
                    B.overflowed[0]) var i = D[0].parent().height() - D[0].height(), r = 0 < u - o && o - u > -i * B.scrollRatio.y && (2 * z[3] < z[2] || "yx" === T.axis);
                    if (B.overflowed[1]) var l = D[1].parent().width() - D[1].width(), h = 0 < f - a && a - f > -l * B.scrollRatio.x && (2 * z[2] < z[3] || "yx" === T.axis);
                    r || h ? (U || e.preventDefault(), b = 1) : (C = 1, y.addClass("mCS_touch_action")), 
                    U && e.preventDefault(), w = "yx" === T.axis ? [ u - o, f - a ] : "x" === T.axis ? [ null, f - a ] : [ u - o, null ], 
                    I[0].idleTimer = 250, B.overflowed[0] && s(w[0], R, n, "y", "all", !0), B.overflowed[1] && s(w[1], R, n, "x", L, !0);
                }
            }
            function i(e) {
                if (!te(e) || c || O(e)[2]) t = 0; else {
                    t = 1, e.stopImmediatePropagation(), Q(y), p = K();
                    var o = M.offset();
                    h = O(e)[0] - o.top, m = O(e)[1] - o.left, E = [], W = [];
                }
            }
            function r(e) {
                if (te(e) && !c && !O(e)[2]) {
                    d = 0, e.stopImmediatePropagation(), C = b = 0, v = K();
                    var t = M.offset(), o = O(e)[0] - t.top, a = O(e)[1] - t.left;
                    if (!(30 < v - g)) {
                        var n = "mcsEaseOut", i = (_ = 1e3 / (v - p)) < 2.5, r = i ? [ E[E.length - 2], W[W.length - 2] ] : [ 0, 0 ];
                        x = i ? [ o - r[0], a - r[1] ] : [ o - h, a - m ];
                        var u = [ Math.abs(x[0]), Math.abs(x[1]) ];
                        _ = i ? [ Math.abs(x[0] / 4), Math.abs(x[1] / 4) ] : [ _, _ ];
                        var f = [ Math.abs(I[0].offsetTop) - x[0] * l(u[0] / _[0], _[0]), Math.abs(I[0].offsetLeft) - x[1] * l(u[1] / _[1], _[1]) ];
                        w = "yx" === T.axis ? [ f[0], f[1] ] : "x" === T.axis ? [ null, f[1] ] : [ f[0], null ], 
                        S = [ 4 * u[0] + T.scrollInertia, 4 * u[1] + T.scrollInertia ];
                        var y = parseInt(T.contentTouchScroll) || 0;
                        w[0] = y < u[0] ? w[0] : 0, w[1] = y < u[1] ? w[1] : 0, B.overflowed[0] && s(w[0], S[0], n, "y", L, !1), 
                        B.overflowed[1] && s(w[1], S[1], n, "x", L, !1);
                    }
                }
            }
            function l(e, t) {
                var o = [ 1.5 * t, 2 * t, t / 1.5, t / 2 ];
                return 90 < e ? 4 < t ? o[0] : o[3] : 60 < e ? 3 < t ? o[3] : o[2] : 30 < e ? 8 < t ? o[1] : 6 < t ? o[0] : 4 < t ? t : o[2] : 8 < t ? t : o[3];
            }
            function s(e, t, o, a, n, i) {
                e && G(y, e.toString(), {
                    dur: t,
                    scrollEasing: o,
                    dir: a,
                    overwrite: n,
                    drag: i
                });
            }
            var d, u, f, h, m, p, g, v, x, _, w, S, b, C, y = e(this), B = y.data(a), T = B.opt, k = a + "_" + B.idx, M = e("#mCSB_" + B.idx), I = e("#mCSB_" + B.idx + "_container"), D = [ e("#mCSB_" + B.idx + "_dragger_vertical"), e("#mCSB_" + B.idx + "_dragger_horizontal") ], E = [], W = [], R = 0, L = "yx" === T.axis ? "none" : "all", z = [], P = I.find("iframe"), H = [ "touchstart." + k + " pointerdown." + k + " MSPointerDown." + k, "touchmove." + k + " pointermove." + k + " MSPointerMove." + k, "touchend." + k + " pointerup." + k + " MSPointerUp." + k ], U = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;
            I.bind(H[0], function(e) {
                o(e);
            }).bind(H[1], function(e) {
                n(e);
            }), M.bind(H[0], function(e) {
                i(e);
            }).bind(H[2], function(e) {
                r(e);
            }), P.length && P.each(function() {
                e(this).bind("load", function() {
                    A(this) && e(this.contentDocument || this.contentWindow.document).bind(H[0], function(e) {
                        o(e), i(e);
                    }).bind(H[1], function(e) {
                        n(e);
                    }).bind(H[2], function(e) {
                        r(e);
                    });
                });
            });
        }, E = function() {
            function n(e, t, o) {
                d.type = o && i ? "stepped" : "stepless", d.scrollAmount = 10, j(r, e, t, "mcsLinearOut", o ? 60 : null);
            }
            var i, r = e(this), l = r.data(a), s = l.opt, d = l.sequential, u = a + "_" + l.idx, f = e("#mCSB_" + l.idx + "_container"), h = f.parent();
            f.bind("mousedown." + u, function() {
                t || i || (i = 1, c = !0);
            }).add(document).bind("mousemove." + u, function(e) {
                if (!t && i && (window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type && document.selection.createRange().text)) {
                    var a = f.offset(), r = O(e)[0] - a.top + f[0].offsetTop, c = O(e)[1] - a.left + f[0].offsetLeft;
                    0 < r && r < h.height() && 0 < c && c < h.width() ? d.step && n("off", null, "stepped") : ("x" !== s.axis && l.overflowed[0] && (r < 0 ? n("on", 38) : r > h.height() && n("on", 40)), 
                    "y" !== s.axis && l.overflowed[1] && (c < 0 ? n("on", 37) : c > h.width() && n("on", 39)));
                }
            }).bind("mouseup." + u + " dragend." + u, function() {
                t || (i && (i = 0, n("off", null)), c = !1);
            });
        }, W = function() {
            function t(t, a) {
                if (Q(o), !z(o, t.target)) {
                    var r = "auto" !== i.mouseWheel.deltaFactor ? parseInt(i.mouseWheel.deltaFactor) : s && t.deltaFactor < 100 ? 100 : t.deltaFactor || 100, d = i.scrollInertia;
                    if ("x" === i.axis || "x" === i.mouseWheel.axis) var u = "x", f = [ Math.round(r * n.scrollRatio.x), parseInt(i.mouseWheel.scrollAmount) ], h = "auto" !== i.mouseWheel.scrollAmount ? f[1] : f[0] >= l.width() ? .9 * l.width() : f[0], m = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetLeft), p = c[1][0].offsetLeft, g = c[1].parent().width() - c[1].width(), v = "y" === i.mouseWheel.axis ? t.deltaY || a : t.deltaX; else var u = "y", f = [ Math.round(r * n.scrollRatio.y), parseInt(i.mouseWheel.scrollAmount) ], h = "auto" !== i.mouseWheel.scrollAmount ? f[1] : f[0] >= l.height() ? .9 * l.height() : f[0], m = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetTop), p = c[0][0].offsetTop, g = c[0].parent().height() - c[0].height(), v = t.deltaY || a;
                    "y" === u && !n.overflowed[0] || "x" === u && !n.overflowed[1] || ((i.mouseWheel.invert || t.webkitDirectionInvertedFromDevice) && (v = -v), 
                    i.mouseWheel.normalizeDelta && (v = v < 0 ? -1 : 1), (0 < v && 0 !== p || v < 0 && p !== g || i.mouseWheel.preventDefault) && (t.stopImmediatePropagation(), 
                    t.preventDefault()), t.deltaFactor < 5 && !i.mouseWheel.normalizeDelta && (h = t.deltaFactor, 
                    d = 17), G(o, (m - v * h).toString(), {
                        dir: u,
                        dur: d
                    }));
                }
            }
            if (e(this).data(a)) {
                var o = e(this), n = o.data(a), i = n.opt, r = a + "_" + n.idx, l = e("#mCSB_" + n.idx), c = [ e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal") ], d = e("#mCSB_" + n.idx + "_container").find("iframe");
                d.length && d.each(function() {
                    e(this).bind("load", function() {
                        A(this) && e(this.contentDocument || this.contentWindow.document).bind("mousewheel." + r, function(e, o) {
                            t(e, o);
                        });
                    });
                }), l.bind("mousewheel." + r, function(e, o) {
                    t(e, o);
                });
            }
        }, R = new Object(), A = function(t) {
            var o = !1, a = !1, n = null;
            if (void 0 === t ? a = "#empty" : void 0 !== e(t).attr("id") && (a = e(t).attr("id")), 
            !1 !== a && void 0 !== R[a]) return R[a];
            if (t) {
                try {
                    var i = t.contentDocument || t.contentWindow.document;
                    n = i.body.innerHTML;
                } catch (r) {}
                o = null !== n;
            } else {
                try {
                    var i = top.document;
                    n = i.body.innerHTML;
                } catch (r) {}
                o = null !== n;
            }
            return !1 !== a && (R[a] = o), o;
        }, L = function(e) {
            var t = this.find("iframe");
            if (t.length) {
                var o = e ? "auto" : "none";
                t.css("pointer-events", o);
            }
        }, z = function(t, o) {
            var n = o.nodeName.toLowerCase(), i = t.data(a).opt.mouseWheel.disableOver;
            return -1 < e.inArray(n, i) && !(-1 < e.inArray(n, [ "select", "textarea" ]) && !e(o).is(":focus"));
        }, P = function() {
            var t, o = e(this), n = o.data(a), i = a + "_" + n.idx, r = e("#mCSB_" + n.idx + "_container"), l = r.parent(), s = e(".mCSB_" + n.idx + "_scrollbar ." + d[12]);
            s.bind("mousedown." + i + " touchstart." + i + " pointerdown." + i + " MSPointerDown." + i, function(o) {
                c = !0, e(o.target).hasClass("mCSB_dragger") || (t = 1);
            }).bind("touchend." + i + " pointerup." + i + " MSPointerUp." + i, function() {
                c = !1;
            }).bind("click." + i, function(a) {
                if (t && (t = 0, e(a.target).hasClass(d[12]) || e(a.target).hasClass("mCSB_draggerRail"))) {
                    Q(o);
                    var i = e(this), s = i.find(".mCSB_dragger");
                    if (0 < i.parent(".mCSB_scrollTools_horizontal").length) {
                        if (!n.overflowed[1]) return;
                        var c = "x", u = a.pageX > s.offset().left ? -1 : 1, f = Math.abs(r[0].offsetLeft) - u * (.9 * l.width());
                    } else {
                        if (!n.overflowed[0]) return;
                        var c = "y", u = a.pageY > s.offset().top ? -1 : 1, f = Math.abs(r[0].offsetTop) - u * (.9 * l.height());
                    }
                    G(o, f.toString(), {
                        dir: c,
                        scrollEasing: "mcsEaseInOut"
                    });
                }
            });
        }, H = function() {
            var t = e(this), o = t.data(a), n = o.opt, i = a + "_" + o.idx, r = e("#mCSB_" + o.idx + "_container"), l = r.parent();
            r.bind("focusin." + i, function() {
                var o = e(document.activeElement), a = r.find(".mCustomScrollBox").length;
                o.is(n.advanced.autoScrollOnFocus) && (Q(t), clearTimeout(t[0]._focusTimeout), t[0]._focusTimer = a ? 17 * a : 0, 
                t[0]._focusTimeout = setTimeout(function() {
                    var e = [ ae(o)[0], ae(o)[1] ], a = [ r[0].offsetTop, r[0].offsetLeft ], s = [ 0 <= a[0] + e[0] && a[0] + e[0] < l.height() - o.outerHeight(!1), 0 <= a[1] + e[1] && a[0] + e[1] < l.width() - o.outerWidth(!1) ], c = "yx" !== n.axis || s[0] || s[1] ? "all" : "none";
                    "x" === n.axis || s[0] || G(t, e[0].toString(), {
                        dir: "y",
                        scrollEasing: "mcsEaseInOut",
                        overwrite: c,
                        dur: 0
                    }), "y" === n.axis || s[1] || G(t, e[1].toString(), {
                        dir: "x",
                        scrollEasing: "mcsEaseInOut",
                        overwrite: c,
                        dur: 0
                    });
                }, t[0]._focusTimer));
            });
        }, U = function() {
            var t = e(this), o = t.data(a), n = a + "_" + o.idx, i = e("#mCSB_" + o.idx + "_container").parent();
            i.bind("scroll." + n, function() {
                0 === i.scrollTop() && 0 === i.scrollLeft() || e(".mCSB_" + o.idx + "_scrollbar").css("visibility", "hidden");
            });
        }, F = function() {
            var t = e(this), o = t.data(a), n = o.opt, i = o.sequential, r = a + "_" + o.idx, l = ".mCSB_" + o.idx + "_scrollbar", s = e(l + ">a");
            s.bind("contextmenu." + r, function(e) {
                e.preventDefault();
            }).bind("mousedown." + r + " touchstart." + r + " pointerdown." + r + " MSPointerDown." + r + " mouseup." + r + " touchend." + r + " pointerup." + r + " MSPointerUp." + r + " mouseout." + r + " pointerout." + r + " MSPointerOut." + r + " click." + r, function(a) {
                function r(e, o) {
                    i.scrollAmount = n.scrollButtons.scrollAmount, j(t, e, o);
                }
                if (a.preventDefault(), ee(a)) {
                    var l = e(this).attr("class");
                    switch (i.type = n.scrollButtons.scrollType, a.type) {
                      case "mousedown":
                      case "touchstart":
                      case "pointerdown":
                      case "MSPointerDown":
                        if ("stepped" === i.type) return;
                        c = !0, o.tweenRunning = !1, r("on", l);
                        break;

                      case "mouseup":
                      case "touchend":
                      case "pointerup":
                      case "MSPointerUp":
                      case "mouseout":
                      case "pointerout":
                      case "MSPointerOut":
                        if ("stepped" === i.type) return;
                        c = !1, i.dir && r("off", l);
                        break;

                      case "click":
                        if ("stepped" !== i.type || o.tweenRunning) return;
                        r("on", l);
                    }
                }
            });
        }, q = function() {
            function t(t) {
                function a(e, t) {
                    r.type = i.keyboard.scrollType, r.scrollAmount = i.keyboard.scrollAmount, "stepped" === r.type && n.tweenRunning || j(o, e, t);
                }
                switch (t.type) {
                  case "blur":
                    n.tweenRunning && r.dir && a("off", null);
                    break;

                  case "keydown":
                  case "keyup":
                    var l = t.keyCode ? t.keyCode : t.which, s = "on";
                    if ("x" !== i.axis && (38 === l || 40 === l) || "y" !== i.axis && (37 === l || 39 === l)) {
                        if ((38 === l || 40 === l) && !n.overflowed[0] || (37 === l || 39 === l) && !n.overflowed[1]) return;
                        "keyup" === t.type && (s = "off"), e(document.activeElement).is(u) || (t.preventDefault(), 
                        t.stopImmediatePropagation(), a(s, l));
                    } else if (33 === l || 34 === l) {
                        if ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), 
                        "keyup" === t.type) {
                            Q(o);
                            var f = 34 === l ? -1 : 1;
                            if ("x" === i.axis || "yx" === i.axis && n.overflowed[1] && !n.overflowed[0]) var h = "x", m = Math.abs(c[0].offsetLeft) - f * (.9 * d.width()); else var h = "y", m = Math.abs(c[0].offsetTop) - f * (.9 * d.height());
                            G(o, m.toString(), {
                                dir: h,
                                scrollEasing: "mcsEaseInOut"
                            });
                        }
                    } else if ((35 === l || 36 === l) && !e(document.activeElement).is(u) && ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(), 
                    t.stopImmediatePropagation()), "keyup" === t.type)) {
                        if ("x" === i.axis || "yx" === i.axis && n.overflowed[1] && !n.overflowed[0]) var h = "x", m = 35 === l ? Math.abs(d.width() - c.outerWidth(!1)) : 0; else var h = "y", m = 35 === l ? Math.abs(d.height() - c.outerHeight(!1)) : 0;
                        G(o, m.toString(), {
                            dir: h,
                            scrollEasing: "mcsEaseInOut"
                        });
                    }
                }
            }
            var o = e(this), n = o.data(a), i = n.opt, r = n.sequential, l = a + "_" + n.idx, s = e("#mCSB_" + n.idx), c = e("#mCSB_" + n.idx + "_container"), d = c.parent(), u = "input,textarea,select,datalist,keygen,[contenteditable='true']", f = c.find("iframe"), h = [ "blur." + l + " keydown." + l + " keyup." + l ];
            f.length && f.each(function() {
                e(this).bind("load", function() {
                    A(this) && e(this.contentDocument || this.contentWindow.document).bind(h[0], function(e) {
                        t(e);
                    });
                });
            }), s.attr("tabindex", "0").bind(h[0], function(e) {
                t(e);
            });
        }, j = function(t, o, n, i, r) {
            function l(e) {
                u.snapAmount && (f.scrollAmount = u.snapAmount instanceof Array ? "x" === f.dir[0] ? u.snapAmount[1] : u.snapAmount[0] : u.snapAmount);
                var o = "stepped" !== f.type, a = r || (e ? o ? p / 1.5 : g : 1e3 / 60), n = e ? o ? 7.5 : 40 : 2.5, s = [ Math.abs(h[0].offsetTop), Math.abs(h[0].offsetLeft) ], d = [ 10 < c.scrollRatio.y ? 10 : c.scrollRatio.y, 10 < c.scrollRatio.x ? 10 : c.scrollRatio.x ], m = "x" === f.dir[0] ? s[1] + f.dir[1] * (d[1] * n) : s[0] + f.dir[1] * (d[0] * n), v = "x" === f.dir[0] ? s[1] + f.dir[1] * parseInt(f.scrollAmount) : s[0] + f.dir[1] * parseInt(f.scrollAmount), x = "auto" !== f.scrollAmount ? v : m, _ = i || (e ? o ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear"), w = !!e;
                return e && a < 17 && (x = "x" === f.dir[0] ? s[1] : s[0]), G(t, x.toString(), {
                    dir: f.dir[0],
                    scrollEasing: _,
                    dur: a,
                    onComplete: w
                }), e ? void (f.dir = !1) : (clearTimeout(f.step), void (f.step = setTimeout(function() {
                    l();
                }, a)));
            }
            var c = t.data(a), u = c.opt, f = c.sequential, h = e("#mCSB_" + c.idx + "_container"), m = "stepped" === f.type, p = u.scrollInertia < 26 ? 26 : u.scrollInertia, g = u.scrollInertia < 1 ? 17 : u.scrollInertia;
            switch (o) {
              case "on":
                if (f.dir = [ n === d[16] || n === d[15] || 39 === n || 37 === n ? "x" : "y", n === d[13] || n === d[15] || 38 === n || 37 === n ? -1 : 1 ], 
                Q(t), oe(n) && "stepped" === f.type) return;
                l(m);
                break;

              case "off":
                clearTimeout(f.step), $(f, "step"), Q(t), (m || c.tweenRunning && f.dir) && l(!0);
            }
        }, Y = function(t) {
            var o = e(this).data(a).opt, n = [];
            return "function" == typeof t && (t = t()), t instanceof Array ? n = 1 < t.length ? [ t[0], t[1] ] : "x" === o.axis ? [ null, t[0] ] : [ t[0], null ] : (n[0] = t.y ? t.y : t.x || "x" === o.axis ? null : t, 
            n[1] = t.x ? t.x : t.y || "y" === o.axis ? null : t), "function" == typeof n[0] && (n[0] = n[0]()), 
            "function" == typeof n[1] && (n[1] = n[1]()), n;
        }, X = function(t, o) {
            if (null != t && void 0 !== t) {
                var n = e(this), i = n.data(a), r = i.opt, l = e("#mCSB_" + i.idx + "_container"), s = l.parent(), c = typeof t;
                o || (o = "x" === r.axis ? "x" : "y");
                var d = "x" === o ? l.outerWidth(!1) - s.width() : l.outerHeight(!1) - s.height(), f = "x" === o ? l[0].offsetLeft : l[0].offsetTop, h = "x" === o ? "left" : "top";
                switch (c) {
                  case "function":
                    return t();

                  case "object":
                    var m = t.jquery ? t : e(t);
                    if (!m.length) return;
                    return "x" === o ? ae(m)[1] : ae(m)[0];

                  case "string":
                  case "number":
                    if (oe(t)) return Math.abs(t);
                    if (-1 !== t.indexOf("%")) return Math.abs(d * parseInt(t) / 100);
                    if (-1 !== t.indexOf("-=")) return Math.abs(f - parseInt(t.split("-=")[1]));
                    if (-1 !== t.indexOf("+=")) {
                        var p = f + parseInt(t.split("+=")[1]);
                        return 0 <= p ? 0 : Math.abs(p);
                    }
                    if (-1 !== t.indexOf("px") && oe(t.split("px")[0])) return Math.abs(t.split("px")[0]);
                    if ("top" === t || "left" === t) return 0;
                    if ("bottom" === t) return Math.abs(s.height() - l.outerHeight(!1));
                    if ("right" === t) return Math.abs(s.width() - l.outerWidth(!1));
                    if ("first" !== t && "last" !== t) return e(t).length ? "x" === o ? ae(e(t))[1] : ae(e(t))[0] : (l.css(h, t), 
                    void u.update.call(null, n[0]));
                    var m = l.find(":" + t);
                    return "x" === o ? ae(m)[1] : ae(m)[0];
                }
            }
        }, N = function(t) {
            function n(t) {
                function o(e, t) {
                    return function() {
                        return t.apply(e, arguments);
                    };
                }
                function a() {
                    this.onload = null, e(t).addClass(d[2]), r(2);
                }
                if (e(t).hasClass(d[2])) r(); else {
                    var n = new Image();
                    n.onload = o(n, a), n.src = t.src;
                }
            }
            function i() {
                !0 === c.advanced.updateOnSelectorChange && (c.advanced.updateOnSelectorChange = "*");
                var e = 0, t = f.find(c.advanced.updateOnSelectorChange);
                return c.advanced.updateOnSelectorChange && 0 < t.length && t.each(function() {
                    e += this.offsetHeight + this.offsetWidth;
                }), e;
            }
            function r(e) {
                clearTimeout(f[0].autoUpdate), u.update.call(null, l[0], e);
            }
            var l = e(this), s = l.data(a), c = s.opt, f = e("#mCSB_" + s.idx + "_container");
            return t ? (clearTimeout(f[0].autoUpdate), void $(f[0], "autoUpdate")) : void function o() {
                return clearTimeout(f[0].autoUpdate), 0 === l.parents("html").length ? void (l = null) : void (f[0].autoUpdate = setTimeout(function() {
                    return c.advanced.updateOnSelectorChange && (s.poll.change.n = i(), s.poll.change.n !== s.poll.change.o) ? (s.poll.change.o = s.poll.change.n, 
                    void r(3)) : c.advanced.updateOnContentResize && (s.poll.size.n = l[0].scrollHeight + l[0].scrollWidth + f[0].offsetHeight + l[0].offsetHeight + l[0].offsetWidth, 
                    s.poll.size.n !== s.poll.size.o) ? (s.poll.size.o = s.poll.size.n, void r(1)) : !c.advanced.updateOnImageLoad || "auto" === c.advanced.updateOnImageLoad && "y" === c.axis || (s.poll.img.n = f.find("img").length, 
                    s.poll.img.n === s.poll.img.o) ? void ((c.advanced.updateOnSelectorChange || c.advanced.updateOnContentResize || c.advanced.updateOnImageLoad) && o()) : (s.poll.img.o = s.poll.img.n, 
                    void f.find("img").each(function() {
                        n(this);
                    }));
                }, c.advanced.autoUpdateTimeout));
            }();
        }, Q = function(t) {
            var o = t.data(a), n = e("#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper,#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal");
            n.each(function() {
                Z.call(this);
            });
        }, G = function(t, o, n) {
            function i(e) {
                return s && c.callbacks[e] && "function" == typeof c.callbacks[e];
            }
            function l() {
                var e = [ h[0].offsetTop, h[0].offsetLeft ], o = [ x[0].offsetTop, x[0].offsetLeft ], a = [ h.outerHeight(!1), h.outerWidth(!1) ], i = [ f.height(), f.width() ];
                t[0].mcs = {
                    content: h,
                    top: e[0],
                    left: e[1],
                    draggerTop: o[0],
                    draggerLeft: o[1],
                    topPct: Math.round(100 * Math.abs(e[0]) / (Math.abs(a[0]) - i[0])),
                    leftPct: Math.round(100 * Math.abs(e[1]) / (Math.abs(a[1]) - i[1])),
                    direction: n.dir
                };
            }
            var s = t.data(a), c = s.opt, d = {
                trigger: "internal",
                dir: "y",
                scrollEasing: "mcsEaseOut",
                drag: !1,
                dur: c.scrollInertia,
                overwrite: "all",
                callbacks: !0,
                onStart: !0,
                onUpdate: !0,
                onComplete: !0
            }, n = e.extend(d, n), u = [ n.dur, n.drag ? 0 : n.dur ], f = e("#mCSB_" + s.idx), h = e("#mCSB_" + s.idx + "_container"), m = h.parent(), p = c.callbacks.onTotalScrollOffset ? Y.call(t, c.callbacks.onTotalScrollOffset) : [ 0, 0 ], g = c.callbacks.onTotalScrollBackOffset ? Y.call(t, c.callbacks.onTotalScrollBackOffset) : [ 0, 0 ];
            if (s.trigger = n.trigger, 0 === m.scrollTop() && 0 === m.scrollLeft() || (e(".mCSB_" + s.idx + "_scrollbar").css("visibility", "visible"), 
            m.scrollTop(0).scrollLeft(0)), "_resetY" !== o || s.contentReset.y || (i("onOverflowYNone") && c.callbacks.onOverflowYNone.call(t[0]), 
            s.contentReset.y = 1), "_resetX" !== o || s.contentReset.x || (i("onOverflowXNone") && c.callbacks.onOverflowXNone.call(t[0]), 
            s.contentReset.x = 1), "_resetY" !== o && "_resetX" !== o) {
                if (!s.contentReset.y && t[0].mcs || !s.overflowed[0] || (i("onOverflowY") && c.callbacks.onOverflowY.call(t[0]), 
                s.contentReset.x = null), !s.contentReset.x && t[0].mcs || !s.overflowed[1] || (i("onOverflowX") && c.callbacks.onOverflowX.call(t[0]), 
                s.contentReset.x = null), c.snapAmount) {
                    var v = c.snapAmount instanceof Array ? "x" === n.dir ? c.snapAmount[1] : c.snapAmount[0] : c.snapAmount;
                    o = function(e, t, o) {
                        return Math.round(e / t) * t - o;
                    }(o, v, c.snapOffset);
                }
                switch (n.dir) {
                  case "x":
                    var x = e("#mCSB_" + s.idx + "_dragger_horizontal"), _ = "left", w = h[0].offsetLeft, S = [ f.width() - h.outerWidth(!1), x.parent().width() - x.width() ], b = [ o, 0 === o ? 0 : o / s.scrollRatio.x ], y = p[1], B = g[1], T = 0 < y ? y / s.scrollRatio.x : 0, k = 0 < B ? B / s.scrollRatio.x : 0;
                    break;

                  case "y":
                    var x = e("#mCSB_" + s.idx + "_dragger_vertical"), _ = "top", w = h[0].offsetTop, S = [ f.height() - h.outerHeight(!1), x.parent().height() - x.height() ], b = [ o, 0 === o ? 0 : o / s.scrollRatio.y ], y = p[0], B = g[0], T = 0 < y ? y / s.scrollRatio.y : 0, k = 0 < B ? B / s.scrollRatio.y : 0;
                }
                b[1] < 0 || 0 === b[0] && 0 === b[1] ? b = [ 0, 0 ] : b[1] >= S[1] ? b = [ S[0], S[1] ] : b[0] = -b[0], 
                t[0].mcs || (l(), i("onInit") && c.callbacks.onInit.call(t[0])), clearTimeout(h[0].onCompleteTimeout), 
                J(x[0], _, Math.round(b[1]), u[1], n.scrollEasing), !s.tweenRunning && (0 === w && 0 <= b[0] || w === S[0] && b[0] <= S[0]) || J(h[0], _, Math.round(b[0]), u[0], n.scrollEasing, n.overwrite, {
                    onStart: function() {
                        n.callbacks && n.onStart && !s.tweenRunning && (i("onScrollStart") && (l(), c.callbacks.onScrollStart.call(t[0])), 
                        s.tweenRunning = !0, C(x), s.cbOffsets = [ c.callbacks.alwaysTriggerOffsets || w >= S[0] + y, c.callbacks.alwaysTriggerOffsets || w <= -B ]);
                    },
                    onUpdate: function() {
                        n.callbacks && n.onUpdate && i("whileScrolling") && (l(), c.callbacks.whileScrolling.call(t[0]));
                    },
                    onComplete: function() {
                        if (n.callbacks && n.onComplete) {
                            "yx" === c.axis && clearTimeout(h[0].onCompleteTimeout);
                            var e = h[0].idleTimer || 0;
                            h[0].onCompleteTimeout = setTimeout(function() {
                                i("onScroll") && (l(), c.callbacks.onScroll.call(t[0])), i("onTotalScroll") && b[1] >= S[1] - T && s.cbOffsets[0] && (l(), 
                                c.callbacks.onTotalScroll.call(t[0])), i("onTotalScrollBack") && b[1] <= k && s.cbOffsets[1] && (l(), 
                                c.callbacks.onTotalScrollBack.call(t[0])), s.tweenRunning = !1, h[0].idleTimer = 0, 
                                C(x, "hide");
                            }, e);
                        }
                    }
                });
            }
        }, J = function(e, t, o, a, n, i, r) {
            function l() {
                S.stop || (x || m.call(), x = K() - v, s(), x >= S.time && (S.time = x > S.time ? x + f - (x - S.time) : x + f - 1, 
                S.time < x + 1 && (S.time = x + 1)), S.time < a ? S.id = h(l) : g.call());
            }
            function s() {
                0 < a ? (S.currVal = function(e, t, o, a, n) {
                    switch (n) {
                      case "linear":
                      case "mcsLinear":
                        return o * e / a + t;

                      case "mcsLinearOut":
                        return e /= a, e--, o * Math.sqrt(1 - e * e) + t;

                      case "easeInOutSmooth":
                        return (e /= a / 2) < 1 ? o / 2 * e * e + t : -o / 2 * (--e * (e - 2) - 1) + t;

                      case "easeInOutStrong":
                        return (e /= a / 2) < 1 ? o / 2 * Math.pow(2, 10 * (e - 1)) + t : (e--, o / 2 * (2 - Math.pow(2, -10 * e)) + t);

                      case "easeInOut":
                      case "mcsEaseInOut":
                        return (e /= a / 2) < 1 ? o / 2 * e * e * e + t : o / 2 * ((e -= 2) * e * e + 2) + t;

                      case "easeOutSmooth":
                        return e /= a, -o * (--e * e * e * e - 1) + t;

                      case "easeOutStrong":
                        return o * (1 - Math.pow(2, -10 * e / a)) + t;

                      case "easeOut":
                      case "mcsEaseOut":
                      default:
                        var i = (e /= a) * e, r = i * e;
                        return t + o * (.499999999999997 * r * i + -2.5 * i * i + 5.5 * r + -6.5 * i + 4 * e);
                    }
                }(S.time, _, b, a, n), w[t] = Math.round(S.currVal) + "px") : w[t] = o + "px", p.call();
            }
            e._mTween || (e._mTween = {
                top: {},
                left: {}
            });
            var f, h, r = r || {}, m = r.onStart || function() {}, p = r.onUpdate || function() {}, g = r.onComplete || function() {}, v = K(), x = 0, _ = e.offsetTop, w = e.style, S = e._mTween[t];
            "left" === t && (_ = e.offsetLeft);
            var b = o - _;
            S.stop = 0, "none" !== i && null != S.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(S.id) : clearTimeout(S.id), 
            S.id = null), f = 1e3 / 60, S.time = x + f, h = window.requestAnimationFrame ? window.requestAnimationFrame : function(e) {
                return s(), setTimeout(e, .01);
            }, S.id = h(l);
        }, K = function() {
            return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : new Date().getTime();
        }, Z = function() {
            var e = this;
            e._mTween || (e._mTween = {
                top: {},
                left: {}
            });
            for (var t = [ "top", "left" ], o = 0; o < t.length; o++) {
                var a = t[o];
                e._mTween[a].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(e._mTween[a].id) : clearTimeout(e._mTween[a].id), 
                e._mTween[a].id = null, e._mTween[a].stop = 1);
            }
        }, $ = function(e, t) {
            try {
                delete e[t];
            } catch (o) {
                e[t] = null;
            }
        }, ee = function(e) {
            return !(e.which && 1 !== e.which);
        }, te = function(e) {
            var t = e.originalEvent.pointerType;
            return !(t && "touch" !== t && 2 !== t);
        }, oe = function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e);
        }, ae = function(e) {
            var t = e.parents(".mCSB_container");
            return [ e.offset().top - t.offset().top, e.offset().left - t.offset().left ];
        }, ne = function() {
            var t = function() {
                var e = [ "webkit", "moz", "ms", "o" ];
                if ("hidden" in document) return "hidden";
                for (var t = 0; t < e.length; t++) if (e[t] + "Hidden" in document) return e[t] + "Hidden";
                return null;
            }();
            return !!t && document[t];
        };
        e.fn[o] = function(t) {
            return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments);
        }, e[o] = function(t) {
            return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments);
        }, e[o].defaults = i, window[o] = !0, e(window).bind("load", function() {
            e(n)[o](), e.extend(e.expr[":"], {
                mcsInView: e.expr[":"].mcsInView || function(t) {
                    var o, a, n = e(t), i = n.parents(".mCSB_container");
                    if (i.length) return o = i.parent(), 0 <= (a = [ i[0].offsetTop, i[0].offsetLeft ])[0] + ae(n)[0] && a[0] + ae(n)[0] < o.height() - n.outerHeight(!1) && 0 <= a[1] + ae(n)[1] && a[1] + ae(n)[1] < o.width() - n.outerWidth(!1);
                },
                mcsInSight: e.expr[":"].mcsInSight || function(t, o, a) {
                    var n, i, r, l, s = e(t), c = s.parents(".mCSB_container"), d = "exact" === a[3] ? [ [ 1, 0 ], [ 1, 0 ] ] : [ [ .9, .1 ], [ .6, .4 ] ];
                    if (c.length) return n = [ s.outerHeight(!1), s.outerWidth(!1) ], r = [ c[0].offsetTop + ae(s)[0], c[0].offsetLeft + ae(s)[1] ], 
                    i = [ c.parent()[0].offsetHeight, c.parent()[0].offsetWidth ], r[0] - i[0] * (l = [ n[0] < i[0] ? d[0] : d[1], n[1] < i[1] ? d[0] : d[1] ])[0][0] < 0 && 0 <= r[0] + n[0] - i[0] * l[0][1] && r[1] - i[1] * l[1][0] < 0 && 0 <= r[1] + n[1] - i[1] * l[1][1];
                },
                mcsOverflow: e.expr[":"].mcsOverflow || function(t) {
                    var o = e(t).data(a);
                    if (o) return o.overflowed[0] || o.overflowed[1];
                }
            });
        });
    }();
}), jQuery.fn.timelinr = function(options) {
    settings = jQuery.extend({
        orientation: "horizontal",
        containerDiv: "#timeline",
        datesDiv: "#dates",
        datesSelectedClass: "selected",
        datesSpeed: "normal",
        issuesDiv: "#issues",
        issuesSelectedClass: "selected",
        issuesSpeed: "fast",
        issuesTransparency: .2,
        issuesTransparencySpeed: 500,
        prevButton: "#prev",
        nextButton: "#next",
        arrowKeys: "false",
        startAt: 1,
        autoPlay: "false",
        autoPlayDirection: "forward",
        autoPlayPause: 2e3
    }, options), $(function() {
        var howManyDates = $(settings.datesDiv + " li").length, howManyIssues = $(settings.issuesDiv + " li").length, widthContainer = ($(settings.datesDiv).find("a." + settings.datesSelectedClass), 
        $(settings.issuesDiv).find("li." + settings.issuesSelectedClass), $(settings.containerDiv).width()), heightContainer = $(settings.containerDiv).height(), widthIssue = ($(settings.issuesDiv).width(), 
        $(settings.issuesDiv).height(), $(settings.issuesDiv + " li").width()), heightIssue = $(settings.issuesDiv + " li").height(), widthDate = ($(settings.datesDiv).width(), 
        $(settings.datesDiv).height(), $(settings.datesDiv + " li").width()), heightDate = $(settings.datesDiv + " li").height();
        if ("horizontal" == settings.orientation) {
            $(settings.issuesDiv).width(widthIssue * howManyIssues), $(settings.datesDiv).width(widthDate * howManyDates).css("marginLeft", widthContainer / 2 - widthDate / 2);
            var defaultPositionDates = parseInt($(settings.datesDiv).css("marginLeft").substring(0, $(settings.datesDiv).css("marginLeft").indexOf("px")));
        } else if ("vertical" == settings.orientation) {
            $(settings.issuesDiv).height(heightIssue * howManyIssues), $(settings.datesDiv).height(heightDate * howManyDates).css("marginTop", heightContainer / 2 - heightDate / 2);
            defaultPositionDates = parseInt($(settings.datesDiv).css("marginTop").substring(0, $(settings.datesDiv).css("marginTop").indexOf("px")));
        }
        $(settings.datesDiv + " a").click(function(event) {
            event.preventDefault();
            $(this).text();
            var currentIndex = $(this).parent().prevAll().length;
            "horizontal" == settings.orientation ? $(settings.issuesDiv).animate({
                marginLeft: -widthIssue * currentIndex
            }, {
                queue: !1,
                duration: settings.issuesSpeed
            }) : "vertical" == settings.orientation && $(settings.issuesDiv).animate({
                marginTop: -heightIssue * currentIndex
            }, {
                queue: !1,
                duration: settings.issuesSpeed
            }), $(settings.issuesDiv + " li").animate({
                opacity: settings.issuesTransparency
            }, {
                queue: !1,
                duration: settings.issuesSpeed
            }).removeClass(settings.issuesSelectedClass).eq(currentIndex).addClass(settings.issuesSelectedClass).fadeTo(settings.issuesTransparencySpeed, 1), 
            1 == howManyDates ? $(settings.prevButton + "," + settings.nextButton).fadeOut("fast") : 2 == howManyDates ? $(settings.issuesDiv + " li:first-child").hasClass(settings.issuesSelectedClass) ? ($(settings.prevButton).fadeOut("fast"), 
            $(settings.nextButton).fadeIn("fast")) : $(settings.issuesDiv + " li:last-child").hasClass(settings.issuesSelectedClass) && ($(settings.nextButton).fadeOut("fast"), 
            $(settings.prevButton).fadeIn("fast")) : $(settings.issuesDiv + " li:first-child").hasClass(settings.issuesSelectedClass) ? ($(settings.nextButton).fadeIn("fast"), 
            $(settings.prevButton).fadeOut("fast")) : $(settings.issuesDiv + " li:last-child").hasClass(settings.issuesSelectedClass) ? ($(settings.prevButton).fadeIn("fast"), 
            $(settings.nextButton).fadeOut("fast")) : $(settings.nextButton + "," + settings.prevButton).fadeIn("slow"), 
            $(settings.datesDiv + " a").removeClass(settings.datesSelectedClass), $(this).addClass(settings.datesSelectedClass), 
            "horizontal" == settings.orientation ? $(settings.datesDiv).animate({
                marginLeft: defaultPositionDates - widthDate * currentIndex
            }, {
                queue: !1,
                duration: "settings.datesSpeed"
            }) : "vertical" == settings.orientation && $(settings.datesDiv).animate({
                marginTop: defaultPositionDates - heightDate * currentIndex
            }, {
                queue: !1,
                duration: "settings.datesSpeed"
            });
        }), $(settings.nextButton).bind("click", function(event) {
            event.preventDefault();
            var currentIndex = $(settings.issuesDiv).find("li." + settings.issuesSelectedClass).index();
            if ("horizontal" == settings.orientation) {
                currentPositionIssues = parseInt($(settings.issuesDiv).css("marginLeft").substring(0, $(settings.issuesDiv).css("marginLeft").indexOf("px"))), 
                parseInt($(settings.datesDiv).css("marginLeft").substring(0, $(settings.datesDiv).css("marginLeft").indexOf("px")));
                currentPositionIssues <= -(widthIssue * howManyIssues - widthIssue) ? ($(settings.issuesDiv).stop(), 
                $(settings.datesDiv + " li:last-child a").click()) : $(settings.issuesDiv).is(":animated") || $(settings.datesDiv + " li").eq(currentIndex + 1).find("a").trigger("click");
            } else if ("vertical" == settings.orientation) {
                var currentPositionIssues;
                currentPositionIssues = parseInt($(settings.issuesDiv).css("marginTop").substring(0, $(settings.issuesDiv).css("marginTop").indexOf("px"))), 
                parseInt($(settings.datesDiv).css("marginTop").substring(0, $(settings.datesDiv).css("marginTop").indexOf("px")));
                currentPositionIssues <= -(heightIssue * howManyIssues - heightIssue) ? ($(settings.issuesDiv).stop(), 
                $(settings.datesDiv + " li:last-child a").click()) : $(settings.issuesDiv).is(":animated") || $(settings.datesDiv + " li").eq(currentIndex + 1).find("a").trigger("click");
            }
            1 == howManyDates ? $(settings.prevButton + "," + settings.nextButton).fadeOut("fast") : 2 == howManyDates ? $(settings.issuesDiv + " li:first-child").hasClass(settings.issuesSelectedClass) ? ($(settings.prevButton).fadeOut("fast"), 
            $(settings.nextButton).fadeIn("fast")) : $(settings.issuesDiv + " li:last-child").hasClass(settings.issuesSelectedClass) && ($(settings.nextButton).fadeOut("fast"), 
            $(settings.prevButton).fadeIn("fast")) : $(settings.issuesDiv + " li:first-child").hasClass(settings.issuesSelectedClass) ? $(settings.prevButton).fadeOut("fast") : $(settings.issuesDiv + " li:last-child").hasClass(settings.issuesSelectedClass) ? $(settings.nextButton).fadeOut("fast") : $(settings.nextButton + "," + settings.prevButton).fadeIn("slow");
        }), $(settings.prevButton).click(function(event) {
            event.preventDefault();
            var currentIndex = $(settings.issuesDiv).find("li." + settings.issuesSelectedClass).index();
            if ("horizontal" == settings.orientation) {
                currentPositionIssues = parseInt($(settings.issuesDiv).css("marginLeft").substring(0, $(settings.issuesDiv).css("marginLeft").indexOf("px"))), 
                parseInt($(settings.datesDiv).css("marginLeft").substring(0, $(settings.datesDiv).css("marginLeft").indexOf("px")));
                0 <= currentPositionIssues ? ($(settings.issuesDiv).stop(), $(settings.datesDiv + " li:first-child a").click()) : $(settings.issuesDiv).is(":animated") || $(settings.datesDiv + " li").eq(currentIndex - 1).find("a").trigger("click");
            } else if ("vertical" == settings.orientation) {
                var currentPositionIssues;
                currentPositionIssues = parseInt($(settings.issuesDiv).css("marginTop").substring(0, $(settings.issuesDiv).css("marginTop").indexOf("px"))), 
                parseInt($(settings.datesDiv).css("marginTop").substring(0, $(settings.datesDiv).css("marginTop").indexOf("px")));
                0 <= currentPositionIssues ? ($(settings.issuesDiv).stop(), $(settings.datesDiv + " li:first-child a").click()) : $(settings.issuesDiv).is(":animated") || $(settings.datesDiv + " li").eq(currentIndex - 1).find("a").trigger("click");
            }
            1 == howManyDates ? $(settings.prevButton + "," + settings.nextButton).fadeOut("fast") : 2 == howManyDates ? $(settings.issuesDiv + " li:first-child").hasClass(settings.issuesSelectedClass) ? ($(settings.prevButton).fadeOut("fast"), 
            $(settings.nextButton).fadeIn("fast")) : $(settings.issuesDiv + " li:last-child").hasClass(settings.issuesSelectedClass) && ($(settings.nextButton).fadeOut("fast"), 
            $(settings.prevButton).fadeIn("fast")) : $(settings.issuesDiv + " li:first-child").hasClass(settings.issuesSelectedClass) ? $(settings.prevButton).fadeOut("fast") : $(settings.issuesDiv + " li:last-child").hasClass(settings.issuesSelectedClass) ? $(settings.nextButton).fadeOut("fast") : $(settings.nextButton + "," + settings.prevButton).fadeIn("slow");
        }), "true" == settings.arrowKeys && ("horizontal" == settings.orientation ? $(document).keydown(function(event) {
            39 == event.keyCode && $(settings.nextButton).click(), 37 == event.keyCode && $(settings.prevButton).click();
        }) : "vertical" == settings.orientation && $(document).keydown(function(event) {
            40 == event.keyCode && $(settings.nextButton).click(), 38 == event.keyCode && $(settings.prevButton).click();
        })), $(settings.datesDiv + " li").eq(settings.startAt - 1).find("a").trigger("click"), 
        "true" == settings.autoPlay && setInterval("autoPlay()", settings.autoPlayPause);
    });
}, function(z) {
    "use strict";
    function M(a, b) {
        return b = b || Error, function() {
            var c, d = arguments[0];
            for (c = "[" + (a ? a + ":" : "") + d + "] http://errors.angularjs.org/1.6.1/" + (a ? a + "/" : "") + d, 
            d = 1; d < arguments.length; d++) {
                var e;
                c = c + (1 == d ? "?" : "&") + "p" + (d - 1) + "=", c += encodeURIComponent(e = "function" == typeof (e = arguments[d]) ? e.toString().replace(/ \{[\s\S]*$/, "") : void 0 === e ? "undefined" : "string" != typeof e ? JSON.stringify(e) : e);
            }
            return new b(c);
        };
    }
    function ta(a) {
        if (null == a || Wa(a)) return !1;
        if (C(a) || E(a) || D && a instanceof D) return !0;
        var b = "length" in Object(a) && a.length;
        return Y(b) && (0 <= b && (b - 1 in a || a instanceof Array) || "function" == typeof a.item);
    }
    function q(a, b, d) {
        var c, f;
        if (a) if (y(a)) for (c in a) "prototype" !== c && "length" !== c && "name" !== c && a.hasOwnProperty(c) && b.call(d, a[c], c, a); else if (C(a) || ta(a)) {
            var e = "object" != typeof a;
            for (c = 0, f = a.length; c < f; c++) (e || c in a) && b.call(d, a[c], c, a);
        } else if (a.forEach && a.forEach !== q) a.forEach(b, d, a); else if (Dc(a)) for (c in a) b.call(d, a[c], c, a); else if ("function" == typeof a.hasOwnProperty) for (c in a) a.hasOwnProperty(c) && b.call(d, a[c], c, a); else for (c in a) va.call(a, c) && b.call(d, a[c], c, a);
        return a;
    }
    function Ec(a, b, d) {
        for (var c = Object.keys(a).sort(), f = 0; f < c.length; f++) b.call(d, a[c[f]], c[f]);
        return c;
    }
    function Fc(a) {
        return function(b, d) {
            a(d, b);
        };
    }
    function Sb(a, b, d) {
        for (var c = a.$$hashKey, f = 0, e = b.length; f < e; ++f) {
            var g = b[f];
            if (F(g) || y(g)) for (var h = Object.keys(g), k = 0, l = h.length; k < l; k++) {
                var m = h[k], n = g[m];
                d && F(n) ? fa(n) ? a[m] = new Date(n.valueOf()) : Xa(n) ? a[m] = new RegExp(n) : n.nodeName ? a[m] = n.cloneNode(!0) : Tb(n) ? a[m] = n.clone() : (F(a[m]) || (a[m] = C(n) ? [] : {}), 
                Sb(a[m], [ n ], !0)) : a[m] = n;
            }
        }
        return c ? a.$$hashKey = c : delete a.$$hashKey, a;
    }
    function R(a) {
        return Sb(a, wa.call(arguments, 1), !1);
    }
    function je(a) {
        return Sb(a, wa.call(arguments, 1), !0);
    }
    function Z(a) {
        return parseInt(a, 10);
    }
    function Ub(a, b) {
        return R(Object.create(a), b);
    }
    function w() {}
    function Ya(a) {
        return a;
    }
    function ma(a) {
        return function() {
            return a;
        };
    }
    function Vb(a) {
        return y(a.toString) && a.toString !== na;
    }
    function x(a) {
        return void 0 === a;
    }
    function v(a) {
        return void 0 !== a;
    }
    function F(a) {
        return null !== a && "object" == typeof a;
    }
    function Dc(a) {
        return null !== a && "object" == typeof a && !Gc(a);
    }
    function E(a) {
        return "string" == typeof a;
    }
    function Y(a) {
        return "number" == typeof a;
    }
    function fa(a) {
        return "[object Date]" === na.call(a);
    }
    function y(a) {
        return "function" == typeof a;
    }
    function Xa(a) {
        return "[object RegExp]" === na.call(a);
    }
    function Wa(a) {
        return a && a.window === a;
    }
    function Za(a) {
        return a && a.$evalAsync && a.$watch;
    }
    function Ia(a) {
        return "boolean" == typeof a;
    }
    function Tb(a) {
        return !(!a || !(a.nodeName || a.prop && a.attr && a.find));
    }
    function xa(a) {
        return P(a.nodeName || a[0] && a[0].nodeName);
    }
    function $a(a, b) {
        var d = a.indexOf(b);
        return 0 <= d && a.splice(d, 1), d;
    }
    function Fa(a, b) {
        function d(a, b) {
            var e, d = b.$$hashKey;
            if (C(a)) {
                e = 0;
                for (var f = a.length; e < f; e++) b.push(c(a[e]));
            } else if (Dc(a)) for (e in a) b[e] = c(a[e]); else if (a && "function" == typeof a.hasOwnProperty) for (e in a) a.hasOwnProperty(e) && (b[e] = c(a[e])); else for (e in a) va.call(a, e) && (b[e] = c(a[e]));
            return d ? b.$$hashKey = d : delete b.$$hashKey, b;
        }
        function c(a) {
            if (!F(a)) return a;
            if (-1 !== (b = e.indexOf(a))) return g[b];
            if (Wa(a) || Za(a)) throw Ga("cpws");
            var b = !1, c = f(a);
            return void 0 === c && (c = C(a) ? [] : Object.create(Gc(a)), b = !0), e.push(a), 
            g.push(c), b ? d(a, c) : c;
        }
        function f(a) {
            switch (na.call(a)) {
              case "[object Int8Array]":
              case "[object Int16Array]":
              case "[object Int32Array]":
              case "[object Float32Array]":
              case "[object Float64Array]":
              case "[object Uint8Array]":
              case "[object Uint8ClampedArray]":
              case "[object Uint16Array]":
              case "[object Uint32Array]":
                return new a.constructor(c(a.buffer), a.byteOffset, a.length);

              case "[object ArrayBuffer]":
                if (a.slice) return a.slice(0);
                var b = new ArrayBuffer(a.byteLength);
                return new Uint8Array(b).set(new Uint8Array(a)), b;

              case "[object Boolean]":
              case "[object Number]":
              case "[object String]":
              case "[object Date]":
                return new a.constructor(a.valueOf());

              case "[object RegExp]":
                return (b = new RegExp(a.source, a.toString().match(/[^/]*$/)[0])).lastIndex = a.lastIndex, 
                b;

              case "[object Blob]":
                return new a.constructor([ a ], {
                    type: a.type
                });
            }
            if (y(a.cloneNode)) return a.cloneNode(!0);
        }
        var e = [], g = [];
        if (b) {
            if (function(a) {
                return a && Y(a.length) && le.test(na.call(a));
            }(b) || "[object ArrayBuffer]" === na.call(b)) throw Ga("cpta");
            if (a === b) throw Ga("cpi");
            return C(b) ? b.length = 0 : q(b, function(a, d) {
                "$$hashKey" !== d && delete b[d];
            }), e.push(a), g.push(b), d(a, b);
        }
        return c(a);
    }
    function qa(a, b) {
        if (a === b) return !0;
        if (null === a || null === b) return !1;
        if (a != a && b != b) return !0;
        var c, d = typeof a;
        if (d === typeof b && "object" === d) {
            if (!C(a)) {
                if (fa(a)) return !!fa(b) && qa(a.getTime(), b.getTime());
                if (Xa(a)) return !!Xa(b) && a.toString() === b.toString();
                if (Za(a) || Za(b) || Wa(a) || Wa(b) || C(b) || fa(b) || Xa(b)) return !1;
                for (c in d = W(), a) if ("$" !== c.charAt(0) && !y(a[c])) {
                    if (!qa(a[c], b[c])) return !1;
                    d[c] = !0;
                }
                for (c in b) if (!(c in d) && "$" !== c.charAt(0) && v(b[c]) && !y(b[c])) return !1;
                return !0;
            }
            if (!C(b)) return !1;
            if ((d = a.length) === b.length) {
                for (c = 0; c < d; c++) if (!qa(a[c], b[c])) return !1;
                return !0;
            }
        }
        return !1;
    }
    function ab(a, b, d) {
        return a.concat(wa.call(b, d));
    }
    function bb(a, b) {
        var d = 2 < arguments.length ? wa.call(arguments, 2) : [];
        return !y(b) || b instanceof RegExp ? b : d.length ? function() {
            return arguments.length ? b.apply(a, ab(d, arguments, 0)) : b.apply(a, d);
        } : function() {
            return arguments.length ? b.apply(a, arguments) : b.call(a);
        };
    }
    function Hc(a, b) {
        var d = b;
        return "string" == typeof a && "$" === a.charAt(0) && "$" === a.charAt(1) ? d = void 0 : Wa(b) ? d = "$WINDOW" : b && z.document === b ? d = "$DOCUMENT" : Za(b) && (d = "$SCOPE"), 
        d;
    }
    function cb(a, b) {
        if (!x(a)) return Y(b) || (b = b ? 2 : null), JSON.stringify(a, Hc, b);
    }
    function Ic(a) {
        return E(a) ? JSON.parse(a) : a;
    }
    function Jc(a, b) {
        a = a.replace(ne, "");
        var d = Date.parse("Jan 01, 1970 00:00:00 " + a) / 6e4;
        return ga(d) ? b : d;
    }
    function Wb(a, b, d) {
        d = d ? -1 : 1;
        var c = a.getTimezoneOffset();
        return d *= (b = Jc(b, c)) - c, (a = new Date(a.getTime())).setMinutes(a.getMinutes() + d), 
        a;
    }
    function ya(a) {
        a = D(a).clone();
        try {
            a.empty();
        } catch (b) {}
        var d = D("<div>").append(a).html();
        try {
            return a[0].nodeType === Ja ? P(d) : d.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/, function(a, b) {
                return "<" + P(b);
            });
        } catch (c) {
            return P(d);
        }
    }
    function Kc(a) {
        try {
            return decodeURIComponent(a);
        } catch (b) {}
    }
    function Lc(a) {
        var b = {};
        return q((a || "").split("&"), function(a) {
            var c, f, e;
            a && (f = a = a.replace(/\+/g, "%20"), -1 !== (c = a.indexOf("=")) && (f = a.substring(0, c), 
            e = a.substring(c + 1)), v(f = Kc(f)) && (e = !v(e) || Kc(e), va.call(b, f) ? C(b[f]) ? b[f].push(e) : b[f] = [ b[f], e ] : b[f] = e));
        }), b;
    }
    function Xb(a) {
        var b = [];
        return q(a, function(a, c) {
            C(a) ? q(a, function(a) {
                b.push(ka(c, !0) + (!0 === a ? "" : "=" + ka(a, !0)));
            }) : b.push(ka(c, !0) + (!0 === a ? "" : "=" + ka(a, !0)));
        }), b.length ? b.join("&") : "";
    }
    function db(a) {
        return ka(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
    }
    function ka(a, b) {
        return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+");
    }
    function pe(a, b) {
        var d, c, f = {};
        q(Ka, function(b) {
            b += "app", !d && a.hasAttribute && a.hasAttribute(b) && (c = (d = a).getAttribute(b));
        }), q(Ka, function(b) {
            var f;
            b += "app", !d && (f = a.querySelector("[" + b.replace(":", "\\:") + "]")) && (c = (d = f).getAttribute(b));
        }), d && (qe ? (f.strictDi = null !== function(a, b) {
            var d, c, f = Ka.length;
            for (c = 0; c < f; ++c) if (d = Ka[c] + b, E(d = a.getAttribute(d))) return d;
            return null;
        }(d, "strict-di"), b(d, c ? [ c ] : [], f)) : z.console.error("Angular: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."));
    }
    function Mc(a, b, d) {
        F(d) || (d = {}), d = R({
            strictDi: !1
        }, d);
        var c = function() {
            if ((a = D(a)).injector()) {
                var c = a[0] === z.document ? "document" : ya(a);
                throw Ga("btstrpd", c.replace(/</, "&lt;").replace(/>/, "&gt;"));
            }
            return (b = b || []).unshift([ "$provide", function(b) {
                b.value("$rootElement", a);
            } ]), d.debugInfoEnabled && b.push([ "$compileProvider", function(a) {
                a.debugInfoEnabled(!0);
            } ]), b.unshift("ng"), (c = eb(b, d.strictDi)).invoke([ "$rootScope", "$rootElement", "$compile", "$injector", function(a, b, d, c) {
                a.$apply(function() {
                    b.data("$injector", c), d(b)(a);
                });
            } ]), c;
        }, f = /^NG_ENABLE_DEBUG_INFO!/, e = /^NG_DEFER_BOOTSTRAP!/;
        if (z && f.test(z.name) && (d.debugInfoEnabled = !0, z.name = z.name.replace(f, "")), 
        z && !e.test(z.name)) return c();
        z.name = z.name.replace(e, ""), $.resumeBootstrap = function(a) {
            return q(a, function(a) {
                b.push(a);
            }), c();
        }, y($.resumeDeferredBootstrap) && $.resumeDeferredBootstrap();
    }
    function re() {
        z.name = "NG_ENABLE_DEBUG_INFO!" + z.name, z.location.reload();
    }
    function se(a) {
        if (!(a = $.element(a).injector())) throw Ga("test");
        return a.get("$$testability");
    }
    function Nc(a, b) {
        return b = b || "_", a.replace(te, function(a, c) {
            return (c ? b : "") + a.toLowerCase();
        });
    }
    function fb(a, b, d) {
        if (!a) throw Ga("areq", b || "?", d || "required");
        return a;
    }
    function tb(a, b, d) {
        return d && C(a) && (a = a[a.length - 1]), fb(y(a), b, "not a function, got " + (a && "object" == typeof a ? a.constructor.name || "Object" : typeof a)), 
        a;
    }
    function Pa(a, b) {
        if ("hasOwnProperty" === a) throw Ga("badname", b);
    }
    function Pc(a, b, d) {
        if (!b) return a;
        for (var c, f = a, e = (b = b.split(".")).length, g = 0; g < e; g++) c = b[g], a && (a = (f = a)[c]);
        return !d && y(a) ? bb(f, a) : a;
    }
    function ub(a) {
        for (var c, b = a[0], d = a[a.length - 1], f = 1; b !== d && (b = b.nextSibling); f++) (c || a[f] !== b) && (c || (c = D(wa.call(a, 0, f))), 
        c.push(b));
        return c || a;
    }
    function W() {
        return Object.create(null);
    }
    function Yb(a) {
        if (null == a) return "";
        switch (typeof a) {
          case "string":
            break;

          case "number":
            a = "" + a;
            break;

          default:
            a = !Vb(a) || C(a) || fa(a) ? cb(a) : a.toString();
        }
        return a;
    }
    function ra(a, b) {
        if (C(a)) {
            b = b || [];
            for (var d = 0, c = a.length; d < c; d++) b[d] = a[d];
        } else if (F(a)) for (d in b = b || {}, a) "$" === d.charAt(0) && "$" === d.charAt(1) || (b[d] = a[d]);
        return b || a;
    }
    function we(a) {
        var b = [];
        return JSON.stringify(a, function(a, c) {
            if (F(c = Hc(a, c))) {
                if (0 <= b.indexOf(c)) return "...";
                b.push(c);
            }
            return c;
        });
    }
    function gb(a, b) {
        return b.toUpperCase();
    }
    function xb(a) {
        return a.replace(Wf, gb);
    }
    function Yc(a) {
        return 1 === (a = a.nodeType) || !a || 9 === a;
    }
    function Zc(a, b) {
        var d, c, f = b.createDocumentFragment(), e = [];
        if ($b.test(a)) {
            for (d = f.appendChild(b.createElement("div")), c = (Xf.exec(a) || [ "", "" ])[1].toLowerCase(), 
            c = ha[c] || ha._default, d.innerHTML = c[1] + a.replace(Yf, "<$1></$2>") + c[2], 
            c = c[0]; c--; ) d = d.lastChild;
            e = ab(e, d.childNodes), (d = f.firstChild).textContent = "";
        } else e.push(b.createTextNode(a));
        return f.textContent = "", f.innerHTML = "", q(e, function(a) {
            f.appendChild(a);
        }), f;
    }
    function X(a) {
        if (a instanceof X) return a;
        var b, d;
        if (E(a) && (a = S(a), b = !0), !(this instanceof X)) {
            if (b && "<" !== a.charAt(0)) throw ac("nosel");
            return new X(a);
        }
        b ? (b = z.document, bc(this, a = (d = Zf.exec(a)) ? [ b.createElement(d[1]) ] : (d = Zc(a, b)) ? d.childNodes : [])) : y(a) ? $c(a) : bc(this, a);
    }
    function cc(a) {
        return a.cloneNode(!0);
    }
    function yb(a, b) {
        if (b || hb(a), a.querySelectorAll) for (var d = a.querySelectorAll("*"), c = 0, f = d.length; c < f; c++) hb(d[c]);
    }
    function ad(a, b, d, c) {
        if (v(c)) throw ac("offargs");
        var f = (c = zb(a)) && c.events, e = c && c.handle;
        if (e) if (b) {
            var g = function(b) {
                var c = f[b];
                v(d) && $a(c || [], d), v(d) && c && 0 < c.length || (a.removeEventListener(b, e), 
                delete f[b]);
            };
            q(b.split(" "), function(a) {
                g(a), Ab[a] && g(Ab[a]);
            });
        } else for (b in f) "$destroy" !== b && a.removeEventListener(b, e), delete f[b];
    }
    function hb(a, b) {
        var d = a.ng339, c = d && ib[d];
        c && (b ? delete c.data[b] : (c.handle && (c.events.$destroy && c.handle({}, "$destroy"), 
        ad(a)), delete ib[d], a.ng339 = void 0));
    }
    function zb(a, b) {
        var d = (d = a.ng339) && ib[d];
        return b && !d && (a.ng339 = d = ++$f, d = ib[d] = {
            events: {},
            data: {},
            handle: void 0
        }), d;
    }
    function dc(a, b, d) {
        if (Yc(a)) {
            var c, f = v(d), e = !f && b && !F(b), g = !b;
            if (a = (a = zb(a, !e)) && a.data, f) a[xb(b)] = d; else {
                if (g) return a;
                if (e) return a && a[xb(b)];
                for (c in b) a[xb(c)] = b[c];
            }
        }
    }
    function Bb(a, b) {
        return !!a.getAttribute && -1 < (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ");
    }
    function Cb(a, b) {
        b && a.setAttribute && q(b.split(" "), function(b) {
            a.setAttribute("class", S((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + S(b) + " ", " ")));
        });
    }
    function Db(a, b) {
        if (b && a.setAttribute) {
            var d = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            q(b.split(" "), function(a) {
                a = S(a), -1 === d.indexOf(" " + a + " ") && (d += a + " ");
            }), a.setAttribute("class", S(d));
        }
    }
    function bc(a, b) {
        if (b) if (b.nodeType) a[a.length++] = b; else {
            var d = b.length;
            if ("number" == typeof d && b.window !== b) {
                if (d) for (var c = 0; c < d; c++) a[a.length++] = b[c];
            } else a[a.length++] = b;
        }
    }
    function bd(a, b) {
        return Eb(a, "$" + (b || "ngController") + "Controller");
    }
    function Eb(a, b, d) {
        for (9 === a.nodeType && (a = a.documentElement), b = C(b) ? b : [ b ]; a; ) {
            for (var c = 0, f = b.length; c < f; c++) if (v(d = D.data(a, b[c]))) return d;
            a = a.parentNode || 11 === a.nodeType && a.host;
        }
    }
    function cd(a) {
        for (yb(a, !0); a.firstChild; ) a.removeChild(a.firstChild);
    }
    function Fb(a, b) {
        b || yb(a);
        var d = a.parentNode;
        d && d.removeChild(a);
    }
    function $c(a) {
        function b() {
            z.document.removeEventListener("DOMContentLoaded", b), z.removeEventListener("load", b), 
            a();
        }
        "complete" === z.document.readyState ? z.setTimeout(a) : (z.document.addEventListener("DOMContentLoaded", b), 
        z.addEventListener("load", b));
    }
    function dd(a, b) {
        var d = Gb[b.toLowerCase()];
        return d && ed[xa(a)] && d;
    }
    function cg(a, b, d) {
        d.call(a, b);
    }
    function dg(a, b, d) {
        var c = b.relatedTarget;
        c && (c === a || eg.call(a, c)) || d.call(a, b);
    }
    function Tf() {
        this.$get = function() {
            return R(X, {
                hasClass: function(a, b) {
                    return a.attr && (a = a[0]), Bb(a, b);
                },
                addClass: function(a, b) {
                    return a.attr && (a = a[0]), Db(a, b);
                },
                removeClass: function(a, b) {
                    return a.attr && (a = a[0]), Cb(a, b);
                }
            });
        };
    }
    function la(a, b) {
        var d = a && a.$$hashKey;
        return d ? ("function" == typeof d && (d = a.$$hashKey()), d) : "function" === (d = typeof a) || "object" === d && null !== a ? a.$$hashKey = d + ":" + (b || function() {
            return ++rb;
        })() : d + ":" + a;
    }
    function Qa(a, b) {
        if (b) {
            var d = 0;
            this.nextUid = function() {
                return ++d;
            };
        }
        q(a, this.put, this);
    }
    function fd(a) {
        return (a = (Function.prototype.toString.call(a) + " ").replace(fg, "")).match(gg) || a.match(hg);
    }
    function eb(a, b) {
        function d(a) {
            return function(b, c) {
                if (!F(b)) return a(b, c);
                q(b, Fc(a));
            };
        }
        function c(a, b) {
            if (Pa(a, "service"), (y(b) || C(b)) && (b = p.instantiate(b)), !b.$get) throw da("pget", a);
            return n[a + "Provider"] = b;
        }
        function e(a, b, d) {
            return c(a, {
                $get: !1 !== d ? function(a, b) {
                    return function() {
                        var c = O.invoke(b, this);
                        if (x(c)) throw da("undef", a);
                        return c;
                    };
                }(a, b) : b
            });
        }
        function h(a, c) {
            function d(b, e) {
                if (a.hasOwnProperty(b)) {
                    if (a[b] === k) throw da("cdep", b + " <- " + l.join(" <- "));
                    return a[b];
                }
                try {
                    return l.unshift(b), a[b] = k, a[b] = c(b, e), a[b];
                } catch (f) {
                    throw a[b] === k && delete a[b], f;
                } finally {
                    l.shift();
                }
            }
            function e(a, c, f) {
                for (var g = [], h = 0, k = (a = eb.$$annotate(a, b, f)).length; h < k; h++) {
                    var l = a[h];
                    if ("string" != typeof l) throw da("itkn", l);
                    g.push(c && c.hasOwnProperty(l) ? c[l] : d(l, f));
                }
                return g;
            }
            return {
                invoke: function(a, b, c, d) {
                    if ("string" == typeof c && (d = c, c = null), c = e(a, c, d), C(a) && (a = a[a.length - 1]), 
                    d = a, La || "function" != typeof d) d = !1; else {
                        var f = d.$$ngIsClass;
                        Ia(f) || (f = d.$$ngIsClass = /^(?:class\b|constructor\()/.test(Function.prototype.toString.call(d) + " ")), 
                        d = f;
                    }
                    return d ? (c.unshift(null), new (Function.prototype.bind.apply(a, c))()) : a.apply(b, c);
                },
                instantiate: function(a, b, c) {
                    var d = C(a) ? a[a.length - 1] : a;
                    return (a = e(a, b, c)).unshift(null), new (Function.prototype.bind.apply(d, a))();
                },
                get: d,
                annotate: eb.$$annotate,
                has: function(b) {
                    return n.hasOwnProperty(b + "Provider") || a.hasOwnProperty(b);
                }
            };
        }
        b = !0 === b;
        var k = {}, l = [], m = new Qa([], !0), n = {
            $provide: {
                provider: d(c),
                factory: d(e),
                service: d(function(a, b) {
                    return e(a, [ "$injector", function(a) {
                        return a.instantiate(b);
                    } ]);
                }),
                value: d(function(a, b) {
                    return e(a, ma(b), !1);
                }),
                constant: d(function(a, b) {
                    Pa(a, "constant"), n[a] = b, r[a] = b;
                }),
                decorator: function(a, b) {
                    var c = p.get(a + "Provider"), d = c.$get;
                    c.$get = function() {
                        var a = O.invoke(d, c);
                        return O.invoke(b, null, {
                            $delegate: a
                        });
                    };
                }
            }
        }, p = n.$injector = h(n, function(a, b) {
            throw $.isString(b) && l.push(b), da("unpr", l.join(" <- "));
        }), r = {}, J = h(r, function(a, b) {
            var c = p.get(a + "Provider", b);
            return O.invoke(c.$get, c, void 0, a);
        }), O = J;
        n.$injectorProvider = {
            $get: ma(J)
        };
        var u = function g(a) {
            fb(x(a) || C(a), "modulesToLoad", "not an array");
            var c, b = [];
            return q(a, function(a) {
                function d(a) {
                    var b, c;
                    for (b = 0, c = a.length; b < c; b++) {
                        var e = a[b], f = p.get(e[0]);
                        f[e[1]].apply(f, e[2]);
                    }
                }
                if (!m.get(a)) {
                    m.put(a, !0);
                    try {
                        E(a) ? (c = Zb(a), b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), 
                        d(c._configBlocks)) : y(a) ? b.push(p.invoke(a)) : C(a) ? b.push(p.invoke(a)) : tb(a, "module");
                    } catch (e) {
                        throw C(a) && (a = a[a.length - 1]), e.message && e.stack && -1 === e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), 
                        da("modulerr", a, e.stack || e.message || e);
                    }
                }
            }), b;
        }(a);
        return (O = J.get("$injector")).strictDi = b, q(u, function(a) {
            a && O.invoke(a);
        }), O;
    }
    function hf() {
        var a = !0;
        this.disableAutoScrolling = function() {
            a = !1;
        }, this.$get = [ "$window", "$location", "$rootScope", function(b, d, c) {
            function e(a) {
                var c;
                a ? (a.scrollIntoView(), y(c = g.yOffset) ? c = c() : Tb(c) ? (c = c[0], c = "fixed" !== b.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : Y(c) || (c = 0), 
                c && (a = a.getBoundingClientRect().top, b.scrollBy(0, a - c))) : b.scrollTo(0, 0);
            }
            function g(a) {
                var b;
                (a = E(a) ? a : Y(a) ? a.toString() : d.hash()) ? (b = h.getElementById(a)) ? e(b) : (b = function(a) {
                    var b = null;
                    return Array.prototype.some.call(a, function(a) {
                        if ("a" === xa(a)) return b = a, !0;
                    }), b;
                }(h.getElementsByName(a))) ? e(b) : "top" === a && e(null) : e(null);
            }
            var h = b.document;
            return a && c.$watch(function() {
                return d.hash();
            }, function(a, b) {
                a === b && "" === a || function(a, b) {
                    "complete" === (b = b || z).document.readyState ? b.setTimeout(a) : D(b).on("load", a);
                }(function() {
                    c.$evalAsync(g);
                });
            }), g;
        } ];
    }
    function jb(a, b) {
        return a || b ? a ? b ? (C(a) && (a = a.join(" ")), C(b) && (b = b.join(" ")), a + " " + b) : a : b : "";
    }
    function Aa(a) {
        return F(a) ? a : {};
    }
    function kg(a, b, d, c) {
        function f(a) {
            try {
                a.apply(null, wa.call(arguments, 1));
            } finally {
                if (0 === --J) for (;O.length; ) try {
                    O.pop()();
                } catch (b) {
                    d.error(b);
                }
            }
        }
        function e() {
            ia = null, g(), h();
        }
        function g() {
            qa(u = x(u = A()) ? null : u, B) && (u = B), B = u;
        }
        function h() {
            U === k.url() && H === u || (U = k.url(), H = u, q(K, function(a) {
                a(k.url(), u);
            }));
        }
        var k = this, l = a.location, m = a.history, n = a.setTimeout, p = a.clearTimeout, r = {};
        k.isMock = !1;
        var J = 0, O = [];
        k.$$completeOutstandingRequest = f, k.$$incOutstandingRequestCount = function() {
            J++;
        }, k.notifyWhenNoOutstandingRequests = function(a) {
            0 === J ? a() : O.push(a);
        };
        var u, H, U = l.href, t = b.find("base"), ia = null, A = c.history ? function() {
            try {
                return m.state;
            } catch (a) {}
        } : w;
        g(), H = u, k.url = function(b, d, e) {
            if (x(e) && (e = null), l !== a.location && (l = a.location), m !== a.history && (m = a.history), 
            b) {
                var f = H === e;
                if (U === b && (!c.history || f)) return k;
                var h = U && Ba(U) === Ba(b);
                return U = b, H = e, !c.history || h && f ? (h || (ia = b), d ? l.replace(b) : h ? (d = l, 
                e = -1 === (e = b.indexOf("#")) ? "" : b.substr(e), d.hash = e) : l.href = b, l.href !== b && (ia = b)) : (m[d ? "replaceState" : "pushState"](e, "", b), 
                g(), H = u), ia && (ia = b), k;
            }
            return ia || l.href.replace(/%27/g, "'");
        }, k.state = function() {
            return u;
        };
        var K = [], I = !1, B = null;
        k.onUrlChange = function(b) {
            return I || (c.history && D(a).on("popstate", e), D(a).on("hashchange", e), I = !0), 
            K.push(b), b;
        }, k.$$applicationDestroyed = function() {
            D(a).off("hashchange popstate", e);
        }, k.$$checkUrlChange = h, k.baseHref = function() {
            var a = t.attr("href");
            return a ? a.replace(/^(https?:)?\/\/[^/]*/, "") : "";
        }, k.defer = function(a, b) {
            var c;
            return J++, c = n(function() {
                delete r[c], f(a);
            }, b || 0), r[c] = !0, c;
        }, k.defer.cancel = function(a) {
            return !!r[a] && (delete r[a], p(a), f(w), !0);
        };
    }
    function pf() {
        this.$get = [ "$window", "$log", "$sniffer", "$document", function(a, b, d, c) {
            return new kg(a, c, b, d);
        } ];
    }
    function qf() {
        this.$get = function() {
            function a(a, c) {
                function f(a) {
                    a !== n && (p ? p === a && (p = a.n) : p = a, e(a.n, a.p), e(a, n), (n = a).n = null);
                }
                function e(a, b) {
                    a !== b && (a && (a.p = b), b && (b.n = a));
                }
                if (a in b) throw M("$cacheFactory")("iid", a);
                var g = 0, h = R({}, c, {
                    id: a
                }), k = W(), l = c && c.capacity || Number.MAX_VALUE, m = W(), n = null, p = null;
                return b[a] = {
                    put: function(a, b) {
                        if (!x(b)) {
                            if (l < Number.MAX_VALUE) f(m[a] || (m[a] = {
                                key: a
                            }));
                            return a in k || g++, k[a] = b, l < g && this.remove(p.key), b;
                        }
                    },
                    get: function(a) {
                        if (l < Number.MAX_VALUE) {
                            var b = m[a];
                            if (!b) return;
                            f(b);
                        }
                        return k[a];
                    },
                    remove: function(a) {
                        if (l < Number.MAX_VALUE) {
                            var b = m[a];
                            if (!b) return;
                            b === n && (n = b.p), b === p && (p = b.n), e(b.n, b.p), delete m[a];
                        }
                        a in k && (delete k[a], g--);
                    },
                    removeAll: function() {
                        k = W(), g = 0, m = W(), n = p = null;
                    },
                    destroy: function() {
                        m = h = k = null, delete b[a];
                    },
                    info: function() {
                        return R({}, h, {
                            size: g
                        });
                    }
                };
            }
            var b = {};
            return a.info = function() {
                var a = {};
                return q(b, function(b, f) {
                    a[f] = b.info();
                }), a;
            }, a.get = function(a) {
                return b[a];
            }, a;
        };
    }
    function Nf() {
        this.$get = [ "$cacheFactory", function(a) {
            return a("templates");
        } ];
    }
    function Qc(a, b) {
        function d(a, b, c) {
            var d = /^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/, e = W();
            return q(a, function(a, f) {
                if (a in n) e[f] = n[a]; else {
                    var g = a.match(d);
                    if (!g) throw ea("iscp", b, f, a, c ? "controller bindings definition" : "isolate scope definition");
                    e[f] = {
                        mode: g[1][0],
                        collection: "*" === g[2],
                        optional: "?" === g[3],
                        attrName: g[4] || f
                    }, g[4] && (n[a] = e[f]);
                }
            }), e;
        }
        function f(a) {
            var b = a.require || a.controller && a.name;
            return !C(b) && F(b) && q(b, function(a, c) {
                var d = a.match(l);
                a.substring(d[0].length) || (b[c] = d[0] + c);
            }), b;
        }
        var e = {}, g = /^\s*directive:\s*([\w-]+)\s+(.*)$/, h = /(([\w-]+)(?::([^;]+))?;?)/, k = function(a) {
            var d, b = {};
            for (a = a.split(","), d = 0; d < a.length; d++) b[a[d]] = !0;
            return b;
        }("ngSrc,ngSrcset,src,srcset"), l = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, m = /^(on[a-z]+|formaction)$/, n = W();
        this.directive = function U(b, d) {
            return fb(b, "name"), Pa(b, "directive"), E(b) ? (function(a) {
                var b = a.charAt(0);
                if (!b || b !== P(b)) throw ea("baddir", a);
                if (a !== a.trim()) throw ea("baddir", a);
            }(b), fb(d, "directiveFactory"), e.hasOwnProperty(b) || (e[b] = [], a.factory(b + "Directive", [ "$injector", "$exceptionHandler", function(a, c) {
                var d = [];
                return q(e[b], function(e, g) {
                    try {
                        var h = a.invoke(e);
                        y(h) ? h = {
                            compile: ma(h)
                        } : !h.compile && h.link && (h.compile = ma(h.link)), h.priority = h.priority || 0, 
                        h.index = g, h.name = h.name || b, h.require = f(h);
                        var k = h, l = h.restrict;
                        if (l && (!E(l) || !/[EACM]/.test(l))) throw ea("badrestrict", l, b);
                        k.restrict = l || "EA", h.$$moduleName = e.$$moduleName, d.push(h);
                    } catch (m) {
                        c(m);
                    }
                }), d;
            } ])), e[b].push(d)) : q(b, Fc(U)), this;
        }, this.component = function(a, b) {
            function c(a) {
                function e(b) {
                    return y(b) || C(b) ? function(c, d) {
                        return a.invoke(b, this, {
                            $element: c,
                            $attrs: d
                        });
                    } : b;
                }
                var f = b.template || b.templateUrl ? b.template : "", g = {
                    controller: d,
                    controllerAs: function(a, b) {
                        if (b && E(b)) return b;
                        if (E(a)) {
                            var d = md.exec(a);
                            if (d) return d[3];
                        }
                    }(b.controller) || b.controllerAs || "$ctrl",
                    template: e(f),
                    templateUrl: e(b.templateUrl),
                    transclude: b.transclude,
                    scope: {},
                    bindToController: b.bindings || {},
                    restrict: "E",
                    require: b.require
                };
                return q(b, function(a, b) {
                    "$" === b.charAt(0) && (g[b] = a);
                }), g;
            }
            var d = b.controller || function() {};
            return q(b, function(a, b) {
                "$" === b.charAt(0) && (c[b] = a, y(d) && (d[b] = a));
            }), c.$inject = [ "$injector" ], this.directive(a, c);
        }, this.aHrefSanitizationWhitelist = function(a) {
            return v(a) ? (b.aHrefSanitizationWhitelist(a), this) : b.aHrefSanitizationWhitelist();
        }, this.imgSrcSanitizationWhitelist = function(a) {
            return v(a) ? (b.imgSrcSanitizationWhitelist(a), this) : b.imgSrcSanitizationWhitelist();
        };
        var p = !0, r = !(this.debugInfoEnabled = function(a) {
            return v(a) ? (p = a, this) : p;
        });
        this.preAssignBindingsEnabled = function(a) {
            return v(a) ? (r = a, this) : r;
        };
        var J = 10;
        this.onChangesTtl = function(a) {
            return arguments.length ? (J = a, this) : J;
        };
        var O = !0;
        this.commentDirectivesEnabled = function(a) {
            return arguments.length ? (O = a, this) : O;
        };
        var u = !0;
        this.cssClassDirectivesEnabled = function(a) {
            return arguments.length ? (u = a, this) : u;
        }, this.$get = [ "$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function(a, b, c, f, n, I, B, L, N, G) {
            function T() {
                try {
                    if (!--za) throw da = void 0, ea("infchng", J);
                    B.$apply(function() {
                        for (var a = [], b = 0, c = da.length; b < c; ++b) try {
                            da[b]();
                        } catch (d) {
                            a.push(d);
                        }
                        if (da = void 0, a.length) throw a;
                    });
                } finally {
                    za++;
                }
            }
            function s(a, b) {
                if (b) {
                    var d, e, f, c = Object.keys(b);
                    for (d = 0, e = c.length; d < e; d++) this[f = c[d]] = b[f];
                } else this.$attr = {};
                this.$$element = a;
            }
            function Ma(a, b) {
                try {
                    a.addClass(b);
                } catch (c) {}
            }
            function ba(a, b, c, d, e) {
                a instanceof D || (a = D(a));
                var f = Na(a, b, a, c, d, e);
                ba.$$addScopeClass(a);
                var g = null;
                return function(b, c, d) {
                    if (!a) throw ea("multilink");
                    fb(b, "scope"), e && e.needsNewScope && (b = b.$parent.$new());
                    var h = (d = d || {}).parentBoundTranscludeFn, k = d.transcludeControllers;
                    if (d = d.futureParentElement, h && h.$$boundTransclude && (h = h.$$boundTransclude), 
                    g || (g = (d = d && d[0]) && "foreignobject" !== xa(d) && na.call(d).match(/SVG/) ? "svg" : "html"), 
                    d = "html" !== g ? D(ha(g, D("<div>").append(a).html())) : c ? Oa.clone.call(a) : a, 
                    k) for (var l in k) d.data("$" + l + "Controller", k[l].instance);
                    return ba.$$addScopeInfo(d, b), c && c(d, b), f && f(b, d, d, h), c || (a = f = null), 
                    d;
                };
            }
            function Na(a, b, c, d, e, f) {
                for (var l, m, n, p, K, h = [], k = C(a) || a instanceof D, r = 0; r < a.length; r++) l = new s(), 
                11 === La && M(a, r, k), (f = (m = fc(a[r], [], l, 0 === r ? d : void 0, e)).length ? X(m, a[r], l, b, c, null, [], [], f) : null) && f.scope && ba.$$addScopeClass(l.$$element), 
                l = f && f.terminal || !(n = a[r].childNodes) || !n.length ? null : Na(n, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b), 
                (f || l) && (h.push(r, f, l), p = !0, K = K || f), f = null;
                return p ? function(a, c, d, e) {
                    var f, k, l, m, n, r;
                    if (K) for (r = Array(c.length), m = 0; m < h.length; m += 3) r[f = h[m]] = c[f]; else r = c;
                    for (m = 0, n = h.length; m < n; ) k = r[h[m++]], c = h[m++], f = h[m++], c ? (c.scope ? (l = a.$new(), 
                    ba.$$addScopeInfo(D(k), l)) : l = a, c(f, l, k, d, c.transcludeOnThisElement ? ja(a, c.transclude, e) : !c.templateOnThisElement && e ? e : !e && b ? ja(a, b) : null)) : f && f(a, k.childNodes, void 0, e);
                } : null;
            }
            function M(a, b, c) {
                var f, d = a[b], e = d.parentNode;
                if (d.nodeType === Ja) for (;(f = e ? d.nextSibling : a[b + 1]) && f.nodeType === Ja; ) d.nodeValue += f.nodeValue, 
                f.parentNode && f.parentNode.removeChild(f), c && f === a[b + 1] && a.splice(b + 1, 1);
            }
            function ja(a, b, c) {
                function d(e, f, g, h, k) {
                    return e || ((e = a.$new(!1, k)).$$transcluded = !0), b(e, f, {
                        parentBoundTranscludeFn: c,
                        transcludeControllers: g,
                        futureParentElement: h
                    });
                }
                var f, e = d.$$slots = W();
                for (f in b.$$slots) e[f] = b.$$slots[f] ? ja(a, b.$$slots[f], c) : null;
                return d;
            }
            function fc(a, b, c, d, e) {
                var g, f = c.$attr;
                switch (a.nodeType) {
                  case 1:
                    Y(b, Ca(g = xa(a)), "E", d, e);
                    for (var k, l, m, n, p = a.attributes, K = 0, r = p && p.length; K < r; K++) {
                        var A = !1, B = !1;
                        l = (k = p[K]).name, m = k.value, k = Ca(l), (n = Ha.test(k)) && (l = l.replace(gd, "").substr(8).replace(/_(.)/g, function(a, b) {
                            return b.toUpperCase();
                        })), (k = k.match(Ka)) && Z(k[1]) && (B = (A = l).substr(0, l.length - 5) + "end", 
                        l = l.substr(0, l.length - 6)), f[k = Ca(l.toLowerCase())] = l, !n && c.hasOwnProperty(k) || (c[k] = m, 
                        dd(a, k) && (c[k] = !0)), ra(a, b, m, k, n), Y(b, k, "A", d, e, A, B);
                    }
                    if ("input" === g && "hidden" === a.getAttribute("type") && a.setAttribute("autocomplete", "off"), 
                    !Ga) break;
                    if (F(f = a.className) && (f = f.animVal), E(f) && "" !== f) for (;a = h.exec(f); ) Y(b, k = Ca(a[2]), "C", d, e) && (c[k] = S(a[3])), 
                    f = f.substr(a.index + a[0].length);
                    break;

                  case Ja:
                    ma(b, a.nodeValue);
                    break;

                  case 8:
                    if (!Fa) break;
                    kb(a, b, c, d, e);
                }
                return b.sort(ka), b;
            }
            function kb(a, b, c, d, e) {
                try {
                    var f = g.exec(a.nodeValue);
                    if (f) {
                        var h = Ca(f[1]);
                        Y(b, h, "M", d, e) && (c[h] = S(f[2]));
                    }
                } catch (k) {}
            }
            function hd(a, b, c) {
                var d = [], e = 0;
                if (b && a.hasAttribute && a.hasAttribute(b)) do {
                    if (!a) throw ea("uterdir", b, c);
                    1 === a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--), d.push(a), 
                    a = a.nextSibling;
                } while (0 < e); else d.push(a);
                return D(d);
            }
            function id(a, b, c) {
                return function(d, e, f, g, h) {
                    return e = hd(e[0], b, c), a(d, e, f, g, h);
                };
            }
            function gc(a, b, c, d, e, f) {
                var g;
                return a ? ba(b, c, d, e, f) : function() {
                    return g || (g = ba(b, c, d, e, f), b = c = f = null), g.apply(this, arguments);
                };
            }
            function X(a, b, d, e, f, g, h, k, l) {
                function m(a, b, c, d) {
                    a && (c && (a = id(a, c, d)), a.require = t.require, a.directiveName = L, (B === t || t.$$isolateScope) && (a = sa(a, {
                        isolateScope: !0
                    })), h.push(a)), b && (c && (b = id(b, c, d)), b.require = t.require, b.directiveName = L, 
                    (B === t || t.$$isolateScope) && (b = sa(b, {
                        isolateScope: !0
                    })), k.push(b));
                }
                function n(a, e, f, g, l) {
                    var p, t, u, G, J, N, T, L;
                    for (p in b === f ? L = (g = d).$$element : g = new s(L = D(f), d), J = e, B ? G = e.$new(!0) : K && (J = e.$parent), 
                    l && ((T = function(a, b, c, d) {
                        var e;
                        if (Za(a) || (d = c, c = b, b = a, a = void 0), U && (e = N), c || (c = U ? L.parent() : L), 
                        !d) return l(a, b, e, c, Q);
                        var f = l.$$slots[d];
                        if (f) return f(a, b, e, c, Q);
                        if (x(f)) throw ea("noslot", d, ya(L));
                    }).$$boundTransclude = l, T.isSlotFilled = function(a) {
                        return !!l.$$slots[a];
                    }), A && (N = ca(L, g, T, A, G, e, B)), B && (ba.$$addScopeInfo(L, G, !0, !(I && (I === B || I === B.$$originalDirective))), 
                    ba.$$addScopeClass(L, !0), G.$$isolateBindings = B.$$isolateBindings, (t = oa(e, g, G, G.$$isolateBindings, B)).removeWatches && G.$on("$destroy", t.removeWatches)), 
                    N) {
                        t = A[p], u = N[p];
                        var Hb = t.$$bindings.bindToController;
                        if (r) {
                            u.bindingInfo = Hb ? oa(J, g, u.instance, Hb, t) : {};
                            var O = u();
                            O !== u.instance && (u.instance = O, L.data("$" + t.name + "Controller", O), u.bindingInfo.removeWatches && u.bindingInfo.removeWatches(), 
                            u.bindingInfo = oa(J, g, u.instance, Hb, t));
                        } else u.instance = u(), L.data("$" + t.name + "Controller", u.instance), u.bindingInfo = oa(J, g, u.instance, Hb, t);
                    }
                    for (q(A, function(a, b) {
                        var c = a.require;
                        a.bindToController && !C(c) && F(c) && R(N[b].instance, V(b, c, L, N));
                    }), q(N, function(a) {
                        var b = a.instance;
                        if (y(b.$onChanges)) try {
                            b.$onChanges(a.bindingInfo.initialChanges);
                        } catch (d) {
                            c(d);
                        }
                        if (y(b.$onInit)) try {
                            b.$onInit();
                        } catch (e) {
                            c(e);
                        }
                        y(b.$doCheck) && (J.$watch(function() {
                            b.$doCheck();
                        }), b.$doCheck()), y(b.$onDestroy) && J.$on("$destroy", function() {
                            b.$onDestroy();
                        });
                    }), p = 0, t = h.length; p < t; p++) ta(u = h[p], u.isolateScope ? G : e, L, g, u.require && V(u.directiveName, u.require, L, N), T);
                    var Q = e;
                    for (B && (B.template || null === B.templateUrl) && (Q = G), a && a(Q, f.childNodes, void 0, l), 
                    p = k.length - 1; 0 <= p; p--) ta(u = k[p], u.isolateScope ? G : e, L, g, u.require && V(u.directiveName, u.require, L, N), T);
                    q(N, function(a) {
                        y((a = a.instance).$postLink) && a.$postLink();
                    });
                }
                l = l || {};
                for (var t, L, T, Q, w, p = -Number.MAX_VALUE, K = l.newScopeDirective, A = l.controllerDirectives, B = l.newIsolateScopeDirective, I = l.templateDirective, u = l.nonTlbTranscludeDirective, J = !1, N = !1, U = l.hasElementTranscludeDirective, G = d.$$element = D(b), O = e, v = !1, Ma = !1, z = 0, E = a.length; z < E; z++) {
                    var Na = (t = a[z]).$$start, M = t.$$end;
                    if (Na && (G = hd(b, Na, M)), T = void 0, p > t.priority) break;
                    if ((w = t.scope) && (t.templateUrl || (F(w) ? ($("new/isolated scope", B || K, t, G), 
                    B = t) : $("new/isolated scope", B, t, G)), K = K || t), L = t.name, !v && (t.replace && (t.templateUrl || t.template) || t.transclude && !t.$$tlb)) {
                        for (w = z + 1; v = a[w++]; ) if (v.transclude && !v.$$tlb || v.replace && (v.templateUrl || v.template)) {
                            Ma = !0;
                            break;
                        }
                        v = !0;
                    }
                    if (!t.templateUrl && t.controller && (A = A || W(), $("'" + L + "' controller", A[L], t, G), 
                    A[L] = t), w = t.transclude) if (J = !0, t.$$tlb || ($("transclusion", u, t, G), 
                    u = t), "element" === w) U = !0, p = t.priority, T = G, G = d.$$element = D(ba.$$createComment(L, d[L])), 
                    b = G[0], la(f, wa.call(T, 0), b), T[0].$$parentNode = T[0].parentNode, O = gc(Ma, T, e, p, g && g.name, {
                        nonTlbTranscludeDirective: u
                    }); else {
                        var ja = W();
                        if (F(w)) {
                            T = [];
                            var P = W(), kb = W();
                            for (var ec in q(w, function(a, b) {
                                var c = "?" === a.charAt(0);
                                a = c ? a.substring(1) : a, P[a] = b, ja[b] = null, kb[b] = c;
                            }), q(G.contents(), function(a) {
                                var b = P[Ca(xa(a))];
                                b ? (kb[b] = !0, ja[b] = ja[b] || [], ja[b].push(a)) : T.push(a);
                            }), q(kb, function(a, b) {
                                if (!a) throw ea("reqslot", b);
                            }), ja) ja[ec] && (ja[ec] = gc(Ma, ja[ec], e));
                        } else T = D(cc(b)).contents();
                        G.empty(), (O = gc(Ma, T, e, void 0, void 0, {
                            needsNewScope: t.$$isolateScope || t.$$newScope
                        })).$$slots = ja;
                    }
                    if (t.template) if (N = !0, $("template", I, t, G), w = y((I = t).template) ? t.template(G, d) : t.template, 
                    w = Ea(w), t.replace) {
                        if (g = t, T = $b.test(w) ? jd(ha(t.templateNamespace, S(w))) : [], b = T[0], 1 !== T.length || 1 !== b.nodeType) throw ea("tplrt", L, "");
                        la(f, G, b), w = fc(b, [], E = {
                            $attr: {}
                        });
                        var Y = a.splice(z + 1, a.length - (z + 1));
                        (B || K) && aa(w, B, K), a = a.concat(w).concat(Y), fa(d, E), E = a.length;
                    } else G.html(w);
                    if (t.templateUrl) N = !0, $("template", I, t, G), (I = t).replace && (g = t), n = ga(a.splice(z, a.length - z), G, d, f, J && O, h, k, {
                        controllerDirectives: A,
                        newScopeDirective: K !== t && K,
                        newIsolateScopeDirective: B,
                        templateDirective: I,
                        nonTlbTranscludeDirective: u
                    }), E = a.length; else if (t.compile) try {
                        Q = t.compile(G, d, O);
                        var Z = t.$$originalDirective || t;
                        y(Q) ? m(null, bb(Z, Q), Na, M) : Q && m(bb(Z, Q.pre), bb(Z, Q.post), Na, M);
                    } catch (da) {
                        c(da, ya(G));
                    }
                    t.terminal && (n.terminal = !0, p = Math.max(p, t.priority));
                }
                return n.scope = K && !0 === K.scope, n.transcludeOnThisElement = J, n.templateOnThisElement = N, 
                n.transclude = O, l.hasElementTranscludeDirective = U, n;
            }
            function V(a, b, c, d) {
                var e;
                if (E(b)) {
                    var f = b.match(l);
                    b = b.substring(f[0].length);
                    var g = f[1] || f[3];
                    f = "?" === f[2];
                    if ("^^" === g ? c = c.parent() : e = (e = d && d[b]) && e.instance, !e) {
                        var h = "$" + b + "Controller";
                        e = g ? c.inheritedData(h) : c.data(h);
                    }
                    if (!e && !f) throw ea("ctreq", b, a);
                } else if (C(b)) for (e = [], g = 0, f = b.length; g < f; g++) e[g] = V(a, b[g], c, d); else F(b) && (e = {}, 
                q(b, function(b, f) {
                    e[f] = V(a, b, c, d);
                }));
                return e || null;
            }
            function ca(a, b, c, d, e, f, g) {
                var k, h = W();
                for (k in d) {
                    var l = d[k], m = {
                        $scope: l === g || l.$$isolateScope ? e : f,
                        $element: a,
                        $attrs: b,
                        $transclude: c
                    }, n = l.controller;
                    "@" === n && (n = b[l.name]), m = I(n, m, !0, l.controllerAs), h[l.name] = m, a.data("$" + l.name + "Controller", m.instance);
                }
                return h;
            }
            function aa(a, b, c) {
                for (var d = 0, e = a.length; d < e; d++) a[d] = Ub(a[d], {
                    $$isolateScope: b,
                    $$newScope: c
                });
            }
            function Y(b, c, f, g, h, k, l) {
                if (c === h) return null;
                var m = null;
                if (e.hasOwnProperty(c)) for (var n = 0, p = (h = a.get(c + "Directive")).length; n < p; n++) if (c = h[n], 
                (x(g) || g > c.priority) && -1 !== c.restrict.indexOf(f)) {
                    if (k && (c = Ub(c, {
                        $$start: k,
                        $$end: l
                    })), !c.$$bindings) {
                        var K = m = c, r = c.name, A = {
                            isolateScope: null,
                            bindToController: null
                        };
                        if (F(K.scope) && (!0 === K.bindToController ? (A.bindToController = d(K.scope, r, !0), 
                        A.isolateScope = {}) : A.isolateScope = d(K.scope, r, !1)), F(K.bindToController) && (A.bindToController = d(K.bindToController, r, !0)), 
                        A.bindToController && !K.controller) throw ea("noctrl", r);
                        F((m = m.$$bindings = A).isolateScope) && (c.$$isolateBindings = m.isolateScope);
                    }
                    b.push(c), m = c;
                }
                return m;
            }
            function Z(b) {
                if (e.hasOwnProperty(b)) for (var c = a.get(b + "Directive"), d = 0, f = c.length; d < f; d++) if ((b = c[d]).multiElement) return !0;
                return !1;
            }
            function fa(a, b) {
                var c = b.$attr, d = a.$attr;
                q(a, function(d, e) {
                    "$" !== e.charAt(0) && (b[e] && b[e] !== d && (d = d.length ? d + ("style" === e ? ";" : " ") + b[e] : b[e]), 
                    a.$set(e, d, !0, c[e]));
                }), q(b, function(b, e) {
                    a.hasOwnProperty(e) || "$" === e.charAt(0) || (a[e] = b, "class" !== e && "style" !== e && (d[e] = c[e]));
                });
            }
            function ga(a, b, d, e, g, h, k, l) {
                var n, p, m = [], K = b[0], r = a.shift(), u = Ub(r, {
                    templateUrl: null,
                    transclude: null,
                    replace: null,
                    $$originalDirective: r
                }), t = y(r.templateUrl) ? r.templateUrl(b, d) : r.templateUrl, B = r.templateNamespace;
                return b.empty(), f(t).then(function(c) {
                    var f, A;
                    if (c = Ea(c), r.replace) {
                        if (c = $b.test(c) ? jd(ha(B, S(c))) : [], f = c[0], 1 !== c.length || 1 !== f.nodeType) throw ea("tplrt", r.name, t);
                        c = {
                            $attr: {}
                        }, la(e, b, f);
                        var I = fc(f, [], c);
                        F(r.scope) && aa(I, !0), a = I.concat(a), fa(d, c);
                    } else f = K, b.html(c);
                    for (a.unshift(u), n = X(a, f, d, g, b, r, h, k, l), q(e, function(a, c) {
                        a === f && (e[c] = b[0]);
                    }), p = Na(b[0].childNodes, g); m.length; ) {
                        c = m.shift(), A = m.shift();
                        var G = m.shift(), J = m.shift();
                        I = b[0];
                        if (!c.$$destroyed) {
                            if (A !== K) {
                                var N = A.className;
                                l.hasElementTranscludeDirective && r.replace || (I = cc(f)), la(G, D(A), I), Ma(D(I), N);
                            }
                            A = n.transcludeOnThisElement ? ja(c, n.transclude, J) : J, n(p, c, I, e, A);
                        }
                    }
                    m = null;
                }).catch(function(a) {
                    a instanceof Error && c(a);
                }).catch(w), function(a, b, c, d, e) {
                    a = e, b.$$destroyed || (m ? m.push(b, c, d, a) : (n.transcludeOnThisElement && (a = ja(b, n.transclude, e)), 
                    n(p, b, c, d, a)));
                };
            }
            function ka(a, b) {
                var c = b.priority - a.priority;
                return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
            }
            function $(a, b, c, d) {
                function e(a) {
                    return a ? " (module: " + a + ")" : "";
                }
                if (b) throw ea("multidir", b.name, e(b.$$moduleName), c.name, e(c.$$moduleName), a, ya(d));
            }
            function ma(a, c) {
                var d = b(c, !0);
                d && a.push({
                    priority: 0,
                    compile: function(a) {
                        var b = !!(a = a.parent()).length;
                        return b && ba.$$addBindingClass(a), function(a, c) {
                            var e = c.parent();
                            b || ba.$$addBindingClass(e), ba.$$addBindingInfo(e, d.expressions), a.$watch(d, function(a) {
                                c[0].nodeValue = a;
                            });
                        };
                    }
                });
            }
            function ha(a, b) {
                switch (a = P(a || "html")) {
                  case "svg":
                  case "math":
                    var c = z.document.createElement("div");
                    return c.innerHTML = "<" + a + ">" + b + "</" + a + ">", c.childNodes[0].childNodes;

                  default:
                    return b;
                }
            }
            function ra(a, c, d, e, f) {
                var g = function(a, b) {
                    if ("srcdoc" === b) return L.HTML;
                    var c = xa(a);
                    if ("src" === b || "ngSrc" === b) {
                        if (-1 === [ "img", "video", "audio", "source", "track" ].indexOf(c)) return L.RESOURCE_URL;
                    } else if ("xlinkHref" === b || "form" === c && "action" === b || "link" === c && "href" === b) return L.RESOURCE_URL;
                }(a, e), h = k[e] || f, l = b(d, !f, g, h);
                if (l) {
                    if ("multiple" === e && "select" === xa(a)) throw ea("selmulti", ya(a));
                    if (m.test(e)) throw ea("nodomevents");
                    c.push({
                        priority: 100,
                        compile: function() {
                            return {
                                pre: function(a, c, f) {
                                    c = f.$$observers || (f.$$observers = W());
                                    var k = f[e];
                                    k !== d && (l = k && b(k, !0, g, h), d = k), l && (f[e] = l(a), (c[e] || (c[e] = [])).$$inter = !0, 
                                    (f.$$observers && f.$$observers[e].$$scope || a).$watch(l, function(a, b) {
                                        "class" === e && a !== b ? f.$updateClass(a, b) : f.$set(e, a);
                                    }));
                                }
                            };
                        }
                    });
                }
            }
            function la(a, b, c) {
                var g, h, d = b[0], e = b.length, f = d.parentNode;
                if (a) for (g = 0, h = a.length; g < h; g++) if (a[g] === d) {
                    a[g++] = c, h = g + e - 1;
                    for (var k = a.length; g < k; g++, h++) h < k ? a[g] = a[h] : delete a[g];
                    a.length -= e - 1, a.context === d && (a.context = c);
                    break;
                }
                for (f && f.replaceChild(c, d), a = z.document.createDocumentFragment(), g = 0; g < e; g++) a.appendChild(b[g]);
                for (D.hasData(d) && (D.data(c, D.data(d)), D(d).off("$destroy")), D.cleanData(a.querySelectorAll("*")), 
                g = 1; g < e; g++) delete b[g];
                b[0] = c, b.length = 1;
            }
            function sa(a, b) {
                return R(function() {
                    return a.apply(null, arguments);
                }, a, b);
            }
            function ta(a, b, d, e, f, g) {
                try {
                    a(b, d, e, f, g);
                } catch (h) {
                    c(h, ya(d));
                }
            }
            function oa(a, c, d, e, f) {
                function g(b, c, e) {
                    !y(d.$onChanges) || c === e || c != c && e != e || (da || (a.$$postDigest(T), da = []), 
                    m || (m = {}, da.push(h)), m[b] && (e = m[b].previousValue), m[b] = new Ib(e, c));
                }
                function h() {
                    d.$onChanges(m), m = void 0;
                }
                var m, k = [], l = {};
                return q(e, function(e, h) {
                    var r, A, u, B, m = e.attrName, p = e.optional;
                    switch (e.mode) {
                      case "@":
                        p || va.call(c, m) || (d[h] = c[m] = void 0), p = c.$observe(m, function(a) {
                            (E(a) || Ia(a)) && (g(h, a, d[h]), d[h] = a);
                        }), c.$$observers[m].$$scope = a, E(r = c[m]) ? d[h] = b(r)(a) : Ia(r) && (d[h] = r), 
                        l[h] = new Ib(hc, d[h]), k.push(p);
                        break;

                      case "=":
                        if (!va.call(c, m)) {
                            if (p) break;
                            c[m] = void 0;
                        }
                        if (p && !c[m]) break;
                        A = n(c[m]), B = A.literal ? qa : function(a, b) {
                            return a === b || a != a && b != b;
                        }, u = A.assign || function() {
                            throw r = d[h] = A(a), ea("nonassign", c[m], m, f.name);
                        }, r = d[h] = A(a), (p = function(b) {
                            return B(b, d[h]) || (B(b, r) ? u(a, b = d[h]) : d[h] = b), r = b;
                        }).$stateful = !0, p = e.collection ? a.$watchCollection(c[m], p) : a.$watch(n(c[m], p), null, A.literal), 
                        k.push(p);
                        break;

                      case "<":
                        if (!va.call(c, m)) {
                            if (p) break;
                            c[m] = void 0;
                        }
                        if (p && !c[m]) break;
                        var I = (A = n(c[m])).literal, G = d[h] = A(a);
                        l[h] = new Ib(hc, d[h]), p = a.$watch(A, function(a, b) {
                            if (b === a) {
                                if (b === G || I && qa(b, G)) return;
                                b = G;
                            }
                            g(h, a, b), d[h] = a;
                        }, I), k.push(p);
                        break;

                      case "&":
                        if ((A = c.hasOwnProperty(m) ? n(c[m]) : w) === w && p) break;
                        d[h] = function(b) {
                            return A(a, b);
                        };
                    }
                }), {
                    initialChanges: l,
                    removeWatches: k.length && function() {
                        for (var a = 0, b = k.length; a < b; ++a) k[a]();
                    }
                };
            }
            var da, Da = /^\w/, ua = z.document.createElement("div"), Fa = O, Ga = u, za = J;
            s.prototype = {
                $normalize: Ca,
                $addClass: function(a) {
                    a && 0 < a.length && N.addClass(this.$$element, a);
                },
                $removeClass: function(a) {
                    a && 0 < a.length && N.removeClass(this.$$element, a);
                },
                $updateClass: function(a, b) {
                    var c = kd(a, b);
                    c && c.length && N.addClass(this.$$element, c), (c = kd(b, a)) && c.length && N.removeClass(this.$$element, c);
                },
                $set: function(a, b, d, e) {
                    var f = dd(this.$$element[0], a), g = ld[a], h = a;
                    if (f ? (this.$$element.prop(a, b), e = f) : g && (this[g] = b, h = g), this[a] = b, 
                    e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = Nc(a, "-")), 
                    "a" === (f = xa(this.$$element)) && ("href" === a || "xlinkHref" === a) || "img" === f && "src" === a) this[a] = b = G(b, "src" === a); else if ("img" === f && "srcset" === a && v(b)) {
                        f = "", g = S(b);
                        for (var k = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, l = (k = /\s/.test(g) ? k : /(,)/, 
                        g = g.split(k), k = Math.floor(g.length / 2), 0); l < k; l++) {
                            var m = 2 * l;
                            f = (f = f + G(S(g[m]), !0)) + " " + S(g[m + 1]);
                        }
                        g = S(g[2 * l]).split(/\s/), f += G(S(g[0]), !0), 2 === g.length && (f += " " + S(g[1])), 
                        this[a] = b = f;
                    }
                    !1 !== d && (null === b || x(b) ? this.$$element.removeAttr(e) : Da.test(e) ? this.$$element.attr(e, b) : function(a, b, c) {
                        ua.innerHTML = "<span " + b + ">";
                        var d = (b = ua.firstChild.attributes)[0];
                        b.removeNamedItem(d.name), d.value = c, a.attributes.setNamedItem(d);
                    }(this.$$element[0], e, b)), (a = this.$$observers) && q(a[h], function(a) {
                        try {
                            a(b);
                        } catch (d) {
                            c(d);
                        }
                    });
                },
                $observe: function(a, b) {
                    var c = this, d = c.$$observers || (c.$$observers = W()), e = d[a] || (d[a] = []);
                    return e.push(b), B.$evalAsync(function() {
                        e.$$inter || !c.hasOwnProperty(a) || x(c[a]) || b(c[a]);
                    }), function() {
                        $a(e, b);
                    };
                }
            };
            var Aa = b.startSymbol(), Ba = b.endSymbol(), Ea = "{{" === Aa && "}}" === Ba ? Ya : function(a) {
                return a.replace(/\{\{/g, Aa).replace(/}}/g, Ba);
            }, Ha = /^ngAttr[A-Z]/, Ka = /^(.+)Start$/;
            return ba.$$addBindingInfo = p ? function(a, b) {
                var c = a.data("$binding") || [];
                C(b) ? c = c.concat(b) : c.push(b), a.data("$binding", c);
            } : w, ba.$$addBindingClass = p ? function(a) {
                Ma(a, "ng-binding");
            } : w, ba.$$addScopeInfo = p ? function(a, b, c, d) {
                a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", b);
            } : w, ba.$$addScopeClass = p ? function(a, b) {
                Ma(a, b ? "ng-isolate-scope" : "ng-scope");
            } : w, ba.$$createComment = function(a, b) {
                var c = "";
                return p && (c = " " + (a || "") + ": ", b && (c += b + " ")), z.document.createComment(c);
            }, ba;
        } ];
    }
    function Ib(a, b) {
        this.previousValue = a, this.currentValue = b;
    }
    function Ca(a) {
        return a.replace(gd, "").replace(mg, gb);
    }
    function kd(a, b) {
        var d = "", c = a.split(/\s+/), f = b.split(/\s+/), e = 0;
        a: for (;e < c.length; e++) {
            for (var g = c[e], h = 0; h < f.length; h++) if (g === f[h]) continue a;
            d += (0 < d.length ? " " : "") + g;
        }
        return d;
    }
    function jd(a) {
        var b = (a = D(a)).length;
        if (b <= 1) return a;
        for (;b--; ) {
            var d = a[b];
            (8 === d.nodeType || d.nodeType === Ja && "" === d.nodeValue.trim()) && ng.call(a, b, 1);
        }
        return a;
    }
    function rf() {
        var a = {}, b = !1;
        this.has = function(b) {
            return a.hasOwnProperty(b);
        }, this.register = function(b, c) {
            Pa(b, "controller"), F(b) ? R(a, b) : a[b] = c;
        }, this.allowGlobals = function() {
            b = !0;
        }, this.$get = [ "$injector", "$window", function(d, c) {
            function f(a, b, c, d) {
                if (!a || !F(a.$scope)) throw M("$controller")("noscp", d, b);
                a.$scope[b] = c;
            }
            return function(e, g, h, k) {
                var l, m, n;
                if (h = !0 === h, k && E(k) && (n = k), E(e)) {
                    if (!(k = e.match(md))) throw nd("ctrlfmt", e);
                    if (m = k[1], n = n || k[3], !(e = a.hasOwnProperty(m) ? a[m] : Pc(g.$scope, m, !0) || (b ? Pc(c, m, !0) : void 0))) throw nd("ctrlreg", m);
                    tb(e, m, !0);
                }
                return h ? (h = (C(e) ? e[e.length - 1] : e).prototype, l = Object.create(h || null), 
                n && f(g, n, l, m || e.name), R(function() {
                    var a = d.invoke(e, l, g, m);
                    return a !== l && (F(a) || y(a)) && (l = a, n && f(g, n, l, m || e.name)), l;
                }, {
                    instance: l,
                    identifier: n
                })) : (l = d.instantiate(e, g, m), n && f(g, n, l, m || e.name), l);
            };
        } ];
    }
    function sf() {
        this.$get = [ "$window", function(a) {
            return D(a.document);
        } ];
    }
    function tf() {
        this.$get = [ "$document", "$rootScope", function(a, b) {
            function d() {
                f = c.hidden;
            }
            var c = a[0], f = c && c.hidden;
            return a.on("visibilitychange", d), b.$on("$destroy", function() {
                a.off("visibilitychange", d);
            }), function() {
                return f;
            };
        } ];
    }
    function uf() {
        this.$get = [ "$log", function(a) {
            return function(b, d) {
                a.error.apply(a, arguments);
            };
        } ];
    }
    function ic(a) {
        return F(a) ? fa(a) ? a.toISOString() : cb(a) : a;
    }
    function zf() {
        this.$get = function() {
            return function(a) {
                if (!a) return "";
                var b = [];
                return Ec(a, function(a, c) {
                    null === a || x(a) || (C(a) ? q(a, function(a) {
                        b.push(ka(c) + "=" + ka(ic(a)));
                    }) : b.push(ka(c) + "=" + ka(ic(a))));
                }), b.join("&");
            };
        };
    }
    function Af() {
        this.$get = function() {
            return function(a) {
                if (!a) return "";
                var d = [];
                return function b(a, f, e) {
                    null === a || x(a) || (C(a) ? q(a, function(a, c) {
                        b(a, f + "[" + (F(a) ? c : "") + "]");
                    }) : F(a) && !fa(a) ? Ec(a, function(a, c) {
                        b(a, f + (e ? "" : "[") + c + (e ? "" : "]"));
                    }) : d.push(ka(f) + "=" + ka(ic(a))));
                }(a, "", !0), d.join("&");
            };
        };
    }
    function jc(a, b) {
        if (E(a)) {
            var d = a.replace(og, "").trim();
            if (d) {
                var c = b("Content-Type");
                (c = c && 0 === c.indexOf(od)) || (c = (c = d.match(pg)) && qg[c[0]].test(d)), c && (a = Ic(d));
            }
        }
        return a;
    }
    function pd(a) {
        var d, b = W();
        return E(a) ? q(a.split("\n"), function(a) {
            d = a.indexOf(":");
            var f = P(S(a.substr(0, d)));
            a = S(a.substr(d + 1)), f && (b[f] = b[f] ? b[f] + ", " + a : a);
        }) : F(a) && q(a, function(a, d) {
            var e = P(d), g = S(a);
            e && (b[e] = b[e] ? b[e] + ", " + g : g);
        }), b;
    }
    function qd(a) {
        var b;
        return function(d) {
            return b || (b = pd(a)), d ? (void 0 === (d = b[P(d)]) && (d = null), d) : b;
        };
    }
    function rd(a, b, d, c) {
        return y(c) ? c(a, b, d) : (q(c, function(c) {
            a = c(a, b, d);
        }), a);
    }
    function yf() {
        var a = this.defaults = {
            transformResponse: [ jc ],
            transformRequest: [ function(a) {
                return F(a) && "[object File]" !== na.call(a) && "[object Blob]" !== na.call(a) && "[object FormData]" !== na.call(a) ? cb(a) : a;
            } ],
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*"
                },
                post: ra(kc),
                put: ra(kc),
                patch: ra(kc)
            },
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            paramSerializer: "$httpParamSerializer",
            jsonpCallbackParam: "callback"
        }, b = !1;
        this.useApplyAsync = function(a) {
            return v(a) ? (b = !!a, this) : b;
        };
        var d = this.interceptors = [];
        this.$get = [ "$browser", "$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", "$sce", function(c, f, e, g, h, k, l, m) {
            function n(b) {
                function d(a, b) {
                    for (var c = 0, e = b.length; c < e; ) {
                        var f = b[c++], g = b[c++];
                        a = a.then(f, g);
                    }
                    return b.length = 0, a;
                }
                function f(a) {
                    var b = R({}, a);
                    return b.data = rd(a.data, a.headers, a.status, g.transformResponse), 200 <= (a = a.status) && a < 300 ? b : k.reject(b);
                }
                if (!F(b)) throw M("$http")("badreq", b);
                if (!E(m.valueOf(b.url))) throw M("$http")("badreq", b.url);
                var g = R({
                    method: "get",
                    transformRequest: a.transformRequest,
                    transformResponse: a.transformResponse,
                    paramSerializer: a.paramSerializer,
                    jsonpCallbackParam: a.jsonpCallbackParam
                }, b);
                g.headers = function(b) {
                    var f, g, h, c = a.headers, d = R({}, b.headers);
                    c = R({}, c.common, c[P(b.method)]);
                    a: for (f in c) {
                        for (h in g = P(f), d) if (P(h) === g) continue a;
                        d[f] = c[f];
                    }
                    return function(a, b) {
                        var c, d = {};
                        return q(a, function(a, e) {
                            y(a) ? null != (c = a(b)) && (d[e] = c) : d[e] = a;
                        }), d;
                    }(d, ra(b));
                }(b), g.method = vb(g.method), g.paramSerializer = E(g.paramSerializer) ? l.get(g.paramSerializer) : g.paramSerializer, 
                c.$$incOutstandingRequestCount();
                var h = [], n = [];
                return b = k.resolve(g), q(u, function(a) {
                    (a.request || a.requestError) && h.unshift(a.request, a.requestError), (a.response || a.responseError) && n.push(a.response, a.responseError);
                }), (b = d(b = (b = d(b, h)).then(function(b) {
                    var c = b.headers, d = rd(b.data, qd(c), void 0, b.transformRequest);
                    return x(d) && q(c, function(a, b) {
                        "content-type" === P(b) && delete c[b];
                    }), x(b.withCredentials) && !x(a.withCredentials) && (b.withCredentials = a.withCredentials), 
                    p(b, d).then(f, f);
                }), n)).finally(function() {
                    c.$$completeOutstandingRequest(w);
                });
            }
            function p(c, d) {
                function g(a) {
                    if (a) {
                        var c = {};
                        return q(a, function(a, d) {
                            c[d] = function(c) {
                                function d() {
                                    a(c);
                                }
                                b ? h.$applyAsync(d) : h.$$phase ? d() : h.$apply(d);
                            };
                        }), c;
                    }
                }
                function p(a, b, d, e) {
                    (200 <= (b = -1 <= b ? b : 0) && b < 300 ? B.resolve : B.reject)({
                        data: a,
                        status: b,
                        headers: qd(d),
                        config: c,
                        statusText: e
                    });
                }
                function K(a) {
                    p(a.data, a.status, ra(a.headers()), a.statusText);
                }
                function u() {
                    var a = n.pendingRequests.indexOf(c);
                    -1 !== a && n.pendingRequests.splice(a, 1);
                }
                var N, G, B = k.defer(), L = B.promise, T = c.headers, s = "jsonp" === P(c.method), Q = c.url;
                return s ? Q = m.getTrustedResourceUrl(Q) : E(Q) || (Q = m.valueOf(Q)), Q = function(a, b) {
                    return 0 < b.length && (a += (-1 === a.indexOf("?") ? "?" : "&") + b), a;
                }(Q, c.paramSerializer(c.params)), s && (Q = function(a, b) {
                    if (/[&?][^=]+=JSON_CALLBACK/.test(a)) throw td("badjsonp", a);
                    if (new RegExp("[&?]" + b + "=").test(a)) throw td("badjsonp", b, a);
                    return a += (-1 === a.indexOf("?") ? "?" : "&") + b + "=JSON_CALLBACK";
                }(Q, c.jsonpCallbackParam)), n.pendingRequests.push(c), L.then(u, u), !c.cache && !a.cache || !1 === c.cache || "GET" !== c.method && "JSONP" !== c.method || (N = F(c.cache) ? c.cache : F(a.cache) ? a.cache : O), 
                N && (v(G = N.get(Q)) ? G && y(G.then) ? G.then(K, K) : C(G) ? p(G[1], G[0], ra(G[2]), G[3]) : p(G, 200, {}, "OK") : N.put(Q, L)), 
                x(G) && ((G = sd(c.url) ? e()[c.xsrfCookieName || a.xsrfCookieName] : void 0) && (T[c.xsrfHeaderName || a.xsrfHeaderName] = G), 
                f(c.method, Q, d, function(a, c, d, e) {
                    function f() {
                        p(c, a, d, e);
                    }
                    N && (200 <= a && a < 300 ? N.put(Q, [ a, c, pd(d), e ]) : N.remove(Q)), b ? h.$applyAsync(f) : (f(), 
                    h.$$phase || h.$apply());
                }, T, c.timeout, c.withCredentials, c.responseType, g(c.eventHandlers), g(c.uploadEventHandlers))), 
                L;
            }
            var O = g("$http");
            a.paramSerializer = E(a.paramSerializer) ? l.get(a.paramSerializer) : a.paramSerializer;
            var u = [];
            return q(d, function(a) {
                u.unshift(E(a) ? l.get(a) : l.invoke(a));
            }), n.pendingRequests = [], function(a) {
                q(arguments, function(a) {
                    n[a] = function(b, c) {
                        return n(R({}, c || {}, {
                            method: a,
                            url: b
                        }));
                    };
                });
            }("get", "delete", "head", "jsonp"), function(a) {
                q(arguments, function(a) {
                    n[a] = function(b, c, d) {
                        return n(R({}, d || {}, {
                            method: a,
                            url: b,
                            data: c
                        }));
                    };
                });
            }("post", "put", "patch"), n.defaults = a, n;
        } ];
    }
    function Cf() {
        this.$get = function() {
            return function() {
                return new z.XMLHttpRequest();
            };
        };
    }
    function Bf() {
        this.$get = [ "$browser", "$jsonpCallbacks", "$document", "$xhrFactory", function(a, b, d, c) {
            return function(a, b, d, c, f) {
                function e(a, b, d) {
                    a = a.replace("JSON_CALLBACK", b);
                    var e = f.createElement("script"), m = null;
                    return e.type = "text/javascript", e.src = a, e.async = !0, m = function(a) {
                        e.removeEventListener("load", m), e.removeEventListener("error", m), f.body.removeChild(e), 
                        e = null;
                        var g = -1, r = "unknown";
                        a && ("load" !== a.type || c.wasCalled(b) || (a = {
                            type: "error"
                        }), r = a.type, g = "error" === a.type ? 404 : 200), d && d(g, r);
                    }, e.addEventListener("load", m), e.addEventListener("error", m), f.body.appendChild(e), 
                    m;
                }
                return function(f, h, k, l, m, n, p, r, J, O) {
                    function u() {
                        U && U(), t && t.abort();
                    }
                    if (h = h || a.url(), "jsonp" === P(f)) var H = c.createCallback(h), U = e(h, H, function(a, b) {
                        var e = 200 === a && c.getResponse(H);
                        v(A) && d.cancel(A), U = t = null, l(a, e, "", b), c.removeCallback(H);
                    }); else {
                        var t = b(f, h);
                        if (t.open(f, h, !0), q(m, function(a, b) {
                            v(a) && t.setRequestHeader(b, a);
                        }), t.onload = function() {
                            var a = t.statusText || "", b = "response" in t ? t.response : t.responseText, c = 1223 === t.status ? 204 : t.status;
                            0 === c && (c = b ? 200 : "file" === Da(h).protocol ? 404 : 0);
                            var e = t.getAllResponseHeaders();
                            v(A) && d.cancel(A), U = t = null, l(c, b, e, a);
                        }, f = function() {
                            v(A) && d.cancel(A), U = t = null, l(-1, null, null, "");
                        }, t.onerror = f, t.onabort = f, t.ontimeout = f, q(J, function(a, b) {
                            t.addEventListener(b, a);
                        }), q(O, function(a, b) {
                            t.upload.addEventListener(b, a);
                        }), p && (t.withCredentials = !0), r) try {
                            t.responseType = r;
                        } catch (s) {
                            if ("json" !== r) throw s;
                        }
                        t.send(x(k) ? null : k);
                    }
                    if (0 < n) var A = d(u, n); else n && y(n.then) && n.then(u);
                };
            }(a, c, a.defer, b, d[0]);
        } ];
    }
    function wf() {
        var a = "{{", b = "}}";
        this.startSymbol = function(b) {
            return b ? (a = b, this) : a;
        }, this.endSymbol = function(a) {
            return a ? (b = a, this) : b;
        }, this.$get = [ "$parse", "$exceptionHandler", "$sce", function(d, c, f) {
            function e(a) {
                return "\\\\\\" + a;
            }
            function g(c) {
                return c.replace(n, a).replace(p, b);
            }
            function h(a, b, c, d) {
                var e = a.$watch(function(a) {
                    return e(), d(a);
                }, b, c);
                return e;
            }
            function k(e, k, n, p) {
                function H(a) {
                    try {
                        var b = a;
                        return a = n ? f.getTrusted(n, b) : f.valueOf(b), p && !v(a) ? a : Yb(a);
                    } catch (d) {
                        c(Ea.interr(e, d));
                    }
                }
                var q;
                if (!e.length || -1 === e.indexOf(a)) return k || ((q = ma(k = g(e))).exp = e, q.expressions = [], 
                q.$$watchDelegate = h), q;
                p = !!p;
                var t, s, A = 0, K = [], I = [];
                q = e.length;
                for (var B = [], L = []; A < q; ) {
                    if (-1 === (t = e.indexOf(a, A)) || -1 === (s = e.indexOf(b, t + l))) {
                        A !== q && B.push(g(e.substring(A)));
                        break;
                    }
                    A !== t && B.push(g(e.substring(A, t))), A = e.substring(t + l, s), K.push(A), I.push(d(A, H)), 
                    A = s + m, L.push(B.length), B.push("");
                }
                if (n && 1 < B.length && Ea.throwNoconcat(e), !k || K.length) {
                    var N = function(a) {
                        for (var b = 0, c = K.length; b < c; b++) {
                            if (p && x(a[b])) return;
                            B[L[b]] = a[b];
                        }
                        return B.join("");
                    };
                    return R(function(a) {
                        var b = 0, d = K.length, f = Array(d);
                        try {
                            for (;b < d; b++) f[b] = I[b](a);
                            return N(f);
                        } catch (g) {
                            c(Ea.interr(e, g));
                        }
                    }, {
                        exp: e,
                        expressions: K,
                        $$watchDelegate: function(a, b) {
                            var c;
                            return a.$watchGroup(I, function(d, e) {
                                var f = N(d);
                                y(b) && b.call(this, f, d !== e ? c : f, a), c = f;
                            });
                        }
                    });
                }
            }
            var l = a.length, m = b.length, n = new RegExp(a.replace(/./g, e), "g"), p = new RegExp(b.replace(/./g, e), "g");
            return k.startSymbol = function() {
                return a;
            }, k.endSymbol = function() {
                return b;
            }, k;
        } ];
    }
    function xf() {
        this.$get = [ "$rootScope", "$window", "$q", "$$q", "$browser", function(a, b, d, c, f) {
            function e(e, k, l, m) {
                function n() {
                    p ? e.apply(null, r) : e(u);
                }
                var p = 4 < arguments.length, r = p ? wa.call(arguments, 4) : [], J = b.setInterval, q = b.clearInterval, u = 0, H = v(m) && !m, U = (H ? c : d).defer(), t = U.promise;
                return l = v(l) ? l : 0, t.$$intervalId = J(function() {
                    H ? f.defer(n) : a.$evalAsync(n), U.notify(u++), 0 < l && l <= u && (U.resolve(u), 
                    q(t.$$intervalId), delete g[t.$$intervalId]), H || a.$apply();
                }, k), g[t.$$intervalId] = U, t;
            }
            var g = {};
            return e.cancel = function(a) {
                return !!(a && a.$$intervalId in g) && (g[a.$$intervalId].promise.catch(w), g[a.$$intervalId].reject("canceled"), 
                b.clearInterval(a.$$intervalId), delete g[a.$$intervalId], !0);
            }, e;
        } ];
    }
    function lc(a) {
        for (var b = (a = a.split("/")).length; b--; ) a[b] = db(a[b]);
        return a.join("/");
    }
    function ud(a, b) {
        var d = Da(a);
        b.$$protocol = d.protocol, b.$$host = d.hostname, b.$$port = Z(d.port) || sg[d.protocol] || null;
    }
    function vd(a, b) {
        if (tg.test(a)) throw lb("badpath", a);
        var d = "/" !== a.charAt(0);
        d && (a = "/" + a);
        var c = Da(a);
        b.$$path = decodeURIComponent(d && "/" === c.pathname.charAt(0) ? c.pathname.substring(1) : c.pathname), 
        b.$$search = Lc(c.search), b.$$hash = decodeURIComponent(c.hash), b.$$path && "/" !== b.$$path.charAt(0) && (b.$$path = "/" + b.$$path);
    }
    function mc(a, b) {
        return a.slice(0, b.length) === b;
    }
    function sa(a, b) {
        if (mc(b, a)) return b.substr(a.length);
    }
    function Ba(a) {
        var b = a.indexOf("#");
        return -1 === b ? a : a.substr(0, b);
    }
    function mb(a) {
        return a.replace(/(#.+)|#$/, "$1");
    }
    function nc(a, b, d) {
        this.$$html5 = !0, d = d || "", ud(a, this), this.$$parse = function(a) {
            var d = sa(b, a);
            if (!E(d)) throw lb("ipthprfx", a, b);
            vd(d, this), this.$$path || (this.$$path = "/"), this.$$compose();
        }, this.$$compose = function() {
            var a = Xb(this.$$search), d = this.$$hash ? "#" + db(this.$$hash) : "";
            this.$$url = lc(this.$$path) + (a ? "?" + a : "") + d, this.$$absUrl = b + this.$$url.substr(1);
        }, this.$$parseLinkUrl = function(c, f) {
            return f && "#" === f[0] ? (this.hash(f.slice(1)), !0) : (v(e = sa(a, c)) ? (g = e, 
            g = d && v(e = sa(d, e)) ? b + (sa("/", e) || e) : a + g) : v(e = sa(b, c)) ? g = b + e : b === c + "/" && (g = b), 
            g && this.$$parse(g), !!g);
            var e, g;
        };
    }
    function oc(a, b, d) {
        ud(a, this), this.$$parse = function(c) {
            var e;
            x(f = sa(a, c) || sa(b, c)) || "#" !== f.charAt(0) ? this.$$html5 ? e = f : (e = "", 
            x(f) && (a = c, this.replace())) : x(e = sa(d, f)) && (e = f), vd(e, this), c = this.$$path;
            var f, g = /^\/[A-Z]:(\/.*)/;
            mc(e, f = a) && (e = e.replace(f, "")), g.exec(e) || (c = (e = g.exec(c)) ? e[1] : c), 
            this.$$path = c, this.$$compose();
        }, this.$$compose = function() {
            var b = Xb(this.$$search), f = this.$$hash ? "#" + db(this.$$hash) : "";
            this.$$url = lc(this.$$path) + (b ? "?" + b : "") + f, this.$$absUrl = a + (this.$$url ? d + this.$$url : "");
        }, this.$$parseLinkUrl = function(b, d) {
            return Ba(a) === Ba(b) && (this.$$parse(b), !0);
        };
    }
    function wd(a, b, d) {
        this.$$html5 = !0, oc.apply(this, arguments), this.$$parseLinkUrl = function(c, f) {
            return f && "#" === f[0] ? (this.hash(f.slice(1)), !0) : (a === Ba(c) ? e = c : (g = sa(b, c)) ? e = a + d + g : b === c + "/" && (e = b), 
            e && this.$$parse(e), !!e);
            var e, g;
        }, this.$$compose = function() {
            var b = Xb(this.$$search), f = this.$$hash ? "#" + db(this.$$hash) : "";
            this.$$url = lc(this.$$path) + (b ? "?" + b : "") + f, this.$$absUrl = a + d + this.$$url;
        };
    }
    function Jb(a) {
        return function() {
            return this[a];
        };
    }
    function xd(a, b) {
        return function(d) {
            return x(d) ? this[a] : (this[a] = b(d), this.$$compose(), this);
        };
    }
    function Ef() {
        var a = "!", b = {
            enabled: !1,
            requireBase: !0,
            rewriteLinks: !0
        };
        this.hashPrefix = function(b) {
            return v(b) ? (a = b, this) : a;
        }, this.html5Mode = function(a) {
            return Ia(a) ? (b.enabled = a, this) : F(a) ? (Ia(a.enabled) && (b.enabled = a.enabled), 
            Ia(a.requireBase) && (b.requireBase = a.requireBase), (Ia(a.rewriteLinks) || E(a.rewriteLinks)) && (b.rewriteLinks = a.rewriteLinks), 
            this) : b;
        }, this.$get = [ "$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(d, c, f, e, g) {
            function h(a, b, d) {
                var e = l.url(), f = l.$$state;
                try {
                    c.url(a, b, d), l.$$state = c.state();
                } catch (g) {
                    throw l.url(e), l.$$state = f, g;
                }
            }
            function k(a, b) {
                d.$broadcast("$locationChangeSuccess", l.absUrl(), a, l.$$state, b);
            }
            var l, m;
            m = c.baseHref();
            var p, n = c.url();
            if (b.enabled) {
                if (!m && b.requireBase) throw lb("nobase");
                p = n.substring(0, n.indexOf("/", n.indexOf("//") + 2)) + (m || "/"), m = f.history ? nc : wd;
            } else p = Ba(n), m = oc;
            var r = p.substr(0, Ba(p).lastIndexOf("/") + 1);
            (l = new m(p, r, "#" + a)).$$parseLinkUrl(n, n), l.$$state = c.state();
            var J = /^\s*(javascript|mailto):/i;
            e.on("click", function(a) {
                if ((f = b.rewriteLinks) && !a.ctrlKey && !a.metaKey && !a.shiftKey && 2 !== a.which && 2 !== a.button) {
                    for (var h = D(a.target); "a" !== xa(h[0]); ) if (h[0] === e[0] || !(h = h.parent())[0]) return;
                    if (!E(f) || !x(h.attr(f))) {
                        var f = h.prop("href"), k = h.attr("href") || h.attr("xlink:href");
                        F(f) && "[object SVGAnimatedString]" === f.toString() && (f = Da(f.animVal).href), 
                        J.test(f) || !f || h.attr("target") || a.isDefaultPrevented() || !l.$$parseLinkUrl(f, k) || (a.preventDefault(), 
                        l.absUrl() !== c.url() && (d.$apply(), g.angular["ff-684208-preventDefault"] = !0));
                    }
                }
            }), mb(l.absUrl()) !== mb(n) && c.url(l.absUrl(), !0);
            var q = !0;
            return c.onUrlChange(function(a, b) {
                mc(a, r) ? (d.$evalAsync(function() {
                    var f, c = l.absUrl(), e = l.$$state;
                    a = mb(a), l.$$parse(a), l.$$state = b, f = d.$broadcast("$locationChangeStart", a, c, b, e).defaultPrevented, 
                    l.absUrl() === a && (f ? (l.$$parse(c), h(c, !1, l.$$state = e)) : (q = !1, k(c, e)));
                }), d.$$phase || d.$digest()) : g.location.href = a;
            }), d.$watch(function() {
                var a = mb(c.url()), b = mb(l.absUrl()), e = c.state(), g = l.$$replace, m = a !== b || l.$$html5 && f.history && e !== l.$$state;
                (q || m) && (q = !1, d.$evalAsync(function() {
                    var b = l.absUrl(), c = d.$broadcast("$locationChangeStart", b, a, l.$$state, e).defaultPrevented;
                    l.absUrl() === b && (c ? (l.$$parse(a), l.$$state = e) : (m && h(b, g, e === l.$$state ? null : l.$$state), 
                    k(a, e)));
                })), l.$$replace = !1;
            }), l;
        } ];
    }
    function Ff() {
        var a = !0, b = this;
        this.debugEnabled = function(b) {
            return v(b) ? (a = b, this) : a;
        }, this.$get = [ "$window", function(d) {
            function f(a) {
                var b = d.console || {}, f = b[a] || b.log || w;
                a = !1;
                try {
                    a = !!f.apply;
                } catch (k) {}
                return a ? function() {
                    var a = [];
                    return q(arguments, function(b) {
                        a.push(function(a) {
                            return a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line)), 
                            a;
                        }(b));
                    }), f.apply(b, a);
                } : function(a, b) {
                    f(a, null == b ? "" : b);
                };
            }
            return {
                log: f("log"),
                info: f("info"),
                warn: f("warn"),
                error: f("error"),
                debug: function() {
                    var c = f("debug");
                    return function() {
                        a && c.apply(b, arguments);
                    };
                }()
            };
        } ];
    }
    function ug(a) {
        return a + "";
    }
    function vg(a, b) {
        return void 0 !== a ? a : b;
    }
    function yd(a, b) {
        return void 0 === a ? b : void 0 === b ? a : a + b;
    }
    function V(a, b) {
        var d, c, f;
        switch (a.type) {
          case s.Program:
            d = !0, q(a.body, function(a) {
                V(a.expression, b), d = d && a.expression.constant;
            }), a.constant = d;
            break;

          case s.Literal:
            a.constant = !0, a.toWatch = [];
            break;

          case s.UnaryExpression:
            V(a.argument, b), a.constant = a.argument.constant, a.toWatch = a.argument.toWatch;
            break;

          case s.BinaryExpression:
            V(a.left, b), V(a.right, b), a.constant = a.left.constant && a.right.constant, a.toWatch = a.left.toWatch.concat(a.right.toWatch);
            break;

          case s.LogicalExpression:
            V(a.left, b), V(a.right, b), a.constant = a.left.constant && a.right.constant, a.toWatch = a.constant ? [] : [ a ];
            break;

          case s.ConditionalExpression:
            V(a.test, b), V(a.alternate, b), V(a.consequent, b), a.constant = a.test.constant && a.alternate.constant && a.consequent.constant, 
            a.toWatch = a.constant ? [] : [ a ];
            break;

          case s.Identifier:
            a.constant = !1, a.toWatch = [ a ];
            break;

          case s.MemberExpression:
            V(a.object, b), a.computed && V(a.property, b), a.constant = a.object.constant && (!a.computed || a.property.constant), 
            a.toWatch = [ a ];
            break;

          case s.CallExpression:
            d = f = !!a.filter && !b(a.callee.name).$stateful, c = [], q(a.arguments, function(a) {
                V(a, b), d = d && a.constant, a.constant || c.push.apply(c, a.toWatch);
            }), a.constant = d, a.toWatch = f ? c : [ a ];
            break;

          case s.AssignmentExpression:
            V(a.left, b), V(a.right, b), a.constant = a.left.constant && a.right.constant, a.toWatch = [ a ];
            break;

          case s.ArrayExpression:
            d = !0, c = [], q(a.elements, function(a) {
                V(a, b), d = d && a.constant, a.constant || c.push.apply(c, a.toWatch);
            }), a.constant = d, a.toWatch = c;
            break;

          case s.ObjectExpression:
            d = !0, c = [], q(a.properties, function(a) {
                V(a.value, b), d = d && a.value.constant && !a.computed, a.value.constant || c.push.apply(c, a.value.toWatch);
            }), a.constant = d, a.toWatch = c;
            break;

          case s.ThisExpression:
            a.constant = !1, a.toWatch = [];
            break;

          case s.LocalsExpression:
            a.constant = !1, a.toWatch = [];
        }
    }
    function zd(a) {
        if (1 === a.length) {
            var b = (a = a[0].expression).toWatch;
            return 1 !== b.length ? b : b[0] !== a ? b : void 0;
        }
    }
    function Ad(a) {
        return a.type === s.Identifier || a.type === s.MemberExpression;
    }
    function Bd(a) {
        if (1 === a.body.length && Ad(a.body[0].expression)) return {
            type: s.AssignmentExpression,
            left: a.body[0].expression,
            right: {
                type: s.NGValueParameter
            },
            operator: "="
        };
    }
    function Cd(a) {
        return 0 === a.body.length || 1 === a.body.length && (a.body[0].expression.type === s.Literal || a.body[0].expression.type === s.ArrayExpression || a.body[0].expression.type === s.ObjectExpression);
    }
    function Dd(a, b) {
        this.astBuilder = a, this.$filter = b;
    }
    function Ed(a, b) {
        this.astBuilder = a, this.$filter = b;
    }
    function pc(a) {
        return y(a.valueOf) ? a.valueOf() : wg.call(a);
    }
    function Gf() {
        var d, c, a = W(), b = {
            true: !0,
            false: !1,
            null: null,
            undefined: void 0
        };
        this.addLiteral = function(a, c) {
            b[a] = c;
        }, this.setIdentifierFns = function(a, b) {
            return d = a, c = b, this;
        }, this.$get = [ "$filter", function(f) {
            function e(a, b) {
                return null == a || null == b ? a === b : ("object" != typeof a || "object" != typeof (a = pc(a))) && (a === b || a != a && b != b);
            }
            function g(a, b, c, d, f) {
                var h;
                if (1 === (g = d.inputs).length) {
                    var k = e, g = g[0];
                    return a.$watch(function(a) {
                        var b = g(a);
                        return e(b, k) || (h = d(a, void 0, void 0, [ b ]), k = b && pc(b)), h;
                    }, b, c, f);
                }
                for (var l = [], m = [], n = 0, I = g.length; n < I; n++) l[n] = e, m[n] = null;
                return a.$watch(function(a) {
                    for (var b = !1, c = 0, f = g.length; c < f; c++) {
                        var k = g[c](a);
                        (b || (b = !e(k, l[c]))) && (m[c] = k, l[c] = k && pc(k));
                    }
                    return b && (h = d(a, void 0, void 0, m)), h;
                }, b, c, f);
            }
            function h(a, b, c, d, e) {
                function h(a, c, d) {
                    l = a, y(b) && b(a, c, d), v(a) && d.$$postDigest(function() {
                        v(l) && k();
                    });
                }
                var k, l;
                return k = d.inputs ? g(a, h, c, d, e) : a.$watch(function(a) {
                    return d(a);
                }, h, c);
            }
            function k(a, b, c, d) {
                function e(a) {
                    var b = !0;
                    return q(a, function(a) {
                        v(a) || (b = !1);
                    }), b;
                }
                var f, g;
                return f = a.$watch(function(a) {
                    return d(a);
                }, function(a, c, d) {
                    g = a, y(b) && b(a, c, d), e(a) && d.$$postDigest(function() {
                        e(g) && f();
                    });
                }, c);
            }
            function l(a, b, c, d) {
                var e = a.$watch(function(a) {
                    return e(), d(a);
                }, b, c);
                return e;
            }
            function m(a, b) {
                if (!b) return a;
                var c = a.$$watchDelegate, d = !1;
                c = c !== k && c !== h ? function(c, e, f, g) {
                    return f = d && g ? g[0] : a(c, e, f, g), b(f, c, e);
                } : function(c, d, e, f) {
                    return e = a(c, d, e, f), c = b(e, c, d), v(e) ? c : e;
                }, d = !a.inputs;
                return a.$$watchDelegate && a.$$watchDelegate !== g ? (c.$$watchDelegate = a.$$watchDelegate, 
                c.inputs = a.inputs) : b.$stateful || (c.$$watchDelegate = g, c.inputs = a.inputs ? a.inputs : [ a ]), 
                c;
            }
            var n = {
                csp: za().noUnsafeEval,
                literals: Fa(b),
                isIdentifierStart: y(d) && d,
                isIdentifierContinue: y(c) && c
            };
            return function(b, c) {
                var d, e, u;
                switch (typeof b) {
                  case "string":
                    return u = b = b.trim(), (d = a[u]) || (":" === b.charAt(0) && ":" === b.charAt(1) && (e = !0, 
                    b = b.substring(2)), d = new qc(n), (d = new rc(d, f, n).parse(b)).constant ? d.$$watchDelegate = l : e ? d.$$watchDelegate = d.literal ? k : h : d.inputs && (d.$$watchDelegate = g), 
                    a[u] = d), m(d, c);

                  case "function":
                    return m(b, c);

                  default:
                    return m(w, c);
                }
            };
        } ];
    }
    function If() {
        var a = !0;
        this.$get = [ "$rootScope", "$exceptionHandler", function(b, d) {
            return Fd(function(a) {
                b.$evalAsync(a);
            }, d, a);
        } ], this.errorOnUnhandledRejections = function(b) {
            return v(b) ? (a = b, this) : a;
        };
    }
    function Jf() {
        var a = !0;
        this.$get = [ "$browser", "$exceptionHandler", function(b, d) {
            return Fd(function(a) {
                b.defer(a);
            }, d, a);
        } ], this.errorOnUnhandledRejections = function(b) {
            return v(b) ? (a = b, this) : a;
        };
    }
    function Fd(a, b, d) {
        function c() {
            return new f();
        }
        function f() {
            var a = this.promise = new e();
            this.resolve = function(b) {
                k(a, b);
            }, this.reject = function(b) {
                m(a, b);
            }, this.notify = function(b) {
                p(a, b);
            };
        }
        function e() {
            this.$$state = {
                status: 0
            };
        }
        function g() {
            for (;!v && t.length; ) {
                var a = t.shift();
                if (!a.pur) {
                    a.pur = !0;
                    var c = "Possibly unhandled rejection: " + ("function" == typeof (c = a.value) ? c.toString().replace(/ \{[\s\S]*$/, "") : x(c) ? "undefined" : "string" != typeof c ? we(c) : c);
                    a.value instanceof Error ? b(a.value, c) : b(c);
                }
            }
        }
        function h(b) {
            !d || b.pending || 2 !== b.status || b.pur || (0 === v && 0 === t.length && a(g), 
            t.push(b)), !b.processScheduled && b.pending && (b.processScheduled = !0, ++v, a(function() {
                var c, e, f;
                f = b.pending, b.processScheduled = !1, b.pending = void 0;
                try {
                    for (var h = 0, l = f.length; h < l; ++h) {
                        b.pur = !0, e = f[h][0], c = f[h][b.status];
                        try {
                            y(c) ? k(e, c(b.value)) : 1 === b.status ? k(e, b.value) : m(e, b.value);
                        } catch (n) {
                            m(e, n);
                        }
                    }
                } finally {
                    --v, d && 0 === v && a(g);
                }
            }));
        }
        function k(a, b) {
            a.$$state.status || (b === a ? n(a, H("qcycle", b)) : function l(a, b) {
                function c(b) {
                    g || (g = !0, l(a, b));
                }
                function d(b) {
                    g || (g = !0, n(a, b));
                }
                function e(b) {
                    p(a, b);
                }
                var f, g = !1;
                try {
                    (F(b) || y(b)) && (f = b.then), y(f) ? (a.$$state.status = -1, f.call(b, c, d, e)) : (a.$$state.value = b, 
                    a.$$state.status = 1, h(a.$$state));
                } catch (k) {
                    d(k);
                }
            }(a, b));
        }
        function m(a, b) {
            a.$$state.status || n(a, b);
        }
        function n(a, b) {
            a.$$state.value = b, a.$$state.status = 2, h(a.$$state);
        }
        function p(c, d) {
            var e = c.$$state.pending;
            c.$$state.status <= 0 && e && e.length && a(function() {
                for (var a, c, f = 0, g = e.length; f < g; f++) {
                    c = e[f][0], a = e[f][3];
                    try {
                        p(c, y(a) ? a(d) : d);
                    } catch (h) {
                        b(h);
                    }
                }
            });
        }
        function r(a) {
            var b = new e();
            return m(b, a), b;
        }
        function J(a, b, c) {
            var d = null;
            try {
                y(c) && (d = c());
            } catch (e) {
                return r(e);
            }
            return d && y(d.then) ? d.then(function() {
                return b(a);
            }, r) : b(a);
        }
        function s(a, b, c, d) {
            var f = new e();
            return k(f, a), f.then(b, c, d);
        }
        function u(a) {
            if (!y(a)) throw H("norslvr", a);
            var b = new e();
            return a(function(a) {
                k(b, a);
            }, function(a) {
                m(b, a);
            }), b;
        }
        var H = M("$q", TypeError), v = 0, t = [];
        R(e.prototype, {
            then: function(a, b, c) {
                if (x(a) && x(b) && x(c)) return this;
                var d = new e();
                return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([ d, a, b, c ]), 
                0 < this.$$state.status && h(this.$$state), d;
            },
            catch: function(a) {
                return this.then(null, a);
            },
            finally: function(a, b) {
                return this.then(function(b) {
                    return J(b, w, a);
                }, function(b) {
                    return J(b, r, a);
                }, b);
            }
        });
        var w = s;
        return u.prototype = e.prototype, u.defer = c, u.reject = r, u.when = s, u.resolve = w, 
        u.all = function(a) {
            var b = new e(), c = 0, d = C(a) ? [] : {};
            return q(a, function(a, e) {
                c++, s(a).then(function(a) {
                    d[e] = a, --c || k(b, d);
                }, function(a) {
                    m(b, a);
                });
            }), 0 === c && k(b, d), b;
        }, u.race = function(a) {
            var b = c();
            return q(a, function(a) {
                s(a).then(b.resolve, b.reject);
            }), b.promise;
        }, u;
    }
    function Sf() {
        this.$get = [ "$window", "$timeout", function(a, b) {
            var d = a.requestAnimationFrame || a.webkitRequestAnimationFrame, c = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame, f = !!d, e = f ? function(a) {
                var b = d(a);
                return function() {
                    c(b);
                };
            } : function(a) {
                var c = b(a, 16.66, !1);
                return function() {
                    b.cancel(c);
                };
            };
            return e.supported = f, e;
        } ];
    }
    function Hf() {
        var b = 10, d = M("$rootScope"), c = null, f = null;
        this.digestTtl = function(a) {
            return arguments.length && (b = a), b;
        }, this.$get = [ "$exceptionHandler", "$parse", "$browser", function(e, g, h) {
            function k(a) {
                a.currentScope.$$destroyed = !0;
            }
            function m() {
                this.$id = ++rb, this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, 
                (this.$root = this).$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, 
                this.$$watchersCount = 0, this.$$isolateBindings = null;
            }
            function n(a) {
                if (H.$$phase) throw d("inprog", H.$$phase);
                H.$$phase = a;
            }
            function p(a, b) {
                for (;a.$$watchersCount += b, a = a.$parent; ) ;
            }
            function r(a, b, c) {
                for (;a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c], 
                a = a.$parent; ) ;
            }
            function J() {}
            function s() {
                for (;ia.length; ) try {
                    ia.shift()();
                } catch (a) {
                    e(a);
                }
                f = null;
            }
            m.prototype = {
                constructor: m,
                $new: function(b, c) {
                    var d;
                    return c = c || this, b ? (d = new m()).$root = this.$root : (this.$$ChildScope || (this.$$ChildScope = function(a) {
                        function b() {
                            this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, 
                            this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$id = ++rb, 
                            this.$$ChildScope = null;
                        }
                        return b.prototype = a, b;
                    }(this)), d = new this.$$ChildScope()), d.$parent = c, d.$$prevSibling = c.$$childTail, 
                    c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d, 
                    (b || c !== this) && d.$on("$destroy", k), d;
                },
                $watch: function(a, b, d, e) {
                    var f = g(a);
                    if (f.$$watchDelegate) return f.$$watchDelegate(this, b, d, f, a);
                    var h = this, k = h.$$watchers, l = {
                        fn: b,
                        last: J,
                        get: f,
                        exp: e || a,
                        eq: !!d
                    };
                    return c = null, y(b) || (l.fn = w), k || ((k = h.$$watchers = []).$$digestWatchIndex = -1), 
                    k.unshift(l), k.$$digestWatchIndex++, p(this, 1), function() {
                        var a = $a(k, l);
                        0 <= a && (p(h, -1), a < k.$$digestWatchIndex && k.$$digestWatchIndex--), c = null;
                    };
                },
                $watchGroup: function(a, b) {
                    function c() {
                        h = !1, k ? (k = !1, b(e, e, g)) : b(e, d, g);
                    }
                    var d = Array(a.length), e = Array(a.length), f = [], g = this, h = !1, k = !0;
                    if (a.length) return 1 === a.length ? this.$watch(a[0], function(a, c, f) {
                        e[0] = a, d[0] = c, b(e, a === c ? e : d, f);
                    }) : (q(a, function(a, b) {
                        var k = g.$watch(a, function(a, f) {
                            e[b] = a, d[b] = f, h || (h = !0, g.$evalAsync(c));
                        });
                        f.push(k);
                    }), function() {
                        for (;f.length; ) f.shift()();
                    });
                    var l = !0;
                    return g.$evalAsync(function() {
                        l && b(e, e, g);
                    }), function() {
                        l = !1;
                    };
                },
                $watchCollection: function(a, b) {
                    function c(a) {
                        var b, g, h;
                        if (!x(e = a)) {
                            if (F(e)) if (ta(e)) for (f !== n && (u = (f = n).length = 0, l++), a = e.length, 
                            u !== a && (l++, f.length = u = a), b = 0; b < a; b++) h = f[b], g = e[b], h != h && g != g || h === g || (l++, 
                            f[b] = g); else {
                                for (b in f !== p && (f = p = {}, u = 0, l++), a = 0, e) va.call(e, b) && (a++, 
                                g = e[b], h = f[b], b in f ? h != h && g != g || h === g || (l++, f[b] = g) : (u++, 
                                f[b] = g, l++));
                                if (a < u) for (b in l++, f) va.call(e, b) || (u--, delete f[b]);
                            } else f !== e && (f = e, l++);
                            return l;
                        }
                    }
                    c.$stateful = !0;
                    var e, f, h, d = this, k = 1 < b.length, l = 0, m = g(a, c), n = [], p = {}, r = !0, u = 0;
                    return this.$watch(m, function() {
                        if (r ? (r = !1, b(e, e, d)) : b(e, h, d), k) if (F(e)) if (ta(e)) {
                            h = Array(e.length);
                            for (var a = 0; a < e.length; a++) h[a] = e[a];
                        } else for (a in h = {}, e) va.call(e, a) && (h[a] = e[a]); else h = e;
                    });
                },
                $digest: function() {
                    var a, g, k, p, r, q, x, ia, u = b, w = [];
                    n("$digest"), h.$$checkUrlChange(), this === H && null !== f && (h.defer.cancel(f), 
                    s()), c = null;
                    do {
                        for (r = !1, q = this, p = 0; p < v.length; p++) {
                            try {
                                (ia = v[p]).scope.$eval(ia.expression, ia.locals);
                            } catch (z) {
                                e(z);
                            }
                            c = null;
                        }
                        v.length = 0;
                        a: do {
                            if (p = q.$$watchers) for (p.$$digestWatchIndex = p.length; p.$$digestWatchIndex--; ) try {
                                if (a = p[p.$$digestWatchIndex]) if ((g = (0, a.get)(q)) === (k = a.last) || (a.eq ? qa(g, k) : ga(g) && ga(k))) {
                                    if (a === c) {
                                        r = !1;
                                        break a;
                                    }
                                } else r = !0, (c = a).last = a.eq ? Fa(g, null) : g, (0, a.fn)(g, k === J ? g : k, q), 
                                u < 5 && (w[x = 4 - u] || (w[x] = []), w[x].push({
                                    msg: y(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp,
                                    newVal: g,
                                    oldVal: k
                                }));
                            } catch (D) {
                                e(D);
                            }
                            if (!(p = q.$$watchersCount && q.$$childHead || q !== this && q.$$nextSibling)) for (;q !== this && !(p = q.$$nextSibling); ) q = q.$parent;
                        } while (q = p);
                        if ((r || v.length) && !u--) throw H.$$phase = null, d("infdig", b, w);
                    } while (r || v.length);
                    for (H.$$phase = null; A < t.length; ) try {
                        t[A++]();
                    } catch (E) {
                        e(E);
                    }
                    t.length = A = 0;
                },
                $destroy: function() {
                    if (!this.$$destroyed) {
                        var a = this.$parent;
                        for (var b in this.$broadcast("$destroy"), this.$$destroyed = !0, this === H && h.$$applicationDestroyed(), 
                        p(this, -this.$$watchersCount), this.$$listenerCount) r(this, this.$$listenerCount[b], b);
                        a && a.$$childHead === this && (a.$$childHead = this.$$nextSibling), a && a.$$childTail === this && (a.$$childTail = this.$$prevSibling), 
                        this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), 
                        this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = w, 
                        this.$on = this.$watch = this.$watchGroup = function() {
                            return w;
                        }, this.$$listeners = {}, this.$$nextSibling = null, function l(a) {
                            9 === La && (a.$$childHead && l(a.$$childHead), a.$$nextSibling && l(a.$$nextSibling)), 
                            a.$parent = a.$$nextSibling = a.$$prevSibling = a.$$childHead = a.$$childTail = a.$root = a.$$watchers = null;
                        }(this);
                    }
                },
                $eval: function(a, b) {
                    return g(a)(this, b);
                },
                $evalAsync: function(a, b) {
                    H.$$phase || v.length || h.defer(function() {
                        v.length && H.$digest();
                    }), v.push({
                        scope: this,
                        expression: g(a),
                        locals: b
                    });
                },
                $$postDigest: function(a) {
                    t.push(a);
                },
                $apply: function(a) {
                    try {
                        n("$apply");
                        try {
                            return this.$eval(a);
                        } finally {
                            H.$$phase = null;
                        }
                    } catch (b) {
                        e(b);
                    } finally {
                        try {
                            H.$digest();
                        } catch (c) {
                            throw e(c), c;
                        }
                    }
                },
                $applyAsync: function(a) {
                    var c = this;
                    a && ia.push(function() {
                        c.$eval(a);
                    }), a = g(a), null === f && (f = h.defer(function() {
                        H.$apply(s);
                    }));
                },
                $on: function(a, b) {
                    var c = this.$$listeners[a];
                    c || (this.$$listeners[a] = c = []), c.push(b);
                    for (var d = this; d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++, 
                    d = d.$parent; ) ;
                    var e = this;
                    return function() {
                        var d = c.indexOf(b);
                        -1 !== d && (c[d] = null, r(e, 1, a));
                    };
                },
                $emit: function(a, b) {
                    var d, l, m, c = [], f = this, g = !1, h = {
                        name: a,
                        targetScope: f,
                        stopPropagation: function() {
                            g = !0;
                        },
                        preventDefault: function() {
                            h.defaultPrevented = !0;
                        },
                        defaultPrevented: !1
                    }, k = ab([ h ], arguments, 1);
                    do {
                        for (d = f.$$listeners[a] || c, h.currentScope = f, l = 0, m = d.length; l < m; l++) if (d[l]) try {
                            d[l].apply(null, k);
                        } catch (n) {
                            e(n);
                        } else d.splice(l, 1), l--, m--;
                        if (g) return h.currentScope = null, h;
                        f = f.$parent;
                    } while (f);
                    return h.currentScope = null, h;
                },
                $broadcast: function(a, b) {
                    var c = this, d = this, f = {
                        name: a,
                        targetScope: this,
                        preventDefault: function() {
                            f.defaultPrevented = !0;
                        },
                        defaultPrevented: !1
                    };
                    if (!this.$$listenerCount[a]) return f;
                    for (var h, k, g = ab([ f ], arguments, 1); c = d; ) {
                        for (h = 0, k = (d = (f.currentScope = c).$$listeners[a] || []).length; h < k; h++) if (d[h]) try {
                            d[h].apply(null, g);
                        } catch (l) {
                            e(l);
                        } else d.splice(h, 1), h--, k--;
                        if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling)) for (;c !== this && !(d = c.$$nextSibling); ) c = c.$parent;
                    }
                    return f.currentScope = null, f;
                }
            };
            var H = new m(), v = H.$$asyncQueue = [], t = H.$$postDigestQueue = [], ia = H.$$applyAsyncQueue = [], A = 0;
            return H;
        } ];
    }
    function ze() {
        var a = /^\s*(https?|ftp|mailto|tel|file):/, b = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function(b) {
            return v(b) ? (a = b, this) : a;
        }, this.imgSrcSanitizationWhitelist = function(a) {
            return v(a) ? (b = a, this) : b;
        }, this.$get = function() {
            return function(d, c) {
                var e, f = c ? b : a;
                return "" === (e = Da(d).href) || e.match(f) ? d : "unsafe:" + e;
            };
        };
    }
    function Hd(a) {
        var b = [];
        return v(a) && q(a, function(a) {
            b.push(function(a) {
                if ("self" === a) return a;
                if (E(a)) {
                    if (-1 < a.indexOf("***")) throw ua("iwcard", a);
                    return a = Gd(a).replace(/\\\*\\\*/g, ".*").replace(/\\\*/g, "[^:/.?&;]*"), new RegExp("^" + a + "$");
                }
                if (Xa(a)) return new RegExp("^" + a.source + "$");
                throw ua("imatcher");
            }(a));
        }), b;
    }
    function Lf() {
        this.SCE_CONTEXTS = pa;
        var a = [ "self" ], b = [];
        this.resourceUrlWhitelist = function(b) {
            return arguments.length && (a = Hd(b)), a;
        }, this.resourceUrlBlacklist = function(a) {
            return arguments.length && (b = Hd(a)), b;
        }, this.$get = [ "$injector", function(d) {
            function c(a, b) {
                return "self" === a ? sd(b) : !!a.exec(b.href);
            }
            function f(a) {
                var b = function(a) {
                    this.$$unwrapTrustedValue = function() {
                        return a;
                    };
                };
                return a && (b.prototype = new a()), b.prototype.valueOf = function() {
                    return this.$$unwrapTrustedValue();
                }, b.prototype.toString = function() {
                    return this.$$unwrapTrustedValue().toString();
                }, b;
            }
            var e = function(a) {
                throw ua("unsafe");
            };
            d.has("$sanitize") && (e = d.get("$sanitize"));
            var g = f(), h = {};
            return h[pa.HTML] = f(g), h[pa.CSS] = f(g), h[pa.URL] = f(g), h[pa.JS] = f(g), h[pa.RESOURCE_URL] = f(h[pa.URL]), 
            {
                trustAs: function(a, b) {
                    var c = h.hasOwnProperty(a) ? h[a] : null;
                    if (!c) throw ua("icontext", a, b);
                    if (null === b || x(b) || "" === b) return b;
                    if ("string" != typeof b) throw ua("itype", a);
                    return new c(b);
                },
                getTrusted: function(d, f) {
                    if (null === f || x(f) || "" === f) return f;
                    if ((g = h.hasOwnProperty(d) ? h[d] : null) && f instanceof g) return f.$$unwrapTrustedValue();
                    if (d === pa.RESOURCE_URL) {
                        var n, p, g = Da(f.toString()), r = !1;
                        for (n = 0, p = a.length; n < p; n++) if (c(a[n], g)) {
                            r = !0;
                            break;
                        }
                        if (r) for (n = 0, p = b.length; n < p; n++) if (c(b[n], g)) {
                            r = !1;
                            break;
                        }
                        if (r) return f;
                        throw ua("insecurl", f.toString());
                    }
                    if (d === pa.HTML) return e(f);
                    throw ua("unsafe");
                },
                valueOf: function(a) {
                    return a instanceof g ? a.$$unwrapTrustedValue() : a;
                }
            };
        } ];
    }
    function Kf() {
        var a = !0;
        this.enabled = function(b) {
            return arguments.length && (a = !!b), a;
        }, this.$get = [ "$parse", "$sceDelegate", function(b, d) {
            if (a && La < 8) throw ua("iequirks");
            var c = ra(pa);
            c.isEnabled = function() {
                return a;
            }, c.trustAs = d.trustAs, c.getTrusted = d.getTrusted, c.valueOf = d.valueOf, a || (c.trustAs = c.getTrusted = function(a, b) {
                return b;
            }, c.valueOf = Ya), c.parseAs = function(a, d) {
                var e = b(d);
                return e.literal && e.constant ? e : b(d, function(b) {
                    return c.getTrusted(a, b);
                });
            };
            var f = c.parseAs, e = c.getTrusted, g = c.trustAs;
            return q(pa, function(a, b) {
                var d = P(b);
                c[("parse_as_" + d).replace(sc, gb)] = function(b) {
                    return f(a, b);
                }, c[("get_trusted_" + d).replace(sc, gb)] = function(b) {
                    return e(a, b);
                }, c[("trust_as_" + d).replace(sc, gb)] = function(b) {
                    return g(a, b);
                };
            }), c;
        } ];
    }
    function Mf() {
        this.$get = [ "$window", "$document", function(a, b) {
            var d = {}, c = !(a.chrome && (a.chrome.app && a.chrome.app.runtime || !a.chrome.app && a.chrome.runtime && a.chrome.runtime.id)) && a.history && a.history.pushState, f = Z((/android (\d+)/.exec(P((a.navigator || {}).userAgent)) || [])[1]), e = /Boxee/i.test((a.navigator || {}).userAgent), g = b[0] || {}, h = g.body && g.body.style, k = !1, l = !1;
            return h && (k = !!("transition" in h || "webkitTransition" in h), l = !!("animation" in h || "webkitAnimation" in h)), 
            {
                history: !(!c || f < 4 || e),
                hasEvent: function(a) {
                    if ("input" === a && La) return !1;
                    if (x(d[a])) {
                        var b = g.createElement("div");
                        d[a] = "on" + a in b;
                    }
                    return d[a];
                },
                csp: za(),
                transitions: k,
                animations: l,
                android: f
            };
        } ];
    }
    function Of() {
        var a;
        this.httpOptions = function(b) {
            return b ? (a = b, this) : a;
        }, this.$get = [ "$exceptionHandler", "$templateCache", "$http", "$q", "$sce", function(b, d, c, f, e) {
            function g(h, k) {
                g.totalPendingRequests++, E(h) && !x(d.get(h)) || (h = e.getTrustedResourceUrl(h));
                var l = c.defaults && c.defaults.transformResponse;
                return C(l) ? l = l.filter(function(a) {
                    return a !== jc;
                }) : l === jc && (l = null), c.get(h, R({
                    cache: d,
                    transformResponse: l
                }, a)).finally(function() {
                    g.totalPendingRequests--;
                }).then(function(a) {
                    return d.put(h, a.data), a.data;
                }, function(a) {
                    return k || (a = yg("tpload", h, a.status, a.statusText), b(a)), f.reject(a);
                });
            }
            return g.totalPendingRequests = 0, g;
        } ];
    }
    function Pf() {
        this.$get = [ "$rootScope", "$browser", "$location", function(a, b, d) {
            return {
                findBindings: function(a, b, d) {
                    a = a.getElementsByClassName("ng-binding");
                    var g = [];
                    return q(a, function(a) {
                        var c = $.element(a).data("$binding");
                        c && q(c, function(c) {
                            d ? new RegExp("(^|\\s)" + Gd(b) + "(\\s|\\||$)").test(c) && g.push(a) : -1 !== c.indexOf(b) && g.push(a);
                        });
                    }), g;
                },
                findModels: function(a, b, d) {
                    for (var g = [ "ng-", "data-ng-", "ng\\:" ], h = 0; h < g.length; ++h) {
                        var k = a.querySelectorAll("[" + g[h] + "model" + (d ? "=" : "*=") + '"' + b + '"]');
                        if (k.length) return k;
                    }
                },
                getLocation: function() {
                    return d.url();
                },
                setLocation: function(b) {
                    b !== d.url() && (d.url(b), a.$digest());
                },
                whenStable: function(a) {
                    b.notifyWhenNoOutstandingRequests(a);
                }
            };
        } ];
    }
    function Qf() {
        this.$get = [ "$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(a, b, d, c, f) {
            function e(e, k, l) {
                y(e) || (l = k, k = e, e = w);
                var q, m = wa.call(arguments, 3), n = v(l) && !l, p = (n ? c : d).defer(), r = p.promise;
                return q = b.defer(function() {
                    try {
                        p.resolve(e.apply(null, m));
                    } catch (b) {
                        p.reject(b), f(b);
                    } finally {
                        delete g[r.$$timeoutId];
                    }
                    n || a.$apply();
                }, k), r.$$timeoutId = q, g[q] = p, r;
            }
            var g = {};
            return e.cancel = function(a) {
                return !!(a && a.$$timeoutId in g) && (g[a.$$timeoutId].promise.catch(w), g[a.$$timeoutId].reject("canceled"), 
                delete g[a.$$timeoutId], b.defer.cancel(a.$$timeoutId));
            }, e;
        } ];
    }
    function Da(a) {
        return La && (ca.setAttribute("href", a), a = ca.href), ca.setAttribute("href", a), 
        {
            href: ca.href,
            protocol: ca.protocol ? ca.protocol.replace(/:$/, "") : "",
            host: ca.host,
            search: ca.search ? ca.search.replace(/^\?/, "") : "",
            hash: ca.hash ? ca.hash.replace(/^#/, "") : "",
            hostname: ca.hostname,
            port: ca.port,
            pathname: "/" === ca.pathname.charAt(0) ? ca.pathname : "/" + ca.pathname
        };
    }
    function sd(a) {
        return (a = E(a) ? Da(a) : a).protocol === Id.protocol && a.host === Id.host;
    }
    function Rf() {
        this.$get = ma(z);
    }
    function Jd(a) {
        function b(a) {
            try {
                return decodeURIComponent(a);
            } catch (b) {
                return a;
            }
        }
        var d = a[0] || {}, c = {}, f = "";
        return function() {
            var a, g, h, k, l;
            try {
                a = d.cookie || "";
            } catch (m) {
                a = "";
            }
            if (a !== f) for (a = (f = a).split("; "), c = {}, h = 0; h < a.length; h++) 0 < (k = (g = a[h]).indexOf("=")) && (l = b(g.substring(0, k)), 
            x(c[l]) && (c[l] = b(g.substring(k + 1))));
            return c;
        };
    }
    function Vf() {
        this.$get = Jd;
    }
    function Xc(a) {
        function b(d, c) {
            if (F(d)) {
                var f = {};
                return q(d, function(a, c) {
                    f[c] = b(c, a);
                }), f;
            }
            return a.factory(d + "Filter", c);
        }
        this.register = b, this.$get = [ "$injector", function(a) {
            return function(b) {
                return a.get(b + "Filter");
            };
        } ], b("currency", Kd), b("date", Ld), b("filter", zg), b("json", Ag), b("limitTo", Bg), 
        b("lowercase", Cg), b("number", Md), b("orderBy", Nd), b("uppercase", Dg);
    }
    function zg() {
        return function(a, b, d, c) {
            if (!ta(a)) {
                if (null == a) return a;
                throw M("filter")("notarray", a);
            }
            var f;
            switch (c = c || "$", tc(b)) {
              case "function":
                break;

              case "boolean":
              case "null":
              case "number":
              case "string":
                f = !0;

              case "object":
                b = function(a, b, d, c) {
                    var f = F(a) && d in a;
                    return !0 === b ? b = qa : y(b) || (b = function(a, b) {
                        return !(x(a) || (null === a || null === b ? a !== b : F(b) || F(a) && !Vb(a) || (a = P("" + a), 
                        b = P("" + b), -1 === a.indexOf(b))));
                    }), function(e) {
                        return f && !F(e) ? Ha(e, a[d], b, d, !1) : Ha(e, a, b, d, c);
                    };
                }(b, d, c, f);
                break;

              default:
                return a;
            }
            return Array.prototype.filter.call(a, b);
        };
    }
    function Ha(a, b, d, c, f, e) {
        var g = tc(a), h = tc(b);
        if ("string" === h && "!" === b.charAt(0)) return !Ha(a, b.substring(1), d, c, f);
        if (C(a)) return a.some(function(a) {
            return Ha(a, b, d, c, f);
        });
        switch (g) {
          case "object":
            var k;
            if (f) {
                for (k in a) if ("$" !== k.charAt(0) && Ha(a[k], b, d, c, !0)) return !0;
                return !e && Ha(a, b, d, c, !1);
            }
            if ("object" !== h) return d(a, b);
            for (k in b) if (!y(e = b[k]) && !x(e) && !Ha((g = k === c) ? a : a[k], e, d, c, g, g)) return !1;
            return !0;

          case "function":
            return !1;

          default:
            return d(a, b);
        }
    }
    function tc(a) {
        return null === a ? "null" : typeof a;
    }
    function Kd(a) {
        var b = a.NUMBER_FORMATS;
        return function(a, c, f) {
            return x(c) && (c = b.CURRENCY_SYM), x(f) && (f = b.PATTERNS[1].maxFrac), null == a ? a : Od(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, f).replace(/\u00A4/g, c);
        };
    }
    function Md(a) {
        var b = a.NUMBER_FORMATS;
        return function(a, c) {
            return null == a ? a : Od(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c);
        };
    }
    function Od(a, b, d, c, f) {
        if (!E(a) && !Y(a) || isNaN(a)) return "";
        var e = !isFinite(a), g = !1, h = Math.abs(a) + "", k = "";
        if (e) k = "∞"; else {
            for (function(a, b, d, c) {
                var f = a.d, e = f.length - a.i;
                if (c = f[d = (b = x(b) ? Math.min(Math.max(d, e), c) : +b) + a.i], 0 < d) {
                    f.splice(Math.max(a.i, d));
                    for (var g = d; g < f.length; g++) f[g] = 0;
                } else for (e = Math.max(0, e), a.i = 1, f.length = Math.max(1, d = b + 1), f[0] = 0, 
                g = 1; g < d; g++) f[g] = 0;
                if (5 <= c) if (d - 1 < 0) {
                    for (c = 0; d < c; c--) f.unshift(0), a.i++;
                    f.unshift(1), a.i++;
                } else f[d - 1]++;
                for (;e < Math.max(0, b); e++) f.push(0);
                (b = f.reduceRight(function(a, b, c, d) {
                    return b += a, d[c] = b % 10, Math.floor(b / 10);
                }, 0)) && (f.unshift(b), a.i++);
            }(g = function(a) {
                var d, c, f, e, g, b = 0;
                for (-1 < (c = a.indexOf(Pd)) && (a = a.replace(Pd, "")), 0 < (f = a.search(/e/i)) ? (c < 0 && (c = f), 
                c += +a.slice(f + 1), a = a.substring(0, f)) : c < 0 && (c = a.length), f = 0; a.charAt(f) === uc; f++) ;
                if (f === (g = a.length)) d = [ 0 ], c = 1; else {
                    for (g--; a.charAt(g) === uc; ) g--;
                    for (c -= f, d = [], e = 0; f <= g; f++, e++) d[e] = +a.charAt(f);
                }
                return Qd < c && (d = d.splice(0, Qd - 1), b = c - 1, c = 1), {
                    d: d,
                    e: b,
                    i: c
                };
            }(h), f, b.minFrac, b.maxFrac), k = g.d, h = g.i, f = g.e, e = [], g = k.reduce(function(a, b) {
                return a && !b;
            }, !0); h < 0; ) k.unshift(0), h++;
            for (0 < h ? e = k.splice(h, k.length) : (e = k, k = [ 0 ]), h = [], k.length >= b.lgSize && h.unshift(k.splice(-b.lgSize, k.length).join("")); k.length > b.gSize; ) h.unshift(k.splice(-b.gSize, k.length).join(""));
            k.length && h.unshift(k.join("")), k = h.join(d), e.length && (k += c + e.join("")), 
            f && (k += "e+" + f);
        }
        return a < 0 && !g ? b.negPre + k + b.negSuf : b.posPre + k + b.posSuf;
    }
    function Kb(a, b, d, c) {
        var f = "";
        for ((a < 0 || c && a <= 0) && (c ? a = 1 - a : (a = -a, f = "-")), a = "" + a; a.length < b; ) a = uc + a;
        return d && (a = a.substr(a.length - b)), f + a;
    }
    function aa(a, b, d, c, f) {
        return d = d || 0, function(e) {
            return e = e["get" + a](), (0 < d || -d < e) && (e += d), 0 === e && -12 === d && (e = 12), 
            Kb(e, b, c, f);
        };
    }
    function nb(a, b, d) {
        return function(c, f) {
            var e = c["get" + a]();
            return f[vb((d ? "STANDALONE" : "") + (b ? "SHORT" : "") + a)][e];
        };
    }
    function Rd(a) {
        var b = new Date(a, 0, 1).getDay();
        return new Date(a, 0, (b <= 4 ? 5 : 12) - b);
    }
    function Sd(a) {
        return function(b) {
            var d = Rd(b.getFullYear());
            return b = +new Date(b.getFullYear(), b.getMonth(), b.getDate() + (4 - b.getDay())) - +d, 
            Kb(b = 1 + Math.round(b / 6048e5), a);
        };
    }
    function vc(a, b) {
        return a.getFullYear() <= 0 ? b.ERAS[0] : b.ERAS[1];
    }
    function Ld(a) {
        function b(a) {
            var b;
            if (b = a.match(d)) {
                a = new Date(0);
                var e = 0, g = 0, h = b[8] ? a.setUTCFullYear : a.setFullYear, k = b[8] ? a.setUTCHours : a.setHours;
                b[9] && (e = Z(b[9] + b[10]), g = Z(b[9] + b[11])), h.call(a, Z(b[1]), Z(b[2]) - 1, Z(b[3])), 
                e = Z(b[4] || 0) - e, g = Z(b[5] || 0) - g, h = Z(b[6] || 0), b = Math.round(1e3 * parseFloat("0." + (b[7] || 0))), 
                k.call(a, e, g, h, b);
            }
            return a;
        }
        var d = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(c, d, e) {
            var k, l, g = "", h = [];
            if (d = d || "mediumDate", d = a.DATETIME_FORMATS[d] || d, E(c) && (c = Hg.test(c) ? Z(c) : b(c)), 
            Y(c) && (c = new Date(c)), !fa(c) || !isFinite(c.getTime())) return c;
            for (;d; ) d = (l = Ig.exec(d)) ? (h = ab(h, l, 1)).pop() : (h.push(d), null);
            var m = c.getTimezoneOffset();
            return e && (m = Jc(e, m), c = Wb(c, e, !0)), q(h, function(b) {
                k = Jg[b], g += k ? k(c, a.DATETIME_FORMATS, m) : "''" === b ? "'" : b.replace(/(^'|'$)/g, "").replace(/''/g, "'");
            }), g;
        };
    }
    function Ag() {
        return function(a, b) {
            return x(b) && (b = 2), cb(a, b);
        };
    }
    function Bg() {
        return function(a, b, d) {
            return b = 1 / 0 === Math.abs(Number(b)) ? Number(b) : Z(b), ga(b) ? a : (Y(a) && (a = a.toString()), 
            ta(a) ? (d = (d = !d || isNaN(d) ? 0 : Z(d)) < 0 ? Math.max(0, a.length + d) : d, 
            0 <= b ? wc(a, d, d + b) : 0 === d ? wc(a, b, a.length) : wc(a, Math.max(0, d + b), d)) : a);
        };
    }
    function wc(a, b, d) {
        return E(a) ? a.slice(b, d) : wa.call(a, b, d);
    }
    function Nd(a) {
        function b(b) {
            return b.map(function(b) {
                var c = 1, d = Ya;
                if (y(b)) d = b; else if (E(b) && ("+" !== b.charAt(0) && "-" !== b.charAt(0) || (c = "-" === b.charAt(0) ? -1 : 1, 
                b = b.substring(1)), "" !== b && (d = a(b)).constant)) {
                    var f = d();
                    d = function(a) {
                        return a[f];
                    };
                }
                return {
                    get: d,
                    descending: c
                };
            });
        }
        function d(a) {
            switch (typeof a) {
              case "number":
              case "boolean":
              case "string":
                return !0;

              default:
                return !1;
            }
        }
        function c(a, b) {
            var c = 0, d = a.type;
            if (d === (k = b.type)) {
                var k = a.value, l = b.value;
                "string" === d ? (k = k.toLowerCase(), l = l.toLowerCase()) : "object" === d && (F(k) && (k = a.index), 
                F(l) && (l = b.index)), k !== l && (c = k < l ? -1 : 1);
            } else c = d < k ? -1 : 1;
            return c;
        }
        return function(a, e, g, h) {
            if (null == a) return a;
            if (!ta(a)) throw M("orderBy")("notarray", a);
            C(e) || (e = [ e ]), 0 === e.length && (e = [ "+" ]);
            var k = b(e), l = g ? -1 : 1, m = y(h) ? h : c;
            return (a = Array.prototype.map.call(a, function(a, b) {
                return {
                    value: a,
                    tieBreaker: {
                        value: b,
                        type: "number",
                        index: b
                    },
                    predicateValues: k.map(function(c) {
                        var e = c.get(a);
                        return c = typeof e, null === e ? (c = "string", e = "null") : "object" === c && (y(e.valueOf) && d(e = e.valueOf()) || Vb(e) && d(e = e.toString())), 
                        {
                            value: e,
                            type: c,
                            index: b
                        };
                    })
                };
            })).sort(function(a, b) {
                for (var c = 0, d = k.length; c < d; c++) {
                    var e = m(a.predicateValues[c], b.predicateValues[c]);
                    if (e) return e * k[c].descending * l;
                }
                return m(a.tieBreaker, b.tieBreaker) * l;
            }), a.map(function(a) {
                return a.value;
            });
        };
    }
    function Ra(a) {
        return y(a) && (a = {
            link: a
        }), a.restrict = a.restrict || "AC", ma(a);
    }
    function Lb(a, b, d, c, f) {
        this.$$controls = [], this.$error = {}, this.$$success = {}, this.$pending = void 0, 
        this.$name = f(b.name || b.ngForm || "")(d), this.$dirty = !1, this.$valid = this.$pristine = !0, 
        this.$submitted = this.$invalid = !1, this.$$parentForm = Mb, this.$$element = a, 
        this.$$animate = c, Td(this);
    }
    function Td(a) {
        a.$$classCache = {}, a.$$classCache[Ud] = !(a.$$classCache[ob] = a.$$element.hasClass(ob));
    }
    function Vd(a) {
        function b(a, b, c) {
            c && !a.$$classCache[b] ? (a.$$animate.addClass(a.$$element, b), a.$$classCache[b] = !0) : !c && a.$$classCache[b] && (a.$$animate.removeClass(a.$$element, b), 
            a.$$classCache[b] = !1);
        }
        function d(a, c, d) {
            c = c ? "-" + Nc(c, "-") : "", b(a, ob + c, !0 === d), b(a, Ud + c, !1 === d);
        }
        var c = a.set, f = a.unset;
        a.clazz.prototype.$setValidity = function(a, g, h) {
            x(g) ? (this.$pending || (this.$pending = {}), c(this.$pending, a, h)) : (this.$pending && f(this.$pending, a, h), 
            Wd(this.$pending) && (this.$pending = void 0)), Ia(g) ? g ? (f(this.$error, a, h), 
            c(this.$$success, a, h)) : (c(this.$error, a, h), f(this.$$success, a, h)) : (f(this.$error, a, h), 
            f(this.$$success, a, h)), this.$pending ? (b(this, "ng-pending", !0), this.$valid = this.$invalid = void 0, 
            d(this, "", null)) : (b(this, "ng-pending", !1), this.$valid = Wd(this.$error), 
            this.$invalid = !this.$valid, d(this, "", this.$valid)), d(this, a, g = this.$pending && this.$pending[a] ? void 0 : !this.$error[a] && (!!this.$$success[a] || null)), 
            this.$$parentForm.$setValidity(a, g, this);
        };
    }
    function Wd(a) {
        if (a) for (var b in a) if (a.hasOwnProperty(b)) return !1;
        return !0;
    }
    function xc(a) {
        a.$formatters.push(function(b) {
            return a.$isEmpty(b) ? b : b.toString();
        });
    }
    function Sa(a, b, d, c, f, e) {
        var g = P(b[0].type);
        if (!f.android) {
            var h = !1;
            b.on("compositionstart", function() {
                h = !0;
            }), b.on("compositionend", function() {
                h = !1, l();
            });
        }
        var k, l = function(a) {
            if (k && (e.defer.cancel(k), k = null), !h) {
                var f = b.val();
                a = a && a.type, "password" === g || d.ngTrim && "false" === d.ngTrim || (f = S(f)), 
                (c.$viewValue !== f || "" === f && c.$$hasNativeValidators) && c.$setViewValue(f, a);
            }
        };
        if (f.hasEvent("input")) b.on("input", l); else {
            var m = function(a, b, c) {
                k || (k = e.defer(function() {
                    k = null, b && b.value === c || l(a);
                }));
            };
            b.on("keydown", function(a) {
                var b = a.keyCode;
                91 === b || 15 < b && b < 19 || 37 <= b && b <= 40 || m(a, this, this.value);
            }), f.hasEvent("paste") && b.on("paste cut", m);
        }
        b.on("change", l), Xd[g] && c.$$hasNativeValidators && g === d.type && b.on("keydown wheel mousedown", function(a) {
            if (!k) {
                var b = this.validity, c = b.badInput, d = b.typeMismatch;
                k = e.defer(function() {
                    k = null, b.badInput === c && b.typeMismatch === d || l(a);
                });
            }
        }), c.$render = function() {
            var a = c.$isEmpty(c.$viewValue) ? "" : c.$viewValue;
            b.val() !== a && b.val(a);
        };
    }
    function Nb(a, b) {
        return function(d, c) {
            var f, e;
            if (fa(d)) return d;
            if (E(d)) {
                if ('"' === d.charAt(0) && '"' === d.charAt(d.length - 1) && (d = d.substring(1, d.length - 1)), 
                Kg.test(d)) return new Date(d);
                if (a.lastIndex = 0, f = a.exec(d)) return f.shift(), e = c ? {
                    yyyy: c.getFullYear(),
                    MM: c.getMonth() + 1,
                    dd: c.getDate(),
                    HH: c.getHours(),
                    mm: c.getMinutes(),
                    ss: c.getSeconds(),
                    sss: c.getMilliseconds() / 1e3
                } : {
                    yyyy: 1970,
                    MM: 1,
                    dd: 1,
                    HH: 0,
                    mm: 0,
                    ss: 0,
                    sss: 0
                }, q(f, function(a, c) {
                    c < b.length && (e[b[c]] = +a);
                }), new Date(e.yyyy, e.MM - 1, e.dd, e.HH, e.mm, e.ss || 0, 1e3 * e.sss || 0);
            }
            return NaN;
        };
    }
    function pb(a, b, d, c) {
        return function(f, e, g, h, k, l, m) {
            function n(a) {
                return a && !(a.getTime && a.getTime() != a.getTime());
            }
            function p(a) {
                return v(a) && !fa(a) ? d(a) || void 0 : a;
            }
            yc(f, e, g, h), Sa(0, e, g, h, k, l);
            var q, s, u, r = h && h.$options.getOption("timezone");
            (h.$$parserName = a, h.$parsers.push(function(a) {
                return h.$isEmpty(a) ? null : b.test(a) ? (a = d(a, q), r && (a = Wb(a, r)), a) : void 0;
            }), h.$formatters.push(function(a) {
                if (a && !fa(a)) throw qb("datefmt", a);
                return n(a) ? ((q = a) && r && (q = Wb(q, r, !0)), m("date")(a, c, r)) : (q = null, 
                "");
            }), v(g.min) || g.ngMin) && (h.$validators.min = function(a) {
                return !n(a) || x(s) || d(a) >= s;
            }, g.$observe("min", function(a) {
                s = p(a), h.$validate();
            }));
            (v(g.max) || g.ngMax) && (h.$validators.max = function(a) {
                return !n(a) || x(u) || d(a) <= u;
            }, g.$observe("max", function(a) {
                u = p(a), h.$validate();
            }));
        };
    }
    function yc(a, b, d, c) {
        (c.$$hasNativeValidators = F(b[0].validity)) && c.$parsers.push(function(a) {
            var c = b.prop("validity") || {};
            return c.badInput || c.typeMismatch ? void 0 : a;
        });
    }
    function Yd(a) {
        a.$$parserName = "number", a.$parsers.push(function(b) {
            return a.$isEmpty(b) ? null : Lg.test(b) ? parseFloat(b) : void 0;
        }), a.$formatters.push(function(b) {
            if (!a.$isEmpty(b)) {
                if (!Y(b)) throw qb("numfmt", b);
                b = b.toString();
            }
            return b;
        });
    }
    function Ta(a) {
        return v(a) && !Y(a) && (a = parseFloat(a)), ga(a) ? void 0 : a;
    }
    function zc(a) {
        var b = a.toString(), d = b.indexOf(".");
        return -1 === d ? -1 < a && a < 1 && (a = /e-(\d+)$/.exec(b)) ? Number(a[1]) : 0 : b.length - d - 1;
    }
    function Zd(a, b, d) {
        if ((0 | (a = Number(a))) !== a || (0 | b) !== b || (0 | d) !== d) {
            var c = Math.max(zc(a), zc(b), zc(d));
            a *= c = Math.pow(10, c), b *= c, d *= c;
        }
        return 0 == (a - b) % d;
    }
    function $d(a, b, d, c, f) {
        if (v(c)) {
            if (!(a = a(c)).constant) throw qb("constexpr", d, c);
            return a(b);
        }
        return f;
    }
    function Ac(a, b) {
        function d(a, b) {
            if (!a || !a.length) return [];
            if (!b || !b.length) return a;
            var c = [], d = 0;
            a: for (;d < a.length; d++) {
                for (var e = a[d], f = 0; f < b.length; f++) if (e === b[f]) continue a;
                c.push(e);
            }
            return c;
        }
        function c(a) {
            var b = a;
            return C(a) ? b = a.map(c).join(" ") : F(a) && (b = Object.keys(a).filter(function(b) {
                return a[b];
            }).join(" ")), b;
        }
        function f(a) {
            var b = a;
            if (C(a)) b = a.map(f); else if (F(a)) {
                var c = !1;
                b = Object.keys(a).filter(function(b) {
                    return b = a[b], !c && x(b) && (c = !0), b;
                });
                c && b.push(void 0);
            }
            return b;
        }
        var e;
        return a = "ngClass" + a, [ "$parse", function(g) {
            return {
                restrict: "AC",
                link: function(h, k, l) {
                    function m(a, b) {
                        var c = [];
                        return q(a, function(a) {
                            (0 < b || H[a]) && (H[a] = (H[a] || 0) + b, H[a] === +(0 < b) && c.push(a));
                        }), c.join(" ");
                    }
                    function r(a) {
                        if (w === b) {
                            var c = t && t.split(" "), e = a && a.split(" "), f = d(c, e);
                            c = d(e, c), f = m(f, -1), c = m(c, 1);
                            l.$addClass(c), l.$removeClass(f);
                        }
                        t = a;
                    }
                    var t, v = ":" === (s = l[a].trim()).charAt(0) && ":" === s.charAt(1), s = g(s, v ? f : c), u = v ? function(a) {
                        (a = c(a)) !== t && r(a);
                    } : r, H = k.data("$classCounts"), w = !0;
                    H || (H = W(), k.data("$classCounts", H)), "ngClass" !== a && (e || (e = g("$index", function(a) {
                        return 1 & a;
                    })), h.$watch(e, function(a) {
                        if (a === b) {
                            var c = m((c = t) && c.split(" "), 1);
                            l.$addClass(c);
                        } else c = m((c = t) && c.split(" "), -1), l.$removeClass(c);
                        w = a;
                    })), h.$watch(s, u, v);
                }
            };
        } ];
    }
    function Ob(a, b, d, c, f, e, g, h, k) {
        this.$modelValue = this.$viewValue = Number.NaN, this.$$rawModelValue = void 0, 
        this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], 
        this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, 
        this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, 
        this.$pending = void 0, this.$name = k(d.name || "", !1)(a), this.$$parentForm = Mb, 
        this.$options = Pb, this.$$parsedNgModel = f(d.ngModel), this.$$parsedNgModelAssign = this.$$parsedNgModel.assign, 
        this.$$ngModelGet = this.$$parsedNgModel, this.$$ngModelSet = this.$$parsedNgModelAssign, 
        this.$$pendingDebounce = null, this.$$parserValid = void 0, this.$$currentValidationRunId = 0, 
        this.$$scope = a, this.$$attr = d, this.$$element = c, this.$$animate = e, this.$$timeout = g, 
        this.$$parse = f, this.$$q = h, this.$$exceptionHandler = b, Td(this), function(a) {
            a.$$scope.$watch(function() {
                var b = a.$$ngModelGet(a.$$scope);
                if (b !== a.$modelValue && (a.$modelValue == a.$modelValue || b == b)) {
                    a.$modelValue = a.$$rawModelValue = b, a.$$parserValid = void 0;
                    for (var d = a.$formatters, c = d.length, f = b; c--; ) f = d[c](f);
                    a.$viewValue !== f && (a.$$updateEmptyClasses(f), a.$viewValue = a.$$lastCommittedViewValue = f, 
                    a.$render(), a.$$runValidators(a.$modelValue, a.$viewValue, w));
                }
                return b;
            });
        }(this);
    }
    function Bc(a) {
        this.$$options = a;
    }
    function ae(a, b) {
        q(b, function(b, c) {
            v(a[c]) || (a[c] = b);
        });
    }
    var La, D, oa, Zb, Ng = /^\/(.+)\/([a-z]*)$/, va = Object.prototype.hasOwnProperty, P = function(a) {
        return E(a) ? a.toLowerCase() : a;
    }, vb = function(a) {
        return E(a) ? a.toUpperCase() : a;
    }, wa = [].slice, ng = [].splice, Og = [].push, na = Object.prototype.toString, Gc = Object.getPrototypeOf, Ga = M("ng"), $ = z.angular || (z.angular = {}), rb = 0;
    La = z.document.documentMode;
    var ga = Number.isNaN || function(a) {
        return a != a;
    };
    w.$inject = [], Ya.$inject = [];
    var C = Array.isArray, le = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/, S = function(a) {
        return E(a) ? a.trim() : a;
    }, Gd = function(a) {
        return a.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
    }, za = function() {
        if (!v(za.rules)) {
            var a = z.document.querySelector("[ng-csp]") || z.document.querySelector("[data-ng-csp]");
            if (a) {
                var b = a.getAttribute("ng-csp") || a.getAttribute("data-ng-csp");
                za.rules = {
                    noUnsafeEval: !b || -1 !== b.indexOf("no-unsafe-eval"),
                    noInlineStyle: !b || -1 !== b.indexOf("no-inline-style")
                };
            } else {
                a = za;
                try {
                    new Function(""), b = !1;
                } catch (d) {
                    b = !0;
                }
                a.rules = {
                    noUnsafeEval: b,
                    noInlineStyle: !1
                };
            }
        }
        return za.rules;
    }, sb = function() {
        if (v(sb.name_)) return sb.name_;
        var a, b, c, f, d = Ka.length;
        for (b = 0; b < d; ++b) if (c = Ka[b], a = z.document.querySelector("[" + c.replace(":", "\\:") + "jq]")) {
            f = a.getAttribute(c + "jq");
            break;
        }
        return sb.name_ = f;
    }, ne = /:/g, Ka = [ "ng-", "data-ng-", "ng:", "x-ng-" ], qe = function(a) {
        if (!a.currentScript) return !0;
        var b = a.currentScript.getAttribute("src"), d = a.createElement("a");
        if (d.href = b, a.location.origin === d.origin) return !0;
        switch (d.protocol) {
          case "http:":
          case "https:":
          case "ftp:":
          case "blob:":
          case "file:":
          case "data:":
            return !0;

          default:
            return !1;
        }
    }(z.document), te = /[A-Z]/g, Oc = !1, Ja = 3, ye = {
        full: "1.6.1",
        major: 1,
        minor: 6,
        dot: 1,
        codeName: "promise-rectification"
    };
    X.expando = "ng339";
    var ib = X.cache = {}, $f = 1;
    X._data = function(a) {
        return this.cache[a[this.expando]] || {};
    };
    var Wf = /-([a-z])/g, Pg = /^-ms-/, Ab = {
        mouseleave: "mouseout",
        mouseenter: "mouseover"
    }, ac = M("jqLite"), Zf = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, $b = /<|&#?\w+;/, Xf = /<([\w:-]+)/, Yf = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, ha = {
        option: [ 1, '<select multiple="multiple">', "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    ha.optgroup = ha.option, ha.tbody = ha.tfoot = ha.colgroup = ha.caption = ha.thead, 
    ha.th = ha.td;
    var eg = z.Node.prototype.contains || function(a) {
        return !!(16 & this.compareDocumentPosition(a));
    }, Oa = X.prototype = {
        ready: $c,
        toString: function() {
            var a = [];
            return q(this, function(b) {
                a.push("" + b);
            }), "[" + a.join(", ") + "]";
        },
        eq: function(a) {
            return D(0 <= a ? this[a] : this[this.length + a]);
        },
        length: 0,
        push: Og,
        sort: [].sort,
        splice: [].splice
    }, Gb = {};
    q("multiple selected checked disabled readOnly required open".split(" "), function(a) {
        Gb[P(a)] = a;
    });
    var ed = {};
    q("input select option textarea button form details".split(" "), function(a) {
        ed[a] = !0;
    });
    var ld = {
        ngMinlength: "minlength",
        ngMaxlength: "maxlength",
        ngMin: "min",
        ngMax: "max",
        ngPattern: "pattern",
        ngStep: "step"
    };
    q({
        data: dc,
        removeData: hb,
        hasData: function(a) {
            for (var b in ib[a.ng339]) return !0;
            return !1;
        },
        cleanData: function(a) {
            for (var b = 0, d = a.length; b < d; b++) hb(a[b]);
        }
    }, function(a, b) {
        X[b] = a;
    }), q({
        data: dc,
        inheritedData: Eb,
        scope: function(a) {
            return D.data(a, "$scope") || Eb(a.parentNode || a, [ "$isolateScope", "$scope" ]);
        },
        isolateScope: function(a) {
            return D.data(a, "$isolateScope") || D.data(a, "$isolateScopeNoTemplate");
        },
        controller: bd,
        injector: function(a) {
            return Eb(a, "$injector");
        },
        removeAttr: function(a, b) {
            a.removeAttribute(b);
        },
        hasClass: Bb,
        css: function(a, b, d) {
            if (b = xb(b.replace(Pg, "ms-")), !v(d)) return a.style[b];
            a.style[b] = d;
        },
        attr: function(a, b, d) {
            if ((c = a.nodeType) !== Ja && 2 !== c && 8 !== c && a.getAttribute) {
                var c = P(b), f = Gb[c];
                if (!v(d)) return a = a.getAttribute(b), f && null !== a && (a = c), null === a ? void 0 : a;
                null === d || !1 === d && f ? a.removeAttribute(b) : a.setAttribute(b, f ? c : d);
            }
        },
        prop: function(a, b, d) {
            if (!v(d)) return a[b];
            a[b] = d;
        },
        text: function() {
            function a(a, d) {
                if (x(d)) {
                    var c = a.nodeType;
                    return 1 === c || c === Ja ? a.textContent : "";
                }
                a.textContent = d;
            }
            return a.$dv = "", a;
        }(),
        val: function(a, b) {
            if (x(b)) {
                if (a.multiple && "select" === xa(a)) {
                    var d = [];
                    return q(a.options, function(a) {
                        a.selected && d.push(a.value || a.text);
                    }), d;
                }
                return a.value;
            }
            a.value = b;
        },
        html: function(a, b) {
            if (x(b)) return a.innerHTML;
            yb(a, !0), a.innerHTML = b;
        },
        empty: cd
    }, function(a, b) {
        X.prototype[b] = function(b, c) {
            var f, e, g = this.length;
            if (a !== cd && x(2 === a.length && a !== Bb && a !== bd ? b : c)) {
                if (F(b)) {
                    for (f = 0; f < g; f++) if (a === dc) a(this[f], b); else for (e in b) a(this[f], e, b[e]);
                    return this;
                }
                for (g = x(f = a.$dv) ? Math.min(g, 1) : g, e = 0; e < g; e++) {
                    var h = a(this[e], b, c);
                    f = f ? f + h : h;
                }
                return f;
            }
            for (f = 0; f < g; f++) a(this[f], b, c);
            return this;
        };
    }), q({
        removeData: hb,
        on: function(a, b, d, c) {
            if (v(c)) throw ac("onargs");
            if (Yc(a)) {
                var f = (c = zb(a, !0)).events, e = c.handle;
                e || (e = c.handle = function(a, b) {
                    var d = function(c, d) {
                        c.isDefaultPrevented = function() {
                            return c.defaultPrevented;
                        };
                        var e = b[d || c.type], g = e ? e.length : 0;
                        if (g) {
                            if (x(c.immediatePropagationStopped)) {
                                var h = c.stopImmediatePropagation;
                                c.stopImmediatePropagation = function() {
                                    c.immediatePropagationStopped = !0, c.stopPropagation && c.stopPropagation(), h && h.call(c);
                                };
                            }
                            c.isImmediatePropagationStopped = function() {
                                return !0 === c.immediatePropagationStopped;
                            };
                            var k = e.specialHandlerWrapper || cg;
                            1 < g && (e = ra(e));
                            for (var l = 0; l < g; l++) c.isImmediatePropagationStopped() || k(a, c, e[l]);
                        }
                    };
                    return d.elem = a, d;
                }(a, f));
                for (var g = (c = 0 <= b.indexOf(" ") ? b.split(" ") : [ b ]).length, h = function(b, c, g) {
                    var h = f[b];
                    h || ((h = f[b] = []).specialHandlerWrapper = c, "$destroy" === b || g || a.addEventListener(b, e)), 
                    h.push(d);
                }; g--; ) b = c[g], Ab[b] ? (h(Ab[b], dg), h(b, void 0, !0)) : h(b);
            }
        },
        off: ad,
        one: function(a, b, d) {
            (a = D(a)).on(b, function f() {
                a.off(b, d), a.off(b, f);
            }), a.on(b, d);
        },
        replaceWith: function(a, b) {
            var d, c = a.parentNode;
            yb(a), q(new X(b), function(b) {
                d ? c.insertBefore(b, d.nextSibling) : c.replaceChild(b, a), d = b;
            });
        },
        children: function(a) {
            var b = [];
            return q(a.childNodes, function(a) {
                1 === a.nodeType && b.push(a);
            }), b;
        },
        contents: function(a) {
            return a.contentDocument || a.childNodes || [];
        },
        append: function(a, b) {
            if (1 === (d = a.nodeType) || 11 === d) for (var d = 0, c = (b = new X(b)).length; d < c; d++) a.appendChild(b[d]);
        },
        prepend: function(a, b) {
            if (1 === a.nodeType) {
                var d = a.firstChild;
                q(new X(b), function(b) {
                    a.insertBefore(b, d);
                });
            }
        },
        wrap: function(a, b) {
            var d = D(b).eq(0).clone()[0], c = a.parentNode;
            c && c.replaceChild(d, a), d.appendChild(a);
        },
        remove: Fb,
        detach: function(a) {
            Fb(a, !0);
        },
        after: function(a, b) {
            var d = a, c = a.parentNode;
            if (c) for (var f = 0, e = (b = new X(b)).length; f < e; f++) {
                var g = b[f];
                c.insertBefore(g, d.nextSibling), d = g;
            }
        },
        addClass: Db,
        removeClass: Cb,
        toggleClass: function(a, b, d) {
            b && q(b.split(" "), function(b) {
                var f = d;
                x(f) && (f = !Bb(a, b)), (f ? Db : Cb)(a, b);
            });
        },
        parent: function(a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null;
        },
        next: function(a) {
            return a.nextElementSibling;
        },
        find: function(a, b) {
            return a.getElementsByTagName ? a.getElementsByTagName(b) : [];
        },
        clone: cc,
        triggerHandler: function(a, b, d) {
            var c, f, e = b.type || b, g = zb(a);
            (g = (g = g && g.events) && g[e]) && (c = {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                },
                isDefaultPrevented: function() {
                    return !0 === this.defaultPrevented;
                },
                stopImmediatePropagation: function() {
                    this.immediatePropagationStopped = !0;
                },
                isImmediatePropagationStopped: function() {
                    return !0 === this.immediatePropagationStopped;
                },
                stopPropagation: w,
                type: e,
                target: a
            }, b.type && (c = R(c, b)), b = ra(g), f = d ? [ c ].concat(d) : [ c ], q(b, function(b) {
                c.isImmediatePropagationStopped() || b.apply(a, f);
            }));
        }
    }, function(a, b) {
        X.prototype[b] = function(b, c, f) {
            for (var e, g = 0, h = this.length; g < h; g++) x(e) ? v(e = a(this[g], b, c, f)) && (e = D(e)) : bc(e, a(this[g], b, c, f));
            return v(e) ? e : this;
        };
    }), X.prototype.bind = X.prototype.on, X.prototype.unbind = X.prototype.off, Qa.prototype = {
        put: function(a, b) {
            this[la(a, this.nextUid)] = b;
        },
        get: function(a) {
            return this[la(a, this.nextUid)];
        },
        remove: function(a) {
            var b = this[a = la(a, this.nextUid)];
            return delete this[a], b;
        }
    };
    var Uf = [ function() {
        this.$get = [ function() {
            return Qa;
        } ];
    } ], gg = /^([^(]+?)=>/, hg = /^[^(]*\(\s*([^)]*)\)/m, Qg = /,/, Rg = /^\s*(_?)(\S+?)\1\s*$/, fg = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, da = M("$injector");
    eb.$$annotate = function(a, b, d) {
        var c;
        if ("function" == typeof a) {
            if (!(c = a.$inject)) {
                if (c = [], a.length) {
                    if (b) throw E(d) && d || (d = a.name || function(a) {
                        return (a = fd(a)) ? "function(" + (a[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn";
                    }(a)), da("strictdi", d);
                    q((b = fd(a))[1].split(Qg), function(a) {
                        a.replace(Rg, function(a, b, d) {
                            c.push(d);
                        });
                    });
                }
                a.$inject = c;
            }
        } else C(a) ? (tb(a[b = a.length - 1], "fn"), c = a.slice(0, b)) : tb(a, "fn", !0);
        return c;
    };
    var be = M("$animate"), lf = function() {
        this.$get = w;
    }, mf = function() {
        var a = new Qa(), b = [];
        this.$get = [ "$$AnimateRunner", "$rootScope", function(d, c) {
            function f(a, b, c) {
                var d = !1;
                return b && q(b = E(b) ? b.split(" ") : C(b) ? b : [], function(b) {
                    b && (d = !0, a[b] = c);
                }), d;
            }
            function e() {
                q(b, function(b) {
                    var c = a.get(b);
                    if (c) {
                        var d = function(a) {
                            E(a) && (a = a.split(" "));
                            var b = W();
                            return q(a, function(a) {
                                a.length && (b[a] = !0);
                            }), b;
                        }(b.attr("class")), e = "", f = "";
                        q(c, function(a, b) {
                            a !== !!d[b] && (a ? e += (e.length ? " " : "") + b : f += (f.length ? " " : "") + b);
                        }), q(b, function(a) {
                            e && Db(a, e), f && Cb(a, f);
                        }), a.remove(b);
                    }
                }), b.length = 0;
            }
            return {
                enabled: w,
                on: w,
                off: w,
                pin: w,
                push: function(g, h, k, l) {
                    return l && l(), (k = k || {}).from && g.css(k.from), k.to && g.css(k.to), (k.addClass || k.removeClass) && (h = k.addClass, 
                    l = k.removeClass, h = f(k = a.get(g) || {}, h, !0), l = f(k, l, !1), (h || l) && (a.put(g, k), 
                    b.push(g), 1 === b.length && c.$$postDigest(e))), (g = new d()).complete(), g;
                }
            };
        } ];
    }, jf = [ "$provide", function(a) {
        var b = this;
        this.$$registeredAnimations = Object.create(null), this.register = function(d, c) {
            if (d && "." !== d.charAt(0)) throw be("notcsel", d);
            var f = d + "-animation";
            b.$$registeredAnimations[d.substr(1)] = f, a.factory(f, c);
        }, this.classNameFilter = function(a) {
            if (1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null) && /(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString())) throw be("nongcls", "ng-animate");
            return this.$$classNameFilter;
        }, this.$get = [ "$$animateQueue", function(a) {
            function b(a, c, d) {
                if (d) {
                    var h;
                    a: {
                        for (h = 0; h < d.length; h++) {
                            var k = d[h];
                            if (1 === k.nodeType) {
                                h = k;
                                break a;
                            }
                        }
                        h = void 0;
                    }
                    !h || h.parentNode || h.previousElementSibling || (d = null);
                }
                d ? d.after(a) : c.prepend(a);
            }
            return {
                on: a.on,
                off: a.off,
                pin: a.pin,
                enabled: a.enabled,
                cancel: function(a) {
                    a.end && a.end();
                },
                enter: function(f, e, g, h) {
                    return e = e && D(e), g = g && D(g), b(f, e = e || g.parent(), g), a.push(f, "enter", Aa(h));
                },
                move: function(f, e, g, h) {
                    return e = e && D(e), g = g && D(g), b(f, e = e || g.parent(), g), a.push(f, "move", Aa(h));
                },
                leave: function(b, c) {
                    return a.push(b, "leave", Aa(c), function() {
                        b.remove();
                    });
                },
                addClass: function(b, c, g) {
                    return (g = Aa(g)).addClass = jb(g.addclass, c), a.push(b, "addClass", g);
                },
                removeClass: function(b, c, g) {
                    return (g = Aa(g)).removeClass = jb(g.removeClass, c), a.push(b, "removeClass", g);
                },
                setClass: function(b, c, g, h) {
                    return (h = Aa(h)).addClass = jb(h.addClass, c), h.removeClass = jb(h.removeClass, g), 
                    a.push(b, "setClass", h);
                },
                animate: function(b, c, g, h, k) {
                    return (k = Aa(k)).from = k.from ? R(k.from, c) : c, k.to = k.to ? R(k.to, g) : g, 
                    k.tempClasses = jb(k.tempClasses, h || "ng-inline-animate"), a.push(b, "animate", k);
                }
            };
        } ];
    } ], of = function() {
        this.$get = [ "$$rAF", function(a) {
            function b(b) {
                d.push(b), 1 < d.length || a(function() {
                    for (var a = 0; a < d.length; a++) d[a]();
                    d = [];
                });
            }
            var d = [];
            return function() {
                var a = !1;
                return b(function() {
                    a = !0;
                }), function(d) {
                    a ? d() : b(d);
                };
            };
        } ];
    }, nf = function() {
        this.$get = [ "$q", "$sniffer", "$$animateAsyncRun", "$$isDocumentHidden", "$timeout", function(a, b, d, c, f) {
            function e(a) {
                this.setHost(a);
                var b = d();
                this._doneCallbacks = [], this._tick = function(a) {
                    c() ? f(a, 0, !1) : b(a);
                }, this._state = 0;
            }
            return e.chain = function(a, b) {
                var d = 0;
                !function c() {
                    d === a.length ? b(!0) : a[d](function(a) {
                        !1 === a ? b(!1) : (d++, c());
                    });
                }();
            }, e.all = function(a, b) {
                function c(f) {
                    e = e && f, ++d === a.length && b(e);
                }
                var d = 0, e = !0;
                q(a, function(a) {
                    a.done(c);
                });
            }, e.prototype = {
                setHost: function(a) {
                    this.host = a || {};
                },
                done: function(a) {
                    2 === this._state ? a() : this._doneCallbacks.push(a);
                },
                progress: w,
                getPromise: function() {
                    if (!this.promise) {
                        var b = this;
                        this.promise = a(function(a, c) {
                            b.done(function(b) {
                                !1 === b ? c() : a();
                            });
                        });
                    }
                    return this.promise;
                },
                then: function(a, b) {
                    return this.getPromise().then(a, b);
                },
                catch: function(a) {
                    return this.getPromise().catch(a);
                },
                finally: function(a) {
                    return this.getPromise().finally(a);
                },
                pause: function() {
                    this.host.pause && this.host.pause();
                },
                resume: function() {
                    this.host.resume && this.host.resume();
                },
                end: function() {
                    this.host.end && this.host.end(), this._resolve(!0);
                },
                cancel: function() {
                    this.host.cancel && this.host.cancel(), this._resolve(!1);
                },
                complete: function(a) {
                    var b = this;
                    0 === b._state && (b._state = 1, b._tick(function() {
                        b._resolve(a);
                    }));
                },
                _resolve: function(a) {
                    2 !== this._state && (q(this._doneCallbacks, function(b) {
                        b(a);
                    }), this._doneCallbacks.length = 0, this._state = 2);
                }
            }, e;
        } ];
    }, kf = function() {
        this.$get = [ "$$rAF", "$q", "$$AnimateRunner", function(a, b, d) {
            return function(b, f) {
                function e() {
                    return a(function() {
                        g.addClass && (b.addClass(g.addClass), g.addClass = null), g.removeClass && (b.removeClass(g.removeClass), 
                        g.removeClass = null), g.to && (b.css(g.to), g.to = null), h || k.complete(), h = !0;
                    }), k;
                }
                var g = f || {};
                g.$$prepared || (g = Fa(g)), g.cleanupStyles && (g.from = g.to = null), g.from && (b.css(g.from), 
                g.from = null);
                var h, k = new d();
                return {
                    start: e,
                    end: e
                };
            };
        } ];
    }, ea = M("$compile"), hc = new function() {}();
    Qc.$inject = [ "$provide", "$$sanitizeUriProvider" ], Ib.prototype.isFirstChange = function() {
        return this.previousValue === hc;
    };
    var gd = /^((?:x|data)[:\-_])/i, mg = /[:\-_]+(.)/g, nd = M("$controller"), md = /^(\S+)(\s+as\s+([\w$]+))?$/, vf = function() {
        this.$get = [ "$document", function(a) {
            return function(b) {
                return b ? !b.nodeType && b instanceof D && (b = b[0]) : b = a[0].body, b.offsetWidth + 1;
            };
        } ];
    }, od = "application/json", kc = {
        "Content-Type": od + ";charset=utf-8"
    }, pg = /^\[|^\{(?!\{)/, qg = {
        "[": /]$/,
        "{": /}$/
    }, og = /^\)]\}',?\n/, td = M("$http"), Ea = $.$interpolateMinErr = M("$interpolate");
    Ea.throwNoconcat = function(a) {
        throw Ea("noconcat", a);
    }, Ea.interr = function(a, b) {
        return Ea("interr", a, b.toString());
    };
    var Df = function() {
        this.$get = [ "$window", function(a) {
            var d = a.angular.callbacks, c = {};
            return {
                createCallback: function(a) {
                    var e = "angular.callbacks." + (a = "_" + (d.$$counter++).toString(36)), g = function(a) {
                        var b = function(a) {
                            b.data = a, b.called = !0;
                        };
                        return b.id = a, b;
                    }(a);
                    return c[e] = d[a] = g, e;
                },
                wasCalled: function(a) {
                    return c[a].called;
                },
                getResponse: function(a) {
                    return c[a].data;
                },
                removeCallback: function(a) {
                    delete d[c[a].id], delete c[a];
                }
            };
        } ];
    }, Sg = /^([^?#]*)(\?([^#]*))?(#(.*))?$/, sg = {
        http: 80,
        https: 443,
        ftp: 21
    }, lb = M("$location"), tg = /^\s*[\\/]{2,}/, Tg = {
        $$absUrl: "",
        $$html5: !1,
        $$replace: !1,
        absUrl: Jb("$$absUrl"),
        url: function(a) {
            if (x(a)) return this.$$url;
            var b = Sg.exec(a);
            return (b[1] || "" === a) && this.path(decodeURIComponent(b[1])), (b[2] || b[1] || "" === a) && this.search(b[3] || ""), 
            this.hash(b[5] || ""), this;
        },
        protocol: Jb("$$protocol"),
        host: Jb("$$host"),
        port: Jb("$$port"),
        path: xd("$$path", function(a) {
            return "/" === (a = null !== a ? a.toString() : "").charAt(0) ? a : "/" + a;
        }),
        search: function(a, b) {
            switch (arguments.length) {
              case 0:
                return this.$$search;

              case 1:
                if (E(a) || Y(a)) a = a.toString(), this.$$search = Lc(a); else {
                    if (!F(a)) throw lb("isrcharg");
                    q(a = Fa(a, {}), function(b, c) {
                        null == b && delete a[c];
                    }), this.$$search = a;
                }
                break;

              default:
                x(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b;
            }
            return this.$$compose(), this;
        },
        hash: xd("$$hash", function(a) {
            return null !== a ? a.toString() : "";
        }),
        replace: function() {
            return this.$$replace = !0, this;
        }
    };
    q([ wd, oc, nc ], function(a) {
        a.prototype = Object.create(Tg), a.prototype.state = function(b) {
            if (!arguments.length) return this.$$state;
            if (a !== nc || !this.$$html5) throw lb("nostate");
            return this.$$state = x(b) ? null : b, this;
        };
    });
    var Ua = M("$parse"), wg = {}.constructor.prototype.valueOf, Qb = W();
    q("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function(a) {
        Qb[a] = !0;
    });
    var Ug = {
        n: "\n",
        f: "\f",
        r: "\r",
        t: "\t",
        v: "\v",
        "'": "'",
        '"': '"'
    }, qc = function(a) {
        this.options = a;
    };
    qc.prototype = {
        constructor: qc,
        lex: function(a) {
            for (this.text = a, this.index = 0, this.tokens = []; this.index < this.text.length; ) if ('"' === (a = this.text.charAt(this.index)) || "'" === a) this.readString(a); else if (this.isNumber(a) || "." === a && this.isNumber(this.peek())) this.readNumber(); else if (this.isIdentifierStart(this.peekMultichar())) this.readIdent(); else if (this.is(a, "(){}[].,;:?")) this.tokens.push({
                index: this.index,
                text: a
            }), this.index++; else if (this.isWhitespace(a)) this.index++; else {
                var b = a + this.peek(), d = b + this.peek(2), c = Qb[b], f = Qb[d];
                Qb[a] || c || f ? (a = f ? d : c ? b : a, this.tokens.push({
                    index: this.index,
                    text: a,
                    operator: !0
                }), this.index += a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1);
            }
            return this.tokens;
        },
        is: function(a, b) {
            return -1 !== b.indexOf(a);
        },
        peek: function(a) {
            return a = a || 1, this.index + a < this.text.length && this.text.charAt(this.index + a);
        },
        isNumber: function(a) {
            return "0" <= a && a <= "9" && "string" == typeof a;
        },
        isWhitespace: function(a) {
            return " " === a || "\r" === a || "\t" === a || "\n" === a || "\v" === a || " " === a;
        },
        isIdentifierStart: function(a) {
            return this.options.isIdentifierStart ? this.options.isIdentifierStart(a, this.codePointAt(a)) : this.isValidIdentifierStart(a);
        },
        isValidIdentifierStart: function(a) {
            return "a" <= a && a <= "z" || "A" <= a && a <= "Z" || "_" === a || "$" === a;
        },
        isIdentifierContinue: function(a) {
            return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(a, this.codePointAt(a)) : this.isValidIdentifierContinue(a);
        },
        isValidIdentifierContinue: function(a, b) {
            return this.isValidIdentifierStart(a, b) || this.isNumber(a);
        },
        codePointAt: function(a) {
            return 1 === a.length ? a.charCodeAt(0) : (a.charCodeAt(0) << 10) + a.charCodeAt(1) - 56613888;
        },
        peekMultichar: function() {
            var a = this.text.charAt(this.index), b = this.peek();
            if (!b) return a;
            var d = a.charCodeAt(0), c = b.charCodeAt(0);
            return 55296 <= d && d <= 56319 && 56320 <= c && c <= 57343 ? a + b : a;
        },
        isExpOperator: function(a) {
            return "-" === a || "+" === a || this.isNumber(a);
        },
        throwError: function(a, b, d) {
            throw d = d || this.index, b = v(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, d) + "]" : " " + d, 
            Ua("lexerr", a, b, this.text);
        },
        readNumber: function() {
            for (var a = "", b = this.index; this.index < this.text.length; ) {
                var d = P(this.text.charAt(this.index));
                if ("." === d || this.isNumber(d)) a += d; else {
                    var c = this.peek();
                    if ("e" === d && this.isExpOperator(c)) a += d; else if (this.isExpOperator(d) && c && this.isNumber(c) && "e" === a.charAt(a.length - 1)) a += d; else {
                        if (!this.isExpOperator(d) || c && this.isNumber(c) || "e" !== a.charAt(a.length - 1)) break;
                        this.throwError("Invalid exponent");
                    }
                }
                this.index++;
            }
            this.tokens.push({
                index: b,
                text: a,
                constant: !0,
                value: Number(a)
            });
        },
        readIdent: function() {
            var a = this.index;
            for (this.index += this.peekMultichar().length; this.index < this.text.length; ) {
                var b = this.peekMultichar();
                if (!this.isIdentifierContinue(b)) break;
                this.index += b.length;
            }
            this.tokens.push({
                index: a,
                text: this.text.slice(a, this.index),
                identifier: !0
            });
        },
        readString: function(a) {
            var b = this.index;
            this.index++;
            for (var d = "", c = a, f = !1; this.index < this.text.length; ) {
                var e = this.text.charAt(this.index);
                c = c + e;
                if (f) "u" === e ? ((f = this.text.substring(this.index + 1, this.index + 5)).match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + f + "]"), 
                this.index += 4, d += String.fromCharCode(parseInt(f, 16))) : d += Ug[e] || e, f = !1; else if ("\\" === e) f = !0; else {
                    if (e === a) return this.index++, void this.tokens.push({
                        index: b,
                        text: c,
                        constant: !0,
                        value: d
                    });
                    d += e;
                }
                this.index++;
            }
            this.throwError("Unterminated quote", b);
        }
    };
    var s = function(a, b) {
        this.lexer = a, this.options = b;
    };
    s.Program = "Program", s.ExpressionStatement = "ExpressionStatement", s.AssignmentExpression = "AssignmentExpression", 
    s.ConditionalExpression = "ConditionalExpression", s.LogicalExpression = "LogicalExpression", 
    s.BinaryExpression = "BinaryExpression", s.UnaryExpression = "UnaryExpression", 
    s.CallExpression = "CallExpression", s.MemberExpression = "MemberExpression", s.Identifier = "Identifier", 
    s.Literal = "Literal", s.ArrayExpression = "ArrayExpression", s.Property = "Property", 
    s.ObjectExpression = "ObjectExpression", s.ThisExpression = "ThisExpression", s.LocalsExpression = "LocalsExpression", 
    s.NGValueParameter = "NGValueParameter", s.prototype = {
        ast: function(a) {
            return this.text = a, this.tokens = this.lexer.lex(a), a = this.program(), 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), 
            a;
        },
        program: function() {
            for (var a = []; ;) if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.expressionStatement()), 
            !this.expect(";")) return {
                type: s.Program,
                body: a
            };
        },
        expressionStatement: function() {
            return {
                type: s.ExpressionStatement,
                expression: this.filterChain()
            };
        },
        filterChain: function() {
            for (var a = this.expression(); this.expect("|"); ) a = this.filter(a);
            return a;
        },
        expression: function() {
            return this.assignment();
        },
        assignment: function() {
            var a = this.ternary();
            if (this.expect("=")) {
                if (!Ad(a)) throw Ua("lval");
                a = {
                    type: s.AssignmentExpression,
                    left: a,
                    right: this.assignment(),
                    operator: "="
                };
            }
            return a;
        },
        ternary: function() {
            var b, d, a = this.logicalOR();
            return this.expect("?") && (b = this.expression(), this.consume(":")) ? (d = this.expression(), 
            {
                type: s.ConditionalExpression,
                test: a,
                alternate: b,
                consequent: d
            }) : a;
        },
        logicalOR: function() {
            for (var a = this.logicalAND(); this.expect("||"); ) a = {
                type: s.LogicalExpression,
                operator: "||",
                left: a,
                right: this.logicalAND()
            };
            return a;
        },
        logicalAND: function() {
            for (var a = this.equality(); this.expect("&&"); ) a = {
                type: s.LogicalExpression,
                operator: "&&",
                left: a,
                right: this.equality()
            };
            return a;
        },
        equality: function() {
            for (var b, a = this.relational(); b = this.expect("==", "!=", "===", "!=="); ) a = {
                type: s.BinaryExpression,
                operator: b.text,
                left: a,
                right: this.relational()
            };
            return a;
        },
        relational: function() {
            for (var b, a = this.additive(); b = this.expect("<", ">", "<=", ">="); ) a = {
                type: s.BinaryExpression,
                operator: b.text,
                left: a,
                right: this.additive()
            };
            return a;
        },
        additive: function() {
            for (var b, a = this.multiplicative(); b = this.expect("+", "-"); ) a = {
                type: s.BinaryExpression,
                operator: b.text,
                left: a,
                right: this.multiplicative()
            };
            return a;
        },
        multiplicative: function() {
            for (var b, a = this.unary(); b = this.expect("*", "/", "%"); ) a = {
                type: s.BinaryExpression,
                operator: b.text,
                left: a,
                right: this.unary()
            };
            return a;
        },
        unary: function() {
            var a;
            return (a = this.expect("+", "-", "!")) ? {
                type: s.UnaryExpression,
                operator: a.text,
                prefix: !0,
                argument: this.unary()
            } : this.primary();
        },
        primary: function() {
            var a, b;
            for (this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? a = Fa(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? a = {
                type: s.Literal,
                value: this.options.literals[this.consume().text]
            } : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek()); b = this.expect("(", "[", "."); ) "(" === b.text ? (a = {
                type: s.CallExpression,
                callee: a,
                arguments: this.parseArguments()
            }, this.consume(")")) : "[" === b.text ? (a = {
                type: s.MemberExpression,
                object: a,
                property: this.expression(),
                computed: !0
            }, this.consume("]")) : "." === b.text ? a = {
                type: s.MemberExpression,
                object: a,
                property: this.identifier(),
                computed: !1
            } : this.throwError("IMPOSSIBLE");
            return a;
        },
        filter: function(a) {
            a = [ a ];
            for (var b = {
                type: s.CallExpression,
                callee: this.identifier(),
                arguments: a,
                filter: !0
            }; this.expect(":"); ) a.push(this.expression());
            return b;
        },
        parseArguments: function() {
            var a = [];
            if (")" !== this.peekToken().text) for (;a.push(this.filterChain()), this.expect(","); ) ;
            return a;
        },
        identifier: function() {
            var a = this.consume();
            return a.identifier || this.throwError("is not a valid identifier", a), {
                type: s.Identifier,
                name: a.text
            };
        },
        constant: function() {
            return {
                type: s.Literal,
                value: this.consume().value
            };
        },
        arrayDeclaration: function() {
            var a = [];
            if ("]" !== this.peekToken().text) do {
                if (this.peek("]")) break;
                a.push(this.expression());
            } while (this.expect(","));
            return this.consume("]"), {
                type: s.ArrayExpression,
                elements: a
            };
        },
        object: function() {
            var b, a = [];
            if ("}" !== this.peekToken().text) do {
                if (this.peek("}")) break;
                b = {
                    type: s.Property,
                    kind: "init"
                }, this.peek().constant ? (b.key = this.constant(), b.computed = !1, this.consume(":"), 
                b.value = this.expression()) : this.peek().identifier ? (b.key = this.identifier(), 
                b.computed = !1, this.peek(":") ? (this.consume(":"), b.value = this.expression()) : b.value = b.key) : this.peek("[") ? (this.consume("["), 
                b.key = this.expression(), this.consume("]"), b.computed = !0, this.consume(":"), 
                b.value = this.expression()) : this.throwError("invalid key", this.peek()), a.push(b);
            } while (this.expect(","));
            return this.consume("}"), {
                type: s.ObjectExpression,
                properties: a
            };
        },
        throwError: function(a, b) {
            throw Ua("syntax", b.text, a, b.index + 1, this.text, this.text.substring(b.index));
        },
        consume: function(a) {
            if (0 === this.tokens.length) throw Ua("ueoe", this.text);
            var b = this.expect(a);
            return b || this.throwError("is unexpected, expecting [" + a + "]", this.peek()), 
            b;
        },
        peekToken: function() {
            if (0 === this.tokens.length) throw Ua("ueoe", this.text);
            return this.tokens[0];
        },
        peek: function(a, b, d, c) {
            return this.peekAhead(0, a, b, d, c);
        },
        peekAhead: function(a, b, d, c, f) {
            if (this.tokens.length > a) {
                var e = (a = this.tokens[a]).text;
                if (e === b || e === d || e === c || e === f || !(b || d || c || f)) return a;
            }
            return !1;
        },
        expect: function(a, b, d, c) {
            return !!(a = this.peek(a, b, d, c)) && (this.tokens.shift(), a);
        },
        selfReferential: {
            this: {
                type: s.ThisExpression
            },
            $locals: {
                type: s.LocalsExpression
            }
        }
    }, Dd.prototype = {
        compile: function(a) {
            var b = this;
            a = this.astBuilder.ast(a), this.state = {
                nextId: 0,
                filters: {},
                fn: {
                    vars: [],
                    body: [],
                    own: {}
                },
                assign: {
                    vars: [],
                    body: [],
                    own: {}
                },
                inputs: []
            }, V(a, b.$filter);
            var c, d = "";
            return this.stage = "assign", (c = Bd(a)) && (this.state.computing = "assign", d = this.nextId(), 
            this.recurse(c, d), this.return_(d), d = "fn.assign=" + this.generateFunction("assign", "s,v,l")), 
            c = zd(a.body), b.stage = "inputs", q(c, function(a, c) {
                var d = "fn" + c;
                b.state[d] = {
                    vars: [],
                    body: [],
                    own: {}
                }, b.state.computing = d;
                var h = b.nextId();
                b.recurse(a, h), b.return_(h), b.state.inputs.push(d), a.watchId = c;
            }), this.state.computing = "fn", this.stage = "main", this.recurse(a), d = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + d + this.watchFns() + "return fn;", 
            d = new Function("$filter", "getStringValue", "ifDefined", "plus", d)(this.$filter, ug, vg, yd), 
            this.state = this.stage = void 0, d.literal = Cd(a), d.constant = a.constant, d;
        },
        USE: "use",
        STRICT: "strict",
        watchFns: function() {
            var a = [], b = this.state.inputs, d = this;
            return q(b, function(b) {
                a.push("var " + b + "=" + d.generateFunction(b, "s"));
            }), b.length && a.push("fn.inputs=[" + b.join(",") + "];"), a.join("");
        },
        generateFunction: function(a, b) {
            return "function(" + b + "){" + this.varsPrefix(a) + this.body(a) + "};";
        },
        filterPrefix: function() {
            var a = [], b = this;
            return q(this.state.filters, function(d, c) {
                a.push(d + "=$filter(" + b.escape(c) + ")");
            }), a.length ? "var " + a.join(",") + ";" : "";
        },
        varsPrefix: function(a) {
            return this.state[a].vars.length ? "var " + this.state[a].vars.join(",") + ";" : "";
        },
        body: function(a) {
            return this.state[a].body.join("");
        },
        recurse: function(a, b, d, c, f, e) {
            var g, h, l, m, n, k = this;
            if (c = c || w, !e && v(a.watchId)) b = b || this.nextId(), this.if_("i", this.lazyAssign(b, this.computedMember("i", a.watchId)), this.lazyRecurse(a, b, d, c, f, !0)); else switch (a.type) {
              case s.Program:
                q(a.body, function(b, c) {
                    k.recurse(b.expression, void 0, void 0, function(a) {
                        h = a;
                    }), c !== a.body.length - 1 ? k.current().body.push(h, ";") : k.return_(h);
                });
                break;

              case s.Literal:
                m = this.escape(a.value), this.assign(b, m), c(b || m);
                break;

              case s.UnaryExpression:
                this.recurse(a.argument, void 0, void 0, function(a) {
                    h = a;
                }), m = a.operator + "(" + this.ifDefined(h, 0) + ")", this.assign(b, m), c(m);
                break;

              case s.BinaryExpression:
                this.recurse(a.left, void 0, void 0, function(a) {
                    g = a;
                }), this.recurse(a.right, void 0, void 0, function(a) {
                    h = a;
                }), m = "+" === a.operator ? this.plus(g, h) : "-" === a.operator ? this.ifDefined(g, 0) + a.operator + this.ifDefined(h, 0) : "(" + g + ")" + a.operator + "(" + h + ")", 
                this.assign(b, m), c(m);
                break;

              case s.LogicalExpression:
                b = b || this.nextId(), k.recurse(a.left, b), k.if_("&&" === a.operator ? b : k.not(b), k.lazyRecurse(a.right, b)), 
                c(b);
                break;

              case s.ConditionalExpression:
                b = b || this.nextId(), k.recurse(a.test, b), k.if_(b, k.lazyRecurse(a.alternate, b), k.lazyRecurse(a.consequent, b)), 
                c(b);
                break;

              case s.Identifier:
                b = b || this.nextId(), d && (d.context = "inputs" === k.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", a.name) + "?l:s"), 
                d.computed = !1, d.name = a.name), k.if_("inputs" === k.stage || k.not(k.getHasOwnProperty("l", a.name)), function() {
                    k.if_("inputs" === k.stage || "s", function() {
                        f && 1 !== f && k.if_(k.isNull(k.nonComputedMember("s", a.name)), k.lazyAssign(k.nonComputedMember("s", a.name), "{}")), 
                        k.assign(b, k.nonComputedMember("s", a.name));
                    });
                }, b && k.lazyAssign(b, k.nonComputedMember("l", a.name))), c(b);
                break;

              case s.MemberExpression:
                g = d && (d.context = this.nextId()) || this.nextId(), b = b || this.nextId(), k.recurse(a.object, g, void 0, function() {
                    k.if_(k.notNull(g), function() {
                        a.computed ? (h = k.nextId(), k.recurse(a.property, h), k.getStringValue(h), f && 1 !== f && k.if_(k.not(k.computedMember(g, h)), k.lazyAssign(k.computedMember(g, h), "{}")), 
                        m = k.computedMember(g, h), k.assign(b, m), d && (d.computed = !0, d.name = h)) : (f && 1 !== f && k.if_(k.isNull(k.nonComputedMember(g, a.property.name)), k.lazyAssign(k.nonComputedMember(g, a.property.name), "{}")), 
                        m = k.nonComputedMember(g, a.property.name), k.assign(b, m), d && (d.computed = !1, 
                        d.name = a.property.name));
                    }, function() {
                        k.assign(b, "undefined");
                    }), c(b);
                }, !!f);
                break;

              case s.CallExpression:
                b = b || this.nextId(), a.filter ? (h = k.filter(a.callee.name), l = [], q(a.arguments, function(a) {
                    var b = k.nextId();
                    k.recurse(a, b), l.push(b);
                }), m = h + "(" + l.join(",") + ")", k.assign(b, m), c(b)) : (h = k.nextId(), g = {}, 
                l = [], k.recurse(a.callee, h, g, function() {
                    k.if_(k.notNull(h), function() {
                        q(a.arguments, function(b) {
                            k.recurse(b, a.constant ? void 0 : k.nextId(), void 0, function(a) {
                                l.push(a);
                            });
                        }), m = g.name ? k.member(g.context, g.name, g.computed) + "(" + l.join(",") + ")" : h + "(" + l.join(",") + ")", 
                        k.assign(b, m);
                    }, function() {
                        k.assign(b, "undefined");
                    }), c(b);
                }));
                break;

              case s.AssignmentExpression:
                h = this.nextId(), g = {}, this.recurse(a.left, void 0, g, function() {
                    k.if_(k.notNull(g.context), function() {
                        k.recurse(a.right, h), m = k.member(g.context, g.name, g.computed) + a.operator + h, 
                        k.assign(b, m), c(b || m);
                    });
                }, 1);
                break;

              case s.ArrayExpression:
                l = [], q(a.elements, function(b) {
                    k.recurse(b, a.constant ? void 0 : k.nextId(), void 0, function(a) {
                        l.push(a);
                    });
                }), m = "[" + l.join(",") + "]", this.assign(b, m), c(b || m);
                break;

              case s.ObjectExpression:
                n = !(l = []), q(a.properties, function(a) {
                    a.computed && (n = !0);
                }), n ? (b = b || this.nextId(), this.assign(b, "{}"), q(a.properties, function(a) {
                    a.computed ? (g = k.nextId(), k.recurse(a.key, g)) : g = a.key.type === s.Identifier ? a.key.name : "" + a.key.value, 
                    h = k.nextId(), k.recurse(a.value, h), k.assign(k.member(b, g, a.computed), h);
                })) : (q(a.properties, function(b) {
                    k.recurse(b.value, a.constant ? void 0 : k.nextId(), void 0, function(a) {
                        l.push(k.escape(b.key.type === s.Identifier ? b.key.name : "" + b.key.value) + ":" + a);
                    });
                }), m = "{" + l.join(",") + "}", this.assign(b, m)), c(b || m);
                break;

              case s.ThisExpression:
                this.assign(b, "s"), c(b || "s");
                break;

              case s.LocalsExpression:
                this.assign(b, "l"), c(b || "l");
                break;

              case s.NGValueParameter:
                this.assign(b, "v"), c(b || "v");
            }
        },
        getHasOwnProperty: function(a, b) {
            var d = a + "." + b, c = this.current().own;
            return c.hasOwnProperty(d) || (c[d] = this.nextId(!1, a + "&&(" + this.escape(b) + " in " + a + ")")), 
            c[d];
        },
        assign: function(a, b) {
            if (a) return this.current().body.push(a, "=", b, ";"), a;
        },
        filter: function(a) {
            return this.state.filters.hasOwnProperty(a) || (this.state.filters[a] = this.nextId(!0)), 
            this.state.filters[a];
        },
        ifDefined: function(a, b) {
            return "ifDefined(" + a + "," + this.escape(b) + ")";
        },
        plus: function(a, b) {
            return "plus(" + a + "," + b + ")";
        },
        return_: function(a) {
            this.current().body.push("return ", a, ";");
        },
        if_: function(a, b, d) {
            if (!0 === a) b(); else {
                var c = this.current().body;
                c.push("if(", a, "){"), b(), c.push("}"), d && (c.push("else{"), d(), c.push("}"));
            }
        },
        not: function(a) {
            return "!(" + a + ")";
        },
        isNull: function(a) {
            return a + "==null";
        },
        notNull: function(a) {
            return a + "!=null";
        },
        nonComputedMember: function(a, b) {
            return /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b) ? a + "." + b : a + '["' + b.replace(/[^$_a-zA-Z0-9]/g, this.stringEscapeFn) + '"]';
        },
        computedMember: function(a, b) {
            return a + "[" + b + "]";
        },
        member: function(a, b, d) {
            return d ? this.computedMember(a, b) : this.nonComputedMember(a, b);
        },
        getStringValue: function(a) {
            this.assign(a, "getStringValue(" + a + ")");
        },
        lazyRecurse: function(a, b, d, c, f, e) {
            var g = this;
            return function() {
                g.recurse(a, b, d, c, f, e);
            };
        },
        lazyAssign: function(a, b) {
            var d = this;
            return function() {
                d.assign(a, b);
            };
        },
        stringEscapeRegex: /[^ a-zA-Z0-9]/g,
        stringEscapeFn: function(a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
        },
        escape: function(a) {
            if (E(a)) return "'" + a.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
            if (Y(a)) return a.toString();
            if (!0 === a) return "true";
            if (!1 === a) return "false";
            if (null === a) return "null";
            if (void 0 === a) return "undefined";
            throw Ua("esc");
        },
        nextId: function(a, b) {
            var d = "v" + this.state.nextId++;
            return a || this.current().vars.push(d + (b ? "=" + b : "")), d;
        },
        current: function() {
            return this.state[this.state.computing];
        }
    }, Ed.prototype = {
        compile: function(a) {
            var d, c, f, b = this;
            V(a = this.astBuilder.ast(a), b.$filter), (d = Bd(a)) && (c = this.recurse(d)), 
            (d = zd(a.body)) && (f = [], q(d, function(a, c) {
                var d = b.recurse(a);
                a.input = d, f.push(d), a.watchId = c;
            }));
            var e = [];
            return q(a.body, function(a) {
                e.push(b.recurse(a.expression));
            }), d = 0 === a.body.length ? w : 1 === a.body.length ? e[0] : function(a, b) {
                var c;
                return q(e, function(d) {
                    c = d(a, b);
                }), c;
            }, c && (d.assign = function(a, b, d) {
                return c(a, d, b);
            }), f && (d.inputs = f), d.literal = Cd(a), d.constant = a.constant, d;
        },
        recurse: function(a, b, d) {
            var c, f, g, e = this;
            if (a.input) return this.inputs(a.input, a.watchId);
            switch (a.type) {
              case s.Literal:
                return this.value(a.value, b);

              case s.UnaryExpression:
                return f = this.recurse(a.argument), this["unary" + a.operator](f, b);

              case s.BinaryExpression:
              case s.LogicalExpression:
                return c = this.recurse(a.left), f = this.recurse(a.right), this["binary" + a.operator](c, f, b);

              case s.ConditionalExpression:
                return this["ternary?:"](this.recurse(a.test), this.recurse(a.alternate), this.recurse(a.consequent), b);

              case s.Identifier:
                return e.identifier(a.name, b, d);

              case s.MemberExpression:
                return c = this.recurse(a.object, !1, !!d), a.computed || (f = a.property.name), 
                a.computed && (f = this.recurse(a.property)), a.computed ? this.computedMember(c, f, b, d) : this.nonComputedMember(c, f, b, d);

              case s.CallExpression:
                return g = [], q(a.arguments, function(a) {
                    g.push(e.recurse(a));
                }), a.filter && (f = this.$filter(a.callee.name)), a.filter || (f = this.recurse(a.callee, !0)), 
                a.filter ? function(a, c, d, e) {
                    for (var n = [], p = 0; p < g.length; ++p) n.push(g[p](a, c, d, e));
                    return a = f.apply(void 0, n, e), b ? {
                        context: void 0,
                        name: void 0,
                        value: a
                    } : a;
                } : function(a, c, d, e) {
                    var p, n = f(a, c, d, e);
                    if (null != n.value) {
                        p = [];
                        for (var r = 0; r < g.length; ++r) p.push(g[r](a, c, d, e));
                        p = n.value.apply(n.context, p);
                    }
                    return b ? {
                        value: p
                    } : p;
                };

              case s.AssignmentExpression:
                return c = this.recurse(a.left, !0, 1), f = this.recurse(a.right), function(a, d, e, g) {
                    var n = c(a, d, e, g);
                    return a = f(a, d, e, g), n.context[n.name] = a, b ? {
                        value: a
                    } : a;
                };

              case s.ArrayExpression:
                return g = [], q(a.elements, function(a) {
                    g.push(e.recurse(a));
                }), function(a, c, d, e) {
                    for (var f = [], p = 0; p < g.length; ++p) f.push(g[p](a, c, d, e));
                    return b ? {
                        value: f
                    } : f;
                };

              case s.ObjectExpression:
                return g = [], q(a.properties, function(a) {
                    a.computed ? g.push({
                        key: e.recurse(a.key),
                        computed: !0,
                        value: e.recurse(a.value)
                    }) : g.push({
                        key: a.key.type === s.Identifier ? a.key.name : "" + a.key.value,
                        computed: !1,
                        value: e.recurse(a.value)
                    });
                }), function(a, c, d, e) {
                    for (var f = {}, p = 0; p < g.length; ++p) g[p].computed ? f[g[p].key(a, c, d, e)] = g[p].value(a, c, d, e) : f[g[p].key] = g[p].value(a, c, d, e);
                    return b ? {
                        value: f
                    } : f;
                };

              case s.ThisExpression:
                return function(a) {
                    return b ? {
                        value: a
                    } : a;
                };

              case s.LocalsExpression:
                return function(a, c) {
                    return b ? {
                        value: c
                    } : c;
                };

              case s.NGValueParameter:
                return function(a, c, d) {
                    return b ? {
                        value: d
                    } : d;
                };
            }
        },
        "unary+": function(a, b) {
            return function(d, c, f, e) {
                return d = v(d = a(d, c, f, e)) ? +d : 0, b ? {
                    value: d
                } : d;
            };
        },
        "unary-": function(a, b) {
            return function(d, c, f, e) {
                return d = v(d = a(d, c, f, e)) ? -d : -0, b ? {
                    value: d
                } : d;
            };
        },
        "unary!": function(a, b) {
            return function(d, c, f, e) {
                return d = !a(d, c, f, e), b ? {
                    value: d
                } : d;
            };
        },
        "binary+": function(a, b, d) {
            return function(c, f, e, g) {
                var h = a(c, f, e, g);
                return h = yd(h, c = b(c, f, e, g)), d ? {
                    value: h
                } : h;
            };
        },
        "binary-": function(a, b, d) {
            return function(c, f, e, g) {
                var h = a(c, f, e, g);
                return c = b(c, f, e, g), h = (v(h) ? h : 0) - (v(c) ? c : 0), d ? {
                    value: h
                } : h;
            };
        },
        "binary*": function(a, b, d) {
            return function(c, f, e, g) {
                return c = a(c, f, e, g) * b(c, f, e, g), d ? {
                    value: c
                } : c;
            };
        },
        "binary/": function(a, b, d) {
            return function(c, f, e, g) {
                return c = a(c, f, e, g) / b(c, f, e, g), d ? {
                    value: c
                } : c;
            };
        },
        "binary%": function(a, b, d) {
            return function(c, f, e, g) {
                return c = a(c, f, e, g) % b(c, f, e, g), d ? {
                    value: c
                } : c;
            };
        },
        "binary===": function(a, b, d) {
            return function(c, f, e, g) {
                return c = a(c, f, e, g) === b(c, f, e, g), d ? {
                    value: c
                } : c;
            };
        },
        "binary!==": function(a, b, d) {
            return function(c, f, e, g) {
                return c = a(c, f, e, g) !== b(c, f, e, g), d ? {
                    value: c
                } : c;
            };
        },
        "binary==": function(a, b, d) {
            return function(c, f, e, g) {
                return c = a(c, f, e, g) == b(c, f, e, g), d ? {
                    value: c
                } : c;
            };
        },
        "binary!=": function(a, b, d) {
            return function(c, f, e, g) {
                return c = a(c, f, e, g) != b(c, f, e, g), d ? {
                    value: c
                } : c;
            };
        },
        "binary<": function(a, b, d) {
            return function(c, f, e, g) {
                return c = a(c, f, e, g) < b(c, f, e, g), d ? {
                    value: c
                } : c;
            };
        },
        "binary>": function(a, b, d) {
            return function(c, f, e, g) {
                return c = a(c, f, e, g) > b(c, f, e, g), d ? {
                    value: c
                } : c;
            };
        },
        "binary<=": function(a, b, d) {
            return function(c, f, e, g) {
                return c = a(c, f, e, g) <= b(c, f, e, g), d ? {
                    value: c
                } : c;
            };
        },
        "binary>=": function(a, b, d) {
            return function(c, f, e, g) {
                return c = a(c, f, e, g) >= b(c, f, e, g), d ? {
                    value: c
                } : c;
            };
        },
        "binary&&": function(a, b, d) {
            return function(c, f, e, g) {
                return c = a(c, f, e, g) && b(c, f, e, g), d ? {
                    value: c
                } : c;
            };
        },
        "binary||": function(a, b, d) {
            return function(c, f, e, g) {
                return c = a(c, f, e, g) || b(c, f, e, g), d ? {
                    value: c
                } : c;
            };
        },
        "ternary?:": function(a, b, d, c) {
            return function(f, e, g, h) {
                return f = a(f, e, g, h) ? b(f, e, g, h) : d(f, e, g, h), c ? {
                    value: f
                } : f;
            };
        },
        value: function(a, b) {
            return function() {
                return b ? {
                    context: void 0,
                    name: void 0,
                    value: a
                } : a;
            };
        },
        identifier: function(a, b, d) {
            return function(c, f, e, g) {
                return c = f && a in f ? f : c, d && 1 !== d && c && null == c[a] && (c[a] = {}), 
                f = c ? c[a] : void 0, b ? {
                    context: c,
                    name: a,
                    value: f
                } : f;
            };
        },
        computedMember: function(a, b, d, c) {
            return function(f, e, g, h) {
                var l, m, k = a(f, e, g, h);
                return null != k && (l = b(f, e, g, h), l += "", c && 1 !== c && k && !k[l] && (k[l] = {}), 
                m = k[l]), d ? {
                    context: k,
                    name: l,
                    value: m
                } : m;
            };
        },
        nonComputedMember: function(a, b, d, c) {
            return function(f, e, g, h) {
                return f = a(f, e, g, h), c && 1 !== c && f && null == f[b] && (f[b] = {}), e = null != f ? f[b] : void 0, 
                d ? {
                    context: f,
                    name: b,
                    value: e
                } : e;
            };
        },
        inputs: function(a, b) {
            return function(d, c, f, e) {
                return e ? e[b] : a(d, c, f);
            };
        }
    };
    var rc = function(a, b, d) {
        this.lexer = a, this.$filter = b, this.options = d, this.ast = new s(a, d), this.astCompiler = d.csp ? new Ed(this.ast, b) : new Dd(this.ast, b);
    };
    rc.prototype = {
        constructor: rc,
        parse: function(a) {
            return this.astCompiler.compile(a);
        }
    };
    var ua = M("$sce"), pa = {
        HTML: "html",
        CSS: "css",
        URL: "url",
        RESOURCE_URL: "resourceUrl",
        JS: "js"
    }, sc = /_([a-z])/g, yg = M("$compile"), ca = z.document.createElement("a"), Id = Da(z.location.href);
    Jd.$inject = [ "$document" ], Xc.$inject = [ "$provide" ];
    var Qd = 22, Pd = ".", uc = "0";
    Kd.$inject = [ "$locale" ];
    var Jg = {
        yyyy: aa("FullYear", 4, 0, !(Md.$inject = [ "$locale" ]), !0),
        yy: aa("FullYear", 2, 0, !0, !0),
        y: aa("FullYear", 1, 0, !1, !0),
        MMMM: nb("Month"),
        MMM: nb("Month", !0),
        MM: aa("Month", 2, 1),
        M: aa("Month", 1, 1),
        LLLL: nb("Month", !1, !0),
        dd: aa("Date", 2),
        d: aa("Date", 1),
        HH: aa("Hours", 2),
        H: aa("Hours", 1),
        hh: aa("Hours", 2, -12),
        h: aa("Hours", 1, -12),
        mm: aa("Minutes", 2),
        m: aa("Minutes", 1),
        ss: aa("Seconds", 2),
        s: aa("Seconds", 1),
        sss: aa("Milliseconds", 3),
        EEEE: nb("Day"),
        EEE: nb("Day", !0),
        a: function(a, b) {
            return a.getHours() < 12 ? b.AMPMS[0] : b.AMPMS[1];
        },
        Z: function(a, b, d) {
            return (0 <= (a = -1 * d) ? "+" : "") + (Kb(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Kb(Math.abs(a % 60), 2));
        },
        ww: Sd(2),
        w: Sd(1),
        G: vc,
        GG: vc,
        GGG: vc,
        GGGG: function(a, b) {
            return a.getFullYear() <= 0 ? b.ERANAMES[0] : b.ERANAMES[1];
        }
    }, Ig = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/, Hg = /^-?\d+$/;
    Ld.$inject = [ "$locale" ];
    var Cg = ma(P), Dg = ma(vb);
    Nd.$inject = [ "$parse" ];
    var Ae = ma({
        restrict: "E",
        compile: function(a, b) {
            if (!b.href && !b.xlinkHref) return function(a, b) {
                if ("a" === b[0].nodeName.toLowerCase()) {
                    var f = "[object SVGAnimatedString]" === na.call(b.prop("href")) ? "xlink:href" : "href";
                    b.on("click", function(a) {
                        b.attr(f) || a.preventDefault();
                    });
                }
            };
        }
    }), wb = {};
    q(Gb, function(a, b) {
        function d(a, d, f) {
            a.$watch(f[c], function(a) {
                f.$set(b, !!a);
            });
        }
        if ("multiple" !== a) {
            var c = Ca("ng-" + b), f = d;
            "checked" === a && (f = function(a, b, f) {
                f.ngModel !== f[c] && d(a, 0, f);
            }), wb[c] = function() {
                return {
                    restrict: "A",
                    priority: 100,
                    link: f
                };
            };
        }
    }), q(ld, function(a, b) {
        wb[b] = function() {
            return {
                priority: 100,
                link: function(a, c, f) {
                    "ngPattern" === b && "/" === f.ngPattern.charAt(0) && (c = f.ngPattern.match(Ng)) ? f.$set("ngPattern", new RegExp(c[1], c[2])) : a.$watch(f[b], function(a) {
                        f.$set(b, a);
                    });
                }
            };
        };
    }), q([ "src", "srcset", "href" ], function(a) {
        var b = Ca("ng-" + a);
        wb[b] = function() {
            return {
                priority: 99,
                link: function(d, c, f) {
                    var e = a, g = a;
                    "href" === a && "[object SVGAnimatedString]" === na.call(c.prop("href")) && (g = "xlinkHref", 
                    f.$attr[g] = "xlink:href", e = null), f.$observe(b, function(b) {
                        b ? (f.$set(g, b), La && e && c.prop(e, f[g])) : "href" === a && f.$set(g, null);
                    });
                }
            };
        };
    });
    var Mb = {
        $addControl: w,
        $$renameControl: function(a, b) {
            a.$name = b;
        },
        $removeControl: w,
        $setValidity: w,
        $setDirty: w,
        $setPristine: w,
        $setSubmitted: w
    };
    Lb.$inject = [ "$element", "$attrs", "$scope", "$animate", "$interpolate" ], Lb.prototype = {
        $rollbackViewValue: function() {
            q(this.$$controls, function(a) {
                a.$rollbackViewValue();
            });
        },
        $commitViewValue: function() {
            q(this.$$controls, function(a) {
                a.$commitViewValue();
            });
        },
        $addControl: function(a) {
            Pa(a.$name, "input"), this.$$controls.push(a), a.$name && (this[a.$name] = a), a.$$parentForm = this;
        },
        $$renameControl: function(a, b) {
            var d = a.$name;
            this[d] === a && delete this[d], (this[b] = a).$name = b;
        },
        $removeControl: function(a) {
            a.$name && this[a.$name] === a && delete this[a.$name], q(this.$pending, function(b, d) {
                this.$setValidity(d, null, a);
            }, this), q(this.$error, function(b, d) {
                this.$setValidity(d, null, a);
            }, this), q(this.$$success, function(b, d) {
                this.$setValidity(d, null, a);
            }, this), $a(this.$$controls, a), a.$$parentForm = Mb;
        },
        $setDirty: function() {
            this.$$animate.removeClass(this.$$element, Va), this.$$animate.addClass(this.$$element, Rb), 
            this.$dirty = !0, this.$pristine = !1, this.$$parentForm.$setDirty();
        },
        $setPristine: function() {
            this.$$animate.setClass(this.$$element, Va, Rb + " ng-submitted"), this.$dirty = !1, 
            this.$pristine = !0, this.$submitted = !1, q(this.$$controls, function(a) {
                a.$setPristine();
            });
        },
        $setUntouched: function() {
            q(this.$$controls, function(a) {
                a.$setUntouched();
            });
        },
        $setSubmitted: function() {
            this.$$animate.addClass(this.$$element, "ng-submitted"), this.$submitted = !0, this.$$parentForm.$setSubmitted();
        }
    }, Vd({
        clazz: Lb,
        set: function(a, b, d) {
            var c = a[b];
            c ? -1 === c.indexOf(d) && c.push(d) : a[b] = [ d ];
        },
        unset: function(a, b, d) {
            var c = a[b];
            c && ($a(c, d), 0 === c.length && delete a[b]);
        }
    });
    var ce = function(a) {
        return [ "$timeout", "$parse", function(b, d) {
            function c(a) {
                return "" === a ? d('this[""]').assign : d(a).assign || w;
            }
            return {
                name: "form",
                restrict: a ? "EAC" : "E",
                require: [ "form", "^^?form" ],
                controller: Lb,
                compile: function(d, e) {
                    d.addClass(Va).addClass(ob);
                    var g = e.name ? "name" : !(!a || !e.ngForm) && "ngForm";
                    return {
                        pre: function(a, d, e, f) {
                            var n = f[0];
                            if (!("action" in e)) {
                                var p = function(b) {
                                    a.$apply(function() {
                                        n.$commitViewValue(), n.$setSubmitted();
                                    }), b.preventDefault();
                                };
                                d[0].addEventListener("submit", p), d.on("$destroy", function() {
                                    b(function() {
                                        d[0].removeEventListener("submit", p);
                                    }, 0, !1);
                                });
                            }
                            (f[1] || n.$$parentForm).$addControl(n);
                            var r = g ? c(n.$name) : w;
                            g && (r(a, n), e.$observe(g, function(b) {
                                n.$name !== b && (r(a, void 0), n.$$parentForm.$$renameControl(n, b), (r = c(n.$name))(a, n));
                            })), d.on("$destroy", function() {
                                n.$$parentForm.$removeControl(n), r(a, void 0), R(n, Mb);
                            });
                        }
                    };
                }
            };
        } ];
    }, Be = ce(), Ne = ce(!0), Kg = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/, Vg = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i, Wg = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/, Lg = /^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/, de = /^(\d{4,})-(\d{2})-(\d{2})$/, ee = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Cc = /^(\d{4,})-W(\d\d)$/, fe = /^(\d{4,})-(\d\d)$/, ge = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Xd = W();
    q([ "date", "datetime-local", "month", "time", "week" ], function(a) {
        Xd[a] = !0;
    });
    var he = {
        text: function(a, b, d, c, f, e) {
            Sa(0, b, d, c, f, e), xc(c);
        },
        date: pb("date", de, Nb(de, [ "yyyy", "MM", "dd" ]), "yyyy-MM-dd"),
        "datetime-local": pb("datetimelocal", ee, Nb(ee, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"),
        time: pb("time", ge, Nb(ge, [ "HH", "mm", "ss", "sss" ]), "HH:mm:ss.sss"),
        week: pb("week", Cc, function(a, b) {
            if (fa(a)) return a;
            if (E(a)) {
                Cc.lastIndex = 0;
                var d = Cc.exec(a);
                if (d) {
                    var c = +d[1], f = +d[2], e = d = 0, g = 0, h = 0, k = Rd(c);
                    f = 7 * (f - 1);
                    return b && (d = b.getHours(), e = b.getMinutes(), g = b.getSeconds(), h = b.getMilliseconds()), 
                    new Date(c, 0, k.getDate() + f, d, e, g, h);
                }
            }
            return NaN;
        }, "yyyy-Www"),
        month: pb("month", fe, Nb(fe, [ "yyyy", "MM" ]), "yyyy-MM"),
        number: function(a, b, d, c, f, e) {
            var g, h, k;
            (yc(0, b, 0, c), Yd(c), Sa(0, b, d, c, f, e), (v(d.min) || d.ngMin) && (c.$validators.min = function(a) {
                return c.$isEmpty(a) || x(g) || g <= a;
            }, d.$observe("min", function(a) {
                g = Ta(a), c.$validate();
            })), (v(d.max) || d.ngMax) && (c.$validators.max = function(a) {
                return c.$isEmpty(a) || x(h) || a <= h;
            }, d.$observe("max", function(a) {
                h = Ta(a), c.$validate();
            })), v(d.step) || d.ngStep) && (c.$validators.step = function(a, b) {
                return c.$isEmpty(b) || x(k) || Zd(b, g || 0, k);
            }, d.$observe("step", function(a) {
                k = Ta(a), c.$validate();
            }));
        },
        url: function(a, b, d, c, f, e) {
            Sa(0, b, d, c, f, e), xc(c), c.$$parserName = "url", c.$validators.url = function(a, b) {
                var d = a || b;
                return c.$isEmpty(d) || Vg.test(d);
            };
        },
        email: function(a, b, d, c, f, e) {
            Sa(0, b, d, c, f, e), xc(c), c.$$parserName = "email", c.$validators.email = function(a, b) {
                var d = a || b;
                return c.$isEmpty(d) || Wg.test(d);
            };
        },
        radio: function(a, b, d, c) {
            var f = !d.ngTrim || "false" !== S(d.ngTrim);
            x(d.name) && b.attr("name", ++rb), b.on("click", function(a) {
                var g;
                b[0].checked && (g = d.value, f && (g = S(g)), c.$setViewValue(g, a && a.type));
            }), c.$render = function() {
                var a = d.value;
                f && (a = S(a)), b[0].checked = a === c.$viewValue;
            }, d.$observe("value", c.$render);
        },
        range: function(a, b, d, c, f, e) {
            function g(a, c) {
                b.attr(a, d[a]), d.$observe(a, c);
            }
            yc(0, b, 0, c), Yd(c), Sa(0, b, d, c, f, e);
            var m = c.$$hasNativeValidators && "range" === b[0].type, n = m ? 0 : void 0, p = m ? 100 : void 0, r = m ? 1 : void 0, q = b[0].validity;
            a = v(d.min), f = v(d.max), e = v(d.step);
            var s = c.$render;
            c.$render = m && v(q.rangeUnderflow) && v(q.rangeOverflow) ? function() {
                s(), c.$setViewValue(b.val());
            } : s, a && (c.$validators.min = m ? function() {
                return !0;
            } : function(a, b) {
                return c.$isEmpty(b) || x(n) || n <= b;
            }, g("min", function(a) {
                n = Ta(a), ga(c.$modelValue) || (m ? ((a = b.val()) < n && (a = n, b.val(a)), c.$setViewValue(a)) : c.$validate());
            })), f && (c.$validators.max = m ? function() {
                return !0;
            } : function(a, b) {
                return c.$isEmpty(b) || x(p) || b <= p;
            }, g("max", function(a) {
                p = Ta(a), ga(c.$modelValue) || (m ? (a = b.val(), p < a && (b.val(p), a = p < n ? n : p), 
                c.$setViewValue(a)) : c.$validate());
            })), e && (c.$validators.step = m ? function() {
                return !q.stepMismatch;
            } : function(a, b) {
                return c.$isEmpty(b) || x(r) || Zd(b, n || 0, r);
            }, g("step", function(a) {
                r = Ta(a), ga(c.$modelValue) || (m && c.$viewValue !== b.val() ? c.$setViewValue(b.val()) : c.$validate());
            }));
        },
        checkbox: function(a, b, d, c, f, e, g, h) {
            var k = $d(h, a, "ngTrueValue", d.ngTrueValue, !0), l = $d(h, a, "ngFalseValue", d.ngFalseValue, !1);
            b.on("click", function(a) {
                c.$setViewValue(b[0].checked, a && a.type);
            }), c.$render = function() {
                b[0].checked = c.$viewValue;
            }, c.$isEmpty = function(a) {
                return !1 === a;
            }, c.$formatters.push(function(a) {
                return qa(a, k);
            }), c.$parsers.push(function(a) {
                return a ? k : l;
            });
        },
        hidden: w,
        button: w,
        submit: w,
        reset: w,
        file: w
    }, Rc = [ "$browser", "$sniffer", "$filter", "$parse", function(a, b, d, c) {
        return {
            restrict: "E",
            require: [ "?ngModel" ],
            link: {
                pre: function(f, e, g, h) {
                    h[0] && (he[P(g.type)] || he.text)(f, e, g, h[0], b, a, d, c);
                }
            }
        };
    } ], Xg = /^(true|false|\d+)$/, ef = function() {
        return {
            restrict: "A",
            priority: 100,
            compile: function(a, b) {
                return Xg.test(b.ngValue) ? function(a, b, f) {
                    a = a.$eval(f.ngValue), b.prop("value", a), f.$set("value", a);
                } : function(a, b, f) {
                    a.$watch(f.ngValue, function(a) {
                        b.prop("value", a), f.$set("value", a);
                    });
                };
            }
        };
    }, Fe = [ "$compile", function(a) {
        return {
            restrict: "AC",
            compile: function(b) {
                return a.$$addBindingClass(b), function(b, c, f) {
                    a.$$addBindingInfo(c, f.ngBind), c = c[0], b.$watch(f.ngBind, function(a) {
                        c.textContent = Yb(a);
                    });
                };
            }
        };
    } ], He = [ "$interpolate", "$compile", function(a, b) {
        return {
            compile: function(d) {
                return b.$$addBindingClass(d), function(c, d, e) {
                    c = a(d.attr(e.$attr.ngBindTemplate)), b.$$addBindingInfo(d, c.expressions), d = d[0], 
                    e.$observe("ngBindTemplate", function(a) {
                        d.textContent = x(a) ? "" : a;
                    });
                };
            }
        };
    } ], Ge = [ "$sce", "$parse", "$compile", function(a, b, d) {
        return {
            restrict: "A",
            compile: function(c, f) {
                var e = b(f.ngBindHtml), g = b(f.ngBindHtml, function(b) {
                    return a.valueOf(b);
                });
                return d.$$addBindingClass(c), function(b, c, f) {
                    d.$$addBindingInfo(c, f.ngBindHtml), b.$watch(g, function() {
                        var d = e(b);
                        c.html(a.getTrustedHtml(d) || "");
                    });
                };
            }
        };
    } ], df = ma({
        restrict: "A",
        require: "ngModel",
        link: function(a, b, d, c) {
            c.$viewChangeListeners.push(function() {
                a.$eval(d.ngChange);
            });
        }
    }), Ie = Ac("", !0), Ke = Ac("Odd", 0), Je = Ac("Even", 1), Le = Ra({
        compile: function(a, b) {
            b.$set("ngCloak", void 0), a.removeClass("ng-cloak");
        }
    }), Me = [ function() {
        return {
            restrict: "A",
            scope: !0,
            controller: "@",
            priority: 500
        };
    } ], Wc = {}, Yg = {
        blur: !0,
        focus: !0
    };
    q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(a) {
        var b = Ca("ng-" + a);
        Wc[b] = [ "$parse", "$rootScope", function(d, c) {
            return {
                restrict: "A",
                compile: function(f, e) {
                    var g = d(e[b], null, !0);
                    return function(b, d) {
                        d.on(a, function(d) {
                            var e = function() {
                                g(b, {
                                    $event: d
                                });
                            };
                            Yg[a] && c.$$phase ? b.$evalAsync(e) : b.$apply(e);
                        });
                    };
                }
            };
        } ];
    });
    var Pe = [ "$animate", "$compile", function(a, b) {
        return {
            multiElement: !0,
            transclude: "element",
            priority: 600,
            terminal: !0,
            restrict: "A",
            $$tlb: !0,
            link: function(d, c, f, e, g) {
                var h, k, l;
                d.$watch(f.ngIf, function(d) {
                    d ? k || g(function(d, e) {
                        k = e, d[d.length++] = b.$$createComment("end ngIf", f.ngIf), h = {
                            clone: d
                        }, a.enter(d, c.parent(), c);
                    }) : (l && (l.remove(), l = null), k && (k.$destroy(), k = null), h && (l = ub(h.clone), 
                    a.leave(l).done(function(a) {
                        !1 !== a && (l = null);
                    }), h = null));
                });
            }
        };
    } ], Qe = [ "$templateRequest", "$anchorScroll", "$animate", function(a, b, d) {
        return {
            restrict: "ECA",
            priority: 400,
            terminal: !0,
            transclude: "element",
            controller: $.noop,
            compile: function(c, f) {
                var e = f.ngInclude || f.src, g = f.onload || "", h = f.autoscroll;
                return function(c, f, m, n, p) {
                    var s, w, u, q = 0, H = function() {
                        w && (w.remove(), w = null), s && (s.$destroy(), s = null), u && (d.leave(u).done(function(a) {
                            !1 !== a && (w = null);
                        }), w = u, u = null);
                    };
                    c.$watch(e, function(e) {
                        var m = function(a) {
                            !1 === a || !v(h) || h && !c.$eval(h) || b();
                        }, w = ++q;
                        e ? (a(e, !0).then(function(a) {
                            if (!c.$$destroyed && w === q) {
                                var b = c.$new();
                                n.template = a, a = p(b, function(a) {
                                    H(), d.enter(a, null, f).done(m);
                                }), u = a, (s = b).$emit("$includeContentLoaded", e), c.$eval(g);
                            }
                        }, function() {
                            c.$$destroyed || w !== q || (H(), c.$emit("$includeContentError", e));
                        }), c.$emit("$includeContentRequested", e)) : (H(), n.template = null);
                    });
                };
            }
        };
    } ], gf = [ "$compile", function(a) {
        return {
            restrict: "ECA",
            priority: -400,
            require: "ngInclude",
            link: function(b, d, c, f) {
                na.call(d[0]).match(/SVG/) ? (d.empty(), a(Zc(f.template, z.document).childNodes)(b, function(a) {
                    d.append(a);
                }, {
                    futureParentElement: d
                })) : (d.html(f.template), a(d.contents())(b));
            }
        };
    } ], Re = Ra({
        priority: 450,
        compile: function() {
            return {
                pre: function(a, b, d) {
                    a.$eval(d.ngInit);
                }
            };
        }
    }), cf = function() {
        return {
            restrict: "A",
            priority: 100,
            require: "ngModel",
            link: function(a, b, d, c) {
                var f = d.ngList || ", ", e = "false" !== d.ngTrim, g = e ? S(f) : f;
                c.$parsers.push(function(a) {
                    if (!x(a)) {
                        var b = [];
                        return a && q(a.split(g), function(a) {
                            a && b.push(e ? S(a) : a);
                        }), b;
                    }
                }), c.$formatters.push(function(a) {
                    if (C(a)) return a.join(f);
                }), c.$isEmpty = function(a) {
                    return !a || !a.length;
                };
            }
        };
    }, ob = "ng-valid", Ud = "ng-invalid", Va = "ng-pristine", Rb = "ng-dirty", qb = M("ngModel");
    Ob.$inject = "$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate".split(" "), 
    Ob.prototype = {
        $$initGetterSetters: function() {
            if (this.$options.getOption("getterSetter")) {
                var a = this.$$parse(this.$$attr.ngModel + "()"), b = this.$$parse(this.$$attr.ngModel + "($$$p)");
                this.$$ngModelGet = function(b) {
                    var c = this.$$parsedNgModel(b);
                    return y(c) && (c = a(b)), c;
                }, this.$$ngModelSet = function(a, c) {
                    y(this.$$parsedNgModel(a)) ? b(a, {
                        $$$p: c
                    }) : this.$$parsedNgModelAssign(a, c);
                };
            } else if (!this.$$parsedNgModel.assign) throw qb("nonassign", this.$$attr.ngModel, ya(this.$$element));
        },
        $render: w,
        $isEmpty: function(a) {
            return x(a) || "" === a || null === a || a != a;
        },
        $$updateEmptyClasses: function(a) {
            this.$isEmpty(a) ? (this.$$animate.removeClass(this.$$element, "ng-not-empty"), 
            this.$$animate.addClass(this.$$element, "ng-empty")) : (this.$$animate.removeClass(this.$$element, "ng-empty"), 
            this.$$animate.addClass(this.$$element, "ng-not-empty"));
        },
        $setPristine: function() {
            this.$dirty = !1, this.$pristine = !0, this.$$animate.removeClass(this.$$element, Rb), 
            this.$$animate.addClass(this.$$element, Va);
        },
        $setDirty: function() {
            this.$dirty = !0, this.$pristine = !1, this.$$animate.removeClass(this.$$element, Va), 
            this.$$animate.addClass(this.$$element, Rb), this.$$parentForm.$setDirty();
        },
        $setUntouched: function() {
            this.$touched = !1, this.$untouched = !0, this.$$animate.setClass(this.$$element, "ng-untouched", "ng-touched");
        },
        $setTouched: function() {
            this.$touched = !0, this.$untouched = !1, this.$$animate.setClass(this.$$element, "ng-touched", "ng-untouched");
        },
        $rollbackViewValue: function() {
            this.$$timeout.cancel(this.$$pendingDebounce), this.$viewValue = this.$$lastCommittedViewValue, 
            this.$render();
        },
        $validate: function() {
            if (!ga(this.$modelValue)) {
                var a = this.$$lastCommittedViewValue, b = this.$$rawModelValue, d = this.$valid, c = this.$modelValue, f = this.$options.getOption("allowInvalid"), e = this;
                this.$$runValidators(b, a, function(a) {
                    f || d === a || (e.$modelValue = a ? b : void 0, e.$modelValue !== c && e.$$writeModelToScope());
                });
            }
        },
        $$runValidators: function(a, b, d) {
            function e(a, b) {
                h === k.$$currentValidationRunId && k.$setValidity(a, b);
            }
            function g(a) {
                h === k.$$currentValidationRunId && d(a);
            }
            this.$$currentValidationRunId++;
            var h = this.$$currentValidationRunId, k = this;
            !function() {
                var a = k.$$parserName || "parse";
                return x(k.$$parserValid) ? (e(a, null), !0) : (k.$$parserValid || (q(k.$validators, function(a, b) {
                    e(b, null);
                }), q(k.$asyncValidators, function(a, b) {
                    e(b, null);
                })), e(a, k.$$parserValid), k.$$parserValid);
            }() ? g(!1) : function() {
                var c = !0;
                return q(k.$validators, function(d, f) {
                    var g = Boolean(d(a, b));
                    c = c && g, e(f, g);
                }), !!c || (q(k.$asyncValidators, function(a, b) {
                    e(b, null);
                }), !1);
            }() ? function() {
                var c = [], d = !0;
                q(k.$asyncValidators, function(f, g) {
                    var h = f(a, b);
                    if (!h || !y(h.then)) throw qb("nopromise", h);
                    e(g, void 0), c.push(h.then(function() {
                        e(g, !0);
                    }, function() {
                        e(g, d = !1);
                    }));
                }), c.length ? k.$$q.all(c).then(function() {
                    g(d);
                }, w) : g(!0);
            }() : g(!1);
        },
        $commitViewValue: function() {
            var a = this.$viewValue;
            this.$$timeout.cancel(this.$$pendingDebounce), (this.$$lastCommittedViewValue !== a || "" === a && this.$$hasNativeValidators) && (this.$$updateEmptyClasses(a), 
            this.$$lastCommittedViewValue = a, this.$pristine && this.$setDirty(), this.$$parseAndValidate());
        },
        $$parseAndValidate: function() {
            var a = this.$$lastCommittedViewValue, b = this;
            if (this.$$parserValid = !x(a) || void 0) for (var d = 0; d < this.$parsers.length; d++) if (x(a = this.$parsers[d](a))) {
                this.$$parserValid = !1;
                break;
            }
            ga(this.$modelValue) && (this.$modelValue = this.$$ngModelGet(this.$$scope));
            var c = this.$modelValue, f = this.$options.getOption("allowInvalid");
            this.$$rawModelValue = a, f && (this.$modelValue = a, b.$modelValue !== c && b.$$writeModelToScope()), 
            this.$$runValidators(a, this.$$lastCommittedViewValue, function(d) {
                f || (b.$modelValue = d ? a : void 0, b.$modelValue !== c && b.$$writeModelToScope());
            });
        },
        $$writeModelToScope: function() {
            this.$$ngModelSet(this.$$scope, this.$modelValue), q(this.$viewChangeListeners, function(a) {
                try {
                    a();
                } catch (b) {
                    this.$$exceptionHandler(b);
                }
            }, this);
        },
        $setViewValue: function(a, b) {
            this.$viewValue = a, this.$options.getOption("updateOnDefault") && this.$$debounceViewValueCommit(b);
        },
        $$debounceViewValueCommit: function(a) {
            var b = this.$options.getOption("debounce");
            Y(b[a]) ? b = b[a] : Y(b.default) && (b = b.default), this.$$timeout.cancel(this.$$pendingDebounce);
            var d = this;
            0 < b ? this.$$pendingDebounce = this.$$timeout(function() {
                d.$commitViewValue();
            }, b) : this.$$scope.$root.$$phase ? this.$commitViewValue() : this.$$scope.$apply(function() {
                d.$commitViewValue();
            });
        }
    }, Vd({
        clazz: Ob,
        set: function(a, b) {
            a[b] = !0;
        },
        unset: function(a, b) {
            delete a[b];
        }
    });
    var Pb, bf = [ "$rootScope", function(a) {
        return {
            restrict: "A",
            require: [ "ngModel", "^?form", "^?ngModelOptions" ],
            controller: Ob,
            priority: 1,
            compile: function(b) {
                return b.addClass(Va).addClass("ng-untouched").addClass(ob), {
                    pre: function(a, b, f, e) {
                        var g = e[0];
                        b = e[1] || g.$$parentForm, (e = e[2]) && (g.$options = e.$options), g.$$initGetterSetters(), 
                        b.$addControl(g), f.$observe("name", function(a) {
                            g.$name !== a && g.$$parentForm.$$renameControl(g, a);
                        }), a.$on("$destroy", function() {
                            g.$$parentForm.$removeControl(g);
                        });
                    },
                    post: function(b, c, f, e) {
                        function g() {
                            h.$setTouched();
                        }
                        var h = e[0];
                        h.$options.getOption("updateOn") && c.on(h.$options.getOption("updateOn"), function(a) {
                            h.$$debounceViewValueCommit(a && a.type);
                        }), c.on("blur", function() {
                            h.$touched || (a.$$phase ? b.$evalAsync(g) : b.$apply(g));
                        });
                    }
                };
            }
        };
    } ], Zg = /(\s+|^)default(\s+|$)/;
    Bc.prototype = {
        getOption: function(a) {
            return this.$$options[a];
        },
        createChild: function(a) {
            var b = !1;
            return q(a = R({}, a), function(d, c) {
                "$inherit" === d ? "*" === c ? b = !0 : (a[c] = this.$$options[c], "updateOn" === c && (a.updateOnDefault = this.$$options.updateOnDefault)) : "updateOn" === c && (a.updateOnDefault = !1, 
                a[c] = S(d.replace(Zg, function() {
                    return a.updateOnDefault = !0, " ";
                })));
            }, this), b && (delete a["*"], ae(a, this.$$options)), ae(a, Pb.$$options), new Bc(a);
        }
    }, Pb = new Bc({
        updateOn: "",
        updateOnDefault: !0,
        debounce: 0,
        getterSetter: !1,
        allowInvalid: !1,
        timezone: null
    });
    var ff = function() {
        function a(a, d) {
            this.$$attrs = a, this.$$scope = d;
        }
        return a.$inject = [ "$attrs", "$scope" ], a.prototype = {
            $onInit: function() {
                var a = this.parentCtrl ? this.parentCtrl.$options : Pb, d = this.$$scope.$eval(this.$$attrs.ngModelOptions);
                this.$options = a.createChild(d);
            }
        }, {
            restrict: "A",
            priority: 10,
            require: {
                parentCtrl: "?^^ngModelOptions"
            },
            bindToController: !0,
            controller: a
        };
    }, Se = Ra({
        terminal: !0,
        priority: 1e3
    }), $g = M("ngOptions"), ah = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, $e = [ "$compile", "$document", "$parse", function(a, b, d) {
        function c(a, b, c) {
            function e(a, b, c, d, f) {
                this.selectValue = a, this.viewValue = b, this.label = c, this.group = d, this.disabled = f;
            }
            function f(a) {
                var b;
                if (!q && ta(a)) b = a; else for (var c in b = [], a) a.hasOwnProperty(c) && "$" !== c.charAt(0) && b.push(c);
                return b;
            }
            var n = a.match(ah);
            if (!n) throw $g("iexp", a, ya(b));
            var p = n[5] || n[7], q = n[6];
            a = / as /.test(n[0]) && n[1];
            var s = n[9];
            b = d(n[2] ? n[1] : p);
            var v = a && d(a) || b, u = s && d(s), w = s ? function(a, b) {
                return u(c, b);
            } : function(a) {
                return la(a);
            }, x = function(a, b) {
                return w(a, B(a, b));
            }, t = d(n[2] || n[1]), z = d(n[3] || ""), A = d(n[4] || ""), K = d(n[8]), I = {}, B = q ? function(a, b) {
                return I[q] = b, I[p] = a, I;
            } : function(a) {
                return I[p] = a, I;
            };
            return {
                trackBy: s,
                getTrackByValue: x,
                getWatchables: d(K, function(a) {
                    for (var b = [], d = f(a = a || []), e = d.length, g = 0; g < e; g++) {
                        var l = a[h = a === d ? g : d[g]], h = B(l, h);
                        l = w(l, h);
                        b.push(l), (n[2] || n[1]) && (l = t(c, h), b.push(l)), n[4] && (h = A(c, h), b.push(h));
                    }
                    return b;
                }),
                getOptions: function() {
                    for (var a = [], b = {}, d = K(c) || [], g = f(d), h = g.length, n = 0; n < h; n++) {
                        var p = d === g ? n : g[n], q = B(d[p], p), r = v(c, q);
                        r = new e(p = w(r, q), r, t(c, q), z(c, q), q = A(c, q));
                        a.push(r), b[p] = r;
                    }
                    return {
                        items: a,
                        selectValueMap: b,
                        getOptionFromViewValue: function(a) {
                            return b[x(a)];
                        },
                        getViewValueFromOption: function(a) {
                            return s ? Fa(a.viewValue) : a.viewValue;
                        }
                    };
                }
            };
        }
        var f = z.document.createElement("option"), e = z.document.createElement("optgroup");
        return {
            restrict: "A",
            terminal: !0,
            require: [ "select", "ngModel" ],
            link: {
                pre: function(a, b, c, d) {
                    d[0].registerOption = w;
                },
                post: function(d, h, k, l) {
                    function m(a) {
                        var b = (a = t.getOptionFromViewValue(a)) && a.element;
                        return b && !b.selected && (b.selected = !0), a;
                    }
                    function p() {
                        var a = t && r.readValue();
                        if (t) for (var b = t.items.length - 1; 0 <= b; b--) {
                            var c = t.items[b];
                            v(c.group) ? Fb(c.element.parentNode) : Fb(c.element);
                        }
                        t = y.getOptions();
                        var d = {};
                        z && h.prepend(r.emptyOption), t.items.forEach(function(a) {
                            var b;
                            if (v(a.group)) {
                                (b = d[a.group]) || (b = e.cloneNode(!1), A.appendChild(b), b.label = null === a.group ? "null" : a.group, 
                                d[a.group] = b);
                                var c = f.cloneNode(!1);
                            } else b = A, c = f.cloneNode(!1);
                            b.appendChild(c), function(a, b) {
                                (a.element = b).disabled = a.disabled, a.label !== b.label && (b.label = a.label, 
                                b.textContent = a.label), b.value = a.selectValue;
                            }(a, c);
                        }), h[0].appendChild(A), s.$render(), s.$isEmpty(a) || (b = r.readValue(), (y.trackBy || w ? qa(a, b) : a === b) || (s.$setViewValue(b), 
                        s.$render()));
                    }
                    var r = l[0], s = l[1], w = k.multiple;
                    l = 0;
                    for (var u = h.children(), x = u.length; l < x; l++) if ("" === u[l].value) {
                        r.hasEmptyOption = !0, r.emptyOption = u.eq(l);
                        break;
                    }
                    var z = !!r.emptyOption;
                    D(f.cloneNode(!1)).val("?");
                    var t, y = c(k.ngOptions, h, d), A = b[0].createDocumentFragment();
                    r.generateUnknownOptionValue = function(a) {
                        return "?";
                    }, w ? (r.writeValue = function(a) {
                        var b = a && a.map(m) || [];
                        t.items.forEach(function(a) {
                            a.element.selected && -1 === Array.prototype.indexOf.call(b, a) && (a.element.selected = !1);
                        });
                    }, r.readValue = function() {
                        var a = h.val() || [], b = [];
                        return q(a, function(a) {
                            (a = t.selectValueMap[a]) && !a.disabled && b.push(t.getViewValueFromOption(a));
                        }), b;
                    }, y.trackBy && d.$watchCollection(function() {
                        if (C(s.$viewValue)) return s.$viewValue.map(function(a) {
                            return y.getTrackByValue(a);
                        });
                    }, function() {
                        s.$render();
                    })) : (r.writeValue = function(a) {
                        var b = t.selectValueMap[h.val()], c = t.getOptionFromViewValue(a);
                        b && b.element.removeAttribute("selected"), c ? (h[0].value !== c.selectValue && (r.removeUnknownOption(), 
                        r.unselectEmptyOption(), h[0].value = c.selectValue, c.element.selected = !0), c.element.setAttribute("selected", "selected")) : z ? r.selectEmptyOption() : r.unknownOption.parent().length ? r.updateUnknownOption(a) : r.renderUnknownOption(a);
                    }, r.readValue = function() {
                        var a = t.selectValueMap[h.val()];
                        return a && !a.disabled ? (r.unselectEmptyOption(), r.removeUnknownOption(), t.getViewValueFromOption(a)) : null;
                    }, y.trackBy && d.$watch(function() {
                        return y.getTrackByValue(s.$viewValue);
                    }, function() {
                        s.$render();
                    })), z && (r.emptyOption.remove(), a(r.emptyOption)(d), 8 === r.emptyOption[0].nodeType ? (r.hasEmptyOption = !1, 
                    r.registerOption = function(a, b) {
                        "" === b.val() && (r.hasEmptyOption = !0, r.emptyOption = b, r.emptyOption.removeClass("ng-scope"), 
                        s.$render(), b.on("$destroy", function() {
                            r.hasEmptyOption = !1, r.emptyOption = void 0;
                        }));
                    }) : r.emptyOption.removeClass("ng-scope")), h.empty(), p(), d.$watchCollection(y.getWatchables, p);
                }
            }
        };
    } ], Te = [ "$locale", "$interpolate", "$log", function(a, b, d) {
        var c = /{}/g, f = /^when(Minus)?(.+)$/;
        return {
            link: function(e, g, h) {
                function k(a) {
                    g.text(a || "");
                }
                var y, l = h.count, m = h.$attr.when && g.attr(h.$attr.when), n = h.offset || 0, p = e.$eval(m) || {}, r = {}, s = b.startSymbol(), v = b.endSymbol(), u = s + l + "-" + n + v, H = $.noop;
                q(h, function(a, b) {
                    var c = f.exec(b);
                    c && (c = (c[1] ? "-" : "") + P(c[2]), p[c] = g.attr(h.$attr[b]));
                }), q(p, function(a, d) {
                    r[d] = b(a.replace(c, u));
                }), e.$watch(l, function(b) {
                    var c = parseFloat(b), f = ga(c);
                    f || c in p || (c = a.pluralCat(c - n)), c === y || f && ga(y) || (H(), x(f = r[c]) ? (null != b && d.debug("ngPluralize: no rule defined for '" + c + "' in " + m), 
                    H = w, k()) : H = e.$watch(f, k), y = c);
                });
            }
        };
    } ], Ue = [ "$parse", "$animate", "$compile", function(a, b, d) {
        var c = M("ngRepeat"), f = function(a, b, c, d, f, m, n) {
            a[c] = d, f && (a[f] = m), a.$index = b, a.$first = 0 === b, a.$last = b === n - 1, 
            a.$middle = !(a.$first || a.$last), a.$odd = !(a.$even = 0 == (1 & b));
        };
        return {
            restrict: "A",
            multiElement: !0,
            transclude: "element",
            priority: 1e3,
            terminal: !0,
            $$tlb: !0,
            compile: function(e, g) {
                var h = g.ngRepeat, k = d.$$createComment("end ngRepeat", h);
                if (!(l = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/))) throw c("iexp", h);
                var l, m = l[1], n = l[2], p = l[3], r = l[4];
                if (!(l = m.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/))) throw c("iidexp", m);
                var s = l[3] || l[1], v = l[2];
                if (p && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p))) throw c("badident", p);
                var u, w, x, t, y = {
                    $id: la
                };
                return r ? u = a(r) : (x = function(a, b) {
                    return la(b);
                }, t = function(a) {
                    return a;
                }), function(a, d, e, g, l) {
                    u && (w = function(b, c, d) {
                        return v && (y[v] = b), y[s] = c, y.$index = d, u(a, y);
                    });
                    var m = W();
                    a.$watchCollection(n, function(e) {
                        var g, n, u, z, D, E, B, F, C, I, r = d[0], y = W();
                        if (p && (a[p] = e), ta(e)) F = e, n = w || x; else for (I in n = w || t, F = [], 
                        e) va.call(e, I) && "$" !== I.charAt(0) && F.push(I);
                        for (z = F.length, I = Array(z), g = 0; g < z; g++) if (D = e === F ? g : F[g], 
                        E = e[D], B = n(D, E, g), m[B]) C = m[B], delete m[B], y[B] = C, I[g] = C; else {
                            if (y[B]) throw q(I, function(a) {
                                a && a.scope && (m[a.id] = a);
                            }), c("dupes", h, B, E);
                            I[g] = {
                                id: B,
                                scope: void 0,
                                clone: void 0
                            }, y[B] = !0;
                        }
                        for (u in m) {
                            if (B = ub((C = m[u]).clone), b.leave(B), B[0].parentNode) for (g = 0, n = B.length; g < n; g++) B[g].$$NG_REMOVED = !0;
                            C.scope.$destroy();
                        }
                        for (g = 0; g < z; g++) if (D = e === F ? g : F[g], E = e[D], (C = I[g]).scope) {
                            for (u = r; (u = u.nextSibling) && u.$$NG_REMOVED; ) ;
                            C.clone[0] !== u && b.move(ub(C.clone), null, r), r = C.clone[C.clone.length - 1], 
                            f(C.scope, g, s, E, v, D, z);
                        } else l(function(a, c) {
                            C.scope = c;
                            var d = k.cloneNode(!1);
                            a[a.length++] = d, b.enter(a, null, r), r = d, C.clone = a, y[C.id] = C, f(C.scope, g, s, E, v, D, z);
                        });
                        m = y;
                    });
                };
            }
        };
    } ], Ve = [ "$animate", function(a) {
        return {
            restrict: "A",
            multiElement: !0,
            link: function(b, d, c) {
                b.$watch(c.ngShow, function(b) {
                    a[b ? "removeClass" : "addClass"](d, "ng-hide", {
                        tempClasses: "ng-hide-animate"
                    });
                });
            }
        };
    } ], Oe = [ "$animate", function(a) {
        return {
            restrict: "A",
            multiElement: !0,
            link: function(b, d, c) {
                b.$watch(c.ngHide, function(b) {
                    a[b ? "addClass" : "removeClass"](d, "ng-hide", {
                        tempClasses: "ng-hide-animate"
                    });
                });
            }
        };
    } ], We = Ra(function(a, b, d) {
        a.$watch(d.ngStyle, function(a, d) {
            d && a !== d && q(d, function(a, c) {
                b.css(c, "");
            }), a && b.css(a);
        }, !0);
    }), Xe = [ "$animate", "$compile", function(a, b) {
        return {
            require: "ngSwitch",
            controller: [ "$scope", function() {
                this.cases = {};
            } ],
            link: function(d, c, f, e) {
                var g = [], h = [], k = [], l = [], m = function(a, b) {
                    return function(c) {
                        !1 !== c && a.splice(b, 1);
                    };
                };
                d.$watch(f.ngSwitch || f.on, function(c) {
                    for (var d, f; k.length; ) a.cancel(k.pop());
                    for (d = 0, f = l.length; d < f; ++d) {
                        var s = ub(h[d].clone);
                        l[d].$destroy(), (k[d] = a.leave(s)).done(m(k, d));
                    }
                    h.length = 0, l.length = 0, (g = e.cases["!" + c] || e.cases["?"]) && q(g, function(c) {
                        c.transclude(function(d, e) {
                            l.push(e);
                            var f = c.element;
                            d[d.length++] = b.$$createComment("end ngSwitchWhen"), h.push({
                                clone: d
                            }), a.enter(d, f.parent(), f);
                        });
                    });
                });
            }
        };
    } ], Ye = Ra({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: !0,
        link: function(a, b, d, c, f) {
            q(d.ngSwitchWhen.split(d.ngSwitchWhenSeparator).sort().filter(function(a, b, c) {
                return c[b - 1] !== a;
            }), function(a) {
                c.cases["!" + a] = c.cases["!" + a] || [], c.cases["!" + a].push({
                    transclude: f,
                    element: b
                });
            });
        }
    }), Ze = Ra({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: !0,
        link: function(a, b, d, c, f) {
            c.cases["?"] = c.cases["?"] || [], c.cases["?"].push({
                transclude: f,
                element: b
            });
        }
    }), bh = M("ngTransclude"), af = [ "$compile", function(a) {
        return {
            restrict: "EAC",
            terminal: !0,
            compile: function(b) {
                var d = a(b.contents());
                return b.empty(), function(a, b, e, g, h) {
                    function k() {
                        d(a, function(a) {
                            b.append(a);
                        });
                    }
                    if (!h) throw bh("orphan", ya(b));
                    e.ngTransclude === e.$attr.ngTransclude && (e.ngTransclude = ""), h(function(a, c) {
                        var d;
                        if (d = a.length) a: {
                            d = 0;
                            for (var e = a.length; d < e; d++) {
                                var g = a[d];
                                if (g.nodeType !== Ja || g.nodeValue.trim()) {
                                    d = !0;
                                    break a;
                                }
                            }
                            d = void 0;
                        }
                        d ? b.append(a) : (k(), c.$destroy());
                    }, null, e = e.ngTransclude || e.ngTranscludeSlot), e && !h.isSlotFilled(e) && k();
                };
            }
        };
    } ], Ce = [ "$templateCache", function(a) {
        return {
            restrict: "E",
            terminal: !0,
            compile: function(b, d) {
                "text/ng-template" === d.type && a.put(d.id, b[0].text);
            }
        };
    } ], ch = {
        $setViewValue: w,
        $render: w
    }, dh = [ "$element", "$scope", function(a, b) {
        function d() {
            h || (h = !0, b.$$postDigest(function() {
                h = !1, e.ngModelCtrl.$render();
            }));
        }
        function c(a) {
            k || (k = !0, b.$$postDigest(function() {
                b.$$destroyed || (k = !1, e.ngModelCtrl.$setViewValue(e.readValue()), a && e.ngModelCtrl.$render());
            }));
        }
        function f(a) {
            a.prop("selected", !0), a.attr("selected", !0);
        }
        var e = this, g = new Qa();
        e.selectValueMap = {}, e.ngModelCtrl = ch, e.multiple = !1, e.unknownOption = D(z.document.createElement("option")), 
        e.hasEmptyOption = !1, e.emptyOption = void 0, e.renderUnknownOption = function(b) {
            b = e.generateUnknownOptionValue(b), e.unknownOption.val(b), a.prepend(e.unknownOption), 
            f(e.unknownOption), a.val(b);
        }, e.updateUnknownOption = function(b) {
            b = e.generateUnknownOptionValue(b), e.unknownOption.val(b), f(e.unknownOption), 
            a.val(b);
        }, e.generateUnknownOptionValue = function(a) {
            return "? " + la(a) + " ?";
        }, e.removeUnknownOption = function() {
            e.unknownOption.parent() && e.unknownOption.remove();
        }, e.selectEmptyOption = function() {
            e.emptyOption && (a.val(""), f(e.emptyOption));
        }, e.unselectEmptyOption = function() {
            e.hasEmptyOption && e.emptyOption.removeAttr("selected");
        }, b.$on("$destroy", function() {
            e.renderUnknownOption = w;
        }), e.readValue = function() {
            var b = (b = a.val()) in e.selectValueMap ? e.selectValueMap[b] : b;
            return e.hasOption(b) ? b : null;
        }, e.writeValue = function(b) {
            var c = a[0].options[a[0].selectedIndex];
            c && c.removeAttribute("selected"), e.hasOption(b) ? (e.removeUnknownOption(), c = la(b), 
            a.val(c in e.selectValueMap ? c : b), f(D(a[0].options[a[0].selectedIndex]))) : null == b && e.emptyOption ? (e.removeUnknownOption(), 
            e.selectEmptyOption()) : e.unknownOption.parent().length ? e.updateUnknownOption(b) : e.renderUnknownOption(b);
        }, e.addOption = function(a, b) {
            if (8 !== b[0].nodeType) {
                Pa(a, '"option value"'), "" === a && (e.hasEmptyOption = !0, e.emptyOption = b);
                var c = g.get(a) || 0;
                g.put(a, c + 1), d();
            }
        }, e.removeOption = function(a) {
            var b = g.get(a);
            b && (1 === b ? (g.remove(a), "" === a && (e.hasEmptyOption = !1, e.emptyOption = void 0)) : g.put(a, b - 1));
        };
        var h = !(e.hasOption = function(a) {
            return !!g.get(a);
        }), k = !1;
        e.registerOption = function(a, b, d, f, g) {
            if (d.$attr.ngValue) {
                var h, k = NaN;
                d.$observe("value", function(a) {
                    var d, f = b.prop("selected");
                    v(k) && (e.removeOption(h), delete e.selectValueMap[k], d = !0), k = la(a), h = a, 
                    e.selectValueMap[k] = a, e.addOption(a, b), b.attr("value", k), d && f && c();
                });
            } else f ? d.$observe("value", function(a) {
                e.readValue();
                var d, f = b.prop("selected");
                v(h) && (e.removeOption(h), d = !0), h = a, e.addOption(a, b), d && f && c();
            }) : g ? a.$watch(g, function(a, f) {
                d.$set("value", a);
                var g = b.prop("selected");
                f !== a && e.removeOption(f), e.addOption(a, b), f && g && c();
            }) : e.addOption(d.value, b);
            d.$observe("disabled", function(a) {
                ("true" === a || a && b.prop("selected")) && (e.multiple ? c(!0) : (e.ngModelCtrl.$setViewValue(null), 
                e.ngModelCtrl.$render()));
            }), b.on("$destroy", function() {
                var a = e.readValue(), b = d.value;
                e.removeOption(b), e.ngModelCtrl.$render(), (e.multiple && a && -1 !== a.indexOf(b) || a === b) && c(!0);
            });
        };
    } ], De = function() {
        return {
            restrict: "E",
            require: [ "select", "?ngModel" ],
            controller: dh,
            priority: 1,
            link: {
                pre: function(a, b, d, c) {
                    var f = c[0], e = c[1];
                    if (e) {
                        if (f.ngModelCtrl = e, b.on("change", function() {
                            f.removeUnknownOption(), a.$apply(function() {
                                e.$setViewValue(f.readValue());
                            });
                        }), d.multiple) {
                            f.multiple = !0, f.readValue = function() {
                                var a = [];
                                return q(b.find("option"), function(b) {
                                    b.selected && !b.disabled && (b = b.value, a.push(b in f.selectValueMap ? f.selectValueMap[b] : b));
                                }), a;
                            }, f.writeValue = function(a) {
                                var c = new Qa(a);
                                q(b.find("option"), function(a) {
                                    a.selected = v(c.get(a.value)) || v(c.get(f.selectValueMap[a.value]));
                                });
                            };
                            var g, h = NaN;
                            a.$watch(function() {
                                h !== e.$viewValue || qa(g, e.$viewValue) || (g = ra(e.$viewValue), e.$render()), 
                                h = e.$viewValue;
                            }), e.$isEmpty = function(a) {
                                return !a || 0 === a.length;
                            };
                        }
                    } else f.registerOption = w;
                },
                post: function(a, b, d, c) {
                    var f = c[1];
                    if (f) {
                        var e = c[0];
                        f.$render = function() {
                            e.writeValue(f.$viewValue);
                        };
                    }
                }
            }
        };
    }, Ee = [ "$interpolate", function(a) {
        return {
            restrict: "E",
            priority: 100,
            compile: function(b, d) {
                var c, f;
                return v(d.ngValue) || (v(d.value) ? c = a(d.value, !0) : (f = a(b.text(), !0)) || d.$set("value", b.text())), 
                function(a, b, d) {
                    var k = b.parent();
                    (k = k.data("$selectController") || k.parent().data("$selectController")) && k.registerOption(a, b, d, c, f);
                };
            }
        };
    } ], Tc = function() {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function(a, b, d, c) {
                c && (d.required = !0, c.$validators.required = function(a, b) {
                    return !d.required || !c.$isEmpty(b);
                }, d.$observe("required", function() {
                    c.$validate();
                }));
            }
        };
    }, Sc = function() {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function(a, b, d, c) {
                if (c) {
                    var f, e = d.ngPattern || d.pattern;
                    d.$observe("pattern", function(a) {
                        if (E(a) && 0 < a.length && (a = new RegExp("^" + a + "$")), a && !a.test) throw M("ngPattern")("noregexp", e, a, ya(b));
                        f = a || void 0, c.$validate();
                    }), c.$validators.pattern = function(a, b) {
                        return c.$isEmpty(b) || x(f) || f.test(b);
                    };
                }
            }
        };
    }, Vc = function() {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function(a, b, d, c) {
                if (c) {
                    var f = -1;
                    d.$observe("maxlength", function(a) {
                        a = Z(a), f = ga(a) ? -1 : a, c.$validate();
                    }), c.$validators.maxlength = function(a, b) {
                        return f < 0 || c.$isEmpty(b) || b.length <= f;
                    };
                }
            }
        };
    }, Uc = function() {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function(a, b, d, c) {
                if (c) {
                    var f = 0;
                    d.$observe("minlength", function(a) {
                        f = Z(a) || 0, c.$validate();
                    }), c.$validators.minlength = function(a, b) {
                        return c.$isEmpty(b) || b.length >= f;
                    };
                }
            }
        };
    };
    z.angular.bootstrap ? z.console && console.log("WARNING: Tried to load angular more than once.") : (function() {
        var a;
        if (!Oc) {
            var b = sb();
            (oa = x(b) ? z.jQuery : b ? z[b] : void 0) && oa.fn.on ? (R((D = oa).fn, {
                scope: Oa.scope,
                isolateScope: Oa.isolateScope,
                controller: Oa.controller,
                injector: Oa.injector,
                inheritedData: Oa.inheritedData
            }), a = oa.cleanData, oa.cleanData = function(b) {
                for (var c, e, f = 0; null != (e = b[f]); f++) (c = oa._data(e, "events")) && c.$destroy && oa(e).triggerHandler("$destroy");
                a(b);
            }) : D = X, $.element = D, Oc = !0;
        }
    }(), R($, {
        bootstrap: Mc,
        copy: Fa,
        extend: R,
        merge: je,
        equals: qa,
        element: D,
        forEach: q,
        injector: eb,
        noop: w,
        bind: bb,
        toJson: cb,
        fromJson: Ic,
        identity: Ya,
        isUndefined: x,
        isDefined: v,
        isString: E,
        isFunction: y,
        isObject: F,
        isNumber: Y,
        isElement: Tb,
        isArray: C,
        version: ye,
        isDate: fa,
        lowercase: P,
        uppercase: vb,
        callbacks: {
            $$counter: 0
        },
        getTestability: se,
        reloadWithDebugInfo: re,
        $$minErr: M,
        $$csp: za,
        $$encodeUriSegment: db,
        $$encodeUriQuery: ka,
        $$stringify: Yb
    }), (Zb = function(a) {
        function b(a, b, c) {
            return a[b] || (a[b] = c());
        }
        var d = M("$injector"), c = M("ng");
        return (a = b(a, "angular", Object)).$$minErr = a.$$minErr || M, b(a, "module", function() {
            var a = {};
            return function(e, g, h) {
                if ("hasOwnProperty" === e) throw c("badname", "module");
                return g && a.hasOwnProperty(e) && (a[e] = null), b(a, e, function() {
                    function a(b, d, e, f) {
                        return f || (f = c), function() {
                            return f[e || "push"]([ b, d, arguments ]), J;
                        };
                    }
                    function b(a, d, f) {
                        return f || (f = c), function(b, c) {
                            return c && y(c) && (c.$$moduleName = e), f.push([ a, d, arguments ]), J;
                        };
                    }
                    if (!g) throw d("nomod", e);
                    var c = [], f = [], p = [], r = a("$injector", "invoke", "push", f), J = {
                        _invokeQueue: c,
                        _configBlocks: f,
                        _runBlocks: p,
                        requires: g,
                        name: e,
                        provider: b("$provide", "provider"),
                        factory: b("$provide", "factory"),
                        service: b("$provide", "service"),
                        value: a("$provide", "value"),
                        constant: a("$provide", "constant", "unshift"),
                        decorator: b("$provide", "decorator", f),
                        animation: b("$animateProvider", "register"),
                        filter: b("$filterProvider", "register"),
                        controller: b("$controllerProvider", "register"),
                        directive: b("$compileProvider", "directive"),
                        component: b("$compileProvider", "component"),
                        config: r,
                        run: function(a) {
                            return p.push(a), this;
                        }
                    };
                    return h && r(h), J;
                });
            };
        });
    }(z))("ng", [ "ngLocale" ], [ "$provide", function(a) {
        a.provider({
            $$sanitizeUri: ze
        }), a.provider("$compile", Qc).directive({
            a: Ae,
            input: Rc,
            textarea: Rc,
            form: Be,
            script: Ce,
            select: De,
            option: Ee,
            ngBind: Fe,
            ngBindHtml: Ge,
            ngBindTemplate: He,
            ngClass: Ie,
            ngClassEven: Je,
            ngClassOdd: Ke,
            ngCloak: Le,
            ngController: Me,
            ngForm: Ne,
            ngHide: Oe,
            ngIf: Pe,
            ngInclude: Qe,
            ngInit: Re,
            ngNonBindable: Se,
            ngPluralize: Te,
            ngRepeat: Ue,
            ngShow: Ve,
            ngStyle: We,
            ngSwitch: Xe,
            ngSwitchWhen: Ye,
            ngSwitchDefault: Ze,
            ngOptions: $e,
            ngTransclude: af,
            ngModel: bf,
            ngList: cf,
            ngChange: df,
            pattern: Sc,
            ngPattern: Sc,
            required: Tc,
            ngRequired: Tc,
            minlength: Uc,
            ngMinlength: Uc,
            maxlength: Vc,
            ngMaxlength: Vc,
            ngValue: ef,
            ngModelOptions: ff
        }).directive({
            ngInclude: gf
        }).directive(wb).directive(Wc), a.provider({
            $anchorScroll: hf,
            $animate: jf,
            $animateCss: kf,
            $$animateJs: lf,
            $$animateQueue: mf,
            $$AnimateRunner: nf,
            $$animateAsyncRun: of,
            $browser: pf,
            $cacheFactory: qf,
            $controller: rf,
            $document: sf,
            $$isDocumentHidden: tf,
            $exceptionHandler: uf,
            $filter: Xc,
            $$forceReflow: vf,
            $interpolate: wf,
            $interval: xf,
            $http: yf,
            $httpParamSerializer: zf,
            $httpParamSerializerJQLike: Af,
            $httpBackend: Bf,
            $xhrFactory: Cf,
            $jsonpCallbacks: Df,
            $location: Ef,
            $log: Ff,
            $parse: Gf,
            $rootScope: Hf,
            $q: If,
            $$q: Jf,
            $sce: Kf,
            $sceDelegate: Lf,
            $sniffer: Mf,
            $templateCache: Nf,
            $templateRequest: Of,
            $$testability: Pf,
            $timeout: Qf,
            $window: Rf,
            $$rAF: Sf,
            $$jqLite: Tf,
            $$HashMap: Uf,
            $$cookieReader: Vf
        });
    } ]), $.module("ngLocale", [], [ "$provide", function(a) {
        a.value("$locale", {
            DATETIME_FORMATS: {
                AMPMS: [ "AM", "PM" ],
                DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                ERANAMES: [ "Before Christ", "Anno Domini" ],
                ERAS: [ "BC", "AD" ],
                FIRSTDAYOFWEEK: 6,
                MONTH: "January February March April May June July August September October November December".split(" "),
                SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                STANDALONEMONTH: "January February March April May June July August September October November December".split(" "),
                WEEKENDRANGE: [ 5, 6 ],
                fullDate: "EEEE, MMMM d, y",
                longDate: "MMMM d, y",
                medium: "MMM d, y h:mm:ss a",
                mediumDate: "MMM d, y",
                mediumTime: "h:mm:ss a",
                short: "M/d/yy h:mm a",
                shortDate: "M/d/yy",
                shortTime: "h:mm a"
            },
            NUMBER_FORMATS: {
                CURRENCY_SYM: "$",
                DECIMAL_SEP: ".",
                GROUP_SEP: ",",
                PATTERNS: [ {
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 3,
                    minFrac: 0,
                    minInt: 1,
                    negPre: "-",
                    negSuf: "",
                    posPre: "",
                    posSuf: ""
                }, {
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 2,
                    minFrac: 2,
                    minInt: 1,
                    negPre: "-¤",
                    negSuf: "",
                    posPre: "¤",
                    posSuf: ""
                } ]
            },
            id: "en-us",
            localeID: "en_US",
            pluralCat: function(a, c) {
                var f = 0 | a, e = c;
                return void 0 === e && (e = Math.min(function(a) {
                    var b = (a += "").indexOf(".");
                    return -1 == b ? 0 : a.length - b - 1;
                }(a), 3)), Math.pow(10, e), 1 == f && 0 == e ? "one" : "other";
            }
        });
    } ]), D(function() {
        pe(z.document, Mc);
    }));
}(window), !window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');