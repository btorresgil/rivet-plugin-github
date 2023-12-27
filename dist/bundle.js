var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};

// src/octokit/browser.js
var browser_exports = {};
__export(browser_exports, {
  EOL: () => B,
  arch: () => O,
  cpus: () => b,
  default: () => C,
  endianness: () => L,
  freemem: () => I,
  getNetworkInterfaces: () => M,
  homedir: () => q,
  hostname: () => k,
  loadavg: () => y,
  networkInterfaces: () => D,
  platform: () => U,
  release: () => V,
  tmpDir: () => j,
  tmpdir: () => X,
  totalmem: () => N,
  type: () => x,
  uptime: () => A
});
var l = Object.create;
var f = Object.defineProperty;
var _ = Object.getOwnPropertyDescriptor;
var h = Object.getOwnPropertyNames;
var g = Object.getPrototypeOf;
var w = Object.prototype.hasOwnProperty;
var v = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports);
var E = (n, e) => {
  for (var r in e)
    f(n, r, { get: e[r], enumerable: true });
};
var a = (n, e, r, c) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let i of h(e))
      !w.call(n, i) && i !== r && f(n, i, { get: () => e[i], enumerable: !(c = _(e, i)) || c.enumerable });
  return n;
};
var u = (n, e, r) => (a(n, e, "default"), r && a(r, e, "default"));
var s = (n, e, r) => (r = n != null ? l(g(n)) : {}, a(e || !n || !n.__esModule ? f(r, "default", { value: n, enumerable: true }) : r, n));
var m = v((t) => {
  t.endianness = function() {
    return "LE";
  };
  t.hostname = function() {
    return typeof location < "u" ? location.hostname : "";
  };
  t.loadavg = function() {
    return [];
  };
  t.uptime = function() {
    return 0;
  };
  t.freemem = function() {
    return Number.MAX_VALUE;
  };
  t.totalmem = function() {
    return Number.MAX_VALUE;
  };
  t.cpus = function() {
    return [];
  };
  t.type = function() {
    return "Browser";
  };
  t.release = function() {
    return typeof navigator < "u" ? navigator.appVersion : "";
  };
  t.networkInterfaces = t.getNetworkInterfaces = function() {
    return {};
  };
  t.arch = function() {
    return "javascript";
  };
  t.platform = function() {
    return "browser";
  };
  t.tmpdir = t.tmpDir = function() {
    return "/tmp";
  };
  t.EOL = `
`;
  t.homedir = function() {
    return "/";
  };
});
var o = {};
E(o, { EOL: () => B, arch: () => O, cpus: () => b, default: () => C, endianness: () => L, freemem: () => I, getNetworkInterfaces: () => M, homedir: () => q, hostname: () => k, loadavg: () => y, networkInterfaces: () => D, platform: () => U, release: () => V, tmpDir: () => j, tmpdir: () => X, totalmem: () => N, type: () => x, uptime: () => A });
var d = s(m());
u(o, s(m()));
var { endianness: L, hostname: k, loadavg: y, uptime: A, freemem: I, totalmem: N, cpus: b, type: x, release: V, networkInterfaces: D, getNetworkInterfaces: M, arch: O, platform: U, tmpdir: X, tmpDir: j, EOL: B, homedir: q } = d;
var { default: p, ...z } = d;
var C = p !== void 0 ? p : z;

// src/octokit/octokit.bundle.mjs
(() => {
  var a2 = typeof Reflect == "object" ? Reflect : null, g2 = a2 && typeof a2.apply == "function" ? a2.apply : function(e, t, r) {
    return Function.prototype.apply.call(e, t, r);
  }, p2;
  a2 && typeof a2.ownKeys == "function" ? p2 = a2.ownKeys : Object.getOwnPropertySymbols ? p2 = function(e) {
    return Object.getOwnPropertyNames(e).concat(
      Object.getOwnPropertySymbols(e)
    );
  } : p2 = function(e) {
    return Object.getOwnPropertyNames(e);
  };
  function D2(n) {
    console && console.warn && console.warn(n);
  }
  var w2 = Number.isNaN || function(e) {
    return e !== e;
  };
  function s2() {
    L3.call(this);
  }
  s2.EventEmitter = s2;
  s2.prototype._events = void 0;
  s2.prototype._eventsCount = 0;
  s2.prototype._maxListeners = void 0;
  var y2 = 10;
  function d2(n) {
    if (typeof n != "function")
      throw new TypeError(
        'The "listener" argument must be of type Function. Received type ' + typeof n
      );
  }
  Object.defineProperty(s2, "defaultMaxListeners", {
    enumerable: true,
    get: function() {
      return y2;
    },
    set: function(n) {
      if (typeof n != "number" || n < 0 || w2(n))
        throw new RangeError(
          'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + n + "."
        );
      y2 = n;
    }
  });
  function L3() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
  }
  s2.init = L3;
  s2.prototype.setMaxListeners = function(e) {
    if (typeof e != "number" || e < 0 || w2(e))
      throw new RangeError(
        'The value of "n" is out of range. It must be a non-negative number. Received ' + e + "."
      );
    return this._maxListeners = e, this;
  };
  function b2(n) {
    return n._maxListeners === void 0 ? s2.defaultMaxListeners : n._maxListeners;
  }
  s2.prototype.getMaxListeners = function() {
    return b2(this);
  };
  s2.prototype.emit = function(e) {
    for (var t = [], r = 1; r < arguments.length; r++)
      t.push(arguments[r]);
    var i = e === "error", u2 = this._events;
    if (u2 !== void 0)
      i = i && u2.error === void 0;
    else if (!i)
      return false;
    if (i) {
      var o2;
      if (t.length > 0 && (o2 = t[0]), o2 instanceof Error)
        throw o2;
      var c = new Error("Unhandled error." + (o2 ? " (" + o2.message + ")" : ""));
      throw c.context = o2, c;
    }
    var l2 = u2[e];
    if (l2 === void 0)
      return false;
    if (typeof l2 == "function")
      g2(l2, this, t);
    else
      for (var m2 = l2.length, M3 = x2(l2, m2), r = 0; r < m2; ++r)
        g2(M3[r], this, t);
    return true;
  };
  function _2(n, e, t, r) {
    var i, u2, o2;
    if (d2(t), u2 = n._events, u2 === void 0 ? (u2 = n._events = /* @__PURE__ */ Object.create(null), n._eventsCount = 0) : (u2.newListener !== void 0 && (n.emit("newListener", e, t.listener ? t.listener : t), u2 = n._events), o2 = u2[e]), o2 === void 0)
      o2 = u2[e] = t, ++n._eventsCount;
    else if (typeof o2 == "function" ? o2 = u2[e] = r ? [t, o2] : [o2, t] : r ? o2.unshift(t) : o2.push(t), i = b2(n), i > 0 && o2.length > i && !o2.warned) {
      o2.warned = true;
      var c = new Error(
        "Possible EventEmitter memory leak detected. " + o2.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit"
      );
      c.name = "MaxListenersExceededWarning", c.emitter = n, c.type = e, c.count = o2.length, D2(c);
    }
    return n;
  }
  s2.prototype.addListener = function(e, t) {
    return _2(this, e, t, false);
  };
  s2.prototype.on = s2.prototype.addListener;
  s2.prototype.prependListener = function(e, t) {
    return _2(this, e, t, true);
  };
  function R() {
    if (!this.fired)
      return this.target.removeListener(this.type, this.wrapFn), this.fired = true, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
  }
  function E2(n, e, t) {
    var r = { fired: false, wrapFn: void 0, target: n, type: e, listener: t }, i = R.bind(r);
    return i.listener = t, r.wrapFn = i, i;
  }
  s2.prototype.once = function(e, t) {
    return d2(t), this.on(e, E2(this, e, t)), this;
  };
  s2.prototype.prependOnceListener = function(e, t) {
    return d2(t), this.prependListener(e, E2(this, e, t)), this;
  };
  s2.prototype.removeListener = function(e, t) {
    var r, i, u2, o2, c;
    if (d2(t), i = this._events, i === void 0)
      return this;
    if (r = i[e], r === void 0)
      return this;
    if (r === t || r.listener === t)
      --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, r.listener || t));
    else if (typeof r != "function") {
      for (u2 = -1, o2 = r.length - 1; o2 >= 0; o2--)
        if (r[o2] === t || r[o2].listener === t) {
          c = r[o2].listener, u2 = o2;
          break;
        }
      if (u2 < 0)
        return this;
      u2 === 0 ? r.shift() : N3(r, u2), r.length === 1 && (i[e] = r[0]), i.removeListener !== void 0 && this.emit("removeListener", e, c || t);
    }
    return this;
  };
  s2.prototype.off = s2.prototype.removeListener;
  s2.prototype.removeAllListeners = function(e) {
    var t, r, i;
    if (r = this._events, r === void 0)
      return this;
    if (r.removeListener === void 0)
      return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : r[e] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete r[e]), this;
    if (arguments.length === 0) {
      var u2 = Object.keys(r), o2;
      for (i = 0; i < u2.length; ++i)
        o2 = u2[i], o2 !== "removeListener" && this.removeAllListeners(o2);
      return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
    }
    if (t = r[e], typeof t == "function")
      this.removeListener(e, t);
    else if (t !== void 0)
      for (i = t.length - 1; i >= 0; i--)
        this.removeListener(e, t[i]);
    return this;
  };
  function O2(n, e, t) {
    var r = n._events;
    if (r === void 0)
      return [];
    var i = r[e];
    return i === void 0 ? [] : typeof i == "function" ? t ? [i.listener || i] : [i] : t ? P(i) : x2(i, i.length);
  }
  s2.prototype.listeners = function(e) {
    return O2(this, e, true);
  };
  s2.prototype.rawListeners = function(e) {
    return O2(this, e, false);
  };
  function C3(n, e) {
    return typeof n.listenerCount == "function" ? n.listenerCount(e) : s2.prototype.listenerCount.call(n, e);
  }
  s2.listenerCount = C3;
  s2.prototype.listenerCount = function(n) {
    var e = this._events;
    if (e !== void 0) {
      var t = e[n];
      if (typeof t == "function")
        return 1;
      if (t !== void 0)
        return t.length;
    }
    return 0;
  };
  s2.prototype.eventNames = function() {
    return this._eventsCount > 0 ? p2(this._events) : [];
  };
  function x2(n, e) {
    for (var t = new Array(e), r = 0; r < e; ++r)
      t[r] = n[r];
    return t;
  }
  function N3(n, e) {
    for (; e + 1 < n.length; e++)
      n[e] = n[e + 1];
    n.pop();
  }
  function P(n) {
    for (var e = new Array(n.length), t = 0; t < e.length; ++t)
      e[t] = n[t].listener || n[t];
    return e;
  }
  function v2(n) {
    let e = performance.now(), t = Math.floor(e / 1e3), r = Math.floor(e * 1e6 - t * 1e9);
    if (!n)
      return [t, r];
    let [i, u2] = n;
    return [t - i, r - u2];
  }
  v2.bigint = function() {
    let [n, e] = v2();
    return BigInt(n) * 1000000000n + BigInt(e);
  };
  var h2 = class extends s2 {
    constructor() {
      super();
      __publicField(this, "title", "browser");
      __publicField(this, "browser", true);
      __publicField(this, "env", {});
      __publicField(this, "argv", []);
      __publicField(this, "pid", 0);
      __publicField(this, "arch", "unknown");
      __publicField(this, "platform", "browser");
      __publicField(this, "version", "");
      __publicField(this, "versions", {});
      __publicField(this, "emitWarning", () => {
        throw new Error("process.emitWarning is not supported");
      });
      __publicField(this, "binding", () => {
        throw new Error("process.binding is not supported");
      });
      __publicField(this, "cwd", () => {
        throw new Error("process.cwd is not supported");
      });
      __publicField(this, "chdir", (e) => {
        throw new Error("process.chdir is not supported");
      });
      __publicField(this, "umask", () => 18);
      __publicField(this, "nextTick", (e, ...t) => queueMicrotask(() => e(...t)));
      __publicField(this, "hrtime", v2);
    }
  }, f2 = new h2();
  if (typeof Deno < "u") {
    f2.name = "deno", f2.browser = false, f2.pid = Deno.pid, f2.cwd = () => Deno.cwd(), f2.chdir = (e) => Deno.chdir(e), f2.arch = Deno.build.arch, f2.platform = Deno.build.os, f2.version = "v18.12.1", f2.versions = {
      node: "18.12.1",
      uv: "1.43.0",
      zlib: "1.2.11",
      brotli: "1.0.9",
      ares: "1.18.1",
      modules: "108",
      nghttp2: "1.47.0",
      napi: "8",
      llhttp: "6.0.10",
      openssl: "3.0.7+quic",
      cldr: "41.0",
      icu: "71.1",
      tz: "2022b",
      unicode: "14.0",
      ngtcp2: "0.8.1",
      nghttp3: "0.7.0",
      ...Deno.version
    }, f2.env = new Proxy(
      {},
      {
        get(e, t) {
          return Deno.env.get(String(t));
        },
        ownKeys: () => Reflect.ownKeys(Deno.env.toObject()),
        getOwnPropertyDescriptor: (e, t) => {
          let r = Deno.env.toObject();
          if (t in Deno.env.toObject()) {
            let i = { enumerable: true, configurable: true };
            return typeof t == "string" && (i.value = r[t]), i;
          }
        },
        set(e, t, r) {
          return Deno.env.set(String(t), String(r)), r;
        }
      }
    );
    let n = ["", "", ...Deno.args];
    Object.defineProperty(n, "0", { get: Deno.execPath }), Object.defineProperty(n, "1", {
      get: () => Deno.mainModule.startsWith("file:") ? new URL(Deno.mainModule).pathname : join(Deno.cwd(), "$deno$node.js")
    }), f2.argv = n;
  } else {
    let n = "/";
    f2.cwd = () => n, f2.chdir = (e) => n = e;
  }
  var j2 = f2;
  globalThis.__Process$ = j2;
})();
(() => {
  var Lt = Object.create, q2 = Object.defineProperty, _t2 = Object.getOwnPropertyDescriptor, xt = Object.getOwnPropertyNames, Ct = Object.getPrototypeOf, Mt = Object.prototype.hasOwnProperty, W = (p2, a2) => () => (a2 || p2((a2 = { exports: {} }).exports, a2), a2.exports), Pt = (p2, a2) => {
    for (var s2 in a2)
      q2(p2, s2, { get: a2[s2], enumerable: true });
  }, V3 = (p2, a2, s2, S2) => {
    if (a2 && typeof a2 == "object" || typeof a2 == "function")
      for (let b2 of xt(a2))
        !Mt.call(p2, b2) && b2 !== s2 && q2(p2, b2, {
          get: () => a2[b2],
          enumerable: !(S2 = _t2(a2, b2)) || S2.enumerable
        });
    return p2;
  }, $t = (p2, a2, s2) => (V3(p2, a2, "default"), s2 && V3(s2, a2, "default")), st2 = (p2, a2, s2) => (s2 = p2 != null ? Lt(Ct(p2)) : {}, V3(
    a2 || !p2 || !p2.__esModule ? q2(s2, "default", { value: p2, enumerable: true }) : s2,
    p2
  )), Nt = W((p2) => {
    "use strict";
    p2.byteLength = T, p2.toByteArray = $2, p2.fromByteArray = P;
    var a2 = [], s2 = [], S2 = typeof Uint8Array < "u" ? Uint8Array : Array, b2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (B3 = 0, c = b2.length; B3 < c; ++B3)
      a2[B3] = b2[B3], s2[b2.charCodeAt(B3)] = B3;
    var B3, c;
    s2[45] = 62, s2[95] = 63;
    function f2(h2) {
      var l2 = h2.length;
      if (l2 % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
      var w2 = h2.indexOf("=");
      w2 === -1 && (w2 = l2);
      var A2 = w2 === l2 ? 0 : 4 - w2 % 4;
      return [w2, A2];
    }
    function T(h2) {
      var l2 = f2(h2), w2 = l2[0], A2 = l2[1];
      return (w2 + A2) * 3 / 4 - A2;
    }
    function L3(h2, l2, w2) {
      return (l2 + w2) * 3 / 4 - w2;
    }
    function $2(h2) {
      var l2, w2 = f2(h2), A2 = w2[0], _2 = w2[1], E2 = new S2(L3(h2, A2, _2)), x2 = 0, M3 = _2 > 0 ? A2 - 4 : A2, O2;
      for (O2 = 0; O2 < M3; O2 += 4)
        l2 = s2[h2.charCodeAt(O2)] << 18 | s2[h2.charCodeAt(O2 + 1)] << 12 | s2[h2.charCodeAt(O2 + 2)] << 6 | s2[h2.charCodeAt(O2 + 3)], E2[x2++] = l2 >> 16 & 255, E2[x2++] = l2 >> 8 & 255, E2[x2++] = l2 & 255;
      return _2 === 2 && (l2 = s2[h2.charCodeAt(O2)] << 2 | s2[h2.charCodeAt(O2 + 1)] >> 4, E2[x2++] = l2 & 255), _2 === 1 && (l2 = s2[h2.charCodeAt(O2)] << 10 | s2[h2.charCodeAt(O2 + 1)] << 4 | s2[h2.charCodeAt(O2 + 2)] >> 2, E2[x2++] = l2 >> 8 & 255, E2[x2++] = l2 & 255), E2;
    }
    function m2(h2) {
      return a2[h2 >> 18 & 63] + a2[h2 >> 12 & 63] + a2[h2 >> 6 & 63] + a2[h2 & 63];
    }
    function U3(h2, l2, w2) {
      for (var A2, _2 = [], E2 = l2; E2 < w2; E2 += 3)
        A2 = (h2[E2] << 16 & 16711680) + (h2[E2 + 1] << 8 & 65280) + (h2[E2 + 2] & 255), _2.push(m2(A2));
      return _2.join("");
    }
    function P(h2) {
      for (var l2, w2 = h2.length, A2 = w2 % 3, _2 = [], E2 = 16383, x2 = 0, M3 = w2 - A2; x2 < M3; x2 += E2)
        _2.push(U3(h2, x2, x2 + E2 > M3 ? M3 : x2 + E2));
      return A2 === 1 ? (l2 = h2[w2 - 1], _2.push(a2[l2 >> 2] + a2[l2 << 4 & 63] + "==")) : A2 === 2 && (l2 = (h2[w2 - 2] << 8) + h2[w2 - 1], _2.push(a2[l2 >> 10] + a2[l2 >> 4 & 63] + a2[l2 << 2 & 63] + "=")), _2.join("");
    }
  }), jt = W((p2) => {
    p2.read = function(a2, s2, S2, b2, B3) {
      var c, f2, T = B3 * 8 - b2 - 1, L3 = (1 << T) - 1, $2 = L3 >> 1, m2 = -7, U3 = S2 ? B3 - 1 : 0, P = S2 ? -1 : 1, h2 = a2[s2 + U3];
      for (U3 += P, c = h2 & (1 << -m2) - 1, h2 >>= -m2, m2 += T; m2 > 0; c = c * 256 + a2[s2 + U3], U3 += P, m2 -= 8)
        ;
      for (f2 = c & (1 << -m2) - 1, c >>= -m2, m2 += b2; m2 > 0; f2 = f2 * 256 + a2[s2 + U3], U3 += P, m2 -= 8)
        ;
      if (c === 0)
        c = 1 - $2;
      else {
        if (c === L3)
          return f2 ? NaN : (h2 ? -1 : 1) * (1 / 0);
        f2 = f2 + Math.pow(2, b2), c = c - $2;
      }
      return (h2 ? -1 : 1) * f2 * Math.pow(2, c - b2);
    }, p2.write = function(a2, s2, S2, b2, B3, c) {
      var f2, T, L3, $2 = c * 8 - B3 - 1, m2 = (1 << $2) - 1, U3 = m2 >> 1, P = B3 === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, h2 = b2 ? 0 : c - 1, l2 = b2 ? 1 : -1, w2 = s2 < 0 || s2 === 0 && 1 / s2 < 0 ? 1 : 0;
      for (s2 = Math.abs(s2), isNaN(s2) || s2 === 1 / 0 ? (T = isNaN(s2) ? 1 : 0, f2 = m2) : (f2 = Math.floor(Math.log(s2) / Math.LN2), s2 * (L3 = Math.pow(2, -f2)) < 1 && (f2--, L3 *= 2), f2 + U3 >= 1 ? s2 += P / L3 : s2 += P * Math.pow(2, 1 - U3), s2 * L3 >= 2 && (f2++, L3 /= 2), f2 + U3 >= m2 ? (T = 0, f2 = m2) : f2 + U3 >= 1 ? (T = (s2 * L3 - 1) * Math.pow(2, B3), f2 = f2 + U3) : (T = s2 * Math.pow(2, U3 - 1) * Math.pow(2, B3), f2 = 0)); B3 >= 8; a2[S2 + h2] = T & 255, h2 += l2, T /= 256, B3 -= 8)
        ;
      for (f2 = f2 << B3 | T, $2 += B3; $2 > 0; a2[S2 + h2] = f2 & 255, h2 += l2, f2 /= 256, $2 -= 8)
        ;
      a2[S2 + h2 - l2] |= w2 * 128;
    };
  }), ht = W((p2) => {
    "use strict";
    var a2 = Nt(), s2 = jt(), S2 = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    p2.Buffer = f2, p2.SlowBuffer = _2, p2.INSPECT_MAX_BYTES = 50;
    var b2 = 2147483647;
    p2.kMaxLength = b2, f2.TYPED_ARRAY_SUPPORT = B3(), !f2.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
      "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
    );
    function B3() {
      try {
        let t = new Uint8Array(1), e = {
          foo: function() {
            return 42;
          }
        };
        return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), t.foo() === 42;
      } catch {
        return false;
      }
    }
    Object.defineProperty(f2.prototype, "parent", {
      enumerable: true,
      get: function() {
        if (f2.isBuffer(this))
          return this.buffer;
      }
    }), Object.defineProperty(f2.prototype, "offset", {
      enumerable: true,
      get: function() {
        if (f2.isBuffer(this))
          return this.byteOffset;
      }
    });
    function c(t) {
      if (t > b2)
        throw new RangeError(
          'The value "' + t + '" is invalid for option "size"'
        );
      let e = new Uint8Array(t);
      return Object.setPrototypeOf(e, f2.prototype), e;
    }
    function f2(t, e, n) {
      if (typeof t == "number") {
        if (typeof e == "string")
          throw new TypeError(
            'The "string" argument must be of type string. Received type number'
          );
        return m2(t);
      }
      return T(t, e, n);
    }
    f2.poolSize = 8192;
    function T(t, e, n) {
      if (typeof t == "string")
        return U3(t, e);
      if (ArrayBuffer.isView(t))
        return h2(t);
      if (t == null)
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t
        );
      if (N3(t, ArrayBuffer) || t && N3(t.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (N3(t, SharedArrayBuffer) || t && N3(t.buffer, SharedArrayBuffer)))
        return l2(t, e, n);
      if (typeof t == "number")
        throw new TypeError(
          'The "value" argument must not be of type number. Received type number'
        );
      let r = t.valueOf && t.valueOf();
      if (r != null && r !== t)
        return f2.from(r, e, n);
      let o2 = w2(t);
      if (o2)
        return o2;
      if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof t[Symbol.toPrimitive] == "function")
        return f2.from(t[Symbol.toPrimitive]("string"), e, n);
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t
      );
    }
    f2.from = function(t, e, n) {
      return T(t, e, n);
    }, Object.setPrototypeOf(f2.prototype, Uint8Array.prototype), Object.setPrototypeOf(f2, Uint8Array);
    function L3(t) {
      if (typeof t != "number")
        throw new TypeError('"size" argument must be of type number');
      if (t < 0)
        throw new RangeError(
          'The value "' + t + '" is invalid for option "size"'
        );
    }
    function $2(t, e, n) {
      return L3(t), t <= 0 ? c(t) : e !== void 0 ? typeof n == "string" ? c(t).fill(e, n) : c(t).fill(e) : c(t);
    }
    f2.alloc = function(t, e, n) {
      return $2(t, e, n);
    };
    function m2(t) {
      return L3(t), c(t < 0 ? 0 : A2(t) | 0);
    }
    f2.allocUnsafe = function(t) {
      return m2(t);
    }, f2.allocUnsafeSlow = function(t) {
      return m2(t);
    };
    function U3(t, e) {
      if ((typeof e != "string" || e === "") && (e = "utf8"), !f2.isEncoding(e))
        throw new TypeError("Unknown encoding: " + e);
      let n = E2(t, e) | 0, r = c(n), o2 = r.write(t, e);
      return o2 !== n && (r = r.slice(0, o2)), r;
    }
    function P(t) {
      let e = t.length < 0 ? 0 : A2(t.length) | 0, n = c(e);
      for (let r = 0; r < e; r += 1)
        n[r] = t[r] & 255;
      return n;
    }
    function h2(t) {
      if (N3(t, Uint8Array)) {
        let e = new Uint8Array(t);
        return l2(e.buffer, e.byteOffset, e.byteLength);
      }
      return P(t);
    }
    function l2(t, e, n) {
      if (e < 0 || t.byteLength < e)
        throw new RangeError('"offset" is outside of buffer bounds');
      if (t.byteLength < e + (n || 0))
        throw new RangeError('"length" is outside of buffer bounds');
      let r;
      return e === void 0 && n === void 0 ? r = new Uint8Array(t) : n === void 0 ? r = new Uint8Array(t, e) : r = new Uint8Array(t, e, n), Object.setPrototypeOf(r, f2.prototype), r;
    }
    function w2(t) {
      if (f2.isBuffer(t)) {
        let e = A2(t.length) | 0, n = c(e);
        return n.length === 0 || t.copy(n, 0, 0, e), n;
      }
      if (t.length !== void 0)
        return typeof t.length != "number" || X2(t.length) ? c(0) : P(t);
      if (t.type === "Buffer" && Array.isArray(t.data))
        return P(t.data);
    }
    function A2(t) {
      if (t >= b2)
        throw new RangeError(
          "Attempt to allocate Buffer larger than maximum size: 0x" + b2.toString(16) + " bytes"
        );
      return t | 0;
    }
    function _2(t) {
      return +t != t && (t = 0), f2.alloc(+t);
    }
    f2.isBuffer = function(t) {
      return t != null && t._isBuffer === true && t !== f2.prototype;
    }, f2.compare = function(t, e) {
      if (N3(t, Uint8Array) && (t = f2.from(t, t.offset, t.byteLength)), N3(e, Uint8Array) && (e = f2.from(e, e.offset, e.byteLength)), !f2.isBuffer(t) || !f2.isBuffer(e))
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        );
      if (t === e)
        return 0;
      let n = t.length, r = e.length;
      for (let o2 = 0, i = Math.min(n, r); o2 < i; ++o2)
        if (t[o2] !== e[o2]) {
          n = t[o2], r = e[o2];
          break;
        }
      return n < r ? -1 : r < n ? 1 : 0;
    }, f2.isEncoding = function(t) {
      switch (String(t).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    }, f2.concat = function(t, e) {
      if (!Array.isArray(t))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (t.length === 0)
        return f2.alloc(0);
      let n;
      if (e === void 0)
        for (e = 0, n = 0; n < t.length; ++n)
          e += t[n].length;
      let r = f2.allocUnsafe(e), o2 = 0;
      for (n = 0; n < t.length; ++n) {
        let i = t[n];
        if (N3(i, Uint8Array))
          o2 + i.length > r.length ? (f2.isBuffer(i) || (i = f2.from(i)), i.copy(r, o2)) : Uint8Array.prototype.set.call(r, i, o2);
        else if (f2.isBuffer(i))
          i.copy(r, o2);
        else
          throw new TypeError(
            '"list" argument must be an Array of Buffers'
          );
        o2 += i.length;
      }
      return r;
    };
    function E2(t, e) {
      if (f2.isBuffer(t))
        return t.length;
      if (ArrayBuffer.isView(t) || N3(t, ArrayBuffer))
        return t.byteLength;
      if (typeof t != "string")
        throw new TypeError(
          'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t
        );
      let n = t.length, r = arguments.length > 2 && arguments[2] === true;
      if (!r && n === 0)
        return 0;
      let o2 = false;
      for (; ; )
        switch (e) {
          case "ascii":
          case "latin1":
          case "binary":
            return n;
          case "utf8":
          case "utf-8":
            return G(t).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return n * 2;
          case "hex":
            return n >>> 1;
          case "base64":
            return it(t).length;
          default:
            if (o2)
              return r ? -1 : G(t).length;
            e = ("" + e).toLowerCase(), o2 = true;
        }
    }
    f2.byteLength = E2;
    function x2(t, e, n) {
      let r = false;
      if ((e === void 0 || e < 0) && (e = 0), e > this.length || ((n === void 0 || n > this.length) && (n = this.length), n <= 0) || (n >>>= 0, e >>>= 0, n <= e))
        return "";
      for (t || (t = "utf8"); ; )
        switch (t) {
          case "hex":
            return Et(this, e, n);
          case "utf8":
          case "utf-8":
            return H2(this, e, n);
          case "ascii":
            return Bt(this, e, n);
          case "latin1":
          case "binary":
            return mt2(this, e, n);
          case "base64":
            return dt(this, e, n);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return vt(this, e, n);
          default:
            if (r)
              throw new TypeError("Unknown encoding: " + t);
            t = (t + "").toLowerCase(), r = true;
        }
    }
    f2.prototype._isBuffer = true;
    function M3(t, e, n) {
      let r = t[e];
      t[e] = t[n], t[n] = r;
    }
    f2.prototype.swap16 = function() {
      let t = this.length;
      if (t % 2 !== 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (let e = 0; e < t; e += 2)
        M3(this, e, e + 1);
      return this;
    }, f2.prototype.swap32 = function() {
      let t = this.length;
      if (t % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (let e = 0; e < t; e += 4)
        M3(this, e, e + 3), M3(this, e + 1, e + 2);
      return this;
    }, f2.prototype.swap64 = function() {
      let t = this.length;
      if (t % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let e = 0; e < t; e += 8)
        M3(this, e, e + 7), M3(this, e + 1, e + 6), M3(this, e + 2, e + 5), M3(this, e + 3, e + 4);
      return this;
    }, f2.prototype.toString = function() {
      let t = this.length;
      return t === 0 ? "" : arguments.length === 0 ? H2(this, 0, t) : x2.apply(this, arguments);
    }, f2.prototype.toLocaleString = f2.prototype.toString, f2.prototype.equals = function(t) {
      if (!f2.isBuffer(t))
        throw new TypeError("Argument must be a Buffer");
      return this === t ? true : f2.compare(this, t) === 0;
    }, f2.prototype.inspect = function() {
      let t = "", e = p2.INSPECT_MAX_BYTES;
      return t = this.toString("hex", 0, e).replace(/(.{2})/g, "$1 ").trim(), this.length > e && (t += " ... "), "<Buffer " + t + ">";
    }, S2 && (f2.prototype[S2] = f2.prototype.inspect), f2.prototype.compare = function(t, e, n, r, o2) {
      if (N3(t, Uint8Array) && (t = f2.from(t, t.offset, t.byteLength)), !f2.isBuffer(t))
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t
        );
      if (e === void 0 && (e = 0), n === void 0 && (n = t ? t.length : 0), r === void 0 && (r = 0), o2 === void 0 && (o2 = this.length), e < 0 || n > t.length || r < 0 || o2 > this.length)
        throw new RangeError("out of range index");
      if (r >= o2 && e >= n)
        return 0;
      if (r >= o2)
        return -1;
      if (e >= n)
        return 1;
      if (e >>>= 0, n >>>= 0, r >>>= 0, o2 >>>= 0, this === t)
        return 0;
      let i = o2 - r, u2 = n - e, g2 = Math.min(i, u2), R = this.slice(r, o2), d2 = t.slice(e, n);
      for (let y2 = 0; y2 < g2; ++y2)
        if (R[y2] !== d2[y2]) {
          i = R[y2], u2 = d2[y2];
          break;
        }
      return i < u2 ? -1 : u2 < i ? 1 : 0;
    };
    function O2(t, e, n, r, o2) {
      if (t.length === 0)
        return -1;
      if (typeof n == "string" ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, X2(n) && (n = o2 ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
        if (o2)
          return -1;
        n = t.length - 1;
      } else if (n < 0)
        if (o2)
          n = 0;
        else
          return -1;
      if (typeof e == "string" && (e = f2.from(e, r)), f2.isBuffer(e))
        return e.length === 0 ? -1 : Z(t, e, n, r, o2);
      if (typeof e == "number")
        return e = e & 255, typeof Uint8Array.prototype.indexOf == "function" ? o2 ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : Z(t, [e], n, r, o2);
      throw new TypeError("val must be string, number or Buffer");
    }
    function Z(t, e, n, r, o2) {
      let i = 1, u2 = t.length, g2 = e.length;
      if (r !== void 0 && (r = String(r).toLowerCase(), r === "ucs2" || r === "ucs-2" || r === "utf16le" || r === "utf-16le")) {
        if (t.length < 2 || e.length < 2)
          return -1;
        i = 2, u2 /= 2, g2 /= 2, n /= 2;
      }
      function R(y2, v2) {
        return i === 1 ? y2[v2] : y2.readUInt16BE(v2 * i);
      }
      let d2;
      if (o2) {
        let y2 = -1;
        for (d2 = n; d2 < u2; d2++)
          if (R(t, d2) === R(e, y2 === -1 ? 0 : d2 - y2)) {
            if (y2 === -1 && (y2 = d2), d2 - y2 + 1 === g2)
              return y2 * i;
          } else
            y2 !== -1 && (d2 -= d2 - y2), y2 = -1;
      } else
        for (n + g2 > u2 && (n = u2 - g2), d2 = n; d2 >= 0; d2--) {
          let y2 = true;
          for (let v2 = 0; v2 < g2; v2++)
            if (R(t, d2 + v2) !== R(e, v2)) {
              y2 = false;
              break;
            }
          if (y2)
            return d2;
        }
      return -1;
    }
    f2.prototype.includes = function(t, e, n) {
      return this.indexOf(t, e, n) !== -1;
    }, f2.prototype.indexOf = function(t, e, n) {
      return O2(this, t, e, n, true);
    }, f2.prototype.lastIndexOf = function(t, e, n) {
      return O2(this, t, e, n, false);
    };
    function pt2(t, e, n, r) {
      n = Number(n) || 0;
      let o2 = t.length - n;
      r ? (r = Number(r), r > o2 && (r = o2)) : r = o2;
      let i = e.length;
      r > i / 2 && (r = i / 2);
      let u2;
      for (u2 = 0; u2 < r; ++u2) {
        let g2 = parseInt(e.substr(u2 * 2, 2), 16);
        if (X2(g2))
          return u2;
        t[n + u2] = g2;
      }
      return u2;
    }
    function ct2(t, e, n, r) {
      return Y(G(e, t.length - n), t, n, r);
    }
    function gt2(t, e, n, r) {
      return Y(Rt(e), t, n, r);
    }
    function yt(t, e, n, r) {
      return Y(it(e), t, n, r);
    }
    function wt(t, e, n, r) {
      return Y(Tt2(e, t.length - n), t, n, r);
    }
    f2.prototype.write = function(t, e, n, r) {
      if (e === void 0)
        r = "utf8", n = this.length, e = 0;
      else if (n === void 0 && typeof e == "string")
        r = e, n = this.length, e = 0;
      else if (isFinite(e))
        e = e >>> 0, isFinite(n) ? (n = n >>> 0, r === void 0 && (r = "utf8")) : (r = n, n = void 0);
      else
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      let o2 = this.length - e;
      if ((n === void 0 || n > o2) && (n = o2), t.length > 0 && (n < 0 || e < 0) || e > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      r || (r = "utf8");
      let i = false;
      for (; ; )
        switch (r) {
          case "hex":
            return pt2(this, t, e, n);
          case "utf8":
          case "utf-8":
            return ct2(this, t, e, n);
          case "ascii":
          case "latin1":
          case "binary":
            return gt2(this, t, e, n);
          case "base64":
            return yt(this, t, e, n);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return wt(this, t, e, n);
          default:
            if (i)
              throw new TypeError("Unknown encoding: " + r);
            r = ("" + r).toLowerCase(), i = true;
        }
    }, f2.prototype.toJSON = function() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function dt(t, e, n) {
      return e === 0 && n === t.length ? a2.fromByteArray(t) : a2.fromByteArray(t.slice(e, n));
    }
    function H2(t, e, n) {
      n = Math.min(t.length, n);
      let r = [], o2 = e;
      for (; o2 < n; ) {
        let i = t[o2], u2 = null, g2 = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
        if (o2 + g2 <= n) {
          let R, d2, y2, v2;
          switch (g2) {
            case 1:
              i < 128 && (u2 = i);
              break;
            case 2:
              R = t[o2 + 1], (R & 192) === 128 && (v2 = (i & 31) << 6 | R & 63, v2 > 127 && (u2 = v2));
              break;
            case 3:
              R = t[o2 + 1], d2 = t[o2 + 2], (R & 192) === 128 && (d2 & 192) === 128 && (v2 = (i & 15) << 12 | (R & 63) << 6 | d2 & 63, v2 > 2047 && (v2 < 55296 || v2 > 57343) && (u2 = v2));
              break;
            case 4:
              R = t[o2 + 1], d2 = t[o2 + 2], y2 = t[o2 + 3], (R & 192) === 128 && (d2 & 192) === 128 && (y2 & 192) === 128 && (v2 = (i & 15) << 18 | (R & 63) << 12 | (d2 & 63) << 6 | y2 & 63, v2 > 65535 && v2 < 1114112 && (u2 = v2));
          }
        }
        u2 === null ? (u2 = 65533, g2 = 1) : u2 > 65535 && (u2 -= 65536, r.push(u2 >>> 10 & 1023 | 55296), u2 = 56320 | u2 & 1023), r.push(u2), o2 += g2;
      }
      return bt(r);
    }
    var K = 4096;
    function bt(t) {
      let e = t.length;
      if (e <= K)
        return String.fromCharCode.apply(String, t);
      let n = "", r = 0;
      for (; r < e; )
        n += String.fromCharCode.apply(String, t.slice(r, r += K));
      return n;
    }
    function Bt(t, e, n) {
      let r = "";
      n = Math.min(t.length, n);
      for (let o2 = e; o2 < n; ++o2)
        r += String.fromCharCode(t[o2] & 127);
      return r;
    }
    function mt2(t, e, n) {
      let r = "";
      n = Math.min(t.length, n);
      for (let o2 = e; o2 < n; ++o2)
        r += String.fromCharCode(t[o2]);
      return r;
    }
    function Et(t, e, n) {
      let r = t.length;
      (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);
      let o2 = "";
      for (let i = e; i < n; ++i)
        o2 += Ot[t[i]];
      return o2;
    }
    function vt(t, e, n) {
      let r = t.slice(e, n), o2 = "";
      for (let i = 0; i < r.length - 1; i += 2)
        o2 += String.fromCharCode(r[i] + r[i + 1] * 256);
      return o2;
    }
    f2.prototype.slice = function(t, e) {
      let n = this.length;
      t = ~~t, e = e === void 0 ? n : ~~e, t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), e < 0 ? (e += n, e < 0 && (e = 0)) : e > n && (e = n), e < t && (e = t);
      let r = this.subarray(t, e);
      return Object.setPrototypeOf(r, f2.prototype), r;
    };
    function I2(t, e, n) {
      if (t % 1 !== 0 || t < 0)
        throw new RangeError("offset is not uint");
      if (t + e > n)
        throw new RangeError("Trying to access beyond buffer length");
    }
    f2.prototype.readUintLE = f2.prototype.readUIntLE = function(t, e, n) {
      t = t >>> 0, e = e >>> 0, n || I2(t, e, this.length);
      let r = this[t], o2 = 1, i = 0;
      for (; ++i < e && (o2 *= 256); )
        r += this[t + i] * o2;
      return r;
    }, f2.prototype.readUintBE = f2.prototype.readUIntBE = function(t, e, n) {
      t = t >>> 0, e = e >>> 0, n || I2(t, e, this.length);
      let r = this[t + --e], o2 = 1;
      for (; e > 0 && (o2 *= 256); )
        r += this[t + --e] * o2;
      return r;
    }, f2.prototype.readUint8 = f2.prototype.readUInt8 = function(t, e) {
      return t = t >>> 0, e || I2(t, 1, this.length), this[t];
    }, f2.prototype.readUint16LE = f2.prototype.readUInt16LE = function(t, e) {
      return t = t >>> 0, e || I2(t, 2, this.length), this[t] | this[t + 1] << 8;
    }, f2.prototype.readUint16BE = f2.prototype.readUInt16BE = function(t, e) {
      return t = t >>> 0, e || I2(t, 2, this.length), this[t] << 8 | this[t + 1];
    }, f2.prototype.readUint32LE = f2.prototype.readUInt32LE = function(t, e) {
      return t = t >>> 0, e || I2(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + this[t + 3] * 16777216;
    }, f2.prototype.readUint32BE = f2.prototype.readUInt32BE = function(t, e) {
      return t = t >>> 0, e || I2(t, 4, this.length), this[t] * 16777216 + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
    }, f2.prototype.readBigUInt64LE = j2(function(t) {
      t = t >>> 0, F(t, "offset");
      let e = this[t], n = this[t + 7];
      (e === void 0 || n === void 0) && D2(t, this.length - 8);
      let r = e + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24, o2 = this[++t] + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + n * 2 ** 24;
      return BigInt(r) + (BigInt(o2) << BigInt(32));
    }), f2.prototype.readBigUInt64BE = j2(function(t) {
      t = t >>> 0, F(t, "offset");
      let e = this[t], n = this[t + 7];
      (e === void 0 || n === void 0) && D2(t, this.length - 8);
      let r = e * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t], o2 = this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + n;
      return (BigInt(r) << BigInt(32)) + BigInt(o2);
    }), f2.prototype.readIntLE = function(t, e, n) {
      t = t >>> 0, e = e >>> 0, n || I2(t, e, this.length);
      let r = this[t], o2 = 1, i = 0;
      for (; ++i < e && (o2 *= 256); )
        r += this[t + i] * o2;
      return o2 *= 128, r >= o2 && (r -= Math.pow(2, 8 * e)), r;
    }, f2.prototype.readIntBE = function(t, e, n) {
      t = t >>> 0, e = e >>> 0, n || I2(t, e, this.length);
      let r = e, o2 = 1, i = this[t + --r];
      for (; r > 0 && (o2 *= 256); )
        i += this[t + --r] * o2;
      return o2 *= 128, i >= o2 && (i -= Math.pow(2, 8 * e)), i;
    }, f2.prototype.readInt8 = function(t, e) {
      return t = t >>> 0, e || I2(t, 1, this.length), this[t] & 128 ? (255 - this[t] + 1) * -1 : this[t];
    }, f2.prototype.readInt16LE = function(t, e) {
      t = t >>> 0, e || I2(t, 2, this.length);
      let n = this[t] | this[t + 1] << 8;
      return n & 32768 ? n | 4294901760 : n;
    }, f2.prototype.readInt16BE = function(t, e) {
      t = t >>> 0, e || I2(t, 2, this.length);
      let n = this[t + 1] | this[t] << 8;
      return n & 32768 ? n | 4294901760 : n;
    }, f2.prototype.readInt32LE = function(t, e) {
      return t = t >>> 0, e || I2(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
    }, f2.prototype.readInt32BE = function(t, e) {
      return t = t >>> 0, e || I2(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
    }, f2.prototype.readBigInt64LE = j2(function(t) {
      t = t >>> 0, F(t, "offset");
      let e = this[t], n = this[t + 7];
      (e === void 0 || n === void 0) && D2(t, this.length - 8);
      let r = this[t + 4] + this[t + 5] * 2 ** 8 + this[t + 6] * 2 ** 16 + (n << 24);
      return (BigInt(r) << BigInt(32)) + BigInt(
        e + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24
      );
    }), f2.prototype.readBigInt64BE = j2(function(t) {
      t = t >>> 0, F(t, "offset");
      let e = this[t], n = this[t + 7];
      (e === void 0 || n === void 0) && D2(t, this.length - 8);
      let r = (e << 24) + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t];
      return (BigInt(r) << BigInt(32)) + BigInt(
        this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + n
      );
    }), f2.prototype.readFloatLE = function(t, e) {
      return t = t >>> 0, e || I2(t, 4, this.length), s2.read(this, t, true, 23, 4);
    }, f2.prototype.readFloatBE = function(t, e) {
      return t = t >>> 0, e || I2(t, 4, this.length), s2.read(this, t, false, 23, 4);
    }, f2.prototype.readDoubleLE = function(t, e) {
      return t = t >>> 0, e || I2(t, 8, this.length), s2.read(this, t, true, 52, 8);
    }, f2.prototype.readDoubleBE = function(t, e) {
      return t = t >>> 0, e || I2(t, 8, this.length), s2.read(this, t, false, 52, 8);
    };
    function C3(t, e, n, r, o2, i) {
      if (!f2.isBuffer(t))
        throw new TypeError('"buffer" argument must be a Buffer instance');
      if (e > o2 || e < i)
        throw new RangeError('"value" argument is out of bounds');
      if (n + r > t.length)
        throw new RangeError("Index out of range");
    }
    f2.prototype.writeUintLE = f2.prototype.writeUIntLE = function(t, e, n, r) {
      if (t = +t, e = e >>> 0, n = n >>> 0, !r) {
        let u2 = Math.pow(2, 8 * n) - 1;
        C3(this, t, e, n, u2, 0);
      }
      let o2 = 1, i = 0;
      for (this[e] = t & 255; ++i < n && (o2 *= 256); )
        this[e + i] = t / o2 & 255;
      return e + n;
    }, f2.prototype.writeUintBE = f2.prototype.writeUIntBE = function(t, e, n, r) {
      if (t = +t, e = e >>> 0, n = n >>> 0, !r) {
        let u2 = Math.pow(2, 8 * n) - 1;
        C3(this, t, e, n, u2, 0);
      }
      let o2 = n - 1, i = 1;
      for (this[e + o2] = t & 255; --o2 >= 0 && (i *= 256); )
        this[e + o2] = t / i & 255;
      return e + n;
    }, f2.prototype.writeUint8 = f2.prototype.writeUInt8 = function(t, e, n) {
      return t = +t, e = e >>> 0, n || C3(this, t, e, 1, 255, 0), this[e] = t & 255, e + 1;
    }, f2.prototype.writeUint16LE = f2.prototype.writeUInt16LE = function(t, e, n) {
      return t = +t, e = e >>> 0, n || C3(this, t, e, 2, 65535, 0), this[e] = t & 255, this[e + 1] = t >>> 8, e + 2;
    }, f2.prototype.writeUint16BE = f2.prototype.writeUInt16BE = function(t, e, n) {
      return t = +t, e = e >>> 0, n || C3(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = t & 255, e + 2;
    }, f2.prototype.writeUint32LE = f2.prototype.writeUInt32LE = function(t, e, n) {
      return t = +t, e = e >>> 0, n || C3(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = t & 255, e + 4;
    }, f2.prototype.writeUint32BE = f2.prototype.writeUInt32BE = function(t, e, n) {
      return t = +t, e = e >>> 0, n || C3(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = t & 255, e + 4;
    };
    function Q(t, e, n, r, o2) {
      ft2(e, r, o2, t, n, 7);
      let i = Number(e & BigInt(4294967295));
      t[n++] = i, i = i >> 8, t[n++] = i, i = i >> 8, t[n++] = i, i = i >> 8, t[n++] = i;
      let u2 = Number(e >> BigInt(32) & BigInt(4294967295));
      return t[n++] = u2, u2 = u2 >> 8, t[n++] = u2, u2 = u2 >> 8, t[n++] = u2, u2 = u2 >> 8, t[n++] = u2, n;
    }
    function tt2(t, e, n, r, o2) {
      ft2(e, r, o2, t, n, 7);
      let i = Number(e & BigInt(4294967295));
      t[n + 7] = i, i = i >> 8, t[n + 6] = i, i = i >> 8, t[n + 5] = i, i = i >> 8, t[n + 4] = i;
      let u2 = Number(e >> BigInt(32) & BigInt(4294967295));
      return t[n + 3] = u2, u2 = u2 >> 8, t[n + 2] = u2, u2 = u2 >> 8, t[n + 1] = u2, u2 = u2 >> 8, t[n] = u2, n + 8;
    }
    f2.prototype.writeBigUInt64LE = j2(function(t, e = 0) {
      return Q(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
    }), f2.prototype.writeBigUInt64BE = j2(function(t, e = 0) {
      return tt2(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
    }), f2.prototype.writeIntLE = function(t, e, n, r) {
      if (t = +t, e = e >>> 0, !r) {
        let g2 = Math.pow(2, 8 * n - 1);
        C3(this, t, e, n, g2 - 1, -g2);
      }
      let o2 = 0, i = 1, u2 = 0;
      for (this[e] = t & 255; ++o2 < n && (i *= 256); )
        t < 0 && u2 === 0 && this[e + o2 - 1] !== 0 && (u2 = 1), this[e + o2] = (t / i >> 0) - u2 & 255;
      return e + n;
    }, f2.prototype.writeIntBE = function(t, e, n, r) {
      if (t = +t, e = e >>> 0, !r) {
        let g2 = Math.pow(2, 8 * n - 1);
        C3(this, t, e, n, g2 - 1, -g2);
      }
      let o2 = n - 1, i = 1, u2 = 0;
      for (this[e + o2] = t & 255; --o2 >= 0 && (i *= 256); )
        t < 0 && u2 === 0 && this[e + o2 + 1] !== 0 && (u2 = 1), this[e + o2] = (t / i >> 0) - u2 & 255;
      return e + n;
    }, f2.prototype.writeInt8 = function(t, e, n) {
      return t = +t, e = e >>> 0, n || C3(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = t & 255, e + 1;
    }, f2.prototype.writeInt16LE = function(t, e, n) {
      return t = +t, e = e >>> 0, n || C3(this, t, e, 2, 32767, -32768), this[e] = t & 255, this[e + 1] = t >>> 8, e + 2;
    }, f2.prototype.writeInt16BE = function(t, e, n) {
      return t = +t, e = e >>> 0, n || C3(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = t & 255, e + 2;
    }, f2.prototype.writeInt32LE = function(t, e, n) {
      return t = +t, e = e >>> 0, n || C3(this, t, e, 4, 2147483647, -2147483648), this[e] = t & 255, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4;
    }, f2.prototype.writeInt32BE = function(t, e, n) {
      return t = +t, e = e >>> 0, n || C3(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = t & 255, e + 4;
    }, f2.prototype.writeBigInt64LE = j2(function(t, e = 0) {
      return Q(
        this,
        t,
        e,
        -BigInt("0x8000000000000000"),
        BigInt("0x7fffffffffffffff")
      );
    }), f2.prototype.writeBigInt64BE = j2(function(t, e = 0) {
      return tt2(
        this,
        t,
        e,
        -BigInt("0x8000000000000000"),
        BigInt("0x7fffffffffffffff")
      );
    });
    function et(t, e, n, r, o2, i) {
      if (n + r > t.length)
        throw new RangeError("Index out of range");
      if (n < 0)
        throw new RangeError("Index out of range");
    }
    function nt(t, e, n, r, o2) {
      return e = +e, n = n >>> 0, o2 || et(t, e, n, 4, 34028234663852886e22, -34028234663852886e22), s2.write(t, e, n, r, 23, 4), n + 4;
    }
    f2.prototype.writeFloatLE = function(t, e, n) {
      return nt(this, t, e, true, n);
    }, f2.prototype.writeFloatBE = function(t, e, n) {
      return nt(this, t, e, false, n);
    };
    function rt2(t, e, n, r, o2) {
      return e = +e, n = n >>> 0, o2 || et(t, e, n, 8, 17976931348623157e292, -17976931348623157e292), s2.write(t, e, n, r, 52, 8), n + 8;
    }
    f2.prototype.writeDoubleLE = function(t, e, n) {
      return rt2(this, t, e, true, n);
    }, f2.prototype.writeDoubleBE = function(t, e, n) {
      return rt2(this, t, e, false, n);
    }, f2.prototype.copy = function(t, e, n, r) {
      if (!f2.isBuffer(t))
        throw new TypeError("argument should be a Buffer");
      if (n || (n = 0), !r && r !== 0 && (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && r < n && (r = n), r === n || t.length === 0 || this.length === 0)
        return 0;
      if (e < 0)
        throw new RangeError("targetStart out of bounds");
      if (n < 0 || n >= this.length)
        throw new RangeError("Index out of range");
      if (r < 0)
        throw new RangeError("sourceEnd out of bounds");
      r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
      let o2 = r - n;
      return this === t && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(e, n, r) : Uint8Array.prototype.set.call(t, this.subarray(n, r), e), o2;
    }, f2.prototype.fill = function(t, e, n, r) {
      if (typeof t == "string") {
        if (typeof e == "string" ? (r = e, e = 0, n = this.length) : typeof n == "string" && (r = n, n = this.length), r !== void 0 && typeof r != "string")
          throw new TypeError("encoding must be a string");
        if (typeof r == "string" && !f2.isEncoding(r))
          throw new TypeError("Unknown encoding: " + r);
        if (t.length === 1) {
          let i = t.charCodeAt(0);
          (r === "utf8" && i < 128 || r === "latin1") && (t = i);
        }
      } else
        typeof t == "number" ? t = t & 255 : typeof t == "boolean" && (t = Number(t));
      if (e < 0 || this.length < e || this.length < n)
        throw new RangeError("Out of range index");
      if (n <= e)
        return this;
      e = e >>> 0, n = n === void 0 ? this.length : n >>> 0, t || (t = 0);
      let o2;
      if (typeof t == "number")
        for (o2 = e; o2 < n; ++o2)
          this[o2] = t;
      else {
        let i = f2.isBuffer(t) ? t : f2.from(t, r), u2 = i.length;
        if (u2 === 0)
          throw new TypeError(
            'The value "' + t + '" is invalid for argument "value"'
          );
        for (o2 = 0; o2 < n - e; ++o2)
          this[o2 + e] = i[o2 % u2];
      }
      return this;
    };
    var k3 = {};
    function z3(t, e, n) {
      k3[t] = class extends n {
        constructor() {
          super(), Object.defineProperty(this, "message", {
            value: e.apply(this, arguments),
            writable: true,
            configurable: true
          }), this.name = `${this.name} [${t}]`, this.stack, delete this.name;
        }
        get code() {
          return t;
        }
        set code(r) {
          Object.defineProperty(this, "code", {
            configurable: true,
            enumerable: true,
            value: r,
            writable: true
          });
        }
        toString() {
          return `${this.name} [${t}]: ${this.message}`;
        }
      };
    }
    z3(
      "ERR_BUFFER_OUT_OF_BOUNDS",
      function(t) {
        return t ? `${t} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
      },
      RangeError
    ), z3(
      "ERR_INVALID_ARG_TYPE",
      function(t, e) {
        return `The "${t}" argument must be of type number. Received type ${typeof e}`;
      },
      TypeError
    ), z3(
      "ERR_OUT_OF_RANGE",
      function(t, e, n) {
        let r = `The value of "${t}" is out of range.`, o2 = n;
        return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? o2 = ot2(String(n)) : typeof n == "bigint" && (o2 = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (o2 = ot2(o2)), o2 += "n"), r += ` It must be ${e}. Received ${o2}`, r;
      },
      RangeError
    );
    function ot2(t) {
      let e = "", n = t.length, r = t[0] === "-" ? 1 : 0;
      for (; n >= r + 4; n -= 3)
        e = `_${t.slice(n - 3, n)}${e}`;
      return `${t.slice(0, n)}${e}`;
    }
    function At2(t, e, n) {
      F(e, "offset"), (t[e] === void 0 || t[e + n] === void 0) && D2(e, t.length - (n + 1));
    }
    function ft2(t, e, n, r, o2, i) {
      if (t > n || t < e) {
        let u2 = typeof e == "bigint" ? "n" : "", g2;
        throw i > 3 ? e === 0 || e === BigInt(0) ? g2 = `>= 0${u2} and < 2${u2} ** ${(i + 1) * 8}${u2}` : g2 = `>= -(2${u2} ** ${(i + 1) * 8 - 1}${u2}) and < 2 ** ${(i + 1) * 8 - 1}${u2}` : g2 = `>= ${e}${u2} and <= ${n}${u2}`, new k3.ERR_OUT_OF_RANGE("value", g2, t);
      }
      At2(r, o2, i);
    }
    function F(t, e) {
      if (typeof t != "number")
        throw new k3.ERR_INVALID_ARG_TYPE(e, "number", t);
    }
    function D2(t, e, n) {
      throw Math.floor(t) !== t ? (F(t, n), new k3.ERR_OUT_OF_RANGE(n || "offset", "an integer", t)) : e < 0 ? new k3.ERR_BUFFER_OUT_OF_BOUNDS() : new k3.ERR_OUT_OF_RANGE(
        n || "offset",
        `>= ${n ? 1 : 0} and <= ${e}`,
        t
      );
    }
    var It = /[^+/0-9A-Za-z-_]/g;
    function Ut(t) {
      if (t = t.split("=")[0], t = t.trim().replace(It, ""), t.length < 2)
        return "";
      for (; t.length % 4 !== 0; )
        t = t + "=";
      return t;
    }
    function G(t, e) {
      e = e || 1 / 0;
      let n, r = t.length, o2 = null, i = [];
      for (let u2 = 0; u2 < r; ++u2) {
        if (n = t.charCodeAt(u2), n > 55295 && n < 57344) {
          if (!o2) {
            if (n > 56319) {
              (e -= 3) > -1 && i.push(239, 191, 189);
              continue;
            } else if (u2 + 1 === r) {
              (e -= 3) > -1 && i.push(239, 191, 189);
              continue;
            }
            o2 = n;
            continue;
          }
          if (n < 56320) {
            (e -= 3) > -1 && i.push(239, 191, 189), o2 = n;
            continue;
          }
          n = (o2 - 55296 << 10 | n - 56320) + 65536;
        } else
          o2 && (e -= 3) > -1 && i.push(239, 191, 189);
        if (o2 = null, n < 128) {
          if ((e -= 1) < 0)
            break;
          i.push(n);
        } else if (n < 2048) {
          if ((e -= 2) < 0)
            break;
          i.push(n >> 6 | 192, n & 63 | 128);
        } else if (n < 65536) {
          if ((e -= 3) < 0)
            break;
          i.push(n >> 12 | 224, n >> 6 & 63 | 128, n & 63 | 128);
        } else if (n < 1114112) {
          if ((e -= 4) < 0)
            break;
          i.push(
            n >> 18 | 240,
            n >> 12 & 63 | 128,
            n >> 6 & 63 | 128,
            n & 63 | 128
          );
        } else
          throw new Error("Invalid code point");
      }
      return i;
    }
    function Rt(t) {
      let e = [];
      for (let n = 0; n < t.length; ++n)
        e.push(t.charCodeAt(n) & 255);
      return e;
    }
    function Tt2(t, e) {
      let n, r, o2, i = [];
      for (let u2 = 0; u2 < t.length && !((e -= 2) < 0); ++u2)
        n = t.charCodeAt(u2), r = n >> 8, o2 = n % 256, i.push(o2), i.push(r);
      return i;
    }
    function it(t) {
      return a2.toByteArray(Ut(t));
    }
    function Y(t, e, n, r) {
      let o2;
      for (o2 = 0; o2 < r && !(o2 + n >= e.length || o2 >= t.length); ++o2)
        e[o2 + n] = t[o2];
      return o2;
    }
    function N3(t, e) {
      return t instanceof e || t != null && t.constructor != null && t.constructor.name != null && t.constructor.name === e.name;
    }
    function X2(t) {
      return t !== t;
    }
    var Ot = function() {
      let t = "0123456789abcdef", e = new Array(256);
      for (let n = 0; n < 16; ++n) {
        let r = n * 16;
        for (let o2 = 0; o2 < 16; ++o2)
          e[r + o2] = t[n] + t[o2];
      }
      return e;
    }();
    function j2(t) {
      return typeof BigInt > "u" ? St : t;
    }
    function St() {
      throw new Error("BigInt not supported");
    }
  }), at = {};
  Pt(at, {
    Buffer: () => J2,
    INSPECT_MAX_BYTES: () => Ft,
    SlowBuffer: () => kt2,
    default: () => zt,
    kMaxLength: () => Dt
  });
  var lt2 = st2(ht());
  $t(at, st2(ht()));
  var { Buffer: J2, SlowBuffer: kt2, INSPECT_MAX_BYTES: Ft, kMaxLength: Dt } = lt2, { default: ut2, ...Yt } = lt2, zt = ut2 !== void 0 ? ut2 : Yt;
  globalThis.__Buffer$ = J2;
})();
var __global$ = globalThis || (typeof window !== "undefined" ? window : self);
var require2 = (n) => {
  const e = (m2) => typeof m2.default < "u" ? m2.default : m2, c = (m2) => Object.assign({}, m2);
  switch (n) {
    case "os":
      return e(browser_exports);
    default:
      throw new Error('module "' + n + '" not found');
  }
};
var No = Object.create;
var Ae = Object.defineProperty;
var Bo = Object.getOwnPropertyDescriptor;
var Vo = Object.getOwnPropertyNames;
var Ko = Object.getPrototypeOf;
var Jo = Object.prototype.hasOwnProperty;
var Qo = ((e) => typeof require2 < "u" ? require2 : typeof Proxy < "u" ? new Proxy(e, { get: (t, r) => (typeof require2 < "u" ? require2 : t)[r] }) : e)(function(e) {
  if (typeof require2 < "u")
    return require2.apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
});
var B2 = (e, t) => () => (e && (t = e(e = 0)), t);
var U2 = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var ee = (e, t) => {
  for (var r in t)
    Ae(e, r, { get: t[r], enumerable: true });
};
var Jt = (e, t, r, s2) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let o2 of Vo(t))
      !Jo.call(e, o2) && o2 !== r && Ae(e, o2, {
        get: () => t[o2],
        enumerable: !(s2 = Bo(t, o2)) || s2.enumerable
      });
  return e;
};
var S = (e, t, r) => (r = e != null ? No(Ko(e)) : {}, Jt(
  t || !e || !e.__esModule ? Ae(r, "default", { value: e, enumerable: true }) : r,
  e
));
var k2 = (e) => Jt(Ae({}, "__esModule", { value: true }), e);
var H = U2((Ke) => {
  "use strict";
  Object.defineProperty(Ke, "__esModule", { value: true });
  function Yo() {
    return typeof navigator == "object" && "userAgent" in navigator ? navigator.userAgent : typeof __Process$ == "object" && __Process$.version !== void 0 ? `Node.js/${__Process$.version.substr(1)} (${__Process$.platform}; ${__Process$.arch})` : "<environment undetectable>";
  }
  Ke.getUserAgent = Yo;
});
var Xt = U2((Fu, Yt) => {
  Yt.exports = Qt;
  function Qt(e, t, r, s2) {
    if (typeof r != "function")
      throw new Error("method for before hook must be a function");
    return s2 || (s2 = {}), Array.isArray(t) ? t.reverse().reduce(function(o2, n) {
      return Qt.bind(null, e, n, o2, s2);
    }, r)() : Promise.resolve().then(function() {
      return e.registry[t] ? e.registry[t].reduce(function(o2, n) {
        return n.hook.bind(null, o2, s2);
      }, r)() : r(s2);
    });
  }
});
var er = U2((Uu, Zt) => {
  Zt.exports = Xo;
  function Xo(e, t, r, s2) {
    var o2 = s2;
    e.registry[r] || (e.registry[r] = []), t === "before" && (s2 = function(n, a2) {
      return Promise.resolve().then(o2.bind(null, a2)).then(n.bind(null, a2));
    }), t === "after" && (s2 = function(n, a2) {
      var c;
      return Promise.resolve().then(n.bind(null, a2)).then(function(u2) {
        return c = u2, o2(c, a2);
      }).then(function() {
        return c;
      });
    }), t === "error" && (s2 = function(n, a2) {
      return Promise.resolve().then(n.bind(null, a2)).catch(function(c) {
        return o2(c, a2);
      });
    }), e.registry[r].push({ hook: s2, orig: o2 });
  }
});
var rr = U2((Cu, tr) => {
  tr.exports = Zo;
  function Zo(e, t, r) {
    if (e.registry[t]) {
      var s2 = e.registry[t].map(function(o2) {
        return o2.orig;
      }).indexOf(r);
      s2 !== -1 && e.registry[t].splice(s2, 1);
    }
  }
});
var ur = U2((Du, me) => {
  var ir = Xt(), en = er(), tn = rr(), sr = Function.bind, or = sr.bind(sr);
  function ar(e, t, r) {
    var s2 = or(tn, null).apply(null, r ? [t, r] : [t]);
    e.api = { remove: s2 }, e.remove = s2, ["before", "error", "after", "wrap"].forEach(function(o2) {
      var n = r ? [t, o2, r] : [t, o2];
      e[o2] = e.api[o2] = or(en, null).apply(null, n);
    });
  }
  function rn() {
    var e = "h", t = { registry: {} }, r = ir.bind(null, t, e);
    return ar(r, t, e), r;
  }
  function cr() {
    var e = { registry: {} }, t = ir.bind(null, e);
    return ar(t, e), t;
  }
  var nr = false;
  function ne() {
    return nr || (console.warn(
      '[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4'
    ), nr = true), cr();
  }
  ne.Singular = rn.bind();
  ne.Collection = cr.bind();
  me.exports = ne;
  me.exports.Hook = ne;
  me.exports.Singular = ne.Singular;
  me.exports.Collection = ne.Collection;
});
function an(e) {
  return e ? Object.keys(e).reduce((t, r) => (t[r.toLowerCase()] = e[r], t), {}) : {};
}
function cn(e) {
  if (typeof e != "object" || e === null || Object.prototype.toString.call(e) !== "[object Object]")
    return false;
  let t = Object.getPrototypeOf(e);
  if (t === null)
    return true;
  let r = Object.prototype.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Function.prototype.call(r) === Function.prototype.call(e);
}
function hr(e, t) {
  let r = Object.assign({}, e);
  return Object.keys(t).forEach((s2) => {
    cn(t[s2]) ? s2 in e ? r[s2] = hr(e[s2], t[s2]) : Object.assign(r, { [s2]: t[s2] }) : Object.assign(r, { [s2]: t[s2] });
  }), r;
}
function lr(e) {
  for (let t in e)
    e[t] === void 0 && delete e[t];
  return e;
}
function Qe(e, t, r) {
  if (typeof t == "string") {
    let [o2, n] = t.split(" ");
    r = Object.assign(n ? { method: o2, url: n } : { url: o2 }, r);
  } else
    r = Object.assign({}, t);
  r.headers = an(r.headers), lr(r), lr(r.headers);
  let s2 = hr(e || {}, r);
  return r.url === "/graphql" && (e && e.mediaType.previews?.length && (s2.mediaType.previews = e.mediaType.previews.filter((o2) => !s2.mediaType.previews.includes(o2)).concat(s2.mediaType.previews)), s2.mediaType.previews = (s2.mediaType.previews || []).map(
    (o2) => o2.replace(/-preview/, "")
  )), s2;
}
function un(e, t) {
  let r = /\?/.test(e) ? "&" : "?", s2 = Object.keys(t);
  return s2.length === 0 ? e : e + r + s2.map(
    (o2) => o2 === "q" ? "q=" + t.q.split("+").map(encodeURIComponent).join("+") : `${o2}=${encodeURIComponent(t[o2])}`
  ).join("&");
}
function pn(e) {
  return e.replace(/^\W+|\W+$/g, "").split(/,/);
}
function dn(e) {
  let t = e.match(ln);
  return t ? t.map(pn).reduce((r, s2) => r.concat(s2), []) : [];
}
function pr(e, t) {
  let r = { __proto__: null };
  for (let s2 of Object.keys(e))
    t.indexOf(s2) === -1 && (r[s2] = e[s2]);
  return r;
}
function gr(e) {
  return e.split(/(%[0-9A-Fa-f]{2})/g).map(function(t) {
    return /%[0-9A-Fa-f]/.test(t) || (t = encodeURI(t).replace(/%5B/g, "[").replace(/%5D/g, "]")), t;
  }).join("");
}
function ae(e) {
  return encodeURIComponent(e).replace(/[!'()*]/g, function(t) {
    return "%" + t.charCodeAt(0).toString(16).toUpperCase();
  });
}
function fe(e, t, r) {
  return t = e === "+" || e === "#" ? gr(t) : ae(t), r ? ae(r) + "=" + t : t;
}
function ie(e) {
  return e != null;
}
function Je(e) {
  return e === ";" || e === "&" || e === "?";
}
function hn(e, t, r, s2) {
  var o2 = e[r], n = [];
  if (ie(o2) && o2 !== "")
    if (typeof o2 == "string" || typeof o2 == "number" || typeof o2 == "boolean")
      o2 = o2.toString(), s2 && s2 !== "*" && (o2 = o2.substring(0, parseInt(s2, 10))), n.push(fe(t, o2, Je(t) ? r : ""));
    else if (s2 === "*")
      Array.isArray(o2) ? o2.filter(ie).forEach(function(a2) {
        n.push(fe(t, a2, Je(t) ? r : ""));
      }) : Object.keys(o2).forEach(function(a2) {
        ie(o2[a2]) && n.push(fe(t, o2[a2], a2));
      });
    else {
      let a2 = [];
      Array.isArray(o2) ? o2.filter(ie).forEach(function(c) {
        a2.push(fe(t, c));
      }) : Object.keys(o2).forEach(function(c) {
        ie(o2[c]) && (a2.push(ae(c)), a2.push(fe(t, o2[c].toString())));
      }), Je(t) ? n.push(ae(r) + "=" + a2.join(",")) : a2.length !== 0 && n.push(a2.join(","));
    }
  else
    t === ";" ? ie(o2) && n.push(ae(r)) : o2 === "" && (t === "&" || t === "?") ? n.push(ae(r) + "=") : o2 === "" && n.push("");
  return n;
}
function gn(e) {
  return { expand: mn.bind(null, e) };
}
function mn(e, t) {
  var r = ["+", "#", ".", "/", ";", "?", "&"];
  return e = e.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function(s2, o2, n) {
    if (o2) {
      let c = "", u2 = [];
      if (r.indexOf(o2.charAt(0)) !== -1 && (c = o2.charAt(0), o2 = o2.substr(1)), o2.split(/,/g).forEach(function(f2) {
        var _2 = /([^:\*]*)(?::(\d+)|(\*))?/.exec(f2);
        u2.push(hn(t, c, _2[1], _2[2] || _2[3]));
      }), c && c !== "+") {
        var a2 = ",";
        return c === "?" ? a2 = "&" : c !== "#" && (a2 = c), (u2.length !== 0 ? c : "") + u2.join(a2);
      } else
        return u2.join(",");
    } else
      return gr(n);
  }), e === "/" ? e : e.replace(/\/$/, "");
}
function mr(e) {
  let t = e.method.toUpperCase(), r = (e.url || "/").replace(/:([a-z]\w+)/g, "{$1}"), s2 = Object.assign({}, e.headers), o2, n = pr(e, ["method", "baseUrl", "url", "headers", "request", "mediaType"]), a2 = dn(r);
  r = gn(r).expand(n), /^http/.test(r) || (r = e.baseUrl + r);
  let c = Object.keys(e).filter((_2) => a2.includes(_2)).concat("baseUrl"), u2 = pr(n, c);
  if (!/application\/octet-stream/i.test(s2.accept) && (e.mediaType.format && (s2.accept = s2.accept.split(/,/).map(
    (_2) => _2.replace(
      /application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,
      `application/vnd$1$2.${e.mediaType.format}`
    )
  ).join(",")), r.endsWith("/graphql") && e.mediaType.previews?.length)) {
    let _2 = s2.accept.match(/[\w-]+(?=-preview)/g) || [];
    s2.accept = _2.concat(e.mediaType.previews).map((m2) => {
      let E2 = e.mediaType.format ? `.${e.mediaType.format}` : "+json";
      return `application/vnd.github.${m2}-preview${E2}`;
    }).join(",");
  }
  return ["GET", "HEAD"].includes(t) ? r = un(r, u2) : "data" in u2 ? o2 = u2.data : Object.keys(u2).length && (o2 = u2), !s2["content-type"] && typeof o2 < "u" && (s2["content-type"] = "application/json; charset=utf-8"), ["PATCH", "PUT"].includes(t) && typeof o2 > "u" && (o2 = ""), Object.assign(
    { method: t, url: r, headers: s2 },
    typeof o2 < "u" ? { body: o2 } : null,
    e.request ? { request: e.request } : null
  );
}
function fn(e, t, r) {
  return mr(Qe(e, t, r));
}
function fr(e, t) {
  let r = Qe(e, t), s2 = fn.bind(null, r);
  return Object.assign(s2, {
    DEFAULTS: r,
    defaults: fr.bind(null, r),
    merge: Qe.bind(null, r),
    parse: mr
  });
}
var dr;
var sn;
var on;
var nn;
var ln;
var _r;
var Tr = B2(() => {
  dr = S(H()), sn = "9.0.4", on = `octokit-endpoint.js/${sn} ${(0, dr.getUserAgent)()}`, nn = {
    method: "GET",
    baseUrl: "https://api.github.com",
    headers: { accept: "application/vnd.github.v3+json", "user-agent": on },
    mediaType: { format: "" }
  };
  ln = /\{[^}]+\}/g;
  _r = fr(null, nn);
});
var Ze = U2((Xe) => {
  "use strict";
  Object.defineProperty(Xe, "__esModule", { value: true });
  var Ye = class extends Error {
    constructor(t) {
      super(t), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor), this.name = "Deprecation";
    }
  };
  Xe.Deprecation = Ye;
});
var yr = U2((qu, wr) => {
  wr.exports = Er;
  function Er(e, t) {
    if (e && t)
      return Er(e)(t);
    if (typeof e != "function")
      throw new TypeError("need wrapper function");
    return Object.keys(e).forEach(function(s2) {
      r[s2] = e[s2];
    }), r;
    function r() {
      for (var s2 = new Array(arguments.length), o2 = 0; o2 < s2.length; o2++)
        s2[o2] = arguments[o2];
      var n = e.apply(this, s2), a2 = s2[s2.length - 1];
      return typeof n == "function" && n !== a2 && Object.keys(a2).forEach(function(c) {
        n[c] = a2[c];
      }), n;
    }
  }
});
var kr = U2((Lu, et) => {
  var br = yr();
  et.exports = br(Ge);
  et.exports.strict = br(vr);
  Ge.proto = Ge(function() {
    Object.defineProperty(Function.prototype, "once", {
      value: function() {
        return Ge(this);
      },
      configurable: true
    }), Object.defineProperty(Function.prototype, "onceStrict", {
      value: function() {
        return vr(this);
      },
      configurable: true
    });
  });
  function Ge(e) {
    var t = function() {
      return t.called ? t.value : (t.called = true, t.value = e.apply(this, arguments));
    };
    return t.called = false, t;
  }
  function vr(e) {
    var t = function() {
      if (t.called)
        throw new Error(t.onceError);
      return t.called = true, t.value = e.apply(this, arguments);
    }, r = e.name || "Function wrapped with `once`";
    return t.onceError = r + " shouldn't be called more than once", t.called = false, t;
  }
});
var _e = {};
ee(_e, { RequestError: () => z2 });
var tt;
var rt;
var _n;
var Tn;
var z2;
var J = B2(() => {
  tt = S(Ze()), rt = S(kr()), _n = (0, rt.default)((e) => console.warn(e)), Tn = (0, rt.default)((e) => console.warn(e)), z2 = class extends Error {
    constructor(e, t, r) {
      super(e), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor), this.name = "HttpError", this.status = t;
      let s2;
      "headers" in r && typeof r.headers < "u" && (s2 = r.headers), "response" in r && (this.response = r.response, s2 = r.response.headers);
      let o2 = Object.assign({}, r.request);
      r.request.headers.authorization && (o2.headers = Object.assign({}, r.request.headers, {
        authorization: r.request.headers.authorization.replace(
          / .*$/,
          " [REDACTED]"
        )
      })), o2.url = o2.url.replace(/\bclient_secret=\w+/g, "client_secret=[REDACTED]").replace(/\baccess_token=\w+/g, "access_token=[REDACTED]"), this.request = o2, Object.defineProperty(this, "code", {
        get() {
          return _n(
            new tt.Deprecation(
              "[@octokit/request-error] `error.code` is deprecated, use `error.status`."
            )
          ), t;
        }
      }), Object.defineProperty(this, "headers", {
        get() {
          return Tn(
            new tt.Deprecation(
              "[@octokit/request-error] `error.headers` is deprecated, use `error.response.headers`."
            )
          ), s2 || {};
        }
      });
    }
  };
});
var L2 = {};
ee(L2, { request: () => te });
function wn(e) {
  if (typeof e != "object" || e === null || Object.prototype.toString.call(e) !== "[object Object]")
    return false;
  let t = Object.getPrototypeOf(e);
  if (t === null)
    return true;
  let r = Object.prototype.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Function.prototype.call(r) === Function.prototype.call(e);
}
function yn(e) {
  return e.arrayBuffer();
}
function Ar(e) {
  let t = e.request && e.request.log ? e.request.log : console, r = e.request?.parseSuccessResponseBody !== false;
  (wn(e.body) || Array.isArray(e.body)) && (e.body = JSON.stringify(e.body));
  let s2 = {}, o2, n, { fetch: a2 } = globalThis;
  if (e.request?.fetch && (a2 = e.request.fetch), !a2)
    throw new Error(
      "fetch is not set. Please pass a fetch implementation as new Octokit({ request: { fetch }}). Learn more at https://github.com/octokit/octokit.js/#fetch-missing"
    );
  return a2(e.url, {
    method: e.method,
    body: e.body,
    headers: e.headers,
    signal: e.request?.signal,
    ...e.body && { duplex: "half" }
  }).then(async (c) => {
    n = c.url, o2 = c.status;
    for (let u2 of c.headers)
      s2[u2[0]] = u2[1];
    if ("deprecation" in s2) {
      let u2 = s2.link && s2.link.match(/<([^>]+)>; rel="deprecation"/), f2 = u2 && u2.pop();
      t.warn(
        `[@octokit/request] "${e.method} ${e.url}" is deprecated. It is scheduled to be removed on ${s2.sunset}${f2 ? `. See ${f2}` : ""}`
      );
    }
    if (!(o2 === 204 || o2 === 205)) {
      if (e.method === "HEAD") {
        if (o2 < 400)
          return;
        throw new z2(c.statusText, o2, {
          response: { url: n, status: o2, headers: s2, data: void 0 },
          request: e
        });
      }
      if (o2 === 304)
        throw new z2("Not modified", o2, {
          response: { url: n, status: o2, headers: s2, data: await st(c) },
          request: e
        });
      if (o2 >= 400) {
        let u2 = await st(c);
        throw new z2(bn(u2), o2, {
          response: { url: n, status: o2, headers: s2, data: u2 },
          request: e
        });
      }
      return r ? await st(c) : c.body;
    }
  }).then((c) => ({ status: o2, url: n, headers: s2, data: c })).catch((c) => {
    if (c instanceof z2)
      throw c;
    if (c.name === "AbortError")
      throw c;
    let u2 = c.message;
    throw c.name === "TypeError" && "cause" in c && (c.cause instanceof Error ? u2 = c.cause.message : typeof c.cause == "string" && (u2 = c.cause)), new z2(u2, 500, { request: e });
  });
}
async function st(e) {
  let t = e.headers.get("content-type");
  return /application\/json/.test(t) ? e.json().catch(() => e.text()).catch(() => "") : !t || /^text\/|charset=utf-8$/.test(t) ? e.text() : yn(e);
}
function bn(e) {
  return typeof e == "string" ? e : "message" in e ? Array.isArray(e.errors) ? `${e.message}: ${e.errors.map(JSON.stringify).join(", ")}` : e.message : `Unknown error: ${JSON.stringify(e)}`;
}
function ot(e, t) {
  let r = e.defaults(t);
  return Object.assign(
    function(o2, n) {
      let a2 = r.merge(o2, n);
      if (!a2.request || !a2.request.hook)
        return Ar(r.parse(a2));
      let c = (u2, f2) => Ar(r.parse(r.merge(u2, f2)));
      return Object.assign(c, { endpoint: r, defaults: ot.bind(null, r) }), a2.request.hook(c, a2);
    },
    { endpoint: r, defaults: ot.bind(null, r) }
  );
}
var Gr;
var En;
var te;
var C2 = B2(() => {
  Tr();
  Gr = S(H());
  J();
  En = "8.1.6";
  te = ot(_r, {
    headers: {
      "user-agent": `octokit-request.js/${En} ${(0, Gr.getUserAgent)()}`
    }
  });
});
var Fr = U2((Mu, Rr) => {
  "use strict";
  var nt = Object.defineProperty, vn = Object.getOwnPropertyDescriptor, kn = Object.getOwnPropertyNames, An = Object.prototype.hasOwnProperty, Gn = (e, t) => {
    for (var r in t)
      nt(e, r, { get: t[r], enumerable: true });
  }, Sn = (e, t, r, s2) => {
    if (t && typeof t == "object" || typeof t == "function")
      for (let o2 of kn(t))
        !An.call(e, o2) && o2 !== r && nt(e, o2, {
          get: () => t[o2],
          enumerable: !(s2 = vn(t, o2)) || s2.enumerable
        });
    return e;
  }, On = (e) => Sn(nt({}, "__esModule", { value: true }), e), Or = {};
  Gn(Or, {
    GraphqlResponseError: () => Pr,
    graphql: () => jn,
    withCustomRequest: () => qn
  });
  Rr.exports = On(Or);
  var Pn = (C2(), k2(L2)), Rn = H(), Fn = "7.0.2", Hu = (C2(), k2(L2)), zu = (C2(), k2(L2));
  function Un(e) {
    return `Request failed due to following response errors:
` + e.errors.map((t) => ` - ${t.message}`).join(`
`);
  }
  var Pr = class extends Error {
    constructor(e, t, r) {
      super(Un(r)), this.request = e, this.headers = t, this.response = r, this.name = "GraphqlResponseError", this.errors = r.errors, this.data = r.data, Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
    }
  }, Cn = [
    "method",
    "baseUrl",
    "url",
    "headers",
    "request",
    "query",
    "mediaType"
  ], Dn = ["query", "method", "url"], Sr = /\/api\/v3\/?$/;
  function In(e, t, r) {
    if (r) {
      if (typeof t == "string" && "query" in r)
        return Promise.reject(
          new Error(
            '[@octokit/graphql] "query" cannot be used as variable name'
          )
        );
      for (let a2 in r)
        if (Dn.includes(a2))
          return Promise.reject(
            new Error(
              `[@octokit/graphql] "${a2}" cannot be used as variable name`
            )
          );
    }
    let s2 = typeof t == "string" ? Object.assign({ query: t }, r) : t, o2 = Object.keys(s2).reduce(
      (a2, c) => Cn.includes(c) ? (a2[c] = s2[c], a2) : (a2.variables || (a2.variables = {}), a2.variables[c] = s2[c], a2),
      {}
    ), n = s2.baseUrl || e.endpoint.DEFAULTS.baseUrl;
    return Sr.test(n) && (o2.url = n.replace(Sr, "/api/graphql")), e(o2).then((a2) => {
      if (a2.data.errors) {
        let c = {};
        for (let u2 of Object.keys(a2.headers))
          c[u2] = a2.headers[u2];
        throw new Pr(o2, c, a2.data);
      }
      return a2.data.data;
    });
  }
  function it(e, t) {
    let r = e.defaults(t);
    return Object.assign((o2, n) => In(r, o2, n), {
      defaults: it.bind(null, r),
      endpoint: r.endpoint
    });
  }
  var jn = it(Pn.request, {
    headers: {
      "user-agent": `octokit-graphql.js/${Fn} ${(0, Rn.getUserAgent)()}`
    },
    method: "POST",
    url: "/graphql"
  });
  function qn(e) {
    return it(e, { method: "POST", url: "/graphql" });
  }
});
var Ur = {};
ee(Ur, { createTokenAuth: () => Mn });
async function Wn(e) {
  let t = e.split(/\./).length === 3, r = Ln.test(e) || xn.test(e), s2 = $n.test(e);
  return {
    type: "token",
    token: e,
    tokenType: t ? "app" : r ? "installation" : s2 ? "user-to-server" : "oauth"
  };
}
function Hn(e) {
  return e.split(/\./).length === 3 ? `bearer ${e}` : `token ${e}`;
}
async function zn(e, t, r, s2) {
  let o2 = t.endpoint.merge(r, s2);
  return o2.headers.authorization = Hn(e), t(o2);
}
var Ln;
var xn;
var $n;
var Mn;
var Cr = B2(() => {
  Ln = /^v1\./, xn = /^ghs_/, $n = /^ghu_/;
  Mn = function(t) {
    if (!t)
      throw new Error(
        "[@octokit/auth-token] No token passed to createTokenAuth"
      );
    if (typeof t != "string")
      throw new Error(
        "[@octokit/auth-token] Token passed to createTokenAuth is not a string"
      );
    return t = t.replace(/^(token|bearer) +/i, ""), Object.assign(Wn.bind(null, t), { hook: zn.bind(null, t) });
  };
});
var Se = U2((Bu, xr) => {
  var _a3;
  "use strict";
  var at = Object.defineProperty, Nn = Object.getOwnPropertyDescriptor, Bn = Object.getOwnPropertyNames, Vn = Object.prototype.hasOwnProperty, Kn = (e, t) => {
    for (var r in t)
      at(e, r, { get: t[r], enumerable: true });
  }, Jn = (e, t, r, s2) => {
    if (t && typeof t == "object" || typeof t == "function")
      for (let o2 of Bn(t))
        !Vn.call(e, o2) && o2 !== r && at(e, o2, {
          get: () => t[o2],
          enumerable: !(s2 = Nn(t, o2)) || s2.enumerable
        });
    return e;
  }, Qn = (e) => Jn(at({}, "__esModule", { value: true }), e), qr = {};
  Kn(qr, { Octokit: () => si });
  xr.exports = Qn(qr);
  var Yn = H(), Xn = ur(), Dr = (C2(), k2(L2)), Zn = Fr(), ei = (Cr(), k2(Ur)), Lr = "5.0.2", Ir = () => {
  }, ti = console.warn.bind(console), ri = console.error.bind(console), jr = `octokit-core.js/${Lr} ${(0, Yn.getUserAgent)()}`, si = (_a3 = class {
    static defaults(e) {
      return class extends this {
        constructor(...r) {
          let s2 = r[0] || {};
          if (typeof e == "function") {
            super(e(s2));
            return;
          }
          super(
            Object.assign(
              {},
              e,
              s2,
              s2.userAgent && e.userAgent ? { userAgent: `${s2.userAgent} ${e.userAgent}` } : null
            )
          );
        }
      };
    }
    static plugin(...e) {
      var _a4;
      let t = this.plugins;
      return _a4 = class extends this {
      }, _a4.plugins = t.concat(e.filter((s2) => !t.includes(s2))), _a4;
    }
    constructor(e = {}) {
      let t = new Xn.Collection(), r = {
        baseUrl: Dr.request.endpoint.DEFAULTS.baseUrl,
        headers: {},
        request: Object.assign({}, e.request, {
          hook: t.bind(null, "request")
        }),
        mediaType: { previews: [], format: "" }
      };
      if (r.headers["user-agent"] = e.userAgent ? `${e.userAgent} ${jr}` : jr, e.baseUrl && (r.baseUrl = e.baseUrl), e.previews && (r.mediaType.previews = e.previews), e.timeZone && (r.headers["time-zone"] = e.timeZone), this.request = Dr.request.defaults(r), this.graphql = (0, Zn.withCustomRequest)(this.request).defaults(r), this.log = Object.assign(
        { debug: Ir, info: Ir, warn: ti, error: ri },
        e.log
      ), this.hook = t, e.authStrategy) {
        let { authStrategy: o2, ...n } = e, a2 = o2(
          Object.assign(
            {
              request: this.request,
              log: this.log,
              octokit: this,
              octokitOptions: n
            },
            e.auth
          )
        );
        t.wrap("request", a2.hook), this.auth = a2;
      } else if (!e.auth)
        this.auth = async () => ({ type: "unauthenticated" });
      else {
        let o2 = (0, ei.createTokenAuth)(e.auth);
        t.wrap("request", o2.hook), this.auth = o2;
      }
      let s2 = this.constructor;
      for (let o2 = 0; o2 < s2.plugins.length; ++o2)
        Object.assign(this, s2.plugins[o2](this, e));
    }
  }, _a3.VERSION = Lr, _a3.plugins = [], _a3);
});
var gt = U2((dt, ht) => {
  (function(e, t) {
    typeof dt == "object" && typeof ht < "u" ? ht.exports = t() : typeof define == "function" && define.amd ? define(t) : e.Bottleneck = t();
  })(dt, function() {
    "use strict";
    var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof __global$ < "u" ? __global$ : typeof self < "u" ? self : {};
    function t(w2) {
      return w2 && w2.default || w2;
    }
    var r = function(w2, l2, i = {}) {
      var p2, d2, h2;
      for (p2 in l2)
        h2 = l2[p2], i[p2] = (d2 = w2[p2]) != null ? d2 : h2;
      return i;
    }, s2 = function(w2, l2, i = {}) {
      var p2, d2;
      for (p2 in w2)
        d2 = w2[p2], l2[p2] !== void 0 && (i[p2] = d2);
      return i;
    }, o2 = { load: r, overwrite: s2 }, n;
    n = class {
      constructor(l2, i) {
        this.incr = l2, this.decr = i, this._first = null, this._last = null, this.length = 0;
      }
      push(l2) {
        var i;
        this.length++, typeof this.incr == "function" && this.incr(), i = { value: l2, prev: this._last, next: null }, this._last != null ? (this._last.next = i, this._last = i) : this._first = this._last = i;
      }
      shift() {
        var l2;
        if (this._first != null)
          return this.length--, typeof this.decr == "function" && this.decr(), l2 = this._first.value, (this._first = this._first.next) != null ? this._first.prev = null : this._last = null, l2;
      }
      first() {
        if (this._first != null)
          return this._first.value;
      }
      getArray() {
        var l2, i, p2;
        for (l2 = this._first, p2 = []; l2 != null; )
          p2.push((i = l2, l2 = l2.next, i.value));
        return p2;
      }
      forEachShift(l2) {
        var i;
        for (i = this.shift(); i != null; )
          l2(i), i = this.shift();
      }
      debug() {
        var l2, i, p2, d2, h2;
        for (l2 = this._first, h2 = []; l2 != null; )
          h2.push(
            (i = l2, l2 = l2.next, {
              value: i.value,
              prev: (p2 = i.prev) != null ? p2.value : void 0,
              next: (d2 = i.next) != null ? d2.value : void 0
            })
          );
        return h2;
      }
    };
    var a2 = n, c;
    c = class {
      constructor(l2) {
        if (this.instance = l2, this._events = {}, this.instance.on != null || this.instance.once != null || this.instance.removeAllListeners != null)
          throw new Error("An Emitter already exists for this object");
        this.instance.on = (i, p2) => this._addListener(i, "many", p2), this.instance.once = (i, p2) => this._addListener(i, "once", p2), this.instance.removeAllListeners = (i = null) => i != null ? delete this._events[i] : this._events = {};
      }
      _addListener(l2, i, p2) {
        var d2;
        return (d2 = this._events)[l2] == null && (d2[l2] = []), this._events[l2].push({ cb: p2, status: i }), this.instance;
      }
      listenerCount(l2) {
        return this._events[l2] != null ? this._events[l2].length : 0;
      }
      async trigger(l2, ...i) {
        var p2, d2;
        try {
          return l2 !== "debug" && this.trigger("debug", `Event triggered: ${l2}`, i), this._events[l2] == null ? void 0 : (this._events[l2] = this._events[l2].filter(function(h2) {
            return h2.status !== "none";
          }), d2 = this._events[l2].map(async (h2) => {
            var g2, T;
            if (h2.status !== "none") {
              h2.status === "once" && (h2.status = "none");
              try {
                return T = typeof h2.cb == "function" ? h2.cb(...i) : void 0, typeof T?.then == "function" ? await T : T;
              } catch (G) {
                return g2 = G, this.trigger("error", g2), null;
              }
            }
          }), (await Promise.all(d2)).find(function(h2) {
            return h2 != null;
          }));
        } catch (h2) {
          return p2 = h2, this.trigger("error", p2), null;
        }
      }
    };
    var u2 = c, f2, _2, m2;
    f2 = a2, _2 = u2, m2 = class {
      constructor(l2) {
        var i;
        this.Events = new _2(this), this._length = 0, this._lists = function() {
          var p2, d2, h2;
          for (h2 = [], i = p2 = 1, d2 = l2; 1 <= d2 ? p2 <= d2 : p2 >= d2; i = 1 <= d2 ? ++p2 : --p2)
            h2.push(
              new f2(
                () => this.incr(),
                () => this.decr()
              )
            );
          return h2;
        }.call(this);
      }
      incr() {
        if (this._length++ === 0)
          return this.Events.trigger("leftzero");
      }
      decr() {
        if (--this._length === 0)
          return this.Events.trigger("zero");
      }
      push(l2) {
        return this._lists[l2.options.priority].push(l2);
      }
      queued(l2) {
        return l2 != null ? this._lists[l2].length : this._length;
      }
      shiftAll(l2) {
        return this._lists.forEach(function(i) {
          return i.forEachShift(l2);
        });
      }
      getFirst(l2 = this._lists) {
        var i, p2, d2;
        for (i = 0, p2 = l2.length; i < p2; i++)
          if (d2 = l2[i], d2.length > 0)
            return d2;
        return [];
      }
      shiftLastFrom(l2) {
        return this.getFirst(this._lists.slice(l2).reverse()).shift();
      }
    };
    var E2 = m2, y2;
    y2 = class extends Error {
    };
    var R = y2, b2, F, v2, A2, D2;
    A2 = 10, F = 5, D2 = o2, b2 = R, v2 = class {
      constructor(l2, i, p2, d2, h2, g2, T, G) {
        this.task = l2, this.args = i, this.rejectOnDrop = h2, this.Events = g2, this._states = T, this.Promise = G, this.options = D2.load(p2, d2), this.options.priority = this._sanitizePriority(
          this.options.priority
        ), this.options.id === d2.id && (this.options.id = `${this.options.id}-${this._randomIndex()}`), this.promise = new this.Promise((I2, q2) => {
          this._resolve = I2, this._reject = q2;
        }), this.retryCount = 0;
      }
      _sanitizePriority(l2) {
        var i;
        return i = ~~l2 !== l2 ? F : l2, i < 0 ? 0 : i > A2 - 1 ? A2 - 1 : i;
      }
      _randomIndex() {
        return Math.random().toString(36).slice(2);
      }
      doDrop({
        error: l2,
        message: i = "This job has been dropped by Bottleneck"
      } = {}) {
        return this._states.remove(this.options.id) ? (this.rejectOnDrop && this._reject(l2 ?? new b2(i)), this.Events.trigger("dropped", {
          args: this.args,
          options: this.options,
          task: this.task,
          promise: this.promise
        }), true) : false;
      }
      _assertStatus(l2) {
        var i;
        if (i = this._states.jobStatus(this.options.id), !(i === l2 || l2 === "DONE" && i === null))
          throw new b2(
            `Invalid job status ${i}, expected ${l2}. Please open an issue at https://github.com/SGrondin/bottleneck/issues`
          );
      }
      doReceive() {
        return this._states.start(this.options.id), this.Events.trigger("received", {
          args: this.args,
          options: this.options
        });
      }
      doQueue(l2, i) {
        return this._assertStatus("RECEIVED"), this._states.next(this.options.id), this.Events.trigger("queued", {
          args: this.args,
          options: this.options,
          reachedHWM: l2,
          blocked: i
        });
      }
      doRun() {
        return this.retryCount === 0 ? (this._assertStatus("QUEUED"), this._states.next(this.options.id)) : this._assertStatus("EXECUTING"), this.Events.trigger("scheduled", {
          args: this.args,
          options: this.options
        });
      }
      async doExecute(l2, i, p2, d2) {
        var h2, g2, T;
        this.retryCount === 0 ? (this._assertStatus("RUNNING"), this._states.next(this.options.id)) : this._assertStatus("EXECUTING"), g2 = {
          args: this.args,
          options: this.options,
          retryCount: this.retryCount
        }, this.Events.trigger("executing", g2);
        try {
          if (T = await (l2 != null ? l2.schedule(this.options, this.task, ...this.args) : this.task(...this.args)), i())
            return this.doDone(g2), await d2(this.options, g2), this._assertStatus("DONE"), this._resolve(T);
        } catch (G) {
          return h2 = G, this._onFailure(h2, g2, i, p2, d2);
        }
      }
      doExpire(l2, i, p2) {
        var d2, h2;
        return this._states.jobStatus(this.options.id === "RUNNING") && this._states.next(this.options.id), this._assertStatus("EXECUTING"), h2 = {
          args: this.args,
          options: this.options,
          retryCount: this.retryCount
        }, d2 = new b2(
          `This job timed out after ${this.options.expiration} ms.`
        ), this._onFailure(d2, h2, l2, i, p2);
      }
      async _onFailure(l2, i, p2, d2, h2) {
        var g2, T;
        if (p2())
          return g2 = await this.Events.trigger("failed", l2, i), g2 != null ? (T = ~~g2, this.Events.trigger(
            "retry",
            `Retrying ${this.options.id} after ${T} ms`,
            i
          ), this.retryCount++, d2(T)) : (this.doDone(i), await h2(this.options, i), this._assertStatus("DONE"), this._reject(l2));
      }
      doDone(l2) {
        return this._assertStatus("EXECUTING"), this._states.next(this.options.id), this.Events.trigger("done", l2);
      }
    };
    var P = v2, O2, j2, x2;
    x2 = o2, O2 = R, j2 = class {
      constructor(l2, i, p2) {
        this.instance = l2, this.storeOptions = i, this.clientId = this.instance._randomIndex(), x2.load(p2, p2, this), this._nextRequest = this._lastReservoirRefresh = this._lastReservoirIncrease = Date.now(), this._running = 0, this._done = 0, this._unblockTime = 0, this.ready = this.Promise.resolve(), this.clients = {}, this._startHeartbeat();
      }
      _startHeartbeat() {
        var l2;
        return this.heartbeat == null && (this.storeOptions.reservoirRefreshInterval != null && this.storeOptions.reservoirRefreshAmount != null || this.storeOptions.reservoirIncreaseInterval != null && this.storeOptions.reservoirIncreaseAmount != null) ? typeof (l2 = this.heartbeat = setInterval(() => {
          var i, p2, d2, h2, g2;
          if (h2 = Date.now(), this.storeOptions.reservoirRefreshInterval != null && h2 >= this._lastReservoirRefresh + this.storeOptions.reservoirRefreshInterval && (this._lastReservoirRefresh = h2, this.storeOptions.reservoir = this.storeOptions.reservoirRefreshAmount, this.instance._drainAll(this.computeCapacity())), this.storeOptions.reservoirIncreaseInterval != null && h2 >= this._lastReservoirIncrease + this.storeOptions.reservoirIncreaseInterval && ({
            reservoirIncreaseAmount: i,
            reservoirIncreaseMaximum: d2,
            reservoir: g2
          } = this.storeOptions, this._lastReservoirIncrease = h2, p2 = d2 != null ? Math.min(i, d2 - g2) : i, p2 > 0))
            return this.storeOptions.reservoir += p2, this.instance._drainAll(this.computeCapacity());
        }, this.heartbeatInterval)).unref == "function" ? l2.unref() : void 0 : clearInterval(this.heartbeat);
      }
      async __publish__(l2) {
        return await this.yieldLoop(), this.instance.Events.trigger("message", l2.toString());
      }
      async __disconnect__(l2) {
        return await this.yieldLoop(), clearInterval(this.heartbeat), this.Promise.resolve();
      }
      yieldLoop(l2 = 0) {
        return new this.Promise(function(i, p2) {
          return setTimeout(i, l2);
        });
      }
      computePenalty() {
        var l2;
        return (l2 = this.storeOptions.penalty) != null ? l2 : 15 * this.storeOptions.minTime || 5e3;
      }
      async __updateSettings__(l2) {
        return await this.yieldLoop(), x2.overwrite(l2, l2, this.storeOptions), this._startHeartbeat(), this.instance._drainAll(this.computeCapacity()), true;
      }
      async __running__() {
        return await this.yieldLoop(), this._running;
      }
      async __queued__() {
        return await this.yieldLoop(), this.instance.queued();
      }
      async __done__() {
        return await this.yieldLoop(), this._done;
      }
      async __groupCheck__(l2) {
        return await this.yieldLoop(), this._nextRequest + this.timeout < l2;
      }
      computeCapacity() {
        var l2, i;
        return { maxConcurrent: l2, reservoir: i } = this.storeOptions, l2 != null && i != null ? Math.min(l2 - this._running, i) : l2 != null ? l2 - this._running : i ?? null;
      }
      conditionsCheck(l2) {
        var i;
        return i = this.computeCapacity(), i == null || l2 <= i;
      }
      async __incrementReservoir__(l2) {
        var i;
        return await this.yieldLoop(), i = this.storeOptions.reservoir += l2, this.instance._drainAll(this.computeCapacity()), i;
      }
      async __currentReservoir__() {
        return await this.yieldLoop(), this.storeOptions.reservoir;
      }
      isBlocked(l2) {
        return this._unblockTime >= l2;
      }
      check(l2, i) {
        return this.conditionsCheck(l2) && this._nextRequest - i <= 0;
      }
      async __check__(l2) {
        var i;
        return await this.yieldLoop(), i = Date.now(), this.check(l2, i);
      }
      async __register__(l2, i, p2) {
        var d2, h2;
        return await this.yieldLoop(), d2 = Date.now(), this.conditionsCheck(i) ? (this._running += i, this.storeOptions.reservoir != null && (this.storeOptions.reservoir -= i), h2 = Math.max(this._nextRequest - d2, 0), this._nextRequest = d2 + h2 + this.storeOptions.minTime, {
          success: true,
          wait: h2,
          reservoir: this.storeOptions.reservoir
        }) : { success: false };
      }
      strategyIsBlock() {
        return this.storeOptions.strategy === 3;
      }
      async __submit__(l2, i) {
        var p2, d2, h2;
        if (await this.yieldLoop(), this.storeOptions.maxConcurrent != null && i > this.storeOptions.maxConcurrent)
          throw new O2(
            `Impossible to add a job having a weight of ${i} to a limiter having a maxConcurrent setting of ${this.storeOptions.maxConcurrent}`
          );
        return d2 = Date.now(), h2 = this.storeOptions.highWater != null && l2 === this.storeOptions.highWater && !this.check(i, d2), p2 = this.strategyIsBlock() && (h2 || this.isBlocked(d2)), p2 && (this._unblockTime = d2 + this.computePenalty(), this._nextRequest = this._unblockTime + this.storeOptions.minTime, this.instance._dropAllQueued()), { reachedHWM: h2, blocked: p2, strategy: this.storeOptions.strategy };
      }
      async __free__(l2, i) {
        return await this.yieldLoop(), this._running -= i, this._done += i, this.instance._drainAll(this.computeCapacity()), { running: this._running };
      }
    };
    var he = j2, X2, Z;
    X2 = R, Z = class {
      constructor(l2) {
        this.status = l2, this._jobs = {}, this.counts = this.status.map(function() {
          return 0;
        });
      }
      next(l2) {
        var i, p2;
        if (i = this._jobs[l2], p2 = i + 1, i != null && p2 < this.status.length)
          return this.counts[i]--, this.counts[p2]++, this._jobs[l2]++;
        if (i != null)
          return this.counts[i]--, delete this._jobs[l2];
      }
      start(l2) {
        var i;
        return i = 0, this._jobs[l2] = i, this.counts[i]++;
      }
      remove(l2) {
        var i;
        return i = this._jobs[l2], i != null && (this.counts[i]--, delete this._jobs[l2]), i != null;
      }
      jobStatus(l2) {
        var i;
        return (i = this.status[this._jobs[l2]]) != null ? i : null;
      }
      statusJobs(l2) {
        var i, p2, d2, h2, g2;
        if (l2 != null) {
          if (p2 = this.status.indexOf(l2), p2 < 0)
            throw new X2(`status must be one of ${this.status.join(", ")}`);
          d2 = this._jobs, h2 = [];
          for (i in d2)
            g2 = d2[i], g2 === p2 && h2.push(i);
          return h2;
        } else
          return Object.keys(this._jobs);
      }
      statusCounts() {
        return this.counts.reduce(
          (l2, i, p2) => (l2[this.status[p2]] = i, l2),
          {}
        );
      }
    };
    var Do = Z, St, Ot;
    St = a2, Ot = class {
      constructor(l2, i) {
        this.schedule = this.schedule.bind(this), this.name = l2, this.Promise = i, this._running = 0, this._queue = new St();
      }
      isEmpty() {
        return this._queue.length === 0;
      }
      async _tryToRun() {
        var l2, i, p2, d2, h2, g2, T;
        if (this._running < 1 && this._queue.length > 0)
          return this._running++, {
            task: T,
            args: l2,
            resolve: h2,
            reject: d2
          } = this._queue.shift(), i = await async function() {
            try {
              return g2 = await T(...l2), function() {
                return h2(g2);
              };
            } catch (G) {
              return p2 = G, function() {
                return d2(p2);
              };
            }
          }(), this._running--, this._tryToRun(), i();
      }
      schedule(l2, ...i) {
        var p2, d2, h2;
        return h2 = d2 = null, p2 = new this.Promise(function(g2, T) {
          return h2 = g2, d2 = T;
        }), this._queue.push({ task: l2, args: i, resolve: h2, reject: d2 }), this._tryToRun(), p2;
      }
    };
    var Io = Ot, Pt = "2.19.5", jo = { version: Pt }, qo = Object.freeze({ version: Pt, default: jo }), Rt = () => console.log(
      "You must import the full version of Bottleneck in order to use this feature."
    ), Ft = () => console.log(
      "You must import the full version of Bottleneck in order to use this feature."
    ), Lo = () => console.log(
      "You must import the full version of Bottleneck in order to use this feature."
    ), Ut, Ct, Dt, It, jt, ke;
    ke = o2, Ut = u2, It = Rt, Dt = Ft, jt = Lo, Ct = function() {
      class w2 {
        constructor(i = {}) {
          this.deleteKey = this.deleteKey.bind(this), this.limiterOptions = i, ke.load(this.limiterOptions, this.defaults, this), this.Events = new Ut(this), this.instances = {}, this.Bottleneck = Vt, this._startAutoCleanup(), this.sharedConnection = this.connection != null, this.connection == null && (this.limiterOptions.datastore === "redis" ? this.connection = new It(
            Object.assign({}, this.limiterOptions, {
              Events: this.Events
            })
          ) : this.limiterOptions.datastore === "ioredis" && (this.connection = new Dt(
            Object.assign({}, this.limiterOptions, {
              Events: this.Events
            })
          )));
        }
        key(i = "") {
          var p2;
          return (p2 = this.instances[i]) != null ? p2 : (() => {
            var d2;
            return d2 = this.instances[i] = new this.Bottleneck(
              Object.assign(this.limiterOptions, {
                id: `${this.id}-${i}`,
                timeout: this.timeout,
                connection: this.connection
              })
            ), this.Events.trigger("created", d2, i), d2;
          })();
        }
        async deleteKey(i = "") {
          var p2, d2;
          return d2 = this.instances[i], this.connection && (p2 = await this.connection.__runCommand__([
            "del",
            ...jt.allKeys(`${this.id}-${i}`)
          ])), d2 != null && (delete this.instances[i], await d2.disconnect()), d2 != null || p2 > 0;
        }
        limiters() {
          var i, p2, d2, h2;
          p2 = this.instances, d2 = [];
          for (i in p2)
            h2 = p2[i], d2.push({ key: i, limiter: h2 });
          return d2;
        }
        keys() {
          return Object.keys(this.instances);
        }
        async clusterKeys() {
          var i, p2, d2, h2, g2, T, G, I2, q2;
          if (this.connection == null)
            return this.Promise.resolve(this.keys());
          for (T = [], i = null, q2 = `b_${this.id}-`.length, p2 = 9; i !== 0; )
            for ([I2, d2] = await this.connection.__runCommand__([
              "scan",
              i ?? 0,
              "match",
              `b_${this.id}-*_settings`,
              "count",
              1e4
            ]), i = ~~I2, h2 = 0, G = d2.length; h2 < G; h2++)
              g2 = d2[h2], T.push(g2.slice(q2, -p2));
          return T;
        }
        _startAutoCleanup() {
          var i;
          return clearInterval(this.interval), typeof (i = this.interval = setInterval(async () => {
            var p2, d2, h2, g2, T, G;
            T = Date.now(), h2 = this.instances, g2 = [];
            for (d2 in h2) {
              G = h2[d2];
              try {
                await G._store.__groupCheck__(T) ? g2.push(this.deleteKey(d2)) : g2.push(void 0);
              } catch (I2) {
                p2 = I2, g2.push(G.Events.trigger("error", p2));
              }
            }
            return g2;
          }, this.timeout / 2)).unref == "function" ? i.unref() : void 0;
        }
        updateSettings(i = {}) {
          if (ke.overwrite(i, this.defaults, this), ke.overwrite(i, i, this.limiterOptions), i.timeout != null)
            return this._startAutoCleanup();
        }
        disconnect(i = true) {
          var p2;
          if (!this.sharedConnection)
            return (p2 = this.connection) != null ? p2.disconnect(i) : void 0;
        }
      }
      return w2.prototype.defaults = {
        timeout: 1e3 * 60 * 5,
        connection: null,
        Promise,
        id: "group-key"
      }, w2;
    }.call(e);
    var xo = Ct, qt, Lt, xt;
    xt = o2, Lt = u2, qt = function() {
      class w2 {
        constructor(i = {}) {
          this.options = i, xt.load(this.options, this.defaults, this), this.Events = new Lt(this), this._arr = [], this._resetPromise(), this._lastFlush = Date.now();
        }
        _resetPromise() {
          return this._promise = new this.Promise(
            (i, p2) => this._resolve = i
          );
        }
        _flush() {
          return clearTimeout(this._timeout), this._lastFlush = Date.now(), this._resolve(), this.Events.trigger("batch", this._arr), this._arr = [], this._resetPromise();
        }
        add(i) {
          var p2;
          return this._arr.push(i), p2 = this._promise, this._arr.length === this.maxSize ? this._flush() : this.maxTime != null && this._arr.length === 1 && (this._timeout = setTimeout(
            () => this._flush(),
            this.maxTime
          )), p2;
        }
      }
      return w2.prototype.defaults = { maxTime: null, maxSize: null, Promise }, w2;
    }.call(e);
    var $o = qt, Wo = () => console.log(
      "You must import the full version of Bottleneck in order to use this feature."
    ), Ho = t(qo), $t, Wt, Me, Ne, Ht, Be, zt, Mt, Nt, Ve, W, Bt = [].splice;
    Be = 10, Wt = 5, W = o2, zt = E2, Ne = P, Ht = he, Mt = Wo, Me = u2, Nt = Do, Ve = Io, $t = function() {
      class w2 {
        constructor(i = {}, ...p2) {
          var d2, h2;
          this._addToQueue = this._addToQueue.bind(this), this._validateOptions(i, p2), W.load(i, this.instanceDefaults, this), this._queues = new zt(Be), this._scheduled = {}, this._states = new Nt(
            ["RECEIVED", "QUEUED", "RUNNING", "EXECUTING"].concat(
              this.trackDoneStatus ? ["DONE"] : []
            )
          ), this._limiter = null, this.Events = new Me(this), this._submitLock = new Ve("submit", this.Promise), this._registerLock = new Ve("register", this.Promise), h2 = W.load(i, this.storeDefaults, {}), this._store = function() {
            if (this.datastore === "redis" || this.datastore === "ioredis" || this.connection != null)
              return d2 = W.load(i, this.redisStoreDefaults, {}), new Mt(this, h2, d2);
            if (this.datastore === "local")
              return d2 = W.load(i, this.localStoreDefaults, {}), new Ht(this, h2, d2);
            throw new w2.prototype.BottleneckError(
              `Invalid datastore type: ${this.datastore}`
            );
          }.call(this), this._queues.on("leftzero", () => {
            var g2;
            return (g2 = this._store.heartbeat) != null && typeof g2.ref == "function" ? g2.ref() : void 0;
          }), this._queues.on("zero", () => {
            var g2;
            return (g2 = this._store.heartbeat) != null && typeof g2.unref == "function" ? g2.unref() : void 0;
          });
        }
        _validateOptions(i, p2) {
          if (!(i != null && typeof i == "object" && p2.length === 0))
            throw new w2.prototype.BottleneckError(
              "Bottleneck v2 takes a single object argument. Refer to https://github.com/SGrondin/bottleneck#upgrading-to-v2 if you're upgrading from Bottleneck v1."
            );
        }
        ready() {
          return this._store.ready;
        }
        clients() {
          return this._store.clients;
        }
        channel() {
          return `b_${this.id}`;
        }
        channel_client() {
          return `b_${this.id}_${this._store.clientId}`;
        }
        publish(i) {
          return this._store.__publish__(i);
        }
        disconnect(i = true) {
          return this._store.__disconnect__(i);
        }
        chain(i) {
          return this._limiter = i, this;
        }
        queued(i) {
          return this._queues.queued(i);
        }
        clusterQueued() {
          return this._store.__queued__();
        }
        empty() {
          return this.queued() === 0 && this._submitLock.isEmpty();
        }
        running() {
          return this._store.__running__();
        }
        done() {
          return this._store.__done__();
        }
        jobStatus(i) {
          return this._states.jobStatus(i);
        }
        jobs(i) {
          return this._states.statusJobs(i);
        }
        counts() {
          return this._states.statusCounts();
        }
        _randomIndex() {
          return Math.random().toString(36).slice(2);
        }
        check(i = 1) {
          return this._store.__check__(i);
        }
        _clearGlobalState(i) {
          return this._scheduled[i] != null ? (clearTimeout(this._scheduled[i].expiration), delete this._scheduled[i], true) : false;
        }
        async _free(i, p2, d2, h2) {
          var g2, T;
          try {
            if ({ running: T } = await this._store.__free__(i, d2.weight), this.Events.trigger("debug", `Freed ${d2.id}`, h2), T === 0 && this.empty())
              return this.Events.trigger("idle");
          } catch (G) {
            return g2 = G, this.Events.trigger("error", g2);
          }
        }
        _run(i, p2, d2) {
          var h2, g2, T;
          return p2.doRun(), h2 = this._clearGlobalState.bind(this, i), T = this._run.bind(this, i, p2), g2 = this._free.bind(this, i, p2), this._scheduled[i] = {
            timeout: setTimeout(
              () => p2.doExecute(this._limiter, h2, T, g2),
              d2
            ),
            expiration: p2.options.expiration != null ? setTimeout(function() {
              return p2.doExpire(h2, T, g2);
            }, d2 + p2.options.expiration) : void 0,
            job: p2
          };
        }
        _drainOne(i) {
          return this._registerLock.schedule(() => {
            var p2, d2, h2, g2, T;
            return this.queued() === 0 ? this.Promise.resolve(null) : (T = this._queues.getFirst(), { options: g2, args: p2 } = h2 = T.first(), i != null && g2.weight > i ? this.Promise.resolve(null) : (this.Events.trigger("debug", `Draining ${g2.id}`, {
              args: p2,
              options: g2
            }), d2 = this._randomIndex(), this._store.__register__(d2, g2.weight, g2.expiration).then(({ success: G, wait: I2, reservoir: q2 }) => {
              var ge;
              return this.Events.trigger("debug", `Drained ${g2.id}`, {
                success: G,
                args: p2,
                options: g2
              }), G ? (T.shift(), ge = this.empty(), ge && this.Events.trigger("empty"), q2 === 0 && this.Events.trigger("depleted", ge), this._run(d2, h2, I2), this.Promise.resolve(g2.weight)) : this.Promise.resolve(null);
            })));
          });
        }
        _drainAll(i, p2 = 0) {
          return this._drainOne(i).then((d2) => {
            var h2;
            return d2 != null ? (h2 = i != null ? i - d2 : i, this._drainAll(h2, p2 + d2)) : this.Promise.resolve(p2);
          }).catch((d2) => this.Events.trigger("error", d2));
        }
        _dropAllQueued(i) {
          return this._queues.shiftAll(function(p2) {
            return p2.doDrop({ message: i });
          });
        }
        stop(i = {}) {
          var p2, d2;
          return i = W.load(i, this.stopDefaults), d2 = (h2) => {
            var g2;
            return g2 = () => {
              var T;
              return T = this._states.counts, T[0] + T[1] + T[2] + T[3] === h2;
            }, new this.Promise(
              (T, G) => g2() ? T() : this.on("done", () => {
                if (g2())
                  return this.removeAllListeners("done"), T();
              })
            );
          }, p2 = i.dropWaitingJobs ? (this._run = function(h2, g2) {
            return g2.doDrop({ message: i.dropErrorMessage });
          }, this._drainOne = () => this.Promise.resolve(null), this._registerLock.schedule(
            () => this._submitLock.schedule(() => {
              var h2, g2, T;
              g2 = this._scheduled;
              for (h2 in g2)
                T = g2[h2], this.jobStatus(T.job.options.id) === "RUNNING" && (clearTimeout(T.timeout), clearTimeout(T.expiration), T.job.doDrop({ message: i.dropErrorMessage }));
              return this._dropAllQueued(i.dropErrorMessage), d2(0);
            })
          )) : this.schedule({ priority: Be - 1, weight: 0 }, () => d2(1)), this._receive = function(h2) {
            return h2._reject(
              new w2.prototype.BottleneckError(i.enqueueErrorMessage)
            );
          }, this.stop = () => this.Promise.reject(
            new w2.prototype.BottleneckError(
              "stop() has already been called"
            )
          ), p2;
        }
        async _addToQueue(i) {
          var p2, d2, h2, g2, T, G, I2;
          ({ args: p2, options: g2 } = i);
          try {
            ({
              reachedHWM: T,
              blocked: d2,
              strategy: I2
            } = await this._store.__submit__(this.queued(), g2.weight));
          } catch (q2) {
            return h2 = q2, this.Events.trigger("debug", `Could not queue ${g2.id}`, {
              args: p2,
              options: g2,
              error: h2
            }), i.doDrop({ error: h2 }), false;
          }
          return d2 ? (i.doDrop(), true) : T && (G = I2 === w2.prototype.strategy.LEAK ? this._queues.shiftLastFrom(g2.priority) : I2 === w2.prototype.strategy.OVERFLOW_PRIORITY ? this._queues.shiftLastFrom(g2.priority + 1) : I2 === w2.prototype.strategy.OVERFLOW ? i : void 0, G?.doDrop(), G == null || I2 === w2.prototype.strategy.OVERFLOW) ? (G == null && i.doDrop(), T) : (i.doQueue(T, d2), this._queues.push(i), await this._drainAll(), T);
        }
        _receive(i) {
          return this._states.jobStatus(i.options.id) != null ? (i._reject(
            new w2.prototype.BottleneckError(
              `A job with the same id already exists (id=${i.options.id})`
            )
          ), false) : (i.doReceive(), this._submitLock.schedule(this._addToQueue, i));
        }
        submit(...i) {
          var p2, d2, h2, g2, T, G, I2;
          return typeof i[0] == "function" ? (T = i, [d2, ...i] = T, [p2] = Bt.call(i, -1), g2 = W.load({}, this.jobDefaults)) : (G = i, [g2, d2, ...i] = G, [p2] = Bt.call(i, -1), g2 = W.load(g2, this.jobDefaults)), I2 = (...q2) => new this.Promise(function(ge, Mo) {
            return d2(...q2, function(...Kt) {
              return (Kt[0] != null ? Mo : ge)(Kt);
            });
          }), h2 = new Ne(
            I2,
            i,
            g2,
            this.jobDefaults,
            this.rejectOnDrop,
            this.Events,
            this._states,
            this.Promise
          ), h2.promise.then(function(q2) {
            return typeof p2 == "function" ? p2(...q2) : void 0;
          }).catch(function(q2) {
            return Array.isArray(q2) ? typeof p2 == "function" ? p2(...q2) : void 0 : typeof p2 == "function" ? p2(q2) : void 0;
          }), this._receive(h2);
        }
        schedule(...i) {
          var p2, d2, h2;
          return typeof i[0] == "function" ? ([h2, ...i] = i, d2 = {}) : [d2, h2, ...i] = i, p2 = new Ne(
            h2,
            i,
            d2,
            this.jobDefaults,
            this.rejectOnDrop,
            this.Events,
            this._states,
            this.Promise
          ), this._receive(p2), p2.promise;
        }
        wrap(i) {
          var p2, d2;
          return p2 = this.schedule.bind(this), d2 = function(...h2) {
            return p2(i.bind(this), ...h2);
          }, d2.withOptions = function(h2, ...g2) {
            return p2(h2, i, ...g2);
          }, d2;
        }
        async updateSettings(i = {}) {
          return await this._store.__updateSettings__(
            W.overwrite(i, this.storeDefaults)
          ), W.overwrite(i, this.instanceDefaults, this), this;
        }
        currentReservoir() {
          return this._store.__currentReservoir__();
        }
        incrementReservoir(i = 0) {
          return this._store.__incrementReservoir__(i);
        }
      }
      return w2.default = w2, w2.Events = Me, w2.version = w2.prototype.version = Ho.version, w2.strategy = w2.prototype.strategy = { LEAK: 1, OVERFLOW: 2, OVERFLOW_PRIORITY: 4, BLOCK: 3 }, w2.BottleneckError = w2.prototype.BottleneckError = R, w2.Group = w2.prototype.Group = xo, w2.RedisConnection = w2.prototype.RedisConnection = Rt, w2.IORedisConnection = w2.prototype.IORedisConnection = Ft, w2.Batcher = w2.prototype.Batcher = $o, w2.prototype.jobDefaults = {
        priority: Wt,
        weight: 1,
        expiration: null,
        id: "<no-id>"
      }, w2.prototype.storeDefaults = {
        maxConcurrent: null,
        minTime: 0,
        highWater: null,
        strategy: w2.prototype.strategy.LEAK,
        penalty: null,
        reservoir: null,
        reservoirRefreshInterval: null,
        reservoirRefreshAmount: null,
        reservoirIncreaseInterval: null,
        reservoirIncreaseAmount: null,
        reservoirIncreaseMaximum: null
      }, w2.prototype.localStoreDefaults = {
        Promise,
        timeout: null,
        heartbeatInterval: 250
      }, w2.prototype.redisStoreDefaults = {
        Promise,
        timeout: null,
        heartbeatInterval: 5e3,
        clientTimeout: 1e4,
        Redis: null,
        clientOptions: {},
        clusterNodes: null,
        clearDatastore: false,
        connection: null
      }, w2.prototype.instanceDefaults = {
        datastore: "local",
        connection: null,
        id: "<no-id>",
        rejectOnDrop: true,
        trackDoneStatus: false,
        Promise
      }, w2.prototype.stopDefaults = {
        enqueueErrorMessage: "This limiter has been stopped and cannot accept new jobs.",
        dropWaitingJobs: true,
        dropErrorMessage: "This limiter has been stopped."
      }, w2;
    }.call(e);
    var Vt = $t, zo = Vt;
    return zo;
  });
});
var V2 = U2((dl, es) => {
  es.exports = function(t) {
    return btoa(t);
  };
});
var ts = {};
ee(ts, { oauthAuthorizationUrl: () => Pi });
function Pi(e) {
  let t = e.clientType || "oauth-app", r = e.baseUrl || "https://github.com", s2 = {
    clientType: t,
    allowSignup: e.allowSignup !== false,
    clientId: e.clientId,
    login: e.login || null,
    redirectUrl: e.redirectUrl || null,
    state: e.state || Math.random().toString(36).substr(2),
    url: ""
  };
  if (t === "oauth-app") {
    let o2 = "scopes" in e ? e.scopes : [];
    s2.scopes = typeof o2 == "string" ? o2.split(/[,\s]+/).filter(Boolean) : o2;
  }
  return s2.url = Ri(`${r}/login/oauth/authorize`, s2), s2;
}
function Ri(e, t) {
  let r = {
    allowSignup: "allow_signup",
    clientId: "client_id",
    login: "login",
    redirectUrl: "redirect_uri",
    scopes: "scope",
    state: "state"
  }, s2 = e;
  return Object.keys(r).filter((o2) => t[o2] !== null).filter(
    (o2) => o2 !== "scopes" ? true : t.clientType === "github-app" ? false : !Array.isArray(t[o2]) || t[o2].length > 0
  ).map((o2) => [r[o2], `${t[o2]}`]).forEach(([o2, n], a2) => {
    s2 += a2 === 0 ? "?" : "&", s2 += `${o2}=${encodeURIComponent(n)}`;
  }), s2;
}
var rs = B2(() => {
});
var $ = U2((hl, us) => {
  "use strict";
  var Fi = Object.create, Re = Object.defineProperty, Ui = Object.getOwnPropertyDescriptor, Ci = Object.getOwnPropertyNames, Di = Object.getPrototypeOf, Ii = Object.prototype.hasOwnProperty, ji = (e, t) => {
    for (var r in t)
      Re(e, r, { get: t[r], enumerable: true });
  }, is = (e, t, r, s2) => {
    if (t && typeof t == "object" || typeof t == "function")
      for (let o2 of Ci(t))
        !Ii.call(e, o2) && o2 !== r && Re(e, o2, {
          get: () => t[o2],
          enumerable: !(s2 = Ui(t, o2)) || s2.enumerable
        });
    return e;
  }, Ee = (e, t, r) => (r = e != null ? Fi(Di(e)) : {}, is(
    t || !e || !e.__esModule ? Re(r, "default", { value: e, enumerable: true }) : r,
    e
  )), qi = (e) => is(Re({}, "__esModule", { value: true }), e), as = {};
  ji(as, {
    VERSION: () => Li,
    checkToken: () => Yi,
    createDeviceCode: () => Bi,
    deleteAuthorization: () => pa,
    deleteToken: () => ca,
    exchangeDeviceCode: () => Ki,
    exchangeWebFlowCode: () => Mi,
    getWebFlowAuthorizationUrl: () => Hi,
    refreshToken: () => Zi,
    resetToken: () => na,
    scopeToken: () => ra
  });
  us.exports = qi(as);
  var Li = "4.0.0", xi = (rs(), k2(ts)), $i = (C2(), k2(L2)), Wi = (J(), k2(_e));
  function cs(e) {
    let t = e.endpoint.DEFAULTS;
    return /^https:\/\/(api\.)?github\.com$/.test(t.baseUrl) ? "https://github.com" : t.baseUrl.replace("/api/v3", "");
  }
  async function Fe(e, t, r) {
    let s2 = { baseUrl: cs(e), headers: { accept: "application/json" }, ...r }, o2 = await e(t, s2);
    if ("error" in o2.data) {
      let n = new Wi.RequestError(
        `${o2.data.error_description} (${o2.data.error}, ${o2.data.error_uri})`,
        400,
        { request: e.endpoint.merge(t, s2), headers: o2.headers }
      );
      throw n.response = o2, n;
    }
    return o2;
  }
  function Hi({ request: e = $i.request, ...t }) {
    let r = cs(e);
    return (0, xi.oauthAuthorizationUrl)({ ...t, baseUrl: r });
  }
  var zi = (C2(), k2(L2));
  async function Mi(e) {
    let t = e.request || zi.request, r = await Fe(t, "POST /login/oauth/access_token", {
      client_id: e.clientId,
      client_secret: e.clientSecret,
      code: e.code,
      redirect_uri: e.redirectUrl
    }), s2 = {
      clientType: e.clientType,
      clientId: e.clientId,
      clientSecret: e.clientSecret,
      token: r.data.access_token,
      scopes: r.data.scope.split(/\s+/).filter(Boolean)
    };
    if (e.clientType === "github-app") {
      if ("refresh_token" in r.data) {
        let o2 = new Date(r.headers.date).getTime();
        s2.refreshToken = r.data.refresh_token, s2.expiresAt = ss(o2, r.data.expires_in), s2.refreshTokenExpiresAt = ss(o2, r.data.refresh_token_expires_in);
      }
      delete s2.scopes;
    }
    return { ...r, authentication: s2 };
  }
  function ss(e, t) {
    return new Date(e + t * 1e3).toISOString();
  }
  var Ni = (C2(), k2(L2));
  async function Bi(e) {
    let t = e.request || Ni.request, r = { client_id: e.clientId };
    return "scopes" in e && Array.isArray(e.scopes) && (r.scope = e.scopes.join(" ")), Fe(t, "POST /login/device/code", r);
  }
  var Vi = (C2(), k2(L2));
  async function Ki(e) {
    let t = e.request || Vi.request, r = await Fe(t, "POST /login/oauth/access_token", {
      client_id: e.clientId,
      device_code: e.code,
      grant_type: "urn:ietf:params:oauth:grant-type:device_code"
    }), s2 = {
      clientType: e.clientType,
      clientId: e.clientId,
      token: r.data.access_token,
      scopes: r.data.scope.split(/\s+/).filter(Boolean)
    };
    if ("clientSecret" in e && (s2.clientSecret = e.clientSecret), e.clientType === "github-app") {
      if ("refresh_token" in r.data) {
        let o2 = new Date(r.headers.date).getTime();
        s2.refreshToken = r.data.refresh_token, s2.expiresAt = os(o2, r.data.expires_in), s2.refreshTokenExpiresAt = os(o2, r.data.refresh_token_expires_in);
      }
      delete s2.scopes;
    }
    return { ...r, authentication: s2 };
  }
  function os(e, t) {
    return new Date(e + t * 1e3).toISOString();
  }
  var Ji = (C2(), k2(L2)), Qi = Ee(V2());
  async function Yi(e) {
    let r = await (e.request || Ji.request)(
      "POST /applications/{client_id}/token",
      {
        headers: {
          authorization: `basic ${(0, Qi.default)(
            `${e.clientId}:${e.clientSecret}`
          )}`
        },
        client_id: e.clientId,
        access_token: e.token
      }
    ), s2 = {
      clientType: e.clientType,
      clientId: e.clientId,
      clientSecret: e.clientSecret,
      token: e.token,
      scopes: r.data.scopes
    };
    return r.data.expires_at && (s2.expiresAt = r.data.expires_at), e.clientType === "github-app" && delete s2.scopes, { ...r, authentication: s2 };
  }
  var Xi = (C2(), k2(L2));
  async function Zi(e) {
    let t = e.request || Xi.request, r = await Fe(t, "POST /login/oauth/access_token", {
      client_id: e.clientId,
      client_secret: e.clientSecret,
      grant_type: "refresh_token",
      refresh_token: e.refreshToken
    }), s2 = new Date(r.headers.date).getTime(), o2 = {
      clientType: "github-app",
      clientId: e.clientId,
      clientSecret: e.clientSecret,
      token: r.data.access_token,
      refreshToken: r.data.refresh_token,
      expiresAt: ns(s2, r.data.expires_in),
      refreshTokenExpiresAt: ns(s2, r.data.refresh_token_expires_in)
    };
    return { ...r, authentication: o2 };
  }
  function ns(e, t) {
    return new Date(e + t * 1e3).toISOString();
  }
  var ea = (C2(), k2(L2)), ta = Ee(V2());
  async function ra(e) {
    let {
      request: t,
      clientType: r,
      clientId: s2,
      clientSecret: o2,
      token: n,
      ...a2
    } = e, u2 = await (t || ea.request)(
      "POST /applications/{client_id}/token/scoped",
      {
        headers: { authorization: `basic ${(0, ta.default)(`${s2}:${o2}`)}` },
        client_id: s2,
        access_token: n,
        ...a2
      }
    ), f2 = Object.assign(
      { clientType: r, clientId: s2, clientSecret: o2, token: u2.data.token },
      u2.data.expires_at ? { expiresAt: u2.data.expires_at } : {}
    );
    return { ...u2, authentication: f2 };
  }
  var sa = (C2(), k2(L2)), oa = Ee(V2());
  async function na(e) {
    let t = e.request || sa.request, r = (0, oa.default)(`${e.clientId}:${e.clientSecret}`), s2 = await t("PATCH /applications/{client_id}/token", {
      headers: { authorization: `basic ${r}` },
      client_id: e.clientId,
      access_token: e.token
    }), o2 = {
      clientType: e.clientType,
      clientId: e.clientId,
      clientSecret: e.clientSecret,
      token: s2.data.token,
      scopes: s2.data.scopes
    };
    return s2.data.expires_at && (o2.expiresAt = s2.data.expires_at), e.clientType === "github-app" && delete o2.scopes, { ...s2, authentication: o2 };
  }
  var ia = (C2(), k2(L2)), aa = Ee(V2());
  async function ca(e) {
    let t = e.request || ia.request, r = (0, aa.default)(`${e.clientId}:${e.clientSecret}`);
    return t("DELETE /applications/{client_id}/token", {
      headers: { authorization: `basic ${r}` },
      client_id: e.clientId,
      access_token: e.token
    });
  }
  var ua = (C2(), k2(L2)), la = Ee(V2());
  async function pa(e) {
    let t = e.request || ua.request, r = (0, la.default)(`${e.clientId}:${e.clientSecret}`);
    return t("DELETE /applications/{client_id}/grant", {
      headers: { authorization: `basic ${r}` },
      client_id: e.clientId,
      access_token: e.token
    });
  }
});
async function ds(e, t) {
  let r = da(e, t.auth);
  if (r)
    return r;
  let { data: s2 } = await (0, we.createDeviceCode)({
    clientType: e.clientType,
    clientId: e.clientId,
    request: t.request || e.request,
    scopes: t.auth.scopes || e.scopes
  });
  await e.onVerification(s2);
  let o2 = await _t(t.request || e.request, e.clientId, e.clientType, s2);
  return e.authentication = o2, o2;
}
function da(e, t) {
  if (t.refresh === true || !e.authentication)
    return false;
  if (e.clientType === "github-app")
    return e.authentication;
  let r = e.authentication, s2 = ("scopes" in t && t.scopes || e.scopes).join(" "), o2 = r.scopes.join(" ");
  return s2 === o2 ? r : false;
}
async function ls(e) {
  await new Promise((t) => setTimeout(t, e * 1e3));
}
async function _t(e, t, r, s2) {
  try {
    let o2 = { clientId: t, request: e, code: s2.device_code }, { authentication: n } = r === "oauth-app" ? await (0, we.exchangeDeviceCode)({ ...o2, clientType: "oauth-app" }) : await (0, we.exchangeDeviceCode)({
      ...o2,
      clientType: "github-app"
    });
    return { type: "token", tokenType: "oauth", ...n };
  } catch (o2) {
    if (!o2.response)
      throw o2;
    let n = o2.response.data.error;
    if (n === "authorization_pending")
      return await ls(s2.interval), _t(e, t, r, s2);
    if (n === "slow_down")
      return await ls(s2.interval + 5), _t(e, t, r, s2);
    throw o2;
  }
}
async function ha(e, t) {
  return ds(e, { auth: t });
}
async function ga(e, t, r, s2) {
  let o2 = t.endpoint.merge(r, s2);
  if (/\/login\/(oauth\/access_token|device\/code)$/.test(o2.url))
    return t(o2);
  let { token: n } = await ds(e, { request: t, auth: { type: "oauth" } });
  return o2.headers.authorization = `token ${n}`, t(o2);
}
function hs(e) {
  let t = e.request || te.defaults({
    headers: {
      "user-agent": `octokit-auth-oauth-device.js/${ma} ${(0, ps.getUserAgent)()}`
    }
  }), { request: r = t, ...s2 } = e, o2 = e.clientType === "github-app" ? { ...s2, clientType: "github-app", request: r } : { ...s2, clientType: "oauth-app", request: r, scopes: e.scopes || [] };
  if (!e.clientId)
    throw new Error(
      '[@octokit/auth-oauth-device] "clientId" option must be set (https://github.com/octokit/auth-oauth-device.js#usage)'
    );
  if (!e.onVerification)
    throw new Error(
      '[@octokit/auth-oauth-device] "onVerification" option must be a function (https://github.com/octokit/auth-oauth-device.js#usage)'
    );
  return Object.assign(ha.bind(null, o2), { hook: ga.bind(null, o2) });
}
var ps;
var we;
var ma;
var gs = B2(() => {
  ps = S(H());
  C2();
  we = S($());
  ma = "6.0.1";
});
var oe = {};
ee(oe, { createOAuthUserAuth: () => se, requiresBasicAuth: () => Ue });
async function ms(e) {
  if ("code" in e.strategyOptions) {
    let { authentication: t } = await (0, Ts.exchangeWebFlowCode)({
      clientId: e.clientId,
      clientSecret: e.clientSecret,
      clientType: e.clientType,
      onTokenCreated: e.onTokenCreated,
      ...e.strategyOptions,
      request: e.request
    });
    return { type: "token", tokenType: "oauth", ...t };
  }
  if ("onVerification" in e.strategyOptions) {
    let r = await hs({
      clientType: e.clientType,
      clientId: e.clientId,
      onTokenCreated: e.onTokenCreated,
      ...e.strategyOptions,
      request: e.request
    })({ type: "oauth" });
    return { clientSecret: e.clientSecret, ...r };
  }
  if ("token" in e.strategyOptions)
    return {
      type: "token",
      tokenType: "oauth",
      clientId: e.clientId,
      clientSecret: e.clientSecret,
      clientType: e.clientType,
      onTokenCreated: e.onTokenCreated,
      ...e.strategyOptions
    };
  throw new Error("[@octokit/auth-oauth-user] Invalid strategy options");
}
async function Tt(e, t = {}) {
  if (e.authentication || (e.authentication = e.clientType === "oauth-app" ? await ms(e) : await ms(e)), e.authentication.invalid)
    throw new Error("[@octokit/auth-oauth-user] Token is invalid");
  let r = e.authentication;
  if ("expiresAt" in r && (t.type === "refresh" || new Date(r.expiresAt) < /* @__PURE__ */ new Date())) {
    let { authentication: s2 } = await (0, M2.refreshToken)({
      clientType: "github-app",
      clientId: e.clientId,
      clientSecret: e.clientSecret,
      refreshToken: r.refreshToken,
      request: e.request
    });
    e.authentication = { tokenType: "oauth", type: "token", ...s2 };
  }
  if (t.type === "refresh") {
    if (e.clientType === "oauth-app")
      throw new Error(
        "[@octokit/auth-oauth-user] OAuth Apps do not support expiring tokens"
      );
    if (!r.hasOwnProperty("expiresAt"))
      throw new Error("[@octokit/auth-oauth-user] Refresh token missing");
    await e.onTokenCreated?.(e.authentication, { type: t.type });
  }
  if (t.type === "check" || t.type === "reset") {
    let s2 = t.type === "check" ? M2.checkToken : M2.resetToken;
    try {
      let { authentication: o2 } = await s2({
        clientType: e.clientType,
        clientId: e.clientId,
        clientSecret: e.clientSecret,
        token: e.authentication.token,
        request: e.request
      });
      return e.authentication = { tokenType: "oauth", type: "token", ...o2 }, t.type === "reset" && await e.onTokenCreated?.(e.authentication, { type: t.type }), e.authentication;
    } catch (o2) {
      throw o2.status === 404 && (o2.message = "[@octokit/auth-oauth-user] Token is invalid", e.authentication.invalid = true), o2;
    }
  }
  if (t.type === "delete" || t.type === "deleteAuthorization") {
    let s2 = t.type === "delete" ? M2.deleteToken : M2.deleteAuthorization;
    try {
      await s2({
        clientType: e.clientType,
        clientId: e.clientId,
        clientSecret: e.clientSecret,
        token: e.authentication.token,
        request: e.request
      });
    } catch (o2) {
      if (o2.status !== 404)
        throw o2;
    }
    return e.authentication.invalid = true, e.authentication;
  }
  return e.authentication;
}
function Ue(e) {
  return e && fa.test(e);
}
async function _a(e, t, r, s2 = {}) {
  let o2 = t.endpoint.merge(r, s2);
  if (/\/login\/(oauth\/access_token|device\/code)$/.test(o2.url))
    return t(o2);
  if (Ue(o2.url)) {
    let a2 = (0, Es.default)(`${e.clientId}:${e.clientSecret}`);
    return o2.headers.authorization = `basic ${a2}`, t(o2);
  }
  let { token: n } = e.clientType === "oauth-app" ? await Tt({ ...e, request: t }) : await Tt({ ...e, request: t });
  return o2.headers.authorization = "token " + n, t(o2);
}
function se({
  clientId: e,
  clientSecret: t,
  clientType: r = "oauth-app",
  request: s2 = te.defaults({
    headers: {
      "user-agent": `octokit-auth-oauth-app.js/${_s} ${(0, fs.getUserAgent)()}`
    }
  }),
  onTokenCreated: o2,
  ...n
}) {
  let a2 = Object.assign({
    clientType: r,
    clientId: e,
    clientSecret: t,
    onTokenCreated: o2,
    strategyOptions: n,
    request: s2
  });
  return Object.assign(Tt.bind(null, a2), { hook: _a.bind(null, a2) });
}
var fs;
var Ts;
var M2;
var Es;
var _s;
var fa;
var N2 = B2(() => {
  fs = S(H());
  C2();
  gs();
  Ts = S($()), M2 = S($()), Es = S(V2()), _s = "4.0.1";
  fa = /\/applications\/[^/]+\/(token|grant)s?/;
  se.VERSION = _s;
});
var ye = {};
ee(ye, { createOAuthAppAuth: () => ya, createOAuthUserAuth: () => se });
async function Ta(e, t) {
  if (t.type === "oauth-app")
    return {
      type: "oauth-app",
      clientId: e.clientId,
      clientSecret: e.clientSecret,
      clientType: e.clientType,
      headers: {
        authorization: `basic ${(0, ys.default)(
          `${e.clientId}:${e.clientSecret}`
        )}`
      }
    };
  if ("factory" in t) {
    let { type: o2, ...n } = { ...t, ...e };
    return t.factory(n);
  }
  let r = {
    clientId: e.clientId,
    clientSecret: e.clientSecret,
    request: e.request,
    ...t
  };
  return (e.clientType === "oauth-app" ? await se({ ...r, clientType: e.clientType }) : await se({ ...r, clientType: e.clientType }))();
}
async function Ea(e, t, r, s2) {
  let o2 = t.endpoint.merge(r, s2);
  if (/\/login\/(oauth\/access_token|device\/code)$/.test(o2.url))
    return t(o2);
  if (e.clientType === "github-app" && !Ue(o2.url))
    throw new Error(
      `[@octokit/auth-oauth-app] GitHub Apps cannot use their client ID/secret for basic authentication for endpoints other than "/applications/{client_id}/**". "${o2.method} ${o2.url}" is not supported.`
    );
  let n = (0, bs.default)(`${e.clientId}:${e.clientSecret}`);
  o2.headers.authorization = `basic ${n}`;
  try {
    return await t(o2);
  } catch (a2) {
    throw a2.status !== 401 || (a2.message = `[@octokit/auth-oauth-app] "${o2.method} ${o2.url}" does not support clientId/clientSecret basic authentication.`), a2;
  }
}
function ya(e) {
  let t = Object.assign(
    {
      request: te.defaults({
        headers: {
          "user-agent": `octokit-auth-oauth-app.js/${wa} ${(0, ws.getUserAgent)()}`
        }
      }),
      clientType: "oauth-app"
    },
    e
  );
  return Object.assign(Ta.bind(null, t), { hook: Ea.bind(null, t) });
}
var ws;
var ys;
var bs;
var wa;
var be = B2(() => {
  ws = S(H());
  C2();
  ys = S(V2());
  N2();
  bs = S(V2());
  N2();
  N2();
  wa = "7.0.1";
});
var Ps = {};
ee(Ps, { githubAppJwt: () => va });
function vs(e, t, r, s2, o2, n, a2) {
  try {
    var c = e[n](a2), u2 = c.value;
  } catch (f2) {
    return void r(f2);
  }
  c.done ? t(u2) : Promise.resolve(u2).then(s2, o2);
}
function Gs(e) {
  return function() {
    var t = this, r = arguments;
    return new Promise(function(s2, o2) {
      var n = e.apply(t, r);
      function a2(u2) {
        vs(n, s2, o2, a2, c, "next", u2);
      }
      function c(u2) {
        vs(n, s2, o2, a2, c, "throw", u2);
      }
      a2(void 0);
    });
  };
}
function ks(e) {
  for (var t = new ArrayBuffer(e.length), r = new Uint8Array(t), s2 = 0, o2 = e.length; s2 < o2; s2++)
    r[s2] = e.charCodeAt(s2);
  return t;
}
function Ss(e) {
  return e.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}
function As(e) {
  return Ss(btoa(JSON.stringify(e)));
}
function va(e) {
  return Os.apply(this, arguments);
}
function Os() {
  return (Os = Gs(function* (e) {
    var { id: t, privateKey: r, now: s2 = Math.floor(Date.now() / 1e3) } = e, o2 = s2 - 30, n = o2 + 600, a2 = { iat: o2, exp: n, iss: t };
    return {
      appId: t,
      expiration: n,
      token: yield ba({ privateKey: r, payload: a2 })
    };
  })).apply(this, arguments);
}
var ba;
var Rs = B2(() => {
  ba = function() {
    var e = Gs(function* (t) {
      var { privateKey: r, payload: s2 } = t;
      if (/BEGIN RSA PRIVATE KEY/.test(r))
        throw new Error(
          "[universal-github-app-jwt] Private Key is in PKCS#1 format, but only PKCS#8 is supported. See https://github.com/gr2m/universal-github-app-jwt#readme"
        );
      var o2, n = { name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-256" } }, a2 = (o2 = r.trim().split(
        `
`
      ).slice(1, -1).join(""), ks(atob(o2))), c = yield crypto.subtle.importKey("pkcs8", a2, n, false, ["sign"]), u2 = function(m2, E2) {
        return "".concat(As(m2), ".").concat(As(E2));
      }({ alg: "RS256", typ: "JWT" }, s2), f2 = ks(u2), _2 = function(m2) {
        for (var E2 = "", y2 = new Uint8Array(m2), R = y2.byteLength, b2 = 0; b2 < R; b2++)
          E2 += String.fromCharCode(y2[b2]);
        return Ss(btoa(E2));
      }(yield crypto.subtle.sign(n.name, c, f2));
      return "".concat(u2, ".").concat(_2);
    });
    return function(t) {
      return e.apply(this, arguments);
    };
  }();
});
var Is = U2((De) => {
  var _a3, _c, _c2, _p, _m, _f, _P, _o2, __, _s2, _r2, _e2, _u2, _d, _a4, _n2, _T, _i2, _E, _w, _h, _y, _A, _l, _C, C_fn, _G, _k, _D, _g, _L, L_fn, _S, _R, _I, _b, b_fn, _v, v_fn, _j, j_fn, _F, F_fn, _U, U_fn, _t2, t_fn, _q, q_fn, _O, O_fn, _b2;
  "use strict";
  Object.defineProperty(De, "__esModule", { value: true });
  De.LRUCache = void 0;
  var ue = typeof performance == "object" && performance && typeof performance.now == "function" ? performance : Date, Us = /* @__PURE__ */ new Set(), Et = typeof __Process$ == "object" && __Process$ ? __Process$ : {}, Cs = (e, t, r, s2) => {
    typeof Et.emitWarning == "function" ? Et.emitWarning(e, t, r, s2) : console.error(`[${r}] ${t}: ${e}`);
  }, Ce = globalThis.AbortController, Fs = globalThis.AbortSignal;
  if (typeof Ce > "u") {
    Fs = class {
      constructor() {
        __publicField(this, "onabort");
        __publicField(this, "_onabort", []);
        __publicField(this, "reason");
        __publicField(this, "aborted", false);
      }
      addEventListener(s2, o2) {
        this._onabort.push(o2);
      }
    }, Ce = class {
      constructor() {
        __publicField(this, "signal", new Fs());
        t();
      }
      abort(s2) {
        if (!this.signal.aborted) {
          this.signal.reason = s2, this.signal.aborted = true;
          for (let o2 of this.signal._onabort)
            o2(s2);
          this.signal.onabort?.(s2);
        }
      }
    };
    let e = Et.env?.LRU_CACHE_IGNORE_AC_WARNING !== "1", t = () => {
      e && (e = false, Cs(
        "AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.",
        "NO_ABORT_CONTROLLER",
        "ENOTSUP",
        t
      ));
    };
  }
  var ka = (e) => !Us.has(e), kl = Symbol("type"), Q = (e) => e && e === Math.floor(e) && e > 0 && isFinite(e), Ds = (e) => Q(e) ? e <= Math.pow(2, 8) ? Uint8Array : e <= Math.pow(2, 16) ? Uint16Array : e <= Math.pow(2, 32) ? Uint32Array : e <= Number.MAX_SAFE_INTEGER ? le : null : null, le = class extends Array {
    constructor(t) {
      super(t), this.fill(0);
    }
  }, wt = (_a3 = class {
    constructor(t, r) {
      __publicField(this, "heap");
      __publicField(this, "length");
      if (!__privateGet(_a3, _c))
        throw new TypeError("instantiate Stack using Stack.create(n)");
      this.heap = new r(t), this.length = 0;
    }
    static create(t) {
      let r = Ds(t);
      if (!r)
        return [];
      __privateSet(_a3, _c, true);
      let s2 = new _a3(t, r);
      return __privateSet(_a3, _c, false), s2;
    }
    push(t) {
      this.heap[this.length++] = t;
    }
    pop() {
      return this.heap[--this.length];
    }
  }, _c = new WeakMap(), __privateAdd(_a3, _c, false), _a3), yt = (_b2 = class {
    constructor(t) {
      __privateAdd(this, _C);
      __privateAdd(this, _L);
      __privateAdd(this, _b);
      __privateAdd(this, _v);
      __privateAdd(this, _j);
      __privateAdd(this, _F);
      __privateAdd(this, _U);
      __privateAdd(this, _t2);
      __privateAdd(this, _q);
      __privateAdd(this, _O);
      __privateAdd(this, _c2, void 0);
      __privateAdd(this, _p, void 0);
      __privateAdd(this, _m, void 0);
      __privateAdd(this, _f, void 0);
      __privateAdd(this, _P, void 0);
      __publicField(this, "ttl");
      __publicField(this, "ttlResolution");
      __publicField(this, "ttlAutopurge");
      __publicField(this, "updateAgeOnGet");
      __publicField(this, "updateAgeOnHas");
      __publicField(this, "allowStale");
      __publicField(this, "noDisposeOnSet");
      __publicField(this, "noUpdateTTL");
      __publicField(this, "maxEntrySize");
      __publicField(this, "sizeCalculation");
      __publicField(this, "noDeleteOnFetchRejection");
      __publicField(this, "noDeleteOnStaleGet");
      __publicField(this, "allowStaleOnFetchAbort");
      __publicField(this, "allowStaleOnFetchRejection");
      __publicField(this, "ignoreFetchAbort");
      __privateAdd(this, _o2, void 0);
      __privateAdd(this, __, void 0);
      __privateAdd(this, _s2, void 0);
      __privateAdd(this, _r2, void 0);
      __privateAdd(this, _e2, void 0);
      __privateAdd(this, _u2, void 0);
      __privateAdd(this, _d, void 0);
      __privateAdd(this, _a4, void 0);
      __privateAdd(this, _n2, void 0);
      __privateAdd(this, _T, void 0);
      __privateAdd(this, _i2, void 0);
      __privateAdd(this, _E, void 0);
      __privateAdd(this, _w, void 0);
      __privateAdd(this, _h, void 0);
      __privateAdd(this, _y, void 0);
      __privateAdd(this, _A, void 0);
      __privateAdd(this, _l, void 0);
      __privateAdd(this, _G, () => {
      });
      __privateAdd(this, _k, () => {
      });
      __privateAdd(this, _D, () => {
      });
      __privateAdd(this, _g, () => false);
      __privateAdd(this, _S, (t) => {
      });
      __privateAdd(this, _R, (t, r, s2) => {
      });
      __privateAdd(this, _I, (t, r, s2, o2) => {
        if (s2 || o2)
          throw new TypeError(
            "cannot set size without setting maxSize or maxEntrySize on cache"
          );
        return 0;
      });
      let {
        max: r = 0,
        ttl: s2,
        ttlResolution: o2 = 1,
        ttlAutopurge: n,
        updateAgeOnGet: a2,
        updateAgeOnHas: c,
        allowStale: u2,
        dispose: f2,
        disposeAfter: _2,
        noDisposeOnSet: m2,
        noUpdateTTL: E2,
        maxSize: y2 = 0,
        maxEntrySize: R = 0,
        sizeCalculation: b2,
        fetchMethod: F,
        noDeleteOnFetchRejection: v2,
        noDeleteOnStaleGet: A2,
        allowStaleOnFetchRejection: D2,
        allowStaleOnFetchAbort: P,
        ignoreFetchAbort: O2
      } = t;
      if (r !== 0 && !Q(r))
        throw new TypeError("max option must be a nonnegative integer");
      let j2 = r ? Ds(r) : Array;
      if (!j2)
        throw new Error("invalid max value: " + r);
      if (__privateSet(this, _c2, r), __privateSet(this, _p, y2), this.maxEntrySize = R || __privateGet(this, _p), this.sizeCalculation = b2, this.sizeCalculation) {
        if (!__privateGet(this, _p) && !this.maxEntrySize)
          throw new TypeError(
            "cannot set sizeCalculation without setting maxSize or maxEntrySize"
          );
        if (typeof this.sizeCalculation != "function")
          throw new TypeError("sizeCalculation set to non-function");
      }
      if (F !== void 0 && typeof F != "function")
        throw new TypeError("fetchMethod must be a function if specified");
      if (__privateSet(this, _P, F), __privateSet(this, _A, !!F), __privateSet(this, _s2, /* @__PURE__ */ new Map()), __privateSet(this, _r2, new Array(r).fill(void 0)), __privateSet(this, _e2, new Array(r).fill(void 0)), __privateSet(this, _u2, new j2(r)), __privateSet(this, _d, new j2(r)), __privateSet(this, _a4, 0), __privateSet(this, _n2, 0), __privateSet(this, _T, wt.create(r)), __privateSet(this, _o2, 0), __privateSet(this, __, 0), typeof f2 == "function" && __privateSet(this, _m, f2), typeof _2 == "function" ? (__privateSet(this, _f, _2), __privateSet(this, _i2, [])) : (__privateSet(this, _f, void 0), __privateSet(this, _i2, void 0)), __privateSet(this, _y, !!__privateGet(this, _m)), __privateSet(this, _l, !!__privateGet(this, _f)), this.noDisposeOnSet = !!m2, this.noUpdateTTL = !!E2, this.noDeleteOnFetchRejection = !!v2, this.allowStaleOnFetchRejection = !!D2, this.allowStaleOnFetchAbort = !!P, this.ignoreFetchAbort = !!O2, this.maxEntrySize !== 0) {
        if (__privateGet(this, _p) !== 0 && !Q(__privateGet(this, _p)))
          throw new TypeError(
            "maxSize must be a positive integer if specified"
          );
        if (!Q(this.maxEntrySize))
          throw new TypeError(
            "maxEntrySize must be a positive integer if specified"
          );
        __privateMethod(this, _L, L_fn).call(this);
      }
      if (this.allowStale = !!u2, this.noDeleteOnStaleGet = !!A2, this.updateAgeOnGet = !!a2, this.updateAgeOnHas = !!c, this.ttlResolution = Q(o2) || o2 === 0 ? o2 : 1, this.ttlAutopurge = !!n, this.ttl = s2 || 0, this.ttl) {
        if (!Q(this.ttl))
          throw new TypeError("ttl must be a positive integer if specified");
        __privateMethod(this, _C, C_fn).call(this);
      }
      if (__privateGet(this, _c2) === 0 && this.ttl === 0 && __privateGet(this, _p) === 0)
        throw new TypeError(
          "At least one of max, maxSize, or ttl is required"
        );
      if (!this.ttlAutopurge && !__privateGet(this, _c2) && !__privateGet(this, _p)) {
        let x2 = "LRU_CACHE_UNBOUNDED";
        ka(x2) && (Us.add(x2), Cs(
          "TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.",
          "UnboundedCacheWarning",
          x2,
          _b2
        ));
      }
    }
    static unsafeExposeInternals(t) {
      return {
        starts: __privateGet(t, _w),
        ttls: __privateGet(t, _h),
        sizes: __privateGet(t, _E),
        keyMap: __privateGet(t, _s2),
        keyList: __privateGet(t, _r2),
        valList: __privateGet(t, _e2),
        next: __privateGet(t, _u2),
        prev: __privateGet(t, _d),
        get head() {
          return __privateGet(t, _a4);
        },
        get tail() {
          return __privateGet(t, _n2);
        },
        free: __privateGet(t, _T),
        isBackgroundFetch: (r) => {
          var _a5;
          return __privateMethod(_a5 = t, _t2, t_fn).call(_a5, r);
        },
        backgroundFetch: (r, s2, o2, n) => {
          var _a5;
          return __privateMethod(_a5 = t, _U, U_fn).call(_a5, r, s2, o2, n);
        },
        moveToTail: (r) => {
          var _a5;
          return __privateMethod(_a5 = t, _O, O_fn).call(_a5, r);
        },
        indexes: (r) => {
          var _a5;
          return __privateMethod(_a5 = t, _b, b_fn).call(_a5, r);
        },
        rindexes: (r) => {
          var _a5;
          return __privateMethod(_a5 = t, _v, v_fn).call(_a5, r);
        },
        isStale: (r) => {
          var _a5;
          return __privateGet(_a5 = t, _g).call(_a5, r);
        }
      };
    }
    get max() {
      return __privateGet(this, _c2);
    }
    get maxSize() {
      return __privateGet(this, _p);
    }
    get calculatedSize() {
      return __privateGet(this, __);
    }
    get size() {
      return __privateGet(this, _o2);
    }
    get fetchMethod() {
      return __privateGet(this, _P);
    }
    get dispose() {
      return __privateGet(this, _m);
    }
    get disposeAfter() {
      return __privateGet(this, _f);
    }
    getRemainingTTL(t) {
      return __privateGet(this, _s2).has(t) ? 1 / 0 : 0;
    }
    *entries() {
      for (let t of __privateMethod(this, _b, b_fn).call(this))
        __privateGet(this, _e2)[t] !== void 0 && __privateGet(this, _r2)[t] !== void 0 && !__privateMethod(this, _t2, t_fn).call(this, __privateGet(this, _e2)[t]) && (yield [__privateGet(this, _r2)[t], __privateGet(this, _e2)[t]]);
    }
    *rentries() {
      for (let t of __privateMethod(this, _v, v_fn).call(this))
        __privateGet(this, _e2)[t] !== void 0 && __privateGet(this, _r2)[t] !== void 0 && !__privateMethod(this, _t2, t_fn).call(this, __privateGet(this, _e2)[t]) && (yield [__privateGet(this, _r2)[t], __privateGet(this, _e2)[t]]);
    }
    *keys() {
      for (let t of __privateMethod(this, _b, b_fn).call(this)) {
        let r = __privateGet(this, _r2)[t];
        r !== void 0 && !__privateMethod(this, _t2, t_fn).call(this, __privateGet(this, _e2)[t]) && (yield r);
      }
    }
    *rkeys() {
      for (let t of __privateMethod(this, _v, v_fn).call(this)) {
        let r = __privateGet(this, _r2)[t];
        r !== void 0 && !__privateMethod(this, _t2, t_fn).call(this, __privateGet(this, _e2)[t]) && (yield r);
      }
    }
    *values() {
      for (let t of __privateMethod(this, _b, b_fn).call(this))
        __privateGet(this, _e2)[t] !== void 0 && !__privateMethod(this, _t2, t_fn).call(this, __privateGet(this, _e2)[t]) && (yield __privateGet(this, _e2)[t]);
    }
    *rvalues() {
      for (let t of __privateMethod(this, _v, v_fn).call(this))
        __privateGet(this, _e2)[t] !== void 0 && !__privateMethod(this, _t2, t_fn).call(this, __privateGet(this, _e2)[t]) && (yield __privateGet(this, _e2)[t]);
    }
    [Symbol.iterator]() {
      return this.entries();
    }
    find(t, r = {}) {
      for (let s2 of __privateMethod(this, _b, b_fn).call(this)) {
        let o2 = __privateGet(this, _e2)[s2], n = __privateMethod(this, _t2, t_fn).call(this, o2) ? o2.__staleWhileFetching : o2;
        if (n !== void 0 && t(n, __privateGet(this, _r2)[s2], this))
          return this.get(__privateGet(this, _r2)[s2], r);
      }
    }
    forEach(t, r = this) {
      for (let s2 of __privateMethod(this, _b, b_fn).call(this)) {
        let o2 = __privateGet(this, _e2)[s2], n = __privateMethod(this, _t2, t_fn).call(this, o2) ? o2.__staleWhileFetching : o2;
        n !== void 0 && t.call(r, n, __privateGet(this, _r2)[s2], this);
      }
    }
    rforEach(t, r = this) {
      for (let s2 of __privateMethod(this, _v, v_fn).call(this)) {
        let o2 = __privateGet(this, _e2)[s2], n = __privateMethod(this, _t2, t_fn).call(this, o2) ? o2.__staleWhileFetching : o2;
        n !== void 0 && t.call(r, n, __privateGet(this, _r2)[s2], this);
      }
    }
    purgeStale() {
      let t = false;
      for (let r of __privateMethod(this, _v, v_fn).call(this, { allowStale: true }))
        __privateGet(this, _g).call(this, r) && (this.delete(__privateGet(this, _r2)[r]), t = true);
      return t;
    }
    info(t) {
      let r = __privateGet(this, _s2).get(t);
      if (r === void 0)
        return;
      let s2 = __privateGet(this, _e2)[r], o2 = __privateMethod(this, _t2, t_fn).call(this, s2) ? s2.__staleWhileFetching : s2;
      if (o2 === void 0)
        return;
      let n = { value: o2 };
      if (__privateGet(this, _h) && __privateGet(this, _w)) {
        let a2 = __privateGet(this, _h)[r], c = __privateGet(this, _w)[r];
        if (a2 && c) {
          let u2 = a2 - (ue.now() - c);
          n.ttl = u2, n.start = Date.now();
        }
      }
      return __privateGet(this, _E) && (n.size = __privateGet(this, _E)[r]), n;
    }
    dump() {
      let t = [];
      for (let r of __privateMethod(this, _b, b_fn).call(this, { allowStale: true })) {
        let s2 = __privateGet(this, _r2)[r], o2 = __privateGet(this, _e2)[r], n = __privateMethod(this, _t2, t_fn).call(this, o2) ? o2.__staleWhileFetching : o2;
        if (n === void 0 || s2 === void 0)
          continue;
        let a2 = { value: n };
        if (__privateGet(this, _h) && __privateGet(this, _w)) {
          a2.ttl = __privateGet(this, _h)[r];
          let c = ue.now() - __privateGet(this, _w)[r];
          a2.start = Math.floor(Date.now() - c);
        }
        __privateGet(this, _E) && (a2.size = __privateGet(this, _E)[r]), t.unshift([s2, a2]);
      }
      return t;
    }
    load(t) {
      this.clear();
      for (let [r, s2] of t) {
        if (s2.start) {
          let o2 = Date.now() - s2.start;
          s2.start = ue.now() - o2;
        }
        this.set(r, s2.value, s2);
      }
    }
    set(t, r, s2 = {}) {
      var _a5, _b3, _c3;
      if (r === void 0)
        return this.delete(t), this;
      let {
        ttl: o2 = this.ttl,
        start: n,
        noDisposeOnSet: a2 = this.noDisposeOnSet,
        sizeCalculation: c = this.sizeCalculation,
        status: u2
      } = s2, { noUpdateTTL: f2 = this.noUpdateTTL } = s2, _2 = __privateGet(this, _I).call(this, t, r, s2.size || 0, c);
      if (this.maxEntrySize && _2 > this.maxEntrySize)
        return u2 && (u2.set = "miss", u2.maxEntrySizeExceeded = true), this.delete(t), this;
      let m2 = __privateGet(this, _o2) === 0 ? void 0 : __privateGet(this, _s2).get(t);
      if (m2 === void 0)
        m2 = __privateGet(this, _o2) === 0 ? __privateGet(this, _n2) : __privateGet(this, _T).length !== 0 ? __privateGet(this, _T).pop() : __privateGet(this, _o2) === __privateGet(this, _c2) ? __privateMethod(this, _F, F_fn).call(this, false) : __privateGet(this, _o2), __privateGet(this, _r2)[m2] = t, __privateGet(this, _e2)[m2] = r, __privateGet(this, _s2).set(t, m2), __privateGet(this, _u2)[__privateGet(this, _n2)] = m2, __privateGet(this, _d)[m2] = __privateGet(this, _n2), __privateSet(this, _n2, m2), __privateWrapper(this, _o2)._++, __privateGet(this, _R).call(this, m2, _2, u2), u2 && (u2.set = "add"), f2 = false;
      else {
        __privateMethod(this, _O, O_fn).call(this, m2);
        let E2 = __privateGet(this, _e2)[m2];
        if (r !== E2) {
          if (__privateGet(this, _A) && __privateMethod(this, _t2, t_fn).call(this, E2)) {
            E2.__abortController.abort(new Error("replaced"));
            let { __staleWhileFetching: y2 } = E2;
            y2 !== void 0 && !a2 && (__privateGet(this, _y) && ((_a5 = __privateGet(this, _m)) == null ? void 0 : _a5.call(this, y2, t, "set")), __privateGet(this, _l) && __privateGet(this, _i2)?.push([y2, t, "set"]));
          } else
            a2 || (__privateGet(this, _y) && ((_b3 = __privateGet(this, _m)) == null ? void 0 : _b3.call(this, E2, t, "set")), __privateGet(this, _l) && __privateGet(this, _i2)?.push([E2, t, "set"]));
          if (__privateGet(this, _S).call(this, m2), __privateGet(this, _R).call(this, m2, _2, u2), __privateGet(this, _e2)[m2] = r, u2) {
            u2.set = "replace";
            let y2 = E2 && __privateMethod(this, _t2, t_fn).call(this, E2) ? E2.__staleWhileFetching : E2;
            y2 !== void 0 && (u2.oldValue = y2);
          }
        } else
          u2 && (u2.set = "update");
      }
      if (o2 !== 0 && !__privateGet(this, _h) && __privateMethod(this, _C, C_fn).call(this), __privateGet(this, _h) && (f2 || __privateGet(this, _D).call(this, m2, o2, n), u2 && __privateGet(this, _k).call(this, u2, m2)), !a2 && __privateGet(this, _l) && __privateGet(this, _i2)) {
        let E2 = __privateGet(this, _i2), y2;
        for (; y2 = E2?.shift(); )
          (_c3 = __privateGet(this, _f)) == null ? void 0 : _c3.call(this, ...y2);
      }
      return this;
    }
    pop() {
      var _a5;
      try {
        for (; __privateGet(this, _o2); ) {
          let t = __privateGet(this, _e2)[__privateGet(this, _a4)];
          if (__privateMethod(this, _F, F_fn).call(this, true), __privateMethod(this, _t2, t_fn).call(this, t)) {
            if (t.__staleWhileFetching)
              return t.__staleWhileFetching;
          } else if (t !== void 0)
            return t;
        }
      } finally {
        if (__privateGet(this, _l) && __privateGet(this, _i2)) {
          let t = __privateGet(this, _i2), r;
          for (; r = t?.shift(); )
            (_a5 = __privateGet(this, _f)) == null ? void 0 : _a5.call(this, ...r);
        }
      }
    }
    has(t, r = {}) {
      let { updateAgeOnHas: s2 = this.updateAgeOnHas, status: o2 } = r, n = __privateGet(this, _s2).get(t);
      if (n !== void 0) {
        let a2 = __privateGet(this, _e2)[n];
        if (__privateMethod(this, _t2, t_fn).call(this, a2) && a2.__staleWhileFetching === void 0)
          return false;
        if (__privateGet(this, _g).call(this, n))
          o2 && (o2.has = "stale", __privateGet(this, _k).call(this, o2, n));
        else
          return s2 && __privateGet(this, _G).call(this, n), o2 && (o2.has = "hit", __privateGet(this, _k).call(this, o2, n)), true;
      } else
        o2 && (o2.has = "miss");
      return false;
    }
    peek(t, r = {}) {
      let { allowStale: s2 = this.allowStale } = r, o2 = __privateGet(this, _s2).get(t);
      if (o2 === void 0 || !s2 && __privateGet(this, _g).call(this, o2))
        return;
      let n = __privateGet(this, _e2)[o2];
      return __privateMethod(this, _t2, t_fn).call(this, n) ? n.__staleWhileFetching : n;
    }
    async fetch(t, r = {}) {
      let {
        allowStale: s2 = this.allowStale,
        updateAgeOnGet: o2 = this.updateAgeOnGet,
        noDeleteOnStaleGet: n = this.noDeleteOnStaleGet,
        ttl: a2 = this.ttl,
        noDisposeOnSet: c = this.noDisposeOnSet,
        size: u2 = 0,
        sizeCalculation: f2 = this.sizeCalculation,
        noUpdateTTL: _2 = this.noUpdateTTL,
        noDeleteOnFetchRejection: m2 = this.noDeleteOnFetchRejection,
        allowStaleOnFetchRejection: E2 = this.allowStaleOnFetchRejection,
        ignoreFetchAbort: y2 = this.ignoreFetchAbort,
        allowStaleOnFetchAbort: R = this.allowStaleOnFetchAbort,
        context: b2,
        forceRefresh: F = false,
        status: v2,
        signal: A2
      } = r;
      if (!__privateGet(this, _A))
        return v2 && (v2.fetch = "get"), this.get(t, {
          allowStale: s2,
          updateAgeOnGet: o2,
          noDeleteOnStaleGet: n,
          status: v2
        });
      let D2 = {
        allowStale: s2,
        updateAgeOnGet: o2,
        noDeleteOnStaleGet: n,
        ttl: a2,
        noDisposeOnSet: c,
        size: u2,
        sizeCalculation: f2,
        noUpdateTTL: _2,
        noDeleteOnFetchRejection: m2,
        allowStaleOnFetchRejection: E2,
        allowStaleOnFetchAbort: R,
        ignoreFetchAbort: y2,
        status: v2,
        signal: A2
      }, P = __privateGet(this, _s2).get(t);
      if (P === void 0) {
        v2 && (v2.fetch = "miss");
        let O2 = __privateMethod(this, _U, U_fn).call(this, t, P, D2, b2);
        return O2.__returned = O2;
      } else {
        let O2 = __privateGet(this, _e2)[P];
        if (__privateMethod(this, _t2, t_fn).call(this, O2)) {
          let Z = s2 && O2.__staleWhileFetching !== void 0;
          return v2 && (v2.fetch = "inflight", Z && (v2.returnedStale = true)), Z ? O2.__staleWhileFetching : O2.__returned = O2;
        }
        let j2 = __privateGet(this, _g).call(this, P);
        if (!F && !j2)
          return v2 && (v2.fetch = "hit"), __privateMethod(this, _O, O_fn).call(this, P), o2 && __privateGet(this, _G).call(this, P), v2 && __privateGet(this, _k).call(this, v2, P), O2;
        let x2 = __privateMethod(this, _U, U_fn).call(this, t, P, D2, b2), X2 = x2.__staleWhileFetching !== void 0 && s2;
        return v2 && (v2.fetch = j2 ? "stale" : "refresh", X2 && j2 && (v2.returnedStale = true)), X2 ? x2.__staleWhileFetching : x2.__returned = x2;
      }
    }
    get(t, r = {}) {
      let {
        allowStale: s2 = this.allowStale,
        updateAgeOnGet: o2 = this.updateAgeOnGet,
        noDeleteOnStaleGet: n = this.noDeleteOnStaleGet,
        status: a2
      } = r, c = __privateGet(this, _s2).get(t);
      if (c !== void 0) {
        let u2 = __privateGet(this, _e2)[c], f2 = __privateMethod(this, _t2, t_fn).call(this, u2);
        return a2 && __privateGet(this, _k).call(this, a2, c), __privateGet(this, _g).call(this, c) ? (a2 && (a2.get = "stale"), f2 ? (a2 && s2 && u2.__staleWhileFetching !== void 0 && (a2.returnedStale = true), s2 ? u2.__staleWhileFetching : void 0) : (n || this.delete(t), a2 && s2 && (a2.returnedStale = true), s2 ? u2 : void 0)) : (a2 && (a2.get = "hit"), f2 ? u2.__staleWhileFetching : (__privateMethod(this, _O, O_fn).call(this, c), o2 && __privateGet(this, _G).call(this, c), u2));
      } else
        a2 && (a2.get = "miss");
    }
    delete(t) {
      var _a5, _b3;
      let r = false;
      if (__privateGet(this, _o2) !== 0) {
        let s2 = __privateGet(this, _s2).get(t);
        if (s2 !== void 0)
          if (r = true, __privateGet(this, _o2) === 1)
            this.clear();
          else {
            __privateGet(this, _S).call(this, s2);
            let o2 = __privateGet(this, _e2)[s2];
            if (__privateMethod(this, _t2, t_fn).call(this, o2) ? o2.__abortController.abort(new Error("deleted")) : (__privateGet(this, _y) || __privateGet(this, _l)) && (__privateGet(this, _y) && ((_a5 = __privateGet(this, _m)) == null ? void 0 : _a5.call(this, o2, t, "delete")), __privateGet(this, _l) && __privateGet(this, _i2)?.push([o2, t, "delete"])), __privateGet(this, _s2).delete(t), __privateGet(this, _r2)[s2] = void 0, __privateGet(this, _e2)[s2] = void 0, s2 === __privateGet(this, _n2))
              __privateSet(this, _n2, __privateGet(this, _d)[s2]);
            else if (s2 === __privateGet(this, _a4))
              __privateSet(this, _a4, __privateGet(this, _u2)[s2]);
            else {
              let n = __privateGet(this, _d)[s2];
              __privateGet(this, _u2)[n] = __privateGet(this, _u2)[s2];
              let a2 = __privateGet(this, _u2)[s2];
              __privateGet(this, _d)[a2] = __privateGet(this, _d)[s2];
            }
            __privateWrapper(this, _o2)._--, __privateGet(this, _T).push(s2);
          }
      }
      if (__privateGet(this, _l) && __privateGet(this, _i2)?.length) {
        let s2 = __privateGet(this, _i2), o2;
        for (; o2 = s2?.shift(); )
          (_b3 = __privateGet(this, _f)) == null ? void 0 : _b3.call(this, ...o2);
      }
      return r;
    }
    clear() {
      var _a5, _b3;
      for (let t of __privateMethod(this, _v, v_fn).call(this, { allowStale: true })) {
        let r = __privateGet(this, _e2)[t];
        if (__privateMethod(this, _t2, t_fn).call(this, r))
          r.__abortController.abort(new Error("deleted"));
        else {
          let s2 = __privateGet(this, _r2)[t];
          __privateGet(this, _y) && ((_a5 = __privateGet(this, _m)) == null ? void 0 : _a5.call(this, r, s2, "delete")), __privateGet(this, _l) && __privateGet(this, _i2)?.push([r, s2, "delete"]);
        }
      }
      if (__privateGet(this, _s2).clear(), __privateGet(this, _e2).fill(void 0), __privateGet(this, _r2).fill(void 0), __privateGet(this, _h) && __privateGet(this, _w) && (__privateGet(this, _h).fill(0), __privateGet(this, _w).fill(0)), __privateGet(this, _E) && __privateGet(this, _E).fill(0), __privateSet(this, _a4, 0), __privateSet(this, _n2, 0), __privateGet(this, _T).length = 0, __privateSet(this, __, 0), __privateSet(this, _o2, 0), __privateGet(this, _l) && __privateGet(this, _i2)) {
        let t = __privateGet(this, _i2), r;
        for (; r = t?.shift(); )
          (_b3 = __privateGet(this, _f)) == null ? void 0 : _b3.call(this, ...r);
      }
    }
  }, _c2 = new WeakMap(), _p = new WeakMap(), _m = new WeakMap(), _f = new WeakMap(), _P = new WeakMap(), _o2 = new WeakMap(), __ = new WeakMap(), _s2 = new WeakMap(), _r2 = new WeakMap(), _e2 = new WeakMap(), _u2 = new WeakMap(), _d = new WeakMap(), _a4 = new WeakMap(), _n2 = new WeakMap(), _T = new WeakMap(), _i2 = new WeakMap(), _E = new WeakMap(), _w = new WeakMap(), _h = new WeakMap(), _y = new WeakMap(), _A = new WeakMap(), _l = new WeakMap(), _C = new WeakSet(), C_fn = function() {
    let t = new le(__privateGet(this, _c2)), r = new le(__privateGet(this, _c2));
    __privateSet(this, _h, t), __privateSet(this, _w, r), __privateSet(this, _D, (n, a2, c = ue.now()) => {
      if (r[n] = a2 !== 0 ? c : 0, t[n] = a2, a2 !== 0 && this.ttlAutopurge) {
        let u2 = setTimeout(() => {
          __privateGet(this, _g).call(this, n) && this.delete(__privateGet(this, _r2)[n]);
        }, a2 + 1);
        u2.unref && u2.unref();
      }
    }), __privateSet(this, _G, (n) => {
      r[n] = t[n] !== 0 ? ue.now() : 0;
    }), __privateSet(this, _k, (n, a2) => {
      if (t[a2]) {
        let c = t[a2], u2 = r[a2];
        if (!c || !u2)
          return;
        n.ttl = c, n.start = u2, n.now = s2 || o2();
        let f2 = n.now - u2;
        n.remainingTTL = c - f2;
      }
    });
    let s2 = 0, o2 = () => {
      let n = ue.now();
      if (this.ttlResolution > 0) {
        s2 = n;
        let a2 = setTimeout(() => s2 = 0, this.ttlResolution);
        a2.unref && a2.unref();
      }
      return n;
    };
    this.getRemainingTTL = (n) => {
      let a2 = __privateGet(this, _s2).get(n);
      if (a2 === void 0)
        return 0;
      let c = t[a2], u2 = r[a2];
      if (!c || !u2)
        return 1 / 0;
      let f2 = (s2 || o2()) - u2;
      return c - f2;
    }, __privateSet(this, _g, (n) => {
      let a2 = r[n], c = t[n];
      return !!c && !!a2 && (s2 || o2()) - a2 > c;
    });
  }, _G = new WeakMap(), _k = new WeakMap(), _D = new WeakMap(), _g = new WeakMap(), _L = new WeakSet(), L_fn = function() {
    let t = new le(__privateGet(this, _c2));
    __privateSet(this, __, 0), __privateSet(this, _E, t), __privateSet(this, _S, (r) => {
      __privateSet(this, __, __privateGet(this, __) - t[r]), t[r] = 0;
    }), __privateSet(this, _I, (r, s2, o2, n) => {
      if (__privateMethod(this, _t2, t_fn).call(this, s2))
        return 0;
      if (!Q(o2))
        if (n) {
          if (typeof n != "function")
            throw new TypeError("sizeCalculation must be a function");
          if (o2 = n(s2, r), !Q(o2))
            throw new TypeError(
              "sizeCalculation return invalid (expect positive integer)"
            );
        } else
          throw new TypeError(
            "invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set."
          );
      return o2;
    }), __privateSet(this, _R, (r, s2, o2) => {
      if (t[r] = s2, __privateGet(this, _p)) {
        let n = __privateGet(this, _p) - t[r];
        for (; __privateGet(this, __) > n; )
          __privateMethod(this, _F, F_fn).call(this, true);
      }
      __privateSet(this, __, __privateGet(this, __) + t[r]), o2 && (o2.entrySize = s2, o2.totalCalculatedSize = __privateGet(this, __));
    });
  }, _S = new WeakMap(), _R = new WeakMap(), _I = new WeakMap(), _b = new WeakSet(), b_fn = function* ({ allowStale: t = this.allowStale } = {}) {
    if (__privateGet(this, _o2))
      for (let r = __privateGet(this, _n2); !(!__privateMethod(this, _j, j_fn).call(this, r) || ((t || !__privateGet(this, _g).call(this, r)) && (yield r), r === __privateGet(this, _a4))); )
        r = __privateGet(this, _d)[r];
  }, _v = new WeakSet(), v_fn = function* ({ allowStale: t = this.allowStale } = {}) {
    if (__privateGet(this, _o2))
      for (let r = __privateGet(this, _a4); !(!__privateMethod(this, _j, j_fn).call(this, r) || ((t || !__privateGet(this, _g).call(this, r)) && (yield r), r === __privateGet(this, _n2))); )
        r = __privateGet(this, _u2)[r];
  }, _j = new WeakSet(), j_fn = function(t) {
    return t !== void 0 && __privateGet(this, _s2).get(__privateGet(this, _r2)[t]) === t;
  }, _F = new WeakSet(), F_fn = function(t) {
    var _a5;
    let r = __privateGet(this, _a4), s2 = __privateGet(this, _r2)[r], o2 = __privateGet(this, _e2)[r];
    return __privateGet(this, _A) && __privateMethod(this, _t2, t_fn).call(this, o2) ? o2.__abortController.abort(new Error("evicted")) : (__privateGet(this, _y) || __privateGet(this, _l)) && (__privateGet(this, _y) && ((_a5 = __privateGet(this, _m)) == null ? void 0 : _a5.call(this, o2, s2, "evict")), __privateGet(this, _l) && __privateGet(this, _i2)?.push([o2, s2, "evict"])), __privateGet(this, _S).call(this, r), t && (__privateGet(this, _r2)[r] = void 0, __privateGet(this, _e2)[r] = void 0, __privateGet(this, _T).push(r)), __privateGet(this, _o2) === 1 ? (__privateSet(this, _a4, __privateSet(this, _n2, 0)), __privateGet(this, _T).length = 0) : __privateSet(this, _a4, __privateGet(this, _u2)[r]), __privateGet(this, _s2).delete(s2), __privateWrapper(this, _o2)._--, r;
  }, _U = new WeakSet(), U_fn = function(t, r, s2, o2) {
    let n = r === void 0 ? void 0 : __privateGet(this, _e2)[r];
    if (__privateMethod(this, _t2, t_fn).call(this, n))
      return n;
    let a2 = new Ce(), { signal: c } = s2;
    c?.addEventListener("abort", () => a2.abort(c.reason), {
      signal: a2.signal
    });
    let u2 = { signal: a2.signal, options: s2, context: o2 }, f2 = (b2, F = false) => {
      let { aborted: v2 } = a2.signal, A2 = s2.ignoreFetchAbort && b2 !== void 0;
      if (s2.status && (v2 && !F ? (s2.status.fetchAborted = true, s2.status.fetchError = a2.signal.reason, A2 && (s2.status.fetchAbortIgnored = true)) : s2.status.fetchResolved = true), v2 && !A2 && !F)
        return m2(a2.signal.reason);
      let D2 = y2;
      return __privateGet(this, _e2)[r] === y2 && (b2 === void 0 ? D2.__staleWhileFetching ? __privateGet(this, _e2)[r] = D2.__staleWhileFetching : this.delete(t) : (s2.status && (s2.status.fetchUpdated = true), this.set(t, b2, u2.options))), b2;
    }, _2 = (b2) => (s2.status && (s2.status.fetchRejected = true, s2.status.fetchError = b2), m2(b2)), m2 = (b2) => {
      let { aborted: F } = a2.signal, v2 = F && s2.allowStaleOnFetchAbort, A2 = v2 || s2.allowStaleOnFetchRejection, D2 = A2 || s2.noDeleteOnFetchRejection, P = y2;
      if (__privateGet(this, _e2)[r] === y2 && (!D2 || P.__staleWhileFetching === void 0 ? this.delete(t) : v2 || (__privateGet(this, _e2)[r] = P.__staleWhileFetching)), A2)
        return s2.status && P.__staleWhileFetching !== void 0 && (s2.status.returnedStale = true), P.__staleWhileFetching;
      if (P.__returned === P)
        throw b2;
    }, E2 = (b2, F) => {
      var _a5;
      let v2 = (_a5 = __privateGet(this, _P)) == null ? void 0 : _a5.call(this, t, n, u2);
      v2 && v2 instanceof Promise && v2.then((A2) => b2(A2 === void 0 ? void 0 : A2), F), a2.signal.addEventListener("abort", () => {
        (!s2.ignoreFetchAbort || s2.allowStaleOnFetchAbort) && (b2(void 0), s2.allowStaleOnFetchAbort && (b2 = (A2) => f2(A2, true)));
      });
    };
    s2.status && (s2.status.fetchDispatched = true);
    let y2 = new Promise(E2).then(f2, _2), R = Object.assign(y2, {
      __abortController: a2,
      __staleWhileFetching: n,
      __returned: void 0
    });
    return r === void 0 ? (this.set(t, R, { ...u2.options, status: void 0 }), r = __privateGet(this, _s2).get(t)) : __privateGet(this, _e2)[r] = R, R;
  }, _t2 = new WeakSet(), t_fn = function(t) {
    if (!__privateGet(this, _A))
      return false;
    let r = t;
    return !!r && r instanceof Promise && r.hasOwnProperty("__staleWhileFetching") && r.__abortController instanceof Ce;
  }, _q = new WeakSet(), q_fn = function(t, r) {
    __privateGet(this, _d)[r] = t, __privateGet(this, _u2)[t] = r;
  }, _O = new WeakSet(), O_fn = function(t) {
    t !== __privateGet(this, _n2) && (t === __privateGet(this, _a4) ? __privateSet(this, _a4, __privateGet(this, _u2)[t]) : __privateMethod(this, _q, q_fn).call(this, __privateGet(this, _d)[t], __privateGet(this, _u2)[t]), __privateMethod(this, _q, q_fn).call(this, __privateGet(this, _n2), t), __privateSet(this, _n2, t));
  }, _b2);
  De.LRUCache = yt;
});
var qe = U2((Ol, Hs) => {
  "use strict";
  var Aa = Object.create, je = Object.defineProperty, Ga = Object.getOwnPropertyDescriptor, Sa = Object.getOwnPropertyNames, Oa = Object.getPrototypeOf, Pa = Object.prototype.hasOwnProperty, Ra = (e, t) => {
    for (var r in t)
      je(e, r, { get: t[r], enumerable: true });
  }, qs = (e, t, r, s2) => {
    if (t && typeof t == "object" || typeof t == "function")
      for (let o2 of Sa(t))
        !Pa.call(e, o2) && o2 !== r && je(e, o2, {
          get: () => t[o2],
          enumerable: !(s2 = Ga(t, o2)) || s2.enumerable
        });
    return e;
  }, Fa = (e, t, r) => (r = e != null ? Aa(Oa(e)) : {}, qs(
    t || !e || !e.__esModule ? je(r, "default", { value: e, enumerable: true }) : r,
    e
  )), Ua = (e) => qs(je({}, "__esModule", { value: true }), e), Ls = {};
  Ra(Ls, {
    createAppAuth: () => Za,
    createOAuthUserAuth: () => Xa.createOAuthUserAuth
  });
  Hs.exports = Ua(Ls);
  var Ca = H(), Da = (C2(), k2(L2)), Ia = (be(), k2(ye)), ja = Ze(), Gl = Fa((be(), k2(ye))), qa = (Rs(), k2(Ps));
  async function Ie({ appId: e, privateKey: t, timeDifference: r }) {
    try {
      let s2 = await (0, qa.githubAppJwt)({
        id: +e,
        privateKey: t,
        now: r && Math.floor(Date.now() / 1e3) + r
      });
      return {
        type: "app",
        token: s2.token,
        appId: s2.appId,
        expiresAt: new Date(s2.expiration * 1e3).toISOString()
      };
    } catch (s2) {
      throw t === "-----BEGIN RSA PRIVATE KEY-----" ? new Error(
        "The 'privateKey` option contains only the first line '-----BEGIN RSA PRIVATE KEY-----'. If you are setting it using a `.env` file, make sure it is set on a single line with newlines replaced by '\n'"
      ) : s2;
    }
  }
  var La = Is();
  function xa() {
    return new La.LRUCache({ max: 15e3, ttl: 1e3 * 60 * 59 });
  }
  async function $a(e, t) {
    let r = xs(t), s2 = await e.get(r);
    if (!s2)
      return;
    let [o2, n, a2, c, u2, f2] = s2.split("|"), _2 = t.permissions || u2.split(/,/).reduce(
      (m2, E2) => (/!$/.test(E2) ? m2[E2.slice(0, -1)] = "write" : m2[E2] = "read", m2),
      {}
    );
    return {
      token: o2,
      createdAt: n,
      expiresAt: a2,
      permissions: _2,
      repositoryIds: t.repositoryIds,
      repositoryNames: t.repositoryNames,
      singleFileName: f2,
      repositorySelection: c
    };
  }
  async function Wa(e, t, r) {
    let s2 = xs(t), o2 = t.permissions ? "" : Object.keys(r.permissions).map((a2) => `${a2}${r.permissions[a2] === "write" ? "!" : ""}`).join(","), n = [
      r.token,
      r.createdAt,
      r.expiresAt,
      r.repositorySelection,
      o2,
      r.singleFileName
    ].join("|");
    await e.set(s2, n);
  }
  function xs({
    installationId: e,
    permissions: t = {},
    repositoryIds: r = [],
    repositoryNames: s2 = []
  }) {
    let o2 = Object.keys(t).sort().map((c) => t[c] === "read" ? c : `${c}!`).join(","), n = r.sort().join(","), a2 = s2.join(",");
    return [e, n, a2, o2].filter(Boolean).join("|");
  }
  function js({
    installationId: e,
    token: t,
    createdAt: r,
    expiresAt: s2,
    repositorySelection: o2,
    permissions: n,
    repositoryIds: a2,
    repositoryNames: c,
    singleFileName: u2
  }) {
    return Object.assign(
      {
        type: "token",
        tokenType: "installation",
        token: t,
        installationId: e,
        permissions: n,
        createdAt: r,
        expiresAt: s2,
        repositorySelection: o2
      },
      a2 ? { repositoryIds: a2 } : null,
      c ? { repositoryNames: c } : null,
      u2 ? { singleFileName: u2 } : null
    );
  }
  async function $s(e, t, r) {
    let s2 = Number(t.installationId || e.installationId);
    if (!s2)
      throw new Error(
        "[@octokit/auth-app] installationId option is required for installation authentication."
      );
    if (t.factory) {
      let { type: A2, factory: D2, oauthApp: P, ...O2 } = { ...e, ...t };
      return D2(O2);
    }
    let o2 = Object.assign({ installationId: s2 }, t);
    if (!t.refresh) {
      let A2 = await $a(e.cache, o2);
      if (A2) {
        let {
          token: D2,
          createdAt: P,
          expiresAt: O2,
          permissions: j2,
          repositoryIds: x2,
          repositoryNames: he,
          singleFileName: X2,
          repositorySelection: Z
        } = A2;
        return js({
          installationId: s2,
          token: D2,
          createdAt: P,
          expiresAt: O2,
          permissions: j2,
          repositorySelection: Z,
          repositoryIds: x2,
          repositoryNames: he,
          singleFileName: X2
        });
      }
    }
    let n = await Ie(e), a2 = r || e.request, {
      data: {
        token: c,
        expires_at: u2,
        repositories: f2,
        permissions: _2,
        repository_selection: m2,
        single_file: E2
      }
    } = await a2("POST /app/installations/{installation_id}/access_tokens", {
      installation_id: s2,
      repository_ids: t.repositoryIds,
      repositories: t.repositoryNames,
      permissions: t.permissions,
      mediaType: { previews: ["machine-man"] },
      headers: { authorization: `bearer ${n.token}` }
    }), y2 = _2 || {}, R = m2 || "all", b2 = f2 ? f2.map((A2) => A2.id) : void 0, F = f2 ? f2.map((A2) => A2.name) : void 0, v2 = (/* @__PURE__ */ new Date()).toISOString();
    return await Wa(e.cache, o2, {
      token: c,
      createdAt: v2,
      expiresAt: u2,
      repositorySelection: R,
      permissions: y2,
      repositoryIds: b2,
      repositoryNames: F,
      singleFileName: E2
    }), js({
      installationId: s2,
      token: c,
      createdAt: v2,
      expiresAt: u2,
      repositorySelection: R,
      permissions: y2,
      repositoryIds: b2,
      repositoryNames: F,
      singleFileName: E2
    });
  }
  async function Ha(e, t) {
    switch (t.type) {
      case "app":
        return Ie(e);
      case "oauth":
        e.log.warn(
          new ja.Deprecation(
            '[@octokit/auth-app] {type: "oauth"} is deprecated. Use {type: "oauth-app"} instead'
          )
        );
      case "oauth-app":
        return e.oauthApp({ type: "oauth-app" });
      case "installation":
        return $s(e, { ...t, type: "installation" });
      case "oauth-user":
        return e.oauthApp(t);
      default:
        throw new Error(`Invalid auth type: ${t.type}`);
    }
  }
  var za = (N2(), k2(oe)), Sl = (J(), k2(_e)), Ma = [
    "/app",
    "/app/hook/config",
    "/app/hook/deliveries",
    "/app/hook/deliveries/{delivery_id}",
    "/app/hook/deliveries/{delivery_id}/attempts",
    "/app/installations",
    "/app/installations/{installation_id}",
    "/app/installations/{installation_id}/access_tokens",
    "/app/installations/{installation_id}/suspended",
    "/marketplace_listing/accounts/{account_id}",
    "/marketplace_listing/plan",
    "/marketplace_listing/plans",
    "/marketplace_listing/plans/{plan_id}/accounts",
    "/marketplace_listing/stubbed/accounts/{account_id}",
    "/marketplace_listing/stubbed/plan",
    "/marketplace_listing/stubbed/plans",
    "/marketplace_listing/stubbed/plans/{plan_id}/accounts",
    "/orgs/{org}/installation",
    "/repos/{owner}/{repo}/installation",
    "/users/{username}/installation"
  ];
  function Na(e) {
    let r = `^(?:${e.map(
      (s2) => s2.split("/").map((o2) => o2.startsWith("{") ? "(?:.+?)" : o2).join("/")
    ).map((s2) => `(?:${s2})`).join("|")})$`;
    return new RegExp(r, "i");
  }
  var Ba = Na(Ma);
  function Va(e) {
    return !!e && Ba.test(e.split("?")[0]);
  }
  var Ka = 5 * 1e3;
  function Ja(e) {
    return !(e.message.match(
      /'Expiration time' claim \('exp'\) must be a numeric value representing the future time at which the assertion expires/
    ) || e.message.match(
      /'Issued at' claim \('iat'\) must be an Integer representing the time that the assertion was issued/
    ));
  }
  async function Qa(e, t, r, s2) {
    let o2 = t.endpoint.merge(r, s2), n = o2.url;
    if (/\/login\/oauth\/access_token$/.test(n))
      return t(o2);
    if (Va(n.replace(t.endpoint.DEFAULTS.baseUrl, ""))) {
      let { token: u2 } = await Ie(e);
      o2.headers.authorization = `bearer ${u2}`;
      let f2;
      try {
        f2 = await t(o2);
      } catch (_2) {
        if (Ja(_2) || typeof _2.response.headers.date > "u")
          throw _2;
        let m2 = Math.floor(
          (Date.parse(_2.response.headers.date) - Date.parse((/* @__PURE__ */ new Date()).toString())) / 1e3
        );
        e.log.warn(_2.message), e.log.warn(
          `[@octokit/auth-app] GitHub API time and system time are different by ${m2} seconds. Retrying request with the difference accounted for.`
        );
        let { token: E2 } = await Ie({ ...e, timeDifference: m2 });
        return o2.headers.authorization = `bearer ${E2}`, t(o2);
      }
      return f2;
    }
    if ((0, za.requiresBasicAuth)(n)) {
      let u2 = await e.oauthApp({ type: "oauth-app" });
      return o2.headers.authorization = u2.headers.authorization, t(o2);
    }
    let { token: a2, createdAt: c } = await $s(e, {}, t);
    return o2.headers.authorization = `token ${a2}`, Ws(e, t, o2, c);
  }
  async function Ws(e, t, r, s2, o2 = 0) {
    let n = +/* @__PURE__ */ new Date() - +new Date(s2);
    try {
      return await t(r);
    } catch (a2) {
      if (a2.status !== 401)
        throw a2;
      if (n >= Ka)
        throw o2 > 0 && (a2.message = `After ${o2} retries within ${n / 1e3}s of creating the installation access token, the response remains 401. At this point, the cause may be an authentication problem or a system outage. Please check https://www.githubstatus.com for status information`), a2;
      ++o2;
      let c = o2 * 1e3;
      return e.log.warn(
        `[@octokit/auth-app] Retrying after 401 response to account for token replication delay (retry: ${o2}, wait: ${c / 1e3}s)`
      ), await new Promise((u2) => setTimeout(u2, c)), Ws(e, t, r, s2, o2);
    }
  }
  var Ya = "6.0.2", Xa = (N2(), k2(oe));
  function Za(e) {
    if (!e.appId)
      throw new Error("[@octokit/auth-app] appId option is required");
    if (!Number.isFinite(+e.appId))
      throw new Error(
        "[@octokit/auth-app] appId option must be a number or numeric string"
      );
    if (!e.privateKey)
      throw new Error("[@octokit/auth-app] privateKey option is required");
    if ("installationId" in e && !e.installationId)
      throw new Error(
        "[@octokit/auth-app] installationId is set to a falsy value"
      );
    let t = Object.assign({ warn: console.warn.bind(console) }, e.log), r = e.request || Da.request.defaults({
      headers: {
        "user-agent": `octokit-auth-app.js/${Ya} ${(0, Ca.getUserAgent)()}`
      }
    }), s2 = Object.assign(
      { request: r, cache: xa() },
      e,
      e.installationId ? { installationId: Number(e.installationId) } : {},
      {
        log: t,
        oauthApp: (0, Ia.createOAuthAppAuth)({
          clientType: "github-app",
          clientId: e.clientId || "",
          clientSecret: e.clientSecret || "",
          request: r
        })
      }
    );
    return Object.assign(Ha.bind(null, s2), { hook: Qa.bind(null, s2) });
  }
});
var Le = U2((Fl, Ms) => {
  "use strict";
  var bt = Object.defineProperty, ec = Object.getOwnPropertyDescriptor, tc = Object.getOwnPropertyNames, rc = Object.prototype.hasOwnProperty, sc = (e, t) => {
    for (var r in t)
      bt(e, r, { get: t[r], enumerable: true });
  }, oc = (e, t, r, s2) => {
    if (t && typeof t == "object" || typeof t == "function")
      for (let o2 of tc(t))
        !rc.call(e, o2) && o2 !== r && bt(e, o2, {
          get: () => t[o2],
          enumerable: !(s2 = ec(t, o2)) || s2.enumerable
        });
    return e;
  }, nc = (e) => oc(bt({}, "__esModule", { value: true }), e), zs = {};
  sc(zs, { createUnauthenticatedAuth: () => pc });
  Ms.exports = nc(zs);
  async function ic(e) {
    return { type: "unauthenticated", reason: e };
  }
  var Pl = (J(), k2(_e));
  function ac(e) {
    return e.status !== 403 || !e.response ? false : e.response.headers["x-ratelimit-remaining"] === "0";
  }
  var Rl = (J(), k2(_e)), cc = /\babuse\b/i;
  function uc(e) {
    return e.status !== 403 ? false : cc.test(e.message);
  }
  async function lc(e, t, r, s2) {
    let o2 = t.endpoint.merge(r, s2);
    return t(o2).catch((n) => {
      throw n.status === 404 ? (n.message = `Not found. May be due to lack of authentication. Reason: ${e}`, n) : ac(n) ? (n.message = `API rate limit exceeded. This maybe caused by the lack of authentication. Reason: ${e}`, n) : uc(n) ? (n.message = `You have triggered an abuse detection mechanism. This maybe caused by the lack of authentication. Reason: ${e}`, n) : n.status === 401 ? (n.message = `Unauthorized. "${o2.method} ${o2.url}" failed most likely due to lack of authentication. Reason: ${e}`, n) : (n.status >= 400 && n.status < 500 && (n.message = n.message.replace(
        /\.?$/,
        `. May be caused by lack of authentication (${e}).`
      )), n);
    });
  }
  var pc = function(t) {
    if (!t || !t.reason)
      throw new Error(
        "[@octokit/auth-unauthenticated] No reason passed to createUnauthenticatedAuth"
      );
    return Object.assign(ic.bind(null, t.reason), {
      hook: lc.bind(null, t.reason)
    });
  };
});
var We = U2((Ul, ro) => {
  var _a3;
  "use strict";
  var dc = Object.create, xe = Object.defineProperty, hc = Object.getOwnPropertyDescriptor, gc = Object.getOwnPropertyNames, mc = Object.getPrototypeOf, fc = Object.prototype.hasOwnProperty, _c = (e, t) => {
    for (var r in t)
      xe(e, r, { get: t[r], enumerable: true });
  }, Qs = (e, t, r, s2) => {
    if (t && typeof t == "object" || typeof t == "function")
      for (let o2 of gc(t))
        !fc.call(e, o2) && o2 !== r && xe(e, o2, {
          get: () => t[o2],
          enumerable: !(s2 = hc(t, o2)) || s2.enumerable
        });
    return e;
  }, Y = (e, t, r) => (r = e != null ? dc(mc(e)) : {}, Qs(
    t || !e || !e.__esModule ? xe(r, "default", { value: e, enumerable: true }) : r,
    e
  )), Tc = (e) => Qs(xe({}, "__esModule", { value: true }), e), Ys = {};
  _c(Ys, {
    OAuthApp: () => Jc,
    createAWSLambdaAPIGatewayV2Handler: () => Kc,
    createNodeMiddleware: () => Hc,
    createWebWorkerHandler: () => Nc,
    handleRequest: () => $e,
    sendNodeResponse: () => to,
    unknownRouteResponse: () => eo
  });
  ro.exports = Tc(Ys);
  var Ec = (be(), k2(ye)), Xs = "6.0.0";
  function Zs(e, t, r) {
    if (Array.isArray(t)) {
      for (let s2 of t)
        Zs(e, s2, r);
      return;
    }
    e.eventHandlers[t] || (e.eventHandlers[t] = []), e.eventHandlers[t].push(r);
  }
  var wc = Se(), yc = H(), bc = wc.Octokit.defaults({
    userAgent: `octokit-oauth-app.js/${Xs} ${(0, yc.getUserAgent)()}`
  }), vc = (N2(), k2(oe));
  async function K(e, t) {
    let { name: r, action: s2 } = t;
    if (e.eventHandlers[`${r}.${s2}`])
      for (let o2 of e.eventHandlers[`${r}.${s2}`])
        await o2(t);
    if (e.eventHandlers[r])
      for (let o2 of e.eventHandlers[r])
        await o2(t);
  }
  async function kc(e, t) {
    return e.octokit.auth({
      type: "oauth-user",
      ...t,
      async factory(r) {
        let s2 = new e.Octokit({
          authStrategy: vc.createOAuthUserAuth,
          auth: r
        }), o2 = await s2.auth({ type: "get" });
        return await K(e, {
          name: "token",
          action: "created",
          token: o2.token,
          scopes: o2.scopes,
          authentication: o2,
          octokit: s2
        }), s2;
      }
    });
  }
  var Ac = Y($());
  function Gc(e, t) {
    let r = {
      clientId: e.clientId,
      request: e.octokit.request,
      ...t,
      allowSignup: e.allowSignup ?? t.allowSignup,
      redirectUrl: t.redirectUrl ?? e.redirectUrl,
      scopes: t.scopes ?? e.defaultScopes
    };
    return Ac.getWebFlowAuthorizationUrl({ clientType: e.clientType, ...r });
  }
  var Sc = Y((be(), k2(ye)));
  async function Oc(e, t) {
    let r = await e.octokit.auth({ type: "oauth-user", ...t });
    return await K(e, {
      name: "token",
      action: "created",
      token: r.token,
      scopes: r.scopes,
      authentication: r,
      octokit: new e.Octokit({
        authStrategy: Sc.createOAuthUserAuth,
        auth: {
          clientType: e.clientType,
          clientId: e.clientId,
          clientSecret: e.clientSecret,
          token: r.token,
          scopes: r.scopes,
          refreshToken: r.refreshToken,
          expiresAt: r.expiresAt,
          refreshTokenExpiresAt: r.refreshTokenExpiresAt
        }
      })
    }), { authentication: r };
  }
  var Pc = Y($());
  async function Rc(e, t) {
    let r = await Pc.checkToken({
      clientType: e.clientType,
      clientId: e.clientId,
      clientSecret: e.clientSecret,
      request: e.octokit.request,
      ...t
    });
    return Object.assign(r.authentication, { type: "token", tokenType: "oauth" }), r;
  }
  var Ns = Y($()), Bs = (N2(), k2(oe));
  async function Fc(e, t) {
    let r = {
      clientId: e.clientId,
      clientSecret: e.clientSecret,
      request: e.octokit.request,
      ...t
    };
    if (e.clientType === "oauth-app") {
      let n = await Ns.resetToken({ clientType: "oauth-app", ...r }), a2 = Object.assign(n.authentication, {
        type: "token",
        tokenType: "oauth"
      });
      return await K(e, {
        name: "token",
        action: "reset",
        token: n.authentication.token,
        scopes: n.authentication.scopes || void 0,
        authentication: a2,
        octokit: new e.Octokit({
          authStrategy: Bs.createOAuthUserAuth,
          auth: {
            clientType: e.clientType,
            clientId: e.clientId,
            clientSecret: e.clientSecret,
            token: n.authentication.token,
            scopes: n.authentication.scopes
          }
        })
      }), { ...n, authentication: a2 };
    }
    let s2 = await Ns.resetToken({ clientType: "github-app", ...r }), o2 = Object.assign(s2.authentication, {
      type: "token",
      tokenType: "oauth"
    });
    return await K(e, {
      name: "token",
      action: "reset",
      token: s2.authentication.token,
      authentication: o2,
      octokit: new e.Octokit({
        authStrategy: Bs.createOAuthUserAuth,
        auth: {
          clientType: e.clientType,
          clientId: e.clientId,
          clientSecret: e.clientSecret,
          token: s2.authentication.token
        }
      })
    }), { ...s2, authentication: o2 };
  }
  var Uc = Y($()), Cc = (N2(), k2(oe));
  async function Dc(e, t) {
    if (e.clientType === "oauth-app")
      throw new Error(
        "[@octokit/oauth-app] app.refreshToken() is not supported for OAuth Apps"
      );
    let r = await Uc.refreshToken({
      clientType: "github-app",
      clientId: e.clientId,
      clientSecret: e.clientSecret,
      request: e.octokit.request,
      refreshToken: t.refreshToken
    }), s2 = Object.assign(r.authentication, {
      type: "token",
      tokenType: "oauth"
    });
    return await K(e, {
      name: "token",
      action: "refreshed",
      token: r.authentication.token,
      authentication: s2,
      octokit: new e.Octokit({
        authStrategy: Cc.createOAuthUserAuth,
        auth: {
          clientType: e.clientType,
          clientId: e.clientId,
          clientSecret: e.clientSecret,
          token: r.authentication.token
        }
      })
    }), { ...r, authentication: s2 };
  }
  var Ic = Y($()), jc = (N2(), k2(oe));
  async function qc(e, t) {
    if (e.clientType === "oauth-app")
      throw new Error(
        "[@octokit/oauth-app] app.scopeToken() is not supported for OAuth Apps"
      );
    let r = await Ic.scopeToken({
      clientType: "github-app",
      clientId: e.clientId,
      clientSecret: e.clientSecret,
      request: e.octokit.request,
      ...t
    }), s2 = Object.assign(r.authentication, {
      type: "token",
      tokenType: "oauth"
    });
    return await K(e, {
      name: "token",
      action: "scoped",
      token: r.authentication.token,
      authentication: s2,
      octokit: new e.Octokit({
        authStrategy: jc.createOAuthUserAuth,
        auth: {
          clientType: e.clientType,
          clientId: e.clientId,
          clientSecret: e.clientSecret,
          token: r.authentication.token
        }
      })
    }), { ...r, authentication: s2 };
  }
  var Vs = Y($()), Lc = Le();
  async function xc(e, t) {
    let r = {
      clientId: e.clientId,
      clientSecret: e.clientSecret,
      request: e.octokit.request,
      ...t
    }, s2 = e.clientType === "oauth-app" ? await Vs.deleteToken({ clientType: "oauth-app", ...r }) : await Vs.deleteToken({ clientType: "github-app", ...r });
    return await K(e, {
      name: "token",
      action: "deleted",
      token: t.token,
      octokit: new e.Octokit({
        authStrategy: Lc.createUnauthenticatedAuth,
        auth: {
          reason: 'Handling "token.deleted" event. The access for the token has been revoked.'
        }
      })
    }), s2;
  }
  var Ks = Y($()), Js = Le();
  async function $c(e, t) {
    let r = {
      clientId: e.clientId,
      clientSecret: e.clientSecret,
      request: e.octokit.request,
      ...t
    }, s2 = e.clientType === "oauth-app" ? await Ks.deleteAuthorization({ clientType: "oauth-app", ...r }) : await Ks.deleteAuthorization({ clientType: "github-app", ...r });
    return await K(e, {
      name: "token",
      action: "deleted",
      token: t.token,
      octokit: new e.Octokit({
        authStrategy: Js.createUnauthenticatedAuth,
        auth: {
          reason: 'Handling "token.deleted" event. The access for the token has been revoked.'
        }
      })
    }), await K(e, {
      name: "authorization",
      action: "deleted",
      token: t.token,
      octokit: new e.Octokit({
        authStrategy: Js.createUnauthenticatedAuth,
        auth: {
          reason: 'Handling "authorization.deleted" event. The access for the app has been revoked.'
        }
      })
    }), s2;
  }
  function eo(e) {
    return {
      status: 404,
      headers: { "content-type": "application/json" },
      text: JSON.stringify({ error: `Unknown route: ${e.method} ${e.url}` })
    };
  }
  async function $e(e, { pathPrefix: t = "/api/github/oauth" }, r) {
    if (r.method === "OPTIONS")
      return {
        status: 200,
        headers: {
          "access-control-allow-origin": "*",
          "access-control-allow-methods": "*",
          "access-control-allow-headers": "Content-Type, User-Agent, Authorization"
        }
      };
    let { pathname: s2 } = new URL(r.url, "http://localhost");
    if (!s2.startsWith(`${t}/`))
      return;
    s2 = s2.slice(t.length + 1);
    let o2 = [r.method, s2].join(" "), n = {
      getLogin: "GET login",
      getCallback: "GET callback",
      createToken: "POST token",
      getToken: "GET token",
      patchToken: "PATCH token",
      patchRefreshToken: "PATCH refresh-token",
      scopeToken: "POST token/scoped",
      deleteToken: "DELETE token",
      deleteGrant: "DELETE grant"
    };
    if (!Object.values(n).includes(o2))
      return eo(r);
    let a2;
    try {
      let _2 = await r.text();
      a2 = _2 ? JSON.parse(_2) : {};
    } catch {
      return {
        status: 400,
        headers: {
          "content-type": "application/json",
          "access-control-allow-origin": "*"
        },
        text: JSON.stringify({ error: "[@octokit/oauth-app] request error" })
      };
    }
    let { searchParams: c } = new URL(r.url, "http://localhost"), u2 = Object.fromEntries(c), f2 = r.headers;
    try {
      if (o2 === n.getLogin) {
        let { url: m2 } = e.getWebFlowAuthorizationUrl({
          state: u2.state,
          scopes: u2.scopes ? u2.scopes.split(",") : void 0,
          allowSignup: u2.allowSignup ? u2.allowSignup === "true" : void 0,
          redirectUrl: u2.redirectUrl
        });
        return { status: 302, headers: { location: m2 } };
      }
      if (o2 === n.getCallback) {
        if (u2.error)
          throw new Error(
            `[@octokit/oauth-app] ${u2.error} ${u2.error_description}`
          );
        if (!u2.code)
          throw new Error('[@octokit/oauth-app] "code" parameter is required');
        let {
          authentication: { token: m2 }
        } = await e.createToken({ code: u2.code });
        return {
          status: 200,
          headers: { "content-type": "text/html" },
          text: `<h1>Token created successfully</h1>

<p>Your token is: <strong>${m2}</strong>. Copy it now as it cannot be shown again.</p>`
        };
      }
      if (o2 === n.createToken) {
        let { code: m2, redirectUrl: E2 } = a2;
        if (!m2)
          throw new Error('[@octokit/oauth-app] "code" parameter is required');
        let y2 = await e.createToken({ code: m2, redirectUrl: E2 });
        return delete y2.authentication.clientSecret, {
          status: 201,
          headers: {
            "content-type": "application/json",
            "access-control-allow-origin": "*"
          },
          text: JSON.stringify(y2)
        };
      }
      if (o2 === n.getToken) {
        let m2 = f2.authorization?.substr(6);
        if (!m2)
          throw new Error(
            '[@octokit/oauth-app] "Authorization" header is required'
          );
        let E2 = await e.checkToken({ token: m2 });
        return delete E2.authentication.clientSecret, {
          status: 200,
          headers: {
            "content-type": "application/json",
            "access-control-allow-origin": "*"
          },
          text: JSON.stringify(E2)
        };
      }
      if (o2 === n.patchToken) {
        let m2 = f2.authorization?.substr(6);
        if (!m2)
          throw new Error(
            '[@octokit/oauth-app] "Authorization" header is required'
          );
        let E2 = await e.resetToken({ token: m2 });
        return delete E2.authentication.clientSecret, {
          status: 200,
          headers: {
            "content-type": "application/json",
            "access-control-allow-origin": "*"
          },
          text: JSON.stringify(E2)
        };
      }
      if (o2 === n.patchRefreshToken) {
        if (!f2.authorization?.substr(6))
          throw new Error(
            '[@octokit/oauth-app] "Authorization" header is required'
          );
        let { refreshToken: E2 } = a2;
        if (!E2)
          throw new Error(
            "[@octokit/oauth-app] refreshToken must be sent in request body"
          );
        let y2 = await e.refreshToken({ refreshToken: E2 });
        return delete y2.authentication.clientSecret, {
          status: 200,
          headers: {
            "content-type": "application/json",
            "access-control-allow-origin": "*"
          },
          text: JSON.stringify(y2)
        };
      }
      if (o2 === n.scopeToken) {
        let m2 = f2.authorization?.substr(6);
        if (!m2)
          throw new Error(
            '[@octokit/oauth-app] "Authorization" header is required'
          );
        let E2 = await e.scopeToken({ token: m2, ...a2 });
        return delete E2.authentication.clientSecret, {
          status: 200,
          headers: {
            "content-type": "application/json",
            "access-control-allow-origin": "*"
          },
          text: JSON.stringify(E2)
        };
      }
      if (o2 === n.deleteToken) {
        let m2 = f2.authorization?.substr(6);
        if (!m2)
          throw new Error(
            '[@octokit/oauth-app] "Authorization" header is required'
          );
        return await e.deleteToken({ token: m2 }), { status: 204, headers: { "access-control-allow-origin": "*" } };
      }
      let _2 = f2.authorization?.substr(6);
      if (!_2)
        throw new Error(
          '[@octokit/oauth-app] "Authorization" header is required'
        );
      return await e.deleteAuthorization({ token: _2 }), { status: 204, headers: { "access-control-allow-origin": "*" } };
    } catch (_2) {
      return {
        status: 400,
        headers: {
          "content-type": "application/json",
          "access-control-allow-origin": "*"
        },
        text: JSON.stringify({ error: _2.message })
      };
    }
  }
  function Wc(e) {
    let { method: t, url: r, headers: s2 } = e;
    async function o2() {
      return await new Promise((a2, c) => {
        let u2 = [];
        e.on("error", c).on("data", (f2) => u2.push(f2)).on("end", () => a2(__Buffer$.concat(u2).toString()));
      });
    }
    return { method: t, url: r, headers: s2, text: o2 };
  }
  function to(e, t) {
    t.writeHead(e.status, e.headers), t.end(e.text);
  }
  function Hc(e, t = {}) {
    return async function(r, s2, o2) {
      let n = await Wc(r), a2 = await $e(e, t, n);
      return a2 ? (to(a2, s2), true) : (o2?.(), false);
    };
  }
  function zc(e) {
    let t = Object.fromEntries(e.headers.entries());
    return { method: e.method, url: e.url, headers: t, text: () => e.text() };
  }
  function Mc(e) {
    return new Response(e.text, { status: e.status, headers: e.headers });
  }
  function Nc(e, t = {}) {
    return async function(r) {
      let s2 = await zc(r), o2 = await $e(e, t, s2);
      return o2 ? Mc(o2) : void 0;
    };
  }
  function Bc(e) {
    let { method: t } = e.requestContext.http, r = e.rawPath, { stage: s2 } = e.requestContext;
    r.startsWith("/" + s2) && (r = r.substring(s2.length + 1)), e.rawQueryString && (r += "?" + e.rawQueryString);
    let o2 = e.headers;
    return { method: t, url: r, headers: o2, text: async () => e.body || "" };
  }
  function Vc(e) {
    return { statusCode: e.status, headers: e.headers, body: e.text };
  }
  function Kc(e, t = {}) {
    return async function(r) {
      let s2 = Bc(r), o2 = await $e(e, t, s2);
      return o2 ? Vc(o2) : void 0;
    };
  }
  var Jc = (_a3 = class {
    static defaults(e) {
      return class extends this {
        constructor(...r) {
          super({ ...e, ...r[0] });
        }
      };
    }
    constructor(e) {
      let t = e.Octokit || bc;
      this.type = e.clientType || "oauth-app";
      let r = new t({
        authStrategy: Ec.createOAuthAppAuth,
        auth: {
          clientType: this.type,
          clientId: e.clientId,
          clientSecret: e.clientSecret
        }
      }), s2 = {
        clientType: this.type,
        clientId: e.clientId,
        clientSecret: e.clientSecret,
        defaultScopes: e.defaultScopes || [],
        allowSignup: e.allowSignup,
        baseUrl: e.baseUrl,
        redirectUrl: e.redirectUrl,
        log: e.log,
        Octokit: t,
        octokit: r,
        eventHandlers: {}
      };
      this.on = Zs.bind(null, s2), this.octokit = r, this.getUserOctokit = kc.bind(null, s2), this.getWebFlowAuthorizationUrl = Gc.bind(null, s2), this.createToken = Oc.bind(null, s2), this.checkToken = Rc.bind(null, s2), this.resetToken = Fc.bind(null, s2), this.refreshToken = Dc.bind(null, s2), this.scopeToken = qc.bind(null, s2), this.deleteToken = xc.bind(null, s2), this.deleteAuthorization = $c.bind(null, s2);
    }
  }, _a3.VERSION = Xs, _a3);
});
var oo = U2((Il, so) => {
  "use strict";
  so.exports = (e, t = 1, r) => {
    if (r = { indent: " ", includeEmptyLines: false, ...r }, typeof e != "string")
      throw new TypeError(
        `Expected \`input\` to be a \`string\`, got \`${typeof e}\``
      );
    if (typeof t != "number")
      throw new TypeError(
        `Expected \`count\` to be a \`number\`, got \`${typeof t}\``
      );
    if (typeof r.indent != "string")
      throw new TypeError(
        `Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``
      );
    if (t === 0)
      return e;
    let s2 = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
    return e.replace(s2, r.indent.repeat(t));
  };
});
var co = U2((jl, ao) => {
  "use strict";
  var no = Qo("os"), io = /\s+at.*(?:\(|\s)(.*)\)?/, Qc = /^(?:(?:(?:node|(?:internal\/[\w/]*|.*node_modules\/(?:babel-polyfill|pirates)\/.*)?\w+)\.js:\d+:\d+)|native)/, Yc = typeof no.homedir > "u" ? "" : no.homedir();
  ao.exports = (e, t) => (t = Object.assign({ pretty: false }, t), e.replace(/\\/g, "/").split(
    `
`
  ).filter((r) => {
    let s2 = r.match(io);
    if (s2 === null || !s2[1])
      return true;
    let o2 = s2[1];
    return o2.includes(".app/Contents/Resources/electron.asar") || o2.includes(".app/Contents/Resources/default_app.asar") ? false : !Qc.test(o2);
  }).filter((r) => r.trim() !== "").map(
    (r) => t.pretty ? r.replace(io, (s2, o2) => s2.replace(o2, o2.replace(Yc, "~"))) : r
  ).join(`
`));
});
var He = U2((ql, uo) => {
  "use strict";
  var Xc = oo(), Zc = co(), eu = (e) => e.replace(/\s+at .*aggregate-error\/index.js:\d+:\d+\)?/g, ""), vt = class extends Error {
    constructor(t) {
      if (!Array.isArray(t))
        throw new TypeError(`Expected input to be an Array, got ${typeof t}`);
      t = [...t].map(
        (s2) => s2 instanceof Error ? s2 : s2 !== null && typeof s2 == "object" ? Object.assign(new Error(s2.message), s2) : new Error(s2)
      );
      let r = t.map(
        (s2) => typeof s2.stack == "string" ? eu(Zc(s2.stack)) : String(s2)
      ).join(`
`);
      r = `
` + Xc(r, 4), super(r), this.name = "AggregateError", Object.defineProperty(this, "_errors", { value: t });
    }
    *[Symbol.iterator]() {
      for (let t of this._errors)
        yield t;
    }
  };
  uo.exports = vt;
});
var Fo = S(Se());
var oi = "9.1.5";
function ni(e) {
  if (!e.data)
    return { ...e, data: [] };
  if (!("total_count" in e.data && !("url" in e.data)))
    return e;
  let r = e.data.incomplete_results, s2 = e.data.repository_selection, o2 = e.data.total_count;
  delete e.data.incomplete_results, delete e.data.repository_selection, delete e.data.total_count;
  let n = Object.keys(e.data)[0], a2 = e.data[n];
  return e.data = a2, typeof r < "u" && (e.data.incomplete_results = r), typeof s2 < "u" && (e.data.repository_selection = s2), e.data.total_count = o2, e;
}
function ct(e, t, r) {
  let s2 = typeof t == "function" ? t.endpoint(r) : e.request.endpoint(t, r), o2 = typeof t == "function" ? t : e.request, n = s2.method, a2 = s2.headers, c = s2.url;
  return {
    [Symbol.asyncIterator]: () => ({
      async next() {
        if (!c)
          return { done: true };
        try {
          let u2 = await o2({ method: n, url: c, headers: a2 }), f2 = ni(u2);
          return c = ((f2.headers.link || "").match(/<([^>]+)>;\s*rel="next"/) || [])[1], { value: f2 };
        } catch (u2) {
          if (u2.status !== 409)
            throw u2;
          return c = "", { value: { status: 200, headers: {}, data: [] } };
        }
      }
    })
  };
}
function $r(e, t, r, s2) {
  return typeof r == "function" && (s2 = r, r = void 0), Wr(e, [], ct(e, t, r)[Symbol.asyncIterator](), s2);
}
function Wr(e, t, r, s2) {
  return r.next().then((o2) => {
    if (o2.done)
      return t;
    let n = false;
    function a2() {
      n = true;
    }
    return t = t.concat(s2 ? s2(o2.value, a2) : o2.value.data), n ? t : Wr(e, t, r, s2);
  });
}
var Oe = Object.assign($r, { iterator: ct });
function ut(e) {
  return {
    paginate: Object.assign($r.bind(null, e), { iterator: ct.bind(null, e) })
  };
}
ut.VERSION = oi;
var ii = (e, t) => `The cursor at "${e.join(
  ","
)}" did not change its value "${t}" after a page transition. Please make sure your that your query is set up correctly.`;
var ai = class extends Error {
  constructor(e, t) {
    super(ii(e.pathInQuery, t)), this.pageInfo = e, this.cursorValue = t, this.name = "MissingCursorChangeError", Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
  }
};
var ci = class extends Error {
  constructor(e) {
    super(
      `No pageInfo property found in response. Please make sure to specify the pageInfo in your query. Response-Data: ${JSON.stringify(
        e,
        null,
        2
      )}`
    ), this.response = e, this.name = "MissingPageInfo", Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
  }
};
var ui = (e) => Object.prototype.toString.call(e) === "[object Object]";
function Hr(e) {
  let t = zr(e, "pageInfo");
  if (t.length === 0)
    throw new ci(e);
  return t;
}
var zr = (e, t, r = []) => {
  for (let s2 of Object.keys(e)) {
    let o2 = [...r, s2], n = e[s2];
    if (n.hasOwnProperty(t))
      return o2;
    if (ui(n)) {
      let a2 = zr(n, t, o2);
      if (a2.length > 0)
        return a2;
    }
  }
  return [];
};
var Te = (e, t) => t.reduce((r, s2) => r[s2], e);
var lt = (e, t, r) => {
  let s2 = t[t.length - 1], o2 = [...t].slice(0, -1), n = Te(e, o2);
  typeof r == "function" ? n[s2] = r(n[s2]) : n[s2] = r;
};
var li = (e) => {
  let t = Hr(e);
  return { pathInQuery: t, pageInfo: Te(e, [...t, "pageInfo"]) };
};
var Mr = (e) => e.hasOwnProperty("hasNextPage");
var pi = (e) => Mr(e) ? e.endCursor : e.startCursor;
var di = (e) => Mr(e) ? e.hasNextPage : e.hasPreviousPage;
var Nr = (e) => (t, r = {}) => {
  let s2 = true, o2 = { ...r };
  return {
    [Symbol.asyncIterator]: () => ({
      async next() {
        if (!s2)
          return { done: true, value: {} };
        let n = await e.graphql(t, o2), a2 = li(n), c = pi(a2.pageInfo);
        if (s2 = di(a2.pageInfo), s2 && c === o2.cursor)
          throw new ai(a2, c);
        return o2 = { ...o2, cursor: c }, { done: false, value: n };
      }
    })
  };
};
var hi = (e, t) => {
  if (Object.keys(e).length === 0)
    return Object.assign(e, t);
  let r = Hr(e), s2 = [...r, "nodes"], o2 = Te(t, s2);
  o2 && lt(e, s2, (u2) => [...u2, ...o2]);
  let n = [...r, "edges"], a2 = Te(t, n);
  a2 && lt(e, n, (u2) => [...u2, ...a2]);
  let c = [...r, "pageInfo"];
  return lt(e, c, Te(t, c)), e;
};
var gi = (e) => {
  let t = Nr(e);
  return async (r, s2 = {}) => {
    let o2 = {};
    for await (let n of t(r, s2))
      o2 = hi(o2, n);
    return o2;
  };
};
function Br(e) {
  return e.graphql, {
    graphql: Object.assign(e.graphql, {
      paginate: Object.assign(gi(e), { iterator: Nr(e) })
    })
  };
}
var Vr = "10.2.0";
var mi = {
  actions: {
    addCustomLabelsToSelfHostedRunnerForOrg: [
      "POST /orgs/{org}/actions/runners/{runner_id}/labels"
    ],
    addCustomLabelsToSelfHostedRunnerForRepo: [
      "POST /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"
    ],
    addSelectedRepoToOrgSecret: [
      "PUT /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"
    ],
    addSelectedRepoToOrgVariable: [
      "PUT /orgs/{org}/actions/variables/{name}/repositories/{repository_id}"
    ],
    approveWorkflowRun: [
      "POST /repos/{owner}/{repo}/actions/runs/{run_id}/approve"
    ],
    cancelWorkflowRun: [
      "POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel"
    ],
    createEnvironmentVariable: [
      "POST /repositories/{repository_id}/environments/{environment_name}/variables"
    ],
    createOrUpdateEnvironmentSecret: [
      "PUT /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}"
    ],
    createOrUpdateOrgSecret: [
      "PUT /orgs/{org}/actions/secrets/{secret_name}"
    ],
    createOrUpdateRepoSecret: [
      "PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}"
    ],
    createOrgVariable: ["POST /orgs/{org}/actions/variables"],
    createRegistrationTokenForOrg: [
      "POST /orgs/{org}/actions/runners/registration-token"
    ],
    createRegistrationTokenForRepo: [
      "POST /repos/{owner}/{repo}/actions/runners/registration-token"
    ],
    createRemoveTokenForOrg: [
      "POST /orgs/{org}/actions/runners/remove-token"
    ],
    createRemoveTokenForRepo: [
      "POST /repos/{owner}/{repo}/actions/runners/remove-token"
    ],
    createRepoVariable: ["POST /repos/{owner}/{repo}/actions/variables"],
    createWorkflowDispatch: [
      "POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches"
    ],
    deleteActionsCacheById: [
      "DELETE /repos/{owner}/{repo}/actions/caches/{cache_id}"
    ],
    deleteActionsCacheByKey: [
      "DELETE /repos/{owner}/{repo}/actions/caches{?key,ref}"
    ],
    deleteArtifact: [
      "DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"
    ],
    deleteEnvironmentSecret: [
      "DELETE /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}"
    ],
    deleteEnvironmentVariable: [
      "DELETE /repositories/{repository_id}/environments/{environment_name}/variables/{name}"
    ],
    deleteOrgSecret: ["DELETE /orgs/{org}/actions/secrets/{secret_name}"],
    deleteOrgVariable: ["DELETE /orgs/{org}/actions/variables/{name}"],
    deleteRepoSecret: [
      "DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}"
    ],
    deleteRepoVariable: [
      "DELETE /repos/{owner}/{repo}/actions/variables/{name}"
    ],
    deleteSelfHostedRunnerFromOrg: [
      "DELETE /orgs/{org}/actions/runners/{runner_id}"
    ],
    deleteSelfHostedRunnerFromRepo: [
      "DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}"
    ],
    deleteWorkflowRun: ["DELETE /repos/{owner}/{repo}/actions/runs/{run_id}"],
    deleteWorkflowRunLogs: [
      "DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs"
    ],
    disableSelectedRepositoryGithubActionsOrganization: [
      "DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}"
    ],
    disableWorkflow: [
      "PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable"
    ],
    downloadArtifact: [
      "GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}"
    ],
    downloadJobLogsForWorkflowRun: [
      "GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs"
    ],
    downloadWorkflowRunAttemptLogs: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs"
    ],
    downloadWorkflowRunLogs: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs"
    ],
    enableSelectedRepositoryGithubActionsOrganization: [
      "PUT /orgs/{org}/actions/permissions/repositories/{repository_id}"
    ],
    enableWorkflow: [
      "PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable"
    ],
    forceCancelWorkflowRun: [
      "POST /repos/{owner}/{repo}/actions/runs/{run_id}/force-cancel"
    ],
    generateRunnerJitconfigForOrg: [
      "POST /orgs/{org}/actions/runners/generate-jitconfig"
    ],
    generateRunnerJitconfigForRepo: [
      "POST /repos/{owner}/{repo}/actions/runners/generate-jitconfig"
    ],
    getActionsCacheList: ["GET /repos/{owner}/{repo}/actions/caches"],
    getActionsCacheUsage: ["GET /repos/{owner}/{repo}/actions/cache/usage"],
    getActionsCacheUsageByRepoForOrg: [
      "GET /orgs/{org}/actions/cache/usage-by-repository"
    ],
    getActionsCacheUsageForOrg: ["GET /orgs/{org}/actions/cache/usage"],
    getAllowedActionsOrganization: [
      "GET /orgs/{org}/actions/permissions/selected-actions"
    ],
    getAllowedActionsRepository: [
      "GET /repos/{owner}/{repo}/actions/permissions/selected-actions"
    ],
    getArtifact: [
      "GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"
    ],
    getEnvironmentPublicKey: [
      "GET /repositories/{repository_id}/environments/{environment_name}/secrets/public-key"
    ],
    getEnvironmentSecret: [
      "GET /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}"
    ],
    getEnvironmentVariable: [
      "GET /repositories/{repository_id}/environments/{environment_name}/variables/{name}"
    ],
    getGithubActionsDefaultWorkflowPermissionsOrganization: [
      "GET /orgs/{org}/actions/permissions/workflow"
    ],
    getGithubActionsDefaultWorkflowPermissionsRepository: [
      "GET /repos/{owner}/{repo}/actions/permissions/workflow"
    ],
    getGithubActionsPermissionsOrganization: [
      "GET /orgs/{org}/actions/permissions"
    ],
    getGithubActionsPermissionsRepository: [
      "GET /repos/{owner}/{repo}/actions/permissions"
    ],
    getJobForWorkflowRun: ["GET /repos/{owner}/{repo}/actions/jobs/{job_id}"],
    getOrgPublicKey: ["GET /orgs/{org}/actions/secrets/public-key"],
    getOrgSecret: ["GET /orgs/{org}/actions/secrets/{secret_name}"],
    getOrgVariable: ["GET /orgs/{org}/actions/variables/{name}"],
    getPendingDeploymentsForRun: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments"
    ],
    getRepoPermissions: [
      "GET /repos/{owner}/{repo}/actions/permissions",
      {},
      { renamed: ["actions", "getGithubActionsPermissionsRepository"] }
    ],
    getRepoPublicKey: [
      "GET /repos/{owner}/{repo}/actions/secrets/public-key"
    ],
    getRepoSecret: [
      "GET /repos/{owner}/{repo}/actions/secrets/{secret_name}"
    ],
    getRepoVariable: ["GET /repos/{owner}/{repo}/actions/variables/{name}"],
    getReviewsForRun: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/approvals"
    ],
    getSelfHostedRunnerForOrg: [
      "GET /orgs/{org}/actions/runners/{runner_id}"
    ],
    getSelfHostedRunnerForRepo: [
      "GET /repos/{owner}/{repo}/actions/runners/{runner_id}"
    ],
    getWorkflow: [
      "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}"
    ],
    getWorkflowAccessToRepository: [
      "GET /repos/{owner}/{repo}/actions/permissions/access"
    ],
    getWorkflowRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}"],
    getWorkflowRunAttempt: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}"
    ],
    getWorkflowRunUsage: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing"
    ],
    getWorkflowUsage: [
      "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing"
    ],
    listArtifactsForRepo: ["GET /repos/{owner}/{repo}/actions/artifacts"],
    listEnvironmentSecrets: [
      "GET /repositories/{repository_id}/environments/{environment_name}/secrets"
    ],
    listEnvironmentVariables: [
      "GET /repositories/{repository_id}/environments/{environment_name}/variables"
    ],
    listJobsForWorkflowRun: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs"
    ],
    listJobsForWorkflowRunAttempt: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs"
    ],
    listLabelsForSelfHostedRunnerForOrg: [
      "GET /orgs/{org}/actions/runners/{runner_id}/labels"
    ],
    listLabelsForSelfHostedRunnerForRepo: [
      "GET /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"
    ],
    listOrgSecrets: ["GET /orgs/{org}/actions/secrets"],
    listOrgVariables: ["GET /orgs/{org}/actions/variables"],
    listRepoOrganizationSecrets: [
      "GET /repos/{owner}/{repo}/actions/organization-secrets"
    ],
    listRepoOrganizationVariables: [
      "GET /repos/{owner}/{repo}/actions/organization-variables"
    ],
    listRepoSecrets: ["GET /repos/{owner}/{repo}/actions/secrets"],
    listRepoVariables: ["GET /repos/{owner}/{repo}/actions/variables"],
    listRepoWorkflows: ["GET /repos/{owner}/{repo}/actions/workflows"],
    listRunnerApplicationsForOrg: [
      "GET /orgs/{org}/actions/runners/downloads"
    ],
    listRunnerApplicationsForRepo: [
      "GET /repos/{owner}/{repo}/actions/runners/downloads"
    ],
    listSelectedReposForOrgSecret: [
      "GET /orgs/{org}/actions/secrets/{secret_name}/repositories"
    ],
    listSelectedReposForOrgVariable: [
      "GET /orgs/{org}/actions/variables/{name}/repositories"
    ],
    listSelectedRepositoriesEnabledGithubActionsOrganization: [
      "GET /orgs/{org}/actions/permissions/repositories"
    ],
    listSelfHostedRunnersForOrg: ["GET /orgs/{org}/actions/runners"],
    listSelfHostedRunnersForRepo: [
      "GET /repos/{owner}/{repo}/actions/runners"
    ],
    listWorkflowRunArtifacts: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts"
    ],
    listWorkflowRuns: [
      "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs"
    ],
    listWorkflowRunsForRepo: ["GET /repos/{owner}/{repo}/actions/runs"],
    reRunJobForWorkflowRun: [
      "POST /repos/{owner}/{repo}/actions/jobs/{job_id}/rerun"
    ],
    reRunWorkflow: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun"],
    reRunWorkflowFailedJobs: [
      "POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun-failed-jobs"
    ],
    removeAllCustomLabelsFromSelfHostedRunnerForOrg: [
      "DELETE /orgs/{org}/actions/runners/{runner_id}/labels"
    ],
    removeAllCustomLabelsFromSelfHostedRunnerForRepo: [
      "DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"
    ],
    removeCustomLabelFromSelfHostedRunnerForOrg: [
      "DELETE /orgs/{org}/actions/runners/{runner_id}/labels/{name}"
    ],
    removeCustomLabelFromSelfHostedRunnerForRepo: [
      "DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels/{name}"
    ],
    removeSelectedRepoFromOrgSecret: [
      "DELETE /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"
    ],
    removeSelectedRepoFromOrgVariable: [
      "DELETE /orgs/{org}/actions/variables/{name}/repositories/{repository_id}"
    ],
    reviewCustomGatesForRun: [
      "POST /repos/{owner}/{repo}/actions/runs/{run_id}/deployment_protection_rule"
    ],
    reviewPendingDeploymentsForRun: [
      "POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments"
    ],
    setAllowedActionsOrganization: [
      "PUT /orgs/{org}/actions/permissions/selected-actions"
    ],
    setAllowedActionsRepository: [
      "PUT /repos/{owner}/{repo}/actions/permissions/selected-actions"
    ],
    setCustomLabelsForSelfHostedRunnerForOrg: [
      "PUT /orgs/{org}/actions/runners/{runner_id}/labels"
    ],
    setCustomLabelsForSelfHostedRunnerForRepo: [
      "PUT /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"
    ],
    setGithubActionsDefaultWorkflowPermissionsOrganization: [
      "PUT /orgs/{org}/actions/permissions/workflow"
    ],
    setGithubActionsDefaultWorkflowPermissionsRepository: [
      "PUT /repos/{owner}/{repo}/actions/permissions/workflow"
    ],
    setGithubActionsPermissionsOrganization: [
      "PUT /orgs/{org}/actions/permissions"
    ],
    setGithubActionsPermissionsRepository: [
      "PUT /repos/{owner}/{repo}/actions/permissions"
    ],
    setSelectedReposForOrgSecret: [
      "PUT /orgs/{org}/actions/secrets/{secret_name}/repositories"
    ],
    setSelectedReposForOrgVariable: [
      "PUT /orgs/{org}/actions/variables/{name}/repositories"
    ],
    setSelectedRepositoriesEnabledGithubActionsOrganization: [
      "PUT /orgs/{org}/actions/permissions/repositories"
    ],
    setWorkflowAccessToRepository: [
      "PUT /repos/{owner}/{repo}/actions/permissions/access"
    ],
    updateEnvironmentVariable: [
      "PATCH /repositories/{repository_id}/environments/{environment_name}/variables/{name}"
    ],
    updateOrgVariable: ["PATCH /orgs/{org}/actions/variables/{name}"],
    updateRepoVariable: [
      "PATCH /repos/{owner}/{repo}/actions/variables/{name}"
    ]
  },
  activity: {
    checkRepoIsStarredByAuthenticatedUser: [
      "GET /user/starred/{owner}/{repo}"
    ],
    deleteRepoSubscription: ["DELETE /repos/{owner}/{repo}/subscription"],
    deleteThreadSubscription: [
      "DELETE /notifications/threads/{thread_id}/subscription"
    ],
    getFeeds: ["GET /feeds"],
    getRepoSubscription: ["GET /repos/{owner}/{repo}/subscription"],
    getThread: ["GET /notifications/threads/{thread_id}"],
    getThreadSubscriptionForAuthenticatedUser: [
      "GET /notifications/threads/{thread_id}/subscription"
    ],
    listEventsForAuthenticatedUser: ["GET /users/{username}/events"],
    listNotificationsForAuthenticatedUser: ["GET /notifications"],
    listOrgEventsForAuthenticatedUser: [
      "GET /users/{username}/events/orgs/{org}"
    ],
    listPublicEvents: ["GET /events"],
    listPublicEventsForRepoNetwork: ["GET /networks/{owner}/{repo}/events"],
    listPublicEventsForUser: ["GET /users/{username}/events/public"],
    listPublicOrgEvents: ["GET /orgs/{org}/events"],
    listReceivedEventsForUser: ["GET /users/{username}/received_events"],
    listReceivedPublicEventsForUser: [
      "GET /users/{username}/received_events/public"
    ],
    listRepoEvents: ["GET /repos/{owner}/{repo}/events"],
    listRepoNotificationsForAuthenticatedUser: [
      "GET /repos/{owner}/{repo}/notifications"
    ],
    listReposStarredByAuthenticatedUser: ["GET /user/starred"],
    listReposStarredByUser: ["GET /users/{username}/starred"],
    listReposWatchedByUser: ["GET /users/{username}/subscriptions"],
    listStargazersForRepo: ["GET /repos/{owner}/{repo}/stargazers"],
    listWatchedReposForAuthenticatedUser: ["GET /user/subscriptions"],
    listWatchersForRepo: ["GET /repos/{owner}/{repo}/subscribers"],
    markNotificationsAsRead: ["PUT /notifications"],
    markRepoNotificationsAsRead: ["PUT /repos/{owner}/{repo}/notifications"],
    markThreadAsRead: ["PATCH /notifications/threads/{thread_id}"],
    setRepoSubscription: ["PUT /repos/{owner}/{repo}/subscription"],
    setThreadSubscription: [
      "PUT /notifications/threads/{thread_id}/subscription"
    ],
    starRepoForAuthenticatedUser: ["PUT /user/starred/{owner}/{repo}"],
    unstarRepoForAuthenticatedUser: ["DELETE /user/starred/{owner}/{repo}"]
  },
  apps: {
    addRepoToInstallation: [
      "PUT /user/installations/{installation_id}/repositories/{repository_id}",
      {},
      { renamed: ["apps", "addRepoToInstallationForAuthenticatedUser"] }
    ],
    addRepoToInstallationForAuthenticatedUser: [
      "PUT /user/installations/{installation_id}/repositories/{repository_id}"
    ],
    checkToken: ["POST /applications/{client_id}/token"],
    createFromManifest: ["POST /app-manifests/{code}/conversions"],
    createInstallationAccessToken: [
      "POST /app/installations/{installation_id}/access_tokens"
    ],
    deleteAuthorization: ["DELETE /applications/{client_id}/grant"],
    deleteInstallation: ["DELETE /app/installations/{installation_id}"],
    deleteToken: ["DELETE /applications/{client_id}/token"],
    getAuthenticated: ["GET /app"],
    getBySlug: ["GET /apps/{app_slug}"],
    getInstallation: ["GET /app/installations/{installation_id}"],
    getOrgInstallation: ["GET /orgs/{org}/installation"],
    getRepoInstallation: ["GET /repos/{owner}/{repo}/installation"],
    getSubscriptionPlanForAccount: [
      "GET /marketplace_listing/accounts/{account_id}"
    ],
    getSubscriptionPlanForAccountStubbed: [
      "GET /marketplace_listing/stubbed/accounts/{account_id}"
    ],
    getUserInstallation: ["GET /users/{username}/installation"],
    getWebhookConfigForApp: ["GET /app/hook/config"],
    getWebhookDelivery: ["GET /app/hook/deliveries/{delivery_id}"],
    listAccountsForPlan: [
      "GET /marketplace_listing/plans/{plan_id}/accounts"
    ],
    listAccountsForPlanStubbed: [
      "GET /marketplace_listing/stubbed/plans/{plan_id}/accounts"
    ],
    listInstallationReposForAuthenticatedUser: [
      "GET /user/installations/{installation_id}/repositories"
    ],
    listInstallationRequestsForAuthenticatedApp: [
      "GET /app/installation-requests"
    ],
    listInstallations: ["GET /app/installations"],
    listInstallationsForAuthenticatedUser: ["GET /user/installations"],
    listPlans: ["GET /marketplace_listing/plans"],
    listPlansStubbed: ["GET /marketplace_listing/stubbed/plans"],
    listReposAccessibleToInstallation: ["GET /installation/repositories"],
    listSubscriptionsForAuthenticatedUser: [
      "GET /user/marketplace_purchases"
    ],
    listSubscriptionsForAuthenticatedUserStubbed: [
      "GET /user/marketplace_purchases/stubbed"
    ],
    listWebhookDeliveries: ["GET /app/hook/deliveries"],
    redeliverWebhookDelivery: [
      "POST /app/hook/deliveries/{delivery_id}/attempts"
    ],
    removeRepoFromInstallation: [
      "DELETE /user/installations/{installation_id}/repositories/{repository_id}",
      {},
      { renamed: ["apps", "removeRepoFromInstallationForAuthenticatedUser"] }
    ],
    removeRepoFromInstallationForAuthenticatedUser: [
      "DELETE /user/installations/{installation_id}/repositories/{repository_id}"
    ],
    resetToken: ["PATCH /applications/{client_id}/token"],
    revokeInstallationAccessToken: ["DELETE /installation/token"],
    scopeToken: ["POST /applications/{client_id}/token/scoped"],
    suspendInstallation: [
      "PUT /app/installations/{installation_id}/suspended"
    ],
    unsuspendInstallation: [
      "DELETE /app/installations/{installation_id}/suspended"
    ],
    updateWebhookConfigForApp: ["PATCH /app/hook/config"]
  },
  billing: {
    getGithubActionsBillingOrg: ["GET /orgs/{org}/settings/billing/actions"],
    getGithubActionsBillingUser: [
      "GET /users/{username}/settings/billing/actions"
    ],
    getGithubPackagesBillingOrg: [
      "GET /orgs/{org}/settings/billing/packages"
    ],
    getGithubPackagesBillingUser: [
      "GET /users/{username}/settings/billing/packages"
    ],
    getSharedStorageBillingOrg: [
      "GET /orgs/{org}/settings/billing/shared-storage"
    ],
    getSharedStorageBillingUser: [
      "GET /users/{username}/settings/billing/shared-storage"
    ]
  },
  checks: {
    create: ["POST /repos/{owner}/{repo}/check-runs"],
    createSuite: ["POST /repos/{owner}/{repo}/check-suites"],
    get: ["GET /repos/{owner}/{repo}/check-runs/{check_run_id}"],
    getSuite: ["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}"],
    listAnnotations: [
      "GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations"
    ],
    listForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/check-runs"],
    listForSuite: [
      "GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs"
    ],
    listSuitesForRef: [
      "GET /repos/{owner}/{repo}/commits/{ref}/check-suites"
    ],
    rerequestRun: [
      "POST /repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest"
    ],
    rerequestSuite: [
      "POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest"
    ],
    setSuitesPreferences: [
      "PATCH /repos/{owner}/{repo}/check-suites/preferences"
    ],
    update: ["PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}"]
  },
  codeScanning: {
    deleteAnalysis: [
      "DELETE /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}{?confirm_delete}"
    ],
    getAlert: [
      "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}",
      {},
      { renamedParameters: { alert_id: "alert_number" } }
    ],
    getAnalysis: [
      "GET /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}"
    ],
    getCodeqlDatabase: [
      "GET /repos/{owner}/{repo}/code-scanning/codeql/databases/{language}"
    ],
    getDefaultSetup: [
      "GET /repos/{owner}/{repo}/code-scanning/default-setup"
    ],
    getSarif: ["GET /repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}"],
    listAlertInstances: [
      "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances"
    ],
    listAlertsForOrg: ["GET /orgs/{org}/code-scanning/alerts"],
    listAlertsForRepo: ["GET /repos/{owner}/{repo}/code-scanning/alerts"],
    listAlertsInstances: [
      "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances",
      {},
      { renamed: ["codeScanning", "listAlertInstances"] }
    ],
    listCodeqlDatabases: [
      "GET /repos/{owner}/{repo}/code-scanning/codeql/databases"
    ],
    listRecentAnalyses: ["GET /repos/{owner}/{repo}/code-scanning/analyses"],
    updateAlert: [
      "PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}"
    ],
    updateDefaultSetup: [
      "PATCH /repos/{owner}/{repo}/code-scanning/default-setup"
    ],
    uploadSarif: ["POST /repos/{owner}/{repo}/code-scanning/sarifs"]
  },
  codesOfConduct: {
    getAllCodesOfConduct: ["GET /codes_of_conduct"],
    getConductCode: ["GET /codes_of_conduct/{key}"]
  },
  codespaces: {
    addRepositoryForSecretForAuthenticatedUser: [
      "PUT /user/codespaces/secrets/{secret_name}/repositories/{repository_id}"
    ],
    addSelectedRepoToOrgSecret: [
      "PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}"
    ],
    checkPermissionsForDevcontainer: [
      "GET /repos/{owner}/{repo}/codespaces/permissions_check"
    ],
    codespaceMachinesForAuthenticatedUser: [
      "GET /user/codespaces/{codespace_name}/machines"
    ],
    createForAuthenticatedUser: ["POST /user/codespaces"],
    createOrUpdateOrgSecret: [
      "PUT /orgs/{org}/codespaces/secrets/{secret_name}"
    ],
    createOrUpdateRepoSecret: [
      "PUT /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"
    ],
    createOrUpdateSecretForAuthenticatedUser: [
      "PUT /user/codespaces/secrets/{secret_name}"
    ],
    createWithPrForAuthenticatedUser: [
      "POST /repos/{owner}/{repo}/pulls/{pull_number}/codespaces"
    ],
    createWithRepoForAuthenticatedUser: [
      "POST /repos/{owner}/{repo}/codespaces"
    ],
    deleteForAuthenticatedUser: ["DELETE /user/codespaces/{codespace_name}"],
    deleteFromOrganization: [
      "DELETE /orgs/{org}/members/{username}/codespaces/{codespace_name}"
    ],
    deleteOrgSecret: ["DELETE /orgs/{org}/codespaces/secrets/{secret_name}"],
    deleteRepoSecret: [
      "DELETE /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"
    ],
    deleteSecretForAuthenticatedUser: [
      "DELETE /user/codespaces/secrets/{secret_name}"
    ],
    exportForAuthenticatedUser: [
      "POST /user/codespaces/{codespace_name}/exports"
    ],
    getCodespacesForUserInOrg: [
      "GET /orgs/{org}/members/{username}/codespaces"
    ],
    getExportDetailsForAuthenticatedUser: [
      "GET /user/codespaces/{codespace_name}/exports/{export_id}"
    ],
    getForAuthenticatedUser: ["GET /user/codespaces/{codespace_name}"],
    getOrgPublicKey: ["GET /orgs/{org}/codespaces/secrets/public-key"],
    getOrgSecret: ["GET /orgs/{org}/codespaces/secrets/{secret_name}"],
    getPublicKeyForAuthenticatedUser: [
      "GET /user/codespaces/secrets/public-key"
    ],
    getRepoPublicKey: [
      "GET /repos/{owner}/{repo}/codespaces/secrets/public-key"
    ],
    getRepoSecret: [
      "GET /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"
    ],
    getSecretForAuthenticatedUser: [
      "GET /user/codespaces/secrets/{secret_name}"
    ],
    listDevcontainersInRepositoryForAuthenticatedUser: [
      "GET /repos/{owner}/{repo}/codespaces/devcontainers"
    ],
    listForAuthenticatedUser: ["GET /user/codespaces"],
    listInOrganization: [
      "GET /orgs/{org}/codespaces",
      {},
      { renamedParameters: { org_id: "org" } }
    ],
    listInRepositoryForAuthenticatedUser: [
      "GET /repos/{owner}/{repo}/codespaces"
    ],
    listOrgSecrets: ["GET /orgs/{org}/codespaces/secrets"],
    listRepoSecrets: ["GET /repos/{owner}/{repo}/codespaces/secrets"],
    listRepositoriesForSecretForAuthenticatedUser: [
      "GET /user/codespaces/secrets/{secret_name}/repositories"
    ],
    listSecretsForAuthenticatedUser: ["GET /user/codespaces/secrets"],
    listSelectedReposForOrgSecret: [
      "GET /orgs/{org}/codespaces/secrets/{secret_name}/repositories"
    ],
    preFlightWithRepoForAuthenticatedUser: [
      "GET /repos/{owner}/{repo}/codespaces/new"
    ],
    publishForAuthenticatedUser: [
      "POST /user/codespaces/{codespace_name}/publish"
    ],
    removeRepositoryForSecretForAuthenticatedUser: [
      "DELETE /user/codespaces/secrets/{secret_name}/repositories/{repository_id}"
    ],
    removeSelectedRepoFromOrgSecret: [
      "DELETE /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}"
    ],
    repoMachinesForAuthenticatedUser: [
      "GET /repos/{owner}/{repo}/codespaces/machines"
    ],
    setRepositoriesForSecretForAuthenticatedUser: [
      "PUT /user/codespaces/secrets/{secret_name}/repositories"
    ],
    setSelectedReposForOrgSecret: [
      "PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories"
    ],
    startForAuthenticatedUser: [
      "POST /user/codespaces/{codespace_name}/start"
    ],
    stopForAuthenticatedUser: ["POST /user/codespaces/{codespace_name}/stop"],
    stopInOrganization: [
      "POST /orgs/{org}/members/{username}/codespaces/{codespace_name}/stop"
    ],
    updateForAuthenticatedUser: ["PATCH /user/codespaces/{codespace_name}"]
  },
  copilot: {
    addCopilotForBusinessSeatsForTeams: [
      "POST /orgs/{org}/copilot/billing/selected_teams"
    ],
    addCopilotForBusinessSeatsForUsers: [
      "POST /orgs/{org}/copilot/billing/selected_users"
    ],
    cancelCopilotSeatAssignmentForTeams: [
      "DELETE /orgs/{org}/copilot/billing/selected_teams"
    ],
    cancelCopilotSeatAssignmentForUsers: [
      "DELETE /orgs/{org}/copilot/billing/selected_users"
    ],
    getCopilotOrganizationDetails: ["GET /orgs/{org}/copilot/billing"],
    getCopilotSeatDetailsForUser: [
      "GET /orgs/{org}/members/{username}/copilot"
    ],
    listCopilotSeats: ["GET /orgs/{org}/copilot/billing/seats"]
  },
  dependabot: {
    addSelectedRepoToOrgSecret: [
      "PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}"
    ],
    createOrUpdateOrgSecret: [
      "PUT /orgs/{org}/dependabot/secrets/{secret_name}"
    ],
    createOrUpdateRepoSecret: [
      "PUT /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"
    ],
    deleteOrgSecret: ["DELETE /orgs/{org}/dependabot/secrets/{secret_name}"],
    deleteRepoSecret: [
      "DELETE /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"
    ],
    getAlert: ["GET /repos/{owner}/{repo}/dependabot/alerts/{alert_number}"],
    getOrgPublicKey: ["GET /orgs/{org}/dependabot/secrets/public-key"],
    getOrgSecret: ["GET /orgs/{org}/dependabot/secrets/{secret_name}"],
    getRepoPublicKey: [
      "GET /repos/{owner}/{repo}/dependabot/secrets/public-key"
    ],
    getRepoSecret: [
      "GET /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"
    ],
    listAlertsForEnterprise: [
      "GET /enterprises/{enterprise}/dependabot/alerts"
    ],
    listAlertsForOrg: ["GET /orgs/{org}/dependabot/alerts"],
    listAlertsForRepo: ["GET /repos/{owner}/{repo}/dependabot/alerts"],
    listOrgSecrets: ["GET /orgs/{org}/dependabot/secrets"],
    listRepoSecrets: ["GET /repos/{owner}/{repo}/dependabot/secrets"],
    listSelectedReposForOrgSecret: [
      "GET /orgs/{org}/dependabot/secrets/{secret_name}/repositories"
    ],
    removeSelectedRepoFromOrgSecret: [
      "DELETE /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}"
    ],
    setSelectedReposForOrgSecret: [
      "PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories"
    ],
    updateAlert: [
      "PATCH /repos/{owner}/{repo}/dependabot/alerts/{alert_number}"
    ]
  },
  dependencyGraph: {
    createRepositorySnapshot: [
      "POST /repos/{owner}/{repo}/dependency-graph/snapshots"
    ],
    diffRange: [
      "GET /repos/{owner}/{repo}/dependency-graph/compare/{basehead}"
    ],
    exportSbom: ["GET /repos/{owner}/{repo}/dependency-graph/sbom"]
  },
  emojis: { get: ["GET /emojis"] },
  gists: {
    checkIsStarred: ["GET /gists/{gist_id}/star"],
    create: ["POST /gists"],
    createComment: ["POST /gists/{gist_id}/comments"],
    delete: ["DELETE /gists/{gist_id}"],
    deleteComment: ["DELETE /gists/{gist_id}/comments/{comment_id}"],
    fork: ["POST /gists/{gist_id}/forks"],
    get: ["GET /gists/{gist_id}"],
    getComment: ["GET /gists/{gist_id}/comments/{comment_id}"],
    getRevision: ["GET /gists/{gist_id}/{sha}"],
    list: ["GET /gists"],
    listComments: ["GET /gists/{gist_id}/comments"],
    listCommits: ["GET /gists/{gist_id}/commits"],
    listForUser: ["GET /users/{username}/gists"],
    listForks: ["GET /gists/{gist_id}/forks"],
    listPublic: ["GET /gists/public"],
    listStarred: ["GET /gists/starred"],
    star: ["PUT /gists/{gist_id}/star"],
    unstar: ["DELETE /gists/{gist_id}/star"],
    update: ["PATCH /gists/{gist_id}"],
    updateComment: ["PATCH /gists/{gist_id}/comments/{comment_id}"]
  },
  git: {
    createBlob: ["POST /repos/{owner}/{repo}/git/blobs"],
    createCommit: ["POST /repos/{owner}/{repo}/git/commits"],
    createRef: ["POST /repos/{owner}/{repo}/git/refs"],
    createTag: ["POST /repos/{owner}/{repo}/git/tags"],
    createTree: ["POST /repos/{owner}/{repo}/git/trees"],
    deleteRef: ["DELETE /repos/{owner}/{repo}/git/refs/{ref}"],
    getBlob: ["GET /repos/{owner}/{repo}/git/blobs/{file_sha}"],
    getCommit: ["GET /repos/{owner}/{repo}/git/commits/{commit_sha}"],
    getRef: ["GET /repos/{owner}/{repo}/git/ref/{ref}"],
    getTag: ["GET /repos/{owner}/{repo}/git/tags/{tag_sha}"],
    getTree: ["GET /repos/{owner}/{repo}/git/trees/{tree_sha}"],
    listMatchingRefs: ["GET /repos/{owner}/{repo}/git/matching-refs/{ref}"],
    updateRef: ["PATCH /repos/{owner}/{repo}/git/refs/{ref}"]
  },
  gitignore: {
    getAllTemplates: ["GET /gitignore/templates"],
    getTemplate: ["GET /gitignore/templates/{name}"]
  },
  interactions: {
    getRestrictionsForAuthenticatedUser: ["GET /user/interaction-limits"],
    getRestrictionsForOrg: ["GET /orgs/{org}/interaction-limits"],
    getRestrictionsForRepo: ["GET /repos/{owner}/{repo}/interaction-limits"],
    getRestrictionsForYourPublicRepos: [
      "GET /user/interaction-limits",
      {},
      { renamed: ["interactions", "getRestrictionsForAuthenticatedUser"] }
    ],
    removeRestrictionsForAuthenticatedUser: [
      "DELETE /user/interaction-limits"
    ],
    removeRestrictionsForOrg: ["DELETE /orgs/{org}/interaction-limits"],
    removeRestrictionsForRepo: [
      "DELETE /repos/{owner}/{repo}/interaction-limits"
    ],
    removeRestrictionsForYourPublicRepos: [
      "DELETE /user/interaction-limits",
      {},
      { renamed: ["interactions", "removeRestrictionsForAuthenticatedUser"] }
    ],
    setRestrictionsForAuthenticatedUser: ["PUT /user/interaction-limits"],
    setRestrictionsForOrg: ["PUT /orgs/{org}/interaction-limits"],
    setRestrictionsForRepo: ["PUT /repos/{owner}/{repo}/interaction-limits"],
    setRestrictionsForYourPublicRepos: [
      "PUT /user/interaction-limits",
      {},
      { renamed: ["interactions", "setRestrictionsForAuthenticatedUser"] }
    ]
  },
  issues: {
    addAssignees: [
      "POST /repos/{owner}/{repo}/issues/{issue_number}/assignees"
    ],
    addLabels: ["POST /repos/{owner}/{repo}/issues/{issue_number}/labels"],
    checkUserCanBeAssigned: [
      "GET /repos/{owner}/{repo}/assignees/{assignee}"
    ],
    checkUserCanBeAssignedToIssue: [
      "GET /repos/{owner}/{repo}/issues/{issue_number}/assignees/{assignee}"
    ],
    create: ["POST /repos/{owner}/{repo}/issues"],
    createComment: [
      "POST /repos/{owner}/{repo}/issues/{issue_number}/comments"
    ],
    createLabel: ["POST /repos/{owner}/{repo}/labels"],
    createMilestone: ["POST /repos/{owner}/{repo}/milestones"],
    deleteComment: [
      "DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}"
    ],
    deleteLabel: ["DELETE /repos/{owner}/{repo}/labels/{name}"],
    deleteMilestone: [
      "DELETE /repos/{owner}/{repo}/milestones/{milestone_number}"
    ],
    get: ["GET /repos/{owner}/{repo}/issues/{issue_number}"],
    getComment: ["GET /repos/{owner}/{repo}/issues/comments/{comment_id}"],
    getEvent: ["GET /repos/{owner}/{repo}/issues/events/{event_id}"],
    getLabel: ["GET /repos/{owner}/{repo}/labels/{name}"],
    getMilestone: ["GET /repos/{owner}/{repo}/milestones/{milestone_number}"],
    list: ["GET /issues"],
    listAssignees: ["GET /repos/{owner}/{repo}/assignees"],
    listComments: [
      "GET /repos/{owner}/{repo}/issues/{issue_number}/comments"
    ],
    listCommentsForRepo: ["GET /repos/{owner}/{repo}/issues/comments"],
    listEvents: ["GET /repos/{owner}/{repo}/issues/{issue_number}/events"],
    listEventsForRepo: ["GET /repos/{owner}/{repo}/issues/events"],
    listEventsForTimeline: [
      "GET /repos/{owner}/{repo}/issues/{issue_number}/timeline"
    ],
    listForAuthenticatedUser: ["GET /user/issues"],
    listForOrg: ["GET /orgs/{org}/issues"],
    listForRepo: ["GET /repos/{owner}/{repo}/issues"],
    listLabelsForMilestone: [
      "GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels"
    ],
    listLabelsForRepo: ["GET /repos/{owner}/{repo}/labels"],
    listLabelsOnIssue: [
      "GET /repos/{owner}/{repo}/issues/{issue_number}/labels"
    ],
    listMilestones: ["GET /repos/{owner}/{repo}/milestones"],
    lock: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/lock"],
    removeAllLabels: [
      "DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels"
    ],
    removeAssignees: [
      "DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees"
    ],
    removeLabel: [
      "DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}"
    ],
    setLabels: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/labels"],
    unlock: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock"],
    update: ["PATCH /repos/{owner}/{repo}/issues/{issue_number}"],
    updateComment: [
      "PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}"
    ],
    updateLabel: ["PATCH /repos/{owner}/{repo}/labels/{name}"],
    updateMilestone: [
      "PATCH /repos/{owner}/{repo}/milestones/{milestone_number}"
    ]
  },
  licenses: {
    get: ["GET /licenses/{license}"],
    getAllCommonlyUsed: ["GET /licenses"],
    getForRepo: ["GET /repos/{owner}/{repo}/license"]
  },
  markdown: {
    render: ["POST /markdown"],
    renderRaw: [
      "POST /markdown/raw",
      { headers: { "content-type": "text/plain; charset=utf-8" } }
    ]
  },
  meta: {
    get: ["GET /meta"],
    getAllVersions: ["GET /versions"],
    getOctocat: ["GET /octocat"],
    getZen: ["GET /zen"],
    root: ["GET /"]
  },
  migrations: {
    cancelImport: [
      "DELETE /repos/{owner}/{repo}/import",
      {},
      {
        deprecated: "octokit.rest.migrations.cancelImport() is deprecated, see https://docs.github.com/rest/migrations/source-imports#cancel-an-import"
      }
    ],
    deleteArchiveForAuthenticatedUser: [
      "DELETE /user/migrations/{migration_id}/archive"
    ],
    deleteArchiveForOrg: [
      "DELETE /orgs/{org}/migrations/{migration_id}/archive"
    ],
    downloadArchiveForOrg: [
      "GET /orgs/{org}/migrations/{migration_id}/archive"
    ],
    getArchiveForAuthenticatedUser: [
      "GET /user/migrations/{migration_id}/archive"
    ],
    getCommitAuthors: [
      "GET /repos/{owner}/{repo}/import/authors",
      {},
      {
        deprecated: "octokit.rest.migrations.getCommitAuthors() is deprecated, see https://docs.github.com/rest/migrations/source-imports#get-commit-authors"
      }
    ],
    getImportStatus: [
      "GET /repos/{owner}/{repo}/import",
      {},
      {
        deprecated: "octokit.rest.migrations.getImportStatus() is deprecated, see https://docs.github.com/rest/migrations/source-imports#get-an-import-status"
      }
    ],
    getLargeFiles: [
      "GET /repos/{owner}/{repo}/import/large_files",
      {},
      {
        deprecated: "octokit.rest.migrations.getLargeFiles() is deprecated, see https://docs.github.com/rest/migrations/source-imports#get-large-files"
      }
    ],
    getStatusForAuthenticatedUser: ["GET /user/migrations/{migration_id}"],
    getStatusForOrg: ["GET /orgs/{org}/migrations/{migration_id}"],
    listForAuthenticatedUser: ["GET /user/migrations"],
    listForOrg: ["GET /orgs/{org}/migrations"],
    listReposForAuthenticatedUser: [
      "GET /user/migrations/{migration_id}/repositories"
    ],
    listReposForOrg: [
      "GET /orgs/{org}/migrations/{migration_id}/repositories"
    ],
    listReposForUser: [
      "GET /user/migrations/{migration_id}/repositories",
      {},
      { renamed: ["migrations", "listReposForAuthenticatedUser"] }
    ],
    mapCommitAuthor: [
      "PATCH /repos/{owner}/{repo}/import/authors/{author_id}",
      {},
      {
        deprecated: "octokit.rest.migrations.mapCommitAuthor() is deprecated, see https://docs.github.com/rest/migrations/source-imports#map-a-commit-author"
      }
    ],
    setLfsPreference: [
      "PATCH /repos/{owner}/{repo}/import/lfs",
      {},
      {
        deprecated: "octokit.rest.migrations.setLfsPreference() is deprecated, see https://docs.github.com/rest/migrations/source-imports#update-git-lfs-preference"
      }
    ],
    startForAuthenticatedUser: ["POST /user/migrations"],
    startForOrg: ["POST /orgs/{org}/migrations"],
    startImport: [
      "PUT /repos/{owner}/{repo}/import",
      {},
      {
        deprecated: "octokit.rest.migrations.startImport() is deprecated, see https://docs.github.com/rest/migrations/source-imports#start-an-import"
      }
    ],
    unlockRepoForAuthenticatedUser: [
      "DELETE /user/migrations/{migration_id}/repos/{repo_name}/lock"
    ],
    unlockRepoForOrg: [
      "DELETE /orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock"
    ],
    updateImport: [
      "PATCH /repos/{owner}/{repo}/import",
      {},
      {
        deprecated: "octokit.rest.migrations.updateImport() is deprecated, see https://docs.github.com/rest/migrations/source-imports#update-an-import"
      }
    ]
  },
  orgs: {
    addSecurityManagerTeam: [
      "PUT /orgs/{org}/security-managers/teams/{team_slug}"
    ],
    blockUser: ["PUT /orgs/{org}/blocks/{username}"],
    cancelInvitation: ["DELETE /orgs/{org}/invitations/{invitation_id}"],
    checkBlockedUser: ["GET /orgs/{org}/blocks/{username}"],
    checkMembershipForUser: ["GET /orgs/{org}/members/{username}"],
    checkPublicMembershipForUser: [
      "GET /orgs/{org}/public_members/{username}"
    ],
    convertMemberToOutsideCollaborator: [
      "PUT /orgs/{org}/outside_collaborators/{username}"
    ],
    createInvitation: ["POST /orgs/{org}/invitations"],
    createOrUpdateCustomProperties: ["PATCH /orgs/{org}/properties/schema"],
    createOrUpdateCustomPropertiesValuesForRepos: [
      "PATCH /orgs/{org}/properties/values"
    ],
    createOrUpdateCustomProperty: [
      "PUT /orgs/{org}/properties/schema/{custom_property_name}"
    ],
    createWebhook: ["POST /orgs/{org}/hooks"],
    delete: ["DELETE /orgs/{org}"],
    deleteWebhook: ["DELETE /orgs/{org}/hooks/{hook_id}"],
    enableOrDisableSecurityProductOnAllOrgRepos: [
      "POST /orgs/{org}/{security_product}/{enablement}"
    ],
    get: ["GET /orgs/{org}"],
    getAllCustomProperties: ["GET /orgs/{org}/properties/schema"],
    getCustomProperty: [
      "GET /orgs/{org}/properties/schema/{custom_property_name}"
    ],
    getMembershipForAuthenticatedUser: ["GET /user/memberships/orgs/{org}"],
    getMembershipForUser: ["GET /orgs/{org}/memberships/{username}"],
    getWebhook: ["GET /orgs/{org}/hooks/{hook_id}"],
    getWebhookConfigForOrg: ["GET /orgs/{org}/hooks/{hook_id}/config"],
    getWebhookDelivery: [
      "GET /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}"
    ],
    list: ["GET /organizations"],
    listAppInstallations: ["GET /orgs/{org}/installations"],
    listBlockedUsers: ["GET /orgs/{org}/blocks"],
    listCustomPropertiesValuesForRepos: ["GET /orgs/{org}/properties/values"],
    listFailedInvitations: ["GET /orgs/{org}/failed_invitations"],
    listForAuthenticatedUser: ["GET /user/orgs"],
    listForUser: ["GET /users/{username}/orgs"],
    listInvitationTeams: [
      "GET /orgs/{org}/invitations/{invitation_id}/teams"
    ],
    listMembers: ["GET /orgs/{org}/members"],
    listMembershipsForAuthenticatedUser: ["GET /user/memberships/orgs"],
    listOutsideCollaborators: ["GET /orgs/{org}/outside_collaborators"],
    listPatGrantRepositories: [
      "GET /orgs/{org}/personal-access-tokens/{pat_id}/repositories"
    ],
    listPatGrantRequestRepositories: [
      "GET /orgs/{org}/personal-access-token-requests/{pat_request_id}/repositories"
    ],
    listPatGrantRequests: ["GET /orgs/{org}/personal-access-token-requests"],
    listPatGrants: ["GET /orgs/{org}/personal-access-tokens"],
    listPendingInvitations: ["GET /orgs/{org}/invitations"],
    listPublicMembers: ["GET /orgs/{org}/public_members"],
    listSecurityManagerTeams: ["GET /orgs/{org}/security-managers"],
    listWebhookDeliveries: ["GET /orgs/{org}/hooks/{hook_id}/deliveries"],
    listWebhooks: ["GET /orgs/{org}/hooks"],
    pingWebhook: ["POST /orgs/{org}/hooks/{hook_id}/pings"],
    redeliverWebhookDelivery: [
      "POST /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts"
    ],
    removeCustomProperty: [
      "DELETE /orgs/{org}/properties/schema/{custom_property_name}"
    ],
    removeMember: ["DELETE /orgs/{org}/members/{username}"],
    removeMembershipForUser: ["DELETE /orgs/{org}/memberships/{username}"],
    removeOutsideCollaborator: [
      "DELETE /orgs/{org}/outside_collaborators/{username}"
    ],
    removePublicMembershipForAuthenticatedUser: [
      "DELETE /orgs/{org}/public_members/{username}"
    ],
    removeSecurityManagerTeam: [
      "DELETE /orgs/{org}/security-managers/teams/{team_slug}"
    ],
    reviewPatGrantRequest: [
      "POST /orgs/{org}/personal-access-token-requests/{pat_request_id}"
    ],
    reviewPatGrantRequestsInBulk: [
      "POST /orgs/{org}/personal-access-token-requests"
    ],
    setMembershipForUser: ["PUT /orgs/{org}/memberships/{username}"],
    setPublicMembershipForAuthenticatedUser: [
      "PUT /orgs/{org}/public_members/{username}"
    ],
    unblockUser: ["DELETE /orgs/{org}/blocks/{username}"],
    update: ["PATCH /orgs/{org}"],
    updateMembershipForAuthenticatedUser: [
      "PATCH /user/memberships/orgs/{org}"
    ],
    updatePatAccess: ["POST /orgs/{org}/personal-access-tokens/{pat_id}"],
    updatePatAccesses: ["POST /orgs/{org}/personal-access-tokens"],
    updateWebhook: ["PATCH /orgs/{org}/hooks/{hook_id}"],
    updateWebhookConfigForOrg: ["PATCH /orgs/{org}/hooks/{hook_id}/config"]
  },
  packages: {
    deletePackageForAuthenticatedUser: [
      "DELETE /user/packages/{package_type}/{package_name}"
    ],
    deletePackageForOrg: [
      "DELETE /orgs/{org}/packages/{package_type}/{package_name}"
    ],
    deletePackageForUser: [
      "DELETE /users/{username}/packages/{package_type}/{package_name}"
    ],
    deletePackageVersionForAuthenticatedUser: [
      "DELETE /user/packages/{package_type}/{package_name}/versions/{package_version_id}"
    ],
    deletePackageVersionForOrg: [
      "DELETE /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}"
    ],
    deletePackageVersionForUser: [
      "DELETE /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}"
    ],
    getAllPackageVersionsForAPackageOwnedByAnOrg: [
      "GET /orgs/{org}/packages/{package_type}/{package_name}/versions",
      {},
      { renamed: ["packages", "getAllPackageVersionsForPackageOwnedByOrg"] }
    ],
    getAllPackageVersionsForAPackageOwnedByTheAuthenticatedUser: [
      "GET /user/packages/{package_type}/{package_name}/versions",
      {},
      {
        renamed: [
          "packages",
          "getAllPackageVersionsForPackageOwnedByAuthenticatedUser"
        ]
      }
    ],
    getAllPackageVersionsForPackageOwnedByAuthenticatedUser: [
      "GET /user/packages/{package_type}/{package_name}/versions"
    ],
    getAllPackageVersionsForPackageOwnedByOrg: [
      "GET /orgs/{org}/packages/{package_type}/{package_name}/versions"
    ],
    getAllPackageVersionsForPackageOwnedByUser: [
      "GET /users/{username}/packages/{package_type}/{package_name}/versions"
    ],
    getPackageForAuthenticatedUser: [
      "GET /user/packages/{package_type}/{package_name}"
    ],
    getPackageForOrganization: [
      "GET /orgs/{org}/packages/{package_type}/{package_name}"
    ],
    getPackageForUser: [
      "GET /users/{username}/packages/{package_type}/{package_name}"
    ],
    getPackageVersionForAuthenticatedUser: [
      "GET /user/packages/{package_type}/{package_name}/versions/{package_version_id}"
    ],
    getPackageVersionForOrganization: [
      "GET /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}"
    ],
    getPackageVersionForUser: [
      "GET /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}"
    ],
    listDockerMigrationConflictingPackagesForAuthenticatedUser: [
      "GET /user/docker/conflicts"
    ],
    listDockerMigrationConflictingPackagesForOrganization: [
      "GET /orgs/{org}/docker/conflicts"
    ],
    listDockerMigrationConflictingPackagesForUser: [
      "GET /users/{username}/docker/conflicts"
    ],
    listPackagesForAuthenticatedUser: ["GET /user/packages"],
    listPackagesForOrganization: ["GET /orgs/{org}/packages"],
    listPackagesForUser: ["GET /users/{username}/packages"],
    restorePackageForAuthenticatedUser: [
      "POST /user/packages/{package_type}/{package_name}/restore{?token}"
    ],
    restorePackageForOrg: [
      "POST /orgs/{org}/packages/{package_type}/{package_name}/restore{?token}"
    ],
    restorePackageForUser: [
      "POST /users/{username}/packages/{package_type}/{package_name}/restore{?token}"
    ],
    restorePackageVersionForAuthenticatedUser: [
      "POST /user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"
    ],
    restorePackageVersionForOrg: [
      "POST /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"
    ],
    restorePackageVersionForUser: [
      "POST /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"
    ]
  },
  projects: {
    addCollaborator: ["PUT /projects/{project_id}/collaborators/{username}"],
    createCard: ["POST /projects/columns/{column_id}/cards"],
    createColumn: ["POST /projects/{project_id}/columns"],
    createForAuthenticatedUser: ["POST /user/projects"],
    createForOrg: ["POST /orgs/{org}/projects"],
    createForRepo: ["POST /repos/{owner}/{repo}/projects"],
    delete: ["DELETE /projects/{project_id}"],
    deleteCard: ["DELETE /projects/columns/cards/{card_id}"],
    deleteColumn: ["DELETE /projects/columns/{column_id}"],
    get: ["GET /projects/{project_id}"],
    getCard: ["GET /projects/columns/cards/{card_id}"],
    getColumn: ["GET /projects/columns/{column_id}"],
    getPermissionForUser: [
      "GET /projects/{project_id}/collaborators/{username}/permission"
    ],
    listCards: ["GET /projects/columns/{column_id}/cards"],
    listCollaborators: ["GET /projects/{project_id}/collaborators"],
    listColumns: ["GET /projects/{project_id}/columns"],
    listForOrg: ["GET /orgs/{org}/projects"],
    listForRepo: ["GET /repos/{owner}/{repo}/projects"],
    listForUser: ["GET /users/{username}/projects"],
    moveCard: ["POST /projects/columns/cards/{card_id}/moves"],
    moveColumn: ["POST /projects/columns/{column_id}/moves"],
    removeCollaborator: [
      "DELETE /projects/{project_id}/collaborators/{username}"
    ],
    update: ["PATCH /projects/{project_id}"],
    updateCard: ["PATCH /projects/columns/cards/{card_id}"],
    updateColumn: ["PATCH /projects/columns/{column_id}"]
  },
  pulls: {
    checkIfMerged: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/merge"],
    create: ["POST /repos/{owner}/{repo}/pulls"],
    createReplyForReviewComment: [
      "POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies"
    ],
    createReview: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],
    createReviewComment: [
      "POST /repos/{owner}/{repo}/pulls/{pull_number}/comments"
    ],
    deletePendingReview: [
      "DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"
    ],
    deleteReviewComment: [
      "DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}"
    ],
    dismissReview: [
      "PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals"
    ],
    get: ["GET /repos/{owner}/{repo}/pulls/{pull_number}"],
    getReview: [
      "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"
    ],
    getReviewComment: [
      "GET /repos/{owner}/{repo}/pulls/comments/{comment_id}"
    ],
    list: ["GET /repos/{owner}/{repo}/pulls"],
    listCommentsForReview: [
      "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments"
    ],
    listCommits: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/commits"],
    listFiles: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/files"],
    listRequestedReviewers: [
      "GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"
    ],
    listReviewComments: [
      "GET /repos/{owner}/{repo}/pulls/{pull_number}/comments"
    ],
    listReviewCommentsForRepo: ["GET /repos/{owner}/{repo}/pulls/comments"],
    listReviews: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],
    merge: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge"],
    removeRequestedReviewers: [
      "DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"
    ],
    requestReviewers: [
      "POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"
    ],
    submitReview: [
      "POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events"
    ],
    update: ["PATCH /repos/{owner}/{repo}/pulls/{pull_number}"],
    updateBranch: [
      "PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch"
    ],
    updateReview: [
      "PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"
    ],
    updateReviewComment: [
      "PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}"
    ]
  },
  rateLimit: { get: ["GET /rate_limit"] },
  reactions: {
    createForCommitComment: [
      "POST /repos/{owner}/{repo}/comments/{comment_id}/reactions"
    ],
    createForIssue: [
      "POST /repos/{owner}/{repo}/issues/{issue_number}/reactions"
    ],
    createForIssueComment: [
      "POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions"
    ],
    createForPullRequestReviewComment: [
      "POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions"
    ],
    createForRelease: [
      "POST /repos/{owner}/{repo}/releases/{release_id}/reactions"
    ],
    createForTeamDiscussionCommentInOrg: [
      "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions"
    ],
    createForTeamDiscussionInOrg: [
      "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions"
    ],
    deleteForCommitComment: [
      "DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}"
    ],
    deleteForIssue: [
      "DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}"
    ],
    deleteForIssueComment: [
      "DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}"
    ],
    deleteForPullRequestComment: [
      "DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}"
    ],
    deleteForRelease: [
      "DELETE /repos/{owner}/{repo}/releases/{release_id}/reactions/{reaction_id}"
    ],
    deleteForTeamDiscussion: [
      "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}"
    ],
    deleteForTeamDiscussionComment: [
      "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}"
    ],
    listForCommitComment: [
      "GET /repos/{owner}/{repo}/comments/{comment_id}/reactions"
    ],
    listForIssue: [
      "GET /repos/{owner}/{repo}/issues/{issue_number}/reactions"
    ],
    listForIssueComment: [
      "GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions"
    ],
    listForPullRequestReviewComment: [
      "GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions"
    ],
    listForRelease: [
      "GET /repos/{owner}/{repo}/releases/{release_id}/reactions"
    ],
    listForTeamDiscussionCommentInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions"
    ],
    listForTeamDiscussionInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions"
    ]
  },
  repos: {
    acceptInvitation: [
      "PATCH /user/repository_invitations/{invitation_id}",
      {},
      { renamed: ["repos", "acceptInvitationForAuthenticatedUser"] }
    ],
    acceptInvitationForAuthenticatedUser: [
      "PATCH /user/repository_invitations/{invitation_id}"
    ],
    addAppAccessRestrictions: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
      {},
      { mapToData: "apps" }
    ],
    addCollaborator: ["PUT /repos/{owner}/{repo}/collaborators/{username}"],
    addStatusCheckContexts: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
      {},
      { mapToData: "contexts" }
    ],
    addTeamAccessRestrictions: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
      {},
      { mapToData: "teams" }
    ],
    addUserAccessRestrictions: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
      {},
      { mapToData: "users" }
    ],
    checkAutomatedSecurityFixes: [
      "GET /repos/{owner}/{repo}/automated-security-fixes"
    ],
    checkCollaborator: ["GET /repos/{owner}/{repo}/collaborators/{username}"],
    checkVulnerabilityAlerts: [
      "GET /repos/{owner}/{repo}/vulnerability-alerts"
    ],
    codeownersErrors: ["GET /repos/{owner}/{repo}/codeowners/errors"],
    compareCommits: ["GET /repos/{owner}/{repo}/compare/{base}...{head}"],
    compareCommitsWithBasehead: [
      "GET /repos/{owner}/{repo}/compare/{basehead}"
    ],
    createAutolink: ["POST /repos/{owner}/{repo}/autolinks"],
    createCommitComment: [
      "POST /repos/{owner}/{repo}/commits/{commit_sha}/comments"
    ],
    createCommitSignatureProtection: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"
    ],
    createCommitStatus: ["POST /repos/{owner}/{repo}/statuses/{sha}"],
    createDeployKey: ["POST /repos/{owner}/{repo}/keys"],
    createDeployment: ["POST /repos/{owner}/{repo}/deployments"],
    createDeploymentBranchPolicy: [
      "POST /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies"
    ],
    createDeploymentProtectionRule: [
      "POST /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules"
    ],
    createDeploymentStatus: [
      "POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"
    ],
    createDispatchEvent: ["POST /repos/{owner}/{repo}/dispatches"],
    createForAuthenticatedUser: ["POST /user/repos"],
    createFork: ["POST /repos/{owner}/{repo}/forks"],
    createInOrg: ["POST /orgs/{org}/repos"],
    createOrUpdateEnvironment: [
      "PUT /repos/{owner}/{repo}/environments/{environment_name}"
    ],
    createOrUpdateFileContents: ["PUT /repos/{owner}/{repo}/contents/{path}"],
    createOrgRuleset: ["POST /orgs/{org}/rulesets"],
    createPagesDeployment: ["POST /repos/{owner}/{repo}/pages/deployment"],
    createPagesSite: ["POST /repos/{owner}/{repo}/pages"],
    createRelease: ["POST /repos/{owner}/{repo}/releases"],
    createRepoRuleset: ["POST /repos/{owner}/{repo}/rulesets"],
    createTagProtection: ["POST /repos/{owner}/{repo}/tags/protection"],
    createUsingTemplate: [
      "POST /repos/{template_owner}/{template_repo}/generate"
    ],
    createWebhook: ["POST /repos/{owner}/{repo}/hooks"],
    declineInvitation: [
      "DELETE /user/repository_invitations/{invitation_id}",
      {},
      { renamed: ["repos", "declineInvitationForAuthenticatedUser"] }
    ],
    declineInvitationForAuthenticatedUser: [
      "DELETE /user/repository_invitations/{invitation_id}"
    ],
    delete: ["DELETE /repos/{owner}/{repo}"],
    deleteAccessRestrictions: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"
    ],
    deleteAdminBranchProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"
    ],
    deleteAnEnvironment: [
      "DELETE /repos/{owner}/{repo}/environments/{environment_name}"
    ],
    deleteAutolink: ["DELETE /repos/{owner}/{repo}/autolinks/{autolink_id}"],
    deleteBranchProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection"
    ],
    deleteCommitComment: [
      "DELETE /repos/{owner}/{repo}/comments/{comment_id}"
    ],
    deleteCommitSignatureProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"
    ],
    deleteDeployKey: ["DELETE /repos/{owner}/{repo}/keys/{key_id}"],
    deleteDeployment: [
      "DELETE /repos/{owner}/{repo}/deployments/{deployment_id}"
    ],
    deleteDeploymentBranchPolicy: [
      "DELETE /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"
    ],
    deleteFile: ["DELETE /repos/{owner}/{repo}/contents/{path}"],
    deleteInvitation: [
      "DELETE /repos/{owner}/{repo}/invitations/{invitation_id}"
    ],
    deleteOrgRuleset: ["DELETE /orgs/{org}/rulesets/{ruleset_id}"],
    deletePagesSite: ["DELETE /repos/{owner}/{repo}/pages"],
    deletePullRequestReviewProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"
    ],
    deleteRelease: ["DELETE /repos/{owner}/{repo}/releases/{release_id}"],
    deleteReleaseAsset: [
      "DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}"
    ],
    deleteRepoRuleset: ["DELETE /repos/{owner}/{repo}/rulesets/{ruleset_id}"],
    deleteTagProtection: [
      "DELETE /repos/{owner}/{repo}/tags/protection/{tag_protection_id}"
    ],
    deleteWebhook: ["DELETE /repos/{owner}/{repo}/hooks/{hook_id}"],
    disableAutomatedSecurityFixes: [
      "DELETE /repos/{owner}/{repo}/automated-security-fixes"
    ],
    disableDeploymentProtectionRule: [
      "DELETE /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}"
    ],
    disablePrivateVulnerabilityReporting: [
      "DELETE /repos/{owner}/{repo}/private-vulnerability-reporting"
    ],
    disableVulnerabilityAlerts: [
      "DELETE /repos/{owner}/{repo}/vulnerability-alerts"
    ],
    downloadArchive: [
      "GET /repos/{owner}/{repo}/zipball/{ref}",
      {},
      { renamed: ["repos", "downloadZipballArchive"] }
    ],
    downloadTarballArchive: ["GET /repos/{owner}/{repo}/tarball/{ref}"],
    downloadZipballArchive: ["GET /repos/{owner}/{repo}/zipball/{ref}"],
    enableAutomatedSecurityFixes: [
      "PUT /repos/{owner}/{repo}/automated-security-fixes"
    ],
    enablePrivateVulnerabilityReporting: [
      "PUT /repos/{owner}/{repo}/private-vulnerability-reporting"
    ],
    enableVulnerabilityAlerts: [
      "PUT /repos/{owner}/{repo}/vulnerability-alerts"
    ],
    generateReleaseNotes: [
      "POST /repos/{owner}/{repo}/releases/generate-notes"
    ],
    get: ["GET /repos/{owner}/{repo}"],
    getAccessRestrictions: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"
    ],
    getAdminBranchProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"
    ],
    getAllDeploymentProtectionRules: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules"
    ],
    getAllEnvironments: ["GET /repos/{owner}/{repo}/environments"],
    getAllStatusCheckContexts: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts"
    ],
    getAllTopics: ["GET /repos/{owner}/{repo}/topics"],
    getAppsWithAccessToProtectedBranch: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps"
    ],
    getAutolink: ["GET /repos/{owner}/{repo}/autolinks/{autolink_id}"],
    getBranch: ["GET /repos/{owner}/{repo}/branches/{branch}"],
    getBranchProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection"
    ],
    getBranchRules: ["GET /repos/{owner}/{repo}/rules/branches/{branch}"],
    getClones: ["GET /repos/{owner}/{repo}/traffic/clones"],
    getCodeFrequencyStats: ["GET /repos/{owner}/{repo}/stats/code_frequency"],
    getCollaboratorPermissionLevel: [
      "GET /repos/{owner}/{repo}/collaborators/{username}/permission"
    ],
    getCombinedStatusForRef: [
      "GET /repos/{owner}/{repo}/commits/{ref}/status"
    ],
    getCommit: ["GET /repos/{owner}/{repo}/commits/{ref}"],
    getCommitActivityStats: [
      "GET /repos/{owner}/{repo}/stats/commit_activity"
    ],
    getCommitComment: ["GET /repos/{owner}/{repo}/comments/{comment_id}"],
    getCommitSignatureProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"
    ],
    getCommunityProfileMetrics: [
      "GET /repos/{owner}/{repo}/community/profile"
    ],
    getContent: ["GET /repos/{owner}/{repo}/contents/{path}"],
    getContributorsStats: ["GET /repos/{owner}/{repo}/stats/contributors"],
    getCustomDeploymentProtectionRule: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}"
    ],
    getCustomPropertiesValues: [
      "GET /repos/{owner}/{repo}/properties/values"
    ],
    getDeployKey: ["GET /repos/{owner}/{repo}/keys/{key_id}"],
    getDeployment: ["GET /repos/{owner}/{repo}/deployments/{deployment_id}"],
    getDeploymentBranchPolicy: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"
    ],
    getDeploymentStatus: [
      "GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}"
    ],
    getEnvironment: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}"
    ],
    getLatestPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/latest"],
    getLatestRelease: ["GET /repos/{owner}/{repo}/releases/latest"],
    getOrgRuleSuite: ["GET /orgs/{org}/rulesets/rule-suites/{rule_suite_id}"],
    getOrgRuleSuites: ["GET /orgs/{org}/rulesets/rule-suites"],
    getOrgRuleset: ["GET /orgs/{org}/rulesets/{ruleset_id}"],
    getOrgRulesets: ["GET /orgs/{org}/rulesets"],
    getPages: ["GET /repos/{owner}/{repo}/pages"],
    getPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/{build_id}"],
    getPagesHealthCheck: ["GET /repos/{owner}/{repo}/pages/health"],
    getParticipationStats: ["GET /repos/{owner}/{repo}/stats/participation"],
    getPullRequestReviewProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"
    ],
    getPunchCardStats: ["GET /repos/{owner}/{repo}/stats/punch_card"],
    getReadme: ["GET /repos/{owner}/{repo}/readme"],
    getReadmeInDirectory: ["GET /repos/{owner}/{repo}/readme/{dir}"],
    getRelease: ["GET /repos/{owner}/{repo}/releases/{release_id}"],
    getReleaseAsset: ["GET /repos/{owner}/{repo}/releases/assets/{asset_id}"],
    getReleaseByTag: ["GET /repos/{owner}/{repo}/releases/tags/{tag}"],
    getRepoRuleSuite: [
      "GET /repos/{owner}/{repo}/rulesets/rule-suites/{rule_suite_id}"
    ],
    getRepoRuleSuites: ["GET /repos/{owner}/{repo}/rulesets/rule-suites"],
    getRepoRuleset: ["GET /repos/{owner}/{repo}/rulesets/{ruleset_id}"],
    getRepoRulesets: ["GET /repos/{owner}/{repo}/rulesets"],
    getStatusChecksProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"
    ],
    getTeamsWithAccessToProtectedBranch: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams"
    ],
    getTopPaths: ["GET /repos/{owner}/{repo}/traffic/popular/paths"],
    getTopReferrers: ["GET /repos/{owner}/{repo}/traffic/popular/referrers"],
    getUsersWithAccessToProtectedBranch: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users"
    ],
    getViews: ["GET /repos/{owner}/{repo}/traffic/views"],
    getWebhook: ["GET /repos/{owner}/{repo}/hooks/{hook_id}"],
    getWebhookConfigForRepo: [
      "GET /repos/{owner}/{repo}/hooks/{hook_id}/config"
    ],
    getWebhookDelivery: [
      "GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}"
    ],
    listActivities: ["GET /repos/{owner}/{repo}/activity"],
    listAutolinks: ["GET /repos/{owner}/{repo}/autolinks"],
    listBranches: ["GET /repos/{owner}/{repo}/branches"],
    listBranchesForHeadCommit: [
      "GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head"
    ],
    listCollaborators: ["GET /repos/{owner}/{repo}/collaborators"],
    listCommentsForCommit: [
      "GET /repos/{owner}/{repo}/commits/{commit_sha}/comments"
    ],
    listCommitCommentsForRepo: ["GET /repos/{owner}/{repo}/comments"],
    listCommitStatusesForRef: [
      "GET /repos/{owner}/{repo}/commits/{ref}/statuses"
    ],
    listCommits: ["GET /repos/{owner}/{repo}/commits"],
    listContributors: ["GET /repos/{owner}/{repo}/contributors"],
    listCustomDeploymentRuleIntegrations: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/apps"
    ],
    listDeployKeys: ["GET /repos/{owner}/{repo}/keys"],
    listDeploymentBranchPolicies: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies"
    ],
    listDeploymentStatuses: [
      "GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"
    ],
    listDeployments: ["GET /repos/{owner}/{repo}/deployments"],
    listForAuthenticatedUser: ["GET /user/repos"],
    listForOrg: ["GET /orgs/{org}/repos"],
    listForUser: ["GET /users/{username}/repos"],
    listForks: ["GET /repos/{owner}/{repo}/forks"],
    listInvitations: ["GET /repos/{owner}/{repo}/invitations"],
    listInvitationsForAuthenticatedUser: ["GET /user/repository_invitations"],
    listLanguages: ["GET /repos/{owner}/{repo}/languages"],
    listPagesBuilds: ["GET /repos/{owner}/{repo}/pages/builds"],
    listPublic: ["GET /repositories"],
    listPullRequestsAssociatedWithCommit: [
      "GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls"
    ],
    listReleaseAssets: [
      "GET /repos/{owner}/{repo}/releases/{release_id}/assets"
    ],
    listReleases: ["GET /repos/{owner}/{repo}/releases"],
    listTagProtection: ["GET /repos/{owner}/{repo}/tags/protection"],
    listTags: ["GET /repos/{owner}/{repo}/tags"],
    listTeams: ["GET /repos/{owner}/{repo}/teams"],
    listWebhookDeliveries: [
      "GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries"
    ],
    listWebhooks: ["GET /repos/{owner}/{repo}/hooks"],
    merge: ["POST /repos/{owner}/{repo}/merges"],
    mergeUpstream: ["POST /repos/{owner}/{repo}/merge-upstream"],
    pingWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/pings"],
    redeliverWebhookDelivery: [
      "POST /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts"
    ],
    removeAppAccessRestrictions: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
      {},
      { mapToData: "apps" }
    ],
    removeCollaborator: [
      "DELETE /repos/{owner}/{repo}/collaborators/{username}"
    ],
    removeStatusCheckContexts: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
      {},
      { mapToData: "contexts" }
    ],
    removeStatusCheckProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"
    ],
    removeTeamAccessRestrictions: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
      {},
      { mapToData: "teams" }
    ],
    removeUserAccessRestrictions: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
      {},
      { mapToData: "users" }
    ],
    renameBranch: ["POST /repos/{owner}/{repo}/branches/{branch}/rename"],
    replaceAllTopics: ["PUT /repos/{owner}/{repo}/topics"],
    requestPagesBuild: ["POST /repos/{owner}/{repo}/pages/builds"],
    setAdminBranchProtection: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"
    ],
    setAppAccessRestrictions: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
      {},
      { mapToData: "apps" }
    ],
    setStatusCheckContexts: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
      {},
      { mapToData: "contexts" }
    ],
    setTeamAccessRestrictions: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
      {},
      { mapToData: "teams" }
    ],
    setUserAccessRestrictions: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
      {},
      { mapToData: "users" }
    ],
    testPushWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/tests"],
    transfer: ["POST /repos/{owner}/{repo}/transfer"],
    update: ["PATCH /repos/{owner}/{repo}"],
    updateBranchProtection: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection"
    ],
    updateCommitComment: [
      "PATCH /repos/{owner}/{repo}/comments/{comment_id}"
    ],
    updateDeploymentBranchPolicy: [
      "PUT /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"
    ],
    updateInformationAboutPagesSite: ["PUT /repos/{owner}/{repo}/pages"],
    updateInvitation: [
      "PATCH /repos/{owner}/{repo}/invitations/{invitation_id}"
    ],
    updateOrgRuleset: ["PUT /orgs/{org}/rulesets/{ruleset_id}"],
    updatePullRequestReviewProtection: [
      "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"
    ],
    updateRelease: ["PATCH /repos/{owner}/{repo}/releases/{release_id}"],
    updateReleaseAsset: [
      "PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}"
    ],
    updateRepoRuleset: ["PUT /repos/{owner}/{repo}/rulesets/{ruleset_id}"],
    updateStatusCheckPotection: [
      "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks",
      {},
      { renamed: ["repos", "updateStatusCheckProtection"] }
    ],
    updateStatusCheckProtection: [
      "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"
    ],
    updateWebhook: ["PATCH /repos/{owner}/{repo}/hooks/{hook_id}"],
    updateWebhookConfigForRepo: [
      "PATCH /repos/{owner}/{repo}/hooks/{hook_id}/config"
    ],
    uploadReleaseAsset: [
      "POST /repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}",
      { baseUrl: "https://uploads.github.com" }
    ]
  },
  search: {
    code: ["GET /search/code"],
    commits: ["GET /search/commits"],
    issuesAndPullRequests: ["GET /search/issues"],
    labels: ["GET /search/labels"],
    repos: ["GET /search/repositories"],
    topics: ["GET /search/topics"],
    users: ["GET /search/users"]
  },
  secretScanning: {
    getAlert: [
      "GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}"
    ],
    listAlertsForEnterprise: [
      "GET /enterprises/{enterprise}/secret-scanning/alerts"
    ],
    listAlertsForOrg: ["GET /orgs/{org}/secret-scanning/alerts"],
    listAlertsForRepo: ["GET /repos/{owner}/{repo}/secret-scanning/alerts"],
    listLocationsForAlert: [
      "GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations"
    ],
    updateAlert: [
      "PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}"
    ]
  },
  securityAdvisories: {
    createPrivateVulnerabilityReport: [
      "POST /repos/{owner}/{repo}/security-advisories/reports"
    ],
    createRepositoryAdvisory: [
      "POST /repos/{owner}/{repo}/security-advisories"
    ],
    createRepositoryAdvisoryCveRequest: [
      "POST /repos/{owner}/{repo}/security-advisories/{ghsa_id}/cve"
    ],
    getGlobalAdvisory: ["GET /advisories/{ghsa_id}"],
    getRepositoryAdvisory: [
      "GET /repos/{owner}/{repo}/security-advisories/{ghsa_id}"
    ],
    listGlobalAdvisories: ["GET /advisories"],
    listOrgRepositoryAdvisories: ["GET /orgs/{org}/security-advisories"],
    listRepositoryAdvisories: [
      "GET /repos/{owner}/{repo}/security-advisories"
    ],
    updateRepositoryAdvisory: [
      "PATCH /repos/{owner}/{repo}/security-advisories/{ghsa_id}"
    ]
  },
  teams: {
    addOrUpdateMembershipForUserInOrg: [
      "PUT /orgs/{org}/teams/{team_slug}/memberships/{username}"
    ],
    addOrUpdateProjectPermissionsInOrg: [
      "PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}"
    ],
    addOrUpdateRepoPermissionsInOrg: [
      "PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"
    ],
    checkPermissionsForProjectInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/projects/{project_id}"
    ],
    checkPermissionsForRepoInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"
    ],
    create: ["POST /orgs/{org}/teams"],
    createDiscussionCommentInOrg: [
      "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"
    ],
    createDiscussionInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions"],
    deleteDiscussionCommentInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"
    ],
    deleteDiscussionInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"
    ],
    deleteInOrg: ["DELETE /orgs/{org}/teams/{team_slug}"],
    getByName: ["GET /orgs/{org}/teams/{team_slug}"],
    getDiscussionCommentInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"
    ],
    getDiscussionInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"
    ],
    getMembershipForUserInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/memberships/{username}"
    ],
    list: ["GET /orgs/{org}/teams"],
    listChildInOrg: ["GET /orgs/{org}/teams/{team_slug}/teams"],
    listDiscussionCommentsInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"
    ],
    listDiscussionsInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions"],
    listForAuthenticatedUser: ["GET /user/teams"],
    listMembersInOrg: ["GET /orgs/{org}/teams/{team_slug}/members"],
    listPendingInvitationsInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/invitations"
    ],
    listProjectsInOrg: ["GET /orgs/{org}/teams/{team_slug}/projects"],
    listReposInOrg: ["GET /orgs/{org}/teams/{team_slug}/repos"],
    removeMembershipForUserInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}"
    ],
    removeProjectInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}"
    ],
    removeRepoInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"
    ],
    updateDiscussionCommentInOrg: [
      "PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"
    ],
    updateDiscussionInOrg: [
      "PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"
    ],
    updateInOrg: ["PATCH /orgs/{org}/teams/{team_slug}"]
  },
  users: {
    addEmailForAuthenticated: [
      "POST /user/emails",
      {},
      { renamed: ["users", "addEmailForAuthenticatedUser"] }
    ],
    addEmailForAuthenticatedUser: ["POST /user/emails"],
    addSocialAccountForAuthenticatedUser: ["POST /user/social_accounts"],
    block: ["PUT /user/blocks/{username}"],
    checkBlocked: ["GET /user/blocks/{username}"],
    checkFollowingForUser: ["GET /users/{username}/following/{target_user}"],
    checkPersonIsFollowedByAuthenticated: ["GET /user/following/{username}"],
    createGpgKeyForAuthenticated: [
      "POST /user/gpg_keys",
      {},
      { renamed: ["users", "createGpgKeyForAuthenticatedUser"] }
    ],
    createGpgKeyForAuthenticatedUser: ["POST /user/gpg_keys"],
    createPublicSshKeyForAuthenticated: [
      "POST /user/keys",
      {},
      { renamed: ["users", "createPublicSshKeyForAuthenticatedUser"] }
    ],
    createPublicSshKeyForAuthenticatedUser: ["POST /user/keys"],
    createSshSigningKeyForAuthenticatedUser: ["POST /user/ssh_signing_keys"],
    deleteEmailForAuthenticated: [
      "DELETE /user/emails",
      {},
      { renamed: ["users", "deleteEmailForAuthenticatedUser"] }
    ],
    deleteEmailForAuthenticatedUser: ["DELETE /user/emails"],
    deleteGpgKeyForAuthenticated: [
      "DELETE /user/gpg_keys/{gpg_key_id}",
      {},
      { renamed: ["users", "deleteGpgKeyForAuthenticatedUser"] }
    ],
    deleteGpgKeyForAuthenticatedUser: ["DELETE /user/gpg_keys/{gpg_key_id}"],
    deletePublicSshKeyForAuthenticated: [
      "DELETE /user/keys/{key_id}",
      {},
      { renamed: ["users", "deletePublicSshKeyForAuthenticatedUser"] }
    ],
    deletePublicSshKeyForAuthenticatedUser: ["DELETE /user/keys/{key_id}"],
    deleteSocialAccountForAuthenticatedUser: ["DELETE /user/social_accounts"],
    deleteSshSigningKeyForAuthenticatedUser: [
      "DELETE /user/ssh_signing_keys/{ssh_signing_key_id}"
    ],
    follow: ["PUT /user/following/{username}"],
    getAuthenticated: ["GET /user"],
    getByUsername: ["GET /users/{username}"],
    getContextForUser: ["GET /users/{username}/hovercard"],
    getGpgKeyForAuthenticated: [
      "GET /user/gpg_keys/{gpg_key_id}",
      {},
      { renamed: ["users", "getGpgKeyForAuthenticatedUser"] }
    ],
    getGpgKeyForAuthenticatedUser: ["GET /user/gpg_keys/{gpg_key_id}"],
    getPublicSshKeyForAuthenticated: [
      "GET /user/keys/{key_id}",
      {},
      { renamed: ["users", "getPublicSshKeyForAuthenticatedUser"] }
    ],
    getPublicSshKeyForAuthenticatedUser: ["GET /user/keys/{key_id}"],
    getSshSigningKeyForAuthenticatedUser: [
      "GET /user/ssh_signing_keys/{ssh_signing_key_id}"
    ],
    list: ["GET /users"],
    listBlockedByAuthenticated: [
      "GET /user/blocks",
      {},
      { renamed: ["users", "listBlockedByAuthenticatedUser"] }
    ],
    listBlockedByAuthenticatedUser: ["GET /user/blocks"],
    listEmailsForAuthenticated: [
      "GET /user/emails",
      {},
      { renamed: ["users", "listEmailsForAuthenticatedUser"] }
    ],
    listEmailsForAuthenticatedUser: ["GET /user/emails"],
    listFollowedByAuthenticated: [
      "GET /user/following",
      {},
      { renamed: ["users", "listFollowedByAuthenticatedUser"] }
    ],
    listFollowedByAuthenticatedUser: ["GET /user/following"],
    listFollowersForAuthenticatedUser: ["GET /user/followers"],
    listFollowersForUser: ["GET /users/{username}/followers"],
    listFollowingForUser: ["GET /users/{username}/following"],
    listGpgKeysForAuthenticated: [
      "GET /user/gpg_keys",
      {},
      { renamed: ["users", "listGpgKeysForAuthenticatedUser"] }
    ],
    listGpgKeysForAuthenticatedUser: ["GET /user/gpg_keys"],
    listGpgKeysForUser: ["GET /users/{username}/gpg_keys"],
    listPublicEmailsForAuthenticated: [
      "GET /user/public_emails",
      {},
      { renamed: ["users", "listPublicEmailsForAuthenticatedUser"] }
    ],
    listPublicEmailsForAuthenticatedUser: ["GET /user/public_emails"],
    listPublicKeysForUser: ["GET /users/{username}/keys"],
    listPublicSshKeysForAuthenticated: [
      "GET /user/keys",
      {},
      { renamed: ["users", "listPublicSshKeysForAuthenticatedUser"] }
    ],
    listPublicSshKeysForAuthenticatedUser: ["GET /user/keys"],
    listSocialAccountsForAuthenticatedUser: ["GET /user/social_accounts"],
    listSocialAccountsForUser: ["GET /users/{username}/social_accounts"],
    listSshSigningKeysForAuthenticatedUser: ["GET /user/ssh_signing_keys"],
    listSshSigningKeysForUser: ["GET /users/{username}/ssh_signing_keys"],
    setPrimaryEmailVisibilityForAuthenticated: [
      "PATCH /user/email/visibility",
      {},
      { renamed: ["users", "setPrimaryEmailVisibilityForAuthenticatedUser"] }
    ],
    setPrimaryEmailVisibilityForAuthenticatedUser: [
      "PATCH /user/email/visibility"
    ],
    unblock: ["DELETE /user/blocks/{username}"],
    unfollow: ["DELETE /user/following/{username}"],
    updateAuthenticated: ["PATCH /user"]
  }
};
var fi = mi;
var re = /* @__PURE__ */ new Map();
for (let [e, t] of Object.entries(fi))
  for (let [r, s2] of Object.entries(t)) {
    let [o2, n, a2] = s2, [c, u2] = o2.split(/ /), f2 = Object.assign({ method: c, url: u2 }, n);
    re.has(e) || re.set(e, /* @__PURE__ */ new Map()), re.get(e).set(r, {
      scope: e,
      methodName: r,
      endpointDefaults: f2,
      decorations: a2
    });
  }
var _i = {
  has({ scope: e }, t) {
    return re.get(e).has(t);
  },
  getOwnPropertyDescriptor(e, t) {
    return {
      value: this.get(e, t),
      configurable: true,
      writable: true,
      enumerable: true
    };
  },
  defineProperty(e, t, r) {
    return Object.defineProperty(e.cache, t, r), true;
  },
  deleteProperty(e, t) {
    return delete e.cache[t], true;
  },
  ownKeys({ scope: e }) {
    return [...re.get(e).keys()];
  },
  set(e, t, r) {
    return e.cache[t] = r;
  },
  get({ octokit: e, scope: t, cache: r }, s2) {
    if (r[s2])
      return r[s2];
    let o2 = re.get(t).get(s2);
    if (!o2)
      return;
    let { endpointDefaults: n, decorations: a2 } = o2;
    return a2 ? r[s2] = Ti(e, t, s2, n, a2) : r[s2] = e.request.defaults(n), r[s2];
  }
};
function Kr(e) {
  let t = {};
  for (let r of re.keys())
    t[r] = new Proxy({ octokit: e, scope: r, cache: {} }, _i);
  return t;
}
function Ti(e, t, r, s2, o2) {
  let n = e.request.defaults(s2);
  function a2(...c) {
    let u2 = n.endpoint.merge(...c);
    if (o2.mapToData)
      return u2 = Object.assign({}, u2, {
        data: u2[o2.mapToData],
        [o2.mapToData]: void 0
      }), n(u2);
    if (o2.renamed) {
      let [f2, _2] = o2.renamed;
      e.log.warn(`octokit.${t}.${r}() has been renamed to octokit.${f2}.${_2}()`);
    }
    if (o2.deprecated && e.log.warn(o2.deprecated), o2.renamedParameters) {
      let f2 = n.endpoint.merge(...c);
      for (let [_2, m2] of Object.entries(o2.renamedParameters))
        _2 in f2 && (e.log.warn(
          `"${_2}" parameter is deprecated for "octokit.${t}.${r}()". Use "${m2}" instead`
        ), m2 in f2 || (f2[m2] = f2[_2]), delete f2[_2]);
      return n(f2);
    }
    return n(...c);
  }
  return Object.assign(a2, n);
}
function pt(e) {
  return { rest: Kr(e) };
}
pt.VERSION = Vr;
function Ei(e) {
  let t = Kr(e);
  return { ...t, rest: t };
}
Ei.VERSION = Vr;
var Qr = S(gt());
J();
async function Jr(e, t, r, s2) {
  if (!r.request || !r.request.request)
    throw r;
  if (r.status >= 400 && !e.doNotRetry.includes(r.status)) {
    let o2 = s2.request.retries != null ? s2.request.retries : e.retries, n = Math.pow((s2.request.retryCount || 0) + 1, 2);
    throw t.retry.retryRequest(r, o2, n);
  }
  throw r;
}
async function wi(e, t, r, s2) {
  let o2 = new Qr.default();
  return o2.on("failed", function(n, a2) {
    let c = ~~n.request.request.retries, u2 = ~~n.request.request.retryAfter;
    if (s2.request.retryCount = a2.retryCount + 1, c > a2.retryCount)
      return u2 * e.retryAfterBaseValue;
  }), o2.schedule(yi.bind(null, e, t, r), s2);
}
async function yi(e, t, r, s2) {
  let o2 = await r(r, s2);
  if (o2.data && o2.data.errors && /Something went wrong while executing your query/.test(
    o2.data.errors[0].message
  )) {
    let n = new z2(o2.data.errors[0].message, 500, { request: s2, response: o2 });
    return Jr(e, t, n, s2);
  }
  return o2;
}
var bi = "6.0.1";
function mt(e, t) {
  let r = Object.assign(
    {
      enabled: true,
      retryAfterBaseValue: 1e3,
      doNotRetry: [400, 401, 403, 404, 422, 451],
      retries: 3
    },
    t.retry
  );
  return r.enabled && (e.hook.error("request", Jr.bind(null, r, e)), e.hook.wrap("request", wi.bind(null, r, e))), {
    retry: {
      retryRequest: (s2, o2, n) => (s2.request.request = Object.assign({}, s2.request.request, {
        retries: o2,
        retryAfter: n
      }), s2)
    }
  };
}
mt.VERSION = bi;
var Xr = S(gt());
var vi = "8.1.3";
var ft = () => Promise.resolve();
function ki(e, t, r) {
  return e.retryLimiter.schedule(Ai, e, t, r);
}
async function Ai(e, t, r) {
  let s2 = r.method !== "GET" && r.method !== "HEAD", { pathname: o2 } = new URL(r.url, "http://github.test"), n = r.method === "GET" && o2.startsWith("/search/"), a2 = o2.startsWith("/graphql"), u2 = ~~t.retryCount > 0 ? { priority: 0, weight: 0 } : {};
  e.clustering && (u2.expiration = 1e3 * 60), (s2 || a2) && await e.write.key(e.id).schedule(u2, ft), s2 && e.triggersNotification(o2) && await e.notifications.key(e.id).schedule(u2, ft), n && await e.search.key(e.id).schedule(u2, ft);
  let f2 = e.global.key(e.id).schedule(u2, t, r);
  if (a2) {
    let _2 = await f2;
    if (_2.data.errors != null && _2.data.errors.some((m2) => m2.type === "RATE_LIMITED"))
      throw Object.assign(new Error("GraphQL Rate Limit Exceeded"), {
        response: _2,
        data: _2.data
      });
  }
  return f2;
}
var Gi = [
  "/orgs/{org}/invitations",
  "/orgs/{org}/invitations/{invitation_id}",
  "/orgs/{org}/teams/{team_slug}/discussions",
  "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments",
  "/repos/{owner}/{repo}/collaborators/{username}",
  "/repos/{owner}/{repo}/commits/{commit_sha}/comments",
  "/repos/{owner}/{repo}/issues",
  "/repos/{owner}/{repo}/issues/{issue_number}/comments",
  "/repos/{owner}/{repo}/pulls",
  "/repos/{owner}/{repo}/pulls/{pull_number}/comments",
  "/repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies",
  "/repos/{owner}/{repo}/pulls/{pull_number}/merge",
  "/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers",
  "/repos/{owner}/{repo}/pulls/{pull_number}/reviews",
  "/repos/{owner}/{repo}/releases",
  "/teams/{team_id}/discussions",
  "/teams/{team_id}/discussions/{discussion_number}/comments"
];
function Si(e) {
  let r = `^(?:${e.map(
    (s2) => s2.split("/").map((o2) => o2.startsWith("{") ? "(?:.+?)" : o2).join("/")
  ).map((s2) => `(?:${s2})`).join("|")})[^/]*$`;
  return new RegExp(r, "i");
}
var Yr = Si(Gi);
var Zr = Yr.test.bind(Yr);
var ce = {};
var Oi = function(e, t) {
  ce.global = new e.Group({
    id: "octokit-global",
    maxConcurrent: 10,
    ...t
  }), ce.search = new e.Group({
    id: "octokit-search",
    maxConcurrent: 1,
    minTime: 2e3,
    ...t
  }), ce.write = new e.Group({
    id: "octokit-write",
    maxConcurrent: 1,
    minTime: 1e3,
    ...t
  }), ce.notifications = new e.Group({
    id: "octokit-notifications",
    maxConcurrent: 1,
    minTime: 3e3,
    ...t
  });
};
function Pe(e, t) {
  let {
    enabled: r = true,
    Bottleneck: s2 = Xr.default,
    id: o2 = "no-id",
    timeout: n = 1e3 * 60 * 2,
    connection: a2
  } = t.throttle || {};
  if (!r)
    return {};
  let c = { connection: a2, timeout: n };
  ce.global == null && Oi(s2, c);
  let u2 = Object.assign(
    {
      clustering: a2 != null,
      triggersNotification: Zr,
      fallbackSecondaryRateRetryAfter: 60,
      retryAfterBaseValue: 1e3,
      retryLimiter: new s2(),
      id: o2,
      ...ce
    },
    t.throttle
  );
  if (typeof u2.onSecondaryRateLimit != "function" || typeof u2.onRateLimit != "function")
    throw new Error(`octokit/plugin-throttling error:
        You must pass the onSecondaryRateLimit and onRateLimit error handlers.
        See https://octokit.github.io/rest.js/#throttling

        const octokit = new Octokit({
          throttle: {
            onSecondaryRateLimit: (retryAfter, options) => {/* ... */},
            onRateLimit: (retryAfter, options) => {/* ... */}
          }
        })
    `);
  let f2 = {}, _2 = new s2.Events(f2);
  return f2.on("secondary-limit", u2.onSecondaryRateLimit), f2.on("rate-limit", u2.onRateLimit), f2.on(
    "error",
    (m2) => e.log.warn("Error in throttling-plugin limit handler", m2)
  ), u2.retryLimiter.on("failed", async function(m2, E2) {
    let [y2, R, b2] = E2.args, { pathname: F } = new URL(b2.url, "http://github.test");
    if (!(F.startsWith("/graphql") && m2.status !== 401 || m2.status === 403))
      return;
    let A2 = ~~R.retryCount;
    R.retryCount = A2, b2.request.retryCount = A2;
    let { wantRetry: D2, retryAfter: P = 0 } = await async function() {
      if (/\bsecondary rate\b/i.test(m2.message)) {
        let O2 = Number(m2.response.headers["retry-after"]) || y2.fallbackSecondaryRateRetryAfter;
        return {
          wantRetry: await _2.trigger("secondary-limit", O2, b2, e, A2),
          retryAfter: O2
        };
      }
      if (m2.response.headers != null && m2.response.headers["x-ratelimit-remaining"] === "0" || (m2.response.data?.errors ?? []).some((O2) => O2.type === "RATE_LIMITED")) {
        let O2 = new Date(
          ~~m2.response.headers["x-ratelimit-reset"] * 1e3
        ).getTime(), j2 = Math.max(Math.ceil((O2 - Date.now()) / 1e3) + 1, 0);
        return {
          wantRetry: await _2.trigger("rate-limit", j2, b2, e, A2),
          retryAfter: j2
        };
      }
      return {};
    }();
    if (D2)
      return R.retryCount++, P * y2.retryAfterBaseValue;
  }), e.hook.wrap("request", ki.bind(null, u2)), {};
}
Pe.VERSION = vi;
Pe.triggersNotification = Zr;
J();
var yo = S(Se());
var bo = S(qe());
var vo = S(We());
var ve = S(He());
var pe = ((e) => (e.SHA1 = "sha1", e.SHA256 = "sha256", e))(pe || {});
var tu = (e) => e.startsWith("sha256=") ? "sha256" : "sha1";
var kt = new TextEncoder();
function ru(e) {
  let r = e.match(/[\dA-F]{2}/gi).map(function(s2) {
    return parseInt(s2, 16);
  });
  return new Uint8Array(r);
}
function su(e) {
  return Array.prototype.map.call(new Uint8Array(e), (t) => t.toString(16).padStart(2, "0")).join("");
}
function ou(e) {
  return { [pe.SHA1]: "SHA-1", [pe.SHA256]: "SHA-256" }[e];
}
async function lo(e, t) {
  return crypto.subtle.importKey(
    "raw",
    kt.encode(e),
    { name: "HMAC", hash: { name: ou(t) } },
    false,
    ["sign", "verify"]
  );
}
async function po(e, t) {
  let { secret: r, algorithm: s2 } = typeof e == "object" ? { secret: e.secret, algorithm: e.algorithm || pe.SHA256 } : { secret: e, algorithm: pe.SHA256 };
  if (!r || !t)
    throw new TypeError(
      "[@octokit/webhooks-methods] secret & payload required for sign()"
    );
  if (!Object.values(pe).includes(s2))
    throw new TypeError(
      `[@octokit/webhooks] Algorithm ${s2} is not supported. Must be  'sha1' or 'sha256'`
    );
  let o2 = await crypto.subtle.sign("HMAC", await lo(r, s2), kt.encode(t));
  return `${s2}=${su(o2)}`;
}
async function ze(e, t, r) {
  if (!e || !t || !r)
    throw new TypeError(
      "[@octokit/webhooks-methods] secret, eventPayload & signature required"
    );
  let s2 = tu(r);
  return await crypto.subtle.verify(
    "HMAC",
    await lo(e, s2),
    ru(r.replace(`${s2}=`, "")),
    kt.encode(t)
  );
}
var fo = S(He());
var _o = S(He());
var At = (e) => ({
  debug: () => {
  },
  info: () => {
  },
  warn: console.warn.bind(console),
  error: console.error.bind(console),
  ...e
});
var nu = [
  "branch_protection_rule",
  "branch_protection_rule.created",
  "branch_protection_rule.deleted",
  "branch_protection_rule.edited",
  "check_run",
  "check_run.completed",
  "check_run.created",
  "check_run.requested_action",
  "check_run.rerequested",
  "check_suite",
  "check_suite.completed",
  "check_suite.requested",
  "check_suite.rerequested",
  "code_scanning_alert",
  "code_scanning_alert.appeared_in_branch",
  "code_scanning_alert.closed_by_user",
  "code_scanning_alert.created",
  "code_scanning_alert.fixed",
  "code_scanning_alert.reopened",
  "code_scanning_alert.reopened_by_user",
  "commit_comment",
  "commit_comment.created",
  "create",
  "delete",
  "dependabot_alert",
  "dependabot_alert.created",
  "dependabot_alert.dismissed",
  "dependabot_alert.fixed",
  "dependabot_alert.reintroduced",
  "dependabot_alert.reopened",
  "deploy_key",
  "deploy_key.created",
  "deploy_key.deleted",
  "deployment",
  "deployment.created",
  "deployment_protection_rule",
  "deployment_protection_rule.requested",
  "deployment_status",
  "deployment_status.created",
  "discussion",
  "discussion.answered",
  "discussion.category_changed",
  "discussion.created",
  "discussion.deleted",
  "discussion.edited",
  "discussion.labeled",
  "discussion.locked",
  "discussion.pinned",
  "discussion.transferred",
  "discussion.unanswered",
  "discussion.unlabeled",
  "discussion.unlocked",
  "discussion.unpinned",
  "discussion_comment",
  "discussion_comment.created",
  "discussion_comment.deleted",
  "discussion_comment.edited",
  "fork",
  "github_app_authorization",
  "github_app_authorization.revoked",
  "gollum",
  "installation",
  "installation.created",
  "installation.deleted",
  "installation.new_permissions_accepted",
  "installation.suspend",
  "installation.unsuspend",
  "installation_repositories",
  "installation_repositories.added",
  "installation_repositories.removed",
  "installation_target",
  "installation_target.renamed",
  "issue_comment",
  "issue_comment.created",
  "issue_comment.deleted",
  "issue_comment.edited",
  "issues",
  "issues.assigned",
  "issues.closed",
  "issues.deleted",
  "issues.demilestoned",
  "issues.edited",
  "issues.labeled",
  "issues.locked",
  "issues.milestoned",
  "issues.opened",
  "issues.pinned",
  "issues.reopened",
  "issues.transferred",
  "issues.unassigned",
  "issues.unlabeled",
  "issues.unlocked",
  "issues.unpinned",
  "label",
  "label.created",
  "label.deleted",
  "label.edited",
  "marketplace_purchase",
  "marketplace_purchase.cancelled",
  "marketplace_purchase.changed",
  "marketplace_purchase.pending_change",
  "marketplace_purchase.pending_change_cancelled",
  "marketplace_purchase.purchased",
  "member",
  "member.added",
  "member.edited",
  "member.removed",
  "membership",
  "membership.added",
  "membership.removed",
  "merge_group",
  "merge_group.checks_requested",
  "meta",
  "meta.deleted",
  "milestone",
  "milestone.closed",
  "milestone.created",
  "milestone.deleted",
  "milestone.edited",
  "milestone.opened",
  "org_block",
  "org_block.blocked",
  "org_block.unblocked",
  "organization",
  "organization.deleted",
  "organization.member_added",
  "organization.member_invited",
  "organization.member_removed",
  "organization.renamed",
  "package",
  "package.published",
  "package.updated",
  "page_build",
  "ping",
  "project",
  "project.closed",
  "project.created",
  "project.deleted",
  "project.edited",
  "project.reopened",
  "project_card",
  "project_card.converted",
  "project_card.created",
  "project_card.deleted",
  "project_card.edited",
  "project_card.moved",
  "project_column",
  "project_column.created",
  "project_column.deleted",
  "project_column.edited",
  "project_column.moved",
  "projects_v2_item",
  "projects_v2_item.archived",
  "projects_v2_item.converted",
  "projects_v2_item.created",
  "projects_v2_item.deleted",
  "projects_v2_item.edited",
  "projects_v2_item.reordered",
  "projects_v2_item.restored",
  "public",
  "pull_request",
  "pull_request.assigned",
  "pull_request.auto_merge_disabled",
  "pull_request.auto_merge_enabled",
  "pull_request.closed",
  "pull_request.converted_to_draft",
  "pull_request.demilestoned",
  "pull_request.dequeued",
  "pull_request.edited",
  "pull_request.enqueued",
  "pull_request.labeled",
  "pull_request.locked",
  "pull_request.milestoned",
  "pull_request.opened",
  "pull_request.ready_for_review",
  "pull_request.reopened",
  "pull_request.review_request_removed",
  "pull_request.review_requested",
  "pull_request.synchronize",
  "pull_request.unassigned",
  "pull_request.unlabeled",
  "pull_request.unlocked",
  "pull_request_review",
  "pull_request_review.dismissed",
  "pull_request_review.edited",
  "pull_request_review.submitted",
  "pull_request_review_comment",
  "pull_request_review_comment.created",
  "pull_request_review_comment.deleted",
  "pull_request_review_comment.edited",
  "pull_request_review_thread",
  "pull_request_review_thread.resolved",
  "pull_request_review_thread.unresolved",
  "push",
  "registry_package",
  "registry_package.published",
  "registry_package.updated",
  "release",
  "release.created",
  "release.deleted",
  "release.edited",
  "release.prereleased",
  "release.published",
  "release.released",
  "release.unpublished",
  "repository",
  "repository.archived",
  "repository.created",
  "repository.deleted",
  "repository.edited",
  "repository.privatized",
  "repository.publicized",
  "repository.renamed",
  "repository.transferred",
  "repository.unarchived",
  "repository_dispatch",
  "repository_import",
  "repository_vulnerability_alert",
  "repository_vulnerability_alert.create",
  "repository_vulnerability_alert.dismiss",
  "repository_vulnerability_alert.reopen",
  "repository_vulnerability_alert.resolve",
  "secret_scanning_alert",
  "secret_scanning_alert.created",
  "secret_scanning_alert.reopened",
  "secret_scanning_alert.resolved",
  "secret_scanning_alert.revoked",
  "secret_scanning_alert_location",
  "secret_scanning_alert_location.created",
  "security_advisory",
  "security_advisory.performed",
  "security_advisory.published",
  "security_advisory.updated",
  "security_advisory.withdrawn",
  "sponsorship",
  "sponsorship.cancelled",
  "sponsorship.created",
  "sponsorship.edited",
  "sponsorship.pending_cancellation",
  "sponsorship.pending_tier_change",
  "sponsorship.tier_changed",
  "star",
  "star.created",
  "star.deleted",
  "status",
  "team",
  "team.added_to_repository",
  "team.created",
  "team.deleted",
  "team.edited",
  "team.removed_from_repository",
  "team_add",
  "watch",
  "watch.started",
  "workflow_dispatch",
  "workflow_job",
  "workflow_job.completed",
  "workflow_job.in_progress",
  "workflow_job.queued",
  "workflow_job.waiting",
  "workflow_run",
  "workflow_run.completed",
  "workflow_run.in_progress",
  "workflow_run.requested"
];
function Gt(e, t, r) {
  e.hooks[t] || (e.hooks[t] = []), e.hooks[t].push(r);
}
function go(e, t, r) {
  if (Array.isArray(t)) {
    t.forEach((s2) => go(e, s2, r));
    return;
  }
  if (["*", "error"].includes(t)) {
    let s2 = t === "*" ? "any" : t, o2 = `Using the "${t}" event with the regular Webhooks.on() function is not supported. Please use the Webhooks.on${s2.charAt(0).toUpperCase() + s2.slice(1)}() method instead`;
    throw new Error(o2);
  }
  nu.includes(t) || e.log.warn(
    `"${t}" is not a known webhook name (https://developer.github.com/v3/activity/events/types/)`
  ), Gt(e, t, r);
}
function iu(e, t) {
  Gt(e, "*", t);
}
function au(e, t) {
  Gt(e, "error", t);
}
function ho(e, t) {
  let r;
  try {
    r = e(t);
  } catch (s2) {
    console.log('FATAL: Error occurred in "error" event handler'), console.log(s2);
  }
  r && r.catch && r.catch((s2) => {
    console.log('FATAL: Error occurred in "error" event handler'), console.log(s2);
  });
}
function cu(e, t, r) {
  let s2 = [e.hooks[r], e.hooks["*"]];
  return t && s2.unshift(e.hooks[`${r}.${t}`]), [].concat(...s2.filter(Boolean));
}
function uu(e, t) {
  let r = e.hooks.error || [];
  if (t instanceof Error) {
    let a2 = Object.assign(new ve.default([t]), { event: t, errors: [t] });
    return r.forEach((c) => ho(c, a2)), Promise.reject(a2);
  }
  if (!t || !t.name)
    throw new ve.default(["Event name not passed"]);
  if (!t.payload)
    throw new ve.default(["Event payload not passed"]);
  let s2 = cu(e, "action" in t.payload ? t.payload.action : null, t.name);
  if (s2.length === 0)
    return Promise.resolve();
  let o2 = [], n = s2.map((a2) => {
    let c = Promise.resolve(t);
    return e.transform && (c = c.then(e.transform)), c.then((u2) => a2(u2)).catch((u2) => o2.push(Object.assign(u2, { event: t })));
  });
  return Promise.all(n).then(() => {
    if (o2.length === 0)
      return;
    let a2 = new ve.default(o2);
    throw Object.assign(a2, { event: t, errors: o2 }), r.forEach((c) => ho(c, a2)), a2;
  });
}
function mo(e, t, r) {
  if (Array.isArray(t)) {
    t.forEach((s2) => mo(e, s2, r));
    return;
  }
  if (e.hooks[t]) {
    for (let s2 = e.hooks[t].length - 1; s2 >= 0; s2--)
      if (e.hooks[t][s2] === r) {
        e.hooks[t].splice(s2, 1);
        return;
      }
  }
}
function lu(e) {
  let t = { hooks: {}, log: At(e && e.log) };
  return e && e.transform && (t.transform = e.transform), {
    on: go.bind(null, t),
    onAny: iu.bind(null, t),
    onError: au.bind(null, t),
    removeListener: mo.bind(null, t),
    receive: uu.bind(null, t)
  };
}
async function pu(e, t) {
  if (!await ze(e.secret, t.payload, t.signature).catch(() => false)) {
    let o2 = new Error(
      "[@octokit/webhooks] signature does not match event payload and secret"
    );
    return e.eventHandler.receive(Object.assign(o2, { event: t, status: 400 }));
  }
  let s2;
  try {
    s2 = JSON.parse(t.payload);
  } catch (o2) {
    throw o2.message = "Invalid JSON", o2.status = 400, new fo.default([o2]);
  }
  return e.eventHandler.receive({ id: t.id, name: t.name, payload: s2 });
}
var Eo = class {
  constructor(e) {
    if (!e || !e.secret)
      throw new Error("[@octokit/webhooks] options.secret required");
    let t = {
      eventHandler: lu(e),
      secret: e.secret,
      hooks: {},
      log: At(e.log)
    };
    this.sign = po.bind(null, e.secret), this.verify = ze.bind(null, e.secret), this.on = t.eventHandler.on, this.onAny = t.eventHandler.onAny, this.onError = t.eventHandler.onError, this.removeListener = t.eventHandler.removeListener, this.receive = t.eventHandler.receive, this.verifyAndReceive = pu.bind(null, t);
  }
};
var ko = S(qe());
var Ao = S(Le());
var Go = S(qe());
var de = S(We());
var _u = "14.0.2";
function Tu(e, t) {
  return new Eo({
    secret: t.secret,
    transform: async (r) => {
      if (!("installation" in r.payload) || typeof r.payload.installation != "object") {
        let n = new e.constructor({
          authStrategy: Ao.createUnauthenticatedAuth,
          auth: {
            reason: '"installation" key missing in webhook event payload'
          }
        });
        return { ...r, octokit: n };
      }
      let s2 = r.payload.installation.id, o2 = await e.auth({
        type: "installation",
        installationId: s2,
        factory(n) {
          return new n.octokit.constructor({
            ...n.octokitOptions,
            authStrategy: ko.createAppAuth,
            auth: { ...n, installationId: s2 }
          });
        }
      });
      return o2.hook.before("request", (n) => {
        n.headers["x-github-delivery"] = r.id;
      }), { ...r, octokit: o2 };
    }
  });
}
async function So(e, t) {
  return e.octokit.auth({
    type: "installation",
    installationId: t,
    factory(r) {
      let s2 = {
        ...r.octokitOptions,
        authStrategy: Go.createAppAuth,
        auth: { ...r, installationId: t }
      };
      return new r.octokit.constructor(s2);
    }
  });
}
function Eu(e) {
  return Object.assign(wu.bind(null, e), { iterator: Oo.bind(null, e) });
}
async function wu(e, t) {
  let r = Oo(e)[Symbol.asyncIterator](), s2 = await r.next();
  for (; !s2.done; )
    await t(s2.value), s2 = await r.next();
}
function Oo(e) {
  return {
    async *[Symbol.asyncIterator]() {
      let t = Oe.iterator(e.octokit, "GET /app/installations");
      for await (let { data: r } of t)
        for (let s2 of r)
          yield { octokit: await So(e, s2.id), installation: s2 };
    }
  };
}
function yu(e) {
  return Object.assign(bu.bind(null, e), { iterator: Po.bind(null, e) });
}
async function bu(e, t, r) {
  let s2 = Po(e, r ? t : void 0)[Symbol.asyncIterator](), o2 = await s2.next();
  for (; !o2.done; )
    r ? await r(o2.value) : await t(o2.value), o2 = await s2.next();
}
function vu(e, t) {
  return {
    async *[Symbol.asyncIterator]() {
      yield { octokit: await e.getInstallationOctokit(t) };
    }
  };
}
function Po(e, t) {
  return {
    async *[Symbol.asyncIterator]() {
      let r = t ? vu(e, t.installationId) : e.eachInstallation.iterator();
      for await (let { octokit: s2 } of r) {
        let o2 = Oe.iterator(s2, "GET /installation/repositories");
        for await (let { data: n } of o2)
          for (let a2 of n)
            yield { octokit: s2, repository: a2 };
      }
    }
  };
}
var _a2;
var Ro = (_a2 = class {
  static defaults(e) {
    return class extends this {
      constructor(...r) {
        super({ ...e, ...r[0] });
      }
    };
  }
  constructor(e) {
    let t = e.Octokit || yo.Octokit, r = Object.assign(
      { appId: e.appId, privateKey: e.privateKey },
      e.oauth ? { clientId: e.oauth.clientId, clientSecret: e.oauth.clientSecret } : {}
    );
    this.octokit = new t({
      authStrategy: bo.createAppAuth,
      auth: r,
      log: e.log
    }), this.log = Object.assign(
      {
        debug: () => {
        },
        info: () => {
        },
        warn: console.warn.bind(console),
        error: console.error.bind(console)
      },
      e.log
    ), e.webhooks ? this.webhooks = Tu(this.octokit, e.webhooks) : Object.defineProperty(this, "webhooks", {
      get() {
        throw new Error("[@octokit/app] webhooks option not set");
      }
    }), e.oauth ? this.oauth = new vo.OAuthApp({
      ...e.oauth,
      clientType: "github-app",
      Octokit: t
    }) : Object.defineProperty(this, "oauth", {
      get() {
        throw new Error(
          "[@octokit/app] oauth.clientId / oauth.clientSecret options are not set"
        );
      }
    }), this.getInstallationOctokit = So.bind(null, this), this.eachInstallation = Eu(this), this.eachRepository = yu(this);
  }
}, _a2.VERSION = _u, _a2);
var Co = S(We());
var Gu = "3.1.2";
var Uo = Fo.Octokit.plugin(pt, ut, Br, mt, Pe).defaults({
  userAgent: `octokit.js/${Gu}`,
  throttle: { onRateLimit: Su, onSecondaryRateLimit: Ou }
});
function Su(e, t, r) {
  if (r.log.warn(`Request quota exhausted for request ${t.method} ${t.url}`), t.request.retryCount === 0)
    return r.log.info(`Retrying after ${e} seconds!`), true;
}
function Ou(e, t, r) {
  if (r.log.warn(`SecondaryRateLimit detected for request ${t.method} ${t.url}`), t.request.retryCount === 0)
    return r.log.info(`Retrying after ${e} seconds!`), true;
}
var op = Ro.defaults({ Octokit: Uo });
var np = Co.OAuthApp.defaults({ Octokit: Uo });

// src/nodes/GithubGraphQLNode.ts
function githubGraphQLNode(rivet) {
  const GithubGraphQLNodeImpl = {
    // This should create a new instance of your node type from scratch.
    create() {
      const node = {
        // Use rivet.newId to generate new IDs for your nodes.
        id: rivet.newId(),
        // This is the default data that your node will store
        data: {
          paginate: true,
          query: `
          query paginate($cursor: String) {
            repository(owner: "some-user", name: "some-repo") {
                issues(first: 100, after: $cursor) {
                    nodes {
                        title
                    }
                    pageInfo {
                        hasNextPage
                        endCursor
                    }
                }
            }
          }
          `
        },
        // This is the default title of your node.
        title: "GitHub GraphQL",
        // This must match the type of your node.
        type: "githubPlugin",
        // X and Y should be set to 0. Width should be set to a reasonable number so there is no overflow.
        visualData: {
          x: 0,
          y: 0,
          width: 200
        }
      };
      return node;
    },
    // This function should return all input ports for your node, given its data, connections, all other nodes, and the project. The
    // connection, nodes, and project are for advanced use-cases and can usually be ignored.
    getInputDefinitions(data, _connections, _nodes, _project) {
      const inputs = [];
      if (data.useQueryInput) {
        inputs.push({
          id: "query",
          dataType: "string",
          title: "GraphQL Query"
        });
      }
      return inputs;
    },
    // This function should return all output ports for your node, given its data, connections, all other nodes, and the project. The
    // connection, nodes, and project are for advanced use-cases and can usually be ignored.
    getOutputDefinitions(_data, _connections, _nodes, _project) {
      return [
        {
          id: "response",
          dataType: "object",
          title: "GraphQL Response"
        }
      ];
    },
    // This returns UI information for your node, such as how it appears in the context menu.
    getUIData() {
      return {
        contextMenuTitle: "GitHub GraphQL",
        group: "GitHub",
        infoBoxBody: "Makes a GraphQL request to GitHub.",
        infoBoxTitle: "GitHub GraphQL"
      };
    },
    // This function defines all editors that appear when you edit your node.
    getEditors(_data) {
      return [
        {
          type: "string",
          dataKey: "query",
          useInputToggleDataKey: "useQueryInput",
          label: "GraphQL Query"
        },
        {
          type: "toggle",
          label: "Enable Pagination",
          dataKey: "paginate"
        }
      ];
    },
    // This function returns the body of the node when it is rendered on the graph. You should show
    // what the current data of the node is in some way that is useful at a glance.
    getBody(data) {
      return rivet.dedent`
        Query: ${data.useQueryInput ? "(Using Input)" : data.query}
      `;
    },
    // This is the main processing function for your node. It can do whatever you like, but it must return
    // a valid Outputs object, which is a map of port IDs to DataValue objects. The return value of this function
    // must also correspond to the output definitions you defined in the getOutputDefinitions function.
    async process(data, inputData, _context) {
      const query = rivet.getInputOrData(data, inputData, "query", "string");
      const paginate = rivet.getInputOrData(
        data,
        inputData,
        "paginate",
        "boolean"
      );
      const token = _context.getPluginConfig("personalAccessToken");
      if (!token) {
        throw new Error(
          "No token. Please set a Personal Access Token in the plugin settings."
        );
      }
      const octokit = new Uo({
        userAgent: "rivet-plugin-github",
        auth: token
      });
      const graphqlFunction = paginate ? octokit.graphql.paginate : octokit.graphql;
      const result = await graphqlFunction(query);
      return {
        ["response"]: {
          type: "object",
          value: result
        }
      };
    }
  };
  const githubPluginNode = rivet.pluginNodeDefinition(
    GithubGraphQLNodeImpl,
    "GitHub GraphQL"
  );
  return githubPluginNode;
}

// src/nodes/GithubRestNode.ts
function githubRestNode(rivet) {
  const GithubRestNodeImpl = {
    // This should create a new instance of your node type from scratch.
    create() {
      const node = {
        // Use rivet.newId to generate new IDs for your nodes.
        id: rivet.newId(),
        // This is the default data that your node will store
        data: {
          paginate: false,
          route: `GET /user`,
          params: "{}"
        },
        // This is the default title of your node.
        title: "GitHub REST",
        // This must match the type of your node.
        type: "githubPlugin",
        // X and Y should be set to 0. Width should be set to a reasonable number so there is no overflow.
        visualData: {
          x: 0,
          y: 0,
          width: 200
        }
      };
      return node;
    },
    // This function should return all input ports for your node, given its data, connections, all other nodes, and the project. The
    // connection, nodes, and project are for advanced use-cases and can usually be ignored.
    getInputDefinitions(data, _connections, _nodes, _project) {
      const inputs = [];
      if (data.useRouteInput) {
        inputs.push({
          id: "query",
          dataType: "string",
          title: "REST Route"
        });
      }
      if (data.useParamsInput) {
        inputs.push({
          id: "param",
          dataType: "string",
          title: "REST Params"
        });
      }
      return inputs;
    },
    // This function should return all output ports for your node, given its data, connections, all other nodes, and the project. The
    // connection, nodes, and project are for advanced use-cases and can usually be ignored.
    getOutputDefinitions(_data, _connections, _nodes, _project) {
      return [
        {
          id: "response",
          dataType: "object",
          title: "REST Response"
        }
      ];
    },
    // This returns UI information for your node, such as how it appears in the context menu.
    getUIData() {
      return {
        contextMenuTitle: "GitHub REST",
        group: "GitHub",
        infoBoxBody: "Makes a REST API request to GitHub.",
        infoBoxTitle: "GitHub REST"
      };
    },
    // This function defines all editors that appear when you edit your node.
    getEditors(_data) {
      return [
        {
          type: "string",
          dataKey: "route",
          useInputToggleDataKey: "useRouteInput",
          label: "REST Route"
        },
        {
          type: "string",
          dataKey: "params",
          useInputToggleDataKey: "useParamsInput",
          label: "REST Params"
        },
        {
          type: "toggle",
          label: "Enable Pagination",
          dataKey: "paginate"
        }
      ];
    },
    // This function returns the body of the node when it is rendered on the graph. You should show
    // what the current data of the node is in some way that is useful at a glance.
    getBody(data) {
      return rivet.dedent`
        Route: ${data.useRouteInput ? "(Using Input)" : data.route}
        Params: ${data.useParamsInput ? "(Using Input)" : data.params}
      `;
    },
    // This is the main processing function for your node. It can do whatever you like, but it must return
    // a valid Outputs object, which is a map of port IDs to DataValue objects. The return value of this function
    // must also correspond to the output definitions you defined in the getOutputDefinitions function.
    async process(data, inputData, _context) {
      const route = rivet.getInputOrData(data, inputData, "route", "string");
      const paramsString = rivet.getInputOrData(
        data,
        inputData,
        "params",
        "string"
      );
      const params = JSON.parse(paramsString);
      const paginate = rivet.getInputOrData(
        data,
        inputData,
        "paginate",
        "boolean"
      );
      const token = _context.getPluginConfig("personalAccessToken");
      if (!token) {
        throw new Error(
          "No token. Please set a Personal Access Token in the plugin settings."
        );
      }
      const octokit = new Uo({
        userAgent: "rivet-plugin-github",
        auth: token
      });
      const requestFunction = paginate ? octokit.paginate : octokit.request;
      const requestParams = { per_page: 100, ...params };
      const result = await requestFunction(route, requestParams);
      return {
        ["response"]: {
          type: "object",
          value: result
        }
      };
    }
  };
  const githubPluginNode = rivet.pluginNodeDefinition(
    GithubRestNodeImpl,
    "GitHub REST"
  );
  return githubPluginNode;
}

// src/index.ts
var plugin = (rivet) => {
  const graphQLNode = githubGraphQLNode(rivet);
  const RestNode = githubRestNode(rivet);
  const githubPlugin = {
    // The ID of your plugin should be unique across all plugins.
    id: "github-plugin",
    // The name of the plugin is what is displayed in the Rivet UI.
    name: "GitHub Plugin",
    // Define all configuration settings in the configSpec object.
    configSpec: {
      personalAccessToken: {
        type: "string",
        label: "Personal Access Token (PAT)",
        description: "A Github Personal Access Token (PAT) with the needed scope.",
        helperText: "A Github Personal Access Token (PAT) with the needed scope."
      }
    },
    // Define any additional context menu groups your plugin adds here.
    contextMenuGroups: [
      {
        id: "github",
        label: "GitHub"
      }
    ],
    // Register any additional nodes your plugin adds here. This is passed a `register`
    // function, which you can use to register your nodes.
    register: (register) => {
      register(graphQLNode);
      register(RestNode);
    }
  };
  return githubPlugin;
};
var src_default = plugin;
export {
  src_default as default
};
/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/
