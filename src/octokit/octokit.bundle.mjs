/* esm.sh - esbuild bundle(octokit@3.1.2) es2022 production */
(() => {
  var a = typeof Reflect == "object" ? Reflect : null,
    g =
      a && typeof a.apply == "function"
        ? a.apply
        : function (e, t, r) {
            return Function.prototype.apply.call(e, t, r);
          },
    p;
  a && typeof a.ownKeys == "function"
    ? (p = a.ownKeys)
    : Object.getOwnPropertySymbols
    ? (p = function (e) {
        return Object.getOwnPropertyNames(e).concat(
          Object.getOwnPropertySymbols(e)
        );
      })
    : (p = function (e) {
        return Object.getOwnPropertyNames(e);
      });
  function D(n) {
    console && console.warn && console.warn(n);
  }
  var w =
    Number.isNaN ||
    function (e) {
      return e !== e;
    };
  function s() {
    L.call(this);
  }
  s.EventEmitter = s;
  s.prototype._events = void 0;
  s.prototype._eventsCount = 0;
  s.prototype._maxListeners = void 0;
  var y = 10;
  function d(n) {
    if (typeof n != "function")
      throw new TypeError(
        'The "listener" argument must be of type Function. Received type ' +
          typeof n
      );
  }
  Object.defineProperty(s, "defaultMaxListeners", {
    enumerable: !0,
    get: function () {
      return y;
    },
    set: function (n) {
      if (typeof n != "number" || n < 0 || w(n))
        throw new RangeError(
          'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
            n +
            "."
        );
      y = n;
    },
  });
  function L() {
    (this._events === void 0 ||
      this._events === Object.getPrototypeOf(this)._events) &&
      ((this._events = Object.create(null)), (this._eventsCount = 0)),
      (this._maxListeners = this._maxListeners || void 0);
  }
  s.init = L;
  s.prototype.setMaxListeners = function (e) {
    if (typeof e != "number" || e < 0 || w(e))
      throw new RangeError(
        'The value of "n" is out of range. It must be a non-negative number. Received ' +
          e +
          "."
      );
    return (this._maxListeners = e), this;
  };
  function b(n) {
    return n._maxListeners === void 0 ? s.defaultMaxListeners : n._maxListeners;
  }
  s.prototype.getMaxListeners = function () {
    return b(this);
  };
  s.prototype.emit = function (e) {
    for (var t = [], r = 1; r < arguments.length; r++) t.push(arguments[r]);
    var i = e === "error",
      u = this._events;
    if (u !== void 0) i = i && u.error === void 0;
    else if (!i) return !1;
    if (i) {
      var o;
      if ((t.length > 0 && (o = t[0]), o instanceof Error)) throw o;
      var c = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
      throw ((c.context = o), c);
    }
    var l = u[e];
    if (l === void 0) return !1;
    if (typeof l == "function") g(l, this, t);
    else
      for (var m = l.length, M = x(l, m), r = 0; r < m; ++r) g(M[r], this, t);
    return !0;
  };
  function _(n, e, t, r) {
    var i, u, o;
    if (
      (d(t),
      (u = n._events),
      u === void 0
        ? ((u = n._events = Object.create(null)), (n._eventsCount = 0))
        : (u.newListener !== void 0 &&
            (n.emit("newListener", e, t.listener ? t.listener : t),
            (u = n._events)),
          (o = u[e])),
      o === void 0)
    )
      (o = u[e] = t), ++n._eventsCount;
    else if (
      (typeof o == "function"
        ? (o = u[e] = r ? [t, o] : [o, t])
        : r
        ? o.unshift(t)
        : o.push(t),
      (i = b(n)),
      i > 0 && o.length > i && !o.warned)
    ) {
      o.warned = !0;
      var c = new Error(
        "Possible EventEmitter memory leak detected. " +
          o.length +
          " " +
          String(e) +
          " listeners added. Use emitter.setMaxListeners() to increase limit"
      );
      (c.name = "MaxListenersExceededWarning"),
        (c.emitter = n),
        (c.type = e),
        (c.count = o.length),
        D(c);
    }
    return n;
  }
  s.prototype.addListener = function (e, t) {
    return _(this, e, t, !1);
  };
  s.prototype.on = s.prototype.addListener;
  s.prototype.prependListener = function (e, t) {
    return _(this, e, t, !0);
  };
  function R() {
    if (!this.fired)
      return (
        this.target.removeListener(this.type, this.wrapFn),
        (this.fired = !0),
        arguments.length === 0
          ? this.listener.call(this.target)
          : this.listener.apply(this.target, arguments)
      );
  }
  function E(n, e, t) {
    var r = { fired: !1, wrapFn: void 0, target: n, type: e, listener: t },
      i = R.bind(r);
    return (i.listener = t), (r.wrapFn = i), i;
  }
  s.prototype.once = function (e, t) {
    return d(t), this.on(e, E(this, e, t)), this;
  };
  s.prototype.prependOnceListener = function (e, t) {
    return d(t), this.prependListener(e, E(this, e, t)), this;
  };
  s.prototype.removeListener = function (e, t) {
    var r, i, u, o, c;
    if ((d(t), (i = this._events), i === void 0)) return this;
    if (((r = i[e]), r === void 0)) return this;
    if (r === t || r.listener === t)
      --this._eventsCount === 0
        ? (this._events = Object.create(null))
        : (delete i[e],
          i.removeListener && this.emit("removeListener", e, r.listener || t));
    else if (typeof r != "function") {
      for (u = -1, o = r.length - 1; o >= 0; o--)
        if (r[o] === t || r[o].listener === t) {
          (c = r[o].listener), (u = o);
          break;
        }
      if (u < 0) return this;
      u === 0 ? r.shift() : N(r, u),
        r.length === 1 && (i[e] = r[0]),
        i.removeListener !== void 0 && this.emit("removeListener", e, c || t);
    }
    return this;
  };
  s.prototype.off = s.prototype.removeListener;
  s.prototype.removeAllListeners = function (e) {
    var t, r, i;
    if (((r = this._events), r === void 0)) return this;
    if (r.removeListener === void 0)
      return (
        arguments.length === 0
          ? ((this._events = Object.create(null)), (this._eventsCount = 0))
          : r[e] !== void 0 &&
            (--this._eventsCount === 0
              ? (this._events = Object.create(null))
              : delete r[e]),
        this
      );
    if (arguments.length === 0) {
      var u = Object.keys(r),
        o;
      for (i = 0; i < u.length; ++i)
        (o = u[i]), o !== "removeListener" && this.removeAllListeners(o);
      return (
        this.removeAllListeners("removeListener"),
        (this._events = Object.create(null)),
        (this._eventsCount = 0),
        this
      );
    }
    if (((t = r[e]), typeof t == "function")) this.removeListener(e, t);
    else if (t !== void 0)
      for (i = t.length - 1; i >= 0; i--) this.removeListener(e, t[i]);
    return this;
  };
  function O(n, e, t) {
    var r = n._events;
    if (r === void 0) return [];
    var i = r[e];
    return i === void 0
      ? []
      : typeof i == "function"
      ? t
        ? [i.listener || i]
        : [i]
      : t
      ? P(i)
      : x(i, i.length);
  }
  s.prototype.listeners = function (e) {
    return O(this, e, !0);
  };
  s.prototype.rawListeners = function (e) {
    return O(this, e, !1);
  };
  function C(n, e) {
    return typeof n.listenerCount == "function"
      ? n.listenerCount(e)
      : s.prototype.listenerCount.call(n, e);
  }
  s.listenerCount = C;
  s.prototype.listenerCount = function (n) {
    var e = this._events;
    if (e !== void 0) {
      var t = e[n];
      if (typeof t == "function") return 1;
      if (t !== void 0) return t.length;
    }
    return 0;
  };
  s.prototype.eventNames = function () {
    return this._eventsCount > 0 ? p(this._events) : [];
  };
  function x(n, e) {
    for (var t = new Array(e), r = 0; r < e; ++r) t[r] = n[r];
    return t;
  }
  function N(n, e) {
    for (; e + 1 < n.length; e++) n[e] = n[e + 1];
    n.pop();
  }
  function P(n) {
    for (var e = new Array(n.length), t = 0; t < e.length; ++t)
      e[t] = n[t].listener || n[t];
    return e;
  }
  function v(n) {
    let e = performance.now(),
      t = Math.floor(e / 1e3),
      r = Math.floor(e * 1e6 - t * 1e9);
    if (!n) return [t, r];
    let [i, u] = n;
    return [t - i, r - u];
  }
  v.bigint = function () {
    let [n, e] = v();
    return BigInt(n) * 1000000000n + BigInt(e);
  };
  var h = class extends s {
      title = "browser";
      browser = !0;
      env = {};
      argv = [];
      pid = 0;
      arch = "unknown";
      platform = "browser";
      version = "";
      versions = {};
      emitWarning = () => {
        throw new Error("process.emitWarning is not supported");
      };
      binding = () => {
        throw new Error("process.binding is not supported");
      };
      cwd = () => {
        throw new Error("process.cwd is not supported");
      };
      chdir = (e) => {
        throw new Error("process.chdir is not supported");
      };
      umask = () => 18;
      nextTick = (e, ...t) => queueMicrotask(() => e(...t));
      hrtime = v;
      constructor() {
        super();
      }
    },
    f = new h();
  if (typeof Deno < "u") {
    (f.name = "deno"),
      (f.browser = !1),
      (f.pid = Deno.pid),
      (f.cwd = () => Deno.cwd()),
      (f.chdir = (e) => Deno.chdir(e)),
      (f.arch = Deno.build.arch),
      (f.platform = Deno.build.os),
      (f.version = "v18.12.1"),
      (f.versions = {
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
        ...Deno.version,
      }),
      (f.env = new Proxy(
        {},
        {
          get(e, t) {
            return Deno.env.get(String(t));
          },
          ownKeys: () => Reflect.ownKeys(Deno.env.toObject()),
          getOwnPropertyDescriptor: (e, t) => {
            let r = Deno.env.toObject();
            if (t in Deno.env.toObject()) {
              let i = { enumerable: !0, configurable: !0 };
              return typeof t == "string" && (i.value = r[t]), i;
            }
          },
          set(e, t, r) {
            return Deno.env.set(String(t), String(r)), r;
          },
        }
      ));
    let n = ["", "", ...Deno.args];
    Object.defineProperty(n, "0", { get: Deno.execPath }),
      Object.defineProperty(n, "1", {
        get: () =>
          Deno.mainModule.startsWith("file:")
            ? new URL(Deno.mainModule).pathname
            : join(Deno.cwd(), "$deno$node.js"),
      }),
      (f.argv = n);
  } else {
    let n = "/";
    (f.cwd = () => n), (f.chdir = (e) => (n = e));
  }
  var j = f;
  globalThis.__Process$ = j;
})();
(() => {
  var Lt = Object.create,
    q = Object.defineProperty,
    _t = Object.getOwnPropertyDescriptor,
    xt = Object.getOwnPropertyNames,
    Ct = Object.getPrototypeOf,
    Mt = Object.prototype.hasOwnProperty,
    W = (p, a) => () => (a || p((a = { exports: {} }).exports, a), a.exports),
    Pt = (p, a) => {
      for (var s in a) q(p, s, { get: a[s], enumerable: !0 });
    },
    V = (p, a, s, S) => {
      if ((a && typeof a == "object") || typeof a == "function")
        for (let b of xt(a))
          !Mt.call(p, b) &&
            b !== s &&
            q(p, b, {
              get: () => a[b],
              enumerable: !(S = _t(a, b)) || S.enumerable,
            });
      return p;
    },
    $t = (p, a, s) => (V(p, a, "default"), s && V(s, a, "default")),
    st = (p, a, s) => (
      (s = p != null ? Lt(Ct(p)) : {}),
      V(
        a || !p || !p.__esModule
          ? q(s, "default", { value: p, enumerable: !0 })
          : s,
        p
      )
    ),
    Nt = W((p) => {
      "use strict";
      (p.byteLength = T), (p.toByteArray = $), (p.fromByteArray = P);
      var a = [],
        s = [],
        S = typeof Uint8Array < "u" ? Uint8Array : Array,
        b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      for (B = 0, c = b.length; B < c; ++B)
        (a[B] = b[B]), (s[b.charCodeAt(B)] = B);
      var B, c;
      (s[45] = 62), (s[95] = 63);
      function f(h) {
        var l = h.length;
        if (l % 4 > 0)
          throw new Error("Invalid string. Length must be a multiple of 4");
        var w = h.indexOf("=");
        w === -1 && (w = l);
        var A = w === l ? 0 : 4 - (w % 4);
        return [w, A];
      }
      function T(h) {
        var l = f(h),
          w = l[0],
          A = l[1];
        return ((w + A) * 3) / 4 - A;
      }
      function L(h, l, w) {
        return ((l + w) * 3) / 4 - w;
      }
      function $(h) {
        var l,
          w = f(h),
          A = w[0],
          _ = w[1],
          E = new S(L(h, A, _)),
          x = 0,
          M = _ > 0 ? A - 4 : A,
          O;
        for (O = 0; O < M; O += 4)
          (l =
            (s[h.charCodeAt(O)] << 18) |
            (s[h.charCodeAt(O + 1)] << 12) |
            (s[h.charCodeAt(O + 2)] << 6) |
            s[h.charCodeAt(O + 3)]),
            (E[x++] = (l >> 16) & 255),
            (E[x++] = (l >> 8) & 255),
            (E[x++] = l & 255);
        return (
          _ === 2 &&
            ((l = (s[h.charCodeAt(O)] << 2) | (s[h.charCodeAt(O + 1)] >> 4)),
            (E[x++] = l & 255)),
          _ === 1 &&
            ((l =
              (s[h.charCodeAt(O)] << 10) |
              (s[h.charCodeAt(O + 1)] << 4) |
              (s[h.charCodeAt(O + 2)] >> 2)),
            (E[x++] = (l >> 8) & 255),
            (E[x++] = l & 255)),
          E
        );
      }
      function m(h) {
        return (
          a[(h >> 18) & 63] + a[(h >> 12) & 63] + a[(h >> 6) & 63] + a[h & 63]
        );
      }
      function U(h, l, w) {
        for (var A, _ = [], E = l; E < w; E += 3)
          (A =
            ((h[E] << 16) & 16711680) +
            ((h[E + 1] << 8) & 65280) +
            (h[E + 2] & 255)),
            _.push(m(A));
        return _.join("");
      }
      function P(h) {
        for (
          var l, w = h.length, A = w % 3, _ = [], E = 16383, x = 0, M = w - A;
          x < M;
          x += E
        )
          _.push(U(h, x, x + E > M ? M : x + E));
        return (
          A === 1
            ? ((l = h[w - 1]), _.push(a[l >> 2] + a[(l << 4) & 63] + "=="))
            : A === 2 &&
              ((l = (h[w - 2] << 8) + h[w - 1]),
              _.push(a[l >> 10] + a[(l >> 4) & 63] + a[(l << 2) & 63] + "=")),
          _.join("")
        );
      }
    }),
    jt = W((p) => {
      (p.read = function (a, s, S, b, B) {
        var c,
          f,
          T = B * 8 - b - 1,
          L = (1 << T) - 1,
          $ = L >> 1,
          m = -7,
          U = S ? B - 1 : 0,
          P = S ? -1 : 1,
          h = a[s + U];
        for (
          U += P, c = h & ((1 << -m) - 1), h >>= -m, m += T;
          m > 0;
          c = c * 256 + a[s + U], U += P, m -= 8
        );
        for (
          f = c & ((1 << -m) - 1), c >>= -m, m += b;
          m > 0;
          f = f * 256 + a[s + U], U += P, m -= 8
        );
        if (c === 0) c = 1 - $;
        else {
          if (c === L) return f ? NaN : (h ? -1 : 1) * (1 / 0);
          (f = f + Math.pow(2, b)), (c = c - $);
        }
        return (h ? -1 : 1) * f * Math.pow(2, c - b);
      }),
        (p.write = function (a, s, S, b, B, c) {
          var f,
            T,
            L,
            $ = c * 8 - B - 1,
            m = (1 << $) - 1,
            U = m >> 1,
            P = B === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            h = b ? 0 : c - 1,
            l = b ? 1 : -1,
            w = s < 0 || (s === 0 && 1 / s < 0) ? 1 : 0;
          for (
            s = Math.abs(s),
              isNaN(s) || s === 1 / 0
                ? ((T = isNaN(s) ? 1 : 0), (f = m))
                : ((f = Math.floor(Math.log(s) / Math.LN2)),
                  s * (L = Math.pow(2, -f)) < 1 && (f--, (L *= 2)),
                  f + U >= 1 ? (s += P / L) : (s += P * Math.pow(2, 1 - U)),
                  s * L >= 2 && (f++, (L /= 2)),
                  f + U >= m
                    ? ((T = 0), (f = m))
                    : f + U >= 1
                    ? ((T = (s * L - 1) * Math.pow(2, B)), (f = f + U))
                    : ((T = s * Math.pow(2, U - 1) * Math.pow(2, B)), (f = 0)));
            B >= 8;
            a[S + h] = T & 255, h += l, T /= 256, B -= 8
          );
          for (
            f = (f << B) | T, $ += B;
            $ > 0;
            a[S + h] = f & 255, h += l, f /= 256, $ -= 8
          );
          a[S + h - l] |= w * 128;
        });
    }),
    ht = W((p) => {
      "use strict";
      var a = Nt(),
        s = jt(),
        S =
          typeof Symbol == "function" && typeof Symbol.for == "function"
            ? Symbol.for("nodejs.util.inspect.custom")
            : null;
      (p.Buffer = f), (p.SlowBuffer = _), (p.INSPECT_MAX_BYTES = 50);
      var b = 2147483647;
      (p.kMaxLength = b),
        (f.TYPED_ARRAY_SUPPORT = B()),
        !f.TYPED_ARRAY_SUPPORT &&
          typeof console < "u" &&
          typeof console.error == "function" &&
          console.error(
            "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
          );
      function B() {
        try {
          let t = new Uint8Array(1),
            e = {
              foo: function () {
                return 42;
              },
            };
          return (
            Object.setPrototypeOf(e, Uint8Array.prototype),
            Object.setPrototypeOf(t, e),
            t.foo() === 42
          );
        } catch {
          return !1;
        }
      }
      Object.defineProperty(f.prototype, "parent", {
        enumerable: !0,
        get: function () {
          if (f.isBuffer(this)) return this.buffer;
        },
      }),
        Object.defineProperty(f.prototype, "offset", {
          enumerable: !0,
          get: function () {
            if (f.isBuffer(this)) return this.byteOffset;
          },
        });
      function c(t) {
        if (t > b)
          throw new RangeError(
            'The value "' + t + '" is invalid for option "size"'
          );
        let e = new Uint8Array(t);
        return Object.setPrototypeOf(e, f.prototype), e;
      }
      function f(t, e, n) {
        if (typeof t == "number") {
          if (typeof e == "string")
            throw new TypeError(
              'The "string" argument must be of type string. Received type number'
            );
          return m(t);
        }
        return T(t, e, n);
      }
      f.poolSize = 8192;
      function T(t, e, n) {
        if (typeof t == "string") return U(t, e);
        if (ArrayBuffer.isView(t)) return h(t);
        if (t == null)
          throw new TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
              typeof t
          );
        if (
          N(t, ArrayBuffer) ||
          (t && N(t.buffer, ArrayBuffer)) ||
          (typeof SharedArrayBuffer < "u" &&
            (N(t, SharedArrayBuffer) || (t && N(t.buffer, SharedArrayBuffer))))
        )
          return l(t, e, n);
        if (typeof t == "number")
          throw new TypeError(
            'The "value" argument must not be of type number. Received type number'
          );
        let r = t.valueOf && t.valueOf();
        if (r != null && r !== t) return f.from(r, e, n);
        let o = w(t);
        if (o) return o;
        if (
          typeof Symbol < "u" &&
          Symbol.toPrimitive != null &&
          typeof t[Symbol.toPrimitive] == "function"
        )
          return f.from(t[Symbol.toPrimitive]("string"), e, n);
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
            typeof t
        );
      }
      (f.from = function (t, e, n) {
        return T(t, e, n);
      }),
        Object.setPrototypeOf(f.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(f, Uint8Array);
      function L(t) {
        if (typeof t != "number")
          throw new TypeError('"size" argument must be of type number');
        if (t < 0)
          throw new RangeError(
            'The value "' + t + '" is invalid for option "size"'
          );
      }
      function $(t, e, n) {
        return (
          L(t),
          t <= 0
            ? c(t)
            : e !== void 0
            ? typeof n == "string"
              ? c(t).fill(e, n)
              : c(t).fill(e)
            : c(t)
        );
      }
      f.alloc = function (t, e, n) {
        return $(t, e, n);
      };
      function m(t) {
        return L(t), c(t < 0 ? 0 : A(t) | 0);
      }
      (f.allocUnsafe = function (t) {
        return m(t);
      }),
        (f.allocUnsafeSlow = function (t) {
          return m(t);
        });
      function U(t, e) {
        if (
          ((typeof e != "string" || e === "") && (e = "utf8"), !f.isEncoding(e))
        )
          throw new TypeError("Unknown encoding: " + e);
        let n = E(t, e) | 0,
          r = c(n),
          o = r.write(t, e);
        return o !== n && (r = r.slice(0, o)), r;
      }
      function P(t) {
        let e = t.length < 0 ? 0 : A(t.length) | 0,
          n = c(e);
        for (let r = 0; r < e; r += 1) n[r] = t[r] & 255;
        return n;
      }
      function h(t) {
        if (N(t, Uint8Array)) {
          let e = new Uint8Array(t);
          return l(e.buffer, e.byteOffset, e.byteLength);
        }
        return P(t);
      }
      function l(t, e, n) {
        if (e < 0 || t.byteLength < e)
          throw new RangeError('"offset" is outside of buffer bounds');
        if (t.byteLength < e + (n || 0))
          throw new RangeError('"length" is outside of buffer bounds');
        let r;
        return (
          e === void 0 && n === void 0
            ? (r = new Uint8Array(t))
            : n === void 0
            ? (r = new Uint8Array(t, e))
            : (r = new Uint8Array(t, e, n)),
          Object.setPrototypeOf(r, f.prototype),
          r
        );
      }
      function w(t) {
        if (f.isBuffer(t)) {
          let e = A(t.length) | 0,
            n = c(e);
          return n.length === 0 || t.copy(n, 0, 0, e), n;
        }
        if (t.length !== void 0)
          return typeof t.length != "number" || X(t.length) ? c(0) : P(t);
        if (t.type === "Buffer" && Array.isArray(t.data)) return P(t.data);
      }
      function A(t) {
        if (t >= b)
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              b.toString(16) +
              " bytes"
          );
        return t | 0;
      }
      function _(t) {
        return +t != t && (t = 0), f.alloc(+t);
      }
      (f.isBuffer = function (t) {
        return t != null && t._isBuffer === !0 && t !== f.prototype;
      }),
        (f.compare = function (t, e) {
          if (
            (N(t, Uint8Array) && (t = f.from(t, t.offset, t.byteLength)),
            N(e, Uint8Array) && (e = f.from(e, e.offset, e.byteLength)),
            !f.isBuffer(t) || !f.isBuffer(e))
          )
            throw new TypeError(
              'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
            );
          if (t === e) return 0;
          let n = t.length,
            r = e.length;
          for (let o = 0, i = Math.min(n, r); o < i; ++o)
            if (t[o] !== e[o]) {
              (n = t[o]), (r = e[o]);
              break;
            }
          return n < r ? -1 : r < n ? 1 : 0;
        }),
        (f.isEncoding = function (t) {
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
              return !0;
            default:
              return !1;
          }
        }),
        (f.concat = function (t, e) {
          if (!Array.isArray(t))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (t.length === 0) return f.alloc(0);
          let n;
          if (e === void 0)
            for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
          let r = f.allocUnsafe(e),
            o = 0;
          for (n = 0; n < t.length; ++n) {
            let i = t[n];
            if (N(i, Uint8Array))
              o + i.length > r.length
                ? (f.isBuffer(i) || (i = f.from(i)), i.copy(r, o))
                : Uint8Array.prototype.set.call(r, i, o);
            else if (f.isBuffer(i)) i.copy(r, o);
            else
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            o += i.length;
          }
          return r;
        });
      function E(t, e) {
        if (f.isBuffer(t)) return t.length;
        if (ArrayBuffer.isView(t) || N(t, ArrayBuffer)) return t.byteLength;
        if (typeof t != "string")
          throw new TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              typeof t
          );
        let n = t.length,
          r = arguments.length > 2 && arguments[2] === !0;
        if (!r && n === 0) return 0;
        let o = !1;
        for (;;)
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
              if (o) return r ? -1 : G(t).length;
              (e = ("" + e).toLowerCase()), (o = !0);
          }
      }
      f.byteLength = E;
      function x(t, e, n) {
        let r = !1;
        if (
          ((e === void 0 || e < 0) && (e = 0),
          e > this.length ||
            ((n === void 0 || n > this.length) && (n = this.length), n <= 0) ||
            ((n >>>= 0), (e >>>= 0), n <= e))
        )
          return "";
        for (t || (t = "utf8"); ; )
          switch (t) {
            case "hex":
              return Et(this, e, n);
            case "utf8":
            case "utf-8":
              return H(this, e, n);
            case "ascii":
              return Bt(this, e, n);
            case "latin1":
            case "binary":
              return mt(this, e, n);
            case "base64":
              return dt(this, e, n);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return vt(this, e, n);
            default:
              if (r) throw new TypeError("Unknown encoding: " + t);
              (t = (t + "").toLowerCase()), (r = !0);
          }
      }
      f.prototype._isBuffer = !0;
      function M(t, e, n) {
        let r = t[e];
        (t[e] = t[n]), (t[n] = r);
      }
      (f.prototype.swap16 = function () {
        let t = this.length;
        if (t % 2 !== 0)
          throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (let e = 0; e < t; e += 2) M(this, e, e + 1);
        return this;
      }),
        (f.prototype.swap32 = function () {
          let t = this.length;
          if (t % 4 !== 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (let e = 0; e < t; e += 4)
            M(this, e, e + 3), M(this, e + 1, e + 2);
          return this;
        }),
        (f.prototype.swap64 = function () {
          let t = this.length;
          if (t % 8 !== 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (let e = 0; e < t; e += 8)
            M(this, e, e + 7),
              M(this, e + 1, e + 6),
              M(this, e + 2, e + 5),
              M(this, e + 3, e + 4);
          return this;
        }),
        (f.prototype.toString = function () {
          let t = this.length;
          return t === 0
            ? ""
            : arguments.length === 0
            ? H(this, 0, t)
            : x.apply(this, arguments);
        }),
        (f.prototype.toLocaleString = f.prototype.toString),
        (f.prototype.equals = function (t) {
          if (!f.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
          return this === t ? !0 : f.compare(this, t) === 0;
        }),
        (f.prototype.inspect = function () {
          let t = "",
            e = p.INSPECT_MAX_BYTES;
          return (
            (t = this.toString("hex", 0, e)
              .replace(/(.{2})/g, "$1 ")
              .trim()),
            this.length > e && (t += " ... "),
            "<Buffer " + t + ">"
          );
        }),
        S && (f.prototype[S] = f.prototype.inspect),
        (f.prototype.compare = function (t, e, n, r, o) {
          if (
            (N(t, Uint8Array) && (t = f.from(t, t.offset, t.byteLength)),
            !f.isBuffer(t))
          )
            throw new TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                typeof t
            );
          if (
            (e === void 0 && (e = 0),
            n === void 0 && (n = t ? t.length : 0),
            r === void 0 && (r = 0),
            o === void 0 && (o = this.length),
            e < 0 || n > t.length || r < 0 || o > this.length)
          )
            throw new RangeError("out of range index");
          if (r >= o && e >= n) return 0;
          if (r >= o) return -1;
          if (e >= n) return 1;
          if (((e >>>= 0), (n >>>= 0), (r >>>= 0), (o >>>= 0), this === t))
            return 0;
          let i = o - r,
            u = n - e,
            g = Math.min(i, u),
            R = this.slice(r, o),
            d = t.slice(e, n);
          for (let y = 0; y < g; ++y)
            if (R[y] !== d[y]) {
              (i = R[y]), (u = d[y]);
              break;
            }
          return i < u ? -1 : u < i ? 1 : 0;
        });
      function O(t, e, n, r, o) {
        if (t.length === 0) return -1;
        if (
          (typeof n == "string"
            ? ((r = n), (n = 0))
            : n > 2147483647
            ? (n = 2147483647)
            : n < -2147483648 && (n = -2147483648),
          (n = +n),
          X(n) && (n = o ? 0 : t.length - 1),
          n < 0 && (n = t.length + n),
          n >= t.length)
        ) {
          if (o) return -1;
          n = t.length - 1;
        } else if (n < 0)
          if (o) n = 0;
          else return -1;
        if ((typeof e == "string" && (e = f.from(e, r)), f.isBuffer(e)))
          return e.length === 0 ? -1 : Z(t, e, n, r, o);
        if (typeof e == "number")
          return (
            (e = e & 255),
            typeof Uint8Array.prototype.indexOf == "function"
              ? o
                ? Uint8Array.prototype.indexOf.call(t, e, n)
                : Uint8Array.prototype.lastIndexOf.call(t, e, n)
              : Z(t, [e], n, r, o)
          );
        throw new TypeError("val must be string, number or Buffer");
      }
      function Z(t, e, n, r, o) {
        let i = 1,
          u = t.length,
          g = e.length;
        if (
          r !== void 0 &&
          ((r = String(r).toLowerCase()),
          r === "ucs2" || r === "ucs-2" || r === "utf16le" || r === "utf-16le")
        ) {
          if (t.length < 2 || e.length < 2) return -1;
          (i = 2), (u /= 2), (g /= 2), (n /= 2);
        }
        function R(y, v) {
          return i === 1 ? y[v] : y.readUInt16BE(v * i);
        }
        let d;
        if (o) {
          let y = -1;
          for (d = n; d < u; d++)
            if (R(t, d) === R(e, y === -1 ? 0 : d - y)) {
              if ((y === -1 && (y = d), d - y + 1 === g)) return y * i;
            } else y !== -1 && (d -= d - y), (y = -1);
        } else
          for (n + g > u && (n = u - g), d = n; d >= 0; d--) {
            let y = !0;
            for (let v = 0; v < g; v++)
              if (R(t, d + v) !== R(e, v)) {
                y = !1;
                break;
              }
            if (y) return d;
          }
        return -1;
      }
      (f.prototype.includes = function (t, e, n) {
        return this.indexOf(t, e, n) !== -1;
      }),
        (f.prototype.indexOf = function (t, e, n) {
          return O(this, t, e, n, !0);
        }),
        (f.prototype.lastIndexOf = function (t, e, n) {
          return O(this, t, e, n, !1);
        });
      function pt(t, e, n, r) {
        n = Number(n) || 0;
        let o = t.length - n;
        r ? ((r = Number(r)), r > o && (r = o)) : (r = o);
        let i = e.length;
        r > i / 2 && (r = i / 2);
        let u;
        for (u = 0; u < r; ++u) {
          let g = parseInt(e.substr(u * 2, 2), 16);
          if (X(g)) return u;
          t[n + u] = g;
        }
        return u;
      }
      function ct(t, e, n, r) {
        return Y(G(e, t.length - n), t, n, r);
      }
      function gt(t, e, n, r) {
        return Y(Rt(e), t, n, r);
      }
      function yt(t, e, n, r) {
        return Y(it(e), t, n, r);
      }
      function wt(t, e, n, r) {
        return Y(Tt(e, t.length - n), t, n, r);
      }
      (f.prototype.write = function (t, e, n, r) {
        if (e === void 0) (r = "utf8"), (n = this.length), (e = 0);
        else if (n === void 0 && typeof e == "string")
          (r = e), (n = this.length), (e = 0);
        else if (isFinite(e))
          (e = e >>> 0),
            isFinite(n)
              ? ((n = n >>> 0), r === void 0 && (r = "utf8"))
              : ((r = n), (n = void 0));
        else
          throw new Error(
            "Buffer.write(string, encoding, offset[, length]) is no longer supported"
          );
        let o = this.length - e;
        if (
          ((n === void 0 || n > o) && (n = o),
          (t.length > 0 && (n < 0 || e < 0)) || e > this.length)
        )
          throw new RangeError("Attempt to write outside buffer bounds");
        r || (r = "utf8");
        let i = !1;
        for (;;)
          switch (r) {
            case "hex":
              return pt(this, t, e, n);
            case "utf8":
            case "utf-8":
              return ct(this, t, e, n);
            case "ascii":
            case "latin1":
            case "binary":
              return gt(this, t, e, n);
            case "base64":
              return yt(this, t, e, n);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return wt(this, t, e, n);
            default:
              if (i) throw new TypeError("Unknown encoding: " + r);
              (r = ("" + r).toLowerCase()), (i = !0);
          }
      }),
        (f.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        });
      function dt(t, e, n) {
        return e === 0 && n === t.length
          ? a.fromByteArray(t)
          : a.fromByteArray(t.slice(e, n));
      }
      function H(t, e, n) {
        n = Math.min(t.length, n);
        let r = [],
          o = e;
        for (; o < n; ) {
          let i = t[o],
            u = null,
            g = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
          if (o + g <= n) {
            let R, d, y, v;
            switch (g) {
              case 1:
                i < 128 && (u = i);
                break;
              case 2:
                (R = t[o + 1]),
                  (R & 192) === 128 &&
                    ((v = ((i & 31) << 6) | (R & 63)), v > 127 && (u = v));
                break;
              case 3:
                (R = t[o + 1]),
                  (d = t[o + 2]),
                  (R & 192) === 128 &&
                    (d & 192) === 128 &&
                    ((v = ((i & 15) << 12) | ((R & 63) << 6) | (d & 63)),
                    v > 2047 && (v < 55296 || v > 57343) && (u = v));
                break;
              case 4:
                (R = t[o + 1]),
                  (d = t[o + 2]),
                  (y = t[o + 3]),
                  (R & 192) === 128 &&
                    (d & 192) === 128 &&
                    (y & 192) === 128 &&
                    ((v =
                      ((i & 15) << 18) |
                      ((R & 63) << 12) |
                      ((d & 63) << 6) |
                      (y & 63)),
                    v > 65535 && v < 1114112 && (u = v));
            }
          }
          u === null
            ? ((u = 65533), (g = 1))
            : u > 65535 &&
              ((u -= 65536),
              r.push(((u >>> 10) & 1023) | 55296),
              (u = 56320 | (u & 1023))),
            r.push(u),
            (o += g);
        }
        return bt(r);
      }
      var K = 4096;
      function bt(t) {
        let e = t.length;
        if (e <= K) return String.fromCharCode.apply(String, t);
        let n = "",
          r = 0;
        for (; r < e; )
          n += String.fromCharCode.apply(String, t.slice(r, (r += K)));
        return n;
      }
      function Bt(t, e, n) {
        let r = "";
        n = Math.min(t.length, n);
        for (let o = e; o < n; ++o) r += String.fromCharCode(t[o] & 127);
        return r;
      }
      function mt(t, e, n) {
        let r = "";
        n = Math.min(t.length, n);
        for (let o = e; o < n; ++o) r += String.fromCharCode(t[o]);
        return r;
      }
      function Et(t, e, n) {
        let r = t.length;
        (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);
        let o = "";
        for (let i = e; i < n; ++i) o += Ot[t[i]];
        return o;
      }
      function vt(t, e, n) {
        let r = t.slice(e, n),
          o = "";
        for (let i = 0; i < r.length - 1; i += 2)
          o += String.fromCharCode(r[i] + r[i + 1] * 256);
        return o;
      }
      f.prototype.slice = function (t, e) {
        let n = this.length;
        (t = ~~t),
          (e = e === void 0 ? n : ~~e),
          t < 0 ? ((t += n), t < 0 && (t = 0)) : t > n && (t = n),
          e < 0 ? ((e += n), e < 0 && (e = 0)) : e > n && (e = n),
          e < t && (e = t);
        let r = this.subarray(t, e);
        return Object.setPrototypeOf(r, f.prototype), r;
      };
      function I(t, e, n) {
        if (t % 1 !== 0 || t < 0) throw new RangeError("offset is not uint");
        if (t + e > n)
          throw new RangeError("Trying to access beyond buffer length");
      }
      (f.prototype.readUintLE = f.prototype.readUIntLE =
        function (t, e, n) {
          (t = t >>> 0), (e = e >>> 0), n || I(t, e, this.length);
          let r = this[t],
            o = 1,
            i = 0;
          for (; ++i < e && (o *= 256); ) r += this[t + i] * o;
          return r;
        }),
        (f.prototype.readUintBE = f.prototype.readUIntBE =
          function (t, e, n) {
            (t = t >>> 0), (e = e >>> 0), n || I(t, e, this.length);
            let r = this[t + --e],
              o = 1;
            for (; e > 0 && (o *= 256); ) r += this[t + --e] * o;
            return r;
          }),
        (f.prototype.readUint8 = f.prototype.readUInt8 =
          function (t, e) {
            return (t = t >>> 0), e || I(t, 1, this.length), this[t];
          }),
        (f.prototype.readUint16LE = f.prototype.readUInt16LE =
          function (t, e) {
            return (
              (t = t >>> 0),
              e || I(t, 2, this.length),
              this[t] | (this[t + 1] << 8)
            );
          }),
        (f.prototype.readUint16BE = f.prototype.readUInt16BE =
          function (t, e) {
            return (
              (t = t >>> 0),
              e || I(t, 2, this.length),
              (this[t] << 8) | this[t + 1]
            );
          }),
        (f.prototype.readUint32LE = f.prototype.readUInt32LE =
          function (t, e) {
            return (
              (t = t >>> 0),
              e || I(t, 4, this.length),
              (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                this[t + 3] * 16777216
            );
          }),
        (f.prototype.readUint32BE = f.prototype.readUInt32BE =
          function (t, e) {
            return (
              (t = t >>> 0),
              e || I(t, 4, this.length),
              this[t] * 16777216 +
                ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
            );
          }),
        (f.prototype.readBigUInt64LE = j(function (t) {
          (t = t >>> 0), F(t, "offset");
          let e = this[t],
            n = this[t + 7];
          (e === void 0 || n === void 0) && D(t, this.length - 8);
          let r =
              e +
              this[++t] * 2 ** 8 +
              this[++t] * 2 ** 16 +
              this[++t] * 2 ** 24,
            o =
              this[++t] +
              this[++t] * 2 ** 8 +
              this[++t] * 2 ** 16 +
              n * 2 ** 24;
          return BigInt(r) + (BigInt(o) << BigInt(32));
        })),
        (f.prototype.readBigUInt64BE = j(function (t) {
          (t = t >>> 0), F(t, "offset");
          let e = this[t],
            n = this[t + 7];
          (e === void 0 || n === void 0) && D(t, this.length - 8);
          let r =
              e * 2 ** 24 +
              this[++t] * 2 ** 16 +
              this[++t] * 2 ** 8 +
              this[++t],
            o =
              this[++t] * 2 ** 24 +
              this[++t] * 2 ** 16 +
              this[++t] * 2 ** 8 +
              n;
          return (BigInt(r) << BigInt(32)) + BigInt(o);
        })),
        (f.prototype.readIntLE = function (t, e, n) {
          (t = t >>> 0), (e = e >>> 0), n || I(t, e, this.length);
          let r = this[t],
            o = 1,
            i = 0;
          for (; ++i < e && (o *= 256); ) r += this[t + i] * o;
          return (o *= 128), r >= o && (r -= Math.pow(2, 8 * e)), r;
        }),
        (f.prototype.readIntBE = function (t, e, n) {
          (t = t >>> 0), (e = e >>> 0), n || I(t, e, this.length);
          let r = e,
            o = 1,
            i = this[t + --r];
          for (; r > 0 && (o *= 256); ) i += this[t + --r] * o;
          return (o *= 128), i >= o && (i -= Math.pow(2, 8 * e)), i;
        }),
        (f.prototype.readInt8 = function (t, e) {
          return (
            (t = t >>> 0),
            e || I(t, 1, this.length),
            this[t] & 128 ? (255 - this[t] + 1) * -1 : this[t]
          );
        }),
        (f.prototype.readInt16LE = function (t, e) {
          (t = t >>> 0), e || I(t, 2, this.length);
          let n = this[t] | (this[t + 1] << 8);
          return n & 32768 ? n | 4294901760 : n;
        }),
        (f.prototype.readInt16BE = function (t, e) {
          (t = t >>> 0), e || I(t, 2, this.length);
          let n = this[t + 1] | (this[t] << 8);
          return n & 32768 ? n | 4294901760 : n;
        }),
        (f.prototype.readInt32LE = function (t, e) {
          return (
            (t = t >>> 0),
            e || I(t, 4, this.length),
            this[t] |
              (this[t + 1] << 8) |
              (this[t + 2] << 16) |
              (this[t + 3] << 24)
          );
        }),
        (f.prototype.readInt32BE = function (t, e) {
          return (
            (t = t >>> 0),
            e || I(t, 4, this.length),
            (this[t] << 24) |
              (this[t + 1] << 16) |
              (this[t + 2] << 8) |
              this[t + 3]
          );
        }),
        (f.prototype.readBigInt64LE = j(function (t) {
          (t = t >>> 0), F(t, "offset");
          let e = this[t],
            n = this[t + 7];
          (e === void 0 || n === void 0) && D(t, this.length - 8);
          let r =
            this[t + 4] +
            this[t + 5] * 2 ** 8 +
            this[t + 6] * 2 ** 16 +
            (n << 24);
          return (
            (BigInt(r) << BigInt(32)) +
            BigInt(
              e + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24
            )
          );
        })),
        (f.prototype.readBigInt64BE = j(function (t) {
          (t = t >>> 0), F(t, "offset");
          let e = this[t],
            n = this[t + 7];
          (e === void 0 || n === void 0) && D(t, this.length - 8);
          let r =
            (e << 24) + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t];
          return (
            (BigInt(r) << BigInt(32)) +
            BigInt(
              this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + n
            )
          );
        })),
        (f.prototype.readFloatLE = function (t, e) {
          return (
            (t = t >>> 0), e || I(t, 4, this.length), s.read(this, t, !0, 23, 4)
          );
        }),
        (f.prototype.readFloatBE = function (t, e) {
          return (
            (t = t >>> 0), e || I(t, 4, this.length), s.read(this, t, !1, 23, 4)
          );
        }),
        (f.prototype.readDoubleLE = function (t, e) {
          return (
            (t = t >>> 0), e || I(t, 8, this.length), s.read(this, t, !0, 52, 8)
          );
        }),
        (f.prototype.readDoubleBE = function (t, e) {
          return (
            (t = t >>> 0), e || I(t, 8, this.length), s.read(this, t, !1, 52, 8)
          );
        });
      function C(t, e, n, r, o, i) {
        if (!f.isBuffer(t))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (e > o || e < i)
          throw new RangeError('"value" argument is out of bounds');
        if (n + r > t.length) throw new RangeError("Index out of range");
      }
      (f.prototype.writeUintLE = f.prototype.writeUIntLE =
        function (t, e, n, r) {
          if (((t = +t), (e = e >>> 0), (n = n >>> 0), !r)) {
            let u = Math.pow(2, 8 * n) - 1;
            C(this, t, e, n, u, 0);
          }
          let o = 1,
            i = 0;
          for (this[e] = t & 255; ++i < n && (o *= 256); )
            this[e + i] = (t / o) & 255;
          return e + n;
        }),
        (f.prototype.writeUintBE = f.prototype.writeUIntBE =
          function (t, e, n, r) {
            if (((t = +t), (e = e >>> 0), (n = n >>> 0), !r)) {
              let u = Math.pow(2, 8 * n) - 1;
              C(this, t, e, n, u, 0);
            }
            let o = n - 1,
              i = 1;
            for (this[e + o] = t & 255; --o >= 0 && (i *= 256); )
              this[e + o] = (t / i) & 255;
            return e + n;
          }),
        (f.prototype.writeUint8 = f.prototype.writeUInt8 =
          function (t, e, n) {
            return (
              (t = +t),
              (e = e >>> 0),
              n || C(this, t, e, 1, 255, 0),
              (this[e] = t & 255),
              e + 1
            );
          }),
        (f.prototype.writeUint16LE = f.prototype.writeUInt16LE =
          function (t, e, n) {
            return (
              (t = +t),
              (e = e >>> 0),
              n || C(this, t, e, 2, 65535, 0),
              (this[e] = t & 255),
              (this[e + 1] = t >>> 8),
              e + 2
            );
          }),
        (f.prototype.writeUint16BE = f.prototype.writeUInt16BE =
          function (t, e, n) {
            return (
              (t = +t),
              (e = e >>> 0),
              n || C(this, t, e, 2, 65535, 0),
              (this[e] = t >>> 8),
              (this[e + 1] = t & 255),
              e + 2
            );
          }),
        (f.prototype.writeUint32LE = f.prototype.writeUInt32LE =
          function (t, e, n) {
            return (
              (t = +t),
              (e = e >>> 0),
              n || C(this, t, e, 4, 4294967295, 0),
              (this[e + 3] = t >>> 24),
              (this[e + 2] = t >>> 16),
              (this[e + 1] = t >>> 8),
              (this[e] = t & 255),
              e + 4
            );
          }),
        (f.prototype.writeUint32BE = f.prototype.writeUInt32BE =
          function (t, e, n) {
            return (
              (t = +t),
              (e = e >>> 0),
              n || C(this, t, e, 4, 4294967295, 0),
              (this[e] = t >>> 24),
              (this[e + 1] = t >>> 16),
              (this[e + 2] = t >>> 8),
              (this[e + 3] = t & 255),
              e + 4
            );
          });
      function Q(t, e, n, r, o) {
        ft(e, r, o, t, n, 7);
        let i = Number(e & BigInt(4294967295));
        (t[n++] = i),
          (i = i >> 8),
          (t[n++] = i),
          (i = i >> 8),
          (t[n++] = i),
          (i = i >> 8),
          (t[n++] = i);
        let u = Number((e >> BigInt(32)) & BigInt(4294967295));
        return (
          (t[n++] = u),
          (u = u >> 8),
          (t[n++] = u),
          (u = u >> 8),
          (t[n++] = u),
          (u = u >> 8),
          (t[n++] = u),
          n
        );
      }
      function tt(t, e, n, r, o) {
        ft(e, r, o, t, n, 7);
        let i = Number(e & BigInt(4294967295));
        (t[n + 7] = i),
          (i = i >> 8),
          (t[n + 6] = i),
          (i = i >> 8),
          (t[n + 5] = i),
          (i = i >> 8),
          (t[n + 4] = i);
        let u = Number((e >> BigInt(32)) & BigInt(4294967295));
        return (
          (t[n + 3] = u),
          (u = u >> 8),
          (t[n + 2] = u),
          (u = u >> 8),
          (t[n + 1] = u),
          (u = u >> 8),
          (t[n] = u),
          n + 8
        );
      }
      (f.prototype.writeBigUInt64LE = j(function (t, e = 0) {
        return Q(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
      })),
        (f.prototype.writeBigUInt64BE = j(function (t, e = 0) {
          return tt(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
        })),
        (f.prototype.writeIntLE = function (t, e, n, r) {
          if (((t = +t), (e = e >>> 0), !r)) {
            let g = Math.pow(2, 8 * n - 1);
            C(this, t, e, n, g - 1, -g);
          }
          let o = 0,
            i = 1,
            u = 0;
          for (this[e] = t & 255; ++o < n && (i *= 256); )
            t < 0 && u === 0 && this[e + o - 1] !== 0 && (u = 1),
              (this[e + o] = (((t / i) >> 0) - u) & 255);
          return e + n;
        }),
        (f.prototype.writeIntBE = function (t, e, n, r) {
          if (((t = +t), (e = e >>> 0), !r)) {
            let g = Math.pow(2, 8 * n - 1);
            C(this, t, e, n, g - 1, -g);
          }
          let o = n - 1,
            i = 1,
            u = 0;
          for (this[e + o] = t & 255; --o >= 0 && (i *= 256); )
            t < 0 && u === 0 && this[e + o + 1] !== 0 && (u = 1),
              (this[e + o] = (((t / i) >> 0) - u) & 255);
          return e + n;
        }),
        (f.prototype.writeInt8 = function (t, e, n) {
          return (
            (t = +t),
            (e = e >>> 0),
            n || C(this, t, e, 1, 127, -128),
            t < 0 && (t = 255 + t + 1),
            (this[e] = t & 255),
            e + 1
          );
        }),
        (f.prototype.writeInt16LE = function (t, e, n) {
          return (
            (t = +t),
            (e = e >>> 0),
            n || C(this, t, e, 2, 32767, -32768),
            (this[e] = t & 255),
            (this[e + 1] = t >>> 8),
            e + 2
          );
        }),
        (f.prototype.writeInt16BE = function (t, e, n) {
          return (
            (t = +t),
            (e = e >>> 0),
            n || C(this, t, e, 2, 32767, -32768),
            (this[e] = t >>> 8),
            (this[e + 1] = t & 255),
            e + 2
          );
        }),
        (f.prototype.writeInt32LE = function (t, e, n) {
          return (
            (t = +t),
            (e = e >>> 0),
            n || C(this, t, e, 4, 2147483647, -2147483648),
            (this[e] = t & 255),
            (this[e + 1] = t >>> 8),
            (this[e + 2] = t >>> 16),
            (this[e + 3] = t >>> 24),
            e + 4
          );
        }),
        (f.prototype.writeInt32BE = function (t, e, n) {
          return (
            (t = +t),
            (e = e >>> 0),
            n || C(this, t, e, 4, 2147483647, -2147483648),
            t < 0 && (t = 4294967295 + t + 1),
            (this[e] = t >>> 24),
            (this[e + 1] = t >>> 16),
            (this[e + 2] = t >>> 8),
            (this[e + 3] = t & 255),
            e + 4
          );
        }),
        (f.prototype.writeBigInt64LE = j(function (t, e = 0) {
          return Q(
            this,
            t,
            e,
            -BigInt("0x8000000000000000"),
            BigInt("0x7fffffffffffffff")
          );
        })),
        (f.prototype.writeBigInt64BE = j(function (t, e = 0) {
          return tt(
            this,
            t,
            e,
            -BigInt("0x8000000000000000"),
            BigInt("0x7fffffffffffffff")
          );
        }));
      function et(t, e, n, r, o, i) {
        if (n + r > t.length) throw new RangeError("Index out of range");
        if (n < 0) throw new RangeError("Index out of range");
      }
      function nt(t, e, n, r, o) {
        return (
          (e = +e),
          (n = n >>> 0),
          o || et(t, e, n, 4, 34028234663852886e22, -34028234663852886e22),
          s.write(t, e, n, r, 23, 4),
          n + 4
        );
      }
      (f.prototype.writeFloatLE = function (t, e, n) {
        return nt(this, t, e, !0, n);
      }),
        (f.prototype.writeFloatBE = function (t, e, n) {
          return nt(this, t, e, !1, n);
        });
      function rt(t, e, n, r, o) {
        return (
          (e = +e),
          (n = n >>> 0),
          o || et(t, e, n, 8, 17976931348623157e292, -17976931348623157e292),
          s.write(t, e, n, r, 52, 8),
          n + 8
        );
      }
      (f.prototype.writeDoubleLE = function (t, e, n) {
        return rt(this, t, e, !0, n);
      }),
        (f.prototype.writeDoubleBE = function (t, e, n) {
          return rt(this, t, e, !1, n);
        }),
        (f.prototype.copy = function (t, e, n, r) {
          if (!f.isBuffer(t))
            throw new TypeError("argument should be a Buffer");
          if (
            (n || (n = 0),
            !r && r !== 0 && (r = this.length),
            e >= t.length && (e = t.length),
            e || (e = 0),
            r > 0 && r < n && (r = n),
            r === n || t.length === 0 || this.length === 0)
          )
            return 0;
          if (e < 0) throw new RangeError("targetStart out of bounds");
          if (n < 0 || n >= this.length)
            throw new RangeError("Index out of range");
          if (r < 0) throw new RangeError("sourceEnd out of bounds");
          r > this.length && (r = this.length),
            t.length - e < r - n && (r = t.length - e + n);
          let o = r - n;
          return (
            this === t && typeof Uint8Array.prototype.copyWithin == "function"
              ? this.copyWithin(e, n, r)
              : Uint8Array.prototype.set.call(t, this.subarray(n, r), e),
            o
          );
        }),
        (f.prototype.fill = function (t, e, n, r) {
          if (typeof t == "string") {
            if (
              (typeof e == "string"
                ? ((r = e), (e = 0), (n = this.length))
                : typeof n == "string" && ((r = n), (n = this.length)),
              r !== void 0 && typeof r != "string")
            )
              throw new TypeError("encoding must be a string");
            if (typeof r == "string" && !f.isEncoding(r))
              throw new TypeError("Unknown encoding: " + r);
            if (t.length === 1) {
              let i = t.charCodeAt(0);
              ((r === "utf8" && i < 128) || r === "latin1") && (t = i);
            }
          } else
            typeof t == "number"
              ? (t = t & 255)
              : typeof t == "boolean" && (t = Number(t));
          if (e < 0 || this.length < e || this.length < n)
            throw new RangeError("Out of range index");
          if (n <= e) return this;
          (e = e >>> 0),
            (n = n === void 0 ? this.length : n >>> 0),
            t || (t = 0);
          let o;
          if (typeof t == "number") for (o = e; o < n; ++o) this[o] = t;
          else {
            let i = f.isBuffer(t) ? t : f.from(t, r),
              u = i.length;
            if (u === 0)
              throw new TypeError(
                'The value "' + t + '" is invalid for argument "value"'
              );
            for (o = 0; o < n - e; ++o) this[o + e] = i[o % u];
          }
          return this;
        });
      var k = {};
      function z(t, e, n) {
        k[t] = class extends n {
          constructor() {
            super(),
              Object.defineProperty(this, "message", {
                value: e.apply(this, arguments),
                writable: !0,
                configurable: !0,
              }),
              (this.name = `${this.name} [${t}]`),
              this.stack,
              delete this.name;
          }
          get code() {
            return t;
          }
          set code(r) {
            Object.defineProperty(this, "code", {
              configurable: !0,
              enumerable: !0,
              value: r,
              writable: !0,
            });
          }
          toString() {
            return `${this.name} [${t}]: ${this.message}`;
          }
        };
      }
      z(
        "ERR_BUFFER_OUT_OF_BOUNDS",
        function (t) {
          return t
            ? `${t} is outside of buffer bounds`
            : "Attempt to access memory outside buffer bounds";
        },
        RangeError
      ),
        z(
          "ERR_INVALID_ARG_TYPE",
          function (t, e) {
            return `The "${t}" argument must be of type number. Received type ${typeof e}`;
          },
          TypeError
        ),
        z(
          "ERR_OUT_OF_RANGE",
          function (t, e, n) {
            let r = `The value of "${t}" is out of range.`,
              o = n;
            return (
              Number.isInteger(n) && Math.abs(n) > 2 ** 32
                ? (o = ot(String(n)))
                : typeof n == "bigint" &&
                  ((o = String(n)),
                  (n > BigInt(2) ** BigInt(32) ||
                    n < -(BigInt(2) ** BigInt(32))) &&
                    (o = ot(o)),
                  (o += "n")),
              (r += ` It must be ${e}. Received ${o}`),
              r
            );
          },
          RangeError
        );
      function ot(t) {
        let e = "",
          n = t.length,
          r = t[0] === "-" ? 1 : 0;
        for (; n >= r + 4; n -= 3) e = `_${t.slice(n - 3, n)}${e}`;
        return `${t.slice(0, n)}${e}`;
      }
      function At(t, e, n) {
        F(e, "offset"),
          (t[e] === void 0 || t[e + n] === void 0) && D(e, t.length - (n + 1));
      }
      function ft(t, e, n, r, o, i) {
        if (t > n || t < e) {
          let u = typeof e == "bigint" ? "n" : "",
            g;
          throw (
            (i > 3
              ? e === 0 || e === BigInt(0)
                ? (g = `>= 0${u} and < 2${u} ** ${(i + 1) * 8}${u}`)
                : (g = `>= -(2${u} ** ${(i + 1) * 8 - 1}${u}) and < 2 ** ${
                    (i + 1) * 8 - 1
                  }${u}`)
              : (g = `>= ${e}${u} and <= ${n}${u}`),
            new k.ERR_OUT_OF_RANGE("value", g, t))
          );
        }
        At(r, o, i);
      }
      function F(t, e) {
        if (typeof t != "number")
          throw new k.ERR_INVALID_ARG_TYPE(e, "number", t);
      }
      function D(t, e, n) {
        throw Math.floor(t) !== t
          ? (F(t, n), new k.ERR_OUT_OF_RANGE(n || "offset", "an integer", t))
          : e < 0
          ? new k.ERR_BUFFER_OUT_OF_BOUNDS()
          : new k.ERR_OUT_OF_RANGE(
              n || "offset",
              `>= ${n ? 1 : 0} and <= ${e}`,
              t
            );
      }
      var It = /[^+/0-9A-Za-z-_]/g;
      function Ut(t) {
        if (
          ((t = t.split("=")[0]), (t = t.trim().replace(It, "")), t.length < 2)
        )
          return "";
        for (; t.length % 4 !== 0; ) t = t + "=";
        return t;
      }
      function G(t, e) {
        e = e || 1 / 0;
        let n,
          r = t.length,
          o = null,
          i = [];
        for (let u = 0; u < r; ++u) {
          if (((n = t.charCodeAt(u)), n > 55295 && n < 57344)) {
            if (!o) {
              if (n > 56319) {
                (e -= 3) > -1 && i.push(239, 191, 189);
                continue;
              } else if (u + 1 === r) {
                (e -= 3) > -1 && i.push(239, 191, 189);
                continue;
              }
              o = n;
              continue;
            }
            if (n < 56320) {
              (e -= 3) > -1 && i.push(239, 191, 189), (o = n);
              continue;
            }
            n = (((o - 55296) << 10) | (n - 56320)) + 65536;
          } else o && (e -= 3) > -1 && i.push(239, 191, 189);
          if (((o = null), n < 128)) {
            if ((e -= 1) < 0) break;
            i.push(n);
          } else if (n < 2048) {
            if ((e -= 2) < 0) break;
            i.push((n >> 6) | 192, (n & 63) | 128);
          } else if (n < 65536) {
            if ((e -= 3) < 0) break;
            i.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (n & 63) | 128);
          } else if (n < 1114112) {
            if ((e -= 4) < 0) break;
            i.push(
              (n >> 18) | 240,
              ((n >> 12) & 63) | 128,
              ((n >> 6) & 63) | 128,
              (n & 63) | 128
            );
          } else throw new Error("Invalid code point");
        }
        return i;
      }
      function Rt(t) {
        let e = [];
        for (let n = 0; n < t.length; ++n) e.push(t.charCodeAt(n) & 255);
        return e;
      }
      function Tt(t, e) {
        let n,
          r,
          o,
          i = [];
        for (let u = 0; u < t.length && !((e -= 2) < 0); ++u)
          (n = t.charCodeAt(u)),
            (r = n >> 8),
            (o = n % 256),
            i.push(o),
            i.push(r);
        return i;
      }
      function it(t) {
        return a.toByteArray(Ut(t));
      }
      function Y(t, e, n, r) {
        let o;
        for (o = 0; o < r && !(o + n >= e.length || o >= t.length); ++o)
          e[o + n] = t[o];
        return o;
      }
      function N(t, e) {
        return (
          t instanceof e ||
          (t != null &&
            t.constructor != null &&
            t.constructor.name != null &&
            t.constructor.name === e.name)
        );
      }
      function X(t) {
        return t !== t;
      }
      var Ot = (function () {
        let t = "0123456789abcdef",
          e = new Array(256);
        for (let n = 0; n < 16; ++n) {
          let r = n * 16;
          for (let o = 0; o < 16; ++o) e[r + o] = t[n] + t[o];
        }
        return e;
      })();
      function j(t) {
        return typeof BigInt > "u" ? St : t;
      }
      function St() {
        throw new Error("BigInt not supported");
      }
    }),
    at = {};
  Pt(at, {
    Buffer: () => J,
    INSPECT_MAX_BYTES: () => Ft,
    SlowBuffer: () => kt,
    default: () => zt,
    kMaxLength: () => Dt,
  });
  var lt = st(ht());
  $t(at, st(ht()));
  var { Buffer: J, SlowBuffer: kt, INSPECT_MAX_BYTES: Ft, kMaxLength: Dt } = lt,
    { default: ut, ...Yt } = lt,
    zt = ut !== void 0 ? ut : Yt;
  globalThis.__Buffer$ = J;
})();
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
var __global$ = globalThis || (typeof window !== "undefined" ? window : self);
var __setImmediate$ = (cb, ...args) => setTimeout(cb, 0, ...args);
import * as __0$ from "./browser.js";
var require = (n) => {
  const e = (m) => (typeof m.default < "u" ? m.default : m),
    c = (m) => Object.assign({}, m);
  switch (n) {
    case "os":
      return e(__0$);
    default:
      throw new Error('module "' + n + '" not found');
  }
};
var No = Object.create;
var Ae = Object.defineProperty;
var Bo = Object.getOwnPropertyDescriptor;
var Vo = Object.getOwnPropertyNames;
var Ko = Object.getPrototypeOf,
  Jo = Object.prototype.hasOwnProperty;
var Qo = ((e) =>
  typeof require < "u"
    ? require
    : typeof Proxy < "u"
    ? new Proxy(e, { get: (t, r) => (typeof require < "u" ? require : t)[r] })
    : e)(function (e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
});
var B = (e, t) => () => (e && (t = e((e = 0))), t);
var U = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  ee = (e, t) => {
    for (var r in t) Ae(e, r, { get: t[r], enumerable: !0 });
  },
  Jt = (e, t, r, s) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let o of Vo(t))
        !Jo.call(e, o) &&
          o !== r &&
          Ae(e, o, {
            get: () => t[o],
            enumerable: !(s = Bo(t, o)) || s.enumerable,
          });
    return e;
  };
var S = (e, t, r) => (
    (r = e != null ? No(Ko(e)) : {}),
    Jt(
      t || !e || !e.__esModule
        ? Ae(r, "default", { value: e, enumerable: !0 })
        : r,
      e
    )
  ),
  k = (e) => Jt(Ae({}, "__esModule", { value: !0 }), e);
var H = U((Ke) => {
  "use strict";
  Object.defineProperty(Ke, "__esModule", { value: !0 });
  function Yo() {
    return typeof navigator == "object" && "userAgent" in navigator
      ? navigator.userAgent
      : typeof __Process$ == "object" && __Process$.version !== void 0
      ? `Node.js/${__Process$.version.substr(1)} (${__Process$.platform}; ${
          __Process$.arch
        })`
      : "<environment undetectable>";
  }
  Ke.getUserAgent = Yo;
});
var Xt = U((Fu, Yt) => {
  Yt.exports = Qt;
  function Qt(e, t, r, s) {
    if (typeof r != "function")
      throw new Error("method for before hook must be a function");
    return (
      s || (s = {}),
      Array.isArray(t)
        ? t.reverse().reduce(function (o, n) {
            return Qt.bind(null, e, n, o, s);
          }, r)()
        : Promise.resolve().then(function () {
            return e.registry[t]
              ? e.registry[t].reduce(function (o, n) {
                  return n.hook.bind(null, o, s);
                }, r)()
              : r(s);
          })
    );
  }
});
var er = U((Uu, Zt) => {
  Zt.exports = Xo;
  function Xo(e, t, r, s) {
    var o = s;
    e.registry[r] || (e.registry[r] = []),
      t === "before" &&
        (s = function (n, a) {
          return Promise.resolve().then(o.bind(null, a)).then(n.bind(null, a));
        }),
      t === "after" &&
        (s = function (n, a) {
          var c;
          return Promise.resolve()
            .then(n.bind(null, a))
            .then(function (u) {
              return (c = u), o(c, a);
            })
            .then(function () {
              return c;
            });
        }),
      t === "error" &&
        (s = function (n, a) {
          return Promise.resolve()
            .then(n.bind(null, a))
            .catch(function (c) {
              return o(c, a);
            });
        }),
      e.registry[r].push({ hook: s, orig: o });
  }
});
var rr = U((Cu, tr) => {
  tr.exports = Zo;
  function Zo(e, t, r) {
    if (e.registry[t]) {
      var s = e.registry[t]
        .map(function (o) {
          return o.orig;
        })
        .indexOf(r);
      s !== -1 && e.registry[t].splice(s, 1);
    }
  }
});
var ur = U((Du, me) => {
  var ir = Xt(),
    en = er(),
    tn = rr(),
    sr = Function.bind,
    or = sr.bind(sr);
  function ar(e, t, r) {
    var s = or(tn, null).apply(null, r ? [t, r] : [t]);
    (e.api = { remove: s }),
      (e.remove = s),
      ["before", "error", "after", "wrap"].forEach(function (o) {
        var n = r ? [t, o, r] : [t, o];
        e[o] = e.api[o] = or(en, null).apply(null, n);
      });
  }
  function rn() {
    var e = "h",
      t = { registry: {} },
      r = ir.bind(null, t, e);
    return ar(r, t, e), r;
  }
  function cr() {
    var e = { registry: {} },
      t = ir.bind(null, e);
    return ar(t, e), t;
  }
  var nr = !1;
  function ne() {
    return (
      nr ||
        (console.warn(
          '[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4'
        ),
        (nr = !0)),
      cr()
    );
  }
  ne.Singular = rn.bind();
  ne.Collection = cr.bind();
  me.exports = ne;
  me.exports.Hook = ne;
  me.exports.Singular = ne.Singular;
  me.exports.Collection = ne.Collection;
});
function an(e) {
  return e
    ? Object.keys(e).reduce((t, r) => ((t[r.toLowerCase()] = e[r]), t), {})
    : {};
}
function cn(e) {
  if (
    typeof e != "object" ||
    e === null ||
    Object.prototype.toString.call(e) !== "[object Object]"
  )
    return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r =
    Object.prototype.hasOwnProperty.call(t, "constructor") && t.constructor;
  return (
    typeof r == "function" &&
    r instanceof r &&
    Function.prototype.call(r) === Function.prototype.call(e)
  );
}
function hr(e, t) {
  let r = Object.assign({}, e);
  return (
    Object.keys(t).forEach((s) => {
      cn(t[s])
        ? s in e
          ? (r[s] = hr(e[s], t[s]))
          : Object.assign(r, { [s]: t[s] })
        : Object.assign(r, { [s]: t[s] });
    }),
    r
  );
}
function lr(e) {
  for (let t in e) e[t] === void 0 && delete e[t];
  return e;
}
function Qe(e, t, r) {
  if (typeof t == "string") {
    let [o, n] = t.split(" ");
    r = Object.assign(n ? { method: o, url: n } : { url: o }, r);
  } else r = Object.assign({}, t);
  (r.headers = an(r.headers)), lr(r), lr(r.headers);
  let s = hr(e || {}, r);
  return (
    r.url === "/graphql" &&
      (e &&
        e.mediaType.previews?.length &&
        (s.mediaType.previews = e.mediaType.previews
          .filter((o) => !s.mediaType.previews.includes(o))
          .concat(s.mediaType.previews)),
      (s.mediaType.previews = (s.mediaType.previews || []).map((o) =>
        o.replace(/-preview/, "")
      ))),
    s
  );
}
function un(e, t) {
  let r = /\?/.test(e) ? "&" : "?",
    s = Object.keys(t);
  return s.length === 0
    ? e
    : e +
        r +
        s
          .map((o) =>
            o === "q"
              ? "q=" + t.q.split("+").map(encodeURIComponent).join("+")
              : `${o}=${encodeURIComponent(t[o])}`
          )
          .join("&");
}
function pn(e) {
  return e.replace(/^\W+|\W+$/g, "").split(/,/);
}
function dn(e) {
  let t = e.match(ln);
  return t ? t.map(pn).reduce((r, s) => r.concat(s), []) : [];
}
function pr(e, t) {
  let r = { __proto__: null };
  for (let s of Object.keys(e)) t.indexOf(s) === -1 && (r[s] = e[s]);
  return r;
}
function gr(e) {
  return e
    .split(/(%[0-9A-Fa-f]{2})/g)
    .map(function (t) {
      return (
        /%[0-9A-Fa-f]/.test(t) ||
          (t = encodeURI(t).replace(/%5B/g, "[").replace(/%5D/g, "]")),
        t
      );
    })
    .join("");
}
function ae(e) {
  return encodeURIComponent(e).replace(/[!'()*]/g, function (t) {
    return "%" + t.charCodeAt(0).toString(16).toUpperCase();
  });
}
function fe(e, t, r) {
  return (t = e === "+" || e === "#" ? gr(t) : ae(t)), r ? ae(r) + "=" + t : t;
}
function ie(e) {
  return e != null;
}
function Je(e) {
  return e === ";" || e === "&" || e === "?";
}
function hn(e, t, r, s) {
  var o = e[r],
    n = [];
  if (ie(o) && o !== "")
    if (typeof o == "string" || typeof o == "number" || typeof o == "boolean")
      (o = o.toString()),
        s && s !== "*" && (o = o.substring(0, parseInt(s, 10))),
        n.push(fe(t, o, Je(t) ? r : ""));
    else if (s === "*")
      Array.isArray(o)
        ? o.filter(ie).forEach(function (a) {
            n.push(fe(t, a, Je(t) ? r : ""));
          })
        : Object.keys(o).forEach(function (a) {
            ie(o[a]) && n.push(fe(t, o[a], a));
          });
    else {
      let a = [];
      Array.isArray(o)
        ? o.filter(ie).forEach(function (c) {
            a.push(fe(t, c));
          })
        : Object.keys(o).forEach(function (c) {
            ie(o[c]) && (a.push(ae(c)), a.push(fe(t, o[c].toString())));
          }),
        Je(t)
          ? n.push(ae(r) + "=" + a.join(","))
          : a.length !== 0 && n.push(a.join(","));
    }
  else
    t === ";"
      ? ie(o) && n.push(ae(r))
      : o === "" && (t === "&" || t === "?")
      ? n.push(ae(r) + "=")
      : o === "" && n.push("");
  return n;
}
function gn(e) {
  return { expand: mn.bind(null, e) };
}
function mn(e, t) {
  var r = ["+", "#", ".", "/", ";", "?", "&"];
  return (
    (e = e.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (s, o, n) {
      if (o) {
        let c = "",
          u = [];
        if (
          (r.indexOf(o.charAt(0)) !== -1 &&
            ((c = o.charAt(0)), (o = o.substr(1))),
          o.split(/,/g).forEach(function (f) {
            var _ = /([^:\*]*)(?::(\d+)|(\*))?/.exec(f);
            u.push(hn(t, c, _[1], _[2] || _[3]));
          }),
          c && c !== "+")
        ) {
          var a = ",";
          return (
            c === "?" ? (a = "&") : c !== "#" && (a = c),
            (u.length !== 0 ? c : "") + u.join(a)
          );
        } else return u.join(",");
      } else return gr(n);
    })),
    e === "/" ? e : e.replace(/\/$/, "")
  );
}
function mr(e) {
  let t = e.method.toUpperCase(),
    r = (e.url || "/").replace(/:([a-z]\w+)/g, "{$1}"),
    s = Object.assign({}, e.headers),
    o,
    n = pr(e, ["method", "baseUrl", "url", "headers", "request", "mediaType"]),
    a = dn(r);
  (r = gn(r).expand(n)), /^http/.test(r) || (r = e.baseUrl + r);
  let c = Object.keys(e)
      .filter((_) => a.includes(_))
      .concat("baseUrl"),
    u = pr(n, c);
  if (
    !/application\/octet-stream/i.test(s.accept) &&
    (e.mediaType.format &&
      (s.accept = s.accept
        .split(/,/)
        .map((_) =>
          _.replace(
            /application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,
            `application/vnd$1$2.${e.mediaType.format}`
          )
        )
        .join(",")),
    r.endsWith("/graphql") && e.mediaType.previews?.length)
  ) {
    let _ = s.accept.match(/[\w-]+(?=-preview)/g) || [];
    s.accept = _.concat(e.mediaType.previews)
      .map((m) => {
        let E = e.mediaType.format ? `.${e.mediaType.format}` : "+json";
        return `application/vnd.github.${m}-preview${E}`;
      })
      .join(",");
  }
  return (
    ["GET", "HEAD"].includes(t)
      ? (r = un(r, u))
      : "data" in u
      ? (o = u.data)
      : Object.keys(u).length && (o = u),
    !s["content-type"] &&
      typeof o < "u" &&
      (s["content-type"] = "application/json; charset=utf-8"),
    ["PATCH", "PUT"].includes(t) && typeof o > "u" && (o = ""),
    Object.assign(
      { method: t, url: r, headers: s },
      typeof o < "u" ? { body: o } : null,
      e.request ? { request: e.request } : null
    )
  );
}
function fn(e, t, r) {
  return mr(Qe(e, t, r));
}
function fr(e, t) {
  let r = Qe(e, t),
    s = fn.bind(null, r);
  return Object.assign(s, {
    DEFAULTS: r,
    defaults: fr.bind(null, r),
    merge: Qe.bind(null, r),
    parse: mr,
  });
}
var dr,
  sn,
  on,
  nn,
  ln,
  _r,
  Tr = B(() => {
    (dr = S(H())),
      (sn = "9.0.4"),
      (on = `octokit-endpoint.js/${sn} ${(0, dr.getUserAgent)()}`),
      (nn = {
        method: "GET",
        baseUrl: "https://api.github.com",
        headers: { accept: "application/vnd.github.v3+json", "user-agent": on },
        mediaType: { format: "" },
      });
    ln = /\{[^}]+\}/g;
    _r = fr(null, nn);
  });
var Ze = U((Xe) => {
  "use strict";
  Object.defineProperty(Xe, "__esModule", { value: !0 });
  var Ye = class extends Error {
    constructor(t) {
      super(t),
        Error.captureStackTrace &&
          Error.captureStackTrace(this, this.constructor),
        (this.name = "Deprecation");
    }
  };
  Xe.Deprecation = Ye;
});
var yr = U((qu, wr) => {
  wr.exports = Er;
  function Er(e, t) {
    if (e && t) return Er(e)(t);
    if (typeof e != "function") throw new TypeError("need wrapper function");
    return (
      Object.keys(e).forEach(function (s) {
        r[s] = e[s];
      }),
      r
    );
    function r() {
      for (var s = new Array(arguments.length), o = 0; o < s.length; o++)
        s[o] = arguments[o];
      var n = e.apply(this, s),
        a = s[s.length - 1];
      return (
        typeof n == "function" &&
          n !== a &&
          Object.keys(a).forEach(function (c) {
            n[c] = a[c];
          }),
        n
      );
    }
  }
});
var kr = U((Lu, et) => {
  var br = yr();
  et.exports = br(Ge);
  et.exports.strict = br(vr);
  Ge.proto = Ge(function () {
    Object.defineProperty(Function.prototype, "once", {
      value: function () {
        return Ge(this);
      },
      configurable: !0,
    }),
      Object.defineProperty(Function.prototype, "onceStrict", {
        value: function () {
          return vr(this);
        },
        configurable: !0,
      });
  });
  function Ge(e) {
    var t = function () {
      return t.called
        ? t.value
        : ((t.called = !0), (t.value = e.apply(this, arguments)));
    };
    return (t.called = !1), t;
  }
  function vr(e) {
    var t = function () {
        if (t.called) throw new Error(t.onceError);
        return (t.called = !0), (t.value = e.apply(this, arguments));
      },
      r = e.name || "Function wrapped with `once`";
    return (
      (t.onceError = r + " shouldn't be called more than once"),
      (t.called = !1),
      t
    );
  }
});
var _e = {};
ee(_e, { RequestError: () => z });
var tt,
  rt,
  _n,
  Tn,
  z,
  J = B(() => {
    (tt = S(Ze())),
      (rt = S(kr())),
      (_n = (0, rt.default)((e) => console.warn(e))),
      (Tn = (0, rt.default)((e) => console.warn(e))),
      (z = class extends Error {
        constructor(e, t, r) {
          super(e),
            Error.captureStackTrace &&
              Error.captureStackTrace(this, this.constructor),
            (this.name = "HttpError"),
            (this.status = t);
          let s;
          "headers" in r && typeof r.headers < "u" && (s = r.headers),
            "response" in r &&
              ((this.response = r.response), (s = r.response.headers));
          let o = Object.assign({}, r.request);
          r.request.headers.authorization &&
            (o.headers = Object.assign({}, r.request.headers, {
              authorization: r.request.headers.authorization.replace(
                / .*$/,
                " [REDACTED]"
              ),
            })),
            (o.url = o.url
              .replace(/\bclient_secret=\w+/g, "client_secret=[REDACTED]")
              .replace(/\baccess_token=\w+/g, "access_token=[REDACTED]")),
            (this.request = o),
            Object.defineProperty(this, "code", {
              get() {
                return (
                  _n(
                    new tt.Deprecation(
                      "[@octokit/request-error] `error.code` is deprecated, use `error.status`."
                    )
                  ),
                  t
                );
              },
            }),
            Object.defineProperty(this, "headers", {
              get() {
                return (
                  Tn(
                    new tt.Deprecation(
                      "[@octokit/request-error] `error.headers` is deprecated, use `error.response.headers`."
                    )
                  ),
                  s || {}
                );
              },
            });
        }
      });
  });
var L = {};
ee(L, { request: () => te });
function wn(e) {
  if (
    typeof e != "object" ||
    e === null ||
    Object.prototype.toString.call(e) !== "[object Object]"
  )
    return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r =
    Object.prototype.hasOwnProperty.call(t, "constructor") && t.constructor;
  return (
    typeof r == "function" &&
    r instanceof r &&
    Function.prototype.call(r) === Function.prototype.call(e)
  );
}
function yn(e) {
  return e.arrayBuffer();
}
function Ar(e) {
  let t = e.request && e.request.log ? e.request.log : console,
    r = e.request?.parseSuccessResponseBody !== !1;
  (wn(e.body) || Array.isArray(e.body)) && (e.body = JSON.stringify(e.body));
  let s = {},
    o,
    n,
    { fetch: a } = globalThis;
  if ((e.request?.fetch && (a = e.request.fetch), !a))
    throw new Error(
      "fetch is not set. Please pass a fetch implementation as new Octokit({ request: { fetch }}). Learn more at https://github.com/octokit/octokit.js/#fetch-missing"
    );
  return a(e.url, {
    method: e.method,
    body: e.body,
    headers: e.headers,
    signal: e.request?.signal,
    ...(e.body && { duplex: "half" }),
  })
    .then(async (c) => {
      (n = c.url), (o = c.status);
      for (let u of c.headers) s[u[0]] = u[1];
      if ("deprecation" in s) {
        let u = s.link && s.link.match(/<([^>]+)>; rel="deprecation"/),
          f = u && u.pop();
        t.warn(
          `[@octokit/request] "${e.method} ${
            e.url
          }" is deprecated. It is scheduled to be removed on ${s.sunset}${
            f ? `. See ${f}` : ""
          }`
        );
      }
      if (!(o === 204 || o === 205)) {
        if (e.method === "HEAD") {
          if (o < 400) return;
          throw new z(c.statusText, o, {
            response: { url: n, status: o, headers: s, data: void 0 },
            request: e,
          });
        }
        if (o === 304)
          throw new z("Not modified", o, {
            response: { url: n, status: o, headers: s, data: await st(c) },
            request: e,
          });
        if (o >= 400) {
          let u = await st(c);
          throw new z(bn(u), o, {
            response: { url: n, status: o, headers: s, data: u },
            request: e,
          });
        }
        return r ? await st(c) : c.body;
      }
    })
    .then((c) => ({ status: o, url: n, headers: s, data: c }))
    .catch((c) => {
      if (c instanceof z) throw c;
      if (c.name === "AbortError") throw c;
      let u = c.message;
      throw (
        (c.name === "TypeError" &&
          "cause" in c &&
          (c.cause instanceof Error
            ? (u = c.cause.message)
            : typeof c.cause == "string" && (u = c.cause)),
        new z(u, 500, { request: e }))
      );
    });
}
async function st(e) {
  let t = e.headers.get("content-type");
  return /application\/json/.test(t)
    ? e
        .json()
        .catch(() => e.text())
        .catch(() => "")
    : !t || /^text\/|charset=utf-8$/.test(t)
    ? e.text()
    : yn(e);
}
function bn(e) {
  return typeof e == "string"
    ? e
    : "message" in e
    ? Array.isArray(e.errors)
      ? `${e.message}: ${e.errors.map(JSON.stringify).join(", ")}`
      : e.message
    : `Unknown error: ${JSON.stringify(e)}`;
}
function ot(e, t) {
  let r = e.defaults(t);
  return Object.assign(
    function (o, n) {
      let a = r.merge(o, n);
      if (!a.request || !a.request.hook) return Ar(r.parse(a));
      let c = (u, f) => Ar(r.parse(r.merge(u, f)));
      return (
        Object.assign(c, { endpoint: r, defaults: ot.bind(null, r) }),
        a.request.hook(c, a)
      );
    },
    { endpoint: r, defaults: ot.bind(null, r) }
  );
}
var Gr,
  En,
  te,
  C = B(() => {
    Tr();
    Gr = S(H());
    J();
    En = "8.1.6";
    te = ot(_r, {
      headers: {
        "user-agent": `octokit-request.js/${En} ${(0, Gr.getUserAgent)()}`,
      },
    });
  });
var Fr = U((Mu, Rr) => {
  "use strict";
  var nt = Object.defineProperty,
    vn = Object.getOwnPropertyDescriptor,
    kn = Object.getOwnPropertyNames,
    An = Object.prototype.hasOwnProperty,
    Gn = (e, t) => {
      for (var r in t) nt(e, r, { get: t[r], enumerable: !0 });
    },
    Sn = (e, t, r, s) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let o of kn(t))
          !An.call(e, o) &&
            o !== r &&
            nt(e, o, {
              get: () => t[o],
              enumerable: !(s = vn(t, o)) || s.enumerable,
            });
      return e;
    },
    On = (e) => Sn(nt({}, "__esModule", { value: !0 }), e),
    Or = {};
  Gn(Or, {
    GraphqlResponseError: () => Pr,
    graphql: () => jn,
    withCustomRequest: () => qn,
  });
  Rr.exports = On(Or);
  var Pn = (C(), k(L)),
    Rn = H(),
    Fn = "7.0.2",
    Hu = (C(), k(L)),
    zu = (C(), k(L));
  function Un(e) {
    return (
      `Request failed due to following response errors:
` +
      e.errors.map((t) => ` - ${t.message}`).join(`
`)
    );
  }
  var Pr = class extends Error {
      constructor(e, t, r) {
        super(Un(r)),
          (this.request = e),
          (this.headers = t),
          (this.response = r),
          (this.name = "GraphqlResponseError"),
          (this.errors = r.errors),
          (this.data = r.data),
          Error.captureStackTrace &&
            Error.captureStackTrace(this, this.constructor);
      }
    },
    Cn = [
      "method",
      "baseUrl",
      "url",
      "headers",
      "request",
      "query",
      "mediaType",
    ],
    Dn = ["query", "method", "url"],
    Sr = /\/api\/v3\/?$/;
  function In(e, t, r) {
    if (r) {
      if (typeof t == "string" && "query" in r)
        return Promise.reject(
          new Error(
            '[@octokit/graphql] "query" cannot be used as variable name'
          )
        );
      for (let a in r)
        if (Dn.includes(a))
          return Promise.reject(
            new Error(
              `[@octokit/graphql] "${a}" cannot be used as variable name`
            )
          );
    }
    let s = typeof t == "string" ? Object.assign({ query: t }, r) : t,
      o = Object.keys(s).reduce(
        (a, c) =>
          Cn.includes(c)
            ? ((a[c] = s[c]), a)
            : (a.variables || (a.variables = {}), (a.variables[c] = s[c]), a),
        {}
      ),
      n = s.baseUrl || e.endpoint.DEFAULTS.baseUrl;
    return (
      Sr.test(n) && (o.url = n.replace(Sr, "/api/graphql")),
      e(o).then((a) => {
        if (a.data.errors) {
          let c = {};
          for (let u of Object.keys(a.headers)) c[u] = a.headers[u];
          throw new Pr(o, c, a.data);
        }
        return a.data.data;
      })
    );
  }
  function it(e, t) {
    let r = e.defaults(t);
    return Object.assign((o, n) => In(r, o, n), {
      defaults: it.bind(null, r),
      endpoint: r.endpoint,
    });
  }
  var jn = it(Pn.request, {
    headers: {
      "user-agent": `octokit-graphql.js/${Fn} ${(0, Rn.getUserAgent)()}`,
    },
    method: "POST",
    url: "/graphql",
  });
  function qn(e) {
    return it(e, { method: "POST", url: "/graphql" });
  }
});
var Ur = {};
ee(Ur, { createTokenAuth: () => Mn });
async function Wn(e) {
  let t = e.split(/\./).length === 3,
    r = Ln.test(e) || xn.test(e),
    s = $n.test(e);
  return {
    type: "token",
    token: e,
    tokenType: t ? "app" : r ? "installation" : s ? "user-to-server" : "oauth",
  };
}
function Hn(e) {
  return e.split(/\./).length === 3 ? `bearer ${e}` : `token ${e}`;
}
async function zn(e, t, r, s) {
  let o = t.endpoint.merge(r, s);
  return (o.headers.authorization = Hn(e)), t(o);
}
var Ln,
  xn,
  $n,
  Mn,
  Cr = B(() => {
    (Ln = /^v1\./), (xn = /^ghs_/), ($n = /^ghu_/);
    Mn = function (t) {
      if (!t)
        throw new Error(
          "[@octokit/auth-token] No token passed to createTokenAuth"
        );
      if (typeof t != "string")
        throw new Error(
          "[@octokit/auth-token] Token passed to createTokenAuth is not a string"
        );
      return (
        (t = t.replace(/^(token|bearer) +/i, "")),
        Object.assign(Wn.bind(null, t), { hook: zn.bind(null, t) })
      );
    };
  });
var Se = U((Bu, xr) => {
  "use strict";
  var at = Object.defineProperty,
    Nn = Object.getOwnPropertyDescriptor,
    Bn = Object.getOwnPropertyNames,
    Vn = Object.prototype.hasOwnProperty,
    Kn = (e, t) => {
      for (var r in t) at(e, r, { get: t[r], enumerable: !0 });
    },
    Jn = (e, t, r, s) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let o of Bn(t))
          !Vn.call(e, o) &&
            o !== r &&
            at(e, o, {
              get: () => t[o],
              enumerable: !(s = Nn(t, o)) || s.enumerable,
            });
      return e;
    },
    Qn = (e) => Jn(at({}, "__esModule", { value: !0 }), e),
    qr = {};
  Kn(qr, { Octokit: () => si });
  xr.exports = Qn(qr);
  var Yn = H(),
    Xn = ur(),
    Dr = (C(), k(L)),
    Zn = Fr(),
    ei = (Cr(), k(Ur)),
    Lr = "5.0.2",
    Ir = () => {},
    ti = console.warn.bind(console),
    ri = console.error.bind(console),
    jr = `octokit-core.js/${Lr} ${(0, Yn.getUserAgent)()}`,
    si = class {
      static {
        this.VERSION = Lr;
      }
      static defaults(e) {
        return class extends this {
          constructor(...r) {
            let s = r[0] || {};
            if (typeof e == "function") {
              super(e(s));
              return;
            }
            super(
              Object.assign(
                {},
                e,
                s,
                s.userAgent && e.userAgent
                  ? { userAgent: `${s.userAgent} ${e.userAgent}` }
                  : null
              )
            );
          }
        };
      }
      static {
        this.plugins = [];
      }
      static plugin(...e) {
        let t = this.plugins;
        return class extends this {
          static {
            this.plugins = t.concat(e.filter((s) => !t.includes(s)));
          }
        };
      }
      constructor(e = {}) {
        let t = new Xn.Collection(),
          r = {
            baseUrl: Dr.request.endpoint.DEFAULTS.baseUrl,
            headers: {},
            request: Object.assign({}, e.request, {
              hook: t.bind(null, "request"),
            }),
            mediaType: { previews: [], format: "" },
          };
        if (
          ((r.headers["user-agent"] = e.userAgent
            ? `${e.userAgent} ${jr}`
            : jr),
          e.baseUrl && (r.baseUrl = e.baseUrl),
          e.previews && (r.mediaType.previews = e.previews),
          e.timeZone && (r.headers["time-zone"] = e.timeZone),
          (this.request = Dr.request.defaults(r)),
          (this.graphql = (0, Zn.withCustomRequest)(this.request).defaults(r)),
          (this.log = Object.assign(
            { debug: Ir, info: Ir, warn: ti, error: ri },
            e.log
          )),
          (this.hook = t),
          e.authStrategy)
        ) {
          let { authStrategy: o, ...n } = e,
            a = o(
              Object.assign(
                {
                  request: this.request,
                  log: this.log,
                  octokit: this,
                  octokitOptions: n,
                },
                e.auth
              )
            );
          t.wrap("request", a.hook), (this.auth = a);
        } else if (!e.auth)
          this.auth = async () => ({ type: "unauthenticated" });
        else {
          let o = (0, ei.createTokenAuth)(e.auth);
          t.wrap("request", o.hook), (this.auth = o);
        }
        let s = this.constructor;
        for (let o = 0; o < s.plugins.length; ++o)
          Object.assign(this, s.plugins[o](this, e));
      }
    };
});
var gt = U((dt, ht) => {
  (function (e, t) {
    typeof dt == "object" && typeof ht < "u"
      ? (ht.exports = t())
      : typeof define == "function" && define.amd
      ? define(t)
      : (e.Bottleneck = t());
  })(dt, function () {
    "use strict";
    var e =
      typeof globalThis < "u"
        ? globalThis
        : typeof window < "u"
        ? window
        : typeof __global$ < "u"
        ? __global$
        : typeof self < "u"
        ? self
        : {};
    function t(w) {
      return (w && w.default) || w;
    }
    var r = function (w, l, i = {}) {
        var p, d, h;
        for (p in l) (h = l[p]), (i[p] = (d = w[p]) != null ? d : h);
        return i;
      },
      s = function (w, l, i = {}) {
        var p, d;
        for (p in w) (d = w[p]), l[p] !== void 0 && (i[p] = d);
        return i;
      },
      o = { load: r, overwrite: s },
      n;
    n = class {
      constructor(l, i) {
        (this.incr = l),
          (this.decr = i),
          (this._first = null),
          (this._last = null),
          (this.length = 0);
      }
      push(l) {
        var i;
        this.length++,
          typeof this.incr == "function" && this.incr(),
          (i = { value: l, prev: this._last, next: null }),
          this._last != null
            ? ((this._last.next = i), (this._last = i))
            : (this._first = this._last = i);
      }
      shift() {
        var l;
        if (this._first != null)
          return (
            this.length--,
            typeof this.decr == "function" && this.decr(),
            (l = this._first.value),
            (this._first = this._first.next) != null
              ? (this._first.prev = null)
              : (this._last = null),
            l
          );
      }
      first() {
        if (this._first != null) return this._first.value;
      }
      getArray() {
        var l, i, p;
        for (l = this._first, p = []; l != null; )
          p.push(((i = l), (l = l.next), i.value));
        return p;
      }
      forEachShift(l) {
        var i;
        for (i = this.shift(); i != null; ) l(i), (i = this.shift());
      }
      debug() {
        var l, i, p, d, h;
        for (l = this._first, h = []; l != null; )
          h.push(
            ((i = l),
            (l = l.next),
            {
              value: i.value,
              prev: (p = i.prev) != null ? p.value : void 0,
              next: (d = i.next) != null ? d.value : void 0,
            })
          );
        return h;
      }
    };
    var a = n,
      c;
    c = class {
      constructor(l) {
        if (
          ((this.instance = l),
          (this._events = {}),
          this.instance.on != null ||
            this.instance.once != null ||
            this.instance.removeAllListeners != null)
        )
          throw new Error("An Emitter already exists for this object");
        (this.instance.on = (i, p) => this._addListener(i, "many", p)),
          (this.instance.once = (i, p) => this._addListener(i, "once", p)),
          (this.instance.removeAllListeners = (i = null) =>
            i != null ? delete this._events[i] : (this._events = {}));
      }
      _addListener(l, i, p) {
        var d;
        return (
          (d = this._events)[l] == null && (d[l] = []),
          this._events[l].push({ cb: p, status: i }),
          this.instance
        );
      }
      listenerCount(l) {
        return this._events[l] != null ? this._events[l].length : 0;
      }
      async trigger(l, ...i) {
        var p, d;
        try {
          return (
            l !== "debug" && this.trigger("debug", `Event triggered: ${l}`, i),
            this._events[l] == null
              ? void 0
              : ((this._events[l] = this._events[l].filter(function (h) {
                  return h.status !== "none";
                })),
                (d = this._events[l].map(async (h) => {
                  var g, T;
                  if (h.status !== "none") {
                    h.status === "once" && (h.status = "none");
                    try {
                      return (
                        (T = typeof h.cb == "function" ? h.cb(...i) : void 0),
                        typeof T?.then == "function" ? await T : T
                      );
                    } catch (G) {
                      return (g = G), this.trigger("error", g), null;
                    }
                  }
                })),
                (await Promise.all(d)).find(function (h) {
                  return h != null;
                }))
          );
        } catch (h) {
          return (p = h), this.trigger("error", p), null;
        }
      }
    };
    var u = c,
      f,
      _,
      m;
    (f = a),
      (_ = u),
      (m = class {
        constructor(l) {
          var i;
          (this.Events = new _(this)),
            (this._length = 0),
            (this._lists = function () {
              var p, d, h;
              for (
                h = [], i = p = 1, d = l;
                1 <= d ? p <= d : p >= d;
                i = 1 <= d ? ++p : --p
              )
                h.push(
                  new f(
                    () => this.incr(),
                    () => this.decr()
                  )
                );
              return h;
            }.call(this));
        }
        incr() {
          if (this._length++ === 0) return this.Events.trigger("leftzero");
        }
        decr() {
          if (--this._length === 0) return this.Events.trigger("zero");
        }
        push(l) {
          return this._lists[l.options.priority].push(l);
        }
        queued(l) {
          return l != null ? this._lists[l].length : this._length;
        }
        shiftAll(l) {
          return this._lists.forEach(function (i) {
            return i.forEachShift(l);
          });
        }
        getFirst(l = this._lists) {
          var i, p, d;
          for (i = 0, p = l.length; i < p; i++)
            if (((d = l[i]), d.length > 0)) return d;
          return [];
        }
        shiftLastFrom(l) {
          return this.getFirst(this._lists.slice(l).reverse()).shift();
        }
      });
    var E = m,
      y;
    y = class extends Error {};
    var R = y,
      b,
      F,
      v,
      A,
      D;
    (A = 10),
      (F = 5),
      (D = o),
      (b = R),
      (v = class {
        constructor(l, i, p, d, h, g, T, G) {
          (this.task = l),
            (this.args = i),
            (this.rejectOnDrop = h),
            (this.Events = g),
            (this._states = T),
            (this.Promise = G),
            (this.options = D.load(p, d)),
            (this.options.priority = this._sanitizePriority(
              this.options.priority
            )),
            this.options.id === d.id &&
              (this.options.id = `${this.options.id}-${this._randomIndex()}`),
            (this.promise = new this.Promise((I, q) => {
              (this._resolve = I), (this._reject = q);
            })),
            (this.retryCount = 0);
        }
        _sanitizePriority(l) {
          var i;
          return (i = ~~l !== l ? F : l), i < 0 ? 0 : i > A - 1 ? A - 1 : i;
        }
        _randomIndex() {
          return Math.random().toString(36).slice(2);
        }
        doDrop({
          error: l,
          message: i = "This job has been dropped by Bottleneck",
        } = {}) {
          return this._states.remove(this.options.id)
            ? (this.rejectOnDrop && this._reject(l ?? new b(i)),
              this.Events.trigger("dropped", {
                args: this.args,
                options: this.options,
                task: this.task,
                promise: this.promise,
              }),
              !0)
            : !1;
        }
        _assertStatus(l) {
          var i;
          if (
            ((i = this._states.jobStatus(this.options.id)),
            !(i === l || (l === "DONE" && i === null)))
          )
            throw new b(
              `Invalid job status ${i}, expected ${l}. Please open an issue at https://github.com/SGrondin/bottleneck/issues`
            );
        }
        doReceive() {
          return (
            this._states.start(this.options.id),
            this.Events.trigger("received", {
              args: this.args,
              options: this.options,
            })
          );
        }
        doQueue(l, i) {
          return (
            this._assertStatus("RECEIVED"),
            this._states.next(this.options.id),
            this.Events.trigger("queued", {
              args: this.args,
              options: this.options,
              reachedHWM: l,
              blocked: i,
            })
          );
        }
        doRun() {
          return (
            this.retryCount === 0
              ? (this._assertStatus("QUEUED"),
                this._states.next(this.options.id))
              : this._assertStatus("EXECUTING"),
            this.Events.trigger("scheduled", {
              args: this.args,
              options: this.options,
            })
          );
        }
        async doExecute(l, i, p, d) {
          var h, g, T;
          this.retryCount === 0
            ? (this._assertStatus("RUNNING"),
              this._states.next(this.options.id))
            : this._assertStatus("EXECUTING"),
            (g = {
              args: this.args,
              options: this.options,
              retryCount: this.retryCount,
            }),
            this.Events.trigger("executing", g);
          try {
            if (
              ((T = await (l != null
                ? l.schedule(this.options, this.task, ...this.args)
                : this.task(...this.args))),
              i())
            )
              return (
                this.doDone(g),
                await d(this.options, g),
                this._assertStatus("DONE"),
                this._resolve(T)
              );
          } catch (G) {
            return (h = G), this._onFailure(h, g, i, p, d);
          }
        }
        doExpire(l, i, p) {
          var d, h;
          return (
            this._states.jobStatus(this.options.id === "RUNNING") &&
              this._states.next(this.options.id),
            this._assertStatus("EXECUTING"),
            (h = {
              args: this.args,
              options: this.options,
              retryCount: this.retryCount,
            }),
            (d = new b(
              `This job timed out after ${this.options.expiration} ms.`
            )),
            this._onFailure(d, h, l, i, p)
          );
        }
        async _onFailure(l, i, p, d, h) {
          var g, T;
          if (p())
            return (
              (g = await this.Events.trigger("failed", l, i)),
              g != null
                ? ((T = ~~g),
                  this.Events.trigger(
                    "retry",
                    `Retrying ${this.options.id} after ${T} ms`,
                    i
                  ),
                  this.retryCount++,
                  d(T))
                : (this.doDone(i),
                  await h(this.options, i),
                  this._assertStatus("DONE"),
                  this._reject(l))
            );
        }
        doDone(l) {
          return (
            this._assertStatus("EXECUTING"),
            this._states.next(this.options.id),
            this.Events.trigger("done", l)
          );
        }
      });
    var P = v,
      O,
      j,
      x;
    (x = o),
      (O = R),
      (j = class {
        constructor(l, i, p) {
          (this.instance = l),
            (this.storeOptions = i),
            (this.clientId = this.instance._randomIndex()),
            x.load(p, p, this),
            (this._nextRequest =
              this._lastReservoirRefresh =
              this._lastReservoirIncrease =
                Date.now()),
            (this._running = 0),
            (this._done = 0),
            (this._unblockTime = 0),
            (this.ready = this.Promise.resolve()),
            (this.clients = {}),
            this._startHeartbeat();
        }
        _startHeartbeat() {
          var l;
          return this.heartbeat == null &&
            ((this.storeOptions.reservoirRefreshInterval != null &&
              this.storeOptions.reservoirRefreshAmount != null) ||
              (this.storeOptions.reservoirIncreaseInterval != null &&
                this.storeOptions.reservoirIncreaseAmount != null))
            ? typeof (l = this.heartbeat =
                setInterval(() => {
                  var i, p, d, h, g;
                  if (
                    ((h = Date.now()),
                    this.storeOptions.reservoirRefreshInterval != null &&
                      h >=
                        this._lastReservoirRefresh +
                          this.storeOptions.reservoirRefreshInterval &&
                      ((this._lastReservoirRefresh = h),
                      (this.storeOptions.reservoir =
                        this.storeOptions.reservoirRefreshAmount),
                      this.instance._drainAll(this.computeCapacity())),
                    this.storeOptions.reservoirIncreaseInterval != null &&
                      h >=
                        this._lastReservoirIncrease +
                          this.storeOptions.reservoirIncreaseInterval &&
                      (({
                        reservoirIncreaseAmount: i,
                        reservoirIncreaseMaximum: d,
                        reservoir: g,
                      } = this.storeOptions),
                      (this._lastReservoirIncrease = h),
                      (p = d != null ? Math.min(i, d - g) : i),
                      p > 0))
                  )
                    return (
                      (this.storeOptions.reservoir += p),
                      this.instance._drainAll(this.computeCapacity())
                    );
                }, this.heartbeatInterval)).unref == "function"
              ? l.unref()
              : void 0
            : clearInterval(this.heartbeat);
        }
        async __publish__(l) {
          return (
            await this.yieldLoop(),
            this.instance.Events.trigger("message", l.toString())
          );
        }
        async __disconnect__(l) {
          return (
            await this.yieldLoop(),
            clearInterval(this.heartbeat),
            this.Promise.resolve()
          );
        }
        yieldLoop(l = 0) {
          return new this.Promise(function (i, p) {
            return setTimeout(i, l);
          });
        }
        computePenalty() {
          var l;
          return (l = this.storeOptions.penalty) != null
            ? l
            : 15 * this.storeOptions.minTime || 5e3;
        }
        async __updateSettings__(l) {
          return (
            await this.yieldLoop(),
            x.overwrite(l, l, this.storeOptions),
            this._startHeartbeat(),
            this.instance._drainAll(this.computeCapacity()),
            !0
          );
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
        async __groupCheck__(l) {
          return await this.yieldLoop(), this._nextRequest + this.timeout < l;
        }
        computeCapacity() {
          var l, i;
          return (
            ({ maxConcurrent: l, reservoir: i } = this.storeOptions),
            l != null && i != null
              ? Math.min(l - this._running, i)
              : l != null
              ? l - this._running
              : i ?? null
          );
        }
        conditionsCheck(l) {
          var i;
          return (i = this.computeCapacity()), i == null || l <= i;
        }
        async __incrementReservoir__(l) {
          var i;
          return (
            await this.yieldLoop(),
            (i = this.storeOptions.reservoir += l),
            this.instance._drainAll(this.computeCapacity()),
            i
          );
        }
        async __currentReservoir__() {
          return await this.yieldLoop(), this.storeOptions.reservoir;
        }
        isBlocked(l) {
          return this._unblockTime >= l;
        }
        check(l, i) {
          return this.conditionsCheck(l) && this._nextRequest - i <= 0;
        }
        async __check__(l) {
          var i;
          return await this.yieldLoop(), (i = Date.now()), this.check(l, i);
        }
        async __register__(l, i, p) {
          var d, h;
          return (
            await this.yieldLoop(),
            (d = Date.now()),
            this.conditionsCheck(i)
              ? ((this._running += i),
                this.storeOptions.reservoir != null &&
                  (this.storeOptions.reservoir -= i),
                (h = Math.max(this._nextRequest - d, 0)),
                (this._nextRequest = d + h + this.storeOptions.minTime),
                {
                  success: !0,
                  wait: h,
                  reservoir: this.storeOptions.reservoir,
                })
              : { success: !1 }
          );
        }
        strategyIsBlock() {
          return this.storeOptions.strategy === 3;
        }
        async __submit__(l, i) {
          var p, d, h;
          if (
            (await this.yieldLoop(),
            this.storeOptions.maxConcurrent != null &&
              i > this.storeOptions.maxConcurrent)
          )
            throw new O(
              `Impossible to add a job having a weight of ${i} to a limiter having a maxConcurrent setting of ${this.storeOptions.maxConcurrent}`
            );
          return (
            (d = Date.now()),
            (h =
              this.storeOptions.highWater != null &&
              l === this.storeOptions.highWater &&
              !this.check(i, d)),
            (p = this.strategyIsBlock() && (h || this.isBlocked(d))),
            p &&
              ((this._unblockTime = d + this.computePenalty()),
              (this._nextRequest =
                this._unblockTime + this.storeOptions.minTime),
              this.instance._dropAllQueued()),
            { reachedHWM: h, blocked: p, strategy: this.storeOptions.strategy }
          );
        }
        async __free__(l, i) {
          return (
            await this.yieldLoop(),
            (this._running -= i),
            (this._done += i),
            this.instance._drainAll(this.computeCapacity()),
            { running: this._running }
          );
        }
      });
    var he = j,
      X,
      Z;
    (X = R),
      (Z = class {
        constructor(l) {
          (this.status = l),
            (this._jobs = {}),
            (this.counts = this.status.map(function () {
              return 0;
            }));
        }
        next(l) {
          var i, p;
          if (
            ((i = this._jobs[l]),
            (p = i + 1),
            i != null && p < this.status.length)
          )
            return this.counts[i]--, this.counts[p]++, this._jobs[l]++;
          if (i != null) return this.counts[i]--, delete this._jobs[l];
        }
        start(l) {
          var i;
          return (i = 0), (this._jobs[l] = i), this.counts[i]++;
        }
        remove(l) {
          var i;
          return (
            (i = this._jobs[l]),
            i != null && (this.counts[i]--, delete this._jobs[l]),
            i != null
          );
        }
        jobStatus(l) {
          var i;
          return (i = this.status[this._jobs[l]]) != null ? i : null;
        }
        statusJobs(l) {
          var i, p, d, h, g;
          if (l != null) {
            if (((p = this.status.indexOf(l)), p < 0))
              throw new X(`status must be one of ${this.status.join(", ")}`);
            (d = this._jobs), (h = []);
            for (i in d) (g = d[i]), g === p && h.push(i);
            return h;
          } else return Object.keys(this._jobs);
        }
        statusCounts() {
          return this.counts.reduce(
            (l, i, p) => ((l[this.status[p]] = i), l),
            {}
          );
        }
      });
    var Do = Z,
      St,
      Ot;
    (St = a),
      (Ot = class {
        constructor(l, i) {
          (this.schedule = this.schedule.bind(this)),
            (this.name = l),
            (this.Promise = i),
            (this._running = 0),
            (this._queue = new St());
        }
        isEmpty() {
          return this._queue.length === 0;
        }
        async _tryToRun() {
          var l, i, p, d, h, g, T;
          if (this._running < 1 && this._queue.length > 0)
            return (
              this._running++,
              ({
                task: T,
                args: l,
                resolve: h,
                reject: d,
              } = this._queue.shift()),
              (i = await (async function () {
                try {
                  return (
                    (g = await T(...l)),
                    function () {
                      return h(g);
                    }
                  );
                } catch (G) {
                  return (
                    (p = G),
                    function () {
                      return d(p);
                    }
                  );
                }
              })()),
              this._running--,
              this._tryToRun(),
              i()
            );
        }
        schedule(l, ...i) {
          var p, d, h;
          return (
            (h = d = null),
            (p = new this.Promise(function (g, T) {
              return (h = g), (d = T);
            })),
            this._queue.push({ task: l, args: i, resolve: h, reject: d }),
            this._tryToRun(),
            p
          );
        }
      });
    var Io = Ot,
      Pt = "2.19.5",
      jo = { version: Pt },
      qo = Object.freeze({ version: Pt, default: jo }),
      Rt = () =>
        console.log(
          "You must import the full version of Bottleneck in order to use this feature."
        ),
      Ft = () =>
        console.log(
          "You must import the full version of Bottleneck in order to use this feature."
        ),
      Lo = () =>
        console.log(
          "You must import the full version of Bottleneck in order to use this feature."
        ),
      Ut,
      Ct,
      Dt,
      It,
      jt,
      ke;
    (ke = o),
      (Ut = u),
      (It = Rt),
      (Dt = Ft),
      (jt = Lo),
      (Ct = function () {
        class w {
          constructor(i = {}) {
            (this.deleteKey = this.deleteKey.bind(this)),
              (this.limiterOptions = i),
              ke.load(this.limiterOptions, this.defaults, this),
              (this.Events = new Ut(this)),
              (this.instances = {}),
              (this.Bottleneck = Vt),
              this._startAutoCleanup(),
              (this.sharedConnection = this.connection != null),
              this.connection == null &&
                (this.limiterOptions.datastore === "redis"
                  ? (this.connection = new It(
                      Object.assign({}, this.limiterOptions, {
                        Events: this.Events,
                      })
                    ))
                  : this.limiterOptions.datastore === "ioredis" &&
                    (this.connection = new Dt(
                      Object.assign({}, this.limiterOptions, {
                        Events: this.Events,
                      })
                    )));
          }
          key(i = "") {
            var p;
            return (p = this.instances[i]) != null
              ? p
              : (() => {
                  var d;
                  return (
                    (d = this.instances[i] =
                      new this.Bottleneck(
                        Object.assign(this.limiterOptions, {
                          id: `${this.id}-${i}`,
                          timeout: this.timeout,
                          connection: this.connection,
                        })
                      )),
                    this.Events.trigger("created", d, i),
                    d
                  );
                })();
          }
          async deleteKey(i = "") {
            var p, d;
            return (
              (d = this.instances[i]),
              this.connection &&
                (p = await this.connection.__runCommand__([
                  "del",
                  ...jt.allKeys(`${this.id}-${i}`),
                ])),
              d != null && (delete this.instances[i], await d.disconnect()),
              d != null || p > 0
            );
          }
          limiters() {
            var i, p, d, h;
            (p = this.instances), (d = []);
            for (i in p) (h = p[i]), d.push({ key: i, limiter: h });
            return d;
          }
          keys() {
            return Object.keys(this.instances);
          }
          async clusterKeys() {
            var i, p, d, h, g, T, G, I, q;
            if (this.connection == null)
              return this.Promise.resolve(this.keys());
            for (T = [], i = null, q = `b_${this.id}-`.length, p = 9; i !== 0; )
              for (
                [I, d] = await this.connection.__runCommand__([
                  "scan",
                  i ?? 0,
                  "match",
                  `b_${this.id}-*_settings`,
                  "count",
                  1e4,
                ]),
                  i = ~~I,
                  h = 0,
                  G = d.length;
                h < G;
                h++
              )
                (g = d[h]), T.push(g.slice(q, -p));
            return T;
          }
          _startAutoCleanup() {
            var i;
            return (
              clearInterval(this.interval),
              typeof (i = this.interval =
                setInterval(async () => {
                  var p, d, h, g, T, G;
                  (T = Date.now()), (h = this.instances), (g = []);
                  for (d in h) {
                    G = h[d];
                    try {
                      (await G._store.__groupCheck__(T))
                        ? g.push(this.deleteKey(d))
                        : g.push(void 0);
                    } catch (I) {
                      (p = I), g.push(G.Events.trigger("error", p));
                    }
                  }
                  return g;
                }, this.timeout / 2)).unref == "function"
                ? i.unref()
                : void 0
            );
          }
          updateSettings(i = {}) {
            if (
              (ke.overwrite(i, this.defaults, this),
              ke.overwrite(i, i, this.limiterOptions),
              i.timeout != null)
            )
              return this._startAutoCleanup();
          }
          disconnect(i = !0) {
            var p;
            if (!this.sharedConnection)
              return (p = this.connection) != null ? p.disconnect(i) : void 0;
          }
        }
        return (
          (w.prototype.defaults = {
            timeout: 1e3 * 60 * 5,
            connection: null,
            Promise,
            id: "group-key",
          }),
          w
        );
      }.call(e));
    var xo = Ct,
      qt,
      Lt,
      xt;
    (xt = o),
      (Lt = u),
      (qt = function () {
        class w {
          constructor(i = {}) {
            (this.options = i),
              xt.load(this.options, this.defaults, this),
              (this.Events = new Lt(this)),
              (this._arr = []),
              this._resetPromise(),
              (this._lastFlush = Date.now());
          }
          _resetPromise() {
            return (this._promise = new this.Promise(
              (i, p) => (this._resolve = i)
            ));
          }
          _flush() {
            return (
              clearTimeout(this._timeout),
              (this._lastFlush = Date.now()),
              this._resolve(),
              this.Events.trigger("batch", this._arr),
              (this._arr = []),
              this._resetPromise()
            );
          }
          add(i) {
            var p;
            return (
              this._arr.push(i),
              (p = this._promise),
              this._arr.length === this.maxSize
                ? this._flush()
                : this.maxTime != null &&
                  this._arr.length === 1 &&
                  (this._timeout = setTimeout(
                    () => this._flush(),
                    this.maxTime
                  )),
              p
            );
          }
        }
        return (
          (w.prototype.defaults = { maxTime: null, maxSize: null, Promise }), w
        );
      }.call(e));
    var $o = qt,
      Wo = () =>
        console.log(
          "You must import the full version of Bottleneck in order to use this feature."
        ),
      Ho = t(qo),
      $t,
      Wt,
      Me,
      Ne,
      Ht,
      Be,
      zt,
      Mt,
      Nt,
      Ve,
      W,
      Bt = [].splice;
    (Be = 10),
      (Wt = 5),
      (W = o),
      (zt = E),
      (Ne = P),
      (Ht = he),
      (Mt = Wo),
      (Me = u),
      (Nt = Do),
      (Ve = Io),
      ($t = function () {
        class w {
          constructor(i = {}, ...p) {
            var d, h;
            (this._addToQueue = this._addToQueue.bind(this)),
              this._validateOptions(i, p),
              W.load(i, this.instanceDefaults, this),
              (this._queues = new zt(Be)),
              (this._scheduled = {}),
              (this._states = new Nt(
                ["RECEIVED", "QUEUED", "RUNNING", "EXECUTING"].concat(
                  this.trackDoneStatus ? ["DONE"] : []
                )
              )),
              (this._limiter = null),
              (this.Events = new Me(this)),
              (this._submitLock = new Ve("submit", this.Promise)),
              (this._registerLock = new Ve("register", this.Promise)),
              (h = W.load(i, this.storeDefaults, {})),
              (this._store = function () {
                if (
                  this.datastore === "redis" ||
                  this.datastore === "ioredis" ||
                  this.connection != null
                )
                  return (
                    (d = W.load(i, this.redisStoreDefaults, {})),
                    new Mt(this, h, d)
                  );
                if (this.datastore === "local")
                  return (
                    (d = W.load(i, this.localStoreDefaults, {})),
                    new Ht(this, h, d)
                  );
                throw new w.prototype.BottleneckError(
                  `Invalid datastore type: ${this.datastore}`
                );
              }.call(this)),
              this._queues.on("leftzero", () => {
                var g;
                return (g = this._store.heartbeat) != null &&
                  typeof g.ref == "function"
                  ? g.ref()
                  : void 0;
              }),
              this._queues.on("zero", () => {
                var g;
                return (g = this._store.heartbeat) != null &&
                  typeof g.unref == "function"
                  ? g.unref()
                  : void 0;
              });
          }
          _validateOptions(i, p) {
            if (!(i != null && typeof i == "object" && p.length === 0))
              throw new w.prototype.BottleneckError(
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
          disconnect(i = !0) {
            return this._store.__disconnect__(i);
          }
          chain(i) {
            return (this._limiter = i), this;
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
            return this._scheduled[i] != null
              ? (clearTimeout(this._scheduled[i].expiration),
                delete this._scheduled[i],
                !0)
              : !1;
          }
          async _free(i, p, d, h) {
            var g, T;
            try {
              if (
                (({ running: T } = await this._store.__free__(i, d.weight)),
                this.Events.trigger("debug", `Freed ${d.id}`, h),
                T === 0 && this.empty())
              )
                return this.Events.trigger("idle");
            } catch (G) {
              return (g = G), this.Events.trigger("error", g);
            }
          }
          _run(i, p, d) {
            var h, g, T;
            return (
              p.doRun(),
              (h = this._clearGlobalState.bind(this, i)),
              (T = this._run.bind(this, i, p)),
              (g = this._free.bind(this, i, p)),
              (this._scheduled[i] = {
                timeout: setTimeout(
                  () => p.doExecute(this._limiter, h, T, g),
                  d
                ),
                expiration:
                  p.options.expiration != null
                    ? setTimeout(function () {
                        return p.doExpire(h, T, g);
                      }, d + p.options.expiration)
                    : void 0,
                job: p,
              })
            );
          }
          _drainOne(i) {
            return this._registerLock.schedule(() => {
              var p, d, h, g, T;
              return this.queued() === 0
                ? this.Promise.resolve(null)
                : ((T = this._queues.getFirst()),
                  ({ options: g, args: p } = h = T.first()),
                  i != null && g.weight > i
                    ? this.Promise.resolve(null)
                    : (this.Events.trigger("debug", `Draining ${g.id}`, {
                        args: p,
                        options: g,
                      }),
                      (d = this._randomIndex()),
                      this._store
                        .__register__(d, g.weight, g.expiration)
                        .then(({ success: G, wait: I, reservoir: q }) => {
                          var ge;
                          return (
                            this.Events.trigger("debug", `Drained ${g.id}`, {
                              success: G,
                              args: p,
                              options: g,
                            }),
                            G
                              ? (T.shift(),
                                (ge = this.empty()),
                                ge && this.Events.trigger("empty"),
                                q === 0 && this.Events.trigger("depleted", ge),
                                this._run(d, h, I),
                                this.Promise.resolve(g.weight))
                              : this.Promise.resolve(null)
                          );
                        })));
            });
          }
          _drainAll(i, p = 0) {
            return this._drainOne(i)
              .then((d) => {
                var h;
                return d != null
                  ? ((h = i != null ? i - d : i), this._drainAll(h, p + d))
                  : this.Promise.resolve(p);
              })
              .catch((d) => this.Events.trigger("error", d));
          }
          _dropAllQueued(i) {
            return this._queues.shiftAll(function (p) {
              return p.doDrop({ message: i });
            });
          }
          stop(i = {}) {
            var p, d;
            return (
              (i = W.load(i, this.stopDefaults)),
              (d = (h) => {
                var g;
                return (
                  (g = () => {
                    var T;
                    return (
                      (T = this._states.counts), T[0] + T[1] + T[2] + T[3] === h
                    );
                  }),
                  new this.Promise((T, G) =>
                    g()
                      ? T()
                      : this.on("done", () => {
                          if (g()) return this.removeAllListeners("done"), T();
                        })
                  )
                );
              }),
              (p = i.dropWaitingJobs
                ? ((this._run = function (h, g) {
                    return g.doDrop({ message: i.dropErrorMessage });
                  }),
                  (this._drainOne = () => this.Promise.resolve(null)),
                  this._registerLock.schedule(() =>
                    this._submitLock.schedule(() => {
                      var h, g, T;
                      g = this._scheduled;
                      for (h in g)
                        (T = g[h]),
                          this.jobStatus(T.job.options.id) === "RUNNING" &&
                            (clearTimeout(T.timeout),
                            clearTimeout(T.expiration),
                            T.job.doDrop({ message: i.dropErrorMessage }));
                      return this._dropAllQueued(i.dropErrorMessage), d(0);
                    })
                  ))
                : this.schedule({ priority: Be - 1, weight: 0 }, () => d(1))),
              (this._receive = function (h) {
                return h._reject(
                  new w.prototype.BottleneckError(i.enqueueErrorMessage)
                );
              }),
              (this.stop = () =>
                this.Promise.reject(
                  new w.prototype.BottleneckError(
                    "stop() has already been called"
                  )
                )),
              p
            );
          }
          async _addToQueue(i) {
            var p, d, h, g, T, G, I;
            ({ args: p, options: g } = i);
            try {
              ({
                reachedHWM: T,
                blocked: d,
                strategy: I,
              } = await this._store.__submit__(this.queued(), g.weight));
            } catch (q) {
              return (
                (h = q),
                this.Events.trigger("debug", `Could not queue ${g.id}`, {
                  args: p,
                  options: g,
                  error: h,
                }),
                i.doDrop({ error: h }),
                !1
              );
            }
            return d
              ? (i.doDrop(), !0)
              : T &&
                ((G =
                  I === w.prototype.strategy.LEAK
                    ? this._queues.shiftLastFrom(g.priority)
                    : I === w.prototype.strategy.OVERFLOW_PRIORITY
                    ? this._queues.shiftLastFrom(g.priority + 1)
                    : I === w.prototype.strategy.OVERFLOW
                    ? i
                    : void 0),
                G?.doDrop(),
                G == null || I === w.prototype.strategy.OVERFLOW)
              ? (G == null && i.doDrop(), T)
              : (i.doQueue(T, d),
                this._queues.push(i),
                await this._drainAll(),
                T);
          }
          _receive(i) {
            return this._states.jobStatus(i.options.id) != null
              ? (i._reject(
                  new w.prototype.BottleneckError(
                    `A job with the same id already exists (id=${i.options.id})`
                  )
                ),
                !1)
              : (i.doReceive(), this._submitLock.schedule(this._addToQueue, i));
          }
          submit(...i) {
            var p, d, h, g, T, G, I;
            return (
              typeof i[0] == "function"
                ? ((T = i),
                  ([d, ...i] = T),
                  ([p] = Bt.call(i, -1)),
                  (g = W.load({}, this.jobDefaults)))
                : ((G = i),
                  ([g, d, ...i] = G),
                  ([p] = Bt.call(i, -1)),
                  (g = W.load(g, this.jobDefaults))),
              (I = (...q) =>
                new this.Promise(function (ge, Mo) {
                  return d(...q, function (...Kt) {
                    return (Kt[0] != null ? Mo : ge)(Kt);
                  });
                })),
              (h = new Ne(
                I,
                i,
                g,
                this.jobDefaults,
                this.rejectOnDrop,
                this.Events,
                this._states,
                this.Promise
              )),
              h.promise
                .then(function (q) {
                  return typeof p == "function" ? p(...q) : void 0;
                })
                .catch(function (q) {
                  return Array.isArray(q)
                    ? typeof p == "function"
                      ? p(...q)
                      : void 0
                    : typeof p == "function"
                    ? p(q)
                    : void 0;
                }),
              this._receive(h)
            );
          }
          schedule(...i) {
            var p, d, h;
            return (
              typeof i[0] == "function"
                ? (([h, ...i] = i), (d = {}))
                : ([d, h, ...i] = i),
              (p = new Ne(
                h,
                i,
                d,
                this.jobDefaults,
                this.rejectOnDrop,
                this.Events,
                this._states,
                this.Promise
              )),
              this._receive(p),
              p.promise
            );
          }
          wrap(i) {
            var p, d;
            return (
              (p = this.schedule.bind(this)),
              (d = function (...h) {
                return p(i.bind(this), ...h);
              }),
              (d.withOptions = function (h, ...g) {
                return p(h, i, ...g);
              }),
              d
            );
          }
          async updateSettings(i = {}) {
            return (
              await this._store.__updateSettings__(
                W.overwrite(i, this.storeDefaults)
              ),
              W.overwrite(i, this.instanceDefaults, this),
              this
            );
          }
          currentReservoir() {
            return this._store.__currentReservoir__();
          }
          incrementReservoir(i = 0) {
            return this._store.__incrementReservoir__(i);
          }
        }
        return (
          (w.default = w),
          (w.Events = Me),
          (w.version = w.prototype.version = Ho.version),
          (w.strategy = w.prototype.strategy =
            { LEAK: 1, OVERFLOW: 2, OVERFLOW_PRIORITY: 4, BLOCK: 3 }),
          (w.BottleneckError = w.prototype.BottleneckError = R),
          (w.Group = w.prototype.Group = xo),
          (w.RedisConnection = w.prototype.RedisConnection = Rt),
          (w.IORedisConnection = w.prototype.IORedisConnection = Ft),
          (w.Batcher = w.prototype.Batcher = $o),
          (w.prototype.jobDefaults = {
            priority: Wt,
            weight: 1,
            expiration: null,
            id: "<no-id>",
          }),
          (w.prototype.storeDefaults = {
            maxConcurrent: null,
            minTime: 0,
            highWater: null,
            strategy: w.prototype.strategy.LEAK,
            penalty: null,
            reservoir: null,
            reservoirRefreshInterval: null,
            reservoirRefreshAmount: null,
            reservoirIncreaseInterval: null,
            reservoirIncreaseAmount: null,
            reservoirIncreaseMaximum: null,
          }),
          (w.prototype.localStoreDefaults = {
            Promise,
            timeout: null,
            heartbeatInterval: 250,
          }),
          (w.prototype.redisStoreDefaults = {
            Promise,
            timeout: null,
            heartbeatInterval: 5e3,
            clientTimeout: 1e4,
            Redis: null,
            clientOptions: {},
            clusterNodes: null,
            clearDatastore: !1,
            connection: null,
          }),
          (w.prototype.instanceDefaults = {
            datastore: "local",
            connection: null,
            id: "<no-id>",
            rejectOnDrop: !0,
            trackDoneStatus: !1,
            Promise,
          }),
          (w.prototype.stopDefaults = {
            enqueueErrorMessage:
              "This limiter has been stopped and cannot accept new jobs.",
            dropWaitingJobs: !0,
            dropErrorMessage: "This limiter has been stopped.",
          }),
          w
        );
      }.call(e));
    var Vt = $t,
      zo = Vt;
    return zo;
  });
});
var V = U((dl, es) => {
  es.exports = function (t) {
    return btoa(t);
  };
});
var ts = {};
ee(ts, { oauthAuthorizationUrl: () => Pi });
function Pi(e) {
  let t = e.clientType || "oauth-app",
    r = e.baseUrl || "https://github.com",
    s = {
      clientType: t,
      allowSignup: e.allowSignup !== !1,
      clientId: e.clientId,
      login: e.login || null,
      redirectUrl: e.redirectUrl || null,
      state: e.state || Math.random().toString(36).substr(2),
      url: "",
    };
  if (t === "oauth-app") {
    let o = "scopes" in e ? e.scopes : [];
    s.scopes = typeof o == "string" ? o.split(/[,\s]+/).filter(Boolean) : o;
  }
  return (s.url = Ri(`${r}/login/oauth/authorize`, s)), s;
}
function Ri(e, t) {
  let r = {
      allowSignup: "allow_signup",
      clientId: "client_id",
      login: "login",
      redirectUrl: "redirect_uri",
      scopes: "scope",
      state: "state",
    },
    s = e;
  return (
    Object.keys(r)
      .filter((o) => t[o] !== null)
      .filter((o) =>
        o !== "scopes"
          ? !0
          : t.clientType === "github-app"
          ? !1
          : !Array.isArray(t[o]) || t[o].length > 0
      )
      .map((o) => [r[o], `${t[o]}`])
      .forEach(([o, n], a) => {
        (s += a === 0 ? "?" : "&"), (s += `${o}=${encodeURIComponent(n)}`);
      }),
    s
  );
}
var rs = B(() => {});
var $ = U((hl, us) => {
  "use strict";
  var Fi = Object.create,
    Re = Object.defineProperty,
    Ui = Object.getOwnPropertyDescriptor,
    Ci = Object.getOwnPropertyNames,
    Di = Object.getPrototypeOf,
    Ii = Object.prototype.hasOwnProperty,
    ji = (e, t) => {
      for (var r in t) Re(e, r, { get: t[r], enumerable: !0 });
    },
    is = (e, t, r, s) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let o of Ci(t))
          !Ii.call(e, o) &&
            o !== r &&
            Re(e, o, {
              get: () => t[o],
              enumerable: !(s = Ui(t, o)) || s.enumerable,
            });
      return e;
    },
    Ee = (e, t, r) => (
      (r = e != null ? Fi(Di(e)) : {}),
      is(
        t || !e || !e.__esModule
          ? Re(r, "default", { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    qi = (e) => is(Re({}, "__esModule", { value: !0 }), e),
    as = {};
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
    scopeToken: () => ra,
  });
  us.exports = qi(as);
  var Li = "4.0.0",
    xi = (rs(), k(ts)),
    $i = (C(), k(L)),
    Wi = (J(), k(_e));
  function cs(e) {
    let t = e.endpoint.DEFAULTS;
    return /^https:\/\/(api\.)?github\.com$/.test(t.baseUrl)
      ? "https://github.com"
      : t.baseUrl.replace("/api/v3", "");
  }
  async function Fe(e, t, r) {
    let s = { baseUrl: cs(e), headers: { accept: "application/json" }, ...r },
      o = await e(t, s);
    if ("error" in o.data) {
      let n = new Wi.RequestError(
        `${o.data.error_description} (${o.data.error}, ${o.data.error_uri})`,
        400,
        { request: e.endpoint.merge(t, s), headers: o.headers }
      );
      throw ((n.response = o), n);
    }
    return o;
  }
  function Hi({ request: e = $i.request, ...t }) {
    let r = cs(e);
    return (0, xi.oauthAuthorizationUrl)({ ...t, baseUrl: r });
  }
  var zi = (C(), k(L));
  async function Mi(e) {
    let t = e.request || zi.request,
      r = await Fe(t, "POST /login/oauth/access_token", {
        client_id: e.clientId,
        client_secret: e.clientSecret,
        code: e.code,
        redirect_uri: e.redirectUrl,
      }),
      s = {
        clientType: e.clientType,
        clientId: e.clientId,
        clientSecret: e.clientSecret,
        token: r.data.access_token,
        scopes: r.data.scope.split(/\s+/).filter(Boolean),
      };
    if (e.clientType === "github-app") {
      if ("refresh_token" in r.data) {
        let o = new Date(r.headers.date).getTime();
        (s.refreshToken = r.data.refresh_token),
          (s.expiresAt = ss(o, r.data.expires_in)),
          (s.refreshTokenExpiresAt = ss(o, r.data.refresh_token_expires_in));
      }
      delete s.scopes;
    }
    return { ...r, authentication: s };
  }
  function ss(e, t) {
    return new Date(e + t * 1e3).toISOString();
  }
  var Ni = (C(), k(L));
  async function Bi(e) {
    let t = e.request || Ni.request,
      r = { client_id: e.clientId };
    return (
      "scopes" in e &&
        Array.isArray(e.scopes) &&
        (r.scope = e.scopes.join(" ")),
      Fe(t, "POST /login/device/code", r)
    );
  }
  var Vi = (C(), k(L));
  async function Ki(e) {
    let t = e.request || Vi.request,
      r = await Fe(t, "POST /login/oauth/access_token", {
        client_id: e.clientId,
        device_code: e.code,
        grant_type: "urn:ietf:params:oauth:grant-type:device_code",
      }),
      s = {
        clientType: e.clientType,
        clientId: e.clientId,
        token: r.data.access_token,
        scopes: r.data.scope.split(/\s+/).filter(Boolean),
      };
    if (
      ("clientSecret" in e && (s.clientSecret = e.clientSecret),
      e.clientType === "github-app")
    ) {
      if ("refresh_token" in r.data) {
        let o = new Date(r.headers.date).getTime();
        (s.refreshToken = r.data.refresh_token),
          (s.expiresAt = os(o, r.data.expires_in)),
          (s.refreshTokenExpiresAt = os(o, r.data.refresh_token_expires_in));
      }
      delete s.scopes;
    }
    return { ...r, authentication: s };
  }
  function os(e, t) {
    return new Date(e + t * 1e3).toISOString();
  }
  var Ji = (C(), k(L)),
    Qi = Ee(V());
  async function Yi(e) {
    let r = await (e.request || Ji.request)(
        "POST /applications/{client_id}/token",
        {
          headers: {
            authorization: `basic ${(0, Qi.default)(
              `${e.clientId}:${e.clientSecret}`
            )}`,
          },
          client_id: e.clientId,
          access_token: e.token,
        }
      ),
      s = {
        clientType: e.clientType,
        clientId: e.clientId,
        clientSecret: e.clientSecret,
        token: e.token,
        scopes: r.data.scopes,
      };
    return (
      r.data.expires_at && (s.expiresAt = r.data.expires_at),
      e.clientType === "github-app" && delete s.scopes,
      { ...r, authentication: s }
    );
  }
  var Xi = (C(), k(L));
  async function Zi(e) {
    let t = e.request || Xi.request,
      r = await Fe(t, "POST /login/oauth/access_token", {
        client_id: e.clientId,
        client_secret: e.clientSecret,
        grant_type: "refresh_token",
        refresh_token: e.refreshToken,
      }),
      s = new Date(r.headers.date).getTime(),
      o = {
        clientType: "github-app",
        clientId: e.clientId,
        clientSecret: e.clientSecret,
        token: r.data.access_token,
        refreshToken: r.data.refresh_token,
        expiresAt: ns(s, r.data.expires_in),
        refreshTokenExpiresAt: ns(s, r.data.refresh_token_expires_in),
      };
    return { ...r, authentication: o };
  }
  function ns(e, t) {
    return new Date(e + t * 1e3).toISOString();
  }
  var ea = (C(), k(L)),
    ta = Ee(V());
  async function ra(e) {
    let {
        request: t,
        clientType: r,
        clientId: s,
        clientSecret: o,
        token: n,
        ...a
      } = e,
      u = await (t || ea.request)(
        "POST /applications/{client_id}/token/scoped",
        {
          headers: { authorization: `basic ${(0, ta.default)(`${s}:${o}`)}` },
          client_id: s,
          access_token: n,
          ...a,
        }
      ),
      f = Object.assign(
        { clientType: r, clientId: s, clientSecret: o, token: u.data.token },
        u.data.expires_at ? { expiresAt: u.data.expires_at } : {}
      );
    return { ...u, authentication: f };
  }
  var sa = (C(), k(L)),
    oa = Ee(V());
  async function na(e) {
    let t = e.request || sa.request,
      r = (0, oa.default)(`${e.clientId}:${e.clientSecret}`),
      s = await t("PATCH /applications/{client_id}/token", {
        headers: { authorization: `basic ${r}` },
        client_id: e.clientId,
        access_token: e.token,
      }),
      o = {
        clientType: e.clientType,
        clientId: e.clientId,
        clientSecret: e.clientSecret,
        token: s.data.token,
        scopes: s.data.scopes,
      };
    return (
      s.data.expires_at && (o.expiresAt = s.data.expires_at),
      e.clientType === "github-app" && delete o.scopes,
      { ...s, authentication: o }
    );
  }
  var ia = (C(), k(L)),
    aa = Ee(V());
  async function ca(e) {
    let t = e.request || ia.request,
      r = (0, aa.default)(`${e.clientId}:${e.clientSecret}`);
    return t("DELETE /applications/{client_id}/token", {
      headers: { authorization: `basic ${r}` },
      client_id: e.clientId,
      access_token: e.token,
    });
  }
  var ua = (C(), k(L)),
    la = Ee(V());
  async function pa(e) {
    let t = e.request || ua.request,
      r = (0, la.default)(`${e.clientId}:${e.clientSecret}`);
    return t("DELETE /applications/{client_id}/grant", {
      headers: { authorization: `basic ${r}` },
      client_id: e.clientId,
      access_token: e.token,
    });
  }
});
async function ds(e, t) {
  let r = da(e, t.auth);
  if (r) return r;
  let { data: s } = await (0, we.createDeviceCode)({
    clientType: e.clientType,
    clientId: e.clientId,
    request: t.request || e.request,
    scopes: t.auth.scopes || e.scopes,
  });
  await e.onVerification(s);
  let o = await _t(t.request || e.request, e.clientId, e.clientType, s);
  return (e.authentication = o), o;
}
function da(e, t) {
  if (t.refresh === !0 || !e.authentication) return !1;
  if (e.clientType === "github-app") return e.authentication;
  let r = e.authentication,
    s = (("scopes" in t && t.scopes) || e.scopes).join(" "),
    o = r.scopes.join(" ");
  return s === o ? r : !1;
}
async function ls(e) {
  await new Promise((t) => setTimeout(t, e * 1e3));
}
async function _t(e, t, r, s) {
  try {
    let o = { clientId: t, request: e, code: s.device_code },
      { authentication: n } =
        r === "oauth-app"
          ? await (0, we.exchangeDeviceCode)({ ...o, clientType: "oauth-app" })
          : await (0, we.exchangeDeviceCode)({
              ...o,
              clientType: "github-app",
            });
    return { type: "token", tokenType: "oauth", ...n };
  } catch (o) {
    if (!o.response) throw o;
    let n = o.response.data.error;
    if (n === "authorization_pending")
      return await ls(s.interval), _t(e, t, r, s);
    if (n === "slow_down") return await ls(s.interval + 5), _t(e, t, r, s);
    throw o;
  }
}
async function ha(e, t) {
  return ds(e, { auth: t });
}
async function ga(e, t, r, s) {
  let o = t.endpoint.merge(r, s);
  if (/\/login\/(oauth\/access_token|device\/code)$/.test(o.url)) return t(o);
  let { token: n } = await ds(e, { request: t, auth: { type: "oauth" } });
  return (o.headers.authorization = `token ${n}`), t(o);
}
function hs(e) {
  let t =
      e.request ||
      te.defaults({
        headers: {
          "user-agent": `octokit-auth-oauth-device.js/${ma} ${(0,
          ps.getUserAgent)()}`,
        },
      }),
    { request: r = t, ...s } = e,
    o =
      e.clientType === "github-app"
        ? { ...s, clientType: "github-app", request: r }
        : { ...s, clientType: "oauth-app", request: r, scopes: e.scopes || [] };
  if (!e.clientId)
    throw new Error(
      '[@octokit/auth-oauth-device] "clientId" option must be set (https://github.com/octokit/auth-oauth-device.js#usage)'
    );
  if (!e.onVerification)
    throw new Error(
      '[@octokit/auth-oauth-device] "onVerification" option must be a function (https://github.com/octokit/auth-oauth-device.js#usage)'
    );
  return Object.assign(ha.bind(null, o), { hook: ga.bind(null, o) });
}
var ps,
  we,
  ma,
  gs = B(() => {
    ps = S(H());
    C();
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
      request: e.request,
    });
    return { type: "token", tokenType: "oauth", ...t };
  }
  if ("onVerification" in e.strategyOptions) {
    let r = await hs({
      clientType: e.clientType,
      clientId: e.clientId,
      onTokenCreated: e.onTokenCreated,
      ...e.strategyOptions,
      request: e.request,
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
      ...e.strategyOptions,
    };
  throw new Error("[@octokit/auth-oauth-user] Invalid strategy options");
}
async function Tt(e, t = {}) {
  if (
    (e.authentication ||
      (e.authentication =
        e.clientType === "oauth-app" ? await ms(e) : await ms(e)),
    e.authentication.invalid)
  )
    throw new Error("[@octokit/auth-oauth-user] Token is invalid");
  let r = e.authentication;
  if (
    "expiresAt" in r &&
    (t.type === "refresh" || new Date(r.expiresAt) < new Date())
  ) {
    let { authentication: s } = await (0, M.refreshToken)({
      clientType: "github-app",
      clientId: e.clientId,
      clientSecret: e.clientSecret,
      refreshToken: r.refreshToken,
      request: e.request,
    });
    e.authentication = { tokenType: "oauth", type: "token", ...s };
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
    let s = t.type === "check" ? M.checkToken : M.resetToken;
    try {
      let { authentication: o } = await s({
        clientType: e.clientType,
        clientId: e.clientId,
        clientSecret: e.clientSecret,
        token: e.authentication.token,
        request: e.request,
      });
      return (
        (e.authentication = { tokenType: "oauth", type: "token", ...o }),
        t.type === "reset" &&
          (await e.onTokenCreated?.(e.authentication, { type: t.type })),
        e.authentication
      );
    } catch (o) {
      throw (
        (o.status === 404 &&
          ((o.message = "[@octokit/auth-oauth-user] Token is invalid"),
          (e.authentication.invalid = !0)),
        o)
      );
    }
  }
  if (t.type === "delete" || t.type === "deleteAuthorization") {
    let s = t.type === "delete" ? M.deleteToken : M.deleteAuthorization;
    try {
      await s({
        clientType: e.clientType,
        clientId: e.clientId,
        clientSecret: e.clientSecret,
        token: e.authentication.token,
        request: e.request,
      });
    } catch (o) {
      if (o.status !== 404) throw o;
    }
    return (e.authentication.invalid = !0), e.authentication;
  }
  return e.authentication;
}
function Ue(e) {
  return e && fa.test(e);
}
async function _a(e, t, r, s = {}) {
  let o = t.endpoint.merge(r, s);
  if (/\/login\/(oauth\/access_token|device\/code)$/.test(o.url)) return t(o);
  if (Ue(o.url)) {
    let a = (0, Es.default)(`${e.clientId}:${e.clientSecret}`);
    return (o.headers.authorization = `basic ${a}`), t(o);
  }
  let { token: n } =
    e.clientType === "oauth-app"
      ? await Tt({ ...e, request: t })
      : await Tt({ ...e, request: t });
  return (o.headers.authorization = "token " + n), t(o);
}
function se({
  clientId: e,
  clientSecret: t,
  clientType: r = "oauth-app",
  request: s = te.defaults({
    headers: {
      "user-agent": `octokit-auth-oauth-app.js/${_s} ${(0, fs.getUserAgent)()}`,
    },
  }),
  onTokenCreated: o,
  ...n
}) {
  let a = Object.assign({
    clientType: r,
    clientId: e,
    clientSecret: t,
    onTokenCreated: o,
    strategyOptions: n,
    request: s,
  });
  return Object.assign(Tt.bind(null, a), { hook: _a.bind(null, a) });
}
var fs,
  Ts,
  M,
  Es,
  _s,
  fa,
  N = B(() => {
    fs = S(H());
    C();
    gs();
    (Ts = S($())), (M = S($())), (Es = S(V())), (_s = "4.0.1");
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
        )}`,
      },
    };
  if ("factory" in t) {
    let { type: o, ...n } = { ...t, ...e };
    return t.factory(n);
  }
  let r = {
    clientId: e.clientId,
    clientSecret: e.clientSecret,
    request: e.request,
    ...t,
  };
  return (
    e.clientType === "oauth-app"
      ? await se({ ...r, clientType: e.clientType })
      : await se({ ...r, clientType: e.clientType })
  )();
}
async function Ea(e, t, r, s) {
  let o = t.endpoint.merge(r, s);
  if (/\/login\/(oauth\/access_token|device\/code)$/.test(o.url)) return t(o);
  if (e.clientType === "github-app" && !Ue(o.url))
    throw new Error(
      `[@octokit/auth-oauth-app] GitHub Apps cannot use their client ID/secret for basic authentication for endpoints other than "/applications/{client_id}/**". "${o.method} ${o.url}" is not supported.`
    );
  let n = (0, bs.default)(`${e.clientId}:${e.clientSecret}`);
  o.headers.authorization = `basic ${n}`;
  try {
    return await t(o);
  } catch (a) {
    throw (
      (a.status !== 401 ||
        (a.message = `[@octokit/auth-oauth-app] "${o.method} ${o.url}" does not support clientId/clientSecret basic authentication.`),
      a)
    );
  }
}
function ya(e) {
  let t = Object.assign(
    {
      request: te.defaults({
        headers: {
          "user-agent": `octokit-auth-oauth-app.js/${wa} ${(0,
          ws.getUserAgent)()}`,
        },
      }),
      clientType: "oauth-app",
    },
    e
  );
  return Object.assign(Ta.bind(null, t), { hook: Ea.bind(null, t) });
}
var ws,
  ys,
  bs,
  wa,
  be = B(() => {
    ws = S(H());
    C();
    ys = S(V());
    N();
    bs = S(V());
    N();
    N();
    wa = "7.0.1";
  });
var Ps = {};
ee(Ps, { githubAppJwt: () => va });
function vs(e, t, r, s, o, n, a) {
  try {
    var c = e[n](a),
      u = c.value;
  } catch (f) {
    return void r(f);
  }
  c.done ? t(u) : Promise.resolve(u).then(s, o);
}
function Gs(e) {
  return function () {
    var t = this,
      r = arguments;
    return new Promise(function (s, o) {
      var n = e.apply(t, r);
      function a(u) {
        vs(n, s, o, a, c, "next", u);
      }
      function c(u) {
        vs(n, s, o, a, c, "throw", u);
      }
      a(void 0);
    });
  };
}
function ks(e) {
  for (
    var t = new ArrayBuffer(e.length),
      r = new Uint8Array(t),
      s = 0,
      o = e.length;
    s < o;
    s++
  )
    r[s] = e.charCodeAt(s);
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
    var { id: t, privateKey: r, now: s = Math.floor(Date.now() / 1e3) } = e,
      o = s - 30,
      n = o + 600,
      a = { iat: o, exp: n, iss: t };
    return {
      appId: t,
      expiration: n,
      token: yield ba({ privateKey: r, payload: a }),
    };
  })).apply(this, arguments);
}
var ba,
  Rs = B(() => {
    ba = (function () {
      var e = Gs(function* (t) {
        var { privateKey: r, payload: s } = t;
        if (/BEGIN RSA PRIVATE KEY/.test(r))
          throw new Error(
            "[universal-github-app-jwt] Private Key is in PKCS#1 format, but only PKCS#8 is supported. See https://github.com/gr2m/universal-github-app-jwt#readme"
          );
        var o,
          n = { name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-256" } },
          a =
            ((o = r
              .trim()
              .split(
                `
`
              )
              .slice(1, -1)
              .join("")),
            ks(atob(o))),
          c = yield crypto.subtle.importKey("pkcs8", a, n, !1, ["sign"]),
          u = (function (m, E) {
            return "".concat(As(m), ".").concat(As(E));
          })({ alg: "RS256", typ: "JWT" }, s),
          f = ks(u),
          _ = (function (m) {
            for (
              var E = "", y = new Uint8Array(m), R = y.byteLength, b = 0;
              b < R;
              b++
            )
              E += String.fromCharCode(y[b]);
            return Ss(btoa(E));
          })(yield crypto.subtle.sign(n.name, c, f));
        return "".concat(u, ".").concat(_);
      });
      return function (t) {
        return e.apply(this, arguments);
      };
    })();
  });
var Is = U((De) => {
  "use strict";
  Object.defineProperty(De, "__esModule", { value: !0 });
  De.LRUCache = void 0;
  var ue =
      typeof performance == "object" &&
      performance &&
      typeof performance.now == "function"
        ? performance
        : Date,
    Us = new Set(),
    Et = typeof __Process$ == "object" && __Process$ ? __Process$ : {},
    Cs = (e, t, r, s) => {
      typeof Et.emitWarning == "function"
        ? Et.emitWarning(e, t, r, s)
        : console.error(`[${r}] ${t}: ${e}`);
    },
    Ce = globalThis.AbortController,
    Fs = globalThis.AbortSignal;
  if (typeof Ce > "u") {
    (Fs = class {
      onabort;
      _onabort = [];
      reason;
      aborted = !1;
      addEventListener(s, o) {
        this._onabort.push(o);
      }
    }),
      (Ce = class {
        constructor() {
          t();
        }
        signal = new Fs();
        abort(s) {
          if (!this.signal.aborted) {
            (this.signal.reason = s), (this.signal.aborted = !0);
            for (let o of this.signal._onabort) o(s);
            this.signal.onabort?.(s);
          }
        }
      });
    let e = Et.env?.LRU_CACHE_IGNORE_AC_WARNING !== "1",
      t = () => {
        e &&
          ((e = !1),
          Cs(
            "AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.",
            "NO_ABORT_CONTROLLER",
            "ENOTSUP",
            t
          ));
      };
  }
  var ka = (e) => !Us.has(e),
    kl = Symbol("type"),
    Q = (e) => e && e === Math.floor(e) && e > 0 && isFinite(e),
    Ds = (e) =>
      Q(e)
        ? e <= Math.pow(2, 8)
          ? Uint8Array
          : e <= Math.pow(2, 16)
          ? Uint16Array
          : e <= Math.pow(2, 32)
          ? Uint32Array
          : e <= Number.MAX_SAFE_INTEGER
          ? le
          : null
        : null,
    le = class extends Array {
      constructor(t) {
        super(t), this.fill(0);
      }
    },
    wt = class e {
      heap;
      length;
      static #c = !1;
      static create(t) {
        let r = Ds(t);
        if (!r) return [];
        e.#c = !0;
        let s = new e(t, r);
        return (e.#c = !1), s;
      }
      constructor(t, r) {
        if (!e.#c)
          throw new TypeError("instantiate Stack using Stack.create(n)");
        (this.heap = new r(t)), (this.length = 0);
      }
      push(t) {
        this.heap[this.length++] = t;
      }
      pop() {
        return this.heap[--this.length];
      }
    },
    yt = class e {
      #c;
      #p;
      #m;
      #f;
      #P;
      ttl;
      ttlResolution;
      ttlAutopurge;
      updateAgeOnGet;
      updateAgeOnHas;
      allowStale;
      noDisposeOnSet;
      noUpdateTTL;
      maxEntrySize;
      sizeCalculation;
      noDeleteOnFetchRejection;
      noDeleteOnStaleGet;
      allowStaleOnFetchAbort;
      allowStaleOnFetchRejection;
      ignoreFetchAbort;
      #o;
      #_;
      #s;
      #r;
      #e;
      #u;
      #d;
      #a;
      #n;
      #T;
      #i;
      #E;
      #w;
      #h;
      #y;
      #A;
      #l;
      static unsafeExposeInternals(t) {
        return {
          starts: t.#w,
          ttls: t.#h,
          sizes: t.#E,
          keyMap: t.#s,
          keyList: t.#r,
          valList: t.#e,
          next: t.#u,
          prev: t.#d,
          get head() {
            return t.#a;
          },
          get tail() {
            return t.#n;
          },
          free: t.#T,
          isBackgroundFetch: (r) => t.#t(r),
          backgroundFetch: (r, s, o, n) => t.#U(r, s, o, n),
          moveToTail: (r) => t.#O(r),
          indexes: (r) => t.#b(r),
          rindexes: (r) => t.#v(r),
          isStale: (r) => t.#g(r),
        };
      }
      get max() {
        return this.#c;
      }
      get maxSize() {
        return this.#p;
      }
      get calculatedSize() {
        return this.#_;
      }
      get size() {
        return this.#o;
      }
      get fetchMethod() {
        return this.#P;
      }
      get dispose() {
        return this.#m;
      }
      get disposeAfter() {
        return this.#f;
      }
      constructor(t) {
        let {
          max: r = 0,
          ttl: s,
          ttlResolution: o = 1,
          ttlAutopurge: n,
          updateAgeOnGet: a,
          updateAgeOnHas: c,
          allowStale: u,
          dispose: f,
          disposeAfter: _,
          noDisposeOnSet: m,
          noUpdateTTL: E,
          maxSize: y = 0,
          maxEntrySize: R = 0,
          sizeCalculation: b,
          fetchMethod: F,
          noDeleteOnFetchRejection: v,
          noDeleteOnStaleGet: A,
          allowStaleOnFetchRejection: D,
          allowStaleOnFetchAbort: P,
          ignoreFetchAbort: O,
        } = t;
        if (r !== 0 && !Q(r))
          throw new TypeError("max option must be a nonnegative integer");
        let j = r ? Ds(r) : Array;
        if (!j) throw new Error("invalid max value: " + r);
        if (
          ((this.#c = r),
          (this.#p = y),
          (this.maxEntrySize = R || this.#p),
          (this.sizeCalculation = b),
          this.sizeCalculation)
        ) {
          if (!this.#p && !this.maxEntrySize)
            throw new TypeError(
              "cannot set sizeCalculation without setting maxSize or maxEntrySize"
            );
          if (typeof this.sizeCalculation != "function")
            throw new TypeError("sizeCalculation set to non-function");
        }
        if (F !== void 0 && typeof F != "function")
          throw new TypeError("fetchMethod must be a function if specified");
        if (
          ((this.#P = F),
          (this.#A = !!F),
          (this.#s = new Map()),
          (this.#r = new Array(r).fill(void 0)),
          (this.#e = new Array(r).fill(void 0)),
          (this.#u = new j(r)),
          (this.#d = new j(r)),
          (this.#a = 0),
          (this.#n = 0),
          (this.#T = wt.create(r)),
          (this.#o = 0),
          (this.#_ = 0),
          typeof f == "function" && (this.#m = f),
          typeof _ == "function"
            ? ((this.#f = _), (this.#i = []))
            : ((this.#f = void 0), (this.#i = void 0)),
          (this.#y = !!this.#m),
          (this.#l = !!this.#f),
          (this.noDisposeOnSet = !!m),
          (this.noUpdateTTL = !!E),
          (this.noDeleteOnFetchRejection = !!v),
          (this.allowStaleOnFetchRejection = !!D),
          (this.allowStaleOnFetchAbort = !!P),
          (this.ignoreFetchAbort = !!O),
          this.maxEntrySize !== 0)
        ) {
          if (this.#p !== 0 && !Q(this.#p))
            throw new TypeError(
              "maxSize must be a positive integer if specified"
            );
          if (!Q(this.maxEntrySize))
            throw new TypeError(
              "maxEntrySize must be a positive integer if specified"
            );
          this.#L();
        }
        if (
          ((this.allowStale = !!u),
          (this.noDeleteOnStaleGet = !!A),
          (this.updateAgeOnGet = !!a),
          (this.updateAgeOnHas = !!c),
          (this.ttlResolution = Q(o) || o === 0 ? o : 1),
          (this.ttlAutopurge = !!n),
          (this.ttl = s || 0),
          this.ttl)
        ) {
          if (!Q(this.ttl))
            throw new TypeError("ttl must be a positive integer if specified");
          this.#C();
        }
        if (this.#c === 0 && this.ttl === 0 && this.#p === 0)
          throw new TypeError(
            "At least one of max, maxSize, or ttl is required"
          );
        if (!this.ttlAutopurge && !this.#c && !this.#p) {
          let x = "LRU_CACHE_UNBOUNDED";
          ka(x) &&
            (Us.add(x),
            Cs(
              "TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.",
              "UnboundedCacheWarning",
              x,
              e
            ));
        }
      }
      getRemainingTTL(t) {
        return this.#s.has(t) ? 1 / 0 : 0;
      }
      #C() {
        let t = new le(this.#c),
          r = new le(this.#c);
        (this.#h = t),
          (this.#w = r),
          (this.#D = (n, a, c = ue.now()) => {
            if (
              ((r[n] = a !== 0 ? c : 0),
              (t[n] = a),
              a !== 0 && this.ttlAutopurge)
            ) {
              let u = setTimeout(() => {
                this.#g(n) && this.delete(this.#r[n]);
              }, a + 1);
              u.unref && u.unref();
            }
          }),
          (this.#G = (n) => {
            r[n] = t[n] !== 0 ? ue.now() : 0;
          }),
          (this.#k = (n, a) => {
            if (t[a]) {
              let c = t[a],
                u = r[a];
              if (!c || !u) return;
              (n.ttl = c), (n.start = u), (n.now = s || o());
              let f = n.now - u;
              n.remainingTTL = c - f;
            }
          });
        let s = 0,
          o = () => {
            let n = ue.now();
            if (this.ttlResolution > 0) {
              s = n;
              let a = setTimeout(() => (s = 0), this.ttlResolution);
              a.unref && a.unref();
            }
            return n;
          };
        (this.getRemainingTTL = (n) => {
          let a = this.#s.get(n);
          if (a === void 0) return 0;
          let c = t[a],
            u = r[a];
          if (!c || !u) return 1 / 0;
          let f = (s || o()) - u;
          return c - f;
        }),
          (this.#g = (n) => {
            let a = r[n],
              c = t[n];
            return !!c && !!a && (s || o()) - a > c;
          });
      }
      #G = () => {};
      #k = () => {};
      #D = () => {};
      #g = () => !1;
      #L() {
        let t = new le(this.#c);
        (this.#_ = 0),
          (this.#E = t),
          (this.#S = (r) => {
            (this.#_ -= t[r]), (t[r] = 0);
          }),
          (this.#I = (r, s, o, n) => {
            if (this.#t(s)) return 0;
            if (!Q(o))
              if (n) {
                if (typeof n != "function")
                  throw new TypeError("sizeCalculation must be a function");
                if (((o = n(s, r)), !Q(o)))
                  throw new TypeError(
                    "sizeCalculation return invalid (expect positive integer)"
                  );
              } else
                throw new TypeError(
                  "invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set."
                );
            return o;
          }),
          (this.#R = (r, s, o) => {
            if (((t[r] = s), this.#p)) {
              let n = this.#p - t[r];
              for (; this.#_ > n; ) this.#F(!0);
            }
            (this.#_ += t[r]),
              o && ((o.entrySize = s), (o.totalCalculatedSize = this.#_));
          });
      }
      #S = (t) => {};
      #R = (t, r, s) => {};
      #I = (t, r, s, o) => {
        if (s || o)
          throw new TypeError(
            "cannot set size without setting maxSize or maxEntrySize on cache"
          );
        return 0;
      };
      *#b({ allowStale: t = this.allowStale } = {}) {
        if (this.#o)
          for (
            let r = this.#n;
            !(!this.#j(r) || ((t || !this.#g(r)) && (yield r), r === this.#a));

          )
            r = this.#d[r];
      }
      *#v({ allowStale: t = this.allowStale } = {}) {
        if (this.#o)
          for (
            let r = this.#a;
            !(!this.#j(r) || ((t || !this.#g(r)) && (yield r), r === this.#n));

          )
            r = this.#u[r];
      }
      #j(t) {
        return t !== void 0 && this.#s.get(this.#r[t]) === t;
      }
      *entries() {
        for (let t of this.#b())
          this.#e[t] !== void 0 &&
            this.#r[t] !== void 0 &&
            !this.#t(this.#e[t]) &&
            (yield [this.#r[t], this.#e[t]]);
      }
      *rentries() {
        for (let t of this.#v())
          this.#e[t] !== void 0 &&
            this.#r[t] !== void 0 &&
            !this.#t(this.#e[t]) &&
            (yield [this.#r[t], this.#e[t]]);
      }
      *keys() {
        for (let t of this.#b()) {
          let r = this.#r[t];
          r !== void 0 && !this.#t(this.#e[t]) && (yield r);
        }
      }
      *rkeys() {
        for (let t of this.#v()) {
          let r = this.#r[t];
          r !== void 0 && !this.#t(this.#e[t]) && (yield r);
        }
      }
      *values() {
        for (let t of this.#b())
          this.#e[t] !== void 0 && !this.#t(this.#e[t]) && (yield this.#e[t]);
      }
      *rvalues() {
        for (let t of this.#v())
          this.#e[t] !== void 0 && !this.#t(this.#e[t]) && (yield this.#e[t]);
      }
      [Symbol.iterator]() {
        return this.entries();
      }
      find(t, r = {}) {
        for (let s of this.#b()) {
          let o = this.#e[s],
            n = this.#t(o) ? o.__staleWhileFetching : o;
          if (n !== void 0 && t(n, this.#r[s], this))
            return this.get(this.#r[s], r);
        }
      }
      forEach(t, r = this) {
        for (let s of this.#b()) {
          let o = this.#e[s],
            n = this.#t(o) ? o.__staleWhileFetching : o;
          n !== void 0 && t.call(r, n, this.#r[s], this);
        }
      }
      rforEach(t, r = this) {
        for (let s of this.#v()) {
          let o = this.#e[s],
            n = this.#t(o) ? o.__staleWhileFetching : o;
          n !== void 0 && t.call(r, n, this.#r[s], this);
        }
      }
      purgeStale() {
        let t = !1;
        for (let r of this.#v({ allowStale: !0 }))
          this.#g(r) && (this.delete(this.#r[r]), (t = !0));
        return t;
      }
      info(t) {
        let r = this.#s.get(t);
        if (r === void 0) return;
        let s = this.#e[r],
          o = this.#t(s) ? s.__staleWhileFetching : s;
        if (o === void 0) return;
        let n = { value: o };
        if (this.#h && this.#w) {
          let a = this.#h[r],
            c = this.#w[r];
          if (a && c) {
            let u = a - (ue.now() - c);
            (n.ttl = u), (n.start = Date.now());
          }
        }
        return this.#E && (n.size = this.#E[r]), n;
      }
      dump() {
        let t = [];
        for (let r of this.#b({ allowStale: !0 })) {
          let s = this.#r[r],
            o = this.#e[r],
            n = this.#t(o) ? o.__staleWhileFetching : o;
          if (n === void 0 || s === void 0) continue;
          let a = { value: n };
          if (this.#h && this.#w) {
            a.ttl = this.#h[r];
            let c = ue.now() - this.#w[r];
            a.start = Math.floor(Date.now() - c);
          }
          this.#E && (a.size = this.#E[r]), t.unshift([s, a]);
        }
        return t;
      }
      load(t) {
        this.clear();
        for (let [r, s] of t) {
          if (s.start) {
            let o = Date.now() - s.start;
            s.start = ue.now() - o;
          }
          this.set(r, s.value, s);
        }
      }
      set(t, r, s = {}) {
        if (r === void 0) return this.delete(t), this;
        let {
            ttl: o = this.ttl,
            start: n,
            noDisposeOnSet: a = this.noDisposeOnSet,
            sizeCalculation: c = this.sizeCalculation,
            status: u,
          } = s,
          { noUpdateTTL: f = this.noUpdateTTL } = s,
          _ = this.#I(t, r, s.size || 0, c);
        if (this.maxEntrySize && _ > this.maxEntrySize)
          return (
            u && ((u.set = "miss"), (u.maxEntrySizeExceeded = !0)),
            this.delete(t),
            this
          );
        let m = this.#o === 0 ? void 0 : this.#s.get(t);
        if (m === void 0)
          (m =
            this.#o === 0
              ? this.#n
              : this.#T.length !== 0
              ? this.#T.pop()
              : this.#o === this.#c
              ? this.#F(!1)
              : this.#o),
            (this.#r[m] = t),
            (this.#e[m] = r),
            this.#s.set(t, m),
            (this.#u[this.#n] = m),
            (this.#d[m] = this.#n),
            (this.#n = m),
            this.#o++,
            this.#R(m, _, u),
            u && (u.set = "add"),
            (f = !1);
        else {
          this.#O(m);
          let E = this.#e[m];
          if (r !== E) {
            if (this.#A && this.#t(E)) {
              E.__abortController.abort(new Error("replaced"));
              let { __staleWhileFetching: y } = E;
              y !== void 0 &&
                !a &&
                (this.#y && this.#m?.(y, t, "set"),
                this.#l && this.#i?.push([y, t, "set"]));
            } else
              a ||
                (this.#y && this.#m?.(E, t, "set"),
                this.#l && this.#i?.push([E, t, "set"]));
            if ((this.#S(m), this.#R(m, _, u), (this.#e[m] = r), u)) {
              u.set = "replace";
              let y = E && this.#t(E) ? E.__staleWhileFetching : E;
              y !== void 0 && (u.oldValue = y);
            }
          } else u && (u.set = "update");
        }
        if (
          (o !== 0 && !this.#h && this.#C(),
          this.#h && (f || this.#D(m, o, n), u && this.#k(u, m)),
          !a && this.#l && this.#i)
        ) {
          let E = this.#i,
            y;
          for (; (y = E?.shift()); ) this.#f?.(...y);
        }
        return this;
      }
      pop() {
        try {
          for (; this.#o; ) {
            let t = this.#e[this.#a];
            if ((this.#F(!0), this.#t(t))) {
              if (t.__staleWhileFetching) return t.__staleWhileFetching;
            } else if (t !== void 0) return t;
          }
        } finally {
          if (this.#l && this.#i) {
            let t = this.#i,
              r;
            for (; (r = t?.shift()); ) this.#f?.(...r);
          }
        }
      }
      #F(t) {
        let r = this.#a,
          s = this.#r[r],
          o = this.#e[r];
        return (
          this.#A && this.#t(o)
            ? o.__abortController.abort(new Error("evicted"))
            : (this.#y || this.#l) &&
              (this.#y && this.#m?.(o, s, "evict"),
              this.#l && this.#i?.push([o, s, "evict"])),
          this.#S(r),
          t && ((this.#r[r] = void 0), (this.#e[r] = void 0), this.#T.push(r)),
          this.#o === 1
            ? ((this.#a = this.#n = 0), (this.#T.length = 0))
            : (this.#a = this.#u[r]),
          this.#s.delete(s),
          this.#o--,
          r
        );
      }
      has(t, r = {}) {
        let { updateAgeOnHas: s = this.updateAgeOnHas, status: o } = r,
          n = this.#s.get(t);
        if (n !== void 0) {
          let a = this.#e[n];
          if (this.#t(a) && a.__staleWhileFetching === void 0) return !1;
          if (this.#g(n)) o && ((o.has = "stale"), this.#k(o, n));
          else
            return s && this.#G(n), o && ((o.has = "hit"), this.#k(o, n)), !0;
        } else o && (o.has = "miss");
        return !1;
      }
      peek(t, r = {}) {
        let { allowStale: s = this.allowStale } = r,
          o = this.#s.get(t);
        if (o === void 0 || (!s && this.#g(o))) return;
        let n = this.#e[o];
        return this.#t(n) ? n.__staleWhileFetching : n;
      }
      #U(t, r, s, o) {
        let n = r === void 0 ? void 0 : this.#e[r];
        if (this.#t(n)) return n;
        let a = new Ce(),
          { signal: c } = s;
        c?.addEventListener("abort", () => a.abort(c.reason), {
          signal: a.signal,
        });
        let u = { signal: a.signal, options: s, context: o },
          f = (b, F = !1) => {
            let { aborted: v } = a.signal,
              A = s.ignoreFetchAbort && b !== void 0;
            if (
              (s.status &&
                (v && !F
                  ? ((s.status.fetchAborted = !0),
                    (s.status.fetchError = a.signal.reason),
                    A && (s.status.fetchAbortIgnored = !0))
                  : (s.status.fetchResolved = !0)),
              v && !A && !F)
            )
              return m(a.signal.reason);
            let D = y;
            return (
              this.#e[r] === y &&
                (b === void 0
                  ? D.__staleWhileFetching
                    ? (this.#e[r] = D.__staleWhileFetching)
                    : this.delete(t)
                  : (s.status && (s.status.fetchUpdated = !0),
                    this.set(t, b, u.options))),
              b
            );
          },
          _ = (b) => (
            s.status &&
              ((s.status.fetchRejected = !0), (s.status.fetchError = b)),
            m(b)
          ),
          m = (b) => {
            let { aborted: F } = a.signal,
              v = F && s.allowStaleOnFetchAbort,
              A = v || s.allowStaleOnFetchRejection,
              D = A || s.noDeleteOnFetchRejection,
              P = y;
            if (
              (this.#e[r] === y &&
                (!D || P.__staleWhileFetching === void 0
                  ? this.delete(t)
                  : v || (this.#e[r] = P.__staleWhileFetching)),
              A)
            )
              return (
                s.status &&
                  P.__staleWhileFetching !== void 0 &&
                  (s.status.returnedStale = !0),
                P.__staleWhileFetching
              );
            if (P.__returned === P) throw b;
          },
          E = (b, F) => {
            let v = this.#P?.(t, n, u);
            v &&
              v instanceof Promise &&
              v.then((A) => b(A === void 0 ? void 0 : A), F),
              a.signal.addEventListener("abort", () => {
                (!s.ignoreFetchAbort || s.allowStaleOnFetchAbort) &&
                  (b(void 0),
                  s.allowStaleOnFetchAbort && (b = (A) => f(A, !0)));
              });
          };
        s.status && (s.status.fetchDispatched = !0);
        let y = new Promise(E).then(f, _),
          R = Object.assign(y, {
            __abortController: a,
            __staleWhileFetching: n,
            __returned: void 0,
          });
        return (
          r === void 0
            ? (this.set(t, R, { ...u.options, status: void 0 }),
              (r = this.#s.get(t)))
            : (this.#e[r] = R),
          R
        );
      }
      #t(t) {
        if (!this.#A) return !1;
        let r = t;
        return (
          !!r &&
          r instanceof Promise &&
          r.hasOwnProperty("__staleWhileFetching") &&
          r.__abortController instanceof Ce
        );
      }
      async fetch(t, r = {}) {
        let {
          allowStale: s = this.allowStale,
          updateAgeOnGet: o = this.updateAgeOnGet,
          noDeleteOnStaleGet: n = this.noDeleteOnStaleGet,
          ttl: a = this.ttl,
          noDisposeOnSet: c = this.noDisposeOnSet,
          size: u = 0,
          sizeCalculation: f = this.sizeCalculation,
          noUpdateTTL: _ = this.noUpdateTTL,
          noDeleteOnFetchRejection: m = this.noDeleteOnFetchRejection,
          allowStaleOnFetchRejection: E = this.allowStaleOnFetchRejection,
          ignoreFetchAbort: y = this.ignoreFetchAbort,
          allowStaleOnFetchAbort: R = this.allowStaleOnFetchAbort,
          context: b,
          forceRefresh: F = !1,
          status: v,
          signal: A,
        } = r;
        if (!this.#A)
          return (
            v && (v.fetch = "get"),
            this.get(t, {
              allowStale: s,
              updateAgeOnGet: o,
              noDeleteOnStaleGet: n,
              status: v,
            })
          );
        let D = {
            allowStale: s,
            updateAgeOnGet: o,
            noDeleteOnStaleGet: n,
            ttl: a,
            noDisposeOnSet: c,
            size: u,
            sizeCalculation: f,
            noUpdateTTL: _,
            noDeleteOnFetchRejection: m,
            allowStaleOnFetchRejection: E,
            allowStaleOnFetchAbort: R,
            ignoreFetchAbort: y,
            status: v,
            signal: A,
          },
          P = this.#s.get(t);
        if (P === void 0) {
          v && (v.fetch = "miss");
          let O = this.#U(t, P, D, b);
          return (O.__returned = O);
        } else {
          let O = this.#e[P];
          if (this.#t(O)) {
            let Z = s && O.__staleWhileFetching !== void 0;
            return (
              v && ((v.fetch = "inflight"), Z && (v.returnedStale = !0)),
              Z ? O.__staleWhileFetching : (O.__returned = O)
            );
          }
          let j = this.#g(P);
          if (!F && !j)
            return (
              v && (v.fetch = "hit"),
              this.#O(P),
              o && this.#G(P),
              v && this.#k(v, P),
              O
            );
          let x = this.#U(t, P, D, b),
            X = x.__staleWhileFetching !== void 0 && s;
          return (
            v &&
              ((v.fetch = j ? "stale" : "refresh"),
              X && j && (v.returnedStale = !0)),
            X ? x.__staleWhileFetching : (x.__returned = x)
          );
        }
      }
      get(t, r = {}) {
        let {
            allowStale: s = this.allowStale,
            updateAgeOnGet: o = this.updateAgeOnGet,
            noDeleteOnStaleGet: n = this.noDeleteOnStaleGet,
            status: a,
          } = r,
          c = this.#s.get(t);
        if (c !== void 0) {
          let u = this.#e[c],
            f = this.#t(u);
          return (
            a && this.#k(a, c),
            this.#g(c)
              ? (a && (a.get = "stale"),
                f
                  ? (a &&
                      s &&
                      u.__staleWhileFetching !== void 0 &&
                      (a.returnedStale = !0),
                    s ? u.__staleWhileFetching : void 0)
                  : (n || this.delete(t),
                    a && s && (a.returnedStale = !0),
                    s ? u : void 0))
              : (a && (a.get = "hit"),
                f ? u.__staleWhileFetching : (this.#O(c), o && this.#G(c), u))
          );
        } else a && (a.get = "miss");
      }
      #q(t, r) {
        (this.#d[r] = t), (this.#u[t] = r);
      }
      #O(t) {
        t !== this.#n &&
          (t === this.#a
            ? (this.#a = this.#u[t])
            : this.#q(this.#d[t], this.#u[t]),
          this.#q(this.#n, t),
          (this.#n = t));
      }
      delete(t) {
        let r = !1;
        if (this.#o !== 0) {
          let s = this.#s.get(t);
          if (s !== void 0)
            if (((r = !0), this.#o === 1)) this.clear();
            else {
              this.#S(s);
              let o = this.#e[s];
              if (
                (this.#t(o)
                  ? o.__abortController.abort(new Error("deleted"))
                  : (this.#y || this.#l) &&
                    (this.#y && this.#m?.(o, t, "delete"),
                    this.#l && this.#i?.push([o, t, "delete"])),
                this.#s.delete(t),
                (this.#r[s] = void 0),
                (this.#e[s] = void 0),
                s === this.#n)
              )
                this.#n = this.#d[s];
              else if (s === this.#a) this.#a = this.#u[s];
              else {
                let n = this.#d[s];
                this.#u[n] = this.#u[s];
                let a = this.#u[s];
                this.#d[a] = this.#d[s];
              }
              this.#o--, this.#T.push(s);
            }
        }
        if (this.#l && this.#i?.length) {
          let s = this.#i,
            o;
          for (; (o = s?.shift()); ) this.#f?.(...o);
        }
        return r;
      }
      clear() {
        for (let t of this.#v({ allowStale: !0 })) {
          let r = this.#e[t];
          if (this.#t(r)) r.__abortController.abort(new Error("deleted"));
          else {
            let s = this.#r[t];
            this.#y && this.#m?.(r, s, "delete"),
              this.#l && this.#i?.push([r, s, "delete"]);
          }
        }
        if (
          (this.#s.clear(),
          this.#e.fill(void 0),
          this.#r.fill(void 0),
          this.#h && this.#w && (this.#h.fill(0), this.#w.fill(0)),
          this.#E && this.#E.fill(0),
          (this.#a = 0),
          (this.#n = 0),
          (this.#T.length = 0),
          (this.#_ = 0),
          (this.#o = 0),
          this.#l && this.#i)
        ) {
          let t = this.#i,
            r;
          for (; (r = t?.shift()); ) this.#f?.(...r);
        }
      }
    };
  De.LRUCache = yt;
});
var qe = U((Ol, Hs) => {
  "use strict";
  var Aa = Object.create,
    je = Object.defineProperty,
    Ga = Object.getOwnPropertyDescriptor,
    Sa = Object.getOwnPropertyNames,
    Oa = Object.getPrototypeOf,
    Pa = Object.prototype.hasOwnProperty,
    Ra = (e, t) => {
      for (var r in t) je(e, r, { get: t[r], enumerable: !0 });
    },
    qs = (e, t, r, s) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let o of Sa(t))
          !Pa.call(e, o) &&
            o !== r &&
            je(e, o, {
              get: () => t[o],
              enumerable: !(s = Ga(t, o)) || s.enumerable,
            });
      return e;
    },
    Fa = (e, t, r) => (
      (r = e != null ? Aa(Oa(e)) : {}),
      qs(
        t || !e || !e.__esModule
          ? je(r, "default", { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    Ua = (e) => qs(je({}, "__esModule", { value: !0 }), e),
    Ls = {};
  Ra(Ls, {
    createAppAuth: () => Za,
    createOAuthUserAuth: () => Xa.createOAuthUserAuth,
  });
  Hs.exports = Ua(Ls);
  var Ca = H(),
    Da = (C(), k(L)),
    Ia = (be(), k(ye)),
    ja = Ze(),
    Gl = Fa((be(), k(ye))),
    qa = (Rs(), k(Ps));
  async function Ie({ appId: e, privateKey: t, timeDifference: r }) {
    try {
      let s = await (0, qa.githubAppJwt)({
        id: +e,
        privateKey: t,
        now: r && Math.floor(Date.now() / 1e3) + r,
      });
      return {
        type: "app",
        token: s.token,
        appId: s.appId,
        expiresAt: new Date(s.expiration * 1e3).toISOString(),
      };
    } catch (s) {
      throw t === "-----BEGIN RSA PRIVATE KEY-----"
        ? new Error(
            "The 'privateKey` option contains only the first line '-----BEGIN RSA PRIVATE KEY-----'. If you are setting it using a `.env` file, make sure it is set on a single line with newlines replaced by '\n'"
          )
        : s;
    }
  }
  var La = Is();
  function xa() {
    return new La.LRUCache({ max: 15e3, ttl: 1e3 * 60 * 59 });
  }
  async function $a(e, t) {
    let r = xs(t),
      s = await e.get(r);
    if (!s) return;
    let [o, n, a, c, u, f] = s.split("|"),
      _ =
        t.permissions ||
        u
          .split(/,/)
          .reduce(
            (m, E) => (
              /!$/.test(E) ? (m[E.slice(0, -1)] = "write") : (m[E] = "read"), m
            ),
            {}
          );
    return {
      token: o,
      createdAt: n,
      expiresAt: a,
      permissions: _,
      repositoryIds: t.repositoryIds,
      repositoryNames: t.repositoryNames,
      singleFileName: f,
      repositorySelection: c,
    };
  }
  async function Wa(e, t, r) {
    let s = xs(t),
      o = t.permissions
        ? ""
        : Object.keys(r.permissions)
            .map((a) => `${a}${r.permissions[a] === "write" ? "!" : ""}`)
            .join(","),
      n = [
        r.token,
        r.createdAt,
        r.expiresAt,
        r.repositorySelection,
        o,
        r.singleFileName,
      ].join("|");
    await e.set(s, n);
  }
  function xs({
    installationId: e,
    permissions: t = {},
    repositoryIds: r = [],
    repositoryNames: s = [],
  }) {
    let o = Object.keys(t)
        .sort()
        .map((c) => (t[c] === "read" ? c : `${c}!`))
        .join(","),
      n = r.sort().join(","),
      a = s.join(",");
    return [e, n, a, o].filter(Boolean).join("|");
  }
  function js({
    installationId: e,
    token: t,
    createdAt: r,
    expiresAt: s,
    repositorySelection: o,
    permissions: n,
    repositoryIds: a,
    repositoryNames: c,
    singleFileName: u,
  }) {
    return Object.assign(
      {
        type: "token",
        tokenType: "installation",
        token: t,
        installationId: e,
        permissions: n,
        createdAt: r,
        expiresAt: s,
        repositorySelection: o,
      },
      a ? { repositoryIds: a } : null,
      c ? { repositoryNames: c } : null,
      u ? { singleFileName: u } : null
    );
  }
  async function $s(e, t, r) {
    let s = Number(t.installationId || e.installationId);
    if (!s)
      throw new Error(
        "[@octokit/auth-app] installationId option is required for installation authentication."
      );
    if (t.factory) {
      let { type: A, factory: D, oauthApp: P, ...O } = { ...e, ...t };
      return D(O);
    }
    let o = Object.assign({ installationId: s }, t);
    if (!t.refresh) {
      let A = await $a(e.cache, o);
      if (A) {
        let {
          token: D,
          createdAt: P,
          expiresAt: O,
          permissions: j,
          repositoryIds: x,
          repositoryNames: he,
          singleFileName: X,
          repositorySelection: Z,
        } = A;
        return js({
          installationId: s,
          token: D,
          createdAt: P,
          expiresAt: O,
          permissions: j,
          repositorySelection: Z,
          repositoryIds: x,
          repositoryNames: he,
          singleFileName: X,
        });
      }
    }
    let n = await Ie(e),
      a = r || e.request,
      {
        data: {
          token: c,
          expires_at: u,
          repositories: f,
          permissions: _,
          repository_selection: m,
          single_file: E,
        },
      } = await a("POST /app/installations/{installation_id}/access_tokens", {
        installation_id: s,
        repository_ids: t.repositoryIds,
        repositories: t.repositoryNames,
        permissions: t.permissions,
        mediaType: { previews: ["machine-man"] },
        headers: { authorization: `bearer ${n.token}` },
      }),
      y = _ || {},
      R = m || "all",
      b = f ? f.map((A) => A.id) : void 0,
      F = f ? f.map((A) => A.name) : void 0,
      v = new Date().toISOString();
    return (
      await Wa(e.cache, o, {
        token: c,
        createdAt: v,
        expiresAt: u,
        repositorySelection: R,
        permissions: y,
        repositoryIds: b,
        repositoryNames: F,
        singleFileName: E,
      }),
      js({
        installationId: s,
        token: c,
        createdAt: v,
        expiresAt: u,
        repositorySelection: R,
        permissions: y,
        repositoryIds: b,
        repositoryNames: F,
        singleFileName: E,
      })
    );
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
  var za = (N(), k(oe)),
    Sl = (J(), k(_e)),
    Ma = [
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
      "/users/{username}/installation",
    ];
  function Na(e) {
    let r = `^(?:${e
      .map((s) =>
        s
          .split("/")
          .map((o) => (o.startsWith("{") ? "(?:.+?)" : o))
          .join("/")
      )
      .map((s) => `(?:${s})`)
      .join("|")})$`;
    return new RegExp(r, "i");
  }
  var Ba = Na(Ma);
  function Va(e) {
    return !!e && Ba.test(e.split("?")[0]);
  }
  var Ka = 5 * 1e3;
  function Ja(e) {
    return !(
      e.message.match(
        /'Expiration time' claim \('exp'\) must be a numeric value representing the future time at which the assertion expires/
      ) ||
      e.message.match(
        /'Issued at' claim \('iat'\) must be an Integer representing the time that the assertion was issued/
      )
    );
  }
  async function Qa(e, t, r, s) {
    let o = t.endpoint.merge(r, s),
      n = o.url;
    if (/\/login\/oauth\/access_token$/.test(n)) return t(o);
    if (Va(n.replace(t.endpoint.DEFAULTS.baseUrl, ""))) {
      let { token: u } = await Ie(e);
      o.headers.authorization = `bearer ${u}`;
      let f;
      try {
        f = await t(o);
      } catch (_) {
        if (Ja(_) || typeof _.response.headers.date > "u") throw _;
        let m = Math.floor(
          (Date.parse(_.response.headers.date) -
            Date.parse(new Date().toString())) /
            1e3
        );
        e.log.warn(_.message),
          e.log.warn(
            `[@octokit/auth-app] GitHub API time and system time are different by ${m} seconds. Retrying request with the difference accounted for.`
          );
        let { token: E } = await Ie({ ...e, timeDifference: m });
        return (o.headers.authorization = `bearer ${E}`), t(o);
      }
      return f;
    }
    if ((0, za.requiresBasicAuth)(n)) {
      let u = await e.oauthApp({ type: "oauth-app" });
      return (o.headers.authorization = u.headers.authorization), t(o);
    }
    let { token: a, createdAt: c } = await $s(e, {}, t);
    return (o.headers.authorization = `token ${a}`), Ws(e, t, o, c);
  }
  async function Ws(e, t, r, s, o = 0) {
    let n = +new Date() - +new Date(s);
    try {
      return await t(r);
    } catch (a) {
      if (a.status !== 401) throw a;
      if (n >= Ka)
        throw (
          (o > 0 &&
            (a.message = `After ${o} retries within ${
              n / 1e3
            }s of creating the installation access token, the response remains 401. At this point, the cause may be an authentication problem or a system outage. Please check https://www.githubstatus.com for status information`),
          a)
        );
      ++o;
      let c = o * 1e3;
      return (
        e.log.warn(
          `[@octokit/auth-app] Retrying after 401 response to account for token replication delay (retry: ${o}, wait: ${
            c / 1e3
          }s)`
        ),
        await new Promise((u) => setTimeout(u, c)),
        Ws(e, t, r, s, o)
      );
    }
  }
  var Ya = "6.0.2",
    Xa = (N(), k(oe));
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
    let t = Object.assign({ warn: console.warn.bind(console) }, e.log),
      r =
        e.request ||
        Da.request.defaults({
          headers: {
            "user-agent": `octokit-auth-app.js/${Ya} ${(0, Ca.getUserAgent)()}`,
          },
        }),
      s = Object.assign(
        { request: r, cache: xa() },
        e,
        e.installationId ? { installationId: Number(e.installationId) } : {},
        {
          log: t,
          oauthApp: (0, Ia.createOAuthAppAuth)({
            clientType: "github-app",
            clientId: e.clientId || "",
            clientSecret: e.clientSecret || "",
            request: r,
          }),
        }
      );
    return Object.assign(Ha.bind(null, s), { hook: Qa.bind(null, s) });
  }
});
var Le = U((Fl, Ms) => {
  "use strict";
  var bt = Object.defineProperty,
    ec = Object.getOwnPropertyDescriptor,
    tc = Object.getOwnPropertyNames,
    rc = Object.prototype.hasOwnProperty,
    sc = (e, t) => {
      for (var r in t) bt(e, r, { get: t[r], enumerable: !0 });
    },
    oc = (e, t, r, s) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let o of tc(t))
          !rc.call(e, o) &&
            o !== r &&
            bt(e, o, {
              get: () => t[o],
              enumerable: !(s = ec(t, o)) || s.enumerable,
            });
      return e;
    },
    nc = (e) => oc(bt({}, "__esModule", { value: !0 }), e),
    zs = {};
  sc(zs, { createUnauthenticatedAuth: () => pc });
  Ms.exports = nc(zs);
  async function ic(e) {
    return { type: "unauthenticated", reason: e };
  }
  var Pl = (J(), k(_e));
  function ac(e) {
    return e.status !== 403 || !e.response
      ? !1
      : e.response.headers["x-ratelimit-remaining"] === "0";
  }
  var Rl = (J(), k(_e)),
    cc = /\babuse\b/i;
  function uc(e) {
    return e.status !== 403 ? !1 : cc.test(e.message);
  }
  async function lc(e, t, r, s) {
    let o = t.endpoint.merge(r, s);
    return t(o).catch((n) => {
      throw n.status === 404
        ? ((n.message = `Not found. May be due to lack of authentication. Reason: ${e}`),
          n)
        : ac(n)
        ? ((n.message = `API rate limit exceeded. This maybe caused by the lack of authentication. Reason: ${e}`),
          n)
        : uc(n)
        ? ((n.message = `You have triggered an abuse detection mechanism. This maybe caused by the lack of authentication. Reason: ${e}`),
          n)
        : n.status === 401
        ? ((n.message = `Unauthorized. "${o.method} ${o.url}" failed most likely due to lack of authentication. Reason: ${e}`),
          n)
        : (n.status >= 400 &&
            n.status < 500 &&
            (n.message = n.message.replace(
              /\.?$/,
              `. May be caused by lack of authentication (${e}).`
            )),
          n);
    });
  }
  var pc = function (t) {
    if (!t || !t.reason)
      throw new Error(
        "[@octokit/auth-unauthenticated] No reason passed to createUnauthenticatedAuth"
      );
    return Object.assign(ic.bind(null, t.reason), {
      hook: lc.bind(null, t.reason),
    });
  };
});
var We = U((Ul, ro) => {
  "use strict";
  var dc = Object.create,
    xe = Object.defineProperty,
    hc = Object.getOwnPropertyDescriptor,
    gc = Object.getOwnPropertyNames,
    mc = Object.getPrototypeOf,
    fc = Object.prototype.hasOwnProperty,
    _c = (e, t) => {
      for (var r in t) xe(e, r, { get: t[r], enumerable: !0 });
    },
    Qs = (e, t, r, s) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let o of gc(t))
          !fc.call(e, o) &&
            o !== r &&
            xe(e, o, {
              get: () => t[o],
              enumerable: !(s = hc(t, o)) || s.enumerable,
            });
      return e;
    },
    Y = (e, t, r) => (
      (r = e != null ? dc(mc(e)) : {}),
      Qs(
        t || !e || !e.__esModule
          ? xe(r, "default", { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    Tc = (e) => Qs(xe({}, "__esModule", { value: !0 }), e),
    Ys = {};
  _c(Ys, {
    OAuthApp: () => Jc,
    createAWSLambdaAPIGatewayV2Handler: () => Kc,
    createNodeMiddleware: () => Hc,
    createWebWorkerHandler: () => Nc,
    handleRequest: () => $e,
    sendNodeResponse: () => to,
    unknownRouteResponse: () => eo,
  });
  ro.exports = Tc(Ys);
  var Ec = (be(), k(ye)),
    Xs = "6.0.0";
  function Zs(e, t, r) {
    if (Array.isArray(t)) {
      for (let s of t) Zs(e, s, r);
      return;
    }
    e.eventHandlers[t] || (e.eventHandlers[t] = []), e.eventHandlers[t].push(r);
  }
  var wc = Se(),
    yc = H(),
    bc = wc.Octokit.defaults({
      userAgent: `octokit-oauth-app.js/${Xs} ${(0, yc.getUserAgent)()}`,
    }),
    vc = (N(), k(oe));
  async function K(e, t) {
    let { name: r, action: s } = t;
    if (e.eventHandlers[`${r}.${s}`])
      for (let o of e.eventHandlers[`${r}.${s}`]) await o(t);
    if (e.eventHandlers[r]) for (let o of e.eventHandlers[r]) await o(t);
  }
  async function kc(e, t) {
    return e.octokit.auth({
      type: "oauth-user",
      ...t,
      async factory(r) {
        let s = new e.Octokit({
            authStrategy: vc.createOAuthUserAuth,
            auth: r,
          }),
          o = await s.auth({ type: "get" });
        return (
          await K(e, {
            name: "token",
            action: "created",
            token: o.token,
            scopes: o.scopes,
            authentication: o,
            octokit: s,
          }),
          s
        );
      },
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
      scopes: t.scopes ?? e.defaultScopes,
    };
    return Ac.getWebFlowAuthorizationUrl({ clientType: e.clientType, ...r });
  }
  var Sc = Y((be(), k(ye)));
  async function Oc(e, t) {
    let r = await e.octokit.auth({ type: "oauth-user", ...t });
    return (
      await K(e, {
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
            refreshTokenExpiresAt: r.refreshTokenExpiresAt,
          },
        }),
      }),
      { authentication: r }
    );
  }
  var Pc = Y($());
  async function Rc(e, t) {
    let r = await Pc.checkToken({
      clientType: e.clientType,
      clientId: e.clientId,
      clientSecret: e.clientSecret,
      request: e.octokit.request,
      ...t,
    });
    return (
      Object.assign(r.authentication, { type: "token", tokenType: "oauth" }), r
    );
  }
  var Ns = Y($()),
    Bs = (N(), k(oe));
  async function Fc(e, t) {
    let r = {
      clientId: e.clientId,
      clientSecret: e.clientSecret,
      request: e.octokit.request,
      ...t,
    };
    if (e.clientType === "oauth-app") {
      let n = await Ns.resetToken({ clientType: "oauth-app", ...r }),
        a = Object.assign(n.authentication, {
          type: "token",
          tokenType: "oauth",
        });
      return (
        await K(e, {
          name: "token",
          action: "reset",
          token: n.authentication.token,
          scopes: n.authentication.scopes || void 0,
          authentication: a,
          octokit: new e.Octokit({
            authStrategy: Bs.createOAuthUserAuth,
            auth: {
              clientType: e.clientType,
              clientId: e.clientId,
              clientSecret: e.clientSecret,
              token: n.authentication.token,
              scopes: n.authentication.scopes,
            },
          }),
        }),
        { ...n, authentication: a }
      );
    }
    let s = await Ns.resetToken({ clientType: "github-app", ...r }),
      o = Object.assign(s.authentication, {
        type: "token",
        tokenType: "oauth",
      });
    return (
      await K(e, {
        name: "token",
        action: "reset",
        token: s.authentication.token,
        authentication: o,
        octokit: new e.Octokit({
          authStrategy: Bs.createOAuthUserAuth,
          auth: {
            clientType: e.clientType,
            clientId: e.clientId,
            clientSecret: e.clientSecret,
            token: s.authentication.token,
          },
        }),
      }),
      { ...s, authentication: o }
    );
  }
  var Uc = Y($()),
    Cc = (N(), k(oe));
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
        refreshToken: t.refreshToken,
      }),
      s = Object.assign(r.authentication, {
        type: "token",
        tokenType: "oauth",
      });
    return (
      await K(e, {
        name: "token",
        action: "refreshed",
        token: r.authentication.token,
        authentication: s,
        octokit: new e.Octokit({
          authStrategy: Cc.createOAuthUserAuth,
          auth: {
            clientType: e.clientType,
            clientId: e.clientId,
            clientSecret: e.clientSecret,
            token: r.authentication.token,
          },
        }),
      }),
      { ...r, authentication: s }
    );
  }
  var Ic = Y($()),
    jc = (N(), k(oe));
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
        ...t,
      }),
      s = Object.assign(r.authentication, {
        type: "token",
        tokenType: "oauth",
      });
    return (
      await K(e, {
        name: "token",
        action: "scoped",
        token: r.authentication.token,
        authentication: s,
        octokit: new e.Octokit({
          authStrategy: jc.createOAuthUserAuth,
          auth: {
            clientType: e.clientType,
            clientId: e.clientId,
            clientSecret: e.clientSecret,
            token: r.authentication.token,
          },
        }),
      }),
      { ...r, authentication: s }
    );
  }
  var Vs = Y($()),
    Lc = Le();
  async function xc(e, t) {
    let r = {
        clientId: e.clientId,
        clientSecret: e.clientSecret,
        request: e.octokit.request,
        ...t,
      },
      s =
        e.clientType === "oauth-app"
          ? await Vs.deleteToken({ clientType: "oauth-app", ...r })
          : await Vs.deleteToken({ clientType: "github-app", ...r });
    return (
      await K(e, {
        name: "token",
        action: "deleted",
        token: t.token,
        octokit: new e.Octokit({
          authStrategy: Lc.createUnauthenticatedAuth,
          auth: {
            reason:
              'Handling "token.deleted" event. The access for the token has been revoked.',
          },
        }),
      }),
      s
    );
  }
  var Ks = Y($()),
    Js = Le();
  async function $c(e, t) {
    let r = {
        clientId: e.clientId,
        clientSecret: e.clientSecret,
        request: e.octokit.request,
        ...t,
      },
      s =
        e.clientType === "oauth-app"
          ? await Ks.deleteAuthorization({ clientType: "oauth-app", ...r })
          : await Ks.deleteAuthorization({ clientType: "github-app", ...r });
    return (
      await K(e, {
        name: "token",
        action: "deleted",
        token: t.token,
        octokit: new e.Octokit({
          authStrategy: Js.createUnauthenticatedAuth,
          auth: {
            reason:
              'Handling "token.deleted" event. The access for the token has been revoked.',
          },
        }),
      }),
      await K(e, {
        name: "authorization",
        action: "deleted",
        token: t.token,
        octokit: new e.Octokit({
          authStrategy: Js.createUnauthenticatedAuth,
          auth: {
            reason:
              'Handling "authorization.deleted" event. The access for the app has been revoked.',
          },
        }),
      }),
      s
    );
  }
  function eo(e) {
    return {
      status: 404,
      headers: { "content-type": "application/json" },
      text: JSON.stringify({ error: `Unknown route: ${e.method} ${e.url}` }),
    };
  }
  async function $e(e, { pathPrefix: t = "/api/github/oauth" }, r) {
    if (r.method === "OPTIONS")
      return {
        status: 200,
        headers: {
          "access-control-allow-origin": "*",
          "access-control-allow-methods": "*",
          "access-control-allow-headers":
            "Content-Type, User-Agent, Authorization",
        },
      };
    let { pathname: s } = new URL(r.url, "http://localhost");
    if (!s.startsWith(`${t}/`)) return;
    s = s.slice(t.length + 1);
    let o = [r.method, s].join(" "),
      n = {
        getLogin: "GET login",
        getCallback: "GET callback",
        createToken: "POST token",
        getToken: "GET token",
        patchToken: "PATCH token",
        patchRefreshToken: "PATCH refresh-token",
        scopeToken: "POST token/scoped",
        deleteToken: "DELETE token",
        deleteGrant: "DELETE grant",
      };
    if (!Object.values(n).includes(o)) return eo(r);
    let a;
    try {
      let _ = await r.text();
      a = _ ? JSON.parse(_) : {};
    } catch {
      return {
        status: 400,
        headers: {
          "content-type": "application/json",
          "access-control-allow-origin": "*",
        },
        text: JSON.stringify({ error: "[@octokit/oauth-app] request error" }),
      };
    }
    let { searchParams: c } = new URL(r.url, "http://localhost"),
      u = Object.fromEntries(c),
      f = r.headers;
    try {
      if (o === n.getLogin) {
        let { url: m } = e.getWebFlowAuthorizationUrl({
          state: u.state,
          scopes: u.scopes ? u.scopes.split(",") : void 0,
          allowSignup: u.allowSignup ? u.allowSignup === "true" : void 0,
          redirectUrl: u.redirectUrl,
        });
        return { status: 302, headers: { location: m } };
      }
      if (o === n.getCallback) {
        if (u.error)
          throw new Error(
            `[@octokit/oauth-app] ${u.error} ${u.error_description}`
          );
        if (!u.code)
          throw new Error('[@octokit/oauth-app] "code" parameter is required');
        let {
          authentication: { token: m },
        } = await e.createToken({ code: u.code });
        return {
          status: 200,
          headers: { "content-type": "text/html" },
          text: `<h1>Token created successfully</h1>

<p>Your token is: <strong>${m}</strong>. Copy it now as it cannot be shown again.</p>`,
        };
      }
      if (o === n.createToken) {
        let { code: m, redirectUrl: E } = a;
        if (!m)
          throw new Error('[@octokit/oauth-app] "code" parameter is required');
        let y = await e.createToken({ code: m, redirectUrl: E });
        return (
          delete y.authentication.clientSecret,
          {
            status: 201,
            headers: {
              "content-type": "application/json",
              "access-control-allow-origin": "*",
            },
            text: JSON.stringify(y),
          }
        );
      }
      if (o === n.getToken) {
        let m = f.authorization?.substr(6);
        if (!m)
          throw new Error(
            '[@octokit/oauth-app] "Authorization" header is required'
          );
        let E = await e.checkToken({ token: m });
        return (
          delete E.authentication.clientSecret,
          {
            status: 200,
            headers: {
              "content-type": "application/json",
              "access-control-allow-origin": "*",
            },
            text: JSON.stringify(E),
          }
        );
      }
      if (o === n.patchToken) {
        let m = f.authorization?.substr(6);
        if (!m)
          throw new Error(
            '[@octokit/oauth-app] "Authorization" header is required'
          );
        let E = await e.resetToken({ token: m });
        return (
          delete E.authentication.clientSecret,
          {
            status: 200,
            headers: {
              "content-type": "application/json",
              "access-control-allow-origin": "*",
            },
            text: JSON.stringify(E),
          }
        );
      }
      if (o === n.patchRefreshToken) {
        if (!f.authorization?.substr(6))
          throw new Error(
            '[@octokit/oauth-app] "Authorization" header is required'
          );
        let { refreshToken: E } = a;
        if (!E)
          throw new Error(
            "[@octokit/oauth-app] refreshToken must be sent in request body"
          );
        let y = await e.refreshToken({ refreshToken: E });
        return (
          delete y.authentication.clientSecret,
          {
            status: 200,
            headers: {
              "content-type": "application/json",
              "access-control-allow-origin": "*",
            },
            text: JSON.stringify(y),
          }
        );
      }
      if (o === n.scopeToken) {
        let m = f.authorization?.substr(6);
        if (!m)
          throw new Error(
            '[@octokit/oauth-app] "Authorization" header is required'
          );
        let E = await e.scopeToken({ token: m, ...a });
        return (
          delete E.authentication.clientSecret,
          {
            status: 200,
            headers: {
              "content-type": "application/json",
              "access-control-allow-origin": "*",
            },
            text: JSON.stringify(E),
          }
        );
      }
      if (o === n.deleteToken) {
        let m = f.authorization?.substr(6);
        if (!m)
          throw new Error(
            '[@octokit/oauth-app] "Authorization" header is required'
          );
        return (
          await e.deleteToken({ token: m }),
          { status: 204, headers: { "access-control-allow-origin": "*" } }
        );
      }
      let _ = f.authorization?.substr(6);
      if (!_)
        throw new Error(
          '[@octokit/oauth-app] "Authorization" header is required'
        );
      return (
        await e.deleteAuthorization({ token: _ }),
        { status: 204, headers: { "access-control-allow-origin": "*" } }
      );
    } catch (_) {
      return {
        status: 400,
        headers: {
          "content-type": "application/json",
          "access-control-allow-origin": "*",
        },
        text: JSON.stringify({ error: _.message }),
      };
    }
  }
  function Wc(e) {
    let { method: t, url: r, headers: s } = e;
    async function o() {
      return await new Promise((a, c) => {
        let u = [];
        e.on("error", c)
          .on("data", (f) => u.push(f))
          .on("end", () => a(__Buffer$.concat(u).toString()));
      });
    }
    return { method: t, url: r, headers: s, text: o };
  }
  function to(e, t) {
    t.writeHead(e.status, e.headers), t.end(e.text);
  }
  function Hc(e, t = {}) {
    return async function (r, s, o) {
      let n = await Wc(r),
        a = await $e(e, t, n);
      return a ? (to(a, s), !0) : (o?.(), !1);
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
    return async function (r) {
      let s = await zc(r),
        o = await $e(e, t, s);
      return o ? Mc(o) : void 0;
    };
  }
  function Bc(e) {
    let { method: t } = e.requestContext.http,
      r = e.rawPath,
      { stage: s } = e.requestContext;
    r.startsWith("/" + s) && (r = r.substring(s.length + 1)),
      e.rawQueryString && (r += "?" + e.rawQueryString);
    let o = e.headers;
    return { method: t, url: r, headers: o, text: async () => e.body || "" };
  }
  function Vc(e) {
    return { statusCode: e.status, headers: e.headers, body: e.text };
  }
  function Kc(e, t = {}) {
    return async function (r) {
      let s = Bc(r),
        o = await $e(e, t, s);
      return o ? Vc(o) : void 0;
    };
  }
  var Jc = class {
    static {
      this.VERSION = Xs;
    }
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
            clientSecret: e.clientSecret,
          },
        }),
        s = {
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
          eventHandlers: {},
        };
      (this.on = Zs.bind(null, s)),
        (this.octokit = r),
        (this.getUserOctokit = kc.bind(null, s)),
        (this.getWebFlowAuthorizationUrl = Gc.bind(null, s)),
        (this.createToken = Oc.bind(null, s)),
        (this.checkToken = Rc.bind(null, s)),
        (this.resetToken = Fc.bind(null, s)),
        (this.refreshToken = Dc.bind(null, s)),
        (this.scopeToken = qc.bind(null, s)),
        (this.deleteToken = xc.bind(null, s)),
        (this.deleteAuthorization = $c.bind(null, s));
    }
  };
});
var oo = U((Il, so) => {
  "use strict";
  so.exports = (e, t = 1, r) => {
    if (
      ((r = { indent: " ", includeEmptyLines: !1, ...r }), typeof e != "string")
    )
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
    if (t === 0) return e;
    let s = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
    return e.replace(s, r.indent.repeat(t));
  };
});
var co = U((jl, ao) => {
  "use strict";
  var no = Qo("os"),
    io = /\s+at.*(?:\(|\s)(.*)\)?/,
    Qc =
      /^(?:(?:(?:node|(?:internal\/[\w/]*|.*node_modules\/(?:babel-polyfill|pirates)\/.*)?\w+)\.js:\d+:\d+)|native)/,
    Yc = typeof no.homedir > "u" ? "" : no.homedir();
  ao.exports = (e, t) => (
    (t = Object.assign({ pretty: !1 }, t)),
    e
      .replace(/\\/g, "/")
      .split(
        `
`
      )
      .filter((r) => {
        let s = r.match(io);
        if (s === null || !s[1]) return !0;
        let o = s[1];
        return o.includes(".app/Contents/Resources/electron.asar") ||
          o.includes(".app/Contents/Resources/default_app.asar")
          ? !1
          : !Qc.test(o);
      })
      .filter((r) => r.trim() !== "")
      .map((r) =>
        t.pretty ? r.replace(io, (s, o) => s.replace(o, o.replace(Yc, "~"))) : r
      ).join(`
`)
  );
});
var He = U((ql, uo) => {
  "use strict";
  var Xc = oo(),
    Zc = co(),
    eu = (e) => e.replace(/\s+at .*aggregate-error\/index.js:\d+:\d+\)?/g, ""),
    vt = class extends Error {
      constructor(t) {
        if (!Array.isArray(t))
          throw new TypeError(`Expected input to be an Array, got ${typeof t}`);
        t = [...t].map((s) =>
          s instanceof Error
            ? s
            : s !== null && typeof s == "object"
            ? Object.assign(new Error(s.message), s)
            : new Error(s)
        );
        let r = t.map((s) =>
          typeof s.stack == "string" ? eu(Zc(s.stack)) : String(s)
        ).join(`
`);
        (r =
          `
` + Xc(r, 4)),
          super(r),
          (this.name = "AggregateError"),
          Object.defineProperty(this, "_errors", { value: t });
      }
      *[Symbol.iterator]() {
        for (let t of this._errors) yield t;
      }
    };
  uo.exports = vt;
});
var Fo = S(Se());
var oi = "9.1.5";
function ni(e) {
  if (!e.data) return { ...e, data: [] };
  if (!("total_count" in e.data && !("url" in e.data))) return e;
  let r = e.data.incomplete_results,
    s = e.data.repository_selection,
    o = e.data.total_count;
  delete e.data.incomplete_results,
    delete e.data.repository_selection,
    delete e.data.total_count;
  let n = Object.keys(e.data)[0],
    a = e.data[n];
  return (
    (e.data = a),
    typeof r < "u" && (e.data.incomplete_results = r),
    typeof s < "u" && (e.data.repository_selection = s),
    (e.data.total_count = o),
    e
  );
}
function ct(e, t, r) {
  let s = typeof t == "function" ? t.endpoint(r) : e.request.endpoint(t, r),
    o = typeof t == "function" ? t : e.request,
    n = s.method,
    a = s.headers,
    c = s.url;
  return {
    [Symbol.asyncIterator]: () => ({
      async next() {
        if (!c) return { done: !0 };
        try {
          let u = await o({ method: n, url: c, headers: a }),
            f = ni(u);
          return (
            (c = ((f.headers.link || "").match(/<([^>]+)>;\s*rel="next"/) ||
              [])[1]),
            { value: f }
          );
        } catch (u) {
          if (u.status !== 409) throw u;
          return (c = ""), { value: { status: 200, headers: {}, data: [] } };
        }
      },
    }),
  };
}
function $r(e, t, r, s) {
  return (
    typeof r == "function" && ((s = r), (r = void 0)),
    Wr(e, [], ct(e, t, r)[Symbol.asyncIterator](), s)
  );
}
function Wr(e, t, r, s) {
  return r.next().then((o) => {
    if (o.done) return t;
    let n = !1;
    function a() {
      n = !0;
    }
    return (
      (t = t.concat(s ? s(o.value, a) : o.value.data)), n ? t : Wr(e, t, r, s)
    );
  });
}
var Oe = Object.assign($r, { iterator: ct });
function ut(e) {
  return {
    paginate: Object.assign($r.bind(null, e), { iterator: ct.bind(null, e) }),
  };
}
ut.VERSION = oi;
var ii = (e, t) =>
    `The cursor at "${e.join(
      ","
    )}" did not change its value "${t}" after a page transition. Please make sure your that your query is set up correctly.`,
  ai = class extends Error {
    constructor(e, t) {
      super(ii(e.pathInQuery, t)),
        (this.pageInfo = e),
        (this.cursorValue = t),
        (this.name = "MissingCursorChangeError"),
        Error.captureStackTrace &&
          Error.captureStackTrace(this, this.constructor);
    }
  },
  ci = class extends Error {
    constructor(e) {
      super(
        `No pageInfo property found in response. Please make sure to specify the pageInfo in your query. Response-Data: ${JSON.stringify(
          e,
          null,
          2
        )}`
      ),
        (this.response = e),
        (this.name = "MissingPageInfo"),
        Error.captureStackTrace &&
          Error.captureStackTrace(this, this.constructor);
    }
  },
  ui = (e) => Object.prototype.toString.call(e) === "[object Object]";
function Hr(e) {
  let t = zr(e, "pageInfo");
  if (t.length === 0) throw new ci(e);
  return t;
}
var zr = (e, t, r = []) => {
    for (let s of Object.keys(e)) {
      let o = [...r, s],
        n = e[s];
      if (n.hasOwnProperty(t)) return o;
      if (ui(n)) {
        let a = zr(n, t, o);
        if (a.length > 0) return a;
      }
    }
    return [];
  },
  Te = (e, t) => t.reduce((r, s) => r[s], e),
  lt = (e, t, r) => {
    let s = t[t.length - 1],
      o = [...t].slice(0, -1),
      n = Te(e, o);
    typeof r == "function" ? (n[s] = r(n[s])) : (n[s] = r);
  },
  li = (e) => {
    let t = Hr(e);
    return { pathInQuery: t, pageInfo: Te(e, [...t, "pageInfo"]) };
  },
  Mr = (e) => e.hasOwnProperty("hasNextPage"),
  pi = (e) => (Mr(e) ? e.endCursor : e.startCursor),
  di = (e) => (Mr(e) ? e.hasNextPage : e.hasPreviousPage),
  Nr =
    (e) =>
    (t, r = {}) => {
      let s = !0,
        o = { ...r };
      return {
        [Symbol.asyncIterator]: () => ({
          async next() {
            if (!s) return { done: !0, value: {} };
            let n = await e.graphql(t, o),
              a = li(n),
              c = pi(a.pageInfo);
            if (((s = di(a.pageInfo)), s && c === o.cursor)) throw new ai(a, c);
            return (o = { ...o, cursor: c }), { done: !1, value: n };
          },
        }),
      };
    },
  hi = (e, t) => {
    if (Object.keys(e).length === 0) return Object.assign(e, t);
    let r = Hr(e),
      s = [...r, "nodes"],
      o = Te(t, s);
    o && lt(e, s, (u) => [...u, ...o]);
    let n = [...r, "edges"],
      a = Te(t, n);
    a && lt(e, n, (u) => [...u, ...a]);
    let c = [...r, "pageInfo"];
    return lt(e, c, Te(t, c)), e;
  },
  gi = (e) => {
    let t = Nr(e);
    return async (r, s = {}) => {
      let o = {};
      for await (let n of t(r, s)) o = hi(o, n);
      return o;
    };
  };
function Br(e) {
  return (
    e.graphql,
    {
      graphql: Object.assign(e.graphql, {
        paginate: Object.assign(gi(e), { iterator: Nr(e) }),
      }),
    }
  );
}
var Vr = "10.2.0",
  mi = {
    actions: {
      addCustomLabelsToSelfHostedRunnerForOrg: [
        "POST /orgs/{org}/actions/runners/{runner_id}/labels",
      ],
      addCustomLabelsToSelfHostedRunnerForRepo: [
        "POST /repos/{owner}/{repo}/actions/runners/{runner_id}/labels",
      ],
      addSelectedRepoToOrgSecret: [
        "PUT /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}",
      ],
      addSelectedRepoToOrgVariable: [
        "PUT /orgs/{org}/actions/variables/{name}/repositories/{repository_id}",
      ],
      approveWorkflowRun: [
        "POST /repos/{owner}/{repo}/actions/runs/{run_id}/approve",
      ],
      cancelWorkflowRun: [
        "POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel",
      ],
      createEnvironmentVariable: [
        "POST /repositories/{repository_id}/environments/{environment_name}/variables",
      ],
      createOrUpdateEnvironmentSecret: [
        "PUT /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}",
      ],
      createOrUpdateOrgSecret: [
        "PUT /orgs/{org}/actions/secrets/{secret_name}",
      ],
      createOrUpdateRepoSecret: [
        "PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}",
      ],
      createOrgVariable: ["POST /orgs/{org}/actions/variables"],
      createRegistrationTokenForOrg: [
        "POST /orgs/{org}/actions/runners/registration-token",
      ],
      createRegistrationTokenForRepo: [
        "POST /repos/{owner}/{repo}/actions/runners/registration-token",
      ],
      createRemoveTokenForOrg: [
        "POST /orgs/{org}/actions/runners/remove-token",
      ],
      createRemoveTokenForRepo: [
        "POST /repos/{owner}/{repo}/actions/runners/remove-token",
      ],
      createRepoVariable: ["POST /repos/{owner}/{repo}/actions/variables"],
      createWorkflowDispatch: [
        "POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches",
      ],
      deleteActionsCacheById: [
        "DELETE /repos/{owner}/{repo}/actions/caches/{cache_id}",
      ],
      deleteActionsCacheByKey: [
        "DELETE /repos/{owner}/{repo}/actions/caches{?key,ref}",
      ],
      deleteArtifact: [
        "DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}",
      ],
      deleteEnvironmentSecret: [
        "DELETE /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}",
      ],
      deleteEnvironmentVariable: [
        "DELETE /repositories/{repository_id}/environments/{environment_name}/variables/{name}",
      ],
      deleteOrgSecret: ["DELETE /orgs/{org}/actions/secrets/{secret_name}"],
      deleteOrgVariable: ["DELETE /orgs/{org}/actions/variables/{name}"],
      deleteRepoSecret: [
        "DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}",
      ],
      deleteRepoVariable: [
        "DELETE /repos/{owner}/{repo}/actions/variables/{name}",
      ],
      deleteSelfHostedRunnerFromOrg: [
        "DELETE /orgs/{org}/actions/runners/{runner_id}",
      ],
      deleteSelfHostedRunnerFromRepo: [
        "DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}",
      ],
      deleteWorkflowRun: ["DELETE /repos/{owner}/{repo}/actions/runs/{run_id}"],
      deleteWorkflowRunLogs: [
        "DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs",
      ],
      disableSelectedRepositoryGithubActionsOrganization: [
        "DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}",
      ],
      disableWorkflow: [
        "PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable",
      ],
      downloadArtifact: [
        "GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}",
      ],
      downloadJobLogsForWorkflowRun: [
        "GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs",
      ],
      downloadWorkflowRunAttemptLogs: [
        "GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs",
      ],
      downloadWorkflowRunLogs: [
        "GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs",
      ],
      enableSelectedRepositoryGithubActionsOrganization: [
        "PUT /orgs/{org}/actions/permissions/repositories/{repository_id}",
      ],
      enableWorkflow: [
        "PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable",
      ],
      forceCancelWorkflowRun: [
        "POST /repos/{owner}/{repo}/actions/runs/{run_id}/force-cancel",
      ],
      generateRunnerJitconfigForOrg: [
        "POST /orgs/{org}/actions/runners/generate-jitconfig",
      ],
      generateRunnerJitconfigForRepo: [
        "POST /repos/{owner}/{repo}/actions/runners/generate-jitconfig",
      ],
      getActionsCacheList: ["GET /repos/{owner}/{repo}/actions/caches"],
      getActionsCacheUsage: ["GET /repos/{owner}/{repo}/actions/cache/usage"],
      getActionsCacheUsageByRepoForOrg: [
        "GET /orgs/{org}/actions/cache/usage-by-repository",
      ],
      getActionsCacheUsageForOrg: ["GET /orgs/{org}/actions/cache/usage"],
      getAllowedActionsOrganization: [
        "GET /orgs/{org}/actions/permissions/selected-actions",
      ],
      getAllowedActionsRepository: [
        "GET /repos/{owner}/{repo}/actions/permissions/selected-actions",
      ],
      getArtifact: [
        "GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}",
      ],
      getEnvironmentPublicKey: [
        "GET /repositories/{repository_id}/environments/{environment_name}/secrets/public-key",
      ],
      getEnvironmentSecret: [
        "GET /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}",
      ],
      getEnvironmentVariable: [
        "GET /repositories/{repository_id}/environments/{environment_name}/variables/{name}",
      ],
      getGithubActionsDefaultWorkflowPermissionsOrganization: [
        "GET /orgs/{org}/actions/permissions/workflow",
      ],
      getGithubActionsDefaultWorkflowPermissionsRepository: [
        "GET /repos/{owner}/{repo}/actions/permissions/workflow",
      ],
      getGithubActionsPermissionsOrganization: [
        "GET /orgs/{org}/actions/permissions",
      ],
      getGithubActionsPermissionsRepository: [
        "GET /repos/{owner}/{repo}/actions/permissions",
      ],
      getJobForWorkflowRun: ["GET /repos/{owner}/{repo}/actions/jobs/{job_id}"],
      getOrgPublicKey: ["GET /orgs/{org}/actions/secrets/public-key"],
      getOrgSecret: ["GET /orgs/{org}/actions/secrets/{secret_name}"],
      getOrgVariable: ["GET /orgs/{org}/actions/variables/{name}"],
      getPendingDeploymentsForRun: [
        "GET /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments",
      ],
      getRepoPermissions: [
        "GET /repos/{owner}/{repo}/actions/permissions",
        {},
        { renamed: ["actions", "getGithubActionsPermissionsRepository"] },
      ],
      getRepoPublicKey: [
        "GET /repos/{owner}/{repo}/actions/secrets/public-key",
      ],
      getRepoSecret: [
        "GET /repos/{owner}/{repo}/actions/secrets/{secret_name}",
      ],
      getRepoVariable: ["GET /repos/{owner}/{repo}/actions/variables/{name}"],
      getReviewsForRun: [
        "GET /repos/{owner}/{repo}/actions/runs/{run_id}/approvals",
      ],
      getSelfHostedRunnerForOrg: [
        "GET /orgs/{org}/actions/runners/{runner_id}",
      ],
      getSelfHostedRunnerForRepo: [
        "GET /repos/{owner}/{repo}/actions/runners/{runner_id}",
      ],
      getWorkflow: [
        "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}",
      ],
      getWorkflowAccessToRepository: [
        "GET /repos/{owner}/{repo}/actions/permissions/access",
      ],
      getWorkflowRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}"],
      getWorkflowRunAttempt: [
        "GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}",
      ],
      getWorkflowRunUsage: [
        "GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing",
      ],
      getWorkflowUsage: [
        "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing",
      ],
      listArtifactsForRepo: ["GET /repos/{owner}/{repo}/actions/artifacts"],
      listEnvironmentSecrets: [
        "GET /repositories/{repository_id}/environments/{environment_name}/secrets",
      ],
      listEnvironmentVariables: [
        "GET /repositories/{repository_id}/environments/{environment_name}/variables",
      ],
      listJobsForWorkflowRun: [
        "GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs",
      ],
      listJobsForWorkflowRunAttempt: [
        "GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs",
      ],
      listLabelsForSelfHostedRunnerForOrg: [
        "GET /orgs/{org}/actions/runners/{runner_id}/labels",
      ],
      listLabelsForSelfHostedRunnerForRepo: [
        "GET /repos/{owner}/{repo}/actions/runners/{runner_id}/labels",
      ],
      listOrgSecrets: ["GET /orgs/{org}/actions/secrets"],
      listOrgVariables: ["GET /orgs/{org}/actions/variables"],
      listRepoOrganizationSecrets: [
        "GET /repos/{owner}/{repo}/actions/organization-secrets",
      ],
      listRepoOrganizationVariables: [
        "GET /repos/{owner}/{repo}/actions/organization-variables",
      ],
      listRepoSecrets: ["GET /repos/{owner}/{repo}/actions/secrets"],
      listRepoVariables: ["GET /repos/{owner}/{repo}/actions/variables"],
      listRepoWorkflows: ["GET /repos/{owner}/{repo}/actions/workflows"],
      listRunnerApplicationsForOrg: [
        "GET /orgs/{org}/actions/runners/downloads",
      ],
      listRunnerApplicationsForRepo: [
        "GET /repos/{owner}/{repo}/actions/runners/downloads",
      ],
      listSelectedReposForOrgSecret: [
        "GET /orgs/{org}/actions/secrets/{secret_name}/repositories",
      ],
      listSelectedReposForOrgVariable: [
        "GET /orgs/{org}/actions/variables/{name}/repositories",
      ],
      listSelectedRepositoriesEnabledGithubActionsOrganization: [
        "GET /orgs/{org}/actions/permissions/repositories",
      ],
      listSelfHostedRunnersForOrg: ["GET /orgs/{org}/actions/runners"],
      listSelfHostedRunnersForRepo: [
        "GET /repos/{owner}/{repo}/actions/runners",
      ],
      listWorkflowRunArtifacts: [
        "GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts",
      ],
      listWorkflowRuns: [
        "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs",
      ],
      listWorkflowRunsForRepo: ["GET /repos/{owner}/{repo}/actions/runs"],
      reRunJobForWorkflowRun: [
        "POST /repos/{owner}/{repo}/actions/jobs/{job_id}/rerun",
      ],
      reRunWorkflow: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun"],
      reRunWorkflowFailedJobs: [
        "POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun-failed-jobs",
      ],
      removeAllCustomLabelsFromSelfHostedRunnerForOrg: [
        "DELETE /orgs/{org}/actions/runners/{runner_id}/labels",
      ],
      removeAllCustomLabelsFromSelfHostedRunnerForRepo: [
        "DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels",
      ],
      removeCustomLabelFromSelfHostedRunnerForOrg: [
        "DELETE /orgs/{org}/actions/runners/{runner_id}/labels/{name}",
      ],
      removeCustomLabelFromSelfHostedRunnerForRepo: [
        "DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels/{name}",
      ],
      removeSelectedRepoFromOrgSecret: [
        "DELETE /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}",
      ],
      removeSelectedRepoFromOrgVariable: [
        "DELETE /orgs/{org}/actions/variables/{name}/repositories/{repository_id}",
      ],
      reviewCustomGatesForRun: [
        "POST /repos/{owner}/{repo}/actions/runs/{run_id}/deployment_protection_rule",
      ],
      reviewPendingDeploymentsForRun: [
        "POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments",
      ],
      setAllowedActionsOrganization: [
        "PUT /orgs/{org}/actions/permissions/selected-actions",
      ],
      setAllowedActionsRepository: [
        "PUT /repos/{owner}/{repo}/actions/permissions/selected-actions",
      ],
      setCustomLabelsForSelfHostedRunnerForOrg: [
        "PUT /orgs/{org}/actions/runners/{runner_id}/labels",
      ],
      setCustomLabelsForSelfHostedRunnerForRepo: [
        "PUT /repos/{owner}/{repo}/actions/runners/{runner_id}/labels",
      ],
      setGithubActionsDefaultWorkflowPermissionsOrganization: [
        "PUT /orgs/{org}/actions/permissions/workflow",
      ],
      setGithubActionsDefaultWorkflowPermissionsRepository: [
        "PUT /repos/{owner}/{repo}/actions/permissions/workflow",
      ],
      setGithubActionsPermissionsOrganization: [
        "PUT /orgs/{org}/actions/permissions",
      ],
      setGithubActionsPermissionsRepository: [
        "PUT /repos/{owner}/{repo}/actions/permissions",
      ],
      setSelectedReposForOrgSecret: [
        "PUT /orgs/{org}/actions/secrets/{secret_name}/repositories",
      ],
      setSelectedReposForOrgVariable: [
        "PUT /orgs/{org}/actions/variables/{name}/repositories",
      ],
      setSelectedRepositoriesEnabledGithubActionsOrganization: [
        "PUT /orgs/{org}/actions/permissions/repositories",
      ],
      setWorkflowAccessToRepository: [
        "PUT /repos/{owner}/{repo}/actions/permissions/access",
      ],
      updateEnvironmentVariable: [
        "PATCH /repositories/{repository_id}/environments/{environment_name}/variables/{name}",
      ],
      updateOrgVariable: ["PATCH /orgs/{org}/actions/variables/{name}"],
      updateRepoVariable: [
        "PATCH /repos/{owner}/{repo}/actions/variables/{name}",
      ],
    },
    activity: {
      checkRepoIsStarredByAuthenticatedUser: [
        "GET /user/starred/{owner}/{repo}",
      ],
      deleteRepoSubscription: ["DELETE /repos/{owner}/{repo}/subscription"],
      deleteThreadSubscription: [
        "DELETE /notifications/threads/{thread_id}/subscription",
      ],
      getFeeds: ["GET /feeds"],
      getRepoSubscription: ["GET /repos/{owner}/{repo}/subscription"],
      getThread: ["GET /notifications/threads/{thread_id}"],
      getThreadSubscriptionForAuthenticatedUser: [
        "GET /notifications/threads/{thread_id}/subscription",
      ],
      listEventsForAuthenticatedUser: ["GET /users/{username}/events"],
      listNotificationsForAuthenticatedUser: ["GET /notifications"],
      listOrgEventsForAuthenticatedUser: [
        "GET /users/{username}/events/orgs/{org}",
      ],
      listPublicEvents: ["GET /events"],
      listPublicEventsForRepoNetwork: ["GET /networks/{owner}/{repo}/events"],
      listPublicEventsForUser: ["GET /users/{username}/events/public"],
      listPublicOrgEvents: ["GET /orgs/{org}/events"],
      listReceivedEventsForUser: ["GET /users/{username}/received_events"],
      listReceivedPublicEventsForUser: [
        "GET /users/{username}/received_events/public",
      ],
      listRepoEvents: ["GET /repos/{owner}/{repo}/events"],
      listRepoNotificationsForAuthenticatedUser: [
        "GET /repos/{owner}/{repo}/notifications",
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
        "PUT /notifications/threads/{thread_id}/subscription",
      ],
      starRepoForAuthenticatedUser: ["PUT /user/starred/{owner}/{repo}"],
      unstarRepoForAuthenticatedUser: ["DELETE /user/starred/{owner}/{repo}"],
    },
    apps: {
      addRepoToInstallation: [
        "PUT /user/installations/{installation_id}/repositories/{repository_id}",
        {},
        { renamed: ["apps", "addRepoToInstallationForAuthenticatedUser"] },
      ],
      addRepoToInstallationForAuthenticatedUser: [
        "PUT /user/installations/{installation_id}/repositories/{repository_id}",
      ],
      checkToken: ["POST /applications/{client_id}/token"],
      createFromManifest: ["POST /app-manifests/{code}/conversions"],
      createInstallationAccessToken: [
        "POST /app/installations/{installation_id}/access_tokens",
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
        "GET /marketplace_listing/accounts/{account_id}",
      ],
      getSubscriptionPlanForAccountStubbed: [
        "GET /marketplace_listing/stubbed/accounts/{account_id}",
      ],
      getUserInstallation: ["GET /users/{username}/installation"],
      getWebhookConfigForApp: ["GET /app/hook/config"],
      getWebhookDelivery: ["GET /app/hook/deliveries/{delivery_id}"],
      listAccountsForPlan: [
        "GET /marketplace_listing/plans/{plan_id}/accounts",
      ],
      listAccountsForPlanStubbed: [
        "GET /marketplace_listing/stubbed/plans/{plan_id}/accounts",
      ],
      listInstallationReposForAuthenticatedUser: [
        "GET /user/installations/{installation_id}/repositories",
      ],
      listInstallationRequestsForAuthenticatedApp: [
        "GET /app/installation-requests",
      ],
      listInstallations: ["GET /app/installations"],
      listInstallationsForAuthenticatedUser: ["GET /user/installations"],
      listPlans: ["GET /marketplace_listing/plans"],
      listPlansStubbed: ["GET /marketplace_listing/stubbed/plans"],
      listReposAccessibleToInstallation: ["GET /installation/repositories"],
      listSubscriptionsForAuthenticatedUser: [
        "GET /user/marketplace_purchases",
      ],
      listSubscriptionsForAuthenticatedUserStubbed: [
        "GET /user/marketplace_purchases/stubbed",
      ],
      listWebhookDeliveries: ["GET /app/hook/deliveries"],
      redeliverWebhookDelivery: [
        "POST /app/hook/deliveries/{delivery_id}/attempts",
      ],
      removeRepoFromInstallation: [
        "DELETE /user/installations/{installation_id}/repositories/{repository_id}",
        {},
        { renamed: ["apps", "removeRepoFromInstallationForAuthenticatedUser"] },
      ],
      removeRepoFromInstallationForAuthenticatedUser: [
        "DELETE /user/installations/{installation_id}/repositories/{repository_id}",
      ],
      resetToken: ["PATCH /applications/{client_id}/token"],
      revokeInstallationAccessToken: ["DELETE /installation/token"],
      scopeToken: ["POST /applications/{client_id}/token/scoped"],
      suspendInstallation: [
        "PUT /app/installations/{installation_id}/suspended",
      ],
      unsuspendInstallation: [
        "DELETE /app/installations/{installation_id}/suspended",
      ],
      updateWebhookConfigForApp: ["PATCH /app/hook/config"],
    },
    billing: {
      getGithubActionsBillingOrg: ["GET /orgs/{org}/settings/billing/actions"],
      getGithubActionsBillingUser: [
        "GET /users/{username}/settings/billing/actions",
      ],
      getGithubPackagesBillingOrg: [
        "GET /orgs/{org}/settings/billing/packages",
      ],
      getGithubPackagesBillingUser: [
        "GET /users/{username}/settings/billing/packages",
      ],
      getSharedStorageBillingOrg: [
        "GET /orgs/{org}/settings/billing/shared-storage",
      ],
      getSharedStorageBillingUser: [
        "GET /users/{username}/settings/billing/shared-storage",
      ],
    },
    checks: {
      create: ["POST /repos/{owner}/{repo}/check-runs"],
      createSuite: ["POST /repos/{owner}/{repo}/check-suites"],
      get: ["GET /repos/{owner}/{repo}/check-runs/{check_run_id}"],
      getSuite: ["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}"],
      listAnnotations: [
        "GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations",
      ],
      listForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/check-runs"],
      listForSuite: [
        "GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs",
      ],
      listSuitesForRef: [
        "GET /repos/{owner}/{repo}/commits/{ref}/check-suites",
      ],
      rerequestRun: [
        "POST /repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest",
      ],
      rerequestSuite: [
        "POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest",
      ],
      setSuitesPreferences: [
        "PATCH /repos/{owner}/{repo}/check-suites/preferences",
      ],
      update: ["PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}"],
    },
    codeScanning: {
      deleteAnalysis: [
        "DELETE /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}{?confirm_delete}",
      ],
      getAlert: [
        "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}",
        {},
        { renamedParameters: { alert_id: "alert_number" } },
      ],
      getAnalysis: [
        "GET /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}",
      ],
      getCodeqlDatabase: [
        "GET /repos/{owner}/{repo}/code-scanning/codeql/databases/{language}",
      ],
      getDefaultSetup: [
        "GET /repos/{owner}/{repo}/code-scanning/default-setup",
      ],
      getSarif: ["GET /repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}"],
      listAlertInstances: [
        "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances",
      ],
      listAlertsForOrg: ["GET /orgs/{org}/code-scanning/alerts"],
      listAlertsForRepo: ["GET /repos/{owner}/{repo}/code-scanning/alerts"],
      listAlertsInstances: [
        "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances",
        {},
        { renamed: ["codeScanning", "listAlertInstances"] },
      ],
      listCodeqlDatabases: [
        "GET /repos/{owner}/{repo}/code-scanning/codeql/databases",
      ],
      listRecentAnalyses: ["GET /repos/{owner}/{repo}/code-scanning/analyses"],
      updateAlert: [
        "PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}",
      ],
      updateDefaultSetup: [
        "PATCH /repos/{owner}/{repo}/code-scanning/default-setup",
      ],
      uploadSarif: ["POST /repos/{owner}/{repo}/code-scanning/sarifs"],
    },
    codesOfConduct: {
      getAllCodesOfConduct: ["GET /codes_of_conduct"],
      getConductCode: ["GET /codes_of_conduct/{key}"],
    },
    codespaces: {
      addRepositoryForSecretForAuthenticatedUser: [
        "PUT /user/codespaces/secrets/{secret_name}/repositories/{repository_id}",
      ],
      addSelectedRepoToOrgSecret: [
        "PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}",
      ],
      checkPermissionsForDevcontainer: [
        "GET /repos/{owner}/{repo}/codespaces/permissions_check",
      ],
      codespaceMachinesForAuthenticatedUser: [
        "GET /user/codespaces/{codespace_name}/machines",
      ],
      createForAuthenticatedUser: ["POST /user/codespaces"],
      createOrUpdateOrgSecret: [
        "PUT /orgs/{org}/codespaces/secrets/{secret_name}",
      ],
      createOrUpdateRepoSecret: [
        "PUT /repos/{owner}/{repo}/codespaces/secrets/{secret_name}",
      ],
      createOrUpdateSecretForAuthenticatedUser: [
        "PUT /user/codespaces/secrets/{secret_name}",
      ],
      createWithPrForAuthenticatedUser: [
        "POST /repos/{owner}/{repo}/pulls/{pull_number}/codespaces",
      ],
      createWithRepoForAuthenticatedUser: [
        "POST /repos/{owner}/{repo}/codespaces",
      ],
      deleteForAuthenticatedUser: ["DELETE /user/codespaces/{codespace_name}"],
      deleteFromOrganization: [
        "DELETE /orgs/{org}/members/{username}/codespaces/{codespace_name}",
      ],
      deleteOrgSecret: ["DELETE /orgs/{org}/codespaces/secrets/{secret_name}"],
      deleteRepoSecret: [
        "DELETE /repos/{owner}/{repo}/codespaces/secrets/{secret_name}",
      ],
      deleteSecretForAuthenticatedUser: [
        "DELETE /user/codespaces/secrets/{secret_name}",
      ],
      exportForAuthenticatedUser: [
        "POST /user/codespaces/{codespace_name}/exports",
      ],
      getCodespacesForUserInOrg: [
        "GET /orgs/{org}/members/{username}/codespaces",
      ],
      getExportDetailsForAuthenticatedUser: [
        "GET /user/codespaces/{codespace_name}/exports/{export_id}",
      ],
      getForAuthenticatedUser: ["GET /user/codespaces/{codespace_name}"],
      getOrgPublicKey: ["GET /orgs/{org}/codespaces/secrets/public-key"],
      getOrgSecret: ["GET /orgs/{org}/codespaces/secrets/{secret_name}"],
      getPublicKeyForAuthenticatedUser: [
        "GET /user/codespaces/secrets/public-key",
      ],
      getRepoPublicKey: [
        "GET /repos/{owner}/{repo}/codespaces/secrets/public-key",
      ],
      getRepoSecret: [
        "GET /repos/{owner}/{repo}/codespaces/secrets/{secret_name}",
      ],
      getSecretForAuthenticatedUser: [
        "GET /user/codespaces/secrets/{secret_name}",
      ],
      listDevcontainersInRepositoryForAuthenticatedUser: [
        "GET /repos/{owner}/{repo}/codespaces/devcontainers",
      ],
      listForAuthenticatedUser: ["GET /user/codespaces"],
      listInOrganization: [
        "GET /orgs/{org}/codespaces",
        {},
        { renamedParameters: { org_id: "org" } },
      ],
      listInRepositoryForAuthenticatedUser: [
        "GET /repos/{owner}/{repo}/codespaces",
      ],
      listOrgSecrets: ["GET /orgs/{org}/codespaces/secrets"],
      listRepoSecrets: ["GET /repos/{owner}/{repo}/codespaces/secrets"],
      listRepositoriesForSecretForAuthenticatedUser: [
        "GET /user/codespaces/secrets/{secret_name}/repositories",
      ],
      listSecretsForAuthenticatedUser: ["GET /user/codespaces/secrets"],
      listSelectedReposForOrgSecret: [
        "GET /orgs/{org}/codespaces/secrets/{secret_name}/repositories",
      ],
      preFlightWithRepoForAuthenticatedUser: [
        "GET /repos/{owner}/{repo}/codespaces/new",
      ],
      publishForAuthenticatedUser: [
        "POST /user/codespaces/{codespace_name}/publish",
      ],
      removeRepositoryForSecretForAuthenticatedUser: [
        "DELETE /user/codespaces/secrets/{secret_name}/repositories/{repository_id}",
      ],
      removeSelectedRepoFromOrgSecret: [
        "DELETE /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}",
      ],
      repoMachinesForAuthenticatedUser: [
        "GET /repos/{owner}/{repo}/codespaces/machines",
      ],
      setRepositoriesForSecretForAuthenticatedUser: [
        "PUT /user/codespaces/secrets/{secret_name}/repositories",
      ],
      setSelectedReposForOrgSecret: [
        "PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories",
      ],
      startForAuthenticatedUser: [
        "POST /user/codespaces/{codespace_name}/start",
      ],
      stopForAuthenticatedUser: ["POST /user/codespaces/{codespace_name}/stop"],
      stopInOrganization: [
        "POST /orgs/{org}/members/{username}/codespaces/{codespace_name}/stop",
      ],
      updateForAuthenticatedUser: ["PATCH /user/codespaces/{codespace_name}"],
    },
    copilot: {
      addCopilotForBusinessSeatsForTeams: [
        "POST /orgs/{org}/copilot/billing/selected_teams",
      ],
      addCopilotForBusinessSeatsForUsers: [
        "POST /orgs/{org}/copilot/billing/selected_users",
      ],
      cancelCopilotSeatAssignmentForTeams: [
        "DELETE /orgs/{org}/copilot/billing/selected_teams",
      ],
      cancelCopilotSeatAssignmentForUsers: [
        "DELETE /orgs/{org}/copilot/billing/selected_users",
      ],
      getCopilotOrganizationDetails: ["GET /orgs/{org}/copilot/billing"],
      getCopilotSeatDetailsForUser: [
        "GET /orgs/{org}/members/{username}/copilot",
      ],
      listCopilotSeats: ["GET /orgs/{org}/copilot/billing/seats"],
    },
    dependabot: {
      addSelectedRepoToOrgSecret: [
        "PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}",
      ],
      createOrUpdateOrgSecret: [
        "PUT /orgs/{org}/dependabot/secrets/{secret_name}",
      ],
      createOrUpdateRepoSecret: [
        "PUT /repos/{owner}/{repo}/dependabot/secrets/{secret_name}",
      ],
      deleteOrgSecret: ["DELETE /orgs/{org}/dependabot/secrets/{secret_name}"],
      deleteRepoSecret: [
        "DELETE /repos/{owner}/{repo}/dependabot/secrets/{secret_name}",
      ],
      getAlert: ["GET /repos/{owner}/{repo}/dependabot/alerts/{alert_number}"],
      getOrgPublicKey: ["GET /orgs/{org}/dependabot/secrets/public-key"],
      getOrgSecret: ["GET /orgs/{org}/dependabot/secrets/{secret_name}"],
      getRepoPublicKey: [
        "GET /repos/{owner}/{repo}/dependabot/secrets/public-key",
      ],
      getRepoSecret: [
        "GET /repos/{owner}/{repo}/dependabot/secrets/{secret_name}",
      ],
      listAlertsForEnterprise: [
        "GET /enterprises/{enterprise}/dependabot/alerts",
      ],
      listAlertsForOrg: ["GET /orgs/{org}/dependabot/alerts"],
      listAlertsForRepo: ["GET /repos/{owner}/{repo}/dependabot/alerts"],
      listOrgSecrets: ["GET /orgs/{org}/dependabot/secrets"],
      listRepoSecrets: ["GET /repos/{owner}/{repo}/dependabot/secrets"],
      listSelectedReposForOrgSecret: [
        "GET /orgs/{org}/dependabot/secrets/{secret_name}/repositories",
      ],
      removeSelectedRepoFromOrgSecret: [
        "DELETE /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}",
      ],
      setSelectedReposForOrgSecret: [
        "PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories",
      ],
      updateAlert: [
        "PATCH /repos/{owner}/{repo}/dependabot/alerts/{alert_number}",
      ],
    },
    dependencyGraph: {
      createRepositorySnapshot: [
        "POST /repos/{owner}/{repo}/dependency-graph/snapshots",
      ],
      diffRange: [
        "GET /repos/{owner}/{repo}/dependency-graph/compare/{basehead}",
      ],
      exportSbom: ["GET /repos/{owner}/{repo}/dependency-graph/sbom"],
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
      updateComment: ["PATCH /gists/{gist_id}/comments/{comment_id}"],
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
      updateRef: ["PATCH /repos/{owner}/{repo}/git/refs/{ref}"],
    },
    gitignore: {
      getAllTemplates: ["GET /gitignore/templates"],
      getTemplate: ["GET /gitignore/templates/{name}"],
    },
    interactions: {
      getRestrictionsForAuthenticatedUser: ["GET /user/interaction-limits"],
      getRestrictionsForOrg: ["GET /orgs/{org}/interaction-limits"],
      getRestrictionsForRepo: ["GET /repos/{owner}/{repo}/interaction-limits"],
      getRestrictionsForYourPublicRepos: [
        "GET /user/interaction-limits",
        {},
        { renamed: ["interactions", "getRestrictionsForAuthenticatedUser"] },
      ],
      removeRestrictionsForAuthenticatedUser: [
        "DELETE /user/interaction-limits",
      ],
      removeRestrictionsForOrg: ["DELETE /orgs/{org}/interaction-limits"],
      removeRestrictionsForRepo: [
        "DELETE /repos/{owner}/{repo}/interaction-limits",
      ],
      removeRestrictionsForYourPublicRepos: [
        "DELETE /user/interaction-limits",
        {},
        { renamed: ["interactions", "removeRestrictionsForAuthenticatedUser"] },
      ],
      setRestrictionsForAuthenticatedUser: ["PUT /user/interaction-limits"],
      setRestrictionsForOrg: ["PUT /orgs/{org}/interaction-limits"],
      setRestrictionsForRepo: ["PUT /repos/{owner}/{repo}/interaction-limits"],
      setRestrictionsForYourPublicRepos: [
        "PUT /user/interaction-limits",
        {},
        { renamed: ["interactions", "setRestrictionsForAuthenticatedUser"] },
      ],
    },
    issues: {
      addAssignees: [
        "POST /repos/{owner}/{repo}/issues/{issue_number}/assignees",
      ],
      addLabels: ["POST /repos/{owner}/{repo}/issues/{issue_number}/labels"],
      checkUserCanBeAssigned: [
        "GET /repos/{owner}/{repo}/assignees/{assignee}",
      ],
      checkUserCanBeAssignedToIssue: [
        "GET /repos/{owner}/{repo}/issues/{issue_number}/assignees/{assignee}",
      ],
      create: ["POST /repos/{owner}/{repo}/issues"],
      createComment: [
        "POST /repos/{owner}/{repo}/issues/{issue_number}/comments",
      ],
      createLabel: ["POST /repos/{owner}/{repo}/labels"],
      createMilestone: ["POST /repos/{owner}/{repo}/milestones"],
      deleteComment: [
        "DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}",
      ],
      deleteLabel: ["DELETE /repos/{owner}/{repo}/labels/{name}"],
      deleteMilestone: [
        "DELETE /repos/{owner}/{repo}/milestones/{milestone_number}",
      ],
      get: ["GET /repos/{owner}/{repo}/issues/{issue_number}"],
      getComment: ["GET /repos/{owner}/{repo}/issues/comments/{comment_id}"],
      getEvent: ["GET /repos/{owner}/{repo}/issues/events/{event_id}"],
      getLabel: ["GET /repos/{owner}/{repo}/labels/{name}"],
      getMilestone: ["GET /repos/{owner}/{repo}/milestones/{milestone_number}"],
      list: ["GET /issues"],
      listAssignees: ["GET /repos/{owner}/{repo}/assignees"],
      listComments: [
        "GET /repos/{owner}/{repo}/issues/{issue_number}/comments",
      ],
      listCommentsForRepo: ["GET /repos/{owner}/{repo}/issues/comments"],
      listEvents: ["GET /repos/{owner}/{repo}/issues/{issue_number}/events"],
      listEventsForRepo: ["GET /repos/{owner}/{repo}/issues/events"],
      listEventsForTimeline: [
        "GET /repos/{owner}/{repo}/issues/{issue_number}/timeline",
      ],
      listForAuthenticatedUser: ["GET /user/issues"],
      listForOrg: ["GET /orgs/{org}/issues"],
      listForRepo: ["GET /repos/{owner}/{repo}/issues"],
      listLabelsForMilestone: [
        "GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels",
      ],
      listLabelsForRepo: ["GET /repos/{owner}/{repo}/labels"],
      listLabelsOnIssue: [
        "GET /repos/{owner}/{repo}/issues/{issue_number}/labels",
      ],
      listMilestones: ["GET /repos/{owner}/{repo}/milestones"],
      lock: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/lock"],
      removeAllLabels: [
        "DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels",
      ],
      removeAssignees: [
        "DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees",
      ],
      removeLabel: [
        "DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}",
      ],
      setLabels: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/labels"],
      unlock: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock"],
      update: ["PATCH /repos/{owner}/{repo}/issues/{issue_number}"],
      updateComment: [
        "PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}",
      ],
      updateLabel: ["PATCH /repos/{owner}/{repo}/labels/{name}"],
      updateMilestone: [
        "PATCH /repos/{owner}/{repo}/milestones/{milestone_number}",
      ],
    },
    licenses: {
      get: ["GET /licenses/{license}"],
      getAllCommonlyUsed: ["GET /licenses"],
      getForRepo: ["GET /repos/{owner}/{repo}/license"],
    },
    markdown: {
      render: ["POST /markdown"],
      renderRaw: [
        "POST /markdown/raw",
        { headers: { "content-type": "text/plain; charset=utf-8" } },
      ],
    },
    meta: {
      get: ["GET /meta"],
      getAllVersions: ["GET /versions"],
      getOctocat: ["GET /octocat"],
      getZen: ["GET /zen"],
      root: ["GET /"],
    },
    migrations: {
      cancelImport: [
        "DELETE /repos/{owner}/{repo}/import",
        {},
        {
          deprecated:
            "octokit.rest.migrations.cancelImport() is deprecated, see https://docs.github.com/rest/migrations/source-imports#cancel-an-import",
        },
      ],
      deleteArchiveForAuthenticatedUser: [
        "DELETE /user/migrations/{migration_id}/archive",
      ],
      deleteArchiveForOrg: [
        "DELETE /orgs/{org}/migrations/{migration_id}/archive",
      ],
      downloadArchiveForOrg: [
        "GET /orgs/{org}/migrations/{migration_id}/archive",
      ],
      getArchiveForAuthenticatedUser: [
        "GET /user/migrations/{migration_id}/archive",
      ],
      getCommitAuthors: [
        "GET /repos/{owner}/{repo}/import/authors",
        {},
        {
          deprecated:
            "octokit.rest.migrations.getCommitAuthors() is deprecated, see https://docs.github.com/rest/migrations/source-imports#get-commit-authors",
        },
      ],
      getImportStatus: [
        "GET /repos/{owner}/{repo}/import",
        {},
        {
          deprecated:
            "octokit.rest.migrations.getImportStatus() is deprecated, see https://docs.github.com/rest/migrations/source-imports#get-an-import-status",
        },
      ],
      getLargeFiles: [
        "GET /repos/{owner}/{repo}/import/large_files",
        {},
        {
          deprecated:
            "octokit.rest.migrations.getLargeFiles() is deprecated, see https://docs.github.com/rest/migrations/source-imports#get-large-files",
        },
      ],
      getStatusForAuthenticatedUser: ["GET /user/migrations/{migration_id}"],
      getStatusForOrg: ["GET /orgs/{org}/migrations/{migration_id}"],
      listForAuthenticatedUser: ["GET /user/migrations"],
      listForOrg: ["GET /orgs/{org}/migrations"],
      listReposForAuthenticatedUser: [
        "GET /user/migrations/{migration_id}/repositories",
      ],
      listReposForOrg: [
        "GET /orgs/{org}/migrations/{migration_id}/repositories",
      ],
      listReposForUser: [
        "GET /user/migrations/{migration_id}/repositories",
        {},
        { renamed: ["migrations", "listReposForAuthenticatedUser"] },
      ],
      mapCommitAuthor: [
        "PATCH /repos/{owner}/{repo}/import/authors/{author_id}",
        {},
        {
          deprecated:
            "octokit.rest.migrations.mapCommitAuthor() is deprecated, see https://docs.github.com/rest/migrations/source-imports#map-a-commit-author",
        },
      ],
      setLfsPreference: [
        "PATCH /repos/{owner}/{repo}/import/lfs",
        {},
        {
          deprecated:
            "octokit.rest.migrations.setLfsPreference() is deprecated, see https://docs.github.com/rest/migrations/source-imports#update-git-lfs-preference",
        },
      ],
      startForAuthenticatedUser: ["POST /user/migrations"],
      startForOrg: ["POST /orgs/{org}/migrations"],
      startImport: [
        "PUT /repos/{owner}/{repo}/import",
        {},
        {
          deprecated:
            "octokit.rest.migrations.startImport() is deprecated, see https://docs.github.com/rest/migrations/source-imports#start-an-import",
        },
      ],
      unlockRepoForAuthenticatedUser: [
        "DELETE /user/migrations/{migration_id}/repos/{repo_name}/lock",
      ],
      unlockRepoForOrg: [
        "DELETE /orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock",
      ],
      updateImport: [
        "PATCH /repos/{owner}/{repo}/import",
        {},
        {
          deprecated:
            "octokit.rest.migrations.updateImport() is deprecated, see https://docs.github.com/rest/migrations/source-imports#update-an-import",
        },
      ],
    },
    orgs: {
      addSecurityManagerTeam: [
        "PUT /orgs/{org}/security-managers/teams/{team_slug}",
      ],
      blockUser: ["PUT /orgs/{org}/blocks/{username}"],
      cancelInvitation: ["DELETE /orgs/{org}/invitations/{invitation_id}"],
      checkBlockedUser: ["GET /orgs/{org}/blocks/{username}"],
      checkMembershipForUser: ["GET /orgs/{org}/members/{username}"],
      checkPublicMembershipForUser: [
        "GET /orgs/{org}/public_members/{username}",
      ],
      convertMemberToOutsideCollaborator: [
        "PUT /orgs/{org}/outside_collaborators/{username}",
      ],
      createInvitation: ["POST /orgs/{org}/invitations"],
      createOrUpdateCustomProperties: ["PATCH /orgs/{org}/properties/schema"],
      createOrUpdateCustomPropertiesValuesForRepos: [
        "PATCH /orgs/{org}/properties/values",
      ],
      createOrUpdateCustomProperty: [
        "PUT /orgs/{org}/properties/schema/{custom_property_name}",
      ],
      createWebhook: ["POST /orgs/{org}/hooks"],
      delete: ["DELETE /orgs/{org}"],
      deleteWebhook: ["DELETE /orgs/{org}/hooks/{hook_id}"],
      enableOrDisableSecurityProductOnAllOrgRepos: [
        "POST /orgs/{org}/{security_product}/{enablement}",
      ],
      get: ["GET /orgs/{org}"],
      getAllCustomProperties: ["GET /orgs/{org}/properties/schema"],
      getCustomProperty: [
        "GET /orgs/{org}/properties/schema/{custom_property_name}",
      ],
      getMembershipForAuthenticatedUser: ["GET /user/memberships/orgs/{org}"],
      getMembershipForUser: ["GET /orgs/{org}/memberships/{username}"],
      getWebhook: ["GET /orgs/{org}/hooks/{hook_id}"],
      getWebhookConfigForOrg: ["GET /orgs/{org}/hooks/{hook_id}/config"],
      getWebhookDelivery: [
        "GET /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}",
      ],
      list: ["GET /organizations"],
      listAppInstallations: ["GET /orgs/{org}/installations"],
      listBlockedUsers: ["GET /orgs/{org}/blocks"],
      listCustomPropertiesValuesForRepos: ["GET /orgs/{org}/properties/values"],
      listFailedInvitations: ["GET /orgs/{org}/failed_invitations"],
      listForAuthenticatedUser: ["GET /user/orgs"],
      listForUser: ["GET /users/{username}/orgs"],
      listInvitationTeams: [
        "GET /orgs/{org}/invitations/{invitation_id}/teams",
      ],
      listMembers: ["GET /orgs/{org}/members"],
      listMembershipsForAuthenticatedUser: ["GET /user/memberships/orgs"],
      listOutsideCollaborators: ["GET /orgs/{org}/outside_collaborators"],
      listPatGrantRepositories: [
        "GET /orgs/{org}/personal-access-tokens/{pat_id}/repositories",
      ],
      listPatGrantRequestRepositories: [
        "GET /orgs/{org}/personal-access-token-requests/{pat_request_id}/repositories",
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
        "POST /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts",
      ],
      removeCustomProperty: [
        "DELETE /orgs/{org}/properties/schema/{custom_property_name}",
      ],
      removeMember: ["DELETE /orgs/{org}/members/{username}"],
      removeMembershipForUser: ["DELETE /orgs/{org}/memberships/{username}"],
      removeOutsideCollaborator: [
        "DELETE /orgs/{org}/outside_collaborators/{username}",
      ],
      removePublicMembershipForAuthenticatedUser: [
        "DELETE /orgs/{org}/public_members/{username}",
      ],
      removeSecurityManagerTeam: [
        "DELETE /orgs/{org}/security-managers/teams/{team_slug}",
      ],
      reviewPatGrantRequest: [
        "POST /orgs/{org}/personal-access-token-requests/{pat_request_id}",
      ],
      reviewPatGrantRequestsInBulk: [
        "POST /orgs/{org}/personal-access-token-requests",
      ],
      setMembershipForUser: ["PUT /orgs/{org}/memberships/{username}"],
      setPublicMembershipForAuthenticatedUser: [
        "PUT /orgs/{org}/public_members/{username}",
      ],
      unblockUser: ["DELETE /orgs/{org}/blocks/{username}"],
      update: ["PATCH /orgs/{org}"],
      updateMembershipForAuthenticatedUser: [
        "PATCH /user/memberships/orgs/{org}",
      ],
      updatePatAccess: ["POST /orgs/{org}/personal-access-tokens/{pat_id}"],
      updatePatAccesses: ["POST /orgs/{org}/personal-access-tokens"],
      updateWebhook: ["PATCH /orgs/{org}/hooks/{hook_id}"],
      updateWebhookConfigForOrg: ["PATCH /orgs/{org}/hooks/{hook_id}/config"],
    },
    packages: {
      deletePackageForAuthenticatedUser: [
        "DELETE /user/packages/{package_type}/{package_name}",
      ],
      deletePackageForOrg: [
        "DELETE /orgs/{org}/packages/{package_type}/{package_name}",
      ],
      deletePackageForUser: [
        "DELETE /users/{username}/packages/{package_type}/{package_name}",
      ],
      deletePackageVersionForAuthenticatedUser: [
        "DELETE /user/packages/{package_type}/{package_name}/versions/{package_version_id}",
      ],
      deletePackageVersionForOrg: [
        "DELETE /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}",
      ],
      deletePackageVersionForUser: [
        "DELETE /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}",
      ],
      getAllPackageVersionsForAPackageOwnedByAnOrg: [
        "GET /orgs/{org}/packages/{package_type}/{package_name}/versions",
        {},
        { renamed: ["packages", "getAllPackageVersionsForPackageOwnedByOrg"] },
      ],
      getAllPackageVersionsForAPackageOwnedByTheAuthenticatedUser: [
        "GET /user/packages/{package_type}/{package_name}/versions",
        {},
        {
          renamed: [
            "packages",
            "getAllPackageVersionsForPackageOwnedByAuthenticatedUser",
          ],
        },
      ],
      getAllPackageVersionsForPackageOwnedByAuthenticatedUser: [
        "GET /user/packages/{package_type}/{package_name}/versions",
      ],
      getAllPackageVersionsForPackageOwnedByOrg: [
        "GET /orgs/{org}/packages/{package_type}/{package_name}/versions",
      ],
      getAllPackageVersionsForPackageOwnedByUser: [
        "GET /users/{username}/packages/{package_type}/{package_name}/versions",
      ],
      getPackageForAuthenticatedUser: [
        "GET /user/packages/{package_type}/{package_name}",
      ],
      getPackageForOrganization: [
        "GET /orgs/{org}/packages/{package_type}/{package_name}",
      ],
      getPackageForUser: [
        "GET /users/{username}/packages/{package_type}/{package_name}",
      ],
      getPackageVersionForAuthenticatedUser: [
        "GET /user/packages/{package_type}/{package_name}/versions/{package_version_id}",
      ],
      getPackageVersionForOrganization: [
        "GET /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}",
      ],
      getPackageVersionForUser: [
        "GET /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}",
      ],
      listDockerMigrationConflictingPackagesForAuthenticatedUser: [
        "GET /user/docker/conflicts",
      ],
      listDockerMigrationConflictingPackagesForOrganization: [
        "GET /orgs/{org}/docker/conflicts",
      ],
      listDockerMigrationConflictingPackagesForUser: [
        "GET /users/{username}/docker/conflicts",
      ],
      listPackagesForAuthenticatedUser: ["GET /user/packages"],
      listPackagesForOrganization: ["GET /orgs/{org}/packages"],
      listPackagesForUser: ["GET /users/{username}/packages"],
      restorePackageForAuthenticatedUser: [
        "POST /user/packages/{package_type}/{package_name}/restore{?token}",
      ],
      restorePackageForOrg: [
        "POST /orgs/{org}/packages/{package_type}/{package_name}/restore{?token}",
      ],
      restorePackageForUser: [
        "POST /users/{username}/packages/{package_type}/{package_name}/restore{?token}",
      ],
      restorePackageVersionForAuthenticatedUser: [
        "POST /user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore",
      ],
      restorePackageVersionForOrg: [
        "POST /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore",
      ],
      restorePackageVersionForUser: [
        "POST /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore",
      ],
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
        "GET /projects/{project_id}/collaborators/{username}/permission",
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
        "DELETE /projects/{project_id}/collaborators/{username}",
      ],
      update: ["PATCH /projects/{project_id}"],
      updateCard: ["PATCH /projects/columns/cards/{card_id}"],
      updateColumn: ["PATCH /projects/columns/{column_id}"],
    },
    pulls: {
      checkIfMerged: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/merge"],
      create: ["POST /repos/{owner}/{repo}/pulls"],
      createReplyForReviewComment: [
        "POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies",
      ],
      createReview: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],
      createReviewComment: [
        "POST /repos/{owner}/{repo}/pulls/{pull_number}/comments",
      ],
      deletePendingReview: [
        "DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}",
      ],
      deleteReviewComment: [
        "DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}",
      ],
      dismissReview: [
        "PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals",
      ],
      get: ["GET /repos/{owner}/{repo}/pulls/{pull_number}"],
      getReview: [
        "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}",
      ],
      getReviewComment: [
        "GET /repos/{owner}/{repo}/pulls/comments/{comment_id}",
      ],
      list: ["GET /repos/{owner}/{repo}/pulls"],
      listCommentsForReview: [
        "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments",
      ],
      listCommits: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/commits"],
      listFiles: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/files"],
      listRequestedReviewers: [
        "GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers",
      ],
      listReviewComments: [
        "GET /repos/{owner}/{repo}/pulls/{pull_number}/comments",
      ],
      listReviewCommentsForRepo: ["GET /repos/{owner}/{repo}/pulls/comments"],
      listReviews: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],
      merge: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge"],
      removeRequestedReviewers: [
        "DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers",
      ],
      requestReviewers: [
        "POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers",
      ],
      submitReview: [
        "POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events",
      ],
      update: ["PATCH /repos/{owner}/{repo}/pulls/{pull_number}"],
      updateBranch: [
        "PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch",
      ],
      updateReview: [
        "PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}",
      ],
      updateReviewComment: [
        "PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}",
      ],
    },
    rateLimit: { get: ["GET /rate_limit"] },
    reactions: {
      createForCommitComment: [
        "POST /repos/{owner}/{repo}/comments/{comment_id}/reactions",
      ],
      createForIssue: [
        "POST /repos/{owner}/{repo}/issues/{issue_number}/reactions",
      ],
      createForIssueComment: [
        "POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions",
      ],
      createForPullRequestReviewComment: [
        "POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions",
      ],
      createForRelease: [
        "POST /repos/{owner}/{repo}/releases/{release_id}/reactions",
      ],
      createForTeamDiscussionCommentInOrg: [
        "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions",
      ],
      createForTeamDiscussionInOrg: [
        "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions",
      ],
      deleteForCommitComment: [
        "DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}",
      ],
      deleteForIssue: [
        "DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}",
      ],
      deleteForIssueComment: [
        "DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}",
      ],
      deleteForPullRequestComment: [
        "DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}",
      ],
      deleteForRelease: [
        "DELETE /repos/{owner}/{repo}/releases/{release_id}/reactions/{reaction_id}",
      ],
      deleteForTeamDiscussion: [
        "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}",
      ],
      deleteForTeamDiscussionComment: [
        "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}",
      ],
      listForCommitComment: [
        "GET /repos/{owner}/{repo}/comments/{comment_id}/reactions",
      ],
      listForIssue: [
        "GET /repos/{owner}/{repo}/issues/{issue_number}/reactions",
      ],
      listForIssueComment: [
        "GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions",
      ],
      listForPullRequestReviewComment: [
        "GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions",
      ],
      listForRelease: [
        "GET /repos/{owner}/{repo}/releases/{release_id}/reactions",
      ],
      listForTeamDiscussionCommentInOrg: [
        "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions",
      ],
      listForTeamDiscussionInOrg: [
        "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions",
      ],
    },
    repos: {
      acceptInvitation: [
        "PATCH /user/repository_invitations/{invitation_id}",
        {},
        { renamed: ["repos", "acceptInvitationForAuthenticatedUser"] },
      ],
      acceptInvitationForAuthenticatedUser: [
        "PATCH /user/repository_invitations/{invitation_id}",
      ],
      addAppAccessRestrictions: [
        "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
        {},
        { mapToData: "apps" },
      ],
      addCollaborator: ["PUT /repos/{owner}/{repo}/collaborators/{username}"],
      addStatusCheckContexts: [
        "POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
        {},
        { mapToData: "contexts" },
      ],
      addTeamAccessRestrictions: [
        "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
        {},
        { mapToData: "teams" },
      ],
      addUserAccessRestrictions: [
        "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
        {},
        { mapToData: "users" },
      ],
      checkAutomatedSecurityFixes: [
        "GET /repos/{owner}/{repo}/automated-security-fixes",
      ],
      checkCollaborator: ["GET /repos/{owner}/{repo}/collaborators/{username}"],
      checkVulnerabilityAlerts: [
        "GET /repos/{owner}/{repo}/vulnerability-alerts",
      ],
      codeownersErrors: ["GET /repos/{owner}/{repo}/codeowners/errors"],
      compareCommits: ["GET /repos/{owner}/{repo}/compare/{base}...{head}"],
      compareCommitsWithBasehead: [
        "GET /repos/{owner}/{repo}/compare/{basehead}",
      ],
      createAutolink: ["POST /repos/{owner}/{repo}/autolinks"],
      createCommitComment: [
        "POST /repos/{owner}/{repo}/commits/{commit_sha}/comments",
      ],
      createCommitSignatureProtection: [
        "POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures",
      ],
      createCommitStatus: ["POST /repos/{owner}/{repo}/statuses/{sha}"],
      createDeployKey: ["POST /repos/{owner}/{repo}/keys"],
      createDeployment: ["POST /repos/{owner}/{repo}/deployments"],
      createDeploymentBranchPolicy: [
        "POST /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies",
      ],
      createDeploymentProtectionRule: [
        "POST /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules",
      ],
      createDeploymentStatus: [
        "POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses",
      ],
      createDispatchEvent: ["POST /repos/{owner}/{repo}/dispatches"],
      createForAuthenticatedUser: ["POST /user/repos"],
      createFork: ["POST /repos/{owner}/{repo}/forks"],
      createInOrg: ["POST /orgs/{org}/repos"],
      createOrUpdateEnvironment: [
        "PUT /repos/{owner}/{repo}/environments/{environment_name}",
      ],
      createOrUpdateFileContents: ["PUT /repos/{owner}/{repo}/contents/{path}"],
      createOrgRuleset: ["POST /orgs/{org}/rulesets"],
      createPagesDeployment: ["POST /repos/{owner}/{repo}/pages/deployment"],
      createPagesSite: ["POST /repos/{owner}/{repo}/pages"],
      createRelease: ["POST /repos/{owner}/{repo}/releases"],
      createRepoRuleset: ["POST /repos/{owner}/{repo}/rulesets"],
      createTagProtection: ["POST /repos/{owner}/{repo}/tags/protection"],
      createUsingTemplate: [
        "POST /repos/{template_owner}/{template_repo}/generate",
      ],
      createWebhook: ["POST /repos/{owner}/{repo}/hooks"],
      declineInvitation: [
        "DELETE /user/repository_invitations/{invitation_id}",
        {},
        { renamed: ["repos", "declineInvitationForAuthenticatedUser"] },
      ],
      declineInvitationForAuthenticatedUser: [
        "DELETE /user/repository_invitations/{invitation_id}",
      ],
      delete: ["DELETE /repos/{owner}/{repo}"],
      deleteAccessRestrictions: [
        "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions",
      ],
      deleteAdminBranchProtection: [
        "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins",
      ],
      deleteAnEnvironment: [
        "DELETE /repos/{owner}/{repo}/environments/{environment_name}",
      ],
      deleteAutolink: ["DELETE /repos/{owner}/{repo}/autolinks/{autolink_id}"],
      deleteBranchProtection: [
        "DELETE /repos/{owner}/{repo}/branches/{branch}/protection",
      ],
      deleteCommitComment: [
        "DELETE /repos/{owner}/{repo}/comments/{comment_id}",
      ],
      deleteCommitSignatureProtection: [
        "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures",
      ],
      deleteDeployKey: ["DELETE /repos/{owner}/{repo}/keys/{key_id}"],
      deleteDeployment: [
        "DELETE /repos/{owner}/{repo}/deployments/{deployment_id}",
      ],
      deleteDeploymentBranchPolicy: [
        "DELETE /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}",
      ],
      deleteFile: ["DELETE /repos/{owner}/{repo}/contents/{path}"],
      deleteInvitation: [
        "DELETE /repos/{owner}/{repo}/invitations/{invitation_id}",
      ],
      deleteOrgRuleset: ["DELETE /orgs/{org}/rulesets/{ruleset_id}"],
      deletePagesSite: ["DELETE /repos/{owner}/{repo}/pages"],
      deletePullRequestReviewProtection: [
        "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews",
      ],
      deleteRelease: ["DELETE /repos/{owner}/{repo}/releases/{release_id}"],
      deleteReleaseAsset: [
        "DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}",
      ],
      deleteRepoRuleset: ["DELETE /repos/{owner}/{repo}/rulesets/{ruleset_id}"],
      deleteTagProtection: [
        "DELETE /repos/{owner}/{repo}/tags/protection/{tag_protection_id}",
      ],
      deleteWebhook: ["DELETE /repos/{owner}/{repo}/hooks/{hook_id}"],
      disableAutomatedSecurityFixes: [
        "DELETE /repos/{owner}/{repo}/automated-security-fixes",
      ],
      disableDeploymentProtectionRule: [
        "DELETE /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}",
      ],
      disablePrivateVulnerabilityReporting: [
        "DELETE /repos/{owner}/{repo}/private-vulnerability-reporting",
      ],
      disableVulnerabilityAlerts: [
        "DELETE /repos/{owner}/{repo}/vulnerability-alerts",
      ],
      downloadArchive: [
        "GET /repos/{owner}/{repo}/zipball/{ref}",
        {},
        { renamed: ["repos", "downloadZipballArchive"] },
      ],
      downloadTarballArchive: ["GET /repos/{owner}/{repo}/tarball/{ref}"],
      downloadZipballArchive: ["GET /repos/{owner}/{repo}/zipball/{ref}"],
      enableAutomatedSecurityFixes: [
        "PUT /repos/{owner}/{repo}/automated-security-fixes",
      ],
      enablePrivateVulnerabilityReporting: [
        "PUT /repos/{owner}/{repo}/private-vulnerability-reporting",
      ],
      enableVulnerabilityAlerts: [
        "PUT /repos/{owner}/{repo}/vulnerability-alerts",
      ],
      generateReleaseNotes: [
        "POST /repos/{owner}/{repo}/releases/generate-notes",
      ],
      get: ["GET /repos/{owner}/{repo}"],
      getAccessRestrictions: [
        "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions",
      ],
      getAdminBranchProtection: [
        "GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins",
      ],
      getAllDeploymentProtectionRules: [
        "GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules",
      ],
      getAllEnvironments: ["GET /repos/{owner}/{repo}/environments"],
      getAllStatusCheckContexts: [
        "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
      ],
      getAllTopics: ["GET /repos/{owner}/{repo}/topics"],
      getAppsWithAccessToProtectedBranch: [
        "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
      ],
      getAutolink: ["GET /repos/{owner}/{repo}/autolinks/{autolink_id}"],
      getBranch: ["GET /repos/{owner}/{repo}/branches/{branch}"],
      getBranchProtection: [
        "GET /repos/{owner}/{repo}/branches/{branch}/protection",
      ],
      getBranchRules: ["GET /repos/{owner}/{repo}/rules/branches/{branch}"],
      getClones: ["GET /repos/{owner}/{repo}/traffic/clones"],
      getCodeFrequencyStats: ["GET /repos/{owner}/{repo}/stats/code_frequency"],
      getCollaboratorPermissionLevel: [
        "GET /repos/{owner}/{repo}/collaborators/{username}/permission",
      ],
      getCombinedStatusForRef: [
        "GET /repos/{owner}/{repo}/commits/{ref}/status",
      ],
      getCommit: ["GET /repos/{owner}/{repo}/commits/{ref}"],
      getCommitActivityStats: [
        "GET /repos/{owner}/{repo}/stats/commit_activity",
      ],
      getCommitComment: ["GET /repos/{owner}/{repo}/comments/{comment_id}"],
      getCommitSignatureProtection: [
        "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures",
      ],
      getCommunityProfileMetrics: [
        "GET /repos/{owner}/{repo}/community/profile",
      ],
      getContent: ["GET /repos/{owner}/{repo}/contents/{path}"],
      getContributorsStats: ["GET /repos/{owner}/{repo}/stats/contributors"],
      getCustomDeploymentProtectionRule: [
        "GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}",
      ],
      getCustomPropertiesValues: [
        "GET /repos/{owner}/{repo}/properties/values",
      ],
      getDeployKey: ["GET /repos/{owner}/{repo}/keys/{key_id}"],
      getDeployment: ["GET /repos/{owner}/{repo}/deployments/{deployment_id}"],
      getDeploymentBranchPolicy: [
        "GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}",
      ],
      getDeploymentStatus: [
        "GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}",
      ],
      getEnvironment: [
        "GET /repos/{owner}/{repo}/environments/{environment_name}",
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
        "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews",
      ],
      getPunchCardStats: ["GET /repos/{owner}/{repo}/stats/punch_card"],
      getReadme: ["GET /repos/{owner}/{repo}/readme"],
      getReadmeInDirectory: ["GET /repos/{owner}/{repo}/readme/{dir}"],
      getRelease: ["GET /repos/{owner}/{repo}/releases/{release_id}"],
      getReleaseAsset: ["GET /repos/{owner}/{repo}/releases/assets/{asset_id}"],
      getReleaseByTag: ["GET /repos/{owner}/{repo}/releases/tags/{tag}"],
      getRepoRuleSuite: [
        "GET /repos/{owner}/{repo}/rulesets/rule-suites/{rule_suite_id}",
      ],
      getRepoRuleSuites: ["GET /repos/{owner}/{repo}/rulesets/rule-suites"],
      getRepoRuleset: ["GET /repos/{owner}/{repo}/rulesets/{ruleset_id}"],
      getRepoRulesets: ["GET /repos/{owner}/{repo}/rulesets"],
      getStatusChecksProtection: [
        "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks",
      ],
      getTeamsWithAccessToProtectedBranch: [
        "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
      ],
      getTopPaths: ["GET /repos/{owner}/{repo}/traffic/popular/paths"],
      getTopReferrers: ["GET /repos/{owner}/{repo}/traffic/popular/referrers"],
      getUsersWithAccessToProtectedBranch: [
        "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
      ],
      getViews: ["GET /repos/{owner}/{repo}/traffic/views"],
      getWebhook: ["GET /repos/{owner}/{repo}/hooks/{hook_id}"],
      getWebhookConfigForRepo: [
        "GET /repos/{owner}/{repo}/hooks/{hook_id}/config",
      ],
      getWebhookDelivery: [
        "GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}",
      ],
      listActivities: ["GET /repos/{owner}/{repo}/activity"],
      listAutolinks: ["GET /repos/{owner}/{repo}/autolinks"],
      listBranches: ["GET /repos/{owner}/{repo}/branches"],
      listBranchesForHeadCommit: [
        "GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head",
      ],
      listCollaborators: ["GET /repos/{owner}/{repo}/collaborators"],
      listCommentsForCommit: [
        "GET /repos/{owner}/{repo}/commits/{commit_sha}/comments",
      ],
      listCommitCommentsForRepo: ["GET /repos/{owner}/{repo}/comments"],
      listCommitStatusesForRef: [
        "GET /repos/{owner}/{repo}/commits/{ref}/statuses",
      ],
      listCommits: ["GET /repos/{owner}/{repo}/commits"],
      listContributors: ["GET /repos/{owner}/{repo}/contributors"],
      listCustomDeploymentRuleIntegrations: [
        "GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/apps",
      ],
      listDeployKeys: ["GET /repos/{owner}/{repo}/keys"],
      listDeploymentBranchPolicies: [
        "GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies",
      ],
      listDeploymentStatuses: [
        "GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses",
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
        "GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls",
      ],
      listReleaseAssets: [
        "GET /repos/{owner}/{repo}/releases/{release_id}/assets",
      ],
      listReleases: ["GET /repos/{owner}/{repo}/releases"],
      listTagProtection: ["GET /repos/{owner}/{repo}/tags/protection"],
      listTags: ["GET /repos/{owner}/{repo}/tags"],
      listTeams: ["GET /repos/{owner}/{repo}/teams"],
      listWebhookDeliveries: [
        "GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries",
      ],
      listWebhooks: ["GET /repos/{owner}/{repo}/hooks"],
      merge: ["POST /repos/{owner}/{repo}/merges"],
      mergeUpstream: ["POST /repos/{owner}/{repo}/merge-upstream"],
      pingWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/pings"],
      redeliverWebhookDelivery: [
        "POST /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts",
      ],
      removeAppAccessRestrictions: [
        "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
        {},
        { mapToData: "apps" },
      ],
      removeCollaborator: [
        "DELETE /repos/{owner}/{repo}/collaborators/{username}",
      ],
      removeStatusCheckContexts: [
        "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
        {},
        { mapToData: "contexts" },
      ],
      removeStatusCheckProtection: [
        "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks",
      ],
      removeTeamAccessRestrictions: [
        "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
        {},
        { mapToData: "teams" },
      ],
      removeUserAccessRestrictions: [
        "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
        {},
        { mapToData: "users" },
      ],
      renameBranch: ["POST /repos/{owner}/{repo}/branches/{branch}/rename"],
      replaceAllTopics: ["PUT /repos/{owner}/{repo}/topics"],
      requestPagesBuild: ["POST /repos/{owner}/{repo}/pages/builds"],
      setAdminBranchProtection: [
        "POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins",
      ],
      setAppAccessRestrictions: [
        "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
        {},
        { mapToData: "apps" },
      ],
      setStatusCheckContexts: [
        "PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
        {},
        { mapToData: "contexts" },
      ],
      setTeamAccessRestrictions: [
        "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
        {},
        { mapToData: "teams" },
      ],
      setUserAccessRestrictions: [
        "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
        {},
        { mapToData: "users" },
      ],
      testPushWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/tests"],
      transfer: ["POST /repos/{owner}/{repo}/transfer"],
      update: ["PATCH /repos/{owner}/{repo}"],
      updateBranchProtection: [
        "PUT /repos/{owner}/{repo}/branches/{branch}/protection",
      ],
      updateCommitComment: [
        "PATCH /repos/{owner}/{repo}/comments/{comment_id}",
      ],
      updateDeploymentBranchPolicy: [
        "PUT /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}",
      ],
      updateInformationAboutPagesSite: ["PUT /repos/{owner}/{repo}/pages"],
      updateInvitation: [
        "PATCH /repos/{owner}/{repo}/invitations/{invitation_id}",
      ],
      updateOrgRuleset: ["PUT /orgs/{org}/rulesets/{ruleset_id}"],
      updatePullRequestReviewProtection: [
        "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews",
      ],
      updateRelease: ["PATCH /repos/{owner}/{repo}/releases/{release_id}"],
      updateReleaseAsset: [
        "PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}",
      ],
      updateRepoRuleset: ["PUT /repos/{owner}/{repo}/rulesets/{ruleset_id}"],
      updateStatusCheckPotection: [
        "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks",
        {},
        { renamed: ["repos", "updateStatusCheckProtection"] },
      ],
      updateStatusCheckProtection: [
        "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks",
      ],
      updateWebhook: ["PATCH /repos/{owner}/{repo}/hooks/{hook_id}"],
      updateWebhookConfigForRepo: [
        "PATCH /repos/{owner}/{repo}/hooks/{hook_id}/config",
      ],
      uploadReleaseAsset: [
        "POST /repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}",
        { baseUrl: "https://uploads.github.com" },
      ],
    },
    search: {
      code: ["GET /search/code"],
      commits: ["GET /search/commits"],
      issuesAndPullRequests: ["GET /search/issues"],
      labels: ["GET /search/labels"],
      repos: ["GET /search/repositories"],
      topics: ["GET /search/topics"],
      users: ["GET /search/users"],
    },
    secretScanning: {
      getAlert: [
        "GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}",
      ],
      listAlertsForEnterprise: [
        "GET /enterprises/{enterprise}/secret-scanning/alerts",
      ],
      listAlertsForOrg: ["GET /orgs/{org}/secret-scanning/alerts"],
      listAlertsForRepo: ["GET /repos/{owner}/{repo}/secret-scanning/alerts"],
      listLocationsForAlert: [
        "GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations",
      ],
      updateAlert: [
        "PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}",
      ],
    },
    securityAdvisories: {
      createPrivateVulnerabilityReport: [
        "POST /repos/{owner}/{repo}/security-advisories/reports",
      ],
      createRepositoryAdvisory: [
        "POST /repos/{owner}/{repo}/security-advisories",
      ],
      createRepositoryAdvisoryCveRequest: [
        "POST /repos/{owner}/{repo}/security-advisories/{ghsa_id}/cve",
      ],
      getGlobalAdvisory: ["GET /advisories/{ghsa_id}"],
      getRepositoryAdvisory: [
        "GET /repos/{owner}/{repo}/security-advisories/{ghsa_id}",
      ],
      listGlobalAdvisories: ["GET /advisories"],
      listOrgRepositoryAdvisories: ["GET /orgs/{org}/security-advisories"],
      listRepositoryAdvisories: [
        "GET /repos/{owner}/{repo}/security-advisories",
      ],
      updateRepositoryAdvisory: [
        "PATCH /repos/{owner}/{repo}/security-advisories/{ghsa_id}",
      ],
    },
    teams: {
      addOrUpdateMembershipForUserInOrg: [
        "PUT /orgs/{org}/teams/{team_slug}/memberships/{username}",
      ],
      addOrUpdateProjectPermissionsInOrg: [
        "PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}",
      ],
      addOrUpdateRepoPermissionsInOrg: [
        "PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}",
      ],
      checkPermissionsForProjectInOrg: [
        "GET /orgs/{org}/teams/{team_slug}/projects/{project_id}",
      ],
      checkPermissionsForRepoInOrg: [
        "GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}",
      ],
      create: ["POST /orgs/{org}/teams"],
      createDiscussionCommentInOrg: [
        "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments",
      ],
      createDiscussionInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions"],
      deleteDiscussionCommentInOrg: [
        "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}",
      ],
      deleteDiscussionInOrg: [
        "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}",
      ],
      deleteInOrg: ["DELETE /orgs/{org}/teams/{team_slug}"],
      getByName: ["GET /orgs/{org}/teams/{team_slug}"],
      getDiscussionCommentInOrg: [
        "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}",
      ],
      getDiscussionInOrg: [
        "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}",
      ],
      getMembershipForUserInOrg: [
        "GET /orgs/{org}/teams/{team_slug}/memberships/{username}",
      ],
      list: ["GET /orgs/{org}/teams"],
      listChildInOrg: ["GET /orgs/{org}/teams/{team_slug}/teams"],
      listDiscussionCommentsInOrg: [
        "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments",
      ],
      listDiscussionsInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions"],
      listForAuthenticatedUser: ["GET /user/teams"],
      listMembersInOrg: ["GET /orgs/{org}/teams/{team_slug}/members"],
      listPendingInvitationsInOrg: [
        "GET /orgs/{org}/teams/{team_slug}/invitations",
      ],
      listProjectsInOrg: ["GET /orgs/{org}/teams/{team_slug}/projects"],
      listReposInOrg: ["GET /orgs/{org}/teams/{team_slug}/repos"],
      removeMembershipForUserInOrg: [
        "DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}",
      ],
      removeProjectInOrg: [
        "DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}",
      ],
      removeRepoInOrg: [
        "DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}",
      ],
      updateDiscussionCommentInOrg: [
        "PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}",
      ],
      updateDiscussionInOrg: [
        "PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}",
      ],
      updateInOrg: ["PATCH /orgs/{org}/teams/{team_slug}"],
    },
    users: {
      addEmailForAuthenticated: [
        "POST /user/emails",
        {},
        { renamed: ["users", "addEmailForAuthenticatedUser"] },
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
        { renamed: ["users", "createGpgKeyForAuthenticatedUser"] },
      ],
      createGpgKeyForAuthenticatedUser: ["POST /user/gpg_keys"],
      createPublicSshKeyForAuthenticated: [
        "POST /user/keys",
        {},
        { renamed: ["users", "createPublicSshKeyForAuthenticatedUser"] },
      ],
      createPublicSshKeyForAuthenticatedUser: ["POST /user/keys"],
      createSshSigningKeyForAuthenticatedUser: ["POST /user/ssh_signing_keys"],
      deleteEmailForAuthenticated: [
        "DELETE /user/emails",
        {},
        { renamed: ["users", "deleteEmailForAuthenticatedUser"] },
      ],
      deleteEmailForAuthenticatedUser: ["DELETE /user/emails"],
      deleteGpgKeyForAuthenticated: [
        "DELETE /user/gpg_keys/{gpg_key_id}",
        {},
        { renamed: ["users", "deleteGpgKeyForAuthenticatedUser"] },
      ],
      deleteGpgKeyForAuthenticatedUser: ["DELETE /user/gpg_keys/{gpg_key_id}"],
      deletePublicSshKeyForAuthenticated: [
        "DELETE /user/keys/{key_id}",
        {},
        { renamed: ["users", "deletePublicSshKeyForAuthenticatedUser"] },
      ],
      deletePublicSshKeyForAuthenticatedUser: ["DELETE /user/keys/{key_id}"],
      deleteSocialAccountForAuthenticatedUser: ["DELETE /user/social_accounts"],
      deleteSshSigningKeyForAuthenticatedUser: [
        "DELETE /user/ssh_signing_keys/{ssh_signing_key_id}",
      ],
      follow: ["PUT /user/following/{username}"],
      getAuthenticated: ["GET /user"],
      getByUsername: ["GET /users/{username}"],
      getContextForUser: ["GET /users/{username}/hovercard"],
      getGpgKeyForAuthenticated: [
        "GET /user/gpg_keys/{gpg_key_id}",
        {},
        { renamed: ["users", "getGpgKeyForAuthenticatedUser"] },
      ],
      getGpgKeyForAuthenticatedUser: ["GET /user/gpg_keys/{gpg_key_id}"],
      getPublicSshKeyForAuthenticated: [
        "GET /user/keys/{key_id}",
        {},
        { renamed: ["users", "getPublicSshKeyForAuthenticatedUser"] },
      ],
      getPublicSshKeyForAuthenticatedUser: ["GET /user/keys/{key_id}"],
      getSshSigningKeyForAuthenticatedUser: [
        "GET /user/ssh_signing_keys/{ssh_signing_key_id}",
      ],
      list: ["GET /users"],
      listBlockedByAuthenticated: [
        "GET /user/blocks",
        {},
        { renamed: ["users", "listBlockedByAuthenticatedUser"] },
      ],
      listBlockedByAuthenticatedUser: ["GET /user/blocks"],
      listEmailsForAuthenticated: [
        "GET /user/emails",
        {},
        { renamed: ["users", "listEmailsForAuthenticatedUser"] },
      ],
      listEmailsForAuthenticatedUser: ["GET /user/emails"],
      listFollowedByAuthenticated: [
        "GET /user/following",
        {},
        { renamed: ["users", "listFollowedByAuthenticatedUser"] },
      ],
      listFollowedByAuthenticatedUser: ["GET /user/following"],
      listFollowersForAuthenticatedUser: ["GET /user/followers"],
      listFollowersForUser: ["GET /users/{username}/followers"],
      listFollowingForUser: ["GET /users/{username}/following"],
      listGpgKeysForAuthenticated: [
        "GET /user/gpg_keys",
        {},
        { renamed: ["users", "listGpgKeysForAuthenticatedUser"] },
      ],
      listGpgKeysForAuthenticatedUser: ["GET /user/gpg_keys"],
      listGpgKeysForUser: ["GET /users/{username}/gpg_keys"],
      listPublicEmailsForAuthenticated: [
        "GET /user/public_emails",
        {},
        { renamed: ["users", "listPublicEmailsForAuthenticatedUser"] },
      ],
      listPublicEmailsForAuthenticatedUser: ["GET /user/public_emails"],
      listPublicKeysForUser: ["GET /users/{username}/keys"],
      listPublicSshKeysForAuthenticated: [
        "GET /user/keys",
        {},
        { renamed: ["users", "listPublicSshKeysForAuthenticatedUser"] },
      ],
      listPublicSshKeysForAuthenticatedUser: ["GET /user/keys"],
      listSocialAccountsForAuthenticatedUser: ["GET /user/social_accounts"],
      listSocialAccountsForUser: ["GET /users/{username}/social_accounts"],
      listSshSigningKeysForAuthenticatedUser: ["GET /user/ssh_signing_keys"],
      listSshSigningKeysForUser: ["GET /users/{username}/ssh_signing_keys"],
      setPrimaryEmailVisibilityForAuthenticated: [
        "PATCH /user/email/visibility",
        {},
        { renamed: ["users", "setPrimaryEmailVisibilityForAuthenticatedUser"] },
      ],
      setPrimaryEmailVisibilityForAuthenticatedUser: [
        "PATCH /user/email/visibility",
      ],
      unblock: ["DELETE /user/blocks/{username}"],
      unfollow: ["DELETE /user/following/{username}"],
      updateAuthenticated: ["PATCH /user"],
    },
  },
  fi = mi,
  re = new Map();
for (let [e, t] of Object.entries(fi))
  for (let [r, s] of Object.entries(t)) {
    let [o, n, a] = s,
      [c, u] = o.split(/ /),
      f = Object.assign({ method: c, url: u }, n);
    re.has(e) || re.set(e, new Map()),
      re
        .get(e)
        .set(r, {
          scope: e,
          methodName: r,
          endpointDefaults: f,
          decorations: a,
        });
  }
var _i = {
  has({ scope: e }, t) {
    return re.get(e).has(t);
  },
  getOwnPropertyDescriptor(e, t) {
    return {
      value: this.get(e, t),
      configurable: !0,
      writable: !0,
      enumerable: !0,
    };
  },
  defineProperty(e, t, r) {
    return Object.defineProperty(e.cache, t, r), !0;
  },
  deleteProperty(e, t) {
    return delete e.cache[t], !0;
  },
  ownKeys({ scope: e }) {
    return [...re.get(e).keys()];
  },
  set(e, t, r) {
    return (e.cache[t] = r);
  },
  get({ octokit: e, scope: t, cache: r }, s) {
    if (r[s]) return r[s];
    let o = re.get(t).get(s);
    if (!o) return;
    let { endpointDefaults: n, decorations: a } = o;
    return (
      a ? (r[s] = Ti(e, t, s, n, a)) : (r[s] = e.request.defaults(n)), r[s]
    );
  },
};
function Kr(e) {
  let t = {};
  for (let r of re.keys())
    t[r] = new Proxy({ octokit: e, scope: r, cache: {} }, _i);
  return t;
}
function Ti(e, t, r, s, o) {
  let n = e.request.defaults(s);
  function a(...c) {
    let u = n.endpoint.merge(...c);
    if (o.mapToData)
      return (
        (u = Object.assign({}, u, {
          data: u[o.mapToData],
          [o.mapToData]: void 0,
        })),
        n(u)
      );
    if (o.renamed) {
      let [f, _] = o.renamed;
      e.log.warn(`octokit.${t}.${r}() has been renamed to octokit.${f}.${_}()`);
    }
    if ((o.deprecated && e.log.warn(o.deprecated), o.renamedParameters)) {
      let f = n.endpoint.merge(...c);
      for (let [_, m] of Object.entries(o.renamedParameters))
        _ in f &&
          (e.log.warn(
            `"${_}" parameter is deprecated for "octokit.${t}.${r}()". Use "${m}" instead`
          ),
          m in f || (f[m] = f[_]),
          delete f[_]);
      return n(f);
    }
    return n(...c);
  }
  return Object.assign(a, n);
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
async function Jr(e, t, r, s) {
  if (!r.request || !r.request.request) throw r;
  if (r.status >= 400 && !e.doNotRetry.includes(r.status)) {
    let o = s.request.retries != null ? s.request.retries : e.retries,
      n = Math.pow((s.request.retryCount || 0) + 1, 2);
    throw t.retry.retryRequest(r, o, n);
  }
  throw r;
}
async function wi(e, t, r, s) {
  let o = new Qr.default();
  return (
    o.on("failed", function (n, a) {
      let c = ~~n.request.request.retries,
        u = ~~n.request.request.retryAfter;
      if (((s.request.retryCount = a.retryCount + 1), c > a.retryCount))
        return u * e.retryAfterBaseValue;
    }),
    o.schedule(yi.bind(null, e, t, r), s)
  );
}
async function yi(e, t, r, s) {
  let o = await r(r, s);
  if (
    o.data &&
    o.data.errors &&
    /Something went wrong while executing your query/.test(
      o.data.errors[0].message
    )
  ) {
    let n = new z(o.data.errors[0].message, 500, { request: s, response: o });
    return Jr(e, t, n, s);
  }
  return o;
}
var bi = "6.0.1";
function mt(e, t) {
  let r = Object.assign(
    {
      enabled: !0,
      retryAfterBaseValue: 1e3,
      doNotRetry: [400, 401, 403, 404, 422, 451],
      retries: 3,
    },
    t.retry
  );
  return (
    r.enabled &&
      (e.hook.error("request", Jr.bind(null, r, e)),
      e.hook.wrap("request", wi.bind(null, r, e))),
    {
      retry: {
        retryRequest: (s, o, n) => (
          (s.request.request = Object.assign({}, s.request.request, {
            retries: o,
            retryAfter: n,
          })),
          s
        ),
      },
    }
  );
}
mt.VERSION = bi;
var Xr = S(gt());
var vi = "8.1.3",
  ft = () => Promise.resolve();
function ki(e, t, r) {
  return e.retryLimiter.schedule(Ai, e, t, r);
}
async function Ai(e, t, r) {
  let s = r.method !== "GET" && r.method !== "HEAD",
    { pathname: o } = new URL(r.url, "http://github.test"),
    n = r.method === "GET" && o.startsWith("/search/"),
    a = o.startsWith("/graphql"),
    u = ~~t.retryCount > 0 ? { priority: 0, weight: 0 } : {};
  e.clustering && (u.expiration = 1e3 * 60),
    (s || a) && (await e.write.key(e.id).schedule(u, ft)),
    s &&
      e.triggersNotification(o) &&
      (await e.notifications.key(e.id).schedule(u, ft)),
    n && (await e.search.key(e.id).schedule(u, ft));
  let f = e.global.key(e.id).schedule(u, t, r);
  if (a) {
    let _ = await f;
    if (
      _.data.errors != null &&
      _.data.errors.some((m) => m.type === "RATE_LIMITED")
    )
      throw Object.assign(new Error("GraphQL Rate Limit Exceeded"), {
        response: _,
        data: _.data,
      });
  }
  return f;
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
  "/teams/{team_id}/discussions/{discussion_number}/comments",
];
function Si(e) {
  let r = `^(?:${e
    .map((s) =>
      s
        .split("/")
        .map((o) => (o.startsWith("{") ? "(?:.+?)" : o))
        .join("/")
    )
    .map((s) => `(?:${s})`)
    .join("|")})[^/]*$`;
  return new RegExp(r, "i");
}
var Yr = Si(Gi),
  Zr = Yr.test.bind(Yr),
  ce = {},
  Oi = function (e, t) {
    (ce.global = new e.Group({
      id: "octokit-global",
      maxConcurrent: 10,
      ...t,
    })),
      (ce.search = new e.Group({
        id: "octokit-search",
        maxConcurrent: 1,
        minTime: 2e3,
        ...t,
      })),
      (ce.write = new e.Group({
        id: "octokit-write",
        maxConcurrent: 1,
        minTime: 1e3,
        ...t,
      })),
      (ce.notifications = new e.Group({
        id: "octokit-notifications",
        maxConcurrent: 1,
        minTime: 3e3,
        ...t,
      }));
  };
function Pe(e, t) {
  let {
    enabled: r = !0,
    Bottleneck: s = Xr.default,
    id: o = "no-id",
    timeout: n = 1e3 * 60 * 2,
    connection: a,
  } = t.throttle || {};
  if (!r) return {};
  let c = { connection: a, timeout: n };
  ce.global == null && Oi(s, c);
  let u = Object.assign(
    {
      clustering: a != null,
      triggersNotification: Zr,
      fallbackSecondaryRateRetryAfter: 60,
      retryAfterBaseValue: 1e3,
      retryLimiter: new s(),
      id: o,
      ...ce,
    },
    t.throttle
  );
  if (
    typeof u.onSecondaryRateLimit != "function" ||
    typeof u.onRateLimit != "function"
  )
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
  let f = {},
    _ = new s.Events(f);
  return (
    f.on("secondary-limit", u.onSecondaryRateLimit),
    f.on("rate-limit", u.onRateLimit),
    f.on("error", (m) =>
      e.log.warn("Error in throttling-plugin limit handler", m)
    ),
    u.retryLimiter.on("failed", async function (m, E) {
      let [y, R, b] = E.args,
        { pathname: F } = new URL(b.url, "http://github.test");
      if (!((F.startsWith("/graphql") && m.status !== 401) || m.status === 403))
        return;
      let A = ~~R.retryCount;
      (R.retryCount = A), (b.request.retryCount = A);
      let { wantRetry: D, retryAfter: P = 0 } = await (async function () {
        if (/\bsecondary rate\b/i.test(m.message)) {
          let O =
            Number(m.response.headers["retry-after"]) ||
            y.fallbackSecondaryRateRetryAfter;
          return {
            wantRetry: await _.trigger("secondary-limit", O, b, e, A),
            retryAfter: O,
          };
        }
        if (
          (m.response.headers != null &&
            m.response.headers["x-ratelimit-remaining"] === "0") ||
          (m.response.data?.errors ?? []).some((O) => O.type === "RATE_LIMITED")
        ) {
          let O = new Date(
              ~~m.response.headers["x-ratelimit-reset"] * 1e3
            ).getTime(),
            j = Math.max(Math.ceil((O - Date.now()) / 1e3) + 1, 0);
          return {
            wantRetry: await _.trigger("rate-limit", j, b, e, A),
            retryAfter: j,
          };
        }
        return {};
      })();
      if (D) return R.retryCount++, P * y.retryAfterBaseValue;
    }),
    e.hook.wrap("request", ki.bind(null, u)),
    {}
  );
}
Pe.VERSION = vi;
Pe.triggersNotification = Zr;
J();
var yo = S(Se()),
  bo = S(qe()),
  vo = S(We());
var ve = S(He());
var pe = ((e) => ((e.SHA1 = "sha1"), (e.SHA256 = "sha256"), e))(pe || {}),
  tu = (e) => (e.startsWith("sha256=") ? "sha256" : "sha1"),
  kt = new TextEncoder();
function ru(e) {
  let r = e.match(/[\dA-F]{2}/gi).map(function (s) {
    return parseInt(s, 16);
  });
  return new Uint8Array(r);
}
function su(e) {
  return Array.prototype.map
    .call(new Uint8Array(e), (t) => t.toString(16).padStart(2, "0"))
    .join("");
}
function ou(e) {
  return { [pe.SHA1]: "SHA-1", [pe.SHA256]: "SHA-256" }[e];
}
async function lo(e, t) {
  return crypto.subtle.importKey(
    "raw",
    kt.encode(e),
    { name: "HMAC", hash: { name: ou(t) } },
    !1,
    ["sign", "verify"]
  );
}
async function po(e, t) {
  let { secret: r, algorithm: s } =
    typeof e == "object"
      ? { secret: e.secret, algorithm: e.algorithm || pe.SHA256 }
      : { secret: e, algorithm: pe.SHA256 };
  if (!r || !t)
    throw new TypeError(
      "[@octokit/webhooks-methods] secret & payload required for sign()"
    );
  if (!Object.values(pe).includes(s))
    throw new TypeError(
      `[@octokit/webhooks] Algorithm ${s} is not supported. Must be  'sha1' or 'sha256'`
    );
  let o = await crypto.subtle.sign("HMAC", await lo(r, s), kt.encode(t));
  return `${s}=${su(o)}`;
}
async function ze(e, t, r) {
  if (!e || !t || !r)
    throw new TypeError(
      "[@octokit/webhooks-methods] secret, eventPayload & signature required"
    );
  let s = tu(r);
  return await crypto.subtle.verify(
    "HMAC",
    await lo(e, s),
    ru(r.replace(`${s}=`, "")),
    kt.encode(t)
  );
}
var fo = S(He());
var _o = S(He()),
  At = (e) => ({
    debug: () => {},
    info: () => {},
    warn: console.warn.bind(console),
    error: console.error.bind(console),
    ...e,
  }),
  nu = [
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
    "workflow_run.requested",
  ];
function Gt(e, t, r) {
  e.hooks[t] || (e.hooks[t] = []), e.hooks[t].push(r);
}
function go(e, t, r) {
  if (Array.isArray(t)) {
    t.forEach((s) => go(e, s, r));
    return;
  }
  if (["*", "error"].includes(t)) {
    let s = t === "*" ? "any" : t,
      o = `Using the "${t}" event with the regular Webhooks.on() function is not supported. Please use the Webhooks.on${
        s.charAt(0).toUpperCase() + s.slice(1)
      }() method instead`;
    throw new Error(o);
  }
  nu.includes(t) ||
    e.log.warn(
      `"${t}" is not a known webhook name (https://developer.github.com/v3/activity/events/types/)`
    ),
    Gt(e, t, r);
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
  } catch (s) {
    console.log('FATAL: Error occurred in "error" event handler'),
      console.log(s);
  }
  r &&
    r.catch &&
    r.catch((s) => {
      console.log('FATAL: Error occurred in "error" event handler'),
        console.log(s);
    });
}
function cu(e, t, r) {
  let s = [e.hooks[r], e.hooks["*"]];
  return t && s.unshift(e.hooks[`${r}.${t}`]), [].concat(...s.filter(Boolean));
}
function uu(e, t) {
  let r = e.hooks.error || [];
  if (t instanceof Error) {
    let a = Object.assign(new ve.default([t]), { event: t, errors: [t] });
    return r.forEach((c) => ho(c, a)), Promise.reject(a);
  }
  if (!t || !t.name) throw new ve.default(["Event name not passed"]);
  if (!t.payload) throw new ve.default(["Event payload not passed"]);
  let s = cu(e, "action" in t.payload ? t.payload.action : null, t.name);
  if (s.length === 0) return Promise.resolve();
  let o = [],
    n = s.map((a) => {
      let c = Promise.resolve(t);
      return (
        e.transform && (c = c.then(e.transform)),
        c.then((u) => a(u)).catch((u) => o.push(Object.assign(u, { event: t })))
      );
    });
  return Promise.all(n).then(() => {
    if (o.length === 0) return;
    let a = new ve.default(o);
    throw (
      (Object.assign(a, { event: t, errors: o }), r.forEach((c) => ho(c, a)), a)
    );
  });
}
function mo(e, t, r) {
  if (Array.isArray(t)) {
    t.forEach((s) => mo(e, s, r));
    return;
  }
  if (e.hooks[t]) {
    for (let s = e.hooks[t].length - 1; s >= 0; s--)
      if (e.hooks[t][s] === r) {
        e.hooks[t].splice(s, 1);
        return;
      }
  }
}
function lu(e) {
  let t = { hooks: {}, log: At(e && e.log) };
  return (
    e && e.transform && (t.transform = e.transform),
    {
      on: go.bind(null, t),
      onAny: iu.bind(null, t),
      onError: au.bind(null, t),
      removeListener: mo.bind(null, t),
      receive: uu.bind(null, t),
    }
  );
}
async function pu(e, t) {
  if (!(await ze(e.secret, t.payload, t.signature).catch(() => !1))) {
    let o = new Error(
      "[@octokit/webhooks] signature does not match event payload and secret"
    );
    return e.eventHandler.receive(Object.assign(o, { event: t, status: 400 }));
  }
  let s;
  try {
    s = JSON.parse(t.payload);
  } catch (o) {
    throw ((o.message = "Invalid JSON"), (o.status = 400), new fo.default([o]));
  }
  return e.eventHandler.receive({ id: t.id, name: t.name, payload: s });
}
var du = ["x-github-event", "x-hub-signature-256", "x-github-delivery"];
function hu(e) {
  return du.filter((t) => !(t in e.headers));
}
function gu(e) {
  return "body" in e
    ? typeof e.body == "object" &&
      "rawBody" in e &&
      e.rawBody instanceof __Buffer$
      ? Promise.resolve(e.rawBody.toString("utf8"))
      : Promise.resolve(e.body)
    : new Promise((t, r) => {
        let s = [];
        e.on("error", (o) => r(new _o.default([o]))),
          e.on("data", (o) => s.push(o)),
          e.on("end", () =>
            __setImmediate$(
              t,
              s.length === 1
                ? s[0].toString("utf8")
                : __Buffer$.concat(s).toString("utf8")
            )
          );
      });
}
function mu(e, t) {
  t.writeHead(404, { "content-type": "application/json" }),
    t.end(JSON.stringify({ error: `Unknown route: ${e.method} ${e.url}` }));
}
async function fu(e, t, r, s, o) {
  let n;
  try {
    n = new URL(r.url, "http://localhost").pathname;
  } catch {
    return (
      s.writeHead(422, { "content-type": "application/json" }),
      s.end(
        JSON.stringify({ error: `Request URL could not be parsed: ${r.url}` })
      ),
      !0
    );
  }
  if (n !== t.path) return o?.(), !1;
  if (r.method !== "POST") return mu(r, s), !0;
  if (
    !r.headers["content-type"] ||
    !r.headers["content-type"].startsWith("application/json")
  )
    return (
      s.writeHead(415, {
        "content-type": "application/json",
        accept: "application/json",
      }),
      s.end(
        JSON.stringify({
          error:
            'Unsupported "Content-Type" header value. Must be "application/json"',
        })
      ),
      !0
    );
  let a = hu(r).join(", ");
  if (a)
    return (
      s.writeHead(400, { "content-type": "application/json" }),
      s.end(JSON.stringify({ error: `Required headers missing: ${a}` })),
      !0
    );
  let c = r.headers["x-github-event"],
    u = r.headers["x-hub-signature-256"],
    f = r.headers["x-github-delivery"];
  t.log.debug(`${c} event received (id: ${f})`);
  let _ = !1,
    m = setTimeout(() => {
      (_ = !0),
        (s.statusCode = 202),
        s.end(`still processing
`);
    }, 9e3).unref();
  try {
    let E = await gu(r);
    return (
      await e.verifyAndReceive({ id: f, name: c, payload: E, signature: u }),
      clearTimeout(m),
      _ ||
        s.end(`ok
`),
      !0
    );
  } catch (E) {
    if ((clearTimeout(m), _)) return !0;
    let y = Array.from(E)[0],
      R = y.message
        ? `${y.name}: ${y.message}`
        : "Error: An Unspecified error occurred";
    return (
      (s.statusCode = typeof y.status < "u" ? y.status : 500),
      t.log.error(E),
      s.end(JSON.stringify({ error: R })),
      !0
    );
  }
}
function To(e, { path: t = "/api/github/webhooks", log: r = At() } = {}) {
  return fu.bind(null, e, { path: t, log: r });
}
var Eo = class {
  constructor(e) {
    if (!e || !e.secret)
      throw new Error("[@octokit/webhooks] options.secret required");
    let t = {
      eventHandler: lu(e),
      secret: e.secret,
      hooks: {},
      log: At(e.log),
    };
    (this.sign = po.bind(null, e.secret)),
      (this.verify = ze.bind(null, e.secret)),
      (this.on = t.eventHandler.on),
      (this.onAny = t.eventHandler.onAny),
      (this.onError = t.eventHandler.onError),
      (this.removeListener = t.eventHandler.removeListener),
      (this.receive = t.eventHandler.receive),
      (this.verifyAndReceive = pu.bind(null, t));
  }
};
var ko = S(qe()),
  Ao = S(Le());
var Go = S(qe());
var de = S(We());
var _u = "14.0.2";
function Tu(e, t) {
  return new Eo({
    secret: t.secret,
    transform: async (r) => {
      if (
        !("installation" in r.payload) ||
        typeof r.payload.installation != "object"
      ) {
        let n = new e.constructor({
          authStrategy: Ao.createUnauthenticatedAuth,
          auth: {
            reason: '"installation" key missing in webhook event payload',
          },
        });
        return { ...r, octokit: n };
      }
      let s = r.payload.installation.id,
        o = await e.auth({
          type: "installation",
          installationId: s,
          factory(n) {
            return new n.octokit.constructor({
              ...n.octokitOptions,
              authStrategy: ko.createAppAuth,
              auth: { ...n, installationId: s },
            });
          },
        });
      return (
        o.hook.before("request", (n) => {
          n.headers["x-github-delivery"] = r.id;
        }),
        { ...r, octokit: o }
      );
    },
  });
}
async function So(e, t) {
  return e.octokit.auth({
    type: "installation",
    installationId: t,
    factory(r) {
      let s = {
        ...r.octokitOptions,
        authStrategy: Go.createAppAuth,
        auth: { ...r, installationId: t },
      };
      return new r.octokit.constructor(s);
    },
  });
}
function Eu(e) {
  return Object.assign(wu.bind(null, e), { iterator: Oo.bind(null, e) });
}
async function wu(e, t) {
  let r = Oo(e)[Symbol.asyncIterator](),
    s = await r.next();
  for (; !s.done; ) await t(s.value), (s = await r.next());
}
function Oo(e) {
  return {
    async *[Symbol.asyncIterator]() {
      let t = Oe.iterator(e.octokit, "GET /app/installations");
      for await (let { data: r } of t)
        for (let s of r) yield { octokit: await So(e, s.id), installation: s };
    },
  };
}
function yu(e) {
  return Object.assign(bu.bind(null, e), { iterator: Po.bind(null, e) });
}
async function bu(e, t, r) {
  let s = Po(e, r ? t : void 0)[Symbol.asyncIterator](),
    o = await s.next();
  for (; !o.done; )
    r ? await r(o.value) : await t(o.value), (o = await s.next());
}
function vu(e, t) {
  return {
    async *[Symbol.asyncIterator]() {
      yield { octokit: await e.getInstallationOctokit(t) };
    },
  };
}
function Po(e, t) {
  return {
    async *[Symbol.asyncIterator]() {
      let r = t ? vu(e, t.installationId) : e.eachInstallation.iterator();
      for await (let { octokit: s } of r) {
        let o = Oe.iterator(s, "GET /installation/repositories");
        for await (let { data: n } of o)
          for (let a of n) yield { octokit: s, repository: a };
      }
    },
  };
}
function wo() {}
function ku(e, t = {}) {
  let r = Object.assign(
      {
        debug: wo,
        info: wo,
        warn: console.warn.bind(console),
        error: console.error.bind(console),
      },
      t.log
    ),
    s = { pathPrefix: "/api/github", ...t, log: r },
    o = To(e.webhooks, { path: s.pathPrefix + "/webhooks", log: r }),
    n = (0, de.createNodeMiddleware)(e.oauth, {
      pathPrefix: s.pathPrefix + "/oauth",
    });
  return Au.bind(null, s.pathPrefix, o, n);
}
async function Au(e, t, r, s, o, n) {
  let { pathname: a } = new URL(s.url, "http://localhost");
  return a.startsWith(`${e}/`)
    ? (a === `${e}/webhooks`
        ? t(s, o)
        : a.startsWith(`${e}/oauth/`)
        ? r(s, o)
        : (0, de.sendNodeResponse)((0, de.unknownRouteResponse)(s), o),
      !0)
    : (n?.(), !1);
}
var Ro = class {
  static {
    this.VERSION = _u;
  }
  static defaults(e) {
    return class extends this {
      constructor(...r) {
        super({ ...e, ...r[0] });
      }
    };
  }
  constructor(e) {
    let t = e.Octokit || yo.Octokit,
      r = Object.assign(
        { appId: e.appId, privateKey: e.privateKey },
        e.oauth
          ? { clientId: e.oauth.clientId, clientSecret: e.oauth.clientSecret }
          : {}
      );
    (this.octokit = new t({
      authStrategy: bo.createAppAuth,
      auth: r,
      log: e.log,
    })),
      (this.log = Object.assign(
        {
          debug: () => {},
          info: () => {},
          warn: console.warn.bind(console),
          error: console.error.bind(console),
        },
        e.log
      )),
      e.webhooks
        ? (this.webhooks = Tu(this.octokit, e.webhooks))
        : Object.defineProperty(this, "webhooks", {
            get() {
              throw new Error("[@octokit/app] webhooks option not set");
            },
          }),
      e.oauth
        ? (this.oauth = new vo.OAuthApp({
            ...e.oauth,
            clientType: "github-app",
            Octokit: t,
          }))
        : Object.defineProperty(this, "oauth", {
            get() {
              throw new Error(
                "[@octokit/app] oauth.clientId / oauth.clientSecret options are not set"
              );
            },
          }),
      (this.getInstallationOctokit = So.bind(null, this)),
      (this.eachInstallation = Eu(this)),
      (this.eachRepository = yu(this));
  }
};
var Co = S(We());
var Gu = "3.1.2",
  Uo = Fo.Octokit.plugin(pt, ut, Br, mt, Pe).defaults({
    userAgent: `octokit.js/${Gu}`,
    throttle: { onRateLimit: Su, onSecondaryRateLimit: Ou },
  });
function Su(e, t, r) {
  if (
    (r.log.warn(`Request quota exhausted for request ${t.method} ${t.url}`),
    t.request.retryCount === 0)
  )
    return r.log.info(`Retrying after ${e} seconds!`), !0;
}
function Ou(e, t, r) {
  if (
    (r.log.warn(`SecondaryRateLimit detected for request ${t.method} ${t.url}`),
    t.request.retryCount === 0)
  )
    return r.log.info(`Retrying after ${e} seconds!`), !0;
}
var op = Ro.defaults({ Octokit: Uo }),
  np = Co.OAuthApp.defaults({ Octokit: Uo });
export {
  op as App,
  np as OAuthApp,
  Uo as Octokit,
  z as RequestError,
  ku as createNodeMiddleware,
};
//# sourceMappingURL=octokit.bundle.mjs.map
