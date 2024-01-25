if (function(a, b) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a);
    } : b(a);
}("undefined" != typeof window ? window : this, function(a, b) {
    "use strict";
    var c = [], d = a.document, e = Object.getPrototypeOf, f = c.slice, g = c.concat, h = c.push, i = c.indexOf, j = {}, k = j.toString, l = j.hasOwnProperty, m = l.toString, n = m.call(Object), o = {};
    function p(a, b) {
        var c = (b = b || d).createElement("script");
        c.text = a, b.head.appendChild(c).parentNode.removeChild(c);
    }
    var q = "3.0.0", r = function(a, b) {
        return new r.fn.init(a, b);
    }, s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, t = /^-ms-/, u = /-([a-z])/g, v = function(a, b) {
        return b.toUpperCase();
    };
    function w(a) {
        var b = !!a && "length" in a && a.length, c = r.type(a);
        return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && 0 < b && b - 1 in a);
    }
    r.fn = r.prototype = {
        jquery: q,
        constructor: r,
        length: 0,
        toArray: function() {
            return f.call(this);
        },
        get: function(a) {
            return null != a ? a < 0 ? this[a + this.length] : this[a] : f.call(this);
        },
        pushStack: function(a) {
            var b = r.merge(this.constructor(), a);
            return b.prevObject = this, b;
        },
        each: function(a) {
            return r.each(this, a);
        },
        map: function(a) {
            return this.pushStack(r.map(this, function(b, c) {
                return a.call(b, c, b);
            }));
        },
        slice: function() {
            return this.pushStack(f.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(a) {
            var b = this.length, c = +a + (a < 0 ? b : 0);
            return this.pushStack(0 <= c && c < b ? [ this[c] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: h,
        sort: c.sort,
        splice: c.splice
    }, r.extend = r.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || r.isFunction(g) || (g = {}), 
        h === i && (g = this, h--); h < i; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], 
        g !== (d = a[b]) && (j && d && (r.isPlainObject(d) || (e = r.isArray(d))) ? (e ? (e = !1, 
        f = c && r.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g;
    }, r.extend({
        expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === r.type(a);
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window;
        },
        isNumeric: function(a) {
            var b = r.type(a);
            return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
        },
        isPlainObject: function(a) {
            var b, c;
            return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || "function" == typeof (c = l.call(b, "constructor") && b.constructor) && m.call(c) === n);
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0;
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a;
        },
        globalEval: function(a) {
            p(a);
        },
        camelCase: function(a) {
            return a.replace(t, "ms-").replace(u, v);
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        },
        each: function(a, b) {
            var c, d = 0;
            if (w(a)) for (c = a.length; d < c && !1 !== b.call(a[d], d, a[d]); d++) ; else for (d in a) if (!1 === b.call(a[d], d, a[d])) break;
            return a;
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(s, "");
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [ a ] : a) : h.call(c, a)), 
            c;
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : i.call(b, a, c);
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
            return a.length = e, a;
        },
        grep: function(a, b, c) {
            for (var e = [], f = 0, g = a.length, h = !c; f < g; f++) !b(a[f], f) !== h && e.push(a[f]);
            return e;
        },
        map: function(a, b, c) {
            var d, e, f = 0, h = [];
            if (w(a)) for (d = a.length; f < d; f++) null != (e = b(a[f], f, c)) && h.push(e); else for (f in a) null != (e = b(a[f], f, c)) && h.push(e);
            return g.apply([], h);
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            return "string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a) ? (d = f.call(arguments, 2), 
            (e = function() {
                return a.apply(b || this, d.concat(f.call(arguments)));
            }).guid = a.guid = a.guid || r.guid++, e) : void 0;
        },
        now: Date.now,
        support: o
    }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), 
    r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        j["[object " + b + "]"] = b.toLowerCase();
    });
    var x = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date(), v = a.document, w = 0, x = 0, y = ha(), z = ha(), A = ha(), B = function(a, b) {
            return a === b && (l = !0), 0;
        }, C = {}.hasOwnProperty, D = [], E = D.pop, F = D.push, G = D.push, H = D.slice, I = function(a, b) {
            for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c;
            return -1;
        }, J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", K = "[\\x20\\t\\r\\n\\f]", L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]", N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)", O = new RegExp(K + "+", "g"), P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"), Q = new RegExp("^" + K + "*," + K + "*"), R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"), S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"), T = new RegExp(N), U = new RegExp("^" + L + "$"), V = {
            ID: new RegExp("^#(" + L + ")"),
            CLASS: new RegExp("^\\.(" + L + ")"),
            TAG: new RegExp("^(" + L + "|[*])"),
            ATTR: new RegExp("^" + M),
            PSEUDO: new RegExp("^" + N),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + J + ")$", "i"),
            needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
        }, W = /^(?:input|select|textarea|button)$/i, X = /^h\d$/i, Y = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, $ = /[+~]/, _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"), aa = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d != d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
        }, ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, ca = function(a, b) {
            return b ? "\0" === a ? "�" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a;
        }, da = function() {
            m();
        }, ea = ta(function(a) {
            return !0 === a.disabled;
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType;
        } catch (fa) {
            G = {
                apply: D.length ? function(a, b) {
                    F.apply(a, H.call(b));
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++]; ) ;
                    a.length = c - 1;
                }
            };
        }
        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s = b && b.ownerDocument, w = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== w && (l = Z.exec(a))) if (f = l[1]) {
                    if (9 === w) {
                        if (!(j = b.getElementById(f))) return d;
                        if (j.id === f) return d.push(j), d;
                    } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), 
                    d;
                } else {
                    if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;
                    if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), 
                    d;
                }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== w) s = b, r = a; else if ("object" !== b.nodeName.toLowerCase()) {
                        for ((k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u), 
                        h = (o = g(a)).length; h--; ) o[h] = "#" + k + " " + sa(o[h]);
                        r = o.join(","), s = $.test(a) && qa(b.parentNode) || b;
                    }
                    if (r) try {
                        return G.apply(d, s.querySelectorAll(r)), d;
                    } catch (x) {} finally {
                        k === u && b.removeAttribute("id");
                    }
                }
            }
            return i(a.replace(P, "$1"), b, d, e);
        }
        function ha() {
            var a = [];
            return function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
            };
        }
        function ia(a) {
            return a[u] = !0, a;
        }
        function ja(a) {
            var b = n.createElement("fieldset");
            try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }
        function ka(a, b) {
            for (var c = a.split("|"), e = c.length; e--; ) d.attrHandle[c[e]] = b;
        }
        function la(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
            if (d) return d;
            if (c) for (;c = c.nextSibling; ) if (c === b) return -1;
            return a ? 1 : -1;
        }
        function ma(a) {
            return function(b) {
                return "input" === b.nodeName.toLowerCase() && b.type === a;
            };
        }
        function na(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a;
            };
        }
        function oa(a) {
            return function(b) {
                return "label" in b && b.disabled === a || "form" in b && b.disabled === a || "form" in b && !1 === b.disabled && (b.isDisabled === a || b.isDisabled !== !a && ("label" in b || !ea(b)) !== a);
            };
        }
        function pa(a) {
            return ia(function(b) {
                return b = +b, ia(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--; ) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                });
            });
        }
        function qa(a) {
            return a && void 0 !== a.getElementsByTagName && a;
        }
        for (b in c = ga.support = {}, f = ga.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return !!b && "HTML" !== b.nodeName;
        }, m = ga.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement && (o = (n = g).documentElement, 
            p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), 
            c.attributes = ja(function(a) {
                return a.className = "i", !a.getAttribute("className");
            }), c.getElementsByTagName = ja(function(a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
            }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function(a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
            }), c.getById ? (d.find.ID = function(a, b) {
                if (void 0 !== b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [ c ] : [];
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(_, aa);
                return function(a) {
                    return a.getAttribute("id") === b;
                };
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(_, aa);
                return function(a) {
                    var c = void 0 !== a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b;
                };
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return void 0 !== b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (;c = f[e++]; ) 1 === c.nodeType && d.push(c);
                    return d;
                }
                return f;
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return void 0 !== b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0;
            }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
                a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), 
                a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), 
                a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), 
                a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
            }), ja(function(a) {
                a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 
                2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), 
                o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), 
                a.querySelectorAll("*,:x"), q.push(",.*:");
            })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
                c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N);
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), 
            b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function(a, b) {
                if (b) for (;b = b.parentNode; ) if (b === a) return !0;
                return !1;
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d || (1 & (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1) || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1);
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, g = [ a ], h = [ b ];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;
                if (e === f) return la(a, b);
                for (c = a; c = c.parentNode; ) g.unshift(c);
                for (c = b; c = c.parentNode; ) h.unshift(c);
                for (;g[d] === h[d]; ) d++;
                return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
            }), n;
        }, ga.matches = function(a, b) {
            return ga(a, null, null, b);
        }, ga.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
            } catch (e) {}
            return 0 < ga(b, n, null, [ a ]).length;
        }, ga.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b);
        }, ga.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()], f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
        }, ga.escape = function(a) {
            return (a + "").replace(ba, ca);
        }, ga.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        }, ga.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                for (;b = a[f++]; ) b === a[f] && (e = d.push(f));
                for (;e--; ) a.splice(d[e], 1);
            }
            return k = null, a;
        }, e = ga.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
                } else if (3 === f || 4 === f) return a.nodeValue;
            } else for (;b = a[d++]; ) c += e(b);
            return c;
        }, (d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), 
                    "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), 
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), 
                    a;
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), 
                    a[2] = c.slice(0, b)), a.slice(0, 3));
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(_, aa).toLowerCase();
                    return "*" === a ? function() {
                        return !0;
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || void 0 !== a.getAttribute && a.getAttribute("class") || "");
                    });
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && -1 < e.indexOf(c) : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? -1 < (" " + e.replace(O, " ") + " ").indexOf(c) : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"));
                    };
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode;
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1;
                        if (q) {
                            if (f) {
                                for (;p; ) {
                                    for (m = b; m = m[p]; ) if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling";
                                }
                                return !0;
                            }
                            if (o = [ g ? q.firstChild : q.lastChild ], g && s) {
                                for (t = (n = (j = (k = (l = (m = q)[u] || (m[u] = {}))[m.uniqueID] || (l[m.uniqueID] = {}))[a] || [])[0] === w && j[1]) && j[2], 
                                m = n && q.childNodes[n]; m = ++n && m && m[p] || (t = n = 0) || o.pop(); ) if (1 === m.nodeType && ++t && m === b) {
                                    k[a] = [ w, n, t ];
                                    break;
                                }
                            } else if (s && (t = n = (j = (k = (l = (m = b)[u] || (m[u] = {}))[m.uniqueID] || (l[m.uniqueID] = {}))[a] || [])[0] === w && j[1]), 
                            !1 === t) for (;(m = ++n && m && m[p] || (t = n = 0) || o.pop()) && ((h ? m.nodeName.toLowerCase() !== r : 1 !== m.nodeType) || !++t || (s && ((k = (l = m[u] || (m[u] = {}))[m.uniqueID] || (l[m.uniqueID] = {}))[a] = [ w, t ]), 
                            m !== b)); ) ;
                            return (t -= e) === d || t % d == 0 && 0 <= t / d;
                        }
                    };
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : 1 < e.length ? (c = [ a, a, "", b ], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
                        for (var d, f = e(a, b), g = f.length; g--; ) a[d = I(a, f[g])] = !(c[d] = f[g]);
                    }) : function(a) {
                        return e(a, 0, c);
                    }) : e;
                }
            },
            pseudos: {
                not: ia(function(a) {
                    var b = [], c = [], d = h(a.replace(P, "$1"));
                    return d[u] ? ia(function(a, b, c, e) {
                        for (var f, g = d(a, null, e, []), h = a.length; h--; ) (f = g[h]) && (a[h] = !(b[h] = f));
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
                    };
                }),
                has: ia(function(a) {
                    return function(b) {
                        return 0 < ga(a, b).length;
                    };
                }),
                contains: ia(function(a) {
                    return a = a.replace(_, aa), function(b) {
                        return -1 < (b.textContent || b.innerText || e(b)).indexOf(a);
                    };
                }),
                lang: ia(function(a) {
                    return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(), 
                    function(b) {
                        var c;
                        do {
                            if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return (c = c.toLowerCase()) === a || 0 === c.indexOf(a + "-");
                        } while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1;
                    };
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id;
                },
                root: function(a) {
                    return a === o;
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                },
                enabled: oa(!1),
                disabled: oa(!0),
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected;
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected;
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(a) {
                    return !d.pseudos.empty(a);
                },
                header: function(a) {
                    return X.test(a.nodeName);
                },
                input: function(a) {
                    return W.test(a.nodeName);
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b;
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                },
                first: pa(function() {
                    return [ 0 ];
                }),
                last: pa(function(a, b) {
                    return [ b - 1 ];
                }),
                eq: pa(function(a, b, c) {
                    return [ c < 0 ? c + b : c ];
                }),
                even: pa(function(a, b) {
                    for (var c = 0; c < b; c += 2) a.push(c);
                    return a;
                }),
                odd: pa(function(a, b) {
                    for (var c = 1; c < b; c += 2) a.push(c);
                    return a;
                }),
                lt: pa(function(a, b, c) {
                    for (var d = c < 0 ? c + b : c; 0 <= --d; ) a.push(d);
                    return a;
                }),
                gt: pa(function(a, b, c) {
                    for (var d = c < 0 ? c + b : c; ++d < b; ) a.push(d);
                    return a;
                })
            }
        }).pseudos.nth = d.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) d.pseudos[b] = ma(b);
        for (b in {
            submit: !0,
            reset: !0
        }) d.pseudos[b] = na(b);
        function ra() {}
        function sa(a) {
            for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
            return d;
        }
        function ta(a, b, c) {
            var d = b.dir, e = b.next, f = e || d, g = c && "parentNode" === f, h = x++;
            return b.first ? function(b, c, e) {
                for (;b = b[d]; ) if (1 === b.nodeType || g) return a(b, c, e);
            } : function(b, c, i) {
                var j, k, l, m = [ w, h ];
                if (i) {
                    for (;b = b[d]; ) if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
                } else for (;b = b[d]; ) if (1 === b.nodeType || g) if (k = (l = b[u] || (b[u] = {}))[b.uniqueID] || (l[b.uniqueID] = {}), 
                e && e === b.nodeName.toLowerCase()) b = b[d] || b; else {
                    if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];
                    if ((k[f] = m)[2] = a(b, c, i)) return !0;
                }
            };
        }
        function ua(a) {
            return 1 < a.length ? function(b, c, d) {
                for (var e = a.length; e--; ) if (!a[e](b, c, d)) return !1;
                return !0;
            } : a[0];
        }
        function wa(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++) (f = a[h]) && (c && !c(f, d, e) || (g.push(f), 
            j && b.push(h)));
            return g;
        }
        function xa(a, b, c, d, e, f) {
            return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || function(a, b, c) {
                    for (var d = 0, e = b.length; d < e; d++) ga(a, b[d], c);
                    return c;
                }(b || "*", h.nodeType ? [ h ] : h, []), q = !a || !f && b ? p : wa(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) for (j = wa(r, n), d(j, [], h, i), k = j.length; k--; ) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                if (f) {
                    if (e || a) {
                        if (e) {
                            for (j = [], k = r.length; k--; ) (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i);
                        }
                        for (k = r.length; k--; ) (l = r[k]) && -1 < (j = e ? I(f, l) : m[k]) && (f[j] = !(g[j] = l));
                    }
                } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r);
            });
        }
        function ya(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function(a) {
                return a === b;
            }, h, !0), l = ta(function(a) {
                return -1 < I(b, a);
            }, h, !0), m = [ function(a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e;
            } ]; i < f; i++) if (c = d.relative[a[i].type]) m = [ ta(ua(m), c) ]; else {
                if ((c = d.filter[a[i].type].apply(null, a[i].matches))[u]) {
                    for (e = ++i; e < f && !d.relative[a[e].type]; e++) ;
                    return xa(1 < i && ua(m), 1 < i && sa(a.slice(0, i - 1).concat({
                        value: " " === a[i - 2].type ? "*" : ""
                    })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a));
                }
                m.push(c);
            }
            return ua(m);
        }
        function za(a, b) {
            var c = 0 < b.length, e = 0 < a.length, f = function(f, g, h, i, k) {
                var l, o, q, r = 0, s = "0", t = f && [], u = [], v = j, x = f || e && d.find.TAG("*", k), y = w += null == v ? 1 : Math.random() || .1, z = x.length;
                for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                    if (e && l) {
                        for (o = 0, g || l.ownerDocument === n || (m(l), h = !p); q = a[o++]; ) if (q(l, g || n, h)) {
                            i.push(l);
                            break;
                        }
                        k && (w = y);
                    }
                    c && ((l = !q && l) && r--, f && t.push(l));
                }
                if (r += s, c && s !== r) {
                    for (o = 0; q = b[o++]; ) q(t, u, g, h);
                    if (f) {
                        if (0 < r) for (;s--; ) t[s] || u[s] || (u[s] = E.call(i));
                        u = wa(u);
                    }
                    G.apply(i, u), k && !f && 0 < u.length && 1 < r + b.length && ga.uniqueSort(i);
                }
                return k && (w = y, j = v), t;
            };
            return c ? ia(f) : f;
        }
        return ra.prototype = d.filters = d.pseudos, d.setFilters = new ra(), g = ga.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            for (h = a, i = [], j = d.preFilter; h; ) {
                for (g in c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), 
                c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(P, " ")
                }), h = h.slice(c.length)), d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), 
                f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break;
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
        }, h = ga.compile = function(a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                for (b || (b = g(a)), c = b.length; c--; ) (f = ya(b[c]))[u] ? d.push(f) : e.push(f);
                (f = A(a, za(e, d))).selector = a;
            }
            return f;
        }, i = ga.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (2 < (j = o[0] = o[0].slice(0)).length && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (!(b = (d.find.ID(k.matches[0].replace(_, aa), b) || [])[0])) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length);
                }
                for (i = V.needsContext.test(a) ? 0 : j.length; i-- && (k = j[i], !d.relative[l = k.type]); ) if ((m = d.find[l]) && (f = m(k.matches[0].replace(_, aa), $.test(j[0].type) && qa(b.parentNode) || b))) {
                    if (j.splice(i, 1), !(a = f.length && sa(j))) return G.apply(e, f), e;
                    break;
                }
            }
            return (n || h(a, o))(f, b, !p, e, !b || $.test(a) && qa(b.parentNode) || b), e;
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, 
        m(), c.sortDetached = ja(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("fieldset"));
        }), ja(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
        }) || ka("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }), c.attributes && ja(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
        }) || ka("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
        }), ja(function(a) {
            return null == a.getAttribute("disabled");
        }) || ka(J, function(a, b, c) {
            var d;
            return c ? void 0 : !0 === a[b] ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }), ga;
    }(a);
    r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, 
    r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;
    var y = function(a, b, c) {
        for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType; ) if (1 === a.nodeType) {
            if (e && r(a).is(c)) break;
            d.push(a);
        }
        return d;
    }, z = function(a, b) {
        for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
        return c;
    }, A = r.expr.match.needsContext, B = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i, C = /^.[^:#\[\.,]*$/;
    function D(a, b, c) {
        if (r.isFunction(b)) return r.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c;
        });
        if (b.nodeType) return r.grep(a, function(a) {
            return a === b !== c;
        });
        if ("string" == typeof b) {
            if (C.test(b)) return r.filter(b, a, c);
            b = r.filter(b, a);
        }
        return r.grep(a, function(a) {
            return -1 < i.call(b, a) !== c && 1 === a.nodeType;
        });
    }
    r.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [ d ] : [] : r.find.matches(a, r.grep(b, function(a) {
            return 1 === a.nodeType;
        }));
    }, r.fn.extend({
        find: function(a) {
            var b, c, d = this.length, e = this;
            if ("string" != typeof a) return this.pushStack(r(a).filter(function() {
                for (b = 0; b < d; b++) if (r.contains(e[b], this)) return !0;
            }));
            for (c = this.pushStack([]), b = 0; b < d; b++) r.find(a, e[b], c);
            return 1 < d ? r.uniqueSort(c) : c;
        },
        filter: function(a) {
            return this.pushStack(D(this, a || [], !1));
        },
        not: function(a) {
            return this.pushStack(D(this, a || [], !0));
        },
        is: function(a) {
            return !!D(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length;
        }
    });
    var E, F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (r.fn.init = function(a, b, c) {
        var e, f;
        if (!a) return this;
        if (c = c || E, "string" == typeof a) {
            if (!(e = "<" === a[0] && ">" === a[a.length - 1] && 3 <= a.length ? [ null, a, null ] : F.exec(a)) || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (e[1]) {
                if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), 
                B.test(e[1]) && r.isPlainObject(b)) for (e in b) r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                return this;
            }
            return (f = d.getElementById(e[2])) && (this[0] = f, this.length = 1), this;
        }
        return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this);
    }).prototype = r.fn, E = r(d);
    var H = /^(?:parents|prev(?:Until|All))/, I = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function J(a, b) {
        for (;(a = a[b]) && 1 !== a.nodeType; ) ;
        return a;
    }
    r.fn.extend({
        has: function(a) {
            var b = r(a, this), c = b.length;
            return this.filter(function() {
                for (var a = 0; a < c; a++) if (r.contains(this, b[a])) return !0;
            });
        },
        closest: function(a, b) {
            var c, d = 0, e = this.length, f = [], g = "string" != typeof a && r(a);
            if (!A.test(a)) for (;d < e; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? -1 < g.index(c) : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
                f.push(c);
                break;
            }
            return this.pushStack(1 < f.length ? r.uniqueSort(f) : f);
        },
        index: function(a) {
            return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(a, b) {
            return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))));
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        }
    }), r.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null;
        },
        parents: function(a) {
            return y(a, "parentNode");
        },
        parentsUntil: function(a, b, c) {
            return y(a, "parentNode", c);
        },
        next: function(a) {
            return J(a, "nextSibling");
        },
        prev: function(a) {
            return J(a, "previousSibling");
        },
        nextAll: function(a) {
            return y(a, "nextSibling");
        },
        prevAll: function(a) {
            return y(a, "previousSibling");
        },
        nextUntil: function(a, b, c) {
            return y(a, "nextSibling", c);
        },
        prevUntil: function(a, b, c) {
            return y(a, "previousSibling", c);
        },
        siblings: function(a) {
            return z((a.parentNode || {}).firstChild, a);
        },
        children: function(a) {
            return z(a.firstChild);
        },
        contents: function(a) {
            return a.contentDocument || r.merge([], a.childNodes);
        }
    }, function(a, b) {
        r.fn[a] = function(c, d) {
            var e = r.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), 
            1 < this.length && (I[a] || r.uniqueSort(e), H.test(a) && e.reverse()), this.pushStack(e);
        };
    });
    var K = /\S+/g;
    function M(a) {
        return a;
    }
    function N(a) {
        throw a;
    }
    function O(a, b, c) {
        var d;
        try {
            a && r.isFunction(d = a.promise) ? d.call(a).done(b).fail(c) : a && r.isFunction(d = a.then) ? d.call(a, b, c) : b.call(void 0, a);
        } catch (a) {
            c.call(void 0, a);
        }
    }
    r.Callbacks = function(a) {
        a = "string" == typeof a ? function(a) {
            var b = {};
            return r.each(a.match(K) || [], function(a, c) {
                b[c] = !0;
            }), b;
        }(a) : r.extend({}, a);
        var b, c, d, e, f = [], g = [], h = -1, i = function() {
            for (e = a.once, d = b = !0; g.length; h = -1) for (c = g.shift(); ++h < f.length; ) !1 === f[h].apply(c[0], c[1]) && a.stopOnFalse && (h = f.length, 
            c = !1);
            a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
        }, j = {
            add: function() {
                return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                    r.each(b, function(b, c) {
                        r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c);
                    });
                }(arguments), c && !b && i()), this;
            },
            remove: function() {
                return r.each(arguments, function(a, b) {
                    for (var c; -1 < (c = r.inArray(b, f, c)); ) f.splice(c, 1), c <= h && h--;
                }), this;
            },
            has: function(a) {
                return a ? -1 < r.inArray(a, f) : 0 < f.length;
            },
            empty: function() {
                return f && (f = []), this;
            },
            disable: function() {
                return e = g = [], f = c = "", this;
            },
            disabled: function() {
                return !f;
            },
            lock: function() {
                return e = g = [], c || b || (f = c = ""), this;
            },
            locked: function() {
                return !!e;
            },
            fireWith: function(a, c) {
                return e || (c = [ a, (c = c || []).slice ? c.slice() : c ], g.push(c), b || i()), 
                this;
            },
            fire: function() {
                return j.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!d;
            }
        };
        return j;
    }, r.extend({
        Deferred: function(b) {
            var c = [ [ "notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2 ], [ "resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected" ] ], d = "pending", e = {
                state: function() {
                    return d;
                },
                always: function() {
                    return f.done(arguments).fail(arguments), this;
                },
                catch: function(a) {
                    return e.then(null, a);
                },
                pipe: function() {
                    var a = arguments;
                    return r.Deferred(function(b) {
                        r.each(c, function(c, d) {
                            var e = r.isFunction(a[d[4]]) && a[d[4]];
                            f[d[1]](function() {
                                var a = e && e.apply(this, arguments);
                                a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [ a ] : arguments);
                            });
                        }), a = null;
                    }).promise();
                },
                then: function(b, d, e) {
                    var f = 0;
                    function g(b, c, d, e) {
                        return function() {
                            var h = this, i = arguments, j = function() {
                                var a, j;
                                if (!(b < f)) {
                                    if ((a = d.apply(h, i)) === c.promise()) throw new TypeError("Thenable self-resolution");
                                    j = a && ("object" == typeof a || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, M, e), g(f, c, N, e)) : (f++, 
                                    j.call(a, g(f, c, M, e), g(f, c, N, e), g(f, c, M, c.notifyWith))) : (d !== M && (h = void 0, 
                                    i = [ a ]), (e || c.resolveWith)(h, i));
                                }
                            }, k = e ? j : function() {
                                try {
                                    j();
                                } catch (a) {
                                    r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), f <= b + 1 && (d !== N && (h = void 0, 
                                    i = [ a ]), c.rejectWith(h, i));
                                }
                            };
                            b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), 
                            a.setTimeout(k));
                        };
                    }
                    return r.Deferred(function(a) {
                        c[0][3].add(g(0, a, r.isFunction(e) ? e : M, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : M)), 
                        c[2][3].add(g(0, a, r.isFunction(d) ? d : N));
                    }).promise();
                },
                promise: function(a) {
                    return null != a ? r.extend(a, e) : e;
                }
            }, f = {};
            return r.each(c, function(a, b) {
                var g = b[2], h = b[5];
                e[b[1]] = g.add, h && g.add(function() {
                    d = h;
                }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function() {
                    return f[b[0] + "With"](this === f ? void 0 : this, arguments), this;
                }, f[b[0] + "With"] = g.fireWith;
            }), e.promise(f), b && b.call(f, f), f;
        },
        when: function(a) {
            var b = arguments.length, c = b, d = Array(c), e = f.call(arguments), g = r.Deferred(), h = function(a) {
                return function(c) {
                    d[a] = this, e[a] = 1 < arguments.length ? f.call(arguments) : c, --b || g.resolveWith(d, e);
                };
            };
            if (b <= 1 && (O(a, g.done(h(c)).resolve, g.reject), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();
            for (;c--; ) O(e[c], h(c), g.reject);
            return g.promise();
        }
    });
    var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    r.Deferred.exceptionHook = function(b, c) {
        a.console && a.console.warn && b && P.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c);
    };
    var Q = r.Deferred();
    function R() {
        d.removeEventListener("DOMContentLoaded", R), a.removeEventListener("load", R), 
        r.ready();
    }
    r.fn.ready = function(a) {
        return Q.then(a), this;
    }, r.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? r.readyWait++ : r.ready(!0);
        },
        ready: function(a) {
            (!0 === a ? --r.readyWait : r.isReady) || ((r.isReady = !0) !== a && 0 < --r.readyWait || Q.resolveWith(d, [ r ]));
        }
    }), r.ready.then = Q.then, "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", R), 
    a.addEventListener("load", R));
    var S = function(a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === r.type(c)) for (h in e = !0, c) S(a, b, h, c[h], !0, f, g); else if (void 0 !== d && (e = !0, 
        r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
            return j.call(r(a), c);
        })), b)) for (;h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    }, T = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    };
    function U() {
        this.expando = r.expando + U.uid++;
    }
    U.uid = 1, U.prototype = {
        cache: function(a) {
            var b = a[this.expando];
            return b || (b = {}, T(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b;
        },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[r.camelCase(b)] = c; else for (d in b) e[r.camelCase(d)] = b[d];
            return e;
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)];
        },
        access: function(a, b, c) {
            return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), 
            void 0 !== c ? c : b);
        },
        remove: function(a, b) {
            var c, d = a[this.expando];
            if (void 0 !== d) {
                if (void 0 !== b) {
                    r.isArray(b) ? b = b.map(r.camelCase) : b = (b = r.camelCase(b)) in d ? [ b ] : b.match(K) || [], 
                    c = b.length;
                    for (;c--; ) delete d[b[c]];
                }
                (void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
            }
        },
        hasData: function(a) {
            var b = a[this.expando];
            return void 0 !== b && !r.isEmptyObject(b);
        }
    };
    var V = new U(), W = new U(), X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Y = /[A-Z]/g;
    function Z(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Y, "-$&").toLowerCase(), 
        "string" == typeof (c = a.getAttribute(d))) {
            try {
                c = "true" === c || "false" !== c && ("null" === c ? null : +c + "" === c ? +c : X.test(c) ? JSON.parse(c) : c);
            } catch (e) {}
            W.set(a, b, c);
        } else c = void 0;
        return c;
    }
    r.extend({
        hasData: function(a) {
            return W.hasData(a) || V.hasData(a);
        },
        data: function(a, b, c) {
            return W.access(a, b, c);
        },
        removeData: function(a, b) {
            W.remove(a, b);
        },
        _data: function(a, b, c) {
            return V.access(a, b, c);
        },
        _removeData: function(a, b) {
            V.remove(a, b);
        }
    }), r.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = W.get(f), 1 === f.nodeType && !V.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--; ) g[c] && (0 === (d = g[c].name).indexOf("data-") && (d = r.camelCase(d.slice(5)), 
                    Z(f, d, e[d])));
                    V.set(f, "hasDataAttrs", !0);
                }
                return e;
            }
            return "object" == typeof a ? this.each(function() {
                W.set(this, a);
            }) : S(this, function(b) {
                var c;
                if (f && void 0 === b) {
                    if (void 0 !== (c = W.get(f, a))) return c;
                    if (void 0 !== (c = Z(f, a))) return c;
                } else this.each(function() {
                    W.set(this, a, b);
                });
            }, null, b, 1 < arguments.length, null, !0);
        },
        removeData: function(a) {
            return this.each(function() {
                W.remove(this, a);
            });
        }
    }), r.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = V.get(a, b), c && (!d || r.isArray(c) ? d = V.access(a, b, r.makeArray(c)) : d.push(c)), 
            d || []) : void 0;
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = r.queue(a, b), d = c.length, e = c.shift(), f = r._queueHooks(a, b);
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), 
            delete f.stop, e.call(a, function() {
                r.dequeue(a, b);
            }, f)), !d && f && f.empty.fire();
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return V.get(a, c) || V.access(a, c, {
                empty: r.Callbacks("once memory").add(function() {
                    V.remove(a, [ b + "queue", c ]);
                })
            });
        }
    }), r.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = r.queue(this, a, b);
                r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a);
            });
        },
        dequeue: function(a) {
            return this.each(function() {
                r.dequeue(this, a);
            });
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", []);
        },
        promise: function(a, b) {
            var c, d = 1, e = r.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [ f ]);
            };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--; ) (c = V.get(f[g], a + "queueHooks")) && c.empty && (d++, 
            c.empty.add(h));
            return h(), e.promise(b);
        }
    });
    var $ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, _ = new RegExp("^(?:([+-])=|)(" + $ + ")([a-z%]*)$", "i"), aa = [ "Top", "Right", "Bottom", "Left" ], ba = function(a, b) {
        return "none" === (a = b || a).style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display");
    }, ca = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        for (f in e = c.apply(a, d || []), b) a.style[f] = g[f];
        return e;
    };
    function da(a, b, c, d) {
        var e, f = 1, g = 20, h = d ? function() {
            return d.cur();
        } : function() {
            return r.css(a, b, "");
        }, i = h(), j = c && c[3] || (r.cssNumber[b] ? "" : "px"), k = (r.cssNumber[b] || "px" !== j && +i) && _.exec(r.css(a, b));
        if (k && k[3] !== j) for (j = j || k[3], c = c || [], k = +i || 1; k /= f = f || ".5", 
        r.style(a, b, k + j), f !== (f = h() / i) && 1 !== f && --g; ) ;
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, 
        d.start = k, d.end = e)), e;
    }
    var ea = {};
    function fa(a) {
        var b, c = a.ownerDocument, d = a.nodeName, e = ea[d];
        return e || (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), 
        b.parentNode.removeChild(b), "none" === e && (e = "block"), ea[d] = e);
    }
    function ga(a, b) {
        for (var c, d, e = [], f = 0, g = a.length; f < g; f++) (d = a[f]).style && (c = d.style.display, 
        b ? ("none" === c && (e[f] = V.get(d, "display") || null, e[f] || (d.style.display = "")), 
        "" === d.style.display && ba(d) && (e[f] = fa(d))) : "none" !== c && (e[f] = "none", 
        V.set(d, "display", c)));
        for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]);
        return a;
    }
    r.fn.extend({
        show: function() {
            return ga(this, !0);
        },
        hide: function() {
            return ga(this);
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                ba(this) ? r(this).show() : r(this).hide();
            });
        }
    });
    var ha = /^(?:checkbox|radio)$/i, ia = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, ja = /^$|\/(?:java|ecma)script/i, ka = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    function la(a, b) {
        var c = void 0 !== a.getElementsByTagName ? a.getElementsByTagName(b || "*") : void 0 !== a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && r.nodeName(a, b) ? r.merge([ a ], c) : c;
    }
    function ma(a, b) {
        for (var c = 0, d = a.length; c < d; c++) V.set(a[c], "globalEval", !b || V.get(b[c], "globalEval"));
    }
    ka.optgroup = ka.option, ka.tbody = ka.tfoot = ka.colgroup = ka.caption = ka.thead, 
    ka.th = ka.td;
    var na = /<|&#?\w+;/;
    function oa(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++) if ((f = a[n]) || 0 === f) if ("object" === r.type(f)) r.merge(m, f.nodeType ? [ f ] : f); else if (na.test(f)) {
            for (g = g || l.appendChild(b.createElement("div")), h = (ia.exec(f) || [ "", "" ])[1].toLowerCase(), 
            i = ka[h] || ka._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0]; k--; ) g = g.lastChild;
            r.merge(m, g.childNodes), (g = l.firstChild).textContent = "";
        } else m.push(b.createTextNode(f));
        for (l.textContent = "", n = 0; f = m[n++]; ) if (d && -1 < r.inArray(f, d)) e && e.push(f); else if (j = r.contains(f.ownerDocument, f), 
        g = la(l.appendChild(f), "script"), j && ma(g), c) for (k = 0; f = g[k++]; ) ja.test(f.type || "") && c.push(f);
        return l;
    }
    !function() {
        var b = d.createDocumentFragment().appendChild(d.createElement("div")), c = d.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), 
        b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
    }();
    var pa = d.documentElement, qa = /^key/, ra = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, sa = /^([^.]*)(?:\.(.+)|)/;
    function ta() {
        return !0;
    }
    function ua() {
        return !1;
    }
    function va() {
        try {
            return d.activeElement;
        } catch (a) {}
    }
    function wa(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            for (h in "string" != typeof c && (d = d || c, c = void 0), b) wa(a, h, c, d, b[h], f);
            return a;
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, 
        d = void 0) : (e = d, d = c, c = void 0)), !1 === e) e = ua; else if (!e) return a;
        return 1 === f && (g = e, (e = function(a) {
            return r().off(a), g.apply(this, arguments);
        }).guid = g.guid || (g.guid = r.guid++)), a.each(function() {
            r.event.add(this, b, e, d, c);
        });
    }
    r.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = V.get(a);
            if (q) for (c.handler && (c = (f = c).handler, e = f.selector), e && r.find.matchesSelector(pa, e), 
            c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                return void 0 !== r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0;
            }), j = (b = (b || "").match(K) || [ "" ]).length; j--; ) n = p = (h = sa.exec(b[j]) || [])[1], 
            o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, 
            l = r.event.special[n] || {}, k = r.extend({
                type: n,
                origType: p,
                data: d,
                handler: c,
                guid: c.guid,
                selector: e,
                needsContext: e && r.expr.match.needsContext.test(e),
                namespace: o.join(".")
            }, f), (m = i[n]) || ((m = i[n] = []).delegateCount = 0, l.setup && !1 !== l.setup.call(a, d, o, g) || a.addEventListener && a.addEventListener(n, g)), 
            l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), 
            r.event.global[n] = !0);
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = V.hasData(a) && V.get(a);
            if (q && (i = q.events)) {
                for (j = (b = (b || "").match(K) || [ "" ]).length; j--; ) if (n = p = (h = sa.exec(b[j]) || [])[1], 
                o = (h[2] || "").split(".").sort(), n) {
                    for (l = r.event.special[n] || {}, m = i[n = (d ? l.delegateType : l.bindType) || n] || [], 
                    h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--; ) k = m[f], 
                    !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), 
                    k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && !1 !== l.teardown.call(a, o, q.handle) || r.removeEvent(a, n, q.handle), 
                    delete i[n]);
                } else for (n in i) r.event.remove(a, n + b[j], c, d, !0);
                r.isEmptyObject(i) && V.remove(a, "handle events");
            }
        },
        dispatch: function(a) {
            var c, d, e, f, g, h, b = r.event.fix(a), i = new Array(arguments.length), j = (V.get(this, "events") || {})[b.type] || [], k = r.event.special[b.type] || {};
            for (i[0] = b, c = 1; c < arguments.length; c++) i[c] = arguments[c];
            if (b.delegateTarget = this, !k.preDispatch || !1 !== k.preDispatch.call(this, b)) {
                for (h = r.event.handlers.call(this, b, j), c = 0; (f = h[c++]) && !b.isPropagationStopped(); ) for (b.currentTarget = f.elem, 
                d = 0; (g = f.handlers[d++]) && !b.isImmediatePropagationStopped(); ) b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, 
                b.data = g.data, void 0 !== (e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i)) && !1 === (b.result = e) && (b.preventDefault(), 
                b.stopPropagation()));
                return k.postDispatch && k.postDispatch.call(this, b), b.result;
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (;i !== this; i = i.parentNode || this) if (1 === i.nodeType && (!0 !== i.disabled || "click" !== a.type)) {
                for (d = [], c = 0; c < h; c++) void 0 === d[e = (f = b[c]).selector + " "] && (d[e] = f.needsContext ? -1 < r(e, this).index(i) : r.find(e, this, null, [ i ]).length), 
                d[e] && d.push(f);
                d.length && g.push({
                    elem: i,
                    handlers: d
                });
            }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g;
        },
        addProp: function(a, b) {
            Object.defineProperty(r.Event.prototype, a, {
                enumerable: !0,
                configurable: !0,
                get: r.isFunction(b) ? function() {
                    return this.originalEvent ? b(this.originalEvent) : void 0;
                } : function() {
                    return this.originalEvent ? this.originalEvent[a] : void 0;
                },
                set: function(b) {
                    Object.defineProperty(this, a, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: b
                    });
                }
            });
        },
        fix: function(a) {
            return a[r.expando] ? a : new r.Event(a);
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== va() && this.focus ? (this.focus(), !1) : void 0;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === va() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && r.nodeName(this, "input") ? (this.click(), 
                    !1) : void 0;
                },
                _default: function(a) {
                    return r.nodeName(a.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                }
            }
        }
    }, r.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c);
    }, r.Event = function(a, b) {
        return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, 
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? ta : ua, 
        this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, 
        this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, 
        b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void (this[r.expando] = !0)) : new r.Event(a, b);
    }, r.Event.prototype = {
        constructor: r.Event,
        isDefaultPrevented: ua,
        isPropagationStopped: ua,
        isImmediatePropagationStopped: ua,
        isSimulated: !1,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ta, a && !this.isSimulated && a.preventDefault();
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ta, a && !this.isSimulated && a.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ta, a && !this.isSimulated && a.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, r.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(a) {
            var b = a.button;
            return null == a.which && qa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ra.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which;
        }
    }, r.event.addProp), r.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        r.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, e = a.relatedTarget, f = a.handleObj;
                return e && (e === this || r.contains(this, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), 
                a.type = b), c;
            }
        };
    }), r.fn.extend({
        on: function(a, b, c, d) {
            return wa(this, a, b, c, d);
        },
        one: function(a, b, c, d) {
            return wa(this, a, b, c, d, 1);
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), 
            this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this;
            }
            return !1 !== b && "function" != typeof b || (c = b, b = void 0), !1 === c && (c = ua), 
            this.each(function() {
                r.event.remove(this, a, c, b);
            });
        }
    });
    var xa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, ya = /<script|<style|<link/i, za = /checked\s*(?:[^=]|=\s*.checked.)/i, Aa = /^true\/(.*)/, Ba = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Ca(a, b) {
        return r.nodeName(a, "table") && r.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") && a.getElementsByTagName("tbody")[0] || a;
    }
    function Da(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
    }
    function Ea(a) {
        var b = Aa.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }
    function Fa(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (V.hasData(a) && (f = V.access(a), g = V.set(b, f), j = f.events)) for (e in delete g.handle, 
            g.events = {}, j) for (c = 0, d = j[e].length; c < d; c++) r.event.add(b, e, j[e][c]);
            W.hasData(a) && (h = W.access(a), i = r.extend({}, h), W.set(b, i));
        }
    }
    function Ga(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && ha.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
    }
    function Ha(a, b, c, d) {
        b = g.apply([], b);
        var e, f, h, i, j, k, l = 0, m = a.length, n = m - 1, q = b[0], s = r.isFunction(q);
        if (s || 1 < m && "string" == typeof q && !o.checkClone && za.test(q)) return a.each(function(e) {
            var f = a.eq(e);
            s && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d);
        });
        if (m && (f = (e = oa(b, a[0].ownerDocument, !1, a, d)).firstChild, 1 === e.childNodes.length && (e = f), 
        f || d)) {
            for (i = (h = r.map(la(e, "script"), Da)).length; l < m; l++) j = e, l !== n && (j = r.clone(j, !0, !0), 
            i && r.merge(h, la(j, "script"))), c.call(a[l], j, l);
            if (i) for (k = h[h.length - 1].ownerDocument, r.map(h, Ea), l = 0; l < i; l++) j = h[l], 
            ja.test(j.type || "") && !V.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Ba, ""), k));
        }
        return a;
    }
    function Ia(a, b, c) {
        for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || r.cleanData(la(d)), 
        d.parentNode && (c && r.contains(d.ownerDocument, d) && ma(la(d, "script")), d.parentNode.removeChild(d));
        return a;
    }
    r.extend({
        htmlPrefilter: function(a) {
            return a.replace(xa, "<$1></$2>");
        },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = r.contains(a.ownerDocument, a);
            if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a))) for (g = la(h), 
            d = 0, e = (f = la(a)).length; d < e; d++) Ga(f[d], g[d]);
            if (b) if (c) for (f = f || la(a), g = g || la(h), d = 0, e = f.length; d < e; d++) Fa(f[d], g[d]); else Fa(a, h);
            return 0 < (g = la(h, "script")).length && ma(g, !i && la(a, "script")), h;
        },
        cleanData: function(a) {
            for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++) if (T(c)) {
                if (b = c[V.expando]) {
                    if (b.events) for (d in b.events) e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
                    c[V.expando] = void 0;
                }
                c[W.expando] && (c[W.expando] = void 0);
            }
        }
    }), r.fn.extend({
        detach: function(a) {
            return Ia(this, a, !0);
        },
        remove: function(a) {
            return Ia(this, a);
        },
        text: function(a) {
            return S(this, function(a) {
                return void 0 === a ? r.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);
                });
            }, null, a, arguments.length);
        },
        append: function() {
            return Ha(this, arguments, function(a) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ca(this, a).appendChild(a);
            });
        },
        prepend: function() {
            return Ha(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.insertBefore(a, b.firstChild);
                }
            });
        },
        before: function() {
            return Ha(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        },
        after: function() {
            return Ha(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (r.cleanData(la(a, !1)), 
            a.textContent = "");
            return this;
        },
        clone: function(a, b) {
            return a = null != a && a, b = null == b ? a : b, this.map(function() {
                return r.clone(this, a, b);
            });
        },
        html: function(a) {
            return S(this, function(a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !ya.test(a) && !ka[(ia.exec(a) || [ "", "" ])[1].toLowerCase()]) {
                    a = r.htmlPrefilter(a);
                    try {
                        for (;c < d; c++) 1 === (b = this[c] || {}).nodeType && (r.cleanData(la(b, !1)), 
                        b.innerHTML = a);
                        b = 0;
                    } catch (e) {}
                }
                b && this.empty().append(a);
            }, null, a, arguments.length);
        },
        replaceWith: function() {
            var a = [];
            return Ha(this, arguments, function(b) {
                var c = this.parentNode;
                r.inArray(this, a) < 0 && (r.cleanData(la(this)), c && c.replaceChild(b, this));
            }, a);
        }
    }), r.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        r.fn[a] = function(a) {
            for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) c = g === f ? this : this.clone(!0), 
            r(e[g])[b](c), h.apply(d, c.get());
            return this.pushStack(d);
        };
    });
    var Ja = /^margin/, Ka = new RegExp("^(" + $ + ")(?!px)[a-z%]+$", "i"), La = function(b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a), c.getComputedStyle(b);
    };
    function Ma(a, b, c) {
        var d, e, f, g, h = a.style;
        return (c = c || La(a)) && ("" !== (g = c.getPropertyValue(b) || c[b]) || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), 
        !o.pixelMarginRight() && Ka.test(g) && Ja.test(b) && (d = h.width, e = h.minWidth, 
        f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, 
        h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
    }
    function Na(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments);
            }
        };
    }
    !function() {
        function b() {
            if (i) {
                i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", 
                i.innerHTML = "", pa.appendChild(h);
                var b = a.getComputedStyle(i);
                c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", 
                f = "4px" === b.marginRight, pa.removeChild(h), i = null;
            }
        }
        var c, e, f, g, h = d.createElement("div"), i = d.createElement("div");
        i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", 
        o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", 
        h.appendChild(i), r.extend(o, {
            pixelPosition: function() {
                return b(), c;
            },
            boxSizingReliable: function() {
                return b(), e;
            },
            pixelMarginRight: function() {
                return b(), f;
            },
            reliableMarginLeft: function() {
                return b(), g;
            }
        }));
    }();
    var Oa = /^(none|table(?!-c[ea]).+)/, Pa = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Qa = {
        letterSpacing: "0",
        fontWeight: "400"
    }, Ra = [ "Webkit", "Moz", "ms" ], Sa = d.createElement("div").style;
    function Ta(a) {
        if (a in Sa) return a;
        for (var b = a[0].toUpperCase() + a.slice(1), c = Ra.length; c--; ) if ((a = Ra[c] + b) in Sa) return a;
    }
    function Ua(a, b, c) {
        var d = _.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
    }
    function Va(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; f < 4; f += 2) "margin" === c && (g += r.css(a, c + aa[f], !0, e)), 
        d ? ("content" === c && (g -= r.css(a, "padding" + aa[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + aa[f] + "Width", !0, e))) : (g += r.css(a, "padding" + aa[f], !0, e), 
        "padding" !== c && (g += r.css(a, "border" + aa[f] + "Width", !0, e)));
        return g;
    }
    function Wa(a, b, c) {
        var d, e = !0, f = La(a), g = "border-box" === r.css(a, "boxSizing", !1, f);
        if (a.getClientRects().length && (d = a.getBoundingClientRect()[b]), d <= 0 || null == d) {
            if (((d = Ma(a, b, f)) < 0 || null == d) && (d = a.style[b]), Ka.test(d)) return d;
            e = g && (o.boxSizingReliable() || d === a.style[b]), d = parseFloat(d) || 0;
        }
        return d + Va(a, b, c || (g ? "border" : "content"), e, f) + "px";
    }
    function Xa(a, b, c, d, e) {
        return new Xa.prototype.init(a, b, c, d, e);
    }
    r.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Ma(a, "opacity");
                        return "" === c ? "1" : c;
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = r.camelCase(b), i = a.style;
                return b = r.cssProps[h] || (r.cssProps[h] = Ta(h) || h), g = r.cssHooks[b] || r.cssHooks[h], 
                void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : ("string" === (f = typeof c) && (e = _.exec(c)) && e[1] && (c = da(a, b, e), 
                f = "number"), void (null != c && c == c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), 
                o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), 
                g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c))));
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = r.camelCase(b);
            return b = r.cssProps[h] || (r.cssProps[h] = Ta(h) || h), (g = r.cssHooks[b] || r.cssHooks[h]) && "get" in g && (e = g.get(a, !0, c)), 
            void 0 === e && (e = Ma(a, b, d)), "normal" === e && b in Qa && (e = Qa[b]), "" === c || c ? (f = parseFloat(e), 
            !0 === c || isFinite(f) ? f || 0 : e) : e;
        }
    }), r.each([ "height", "width" ], function(a, b) {
        r.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? !Oa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? Wa(a, b, d) : ca(a, Pa, function() {
                    return Wa(a, b, d);
                }) : void 0;
            },
            set: function(a, c, d) {
                var e, f = d && La(a), g = d && Va(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);
                return g && (e = _.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), 
                Ua(0, c, g);
            }
        };
    }), r.cssHooks.marginLeft = Na(o.reliableMarginLeft, function(a, b) {
        return b ? (parseFloat(Ma(a, "marginLeft")) || a.getBoundingClientRect().left - ca(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left;
        })) + "px" : void 0;
    }), r.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        r.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [ c ]; d < 4; d++) e[a + aa[d] + b] = f[d] || f[d - 2] || f[0];
                return e;
            }
        }, Ja.test(a) || (r.cssHooks[a + b].set = Ua);
    }), r.fn.extend({
        css: function(a, b) {
            return S(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (r.isArray(b)) {
                    for (d = La(a), e = b.length; g < e; g++) f[b[g]] = r.css(a, b[g], !1, d);
                    return f;
                }
                return void 0 !== c ? r.style(a, b, c) : r.css(a, b);
            }, a, b, 1 < arguments.length);
        }
    }), ((r.Tween = Xa).prototype = {
        constructor: Xa,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, 
            this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px");
        },
        cur: function() {
            var a = Xa.propHooks[this.prop];
            return a && a.get ? a.get(this) : Xa.propHooks._default.get(this);
        },
        run: function(a) {
            var b, c = Xa.propHooks[this.prop];
            return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, 
            this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            c && c.set ? c.set(this) : Xa.propHooks._default.set(this), this;
        }
    }).init.prototype = Xa.prototype, (Xa.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, "")) && "auto" !== b ? b : 0;
            },
            set: function(a) {
                r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit);
            }
        }
    }).scrollTop = Xa.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        }
    }, r.easing = {
        linear: function(a) {
            return a;
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        },
        _default: "swing"
    }, r.fx = Xa.prototype.init, r.fx.step = {};
    var Ya, Za, $a = /^(?:toggle|show|hide)$/, _a = /queueHooks$/;
    function ab() {
        Za && (a.requestAnimationFrame(ab), r.fx.tick());
    }
    function bb() {
        return a.setTimeout(function() {
            Ya = void 0;
        }), Ya = r.now();
    }
    function cb(a, b) {
        var c, d = 0, e = {
            height: a
        };
        for (b = b ? 1 : 0; d < 4; d += 2 - b) e["margin" + (c = aa[d])] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e;
    }
    function db(a, b, c) {
        for (var d, e = (gb.tweeners[b] || []).concat(gb.tweeners["*"]), f = 0, g = e.length; f < g; f++) if (d = e[f].call(c, b, a)) return d;
    }
    function gb(a, b, c) {
        var d, e, f = 0, g = gb.prefilters.length, h = r.Deferred().always(function() {
            delete i.elem;
        }), i = function() {
            if (e) return !1;
            for (var b = Ya || bb(), c = Math.max(0, j.startTime + j.duration - b), f = 1 - (c / j.duration || 0), g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [ j, f, c ]), f < 1 && i ? c : (h.resolveWith(a, [ j ]), 
            !1);
        }, j = h.promise({
            elem: a,
            props: r.extend({}, b),
            opts: r.extend(!0, {
                specialEasing: {},
                easing: r.easing._default
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Ya || bb(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d;
            },
            stop: function(b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; c < d; c++) j.tweens[c].run(1);
                return b ? (h.notifyWith(a, [ j, 1, 0 ]), h.resolveWith(a, [ j, b ])) : h.rejectWith(a, [ j, b ]), 
                this;
            }
        }), k = j.props;
        for (function(a, b) {
            var c, d, e, f, g;
            for (c in a) if (e = b[d = r.camelCase(c)], f = a[c], r.isArray(f) && (e = f[1], 
            f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), (g = r.cssHooks[d]) && "expand" in g) for (c in f = g.expand(f), 
            delete a[d], f) c in a || (a[c] = f[c], b[c] = e); else b[d] = e;
        }(k, j.opts.specialEasing); f < g; f++) if (d = gb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), 
        d;
        return r.map(k, db, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), r.fx.timer(r.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }
    r.Animation = r.extend(gb, {
        tweeners: {
            "*": [ function(a, b) {
                var c = this.createTween(a, b);
                return da(c.elem, a, _.exec(b), c), c;
            } ]
        },
        tweener: function(a, b) {
            r.isFunction(a) ? (b = a, a = [ "*" ]) : a = a.match(K);
            for (var c, d = 0, e = a.length; d < e; d++) c = a[d], gb.tweeners[c] = gb.tweeners[c] || [], 
            gb.tweeners[c].unshift(b);
        },
        prefilters: [ function(a, b, c) {
            var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b, m = this, n = {}, o = a.style, p = a.nodeType && ba(a), q = V.get(a, "fxshow");
            for (d in c.queue || (null == (g = r._queueHooks(a, "fx")).unqueued && (g.unqueued = 0, 
            h = g.empty.fire, g.empty.fire = function() {
                g.unqueued || h();
            }), g.unqueued++, m.always(function() {
                m.always(function() {
                    g.unqueued--, r.queue(a, "fx").length || g.empty.fire();
                });
            })), b) if (e = b[d], $a.test(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0;
                }
                n[d] = q && q[d] || r.style(a, d);
            }
            if ((i = !r.isEmptyObject(b)) || !r.isEmptyObject(n)) for (d in l && 1 === a.nodeType && (c.overflow = [ o.overflow, o.overflowX, o.overflowY ], 
            null == (j = q && q.display) && (j = V.get(a, "display")), "none" === (k = r.css(a, "display")) && (j ? k = j : (ga([ a ], !0), 
            j = a.style.display || j, k = r.css(a, "display"), ga([ a ]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function() {
                o.display = j;
            }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), 
            c.overflow && (o.overflow = "hidden", m.always(function() {
                o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
            })), i = !1, n) i || (q ? "hidden" in q && (p = q.hidden) : q = V.access(a, "fxshow", {
                display: j
            }), f && (q.hidden = !p), p && ga([ a ], !0), m.done(function() {
                for (d in p || ga([ a ]), V.remove(a, "fxshow"), n) r.style(a, d, n[d]);
            })), i = db(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, 
            i.start = 0));
        } ],
        prefilter: function(a, b) {
            b ? gb.prefilters.unshift(a) : gb.prefilters.push(a);
        }
    }), r.speed = function(a, b, c) {
        var e = a && "object" == typeof a ? r.extend({}, a) : {
            complete: c || !c && b || r.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !r.isFunction(b) && b
        };
        return r.fx.off || d.hidden ? e.duration = 0 : e.duration = "number" == typeof e.duration ? e.duration : e.duration in r.fx.speeds ? r.fx.speeds[e.duration] : r.fx.speeds._default, 
        null != e.queue && !0 !== e.queue || (e.queue = "fx"), e.old = e.complete, e.complete = function() {
            r.isFunction(e.old) && e.old.call(this), e.queue && r.dequeue(this, e.queue);
        }, e;
    }, r.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(ba).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d);
        },
        animate: function(a, b, c, d) {
            var e = r.isEmptyObject(a), f = r.speed(b, c, d), g = function() {
                var b = gb(this, r.extend({}, a), f);
                (e || V.get(this, "finish")) && b.stop(!0);
            };
            return g.finish = g, e || !1 === f.queue ? this.each(g) : this.queue(f.queue, g);
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c);
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && !1 !== a && this.queue(a || "fx", []), 
            this.each(function() {
                var b = !0, e = null != a && a + "queueHooks", f = r.timers, g = V.get(this);
                if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && _a.test(e) && d(g[e]);
                for (e = f.length; e--; ) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), 
                b = !1, f.splice(e, 1));
                !b && c || r.dequeue(this, a);
            });
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var b, c = V.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = r.timers, g = d ? d.length : 0;
                for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), 
                b = f.length; b--; ) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), 
                f.splice(b, 1));
                for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish;
            });
        }
    }), r.each([ "toggle", "show", "hide" ], function(a, b) {
        var c = r.fn[b];
        r.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(cb(b, !0), a, d, e);
        };
    }), r.each({
        slideDown: cb("show"),
        slideUp: cb("hide"),
        slideToggle: cb("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        r.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), r.timers = [], r.fx.tick = function() {
        var a, b = 0, c = r.timers;
        for (Ya = r.now(); b < c.length; b++) (a = c[b])() || c[b] !== a || c.splice(b--, 1);
        c.length || r.fx.stop(), Ya = void 0;
    }, r.fx.timer = function(a) {
        r.timers.push(a), a() ? r.fx.start() : r.timers.pop();
    }, r.fx.interval = 13, r.fx.start = function() {
        Za || (Za = a.requestAnimationFrame ? a.requestAnimationFrame(ab) : a.setInterval(r.fx.tick, r.fx.interval));
    }, r.fx.stop = function() {
        a.cancelAnimationFrame ? a.cancelAnimationFrame(Za) : a.clearInterval(Za), Za = null;
    }, r.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, r.fn.delay = function(b, c) {
        return b = r.fx && r.fx.speeds[b] || b, c = c || "fx", this.queue(c, function(c, d) {
            var e = a.setTimeout(c, b);
            d.stop = function() {
                a.clearTimeout(e);
            };
        });
    }, function() {
        var a = d.createElement("input"), c = d.createElement("select").appendChild(d.createElement("option"));
        a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, (a = d.createElement("input")).value = "t", 
        a.type = "radio", o.radioValue = "t" === a.value;
    }();
    var hb, ib = r.expr.attrHandle;
    r.fn.extend({
        attr: function(a, b) {
            return S(this, r.attr, a, b, 1 < arguments.length);
        },
        removeAttr: function(a) {
            return this.each(function() {
                r.removeAttr(this, a);
            });
        }
    }), r.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return void 0 === a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? hb : void 0)), 
            void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), 
            c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : null == (d = r.find.attr(a, b)) ? void 0 : d);
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!o.radioValue && "radio" === b && r.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b;
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d = 0, e = b && b.match(K);
            if (e && 1 === a.nodeType) for (;c = e[d++]; ) a.removeAttribute(c);
        }
    }), hb = {
        set: function(a, b, c) {
            return !1 === b ? r.removeAttr(a, c) : a.setAttribute(c, c), c;
        }
    }, r.each(r.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = ib[b] || r.find.attr;
        ib[b] = function(a, b, d) {
            var e, f, g = b.toLowerCase();
            return d || (f = ib[g], ib[g] = e, e = null != c(a, b, d) ? g : null, ib[g] = f), 
            e;
        };
    });
    var jb = /^(?:input|select|textarea|button)$/i, kb = /^(?:a|area)$/i;
    r.fn.extend({
        prop: function(a, b) {
            return S(this, r.prop, a, b, 1 < arguments.length);
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[r.propFix[a] || a];
            });
        }
    }), r.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, 
            e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = r.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : jb.test(a.nodeName) || kb.test(a.nodeName) && a.href ? 0 : -1;
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), o.optSelected || (r.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null;
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
        }
    }), r.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        r.propFix[this.toLowerCase()] = this;
    });
    var lb = /[\t\r\n\f]/g;
    function mb(a) {
        return a.getAttribute && a.getAttribute("class") || "";
    }
    r.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a)) return this.each(function(b) {
                r(this).addClass(a.call(this, b, mb(this)));
            });
            if ("string" == typeof a && a) for (b = a.match(K) || []; c = this[i++]; ) if (e = mb(c), 
            d = 1 === c.nodeType && (" " + e + " ").replace(lb, " ")) {
                for (g = 0; f = b[g++]; ) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                e !== (h = r.trim(d)) && c.setAttribute("class", h);
            }
            return this;
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a)) return this.each(function(b) {
                r(this).removeClass(a.call(this, b, mb(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) for (b = a.match(K) || []; c = this[i++]; ) if (e = mb(c), 
            d = 1 === c.nodeType && (" " + e + " ").replace(lb, " ")) {
                for (g = 0; f = b[g++]; ) for (;-1 < d.indexOf(" " + f + " "); ) d = d.replace(" " + f + " ", " ");
                e !== (h = r.trim(d)) && c.setAttribute("class", h);
            }
            return this;
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function(c) {
                r(this).toggleClass(a.call(this, c, mb(this), b), b);
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) for (d = 0, e = r(this), f = a.match(K) || []; b = f[d++]; ) e.hasClass(b) ? e.removeClass(b) : e.addClass(b); else void 0 !== a && "boolean" !== c || ((b = mb(this)) && V.set(this, "__className__", b), 
                this.setAttribute && this.setAttribute("class", b || !1 === a ? "" : V.get(this, "__className__") || ""));
            });
        },
        hasClass: function(a) {
            var b, c, d = 0;
            for (b = " " + a + " "; c = this[d++]; ) if (1 === c.nodeType && -1 < (" " + mb(c) + " ").replace(lb, " ").indexOf(b)) return !0;
            return !1;
        }
    });
    var nb = /\r/g, ob = /[\x20\t\r\n\f]+/g;
    r.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            return arguments.length ? (d = r.isFunction(a), this.each(function(c) {
                var e;
                1 === this.nodeType && (null == (e = d ? a.call(this, c, r(this).val()) : a) ? e = "" : "number" == typeof e ? e += "" : r.isArray(e) && (e = r.map(e, function(a) {
                    return null == a ? "" : a + "";
                })), (b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()]) && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
            })) : e ? (b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()]) && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : "string" == typeof (c = e.value) ? c.replace(nb, "") : null == c ? "" : c : void 0;
        }
    }), r.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = r.find.attr(a, "value");
                    return null != b ? b : r.trim(r.text(a)).replace(ob, " ");
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type, g = f ? null : [], h = f ? e + 1 : d.length, i = e < 0 ? h : f ? e : 0; i < h; i++) if (((c = d[i]).selected || i === e) && !c.disabled && (!c.parentNode.disabled || !r.nodeName(c.parentNode, "optgroup"))) {
                        if (b = r(c).val(), f) return b;
                        g.push(b);
                    }
                    return g;
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = r.makeArray(b), g = e.length; g--; ) ((d = e[g]).selected = -1 < r.inArray(r.valHooks.option.get(d), f)) && (c = !0);
                    return c || (a.selectedIndex = -1), f;
                }
            }
        }
    }), r.each([ "radio", "checkbox" ], function() {
        r.valHooks[this] = {
            set: function(a, b) {
                return r.isArray(b) ? a.checked = -1 < r.inArray(r(a).val(), b) : void 0;
            }
        }, o.checkOn || (r.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value;
        });
    });
    var pb = /^(?:focusinfocus|focusoutblur)$/;
    r.extend(r.event, {
        trigger: function(b, c, e, f) {
            var g, h, i, j, k, m, n, o = [ e || d ], p = l.call(b, "type") ? b.type : b, q = l.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !pb.test(p + r.event.triggered) && (-1 < p.indexOf(".") && (p = (q = p.split(".")).shift(), 
            q.sort()), k = p.indexOf(":") < 0 && "on" + p, (b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b)).isTrigger = f ? 2 : 3, 
            b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            b.result = void 0, b.target || (b.target = e), c = null == c ? [ b ] : r.makeArray(c, [ b ]), 
            n = r.event.special[p] || {}, f || !n.trigger || !1 !== n.trigger.apply(e, c))) {
                if (!f && !n.noBubble && !r.isWindow(e)) {
                    for (j = n.delegateType || p, pb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), 
                    i = h;
                    i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a);
                }
                for (g = 0; (h = o[g++]) && !b.isPropagationStopped(); ) b.type = 1 < g ? j : n.bindType || p, 
                (m = (V.get(h, "events") || {})[b.type] && V.get(h, "handle")) && m.apply(h, c), 
                (m = k && h[k]) && m.apply && T(h) && (b.result = m.apply(h, c), !1 === b.result && b.preventDefault());
                return b.type = p, f || b.isDefaultPrevented() || n._default && !1 !== n._default.apply(o.pop(), c) || !T(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && ((i = e[k]) && (e[k] = null), 
                e[r.event.triggered = p](), r.event.triggered = void 0, i && (e[k] = i)), b.result;
            }
        },
        simulate: function(a, b, c) {
            var d = r.extend(new r.Event(), c, {
                type: a,
                isSimulated: !0
            });
            r.event.trigger(d, null, b);
        }
    }), r.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                r.event.trigger(a, b, this);
            });
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? r.event.trigger(a, b, c, !0) : void 0;
        }
    }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a, b) {
        r.fn[b] = function(a, c) {
            return 0 < arguments.length ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), r.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        }
    }), o.focusin = "onfocusin" in a, o.focusin || r.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            r.event.simulate(b, a.target, r.event.fix(a));
        };
        r.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this, e = V.access(d, b);
                e || d.addEventListener(a, c, !0), V.access(d, b, (e || 0) + 1);
            },
            teardown: function() {
                var d = this.ownerDocument || this, e = V.access(d, b) - 1;
                e ? V.access(d, b, e) : (d.removeEventListener(a, c, !0), V.remove(d, b));
            }
        };
    });
    var qb = a.location, rb = r.now(), sb = /\?/;
    r.parseXML = function(b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = new a.DOMParser().parseFromString(b, "text/xml");
        } catch (d) {
            c = void 0;
        }
        return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), 
        c;
    };
    var tb = /\[\]$/, ub = /\r?\n/g, vb = /^(?:submit|button|image|reset|file)$/i, wb = /^(?:input|select|textarea|keygen)/i;
    function xb(a, b, c, d) {
        var e;
        if (r.isArray(b)) r.each(b, function(b, e) {
            c || tb.test(a) ? d(a, e) : xb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d);
        }); else if (c || "object" !== r.type(b)) d(a, b); else for (e in b) xb(a + "[" + e + "]", b[e], c, d);
    }
    r.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            var c = r.isFunction(b) ? b() : b;
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c);
        };
        if (r.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function() {
            e(this.name, this.value);
        }); else for (c in a) xb(c, a[c], b, e);
        return d.join("&");
    }, r.fn.extend({
        serialize: function() {
            return r.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var a = r.prop(this, "elements");
                return a ? r.makeArray(a) : this;
            }).filter(function() {
                var a = this.type;
                return this.name && !r(this).is(":disabled") && wb.test(this.nodeName) && !vb.test(a) && (this.checked || !ha.test(a));
            }).map(function(a, b) {
                var c = r(this).val();
                return null == c ? null : r.isArray(c) ? r.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(ub, "\r\n")
                    };
                }) : {
                    name: b.name,
                    value: c.replace(ub, "\r\n")
                };
            }).get();
        }
    });
    var yb = /%20/g, zb = /#.*$/, Ab = /([?&])_=[^&]*/, Bb = /^(.*?):[ \t]*([^\r\n]*)$/gm, Db = /^(?:GET|HEAD)$/, Eb = /^\/\//, Fb = {}, Gb = {}, Hb = "*/".concat("*"), Ib = d.createElement("a");
    function Jb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(K) || [];
            if (r.isFunction(c)) for (;d = f[e++]; ) "+" === d[0] ? (d = d.slice(1) || "*", 
            (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        };
    }
    function Kb(a, b, c, d) {
        var e = {}, f = a === Gb;
        function g(h) {
            var i;
            return e[h] = !0, r.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), 
                g(j), !1);
            }), i;
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*");
    }
    function Lb(a, b) {
        var c, d, e = r.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && r.extend(!0, a, d), a;
    }
    Ib.href = qb.href, r.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: qb.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(qb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Hb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": r.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Lb(Lb(a, r.ajaxSettings), b) : Lb(r.ajaxSettings, a);
        },
        ajaxPrefilter: Jb(Fb),
        ajaxTransport: Jb(Gb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m, n, o = r.ajaxSetup({}, c), p = o.context || o, q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event, s = r.Deferred(), t = r.Callbacks("once memory"), u = o.statusCode || {}, v = {}, w = {}, x = "canceled", y = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (k) {
                        if (!h) for (h = {}; b = Bb.exec(g); ) h[b[1].toLowerCase()] = b[2];
                        b = h[a.toLowerCase()];
                    }
                    return null == b ? null : b;
                },
                getAllResponseHeaders: function() {
                    return k ? g : null;
                },
                setRequestHeader: function(a, b) {
                    return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), 
                    this;
                },
                overrideMimeType: function(a) {
                    return null == k && (o.mimeType = a), this;
                },
                statusCode: function(a) {
                    var b;
                    if (a) if (k) y.always(a[y.status]); else for (b in a) u[b] = [ u[b], a[b] ];
                    return this;
                },
                abort: function(a) {
                    var b = a || x;
                    return e && e.abort(b), A(0, b), this;
                }
            };
            if (s.promise(y), o.url = ((b || o.url || qb.href) + "").replace(Eb, qb.protocol + "//"), 
            o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(K) || [ "" ], 
            null == o.crossDomain) {
                j = d.createElement("a");
                try {
                    j.href = o.url, j.href = j.href, o.crossDomain = Ib.protocol + "//" + Ib.host != j.protocol + "//" + j.host;
                } catch (z) {
                    o.crossDomain = !0;
                }
            }
            if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), 
            Kb(Fb, o, c, y), k) return y;
            for (m in (l = r.event && o.global) && 0 == r.active++ && r.event.trigger("ajaxStart"), 
            o.type = o.type.toUpperCase(), o.hasContent = !Db.test(o.type), f = o.url.replace(zb, ""), 
            o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(yb, "+")) : (n = o.url.slice(f.length), 
            o.data && (f += (sb.test(f) ? "&" : "?") + o.data, delete o.data), !1 === o.cache && (f = f.replace(Ab, ""), 
            n = (sb.test(f) ? "&" : "?") + "_=" + rb++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), 
            r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && !1 !== o.contentType || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), 
            y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Hb + "; q=0.01" : "") : o.accepts["*"]), 
            o.headers) y.setRequestHeader(m, o.headers[m]);
            if (o.beforeSend && (!1 === o.beforeSend.call(p, y, o) || k)) return y.abort();
            if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Kb(Gb, o, c, y)) {
                if (y.readyState = 1, l && q.trigger("ajaxSend", [ y, o ]), k) return y;
                o.async && 0 < o.timeout && (i = a.setTimeout(function() {
                    y.abort("timeout");
                }, o.timeout));
                try {
                    k = !1, e.send(v, A);
                } catch (z) {
                    if (k) throw z;
                    A(-1, z);
                }
            } else A(-1, "No Transport");
            function A(b, c, d, h) {
                var j, m, n, v, w, x = c;
                k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = 0 < b ? 4 : 0, 
                j = 200 <= b && b < 300 || 304 === b, d && (v = function(a, b, c) {
                    for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; ) i.shift(), 
                    void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
                    if (d) for (e in h) if (h[e] && h[e].test(d)) {
                        i.unshift(e);
                        break;
                    }
                    if (i[0] in c) f = i[0]; else {
                        for (e in c) {
                            if (!i[0] || a.converters[e + " " + i[0]]) {
                                f = e;
                                break;
                            }
                            g || (g = e);
                        }
                        f = f || g;
                    }
                    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
                }(o, y, d)), v = function(a, b, c, d) {
                    var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
                    if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
                    for (f = k.shift(); f; ) if (a.responseFields[f] && (c[a.responseFields[f]] = b), 
                    !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
                        if (!(g = j[i + " " + f] || j["* " + f])) for (e in j) if ((h = e.split(" "))[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                            !0 === g ? g = j[e] : !0 !== j[e] && (f = h[0], k.unshift(h[1]));
                            break;
                        }
                        if (!0 !== g) if (g && a.throws) b = g(b); else try {
                            b = g(b);
                        } catch (l) {
                            return {
                                state: "parsererror",
                                error: g ? l : "No conversion from " + i + " to " + f
                            };
                        }
                    }
                    return {
                        state: "success",
                        data: b
                    };
                }(o, v, y, j), j ? (o.ifModified && ((w = y.getResponseHeader("Last-Modified")) && (r.lastModified[f] = w), 
                (w = y.getResponseHeader("etag")) && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, 
                m = v.data, j = !(n = v.error))) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), 
                y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [ m, x, y ]) : s.rejectWith(p, [ y, x, n ]), 
                y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [ y, o, j ? m : n ]), 
                t.fireWith(p, [ y, x ]), l && (q.trigger("ajaxComplete", [ y, o ]), --r.active || r.event.trigger("ajaxStop")));
            }
            return y;
        },
        getJSON: function(a, b, c) {
            return r.get(a, b, c, "json");
        },
        getScript: function(a, b) {
            return r.get(a, void 0, b, "script");
        }
    }), r.each([ "get", "post" ], function(a, b) {
        r[b] = function(a, c, d, e) {
            return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, r.isPlainObject(a) && a));
        };
    }), r._evalUrl = function(a) {
        return r.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        });
    }, r.fn.extend({
        wrapAll: function(a) {
            var b;
            return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), 
            this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                for (var a = this; a.firstElementChild; ) a = a.firstElementChild;
                return a;
            }).append(this)), this;
        },
        wrapInner: function(a) {
            return r.isFunction(a) ? this.each(function(b) {
                r(this).wrapInner(a.call(this, b));
            }) : this.each(function() {
                var b = r(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
            });
        },
        wrap: function(a) {
            var b = r.isFunction(a);
            return this.each(function(c) {
                r(this).wrapAll(b ? a.call(this, c) : a);
            });
        },
        unwrap: function(a) {
            return this.parent(a).not("body").each(function() {
                r(this).replaceWith(this.childNodes);
            }), this;
        }
    }), r.expr.pseudos.hidden = function(a) {
        return !r.expr.pseudos.visible(a);
    }, r.expr.pseudos.visible = function(a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
    }, r.ajaxSettings.xhr = function() {
        try {
            return new a.XMLHttpRequest();
        } catch (b) {}
    };
    var Ob = {
        0: 200,
        1223: 204
    }, Pb = r.ajaxSettings.xhr();
    o.cors = !!Pb && "withCredentials" in Pb, o.ajax = Pb = !!Pb, r.ajaxTransport(function(b) {
        var c, d;
        return o.cors || Pb && !b.crossDomain ? {
            send: function(e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) h[g] = b.xhrFields[g];
                for (g in b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), 
                e) h.setRequestHeader(g, e[g]);
                c = function(a) {
                    return function() {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Ob[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        } : {
                            text: h.responseText
                        }, h.getAllResponseHeaders()));
                    };
                }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                    4 === h.readyState && a.setTimeout(function() {
                        c && d();
                    });
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null);
                } catch (i) {
                    if (c) throw i;
                }
            },
            abort: function() {
                c && c();
            }
        } : void 0;
    }), r.ajaxPrefilter(function(a) {
        a.crossDomain && (a.contents.script = !1);
    }), r.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return r.globalEval(a), a;
            }
        }
    }), r.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }), r.ajaxTransport("script", function(a) {
        var b, c;
        if (a.crossDomain) return {
            send: function(e, f) {
                b = r("<script>").prop({
                    charset: a.scriptCharset,
                    src: a.url
                }).on("load error", c = function(a) {
                    b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type);
                }), d.head.appendChild(b[0]);
            },
            abort: function() {
                c && c();
            }
        };
    });
    var Qb = [], Rb = /(=)\?(?=&|$)|\?\?/;
    function Sb(a) {
        return r.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
    }
    r.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Qb.pop() || r.expando + "_" + rb++;
            return this[a] = !0, a;
        }
    }), r.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = !1 !== b.jsonp && (Rb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Rb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, 
        h ? b[h] = b[h].replace(Rb, "$1" + e) : !1 !== b.jsonp && (b.url += (sb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), 
        b.converters["script json"] = function() {
            return g || r.error(e + " was not called"), g[0];
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments;
        }, d.always(function() {
            void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, 
            Qb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0;
        }), "script") : void 0;
    }), o.createHTMLDocument = function() {
        var a = d.implementation.createHTMLDocument("").body;
        return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length;
    }(), r.parseHTML = function(a, b, c) {
        return "string" != typeof a ? [] : ("boolean" == typeof b && (c = b, b = !1), b || (o.createHTMLDocument ? ((e = (b = d.implementation.createHTMLDocument("")).createElement("base")).href = d.location.href, 
        b.head.appendChild(e)) : b = d), g = !c && [], (f = B.exec(a)) ? [ b.createElement(f[1]) ] : (f = oa([ a ], b, g), 
        g && g.length && r(g).remove(), r.merge([], f.childNodes)));
        var e, f, g;
    }, r.fn.load = function(a, b, c) {
        var d, e, f, g = this, h = a.indexOf(" ");
        return -1 < h && (d = r.trim(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, 
        b = void 0) : b && "object" == typeof b && (e = "POST"), 0 < g.length && r.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a);
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [ a.responseText, b, a ]);
            });
        }), this;
    }, r.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(a, b) {
        r.fn[b] = function(a) {
            return this.on(b, a);
        };
    }), r.expr.pseudos.animated = function(a) {
        return r.grep(r.timers, function(b) {
            return a === b.elem;
        }).length;
    }, r.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, k = r.css(a, "position"), l = r(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), 
            i = r.css(a, "left"), ("absolute" === k || "fixed" === k) && -1 < (f + i).indexOf("auto") ? (g = (d = l.position()).top, 
            e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), 
            null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), 
            "using" in b ? b.using.call(a, m) : l.css(m);
        }
    }, r.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                r.offset.setOffset(this, a, b);
            });
            var b, c, d, e, f = this[0];
            return f ? f.getClientRects().length ? (d = f.getBoundingClientRect()).width || d.height ? (c = Sb(e = f.ownerDocument), 
            b = e.documentElement, {
                top: d.top + c.pageYOffset - b.clientTop,
                left: d.left + c.pageXOffset - b.clientLeft
            }) : d : {
                top: 0,
                left: 0
            } : void 0;
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0], d = {
                    top: 0,
                    left: 0
                };
                return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), 
                b = this.offset(), r.nodeName(a[0], "html") || (d = a.offset()), d = {
                    top: d.top + r.css(a[0], "borderTopWidth", !0),
                    left: d.left + r.css(a[0], "borderLeftWidth", !0)
                }), {
                    top: b.top - d.top - r.css(c, "marginTop", !0),
                    left: b.left - d.left - r.css(c, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent; a && "static" === r.css(a, "position"); ) a = a.offsetParent;
                return a || pa;
            });
        }
    }), r.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = "pageYOffset" === b;
        r.fn[a] = function(d) {
            return S(this, function(a, d, e) {
                var f = Sb(a);
                return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
            }, a, d, arguments.length);
        };
    }), r.each([ "top", "left" ], function(a, b) {
        r.cssHooks[b] = Na(o.pixelPosition, function(a, c) {
            return c ? (c = Ma(a, b), Ka.test(c) ? r(a).position()[b] + "px" : c) : void 0;
        });
    }), r.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        r.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            r.fn[d] = function(e, f) {
                var g = arguments.length && (c || "boolean" != typeof e), h = c || (!0 === e || !0 === f ? "margin" : "border");
                return S(this, function(b, c, e) {
                    var f;
                    return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, 
                    Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h);
                }, b, g ? e : void 0, g);
            };
        });
    }), r.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c);
        },
        unbind: function(a, b) {
            return this.off(a, null, b);
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d);
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        }
    }), r.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
        return r;
    });
    var Tb = a.jQuery, Ub = a.$;
    return r.noConflict = function(b) {
        return a.$ === r && (a.$ = Ub), b && a.jQuery === r && (a.jQuery = Tb), r;
    }, b || (a.jQuery = a.$ = r), r;
}), window.Modernizr = function(a, b, c) {
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
            f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), 
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
}(this, navigator), function(a) {
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
                    if ("first" === t || "last" === t) {
                        var m = l.find(":" + t);
                        return "x" === o ? ae(m)[1] : ae(m)[0];
                    }
                    return e(t).length ? "x" === o ? ae(e(t))[1] : ae(e(t))[0] : (l.css(h, t), void u.update.call(null, n[0]));
                }
            }
        }, N = function(t) {
            function r(e) {
                clearTimeout(f[0].autoUpdate), u.update.call(null, l[0], e);
            }
            var l = e(this), s = l.data(a), c = s.opt, f = e("#mCSB_" + s.idx + "_container");
            return t ? (clearTimeout(f[0].autoUpdate), void $(f[0], "autoUpdate")) : void function o() {
                return clearTimeout(f[0].autoUpdate), 0 === l.parents("html").length ? void (l = null) : void (f[0].autoUpdate = setTimeout(function() {
                    return c.advanced.updateOnSelectorChange && (s.poll.change.n = function() {
                        !0 === c.advanced.updateOnSelectorChange && (c.advanced.updateOnSelectorChange = "*");
                        var e = 0, t = f.find(c.advanced.updateOnSelectorChange);
                        return c.advanced.updateOnSelectorChange && 0 < t.length && t.each(function() {
                            e += this.offsetHeight + this.offsetWidth;
                        }), e;
                    }(), s.poll.change.n !== s.poll.change.o) ? (s.poll.change.o = s.poll.change.n, 
                    void r(3)) : c.advanced.updateOnContentResize && (s.poll.size.n = l[0].scrollHeight + l[0].scrollWidth + f[0].offsetHeight + l[0].offsetHeight + l[0].offsetWidth, 
                    s.poll.size.n !== s.poll.size.o) ? (s.poll.size.o = s.poll.size.n, void r(1)) : !c.advanced.updateOnImageLoad || "auto" === c.advanced.updateOnImageLoad && "y" === c.axis || (s.poll.img.n = f.find("img").length, 
                    s.poll.img.n === s.poll.img.o) ? void ((c.advanced.updateOnSelectorChange || c.advanced.updateOnContentResize || c.advanced.updateOnImageLoad) && o()) : (s.poll.img.o = s.poll.img.n, 
                    void f.find("img").each(function() {
                        !function(t) {
                            if (e(t).hasClass(d[2])) return r();
                            var n = new Image();
                            n.onload = function(e, t) {
                                return function() {
                                    return t.apply(e, arguments);
                                };
                            }(n, function() {
                                this.onload = null, e(t).addClass(d[2]), r(2);
                            }), n.src = t.src;
                        }(this);
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
}), function(t) {
    "function" == typeof define && define.amd ? define([ "jquery" ], t) : t(jQuery);
}(function(t) {
    function s() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, 
        this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", 
        this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", 
        this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", 
        this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", 
        this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
            monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
            dayNames: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
            dayNamesShort: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
            dayNamesMin: [ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" ],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), 
        this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = n(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
    }
    function n(e) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return e.on("mouseout", i, function() {
            t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), 
            -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover");
        }).on("mouseover", i, o);
    }
    function o() {
        t.datepicker._isDisabledDatepicker(p.inline ? p.dpDiv.parent()[0] : p.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), 
        t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), 
        -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"));
    }
    function a(e, i) {
        for (var s in t.extend(e, i), i) null == i[s] && (e[s] = i[s]);
        return e;
    }
    function r(t) {
        return function() {
            var e = this.element.val();
            t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change");
        };
    }
    t.ui = t.ui || {}, t.ui.version = "1.12.1";
    var h = 0, l = Array.prototype.slice;
    t.cleanData = function(e) {
        return function(i) {
            var s, n, o;
            for (o = 0; null != (n = i[o]); o++) try {
                (s = t._data(n, "events")) && s.remove && t(n).triggerHandler("remove");
            } catch (a) {}
            e(i);
        };
    }(t.cleanData), t.widget = function(e, i, s) {
        var n, o, a, r = {}, h = e.split(".")[0], l = h + "-" + (e = e.split(".")[1]);
        return s || (s = i, i = t.Widget), t.isArray(s) && (s = t.extend.apply(null, [ {} ].concat(s))), 
        t.expr[":"][l.toLowerCase()] = function(e) {
            return !!t.data(e, l);
        }, t[h] = t[h] || {}, n = t[h][e], o = t[h][e] = function(t, e) {
            return this._createWidget ? void (arguments.length && this._createWidget(t, e)) : new o(t, e);
        }, t.extend(o, n, {
            version: s.version,
            _proto: t.extend({}, s),
            _childConstructors: []
        }), (a = new i()).options = t.widget.extend({}, a.options), t.each(s, function(e, s) {
            return t.isFunction(s) ? void (r[e] = function() {
                function t() {
                    return i.prototype[e].apply(this, arguments);
                }
                function n(t) {
                    return i.prototype[e].apply(this, t);
                }
                return function() {
                    var e, i = this._super, o = this._superApply;
                    return this._super = t, this._superApply = n, e = s.apply(this, arguments), this._super = i, 
                    this._superApply = o, e;
                };
            }()) : void (r[e] = s);
        }), o.prototype = t.widget.extend(a, {
            widgetEventPrefix: n && a.widgetEventPrefix || e
        }, r, {
            constructor: o,
            namespace: h,
            widgetName: e,
            widgetFullName: l
        }), n ? (t.each(n._childConstructors, function(e, i) {
            var s = i.prototype;
            t.widget(s.namespace + "." + s.widgetName, o, i._proto);
        }), delete n._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), 
        o;
    }, t.widget.extend = function(e) {
        for (var i, s, n = l.call(arguments, 1), o = 0, a = n.length; o < a; o++) for (i in n[o]) s = n[o][i], 
        n[o].hasOwnProperty(i) && void 0 !== s && (e[i] = t.isPlainObject(s) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], s) : t.widget.extend({}, s) : s);
        return e;
    }, t.widget.bridge = function(e, i) {
        var s = i.prototype.widgetFullName || e;
        t.fn[e] = function(n) {
            var o = "string" == typeof n, a = l.call(arguments, 1), r = this;
            return o ? this.length || "instance" !== n ? this.each(function() {
                var i, o = t.data(this, s);
                return "instance" === n ? (r = o, !1) : o ? t.isFunction(o[n]) && "_" !== n.charAt(0) ? (i = o[n].apply(o, a)) !== o && void 0 !== i ? (r = i && i.jquery ? r.pushStack(i.get()) : i, 
                !1) : void 0 : t.error("no such method '" + n + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + n + "'");
            }) : r = void 0 : (a.length && (n = t.widget.extend.apply(null, [ n ].concat(a))), 
            this.each(function() {
                var e = t.data(this, s);
                e ? (e.option(n || {}), e._init && e._init()) : t.data(this, s, new i(n, this));
            })), r;
        };
    }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            classes: {},
            disabled: !1,
            create: null
        },
        _createWidget: function(e, i) {
            i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = h++, 
            this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), 
            this.focusable = t(), this.classesElementLookup = {}, i !== this && (t.data(i, this.widgetFullName, this), 
            this._on(!0, this.element, {
                remove: function(t) {
                    t.target === i && this.destroy();
                }
            }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), 
            this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), 
            this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), 
            this._init();
        },
        _getCreateOptions: function() {
            return {};
        },
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function() {
            var e = this;
            this._destroy(), t.each(this.classesElementLookup, function(t, i) {
                e._removeClass(i, t);
            }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), 
            this.bindings.off(this.eventNamespace);
        },
        _destroy: t.noop,
        widget: function() {
            return this.element;
        },
        option: function(e, i) {
            var s, n, o, a = e;
            if (0 === arguments.length) return t.widget.extend({}, this.options);
            if ("string" == typeof e) if (a = {}, e = (s = e.split(".")).shift(), s.length) {
                for (n = a[e] = t.widget.extend({}, this.options[e]), o = 0; s.length - 1 > o; o++) n[s[o]] = n[s[o]] || {}, 
                n = n[s[o]];
                if (e = s.pop(), 1 === arguments.length) return void 0 === n[e] ? null : n[e];
                n[e] = i;
            } else {
                if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                a[e] = i;
            }
            return this._setOptions(a), this;
        },
        _setOptions: function(t) {
            var e;
            for (e in t) this._setOption(e, t[e]);
            return this;
        },
        _setOption: function(t, e) {
            return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), 
            this;
        },
        _setOptionClasses: function(e) {
            var i, s, n;
            for (i in e) n = this.classesElementLookup[i], e[i] !== this.options.classes[i] && n && n.length && (s = t(n.get()), 
            this._removeClass(n, i), s.addClass(this._classes({
                element: s,
                keys: i,
                classes: e,
                add: !0
            })));
        },
        _setOptionDisabled: function(t) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), 
            t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"));
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            });
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            });
        },
        _classes: function(e) {
            function i(i, o) {
                var a, r;
                for (r = 0; i.length > r; r++) a = n.classesElementLookup[i[r]] || t(), a = e.add ? t(t.unique(a.get().concat(e.element.get()))) : t(a.not(e.element).get()), 
                n.classesElementLookup[i[r]] = a, s.push(i[r]), o && e.classes[i[r]] && s.push(e.classes[i[r]]);
            }
            var s = [], n = this;
            return e = t.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, e), this._on(e.element, {
                remove: "_untrackClassesElement"
            }), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), 
            s.join(" ");
        },
        _untrackClassesElement: function(e) {
            var i = this;
            t.each(i.classesElementLookup, function(s, n) {
                -1 !== t.inArray(e.target, n) && (i.classesElementLookup[s] = t(n.not(e.target).get()));
            });
        },
        _removeClass: function(t, e, i) {
            return this._toggleClass(t, e, i, !1);
        },
        _addClass: function(t, e, i) {
            return this._toggleClass(t, e, i, !0);
        },
        _toggleClass: function(t, e, i, s) {
            s = "boolean" == typeof s ? s : i;
            var n = "string" == typeof t || null === t, o = {
                extra: n ? e : i,
                keys: n ? t : e,
                element: n ? this.element : t,
                add: s
            };
            return o.element.toggleClass(this._classes(o), s), this;
        },
        _on: function(e, i, s) {
            var n, o = this;
            "boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = n = t(i), this.bindings = this.bindings.add(i)) : (s = i, 
            i = this.element, n = this.widget()), t.each(s, function(s, a) {
                function r() {
                    return e || !0 !== o.options.disabled && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0;
                }
                "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
                var h = s.match(/^([\w:-]*)\s*(.*)$/), l = h[1] + o.eventNamespace, c = h[2];
                c ? n.on(l, c, r) : i.on(l, r);
            });
        },
        _off: function(e, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, 
            e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), 
            this.hoverable = t(this.hoverable.not(e).get());
        },
        _delay: function(t, e) {
            var s = this;
            return setTimeout(function() {
                return ("string" == typeof t ? s[t] : t).apply(s, arguments);
            }, e || 0);
        },
        _hoverable: function(e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function(e) {
                    this._addClass(t(e.currentTarget), null, "ui-state-hover");
                },
                mouseleave: function(e) {
                    this._removeClass(t(e.currentTarget), null, "ui-state-hover");
                }
            });
        },
        _focusable: function(e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function(e) {
                    this._addClass(t(e.currentTarget), null, "ui-state-focus");
                },
                focusout: function(e) {
                    this._removeClass(t(e.currentTarget), null, "ui-state-focus");
                }
            });
        },
        _trigger: function(e, i, s) {
            var n, o, a = this.options[e];
            if (s = s || {}, (i = t.Event(i)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), 
            i.target = this.element[0], o = i.originalEvent) for (n in o) n in i || (i[n] = o[n]);
            return this.element.trigger(i, s), !(t.isFunction(a) && !1 === a.apply(this.element[0], [ i ].concat(s)) || i.isDefaultPrevented());
        }
    }, t.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(e, i) {
        t.Widget.prototype["_" + e] = function(s, n, o) {
            "string" == typeof n && (n = {
                effect: n
            });
            var a, r = n ? !0 === n || "number" == typeof n ? i : n.effect || i : e;
            "number" == typeof (n = n || {}) && (n = {
                duration: n
            }), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function(i) {
                t(this)[e](), o && o.call(s[0]), i();
            });
        };
    }), t.widget, function() {
        function e(t, e, i) {
            return [ parseFloat(t[0]) * (u.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (u.test(t[1]) ? i / 100 : 1) ];
        }
        function i(e, i) {
            return parseInt(t.css(e, i), 10) || 0;
        }
        var n, o = Math.max, a = Math.abs, r = /left|center|right/, h = /top|center|bottom/, l = /[\+\-]\d+(\.[\d]+)?%?/, c = /^\w+/, u = /%$/, d = t.fn.position;
        t.position = {
            scrollbarWidth: function() {
                if (void 0 !== n) return n;
                var e, i, s = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), o = s.children()[0];
                return t("body").append(s), e = o.offsetWidth, s.css("overflow", "scroll"), e === (i = o.offsetWidth) && (i = s[0].clientWidth), 
                s.remove(), n = e - i;
            },
            getScrollInfo: function(e) {
                var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"), s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"), n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth;
                return {
                    width: "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight ? t.position.scrollbarWidth() : 0,
                    height: n ? t.position.scrollbarWidth() : 0
                };
            },
            getWithinInfo: function(e) {
                var i = t(e || window), s = t.isWindow(i[0]), n = !!i[0] && 9 === i[0].nodeType;
                return {
                    element: i,
                    isWindow: s,
                    isDocument: n,
                    offset: !s && !n ? t(e).offset() : {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: i.scrollLeft(),
                    scrollTop: i.scrollTop(),
                    width: i.outerWidth(),
                    height: i.outerHeight()
                };
            }
        }, t.fn.position = function(n) {
            if (!n || !n.of) return d.apply(this, arguments);
            n = t.extend({}, n);
            var u, p, f, g, m, _, v = t(n.of), b = t.position.getWithinInfo(n.within), y = t.position.getScrollInfo(b), w = (n.collision || "flip").split(" "), k = {};
            return _ = function(e) {
                var i = e[0];
                return 9 === i.nodeType ? {
                    width: e.width(),
                    height: e.height(),
                    offset: {
                        top: 0,
                        left: 0
                    }
                } : t.isWindow(i) ? {
                    width: e.width(),
                    height: e.height(),
                    offset: {
                        top: e.scrollTop(),
                        left: e.scrollLeft()
                    }
                } : i.preventDefault ? {
                    width: 0,
                    height: 0,
                    offset: {
                        top: i.pageY,
                        left: i.pageX
                    }
                } : {
                    width: e.outerWidth(),
                    height: e.outerHeight(),
                    offset: e.offset()
                };
            }(v), v[0].preventDefault && (n.at = "left top"), p = _.width, f = _.height, g = _.offset, 
            m = t.extend({}, g), t.each([ "my", "at" ], function() {
                var t, e, i = (n[this] || "").split(" ");
                1 === i.length && (i = r.test(i[0]) ? i.concat([ "center" ]) : h.test(i[0]) ? [ "center" ].concat(i) : [ "center", "center" ]), 
                i[0] = r.test(i[0]) ? i[0] : "center", i[1] = h.test(i[1]) ? i[1] : "center", t = l.exec(i[0]), 
                e = l.exec(i[1]), k[this] = [ t ? t[0] : 0, e ? e[0] : 0 ], n[this] = [ c.exec(i[0])[0], c.exec(i[1])[0] ];
            }), 1 === w.length && (w[1] = w[0]), "right" === n.at[0] ? m.left += p : "center" === n.at[0] && (m.left += p / 2), 
            "bottom" === n.at[1] ? m.top += f : "center" === n.at[1] && (m.top += f / 2), u = e(k.at, p, f), 
            m.left += u[0], m.top += u[1], this.each(function() {
                var s, r, h = t(this), l = h.outerWidth(), c = h.outerHeight(), d = i(this, "marginLeft"), _ = i(this, "marginTop"), x = l + d + i(this, "marginRight") + y.width, C = c + _ + i(this, "marginBottom") + y.height, D = t.extend({}, m), I = e(k.my, h.outerWidth(), h.outerHeight());
                "right" === n.my[0] ? D.left -= l : "center" === n.my[0] && (D.left -= l / 2), "bottom" === n.my[1] ? D.top -= c : "center" === n.my[1] && (D.top -= c / 2), 
                D.left += I[0], D.top += I[1], s = {
                    marginLeft: d,
                    marginTop: _
                }, t.each([ "left", "top" ], function(e, i) {
                    t.ui.position[w[e]] && t.ui.position[w[e]][i](D, {
                        targetWidth: p,
                        targetHeight: f,
                        elemWidth: l,
                        elemHeight: c,
                        collisionPosition: s,
                        collisionWidth: x,
                        collisionHeight: C,
                        offset: [ u[0] + I[0], u[1] + I[1] ],
                        my: n.my,
                        at: n.at,
                        within: b,
                        elem: h
                    });
                }), n.using && (r = function(t) {
                    var e = g.left - D.left, i = e + p - l, s = g.top - D.top, r = s + f - c, u = {
                        target: {
                            element: v,
                            left: g.left,
                            top: g.top,
                            width: p,
                            height: f
                        },
                        element: {
                            element: h,
                            left: D.left,
                            top: D.top,
                            width: l,
                            height: c
                        },
                        horizontal: i < 0 ? "left" : 0 < e ? "right" : "center",
                        vertical: r < 0 ? "top" : 0 < s ? "bottom" : "middle"
                    };
                    p < l && p > a(e + i) && (u.horizontal = "center"), f < c && f > a(s + r) && (u.vertical = "middle"), 
                    u.important = o(a(e), a(i)) > o(a(s), a(r)) ? "horizontal" : "vertical", n.using.call(this, t, u);
                }), h.offset(t.extend(D, {
                    using: r
                }));
            });
        }, t.ui.position = {
            fit: {
                left: function(t, e) {
                    var i, s = e.within, n = s.isWindow ? s.scrollLeft : s.offset.left, a = s.width, r = t.left - e.collisionPosition.marginLeft, h = n - r, l = r + e.collisionWidth - a - n;
                    e.collisionWidth > a ? 0 < h && l <= 0 ? (i = t.left + h + e.collisionWidth - a - n, 
                    t.left += h - i) : t.left = 0 < l && h <= 0 ? n : l < h ? n + a - e.collisionWidth : n : 0 < h ? t.left += h : 0 < l ? t.left -= l : t.left = o(t.left - r, t.left);
                },
                top: function(t, e) {
                    var i, s = e.within, n = s.isWindow ? s.scrollTop : s.offset.top, a = e.within.height, r = t.top - e.collisionPosition.marginTop, h = n - r, l = r + e.collisionHeight - a - n;
                    e.collisionHeight > a ? 0 < h && l <= 0 ? (i = t.top + h + e.collisionHeight - a - n, 
                    t.top += h - i) : t.top = 0 < l && h <= 0 ? n : l < h ? n + a - e.collisionHeight : n : 0 < h ? t.top += h : 0 < l ? t.top -= l : t.top = o(t.top - r, t.top);
                }
            },
            flip: {
                left: function(t, e) {
                    var i, s, n = e.within, o = n.offset.left + n.scrollLeft, r = n.width, h = n.isWindow ? n.scrollLeft : n.offset.left, l = t.left - e.collisionPosition.marginLeft, c = l - h, u = l + e.collisionWidth - r - h, d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0, p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0, f = -2 * e.offset[0];
                    c < 0 ? ((i = t.left + d + p + f + e.collisionWidth - r - o) < 0 || a(c) > i) && (t.left += d + p + f) : 0 < u && ((0 < (s = t.left - e.collisionPosition.marginLeft + d + p + f - h) || u > a(s)) && (t.left += d + p + f));
                },
                top: function(t, e) {
                    var i, s, n = e.within, o = n.offset.top + n.scrollTop, r = n.height, h = n.isWindow ? n.scrollTop : n.offset.top, l = t.top - e.collisionPosition.marginTop, c = l - h, u = l + e.collisionHeight - r - h, p = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0, f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0, g = -2 * e.offset[1];
                    c < 0 ? ((s = t.top + p + f + g + e.collisionHeight - r - o) < 0 || a(c) > s) && (t.top += p + f + g) : 0 < u && ((0 < (i = t.top - e.collisionPosition.marginTop + p + f + g - h) || u > a(i)) && (t.top += p + f + g));
                }
            },
            flipfit: {
                left: function() {
                    t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments);
                },
                top: function() {
                    t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments);
                }
            }
        };
    }(), t.ui.position, t.extend(t.expr[":"], {
        data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
            return function(i) {
                return !!t.data(i, e);
            };
        }) : function(e, i, s) {
            return !!t.data(e, s[3]);
        }
    }), t.fn.extend({
        disableSelection: function() {
            var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.on(t + ".ui-disableSelection", function(t) {
                    t.preventDefault();
                });
            };
        }(),
        enableSelection: function() {
            return this.off(".ui-disableSelection");
        }
    }), t.ui.focusable = function(i, s) {
        var n, o, a, r, h, l = i.nodeName.toLowerCase();
        return "area" === l ? (o = (n = i.parentNode).name, !(!i.href || !o || "map" !== n.nodeName.toLowerCase()) && (0 < (a = t("img[usemap='#" + o + "']")).length && a.is(":visible"))) : (/^(input|select|textarea|button|object)$/.test(l) ? (r = !i.disabled) && ((h = t(i).closest("fieldset")[0]) && (r = !h.disabled)) : r = "a" === l && i.href || s, 
        r && t(i).is(":visible") && function(t) {
            for (var e = t.css("visibility"); "inherit" === e; ) e = (t = t.parent()).css("visibility");
            return "hidden" !== e;
        }(t(i)));
    }, t.extend(t.expr[":"], {
        focusable: function(e) {
            return t.ui.focusable(e, null != t.attr(e, "tabindex"));
        }
    }), t.ui.focusable, t.fn.form = function() {
        return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form);
    }, t.ui.formResetMixin = {
        _formResetHandler: function() {
            var e = t(this);
            setTimeout(function() {
                var i = e.data("ui-form-reset-instances");
                t.each(i, function() {
                    this.refresh();
                });
            });
        },
        _bindFormResetHandler: function() {
            if (this.form = this.element.form(), this.form.length) {
                var t = this.form.data("ui-form-reset-instances") || [];
                t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), 
                this.form.data("ui-form-reset-instances", t);
            }
        },
        _unbindFormResetHandler: function() {
            if (this.form.length) {
                var e = this.form.data("ui-form-reset-instances");
                e.splice(t.inArray(this, e), 1), e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset");
            }
        }
    }, "1.7" === t.fn.jquery.substring(0, 3) && (t.each([ "Width", "Height" ], function(e, i) {
        function s(e, i, s, o) {
            return t.each(n, function() {
                i -= parseFloat(t.css(e, "padding" + this)) || 0, s && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), 
                o && (i -= parseFloat(t.css(e, "margin" + this)) || 0);
            }), i;
        }
        var n = "Width" === i ? [ "Left", "Right" ] : [ "Top", "Bottom" ], o = i.toLowerCase(), a = {
            innerWidth: t.fn.innerWidth,
            innerHeight: t.fn.innerHeight,
            outerWidth: t.fn.outerWidth,
            outerHeight: t.fn.outerHeight
        };
        t.fn["inner" + i] = function(e) {
            return void 0 === e ? a["inner" + i].call(this) : this.each(function() {
                t(this).css(o, s(this, e) + "px");
            });
        }, t.fn["outer" + i] = function(e, n) {
            return "number" != typeof e ? a["outer" + i].call(this, e) : this.each(function() {
                t(this).css(o, s(this, e, !0, n) + "px");
            });
        };
    }), t.fn.addBack = function(t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
    }), t.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    }, t.ui.escapeSelector = function() {
        var t = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
        return function(e) {
            return e.replace(t, "\\$1");
        };
    }(), t.fn.labels = function() {
        var e, i, s, n, o;
        return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (n = this.eq(0).parents("label"), 
        (s = this.attr("id")) && (o = (e = this.eq(0).parents().last()).add(e.length ? e.siblings() : this.siblings()), 
        i = "label[for='" + t.ui.escapeSelector(s) + "']", n = n.add(o.find(i).addBack(i))), 
        this.pushStack(n));
    }, t.fn.scrollParent = function(e) {
        var i = this.css("position"), s = "absolute" === i, n = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/, o = this.parents().filter(function() {
            var e = t(this);
            return (!s || "static" !== e.css("position")) && n.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"));
        }).eq(0);
        return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document);
    }, t.extend(t.expr[":"], {
        tabbable: function(e) {
            var i = t.attr(e, "tabindex"), s = null != i;
            return (!s || 0 <= i) && t.ui.focusable(e, s);
        }
    }), t.fn.extend({
        uniqueId: function() {
            var t = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++t);
                });
            };
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id");
            });
        }
    }), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    var c = !1;
    t(document).on("mouseup", function() {
        c = !1;
    }), t.widget("ui.mouse", {
        version: "1.12.1",
        options: {
            cancel: "input, textarea, button, select, option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var e = this;
            this.element.on("mousedown." + this.widgetName, function(t) {
                return e._mouseDown(t);
            }).on("click." + this.widgetName, function(i) {
                return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), 
                i.stopImmediatePropagation(), !1) : void 0;
            }), this.started = !1;
        },
        _mouseDestroy: function() {
            this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);
        },
        _mouseDown: function(e) {
            if (!c) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                var i = this, s = 1 === e.which, n = !("string" != typeof this.options.cancel || !e.target.nodeName) && t(e.target).closest(this.options.cancel).length;
                return s && !n && this._mouseCapture(e) && (this.mouseDelayMet = !this.options.delay, 
                this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    i.mouseDelayMet = !0;
                }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e), 
                !this._mouseStarted) ? e.preventDefault() : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), 
                this._mouseMoveDelegate = function(t) {
                    return i._mouseMove(t);
                }, this._mouseUpDelegate = function(t) {
                    return i._mouseUp(t);
                }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), 
                e.preventDefault(), c = !0)), !0;
            }
        },
        _mouseMove: function(e) {
            if (this._mouseMoved) {
                if (t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button) return this._mouseUp(e);
                if (!e.which) if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0; else if (!this.ignoreMissingWhich) return this._mouseUp(e);
            }
            return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), 
            e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), 
            this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted);
        },
        _mouseUp: function(e) {
            this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), 
            this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), 
            this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), 
            delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, c = !1, e.preventDefault();
        },
        _mouseDistanceMet: function(t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance;
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet;
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0;
        }
    }), t.ui.plugin = {
        add: function(e, i, s) {
            var n, o = t.ui[e].prototype;
            for (n in s) o.plugins[n] = o.plugins[n] || [], o.plugins[n].push([ i, s[n] ]);
        },
        call: function(t, e, i, s) {
            var n, o = t.plugins[e];
            if (o && (s || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)) for (n = 0; o.length > n; n++) t.options[o[n][0]] && o[n][1].apply(t.element, i);
        }
    }, t.ui.safeActiveElement = function(t) {
        var e;
        try {
            e = t.activeElement;
        } catch (i) {
            e = t.body;
        }
        return e || (e = t.body), e.nodeName || (e = t.body), e;
    }, t.ui.safeBlur = function(e) {
        e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur");
    }, t.widget("ui.draggable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), 
            this._setHandleClassName(), this._mouseInit();
        },
        _setOption: function(t, e) {
            this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName());
        },
        _destroy: function() {
            return (this.helper || this.element).is(".ui-draggable-dragging") ? void (this.destroyOnClear = !0) : (this._removeHandleClassName(), 
            void this._mouseDestroy());
        },
        _mouseCapture: function(e) {
            var i = this.options;
            return !(this.helper || i.disabled || 0 < t(e.target).closest(".ui-resizable-handle").length) && (this.handle = this._getHandle(e), 
            !!this.handle && (this._blurActiveElement(e), this._blockFrames(!0 === i.iframeFix ? "iframe" : i.iframeFix), 
            !0));
        },
        _blockFrames: function(e) {
            this.iframeBlocks = this.document.find(e).map(function() {
                var e = t(this);
                return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0];
            });
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
        },
        _blurActiveElement: function(e) {
            var i = t.ui.safeActiveElement(this.document[0]);
            t(e.target).closest(i).length || t.ui.safeBlur(i);
        },
        _mouseStart: function(e) {
            var i = this.options;
            return this.helper = this._createHelper(e), this._addClass(this.helper, "ui-draggable-dragging"), 
            this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), 
            this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), 
            this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = 0 < this.helper.parents().filter(function() {
                return "fixed" === t(this).css("position");
            }).length, this.positionAbs = this.element.offset(), this._refreshOffsets(e), this.originalPosition = this.position = this._generatePosition(e, !1), 
            this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), 
            this._setContainment(), !1 === this._trigger("start", e) ? (this._clear(), !1) : (this._cacheHelperProportions(), 
            t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), 
            t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0);
        },
        _refreshOffsets: function(t) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: !1,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }, this.offset.click = {
                left: t.pageX - this.offset.left,
                top: t.pageY - this.offset.top
            };
        },
        _mouseDrag: function(e, i) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, !0), 
            this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var s = this._uiHash();
                if (!1 === this._trigger("drag", e, s)) return this._mouseUp(new t.Event("mouseup", e)), 
                !1;
                this.position = s.position;
            }
            return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", 
            t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1;
        },
        _mouseStop: function(e) {
            var i = this, s = !1;
            return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)), 
            this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || !0 === this.options.revert || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                !1 !== i._trigger("stop", e) && i._clear();
            }) : !1 !== this._trigger("stop", e) && this._clear(), !1;
        },
        _mouseUp: function(e) {
            return this._unblockFrames(), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), 
            this.handleElement.is(e.target) && this.element.trigger("focus"), t.ui.mouse.prototype._mouseUp.call(this, e);
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new t.Event("mouseup", {
                target: this.element[0]
            })) : this._clear(), this;
        },
        _getHandle: function(e) {
            return !this.options.handle || !!t(e.target).closest(this.element.find(this.options.handle)).length;
        },
        _setHandleClassName: function() {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, 
            this._addClass(this.handleElement, "ui-draggable-handle");
        },
        _removeHandleClassName: function() {
            this._removeClass(this.handleElement, "ui-draggable-handle");
        },
        _createHelper: function(e) {
            var i = this.options, s = t.isFunction(i.helper), n = s ? t(i.helper.apply(this.element[0], [ e ])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), 
            s && n[0] === this.element[0] && this._setPositionRelative(), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), 
            n;
        },
        _setPositionRelative: function() {
            /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative");
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), 
            "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top);
        },
        _isRootNode: function(t) {
            return /(html|body)/i.test(t.tagName) || t === this.document[0];
        },
        _getParentOffset: function() {
            var e = this.offsetParent.offset(), i = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), 
            e.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            };
        },
        _getRelativeOffset: function() {
            if ("relative" !== this.cssPosition) return {
                top: 0,
                left: 0
            };
            var t = this.element.position(), e = this._isRootNode(this.scrollParent[0]);
            return {
                top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
                left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
            };
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            };
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            };
        },
        _setContainment: function() {
            var e, i, s, n = this.options, o = this.document[0];
            return this.relativeContainer = null, n.containment ? "window" === n.containment ? void (this.containment = [ t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ]) : "document" === n.containment ? void (this.containment = [ 0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ]) : n.containment.constructor === Array ? void (this.containment = n.containment) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), 
            void ((s = (i = t(n.containment))[0]) && (e = /(scroll|auto)/.test(i.css("overflow")), 
            this.containment = [ (parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom ], 
            this.relativeContainer = i))) : void (this.containment = null);
        },
        _convertPositionTo: function(t, e) {
            e || (e = this.position);
            var i = "absolute" === t ? 1 : -1, s = this._isRootNode(this.scrollParent[0]);
            return {
                top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i,
                left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i
            };
        },
        _generatePosition: function(t, e) {
            var i, s, n, o, a = this.options, r = this._isRootNode(this.scrollParent[0]), h = t.pageX, l = t.pageY;
            return r && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            }), e && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), 
            i = [ this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top ]) : i = this.containment, 
            t.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), 
            t.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), 
            t.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), a.grid && (n = a.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY, 
            l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - a.grid[1] : n + a.grid[1] : n, 
            o = a.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX, 
            h = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0] : o), 
            "y" === a.axis && (h = this.originalPageX), "x" === a.axis && (l = this.originalPageY)), 
            {
                top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
                left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
            };
        },
        _clear: function() {
            this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), 
            this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy();
        },
        _trigger: function(e, i, s) {
            return s = s || this._uiHash(), t.ui.plugin.call(this, e, [ i, s, this ], !0), /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), 
            s.offset = this.positionAbs), t.Widget.prototype._trigger.call(this, e, i, s);
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            };
        }
    }), t.ui.plugin.add("draggable", "connectToSortable", {
        start: function(e, i, s) {
            var n = t.extend({}, i, {
                item: s.element
            });
            s.sortables = [], t(s.options.connectToSortable).each(function() {
                var i = t(this).sortable("instance");
                i && !i.options.disabled && (s.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, n));
            });
        },
        stop: function(e, i, s) {
            var n = t.extend({}, i, {
                item: s.element
            });
            s.cancelHelperRemoval = !1, t.each(s.sortables, function() {
                var t = this;
                t.isOver ? (t.isOver = 0, s.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, 
                t._storedCSS = {
                    position: t.placeholder.css("position"),
                    top: t.placeholder.css("top"),
                    left: t.placeholder.css("left")
                }, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, 
                t._trigger("deactivate", e, n));
            });
        },
        drag: function(e, i, s) {
            t.each(s.sortables, function() {
                var n = !1, o = this;
                o.positionAbs = s.positionAbs, o.helperProportions = s.helperProportions, o.offset.click = s.offset.click, 
                o._intersectsWith(o.containerCache) && (n = !0, t.each(s.sortables, function() {
                    return this.positionAbs = s.positionAbs, this.helperProportions = s.helperProportions, 
                    this.offset.click = s.offset.click, this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (n = !1), 
                    n;
                })), n ? (o.isOver || (o.isOver = 1, s._parent = i.helper.parent(), o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0), 
                o.options._helper = o.options.helper, o.options.helper = function() {
                    return i.helper[0];
                }, e.target = o.currentItem[0], o._mouseCapture(e, !0), o._mouseStart(e, !0, !0), 
                o.offset.click.top = s.offset.click.top, o.offset.click.left = s.offset.click.left, 
                o.offset.parent.left -= s.offset.parent.left - o.offset.parent.left, o.offset.parent.top -= s.offset.parent.top - o.offset.parent.top, 
                s._trigger("toSortable", e), s.dropped = o.element, t.each(s.sortables, function() {
                    this.refreshPositions();
                }), s.currentItem = s.element, o.fromOutside = s), o.currentItem && (o._mouseDrag(e), 
                i.position = o.position)) : o.isOver && (o.isOver = 0, o.cancelHelperRemoval = !0, 
                o.options._revert = o.options.revert, o.options.revert = !1, o._trigger("out", e, o._uiHash(o)), 
                o._mouseStop(e, !0), o.options.revert = o.options._revert, o.options.helper = o.options._helper, 
                o.placeholder && o.placeholder.remove(), i.helper.appendTo(s._parent), s._refreshOffsets(e), 
                i.position = s._generatePosition(e, !0), s._trigger("fromSortable", e), s.dropped = !1, 
                t.each(s.sortables, function() {
                    this.refreshPositions();
                }));
            });
        }
    }), t.ui.plugin.add("draggable", "cursor", {
        start: function(e, i, s) {
            var n = t("body"), o = s.options;
            n.css("cursor") && (o._cursor = n.css("cursor")), n.css("cursor", o.cursor);
        },
        stop: function(e, i, s) {
            var n = s.options;
            n._cursor && t("body").css("cursor", n._cursor);
        }
    }), t.ui.plugin.add("draggable", "opacity", {
        start: function(e, i, s) {
            var n = t(i.helper), o = s.options;
            n.css("opacity") && (o._opacity = n.css("opacity")), n.css("opacity", o.opacity);
        },
        stop: function(e, i, s) {
            var n = s.options;
            n._opacity && t(i.helper).css("opacity", n._opacity);
        }
    }), t.ui.plugin.add("draggable", "scroll", {
        start: function(t, e, i) {
            i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), 
            i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset());
        },
        drag: function(e, i, s) {
            var n = s.options, o = !1, a = s.scrollParentNotHidden[0], r = s.document[0];
            a !== r && "HTML" !== a.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + a.offsetHeight - e.pageY < n.scrollSensitivity ? a.scrollTop = o = a.scrollTop + n.scrollSpeed : e.pageY - s.overflowOffset.top < n.scrollSensitivity && (a.scrollTop = o = a.scrollTop - n.scrollSpeed)), 
            n.axis && "y" === n.axis || (s.overflowOffset.left + a.offsetWidth - e.pageX < n.scrollSensitivity ? a.scrollLeft = o = a.scrollLeft + n.scrollSpeed : e.pageX - s.overflowOffset.left < n.scrollSensitivity && (a.scrollLeft = o = a.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (e.pageY - t(r).scrollTop() < n.scrollSensitivity ? o = t(r).scrollTop(t(r).scrollTop() - n.scrollSpeed) : t(window).height() - (e.pageY - t(r).scrollTop()) < n.scrollSensitivity && (o = t(r).scrollTop(t(r).scrollTop() + n.scrollSpeed))), 
            n.axis && "y" === n.axis || (e.pageX - t(r).scrollLeft() < n.scrollSensitivity ? o = t(r).scrollLeft(t(r).scrollLeft() - n.scrollSpeed) : t(window).width() - (e.pageX - t(r).scrollLeft()) < n.scrollSensitivity && (o = t(r).scrollLeft(t(r).scrollLeft() + n.scrollSpeed)))), 
            !1 !== o && t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(s, e);
        }
    }), t.ui.plugin.add("draggable", "snap", {
        start: function(e, i, s) {
            var n = s.options;
            s.snapElements = [], t(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function() {
                var e = t(this), i = e.offset();
                this !== s.element[0] && s.snapElements.push({
                    item: this,
                    width: e.outerWidth(),
                    height: e.outerHeight(),
                    top: i.top,
                    left: i.left
                });
            });
        },
        drag: function(e, i, s) {
            var n, o, a, r, h, l, c, u, d, p, f = s.options, g = f.snapTolerance, m = i.offset.left, _ = m + s.helperProportions.width, v = i.offset.top, b = v + s.helperProportions.height;
            for (d = s.snapElements.length - 1; 0 <= d; d--) l = (h = s.snapElements[d].left - s.margins.left) + s.snapElements[d].width, 
            u = (c = s.snapElements[d].top - s.margins.top) + s.snapElements[d].height, _ < h - g || l + g < m || b < c - g || u + g < v || !t.contains(s.snapElements[d].item.ownerDocument, s.snapElements[d].item) ? (s.snapElements[d].snapping && s.options.snap.release && s.options.snap.release.call(s.element, e, t.extend(s._uiHash(), {
                snapItem: s.snapElements[d].item
            })), s.snapElements[d].snapping = !1) : ("inner" !== f.snapMode && (n = g >= Math.abs(c - b), 
            o = g >= Math.abs(u - v), a = g >= Math.abs(h - _), r = g >= Math.abs(l - m), n && (i.position.top = s._convertPositionTo("relative", {
                top: c - s.helperProportions.height,
                left: 0
            }).top), o && (i.position.top = s._convertPositionTo("relative", {
                top: u,
                left: 0
            }).top), a && (i.position.left = s._convertPositionTo("relative", {
                top: 0,
                left: h - s.helperProportions.width
            }).left), r && (i.position.left = s._convertPositionTo("relative", {
                top: 0,
                left: l
            }).left)), p = n || o || a || r, "outer" !== f.snapMode && (n = g >= Math.abs(c - v), 
            o = g >= Math.abs(u - b), a = g >= Math.abs(h - m), r = g >= Math.abs(l - _), n && (i.position.top = s._convertPositionTo("relative", {
                top: c,
                left: 0
            }).top), o && (i.position.top = s._convertPositionTo("relative", {
                top: u - s.helperProportions.height,
                left: 0
            }).top), a && (i.position.left = s._convertPositionTo("relative", {
                top: 0,
                left: h
            }).left), r && (i.position.left = s._convertPositionTo("relative", {
                top: 0,
                left: l - s.helperProportions.width
            }).left)), !s.snapElements[d].snapping && (n || o || a || r || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, e, t.extend(s._uiHash(), {
                snapItem: s.snapElements[d].item
            })), s.snapElements[d].snapping = n || o || a || r || p);
        }
    }), t.ui.plugin.add("draggable", "stack", {
        start: function(e, i, s) {
            var n, o = s.options, a = t.makeArray(t(o.stack)).sort(function(e, i) {
                return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0);
            });
            a.length && (n = parseInt(t(a[0]).css("zIndex"), 10) || 0, t(a).each(function(e) {
                t(this).css("zIndex", n + e);
            }), this.css("zIndex", n + a.length));
        }
    }), t.ui.plugin.add("draggable", "zIndex", {
        start: function(e, i, s) {
            var n = t(i.helper), o = s.options;
            n.css("zIndex") && (o._zIndex = n.css("zIndex")), n.css("zIndex", o.zIndex);
        },
        stop: function(e, i, s) {
            var n = s.options;
            n._zIndex && t(i.helper).css("zIndex", n._zIndex);
        }
    }), t.ui.draggable, t.widget("ui.droppable", {
        version: "1.12.1",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            addClasses: !0,
            greedy: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var e, i = this.options, s = i.accept;
            this.isover = !1, this.isout = !0, this.accept = t.isFunction(s) ? s : function(t) {
                return t.is(s);
            }, this.proportions = function() {
                return arguments.length ? void (e = arguments[0]) : e || (e = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                });
            }, this._addToManager(i.scope), i.addClasses && this._addClass("ui-droppable");
        },
        _addToManager: function(e) {
            t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [], t.ui.ddmanager.droppables[e].push(this);
        },
        _splice: function(t) {
            for (var e = 0; t.length > e; e++) t[e] === this && t.splice(e, 1);
        },
        _destroy: function() {
            var e = t.ui.ddmanager.droppables[this.options.scope];
            this._splice(e);
        },
        _setOption: function(e, i) {
            if ("accept" === e) this.accept = t.isFunction(i) ? i : function(t) {
                return t.is(i);
            }; else if ("scope" === e) {
                var s = t.ui.ddmanager.droppables[this.options.scope];
                this._splice(s), this._addToManager(i);
            }
            this._super(e, i);
        },
        _activate: function(e) {
            var i = t.ui.ddmanager.current;
            this._addActiveClass(), i && this._trigger("activate", e, this.ui(i));
        },
        _deactivate: function(e) {
            var i = t.ui.ddmanager.current;
            this._removeActiveClass(), i && this._trigger("deactivate", e, this.ui(i));
        },
        _over: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(), 
            this._trigger("over", e, this.ui(i)));
        },
        _out: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(), 
            this._trigger("out", e, this.ui(i)));
        },
        _drop: function(e, i) {
            var s = i || t.ui.ddmanager.current, n = !1;
            return !(!s || (s.currentItem || s.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var i = t(this).droppable("instance");
                return i.options.greedy && !i.options.disabled && i.options.scope === s.options.scope && i.accept.call(i.element[0], s.currentItem || s.element) && u(s, t.extend(i, {
                    offset: i.element.offset()
                }), i.options.tolerance, e) ? !(n = !0) : void 0;
            }), !n && (!!this.accept.call(this.element[0], s.currentItem || s.element) && (this._removeActiveClass(), 
            this._removeHoverClass(), this._trigger("drop", e, this.ui(s)), this.element)));
        },
        ui: function(t) {
            return {
                draggable: t.currentItem || t.element,
                helper: t.helper,
                position: t.position,
                offset: t.positionAbs
            };
        },
        _addHoverClass: function() {
            this._addClass("ui-droppable-hover");
        },
        _removeHoverClass: function() {
            this._removeClass("ui-droppable-hover");
        },
        _addActiveClass: function() {
            this._addClass("ui-droppable-active");
        },
        _removeActiveClass: function() {
            this._removeClass("ui-droppable-active");
        }
    });
    var u = t.ui.intersect = function() {
        function t(t, e, i) {
            return e <= t && t < e + i;
        }
        return function(e, i, s, n) {
            if (!i.offset) return !1;
            var o = (e.positionAbs || e.position.absolute).left + e.margins.left, a = (e.positionAbs || e.position.absolute).top + e.margins.top, r = o + e.helperProportions.width, h = a + e.helperProportions.height, l = i.offset.left, c = i.offset.top, u = l + i.proportions().width, d = c + i.proportions().height;
            switch (s) {
              case "fit":
                return l <= o && r <= u && c <= a && h <= d;

              case "intersect":
                return o + e.helperProportions.width / 2 > l && u > r - e.helperProportions.width / 2 && a + e.helperProportions.height / 2 > c && d > h - e.helperProportions.height / 2;

              case "pointer":
                return t(n.pageY, c, i.proportions().height) && t(n.pageX, l, i.proportions().width);

              case "touch":
                return (c <= a && a <= d || c <= h && h <= d || a < c && d < h) && (l <= o && o <= u || l <= r && r <= u || o < l && u < r);

              default:
                return !1;
            }
        };
    }();
    !(t.ui.ddmanager = {
        current: null,
        droppables: {
            default: []
        },
        prepareOffsets: function(e, i) {
            var s, n, o = t.ui.ddmanager.droppables[e.options.scope] || [], a = i ? i.type : null, r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
            t: for (s = 0; o.length > s; s++) if (!(o[s].options.disabled || e && !o[s].accept.call(o[s].element[0], e.currentItem || e.element))) {
                for (n = 0; r.length > n; n++) if (r[n] === o[s].element[0]) {
                    o[s].proportions().height = 0;
                    continue t;
                }
                o[s].visible = "none" !== o[s].element.css("display"), o[s].visible && ("mousedown" === a && o[s]._activate.call(o[s], i), 
                o[s].offset = o[s].element.offset(), o[s].proportions({
                    width: o[s].element[0].offsetWidth,
                    height: o[s].element[0].offsetHeight
                }));
            }
        },
        drop: function(e, i) {
            var s = !1;
            return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function() {
                this.options && (!this.options.disabled && this.visible && u(e, this, this.options.tolerance, i) && (s = this._drop.call(this, i) || s), 
                !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, 
                this.isover = !1, this._deactivate.call(this, i)));
            }), s;
        },
        dragStart: function(e, i) {
            e.element.parentsUntil("body").on("scroll.droppable", function() {
                e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i);
            });
        },
        drag: function(e, i) {
            e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var s, n, o, a = u(e, this, this.options.tolerance, i), r = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
                    r && (this.options.greedy && (n = this.options.scope, (o = this.element.parents(":data(ui-droppable)").filter(function() {
                        return t(this).droppable("instance").options.scope === n;
                    })).length && ((s = t(o[0]).droppable("instance")).greedyChild = "isover" === r)), 
                    s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, 
                    this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), 
                    s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i)));
                }
            });
        },
        dragStop: function(e, i) {
            e.element.parentsUntil("body").off("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i);
        }
    }) !== t.uiBackCompat && t.widget("ui.droppable", t.ui.droppable, {
        options: {
            hoverClass: !1,
            activeClass: !1
        },
        _addActiveClass: function() {
            this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass);
        },
        _removeActiveClass: function() {
            this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass);
        },
        _addHoverClass: function() {
            this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass);
        },
        _removeHoverClass: function() {
            this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass);
        }
    }), t.ui.droppable, t.widget("ui.resizable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            classes: {
                "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
            },
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function(t) {
            return parseFloat(t) || 0;
        },
        _isNumber: function(t) {
            return !isNaN(parseFloat(t));
        },
        _hasScroll: function(e, i) {
            if ("hidden" === t(e).css("overflow")) return !1;
            var s = i && "left" === i ? "scrollLeft" : "scrollTop", n = !1;
            return 0 < e[s] || (e[s] = 1, n = 0 < e[s], e[s] = 0, n);
        },
        _create: function() {
            var e, i = this.options, s = this;
            this._addClass("ui-resizable"), t.extend(this, {
                _aspectRatio: !!i.aspectRatio,
                aspectRatio: i.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
            }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), 
            this.elementIsWrapper = !0, e = {
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom"),
                marginLeft: this.originalElement.css("marginLeft")
            }, this.element.css(e), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), 
            this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css(e), this._proportionallyResize()), this._setupHandles(), 
            i.autoHide && t(this.element).on("mouseenter", function() {
                i.disabled || (s._removeClass("ui-resizable-autohide"), s._handles.show());
            }).on("mouseleave", function() {
                i.disabled || s.resizing || (s._addClass("ui-resizable-autohide"), s._handles.hide());
            }), this._mouseInit();
        },
        _destroy: function() {
            this._mouseDestroy();
            var e, i = function(e) {
                t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove();
            };
            return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
                position: e.css("position"),
                width: e.outerWidth(),
                height: e.outerHeight(),
                top: e.css("top"),
                left: e.css("left")
            }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), 
            i(this.originalElement), this;
        },
        _setOption: function(t, e) {
            switch (this._super(t, e), t) {
              case "handles":
                this._removeHandles(), this._setupHandles();
            }
        },
        _setupHandles: function() {
            var e, i, s, n, o, a = this.options, r = this;
            if (this.handles = a.handles || (t(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se"), this._handles = t(), this.handles.constructor === String) for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), 
            s = this.handles.split(","), this.handles = {}, i = 0; s.length > i; i++) n = "ui-resizable-" + (e = t.trim(s[i])), 
            o = t("<div>"), this._addClass(o, "ui-resizable-handle " + n), o.css({
                zIndex: a.zIndex
            }), this.handles[e] = ".ui-resizable-" + e, this.element.append(o);
            this._renderAxis = function(e) {
                var i, s, n, o;
                for (i in e = e || this.element, this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]), 
                this._on(this.handles[i], {
                    mousedown: r._mouseDown
                })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (s = t(this.handles[i], this.element), 
                o = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = [ "padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left" ].join(""), 
                e.css(n, o), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i]);
            }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), 
            this._handles.disableSelection(), this._handles.on("mouseover", function() {
                r.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), 
                r.axis = o && o[1] ? o[1] : "se");
            }), a.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"));
        },
        _removeHandles: function() {
            this._handles.remove();
        },
        _mouseCapture: function(e) {
            var i, s, n = !1;
            for (i in this.handles) ((s = t(this.handles[i])[0]) === e.target || t.contains(s, e.target)) && (n = !0);
            return !this.options.disabled && n;
        },
        _mouseStart: function(e) {
            var i, s, n, o = this.options, a = this.element;
            return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), 
            s = this._num(this.helper.css("top")), o.containment && (i += t(o.containment).scrollLeft() || 0, 
            s += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: i,
                top: s
            }, this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: a.width(),
                height: a.height()
            }, this.originalSize = this._helper ? {
                width: a.outerWidth(),
                height: a.outerHeight()
            } : {
                width: a.width(),
                height: a.height()
            }, this.sizeDiff = {
                width: a.outerWidth() - a.width(),
                height: a.outerHeight() - a.height()
            }, this.originalPosition = {
                left: i,
                top: s
            }, this.originalMousePosition = {
                left: e.pageX,
                top: e.pageY
            }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, 
            n = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === n ? this.axis + "-resize" : n), 
            this._addClass("ui-resizable-resizing"), this._propagate("start", e), !0;
        },
        _mouseDrag: function(e) {
            var i, s, n = this.originalMousePosition, o = this.axis, a = e.pageX - n.left || 0, r = e.pageY - n.top || 0, h = this._change[o];
            return this._updatePrevProperties(), h && (i = h.apply(this, [ e, a, r ]), this._updateVirtualBoundaries(e.shiftKey), 
            (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), 
            this._updateCache(i), this._propagate("resize", e), s = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), 
            t.isEmptyObject(s) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), 
            this._applyChanges())), !1;
        },
        _mouseStop: function(e) {
            this.resizing = !1;
            var i, s, n, o, a, r, h, l = this.options, c = this;
            return this._helper && (n = (s = (i = this._proportionallyResizeElements).length && /textarea/i.test(i[0].nodeName)) && this._hasScroll(i[0], "left") ? 0 : c.sizeDiff.height, 
            o = s ? 0 : c.sizeDiff.width, a = {
                width: c.helper.width() - o,
                height: c.helper.height() - n
            }, r = parseFloat(c.element.css("left")) + (c.position.left - c.originalPosition.left) || null, 
            h = parseFloat(c.element.css("top")) + (c.position.top - c.originalPosition.top) || null, 
            l.animate || this.element.css(t.extend(a, {
                top: h,
                left: r
            })), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !l.animate && this._proportionallyResize()), 
            t("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", e), 
            this._helper && this.helper.remove(), !1;
        },
        _updatePrevProperties: function() {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            }, this.prevSize = {
                width: this.size.width,
                height: this.size.height
            };
        },
        _applyChanges: function() {
            var t = {};
            return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), 
            this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), 
            this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), 
            this.helper.css(t), t;
        },
        _updateVirtualBoundaries: function(t) {
            var e, i, s, n, o, a = this.options;
            o = {
                minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0,
                maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0,
                minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0,
                maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0
            }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, s = o.minWidth / this.aspectRatio, 
            i = o.maxHeight * this.aspectRatio, n = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), 
            s > o.minHeight && (o.minHeight = s), o.maxWidth > i && (o.maxWidth = i), o.maxHeight > n && (o.maxHeight = n)), 
            this._vBoundaries = o;
        },
        _updateCache: function(t) {
            this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), 
            this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), 
            this._isNumber(t.width) && (this.size.width = t.width);
        },
        _updateRatio: function(t) {
            var e = this.position, i = this.size, s = this.axis;
            return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), 
            "sw" === s && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === s && (t.top = e.top + (i.height - t.height), 
            t.left = e.left + (i.width - t.width)), t;
        },
        _respectSize: function(t) {
            var e = this._vBoundaries, i = this.axis, s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width, n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height, o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width, a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height, r = this.originalPosition.left + this.originalSize.width, h = this.originalPosition.top + this.originalSize.height, l = /sw|nw|w/.test(i), c = /nw|ne|n/.test(i);
            return o && (t.width = e.minWidth), a && (t.height = e.minHeight), s && (t.width = e.maxWidth), 
            n && (t.height = e.maxHeight), o && l && (t.left = r - e.minWidth), s && l && (t.left = r - e.maxWidth), 
            a && c && (t.top = h - e.minHeight), n && c && (t.top = h - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, 
            t;
        },
        _getPaddingPlusBorderDimensions: function(t) {
            for (var e = 0, i = [], s = [ t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth") ], n = [ t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft") ]; e < 4; e++) i[e] = parseFloat(s[e]) || 0, 
            i[e] += parseFloat(n[e]) || 0;
            return {
                height: i[0] + i[2],
                width: i[1] + i[3]
            };
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length) for (var t, e = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > e; e++) t = this._proportionallyResizeElements[e], 
            this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), 
            t.css({
                height: i.height() - this.outerDimensions.height || 0,
                width: i.width() - this.outerDimensions.width || 0
            });
        },
        _renderProxy: function() {
            var e = this.element, i = this.options;
            this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), 
            this._addClass(this.helper, this._helper), this.helper.css({
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++i.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element;
        },
        _change: {
            e: function(t, e) {
                return {
                    width: this.originalSize.width + e
                };
            },
            w: function(t, e) {
                var i = this.originalSize;
                return {
                    left: this.originalPosition.left + e,
                    width: i.width - e
                };
            },
            n: function(t, e, i) {
                var s = this.originalSize;
                return {
                    top: this.originalPosition.top + i,
                    height: s.height - i
                };
            },
            s: function(t, e, i) {
                return {
                    height: this.originalSize.height + i
                };
            },
            se: function(e, i, s) {
                return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [ e, i, s ]));
            },
            sw: function(e, i, s) {
                return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [ e, i, s ]));
            },
            ne: function(e, i, s) {
                return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [ e, i, s ]));
            },
            nw: function(e, i, s) {
                return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [ e, i, s ]));
            }
        },
        _propagate: function(e, i) {
            t.ui.plugin.call(this, e, [ i, this.ui() ]), "resize" !== e && this._trigger(e, i, this.ui());
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            };
        }
    }), t.ui.plugin.add("resizable", "animate", {
        stop: function(e) {
            var i = t(this).resizable("instance"), s = i.options, n = i._proportionallyResizeElements, o = n.length && /textarea/i.test(n[0].nodeName), a = o && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height, r = o ? 0 : i.sizeDiff.width, h = {
                width: i.size.width - r,
                height: i.size.height - a
            }, l = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null, c = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(t.extend(h, c && l ? {
                top: c,
                left: l
            } : {}), {
                duration: s.animateDuration,
                easing: s.animateEasing,
                step: function() {
                    var s = {
                        width: parseFloat(i.element.css("width")),
                        height: parseFloat(i.element.css("height")),
                        top: parseFloat(i.element.css("top")),
                        left: parseFloat(i.element.css("left"))
                    };
                    n && n.length && t(n[0]).css({
                        width: s.width,
                        height: s.height
                    }), i._updateCache(s), i._propagate("resize", e);
                }
            });
        }
    }), t.ui.plugin.add("resizable", "containment", {
        start: function() {
            var e, i, s, n, o, a, r, h = t(this).resizable("instance"), l = h.options, c = h.element, u = l.containment, d = u instanceof t ? u.get(0) : /parent/.test(u) ? c.parent().get(0) : u;
            d && (h.containerElement = t(d), /document/.test(u) || u === document ? (h.containerOffset = {
                left: 0,
                top: 0
            }, h.containerPosition = {
                left: 0,
                top: 0
            }, h.parentData = {
                element: t(document),
                left: 0,
                top: 0,
                width: t(document).width(),
                height: t(document).height() || document.body.parentNode.scrollHeight
            }) : (e = t(d), i = [], t([ "Top", "Right", "Left", "Bottom" ]).each(function(t, s) {
                i[t] = h._num(e.css("padding" + s));
            }), h.containerOffset = e.offset(), h.containerPosition = e.position(), h.containerSize = {
                height: e.innerHeight() - i[3],
                width: e.innerWidth() - i[1]
            }, s = h.containerOffset, n = h.containerSize.height, o = h.containerSize.width, 
            a = h._hasScroll(d, "left") ? d.scrollWidth : o, r = h._hasScroll(d) ? d.scrollHeight : n, 
            h.parentData = {
                element: d,
                left: s.left,
                top: s.top,
                width: a,
                height: r
            }));
        },
        resize: function(e) {
            var i, s, n, o, a = t(this).resizable("instance"), r = a.options, h = a.containerOffset, l = a.position, c = a._aspectRatio || e.shiftKey, u = {
                top: 0,
                left: 0
            }, d = a.containerElement, p = !0;
            d[0] !== document && /static/.test(d.css("position")) && (u = h), l.left < (a._helper ? h.left : 0) && (a.size.width = a.size.width + (a._helper ? a.position.left - h.left : a.position.left - u.left), 
            c && (a.size.height = a.size.width / a.aspectRatio, p = !1), a.position.left = r.helper ? h.left : 0), 
            l.top < (a._helper ? h.top : 0) && (a.size.height = a.size.height + (a._helper ? a.position.top - h.top : a.position.top), 
            c && (a.size.width = a.size.height * a.aspectRatio, p = !1), a.position.top = a._helper ? h.top : 0), 
            n = a.containerElement.get(0) === a.element.parent().get(0), o = /relative|absolute/.test(a.containerElement.css("position")), 
            n && o ? (a.offset.left = a.parentData.left + a.position.left, a.offset.top = a.parentData.top + a.position.top) : (a.offset.left = a.element.offset().left, 
            a.offset.top = a.element.offset().top), i = Math.abs(a.sizeDiff.width + (a._helper ? a.offset.left - u.left : a.offset.left - h.left)), 
            s = Math.abs(a.sizeDiff.height + (a._helper ? a.offset.top - u.top : a.offset.top - h.top)), 
            i + a.size.width >= a.parentData.width && (a.size.width = a.parentData.width - i, 
            c && (a.size.height = a.size.width / a.aspectRatio, p = !1)), s + a.size.height >= a.parentData.height && (a.size.height = a.parentData.height - s, 
            c && (a.size.width = a.size.height * a.aspectRatio, p = !1)), p || (a.position.left = a.prevPosition.left, 
            a.position.top = a.prevPosition.top, a.size.width = a.prevSize.width, a.size.height = a.prevSize.height);
        },
        stop: function() {
            var e = t(this).resizable("instance"), i = e.options, s = e.containerOffset, n = e.containerPosition, o = e.containerElement, a = t(e.helper), r = a.offset(), h = a.outerWidth() - e.sizeDiff.width, l = a.outerHeight() - e.sizeDiff.height;
            e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
                left: r.left - n.left - s.left,
                width: h,
                height: l
            }), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
                left: r.left - n.left - s.left,
                width: h,
                height: l
            });
        }
    }), t.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var i = t(this).resizable("instance").options;
            t(i.alsoResize).each(function() {
                var e = t(this);
                e.data("ui-resizable-alsoresize", {
                    width: parseFloat(e.width()),
                    height: parseFloat(e.height()),
                    left: parseFloat(e.css("left")),
                    top: parseFloat(e.css("top"))
                });
            });
        },
        resize: function(e, i) {
            var s = t(this).resizable("instance"), n = s.options, o = s.originalSize, a = s.originalPosition, r = {
                height: s.size.height - o.height || 0,
                width: s.size.width - o.width || 0,
                top: s.position.top - a.top || 0,
                left: s.position.left - a.left || 0
            };
            t(n.alsoResize).each(function() {
                var e = t(this), s = t(this).data("ui-resizable-alsoresize"), n = {}, o = e.parents(i.originalElement[0]).length ? [ "width", "height" ] : [ "width", "height", "top", "left" ];
                t.each(o, function(t, e) {
                    var i = (s[e] || 0) + (r[e] || 0);
                    i && 0 <= i && (n[e] = i || null);
                }), e.css(n);
            });
        },
        stop: function() {
            t(this).removeData("ui-resizable-alsoresize");
        }
    }), t.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var e = t(this).resizable("instance"), i = e.size;
            e.ghost = e.originalElement.clone(), e.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: i.height,
                width: i.width,
                margin: 0,
                left: 0,
                top: 0
            }), e._addClass(e.ghost, "ui-resizable-ghost"), !1 !== t.uiBackCompat && "string" == typeof e.options.ghost && e.ghost.addClass(this.options.ghost), 
            e.ghost.appendTo(e.helper);
        },
        resize: function() {
            var e = t(this).resizable("instance");
            e.ghost && e.ghost.css({
                position: "relative",
                height: e.size.height,
                width: e.size.width
            });
        },
        stop: function() {
            var e = t(this).resizable("instance");
            e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0));
        }
    }), t.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var e, i = t(this).resizable("instance"), s = i.options, n = i.size, o = i.originalSize, a = i.originalPosition, r = i.axis, h = "number" == typeof s.grid ? [ s.grid, s.grid ] : s.grid, l = h[0] || 1, c = h[1] || 1, u = Math.round((n.width - o.width) / l) * l, d = Math.round((n.height - o.height) / c) * c, p = o.width + u, f = o.height + d, g = s.maxWidth && p > s.maxWidth, m = s.maxHeight && f > s.maxHeight, _ = s.minWidth && s.minWidth > p, v = s.minHeight && s.minHeight > f;
            s.grid = h, _ && (p += l), v && (f += c), g && (p -= l), m && (f -= c), /^(se|s|e)$/.test(r) ? (i.size.width = p, 
            i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = a.top - d) : /^(sw)$/.test(r) ? (i.size.width = p, 
            i.size.height = f, i.position.left = a.left - u) : ((f - c <= 0 || p - l <= 0) && (e = i._getPaddingPlusBorderDimensions(this)), 
            0 < f - c ? (i.size.height = f, i.position.top = a.top - d) : (f = c - e.height, 
            i.size.height = f, i.position.top = a.top + o.height - f), 0 < p - l ? (i.size.width = p, 
            i.position.left = a.left - u) : (p = l - e.width, i.size.width = p, i.position.left = a.left + o.width - p));
        }
    }), t.ui.resizable, t.widget("ui.selectable", t.ui.mouse, {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var e = this;
            this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                e.elementPos = t(e.element[0]).offset(), e.selectees = t(e.options.filter, e.element[0]), 
                e._addClass(e.selectees, "ui-selectee"), e.selectees.each(function() {
                    var i = t(this), s = i.offset(), n = {
                        left: s.left - e.elementPos.left,
                        top: s.top - e.elementPos.top
                    };
                    t.data(this, "selectable-item", {
                        element: this,
                        $element: i,
                        left: n.left,
                        top: n.top,
                        right: n.left + i.outerWidth(),
                        bottom: n.top + i.outerHeight(),
                        startselected: !1,
                        selected: i.hasClass("ui-selected"),
                        selecting: i.hasClass("ui-selecting"),
                        unselecting: i.hasClass("ui-unselecting")
                    });
                });
            }, this.refresh(), this._mouseInit(), this.helper = t("<div>"), this._addClass(this.helper, "ui-selectable-helper");
        },
        _destroy: function() {
            this.selectees.removeData("selectable-item"), this._mouseDestroy();
        },
        _mouseStart: function(e) {
            var i = this, s = this.options;
            this.opos = [ e.pageX, e.pageY ], this.elementPos = t(this.element[0]).offset(), 
            this.options.disabled || (this.selectees = t(s.filter, this.element[0]), this._trigger("start", e), 
            t(s.appendTo).append(this.helper), this.helper.css({
                left: e.pageX,
                top: e.pageY,
                width: 0,
                height: 0
            }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                var s = t.data(this, "selectable-item");
                s.startselected = !0, e.metaKey || e.ctrlKey || (i._removeClass(s.$element, "ui-selected"), 
                s.selected = !1, i._addClass(s.$element, "ui-unselecting"), s.unselecting = !0, 
                i._trigger("unselecting", e, {
                    unselecting: s.element
                }));
            }), t(e.target).parents().addBack().each(function() {
                var s, n = t.data(this, "selectable-item");
                return n ? (s = !e.metaKey && !e.ctrlKey || !n.$element.hasClass("ui-selected"), 
                i._removeClass(n.$element, s ? "ui-unselecting" : "ui-selected")._addClass(n.$element, s ? "ui-selecting" : "ui-unselecting"), 
                n.unselecting = !s, n.selecting = s, (n.selected = s) ? i._trigger("selecting", e, {
                    selecting: n.element
                }) : i._trigger("unselecting", e, {
                    unselecting: n.element
                }), !1) : void 0;
            }));
        },
        _mouseDrag: function(e) {
            if (this.dragged = !0, !this.options.disabled) {
                var i, s = this, n = this.options, o = this.opos[0], a = this.opos[1], r = e.pageX, h = e.pageY;
                return r < o && (i = r, r = o, o = i), h < a && (i = h, h = a, a = i), this.helper.css({
                    left: o,
                    top: a,
                    width: r - o,
                    height: h - a
                }), this.selectees.each(function() {
                    var i = t.data(this, "selectable-item"), l = !1, c = {};
                    i && i.element !== s.element[0] && (c.left = i.left + s.elementPos.left, c.right = i.right + s.elementPos.left, 
                    c.top = i.top + s.elementPos.top, c.bottom = i.bottom + s.elementPos.top, "touch" === n.tolerance ? l = !(c.left > r || o > c.right || c.top > h || a > c.bottom) : "fit" === n.tolerance && (l = c.left > o && r > c.right && c.top > a && h > c.bottom), 
                    l ? (i.selected && (s._removeClass(i.$element, "ui-selected"), i.selected = !1), 
                    i.unselecting && (s._removeClass(i.$element, "ui-unselecting"), i.unselecting = !1), 
                    i.selecting || (s._addClass(i.$element, "ui-selecting"), i.selecting = !0, s._trigger("selecting", e, {
                        selecting: i.element
                    }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (s._removeClass(i.$element, "ui-selecting"), 
                    i.selecting = !1, s._addClass(i.$element, "ui-selected"), i.selected = !0) : (s._removeClass(i.$element, "ui-selecting"), 
                    i.selecting = !1, i.startselected && (s._addClass(i.$element, "ui-unselecting"), 
                    i.unselecting = !0), s._trigger("unselecting", e, {
                        unselecting: i.element
                    }))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (s._removeClass(i.$element, "ui-selected"), 
                    i.selected = !1, s._addClass(i.$element, "ui-unselecting"), i.unselecting = !0, 
                    s._trigger("unselecting", e, {
                        unselecting: i.element
                    })))));
                }), !1;
            }
        },
        _mouseStop: function(e) {
            var i = this;
            return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function() {
                var s = t.data(this, "selectable-item");
                i._removeClass(s.$element, "ui-unselecting"), s.unselecting = !1, s.startselected = !1, 
                i._trigger("unselected", e, {
                    unselected: s.element
                });
            }), t(".ui-selecting", this.element[0]).each(function() {
                var s = t.data(this, "selectable-item");
                i._removeClass(s.$element, "ui-selecting")._addClass(s.$element, "ui-selected"), 
                s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", e, {
                    selected: s.element
                });
            }), this._trigger("stop", e), this.helper.remove(), !1;
        }
    }), t.widget("ui.sortable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function(t, e, i) {
            return e <= t && t < e + i;
        },
        _isFloating: function(t) {
            return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"));
        },
        _create: function() {
            this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), 
            this._mouseInit(), this._setHandleClassName(), this.ready = !0;
        },
        _setOption: function(t, e) {
            this._super(t, e), "handle" === t && this._setHandleClassName();
        },
        _setHandleClassName: function() {
            var e = this;
            this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), 
            t.each(this.items, function() {
                e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle");
            });
        },
        _destroy: function() {
            this._mouseDestroy();
            for (var t = this.items.length - 1; 0 <= t; t--) this.items[t].item.removeData(this.widgetName + "-item");
            return this;
        },
        _mouseCapture: function(e, i) {
            var s = null, n = !1, o = this;
            return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(e), 
            t(e.target).parents().each(function() {
                return t.data(this, o.widgetName + "-item") === o ? (s = t(this), !1) : void 0;
            }), t.data(e.target, o.widgetName + "-item") === o && (s = t(e.target)), !!s && (!(this.options.handle && !i && (t(this.options.handle, s).find("*").addBack().each(function() {
                this === e.target && (n = !0);
            }), !n)) && (this.currentItem = s, this._removeCurrentsFromItems(), !0))));
        },
        _mouseStart: function(e, i, s) {
            var n, o, a = this.options;
            if ((this.currentContainer = this).refreshPositions(), this.helper = this._createHelper(e), 
            this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), 
            this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, t.extend(this.offset, {
                click: {
                    left: e.pageX - this.offset.left,
                    top: e.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), 
            this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, 
            this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), 
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), 
            a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (o = this.document.find("body"), 
            this.storedCursor = o.css("cursor"), o.css("cursor", a.cursor), this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)), 
            a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), 
            this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), 
            this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), 
            this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), 
            !s) for (n = this.containers.length - 1; 0 <= n; n--) this.containers[n]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), 
            this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(e), 
            !0;
        },
        _mouseDrag: function(e) {
            var i, s, n, o, a = this.options, r = !1;
            for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), 
            this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), 
            this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - this.document.scrollTop() < a.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - a.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < a.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + a.scrollSpeed)), 
            e.pageX - this.document.scrollLeft() < a.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - a.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < a.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + a.scrollSpeed))), 
            !1 !== r && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), 
            this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), 
            this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), 
            i = this.items.length - 1; 0 <= i; i--) if (n = (s = this.items[i]).item[0], (o = this._intersectsWithPointer(s)) && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== n && !t.contains(this.placeholder[0], n) && ("semi-dynamic" !== this.options.type || !t.contains(this.element[0], n))) {
                if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
                this._rearrange(e, s), this._trigger("change", e, this._uiHash());
                break;
            }
            return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), 
            this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, 
            !1;
        },
        _mouseStop: function(e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), 
                this.options.revert) {
                    var s = this, n = this.placeholder.offset(), o = this.options.axis, a = {};
                    o && "x" !== o || (a.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), 
                    o && "y" !== o || (a.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), 
                    this.reverting = !0, t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function() {
                        s._clear(e);
                    });
                } else this._clear(e, i);
                return !1;
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp(new t.Event("mouseup", {
                    target: null
                })), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), 
                this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                for (var e = this.containers.length - 1; 0 <= e; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), 
                this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), 
                this.containers[e].containerCache.over = 0);
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), 
            "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), 
            t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), 
            this;
        },
        serialize: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected), s = [];
            return e = e || {}, t(i).each(function() {
                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]));
            }), !s.length && e.key && s.push(e.key + "="), s.join("&");
        },
        toArray: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected), s = [];
            return e = e || {}, i.each(function() {
                s.push(t(e.item || this).attr(e.attribute || "id") || "");
            }), s;
        },
        _intersectsWith: function(t) {
            var e = this.positionAbs.left, i = e + this.helperProportions.width, s = this.positionAbs.top, n = s + this.helperProportions.height, o = t.left, a = o + t.width, r = t.top, h = r + t.height, l = this.offset.click.top, c = this.offset.click.left, u = "x" === this.options.axis || r < s + l && s + l < h, d = "y" === this.options.axis || o < e + c && e + c < a, p = u && d;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > o && a > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2;
        },
        _intersectsWithPointer: function(t) {
            var e, i, s = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height), n = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width);
            return !!(s && n) && (e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), 
            this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1));
        },
        _intersectsWithSides: function(t) {
            var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height), i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width), s = this._getDragVerticalDirection(), n = this._getDragHorizontalDirection();
            return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && e || "up" === s && !e);
        },
        _getDragVerticalDirection: function() {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== t && (0 < t ? "down" : "up");
        },
        _getDragHorizontalDirection: function() {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== t && (0 < t ? "right" : "left");
        },
        refresh: function(t) {
            return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), 
            this;
        },
        _connectWith: function() {
            var t = this.options;
            return t.connectWith.constructor === String ? [ t.connectWith ] : t.connectWith;
        },
        _getItemsAsjQuery: function(e) {
            function i() {
                r.push(this);
            }
            var s, n, o, a, r = [], h = [], l = this._connectWith();
            if (l && e) for (s = l.length - 1; 0 <= s; s--) for (n = (o = t(l[s], this.document[0])).length - 1; 0 <= n; n--) (a = t.data(o[n], this.widgetFullName)) && a !== this && !a.options.disabled && h.push([ t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a ]);
            for (h.push([ t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this ]), 
            s = h.length - 1; 0 <= s; s--) h[s][0].each(i);
            return t(r);
        },
        _removeCurrentsFromItems: function() {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items, function(t) {
                for (var i = 0; e.length > i; i++) if (e[i] === t.item[0]) return !1;
                return !0;
            });
        },
        _refreshItems: function(e) {
            this.items = [], this.containers = [ this ];
            var i, s, n, o, a, r, h, l, c = this.items, u = [ [ t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                item: this.currentItem
            }) : t(this.options.items, this.element), this ] ], d = this._connectWith();
            if (d && this.ready) for (i = d.length - 1; 0 <= i; i--) for (s = (n = t(d[i], this.document[0])).length - 1; 0 <= s; s--) (o = t.data(n[s], this.widgetFullName)) && o !== this && !o.options.disabled && (u.push([ t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
                item: this.currentItem
            }) : t(o.options.items, o.element), o ]), this.containers.push(o));
            for (i = u.length - 1; 0 <= i; i--) for (a = u[i][1], s = 0, l = (r = u[i][0]).length; s < l; s++) (h = t(r[s])).data(this.widgetName + "-item", a), 
            c.push({
                item: h,
                instance: a,
                width: 0,
                height: 0,
                left: 0,
                top: 0
            });
        },
        refreshPositions: function(e) {
            var i, s, n, o;
            for (this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), 
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()), 
            i = this.items.length - 1; 0 <= i; i--) (s = this.items[i]).instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, 
            e || (s.width = n.outerWidth(), s.height = n.outerHeight()), o = n.offset(), s.left = o.left, 
            s.top = o.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this); else for (i = this.containers.length - 1; 0 <= i; i--) o = this.containers[i].element.offset(), 
            this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, 
            this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), 
            this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this;
        },
        _createPlaceholder: function(e) {
            var i, s = (e = e || this).options;
            s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
                element: function() {
                    var s = e.currentItem[0].nodeName.toLowerCase(), n = t("<" + s + ">", e.document[0]);
                    return e._addClass(n, "ui-sortable-placeholder", i || e.currentItem[0].className)._removeClass(n, "ui-sortable-helper"), 
                    "tbody" === s ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(n)) : "tr" === s ? e._createTrPlaceholder(e.currentItem, n) : "img" === s && n.attr("src", e.currentItem.attr("src")), 
                    i || n.css("visibility", "hidden"), n;
                },
                update: function(t, n) {
                    (!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), 
                    n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)));
                }
            }), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), 
            s.placeholder.update(e, e.placeholder);
        },
        _createTrPlaceholder: function(e, i) {
            var s = this;
            e.children().each(function() {
                t("<td>&#160;</td>", s.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i);
            });
        },
        _contactContainers: function(e) {
            var i, s, n, o, a, r, h, l, c, u, d = null, p = null;
            for (i = this.containers.length - 1; 0 <= i; i--) if (!t.contains(this.currentItem[0], this.containers[i].element[0])) if (this._intersectsWith(this.containers[i].containerCache)) {
                if (d && t.contains(this.containers[i].element[0], d.element[0])) continue;
                d = this.containers[i], p = i;
            } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), 
            this.containers[i].containerCache.over = 0);
            if (d) if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), 
            this.containers[p].containerCache.over = 1); else {
                for (n = 1e4, o = null, a = (c = d.floating || this._isFloating(this.currentItem)) ? "left" : "top", 
                r = c ? "width" : "height", u = c ? "pageX" : "pageY", s = this.items.length - 1; 0 <= s; s--) t.contains(this.containers[p].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (h = this.items[s].item.offset()[a], 
                l = !1, e[u] - h > this.items[s][r] / 2 && (l = !0), n > Math.abs(e[u] - h) && (n = Math.abs(e[u] - h), 
                o = this.items[s], this.direction = l ? "up" : "down"));
                if (!o && !this.options.dropOnEmpty) return;
                if (this.currentContainer === this.containers[p]) return void (this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), 
                this.currentContainer.containerCache.over = 1));
                o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0), 
                this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), 
                this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), 
                this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1;
            }
        },
        _createHelper: function(e) {
            var i = this.options, s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [ e, this.currentItem ])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), 
            s[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), 
            (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), 
            s;
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), 
            "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top);
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), 
            e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            };
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                };
            }
            return {
                top: 0,
                left: 0
            };
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            };
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            };
        },
        _setContainment: function() {
            var e, i, s, n = this.options;
            "parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [ 0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === n.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ]), 
            /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), 
            s = "hidden" !== t(e).css("overflow"), this.containment = [ i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top ]);
        },
        _convertPositionTo: function(e, i) {
            i || (i = this.position);
            var s = "absolute" === e ? 1 : -1, n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, o = /(html|body)/i.test(n[0].tagName);
            return {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s,
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s
            };
        },
        _generatePosition: function(e) {
            var i, s, n = this.options, o = e.pageX, a = e.pageY, r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, h = /(html|body)/i.test(r[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), 
            this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), 
            e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), 
            e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), 
            e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), 
            n.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1], 
            a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, 
            s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0], 
            o = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), 
            {
                top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())
            };
        },
        _rearrange: function(t, e, i, s) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), 
            this.counter = this.counter ? ++this.counter : 1;
            var n = this.counter;
            this._delay(function() {
                n === this.counter && this.refreshPositions(!s);
            });
        },
        _clear: function(t, e) {
            function i(t, e, i) {
                return function(s) {
                    i._trigger(t, s, e._uiHash(e));
                };
            }
            this.reverting = !1;
            var s, n = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), 
            this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (s in this._storedCSS) ("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
                this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper");
            } else this.currentItem.show();
            for (this.fromOutside && !e && n.push(function(t) {
                this._trigger("receive", t, this._uiHash(this.fromOutside));
            }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || n.push(function(t) {
                this._trigger("update", t, this._uiHash());
            }), this !== this.currentContainer && (e || (n.push(function(t) {
                this._trigger("remove", t, this._uiHash());
            }), n.push(function(t) {
                return function(e) {
                    t._trigger("receive", e, this._uiHash(this));
                };
            }.call(this, this.currentContainer)), n.push(function(t) {
                return function(e) {
                    t._trigger("update", e, this._uiHash(this));
                };
            }.call(this, this.currentContainer)))), s = this.containers.length - 1; 0 <= s; s--) e || n.push(i("deactivate", this, this.containers[s])), 
            this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), 
            this.containers[s].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), 
            this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), 
            this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), 
            this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), 
            this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), 
            this.helper = null), !e) {
                for (s = 0; n.length > s; s++) n[s].call(this, t);
                this._trigger("stop", t, this._uiHash());
            }
            return this.fromOutside = !1, !this.cancelHelperRemoval;
        },
        _trigger: function() {
            !1 === t.Widget.prototype._trigger.apply(this, arguments) && this.cancel();
        },
        _uiHash: function(e) {
            var i = e || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || t([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: e ? e.element : null
            };
        }
    }), t.widget("ui.accordion", {
        version: "1.12.1",
        options: {
            active: 0,
            animate: {},
            classes: {
                "ui-accordion-header": "ui-corner-top",
                "ui-accordion-header-collapsed": "ui-corner-all",
                "ui-accordion-content": "ui-corner-bottom"
            },
            collapsible: !1,
            event: "click",
            header: "> li > :first-child, > :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        hideProps: {
            borderTopWidth: "hide",
            borderBottomWidth: "hide",
            paddingTop: "hide",
            paddingBottom: "hide",
            height: "hide"
        },
        showProps: {
            borderTopWidth: "show",
            borderBottomWidth: "show",
            paddingTop: "show",
            paddingBottom: "show",
            height: "show"
        },
        _create: function() {
            var e = this.options;
            this.prevShow = this.prevHide = t(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), 
            this.element.attr("role", "tablist"), e.collapsible || !1 !== e.active && null != e.active || (e.active = 0), 
            this._processPanels(), e.active < 0 && (e.active += this.headers.length), this._refresh();
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: this.active.length ? this.active.next() : t()
            };
        },
        _createIcons: function() {
            var e, i, s = this.options.icons;
            s && (e = t("<span>"), this._addClass(e, "ui-accordion-header-icon", "ui-icon " + s.header), 
            e.prependTo(this.headers), i = this.active.children(".ui-accordion-header-icon"), 
            this._removeClass(i, s.header)._addClass(i, null, s.activeHeader)._addClass(this.headers, "ui-accordion-icons"));
        },
        _destroyIcons: function() {
            this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove();
        },
        _destroy: function() {
            var t;
            this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), 
            this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), 
            "content" !== this.options.heightStyle && t.css("height", "");
        },
        _setOption: function(t, e) {
            return "active" === t ? void this._activate(e) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), 
            this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || !1 !== this.options.active || this._activate(0), 
            void ("icons" === t && (this._destroyIcons(), e && this._createIcons())));
        },
        _setOptionDisabled: function(t) {
            this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), 
            this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t);
        },
        _keydown: function(e) {
            if (!e.altKey && !e.ctrlKey) {
                var i = t.ui.keyCode, s = this.headers.length, n = this.headers.index(e.target), o = !1;
                switch (e.keyCode) {
                  case i.RIGHT:
                  case i.DOWN:
                    o = this.headers[(n + 1) % s];
                    break;

                  case i.LEFT:
                  case i.UP:
                    o = this.headers[(n - 1 + s) % s];
                    break;

                  case i.SPACE:
                  case i.ENTER:
                    this._eventHandler(e);
                    break;

                  case i.HOME:
                    o = this.headers[0];
                    break;

                  case i.END:
                    o = this.headers[s - 1];
                }
                o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), t(o).trigger("focus"), 
                e.preventDefault());
            }
        },
        _panelKeyDown: function(e) {
            e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().trigger("focus");
        },
        refresh: function() {
            var e = this.options;
            this._processPanels(), !1 === e.active && !0 === e.collapsible || !this.headers.length ? (e.active = !1, 
            this.active = t()) : !1 === e.active ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, 
            this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), 
            this._destroyIcons(), this._refresh();
        },
        _processPanels: function() {
            var t = this.headers, e = this.panels;
            this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), 
            this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), 
            this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), 
            e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)));
        },
        _refresh: function() {
            var e, i = this.options, s = i.heightStyle, n = this.element.parent();
            this.active = this._findActive(i.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), 
            this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), 
            this.headers.attr("role", "tab").each(function() {
                var e = t(this), i = e.uniqueId().attr("id"), s = e.next(), n = s.uniqueId().attr("id");
                e.attr("aria-controls", n), s.attr("aria-labelledby", i);
            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }).next().attr({
                "aria-hidden": "true"
            }).hide(), this.active.length ? this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }).next().attr({
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), 
            "fill" === s ? (e = n.height(), this.element.siblings(":visible").each(function() {
                var i = t(this), s = i.css("position");
                "absolute" !== s && "fixed" !== s && (e -= i.outerHeight(!0));
            }), this.headers.each(function() {
                e -= t(this).outerHeight(!0);
            }), this.headers.next().each(function() {
                t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()));
            }).css("overflow", "auto")) : "auto" === s && (e = 0, this.headers.next().each(function() {
                var i = t(this).is(":visible");
                i || t(this).show(), e = Math.max(e, t(this).css("height", "").height()), i || t(this).hide();
            }).height(e));
        },
        _activate: function(e) {
            var i = this._findActive(e)[0];
            i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }));
        },
        _findActive: function(e) {
            return "number" == typeof e ? this.headers.eq(e) : t();
        },
        _setupEvents: function(e) {
            var i = {
                keydown: "_keydown"
            };
            e && t.each(e.split(" "), function(t, e) {
                i[e] = "_eventHandler";
            }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), 
            this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            }), this._hoverable(this.headers), this._focusable(this.headers);
        },
        _eventHandler: function(e) {
            var i, s, n = this.options, o = this.active, a = t(e.currentTarget), r = a[0] === o[0], h = r && n.collapsible, l = h ? t() : a.next(), u = {
                oldHeader: o,
                oldPanel: o.next(),
                newHeader: h ? t() : a,
                newPanel: l
            };
            e.preventDefault(), r && !n.collapsible || !1 === this._trigger("beforeActivate", e, u) || (n.active = !h && this.headers.index(a), 
            this.active = r ? t() : a, this._toggle(u), this._removeClass(o, "ui-accordion-header-active", "ui-state-active"), 
            n.icons && (i = o.children(".ui-accordion-header-icon"), this._removeClass(i, null, n.icons.activeHeader)._addClass(i, null, n.icons.header)), 
            r || (this._removeClass(a, "ui-accordion-header-collapsed")._addClass(a, "ui-accordion-header-active", "ui-state-active"), 
            n.icons && (s = a.children(".ui-accordion-header-icon"), this._removeClass(s, null, n.icons.header)._addClass(s, null, n.icons.activeHeader)), 
            this._addClass(a.next(), "ui-accordion-content-active")));
        },
        _toggle: function(e) {
            var i = e.newPanel, s = this.prevShow.length ? this.prevShow : e.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, 
            this.options.animate ? this._animate(i, s, e) : (s.hide(), i.show(), this._toggleComplete(e)), 
            s.attr({
                "aria-hidden": "true"
            }), s.prev().attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), i.length && s.length ? s.prev().attr({
                tabIndex: -1,
                "aria-expanded": "false"
            }) : i.length && this.headers.filter(function() {
                return 0 === parseInt(t(this).attr("tabIndex"), 10);
            }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            });
        },
        _animate: function(t, e, i) {
            var s, n, o, a = this, r = 0, h = t.css("box-sizing"), l = t.length && (!e.length || t.index() < e.index()), c = this.options.animate || {}, u = l && c.down || c, d = function() {
                a._toggleComplete(i);
            };
            return "number" == typeof u && (o = u), "string" == typeof u && (n = u), n = n || u.easing || c.easing, 
            o = o || u.duration || c.duration, e.length ? t.length ? (s = t.show().outerHeight(), 
            e.animate(this.hideProps, {
                duration: o,
                easing: n,
                step: function(t, e) {
                    e.now = Math.round(t);
                }
            }), void t.hide().animate(this.showProps, {
                duration: o,
                easing: n,
                complete: d,
                step: function(t, i) {
                    i.now = Math.round(t), "height" !== i.prop ? "content-box" === h && (r += i.now) : "content" !== a.options.heightStyle && (i.now = Math.round(s - e.outerHeight() - r), 
                    r = 0);
                }
            })) : e.animate(this.hideProps, o, n, d) : t.animate(this.showProps, o, n, d);
        },
        _toggleComplete: function(t) {
            var e = t.oldPanel, i = e.prev();
            this._removeClass(e, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), 
            e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t);
        }
    }), t.widget("ui.menu", {
        version: "1.12.1",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-caret-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({
                role: this.options.role,
                tabIndex: 0
            }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
                "mousedown .ui-menu-item": function(t) {
                    t.preventDefault();
                },
                "click .ui-menu-item": function(e) {
                    var i = t(e.target), s = t(t.ui.safeActiveElement(this.document[0]));
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), 
                    i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && s.closest(".ui-menu").length && (this.element.trigger("focus", [ !0 ]), 
                    this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)));
                },
                "mouseenter .ui-menu-item": function(e) {
                    if (!this.previousFilter) {
                        var i = t(e.target).closest(".ui-menu-item"), s = t(e.currentTarget);
                        i[0] === s[0] && (this._removeClass(s.siblings().children(".ui-state-active"), null, "ui-state-active"), 
                        this.focus(e, s));
                    }
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(t, e) {
                    var i = this.active || this.element.find(this.options.items).eq(0);
                    e || this.focus(t, i);
                },
                blur: function(e) {
                    this._delay(function() {
                        !t.contains(this.element[0], t.ui.safeActiveElement(this.document[0])) && this.collapseAll(e);
                    });
                },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function(t) {
                    this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1;
                }
            });
        },
        _destroy: function() {
            var i = this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), 
            i.children().each(function() {
                var e = t(this);
                e.data("ui-menu-submenu-caret") && e.remove();
            });
        },
        _keydown: function(e) {
            var i, s, n, o, a = !0;
            switch (e.keyCode) {
              case t.ui.keyCode.PAGE_UP:
                this.previousPage(e);
                break;

              case t.ui.keyCode.PAGE_DOWN:
                this.nextPage(e);
                break;

              case t.ui.keyCode.HOME:
                this._move("first", "first", e);
                break;

              case t.ui.keyCode.END:
                this._move("last", "last", e);
                break;

              case t.ui.keyCode.UP:
                this.previous(e);
                break;

              case t.ui.keyCode.DOWN:
                this.next(e);
                break;

              case t.ui.keyCode.LEFT:
                this.collapse(e);
                break;

              case t.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                break;

              case t.ui.keyCode.ENTER:
              case t.ui.keyCode.SPACE:
                this._activate(e);
                break;

              case t.ui.keyCode.ESCAPE:
                this.collapse(e);
                break;

              default:
                a = !1, s = this.previousFilter || "", o = !1, n = 96 <= e.keyCode && e.keyCode <= 105 ? "" + (e.keyCode - 96) : String.fromCharCode(e.keyCode), 
                clearTimeout(this.filterTimer), n === s ? o = !0 : n = s + n, i = this._filterMenuItems(n), 
                (i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i).length || (n = String.fromCharCode(e.keyCode), 
                i = this._filterMenuItems(n)), i.length ? (this.focus(e, i), this.previousFilter = n, 
                this.filterTimer = this._delay(function() {
                    delete this.previousFilter;
                }, 1e3)) : delete this.previousFilter;
            }
            a && e.preventDefault();
        },
        _activate: function(t) {
            this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t));
        },
        refresh: function() {
            var i, s, n, o, a = this, r = this.options.icons.submenu, h = this.element.find(this.options.menus);
            this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), 
            s = h.filter(":not(.ui-menu)").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var e = t(this), i = e.prev(), s = t("<span>").data("ui-menu-submenu-caret", !0);
                a._addClass(s, "ui-menu-icon", "ui-icon " + r), i.attr("aria-haspopup", "true").prepend(s), 
                e.attr("aria-labelledby", i.attr("id"));
            }), this._addClass(s, "ui-menu", "ui-widget ui-widget-content ui-front"), (i = h.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function() {
                var e = t(this);
                a._isDivider(e) && a._addClass(e, "ui-menu-divider", "ui-widget-content");
            }), o = (n = i.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            }), this._addClass(n, "ui-menu-item")._addClass(o, "ui-menu-item-wrapper"), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), 
            this.active && !t.contains(this.element[0], this.active[0]) && this.blur();
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role];
        },
        _setOption: function(t, e) {
            if ("icons" === t) {
                var i = this.element.find(".ui-menu-icon");
                this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu);
            }
            this._super(t, e);
        },
        _setOptionDisabled: function(t) {
            this._super(t), this.element.attr("aria-disabled", t + ""), this._toggleClass(null, "ui-state-disabled", !!t);
        },
        focus: function(t, e) {
            var i, s, n;
            this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), 
            s = this.active.children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), 
            this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), n = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), 
            this._addClass(n, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
                this._close();
            }, this.delay), (i = e.children(".ui-menu")).length && t && /^mouse/.test(t.type) && this._startOpening(i), 
            this.activeMenu = e.parent(), this._trigger("focus", t, {
                item: e
            });
        },
        _scrollIntoView: function(e) {
            var i, s, n, o, a, r;
            this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, 
            s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, 
            o = this.activeMenu.scrollTop(), a = this.activeMenu.height(), r = e.outerHeight(), 
            n < 0 ? this.activeMenu.scrollTop(o + n) : a < n + r && this.activeMenu.scrollTop(o + n - a + r));
        },
        blur: function(t, e) {
            e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), 
            this._trigger("blur", t, {
                item: this.active
            }), this.active = null);
        },
        _startOpening: function(t) {
            clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close(), this._open(t);
            }, this.delay));
        },
        _open: function(e) {
            var i = t.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), 
            e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i);
        },
        collapseAll: function(e, i) {
            clearTimeout(this.timer), this.timer = this._delay(function() {
                var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                s.length || (s = this.element), this._close(s), this.blur(e), this._removeClass(s.find(".ui-state-active"), null, "ui-state-active"), 
                this.activeMenu = s;
            }, this.delay);
        },
        _close: function(t) {
            t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false");
        },
        _closeOnDocumentClick: function(e) {
            return !t(e.target).closest(".ui-menu").length;
        },
        _isDivider: function(t) {
            return !/[^\-\u2014\u2013\s]/.test(t.text());
        },
        collapse: function(t) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(), this.focus(t, e));
        },
        expand: function(t) {
            var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            e && e.length && (this._open(e.parent()), this._delay(function() {
                this.focus(t, e);
            }));
        },
        next: function(t) {
            this._move("next", "first", t);
        },
        previous: function(t) {
            this._move("prev", "last", t);
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length;
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length;
        },
        _move: function(t, e, i) {
            var s;
            this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), 
            s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[e]()), 
            this.focus(i, s);
        },
        nextPage: function(e) {
            var i, s, n;
            return this.active ? void (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, 
            n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                return (i = t(this)).offset().top - s - n < 0;
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(e);
        },
        previousPage: function(e) {
            var i, s, n;
            return this.active ? void (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, 
            n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                return 0 < (i = t(this)).offset().top - s + n;
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first()))) : void this.next(e);
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight");
        },
        select: function(e) {
            this.active = this.active || t(e.target).closest(".ui-menu-item");
            var i = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i);
        },
        _filterMenuItems: function(e) {
            var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"), s = RegExp("^" + i, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()));
            });
        }
    }), t.widget("ui.autocomplete", {
        version: "1.12.1",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var e, i, s, n = this.element[0].nodeName.toLowerCase(), o = "textarea" === n, a = "input" === n;
            this.isMultiLine = o || !a && this._isContentEditable(this.element), this.valueMethod = this.element[o || a ? "val" : "text"], 
            this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), 
            this._on(this.element, {
                keydown: function(n) {
                    if (this.element.prop("readOnly")) i = s = e = !0; else {
                        i = s = e = !1;
                        var o = t.ui.keyCode;
                        switch (n.keyCode) {
                          case o.PAGE_UP:
                            e = !0, this._move("previousPage", n);
                            break;

                          case o.PAGE_DOWN:
                            e = !0, this._move("nextPage", n);
                            break;

                          case o.UP:
                            e = !0, this._keyEvent("previous", n);
                            break;

                          case o.DOWN:
                            e = !0, this._keyEvent("next", n);
                            break;

                          case o.ENTER:
                            this.menu.active && (e = !0, n.preventDefault(), this.menu.select(n));
                            break;

                          case o.TAB:
                            this.menu.active && this.menu.select(n);
                            break;

                          case o.ESCAPE:
                            this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), 
                            this.close(n), n.preventDefault());
                            break;

                          default:
                            i = !0, this._searchTimeout(n);
                        }
                    }
                },
                keypress: function(s) {
                    if (e) return e = !1, void ((!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault());
                    if (!i) {
                        var n = t.ui.keyCode;
                        switch (s.keyCode) {
                          case n.PAGE_UP:
                            this._move("previousPage", s);
                            break;

                          case n.PAGE_DOWN:
                            this._move("nextPage", s);
                            break;

                          case n.UP:
                            this._keyEvent("previous", s);
                            break;

                          case n.DOWN:
                            this._keyEvent("next", s);
                        }
                    }
                },
                input: function(t) {
                    return s ? (s = !1, void t.preventDefault()) : void this._searchTimeout(t);
                },
                focus: function() {
                    this.selectedItem = null, this.previous = this._value();
                },
                blur: function(t) {
                    return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), 
                    this.close(t), void this._change(t));
                }
            }), this._initSource(), this.menu = t("<ul>").appendTo(this._appendTo()).menu({
                role: null
            }).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), 
            this._on(this.menu.element, {
                mousedown: function(e) {
                    e.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur, this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus");
                    });
                },
                menufocus: function(e, i) {
                    var s, n;
                    return this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(), 
                    void this.document.one("mousemove", function() {
                        t(e.target).trigger(e.originalEvent);
                    })) : (n = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, {
                        item: n
                    }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(n.value), 
                    void ((s = i.item.attr("aria-label") || n.value) && t.trim(s).length && (this.liveRegion.children().hide(), 
                    t("<div>").text(s).appendTo(this.liveRegion))));
                },
                menuselect: function(e, i) {
                    var s = i.item.data("ui-autocomplete-item"), n = this.previous;
                    this.element[0] !== t.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), 
                    this.previous = n, this._delay(function() {
                        this.previous = n, this.selectedItem = s;
                    })), !1 !== this._trigger("select", e, {
                        item: s
                    }) && this._value(s.value), this.term = this._value(), this.close(e), this.selectedItem = s;
                }
            }), this.liveRegion = t("<div>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), 
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete");
                }
            });
        },
        _destroy: function() {
            clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), 
            this.liveRegion.remove();
        },
        _setOption: function(t, e) {
            this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), 
            "disabled" === t && e && this.xhr && this.xhr.abort();
        },
        _isEventTargetInWidget: function(e) {
            var i = this.menu.element[0];
            return e.target === this.element[0] || e.target === i || t.contains(i, e.target);
        },
        _closeOnClickOutside: function(t) {
            this._isEventTargetInWidget(t) || this.close();
        },
        _appendTo: function() {
            var e = this.options.appendTo;
            return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), 
            e.length || (e = this.document[0].body), e;
        },
        _initSource: function() {
            var e, i, s = this;
            t.isArray(this.options.source) ? (e = this.options.source, this.source = function(i, s) {
                s(t.ui.autocomplete.filter(e, i.term));
            }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(e, n) {
                s.xhr && s.xhr.abort(), s.xhr = t.ajax({
                    url: i,
                    data: e,
                    dataType: "json",
                    success: function(t) {
                        n(t);
                    },
                    error: function() {
                        n([]);
                    }
                });
            }) : this.source = this.options.source;
        },
        _searchTimeout: function(t) {
            clearTimeout(this.searching), this.searching = this._delay(function() {
                var e = this.term === this._value(), i = this.menu.element.is(":visible"), s = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                (!e || e && !i && !s) && (this.selectedItem = null, this.search(null, t));
            }, this.options.delay);
        },
        search: function(t, e) {
            return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : !1 !== this._trigger("search", e) ? this._search(t) : void 0;
        },
        _search: function(t) {
            this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, 
            this.source({
                term: t
            }, this._response());
        },
        _response: function() {
            var e = ++this.requestIndex;
            return t.proxy(function(t) {
                e === this.requestIndex && this.__response(t), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading");
            }, this);
        },
        __response: function(t) {
            t && (t = this._normalize(t)), this._trigger("response", null, {
                content: t
            }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), 
            this._trigger("open")) : this._close();
        },
        close: function(t) {
            this.cancelSearch = !0, this._close(t);
        },
        _close: function(t) {
            this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), 
            this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t));
        },
        _change: function(t) {
            this.previous !== this._value() && this._trigger("change", t, {
                item: this.selectedItem
            });
        },
        _normalize: function(e) {
            return e.length && e[0].label && e[0].value ? e : t.map(e, function(e) {
                return "string" == typeof e ? {
                    label: e,
                    value: e
                } : t.extend({}, e, {
                    label: e.label || e.value,
                    value: e.value || e.label
                });
            });
        },
        _suggest: function(e) {
            var i = this.menu.element.empty();
            this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), 
            i.position(t.extend({
                of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {
                mousedown: "_closeOnClickOutside"
            });
        },
        _resizeMenu: function() {
            var t = this.menu.element;
            t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()));
        },
        _renderMenu: function(e, i) {
            var s = this;
            t.each(i, function(t, i) {
                s._renderItemData(e, i);
            });
        },
        _renderItemData: function(t, e) {
            return this._renderItem(t, e).data("ui-autocomplete-item", e);
        },
        _renderItem: function(e, i) {
            return t("<li>").append(t("<div>").text(i.label)).appendTo(e);
        },
        _move: function(t, e) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), 
            void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e);
        },
        widget: function() {
            return this.menu.element;
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments);
        },
        _keyEvent: function(t, e) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault());
        },
        _isContentEditable: function(t) {
            if (!t.length) return !1;
            var e = t.prop("contentEditable");
            return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e;
        }
    }), t.extend(t.ui.autocomplete, {
        escapeRegex: function(t) {
            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
        },
        filter: function(e, i) {
            var s = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
            return t.grep(e, function(t) {
                return s.test(t.label || t.value || t);
            });
        }
    }), t.widget("ui.autocomplete", t.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(t) {
                    return t + (1 < t ? " results are" : " result is") + " available, use up and down arrow keys to navigate.";
                }
            }
        },
        __response: function(e) {
            var i;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, 
            this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion));
        }
    }), t.ui.autocomplete;
    var p, d = /ui-corner-([a-z]){2,6}/g;
    t.widget("ui.controlgroup", {
        version: "1.12.1",
        defaultElement: "<div>",
        options: {
            direction: "horizontal",
            disabled: null,
            onlyVisible: !0,
            items: {
                button: "input[type=button], input[type=submit], input[type=reset], button, a",
                controlgroupLabel: ".ui-controlgroup-label",
                checkboxradio: "input[type='checkbox'], input[type='radio']",
                selectmenu: "select",
                spinner: ".ui-spinner-input"
            }
        },
        _create: function() {
            this._enhance();
        },
        _enhance: function() {
            this.element.attr("role", "toolbar"), this.refresh();
        },
        _destroy: function() {
            this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), 
            this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap();
        },
        _initWidgets: function() {
            var e = this, i = [];
            t.each(this.options.items, function(s, n) {
                var o, a = {};
                return n ? "controlgroupLabel" === s ? ((o = e.element.find(n)).each(function() {
                    var e = t(this);
                    e.children(".ui-controlgroup-label-contents").length || e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>");
                }), e._addClass(o, null, "ui-widget ui-widget-content ui-state-default"), void (i = i.concat(o.get()))) : void (t.fn[s] && (a = e["_" + s + "Options"] ? e["_" + s + "Options"]("middle") : {
                    classes: {}
                }, e.element.find(n).each(function() {
                    var n = t(this), o = n[s]("instance"), r = t.widget.extend({}, a);
                    if ("button" !== s || !n.parent(".ui-spinner").length) {
                        o || (o = n[s]()[s]("instance")), o && (r.classes = e._resolveClassesValues(r.classes, o)), 
                        n[s](r);
                        var h = n[s]("widget");
                        t.data(h[0], "ui-controlgroup-data", o || n[s]("instance")), i.push(h[0]);
                    }
                }))) : void 0;
            }), this.childWidgets = t(t.unique(i)), this._addClass(this.childWidgets, "ui-controlgroup-item");
        },
        _callChildMethod: function(e) {
            this.childWidgets.each(function() {
                var s = t(this).data("ui-controlgroup-data");
                s && s[e] && s[e]();
            });
        },
        _updateCornerClass: function(t, e) {
            var s = this._buildSimpleOptions(e, "label").classes.label;
            this._removeClass(t, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"), 
            this._addClass(t, null, s);
        },
        _buildSimpleOptions: function(t, e) {
            var i = "vertical" === this.options.direction, s = {
                classes: {}
            };
            return s.classes[e] = {
                middle: "",
                first: "ui-corner-" + (i ? "top" : "left"),
                last: "ui-corner-" + (i ? "bottom" : "right"),
                only: "ui-corner-all"
            }[t], s;
        },
        _spinnerOptions: function(t) {
            var e = this._buildSimpleOptions(t, "ui-spinner");
            return e.classes["ui-spinner-up"] = "", e.classes["ui-spinner-down"] = "", e;
        },
        _buttonOptions: function(t) {
            return this._buildSimpleOptions(t, "ui-button");
        },
        _checkboxradioOptions: function(t) {
            return this._buildSimpleOptions(t, "ui-checkboxradio-label");
        },
        _selectmenuOptions: function(t) {
            var e = "vertical" === this.options.direction;
            return {
                width: !!e && "auto",
                classes: {
                    middle: {
                        "ui-selectmenu-button-open": "",
                        "ui-selectmenu-button-closed": ""
                    },
                    first: {
                        "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
                        "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left")
                    },
                    last: {
                        "ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
                        "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right")
                    },
                    only: {
                        "ui-selectmenu-button-open": "ui-corner-top",
                        "ui-selectmenu-button-closed": "ui-corner-all"
                    }
                }[t]
            };
        },
        _resolveClassesValues: function(e, i) {
            var s = {};
            return t.each(e, function(n) {
                var o = i.options.classes[n] || "";
                o = t.trim(o.replace(d, "")), s[n] = (o + " " + e[n]).replace(/\s+/g, " ");
            }), s;
        },
        _setOption: function(t, e) {
            return "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), 
            this._super(t, e), "disabled" === t ? void this._callChildMethod(e ? "disable" : "enable") : void this.refresh();
        },
        refresh: function() {
            var e, i = this;
            this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), 
            this._initWidgets(), e = this.childWidgets, this.options.onlyVisible && (e = e.filter(":visible")), 
            e.length && (t.each([ "first", "last" ], function(t, s) {
                var n = e[s]().data("ui-controlgroup-data");
                if (n && i["_" + n.widgetName + "Options"]) {
                    var o = i["_" + n.widgetName + "Options"](1 === e.length ? "only" : s);
                    o.classes = i._resolveClassesValues(o.classes, n), n.element[n.widgetName](o);
                } else i._updateCornerClass(e[s](), s);
            }), this._callChildMethod("refresh"));
        }
    }), t.widget("ui.checkboxradio", [ t.ui.formResetMixin, {
        version: "1.12.1",
        options: {
            disabled: null,
            label: null,
            icon: !0,
            classes: {
                "ui-checkboxradio-label": "ui-corner-all",
                "ui-checkboxradio-icon": "ui-corner-all"
            }
        },
        _getCreateOptions: function() {
            var e, i, s = this, n = this._super() || {};
            return this._readType(), i = this.element.labels(), this.label = t(i[i.length - 1]), 
            this.label.length || t.error("No label found for checkboxradio widget"), this.originalLabel = "", 
            this.label.contents().not(this.element[0]).each(function() {
                s.originalLabel += 3 === this.nodeType ? t(this).text() : this.outerHTML;
            }), this.originalLabel && (n.label = this.originalLabel), null != (e = this.element[0].disabled) && (n.disabled = e), 
            n;
        },
        _create: function() {
            var t = this.element[0].checked;
            this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), 
            this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), 
            this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), 
            this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), 
            this._enhance(), t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), 
            this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({
                change: "_toggleClasses",
                focus: function() {
                    this._addClass(this.label, null, "ui-state-focus ui-visual-focus");
                },
                blur: function() {
                    this._removeClass(this.label, null, "ui-state-focus ui-visual-focus");
                }
            });
        },
        _readType: function() {
            var e = this.element[0].nodeName.toLowerCase();
            this.type = this.element[0].type, "input" === e && /radio|checkbox/.test(this.type) || t.error("Can't create checkboxradio on element.nodeName=" + e + " and element.type=" + this.type);
        },
        _enhance: function() {
            this._updateIcon(this.element[0].checked);
        },
        widget: function() {
            return this.label;
        },
        _getRadioGroup: function() {
            var i = this.element[0].name, s = "input[name='" + t.ui.escapeSelector(i) + "']";
            return i ? (this.form.length ? t(this.form[0].elements).filter(s) : t(s).filter(function() {
                return 0 === t(this).form().length;
            })).not(this.element) : t([]);
        },
        _toggleClasses: function() {
            var e = this.element[0].checked;
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e), 
            this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", e)._toggleClass(this.icon, null, "ui-icon-blank", !e), 
            "radio" === this.type && this._getRadioGroup().each(function() {
                var e = t(this).checkboxradio("instance");
                e && e._removeClass(e.label, "ui-checkboxradio-checked", "ui-state-active");
            });
        },
        _destroy: function() {
            this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove());
        },
        _setOption: function(t, e) {
            return "label" !== t || e ? (this._super(t, e), "disabled" === t ? (this._toggleClass(this.label, null, "ui-state-disabled", e), 
            void (this.element[0].disabled = e)) : void this.refresh()) : void 0;
        },
        _updateIcon: function(e) {
            var i = "ui-icon ui-icon-background ";
            this.options.icon ? (this.icon || (this.icon = t("<span>"), this.iconSpace = t("<span> </span>"), 
            this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (i += e ? "ui-icon-check ui-state-checked" : "ui-icon-blank", 
            this._removeClass(this.icon, null, e ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank", 
            this._addClass(this.icon, "ui-checkboxradio-icon", i), e || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), 
            this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), 
            this.iconSpace.remove(), delete this.icon);
        },
        _updateLabel: function() {
            var t = this.label.contents().not(this.element[0]);
            this.icon && (t = t.not(this.icon[0])), this.iconSpace && (t = t.not(this.iconSpace[0])), 
            t.remove(), this.label.append(this.options.label);
        },
        refresh: function() {
            var t = this.element[0].checked, e = this.element[0].disabled;
            this._updateIcon(t), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), 
            null !== this.options.label && this._updateLabel(), e !== this.options.disabled && this._setOptions({
                disabled: e
            });
        }
    } ]), t.ui.checkboxradio, t.widget("ui.button", {
        version: "1.12.1",
        defaultElement: "<button>",
        options: {
            classes: {
                "ui-button": "ui-corner-all"
            },
            disabled: null,
            icon: null,
            iconPosition: "beginning",
            label: null,
            showLabel: !0
        },
        _getCreateOptions: function() {
            var t, e = this._super() || {};
            return this.isInput = this.element.is("input"), null != (t = this.element[0].disabled) && (e.disabled = t), 
            this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e.label = this.originalLabel), 
            e;
        },
        _create: function() {
            !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), 
            this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), 
            this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), 
            this._enhance(), this.element.is("a") && this._on({
                keyup: function(e) {
                    e.keyCode === t.ui.keyCode.SPACE && (e.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"));
                }
            });
        },
        _enhance: function() {
            this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), 
            this._updateTooltip());
        },
        _updateTooltip: function() {
            this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label);
        },
        _updateIcon: function(e, i) {
            var s = "iconPosition" !== e, n = s ? this.options.iconPosition : i, o = "top" === n || "bottom" === n;
            this.icon ? s && this._removeClass(this.icon, null, this.options.icon) : (this.icon = t("<span>"), 
            this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), 
            s && this._addClass(this.icon, null, i), this._attachIcon(n), o ? (this._addClass(this.icon, null, "ui-widget-icon-block"), 
            this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = t("<span> </span>"), 
            this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), 
            this._attachIconSpace(n));
        },
        _destroy: function() {
            this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), 
            this.hasTitle || this.element.removeAttr("title");
        },
        _attachIconSpace: function(t) {
            this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace);
        },
        _attachIcon: function(t) {
            this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon);
        },
        _setOptions: function(t) {
            var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel, i = void 0 === t.icon ? this.options.icon : t.icon;
            e || i || (t.showLabel = !0), this._super(t);
        },
        _setOption: function(t, e) {
            "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), 
            this.iconSpace && this.iconSpace.remove())), "iconPosition" === t && this._updateIcon(t, e), 
            "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()), 
            "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), 
            this._attachIconSpace(this.options.iconPosition)))), this._super(t, e), "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), 
            (this.element[0].disabled = e) && this.element.blur());
        },
        refresh: function() {
            var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOptions({
                disabled: t
            }), this._updateTooltip();
        }
    }), !1 !== t.uiBackCompat && (t.widget("ui.button", t.ui.button, {
        options: {
            text: !0,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), 
            !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), 
            this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, 
            this.options.iconPosition = "end"), this._super();
        },
        _setOption: function(t, e) {
            return "text" === t ? void this._super("showLabel", e) : ("showLabel" === t && (this.options.text = e), 
            "icon" === t && (this.options.icons.primary = e), "icons" === t && (e.primary ? (this._super("icon", e.primary), 
            this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), 
            this._super("iconPosition", "end"))), void this._superApply(arguments));
        }
    }), t.fn.button = function(e) {
        return function() {
            return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? e.apply(this, arguments) : (t.ui.checkboxradio || t.error("Checkboxradio widget missing"), 
            0 === arguments.length ? this.checkboxradio({
                icon: !1
            }) : this.checkboxradio.apply(this, arguments));
        };
    }(t.fn.button), t.fn.buttonset = function() {
        return t.ui.controlgroup || t.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [ arguments[0], "items.button", arguments[2] ]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [ arguments[0], "items.button" ]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {
            button: arguments[0].items
        }), this.controlgroup.apply(this, arguments));
    }), t.ui.button, t.extend(t.ui, {
        datepicker: {
            version: "1.12.1"
        }
    }), t.extend(s.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv;
        },
        setDefaults: function(t) {
            return a(this._defaults, t || {}), this;
        },
        _attachDatepicker: function(e, i) {
            var s, n, o;
            n = "div" === (s = e.nodeName.toLowerCase()) || "span" === s, e.id || (this.uuid += 1, 
            e.id = "dp" + this.uuid), (o = this._newInst(t(e), n)).settings = t.extend({}, i || {}), 
            "input" === s ? this._connectDatepicker(e, o) : n && this._inlineDatepicker(e, o);
        },
        _newInst: function(e, i) {
            return {
                id: e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                input: e,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i ? n(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            };
        },
        _connectDatepicker: function(e, i) {
            var s = t(e);
            i.append = t([]), i.trigger = t([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), 
            s.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), 
            this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e));
        },
        _attachments: function(e, i) {
            var s, n, o, a = this._get(i, "appendText"), r = this._get(i, "isRTL");
            i.append && i.append.remove(), a && (i.append = t("<span class='" + this._appendClass + "'>" + a + "</span>"), 
            e[r ? "before" : "after"](i.append)), e.off("focus", this._showDatepicker), i.trigger && i.trigger.remove(), 
            ("focus" === (s = this._get(i, "showOn")) || "both" === s) && e.on("focus", this._showDatepicker), 
            ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), 
            i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
                src: o,
                alt: n,
                title: n
            }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({
                src: o,
                alt: n,
                title: n
            }) : n)), e[r ? "before" : "after"](i.trigger), i.trigger.on("click", function() {
                return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : (t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] && t.datepicker._hideDatepicker(), 
                t.datepicker._showDatepicker(e[0])), !1;
            }));
        },
        _autoSize: function(t) {
            if (this._get(t, "autoSize") && !t.inline) {
                var e, i, s, n, o = new Date(2009, 11, 20), a = this._get(t, "dateFormat");
                a.match(/[DM]/) && (e = function(t) {
                    for (n = s = i = 0; t.length > n; n++) t[n].length > i && (i = t[n].length, s = n);
                    return s;
                }, o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), 
                o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), 
                t.input.attr("size", this._formatDate(t, o).length);
            }
        },
        _inlineDatepicker: function(e, i) {
            var s = t(e);
            s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), 
            t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), 
            this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"));
        },
        _dialogDatepicker: function(e, i, s, n, o) {
            var r, h, l, c, u, d = this._dialogInst;
            return d || (this.uuid += 1, r = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"), 
            this._dialogInput.on("keydown", this._doKeyDown), t("body").append(this._dialogInput), 
            (d = this._dialogInst = this._newInst(this._dialogInput, !1)).settings = {}, t.data(this._dialogInput[0], "datepicker", d)), 
            a(d.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(d, i) : i, 
            this._dialogInput.val(i), this._pos = o ? o.length ? o : [ o.pageX, o.pageY ] : null, 
            this._pos || (h = document.documentElement.clientWidth, l = document.documentElement.clientHeight, 
            c = document.documentElement.scrollLeft || document.body.scrollLeft, u = document.documentElement.scrollTop || document.body.scrollTop, 
            this._pos = [ h / 2 - 100 + c, l / 2 - 150 + u ]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), 
            d.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), 
            this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), 
            t.data(this._dialogInput[0], "datepicker", d), this;
        },
        _destroyDatepicker: function(e) {
            var i, s = t(e), n = t.data(e, "datepicker");
            s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), 
            "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty(), 
            p === n && (p = null));
        },
        _enableDatepicker: function(e) {
            var i, s, n = t(e), o = t.data(e, "datepicker");
            n.hasClass(this.markerClassName) && ("input" === (i = e.nodeName.toLowerCase()) ? (e.disabled = !1, 
            o.trigger.filter("button").each(function() {
                this.disabled = !1;
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === i || "span" === i) && ((s = n.children("." + this._inlineClass)).children().removeClass("ui-state-disabled"), 
            s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), 
            this._disabledInputs = t.map(this._disabledInputs, function(t) {
                return t === e ? null : t;
            }));
        },
        _disableDatepicker: function(e) {
            var i, s, n = t(e), o = t.data(e, "datepicker");
            n.hasClass(this.markerClassName) && ("input" === (i = e.nodeName.toLowerCase()) ? (e.disabled = !0, 
            o.trigger.filter("button").each(function() {
                this.disabled = !0;
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === i || "span" === i) && ((s = n.children("." + this._inlineClass)).children().addClass("ui-state-disabled"), 
            s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), 
            this._disabledInputs = t.map(this._disabledInputs, function(t) {
                return t === e ? null : t;
            }), this._disabledInputs[this._disabledInputs.length] = e);
        },
        _isDisabledDatepicker: function(t) {
            if (!t) return !1;
            for (var e = 0; this._disabledInputs.length > e; e++) if (this._disabledInputs[e] === t) return !0;
            return !1;
        },
        _getInst: function(e) {
            try {
                return t.data(e, "datepicker");
            } catch (i) {
                throw "Missing instance data for this datepicker";
            }
        },
        _optionDatepicker: function(e, i, s) {
            var n, o, r, h, l = this._getInst(e);
            return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({}, t.datepicker._defaults) : l ? "all" === i ? t.extend({}, l.settings) : this._get(l, i) : null : (n = i || {}, 
            "string" == typeof i && ((n = {})[i] = s), void (l && (this._curInst === l && this._hideDatepicker(), 
            o = this._getDateDatepicker(e, !0), r = this._getMinMaxDate(l, "min"), h = this._getMinMaxDate(l, "max"), 
            a(l.settings, n), null !== r && void 0 !== n.dateFormat && void 0 === n.minDate && (l.settings.minDate = this._formatDate(l, r)), 
            null !== h && void 0 !== n.dateFormat && void 0 === n.maxDate && (l.settings.maxDate = this._formatDate(l, h)), 
            "disabled" in n && (n.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), 
            this._attachments(t(e), l), this._autoSize(l), this._setDate(l, o), this._updateAlternate(l), 
            this._updateDatepicker(l))));
        },
        _changeDatepicker: function(t, e, i) {
            this._optionDatepicker(t, e, i);
        },
        _refreshDatepicker: function(t) {
            var e = this._getInst(t);
            e && this._updateDatepicker(e);
        },
        _setDateDatepicker: function(t, e) {
            var i = this._getInst(t);
            i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i));
        },
        _getDateDatepicker: function(t, e) {
            var i = this._getInst(t);
            return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null;
        },
        _doKeyDown: function(e) {
            var i, s, n, o = t.datepicker._getInst(e.target), a = !0, r = o.dpDiv.is(".ui-datepicker-rtl");
            if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
              case 9:
                t.datepicker._hideDatepicker(), a = !1;
                break;

              case 13:
                return (n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv))[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, n[0]), 
                (i = t.datepicker._get(o, "onSelect")) ? (s = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [ s, o ])) : t.datepicker._hideDatepicker(), 
                !1;

              case 27:
                t.datepicker._hideDatepicker();
                break;

              case 33:
                t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                break;

              case 34:
                t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                break;

              case 35:
                (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), a = e.ctrlKey || e.metaKey;
                break;

              case 36:
                (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), a = e.ctrlKey || e.metaKey;
                break;

              case 37:
                (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), 
                a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                break;

              case 38:
                (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), a = e.ctrlKey || e.metaKey;
                break;

              case 39:
                (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), 
                a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                break;

              case 40:
                (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), a = e.ctrlKey || e.metaKey;
                break;

              default:
                a = !1;
            } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : a = !1;
            a && (e.preventDefault(), e.stopPropagation());
        },
        _doKeyPress: function(e) {
            var i, s, n = t.datepicker._getInst(e.target);
            return t.datepicker._get(n, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(n, "dateFormat")), 
            s = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || s < " " || !i || -1 < i.indexOf(s)) : void 0;
        },
        _doKeyUp: function(e) {
            var s = t.datepicker._getInst(e.target);
            if (s.input.val() !== s.lastVal) try {
                t.datepicker.parseDate(t.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, t.datepicker._getFormatConfig(s)) && (t.datepicker._setDateFromField(s), 
                t.datepicker._updateAlternate(s), t.datepicker._updateDatepicker(s));
            } catch (n) {}
            return !0;
        },
        _showDatepicker: function(e) {
            var s, n, o, r, h, l, c;
            ("input" !== (e = e.target || e).nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), 
            t.datepicker._isDisabledDatepicker(e) || t.datepicker._lastInput === e) || (s = t.datepicker._getInst(e), 
            t.datepicker._curInst && t.datepicker._curInst !== s && (t.datepicker._curInst.dpDiv.stop(!0, !0), 
            s && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), 
            !1 !== (o = (n = t.datepicker._get(s, "beforeShow")) ? n.apply(e, [ e, s ]) : {}) && (a(s.settings, o), 
            s.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(s), 
            t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), 
            t.datepicker._pos[1] += e.offsetHeight), r = !1, t(e).parents().each(function() {
                return !(r |= "fixed" === t(this).css("position"));
            }), h = {
                left: t.datepicker._pos[0],
                top: t.datepicker._pos[1]
            }, t.datepicker._pos = null, s.dpDiv.empty(), s.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px"
            }), t.datepicker._updateDatepicker(s), h = t.datepicker._checkOffset(s, h, r), s.dpDiv.css({
                position: t.datepicker._inDialog && t.blockUI ? "static" : r ? "fixed" : "absolute",
                display: "none",
                left: h.left + "px",
                top: h.top + "px"
            }), s.inline || (l = t.datepicker._get(s, "showAnim"), c = t.datepicker._get(s, "duration"), 
            s.dpDiv.css("z-index", function(t) {
                for (var e, i; t.length && t[0] !== document; ) {
                    if (("absolute" === (e = t.css("position")) || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), 
                    !isNaN(i) && 0 !== i)) return i;
                    t = t.parent();
                }
                return 0;
            }(t(e)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[l] ? s.dpDiv.show(l, t.datepicker._get(s, "showOptions"), c) : s.dpDiv[l || "show"](l ? c : null), 
            t.datepicker._shouldFocusInput(s) && s.input.trigger("focus"), t.datepicker._curInst = s)));
        },
        _updateDatepicker: function(e) {
            this.maxRows = 4, (p = e).dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
            var i, s = this._getNumberOfMonths(e), n = s[1], r = e.dpDiv.find("." + this._dayOverClass + " a");
            0 < r.length && o.apply(r.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), 
            1 < n && e.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", 17 * n + "em"), 
            e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), 
            e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), 
            e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.trigger("focus"), 
            e.yearshtml && (i = e.yearshtml, setTimeout(function() {
                i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), 
                i = e.yearshtml = null;
            }, 0));
        },
        _shouldFocusInput: function(t) {
            return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus");
        },
        _checkOffset: function(e, i, s) {
            var n = e.dpDiv.outerWidth(), o = e.dpDiv.outerHeight(), a = e.input ? e.input.outerWidth() : 0, r = e.input ? e.input.outerHeight() : 0, h = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()), l = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());
            return i.left -= this._get(e, "isRTL") ? n - a : 0, i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, 
            i.top -= s && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0, 
            i.left -= Math.min(i.left, i.left + n > h && n < h ? Math.abs(i.left + n - h) : 0), 
            i.top -= Math.min(i.top, i.top + o > l && o < l ? Math.abs(o + r) : 0), i;
        },
        _findPos: function(e) {
            for (var i, s = this._getInst(e), n = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e)); ) e = e[n ? "previousSibling" : "nextSibling"];
            return [ (i = t(e).offset()).left, i.top ];
        },
        _hideDatepicker: function(e) {
            var i, s, n, o, a = this._curInst;
            !a || e && a !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(a, "showAnim"), 
            s = this._get(a, "duration"), n = function() {
                t.datepicker._tidyDialog(a);
            }, t.effects && (t.effects.effect[i] || t.effects[i]) ? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), s, n) : a.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), 
            i || n(), this._datepickerShowing = !1, (o = this._get(a, "onClose")) && o.apply(a.input ? a.input[0] : null, [ a.input ? a.input.val() : "", a ]), 
            this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1);
        },
        _tidyDialog: function(t) {
            t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");
        },
        _checkExternalClick: function(e) {
            if (t.datepicker._curInst) {
                var i = t(e.target), s = t.datepicker._getInst(i[0]);
                (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== s) && t.datepicker._hideDatepicker();
            }
        },
        _adjustDate: function(e, i, s) {
            var n = t(e), o = this._getInst(n[0]);
            this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(o, i + ("M" === s ? this._get(o, "showCurrentAtPos") : 0), s), 
            this._updateDatepicker(o));
        },
        _gotoToday: function(e) {
            var i, s = t(e), n = this._getInst(s[0]);
            this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, 
            n.drawYear = n.selectedYear = n.currentYear) : (i = new Date(), n.selectedDay = i.getDate(), 
            n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), 
            this._notifyChange(n), this._adjustDate(s);
        },
        _selectMonthYear: function(e, i, s) {
            var n = t(e), o = this._getInst(n[0]);
            o["selected" + ("M" === s ? "Month" : "Year")] = o["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), 
            this._notifyChange(o), this._adjustDate(n);
        },
        _selectDay: function(e, i, s, n) {
            var o, a = t(e);
            t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0]) || ((o = this._getInst(a[0])).selectedDay = o.currentDay = t("a", n).html(), 
            o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = s, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)));
        },
        _clearDate: function(e) {
            var i = t(e);
            this._selectDate(i, "");
        },
        _selectDate: function(e, i) {
            var s, n = t(e), o = this._getInst(n[0]);
            i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), 
            (s = this._get(o, "onSelect")) ? s.apply(o.input ? o.input[0] : null, [ i, o ]) : o.input && o.input.trigger("change"), 
            o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], 
            "object" != typeof o.input[0] && o.input.trigger("focus"), this._lastInput = null);
        },
        _updateAlternate: function(e) {
            var i, s, n, o = this._get(e, "altField");
            o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), s = this._getDate(e), 
            n = this.formatDate(i, s, this._getFormatConfig(e)), t(o).val(n));
        },
        noWeekends: function(t) {
            var e = t.getDay();
            return [ 0 < e && e < 6, "" ];
        },
        iso8601Week: function(t) {
            var e, i = new Date(t.getTime());
            return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), 
            i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1;
        },
        parseDate: function(e, i, s) {
            if (null == e || null == i) throw "Invalid arguments";
            if ("" === (i = "object" == typeof i ? "" + i : i + "")) return null;
            var n, o, a, r, h = 0, l = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff, c = "string" != typeof l ? l : new Date().getFullYear() % 100 + parseInt(l, 10), u = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort, d = (s ? s.dayNames : null) || this._defaults.dayNames, p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort, f = (s ? s.monthNames : null) || this._defaults.monthNames, g = -1, m = -1, _ = -1, v = -1, b = !1, y = function(t) {
                var i = e.length > n + 1 && e.charAt(n + 1) === t;
                return i && n++, i;
            }, w = function(t) {
                var e = y(t), s = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2, o = RegExp("^\\d{" + ("y" === t ? s : 1) + "," + s + "}"), a = i.substring(h).match(o);
                if (!a) throw "Missing number at position " + h;
                return h += a[0].length, parseInt(a[0], 10);
            }, k = function(e, s, n) {
                var o = -1, a = t.map(y(e) ? n : s, function(t, e) {
                    return [ [ e, t ] ];
                }).sort(function(t, e) {
                    return -(t[1].length - e[1].length);
                });
                if (t.each(a, function(t, e) {
                    var s = e[1];
                    return i.substr(h, s.length).toLowerCase() === s.toLowerCase() ? (o = e[0], h += s.length, 
                    !1) : void 0;
                }), -1 !== o) return o + 1;
                throw "Unknown name at position " + h;
            }, x = function() {
                if (i.charAt(h) !== e.charAt(n)) throw "Unexpected literal at position " + h;
                h++;
            };
            for (n = 0; e.length > n; n++) if (b) "'" !== e.charAt(n) || y("'") ? x() : b = !1; else switch (e.charAt(n)) {
              case "d":
                _ = w("d");
                break;

              case "D":
                k("D", u, d);
                break;

              case "o":
                v = w("o");
                break;

              case "m":
                m = w("m");
                break;

              case "M":
                m = k("M", p, f);
                break;

              case "y":
                g = w("y");
                break;

              case "@":
                g = (r = new Date(w("@"))).getFullYear(), m = r.getMonth() + 1, _ = r.getDate();
                break;

              case "!":
                g = (r = new Date((w("!") - this._ticksTo1970) / 1e4)).getFullYear(), m = r.getMonth() + 1, 
                _ = r.getDate();
                break;

              case "'":
                y("'") ? x() : b = !0;
                break;

              default:
                x();
            }
            if (i.length > h && (a = i.substr(h), !/^\s+/.test(a))) throw "Extra/unparsed characters found in date: " + a;
            if (-1 === g ? g = new Date().getFullYear() : g < 100 && (g += new Date().getFullYear() - new Date().getFullYear() % 100 + (g <= c ? 0 : -100)), 
            -1 < v) for (m = 1, _ = v; !(_ <= (o = this._getDaysInMonth(g, m - 1))); ) m++, 
            _ -= o;
            if ((r = this._daylightSavingAdjust(new Date(g, m - 1, _))).getFullYear() !== g || r.getMonth() + 1 !== m || r.getDate() !== _) throw "Invalid date";
            return r;
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function(t, e, i) {
            if (!e) return "";
            var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, o = (i ? i.dayNames : null) || this._defaults.dayNames, a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, r = (i ? i.monthNames : null) || this._defaults.monthNames, h = function(e) {
                var i = t.length > s + 1 && t.charAt(s + 1) === e;
                return i && s++, i;
            }, l = function(t, e, i) {
                var s = "" + e;
                if (h(t)) for (;i > s.length; ) s = "0" + s;
                return s;
            }, c = function(t, e, i, s) {
                return h(t) ? s[e] : i[e];
            }, u = "", d = !1;
            if (e) for (s = 0; t.length > s; s++) if (d) "'" !== t.charAt(s) || h("'") ? u += t.charAt(s) : d = !1; else switch (t.charAt(s)) {
              case "d":
                u += l("d", e.getDate(), 2);
                break;

              case "D":
                u += c("D", e.getDay(), n, o);
                break;

              case "o":
                u += l("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                break;

              case "m":
                u += l("m", e.getMonth() + 1, 2);
                break;

              case "M":
                u += c("M", e.getMonth(), a, r);
                break;

              case "y":
                u += h("y") ? e.getFullYear() : (e.getFullYear() % 100 < 10 ? "0" : "") + e.getFullYear() % 100;
                break;

              case "@":
                u += e.getTime();
                break;

              case "!":
                u += 1e4 * e.getTime() + this._ticksTo1970;
                break;

              case "'":
                h("'") ? u += "'" : d = !0;
                break;

              default:
                u += t.charAt(s);
            }
            return u;
        },
        _possibleChars: function(t) {
            var e, i = "", s = !1, n = function(i) {
                var s = t.length > e + 1 && t.charAt(e + 1) === i;
                return s && e++, s;
            };
            for (e = 0; t.length > e; e++) if (s) "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1; else switch (t.charAt(e)) {
              case "d":
              case "m":
              case "y":
              case "@":
                i += "0123456789";
                break;

              case "D":
              case "M":
                return null;

              case "'":
                n("'") ? i += "'" : s = !0;
                break;

              default:
                i += t.charAt(e);
            }
            return i;
        },
        _get: function(t, e) {
            return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e];
        },
        _setDateFromField: function(t, e) {
            if (t.input.val() !== t.lastVal) {
                var i = this._get(t, "dateFormat"), s = t.lastVal = t.input ? t.input.val() : null, n = this._getDefaultDate(t), o = n, a = this._getFormatConfig(t);
                try {
                    o = this.parseDate(i, s, a) || n;
                } catch (r) {
                    s = e ? "" : s;
                }
                t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), 
                t.currentDay = s ? o.getDate() : 0, t.currentMonth = s ? o.getMonth() : 0, t.currentYear = s ? o.getFullYear() : 0, 
                this._adjustInstDate(t);
            }
        },
        _getDefaultDate: function(t) {
            return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date()));
        },
        _determineDate: function(e, i, s) {
            var a = null == i || "" === i ? s : "string" == typeof i ? function(i) {
                try {
                    return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e));
                } catch (s) {}
                for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date(), o = n.getFullYear(), a = n.getMonth(), r = n.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i); l; ) {
                    switch (l[2] || "d") {
                      case "d":
                      case "D":
                        r += parseInt(l[1], 10);
                        break;

                      case "w":
                      case "W":
                        r += 7 * parseInt(l[1], 10);
                        break;

                      case "m":
                      case "M":
                        a += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a));
                        break;

                      case "y":
                      case "Y":
                        o += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a));
                    }
                    l = h.exec(i);
                }
                return new Date(o, a, r);
            }(i) : "number" == typeof i ? isNaN(i) ? s : function(t) {
                var e = new Date();
                return e.setDate(e.getDate() + t), e;
            }(i) : new Date(i.getTime());
            return (a = a && "Invalid Date" == "" + a ? s : a) && (a.setHours(0), a.setMinutes(0), 
            a.setSeconds(0), a.setMilliseconds(0)), this._daylightSavingAdjust(a);
        },
        _daylightSavingAdjust: function(t) {
            return t ? (t.setHours(12 < t.getHours() ? t.getHours() + 2 : 0), t) : null;
        },
        _setDate: function(t, e, i) {
            var s = !e, n = t.selectedMonth, o = t.selectedYear, a = this._restrictMinMax(t, this._determineDate(t, e, new Date()));
            t.selectedDay = t.currentDay = a.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(), 
            t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(), n === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), 
            this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t));
        },
        _getDate: function(t) {
            return !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
        },
        _attachHandlers: function(e) {
            var i = this._get(e, "stepMonths"), s = "#" + e.id.replace(/\\\\/g, "\\");
            e.dpDiv.find("[data-handler]").map(function() {
                var e = {
                    prev: function() {
                        t.datepicker._adjustDate(s, -i, "M");
                    },
                    next: function() {
                        t.datepicker._adjustDate(s, +i, "M");
                    },
                    hide: function() {
                        t.datepicker._hideDatepicker();
                    },
                    today: function() {
                        t.datepicker._gotoToday(s);
                    },
                    selectDay: function() {
                        return t.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), 
                        !1;
                    },
                    selectMonth: function() {
                        return t.datepicker._selectMonthYear(s, this, "M"), !1;
                    },
                    selectYear: function() {
                        return t.datepicker._selectMonthYear(s, this, "Y"), !1;
                    }
                };
                t(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")]);
            });
        },
        _generateHTML: function(t) {
            var e, i, s, n, o, a, r, h, l, c, u, d, p, f, g, m, _, v, b, y, w, k, x, C, D, I, T, P, M, S, H, z, O, A, N, W, E, F, L, R = new Date(), B = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())), Y = this._get(t, "isRTL"), j = this._get(t, "showButtonPanel"), q = this._get(t, "hideIfNoPrevNext"), K = this._get(t, "navigationAsDateFormat"), U = this._getNumberOfMonths(t), V = this._get(t, "showCurrentAtPos"), $ = this._get(t, "stepMonths"), X = 1 !== U[0] || 1 !== U[1], G = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)), Q = this._getMinMaxDate(t, "min"), J = this._getMinMaxDate(t, "max"), Z = t.drawMonth - V, te = t.drawYear;
            if (Z < 0 && (Z += 12, te--), J) for (e = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - U[0] * U[1] + 1, J.getDate())), 
            e = Q && e < Q ? Q : e; this._daylightSavingAdjust(new Date(te, Z, 1)) > e; ) --Z < 0 && (Z = 11, 
            te--);
            for (t.drawMonth = Z, t.drawYear = te, i = this._get(t, "prevText"), i = K ? this.formatDate(i, this._daylightSavingAdjust(new Date(te, Z - $, 1)), this._getFormatConfig(t)) : i, 
            s = this._canAdjustMonth(t, -1, te, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : q ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>", 
            n = this._get(t, "nextText"), n = K ? this.formatDate(n, this._daylightSavingAdjust(new Date(te, Z + $, 1)), this._getFormatConfig(t)) : n, 
            o = this._canAdjustMonth(t, 1, te, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : q ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>", 
            a = this._get(t, "currentText"), r = this._get(t, "gotoCurrent") && t.currentDay ? G : B, 
            a = K ? this.formatDate(a, r, this._getFormatConfig(t)) : a, h = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", 
            l = j ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (Y ? "" : h) + "</div>" : "", 
            c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), 
            d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), 
            g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), _ = this._get(t, "showOtherMonths"), 
            v = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), y = "", k = 0; U[0] > k; k++) {
                for (x = "", this.maxRows = 4, C = 0; U[1] > C; C++) {
                    if (D = this._daylightSavingAdjust(new Date(te, Z, t.selectedDay)), I = " ui-corner-all", 
                    T = "", X) {
                        if (T += "<div class='ui-datepicker-group", 1 < U[1]) switch (C) {
                          case 0:
                            T += " ui-datepicker-group-first", I = " ui-corner-" + (Y ? "right" : "left");
                            break;

                          case U[1] - 1:
                            T += " ui-datepicker-group-last", I = " ui-corner-" + (Y ? "left" : "right");
                            break;

                          default:
                            T += " ui-datepicker-group-middle", I = "";
                        }
                        T += "'>";
                    }
                    for (T += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + I + "'>" + (/all|left/.test(I) && 0 === k ? Y ? o : s : "") + (/all|right/.test(I) && 0 === k ? Y ? s : o : "") + this._generateMonthYearHeader(t, Z, te, Q, J, 0 < k || 0 < C, f, g) + "</div><table class='ui-datepicker-calendar'><thead><tr>", 
                    P = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", 
                    w = 0; w < 7; w++) P += "<th scope='col'" + (5 <= (w + c + 6) % 7 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[M = (w + c) % 7] + "'>" + p[M] + "</span></th>";
                    for (T += P + "</tr></thead><tbody>", S = this._getDaysInMonth(te, Z), te === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, S)), 
                    H = (this._getFirstDayOfMonth(te, Z) - c + 7) % 7, z = Math.ceil((H + S) / 7), O = X && this.maxRows > z ? this.maxRows : z, 
                    this.maxRows = O, A = this._daylightSavingAdjust(new Date(te, Z, 1 - H)), N = 0; N < O; N++) {
                        for (T += "<tr>", W = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(A) + "</td>" : "", 
                        w = 0; w < 7; w++) E = m ? m.apply(t.input ? t.input[0] : null, [ A ]) : [ !0, "" ], 
                        L = (F = A.getMonth() !== Z) && !v || !E[0] || Q && A < Q || J && J < A, W += "<td class='" + (5 <= (w + c + 6) % 7 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (A.getTime() === D.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === A.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (L ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !_ ? "" : " " + E[1] + (A.getTime() === G.getTime() ? " " + this._currentClass : "") + (A.getTime() === B.getTime() ? " ui-datepicker-today" : "")) + "'" + (F && !_ || !E[2] ? "" : " title='" + E[2].replace(/'/g, "&#39;") + "'") + (L ? "" : " data-handler='selectDay' data-event='click' data-month='" + A.getMonth() + "' data-year='" + A.getFullYear() + "'") + ">" + (F && !_ ? "&#xa0;" : L ? "<span class='ui-state-default'>" + A.getDate() + "</span>" : "<a class='ui-state-default" + (A.getTime() === B.getTime() ? " ui-state-highlight" : "") + (A.getTime() === G.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + A.getDate() + "</a>") + "</td>", 
                        A.setDate(A.getDate() + 1), A = this._daylightSavingAdjust(A);
                        T += W + "</tr>";
                    }
                    11 < ++Z && (Z = 0, te++), x += T += "</tbody></table>" + (X ? "</div>" + (0 < U[0] && C === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
                }
                y += x;
            }
            return y += l, t._keyEvent = !1, y;
        },
        _generateMonthYearHeader: function(t, e, i, s, n, o, a, r) {
            var h, l, c, u, d, p, f, g, m = this._get(t, "changeMonth"), _ = this._get(t, "changeYear"), v = this._get(t, "showMonthAfterYear"), b = "<div class='ui-datepicker-title'>", y = "";
            if (o || !m) y += "<span class='ui-datepicker-month'>" + a[e] + "</span>"; else {
                for (h = s && s.getFullYear() === i, l = n && n.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", 
                c = 0; c < 12; c++) (!h || c >= s.getMonth()) && (!l || n.getMonth() >= c) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + r[c] + "</option>");
                y += "</select>";
            }
            if (v || (b += y + (!o && m && _ ? "" : "&#xa0;")), !t.yearshtml) if (t.yearshtml = "", 
            o || !_) b += "<span class='ui-datepicker-year'>" + i + "</span>"; else {
                for (u = this._get(t, "yearRange").split(":"), d = new Date().getFullYear(), f = (p = function(t) {
                    var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
                    return isNaN(e) ? d : e;
                })(u[0]), g = Math.max(f, p(u[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, 
                g = n ? Math.min(g, n.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; f <= g; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null;
            }
            return b += this._get(t, "yearSuffix"), v && (b += (!o && m && _ ? "" : "&#xa0;") + y), 
            b + "</div>";
        },
        _adjustInstDate: function(t, e, i) {
            var s = t.selectedYear + ("Y" === i ? e : 0), n = t.selectedMonth + ("M" === i ? e : 0), o = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0), a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, o)));
            t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), 
            ("M" === i || "Y" === i) && this._notifyChange(t);
        },
        _restrictMinMax: function(t, e) {
            var i = this._getMinMaxDate(t, "min"), s = this._getMinMaxDate(t, "max"), n = i && e < i ? i : e;
            return s && s < n ? s : n;
        },
        _notifyChange: function(t) {
            var e = this._get(t, "onChangeMonthYear");
            e && e.apply(t.input ? t.input[0] : null, [ t.selectedYear, t.selectedMonth + 1, t ]);
        },
        _getNumberOfMonths: function(t) {
            var e = this._get(t, "numberOfMonths");
            return null == e ? [ 1, 1 ] : "number" == typeof e ? [ 1, e ] : e;
        },
        _getMinMaxDate: function(t, e) {
            return this._determineDate(t, this._get(t, e + "Date"), null);
        },
        _getDaysInMonth: function(t, e) {
            return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate();
        },
        _getFirstDayOfMonth: function(t, e) {
            return new Date(t, e, 1).getDay();
        },
        _canAdjustMonth: function(t, e, i, s) {
            var n = this._getNumberOfMonths(t), o = this._daylightSavingAdjust(new Date(i, s + (e < 0 ? e : n[0] * n[1]), 1));
            return e < 0 && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), 
            this._isInRange(t, o);
        },
        _isInRange: function(t, e) {
            var i, s, n = this._getMinMaxDate(t, "min"), o = this._getMinMaxDate(t, "max"), a = null, r = null, h = this._get(t, "yearRange");
            return h && (i = h.split(":"), s = new Date().getFullYear(), a = parseInt(i[0], 10), 
            r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (a += s), i[1].match(/[+\-].*/) && (r += s)), 
            (!n || e.getTime() >= n.getTime()) && (!o || e.getTime() <= o.getTime()) && (!a || e.getFullYear() >= a) && (!r || r >= e.getFullYear());
        },
        _getFormatConfig: function(t) {
            var e = this._get(t, "shortYearCutoff");
            return {
                shortYearCutoff: e = "string" != typeof e ? e : new Date().getFullYear() % 100 + parseInt(e, 10),
                dayNamesShort: this._get(t, "dayNamesShort"),
                dayNames: this._get(t, "dayNames"),
                monthNamesShort: this._get(t, "monthNamesShort"),
                monthNames: this._get(t, "monthNames")
            };
        },
        _formatDate: function(t, e, i, s) {
            e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
            var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
            return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t));
        }
    }), t.fn.datepicker = function(e) {
        if (!this.length) return this;
        t.datepicker.initialized || (t(document).on("mousedown", t.datepicker._checkExternalClick), 
        t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [ this[0] ].concat(i)) : this.each(function() {
            "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [ this ].concat(i)) : t.datepicker._attachDatepicker(this, e);
        }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [ this[0] ].concat(i));
    }, t.datepicker = new s(), t.datepicker.initialized = !1, t.datepicker.uuid = new Date().getTime(), 
    t.datepicker.version = "1.12.1", t.datepicker, t.widget("ui.dialog", {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            classes: {
                "ui-dialog": "ui-corner-all",
                "ui-dialog-titlebar": "ui-corner-all"
            },
            closeOnEscape: !0,
            closeText: "Close",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(e) {
                    var i = t(this).css(e).offset().top;
                    i < 0 && t(this).css("top", e.top - i);
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        resizableRelatedOptions: {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            }, this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), 
            this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), 
            this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), 
            this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), 
            this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1, 
            this._trackFocus();
        },
        _init: function() {
            this.options.autoOpen && this.open();
        },
        _appendTo: function() {
            var e = this.options.appendTo;
            return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0);
        },
        _destroy: function() {
            var t, e = this.originalPosition;
            this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), 
            this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), 
            (t = e.parent.children().eq(e.index)).length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element);
        },
        widget: function() {
            return this.uiDialog;
        },
        disable: t.noop,
        enable: t.noop,
        close: function(e) {
            var i = this;
            this._isOpen && !1 !== this._trigger("beforeClose", e) && (this._isOpen = !1, this._focusedElement = null, 
            this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])), 
            this._hide(this.uiDialog, this.options.hide, function() {
                i._trigger("close", e);
            }));
        },
        isOpen: function() {
            return this._isOpen;
        },
        moveToTop: function() {
            this._moveToTop();
        },
        _moveToTop: function(e, i) {
            var s = !1, n = this.uiDialog.siblings(".ui-front:visible").map(function() {
                return +t(this).css("z-index");
            }).get(), o = Math.max.apply(null, n);
            return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1), 
            s = !0), s && !i && this._trigger("focus", e), s;
        },
        open: function() {
            var e = this;
            return this._isOpen ? void (this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, 
            this.opener = t(t.ui.safeActiveElement(this.document[0])), this._size(), this._position(), 
            this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), 
            this._show(this.uiDialog, this.options.show, function() {
                e._focusTabbable(), e._trigger("focus");
            }), this._makeFocusTarget(), void this._trigger("open"));
        },
        _focusTabbable: function() {
            var t = this._focusedElement;
            t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), 
            t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), 
            t.length || (t = this.uiDialog), t.eq(0).trigger("focus");
        },
        _keepFocus: function(e) {
            function i() {
                var e = t.ui.safeActiveElement(this.document[0]);
                this.uiDialog[0] === e || t.contains(this.uiDialog[0], e) || this._focusTabbable();
            }
            e.preventDefault(), i.call(this), this._delay(i);
        },
        _createWrapper: function() {
            this.uiDialog = t("<div>").hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), 
            this._on(this.uiDialog, {
                keydown: function(e) {
                    if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), 
                    void this.close(e);
                    if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
                        var i = this.uiDialog.find(":tabbable"), s = i.filter(":first"), n = i.filter(":last");
                        e.target !== n[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== s[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay(function() {
                            n.trigger("focus");
                        }), e.preventDefault()) : (this._delay(function() {
                            s.trigger("focus");
                        }), e.preventDefault());
                    }
                },
                mousedown: function(t) {
                    this._moveToTop(t) && this._focusTabbable();
                }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            });
        },
        _createTitlebar: function() {
            var e;
            this.uiDialogTitlebar = t("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), 
            this._on(this.uiDialogTitlebar, {
                mousedown: function(e) {
                    t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus");
                }
            }), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({
                label: t("<a>").text(this.options.closeText).html(),
                icon: "ui-icon-closethick",
                showLabel: !1
            }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), 
            this._on(this.uiDialogTitlebarClose, {
                click: function(t) {
                    t.preventDefault(), this.close(t);
                }
            }), e = t("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(e, "ui-dialog-title"), 
            this._title(e), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({
                "aria-labelledby": e.attr("id")
            });
        },
        _title: function(t) {
            this.options.title ? t.text(this.options.title) : t.html("&#160;");
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = t("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), 
            this.uiButtonSet = t("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), 
            this._createButtons();
        },
        _createButtons: function() {
            var e = this, i = this.options.buttons;
            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? void this._removeClass(this.uiDialog, "ui-dialog-buttons") : (t.each(i, function(i, s) {
                var n, o;
                s = t.isFunction(s) ? {
                    click: s,
                    text: i
                } : s, s = t.extend({
                    type: "button"
                }, s), n = s.click, o = {
                    icon: s.icon,
                    iconPosition: s.iconPosition,
                    showLabel: s.showLabel,
                    icons: s.icons,
                    text: s.text
                }, delete s.click, delete s.icon, delete s.iconPosition, delete s.showLabel, delete s.icons, 
                "boolean" == typeof s.text && delete s.text, t("<button></button>", s).button(o).appendTo(e.uiButtonSet).on("click", function() {
                    n.apply(e.element[0], arguments);
                });
            }), this._addClass(this.uiDialog, "ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog));
        },
        _makeDraggable: function() {
            function e(t) {
                return {
                    position: t.position,
                    offset: t.offset
                };
            }
            var i = this, s = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(s, n) {
                    i._addClass(t(this), "ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", s, e(n));
                },
                drag: function(t, s) {
                    i._trigger("drag", t, e(s));
                },
                stop: function(n, o) {
                    var a = o.offset.left - i.document.scrollLeft(), r = o.offset.top - i.document.scrollTop();
                    s.position = {
                        my: "left top",
                        at: "left" + (0 <= a ? "+" : "") + a + " top" + (0 <= r ? "+" : "") + r,
                        of: i.window
                    }, i._removeClass(t(this), "ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", n, e(o));
                }
            });
        },
        _makeResizable: function() {
            function e(t) {
                return {
                    originalPosition: t.originalPosition,
                    originalSize: t.originalSize,
                    position: t.position,
                    size: t.size
                };
            }
            var i = this, s = this.options, n = s.resizable, o = this.uiDialog.css("position"), a = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: s.maxWidth,
                maxHeight: s.maxHeight,
                minWidth: s.minWidth,
                minHeight: this._minHeight(),
                handles: a,
                start: function(s, n) {
                    i._addClass(t(this), "ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", s, e(n));
                },
                resize: function(t, s) {
                    i._trigger("resize", t, e(s));
                },
                stop: function(n, o) {
                    var a = i.uiDialog.offset(), r = a.left - i.document.scrollLeft(), h = a.top - i.document.scrollTop();
                    s.height = i.uiDialog.height(), s.width = i.uiDialog.width(), s.position = {
                        my: "left top",
                        at: "left" + (0 <= r ? "+" : "") + r + " top" + (0 <= h ? "+" : "") + h,
                        of: i.window
                    }, i._removeClass(t(this), "ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", n, e(o));
                }
            }).css("position", o);
        },
        _trackFocus: function() {
            this._on(this.widget(), {
                focusin: function(e) {
                    this._makeFocusTarget(), this._focusedElement = t(e.target);
                }
            });
        },
        _makeFocusTarget: function() {
            this._untrackInstance(), this._trackingInstances().unshift(this);
        },
        _untrackInstance: function() {
            var e = this._trackingInstances(), i = t.inArray(this, e);
            -1 !== i && e.splice(i, 1);
        },
        _trackingInstances: function() {
            var t = this.document.data("ui-dialog-instances");
            return t || (t = [], this.document.data("ui-dialog-instances", t)), t;
        },
        _minHeight: function() {
            var t = this.options;
            return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height);
        },
        _position: function() {
            var t = this.uiDialog.is(":visible");
            t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide();
        },
        _setOptions: function(e) {
            var i = this, s = !1, n = {};
            t.each(e, function(t, e) {
                i._setOption(t, e), t in i.sizeRelatedOptions && (s = !0), t in i.resizableRelatedOptions && (n[t] = e);
            }), s && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n);
        },
        _setOption: function(e, i) {
            var s, n, o = this.uiDialog;
            "disabled" !== e && (this._super(e, i), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), 
            "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({
                label: t("<a>").text("" + this.options.closeText).html()
            }), "draggable" === e && ((s = o.is(":data(ui-draggable)")) && !i && o.draggable("destroy"), 
            !s && i && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && ((n = o.is(":data(ui-resizable)")) && !i && o.resizable("destroy"), 
            n && "string" == typeof i && o.resizable("option", "handles", i), n || !1 === i || this._makeResizable()), 
            "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")));
        },
        _size: function() {
            var t, e, i, s = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }), s.minWidth > s.width && (s.width = s.minWidth), t = this.uiDialog.css({
                height: "auto",
                width: s.width
            }).outerHeight(), e = Math.max(0, s.minHeight - t), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none", 
            "auto" === s.height ? this.element.css({
                minHeight: e,
                maxHeight: i,
                height: "auto"
            }) : this.element.height(Math.max(0, s.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight());
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var e = t(this);
                return t("<div>").css({
                    position: "absolute",
                    width: e.outerWidth(),
                    height: e.outerHeight()
                }).appendTo(e.parent()).offset(e.offset())[0];
            });
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
        },
        _allowInteraction: function(e) {
            return !!t(e.target).closest(".ui-dialog").length || !!t(e.target).closest(".ui-datepicker").length;
        },
        _createOverlay: function() {
            if (this.options.modal) {
                var e = !0;
                this._delay(function() {
                    e = !1;
                }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
                    focusin: function(t) {
                        e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable());
                    }
                }), this.overlay = t("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), 
                this._on(this.overlay, {
                    mousedown: "_keepFocus"
                }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1);
            }
        },
        _destroyOverlay: function() {
            if (this.options.modal && this.overlay) {
                var t = this.document.data("ui-dialog-overlays") - 1;
                t ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"), 
                this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null;
            }
        }
    }), !1 !== t.uiBackCompat && t.widget("ui.dialog", t.ui.dialog, {
        options: {
            dialogClass: ""
        },
        _createWrapper: function() {
            this._super(), this.uiDialog.addClass(this.options.dialogClass);
        },
        _setOption: function(t, e) {
            "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), 
            this._superApply(arguments);
        }
    }), t.ui.dialog, t.widget("ui.progressbar", {
        version: "1.12.1",
        options: {
            classes: {
                "ui-progressbar": "ui-corner-all",
                "ui-progressbar-value": "ui-corner-left",
                "ui-progressbar-complete": "ui-corner-right"
            },
            max: 100,
            value: 0,
            change: null,
            complete: null
        },
        min: 0,
        _create: function() {
            this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({
                role: "progressbar",
                "aria-valuemin": this.min
            }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = t("<div>").appendTo(this.element), 
            this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue();
        },
        _destroy: function() {
            this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove();
        },
        value: function(t) {
            return void 0 === t ? this.options.value : (this.options.value = this._constrainedValue(t), 
            void this._refreshValue());
        },
        _constrainedValue: function(t) {
            return void 0 === t && (t = this.options.value), this.indeterminate = !1 === t, 
            "number" != typeof t && (t = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, t));
        },
        _setOptions: function(t) {
            var e = t.value;
            delete t.value, this._super(t), this.options.value = this._constrainedValue(e), 
            this._refreshValue();
        },
        _setOption: function(t, e) {
            "max" === t && (e = Math.max(this.min, e)), this._super(t, e);
        },
        _setOptionDisabled: function(t) {
            this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t);
        },
        _percentage: function() {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min);
        },
        _refreshValue: function() {
            var e = this.options.value, i = this._percentage();
            this.valueDiv.toggle(this.indeterminate || e > this.min).width(i.toFixed(0) + "%"), 
            this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, e === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), 
            this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div>").appendTo(this.valueDiv), 
            this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": e
            }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, 
            this._trigger("change")), e === this.options.max && this._trigger("complete");
        }
    }), t.widget("ui.selectmenu", [ t.ui.formResetMixin, {
        version: "1.12.1",
        defaultElement: "<select>",
        options: {
            appendTo: null,
            classes: {
                "ui-selectmenu-button-open": "ui-corner-top",
                "ui-selectmenu-button-closed": "ui-corner-all"
            },
            disabled: null,
            icons: {
                button: "ui-icon-triangle-1-s"
            },
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            width: !1,
            change: null,
            close: null,
            focus: null,
            open: null,
            select: null
        },
        _create: function() {
            var e = this.element.uniqueId().attr("id");
            this.ids = {
                element: e,
                button: e + "-button",
                menu: e + "-menu"
            }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, 
            this.menuItems = t();
        },
        _drawButton: function() {
            var e, i = this, s = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
            this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, {
                click: function(t) {
                    this.button.focus(), t.preventDefault();
                }
            }), this.element.hide(), this.button = t("<span>", {
                tabindex: this.options.disabled ? -1 : 0,
                id: this.ids.button,
                role: "combobox",
                "aria-expanded": "false",
                "aria-autocomplete": "list",
                "aria-owns": this.ids.menu,
                "aria-haspopup": "true",
                title: this.element.attr("title")
            }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), 
            e = t("<span>").appendTo(this.button), this._addClass(e, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), 
            this.buttonItem = this._renderButtonItem(s).appendTo(this.button), !1 !== this.options.width && this._resizeButton(), 
            this._on(this.button, this._buttonEvents), this.button.one("focusin", function() {
                i._rendered || i._refreshMenu();
            });
        },
        _drawMenu: function() {
            var e = this;
            this.menu = t("<ul>", {
                "aria-hidden": "true",
                "aria-labelledby": this.ids.button,
                id: this.ids.menu
            }), this.menuWrap = t("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), 
            this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                classes: {
                    "ui-menu": "ui-corner-bottom"
                },
                role: "listbox",
                select: function(t, i) {
                    t.preventDefault(), e._setSelection(), e._select(i.item.data("ui-selectmenu-item"), t);
                },
                focus: function(t, i) {
                    var s = i.item.data("ui-selectmenu-item");
                    null != e.focusIndex && s.index !== e.focusIndex && (e._trigger("focus", t, {
                        item: s
                    }), e.isOpen || e._select(s, t)), e.focusIndex = s.index, e.button.attr("aria-activedescendant", e.menuItems.eq(s.index).attr("id"));
                }
            }).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function() {
                return !1;
            }, this.menuInstance._isDivider = function() {
                return !1;
            };
        },
        refresh: function() {
            this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), 
            null === this.options.width && this._resizeButton();
        },
        _refreshMenu: function() {
            var t, e = this.element.find("option");
            this.menu.empty(), this._parseOptions(e), this._renderMenu(this.menu, this.items), 
            this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), 
            this._rendered = !0, e.length && (t = this._getSelectedItem(), this.menuInstance.focus(null, t), 
            this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")));
        },
        open: function(t) {
            this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), 
            this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, 
            this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), 
            this._trigger("open", t)));
        },
        _position: function() {
            this.menuWrap.position(t.extend({
                of: this.button
            }, this.options.position));
        },
        close: function(t) {
            this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), 
            this._trigger("close", t));
        },
        widget: function() {
            return this.button;
        },
        menuWidget: function() {
            return this.menu;
        },
        _renderButtonItem: function(e) {
            var i = t("<span>");
            return this._setText(i, e.label), this._addClass(i, "ui-selectmenu-text"), i;
        },
        _renderMenu: function(e, i) {
            var s = this, n = "";
            t.each(i, function(i, o) {
                var a;
                o.optgroup !== n && (a = t("<li>", {
                    text: o.optgroup
                }), s._addClass(a, "ui-selectmenu-optgroup", "ui-menu-divider" + (o.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), 
                a.appendTo(e), n = o.optgroup), s._renderItemData(e, o);
            });
        },
        _renderItemData: function(t, e) {
            return this._renderItem(t, e).data("ui-selectmenu-item", e);
        },
        _renderItem: function(e, i) {
            var s = t("<li>"), n = t("<div>", {
                title: i.element.attr("title")
            });
            return i.disabled && this._addClass(s, null, "ui-state-disabled"), this._setText(n, i.label), 
            s.append(n).appendTo(e);
        },
        _setText: function(t, e) {
            e ? t.text(e) : t.html("&#160;");
        },
        _move: function(t, e) {
            var i, s, n = ".ui-menu-item";
            this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), 
            n += ":not(.ui-state-disabled)"), (s = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](n).eq(-1) : i[t + "All"](n).eq(0)).length && this.menuInstance.focus(e, s);
        },
        _getSelectedItem: function() {
            return this.menuItems.eq(this.element[0].selectedIndex).parent("li");
        },
        _toggle: function(t) {
            this[this.isOpen ? "close" : "open"](t);
        },
        _setSelection: function() {
            var t;
            this.range && (window.getSelection ? ((t = window.getSelection()).removeAllRanges(), 
            t.addRange(this.range)) : this.range.select(), this.button.focus());
        },
        _documentClick: {
            mousedown: function(e) {
                this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + t.ui.escapeSelector(this.ids.button)).length || this.close(e));
            }
        },
        _buttonEvents: {
            mousedown: function() {
                var t;
                window.getSelection ? (t = window.getSelection()).rangeCount && (this.range = t.getRangeAt(0)) : this.range = document.selection.createRange();
            },
            click: function(t) {
                this._setSelection(), this._toggle(t);
            },
            keydown: function(e) {
                var i = !0;
                switch (e.keyCode) {
                  case t.ui.keyCode.TAB:
                  case t.ui.keyCode.ESCAPE:
                    this.close(e), i = !1;
                    break;

                  case t.ui.keyCode.ENTER:
                    this.isOpen && this._selectFocusedItem(e);
                    break;

                  case t.ui.keyCode.UP:
                    e.altKey ? this._toggle(e) : this._move("prev", e);
                    break;

                  case t.ui.keyCode.DOWN:
                    e.altKey ? this._toggle(e) : this._move("next", e);
                    break;

                  case t.ui.keyCode.SPACE:
                    this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
                    break;

                  case t.ui.keyCode.LEFT:
                    this._move("prev", e);
                    break;

                  case t.ui.keyCode.RIGHT:
                    this._move("next", e);
                    break;

                  case t.ui.keyCode.HOME:
                  case t.ui.keyCode.PAGE_UP:
                    this._move("first", e);
                    break;

                  case t.ui.keyCode.END:
                  case t.ui.keyCode.PAGE_DOWN:
                    this._move("last", e);
                    break;

                  default:
                    this.menu.trigger(e), i = !1;
                }
                i && e.preventDefault();
            }
        },
        _selectFocusedItem: function(t) {
            var e = this.menuItems.eq(this.focusIndex).parent("li");
            e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t);
        },
        _select: function(t, e) {
            var i = this.element[0].selectedIndex;
            this.element[0].selectedIndex = t.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)), 
            this._setAria(t), this._trigger("select", e, {
                item: t
            }), t.index !== i && this._trigger("change", e, {
                item: t
            }), this.close(e);
        },
        _setAria: function(t) {
            var e = this.menuItems.eq(t.index).attr("id");
            this.button.attr({
                "aria-labelledby": e,
                "aria-activedescendant": e
            }), this.menu.attr("aria-activedescendant", e);
        },
        _setOption: function(t, e) {
            if ("icons" === t) {
                var i = this.button.find("span.ui-icon");
                this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button);
            }
            this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), 
            "width" === t && this._resizeButton();
        },
        _setOptionDisabled: function(t) {
            this._super(t), this.menuInstance.option("disabled", t), this.button.attr("aria-disabled", t), 
            this._toggleClass(this.button, null, "ui-state-disabled", t), this.element.prop("disabled", t), 
            t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0);
        },
        _appendTo: function() {
            var e = this.options.appendTo;
            return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), 
            e.length || (e = this.document[0].body), e;
        },
        _toggleAttr: function() {
            this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), 
            this.menu.attr("aria-hidden", !this.isOpen);
        },
        _resizeButton: function() {
            var t = this.options.width;
            return !1 === t ? void this.button.css("width", "") : (null === t && (t = this.element.show().outerWidth(), 
            this.element.hide()), void this.button.outerWidth(t));
        },
        _resizeMenu: function() {
            this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1));
        },
        _getCreateOptions: function() {
            var t = this._super();
            return t.disabled = this.element.prop("disabled"), t;
        },
        _parseOptions: function(e) {
            var i = this, s = [];
            e.each(function(e, n) {
                s.push(i._parseOption(t(n), e));
            }), this.items = s;
        },
        _parseOption: function(t, e) {
            var i = t.parent("optgroup");
            return {
                element: t,
                index: e,
                value: t.val(),
                label: t.text(),
                optgroup: i.attr("label") || "",
                disabled: i.prop("disabled") || t.prop("disabled")
            };
        },
        _destroy: function() {
            this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), 
            this.element.removeUniqueId(), this.labels.attr("for", this.ids.element);
        }
    } ]), t.widget("ui.slider", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            classes: {
                "ui-slider": "ui-corner-all",
                "ui-slider-handle": "ui-corner-all",
                "ui-slider-range": "ui-corner-all ui-widget-header"
            },
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function() {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, 
            this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), 
            this._refresh(), this._animateOff = !1;
        },
        _refresh: function() {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
        },
        _createHandles: function() {
            var e, i, s = this.options, n = this.element.find(".ui-slider-handle"), a = [];
            for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), 
            n = n.slice(0, i)), e = n.length; e < i; e++) a.push("<span tabindex='0'></span>");
            this.handles = n.add(t(a.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), 
            this.handle = this.handles.eq(0), this.handles.each(function(e) {
                t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0);
            });
        },
        _createRange: function() {
            var e = this.options;
            e.range ? (!0 === e.range && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [ e.values[0], e.values[0] ] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [ this._valueMin(), this._valueMin() ]), 
            this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), 
            this.range.css({
                left: "",
                bottom: ""
            })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), 
            ("min" === e.range || "max" === e.range) && this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), 
            this.range = null);
        },
        _setupEvents: function() {
            this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), 
            this._focusable(this.handles);
        },
        _destroy: function() {
            this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy();
        },
        _mouseCapture: function(e) {
            var i, s, n, o, a, h, l, c = this, u = this.options;
            return !u.disabled && (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), i = {
                x: e.pageX,
                y: e.pageY
            }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, 
            this.handles.each(function(e) {
                var i = Math.abs(s - c.values(e));
                (i < n || n === i && (e === c._lastChangedValue || c.values(e) === u.min)) && (n = i, 
                o = t(this), a = e);
            }), !1 !== this._start(e, a) && (this._mouseSliding = !0, this._handleIndex = a, 
            this._addClass(o, null, "ui-state-active"), o.trigger("focus"), h = o.offset(), 
            l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
                left: 0,
                top: 0
            } : {
                left: e.pageX - h.left - o.width() / 2,
                top: e.pageY - h.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(e, a, s), this._animateOff = !0));
        },
        _mouseStart: function() {
            return !0;
        },
        _mouseDrag: function(t) {
            var e = {
                x: t.pageX,
                y: t.pageY
            }, i = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, i), !1;
        },
        _mouseStop: function(t) {
            return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, 
            this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, 
            this._clickOffset = null, this._animateOff = !1;
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal";
        },
        _normValueFromMouse: function(t) {
            var e, i, s, n, o;
            return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, 
            i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), 
            1 < (s = i / e) && (s = 1), s < 0 && (s = 0), "vertical" === this.orientation && (s = 1 - s), 
            n = this._valueMax() - this._valueMin(), o = this._valueMin() + s * n, this._trimAlignValue(o);
        },
        _uiHash: function(t, e, i) {
            var s = {
                handle: this.handles[t],
                handleIndex: t,
                value: void 0 !== e ? e : this.value()
            };
            return this._hasMultipleValues() && (s.value = void 0 !== e ? e : this.values(t), 
            s.values = i || this.values()), s;
        },
        _hasMultipleValues: function() {
            return this.options.values && this.options.values.length;
        },
        _start: function(t, e) {
            return this._trigger("start", t, this._uiHash(e));
        },
        _slide: function(t, e, i) {
            var n, o = this.value(), a = this.values();
            this._hasMultipleValues() && (n = this.values(e ? 0 : 1), o = this.values(e), 2 === this.options.values.length && !0 === this.options.range && (i = 0 === e ? Math.min(n, i) : Math.max(n, i)), 
            a[e] = i), i !== o && (!1 !== this._trigger("slide", t, this._uiHash(e, i, a)) && (this._hasMultipleValues() ? this.values(e, i) : this.value(i)));
        },
        _stop: function(t, e) {
            this._trigger("stop", t, this._uiHash(e));
        },
        _change: function(t, e) {
            this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)));
        },
        value: function(t) {
            return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), 
            void this._change(null, 0)) : this._value();
        },
        values: function(e, i) {
            var s, n, o;
            if (1 < arguments.length) return this.options.values[e] = this._trimAlignValue(i), 
            this._refreshValue(), void this._change(null, e);
            if (!arguments.length) return this._values();
            if (!t.isArray(e)) return this._hasMultipleValues() ? this._values(e) : this.value();
            for (s = this.options.values, n = e, o = 0; s.length > o; o += 1) s[o] = this._trimAlignValue(n[o]), 
            this._change(null, o);
            this._refreshValue();
        },
        _setOption: function(e, i) {
            var s, n = 0;
            switch ("range" === e && !0 === this.options.range && ("min" === i ? (this.options.value = this._values(0), 
            this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), 
            this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), 
            this._super(e, i), e) {
              case "orientation":
                this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), 
                this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", "");
                break;

              case "value":
                this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                break;

              case "values":
                for (this._animateOff = !0, this._refreshValue(), s = n - 1; 0 <= s; s--) this._change(null, s);
                this._animateOff = !1;
                break;

              case "step":
              case "min":
              case "max":
                this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                break;

              case "range":
                this._animateOff = !0, this._refresh(), this._animateOff = !1;
            }
        },
        _setOptionDisabled: function(t) {
            this._super(t), this._toggleClass(null, "ui-state-disabled", !!t);
        },
        _value: function() {
            var t = this.options.value;
            return this._trimAlignValue(t);
        },
        _values: function(t) {
            var e, i, s;
            if (arguments.length) return e = this.options.values[t], this._trimAlignValue(e);
            if (this._hasMultipleValues()) {
                for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
                return i;
            }
            return [];
        },
        _trimAlignValue: function(t) {
            if (this._valueMin() >= t) return this._valueMin();
            if (t >= this._valueMax()) return this._valueMax();
            var e = 0 < this.options.step ? this.options.step : 1, i = (t - this._valueMin()) % e, s = t - i;
            return 2 * Math.abs(i) >= e && (s += 0 < i ? e : -e), parseFloat(s.toFixed(5));
        },
        _calculateNewMax: function() {
            var t = this.options.max, e = this._valueMin(), i = this.options.step;
            (t = Math.round((t - e) / i) * i + e) > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()));
        },
        _precision: function() {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), 
            t;
        },
        _precisionOf: function(t) {
            var e = "" + t, i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1;
        },
        _valueMin: function() {
            return this.options.min;
        },
        _valueMax: function() {
            return this.max;
        },
        _refreshRange: function(t) {
            "vertical" === t && this.range.css({
                width: "",
                left: ""
            }), "horizontal" === t && this.range.css({
                height: "",
                bottom: ""
            });
        },
        _refreshValue: function() {
            var e, i, s, n, o, a = this.options.range, r = this.options, h = this, l = !this._animateOff && r.animate, c = {};
            this._hasMultipleValues() ? this.handles.each(function(s) {
                i = (h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin()) * 100, c["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", 
                t(this).stop(1, 1)[l ? "animate" : "css"](c, r.animate), !0 === h.options.range && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
                    left: i + "%"
                }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
                    width: i - e + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                })) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
                    bottom: i + "%"
                }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
                    height: i - e + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                }))), e = i;
            }) : (s = this.value(), n = this._valueMin(), o = this._valueMax(), i = o !== n ? (s - n) / (o - n) * 100 : 0, 
            c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](c, r.animate), 
            "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                width: i + "%"
            }, r.animate), "max" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                width: 100 - i + "%"
            }, r.animate), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                height: i + "%"
            }, r.animate), "max" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                height: 100 - i + "%"
            }, r.animate));
        },
        _handleEvents: {
            keydown: function(e) {
                var s, n, o, a = t(e.target).data("ui-slider-handle-index");
                switch (e.keyCode) {
                  case t.ui.keyCode.HOME:
                  case t.ui.keyCode.END:
                  case t.ui.keyCode.PAGE_UP:
                  case t.ui.keyCode.PAGE_DOWN:
                  case t.ui.keyCode.UP:
                  case t.ui.keyCode.RIGHT:
                  case t.ui.keyCode.DOWN:
                  case t.ui.keyCode.LEFT:
                    if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), 
                    !1 === this._start(e, a))) return;
                }
                switch (o = this.options.step, s = n = this._hasMultipleValues() ? this.values(a) : this.value(), 
                e.keyCode) {
                  case t.ui.keyCode.HOME:
                    n = this._valueMin();
                    break;

                  case t.ui.keyCode.END:
                    n = this._valueMax();
                    break;

                  case t.ui.keyCode.PAGE_UP:
                    n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);
                    break;

                  case t.ui.keyCode.PAGE_DOWN:
                    n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);
                    break;

                  case t.ui.keyCode.UP:
                  case t.ui.keyCode.RIGHT:
                    if (s === this._valueMax()) return;
                    n = this._trimAlignValue(s + o);
                    break;

                  case t.ui.keyCode.DOWN:
                  case t.ui.keyCode.LEFT:
                    if (s === this._valueMin()) return;
                    n = this._trimAlignValue(s - o);
                }
                this._slide(e, a, n);
            },
            keyup: function(e) {
                var i = t(e.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), 
                this._removeClass(t(e.target), null, "ui-state-active"));
            }
        }
    }), t.widget("ui.spinner", {
        version: "1.12.1",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            classes: {
                "ui-spinner": "ui-corner-all",
                "ui-spinner-down": "ui-corner-br",
                "ui-spinner-up": "ui-corner-tr"
            },
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._setOption("max", this.options.max), this._setOption("min", this.options.min), 
            this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), 
            this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete");
                }
            });
        },
        _getCreateOptions: function() {
            var e = this._super(), i = this.element;
            return t.each([ "min", "max", "step" ], function(t, s) {
                var n = i.attr(s);
                null != n && n.length && (e[s] = n);
            }), e;
        },
        _events: {
            keydown: function(t) {
                this._start(t) && this._keydown(t) && t.preventDefault();
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val();
            },
            blur: function(t) {
                return this.cancelBlur ? void delete this.cancelBlur : (this._stop(), this._refresh(), 
                void (this.previous !== this.element.val() && this._trigger("change", t)));
            },
            mousewheel: function(t, e) {
                if (e) {
                    if (!this.spinning && !this._start(t)) return !1;
                    this._spin((0 < e ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), 
                    this.mousewheelTimer = this._delay(function() {
                        this.spinning && this._stop(t);
                    }, 100), t.preventDefault();
                }
            },
            "mousedown .ui-spinner-button": function(e) {
                function i() {
                    this.element[0] === t.ui.safeActiveElement(this.document[0]) || (this.element.trigger("focus"), 
                    this.previous = s, this._delay(function() {
                        this.previous = s;
                    }));
                }
                var s;
                s = this.element[0] === t.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), 
                e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function() {
                    delete this.cancelBlur, i.call(this);
                }), !1 !== this._start(e) && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e);
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(e) {
                return t(e.currentTarget).hasClass("ui-state-active") ? !1 !== this._start(e) && void this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e) : void 0;
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _enhance: function() {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>");
        },
        _draw: function() {
            this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), 
            this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({
                classes: {
                    "ui-button": ""
                }
            }), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), 
            this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({
                icon: this.options.icons.up,
                showLabel: !1
            }), this.buttons.last().button({
                icon: this.options.icons.down,
                showLabel: !1
            }), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && 0 < this.uiSpinner.height() && this.uiSpinner.height(this.uiSpinner.height());
        },
        _keydown: function(e) {
            var i = this.options, s = t.ui.keyCode;
            switch (e.keyCode) {
              case s.UP:
                return this._repeat(null, 1, e), !0;

              case s.DOWN:
                return this._repeat(null, -1, e), !0;

              case s.PAGE_UP:
                return this._repeat(null, i.page, e), !0;

              case s.PAGE_DOWN:
                return this._repeat(null, -i.page, e), !0;
            }
            return !1;
        },
        _start: function(t) {
            return !(!this.spinning && !1 === this._trigger("start", t)) && (this.counter || (this.counter = 1), 
            this.spinning = !0);
        },
        _repeat: function(t, e, i) {
            t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
                this._repeat(40, e, i);
            }, t), this._spin(e * this.options.step, i);
        },
        _spin: function(t, e) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), 
            this.spinning && !1 === this._trigger("spin", e, {
                value: i
            }) || (this._value(i), this.counter++);
        },
        _increment: function(e) {
            var i = this.options.incremental;
            return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1;
        },
        _precision: function() {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), 
            t;
        },
        _precisionOf: function(t) {
            var e = "" + t, i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1;
        },
        _adjustValue: function(t) {
            var e, i, s = this.options;
            return i = t - (e = null !== s.min ? s.min : 0), t = e + (i = Math.round(i / s.step) * s.step), 
            t = parseFloat(t.toFixed(this._precision())), null !== s.max && t > s.max ? s.max : null !== s.min && s.min > t ? s.min : t;
        },
        _stop: function(t) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), 
            this.counter = 0, this.spinning = !1, this._trigger("stop", t));
        },
        _setOption: function(t, e) {
            var i, s, n;
            return "culture" === t || "numberFormat" === t ? (i = this._parse(this.element.val()), 
            this.options[t] = e, void this.element.val(this._format(i))) : (("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), 
            "icons" === t && (s = this.buttons.first().find(".ui-icon"), this._removeClass(s, null, this.options.icons.up), 
            this._addClass(s, null, e.up), n = this.buttons.last().find(".ui-icon"), this._removeClass(n, null, this.options.icons.down), 
            this._addClass(n, null, e.down)), void this._super(t, e));
        },
        _setOptionDisabled: function(t) {
            this._super(t), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t), 
            this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable");
        },
        _setOptions: r(function(t) {
            this._super(t);
        }),
        _parse: function(t) {
            return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), 
            "" === t || isNaN(t) ? null : t;
        },
        _format: function(t) {
            return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t;
        },
        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            });
        },
        isValid: function() {
            var t = this.value();
            return null !== t && t === this._adjustValue(t);
        },
        _value: function(t, e) {
            var i;
            "" !== t && (null !== (i = this._parse(t)) && (e || (i = this._adjustValue(i)), 
            t = this._format(i))), this.element.val(t), this._refresh();
        },
        _destroy: function() {
            this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), 
            this.uiSpinner.replaceWith(this.element);
        },
        stepUp: r(function(t) {
            this._stepUp(t);
        }),
        _stepUp: function(t) {
            this._start() && (this._spin((t || 1) * this.options.step), this._stop());
        },
        stepDown: r(function(t) {
            this._stepDown(t);
        }),
        _stepDown: function(t) {
            this._start() && (this._spin((t || 1) * -this.options.step), this._stop());
        },
        pageUp: r(function(t) {
            this._stepUp((t || 1) * this.options.page);
        }),
        pageDown: r(function(t) {
            this._stepDown((t || 1) * this.options.page);
        }),
        value: function(t) {
            return arguments.length ? void r(this._value).call(this, t) : this._parse(this.element.val());
        },
        widget: function() {
            return this.uiSpinner;
        }
    }), !1 !== t.uiBackCompat && t.widget("ui.spinner", t.ui.spinner, {
        _enhance: function() {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
        },
        _uiSpinnerHtml: function() {
            return "<span>";
        },
        _buttonHtml: function() {
            return "<a></a><a></a>";
        }
    }), t.ui.spinner, t.widget("ui.tabs", {
        version: "1.12.1",
        delay: 300,
        options: {
            active: null,
            classes: {
                "ui-tabs": "ui-corner-all",
                "ui-tabs-nav": "ui-corner-all",
                "ui-tabs-panel": "ui-corner-bottom",
                "ui-tabs-tab": "ui-corner-top"
            },
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: function() {
            var t = /#.*$/;
            return function(e) {
                var i, s;
                i = e.href.replace(t, ""), s = location.href.replace(t, "");
                try {
                    i = decodeURIComponent(i);
                } catch (n) {}
                try {
                    s = decodeURIComponent(s);
                } catch (n) {}
                return 1 < e.hash.length && i === s;
            };
        }(),
        _create: function() {
            var e = this, i = this.options;
            this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, i.collapsible), 
            this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) {
                return e.tabs.index(t);
            }))).sort()), this.active = !1 !== this.options.active && this.anchors.length ? this._findActive(i.active) : t(), 
            this._refresh(), this.active.length && this.load(i.active);
        },
        _initialActive: function() {
            var e = this.options.active, i = this.options.collapsible, s = location.hash.substring(1);
            return null === e && (s && this.tabs.each(function(i, n) {
                return t(n).attr("aria-controls") === s ? (e = i, !1) : void 0;
            }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = !!this.tabs.length && 0)), 
            !1 !== e && (-1 === (e = this.tabs.index(this.tabs.eq(e))) && (e = !i && 0)), !i && !1 === e && this.anchors.length && (e = 0), 
            e;
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : t()
            };
        },
        _tabKeydown: function(e) {
            var i = t(t.ui.safeActiveElement(this.document[0])).closest("li"), s = this.tabs.index(i), n = !0;
            if (!this._handlePageNav(e)) {
                switch (e.keyCode) {
                  case t.ui.keyCode.RIGHT:
                  case t.ui.keyCode.DOWN:
                    s++;
                    break;

                  case t.ui.keyCode.UP:
                  case t.ui.keyCode.LEFT:
                    n = !1, s--;
                    break;

                  case t.ui.keyCode.END:
                    s = this.anchors.length - 1;
                    break;

                  case t.ui.keyCode.HOME:
                    s = 0;
                    break;

                  case t.ui.keyCode.SPACE:
                    return e.preventDefault(), clearTimeout(this.activating), void this._activate(s);

                  case t.ui.keyCode.ENTER:
                    return e.preventDefault(), clearTimeout(this.activating), void this._activate(s !== this.options.active && s);

                  default:
                    return;
                }
                e.preventDefault(), clearTimeout(this.activating), s = this._focusNextTab(s, n), 
                e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(s).attr("aria-selected", "true"), 
                this.activating = this._delay(function() {
                    this.option("active", s);
                }, this.delay));
            }
        },
        _panelKeydown: function(e) {
            this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), 
            this.active.trigger("focus"));
        },
        _handlePageNav: function(e) {
            return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), 
            !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), 
            !0) : void 0;
        },
        _findNextTab: function(e, i) {
            for (var n = this.tabs.length - 1; -1 !== t.inArray((n < e && (e = 0), e < 0 && (e = n), 
            e), this.options.disabled); ) e = i ? e + 1 : e - 1;
            return e;
        },
        _focusNextTab: function(t, e) {
            return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t;
        },
        _setOption: function(t, e) {
            return "active" === t ? void this._activate(e) : (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), 
            e || !1 !== this.options.active || this._activate(0)), "event" === t && this._setupEvents(e), 
            void ("heightStyle" === t && this._setupHeightStyle(e)));
        },
        _sanitizeSelector: function(t) {
            return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "";
        },
        refresh: function() {
            var e = this.options, i = this.tablist.children(":has(a[href])");
            e.disabled = t.map(i.filter(".ui-state-disabled"), function(t) {
                return i.index(t);
            }), this._processTabs(), !1 !== e.active && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, 
            this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, 
            this.active = t()), this._refresh();
        },
        _refresh: function() {
            this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), 
            this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-hidden": "true"
            }), this.active.length ? (this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0);
        },
        _processTabs: function() {
            var e = this, i = this.tabs, s = this.anchors, n = this.panels;
            this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), 
            this.tablist.on("mousedown" + this.eventNamespace, "> li", function(e) {
                t(this).is(".ui-state-disabled") && e.preventDefault();
            }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() {
                t(this).closest("li").is(".ui-state-disabled") && this.blur();
            }), this.tabs = this.tablist.find("> li:has(a[href])").attr({
                role: "tab",
                tabIndex: -1
            }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function() {
                return t("a", this)[0];
            }).attr({
                role: "presentation",
                tabIndex: -1
            }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = t(), this.anchors.each(function(i, s) {
                var n, o, a, r = t(s).uniqueId().attr("id"), h = t(s).closest("li"), l = h.attr("aria-controls");
                e._isLocal(s) ? (a = (n = s.hash).substring(1), o = e.element.find(e._sanitizeSelector(n))) : (n = "#" + (a = h.attr("aria-controls") || t({}).uniqueId()[0].id), 
                (o = e.element.find(n)).length || (o = e._createPanel(a)).insertAfter(e.panels[i - 1] || e.tablist), 
                o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), l && h.data("ui-tabs-aria-controls", l), 
                h.attr({
                    "aria-controls": a,
                    "aria-labelledby": r
                }), o.attr("aria-labelledby", r);
            }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), 
            i && (this._off(i.not(this.tabs)), this._off(s.not(this.anchors)), this._off(n.not(this.panels)));
        },
        _getList: function() {
            return this.tablist || this.element.find("ol, ul").eq(0);
        },
        _createPanel: function(e) {
            return t("<div>").attr("id", e).data("ui-tabs-destroy", !0);
        },
        _setOptionDisabled: function(e) {
            var i, s, n;
            for (t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1), 
            n = 0; s = this.tabs[n]; n++) i = t(s), !0 === e || -1 !== t.inArray(n, e) ? (i.attr("aria-disabled", "true"), 
            this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), 
            this._removeClass(i, null, "ui-state-disabled"));
            this.options.disabled = e, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !0 === e);
        },
        _setupEvents: function(e) {
            var i = {};
            e && t.each(e.split(" "), function(t, e) {
                i[e] = "_eventHandler";
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                click: function(t) {
                    t.preventDefault();
                }
            }), this._on(this.anchors, i), this._on(this.tabs, {
                keydown: "_tabKeydown"
            }), this._on(this.panels, {
                keydown: "_panelKeydown"
            }), this._focusable(this.tabs), this._hoverable(this.tabs);
        },
        _setupHeightStyle: function(e) {
            var i, s = this.element.parent();
            "fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), 
            this.element.siblings(":visible").each(function() {
                var e = t(this), s = e.css("position");
                "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0));
            }), this.element.children().not(this.panels).each(function() {
                i -= t(this).outerHeight(!0);
            }), this.panels.each(function() {
                t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()));
            }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function() {
                i = Math.max(i, t(this).height("").height());
            }).height(i));
        },
        _eventHandler: function(e) {
            var i = this.options, s = this.active, o = t(e.currentTarget).closest("li"), a = o[0] === s[0], r = a && i.collapsible, h = r ? t() : this._getPanelForTab(o), l = s.length ? this._getPanelForTab(s) : t(), c = {
                oldTab: s,
                oldPanel: l,
                newTab: r ? t() : o,
                newPanel: h
            };
            e.preventDefault(), o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || a && !i.collapsible || !1 === this._trigger("beforeActivate", e, c) || (i.active = !r && this.tabs.index(o), 
            this.active = a ? t() : o, this.xhr && this.xhr.abort(), l.length || h.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), 
            h.length && this.load(this.tabs.index(o), e), this._toggle(e, c));
        },
        _toggle: function(e, i) {
            function s() {
                o.running = !1, o._trigger("activate", e, i);
            }
            function n() {
                o._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), a.length && o.options.show ? o._show(a, o.options.show, s) : (a.show(), 
                s());
            }
            var o = this, a = i.newPanel, r = i.oldPanel;
            this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function() {
                o._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), n();
            }) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), 
            r.hide(), n()), r.attr("aria-hidden", "true"), i.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), a.length && r.length ? i.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function() {
                return 0 === t(this).attr("tabIndex");
            }).attr("tabIndex", -1), a.attr("aria-hidden", "false"), i.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            });
        },
        _activate: function(e) {
            var i, s = this._findActive(e);
            s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], 
            this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }));
        },
        _findActive: function(e) {
            return !1 === e ? t() : this.tabs.eq(e);
        },
        _getIndex: function(e) {
            return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))), 
            e;
        },
        _destroy: function() {
            this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), 
            this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() {
                t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded");
            }), this.tabs.each(function() {
                var e = t(this), i = e.data("ui-tabs-aria-controls");
                i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls");
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "");
        },
        enable: function(e) {
            var i = this.options.disabled;
            !1 !== i && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function(t) {
                return t !== e ? t : null;
            }) : t.map(this.tabs, function(t, i) {
                return i !== e ? i : null;
            })), this._setOptionDisabled(i));
        },
        disable: function(e) {
            var i = this.options.disabled;
            if (!0 !== i) {
                if (void 0 === e) i = !0; else {
                    if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;
                    i = t.isArray(i) ? t.merge([ e ], i).sort() : [ e ];
                }
                this._setOptionDisabled(i);
            }
        },
        load: function(e, i) {
            e = this._getIndex(e);
            var s = this, n = this.tabs.eq(e), o = n.find(".ui-tabs-anchor"), a = this._getPanelForTab(n), r = {
                tab: n,
                panel: a
            }, h = function(t, e) {
                "abort" === e && s.panels.stop(!1, !0), s._removeClass(n, "ui-tabs-loading"), a.removeAttr("aria-busy"), 
                t === s.xhr && delete s.xhr;
            };
            this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(n, "ui-tabs-loading"), 
            a.attr("aria-busy", "true"), this.xhr.done(function(t, e, n) {
                setTimeout(function() {
                    a.html(t), s._trigger("load", i, r), h(n, e);
                }, 1);
            }).fail(function(t, e) {
                setTimeout(function() {
                    h(t, e);
                }, 1);
            })));
        },
        _ajaxSettings: function(e, i, s) {
            var n = this;
            return {
                url: e.attr("href").replace(/#.*$/, ""),
                beforeSend: function(e, o) {
                    return n._trigger("beforeLoad", i, t.extend({
                        jqXHR: e,
                        ajaxSettings: o
                    }, s));
                }
            };
        },
        _getPanelForTab: function(e) {
            var i = t(e).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + i));
        }
    }), !1 !== t.uiBackCompat && t.widget("ui.tabs", t.ui.tabs, {
        _processTabs: function() {
            this._superApply(arguments), this._addClass(this.tabs, "ui-tab");
        }
    }), t.ui.tabs, t.widget("ui.tooltip", {
        version: "1.12.1",
        options: {
            classes: {
                "ui-tooltip": "ui-corner-all ui-widget-shadow"
            },
            content: function() {
                var e = t(this).attr("title") || "";
                return t("<a>").text(e).html();
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: !0,
            track: !1,
            close: null,
            open: null
        },
        _addDescribedBy: function(e, i) {
            var s = (e.attr("aria-describedby") || "").split(/\s+/);
            s.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" ")));
        },
        _removeDescribedBy: function(e) {
            var i = e.data("ui-tooltip-id"), s = (e.attr("aria-describedby") || "").split(/\s+/), n = t.inArray(i, s);
            -1 !== n && s.splice(n, 1), e.removeData("ui-tooltip-id"), (s = t.trim(s.join(" "))) ? e.attr("aria-describedby", s) : e.removeAttr("aria-describedby");
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            }), this.tooltips = {}, this.parents = {}, this.liveRegion = t("<div>").attr({
                role: "log",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), 
            this.disabledTitles = t([]);
        },
        _setOption: function(e, i) {
            var s = this;
            this._super(e, i), "content" === e && t.each(this.tooltips, function(t, e) {
                s._updateContent(e.element);
            });
        },
        _setOptionDisabled: function(t) {
            this[t ? "_disable" : "_enable"]();
        },
        _disable: function() {
            var e = this;
            t.each(this.tooltips, function(i, s) {
                var n = t.Event("blur");
                n.target = n.currentTarget = s.element[0], e.close(n, !0);
            }), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function() {
                var e = t(this);
                return e.is("[title]") ? e.data("ui-tooltip-title", e.attr("title")).removeAttr("title") : void 0;
            }));
        },
        _enable: function() {
            this.disabledTitles.each(function() {
                var e = t(this);
                e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"));
            }), this.disabledTitles = t([]);
        },
        open: function(e) {
            var i = this, s = t(e ? e.target : this.element).closest(this.options.items);
            s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), 
            s.data("ui-tooltip-open", !0), e && "mouseover" === e.type && s.parents().each(function() {
                var e, s = t(this);
                s.data("ui-tooltip-open") && ((e = t.Event("blur")).target = e.currentTarget = this, 
                i.close(e, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = {
                    element: this,
                    title: s.attr("title")
                }, s.attr("title", ""));
            }), this._registerCloseHandlers(e, s), this._updateContent(s, e));
        },
        _updateContent: function(t, e) {
            var i, s = this.options.content, n = this, o = e ? e.type : null;
            return "string" == typeof s || s.nodeType || s.jquery ? this._open(e, t, s) : void ((i = s.call(t[0], function(i) {
                n._delay(function() {
                    t.data("ui-tooltip-open") && (e && (e.type = o), this._open(e, t, i));
                });
            })) && this._open(e, t, i));
        },
        _open: function(e, i, s) {
            function n(t) {
                l.of = t, a.is(":hidden") || a.position(l);
            }
            var o, a, r, h, l = t.extend({}, this.options.position);
            if (s) {
                if (o = this._find(i)) return void o.tooltip.find(".ui-tooltip-content").html(s);
                i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")), 
                o = this._tooltip(i), a = o.tooltip, this._addDescribedBy(i, a.attr("id")), a.find(".ui-tooltip-content").html(s), 
                this.liveRegion.children().hide(), (h = t("<div>").html(a.find(".ui-tooltip-content").html())).removeAttr("name").find("[name]").removeAttr("name"), 
                h.removeAttr("id").find("[id]").removeAttr("id"), h.appendTo(this.liveRegion), this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, {
                    mousemove: n
                }), n(e)) : a.position(t.extend({
                    of: i
                }, this.options.position)), a.hide(), this._show(a, this.options.show), this.options.track && this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function() {
                    a.is(":visible") && (n(l.of), clearInterval(r));
                }, t.fx.interval)), this._trigger("open", e, {
                    tooltip: a
                });
            }
        },
        _registerCloseHandlers: function(e, i) {
            var s = {
                keyup: function(e) {
                    if (e.keyCode === t.ui.keyCode.ESCAPE) {
                        var s = t.Event(e);
                        s.currentTarget = i[0], this.close(s, !0);
                    }
                }
            };
            i[0] !== this.element[0] && (s.remove = function() {
                this._removeTooltip(this._find(i).tooltip);
            }), e && "mouseover" !== e.type || (s.mouseleave = "close"), e && "focusin" !== e.type || (s.focusout = "close"), 
            this._on(!0, i, s);
        },
        close: function(e) {
            var i, s = this, n = t(e ? e.currentTarget : this.element), o = this._find(n);
            return o ? (i = o.tooltip, void (o.closing || (clearInterval(this.delayedShow), 
            n.data("ui-tooltip-title") && !n.attr("title") && n.attr("title", n.data("ui-tooltip-title")), 
            this._removeDescribedBy(n), o.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function() {
                s._removeTooltip(t(this));
            }), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), 
            n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), 
            e && "mouseleave" === e.type && t.each(this.parents, function(e, i) {
                t(i.element).attr("title", i.title), delete s.parents[e];
            }), o.closing = !0, this._trigger("close", e, {
                tooltip: i
            }), o.hiding || (o.closing = !1)))) : void n.removeData("ui-tooltip-open");
        },
        _tooltip: function(e) {
            var i = t("<div>").attr("role", "tooltip"), s = t("<div>").appendTo(i), n = i.uniqueId().attr("id");
            return this._addClass(s, "ui-tooltip-content"), this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"), 
            i.appendTo(this._appendTo(e)), this.tooltips[n] = {
                element: e,
                tooltip: i
            };
        },
        _find: function(t) {
            var e = t.data("ui-tooltip-id");
            return e ? this.tooltips[e] : null;
        },
        _removeTooltip: function(t) {
            t.remove(), delete this.tooltips[t.attr("id")];
        },
        _appendTo: function(t) {
            var e = t.closest(".ui-front, dialog");
            return e.length || (e = this.document[0].body), e;
        },
        _destroy: function() {
            var e = this;
            t.each(this.tooltips, function(i, s) {
                var n = t.Event("blur"), o = s.element;
                n.target = n.currentTarget = o[0], e.close(n, !0), t("#" + i).remove(), o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")), 
                o.removeData("ui-tooltip-title"));
            }), this.liveRegion.remove();
        }
    }), !1 !== t.uiBackCompat && t.widget("ui.tooltip", t.ui.tooltip, {
        options: {
            tooltipClass: null
        },
        _tooltip: function() {
            var t = this._superApply(arguments);
            return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), 
            t;
        }
    }), t.ui.tooltip;
    var f = "ui-effects-", g = "ui-effects-style", m = "ui-effects-animated", _ = t;
    t.effects = {
        effect: {}
    }, function(t, e) {
        function i(t, e, i) {
            var s = u[e.type] || {};
            return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), 
            isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : t < 0 ? 0 : t > s.max ? s.max : t);
        }
        function s(i) {
            var s = l(), n = s._rgba = [];
            return i = i.toLowerCase(), f(h, function(t, o) {
                var a, r = o.re.exec(i), h = r && o.parse(r), l = o.space || "rgba";
                return h ? (a = s[l](h), s[c[l].cache] = a[c[l].cache], n = s._rgba = a._rgba, !1) : e;
            }), n.length ? ("0,0,0,0" === n.join() && t.extend(n, o.transparent), s) : o[i];
        }
        function n(t, e, i) {
            return 6 * (i = (i + 1) % 1) < 1 ? t + 6 * (e - t) * i : 2 * i < 1 ? e : 3 * i < 2 ? t + 6 * (e - t) * (2 / 3 - i) : t;
        }
        var o, r = /^([\-+])=\s*(\d+\.?\d*)/, h = [ {
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(t) {
                return [ t[1], t[2], t[3], t[4] ];
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(t) {
                return [ 2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4] ];
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function(t) {
                return [ parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16) ];
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function(t) {
                return [ parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16) ];
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function(t) {
                return [ t[1], t[2] / 100, t[3] / 100, t[4] ];
            }
        } ], l = t.Color = function(e, i, s, n) {
            return new t.Color.fn.parse(e, i, s, n);
        }, c = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },
            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        }, u = {
            byte: {
                floor: !0,
                max: 255
            },
            percent: {
                max: 1
            },
            degrees: {
                mod: 360,
                floor: !0
            }
        }, d = l.support = {}, p = t("<p>")[0], f = t.each;
        p.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = -1 < p.style.backgroundColor.indexOf("rgba"), 
        f(c, function(t, e) {
            e.cache = "_" + t, e.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            };
        }), l.fn = t.extend(l.prototype, {
            parse: function(n, a, r, h) {
                if (n === e) return this._rgba = [ null, null, null, null ], this;
                (n.jquery || n.nodeType) && (n = t(n).css(a), a = e);
                var u = this, d = t.type(n), p = this._rgba = [];
                return a !== e && (n = [ n, a, r, h ], d = "array"), "string" === d ? this.parse(s(n) || o._default) : "array" === d ? (f(c.rgba.props, function(t, e) {
                    p[e.idx] = i(n[e.idx], e);
                }), this) : "object" === d ? (f(c, n instanceof l ? function(t, e) {
                    n[e.cache] && (u[e.cache] = n[e.cache].slice());
                } : function(e, s) {
                    var o = s.cache;
                    f(s.props, function(t, e) {
                        if (!u[o] && s.to) {
                            if ("alpha" === t || null == n[t]) return;
                            u[o] = s.to(u._rgba);
                        }
                        u[o][e.idx] = i(n[t], e, !0);
                    }), u[o] && t.inArray(null, u[o].slice(0, 3)) < 0 && (u[o][3] = 1, s.from && (u._rgba = s.from(u[o])));
                }), this) : e;
            },
            is: function(t) {
                var i = l(t), s = !0, n = this;
                return f(c, function(t, o) {
                    var a, r = i[o.cache];
                    return r && (a = n[o.cache] || o.to && o.to(n._rgba) || [], f(o.props, function(t, i) {
                        return null != r[i.idx] ? s = r[i.idx] === a[i.idx] : e;
                    })), s;
                }), s;
            },
            _space: function() {
                var t = [], e = this;
                return f(c, function(i, s) {
                    e[s.cache] && t.push(i);
                }), t.pop();
            },
            transition: function(t, e) {
                var s = l(t), n = s._space(), o = c[n], a = 0 === this.alpha() ? l("transparent") : this, r = a[o.cache] || o.to(a._rgba), h = r.slice();
                return s = s[o.cache], f(o.props, function(t, n) {
                    var o = n.idx, a = r[o], l = s[o], c = u[n.type] || {};
                    null !== l && (null === a ? h[o] = l : (c.mod && (l - a > c.mod / 2 ? a += c.mod : a - l > c.mod / 2 && (a -= c.mod)), 
                    h[o] = i((l - a) * e + a, n)));
                }), this[n](h);
            },
            blend: function(e) {
                if (1 === this._rgba[3]) return this;
                var i = this._rgba.slice(), s = i.pop(), n = l(e)._rgba;
                return l(t.map(i, function(t, e) {
                    return (1 - s) * n[e] + s * t;
                }));
            },
            toRgbaString: function() {
                var e = "rgba(", i = t.map(this._rgba, function(t, e) {
                    return null == t ? 2 < e ? 1 : 0 : t;
                });
                return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")";
            },
            toHslaString: function() {
                var e = "hsla(", i = t.map(this.hsla(), function(t, e) {
                    return null == t && (t = 2 < e ? 1 : 0), e && e < 3 && (t = Math.round(100 * t) + "%"), 
                    t;
                });
                return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")";
            },
            toHexString: function(e) {
                var i = this._rgba.slice(), s = i.pop();
                return e && i.push(~~(255 * s)), "#" + t.map(i, function(t) {
                    return 1 === (t = (t || 0).toString(16)).length ? "0" + t : t;
                }).join("");
            },
            toString: function() {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
            }
        }), l.fn.parse.prototype = l.fn, c.hsla.to = function(t) {
            if (null == t[0] || null == t[1] || null == t[2]) return [ null, null, null, t[3] ];
            var e, i, s = t[0] / 255, n = t[1] / 255, o = t[2] / 255, a = t[3], r = Math.max(s, n, o), h = Math.min(s, n, o), l = r - h, c = r + h, u = .5 * c;
            return e = h === r ? 0 : s === r ? 60 * (n - o) / l + 360 : n === r ? 60 * (o - s) / l + 120 : 60 * (s - n) / l + 240, 
            i = 0 === l ? 0 : u <= .5 ? l / c : l / (2 - c), [ Math.round(e) % 360, i, u, null == a ? 1 : a ];
        }, c.hsla.from = function(t) {
            if (null == t[0] || null == t[1] || null == t[2]) return [ null, null, null, t[3] ];
            var e = t[0] / 360, i = t[1], s = t[2], o = t[3], a = s <= .5 ? s * (1 + i) : s + i - s * i, r = 2 * s - a;
            return [ Math.round(255 * n(r, a, e + 1 / 3)), Math.round(255 * n(r, a, e)), Math.round(255 * n(r, a, e - 1 / 3)), o ];
        }, f(c, function(s, n) {
            var o = n.props, a = n.cache, h = n.to, c = n.from;
            l.fn[s] = function(s) {
                if (h && !this[a] && (this[a] = h(this._rgba)), s === e) return this[a].slice();
                var n, r = t.type(s), u = "array" === r || "object" === r ? s : arguments, d = this[a].slice();
                return f(o, function(t, e) {
                    var s = u["object" === r ? t : e.idx];
                    null == s && (s = d[e.idx]), d[e.idx] = i(s, e);
                }), c ? ((n = l(c(d)))[a] = d, n) : l(d);
            }, f(o, function(e, i) {
                l.fn[e] || (l.fn[e] = function(n) {
                    var o, a = t.type(n), h = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s, l = this[h](), c = l[i.idx];
                    return "undefined" === a ? c : ("function" === a && (n = n.call(this, c), a = t.type(n)), 
                    null == n && i.empty ? this : ("string" === a && ((o = r.exec(n)) && (n = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), 
                    l[i.idx] = n, this[h](l)));
                });
            });
        }), l.hook = function(e) {
            var i = e.split(" ");
            f(i, function(e, i) {
                t.cssHooks[i] = {
                    set: function(e, n) {
                        var o, a, r = "";
                        if ("transparent" !== n && ("string" !== t.type(n) || (o = s(n)))) {
                            if (n = l(o || n), !d.rgba && 1 !== n._rgba[3]) {
                                for (a = "backgroundColor" === i ? e.parentNode : e; ("" === r || "transparent" === r) && a && a.style; ) try {
                                    r = t.css(a, "backgroundColor"), a = a.parentNode;
                                } catch (h) {}
                                n = n.blend(r && "transparent" !== r ? r : "_default");
                            }
                            n = n.toRgbaString();
                        }
                        try {
                            e.style[i] = n;
                        } catch (h) {}
                    }
                }, t.fx.step[i] = function(e) {
                    e.colorInit || (e.start = l(e.elem, i), e.end = l(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos));
                };
            });
        }, l.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"), 
        t.cssHooks.borderColor = {
            expand: function(t) {
                var e = {};
                return f([ "Top", "Right", "Bottom", "Left" ], function(i, s) {
                    e["border" + s + "Color"] = t;
                }), e;
            }
        }, o = t.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [ null, null, null, 0 ],
            _default: "#ffffff"
        };
    }(_), function() {
        function e(e) {
            var i, s, n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle, o = {};
            if (n && n.length && n[0] && n[n[0]]) for (s = n.length; s--; ) "string" == typeof n[i = n[s]] && (o[t.camelCase(i)] = n[i]); else for (i in n) "string" == typeof n[i] && (o[i] = n[i]);
            return o;
        }
        function i(e, i) {
            var s, o, a = {};
            for (s in i) o = i[s], e[s] !== o && (n[s] || (t.fx.step[s] || !isNaN(parseFloat(o))) && (a[s] = o));
            return a;
        }
        var s = [ "add", "remove", "toggle" ], n = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        t.each([ "borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle" ], function(e, i) {
            t.fx.step[i] = function(t) {
                ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (_.style(t.elem, i, t.end), 
                t.setAttr = !0);
            };
        }), t.fn.addBack || (t.fn.addBack = function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
        }), t.effects.animateClass = function(n, o, a, r) {
            var h = t.speed(o, a, r);
            return this.queue(function() {
                var o, a = t(this), r = a.attr("class") || "", l = h.children ? a.find("*").addBack() : a;
                l = l.map(function() {
                    return {
                        el: t(this),
                        start: e(this)
                    };
                }), (o = function() {
                    t.each(s, function(t, e) {
                        n[e] && a[e + "Class"](n[e]);
                    });
                })(), l = l.map(function() {
                    return this.end = e(this.el[0]), this.diff = i(this.start, this.end), this;
                }), a.attr("class", r), l = l.map(function() {
                    var e = this, i = t.Deferred(), s = t.extend({}, h, {
                        queue: !1,
                        complete: function() {
                            i.resolve(e);
                        }
                    });
                    return this.el.animate(this.diff, s), i.promise();
                }), t.when.apply(t, l.get()).done(function() {
                    o(), t.each(arguments, function() {
                        var e = this.el;
                        t.each(this.diff, function(t) {
                            e.css(t, "");
                        });
                    }), h.complete.call(a[0]);
                });
            });
        }, t.fn.extend({
            addClass: function(e) {
                return function(i, s, n, o) {
                    return s ? t.effects.animateClass.call(this, {
                        add: i
                    }, s, n, o) : e.apply(this, arguments);
                };
            }(t.fn.addClass),
            removeClass: function(e) {
                return function(i, s, n, o) {
                    return 1 < arguments.length ? t.effects.animateClass.call(this, {
                        remove: i
                    }, s, n, o) : e.apply(this, arguments);
                };
            }(t.fn.removeClass),
            toggleClass: function(e) {
                return function(i, s, n, o, a) {
                    return "boolean" == typeof s || void 0 === s ? n ? t.effects.animateClass.call(this, s ? {
                        add: i
                    } : {
                        remove: i
                    }, n, o, a) : e.apply(this, arguments) : t.effects.animateClass.call(this, {
                        toggle: i
                    }, s, n, o);
                };
            }(t.fn.toggleClass),
            switchClass: function(e, i, s, n, o) {
                return t.effects.animateClass.call(this, {
                    add: i,
                    remove: e
                }, s, n, o);
            }
        });
    }(), function() {
        function e(e, i, s, n) {
            return t.isPlainObject(e) && (e = (i = e).effect), e = {
                effect: e
            }, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, 
            s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, 
            e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, 
            e.complete = n || i.complete, e;
        }
        function i(e) {
            return !(e && "number" != typeof e && !t.fx.speeds[e]) || ("string" == typeof e && !t.effects.effect[e] || (!!t.isFunction(e) || "object" == typeof e && !e.effect));
        }
        function s(t, e) {
            var i = e.outerWidth(), s = e.outerHeight(), o = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t) || [ "", 0, i, s, 0 ];
            return {
                top: parseFloat(o[1]) || 0,
                right: "auto" === o[2] ? i : parseFloat(o[2]),
                bottom: "auto" === o[3] ? s : parseFloat(o[3]),
                left: parseFloat(o[4]) || 0
            };
        }
        t.expr && t.expr.filters && t.expr.filters.animated && (t.expr.filters.animated = function(e) {
            return function(i) {
                return !!t(i).data(m) || e(i);
            };
        }(t.expr.filters.animated)), !1 !== t.uiBackCompat && t.extend(t.effects, {
            save: function(t, e) {
                for (var i = 0, s = e.length; i < s; i++) null !== e[i] && t.data(f + e[i], t[0].style[e[i]]);
            },
            restore: function(t, e) {
                for (var i, s = 0, n = e.length; s < n; s++) null !== e[s] && (i = t.data(f + e[s]), 
                t.css(e[s], i));
            },
            setMode: function(t, e) {
                return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e;
            },
            createWrapper: function(e) {
                if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                var i = {
                    width: e.outerWidth(!0),
                    height: e.outerHeight(!0),
                    float: e.css("float")
                }, s = t("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                }), n = {
                    width: e.width(),
                    height: e.height()
                }, o = document.activeElement;
                try {
                    o.id;
                } catch (a) {
                    o = document.body;
                }
                return e.wrap(s), (e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"), 
                s = e.parent(), "static" === e.css("position") ? (s.css({
                    position: "relative"
                }), e.css({
                    position: "relative"
                })) : (t.extend(i, {
                    position: e.css("position"),
                    zIndex: e.css("z-index")
                }), t.each([ "top", "left", "bottom", "right" ], function(t, s) {
                    i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto");
                }), e.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), e.css(n), s.css(i).show();
            },
            removeWrapper: function(e) {
                var i = document.activeElement;
                return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")), 
                e;
            }
        }), t.extend(t.effects, {
            version: "1.12.1",
            define: function(e, i, s) {
                return s || (s = i, i = "effect"), t.effects.effect[e] = s, t.effects.effect[e].mode = i, 
                s;
            },
            scaledDimensions: function(t, e, i) {
                if (0 === e) return {
                    height: 0,
                    width: 0,
                    outerHeight: 0,
                    outerWidth: 0
                };
                var s = "horizontal" !== i ? (e || 100) / 100 : 1, n = "vertical" !== i ? (e || 100) / 100 : 1;
                return {
                    height: t.height() * n,
                    width: t.width() * s,
                    outerHeight: t.outerHeight() * n,
                    outerWidth: t.outerWidth() * s
                };
            },
            clipToBox: function(t) {
                return {
                    width: t.clip.right - t.clip.left,
                    height: t.clip.bottom - t.clip.top,
                    left: t.clip.left,
                    top: t.clip.top
                };
            },
            unshift: function(t, e, i) {
                var s = t.queue();
                1 < e && s.splice.apply(s, [ 1, 0 ].concat(s.splice(e, i))), t.dequeue();
            },
            saveStyle: function(t) {
                t.data(g, t[0].style.cssText);
            },
            restoreStyle: function(t) {
                t[0].style.cssText = t.data(g) || "", t.removeData(g);
            },
            mode: function(t, e) {
                var i = t.is(":hidden");
                return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), 
                e;
            },
            getBaseline: function(t, e) {
                var i, s;
                switch (t[0]) {
                  case "top":
                    i = 0;
                    break;

                  case "middle":
                    i = .5;
                    break;

                  case "bottom":
                    i = 1;
                    break;

                  default:
                    i = t[0] / e.height;
                }
                switch (t[1]) {
                  case "left":
                    s = 0;
                    break;

                  case "center":
                    s = .5;
                    break;

                  case "right":
                    s = 1;
                    break;

                  default:
                    s = t[1] / e.width;
                }
                return {
                    x: s,
                    y: i
                };
            },
            createPlaceholder: function(e) {
                var i, s = e.css("position"), n = e.position();
                return e.css({
                    marginTop: e.css("marginTop"),
                    marginBottom: e.css("marginBottom"),
                    marginLeft: e.css("marginLeft"),
                    marginRight: e.css("marginRight")
                }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()), /^(static|relative)/.test(s) && (s = "absolute", 
                i = t("<" + e[0].nodeName + ">").insertAfter(e).css({
                    display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block",
                    visibility: "hidden",
                    marginTop: e.css("marginTop"),
                    marginBottom: e.css("marginBottom"),
                    marginLeft: e.css("marginLeft"),
                    marginRight: e.css("marginRight"),
                    float: e.css("float")
                }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"), 
                e.data(f + "placeholder", i)), e.css({
                    position: s,
                    left: n.left,
                    top: n.top
                }), i;
            },
            removePlaceholder: function(t) {
                var e = f + "placeholder", i = t.data(e);
                i && (i.remove(), t.removeData(e));
            },
            cleanUp: function(e) {
                t.effects.restoreStyle(e), t.effects.removePlaceholder(e);
            },
            setTransition: function(e, i, s, n) {
                return n = n || {}, t.each(i, function(t, i) {
                    var o = e.cssUnit(i);
                    0 < o[0] && (n[i] = o[0] * s + o[1]);
                }), n;
            }
        }), t.fn.extend({
            effect: function() {
                function i(e) {
                    function a() {
                        t.isFunction(h) && h.call(r[0]), t.isFunction(e) && e();
                    }
                    var r = t(this);
                    s.mode = c.shift(), !1 === t.uiBackCompat || o ? "none" === s.mode ? (r[l](), a()) : n.call(r[0], s, function() {
                        r.removeData(m), t.effects.cleanUp(r), "hide" === s.mode && r.hide(), a();
                    }) : (r.is(":hidden") ? "hide" === l : "show" === l) ? (r[l](), a()) : n.call(r[0], s, a);
                }
                var s = e.apply(this, arguments), n = t.effects.effect[s.effect], o = n.mode, a = s.queue, r = a || "fx", h = s.complete, l = s.mode, c = [], u = function(e) {
                    var i = t(this), s = t.effects.mode(i, l) || o;
                    i.data(m, !0), c.push(s), o && ("show" === s || s === o && "hide" === s) && i.show(), 
                    o && "none" === s || t.effects.saveStyle(i), t.isFunction(e) && e();
                };
                return t.fx.off || !n ? l ? this[l](s.duration, h) : this.each(function() {
                    h && h.call(this);
                }) : !1 === a ? this.each(u).each(i) : this.queue(r, u).queue(r, i);
            },
            show: function(t) {
                return function(s) {
                    if (i(s)) return t.apply(this, arguments);
                    var n = e.apply(this, arguments);
                    return n.mode = "show", this.effect.call(this, n);
                };
            }(t.fn.show),
            hide: function(t) {
                return function(s) {
                    if (i(s)) return t.apply(this, arguments);
                    var n = e.apply(this, arguments);
                    return n.mode = "hide", this.effect.call(this, n);
                };
            }(t.fn.hide),
            toggle: function(t) {
                return function(s) {
                    if (i(s) || "boolean" == typeof s) return t.apply(this, arguments);
                    var n = e.apply(this, arguments);
                    return n.mode = "toggle", this.effect.call(this, n);
                };
            }(t.fn.toggle),
            cssUnit: function(e) {
                var i = this.css(e), s = [];
                return t.each([ "em", "px", "%", "pt" ], function(t, e) {
                    0 < i.indexOf(e) && (s = [ parseFloat(i), e ]);
                }), s;
            },
            cssClip: function(t) {
                return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : s(this.css("clip"), this);
            },
            transfer: function(e, i) {
                var s = t(this), n = t(e.to), o = "fixed" === n.css("position"), a = t("body"), r = o ? a.scrollTop() : 0, h = o ? a.scrollLeft() : 0, l = n.offset(), c = {
                    top: l.top - r,
                    left: l.left - h,
                    height: n.innerHeight(),
                    width: n.innerWidth()
                }, u = s.offset(), d = t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({
                    top: u.top - r,
                    left: u.left - h,
                    height: s.innerHeight(),
                    width: s.innerWidth(),
                    position: o ? "fixed" : "absolute"
                }).animate(c, e.duration, e.easing, function() {
                    d.remove(), t.isFunction(i) && i();
                });
            }
        }), t.fx.step.clip = function(e) {
            e.clipInit || (e.start = t(e.elem).cssClip(), "string" == typeof e.end && (e.end = s(e.end, e.elem)), 
            e.clipInit = !0), t(e.elem).cssClip({
                top: e.pos * (e.end.top - e.start.top) + e.start.top,
                right: e.pos * (e.end.right - e.start.right) + e.start.right,
                bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom,
                left: e.pos * (e.end.left - e.start.left) + e.start.left
            });
        };
    }(), function() {
        var e = {};
        t.each([ "Quad", "Cubic", "Quart", "Quint", "Expo" ], function(t, i) {
            e[i] = function(e) {
                return Math.pow(e, t + 2);
            };
        }), t.extend(e, {
            Sine: function(t) {
                return 1 - Math.cos(t * Math.PI / 2);
            },
            Circ: function(t) {
                return 1 - Math.sqrt(1 - t * t);
            },
            Elastic: function(t) {
                return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15);
            },
            Back: function(t) {
                return t * t * (3 * t - 2);
            },
            Bounce: function(t) {
                for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t; ) ;
                return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2);
            }
        }), t.each(e, function(e, i) {
            t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function(t) {
                return 1 - i(1 - t);
            }, t.easing["easeInOut" + e] = function(t) {
                return t < .5 ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2;
            };
        });
    }();
    t.effects;
    t.effects.define("blind", "hide", function(e, i) {
        var s = {
            up: [ "bottom", "top" ],
            vertical: [ "bottom", "top" ],
            down: [ "top", "bottom" ],
            left: [ "right", "left" ],
            horizontal: [ "right", "left" ],
            right: [ "left", "right" ]
        }, n = t(this), o = e.direction || "up", a = n.cssClip(), r = {
            clip: t.extend({}, a)
        }, h = t.effects.createPlaceholder(n);
        r.clip[s[o][0]] = r.clip[s[o][1]], "show" === e.mode && (n.cssClip(r.clip), h && h.css(t.effects.clipToBox(r)), 
        r.clip = a), h && h.animate(t.effects.clipToBox(r), e.duration, e.easing), n.animate(r, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        });
    }), t.effects.define("bounce", function(e, i) {
        var s, n, o, a = t(this), r = e.mode, h = "hide" === r, l = "show" === r, c = e.direction || "up", u = e.distance, d = e.times || 5, p = 2 * d + (l || h ? 1 : 0), f = e.duration / p, g = e.easing, m = "up" === c || "down" === c ? "top" : "left", _ = "up" === c || "left" === c, v = 0, b = a.queue().length;
        for (t.effects.createPlaceholder(a), o = a.css(m), u || (u = a["top" === m ? "outerHeight" : "outerWidth"]() / 3), 
        l && ((n = {
            opacity: 1
        })[m] = o, a.css("opacity", 0).css(m, _ ? 2 * -u : 2 * u).animate(n, f, g)), h && (u /= Math.pow(2, d - 1)), 
        (n = {})[m] = o; v < d; v++) (s = {})[m] = (_ ? "-=" : "+=") + u, a.animate(s, f, g).animate(n, f, g), 
        u = h ? 2 * u : u / 2;
        h && ((s = {
            opacity: 0
        })[m] = (_ ? "-=" : "+=") + u, a.animate(s, f, g)), a.queue(i), t.effects.unshift(a, b, p + 1);
    }), t.effects.define("clip", "hide", function(e, i) {
        var s, n = {}, o = t(this), a = e.direction || "vertical", r = "both" === a, h = r || "horizontal" === a, l = r || "vertical" === a;
        s = o.cssClip(), n.clip = {
            top: l ? (s.bottom - s.top) / 2 : s.top,
            right: h ? (s.right - s.left) / 2 : s.right,
            bottom: l ? (s.bottom - s.top) / 2 : s.bottom,
            left: h ? (s.right - s.left) / 2 : s.left
        }, t.effects.createPlaceholder(o), "show" === e.mode && (o.cssClip(n.clip), n.clip = s), 
        o.animate(n, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        });
    }), t.effects.define("drop", "hide", function(e, i) {
        var s, n = t(this), a = "show" === e.mode, r = e.direction || "left", h = "up" === r || "down" === r ? "top" : "left", l = "up" === r || "left" === r ? "-=" : "+=", c = "+=" === l ? "-=" : "+=", u = {
            opacity: 0
        };
        t.effects.createPlaceholder(n), s = e.distance || n["top" === h ? "outerHeight" : "outerWidth"](!0) / 2, 
        u[h] = l + s, a && (n.css(u), u[h] = c + s, u.opacity = 1), n.animate(u, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        });
    }), t.effects.define("explode", "hide", function(e, i) {
        function s() {
            b.push(this), b.length === u * d && (p.css({
                visibility: "visible"
            }), t(b).remove(), i());
        }
        var o, a, r, h, l, c, u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3, d = u, p = t(this), g = "show" === e.mode, m = p.show().css("visibility", "hidden").offset(), _ = Math.ceil(p.outerWidth() / d), v = Math.ceil(p.outerHeight() / u), b = [];
        for (o = 0; o < u; o++) for (h = m.top + o * v, c = o - (u - 1) / 2, a = 0; a < d; a++) r = m.left + a * _, 
        l = a - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
            position: "absolute",
            visibility: "visible",
            left: -a * _,
            top: -o * v
        }).parent().addClass("ui-effects-explode").css({
            position: "absolute",
            overflow: "hidden",
            width: _,
            height: v,
            left: r + (g ? l * _ : 0),
            top: h + (g ? c * v : 0),
            opacity: g ? 0 : 1
        }).animate({
            left: r + (g ? 0 : l * _),
            top: h + (g ? 0 : c * v),
            opacity: g ? 1 : 0
        }, e.duration || 500, e.easing, s);
    }), t.effects.define("fade", "toggle", function(e, i) {
        var s = "show" === e.mode;
        t(this).css("opacity", s ? 0 : 1).animate({
            opacity: s ? 1 : 0
        }, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        });
    }), t.effects.define("fold", "hide", function(e, i) {
        var s = t(this), n = e.mode, o = "show" === n, a = "hide" === n, r = e.size || 15, h = /([0-9]+)%/.exec(r), c = !!e.horizFirst ? [ "right", "bottom" ] : [ "bottom", "right" ], u = e.duration / 2, d = t.effects.createPlaceholder(s), p = s.cssClip(), f = {
            clip: t.extend({}, p)
        }, g = {
            clip: t.extend({}, p)
        }, m = [ p[c[0]], p[c[1]] ], _ = s.queue().length;
        h && (r = parseInt(h[1], 10) / 100 * m[a ? 0 : 1]), f.clip[c[0]] = r, g.clip[c[0]] = r, 
        g.clip[c[1]] = 0, o && (s.cssClip(g.clip), d && d.css(t.effects.clipToBox(g)), g.clip = p), 
        s.queue(function(i) {
            d && d.animate(t.effects.clipToBox(f), u, e.easing).animate(t.effects.clipToBox(g), u, e.easing), 
            i();
        }).animate(f, u, e.easing).animate(g, u, e.easing).queue(i), t.effects.unshift(s, _, 4);
    }), t.effects.define("highlight", "show", function(e, i) {
        var s = t(this), n = {
            backgroundColor: s.css("backgroundColor")
        };
        "hide" === e.mode && (n.opacity = 0), t.effects.saveStyle(s), s.css({
            backgroundImage: "none",
            backgroundColor: e.color || "#ffff99"
        }).animate(n, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        });
    }), t.effects.define("size", function(e, i) {
        var s, n, o, a = t(this), r = [ "fontSize" ], h = [ "borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom" ], l = [ "borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight" ], c = e.mode, u = "effect" !== c, d = e.scale || "both", p = e.origin || [ "middle", "center" ], f = a.css("position"), g = a.position(), m = t.effects.scaledDimensions(a), _ = e.from || m, v = e.to || t.effects.scaledDimensions(a, 0);
        t.effects.createPlaceholder(a), "show" === c && (o = _, _ = v, v = o), n = {
            from: {
                y: _.height / m.height,
                x: _.width / m.width
            },
            to: {
                y: v.height / m.height,
                x: v.width / m.width
            }
        }, ("box" === d || "both" === d) && (n.from.y !== n.to.y && (_ = t.effects.setTransition(a, h, n.from.y, _), 
        v = t.effects.setTransition(a, h, n.to.y, v)), n.from.x !== n.to.x && (_ = t.effects.setTransition(a, l, n.from.x, _), 
        v = t.effects.setTransition(a, l, n.to.x, v))), ("content" === d || "both" === d) && n.from.y !== n.to.y && (_ = t.effects.setTransition(a, r, n.from.y, _), 
        v = t.effects.setTransition(a, r, n.to.y, v)), p && (s = t.effects.getBaseline(p, m), 
        _.top = (m.outerHeight - _.outerHeight) * s.y + g.top, _.left = (m.outerWidth - _.outerWidth) * s.x + g.left, 
        v.top = (m.outerHeight - v.outerHeight) * s.y + g.top, v.left = (m.outerWidth - v.outerWidth) * s.x + g.left), 
        a.css(_), ("content" === d || "both" === d) && (h = h.concat([ "marginTop", "marginBottom" ]).concat(r), 
        l = l.concat([ "marginLeft", "marginRight" ]), a.find("*[width]").each(function() {
            var i = t(this), s = t.effects.scaledDimensions(i), o = {
                height: s.height * n.from.y,
                width: s.width * n.from.x,
                outerHeight: s.outerHeight * n.from.y,
                outerWidth: s.outerWidth * n.from.x
            }, a = {
                height: s.height * n.to.y,
                width: s.width * n.to.x,
                outerHeight: s.height * n.to.y,
                outerWidth: s.width * n.to.x
            };
            n.from.y !== n.to.y && (o = t.effects.setTransition(i, h, n.from.y, o), a = t.effects.setTransition(i, h, n.to.y, a)), 
            n.from.x !== n.to.x && (o = t.effects.setTransition(i, l, n.from.x, o), a = t.effects.setTransition(i, l, n.to.x, a)), 
            u && t.effects.saveStyle(i), i.css(o), i.animate(a, e.duration, e.easing, function() {
                u && t.effects.restoreStyle(i);
            });
        })), a.animate(v, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                var e = a.offset();
                0 === v.opacity && a.css("opacity", _.opacity), u || (a.css("position", "static" === f ? "relative" : f).offset(e), 
                t.effects.saveStyle(a)), i();
            }
        });
    }), t.effects.define("scale", function(e, i) {
        var s = t(this), n = e.mode, o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "effect" !== n ? 0 : 100), a = t.extend(!0, {
            from: t.effects.scaledDimensions(s),
            to: t.effects.scaledDimensions(s, o, e.direction || "both"),
            origin: e.origin || [ "middle", "center" ]
        }, e);
        e.fade && (a.from.opacity = 1, a.to.opacity = 0), t.effects.effect.size.call(this, a, i);
    }), t.effects.define("puff", "hide", function(e, i) {
        var s = t.extend(!0, {}, e, {
            fade: !0,
            percent: parseInt(e.percent, 10) || 150
        });
        t.effects.effect.scale.call(this, s, i);
    }), t.effects.define("pulsate", "show", function(e, i) {
        var s = t(this), n = e.mode, o = "show" === n, r = o || "hide" === n, h = 2 * (e.times || 5) + (r ? 1 : 0), l = e.duration / h, c = 0, u = 1, d = s.queue().length;
        for ((o || !s.is(":visible")) && (s.css("opacity", 0).show(), c = 1); u < h; u++) s.animate({
            opacity: c
        }, l, e.easing), c = 1 - c;
        s.animate({
            opacity: c
        }, l, e.easing), s.queue(i), t.effects.unshift(s, d, h + 1);
    }), t.effects.define("shake", function(e, i) {
        var s = 1, n = t(this), o = e.direction || "left", a = e.distance || 20, r = e.times || 3, h = 2 * r + 1, l = Math.round(e.duration / h), c = "up" === o || "down" === o ? "top" : "left", u = "up" === o || "left" === o, d = {}, p = {}, f = {}, g = n.queue().length;
        for (t.effects.createPlaceholder(n), d[c] = (u ? "-=" : "+=") + a, p[c] = (u ? "+=" : "-=") + 2 * a, 
        f[c] = (u ? "-=" : "+=") + 2 * a, n.animate(d, l, e.easing); s < r; s++) n.animate(p, l, e.easing).animate(f, l, e.easing);
        n.animate(p, l, e.easing).animate(d, l / 2, e.easing).queue(i), t.effects.unshift(n, g, h + 1);
    }), t.effects.define("slide", "show", function(e, i) {
        var s, n, o = t(this), a = {
            up: [ "bottom", "top" ],
            down: [ "top", "bottom" ],
            left: [ "right", "left" ],
            right: [ "left", "right" ]
        }, r = e.mode, h = e.direction || "left", l = "up" === h || "down" === h ? "top" : "left", c = "up" === h || "left" === h, u = e.distance || o["top" === l ? "outerHeight" : "outerWidth"](!0), d = {};
        t.effects.createPlaceholder(o), s = o.cssClip(), n = o.position()[l], d[l] = (c ? -1 : 1) * u + n, 
        d.clip = o.cssClip(), d.clip[a[h][1]] = d.clip[a[h][0]], "show" === r && (o.cssClip(d.clip), 
        o.css(l, d[l]), d.clip = s, d[l] = n), o.animate(d, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        });
    }), !1 !== t.uiBackCompat && t.effects.define("transfer", function(e, i) {
        t(this).transfer(e, i);
    });
}), function(a, b, c, d) {
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
        checkVisibility: !0,
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
        slideTransition: "",
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
            for (g /= 2; 0 < g; ) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, 
            b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i, 
            g -= 1;
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
            this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center");
        }
    } ], e.prototype.initializeStage = function() {
        this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), 
        this.$stage = a("<" + this.settings.stageElement + ">", {
            class: this.settings.stageClass
        }).wrap(a("<div/>", {
            class: this.settings.stageOuterClass
        })), this.$element.append(this.$stage.parent()));
    }, e.prototype.initializeItems = function() {
        var b = this.$element.find(".owl-item");
        if (b.length) return this._items = b.get().map(function(b) {
            return a(b);
        }), this._mergers = this._items.map(function() {
            return 1;
        }), void this.refresh();
        this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), 
        this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);
    }, e.prototype.initialize = function() {
        var a, b, c;
        (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), 
        this.settings.autoWidth && !this.is("pre-loading")) && (a = this.$element.find("img"), 
        b = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, 
        c = this.$element.children(b).width(), a.length && c <= 0 && this.preloadAutoWidthImages(a));
        this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), 
        this.trigger("initialized");
    }, e.prototype.isVisible = function() {
        return !this.settings.checkVisibility || this.$element.is(":visible");
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
        return !!this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"), 
        this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), 
        this.refresh(), this.leave("resizing"), void this.trigger("resized")));
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
        3 !== b.which && (a.support.transform ? d = {
            x: (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === d.length ? 12 : 4],
            y: d[16 === d.length ? 13 : 5]
        } : (d = this.$stage.position(), d = {
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
        var e = -1, g = this.width(), h = this.coordinates();
        return this.settings.freeDrag || a.each(h, a.proxy(function(a, i) {
            return "left" === c && i - 30 < b && b < i + 30 ? e = a : "right" === c && i - g - 30 < b && b < i - g + 30 ? e = a + 1 : this.op(b, "<", i) && this.op(b, ">", h[a + 1] !== d ? h[a + 1] : i - g) && (e = "left" === c ? a + 1 : a), 
            -1 === e;
        }, this)), this.settings.loop || (this.op(b, ">", h[this.minimum()]) ? e = b = this.minimum() : this.op(b, "<", h[this.maximum()]) && (e = b = this.maximum())), 
        e;
    }, e.prototype.animate = function(b) {
        var c = 0 < this.speed();
        this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), 
        a.support.transform3d && a.support.transition ? this.$stage.css({
            transform: "translate3d(" + b + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
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
            if (b = this._items.length) for (c = this._items[--b].width(), d = this.$element.width(); b-- && !((c += this._items[b].width() + this.settings.margin) > d); ) ;
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
        a = d, this.reset(c))) : this.settings.rewind ? a = (a % (i += 1) + i) % i : a = Math.max(h, Math.min(i, a)), 
        this.speed(this.duration(c, a, b)), this.current(a), this.isVisible() && this.update();
    }, e.prototype.next = function(a) {
        a = a || !1, this.to(this.relative(this.current()) + 1, a);
    }, e.prototype.prev = function(a) {
        a = a || !1, this.to(this.relative(this.current()) - 1, a);
    }, e.prototype.onTransitionEnd = function(a) {
        if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated");
    }, e.prototype.viewport = function() {
        var d;
        return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), 
        d;
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
        this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel");
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
        this._interval || (this._visible = this._core.isVisible(), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval));
    }, e.prototype.refresh = function() {
        this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), 
        this._visible && this._core.invalidate("width") && this._core.refresh());
    }, e.prototype.destroy = function() {
        var a, c;
        for (a in b.clearInterval(this._interval), this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null);
    }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e;
}(window.Zepto || window.jQuery, window, document), function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) {
                    var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && -1 * e || 0, g = (b.property && void 0 !== b.property.value ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function(a, b) {
                        this.load(b);
                    }, this);
                    for (0 < c.lazyLoadEager && (e += c.lazyLoadEager, c.loop && (g -= c.lazyLoadEager, 
                    e++)); f++ < e; ) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), 
                    g++;
                }
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
    };
    e.Defaults = {
        lazyLoad: !1,
        lazyLoadEager: 0
    }, e.prototype.load = function(c) {
        var d = this._core.$stage.children().eq(c), e = d && d.find(".owl-lazy");
        !e || -1 < a.inArray(d.get(0), this._loaded) || (e.each(a.proxy(function(c, d) {
            var e, f = a(d), g = 1 < b.devicePixelRatio && f.attr("data-src-retina") || f.attr("data-src") || f.attr("data-srcset");
            this._core.trigger("load", {
                element: f,
                url: g
            }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
                f.css("opacity", 1), this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy");
            }, this)).attr("src", g) : f.is("source") ? f.one("load.owl.lazy", a.proxy(function() {
                this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy");
            }, this)).attr("srcset", g) : ((e = new Image()).onload = a.proxy(function() {
                f.css({
                    "background-image": 'url("' + g + '")',
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
    var e = function(c) {
        this._core = c, this._previousHeight = null, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && this.update();
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && "position" === a.property.name && this.update();
            }, this),
            "loaded.owl.lazy": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update();
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), 
        this._intervalId = null;
        var d = this;
        a(b).on("load", function() {
            d._core.settings.autoHeight && d.update();
        }), a(b).resize(function() {
            d._core.settings.autoHeight && (null != d._intervalId && clearTimeout(d._intervalId), 
            d._intervalId = setTimeout(function() {
                d.update();
            }, 250));
        });
    };
    e.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, e.prototype.update = function() {
        var b = this._core._current, c = b + this._core.settings.items, d = this._core.settings.lazyLoad, e = this._core.$stage.children().toArray().slice(b, c), f = [], g = 0;
        a.each(e, function(b, c) {
            f.push(a(c).height());
        }), (g = Math.max.apply(null, f)) <= 1 && d && this._previousHeight && (g = this._previousHeight), 
        this._previousHeight = g, this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass);
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
        if (-1 < (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu")) c = "youtube"; else if (-1 < d[3].indexOf("vimeo")) c = "vimeo"; else {
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
        var d, f, g = c.width && c.height ? "width:" + c.width + "px;height:" + c.height + "px;" : "", h = b.find("img"), i = "src", j = "", k = this._core.settings, l = function(c) {
            '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? a("<div/>", {
                class: "owl-video-tn " + j,
                srcType: c
            }) : a("<div/>", {
                class: "owl-video-tn",
                style: "opacity:1;background-image:url(" + c + ")"
            }), b.after(d), b.after('<div class="owl-video-play-icon"></div>');
        };
        if (b.wrap(a("<div/>", {
            class: "owl-video-wrapper",
            style: g
        })), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), 
        h.remove(), !1;
        "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({
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
        });
    }, e.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), 
        this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), 
        this._core.trigger("stopped", null, "video");
    }, e.prototype.play = function(b) {
        var c, e = a(b.target).closest("." + this._core.settings.itemClass), f = this._videos[e.attr("data-video")], g = f.width || "100%", h = f.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), 
        e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), 
        (c = a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", h), 
        c.attr("width", g), "youtube" === f.type ? c.attr("src", "//www.youtube.com/embed/" + f.id + "?autoplay=1&rel=0&v=" + f.id) : "vimeo" === f.type ? c.attr("src", "//player.vimeo.com/video/" + f.id + "?autoplay=1") : "vzaar" === f.type && c.attr("src", "//view.vzaar.com/" + f.id + "/player?autoplay=true"), 
        a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")), 
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
        this._core = b, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, 
        this._handlers = {
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._paused && (this._time = 0);
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
    }, e.prototype._next = function(d) {
        this._call = b.setTimeout(a.proxy(this._next, this, d), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), 
        this._core.is("interacting") || c.hidden || this._core.next(d || this._core.settings.autoplaySpeed);
    }, e.prototype.read = function() {
        return new Date().getTime() - this._time;
    }, e.prototype.play = function(c, d) {
        var e;
        this._core.is("rotating") || this._core.enter("rotating"), c = c || this._core.settings.autoplayTimeout, 
        e = Math.min(this._time % (this._timeout || c), c), this._paused ? (this._time = this.read(), 
        this._paused = !1) : b.clearTimeout(this._call), this._time += this.read() % c - e, 
        this._timeout = c, this._call = b.setTimeout(a.proxy(this._next, this, d), c - e);
    }, e.prototype.stop = function() {
        this._core.is("rotating") && (this._time = 0, this._paused = !0, b.clearTimeout(this._call), 
        this._core.leave("rotating"));
    }, e.prototype.pause = function() {
        this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, 
        b.clearTimeout(this._call));
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
        navText: [ '<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>' ],
        navSpeed: !1,
        navElement: 'button type="button" role="presentation"',
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
        }, this)), c.dotsData || (this._templates = [ a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML") ]), 
        this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), 
        this._controls.$absolute.on("click", "button", a.proxy(function(b) {
            var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(), this.to(d, c.dotsSpeed);
        }, this)), this._overrides) this._core[b] = a.proxy(this[b], this);
    }, e.prototype.destroy = function() {
        var a, b, c, d, e;
        for (a in e = this._core.settings, this._handlers) this.$element.off(a, this._handlers[a]);
        for (b in this._controls) "$relative" === b && e.navContainer ? this._controls[b].html("") : this._controls[b].remove();
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
            if (g[b] !== d) return e = !c || b, !1;
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
}(window.Zepto || window.jQuery, window, document), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");

!function(a) {
    "use strict";
    var b = jQuery.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || 3 < b[0]) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
}(), function(a) {
    "use strict";
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1, d = this;
        a(this).one("bsTransitionEnd", function() {
            c = !0;
        });
        return setTimeout(function() {
            c || a(d).trigger(a.support.transition.end);
        }, b), this;
    }, a(function() {
        a.support.transition = function() {
            var a = document.createElement("bootstrap"), b = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
            for (var c in b) if (void 0 !== a.style[c]) return {
                end: b[c]
            };
            return !1;
        }(), a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function(b) {
                if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments);
            }
        });
    });
}(jQuery), function(a) {
    "use strict";
    var c = '[data-dismiss="alert"]', d = function(b) {
        a(b).on("click", c, this.close);
    };
    d.VERSION = "3.3.7", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove();
        }
        var e = a(this), f = e.attr("data-target");
        f || (f = (f = e.attr("href")) && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a("#" === f ? [] : f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), 
        b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c());
    };
    var e = a.fn.alert;
    a.fn.alert = function(b) {
        return this.each(function() {
            var c = a(this), e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c);
        });
    }, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
        return a.fn.alert = e, this;
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close);
}(jQuery), function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.button"), f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b);
        });
    }
    var c = function(b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1;
    };
    c.VERSION = "3.3.7", c.DEFAULTS = {
        loadingText: "loading..."
    }, c.prototype.setState = function(b) {
        var c = "disabled", d = this.$element, e = d.is("input") ? "val" : "html", f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() {
            d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, 
            d.addClass(c).attr(c, c).prop(c, !0)) : this.isLoading && (this.isLoading = !1, 
            d.removeClass(c).removeAttr(c).prop(c, !1));
        }, this), 0);
    }, c.prototype.toggle = function() {
        var a = !0, b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), 
            this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), 
            this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), 
            a && c.trigger("change");
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active");
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
        return a.fn.button = d, this;
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
        var d = a(c.target).closest(".btn");
        b.call(d, "toggle"), a(c.target).is('input[type="radio"], input[type="checkbox"]') || (c.preventDefault(), 
        d.is("input,button") ? d.trigger("focus") : d.find("input:visible,button:visible").first().trigger("focus"));
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type));
    });
}(jQuery), function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.carousel"), f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b), g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle();
        });
    }
    var c = function(b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), 
        this.options = c, this.paused = null, this.sliding = null, this.interval = null, 
        this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), 
        "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
    };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, c.prototype.keydown = function(a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
              case 37:
                this.prev();
                break;

              case 39:
                this.next();
                break;

              default:
                return;
            }
            a.preventDefault();
        }
    }, c.prototype.cycle = function(b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), 
        this;
    }, c.prototype.getItemIndex = function(a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active);
    }, c.prototype.getItemForDirection = function(a, b) {
        var c = this.getItemIndex(b);
        if (("prev" == a && 0 === c || "next" == a && c == this.$items.length - 1) && !this.options.wrap) return b;
        var f = (c + ("prev" == a ? -1 : 1)) % this.$items.length;
        return this.$items.eq(f);
    }, c.prototype.to = function(a) {
        var b = this, c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(a > this.$items.length - 1 || a < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            b.to(a);
        }) : c == a ? this.pause().cycle() : this.slide(c < a ? "next" : "prev", this.$items.eq(a));
    }, c.prototype.pause = function(b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), 
        this.cycle(!0)), this.interval = clearInterval(this.interval), this;
    }, c.prototype.next = function() {
        if (!this.sliding) return this.slide("next");
    }, c.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev");
    }, c.prototype.slide = function(b, d) {
        var e = this.$element.find(".item.active"), f = d || this.getItemForDirection(b, e), g = this.interval, h = "next" == b ? "left" : "right", i = this;
        if (f.hasClass("active")) return this.sliding = !1;
        var j = f[0], k = a.Event("slide.bs.carousel", {
            relatedTarget: j,
            direction: h
        });
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active");
            }
            var m = a.Event("slid.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), 
            f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() {
                f.removeClass([ b, h ].join(" ")).addClass("active"), e.removeClass([ "active", h ].join(" ")), 
                i.sliding = !1, setTimeout(function() {
                    i.$element.trigger(m);
                }, 0);
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), 
            this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this;
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
        return a.fn.carousel = d, this;
    };
    var e = function(c) {
        var d, e = a(this), f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()), h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault();
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), 
    a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var c = a(this);
            b.call(c, c.data());
        });
    });
}(jQuery), function(a) {
    "use strict";
    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d);
    }
    function c(b) {
        return this.each(function() {
            var c = a(this), e = c.data("bs.collapse"), f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), 
            "string" == typeof b && e[b]();
        });
    }
    var d = function(b, c) {
        this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), 
        this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), 
        this.options.toggle && this.toggle();
    };
    d.VERSION = "3.3.7", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
        toggle: !0
    }, d.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height";
    }, d.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && ((b = e.data("bs.collapse")) && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), 
                    this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var h = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, 
                        this.$element.trigger("shown.bs.collapse");
                    };
                    if (!a.support.transition) return h.call(this);
                    var i = a.camelCase([ "scroll", g ].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i]);
                }
            }
        }
    }, d.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), 
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var e = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this);
            }
        }
    }, d.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
    }, d.prototype.getParent = function() {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e);
        }, this)).end();
    }, d.prototype.addAriaAndCollapsedClass = function(a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c);
    };
    var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() {
        return a.fn.collapse = e, this;
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e), h = f.data("bs.collapse") ? "toggle" : e.data();
        c.call(f, h);
    });
}(jQuery), function(a) {
    "use strict";
    function b(b) {
        var c = b.attr("data-target");
        c || (c = (c = b.attr("href")) && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent();
    }
    function c(c) {
        c && 3 === c.which || (a(e).remove(), a(f).each(function() {
            var d = a(this), e = b(d), f = {
                relatedTarget: this
            };
            e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), 
            c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))));
        }));
    }
    var e = ".dropdown-backdrop", f = '[data-toggle="dropdown"]', g = function(b) {
        a(b).on("click.bs.dropdown", this.toggle);
    };
    g.VERSION = "3.3.7", g.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = b(e), g = f.hasClass("open");
            if (c(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h));
            }
            return !1;
        }
    }, g.prototype.keydown = function(c) {
        if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
            var d = a(this);
            if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = b(d), g = e.hasClass("open");
                if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), 
                d.trigger("click");
                var i = e.find(".dropdown-menu li:not(.disabled):visible a");
                if (i.length) {
                    var j = i.index(c.target);
                    38 == c.which && 0 < j && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), 
                    i.eq(j).trigger("focus");
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = function(b) {
        return this.each(function() {
            var c = a(this), d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c);
        });
    }, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = h, this;
    }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation();
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown);
}(jQuery), function(a) {
    "use strict";
    function b(b, d) {
        return this.each(function() {
            var e = a(this), f = e.data("bs.modal"), g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d);
        });
    }
    var c = function(b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), 
        this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, 
        this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal");
        }, this));
    };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, 
    c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, c.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a);
    }, c.prototype.show = function(b) {
        var d = this, e = a.Event("show.bs.modal", {
            relatedTarget: b
        });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, 
        this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), 
        this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), 
        this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            d.$element.one("mouseup.dismiss.bs.modal", function(b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
            });
        }), this.backdrop(function() {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), 
            d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
            var f = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            e ? d.$dialog.one("bsTransitionEnd", function() {
                d.$element.trigger("focus").trigger(f);
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f);
        }));
    }, c.prototype.hide = function(b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), 
        this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), 
        a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), 
        this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal());
    }, c.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus");
        }, this));
    }, c.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide();
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
    }, c.prototype.resize = function() {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal");
    }, c.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(), this.backdrop(function() {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal");
        });
    }, c.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
    }, c.prototype.backdrop = function(b) {
        var d = this, e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), 
            this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()));
            }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b();
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function() {
                d.removeBackdrop(), b && b();
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g();
        } else b && b();
    }, c.prototype.handleUpdate = function() {
        this.adjustDialog();
    }, c.prototype.adjustDialog = function() {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        });
    }, c.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        });
    }, c.prototype.checkScrollbar = function() {
        var a = window.innerWidth;
        if (!a) {
            var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left);
        }
        this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar();
    }, c.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth);
    }, c.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad);
    }, c.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b;
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
        return a.fn.modal = d, this;
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
        var d = a(this), e = d.attr("href"), f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")), g = f.data("bs.modal") ? "toggle" : a.extend({
            remote: !/#/.test(e) && e
        }, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
                d.is(":visible") && d.trigger("focus");
            });
        }), b.call(f, g, this);
    });
}(jQuery), function(a) {
    "use strict";
    var c = function(a, b) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, 
        this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b);
    };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, c.prototype.init = function(b, c, d) {
        if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), 
        this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), 
        this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var e = this.options.trigger.split(" "), f = e.length; f--; ) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this)); else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin", i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), 
                this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this));
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle();
    }, c.prototype.getDefaults = function() {
        return c.DEFAULTS;
    }, c.prototype.getOptions = function(b) {
        return (b = a.extend({}, this.getDefaults(), this.$element.data(), b)).delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b;
    }, c.prototype.getDelegateOptions = function() {
        var b = {}, c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d);
        }), b;
    }, c.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), 
        a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), 
        c.tip().hasClass("in") || "in" == c.hoverState ? void (c.hoverState = "in") : (clearTimeout(c.timeout), 
        c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show();
        }, c.options.delay.show)) : c.show());
    }, c.prototype.isInStateTrue = function() {
        for (var a in this.inState) if (this.inState[a]) return !0;
        return !1;
    }, c.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        if (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), 
        a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), 
        !c.isInStateTrue()) return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide();
        }, c.options.delay.hide)) : c.hide();
    }, c.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d) return;
            var e = this, f = this.tip(), g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement, i = /\s?auto?\s?/i, j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), 
            this.$element.trigger("inserted.bs." + this.type);
            var k = this.getPosition(), l = f[0].offsetWidth, m = f[0].offsetHeight;
            if (j) {
                var n = h, o = this.getPosition(this.$viewport);
                h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, 
                f.removeClass(n).addClass(h);
            }
            var p = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(p, h);
            var q = function() {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e);
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q();
        }
    }, c.prototype.applyPlacement = function(b, c) {
        var d = this.tip(), e = d[0].offsetWidth, f = d[0].offsetHeight, g = parseInt(d.css("margin-top"), 10), h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
            using: function(a) {
                d.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                });
            }
        }, b), 0), d.addClass("in");
        var i = d[0].offsetWidth, j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c), m = l ? 2 * k.left - e + i : 2 * k.top - f + j, n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l);
    }, c.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "");
    }, c.prototype.setContent = function() {
        var a = this.tip(), b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right");
    }, c.prototype.hide = function(b) {
        function d() {
            "in" != e.hoverState && f.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), 
            b && b();
        }
        var e = this, f = a(this.$tip), g = a.Event("hide.bs." + this.type);
        if (this.$element.trigger(g), !g.isDefaultPrevented()) return f.removeClass("in"), 
        a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), 
        this.hoverState = null, this;
    }, c.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
    }, c.prototype.hasContent = function() {
        return this.getTitle();
    }, c.prototype.getPosition = function(b) {
        var c = (b = b || this.$element)[0], d = "BODY" == c.tagName, e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top
        }));
        var f = window.SVGElement && c instanceof window.SVGElement, g = d ? {
            top: 0,
            left: 0
        } : f ? null : b.offset(), h = {
            scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
        }, i = d ? {
            width: a(window).width(),
            height: a(window).height()
        } : null;
        return a.extend({}, e, h, i, g);
    }, c.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        };
    }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
        var e = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return e;
        var f = this.options.viewport && this.options.viewport.padding || 0, g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll, i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i);
        } else {
            var j = b.left - f, k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k);
        }
        return e;
    }, c.prototype.getTitle = function() {
        var b = this.$element, c = this.options;
        return b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title);
    }, c.prototype.getUID = function(a) {
        for (;a += ~~(1e6 * Math.random()), document.getElementById(a); ) ;
        return a;
    }, c.prototype.tip = function() {
        if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip;
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
    }, c.prototype.enable = function() {
        this.enabled = !0;
    }, c.prototype.disable = function() {
        this.enabled = !1;
    }, c.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled;
    }, c.prototype.toggle = function(b) {
        var c = this;
        b && ((c = a(b.currentTarget).data("bs." + this.type)) || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), 
        a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, 
        c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
    }, c.prototype.destroy = function() {
        var a = this;
        clearTimeout(this.timeout), this.hide(function() {
            a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), 
            a.$tip = null, a.$arrow = null, a.$viewport = null, a.$element = null;
        });
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = function(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.tooltip"), f = "object" == typeof b && b;
            !e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this, f)), 
            "string" == typeof b && e[b]());
        });
    }, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = d, this;
    };
}(jQuery), function(a) {
    "use strict";
    var c = function(a, b) {
        this.init("popover", a, b);
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.7", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), (c.prototype.constructor = c).prototype.getDefaults = function() {
        return c.DEFAULTS;
    }, c.prototype.setContent = function() {
        var a = this.tip(), b = this.getTitle(), c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), 
        a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide();
    }, c.prototype.hasContent = function() {
        return this.getTitle() || this.getContent();
    }, c.prototype.getContent = function() {
        var a = this.$element, b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content);
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow");
    };
    var d = a.fn.popover;
    a.fn.popover = function(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.popover"), f = "object" == typeof b && b;
            !e && /destroy|hide/.test(b) || (e || d.data("bs.popover", e = new c(this, f)), 
            "string" == typeof b && e[b]());
        });
    }, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
        return a.fn.popover = d, this;
    };
}(jQuery), function(a) {
    "use strict";
    function b(c, d) {
        this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), 
        this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", 
        this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, 
        this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), 
        this.process();
    }
    function c(c) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.scrollspy"), f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]();
        });
    }
    b.VERSION = "3.3.7", b.DEFAULTS = {
        offset: 10
    }, b.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
    }, b.prototype.refresh = function() {
        var b = this, c = "offset", d = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), 
        a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), 
        this.$body.find(this.selector).map(function() {
            var b = a(this), e = b.data("target") || b.attr("href"), f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [ [ f[c]().top + d, e ] ] || null;
        }).sort(function(a, b) {
            return a[0] - b[0];
        }).each(function() {
            b.offsets.push(this[0]), b.targets.push(this[1]);
        });
    }, b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.getScrollHeight(), d = this.options.offset + c - this.$scrollElement.height(), e = this.offsets, f = this.targets, g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), d <= b) return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return this.activeTarget = null, this.clear();
        for (a = e.length; a--; ) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a]);
    }, b.prototype.activate = function(b) {
        this.activeTarget = b, this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]', d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), 
        d.trigger("activate.bs.scrollspy");
    }, b.prototype.clear = function() {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = d, this;
    }, a(window).on("load.bs.scrollspy.data-api", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            c.call(b, b.data());
        });
    });
}(jQuery), function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]();
        });
    }
    var c = function(b) {
        this.element = a(b);
    };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.prototype.show = function() {
        var b = this.element, c = b.closest("ul:not(.dropdown-menu)"), d = b.data("target");
        if (d || (d = (d = b.attr("href")) && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"), f = a.Event("hide.bs.tab", {
                relatedTarget: b[0]
            }), g = a.Event("show.bs.tab", {
                relatedTarget: e[0]
            });
            if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() {
                    e.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: b[0]
                    }), b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e[0]
                    });
                });
            }
        }
    }, c.prototype.activate = function(b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), 
            b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, 
            b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), 
            e && e();
        }
        var g = d.find("> .active"), h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), 
        g.removeClass("in");
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
        return a.fn.tab = d, this;
    };
    var e = function(c) {
        c.preventDefault(), b.call(a(this), "show");
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
}(jQuery), function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.affix"), f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]();
        });
    }
    var c = function(b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), 
        this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, 
        this.checkPosition();
    };
    c.VERSION = "3.3.7", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
        offset: 0,
        target: window
    }, c.prototype.getState = function(a, b, c, d) {
        var e = this.$target.scrollTop(), f = this.$element.offset(), g = this.$target.height();
        if (null != c && "top" == this.affixed) return e < c && "top";
        if ("bottom" == this.affixed) return null != c ? !(e + this.unpin <= f.top) && "bottom" : !(e + g <= a - d) && "bottom";
        var h = null == this.affixed, i = h ? e : f.top;
        return null != c && e <= c ? "top" : null != d && a - d <= i + (h ? g : b) && "bottom";
    }, c.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(), b = this.$element.offset();
        return this.pinnedOffset = b.top - a;
    }, c.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1);
    }, c.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(), d = this.options.offset, e = d.top, f = d.bottom, g = Math.max(a(document).height(), a(document.body).height());
            "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), 
            "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h : ""), j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix");
            }
            "bottom" == h && this.$element.offset({
                top: g - b - f
            });
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
        return a.fn.affix = d, this;
    }, a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var c = a(this), d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), 
            null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d);
        });
    });
}(jQuery), function(e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t(require("jquery")); else if ("function" == typeof define && define.amd) define([ "jquery" ], t); else {
        var i = "object" == typeof exports ? t(require("jquery")) : t(e.jQuery);
        for (var a in i) ("object" == typeof exports ? exports : e)[a] = i[a];
    }
}(self || this, function(e) {
    return function() {
        "use strict";
        var t = {
            3046: function(e, t, i) {
                var a;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0, i(3851), i(219), i(207), i(5296);
                var n = ((a = i(2394)) && a.__esModule ? a : {
                    default: a
                }).default;
                t.default = n;
            },
            8741: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var i = !("undefined" == typeof window || !window.document || !window.document.createElement);
                t.default = i;
            },
            3976: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var a = i(2839), n = {
                    _maxTestPos: 500,
                    placeholder: "_",
                    optionalmarker: [ "[", "]" ],
                    quantifiermarker: [ "{", "}" ],
                    groupmarker: [ "(", ")" ],
                    alternatormarker: "|",
                    escapeChar: "\\",
                    mask: null,
                    regex: null,
                    oncomplete: function() {},
                    onincomplete: function() {},
                    oncleared: function() {},
                    repeat: 0,
                    greedy: !1,
                    autoUnmask: !1,
                    removeMaskOnSubmit: !1,
                    clearMaskOnLostFocus: !0,
                    insertMode: !0,
                    insertModeVisual: !0,
                    clearIncomplete: !1,
                    alias: null,
                    onKeyDown: function() {},
                    onBeforeMask: null,
                    onBeforePaste: function(e, t) {
                        return "function" == typeof t.onBeforeMask ? t.onBeforeMask.call(this, e, t) : e;
                    },
                    onBeforeWrite: null,
                    onUnMask: null,
                    showMaskOnFocus: !0,
                    showMaskOnHover: !0,
                    onKeyValidation: function() {},
                    skipOptionalPartCharacter: " ",
                    numericInput: !1,
                    rightAlign: !1,
                    undoOnEscape: !0,
                    radixPoint: "",
                    _radixDance: !1,
                    groupSeparator: "",
                    keepStatic: null,
                    positionCaretOnTab: !0,
                    tabThrough: !1,
                    supportsInputType: [ "text", "tel", "url", "password", "search" ],
                    ignorables: [ a.keys.Backspace, a.keys.Tab, a.keys.Pause, a.keys.Escape, a.keys.PageUp, a.keys.PageDown, a.keys.End, a.keys.Home, a.keys.Left, a.keys.Up, a.keys.Right, a.keys.Down, a.keys.Insert, a.keys.Delete, a.keys.ContextMenu, a.keys.F1, a.keys.F2, a.keys.F3, a.keys.F4, a.keys.F5, a.keys.F6, a.keys.F7, a.keys.F8, a.keys.F9, a.keys.F10, a.keys.F11, a.keys.F12, a.keys.KEY_229, a.keys.Shift, a.keys.Control, a.keys.Alt ],
                    isComplete: null,
                    preValidation: null,
                    postValidation: null,
                    staticDefinitionSymbol: void 0,
                    jitMasking: !1,
                    nullable: !0,
                    inputEventOnly: !1,
                    noValuePatching: !1,
                    positionCaretOnClick: "lvp",
                    casing: null,
                    inputmode: "text",
                    importDataAttributes: !0,
                    shiftPositions: !0,
                    usePrototypeDefinitions: !0,
                    validationEventTimeOut: 3e3,
                    substitutes: {}
                };
                t.default = n;
            },
            7392: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0, t.default = {
                    9: {
                        validator: "[0-9０-９]",
                        definitionSymbol: "*"
                    },
                    a: {
                        validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                        definitionSymbol: "*"
                    },
                    "*": {
                        validator: "[0-9０-９A-Za-zА-яЁёÀ-ÿµ]"
                    }
                };
            },
            3287: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var a, n = (a = i(7957)) && a.__esModule ? a : {
                    default: a
                };
                if (void 0 === n.default) throw "jQuery not loaded!";
                var r = n.default;
                t.default = r;
            },
            9845: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.mobile = t.iphone = t.iemobile = t.ie = void 0;
                var a, n = (a = i(9380)) && a.__esModule ? a : {
                    default: a
                }, r = n.default.navigator && n.default.navigator.userAgent || "", o = 0 < r.indexOf("MSIE ") || 0 < r.indexOf("Trident/"), s = n.default.navigator && n.default.navigator.maxTouchPoints || "ontouchstart" in n.default, l = /iemobile/i.test(r), c = /iphone/i.test(r) && !l;
                t.iphone = c, t.iemobile = l, t.mobile = s, t.ie = o;
            },
            7184: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e) {
                    return e.replace(i, "\\$1");
                };
                var i = new RegExp("(\\" + [ "/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^" ].join("|\\") + ")", "gim");
            },
            6030: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.EventHandlers = void 0;
                var a = i(8711), n = i(2839), r = i(9845), o = i(7215), s = i(7760), l = i(4713);
                function c(e, t) {
                    var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (!i) {
                        if (Array.isArray(e) || (i = function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return u(e, t);
                                var i = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? u(e, t) : void 0;
                            }
                        }(e)) || t && e && "number" == typeof e.length) {
                            i && (e = i);
                            var a = 0, n = function() {};
                            return {
                                s: n,
                                n: function() {
                                    return a >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[a++]
                                    };
                                },
                                e: function(e) {
                                    throw e;
                                },
                                f: n
                            };
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }
                    var r, o = !0, s = !1;
                    return {
                        s: function() {
                            i = i.call(e);
                        },
                        n: function() {
                            var e = i.next();
                            return o = e.done, e;
                        },
                        e: function(e) {
                            s = !0, r = e;
                        },
                        f: function() {
                            try {
                                o || null == i.return || i.return();
                            } finally {
                                if (s) throw r;
                            }
                        }
                    };
                }
                function u(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var i = 0, a = new Array(t); i < t; i++) a[i] = e[i];
                    return a;
                }
                var f = {
                    keydownEvent: function(e, t, i, c, u) {
                        var p = this.inputmask, d = p.opts, h = p.dependencyLib, m = p.maskset, v = this, g = h(v), k = e.key, y = a.caret.call(p, v), b = d.onKeyDown.call(this, e, a.getBuffer.call(p), y, d);
                        if (void 0 !== b) return b;
                        if (k === n.keys.Backspace || k === n.keys.Delete || r.iphone && k === n.keys.BACKSPACE_SAFARI || e.ctrlKey && k === n.keys.x && !("oncut" in v)) e.preventDefault(), 
                        o.handleRemove.call(p, v, k, y), (0, s.writeBuffer)(v, a.getBuffer.call(p, !0), m.p, e, v.inputmask._valueGet() !== a.getBuffer.call(p).join("")); else if (k === n.keys.End || k === n.keys.PageDown) {
                            e.preventDefault();
                            var x = a.seekNext.call(p, a.getLastValidPosition.call(p));
                            a.caret.call(p, v, e.shiftKey ? y.begin : x, x, !0);
                        } else k === n.keys.Home && !e.shiftKey || k === n.keys.PageUp ? (e.preventDefault(), 
                        a.caret.call(p, v, 0, e.shiftKey ? y.begin : 0, !0)) : d.undoOnEscape && k === n.keys.Escape && !0 !== e.altKey ? ((0, 
                        s.checkVal)(v, !0, !1, p.undoValue.split("")), g.trigger("click")) : k !== n.keys.Insert || e.shiftKey || e.ctrlKey || void 0 !== p.userOptions.insertMode ? !0 === d.tabThrough && k === n.keys.Tab ? !0 === e.shiftKey ? (y.end = a.seekPrevious.call(p, y.end, !0), 
                        !0 === l.getTest.call(p, y.end - 1).match.static && y.end--, y.begin = a.seekPrevious.call(p, y.end, !0), 
                        0 <= y.begin && 0 < y.end && (e.preventDefault(), a.caret.call(p, v, y.begin, y.end))) : (y.begin = a.seekNext.call(p, y.begin, !0), 
                        y.end = a.seekNext.call(p, y.begin, !0), y.end < m.maskLength && y.end--, y.begin <= m.maskLength && (e.preventDefault(), 
                        a.caret.call(p, v, y.begin, y.end))) : e.shiftKey || d.insertModeVisual && !1 === d.insertMode && (k === n.keys.Right ? setTimeout(function() {
                            var e = a.caret.call(p, v);
                            a.caret.call(p, v, e.begin);
                        }, 0) : k === n.keys.Left && setTimeout(function() {
                            var e = a.translatePosition.call(p, v.inputmask.caretPos.begin);
                            a.translatePosition.call(p, v.inputmask.caretPos.end), p.isRTL ? a.caret.call(p, v, e + (e === m.maskLength ? 0 : 1)) : a.caret.call(p, v, e - (0 === e ? 0 : 1));
                        }, 0)) : o.isSelection.call(p, y) ? d.insertMode = !d.insertMode : (d.insertMode = !d.insertMode, 
                        a.caret.call(p, v, y.begin, y.begin));
                        return p.ignorable = d.ignorables.includes(k), f.keypressEvent.call(this, e, t, i, c, u);
                    },
                    keypressEvent: function(e, t, i, r, l) {
                        var c = this.inputmask || this, u = c.opts, f = c.dependencyLib, p = c.maskset, d = c.el, h = f(d), m = e.key;
                        if (!(!0 === t || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || c.ignorable)) return m === n.keys.Enter && c.undoValue !== c._valueGet(!0) && (c.undoValue = c._valueGet(!0), 
                        setTimeout(function() {
                            h.trigger("change");
                        }, 0)), !1;
                        if (m) {
                            var v, g = t ? {
                                begin: l,
                                end: l
                            } : a.caret.call(c, d);
                            m = u.substitutes[m] || m, p.writeOutBuffer = !0;
                            var k = o.isValid.call(c, g, m, r, void 0, void 0, void 0, t);
                            if (!1 !== k && (a.resetMaskSet.call(c, !0), v = void 0 !== k.caret ? k.caret : a.seekNext.call(c, k.pos.begin ? k.pos.begin : k.pos), 
                            p.p = v), v = u.numericInput && void 0 === k.caret ? a.seekPrevious.call(c, v) : v, 
                            !1 !== i && (setTimeout(function() {
                                u.onKeyValidation.call(d, m, k);
                            }, 0), p.writeOutBuffer && !1 !== k)) {
                                var y = a.getBuffer.call(c);
                                (0, s.writeBuffer)(d, y, v, e, !0 !== t);
                            }
                            if (e.preventDefault(), t) return !1 !== k && (k.forwardPosition = v), k;
                        }
                    },
                    keyupEvent: function(e) {
                        var t = this.inputmask;
                        t.isComposing && (e.keyCode !== n.keyCode.KEY_229 && e.key !== n.keys.Enter || t.$el.trigger("input"));
                    },
                    pasteEvent: function(e) {
                        var t, i = this.inputmask, n = i.opts, r = i._valueGet(!0), o = a.caret.call(i, this);
                        i.isRTL && (t = o.end, o.end = a.translatePosition.call(i, o.begin), o.begin = a.translatePosition.call(i, t));
                        var l = r.substr(0, o.begin), u = r.substr(o.end, r.length);
                        if (l == (i.isRTL ? a.getBufferTemplate.call(i).slice().reverse() : a.getBufferTemplate.call(i)).slice(0, o.begin).join("") && (l = ""), 
                        u == (i.isRTL ? a.getBufferTemplate.call(i).slice().reverse() : a.getBufferTemplate.call(i)).slice(o.end).join("") && (u = ""), 
                        window.clipboardData && window.clipboardData.getData) r = l + window.clipboardData.getData("Text") + u; else {
                            if (!e.clipboardData || !e.clipboardData.getData) return !0;
                            r = l + e.clipboardData.getData("text/plain") + u;
                        }
                        var f = r;
                        if (i.isRTL) {
                            f = f.split("");
                            var p, d = c(a.getBufferTemplate.call(i));
                            try {
                                for (d.s(); !(p = d.n()).done; ) {
                                    var h = p.value;
                                    f[0] === h && f.shift();
                                }
                            } catch (e) {
                                d.e(e);
                            } finally {
                                d.f();
                            }
                            f = f.join("");
                        }
                        if ("function" == typeof n.onBeforePaste) {
                            if (!1 === (f = n.onBeforePaste.call(i, f, n))) return !1;
                            f || (f = r);
                        }
                        (0, s.checkVal)(this, !0, !1, f.toString().split(""), e), e.preventDefault();
                    },
                    inputFallBackEvent: function(e) {
                        var t = this.inputmask, i = t.opts, o = t.dependencyLib, c = this, u = c.inputmask._valueGet(!0), p = (t.isRTL ? a.getBuffer.call(t).slice().reverse() : a.getBuffer.call(t)).join(""), d = a.caret.call(t, c, void 0, void 0, !0);
                        if (p !== u) {
                            var h = function(e, n, r) {
                                for (var o, s, c, u = e.substr(0, r.begin).split(""), f = e.substr(r.begin).split(""), p = n.substr(0, r.begin).split(""), d = n.substr(r.begin).split(""), h = u.length >= p.length ? u.length : p.length, m = f.length >= d.length ? f.length : d.length, v = "", g = [], k = "~"; u.length < h; ) u.push(k);
                                for (;p.length < h; ) p.push(k);
                                for (;f.length < m; ) f.unshift(k);
                                for (;d.length < m; ) d.unshift(k);
                                var y = u.concat(f), b = p.concat(d);
                                for (s = 0, o = y.length; s < o; s++) switch (c = l.getPlaceholder.call(t, a.translatePosition.call(t, s)), 
                                v) {
                                  case "insertText":
                                    b[s - 1] === y[s] && r.begin == y.length - 1 && g.push(y[s]), s = o;
                                    break;

                                  case "insertReplacementText":
                                  case "deleteContentBackward":
                                    y[s] === k ? r.end++ : s = o;
                                    break;

                                  default:
                                    y[s] !== b[s] && (y[s + 1] !== k && y[s + 1] !== c && void 0 !== y[s + 1] || (b[s] !== c || b[s + 1] !== k) && b[s] !== k ? b[s + 1] === k && b[s] === y[s + 1] ? (v = "insertText", 
                                    g.push(y[s]), r.begin--, r.end--) : y[s] !== c && y[s] !== k && (y[s + 1] === k || b[s] !== y[s] && b[s + 1] === y[s + 1]) ? (v = "insertReplacementText", 
                                    g.push(y[s]), r.begin--) : y[s] === k ? (v = "deleteContentBackward", (a.isMask.call(t, a.translatePosition.call(t, s), !0) || b[s] === i.radixPoint) && r.end++) : s = o : (v = "insertText", 
                                    g.push(y[s]), r.begin--, r.end--));
                                }
                                return {
                                    action: v,
                                    data: g,
                                    caret: r
                                };
                            }(u = function(e, i, n) {
                                if (r.iemobile) {
                                    var o = i.replace(a.getBuffer.call(t).join(""), "");
                                    if (1 === o.length) {
                                        var s = i.split("");
                                        s.splice(n.begin, 0, o), i = s.join("");
                                    }
                                }
                                return i;
                            }(0, u, d), p, d);
                            switch ((c.inputmask.shadowRoot || c.ownerDocument).activeElement !== c && c.focus(), 
                            (0, s.writeBuffer)(c, a.getBuffer.call(t)), a.caret.call(t, c, d.begin, d.end, !0), 
                            h.action) {
                              case "insertText":
                              case "insertReplacementText":
                                h.data.forEach(function(e, i) {
                                    var a = new o.Event("keypress");
                                    a.key = e, t.ignorable = !1, f.keypressEvent.call(c, a);
                                }), setTimeout(function() {
                                    t.$el.trigger("keyup");
                                }, 0);
                                break;

                              case "deleteContentBackward":
                                var m = new o.Event("keydown");
                                m.key = n.keys.Backspace, f.keydownEvent.call(c, m);
                                break;

                              default:
                                (0, s.applyInputValue)(c, u);
                            }
                            e.preventDefault();
                        }
                    },
                    compositionendEvent: function(e) {
                        var t = this.inputmask;
                        t.isComposing = !1, t.$el.trigger("input");
                    },
                    setValueEvent: function(e) {
                        var t = this.inputmask, i = this, n = e && e.detail ? e.detail[0] : arguments[1];
                        void 0 === n && (n = i.inputmask._valueGet(!0)), (0, s.applyInputValue)(i, n), (e.detail && void 0 !== e.detail[1] || void 0 !== arguments[2]) && a.caret.call(t, i, e.detail ? e.detail[1] : arguments[2]);
                    },
                    focusEvent: function(e) {
                        var t = this.inputmask, i = t.opts, n = this, r = n.inputmask._valueGet();
                        i.showMaskOnFocus && r !== a.getBuffer.call(t).join("") && (0, s.writeBuffer)(n, a.getBuffer.call(t), a.seekNext.call(t, a.getLastValidPosition.call(t))), 
                        !0 !== i.positionCaretOnTab || !1 !== t.mouseEnter || o.isComplete.call(t, a.getBuffer.call(t)) && -1 !== a.getLastValidPosition.call(t) || f.clickEvent.apply(n, [ e, !0 ]), 
                        t.undoValue = t._valueGet(!0);
                    },
                    invalidEvent: function(e) {
                        this.inputmask.validationEvent = !0;
                    },
                    mouseleaveEvent: function() {
                        var e = this.inputmask, t = e.opts, i = this;
                        e.mouseEnter = !1, t.clearMaskOnLostFocus && (i.inputmask.shadowRoot || i.ownerDocument).activeElement !== i && (0, 
                        s.HandleNativePlaceholder)(i, e.originalPlaceholder);
                    },
                    clickEvent: function(e, t) {
                        var i = this.inputmask, n = this;
                        if ((n.inputmask.shadowRoot || n.ownerDocument).activeElement === n) {
                            var r = a.determineNewCaretPosition.call(i, a.caret.call(i, n), t);
                            void 0 !== r && a.caret.call(i, n, r);
                        }
                    },
                    cutEvent: function(e) {
                        var t = this.inputmask, i = t.maskset, r = this, l = a.caret.call(t, r), c = t.isRTL ? a.getBuffer.call(t).slice(l.end, l.begin) : a.getBuffer.call(t).slice(l.begin, l.end), u = t.isRTL ? c.reverse().join("") : c.join("");
                        window.navigator.clipboard ? window.navigator.clipboard.writeText(u) : window.clipboardData && window.clipboardData.getData && window.clipboardData.setData("Text", u), 
                        o.handleRemove.call(t, r, n.keys.Delete, l), (0, s.writeBuffer)(r, a.getBuffer.call(t), i.p, e, t.undoValue !== t._valueGet(!0));
                    },
                    blurEvent: function(e) {
                        var t = this.inputmask, i = t.opts, n = (0, t.dependencyLib)(this), r = this;
                        if (r.inputmask) {
                            (0, s.HandleNativePlaceholder)(r, t.originalPlaceholder);
                            var l = r.inputmask._valueGet(), c = a.getBuffer.call(t).slice();
                            "" !== l && (i.clearMaskOnLostFocus && (-1 === a.getLastValidPosition.call(t) && l === a.getBufferTemplate.call(t).join("") ? c = [] : s.clearOptionalTail.call(t, c)), 
                            !1 === o.isComplete.call(t, c) && (setTimeout(function() {
                                n.trigger("incomplete");
                            }, 0), i.clearIncomplete && (a.resetMaskSet.call(t), c = i.clearMaskOnLostFocus ? [] : a.getBufferTemplate.call(t).slice())), 
                            (0, s.writeBuffer)(r, c, void 0, e)), t.undoValue !== t._valueGet(!0) && (t.undoValue = t._valueGet(!0), 
                            n.trigger("change"));
                        }
                    },
                    mouseenterEvent: function() {
                        var e = this.inputmask, t = e.opts, i = this;
                        if (e.mouseEnter = !0, (i.inputmask.shadowRoot || i.ownerDocument).activeElement !== i) {
                            var n = (e.isRTL ? a.getBufferTemplate.call(e).slice().reverse() : a.getBufferTemplate.call(e)).join("");
                            e.placeholder !== n && i.placeholder !== e.originalPlaceholder && (e.originalPlaceholder = i.placeholder), 
                            t.showMaskOnHover && (0, s.HandleNativePlaceholder)(i, n);
                        }
                    },
                    submitEvent: function() {
                        var e = this.inputmask, t = e.opts;
                        e.undoValue !== e._valueGet(!0) && e.$el.trigger("change"), -1 === a.getLastValidPosition.call(e) && e._valueGet && e._valueGet() === a.getBufferTemplate.call(e).join("") && e._valueSet(""), 
                        t.clearIncomplete && !1 === o.isComplete.call(e, a.getBuffer.call(e)) && e._valueSet(""), 
                        t.removeMaskOnSubmit && (e._valueSet(e.unmaskedvalue(), !0), setTimeout(function() {
                            (0, s.writeBuffer)(e.el, a.getBuffer.call(e));
                        }, 0));
                    },
                    resetEvent: function() {
                        var e = this.inputmask;
                        e.refreshValue = !0, setTimeout(function() {
                            (0, s.applyInputValue)(e.el, e._valueGet(!0));
                        }, 0);
                    }
                };
                t.EventHandlers = f;
            },
            9716: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.EventRuler = void 0;
                var a, n = (a = i(2394)) && a.__esModule ? a : {
                    default: a
                }, r = i(2839), o = i(8711), s = i(7760), l = {
                    on: function(e, t, i) {
                        var a = e.inputmask.dependencyLib, l = function(t) {
                            t.originalEvent && (t = t.originalEvent || t, arguments[0] = t);
                            var l, c = this, u = c.inputmask, f = u ? u.opts : void 0;
                            if (void 0 === u && "FORM" !== this.nodeName) {
                                var p = a.data(c, "_inputmask_opts");
                                a(c).off(), p && new n.default(p).mask(c);
                            } else {
                                if ([ "submit", "reset", "setvalue" ].includes(t.type) || "FORM" === this.nodeName || !(c.disabled || c.readOnly && !("keydown" === t.type && t.ctrlKey && t.key === r.keys.c || !1 === f.tabThrough && t.key === r.keys.Tab))) {
                                    switch (t.type) {
                                      case "input":
                                        if (!0 === u.skipInputEvent || t.inputType && "insertCompositionText" === t.inputType) return u.skipInputEvent = !1, 
                                        t.preventDefault();
                                        break;

                                      case "keyup":
                                      case "compositionend":
                                        u.isComposing && (u.skipInputEvent = !1);
                                        break;

                                      case "click":
                                      case "focus":
                                        return u.validationEvent ? (u.validationEvent = !1, e.blur(), (0, s.HandleNativePlaceholder)(e, (u.isRTL ? o.getBufferTemplate.call(u).slice().reverse() : o.getBufferTemplate.call(u)).join("")), 
                                        setTimeout(function() {
                                            e.focus();
                                        }, f.validationEventTimeOut), !1) : (l = arguments, void setTimeout(function() {
                                            e.inputmask && i.apply(c, l);
                                        }, 0));
                                    }
                                    var d = i.apply(c, arguments);
                                    return !1 === d && (t.preventDefault(), t.stopPropagation()), d;
                                }
                                t.preventDefault();
                            }
                        };
                        [ "submit", "reset" ].includes(t) ? (l = l.bind(e), null !== e.form && a(e.form).on(t, l)) : a(e).on(t, l), 
                        e.inputmask.events[t] = e.inputmask.events[t] || [], e.inputmask.events[t].push(l);
                    },
                    off: function(e, t) {
                        if (e.inputmask && e.inputmask.events) {
                            var i = e.inputmask.dependencyLib, a = e.inputmask.events;
                            for (var n in t && ((a = [])[t] = e.inputmask.events[t]), a) {
                                for (var r = a[n]; 0 < r.length; ) {
                                    var o = r.pop();
                                    [ "submit", "reset" ].includes(n) ? null !== e.form && i(e.form).off(n, o) : i(e).off(n, o);
                                }
                                delete e.inputmask.events[n];
                            }
                        }
                    }
                };
                t.EventRuler = l;
            },
            219: function(e, t, i) {
                var a = p(i(2394)), n = i(2839), r = p(i(7184)), o = i(8711), s = i(4713);
                function l(e) {
                    return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    })(e);
                }
                function u(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var i = 0, a = new Array(t); i < t; i++) a[i] = e[i];
                    return a;
                }
                function f(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var a = t[i];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                        Object.defineProperty(e, a.key, a);
                    }
                }
                function p(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var d = a.default.dependencyLib, h = function() {
                    function e(t, i, a) {
                        !function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                        }(this, e), this.mask = t, this.format = i, this.opts = a, this._date = new Date(1, 0, 1), 
                        this.initDateObject(t, this.opts);
                    }
                    var t;
                    return f((t = e).prototype, [ {
                        key: "date",
                        get: function() {
                            return void 0 === this._date && (this._date = new Date(1, 0, 1), this.initDateObject(void 0, this.opts)), 
                            this._date;
                        }
                    }, {
                        key: "initDateObject",
                        value: function(e, t) {
                            var i;
                            for (P(t).lastIndex = 0; i = P(t).exec(this.format); ) {
                                var a = new RegExp("\\d+$").exec(i[0]), n = a ? i[0][0] + "x" : i[0], r = void 0;
                                if (void 0 !== e) {
                                    if (a) {
                                        var o = P(t).lastIndex, s = E(i.index, t);
                                        P(t).lastIndex = o, r = e.slice(0, e.indexOf(s.nextMatch[0]));
                                    } else r = e.slice(0, g[n] && g[n][4] || n.length);
                                    e = e.slice(r.length);
                                }
                                Object.prototype.hasOwnProperty.call(g, n) && this.setValue(this, r, n, g[n][2], g[n][1]);
                            }
                        }
                    }, {
                        key: "setValue",
                        value: function(e, t, i, a, n) {
                            if (void 0 !== t && (e[a] = "ampm" === a ? t : t.replace(/[^0-9]/g, "0"), e["raw" + a] = t.replace(/\s/g, "_")), 
                            void 0 !== n) {
                                var r = e[a];
                                ("day" === a && 29 === parseInt(r) || "month" === a && 2 === parseInt(r)) && (29 !== parseInt(e.day) || 2 !== parseInt(e.month) || "" !== e.year && void 0 !== e.year || e._date.setFullYear(2012, 1, 29)), 
                                "day" === a && (v = !0, 0 === parseInt(r) && (r = 1)), "month" === a && (v = !0), 
                                "year" === a && (v = !0, r.length < 4 && (r = M(r, 4, !0))), "" === r || isNaN(r) || n.call(e._date, r), 
                                "ampm" === a && n.call(e._date, r);
                            }
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            this._date = new Date(1, 0, 1);
                        }
                    }, {
                        key: "reInit",
                        value: function() {
                            this._date = void 0, this.date;
                        }
                    } ]), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e;
                }(), m = new Date().getFullYear(), v = !1, g = {
                    d: [ "[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate ],
                    dd: [ "0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function() {
                        return M(Date.prototype.getDate.call(this), 2);
                    } ],
                    ddd: [ "" ],
                    dddd: [ "" ],
                    m: [ "[1-9]|1[012]", function(e) {
                        var t = e ? parseInt(e) : 0;
                        return 0 < t && t--, Date.prototype.setMonth.call(this, t);
                    }, "month", function() {
                        return Date.prototype.getMonth.call(this) + 1;
                    } ],
                    mm: [ "0[1-9]|1[012]", function(e) {
                        var t = e ? parseInt(e) : 0;
                        return 0 < t && t--, Date.prototype.setMonth.call(this, t);
                    }, "month", function() {
                        return M(Date.prototype.getMonth.call(this) + 1, 2);
                    } ],
                    mmm: [ "" ],
                    mmmm: [ "" ],
                    yy: [ "[0-9]{2}", Date.prototype.setFullYear, "year", function() {
                        return M(Date.prototype.getFullYear.call(this), 2);
                    } ],
                    yyyy: [ "[0-9]{4}", Date.prototype.setFullYear, "year", function() {
                        return M(Date.prototype.getFullYear.call(this), 4);
                    } ],
                    h: [ "[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
                    hh: [ "0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function() {
                        return M(Date.prototype.getHours.call(this), 2);
                    } ],
                    hx: [ function(e) {
                        return "[0-9]{".concat(e, "}");
                    }, Date.prototype.setHours, "hours", function(e) {
                        return Date.prototype.getHours;
                    } ],
                    H: [ "1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
                    HH: [ "0[0-9]|1[0-9]|2[0-3]", Date.prototype.setHours, "hours", function() {
                        return M(Date.prototype.getHours.call(this), 2);
                    } ],
                    Hx: [ function(e) {
                        return "[0-9]{".concat(e, "}");
                    }, Date.prototype.setHours, "hours", function(e) {
                        return function() {
                            return M(Date.prototype.getHours.call(this), e);
                        };
                    } ],
                    M: [ "[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes ],
                    MM: [ "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setMinutes, "minutes", function() {
                        return M(Date.prototype.getMinutes.call(this), 2);
                    } ],
                    s: [ "[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds ],
                    ss: [ "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setSeconds, "seconds", function() {
                        return M(Date.prototype.getSeconds.call(this), 2);
                    } ],
                    l: [ "[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function() {
                        return M(Date.prototype.getMilliseconds.call(this), 3);
                    }, 3 ],
                    L: [ "[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function() {
                        return M(Date.prototype.getMilliseconds.call(this), 2);
                    }, 2 ],
                    t: [ "[ap]", y, "ampm", b, 1 ],
                    tt: [ "[ap]m", y, "ampm", b, 2 ],
                    T: [ "[AP]", y, "ampm", b, 1 ],
                    TT: [ "[AP]M", y, "ampm", b, 2 ],
                    Z: [ ".*", void 0, "Z", function() {
                        var e = this.toString().match(/\((.+)\)/)[1];
                        return e.includes(" ") && (e = (e = e.replace("-", " ").toUpperCase()).split(" ").map(function(e) {
                            return function(e, t) {
                                return function(e) {
                                    if (Array.isArray(e)) return e;
                                }(e) || function(e, t) {
                                    var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                    if (null != i) {
                                        var a, n, r = [], o = !0, s = !1;
                                        try {
                                            for (i = i.call(e); !(o = (a = i.next()).done) && (r.push(a.value), !t || r.length !== t); o = !0) ;
                                        } catch (e) {
                                            s = !0, n = e;
                                        } finally {
                                            try {
                                                o || null == i.return || i.return();
                                            } finally {
                                                if (s) throw n;
                                            }
                                        }
                                        return r;
                                    }
                                }(e, t) || function(e, t) {
                                    if (e) {
                                        if ("string" == typeof e) return u(e, t);
                                        var i = Object.prototype.toString.call(e).slice(8, -1);
                                        return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? u(e, t) : void 0;
                                    }
                                }(e, t) || function() {
                                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                }();
                            }(e, 1)[0];
                        }).join("")), e;
                    } ],
                    o: [ "" ],
                    S: [ "" ]
                }, k = {
                    isoDate: "yyyy-mm-dd",
                    isoTime: "HH:MM:ss",
                    isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
                    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
                };
                function y(e) {
                    var t = this.getHours();
                    e.toLowerCase().includes("p") ? this.setHours(t + 12) : e.toLowerCase().includes("a") && 12 <= t && this.setHours(t - 12);
                }
                function b() {
                    var e = this.getHours();
                    return 12 <= (e = e || 12) ? "PM" : "AM";
                }
                function x(e) {
                    var t = new RegExp("\\d+$").exec(e[0]);
                    if (t && void 0 !== t[0]) {
                        var i = g[e[0][0] + "x"].slice("");
                        return i[0] = i[0](t[0]), i[3] = i[3](t[0]), i;
                    }
                    if (g[e[0]]) return g[e[0]];
                }
                function P(e) {
                    if (!e.tokenizer) {
                        var t = [], i = [];
                        for (var a in g) if (/\.*x$/.test(a)) {
                            var n = a[0] + "\\d+";
                            -1 === i.indexOf(n) && i.push(n);
                        } else -1 === t.indexOf(a[0]) && t.push(a[0]);
                        e.tokenizer = "(" + (0 < i.length ? i.join("|") + "|" : "") + t.join("+|") + ")+?|.", 
                        e.tokenizer = new RegExp(e.tokenizer, "g");
                    }
                    return e.tokenizer;
                }
                function w(e, t, i) {
                    if (!v) return !0;
                    if (void 0 === e.rawday || !isFinite(e.rawday) && new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day || "29" == e.day && (!isFinite(e.rawyear) || void 0 === e.rawyear || "" === e.rawyear) || new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day) return t;
                    if ("29" == e.day) {
                        var a = E(t.pos, i);
                        if ("yyyy" === a.targetMatch[0] && t.pos - a.targetMatchIndex == 2) return t.remove = t.pos + 1, 
                        t;
                    } else if ("02" == e.month && "30" == e.day && void 0 !== t.c) return e.day = "03", 
                    e.date.setDate(3), e.date.setMonth(1), t.insert = [ {
                        pos: t.pos,
                        c: "0"
                    }, {
                        pos: t.pos + 1,
                        c: t.c
                    } ], t.caret = o.seekNext.call(this, t.pos + 1), t;
                    return !1;
                }
                function S(e, t, i, a) {
                    var n, o, s = "";
                    for (P(i).lastIndex = 0; n = P(i).exec(e); ) if (void 0 === t) if (o = x(n)) s += "(" + o[0] + ")"; else switch (n[0]) {
                      case "[":
                        s += "(";
                        break;

                      case "]":
                        s += ")?";
                        break;

                      default:
                        s += (0, r.default)(n[0]);
                    } else (o = x(n)) ? !0 !== a && o[3] ? s += o[3].call(t.date) : o[2] ? s += t["raw" + o[2]] : s += n[0] : s += n[0];
                    return s;
                }
                function M(e, t, i) {
                    for (e = String(e), t = t || 2; e.length < t; ) e = i ? e + "0" : "0" + e;
                    return e;
                }
                function _(e, t, i) {
                    return "string" == typeof e ? new h(e, t, i) : e && "object" === l(e) && Object.prototype.hasOwnProperty.call(e, "date") ? e : void 0;
                }
                function O(e, t) {
                    return S(t.inputFormat, {
                        date: e
                    }, t);
                }
                function E(e, t) {
                    var i, a, n = 0, r = 0;
                    for (P(t).lastIndex = 0; a = P(t).exec(t.inputFormat); ) {
                        var o = new RegExp("\\d+$").exec(a[0]);
                        if ((n += r = o ? parseInt(o[0]) : a[0].length) >= e + 1) {
                            i = a, a = P(t).exec(t.inputFormat);
                            break;
                        }
                    }
                    return {
                        targetMatchIndex: n - r,
                        nextMatch: a,
                        targetMatch: i
                    };
                }
                a.default.extendAliases({
                    datetime: {
                        mask: function(e) {
                            return e.numericInput = !1, g.S = e.i18n.ordinalSuffix.join("|"), e.inputFormat = k[e.inputFormat] || e.inputFormat, 
                            e.displayFormat = k[e.displayFormat] || e.displayFormat || e.inputFormat, e.outputFormat = k[e.outputFormat] || e.outputFormat || e.inputFormat, 
                            e.placeholder = "" !== e.placeholder ? e.placeholder : e.inputFormat.replace(/[[\]]/, ""), 
                            e.regex = S(e.inputFormat, void 0, e), e.min = _(e.min, e.inputFormat, e), e.max = _(e.max, e.inputFormat, e), 
                            null;
                        },
                        placeholder: "",
                        inputFormat: "isoDateTime",
                        displayFormat: null,
                        outputFormat: null,
                        min: null,
                        max: null,
                        skipOptionalPartCharacter: "",
                        i18n: {
                            dayNames: [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ],
                            monthNames: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
                            ordinalSuffix: [ "st", "nd", "rd", "th" ]
                        },
                        preValidation: function(e, t, i, a, n, r, o, s) {
                            if (s) return !0;
                            if (isNaN(i) && e[t] !== i) {
                                var l = E(t, n);
                                if (l.nextMatch && l.nextMatch[0] === i && 1 < l.targetMatch[0].length) {
                                    var c = g[l.targetMatch[0]][0];
                                    if (new RegExp(c).test("0" + e[t - 1])) return e[t] = e[t - 1], e[t - 1] = "0", 
                                    {
                                        fuzzy: !0,
                                        buffer: e,
                                        refreshFromBuffer: {
                                            start: t - 1,
                                            end: t + 1
                                        },
                                        pos: t + 1
                                    };
                                }
                            }
                            return !0;
                        },
                        postValidation: function(e, t, i, a, n, r, o, l) {
                            var c, u;
                            if (o) return !0;
                            if (!1 === a && (((c = E(t + 1, n)).targetMatch && c.targetMatchIndex === t && 1 < c.targetMatch[0].length && void 0 !== g[c.targetMatch[0]] || (c = E(t + 2, n)).targetMatch && c.targetMatchIndex === t + 1 && 1 < c.targetMatch[0].length && void 0 !== g[c.targetMatch[0]]) && (u = g[c.targetMatch[0]][0]), 
                            void 0 !== u && (void 0 !== r.validPositions[t + 1] && new RegExp(u).test(i + "0") ? (e[t] = i, 
                            e[t + 1] = "0", a = {
                                pos: t + 2,
                                caret: t
                            }) : new RegExp(u).test("0" + i) && (e[t] = "0", e[t + 1] = i, a = {
                                pos: t + 2
                            })), !1 === a)) return a;
                            if (a.fuzzy && (e = a.buffer, t = a.pos), (c = E(t, n)).targetMatch && c.targetMatch[0] && void 0 !== g[c.targetMatch[0]]) {
                                var f = g[c.targetMatch[0]];
                                u = f[0];
                                var p = e.slice(c.targetMatchIndex, c.targetMatchIndex + c.targetMatch[0].length);
                                if (!1 === new RegExp(u).test(p.join("")) && 2 === c.targetMatch[0].length && r.validPositions[c.targetMatchIndex] && r.validPositions[c.targetMatchIndex + 1] && (r.validPositions[c.targetMatchIndex + 1].input = "0"), 
                                "year" == f[2]) for (var d = s.getMaskTemplate.call(this, !1, 1, void 0, !0), h = t + 1; h < e.length; h++) e[h] = d[h], 
                                delete r.validPositions[h];
                            }
                            var v = a, k = _(e.join(""), n.inputFormat, n);
                            return v && !isNaN(k.date.getTime()) && (n.prefillYear && (v = function(e, t, i) {
                                if (e.year !== e.rawyear) {
                                    var a = m.toString(), n = e.rawyear.replace(/[^0-9]/g, ""), r = a.slice(0, n.length), o = a.slice(n.length);
                                    if (2 === n.length && n === r) {
                                        var s = new Date(m, e.month - 1, e.day);
                                        e.day == s.getDate() && (!i.max || i.max.date.getTime() >= s.getTime()) && (e.date.setFullYear(m), 
                                        e.year = a, t.insert = [ {
                                            pos: t.pos + 1,
                                            c: o[0]
                                        }, {
                                            pos: t.pos + 2,
                                            c: o[1]
                                        } ]);
                                    }
                                }
                                return t;
                            }(k, v, n)), v = function(e, t, i, a, n) {
                                if (!t) return t;
                                if (t && i.min && !isNaN(i.min.date.getTime())) {
                                    var r;
                                    for (e.reset(), P(i).lastIndex = 0; r = P(i).exec(i.inputFormat); ) {
                                        var o;
                                        if ((o = x(r)) && o[3]) {
                                            for (var s = o[1], l = e[o[2]], c = i.min[o[2]], u = i.max ? i.max[o[2]] : c, f = [], p = !1, d = 0; d < c.length; d++) void 0 !== a.validPositions[d + r.index] || p ? (f[d] = l[d], 
                                            p = p || l[d] > c[d]) : (f[d] = c[d], "year" === o[2] && l.length - 1 == d && c != u && (f = (parseInt(f.join("")) + 1).toString().split("")), 
                                            "ampm" === o[2] && c != u && i.min.date.getTime() > e.date.getTime() && (f[d] = u[d]));
                                            s.call(e._date, f.join(""));
                                        }
                                    }
                                    t = i.min.date.getTime() <= e.date.getTime(), e.reInit();
                                }
                                return t && i.max && (isNaN(i.max.date.getTime()) || (t = i.max.date.getTime() >= e.date.getTime())), 
                                t;
                            }(k, v = w.call(this, k, v, n), n, r)), void 0 !== t && v && a.pos !== t ? {
                                buffer: S(n.inputFormat, k, n).split(""),
                                refreshFromBuffer: {
                                    start: t,
                                    end: a.pos
                                },
                                pos: a.caret || a.pos
                            } : v;
                        },
                        onKeyDown: function(e, t, i, a) {
                            e.ctrlKey && e.key === n.keys.Right && (this.inputmask._valueSet(O(new Date(), a)), 
                            d(this).trigger("setvalue"));
                        },
                        onUnMask: function(e, t, i) {
                            return t ? S(i.outputFormat, _(e, i.inputFormat, i), i, !0) : t;
                        },
                        casing: function(e, t, i, a) {
                            return 0 == t.nativeDef.indexOf("[ap]") ? e.toLowerCase() : 0 == t.nativeDef.indexOf("[AP]") ? e.toUpperCase() : e;
                        },
                        onBeforeMask: function(e, t) {
                            return "[object Date]" === Object.prototype.toString.call(e) && (e = O(e, t)), e;
                        },
                        insertMode: !1,
                        shiftPositions: !1,
                        keepStatic: !1,
                        inputmode: "numeric",
                        prefillYear: !0
                    }
                });
            },
            3851: function(e, t, i) {
                var a, n = (a = i(2394)) && a.__esModule ? a : {
                    default: a
                }, r = i(8711), o = i(4713);
                n.default.extendDefinitions({
                    A: {
                        validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                        casing: "upper"
                    },
                    "&": {
                        validator: "[0-9A-Za-zА-яЁёÀ-ÿµ]",
                        casing: "upper"
                    },
                    "#": {
                        validator: "[0-9A-Fa-f]",
                        casing: "upper"
                    }
                });
                var s = new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");
                function l(e, t, i, a, n) {
                    return -1 < i - 1 && "." !== t.buffer[i - 1] ? (e = t.buffer[i - 1] + e, e = -1 < i - 2 && "." !== t.buffer[i - 2] ? t.buffer[i - 2] + e : "0" + e) : e = "00" + e, 
                    s.test(e);
                }
                n.default.extendAliases({
                    cssunit: {
                        regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
                    },
                    url: {
                        regex: "(https?|ftp)://.*",
                        autoUnmask: !1,
                        keepStatic: !1,
                        tabThrough: !0
                    },
                    ip: {
                        mask: "i{1,3}.j{1,3}.k{1,3}.l{1,3}",
                        definitions: {
                            i: {
                                validator: l
                            },
                            j: {
                                validator: l
                            },
                            k: {
                                validator: l
                            },
                            l: {
                                validator: l
                            }
                        },
                        onUnMask: function(e, t, i) {
                            return e;
                        },
                        inputmode: "decimal",
                        substitutes: {
                            ",": "."
                        }
                    },
                    email: {
                        mask: function(e) {
                            var t = "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]", i = t;
                            if (e.separator) for (var a = 0; a < e.quantifier; a++) i += "[".concat(e.separator).concat(t, "]");
                            return i;
                        },
                        greedy: !1,
                        casing: "lower",
                        separator: null,
                        quantifier: 5,
                        skipOptionalPartCharacter: "",
                        onBeforePaste: function(e, t) {
                            return (e = e.toLowerCase()).replace("mailto:", "");
                        },
                        definitions: {
                            "*": {
                                validator: "[0-9１-９A-Za-zА-яЁёÀ-ÿµ!#$%&'*+/=?^_`{|}~-]"
                            },
                            "-": {
                                validator: "[0-9A-Za-z-]"
                            }
                        },
                        onUnMask: function(e, t, i) {
                            return e;
                        },
                        inputmode: "email"
                    },
                    mac: {
                        mask: "##:##:##:##:##:##"
                    },
                    vin: {
                        mask: "V{13}9{4}",
                        definitions: {
                            V: {
                                validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                                casing: "upper"
                            }
                        },
                        clearIncomplete: !0,
                        autoUnmask: !0
                    },
                    ssn: {
                        mask: "999-99-9999",
                        postValidation: function(e, t, i, a, n, s, l) {
                            var c = o.getMaskTemplate.call(this, !0, r.getLastValidPosition.call(this), !0, !0);
                            return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(c.join(""));
                        }
                    }
                });
            },
            207: function(e, t, i) {
                var a = s(i(2394)), n = s(i(7184)), r = i(8711), o = i(2839);
                function s(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var l = a.default.dependencyLib;
                function c(e, t) {
                    for (var i = "", n = 0; n < e.length; n++) a.default.prototype.definitions[e.charAt(n)] || t.definitions[e.charAt(n)] || t.optionalmarker[0] === e.charAt(n) || t.optionalmarker[1] === e.charAt(n) || t.quantifiermarker[0] === e.charAt(n) || t.quantifiermarker[1] === e.charAt(n) || t.groupmarker[0] === e.charAt(n) || t.groupmarker[1] === e.charAt(n) || t.alternatormarker === e.charAt(n) ? i += "\\" + e.charAt(n) : i += e.charAt(n);
                    return i;
                }
                function u(e, t, i, a) {
                    if (0 < e.length && 0 < t && (!i.digitsOptional || a)) {
                        var n = e.indexOf(i.radixPoint), r = !1;
                        i.negationSymbol.back === e[e.length - 1] && (r = !0, e.length--), -1 === n && (e.push(i.radixPoint), 
                        n = e.length - 1);
                        for (var o = 1; o <= t; o++) isFinite(e[n + o]) || (e[n + o] = "0");
                    }
                    return r && e.push(i.negationSymbol.back), e;
                }
                function f(e, t) {
                    var i = 0;
                    for (var a in "+" === e && (i = r.seekNext.call(this, t.validPositions.length - 1)), 
                    t.tests) if ((a = parseInt(a)) >= i) for (var n = 0, o = t.tests[a].length; n < o; n++) if ((void 0 === t.validPositions[a] || "-" === e) && t.tests[a][n].match.def === e) return a + (void 0 !== t.validPositions[a] && "-" !== e ? 1 : 0);
                    return i;
                }
                function p(e, t) {
                    for (var i = -1, a = 0, n = t.validPositions.length; a < n; a++) {
                        var r = t.validPositions[a];
                        if (r && r.match.def === e) {
                            i = a;
                            break;
                        }
                    }
                    return i;
                }
                function d(e, t, i, a, n) {
                    var r = t.buffer ? t.buffer.indexOf(n.radixPoint) : -1, o = (-1 !== r || a && n.jitMasking) && new RegExp(n.definitions[9].validator).test(e);
                    return n._radixDance && -1 !== r && o && null == t.validPositions[r] ? {
                        insert: {
                            pos: r === i ? r + 1 : r,
                            c: n.radixPoint
                        },
                        pos: i
                    } : o;
                }
                a.default.extendAliases({
                    numeric: {
                        mask: function(e) {
                            e.repeat = 0, e.groupSeparator === e.radixPoint && e.digits && "0" !== e.digits && ("." === e.radixPoint ? e.groupSeparator = "," : "," === e.radixPoint ? e.groupSeparator = "." : e.groupSeparator = ""), 
                            " " === e.groupSeparator && (e.skipOptionalPartCharacter = void 0), 1 < e.placeholder.length && (e.placeholder = e.placeholder.charAt(0)), 
                            "radixFocus" === e.positionCaretOnClick && "" === e.placeholder && (e.positionCaretOnClick = "lvp");
                            var t = "0", i = e.radixPoint;
                            !0 === e.numericInput && void 0 === e.__financeInput ? (t = "1", e.positionCaretOnClick = "radixFocus" === e.positionCaretOnClick ? "lvp" : e.positionCaretOnClick, 
                            e.digitsOptional = !1, isNaN(e.digits) && (e.digits = 2), e._radixDance = !1, i = "," === e.radixPoint ? "?" : "!", 
                            "" !== e.radixPoint && void 0 === e.definitions[i] && (e.definitions[i] = {}, e.definitions[i].validator = "[" + e.radixPoint + "]", 
                            e.definitions[i].placeholder = e.radixPoint, e.definitions[i].static = !0, e.definitions[i].generated = !0)) : (e.__financeInput = !1, 
                            e.numericInput = !0);
                            var a, r = "[+]";
                            if (r += c(e.prefix, e), "" !== e.groupSeparator ? (void 0 === e.definitions[e.groupSeparator] && (e.definitions[e.groupSeparator] = {}, 
                            e.definitions[e.groupSeparator].validator = "[" + e.groupSeparator + "]", e.definitions[e.groupSeparator].placeholder = e.groupSeparator, 
                            e.definitions[e.groupSeparator].static = !0, e.definitions[e.groupSeparator].generated = !0), 
                            r += e._mask(e)) : r += "9{+}", void 0 !== e.digits && 0 !== e.digits) {
                                var o = e.digits.toString().split(",");
                                isFinite(o[0]) && o[1] && isFinite(o[1]) ? r += i + t + "{" + e.digits + "}" : (isNaN(e.digits) || 0 < parseInt(e.digits)) && (e.digitsOptional || e.jitMasking ? (a = r + i + t + "{0," + e.digits + "}", 
                                e.keepStatic = !0) : r += i + t + "{" + e.digits + "}");
                            } else e.inputmode = "numeric";
                            return r += c(e.suffix, e), r += "[-]", a && (r = [ a + c(e.suffix, e) + "[-]", r ]), 
                            e.greedy = !1, function(e) {
                                void 0 === e.parseMinMaxOptions && (null !== e.min && (e.min = e.min.toString().replace(new RegExp((0, 
                                n.default)(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.min = e.min.replace(e.radixPoint, ".")), 
                                e.min = isFinite(e.min) ? parseFloat(e.min) : NaN, isNaN(e.min) && (e.min = Number.MIN_VALUE)), 
                                null !== e.max && (e.max = e.max.toString().replace(new RegExp((0, n.default)(e.groupSeparator), "g"), ""), 
                                "," === e.radixPoint && (e.max = e.max.replace(e.radixPoint, ".")), e.max = isFinite(e.max) ? parseFloat(e.max) : NaN, 
                                isNaN(e.max) && (e.max = Number.MAX_VALUE)), e.parseMinMaxOptions = "done");
                            }(e), "" !== e.radixPoint && e.substituteRadixPoint && (e.substitutes["." == e.radixPoint ? "," : "."] = e.radixPoint), 
                            r;
                        },
                        _mask: function(e) {
                            return "(" + e.groupSeparator + "999){+|1}";
                        },
                        digits: "*",
                        digitsOptional: !0,
                        enforceDigitsOnBlur: !1,
                        radixPoint: ".",
                        positionCaretOnClick: "radixFocus",
                        _radixDance: !0,
                        groupSeparator: "",
                        allowMinus: !0,
                        negationSymbol: {
                            front: "-",
                            back: ""
                        },
                        prefix: "",
                        suffix: "",
                        min: null,
                        max: null,
                        SetMaxOnOverflow: !1,
                        step: 1,
                        inputType: "text",
                        unmaskAsNumber: !1,
                        roundingFN: Math.round,
                        inputmode: "decimal",
                        shortcuts: {
                            k: "1000",
                            m: "1000000"
                        },
                        placeholder: "0",
                        greedy: !1,
                        rightAlign: !0,
                        insertMode: !0,
                        autoUnmask: !1,
                        skipOptionalPartCharacter: "",
                        usePrototypeDefinitions: !1,
                        stripLeadingZeroes: !0,
                        substituteRadixPoint: !0,
                        definitions: {
                            0: {
                                validator: d
                            },
                            1: {
                                validator: d,
                                definitionSymbol: "9"
                            },
                            9: {
                                validator: "[0-9０-９٠-٩۰-۹]",
                                definitionSymbol: "*"
                            },
                            "+": {
                                validator: function(e, t, i, a, n) {
                                    return n.allowMinus && ("-" === e || e === n.negationSymbol.front);
                                }
                            },
                            "-": {
                                validator: function(e, t, i, a, n) {
                                    return n.allowMinus && e === n.negationSymbol.back;
                                }
                            }
                        },
                        preValidation: function(e, t, i, a, n, r, o, s) {
                            if (!1 !== n.__financeInput && i === n.radixPoint) return !1;
                            var l = e.indexOf(n.radixPoint), c = t;
                            if (t = function(e, t, i, a, n) {
                                return n._radixDance && n.numericInput && t !== n.negationSymbol.back && e <= i && (0 < i || t == n.radixPoint) && (void 0 === a.validPositions[e - 1] || a.validPositions[e - 1].input !== n.negationSymbol.back) && (e -= 1), 
                                e;
                            }(t, i, l, r, n), "-" === i || i === n.negationSymbol.front) {
                                if (!0 !== n.allowMinus) return !1;
                                var u = !1, d = p("+", r), h = p("-", r);
                                return -1 !== d && (u = [ d, h ]), !1 !== u ? {
                                    remove: u,
                                    caret: c - n.negationSymbol.back.length
                                } : {
                                    insert: [ {
                                        pos: f.call(this, "+", r),
                                        c: n.negationSymbol.front,
                                        fromIsValid: !0
                                    }, {
                                        pos: f.call(this, "-", r),
                                        c: n.negationSymbol.back,
                                        fromIsValid: void 0
                                    } ],
                                    caret: c + n.negationSymbol.back.length
                                };
                            }
                            if (i === n.groupSeparator) return {
                                caret: c
                            };
                            if (s) return !0;
                            if (-1 !== l && !0 === n._radixDance && !1 === a && i === n.radixPoint && void 0 !== n.digits && (isNaN(n.digits) || 0 < parseInt(n.digits)) && l !== t) return {
                                caret: n._radixDance && t === l - 1 ? l + 1 : l
                            };
                            if (!1 === n.__financeInput) if (a) {
                                if (n.digitsOptional) return {
                                    rewritePosition: o.end
                                };
                                if (!n.digitsOptional) {
                                    if (o.begin > l && o.end <= l) return i === n.radixPoint ? {
                                        insert: {
                                            pos: l + 1,
                                            c: "0",
                                            fromIsValid: !0
                                        },
                                        rewritePosition: l
                                    } : {
                                        rewritePosition: l + 1
                                    };
                                    if (o.begin < l) return {
                                        rewritePosition: o.begin - 1
                                    };
                                }
                            } else if (!n.showMaskOnHover && !n.showMaskOnFocus && !n.digitsOptional && 0 < n.digits && "" === this.__valueGet.call(this.el)) return {
                                rewritePosition: l
                            };
                            return {
                                rewritePosition: t
                            };
                        },
                        postValidation: function(e, t, i, a, n, r, o) {
                            if (!1 === a) return a;
                            if (o) return !0;
                            if (null !== n.min || null !== n.max) {
                                var s = n.onUnMask(e.slice().reverse().join(""), void 0, l.extend({}, n, {
                                    unmaskAsNumber: !0
                                }));
                                if (null !== n.min && s < n.min && (s.toString().length > n.min.toString().length || s < 0)) return !1;
                                if (null !== n.max && s > n.max) return !!n.SetMaxOnOverflow && {
                                    refreshFromBuffer: !0,
                                    buffer: u(n.max.toString().replace(".", n.radixPoint).split(""), n.digits, n).reverse()
                                };
                            }
                            return a;
                        },
                        onUnMask: function(e, t, i) {
                            if ("" === t && !0 === i.nullable) return t;
                            var a = e.replace(i.prefix, "");
                            return a = (a = a.replace(i.suffix, "")).replace(new RegExp((0, n.default)(i.groupSeparator), "g"), ""), 
                            "" !== i.placeholder.charAt(0) && (a = a.replace(new RegExp(i.placeholder.charAt(0), "g"), "0")), 
                            i.unmaskAsNumber ? ("" !== i.radixPoint && -1 !== a.indexOf(i.radixPoint) && (a = a.replace(n.default.call(this, i.radixPoint), ".")), 
                            a = (a = a.replace(new RegExp("^" + (0, n.default)(i.negationSymbol.front)), "-")).replace(new RegExp((0, 
                            n.default)(i.negationSymbol.back) + "$"), ""), Number(a)) : a;
                        },
                        isComplete: function(e, t) {
                            var i = (t.numericInput ? e.slice().reverse() : e).join("");
                            return i = (i = (i = (i = (i = i.replace(new RegExp("^" + (0, n.default)(t.negationSymbol.front)), "-")).replace(new RegExp((0, 
                            n.default)(t.negationSymbol.back) + "$"), "")).replace(t.prefix, "")).replace(t.suffix, "")).replace(new RegExp((0, 
                            n.default)(t.groupSeparator) + "([0-9]{3})", "g"), "$1"), "," === t.radixPoint && (i = i.replace((0, 
                            n.default)(t.radixPoint), ".")), isFinite(i);
                        },
                        onBeforeMask: function(e, t) {
                            var i = t.radixPoint || ",";
                            isFinite(t.digits) && (t.digits = parseInt(t.digits)), "number" != typeof e && "number" !== t.inputType || "" === i || (e = e.toString().replace(".", i));
                            var a = "-" === e.charAt(0) || e.charAt(0) === t.negationSymbol.front, r = e.split(i), o = r[0].replace(/[^\-0-9]/g, ""), s = 1 < r.length ? r[1].replace(/[^0-9]/g, "") : "", l = 1 < r.length;
                            e = o + ("" !== s ? i + s : s);
                            var c = 0;
                            if ("" !== i && (c = t.digitsOptional ? t.digits < s.length ? t.digits : s.length : t.digits, 
                            "" !== s || !t.digitsOptional)) {
                                var f = Math.pow(10, c || 1);
                                e = e.replace((0, n.default)(i), "."), isNaN(parseFloat(e)) || (e = (t.roundingFN(parseFloat(e) * f) / f).toFixed(c)), 
                                e = e.toString().replace(".", i);
                            }
                            if (0 === t.digits && -1 !== e.indexOf(i) && (e = e.substring(0, e.indexOf(i))), 
                            null !== t.min || null !== t.max) {
                                var p = e.toString().replace(i, ".");
                                null !== t.min && p < t.min ? e = t.min.toString().replace(".", i) : null !== t.max && p > t.max && (e = t.max.toString().replace(".", i));
                            }
                            return a && "-" !== e.charAt(0) && (e = "-" + e), u(e.toString().split(""), c, t, l).join("");
                        },
                        onBeforeWrite: function(e, t, i, a) {
                            function r(e, t) {
                                if (!1 !== a.__financeInput || t) {
                                    var i = e.indexOf(a.radixPoint);
                                    -1 !== i && e.splice(i, 1);
                                }
                                if ("" !== a.groupSeparator) for (;-1 !== (i = e.indexOf(a.groupSeparator)); ) e.splice(i, 1);
                                return e;
                            }
                            var o, s;
                            if (a.stripLeadingZeroes && (s = function(e, t) {
                                var i = new RegExp("(^" + ("" !== t.negationSymbol.front ? (0, n.default)(t.negationSymbol.front) + "?" : "") + (0, 
                                n.default)(t.prefix) + ")(.*)(" + (0, n.default)(t.suffix) + ("" != t.negationSymbol.back ? (0, 
                                n.default)(t.negationSymbol.back) + "?" : "") + "$)").exec(e.slice().reverse().join("")), a = i ? i[2] : "", r = !1;
                                return a && (a = a.split(t.radixPoint.charAt(0))[0], r = new RegExp("^[0" + t.groupSeparator + "]*").exec(a)), 
                                !(!r || !(1 < r[0].length || 0 < r[0].length && r[0].length < a.length)) && r;
                            }(t, a))) for (var c = t.join("").lastIndexOf(s[0].split("").reverse().join("")) - (s[0] == s.input ? 0 : 1), f = s[0] == s.input ? 1 : 0, p = s[0].length - f; 0 < p; p--) delete this.maskset.validPositions[c + p], 
                            delete t[c + p];
                            if (e) switch (e.type) {
                              case "blur":
                              case "checkval":
                                if (null !== a.min) {
                                    var d = a.onUnMask(t.slice().reverse().join(""), void 0, l.extend({}, a, {
                                        unmaskAsNumber: !0
                                    }));
                                    if (null !== a.min && d < a.min) return {
                                        refreshFromBuffer: !0,
                                        buffer: u(a.min.toString().replace(".", a.radixPoint).split(""), a.digits, a).reverse()
                                    };
                                }
                                if (t[t.length - 1] === a.negationSymbol.front) {
                                    var h = new RegExp("(^" + ("" != a.negationSymbol.front ? (0, n.default)(a.negationSymbol.front) + "?" : "") + (0, 
                                    n.default)(a.prefix) + ")(.*)(" + (0, n.default)(a.suffix) + ("" != a.negationSymbol.back ? (0, 
                                    n.default)(a.negationSymbol.back) + "?" : "") + "$)").exec(r(t.slice(), !0).reverse().join(""));
                                    0 == (h ? h[2] : "") && (o = {
                                        refreshFromBuffer: !0,
                                        buffer: [ 0 ]
                                    });
                                } else "" !== a.radixPoint && t.indexOf(a.radixPoint) === a.suffix.length && (o && o.buffer ? o.buffer.splice(0, 1 + a.suffix.length) : (t.splice(0, 1 + a.suffix.length), 
                                o = {
                                    refreshFromBuffer: !0,
                                    buffer: r(t)
                                }));
                                if (a.enforceDigitsOnBlur) {
                                    var m = (o = o || {}) && o.buffer || t.slice().reverse();
                                    o.refreshFromBuffer = !0, o.buffer = u(m, a.digits, a, !0).reverse();
                                }
                            }
                            return o;
                        },
                        onKeyDown: function(e, t, i, a) {
                            var n, r = l(this);
                            if (3 != e.location) {
                                var s, c = e.key;
                                if ((s = a.shortcuts && a.shortcuts[c]) && 1 < s.length) return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) * parseInt(s)), 
                                r.trigger("setvalue"), !1;
                            }
                            if (e.ctrlKey) switch (e.key) {
                              case o.keys.Up:
                                return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) + parseInt(a.step)), 
                                r.trigger("setvalue"), !1;

                              case o.keys.Down:
                                return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) - parseInt(a.step)), 
                                r.trigger("setvalue"), !1;
                            }
                            if (!e.shiftKey && (e.key === o.keys.Delete || e.key === o.keys.Backspace || e.key === o.keys.BACKSPACE_SAFARI) && i.begin !== t.length) {
                                if (t[e.key === o.keys.Delete ? i.begin - 1 : i.end] === a.negationSymbol.front) return n = t.slice().reverse(), 
                                "" !== a.negationSymbol.front && n.shift(), "" !== a.negationSymbol.back && n.pop(), 
                                r.trigger("setvalue", [ n.join(""), i.begin ]), !1;
                                if (!0 === a._radixDance) {
                                    var f = t.indexOf(a.radixPoint);
                                    if (a.digitsOptional) {
                                        if (0 === f) return (n = t.slice().reverse()).pop(), r.trigger("setvalue", [ n.join(""), i.begin >= n.length ? n.length : i.begin ]), 
                                        !1;
                                    } else if (-1 !== f && (i.begin < f || i.end < f || e.key === o.keys.Delete && (i.begin === f || i.begin - 1 === f))) {
                                        var p = void 0;
                                        return i.begin === i.end && (e.key === o.keys.Backspace || e.key === o.keys.BACKSPACE_SAFARI ? i.begin++ : e.key === o.keys.Delete && i.begin - 1 === f && (p = l.extend({}, i), 
                                        i.begin--, i.end--)), (n = t.slice().reverse()).splice(n.length - i.begin, i.begin - i.end + 1), 
                                        n = u(n, a.digits, a).join(""), p && (i = p), r.trigger("setvalue", [ n, i.begin >= n.length ? f + 1 : i.begin ]), 
                                        !1;
                                    }
                                }
                            }
                        }
                    },
                    currency: {
                        prefix: "",
                        groupSeparator: ",",
                        alias: "numeric",
                        digits: 2,
                        digitsOptional: !1
                    },
                    decimal: {
                        alias: "numeric"
                    },
                    integer: {
                        alias: "numeric",
                        inputmode: "numeric",
                        digits: 0
                    },
                    percentage: {
                        alias: "numeric",
                        min: 0,
                        max: 100,
                        suffix: " %",
                        digits: 0,
                        allowMinus: !1
                    },
                    indianns: {
                        alias: "numeric",
                        _mask: function(e) {
                            return "(" + e.groupSeparator + "99){*|1}(" + e.groupSeparator + "999){1|1}";
                        },
                        groupSeparator: ",",
                        radixPoint: ".",
                        placeholder: "0",
                        digits: 2,
                        digitsOptional: !1
                    }
                });
            },
            9380: function(e, t, i) {
                var a;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var n = ((a = i(8741)) && a.__esModule ? a : {
                    default: a
                }).default ? window : {};
                t.default = n;
            },
            7760: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.HandleNativePlaceholder = function(e, t) {
                    var i = e ? e.inputmask : this;
                    if (s.ie) {
                        if (e.inputmask._valueGet() !== t && (e.placeholder !== t || "" === e.placeholder)) {
                            var a = r.getBuffer.call(i).slice(), n = e.inputmask._valueGet();
                            if (n !== t) {
                                var o = r.getLastValidPosition.call(i);
                                -1 === o && n === r.getBufferTemplate.call(i).join("") ? a = [] : -1 !== o && u.call(i, a), 
                                p(e, a);
                            }
                        }
                    } else e.placeholder !== t && (e.placeholder = t, "" === e.placeholder && e.removeAttribute("placeholder"));
                }, t.applyInputValue = c, t.checkVal = f, t.clearOptionalTail = u, t.unmaskedvalue = function(e) {
                    var t = e ? e.inputmask : this, i = t.opts, a = t.maskset;
                    if (e) {
                        if (void 0 === e.inputmask) return e.value;
                        e.inputmask && e.inputmask.refreshValue && c(e, e.inputmask._valueGet(!0));
                    }
                    for (var n = [], o = a.validPositions, s = 0, l = o.length; s < l; s++) o[s] && o[s].match && (1 != o[s].match.static || Array.isArray(a.metadata) && !0 !== o[s].generatedInput) && n.push(o[s].input);
                    var u = 0 === n.length ? "" : (t.isRTL ? n.reverse() : n).join("");
                    if ("function" == typeof i.onUnMask) {
                        var f = (t.isRTL ? r.getBuffer.call(t).slice().reverse() : r.getBuffer.call(t)).join("");
                        u = i.onUnMask.call(t, f, u, i);
                    }
                    return u;
                }, t.writeBuffer = p;
                var a = i(2839), n = i(4713), r = i(8711), o = i(7215), s = i(9845), l = i(6030);
                function c(e, t) {
                    var i = e ? e.inputmask : this, a = i.opts;
                    e.inputmask.refreshValue = !1, "function" == typeof a.onBeforeMask && (t = a.onBeforeMask.call(i, t, a) || t), 
                    f(e, !0, !1, t = t.toString().split("")), i.undoValue = i._valueGet(!0), (a.clearMaskOnLostFocus || a.clearIncomplete) && e.inputmask._valueGet() === r.getBufferTemplate.call(i).join("") && -1 === r.getLastValidPosition.call(i) && e.inputmask._valueSet("");
                }
                function u(e) {
                    e.length = 0;
                    for (var t, i = n.getMaskTemplate.call(this, !0, 0, !0, void 0, !0); void 0 !== (t = i.shift()); ) e.push(t);
                    return e;
                }
                function f(e, t, i, a, s) {
                    var c = e ? e.inputmask : this, u = c.maskset, f = c.opts, d = c.dependencyLib, h = a.slice(), m = "", v = -1, g = void 0, k = f.skipOptionalPartCharacter;
                    f.skipOptionalPartCharacter = "", r.resetMaskSet.call(c), u.tests = {}, v = f.radixPoint ? r.determineNewCaretPosition.call(c, {
                        begin: 0,
                        end: 0
                    }, !1, !1 === f.__financeInput ? "radixFocus" : void 0).begin : 0, u.p = v, c.caretPos = {
                        begin: v
                    };
                    var y = [], b = c.caretPos;
                    if (h.forEach(function(e, t) {
                        if (void 0 !== e) {
                            var a = new d.Event("_checkval");
                            a.key = e, m += e;
                            var o = r.getLastValidPosition.call(c, void 0, !0);
                            !function(e, t) {
                                for (var i = n.getMaskTemplate.call(c, !0, 0).slice(e, r.seekNext.call(c, e, !1, !1)).join("").replace(/'/g, ""), a = i.indexOf(t); 0 < a && " " === i[a - 1]; ) a--;
                                var o = 0 === a && !r.isMask.call(c, e) && (n.getTest.call(c, e).match.nativeDef === t.charAt(0) || !0 === n.getTest.call(c, e).match.static && n.getTest.call(c, e).match.nativeDef === "'" + t.charAt(0) || " " === n.getTest.call(c, e).match.nativeDef && (n.getTest.call(c, e + 1).match.nativeDef === t.charAt(0) || !0 === n.getTest.call(c, e + 1).match.static && n.getTest.call(c, e + 1).match.nativeDef === "'" + t.charAt(0)));
                                if (!o && 0 < a && !r.isMask.call(c, e, !1, !0)) {
                                    var s = r.seekNext.call(c, e);
                                    c.caretPos.begin < s && (c.caretPos = {
                                        begin: s
                                    });
                                }
                                return o;
                            }(v, m) ? (g = l.EventHandlers.keypressEvent.call(c, a, !0, !1, i, c.caretPos.begin)) && (v = c.caretPos.begin + 1, 
                            m = "") : g = l.EventHandlers.keypressEvent.call(c, a, !0, !1, i, o + 1), g ? (void 0 !== g.pos && u.validPositions[g.pos] && !0 === u.validPositions[g.pos].match.static && void 0 === u.validPositions[g.pos].alternation && (y.push(g.pos), 
                            c.isRTL || (g.forwardPosition = g.pos + 1)), p.call(c, void 0, r.getBuffer.call(c), g.forwardPosition, a, !1), 
                            c.caretPos = {
                                begin: g.forwardPosition,
                                end: g.forwardPosition
                            }, b = c.caretPos) : void 0 === u.validPositions[t] && h[t] === n.getPlaceholder.call(c, t) && r.isMask.call(c, t, !0) ? c.caretPos.begin++ : c.caretPos = b;
                        }
                    }), 0 < y.length) {
                        var x, P, w = r.seekNext.call(c, -1, void 0, !1);
                        if (!o.isComplete.call(c, r.getBuffer.call(c)) && y.length <= w || o.isComplete.call(c, r.getBuffer.call(c)) && 0 < y.length && y.length !== w && 0 === y[0]) for (var S = w; void 0 !== (x = y.shift()); ) {
                            var M = new d.Event("_checkval");
                            if ((P = u.validPositions[x]).generatedInput = !0, M.key = P.input, (g = l.EventHandlers.keypressEvent.call(c, M, !0, !1, i, S)) && void 0 !== g.pos && g.pos !== x && u.validPositions[g.pos] && !0 === u.validPositions[g.pos].match.static) y.push(g.pos); else if (!g) break;
                            S++;
                        }
                    }
                    t && p.call(c, e, r.getBuffer.call(c), g ? g.forwardPosition : c.caretPos.begin, s || new d.Event("checkval"), s && ("input" === s.type && c.undoValue !== r.getBuffer.call(c).join("") || "paste" === s.type)), 
                    f.skipOptionalPartCharacter = k;
                }
                function p(e, t, i, n, s) {
                    var l = e ? e.inputmask : this, c = l.opts, u = l.dependencyLib;
                    if (n && "function" == typeof c.onBeforeWrite) {
                        var f = c.onBeforeWrite.call(l, n, t, i, c);
                        if (f) {
                            if (f.refreshFromBuffer) {
                                var p = f.refreshFromBuffer;
                                o.refreshFromBuffer.call(l, !0 === p ? p : p.start, p.end, f.buffer || t), t = r.getBuffer.call(l, !0);
                            }
                            void 0 !== i && (i = void 0 !== f.caret ? f.caret : i);
                        }
                    }
                    if (void 0 !== e && (e.inputmask._valueSet(t.join("")), void 0 === i || void 0 !== n && "blur" === n.type || r.caret.call(l, e, i, void 0, void 0, void 0 !== n && "keydown" === n.type && (n.key === a.keys.Delete || n.key === a.keys.Backspace)), 
                    !0 === s)) {
                        var d = u(e), h = e.inputmask._valueGet();
                        e.inputmask.skipInputEvent = !0, d.trigger("input"), setTimeout(function() {
                            h === r.getBufferTemplate.call(l).join("") ? d.trigger("cleared") : !0 === o.isComplete.call(l, t) && d.trigger("complete");
                        }, 0);
                    }
                }
            },
            2394: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0, i(7149), i(3194);
                var a = i(157), n = v(i(3287)), r = v(i(9380)), o = i(2391), s = i(4713), l = i(8711), c = i(7215), u = i(7760), f = i(9716), p = v(i(7392)), d = v(i(3976)), h = v(i(8741));
                function m(e) {
                    return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    })(e);
                }
                function v(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var g = r.default.document, k = "_inputmask_opts";
                function y(e, t, i) {
                    if (h.default) {
                        if (!(this instanceof y)) return new y(e, t, i);
                        this.dependencyLib = n.default, this.el = void 0, this.events = {}, !(this.maskset = void 0) !== i && ("[object Object]" === Object.prototype.toString.call(e) ? t = e : (t = t || {}, 
                        e && (t.alias = e)), this.opts = n.default.extend(!0, {}, this.defaults, t), this.noMasksCache = t && void 0 !== t.definitions, 
                        this.userOptions = t || {}, b(this.opts.alias, t, this.opts)), this.refreshValue = !1, 
                        this.undoValue = void 0, this.$el = void 0, this.skipInputEvent = !1, this.validationEvent = !1, 
                        this.ignorable = !1, this.maxLength, this.mouseEnter = !1, this.originalPlaceholder = void 0, 
                        this.isComposing = !1;
                    }
                }
                function b(e, t, i) {
                    var a = y.prototype.aliases[e];
                    return a ? (a.alias && b(a.alias, void 0, i), n.default.extend(!0, i, a), n.default.extend(!0, i, t), 
                    !0) : (null === i.mask && (i.mask = e), !1);
                }
                y.prototype = {
                    dataAttribute: "data-inputmask",
                    defaults: d.default,
                    definitions: p.default,
                    aliases: {},
                    masksCache: {},
                    get isRTL() {
                        return this.opts.isRTL || this.opts.numericInput;
                    },
                    mask: function(e) {
                        var t = this;
                        return "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), 
                        (e = e.nodeName ? [ e ] : Array.isArray(e) ? e : [].slice.call(e)).forEach(function(e, i) {
                            var s = n.default.extend(!0, {}, t.opts);
                            if (function(e, t, i, a) {
                                function o(t, n) {
                                    var o = "" === a ? t : a + "-" + t;
                                    null !== (n = void 0 !== n ? n : e.getAttribute(o)) && ("string" == typeof n && (0 === t.indexOf("on") ? n = r.default[n] : "false" === n ? n = !1 : "true" === n && (n = !0)), 
                                    i[t] = n);
                                }
                                if (!0 === t.importDataAttributes) {
                                    var s, l, c, u, f = e.getAttribute(a);
                                    if (f && "" !== f && (f = f.replace(/'/g, '"'), l = JSON.parse("{" + f + "}")), 
                                    l) for (u in c = void 0, l) if ("alias" === u.toLowerCase()) {
                                        c = l[u];
                                        break;
                                    }
                                    for (s in o("alias", c), i.alias && b(i.alias, i, t), t) {
                                        if (l) for (u in c = void 0, l) if (u.toLowerCase() === s.toLowerCase()) {
                                            c = l[u];
                                            break;
                                        }
                                        o(s, c);
                                    }
                                }
                                return n.default.extend(!0, t, i), ("rtl" === e.dir || t.rightAlign) && (e.style.textAlign = "right"), 
                                ("rtl" === e.dir || t.numericInput) && (e.dir = "ltr", e.removeAttribute("dir"), 
                                t.isRTL = !0), Object.keys(i).length;
                            }(e, s, n.default.extend(!0, {}, t.userOptions), t.dataAttribute)) {
                                var l = (0, o.generateMaskSet)(s, t.noMasksCache);
                                void 0 !== l && (void 0 !== e.inputmask && (e.inputmask.opts.autoUnmask = !0, e.inputmask.remove()), 
                                e.inputmask = new y(void 0, void 0, !0), e.inputmask.opts = s, e.inputmask.noMasksCache = t.noMasksCache, 
                                e.inputmask.userOptions = n.default.extend(!0, {}, t.userOptions), (e.inputmask.el = e).inputmask.$el = (0, 
                                n.default)(e), e.inputmask.maskset = l, n.default.data(e, k, t.userOptions), a.mask.call(e.inputmask));
                            }
                        }), e && e[0] && e[0].inputmask || this;
                    },
                    option: function(e, t) {
                        return "string" == typeof e ? this.opts[e] : "object" === m(e) ? (n.default.extend(this.userOptions, e), 
                        this.el && !0 !== t && this.mask(this.el), this) : void 0;
                    },
                    unmaskedvalue: function(e) {
                        if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                        void 0 === this.el || void 0 !== e) {
                            var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                            u.checkVal.call(this, void 0, !1, !1, t), "function" == typeof this.opts.onBeforeWrite && this.opts.onBeforeWrite.call(this, void 0, l.getBuffer.call(this), 0, this.opts);
                        }
                        return u.unmaskedvalue.call(this, this.el);
                    },
                    remove: function() {
                        if (this.el) {
                            n.default.data(this.el, k, null);
                            var e = this.opts.autoUnmask ? (0, u.unmaskedvalue)(this.el) : this._valueGet(this.opts.autoUnmask);
                            e !== l.getBufferTemplate.call(this).join("") ? this._valueSet(e, this.opts.autoUnmask) : this._valueSet(""), 
                            f.EventRuler.off(this.el), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el), "value") && this.__valueGet && Object.defineProperty(this.el, "value", {
                                get: this.__valueGet,
                                set: this.__valueSet,
                                configurable: !0
                            }) : g.__lookupGetter__ && this.el.__lookupGetter__("value") && this.__valueGet && (this.el.__defineGetter__("value", this.__valueGet), 
                            this.el.__defineSetter__("value", this.__valueSet)), this.el.inputmask = void 0;
                        }
                        return this.el;
                    },
                    getemptymask: function() {
                        return this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                        (this.isRTL ? l.getBufferTemplate.call(this).reverse() : l.getBufferTemplate.call(this)).join("");
                    },
                    hasMaskedValue: function() {
                        return !this.opts.autoUnmask;
                    },
                    isComplete: function() {
                        return this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                        c.isComplete.call(this, l.getBuffer.call(this));
                    },
                    getmetadata: function() {
                        if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                        Array.isArray(this.maskset.metadata)) {
                            var e = s.getMaskTemplate.call(this, !0, 0, !1).join("");
                            return this.maskset.metadata.forEach(function(t) {
                                return t.mask !== e || (e = t, !1);
                            }), e;
                        }
                        return this.maskset.metadata;
                    },
                    isValid: function(e) {
                        if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                        e) {
                            var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                            u.checkVal.call(this, void 0, !0, !1, t);
                        } else e = this.isRTL ? l.getBuffer.call(this).slice().reverse().join("") : l.getBuffer.call(this).join("");
                        for (var i = l.getBuffer.call(this), a = l.determineLastRequiredPosition.call(this), n = i.length - 1; a < n && !l.isMask.call(this, n); n--) ;
                        return i.splice(a, n + 1 - a), c.isComplete.call(this, i) && e === (this.isRTL ? l.getBuffer.call(this).slice().reverse().join("") : l.getBuffer.call(this).join(""));
                    },
                    format: function(e, t) {
                        this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache);
                        var i = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                        u.checkVal.call(this, void 0, !0, !1, i);
                        var a = this.isRTL ? l.getBuffer.call(this).slice().reverse().join("") : l.getBuffer.call(this).join("");
                        return t ? {
                            value: a,
                            metadata: this.getmetadata()
                        } : a;
                    },
                    setValue: function(e) {
                        this.el && (0, n.default)(this.el).trigger("setvalue", [ e ]);
                    },
                    analyseMask: o.analyseMask
                }, y.extendDefaults = function(e) {
                    n.default.extend(!0, y.prototype.defaults, e);
                }, y.extendDefinitions = function(e) {
                    n.default.extend(!0, y.prototype.definitions, e);
                }, y.extendAliases = function(e) {
                    n.default.extend(!0, y.prototype.aliases, e);
                }, y.format = function(e, t, i) {
                    return y(t).format(e, i);
                }, y.unmask = function(e, t) {
                    return y(t).unmaskedvalue(e);
                }, y.isValid = function(e, t) {
                    return y(t).isValid(e);
                }, y.remove = function(e) {
                    "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), (e = e.nodeName ? [ e ] : e).forEach(function(e) {
                        e.inputmask && e.inputmask.remove();
                    });
                }, y.setValue = function(e, t) {
                    "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), (e = e.nodeName ? [ e ] : e).forEach(function(e) {
                        e.inputmask ? e.inputmask.setValue(t) : (0, n.default)(e).trigger("setvalue", [ t ]);
                    });
                }, y.dependencyLib = n.default;
                var x = r.default.Inputmask = y;
                t.default = x;
            },
            5296: function(e, t, i) {
                function a(e) {
                    return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    })(e);
                }
                var n = h(i(9380)), r = h(i(2394)), o = h(i(8741));
                function l(e, t) {
                    if (t && ("object" === a(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return function(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e;
                    }(e);
                }
                function c(e) {
                    var t = "function" == typeof Map ? new Map() : void 0;
                    return (c = function(e) {
                        if (null === e || (i = e, -1 === Function.toString.call(i).indexOf("[native code]"))) return e;
                        var i;
                        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                        if (void 0 !== t) {
                            if (t.has(e)) return t.get(e);
                            t.set(e, a);
                        }
                        function a() {
                            return u(e, arguments, d(this).constructor);
                        }
                        return a.prototype = Object.create(e.prototype, {
                            constructor: {
                                value: a,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), p(a, e);
                    })(e);
                }
                function u(e, t, i) {
                    return (u = f() ? Reflect.construct : function(e, t, i) {
                        var a = [ null ];
                        a.push.apply(a, t);
                        var n = new (Function.bind.apply(e, a))();
                        return i && p(n, i.prototype), n;
                    }).apply(null, arguments);
                }
                function f() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), 
                        !0;
                    } catch (e) {
                        return !1;
                    }
                }
                function p(e, t) {
                    return (p = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t, e;
                    })(e, t);
                }
                function d(e) {
                    return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e);
                    })(e);
                }
                function h(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var m = n.default.document;
                if (o.default && m && m.head && m.head.attachShadow && n.default.customElements && void 0 === n.default.customElements.get("input-mask")) {
                    var v = function(e) {
                        !function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), t && p(e, t);
                        }(u, e);
                        var t, i, a, c = (t = u, i = f(), function() {
                            var e, a = d(t);
                            if (i) {
                                var n = d(this).constructor;
                                e = Reflect.construct(a, arguments, n);
                            } else e = a.apply(this, arguments);
                            return l(this, e);
                        });
                        function u() {
                            var e;
                            !function(e, t) {
                                if (!(e instanceof u)) throw new TypeError("Cannot call a class as a function");
                            }(this);
                            var t = (e = c.call(this)).getAttributeNames(), i = e.attachShadow({
                                mode: "closed"
                            }), a = m.createElement("input");
                            for (var n in a.type = "text", i.appendChild(a), t) Object.prototype.hasOwnProperty.call(t, n) && a.setAttribute(t[n], e.getAttribute(t[n]));
                            var o = new r.default();
                            return o.dataAttribute = "", o.mask(a), a.inputmask.shadowRoot = i, e;
                        }
                        return a = u, Object.defineProperty(a, "prototype", {
                            writable: !1
                        }), a;
                    }(c(HTMLElement));
                    n.default.customElements.define("input-mask", v);
                }
            },
            443: function(e, t, i) {
                var a = o(i(7957)), n = o(i(2394));
                function r(e) {
                    return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    })(e);
                }
                function o(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                void 0 === a.default.fn.inputmask && (a.default.fn.inputmask = function(e, t) {
                    var i, o = this[0];
                    if (void 0 === t && (t = {}), "string" == typeof e) switch (e) {
                      case "unmaskedvalue":
                        return o && o.inputmask ? o.inputmask.unmaskedvalue() : (0, a.default)(o).val();

                      case "remove":
                        return this.each(function() {
                            this.inputmask && this.inputmask.remove();
                        });

                      case "getemptymask":
                        return o && o.inputmask ? o.inputmask.getemptymask() : "";

                      case "hasMaskedValue":
                        return !(!o || !o.inputmask) && o.inputmask.hasMaskedValue();

                      case "isComplete":
                        return !o || !o.inputmask || o.inputmask.isComplete();

                      case "getmetadata":
                        return o && o.inputmask ? o.inputmask.getmetadata() : void 0;

                      case "setvalue":
                        n.default.setValue(o, t);
                        break;

                      case "option":
                        if ("string" != typeof t) return this.each(function() {
                            if (void 0 !== this.inputmask) return this.inputmask.option(t);
                        });
                        if (o && void 0 !== o.inputmask) return o.inputmask.option(t);
                        break;

                      default:
                        return t.alias = e, i = new n.default(t), this.each(function() {
                            i.mask(this);
                        });
                    } else {
                        if (Array.isArray(e)) return t.alias = e, i = new n.default(t), this.each(function() {
                            i.mask(this);
                        });
                        if ("object" == r(e)) return i = new n.default(e), void 0 === e.mask && void 0 === e.alias ? this.each(function() {
                            if (void 0 !== this.inputmask) return this.inputmask.option(e);
                            i.mask(this);
                        }) : this.each(function() {
                            i.mask(this);
                        });
                        if (void 0 === e) return this.each(function() {
                            (i = new n.default(t)).mask(this);
                        });
                    }
                });
            },
            2839: function(e, t) {
                function i(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e;
                    }(e) || function(e, t) {
                        var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != i) {
                            var a, n, r = [], o = !0, s = !1;
                            try {
                                for (i = i.call(e); !(o = (a = i.next()).done) && (r.push(a.value), !t || r.length !== t); o = !0) ;
                            } catch (e) {
                                s = !0, n = e;
                            } finally {
                                try {
                                    o || null == i.return || i.return();
                                } finally {
                                    if (s) throw n;
                                }
                            }
                            return r;
                        }
                    }(e, t) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return a(e, t);
                            var i = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? a(e, t) : void 0;
                        }
                    }(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }();
                }
                function a(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var i = 0, a = new Array(t); i < t; i++) a[i] = e[i];
                    return a;
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.keys = t.keyCode = void 0, t.toKey = function(e, t) {
                    return r[e] || (t ? String.fromCharCode(e) : String.fromCharCode(e).toLowerCase());
                }, t.toKeyCode = function(e) {
                    return n[e];
                };
                var n = {
                    Backspace: 8,
                    BACKSPACE_SAFARI: 127,
                    Delete: 46,
                    Down: 40,
                    End: 35,
                    Enter: 13,
                    Escape: 27,
                    Home: 36,
                    Insert: 45,
                    Left: 37,
                    PageDown: 34,
                    PageUp: 33,
                    Right: 39,
                    Space: 32,
                    Tab: 9,
                    Up: 38,
                    c: 67,
                    x: 88,
                    z: 90,
                    Shift: 16,
                    Control: 17,
                    Alt: 18,
                    Pause: 19,
                    Meta_LEFT: 91,
                    Meta_RIGHT: 92,
                    ContextMenu: 93,
                    KEY_229: 229,
                    F1: 112,
                    F2: 113,
                    F3: 114,
                    F4: 115,
                    F5: 116,
                    F6: 117,
                    F7: 118,
                    F8: 119,
                    F9: 120,
                    F10: 121,
                    F11: 122,
                    F12: 123
                };
                t.keyCode = n;
                var r = Object.entries(n).reduce(function(e, t) {
                    var a = i(t, 2), n = a[0];
                    return e[a[1]] = n, e;
                }, {}), o = Object.entries(n).reduce(function(e, t) {
                    var a = i(t, 2), n = a[0];
                    return a[1], e[n] = "Space" === n ? " " : n, e;
                }, {});
                t.keys = o;
            },
            2391: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.analyseMask = function(e, t, i) {
                    var a, o, s, l, c, u, f = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g, p = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, d = !1, h = new n.default(), m = [], v = [], g = !1;
                    function k(e, a, n) {
                        n = void 0 !== n ? n : e.matches.length;
                        var o = e.matches[n - 1];
                        if (t) 0 === a.indexOf("[") || d && /\\d|\\s|\\w/i.test(a) || "." === a ? e.matches.splice(n++, 0, {
                            fn: new RegExp(a, i.casing ? "i" : ""),
                            static: !1,
                            optionality: !1,
                            newBlockMarker: void 0 === o ? "master" : o.def !== a,
                            casing: null,
                            def: a,
                            placeholder: void 0,
                            nativeDef: a
                        }) : (d && (a = a[a.length - 1]), a.split("").forEach(function(t, a) {
                            o = e.matches[n - 1], e.matches.splice(n++, 0, {
                                fn: /[a-z]/i.test(i.staticDefinitionSymbol || t) ? new RegExp("[" + (i.staticDefinitionSymbol || t) + "]", i.casing ? "i" : "") : null,
                                static: !0,
                                optionality: !1,
                                newBlockMarker: void 0 === o ? "master" : o.def !== t && !0 !== o.static,
                                casing: null,
                                def: i.staticDefinitionSymbol || t,
                                placeholder: void 0 !== i.staticDefinitionSymbol ? t : void 0,
                                nativeDef: (d ? "'" : "") + t
                            });
                        })), d = !1; else {
                            var s = i.definitions && i.definitions[a] || i.usePrototypeDefinitions && r.default.prototype.definitions[a];
                            s && !d ? e.matches.splice(n++, 0, {
                                fn: s.validator ? "string" == typeof s.validator ? new RegExp(s.validator, i.casing ? "i" : "") : new function() {
                                    this.test = s.validator;
                                }() : new RegExp("."),
                                static: s.static || !1,
                                optionality: s.optional || !1,
                                defOptionality: s.optional || !1,
                                newBlockMarker: void 0 === o || s.optional ? "master" : o.def !== (s.definitionSymbol || a),
                                casing: s.casing,
                                def: s.definitionSymbol || a,
                                placeholder: s.placeholder,
                                nativeDef: a,
                                generated: s.generated
                            }) : (e.matches.splice(n++, 0, {
                                fn: /[a-z]/i.test(i.staticDefinitionSymbol || a) ? new RegExp("[" + (i.staticDefinitionSymbol || a) + "]", i.casing ? "i" : "") : null,
                                static: !0,
                                optionality: !1,
                                newBlockMarker: void 0 === o ? "master" : o.def !== a && !0 !== o.static,
                                casing: null,
                                def: i.staticDefinitionSymbol || a,
                                placeholder: void 0 !== i.staticDefinitionSymbol ? a : void 0,
                                nativeDef: (d ? "'" : "") + a
                            }), d = !1);
                        }
                    }
                    function y() {
                        if (0 < m.length) {
                            if (k(l = m[m.length - 1], o), l.isAlternator) {
                                c = m.pop();
                                for (var e = 0; e < c.matches.length; e++) c.matches[e].isGroup && (c.matches[e].isGroup = !1);
                                0 < m.length ? (l = m[m.length - 1]).matches.push(c) : h.matches.push(c);
                            }
                        } else k(h, o);
                    }
                    function b(e) {
                        var t = new n.default(!0);
                        return t.openGroup = !1, t.matches = e, t;
                    }
                    function x() {
                        if ((s = m.pop()).openGroup = !1, void 0 !== s) if (0 < m.length) {
                            if ((l = m[m.length - 1]).matches.push(s), l.isAlternator) {
                                for (var e = (c = m.pop()).matches[0].matches ? c.matches[0].matches.length : 1, t = 0; t < c.matches.length; t++) c.matches[t].isGroup = !1, 
                                c.matches[t].alternatorGroup = !1, null === i.keepStatic && e < (c.matches[t].matches ? c.matches[t].matches.length : 1) && (i.keepStatic = !0), 
                                e = c.matches[t].matches ? c.matches[t].matches.length : 1;
                                0 < m.length ? (l = m[m.length - 1]).matches.push(c) : h.matches.push(c);
                            }
                        } else h.matches.push(s); else y();
                    }
                    function P(e) {
                        var t = e.pop();
                        return t.isQuantifier && (t = b([ e.pop(), t ])), t;
                    }
                    for (t && (i.optionalmarker[0] = void 0, i.optionalmarker[1] = void 0); a = t ? p.exec(e) : f.exec(e); ) {
                        if (o = a[0], t) {
                            switch (o.charAt(0)) {
                              case "?":
                                o = "{0,1}";
                                break;

                              case "+":
                              case "*":
                                o = "{" + o + "}";
                                break;

                              case "|":
                                if (0 === m.length) {
                                    var w = b(h.matches);
                                    w.openGroup = !0, m.push(w), h.matches = [], g = !0;
                                }
                            }
                            "\\d" === o && (o = "[0-9]");
                        }
                        if (d) y(); else switch (o.charAt(0)) {
                          case "$":
                          case "^":
                            t || y();
                            break;

                          case i.escapeChar:
                            d = !0, t && y();
                            break;

                          case i.optionalmarker[1]:
                          case i.groupmarker[1]:
                            x();
                            break;

                          case i.optionalmarker[0]:
                            m.push(new n.default(!1, !0));
                            break;

                          case i.groupmarker[0]:
                            m.push(new n.default(!0));
                            break;

                          case i.quantifiermarker[0]:
                            var S = new n.default(!1, !1, !0), M = (o = o.replace(/[{}?]/g, "")).split("|"), _ = M[0].split(","), O = isNaN(_[0]) ? _[0] : parseInt(_[0]), E = 1 === _.length ? O : isNaN(_[1]) ? _[1] : parseInt(_[1]), T = isNaN(M[1]) ? M[1] : parseInt(M[1]);
                            "*" !== O && "+" !== O || (O = "*" === E ? 0 : 1), S.quantifier = {
                                min: O,
                                max: E,
                                jit: T
                            };
                            var D = 0 < m.length ? m[m.length - 1].matches : h.matches;
                            if ((a = D.pop()).isAlternator) {
                                D.push(a), D = a.matches;
                                var j = new n.default(!0), A = D.pop();
                                D.push(j), D = j.matches, a = A;
                            }
                            a.isGroup || (a = b([ a ])), D.push(a), D.push(S);
                            break;

                          case i.alternatormarker:
                            if (0 < m.length) {
                                var B = (l = m[m.length - 1]).matches[l.matches.length - 1];
                                u = l.openGroup && (void 0 === B.matches || !1 === B.isGroup && !1 === B.isAlternator) ? m.pop() : P(l.matches);
                            } else u = P(h.matches);
                            if (u.isAlternator) m.push(u); else if (u.alternatorGroup ? (c = m.pop(), u.alternatorGroup = !1) : c = new n.default(!1, !1, !1, !0), 
                            c.matches.push(u), m.push(c), u.openGroup) {
                                u.openGroup = !1;
                                var C = new n.default(!0);
                                C.alternatorGroup = !0, m.push(C);
                            }
                            break;

                          default:
                            y();
                        }
                    }
                    for (g && x(); 0 < m.length; ) s = m.pop(), h.matches.push(s);
                    return 0 < h.matches.length && (function e(a) {
                        a && a.matches && a.matches.forEach(function(n, r) {
                            var o = a.matches[r + 1];
                            (void 0 === o || void 0 === o.matches || !1 === o.isQuantifier) && n && n.isGroup && (n.isGroup = !1, 
                            t || (k(n, i.groupmarker[0], 0), !0 !== n.openGroup && k(n, i.groupmarker[1]))), 
                            e(n);
                        });
                    }(h), v.push(h)), (i.numericInput || i.isRTL) && function e(t) {
                        for (var a in t.matches = t.matches.reverse(), t.matches) if (Object.prototype.hasOwnProperty.call(t.matches, a)) {
                            var n = parseInt(a);
                            if (t.matches[a].isQuantifier && t.matches[n + 1] && t.matches[n + 1].isGroup) {
                                var r = t.matches[a];
                                t.matches.splice(a, 1), t.matches.splice(n + 1, 0, r);
                            }
                            void 0 !== t.matches[a].matches ? t.matches[a] = e(t.matches[a]) : t.matches[a] = ((o = t.matches[a]) === i.optionalmarker[0] ? o = i.optionalmarker[1] : o === i.optionalmarker[1] ? o = i.optionalmarker[0] : o === i.groupmarker[0] ? o = i.groupmarker[1] : o === i.groupmarker[1] && (o = i.groupmarker[0]), 
                            o);
                        }
                        var o;
                        return t;
                    }(v[0]), v;
                }, t.generateMaskSet = function(e, t) {
                    var i;
                    function n(e, i, n) {
                        var s, l, c = !1;
                        return null !== e && "" !== e || ((c = null !== n.regex) ? e = (e = n.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (c = !0, 
                        e = ".*")), 1 === e.length && !1 === n.greedy && 0 !== n.repeat && (n.placeholder = ""), 
                        e = function(e, t) {
                            if (0 < t.repeat || "*" === t.repeat || "+" === t.repeat) {
                                var i = "*" === t.repeat ? 0 : "+" === t.repeat ? 1 : t.repeat;
                                e = t.groupmarker[0] + e + t.groupmarker[1] + t.quantifiermarker[0] + i + "," + t.repeat + t.quantifiermarker[1];
                            }
                            if (!0 === t.keepStatic) {
                                var a = e.match(new RegExp("(?<p1>.)\\[(?<p2>[^\\]]*)\\]", "g"));
                                a && a.forEach(function(t, i) {
                                    var a = t.split("["), n = a[0], r = a[1].replace("]", "");
                                    e = e.replace(new RegExp("".concat((0, o.default)(n), "\\[").concat((0, o.default)(r), "\\]")), n.charAt(0) === r.charAt(0) ? "(".concat(n, "|").concat(n).concat(r, ")") : "".concat(n, "[").concat(r, "]"));
                                });
                            }
                            return e;
                        }(e, n), l = c ? "regex_" + n.regex : n.numericInput ? e.split("").reverse().join("") : e, 
                        null !== n.keepStatic && (l = "ks_" + n.keepStatic + l), void 0 === r.default.prototype.masksCache[l] || !0 === t ? (s = {
                            mask: e,
                            maskToken: r.default.prototype.analyseMask(e, c, n),
                            validPositions: [],
                            _buffer: void 0,
                            buffer: void 0,
                            tests: {},
                            excludes: {},
                            metadata: i,
                            maskLength: void 0,
                            jitOffset: {}
                        }, !0 !== t && (r.default.prototype.masksCache[l] = s, s = a.default.extend(!0, {}, r.default.prototype.masksCache[l]))) : s = a.default.extend(!0, {}, r.default.prototype.masksCache[l]), 
                        s;
                    }
                    if ("function" == typeof e.mask && (e.mask = e.mask(e)), Array.isArray(e.mask)) {
                        if (1 < e.mask.length) {
                            null === e.keepStatic && (e.keepStatic = !0);
                            var s = e.groupmarker[0];
                            return (e.isRTL ? e.mask.reverse() : e.mask).forEach(function(t) {
                                1 < s.length && (s += e.alternatormarker), void 0 !== t.mask && "function" != typeof t.mask ? s += t.mask : s += t;
                            }), n(s += e.groupmarker[1], e.mask, e);
                        }
                        e.mask = e.mask.pop();
                    }
                    return i = e.mask && void 0 !== e.mask.mask && "function" != typeof e.mask.mask ? n(e.mask.mask, e.mask, e) : n(e.mask, e.mask, e), 
                    null === e.keepStatic && (e.keepStatic = !1), i;
                };
                var a = s(i(3287)), n = s(i(9695)), r = s(i(2394)), o = s(i(7184));
                function s(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
            },
            157: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.mask = function() {
                    var e = this, t = this.opts, i = this.el, u = this.dependencyLib;
                    o.EventRuler.off(i);
                    var f = function(t, i) {
                        "textarea" !== t.tagName.toLowerCase() && i.ignorables.push(a.keys.Enter);
                        var s = t.getAttribute("type"), l = "input" === t.tagName.toLowerCase() && i.supportsInputType.includes(s) || t.isContentEditable || "textarea" === t.tagName.toLowerCase();
                        if (!l) if ("input" === t.tagName.toLowerCase()) {
                            var c = document.createElement("input");
                            c.setAttribute("type", s), l = "text" === c.type, c = null;
                        } else l = "partial";
                        return !1 !== l ? function(t) {
                            var a, s;
                            function l() {
                                return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== n.getLastValidPosition.call(e) || !0 !== i.nullable ? (this.inputmask.shadowRoot || this.ownerDocument).activeElement === this && i.clearMaskOnLostFocus ? (e.isRTL ? r.clearOptionalTail.call(e, n.getBuffer.call(e).slice()).reverse() : r.clearOptionalTail.call(e, n.getBuffer.call(e).slice())).join("") : a.call(this) : "" : a.call(this);
                            }
                            function c(e) {
                                s.call(this, e), this.inputmask && (0, r.applyInputValue)(this, e);
                            }
                            if (!t.inputmask.__valueGet) {
                                if (!0 !== i.noValuePatching) {
                                    if (Object.getOwnPropertyDescriptor) {
                                        var f = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), "value") : void 0;
                                        f && f.get && f.set ? (a = f.get, s = f.set, Object.defineProperty(t, "value", {
                                            get: l,
                                            set: c,
                                            configurable: !0
                                        })) : "input" !== t.tagName.toLowerCase() && (a = function() {
                                            return this.textContent;
                                        }, s = function(e) {
                                            this.textContent = e;
                                        }, Object.defineProperty(t, "value", {
                                            get: l,
                                            set: c,
                                            configurable: !0
                                        }));
                                    } else document.__lookupGetter__ && t.__lookupGetter__("value") && (a = t.__lookupGetter__("value"), 
                                    s = t.__lookupSetter__("value"), t.__defineGetter__("value", l), t.__defineSetter__("value", c));
                                    t.inputmask.__valueGet = a, t.inputmask.__valueSet = s;
                                }
                                t.inputmask._valueGet = function(t) {
                                    return e.isRTL && !0 !== t ? a.call(this.el).split("").reverse().join("") : a.call(this.el);
                                }, t.inputmask._valueSet = function(t, i) {
                                    s.call(this.el, null == t ? "" : !0 !== i && e.isRTL ? t.split("").reverse().join("") : t);
                                }, void 0 === a && (a = function() {
                                    return this.value;
                                }, s = function(e) {
                                    this.value = e;
                                }, function(t) {
                                    if (u.valHooks && (void 0 === u.valHooks[t] || !0 !== u.valHooks[t].inputmaskpatch)) {
                                        var a = u.valHooks[t] && u.valHooks[t].get ? u.valHooks[t].get : function(e) {
                                            return e.value;
                                        }, o = u.valHooks[t] && u.valHooks[t].set ? u.valHooks[t].set : function(e, t) {
                                            return e.value = t, e;
                                        };
                                        u.valHooks[t] = {
                                            get: function(t) {
                                                if (t.inputmask) {
                                                    if (t.inputmask.opts.autoUnmask) return t.inputmask.unmaskedvalue();
                                                    var r = a(t);
                                                    return -1 !== n.getLastValidPosition.call(e, void 0, void 0, t.inputmask.maskset.validPositions) || !0 !== i.nullable ? r : "";
                                                }
                                                return a(t);
                                            },
                                            set: function(e, t) {
                                                var i = o(e, t);
                                                return e.inputmask && (0, r.applyInputValue)(e, t), i;
                                            },
                                            inputmaskpatch: !0
                                        };
                                    }
                                }(t.type), function(e) {
                                    o.EventRuler.on(e, "mouseenter", function() {
                                        var e = this, t = e.inputmask._valueGet(!0);
                                        t != (e.inputmask.isRTL ? n.getBuffer.call(e.inputmask).slice().reverse() : n.getBuffer.call(e.inputmask)).join("") && (0, 
                                        r.applyInputValue)(e, t);
                                    });
                                }(t));
                            }
                        }(t) : t.inputmask = void 0, l;
                    }(i, t);
                    if (!1 !== f) {
                        e.originalPlaceholder = i.placeholder, e.maxLength = void 0 !== i ? i.maxLength : void 0, 
                        -1 === e.maxLength && (e.maxLength = void 0), "inputMode" in i && null === i.getAttribute("inputmode") && (i.inputMode = t.inputmode, 
                        i.setAttribute("inputmode", t.inputmode)), !0 === f && (t.showMaskOnFocus = t.showMaskOnFocus && -1 === [ "cc-number", "cc-exp" ].indexOf(i.autocomplete), 
                        s.iphone && (t.insertModeVisual = !1, i.setAttribute("autocorrect", "off")), o.EventRuler.on(i, "submit", c.EventHandlers.submitEvent), 
                        o.EventRuler.on(i, "reset", c.EventHandlers.resetEvent), o.EventRuler.on(i, "blur", c.EventHandlers.blurEvent), 
                        o.EventRuler.on(i, "focus", c.EventHandlers.focusEvent), o.EventRuler.on(i, "invalid", c.EventHandlers.invalidEvent), 
                        o.EventRuler.on(i, "click", c.EventHandlers.clickEvent), o.EventRuler.on(i, "mouseleave", c.EventHandlers.mouseleaveEvent), 
                        o.EventRuler.on(i, "mouseenter", c.EventHandlers.mouseenterEvent), o.EventRuler.on(i, "paste", c.EventHandlers.pasteEvent), 
                        o.EventRuler.on(i, "cut", c.EventHandlers.cutEvent), o.EventRuler.on(i, "complete", t.oncomplete), 
                        o.EventRuler.on(i, "incomplete", t.onincomplete), o.EventRuler.on(i, "cleared", t.oncleared), 
                        !0 !== t.inputEventOnly && (o.EventRuler.on(i, "keydown", c.EventHandlers.keydownEvent), 
                        o.EventRuler.on(i, "keyup", c.EventHandlers.keyupEvent)), (s.mobile || t.inputEventOnly) && i.removeAttribute("maxLength"), 
                        o.EventRuler.on(i, "input", c.EventHandlers.inputFallBackEvent), o.EventRuler.on(i, "compositionend", c.EventHandlers.compositionendEvent)), 
                        o.EventRuler.on(i, "setvalue", c.EventHandlers.setValueEvent), n.getBufferTemplate.call(e).join(""), 
                        e.undoValue = e._valueGet(!0);
                        var p = (i.inputmask.shadowRoot || i.ownerDocument).activeElement;
                        if ("" !== i.inputmask._valueGet(!0) || !1 === t.clearMaskOnLostFocus || p === i) {
                            (0, r.applyInputValue)(i, i.inputmask._valueGet(!0), t);
                            var d = n.getBuffer.call(e).slice();
                            !1 === l.isComplete.call(e, d) && t.clearIncomplete && n.resetMaskSet.call(e), t.clearMaskOnLostFocus && p !== i && (-1 === n.getLastValidPosition.call(e) ? d = [] : r.clearOptionalTail.call(e, d)), 
                            (!1 === t.clearMaskOnLostFocus || t.showMaskOnFocus && p === i || "" !== i.inputmask._valueGet(!0)) && (0, 
                            r.writeBuffer)(i, d), p === i && n.caret.call(e, i, n.seekNext.call(e, n.getLastValidPosition.call(e)));
                        }
                    }
                };
                var a = i(2839), n = i(8711), r = i(7760), o = i(9716), s = i(9845), l = i(7215), c = i(6030);
            },
            9695: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e, t, i, a) {
                    this.matches = [], this.openGroup = e || !1, this.alternatorGroup = !1, this.isGroup = e || !1, 
                    this.isOptional = t || !1, this.isQuantifier = i || !1, this.isAlternator = a || !1, 
                    this.quantifier = {
                        min: 1,
                        max: 1
                    };
                };
            },
            3194: function() {
                Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
                    value: function(e, t) {
                        if (null == this) throw new TypeError('"this" is null or not defined');
                        var i = Object(this), a = i.length >>> 0;
                        if (0 === a) return !1;
                        for (var n = 0 | t, r = Math.max(0 <= n ? n : a - Math.abs(n), 0); r < a; ) {
                            if (i[r] === e) return !0;
                            r++;
                        }
                        return !1;
                    }
                });
            },
            7149: function() {
                function e(t) {
                    return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    })(t);
                }
                "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === e("test".__proto__) ? function(e) {
                    return e.__proto__;
                } : function(e) {
                    return e.constructor.prototype;
                });
            },
            8711: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.caret = function(e, t, i, a, n) {
                    var r, o = this, s = this.opts;
                    if (void 0 === t) return "selectionStart" in e && "selectionEnd" in e ? (t = e.selectionStart, 
                    i = e.selectionEnd) : window.getSelection ? (r = window.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== e && r.commonAncestorContainer !== e || (t = r.startOffset, 
                    i = r.endOffset) : document.selection && document.selection.createRange && (i = (t = 0 - (r = document.selection.createRange()).duplicate().moveStart("character", -e.inputmask._valueGet().length)) + r.text.length), 
                    {
                        begin: a ? t : c.call(o, t),
                        end: a ? i : c.call(o, i)
                    };
                    if (Array.isArray(t) && (i = o.isRTL ? t[0] : t[1], t = o.isRTL ? t[1] : t[0]), 
                    void 0 !== t.begin && (i = o.isRTL ? t.begin : t.end, t = o.isRTL ? t.end : t.begin), 
                    "number" == typeof t) {
                        t = a ? t : c.call(o, t), i = "number" == typeof (i = a ? i : c.call(o, i)) ? i : t;
                        var l = parseInt(((e.ownerDocument.defaultView || window).getComputedStyle ? (e.ownerDocument.defaultView || window).getComputedStyle(e, null) : e.currentStyle).fontSize) * i;
                        if (e.scrollLeft = l > e.scrollWidth ? l : 0, e.inputmask.caretPos = {
                            begin: t,
                            end: i
                        }, s.insertModeVisual && !1 === s.insertMode && t === i && (n || i++), e === (e.inputmask.shadowRoot || e.ownerDocument).activeElement) if ("setSelectionRange" in e) e.setSelectionRange(t, i); else if (window.getSelection) {
                            if (r = document.createRange(), void 0 === e.firstChild || null === e.firstChild) {
                                var u = document.createTextNode("");
                                e.appendChild(u);
                            }
                            r.setStart(e.firstChild, t < e.inputmask._valueGet().length ? t : e.inputmask._valueGet().length), 
                            r.setEnd(e.firstChild, i < e.inputmask._valueGet().length ? i : e.inputmask._valueGet().length), 
                            r.collapse(!0);
                            var f = window.getSelection();
                            f.removeAllRanges(), f.addRange(r);
                        } else e.createTextRange && ((r = e.createTextRange()).collapse(!0), r.moveEnd("character", i), 
                        r.moveStart("character", t), r.select());
                    }
                }, t.determineLastRequiredPosition = function(e) {
                    var t, i, r = this, s = this.maskset, l = this.dependencyLib, c = a.getMaskTemplate.call(r, !0, o.call(r), !0, !0), u = c.length, f = o.call(r), p = {}, d = s.validPositions[f], h = void 0 !== d ? d.locator.slice() : void 0;
                    for (t = f + 1; t < c.length; t++) h = (i = a.getTestTemplate.call(r, t, h, t - 1)).locator.slice(), 
                    p[t] = l.extend(!0, {}, i);
                    var m = d && void 0 !== d.alternation ? d.locator[d.alternation] : void 0;
                    for (t = u - 1; f < t && ((i = p[t]).match.optionality || i.match.optionalQuantifier && i.match.newBlockMarker || m && (m !== p[t].locator[d.alternation] && 1 != i.match.static || !0 === i.match.static && i.locator[d.alternation] && n.checkAlternationMatch.call(r, i.locator[d.alternation].toString().split(","), m.toString().split(",")) && "" !== a.getTests.call(r, t)[0].def)) && c[t] === a.getPlaceholder.call(r, t, i.match); t--) u--;
                    return e ? {
                        l: u,
                        def: p[u] ? p[u].match : void 0
                    } : u;
                }, t.determineNewCaretPosition = function(e, t, i) {
                    var n = this, c = this.maskset, u = this.opts;
                    if (t && (n.isRTL ? e.end = e.begin : e.begin = e.end), e.begin === e.end) {
                        switch (i = i || u.positionCaretOnClick) {
                          case "none":
                            break;

                          case "select":
                            e = {
                                begin: 0,
                                end: r.call(n).length
                            };
                            break;

                          case "ignore":
                            e.end = e.begin = l.call(n, o.call(n));
                            break;

                          case "radixFocus":
                            if (function(e) {
                                if ("" !== u.radixPoint && 0 !== u.digits) {
                                    var t = c.validPositions;
                                    if (void 0 === t[e] || t[e].input === a.getPlaceholder.call(n, e)) {
                                        if (e < l.call(n, -1)) return !0;
                                        var i = r.call(n).indexOf(u.radixPoint);
                                        if (-1 !== i) {
                                            for (var o = 0, s = t.length; o < s; o++) if (t[o] && i < o && t[o].input !== a.getPlaceholder.call(n, o)) return !1;
                                            return !0;
                                        }
                                    }
                                }
                                return !1;
                            }(e.begin)) {
                                var f = r.call(n).join("").indexOf(u.radixPoint);
                                e.end = e.begin = u.numericInput ? l.call(n, f) : f;
                                break;
                            }

                          default:
                            var p = e.begin, d = o.call(n, p, !0), h = l.call(n, -1 !== d || s.call(n, 0) ? d : -1);
                            if (p <= h) e.end = e.begin = s.call(n, p, !1, !0) ? p : l.call(n, p); else {
                                var m = c.validPositions[d], v = a.getTestTemplate.call(n, h, m ? m.match.locator : void 0, m), g = a.getPlaceholder.call(n, h, v.match);
                                if ("" !== g && r.call(n)[h] !== g && !0 !== v.match.optionalQuantifier && !0 !== v.match.newBlockMarker || !s.call(n, h, u.keepStatic, !0) && v.match.def === g) {
                                    var k = l.call(n, h);
                                    (k <= p || p === h) && (h = k);
                                }
                                e.end = e.begin = h;
                            }
                        }
                        return e;
                    }
                }, t.getBuffer = r, t.getBufferTemplate = function() {
                    var e = this.maskset;
                    return void 0 === e._buffer && (e._buffer = a.getMaskTemplate.call(this, !1, 1), 
                    void 0 === e.buffer && (e.buffer = e._buffer.slice())), e._buffer;
                }, t.getLastValidPosition = o, t.isMask = s, t.resetMaskSet = function(e) {
                    var t = this.maskset;
                    !(t.buffer = void 0) !== e && (t.validPositions = [], t.p = 0);
                }, t.seekNext = l, t.seekPrevious = function(e, t) {
                    var i = this, n = e - 1;
                    if (e <= 0) return 0;
                    for (;0 < n && (!0 === t && (!0 !== a.getTest.call(i, n).match.newBlockMarker || !s.call(i, n, void 0, !0)) || !0 !== t && !s.call(i, n, void 0, !0)); ) n--;
                    return n;
                }, t.translatePosition = c;
                var a = i(4713), n = i(7215);
                function r(e) {
                    var t = this.maskset;
                    return void 0 !== t.buffer && !0 !== e || (t.buffer = a.getMaskTemplate.call(this, !0, o.call(this), !0), 
                    void 0 === t._buffer && (t._buffer = t.buffer.slice())), t.buffer;
                }
                function o(e, t, i) {
                    var a = this.maskset, n = -1, r = -1, o = i || a.validPositions;
                    void 0 === e && (e = -1);
                    for (var s = 0, l = o.length; s < l; s++) o[s] && (t || !0 !== o[s].generatedInput) && (s <= e && (n = s), 
                    e <= s && (r = s));
                    return -1 === n || n == e ? r : -1 == r || e - n < r - e ? n : r;
                }
                function s(e, t, i) {
                    var n = this, r = this.maskset, o = a.getTestTemplate.call(n, e).match;
                    if ("" === o.def && (o = a.getTest.call(n, e).match), !0 !== o.static) return o.fn;
                    if (!0 === i && void 0 !== r.validPositions[e] && !0 !== r.validPositions[e].generatedInput) return !0;
                    if (!0 !== t && -1 < e) {
                        if (i) {
                            var s = a.getTests.call(n, e);
                            return s.length > 1 + ("" === s[s.length - 1].match.def ? 1 : 0);
                        }
                        var l = a.determineTestTemplate.call(n, e, a.getTests.call(n, e)), c = a.getPlaceholder.call(n, e, l.match);
                        return l.match.def !== c;
                    }
                    return !1;
                }
                function l(e, t, i) {
                    var n = this;
                    void 0 === i && (i = !0);
                    for (var r = e + 1; "" !== a.getTest.call(n, r).match.def && (!0 === t && (!0 !== a.getTest.call(n, r).match.newBlockMarker || !s.call(n, r, void 0, !0)) || !0 !== t && !s.call(n, r, void 0, i)); ) r++;
                    return r;
                }
                function c(e) {
                    var t = this.opts, i = this.el;
                    return !this.isRTL || "number" != typeof e || t.greedy && "" === t.placeholder || !i || (e = this._valueGet().length - e) < 0 && (e = 0), 
                    e;
                }
            },
            4713: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.determineTestTemplate = c, t.getDecisionTaker = o, t.getMaskTemplate = function(e, t, i, a, n) {
                    var r = this, o = this.opts, u = this.maskset, f = o.greedy;
                    n && o.greedy && (o.greedy = !1, r.maskset.tests = {}), t = t || 0;
                    var d, h, m, v, g = [], k = 0;
                    do {
                        if (!0 === e && u.validPositions[k]) h = (m = n && u.validPositions[k].match.optionality && void 0 === u.validPositions[k + 1] && (!0 === u.validPositions[k].generatedInput || u.validPositions[k].input == o.skipOptionalPartCharacter && 0 < k) ? c.call(r, k, p.call(r, k, d, k - 1)) : u.validPositions[k]).match, 
                        d = m.locator.slice(), g.push(!0 === i ? m.input : !1 === i ? h.nativeDef : s.call(r, k, h)); else {
                            h = (m = l.call(r, k, d, k - 1)).match, d = m.locator.slice();
                            var y = !0 !== a && (!1 !== o.jitMasking ? o.jitMasking : h.jit);
                            (v = (v && h.static && h.def !== o.groupSeparator && null === h.fn || u.validPositions[k - 1] && h.static && h.def !== o.groupSeparator && null === h.fn) && u.tests[k] && 1 === u.tests[k].length) || !1 === y || void 0 === y || "number" == typeof y && isFinite(y) && k < y ? g.push(!1 === i ? h.nativeDef : s.call(r, g.length, h)) : v = !1;
                        }
                        k++;
                    } while (!0 !== h.static || "" !== h.def || k < t);
                    return "" === g[g.length - 1] && g.pop(), !1 === i && void 0 !== u.maskLength || (u.maskLength = k - 1), 
                    o.greedy = f, g;
                }, t.getPlaceholder = s, t.getTest = u, t.getTestTemplate = l, t.getTests = p, t.isSubsetOf = f;
                var a, n = (a = i(2394)) && a.__esModule ? a : {
                    default: a
                };
                function r(e, t) {
                    var i = (null != e.alternation ? e.mloc[o(e)] : e.locator).join("");
                    if ("" !== i) for (;i.length < t; ) i += "0";
                    return i;
                }
                function o(e) {
                    var t = e.locator[e.alternation];
                    return "string" == typeof t && 0 < t.length && (t = t.split(",")[0]), void 0 !== t ? t.toString() : "";
                }
                function s(e, t, i) {
                    var a = this.opts, n = this.maskset;
                    if (void 0 !== (t = t || u.call(this, e).match).placeholder || !0 === i) return "function" == typeof t.placeholder ? t.placeholder(a) : t.placeholder;
                    if (!0 === t.static) {
                        if (-1 < e && void 0 === n.validPositions[e]) {
                            var r, o = p.call(this, e), s = [];
                            if (o.length > 1 + ("" === o[o.length - 1].match.def ? 1 : 0)) for (var l = 0; l < o.length; l++) if ("" !== o[l].match.def && !0 !== o[l].match.optionality && !0 !== o[l].match.optionalQuantifier && (!0 === o[l].match.static || void 0 === r || !1 !== o[l].match.fn.test(r.match.def, n, e, !0, a)) && (s.push(o[l]), 
                            !0 === o[l].match.static && (r = o[l]), 1 < s.length && /[0-9a-bA-Z]/.test(s[0].match.def))) return a.placeholder.charAt(e % a.placeholder.length);
                        }
                        return t.def;
                    }
                    return a.placeholder.charAt(e % a.placeholder.length);
                }
                function l(e, t, i) {
                    return this.maskset.validPositions[e] || c.call(this, e, p.call(this, e, t ? t.slice() : t, i));
                }
                function c(e, t) {
                    var n, o, s, i = this.opts, a = function(e, t) {
                        var i = 0, a = !1;
                        return t.forEach(function(e) {
                            e.match.optionality && (0 !== i && i !== e.match.optionality && (a = !0), (0 === i || i > e.match.optionality) && (i = e.match.optionality));
                        }), i && (0 == e || 1 == t.length ? i = 0 : a || (i = 0)), i;
                    }(e, t), l = r(u.call(this, e = 0 < e ? e - 1 : 0));
                    i.greedy && 1 < t.length && "" === t[t.length - 1].match.def && t.pop();
                    for (var c = 0; c < t.length; c++) {
                        var f = t[c];
                        n = r(f, l.length);
                        var p = Math.abs(n - l);
                        (void 0 === o || "" !== n && p < o || s && !i.greedy && s.match.optionality && 0 < s.match.optionality - a && "master" === s.match.newBlockMarker && (!f.match.optionality || f.match.optionality - a < 1 || !f.match.newBlockMarker) || s && !i.greedy && s.match.optionalQuantifier && !f.match.optionalQuantifier) && (o = p, 
                        s = f);
                    }
                    return s;
                }
                function u(e, t) {
                    var i = this.maskset;
                    return i.validPositions[e] ? i.validPositions[e] : (t || p.call(this, e))[0];
                }
                function f(e, t, i) {
                    function a(e) {
                        for (var t, i = [], a = -1, n = 0, r = e.length; n < r; n++) if ("-" === e.charAt(n)) for (t = e.charCodeAt(n + 1); ++a < t; ) i.push(String.fromCharCode(a)); else a = e.charCodeAt(n), 
                        i.push(e.charAt(n));
                        return i.join("");
                    }
                    return e.match.def === t.match.nativeDef || !(!(i.regex || e.match.fn instanceof RegExp && t.match.fn instanceof RegExp) || !0 === e.match.static || !0 === t.match.static) && -1 !== a(t.match.fn.toString().replace(/[[\]/]/g, "")).indexOf(a(e.match.fn.toString().replace(/[[\]/]/g, "")));
                }
                function p(e, t, i) {
                    var a, r, o = this, s = this.dependencyLib, l = this.maskset, u = this.opts, p = this.el, d = l.maskToken, h = t ? i : 0, m = t ? t.slice() : [ 0 ], v = [], g = !1, k = t ? t.join("") : "";
                    function y(t, i, r, o) {
                        function s(r, o, c) {
                            function d(e, t) {
                                var i = 0 === t.matches.indexOf(e);
                                return i || t.matches.every(function(a, n) {
                                    return !0 === a.isQuantifier ? i = d(e, t.matches[n - 1]) : Object.prototype.hasOwnProperty.call(a, "matches") && (i = d(e, a)), 
                                    !i;
                                }), i;
                            }
                            function m(e, t, i) {
                                var a, n;
                                if ((l.tests[e] || l.validPositions[e]) && (l.tests[e] || [ l.validPositions[e] ]).every(function(e, r) {
                                    if (e.mloc[t]) return a = e, !1;
                                    var o = void 0 !== i ? i : e.alternation, s = void 0 !== e.locator[o] ? e.locator[o].toString().indexOf(t) : -1;
                                    return (void 0 === n || s < n) && -1 !== s && (a = e, n = s), !0;
                                }), a) {
                                    var r = a.locator[a.alternation];
                                    return (a.mloc[t] || a.mloc[r] || a.locator).slice((void 0 !== i ? i : a.alternation) + 1);
                                }
                                return void 0 !== i ? m(e, t) : void 0;
                            }
                            function b(e, t) {
                                var i = e.alternation, a = void 0 === t || i === t.alternation && -1 === e.locator[i].toString().indexOf(t.locator[i]);
                                if (!a && i > t.alternation) for (var n = t.alternation; n < i; n++) if (e.locator[n] !== t.locator[n]) {
                                    i = n, a = !0;
                                    break;
                                }
                                if (a) {
                                    e.mloc = e.mloc || {};
                                    var r = e.locator[i];
                                    if (void 0 !== r) {
                                        if ("string" == typeof r && (r = r.split(",")[0]), void 0 === e.mloc[r] && (e.mloc[r] = e.locator.slice()), 
                                        void 0 !== t) {
                                            for (var o in t.mloc) "string" == typeof o && (o = o.split(",")[0]), void 0 === e.mloc[o] && (e.mloc[o] = t.mloc[o]);
                                            e.locator[i] = Object.keys(e.mloc).join(",");
                                        }
                                        return !0;
                                    }
                                    e.alternation = void 0;
                                }
                                return !1;
                            }
                            function x(e, t) {
                                if (e.locator.length !== t.locator.length) return !1;
                                for (var i = e.alternation + 1; i < e.locator.length; i++) if (e.locator[i] !== t.locator[i]) return !1;
                                return !0;
                            }
                            if (h > e + u._maxTestPos) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + l.mask;
                            if (h === e && void 0 === r.matches) {
                                if (v.push({
                                    match: r,
                                    locator: o.reverse(),
                                    cd: k,
                                    mloc: {}
                                }), !r.optionality || void 0 !== c || !(u.definitions && u.definitions[r.nativeDef] && u.definitions[r.nativeDef].optional || n.default.prototype.definitions[r.nativeDef] && n.default.prototype.definitions[r.nativeDef].optional)) return !0;
                                g = !0, h = e;
                            } else if (void 0 !== r.matches) {
                                if (r.isGroup && c !== r) {
                                    if (r = s(t.matches[t.matches.indexOf(r) + 1], o, c)) return !0;
                                } else if (r.isOptional) {
                                    var P = r, w = v.length;
                                    if (r = y(r, i, o, c)) {
                                        if (v.forEach(function(e, t) {
                                            w <= t && (e.match.optionality = e.match.optionality ? e.match.optionality + 1 : 1);
                                        }), a = v[v.length - 1].match, void 0 !== c || !d(a, P)) return !0;
                                        g = !0, h = e;
                                    }
                                } else if (r.isAlternator) {
                                    var S, M = r, _ = [], O = v.slice(), E = o.length, T = !1, D = 0 < i.length ? i.shift() : -1;
                                    if (-1 === D || "string" == typeof D) {
                                        var j, A = h, B = i.slice(), C = [];
                                        if ("string" == typeof D) C = D.split(","); else for (j = 0; j < M.matches.length; j++) C.push(j.toString());
                                        if (void 0 !== l.excludes[e]) {
                                            for (var R = C.slice(), L = 0, F = l.excludes[e].length; L < F; L++) {
                                                var I = l.excludes[e][L].toString().split(":");
                                                o.length == I[1] && C.splice(C.indexOf(I[0]), 1);
                                            }
                                            0 === C.length && (delete l.excludes[e], C = R);
                                        }
                                        (!0 === u.keepStatic || isFinite(parseInt(u.keepStatic)) && A >= u.keepStatic) && (C = C.slice(0, 1));
                                        for (var V = 0; V < C.length; V++) {
                                            j = parseInt(C[V]), v = [], i = "string" == typeof D && m(h, j, E) || B.slice();
                                            var N = M.matches[j];
                                            if (N && s(N, [ j ].concat(o), c)) r = !0; else if (0 === V && (T = !0), N && N.matches && N.matches.length > M.matches[0].matches.length) break;
                                            S = v.slice(), h = A, v = [];
                                            for (var G = 0; G < S.length; G++) {
                                                var H = S[G], U = !1;
                                                H.match.jit = H.match.jit || T, H.alternation = H.alternation || E, b(H);
                                                for (var K = 0; K < _.length; K++) {
                                                    var $ = _[K];
                                                    if ("string" != typeof D || void 0 !== H.alternation && C.includes(H.locator[H.alternation].toString())) {
                                                        if (H.match.nativeDef === $.match.nativeDef) {
                                                            U = !0, b($, H);
                                                            break;
                                                        }
                                                        if (f(H, $, u)) {
                                                            b(H, $) && (U = !0, _.splice(_.indexOf($), 0, H));
                                                            break;
                                                        }
                                                        if (f($, H, u)) {
                                                            b($, H);
                                                            break;
                                                        }
                                                        if (Z = $, !0 === (Y = H).match.static && !0 !== Z.match.static && Z.match.fn.test(Y.match.def, l, e, !1, u, !1)) {
                                                            x(H, $) || void 0 !== p.inputmask.userOptions.keepStatic ? b(H, $) && (U = !0, _.splice(_.indexOf($), 0, H)) : u.keepStatic = !0;
                                                            break;
                                                        }
                                                    }
                                                }
                                                U || _.push(H);
                                            }
                                        }
                                        v = O.concat(_), h = e, g = 0 < v.length, r = 0 < _.length, i = B.slice();
                                    } else r = s(M.matches[D] || t.matches[D], [ D ].concat(o), c);
                                    if (r) return !0;
                                } else if (r.isQuantifier && c !== t.matches[t.matches.indexOf(r) - 1]) for (var q = r, z = 0 < i.length ? i.shift() : 0; z < (isNaN(q.quantifier.max) ? z + 1 : q.quantifier.max) && h <= e; z++) {
                                    var Q = t.matches[t.matches.indexOf(q) - 1];
                                    if (r = s(Q, [ z ].concat(o), Q)) {
                                        if ((a = v[v.length - 1].match).optionalQuantifier = z >= q.quantifier.min, a.jit = (z + 1) * (Q.matches.indexOf(a) + 1) > q.quantifier.jit, 
                                        a.optionalQuantifier && d(a, Q)) {
                                            g = !0, h = e;
                                            break;
                                        }
                                        return a.jit && (l.jitOffset[e] = Q.matches.length - Q.matches.indexOf(a)), !0;
                                    }
                                } else if (r = y(r, i, o, c)) return !0;
                            } else h++;
                            var Y, Z;
                        }
                        for (var c = 0 < i.length ? i.shift() : 0; c < t.matches.length; c++) if (!0 !== t.matches[c].isQuantifier) {
                            var d = s(t.matches[c], [ c ].concat(r), o);
                            if (d && h === e) return d;
                            if (e < h) break;
                        }
                    }
                    if (-1 < e) {
                        if (void 0 === t) {
                            for (var b, x = e - 1; void 0 === (b = l.validPositions[x] || l.tests[x]) && -1 < x; ) x--;
                            void 0 !== b && -1 < x && (m = function(e, t) {
                                var i, a = [];
                                return Array.isArray(t) || (t = [ t ]), 0 < t.length && (void 0 === t[0].alternation || !0 === u.keepStatic ? 0 === (a = c.call(o, e, t.slice()).locator.slice()).length && (a = t[0].locator.slice()) : t.forEach(function(e) {
                                    "" !== e.def && (0 === a.length ? (i = e.alternation, a = e.locator.slice()) : e.locator[i] && -1 === a[i].toString().indexOf(e.locator[i]) && (a[i] += "," + e.locator[i]));
                                })), a;
                            }(x, b), k = m.join(""), h = x);
                        }
                        if (l.tests[e] && l.tests[e][0].cd === k) return l.tests[e];
                        for (var P = m.shift(); P < d.length && !(y(d[P], m, [ P ]) && h === e || e < h); P++) ;
                    }
                    return (0 === v.length || g) && v.push({
                        match: {
                            fn: null,
                            static: !0,
                            optionality: !1,
                            casing: null,
                            def: "",
                            placeholder: ""
                        },
                        locator: [],
                        mloc: {},
                        cd: k
                    }), void 0 !== t && l.tests[e] ? r = s.extend(!0, [], v) : (l.tests[e] = s.extend(!0, [], v), 
                    r = l.tests[e]), v.forEach(function(e) {
                        e.match.optionality = e.match.defOptionality || !1;
                    }), r;
                }
            },
            7215: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.alternate = s, t.checkAlternationMatch = function(e, t, i) {
                    for (var a, n = this.opts.greedy ? t : t.slice(0, 1), r = !1, o = void 0 !== i ? i.split(",") : [], s = 0; s < o.length; s++) -1 !== (a = e.indexOf(o[s])) && e.splice(a, 1);
                    for (var l = 0; l < e.length; l++) if (n.includes(e[l])) {
                        r = !0;
                        break;
                    }
                    return r;
                }, t.handleRemove = function(e, t, i, o, l) {
                    var c = this, u = this.maskset, f = this.opts;
                    if ((f.numericInput || c.isRTL) && (t === n.keys.Backspace ? t = n.keys.Delete : t === n.keys.Delete && (t = n.keys.Backspace), 
                    c.isRTL)) {
                        var p = i.end;
                        i.end = i.begin, i.begin = p;
                    }
                    var d, h = r.getLastValidPosition.call(c, void 0, !0);
                    if (i.end >= r.getBuffer.call(c).length && h >= i.end && (i.end = h + 1), t === n.keys.Backspace ? i.end - i.begin < 1 && (i.begin = r.seekPrevious.call(c, i.begin)) : t === n.keys.Delete && i.begin === i.end && (i.end = r.isMask.call(c, i.end, !0, !0) ? i.end + 1 : r.seekNext.call(c, i.end) + 1), 
                    !1 !== (d = m.call(c, i))) {
                        if (!0 !== o && !1 !== f.keepStatic || null !== f.regex && -1 !== a.getTest.call(c, i.begin).match.def.indexOf("|")) {
                            var v = s.call(c, !0);
                            if (v) {
                                var g = void 0 !== v.caret ? v.caret : v.pos ? r.seekNext.call(c, v.pos.begin ? v.pos.begin : v.pos) : r.getLastValidPosition.call(c, -1, !0);
                                (t !== n.keys.Delete || i.begin > g) && i.begin;
                            }
                        }
                        !0 !== o && (u.p = t === n.keys.Delete ? i.begin + d : i.begin, u.p = r.determineNewCaretPosition.call(c, {
                            begin: u.p,
                            end: u.p
                        }, !1, !1 === f.insertMode && t === n.keys.Backspace ? "none" : void 0).begin);
                    }
                }, t.isComplete = c, t.isSelection = u, t.isValid = f, t.refreshFromBuffer = d, 
                t.revalidateMask = m;
                var a = i(4713), n = i(2839), r = i(8711), o = i(6030);
                function s(e, t, i, n, o, l) {
                    var c, u, p, d, h, m, v, g, k, y, b, x = this, P = this.dependencyLib, w = this.opts, S = x.maskset, M = P.extend(!0, [], S.validPositions), _ = P.extend(!0, {}, S.tests), O = !1, E = !1, T = void 0 !== o ? o : r.getLastValidPosition.call(x);
                    if (l && (y = l.begin, b = l.end, l.begin > l.end && (y = l.end, b = l.begin)), 
                    -1 === T && void 0 === o) c = 0, u = (d = a.getTest.call(x, c)).alternation; else for (;0 <= T; T--) if ((p = S.validPositions[T]) && void 0 !== p.alternation) {
                        if (d && d.locator[p.alternation] !== p.locator[p.alternation]) break;
                        c = T, u = S.validPositions[c].alternation, d = p;
                    }
                    if (void 0 !== u) {
                        v = parseInt(c), S.excludes[v] = S.excludes[v] || [], !0 !== e && S.excludes[v].push((0, 
                        a.getDecisionTaker)(d) + ":" + d.alternation);
                        var D = [], j = -1;
                        for (h = v; h < r.getLastValidPosition.call(x, void 0, !0) + 1; h++) -1 === j && e <= h && void 0 !== t && (D.push(t), 
                        j = D.length - 1), (m = S.validPositions[h]) && !0 !== m.generatedInput && (void 0 === l || h < y || b <= h) && D.push(m.input), 
                        delete S.validPositions[h];
                        for (-1 === j && void 0 !== t && (D.push(t), j = D.length - 1); void 0 !== S.excludes[v] && S.excludes[v].length < 10; ) {
                            for (S.tests = {}, r.resetMaskSet.call(x, !0), O = !0, h = 0; h < D.length && (g = O.caret || r.getLastValidPosition.call(x, void 0, !0) + 1, 
                            k = D[h], O = f.call(x, g, k, !1, n, !0)); h++) h === j && (E = O), 1 == e && O && (E = {
                                caretPos: h
                            });
                            if (O) break;
                            if (r.resetMaskSet.call(x), d = a.getTest.call(x, v), S.validPositions = P.extend(!0, [], M), 
                            S.tests = P.extend(!0, {}, _), !S.excludes[v]) {
                                E = s.call(x, e, t, i, n, v - 1, l);
                                break;
                            }
                            var A = (0, a.getDecisionTaker)(d);
                            if (-1 !== S.excludes[v].indexOf(A + ":" + d.alternation)) {
                                E = s.call(x, e, t, i, n, v - 1, l);
                                break;
                            }
                            for (S.excludes[v].push(A + ":" + d.alternation), h = v; h < r.getLastValidPosition.call(x, void 0, !0) + 1; h++) delete S.validPositions[h];
                        }
                    }
                    return E && !1 === w.keepStatic || delete S.excludes[v], E;
                }
                function l(e, t, i) {
                    var a = this.opts, r = this.maskset;
                    switch (a.casing || t.casing) {
                      case "upper":
                        e = e.toUpperCase();
                        break;

                      case "lower":
                        e = e.toLowerCase();
                        break;

                      case "title":
                        var o = r.validPositions[i - 1];
                        e = 0 === i || o && o.input === String.fromCharCode(n.keyCode.Space) ? e.toUpperCase() : e.toLowerCase();
                        break;

                      default:
                        if ("function" == typeof a.casing) {
                            var s = Array.prototype.slice.call(arguments);
                            s.push(r.validPositions), e = a.casing.apply(this, s);
                        }
                    }
                    return e;
                }
                function c(e) {
                    var t = this, i = this.opts, n = this.maskset;
                    if ("function" == typeof i.isComplete) return i.isComplete(e, i);
                    if ("*" !== i.repeat) {
                        var o = !1, s = r.determineLastRequiredPosition.call(t, !0), l = r.seekPrevious.call(t, s.l);
                        if (void 0 === s.def || s.def.newBlockMarker || s.def.optionality || s.def.optionalQuantifier) {
                            o = !0;
                            for (var c = 0; c <= l; c++) {
                                var u = a.getTestTemplate.call(t, c).match;
                                if (!0 !== u.static && void 0 === n.validPositions[c] && !0 !== u.optionality && !0 !== u.optionalQuantifier || !0 === u.static && e[c] !== a.getPlaceholder.call(t, c, u)) {
                                    o = !1;
                                    break;
                                }
                            }
                        }
                        return o;
                    }
                }
                function u(e) {
                    var t = this.opts.insertMode ? 0 : 1;
                    return this.isRTL ? e.begin - e.end > t : e.end - e.begin > t;
                }
                function f(e, t, i, n, o, p, v) {
                    var g = this, k = this.dependencyLib, y = this.opts, b = g.maskset;
                    i = !0 === i;
                    var x = e;
                    function P(e) {
                        if (void 0 !== e) {
                            if (void 0 !== e.remove && (Array.isArray(e.remove) || (e.remove = [ e.remove ]), 
                            e.remove.sort(function(e, t) {
                                return g.isRTL ? e.pos - t.pos : t.pos - e.pos;
                            }).forEach(function(e) {
                                m.call(g, {
                                    begin: e,
                                    end: e + 1
                                });
                            }), e.remove = void 0), void 0 !== e.insert && (Array.isArray(e.insert) || (e.insert = [ e.insert ]), 
                            e.insert.sort(function(e, t) {
                                return g.isRTL ? t.pos - e.pos : e.pos - t.pos;
                            }).forEach(function(e) {
                                "" !== e.c && f.call(g, e.pos, e.c, void 0 === e.strict || e.strict, void 0 !== e.fromIsValid ? e.fromIsValid : n);
                            }), e.insert = void 0), e.refreshFromBuffer && e.buffer) {
                                var t = e.refreshFromBuffer;
                                d.call(g, !0 === t ? t : t.start, t.end, e.buffer), e.refreshFromBuffer = void 0;
                            }
                            void 0 !== e.rewritePosition && (x = e.rewritePosition, e = !0);
                        }
                        return e;
                    }
                    function w(t, i, o) {
                        var s = !1;
                        return a.getTests.call(g, t).every(function(c, f) {
                            var p = c.match;
                            if (r.getBuffer.call(g, !0), !1 !== (s = (!p.jit || void 0 !== b.validPositions[r.seekPrevious.call(g, t)]) && (null != p.fn ? p.fn.test(i, b, t, o, y, u.call(g, e)) : (i === p.def || i === y.skipOptionalPartCharacter) && "" !== p.def && {
                                c: a.getPlaceholder.call(g, t, p, !0) || p.def,
                                pos: t
                            }))) {
                                var d = void 0 !== s.c ? s.c : i, h = t;
                                return d = d === y.skipOptionalPartCharacter && !0 === p.static ? a.getPlaceholder.call(g, t, p, !0) || p.def : d, 
                                !0 !== (s = P(s)) && void 0 !== s.pos && s.pos !== t && (h = s.pos), !0 !== s && void 0 === s.pos && void 0 === s.c || !1 === m.call(g, e, k.extend({}, c, {
                                    input: l.call(g, d, p, h)
                                }), n, h) && (s = !1), !1;
                            }
                            return !0;
                        }), s;
                    }
                    void 0 !== e.begin && (x = g.isRTL ? e.end : e.begin);
                    var S = !0, M = k.extend(!0, {}, b.validPositions);
                    if (!1 === y.keepStatic && void 0 !== b.excludes[x] && !0 !== o && !0 !== n) for (var _ = x; _ < (g.isRTL ? e.begin : e.end); _++) void 0 !== b.excludes[_] && (b.excludes[_] = void 0, 
                    delete b.tests[_]);
                    if ("function" == typeof y.preValidation && !0 !== n && !0 !== p && (S = P(S = y.preValidation.call(g, r.getBuffer.call(g), x, t, u.call(g, e), y, b, e, i || o))), 
                    !0 === S) {
                        if (S = w(x, t, i), (!i || !0 === n) && !1 === S && !0 !== p) {
                            var O = b.validPositions[x];
                            if (!O || !0 !== O.match.static || O.match.def !== t && t !== y.skipOptionalPartCharacter) {
                                if (y.insertMode || void 0 === b.validPositions[r.seekNext.call(g, x)] || e.end > x) {
                                    var E = !1;
                                    if (b.jitOffset[x] && void 0 === b.validPositions[r.seekNext.call(g, x)] && !1 !== (S = f.call(g, x + b.jitOffset[x], t, !0, !0)) && (!0 !== o && (S.caret = x), 
                                    E = !0), e.end > x && (b.validPositions[x] = void 0), !E && !r.isMask.call(g, x, y.keepStatic && 0 === x)) for (var T = x + 1, D = r.seekNext.call(g, x, !1, 0 !== x); T <= D; T++) if (!1 !== (S = w(T, t, i))) {
                                        S = h.call(g, x, void 0 !== S.pos ? S.pos : T) || S, x = T;
                                        break;
                                    }
                                }
                            } else S = {
                                caret: r.seekNext.call(g, x)
                            };
                        }
                        !1 !== S || !y.keepStatic || !c.call(g, r.getBuffer.call(g)) && 0 !== x || i || !0 === o ? u.call(g, e) && b.tests[x] && 1 < b.tests[x].length && y.keepStatic && !i && !0 !== o && (S = s.call(g, !0)) : S = s.call(g, x, t, i, n, void 0, e), 
                        !0 === S && (S = {
                            pos: x
                        });
                    }
                    if ("function" == typeof y.postValidation && !0 !== n && !0 !== p) {
                        var j = y.postValidation.call(g, r.getBuffer.call(g, !0), void 0 !== e.begin ? g.isRTL ? e.end : e.begin : e, t, S, y, b, i, v);
                        void 0 !== j && (S = !0 === j ? S : j);
                    }
                    S && void 0 === S.pos && (S.pos = x), !1 === S || !0 === p ? (r.resetMaskSet.call(g, !0), 
                    b.validPositions = k.extend(!0, [], M)) : h.call(g, void 0, x, !0);
                    var A = P(S);
                    return void 0 !== g.maxLength && r.getBuffer.call(g).length > g.maxLength && !n && (r.resetMaskSet.call(g, !0), 
                    b.validPositions = k.extend(!0, [], M), A = !1), A;
                }
                function p(e, t, i) {
                    for (var n = this.maskset, r = !1, o = a.getTests.call(this, e), s = 0; s < o.length; s++) {
                        if (o[s].match && (o[s].match.nativeDef === t.match[i.shiftPositions ? "def" : "nativeDef"] && (!i.shiftPositions || !t.match.static) || o[s].match.nativeDef === t.match.nativeDef || i.regex && !o[s].match.static && o[s].match.fn.test(t.input))) {
                            r = !0;
                            break;
                        }
                        if (o[s].match && o[s].match.def === t.match.nativeDef) {
                            r = void 0;
                            break;
                        }
                    }
                    return !1 === r && void 0 !== n.jitOffset[e] && (r = p.call(this, e + n.jitOffset[e], t, i)), 
                    r;
                }
                function d(e, t, i) {
                    var a, n, s = this, l = this.maskset, c = this.opts, u = this.dependencyLib, f = c.skipOptionalPartCharacter, p = s.isRTL ? i.slice().reverse() : i;
                    if (!(c.skipOptionalPartCharacter = "") === e) r.resetMaskSet.call(s), l.tests = {}, 
                    e = 0, t = i.length, n = r.determineNewCaretPosition.call(s, {
                        begin: 0,
                        end: 0
                    }, !1).begin; else {
                        for (a = e; a < t; a++) delete l.validPositions[a];
                        n = e;
                    }
                    var d = new u.Event("keypress");
                    for (a = e; a < t; a++) {
                        d.key = p[a].toString(), s.ignorable = !1;
                        var h = o.EventHandlers.keypressEvent.call(s, d, !0, !1, !1, n);
                        !1 !== h && void 0 !== h && (n = h.forwardPosition);
                    }
                    c.skipOptionalPartCharacter = f;
                }
                function h(e, t, i) {
                    var n = this, o = this.maskset, s = this.dependencyLib;
                    if (void 0 === e) for (e = t - 1; 0 < e && !o.validPositions[e]; e--) ;
                    for (var l = e; l < t; l++) if (void 0 === o.validPositions[l] && !r.isMask.call(n, l, !1) && (0 == l ? a.getTest.call(n, l) : o.validPositions[l - 1])) {
                        var c = a.getTests.call(n, l).slice();
                        "" === c[c.length - 1].match.def && c.pop();
                        var u, p = a.determineTestTemplate.call(n, l, c);
                        if (p && (!0 !== p.match.jit || "master" === p.match.newBlockMarker && (u = o.validPositions[l + 1]) && !0 === u.match.optionalQuantifier) && ((p = s.extend({}, p, {
                            input: a.getPlaceholder.call(n, l, p.match, !0) || p.match.def
                        })).generatedInput = !0, m.call(n, l, p, !0), !0 !== i)) {
                            var d = o.validPositions[t].input;
                            return o.validPositions[t] = void 0, f.call(n, t, d, !0, !0);
                        }
                    }
                }
                function m(e, t, i, n) {
                    var o = this, s = this.maskset, l = this.opts, c = this.dependencyLib;
                    function u(e, t, i) {
                        var a = t[e];
                        if (void 0 !== a && !0 === a.match.static && !0 !== a.match.optionality && (void 0 === t[0] || void 0 === t[0].alternation)) {
                            var n = i.begin <= e - 1 ? t[e - 1] && !0 === t[e - 1].match.static && t[e - 1] : t[e - 1], r = i.end > e + 1 ? t[e + 1] && !0 === t[e + 1].match.static && t[e + 1] : t[e + 1];
                            return n && r;
                        }
                        return !1;
                    }
                    var d = 0, h = void 0 !== e.begin ? e.begin : e, m = void 0 !== e.end ? e.end : e, v = !0;
                    if (e.begin > e.end && (h = e.end, m = e.begin), n = void 0 !== n ? n : h, void 0 === i && (h !== m || l.insertMode && void 0 !== s.validPositions[n] || void 0 === t || t.match.optionalQuantifier || t.match.optionality)) {
                        var g, k = c.extend(!0, {}, s.validPositions), y = r.getLastValidPosition.call(o, void 0, !0);
                        for (s.p = h, g = y; h <= g; g--) delete s.validPositions[g], void 0 === t && delete s.tests[g + 1];
                        var b, x, P = n, w = P;
                        for (t && (s.validPositions[n] = c.extend(!0, {}, t), w++, P++), g = t ? m : m - 1; g <= y; g++) {
                            if (void 0 !== (b = k[g]) && !0 !== b.generatedInput && (m <= g || h <= g && u(g, k, {
                                begin: h,
                                end: m
                            }))) {
                                for (;"" !== a.getTest.call(o, w).match.def; ) {
                                    if (!1 !== (x = p.call(o, w, b, l)) || "+" === b.match.def) {
                                        "+" === b.match.def && r.getBuffer.call(o, !0);
                                        var S = f.call(o, w, b.input, "+" !== b.match.def, !0);
                                        if (v = !1 !== S, P = (S.pos || w) + 1, !v && x) break;
                                    } else v = !1;
                                    if (v) {
                                        void 0 === t && b.match.static && g === e.begin && d++;
                                        break;
                                    }
                                    if (!v && r.getBuffer.call(o), w > s.maskLength) break;
                                    w++;
                                }
                                "" == a.getTest.call(o, w).match.def && (v = !1), w = P;
                            }
                            if (!v) break;
                        }
                        if (!v) return s.validPositions = c.extend(!0, [], k), r.resetMaskSet.call(o, !0), 
                        !1;
                    } else t && a.getTest.call(o, n).match.cd === t.match.cd && (s.validPositions[n] = c.extend(!0, {}, t));
                    return r.resetMaskSet.call(o, !0), d;
                }
            },
            7957: function(t) {
                t.exports = e;
            }
        }, i = {};
        function a(e) {
            var n = i[e];
            if (void 0 !== n) return n.exports;
            var r = i[e] = {
                exports: {}
            };
            return t[e](r, r.exports, a), r.exports;
        }
        var n = {};
        return function() {
            var e = n;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var t, i = (t = a(3046)) && t.__esModule ? t : {
                default: t
            };
            a(443);
            var r = i.default;
            e.default = r;
        }(), n;
    }();
}), function(root, factory) {
    "function" == typeof define && define.amd ? define([ "jquery" ], function(a0) {
        return factory(a0);
    }) : "object" == typeof module && module.exports ? module.exports = factory(require("jquery")) : factory(root.jQuery);
}(this, function(jQuery) {
    !function($) {
        "use strict";
        var toString, defineProperty, indexOf, includes;
        String.prototype.includes || (toString = {}.toString, defineProperty = function() {
            try {
                var object = {}, $defineProperty = Object.defineProperty, result = $defineProperty(object, object, object) && $defineProperty;
            } catch (error) {}
            return result;
        }(), indexOf = "".indexOf, includes = function(search) {
            if (null == this) throw new TypeError();
            var string = String(this);
            if (search && "[object RegExp]" == toString.call(search)) throw new TypeError();
            var stringLength = string.length, searchString = String(search), searchLength = searchString.length, position = 1 < arguments.length ? arguments[1] : void 0, pos = position ? Number(position) : 0;
            return pos != pos && (pos = 0), !(stringLength < searchLength + Math.min(Math.max(pos, 0), stringLength)) && -1 != indexOf.call(string, searchString, pos);
        }, defineProperty ? defineProperty(String.prototype, "includes", {
            value: includes,
            configurable: !0,
            writable: !0
        }) : String.prototype.includes = includes), String.prototype.startsWith || function() {
            var defineProperty = function() {
                try {
                    var object = {}, $defineProperty = Object.defineProperty, result = $defineProperty(object, object, object) && $defineProperty;
                } catch (error) {}
                return result;
            }(), toString = {}.toString, startsWith = function(search) {
                if (null == this) throw new TypeError();
                var string = String(this);
                if (search && "[object RegExp]" == toString.call(search)) throw new TypeError();
                var stringLength = string.length, searchString = String(search), searchLength = searchString.length, position = 1 < arguments.length ? arguments[1] : void 0, pos = position ? Number(position) : 0;
                pos != pos && (pos = 0);
                var start = Math.min(Math.max(pos, 0), stringLength);
                if (stringLength < searchLength + start) return !1;
                for (var index = -1; ++index < searchLength; ) if (string.charCodeAt(start + index) != searchString.charCodeAt(index)) return !1;
                return !0;
            };
            defineProperty ? defineProperty(String.prototype, "startsWith", {
                value: startsWith,
                configurable: !0,
                writable: !0
            }) : String.prototype.startsWith = startsWith;
        }(), Object.keys || (Object.keys = function(o, k, r) {
            for (k in r = [], o) r.hasOwnProperty.call(o, k) && r.push(k);
            return r;
        });
        var valHooks = {
            useDefault: !1,
            _set: $.valHooks.select.set
        };
        $.valHooks.select.set = function(elem, value) {
            return value && !valHooks.useDefault && $(elem).data("selected", !0), valHooks._set.apply(this, arguments);
        };
        var changed_arguments = null, EventIsSupported = function() {
            try {
                return new Event("change"), !0;
            } catch (e) {
                return !1;
            }
        }();
        function normalizeToBase(text) {
            return $.each([ {
                re: /[\xC0-\xC6]/g,
                ch: "A"
            }, {
                re: /[\xE0-\xE6]/g,
                ch: "a"
            }, {
                re: /[\xC8-\xCB]/g,
                ch: "E"
            }, {
                re: /[\xE8-\xEB]/g,
                ch: "e"
            }, {
                re: /[\xCC-\xCF]/g,
                ch: "I"
            }, {
                re: /[\xEC-\xEF]/g,
                ch: "i"
            }, {
                re: /[\xD2-\xD6]/g,
                ch: "O"
            }, {
                re: /[\xF2-\xF6]/g,
                ch: "o"
            }, {
                re: /[\xD9-\xDC]/g,
                ch: "U"
            }, {
                re: /[\xF9-\xFC]/g,
                ch: "u"
            }, {
                re: /[\xC7-\xE7]/g,
                ch: "c"
            }, {
                re: /[\xD1]/g,
                ch: "N"
            }, {
                re: /[\xF1]/g,
                ch: "n"
            } ], function() {
                text = text ? text.replace(this.re, this.ch) : "";
            }), text;
        }
        $.fn.triggerNative = function(eventName) {
            var event, el = this[0];
            el.dispatchEvent ? (EventIsSupported ? event = new Event(eventName, {
                bubbles: !0
            }) : (event = document.createEvent("Event")).initEvent(eventName, !0, !1), el.dispatchEvent(event)) : el.fireEvent ? ((event = document.createEventObject()).eventType = eventName, 
            el.fireEvent("on" + eventName, event)) : this.trigger(eventName);
        }, $.expr.pseudos.icontains = function(obj, index, meta) {
            var $obj = $(obj).find("a");
            return ($obj.data("tokens") || $obj.text()).toString().toUpperCase().includes(meta[3].toUpperCase());
        }, $.expr.pseudos.ibegins = function(obj, index, meta) {
            var $obj = $(obj).find("a");
            return ($obj.data("tokens") || $obj.text()).toString().toUpperCase().startsWith(meta[3].toUpperCase());
        }, $.expr.pseudos.aicontains = function(obj, index, meta) {
            var $obj = $(obj).find("a");
            return ($obj.data("tokens") || $obj.data("normalizedText") || $obj.text()).toString().toUpperCase().includes(meta[3].toUpperCase());
        }, $.expr.pseudos.aibegins = function(obj, index, meta) {
            var $obj = $(obj).find("a");
            return ($obj.data("tokens") || $obj.data("normalizedText") || $obj.text()).toString().toUpperCase().startsWith(meta[3].toUpperCase());
        };
        var createEscaper = function(map) {
            var escaper = function(match) {
                return map[match];
            }, source = "(?:" + Object.keys(map).join("|") + ")", testRegexp = RegExp(source), replaceRegexp = RegExp(source, "g");
            return function(string) {
                return string = null == string ? "" : "" + string, testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
            };
        }, htmlEscape = createEscaper({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        }), htmlUnescape = createEscaper({
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#x27;": "'",
            "&#x60;": "`"
        }), Selectpicker = function(element, options) {
            valHooks.useDefault || ($.valHooks.select.set = valHooks._set, valHooks.useDefault = !0), 
            this.$element = $(element), this.$newElement = null, this.$button = null, this.$menu = null, 
            this.$lis = null, this.options = options, null === this.options.title && (this.options.title = this.$element.attr("title"));
            var winPad = this.options.windowPadding;
            "number" == typeof winPad && (this.options.windowPadding = [ winPad, winPad, winPad, winPad ]), 
            this.val = Selectpicker.prototype.val, this.render = Selectpicker.prototype.render, 
            this.refresh = Selectpicker.prototype.refresh, this.setStyle = Selectpicker.prototype.setStyle, 
            this.selectAll = Selectpicker.prototype.selectAll, this.deselectAll = Selectpicker.prototype.deselectAll, 
            this.destroy = Selectpicker.prototype.destroy, this.remove = Selectpicker.prototype.remove, 
            this.show = Selectpicker.prototype.show, this.hide = Selectpicker.prototype.hide, 
            this.init();
        };
        function Plugin(option) {
            var value, args = arguments, _option = option;
            [].shift.apply(args);
            var chain = this.each(function() {
                var $this = $(this);
                if ($this.is("select")) {
                    var data = $this.data("selectpicker"), options = "object" == typeof _option && _option;
                    if (data) {
                        if (options) for (var i in options) options.hasOwnProperty(i) && (data.options[i] = options[i]);
                    } else {
                        var config = $.extend({}, Selectpicker.DEFAULTS, $.fn.selectpicker.defaults || {}, $this.data(), options);
                        config.template = $.extend({}, Selectpicker.DEFAULTS.template, $.fn.selectpicker.defaults ? $.fn.selectpicker.defaults.template : {}, $this.data().template, options.template), 
                        $this.data("selectpicker", data = new Selectpicker(this, config));
                    }
                    "string" == typeof _option && (value = data[_option] instanceof Function ? data[_option].apply(data, args) : data.options[_option]);
                }
            });
            return void 0 !== value ? value : chain;
        }
        Selectpicker.VERSION = "1.12.4", Selectpicker.DEFAULTS = {
            noneSelectedText: "Nothing selected",
            noneResultsText: "No results matched {0}",
            countSelectedText: function(numSelected, numTotal) {
                return 1 == numSelected ? "{0} item selected" : "{0} items selected";
            },
            maxOptionsText: function(numAll, numGroup) {
                return [ 1 == numAll ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == numGroup ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)" ];
            },
            selectAllText: "Select All",
            deselectAllText: "Deselect All",
            doneButton: !1,
            doneButtonText: "Close",
            multipleSeparator: ", ",
            styleBase: "btn",
            style: "btn-default",
            size: "auto",
            title: null,
            selectedTextFormat: "values",
            width: !1,
            container: !1,
            hideDisabled: !1,
            showSubtext: !1,
            showIcon: !0,
            showContent: !0,
            dropupAuto: !0,
            header: !1,
            liveSearch: !1,
            liveSearchPlaceholder: null,
            liveSearchNormalize: !1,
            liveSearchStyle: "contains",
            actionsBox: !1,
            iconBase: "glyphicon",
            tickIcon: "glyphicon-ok",
            showTick: !1,
            template: {
                caret: '<span class="caret"></span>'
            },
            maxOptions: !1,
            mobile: !1,
            selectOnTab: !1,
            dropdownAlignRight: !1,
            windowPadding: 0
        }, Selectpicker.prototype = {
            constructor: Selectpicker,
            init: function() {
                var that = this, id = this.$element.attr("id");
                this.$element.addClass("bs-select-hidden"), this.liObj = {}, this.multiple = this.$element.prop("multiple"), 
                this.autofocus = this.$element.prop("autofocus"), this.$newElement = this.createView(), 
                this.$element.after(this.$newElement).appendTo(this.$newElement), this.$button = this.$newElement.children("button"), 
                this.$menu = this.$newElement.children(".dropdown-menu"), this.$menuInner = this.$menu.children(".inner"), 
                this.$searchbox = this.$menu.find("input"), this.$element.removeClass("bs-select-hidden"), 
                !0 === this.options.dropdownAlignRight && this.$menu.addClass("dropdown-menu-right"), 
                void 0 !== id && (this.$button.attr("data-id", id), $('label[for="' + id + '"]').click(function(e) {
                    e.preventDefault(), that.$button.focus();
                })), this.checkDisabled(), this.clickListener(), this.options.liveSearch && this.liveSearchListener(), 
                this.render(), this.setStyle(), this.setWidth(), this.options.container && this.selectPosition(), 
                this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile(), 
                this.$newElement.on({
                    "hide.bs.dropdown": function(e) {
                        that.$menuInner.attr("aria-expanded", !1), that.$element.trigger("hide.bs.select", e);
                    },
                    "hidden.bs.dropdown": function(e) {
                        that.$element.trigger("hidden.bs.select", e);
                    },
                    "show.bs.dropdown": function(e) {
                        that.$menuInner.attr("aria-expanded", !0), that.$element.trigger("show.bs.select", e);
                    },
                    "shown.bs.dropdown": function(e) {
                        that.$element.trigger("shown.bs.select", e);
                    }
                }), that.$element[0].hasAttribute("required") && this.$element.on("invalid", function() {
                    that.$button.addClass("bs-invalid"), that.$element.on({
                        "focus.bs.select": function() {
                            that.$button.focus(), that.$element.off("focus.bs.select");
                        },
                        "shown.bs.select": function() {
                            that.$element.val(that.$element.val()).off("shown.bs.select");
                        },
                        "rendered.bs.select": function() {
                            this.validity.valid && that.$button.removeClass("bs-invalid"), that.$element.off("rendered.bs.select");
                        }
                    }), that.$button.on("blur.bs.select", function() {
                        that.$element.focus().blur(), that.$button.off("blur.bs.select");
                    });
                }), setTimeout(function() {
                    that.$element.trigger("loaded.bs.select");
                });
            },
            createDropdown: function() {
                var showTick = this.multiple || this.options.showTick ? " show-tick" : "", inputGroup = this.$element.parent().hasClass("input-group") ? " input-group-btn" : "", autofocus = this.autofocus ? " autofocus" : "", header = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : "", searchbox = this.options.liveSearch ? '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + htmlEscape(this.options.liveSearchPlaceholder) + '"') + ' role="textbox" aria-label="Search"></div>' : "", actionsbox = this.multiple && this.options.actionsBox ? '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">' + this.options.deselectAllText + "</button></div></div>" : "", donebutton = this.multiple && this.options.doneButton ? '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">' + this.options.doneButtonText + "</button></div></div>" : "", drop = '<div class="btn-group bootstrap-select' + showTick + inputGroup + '"><button type="button" class="' + this.options.styleBase + ' dropdown-toggle" data-toggle="dropdown"' + autofocus + ' role="button"><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">' + this.options.template.caret + '</span></button><div class="dropdown-menu open" role="combobox">' + header + searchbox + actionsbox + '<ul class="dropdown-menu inner" role="listbox" aria-expanded="false"></ul>' + donebutton + "</div></div>";
                return $(drop);
            },
            createView: function() {
                var $drop = this.createDropdown(), li = this.createLi();
                return $drop.find("ul")[0].innerHTML = li, $drop;
            },
            reloadLi: function() {
                var li = this.createLi();
                this.$menuInner[0].innerHTML = li;
            },
            createLi: function() {
                var that = this, _li = [], optID = 0, titleOption = document.createElement("option"), liIndex = -1, generateLI = function(content, index, classes, optgroup) {
                    return "<li" + (void 0 !== classes && "" !== classes ? ' class="' + classes + '"' : "") + (null != index ? ' data-original-index="' + index + '"' : "") + (null != optgroup ? 'data-optgroup="' + optgroup + '"' : "") + ">" + content + "</li>";
                }, generateA = function(text, classes, inline, tokens) {
                    return '<a tabindex="0"' + (void 0 !== classes ? ' class="' + classes + '"' : "") + (inline ? ' style="' + inline + '"' : "") + (that.options.liveSearchNormalize ? ' data-normalized-text="' + normalizeToBase(htmlEscape($(text).html())) + '"' : "") + (void 0 !== tokens || null !== tokens ? ' data-tokens="' + tokens + '"' : "") + ' role="option">' + text + '<span class="' + that.options.iconBase + " " + that.options.tickIcon + ' check-mark"></span></a>';
                };
                if (this.options.title && !this.multiple && (liIndex--, !this.$element.find(".bs-title-option").length)) {
                    var element = this.$element[0];
                    titleOption.className = "bs-title-option", titleOption.innerHTML = this.options.title, 
                    titleOption.value = "", element.insertBefore(titleOption, element.firstChild), void 0 === $(element.options[element.selectedIndex]).attr("selected") && void 0 === this.$element.data("selected") && (titleOption.selected = !0);
                }
                var $selectOptions = this.$element.find("option");
                return $selectOptions.each(function(index) {
                    var $this = $(this);
                    if (liIndex++, !$this.hasClass("bs-title-option")) {
                        var prevHiddenIndex, optionClass = this.className || "", inline = htmlEscape(this.style.cssText), text = $this.data("content") ? $this.data("content") : $this.html(), tokens = $this.data("tokens") ? $this.data("tokens") : null, subtext = void 0 !== $this.data("subtext") ? '<small class="text-muted">' + $this.data("subtext") + "</small>" : "", icon = void 0 !== $this.data("icon") ? '<span class="' + that.options.iconBase + " " + $this.data("icon") + '"></span> ' : "", $parent = $this.parent(), isOptgroup = "OPTGROUP" === $parent[0].tagName, isOptgroupDisabled = isOptgroup && $parent[0].disabled, isDisabled = this.disabled || isOptgroupDisabled;
                        if ("" !== icon && isDisabled && (icon = "<span>" + icon + "</span>"), that.options.hideDisabled && (isDisabled && !isOptgroup || isOptgroupDisabled)) return prevHiddenIndex = $this.data("prevHiddenIndex"), 
                        $this.next().data("prevHiddenIndex", void 0 !== prevHiddenIndex ? prevHiddenIndex : index), 
                        void liIndex--;
                        if ($this.data("content") || (text = icon + '<span class="text">' + text + subtext + "</span>"), 
                        isOptgroup && !0 !== $this.data("divider")) {
                            if (that.options.hideDisabled && isDisabled) {
                                if (void 0 === $parent.data("allOptionsDisabled")) {
                                    var $options = $parent.children();
                                    $parent.data("allOptionsDisabled", $options.filter(":disabled").length === $options.length);
                                }
                                if ($parent.data("allOptionsDisabled")) return void liIndex--;
                            }
                            var optGroupClass = " " + $parent[0].className || "";
                            if (0 === $this.index()) {
                                optID += 1;
                                var label = $parent[0].label, labelSubtext = void 0 !== $parent.data("subtext") ? '<small class="text-muted">' + $parent.data("subtext") + "</small>" : "";
                                label = ($parent.data("icon") ? '<span class="' + that.options.iconBase + " " + $parent.data("icon") + '"></span> ' : "") + '<span class="text">' + htmlEscape(label) + labelSubtext + "</span>", 
                                0 !== index && 0 < _li.length && (liIndex++, _li.push(generateLI("", null, "divider", optID + "div"))), 
                                liIndex++, _li.push(generateLI(label, null, "dropdown-header" + optGroupClass, optID));
                            }
                            if (that.options.hideDisabled && isDisabled) return void liIndex--;
                            _li.push(generateLI(generateA(text, "opt " + optionClass + optGroupClass, inline, tokens), index, "", optID));
                        } else if (!0 === $this.data("divider")) _li.push(generateLI("", index, "divider")); else if (!0 === $this.data("hidden")) prevHiddenIndex = $this.data("prevHiddenIndex"), 
                        $this.next().data("prevHiddenIndex", void 0 !== prevHiddenIndex ? prevHiddenIndex : index), 
                        _li.push(generateLI(generateA(text, optionClass, inline, tokens), index, "hidden is-hidden")); else {
                            var showDivider = this.previousElementSibling && "OPTGROUP" === this.previousElementSibling.tagName;
                            if (!showDivider && that.options.hideDisabled && void 0 !== (prevHiddenIndex = $this.data("prevHiddenIndex"))) {
                                var prevHidden = $selectOptions.eq(prevHiddenIndex)[0].previousElementSibling;
                                prevHidden && "OPTGROUP" === prevHidden.tagName && !prevHidden.disabled && (showDivider = !0);
                            }
                            showDivider && (liIndex++, _li.push(generateLI("", null, "divider", optID + "div"))), 
                            _li.push(generateLI(generateA(text, optionClass, inline, tokens), index));
                        }
                        that.liObj[index] = liIndex;
                    }
                }), this.multiple || 0 !== this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"), 
                _li.join("");
            },
            findLis: function() {
                return null == this.$lis && (this.$lis = this.$menu.find("li")), this.$lis;
            },
            render: function(updateLi) {
                var notDisabled, that = this, $selectOptions = this.$element.find("option");
                !1 !== updateLi && $selectOptions.each(function(index) {
                    var $lis = that.findLis().eq(that.liObj[index]);
                    that.setDisabled(index, this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled, $lis), 
                    that.setSelected(index, this.selected, $lis);
                }), this.togglePlaceholder(), this.tabIndex();
                var selectedItems = $selectOptions.map(function() {
                    if (this.selected) {
                        if (that.options.hideDisabled && (this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled)) return;
                        var subtext, $this = $(this), icon = $this.data("icon") && that.options.showIcon ? '<i class="' + that.options.iconBase + " " + $this.data("icon") + '"></i> ' : "";
                        return subtext = that.options.showSubtext && $this.data("subtext") && !that.multiple ? ' <small class="text-muted">' + $this.data("subtext") + "</small>" : "", 
                        void 0 !== $this.attr("title") ? $this.attr("title") : $this.data("content") && that.options.showContent ? $this.data("content").toString() : icon + $this.html() + subtext;
                    }
                }).toArray(), title = this.multiple ? selectedItems.join(this.options.multipleSeparator) : selectedItems[0];
                if (this.multiple && -1 < this.options.selectedTextFormat.indexOf("count")) {
                    var max = this.options.selectedTextFormat.split(">");
                    if (1 < max.length && selectedItems.length > max[1] || 1 == max.length && 2 <= selectedItems.length) {
                        notDisabled = this.options.hideDisabled ? ", [disabled]" : "";
                        var totalCount = $selectOptions.not('[data-divider="true"], [data-hidden="true"]' + notDisabled).length;
                        title = ("function" == typeof this.options.countSelectedText ? this.options.countSelectedText(selectedItems.length, totalCount) : this.options.countSelectedText).replace("{0}", selectedItems.length.toString()).replace("{1}", totalCount.toString());
                    }
                }
                null == this.options.title && (this.options.title = this.$element.attr("title")), 
                "static" == this.options.selectedTextFormat && (title = this.options.title), title || (title = void 0 !== this.options.title ? this.options.title : this.options.noneSelectedText), 
                this.$button.attr("title", htmlUnescape($.trim(title.replace(/<[^>]*>?/g, "")))), 
                this.$button.children(".filter-option").html(title), this.$element.trigger("rendered.bs.select");
            },
            setStyle: function(style, status) {
                this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ""));
                var buttonClass = style || this.options.style;
                "add" == status ? this.$button.addClass(buttonClass) : "remove" == status ? this.$button.removeClass(buttonClass) : (this.$button.removeClass(this.options.style), 
                this.$button.addClass(buttonClass));
            },
            liHeight: function(refresh) {
                if (refresh || !1 !== this.options.size && !this.sizeInfo) {
                    var newElement = document.createElement("div"), menu = document.createElement("div"), menuInner = document.createElement("ul"), divider = document.createElement("li"), li = document.createElement("li"), a = document.createElement("a"), text = document.createElement("span"), header = this.options.header && 0 < this.$menu.find(".popover-title").length ? this.$menu.find(".popover-title")[0].cloneNode(!0) : null, search = this.options.liveSearch ? document.createElement("div") : null, actions = this.options.actionsBox && this.multiple && 0 < this.$menu.find(".bs-actionsbox").length ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null, doneButton = this.options.doneButton && this.multiple && 0 < this.$menu.find(".bs-donebutton").length ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null;
                    if (text.className = "text", newElement.className = this.$menu[0].parentNode.className + " open", 
                    menu.className = "dropdown-menu open", menuInner.className = "dropdown-menu inner", 
                    divider.className = "divider", text.appendChild(document.createTextNode("Inner text")), 
                    a.appendChild(text), li.appendChild(a), menuInner.appendChild(li), menuInner.appendChild(divider), 
                    header && menu.appendChild(header), search) {
                        var input = document.createElement("input");
                        search.className = "bs-searchbox", input.className = "form-control", search.appendChild(input), 
                        menu.appendChild(search);
                    }
                    actions && menu.appendChild(actions), menu.appendChild(menuInner), doneButton && menu.appendChild(doneButton), 
                    newElement.appendChild(menu), document.body.appendChild(newElement);
                    var liHeight = a.offsetHeight, headerHeight = header ? header.offsetHeight : 0, searchHeight = search ? search.offsetHeight : 0, actionsHeight = actions ? actions.offsetHeight : 0, doneButtonHeight = doneButton ? doneButton.offsetHeight : 0, dividerHeight = $(divider).outerHeight(!0), menuStyle = "function" == typeof getComputedStyle && getComputedStyle(menu), $menu = menuStyle ? null : $(menu), menuPadding = {
                        vert: parseInt(menuStyle ? menuStyle.paddingTop : $menu.css("paddingTop")) + parseInt(menuStyle ? menuStyle.paddingBottom : $menu.css("paddingBottom")) + parseInt(menuStyle ? menuStyle.borderTopWidth : $menu.css("borderTopWidth")) + parseInt(menuStyle ? menuStyle.borderBottomWidth : $menu.css("borderBottomWidth")),
                        horiz: parseInt(menuStyle ? menuStyle.paddingLeft : $menu.css("paddingLeft")) + parseInt(menuStyle ? menuStyle.paddingRight : $menu.css("paddingRight")) + parseInt(menuStyle ? menuStyle.borderLeftWidth : $menu.css("borderLeftWidth")) + parseInt(menuStyle ? menuStyle.borderRightWidth : $menu.css("borderRightWidth"))
                    }, menuExtras = {
                        vert: menuPadding.vert + parseInt(menuStyle ? menuStyle.marginTop : $menu.css("marginTop")) + parseInt(menuStyle ? menuStyle.marginBottom : $menu.css("marginBottom")) + 2,
                        horiz: menuPadding.horiz + parseInt(menuStyle ? menuStyle.marginLeft : $menu.css("marginLeft")) + parseInt(menuStyle ? menuStyle.marginRight : $menu.css("marginRight")) + 2
                    };
                    document.body.removeChild(newElement), this.sizeInfo = {
                        liHeight: liHeight,
                        headerHeight: headerHeight,
                        searchHeight: searchHeight,
                        actionsHeight: actionsHeight,
                        doneButtonHeight: doneButtonHeight,
                        dividerHeight: dividerHeight,
                        menuPadding: menuPadding,
                        menuExtras: menuExtras
                    };
                }
            },
            setSize: function() {
                if (this.findLis(), this.liHeight(), this.options.header && this.$menu.css("padding-top", 0), 
                !1 !== this.options.size) {
                    var menuHeight, menuWidth, getHeight, getWidth, selectOffsetTop, selectOffsetBot, selectOffsetLeft, selectOffsetRight, that = this, $menu = this.$menu, $menuInner = this.$menuInner, $window = $(window), selectHeight = this.$newElement[0].offsetHeight, selectWidth = this.$newElement[0].offsetWidth, liHeight = this.sizeInfo.liHeight, headerHeight = this.sizeInfo.headerHeight, searchHeight = this.sizeInfo.searchHeight, actionsHeight = this.sizeInfo.actionsHeight, doneButtonHeight = this.sizeInfo.doneButtonHeight, divHeight = this.sizeInfo.dividerHeight, menuPadding = this.sizeInfo.menuPadding, menuExtras = this.sizeInfo.menuExtras, notDisabled = this.options.hideDisabled ? ".disabled" : "", getPos = function() {
                        var containerPos, pos = that.$newElement.offset(), $container = $(that.options.container);
                        that.options.container && !$container.is("body") ? ((containerPos = $container.offset()).top += parseInt($container.css("borderTopWidth")), 
                        containerPos.left += parseInt($container.css("borderLeftWidth"))) : containerPos = {
                            top: 0,
                            left: 0
                        };
                        var winPad = that.options.windowPadding;
                        selectOffsetTop = pos.top - containerPos.top - $window.scrollTop(), selectOffsetBot = $window.height() - selectOffsetTop - selectHeight - containerPos.top - winPad[2], 
                        selectOffsetLeft = pos.left - containerPos.left - $window.scrollLeft(), selectOffsetRight = $window.width() - selectOffsetLeft - selectWidth - containerPos.left - winPad[1], 
                        selectOffsetTop -= winPad[0], selectOffsetLeft -= winPad[3];
                    };
                    if (getPos(), "auto" === this.options.size) {
                        var getSize = function() {
                            var minHeight, hasClass = function(className, include) {
                                return function(element) {
                                    return include ? element.classList ? element.classList.contains(className) : $(element).hasClass(className) : !(element.classList ? element.classList.contains(className) : $(element).hasClass(className));
                                };
                            }, lis = that.$menuInner[0].getElementsByTagName("li"), lisVisible = Array.prototype.filter ? Array.prototype.filter.call(lis, hasClass("hidden", !1)) : that.$lis.not(".hidden"), optGroup = Array.prototype.filter ? Array.prototype.filter.call(lisVisible, hasClass("dropdown-header", !0)) : lisVisible.filter(".dropdown-header");
                            getPos(), menuHeight = selectOffsetBot - menuExtras.vert, menuWidth = selectOffsetRight - menuExtras.horiz, 
                            that.options.container ? ($menu.data("height") || $menu.data("height", $menu.height()), 
                            getHeight = $menu.data("height"), $menu.data("width") || $menu.data("width", $menu.width()), 
                            getWidth = $menu.data("width")) : (getHeight = $menu.height(), getWidth = $menu.width()), 
                            that.options.dropupAuto && that.$newElement.toggleClass("dropup", selectOffsetBot < selectOffsetTop && menuHeight - menuExtras.vert < getHeight), 
                            that.$newElement.hasClass("dropup") && (menuHeight = selectOffsetTop - menuExtras.vert), 
                            "auto" === that.options.dropdownAlignRight && $menu.toggleClass("dropdown-menu-right", selectOffsetRight < selectOffsetLeft && menuWidth - menuExtras.horiz < getWidth - selectWidth), 
                            minHeight = 3 < lisVisible.length + optGroup.length ? 3 * liHeight + menuExtras.vert - 2 : 0, 
                            $menu.css({
                                "max-height": menuHeight + "px",
                                overflow: "hidden",
                                "min-height": minHeight + headerHeight + searchHeight + actionsHeight + doneButtonHeight + "px"
                            }), $menuInner.css({
                                "max-height": menuHeight - headerHeight - searchHeight - actionsHeight - doneButtonHeight - menuPadding.vert + "px",
                                "overflow-y": "auto",
                                "min-height": Math.max(minHeight - menuPadding.vert, 0) + "px"
                            });
                        };
                        getSize(), this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize", getSize), 
                        $window.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize", getSize);
                    } else if (this.options.size && "auto" != this.options.size && this.$lis.not(notDisabled).length > this.options.size) {
                        var optIndex = this.$lis.not(".divider").not(notDisabled).children().slice(0, this.options.size).last().parent().index(), divLength = this.$lis.slice(0, optIndex + 1).filter(".divider").length;
                        menuHeight = liHeight * this.options.size + divLength * divHeight + menuPadding.vert, 
                        that.options.container ? ($menu.data("height") || $menu.data("height", $menu.height()), 
                        getHeight = $menu.data("height")) : getHeight = $menu.height(), that.options.dropupAuto && this.$newElement.toggleClass("dropup", selectOffsetBot < selectOffsetTop && menuHeight - menuExtras.vert < getHeight), 
                        $menu.css({
                            "max-height": menuHeight + headerHeight + searchHeight + actionsHeight + doneButtonHeight + "px",
                            overflow: "hidden",
                            "min-height": ""
                        }), $menuInner.css({
                            "max-height": menuHeight - menuPadding.vert + "px",
                            "overflow-y": "auto",
                            "min-height": ""
                        });
                    }
                }
            },
            setWidth: function() {
                if ("auto" === this.options.width) {
                    this.$menu.css("min-width", "0");
                    var $selectClone = this.$menu.parent().clone().appendTo("body"), $selectClone2 = this.options.container ? this.$newElement.clone().appendTo("body") : $selectClone, ulWidth = $selectClone.children(".dropdown-menu").outerWidth(), btnWidth = $selectClone2.css("width", "auto").children("button").outerWidth();
                    $selectClone.remove(), $selectClone2.remove(), this.$newElement.css("width", Math.max(ulWidth, btnWidth) + "px");
                } else "fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), 
                this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), 
                this.$newElement.css("width", ""));
                this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width");
            },
            selectPosition: function() {
                this.$bsContainer = $('<div class="bs-container" />');
                var pos, containerPos, actualHeight, that = this, $container = $(this.options.container), getPlacement = function($element) {
                    that.$bsContainer.addClass($element.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass("dropup", $element.hasClass("dropup")), 
                    pos = $element.offset(), $container.is("body") ? containerPos = {
                        top: 0,
                        left: 0
                    } : ((containerPos = $container.offset()).top += parseInt($container.css("borderTopWidth")) - $container.scrollTop(), 
                    containerPos.left += parseInt($container.css("borderLeftWidth")) - $container.scrollLeft()), 
                    actualHeight = $element.hasClass("dropup") ? 0 : $element[0].offsetHeight, that.$bsContainer.css({
                        top: pos.top - containerPos.top + actualHeight,
                        left: pos.left - containerPos.left,
                        width: $element[0].offsetWidth
                    });
                };
                this.$button.on("click", function() {
                    var $this = $(this);
                    that.isDisabled() || (getPlacement(that.$newElement), that.$bsContainer.appendTo(that.options.container).toggleClass("open", !$this.hasClass("open")).append(that.$menu));
                }), $(window).on("resize scroll", function() {
                    getPlacement(that.$newElement);
                }), this.$element.on("hide.bs.select", function() {
                    that.$menu.data("height", that.$menu.height()), that.$bsContainer.detach();
                });
            },
            setSelected: function(index, selected, $lis) {
                $lis || (this.togglePlaceholder(), $lis = this.findLis().eq(this.liObj[index])), 
                $lis.toggleClass("selected", selected).find("a").attr("aria-selected", selected);
            },
            setDisabled: function(index, disabled, $lis) {
                $lis || ($lis = this.findLis().eq(this.liObj[index])), disabled ? $lis.addClass("disabled").children("a").attr("href", "#").attr("tabindex", -1).attr("aria-disabled", !0) : $lis.removeClass("disabled").children("a").removeAttr("href").attr("tabindex", 0).attr("aria-disabled", !1);
            },
            isDisabled: function() {
                return this.$element[0].disabled;
            },
            checkDisabled: function() {
                var that = this;
                this.isDisabled() ? (this.$newElement.addClass("disabled"), this.$button.addClass("disabled").attr("tabindex", -1).attr("aria-disabled", !0)) : (this.$button.hasClass("disabled") && (this.$newElement.removeClass("disabled"), 
                this.$button.removeClass("disabled").attr("aria-disabled", !1)), -1 != this.$button.attr("tabindex") || this.$element.data("tabindex") || this.$button.removeAttr("tabindex")), 
                this.$button.click(function() {
                    return !that.isDisabled();
                });
            },
            togglePlaceholder: function() {
                var value = this.$element.val();
                this.$button.toggleClass("bs-placeholder", null === value || "" === value || value.constructor === Array && 0 === value.length);
            },
            tabIndex: function() {
                this.$element.data("tabindex") !== this.$element.attr("tabindex") && -98 !== this.$element.attr("tabindex") && "-98" !== this.$element.attr("tabindex") && (this.$element.data("tabindex", this.$element.attr("tabindex")), 
                this.$button.attr("tabindex", this.$element.data("tabindex"))), this.$element.attr("tabindex", -98);
            },
            clickListener: function() {
                var that = this, $document = $(document);
                $document.data("spaceSelect", !1), this.$button.on("keyup", function(e) {
                    /(32)/.test(e.keyCode.toString(10)) && $document.data("spaceSelect") && (e.preventDefault(), 
                    $document.data("spaceSelect", !1));
                }), this.$button.on("click", function() {
                    that.setSize();
                }), this.$element.on("shown.bs.select", function() {
                    if (that.options.liveSearch || that.multiple) {
                        if (!that.multiple) {
                            var selectedIndex = that.liObj[that.$element[0].selectedIndex];
                            if ("number" != typeof selectedIndex || !1 === that.options.size) return;
                            var offset = that.$lis.eq(selectedIndex)[0].offsetTop - that.$menuInner[0].offsetTop;
                            offset = offset - that.$menuInner[0].offsetHeight / 2 + that.sizeInfo.liHeight / 2, 
                            that.$menuInner[0].scrollTop = offset;
                        }
                    } else that.$menuInner.find(".selected a").focus();
                }), this.$menuInner.on("click", "li a", function(e) {
                    var $this = $(this), clickedIndex = $this.parent().data("originalIndex"), prevValue = that.$element.val(), prevIndex = that.$element.prop("selectedIndex"), triggerChange = !0;
                    if (that.multiple && 1 !== that.options.maxOptions && e.stopPropagation(), e.preventDefault(), 
                    !that.isDisabled() && !$this.parent().hasClass("disabled")) {
                        var $options = that.$element.find("option"), $option = $options.eq(clickedIndex), state = $option.prop("selected"), $optgroup = $option.parent("optgroup"), maxOptions = that.options.maxOptions, maxOptionsGrp = $optgroup.data("maxOptions") || !1;
                        if (that.multiple) {
                            if ($option.prop("selected", !state), that.setSelected(clickedIndex, !state), $this.blur(), 
                            !1 !== maxOptions || !1 !== maxOptionsGrp) {
                                var maxReached = maxOptions < $options.filter(":selected").length, maxReachedGrp = maxOptionsGrp < $optgroup.find("option:selected").length;
                                if (maxOptions && maxReached || maxOptionsGrp && maxReachedGrp) if (maxOptions && 1 == maxOptions) $options.prop("selected", !1), 
                                $option.prop("selected", !0), that.$menuInner.find(".selected").removeClass("selected"), 
                                that.setSelected(clickedIndex, !0); else if (maxOptionsGrp && 1 == maxOptionsGrp) {
                                    $optgroup.find("option:selected").prop("selected", !1), $option.prop("selected", !0);
                                    var optgroupID = $this.parent().data("optgroup");
                                    that.$menuInner.find('[data-optgroup="' + optgroupID + '"]').removeClass("selected"), 
                                    that.setSelected(clickedIndex, !0);
                                } else {
                                    var maxOptionsText = "string" == typeof that.options.maxOptionsText ? [ that.options.maxOptionsText, that.options.maxOptionsText ] : that.options.maxOptionsText, maxOptionsArr = "function" == typeof maxOptionsText ? maxOptionsText(maxOptions, maxOptionsGrp) : maxOptionsText, maxTxt = maxOptionsArr[0].replace("{n}", maxOptions), maxTxtGrp = maxOptionsArr[1].replace("{n}", maxOptionsGrp), $notify = $('<div class="notify"></div>');
                                    maxOptionsArr[2] && (maxTxt = maxTxt.replace("{var}", maxOptionsArr[2][1 < maxOptions ? 0 : 1]), 
                                    maxTxtGrp = maxTxtGrp.replace("{var}", maxOptionsArr[2][1 < maxOptionsGrp ? 0 : 1])), 
                                    $option.prop("selected", !1), that.$menu.append($notify), maxOptions && maxReached && ($notify.append($("<div>" + maxTxt + "</div>")), 
                                    triggerChange = !1, that.$element.trigger("maxReached.bs.select")), maxOptionsGrp && maxReachedGrp && ($notify.append($("<div>" + maxTxtGrp + "</div>")), 
                                    triggerChange = !1, that.$element.trigger("maxReachedGrp.bs.select")), setTimeout(function() {
                                        that.setSelected(clickedIndex, !1);
                                    }, 10), $notify.delay(750).fadeOut(300, function() {
                                        $(this).remove();
                                    });
                                }
                            }
                        } else $options.prop("selected", !1), $option.prop("selected", !0), that.$menuInner.find(".selected").removeClass("selected").find("a").attr("aria-selected", !1), 
                        that.setSelected(clickedIndex, !0);
                        !that.multiple || that.multiple && 1 === that.options.maxOptions ? that.$button.focus() : that.options.liveSearch && that.$searchbox.focus(), 
                        triggerChange && (prevValue != that.$element.val() && that.multiple || prevIndex != that.$element.prop("selectedIndex") && !that.multiple) && (changed_arguments = [ clickedIndex, $option.prop("selected"), state ], 
                        that.$element.triggerNative("change"));
                    }
                }), this.$menu.on("click", "li.disabled a, .popover-title, .popover-title :not(.close)", function(e) {
                    e.currentTarget == this && (e.preventDefault(), e.stopPropagation(), that.options.liveSearch && !$(e.target).hasClass("close") ? that.$searchbox.focus() : that.$button.focus());
                }), this.$menuInner.on("click", ".divider, .dropdown-header", function(e) {
                    e.preventDefault(), e.stopPropagation(), that.options.liveSearch ? that.$searchbox.focus() : that.$button.focus();
                }), this.$menu.on("click", ".popover-title .close", function() {
                    that.$button.click();
                }), this.$searchbox.on("click", function(e) {
                    e.stopPropagation();
                }), this.$menu.on("click", ".actions-btn", function(e) {
                    that.options.liveSearch ? that.$searchbox.focus() : that.$button.focus(), e.preventDefault(), 
                    e.stopPropagation(), $(this).hasClass("bs-select-all") ? that.selectAll() : that.deselectAll();
                }), this.$element.change(function() {
                    that.render(!1), that.$element.trigger("changed.bs.select", changed_arguments), 
                    changed_arguments = null;
                });
            },
            liveSearchListener: function() {
                var that = this, $no_results = $('<li class="no-results"></li>');
                this.$button.on("click.dropdown.data-api", function() {
                    that.$menuInner.find(".active").removeClass("active"), that.$searchbox.val() && (that.$searchbox.val(""), 
                    that.$lis.not(".is-hidden").removeClass("hidden"), $no_results.parent().length && $no_results.remove()), 
                    that.multiple || that.$menuInner.find(".selected").addClass("active"), setTimeout(function() {
                        that.$searchbox.focus();
                    }, 10);
                }), this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api", function(e) {
                    e.stopPropagation();
                }), this.$searchbox.on("input propertychange", function() {
                    if (that.$lis.not(".is-hidden").removeClass("hidden"), that.$lis.filter(".active").removeClass("active"), 
                    $no_results.remove(), that.$searchbox.val()) {
                        var $hideItems, $searchBase = that.$lis.not(".is-hidden, .divider, .dropdown-header");
                        if (($hideItems = that.options.liveSearchNormalize ? $searchBase.not(":a" + that._searchStyle() + '("' + normalizeToBase(that.$searchbox.val()) + '")') : $searchBase.not(":" + that._searchStyle() + '("' + that.$searchbox.val() + '")')).length === $searchBase.length) $no_results.html(that.options.noneResultsText.replace("{0}", '"' + htmlEscape(that.$searchbox.val()) + '"')), 
                        that.$menuInner.append($no_results), that.$lis.addClass("hidden"); else {
                            $hideItems.addClass("hidden");
                            var $foundDiv, $lisVisible = that.$lis.not(".hidden");
                            $lisVisible.each(function(index) {
                                var $this = $(this);
                                $this.hasClass("divider") ? void 0 === $foundDiv ? $this.addClass("hidden") : ($foundDiv && $foundDiv.addClass("hidden"), 
                                $foundDiv = $this) : $this.hasClass("dropdown-header") && $lisVisible.eq(index + 1).data("optgroup") !== $this.data("optgroup") ? $this.addClass("hidden") : $foundDiv = null;
                            }), $foundDiv && $foundDiv.addClass("hidden"), $searchBase.not(".hidden").first().addClass("active"), 
                            that.$menuInner.scrollTop(0);
                        }
                    }
                });
            },
            _searchStyle: function() {
                return {
                    begins: "ibegins",
                    startsWith: "ibegins"
                }[this.options.liveSearchStyle] || "icontains";
            },
            val: function(value) {
                return void 0 !== value ? (this.$element.val(value), this.render(), this.$element) : this.$element.val();
            },
            changeAll: function(status) {
                if (this.multiple) {
                    void 0 === status && (status = !0), this.findLis();
                    var $options = this.$element.find("option"), $lisVisible = this.$lis.not(".divider, .dropdown-header, .disabled, .hidden"), lisVisLen = $lisVisible.length, selectedOptions = [];
                    if (status) {
                        if ($lisVisible.filter(".selected").length === $lisVisible.length) return;
                    } else if (0 === $lisVisible.filter(".selected").length) return;
                    $lisVisible.toggleClass("selected", status);
                    for (var i = 0; i < lisVisLen; i++) {
                        var origIndex = $lisVisible[i].getAttribute("data-original-index");
                        selectedOptions[selectedOptions.length] = $options.eq(origIndex)[0];
                    }
                    $(selectedOptions).prop("selected", status), this.render(!1), this.togglePlaceholder(), 
                    this.$element.triggerNative("change");
                }
            },
            selectAll: function() {
                return this.changeAll(!0);
            },
            deselectAll: function() {
                return this.changeAll(!1);
            },
            toggle: function(e) {
                (e = e || window.event) && e.stopPropagation(), this.$button.trigger("click");
            },
            keydown: function(e) {
                var $items, index, prevIndex, isActive, $this = $(this), that = ($this.is("input") ? $this.parent().parent() : $this.parent()).data("this"), selector = ":not(.disabled, .hidden, .dropdown-header, .divider)", keyCodeMap = {
                    32: " ",
                    48: "0",
                    49: "1",
                    50: "2",
                    51: "3",
                    52: "4",
                    53: "5",
                    54: "6",
                    55: "7",
                    56: "8",
                    57: "9",
                    59: ";",
                    65: "a",
                    66: "b",
                    67: "c",
                    68: "d",
                    69: "e",
                    70: "f",
                    71: "g",
                    72: "h",
                    73: "i",
                    74: "j",
                    75: "k",
                    76: "l",
                    77: "m",
                    78: "n",
                    79: "o",
                    80: "p",
                    81: "q",
                    82: "r",
                    83: "s",
                    84: "t",
                    85: "u",
                    86: "v",
                    87: "w",
                    88: "x",
                    89: "y",
                    90: "z",
                    96: "0",
                    97: "1",
                    98: "2",
                    99: "3",
                    100: "4",
                    101: "5",
                    102: "6",
                    103: "7",
                    104: "8",
                    105: "9"
                };
                if (!(isActive = that.$newElement.hasClass("open")) && (48 <= e.keyCode && e.keyCode <= 57 || 96 <= e.keyCode && e.keyCode <= 105 || 65 <= e.keyCode && e.keyCode <= 90)) return that.options.container ? that.$button.trigger("click") : (that.setSize(), 
                that.$menu.parent().addClass("open"), isActive = !0), void that.$searchbox.focus();
                if (that.options.liveSearch && /(^9$|27)/.test(e.keyCode.toString(10)) && isActive && (e.preventDefault(), 
                e.stopPropagation(), that.$menuInner.click(), that.$button.focus()), /(38|40)/.test(e.keyCode.toString(10))) {
                    if (!($items = that.$lis.filter(selector)).length) return;
                    index = that.options.liveSearch ? $items.index($items.filter(".active")) : $items.index($items.find("a").filter(":focus").parent()), 
                    prevIndex = that.$menuInner.data("prevIndex"), 38 == e.keyCode ? (!that.options.liveSearch && index != prevIndex || -1 == index || index--, 
                    index < 0 && (index += $items.length)) : 40 == e.keyCode && ((that.options.liveSearch || index == prevIndex) && index++, 
                    index %= $items.length), that.$menuInner.data("prevIndex", index), that.options.liveSearch ? (e.preventDefault(), 
                    $this.hasClass("dropdown-toggle") || ($items.removeClass("active").eq(index).addClass("active").children("a").focus(), 
                    $this.focus())) : $items.eq(index).children("a").focus();
                } else if (!$this.is("input")) {
                    var count, keyIndex = [];
                    ($items = that.$lis.filter(selector)).each(function(i) {
                        $.trim($(this).children("a").text().toLowerCase()).substring(0, 1) == keyCodeMap[e.keyCode] && keyIndex.push(i);
                    }), count = $(document).data("keycount"), count++, $(document).data("keycount", count), 
                    $.trim($(":focus").text().toLowerCase()).substring(0, 1) != keyCodeMap[e.keyCode] ? (count = 1, 
                    $(document).data("keycount", count)) : count >= keyIndex.length && ($(document).data("keycount", 0), 
                    count > keyIndex.length && (count = 1)), $items.eq(keyIndex[count - 1]).children("a").focus();
                }
                if ((/(13|32)/.test(e.keyCode.toString(10)) || /(^9$)/.test(e.keyCode.toString(10)) && that.options.selectOnTab) && isActive) {
                    if (/(32)/.test(e.keyCode.toString(10)) || e.preventDefault(), that.options.liveSearch) /(32)/.test(e.keyCode.toString(10)) || (that.$menuInner.find(".active a").click(), 
                    $this.focus()); else {
                        var elem = $(":focus");
                        elem.click(), elem.focus(), e.preventDefault(), $(document).data("spaceSelect", !0);
                    }
                    $(document).data("keycount", 0);
                }
                (/(^9$|27)/.test(e.keyCode.toString(10)) && isActive && (that.multiple || that.options.liveSearch) || /(27)/.test(e.keyCode.toString(10)) && !isActive) && (that.$menu.parent().removeClass("open"), 
                that.options.container && that.$newElement.removeClass("open"), that.$button.focus());
            },
            mobile: function() {
                this.$element.addClass("mobile-device");
            },
            refresh: function() {
                this.$lis = null, this.liObj = {}, this.reloadLi(), this.render(), this.checkDisabled(), 
                this.liHeight(!0), this.setStyle(), this.setWidth(), this.$lis && this.$searchbox.trigger("propertychange"), 
                this.$element.trigger("refreshed.bs.select");
            },
            hide: function() {
                this.$newElement.hide();
            },
            show: function() {
                this.$newElement.show();
            },
            remove: function() {
                this.$newElement.remove(), this.$element.remove();
            },
            destroy: function() {
                this.$newElement.before(this.$element).remove(), this.$bsContainer ? this.$bsContainer.remove() : this.$menu.remove(), 
                this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker");
            }
        };
        var old = $.fn.selectpicker;
        $.fn.selectpicker = Plugin, $.fn.selectpicker.Constructor = Selectpicker, $.fn.selectpicker.noConflict = function() {
            return $.fn.selectpicker = old, this;
        }, $(document).data("keycount", 0).on("keydown.bs.select", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input', Selectpicker.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input', function(e) {
            e.stopPropagation();
        }), $(window).on("load.bs.select.data-api", function() {
            $(".selectpicker").each(function() {
                var $selectpicker = $(this);
                Plugin.call($selectpicker, $selectpicker.data());
            });
        });
    }(jQuery);
}), function($) {
    $.fn.loading = function() {
        var DEFAULTS_backgroundColor = "#eaeaea", DEFAULTS_progressColor = "#F47920", DEFAULTS_percent = 75, DEFAULTS_duration = 2e3;
        $(this).each(function() {
            var $target = $(this), opts = {
                backgroundColor: $target.data("color") ? $target.data("color").split(",")[0] : DEFAULTS_backgroundColor,
                progressColor: $target.data("color") ? $target.data("color").split(",")[1] : DEFAULTS_progressColor,
                percent: $target.data("percent") ? $target.data("percent") : DEFAULTS_percent,
                duration: $target.data("duration") ? $target.data("duration") : DEFAULTS_duration
            };
            $target.append('<div class="background"></div><div class="rotate"></div><div class="left"></div><div class="right"></div><div class=""><span>' + opts.percent + "%</span></div>"), 
            $target.find(".background").css("background-color", opts.backgroundColor), $target.find(".left").css("background-color", opts.backgroundColor), 
            $target.find(".rotate").css("background-color", opts.progressColor), $target.find(".right").css("background-color", opts.progressColor);
            var $rotate = $target.find(".rotate");
            if (setTimeout(function() {
                $rotate.css({
                    transition: "transform " + opts.duration + "ms linear",
                    transform: "rotate(" + 3.6 * opts.percent + "deg)"
                });
            }, 1), 50 < opts.percent) {
                var animationRight = "toggle " + opts.duration / opts.percent * 50 + "ms step-end", animationLeft = "toggle " + opts.duration / opts.percent * 50 + "ms step-start";
                $target.find(".right").css({
                    animation: animationRight,
                    opacity: 1
                }), $target.find(".left").css({
                    animation: animationLeft,
                    opacity: 0
                });
            }
        });
    };
}(jQuery);