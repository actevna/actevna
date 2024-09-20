import * as Sr from "react";
import Yr, { forwardRef as $t, useContext as Be, createContext as Ur, createElement as ne, Fragment as qr, useRef as te, useEffect as We, useState as Dt } from "react";
var Re = {}, jt = {
  get exports() {
    return Re;
  },
  set exports(e) {
    Re = e;
  }
}, le = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rr;
function Lt() {
  if (Rr)
    return le;
  Rr = 1;
  var e = Yr, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(u, d, g) {
    var f, v = {}, C = null, T = null;
    g !== void 0 && (C = "" + g), d.key !== void 0 && (C = "" + d.key), d.ref !== void 0 && (T = d.ref);
    for (f in d)
      a.call(d, f) && !s.hasOwnProperty(f) && (v[f] = d[f]);
    if (u && u.defaultProps)
      for (f in d = u.defaultProps, d)
        v[f] === void 0 && (v[f] = d[f]);
    return { $$typeof: r, type: u, key: C, ref: T, props: v, _owner: i.current };
  }
  return le.Fragment = n, le.jsx = l, le.jsxs = l, le;
}
var ue = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Or;
function Vt() {
  return Or || (Or = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Yr, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), u = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), x = Symbol.iterator, h = "@@iterator";
    function O(t) {
      if (t === null || typeof t != "object")
        return null;
      var o = x && t[x] || t[h];
      return typeof o == "function" ? o : null;
    }
    var E = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(t) {
      {
        for (var o = arguments.length, c = new Array(o > 1 ? o - 1 : 0), m = 1; m < o; m++)
          c[m - 1] = arguments[m];
        P("error", t, c);
      }
    }
    function P(t, o, c) {
      {
        var m = E.ReactDebugCurrentFrame, w = m.getStackAddendum();
        w !== "" && (o += "%s", c = c.concat([w]));
        var k = c.map(function(y) {
          return String(y);
        });
        k.unshift("Warning: " + o), Function.prototype.apply.call(console[t], console, k);
      }
    }
    var q = !1, D = !1, V = !1, R = !1, Ne = !1, K;
    K = Symbol.for("react.module.reference");
    function Q(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === a || t === s || Ne || t === i || t === g || t === f || R || t === T || q || D || V || typeof t == "object" && t !== null && (t.$$typeof === C || t.$$typeof === v || t.$$typeof === l || t.$$typeof === u || t.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === K || t.getModuleId !== void 0));
    }
    function ct(t, o, c) {
      var m = t.displayName;
      if (m)
        return m;
      var w = o.displayName || o.name || "";
      return w !== "" ? c + "(" + w + ")" : c;
    }
    function rr(t) {
      return t.displayName || "Context";
    }
    function G(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case a:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case g:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case u:
            var o = t;
            return rr(o) + ".Consumer";
          case l:
            var c = t;
            return rr(c._context) + ".Provider";
          case d:
            return ct(t, t.render, "ForwardRef");
          case v:
            var m = t.displayName || null;
            return m !== null ? m : G(t.type) || "Memo";
          case C: {
            var w = t, k = w._payload, y = w._init;
            try {
              return G(y(k));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Z = Object.assign, se = 0, tr, nr, ar, ir, or, sr, cr;
    function lr() {
    }
    lr.__reactDisabledLog = !0;
    function lt() {
      {
        if (se === 0) {
          tr = console.log, nr = console.info, ar = console.warn, ir = console.error, or = console.group, sr = console.groupCollapsed, cr = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: lr,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        se++;
      }
    }
    function ut() {
      {
        if (se--, se === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Z({}, t, {
              value: tr
            }),
            info: Z({}, t, {
              value: nr
            }),
            warn: Z({}, t, {
              value: ar
            }),
            error: Z({}, t, {
              value: ir
            }),
            group: Z({}, t, {
              value: or
            }),
            groupCollapsed: Z({}, t, {
              value: sr
            }),
            groupEnd: Z({}, t, {
              value: cr
            })
          });
        }
        se < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ae = E.ReactCurrentDispatcher, Ie;
    function ve(t, o, c) {
      {
        if (Ie === void 0)
          try {
            throw Error();
          } catch (w) {
            var m = w.stack.trim().match(/\n( *(at )?)/);
            Ie = m && m[1] || "";
          }
        return `
` + Ie + t;
      }
    }
    var $e = !1, ge;
    {
      var ft = typeof WeakMap == "function" ? WeakMap : Map;
      ge = new ft();
    }
    function ur(t, o) {
      if (!t || $e)
        return "";
      {
        var c = ge.get(t);
        if (c !== void 0)
          return c;
      }
      var m;
      $e = !0;
      var w = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var k;
      k = Ae.current, Ae.current = null, lt();
      try {
        if (o) {
          var y = function() {
            throw Error();
          };
          if (Object.defineProperty(y.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(y, []);
            } catch (J) {
              m = J;
            }
            Reflect.construct(t, [], y);
          } else {
            try {
              y.call();
            } catch (J) {
              m = J;
            }
            t.call(y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (J) {
            m = J;
          }
          t();
        }
      } catch (J) {
        if (J && m && typeof J.stack == "string") {
          for (var b = J.stack.split(`
`), F = m.stack.split(`
`), N = b.length - 1, A = F.length - 1; N >= 1 && A >= 0 && b[N] !== F[A]; )
            A--;
          for (; N >= 1 && A >= 0; N--, A--)
            if (b[N] !== F[A]) {
              if (N !== 1 || A !== 1)
                do
                  if (N--, A--, A < 0 || b[N] !== F[A]) {
                    var Y = `
` + b[N].replace(" at new ", " at ");
                    return t.displayName && Y.includes("<anonymous>") && (Y = Y.replace("<anonymous>", t.displayName)), typeof t == "function" && ge.set(t, Y), Y;
                  }
                while (N >= 1 && A >= 0);
              break;
            }
        }
      } finally {
        $e = !1, Ae.current = k, ut(), Error.prepareStackTrace = w;
      }
      var re = t ? t.displayName || t.name : "", _r = re ? ve(re) : "";
      return typeof t == "function" && ge.set(t, _r), _r;
    }
    function dt(t, o, c) {
      return ur(t, !1);
    }
    function pt(t) {
      var o = t.prototype;
      return !!(o && o.isReactComponent);
    }
    function be(t, o, c) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return ur(t, pt(t));
      if (typeof t == "string")
        return ve(t);
      switch (t) {
        case g:
          return ve("Suspense");
        case f:
          return ve("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case d:
            return dt(t.render);
          case v:
            return be(t.type, o, c);
          case C: {
            var m = t, w = m._payload, k = m._init;
            try {
              return be(k(w), o, c);
            } catch {
            }
          }
        }
      return "";
    }
    var ye = Object.prototype.hasOwnProperty, fr = {}, dr = E.ReactDebugCurrentFrame;
    function Ee(t) {
      if (t) {
        var o = t._owner, c = be(t.type, t._source, o ? o.type : null);
        dr.setExtraStackFrame(c);
      } else
        dr.setExtraStackFrame(null);
    }
    function ht(t, o, c, m, w) {
      {
        var k = Function.call.bind(ye);
        for (var y in t)
          if (k(t, y)) {
            var b = void 0;
            try {
              if (typeof t[y] != "function") {
                var F = Error((m || "React class") + ": " + c + " type `" + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw F.name = "Invariant Violation", F;
              }
              b = t[y](o, y, m, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (N) {
              b = N;
            }
            b && !(b instanceof Error) && (Ee(w), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", m || "React class", c, y, typeof b), Ee(null)), b instanceof Error && !(b.message in fr) && (fr[b.message] = !0, Ee(w), p("Failed %s type: %s", c, b.message), Ee(null));
          }
      }
    }
    var mt = Array.isArray;
    function De(t) {
      return mt(t);
    }
    function vt(t) {
      {
        var o = typeof Symbol == "function" && Symbol.toStringTag, c = o && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return c;
      }
    }
    function gt(t) {
      try {
        return pr(t), !1;
      } catch {
        return !0;
      }
    }
    function pr(t) {
      return "" + t;
    }
    function hr(t) {
      if (gt(t))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", vt(t)), pr(t);
    }
    var ce = E.ReactCurrentOwner, bt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, mr, vr, je;
    je = {};
    function yt(t) {
      if (ye.call(t, "ref")) {
        var o = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Et(t) {
      if (ye.call(t, "key")) {
        var o = Object.getOwnPropertyDescriptor(t, "key").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function xt(t, o) {
      if (typeof t.ref == "string" && ce.current && o && ce.current.stateNode !== o) {
        var c = G(ce.current.type);
        je[c] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', G(ce.current.type), t.ref), je[c] = !0);
      }
    }
    function wt(t, o) {
      {
        var c = function() {
          mr || (mr = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function _t(t, o) {
      {
        var c = function() {
          vr || (vr = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var St = function(t, o, c, m, w, k, y) {
      var b = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: t,
        key: o,
        ref: c,
        props: y,
        // Record the component responsible for creating this element.
        _owner: k
      };
      return b._store = {}, Object.defineProperty(b._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(b, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: m
      }), Object.defineProperty(b, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    };
    function Rt(t, o, c, m, w) {
      {
        var k, y = {}, b = null, F = null;
        c !== void 0 && (hr(c), b = "" + c), Et(o) && (hr(o.key), b = "" + o.key), yt(o) && (F = o.ref, xt(o, w));
        for (k in o)
          ye.call(o, k) && !bt.hasOwnProperty(k) && (y[k] = o[k]);
        if (t && t.defaultProps) {
          var N = t.defaultProps;
          for (k in N)
            y[k] === void 0 && (y[k] = N[k]);
        }
        if (b || F) {
          var A = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          b && wt(y, A), F && _t(y, A);
        }
        return St(t, b, F, w, m, ce.current, y);
      }
    }
    var Le = E.ReactCurrentOwner, gr = E.ReactDebugCurrentFrame;
    function ee(t) {
      if (t) {
        var o = t._owner, c = be(t.type, t._source, o ? o.type : null);
        gr.setExtraStackFrame(c);
      } else
        gr.setExtraStackFrame(null);
    }
    var Ve;
    Ve = !1;
    function Fe(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function br() {
      {
        if (Le.current) {
          var t = G(Le.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Ot(t) {
      {
        if (t !== void 0) {
          var o = t.fileName.replace(/^.*[\\\/]/, ""), c = t.lineNumber;
          return `

Check your code at ` + o + ":" + c + ".";
        }
        return "";
      }
    }
    var yr = {};
    function kt(t) {
      {
        var o = br();
        if (!o) {
          var c = typeof t == "string" ? t : t.displayName || t.name;
          c && (o = `

Check the top-level render call using <` + c + ">.");
        }
        return o;
      }
    }
    function Er(t, o) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var c = kt(o);
        if (yr[c])
          return;
        yr[c] = !0;
        var m = "";
        t && t._owner && t._owner !== Le.current && (m = " It was passed a child from " + G(t._owner.type) + "."), ee(t), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, m), ee(null);
      }
    }
    function xr(t, o) {
      {
        if (typeof t != "object")
          return;
        if (De(t))
          for (var c = 0; c < t.length; c++) {
            var m = t[c];
            Fe(m) && Er(m, o);
          }
        else if (Fe(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var w = O(t);
          if (typeof w == "function" && w !== t.entries)
            for (var k = w.call(t), y; !(y = k.next()).done; )
              Fe(y.value) && Er(y.value, o);
        }
      }
    }
    function Ct(t) {
      {
        var o = t.type;
        if (o == null || typeof o == "string")
          return;
        var c;
        if (typeof o == "function")
          c = o.propTypes;
        else if (typeof o == "object" && (o.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        o.$$typeof === v))
          c = o.propTypes;
        else
          return;
        if (c) {
          var m = G(o);
          ht(c, t.props, "prop", m, t);
        } else if (o.PropTypes !== void 0 && !Ve) {
          Ve = !0;
          var w = G(o);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof o.getDefaultProps == "function" && !o.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Tt(t) {
      {
        for (var o = Object.keys(t.props), c = 0; c < o.length; c++) {
          var m = o[c];
          if (m !== "children" && m !== "key") {
            ee(t), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", m), ee(null);
            break;
          }
        }
        t.ref !== null && (ee(t), p("Invalid attribute `ref` supplied to `React.Fragment`."), ee(null));
      }
    }
    function wr(t, o, c, m, w, k) {
      {
        var y = Q(t);
        if (!y) {
          var b = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var F = Ot(w);
          F ? b += F : b += br();
          var N;
          t === null ? N = "null" : De(t) ? N = "array" : t !== void 0 && t.$$typeof === r ? (N = "<" + (G(t.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : N = typeof t, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", N, b);
        }
        var A = Rt(t, o, c, w, k);
        if (A == null)
          return A;
        if (y) {
          var Y = o.children;
          if (Y !== void 0)
            if (m)
              if (De(Y)) {
                for (var re = 0; re < Y.length; re++)
                  xr(Y[re], t);
                Object.freeze && Object.freeze(Y);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xr(Y, t);
        }
        return t === a ? Tt(A) : Ct(A), A;
      }
    }
    function Pt(t, o, c) {
      return wr(t, o, c, !0);
    }
    function Nt(t, o, c) {
      return wr(t, o, c, !1);
    }
    var At = Nt, It = Pt;
    ue.Fragment = a, ue.jsx = At, ue.jsxs = It;
  }()), ue;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Lt() : e.exports = Vt();
})(jt);
const L = Re.jsx, Br = Re.jsxs;
function ze() {
  return ze = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ze.apply(this, arguments);
}
function Hr(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return r[n] === void 0 && (r[n] = e(n)), r[n];
  };
}
var Ft = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Mt = /* @__PURE__ */ Hr(
  function(e) {
    return Ft.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function Wt(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function zt(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var Yt = /* @__PURE__ */ function() {
  function e(n) {
    var a = this;
    this._insertTag = function(i) {
      var s;
      a.tags.length === 0 ? a.insertionPoint ? s = a.insertionPoint.nextSibling : a.prepend ? s = a.container.firstChild : s = a.before : s = a.tags[a.tags.length - 1].nextSibling, a.container.insertBefore(i, s), a.tags.push(i);
    }, this.isSpeedy = n.speedy === void 0 ? process.env.NODE_ENV === "production" : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(a) {
    a.forEach(this._insertTag);
  }, r.insert = function(a) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(zt(this));
    var i = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var s = a.charCodeAt(0) === 64 && a.charCodeAt(1) === 105;
      s && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + a + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !s;
    }
    if (this.isSpeedy) {
      var l = Wt(i);
      try {
        l.insertRule(a, l.cssRules.length);
      } catch (u) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(a) && console.error('There was a problem inserting the following rule: "' + a + '"', u);
      }
    } else
      i.appendChild(document.createTextNode(a));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(a) {
      return a.parentNode && a.parentNode.removeChild(a);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), j = "-ms-", Oe = "-moz-", _ = "-webkit-", He = "comm", Ge = "rule", Je = "decl", Ut = "@import", Gr = "@keyframes", qt = Math.abs, Ce = String.fromCharCode, Bt = Object.assign;
function Ht(e, r) {
  return $(e, 0) ^ 45 ? (((r << 2 ^ $(e, 0)) << 2 ^ $(e, 1)) << 2 ^ $(e, 2)) << 2 ^ $(e, 3) : 0;
}
function Jr(e) {
  return e.trim();
}
function Gt(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function S(e, r, n) {
  return e.replace(r, n);
}
function Ye(e, r) {
  return e.indexOf(r);
}
function $(e, r) {
  return e.charCodeAt(r) | 0;
}
function de(e, r, n) {
  return e.slice(r, n);
}
function B(e) {
  return e.length;
}
function Xe(e) {
  return e.length;
}
function xe(e, r) {
  return r.push(e), e;
}
function Jt(e, r) {
  return e.map(r).join("");
}
var Te = 1, ie = 1, Xr = 0, M = 0, I = 0, oe = "";
function Pe(e, r, n, a, i, s, l) {
  return { value: e, root: r, parent: n, type: a, props: i, children: s, line: Te, column: ie, length: l, return: "" };
}
function fe(e, r) {
  return Bt(Pe("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function Xt() {
  return I;
}
function Kt() {
  return I = M > 0 ? $(oe, --M) : 0, ie--, I === 10 && (ie = 1, Te--), I;
}
function W() {
  return I = M < Xr ? $(oe, M++) : 0, ie++, I === 10 && (ie = 1, Te++), I;
}
function H() {
  return $(oe, M);
}
function we() {
  return M;
}
function me(e, r) {
  return de(oe, e, r);
}
function pe(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Kr(e) {
  return Te = ie = 1, Xr = B(oe = e), M = 0, [];
}
function Zr(e) {
  return oe = "", e;
}
function _e(e) {
  return Jr(me(M - 1, Ue(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Zt(e) {
  for (; (I = H()) && I < 33; )
    W();
  return pe(e) > 2 || pe(I) > 3 ? "" : " ";
}
function Qt(e, r) {
  for (; --r && W() && !(I < 48 || I > 102 || I > 57 && I < 65 || I > 70 && I < 97); )
    ;
  return me(e, we() + (r < 6 && H() == 32 && W() == 32));
}
function Ue(e) {
  for (; W(); )
    switch (I) {
      case e:
        return M;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ue(I);
        break;
      case 40:
        e === 41 && Ue(e);
        break;
      case 92:
        W();
        break;
    }
  return M;
}
function en(e, r) {
  for (; W() && e + I !== 47 + 10; )
    if (e + I === 42 + 42 && H() === 47)
      break;
  return "/*" + me(r, M - 1) + "*" + Ce(e === 47 ? e : W());
}
function rn(e) {
  for (; !pe(H()); )
    W();
  return me(e, M);
}
function tn(e) {
  return Zr(Se("", null, null, null, [""], e = Kr(e), 0, [0], e));
}
function Se(e, r, n, a, i, s, l, u, d) {
  for (var g = 0, f = 0, v = l, C = 0, T = 0, x = 0, h = 1, O = 1, E = 1, p = 0, P = "", q = i, D = s, V = a, R = P; O; )
    switch (x = p, p = W()) {
      case 40:
        if (x != 108 && $(R, v - 1) == 58) {
          Ye(R += S(_e(p), "&", "&\f"), "&\f") != -1 && (E = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        R += _e(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        R += Zt(x);
        break;
      case 92:
        R += Qt(we() - 1, 7);
        continue;
      case 47:
        switch (H()) {
          case 42:
          case 47:
            xe(nn(en(W(), we()), r, n), d);
            break;
          default:
            R += "/";
        }
        break;
      case 123 * h:
        u[g++] = B(R) * E;
      case 125 * h:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            O = 0;
          case 59 + f:
            T > 0 && B(R) - v && xe(T > 32 ? Cr(R + ";", a, n, v - 1) : Cr(S(R, " ", "") + ";", a, n, v - 2), d);
            break;
          case 59:
            R += ";";
          default:
            if (xe(V = kr(R, r, n, g, f, i, u, P, q = [], D = [], v), s), p === 123)
              if (f === 0)
                Se(R, r, V, V, q, s, v, u, D);
              else
                switch (C === 99 && $(R, 3) === 110 ? 100 : C) {
                  case 100:
                  case 109:
                  case 115:
                    Se(e, V, V, a && xe(kr(e, V, V, 0, 0, i, u, P, i, q = [], v), D), i, D, v, u, a ? q : D);
                    break;
                  default:
                    Se(R, V, V, V, [""], D, 0, u, D);
                }
        }
        g = f = T = 0, h = E = 1, P = R = "", v = l;
        break;
      case 58:
        v = 1 + B(R), T = x;
      default:
        if (h < 1) {
          if (p == 123)
            --h;
          else if (p == 125 && h++ == 0 && Kt() == 125)
            continue;
        }
        switch (R += Ce(p), p * h) {
          case 38:
            E = f > 0 ? 1 : (R += "\f", -1);
            break;
          case 44:
            u[g++] = (B(R) - 1) * E, E = 1;
            break;
          case 64:
            H() === 45 && (R += _e(W())), C = H(), f = v = B(P = R += rn(we())), p++;
            break;
          case 45:
            x === 45 && B(R) == 2 && (h = 0);
        }
    }
  return s;
}
function kr(e, r, n, a, i, s, l, u, d, g, f) {
  for (var v = i - 1, C = i === 0 ? s : [""], T = Xe(C), x = 0, h = 0, O = 0; x < a; ++x)
    for (var E = 0, p = de(e, v + 1, v = qt(h = l[x])), P = e; E < T; ++E)
      (P = Jr(h > 0 ? C[E] + " " + p : S(p, /&\f/g, C[E]))) && (d[O++] = P);
  return Pe(e, r, n, i === 0 ? Ge : u, d, g, f);
}
function nn(e, r, n) {
  return Pe(e, r, n, He, Ce(Xt()), de(e, 2, -2), 0);
}
function Cr(e, r, n, a) {
  return Pe(e, r, n, Je, de(e, 0, a), de(e, a + 1, -1), a);
}
function ae(e, r) {
  for (var n = "", a = Xe(e), i = 0; i < a; i++)
    n += r(e[i], i, e, r) || "";
  return n;
}
function an(e, r, n, a) {
  switch (e.type) {
    case Ut:
    case Je:
      return e.return = e.return || e.value;
    case He:
      return "";
    case Gr:
      return e.return = e.value + "{" + ae(e.children, a) + "}";
    case Ge:
      e.value = e.props.join(",");
  }
  return B(n = ae(e.children, a)) ? e.return = e.value + "{" + n + "}" : "";
}
function on(e) {
  var r = Xe(e);
  return function(n, a, i, s) {
    for (var l = "", u = 0; u < r; u++)
      l += e[u](n, a, i, s) || "";
    return l;
  };
}
function sn(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
var cn = function(r, n, a) {
  for (var i = 0, s = 0; i = s, s = H(), i === 38 && s === 12 && (n[a] = 1), !pe(s); )
    W();
  return me(r, M);
}, ln = function(r, n) {
  var a = -1, i = 44;
  do
    switch (pe(i)) {
      case 0:
        i === 38 && H() === 12 && (n[a] = 1), r[a] += cn(M - 1, n, a);
        break;
      case 2:
        r[a] += _e(i);
        break;
      case 4:
        if (i === 44) {
          r[++a] = H() === 58 ? "&\f" : "", n[a] = r[a].length;
          break;
        }
      default:
        r[a] += Ce(i);
    }
  while (i = W());
  return r;
}, un = function(r, n) {
  return Zr(ln(Kr(r), n));
}, Tr = /* @__PURE__ */ new WeakMap(), fn = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var n = r.value, a = r.parent, i = r.column === a.column && r.line === a.line; a.type !== "rule"; )
      if (a = a.parent, !a)
        return;
    if (!(r.props.length === 1 && n.charCodeAt(0) !== 58 && !Tr.get(a)) && !i) {
      Tr.set(r, !0);
      for (var s = [], l = un(n, s), u = a.props, d = 0, g = 0; d < l.length; d++)
        for (var f = 0; f < u.length; f++, g++)
          r.props[g] = s[d] ? l[d].replace(/&\f/g, u[f]) : u[f] + " " + l[d];
    }
  }
}, dn = function(r) {
  if (r.type === "decl") {
    var n = r.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
}, pn = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", hn = function(r) {
  return r.type === "comm" && r.children.indexOf(pn) > -1;
}, mn = function(r) {
  return function(n, a, i) {
    if (!(n.type !== "rule" || r.compat)) {
      var s = n.value.match(/(:first|:nth|:nth-last)-child/g);
      if (s) {
        for (var l = !!n.parent, u = l ? n.parent.children : (
          // global rule at the root level
          i
        ), d = u.length - 1; d >= 0; d--) {
          var g = u[d];
          if (g.line < n.line)
            break;
          if (g.column < n.column) {
            if (hn(g))
              return;
            break;
          }
        }
        s.forEach(function(f) {
          console.error('The pseudo class "' + f + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + f.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, Qr = function(r) {
  return r.type.charCodeAt(1) === 105 && r.type.charCodeAt(0) === 64;
}, vn = function(r, n) {
  for (var a = r - 1; a >= 0; a--)
    if (!Qr(n[a]))
      return !0;
  return !1;
}, Pr = function(r) {
  r.type = "", r.value = "", r.return = "", r.children = "", r.props = "";
}, gn = function(r, n, a) {
  Qr(r) && (r.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), Pr(r)) : vn(n, a) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), Pr(r)));
};
function et(e, r) {
  switch (Ht(e, r)) {
    case 5103:
      return _ + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return _ + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return _ + e + Oe + e + j + e + e;
    case 6828:
    case 4268:
      return _ + e + j + e + e;
    case 6165:
      return _ + e + j + "flex-" + e + e;
    case 5187:
      return _ + e + S(e, /(\w+).+(:[^]+)/, _ + "box-$1$2" + j + "flex-$1$2") + e;
    case 5443:
      return _ + e + j + "flex-item-" + S(e, /flex-|-self/, "") + e;
    case 4675:
      return _ + e + j + "flex-line-pack" + S(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return _ + e + j + S(e, "shrink", "negative") + e;
    case 5292:
      return _ + e + j + S(e, "basis", "preferred-size") + e;
    case 6060:
      return _ + "box-" + S(e, "-grow", "") + _ + e + j + S(e, "grow", "positive") + e;
    case 4554:
      return _ + S(e, /([^-])(transform)/g, "$1" + _ + "$2") + e;
    case 6187:
      return S(S(S(e, /(zoom-|grab)/, _ + "$1"), /(image-set)/, _ + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return S(e, /(image-set\([^]*)/, _ + "$1$`$1");
    case 4968:
      return S(S(e, /(.+:)(flex-)?(.*)/, _ + "box-pack:$3" + j + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + _ + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return S(e, /(.+)-inline(.+)/, _ + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (B(e) - 1 - r > 6)
        switch ($(e, r + 1)) {
          case 109:
            if ($(e, r + 4) !== 45)
              break;
          case 102:
            return S(e, /(.+:)(.+)-([^]+)/, "$1" + _ + "$2-$3$1" + Oe + ($(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Ye(e, "stretch") ? et(S(e, "stretch", "fill-available"), r) + e : e;
        }
      break;
    case 4949:
      if ($(e, r + 1) !== 115)
        break;
    case 6444:
      switch ($(e, B(e) - 3 - (~Ye(e, "!important") && 10))) {
        case 107:
          return S(e, ":", ":" + _) + e;
        case 101:
          return S(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + _ + ($(e, 14) === 45 ? "inline-" : "") + "box$3$1" + _ + "$2$3$1" + j + "$2box$3") + e;
      }
      break;
    case 5936:
      switch ($(e, r + 11)) {
        case 114:
          return _ + e + j + S(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return _ + e + j + S(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return _ + e + j + S(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return _ + e + j + e + e;
  }
  return e;
}
var bn = function(r, n, a, i) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case Je:
        r.return = et(r.value, r.length);
        break;
      case Gr:
        return ae([fe(r, {
          value: S(r.value, "@", "@" + _)
        })], i);
      case Ge:
        if (r.length)
          return Jt(r.props, function(s) {
            switch (Gt(s, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return ae([fe(r, {
                  props: [S(s, /:(read-\w+)/, ":" + Oe + "$1")]
                })], i);
              case "::placeholder":
                return ae([fe(r, {
                  props: [S(s, /:(plac\w+)/, ":" + _ + "input-$1")]
                }), fe(r, {
                  props: [S(s, /:(plac\w+)/, ":" + Oe + "$1")]
                }), fe(r, {
                  props: [S(s, /:(plac\w+)/, j + "input-$1")]
                })], i);
            }
            return "";
          });
    }
}, yn = [bn], En = function(r) {
  var n = r.key;
  if (process.env.NODE_ENV !== "production" && !n)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (n === "css") {
    var a = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(a, function(h) {
      var O = h.getAttribute("data-emotion");
      O.indexOf(" ") !== -1 && (document.head.appendChild(h), h.setAttribute("data-s", ""));
    });
  }
  var i = r.stylisPlugins || yn;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(n))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + n + '" was passed');
  var s = {}, l, u = [];
  l = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(h) {
      for (var O = h.getAttribute("data-emotion").split(" "), E = 1; E < O.length; E++)
        s[O[E]] = !0;
      u.push(h);
    }
  );
  var d, g = [fn, dn];
  process.env.NODE_ENV !== "production" && g.push(mn({
    get compat() {
      return x.compat;
    }
  }), gn);
  {
    var f, v = [an, process.env.NODE_ENV !== "production" ? function(h) {
      h.root || (h.return ? f.insert(h.return) : h.value && h.type !== He && f.insert(h.value + "{}"));
    } : sn(function(h) {
      f.insert(h);
    })], C = on(g.concat(i, v)), T = function(O) {
      return ae(tn(O), C);
    };
    d = function(O, E, p, P) {
      f = p, process.env.NODE_ENV !== "production" && E.map !== void 0 && (f = {
        insert: function(D) {
          p.insert(D + E.map);
        }
      }), T(O ? O + "{" + E.styles + "}" : E.styles), P && (x.inserted[E.name] = !0);
    };
  }
  var x = {
    key: n,
    sheet: new Yt({
      key: n,
      container: l,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: s,
    registered: {},
    insert: d
  };
  return x.sheet.hydrate(u), x;
}, xn = !0;
function rt(e, r, n) {
  var a = "";
  return n.split(" ").forEach(function(i) {
    e[i] !== void 0 ? r.push(e[i] + ";") : a += i + " ";
  }), a;
}
var Ke = function(r, n, a) {
  var i = r.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (a === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  xn === !1) && r.registered[i] === void 0 && (r.registered[i] = n.styles);
}, tt = function(r, n, a) {
  Ke(r, n, a);
  var i = r.key + "-" + n.name;
  if (r.inserted[n.name] === void 0) {
    var s = n;
    do
      r.insert(n === s ? "." + i : "", s, r.sheet, !0), s = s.next;
    while (s !== void 0);
  }
};
function wn(e) {
  for (var r = 0, n, a = 0, i = e.length; i >= 4; ++a, i -= 4)
    n = e.charCodeAt(a) & 255 | (e.charCodeAt(++a) & 255) << 8 | (e.charCodeAt(++a) & 255) << 16 | (e.charCodeAt(++a) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, r = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (i) {
    case 3:
      r ^= (e.charCodeAt(a + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(a + 1) & 255) << 8;
    case 1:
      r ^= e.charCodeAt(a) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var _n = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Nr = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Sn = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", Rn = /[A-Z]|^ms/g, nt = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Ze = function(r) {
  return r.charCodeAt(1) === 45;
}, Ar = function(r) {
  return r != null && typeof r != "boolean";
}, Me = /* @__PURE__ */ Hr(function(e) {
  return Ze(e) ? e : e.replace(Rn, "-$&").toLowerCase();
}), ke = function(r, n) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(nt, function(a, i, s) {
          return U = {
            name: i,
            styles: s,
            next: U
          }, i;
        });
  }
  return _n[r] !== 1 && !Ze(r) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
if (process.env.NODE_ENV !== "production") {
  var On = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, kn = ["normal", "none", "initial", "inherit", "unset"], Cn = ke, Tn = /^-ms-/, Pn = /-(.)/g, Ir = {};
  ke = function(r, n) {
    if (r === "content" && (typeof n != "string" || kn.indexOf(n) === -1 && !On.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + n + "\"'`");
    var a = Cn(r, n);
    return a !== "" && !Ze(r) && r.indexOf("-") !== -1 && Ir[r] === void 0 && (Ir[r] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + r.replace(Tn, "ms-").replace(Pn, function(i, s) {
      return s.toUpperCase();
    }) + "?")), a;
  };
}
var at = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function he(e, r, n) {
  if (n == null)
    return "";
  if (n.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && n.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(at);
    return n;
  }
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return U = {
          name: n.name,
          styles: n.styles,
          next: U
        }, n.name;
      if (n.styles !== void 0) {
        var a = n.next;
        if (a !== void 0)
          for (; a !== void 0; )
            U = {
              name: a.name,
              styles: a.styles,
              next: U
            }, a = a.next;
        var i = n.styles + ";";
        return process.env.NODE_ENV !== "production" && n.map !== void 0 && (i += n.map), i;
      }
      return Nn(e, r, n);
    }
    case "function": {
      if (e !== void 0) {
        var s = U, l = n(e);
        return U = s, he(e, r, l);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var u = [], d = n.replace(nt, function(f, v, C) {
          var T = "animation" + u.length;
          return u.push("const " + T + " = keyframes`" + C.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + T + "}";
        });
        u.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(u, ["`" + d + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + d + "`"));
      }
      break;
  }
  if (r == null)
    return n;
  var g = r[n];
  return g !== void 0 ? g : n;
}
function Nn(e, r, n) {
  var a = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++)
      a += he(e, r, n[i]) + ";";
  else
    for (var s in n) {
      var l = n[s];
      if (typeof l != "object")
        r != null && r[l] !== void 0 ? a += s + "{" + r[l] + "}" : Ar(l) && (a += Me(s) + ":" + ke(s, l) + ";");
      else {
        if (s === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(at);
        if (Array.isArray(l) && typeof l[0] == "string" && (r == null || r[l[0]] === void 0))
          for (var u = 0; u < l.length; u++)
            Ar(l[u]) && (a += Me(s) + ":" + ke(s, l[u]) + ";");
        else {
          var d = he(e, r, l);
          switch (s) {
            case "animation":
            case "animationName": {
              a += Me(s) + ":" + d + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && s === "undefined" && console.error(Sn), a += s + "{" + d + "}";
          }
        }
      }
    }
  return a;
}
var $r = /label:\s*([^\s;\n{]+)\s*(;|$)/g, it;
process.env.NODE_ENV !== "production" && (it = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var U, qe = function(r, n, a) {
  if (r.length === 1 && typeof r[0] == "object" && r[0] !== null && r[0].styles !== void 0)
    return r[0];
  var i = !0, s = "";
  U = void 0;
  var l = r[0];
  l == null || l.raw === void 0 ? (i = !1, s += he(a, n, l)) : (process.env.NODE_ENV !== "production" && l[0] === void 0 && console.error(Nr), s += l[0]);
  for (var u = 1; u < r.length; u++)
    s += he(a, n, r[u]), i && (process.env.NODE_ENV !== "production" && l[u] === void 0 && console.error(Nr), s += l[u]);
  var d;
  process.env.NODE_ENV !== "production" && (s = s.replace(it, function(C) {
    return d = C, "";
  })), $r.lastIndex = 0;
  for (var g = "", f; (f = $r.exec(s)) !== null; )
    g += "-" + // $FlowFixMe we know it's not null
    f[1];
  var v = wn(s) + g;
  return process.env.NODE_ENV !== "production" ? {
    name: v,
    styles: s,
    map: d,
    next: U,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: v,
    styles: s,
    next: U
  };
}, An = function(r) {
  return r();
}, In = Sr["useInsertionEffect"] ? Sr["useInsertionEffect"] : !1, ot = In || An, $n = {}.hasOwnProperty, Qe = /* @__PURE__ */ Ur(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ En({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (Qe.displayName = "EmotionCacheContext");
Qe.Provider;
var st = function(r) {
  return /* @__PURE__ */ $t(function(n, a) {
    var i = Be(Qe);
    return r(n, i, a);
  });
}, er = /* @__PURE__ */ Ur({});
process.env.NODE_ENV !== "production" && (er.displayName = "EmotionThemeContext");
var Dr = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", jr = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", Dn = function(r) {
  var n = r.cache, a = r.serialized, i = r.isStringTag;
  return Ke(n, a, i), ot(function() {
    return tt(n, a, i);
  }), null;
}, jn = /* @__PURE__ */ st(function(e, r, n) {
  var a = e.css;
  typeof a == "string" && r.registered[a] !== void 0 && (a = r.registered[a]);
  var i = e[Dr], s = [a], l = "";
  typeof e.className == "string" ? l = rt(r.registered, s, e.className) : e.className != null && (l = e.className + " ");
  var u = qe(s, void 0, Be(er));
  if (process.env.NODE_ENV !== "production" && u.name.indexOf("-") === -1) {
    var d = e[jr];
    d && (u = qe([u, "label:" + d + ";"]));
  }
  l += r.key + "-" + u.name;
  var g = {};
  for (var f in e)
    $n.call(e, f) && f !== "css" && f !== Dr && (process.env.NODE_ENV === "production" || f !== jr) && (g[f] = e[f]);
  return g.ref = n, g.className = l, /* @__PURE__ */ ne(qr, null, /* @__PURE__ */ ne(Dn, {
    cache: r,
    serialized: u,
    isStringTag: typeof i == "string"
  }), /* @__PURE__ */ ne(i, g));
});
process.env.NODE_ENV !== "production" && (jn.displayName = "EmotionCssPropInternal");
var Ln = Mt, Vn = function(r) {
  return r !== "theme";
}, Lr = function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? Ln : Vn;
}, Vr = function(r, n, a) {
  var i;
  if (n) {
    var s = n.shouldForwardProp;
    i = r.__emotion_forwardProp && s ? function(l) {
      return r.__emotion_forwardProp(l) && s(l);
    } : s;
  }
  return typeof i != "function" && a && (i = r.__emotion_forwardProp), i;
}, Fr = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Fn = function(r) {
  var n = r.cache, a = r.serialized, i = r.isStringTag;
  return Ke(n, a, i), ot(function() {
    return tt(n, a, i);
  }), null;
}, Mn = function e(r, n) {
  if (process.env.NODE_ENV !== "production" && r === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var a = r.__emotion_real === r, i = a && r.__emotion_base || r, s, l;
  n !== void 0 && (s = n.label, l = n.target);
  var u = Vr(r, n, a), d = u || Lr(i), g = !d("as");
  return function() {
    var f = arguments, v = a && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (s !== void 0 && v.push("label:" + s + ";"), f[0] == null || f[0].raw === void 0)
      v.push.apply(v, f);
    else {
      process.env.NODE_ENV !== "production" && f[0][0] === void 0 && console.error(Fr), v.push(f[0][0]);
      for (var C = f.length, T = 1; T < C; T++)
        process.env.NODE_ENV !== "production" && f[0][T] === void 0 && console.error(Fr), v.push(f[T], f[0][T]);
    }
    var x = st(function(h, O, E) {
      var p = g && h.as || i, P = "", q = [], D = h;
      if (h.theme == null) {
        D = {};
        for (var V in h)
          D[V] = h[V];
        D.theme = Be(er);
      }
      typeof h.className == "string" ? P = rt(O.registered, q, h.className) : h.className != null && (P = h.className + " ");
      var R = qe(v.concat(q), O.registered, D);
      P += O.key + "-" + R.name, l !== void 0 && (P += " " + l);
      var Ne = g && u === void 0 ? Lr(p) : d, K = {};
      for (var Q in h)
        g && Q === "as" || // $FlowFixMe
        Ne(Q) && (K[Q] = h[Q]);
      return K.className = P, K.ref = E, /* @__PURE__ */ ne(qr, null, /* @__PURE__ */ ne(Fn, {
        cache: O,
        serialized: R,
        isStringTag: typeof p == "string"
      }), /* @__PURE__ */ ne(p, K));
    });
    return x.displayName = s !== void 0 ? s : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")", x.defaultProps = r.defaultProps, x.__emotion_real = x, x.__emotion_base = i, x.__emotion_styles = v, x.__emotion_forwardProp = u, Object.defineProperty(x, "toString", {
      value: function() {
        return l === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + l;
      }
    }), x.withComponent = function(h, O) {
      return e(h, ze({}, n, O, {
        shouldForwardProp: Vr(x, O, !0)
      })).apply(void 0, v);
    }, x;
  };
}, Wn = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], z = Mn.bind();
Wn.forEach(function(e) {
  z[e] = z(e);
});
const zn = (e) => Br(Yn, {
  children: [L(Un, {
    src: "https://files.actevna.com/actevnalc.png"
  }), L(qn, {
    children: e.text
  })]
}), Yn = z.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 20px;

  width: 100%;
  height: 100%;

  border-radius: 18px;

  min-width: 600px;
  min-height: 400px;

  background: #f7f8fd;
`, Un = z.img`
  width: 160px;
`, qn = z.span`
  color: #061237;
  font-family: Inter, sans-serif;
  font-size: 18px;
  line-height: 36px;
`, Bn = 50;
var Hn = ((e) => (e[e.Left = 0] = "Left", e[e.Right = 1] = "Right", e))(Hn || {});
const Gn = (e) => {
  var x, h, O, E;
  if (!((x = e.left) != null && x.src) || !((h = e.right) != null && h.src)) {
    let p = 2;
    return ((O = e.left) != null && O.src || (E = e.right) != null && E.src) && p--, L(zn, {
      text: `Upload ${p} image${p > 1 ? "s" : ""} to continue`
    });
  }
  const r = te(null), n = te(null), a = te(null), i = te(null), s = te(null), l = te(null), u = (p) => {
    r.current.style.clipPath = `inset(0px 0px 0px ${p}%)`, a.current.style.left = `${p}%`;
  }, d = (p) => n.current.value = `${p}`, g = (p) => {
    u(+p.target.value);
  };
  We(() => {
    u(e.position);
  }, [e.position]), We(() => {
    f(), e.position !== Bn && (u(e.position), d(e.position));
  }, []);
  const f = () => {
    var P;
    const p = (P = a.current) == null ? void 0 : P.firstChild;
    i.current && p && i.current.style.setProperty("--thumb-size", `${p.clientWidth}px`);
  }, v = () => {
    r.current.style.transition = "clip-path 0.3s", a.current.style.transition = "left 0.3s";
  }, C = () => {
    r.current.style.transition = "", a.current.style.transition = "";
  }, T = (p) => {
    switch (v(), p) {
      case 0:
        u(0), d(0);
        break;
      case 1:
        u(100), d(100);
        break;
    }
    setTimeout(C, 300);
  };
  return Br(Jn, {
    ref: i,
    borderRadius: e.radius,
    background: e.bg,
    children: [L(Wr, {
      ref: s,
      hp: "left",
      vp: e.label.position,
      x: e.label.x,
      y: e.label.y,
      onClick: () => T(0),
      children: e.customLabel ? e.leftLabel : L(zr, {
        children: e.label.before
      })
    }), L(Wr, {
      ref: l,
      hp: "right",
      vp: e.label.position,
      x: e.label.x,
      y: e.label.y,
      onClick: () => T(1),
      children: e.customLabel ? e.rightLabel : L(zr, {
        children: e.label.after
      })
    }), L(Xn, {
      ref: r,
      children: L(Mr, {
        src: e.right.src,
        srcSet: e.right.srcSet,
        alt: e.right.alt
      })
    }), L(Mr, {
      src: e.left.src,
      srcSet: e.left.srcSet,
      alt: e.left.alt
    }), L(Zn, {
      type: "range",
      ref: n,
      min: "0",
      max: "100",
      onChange: g
    }), L(Kn, {
      ref: a,
      color: e.line.color,
      width: e.line.width,
      children: e.customHandle ? e.handle : L(Qn, {})
    })]
  });
}, Jn = z.div`
  position: relative;
  display: inline-block;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: ${(e) => e.borderRadius}px;
  background: ${(e) => e.background};
`, Xn = z.div`
  position: absolute;
  z-index: 1;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
`, Mr = z.img`
  vertical-align: bottom;
  object-fit: cover;
  height: 100%;
  width: 100%;
}`, Kn = z.div`
  pointer-events: none;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  z-index: 2;

  left: 50%;
  bottom: 0;
  top: 0;

  transform: translateX(-50%);

  &:before {
    content: '';

    position: absolute;
    left: 50%;
    bottom: 0;
    top: 0;

    width: ${(e) => e.width}px;
    background: ${(e) => e.color};

    transform: translateX(-50%);
  }
`, Zn = z.input`
  bottom: 0;
  cursor: pointer;
  height: 100%;
  left: -1px;
  margin: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  touch-action: auto;
  width: calc(100% + 2px);
  z-index: 2;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: calc(var(--thumb-size) * 2);
    height: calc(var(--thumb-size) * 1.5);
  }
`, Qn = z.div`
  flex-shrink: 0;
  position: relative;

  width: 64px;
  height: 64px;
  background: rgba(255, 255, 255, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.24);
  border-radius: 50%;

  &:before,
  &:after {
    content: '';

    position: absolute;
    top: 50%;

    border-left: 2px solid;
    border-top: 2px solid;

    height: 8px;
    width: 8px;

    transform-origin: 0 0;
  }

  &:before {
    left: 18px;
    transform: rotate(-45deg);
  }

  &:after {
    right: 8px;
    transform: rotate(135deg);
  }
`, Wr = z.div`
  position: absolute;
  z-index: 3;

  cursor: pointer;

  ${(e) => `${e.vp}: ${e.y}px;`}
  ${(e) => `${e.hp}: ${e.x}px;`}
`, zr = z.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 2px 16px;
  background: rgba(255, 255, 255, 0.48);
  border: 1px solid rgba(255, 255, 255, 0.24);
  border-radius: 6px;

  font-family: Inter, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 28px;
  color: #000000;
`, ea = ({ loading: e, loaded: r }) => {
  const [n, a] = Dt(!0);
  return We(() => a(!1), []), n ? e : r;
}, X = (e) => {
  var r, n;
  return !((r = e.left) != null && r.src) || !((n = e.right) != null && n.src);
}, ta = {
  left: {
    type: "responsiveimage",
    title: "Left Image"
  },
  right: {
    type: "responsiveimage",
    title: "Right Image",
    description: "Slider Tool"
  },
  radius: {
    type: "number",
    defaultValue: 0,
    min: 0,
    max: 999,
    step: 1,
    displayStepper: !0,
    hidden: X
  },
  bg: {
    type: "color",
    title: "Background",
    defaultValue: "#e4e6f1"
  },
  position: {
    type: "number",
    defaultValue: 50,
    description: "Starting position of the handle",
    min: 0,
    max: 100,
    step: 1,
    displayStepper: !0,
    hidden: X
  },
  customHandle: {
    type: "boolean",
    defaultValue: !1,
    hidden: X
  },
  handle: {
    type: "componentinstance",
    title: "Handle",
    hidden: (e) => X(e) || !e.customHandle
  },
  label: {
    type: "object",
    hidden: X,
    controls: {
      position: {
        type: "enum",
        defaultValue: "row",
        options: ["top", "bottom"],
        optionTitles: ["Top", "Bottom"]
      },
      x: {
        type: "number",
        defaultValue: 24,
        min: 0,
        max: 999,
        step: 1,
        displayStepper: !0
      },
      y: {
        type: "number",
        defaultValue: 24,
        min: 0,
        max: 999,
        step: 1,
        displayStepper: !0
      },
      before: {
        type: "string",
        defaultValue: "Without Actevna®"
      },
      after: {
        type: "string",
        defaultValue: "With Actevna®"
      }
    }
  },
  customLabel: {
    type: "boolean",
    defaultValue: !1,
    hidden: X
  },
  leftLabel: {
    type: "componentinstance",
    title: "Left Label",
    hidden: (e) => X(e) || !e.customLabel
  },
  rightLabel: {
    type: "componentinstance",
    title: "Left Label",
    hidden: (e) => X(e) || !e.customLabel
  },
  line: {
    type: "object",
    hidden: X,
    controls: {
      color: {
        type: "color",
        defaultValue: "rgba(255, 255, 255, 0.4)"
      },
      width: {
        type: "number",
        defaultValue: 1,
        min: 0,
        max: 99,
        step: 1,
        displayStepper: !0
      }
    }
  }
}, na = (e) => L(ea, {
  loading: L("div", {
    style: {
      width: "100%",
      height: "100%",
      borderRadius: `${e.radius}px`,
      background: e.bg
    }
  }),
  loaded: L(Gn, {
    ...e
  })
});
export {
  na as BeforeAfter,
  ta as propertyControls
};
