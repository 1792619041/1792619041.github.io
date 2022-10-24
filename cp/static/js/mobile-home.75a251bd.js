(function(t) {
	function e(e) {
		for (var n, c, l = e[0], o = e[1], r = e[2], d = 0, m = []; d < l.length; d++) c = l[d], Object.prototype.hasOwnProperty.call(s, c) && s[c] && m.push(s[c][0]), s[c] = 0;
		for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
		u && u(e);
		while (m.length) m.shift()();
		return a.push.apply(a, r || []), i()
	}

	function i() {
		for (var t, e = 0; e < a.length; e++) {
			for (var i = a[e], n = !0, l = 1; l < i.length; l++) {
				var o = i[l];
				0 !== s[o] && (n = !1)
			}
			n && (a.splice(e--, 1), t = c(c.s = i[0]))
		}
		return t
	}
	var n = {},
		s = {
			"mobile-home": 0
		},
		a = [];

	function c(e) {
		if (n[e]) return n[e].exports;
		var i = n[e] = {
			i: e,
			l: !1,
			exports: {}
		};
		return t[e].call(i.exports, i, i.exports, c), i.l = !0, i.exports
	}
	c.m = t, c.c = n, c.d = function(t, e, i) {
		c.o(t, e) || Object.defineProperty(t, e, {
			enumerable: !0,
			get: i
		})
	}, c.r = function(t) {
		"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, c.t = function(t, e) {
		if (1 & e && (t = c(t)), 8 & e) return t;
		if (4 & e && "object" === typeof t && t && t.__esModule) return t;
		var i = Object.create(null);
		if (c.r(i), Object.defineProperty(i, "default", {
			enumerable: !0,
			value: t
		}), 2 & e && "string" != typeof t)
			for (var n in t) c.d(i, n, function(e) {
				return t[e]
			}.bind(null, n));
		return i
	}, c.n = function(t) {
		var e = t && t.__esModule ? function() {
			return t["default"]
		} : function() {
			return t
		};
		return c.d(e, "a", e), e
	}, c.o = function(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, c.p = "/";
	var l = window["webpackJsonp"] = window["webpackJsonp"] || [],
		o = l.push.bind(l);
	l.push = e, l = l.slice();
	for (var r = 0; r < l.length; r++) e(l[r]);
	var u = o;
	a.push([0, "chunk-vendors", "chunk-common"]), i()
})({
	0: function(t, e, i) {
		t.exports = i("b3c8")
	},
	"0026": function(t, e, i) {
		"use strict";
		i("6746")
	},
	"02e3": function(t, e, i) {},
	"0792": function(t, e, i) {},
	"0902": function(t, e, i) {
		"use strict";
		i("8c2a")
	},
	"142a": function(t, e, i) {
		"use strict";
		i("02e3")
	},
	"3efb": function(t, e, i) {},
	4052: function(t, e, i) {},
	4678: function(t, e, i) {
		var n = {
			"./af": "2bfb",
			"./af.js": "2bfb",
			"./ar": "8e73",
			"./ar-dz": "a356",
			"./ar-dz.js": "a356",
			"./ar-kw": "423e",
			"./ar-kw.js": "423e",
			"./ar-ly": "1cfd",
			"./ar-ly.js": "1cfd",
			"./ar-ma": "0a84",
			"./ar-ma.js": "0a84",
			"./ar-sa": "8230",
			"./ar-sa.js": "8230",
			"./ar-tn": "6d83",
			"./ar-tn.js": "6d83",
			"./ar.js": "8e73",
			"./az": "485c",
			"./az.js": "485c",
			"./be": "1fc1",
			"./be.js": "1fc1",
			"./bg": "84aa",
			"./bg.js": "84aa",
			"./bm": "a7fa",
			"./bm.js": "a7fa",
			"./bn": "9043",
			"./bn-bd": "9686",
			"./bn-bd.js": "9686",
			"./bn.js": "9043",
			"./bo": "d26a",
			"./bo.js": "d26a",
			"./br": "6887",
			"./br.js": "6887",
			"./bs": "2554",
			"./bs.js": "2554",
			"./ca": "d716",
			"./ca.js": "d716",
			"./cs": "3c0d",
			"./cs.js": "3c0d",
			"./cv": "03ec",
			"./cv.js": "03ec",
			"./cy": "9797",
			"./cy.js": "9797",
			"./da": "0f14",
			"./da.js": "0f14",
			"./de": "b469",
			"./de-at": "b3eb",
			"./de-at.js": "b3eb",
			"./de-ch": "bb71",
			"./de-ch.js": "bb71",
			"./de.js": "b469",
			"./dv": "598a",
			"./dv.js": "598a",
			"./el": "8d47",
			"./el.js": "8d47",
			"./en-au": "0e6b",
			"./en-au.js": "0e6b",
			"./en-ca": "3886",
			"./en-ca.js": "3886",
			"./en-gb": "39a6",
			"./en-gb.js": "39a6",
			"./en-ie": "e1d3",
			"./en-ie.js": "e1d3",
			"./en-il": "73332",
			"./en-il.js": "73332",
			"./en-in": "ec2e",
			"./en-in.js": "ec2e",
			"./en-nz": "6f50",
			"./en-nz.js": "6f50",
			"./en-sg": "b7e9",
			"./en-sg.js": "b7e9",
			"./eo": "65db",
			"./eo.js": "65db",
			"./es": "898b",
			"./es-do": "0a3c",
			"./es-do.js": "0a3c",
			"./es-mx": "b5b7",
			"./es-mx.js": "b5b7",
			"./es-us": "55c9",
			"./es-us.js": "55c9",
			"./es.js": "898b",
			"./et": "ec18",
			"./et.js": "ec18",
			"./eu": "0ff2",
			"./eu.js": "0ff2",
			"./fa": "8df4",
			"./fa.js": "8df4",
			"./fi": "81e9",
			"./fi.js": "81e9",
			"./fil": "d69a",
			"./fil.js": "d69a",
			"./fo": "0721",
			"./fo.js": "0721",
			"./fr": "9f26",
			"./fr-ca": "d9f8",
			"./fr-ca.js": "d9f8",
			"./fr-ch": "0e49",
			"./fr-ch.js": "0e49",
			"./fr.js": "9f26",
			"./fy": "7118",
			"./fy.js": "7118",
			"./ga": "5120",
			"./ga.js": "5120",
			"./gd": "f6b4",
			"./gd.js": "f6b4",
			"./gl": "8840",
			"./gl.js": "8840",
			"./gom-deva": "aaf2",
			"./gom-deva.js": "aaf2",
			"./gom-latn": "0caa",
			"./gom-latn.js": "0caa",
			"./gu": "e0c5",
			"./gu.js": "e0c5",
			"./he": "c7aa",
			"./he.js": "c7aa",
			"./hi": "dc4d",
			"./hi.js": "dc4d",
			"./hr": "4ba9",
			"./hr.js": "4ba9",
			"./hu": "5b14",
			"./hu.js": "5b14",
			"./hy-am": "d6b6",
			"./hy-am.js": "d6b6",
			"./id": "5038",
			"./id.js": "5038",
			"./is": "0558",
			"./is.js": "0558",
			"./it": "6e98",
			"./it-ch": "6f12",
			"./it-ch.js": "6f12",
			"./it.js": "6e98",
			"./ja": "079e",
			"./ja.js": "079e",
			"./jv": "b540",
			"./jv.js": "b540",
			"./ka": "201b",
			"./ka.js": "201b",
			"./kk": "6d79",
			"./kk.js": "6d79",
			"./km": "e81d",
			"./km.js": "e81d",
			"./kn": "3e92",
			"./kn.js": "3e92",
			"./ko": "22f8",
			"./ko.js": "22f8",
			"./ku": "2421",
			"./ku.js": "2421",
			"./ky": "9609",
			"./ky.js": "9609",
			"./lb": "440c",
			"./lb.js": "440c",
			"./lo": "b29d",
			"./lo.js": "b29d",
			"./lt": "26f9",
			"./lt.js": "26f9",
			"./lv": "b97c",
			"./lv.js": "b97c",
			"./me": "293c",
			"./me.js": "293c",
			"./mi": "688b",
			"./mi.js": "688b",
			"./mk": "6909",
			"./mk.js": "6909",
			"./ml": "02fb",
			"./ml.js": "02fb",
			"./mn": "958b",
			"./mn.js": "958b",
			"./mr": "39bd",
			"./mr.js": "39bd",
			"./ms": "ebe4",
			"./ms-my": "6403",
			"./ms-my.js": "6403",
			"./ms.js": "ebe4",
			"./mt": "1b45",
			"./mt.js": "1b45",
			"./my": "8689",
			"./my.js": "8689",
			"./nb": "6ce3",
			"./nb.js": "6ce3",
			"./ne": "3a39",
			"./ne.js": "3a39",
			"./nl": "facd",
			"./nl-be": "db29",
			"./nl-be.js": "db29",
			"./nl.js": "facd",
			"./nn": "b84c",
			"./nn.js": "b84c",
			"./oc-lnc": "167b",
			"./oc-lnc.js": "167b",
			"./pa-in": "f3ff",
			"./pa-in.js": "f3ff",
			"./pl": "8d57",
			"./pl.js": "8d57",
			"./pt": "f260",
			"./pt-br": "d2d4",
			"./pt-br.js": "d2d4",
			"./pt.js": "f260",
			"./ro": "972c",
			"./ro.js": "972c",
			"./ru": "957c",
			"./ru.js": "957c",
			"./sd": "6784",
			"./sd.js": "6784",
			"./se": "ffff",
			"./se.js": "ffff",
			"./si": "eda5",
			"./si.js": "eda5",
			"./sk": "7be6",
			"./sk.js": "7be6",
			"./sl": "8155",
			"./sl.js": "8155",
			"./sq": "c8f3",
			"./sq.js": "c8f3",
			"./sr": "cf1e",
			"./sr-cyrl": "13e9",
			"./sr-cyrl.js": "13e9",
			"./sr.js": "cf1e",
			"./ss": "52bd",
			"./ss.js": "52bd",
			"./sv": "5fbd",
			"./sv.js": "5fbd",
			"./sw": "74dc",
			"./sw.js": "74dc",
			"./ta": "3de5",
			"./ta.js": "3de5",
			"./te": "5cbb",
			"./te.js": "5cbb",
			"./tet": "576c",
			"./tet.js": "576c",
			"./tg": "3b1b",
			"./tg.js": "3b1b",
			"./th": "10e8",
			"./th.js": "10e8",
			"./tk": "5aff",
			"./tk.js": "5aff",
			"./tl-ph": "0f38",
			"./tl-ph.js": "0f38",
			"./tlh": "cf75",
			"./tlh.js": "cf75",
			"./tr": "0e81",
			"./tr.js": "0e81",
			"./tzl": "cf51",
			"./tzl.js": "cf51",
			"./tzm": "c109",
			"./tzm-latn": "b53d",
			"./tzm-latn.js": "b53d",
			"./tzm.js": "c109",
			"./ug-cn": "6117",
			"./ug-cn.js": "6117",
			"./uk": "ada2",
			"./uk.js": "ada2",
			"./ur": "5294",
			"./ur.js": "5294",
			"./uz": "2e8c",
			"./uz-latn": "010e",
			"./uz-latn.js": "010e",
			"./uz.js": "2e8c",
			"./vi": "2921",
			"./vi.js": "2921",
			"./x-pseudo": "fd7e",
			"./x-pseudo.js": "fd7e",
			"./yo": "7f33",
			"./yo.js": "7f33",
			"./zh-cn": "5c3a",
			"./zh-cn.js": "5c3a",
			"./zh-hk": "49ab",
			"./zh-hk.js": "49ab",
			"./zh-mo": "3a6c",
			"./zh-mo.js": "3a6c",
			"./zh-tw": "90ea",
			"./zh-tw.js": "90ea"
		};

		function s(t) {
			var e = a(t);
			return i(e)
		}

		function a(t) {
			if (!i.o(n, t)) {
				var e = new Error("Cannot find module '" + t + "'");
				throw e.code = "MODULE_NOT_FOUND", e
			}
			return n[t]
		}
		s.keys = function() {
			return Object.keys(n)
		}, s.resolve = a, t.exports = s, s.id = "4678"
	},
	"479f": function(t, e, i) {},
	"4b3c": function(t, e, i) {},
	6746: function(t, e, i) {},
	"686d": function(t, e, i) {
		"use strict";
		i("f9ce")
	},
	6907: function(t, e, i) {
		"use strict";
		i("4b3c")
	},
	"69ea": function(t, e, i) {},
	"6df1": function(t, e, i) {},
	"7a3a": function(t, e, i) {
		"use strict";
		i("9e65")
	},
	"7dc5": function(t, e, i) {
		"use strict";
		i("69ea")
	},
	"84b6": function(t, e, i) {
		"use strict";
		i("6df1")
	},
	8886: function(t, e, i) {
		"use strict";
		i("0792")
	},
	"8c2a": function(t, e, i) {},
	"99fa": function(t, e, i) {
		"use strict";
		i("479f")
	},
	"9e65": function(t, e, i) {},
	b3c8: function(t, e, i) {
		"use strict";
		i.r(e);
		i("cadf"), i("551c"), i("f751"), i("097d");
		var n = i("2b0e"),
			s = i("65fb"),
			a = function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("PageMobile", [i("SectionHomeFirst"), i("SectionProduct"), i("SectionGood"), i("SectionEarthStatic"), i("SectionCustomer")], 1)
			},
			c = [],
			l = function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("div", {
					class: t.b()
				}, [i("Container", [i("h3", {
					staticClass: "title"
				}, [t._v("\n      " + t._s(t.title) + "\n    ")]), i("a-carousel", {
					attrs: {
						"autoplay-speed": 5e3,
						autoplay: "",
						effect: "fade"
					}
				}, t._l(t.tabs, (function(e, n) {
					return i("div", {
						key: n
					}, t._l(t.tabs, (function(n, s) {
						return i("a-row", {
							directives: [{
								name: "show",
								rawName: "v-show",
								value: e.value === n.value,
								expression: "itemPanel.value === item.value"
							}],
							key: s,
							class: t.b("list"),
							attrs: {
								gutter: 2
							}
						}, t._l(n.items, (function(t, e) {
							return i("a-col", {
								key: e,
								attrs: {
									span: 8
								}
							}, [i("div", {
								staticClass: "item"
							}, [i("img", {
								attrs: {
									src: "images/customer/" + t.label + ".jpg"
								}
							})])])
						})), 1)
					})), 1)
				})), 0)], 1)], 1)
			},
			o = [],
			r = i("9ba2"),
			u = function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("div", {
					class: t.b(),
					attrs: {
						id: t.id
					}
				}, [i("div", {
					class: t.b("core")
				}, [i("ul", t._l(t.tabs, (function(e, n) {
					return i("li", {
						key: n,
						class: t.b("item", e.value === t.value ? "active" : "")
					}, [i("a", {
						on: {
							click: function(i) {
								return t.handleClick(e.value)
							}
						}
					}, [t._v("\n          " + t._s(e.label) + "\n        ")])])
				})), 0), i("div", {
					class: t.b("slide"),
					style: {
						left: t.slide.left + "px",
						width: t.slide.width + "px"
					}
				})])])
			},
			d = [],
			m = (i("c5f6"), Object(r["a"])({
				name: "TabsText",
				props: {
					value: [Number, String],
					tabs: {
						type: Array,
						default: function() {
							return []
						}
					}
				},
				data: function() {
					return {
						id: "T".concat(parseInt(1e6 * Math.random())),
						slide: {
							left: 0,
							right: 0,
							width: 0
						}
					}
				},
				mounted: function() {
					var t = this;
					setTimeout((function() {
						t.initBar()
					}), 750)
				},
				methods: {
					handleClick: function(t) {
						this.$emit("input", t), this.$emit("click", t), this.initBar()
					},
					initBar: function() {
						var t = this;
						this.$nextTick((function() {
							var e = t.$refs.pageItemActive,
								i = "";
							if (i = e && e[0] && e[0].$el ? e[0].$el : document.querySelector("#".concat(t.id, ".TabsText .TabsText__item--active")), i) {
								var n = i,
									s = n.offsetLeft,
									a = n.offsetWidth,
									c = 70,
									l = (a - c) / 2;
								t.slide.left = s + l, t.slide.width = c
							}
						}))
					}
				}
			})),
			f = m,
			v = (i("84b6"), i("2877")),
			b = Object(v["a"])(f, u, d, !1, null, null, null),
			h = b.exports,
			p = Object(r["a"])({
				name: "SectionCustomer",
				props: {
					title: {
						type: String,
						default: "客户案例"
					},
					showTabs: {
						type: Boolean,
						default: !0
					}
				},
				components: {
					TabsText: h
				},
				// 客户案例图片
				data: function() {
					return {
						activeName: "1",
						tabs: [{
							label: "政府企事业",
							value: "1",
							items: [{
								src: "",
								label: "福建省公安厅"
							}, {
								src: "",
								label: "上海进口博览会"
							}, {
								src: "",
								label: "上海市卫生和计划生育委员会"
							}, {
								src: "",
								label: "四川省文化厅"
							}, {
								src: "",
								label: "浙江音乐学院"
							}, {
								src: "",
								label: "闵行区公安局"
							}]
						}, {
							label: "金融",
							value: "2",
							items: [{
								src: "",
								label: "银联商务"
							}, {
								src: "",
								label: "华福证券"
							}, {
								src: "",
								label: "汇付天下"
							}, {
								src: "",
								label: "你我贷"
							}, {
								src: "",
								label: "上海华瑞银行"
							}, {
								src: "",
								label: "宝付"
							}]
						}, {
							label: "互联网",
							value: "3",
							items: [{
								src: "",
								label: "巴比特"
							}, {
								src: "",
								label: "二三四五"
							}, {
								src: "",
								label: "环球黑卡"
							}, {
								src: "",
								label: "棋牌迷"
							}, {
								src: "",
								label: "朋游娱乐"
							}, {
								src: "",
								label: "上游网络"
							}]
						}, {
							label: "实体商业",
							value: "4",
							items: [{
								src: "",
								label: "Bose"
							}, {
								src: "",
								label: "百威"
							}, {
								src: "",
								label: "汉王"
							}, {
								src: "",
								label: "极草"
							}, {
								src: "",
								label: "葵花药业"
							}, {
								src: "",
								label: "长江经济联合发展集团股份有限公司"
							}]
						}]
					}
				}
			}),
			_ = p,
			j = (i("7a3a"), Object(v["a"])(_, l, o, !1, null, null, null)),
			g = j.exports,
			w = function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("SectionBase", {
					class: t.b("base"),
					staticStyle: {
						padding: "50px 0"
					},
					attrs: {
						title: "产品优势",
						"title-desc": ""
					}
				}, [i("Container", {
					staticStyle: {
						"min-width": "320px",
						width: "auto"
					}
				}, [i("a-row", t._l(t.list, (function(e, n) {
					return i("a-col", {
						key: n,
						attrs: {
							span: 24
						}
					}, [i("CardFeature", {
						staticStyle: {
							"margin-top": "6px"
						},
						attrs: {
							data: e,
							active: n === t.hoverIndex
						},
						on: {
							"on-active": function(e) {
								t.hoverIndex = n
							}
						}
					})], 1)
				})), 1)], 1)], 1)
			},
			x = [],
			y = function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("div", {
					class: t.b([t.active ? "active" : ""]),
					on: {
						click: t.handleOver,
						mouseout: t.handleOut
					}
				}, [i("img", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: t.active,
						expression: "active"
					}],
					class: t.b("bg"),
					attrs: {
						src: "images/index/advantage/" + t.data.bg + ".png"
					}
				}), i("img", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: t.active,
						expression: "active"
					}],
					class: t.b("bgHover"),
					attrs: {
						src: "images/index/advantage/" + t.data.bg + "_hover.png"
					}
				}), i("IconBase", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: !t.active,
						expression: "!active"
					}],
					class: t.b("icon"),
					attrs: {
						type: t.data.icon
					}
				}), i("IconBase", {
					class: t.b("icon"),
					attrs: {
						type: t.data.icon
					}
				}), t.active ? t._e() : i("IconBase", {
					class: t.b("icon"),
					attrs: {
						type: t.data.icon + "_2"
					}
				}), i("div", {
					class: t.b("body")
				}, [i("h3", {
					class: t.b("title")
				}, [t._v("\n      " + t._s(t.data.title) + "\n    ")]), i("p", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: t.active,
						expression: "active"
					}],
					class: t.b("desc")
				}, [t._v("\n      " + t._s(t.data.desc) + "\n    ")])])], 1)
			},
			k = [],
			S = i("7882"),
			I = Object(r["a"])({
				name: "CardFeature",
				components: {
					IconBase: S["a"]
				},
				props: {
					active: Boolean,
					data: {
						type: Object,
						default: function() {
							return {}
						}
					}
				},
				data: function() {
					return {
						time: null
					}
				},
				methods: {
					handleOver: function() {
						var t = this;
						this.active || (clearTimeout(this.time), this.time = setTimeout((function() {
							t.$emit("on-active")
						}), 0))
					},
					handleOut: function() {
						this.active || clearTimeout(this.time)
					}
				}
			}),
			O = I,
			D = (i("8886"), Object(v["a"])(O, y, k, !1, null, null, null)),
			C = D.exports,
			N = function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("div", {
					class: t.b([t.theme])
				}, [i("Container", [i("div", {
					class: t.b("header")
				}, [i("h3", {
					class: t.b("title")
				}, [t._v(t._s(t.title))]), i("p", {
					class: t.b("titleDesc")
				}, [t._v(t._s(t.titleDesc))])])]), t._t("default")], 2)
			},
			$ = [],
			E = Object(r["a"])({
				name: "SectionBase",
				props: {
					title: String,
					titleDesc: String,
					theme: {
						type: String,
						default: ""
					}
				}
			}),
			T = E,
			A = (i("142a"), Object(v["a"])(T, N, $, !1, null, null, null)),
			z = A.exports,
			B = Object(r["a"])({
				name: "SectionGoodMobile",
				components: {
					SectionBase: z,
					CardFeature: C,
					IconBase: S["a"]
				},
				data: function() {
					return {
						hoverIndex: 0,
						list: [{
							icon: "onestop_icon",
							title: "AI兜底抗D",
							desc: "基于大数据计算和机器学习能力建设了AI智能DDoS防护系统，同时在全球建设了10+个自主可控的核心清洗中心，单点具备Tb级的清洗能力，整体储备资源达到10Tb",
							bg: "onestop"
						}, {
							icon: "wholenet_icon",
							title: "全网联防联控",
							desc: "数十万业务系统每日产生PB级安全大数据，AI安全大脑实时威胁分析，动态调整防御模型，防护规则全网联动实时下发",
							bg: "wholenet"
						}, {
							icon: "compliance_icon",
							title: "满足合规贴合业务",
							desc: "对标网络安全法，具备信息安全等级保护认证，在满足等级保护要求的同时，智能解决业务风险，满足业务安全运营需求",
							bg: "compliance"
						}, {
							icon: "zerotrust_icon",
							title: "低误报精准拦截",
							desc: "WAF引擎采用智能语义分析算法，拥有极低的误报率，只对有效攻击进行拦截。",
							bg: "zerotrust"
						}, {
							icon: "fullscene_icon",
							title: "无感人机识别",
							desc: "专为CC攻击防护研发的第二代无感人机识别对抗算法，颠覆性突破国内传统领域的CC安全防护，100％无感防御“任何”CC攻击",
							bg: "fullscene"
						}, {
							icon: "server_icon",
							title: "低成本易使用",
							desc: "乐高式架构，自助式统一管理平台，功能模块按需开启、按量付费，简单易使用，无需维护，降低运维建设成本",
							bg: "server"
						}]
					}
				}
			}),
			L = B,
			F = (i("f17b"), Object(v["a"])(L, w, x, !1, null, null, null)),
			P = F.exports,
			M = function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("a-carousel", {
					attrs: {
						"autoplay-speed": 5e3,
						autoplay: !1
					}
				}, [i("div", {
					key: 1,
					ref: "box2",
					staticClass: "box2",
					on: {
						touchstart: t.start2,
						touchmove: t.move2,
						touchend: t.end2,
						click: function(e) {
							return t.linkActivity("/mobile-activity")
						}
					}
				}, [i("SectionFirst", {
					class: ["mobile-activity-11"],
					attrs: {
						"title-desc": ""
					}
				}, [i("transition", {
					attrs: {
						"enter-active-class": "animated fadeIn"
					}
				}, [i("img", {
					staticStyle: {
						width: "100%"
					},
					attrs: {
						src: "/images/index/mobile-action/2022701banner.jpg?" + Math.random()
							.toString(36)
							.substr(2)
					}
				})])], 1)], 1)])
			},
			H = [],
			V = (i("6b54"), i("06db"), function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("div", {
					class: t.b([t.theme])
				}, [t.cover ? i("div", {
					class: t.b("cover")
				}) : t._e(), t._t("warp"), i("Container", [t.loading ? i("a-skeleton") : t._e(), i("transition", {
					attrs: {
						"enter-active-class": "animated fadeInUp"
					}
				}, [i("div", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: !t.loading,
						expression: "!loading"
					}]
				}, [i("div", {
					class: t.b("header")
				}, [i("h1", {
					class: t.b("title")
				}, [t._v(t._s(t.title)), t._t("title")], 2), i("p", {
					class: t.b("titleDesc")
				}, [t._v(t._s(t.titleDesc))])]), t._t("img"), t._t("default")], 2)])], 1)], 2)
			}),
			Y = [],
			J = Object(r["a"])({
				name: "SectionFirst",
				props: {
					title: String,
					titleDesc: String,
					cover: Boolean,
					loading: Boolean,
					theme: {
						type: String,
						default: ""
					}
				}
			}),
			R = J,
			W = (i("bf29"), Object(v["a"])(R, V, Y, !1, null, null, null)),
			q = W.exports,
			G = function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("div", {
					class: t.b([t.type, t.size]),
					on: {
						click: t.handleClick
					}
				}, [t._t("default")], 2)
			},
			K = [],
			U = Object(r["a"])({
				name: "ButtonHome",
				props: {
					type: {
						tyle: String,
						default: "default"
					},
					size: {
						type: String,
						default: ""
					}
				},
				methods: {
					handleClick: function() {
						this.$emit("click")
					}
				}
			}),
			Q = U,
			X = (i("7dc5"), Object(v["a"])(Q, G, K, !1, null, null, null)),
			Z = X.exports,
			tt = i("c1df"),
			et = i.n(tt),
			it = Object(r["a"])({
				name: "SectionHomeFirst",
				components: {
					SectionFirst: q,
					ButtonHome: Z
				},
				data: function() {
					return {
						loading: !0,
						show: !1,
						longClick: 0,
						timeOutEvent: 0
					}
				},
				computed: {
					is_expire_date: function() {
						var t = et()()
							.format("YYYY-MM-DD HH:mm:ss"),
							e = et()("2021-10-01 00:00:00")
							.format("YYYY-MM-DD HH:mm:ss");
						return et()(t)
							.isBefore(e) || !1
					},
					_vesion: function() {
						return "?" + Math.random()
							.toString(36)
							.substr(2)
					}
				},
				methods: {
					handleFinish: function() {
						this.show = !0, this.loading = !1
					},
					start: function() {
						var t = this;
						this.longClick = 0, this.timeOutEvent = setTimeout((function() {
							t.longClick = 1
						}), 500)
					},
					move: function(t) {
						clearTimeout(this.timeOutEvent), this.timeOutEvent = 0, t.preventDefault()
					},
					end: function(t) {
						return clearTimeout(this.timeOutEvent), 0 !== this.timeOutEvent && 0 === this.longClick && this.linkActivity("baishan"), !1
					},
					start2: function() {
						var t = this;
						this.longClick = 0, this.timeOutEvent = setTimeout((function() {
							t.longClick = 1
						}), 500)
					},
					move2: function(t) {
						clearTimeout(this.timeOutEvent), this.timeOutEvent = 0, t.preventDefault()
					},
					end2: function(t) {
						return clearTimeout(this.timeOutEvent), 0 !== this.timeOutEvent && 0 === this.longClick && this.linkActivity("/mobile-activity"), !1
					},
					linkActivity: function(t) {
						t && ("baishan" === t && window.open("https://live.vhall.com/room/watch/367477616"), "/mobile-activity" === t && window.open
						/////////轮播图///////
						(window.location.origin + "/"))
					}
				}
			}),
			nt = it,
			st = (i("686d"), i("99fa"), Object(v["a"])(nt, M, H, !1, null, null, null)),
			at = st.exports,
			ct = function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("SectionBase", {
					class: t.b(),
					staticStyle: {
						"min-width": "320px",
						width: "100%",
						padding: "50px 0"
					},
					attrs: {
						title: "",
						"title-desc": ""
					}
				}, [i("Container", {
					staticStyle: {
						"min-width": "320px",
						width: "100%"
					}
				}, [i("TabsText", {
					attrs: {
						tabs: t.tabs
					},
					model: {
						value: t.active,
						callback: function(e) {
							t.active = e
						},
						expression: "active"
					}
				}), i("div", {
					class: t.b("header")
				}, [t._l(t.tabs[0].items, (function(e, n) {
					return i("div", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: 0 === t.active,
							expression: "active === 0"
						}],
						key: e.id,
						class: ["productItem", {
							active: Number(t.activeItem_1) === n
						}]
					}, [i("div", {
						staticClass: "title",
						on: {
							click: function(e) {
								return t.changeActiveItem("activeItem_1", n)
							}
						}
					}, [i("img", {
						staticClass: "icon",
						style: {
							"margin-top": e.icon_m_t + "px"
						},
						attrs: {
							src: "/images/index/untitledfolder/" + e.icon + ".png"
						}
					}), i("div", {
						staticClass: "title_text"
					}, [t._v("\n            " + t._s(e.title) + "\n            "), i("p", {
						staticClass: "title_desc"
					}, [t._v(t._s(e.titleDesc))])]), i("a-icon", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: Number(t.activeItem_1) !== n,
							expression: "Number(activeItem_1) !== index"
						}],
						staticClass: "updownIcon",
						attrs: {
							type: "down"
						}
					}), i("a-icon", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: Number(t.activeItem_1) === n,
							expression: "Number(activeItem_1) === index"
						}],
						staticClass: "updownIcon",
						attrs: {
							type: "up"
						}
					})], 1), i("div", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: Number(t.activeItem_1) === n,
							expression: "Number(activeItem_1) === index"
						}],
						staticClass: "item_body",
						on: {
							click: function(i) {
								return t.handleLink("/scdn.html", e.id)
							}
						}
					}, t._l(e.descList, (function(e, n) {
						return i("p", {
							key: n
						}, [t._v("\n            " + t._s(e) + "\n          ")])
					})), 0), i("img", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: Number(t.activeItem_1) === n,
							expression: "Number(activeItem_1) === index"
						}],
						staticClass: "icon_hover",
						attrs: {
							src: "/images/index/matrix/item_hover/" + e.icon + "_hover.png"
						}
					})])
				})), t._l(t.tabs[1].items, (function(e, n) {
					return i("div", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: 1 === t.active,
							expression: "active === 1"
						}],
						key: e.id,
						class: ["productItem", {
							active: Number(t.activeItem_2) === n
						}]
					}, [i("div", {
						staticClass: "title",
						on: {
							click: function(e) {
								return t.changeActiveItem("activeItem_2", n)
							}
						}
					}, [i("img", {
						staticClass: "icon",
						style: {
							"margin-top": e.icon_m_t + "px"
						},
						attrs: {
							src: "/images/index/untitledfolder/" + e.icon + ".png"
						}
					}), i("div", {
						staticClass: "title_text"
					}, [t._v("\n            " + t._s(e.title) + "\n            "), i("p", {
						staticClass: "title_desc"
					}, [t._v(t._s(e.titleDesc))])]), i("a-icon", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: Number(t.activeItem_2) !== n,
							expression: "Number(activeItem_2) !== index"
						}],
						staticClass: "updownIcon",
						attrs: {
							type: "down"
						}
					}), i("a-icon", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: Number(t.activeItem_2) === n,
							expression: "Number(activeItem_2) === index"
						}],
						staticClass: "updownIcon",
						attrs: {
							type: "up"
						}
					})], 1), i("div", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: Number(t.activeItem_2) === n,
							expression: "Number(activeItem_2) === index"
						}],
						staticClass: "item_body",
						on: {
							click: function(i) {
							    //// 应用按钮跳转 /////
								return t.handleLink("/scdn.html", e.id)
							}
						}
					}, [t._l(e.descList, (function(e, n) {
						return i("p", {
							key: n
						}, [t._v("\n            " + t._s(e) + "\n          ")])
					})), i("img", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: Number(t.activeItem_2) === n,
							expression: "Number(activeItem_2) === index"
						}],
						staticClass: "icon_hover",
						attrs: {
							src: "/images/index/matrix/item_hover/" + e.icon + "_hover.png"
						}
					})], 2)])
				}))], 2), i("div", {
					class: t.b("core")
				}, [i("img", {
					staticClass: "main",
					attrs: {
						src: "/images/index/matrix/item/architecture.png"
					}
				})])], 1)], 1)
			},
			lt = [],
			ot = function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("div", {
					class: t.b([t.active ? "active" : ""])
				}, [i("IconFloat", {
					attrs: {
						type: t.data.icon
					}
				}), i("div", {
					class: t.b("core"),
					on: {
						mouseover: t.handleOver,
						mouseout: t.handleOut,
						click: function(e) {
							return t.handleLink(t.active, t.data.id)
						}
					}
				}, [i("div", {
					class: t.b("header")
				}, [i("h3", {
					class: t.b("title")
				}, [t._v(t._s(t.data.title))]), i("p", {
					class: t.b("titleDesc")
				}, [t._v(t._s(t.data.titleDesc))])]), i("div", {
					class: t.b("body")
				}, t._l(t.data.descList, (function(e, n) {
					return i("p", {
						key: n
					}, [t._v("\n        " + t._s(e) + "\n      ")])
				})), 0), i("img", {
					class: t.b("bg"),
					attrs: {
						src: "/images/index/matrix/item_hover/" + t.data.icon + "_hover.png"
					}
				})])], 1)
			},
			rt = [],
			ut = (i("b54a"), function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("div", {
					class: t.b()
				}, [i("div", {
					staticClass: "casecade-1"
				}), i("div", {
					staticClass: "casecade-2"
				}, [t._t("default"), t.type ? i("img", {
					attrs: {
						src: "/images/icon/" + t.type + "_icon.svg",
						alt: ""
					}
				}) : t._e()], 2)])
			}),
			dt = [],
			mt = Object(r["a"])({
				name: "IconFloat",
				props: {
					type: String
				}
			}),
			ft = mt,
			vt = (i("bf91"), Object(v["a"])(ft, ut, dt, !1, null, null, null)),
			bt = vt.exports,
			ht = Object(r["a"])({
				name: "ItemProduct",
				components: {
					IconFloat: bt
				},
				props: {
					data: Object,
					active: Boolean,
					link: String
				},
				data: function() {
					return {
						time: null
					}
				},
				methods: {
					handleOver: function() {
						var t = this;
						this.active || (clearTimeout(this.time), this.time = setTimeout((function() {
							t.$emit("on-active")
						}), 100))
					},
					handleOut: function() {
						this.active
					},
					handleLink: function(t, e) {
						if (this.link && e) {
							var i = JSON.parse(JSON.stringify(this.link));
							localStorage.setItem("HomeLinkID", e), window.open(window.location.origin + i)
						}
					}
				}
			}),
			pt = ht,
			_t = (i("0902"), Object(v["a"])(pt, ot, rt, !1, null, null, null)),
			jt = _t.exports,
			gt = [{
				label: "应用安全",
				value: 0,
				items: [{
					id: "dns",
					icon: "dns",
					icon_m_t: "-15",
					title: "DNS解析",
					titleDesc: "DNS",
					descList: ["多重灾备机制", "运营商缓存刷新", "按需定制"]
				}, {
					id: "scan",
					icon: "scan",
					icon_m_t: "-15",
					title: "扫描观测",
					titleDesc: "Scan+",
					descList: ["主动+被动式检测", "闭环可用性监测", "全站监控"]
				}, {
					id: "reliablity",
					icon: "reliablity",
					icon_m_t: "-23",
					title: "性能优化",
					titleDesc: "Reliability",
					descList: ["全球负载均衡", "协议/性能/页面优化", "智能调度"]
				}, {
					id: "webwall",
					icon: "webwall",
					icon_m_t: "-28",
					title: "Web 应用防火墙",
					titleDesc: "AppWall",
					descList: ["AI+规则双引擎", "100%篡改防护", "精准访问控制"]
				}, {
					id: "scdnsdk",
					icon: "scdnsdk",
					icon_m_t: "-15",
					title: "WAF SDK",
					titleDesc: "Client & Mobile",
					descList: ["链路加速/弱网加速", "防篡改/防外挂/防薅羊毛", "防漏洞/防入侵"]
				}]
			}, {
				label: "抗DDoS",
				value: 1,
				items: [{
					id: "dnsanti",
					icon: "dnsanti",
					icon_m_t: "-16",
					title: "高防 DNS",
					titleDesc: "AntiDDoS DNS",
					descList: ["全力清洗查询攻击", "全力清洗DDoS攻击", "支持按需定制兜底防御"]
				}, {
					id: "monitor",
					icon: "monitor",
					icon_m_t: "-13",
					title: "攻击监测",
					titleDesc: "DDoS Monitoring",
					descList: ["DDoS攻击事件监测告警", "行业DDoS攻击报告"]
				}, {
					id: "ipanti",
					icon: "ipanti",
					icon_m_t: "-15",
					title: "高防 IP",
					titleDesc: "AntiDDoS IP",
					descList: ["资源全球覆盖", "防御策略灵活", "无计量防御"]
				}, {
					id: "wash",
					icon: "wash",
					icon_m_t: "-26",
					title: "清洗系统",
					titleDesc: "AntiDDoS System & Hardware",
					descList: ["低成本灵活易扩展", "支持旁路、串联等部署模式", "多维防御策略"]
				}, {
					id: "mobilesdk",
					icon: "mobilesdk",
					icon_m_t: "-13",
					title: "AntiDDoS SDK",
					titleDesc: "Client & Mobile",
					descList: ["DDoS免疫", "链路加密", "精准溯源"]
				}]
			}],
			wt = Object(r["a"])({
				name: "SectionProduct",
				components: {
					SectionBase: z,
					TabsText: h,
					ItemProduct: jt,
					IconFloat: bt
				},
				data: function() {
					return {
						active: 0,
						activeItem_1: 0,
						activeItem_2: 0,
						hoverId: "dns",
						items: [{
							id: "dns",
							top: 151,
							left: 100,
							index: 3
						}, {
							id: "scan",
							top: 324,
							left: 372,
							index: 3
						}, {
							id: "scdnsdk",
							top: 441,
							left: 470,
							index: 3
						}, {
							id: "webwall",
							top: 263,
							left: 77,
							index: 3
						}, {
							id: "reliablity",
							top: 362,
							left: 195,
							index: 4
						}, {
							id: "ipanti",
							top: -63,
							left: 385,
							index: 3
						}, {
							id: "mobilesdk",
							top: -3,
							left: 613,
							index: 5
						}, {
							id: "dnsanti",
							top: 58,
							left: 768,
							index: 3
						}, {
							id: "monitor",
							top: -87,
							left: 564,
							index: 3
						}, {
							id: "wash",
							top: 168,
							left: 782,
							index: 4
						}],
						tabs: gt,
						time: null
					}
				},
				watch: {
					active: function(t) {
						this.handleItemActive(), this.handleClickFirst(t)
					}
				},
				methods: {
					handleClickFirst: function(t) {
						var e = this;
						clearTimeout(this.time), this.time = setTimeout((function() {
							e.hoverId = e.tabs[t].items[0].id
						}), 1e3)
					},
					handleItemActive: function(t) {
						this.hoverId = t
					},
					changeActiveItem: function(t, e) {
						"activeItem_1" === t && (this.activeItem_1 = e), "activeItem_2" === t && (this.activeItem_2 = e)
					},
					handleLink: function(t, e) {
						if (t && e) {
							var i = JSON.parse(JSON.stringify(t));
							localStorage.setItem("HomeLinkID", e), window.open(window.location.origin + i)
						}
					}
				}
			}),
			xt = wt,
			yt = (i("0026"), Object(v["a"])(xt, ct, lt, !1, null, null, null)),
			kt = yt.exports,
			St = function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("SectionBase", {
					class: t.b(),
					attrs: {
						theme: "dark",
						title: "安全洞见 全网感知"
					}
				}, [i("lazy-component", {
					on: {
						show: t.handler
					}
				}), i("Container", [i("div", [i("a-row", [i("a-col", {
					attrs: {
						span: 24
					},
					on: {
						click: function(e) {
							return t.handlelink("http://ssa.yundun.com/cc")
						}
					}
				}, [i("ItemNumberAnimate", {
					staticClass: "Value",
					attrs: {
						unit: "次"
					},
					model: {
						value: t.indexs["cc"].value,
						callback: function(e) {
							t.$set(t.indexs["cc"], "value", e)
						},
						expression: "indexs['cc'].value"
					}
				}, [i("template", {
					slot: "title"
				}, [t._v("\n              今日\n              "), i("strong", [t._v("CC")]), t._v("\n              攻击次数\n            ")])], 2)], 1), i("a-col", {
					attrs: {
						span: 24
					},
					on: {
						click: function(e) {
							return t.handlelink("http://ssa.yundun.com/waf")
						}
					}
				}, [i("ItemNumberAnimate", {
					staticClass: "Value",
					attrs: {
						unit: "次"
					},
					model: {
						value: t.indexs["waf"].value,
						callback: function(e) {
							t.$set(t.indexs["waf"], "value", e)
						},
						expression: "indexs['waf'].value"
					}
				}, [i("template", {
					slot: "title"
				}, [t._v("\n              今日\n              "), i("strong", [t._v("WAF")]), t._v("\n              攻击次数\n            ")])], 2)], 1), i("a-col", {
					attrs: {
						span: 24
					},
					on: {
						click: function(e) {
							return t.handlelink("http://ssa.yundun.com/ddos")
						}
					}
				}, [i("ItemNumberAnimate", {
					staticClass: "Value",
					attrs: {
						unit: t.indexs["ddos"].unit
					},
					model: {
						value: t.indexs["ddos"].value,
						callback: function(e) {
							t.$set(t.indexs["ddos"], "value", e)
						},
						expression: "indexs['ddos'].value"
					}
				}, [i("template", {
					slot: "title"
				}, [t._v("\n              今日\n              "), i("strong", [t._v("DDoS")]), t._v("\n              攻击峰值\n            ")])], 2)], 1)], 1)], 1), i("div", {
					class: t.b("body")
				}, [i("img", {
					class: t.b("core"),
					attrs: {
						src: "/images/index/earth/earth.png",
						alt: ""
					}
				})])])], 1)
			},
			It = [],
			Ot = (i("96cf"), i("1da1")),
			Dt = function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("div", {
					class: t.b()
				}, [i("a-input-search", {
					attrs: {
						placeholder: "输入IP:"
					},
					on: {
						search: t.onSearch
					}
				})], 1)
			},
			Ct = [],
			Nt = Object(r["a"])({
				name: "SectionSearch",
				methods: {
					onSearch: function() {}
				}
			}),
			$t = Nt,
			Et = (i("6907"), Object(v["a"])($t, Dt, Ct, !1, null, null, null)),
			Tt = Et.exports,
			At = function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("div", {
					class: t.b()
				}, [i("div", {
					class: t.b("core")
				}, [i("h3", {
					class: t.b("value")
				}, [i("AnimatedNumber", {
					attrs: {
						value: t.value,
						"format-value": t.formatValue
					}
				})], 1), i("span", {
					class: t.b("unit")
				}, [t._v("\n      " + t._s(t.unit) + "\n    ")])]), i("div", {
					class: t.b("title")
				}, [t._t("title")], 2), i("div", {
					class: t.b("more")
				}, [t._t("more")], 2)])
			},
			zt = [];
		i("7514"), i("3835"), i("28a5"), i("a481");

		function Bt(t) {
			var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
			if (/[^0-9\.]/.test(t)) return "0";
			if (null === t || "" === t) return "0";
			t = t.toString()
				.replace(/^(\d*)$/, "$1."), t = (t + "00")
				.replace(/(\d*\.\d\d)\d*/, "$1"), t = t.replace(".", ",");
			var i = /(\d)(\d{3},)/;
			while (i.test(t)) t = t.replace(i, "$1,$2");
			if (t = t.replace(/,(\d\d)$/, ".$1"), 0 === e) {
				var n = t.split(".");
				"00" === n[1] && (t = n[0])
			}
			return t
		}
		var Lt = function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("div", [t._v("\n  " + t._s(t.viewNumber) + "\n")])
			},
			Ft = [],
			Pt = {
				props: {
					value: Number,
					formatValue: Function
				},
				data: function() {
					return {
						viewNumber: 0,
						list: [],
						frame: 0,
						frameCount: 100,
						interval: null
					}
				},
				watch: {
					value: function(t, e) {
						this.update(t, e)
					}
				},
				mounted: function() {
					this.viewNumber = this.formatValue(this.value)
				},
				methods: {
					update: function(t, e) {
						var i = this;
						clearInterval(this.interval);
						for (var n = Math.abs(t - e) / this.frameCount, s = [], a = 0; a <= this.frameCount; a++) s.push(e + n * a);
						this.list = s, this.interval = setInterval((function() {
							i.startAnimate()
						}), 10)
					},
					startAnimate: function() {
						this.viewNumber = this.formatValue(this.list[this.frame]), this.frame === this.frameCount ? (clearInterval(this.interval), this.frame = 0) : this.frame++
					}
				}
			},
			Mt = Pt,
			Ht = Object(v["a"])(Mt, Lt, Ft, !1, null, null, null),
			Vt = Ht.exports,
			Yt = Object(r["a"])({
				name: "ItemNumberAnimate",
				components: {
					AnimatedNumber: Vt
				},
				props: {
					value: [String, Number],
					unit: String
				},
				methods: {
					formatValue: function(t) {
						return Bt(parseInt(t))
					}
				}
			}),
			Jt = Yt,
			Rt = (i("f1b1"), Object(v["a"])(Jt, At, zt, !1, null, null, null)),
			Wt = Rt.exports,
			qt = Object(r["a"])({
				name: "SectionEarthStatic",
				components: {
					SectionBase: z,
					InputSearch: Tt,
					ItemNumberAnimate: Wt
				},
				data: function() {
					return {
						loading: !0,
						earthReady: !1,
						show: !1,
						indexs: {
							cc: {
								unit: "",
								value: 0
							},
							waf: {
								unit: "",
								value: 0
							},
							ddos: {
								unit: "Mbps",
								value: 0
							}
						}
					}
				},
				methods: {
					handler: function(t) {
						var e = this;
						this.show = !0, this.initData(), this.earthReady && setTimeout((function() {
							e.$refs.Earth.init(), e.loading = !1
						}), 1500)
					},
					initData: function() {
						var t = this;
						return Object(Ot["a"])(regeneratorRuntime.mark((function e() {
							var i;
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										return e.next = 2, t.Fetch.get("V4/site.today.report.allplat");
									case 2:
										i = e.sent, t.indexs.cc.value = i.cc, t.indexs.waf.value = i.waf, t.indexs.ddos.value = i.ddos;
									case 6:
									case "end":
										return e.stop()
								}
							}), e)
						})))()
					},
					handlelink: function(t) {
						console.log(t), t && window.open(t)
					}
				}
			}),
			Gt = qt,
			Kt = (i("b48f"), Object(v["a"])(Gt, St, It, !1, null, null, null)),
			Ut = Kt.exports,
			Qt = {
				components: {
					SectionHomeFirst: at,
					SectionCustomer: g,
					SectionGood: P,
					SectionProduct: kt,
					SectionEarthStatic: Ut
				}
			},
			Xt = Qt,
			Zt = Object(v["a"])(Xt, a, c, !1, null, null, null),
			te = Zt.exports,
			ee = Object(s["a"])();
		new n["default"]({
			el: "#root",
			store: ee,
			components: {
				App: te
			},
			render: function(t) {
				return t(te)
			}
		})
	},
	b48f: function(t, e, i) {
		"use strict";
		i("ca2d")
	},
	b5ed: function(t, e, i) {},
	b869: function(t, e, i) {},
	bf29: function(t, e, i) {
		"use strict";
		i("4052")
	},
	bf91: function(t, e, i) {
		"use strict";
		i("b869")
	},
	ca2d: function(t, e, i) {},
	f17b: function(t, e, i) {
		"use strict";
		i("3efb")
	},
	f1b1: function(t, e, i) {
		"use strict";
		i("b5ed")
	},
	f9ce: function(t, e, i) {}
});