var map, EasyAutocomplete = function(a) {
    return a.main = function(b, c) {
        function d() {
            return 0 === t.length ? void p.error("Input field doesn't exist.") : o.checkDataUrlProperties() ? o.checkRequiredProperties() ? (e(), 
            void function() {
                function c() {
                    t.off("keyup").keyup(function(a) {
                        function b(a) {
                            function b() {
                                var a = {}, b = o.get("ajaxSettings") || {};
                                for (var c in b) a[c] = b[c];
                                return a;
                            }
                            function c(a, b) {
                                return !1 === o.get("matchResponseProperty") || ("string" == typeof o.get("matchResponseProperty") ? b[o.get("matchResponseProperty")] === a : "function" != typeof o.get("matchResponseProperty") || o.get("matchResponseProperty")(b) === a);
                            }
                            if (!(a.length < o.get("minCharNumber"))) {
                                if ("list-required" !== o.get("data")) {
                                    var d = o.get("data"), e = r.init(d);
                                    e = r.updateCategories(e, d), k(e = r.processData(e, a), a), 0 < t.parent().find("li").length ? h() : i();
                                }
                                var f = b();
                                void 0 !== f.url && "" !== f.url || (f.url = o.get("url")), void 0 !== f.dataType && "" !== f.dataType || (f.dataType = o.get("dataType")), 
                                void 0 !== f.url && "list-required" !== f.url && (f.url = f.url(a), f.data = o.get("preparePostData")(f.data, a), 
                                $.ajax(f).done(function(b) {
                                    var d = r.init(b);
                                    d = r.updateCategories(d, b), d = r.convertXml(d), c(a, b) && k(d = r.processData(d, a), a), 
                                    r.checkIfDataExists(d) && 0 < t.parent().find("li").length ? h() : i(), o.get("ajaxCallback")();
                                }).fail(function() {
                                    p.warning("Fail to load response data");
                                }).always(function() {}));
                            }
                        }
                        switch (a.keyCode) {
                          case 27:
                            i(), t.trigger("blur");
                            break;

                          case 38:
                            a.preventDefault(), 0 < v.length && 0 < w && (w -= 1, t.val(o.get("getValue")(v[w])), 
                            j(w));
                            break;

                          case 40:
                            a.preventDefault(), 0 < v.length && w < v.length - 1 && (w += 1, t.val(o.get("getValue")(v[w])), 
                            j(w));
                            break;

                          default:
                            if (40 < a.keyCode || 8 === a.keyCode) {
                                var c = t.val();
                                !0 !== o.get("list").hideOnEmptyPhrase || 8 !== a.keyCode || "" !== c ? 0 < o.get("requestDelay") ? (void 0 !== m && clearTimeout(m), 
                                m = setTimeout(function() {
                                    b(c);
                                }, o.get("requestDelay"))) : b(c) : i();
                            }
                        }
                    });
                }
                s("autocompleteOff", !0) && t.attr("autocomplete", "off"), t.focusout(function() {
                    var a, b = t.val();
                    o.get("list").match.caseSensitive || (b = b.toLowerCase());
                    for (var c = 0, d = v.length; c < d; c += 1) if (a = o.get("getValue")(v[c]), o.get("list").match.caseSensitive || (a = a.toLowerCase()), 
                    a === b) return void j(w = c);
                }), c(), t.on("keydown", function(a) {
                    var b = (a = a || window.event).keyCode;
                    return 38 === b ? !(suppressKeypress = !0) : void 0;
                }).keydown(function(a) {
                    13 === a.keyCode && -1 < w && (t.val(o.get("getValue")(v[w])), o.get("list").onKeyEnterEvent(), 
                    o.get("list").onChooseEvent(), w = -1, i(), a.preventDefault());
                }), t.off("keypress"), t.focus(function() {
                    "" !== t.val() && 0 < v.length && (w = -1, h());
                }), t.blur(function() {
                    setTimeout(function() {
                        w = -1, i();
                    }, 250);
                });
            }()) : void p.error("Will not work without mentioned properties.") : void p.error("One of options variables 'data' or 'url' must be defined.");
        }
        function e() {
            function g(a, b) {
                return o.get("highlightPhrase") && "" !== b ? function(a, b) {
                    var c = function(a) {
                        return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
                    }(b);
                    return (a + "").replace(new RegExp("(" + c + ")", "gi"), "<b>$1</b>");
                }(a, b) : a;
            }
            t.parent().hasClass(n.getValue("WRAPPER_CSS_CLASS")) && (t.next("." + n.getValue("CONTAINER_CLASS")).remove(), 
            t.unwrap()), function() {
                var a = $("<div>"), c = n.getValue("WRAPPER_CSS_CLASS");
                o.get("theme") && "" !== o.get("theme") && (c += " eac-" + o.get("theme")), o.get("cssClasses") && "" !== o.get("cssClasses") && (c += " " + o.get("cssClasses")), 
                "" !== q.getTemplateClass() && (c += " " + q.getTemplateClass()), a.addClass(c), 
                t.wrap(a), !0 === o.get("adjustWidth") && function() {
                    var a = t.outerWidth();
                    t.parent().css("width", a);
                }();
            }(), function() {
                var a = $("<div>").addClass(n.getValue("CONTAINER_CLASS"));
                a.attr("id", f()).prepend($("<ul>")), a.on("show.eac", function() {
                    switch (o.get("list").showAnimation.type) {
                      case "slide":
                        var b = o.get("list").showAnimation.time, c = o.get("list").showAnimation.callback;
                        a.find("ul").slideDown(b, c);
                        break;

                      case "fade":
                        b = o.get("list").showAnimation.time, c = o.get("list").showAnimation.callback, 
                        a.find("ul").fadeIn(b);
                        break;

                      default:
                        a.find("ul").show();
                    }
                    o.get("list").onShowListEvent();
                }).on("hide.eac", function() {
                    switch (o.get("list").hideAnimation.type) {
                      case "slide":
                        var b = o.get("list").hideAnimation.time, c = o.get("list").hideAnimation.callback;
                        a.find("ul").slideUp(b, c);
                        break;

                      case "fade":
                        b = o.get("list").hideAnimation.time, c = o.get("list").hideAnimation.callback, 
                        a.find("ul").fadeOut(b, c);
                        break;

                      default:
                        a.find("ul").hide();
                    }
                    o.get("list").onHideListEvent();
                }).on("selectElement.eac", function() {
                    a.find("ul li").removeClass("selected"), a.find("ul li").eq(w).addClass("selected"), 
                    o.get("list").onSelectItemEvent();
                }).on("loadElements.eac", function(b, c, d) {
                    var e = "", f = a.find("ul");
                    f.empty().detach(), v = [];
                    for (var h = 0, i = 0, k = c.length; i < k; i += 1) {
                        var l = c[i].data;
                        if (0 !== l.length) {
                            void 0 !== c[i].header && 0 < c[i].header.length && f.append("<div class='eac-category' >" + c[i].header + "</div>");
                            for (var m = 0, n = l.length; m < n && h < c[i].maxListSize; m += 1) e = $("<li><div class='eac-item'></div></li>"), 
                            function() {
                                var a = m, b = h, f = c[i].getValue(l[a]);
                                e.find(" > div").on("click", function() {
                                    t.val(f).trigger("change"), j(w = b), o.get("list").onClickEvent(), o.get("list").onChooseEvent();
                                }).mouseover(function() {
                                    j(w = b), o.get("list").onMouseOverEvent();
                                }).mouseout(function() {
                                    o.get("list").onMouseOutEvent();
                                }).html(q.build(g(f, d), l[a]));
                            }(), f.append(e), v.push(l[m]), h += 1;
                        }
                    }
                    a.append(f), o.get("list").onLoadEvent();
                }), t.after(a);
            }(), u = $("#" + f()), o.get("placeholder") && t.attr("placeholder", o.get("placeholder"));
        }
        function f() {
            var a = t.attr("id");
            return n.getValue("CONTAINER_ID") + a;
        }
        function h() {
            u.trigger("show.eac");
        }
        function i() {
            u.trigger("hide.eac");
        }
        function j(a) {
            u.trigger("selectElement.eac", a);
        }
        function k(a, b) {
            u.trigger("loadElements.eac", [ a, b ]);
        }
        var m, n = new a.Constans(), o = new a.Configuration(c), p = new a.Logger(), q = new a.Template(c.template), r = new a.ListBuilderService(o, a.proccess), s = o.equals, t = b, u = "", v = [], w = -1;
        a.consts = n, this.getConstants = function() {
            return n;
        }, this.getConfiguration = function() {
            return o;
        }, this.getContainer = function() {
            return u;
        }, this.getSelectedItemIndex = function() {
            return w;
        }, this.getItems = function() {
            return v;
        }, this.getItemData = function(a) {
            return v.length < a || void 0 === v[a] ? -1 : v[a];
        }, this.getSelectedItemData = function() {
            return this.getItemData(w);
        }, this.build = function() {
            e();
        }, this.init = function() {
            d();
        };
    }, a.eacHandles = [], a.getHandle = function(b) {
        return a.eacHandles[b];
    }, a.inputHasId = function(a) {
        return void 0 !== $(a).attr("id") && 0 < $(a).attr("id").length;
    }, a.assignRandomId = function(b) {
        for (var c = ""; c = "eac-" + Math.floor(1e4 * Math.random()), 0 !== $("#" + c).length; ) ;
        elementId = a.consts.getValue("CONTAINER_ID") + c, $(b).attr("id", c);
    }, a.setHandle = function(b, c) {
        a.eacHandles[c] = b;
    }, a;
}((EasyAutocomplete = function(a) {
    return a.Template = function(a) {
        var b = {
            basic: {
                type: "basic",
                method: function(a) {
                    return a;
                },
                cssClass: ""
            },
            description: {
                type: "description",
                fields: {
                    description: "description"
                },
                method: function(a) {
                    return a + " - description";
                },
                cssClass: "eac-description"
            },
            iconLeft: {
                type: "iconLeft",
                fields: {
                    icon: ""
                },
                method: function(a) {
                    return a;
                },
                cssClass: "eac-icon-left"
            },
            iconRight: {
                type: "iconRight",
                fields: {
                    iconSrc: ""
                },
                method: function(a) {
                    return a;
                },
                cssClass: "eac-icon-right"
            },
            links: {
                type: "links",
                fields: {
                    link: ""
                },
                method: function(a) {
                    return a;
                },
                cssClass: ""
            },
            custom: {
                type: "custom",
                method: function() {},
                cssClass: ""
            }
        };
        this.getTemplateClass = function(a) {
            return a && a.type && a.type && b[a.type] ? function() {
                var c = b[a.type].cssClass;
                return function() {
                    return c;
                };
            }() : function() {
                return "";
            };
        }(a), this.build = function(a) {
            return a && a.type && a.type && b[a.type] ? function(a) {
                var c, d = a.fields;
                return "description" === a.type ? (c = b.description.method, "string" == typeof d.description ? c = function(a, b) {
                    return a + " - <span>" + b[d.description] + "</span>";
                } : "function" == typeof d.description && (c = function(a, b) {
                    return a + " - <span>" + d.description(b) + "</span>";
                }), c) : "iconRight" === a.type ? ("string" == typeof d.iconSrc ? c = function(a, b) {
                    return a + "<img class='eac-icon' src='" + b[d.iconSrc] + "' />";
                } : "function" == typeof d.iconSrc && (c = function(a, b) {
                    return a + "<img class='eac-icon' src='" + d.iconSrc(b) + "' />";
                }), c) : "iconLeft" === a.type ? ("string" == typeof d.iconSrc ? c = function(a, b) {
                    return "<img class='eac-icon' src='" + b[d.iconSrc] + "' />" + a;
                } : "function" == typeof d.iconSrc && (c = function(a, b) {
                    return "<img class='eac-icon' src='" + d.iconSrc(b) + "' />" + a;
                }), c) : "links" === a.type ? ("string" == typeof d.link ? c = function(a, b) {
                    return "<a href='" + b[d.link] + "' >" + a + "</a>";
                } : "function" == typeof d.link && (c = function(a, b) {
                    return "<a href='" + d.link(b) + "' >" + a + "</a>";
                }), c) : "custom" === a.type ? a.method : b.basic.method;
            }(a) : b.basic.method;
        }(a);
    }, a;
}((EasyAutocomplete = function(a) {
    return a.proccess = function(b, c, d) {
        function f(a, c) {
            return b.get("list").match.caseSensitive || ("string" == typeof a && (a = a.toLowerCase()), 
            c = c.toLowerCase()), !!b.get("list").match.method(a, c);
        }
        a.proccess.match = f;
        var i = c.data;
        return function(a) {
            return b.get("list").sort.enabled && a.sort(b.get("list").sort.method), a;
        }(i = function(a) {
            return void 0 !== c.maxNumberOfElements && a.length > c.maxNumberOfElements && (a = a.slice(0, c.maxNumberOfElements)), 
            a;
        }(i = function(a, c) {
            var d = [];
            if (b.get("list").match.enabled) for (var g = 0, h = a.length; g < h; g += 1) f(b.get("getValue")(a[g]), c) && d.push(a[g]); else d = a;
            return d;
        }(i, d)));
    }, a;
}((EasyAutocomplete = function(a) {
    return a.ListBuilderService = function(a, b) {
        function c(b, c) {
            var f = {};
            if (f = "XML" === a.get("dataType").toUpperCase() ? function() {
                var d, e = {};
                return void 0 !== b.xmlElementName && (e.xmlElementName = b.xmlElementName), void 0 !== b.listLocation ? d = b.listLocation : void 0 !== a.get("listLocation") && (d = a.get("listLocation")), 
                void 0 !== d ? "string" == typeof d ? e.data = $(c).find(d) : "function" == typeof d && (e.data = d(c)) : e.data = c, 
                e;
            }() : function() {
                var a = {};
                return void 0 !== b.listLocation ? "string" == typeof b.listLocation ? a.data = c[b.listLocation] : "function" == typeof b.listLocation && (a.data = b.listLocation(c)) : a.data = c, 
                a;
            }(), void 0 !== b.header && (f.header = b.header), void 0 !== b.maxNumberOfElements && (f.maxNumberOfElements = b.maxNumberOfElements), 
            void 0 !== a.get("list").maxNumberOfElements && (f.maxListSize = a.get("list").maxNumberOfElements), 
            void 0 !== b.getValue) if ("string" == typeof b.getValue) {
                var g = b.getValue;
                f.getValue = function(a) {
                    return a[g];
                };
            } else "function" == typeof b.getValue && (f.getValue = b.getValue); else f.getValue = a.get("getValue");
            return f;
        }
        function d(b) {
            var c = [];
            return void 0 === b.xmlElementName && (b.xmlElementName = a.get("xmlElementName")), 
            $(b.data).find(b.xmlElementName).each(function() {
                c.push(this);
            }), c;
        }
        this.init = function(b) {
            var c = [], d = {};
            return d.data = a.get("listLocation")(b), d.getValue = a.get("getValue"), d.maxListSize = a.get("list").maxNumberOfElements, 
            c.push(d), c;
        }, this.updateCategories = function(b, d) {
            if (a.get("categoriesAssigned")) {
                b = [];
                for (var e = 0; e < a.get("categories").length; e += 1) {
                    var f = c(a.get("categories")[e], d);
                    b.push(f);
                }
            }
            return b;
        }, this.convertXml = function(b) {
            if ("XML" === a.get("dataType").toUpperCase()) for (var c = 0; c < b.length; c += 1) b[c].data = d(b[c]);
            return b;
        }, this.processData = function(c, d) {
            for (var e = 0, f = c.length; e < f; e += 1) c[e].data = b(a, c[e], d);
            return c;
        }, this.checkIfDataExists = function(a) {
            for (var b = 0, c = a.length; b < c; b += 1) if (void 0 !== a[b].data && a[b].data instanceof Array && 0 < a[b].data.length) return !0;
            return !1;
        };
    }, a;
}((EasyAutocomplete = function(a) {
    return a.Constans = function() {
        var a = {
            CONTAINER_CLASS: "easy-autocomplete-container",
            CONTAINER_ID: "eac-container-",
            WRAPPER_CSS_CLASS: "easy-autocomplete"
        };
        this.getValue = function(b) {
            return a[b];
        };
    }, a;
}((EasyAutocomplete = function(a) {
    return a.Logger = function() {
        this.error = function(a) {
            console.log("ERROR: " + a);
        }, this.warning = function(a) {
            console.log("WARNING: " + a);
        };
    }, a;
}((EasyAutocomplete = function(a) {
    return a.Configuration = function(a) {
        function g(a, b) {
            !function c(b, d) {
                for (var e in d) void 0 === b[e] && a.log("Property '" + e + "' does not exist in EasyAutocomplete options API."), 
                "object" == typeof b[e] && -1 === $.inArray(e, i) && c(b[e], d[e]);
            }(h, b);
        }
        var h = {
            data: "list-required",
            url: "list-required",
            dataType: "json",
            listLocation: function(a) {
                return a;
            },
            xmlElementName: "",
            getValue: function(a) {
                return a;
            },
            autocompleteOff: !0,
            placeholder: !1,
            ajaxCallback: function() {},
            matchResponseProperty: !1,
            list: {
                sort: {
                    enabled: !1,
                    method: function(a, b) {
                        return (a = h.getValue(a)) < (b = h.getValue(b)) ? -1 : b < a ? 1 : 0;
                    }
                },
                maxNumberOfElements: 6,
                hideOnEmptyPhrase: !0,
                match: {
                    enabled: !1,
                    caseSensitive: !1,
                    method: function(a, b) {
                        return -1 < a.search(b);
                    }
                },
                showAnimation: {
                    type: "normal",
                    time: 400,
                    callback: function() {}
                },
                hideAnimation: {
                    type: "normal",
                    time: 400,
                    callback: function() {}
                },
                onClickEvent: function() {},
                onSelectItemEvent: function() {},
                onLoadEvent: function() {},
                onChooseEvent: function() {},
                onKeyEnterEvent: function() {},
                onMouseOverEvent: function() {},
                onMouseOutEvent: function() {},
                onShowListEvent: function() {},
                onHideListEvent: function() {}
            },
            highlightPhrase: !0,
            theme: "",
            cssClasses: "",
            minCharNumber: 0,
            requestDelay: 0,
            adjustWidth: !0,
            ajaxSettings: {},
            preparePostData: function(a, b) {
                return a;
            },
            loggerEnabled: !0,
            template: "",
            categoriesAssigned: !1,
            categories: [ {
                maxNumberOfElements: 4
            } ]
        }, i = [ "ajaxSettings", "template" ];
        this.get = function(a) {
            return h[a];
        }, this.equals = function(a, b) {
            return !(!function(a) {
                return void 0 !== h[a] && null !== h[a];
            }(a) || h[a] !== b);
        }, this.checkDataUrlProperties = function() {
            return "list-required" !== h.url || "list-required" !== h.data;
        }, this.checkRequiredProperties = function() {
            for (var a in h) if ("required" === h[a]) return logger.error("Option " + a + " must be defined"), 
            !1;
            return !0;
        }, this.printPropertiesThatDoesntExist = function(a, b) {
            g(a, b);
        }, function() {
            if ("xml" === a.dataType && (a.getValue || (a.getValue = function(a) {
                return $(a).text();
            }), a.list || (a.list = {}), a.list.sort || (a.list.sort = {}), a.list.sort.method = function(b, c) {
                return (b = a.getValue(b)) < (c = a.getValue(c)) ? -1 : c < b ? 1 : 0;
            }, a.list.match || (a.list.match = {}), a.list.match.method = function(a, b) {
                return -1 < a.search(b);
            }), void 0 !== a.categories && a.categories instanceof Array) {
                for (var b = [], c = 0, d = a.categories.length; c < d; c += 1) {
                    var e = a.categories[c];
                    for (var f in h.categories[0]) void 0 === e[f] && (e[f] = h.categories[0][f]);
                    b.push(e);
                }
                a.categories = b;
            }
        }(), !0 === (h = function b(a, c) {
            var d = a || {};
            for (var e in a) void 0 !== c[e] && null !== c[e] && ("object" != typeof c[e] || c[e] instanceof Array ? d[e] = c[e] : b(a[e], c[e]));
            return void 0 !== c.data && null !== c.data && "object" == typeof c.data && (d.data = c.data), 
            d;
        }(h, a)).loggerEnabled && g(console, a), void 0 !== a.ajaxSettings && "object" == typeof a.ajaxSettings ? h.ajaxSettings = a.ajaxSettings : h.ajaxSettings = {}, 
        function() {
            if ("list-required" !== h.url && "function" != typeof h.url) {
                var b = h.url;
                h.url = function() {
                    return b;
                };
            }
            void 0 !== h.ajaxSettings.url && "function" != typeof h.ajaxSettings.url && (b = h.ajaxSettings.url, 
            h.ajaxSettings.url = function() {
                return b;
            });
            if ("string" == typeof h.listLocation) {
                var c = h.listLocation;
                "XML" === h.dataType.toUpperCase() ? h.listLocation = function(a) {
                    return $(a).find(c);
                } : h.listLocation = function(a) {
                    return a[c];
                };
            }
            if ("string" == typeof h.getValue) {
                var d = h.getValue;
                h.getValue = function(a) {
                    return a[d];
                };
            }
            void 0 !== a.categories && (h.categoriesAssigned = !0);
        }();
    }, a;
}(EasyAutocomplete || {})) || {})) || {})) || {})) || {})) || {})) || {});

!function(a) {
    a.fn.easyAutocomplete = function(b) {
        return this.each(function() {
            var c = a(this), d = new EasyAutocomplete.main(c, b);
            EasyAutocomplete.inputHasId(c) || EasyAutocomplete.assignRandomId(c), d.init(), 
            EasyAutocomplete.setHandle(d, c.attr("id"));
        });
    }, a.fn.getSelectedItemIndex = function() {
        var b = a(this).attr("id");
        return void 0 !== b ? EasyAutocomplete.getHandle(b).getSelectedItemIndex() : -1;
    }, a.fn.getItems = function() {
        var b = a(this).attr("id");
        return void 0 !== b ? EasyAutocomplete.getHandle(b).getItems() : -1;
    }, a.fn.getItemData = function(b) {
        var c = a(this).attr("id");
        return void 0 !== c && -1 < b ? EasyAutocomplete.getHandle(c).getItemData(b) : -1;
    }, a.fn.getSelectedItemData = function() {
        var b = a(this).attr("id");
        return void 0 !== b ? EasyAutocomplete.getHandle(b).getSelectedItemData() : -1;
    };
}(jQuery);

var icon = "https://iluiprojects.idealake.com/2023/boi-axa/assets/images/marker.png", json = "https://iluiprojects.idealake.com/2023/boi-axa/assets/js/json/branch.json", center = new google.maps.LatLng(0, 0), infowindow = new google.maps.InfoWindow(), bounds = new google.maps.LatLngBounds();

function initialize() {
    var styledMapType = new google.maps.StyledMapType([ {
        elementType: "geometry",
        stylers: [ {
            color: "#ebe3cd"
        } ]
    }, {
        elementType: "labels.text.fill",
        stylers: [ {
            color: "#523735"
        } ]
    }, {
        elementType: "labels.text.stroke",
        stylers: [ {
            color: "#f5f1e6"
        } ]
    }, {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [ {
            color: "#dedace"
        } ]
    }, {
        featureType: "administrative.land_parcel",
        elementType: "geometry.stroke",
        stylers: [ {
            color: "#dcd2be"
        } ]
    }, {
        featureType: "administrative.country",
        elementType: "geometry.stroke",
        stylers: [ {
            color: "#757170"
        } ]
    }, {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [ {
            color: "#ae9e90"
        } ]
    }, {
        featureType: "landscape.natural",
        elementType: "geometry",
        stylers: [ {
            color: "#dedace"
        } ]
    }, {
        featureType: "poi",
        elementType: "geometry",
        stylers: [ {
            color: "#dfd2ae"
        } ]
    }, {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [ {
            color: "#93817c"
        } ]
    }, {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [ {
            color: "#a5b076"
        } ]
    }, {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [ {
            color: "#447530"
        } ]
    }, {
        featureType: "road",
        elementType: "geometry",
        stylers: [ {
            color: "#f5f1e6"
        } ]
    }, {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [ {
            color: "#fdfcf8"
        } ]
    }, {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [ {
            color: "#f8c967"
        } ]
    }, {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [ {
            color: "#e9bc62"
        } ]
    }, {
        featureType: "road.highway.controlled_access",
        elementType: "geometry",
        stylers: [ {
            color: "#e98d58"
        } ]
    }, {
        featureType: "road.highway.controlled_access",
        elementType: "geometry.stroke",
        stylers: [ {
            color: "#db8555"
        } ]
    }, {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [ {
            color: "#806b63"
        } ]
    }, {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [ {
            color: "#389abf"
        } ]
    }, {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [ {
            color: "#000000"
        } ]
    } ], {
        name: "Styled Map"
    }), mapProp = {
        center: center,
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControlOptions: {
            mapTypeIds: [ "styled_map" ]
        }
    };
    (map = new google.maps.Map(document.getElementById("map"), mapProp)).mapTypes.set("styled_map", styledMapType), 
    map.setMapTypeId("styled_map"), $.getJSON(json, function(json1) {
        $.each(json1, function(key, data) {
            var latLng = new google.maps.LatLng(data.lat, data.lng), marker = new google.maps.Marker({
                position: latLng,
                map: map,
                icon: icon,
                title: data.title
            });
            bounds.extend(marker.position), map.fitBounds(bounds);
            var content = '<div class="place-detail"> ';
            content += "<h6>" + data.city + "</h6> ", content += "<p><span>Address: </span>" + data.address + "</p> ", 
            content += "<p><span>Phone No: </span>" + data.phone + "</p> ", bindInfoWindow(marker, map, infowindow, content += "</div>");
        });
    });
}

function bindInfoWindow(marker, map, infowindow, strDescription) {
    google.maps.event.addListener(marker, "click", function() {
        infowindow.setContent(strDescription), infowindow.open(map, marker);
    });
}

function branchSearch() {
    $.getJSON("https://iluiprojects.idealake.com/2023/boi-axa/assets/js/json/branch.json", function(data) {
        var cities = new Array();
        $.each(data, function(index, item) {
            -1 == cities.toString().indexOf(item.city) && cities.push(item.city);
        });
    }), $(".getCity").click(function(event) {
        "" == $(".cityName").val() ? $(".cityCont").addClass("errorField") : ($(".appendCities").show(), 
        $(".cityCont").removeClass("errorField"), $(".cityList").remove(), $.getJSON(json, function(json1) {
            $.each(json1, function(key, value) {
                $(".cityName").val().toLowerCase() == value.city.toLowerCase() && $(".appendCities").append("<ul class='cityList'><li class='entityCol'>" + value.title + "</li><li class='addressCol'>" + value.address + "</li><li class='cityCol'>" + value.city + "</li><li class='conNoCol '>" + value.phone + "</li></ul>");
            });
        }));
    }), $(".contactBtn .reset").click(function(event) {
        $(".branchForm input,.branchForm textarea").val(""), $(".branchForm input,.branchForm textarea").parent().removeClass("errorField");
    }), formValidations(), $(".contactBtn .submit").click(function(event) {
        checkRequired(), validateEmailContact(), mobVal(), $(".branchForm .formCont").hasClass("errorField") ? event.stopImmediatePropagation() : ($(".overlay2").fadeIn(), 
        $(".brachThankPopup").fadeIn());
    });
}

google.maps.event.addDomListener(window, "load", initialize);