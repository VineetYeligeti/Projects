!function(factory) {
    "function" == typeof define && define.amd ? define([ "jquery" ], factory) : factory(jQuery);
}(function($) {
    $.ui = $.ui || {};
    $.ui.version = "1.12.1";
    var orig, widgetUuid = 0, widgetSlice = Array.prototype.slice;
    $.cleanData = (orig = $.cleanData, function(elems) {
        var events, elem, i;
        for (i = 0; null != (elem = elems[i]); i++) try {
            (events = $._data(elem, "events")) && events.remove && $(elem).triggerHandler("remove");
        } catch (e) {}
        orig(elems);
    }), $.widget = function(name, base, prototype) {
        var existingConstructor, constructor, basePrototype, proxiedPrototype = {}, namespace = name.split(".")[0], fullName = namespace + "-" + (name = name.split(".")[1]);
        return prototype || (prototype = base, base = $.Widget), $.isArray(prototype) && (prototype = $.extend.apply(null, [ {} ].concat(prototype))), 
        $.expr[":"][fullName.toLowerCase()] = function(elem) {
            return !!$.data(elem, fullName);
        }, $[namespace] = $[namespace] || {}, existingConstructor = $[namespace][name], 
        constructor = $[namespace][name] = function(options, element) {
            if (!this._createWidget) return new constructor(options, element);
            arguments.length && this._createWidget(options, element);
        }, $.extend(constructor, existingConstructor, {
            version: prototype.version,
            _proto: $.extend({}, prototype),
            _childConstructors: []
        }), (basePrototype = new base()).options = $.widget.extend({}, basePrototype.options), 
        $.each(prototype, function(prop, value) {
            $.isFunction(value) ? proxiedPrototype[prop] = function() {
                function _super() {
                    return base.prototype[prop].apply(this, arguments);
                }
                function _superApply(args) {
                    return base.prototype[prop].apply(this, args);
                }
                return function() {
                    var returnValue, __super = this._super, __superApply = this._superApply;
                    return this._super = _super, this._superApply = _superApply, returnValue = value.apply(this, arguments), 
                    this._super = __super, this._superApply = __superApply, returnValue;
                };
            }() : proxiedPrototype[prop] = value;
        }), constructor.prototype = $.widget.extend(basePrototype, {
            widgetEventPrefix: existingConstructor && basePrototype.widgetEventPrefix || name
        }, proxiedPrototype, {
            constructor: constructor,
            namespace: namespace,
            widgetName: name,
            widgetFullName: fullName
        }), existingConstructor ? ($.each(existingConstructor._childConstructors, function(i, child) {
            var childPrototype = child.prototype;
            $.widget(childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto);
        }), delete existingConstructor._childConstructors) : base._childConstructors.push(constructor), 
        $.widget.bridge(name, constructor), constructor;
    }, $.widget.extend = function(target) {
        for (var key, value, input = widgetSlice.call(arguments, 1), inputIndex = 0, inputLength = input.length; inputIndex < inputLength; inputIndex++) for (key in input[inputIndex]) value = input[inputIndex][key], 
        input[inputIndex].hasOwnProperty(key) && void 0 !== value && ($.isPlainObject(value) ? target[key] = $.isPlainObject(target[key]) ? $.widget.extend({}, target[key], value) : $.widget.extend({}, value) : target[key] = value);
        return target;
    }, $.widget.bridge = function(name, object) {
        var fullName = object.prototype.widgetFullName || name;
        $.fn[name] = function(options) {
            var isMethodCall = "string" == typeof options, args = widgetSlice.call(arguments, 1), returnValue = this;
            return isMethodCall ? this.length || "instance" !== options ? this.each(function() {
                var methodValue, instance = $.data(this, fullName);
                return "instance" === options ? (returnValue = instance, !1) : instance ? $.isFunction(instance[options]) && "_" !== options.charAt(0) ? (methodValue = instance[options].apply(instance, args)) !== instance && void 0 !== methodValue ? (returnValue = methodValue && methodValue.jquery ? returnValue.pushStack(methodValue.get()) : methodValue, 
                !1) : void 0 : $.error("no such method '" + options + "' for " + name + " widget instance") : $.error("cannot call methods on " + name + " prior to initialization; attempted to call method '" + options + "'");
            }) : returnValue = void 0 : (args.length && (options = $.widget.extend.apply(null, [ options ].concat(args))), 
            this.each(function() {
                var instance = $.data(this, fullName);
                instance ? (instance.option(options || {}), instance._init && instance._init()) : $.data(this, fullName, new object(options, this));
            })), returnValue;
        };
    }, $.Widget = function() {}, $.Widget._childConstructors = [], $.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            classes: {},
            disabled: !1,
            create: null
        },
        _createWidget: function(options, element) {
            element = $(element || this.defaultElement || this)[0], this.element = $(element), 
            this.uuid = widgetUuid++, this.eventNamespace = "." + this.widgetName + this.uuid, 
            this.bindings = $(), this.hoverable = $(), this.focusable = $(), this.classesElementLookup = {}, 
            element !== this && ($.data(element, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(event) {
                    event.target === element && this.destroy();
                }
            }), this.document = $(element.style ? element.ownerDocument : element.document || element), 
            this.window = $(this.document[0].defaultView || this.document[0].parentWindow)), 
            this.options = $.widget.extend({}, this.options, this._getCreateOptions(), options), 
            this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), 
            this._trigger("create", null, this._getCreateEventData()), this._init();
        },
        _getCreateOptions: function() {
            return {};
        },
        _getCreateEventData: $.noop,
        _create: $.noop,
        _init: $.noop,
        destroy: function() {
            var that = this;
            this._destroy(), $.each(this.classesElementLookup, function(key, value) {
                that._removeClass(value, key);
            }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), 
            this.bindings.off(this.eventNamespace);
        },
        _destroy: $.noop,
        widget: function() {
            return this.element;
        },
        option: function(key, value) {
            var parts, curOption, i, options = key;
            if (0 === arguments.length) return $.widget.extend({}, this.options);
            if ("string" == typeof key) if (options = {}, key = (parts = key.split(".")).shift(), 
            parts.length) {
                for (curOption = options[key] = $.widget.extend({}, this.options[key]), i = 0; i < parts.length - 1; i++) curOption[parts[i]] = curOption[parts[i]] || {}, 
                curOption = curOption[parts[i]];
                if (key = parts.pop(), 1 === arguments.length) return void 0 === curOption[key] ? null : curOption[key];
                curOption[key] = value;
            } else {
                if (1 === arguments.length) return void 0 === this.options[key] ? null : this.options[key];
                options[key] = value;
            }
            return this._setOptions(options), this;
        },
        _setOptions: function(options) {
            var key;
            for (key in options) this._setOption(key, options[key]);
            return this;
        },
        _setOption: function(key, value) {
            return "classes" === key && this._setOptionClasses(value), this.options[key] = value, 
            "disabled" === key && this._setOptionDisabled(value), this;
        },
        _setOptionClasses: function(value) {
            var classKey, elements, currentElements;
            for (classKey in value) currentElements = this.classesElementLookup[classKey], value[classKey] !== this.options.classes[classKey] && currentElements && currentElements.length && (elements = $(currentElements.get()), 
            this._removeClass(currentElements, classKey), elements.addClass(this._classes({
                element: elements,
                keys: classKey,
                classes: value,
                add: !0
            })));
        },
        _setOptionDisabled: function(value) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!value), 
            value && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"));
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
        _classes: function(options) {
            var full = [], that = this;
            function processClassString(classes, checkOption) {
                var current, i;
                for (i = 0; i < classes.length; i++) current = that.classesElementLookup[classes[i]] || $(), 
                current = options.add ? $($.unique(current.get().concat(options.element.get()))) : $(current.not(options.element).get()), 
                that.classesElementLookup[classes[i]] = current, full.push(classes[i]), checkOption && options.classes[classes[i]] && full.push(options.classes[classes[i]]);
            }
            return options = $.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, options), this._on(options.element, {
                remove: "_untrackClassesElement"
            }), options.keys && processClassString(options.keys.match(/\S+/g) || [], !0), options.extra && processClassString(options.extra.match(/\S+/g) || []), 
            full.join(" ");
        },
        _untrackClassesElement: function(event) {
            var that = this;
            $.each(that.classesElementLookup, function(key, value) {
                -1 !== $.inArray(event.target, value) && (that.classesElementLookup[key] = $(value.not(event.target).get()));
            });
        },
        _removeClass: function(element, keys, extra) {
            return this._toggleClass(element, keys, extra, !1);
        },
        _addClass: function(element, keys, extra) {
            return this._toggleClass(element, keys, extra, !0);
        },
        _toggleClass: function(element, keys, extra, add) {
            add = "boolean" == typeof add ? add : extra;
            var shift = "string" == typeof element || null === element, options = {
                extra: shift ? keys : extra,
                keys: shift ? element : keys,
                element: shift ? this.element : element,
                add: add
            };
            return options.element.toggleClass(this._classes(options), add), this;
        },
        _on: function(suppressDisabledCheck, element, handlers) {
            var delegateElement, instance = this;
            "boolean" != typeof suppressDisabledCheck && (handlers = element, element = suppressDisabledCheck, 
            suppressDisabledCheck = !1), handlers ? (element = delegateElement = $(element), 
            this.bindings = this.bindings.add(element)) : (handlers = element, element = this.element, 
            delegateElement = this.widget()), $.each(handlers, function(event, handler) {
                function handlerProxy() {
                    if (suppressDisabledCheck || !0 !== instance.options.disabled && !$(this).hasClass("ui-state-disabled")) return ("string" == typeof handler ? instance[handler] : handler).apply(instance, arguments);
                }
                "string" != typeof handler && (handlerProxy.guid = handler.guid = handler.guid || handlerProxy.guid || $.guid++);
                var match = event.match(/^([\w:-]*)\s*(.*)$/), eventName = match[1] + instance.eventNamespace, selector = match[2];
                selector ? delegateElement.on(eventName, selector, handlerProxy) : element.on(eventName, handlerProxy);
            });
        },
        _off: function(element, eventName) {
            eventName = (eventName || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, 
            element.off(eventName).off(eventName), this.bindings = $(this.bindings.not(element).get()), 
            this.focusable = $(this.focusable.not(element).get()), this.hoverable = $(this.hoverable.not(element).get());
        },
        _delay: function(handler, delay) {
            var instance = this;
            return setTimeout(function() {
                return ("string" == typeof handler ? instance[handler] : handler).apply(instance, arguments);
            }, delay || 0);
        },
        _hoverable: function(element) {
            this.hoverable = this.hoverable.add(element), this._on(element, {
                mouseenter: function(event) {
                    this._addClass($(event.currentTarget), null, "ui-state-hover");
                },
                mouseleave: function(event) {
                    this._removeClass($(event.currentTarget), null, "ui-state-hover");
                }
            });
        },
        _focusable: function(element) {
            this.focusable = this.focusable.add(element), this._on(element, {
                focusin: function(event) {
                    this._addClass($(event.currentTarget), null, "ui-state-focus");
                },
                focusout: function(event) {
                    this._removeClass($(event.currentTarget), null, "ui-state-focus");
                }
            });
        },
        _trigger: function(type, event, data) {
            var prop, orig, callback = this.options[type];
            if (data = data || {}, (event = $.Event(event)).type = (type === this.widgetEventPrefix ? type : this.widgetEventPrefix + type).toLowerCase(), 
            event.target = this.element[0], orig = event.originalEvent) for (prop in orig) prop in event || (event[prop] = orig[prop]);
            return this.element.trigger(event, data), !($.isFunction(callback) && !1 === callback.apply(this.element[0], [ event ].concat(data)) || event.isDefaultPrevented());
        }
    }, $.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(method, defaultEffect) {
        $.Widget.prototype["_" + method] = function(element, options, callback) {
            var hasOptions;
            "string" == typeof options && (options = {
                effect: options
            });
            var effectName = options ? !0 === options || "number" == typeof options ? defaultEffect : options.effect || defaultEffect : method;
            "number" == typeof (options = options || {}) && (options = {
                duration: options
            }), hasOptions = !$.isEmptyObject(options), options.complete = callback, options.delay && element.delay(options.delay), 
            hasOptions && $.effects && $.effects.effect[effectName] ? element[method](options) : effectName !== method && element[effectName] ? element[effectName](options.duration, options.easing, callback) : element.queue(function(next) {
                $(this)[method](), callback && callback.call(element[0]), next();
            });
        };
    });
    $.widget;
    !function() {
        var cachedScrollbarWidth, max = Math.max, abs = Math.abs, rhorizontal = /left|center|right/, rvertical = /top|center|bottom/, roffset = /[\+\-]\d+(\.[\d]+)?%?/, rposition = /^\w+/, rpercent = /%$/, _position = $.fn.position;
        function getOffsets(offsets, width, height) {
            return [ parseFloat(offsets[0]) * (rpercent.test(offsets[0]) ? width / 100 : 1), parseFloat(offsets[1]) * (rpercent.test(offsets[1]) ? height / 100 : 1) ];
        }
        function parseCss(element, property) {
            return parseInt($.css(element, property), 10) || 0;
        }
        $.position = {
            scrollbarWidth: function() {
                if (void 0 !== cachedScrollbarWidth) return cachedScrollbarWidth;
                var w1, w2, div = $("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), innerDiv = div.children()[0];
                return $("body").append(div), w1 = innerDiv.offsetWidth, div.css("overflow", "scroll"), 
                w1 === (w2 = innerDiv.offsetWidth) && (w2 = div[0].clientWidth), div.remove(), cachedScrollbarWidth = w1 - w2;
            },
            getScrollInfo: function(within) {
                var overflowX = within.isWindow || within.isDocument ? "" : within.element.css("overflow-x"), overflowY = within.isWindow || within.isDocument ? "" : within.element.css("overflow-y"), hasOverflowX = "scroll" === overflowX || "auto" === overflowX && within.width < within.element[0].scrollWidth;
                return {
                    width: "scroll" === overflowY || "auto" === overflowY && within.height < within.element[0].scrollHeight ? $.position.scrollbarWidth() : 0,
                    height: hasOverflowX ? $.position.scrollbarWidth() : 0
                };
            },
            getWithinInfo: function(element) {
                var withinElement = $(element || window), isWindow = $.isWindow(withinElement[0]), isDocument = !!withinElement[0] && 9 === withinElement[0].nodeType;
                return {
                    element: withinElement,
                    isWindow: isWindow,
                    isDocument: isDocument,
                    offset: !isWindow && !isDocument ? $(element).offset() : {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: withinElement.scrollLeft(),
                    scrollTop: withinElement.scrollTop(),
                    width: withinElement.outerWidth(),
                    height: withinElement.outerHeight()
                };
            }
        }, $.fn.position = function(options) {
            if (!options || !options.of) return _position.apply(this, arguments);
            options = $.extend({}, options);
            var atOffset, targetWidth, targetHeight, targetOffset, basePosition, dimensions, elem, raw, target = $(options.of), within = $.position.getWithinInfo(options.within), scrollInfo = $.position.getScrollInfo(within), collision = (options.collision || "flip").split(" "), offsets = {};
            return dimensions = 9 === (raw = (elem = target)[0]).nodeType ? {
                width: elem.width(),
                height: elem.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : $.isWindow(raw) ? {
                width: elem.width(),
                height: elem.height(),
                offset: {
                    top: elem.scrollTop(),
                    left: elem.scrollLeft()
                }
            } : raw.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: raw.pageY,
                    left: raw.pageX
                }
            } : {
                width: elem.outerWidth(),
                height: elem.outerHeight(),
                offset: elem.offset()
            }, target[0].preventDefault && (options.at = "left top"), targetWidth = dimensions.width, 
            targetHeight = dimensions.height, targetOffset = dimensions.offset, basePosition = $.extend({}, targetOffset), 
            $.each([ "my", "at" ], function() {
                var horizontalOffset, verticalOffset, pos = (options[this] || "").split(" ");
                1 === pos.length && (pos = rhorizontal.test(pos[0]) ? pos.concat([ "center" ]) : rvertical.test(pos[0]) ? [ "center" ].concat(pos) : [ "center", "center" ]), 
                pos[0] = rhorizontal.test(pos[0]) ? pos[0] : "center", pos[1] = rvertical.test(pos[1]) ? pos[1] : "center", 
                horizontalOffset = roffset.exec(pos[0]), verticalOffset = roffset.exec(pos[1]), 
                offsets[this] = [ horizontalOffset ? horizontalOffset[0] : 0, verticalOffset ? verticalOffset[0] : 0 ], 
                options[this] = [ rposition.exec(pos[0])[0], rposition.exec(pos[1])[0] ];
            }), 1 === collision.length && (collision[1] = collision[0]), "right" === options.at[0] ? basePosition.left += targetWidth : "center" === options.at[0] && (basePosition.left += targetWidth / 2), 
            "bottom" === options.at[1] ? basePosition.top += targetHeight : "center" === options.at[1] && (basePosition.top += targetHeight / 2), 
            atOffset = getOffsets(offsets.at, targetWidth, targetHeight), basePosition.left += atOffset[0], 
            basePosition.top += atOffset[1], this.each(function() {
                var collisionPosition, using, elem = $(this), elemWidth = elem.outerWidth(), elemHeight = elem.outerHeight(), marginLeft = parseCss(this, "marginLeft"), marginTop = parseCss(this, "marginTop"), collisionWidth = elemWidth + marginLeft + parseCss(this, "marginRight") + scrollInfo.width, collisionHeight = elemHeight + marginTop + parseCss(this, "marginBottom") + scrollInfo.height, position = $.extend({}, basePosition), myOffset = getOffsets(offsets.my, elem.outerWidth(), elem.outerHeight());
                "right" === options.my[0] ? position.left -= elemWidth : "center" === options.my[0] && (position.left -= elemWidth / 2), 
                "bottom" === options.my[1] ? position.top -= elemHeight : "center" === options.my[1] && (position.top -= elemHeight / 2), 
                position.left += myOffset[0], position.top += myOffset[1], collisionPosition = {
                    marginLeft: marginLeft,
                    marginTop: marginTop
                }, $.each([ "left", "top" ], function(i, dir) {
                    $.ui.position[collision[i]] && $.ui.position[collision[i]][dir](position, {
                        targetWidth: targetWidth,
                        targetHeight: targetHeight,
                        elemWidth: elemWidth,
                        elemHeight: elemHeight,
                        collisionPosition: collisionPosition,
                        collisionWidth: collisionWidth,
                        collisionHeight: collisionHeight,
                        offset: [ atOffset[0] + myOffset[0], atOffset[1] + myOffset[1] ],
                        my: options.my,
                        at: options.at,
                        within: within,
                        elem: elem
                    });
                }), options.using && (using = function(props) {
                    var left = targetOffset.left - position.left, right = left + targetWidth - elemWidth, top = targetOffset.top - position.top, bottom = top + targetHeight - elemHeight, feedback = {
                        target: {
                            element: target,
                            left: targetOffset.left,
                            top: targetOffset.top,
                            width: targetWidth,
                            height: targetHeight
                        },
                        element: {
                            element: elem,
                            left: position.left,
                            top: position.top,
                            width: elemWidth,
                            height: elemHeight
                        },
                        horizontal: right < 0 ? "left" : 0 < left ? "right" : "center",
                        vertical: bottom < 0 ? "top" : 0 < top ? "bottom" : "middle"
                    };
                    targetWidth < elemWidth && abs(left + right) < targetWidth && (feedback.horizontal = "center"), 
                    targetHeight < elemHeight && abs(top + bottom) < targetHeight && (feedback.vertical = "middle"), 
                    max(abs(left), abs(right)) > max(abs(top), abs(bottom)) ? feedback.important = "horizontal" : feedback.important = "vertical", 
                    options.using.call(this, props, feedback);
                }), elem.offset($.extend(position, {
                    using: using
                }));
            });
        }, $.ui.position = {
            fit: {
                left: function(position, data) {
                    var newOverRight, within = data.within, withinOffset = within.isWindow ? within.scrollLeft : within.offset.left, outerWidth = within.width, collisionPosLeft = position.left - data.collisionPosition.marginLeft, overLeft = withinOffset - collisionPosLeft, overRight = collisionPosLeft + data.collisionWidth - outerWidth - withinOffset;
                    data.collisionWidth > outerWidth ? 0 < overLeft && overRight <= 0 ? (newOverRight = position.left + overLeft + data.collisionWidth - outerWidth - withinOffset, 
                    position.left += overLeft - newOverRight) : position.left = 0 < overRight && overLeft <= 0 ? withinOffset : overRight < overLeft ? withinOffset + outerWidth - data.collisionWidth : withinOffset : 0 < overLeft ? position.left += overLeft : 0 < overRight ? position.left -= overRight : position.left = max(position.left - collisionPosLeft, position.left);
                },
                top: function(position, data) {
                    var newOverBottom, within = data.within, withinOffset = within.isWindow ? within.scrollTop : within.offset.top, outerHeight = data.within.height, collisionPosTop = position.top - data.collisionPosition.marginTop, overTop = withinOffset - collisionPosTop, overBottom = collisionPosTop + data.collisionHeight - outerHeight - withinOffset;
                    data.collisionHeight > outerHeight ? 0 < overTop && overBottom <= 0 ? (newOverBottom = position.top + overTop + data.collisionHeight - outerHeight - withinOffset, 
                    position.top += overTop - newOverBottom) : position.top = 0 < overBottom && overTop <= 0 ? withinOffset : overBottom < overTop ? withinOffset + outerHeight - data.collisionHeight : withinOffset : 0 < overTop ? position.top += overTop : 0 < overBottom ? position.top -= overBottom : position.top = max(position.top - collisionPosTop, position.top);
                }
            },
            flip: {
                left: function(position, data) {
                    var newOverRight, newOverLeft, within = data.within, withinOffset = within.offset.left + within.scrollLeft, outerWidth = within.width, offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left, collisionPosLeft = position.left - data.collisionPosition.marginLeft, overLeft = collisionPosLeft - offsetLeft, overRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft, myOffset = "left" === data.my[0] ? -data.elemWidth : "right" === data.my[0] ? data.elemWidth : 0, atOffset = "left" === data.at[0] ? data.targetWidth : "right" === data.at[0] ? -data.targetWidth : 0, offset = -2 * data.offset[0];
                    overLeft < 0 ? ((newOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth - outerWidth - withinOffset) < 0 || newOverRight < abs(overLeft)) && (position.left += myOffset + atOffset + offset) : 0 < overRight && (0 < (newOverLeft = position.left - data.collisionPosition.marginLeft + myOffset + atOffset + offset - offsetLeft) || abs(newOverLeft) < overRight) && (position.left += myOffset + atOffset + offset);
                },
                top: function(position, data) {
                    var newOverTop, newOverBottom, within = data.within, withinOffset = within.offset.top + within.scrollTop, outerHeight = within.height, offsetTop = within.isWindow ? within.scrollTop : within.offset.top, collisionPosTop = position.top - data.collisionPosition.marginTop, overTop = collisionPosTop - offsetTop, overBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop, myOffset = "top" === data.my[1] ? -data.elemHeight : "bottom" === data.my[1] ? data.elemHeight : 0, atOffset = "top" === data.at[1] ? data.targetHeight : "bottom" === data.at[1] ? -data.targetHeight : 0, offset = -2 * data.offset[1];
                    overTop < 0 ? ((newOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight - outerHeight - withinOffset) < 0 || newOverBottom < abs(overTop)) && (position.top += myOffset + atOffset + offset) : 0 < overBottom && (0 < (newOverTop = position.top - data.collisionPosition.marginTop + myOffset + atOffset + offset - offsetTop) || abs(newOverTop) < overBottom) && (position.top += myOffset + atOffset + offset);
                }
            },
            flipfit: {
                left: function() {
                    $.ui.position.flip.left.apply(this, arguments), $.ui.position.fit.left.apply(this, arguments);
                },
                top: function() {
                    $.ui.position.flip.top.apply(this, arguments), $.ui.position.fit.top.apply(this, arguments);
                }
            }
        };
    }();
    $.ui.position, $.extend($.expr[":"], {
        data: $.expr.createPseudo ? $.expr.createPseudo(function(dataName) {
            return function(elem) {
                return !!$.data(elem, dataName);
            };
        }) : function(elem, i, match) {
            return !!$.data(elem, match[3]);
        }
    }), $.fn.extend({
        disableSelection: (eventType = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown", 
        function() {
            return this.on(eventType + ".ui-disableSelection", function(event) {
                event.preventDefault();
            });
        }),
        enableSelection: function() {
            return this.off(".ui-disableSelection");
        }
    });
    var eventType, baseEasings, jQuery = $;
    $.effects = {
        effect: {}
    }, function(jQuery, undefined) {
        var colors, rplusequals = /^([\-+])=\s*(\d+\.?\d*)/, stringParsers = [ {
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(execResult) {
                return [ execResult[1], execResult[2], execResult[3], execResult[4] ];
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(execResult) {
                return [ 2.55 * execResult[1], 2.55 * execResult[2], 2.55 * execResult[3], execResult[4] ];
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function(execResult) {
                return [ parseInt(execResult[1], 16), parseInt(execResult[2], 16), parseInt(execResult[3], 16) ];
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function(execResult) {
                return [ parseInt(execResult[1] + execResult[1], 16), parseInt(execResult[2] + execResult[2], 16), parseInt(execResult[3] + execResult[3], 16) ];
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function(execResult) {
                return [ execResult[1], execResult[2] / 100, execResult[3] / 100, execResult[4] ];
            }
        } ], color = jQuery.Color = function(color, green, blue, alpha) {
            return new jQuery.Color.fn.parse(color, green, blue, alpha);
        }, spaces = {
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
        }, propTypes = {
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
        }, support = color.support = {}, supportElem = jQuery("<p>")[0], each = jQuery.each;
        function clamp(value, prop, allowEmpty) {
            var type = propTypes[prop.type] || {};
            return null == value ? allowEmpty || !prop.def ? null : prop.def : (value = type.floor ? ~~value : parseFloat(value), 
            isNaN(value) ? prop.def : type.mod ? (value + type.mod) % type.mod : value < 0 ? 0 : type.max < value ? type.max : value);
        }
        function stringParse(string) {
            var inst = color(), rgba = inst._rgba = [];
            return string = string.toLowerCase(), each(stringParsers, function(i, parser) {
                var parsed, match = parser.re.exec(string), values = match && parser.parse(match), spaceName = parser.space || "rgba";
                if (values) return parsed = inst[spaceName](values), inst[spaces[spaceName].cache] = parsed[spaces[spaceName].cache], 
                rgba = inst._rgba = parsed._rgba, !1;
            }), rgba.length ? ("0,0,0,0" === rgba.join() && jQuery.extend(rgba, colors.transparent), 
            inst) : colors[string];
        }
        function hue2rgb(p, q, h) {
            return 6 * (h = (h + 1) % 1) < 1 ? p + (q - p) * h * 6 : 2 * h < 1 ? q : 3 * h < 2 ? p + (q - p) * (2 / 3 - h) * 6 : p;
        }
        supportElem.style.cssText = "background-color:rgba(1,1,1,.5)", support.rgba = -1 < supportElem.style.backgroundColor.indexOf("rgba"), 
        each(spaces, function(spaceName, space) {
            space.cache = "_" + spaceName, space.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            };
        }), color.fn = jQuery.extend(color.prototype, {
            parse: function(red, green, blue, alpha) {
                if (void 0 === red) return this._rgba = [ null, null, null, null ], this;
                (red.jquery || red.nodeType) && (red = jQuery(red).css(green), green = void 0);
                var inst = this, type = jQuery.type(red), rgba = this._rgba = [];
                return void 0 !== green && (red = [ red, green, blue, alpha ], type = "array"), 
                "string" === type ? this.parse(stringParse(red) || colors._default) : "array" === type ? (each(spaces.rgba.props, function(key, prop) {
                    rgba[prop.idx] = clamp(red[prop.idx], prop);
                }), this) : "object" === type ? (each(spaces, red instanceof color ? function(spaceName, space) {
                    red[space.cache] && (inst[space.cache] = red[space.cache].slice());
                } : function(spaceName, space) {
                    var cache = space.cache;
                    each(space.props, function(key, prop) {
                        if (!inst[cache] && space.to) {
                            if ("alpha" === key || null == red[key]) return;
                            inst[cache] = space.to(inst._rgba);
                        }
                        inst[cache][prop.idx] = clamp(red[key], prop, !0);
                    }), inst[cache] && jQuery.inArray(null, inst[cache].slice(0, 3)) < 0 && (inst[cache][3] = 1, 
                    space.from && (inst._rgba = space.from(inst[cache])));
                }), this) : void 0;
            },
            is: function(compare) {
                var is = color(compare), same = !0, inst = this;
                return each(spaces, function(_, space) {
                    var localCache, isCache = is[space.cache];
                    return isCache && (localCache = inst[space.cache] || space.to && space.to(inst._rgba) || [], 
                    each(space.props, function(_, prop) {
                        if (null != isCache[prop.idx]) return same = isCache[prop.idx] === localCache[prop.idx];
                    })), same;
                }), same;
            },
            _space: function() {
                var used = [], inst = this;
                return each(spaces, function(spaceName, space) {
                    inst[space.cache] && used.push(spaceName);
                }), used.pop();
            },
            transition: function(other, distance) {
                var end = color(other), spaceName = end._space(), space = spaces[spaceName], startColor = 0 === this.alpha() ? color("transparent") : this, start = startColor[space.cache] || space.to(startColor._rgba), result = start.slice();
                return end = end[space.cache], each(space.props, function(key, prop) {
                    var index = prop.idx, startValue = start[index], endValue = end[index], type = propTypes[prop.type] || {};
                    null !== endValue && (null === startValue ? result[index] = endValue : (type.mod && (endValue - startValue > type.mod / 2 ? startValue += type.mod : startValue - endValue > type.mod / 2 && (startValue -= type.mod)), 
                    result[index] = clamp((endValue - startValue) * distance + startValue, prop)));
                }), this[spaceName](result);
            },
            blend: function(opaque) {
                if (1 === this._rgba[3]) return this;
                var rgb = this._rgba.slice(), a = rgb.pop(), blend = color(opaque)._rgba;
                return color(jQuery.map(rgb, function(v, i) {
                    return (1 - a) * blend[i] + a * v;
                }));
            },
            toRgbaString: function() {
                var prefix = "rgba(", rgba = jQuery.map(this._rgba, function(v, i) {
                    return null == v ? 2 < i ? 1 : 0 : v;
                });
                return 1 === rgba[3] && (rgba.pop(), prefix = "rgb("), prefix + rgba.join() + ")";
            },
            toHslaString: function() {
                var prefix = "hsla(", hsla = jQuery.map(this.hsla(), function(v, i) {
                    return null == v && (v = 2 < i ? 1 : 0), i && i < 3 && (v = Math.round(100 * v) + "%"), 
                    v;
                });
                return 1 === hsla[3] && (hsla.pop(), prefix = "hsl("), prefix + hsla.join() + ")";
            },
            toHexString: function(includeAlpha) {
                var rgba = this._rgba.slice(), alpha = rgba.pop();
                return includeAlpha && rgba.push(~~(255 * alpha)), "#" + jQuery.map(rgba, function(v) {
                    return 1 === (v = (v || 0).toString(16)).length ? "0" + v : v;
                }).join("");
            },
            toString: function() {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
            }
        }), color.fn.parse.prototype = color.fn, spaces.hsla.to = function(rgba) {
            if (null == rgba[0] || null == rgba[1] || null == rgba[2]) return [ null, null, null, rgba[3] ];
            var h, s, r = rgba[0] / 255, g = rgba[1] / 255, b = rgba[2] / 255, a = rgba[3], max = Math.max(r, g, b), min = Math.min(r, g, b), diff = max - min, add = max + min, l = .5 * add;
            return h = min === max ? 0 : r === max ? 60 * (g - b) / diff + 360 : g === max ? 60 * (b - r) / diff + 120 : 60 * (r - g) / diff + 240, 
            s = 0 === diff ? 0 : l <= .5 ? diff / add : diff / (2 - add), [ Math.round(h) % 360, s, l, null == a ? 1 : a ];
        }, spaces.hsla.from = function(hsla) {
            if (null == hsla[0] || null == hsla[1] || null == hsla[2]) return [ null, null, null, hsla[3] ];
            var h = hsla[0] / 360, s = hsla[1], l = hsla[2], a = hsla[3], q = l <= .5 ? l * (1 + s) : l + s - l * s, p = 2 * l - q;
            return [ Math.round(255 * hue2rgb(p, q, h + 1 / 3)), Math.round(255 * hue2rgb(p, q, h)), Math.round(255 * hue2rgb(p, q, h - 1 / 3)), a ];
        }, each(spaces, function(spaceName, space) {
            var props = space.props, cache = space.cache, to = space.to, from = space.from;
            color.fn[spaceName] = function(value) {
                if (to && !this[cache] && (this[cache] = to(this._rgba)), void 0 === value) return this[cache].slice();
                var ret, type = jQuery.type(value), arr = "array" === type || "object" === type ? value : arguments, local = this[cache].slice();
                return each(props, function(key, prop) {
                    var val = arr["object" === type ? key : prop.idx];
                    null == val && (val = local[prop.idx]), local[prop.idx] = clamp(val, prop);
                }), from ? ((ret = color(from(local)))[cache] = local, ret) : color(local);
            }, each(props, function(key, prop) {
                color.fn[key] || (color.fn[key] = function(value) {
                    var match, vtype = jQuery.type(value), fn = "alpha" === key ? this._hsla ? "hsla" : "rgba" : spaceName, local = this[fn](), cur = local[prop.idx];
                    return "undefined" === vtype ? cur : ("function" === vtype && (value = value.call(this, cur), 
                    vtype = jQuery.type(value)), null == value && prop.empty ? this : ("string" === vtype && (match = rplusequals.exec(value)) && (value = cur + parseFloat(match[2]) * ("+" === match[1] ? 1 : -1)), 
                    local[prop.idx] = value, this[fn](local)));
                });
            });
        }), color.hook = function(hook) {
            var hooks = hook.split(" ");
            each(hooks, function(i, hook) {
                jQuery.cssHooks[hook] = {
                    set: function(elem, value) {
                        var parsed, curElem, backgroundColor = "";
                        if ("transparent" !== value && ("string" !== jQuery.type(value) || (parsed = stringParse(value)))) {
                            if (value = color(parsed || value), !support.rgba && 1 !== value._rgba[3]) {
                                for (curElem = "backgroundColor" === hook ? elem.parentNode : elem; ("" === backgroundColor || "transparent" === backgroundColor) && curElem && curElem.style; ) try {
                                    backgroundColor = jQuery.css(curElem, "backgroundColor"), curElem = curElem.parentNode;
                                } catch (e) {}
                                value = value.blend(backgroundColor && "transparent" !== backgroundColor ? backgroundColor : "_default");
                            }
                            value = value.toRgbaString();
                        }
                        try {
                            elem.style[hook] = value;
                        } catch (e) {}
                    }
                }, jQuery.fx.step[hook] = function(fx) {
                    fx.colorInit || (fx.start = color(fx.elem, hook), fx.end = color(fx.end), fx.colorInit = !0), 
                    jQuery.cssHooks[hook].set(fx.elem, fx.start.transition(fx.end, fx.pos));
                };
            });
        }, color.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"), 
        jQuery.cssHooks.borderColor = {
            expand: function(value) {
                var expanded = {};
                return each([ "Top", "Right", "Bottom", "Left" ], function(i, part) {
                    expanded["border" + part + "Color"] = value;
                }), expanded;
            }
        }, colors = jQuery.Color.names = {
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
    }(jQuery), function() {
        var orig, classAnimationActions = [ "add", "remove", "toggle" ], shorthandStyles = {
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
        function getElementStyles(elem) {
            var key, len, style = elem.ownerDocument.defaultView ? elem.ownerDocument.defaultView.getComputedStyle(elem, null) : elem.currentStyle, styles = {};
            if (style && style.length && style[0] && style[style[0]]) for (len = style.length; len--; ) "string" == typeof style[key = style[len]] && (styles[$.camelCase(key)] = style[key]); else for (key in style) "string" == typeof style[key] && (styles[key] = style[key]);
            return styles;
        }
        $.each([ "borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle" ], function(_, prop) {
            $.fx.step[prop] = function(fx) {
                ("none" !== fx.end && !fx.setAttr || 1 === fx.pos && !fx.setAttr) && (jQuery.style(fx.elem, prop, fx.end), 
                fx.setAttr = !0);
            };
        }), $.fn.addBack || ($.fn.addBack = function(selector) {
            return this.add(null == selector ? this.prevObject : this.prevObject.filter(selector));
        }), $.effects.animateClass = function(value, duration, easing, callback) {
            var o = $.speed(duration, easing, callback);
            return this.queue(function() {
                var applyClassChange, animated = $(this), baseClass = animated.attr("class") || "", allAnimations = o.children ? animated.find("*").addBack() : animated;
                allAnimations = allAnimations.map(function() {
                    return {
                        el: $(this),
                        start: getElementStyles(this)
                    };
                }), (applyClassChange = function() {
                    $.each(classAnimationActions, function(i, action) {
                        value[action] && animated[action + "Class"](value[action]);
                    });
                })(), allAnimations = allAnimations.map(function() {
                    return this.end = getElementStyles(this.el[0]), this.diff = function(oldStyle, newStyle) {
                        var name, value, diff = {};
                        for (name in newStyle) value = newStyle[name], oldStyle[name] !== value && (shorthandStyles[name] || !$.fx.step[name] && isNaN(parseFloat(value)) || (diff[name] = value));
                        return diff;
                    }(this.start, this.end), this;
                }), animated.attr("class", baseClass), allAnimations = allAnimations.map(function() {
                    var styleInfo = this, dfd = $.Deferred(), opts = $.extend({}, o, {
                        queue: !1,
                        complete: function() {
                            dfd.resolve(styleInfo);
                        }
                    });
                    return this.el.animate(this.diff, opts), dfd.promise();
                }), $.when.apply($, allAnimations.get()).done(function() {
                    applyClassChange(), $.each(arguments, function() {
                        var el = this.el;
                        $.each(this.diff, function(key) {
                            el.css(key, "");
                        });
                    }), o.complete.call(animated[0]);
                });
            });
        }, $.fn.extend({
            addClass: (orig = $.fn.addClass, function(classNames, speed, easing, callback) {
                return speed ? $.effects.animateClass.call(this, {
                    add: classNames
                }, speed, easing, callback) : orig.apply(this, arguments);
            }),
            removeClass: function(orig) {
                return function(classNames, speed, easing, callback) {
                    return 1 < arguments.length ? $.effects.animateClass.call(this, {
                        remove: classNames
                    }, speed, easing, callback) : orig.apply(this, arguments);
                };
            }($.fn.removeClass),
            toggleClass: function(orig) {
                return function(classNames, force, speed, easing, callback) {
                    return "boolean" == typeof force || void 0 === force ? speed ? $.effects.animateClass.call(this, force ? {
                        add: classNames
                    } : {
                        remove: classNames
                    }, speed, easing, callback) : orig.apply(this, arguments) : $.effects.animateClass.call(this, {
                        toggle: classNames
                    }, force, speed, easing);
                };
            }($.fn.toggleClass),
            switchClass: function(remove, add, speed, easing, callback) {
                return $.effects.animateClass.call(this, {
                    add: add,
                    remove: remove
                }, speed, easing, callback);
            }
        });
    }(), function() {
        var orig;
        function _normalizeArguments(effect, options, speed, callback) {
            return $.isPlainObject(effect) && (effect = (options = effect).effect), effect = {
                effect: effect
            }, null == options && (options = {}), $.isFunction(options) && (callback = options, 
            speed = null, options = {}), ("number" == typeof options || $.fx.speeds[options]) && (callback = speed, 
            speed = options, options = {}), $.isFunction(speed) && (callback = speed, speed = null), 
            options && $.extend(effect, options), speed = speed || options.duration, effect.duration = $.fx.off ? 0 : "number" == typeof speed ? speed : speed in $.fx.speeds ? $.fx.speeds[speed] : $.fx.speeds._default, 
            effect.complete = callback || options.complete, effect;
        }
        function standardAnimationOption(option) {
            return !(option && "number" != typeof option && !$.fx.speeds[option]) || ("string" == typeof option && !$.effects.effect[option] || (!!$.isFunction(option) || "object" == typeof option && !option.effect));
        }
        function parseClip(str, element) {
            var outerWidth = element.outerWidth(), outerHeight = element.outerHeight(), values = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(str) || [ "", 0, outerWidth, outerHeight, 0 ];
            return {
                top: parseFloat(values[1]) || 0,
                right: "auto" === values[2] ? outerWidth : parseFloat(values[2]),
                bottom: "auto" === values[3] ? outerHeight : parseFloat(values[3]),
                left: parseFloat(values[4]) || 0
            };
        }
        $.expr && $.expr.filters && $.expr.filters.animated && ($.expr.filters.animated = (orig = $.expr.filters.animated, 
        function(elem) {
            return !!$(elem).data("ui-effects-animated") || orig(elem);
        })), !1 !== $.uiBackCompat && $.extend($.effects, {
            save: function(element, set) {
                for (var i = 0, length = set.length; i < length; i++) null !== set[i] && element.data("ui-effects-" + set[i], element[0].style[set[i]]);
            },
            restore: function(element, set) {
                for (var val, i = 0, length = set.length; i < length; i++) null !== set[i] && (val = element.data("ui-effects-" + set[i]), 
                element.css(set[i], val));
            },
            setMode: function(el, mode) {
                return "toggle" === mode && (mode = el.is(":hidden") ? "show" : "hide"), mode;
            },
            createWrapper: function(element) {
                if (element.parent().is(".ui-effects-wrapper")) return element.parent();
                var props = {
                    width: element.outerWidth(!0),
                    height: element.outerHeight(!0),
                    float: element.css("float")
                }, wrapper = $("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                }), size = {
                    width: element.width(),
                    height: element.height()
                }, active = document.activeElement;
                try {
                    active.id;
                } catch (e) {
                    active = document.body;
                }
                return element.wrap(wrapper), (element[0] === active || $.contains(element[0], active)) && $(active).trigger("focus"), 
                wrapper = element.parent(), "static" === element.css("position") ? (wrapper.css({
                    position: "relative"
                }), element.css({
                    position: "relative"
                })) : ($.extend(props, {
                    position: element.css("position"),
                    zIndex: element.css("z-index")
                }), $.each([ "top", "left", "bottom", "right" ], function(i, pos) {
                    props[pos] = element.css(pos), isNaN(parseInt(props[pos], 10)) && (props[pos] = "auto");
                }), element.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), element.css(size), wrapper.css(props).show();
            },
            removeWrapper: function(element) {
                var active = document.activeElement;
                return element.parent().is(".ui-effects-wrapper") && (element.parent().replaceWith(element), 
                (element[0] === active || $.contains(element[0], active)) && $(active).trigger("focus")), 
                element;
            }
        }), $.extend($.effects, {
            version: "1.12.1",
            define: function(name, mode, effect) {
                return effect || (effect = mode, mode = "effect"), $.effects.effect[name] = effect, 
                $.effects.effect[name].mode = mode, effect;
            },
            scaledDimensions: function(element, percent, direction) {
                if (0 === percent) return {
                    height: 0,
                    width: 0,
                    outerHeight: 0,
                    outerWidth: 0
                };
                var x = "horizontal" !== direction ? (percent || 100) / 100 : 1, y = "vertical" !== direction ? (percent || 100) / 100 : 1;
                return {
                    height: element.height() * y,
                    width: element.width() * x,
                    outerHeight: element.outerHeight() * y,
                    outerWidth: element.outerWidth() * x
                };
            },
            clipToBox: function(animation) {
                return {
                    width: animation.clip.right - animation.clip.left,
                    height: animation.clip.bottom - animation.clip.top,
                    left: animation.clip.left,
                    top: animation.clip.top
                };
            },
            unshift: function(element, queueLength, count) {
                var queue = element.queue();
                1 < queueLength && queue.splice.apply(queue, [ 1, 0 ].concat(queue.splice(queueLength, count))), 
                element.dequeue();
            },
            saveStyle: function(element) {
                element.data("ui-effects-style", element[0].style.cssText);
            },
            restoreStyle: function(element) {
                element[0].style.cssText = element.data("ui-effects-style") || "", element.removeData("ui-effects-style");
            },
            mode: function(element, mode) {
                var hidden = element.is(":hidden");
                return "toggle" === mode && (mode = hidden ? "show" : "hide"), (hidden ? "hide" === mode : "show" === mode) && (mode = "none"), 
                mode;
            },
            getBaseline: function(origin, original) {
                var y, x;
                switch (origin[0]) {
                  case "top":
                    y = 0;
                    break;

                  case "middle":
                    y = .5;
                    break;

                  case "bottom":
                    y = 1;
                    break;

                  default:
                    y = origin[0] / original.height;
                }
                switch (origin[1]) {
                  case "left":
                    x = 0;
                    break;

                  case "center":
                    x = .5;
                    break;

                  case "right":
                    x = 1;
                    break;

                  default:
                    x = origin[1] / original.width;
                }
                return {
                    x: x,
                    y: y
                };
            },
            createPlaceholder: function(element) {
                var placeholder, cssPosition = element.css("position"), position = element.position();
                return element.css({
                    marginTop: element.css("marginTop"),
                    marginBottom: element.css("marginBottom"),
                    marginLeft: element.css("marginLeft"),
                    marginRight: element.css("marginRight")
                }).outerWidth(element.outerWidth()).outerHeight(element.outerHeight()), /^(static|relative)/.test(cssPosition) && (cssPosition = "absolute", 
                placeholder = $("<" + element[0].nodeName + ">").insertAfter(element).css({
                    display: /^(inline|ruby)/.test(element.css("display")) ? "inline-block" : "block",
                    visibility: "hidden",
                    marginTop: element.css("marginTop"),
                    marginBottom: element.css("marginBottom"),
                    marginLeft: element.css("marginLeft"),
                    marginRight: element.css("marginRight"),
                    float: element.css("float")
                }).outerWidth(element.outerWidth()).outerHeight(element.outerHeight()).addClass("ui-effects-placeholder"), 
                element.data("ui-effects-placeholder", placeholder)), element.css({
                    position: cssPosition,
                    left: position.left,
                    top: position.top
                }), placeholder;
            },
            removePlaceholder: function(element) {
                var dataKey = "ui-effects-placeholder", placeholder = element.data(dataKey);
                placeholder && (placeholder.remove(), element.removeData(dataKey));
            },
            cleanUp: function(element) {
                $.effects.restoreStyle(element), $.effects.removePlaceholder(element);
            },
            setTransition: function(element, list, factor, value) {
                return value = value || {}, $.each(list, function(i, x) {
                    var unit = element.cssUnit(x);
                    0 < unit[0] && (value[x] = unit[0] * factor + unit[1]);
                }), value;
            }
        }), $.fn.extend({
            effect: function() {
                var args = _normalizeArguments.apply(this, arguments), effectMethod = $.effects.effect[args.effect], defaultMode = effectMethod.mode, queue = args.queue, queueName = queue || "fx", complete = args.complete, mode = args.mode, modes = [], prefilter = function(next) {
                    var el = $(this), normalizedMode = $.effects.mode(el, mode) || defaultMode;
                    el.data("ui-effects-animated", !0), modes.push(normalizedMode), defaultMode && ("show" === normalizedMode || normalizedMode === defaultMode && "hide" === normalizedMode) && el.show(), 
                    defaultMode && "none" === normalizedMode || $.effects.saveStyle(el), $.isFunction(next) && next();
                };
                if ($.fx.off || !effectMethod) return mode ? this[mode](args.duration, complete) : this.each(function() {
                    complete && complete.call(this);
                });
                function run(next) {
                    var elem = $(this);
                    function done() {
                        $.isFunction(complete) && complete.call(elem[0]), $.isFunction(next) && next();
                    }
                    args.mode = modes.shift(), !1 === $.uiBackCompat || defaultMode ? "none" === args.mode ? (elem[mode](), 
                    done()) : effectMethod.call(elem[0], args, function() {
                        elem.removeData("ui-effects-animated"), $.effects.cleanUp(elem), "hide" === args.mode && elem.hide(), 
                        done();
                    }) : (elem.is(":hidden") ? "hide" === mode : "show" === mode) ? (elem[mode](), done()) : effectMethod.call(elem[0], args, done);
                }
                return !1 === queue ? this.each(prefilter).each(run) : this.queue(queueName, prefilter).queue(queueName, run);
            },
            show: function(orig) {
                return function(option) {
                    if (standardAnimationOption(option)) return orig.apply(this, arguments);
                    var args = _normalizeArguments.apply(this, arguments);
                    return args.mode = "show", this.effect.call(this, args);
                };
            }($.fn.show),
            hide: function(orig) {
                return function(option) {
                    if (standardAnimationOption(option)) return orig.apply(this, arguments);
                    var args = _normalizeArguments.apply(this, arguments);
                    return args.mode = "hide", this.effect.call(this, args);
                };
            }($.fn.hide),
            toggle: function(orig) {
                return function(option) {
                    if (standardAnimationOption(option) || "boolean" == typeof option) return orig.apply(this, arguments);
                    var args = _normalizeArguments.apply(this, arguments);
                    return args.mode = "toggle", this.effect.call(this, args);
                };
            }($.fn.toggle),
            cssUnit: function(key) {
                var style = this.css(key), val = [];
                return $.each([ "em", "px", "%", "pt" ], function(i, unit) {
                    0 < style.indexOf(unit) && (val = [ parseFloat(style), unit ]);
                }), val;
            },
            cssClip: function(clipObj) {
                return clipObj ? this.css("clip", "rect(" + clipObj.top + "px " + clipObj.right + "px " + clipObj.bottom + "px " + clipObj.left + "px)") : parseClip(this.css("clip"), this);
            },
            transfer: function(options, done) {
                var element = $(this), target = $(options.to), targetFixed = "fixed" === target.css("position"), body = $("body"), fixTop = targetFixed ? body.scrollTop() : 0, fixLeft = targetFixed ? body.scrollLeft() : 0, endPosition = target.offset(), animation = {
                    top: endPosition.top - fixTop,
                    left: endPosition.left - fixLeft,
                    height: target.innerHeight(),
                    width: target.innerWidth()
                }, startPosition = element.offset(), transfer = $("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(options.className).css({
                    top: startPosition.top - fixTop,
                    left: startPosition.left - fixLeft,
                    height: element.innerHeight(),
                    width: element.innerWidth(),
                    position: targetFixed ? "fixed" : "absolute"
                }).animate(animation, options.duration, options.easing, function() {
                    transfer.remove(), $.isFunction(done) && done();
                });
            }
        }), $.fx.step.clip = function(fx) {
            fx.clipInit || (fx.start = $(fx.elem).cssClip(), "string" == typeof fx.end && (fx.end = parseClip(fx.end, fx.elem)), 
            fx.clipInit = !0), $(fx.elem).cssClip({
                top: fx.pos * (fx.end.top - fx.start.top) + fx.start.top,
                right: fx.pos * (fx.end.right - fx.start.right) + fx.start.right,
                bottom: fx.pos * (fx.end.bottom - fx.start.bottom) + fx.start.bottom,
                left: fx.pos * (fx.end.left - fx.start.left) + fx.start.left
            });
        };
    }(), baseEasings = {}, $.each([ "Quad", "Cubic", "Quart", "Quint", "Expo" ], function(i, name) {
        baseEasings[name] = function(p) {
            return Math.pow(p, i + 2);
        };
    }), $.extend(baseEasings, {
        Sine: function(p) {
            return 1 - Math.cos(p * Math.PI / 2);
        },
        Circ: function(p) {
            return 1 - Math.sqrt(1 - p * p);
        },
        Elastic: function(p) {
            return 0 === p || 1 === p ? p : -Math.pow(2, 8 * (p - 1)) * Math.sin((80 * (p - 1) - 7.5) * Math.PI / 15);
        },
        Back: function(p) {
            return p * p * (3 * p - 2);
        },
        Bounce: function(p) {
            for (var pow2, bounce = 4; p < ((pow2 = Math.pow(2, --bounce)) - 1) / 11; ) ;
            return 1 / Math.pow(4, 3 - bounce) - 7.5625 * Math.pow((3 * pow2 - 2) / 22 - p, 2);
        }
    }), $.each(baseEasings, function(name, easeIn) {
        $.easing["easeIn" + name] = easeIn, $.easing["easeOut" + name] = function(p) {
            return 1 - easeIn(1 - p);
        }, $.easing["easeInOut" + name] = function(p) {
            return p < .5 ? easeIn(2 * p) / 2 : 1 - easeIn(-2 * p + 2) / 2;
        };
    });
    $.effects, $.effects.define("blind", "hide", function(options, done) {
        var map = {
            up: [ "bottom", "top" ],
            vertical: [ "bottom", "top" ],
            down: [ "top", "bottom" ],
            left: [ "right", "left" ],
            horizontal: [ "right", "left" ],
            right: [ "left", "right" ]
        }, element = $(this), direction = options.direction || "up", start = element.cssClip(), animate = {
            clip: $.extend({}, start)
        }, placeholder = $.effects.createPlaceholder(element);
        animate.clip[map[direction][0]] = animate.clip[map[direction][1]], "show" === options.mode && (element.cssClip(animate.clip), 
        placeholder && placeholder.css($.effects.clipToBox(animate)), animate.clip = start), 
        placeholder && placeholder.animate($.effects.clipToBox(animate), options.duration, options.easing), 
        element.animate(animate, {
            queue: !1,
            duration: options.duration,
            easing: options.easing,
            complete: done
        });
    }), $.effects.define("bounce", function(options, done) {
        var upAnim, downAnim, refValue, element = $(this), mode = options.mode, hide = "hide" === mode, show = "show" === mode, direction = options.direction || "up", distance = options.distance, times = options.times || 5, anims = 2 * times + (show || hide ? 1 : 0), speed = options.duration / anims, easing = options.easing, ref = "up" === direction || "down" === direction ? "top" : "left", motion = "up" === direction || "left" === direction, i = 0, queuelen = element.queue().length;
        for ($.effects.createPlaceholder(element), refValue = element.css(ref), distance || (distance = element["top" === ref ? "outerHeight" : "outerWidth"]() / 3), 
        show && ((downAnim = {
            opacity: 1
        })[ref] = refValue, element.css("opacity", 0).css(ref, motion ? 2 * -distance : 2 * distance).animate(downAnim, speed, easing)), 
        hide && (distance /= Math.pow(2, times - 1)), (downAnim = {})[ref] = refValue; i < times; i++) (upAnim = {})[ref] = (motion ? "-=" : "+=") + distance, 
        element.animate(upAnim, speed, easing).animate(downAnim, speed, easing), distance = hide ? 2 * distance : distance / 2;
        hide && ((upAnim = {
            opacity: 0
        })[ref] = (motion ? "-=" : "+=") + distance, element.animate(upAnim, speed, easing)), 
        element.queue(done), $.effects.unshift(element, queuelen, anims + 1);
    }), $.effects.define("clip", "hide", function(options, done) {
        var start, animate = {}, element = $(this), direction = options.direction || "vertical", both = "both" === direction, horizontal = both || "horizontal" === direction, vertical = both || "vertical" === direction;
        start = element.cssClip(), animate.clip = {
            top: vertical ? (start.bottom - start.top) / 2 : start.top,
            right: horizontal ? (start.right - start.left) / 2 : start.right,
            bottom: vertical ? (start.bottom - start.top) / 2 : start.bottom,
            left: horizontal ? (start.right - start.left) / 2 : start.left
        }, $.effects.createPlaceholder(element), "show" === options.mode && (element.cssClip(animate.clip), 
        animate.clip = start), element.animate(animate, {
            queue: !1,
            duration: options.duration,
            easing: options.easing,
            complete: done
        });
    }), $.effects.define("drop", "hide", function(options, done) {
        var distance, element = $(this), show = "show" === options.mode, direction = options.direction || "left", ref = "up" === direction || "down" === direction ? "top" : "left", motion = "up" === direction || "left" === direction ? "-=" : "+=", oppositeMotion = "+=" === motion ? "-=" : "+=", animation = {
            opacity: 0
        };
        $.effects.createPlaceholder(element), distance = options.distance || element["top" === ref ? "outerHeight" : "outerWidth"](!0) / 2, 
        animation[ref] = motion + distance, show && (element.css(animation), animation[ref] = oppositeMotion + distance, 
        animation.opacity = 1), element.animate(animation, {
            queue: !1,
            duration: options.duration,
            easing: options.easing,
            complete: done
        });
    }), $.effects.define("explode", "hide", function(options, done) {
        var i, j, left, top, mx, my, rows = options.pieces ? Math.round(Math.sqrt(options.pieces)) : 3, cells = rows, element = $(this), show = "show" === options.mode, offset = element.show().css("visibility", "hidden").offset(), width = Math.ceil(element.outerWidth() / cells), height = Math.ceil(element.outerHeight() / rows), pieces = [];
        function childComplete() {
            pieces.push(this), pieces.length === rows * cells && (element.css({
                visibility: "visible"
            }), $(pieces).remove(), done());
        }
        for (i = 0; i < rows; i++) for (top = offset.top + i * height, my = i - (rows - 1) / 2, 
        j = 0; j < cells; j++) left = offset.left + j * width, mx = j - (cells - 1) / 2, 
        element.clone().appendTo("body").wrap("<div></div>").css({
            position: "absolute",
            visibility: "visible",
            left: -j * width,
            top: -i * height
        }).parent().addClass("ui-effects-explode").css({
            position: "absolute",
            overflow: "hidden",
            width: width,
            height: height,
            left: left + (show ? mx * width : 0),
            top: top + (show ? my * height : 0),
            opacity: show ? 0 : 1
        }).animate({
            left: left + (show ? 0 : mx * width),
            top: top + (show ? 0 : my * height),
            opacity: show ? 1 : 0
        }, options.duration || 500, options.easing, childComplete);
    }), $.effects.define("fade", "toggle", function(options, done) {
        var show = "show" === options.mode;
        $(this).css("opacity", show ? 0 : 1).animate({
            opacity: show ? 1 : 0
        }, {
            queue: !1,
            duration: options.duration,
            easing: options.easing,
            complete: done
        });
    }), $.effects.define("fold", "hide", function(options, done) {
        var element = $(this), mode = options.mode, show = "show" === mode, hide = "hide" === mode, size = options.size || 15, percent = /([0-9]+)%/.exec(size), ref = !!options.horizFirst ? [ "right", "bottom" ] : [ "bottom", "right" ], duration = options.duration / 2, placeholder = $.effects.createPlaceholder(element), start = element.cssClip(), animation1 = {
            clip: $.extend({}, start)
        }, animation2 = {
            clip: $.extend({}, start)
        }, distance = [ start[ref[0]], start[ref[1]] ], queuelen = element.queue().length;
        percent && (size = parseInt(percent[1], 10) / 100 * distance[hide ? 0 : 1]), animation1.clip[ref[0]] = size, 
        animation2.clip[ref[0]] = size, animation2.clip[ref[1]] = 0, show && (element.cssClip(animation2.clip), 
        placeholder && placeholder.css($.effects.clipToBox(animation2)), animation2.clip = start), 
        element.queue(function(next) {
            placeholder && placeholder.animate($.effects.clipToBox(animation1), duration, options.easing).animate($.effects.clipToBox(animation2), duration, options.easing), 
            next();
        }).animate(animation1, duration, options.easing).animate(animation2, duration, options.easing).queue(done), 
        $.effects.unshift(element, queuelen, 4);
    }), $.effects.define("highlight", "show", function(options, done) {
        var element = $(this), animation = {
            backgroundColor: element.css("backgroundColor")
        };
        "hide" === options.mode && (animation.opacity = 0), $.effects.saveStyle(element), 
        element.css({
            backgroundImage: "none",
            backgroundColor: options.color || "#ffff99"
        }).animate(animation, {
            queue: !1,
            duration: options.duration,
            easing: options.easing,
            complete: done
        });
    }), $.effects.define("size", function(options, done) {
        var baseline, factor, temp, element = $(this), cProps = [ "fontSize" ], vProps = [ "borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom" ], hProps = [ "borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight" ], mode = options.mode, restore = "effect" !== mode, scale = options.scale || "both", origin = options.origin || [ "middle", "center" ], position = element.css("position"), pos = element.position(), original = $.effects.scaledDimensions(element), from = options.from || original, to = options.to || $.effects.scaledDimensions(element, 0);
        $.effects.createPlaceholder(element), "show" === mode && (temp = from, from = to, 
        to = temp), factor = {
            from: {
                y: from.height / original.height,
                x: from.width / original.width
            },
            to: {
                y: to.height / original.height,
                x: to.width / original.width
            }
        }, "box" !== scale && "both" !== scale || (factor.from.y !== factor.to.y && (from = $.effects.setTransition(element, vProps, factor.from.y, from), 
        to = $.effects.setTransition(element, vProps, factor.to.y, to)), factor.from.x !== factor.to.x && (from = $.effects.setTransition(element, hProps, factor.from.x, from), 
        to = $.effects.setTransition(element, hProps, factor.to.x, to))), "content" !== scale && "both" !== scale || factor.from.y !== factor.to.y && (from = $.effects.setTransition(element, cProps, factor.from.y, from), 
        to = $.effects.setTransition(element, cProps, factor.to.y, to)), origin && (baseline = $.effects.getBaseline(origin, original), 
        from.top = (original.outerHeight - from.outerHeight) * baseline.y + pos.top, from.left = (original.outerWidth - from.outerWidth) * baseline.x + pos.left, 
        to.top = (original.outerHeight - to.outerHeight) * baseline.y + pos.top, to.left = (original.outerWidth - to.outerWidth) * baseline.x + pos.left), 
        element.css(from), "content" !== scale && "both" !== scale || (vProps = vProps.concat([ "marginTop", "marginBottom" ]).concat(cProps), 
        hProps = hProps.concat([ "marginLeft", "marginRight" ]), element.find("*[width]").each(function() {
            var child = $(this), childOriginal = $.effects.scaledDimensions(child), childFrom = {
                height: childOriginal.height * factor.from.y,
                width: childOriginal.width * factor.from.x,
                outerHeight: childOriginal.outerHeight * factor.from.y,
                outerWidth: childOriginal.outerWidth * factor.from.x
            }, childTo = {
                height: childOriginal.height * factor.to.y,
                width: childOriginal.width * factor.to.x,
                outerHeight: childOriginal.height * factor.to.y,
                outerWidth: childOriginal.width * factor.to.x
            };
            factor.from.y !== factor.to.y && (childFrom = $.effects.setTransition(child, vProps, factor.from.y, childFrom), 
            childTo = $.effects.setTransition(child, vProps, factor.to.y, childTo)), factor.from.x !== factor.to.x && (childFrom = $.effects.setTransition(child, hProps, factor.from.x, childFrom), 
            childTo = $.effects.setTransition(child, hProps, factor.to.x, childTo)), restore && $.effects.saveStyle(child), 
            child.css(childFrom), child.animate(childTo, options.duration, options.easing, function() {
                restore && $.effects.restoreStyle(child);
            });
        })), element.animate(to, {
            queue: !1,
            duration: options.duration,
            easing: options.easing,
            complete: function() {
                var offset = element.offset();
                0 === to.opacity && element.css("opacity", from.opacity), restore || (element.css("position", "static" === position ? "relative" : position).offset(offset), 
                $.effects.saveStyle(element)), done();
            }
        });
    }), $.effects.define("scale", function(options, done) {
        var el = $(this), mode = options.mode, percent = parseInt(options.percent, 10) || (0 === parseInt(options.percent, 10) ? 0 : "effect" !== mode ? 0 : 100), newOptions = $.extend(!0, {
            from: $.effects.scaledDimensions(el),
            to: $.effects.scaledDimensions(el, percent, options.direction || "both"),
            origin: options.origin || [ "middle", "center" ]
        }, options);
        options.fade && (newOptions.from.opacity = 1, newOptions.to.opacity = 0), $.effects.effect.size.call(this, newOptions, done);
    }), $.effects.define("puff", "hide", function(options, done) {
        var newOptions = $.extend(!0, {}, options, {
            fade: !0,
            percent: parseInt(options.percent, 10) || 150
        });
        $.effects.effect.scale.call(this, newOptions, done);
    }), $.effects.define("pulsate", "show", function(options, done) {
        var element = $(this), mode = options.mode, show = "show" === mode, showhide = show || "hide" === mode, anims = 2 * (options.times || 5) + (showhide ? 1 : 0), duration = options.duration / anims, animateTo = 0, i = 1, queuelen = element.queue().length;
        for (!show && element.is(":visible") || (element.css("opacity", 0).show(), animateTo = 1); i < anims; i++) element.animate({
            opacity: animateTo
        }, duration, options.easing), animateTo = 1 - animateTo;
        element.animate({
            opacity: animateTo
        }, duration, options.easing), element.queue(done), $.effects.unshift(element, queuelen, anims + 1);
    }), $.effects.define("shake", function(options, done) {
        var i = 1, element = $(this), direction = options.direction || "left", distance = options.distance || 20, times = options.times || 3, anims = 2 * times + 1, speed = Math.round(options.duration / anims), ref = "up" === direction || "down" === direction ? "top" : "left", positiveMotion = "up" === direction || "left" === direction, animation = {}, animation1 = {}, animation2 = {}, queuelen = element.queue().length;
        for ($.effects.createPlaceholder(element), animation[ref] = (positiveMotion ? "-=" : "+=") + distance, 
        animation1[ref] = (positiveMotion ? "+=" : "-=") + 2 * distance, animation2[ref] = (positiveMotion ? "-=" : "+=") + 2 * distance, 
        element.animate(animation, speed, options.easing); i < times; i++) element.animate(animation1, speed, options.easing).animate(animation2, speed, options.easing);
        element.animate(animation1, speed, options.easing).animate(animation, speed / 2, options.easing).queue(done), 
        $.effects.unshift(element, queuelen, anims + 1);
    }), $.effects.define("slide", "show", function(options, done) {
        var startClip, startRef, element = $(this), map = {
            up: [ "bottom", "top" ],
            down: [ "top", "bottom" ],
            left: [ "right", "left" ],
            right: [ "left", "right" ]
        }, mode = options.mode, direction = options.direction || "left", ref = "up" === direction || "down" === direction ? "top" : "left", positiveMotion = "up" === direction || "left" === direction, distance = options.distance || element["top" === ref ? "outerHeight" : "outerWidth"](!0), animation = {};
        $.effects.createPlaceholder(element), startClip = element.cssClip(), startRef = element.position()[ref], 
        animation[ref] = (positiveMotion ? -1 : 1) * distance + startRef, animation.clip = element.cssClip(), 
        animation.clip[map[direction][1]] = animation.clip[map[direction][0]], "show" === mode && (element.cssClip(animation.clip), 
        element.css(ref, animation[ref]), animation.clip = startClip, animation[ref] = startRef), 
        element.animate(animation, {
            queue: !1,
            duration: options.duration,
            easing: options.easing,
            complete: done
        });
    });
    !1 !== $.uiBackCompat && $.effects.define("transfer", function(options, done) {
        $(this).transfer(options, done);
    });
    $.ui.focusable = function(element, hasTabindex) {
        var map, mapName, img, focusableIfVisible, fieldset, nodeName = element.nodeName.toLowerCase();
        return "area" === nodeName ? (mapName = (map = element.parentNode).name, !(!element.href || !mapName || "map" !== map.nodeName.toLowerCase()) && (0 < (img = $("img[usemap='#" + mapName + "']")).length && img.is(":visible"))) : (/^(input|select|textarea|button|object)$/.test(nodeName) ? (focusableIfVisible = !element.disabled) && (fieldset = $(element).closest("fieldset")[0]) && (focusableIfVisible = !fieldset.disabled) : focusableIfVisible = "a" === nodeName && element.href || hasTabindex, 
        focusableIfVisible && $(element).is(":visible") && function(element) {
            var visibility = element.css("visibility");
            for (;"inherit" === visibility; ) element = element.parent(), visibility = element.css("visibility");
            return "hidden" !== visibility;
        }($(element)));
    }, $.extend($.expr[":"], {
        focusable: function(element) {
            return $.ui.focusable(element, null != $.attr(element, "tabindex"));
        }
    });
    $.ui.focusable, $.fn.form = function() {
        return "string" == typeof this[0].form ? this.closest("form") : $(this[0].form);
    }, $.ui.formResetMixin = {
        _formResetHandler: function() {
            var form = $(this);
            setTimeout(function() {
                var instances = form.data("ui-form-reset-instances");
                $.each(instances, function() {
                    this.refresh();
                });
            });
        },
        _bindFormResetHandler: function() {
            if (this.form = this.element.form(), this.form.length) {
                var instances = this.form.data("ui-form-reset-instances") || [];
                instances.length || this.form.on("reset.ui-form-reset", this._formResetHandler), 
                instances.push(this), this.form.data("ui-form-reset-instances", instances);
            }
        },
        _unbindFormResetHandler: function() {
            if (this.form.length) {
                var instances = this.form.data("ui-form-reset-instances");
                instances.splice($.inArray(this, instances), 1), instances.length ? this.form.data("ui-form-reset-instances", instances) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset");
            }
        }
    };
    "1.7" === $.fn.jquery.substring(0, 3) && ($.each([ "Width", "Height" ], function(i, name) {
        var side = "Width" === name ? [ "Left", "Right" ] : [ "Top", "Bottom" ], type = name.toLowerCase(), orig = {
            innerWidth: $.fn.innerWidth,
            innerHeight: $.fn.innerHeight,
            outerWidth: $.fn.outerWidth,
            outerHeight: $.fn.outerHeight
        };
        function reduce(elem, size, border, margin) {
            return $.each(side, function() {
                size -= parseFloat($.css(elem, "padding" + this)) || 0, border && (size -= parseFloat($.css(elem, "border" + this + "Width")) || 0), 
                margin && (size -= parseFloat($.css(elem, "margin" + this)) || 0);
            }), size;
        }
        $.fn["inner" + name] = function(size) {
            return void 0 === size ? orig["inner" + name].call(this) : this.each(function() {
                $(this).css(type, reduce(this, size) + "px");
            });
        }, $.fn["outer" + name] = function(size, margin) {
            return "number" != typeof size ? orig["outer" + name].call(this, size) : this.each(function() {
                $(this).css(type, reduce(this, size, !0, margin) + "px");
            });
        };
    }), $.fn.addBack = function(selector) {
        return this.add(null == selector ? this.prevObject : this.prevObject.filter(selector));
    });
    var selectorEscape, uuid;
    $.ui.keyCode = {
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
    }, $.ui.escapeSelector = (selectorEscape = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g, 
    function(selector) {
        return selector.replace(selectorEscape, "\\$1");
    }), $.fn.labels = function() {
        var ancestor, selector, id, labels, ancestors;
        return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (labels = this.eq(0).parents("label"), 
        (id = this.attr("id")) && (ancestors = (ancestor = this.eq(0).parents().last()).add(ancestor.length ? ancestor.siblings() : this.siblings()), 
        selector = "label[for='" + $.ui.escapeSelector(id) + "']", labels = labels.add(ancestors.find(selector).addBack(selector))), 
        this.pushStack(labels));
    }, $.fn.scrollParent = function(includeHidden) {
        var position = this.css("position"), excludeStaticParent = "absolute" === position, overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/, scrollParent = this.parents().filter(function() {
            var parent = $(this);
            return (!excludeStaticParent || "static" !== parent.css("position")) && overflowRegex.test(parent.css("overflow") + parent.css("overflow-y") + parent.css("overflow-x"));
        }).eq(0);
        return "fixed" !== position && scrollParent.length ? scrollParent : $(this[0].ownerDocument || document);
    }, $.extend($.expr[":"], {
        tabbable: function(element) {
            var tabIndex = $.attr(element, "tabindex"), hasTabindex = null != tabIndex;
            return (!hasTabindex || 0 <= tabIndex) && $.ui.focusable(element, hasTabindex);
        }
    }), $.fn.extend({
        uniqueId: (uuid = 0, function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++uuid);
            });
        }),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && $(this).removeAttr("id");
            });
        }
    }), $.widget("ui.accordion", {
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
            var options = this.options;
            this.prevShow = this.prevHide = $(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), 
            this.element.attr("role", "tablist"), options.collapsible || !1 !== options.active && null != options.active || (options.active = 0), 
            this._processPanels(), options.active < 0 && (options.active += this.headers.length), 
            this._refresh();
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: this.active.length ? this.active.next() : $()
            };
        },
        _createIcons: function() {
            var icon, children, icons = this.options.icons;
            icons && (icon = $("<span>"), this._addClass(icon, "ui-accordion-header-icon", "ui-icon " + icons.header), 
            icon.prependTo(this.headers), children = this.active.children(".ui-accordion-header-icon"), 
            this._removeClass(children, icons.header)._addClass(children, null, icons.activeHeader)._addClass(this.headers, "ui-accordion-icons"));
        },
        _destroyIcons: function() {
            this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove();
        },
        _destroy: function() {
            var contents;
            this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), 
            this._destroyIcons(), contents = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), 
            "content" !== this.options.heightStyle && contents.css("height", "");
        },
        _setOption: function(key, value) {
            "active" !== key ? ("event" === key && (this.options.event && this._off(this.headers, this.options.event), 
            this._setupEvents(value)), this._super(key, value), "collapsible" !== key || value || !1 !== this.options.active || this._activate(0), 
            "icons" === key && (this._destroyIcons(), value && this._createIcons())) : this._activate(value);
        },
        _setOptionDisabled: function(value) {
            this._super(value), this.element.attr("aria-disabled", value), this._toggleClass(null, "ui-state-disabled", !!value), 
            this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!value);
        },
        _keydown: function(event) {
            if (!event.altKey && !event.ctrlKey) {
                var keyCode = $.ui.keyCode, length = this.headers.length, currentIndex = this.headers.index(event.target), toFocus = !1;
                switch (event.keyCode) {
                  case keyCode.RIGHT:
                  case keyCode.DOWN:
                    toFocus = this.headers[(currentIndex + 1) % length];
                    break;

                  case keyCode.LEFT:
                  case keyCode.UP:
                    toFocus = this.headers[(currentIndex - 1 + length) % length];
                    break;

                  case keyCode.SPACE:
                  case keyCode.ENTER:
                    this._eventHandler(event);
                    break;

                  case keyCode.HOME:
                    toFocus = this.headers[0];
                    break;

                  case keyCode.END:
                    toFocus = this.headers[length - 1];
                }
                toFocus && ($(event.target).attr("tabIndex", -1), $(toFocus).attr("tabIndex", 0), 
                $(toFocus).trigger("focus"), event.preventDefault());
            }
        },
        _panelKeyDown: function(event) {
            event.keyCode === $.ui.keyCode.UP && event.ctrlKey && $(event.currentTarget).prev().trigger("focus");
        },
        refresh: function() {
            var options = this.options;
            this._processPanels(), !1 === options.active && !0 === options.collapsible || !this.headers.length ? (options.active = !1, 
            this.active = $()) : !1 === options.active ? this._activate(0) : this.active.length && !$.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (options.active = !1, 
            this.active = $()) : this._activate(Math.max(0, options.active - 1)) : options.active = this.headers.index(this.active), 
            this._destroyIcons(), this._refresh();
        },
        _processPanels: function() {
            var prevHeaders = this.headers, prevPanels = this.panels;
            this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), 
            this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), 
            this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), 
            prevPanels && (this._off(prevHeaders.not(this.headers)), this._off(prevPanels.not(this.panels)));
        },
        _refresh: function() {
            var maxHeight, options = this.options, heightStyle = options.heightStyle, parent = this.element.parent();
            this.active = this._findActive(options.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), 
            this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), 
            this.headers.attr("role", "tab").each(function() {
                var header = $(this), headerId = header.uniqueId().attr("id"), panel = header.next(), panelId = panel.uniqueId().attr("id");
                header.attr("aria-controls", panelId), panel.attr("aria-labelledby", headerId);
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
            }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(options.event), 
            "fill" === heightStyle ? (maxHeight = parent.height(), this.element.siblings(":visible").each(function() {
                var elem = $(this), position = elem.css("position");
                "absolute" !== position && "fixed" !== position && (maxHeight -= elem.outerHeight(!0));
            }), this.headers.each(function() {
                maxHeight -= $(this).outerHeight(!0);
            }), this.headers.next().each(function() {
                $(this).height(Math.max(0, maxHeight - $(this).innerHeight() + $(this).height()));
            }).css("overflow", "auto")) : "auto" === heightStyle && (maxHeight = 0, this.headers.next().each(function() {
                var isVisible = $(this).is(":visible");
                isVisible || $(this).show(), maxHeight = Math.max(maxHeight, $(this).css("height", "").height()), 
                isVisible || $(this).hide();
            }).height(maxHeight));
        },
        _activate: function(index) {
            var active = this._findActive(index)[0];
            active !== this.active[0] && (active = active || this.active[0], this._eventHandler({
                target: active,
                currentTarget: active,
                preventDefault: $.noop
            }));
        },
        _findActive: function(selector) {
            return "number" == typeof selector ? this.headers.eq(selector) : $();
        },
        _setupEvents: function(event) {
            var events = {
                keydown: "_keydown"
            };
            event && $.each(event.split(" "), function(index, eventName) {
                events[eventName] = "_eventHandler";
            }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, events), 
            this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            }), this._hoverable(this.headers), this._focusable(this.headers);
        },
        _eventHandler: function(event) {
            var activeChildren, clickedChildren, options = this.options, active = this.active, clicked = $(event.currentTarget), clickedIsActive = clicked[0] === active[0], collapsing = clickedIsActive && options.collapsible, toShow = collapsing ? $() : clicked.next(), toHide = active.next(), eventData = {
                oldHeader: active,
                oldPanel: toHide,
                newHeader: collapsing ? $() : clicked,
                newPanel: toShow
            };
            event.preventDefault(), clickedIsActive && !options.collapsible || !1 === this._trigger("beforeActivate", event, eventData) || (options.active = !collapsing && this.headers.index(clicked), 
            this.active = clickedIsActive ? $() : clicked, this._toggle(eventData), this._removeClass(active, "ui-accordion-header-active", "ui-state-active"), 
            options.icons && (activeChildren = active.children(".ui-accordion-header-icon"), 
            this._removeClass(activeChildren, null, options.icons.activeHeader)._addClass(activeChildren, null, options.icons.header)), 
            clickedIsActive || (this._removeClass(clicked, "ui-accordion-header-collapsed")._addClass(clicked, "ui-accordion-header-active", "ui-state-active"), 
            options.icons && (clickedChildren = clicked.children(".ui-accordion-header-icon"), 
            this._removeClass(clickedChildren, null, options.icons.header)._addClass(clickedChildren, null, options.icons.activeHeader)), 
            this._addClass(clicked.next(), "ui-accordion-content-active")));
        },
        _toggle: function(data) {
            var toShow = data.newPanel, toHide = this.prevShow.length ? this.prevShow : data.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = toShow, this.prevHide = toHide, 
            this.options.animate ? this._animate(toShow, toHide, data) : (toHide.hide(), toShow.show(), 
            this._toggleComplete(data)), toHide.attr({
                "aria-hidden": "true"
            }), toHide.prev().attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), toShow.length && toHide.length ? toHide.prev().attr({
                tabIndex: -1,
                "aria-expanded": "false"
            }) : toShow.length && this.headers.filter(function() {
                return 0 === parseInt($(this).attr("tabIndex"), 10);
            }).attr("tabIndex", -1), toShow.attr("aria-hidden", "false").prev().attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            });
        },
        _animate: function(toShow, toHide, data) {
            var total, easing, duration, that = this, adjust = 0, boxSizing = toShow.css("box-sizing"), down = toShow.length && (!toHide.length || toShow.index() < toHide.index()), animate = this.options.animate || {}, options = down && animate.down || animate, complete = function() {
                that._toggleComplete(data);
            };
            return "number" == typeof options && (duration = options), "string" == typeof options && (easing = options), 
            easing = easing || options.easing || animate.easing, duration = duration || options.duration || animate.duration, 
            toHide.length ? toShow.length ? (total = toShow.show().outerHeight(), toHide.animate(this.hideProps, {
                duration: duration,
                easing: easing,
                step: function(now, fx) {
                    fx.now = Math.round(now);
                }
            }), void toShow.hide().animate(this.showProps, {
                duration: duration,
                easing: easing,
                complete: complete,
                step: function(now, fx) {
                    fx.now = Math.round(now), "height" !== fx.prop ? "content-box" === boxSizing && (adjust += fx.now) : "content" !== that.options.heightStyle && (fx.now = Math.round(total - toHide.outerHeight() - adjust), 
                    adjust = 0);
                }
            })) : toHide.animate(this.hideProps, duration, easing, complete) : toShow.animate(this.showProps, duration, easing, complete);
        },
        _toggleComplete: function(data) {
            var toHide = data.oldPanel, prev = toHide.prev();
            this._removeClass(toHide, "ui-accordion-content-active"), this._removeClass(prev, "ui-accordion-header-active")._addClass(prev, "ui-accordion-header-collapsed"), 
            toHide.length && (toHide.parent()[0].className = toHide.parent()[0].className), 
            this._trigger("activate", null, data);
        }
    }), $.ui.safeActiveElement = function(document) {
        var activeElement;
        try {
            activeElement = document.activeElement;
        } catch (error) {
            activeElement = document.body;
        }
        return activeElement || (activeElement = document.body), activeElement.nodeName || (activeElement = document.body), 
        activeElement;
    }, $.widget("ui.menu", {
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
                "mousedown .ui-menu-item": function(event) {
                    event.preventDefault();
                },
                "click .ui-menu-item": function(event) {
                    var target = $(event.target), active = $($.ui.safeActiveElement(this.document[0]));
                    !this.mouseHandled && target.not(".ui-state-disabled").length && (this.select(event), 
                    event.isPropagationStopped() || (this.mouseHandled = !0), target.has(".ui-menu").length ? this.expand(event) : !this.element.is(":focus") && active.closest(".ui-menu").length && (this.element.trigger("focus", [ !0 ]), 
                    this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)));
                },
                "mouseenter .ui-menu-item": function(event) {
                    if (!this.previousFilter) {
                        var actualTarget = $(event.target).closest(".ui-menu-item"), target = $(event.currentTarget);
                        actualTarget[0] === target[0] && (this._removeClass(target.siblings().children(".ui-state-active"), null, "ui-state-active"), 
                        this.focus(event, target));
                    }
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(event, keepActiveItem) {
                    var item = this.active || this.element.find(this.options.items).eq(0);
                    keepActiveItem || this.focus(event, item);
                },
                blur: function(event) {
                    this._delay(function() {
                        !$.contains(this.element[0], $.ui.safeActiveElement(this.document[0])) && this.collapseAll(event);
                    });
                },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function(event) {
                    this._closeOnDocumentClick(event) && this.collapseAll(event), this.mouseHandled = !1;
                }
            });
        },
        _destroy: function() {
            var submenus = this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), 
            submenus.children().each(function() {
                var elem = $(this);
                elem.data("ui-menu-submenu-caret") && elem.remove();
            });
        },
        _keydown: function(event) {
            var match, prev, character, skip, preventDefault = !0;
            switch (event.keyCode) {
              case $.ui.keyCode.PAGE_UP:
                this.previousPage(event);
                break;

              case $.ui.keyCode.PAGE_DOWN:
                this.nextPage(event);
                break;

              case $.ui.keyCode.HOME:
                this._move("first", "first", event);
                break;

              case $.ui.keyCode.END:
                this._move("last", "last", event);
                break;

              case $.ui.keyCode.UP:
                this.previous(event);
                break;

              case $.ui.keyCode.DOWN:
                this.next(event);
                break;

              case $.ui.keyCode.LEFT:
                this.collapse(event);
                break;

              case $.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(event);
                break;

              case $.ui.keyCode.ENTER:
              case $.ui.keyCode.SPACE:
                this._activate(event);
                break;

              case $.ui.keyCode.ESCAPE:
                this.collapse(event);
                break;

              default:
                preventDefault = !1, prev = this.previousFilter || "", skip = !1, character = 96 <= event.keyCode && event.keyCode <= 105 ? (event.keyCode - 96).toString() : String.fromCharCode(event.keyCode), 
                clearTimeout(this.filterTimer), character === prev ? skip = !0 : character = prev + character, 
                match = this._filterMenuItems(character), (match = skip && -1 !== match.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : match).length || (character = String.fromCharCode(event.keyCode), 
                match = this._filterMenuItems(character)), match.length ? (this.focus(event, match), 
                this.previousFilter = character, this.filterTimer = this._delay(function() {
                    delete this.previousFilter;
                }, 1e3)) : delete this.previousFilter;
            }
            preventDefault && event.preventDefault();
        },
        _activate: function(event) {
            this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(event) : this.select(event));
        },
        refresh: function() {
            var items, newSubmenus, newItems, newWrappers, that = this, icon = this.options.icons.submenu, submenus = this.element.find(this.options.menus);
            this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), 
            newSubmenus = submenus.filter(":not(.ui-menu)").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var menu = $(this), item = menu.prev(), submenuCaret = $("<span>").data("ui-menu-submenu-caret", !0);
                that._addClass(submenuCaret, "ui-menu-icon", "ui-icon " + icon), item.attr("aria-haspopup", "true").prepend(submenuCaret), 
                menu.attr("aria-labelledby", item.attr("id"));
            }), this._addClass(newSubmenus, "ui-menu", "ui-widget ui-widget-content ui-front"), 
            (items = submenus.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function() {
                var item = $(this);
                that._isDivider(item) && that._addClass(item, "ui-menu-divider", "ui-widget-content");
            }), newWrappers = (newItems = items.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            }), this._addClass(newItems, "ui-menu-item")._addClass(newWrappers, "ui-menu-item-wrapper"), 
            items.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !$.contains(this.element[0], this.active[0]) && this.blur();
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role];
        },
        _setOption: function(key, value) {
            if ("icons" === key) {
                var icons = this.element.find(".ui-menu-icon");
                this._removeClass(icons, null, this.options.icons.submenu)._addClass(icons, null, value.submenu);
            }
            this._super(key, value);
        },
        _setOptionDisabled: function(value) {
            this._super(value), this.element.attr("aria-disabled", String(value)), this._toggleClass(null, "ui-state-disabled", !!value);
        },
        focus: function(event, item) {
            var nested, focused, activeParent;
            this.blur(event, event && "focus" === event.type), this._scrollIntoView(item), this.active = item.first(), 
            focused = this.active.children(".ui-menu-item-wrapper"), this._addClass(focused, null, "ui-state-active"), 
            this.options.role && this.element.attr("aria-activedescendant", focused.attr("id")), 
            activeParent = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), 
            this._addClass(activeParent, null, "ui-state-active"), event && "keydown" === event.type ? this._close() : this.timer = this._delay(function() {
                this._close();
            }, this.delay), (nested = item.children(".ui-menu")).length && event && /^mouse/.test(event.type) && this._startOpening(nested), 
            this.activeMenu = item.parent(), this._trigger("focus", event, {
                item: item
            });
        },
        _scrollIntoView: function(item) {
            var borderTop, paddingTop, offset, scroll, elementHeight, itemHeight;
            this._hasScroll() && (borderTop = parseFloat($.css(this.activeMenu[0], "borderTopWidth")) || 0, 
            paddingTop = parseFloat($.css(this.activeMenu[0], "paddingTop")) || 0, offset = item.offset().top - this.activeMenu.offset().top - borderTop - paddingTop, 
            scroll = this.activeMenu.scrollTop(), elementHeight = this.activeMenu.height(), 
            itemHeight = item.outerHeight(), offset < 0 ? this.activeMenu.scrollTop(scroll + offset) : elementHeight < offset + itemHeight && this.activeMenu.scrollTop(scroll + offset - elementHeight + itemHeight));
        },
        blur: function(event, fromFocus) {
            fromFocus || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), 
            this._trigger("blur", event, {
                item: this.active
            }), this.active = null);
        },
        _startOpening: function(submenu) {
            clearTimeout(this.timer), "true" === submenu.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close(), this._open(submenu);
            }, this.delay));
        },
        _open: function(submenu) {
            var position = $.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(submenu.parents(".ui-menu")).hide().attr("aria-hidden", "true"), 
            submenu.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(position);
        },
        collapseAll: function(event, all) {
            clearTimeout(this.timer), this.timer = this._delay(function() {
                var currentMenu = all ? this.element : $(event && event.target).closest(this.element.find(".ui-menu"));
                currentMenu.length || (currentMenu = this.element), this._close(currentMenu), this.blur(event), 
                this._removeClass(currentMenu.find(".ui-state-active"), null, "ui-state-active"), 
                this.activeMenu = currentMenu;
            }, this.delay);
        },
        _close: function(startMenu) {
            startMenu || (startMenu = this.active ? this.active.parent() : this.element), startMenu.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false");
        },
        _closeOnDocumentClick: function(event) {
            return !$(event.target).closest(".ui-menu").length;
        },
        _isDivider: function(item) {
            return !/[^\-\u2014\u2013\s]/.test(item.text());
        },
        collapse: function(event) {
            var newItem = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            newItem && newItem.length && (this._close(), this.focus(event, newItem));
        },
        expand: function(event) {
            var newItem = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            newItem && newItem.length && (this._open(newItem.parent()), this._delay(function() {
                this.focus(event, newItem);
            }));
        },
        next: function(event) {
            this._move("next", "first", event);
        },
        previous: function(event) {
            this._move("prev", "last", event);
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length;
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length;
        },
        _move: function(direction, filter, event) {
            var next;
            this.active && (next = "first" === direction || "last" === direction ? this.active["first" === direction ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[direction + "All"](".ui-menu-item").eq(0)), 
            next && next.length && this.active || (next = this.activeMenu.find(this.options.items)[filter]()), 
            this.focus(event, next);
        },
        nextPage: function(event) {
            var item, base, height;
            this.active ? this.isLastItem() || (this._hasScroll() ? (base = this.active.offset().top, 
            height = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                return (item = $(this)).offset().top - base - height < 0;
            }), this.focus(event, item)) : this.focus(event, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())) : this.next(event);
        },
        previousPage: function(event) {
            var item, base, height;
            this.active ? this.isFirstItem() || (this._hasScroll() ? (base = this.active.offset().top, 
            height = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                return 0 < (item = $(this)).offset().top - base + height;
            }), this.focus(event, item)) : this.focus(event, this.activeMenu.find(this.options.items).first())) : this.next(event);
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight");
        },
        select: function(event) {
            this.active = this.active || $(event.target).closest(".ui-menu-item");
            var ui = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(event, !0), this._trigger("select", event, ui);
        },
        _filterMenuItems: function(character) {
            var escapedCharacter = character.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"), regex = new RegExp("^" + escapedCharacter, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                return regex.test($.trim($(this).children(".ui-menu-item-wrapper").text()));
            });
        }
    });
    $.widget("ui.autocomplete", {
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
            var suppressKeyPress, suppressKeyPressRepeat, suppressInput, nodeName = this.element[0].nodeName.toLowerCase(), isTextarea = "textarea" === nodeName, isInput = "input" === nodeName;
            this.isMultiLine = isTextarea || !isInput && this._isContentEditable(this.element), 
            this.valueMethod = this.element[isTextarea || isInput ? "val" : "text"], this.isNewMenu = !0, 
            this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), 
            this._on(this.element, {
                keydown: function(event) {
                    if (this.element.prop("readOnly")) suppressKeyPressRepeat = suppressInput = suppressKeyPress = !0; else {
                        suppressKeyPressRepeat = suppressInput = suppressKeyPress = !1;
                        var keyCode = $.ui.keyCode;
                        switch (event.keyCode) {
                          case keyCode.PAGE_UP:
                            suppressKeyPress = !0, this._move("previousPage", event);
                            break;

                          case keyCode.PAGE_DOWN:
                            suppressKeyPress = !0, this._move("nextPage", event);
                            break;

                          case keyCode.UP:
                            suppressKeyPress = !0, this._keyEvent("previous", event);
                            break;

                          case keyCode.DOWN:
                            suppressKeyPress = !0, this._keyEvent("next", event);
                            break;

                          case keyCode.ENTER:
                            this.menu.active && (suppressKeyPress = !0, event.preventDefault(), this.menu.select(event));
                            break;

                          case keyCode.TAB:
                            this.menu.active && this.menu.select(event);
                            break;

                          case keyCode.ESCAPE:
                            this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), 
                            this.close(event), event.preventDefault());
                            break;

                          default:
                            suppressKeyPressRepeat = !0, this._searchTimeout(event);
                        }
                    }
                },
                keypress: function(event) {
                    if (suppressKeyPress) return suppressKeyPress = !1, void (this.isMultiLine && !this.menu.element.is(":visible") || event.preventDefault());
                    if (!suppressKeyPressRepeat) {
                        var keyCode = $.ui.keyCode;
                        switch (event.keyCode) {
                          case keyCode.PAGE_UP:
                            this._move("previousPage", event);
                            break;

                          case keyCode.PAGE_DOWN:
                            this._move("nextPage", event);
                            break;

                          case keyCode.UP:
                            this._keyEvent("previous", event);
                            break;

                          case keyCode.DOWN:
                            this._keyEvent("next", event);
                        }
                    }
                },
                input: function(event) {
                    if (suppressInput) return suppressInput = !1, void event.preventDefault();
                    this._searchTimeout(event);
                },
                focus: function() {
                    this.selectedItem = null, this.previous = this._value();
                },
                blur: function(event) {
                    this.cancelBlur ? delete this.cancelBlur : (clearTimeout(this.searching), this.close(event), 
                    this._change(event));
                }
            }), this._initSource(), this.menu = $("<ul>").appendTo(this._appendTo()).menu({
                role: null
            }).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), 
            this._on(this.menu.element, {
                mousedown: function(event) {
                    event.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur, this.element[0] !== $.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus");
                    });
                },
                menufocus: function(event, ui) {
                    var label, item;
                    if (this.isNewMenu && (this.isNewMenu = !1, event.originalEvent && /^mouse/.test(event.originalEvent.type))) return this.menu.blur(), 
                    void this.document.one("mousemove", function() {
                        $(event.target).trigger(event.originalEvent);
                    });
                    item = ui.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", event, {
                        item: item
                    }) && event.originalEvent && /^key/.test(event.originalEvent.type) && this._value(item.value), 
                    (label = ui.item.attr("aria-label") || item.value) && $.trim(label).length && (this.liveRegion.children().hide(), 
                    $("<div>").text(label).appendTo(this.liveRegion));
                },
                menuselect: function(event, ui) {
                    var item = ui.item.data("ui-autocomplete-item"), previous = this.previous;
                    this.element[0] !== $.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), 
                    this.previous = previous, this._delay(function() {
                        this.previous = previous, this.selectedItem = item;
                    })), !1 !== this._trigger("select", event, {
                        item: item
                    }) && this._value(item.value), this.term = this._value(), this.close(event), this.selectedItem = item;
                }
            }), this.liveRegion = $("<div>", {
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
        _setOption: function(key, value) {
            this._super(key, value), "source" === key && this._initSource(), "appendTo" === key && this.menu.element.appendTo(this._appendTo()), 
            "disabled" === key && value && this.xhr && this.xhr.abort();
        },
        _isEventTargetInWidget: function(event) {
            var menuElement = this.menu.element[0];
            return event.target === this.element[0] || event.target === menuElement || $.contains(menuElement, event.target);
        },
        _closeOnClickOutside: function(event) {
            this._isEventTargetInWidget(event) || this.close();
        },
        _appendTo: function() {
            var element = this.options.appendTo;
            return element && (element = element.jquery || element.nodeType ? $(element) : this.document.find(element).eq(0)), 
            element && element[0] || (element = this.element.closest(".ui-front, dialog")), 
            element.length || (element = this.document[0].body), element;
        },
        _initSource: function() {
            var array, url, that = this;
            $.isArray(this.options.source) ? (array = this.options.source, this.source = function(request, response) {
                response($.ui.autocomplete.filter(array, request.term));
            }) : "string" == typeof this.options.source ? (url = this.options.source, this.source = function(request, response) {
                that.xhr && that.xhr.abort(), that.xhr = $.ajax({
                    url: url,
                    data: request,
                    dataType: "json",
                    success: function(data) {
                        response(data);
                    },
                    error: function() {
                        response([]);
                    }
                });
            }) : this.source = this.options.source;
        },
        _searchTimeout: function(event) {
            clearTimeout(this.searching), this.searching = this._delay(function() {
                var equalValues = this.term === this._value(), menuVisible = this.menu.element.is(":visible"), modifierKey = event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;
                equalValues && (!equalValues || menuVisible || modifierKey) || (this.selectedItem = null, 
                this.search(null, event));
            }, this.options.delay);
        },
        search: function(value, event) {
            return value = null != value ? value : this._value(), this.term = this._value(), 
            value.length < this.options.minLength ? this.close(event) : !1 !== this._trigger("search", event) ? this._search(value) : void 0;
        },
        _search: function(value) {
            this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, 
            this.source({
                term: value
            }, this._response());
        },
        _response: function() {
            var index = ++this.requestIndex;
            return $.proxy(function(content) {
                index === this.requestIndex && this.__response(content), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading");
            }, this);
        },
        __response: function(content) {
            content && (content = this._normalize(content)), this._trigger("response", null, {
                content: content
            }), !this.options.disabled && content && content.length && !this.cancelSearch ? (this._suggest(content), 
            this._trigger("open")) : this._close();
        },
        close: function(event) {
            this.cancelSearch = !0, this._close(event);
        },
        _close: function(event) {
            this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), 
            this.menu.blur(), this.isNewMenu = !0, this._trigger("close", event));
        },
        _change: function(event) {
            this.previous !== this._value() && this._trigger("change", event, {
                item: this.selectedItem
            });
        },
        _normalize: function(items) {
            return items.length && items[0].label && items[0].value ? items : $.map(items, function(item) {
                return "string" == typeof item ? {
                    label: item,
                    value: item
                } : $.extend({}, item, {
                    label: item.label || item.value,
                    value: item.value || item.label
                });
            });
        },
        _suggest: function(items) {
            var ul = this.menu.element.empty();
            this._renderMenu(ul, items), this.isNewMenu = !0, this.menu.refresh(), ul.show(), 
            this._resizeMenu(), ul.position($.extend({
                of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {
                mousedown: "_closeOnClickOutside"
            });
        },
        _resizeMenu: function() {
            var ul = this.menu.element;
            ul.outerWidth(Math.max(ul.width("").outerWidth() + 1, this.element.outerWidth()));
        },
        _renderMenu: function(ul, items) {
            var that = this;
            $.each(items, function(index, item) {
                that._renderItemData(ul, item);
            });
        },
        _renderItemData: function(ul, item) {
            return this._renderItem(ul, item).data("ui-autocomplete-item", item);
        },
        _renderItem: function(ul, item) {
            return $("<li>").append($("<div>").text(item.label)).appendTo(ul);
        },
        _move: function(direction, event) {
            if (this.menu.element.is(":visible")) return this.menu.isFirstItem() && /^previous/.test(direction) || this.menu.isLastItem() && /^next/.test(direction) ? (this.isMultiLine || this._value(this.term), 
            void this.menu.blur()) : void this.menu[direction](event);
            this.search(null, event);
        },
        widget: function() {
            return this.menu.element;
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments);
        },
        _keyEvent: function(keyEvent, event) {
            this.isMultiLine && !this.menu.element.is(":visible") || (this._move(keyEvent, event), 
            event.preventDefault());
        },
        _isContentEditable: function(element) {
            if (!element.length) return !1;
            var editable = element.prop("contentEditable");
            return "inherit" === editable ? this._isContentEditable(element.parent()) : "true" === editable;
        }
    }), $.extend($.ui.autocomplete, {
        escapeRegex: function(value) {
            return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
        },
        filter: function(array, term) {
            var matcher = new RegExp($.ui.autocomplete.escapeRegex(term), "i");
            return $.grep(array, function(value) {
                return matcher.test(value.label || value.value || value);
            });
        }
    }), $.widget("ui.autocomplete", $.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(amount) {
                    return amount + (1 < amount ? " results are" : " result is") + " available, use up and down arrow keys to navigate.";
                }
            }
        },
        __response: function(content) {
            var message;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (message = content && content.length ? this.options.messages.results(content.length) : this.options.messages.noResults, 
            this.liveRegion.children().hide(), $("<div>").text(message).appendTo(this.liveRegion));
        }
    });
    $.ui.autocomplete;
    var controlgroupCornerRegex = /ui-corner-([a-z]){2,6}/g;
    $.widget("ui.controlgroup", {
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
            var that = this, childWidgets = [];
            $.each(this.options.items, function(widget, selector) {
                var labels, options = {};
                if (selector) return "controlgroupLabel" === widget ? ((labels = that.element.find(selector)).each(function() {
                    var element = $(this);
                    element.children(".ui-controlgroup-label-contents").length || element.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>");
                }), that._addClass(labels, null, "ui-widget ui-widget-content ui-state-default"), 
                void (childWidgets = childWidgets.concat(labels.get()))) : void ($.fn[widget] && (options = that["_" + widget + "Options"] ? that["_" + widget + "Options"]("middle") : {
                    classes: {}
                }, that.element.find(selector).each(function() {
                    var element = $(this), instance = element[widget]("instance"), instanceOptions = $.widget.extend({}, options);
                    if ("button" !== widget || !element.parent(".ui-spinner").length) {
                        instance || (instance = element[widget]()[widget]("instance")), instance && (instanceOptions.classes = that._resolveClassesValues(instanceOptions.classes, instance)), 
                        element[widget](instanceOptions);
                        var widgetElement = element[widget]("widget");
                        $.data(widgetElement[0], "ui-controlgroup-data", instance || element[widget]("instance")), 
                        childWidgets.push(widgetElement[0]);
                    }
                })));
            }), this.childWidgets = $($.unique(childWidgets)), this._addClass(this.childWidgets, "ui-controlgroup-item");
        },
        _callChildMethod: function(method) {
            this.childWidgets.each(function() {
                var data = $(this).data("ui-controlgroup-data");
                data && data[method] && data[method]();
            });
        },
        _updateCornerClass: function(element, position) {
            var add = this._buildSimpleOptions(position, "label").classes.label;
            this._removeClass(element, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"), 
            this._addClass(element, null, add);
        },
        _buildSimpleOptions: function(position, key) {
            var direction = "vertical" === this.options.direction, result = {
                classes: {}
            };
            return result.classes[key] = {
                middle: "",
                first: "ui-corner-" + (direction ? "top" : "left"),
                last: "ui-corner-" + (direction ? "bottom" : "right"),
                only: "ui-corner-all"
            }[position], result;
        },
        _spinnerOptions: function(position) {
            var options = this._buildSimpleOptions(position, "ui-spinner");
            return options.classes["ui-spinner-up"] = "", options.classes["ui-spinner-down"] = "", 
            options;
        },
        _buttonOptions: function(position) {
            return this._buildSimpleOptions(position, "ui-button");
        },
        _checkboxradioOptions: function(position) {
            return this._buildSimpleOptions(position, "ui-checkboxradio-label");
        },
        _selectmenuOptions: function(position) {
            var direction = "vertical" === this.options.direction;
            return {
                width: !!direction && "auto",
                classes: {
                    middle: {
                        "ui-selectmenu-button-open": "",
                        "ui-selectmenu-button-closed": ""
                    },
                    first: {
                        "ui-selectmenu-button-open": "ui-corner-" + (direction ? "top" : "tl"),
                        "ui-selectmenu-button-closed": "ui-corner-" + (direction ? "top" : "left")
                    },
                    last: {
                        "ui-selectmenu-button-open": direction ? "" : "ui-corner-tr",
                        "ui-selectmenu-button-closed": "ui-corner-" + (direction ? "bottom" : "right")
                    },
                    only: {
                        "ui-selectmenu-button-open": "ui-corner-top",
                        "ui-selectmenu-button-closed": "ui-corner-all"
                    }
                }[position]
            };
        },
        _resolveClassesValues: function(classes, instance) {
            var result = {};
            return $.each(classes, function(key) {
                var current = instance.options.classes[key] || "";
                current = $.trim(current.replace(controlgroupCornerRegex, "")), result[key] = (current + " " + classes[key]).replace(/\s+/g, " ");
            }), result;
        },
        _setOption: function(key, value) {
            "direction" === key && this._removeClass("ui-controlgroup-" + this.options.direction), 
            this._super(key, value), "disabled" !== key ? this.refresh() : this._callChildMethod(value ? "disable" : "enable");
        },
        refresh: function() {
            var children, that = this;
            this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), 
            this._initWidgets(), children = this.childWidgets, this.options.onlyVisible && (children = children.filter(":visible")), 
            children.length && ($.each([ "first", "last" ], function(index, value) {
                var instance = children[value]().data("ui-controlgroup-data");
                if (instance && that["_" + instance.widgetName + "Options"]) {
                    var options = that["_" + instance.widgetName + "Options"](1 === children.length ? "only" : value);
                    options.classes = that._resolveClassesValues(options.classes, instance), instance.element[instance.widgetName](options);
                } else that._updateCornerClass(children[value](), value);
            }), this._callChildMethod("refresh"));
        }
    });
    $.widget("ui.checkboxradio", [ $.ui.formResetMixin, {
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
            var disabled, labels, that = this, options = this._super() || {};
            return this._readType(), labels = this.element.labels(), this.label = $(labels[labels.length - 1]), 
            this.label.length || $.error("No label found for checkboxradio widget"), this.originalLabel = "", 
            this.label.contents().not(this.element[0]).each(function() {
                that.originalLabel += 3 === this.nodeType ? $(this).text() : this.outerHTML;
            }), this.originalLabel && (options.label = this.originalLabel), null != (disabled = this.element[0].disabled) && (options.disabled = disabled), 
            options;
        },
        _create: function() {
            var checked = this.element[0].checked;
            this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), 
            this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), 
            this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), 
            this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), 
            this._enhance(), checked && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), 
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
            var nodeName = this.element[0].nodeName.toLowerCase();
            this.type = this.element[0].type, "input" === nodeName && /radio|checkbox/.test(this.type) || $.error("Can't create checkboxradio on element.nodeName=" + nodeName + " and element.type=" + this.type);
        },
        _enhance: function() {
            this._updateIcon(this.element[0].checked);
        },
        widget: function() {
            return this.label;
        },
        _getRadioGroup: function() {
            var name = this.element[0].name, nameSelector = "input[name='" + $.ui.escapeSelector(name) + "']";
            return name ? (this.form.length ? $(this.form[0].elements).filter(nameSelector) : $(nameSelector).filter(function() {
                return 0 === $(this).form().length;
            })).not(this.element) : $([]);
        },
        _toggleClasses: function() {
            var checked = this.element[0].checked;
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", checked), 
            this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", checked)._toggleClass(this.icon, null, "ui-icon-blank", !checked), 
            "radio" === this.type && this._getRadioGroup().each(function() {
                var instance = $(this).checkboxradio("instance");
                instance && instance._removeClass(instance.label, "ui-checkboxradio-checked", "ui-state-active");
            });
        },
        _destroy: function() {
            this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove());
        },
        _setOption: function(key, value) {
            if ("label" !== key || value) {
                if (this._super(key, value), "disabled" === key) return this._toggleClass(this.label, null, "ui-state-disabled", value), 
                void (this.element[0].disabled = value);
                this.refresh();
            }
        },
        _updateIcon: function(checked) {
            var toAdd = "ui-icon ui-icon-background ";
            this.options.icon ? (this.icon || (this.icon = $("<span>"), this.iconSpace = $("<span> </span>"), 
            this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (toAdd += checked ? "ui-icon-check ui-state-checked" : "ui-icon-blank", 
            this._removeClass(this.icon, null, checked ? "ui-icon-blank" : "ui-icon-check")) : toAdd += "ui-icon-blank", 
            this._addClass(this.icon, "ui-checkboxradio-icon", toAdd), checked || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), 
            this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), 
            this.iconSpace.remove(), delete this.icon);
        },
        _updateLabel: function() {
            var contents = this.label.contents().not(this.element[0]);
            this.icon && (contents = contents.not(this.icon[0])), this.iconSpace && (contents = contents.not(this.iconSpace[0])), 
            contents.remove(), this.label.append(this.options.label);
        },
        refresh: function() {
            var checked = this.element[0].checked, isDisabled = this.element[0].disabled;
            this._updateIcon(checked), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", checked), 
            null !== this.options.label && this._updateLabel(), isDisabled !== this.options.disabled && this._setOptions({
                disabled: isDisabled
            });
        }
    } ]);
    $.ui.checkboxradio;
    $.widget("ui.button", {
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
            var disabled, options = this._super() || {};
            return this.isInput = this.element.is("input"), null != (disabled = this.element[0].disabled) && (options.disabled = disabled), 
            this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (options.label = this.originalLabel), 
            options;
        },
        _create: function() {
            !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), 
            this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), 
            this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), 
            this._enhance(), this.element.is("a") && this._on({
                keyup: function(event) {
                    event.keyCode === $.ui.keyCode.SPACE && (event.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"));
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
        _updateIcon: function(option, value) {
            var icon = "iconPosition" !== option, position = icon ? this.options.iconPosition : value, displayBlock = "top" === position || "bottom" === position;
            this.icon ? icon && this._removeClass(this.icon, null, this.options.icon) : (this.icon = $("<span>"), 
            this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), 
            icon && this._addClass(this.icon, null, value), this._attachIcon(position), displayBlock ? (this._addClass(this.icon, null, "ui-widget-icon-block"), 
            this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = $("<span> </span>"), 
            this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), 
            this._attachIconSpace(position));
        },
        _destroy: function() {
            this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), 
            this.hasTitle || this.element.removeAttr("title");
        },
        _attachIconSpace: function(iconPosition) {
            this.icon[/^(?:end|bottom)/.test(iconPosition) ? "before" : "after"](this.iconSpace);
        },
        _attachIcon: function(iconPosition) {
            this.element[/^(?:end|bottom)/.test(iconPosition) ? "append" : "prepend"](this.icon);
        },
        _setOptions: function(options) {
            var newShowLabel = void 0 === options.showLabel ? this.options.showLabel : options.showLabel, newIcon = void 0 === options.icon ? this.options.icon : options.icon;
            newShowLabel || newIcon || (options.showLabel = !0), this._super(options);
        },
        _setOption: function(key, value) {
            "icon" === key && (value ? this._updateIcon(key, value) : this.icon && (this.icon.remove(), 
            this.iconSpace && this.iconSpace.remove())), "iconPosition" === key && this._updateIcon(key, value), 
            "showLabel" === key && (this._toggleClass("ui-button-icon-only", null, !value), 
            this._updateTooltip()), "label" === key && (this.isInput ? this.element.val(value) : (this.element.html(value), 
            this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), 
            this._super(key, value), "disabled" === key && (this._toggleClass(null, "ui-state-disabled", value), 
            (this.element[0].disabled = value) && this.element.blur());
        },
        refresh: function() {
            var isDisabled = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
            isDisabled !== this.options.disabled && this._setOptions({
                disabled: isDisabled
            }), this._updateTooltip();
        }
    }), !1 !== $.uiBackCompat && ($.widget("ui.button", $.ui.button, {
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
        _setOption: function(key, value) {
            "text" !== key ? ("showLabel" === key && (this.options.text = value), "icon" === key && (this.options.icons.primary = value), 
            "icons" === key && (value.primary ? (this._super("icon", value.primary), this._super("iconPosition", "beginning")) : value.secondary && (this._super("icon", value.secondary), 
            this._super("iconPosition", "end"))), this._superApply(arguments)) : this._super("showLabel", value);
        }
    }), $.fn.button = function(orig) {
        return function() {
            return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? orig.apply(this, arguments) : ($.ui.checkboxradio || $.error("Checkboxradio widget missing"), 
            0 === arguments.length ? this.checkboxradio({
                icon: !1
            }) : this.checkboxradio.apply(this, arguments));
        };
    }($.fn.button), $.fn.buttonset = function() {
        return $.ui.controlgroup || $.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [ arguments[0], "items.button", arguments[2] ]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [ arguments[0], "items.button" ]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {
            button: arguments[0].items
        }), this.controlgroup.apply(this, arguments));
    });
    var datepicker_instActive;
    $.ui.button;
    function Datepicker() {
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
        }, $.extend(this._defaults, this.regional[""]), this.regional.en = $.extend(!0, {}, this.regional[""]), 
        this.regional["en-US"] = $.extend(!0, {}, this.regional.en), this.dpDiv = datepicker_bindHover($("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
    }
    function datepicker_bindHover(dpDiv) {
        var selector = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return dpDiv.on("mouseout", selector, function() {
            $(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && $(this).removeClass("ui-datepicker-prev-hover"), 
            -1 !== this.className.indexOf("ui-datepicker-next") && $(this).removeClass("ui-datepicker-next-hover");
        }).on("mouseover", selector, datepicker_handleMouseover);
    }
    function datepicker_handleMouseover() {
        $.datepicker._isDisabledDatepicker(datepicker_instActive.inline ? datepicker_instActive.dpDiv.parent()[0] : datepicker_instActive.input[0]) || ($(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), 
        $(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && $(this).addClass("ui-datepicker-prev-hover"), 
        -1 !== this.className.indexOf("ui-datepicker-next") && $(this).addClass("ui-datepicker-next-hover"));
    }
    function datepicker_extendRemove(target, props) {
        for (var name in $.extend(target, props), props) null == props[name] && (target[name] = props[name]);
        return target;
    }
    $.extend($.ui, {
        datepicker: {
            version: "1.12.1"
        }
    }), $.extend(Datepicker.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv;
        },
        setDefaults: function(settings) {
            return datepicker_extendRemove(this._defaults, settings || {}), this;
        },
        _attachDatepicker: function(target, settings) {
            var nodeName, inline, inst;
            inline = "div" === (nodeName = target.nodeName.toLowerCase()) || "span" === nodeName, 
            target.id || (this.uuid += 1, target.id = "dp" + this.uuid), (inst = this._newInst($(target), inline)).settings = $.extend({}, settings || {}), 
            "input" === nodeName ? this._connectDatepicker(target, inst) : inline && this._inlineDatepicker(target, inst);
        },
        _newInst: function(target, inline) {
            return {
                id: target[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                input: target,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: inline,
                dpDiv: inline ? datepicker_bindHover($("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            };
        },
        _connectDatepicker: function(target, inst) {
            var input = $(target);
            inst.append = $([]), inst.trigger = $([]), input.hasClass(this.markerClassName) || (this._attachments(input, inst), 
            input.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), 
            this._autoSize(inst), $.data(target, "datepicker", inst), inst.settings.disabled && this._disableDatepicker(target));
        },
        _attachments: function(input, inst) {
            var showOn, buttonText, buttonImage, appendText = this._get(inst, "appendText"), isRTL = this._get(inst, "isRTL");
            inst.append && inst.append.remove(), appendText && (inst.append = $("<span class='" + this._appendClass + "'>" + appendText + "</span>"), 
            input[isRTL ? "before" : "after"](inst.append)), input.off("focus", this._showDatepicker), 
            inst.trigger && inst.trigger.remove(), "focus" !== (showOn = this._get(inst, "showOn")) && "both" !== showOn || input.on("focus", this._showDatepicker), 
            "button" !== showOn && "both" !== showOn || (buttonText = this._get(inst, "buttonText"), 
            buttonImage = this._get(inst, "buttonImage"), inst.trigger = $(this._get(inst, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
                src: buttonImage,
                alt: buttonText,
                title: buttonText
            }) : $("<button type='button'></button>").addClass(this._triggerClass).html(buttonImage ? $("<img/>").attr({
                src: buttonImage,
                alt: buttonText,
                title: buttonText
            }) : buttonText)), input[isRTL ? "before" : "after"](inst.trigger), inst.trigger.on("click", function() {
                return $.datepicker._datepickerShowing && $.datepicker._lastInput === input[0] ? $.datepicker._hideDatepicker() : ($.datepicker._datepickerShowing && $.datepicker._lastInput !== input[0] && $.datepicker._hideDatepicker(), 
                $.datepicker._showDatepicker(input[0])), !1;
            }));
        },
        _autoSize: function(inst) {
            if (this._get(inst, "autoSize") && !inst.inline) {
                var findMax, max, maxI, i, date = new Date(2009, 11, 20), dateFormat = this._get(inst, "dateFormat");
                dateFormat.match(/[DM]/) && (findMax = function(names) {
                    for (i = maxI = max = 0; i < names.length; i++) names[i].length > max && (max = names[i].length, 
                    maxI = i);
                    return maxI;
                }, date.setMonth(findMax(this._get(inst, dateFormat.match(/MM/) ? "monthNames" : "monthNamesShort"))), 
                date.setDate(findMax(this._get(inst, dateFormat.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - date.getDay())), 
                inst.input.attr("size", this._formatDate(inst, date).length);
            }
        },
        _inlineDatepicker: function(target, inst) {
            var divSpan = $(target);
            divSpan.hasClass(this.markerClassName) || (divSpan.addClass(this.markerClassName).append(inst.dpDiv), 
            $.data(target, "datepicker", inst), this._setDate(inst, this._getDefaultDate(inst), !0), 
            this._updateDatepicker(inst), this._updateAlternate(inst), inst.settings.disabled && this._disableDatepicker(target), 
            inst.dpDiv.css("display", "block"));
        },
        _dialogDatepicker: function(input, date, onSelect, settings, pos) {
            var id, browserWidth, browserHeight, scrollX, scrollY, inst = this._dialogInst;
            return inst || (this.uuid += 1, id = "dp" + this.uuid, this._dialogInput = $("<input type='text' id='" + id + "' style='position: absolute; top: -100px; width: 0px;'/>"), 
            this._dialogInput.on("keydown", this._doKeyDown), $("body").append(this._dialogInput), 
            (inst = this._dialogInst = this._newInst(this._dialogInput, !1)).settings = {}, 
            $.data(this._dialogInput[0], "datepicker", inst)), datepicker_extendRemove(inst.settings, settings || {}), 
            date = date && date.constructor === Date ? this._formatDate(inst, date) : date, 
            this._dialogInput.val(date), this._pos = pos ? pos.length ? pos : [ pos.pageX, pos.pageY ] : null, 
            this._pos || (browserWidth = document.documentElement.clientWidth, browserHeight = document.documentElement.clientHeight, 
            scrollX = document.documentElement.scrollLeft || document.body.scrollLeft, scrollY = document.documentElement.scrollTop || document.body.scrollTop, 
            this._pos = [ browserWidth / 2 - 100 + scrollX, browserHeight / 2 - 150 + scrollY ]), 
            this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), 
            inst.settings.onSelect = onSelect, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), 
            this._showDatepicker(this._dialogInput[0]), $.blockUI && $.blockUI(this.dpDiv), 
            $.data(this._dialogInput[0], "datepicker", inst), this;
        },
        _destroyDatepicker: function(target) {
            var nodeName, $target = $(target), inst = $.data(target, "datepicker");
            $target.hasClass(this.markerClassName) && (nodeName = target.nodeName.toLowerCase(), 
            $.removeData(target, "datepicker"), "input" === nodeName ? (inst.append.remove(), 
            inst.trigger.remove(), $target.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : "div" !== nodeName && "span" !== nodeName || $target.removeClass(this.markerClassName).empty(), 
            datepicker_instActive === inst && (datepicker_instActive = null));
        },
        _enableDatepicker: function(target) {
            var nodeName, inline, $target = $(target), inst = $.data(target, "datepicker");
            $target.hasClass(this.markerClassName) && ("input" === (nodeName = target.nodeName.toLowerCase()) ? (target.disabled = !1, 
            inst.trigger.filter("button").each(function() {
                this.disabled = !1;
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : "div" !== nodeName && "span" !== nodeName || ((inline = $target.children("." + this._inlineClass)).children().removeClass("ui-state-disabled"), 
            inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), 
            this._disabledInputs = $.map(this._disabledInputs, function(value) {
                return value === target ? null : value;
            }));
        },
        _disableDatepicker: function(target) {
            var nodeName, inline, $target = $(target), inst = $.data(target, "datepicker");
            $target.hasClass(this.markerClassName) && ("input" === (nodeName = target.nodeName.toLowerCase()) ? (target.disabled = !0, 
            inst.trigger.filter("button").each(function() {
                this.disabled = !0;
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : "div" !== nodeName && "span" !== nodeName || ((inline = $target.children("." + this._inlineClass)).children().addClass("ui-state-disabled"), 
            inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), 
            this._disabledInputs = $.map(this._disabledInputs, function(value) {
                return value === target ? null : value;
            }), this._disabledInputs[this._disabledInputs.length] = target);
        },
        _isDisabledDatepicker: function(target) {
            if (!target) return !1;
            for (var i = 0; i < this._disabledInputs.length; i++) if (this._disabledInputs[i] === target) return !0;
            return !1;
        },
        _getInst: function(target) {
            try {
                return $.data(target, "datepicker");
            } catch (err) {
                throw "Missing instance data for this datepicker";
            }
        },
        _optionDatepicker: function(target, name, value) {
            var settings, date, minDate, maxDate, inst = this._getInst(target);
            if (2 === arguments.length && "string" == typeof name) return "defaults" === name ? $.extend({}, $.datepicker._defaults) : inst ? "all" === name ? $.extend({}, inst.settings) : this._get(inst, name) : null;
            settings = name || {}, "string" == typeof name && ((settings = {})[name] = value), 
            inst && (this._curInst === inst && this._hideDatepicker(), date = this._getDateDatepicker(target, !0), 
            minDate = this._getMinMaxDate(inst, "min"), maxDate = this._getMinMaxDate(inst, "max"), 
            datepicker_extendRemove(inst.settings, settings), null !== minDate && void 0 !== settings.dateFormat && void 0 === settings.minDate && (inst.settings.minDate = this._formatDate(inst, minDate)), 
            null !== maxDate && void 0 !== settings.dateFormat && void 0 === settings.maxDate && (inst.settings.maxDate = this._formatDate(inst, maxDate)), 
            "disabled" in settings && (settings.disabled ? this._disableDatepicker(target) : this._enableDatepicker(target)), 
            this._attachments($(target), inst), this._autoSize(inst), this._setDate(inst, date), 
            this._updateAlternate(inst), this._updateDatepicker(inst));
        },
        _changeDatepicker: function(target, name, value) {
            this._optionDatepicker(target, name, value);
        },
        _refreshDatepicker: function(target) {
            var inst = this._getInst(target);
            inst && this._updateDatepicker(inst);
        },
        _setDateDatepicker: function(target, date) {
            var inst = this._getInst(target);
            inst && (this._setDate(inst, date), this._updateDatepicker(inst), this._updateAlternate(inst));
        },
        _getDateDatepicker: function(target, noDefault) {
            var inst = this._getInst(target);
            return inst && !inst.inline && this._setDateFromField(inst, noDefault), inst ? this._getDate(inst) : null;
        },
        _doKeyDown: function(event) {
            var onSelect, dateStr, sel, inst = $.datepicker._getInst(event.target), handled = !0, isRTL = inst.dpDiv.is(".ui-datepicker-rtl");
            if (inst._keyEvent = !0, $.datepicker._datepickerShowing) switch (event.keyCode) {
              case 9:
                $.datepicker._hideDatepicker(), handled = !1;
                break;

              case 13:
                return (sel = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", inst.dpDiv))[0] && $.datepicker._selectDay(event.target, inst.selectedMonth, inst.selectedYear, sel[0]), 
                (onSelect = $.datepicker._get(inst, "onSelect")) ? (dateStr = $.datepicker._formatDate(inst), 
                onSelect.apply(inst.input ? inst.input[0] : null, [ dateStr, inst ])) : $.datepicker._hideDatepicker(), 
                !1;

              case 27:
                $.datepicker._hideDatepicker();
                break;

              case 33:
                $.datepicker._adjustDate(event.target, event.ctrlKey ? -$.datepicker._get(inst, "stepBigMonths") : -$.datepicker._get(inst, "stepMonths"), "M");
                break;

              case 34:
                $.datepicker._adjustDate(event.target, event.ctrlKey ? +$.datepicker._get(inst, "stepBigMonths") : +$.datepicker._get(inst, "stepMonths"), "M");
                break;

              case 35:
                (event.ctrlKey || event.metaKey) && $.datepicker._clearDate(event.target), handled = event.ctrlKey || event.metaKey;
                break;

              case 36:
                (event.ctrlKey || event.metaKey) && $.datepicker._gotoToday(event.target), handled = event.ctrlKey || event.metaKey;
                break;

              case 37:
                (event.ctrlKey || event.metaKey) && $.datepicker._adjustDate(event.target, isRTL ? 1 : -1, "D"), 
                handled = event.ctrlKey || event.metaKey, event.originalEvent.altKey && $.datepicker._adjustDate(event.target, event.ctrlKey ? -$.datepicker._get(inst, "stepBigMonths") : -$.datepicker._get(inst, "stepMonths"), "M");
                break;

              case 38:
                (event.ctrlKey || event.metaKey) && $.datepicker._adjustDate(event.target, -7, "D"), 
                handled = event.ctrlKey || event.metaKey;
                break;

              case 39:
                (event.ctrlKey || event.metaKey) && $.datepicker._adjustDate(event.target, isRTL ? -1 : 1, "D"), 
                handled = event.ctrlKey || event.metaKey, event.originalEvent.altKey && $.datepicker._adjustDate(event.target, event.ctrlKey ? +$.datepicker._get(inst, "stepBigMonths") : +$.datepicker._get(inst, "stepMonths"), "M");
                break;

              case 40:
                (event.ctrlKey || event.metaKey) && $.datepicker._adjustDate(event.target, 7, "D"), 
                handled = event.ctrlKey || event.metaKey;
                break;

              default:
                handled = !1;
            } else 36 === event.keyCode && event.ctrlKey ? $.datepicker._showDatepicker(this) : handled = !1;
            handled && (event.preventDefault(), event.stopPropagation());
        },
        _doKeyPress: function(event) {
            var chars, chr, inst = $.datepicker._getInst(event.target);
            if ($.datepicker._get(inst, "constrainInput")) return chars = $.datepicker._possibleChars($.datepicker._get(inst, "dateFormat")), 
            chr = String.fromCharCode(null == event.charCode ? event.keyCode : event.charCode), 
            event.ctrlKey || event.metaKey || chr < " " || !chars || -1 < chars.indexOf(chr);
        },
        _doKeyUp: function(event) {
            var inst = $.datepicker._getInst(event.target);
            if (inst.input.val() !== inst.lastVal) try {
                $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"), inst.input ? inst.input.val() : null, $.datepicker._getFormatConfig(inst)) && ($.datepicker._setDateFromField(inst), 
                $.datepicker._updateAlternate(inst), $.datepicker._updateDatepicker(inst));
            } catch (err) {}
            return !0;
        },
        _showDatepicker: function(input) {
            var inst, beforeShow, beforeShowSettings, isFixed, offset, showAnim, duration;
            ("input" !== (input = input.target || input).nodeName.toLowerCase() && (input = $("input", input.parentNode)[0]), 
            $.datepicker._isDisabledDatepicker(input) || $.datepicker._lastInput === input) || (inst = $.datepicker._getInst(input), 
            $.datepicker._curInst && $.datepicker._curInst !== inst && ($.datepicker._curInst.dpDiv.stop(!0, !0), 
            inst && $.datepicker._datepickerShowing && $.datepicker._hideDatepicker($.datepicker._curInst.input[0])), 
            !1 !== (beforeShowSettings = (beforeShow = $.datepicker._get(inst, "beforeShow")) ? beforeShow.apply(input, [ input, inst ]) : {}) && (datepicker_extendRemove(inst.settings, beforeShowSettings), 
            inst.lastVal = null, $.datepicker._lastInput = input, $.datepicker._setDateFromField(inst), 
            $.datepicker._inDialog && (input.value = ""), $.datepicker._pos || ($.datepicker._pos = $.datepicker._findPos(input), 
            $.datepicker._pos[1] += input.offsetHeight), isFixed = !1, $(input).parents().each(function() {
                return !(isFixed |= "fixed" === $(this).css("position"));
            }), offset = {
                left: $.datepicker._pos[0],
                top: $.datepicker._pos[1]
            }, $.datepicker._pos = null, inst.dpDiv.empty(), inst.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px"
            }), $.datepicker._updateDatepicker(inst), offset = $.datepicker._checkOffset(inst, offset, isFixed), 
            inst.dpDiv.css({
                position: $.datepicker._inDialog && $.blockUI ? "static" : isFixed ? "fixed" : "absolute",
                display: "none",
                left: offset.left + "px",
                top: offset.top + "px"
            }), inst.inline || (showAnim = $.datepicker._get(inst, "showAnim"), duration = $.datepicker._get(inst, "duration"), 
            inst.dpDiv.css("z-index", function(elem) {
                for (var position, value; elem.length && elem[0] !== document; ) {
                    if (("absolute" === (position = elem.css("position")) || "relative" === position || "fixed" === position) && (value = parseInt(elem.css("zIndex"), 10), 
                    !isNaN(value) && 0 !== value)) return value;
                    elem = elem.parent();
                }
                return 0;
            }($(input)) + 1), $.datepicker._datepickerShowing = !0, $.effects && $.effects.effect[showAnim] ? inst.dpDiv.show(showAnim, $.datepicker._get(inst, "showOptions"), duration) : inst.dpDiv[showAnim || "show"](showAnim ? duration : null), 
            $.datepicker._shouldFocusInput(inst) && inst.input.trigger("focus"), $.datepicker._curInst = inst)));
        },
        _updateDatepicker: function(inst) {
            this.maxRows = 4, (datepicker_instActive = inst).dpDiv.empty().append(this._generateHTML(inst)), 
            this._attachHandlers(inst);
            var origyearshtml, numMonths = this._getNumberOfMonths(inst), cols = numMonths[1], activeCell = inst.dpDiv.find("." + this._dayOverClass + " a");
            0 < activeCell.length && datepicker_handleMouseover.apply(activeCell.get(0)), inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), 
            1 < cols && inst.dpDiv.addClass("ui-datepicker-multi-" + cols).css("width", 17 * cols + "em"), 
            inst.dpDiv[(1 !== numMonths[0] || 1 !== numMonths[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), 
            inst.dpDiv[(this._get(inst, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), 
            inst === $.datepicker._curInst && $.datepicker._datepickerShowing && $.datepicker._shouldFocusInput(inst) && inst.input.trigger("focus"), 
            inst.yearshtml && (origyearshtml = inst.yearshtml, setTimeout(function() {
                origyearshtml === inst.yearshtml && inst.yearshtml && inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml), 
                origyearshtml = inst.yearshtml = null;
            }, 0));
        },
        _shouldFocusInput: function(inst) {
            return inst.input && inst.input.is(":visible") && !inst.input.is(":disabled") && !inst.input.is(":focus");
        },
        _checkOffset: function(inst, offset, isFixed) {
            var dpWidth = inst.dpDiv.outerWidth(), dpHeight = inst.dpDiv.outerHeight(), inputWidth = inst.input ? inst.input.outerWidth() : 0, inputHeight = inst.input ? inst.input.outerHeight() : 0, viewWidth = document.documentElement.clientWidth + (isFixed ? 0 : $(document).scrollLeft()), viewHeight = document.documentElement.clientHeight + (isFixed ? 0 : $(document).scrollTop());
            return offset.left -= this._get(inst, "isRTL") ? dpWidth - inputWidth : 0, offset.left -= isFixed && offset.left === inst.input.offset().left ? $(document).scrollLeft() : 0, 
            offset.top -= isFixed && offset.top === inst.input.offset().top + inputHeight ? $(document).scrollTop() : 0, 
            offset.left -= Math.min(offset.left, offset.left + dpWidth > viewWidth && dpWidth < viewWidth ? Math.abs(offset.left + dpWidth - viewWidth) : 0), 
            offset.top -= Math.min(offset.top, offset.top + dpHeight > viewHeight && dpHeight < viewHeight ? Math.abs(dpHeight + inputHeight) : 0), 
            offset;
        },
        _findPos: function(obj) {
            for (var position, inst = this._getInst(obj), isRTL = this._get(inst, "isRTL"); obj && ("hidden" === obj.type || 1 !== obj.nodeType || $.expr.filters.hidden(obj)); ) obj = obj[isRTL ? "previousSibling" : "nextSibling"];
            return [ (position = $(obj).offset()).left, position.top ];
        },
        _hideDatepicker: function(input) {
            var showAnim, duration, postProcess, onClose, inst = this._curInst;
            !inst || input && inst !== $.data(input, "datepicker") || this._datepickerShowing && (showAnim = this._get(inst, "showAnim"), 
            duration = this._get(inst, "duration"), postProcess = function() {
                $.datepicker._tidyDialog(inst);
            }, $.effects && ($.effects.effect[showAnim] || $.effects[showAnim]) ? inst.dpDiv.hide(showAnim, $.datepicker._get(inst, "showOptions"), duration, postProcess) : inst.dpDiv["slideDown" === showAnim ? "slideUp" : "fadeIn" === showAnim ? "fadeOut" : "hide"](showAnim ? duration : null, postProcess), 
            showAnim || postProcess(), this._datepickerShowing = !1, (onClose = this._get(inst, "onClose")) && onClose.apply(inst.input ? inst.input[0] : null, [ inst.input ? inst.input.val() : "", inst ]), 
            this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), $.blockUI && ($.unblockUI(), $("body").append(this.dpDiv))), this._inDialog = !1);
        },
        _tidyDialog: function(inst) {
            inst.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");
        },
        _checkExternalClick: function(event) {
            if ($.datepicker._curInst) {
                var $target = $(event.target), inst = $.datepicker._getInst($target[0]);
                ($target[0].id === $.datepicker._mainDivId || 0 !== $target.parents("#" + $.datepicker._mainDivId).length || $target.hasClass($.datepicker.markerClassName) || $target.closest("." + $.datepicker._triggerClass).length || !$.datepicker._datepickerShowing || $.datepicker._inDialog && $.blockUI) && (!$target.hasClass($.datepicker.markerClassName) || $.datepicker._curInst === inst) || $.datepicker._hideDatepicker();
            }
        },
        _adjustDate: function(id, offset, period) {
            var target = $(id), inst = this._getInst(target[0]);
            this._isDisabledDatepicker(target[0]) || (this._adjustInstDate(inst, offset + ("M" === period ? this._get(inst, "showCurrentAtPos") : 0), period), 
            this._updateDatepicker(inst));
        },
        _gotoToday: function(id) {
            var date, target = $(id), inst = this._getInst(target[0]);
            this._get(inst, "gotoCurrent") && inst.currentDay ? (inst.selectedDay = inst.currentDay, 
            inst.drawMonth = inst.selectedMonth = inst.currentMonth, inst.drawYear = inst.selectedYear = inst.currentYear) : (date = new Date(), 
            inst.selectedDay = date.getDate(), inst.drawMonth = inst.selectedMonth = date.getMonth(), 
            inst.drawYear = inst.selectedYear = date.getFullYear()), this._notifyChange(inst), 
            this._adjustDate(target);
        },
        _selectMonthYear: function(id, select, period) {
            var target = $(id), inst = this._getInst(target[0]);
            inst["selected" + ("M" === period ? "Month" : "Year")] = inst["draw" + ("M" === period ? "Month" : "Year")] = parseInt(select.options[select.selectedIndex].value, 10), 
            this._notifyChange(inst), this._adjustDate(target);
        },
        _selectDay: function(id, month, year, td) {
            var inst, target = $(id);
            $(td).hasClass(this._unselectableClass) || this._isDisabledDatepicker(target[0]) || ((inst = this._getInst(target[0])).selectedDay = inst.currentDay = $("a", td).html(), 
            inst.selectedMonth = inst.currentMonth = month, inst.selectedYear = inst.currentYear = year, 
            this._selectDate(id, this._formatDate(inst, inst.currentDay, inst.currentMonth, inst.currentYear)));
        },
        _clearDate: function(id) {
            var target = $(id);
            this._selectDate(target, "");
        },
        _selectDate: function(id, dateStr) {
            var onSelect, target = $(id), inst = this._getInst(target[0]);
            dateStr = null != dateStr ? dateStr : this._formatDate(inst), inst.input && inst.input.val(dateStr), 
            this._updateAlternate(inst), (onSelect = this._get(inst, "onSelect")) ? onSelect.apply(inst.input ? inst.input[0] : null, [ dateStr, inst ]) : inst.input && inst.input.trigger("change"), 
            inst.inline ? this._updateDatepicker(inst) : (this._hideDatepicker(), this._lastInput = inst.input[0], 
            "object" != typeof inst.input[0] && inst.input.trigger("focus"), this._lastInput = null);
        },
        _updateAlternate: function(inst) {
            var altFormat, date, dateStr, altField = this._get(inst, "altField");
            altField && (altFormat = this._get(inst, "altFormat") || this._get(inst, "dateFormat"), 
            date = this._getDate(inst), dateStr = this.formatDate(altFormat, date, this._getFormatConfig(inst)), 
            $(altField).val(dateStr));
        },
        noWeekends: function(date) {
            var day = date.getDay();
            return [ 0 < day && day < 6, "" ];
        },
        iso8601Week: function(date) {
            var time, checkDate = new Date(date.getTime());
            return checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7)), time = checkDate.getTime(), 
            checkDate.setMonth(0), checkDate.setDate(1), Math.floor(Math.round((time - checkDate) / 864e5) / 7) + 1;
        },
        parseDate: function(format, value, settings) {
            if (null == format || null == value) throw "Invalid arguments";
            if ("" === (value = "object" == typeof value ? value.toString() : value + "")) return null;
            var iFormat, dim, extra, date, iValue = 0, shortYearCutoffTemp = (settings ? settings.shortYearCutoff : null) || this._defaults.shortYearCutoff, shortYearCutoff = "string" != typeof shortYearCutoffTemp ? shortYearCutoffTemp : new Date().getFullYear() % 100 + parseInt(shortYearCutoffTemp, 10), dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort, dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames, monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort, monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames, year = -1, month = -1, day = -1, doy = -1, literal = !1, lookAhead = function(match) {
                var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
                return matches && iFormat++, matches;
            }, getNumber = function(match) {
                var isDoubled = lookAhead(match), size = "@" === match ? 14 : "!" === match ? 20 : "y" === match && isDoubled ? 4 : "o" === match ? 3 : 2, digits = new RegExp("^\\d{" + ("y" === match ? size : 1) + "," + size + "}"), num = value.substring(iValue).match(digits);
                if (!num) throw "Missing number at position " + iValue;
                return iValue += num[0].length, parseInt(num[0], 10);
            }, getName = function(match, shortNames, longNames) {
                var index = -1, names = $.map(lookAhead(match) ? longNames : shortNames, function(v, k) {
                    return [ [ k, v ] ];
                }).sort(function(a, b) {
                    return -(a[1].length - b[1].length);
                });
                if ($.each(names, function(i, pair) {
                    var name = pair[1];
                    if (value.substr(iValue, name.length).toLowerCase() === name.toLowerCase()) return index = pair[0], 
                    iValue += name.length, !1;
                }), -1 !== index) return index + 1;
                throw "Unknown name at position " + iValue;
            }, checkLiteral = function() {
                if (value.charAt(iValue) !== format.charAt(iFormat)) throw "Unexpected literal at position " + iValue;
                iValue++;
            };
            for (iFormat = 0; iFormat < format.length; iFormat++) if (literal) "'" !== format.charAt(iFormat) || lookAhead("'") ? checkLiteral() : literal = !1; else switch (format.charAt(iFormat)) {
              case "d":
                day = getNumber("d");
                break;

              case "D":
                getName("D", dayNamesShort, dayNames);
                break;

              case "o":
                doy = getNumber("o");
                break;

              case "m":
                month = getNumber("m");
                break;

              case "M":
                month = getName("M", monthNamesShort, monthNames);
                break;

              case "y":
                year = getNumber("y");
                break;

              case "@":
                year = (date = new Date(getNumber("@"))).getFullYear(), month = date.getMonth() + 1, 
                day = date.getDate();
                break;

              case "!":
                year = (date = new Date((getNumber("!") - this._ticksTo1970) / 1e4)).getFullYear(), 
                month = date.getMonth() + 1, day = date.getDate();
                break;

              case "'":
                lookAhead("'") ? checkLiteral() : literal = !0;
                break;

              default:
                checkLiteral();
            }
            if (iValue < value.length && (extra = value.substr(iValue), !/^\s+/.test(extra))) throw "Extra/unparsed characters found in date: " + extra;
            if (-1 === year ? year = new Date().getFullYear() : year < 100 && (year += new Date().getFullYear() - new Date().getFullYear() % 100 + (year <= shortYearCutoff ? 0 : -100)), 
            -1 < doy) for (month = 1, day = doy; ;) {
                if (day <= (dim = this._getDaysInMonth(year, month - 1))) break;
                month++, day -= dim;
            }
            if ((date = this._daylightSavingAdjust(new Date(year, month - 1, day))).getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) throw "Invalid date";
            return date;
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
        _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
        formatDate: function(format, date, settings) {
            if (!date) return "";
            var iFormat, dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort, dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames, monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort, monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames, lookAhead = function(match) {
                var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
                return matches && iFormat++, matches;
            }, formatNumber = function(match, value, len) {
                var num = "" + value;
                if (lookAhead(match)) for (;num.length < len; ) num = "0" + num;
                return num;
            }, formatName = function(match, value, shortNames, longNames) {
                return lookAhead(match) ? longNames[value] : shortNames[value];
            }, output = "", literal = !1;
            if (date) for (iFormat = 0; iFormat < format.length; iFormat++) if (literal) "'" !== format.charAt(iFormat) || lookAhead("'") ? output += format.charAt(iFormat) : literal = !1; else switch (format.charAt(iFormat)) {
              case "d":
                output += formatNumber("d", date.getDate(), 2);
                break;

              case "D":
                output += formatName("D", date.getDay(), dayNamesShort, dayNames);
                break;

              case "o":
                output += formatNumber("o", Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                break;

              case "m":
                output += formatNumber("m", date.getMonth() + 1, 2);
                break;

              case "M":
                output += formatName("M", date.getMonth(), monthNamesShort, monthNames);
                break;

              case "y":
                output += lookAhead("y") ? date.getFullYear() : (date.getFullYear() % 100 < 10 ? "0" : "") + date.getFullYear() % 100;
                break;

              case "@":
                output += date.getTime();
                break;

              case "!":
                output += 1e4 * date.getTime() + this._ticksTo1970;
                break;

              case "'":
                lookAhead("'") ? output += "'" : literal = !0;
                break;

              default:
                output += format.charAt(iFormat);
            }
            return output;
        },
        _possibleChars: function(format) {
            var iFormat, chars = "", literal = !1, lookAhead = function(match) {
                var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
                return matches && iFormat++, matches;
            };
            for (iFormat = 0; iFormat < format.length; iFormat++) if (literal) "'" !== format.charAt(iFormat) || lookAhead("'") ? chars += format.charAt(iFormat) : literal = !1; else switch (format.charAt(iFormat)) {
              case "d":
              case "m":
              case "y":
              case "@":
                chars += "0123456789";
                break;

              case "D":
              case "M":
                return null;

              case "'":
                lookAhead("'") ? chars += "'" : literal = !0;
                break;

              default:
                chars += format.charAt(iFormat);
            }
            return chars;
        },
        _get: function(inst, name) {
            return void 0 !== inst.settings[name] ? inst.settings[name] : this._defaults[name];
        },
        _setDateFromField: function(inst, noDefault) {
            if (inst.input.val() !== inst.lastVal) {
                var dateFormat = this._get(inst, "dateFormat"), dates = inst.lastVal = inst.input ? inst.input.val() : null, defaultDate = this._getDefaultDate(inst), date = defaultDate, settings = this._getFormatConfig(inst);
                try {
                    date = this.parseDate(dateFormat, dates, settings) || defaultDate;
                } catch (event) {
                    dates = noDefault ? "" : dates;
                }
                inst.selectedDay = date.getDate(), inst.drawMonth = inst.selectedMonth = date.getMonth(), 
                inst.drawYear = inst.selectedYear = date.getFullYear(), inst.currentDay = dates ? date.getDate() : 0, 
                inst.currentMonth = dates ? date.getMonth() : 0, inst.currentYear = dates ? date.getFullYear() : 0, 
                this._adjustInstDate(inst);
            }
        },
        _getDefaultDate: function(inst) {
            return this._restrictMinMax(inst, this._determineDate(inst, this._get(inst, "defaultDate"), new Date()));
        },
        _determineDate: function(inst, date, defaultDate) {
            var newDate = null == date || "" === date ? defaultDate : "string" == typeof date ? function(offset) {
                try {
                    return $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"), offset, $.datepicker._getFormatConfig(inst));
                } catch (e) {}
                for (var date = (offset.toLowerCase().match(/^c/) ? $.datepicker._getDate(inst) : null) || new Date(), year = date.getFullYear(), month = date.getMonth(), day = date.getDate(), pattern = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, matches = pattern.exec(offset); matches; ) {
                    switch (matches[2] || "d") {
                      case "d":
                      case "D":
                        day += parseInt(matches[1], 10);
                        break;

                      case "w":
                      case "W":
                        day += 7 * parseInt(matches[1], 10);
                        break;

                      case "m":
                      case "M":
                        month += parseInt(matches[1], 10), day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
                        break;

                      case "y":
                      case "Y":
                        year += parseInt(matches[1], 10), day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
                    }
                    matches = pattern.exec(offset);
                }
                return new Date(year, month, day);
            }(date) : "number" == typeof date ? isNaN(date) ? defaultDate : function(offset) {
                var date = new Date();
                return date.setDate(date.getDate() + offset), date;
            }(date) : new Date(date.getTime());
            return (newDate = newDate && "Invalid Date" === newDate.toString() ? defaultDate : newDate) && (newDate.setHours(0), 
            newDate.setMinutes(0), newDate.setSeconds(0), newDate.setMilliseconds(0)), this._daylightSavingAdjust(newDate);
        },
        _daylightSavingAdjust: function(date) {
            return date ? (date.setHours(12 < date.getHours() ? date.getHours() + 2 : 0), date) : null;
        },
        _setDate: function(inst, date, noChange) {
            var clear = !date, origMonth = inst.selectedMonth, origYear = inst.selectedYear, newDate = this._restrictMinMax(inst, this._determineDate(inst, date, new Date()));
            inst.selectedDay = inst.currentDay = newDate.getDate(), inst.drawMonth = inst.selectedMonth = inst.currentMonth = newDate.getMonth(), 
            inst.drawYear = inst.selectedYear = inst.currentYear = newDate.getFullYear(), origMonth === inst.selectedMonth && origYear === inst.selectedYear || noChange || this._notifyChange(inst), 
            this._adjustInstDate(inst), inst.input && inst.input.val(clear ? "" : this._formatDate(inst));
        },
        _getDate: function(inst) {
            return !inst.currentYear || inst.input && "" === inst.input.val() ? null : this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay));
        },
        _attachHandlers: function(inst) {
            var stepMonths = this._get(inst, "stepMonths"), id = "#" + inst.id.replace(/\\\\/g, "\\");
            inst.dpDiv.find("[data-handler]").map(function() {
                var handler = {
                    prev: function() {
                        $.datepicker._adjustDate(id, -stepMonths, "M");
                    },
                    next: function() {
                        $.datepicker._adjustDate(id, +stepMonths, "M");
                    },
                    hide: function() {
                        $.datepicker._hideDatepicker();
                    },
                    today: function() {
                        $.datepicker._gotoToday(id);
                    },
                    selectDay: function() {
                        return $.datepicker._selectDay(id, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), 
                        !1;
                    },
                    selectMonth: function() {
                        return $.datepicker._selectMonthYear(id, this, "M"), !1;
                    },
                    selectYear: function() {
                        return $.datepicker._selectMonthYear(id, this, "Y"), !1;
                    }
                };
                $(this).on(this.getAttribute("data-event"), handler[this.getAttribute("data-handler")]);
            });
        },
        _generateHTML: function(inst) {
            var maxDraw, prevText, prev, nextText, next, currentText, gotoDate, controls, buttonPanel, firstDay, showWeek, dayNames, dayNamesMin, monthNames, monthNamesShort, beforeShowDay, showOtherMonths, selectOtherMonths, defaultDate, html, dow, row, group, col, selectedDate, cornerClass, calender, thead, day, daysInMonth, leadDays, curRows, numRows, printDate, dRow, tbody, daySettings, otherMonth, unselectable, tempDate = new Date(), today = this._daylightSavingAdjust(new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate())), isRTL = this._get(inst, "isRTL"), showButtonPanel = this._get(inst, "showButtonPanel"), hideIfNoPrevNext = this._get(inst, "hideIfNoPrevNext"), navigationAsDateFormat = this._get(inst, "navigationAsDateFormat"), numMonths = this._getNumberOfMonths(inst), showCurrentAtPos = this._get(inst, "showCurrentAtPos"), stepMonths = this._get(inst, "stepMonths"), isMultiMonth = 1 !== numMonths[0] || 1 !== numMonths[1], currentDate = this._daylightSavingAdjust(inst.currentDay ? new Date(inst.currentYear, inst.currentMonth, inst.currentDay) : new Date(9999, 9, 9)), minDate = this._getMinMaxDate(inst, "min"), maxDate = this._getMinMaxDate(inst, "max"), drawMonth = inst.drawMonth - showCurrentAtPos, drawYear = inst.drawYear;
            if (drawMonth < 0 && (drawMonth += 12, drawYear--), maxDate) for (maxDraw = this._daylightSavingAdjust(new Date(maxDate.getFullYear(), maxDate.getMonth() - numMonths[0] * numMonths[1] + 1, maxDate.getDate())), 
            maxDraw = minDate && maxDraw < minDate ? minDate : maxDraw; this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1)) > maxDraw; ) --drawMonth < 0 && (drawMonth = 11, 
            drawYear--);
            for (inst.drawMonth = drawMonth, inst.drawYear = drawYear, prevText = this._get(inst, "prevText"), 
            prevText = navigationAsDateFormat ? this.formatDate(prevText, this._daylightSavingAdjust(new Date(drawYear, drawMonth - stepMonths, 1)), this._getFormatConfig(inst)) : prevText, 
            prev = this._canAdjustMonth(inst, -1, drawYear, drawMonth) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + prevText + "'><span class='ui-icon ui-icon-circle-triangle-" + (isRTL ? "e" : "w") + "'>" + prevText + "</span></a>" : hideIfNoPrevNext ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + prevText + "'><span class='ui-icon ui-icon-circle-triangle-" + (isRTL ? "e" : "w") + "'>" + prevText + "</span></a>", 
            nextText = this._get(inst, "nextText"), nextText = navigationAsDateFormat ? this.formatDate(nextText, this._daylightSavingAdjust(new Date(drawYear, drawMonth + stepMonths, 1)), this._getFormatConfig(inst)) : nextText, 
            next = this._canAdjustMonth(inst, 1, drawYear, drawMonth) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + (isRTL ? "w" : "e") + "'>" + nextText + "</span></a>" : hideIfNoPrevNext ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + (isRTL ? "w" : "e") + "'>" + nextText + "</span></a>", 
            currentText = this._get(inst, "currentText"), gotoDate = this._get(inst, "gotoCurrent") && inst.currentDay ? currentDate : today, 
            currentText = navigationAsDateFormat ? this.formatDate(currentText, gotoDate, this._getFormatConfig(inst)) : currentText, 
            controls = inst.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(inst, "closeText") + "</button>", 
            buttonPanel = showButtonPanel ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (isRTL ? controls : "") + (this._isInRange(inst, gotoDate) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + currentText + "</button>" : "") + (isRTL ? "" : controls) + "</div>" : "", 
            firstDay = parseInt(this._get(inst, "firstDay"), 10), firstDay = isNaN(firstDay) ? 0 : firstDay, 
            showWeek = this._get(inst, "showWeek"), dayNames = this._get(inst, "dayNames"), 
            dayNamesMin = this._get(inst, "dayNamesMin"), monthNames = this._get(inst, "monthNames"), 
            monthNamesShort = this._get(inst, "monthNamesShort"), beforeShowDay = this._get(inst, "beforeShowDay"), 
            showOtherMonths = this._get(inst, "showOtherMonths"), selectOtherMonths = this._get(inst, "selectOtherMonths"), 
            defaultDate = this._getDefaultDate(inst), html = "", row = 0; row < numMonths[0]; row++) {
                for (group = "", this.maxRows = 4, col = 0; col < numMonths[1]; col++) {
                    if (selectedDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, inst.selectedDay)), 
                    cornerClass = " ui-corner-all", calender = "", isMultiMonth) {
                        if (calender += "<div class='ui-datepicker-group", 1 < numMonths[1]) switch (col) {
                          case 0:
                            calender += " ui-datepicker-group-first", cornerClass = " ui-corner-" + (isRTL ? "right" : "left");
                            break;

                          case numMonths[1] - 1:
                            calender += " ui-datepicker-group-last", cornerClass = " ui-corner-" + (isRTL ? "left" : "right");
                            break;

                          default:
                            calender += " ui-datepicker-group-middle", cornerClass = "";
                        }
                        calender += "'>";
                    }
                    for (calender += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + cornerClass + "'>" + (/all|left/.test(cornerClass) && 0 === row ? isRTL ? next : prev : "") + (/all|right/.test(cornerClass) && 0 === row ? isRTL ? prev : next : "") + this._generateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate, 0 < row || 0 < col, monthNames, monthNamesShort) + "</div><table class='ui-datepicker-calendar'><thead><tr>", 
                    thead = showWeek ? "<th class='ui-datepicker-week-col'>" + this._get(inst, "weekHeader") + "</th>" : "", 
                    dow = 0; dow < 7; dow++) thead += "<th scope='col'" + (5 <= (dow + firstDay + 6) % 7 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + dayNames[day = (dow + firstDay) % 7] + "'>" + dayNamesMin[day] + "</span></th>";
                    for (calender += thead + "</tr></thead><tbody>", daysInMonth = this._getDaysInMonth(drawYear, drawMonth), 
                    drawYear === inst.selectedYear && drawMonth === inst.selectedMonth && (inst.selectedDay = Math.min(inst.selectedDay, daysInMonth)), 
                    leadDays = (this._getFirstDayOfMonth(drawYear, drawMonth) - firstDay + 7) % 7, curRows = Math.ceil((leadDays + daysInMonth) / 7), 
                    numRows = isMultiMonth && this.maxRows > curRows ? this.maxRows : curRows, this.maxRows = numRows, 
                    printDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1 - leadDays)), 
                    dRow = 0; dRow < numRows; dRow++) {
                        for (calender += "<tr>", tbody = showWeek ? "<td class='ui-datepicker-week-col'>" + this._get(inst, "calculateWeek")(printDate) + "</td>" : "", 
                        dow = 0; dow < 7; dow++) daySettings = beforeShowDay ? beforeShowDay.apply(inst.input ? inst.input[0] : null, [ printDate ]) : [ !0, "" ], 
                        unselectable = (otherMonth = printDate.getMonth() !== drawMonth) && !selectOtherMonths || !daySettings[0] || minDate && printDate < minDate || maxDate && maxDate < printDate, 
                        tbody += "<td class='" + (5 <= (dow + firstDay + 6) % 7 ? " ui-datepicker-week-end" : "") + (otherMonth ? " ui-datepicker-other-month" : "") + (printDate.getTime() === selectedDate.getTime() && drawMonth === inst.selectedMonth && inst._keyEvent || defaultDate.getTime() === printDate.getTime() && defaultDate.getTime() === selectedDate.getTime() ? " " + this._dayOverClass : "") + (unselectable ? " " + this._unselectableClass + " ui-state-disabled" : "") + (otherMonth && !showOtherMonths ? "" : " " + daySettings[1] + (printDate.getTime() === currentDate.getTime() ? " " + this._currentClass : "") + (printDate.getTime() === today.getTime() ? " ui-datepicker-today" : "")) + "'" + (otherMonth && !showOtherMonths || !daySettings[2] ? "" : " title='" + daySettings[2].replace(/'/g, "&#39;") + "'") + (unselectable ? "" : " data-handler='selectDay' data-event='click' data-month='" + printDate.getMonth() + "' data-year='" + printDate.getFullYear() + "'") + ">" + (otherMonth && !showOtherMonths ? "&#xa0;" : unselectable ? "<span class='ui-state-default'>" + printDate.getDate() + "</span>" : "<a class='ui-state-default" + (printDate.getTime() === today.getTime() ? " ui-state-highlight" : "") + (printDate.getTime() === currentDate.getTime() ? " ui-state-active" : "") + (otherMonth ? " ui-priority-secondary" : "") + "' href='#'>" + printDate.getDate() + "</a>") + "</td>", 
                        printDate.setDate(printDate.getDate() + 1), printDate = this._daylightSavingAdjust(printDate);
                        calender += tbody + "</tr>";
                    }
                    11 < ++drawMonth && (drawMonth = 0, drawYear++), group += calender += "</tbody></table>" + (isMultiMonth ? "</div>" + (0 < numMonths[0] && col === numMonths[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
                }
                html += group;
            }
            return html += buttonPanel, inst._keyEvent = !1, html;
        },
        _generateMonthYearHeader: function(inst, drawMonth, drawYear, minDate, maxDate, secondary, monthNames, monthNamesShort) {
            var inMinYear, inMaxYear, month, years, thisYear, determineYear, year, endYear, changeMonth = this._get(inst, "changeMonth"), changeYear = this._get(inst, "changeYear"), showMonthAfterYear = this._get(inst, "showMonthAfterYear"), html = "<div class='ui-datepicker-title'>", monthHtml = "";
            if (secondary || !changeMonth) monthHtml += "<span class='ui-datepicker-month'>" + monthNames[drawMonth] + "</span>"; else {
                for (inMinYear = minDate && minDate.getFullYear() === drawYear, inMaxYear = maxDate && maxDate.getFullYear() === drawYear, 
                monthHtml += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", 
                month = 0; month < 12; month++) (!inMinYear || month >= minDate.getMonth()) && (!inMaxYear || month <= maxDate.getMonth()) && (monthHtml += "<option value='" + month + "'" + (month === drawMonth ? " selected='selected'" : "") + ">" + monthNamesShort[month] + "</option>");
                monthHtml += "</select>";
            }
            if (showMonthAfterYear || (html += monthHtml + (!secondary && changeMonth && changeYear ? "" : "&#xa0;")), 
            !inst.yearshtml) if (inst.yearshtml = "", secondary || !changeYear) html += "<span class='ui-datepicker-year'>" + drawYear + "</span>"; else {
                for (years = this._get(inst, "yearRange").split(":"), thisYear = new Date().getFullYear(), 
                year = (determineYear = function(value) {
                    var year = value.match(/c[+\-].*/) ? drawYear + parseInt(value.substring(1), 10) : value.match(/[+\-].*/) ? thisYear + parseInt(value, 10) : parseInt(value, 10);
                    return isNaN(year) ? thisYear : year;
                })(years[0]), endYear = Math.max(year, determineYear(years[1] || "")), year = minDate ? Math.max(year, minDate.getFullYear()) : year, 
                endYear = maxDate ? Math.min(endYear, maxDate.getFullYear()) : endYear, inst.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; year <= endYear; year++) inst.yearshtml += "<option value='" + year + "'" + (year === drawYear ? " selected='selected'" : "") + ">" + year + "</option>";
                inst.yearshtml += "</select>", html += inst.yearshtml, inst.yearshtml = null;
            }
            return html += this._get(inst, "yearSuffix"), showMonthAfterYear && (html += (!secondary && changeMonth && changeYear ? "" : "&#xa0;") + monthHtml), 
            html += "</div>";
        },
        _adjustInstDate: function(inst, offset, period) {
            var year = inst.selectedYear + ("Y" === period ? offset : 0), month = inst.selectedMonth + ("M" === period ? offset : 0), day = Math.min(inst.selectedDay, this._getDaysInMonth(year, month)) + ("D" === period ? offset : 0), date = this._restrictMinMax(inst, this._daylightSavingAdjust(new Date(year, month, day)));
            inst.selectedDay = date.getDate(), inst.drawMonth = inst.selectedMonth = date.getMonth(), 
            inst.drawYear = inst.selectedYear = date.getFullYear(), "M" !== period && "Y" !== period || this._notifyChange(inst);
        },
        _restrictMinMax: function(inst, date) {
            var minDate = this._getMinMaxDate(inst, "min"), maxDate = this._getMinMaxDate(inst, "max"), newDate = minDate && date < minDate ? minDate : date;
            return maxDate && maxDate < newDate ? maxDate : newDate;
        },
        _notifyChange: function(inst) {
            var onChange = this._get(inst, "onChangeMonthYear");
            onChange && onChange.apply(inst.input ? inst.input[0] : null, [ inst.selectedYear, inst.selectedMonth + 1, inst ]);
        },
        _getNumberOfMonths: function(inst) {
            var numMonths = this._get(inst, "numberOfMonths");
            return null == numMonths ? [ 1, 1 ] : "number" == typeof numMonths ? [ 1, numMonths ] : numMonths;
        },
        _getMinMaxDate: function(inst, minMax) {
            return this._determineDate(inst, this._get(inst, minMax + "Date"), null);
        },
        _getDaysInMonth: function(year, month) {
            return 32 - this._daylightSavingAdjust(new Date(year, month, 32)).getDate();
        },
        _getFirstDayOfMonth: function(year, month) {
            return new Date(year, month, 1).getDay();
        },
        _canAdjustMonth: function(inst, offset, curYear, curMonth) {
            var numMonths = this._getNumberOfMonths(inst), date = this._daylightSavingAdjust(new Date(curYear, curMonth + (offset < 0 ? offset : numMonths[0] * numMonths[1]), 1));
            return offset < 0 && date.setDate(this._getDaysInMonth(date.getFullYear(), date.getMonth())), 
            this._isInRange(inst, date);
        },
        _isInRange: function(inst, date) {
            var yearSplit, currentYear, minDate = this._getMinMaxDate(inst, "min"), maxDate = this._getMinMaxDate(inst, "max"), minYear = null, maxYear = null, years = this._get(inst, "yearRange");
            return years && (yearSplit = years.split(":"), currentYear = new Date().getFullYear(), 
            minYear = parseInt(yearSplit[0], 10), maxYear = parseInt(yearSplit[1], 10), yearSplit[0].match(/[+\-].*/) && (minYear += currentYear), 
            yearSplit[1].match(/[+\-].*/) && (maxYear += currentYear)), (!minDate || date.getTime() >= minDate.getTime()) && (!maxDate || date.getTime() <= maxDate.getTime()) && (!minYear || date.getFullYear() >= minYear) && (!maxYear || date.getFullYear() <= maxYear);
        },
        _getFormatConfig: function(inst) {
            var shortYearCutoff = this._get(inst, "shortYearCutoff");
            return {
                shortYearCutoff: shortYearCutoff = "string" != typeof shortYearCutoff ? shortYearCutoff : new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10),
                dayNamesShort: this._get(inst, "dayNamesShort"),
                dayNames: this._get(inst, "dayNames"),
                monthNamesShort: this._get(inst, "monthNamesShort"),
                monthNames: this._get(inst, "monthNames")
            };
        },
        _formatDate: function(inst, day, month, year) {
            day || (inst.currentDay = inst.selectedDay, inst.currentMonth = inst.selectedMonth, 
            inst.currentYear = inst.selectedYear);
            var date = day ? "object" == typeof day ? day : this._daylightSavingAdjust(new Date(year, month, day)) : this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay));
            return this.formatDate(this._get(inst, "dateFormat"), date, this._getFormatConfig(inst));
        }
    }), $.fn.datepicker = function(options) {
        if (!this.length) return this;
        $.datepicker.initialized || ($(document).on("mousedown", $.datepicker._checkExternalClick), 
        $.datepicker.initialized = !0), 0 === $("#" + $.datepicker._mainDivId).length && $("body").append($.datepicker.dpDiv);
        var otherArgs = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof options || "isDisabled" !== options && "getDate" !== options && "widget" !== options ? "option" === options && 2 === arguments.length && "string" == typeof arguments[1] ? $.datepicker["_" + options + "Datepicker"].apply($.datepicker, [ this[0] ].concat(otherArgs)) : this.each(function() {
            "string" == typeof options ? $.datepicker["_" + options + "Datepicker"].apply($.datepicker, [ this ].concat(otherArgs)) : $.datepicker._attachDatepicker(this, options);
        }) : $.datepicker["_" + options + "Datepicker"].apply($.datepicker, [ this[0] ].concat(otherArgs));
    }, $.datepicker = new Datepicker(), $.datepicker.initialized = !1, $.datepicker.uuid = new Date().getTime(), 
    $.datepicker.version = "1.12.1";
    $.datepicker, $.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    var mouseHandled = !1;
    $(document).on("mouseup", function() {
        mouseHandled = !1;
    });
    $.widget("ui.mouse", {
        version: "1.12.1",
        options: {
            cancel: "input, textarea, button, select, option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var that = this;
            this.element.on("mousedown." + this.widgetName, function(event) {
                return that._mouseDown(event);
            }).on("click." + this.widgetName, function(event) {
                if (!0 === $.data(event.target, that.widgetName + ".preventClickEvent")) return $.removeData(event.target, that.widgetName + ".preventClickEvent"), 
                event.stopImmediatePropagation(), !1;
            }), this.started = !1;
        },
        _mouseDestroy: function() {
            this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);
        },
        _mouseDown: function(event) {
            if (!mouseHandled) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(event), this._mouseDownEvent = event;
                var that = this, btnIsLeft = 1 === event.which, elIsCancel = !("string" != typeof this.options.cancel || !event.target.nodeName) && $(event.target).closest(this.options.cancel).length;
                return !(btnIsLeft && !elIsCancel && this._mouseCapture(event)) || (this.mouseDelayMet = !this.options.delay, 
                this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    that.mouseDelayMet = !0;
                }, this.options.delay)), this._mouseDistanceMet(event) && this._mouseDelayMet(event) && (this._mouseStarted = !1 !== this._mouseStart(event), 
                !this._mouseStarted) ? (event.preventDefault(), !0) : (!0 === $.data(event.target, this.widgetName + ".preventClickEvent") && $.removeData(event.target, this.widgetName + ".preventClickEvent"), 
                this._mouseMoveDelegate = function(event) {
                    return that._mouseMove(event);
                }, this._mouseUpDelegate = function(event) {
                    return that._mouseUp(event);
                }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), 
                event.preventDefault(), mouseHandled = !0));
            }
        },
        _mouseMove: function(event) {
            if (this._mouseMoved) {
                if ($.ui.ie && (!document.documentMode || document.documentMode < 9) && !event.button) return this._mouseUp(event);
                if (!event.which) if (event.originalEvent.altKey || event.originalEvent.ctrlKey || event.originalEvent.metaKey || event.originalEvent.shiftKey) this.ignoreMissingWhich = !0; else if (!this.ignoreMissingWhich) return this._mouseUp(event);
            }
            return (event.which || event.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(event), 
            event.preventDefault()) : (this._mouseDistanceMet(event) && this._mouseDelayMet(event) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, event), 
            this._mouseStarted ? this._mouseDrag(event) : this._mouseUp(event)), !this._mouseStarted);
        },
        _mouseUp: function(event) {
            this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), 
            this._mouseStarted && (this._mouseStarted = !1, event.target === this._mouseDownEvent.target && $.data(event.target, this.widgetName + ".preventClickEvent", !0), 
            this._mouseStop(event)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), 
            delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, mouseHandled = !1, 
            event.preventDefault();
        },
        _mouseDistanceMet: function(event) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - event.pageX), Math.abs(this._mouseDownEvent.pageY - event.pageY)) >= this.options.distance;
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
    }), $.ui.plugin = {
        add: function(module, option, set) {
            var i, proto = $.ui[module].prototype;
            for (i in set) proto.plugins[i] = proto.plugins[i] || [], proto.plugins[i].push([ option, set[i] ]);
        },
        call: function(instance, name, args, allowDisconnected) {
            var i, set = instance.plugins[name];
            if (set && (allowDisconnected || instance.element[0].parentNode && 11 !== instance.element[0].parentNode.nodeType)) for (i = 0; i < set.length; i++) instance.options[set[i][0]] && set[i][1].apply(instance.element, args);
        }
    }, $.ui.safeBlur = function(element) {
        element && "body" !== element.nodeName.toLowerCase() && $(element).trigger("blur");
    };
    $.widget("ui.draggable", $.ui.mouse, {
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
        _setOption: function(key, value) {
            this._super(key, value), "handle" === key && (this._removeHandleClassName(), this._setHandleClassName());
        },
        _destroy: function() {
            (this.helper || this.element).is(".ui-draggable-dragging") ? this.destroyOnClear = !0 : (this._removeHandleClassName(), 
            this._mouseDestroy());
        },
        _mouseCapture: function(event) {
            var o = this.options;
            return !(this.helper || o.disabled || 0 < $(event.target).closest(".ui-resizable-handle").length) && (this.handle = this._getHandle(event), 
            !!this.handle && (this._blurActiveElement(event), this._blockFrames(!0 === o.iframeFix ? "iframe" : o.iframeFix), 
            !0));
        },
        _blockFrames: function(selector) {
            this.iframeBlocks = this.document.find(selector).map(function() {
                var iframe = $(this);
                return $("<div>").css("position", "absolute").appendTo(iframe.parent()).outerWidth(iframe.outerWidth()).outerHeight(iframe.outerHeight()).offset(iframe.offset())[0];
            });
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
        },
        _blurActiveElement: function(event) {
            var activeElement = $.ui.safeActiveElement(this.document[0]);
            $(event.target).closest(activeElement).length || $.ui.safeBlur(activeElement);
        },
        _mouseStart: function(event) {
            var o = this.options;
            return this.helper = this._createHelper(event), this._addClass(this.helper, "ui-draggable-dragging"), 
            this._cacheHelperProportions(), $.ui.ddmanager && ($.ui.ddmanager.current = this), 
            this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), 
            this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = 0 < this.helper.parents().filter(function() {
                return "fixed" === $(this).css("position");
            }).length, this.positionAbs = this.element.offset(), this._refreshOffsets(event), 
            this.originalPosition = this.position = this._generatePosition(event, !1), this.originalPageX = event.pageX, 
            this.originalPageY = event.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), 
            this._setContainment(), !1 === this._trigger("start", event) ? (this._clear(), !1) : (this._cacheHelperProportions(), 
            $.ui.ddmanager && !o.dropBehaviour && $.ui.ddmanager.prepareOffsets(this, event), 
            this._mouseDrag(event, !0), $.ui.ddmanager && $.ui.ddmanager.dragStart(this, event), 
            !0);
        },
        _refreshOffsets: function(event) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: !1,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }, this.offset.click = {
                left: event.pageX - this.offset.left,
                top: event.pageY - this.offset.top
            };
        },
        _mouseDrag: function(event, noPropagation) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(event, !0), 
            this.positionAbs = this._convertPositionTo("absolute"), !noPropagation) {
                var ui = this._uiHash();
                if (!1 === this._trigger("drag", event, ui)) return this._mouseUp(new $.Event("mouseup", event)), 
                !1;
                this.position = ui.position;
            }
            return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", 
            $.ui.ddmanager && $.ui.ddmanager.drag(this, event), !1;
        },
        _mouseStop: function(event) {
            var that = this, dropped = !1;
            return $.ui.ddmanager && !this.options.dropBehaviour && (dropped = $.ui.ddmanager.drop(this, event)), 
            this.dropped && (dropped = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !dropped || "valid" === this.options.revert && dropped || !0 === this.options.revert || $.isFunction(this.options.revert) && this.options.revert.call(this.element, dropped) ? $(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                !1 !== that._trigger("stop", event) && that._clear();
            }) : !1 !== this._trigger("stop", event) && this._clear(), !1;
        },
        _mouseUp: function(event) {
            return this._unblockFrames(), $.ui.ddmanager && $.ui.ddmanager.dragStop(this, event), 
            this.handleElement.is(event.target) && this.element.trigger("focus"), $.ui.mouse.prototype._mouseUp.call(this, event);
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new $.Event("mouseup", {
                target: this.element[0]
            })) : this._clear(), this;
        },
        _getHandle: function(event) {
            return !this.options.handle || !!$(event.target).closest(this.element.find(this.options.handle)).length;
        },
        _setHandleClassName: function() {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, 
            this._addClass(this.handleElement, "ui-draggable-handle");
        },
        _removeHandleClassName: function() {
            this._removeClass(this.handleElement, "ui-draggable-handle");
        },
        _createHelper: function(event) {
            var o = this.options, helperIsFunction = $.isFunction(o.helper), helper = helperIsFunction ? $(o.helper.apply(this.element[0], [ event ])) : "clone" === o.helper ? this.element.clone().removeAttr("id") : this.element;
            return helper.parents("body").length || helper.appendTo("parent" === o.appendTo ? this.element[0].parentNode : o.appendTo), 
            helperIsFunction && helper[0] === this.element[0] && this._setPositionRelative(), 
            helper[0] === this.element[0] || /(fixed|absolute)/.test(helper.css("position")) || helper.css("position", "absolute"), 
            helper;
        },
        _setPositionRelative: function() {
            /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative");
        },
        _adjustOffsetFromHelper: function(obj) {
            "string" == typeof obj && (obj = obj.split(" ")), $.isArray(obj) && (obj = {
                left: +obj[0],
                top: +obj[1] || 0
            }), "left" in obj && (this.offset.click.left = obj.left + this.margins.left), "right" in obj && (this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left), 
            "top" in obj && (this.offset.click.top = obj.top + this.margins.top), "bottom" in obj && (this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top);
        },
        _isRootNode: function(element) {
            return /(html|body)/i.test(element.tagName) || element === this.document[0];
        },
        _getParentOffset: function() {
            var po = this.offsetParent.offset(), document = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && $.contains(this.scrollParent[0], this.offsetParent[0]) && (po.left += this.scrollParent.scrollLeft(), 
            po.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (po = {
                top: 0,
                left: 0
            }), {
                top: po.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: po.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            };
        },
        _getRelativeOffset: function() {
            if ("relative" !== this.cssPosition) return {
                top: 0,
                left: 0
            };
            var p = this.element.position(), scrollIsRootNode = this._isRootNode(this.scrollParent[0]);
            return {
                top: p.top - (parseInt(this.helper.css("top"), 10) || 0) + (scrollIsRootNode ? 0 : this.scrollParent.scrollTop()),
                left: p.left - (parseInt(this.helper.css("left"), 10) || 0) + (scrollIsRootNode ? 0 : this.scrollParent.scrollLeft())
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
            var isUserScrollable, c, ce, o = this.options, document = this.document[0];
            this.relativeContainer = null, o.containment ? "window" !== o.containment ? "document" !== o.containment ? o.containment.constructor !== Array ? ("parent" === o.containment && (o.containment = this.helper[0].parentNode), 
            (ce = (c = $(o.containment))[0]) && (isUserScrollable = /(scroll|auto)/.test(c.css("overflow")), 
            this.containment = [ (parseInt(c.css("borderLeftWidth"), 10) || 0) + (parseInt(c.css("paddingLeft"), 10) || 0), (parseInt(c.css("borderTopWidth"), 10) || 0) + (parseInt(c.css("paddingTop"), 10) || 0), (isUserScrollable ? Math.max(ce.scrollWidth, ce.offsetWidth) : ce.offsetWidth) - (parseInt(c.css("borderRightWidth"), 10) || 0) - (parseInt(c.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (isUserScrollable ? Math.max(ce.scrollHeight, ce.offsetHeight) : ce.offsetHeight) - (parseInt(c.css("borderBottomWidth"), 10) || 0) - (parseInt(c.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom ], 
            this.relativeContainer = c)) : this.containment = o.containment : this.containment = [ 0, 0, $(document).width() - this.helperProportions.width - this.margins.left, ($(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ] : this.containment = [ $(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, $(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, $(window).scrollLeft() + $(window).width() - this.helperProportions.width - this.margins.left, $(window).scrollTop() + ($(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ] : this.containment = null;
        },
        _convertPositionTo: function(d, pos) {
            pos || (pos = this.position);
            var mod = "absolute" === d ? 1 : -1, scrollIsRootNode = this._isRootNode(this.scrollParent[0]);
            return {
                top: pos.top + this.offset.relative.top * mod + this.offset.parent.top * mod - ("fixed" === this.cssPosition ? -this.offset.scroll.top : scrollIsRootNode ? 0 : this.offset.scroll.top) * mod,
                left: pos.left + this.offset.relative.left * mod + this.offset.parent.left * mod - ("fixed" === this.cssPosition ? -this.offset.scroll.left : scrollIsRootNode ? 0 : this.offset.scroll.left) * mod
            };
        },
        _generatePosition: function(event, constrainPosition) {
            var containment, co, top, left, o = this.options, scrollIsRootNode = this._isRootNode(this.scrollParent[0]), pageX = event.pageX, pageY = event.pageY;
            return scrollIsRootNode && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            }), constrainPosition && (this.containment && (containment = this.relativeContainer ? (co = this.relativeContainer.offset(), 
            [ this.containment[0] + co.left, this.containment[1] + co.top, this.containment[2] + co.left, this.containment[3] + co.top ]) : this.containment, 
            event.pageX - this.offset.click.left < containment[0] && (pageX = containment[0] + this.offset.click.left), 
            event.pageY - this.offset.click.top < containment[1] && (pageY = containment[1] + this.offset.click.top), 
            event.pageX - this.offset.click.left > containment[2] && (pageX = containment[2] + this.offset.click.left), 
            event.pageY - this.offset.click.top > containment[3] && (pageY = containment[3] + this.offset.click.top)), 
            o.grid && (top = o.grid[1] ? this.originalPageY + Math.round((pageY - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, 
            pageY = containment ? top - this.offset.click.top >= containment[1] || top - this.offset.click.top > containment[3] ? top : top - this.offset.click.top >= containment[1] ? top - o.grid[1] : top + o.grid[1] : top, 
            left = o.grid[0] ? this.originalPageX + Math.round((pageX - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, 
            pageX = containment ? left - this.offset.click.left >= containment[0] || left - this.offset.click.left > containment[2] ? left : left - this.offset.click.left >= containment[0] ? left - o.grid[0] : left + o.grid[0] : left), 
            "y" === o.axis && (pageX = this.originalPageX), "x" === o.axis && (pageY = this.originalPageY)), 
            {
                top: pageY - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : scrollIsRootNode ? 0 : this.offset.scroll.top),
                left: pageX - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : scrollIsRootNode ? 0 : this.offset.scroll.left)
            };
        },
        _clear: function() {
            this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), 
            this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy();
        },
        _trigger: function(type, event, ui) {
            return ui = ui || this._uiHash(), $.ui.plugin.call(this, type, [ event, ui, this ], !0), 
            /^(drag|start|stop)/.test(type) && (this.positionAbs = this._convertPositionTo("absolute"), 
            ui.offset = this.positionAbs), $.Widget.prototype._trigger.call(this, type, event, ui);
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
    }), $.ui.plugin.add("draggable", "connectToSortable", {
        start: function(event, ui, draggable) {
            var uiSortable = $.extend({}, ui, {
                item: draggable.element
            });
            draggable.sortables = [], $(draggable.options.connectToSortable).each(function() {
                var sortable = $(this).sortable("instance");
                sortable && !sortable.options.disabled && (draggable.sortables.push(sortable), sortable.refreshPositions(), 
                sortable._trigger("activate", event, uiSortable));
            });
        },
        stop: function(event, ui, draggable) {
            var uiSortable = $.extend({}, ui, {
                item: draggable.element
            });
            draggable.cancelHelperRemoval = !1, $.each(draggable.sortables, function() {
                this.isOver ? (this.isOver = 0, draggable.cancelHelperRemoval = !0, this.cancelHelperRemoval = !1, 
                this._storedCSS = {
                    position: this.placeholder.css("position"),
                    top: this.placeholder.css("top"),
                    left: this.placeholder.css("left")
                }, this._mouseStop(event), this.options.helper = this.options._helper) : (this.cancelHelperRemoval = !0, 
                this._trigger("deactivate", event, uiSortable));
            });
        },
        drag: function(event, ui, draggable) {
            $.each(draggable.sortables, function() {
                var innermostIntersecting = !1, sortable = this;
                sortable.positionAbs = draggable.positionAbs, sortable.helperProportions = draggable.helperProportions, 
                sortable.offset.click = draggable.offset.click, sortable._intersectsWith(sortable.containerCache) && (innermostIntersecting = !0, 
                $.each(draggable.sortables, function() {
                    return this.positionAbs = draggable.positionAbs, this.helperProportions = draggable.helperProportions, 
                    this.offset.click = draggable.offset.click, this !== sortable && this._intersectsWith(this.containerCache) && $.contains(sortable.element[0], this.element[0]) && (innermostIntersecting = !1), 
                    innermostIntersecting;
                })), innermostIntersecting ? (sortable.isOver || (sortable.isOver = 1, draggable._parent = ui.helper.parent(), 
                sortable.currentItem = ui.helper.appendTo(sortable.element).data("ui-sortable-item", !0), 
                sortable.options._helper = sortable.options.helper, sortable.options.helper = function() {
                    return ui.helper[0];
                }, event.target = sortable.currentItem[0], sortable._mouseCapture(event, !0), sortable._mouseStart(event, !0, !0), 
                sortable.offset.click.top = draggable.offset.click.top, sortable.offset.click.left = draggable.offset.click.left, 
                sortable.offset.parent.left -= draggable.offset.parent.left - sortable.offset.parent.left, 
                sortable.offset.parent.top -= draggable.offset.parent.top - sortable.offset.parent.top, 
                draggable._trigger("toSortable", event), draggable.dropped = sortable.element, $.each(draggable.sortables, function() {
                    this.refreshPositions();
                }), draggable.currentItem = draggable.element, sortable.fromOutside = draggable), 
                sortable.currentItem && (sortable._mouseDrag(event), ui.position = sortable.position)) : sortable.isOver && (sortable.isOver = 0, 
                sortable.cancelHelperRemoval = !0, sortable.options._revert = sortable.options.revert, 
                sortable.options.revert = !1, sortable._trigger("out", event, sortable._uiHash(sortable)), 
                sortable._mouseStop(event, !0), sortable.options.revert = sortable.options._revert, 
                sortable.options.helper = sortable.options._helper, sortable.placeholder && sortable.placeholder.remove(), 
                ui.helper.appendTo(draggable._parent), draggable._refreshOffsets(event), ui.position = draggable._generatePosition(event, !0), 
                draggable._trigger("fromSortable", event), draggable.dropped = !1, $.each(draggable.sortables, function() {
                    this.refreshPositions();
                }));
            });
        }
    }), $.ui.plugin.add("draggable", "cursor", {
        start: function(event, ui, instance) {
            var t = $("body"), o = instance.options;
            t.css("cursor") && (o._cursor = t.css("cursor")), t.css("cursor", o.cursor);
        },
        stop: function(event, ui, instance) {
            var o = instance.options;
            o._cursor && $("body").css("cursor", o._cursor);
        }
    }), $.ui.plugin.add("draggable", "opacity", {
        start: function(event, ui, instance) {
            var t = $(ui.helper), o = instance.options;
            t.css("opacity") && (o._opacity = t.css("opacity")), t.css("opacity", o.opacity);
        },
        stop: function(event, ui, instance) {
            var o = instance.options;
            o._opacity && $(ui.helper).css("opacity", o._opacity);
        }
    }), $.ui.plugin.add("draggable", "scroll", {
        start: function(event, ui, i) {
            i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), 
            i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset());
        },
        drag: function(event, ui, i) {
            var o = i.options, scrolled = !1, scrollParent = i.scrollParentNotHidden[0], document = i.document[0];
            scrollParent !== document && "HTML" !== scrollParent.tagName ? (o.axis && "x" === o.axis || (i.overflowOffset.top + scrollParent.offsetHeight - event.pageY < o.scrollSensitivity ? scrollParent.scrollTop = scrolled = scrollParent.scrollTop + o.scrollSpeed : event.pageY - i.overflowOffset.top < o.scrollSensitivity && (scrollParent.scrollTop = scrolled = scrollParent.scrollTop - o.scrollSpeed)), 
            o.axis && "y" === o.axis || (i.overflowOffset.left + scrollParent.offsetWidth - event.pageX < o.scrollSensitivity ? scrollParent.scrollLeft = scrolled = scrollParent.scrollLeft + o.scrollSpeed : event.pageX - i.overflowOffset.left < o.scrollSensitivity && (scrollParent.scrollLeft = scrolled = scrollParent.scrollLeft - o.scrollSpeed))) : (o.axis && "x" === o.axis || (event.pageY - $(document).scrollTop() < o.scrollSensitivity ? scrolled = $(document).scrollTop($(document).scrollTop() - o.scrollSpeed) : $(window).height() - (event.pageY - $(document).scrollTop()) < o.scrollSensitivity && (scrolled = $(document).scrollTop($(document).scrollTop() + o.scrollSpeed))), 
            o.axis && "y" === o.axis || (event.pageX - $(document).scrollLeft() < o.scrollSensitivity ? scrolled = $(document).scrollLeft($(document).scrollLeft() - o.scrollSpeed) : $(window).width() - (event.pageX - $(document).scrollLeft()) < o.scrollSensitivity && (scrolled = $(document).scrollLeft($(document).scrollLeft() + o.scrollSpeed)))), 
            !1 !== scrolled && $.ui.ddmanager && !o.dropBehaviour && $.ui.ddmanager.prepareOffsets(i, event);
        }
    }), $.ui.plugin.add("draggable", "snap", {
        start: function(event, ui, i) {
            var o = i.options;
            i.snapElements = [], $(o.snap.constructor !== String ? o.snap.items || ":data(ui-draggable)" : o.snap).each(function() {
                var $t = $(this), $o = $t.offset();
                this !== i.element[0] && i.snapElements.push({
                    item: this,
                    width: $t.outerWidth(),
                    height: $t.outerHeight(),
                    top: $o.top,
                    left: $o.left
                });
            });
        },
        drag: function(event, ui, inst) {
            var ts, bs, ls, rs, l, r, t, b, i, first, o = inst.options, d = o.snapTolerance, x1 = ui.offset.left, x2 = x1 + inst.helperProportions.width, y1 = ui.offset.top, y2 = y1 + inst.helperProportions.height;
            for (i = inst.snapElements.length - 1; 0 <= i; i--) r = (l = inst.snapElements[i].left - inst.margins.left) + inst.snapElements[i].width, 
            b = (t = inst.snapElements[i].top - inst.margins.top) + inst.snapElements[i].height, 
            x2 < l - d || r + d < x1 || y2 < t - d || b + d < y1 || !$.contains(inst.snapElements[i].item.ownerDocument, inst.snapElements[i].item) ? (inst.snapElements[i].snapping && inst.options.snap.release && inst.options.snap.release.call(inst.element, event, $.extend(inst._uiHash(), {
                snapItem: inst.snapElements[i].item
            })), inst.snapElements[i].snapping = !1) : ("inner" !== o.snapMode && (ts = Math.abs(t - y2) <= d, 
            bs = Math.abs(b - y1) <= d, ls = Math.abs(l - x2) <= d, rs = Math.abs(r - x1) <= d, 
            ts && (ui.position.top = inst._convertPositionTo("relative", {
                top: t - inst.helperProportions.height,
                left: 0
            }).top), bs && (ui.position.top = inst._convertPositionTo("relative", {
                top: b,
                left: 0
            }).top), ls && (ui.position.left = inst._convertPositionTo("relative", {
                top: 0,
                left: l - inst.helperProportions.width
            }).left), rs && (ui.position.left = inst._convertPositionTo("relative", {
                top: 0,
                left: r
            }).left)), first = ts || bs || ls || rs, "outer" !== o.snapMode && (ts = Math.abs(t - y1) <= d, 
            bs = Math.abs(b - y2) <= d, ls = Math.abs(l - x1) <= d, rs = Math.abs(r - x2) <= d, 
            ts && (ui.position.top = inst._convertPositionTo("relative", {
                top: t,
                left: 0
            }).top), bs && (ui.position.top = inst._convertPositionTo("relative", {
                top: b - inst.helperProportions.height,
                left: 0
            }).top), ls && (ui.position.left = inst._convertPositionTo("relative", {
                top: 0,
                left: l
            }).left), rs && (ui.position.left = inst._convertPositionTo("relative", {
                top: 0,
                left: r - inst.helperProportions.width
            }).left)), !inst.snapElements[i].snapping && (ts || bs || ls || rs || first) && inst.options.snap.snap && inst.options.snap.snap.call(inst.element, event, $.extend(inst._uiHash(), {
                snapItem: inst.snapElements[i].item
            })), inst.snapElements[i].snapping = ts || bs || ls || rs || first);
        }
    }), $.ui.plugin.add("draggable", "stack", {
        start: function(event, ui, instance) {
            var min, o = instance.options, group = $.makeArray($(o.stack)).sort(function(a, b) {
                return (parseInt($(a).css("zIndex"), 10) || 0) - (parseInt($(b).css("zIndex"), 10) || 0);
            });
            group.length && (min = parseInt($(group[0]).css("zIndex"), 10) || 0, $(group).each(function(i) {
                $(this).css("zIndex", min + i);
            }), this.css("zIndex", min + group.length));
        }
    }), $.ui.plugin.add("draggable", "zIndex", {
        start: function(event, ui, instance) {
            var t = $(ui.helper), o = instance.options;
            t.css("zIndex") && (o._zIndex = t.css("zIndex")), t.css("zIndex", o.zIndex);
        },
        stop: function(event, ui, instance) {
            var o = instance.options;
            o._zIndex && $(ui.helper).css("zIndex", o._zIndex);
        }
    });
    $.ui.draggable;
    $.widget("ui.resizable", $.ui.mouse, {
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
        _num: function(value) {
            return parseFloat(value) || 0;
        },
        _isNumber: function(value) {
            return !isNaN(parseFloat(value));
        },
        _hasScroll: function(el, a) {
            if ("hidden" === $(el).css("overflow")) return !1;
            var has, scroll = a && "left" === a ? "scrollLeft" : "scrollTop";
            return 0 < el[scroll] || (el[scroll] = 1, has = 0 < el[scroll], el[scroll] = 0, 
            has);
        },
        _create: function() {
            var margins, o = this.options, that = this;
            this._addClass("ui-resizable"), $.extend(this, {
                _aspectRatio: !!o.aspectRatio,
                aspectRatio: o.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: o.helper || o.ghost || o.animate ? o.helper || "ui-resizable-helper" : null
            }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap($("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), 
            this.elementIsWrapper = !0, margins = {
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom"),
                marginLeft: this.originalElement.css("marginLeft")
            }, this.element.css(margins), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), 
            this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css(margins), this._proportionallyResize()), this._setupHandles(), 
            o.autoHide && $(this.element).on("mouseenter", function() {
                o.disabled || (that._removeClass("ui-resizable-autohide"), that._handles.show());
            }).on("mouseleave", function() {
                o.disabled || that.resizing || (that._addClass("ui-resizable-autohide"), that._handles.hide());
            }), this._mouseInit();
        },
        _destroy: function() {
            this._mouseDestroy();
            var wrapper, _destroy = function(exp) {
                $(exp).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove();
            };
            return this.elementIsWrapper && (_destroy(this.element), wrapper = this.element, 
            this.originalElement.css({
                position: wrapper.css("position"),
                width: wrapper.outerWidth(),
                height: wrapper.outerHeight(),
                top: wrapper.css("top"),
                left: wrapper.css("left")
            }).insertAfter(wrapper), wrapper.remove()), this.originalElement.css("resize", this.originalResizeStyle), 
            _destroy(this.originalElement), this;
        },
        _setOption: function(key, value) {
            switch (this._super(key, value), key) {
              case "handles":
                this._removeHandles(), this._setupHandles();
            }
        },
        _setupHandles: function() {
            var handle, i, n, hname, axis, o = this.options, that = this;
            if (this.handles = o.handles || ($(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se"), this._handles = $(), this.handles.constructor === String) for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), 
            n = this.handles.split(","), this.handles = {}, i = 0; i < n.length; i++) hname = "ui-resizable-" + (handle = $.trim(n[i])), 
            axis = $("<div>"), this._addClass(axis, "ui-resizable-handle " + hname), axis.css({
                zIndex: o.zIndex
            }), this.handles[handle] = ".ui-resizable-" + handle, this.element.append(axis);
            this._renderAxis = function(target) {
                var i, axis, padPos, padWrapper;
                for (i in target = target || this.element, this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = $(this.handles[i]), 
                this._on(this.handles[i], {
                    mousedown: that._mouseDown
                })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (axis = $(this.handles[i], this.element), 
                padWrapper = /sw|ne|nw|se|n|s/.test(i) ? axis.outerHeight() : axis.outerWidth(), 
                padPos = [ "padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left" ].join(""), 
                target.css(padPos, padWrapper), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i]);
            }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), 
            this._handles.disableSelection(), this._handles.on("mouseover", function() {
                that.resizing || (this.className && (axis = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), 
                that.axis = axis && axis[1] ? axis[1] : "se");
            }), o.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"));
        },
        _removeHandles: function() {
            this._handles.remove();
        },
        _mouseCapture: function(event) {
            var i, handle, capture = !1;
            for (i in this.handles) ((handle = $(this.handles[i])[0]) === event.target || $.contains(handle, event.target)) && (capture = !0);
            return !this.options.disabled && capture;
        },
        _mouseStart: function(event) {
            var curleft, curtop, cursor, o = this.options, el = this.element;
            return this.resizing = !0, this._renderProxy(), curleft = this._num(this.helper.css("left")), 
            curtop = this._num(this.helper.css("top")), o.containment && (curleft += $(o.containment).scrollLeft() || 0, 
            curtop += $(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), 
            this.position = {
                left: curleft,
                top: curtop
            }, this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: el.width(),
                height: el.height()
            }, this.originalSize = this._helper ? {
                width: el.outerWidth(),
                height: el.outerHeight()
            } : {
                width: el.width(),
                height: el.height()
            }, this.sizeDiff = {
                width: el.outerWidth() - el.width(),
                height: el.outerHeight() - el.height()
            }, this.originalPosition = {
                left: curleft,
                top: curtop
            }, this.originalMousePosition = {
                left: event.pageX,
                top: event.pageY
            }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, 
            cursor = $(".ui-resizable-" + this.axis).css("cursor"), $("body").css("cursor", "auto" === cursor ? this.axis + "-resize" : cursor), 
            this._addClass("ui-resizable-resizing"), this._propagate("start", event), !0;
        },
        _mouseDrag: function(event) {
            var data, props, smp = this.originalMousePosition, a = this.axis, dx = event.pageX - smp.left || 0, dy = event.pageY - smp.top || 0, trigger = this._change[a];
            return this._updatePrevProperties(), trigger && (data = trigger.apply(this, [ event, dx, dy ]), 
            this._updateVirtualBoundaries(event.shiftKey), (this._aspectRatio || event.shiftKey) && (data = this._updateRatio(data, event)), 
            data = this._respectSize(data, event), this._updateCache(data), this._propagate("resize", event), 
            props = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), 
            $.isEmptyObject(props) || (this._updatePrevProperties(), this._trigger("resize", event, this.ui()), 
            this._applyChanges())), !1;
        },
        _mouseStop: function(event) {
            this.resizing = !1;
            var pr, ista, soffseth, soffsetw, s, left, top, o = this.options;
            return this._helper && (soffseth = (ista = (pr = this._proportionallyResizeElements).length && /textarea/i.test(pr[0].nodeName)) && this._hasScroll(pr[0], "left") ? 0 : this.sizeDiff.height, 
            soffsetw = ista ? 0 : this.sizeDiff.width, s = {
                width: this.helper.width() - soffsetw,
                height: this.helper.height() - soffseth
            }, left = parseFloat(this.element.css("left")) + (this.position.left - this.originalPosition.left) || null, 
            top = parseFloat(this.element.css("top")) + (this.position.top - this.originalPosition.top) || null, 
            o.animate || this.element.css($.extend(s, {
                top: top,
                left: left
            })), this.helper.height(this.size.height), this.helper.width(this.size.width), this._helper && !o.animate && this._proportionallyResize()), 
            $("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", event), 
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
            var props = {};
            return this.position.top !== this.prevPosition.top && (props.top = this.position.top + "px"), 
            this.position.left !== this.prevPosition.left && (props.left = this.position.left + "px"), 
            this.size.width !== this.prevSize.width && (props.width = this.size.width + "px"), 
            this.size.height !== this.prevSize.height && (props.height = this.size.height + "px"), 
            this.helper.css(props), props;
        },
        _updateVirtualBoundaries: function(forceAspectRatio) {
            var pMinWidth, pMaxWidth, pMinHeight, pMaxHeight, b, o = this.options;
            b = {
                minWidth: this._isNumber(o.minWidth) ? o.minWidth : 0,
                maxWidth: this._isNumber(o.maxWidth) ? o.maxWidth : 1 / 0,
                minHeight: this._isNumber(o.minHeight) ? o.minHeight : 0,
                maxHeight: this._isNumber(o.maxHeight) ? o.maxHeight : 1 / 0
            }, (this._aspectRatio || forceAspectRatio) && (pMinWidth = b.minHeight * this.aspectRatio, 
            pMinHeight = b.minWidth / this.aspectRatio, pMaxWidth = b.maxHeight * this.aspectRatio, 
            pMaxHeight = b.maxWidth / this.aspectRatio, pMinWidth > b.minWidth && (b.minWidth = pMinWidth), 
            pMinHeight > b.minHeight && (b.minHeight = pMinHeight), pMaxWidth < b.maxWidth && (b.maxWidth = pMaxWidth), 
            pMaxHeight < b.maxHeight && (b.maxHeight = pMaxHeight)), this._vBoundaries = b;
        },
        _updateCache: function(data) {
            this.offset = this.helper.offset(), this._isNumber(data.left) && (this.position.left = data.left), 
            this._isNumber(data.top) && (this.position.top = data.top), this._isNumber(data.height) && (this.size.height = data.height), 
            this._isNumber(data.width) && (this.size.width = data.width);
        },
        _updateRatio: function(data) {
            var cpos = this.position, csize = this.size, a = this.axis;
            return this._isNumber(data.height) ? data.width = data.height * this.aspectRatio : this._isNumber(data.width) && (data.height = data.width / this.aspectRatio), 
            "sw" === a && (data.left = cpos.left + (csize.width - data.width), data.top = null), 
            "nw" === a && (data.top = cpos.top + (csize.height - data.height), data.left = cpos.left + (csize.width - data.width)), 
            data;
        },
        _respectSize: function(data) {
            var o = this._vBoundaries, a = this.axis, ismaxw = this._isNumber(data.width) && o.maxWidth && o.maxWidth < data.width, ismaxh = this._isNumber(data.height) && o.maxHeight && o.maxHeight < data.height, isminw = this._isNumber(data.width) && o.minWidth && o.minWidth > data.width, isminh = this._isNumber(data.height) && o.minHeight && o.minHeight > data.height, dw = this.originalPosition.left + this.originalSize.width, dh = this.originalPosition.top + this.originalSize.height, cw = /sw|nw|w/.test(a), ch = /nw|ne|n/.test(a);
            return isminw && (data.width = o.minWidth), isminh && (data.height = o.minHeight), 
            ismaxw && (data.width = o.maxWidth), ismaxh && (data.height = o.maxHeight), isminw && cw && (data.left = dw - o.minWidth), 
            ismaxw && cw && (data.left = dw - o.maxWidth), isminh && ch && (data.top = dh - o.minHeight), 
            ismaxh && ch && (data.top = dh - o.maxHeight), data.width || data.height || data.left || !data.top ? data.width || data.height || data.top || !data.left || (data.left = null) : data.top = null, 
            data;
        },
        _getPaddingPlusBorderDimensions: function(element) {
            for (var i = 0, widths = [], borders = [ element.css("borderTopWidth"), element.css("borderRightWidth"), element.css("borderBottomWidth"), element.css("borderLeftWidth") ], paddings = [ element.css("paddingTop"), element.css("paddingRight"), element.css("paddingBottom"), element.css("paddingLeft") ]; i < 4; i++) widths[i] = parseFloat(borders[i]) || 0, 
            widths[i] += parseFloat(paddings[i]) || 0;
            return {
                height: widths[0] + widths[2],
                width: widths[1] + widths[3]
            };
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length) for (var prel, i = 0, element = this.helper || this.element; i < this._proportionallyResizeElements.length; i++) prel = this._proportionallyResizeElements[i], 
            this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(prel)), 
            prel.css({
                height: element.height() - this.outerDimensions.height || 0,
                width: element.width() - this.outerDimensions.width || 0
            });
        },
        _renderProxy: function() {
            var el = this.element, o = this.options;
            this.elementOffset = el.offset(), this._helper ? (this.helper = this.helper || $("<div style='overflow:hidden;'></div>"), 
            this._addClass(this.helper, this._helper), this.helper.css({
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++o.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element;
        },
        _change: {
            e: function(event, dx) {
                return {
                    width: this.originalSize.width + dx
                };
            },
            w: function(event, dx) {
                var cs = this.originalSize;
                return {
                    left: this.originalPosition.left + dx,
                    width: cs.width - dx
                };
            },
            n: function(event, dx, dy) {
                var cs = this.originalSize;
                return {
                    top: this.originalPosition.top + dy,
                    height: cs.height - dy
                };
            },
            s: function(event, dx, dy) {
                return {
                    height: this.originalSize.height + dy
                };
            },
            se: function(event, dx, dy) {
                return $.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [ event, dx, dy ]));
            },
            sw: function(event, dx, dy) {
                return $.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [ event, dx, dy ]));
            },
            ne: function(event, dx, dy) {
                return $.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [ event, dx, dy ]));
            },
            nw: function(event, dx, dy) {
                return $.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [ event, dx, dy ]));
            }
        },
        _propagate: function(n, event) {
            $.ui.plugin.call(this, n, [ event, this.ui() ]), "resize" !== n && this._trigger(n, event, this.ui());
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
    }), $.ui.plugin.add("resizable", "animate", {
        stop: function(event) {
            var that = $(this).resizable("instance"), o = that.options, pr = that._proportionallyResizeElements, ista = pr.length && /textarea/i.test(pr[0].nodeName), soffseth = ista && that._hasScroll(pr[0], "left") ? 0 : that.sizeDiff.height, soffsetw = ista ? 0 : that.sizeDiff.width, style = {
                width: that.size.width - soffsetw,
                height: that.size.height - soffseth
            }, left = parseFloat(that.element.css("left")) + (that.position.left - that.originalPosition.left) || null, top = parseFloat(that.element.css("top")) + (that.position.top - that.originalPosition.top) || null;
            that.element.animate($.extend(style, top && left ? {
                top: top,
                left: left
            } : {}), {
                duration: o.animateDuration,
                easing: o.animateEasing,
                step: function() {
                    var data = {
                        width: parseFloat(that.element.css("width")),
                        height: parseFloat(that.element.css("height")),
                        top: parseFloat(that.element.css("top")),
                        left: parseFloat(that.element.css("left"))
                    };
                    pr && pr.length && $(pr[0]).css({
                        width: data.width,
                        height: data.height
                    }), that._updateCache(data), that._propagate("resize", event);
                }
            });
        }
    }), $.ui.plugin.add("resizable", "containment", {
        start: function() {
            var element, p, co, ch, cw, width, height, that = $(this).resizable("instance"), o = that.options, el = that.element, oc = o.containment, ce = oc instanceof $ ? oc.get(0) : /parent/.test(oc) ? el.parent().get(0) : oc;
            ce && (that.containerElement = $(ce), /document/.test(oc) || oc === document ? (that.containerOffset = {
                left: 0,
                top: 0
            }, that.containerPosition = {
                left: 0,
                top: 0
            }, that.parentData = {
                element: $(document),
                left: 0,
                top: 0,
                width: $(document).width(),
                height: $(document).height() || document.body.parentNode.scrollHeight
            }) : (element = $(ce), p = [], $([ "Top", "Right", "Left", "Bottom" ]).each(function(i, name) {
                p[i] = that._num(element.css("padding" + name));
            }), that.containerOffset = element.offset(), that.containerPosition = element.position(), 
            that.containerSize = {
                height: element.innerHeight() - p[3],
                width: element.innerWidth() - p[1]
            }, co = that.containerOffset, ch = that.containerSize.height, cw = that.containerSize.width, 
            width = that._hasScroll(ce, "left") ? ce.scrollWidth : cw, height = that._hasScroll(ce) ? ce.scrollHeight : ch, 
            that.parentData = {
                element: ce,
                left: co.left,
                top: co.top,
                width: width,
                height: height
            }));
        },
        resize: function(event) {
            var woset, hoset, isParent, isOffsetRelative, that = $(this).resizable("instance"), o = that.options, co = that.containerOffset, cp = that.position, pRatio = that._aspectRatio || event.shiftKey, cop = {
                top: 0,
                left: 0
            }, ce = that.containerElement, continueResize = !0;
            ce[0] !== document && /static/.test(ce.css("position")) && (cop = co), cp.left < (that._helper ? co.left : 0) && (that.size.width = that.size.width + (that._helper ? that.position.left - co.left : that.position.left - cop.left), 
            pRatio && (that.size.height = that.size.width / that.aspectRatio, continueResize = !1), 
            that.position.left = o.helper ? co.left : 0), cp.top < (that._helper ? co.top : 0) && (that.size.height = that.size.height + (that._helper ? that.position.top - co.top : that.position.top), 
            pRatio && (that.size.width = that.size.height * that.aspectRatio, continueResize = !1), 
            that.position.top = that._helper ? co.top : 0), isParent = that.containerElement.get(0) === that.element.parent().get(0), 
            isOffsetRelative = /relative|absolute/.test(that.containerElement.css("position")), 
            isParent && isOffsetRelative ? (that.offset.left = that.parentData.left + that.position.left, 
            that.offset.top = that.parentData.top + that.position.top) : (that.offset.left = that.element.offset().left, 
            that.offset.top = that.element.offset().top), woset = Math.abs(that.sizeDiff.width + (that._helper ? that.offset.left - cop.left : that.offset.left - co.left)), 
            hoset = Math.abs(that.sizeDiff.height + (that._helper ? that.offset.top - cop.top : that.offset.top - co.top)), 
            woset + that.size.width >= that.parentData.width && (that.size.width = that.parentData.width - woset, 
            pRatio && (that.size.height = that.size.width / that.aspectRatio, continueResize = !1)), 
            hoset + that.size.height >= that.parentData.height && (that.size.height = that.parentData.height - hoset, 
            pRatio && (that.size.width = that.size.height * that.aspectRatio, continueResize = !1)), 
            continueResize || (that.position.left = that.prevPosition.left, that.position.top = that.prevPosition.top, 
            that.size.width = that.prevSize.width, that.size.height = that.prevSize.height);
        },
        stop: function() {
            var that = $(this).resizable("instance"), o = that.options, co = that.containerOffset, cop = that.containerPosition, ce = that.containerElement, helper = $(that.helper), ho = helper.offset(), w = helper.outerWidth() - that.sizeDiff.width, h = helper.outerHeight() - that.sizeDiff.height;
            that._helper && !o.animate && /relative/.test(ce.css("position")) && $(this).css({
                left: ho.left - cop.left - co.left,
                width: w,
                height: h
            }), that._helper && !o.animate && /static/.test(ce.css("position")) && $(this).css({
                left: ho.left - cop.left - co.left,
                width: w,
                height: h
            });
        }
    }), $.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var o = $(this).resizable("instance").options;
            $(o.alsoResize).each(function() {
                var el = $(this);
                el.data("ui-resizable-alsoresize", {
                    width: parseFloat(el.width()),
                    height: parseFloat(el.height()),
                    left: parseFloat(el.css("left")),
                    top: parseFloat(el.css("top"))
                });
            });
        },
        resize: function(event, ui) {
            var that = $(this).resizable("instance"), o = that.options, os = that.originalSize, op = that.originalPosition, delta = {
                height: that.size.height - os.height || 0,
                width: that.size.width - os.width || 0,
                top: that.position.top - op.top || 0,
                left: that.position.left - op.left || 0
            };
            $(o.alsoResize).each(function() {
                var el = $(this), start = $(this).data("ui-resizable-alsoresize"), style = {}, css = el.parents(ui.originalElement[0]).length ? [ "width", "height" ] : [ "width", "height", "top", "left" ];
                $.each(css, function(i, prop) {
                    var sum = (start[prop] || 0) + (delta[prop] || 0);
                    sum && 0 <= sum && (style[prop] = sum || null);
                }), el.css(style);
            });
        },
        stop: function() {
            $(this).removeData("ui-resizable-alsoresize");
        }
    }), $.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var that = $(this).resizable("instance"), cs = that.size;
            that.ghost = that.originalElement.clone(), that.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: cs.height,
                width: cs.width,
                margin: 0,
                left: 0,
                top: 0
            }), that._addClass(that.ghost, "ui-resizable-ghost"), !1 !== $.uiBackCompat && "string" == typeof that.options.ghost && that.ghost.addClass(this.options.ghost), 
            that.ghost.appendTo(that.helper);
        },
        resize: function() {
            var that = $(this).resizable("instance");
            that.ghost && that.ghost.css({
                position: "relative",
                height: that.size.height,
                width: that.size.width
            });
        },
        stop: function() {
            var that = $(this).resizable("instance");
            that.ghost && that.helper && that.helper.get(0).removeChild(that.ghost.get(0));
        }
    }), $.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var outerDimensions, that = $(this).resizable("instance"), o = that.options, cs = that.size, os = that.originalSize, op = that.originalPosition, a = that.axis, grid = "number" == typeof o.grid ? [ o.grid, o.grid ] : o.grid, gridX = grid[0] || 1, gridY = grid[1] || 1, ox = Math.round((cs.width - os.width) / gridX) * gridX, oy = Math.round((cs.height - os.height) / gridY) * gridY, newWidth = os.width + ox, newHeight = os.height + oy, isMaxWidth = o.maxWidth && o.maxWidth < newWidth, isMaxHeight = o.maxHeight && o.maxHeight < newHeight, isMinWidth = o.minWidth && o.minWidth > newWidth, isMinHeight = o.minHeight && o.minHeight > newHeight;
            o.grid = grid, isMinWidth && (newWidth += gridX), isMinHeight && (newHeight += gridY), 
            isMaxWidth && (newWidth -= gridX), isMaxHeight && (newHeight -= gridY), /^(se|s|e)$/.test(a) ? (that.size.width = newWidth, 
            that.size.height = newHeight) : /^(ne)$/.test(a) ? (that.size.width = newWidth, 
            that.size.height = newHeight, that.position.top = op.top - oy) : /^(sw)$/.test(a) ? (that.size.width = newWidth, 
            that.size.height = newHeight, that.position.left = op.left - ox) : ((newHeight - gridY <= 0 || newWidth - gridX <= 0) && (outerDimensions = that._getPaddingPlusBorderDimensions(this)), 
            0 < newHeight - gridY ? (that.size.height = newHeight, that.position.top = op.top - oy) : (newHeight = gridY - outerDimensions.height, 
            that.size.height = newHeight, that.position.top = op.top + os.height - newHeight), 
            0 < newWidth - gridX ? (that.size.width = newWidth, that.position.left = op.left - ox) : (newWidth = gridX - outerDimensions.width, 
            that.size.width = newWidth, that.position.left = op.left + os.width - newWidth));
        }
    });
    $.ui.resizable;
    $.widget("ui.dialog", {
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
                using: function(pos) {
                    var topOffset = $(this).css(pos).offset().top;
                    topOffset < 0 && $(this).css("top", pos.top - topOffset);
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
            this._createButtonPane(), this.options.draggable && $.fn.draggable && this._makeDraggable(), 
            this.options.resizable && $.fn.resizable && this._makeResizable(), this._isOpen = !1, 
            this._trackFocus();
        },
        _init: function() {
            this.options.autoOpen && this.open();
        },
        _appendTo: function() {
            var element = this.options.appendTo;
            return element && (element.jquery || element.nodeType) ? $(element) : this.document.find(element || "body").eq(0);
        },
        _destroy: function() {
            var next, originalPosition = this.originalPosition;
            this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), 
            this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), 
            (next = originalPosition.parent.children().eq(originalPosition.index)).length && next[0] !== this.element[0] ? next.before(this.element) : originalPosition.parent.append(this.element);
        },
        widget: function() {
            return this.uiDialog;
        },
        disable: $.noop,
        enable: $.noop,
        close: function(event) {
            var that = this;
            this._isOpen && !1 !== this._trigger("beforeClose", event) && (this._isOpen = !1, 
            this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || $.ui.safeBlur($.ui.safeActiveElement(this.document[0])), 
            this._hide(this.uiDialog, this.options.hide, function() {
                that._trigger("close", event);
            }));
        },
        isOpen: function() {
            return this._isOpen;
        },
        moveToTop: function() {
            this._moveToTop();
        },
        _moveToTop: function(event, silent) {
            var moved = !1, zIndices = this.uiDialog.siblings(".ui-front:visible").map(function() {
                return +$(this).css("z-index");
            }).get(), zIndexMax = Math.max.apply(null, zIndices);
            return zIndexMax >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", zIndexMax + 1), 
            moved = !0), moved && !silent && this._trigger("focus", event), moved;
        },
        open: function() {
            var that = this;
            this._isOpen ? this._moveToTop() && this._focusTabbable() : (this._isOpen = !0, 
            this.opener = $($.ui.safeActiveElement(this.document[0])), this._size(), this._position(), 
            this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), 
            this._show(this.uiDialog, this.options.show, function() {
                that._focusTabbable(), that._trigger("focus");
            }), this._makeFocusTarget(), this._trigger("open"));
        },
        _focusTabbable: function() {
            var hasFocus = this._focusedElement;
            hasFocus || (hasFocus = this.element.find("[autofocus]")), hasFocus.length || (hasFocus = this.element.find(":tabbable")), 
            hasFocus.length || (hasFocus = this.uiDialogButtonPane.find(":tabbable")), hasFocus.length || (hasFocus = this.uiDialogTitlebarClose.filter(":tabbable")), 
            hasFocus.length || (hasFocus = this.uiDialog), hasFocus.eq(0).trigger("focus");
        },
        _keepFocus: function(event) {
            function checkFocus() {
                var activeElement = $.ui.safeActiveElement(this.document[0]);
                this.uiDialog[0] === activeElement || $.contains(this.uiDialog[0], activeElement) || this._focusTabbable();
            }
            event.preventDefault(), checkFocus.call(this), this._delay(checkFocus);
        },
        _createWrapper: function() {
            this.uiDialog = $("<div>").hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), 
            this._on(this.uiDialog, {
                keydown: function(event) {
                    if (this.options.closeOnEscape && !event.isDefaultPrevented() && event.keyCode && event.keyCode === $.ui.keyCode.ESCAPE) return event.preventDefault(), 
                    void this.close(event);
                    if (event.keyCode === $.ui.keyCode.TAB && !event.isDefaultPrevented()) {
                        var tabbables = this.uiDialog.find(":tabbable"), first = tabbables.filter(":first"), last = tabbables.filter(":last");
                        event.target !== last[0] && event.target !== this.uiDialog[0] || event.shiftKey ? event.target !== first[0] && event.target !== this.uiDialog[0] || !event.shiftKey || (this._delay(function() {
                            last.trigger("focus");
                        }), event.preventDefault()) : (this._delay(function() {
                            first.trigger("focus");
                        }), event.preventDefault());
                    }
                },
                mousedown: function(event) {
                    this._moveToTop(event) && this._focusTabbable();
                }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            });
        },
        _createTitlebar: function() {
            var uiDialogTitle;
            this.uiDialogTitlebar = $("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), 
            this._on(this.uiDialogTitlebar, {
                mousedown: function(event) {
                    $(event.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus");
                }
            }), this.uiDialogTitlebarClose = $("<button type='button'></button>").button({
                label: $("<a>").text(this.options.closeText).html(),
                icon: "ui-icon-closethick",
                showLabel: !1
            }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), 
            this._on(this.uiDialogTitlebarClose, {
                click: function(event) {
                    event.preventDefault(), this.close(event);
                }
            }), uiDialogTitle = $("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(uiDialogTitle, "ui-dialog-title"), 
            this._title(uiDialogTitle), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({
                "aria-labelledby": uiDialogTitle.attr("id")
            });
        },
        _title: function(title) {
            this.options.title ? title.text(this.options.title) : title.html("&#160;");
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = $("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), 
            this.uiButtonSet = $("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), 
            this._createButtons();
        },
        _createButtons: function() {
            var that = this, buttons = this.options.buttons;
            this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), $.isEmptyObject(buttons) || $.isArray(buttons) && !buttons.length ? this._removeClass(this.uiDialog, "ui-dialog-buttons") : ($.each(buttons, function(name, props) {
                var click, buttonOptions;
                props = $.isFunction(props) ? {
                    click: props,
                    text: name
                } : props, props = $.extend({
                    type: "button"
                }, props), click = props.click, buttonOptions = {
                    icon: props.icon,
                    iconPosition: props.iconPosition,
                    showLabel: props.showLabel,
                    icons: props.icons,
                    text: props.text
                }, delete props.click, delete props.icon, delete props.iconPosition, delete props.showLabel, 
                delete props.icons, "boolean" == typeof props.text && delete props.text, $("<button></button>", props).button(buttonOptions).appendTo(that.uiButtonSet).on("click", function() {
                    click.apply(that.element[0], arguments);
                });
            }), this._addClass(this.uiDialog, "ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog));
        },
        _makeDraggable: function() {
            var that = this, options = this.options;
            function filteredUi(ui) {
                return {
                    position: ui.position,
                    offset: ui.offset
                };
            }
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(event, ui) {
                    that._addClass($(this), "ui-dialog-dragging"), that._blockFrames(), that._trigger("dragStart", event, filteredUi(ui));
                },
                drag: function(event, ui) {
                    that._trigger("drag", event, filteredUi(ui));
                },
                stop: function(event, ui) {
                    var left = ui.offset.left - that.document.scrollLeft(), top = ui.offset.top - that.document.scrollTop();
                    options.position = {
                        my: "left top",
                        at: "left" + (0 <= left ? "+" : "") + left + " top" + (0 <= top ? "+" : "") + top,
                        of: that.window
                    }, that._removeClass($(this), "ui-dialog-dragging"), that._unblockFrames(), that._trigger("dragStop", event, filteredUi(ui));
                }
            });
        },
        _makeResizable: function() {
            var that = this, options = this.options, handles = options.resizable, position = this.uiDialog.css("position"), resizeHandles = "string" == typeof handles ? handles : "n,e,s,w,se,sw,ne,nw";
            function filteredUi(ui) {
                return {
                    originalPosition: ui.originalPosition,
                    originalSize: ui.originalSize,
                    position: ui.position,
                    size: ui.size
                };
            }
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: options.maxWidth,
                maxHeight: options.maxHeight,
                minWidth: options.minWidth,
                minHeight: this._minHeight(),
                handles: resizeHandles,
                start: function(event, ui) {
                    that._addClass($(this), "ui-dialog-resizing"), that._blockFrames(), that._trigger("resizeStart", event, filteredUi(ui));
                },
                resize: function(event, ui) {
                    that._trigger("resize", event, filteredUi(ui));
                },
                stop: function(event, ui) {
                    var offset = that.uiDialog.offset(), left = offset.left - that.document.scrollLeft(), top = offset.top - that.document.scrollTop();
                    options.height = that.uiDialog.height(), options.width = that.uiDialog.width(), 
                    options.position = {
                        my: "left top",
                        at: "left" + (0 <= left ? "+" : "") + left + " top" + (0 <= top ? "+" : "") + top,
                        of: that.window
                    }, that._removeClass($(this), "ui-dialog-resizing"), that._unblockFrames(), that._trigger("resizeStop", event, filteredUi(ui));
                }
            }).css("position", position);
        },
        _trackFocus: function() {
            this._on(this.widget(), {
                focusin: function(event) {
                    this._makeFocusTarget(), this._focusedElement = $(event.target);
                }
            });
        },
        _makeFocusTarget: function() {
            this._untrackInstance(), this._trackingInstances().unshift(this);
        },
        _untrackInstance: function() {
            var instances = this._trackingInstances(), exists = $.inArray(this, instances);
            -1 !== exists && instances.splice(exists, 1);
        },
        _trackingInstances: function() {
            var instances = this.document.data("ui-dialog-instances");
            return instances || (instances = [], this.document.data("ui-dialog-instances", instances)), 
            instances;
        },
        _minHeight: function() {
            var options = this.options;
            return "auto" === options.height ? options.minHeight : Math.min(options.minHeight, options.height);
        },
        _position: function() {
            var isVisible = this.uiDialog.is(":visible");
            isVisible || this.uiDialog.show(), this.uiDialog.position(this.options.position), 
            isVisible || this.uiDialog.hide();
        },
        _setOptions: function(options) {
            var that = this, resize = !1, resizableOptions = {};
            $.each(options, function(key, value) {
                that._setOption(key, value), key in that.sizeRelatedOptions && (resize = !0), key in that.resizableRelatedOptions && (resizableOptions[key] = value);
            }), resize && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", resizableOptions);
        },
        _setOption: function(key, value) {
            var isDraggable, isResizable, uiDialog = this.uiDialog;
            "disabled" !== key && (this._super(key, value), "appendTo" === key && this.uiDialog.appendTo(this._appendTo()), 
            "buttons" === key && this._createButtons(), "closeText" === key && this.uiDialogTitlebarClose.button({
                label: $("<a>").text("" + this.options.closeText).html()
            }), "draggable" === key && ((isDraggable = uiDialog.is(":data(ui-draggable)")) && !value && uiDialog.draggable("destroy"), 
            !isDraggable && value && this._makeDraggable()), "position" === key && this._position(), 
            "resizable" === key && ((isResizable = uiDialog.is(":data(ui-resizable)")) && !value && uiDialog.resizable("destroy"), 
            isResizable && "string" == typeof value && uiDialog.resizable("option", "handles", value), 
            isResizable || !1 === value || this._makeResizable()), "title" === key && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")));
        },
        _size: function() {
            var nonContentHeight, minContentHeight, maxContentHeight, options = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }), options.minWidth > options.width && (options.width = options.minWidth), nonContentHeight = this.uiDialog.css({
                height: "auto",
                width: options.width
            }).outerHeight(), minContentHeight = Math.max(0, options.minHeight - nonContentHeight), 
            maxContentHeight = "number" == typeof options.maxHeight ? Math.max(0, options.maxHeight - nonContentHeight) : "none", 
            "auto" === options.height ? this.element.css({
                minHeight: minContentHeight,
                maxHeight: maxContentHeight,
                height: "auto"
            }) : this.element.height(Math.max(0, options.height - nonContentHeight)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight());
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var iframe = $(this);
                return $("<div>").css({
                    position: "absolute",
                    width: iframe.outerWidth(),
                    height: iframe.outerHeight()
                }).appendTo(iframe.parent()).offset(iframe.offset())[0];
            });
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
        },
        _allowInteraction: function(event) {
            return !!$(event.target).closest(".ui-dialog").length || !!$(event.target).closest(".ui-datepicker").length;
        },
        _createOverlay: function() {
            if (this.options.modal) {
                var isOpening = !0;
                this._delay(function() {
                    isOpening = !1;
                }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
                    focusin: function(event) {
                        isOpening || this._allowInteraction(event) || (event.preventDefault(), this._trackingInstances()[0]._focusTabbable());
                    }
                }), this.overlay = $("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), 
                this._on(this.overlay, {
                    mousedown: "_keepFocus"
                }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1);
            }
        },
        _destroyOverlay: function() {
            if (this.options.modal && this.overlay) {
                var overlays = this.document.data("ui-dialog-overlays") - 1;
                overlays ? this.document.data("ui-dialog-overlays", overlays) : (this._off(this.document, "focusin"), 
                this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null;
            }
        }
    }), !1 !== $.uiBackCompat && $.widget("ui.dialog", $.ui.dialog, {
        options: {
            dialogClass: ""
        },
        _createWrapper: function() {
            this._super(), this.uiDialog.addClass(this.options.dialogClass);
        },
        _setOption: function(key, value) {
            "dialogClass" === key && this.uiDialog.removeClass(this.options.dialogClass).addClass(value), 
            this._superApply(arguments);
        }
    });
    $.ui.dialog;
    $.widget("ui.droppable", {
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
            var proportions, o = this.options, accept = o.accept;
            this.isover = !1, this.isout = !0, this.accept = $.isFunction(accept) ? accept : function(d) {
                return d.is(accept);
            }, this.proportions = function() {
                if (!arguments.length) return proportions || (proportions = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                });
                proportions = arguments[0];
            }, this._addToManager(o.scope), o.addClasses && this._addClass("ui-droppable");
        },
        _addToManager: function(scope) {
            $.ui.ddmanager.droppables[scope] = $.ui.ddmanager.droppables[scope] || [], $.ui.ddmanager.droppables[scope].push(this);
        },
        _splice: function(drop) {
            for (var i = 0; i < drop.length; i++) drop[i] === this && drop.splice(i, 1);
        },
        _destroy: function() {
            var drop = $.ui.ddmanager.droppables[this.options.scope];
            this._splice(drop);
        },
        _setOption: function(key, value) {
            if ("accept" === key) this.accept = $.isFunction(value) ? value : function(d) {
                return d.is(value);
            }; else if ("scope" === key) {
                var drop = $.ui.ddmanager.droppables[this.options.scope];
                this._splice(drop), this._addToManager(value);
            }
            this._super(key, value);
        },
        _activate: function(event) {
            var draggable = $.ui.ddmanager.current;
            this._addActiveClass(), draggable && this._trigger("activate", event, this.ui(draggable));
        },
        _deactivate: function(event) {
            var draggable = $.ui.ddmanager.current;
            this._removeActiveClass(), draggable && this._trigger("deactivate", event, this.ui(draggable));
        },
        _over: function(event) {
            var draggable = $.ui.ddmanager.current;
            draggable && (draggable.currentItem || draggable.element)[0] !== this.element[0] && this.accept.call(this.element[0], draggable.currentItem || draggable.element) && (this._addHoverClass(), 
            this._trigger("over", event, this.ui(draggable)));
        },
        _out: function(event) {
            var draggable = $.ui.ddmanager.current;
            draggable && (draggable.currentItem || draggable.element)[0] !== this.element[0] && this.accept.call(this.element[0], draggable.currentItem || draggable.element) && (this._removeHoverClass(), 
            this._trigger("out", event, this.ui(draggable)));
        },
        _drop: function(event, custom) {
            var draggable = custom || $.ui.ddmanager.current, childrenIntersection = !1;
            return !(!draggable || (draggable.currentItem || draggable.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var inst = $(this).droppable("instance");
                if (inst.options.greedy && !inst.options.disabled && inst.options.scope === draggable.options.scope && inst.accept.call(inst.element[0], draggable.currentItem || draggable.element) && intersect(draggable, $.extend(inst, {
                    offset: inst.element.offset()
                }), inst.options.tolerance, event)) return !(childrenIntersection = !0);
            }), !childrenIntersection && (!!this.accept.call(this.element[0], draggable.currentItem || draggable.element) && (this._removeActiveClass(), 
            this._removeHoverClass(), this._trigger("drop", event, this.ui(draggable)), this.element)));
        },
        ui: function(c) {
            return {
                draggable: c.currentItem || c.element,
                helper: c.helper,
                position: c.position,
                offset: c.positionAbs
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
    var intersect = $.ui.intersect = function() {
        function isOverAxis(x, reference, size) {
            return reference <= x && x < reference + size;
        }
        return function(draggable, droppable, toleranceMode, event) {
            if (!droppable.offset) return !1;
            var x1 = (draggable.positionAbs || draggable.position.absolute).left + draggable.margins.left, y1 = (draggable.positionAbs || draggable.position.absolute).top + draggable.margins.top, x2 = x1 + draggable.helperProportions.width, y2 = y1 + draggable.helperProportions.height, l = droppable.offset.left, t = droppable.offset.top, r = l + droppable.proportions().width, b = t + droppable.proportions().height;
            switch (toleranceMode) {
              case "fit":
                return l <= x1 && x2 <= r && t <= y1 && y2 <= b;

              case "intersect":
                return l < x1 + draggable.helperProportions.width / 2 && x2 - draggable.helperProportions.width / 2 < r && t < y1 + draggable.helperProportions.height / 2 && y2 - draggable.helperProportions.height / 2 < b;

              case "pointer":
                return isOverAxis(event.pageY, t, droppable.proportions().height) && isOverAxis(event.pageX, l, droppable.proportions().width);

              case "touch":
                return (t <= y1 && y1 <= b || t <= y2 && y2 <= b || y1 < t && b < y2) && (l <= x1 && x1 <= r || l <= x2 && x2 <= r || x1 < l && r < x2);

              default:
                return !1;
            }
        };
    }();
    !($.ui.ddmanager = {
        current: null,
        droppables: {
            default: []
        },
        prepareOffsets: function(t, event) {
            var i, j, m = $.ui.ddmanager.droppables[t.options.scope] || [], type = event ? event.type : null, list = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
            droppablesLoop: for (i = 0; i < m.length; i++) if (!(m[i].options.disabled || t && !m[i].accept.call(m[i].element[0], t.currentItem || t.element))) {
                for (j = 0; j < list.length; j++) if (list[j] === m[i].element[0]) {
                    m[i].proportions().height = 0;
                    continue droppablesLoop;
                }
                m[i].visible = "none" !== m[i].element.css("display"), m[i].visible && ("mousedown" === type && m[i]._activate.call(m[i], event), 
                m[i].offset = m[i].element.offset(), m[i].proportions({
                    width: m[i].element[0].offsetWidth,
                    height: m[i].element[0].offsetHeight
                }));
            }
        },
        drop: function(draggable, event) {
            var dropped = !1;
            return $.each(($.ui.ddmanager.droppables[draggable.options.scope] || []).slice(), function() {
                this.options && (!this.options.disabled && this.visible && intersect(draggable, this, this.options.tolerance, event) && (dropped = this._drop.call(this, event) || dropped), 
                !this.options.disabled && this.visible && this.accept.call(this.element[0], draggable.currentItem || draggable.element) && (this.isout = !0, 
                this.isover = !1, this._deactivate.call(this, event)));
            }), dropped;
        },
        dragStart: function(draggable, event) {
            draggable.element.parentsUntil("body").on("scroll.droppable", function() {
                draggable.options.refreshPositions || $.ui.ddmanager.prepareOffsets(draggable, event);
            });
        },
        drag: function(draggable, event) {
            draggable.options.refreshPositions && $.ui.ddmanager.prepareOffsets(draggable, event), 
            $.each($.ui.ddmanager.droppables[draggable.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var parentInstance, scope, parent, intersects = intersect(draggable, this, this.options.tolerance, event), c = !intersects && this.isover ? "isout" : intersects && !this.isover ? "isover" : null;
                    c && (this.options.greedy && (scope = this.options.scope, (parent = this.element.parents(":data(ui-droppable)").filter(function() {
                        return $(this).droppable("instance").options.scope === scope;
                    })).length && ((parentInstance = $(parent[0]).droppable("instance")).greedyChild = "isover" === c)), 
                    parentInstance && "isover" === c && (parentInstance.isover = !1, parentInstance.isout = !0, 
                    parentInstance._out.call(parentInstance, event)), this[c] = !0, this["isout" === c ? "isover" : "isout"] = !1, 
                    this["isover" === c ? "_over" : "_out"].call(this, event), parentInstance && "isout" === c && (parentInstance.isout = !1, 
                    parentInstance.isover = !0, parentInstance._over.call(parentInstance, event)));
                }
            });
        },
        dragStop: function(draggable, event) {
            draggable.element.parentsUntil("body").off("scroll.droppable"), draggable.options.refreshPositions || $.ui.ddmanager.prepareOffsets(draggable, event);
        }
    }) !== $.uiBackCompat && $.widget("ui.droppable", $.ui.droppable, {
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
    });
    $.ui.droppable, $.widget("ui.progressbar", {
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
            }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = $("<div>").appendTo(this.element), 
            this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue();
        },
        _destroy: function() {
            this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove();
        },
        value: function(newValue) {
            if (void 0 === newValue) return this.options.value;
            this.options.value = this._constrainedValue(newValue), this._refreshValue();
        },
        _constrainedValue: function(newValue) {
            return void 0 === newValue && (newValue = this.options.value), this.indeterminate = !1 === newValue, 
            "number" != typeof newValue && (newValue = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, newValue));
        },
        _setOptions: function(options) {
            var value = options.value;
            delete options.value, this._super(options), this.options.value = this._constrainedValue(value), 
            this._refreshValue();
        },
        _setOption: function(key, value) {
            "max" === key && (value = Math.max(this.min, value)), this._super(key, value);
        },
        _setOptionDisabled: function(value) {
            this._super(value), this.element.attr("aria-disabled", value), this._toggleClass(null, "ui-state-disabled", !!value);
        },
        _percentage: function() {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min);
        },
        _refreshValue: function() {
            var value = this.options.value, percentage = this._percentage();
            this.valueDiv.toggle(this.indeterminate || value > this.min).width(percentage.toFixed(0) + "%"), 
            this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, value === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), 
            this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = $("<div>").appendTo(this.valueDiv), 
            this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": value
            }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== value && (this.oldValue = value, 
            this._trigger("change")), value === this.options.max && this._trigger("complete");
        }
    }), $.widget("ui.selectable", $.ui.mouse, {
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
            var that = this;
            this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                that.elementPos = $(that.element[0]).offset(), that.selectees = $(that.options.filter, that.element[0]), 
                that._addClass(that.selectees, "ui-selectee"), that.selectees.each(function() {
                    var $this = $(this), selecteeOffset = $this.offset(), pos = {
                        left: selecteeOffset.left - that.elementPos.left,
                        top: selecteeOffset.top - that.elementPos.top
                    };
                    $.data(this, "selectable-item", {
                        element: this,
                        $element: $this,
                        left: pos.left,
                        top: pos.top,
                        right: pos.left + $this.outerWidth(),
                        bottom: pos.top + $this.outerHeight(),
                        startselected: !1,
                        selected: $this.hasClass("ui-selected"),
                        selecting: $this.hasClass("ui-selecting"),
                        unselecting: $this.hasClass("ui-unselecting")
                    });
                });
            }, this.refresh(), this._mouseInit(), this.helper = $("<div>"), this._addClass(this.helper, "ui-selectable-helper");
        },
        _destroy: function() {
            this.selectees.removeData("selectable-item"), this._mouseDestroy();
        },
        _mouseStart: function(event) {
            var that = this, options = this.options;
            this.opos = [ event.pageX, event.pageY ], this.elementPos = $(this.element[0]).offset(), 
            this.options.disabled || (this.selectees = $(options.filter, this.element[0]), this._trigger("start", event), 
            $(options.appendTo).append(this.helper), this.helper.css({
                left: event.pageX,
                top: event.pageY,
                width: 0,
                height: 0
            }), options.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                var selectee = $.data(this, "selectable-item");
                selectee.startselected = !0, event.metaKey || event.ctrlKey || (that._removeClass(selectee.$element, "ui-selected"), 
                selectee.selected = !1, that._addClass(selectee.$element, "ui-unselecting"), selectee.unselecting = !0, 
                that._trigger("unselecting", event, {
                    unselecting: selectee.element
                }));
            }), $(event.target).parents().addBack().each(function() {
                var doSelect, selectee = $.data(this, "selectable-item");
                if (selectee) return doSelect = !event.metaKey && !event.ctrlKey || !selectee.$element.hasClass("ui-selected"), 
                that._removeClass(selectee.$element, doSelect ? "ui-unselecting" : "ui-selected")._addClass(selectee.$element, doSelect ? "ui-selecting" : "ui-unselecting"), 
                selectee.unselecting = !doSelect, selectee.selecting = doSelect, (selectee.selected = doSelect) ? that._trigger("selecting", event, {
                    selecting: selectee.element
                }) : that._trigger("unselecting", event, {
                    unselecting: selectee.element
                }), !1;
            }));
        },
        _mouseDrag: function(event) {
            if (this.dragged = !0, !this.options.disabled) {
                var tmp, that = this, options = this.options, x1 = this.opos[0], y1 = this.opos[1], x2 = event.pageX, y2 = event.pageY;
                return x2 < x1 && (tmp = x2, x2 = x1, x1 = tmp), y2 < y1 && (tmp = y2, y2 = y1, 
                y1 = tmp), this.helper.css({
                    left: x1,
                    top: y1,
                    width: x2 - x1,
                    height: y2 - y1
                }), this.selectees.each(function() {
                    var selectee = $.data(this, "selectable-item"), hit = !1, offset = {};
                    selectee && selectee.element !== that.element[0] && (offset.left = selectee.left + that.elementPos.left, 
                    offset.right = selectee.right + that.elementPos.left, offset.top = selectee.top + that.elementPos.top, 
                    offset.bottom = selectee.bottom + that.elementPos.top, "touch" === options.tolerance ? hit = !(offset.left > x2 || offset.right < x1 || offset.top > y2 || offset.bottom < y1) : "fit" === options.tolerance && (hit = offset.left > x1 && offset.right < x2 && offset.top > y1 && offset.bottom < y2), 
                    hit ? (selectee.selected && (that._removeClass(selectee.$element, "ui-selected"), 
                    selectee.selected = !1), selectee.unselecting && (that._removeClass(selectee.$element, "ui-unselecting"), 
                    selectee.unselecting = !1), selectee.selecting || (that._addClass(selectee.$element, "ui-selecting"), 
                    selectee.selecting = !0, that._trigger("selecting", event, {
                        selecting: selectee.element
                    }))) : (selectee.selecting && ((event.metaKey || event.ctrlKey) && selectee.startselected ? (that._removeClass(selectee.$element, "ui-selecting"), 
                    selectee.selecting = !1, that._addClass(selectee.$element, "ui-selected"), selectee.selected = !0) : (that._removeClass(selectee.$element, "ui-selecting"), 
                    selectee.selecting = !1, selectee.startselected && (that._addClass(selectee.$element, "ui-unselecting"), 
                    selectee.unselecting = !0), that._trigger("unselecting", event, {
                        unselecting: selectee.element
                    }))), selectee.selected && (event.metaKey || event.ctrlKey || selectee.startselected || (that._removeClass(selectee.$element, "ui-selected"), 
                    selectee.selected = !1, that._addClass(selectee.$element, "ui-unselecting"), selectee.unselecting = !0, 
                    that._trigger("unselecting", event, {
                        unselecting: selectee.element
                    })))));
                }), !1;
            }
        },
        _mouseStop: function(event) {
            var that = this;
            return this.dragged = !1, $(".ui-unselecting", this.element[0]).each(function() {
                var selectee = $.data(this, "selectable-item");
                that._removeClass(selectee.$element, "ui-unselecting"), selectee.unselecting = !1, 
                selectee.startselected = !1, that._trigger("unselected", event, {
                    unselected: selectee.element
                });
            }), $(".ui-selecting", this.element[0]).each(function() {
                var selectee = $.data(this, "selectable-item");
                that._removeClass(selectee.$element, "ui-selecting")._addClass(selectee.$element, "ui-selected"), 
                selectee.selecting = !1, selectee.selected = !0, selectee.startselected = !0, that._trigger("selected", event, {
                    selected: selectee.element
                });
            }), this._trigger("stop", event), this.helper.remove(), !1;
        }
    }), $.widget("ui.selectmenu", [ $.ui.formResetMixin, {
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
            var selectmenuId = this.element.uniqueId().attr("id");
            this.ids = {
                element: selectmenuId,
                button: selectmenuId + "-button",
                menu: selectmenuId + "-menu"
            }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, 
            this.menuItems = $();
        },
        _drawButton: function() {
            var icon, that = this, item = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
            this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, {
                click: function(event) {
                    this.button.focus(), event.preventDefault();
                }
            }), this.element.hide(), this.button = $("<span>", {
                tabindex: this.options.disabled ? -1 : 0,
                id: this.ids.button,
                role: "combobox",
                "aria-expanded": "false",
                "aria-autocomplete": "list",
                "aria-owns": this.ids.menu,
                "aria-haspopup": "true",
                title: this.element.attr("title")
            }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), 
            icon = $("<span>").appendTo(this.button), this._addClass(icon, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), 
            this.buttonItem = this._renderButtonItem(item).appendTo(this.button), !1 !== this.options.width && this._resizeButton(), 
            this._on(this.button, this._buttonEvents), this.button.one("focusin", function() {
                that._rendered || that._refreshMenu();
            });
        },
        _drawMenu: function() {
            var that = this;
            this.menu = $("<ul>", {
                "aria-hidden": "true",
                "aria-labelledby": this.ids.button,
                id: this.ids.menu
            }), this.menuWrap = $("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), 
            this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                classes: {
                    "ui-menu": "ui-corner-bottom"
                },
                role: "listbox",
                select: function(event, ui) {
                    event.preventDefault(), that._setSelection(), that._select(ui.item.data("ui-selectmenu-item"), event);
                },
                focus: function(event, ui) {
                    var item = ui.item.data("ui-selectmenu-item");
                    null != that.focusIndex && item.index !== that.focusIndex && (that._trigger("focus", event, {
                        item: item
                    }), that.isOpen || that._select(item, event)), that.focusIndex = item.index, that.button.attr("aria-activedescendant", that.menuItems.eq(item.index).attr("id"));
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
            var item, options = this.element.find("option");
            this.menu.empty(), this._parseOptions(options), this._renderMenu(this.menu, this.items), 
            this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), 
            this._rendered = !0, options.length && (item = this._getSelectedItem(), this.menuInstance.focus(null, item), 
            this._setAria(item.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")));
        },
        open: function(event) {
            this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), 
            this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, 
            this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), 
            this._trigger("open", event)));
        },
        _position: function() {
            this.menuWrap.position($.extend({
                of: this.button
            }, this.options.position));
        },
        close: function(event) {
            this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), 
            this._trigger("close", event));
        },
        widget: function() {
            return this.button;
        },
        menuWidget: function() {
            return this.menu;
        },
        _renderButtonItem: function(item) {
            var buttonItem = $("<span>");
            return this._setText(buttonItem, item.label), this._addClass(buttonItem, "ui-selectmenu-text"), 
            buttonItem;
        },
        _renderMenu: function(ul, items) {
            var that = this, currentOptgroup = "";
            $.each(items, function(index, item) {
                var li;
                item.optgroup !== currentOptgroup && (li = $("<li>", {
                    text: item.optgroup
                }), that._addClass(li, "ui-selectmenu-optgroup", "ui-menu-divider" + (item.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), 
                li.appendTo(ul), currentOptgroup = item.optgroup), that._renderItemData(ul, item);
            });
        },
        _renderItemData: function(ul, item) {
            return this._renderItem(ul, item).data("ui-selectmenu-item", item);
        },
        _renderItem: function(ul, item) {
            var li = $("<li>"), wrapper = $("<div>", {
                title: item.element.attr("title")
            });
            return item.disabled && this._addClass(li, null, "ui-state-disabled"), this._setText(wrapper, item.label), 
            li.append(wrapper).appendTo(ul);
        },
        _setText: function(element, value) {
            value ? element.text(value) : element.html("&#160;");
        },
        _move: function(direction, event) {
            var item, next, filter = ".ui-menu-item";
            this.isOpen ? item = this.menuItems.eq(this.focusIndex).parent("li") : (item = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), 
            filter += ":not(.ui-state-disabled)"), (next = "first" === direction || "last" === direction ? item["first" === direction ? "prevAll" : "nextAll"](filter).eq(-1) : item[direction + "All"](filter).eq(0)).length && this.menuInstance.focus(event, next);
        },
        _getSelectedItem: function() {
            return this.menuItems.eq(this.element[0].selectedIndex).parent("li");
        },
        _toggle: function(event) {
            this[this.isOpen ? "close" : "open"](event);
        },
        _setSelection: function() {
            var selection;
            this.range && (window.getSelection ? ((selection = window.getSelection()).removeAllRanges(), 
            selection.addRange(this.range)) : this.range.select(), this.button.focus());
        },
        _documentClick: {
            mousedown: function(event) {
                this.isOpen && ($(event.target).closest(".ui-selectmenu-menu, #" + $.ui.escapeSelector(this.ids.button)).length || this.close(event));
            }
        },
        _buttonEvents: {
            mousedown: function() {
                var selection;
                window.getSelection ? (selection = window.getSelection()).rangeCount && (this.range = selection.getRangeAt(0)) : this.range = document.selection.createRange();
            },
            click: function(event) {
                this._setSelection(), this._toggle(event);
            },
            keydown: function(event) {
                var preventDefault = !0;
                switch (event.keyCode) {
                  case $.ui.keyCode.TAB:
                  case $.ui.keyCode.ESCAPE:
                    this.close(event), preventDefault = !1;
                    break;

                  case $.ui.keyCode.ENTER:
                    this.isOpen && this._selectFocusedItem(event);
                    break;

                  case $.ui.keyCode.UP:
                    event.altKey ? this._toggle(event) : this._move("prev", event);
                    break;

                  case $.ui.keyCode.DOWN:
                    event.altKey ? this._toggle(event) : this._move("next", event);
                    break;

                  case $.ui.keyCode.SPACE:
                    this.isOpen ? this._selectFocusedItem(event) : this._toggle(event);
                    break;

                  case $.ui.keyCode.LEFT:
                    this._move("prev", event);
                    break;

                  case $.ui.keyCode.RIGHT:
                    this._move("next", event);
                    break;

                  case $.ui.keyCode.HOME:
                  case $.ui.keyCode.PAGE_UP:
                    this._move("first", event);
                    break;

                  case $.ui.keyCode.END:
                  case $.ui.keyCode.PAGE_DOWN:
                    this._move("last", event);
                    break;

                  default:
                    this.menu.trigger(event), preventDefault = !1;
                }
                preventDefault && event.preventDefault();
            }
        },
        _selectFocusedItem: function(event) {
            var item = this.menuItems.eq(this.focusIndex).parent("li");
            item.hasClass("ui-state-disabled") || this._select(item.data("ui-selectmenu-item"), event);
        },
        _select: function(item, event) {
            var oldIndex = this.element[0].selectedIndex;
            this.element[0].selectedIndex = item.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(item)), 
            this._setAria(item), this._trigger("select", event, {
                item: item
            }), item.index !== oldIndex && this._trigger("change", event, {
                item: item
            }), this.close(event);
        },
        _setAria: function(item) {
            var id = this.menuItems.eq(item.index).attr("id");
            this.button.attr({
                "aria-labelledby": id,
                "aria-activedescendant": id
            }), this.menu.attr("aria-activedescendant", id);
        },
        _setOption: function(key, value) {
            if ("icons" === key) {
                var icon = this.button.find("span.ui-icon");
                this._removeClass(icon, null, this.options.icons.button)._addClass(icon, null, value.button);
            }
            this._super(key, value), "appendTo" === key && this.menuWrap.appendTo(this._appendTo()), 
            "width" === key && this._resizeButton();
        },
        _setOptionDisabled: function(value) {
            this._super(value), this.menuInstance.option("disabled", value), this.button.attr("aria-disabled", value), 
            this._toggleClass(this.button, null, "ui-state-disabled", value), this.element.prop("disabled", value), 
            value ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0);
        },
        _appendTo: function() {
            var element = this.options.appendTo;
            return element && (element = element.jquery || element.nodeType ? $(element) : this.document.find(element).eq(0)), 
            element && element[0] || (element = this.element.closest(".ui-front, dialog")), 
            element.length || (element = this.document[0].body), element;
        },
        _toggleAttr: function() {
            this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), 
            this.menu.attr("aria-hidden", !this.isOpen);
        },
        _resizeButton: function() {
            var width = this.options.width;
            !1 !== width ? (null === width && (width = this.element.show().outerWidth(), this.element.hide()), 
            this.button.outerWidth(width)) : this.button.css("width", "");
        },
        _resizeMenu: function() {
            this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1));
        },
        _getCreateOptions: function() {
            var options = this._super();
            return options.disabled = this.element.prop("disabled"), options;
        },
        _parseOptions: function(options) {
            var that = this, data = [];
            options.each(function(index, item) {
                data.push(that._parseOption($(item), index));
            }), this.items = data;
        },
        _parseOption: function(option, index) {
            var optgroup = option.parent("optgroup");
            return {
                element: option,
                index: index,
                value: option.val(),
                label: option.text(),
                optgroup: optgroup.attr("label") || "",
                disabled: optgroup.prop("disabled") || option.prop("disabled")
            };
        },
        _destroy: function() {
            this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), 
            this.element.removeUniqueId(), this.labels.attr("for", this.ids.element);
        }
    } ]), $.widget("ui.slider", $.ui.mouse, {
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
            var i, handleCount, options = this.options, existingHandles = this.element.find(".ui-slider-handle"), handles = [];
            for (handleCount = options.values && options.values.length || 1, existingHandles.length > handleCount && (existingHandles.slice(handleCount).remove(), 
            existingHandles = existingHandles.slice(0, handleCount)), i = existingHandles.length; i < handleCount; i++) handles.push("<span tabindex='0'></span>");
            this.handles = existingHandles.add($(handles.join("")).appendTo(this.element)), 
            this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), 
            this.handles.each(function(i) {
                $(this).data("ui-slider-handle-index", i).attr("tabIndex", 0);
            });
        },
        _createRange: function() {
            var options = this.options;
            options.range ? (!0 === options.range && (options.values ? options.values.length && 2 !== options.values.length ? options.values = [ options.values[0], options.values[0] ] : $.isArray(options.values) && (options.values = options.values.slice(0)) : options.values = [ this._valueMin(), this._valueMin() ]), 
            this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), 
            this.range.css({
                left: "",
                bottom: ""
            })) : (this.range = $("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), 
            "min" !== options.range && "max" !== options.range || this._addClass(this.range, "ui-slider-range-" + options.range)) : (this.range && this.range.remove(), 
            this.range = null);
        },
        _setupEvents: function() {
            this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), 
            this._focusable(this.handles);
        },
        _destroy: function() {
            this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy();
        },
        _mouseCapture: function(event) {
            var position, normValue, distance, closestHandle, index, offset, mouseOverHandle, that = this, o = this.options;
            return !o.disabled && (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), position = {
                x: event.pageX,
                y: event.pageY
            }, normValue = this._normValueFromMouse(position), distance = this._valueMax() - this._valueMin() + 1, 
            this.handles.each(function(i) {
                var thisDistance = Math.abs(normValue - that.values(i));
                (thisDistance < distance || distance === thisDistance && (i === that._lastChangedValue || that.values(i) === o.min)) && (distance = thisDistance, 
                closestHandle = $(this), index = i);
            }), !1 !== this._start(event, index) && (this._mouseSliding = !0, this._handleIndex = index, 
            this._addClass(closestHandle, null, "ui-state-active"), closestHandle.trigger("focus"), 
            offset = closestHandle.offset(), mouseOverHandle = !$(event.target).parents().addBack().is(".ui-slider-handle"), 
            this._clickOffset = mouseOverHandle ? {
                left: 0,
                top: 0
            } : {
                left: event.pageX - offset.left - closestHandle.width() / 2,
                top: event.pageY - offset.top - closestHandle.height() / 2 - (parseInt(closestHandle.css("borderTopWidth"), 10) || 0) - (parseInt(closestHandle.css("borderBottomWidth"), 10) || 0) + (parseInt(closestHandle.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(event, index, normValue), 
            this._animateOff = !0));
        },
        _mouseStart: function() {
            return !0;
        },
        _mouseDrag: function(event) {
            var position = {
                x: event.pageX,
                y: event.pageY
            }, normValue = this._normValueFromMouse(position);
            return this._slide(event, this._handleIndex, normValue), !1;
        },
        _mouseStop: function(event) {
            return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, 
            this._stop(event, this._handleIndex), this._change(event, this._handleIndex), this._handleIndex = null, 
            this._clickOffset = null, this._animateOff = !1;
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal";
        },
        _normValueFromMouse: function(position) {
            var pixelTotal, percentMouse, valueTotal, valueMouse;
            return 1 < (percentMouse = ("horizontal" === this.orientation ? (pixelTotal = this.elementSize.width, 
            position.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (pixelTotal = this.elementSize.height, 
            position.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0))) / pixelTotal) && (percentMouse = 1), 
            percentMouse < 0 && (percentMouse = 0), "vertical" === this.orientation && (percentMouse = 1 - percentMouse), 
            valueTotal = this._valueMax() - this._valueMin(), valueMouse = this._valueMin() + percentMouse * valueTotal, 
            this._trimAlignValue(valueMouse);
        },
        _uiHash: function(index, value, values) {
            var uiHash = {
                handle: this.handles[index],
                handleIndex: index,
                value: void 0 !== value ? value : this.value()
            };
            return this._hasMultipleValues() && (uiHash.value = void 0 !== value ? value : this.values(index), 
            uiHash.values = values || this.values()), uiHash;
        },
        _hasMultipleValues: function() {
            return this.options.values && this.options.values.length;
        },
        _start: function(event, index) {
            return this._trigger("start", event, this._uiHash(index));
        },
        _slide: function(event, index, newVal) {
            var otherVal, currentValue = this.value(), newValues = this.values();
            this._hasMultipleValues() && (otherVal = this.values(index ? 0 : 1), currentValue = this.values(index), 
            2 === this.options.values.length && !0 === this.options.range && (newVal = 0 === index ? Math.min(otherVal, newVal) : Math.max(otherVal, newVal)), 
            newValues[index] = newVal), newVal !== currentValue && !1 !== this._trigger("slide", event, this._uiHash(index, newVal, newValues)) && (this._hasMultipleValues() ? this.values(index, newVal) : this.value(newVal));
        },
        _stop: function(event, index) {
            this._trigger("stop", event, this._uiHash(index));
        },
        _change: function(event, index) {
            this._keySliding || this._mouseSliding || (this._lastChangedValue = index, this._trigger("change", event, this._uiHash(index)));
        },
        value: function(newValue) {
            return arguments.length ? (this.options.value = this._trimAlignValue(newValue), 
            this._refreshValue(), void this._change(null, 0)) : this._value();
        },
        values: function(index, newValue) {
            var vals, newValues, i;
            if (1 < arguments.length) return this.options.values[index] = this._trimAlignValue(newValue), 
            this._refreshValue(), void this._change(null, index);
            if (!arguments.length) return this._values();
            if (!$.isArray(index)) return this._hasMultipleValues() ? this._values(index) : this.value();
            for (vals = this.options.values, newValues = index, i = 0; i < vals.length; i += 1) vals[i] = this._trimAlignValue(newValues[i]), 
            this._change(null, i);
            this._refreshValue();
        },
        _setOption: function(key, value) {
            var i, valsLength = 0;
            switch ("range" === key && !0 === this.options.range && ("min" === value ? (this.options.value = this._values(0), 
            this.options.values = null) : "max" === value && (this.options.value = this._values(this.options.values.length - 1), 
            this.options.values = null)), $.isArray(this.options.values) && (valsLength = this.options.values.length), 
            this._super(key, value), key) {
              case "orientation":
                this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), 
                this._refreshValue(), this.options.range && this._refreshRange(value), this.handles.css("horizontal" === value ? "bottom" : "left", "");
                break;

              case "value":
                this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                break;

              case "values":
                for (this._animateOff = !0, this._refreshValue(), i = valsLength - 1; 0 <= i; i--) this._change(null, i);
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
        _setOptionDisabled: function(value) {
            this._super(value), this._toggleClass(null, "ui-state-disabled", !!value);
        },
        _value: function() {
            var val = this.options.value;
            return val = this._trimAlignValue(val);
        },
        _values: function(index) {
            var val, vals, i;
            if (arguments.length) return val = this.options.values[index], val = this._trimAlignValue(val);
            if (this._hasMultipleValues()) {
                for (vals = this.options.values.slice(), i = 0; i < vals.length; i += 1) vals[i] = this._trimAlignValue(vals[i]);
                return vals;
            }
            return [];
        },
        _trimAlignValue: function(val) {
            if (val <= this._valueMin()) return this._valueMin();
            if (val >= this._valueMax()) return this._valueMax();
            var step = 0 < this.options.step ? this.options.step : 1, valModStep = (val - this._valueMin()) % step, alignValue = val - valModStep;
            return 2 * Math.abs(valModStep) >= step && (alignValue += 0 < valModStep ? step : -step), 
            parseFloat(alignValue.toFixed(5));
        },
        _calculateNewMax: function() {
            var max = this.options.max, min = this._valueMin(), step = this.options.step;
            (max = Math.round((max - min) / step) * step + min) > this.options.max && (max -= step), 
            this.max = parseFloat(max.toFixed(this._precision()));
        },
        _precision: function() {
            var precision = this._precisionOf(this.options.step);
            return null !== this.options.min && (precision = Math.max(precision, this._precisionOf(this.options.min))), 
            precision;
        },
        _precisionOf: function(num) {
            var str = num.toString(), decimal = str.indexOf(".");
            return -1 === decimal ? 0 : str.length - decimal - 1;
        },
        _valueMin: function() {
            return this.options.min;
        },
        _valueMax: function() {
            return this.max;
        },
        _refreshRange: function(orientation) {
            "vertical" === orientation && this.range.css({
                width: "",
                left: ""
            }), "horizontal" === orientation && this.range.css({
                height: "",
                bottom: ""
            });
        },
        _refreshValue: function() {
            var lastValPercent, valPercent, value, valueMin, valueMax, oRange = this.options.range, o = this.options, that = this, animate = !this._animateOff && o.animate, _set = {};
            this._hasMultipleValues() ? this.handles.each(function(i) {
                valPercent = (that.values(i) - that._valueMin()) / (that._valueMax() - that._valueMin()) * 100, 
                _set["horizontal" === that.orientation ? "left" : "bottom"] = valPercent + "%", 
                $(this).stop(1, 1)[animate ? "animate" : "css"](_set, o.animate), !0 === that.options.range && ("horizontal" === that.orientation ? (0 === i && that.range.stop(1, 1)[animate ? "animate" : "css"]({
                    left: valPercent + "%"
                }, o.animate), 1 === i && that.range[animate ? "animate" : "css"]({
                    width: valPercent - lastValPercent + "%"
                }, {
                    queue: !1,
                    duration: o.animate
                })) : (0 === i && that.range.stop(1, 1)[animate ? "animate" : "css"]({
                    bottom: valPercent + "%"
                }, o.animate), 1 === i && that.range[animate ? "animate" : "css"]({
                    height: valPercent - lastValPercent + "%"
                }, {
                    queue: !1,
                    duration: o.animate
                }))), lastValPercent = valPercent;
            }) : (value = this.value(), valueMin = this._valueMin(), valueMax = this._valueMax(), 
            valPercent = valueMax !== valueMin ? (value - valueMin) / (valueMax - valueMin) * 100 : 0, 
            _set["horizontal" === this.orientation ? "left" : "bottom"] = valPercent + "%", 
            this.handle.stop(1, 1)[animate ? "animate" : "css"](_set, o.animate), "min" === oRange && "horizontal" === this.orientation && this.range.stop(1, 1)[animate ? "animate" : "css"]({
                width: valPercent + "%"
            }, o.animate), "max" === oRange && "horizontal" === this.orientation && this.range.stop(1, 1)[animate ? "animate" : "css"]({
                width: 100 - valPercent + "%"
            }, o.animate), "min" === oRange && "vertical" === this.orientation && this.range.stop(1, 1)[animate ? "animate" : "css"]({
                height: valPercent + "%"
            }, o.animate), "max" === oRange && "vertical" === this.orientation && this.range.stop(1, 1)[animate ? "animate" : "css"]({
                height: 100 - valPercent + "%"
            }, o.animate));
        },
        _handleEvents: {
            keydown: function(event) {
                var curVal, newVal, step, index = $(event.target).data("ui-slider-handle-index");
                switch (event.keyCode) {
                  case $.ui.keyCode.HOME:
                  case $.ui.keyCode.END:
                  case $.ui.keyCode.PAGE_UP:
                  case $.ui.keyCode.PAGE_DOWN:
                  case $.ui.keyCode.UP:
                  case $.ui.keyCode.RIGHT:
                  case $.ui.keyCode.DOWN:
                  case $.ui.keyCode.LEFT:
                    if (event.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass($(event.target), null, "ui-state-active"), 
                    !1 === this._start(event, index))) return;
                }
                switch (step = this.options.step, curVal = newVal = this._hasMultipleValues() ? this.values(index) : this.value(), 
                event.keyCode) {
                  case $.ui.keyCode.HOME:
                    newVal = this._valueMin();
                    break;

                  case $.ui.keyCode.END:
                    newVal = this._valueMax();
                    break;

                  case $.ui.keyCode.PAGE_UP:
                    newVal = this._trimAlignValue(curVal + (this._valueMax() - this._valueMin()) / this.numPages);
                    break;

                  case $.ui.keyCode.PAGE_DOWN:
                    newVal = this._trimAlignValue(curVal - (this._valueMax() - this._valueMin()) / this.numPages);
                    break;

                  case $.ui.keyCode.UP:
                  case $.ui.keyCode.RIGHT:
                    if (curVal === this._valueMax()) return;
                    newVal = this._trimAlignValue(curVal + step);
                    break;

                  case $.ui.keyCode.DOWN:
                  case $.ui.keyCode.LEFT:
                    if (curVal === this._valueMin()) return;
                    newVal = this._trimAlignValue(curVal - step);
                }
                this._slide(event, index, newVal);
            },
            keyup: function(event) {
                var index = $(event.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(event, index), this._change(event, index), 
                this._removeClass($(event.target), null, "ui-state-active"));
            }
        }
    }), $.widget("ui.sortable", $.ui.mouse, {
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
        _isOverAxis: function(x, reference, size) {
            return reference <= x && x < reference + size;
        },
        _isFloating: function(item) {
            return /left|right/.test(item.css("float")) || /inline|table-cell/.test(item.css("display"));
        },
        _create: function() {
            this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), 
            this._mouseInit(), this._setHandleClassName(), this.ready = !0;
        },
        _setOption: function(key, value) {
            this._super(key, value), "handle" === key && this._setHandleClassName();
        },
        _setHandleClassName: function() {
            var that = this;
            this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), 
            $.each(this.items, function() {
                that._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle");
            });
        },
        _destroy: function() {
            this._mouseDestroy();
            for (var i = this.items.length - 1; 0 <= i; i--) this.items[i].item.removeData(this.widgetName + "-item");
            return this;
        },
        _mouseCapture: function(event, overrideHandle) {
            var currentItem = null, validHandle = !1, that = this;
            return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(event), 
            $(event.target).parents().each(function() {
                if ($.data(this, that.widgetName + "-item") === that) return currentItem = $(this), 
                !1;
            }), $.data(event.target, that.widgetName + "-item") === that && (currentItem = $(event.target)), 
            !!currentItem && (!(this.options.handle && !overrideHandle && ($(this.options.handle, currentItem).find("*").addBack().each(function() {
                this === event.target && (validHandle = !0);
            }), !validHandle)) && (this.currentItem = currentItem, this._removeCurrentsFromItems(), 
            !0))));
        },
        _mouseStart: function(event, overrideHandle, noActivation) {
            var i, body, o = this.options;
            if ((this.currentContainer = this).refreshPositions(), this.helper = this._createHelper(event), 
            this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), 
            this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, $.extend(this.offset, {
                click: {
                    left: event.pageX - this.offset.left,
                    top: event.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), 
            this.originalPosition = this._generatePosition(event), this.originalPageX = event.pageX, 
            this.originalPageY = event.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), 
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), 
            o.containment && this._setContainment(), o.cursor && "auto" !== o.cursor && (body = this.document.find("body"), 
            this.storedCursor = body.css("cursor"), body.css("cursor", o.cursor), this.storedStylesheet = $("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(body)), 
            o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), 
            this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), 
            this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), 
            this._trigger("start", event, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), 
            !noActivation) for (i = this.containers.length - 1; 0 <= i; i--) this.containers[i]._trigger("activate", event, this._uiHash(this));
            return $.ui.ddmanager && ($.ui.ddmanager.current = this), $.ui.ddmanager && !o.dropBehaviour && $.ui.ddmanager.prepareOffsets(this, event), 
            this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(event), 
            !0;
        },
        _mouseDrag: function(event) {
            var i, item, itemElement, intersection, o = this.options, scrolled = !1;
            for (this.position = this._generatePosition(event), this.positionAbs = this._convertPositionTo("absolute"), 
            this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - event.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop + o.scrollSpeed : event.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop - o.scrollSpeed), 
            this.overflowOffset.left + this.scrollParent[0].offsetWidth - event.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft + o.scrollSpeed : event.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (event.pageY - this.document.scrollTop() < o.scrollSensitivity ? scrolled = this.document.scrollTop(this.document.scrollTop() - o.scrollSpeed) : this.window.height() - (event.pageY - this.document.scrollTop()) < o.scrollSensitivity && (scrolled = this.document.scrollTop(this.document.scrollTop() + o.scrollSpeed)), 
            event.pageX - this.document.scrollLeft() < o.scrollSensitivity ? scrolled = this.document.scrollLeft(this.document.scrollLeft() - o.scrollSpeed) : this.window.width() - (event.pageX - this.document.scrollLeft()) < o.scrollSensitivity && (scrolled = this.document.scrollLeft(this.document.scrollLeft() + o.scrollSpeed))), 
            !1 !== scrolled && $.ui.ddmanager && !o.dropBehaviour && $.ui.ddmanager.prepareOffsets(this, event)), 
            this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), 
            this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), 
            i = this.items.length - 1; 0 <= i; i--) if (itemElement = (item = this.items[i]).item[0], 
            (intersection = this._intersectsWithPointer(item)) && item.instance === this.currentContainer && !(itemElement === this.currentItem[0] || this.placeholder[1 === intersection ? "next" : "prev"]()[0] === itemElement || $.contains(this.placeholder[0], itemElement) || "semi-dynamic" === this.options.type && $.contains(this.element[0], itemElement))) {
                if (this.direction = 1 === intersection ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(item)) break;
                this._rearrange(event, item), this._trigger("change", event, this._uiHash());
                break;
            }
            return this._contactContainers(event), $.ui.ddmanager && $.ui.ddmanager.drag(this, event), 
            this._trigger("sort", event, this._uiHash()), this.lastPositionAbs = this.positionAbs, 
            !1;
        },
        _mouseStop: function(event, noPropagation) {
            if (event) {
                if ($.ui.ddmanager && !this.options.dropBehaviour && $.ui.ddmanager.drop(this, event), 
                this.options.revert) {
                    var that = this, cur = this.placeholder.offset(), axis = this.options.axis, animation = {};
                    axis && "x" !== axis || (animation.left = cur.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), 
                    axis && "y" !== axis || (animation.top = cur.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), 
                    this.reverting = !0, $(this.helper).animate(animation, parseInt(this.options.revert, 10) || 500, function() {
                        that._clear(event);
                    });
                } else this._clear(event, noPropagation);
                return !1;
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp(new $.Event("mouseup", {
                    target: null
                })), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), 
                this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                for (var i = this.containers.length - 1; 0 <= i; i--) this.containers[i]._trigger("deactivate", null, this._uiHash(this)), 
                this.containers[i].containerCache.over && (this.containers[i]._trigger("out", null, this._uiHash(this)), 
                this.containers[i].containerCache.over = 0);
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), 
            "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), 
            $.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? $(this.domPosition.prev).after(this.currentItem) : $(this.domPosition.parent).prepend(this.currentItem)), 
            this;
        },
        serialize: function(o) {
            var items = this._getItemsAsjQuery(o && o.connected), str = [];
            return o = o || {}, $(items).each(function() {
                var res = ($(o.item || this).attr(o.attribute || "id") || "").match(o.expression || /(.+)[\-=_](.+)/);
                res && str.push((o.key || res[1] + "[]") + "=" + (o.key && o.expression ? res[1] : res[2]));
            }), !str.length && o.key && str.push(o.key + "="), str.join("&");
        },
        toArray: function(o) {
            var items = this._getItemsAsjQuery(o && o.connected), ret = [];
            return o = o || {}, items.each(function() {
                ret.push($(o.item || this).attr(o.attribute || "id") || "");
            }), ret;
        },
        _intersectsWith: function(item) {
            var x1 = this.positionAbs.left, x2 = x1 + this.helperProportions.width, y1 = this.positionAbs.top, y2 = y1 + this.helperProportions.height, l = item.left, r = l + item.width, t = item.top, b = t + item.height, dyClick = this.offset.click.top, dxClick = this.offset.click.left, isOverElementHeight = "x" === this.options.axis || t < y1 + dyClick && y1 + dyClick < b, isOverElementWidth = "y" === this.options.axis || l < x1 + dxClick && x1 + dxClick < r, isOverElement = isOverElementHeight && isOverElementWidth;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > item[this.floating ? "width" : "height"] ? isOverElement : l < x1 + this.helperProportions.width / 2 && x2 - this.helperProportions.width / 2 < r && t < y1 + this.helperProportions.height / 2 && y2 - this.helperProportions.height / 2 < b;
        },
        _intersectsWithPointer: function(item) {
            var verticalDirection, horizontalDirection, isOverElementHeight = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, item.top, item.height), isOverElementWidth = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, item.left, item.width);
            return !(!isOverElementHeight || !isOverElementWidth) && (verticalDirection = this._getDragVerticalDirection(), 
            horizontalDirection = this._getDragHorizontalDirection(), this.floating ? "right" === horizontalDirection || "down" === verticalDirection ? 2 : 1 : verticalDirection && ("down" === verticalDirection ? 2 : 1));
        },
        _intersectsWithSides: function(item) {
            var isOverBottomHalf = this._isOverAxis(this.positionAbs.top + this.offset.click.top, item.top + item.height / 2, item.height), isOverRightHalf = this._isOverAxis(this.positionAbs.left + this.offset.click.left, item.left + item.width / 2, item.width), verticalDirection = this._getDragVerticalDirection(), horizontalDirection = this._getDragHorizontalDirection();
            return this.floating && horizontalDirection ? "right" === horizontalDirection && isOverRightHalf || "left" === horizontalDirection && !isOverRightHalf : verticalDirection && ("down" === verticalDirection && isOverBottomHalf || "up" === verticalDirection && !isOverBottomHalf);
        },
        _getDragVerticalDirection: function() {
            var delta = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== delta && (0 < delta ? "down" : "up");
        },
        _getDragHorizontalDirection: function() {
            var delta = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== delta && (0 < delta ? "right" : "left");
        },
        refresh: function(event) {
            return this._refreshItems(event), this._setHandleClassName(), this.refreshPositions(), 
            this;
        },
        _connectWith: function() {
            var options = this.options;
            return options.connectWith.constructor === String ? [ options.connectWith ] : options.connectWith;
        },
        _getItemsAsjQuery: function(connected) {
            var i, j, cur, inst, items = [], queries = [], connectWith = this._connectWith();
            if (connectWith && connected) for (i = connectWith.length - 1; 0 <= i; i--) for (j = (cur = $(connectWith[i], this.document[0])).length - 1; 0 <= j; j--) (inst = $.data(cur[j], this.widgetFullName)) && inst !== this && !inst.options.disabled && queries.push([ $.isFunction(inst.options.items) ? inst.options.items.call(inst.element) : $(inst.options.items, inst.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), inst ]);
            function addItems() {
                items.push(this);
            }
            for (queries.push([ $.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : $(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this ]), 
            i = queries.length - 1; 0 <= i; i--) queries[i][0].each(addItems);
            return $(items);
        },
        _removeCurrentsFromItems: function() {
            var list = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = $.grep(this.items, function(item) {
                for (var j = 0; j < list.length; j++) if (list[j] === item.item[0]) return !1;
                return !0;
            });
        },
        _refreshItems: function(event) {
            this.items = [], this.containers = [ this ];
            var i, j, cur, inst, targetData, _queries, item, queriesLength, items = this.items, queries = [ [ $.isFunction(this.options.items) ? this.options.items.call(this.element[0], event, {
                item: this.currentItem
            }) : $(this.options.items, this.element), this ] ], connectWith = this._connectWith();
            if (connectWith && this.ready) for (i = connectWith.length - 1; 0 <= i; i--) for (j = (cur = $(connectWith[i], this.document[0])).length - 1; 0 <= j; j--) (inst = $.data(cur[j], this.widgetFullName)) && inst !== this && !inst.options.disabled && (queries.push([ $.isFunction(inst.options.items) ? inst.options.items.call(inst.element[0], event, {
                item: this.currentItem
            }) : $(inst.options.items, inst.element), inst ]), this.containers.push(inst));
            for (i = queries.length - 1; 0 <= i; i--) for (targetData = queries[i][1], j = 0, 
            queriesLength = (_queries = queries[i][0]).length; j < queriesLength; j++) (item = $(_queries[j])).data(this.widgetName + "-item", targetData), 
            items.push({
                item: item,
                instance: targetData,
                width: 0,
                height: 0,
                left: 0,
                top: 0
            });
        },
        refreshPositions: function(fast) {
            var i, item, t, p;
            for (this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), 
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()), 
            i = this.items.length - 1; 0 <= i; i--) (item = this.items[i]).instance !== this.currentContainer && this.currentContainer && item.item[0] !== this.currentItem[0] || (t = this.options.toleranceElement ? $(this.options.toleranceElement, item.item) : item.item, 
            fast || (item.width = t.outerWidth(), item.height = t.outerHeight()), p = t.offset(), 
            item.left = p.left, item.top = p.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this); else for (i = this.containers.length - 1; 0 <= i; i--) p = this.containers[i].element.offset(), 
            this.containers[i].containerCache.left = p.left, this.containers[i].containerCache.top = p.top, 
            this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), 
            this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this;
        },
        _createPlaceholder: function(that) {
            var className, o = (that = that || this).options;
            o.placeholder && o.placeholder.constructor !== String || (className = o.placeholder, 
            o.placeholder = {
                element: function() {
                    var nodeName = that.currentItem[0].nodeName.toLowerCase(), element = $("<" + nodeName + ">", that.document[0]);
                    return that._addClass(element, "ui-sortable-placeholder", className || that.currentItem[0].className)._removeClass(element, "ui-sortable-helper"), 
                    "tbody" === nodeName ? that._createTrPlaceholder(that.currentItem.find("tr").eq(0), $("<tr>", that.document[0]).appendTo(element)) : "tr" === nodeName ? that._createTrPlaceholder(that.currentItem, element) : "img" === nodeName && element.attr("src", that.currentItem.attr("src")), 
                    className || element.css("visibility", "hidden"), element;
                },
                update: function(container, p) {
                    className && !o.forcePlaceholderSize || (p.height() || p.height(that.currentItem.innerHeight() - parseInt(that.currentItem.css("paddingTop") || 0, 10) - parseInt(that.currentItem.css("paddingBottom") || 0, 10)), 
                    p.width() || p.width(that.currentItem.innerWidth() - parseInt(that.currentItem.css("paddingLeft") || 0, 10) - parseInt(that.currentItem.css("paddingRight") || 0, 10)));
                }
            }), that.placeholder = $(o.placeholder.element.call(that.element, that.currentItem)), 
            that.currentItem.after(that.placeholder), o.placeholder.update(that, that.placeholder);
        },
        _createTrPlaceholder: function(sourceTr, targetTr) {
            var that = this;
            sourceTr.children().each(function() {
                $("<td>&#160;</td>", that.document[0]).attr("colspan", $(this).attr("colspan") || 1).appendTo(targetTr);
            });
        },
        _contactContainers: function(event) {
            var i, j, dist, itemWithLeastDistance, posProperty, sizeProperty, cur, nearBottom, floating, axis, innermostContainer = null, innermostIndex = null;
            for (i = this.containers.length - 1; 0 <= i; i--) if (!$.contains(this.currentItem[0], this.containers[i].element[0])) if (this._intersectsWith(this.containers[i].containerCache)) {
                if (innermostContainer && $.contains(this.containers[i].element[0], innermostContainer.element[0])) continue;
                innermostContainer = this.containers[i], innermostIndex = i;
            } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", event, this._uiHash(this)), 
            this.containers[i].containerCache.over = 0);
            if (innermostContainer) if (1 === this.containers.length) this.containers[innermostIndex].containerCache.over || (this.containers[innermostIndex]._trigger("over", event, this._uiHash(this)), 
            this.containers[innermostIndex].containerCache.over = 1); else {
                for (dist = 1e4, itemWithLeastDistance = null, posProperty = (floating = innermostContainer.floating || this._isFloating(this.currentItem)) ? "left" : "top", 
                sizeProperty = floating ? "width" : "height", axis = floating ? "pageX" : "pageY", 
                j = this.items.length - 1; 0 <= j; j--) $.contains(this.containers[innermostIndex].element[0], this.items[j].item[0]) && this.items[j].item[0] !== this.currentItem[0] && (cur = this.items[j].item.offset()[posProperty], 
                nearBottom = !1, event[axis] - cur > this.items[j][sizeProperty] / 2 && (nearBottom = !0), 
                Math.abs(event[axis] - cur) < dist && (dist = Math.abs(event[axis] - cur), itemWithLeastDistance = this.items[j], 
                this.direction = nearBottom ? "up" : "down"));
                if (!itemWithLeastDistance && !this.options.dropOnEmpty) return;
                if (this.currentContainer === this.containers[innermostIndex]) return void (this.currentContainer.containerCache.over || (this.containers[innermostIndex]._trigger("over", event, this._uiHash()), 
                this.currentContainer.containerCache.over = 1));
                itemWithLeastDistance ? this._rearrange(event, itemWithLeastDistance, null, !0) : this._rearrange(event, null, this.containers[innermostIndex].element, !0), 
                this._trigger("change", event, this._uiHash()), this.containers[innermostIndex]._trigger("change", event, this._uiHash(this)), 
                this.currentContainer = this.containers[innermostIndex], this.options.placeholder.update(this.currentContainer, this.placeholder), 
                this.containers[innermostIndex]._trigger("over", event, this._uiHash(this)), this.containers[innermostIndex].containerCache.over = 1;
            }
        },
        _createHelper: function(event) {
            var o = this.options, helper = $.isFunction(o.helper) ? $(o.helper.apply(this.element[0], [ event, this.currentItem ])) : "clone" === o.helper ? this.currentItem.clone() : this.currentItem;
            return helper.parents("body").length || $("parent" !== o.appendTo ? o.appendTo : this.currentItem[0].parentNode)[0].appendChild(helper[0]), 
            helper[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), helper[0].style.width && !o.forceHelperSize || helper.width(this.currentItem.width()), 
            helper[0].style.height && !o.forceHelperSize || helper.height(this.currentItem.height()), 
            helper;
        },
        _adjustOffsetFromHelper: function(obj) {
            "string" == typeof obj && (obj = obj.split(" ")), $.isArray(obj) && (obj = {
                left: +obj[0],
                top: +obj[1] || 0
            }), "left" in obj && (this.offset.click.left = obj.left + this.margins.left), "right" in obj && (this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left), 
            "top" in obj && (this.offset.click.top = obj.top + this.margins.top), "bottom" in obj && (this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top);
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var po = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && $.contains(this.scrollParent[0], this.offsetParent[0]) && (po.left += this.scrollParent.scrollLeft(), 
            po.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && $.ui.ie) && (po = {
                top: 0,
                left: 0
            }), {
                top: po.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: po.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            };
        },
        _getRelativeOffset: function() {
            if ("relative" !== this.cssPosition) return {
                top: 0,
                left: 0
            };
            var p = this.currentItem.position();
            return {
                top: p.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                left: p.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
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
            var ce, co, over, o = this.options;
            "parent" === o.containment && (o.containment = this.helper[0].parentNode), "document" !== o.containment && "window" !== o.containment || (this.containment = [ 0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === o.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === o.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ]), 
            /^(document|window|parent)$/.test(o.containment) || (ce = $(o.containment)[0], co = $(o.containment).offset(), 
            over = "hidden" !== $(ce).css("overflow"), this.containment = [ co.left + (parseInt($(ce).css("borderLeftWidth"), 10) || 0) + (parseInt($(ce).css("paddingLeft"), 10) || 0) - this.margins.left, co.top + (parseInt($(ce).css("borderTopWidth"), 10) || 0) + (parseInt($(ce).css("paddingTop"), 10) || 0) - this.margins.top, co.left + (over ? Math.max(ce.scrollWidth, ce.offsetWidth) : ce.offsetWidth) - (parseInt($(ce).css("borderLeftWidth"), 10) || 0) - (parseInt($(ce).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, co.top + (over ? Math.max(ce.scrollHeight, ce.offsetHeight) : ce.offsetHeight) - (parseInt($(ce).css("borderTopWidth"), 10) || 0) - (parseInt($(ce).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top ]);
        },
        _convertPositionTo: function(d, pos) {
            pos || (pos = this.position);
            var mod = "absolute" === d ? 1 : -1, scroll = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && $.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, scrollIsRootNode = /(html|body)/i.test(scroll[0].tagName);
            return {
                top: pos.top + this.offset.relative.top * mod + this.offset.parent.top * mod - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : scrollIsRootNode ? 0 : scroll.scrollTop()) * mod,
                left: pos.left + this.offset.relative.left * mod + this.offset.parent.left * mod - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft()) * mod
            };
        },
        _generatePosition: function(event) {
            var top, left, o = this.options, pageX = event.pageX, pageY = event.pageY, scroll = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && $.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, scrollIsRootNode = /(html|body)/i.test(scroll[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), 
            this.originalPosition && (this.containment && (event.pageX - this.offset.click.left < this.containment[0] && (pageX = this.containment[0] + this.offset.click.left), 
            event.pageY - this.offset.click.top < this.containment[1] && (pageY = this.containment[1] + this.offset.click.top), 
            event.pageX - this.offset.click.left > this.containment[2] && (pageX = this.containment[2] + this.offset.click.left), 
            event.pageY - this.offset.click.top > this.containment[3] && (pageY = this.containment[3] + this.offset.click.top)), 
            o.grid && (top = this.originalPageY + Math.round((pageY - this.originalPageY) / o.grid[1]) * o.grid[1], 
            pageY = this.containment ? top - this.offset.click.top >= this.containment[1] && top - this.offset.click.top <= this.containment[3] ? top : top - this.offset.click.top >= this.containment[1] ? top - o.grid[1] : top + o.grid[1] : top, 
            left = this.originalPageX + Math.round((pageX - this.originalPageX) / o.grid[0]) * o.grid[0], 
            pageX = this.containment ? left - this.offset.click.left >= this.containment[0] && left - this.offset.click.left <= this.containment[2] ? left : left - this.offset.click.left >= this.containment[0] ? left - o.grid[0] : left + o.grid[0] : left)), 
            {
                top: pageY - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : scrollIsRootNode ? 0 : scroll.scrollTop()),
                left: pageX - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft())
            };
        },
        _rearrange: function(event, i, a, hardRefresh) {
            a ? a[0].appendChild(this.placeholder[0]) : i.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? i.item[0] : i.item[0].nextSibling), 
            this.counter = this.counter ? ++this.counter : 1;
            var counter = this.counter;
            this._delay(function() {
                counter === this.counter && this.refreshPositions(!hardRefresh);
            });
        },
        _clear: function(event, noPropagation) {
            this.reverting = !1;
            var i, delayedTriggers = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), 
            this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (i in this._storedCSS) "auto" !== this._storedCSS[i] && "static" !== this._storedCSS[i] || (this._storedCSS[i] = "");
                this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper");
            } else this.currentItem.show();
            function delayEvent(type, instance, container) {
                return function(event) {
                    container._trigger(type, event, instance._uiHash(instance));
                };
            }
            for (this.fromOutside && !noPropagation && delayedTriggers.push(function(event) {
                this._trigger("receive", event, this._uiHash(this.fromOutside));
            }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || noPropagation || delayedTriggers.push(function(event) {
                this._trigger("update", event, this._uiHash());
            }), this !== this.currentContainer && (noPropagation || (delayedTriggers.push(function(event) {
                this._trigger("remove", event, this._uiHash());
            }), delayedTriggers.push(function(c) {
                return function(event) {
                    c._trigger("receive", event, this._uiHash(this));
                };
            }.call(this, this.currentContainer)), delayedTriggers.push(function(c) {
                return function(event) {
                    c._trigger("update", event, this._uiHash(this));
                };
            }.call(this, this.currentContainer)))), i = this.containers.length - 1; 0 <= i; i--) noPropagation || delayedTriggers.push(delayEvent("deactivate", this, this.containers[i])), 
            this.containers[i].containerCache.over && (delayedTriggers.push(delayEvent("out", this, this.containers[i])), 
            this.containers[i].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), 
            this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), 
            this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), 
            this.dragging = !1, noPropagation || this._trigger("beforeStop", event, this._uiHash()), 
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), 
            this.helper = null), !noPropagation) {
                for (i = 0; i < delayedTriggers.length; i++) delayedTriggers[i].call(this, event);
                this._trigger("stop", event, this._uiHash());
            }
            return this.fromOutside = !1, !this.cancelHelperRemoval;
        },
        _trigger: function() {
            !1 === $.Widget.prototype._trigger.apply(this, arguments) && this.cancel();
        },
        _uiHash: function(_inst) {
            var inst = _inst || this;
            return {
                helper: inst.helper,
                placeholder: inst.placeholder || $([]),
                position: inst.position,
                originalPosition: inst.originalPosition,
                offset: inst.positionAbs,
                item: inst.currentItem,
                sender: _inst ? _inst.element : null
            };
        }
    });
    function spinnerModifer(fn) {
        return function() {
            var previous = this.element.val();
            fn.apply(this, arguments), this._refresh(), previous !== this.element.val() && this._trigger("change");
        };
    }
    $.widget("ui.spinner", {
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
            var options = this._super(), element = this.element;
            return $.each([ "min", "max", "step" ], function(i, option) {
                var value = element.attr(option);
                null != value && value.length && (options[option] = value);
            }), options;
        },
        _events: {
            keydown: function(event) {
                this._start(event) && this._keydown(event) && event.preventDefault();
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val();
            },
            blur: function(event) {
                this.cancelBlur ? delete this.cancelBlur : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", event));
            },
            mousewheel: function(event, delta) {
                if (delta) {
                    if (!this.spinning && !this._start(event)) return !1;
                    this._spin((0 < delta ? 1 : -1) * this.options.step, event), clearTimeout(this.mousewheelTimer), 
                    this.mousewheelTimer = this._delay(function() {
                        this.spinning && this._stop(event);
                    }, 100), event.preventDefault();
                }
            },
            "mousedown .ui-spinner-button": function(event) {
                var previous;
                function checkFocus() {
                    this.element[0] === $.ui.safeActiveElement(this.document[0]) || (this.element.trigger("focus"), 
                    this.previous = previous, this._delay(function() {
                        this.previous = previous;
                    }));
                }
                previous = this.element[0] === $.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), 
                event.preventDefault(), checkFocus.call(this), this.cancelBlur = !0, this._delay(function() {
                    delete this.cancelBlur, checkFocus.call(this);
                }), !1 !== this._start(event) && this._repeat(null, $(event.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, event);
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(event) {
                if ($(event.currentTarget).hasClass("ui-state-active")) return !1 !== this._start(event) && void this._repeat(null, $(event.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, event);
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
        _keydown: function(event) {
            var options = this.options, keyCode = $.ui.keyCode;
            switch (event.keyCode) {
              case keyCode.UP:
                return this._repeat(null, 1, event), !0;

              case keyCode.DOWN:
                return this._repeat(null, -1, event), !0;

              case keyCode.PAGE_UP:
                return this._repeat(null, options.page, event), !0;

              case keyCode.PAGE_DOWN:
                return this._repeat(null, -options.page, event), !0;
            }
            return !1;
        },
        _start: function(event) {
            return !(!this.spinning && !1 === this._trigger("start", event)) && (this.counter || (this.counter = 1), 
            this.spinning = !0);
        },
        _repeat: function(i, steps, event) {
            i = i || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
                this._repeat(40, steps, event);
            }, i), this._spin(steps * this.options.step, event);
        },
        _spin: function(step, event) {
            var value = this.value() || 0;
            this.counter || (this.counter = 1), value = this._adjustValue(value + step * this._increment(this.counter)), 
            this.spinning && !1 === this._trigger("spin", event, {
                value: value
            }) || (this._value(value), this.counter++);
        },
        _increment: function(i) {
            var incremental = this.options.incremental;
            return incremental ? $.isFunction(incremental) ? incremental(i) : Math.floor(i * i * i / 5e4 - i * i / 500 + 17 * i / 200 + 1) : 1;
        },
        _precision: function() {
            var precision = this._precisionOf(this.options.step);
            return null !== this.options.min && (precision = Math.max(precision, this._precisionOf(this.options.min))), 
            precision;
        },
        _precisionOf: function(num) {
            var str = num.toString(), decimal = str.indexOf(".");
            return -1 === decimal ? 0 : str.length - decimal - 1;
        },
        _adjustValue: function(value) {
            var base, aboveMin, options = this.options;
            return aboveMin = value - (base = null !== options.min ? options.min : 0), value = base + (aboveMin = Math.round(aboveMin / options.step) * options.step), 
            value = parseFloat(value.toFixed(this._precision())), null !== options.max && value > options.max ? options.max : null !== options.min && value < options.min ? options.min : value;
        },
        _stop: function(event) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), 
            this.counter = 0, this.spinning = !1, this._trigger("stop", event));
        },
        _setOption: function(key, value) {
            var prevValue, first, last;
            if ("culture" === key || "numberFormat" === key) return prevValue = this._parse(this.element.val()), 
            this.options[key] = value, void this.element.val(this._format(prevValue));
            "max" !== key && "min" !== key && "step" !== key || "string" == typeof value && (value = this._parse(value)), 
            "icons" === key && (first = this.buttons.first().find(".ui-icon"), this._removeClass(first, null, this.options.icons.up), 
            this._addClass(first, null, value.up), last = this.buttons.last().find(".ui-icon"), 
            this._removeClass(last, null, this.options.icons.down), this._addClass(last, null, value.down)), 
            this._super(key, value);
        },
        _setOptionDisabled: function(value) {
            this._super(value), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!value), 
            this.element.prop("disabled", !!value), this.buttons.button(value ? "disable" : "enable");
        },
        _setOptions: spinnerModifer(function(options) {
            this._super(options);
        }),
        _parse: function(val) {
            return "string" == typeof val && "" !== val && (val = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(val, 10, this.options.culture) : +val), 
            "" === val || isNaN(val) ? null : val;
        },
        _format: function(value) {
            return "" === value ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(value, this.options.numberFormat, this.options.culture) : value;
        },
        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            });
        },
        isValid: function() {
            var value = this.value();
            return null !== value && value === this._adjustValue(value);
        },
        _value: function(value, allowAny) {
            var parsed;
            "" !== value && null !== (parsed = this._parse(value)) && (allowAny || (parsed = this._adjustValue(parsed)), 
            value = this._format(parsed)), this.element.val(value), this._refresh();
        },
        _destroy: function() {
            this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), 
            this.uiSpinner.replaceWith(this.element);
        },
        stepUp: spinnerModifer(function(steps) {
            this._stepUp(steps);
        }),
        _stepUp: function(steps) {
            this._start() && (this._spin((steps || 1) * this.options.step), this._stop());
        },
        stepDown: spinnerModifer(function(steps) {
            this._stepDown(steps);
        }),
        _stepDown: function(steps) {
            this._start() && (this._spin((steps || 1) * -this.options.step), this._stop());
        },
        pageUp: spinnerModifer(function(pages) {
            this._stepUp((pages || 1) * this.options.page);
        }),
        pageDown: spinnerModifer(function(pages) {
            this._stepDown((pages || 1) * this.options.page);
        }),
        value: function(newVal) {
            if (!arguments.length) return this._parse(this.element.val());
            spinnerModifer(this._value).call(this, newVal);
        },
        widget: function() {
            return this.uiSpinner;
        }
    }), !1 !== $.uiBackCompat && $.widget("ui.spinner", $.ui.spinner, {
        _enhance: function() {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
        },
        _uiSpinnerHtml: function() {
            return "<span>";
        },
        _buttonHtml: function() {
            return "<a></a><a></a>";
        }
    });
    var rhash;
    $.ui.spinner;
    $.widget("ui.tabs", {
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
        _isLocal: (rhash = /#.*$/, function(anchor) {
            var anchorUrl, locationUrl;
            anchorUrl = anchor.href.replace(rhash, ""), locationUrl = location.href.replace(rhash, "");
            try {
                anchorUrl = decodeURIComponent(anchorUrl);
            } catch (error) {}
            try {
                locationUrl = decodeURIComponent(locationUrl);
            } catch (error) {}
            return 1 < anchor.hash.length && anchorUrl === locationUrl;
        }),
        _create: function() {
            var that = this, options = this.options;
            this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, options.collapsible), 
            this._processTabs(), options.active = this._initialActive(), $.isArray(options.disabled) && (options.disabled = $.unique(options.disabled.concat($.map(this.tabs.filter(".ui-state-disabled"), function(li) {
                return that.tabs.index(li);
            }))).sort()), !1 !== this.options.active && this.anchors.length ? this.active = this._findActive(options.active) : this.active = $(), 
            this._refresh(), this.active.length && this.load(options.active);
        },
        _initialActive: function() {
            var active = this.options.active, collapsible = this.options.collapsible, locationHash = location.hash.substring(1);
            return null === active && (locationHash && this.tabs.each(function(i, tab) {
                if ($(tab).attr("aria-controls") === locationHash) return active = i, !1;
            }), null === active && (active = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), 
            null !== active && -1 !== active || (active = !!this.tabs.length && 0)), !1 !== active && -1 === (active = this.tabs.index(this.tabs.eq(active))) && (active = !collapsible && 0), 
            !collapsible && !1 === active && this.anchors.length && (active = 0), active;
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : $()
            };
        },
        _tabKeydown: function(event) {
            var focusedTab = $($.ui.safeActiveElement(this.document[0])).closest("li"), selectedIndex = this.tabs.index(focusedTab), goingForward = !0;
            if (!this._handlePageNav(event)) {
                switch (event.keyCode) {
                  case $.ui.keyCode.RIGHT:
                  case $.ui.keyCode.DOWN:
                    selectedIndex++;
                    break;

                  case $.ui.keyCode.UP:
                  case $.ui.keyCode.LEFT:
                    goingForward = !1, selectedIndex--;
                    break;

                  case $.ui.keyCode.END:
                    selectedIndex = this.anchors.length - 1;
                    break;

                  case $.ui.keyCode.HOME:
                    selectedIndex = 0;
                    break;

                  case $.ui.keyCode.SPACE:
                    return event.preventDefault(), clearTimeout(this.activating), void this._activate(selectedIndex);

                  case $.ui.keyCode.ENTER:
                    return event.preventDefault(), clearTimeout(this.activating), void this._activate(selectedIndex !== this.options.active && selectedIndex);

                  default:
                    return;
                }
                event.preventDefault(), clearTimeout(this.activating), selectedIndex = this._focusNextTab(selectedIndex, goingForward), 
                event.ctrlKey || event.metaKey || (focusedTab.attr("aria-selected", "false"), this.tabs.eq(selectedIndex).attr("aria-selected", "true"), 
                this.activating = this._delay(function() {
                    this.option("active", selectedIndex);
                }, this.delay));
            }
        },
        _panelKeydown: function(event) {
            this._handlePageNav(event) || event.ctrlKey && event.keyCode === $.ui.keyCode.UP && (event.preventDefault(), 
            this.active.trigger("focus"));
        },
        _handlePageNav: function(event) {
            return event.altKey && event.keyCode === $.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), 
            !0) : event.altKey && event.keyCode === $.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), 
            !0) : void 0;
        },
        _findNextTab: function(index, goingForward) {
            var lastTabIndex = this.tabs.length - 1;
            for (;-1 !== $.inArray((lastTabIndex < index && (index = 0), index < 0 && (index = lastTabIndex), 
            index), this.options.disabled); ) index = goingForward ? index + 1 : index - 1;
            return index;
        },
        _focusNextTab: function(index, goingForward) {
            return index = this._findNextTab(index, goingForward), this.tabs.eq(index).trigger("focus"), 
            index;
        },
        _setOption: function(key, value) {
            "active" !== key ? (this._super(key, value), "collapsible" === key && (this._toggleClass("ui-tabs-collapsible", null, value), 
            value || !1 !== this.options.active || this._activate(0)), "event" === key && this._setupEvents(value), 
            "heightStyle" === key && this._setupHeightStyle(value)) : this._activate(value);
        },
        _sanitizeSelector: function(hash) {
            return hash ? hash.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "";
        },
        refresh: function() {
            var options = this.options, lis = this.tablist.children(":has(a[href])");
            options.disabled = $.map(lis.filter(".ui-state-disabled"), function(tab) {
                return lis.index(tab);
            }), this._processTabs(), !1 !== options.active && this.anchors.length ? this.active.length && !$.contains(this.tablist[0], this.active[0]) ? this.tabs.length === options.disabled.length ? (options.active = !1, 
            this.active = $()) : this._activate(this._findNextTab(Math.max(0, options.active - 1), !1)) : options.active = this.tabs.index(this.active) : (options.active = !1, 
            this.active = $()), this._refresh();
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
            var that = this, prevTabs = this.tabs, prevAnchors = this.anchors, prevPanels = this.panels;
            this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), 
            this.tablist.on("mousedown" + this.eventNamespace, "> li", function(event) {
                $(this).is(".ui-state-disabled") && event.preventDefault();
            }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() {
                $(this).closest("li").is(".ui-state-disabled") && this.blur();
            }), this.tabs = this.tablist.find("> li:has(a[href])").attr({
                role: "tab",
                tabIndex: -1
            }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function() {
                return $("a", this)[0];
            }).attr({
                role: "presentation",
                tabIndex: -1
            }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = $(), this.anchors.each(function(i, anchor) {
                var selector, panel, panelId, anchorId = $(anchor).uniqueId().attr("id"), tab = $(anchor).closest("li"), originalAriaControls = tab.attr("aria-controls");
                that._isLocal(anchor) ? (panelId = (selector = anchor.hash).substring(1), panel = that.element.find(that._sanitizeSelector(selector))) : (selector = "#" + (panelId = tab.attr("aria-controls") || $({}).uniqueId()[0].id), 
                (panel = that.element.find(selector)).length || (panel = that._createPanel(panelId)).insertAfter(that.panels[i - 1] || that.tablist), 
                panel.attr("aria-live", "polite")), panel.length && (that.panels = that.panels.add(panel)), 
                originalAriaControls && tab.data("ui-tabs-aria-controls", originalAriaControls), 
                tab.attr({
                    "aria-controls": panelId,
                    "aria-labelledby": anchorId
                }), panel.attr("aria-labelledby", anchorId);
            }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), 
            prevTabs && (this._off(prevTabs.not(this.tabs)), this._off(prevAnchors.not(this.anchors)), 
            this._off(prevPanels.not(this.panels)));
        },
        _getList: function() {
            return this.tablist || this.element.find("ol, ul").eq(0);
        },
        _createPanel: function(id) {
            return $("<div>").attr("id", id).data("ui-tabs-destroy", !0);
        },
        _setOptionDisabled: function(disabled) {
            var currentItem, li, i;
            for ($.isArray(disabled) && (disabled.length ? disabled.length === this.anchors.length && (disabled = !0) : disabled = !1), 
            i = 0; li = this.tabs[i]; i++) currentItem = $(li), !0 === disabled || -1 !== $.inArray(i, disabled) ? (currentItem.attr("aria-disabled", "true"), 
            this._addClass(currentItem, null, "ui-state-disabled")) : (currentItem.removeAttr("aria-disabled"), 
            this._removeClass(currentItem, null, "ui-state-disabled"));
            this.options.disabled = disabled, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !0 === disabled);
        },
        _setupEvents: function(event) {
            var events = {};
            event && $.each(event.split(" "), function(index, eventName) {
                events[eventName] = "_eventHandler";
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                click: function(event) {
                    event.preventDefault();
                }
            }), this._on(this.anchors, events), this._on(this.tabs, {
                keydown: "_tabKeydown"
            }), this._on(this.panels, {
                keydown: "_panelKeydown"
            }), this._focusable(this.tabs), this._hoverable(this.tabs);
        },
        _setupHeightStyle: function(heightStyle) {
            var maxHeight, parent = this.element.parent();
            "fill" === heightStyle ? (maxHeight = parent.height(), maxHeight -= this.element.outerHeight() - this.element.height(), 
            this.element.siblings(":visible").each(function() {
                var elem = $(this), position = elem.css("position");
                "absolute" !== position && "fixed" !== position && (maxHeight -= elem.outerHeight(!0));
            }), this.element.children().not(this.panels).each(function() {
                maxHeight -= $(this).outerHeight(!0);
            }), this.panels.each(function() {
                $(this).height(Math.max(0, maxHeight - $(this).innerHeight() + $(this).height()));
            }).css("overflow", "auto")) : "auto" === heightStyle && (maxHeight = 0, this.panels.each(function() {
                maxHeight = Math.max(maxHeight, $(this).height("").height());
            }).height(maxHeight));
        },
        _eventHandler: function(event) {
            var options = this.options, active = this.active, tab = $(event.currentTarget).closest("li"), clickedIsActive = tab[0] === active[0], collapsing = clickedIsActive && options.collapsible, toShow = collapsing ? $() : this._getPanelForTab(tab), toHide = active.length ? this._getPanelForTab(active) : $(), eventData = {
                oldTab: active,
                oldPanel: toHide,
                newTab: collapsing ? $() : tab,
                newPanel: toShow
            };
            event.preventDefault(), tab.hasClass("ui-state-disabled") || tab.hasClass("ui-tabs-loading") || this.running || clickedIsActive && !options.collapsible || !1 === this._trigger("beforeActivate", event, eventData) || (options.active = !collapsing && this.tabs.index(tab), 
            this.active = clickedIsActive ? $() : tab, this.xhr && this.xhr.abort(), toHide.length || toShow.length || $.error("jQuery UI Tabs: Mismatching fragment identifier."), 
            toShow.length && this.load(this.tabs.index(tab), event), this._toggle(event, eventData));
        },
        _toggle: function(event, eventData) {
            var that = this, toShow = eventData.newPanel, toHide = eventData.oldPanel;
            function complete() {
                that.running = !1, that._trigger("activate", event, eventData);
            }
            function show() {
                that._addClass(eventData.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), 
                toShow.length && that.options.show ? that._show(toShow, that.options.show, complete) : (toShow.show(), 
                complete());
            }
            this.running = !0, toHide.length && this.options.hide ? this._hide(toHide, this.options.hide, function() {
                that._removeClass(eventData.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), 
                show();
            }) : (this._removeClass(eventData.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), 
            toHide.hide(), show()), toHide.attr("aria-hidden", "true"), eventData.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), toShow.length && toHide.length ? eventData.oldTab.attr("tabIndex", -1) : toShow.length && this.tabs.filter(function() {
                return 0 === $(this).attr("tabIndex");
            }).attr("tabIndex", -1), toShow.attr("aria-hidden", "false"), eventData.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            });
        },
        _activate: function(index) {
            var anchor, active = this._findActive(index);
            active[0] !== this.active[0] && (active.length || (active = this.active), anchor = active.find(".ui-tabs-anchor")[0], 
            this._eventHandler({
                target: anchor,
                currentTarget: anchor,
                preventDefault: $.noop
            }));
        },
        _findActive: function(index) {
            return !1 === index ? $() : this.tabs.eq(index);
        },
        _getIndex: function(index) {
            return "string" == typeof index && (index = this.anchors.index(this.anchors.filter("[href$='" + $.ui.escapeSelector(index) + "']"))), 
            index;
        },
        _destroy: function() {
            this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), 
            this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() {
                $.data(this, "ui-tabs-destroy") ? $(this).remove() : $(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded");
            }), this.tabs.each(function() {
                var li = $(this), prev = li.data("ui-tabs-aria-controls");
                prev ? li.attr("aria-controls", prev).removeData("ui-tabs-aria-controls") : li.removeAttr("aria-controls");
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "");
        },
        enable: function(index) {
            var disabled = this.options.disabled;
            !1 !== disabled && (disabled = void 0 !== index && (index = this._getIndex(index), 
            $.isArray(disabled) ? $.map(disabled, function(num) {
                return num !== index ? num : null;
            }) : $.map(this.tabs, function(li, num) {
                return num !== index ? num : null;
            })), this._setOptionDisabled(disabled));
        },
        disable: function(index) {
            var disabled = this.options.disabled;
            if (!0 !== disabled) {
                if (void 0 === index) disabled = !0; else {
                    if (index = this._getIndex(index), -1 !== $.inArray(index, disabled)) return;
                    disabled = $.isArray(disabled) ? $.merge([ index ], disabled).sort() : [ index ];
                }
                this._setOptionDisabled(disabled);
            }
        },
        load: function(index, event) {
            index = this._getIndex(index);
            var that = this, tab = this.tabs.eq(index), anchor = tab.find(".ui-tabs-anchor"), panel = this._getPanelForTab(tab), eventData = {
                tab: tab,
                panel: panel
            }, complete = function(jqXHR, status) {
                "abort" === status && that.panels.stop(!1, !0), that._removeClass(tab, "ui-tabs-loading"), 
                panel.removeAttr("aria-busy"), jqXHR === that.xhr && delete that.xhr;
            };
            this._isLocal(anchor[0]) || (this.xhr = $.ajax(this._ajaxSettings(anchor, event, eventData)), 
            this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(tab, "ui-tabs-loading"), 
            panel.attr("aria-busy", "true"), this.xhr.done(function(response, status, jqXHR) {
                setTimeout(function() {
                    panel.html(response), that._trigger("load", event, eventData), complete(jqXHR, status);
                }, 1);
            }).fail(function(jqXHR, status) {
                setTimeout(function() {
                    complete(jqXHR, status);
                }, 1);
            })));
        },
        _ajaxSettings: function(anchor, event, eventData) {
            var that = this;
            return {
                url: anchor.attr("href").replace(/#.*$/, ""),
                beforeSend: function(jqXHR, settings) {
                    return that._trigger("beforeLoad", event, $.extend({
                        jqXHR: jqXHR,
                        ajaxSettings: settings
                    }, eventData));
                }
            };
        },
        _getPanelForTab: function(tab) {
            var id = $(tab).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + id));
        }
    }), !1 !== $.uiBackCompat && $.widget("ui.tabs", $.ui.tabs, {
        _processTabs: function() {
            this._superApply(arguments), this._addClass(this.tabs, "ui-tab");
        }
    });
    $.ui.tabs;
    $.widget("ui.tooltip", {
        version: "1.12.1",
        options: {
            classes: {
                "ui-tooltip": "ui-corner-all ui-widget-shadow"
            },
            content: function() {
                var title = $(this).attr("title") || "";
                return $("<a>").text(title).html();
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
        _addDescribedBy: function(elem, id) {
            var describedby = (elem.attr("aria-describedby") || "").split(/\s+/);
            describedby.push(id), elem.data("ui-tooltip-id", id).attr("aria-describedby", $.trim(describedby.join(" ")));
        },
        _removeDescribedBy: function(elem) {
            var id = elem.data("ui-tooltip-id"), describedby = (elem.attr("aria-describedby") || "").split(/\s+/), index = $.inArray(id, describedby);
            -1 !== index && describedby.splice(index, 1), elem.removeData("ui-tooltip-id"), 
            (describedby = $.trim(describedby.join(" "))) ? elem.attr("aria-describedby", describedby) : elem.removeAttr("aria-describedby");
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            }), this.tooltips = {}, this.parents = {}, this.liveRegion = $("<div>").attr({
                role: "log",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), 
            this.disabledTitles = $([]);
        },
        _setOption: function(key, value) {
            var that = this;
            this._super(key, value), "content" === key && $.each(this.tooltips, function(id, tooltipData) {
                that._updateContent(tooltipData.element);
            });
        },
        _setOptionDisabled: function(value) {
            this[value ? "_disable" : "_enable"]();
        },
        _disable: function() {
            var that = this;
            $.each(this.tooltips, function(id, tooltipData) {
                var event = $.Event("blur");
                event.target = event.currentTarget = tooltipData.element[0], that.close(event, !0);
            }), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function() {
                var element = $(this);
                if (element.is("[title]")) return element.data("ui-tooltip-title", element.attr("title")).removeAttr("title");
            }));
        },
        _enable: function() {
            this.disabledTitles.each(function() {
                var element = $(this);
                element.data("ui-tooltip-title") && element.attr("title", element.data("ui-tooltip-title"));
            }), this.disabledTitles = $([]);
        },
        open: function(event) {
            var that = this, target = $(event ? event.target : this.element).closest(this.options.items);
            target.length && !target.data("ui-tooltip-id") && (target.attr("title") && target.data("ui-tooltip-title", target.attr("title")), 
            target.data("ui-tooltip-open", !0), event && "mouseover" === event.type && target.parents().each(function() {
                var blurEvent, parent = $(this);
                parent.data("ui-tooltip-open") && ((blurEvent = $.Event("blur")).target = blurEvent.currentTarget = this, 
                that.close(blurEvent, !0)), parent.attr("title") && (parent.uniqueId(), that.parents[this.id] = {
                    element: this,
                    title: parent.attr("title")
                }, parent.attr("title", ""));
            }), this._registerCloseHandlers(event, target), this._updateContent(target, event));
        },
        _updateContent: function(target, event) {
            var content, contentOption = this.options.content, that = this, eventType = event ? event.type : null;
            if ("string" == typeof contentOption || contentOption.nodeType || contentOption.jquery) return this._open(event, target, contentOption);
            (content = contentOption.call(target[0], function(response) {
                that._delay(function() {
                    target.data("ui-tooltip-open") && (event && (event.type = eventType), this._open(event, target, response));
                });
            })) && this._open(event, target, content);
        },
        _open: function(event, target, content) {
            var tooltipData, tooltip, delayedShow, a11yContent, positionOption = $.extend({}, this.options.position);
            function position(event) {
                positionOption.of = event, tooltip.is(":hidden") || tooltip.position(positionOption);
            }
            content && ((tooltipData = this._find(target)) ? tooltipData.tooltip.find(".ui-tooltip-content").html(content) : (target.is("[title]") && (event && "mouseover" === event.type ? target.attr("title", "") : target.removeAttr("title")), 
            tooltipData = this._tooltip(target), tooltip = tooltipData.tooltip, this._addDescribedBy(target, tooltip.attr("id")), 
            tooltip.find(".ui-tooltip-content").html(content), this.liveRegion.children().hide(), 
            (a11yContent = $("<div>").html(tooltip.find(".ui-tooltip-content").html())).removeAttr("name").find("[name]").removeAttr("name"), 
            a11yContent.removeAttr("id").find("[id]").removeAttr("id"), a11yContent.appendTo(this.liveRegion), 
            this.options.track && event && /^mouse/.test(event.type) ? (this._on(this.document, {
                mousemove: position
            }), position(event)) : tooltip.position($.extend({
                of: target
            }, this.options.position)), tooltip.hide(), this._show(tooltip, this.options.show), 
            this.options.track && this.options.show && this.options.show.delay && (delayedShow = this.delayedShow = setInterval(function() {
                tooltip.is(":visible") && (position(positionOption.of), clearInterval(delayedShow));
            }, $.fx.interval)), this._trigger("open", event, {
                tooltip: tooltip
            })));
        },
        _registerCloseHandlers: function(event, target) {
            var events = {
                keyup: function(event) {
                    if (event.keyCode === $.ui.keyCode.ESCAPE) {
                        var fakeEvent = $.Event(event);
                        fakeEvent.currentTarget = target[0], this.close(fakeEvent, !0);
                    }
                }
            };
            target[0] !== this.element[0] && (events.remove = function() {
                this._removeTooltip(this._find(target).tooltip);
            }), event && "mouseover" !== event.type || (events.mouseleave = "close"), event && "focusin" !== event.type || (events.focusout = "close"), 
            this._on(!0, target, events);
        },
        close: function(event) {
            var tooltip, that = this, target = $(event ? event.currentTarget : this.element), tooltipData = this._find(target);
            tooltipData ? (tooltip = tooltipData.tooltip, tooltipData.closing || (clearInterval(this.delayedShow), 
            target.data("ui-tooltip-title") && !target.attr("title") && target.attr("title", target.data("ui-tooltip-title")), 
            this._removeDescribedBy(target), tooltipData.hiding = !0, tooltip.stop(!0), this._hide(tooltip, this.options.hide, function() {
                that._removeTooltip($(this));
            }), target.removeData("ui-tooltip-open"), this._off(target, "mouseleave focusout keyup"), 
            target[0] !== this.element[0] && this._off(target, "remove"), this._off(this.document, "mousemove"), 
            event && "mouseleave" === event.type && $.each(this.parents, function(id, parent) {
                $(parent.element).attr("title", parent.title), delete that.parents[id];
            }), tooltipData.closing = !0, this._trigger("close", event, {
                tooltip: tooltip
            }), tooltipData.hiding || (tooltipData.closing = !1))) : target.removeData("ui-tooltip-open");
        },
        _tooltip: function(element) {
            var tooltip = $("<div>").attr("role", "tooltip"), content = $("<div>").appendTo(tooltip), id = tooltip.uniqueId().attr("id");
            return this._addClass(content, "ui-tooltip-content"), this._addClass(tooltip, "ui-tooltip", "ui-widget ui-widget-content"), 
            tooltip.appendTo(this._appendTo(element)), this.tooltips[id] = {
                element: element,
                tooltip: tooltip
            };
        },
        _find: function(target) {
            var id = target.data("ui-tooltip-id");
            return id ? this.tooltips[id] : null;
        },
        _removeTooltip: function(tooltip) {
            tooltip.remove(), delete this.tooltips[tooltip.attr("id")];
        },
        _appendTo: function(target) {
            var element = target.closest(".ui-front, dialog");
            return element.length || (element = this.document[0].body), element;
        },
        _destroy: function() {
            var that = this;
            $.each(this.tooltips, function(id, tooltipData) {
                var event = $.Event("blur"), element = tooltipData.element;
                event.target = event.currentTarget = element[0], that.close(event, !0), $("#" + id).remove(), 
                element.data("ui-tooltip-title") && (element.attr("title") || element.attr("title", element.data("ui-tooltip-title")), 
                element.removeData("ui-tooltip-title"));
            }), this.liveRegion.remove();
        }
    }), !1 !== $.uiBackCompat && $.widget("ui.tooltip", $.ui.tooltip, {
        options: {
            tooltipClass: null
        },
        _tooltip: function() {
            var tooltipData = this._superApply(arguments);
            return this.options.tooltipClass && tooltipData.tooltip.addClass(this.options.tooltipClass), 
            tooltipData;
        }
    });
    $.ui.tooltip;
});