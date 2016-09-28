!function (t) {
    function e(i) {
        if (n[i])return n[i].exports;
        var a = n[i] = {exports: {}, id: i, loaded: !1};
        return t[i].call(a.exports, a, a.exports, e), a.loaded = !0, a.exports
    }

    var n = {};
    return e.m = t, e.c = n, e.p = "", e(0)
}(function (t) {
    for (var e in t)if (Object.prototype.hasOwnProperty.call(t, e))switch (typeof t[e]) {
        case"function":
            break;
        case"object":
            t[e] = function (e) {
                var n = e.slice(1), i = t[e[0]];
                return function (t, e, a) {
                    i.apply(this, [t, e, a].concat(n))
                }
            }(t[e]);
            break;
        default:
            t[e] = t[t[e]]
    }
    return t
}([function (t, e, n) {
    "use strict";
    var i = n(2)["default"], a = n(65), s = i(a), r = n(99), l = i(r), o = n(40), c = i(o);
    angular.module("ng.admin", ["ui.router", "sn.components", l["default"], c["default"], s["default"]]).config(["$stateProvider", "$urlRouterProvider", function (t, e) {
        e.otherwise("/dashboard"), t.state("Dashboard", {
            url: "/dashboard",
            template: "<sn-dashboard></sn-dashboard>"
        }).state("Messages", {
            url: "/messages",
            template: "<sn-message-list></sn-message-list>"
        }).state("Platform", {url: "/platform", template: "<h1>Platform</h1>"}).state("Entity", {
            url: "/entity",
            template: "<sn-entity-manage></sn-entity-manage>"
        }).state("Employees", {
            url: "/employee-list",
            template: "<sn-employee-list></sn-employee-list>"
        }).state("UI Elements", {url: "/ui-elements", template: "<h1>UI Elements</h1>"}).state("Demos", {
            url: "/demos",
            template: "<h1>Demos</h1>"
        }).state("Euclid", {url: "/euclid", template: "<sn-euclid></sn-euclid>"}).state("Choice", {
            url: "/choice",
            template: "<sn-choice></sn-choice>"
        }).state("Sample Pages", {url: "/sample-pages", template: "<h1>Sample Pages</h1>"})
    }])
}, function (t, e) {
    "use strict";
    e["default"] = function (t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }, e.__esModule = !0
}, function (t, e) {
    "use strict";
    e["default"] = function (t) {
        return t && t.__esModule ? t : {"default": t}
    }, e.__esModule = !0
}, function (t, e, n) {
    "use strict";
    var i = n(108)["default"];
    e["default"] = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var a = e[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), i(t, a.key, a)
            }
        }

        return function (e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e
        }
    }(), e.__esModule = !0
}, function (t, e) {
    var n = Object;
    t.exports = {
        create: n.create,
        getProto: n.getPrototypeOf,
        isEnum: {}.propertyIsEnumerable,
        getDesc: n.getOwnPropertyDescriptor,
        setDesc: n.defineProperty,
        setDescs: n.defineProperties,
        getKeys: n.keys,
        getNames: n.getOwnPropertyNames,
        getSymbols: n.getOwnPropertySymbols,
        each: [].forEach
    }
}, function (t, e, n) {
    var i = n(129)("wks"), a = n(9).Symbol;
    t.exports = function (t) {
        return i[t] || (i[t] = a && a[t] || (a || n(35))("Symbol." + t))
    }
}, function (t, e) {
    var n = t.exports = {};
    "number" == typeof __e && (__e = n)
}, function (t, e, n) {
    function i(t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    }

    function a(t, e, n) {
        var o, c, f, d, u = t & a.G, h = t & a.P, p = u ? s : t & a.S ? s[e] : (s[e] || {})[l], v = u ? r : r[e] || (r[e] = {});
        u && (n = e);
        for (o in n)c = !(t & a.F) && p && o in p, c && o in v || (f = c ? p[o] : n[o], u && "function" != typeof p[o] ? d = n[o] : t & a.B && c ? d = i(f, s) : t & a.W && p[o] == f ? !function (t) {
            d = function (e) {
                return this instanceof t ? new t(e) : t(e)
            }, d[l] = t[l]
        }(f) : d = h && "function" == typeof f ? i(Function.call, f) : f, v[o] = d, h && ((v[l] || (v[l] = {}))[o] = f))
    }

    var s = n(9), r = n(6), l = "prototype";
    a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, t.exports = a
}, function (t, e, n) {
    var i = n(4), a = n(30);
    t.exports = n(13) ? function (t, e, n) {
        return i.setDesc(t, e, a(1, n))
    } : function (t, e, n) {
        return t[e] = n, t
    }
}, function (t, e) {
    var n = "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    t.exports = n, "number" == typeof __g && (__g = n)
}, function (t, e) {
    t.exports = {}
}, function (t, e, n) {
    var i = n(119);
    t.exports = function (t, e, n) {
        if (i(t), ~n && void 0 === e)return t;
        switch (n) {
            case 1:
                return function (n) {
                    return t.call(e, n)
                };
            case 2:
                return function (n, i) {
                    return t.call(e, n, i)
                };
            case 3:
                return function (n, i, a) {
                    return t.call(e, n, i, a)
                }
        }
        return function () {
            return t.apply(e, arguments)
        }
    }
}, function (t, e) {
    t.exports = function (t) {
        return null !== t && ("object" == typeof t || "function" == typeof t)
    }
}, function (t, e) {
    t.exports = !!function () {
        try {
            return 2 == Object.defineProperty({}, "a", {
                    get: function () {
                        return 2
                    }
                }).a
        } catch (t) {
        }
    }()
}, function (t, e, n) {
    var i = n(123), a = n(16);
    t.exports = function (t, e) {
        return (e ? Object : i)(a(t))
    }
}, function (t, e, n) {
    var i = n(12);
    t.exports = function (t) {
        if (!i(t))throw TypeError(t + " is not an object!");
        return t
    }
}, function (t, e) {
    t.exports = function (t) {
        if (void 0 == t)throw TypeError("Can't call method on  " + t);
        return t
    }
}, function (t, e, n) {
    var i = n(11), a = n(27), s = n(25), r = n(15), l = n(34), o = n(36);
    t.exports = function (t, e, n, c) {
        var f, d, u, h = o(t), p = i(n, c, e ? 2 : 1), v = 0;
        if ("function" != typeof h)throw TypeError(t + " is not iterable!");
        if (s(h))for (f = l(t.length); f > v; v++)e ? p(r(d = t[v])[0], d[1]) : p(t[v]); else for (u = h.call(t); !(d = u.next()).done;)a(u, p, d.value, e)
    }
}, function (t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function (t, e) {
        return n.call(t, e)
    }
}, function (t, e, n) {
    "use strict";
    function i() {
        return this
    }

    var a = n(127), s = n(7), r = n(31), l = n(8), o = n(18), c = n(5)("iterator"), f = n(10), d = "@@iterator", u = "keys", h = "values";
    t.exports = function (t, e, p, v, g, y, m) {
        function b(t) {
            switch (t) {
                case u:
                    return function () {
                        return new p(this, t)
                    };
                case h:
                    return function () {
                        return new p(this, t)
                    }
            }
            return function () {
                return new p(this, t)
            }
        }

        n(125)(p, e, v);
        var w, x, k = e + " Iterator", C = t.prototype, _ = C[c] || C[d] || g && C[g], M = _ || b(g);
        if (_) {
            var P = n(4).getProto(M.call(new t));
            n(20)(P, k, !0), !a && o(C, d) && l(P, c, i)
        }
        if ((!a || m) && l(C, c, M), f[e] = M, f[k] = i, g)if (w = {
                keys: y ? M : b(u),
                values: g == h ? M : b(h),
                entries: g != h ? M : b("entries")
            }, m)for (x in w)x in C || r(C, x, w[x]); else s(s.P + s.F * n(26), e, w)
    }
}, function (t, e, n) {
    var i = n(18), a = n(8), s = n(5)("toStringTag");
    t.exports = function (t, e, n) {
        t && !i(t = n ? t : t.prototype, s) && a(t, s, e)
    }
}, function (t, e, n) {
    "use strict";
    var i = n(3)["default"], a = n(1)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = function () {
        function t(e) {
            a(this, t), this.messageCols = [{label: "Title", key: "title"}, {
                label: "Content",
                key: "content"
            }, {label: "Date", key: "date"}], this.messageList = [], this.PortalService = e
        }

        return i(t, [{
            key: "init", value: function () {
                var t = this;
                this.PortalService.getMessageList().subscribe(function (e) {
                    return t.messageList.push(e)
                })
            }
        }]), t
    }();
    e["default"] = s, s.$inject = ["PortalService"], t.exports = e["default"]
}, function (t, e, n) {
    t.exports = {"default": n(115), __esModule: !0}
}, function (t, e, n) {
    var i = n(24), a = n(5)("toStringTag"), s = "Arguments" == i(function () {
            return arguments
        }());
    t.exports = function (t) {
        var e, n, r;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = (e = Object(t))[a]) ? n : s ? i(e) : "Object" == (r = i(e)) && "function" == typeof e.callee ? "Arguments" : r
    }
}, function (t, e) {
    var n = {}.toString;
    t.exports = function (t) {
        return n.call(t).slice(8, -1)
    }
}, function (t, e, n) {
    var i = n(10), a = n(5)("iterator");
    t.exports = function (t) {
        return ("Array" in i ? i.Array : Array.prototype[a]) === t
    }
}, function (t, e) {
    t.exports = "keys" in [] && !("next" in [].keys())
}, function (t, e, n) {
    function i(t) {
        var e = t["return"];
        void 0 !== e && a(e.call(t))
    }

    var a = n(15);
    t.exports = function (t, e, n, s) {
        try {
            return s ? e(a(n)[0], n[1]) : e(n)
        } catch (r) {
            throw i(t), r
        }
    }
}, function (t, e) {
    t.exports = function (t, e) {
        return {value: e, done: !!t}
    }
}, function (t, e, n) {
    var i = n(31);
    t.exports = function (t, e) {
        for (var n in e)i(t, n, e[n]);
        return t
    }
}, function (t, e) {
    t.exports = function (t, e) {
        return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e}
    }
}, function (t, e, n) {
    t.exports = n(8)
}, function (t, e) {
    t.exports = function (t, e, n) {
        if (!(t instanceof e))throw TypeError(n + ": use the 'new' operator!");
        return t
    }
}, function (t, e) {
    var n = Math.ceil, i = Math.floor;
    t.exports = function (t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? i : n)(t)
    }
}, function (t, e, n) {
    var i = n(33), a = Math.min;
    t.exports = function (t) {
        return t > 0 ? a(i(t), 9007199254740991) : 0
    }
}, function (t, e) {
    var n = 0, i = Math.random();
    t.exports = function (t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + i).toString(36))
    }
}, function (t, e, n) {
    var i = n(9), a = n(23), s = n(5)("iterator"), r = n(10);
    t.exports = n(6).getIteratorMethod = function (t) {
        var e = i.Symbol;
        return void 0 != t ? t[e && e.iterator || "@@iterator"] || t[s] || r[a(t)] : void 0
    }
}, function (t, e, n) {
    var i = n(131)(!0);
    n(19)(String, "String", function (t) {
        this._t = String(t), this._i = 0
    }, function () {
        var t, e = this._t, n = this._i;
        return n >= e.length ? {value: void 0, done: !0} : (t = i(e, n), this._i += t.length, {value: t, done: !1})
    })
}, function (t, e) {
    "use strict";
    function n(t) {
        return moment(t).fromNow()
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.fromNow = n
}, function (t, e) {
    "use strict";
    function n(t) {
        return t -= 0, i[t]
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.gender = n;
    var i = ["Female", "Male"]
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = n(38), a = n(39);
    e["default"] = angular.module("filters", []).filter("fromNow", function () {
        return i.fromNow
    }).filter("gender", function () {
        return a.gender
    }).name, t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(3)["default"], a = n(1)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = function () {
        function t(e) {
            a(this, t), this.ChatService = e, this.chatList = [], this.newMessage = ""
        }

        return i(t, [{
            key: "init", value: function () {
                var t = this;
                this.ChatService.getChatList().then(function (e) {
                    return t.chatList = e
                })
            }
        }, {
            key: "sendMessage", value: function () {
                this.ChatService.sendMessage(this.newMessage), this.newMessage = ""
            }
        }]), t
    }();
    e["default"] = s, s.$inject = ["ChatService"], t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(3)["default"], a = n(1)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = function () {
        function t() {
            a(this, t), this.aggregationItems = []
        }

        return i(t, [{
            key: "init", value: function () {
                this.aggregationItems = [{
                    theme: "primary",
                    icon: "fa-comments",
                    count: 26,
                    content: "New Comments!",
                    state: "Comments"
                }, {
                    theme: "info",
                    icon: "fa-tasks",
                    count: 14,
                    content: "New Messages!",
                    state: "Messages"
                }, {
                    theme: "success",
                    icon: "fa-shopping-cart",
                    count: 124,
                    content: "New Orders!",
                    state: "Orders"
                }, {theme: "warning", icon: "fa-support", count: 13, content: "Support Tickets!", state: "Tickets"}]
            }
        }]), t
    }();
    e["default"] = s, t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(3)["default"], a = n(1)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = function () {
        function t(e) {
            a(this, t), this.NotificationService = e, this.notifications = []
        }

        return i(t, [{
            key: "init", value: function () {
                var t = this;
                this.NotificationService.getNotifications().then(function (e) {
                    return t.notifications = e
                })
            }
        }]), t
    }();
    e["default"] = s, s.$inject = ["NotificationService"], t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(3)["default"], a = n(1)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = function () {
        function t(e) {
            a(this, t), this.TimelineService = e, this.timeline = []
        }

        return i(t, [{
            key: "init", value: function () {
                var t = this;
                this.TimelineService.getTimeline().then(function (e) {
                    return t.timeline = e
                })
            }
        }]), t
    }();
    e["default"] = s, s.$inject = ["TimelineService"], t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(1)["default"], a = n(2)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = n(144), r = a(s);
    n(141);
    var l = function o() {
        i(this, o), this.template = r["default"], this.restrict = "E", this.scope = {data: "="}
    };
    e["default"] = l, t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(1)["default"], a = n(2)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = n(145), r = a(s), l = function o() {
        i(this, o), this.template = r["default"], this.restrict = "E"
    };
    e["default"] = l, t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(1)["default"], a = n(2)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = n(146), r = a(s), l = function o() {
        i(this, o), this.template = r["default"], this.restrict = "E"
    };
    e["default"] = l, t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(1)["default"], a = n(2)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = n(147), r = a(s), l = n(41), o = a(l);
    n(142);
    var c = function f() {
        i(this, f), this.template = r["default"], this.restrict = "E", this.controller = o["default"], this.controllerAs = "chatCtrl"
    };
    e["default"] = c, t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(1)["default"], a = n(2)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = n(148), r = a(s), l = n(42), o = a(l), c = function f() {
        i(this, f), this.template = r["default"], this.restrict = "E", this.controller = o["default"], this.controllerAs = "dashboardCtrl"
    };
    e["default"] = c, t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(1)["default"], a = n(2)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = n(149), r = a(s), l = function o() {
        i(this, o), this.template = r["default"], this.restrict = "E"
    };
    e["default"] = l, t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(1)["default"], a = n(2)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = n(150), r = a(s), l = n(43), o = a(l), c = function f() {
        i(this, f), this.template = r["default"], this.restrict = "E", this.controller = o["default"], this.controllerAs = "notificationCtrl"
    };
    e["default"] = c, t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(1)["default"], a = n(2)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = n(151), r = a(s), l = n(44), o = a(l);
    n(143);
    var c = function f() {
        i(this, f), this.template = r["default"], this.restrict = "E", this.controller = o["default"], this.controllerAs = "timelineCtrl"
    };
    e["default"] = c, t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(2)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var a = n(49), s = i(a), r = n(45), l = i(r), o = n(48), c = i(o), f = n(52), d = i(f), u = n(46), h = i(u), p = n(47), v = i(p), g = n(50), y = i(g), m = n(51), b = i(m);
    e["default"] = angular.module("modules.dashboard", []).directive("snDashboard", function () {
        return new s["default"]
    }).directive("snAggregationItemPanel", function () {
        return new l["default"]
    }).directive("snChatPanel", function () {
        return new c["default"]
    }).directive("snTimelinePanel", function () {
        return new d["default"]
    }).directive("snAreaChartPanel", function () {
        return new h["default"]
    }).directive("snBarChartPanel", function () {
        return new v["default"]
    }).directive("snDonutChartPanel", function () {
        return new y["default"]
    }).directive("snNotificationPanel", function () {
        return new b["default"]
    }).name, t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(3)["default"], a = n(1)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = function () {
        function t(e) {
            a(this, t), this.FlowService = e
        }

        return i(t, [{
            key: "init", value: function () {
                var t = this, e = {
                    name: "Choice",
                    activities: [{id: "a00", type: "start", action: "this.step=0"}, {
                        id: "a01",
                        type: "normal",
                        action: "var temp=this.a%this.b; this.a=this.b; this.b=temp;"
                    }, {id: "a02", type: "finish", action: "this.result=this.b;"}],
                    transitions: [{id: "b00", from: "a00", to: "a01", condition: "return true"}, {
                        id: "b01",
                        from: "a01",
                        to: "a01",
                        condition: "return this.a%this.b!=0"
                    }, {id: "b02", from: "a01", to: "a02", condition: "return this.a%this.b==0"}]
                };
                this.FlowService.getFlow(e).then(function (e) {
                    t.flow = e, t.flow.executeStep()
                })
            }
        }]), t
    }();
    e["default"] = s, s.$inject = ["FlowService"], t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(3)["default"], a = n(1)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = function () {
        function t(e) {
            a(this, t), this.FlowService = e
        }

        return i(t, [{
            key: "init", value: function () {
                var t = this, e = {
                    name: "Euclid",
                    activities: [{id: "a00", type: "start", action: "this.a=72; this.b=45;"}, {
                        id: "a01",
                        type: "normal",
                        action: "var temp=this.a%this.b; this.a=this.b; this.b=temp;"
                    }, {id: "a02", type: "finish", action: "this.result=this.b;"}],
                    transitions: [{id: "b00", from: "a00", to: "a01", condition: "return true"}, {
                        id: "b01",
                        from: "a01",
                        to: "a01",
                        condition: "return this.a%this.b!=0"
                    }, {id: "b02", from: "a01", to: "a02", condition: "return this.a%this.b==0"}]
                };
                this.FlowService.getFlow(e).then(function (e) {
                    t.flow = e, t.flow.executeStep()
                })
            }
        }, {
            key: "next", value: function () {
                this.flow.executeStep()
            }
        }]), t
    }();
    e["default"] = s, s.$inject = ["FlowService"], t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(1)["default"], a = n(2)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = n(152), r = a(s), l = n(54), o = a(l), c = function f() {
        i(this, f), this.template = r["default"], this.restrict = "E", this.replace = !0, this.controller = o["default"], this.controllerAs = "choiceCtrl"
    };
    e["default"] = c, t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(1)["default"], a = n(2)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = n(153), r = a(s), l = n(55), o = a(l), c = function f() {
        i(this, f), this.template = r["default"], this.restrict = "E", this.replace = !0, this.controller = o["default"], this.controllerAs = "euclidCtrl"
    };
    e["default"] = c, t.exports = e["default"]
}, function (t, e) {
    "use strict"
}, function (t, e, n) {
    "use strict";
    var i = n(2)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var a = n(57), s = i(a), r = n(56), l = i(r), o = n(58), c = i(o);
    e["default"] = angular.module("modules.demo.flow", []).directive("snEuclid", function () {
        return new s["default"]
    }).directive("snChoice", function () {
        return new l["default"]
    }).directive("snShopping", function () {
        return new c["default"]
    }).name, t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(2)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var a = n(59), s = i(a);
    e["default"] = angular.module("modules.demo", [s["default"]]).name, t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(3)["default"], a = n(1)["default"], s = n(2)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var r = n(155), l = s(r), o = function () {
        function t(e, n, i) {
            a(this, t), this.EmployeeService = e, this.DialogService = n, this.AlertService = i, this.total = 0, this.employeeList = [], this.selectedEmployee = null
        }

        return i(t, [{
            key: "init", value: function () {
                this.getEmployeeList(0)
            }
        }, {
            key: "getEmployeeList", value: function (t) {
                var e = this;
                this.EmployeeService.getEmployeeList(t, 10).then(function (t) {
                    e.employeeList = t.employeeList, e.total = t.total, e.selectedEmployee = null
                })
            }
        }, {
            key: "newEmployee", value: function () {
                var t = this;
                this.DialogService.modal(l["default"], null, function (e) {
                    return t.employeeList.push(e)
                })
            }
        }, {
            key: "deleteEmployee", value: function () {
                var t = this;
                this.AlertService.confirm({title: "Delete Employee", content: "Are you sure?"}).then(function () {
                    t.EmployeeService.deleteEmployee(t.selectedEmployee).then(function () {
                        return t.employeeList = t.employeeList.filter(function (e) {
                            return e != t.selectedEmployee
                        })
                    })
                })
            }
        }]), t
    }();
    e["default"] = o, o.$inject = ["EmployeeService", "DialogService", "AlertService"], t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(3)["default"], a = n(1)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = function () {
        function t(e) {
            a(this, t), this.EmployeeService = e
        }

        return i(t, [{
            key: "ok", value: function () {
                var t = this;
                this.EmployeeService.addEmployee({
                    name: this.name,
                    age: this.age,
                    gender: this.gender
                }).then(function (e) {
                    return t.dialog.onOk(e)
                })
            }
        }]), t
    }();
    e["default"] = s, s.$inject = ["EmployeeService"], t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(3)["default"], a = n(1)["default"], s = n(2)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var r = n(154), l = s(r), o = n(61), c = s(o), f = function () {
        function t() {
            a(this, t), this.template = l["default"], this.restrict = "E", this.replace = !0, this.controller = c["default"], this.controllerAs = "employeeListCtrl"
        }

        return i(t, [{
            key: "link", value: function (t, e, n) {
                t.$watch("employeeListCtrl.currentPage", function (e) {
                    e && t.employeeListCtrl.getEmployeeList(e.index)
                })
            }
        }]), t
    }();
    e["default"] = f, t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(2)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var a = n(63), s = i(a), r = n(62), l = i(r);
    e["default"] = angular.module("modules.employee", []).directive("snEmployeeList", function () {
        return new s["default"]
    }).controller("NewEmployeeDialogController", l["default"]).name, t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(2)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var a = n(91), s = i(a), r = n(53), l = i(r), o = n(76), c = i(o), f = n(64), d = i(f), u = n(60), h = i(u);
    e["default"] = angular.module("modules", [s["default"], l["default"], c["default"], d["default"], h["default"]]).name, t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(3)["default"], a = n(1)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = function () {
        function t(e) {
            a(this, t), this.EntityService = e
        }

        return i(t, [{
            key: "init", value: function () {
                var t = this;
                this.EntityService.getEntityList().then(function (e) {
                    return t.entityList = e
                })
            }
        }, {
            key: "selectEntity", value: function (t) {
                this.selectedEntity = t
            }
        }]), t
    }();
    e["default"] = s, s.$inject = ["EntityService"], t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(3)["default"], a = n(1)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = function () {
        function t(e) {
            a(this, t), this.EntityService = e
        }

        return i(t, [{
            key: "init", value: function () {
            }
        }]), t
    }();
    e["default"] = s, s.$inject = ["EntityService"], t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(3)["default"], a = n(1)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = function () {
        function t(e) {
            a(this, t), this.EntityService = e
        }

        return i(t, [{
            key: "init", value: function () {
            }
        }, {
            key: "getPropertiesByEntity", value: function (t) {
                var e = this;
                this.EntityService.getPropertiesByEntity(t).then(function (t) {
                    return e.propertyList = t
                })
            }
        }]), t
    }();
    e["default"] = s, s.$inject = ["EntityService"], t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(3)["default"], a = n(1)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = function () {
        function t(e) {
            a(this, t), this.EntityService = e
        }

        return i(t, [{
            key: "init", value: function () {
            }
        }, {
            key: "getRulesByEntity", value: function (t) {
                var e = this;
                this.EntityService.getRulesByEntity(t).then(function (t) {
                    return e.ruleList = t
                })
            }
        }]), t
    }();
    e["default"] = s, s.$inject = ["EntityService"], t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(3)["default"], a = n(1)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = function () {
        function t(e) {
            a(this, t), this.FlowService = e
        }

        return i(t, [{
            key: "init", value: function () {
                var t = this;
                this.FlowService.getFlow().then(function (e) {
                    return t.flow = e
                })
            }
        }, {
            key: "start", value: function () {
                this.flow.execute()
            }
        }, {
            key: "step", value: function () {
                this.flow.executeStep()
            }
        }]), t
    }();
    e["default"] = s, s.$inject = ["FlowService"], t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(1)["default"], a = n(2)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = n(156), r = a(s), l = n(66), o = a(l), c = function f() {
        i(this, f), this.template = r["default"], this.restrict = "E", this.replace = !0, this.controller = o["default"], this.controllerAs = "entityListCtrl", this.scope = {selectedEntity: "="}, this.bindToController = !0
    };
    e["default"] = c, t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(1)["default"], a = n(2)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = n(157), r = a(s), l = n(67), o = a(l), c = function f() {
        i(this, f), this.template = r["default"], this.restrict = "E", this.replace = !0, this.controller = o["default"], this.controllerAs = "entityManageCtrl"
    };
    e["default"] = c, t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(3)["default"], a = n(1)["default"], s = n(2)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var r = n(158), l = s(r), o = n(68), c = s(o), f = function () {
        function t() {
            a(this, t), this.template = l["default"], this.restrict = "E", this.replace = !0, this.controller = c["default"], this.controllerAs = "entityPropertyListCtrl", this.scope = {selectedEntity: "="}, this.bindToController = !0
        }

        return i(t, [{
            key: "link", value: function (t, e, n) {
                t.$watch("entityPropertyListCtrl.selectedEntity", function (e) {
                    e && t.entityPropertyListCtrl.getPropertiesByEntity(e)
                })
            }
        }]), t
    }();
    e["default"] = f, t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(3)["default"], a = n(1)["default"], s = n(2)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var r = n(159), l = s(r), o = n(69), c = s(o), f = function () {
        function t() {
            a(this, t), this.template = l["default"], this.restrict = "E", this.replace = !0, this.controller = c["default"], this.controllerAs = "entityRuleListCtrl", this.scope = {selectedEntity: "="}, this.bindToController = !0
        }

        return i(t, [{
            key: "link", value: function (t, e, n) {
                t.$watch("entityRuleListCtrl.selectedEntity", function (e) {
                    e && t.entityRuleListCtrl.getRulesByEntity(e)
                })
            }
        }]), t
    }();
    e["default"] = f, t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(1)["default"], a = n(2)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = n(160), r = a(s), l = n(70), o = a(l), c = function f() {
        i(this, f), this.template = r["default"], this.restrict = "E", this.replace = !0, this.controller = o["default"], this.controllerAs = "flowCtrl"
    };
    e["default"] = c, t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(2)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var a = n(72), s = i(a), r = n(71), l = i(r), o = n(73), c = i(o), f = n(74), d = i(f), u = n(75), h = i(u);
    e["default"] = angular.module("modules.platform", []).directive("snEntityManage", function () {
        return new s["default"]
    }).directive("snEntityList", function () {
        return new l["default"]
    }).directive("snEntityPropertyList", function () {
        return new c["default"]
    }).directive("snEntityRuleList", function () {
        return new d["default"]
    }).directive("snFlow", function () {
        return new h["default"]
    }).name, t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(3)["default"], a = n(1)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = function () {
        function t(e) {
            a(this, t), this.tab = "activity"
        }

        return i(t, [{
            key: "init", value: function () {
            }
        }]), t
    }();
    e["default"] = s, s.$inject = ["PortalService"], t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(3)["default"], a = n(1)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = function () {
        function t(e) {
            a(this, t), this.notificationList = [], this.PortalService = e, this.notificationClasses = ["message", "twitter", "envelope", "tasks", "upload"]
        }

        return i(t, [{
            key: "init", value: function () {
                var t = this;
                this.PortalService.getNotificationList().subscribe(function (e) {
                    return t.notificationList.push(e)
                })
            }
        }, {
            key: "alertClass", value: function (t) {
                return "fa-" + t
            }
        }]), t
    }();
    e["default"] = s, s.$inject = ["PortalService"], t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(3)["default"], a = n(1)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = function () {
        function t(e, n) {
            a(this, t), this.menuList = [], this.menuTree = [], this.menuMap = {}, this.PortalService = e, this.$state = n
        }

        return i(t, [{
            key: "init", value: function () {
                var t = this;
                this.PortalService.getMenuList().subscribe(function (e) {
                    if (t.menuMap[e.code] = e, e.parent) {
                        var n = t.menuMap[e.parent];
                        n.children || (n.children = []), n.children.push(e), e.parent = n
                    } else t.menuTree.push(e);
                    t.menuList.push(e)
                })
            }
        }, {
            key: "menuClick", value: function (t, e) {
                this.menuList.forEach(function (e) {
                    e == t ? t.$expanded = !t.$expanded : e != t.parent && delete e.$expanded
                }), e.stopPropagation()
            }
        }, {
            key: "selectMenu", value: function (t) {
                this.isParentSelected(t) ? t.$expanded = !t.$expanded : (this.selectedMenu && delete this.selectedMenu.$expanded, this.selectedMenu = t, this.selectedMenu.$expanded = !0), t.state && this.$state.go(t.state)
            }
        }, {
            key: "isParentSelected", value: function (t) {
                return this.selectedMenu ? 0 == t.code.indexOf(this.selectedMenu.code) : !1
            }
        }, {
            key: "isMenuSelected", value: function (t) {
                return this.selectedMenu ? 0 == this.selectedMenu.code.indexOf(t.code) ? !0 : void 0 : !1
            }
        }, {
            key: "locateMenu", value: function (t) {
                var e = this;
                if (this.menuList.forEach(function (n) {
                        delete n.$expanded, n.state == t.name && (e.selectedMenu = n)
                    }), this.selectedMenu)for (var n = this.selectedMenu; n;)n.$expanded = !0, n = n.parentMenu
            }
        }]), t
    }();
    e["default"] = s, s.$inject = ["PortalService", "$state"], t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(3)["default"], a = n(1)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = function () {
        function t() {
            a(this, t)
        }

        return i(t, [{
            key: "init", value: function () {
            }
        }]), t
    }();
    e["default"] = s, t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(3)["default"], a = n(1)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = function () {
        function t(e) {
            a(this, t), this.taskList = [], this.PortalService = e, this.taskClasses = ["primary", "success", "warning", "danger"]
        }

        return i(t, [{
            key: "init", value: function () {
                var t = this;
                this.PortalService.getTaskList().subscribe(function (e) {
                    return t.taskList.push(e)
                })
            }
        }, {
            key: "taskClass", value: function (t) {
                return "progress-bar-" + this.taskClasses[t % this.taskClasses.length]
            }
        }]), t
    }();
    e["default"] = s, s.$inject = ["PortalService"], t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(3)["default"], a = n(1)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = function () {
        function t(e, n) {
            a(this, t), this.rootScope = e, this.portalService = n
        }

        return i(t, [{
            key: "init", value: function () {
                this.rootScope.config = this.portalService.config
            }
        }, {
            key: "toggleSideNav", value: function () {
                this.rootScope.config.showSideNav = !this.rootScope.config.showSideNav
            }
        }, {
            key: "toggleControlNav", value: function () {
                this.rootScope.config.showControlNav = !this.rootScope.config.showControlNav
            }
        }]), t
    }();
    e["default"] = s, s.$inject = ["$rootScope", "PortalService"], t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(1)["default"], a = n(2)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = n(161), r = a(s), l = n(77), o = a(l), c = function f() {
        i(this, f), this.template = r["default"], this.restrict = "E", this.controller = o["default"], this.controllerAs = "controlNavCtrl"
    };
    e["default"] = c, t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(1)["default"], a = n(2)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = n(162), r = a(s), l = n(21), o = a(l), c = function f() {
        i(this, f), this.template = r["default"], this.restrict = "E", this.replace = !0, this.controller = o["default"], this.controllerAs = "listCtrl", this.scope = {}
    };
    e["default"] = c, t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(1)["default"], a = n(2)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = n(163), r = a(s), l = n(21), o = a(l), c = function f() {
        i(this, f), this.template = r["default"], this.restrict = "E", this.replace = !0, this.controller = o["default"], this.controllerAs = "messageListCtrl"
    };
    e["default"] = c, t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(1)["default"], a = n(2)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = n(164), r = a(s), l = n(78), o = a(l), c = function f() {
        i(this, f), this.template = r["default"], this.restrict = "E", this.replace = !0, this.controller = o["default"], this.controllerAs = "listCtrl", this.scope = {}
    };
    e["default"] = c, t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(1)["default"], a = n(2)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = n(165), r = a(s), l = n(79), o = a(l), c = function f() {
        i(this, f), this.template = r["default"], this.restrict = "E", this.controller = o["default"], this.controllerAs = "menuCtrl"
    };
    e["default"] = c, t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(1)["default"], a = n(2)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = n(166), r = a(s), l = n(80), o = a(l), c = function f() {
        i(this, f), this.template = r["default"], this.restrict = "E", this.controller = o["default"], this.controllerAs = "sideNavCtrl"
    };
    e["default"] = c, t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(1)["default"], a = n(2)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = n(167), r = a(s), l = n(81), o = a(l), c = function f() {
        i(this, f), this.template = r["default"], this.restrict = "E", this.replace = !0, this.controller = o["default"], this.controllerAs = "listCtrl", this.scope = {}
    };
    e["default"] = c, t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(1)["default"], a = n(2)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = n(168), r = a(s), l = n(82), o = a(l), c = function f() {
        i(this, f), this.template = r["default"], this.restrict = "E", this.controller = o["default"], this.controllerAs = "navCtrl"
    };
    e["default"] = c, t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(2)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var a = n(90), s = i(a), r = n(84), l = i(r), o = n(89), c = i(o), f = n(86), d = i(f), u = n(88), h = i(u), p = n(87), v = i(p), g = n(83), y = i(g), m = n(85), b = i(m);
    e["default"] = angular.module("modules.portal", []).directive("snTopNav", function () {
        return new s["default"]
    }).directive("snMessageDropdown", function () {
        return new l["default"]
    }).directive("snTaskDropdown", function () {
        return new c["default"]
    }).directive("snNotificationDropdown", function () {
        return new d["default"]
    }).directive("snSideNav", function () {
        return new h["default"]
    }).directive("snSideMenu", function () {
        return new v["default"]
    }).directive("snControlNav", function () {
        return new y["default"]
    }).directive("snMessageList", function () {
        return new b["default"]
    }).name, t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(3)["default"], a = n(1)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = function () {
        function t(e, n) {
            a(this, t), this.$http = e, this.$q = n, this.chatList = []
        }

        return i(t, [{
            key: "getChatList", value: function () {
                this.chatList = [{
                    from: "Tom",
                    content: "asfsdfds fsdfdsfds",
                    date: new Date(2015, 7, 1)
                }, {
                    from: "Jerry",
                    content: "asfsdfds fsdfdsfds",
                    date: new Date((new Date).valueOf() - 36e5)
                }, {from: "Donald", content: "asfsdfds fsdfdsfds", date: new Date((new Date).valueOf() - 1500)}, {
                    from: "Droppy", content: "asfsdfds fsdfdsfds",
                    date: new Date((new Date).valueOf() - 1500)
                }];
                var t = this.$q.defer();
                return t.resolve(this.chatList), t.promise
            }
        }, {
            key: "sendMessage", value: function (t) {
                this.chatList.push({from: "Sun Wukong", content: t, date: new Date})
            }
        }]), t
    }();
    e["default"] = s, s.$inject = ["$http", "$q"], t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(3)["default"], a = n(1)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = function () {
        function t(e, n) {
            a(this, t), this.$http = e, this.$q = n, this.messageList = [], this.taskList = [], this.alertList = [], this.menuList = []
        }

        return i(t, [{
            key: "getMessageList", value: function () {
                this.messageList = [{
                    title: "Message 1",
                    content: "asfsdfds fsdfdsfds",
                    date: new Date(2015, 7, 1)
                }, {
                    title: "Message 2",
                    content: "asfsdfds fsdfdsfds",
                    date: new Date((new Date).valueOf() - 36e5)
                }, {title: "Message 3", content: "asfsdfds fsdfdsfds", date: new Date((new Date).valueOf() - 1500)}];
                var t = this.$q.defer();
                return t.resolve(this.messageList), t.promise
            }
        }, {
            key: "getTaskList", value: function () {
                this.taskList = [{name: "Task 1", percentage: 40}, {name: "Task 2", percentage: 100}, {
                    name: "Task 3",
                    percentage: 60
                }, {name: "Task 4", percentage: 20}, {name: "Task 5", percentage: 80}];
                var t = this.$q.defer();
                return t.resolve(this.taskList), t.promise
            }
        }, {
            key: "getAlertList", value: function () {
                this.alertList = [{
                    type: "comment",
                    content: "asfsdfds fsdfdsfds",
                    date: new Date(2015, 7, 1)
                }, {
                    type: "twitter",
                    content: "asfsdfds fsdfdsfds",
                    date: new Date((new Date).valueOf() - 36e5)
                }, {
                    type: "envelope",
                    content: "asfsdfds fsdfdsfds",
                    date: new Date((new Date).valueOf() - 15e3)
                }, {
                    type: "tasks",
                    content: "asfsdfds fsdfdsfds",
                    date: new Date((new Date).valueOf() - 15e4)
                }, {type: "upload", content: "asfsdfds fsdfdsfds", date: new Date((new Date).valueOf() - 5e5)}];
                var t = this.$q.defer();
                return t.resolve(this.alertList), t.promise
            }
        }, {
            key: "getMenuList", value: function () {
                this.menuList = [{code: "0", name: "Dashboard", icon: "fa-dashboard", state: "Dashboard"}, {
                    code: "1",
                    name: "Charts",
                    icon: "fa-bar-chart-o"
                }, {code: "2", name: "Messages", icon: "fa-table", state: "Messages"}, {
                    code: "3",
                    name: "Forms",
                    icon: "fa-edit"
                }, {code: "4", name: "UI Elements", icon: "fa-wrench"}, {
                    code: "5",
                    name: "Multi-Level Dropdown",
                    icon: "fa-sitemap"
                }, {code: "6", name: "Sample Pages", icon: "fa-files-o"}, {
                    code: "10",
                    parent: "1",
                    name: "Flot Charts"
                }, {code: "11", parent: "1", name: "Morris.js Charts"}, {
                    code: "40",
                    parent: "4",
                    name: "Panels and Wells"
                }, {code: "41", parent: "4", name: "Buttons"}, {
                    code: "42",
                    parent: "4",
                    name: "Notifications"
                }, {code: "43", parent: "4", name: "Typography"}, {code: "44", parent: "4", name: "Icons"}, {
                    code: "45",
                    parent: "4",
                    name: "Grid"
                }, {code: "50", parent: "5", name: "Second Level Item"}, {
                    code: "51",
                    parent: "5",
                    name: "Second Level Item"
                }, {code: "52", parent: "5", name: "Third Level"}, {
                    code: "60",
                    parent: "6",
                    name: "Blank Page"
                }, {code: "61", parent: "6", name: "Login Page"}, {
                    code: "520",
                    parent: "52",
                    name: "Third Level Item"
                }, {code: "521", parent: "52", name: "Third Level Item"}, {
                    code: "522",
                    parent: "52",
                    name: "Third Level Item"
                }, {code: "523", parent: "52", name: "Third Level Item"}];
                var t = this.$q.defer();
                return t.resolve(this.menuList), t.promise
            }
        }]), t
    }();
    e["default"] = s, s.$inject = ["$http", "$q"], t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(2)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var a = n(93), s = i(a), r = n(92), l = i(r), o = n(96), c = i(o), f = n(95), d = i(f);
    e["default"] = angular.module("services.dashboard", []).service("DashboardService", s["default"]).service("ChatService", l["default"]).service("TimelineService", c["default"]).service("NotificationService", d["default"]).name, t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(3)["default"], a = n(1)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = function () {
        function t(e, n) {
            a(this, t), this.$http = e, this.$q = n, this.notifications = []
        }

        return i(t, [{
            key: "getNotifications", value: function () {
                this.notifications = [{
                    type: "comment",
                    content: "asfsdfds fsdfdsfds",
                    date: new Date(2015, 7, 1)
                }, {
                    type: "twitter",
                    content: "asfsdfds fsdfdsfds",
                    date: new Date((new Date).valueOf() - 36e5)
                }, {
                    type: "envelope",
                    content: "asfsdfds fsdfdsfds",
                    date: new Date((new Date).valueOf() - 15e3)
                }, {
                    type: "tasks",
                    content: "asfsdfds fsdfdsfds",
                    date: new Date((new Date).valueOf() - 15e4)
                }, {type: "upload", content: "asfsdfds fsdfdsfds", date: new Date((new Date).valueOf() - 5e5)}];
                var t = this.$q.defer();
                return t.resolve(this.notifications), t.promise
            }
        }]), t
    }();
    e["default"] = s, s.$inject = ["$http", "$q"], t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(3)["default"], a = n(1)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = function () {
        function t(e, n) {
            a(this, t), this.$http = e, this.$q = n, this.timeline = []
        }

        return i(t, [{
            key: "getTimeline", value: function () {
                this.timeline = [{title: "Tom", content: "asfsdfds fsdfdsfds", date: new Date(2015, 7, 1)}, {
                    title: "Jerry",
                    content: "asfsdfds fsdfdsfds",
                    date: new Date((new Date).valueOf() - 36e5)
                }, {
                    title: "Donald",
                    content: "asfsdfds fsdfdsfds",
                    date: new Date((new Date).valueOf() - 1500)
                }, {title: "Droppy", content: "asfsdfds fsdfdsfds", date: new Date((new Date).valueOf() - 1500)}];
                var t = this.$q.defer();
                return t.resolve(this.timeline), t.promise
            }
        }]), t
    }();
    e["default"] = s, s.$inject = ["$http", "$q"], t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(3)["default"], a = n(1)["default"], s = n(106)["default"], r = n(22)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var l = function () {
        function t(e, n) {
            a(this, t), this.$http = e, this.$q = n, this.employeeList = s(Array(188), function (t, e) {
                return r({
                    name: "Employee " + e,
                    age: 18 + Math.floor(20 * Math.random()),
                    gender: Math.round(Math.random())
                })
            })
        }

        return i(t, [{
            key: "getEmployeeList", value: function (t, e) {
                var n = this.employeeList.slice(t * e, t * e + e), i = this.$q.defer();
                return i.resolve({total: this.employeeList.length, employeeList: n}), i.promise
            }
        }, {
            key: "addEmployee", value: function (t) {
                this.employeeList.push(t);
                var e = this.$q.defer();
                return e.resolve(t), e.promise
            }
        }, {
            key: "deleteEmployee", value: function (t) {
                this.employeeList = this.employeeList.filter(function (e) {
                    return e == t
                });
                var e = this.$q.defer();
                return e.resolve(), e.promise
            }
        }]), t
    }();
    e["default"] = l, l.$inject = ["$http", "$q"], t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(2)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var a = n(97), s = i(a);
    e["default"] = angular.module("services.employee", []).service("EmployeeService", s["default"]).name, t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(2)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var a = n(103), s = i(a), r = n(94), l = i(r), o = n(102), c = i(o), f = n(98), d = i(f);
    e["default"] = angular.module("services", [s["default"], l["default"], c["default"], d["default"]]).name, t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(3)["default"], a = n(1)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = function () {
        function t(e, n) {
            a(this, t), this.$http = e, this.$q = n, this.entityList = [{name: "User"}, {name: "Order"}]
        }

        return i(t, [{
            key: "getEntityList", value: function () {
                var t = this.$q.defer();
                return t.resolve(this.entityList), t.promise
            }
        }, {
            key: "addEntity", value: function (t) {
                this.entityList.push(t);
                var e = this.$q.defer();
                return e.resolve(t), e.promise
            }
        }, {
            key: "deleteEntity", value: function (t) {
                this.entityList = this.entityList.filter(function (e) {
                    return e != t
                });
                var e = this.$q.defer();
                return e.resolve(), e.promise
            }
        }, {
            key: "getPropertiesByEntity", value: function (t) {
                var e = [{name: "id", type: "uuid", required: !0, isPrimaryKey: !0}, {
                    name: "name",
                    type: "string",
                    required: !0,
                    isPrimaryKey: !1
                }, {name: "gender", type: "int", required: !0, isPrimaryKey: !1}, {
                    name: "age",
                    type: "int",
                    required: !0,
                    isPrimaryKey: !1
                }], n = this.$q.defer();
                return n.resolve(e), n.promise
            }
        }, {
            key: "addProperty", value: function (t, e) {
            }
        }, {
            key: "modifyProperty", value: function (t) {
            }
        }, {
            key: "deleteProperty", value: function (t) {
            }
        }, {
            key: "getRulesByEntity", value: function (t) {
                var e = [{
                    name: "getFullName",
                    returnType: "string",
                    params: [{name: "firstName", type: "string"}, {name: "lastName", type: "string"}],
                    body: "return firstName + lastName;"
                }, {
                    name: "ageIsValid",
                    returnType: "boolean",
                    params: [],
                    body: "return this.age > 0"
                }], n = this.$q.defer();
                return n.resolve(e), n.promise
            }
        }, {
            key: "addRule", value: function (t, e) {
            }
        }, {
            key: "modifyRule", value: function (t) {
            }
        }, {
            key: "deleteRule", value: function (t) {
            }
        }]), t
    }();
    e["default"] = s, s.$inject = ["$http", "$q"], t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    function i(t) {
        var e = new d;
        return e.load(t), e
    }

    var a = n(3)["default"], s = n(1)["default"], r = n(111)["default"], l = n(112)["default"], o = n(107)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var c = function () {
        function t(e, n) {
            s(this, t), this.$http = e, this.$q = n, this.flowList = []
        }

        return a(t, [{
            key: "getFlowList", value: function () {
                var t = this.$q.defer();
                return t.resolve(this.flowList), t.promise
            }
        }, {
            key: "getFlow", value: function (t) {
                var e = this.$q.defer(), n = i(t);
                return e.resolve(n), e.promise
            }
        }, {
            key: "getAnotherFlow", value: function () {
                var t = this.$q.defer(), e = i({
                    name: "Euclid",
                    activities: [{id: "a00", type: "start", action: "this.a=72; this.b=45;"}, {
                        id: "a01",
                        type: "normal",
                        action: "var temp=this.a%this.b; this.a=this.b; this.b=temp;"
                    }, {id: "a02", type: "finish", action: "alert(this.b);"}],
                    transitions: [{id: "b00", from: "a00", to: "a01", condition: "return true"}, {
                        id: "b01",
                        from: "a01",
                        to: "a01",
                        condition: "return this.a%this.b!=0"
                    }, {id: "b02", from: "a01", to: "a02", condition: "return this.a%this.b==0"}]
                });
                return t.resolve(e), t.promise
            }
        }]), t
    }();
    e["default"] = c, c.$inject = ["$http", "$q"];
    var f = function () {
        function t() {
            s(this, t), this.context = {}, this.activityMap = new o, this.transitionMap = new o, this.finished = !1
        }

        return a(t, [{
            key: "execute", value: function () {
                for (; !this.finished;)this.executeStep()
            }
        }, {
            key: "executeStep", value: function () {
                if (!this.finished) {
                    this.currentActivity.execute(), this.currentActivity == this.tail && (this.finished = !0);
                    for (var t = 0; t < this.currentActivity.out.length; t++) {
                        var e = this.currentActivity.out[t];
                        if (e.evaluate()) {
                            this.currentActivity = e.to;
                            break
                        }
                    }
                }
            }
        }]), t
    }(), d = function (t) {
        function e() {
            s(this, e), r(Object.getPrototypeOf(e.prototype), "constructor", this).call(this)
        }

        return l(e, t), a(e, [{
            key: "load", value: function (t) {
                var e = this;
                t.activities.forEach(function (t) {
                    return e.addActivity(t)
                }), t.transitions.forEach(function (t) {
                    return e.addTransition(t)
                }), this.currentActivity = this.head
            }
        }, {
            key: "addActivity", value: function (t) {
                var e = new u(t);
                return e.context = this.context, this.activityMap.set(t.id, e), "start" == t.type && (this.head = e), "finish" == t.type && (this.tail = e), e
            }
        }, {
            key: "addTransition", value: function (t) {
                var e = this.activityMap.get(t.from), n = this.activityMap.get(t.to), i = new h(e, n, t);
                return i.context = this.context, this.transitionMap.set(t.id, i), e.out.push(i), n["in"].push(i), i
            }
        }]), e
    }(f), u = (function (t) {
        function e() {
            s(this, e), r(Object.getPrototypeOf(e.prototype), "constructor", this).apply(this, arguments)
        }

        return l(e, t), e
    }(f), function () {
        function t(e) {
            s(this, t), this["in"] = [], this.out = [], this.action = new Function(e.action)
        }

        return a(t, [{
            key: "execute", value: function () {
                this.action.call(this.context)
            }
        }]), t
    }()), h = function () {
        function t(e, n, i) {
            s(this, t), this.from = e, this.to = n, this.condition = new Function(i.condition)
        }

        return a(t, [{
            key: "evaluate", value: function () {
                return this.condition.call(this.context)
            }
        }]), t
    }();
    t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(2)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var a = n(100), s = i(a), r = n(101), l = i(r);
    e["default"] = angular.module("services.entity", []).service("EntityService", s["default"]).service("FlowService", l["default"]).name, t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(2)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var a = n(104), s = i(a), r = n(105), l = i(r);
    e["default"] = angular.module("services.portal", []).service("PortalService", s["default"]).service("RouterService", l["default"]).name, t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(3)["default"], a = n(1)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = function () {
        function t(e, n) {
            a(this, t), this.$http = e, this.$q = n, this.config = {}
        }

        return i(t, [{
            key: "getMessageList", value: function () {
                var t = Rx.Observable.from([{
                    title: "Message 1",
                    content: "asfsdfds fsdfdsfds",
                    date: new Date(2015, 7, 1)
                }, {
                    title: "Message 2",
                    content: "asfsdfds fsdfdsfds",
                    date: new Date((new Date).valueOf() - 36e5)
                }, {title: "Message 3", content: "asfsdfds fsdfdsfds", date: new Date((new Date).valueOf() - 1500)}]);
                return t
            }
        }, {
            key: "getTaskList", value: function () {
                var t = [{name: "Task 1", percentage: 40}, {name: "Task 2", percentage: 100}, {
                    name: "Task 3",
                    percentage: 60
                }, {name: "Task 4", percentage: 20}, {name: "Task 5", percentage: 80}], e = this.$q.defer();
                return e.resolve(t), Rx.Observable.fromPromise(e.promise)
            }
        }, {
            key: "getNotificationList", value: function () {
                this.notificationList = [{
                    type: "comment",
                    content: "asfsdfds fsdfdsfds",
                    date: new Date(2015, 7, 1)
                }, {
                    type: "twitter",
                    content: "asfsdfds fsdfdsfds",
                    date: new Date((new Date).valueOf() - 36e5)
                }, {
                    type: "envelope",
                    content: "asfsdfds fsdfdsfds",
                    date: new Date((new Date).valueOf() - 15e3)
                }, {
                    type: "tasks",
                    content: "asfsdfds fsdfdsfds",
                    date: new Date((new Date).valueOf() - 15e4)
                }, {type: "upload", content: "asfsdfds fsdfdsfds", date: new Date((new Date).valueOf() - 5e5)}];
                var t = this.$q.defer();
                return t.resolve(this.notificationList), Rx.Observable.fromPromise(t.promise)
            }
        }, {
            key: "getMenuList", value: function () {
                var t = [{code: "0", name: "Dashboard", icon: "fa-dashboard", state: "Dashboard"}, {
                    code: "1",
                    name: "Platform",
                    icon: "fa-bar-chart-o",
                    state: "Platform"
                }, {code: "2", name: "Messages", icon: "fa-table", state: "Messages"}, {
                    code: "3",
                    name: "Employees",
                    icon: "fa-user",
                    state: "Employees"
                }, {code: "4", name: "UI Elements", icon: "fa-wrench", state: "UI Elements"}, {
                    code: "5",
                    name: "Demos",
                    icon: "fa-sitemap",
                    state: "Demos"
                }, {code: "6", name: "Sample Pages", icon: "fa-files-o", state: "Sample Pages"}, {
                    code: "10",
                    parent: "1",
                    name: "Entity Management",
                    state: "Entity"
                }, {code: "11", parent: "1", name: "Rule Management"}, {
                    code: "12",
                    parent: "1",
                    name: "Workflow Management",
                    state: "Flow"
                }, {code: "13", parent: "1", name: "UI Builder"}, {
                    code: "40",
                    parent: "4",
                    name: "Panels and Wells"
                }, {code: "41", parent: "4", name: "Buttons"}, {
                    code: "42",
                    parent: "4",
                    name: "Notifications"
                }, {code: "43", parent: "4", name: "Typography"}, {code: "44", parent: "4", name: "Icons"}, {
                    code: "45",
                    parent: "4",
                    name: "Grid"
                }, {code: "50", parent: "5", name: "Demo1"}, {code: "51", parent: "5", name: "Demo2"}, {
                    code: "52",
                    parent: "5",
                    name: "Workflow Demo"
                }, {code: "60", parent: "6", name: "Blank Page"}, {
                    code: "61",
                    parent: "6",
                    name: "Login Page"
                }, {code: "520", parent: "52", name: "Euclid", state: "Euclid"}, {
                    code: "521",
                    parent: "52",
                    name: "Choice",
                    state: "Choice"
                }, {code: "522", parent: "52", name: "Third Level Item"}, {
                    code: "523",
                    parent: "52",
                    name: "Third Level Item"
                }];
                return Rx.Observable.fromArray(t)
            }
        }]), t
    }();
    e["default"] = s, s.$inject = ["$http", "$q"], t.exports = e["default"]
}, function (t, e, n) {
    "use strict";
    var i = n(3)["default"], a = n(1)["default"];
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = function () {
        function t(e) {
            a(this, t), this.$state = e
        }

        return i(t, [{
            key: "go", value: function (t) {
                this.$state.go(t)
            }
        }]), t
    }();
    e["default"] = s, s.$inject = ["$state"], t.exports = e["default"]
}, function (t, e, n) {
    t.exports = {"default": n(113), __esModule: !0}
}, function (t, e, n) {
    t.exports = {"default": n(114), __esModule: !0}
}, function (t, e, n) {
    t.exports = {"default": n(116), __esModule: !0}
}, function (t, e, n) {
    t.exports = {"default": n(117), __esModule: !0}
}, function (t, e, n) {
    t.exports = {"default": n(118), __esModule: !0}
}, function (t, e, n) {
    "use strict";
    var i = n(109)["default"];
    e["default"] = function (t, e, n) {
        for (var a = !0; a;) {
            var s = t, r = e, l = n;
            o = f = c = void 0, a = !1, null === s && (s = Function.prototype);
            var o = i(s, r);
            if (void 0 !== o) {
                if ("value" in o)return o.value;
                var c = o.get;
                return void 0 === c ? void 0 : c.call(l)
            }
            var f = Object.getPrototypeOf(s);
            if (null === f)return void 0;
            t = f, e = r, n = l, a = !0
        }
    }, e.__esModule = !0
}, function (t, e, n) {
    "use strict";
    var i = n(22)["default"], a = n(110)["default"];
    e["default"] = function (t, e) {
        if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = i(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (a ? a(t, e) : t.__proto__ = e)
    }, e.__esModule = !0
}, function (t, e, n) {
    n(37), n(133), t.exports = n(6).Array.from
}, function (t, e, n) {
    n(138), n(37), n(140), n(135), n(139), t.exports = n(6).Map
}, function (t, e, n) {
    var i = n(4);
    t.exports = function (t, e) {
        return i.create(t, e)
    }
}, function (t, e, n) {
    var i = n(4);
    t.exports = function (t, e, n) {
        return i.setDesc(t, e, n)
    }
}, function (t, e, n) {
    var i = n(4);
    n(137), t.exports = function (t, e) {
        return i.getDesc(t, e)
    }
}, function (t, e, n) {
    n(136), t.exports = n(6).Object.setPrototypeOf
}, function (t, e) {
    t.exports = function (t) {
        if ("function" != typeof t)throw TypeError(t + " is not a function!");
        return t
    }
}, function (t, e, n) {
    "use strict";
    function i(t, e) {
        if (!v(t))return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
        if (!p(t, h)) {
            if (!g(t))return "F";
            if (!e)return "E";
            r(t, h, ++b)
        }
        return "O" + t[h]
    }

    function a(t, e) {
        var n, a = i(e);
        if ("F" !== a)return t._i[a];
        for (n = t._f; n; n = n.n)if (n.k == e)return n
    }

    var s = n(4), r = n(8), l = n(11), o = n(130), c = n(32), f = n(16), d = n(17), u = n(28), h = n(35)("id"), p = n(18), v = n(12), g = Object.isExtensible || v, y = n(13), m = y ? "_s" : "size", b = 0;
    t.exports = {
        getConstructor: function (t, e, i, r) {
            var o = t(function (t, n) {
                c(t, o, e), t._i = s.create(null), t._f = void 0, t._l = void 0, t[m] = 0, void 0 != n && d(n, i, t[r], t)
            });
            return n(29)(o.prototype, {
                clear: function () {
                    for (var t = this, e = t._i, n = t._f; n; n = n.n)n.r = !0, n.p && (n.p = n.p.n = void 0), delete e[n.i];
                    t._f = t._l = void 0, t[m] = 0
                }, "delete": function (t) {
                    var e = this, n = a(e, t);
                    if (n) {
                        var i = n.n, s = n.p;
                        delete e._i[n.i], n.r = !0, s && (s.n = i), i && (i.p = s), e._f == n && (e._f = i), e._l == n && (e._l = s), e[m]--
                    }
                    return !!n
                }, forEach: function (t) {
                    for (var e, n = l(t, arguments[1], 3); e = e ? e.n : this._f;)for (n(e.v, e.k, this); e && e.r;)e = e.p
                }, has: function (t) {
                    return !!a(this, t)
                }
            }), y && s.setDesc(o.prototype, "size", {
                get: function () {
                    return f(this[m])
                }
            }), o
        }, def: function (t, e, n) {
            var s, r, l = a(t, e);
            return l ? l.v = n : (t._l = l = {
                i: r = i(e, !0),
                k: e,
                v: n,
                p: s = t._l,
                n: void 0,
                r: !1
            }, t._f || (t._f = l), s && (s.n = l), t[m]++, "F" !== r && (t._i[r] = l)), t
        }, getEntry: a, setStrong: function (t, e, i) {
            n(19)(t, e, function (t, e) {
                this._t = t, this._k = e, this._l = void 0
            }, function () {
                for (var t = this, e = t._k, n = t._l; n && n.r;)n = n.p;
                return t._t && (t._l = n = n ? n.n : t._t._f) ? "keys" == e ? u(0, n.k) : "values" == e ? u(0, n.v) : u(0, [n.k, n.v]) : (t._t = void 0, u(1))
            }, i ? "entries" : "values", !i, !0), o(t), o(n(6)[e])
        }
    }
}, function (t, e, n) {
    var i = n(17), a = n(23);
    t.exports = function (t) {
        return function () {
            if (a(this) != t)throw TypeError(t + "#toJSON isn't generic");
            var e = [];
            return i(this, !1, e.push, e), e
        }
    }
}, function (t, e, n) {
    "use strict";
    var i = n(4), a = n(7), s = n(8), r = n(26), l = n(17), o = n(32);
    t.exports = function (t, e, c, f, d, u) {
        var h = n(9)[t], p = h, v = d ? "set" : "add", g = p && p.prototype, y = {};
        return n(13) && "function" == typeof p && (u || !r && g.forEach && g.entries) ? (p = e(function (e, n) {
            o(e, p, t), e._c = new h, void 0 != n && l(n, d, e[v], e)
        }), i.each.call("add,clear,delete,forEach,get,has,set,keys,values,entries".split(","), function (t) {
            var e = "add" == t || "set" == t;
            t in g && (!u || "clear" != t) && s(p.prototype, t, function (n, i) {
                var a = this._c[t](0 === n ? 0 : n, i);
                return e ? this : a
            })
        }), "size" in g && i.setDesc(p.prototype, "size", {
            get: function () {
                return this._c.size
            }
        })) : (p = f.getConstructor(e, t, d, v), n(29)(p.prototype, c)), n(20)(p, t), y[t] = p, a(a.G + a.W + a.F, y), u || f.setStrong(p, t, d), p
    }
}, function (t, e, n) {
    var i = n(24), a = Object;
    t.exports = 0 in a("z") ? a : function (t) {
        return "String" == i(t) ? t.split("") : a(t)
    }
}, function (t, e, n) {
    function i(t) {
        try {
            return r(t)
        } catch (e) {
            return l.slice()
        }
    }

    var a = {}.toString, s = n(14), r = n(4).getNames, l = "object" == typeof window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    t.exports.get = function (t) {
        return l && "[object Window]" == a.call(t) ? i(t) : r(s(t))
    }
}, function (t, e, n) {
    "use strict";
    var i = n(4), a = {};
    n(8)(a, n(5)("iterator"), function () {
        return this
    }), t.exports = function (t, e, s) {
        t.prototype = i.create(a, {next: n(30)(1, s)}), n(20)(t, e + " Iterator")
    }
}, function (t, e, n) {
    var i = n(5)("iterator"), a = !1;
    try {
        var s = [7][i]();
        s["return"] = function () {
            a = !0
        }, Array.from(s, function () {
            throw 2
        })
    } catch (r) {
    }
    t.exports = function (t) {
        if (!a)return !1;
        var e = !1;
        try {
            var n = [7], s = n[i]();
            s.next = function () {
                e = !0
            }, n[i] = function () {
                return s
            }, t(n)
        } catch (r) {
        }
        return e
    }
}, function (t, e) {
    t.exports = !0
}, function (t, e, n) {
    function i(t, e) {
        if (r(t), !s(e) && null !== e)throw TypeError(e + ": can't set as prototype!")
    }

    var a = n(4).getDesc, s = n(12), r = n(15);
    t.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, e) {
            try {
                (e = n(11)(Function.call, a(Object.prototype, "__proto__").set, 2))({}, [])
            } catch (s) {
                t = !0
            }
            return function (n, a) {
                return i(n, a), t ? n.__proto__ = a : e(n, a), n
            }
        }() : void 0), check: i
    }
}, function (t, e, n) {
    var i = n(9), a = "__core-js_shared__", s = i[a] || (i[a] = {});
    t.exports = function (t) {
        return s[t] || (s[t] = {})
    }
}, function (t, e, n) {
    var i = n(4), a = n(5)("species");
    t.exports = function (t) {
        !n(13) || a in t || i.setDesc(t, a, {
            configurable: !0, get: function () {
                return this
            }
        })
    }
}, function (t, e, n) {
    var i = n(33), a = n(16);
    t.exports = function (t) {
        return function (e, n) {
            var s, r, l = String(a(e)), o = i(n), c = l.length;
            return 0 > o || o >= c ? t ? "" : void 0 : (s = l.charCodeAt(o), 55296 > s || s > 56319 || o + 1 === c || (r = l.charCodeAt(o + 1)) < 56320 || r > 57343 ? t ? l.charAt(o) : s : t ? l.slice(o, o + 2) : (s - 55296 << 10) + (r - 56320) + 65536)
        }
    }
}, function (t, e) {
    t.exports = function () {
    }
}, function (t, e, n) {
    var i = n(11), a = n(7), s = n(14), r = n(27), l = n(25), o = n(34), c = n(36);
    a(a.S + a.F * !n(126)(function (t) {
            Array.from(t)
        }), "Array", {
        from: function (t) {
            var e, n, a, f, d = s(t, !0), u = "function" == typeof this ? this : Array, h = arguments[1], p = void 0 !== h, v = 0, g = c(d);
            if (p && (h = i(h, arguments[2], 2)), void 0 == g || u == Array && l(g))for (n = new u(e = o(d.length)); e > v; v++)n[v] = p ? h(d[v], v) : d[v]; else for (f = g.call(d), n = new u; !(a = f.next()).done; v++)n[v] = p ? r(f, h, [a.value, v], !0) : a.value;
            return n.length = v, n
        }
    })
}, function (t, e, n) {
    var i = n(132), a = n(28), s = n(10), r = n(14);
    n(19)(Array, "Array", function (t, e) {
        this._t = r(t), this._i = 0, this._k = e
    }, function () {
        var t = this._t, e = this._k, n = this._i++;
        return !t || n >= t.length ? (this._t = void 0, a(1)) : "keys" == e ? a(0, n) : "values" == e ? a(0, t[n]) : a(0, [n, t[n]])
    }, "values"), s.Arguments = s.Array, i("keys"), i("values"), i("entries")
}, function (t, e, n) {
    "use strict";
    var i = n(120);
    n(122)("Map", function (t) {
        return function () {
            return t(this, arguments[0])
        }
    }, {
        get: function (t) {
            var e = i.getEntry(this, t);
            return e && e.v
        }, set: function (t, e) {
            return i.def(this, 0 === t ? 0 : t, e)
        }
    }, i, !0)
}, function (t, e, n) {
    var i = n(7);
    i(i.S, "Object", {setPrototypeOf: n(128).set})
}, function (t, e, n) {
    var i = n(4), a = n(6), s = n(7), r = n(14), l = n(12);
    i.each.call("freeze,seal,preventExtensions,isFrozen,isSealed,isExtensible,getOwnPropertyDescriptor,getPrototypeOf,keys,getOwnPropertyNames".split(","), function (t, e) {
        var i = (a.Object || {})[t] || Object[t], o = 0, c = {};
        c[t] = 0 == e ? function (t) {
            return l(t) ? i(t) : t
        } : 1 == e ? function (t) {
            return l(t) ? i(t) : t
        } : 2 == e ? function (t) {
            return l(t) ? i(t) : t
        } : 3 == e ? function (t) {
            return l(t) ? i(t) : !0
        } : 4 == e ? function (t) {
            return l(t) ? i(t) : !0
        } : 5 == e ? function (t) {
            return l(t) ? i(t) : !1
        } : 6 == e ? function (t, e) {
            return i(r(t), e)
        } : 7 == e ? function (t) {
            return i(r(t, !0))
        } : 8 == e ? function (t) {
            return i(r(t))
        } : n(124).get;
        try {
            i("z")
        } catch (f) {
            o = 1
        }
        s(s.S + s.F * o, "Object", c)
    })
}, function (t, e) {
}, function (t, e, n) {
    var i = n(7);
    i(i.P, "Map", {toJSON: n(121)("Map")})
}, function (t, e, n) {
    n(134);
    var i = n(10);
    i.NodeList = i.HTMLCollection = i.Array
}, function (t, e) {
}, 141, 141, function (t, e) {
    t.exports = '<div class="info-box">\n    <span class="info-box-icon bg-aqua" ng-class="\'bg-\' + data.theme">\n                <i class="ion ion-ios-gear-outline" ng-class="data.icon"></i>\n                </span>\n\n    <div class="info-box-content">\n        <span class="info-box-text">CPU Traffic</span>\n        <span class="info-box-number">{{data.count}}<small>%</small></span>\n    </div>\n    <!-- /.info-box-content -->\n</div>\n<!-- /.info-box -->'
}, function (t, e) {
    t.exports = '<div class="box box-default">\n    <div class="box-header with-border">\n        <h3 class="box-title">Area Chart Example</h3>\n\n        <div class="box-tools pull-right">\n            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>\n            </button>\n            <div class="btn-group" sn-dropdown>\n                <button type="button" class="btn btn-box-tool dropdown-toggle" data-toggle="dropdown">\n                    <i class="fa fa-wrench"></i></button>\n                <ul class="dropdown-menu" role="menu">\n                    <li><a href="#">Action</a></li>\n                    <li><a href="#">Another action</a></li>\n                    <li><a href="#">Something else here</a></li>\n                    <li class="divider"></li>\n                    <li><a href="#">Separated link</a></li>\n                </ul>\n            </div>\n            <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>\n        </div>\n    </div>\n\n    <!-- /.box-heading -->\n    <div class="box-body">\n        <div id="morris-area-chart" style="position: relative; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">\n            <svg height="477" version="1.1" width="700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\n            style="overflow: hidden; position: relative;">\n                <desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Created with Raphaël 2.1.2</desc>\n                <defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></defs>\n                <text x="49.0625" y="445" text-anchor="end" font-family="sans-serif" font-size="12px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 12px; font-weight: normal;"\n                font-weight="normal">\n                    <tspan dy="4.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">0</tspan>\n                </text>\n                <path fill="none" stroke="#aaaaaa" d="M61.5625,445H675" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>\n                <text x="49.0625" y="340" text-anchor="end" font-family="sans-serif" font-size="12px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 12px; font-weight: normal;"\n                font-weight="normal">\n                    <tspan dy="4.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">7,500</tspan>\n                </text>\n                <path fill="none" stroke="#aaaaaa" d="M61.5625,340H675" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>\n                <text x="49.0625" y="235" text-anchor="end" font-family="sans-serif" font-size="12px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 12px; font-weight: normal;"\n                font-weight="normal">\n                    <tspan dy="4.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">15,000</tspan>\n                </text>\n                <path fill="none" stroke="#aaaaaa" d="M61.5625,235H675" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>\n                <text x="49.0625" y="130" text-anchor="end" font-family="sans-serif" font-size="12px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 12px; font-weight: normal;"\n                font-weight="normal">\n                    <tspan dy="4.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">22,500</tspan>\n                </text>\n                <path fill="none" stroke="#aaaaaa" d="M61.5625,130H675" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>\n                <text x="49.0625" y="25" text-anchor="end" font-family="sans-serif" font-size="12px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 12px; font-weight: normal;"\n                font-weight="normal">\n                    <tspan dy="4.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">30,000</tspan>\n                </text>\n                <path fill="none" stroke="#aaaaaa" d="M61.5625,25H675" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>\n                <text x="561.7041312272175" y="457.5" text-anchor="middle" font-family="sans-serif" font-size="12px" stroke="none" fill="#888888"\n                style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;"\n                font-weight="normal" transform="matrix(1,0,0,1,0,6)">\n                    <tspan dy="4.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2012</tspan>\n                </text>\n                <text x="289.64497266099636" y="457.5" text-anchor="middle" font-family="sans-serif" font-size="12px" stroke="none" fill="#888888"\n                style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;"\n                font-weight="normal" transform="matrix(1,0,0,1,0,6)">\n                    <tspan dy="4.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2011</tspan>\n                </text>\n                <path fill="#7cb47c" stroke="none" d="M61.5625,370.618C78.70595382746052,362.918,112.99286148238153,346.93874999999997,130.13631530984205,339.818C147.27976913730257,332.69725,181.56667679222357,323.39997814207646,198.7101306196841,313.652C215.66724255771567,304.0099781420765,249.58146643377887,265.13505801104975,266.53857837181044,262.25800000000004C283.30934842041313,259.4125580110498,316.85088851761844,288.6695,333.62165856622113,290.762C350.76511239368165,292.901,385.0520200486027,277.75949999999995,402.1954738760632,279.18399999999997C419.3389277035237,280.6085,453.6258353584447,327.44467759562843,470.7692891859052,302.158C487.72640112393685,277.14617759562844,521.640625,90.19100000000002,538.5977369380316,77.99000000000001C555.5548488760633,65.789,589.4690727521264,186.6600464480874,606.426184690158,204.54999999999998C623.5696385176185,222.6365464480874,657.8565461725395,217.55949999999999,675,221.896L675,445L61.5625,445Z"\n                fill-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></path>\n                <path fill="none" stroke="#4da74d" d="M61.5625,370.618C78.70595382746052,362.918,112.99286148238153,346.93874999999997,130.13631530984205,339.818C147.27976913730257,332.69725,181.56667679222357,323.39997814207646,198.7101306196841,313.652C215.66724255771567,304.0099781420765,249.58146643377887,265.13505801104975,266.53857837181044,262.25800000000004C283.30934842041313,259.4125580110498,316.85088851761844,288.6695,333.62165856622113,290.762C350.76511239368165,292.901,385.0520200486027,277.75949999999995,402.1954738760632,279.18399999999997C419.3389277035237,280.6085,453.6258353584447,327.44467759562843,470.7692891859052,302.158C487.72640112393685,277.14617759562844,521.640625,90.19100000000002,538.5977369380316,77.99000000000001C555.5548488760633,65.789,589.4690727521264,186.6600464480874,606.426184690158,204.54999999999998C623.5696385176185,222.6365464480874,657.8565461725395,217.55949999999999,675,221.896"\n                stroke-width="3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>\n                <circle cx="61.5625" cy="370.618" r="2" fill="#4da74d" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>\n                <circle cx="130.13631530984205" cy="339.818" r="2" fill="#4da74d" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>\n                <circle cx="198.7101306196841" cy="313.652" r="2" fill="#4da74d" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>\n                <circle cx="266.53857837181044" cy="262.25800000000004" r="2" fill="#4da74d" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>\n                <circle cx="333.62165856622113" cy="290.762" r="2" fill="#4da74d" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>\n                <circle cx="402.1954738760632" cy="279.18399999999997" r="2" fill="#4da74d" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>\n                <circle cx="470.7692891859052" cy="302.158" r="2" fill="#4da74d" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>\n                <circle cx="538.5977369380316" cy="77.99000000000001" r="2" fill="#4da74d" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>\n                <circle cx="606.426184690158" cy="204.54999999999998" r="2" fill="#4da74d" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>\n                <circle cx="675" cy="221.896" r="2" fill="#4da74d" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>\n                <path fill="#a7b3bc" stroke="none" d="M61.5625,407.676C78.70595382746052,399.255,112.99286148238153,381.36825,130.13631530984205,373.992C147.27976913730257,366.61575000000005,181.56667679222357,352.6989180327869,198.7101306196841,348.666C215.66724255771567,344.6769180327869,249.58146643377887,345.14706906077345,266.53857837181044,341.904C283.30934842041313,338.69656906077347,316.85088851761844,327.36226923076924,333.62165856622113,322.86400000000003C350.76511239368165,318.26576923076925,385.0520200486027,305.32725000000005,402.1954738760632,305.51800000000003C419.3389277035237,305.70875,453.6258353584447,343.8806775956284,470.7692891859052,324.39C487.72640112393685,305.1111775956284,521.640625,161.87099999999998,538.5977369380316,150.44C555.5548488760633,139.00900000000001,589.4690727521264,220.94168579234972,606.426184690158,232.942C623.5696385176185,245.07418579234974,657.8565461725395,243.463,675,246.97L675,445L61.5625,445Z"\n                fill-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></path>\n                <path fill="none" stroke="#7a92a3" d="M61.5625,407.676C78.70595382746052,399.255,112.99286148238153,381.36825,130.13631530984205,373.992C147.27976913730257,366.61575000000005,181.56667679222357,352.6989180327869,198.7101306196841,348.666C215.66724255771567,344.6769180327869,249.58146643377887,345.14706906077345,266.53857837181044,341.904C283.30934842041313,338.69656906077347,316.85088851761844,327.36226923076924,333.62165856622113,322.86400000000003C350.76511239368165,318.26576923076925,385.0520200486027,305.32725000000005,402.1954738760632,305.51800000000003C419.3389277035237,305.70875,453.6258353584447,343.8806775956284,470.7692891859052,324.39C487.72640112393685,305.1111775956284,521.640625,161.87099999999998,538.5977369380316,150.44C555.5548488760633,139.00900000000001,589.4690727521264,220.94168579234972,606.426184690158,232.942C623.5696385176185,245.07418579234974,657.8565461725395,243.463,675,246.97"\n                stroke-width="3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>\n                <circle cx="61.5625" cy="407.676" r="2" fill="#7a92a3" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>\n                <circle cx="130.13631530984205" cy="373.992" r="2" fill="#7a92a3" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>\n                <circle cx="198.7101306196841" cy="348.666" r="2" fill="#7a92a3" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>\n                <circle cx="266.53857837181044" cy="341.904" r="2" fill="#7a92a3" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>\n                <circle cx="333.62165856622113" cy="322.86400000000003" r="2" fill="#7a92a3" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>\n                <circle cx="402.1954738760632" cy="305.51800000000003" r="2" fill="#7a92a3" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>\n                <circle cx="470.7692891859052" cy="324.39" r="2" fill="#7a92a3" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>\n                <circle cx="538.5977369380316" cy="150.44" r="2" fill="#7a92a3" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>\n                <circle cx="606.426184690158" cy="232.942" r="2" fill="#7a92a3" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>\n                <circle cx="675" cy="246.97" r="2" fill="#7a92a3" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>\n                <path fill="#2577b5" stroke="none" d="M61.5625,407.676C78.70595382746052,407.284,112.99286148238153,410.0385,130.13631530984205,406.108C147.27976913730257,402.1775,181.56667679222357,377.9722076502732,198.7101306196841,376.23199999999997C215.66724255771567,374.5107076502732,249.58146643377887,395.60185082872925,266.53857837181044,392.262C283.30934842041313,388.9588508287293,316.85088851761844,352.9536538461538,333.62165856622113,349.65999999999997C350.76511239368165,346.2931538461538,385.0520200486027,362.1375,402.1954738760632,365.62C419.3389277035237,369.1025,453.6258353584447,394.0651693989071,470.7692891859052,377.52C487.72640112393685,361.15466939890706,521.640625,244.24525,538.5977369380316,233.978C555.5548488760633,223.71075000000002,589.4690727521264,283.8237568306011,606.426184690158,295.382C623.5696385176185,307.0672568306011,657.8565461725395,319.0595,675,326.952L675,445L61.5625,445Z"\n                fill-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></path>\n                <path fill="none" stroke="#0b62a4" d="M61.5625,407.676C78.70595382746052,407.284,112.99286148238153,410.0385,130.13631530984205,406.108C147.27976913730257,402.1775,181.56667679222357,377.9722076502732,198.7101306196841,376.23199999999997C215.66724255771567,374.5107076502732,249.58146643377887,395.60185082872925,266.53857837181044,392.262C283.30934842041313,388.9588508287293,316.85088851761844,352.9536538461538,333.62165856622113,349.65999999999997C350.76511239368165,346.2931538461538,385.0520200486027,362.1375,402.1954738760632,365.62C419.3389277035237,369.1025,453.6258353584447,394.0651693989071,470.7692891859052,377.52C487.72640112393685,361.15466939890706,521.640625,244.24525,538.5977369380316,233.978C555.5548488760633,223.71075000000002,589.4690727521264,283.8237568306011,606.426184690158,295.382C623.5696385176185,307.0672568306011,657.8565461725395,319.0595,675,326.952"\n                stroke-width="3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>\n                <circle cx="61.5625" cy="407.676" r="2" fill="#0b62a4" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>\n                <circle cx="130.13631530984205" cy="406.108" r="2" fill="#0b62a4" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>\n                <circle cx="198.7101306196841" cy="376.23199999999997" r="2" fill="#0b62a4" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>\n                <circle cx="266.53857837181044" cy="392.262" r="2" fill="#0b62a4" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>\n                <circle cx="333.62165856622113" cy="349.65999999999997" r="2" fill="#0b62a4" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>\n                <circle cx="402.1954738760632" cy="365.62" r="2" fill="#0b62a4" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>\n                <circle cx="470.7692891859052" cy="377.52" r="2" fill="#0b62a4" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>\n                <circle cx="538.5977369380316" cy="233.978" r="2" fill="#0b62a4" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>\n                <circle cx="606.426184690158" cy="295.382" r="2" fill="#0b62a4" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>\n                <circle cx="675" cy="326.952" r="2" fill="#0b62a4" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>\n            </svg>\n            <div class="morris-hover morris-default-style" style="left: 72.1363px; top: 302px; display: none;">\n                <div class="morris-hover-row-label">2010 Q2</div>\n                <div class="morris-hover-point" style="color: #0b62a4">\n                    iPhone: 2,778\n                </div>\n                <div class="morris-hover-point" style="color: #7A92A3">\n                    iPad: 2,294\n                </div>\n                <div class="morris-hover-point" style="color: #4da74d">\n                    iPod Touch: 2,441\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- /.box-body -->\n</div>\n<!-- /.box -->';
}, function (t, e) {
    t.exports = '<div class="panel panel-default">\n	<div class="panel-heading">\n		<i class="fa fa-bar-chart-o fa-fw"></i> Bar Chart Example\n		<div class="pull-right">\n			<div class="btn-group" sn-dropdown>\n				<button type="button" class="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">\n					Actions\n					<span class="caret"></span>\n				</button>\n				<ul class="dropdown-menu pull-right" role="menu">\n					<li><a href="#">Action</a>\n					</li>\n					<li><a href="#">Another action</a>\n					</li>\n					<li><a href="#">Something else here</a>\n					</li>\n					<li class="divider"></li>\n					<li><a href="#">Separated link</a>\n					</li>\n				</ul>\n			</div>\n		</div>\n	</div>\n	<!-- /.panel-heading -->\n	<div class="panel-body">\n		<div class="row">\n			<div class="col-lg-4">\n				<div class="table-responsive">\n					<table class="table table-bordered table-hover table-striped">\n						<thead>\n							<tr>\n								<th>#</th>\n								<th>Date</th>\n								<th>Time</th>\n								<th>Amount</th>\n							</tr>\n						</thead>\n						<tbody>\n							<tr>\n								<td>3326</td>\n								<td>10/21/2013</td>\n								<td>3:29 PM</td>\n								<td>$321.33</td>\n							</tr>\n							<tr>\n								<td>3325</td>\n								<td>10/21/2013</td>\n								<td>3:20 PM</td>\n								<td>$234.34</td>\n							</tr>\n							<tr>\n								<td>3324</td>\n								<td>10/21/2013</td>\n								<td>3:03 PM</td>\n								<td>$724.17</td>\n							</tr>\n							<tr>\n								<td>3323</td>\n								<td>10/21/2013</td>\n								<td>3:00 PM</td>\n								<td>$23.71</td>\n							</tr>\n							<tr>\n								<td>3322</td>\n								<td>10/21/2013</td>\n								<td>2:49 PM</td>\n								<td>$8345.23</td>\n							</tr>\n							<tr>\n								<td>3321</td>\n								<td>10/21/2013</td>\n								<td>2:23 PM</td>\n								<td>$245.12</td>\n							</tr>\n							<tr>\n								<td>3320</td>\n								<td>10/21/2013</td>\n								<td>2:15 PM</td>\n								<td>$5663.54</td>\n							</tr>\n							<tr>\n								<td>3319</td>\n								<td>10/21/2013</td>\n								<td>2:13 PM</td>\n								<td>$943.45</td>\n							</tr>\n						</tbody>\n					</table>\n				</div>\n				<!-- /.table-responsive -->\n			</div>\n			<!-- /.col-lg-4 (nested) -->\n			<div class="col-lg-8">\n				<div id="morris-bar-chart" style="position: relative; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">\n					<svg height="477" version="1.1" width="457" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\n					style="overflow: hidden; position: relative; left: -0.328125px;">\n						<desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Created with Raphaël 2.1.2</desc>\n						<defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></defs>\n						<text x="32.4375" y="445" text-anchor="end" font-family="sans-serif" font-size="12px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 12px; font-weight: normal;"\n						font-weight="normal">\n							<tspan dy="4.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">0</tspan>\n						</text>\n						<path fill="none" stroke="#aaaaaa" d="M44.9375,445H432" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>\n						<text x="32.4375" y="340" text-anchor="end" font-family="sans-serif" font-size="12px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 12px; font-weight: normal;"\n						font-weight="normal">\n							<tspan dy="4.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">25</tspan>\n						</text>\n						<path fill="none" stroke="#aaaaaa" d="M44.9375,340H432" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>\n						<text x="32.4375" y="235" text-anchor="end" font-family="sans-serif" font-size="12px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 12px; font-weight: normal;"\n						font-weight="normal">\n							<tspan dy="4.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">50</tspan>\n						</text>\n						<path fill="none" stroke="#aaaaaa" d="M44.9375,235H432" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>\n						<text x="32.4375" y="130" text-anchor="end" font-family="sans-serif" font-size="12px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 12px; font-weight: normal;"\n						font-weight="normal">\n							<tspan dy="4.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">75</tspan>\n						</text>\n						<path fill="none" stroke="#aaaaaa" d="M44.9375,130H432" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>\n						<text x="32.4375" y="25" text-anchor="end" font-family="sans-serif" font-size="12px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 12px; font-weight: normal;"\n						font-weight="normal">\n							<tspan dy="4.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">100</tspan>\n						</text>\n						<path fill="none" stroke="#aaaaaa" d="M44.9375,25H432" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>\n						<text x="404.35267857142856" y="457.5" text-anchor="middle" font-family="sans-serif" font-size="12px" stroke="none" fill="#888888"\n						style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;"\n						font-weight="normal" transform="matrix(1,0,0,1,0,6)">\n							<tspan dy="4.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2012</tspan>\n						</text>\n						<text x="293.7633928571429" y="457.5" text-anchor="middle" font-family="sans-serif" font-size="12px" stroke="none" fill="#888888"\n						style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;"\n						font-weight="normal" transform="matrix(1,0,0,1,0,6)">\n							<tspan dy="4.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2010</tspan>\n						</text>\n						<text x="183.17410714285714" y="457.5" text-anchor="middle" font-family="sans-serif" font-size="12px" stroke="none" fill="#888888"\n						style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;"\n						font-weight="normal" transform="matrix(1,0,0,1,0,6)">\n							<tspan dy="4.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2008</tspan>\n						</text>\n						<text x="72.58482142857143" y="457.5" text-anchor="middle" font-family="sans-serif" font-size="12px" stroke="none" fill="#888888"\n						style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;"\n						font-weight="normal" transform="matrix(1,0,0,1,0,6)">\n							<tspan dy="4.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2006</tspan>\n						</text>\n						<rect x="51.84933035714286" y="25" width="19.23549107142857" height="420" rx="0" ry="0" fill="#0b62a4" stroke="none" fill-opacity="1"\n						style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></rect>\n						<rect x="74.08482142857143" y="67" width="19.23549107142857" height="378" rx="0" ry="0" fill="#7a92a3" stroke="none" fill-opacity="1"\n						style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></rect>\n						<rect x="107.14397321428572" y="130" width="19.23549107142857" height="315" rx="0" ry="0" fill="#0b62a4" stroke="none" fill-opacity="1"\n						style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></rect>\n						<rect x="129.37946428571428" y="172" width="19.23549107142857" height="273" rx="0" ry="0" fill="#7a92a3" stroke="none" fill-opacity="1"\n						style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></rect>\n						<rect x="162.43861607142858" y="235" width="19.23549107142857" height="210" rx="0" ry="0" fill="#0b62a4" stroke="none" fill-opacity="1"\n						style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></rect>\n						<rect x="184.67410714285717" y="277" width="19.23549107142857" height="168" rx="0" ry="0" fill="#7a92a3" stroke="none" fill-opacity="1"\n						style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></rect>\n						<rect x="217.73325892857142" y="130" width="19.23549107142857" height="315" rx="0" ry="0" fill="#0b62a4" stroke="none" fill-opacity="1"\n						style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></rect>\n						<rect x="239.96875" y="172" width="19.23549107142857" height="273" rx="0" ry="0" fill="#7a92a3" stroke="none" fill-opacity="1"\n						style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></rect>\n						<rect x="273.0279017857143" y="235" width="19.23549107142857" height="210" rx="0" ry="0" fill="#0b62a4" stroke="none" fill-opacity="1"\n						style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></rect>\n						<rect x="295.26339285714283" y="277" width="19.23549107142857" height="168" rx="0" ry="0" fill="#7a92a3" stroke="none" fill-opacity="1"\n						style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></rect>\n						<rect x="328.3225446428571" y="130" width="19.23549107142857" height="315" rx="0" ry="0" fill="#0b62a4" stroke="none" fill-opacity="1"\n						style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></rect>\n						<rect x="350.55803571428567" y="172" width="19.23549107142857" height="273" rx="0" ry="0" fill="#7a92a3" stroke="none" fill-opacity="1"\n						style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></rect>\n						<rect x="383.61718749999994" y="25" width="19.23549107142857" height="420" rx="0" ry="0" fill="#0b62a4" stroke="none" fill-opacity="1"\n						style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></rect>\n						<rect x="405.8526785714285" y="67" width="19.23549107142857" height="378" rx="0" ry="0" fill="#7a92a3" stroke="none" fill-opacity="1"\n						style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></rect>\n					</svg>\n					<div class="morris-hover morris-default-style" style="left: 87.8795px; top: 203px; display: none;">\n						<div class="morris-hover-row-label">2007</div>\n						<div class="morris-hover-point" style="color: #0b62a4">\n							Series A: 75\n						</div>\n						<div class="morris-hover-point" style="color: #7a92a3">\n							Series B: 65\n						</div>\n					</div>\n				</div>\n			</div>\n			<!-- /.col-lg-8 (nested) -->\n		</div>\n		<!-- /.row -->\n	</div>\n	<!-- /.panel-body -->\n</div>\n<!-- /.panel -->'
}, function (t, e) {
    t.exports = '<div class="chat-panel panel panel-default" ng-init="chatCtrl.init()">\n	<div class="panel-heading">\n		<i class="fa fa-comments fa-fw"></i> Chat\n		<div class="btn-group pull-right" sn-dropdown>\n			<button type="button" class="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">\n				<i class="fa fa-chevron-down"></i>\n			</button>\n			<ul class="dropdown-menu slidedown">\n				<li>\n					<a href="#"><i class="fa fa-refresh fa-fw"></i> Refresh</a>\n				</li>\n				<li>\n					<a href="#"><i class="fa fa-check-circle fa-fw"></i> Available</a>\n				</li>\n				<li>\n					<a href="#"><i class="fa fa-times fa-fw"></i> Busy</a>\n				</li>\n				<li>\n					<a href="#"><i class="fa fa-clock-o fa-fw"></i> Away</a>\n				</li>\n				<li class="divider"></li>\n				<li>\n					<a href="#"><i class="fa fa-sign-out fa-fw"></i> Sign Out</a>\n				</li>\n			</ul>\n		</div>\n	</div>\n	<!-- /.panel-heading -->\n	<div class="panel-body">\n		<ul class="chat">\n			<li class="clearfix" ng-repeat="message in chatCtrl.chatList" ng-class-even="\'left\'" ng-class-odd="\'right\'">\n				<span class="chat-img" ng-class-even="\'pull-left\'" ng-class-odd="\'pull-right\'">\n					<img src="http://placehold.it/50/55C1E7/fff" alt="User Avatar" class="img-circle">\n				</span>\n				<div class="chat-body clearfix">\n					<div class="header">\n						<strong class="primary-font">{{message.from}}</strong>\n						<small class="pull-right text-muted">\n							<i class="fa fa-clock-o fa-fw"></i> {{message.date | fromNow}}\n						</small>\n					</div>\n					<p>{{message.content}}</p>\n				</div>\n			</li>\n		</ul>\n	</div>\n	<!-- /.panel-body -->\n	<div class="panel-footer">\n		<div class="input-group">\n			<input type="text" class="form-control input-sm" placeholder="Type your message here..." ng-model="chatCtrl.newMessage">\n			<span class="input-group-btn">\n				<button class="btn btn-warning btn-sm" ng-click="chatCtrl.sendMessage()">Send</button>\n			</span>\n		</div>\n	</div>\n	<!-- /.panel-footer -->\n</div>'
}, function (t, e) {
    t.exports = '<div>\n    <section class="content-header" ng-init="dashboardCtrl.init()">\n        <h1>\n            Dashboard\n            <small>Version 2.0</small>\n        </h1>\n        <ol class="breadcrumb">\n            <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>\n            <li class="active">Dashboard</li>\n        </ol>\n    </section>\n\n    <section class="content">\n        <div class="row">\n            <div class="col-lg-3 col-md-6" ng-repeat="item in dashboardCtrl.aggregationItems">\n                <sn-aggregation-item-panel data="item"></sn-aggregation-item-panel>\n            </div>\n        </div>\n\n        <div class="row">\n            <div class="col-lg-8">\n                <sn-area-chart-panel></sn-area-chart-panel>\n                <sn-bar-chart-panel></sn-bar-chart-panel>\n                <sn-timeline-panel></sn-timeline-panel>\n            </div>\n            <div class="col-lg-4">\n                <sn-notification-panel></sn-notification-panel>\n                <sn-donut-panel></sn-donut-panel>\n                <sn-chat-panel></sn-chat-panel>\n            </div>\n        </div>\n    </section>\n</div>'
}, function (t, e) {
    t.exports = '<div class="panel panel-default">\n	<div class="panel-heading">\n		<i class="fa fa-bar-chart-o fa-fw"></i> Donut Chart Example\n	</div>\n	<div class="panel-body">\n		<div id="morris-donut-chart">\n			<svg height="477" version="1.1" width="319" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\n			style="overflow: hidden; position: relative;">\n				<desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Created with Raphaël 2.1.2</desc>\n				<defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></defs>\n				<path fill="none" stroke="#0b62a4" d="M159.5,340.6666666666667A99.66666666666667,99.66666666666667,0,0,0,253.6681290975732,273.64671356671647"\n				stroke-width="2" opacity="0" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); opacity: 0;"></path>\n				<path fill="#0b62a4" stroke="#ffffff" d="M159.5,343.6666666666667A102.66666666666667,102.66666666666667,0,0,0,256.50262127776773,274.62939056370794L296.02804001270226,288.332275355089A144.5,144.5,0,0,1,159.5,385.5Z"\n				stroke-width="3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>\n				<path fill="none" stroke="#3980b5" d="M253.6681290975732,273.64671356671647A99.66666666666667,99.66666666666667,0,0,0,70.09933662699727,196.9436062198517"\n				stroke-width="2" opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); opacity: 1;"></path>\n				<path fill="#3980b5" stroke="#ffffff" d="M256.50262127776773,274.62939056370794A102.66666666666667,102.66666666666667,0,0,0,67.40834675958247,195.61749403248933L25.3990049404959,174.9154093297775A149.5,149.5,0,0,1,300.75219364635984,289.97007035007476Z"\n				stroke-width="3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>\n				<path fill="none" stroke="#679dc6" d="M70.09933662699727,196.9436062198517A99.66666666666667,99.66666666666667,0,0,0,159.4686887937342,340.66666174831386"\n				stroke-width="2" opacity="0" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); opacity: 0;"></path>\n				<path fill="#679dc6" stroke="#ffffff" d="M67.40834675958247,195.61749403248933A102.66666666666667,102.66666666666667,0,0,0,159.4677463159536,343.6666616002698L159.45460398690224,385.49999286921087A144.5,144.5,0,0,1,29.88398805285391,177.1255963087147Z"\n				stroke-width="3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>\n				<text x="159.5" y="231" text-anchor="middle" font-family="&quot;Arial&quot;" font-size="15px" stroke="none" fill="#000000"\n				style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: Arial; font-size: 15px; font-weight: 800;"\n				font-weight="800" transform="matrix(1.7934,0,0,1.7934,-126.5412,-189.8304)" stroke-width="0.5575877926421404">\n					<tspan dy="5.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">In-Store Sales</tspan>\n				</text>\n				<text x="159.5" y="251" text-anchor="middle" font-family="&quot;Arial&quot;" font-size="14px" stroke="none" fill="#000000"\n				style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: Arial; font-size: 14px;" transform="matrix(2.1434,0,0,2.1434,-182.3495,-278.1246)"\n				stroke-width="0.4665551839464883">\n					<tspan dy="4.75" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">30</tspan>\n				</text>\n			</svg>\n		</div>\n		<a href="#" class="btn btn-default btn-block">View Details</a>\n	</div>\n	<!-- /.panel-body -->\n</div>\n<!-- /.panel -->'
}, function (t, e) {
    t.exports = '<div class="box box-default" ng-init="notificationCtrl.init()">\n    <div class="box-header with-border">\n        <h3 class="box-title">\n		<i class="fa fa-bell fa-fw"></i> Notifications box\n        </h3>\n    </div>\n    <!-- /.box-heading -->\n    <div class="box-body">\n        <div class="list-group">\n            <a href="#" ng-repeat="notification in notificationCtrl.notifications" class="list-group-item">\n                <i class="fa fa-fw" ng-class="\'fa-\' + notification.type"></i> {{notification.content}}\n                <span class="pull-right text-muted small">\n					<em>{{notification.date | fromNow}}</em>\n                </span>\n            </a>\n        </div>\n        <!-- /.list-group -->\n    </div>\n    <!-- /.box-body -->\n    <div class="box-footer">\n        <a href="#" class="btn btn-default btn-block">View All Alerts</a>\n    </div>\n</div>'
}, function (t, e) {
    t.exports = '<div class="panel panel-default" ng-init="timelineCtrl.init()">\n	<div class="panel-heading">\n		<i class="fa fa-clock-o fa-fw"></i> Responsive Timeline\n	</div>\n	<!-- /.panel-heading -->\n	<div class="panel-body">\n		<ul class="timeline">\n			<li ng-repeat="activity in timelineCtrl.timeline" ng-class-odd="\'timeline-inverted\'">\n				<div class="timeline-badge primary"><i class="fa fa-user"></i>\n				</div>\n				<div class="timeline-panel">\n					<div class="timeline-heading">\n						<h4 class="timeline-title">{{activity.title}}</h4>\n						<p><small class="text-muted"><i class="fa fa-clock-o"></i> {{activity.date | fromNow}} via Twitter</small>\n						</p>\n					</div>\n					<div class="timeline-body">\n						<p>{{activity.content}}</p>\n					</div>\n				</div>\n			</li>\n		</ul>\n	</div>\n	<!-- /.panel-body -->\n</div>'
}, function (t, e) {
    t.exports = '<div class="panel panel-default" ng-init="choiceCtrl.init()">\n	<div class="panel-heading">\n		Make Choice\n	</div>\n	<div class="panel-body">\n		<h3>Follow your heart: </h3>\n		\n		<ul class="list-group">\n			<li class="list-group-item"\n				ng-repeat="choice in choiceCtrl.flow.context.choices"\n				ng-click="choiceCtrl.flow.context.currentChoice=choice">\n				<a href="javascript:void(0)">choice.label</a>\n			</li>\n		</ul>\n	</div>\n	<div class="panel-footer">\n		<button class="btn btn-sm btn-primary" ng-click="choiceCtrl.next()">Next</button>\n	</div>\n</div>'
}, function (t, e) {
    t.exports = '<div class="panel panel-default" ng-init="euclidCtrl.init()">\n	<div class="panel-heading">\n		Euclid\n	</div>\n	<div class="panel-body">\n		<form class="form-horizontal">\n			<div class="form-group">\n				<label class="col-sm-2 control-label">First Number</label>\n				<div class="col-sm-10">\n					<input type="number" class="form-control" placeholder="First Number" ng-model="euclidCtrl.flow.context.a">\n				</div>\n			</div>\n			<div class="form-group">\n				<label class="col-sm-2 control-label">Second Number</label>\n				<div class="col-sm-10">\n					<input type="number" class="form-control" placeholder="Second Number" ng-model="euclidCtrl.flow.context.b">\n				</div>\n			</div>\n			<div class="form-group">\n				<label class="col-sm-2 control-label">Result</label>\n				<p class="col-sm-10 form-control-static">\n					{{euclidCtrl.flow.context.result}}\n				</p>\n			</div>\n		</form>\n	</div>\n	<div class="panel-footer">\n		<button class="btn btn-sm btn-primary" ng-click="euclidCtrl.next()">Next</button>\n	</div>\n</div>'
}, function (t, e) {
    t.exports = '<div ng-init="employeeListCtrl.init()">\n	<h1 class="page-header">Employees <small>All Employees</small></h1>\n\n	<div class="row">\n		<form class="navbar-form navbar-left" role="search">\n			<div class="form-group">\n				<button ng-click="employeeListCtrl.newEmployee()" class="btn btn-primary">New</button>\n			</div>\n			<div class="form-group">\n				<button ng-click="employeeListCtrl.deleteEmployee()" ng-disabled="!employeeListCtrl.selectedEmployee" class="btn btn-danger">Delete</button>\n			</div>\n			<div class="form-group">\n				<input type="text" class="form-control" placeholder="Search">\n				<button type="submit" class="btn btn-default">\n					<i class="glyphicon glyphicon-search"></i>\n				</button>\n			</div>\n		</form>\n	</div>\n	<table class="table table-bordered">\n		<thead>\n			<tr>\n				<th>Name</th>\n				<th>Age</th>\n				<th>Gender</th>\n			</tr>\n		</thead>\n		<tbody>\n			<tr ng-repeat="employee in employeeListCtrl.employeeList"\n			ng-class="{\'active\':employee==employeeListCtrl.selectedEmployee}"\n			ng-click="employeeListCtrl.selectedEmployee=employee">\n				<td>{{employee.name}}</td>\n				<td>{{employee.age}}</td>\n				<td>{{employee.gender | gender}}</td>\n			</tr>\n		</tbody>\n	</table>\n\n	<!--sn-datagrid type="\'sortable\'" grid-cols="employeeListCtrl.employeeCols" grid-data="employeeListCtrl.employeeList"></sn-datagrid-->\n\n	<sn-pager count="employeeListCtrl.total" current-page="employeeListCtrl.currentPage"></sn-pager>\n</div>'
}, function (t, e) {
    t.exports = '<div class="modal fade in" ng-controller="NewEmployeeDialogController as dialogCtrl" ng-init="dialogCtrl.dialog=dialog">\n	<div class="modal-dialog">\n		<div class="modal-content">\n			<div class="modal-header">\n				<button type="button" class="close" data-dismiss="modal" ng-click="dialog.close()"><span\n						aria-hidden="true">&times;</span><span\n						class="sr-only">Close</span></button>\n				<h4 class="modal-title">New Employee</h4>\n			</div>\n			<div class="modal-body">\n				<form class="form-horizontal" role="form">\n					<div class="form-group">\n						<label class="col-sm-2 control-label">Name</label>\n\n						<div class="col-sm-10">\n							<input type="text" class="form-control" placeholder="Name" ng-model="dialogCtrl.name"/>\n						</div>\n					</div>\n					<div class="form-group">\n						<label class="col-sm-2 control-label">Age</label>\n\n						<div class="col-sm-10">\n							<input type="number" class="form-control" placeholder="Age" ng-model="dialogCtrl.age"/>\n						</div>\n					</div>\n					<div class="form-group">\n						<label class="col-sm-2 control-label">Gender</label>\n\n						<div class="col-sm-10">\n							<select class="form-control" ng-model="dialogCtrl.gender">\n								<option value="0">Female</option>\n								<option value="1">Male</option>\n							</select>\n						</div>\n					</div>\n				</form>\n			</div>\n			<div class="modal-footer">\n				<button type="button" class="btn btn-primary" ng-click="dialogCtrl.ok()">OK</button>\n				<button type="button" class="btn btn-primary" ng-click="dialog.cancel()">Cancel</button>\n			</div>\n		</div>\n	</div>\n</div>'
}, function (t, e) {
    t.exports = '<div class="panel panel-default" ng-init="entityListCtrl.init()">\n	<div class="panel-heading">\n		<span>Entities</span>\n	</div>\n	<div class="panel-body">\n		<ul class="list-group">\n			<li ng-repeat="entity in entityListCtrl.entityList"\n				ng-class="{\'active\':entity==entityListCtrl.selectedEntity}"\n				ng-click="entityListCtrl.selectEntity(entity)"\n				class="list-group-item">\n				<span>{{entity.name}}</span>\n			</li>\n		</ul>\n	</div>\n	<div class="panel-footer">\n		<div class="row">\n			<form class="navbar-form navbar-left" role="search">\n				<!--div class="form-group">\n					<input type="text" class="form-control" placeholder="Search">\n					<button type="submit" class="btn btn-default">\n						<i class="glyphicon glyphicon-search"></i>\n					</button>\n				</div-->\n				<div class="form-group">\n					<button ng-click="entityListCtrl.newEntity()"\n						class="btn btn-sm btn-primary">New</button>\n				</div>\n				<div class="form-group">\n					<button ng-click="entityListCtrl.deleteEntity()"\n						ng-disabled="!entityListCtrl.selectedEntity"\n						class="btn btn-sm btn-danger">Delete</button>\n				</div>\n			</form>\n		</div>\n	</div>\n</div>'
}, function (t, e) {
    t.exports = '<div class="row" ng-init="entityManageCtrl.init()">\n	<div class="col-md-12">\n		<h1 class="page-header">Entity Management <small>Dynamic Entity Configuration</small></h1>\n	</div>\n\n	<div class="col-md-3">\n		<sn-entity-list selected-entity="entityManageCtrl.selectedEntity"></sn-entity-list>\n	</div>\n	<div class="col-md-9">\n		<sn-entity-property-list selected-entity="entityManageCtrl.selectedEntity"></sn-entity-property-list>\n		<sn-entity-rule-list selected-entity="entityManageCtrl.selectedEntity"></sn-entity-rule-list>\n	</div>\n</div>'
}, function (t, e) {
    t.exports = '<div class="panel panel-default" ng-init="entityPropertyListCtrl.init()">\n	<div class="panel-heading">\n		<span>Entity Properties</span>\n	</div>\n	<div class="panel-body">\n		<table class="table table-bordered">\n			<thead>\n				<tr>\n					<th>Name</th>\n					<th>Type</th>\n					<th>Required</th>\n					<th>Is Primary Key</th>\n				</tr>\n			</thead>\n			<tbody>\n				<tr ng-repeat="property in entityPropertyListCtrl.propertyList"\n				ng-class="{\'active\':property==entityPropertyListCtrl.selectedProperty}"\n				ng-click="entityPropertyListCtrl.selectedProperty=property">\n					<td>{{property.name}}</td>\n					<td>{{property.type}}</td>\n					<td>{{property.required}}</td>\n					<td>{{property.isPrimaryKey}}</td>\n				</tr>\n			</tbody>\n		</table>\n	</div>\n	<div class="panel-footer">\n		<div class="row">\n			<form class="navbar-form navbar-left" role="operation">\n				<div class="form-group">\n					<button ng-click="entityPropertyListCtrl.newProperty()"\n						class="btn btn-sm btn-primary">New</button>\n				</div>\n				<div class="form-group">\n					<button ng-click="entityPropertyListCtrl.deleteProperty()"\n						ng-disabled="!entityPropertyListCtrl.selectedProperty"\n						class="btn btn-sm btn-danger">Delete</button>\n				</div>\n			</form>\n		</div>\n	</div>\n</div>'
}, function (t, e) {
    t.exports = '<div class="panel panel-default" ng-init="entityRuleListCtrl.init()">\n	<div class="panel-heading">\n		<span>Entity Rules</span>\n	</div>\n	<div class="panel-body">\n		<table class="table table-bordered">\n			<thead>\n				<tr>\n					<th>Name</th>\n					<th>Return Type</th>\n					<th>Params</th>\n					<th>Body</th>\n					<th>Asynchronous</th>\n				</tr>\n			</thead>\n			<tbody>\n				<tr ng-repeat="rule in entityRuleListCtrl.ruleList"\n				ng-class="{\'active\':rule==entityRuleListCtrl.selectedRule}"\n				ng-click="entityRuleListCtrl.selectedRule=rule">\n					<td>{{rule.name}}</td>\n					<td>{{rule.returnType}}</td>\n					<td>\n						<ul class="list-group">\n							<li class="list-group-item" ng-repeat="param in rule.params">\n								<span class="badge">{{param.type}}</span>\n								{{param.name}}\n							</li>\n						</ul>\n					</td>\n					<td>{{rule.body}}</td>\n					<td>{{rule.async}}</td>\n				</tr>\n			</tbody>\n		</table>\n	</div>\n	<div class="panel-footer">\n		<div class="row">\n			<form class="navbar-form navbar-left" role="operation">\n				<div class="form-group">\n					<button ng-click="entityRuleListCtrl.newRule()"\n						class="btn btn-sm btn-primary">New</button>\n				</div>\n				<div class="form-group">\n					<button ng-click="entityRuleListCtrl.deleteRule()"\n						ng-disabled="!entityRuleListCtrl.selectedRule"\n						class="btn btn-sm btn-danger">Delete</button>\n				</div>\n			</form>\n		</div>\n	</div>\n</div>'
}, function (t, e) {
    t.exports = '<div ng-init="flowCtrl.init()">\n	<div>\n		a: {{flowCtrl.flow.context.a}}\n	</div>\n	<div>\n		b: {{flowCtrl.flow.context.b}}\n	</div>\n	<button class="btn btn-default" ng-click="flowCtrl.start()">Start</button>\n	<button class="btn btn-default" ng-click="flowCtrl.step()">Step</button>\n</div>'
}, function (t, e) {
    t.exports = '<!-- Control Sidebar -->\n<aside class="control-sidebar control-sidebar-dark" ng-class="{true:\'control-sidebar-open\'}[config.showControlNav]">\n    <!-- Create the tabs -->\n    <ul class="nav nav-tabs nav-justified control-sidebar-tabs">\n        <li><a href="javascript:void(0)" data-toggle="tab" ng-click="controlNavCtrl.tab=\'activity\'"><i class="fa fa-home"></i></a></li>\n        <li><a href="javascript:void(0)" data-toggle="tab" ng-click="controlNavCtrl.tab=\'settings\'"><i class="fa fa-gears"></i></a></li>\n    </ul>\n    <!-- Tab panes -->\n    <div class="tab-content">\n        <!-- Home tab content -->\n        <div class="tab-pane" ng-class="{true:\'show\'}[controlNavCtrl.tab==\'activity\']">\n            <h3 class="control-sidebar-heading">Recent Activity {{controlNavCtrl.tab}}</h3>\n            <ul class="control-sidebar-menu">\n                <li>\n                    <a href="javascript::;">\n                        <i class="menu-icon fa fa-birthday-cake bg-red"></i>\n\n                        <div class="menu-info">\n                            <h4 class="control-sidebar-subheading">Langdon\'s Birthday</h4>\n\n                            <p>Will be 23 on April 24th</p>\n                        </div>\n                    </a>\n                </li>\n                <li>\n                    <a href="javascript::;">\n                        <i class="menu-icon fa fa-user bg-yellow"></i>\n\n                        <div class="menu-info">\n                            <h4 class="control-sidebar-subheading">Frodo Updated His Profile</h4>\n\n                            <p>New phone +1(800)555-1234</p>\n                        </div>\n                    </a>\n                </li>\n                <li>\n                    <a href="javascript::;">\n                        <i class="menu-icon fa fa-envelope-o bg-light-blue"></i>\n\n                        <div class="menu-info">\n                            <h4 class="control-sidebar-subheading">Nora Joined Mailing List</h4>\n\n                            <p>nora@example.com</p>\n                        </div>\n                    </a>\n                </li>\n                <li>\n                    <a href="javascript::;">\n                        <i class="menu-icon fa fa-file-code-o bg-green"></i>\n\n                        <div class="menu-info">\n                            <h4 class="control-sidebar-subheading">Cron Job 254 Executed</h4>\n\n                            <p>Execution time 5 seconds</p>\n                        </div>\n                    </a>\n                </li>\n            </ul>\n            <!-- /.control-sidebar-menu -->\n\n            <h3 class="control-sidebar-heading">Tasks Progress</h3>\n            <ul class="control-sidebar-menu">\n                <li>\n                    <a href="javascript::;">\n                        <h4 class="control-sidebar-subheading">\n								Custom Template Design\n								<span class="label label-danger pull-right">70%</span>\n							</h4>\n\n                        <div class="progress progress-xxs">\n                            <div class="progress-bar progress-bar-danger" style="width: 70%"></div>\n                        </div>\n                    </a>\n                </li>\n                <li>\n                    <a href="javascript::;">\n                        <h4 class="control-sidebar-subheading">\n								Update Resume\n								<span class="label label-success pull-right">95%</span>\n							</h4>\n\n                        <div class="progress progress-xxs">\n                            <div class="progress-bar progress-bar-success" style="width: 95%"></div>\n                        </div>\n                    </a>\n                </li>\n                <li>\n                    <a href="javascript::;">\n                        <h4 class="control-sidebar-subheading">\n								Laravel Integration\n								<span class="label label-warning pull-right">50%</span>\n							</h4>\n\n                        <div class="progress progress-xxs">\n                            <div class="progress-bar progress-bar-warning" style="width: 50%"></div>\n                        </div>\n                    </a>\n                </li>\n                <li>\n                    <a href="javascript::;">\n                        <h4 class="control-sidebar-subheading">\n								Back End Framework\n								<span class="label label-primary pull-right">68%</span>\n							</h4>\n\n                        <div class="progress progress-xxs">\n                            <div class="progress-bar progress-bar-primary" style="width: 68%"></div>\n                        </div>\n                    </a>\n                </li>\n            </ul>\n            <!-- /.control-sidebar-menu -->\n\n        </div>\n        <!-- /.tab-pane -->\n\n        <!-- Settings tab content -->\n        <div class="tab-pane" ng-class="{true:\'show\'}[controlNavCtrl.tab==\'settings\']">\n            <form method="post">\n                <h3 class="control-sidebar-heading">General Settings</h3>\n\n                <div class="form-group">\n                    <label class="control-sidebar-subheading">\n                        Report panel usage\n                        <input type="checkbox" class="pull-right" checked>\n                    </label>\n\n                    <p>\n                        Some information about this general settings option\n                    </p>\n                </div>\n                <!-- /.form-group -->\n\n                <div class="form-group">\n                    <label class="control-sidebar-subheading">\n                        Allow mail redirect\n                        <input type="checkbox" class="pull-right" checked>\n                    </label>\n\n                    <p>\n                        Other sets of options are available\n                    </p>\n                </div>\n                <!-- /.form-group -->\n\n                <div class="form-group">\n                    <label class="control-sidebar-subheading">\n                        Expose author name in posts\n                        <input type="checkbox" class="pull-right" checked>\n                    </label>\n\n                    <p>\n                        Allow the user to show his name in blog posts\n                    </p>\n                </div>\n                <!-- /.form-group -->\n\n                <h3 class="control-sidebar-heading">Chat Settings</h3>\n\n                <div class="form-group">\n                    <label class="control-sidebar-subheading">\n                        Show me as online\n                        <input type="checkbox" class="pull-right" checked>\n                    </label>\n                </div>\n                <!-- /.form-group -->\n\n                <div class="form-group">\n                    <label class="control-sidebar-subheading">\n                        Turn off notifications\n                        <input type="checkbox" class="pull-right">\n                    </label>\n                </div>\n                <!-- /.form-group -->\n\n                <div class="form-group">\n                    <label class="control-sidebar-subheading">\n                        Delete chat history\n                        <a href="javascript::;" class="text-red pull-right"><i class="fa fa-trash-o"></i></a>\n                    </label>\n                </div>\n                <!-- /.form-group -->\n            </form>\n        </div>\n        <!-- /.tab-pane -->\n    </div>\n</aside>\n<!-- /.control-sidebar -->';
}, function (t, e) {
    t.exports = '<li class="dropdown messages-menu" sn-dropdown ng-init="listCtrl.init()">\n    <a href="#" class="dropdown-toggle" data-toggle="dropdown">\n        <i class="fa fa-envelope-o"></i>\n        <span class="label label-success">{{listCtrl.messageList.length}}</span>\n    </a>\n    <ul class="dropdown-menu">\n        <li class="header">You have {{listCtrl.messageList.length}} messages</li>\n        <li>\n            <!-- inner menu: contains the actual data -->\n            <ul class="menu">\n                <li ng-repeat="message in listCtrl.messageList">\n                    <!-- start message -->\n                    <a href="#">\n                        <div class="pull-left">\n                            <img src="https://almsaeedstudio.com/themes/AdminLTE/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">\n                        </div>\n                        <h4>\n                            {{message.title}}\n                            <small><i class="fa fa-clock-o"></i>{{message.date | fromNow}}</small>\n                        </h4>\n                        <p>{{message.content}}</p>\n                    </a>\n                </li>\n                <!-- end message -->\n            </ul>\n        </li>\n        <li class="footer"><a href="#">See All Messages</a></li>\n    </ul>\n</li>'
}, function (t, e) {
    t.exports = '<div>\n	<h1 class="page-header">Messages <small>messages received</small></h1>\n\n	<div class="panel panel-default" ng-init="messageListCtrl.init()">\n		<div class="panel-heading">\n			All Messages\n		</div>\n		<!-- /.panel-heading -->\n		<div class="panel-body">\n			<div class="row">\n				<form class="navbar-form navbar-left" role="search">\n					<div class="form-group">\n						<input type="text" class="form-control" placeholder="Search">\n					</div>\n					<button type="submit" class="btn btn-default">\n						<i class="glyphicon glyphicon-search"></i>\n					</button>\n				</form>\n			</div>\n\n			<sn-datagrid type="\'sortable\'" grid-cols="messageListCtrl.messageCols" grid-data="messageListCtrl.messageList"></sn-datagrid>\n\n			<sn-pager count="177"></sn-pager>\n		</div>\n		<!-- /.panel-body -->\n	</div>\n	<!-- /.panel -->\n</div>'
}, function (t, e) {
    t.exports = '<li class="dropdown notifications-menu" sn-dropdown ng-init="listCtrl.init()">\n    <a href="#" class="dropdown-toggle" data-toggle="dropdown">\n        <i class="fa fa-bell-o"></i>\n        <span class="label label-warning">{{listCtrl.notificationList.length}}</span>\n    </a>\n    <ul class="dropdown-menu">\n        <li class="header">You have {{listCtrl.notificationList.length}} notifications</li>\n        <li>\n            <!-- inner menu: contains the actual data -->\n            <ul class="menu">\n                <li ng-repeat="notification in listCtrl.notificationList">\n                    <a href="#">\n                        <i class="fa fa-users" ng-class="listCtrl.notificationClass(notification.type)"></i> {{notification.content}}\n                        <span class="pull-right">{{notification.date | fromNow}}</span>\n                    </a>\n                </li>\n            </ul>\n        </li>\n        <li class="footer"><a href="#">View all</a></li>\n    </ul>\n</li>'
}, function (t, e) {
    t.exports = '<!-- sidebar menu: : style can be found in sidebar.less -->\n\n<ul class="sidebar-menu" ng-init="menuCtrl.init()">\n    <li class="header">MAIN NAVIGATION</li>\n\n    <li ng-repeat="menu1 in menuCtrl.menuTree" class="treeview" ng-class="{true:\'active\'}[menu1.$expanded]">\n        <a href="javascript:void(0)" ng-click="menuCtrl.selectMenu(menu1)">\n            <i class="fa" ng-class="menu1.icon"></i>\n            <span>{{menu1.name}}</span>\n            <i ng-show="menu1.children" class="fa fa-angle-left pull-right"></i>\n        </a>\n        <ul class="treeview-menu">\n            <li ng-repeat="menu2 in menu1.children" ng-class="{true:\'active\'}[menu2.$expanded]">\n                <a href="javascript:void(0)" ng-click="menuCtrl.selectMenu(menu2)">\n                    <i class="fa" ng-class="menu2.icon"></i>\n                    <span>{{menu2.name}}</span>\n                    <i ng-show="menu2.children" class="fa fa-angle-left pull-right"></i>\n                </a>\n\n                <ul class="treeview-menu" ng-show="menu2.children">\n                    <li ng-repeat="menu3 in menu2.children" ng-class="{true:\'active\'}[menu3.$expanded]">\n                        <a href="javascript:void(0)" ng-click="menuCtrl.selectMenu(menu3)">\n                            <i class="fa fa-circle-o"></i>\n                            <span>{{menu3.name}}</span>\n                            <i ng-show="menu3.children" class="fa fa-angle-left pull-right"></i>\n                        </a>\n\n                        <ul class="treeview-menu" ng-show="menu3.children">\n                            <li ng-repeat="menu4 in menu3.children" ng-class="{true:\'active\'}[menu4.$expanded]">\n                                <a ui-sref="{{menu4.state}}">\n                                    <i class="fa fa-circle-o"></i>\n                                    <span>{{menu4.name}}</span>\n                                </a>\n                            </li>\n                        </ul>\n                    </li>\n                </ul>\n            </li>\n        </ul>\n    </li>\n\n\n    <li class="header">LABELS</li>\n    <li><a href="#"><i class="fa fa-circle-o text-red"></i> <span>Important</span></a></li>\n    <li><a href="#"><i class="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>\n    <li><a href="#"><i class="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>\n</ul>'
}, function (t, e) {
    t.exports = '<aside class="main-sidebar" ng-init="sideNavCtrl.init()">\n    <!-- sidebar: style can be found in sidebar.less -->\n    <section class="sidebar">\n        <!-- Sidebar user panel -->\n        <div class="user-panel">\n            <div class="pull-left image">\n                <img src="https://almsaeedstudio.com/themes/AdminLTE/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">\n            </div>\n            <div class="pull-left info">\n                <p>Alexander Pierce</p>\n                <a href="#"><i class="fa fa-circle text-success"></i> Online</a>\n            </div>\n        </div>\n        <!-- search form -->\n        <form action="#" method="get" class="sidebar-form">\n            <div class="input-group">\n                <input type="text" name="q" class="form-control" placeholder="Search...">\n                <span class="input-group-btn">\n                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>\n                </button>\n              </span>\n            </div>\n        </form>\n        <!-- /.search form -->\n        \n        <sn-side-menu></sn-side-menu>\n    </section>\n    <!-- /.sidebar -->\n</aside>'
}, function (t, e) {
    t.exports = '<li class="dropdown tasks-menu" sn-dropdown ng-init="listCtrl.init()">\n    <a href="#" class="dropdown-toggle" data-toggle="dropdown">\n        <i class="fa fa-flag-o"></i>\n        <span class="label label-danger">{{listCtrl.taskList.length}}</span>\n    </a>\n    <ul class="dropdown-menu">\n        <li class="header">You have {{listCtrl.taskList.length}} tasks</li>\n        <li>\n            <!-- inner menu: contains the actual data -->\n            <ul class="menu">\n                <li ng-repeat="task in listCtrl.taskList">\n                    <!-- Task item -->\n                    <a href="#">\n                        <h3>\n                        {{task.name}}\n                        <small class="pull-right">{{task.percentage}}%</small>\n                      </h3>\n                        <div class="progress xs">\n                            <div class="progress-bar" ng-class="listCtrl.taskClass($index)" ng-style="{width: task.percentage + \'%\'}" role="progressbar"\n                             aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">\n                                <span class="sr-only">{{task.percentage}}% Complete (success)</span>\n                            </div>\n                        </div>\n                    </a>\n                </li>\n                <!-- end task item -->\n            </ul>\n        </li>\n        <li class="footer">\n            <a href="#">View all tasks</a>\n        </li>\n    </ul>\n</li>'
}, function (t, e) {
    t.exports = '<header class="main-header" ng-init="navCtrl.init()">\n    <!-- Logo -->\n    <a href="index2.html" class="logo">\n        <!-- mini logo for sidebar mini 50x50 pixels -->\n        <span class="logo-mini"><b>A</b>LT</span>\n        <!-- logo for regular state and mobile devices -->\n        <span class="logo-lg"><b>Admin</b>LTE</span>\n    </a>\n\n    <!-- Header Navbar: style can be found in header.less -->\n    <nav class="navbar navbar-static-top" role="navigation">\n        <!-- Sidebar toggle button-->\n        <a href="javascript:void(0)" class="sidebar-toggle" data-toggle="offcanvas" role="button" ng-click="navCtrl.toggleSideNav()">\n            <span class="sr-only">Toggle navigation</span>\n        </a>\n        <!-- Navbar Right Menu -->\n        <div class="navbar-custom-menu">\n            <ul class="nav navbar-nav">\n                <!-- Messages: style can be found in dropdown.less-->\n                <sn-message-dropdown></sn-message-dropdown>\n                \n                <!-- Notifications: style can be found in dropdown.less -->\n                <sn-notification-dropdown></sn-notification-dropdown>\n                \n                <!-- Tasks: style can be found in dropdown.less -->\n                <sn-task-dropdown></sn-task-dropdown>\n\n                <!-- User Account: style can be found in dropdown.less -->\n                <li class="dropdown user user-menu" sn-dropdown>\n                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">\n                        <img src="https://almsaeedstudio.com/themes/AdminLTE/dist/img/user2-160x160.jpg" class="user-image" alt="User Image">\n                        <span class="hidden-xs">Alexander Pierce</span>\n                    </a>\n                    <ul class="dropdown-menu">\n                        <!-- User image -->\n                        <li class="user-header">\n                            <img src="https://almsaeedstudio.com/themes/AdminLTE/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">\n\n                            <p>\n                                Alexander Pierce - Web Developer\n                                <small>Member since Nov. 2012</small>\n                            </p>\n                        </li>\n                        <!-- Menu Body -->\n                        <li class="user-body">\n                            <div class="row">\n                                <div class="col-xs-4 text-center">\n                                    <a href="#">Followers</a>\n                                </div>\n                                <div class="col-xs-4 text-center">\n                                    <a href="#">Sales</a>\n                                </div>\n                                <div class="col-xs-4 text-center">\n                                    <a href="#">Friends</a>\n                                </div>\n                            </div>\n                            <!-- /.row -->\n                        </li>\n                        <!-- Menu Footer-->\n                        <li class="user-footer">\n                            <div class="pull-left">\n                                <a href="#" class="btn btn-default btn-flat">Profile</a>\n                            </div>\n                            <div class="pull-right">\n                                <a href="#" class="btn btn-default btn-flat">Sign out</a>\n                            </div>\n                        </li>\n                    </ul>\n                </li>\n                <!-- Control Sidebar Toggle Button -->\n                <li>\n                    <a href="javascript:void(0)" data-toggle="control-sidebar" ng-click="navCtrl.toggleControlNav()">\n                        <i class="fa fa-gears"></i>\n                    </a>\n                </li>\n            </ul>\n        </div>\n\n    </nav>\n</header>'
}]));
//# sourceMappingURL=app.js.map