/**
 * Jquery, Swiper, Sticky-js, gumshoejs, smooth-scroll, SimpleBar.js
 * */

/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!(function(e, t) {
    'use strict';
    'object' == typeof module && 'object' == typeof module.exports
        ? (module.exports = e.document
              ? t(e, !0)
              : function(e) {
                    if (!e.document) throw new Error('jQuery requires a window with a document');
                    return t(e);
                })
        : t(e);
})('undefined' != typeof window ? window : this, function(C, e) {
    'use strict';
    var t = [],
        E = C.document,
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.concat,
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        v = n.hasOwnProperty,
        a = v.toString,
        l = a.call(Object),
        y = {},
        m = function(e) {
            return 'function' == typeof e && 'number' != typeof e.nodeType;
        },
        x = function(e) {
            return null != e && e === e.window;
        },
        c = {type: !0, src: !0, nonce: !0, noModule: !0};
    function b(e, t, n) {
        var r,
            i,
            o = (n = n || E).createElement('script');
        if (((o.text = e), t))
            for (r in c)
                (i = t[r] || (t.getAttribute && t.getAttribute(r))) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o);
    }
    function w(e) {
        return null == e
            ? e + ''
            : 'object' == typeof e || 'function' == typeof e
            ? n[o.call(e)] || 'object'
            : typeof e;
    }
    var f = '3.4.1',
        k = function(e, t) {
            return new k.fn.init(e, t);
        },
        p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function d(e) {
        var t = !!e && 'length' in e && e.length,
            n = w(e);
        return (
            !m(e) &&
            !x(e) &&
            ('array' === n || 0 === t || ('number' == typeof t && 0 < t && t - 1 in e))
        );
    }
    (k.fn = k.prototype = {
        jquery: f,
        constructor: k,
        length: 0,
        toArray: function() {
            return s.call(this);
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function(e) {
            var t = k.merge(this.constructor(), e);
            return (t.prevObject = this), t;
        },
        each: function(e) {
            return k.each(this, e);
        },
        map: function(n) {
            return this.pushStack(
                k.map(this, function(e, t) {
                    return n.call(e, t, e);
                })
            );
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: u,
        sort: t.sort,
        splice: t.splice,
    }),
        (k.extend = k.fn.extend = function() {
            var e,
                t,
                n,
                r,
                i,
                o,
                a = arguments[0] || {},
                s = 1,
                u = arguments.length,
                l = !1;
            for (
                'boolean' == typeof a && ((l = a), (a = arguments[s] || {}), s++),
                    'object' == typeof a || m(a) || (a = {}),
                    s === u && ((a = this), s--);
                s < u;
                s++
            )
                if (null != (e = arguments[s]))
                    for (t in e)
                        (r = e[t]),
                            '__proto__' !== t &&
                                a !== r &&
                                (l && r && (k.isPlainObject(r) || (i = Array.isArray(r)))
                                    ? ((n = a[t]),
                                      (o =
                                          i && !Array.isArray(n)
                                              ? []
                                              : i || k.isPlainObject(n)
                                              ? n
                                              : {}),
                                      (i = !1),
                                      (a[t] = k.extend(l, o, r)))
                                    : void 0 !== r && (a[t] = r));
            return a;
        }),
        k.extend({
            expando: 'jQuery' + (f + Math.random()).replace(/\D/g, ''),
            isReady: !0,
            error: function(e) {
                throw new Error(e);
            },
            noop: function() {},
            isPlainObject: function(e) {
                var t, n;
                return (
                    !(!e || '[object Object]' !== o.call(e)) &&
                    (!(t = r(e)) ||
                        ('function' == typeof (n = v.call(t, 'constructor') && t.constructor) &&
                            a.call(n) === l))
                );
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            globalEval: function(e, t) {
                b(e, {nonce: t && t.nonce});
            },
            each: function(e, t) {
                var n,
                    r = 0;
                if (d(e)) {
                    for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break;
                } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
            },
            trim: function(e) {
                return null == e ? '' : (e + '').replace(p, '');
            },
            makeArray: function(e, t) {
                var n = t || [];
                return (
                    null != e &&
                        (d(Object(e)) ? k.merge(n, 'string' == typeof e ? [e] : e) : u.call(n, e)),
                    n
                );
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : i.call(t, e, n);
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                return (e.length = i), e;
            },
            grep: function(e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                    !t(e[i], i) !== a && r.push(e[i]);
                return r;
            },
            map: function(e, t, n) {
                var r,
                    i,
                    o = 0,
                    a = [];
                if (d(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
                else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                return g.apply([], a);
            },
            guid: 1,
            support: y,
        }),
        'function' == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]),
        k.each(
            'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '),
            function(e, t) {
                n['[object ' + t + ']'] = t.toLowerCase();
            }
        );
    var h = (function(n) {
        var e,
            d,
            b,
            o,
            i,
            h,
            f,
            g,
            w,
            u,
            l,
            T,
            C,
            a,
            E,
            v,
            s,
            c,
            y,
            k = 'sizzle' + 1 * new Date(),
            m = n.document,
            S = 0,
            r = 0,
            p = ue(),
            x = ue(),
            N = ue(),
            A = ue(),
            D = function(e, t) {
                return e === t && (l = !0), 0;
            },
            j = {}.hasOwnProperty,
            t = [],
            q = t.pop,
            L = t.push,
            H = t.push,
            O = t.slice,
            P = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                return -1;
            },
            R =
                'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
            M = '[\\x20\\t\\r\\n\\f]',
            I = '(?:\\\\.|[\\w-]|[^\0-\\xa0])+',
            W =
                '\\[' +
                M +
                '*(' +
                I +
                ')(?:' +
                M +
                '*([*^$|!~]?=)' +
                M +
                '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
                I +
                '))|)' +
                M +
                '*\\]',
            $ =
                ':(' +
                I +
                ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
                W +
                ')*)|.*)\\)|)',
            F = new RegExp(M + '+', 'g'),
            B = new RegExp('^' + M + '+|((?:^|[^\\\\])(?:\\\\.)*)' + M + '+$', 'g'),
            _ = new RegExp('^' + M + '*,' + M + '*'),
            z = new RegExp('^' + M + '*([>+~]|' + M + ')' + M + '*'),
            U = new RegExp(M + '|>'),
            X = new RegExp($),
            V = new RegExp('^' + I + '$'),
            G = {
                ID: new RegExp('^#(' + I + ')'),
                CLASS: new RegExp('^\\.(' + I + ')'),
                TAG: new RegExp('^(' + I + '|[*])'),
                ATTR: new RegExp('^' + W),
                PSEUDO: new RegExp('^' + $),
                CHILD: new RegExp(
                    '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
                        M +
                        '*(even|odd|(([+-]|)(\\d*)n|)' +
                        M +
                        '*(?:([+-]|)' +
                        M +
                        '*(\\d+)|))' +
                        M +
                        '*\\)|)',
                    'i'
                ),
                bool: new RegExp('^(?:' + R + ')$', 'i'),
                needsContext: new RegExp(
                    '^' +
                        M +
                        '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
                        M +
                        '*((?:-\\d)?\\d*)' +
                        M +
                        '*\\)|)(?=[^-]|$)',
                    'i'
                ),
            },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp('\\\\([\\da-f]{1,6}' + M + '?|(' + M + ')|.)', 'ig'),
            ne = function(e, t, n) {
                var r = '0x' + t - 65536;
                return r != r || n
                    ? t
                    : r < 0
                    ? String.fromCharCode(r + 65536)
                    : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
                return t
                    ? '\0' === e
                        ? '\ufffd'
                        : e.slice(0, -1) + '\\' + e.charCodeAt(e.length - 1).toString(16) + ' '
                    : '\\' + e;
            },
            oe = function() {
                T();
            },
            ae = be(
                function(e) {
                    return !0 === e.disabled && 'fieldset' === e.nodeName.toLowerCase();
                },
                {dir: 'parentNode', next: 'legend'}
            );
        try {
            H.apply((t = O.call(m.childNodes)), m.childNodes), t[m.childNodes.length].nodeType;
        } catch (e) {
            H = {
                apply: t.length
                    ? function(e, t) {
                          L.apply(e, O.call(t));
                      }
                    : function(e, t) {
                          var n = e.length,
                              r = 0;
                          while ((e[n++] = t[r++]));
                          e.length = n - 1;
                      },
            };
        }
        function se(t, e, n, r) {
            var i,
                o,
                a,
                s,
                u,
                l,
                c,
                f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (((n = n || []), 'string' != typeof t || !t || (1 !== p && 9 !== p && 11 !== p)))
                return n;
            if (!r && ((e ? e.ownerDocument || e : m) !== C && T(e), (e = e || C), E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if ((i = u[1])) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n;
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
                            return n.push(a), n;
                    } else {
                        if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName)
                            return H.apply(n, e.getElementsByClassName(i)), n;
                    }
                if (
                    d.qsa &&
                    !A[t + ' '] &&
                    (!v || !v.test(t)) &&
                    (1 !== p || 'object' !== e.nodeName.toLowerCase())
                ) {
                    if (((c = t), (f = e), 1 === p && U.test(t))) {
                        (s = e.getAttribute('id'))
                            ? (s = s.replace(re, ie))
                            : e.setAttribute('id', (s = k)),
                            (o = (l = h(t)).length);
                        while (o--) l[o] = '#' + s + ' ' + xe(l[o]);
                        (c = l.join(',')), (f = (ee.test(t) && ye(e.parentNode)) || e);
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)), n;
                    } catch (e) {
                        A(t, !0);
                    } finally {
                        s === k && e.removeAttribute('id');
                    }
                }
            }
            return g(t.replace(B, '$1'), e, n, r);
        }
        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + ' ') > b.cacheLength && delete e[r.shift()], (e[t + ' '] = n);
            };
        }
        function le(e) {
            return (e[k] = !0), e;
        }
        function ce(e) {
            var t = C.createElement('fieldset');
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
        }
        function fe(e, t) {
            var n = e.split('|'),
                r = n.length;
            while (r--) b.attrHandle[n[r]] = t;
        }
        function pe(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) while ((n = n.nextSibling)) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function de(t) {
            return function(e) {
                return 'input' === e.nodeName.toLowerCase() && e.type === t;
            };
        }
        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ('input' === t || 'button' === t) && e.type === n;
            };
        }
        function ge(t) {
            return function(e) {
                return 'form' in e
                    ? e.parentNode && !1 === e.disabled
                        ? 'label' in e
                            ? 'label' in e.parentNode
                                ? e.parentNode.disabled === t
                                : e.disabled === t
                            : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
                        : e.disabled === t
                    : 'label' in e && e.disabled === t;
            };
        }
        function ve(a) {
            return le(function(o) {
                return (
                    (o = +o),
                    le(function(e, t) {
                        var n,
                            r = a([], e.length, o),
                            i = r.length;
                        while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
                    })
                );
            });
        }
        function ye(e) {
            return e && 'undefined' != typeof e.getElementsByTagName && e;
        }
        for (e in ((d = se.support = {}),
        (i = se.isXML = function(e) {
            var t = e.namespaceURI,
                n = (e.ownerDocument || e).documentElement;
            return !Y.test(t || (n && n.nodeName) || 'HTML');
        }),
        (T = se.setDocument = function(e) {
            var t,
                n,
                r = e ? e.ownerDocument || e : m;
            return (
                r !== C &&
                    9 === r.nodeType &&
                    r.documentElement &&
                    ((a = (C = r).documentElement),
                    (E = !i(C)),
                    m !== C &&
                        (n = C.defaultView) &&
                        n.top !== n &&
                        (n.addEventListener
                            ? n.addEventListener('unload', oe, !1)
                            : n.attachEvent && n.attachEvent('onunload', oe)),
                    (d.attributes = ce(function(e) {
                        return (e.className = 'i'), !e.getAttribute('className');
                    })),
                    (d.getElementsByTagName = ce(function(e) {
                        return (
                            e.appendChild(C.createComment('')), !e.getElementsByTagName('*').length
                        );
                    })),
                    (d.getElementsByClassName = K.test(C.getElementsByClassName)),
                    (d.getById = ce(function(e) {
                        return (
                            (a.appendChild(e).id = k),
                            !C.getElementsByName || !C.getElementsByName(k).length
                        );
                    })),
                    d.getById
                        ? ((b.filter.ID = function(e) {
                              var t = e.replace(te, ne);
                              return function(e) {
                                  return e.getAttribute('id') === t;
                              };
                          }),
                          (b.find.ID = function(e, t) {
                              if ('undefined' != typeof t.getElementById && E) {
                                  var n = t.getElementById(e);
                                  return n ? [n] : [];
                              }
                          }))
                        : ((b.filter.ID = function(e) {
                              var n = e.replace(te, ne);
                              return function(e) {
                                  var t =
                                      'undefined' != typeof e.getAttributeNode &&
                                      e.getAttributeNode('id');
                                  return t && t.value === n;
                              };
                          }),
                          (b.find.ID = function(e, t) {
                              if ('undefined' != typeof t.getElementById && E) {
                                  var n,
                                      r,
                                      i,
                                      o = t.getElementById(e);
                                  if (o) {
                                      if ((n = o.getAttributeNode('id')) && n.value === e)
                                          return [o];
                                      (i = t.getElementsByName(e)), (r = 0);
                                      while ((o = i[r++]))
                                          if ((n = o.getAttributeNode('id')) && n.value === e)
                                              return [o];
                                  }
                                  return [];
                              }
                          })),
                    (b.find.TAG = d.getElementsByTagName
                        ? function(e, t) {
                              return 'undefined' != typeof t.getElementsByTagName
                                  ? t.getElementsByTagName(e)
                                  : d.qsa
                                  ? t.querySelectorAll(e)
                                  : void 0;
                          }
                        : function(e, t) {
                              var n,
                                  r = [],
                                  i = 0,
                                  o = t.getElementsByTagName(e);
                              if ('*' === e) {
                                  while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                                  return r;
                              }
                              return o;
                          }),
                    (b.find.CLASS =
                        d.getElementsByClassName &&
                        function(e, t) {
                            if ('undefined' != typeof t.getElementsByClassName && E)
                                return t.getElementsByClassName(e);
                        }),
                    (s = []),
                    (v = []),
                    (d.qsa = K.test(C.querySelectorAll)) &&
                        (ce(function(e) {
                            (a.appendChild(e).innerHTML =
                                "<a id='" +
                                k +
                                "'></a><select id='" +
                                k +
                                "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                e.querySelectorAll("[msallowcapture^='']").length &&
                                    v.push('[*^$]=' + M + '*(?:\'\'|"")'),
                                e.querySelectorAll('[selected]').length ||
                                    v.push('\\[' + M + '*(?:value|' + R + ')'),
                                e.querySelectorAll('[id~=' + k + '-]').length || v.push('~='),
                                e.querySelectorAll(':checked').length || v.push(':checked'),
                                e.querySelectorAll('a#' + k + '+*').length || v.push('.#.+[+~]');
                        }),
                        ce(function(e) {
                            e.innerHTML =
                                "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = C.createElement('input');
                            t.setAttribute('type', 'hidden'),
                                e.appendChild(t).setAttribute('name', 'D'),
                                e.querySelectorAll('[name=d]').length &&
                                    v.push('name' + M + '*[*^$|!~]?='),
                                2 !== e.querySelectorAll(':enabled').length &&
                                    v.push(':enabled', ':disabled'),
                                (a.appendChild(e).disabled = !0),
                                2 !== e.querySelectorAll(':disabled').length &&
                                    v.push(':enabled', ':disabled'),
                                e.querySelectorAll('*,:x'),
                                v.push(',.*:');
                        })),
                    (d.matchesSelector = K.test(
                        (c =
                            a.matches ||
                            a.webkitMatchesSelector ||
                            a.mozMatchesSelector ||
                            a.oMatchesSelector ||
                            a.msMatchesSelector)
                    )) &&
                        ce(function(e) {
                            (d.disconnectedMatch = c.call(e, '*')),
                                c.call(e, "[s!='']:x"),
                                s.push('!=', $);
                        }),
                    (v = v.length && new RegExp(v.join('|'))),
                    (s = s.length && new RegExp(s.join('|'))),
                    (t = K.test(a.compareDocumentPosition)),
                    (y =
                        t || K.test(a.contains)
                            ? function(e, t) {
                                  var n = 9 === e.nodeType ? e.documentElement : e,
                                      r = t && t.parentNode;
                                  return (
                                      e === r ||
                                      !(
                                          !r ||
                                          1 !== r.nodeType ||
                                          !(n.contains
                                              ? n.contains(r)
                                              : e.compareDocumentPosition &&
                                                16 & e.compareDocumentPosition(r))
                                      )
                                  );
                              }
                            : function(e, t) {
                                  if (t) while ((t = t.parentNode)) if (t === e) return !0;
                                  return !1;
                              }),
                    (D = t
                        ? function(e, t) {
                              if (e === t) return (l = !0), 0;
                              var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                              return (
                                  n ||
                                  (1 &
                                      (n =
                                          (e.ownerDocument || e) === (t.ownerDocument || t)
                                              ? e.compareDocumentPosition(t)
                                              : 1) ||
                                  (!d.sortDetached && t.compareDocumentPosition(e) === n)
                                      ? e === C || (e.ownerDocument === m && y(m, e))
                                          ? -1
                                          : t === C || (t.ownerDocument === m && y(m, t))
                                          ? 1
                                          : u
                                          ? P(u, e) - P(u, t)
                                          : 0
                                      : 4 & n
                                      ? -1
                                      : 1)
                              );
                          }
                        : function(e, t) {
                              if (e === t) return (l = !0), 0;
                              var n,
                                  r = 0,
                                  i = e.parentNode,
                                  o = t.parentNode,
                                  a = [e],
                                  s = [t];
                              if (!i || !o)
                                  return e === C
                                      ? -1
                                      : t === C
                                      ? 1
                                      : i
                                      ? -1
                                      : o
                                      ? 1
                                      : u
                                      ? P(u, e) - P(u, t)
                                      : 0;
                              if (i === o) return pe(e, t);
                              n = e;
                              while ((n = n.parentNode)) a.unshift(n);
                              n = t;
                              while ((n = n.parentNode)) s.unshift(n);
                              while (a[r] === s[r]) r++;
                              return r ? pe(a[r], s[r]) : a[r] === m ? -1 : s[r] === m ? 1 : 0;
                          })),
                C
            );
        }),
        (se.matches = function(e, t) {
            return se(e, null, null, t);
        }),
        (se.matchesSelector = function(e, t) {
            if (
                ((e.ownerDocument || e) !== C && T(e),
                d.matchesSelector && E && !A[t + ' '] && (!s || !s.test(t)) && (!v || !v.test(t)))
            )
                try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || (e.document && 11 !== e.document.nodeType))
                        return n;
                } catch (e) {
                    A(t, !0);
                }
            return 0 < se(t, C, null, [e]).length;
        }),
        (se.contains = function(e, t) {
            return (e.ownerDocument || e) !== C && T(e), y(e, t);
        }),
        (se.attr = function(e, t) {
            (e.ownerDocument || e) !== C && T(e);
            var n = b.attrHandle[t.toLowerCase()],
                r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
            return void 0 !== r
                ? r
                : d.attributes || !E
                ? e.getAttribute(t)
                : (r = e.getAttributeNode(t)) && r.specified
                ? r.value
                : null;
        }),
        (se.escape = function(e) {
            return (e + '').replace(re, ie);
        }),
        (se.error = function(e) {
            throw new Error('Syntax error, unrecognized expression: ' + e);
        }),
        (se.uniqueSort = function(e) {
            var t,
                n = [],
                r = 0,
                i = 0;
            if (((l = !d.detectDuplicates), (u = !d.sortStable && e.slice(0)), e.sort(D), l)) {
                while ((t = e[i++])) t === e[i] && (r = n.push(i));
                while (r--) e.splice(n[r], 1);
            }
            return (u = null), e;
        }),
        (o = se.getText = function(e) {
            var t,
                n = '',
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ('string' == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
                } else if (3 === i || 4 === i) return e.nodeValue;
            } else while ((t = e[r++])) n += o(t);
            return n;
        }),
        ((b = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
                '>': {dir: 'parentNode', first: !0},
                ' ': {dir: 'parentNode'},
                '+': {dir: 'previousSibling', first: !0},
                '~': {dir: 'previousSibling'},
            },
            preFilter: {
                ATTR: function(e) {
                    return (
                        (e[1] = e[1].replace(te, ne)),
                        (e[3] = (e[3] || e[4] || e[5] || '').replace(te, ne)),
                        '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
                        e.slice(0, 4)
                    );
                },
                CHILD: function(e) {
                    return (
                        (e[1] = e[1].toLowerCase()),
                        'nth' === e[1].slice(0, 3)
                            ? (e[3] || se.error(e[0]),
                              (e[4] = +(e[4]
                                  ? e[5] + (e[6] || 1)
                                  : 2 * ('even' === e[3] || 'odd' === e[3]))),
                              (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                            : e[3] && se.error(e[0]),
                        e
                    );
                },
                PSEUDO: function(e) {
                    var t,
                        n = !e[6] && e[2];
                    return G.CHILD.test(e[0])
                        ? null
                        : (e[3]
                              ? (e[2] = e[4] || e[5] || '')
                              : n &&
                                X.test(n) &&
                                (t = h(n, !0)) &&
                                (t = n.indexOf(')', n.length - t) - n.length) &&
                                ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                          e.slice(0, 3));
                },
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return '*' === e
                        ? function() {
                              return !0;
                          }
                        : function(e) {
                              return e.nodeName && e.nodeName.toLowerCase() === t;
                          };
                },
                CLASS: function(e) {
                    var t = p[e + ' '];
                    return (
                        t ||
                        ((t = new RegExp('(^|' + M + ')' + e + '(' + M + '|$)')) &&
                            p(e, function(e) {
                                return t.test(
                                    ('string' == typeof e.className && e.className) ||
                                        ('undefined' != typeof e.getAttribute &&
                                            e.getAttribute('class')) ||
                                        ''
                                );
                            }))
                    );
                },
                ATTR: function(n, r, i) {
                    return function(e) {
                        var t = se.attr(e, n);
                        return null == t
                            ? '!=' === r
                            : !r ||
                                  ((t += ''),
                                  '=' === r
                                      ? t === i
                                      : '!=' === r
                                      ? t !== i
                                      : '^=' === r
                                      ? i && 0 === t.indexOf(i)
                                      : '*=' === r
                                      ? i && -1 < t.indexOf(i)
                                      : '$=' === r
                                      ? i && t.slice(-i.length) === i
                                      : '~=' === r
                                      ? -1 < (' ' + t.replace(F, ' ') + ' ').indexOf(i)
                                      : '|=' === r &&
                                        (t === i || t.slice(0, i.length + 1) === i + '-'));
                    };
                },
                CHILD: function(h, e, t, g, v) {
                    var y = 'nth' !== h.slice(0, 3),
                        m = 'last' !== h.slice(-4),
                        x = 'of-type' === e;
                    return 1 === g && 0 === v
                        ? function(e) {
                              return !!e.parentNode;
                          }
                        : function(e, t, n) {
                              var r,
                                  i,
                                  o,
                                  a,
                                  s,
                                  u,
                                  l = y !== m ? 'nextSibling' : 'previousSibling',
                                  c = e.parentNode,
                                  f = x && e.nodeName.toLowerCase(),
                                  p = !n && !x,
                                  d = !1;
                              if (c) {
                                  if (y) {
                                      while (l) {
                                          a = e;
                                          while ((a = a[l]))
                                              if (
                                                  x
                                                      ? a.nodeName.toLowerCase() === f
                                                      : 1 === a.nodeType
                                              )
                                                  return !1;
                                          u = l = 'only' === h && !u && 'nextSibling';
                                      }
                                      return !0;
                                  }
                                  if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                                      (d =
                                          (s =
                                              (r =
                                                  (i =
                                                      (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] ||
                                                      (o[a.uniqueID] = {}))[h] || [])[0] === S &&
                                              r[1]) && r[2]),
                                          (a = s && c.childNodes[s]);
                                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                                          if (1 === a.nodeType && ++d && a === e) {
                                              i[h] = [S, s, d];
                                              break;
                                          }
                                  } else if (
                                      (p &&
                                          (d = s =
                                              (r =
                                                  (i =
                                                      (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] ||
                                                      (o[a.uniqueID] = {}))[h] || [])[0] === S &&
                                              r[1]),
                                      !1 === d)
                                  )
                                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                                          if (
                                              (x
                                                  ? a.nodeName.toLowerCase() === f
                                                  : 1 === a.nodeType) &&
                                              ++d &&
                                              (p &&
                                                  ((i =
                                                      (o = a[k] || (a[k] = {}))[a.uniqueID] ||
                                                      (o[a.uniqueID] = {}))[h] = [S, d]),
                                              a === e)
                                          )
                                              break;
                                  return (d -= v) === g || (d % g == 0 && 0 <= d / g);
                              }
                          };
                },
                PSEUDO: function(e, o) {
                    var t,
                        a =
                            b.pseudos[e] ||
                            b.setFilters[e.toLowerCase()] ||
                            se.error('unsupported pseudo: ' + e);
                    return a[k]
                        ? a(o)
                        : 1 < a.length
                        ? ((t = [e, e, '', o]),
                          b.setFilters.hasOwnProperty(e.toLowerCase())
                              ? le(function(e, t) {
                                    var n,
                                        r = a(e, o),
                                        i = r.length;
                                    while (i--) e[(n = P(e, r[i]))] = !(t[n] = r[i]);
                                })
                              : function(e) {
                                    return a(e, 0, t);
                                })
                        : a;
                },
            },
            pseudos: {
                not: le(function(e) {
                    var r = [],
                        i = [],
                        s = f(e.replace(B, '$1'));
                    return s[k]
                        ? le(function(e, t, n, r) {
                              var i,
                                  o = s(e, null, r, []),
                                  a = e.length;
                              while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                          })
                        : function(e, t, n) {
                              return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                          };
                }),
                has: le(function(t) {
                    return function(e) {
                        return 0 < se(t, e).length;
                    };
                }),
                contains: le(function(t) {
                    return (
                        (t = t.replace(te, ne)),
                        function(e) {
                            return -1 < (e.textContent || o(e)).indexOf(t);
                        }
                    );
                }),
                lang: le(function(n) {
                    return (
                        V.test(n || '') || se.error('unsupported lang: ' + n),
                        (n = n.replace(te, ne).toLowerCase()),
                        function(e) {
                            var t;
                            do {
                                if (
                                    (t = E
                                        ? e.lang
                                        : e.getAttribute('xml:lang') || e.getAttribute('lang'))
                                )
                                    return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + '-');
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1;
                        }
                    );
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id;
                },
                root: function(e) {
                    return e === a;
                },
                focus: function(e) {
                    return (
                        e === C.activeElement &&
                        (!C.hasFocus || C.hasFocus()) &&
                        !!(e.type || e.href || ~e.tabIndex)
                    );
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return ('input' === t && !!e.checked) || ('option' === t && !!e.selected);
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(e) {
                    return !b.pseudos.empty(e);
                },
                header: function(e) {
                    return J.test(e.nodeName);
                },
                input: function(e) {
                    return Q.test(e.nodeName);
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return ('input' === t && 'button' === e.type) || 'button' === t;
                },
                text: function(e) {
                    var t;
                    return (
                        'input' === e.nodeName.toLowerCase() &&
                        'text' === e.type &&
                        (null == (t = e.getAttribute('type')) || 'text' === t.toLowerCase())
                    );
                },
                first: ve(function() {
                    return [0];
                }),
                last: ve(function(e, t) {
                    return [t - 1];
                }),
                eq: ve(function(e, t, n) {
                    return [n < 0 ? n + t : n];
                }),
                even: ve(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                }),
                odd: ve(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                }),
                lt: ve(function(e, t, n) {
                    for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
                    return e;
                }),
                gt: ve(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                }),
            },
        }).pseudos.nth = b.pseudos.eq),
        {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}))
            b.pseudos[e] = de(e);
        for (e in {submit: !0, reset: !0}) b.pseudos[e] = he(e);
        function me() {}
        function xe(e) {
            for (var t = 0, n = e.length, r = ''; t < n; t++) r += e[t].value;
            return r;
        }
        function be(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && 'parentNode' === c,
                p = r++;
            return e.first
                ? function(e, t, n) {
                      while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n);
                      return !1;
                  }
                : function(e, t, n) {
                      var r,
                          i,
                          o,
                          a = [S, p];
                      if (n) {
                          while ((e = e[u])) if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
                      } else
                          while ((e = e[u]))
                              if (1 === e.nodeType || f)
                                  if (
                                      ((i =
                                          (o = e[k] || (e[k] = {}))[e.uniqueID] ||
                                          (o[e.uniqueID] = {})),
                                      l && l === e.nodeName.toLowerCase())
                                  )
                                      e = e[u] || e;
                                  else {
                                      if ((r = i[c]) && r[0] === S && r[1] === p)
                                          return (a[2] = r[2]);
                                      if (((i[c] = a)[2] = s(e, t, n))) return !0;
                                  }
                      return !1;
                  };
        }
        function we(i) {
            return 1 < i.length
                ? function(e, t, n) {
                      var r = i.length;
                      while (r--) if (!i[r](e, t, n)) return !1;
                      return !0;
                  }
                : i[0];
        }
        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
            return a;
        }
        function Ce(d, h, g, v, y, e) {
            return (
                v && !v[k] && (v = Ce(v)),
                y && !y[k] && (y = Ce(y, e)),
                le(function(e, t, n, r) {
                    var i,
                        o,
                        a,
                        s = [],
                        u = [],
                        l = t.length,
                        c =
                            e ||
                            (function(e, t, n) {
                                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                                return n;
                            })(h || '*', n.nodeType ? [n] : n, []),
                        f = !d || (!e && h) ? c : Te(c, s, d, n, r),
                        p = g ? (y || (e ? d : l || v) ? [] : t) : f;
                    if ((g && g(f, p, n, r), v)) {
                        (i = Te(p, u)), v(i, [], n, r), (o = i.length);
                        while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
                    }
                    if (e) {
                        if (y || d) {
                            if (y) {
                                (i = []), (o = p.length);
                                while (o--) (a = p[o]) && i.push((f[o] = a));
                                y(null, (p = []), i, r);
                            }
                            o = p.length;
                            while (o--)
                                (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a));
                        }
                    } else (p = Te(p === t ? p.splice(l, p.length) : p)), y ? y(null, t, p, r) : H.apply(t, p);
                })
            );
        }
        function Ee(e) {
            for (
                var i,
                    t,
                    n,
                    r = e.length,
                    o = b.relative[e[0].type],
                    a = o || b.relative[' '],
                    s = o ? 1 : 0,
                    u = be(
                        function(e) {
                            return e === i;
                        },
                        a,
                        !0
                    ),
                    l = be(
                        function(e) {
                            return -1 < P(i, e);
                        },
                        a,
                        !0
                    ),
                    c = [
                        function(e, t, n) {
                            var r =
                                (!o && (n || t !== w)) ||
                                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                            return (i = null), r;
                        },
                    ];
                s < r;
                s++
            )
                if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
                        for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
                        return Ce(
                            1 < s && we(c),
                            1 < s &&
                                xe(
                                    e
                                        .slice(0, s - 1)
                                        .concat({value: ' ' === e[s - 2].type ? '*' : ''})
                                ).replace(B, '$1'),
                            t,
                            s < n && Ee(e.slice(s, n)),
                            n < r && Ee((e = e.slice(n))),
                            n < r && xe(e)
                        );
                    }
                    c.push(t);
                }
            return we(c);
        }
        return (
            (me.prototype = b.filters = b.pseudos),
            (b.setFilters = new me()),
            (h = se.tokenize = function(e, t) {
                var n,
                    r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = x[e + ' '];
                if (l) return t ? 0 : l.slice(0);
                (a = e), (s = []), (u = b.preFilter);
                while (a) {
                    for (o in ((n && !(r = _.exec(a))) ||
                        (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
                    (n = !1),
                    (r = z.exec(a)) &&
                        ((n = r.shift()),
                        i.push({value: n, type: r[0].replace(B, ' ')}),
                        (a = a.slice(n.length))),
                    b.filter))
                        !(r = G[o].exec(a)) ||
                            (u[o] && !(r = u[o](r))) ||
                            ((n = r.shift()),
                            i.push({value: n, type: o, matches: r}),
                            (a = a.slice(n.length)));
                    if (!n) break;
                }
                return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
            }),
            (f = se.compile = function(e, t) {
                var n,
                    v,
                    y,
                    m,
                    x,
                    r,
                    i = [],
                    o = [],
                    a = N[e + ' '];
                if (!a) {
                    t || (t = h(e)), (n = t.length);
                    while (n--) (a = Ee(t[n]))[k] ? i.push(a) : o.push(a);
                    (a = N(
                        e,
                        ((v = o),
                        (m = 0 < (y = i).length),
                        (x = 0 < v.length),
                        (r = function(e, t, n, r, i) {
                            var o,
                                a,
                                s,
                                u = 0,
                                l = '0',
                                c = e && [],
                                f = [],
                                p = w,
                                d = e || (x && b.find.TAG('*', i)),
                                h = (S += null == p ? 1 : Math.random() || 0.1),
                                g = d.length;
                            for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
                                if (x && o) {
                                    (a = 0), t || o.ownerDocument === C || (T(o), (n = !E));
                                    while ((s = v[a++]))
                                        if (s(o, t || C, n)) {
                                            r.push(o);
                                            break;
                                        }
                                    i && (S = h);
                                }
                                m && ((o = !s && o) && u--, e && c.push(o));
                            }
                            if (((u += l), m && l !== u)) {
                                a = 0;
                                while ((s = y[a++])) s(c, f, t, n);
                                if (e) {
                                    if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                                    f = Te(f);
                                }
                                H.apply(r, f),
                                    i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r);
                            }
                            return i && ((S = h), (w = p)), c;
                        }),
                        m ? le(r) : r)
                    )).selector = e;
                }
                return a;
            }),
            (g = se.select = function(e, t, n, r) {
                var i,
                    o,
                    a,
                    s,
                    u,
                    l = 'function' == typeof e && e,
                    c = !r && h((e = l.selector || e));
                if (((n = n || []), 1 === c.length)) {
                    if (
                        2 < (o = c[0] = c[0].slice(0)).length &&
                        'ID' === (a = o[0]).type &&
                        9 === t.nodeType &&
                        E &&
                        b.relative[o[1].type]
                    ) {
                        if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                        l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
                    }
                    i = G.needsContext.test(e) ? 0 : o.length;
                    while (i--) {
                        if (((a = o[i]), b.relative[(s = a.type)])) break;
                        if (
                            (u = b.find[s]) &&
                            (r = u(
                                a.matches[0].replace(te, ne),
                                (ee.test(o[0].type) && ye(t.parentNode)) || t
                            ))
                        ) {
                            if ((o.splice(i, 1), !(e = r.length && xe(o)))) return H.apply(n, r), n;
                            break;
                        }
                    }
                }
                return (l || f(e, c))(r, t, !E, n, !t || (ee.test(e) && ye(t.parentNode)) || t), n;
            }),
            (d.sortStable =
                k
                    .split('')
                    .sort(D)
                    .join('') === k),
            (d.detectDuplicates = !!l),
            T(),
            (d.sortDetached = ce(function(e) {
                return 1 & e.compareDocumentPosition(C.createElement('fieldset'));
            })),
            ce(function(e) {
                return (
                    (e.innerHTML = "<a href='#'></a>"), '#' === e.firstChild.getAttribute('href')
                );
            }) ||
                fe('type|href|height|width', function(e, t, n) {
                    if (!n) return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
                }),
            (d.attributes &&
                ce(function(e) {
                    return (
                        (e.innerHTML = '<input/>'),
                        e.firstChild.setAttribute('value', ''),
                        '' === e.firstChild.getAttribute('value')
                    );
                })) ||
                fe('value', function(e, t, n) {
                    if (!n && 'input' === e.nodeName.toLowerCase()) return e.defaultValue;
                }),
            ce(function(e) {
                return null == e.getAttribute('disabled');
            }) ||
                fe(R, function(e, t, n) {
                    var r;
                    if (!n)
                        return !0 === e[t]
                            ? t.toLowerCase()
                            : (r = e.getAttributeNode(t)) && r.specified
                            ? r.value
                            : null;
                }),
            se
        );
    })(C);
    (k.find = h),
        (k.expr = h.selectors),
        (k.expr[':'] = k.expr.pseudos),
        (k.uniqueSort = k.unique = h.uniqueSort),
        (k.text = h.getText),
        (k.isXMLDoc = h.isXML),
        (k.contains = h.contains),
        (k.escapeSelector = h.escape);
    var T = function(e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && k(e).is(n)) break;
                    r.push(e);
                }
            return r;
        },
        S = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        },
        N = k.expr.match.needsContext;
    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j(e, n, r) {
        return m(n)
            ? k.grep(e, function(e, t) {
                  return !!n.call(e, t, e) !== r;
              })
            : n.nodeType
            ? k.grep(e, function(e) {
                  return (e === n) !== r;
              })
            : 'string' != typeof n
            ? k.grep(e, function(e) {
                  return -1 < i.call(n, e) !== r;
              })
            : k.filter(n, e, r);
    }
    (k.filter = function(e, t, n) {
        var r = t[0];
        return (
            n && (e = ':not(' + e + ')'),
            1 === t.length && 1 === r.nodeType
                ? k.find.matchesSelector(r, e)
                    ? [r]
                    : []
                : k.find.matches(
                      e,
                      k.grep(t, function(e) {
                          return 1 === e.nodeType;
                      })
                  )
        );
    }),
        k.fn.extend({
            find: function(e) {
                var t,
                    n,
                    r = this.length,
                    i = this;
                if ('string' != typeof e)
                    return this.pushStack(
                        k(e).filter(function() {
                            for (t = 0; t < r; t++) if (k.contains(i[t], this)) return !0;
                        })
                    );
                for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, i[t], n);
                return 1 < r ? k.uniqueSort(n) : n;
            },
            filter: function(e) {
                return this.pushStack(j(this, e || [], !1));
            },
            not: function(e) {
                return this.pushStack(j(this, e || [], !0));
            },
            is: function(e) {
                return !!j(this, 'string' == typeof e && N.test(e) ? k(e) : e || [], !1).length;
            },
        });
    var q,
        L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((k.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (((n = n || q), 'string' == typeof e)) {
            if (
                !(r =
                    '<' === e[0] && '>' === e[e.length - 1] && 3 <= e.length
                        ? [null, e, null]
                        : L.exec(e)) ||
                (!r[1] && t)
            )
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (
                    ((t = t instanceof k ? t[0] : t),
                    k.merge(
                        this,
                        k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)
                    ),
                    D.test(r[1]) && k.isPlainObject(t))
                )
                    for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
            }
            return (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this;
        }
        return e.nodeType
            ? ((this[0] = e), (this.length = 1), this)
            : m(e)
            ? void 0 !== n.ready
                ? n.ready(e)
                : e(k)
            : k.makeArray(e, this);
    }).prototype = k.fn),
        (q = k(E));
    var H = /^(?:parents|prev(?:Until|All))/,
        O = {children: !0, contents: !0, next: !0, prev: !0};
    function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e;
    }
    k.fn.extend({
        has: function(e) {
            var t = k(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++) if (k.contains(this, t[e])) return !0;
            });
        },
        closest: function(e, t) {
            var n,
                r = 0,
                i = this.length,
                o = [],
                a = 'string' != typeof e && k(e);
            if (!N.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (
                            n.nodeType < 11 &&
                            (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))
                        ) {
                            o.push(n);
                            break;
                        }
            return this.pushStack(1 < o.length ? k.uniqueSort(o) : o);
        },
        index: function(e) {
            return e
                ? 'string' == typeof e
                    ? i.call(k(e), this[0])
                    : i.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
        },
        add: function(e, t) {
            return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))));
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        },
    }),
        k.each(
            {
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                },
                parents: function(e) {
                    return T(e, 'parentNode');
                },
                parentsUntil: function(e, t, n) {
                    return T(e, 'parentNode', n);
                },
                next: function(e) {
                    return P(e, 'nextSibling');
                },
                prev: function(e) {
                    return P(e, 'previousSibling');
                },
                nextAll: function(e) {
                    return T(e, 'nextSibling');
                },
                prevAll: function(e) {
                    return T(e, 'previousSibling');
                },
                nextUntil: function(e, t, n) {
                    return T(e, 'nextSibling', n);
                },
                prevUntil: function(e, t, n) {
                    return T(e, 'previousSibling', n);
                },
                siblings: function(e) {
                    return S((e.parentNode || {}).firstChild, e);
                },
                children: function(e) {
                    return S(e.firstChild);
                },
                contents: function(e) {
                    return 'undefined' != typeof e.contentDocument
                        ? e.contentDocument
                        : (A(e, 'template') && (e = e.content || e), k.merge([], e.childNodes));
                },
            },
            function(r, i) {
                k.fn[r] = function(e, t) {
                    var n = k.map(this, i, e);
                    return (
                        'Until' !== r.slice(-5) && (t = e),
                        t && 'string' == typeof t && (n = k.filter(t, n)),
                        1 < this.length && (O[r] || k.uniqueSort(n), H.test(r) && n.reverse()),
                        this.pushStack(n)
                    );
                };
            }
        );
    var R = /[^\x20\t\r\n\f]+/g;
    function M(e) {
        return e;
    }
    function I(e) {
        throw e;
    }
    function W(e, t, n, r) {
        var i;
        try {
            e && m((i = e.promise))
                ? i
                      .call(e)
                      .done(t)
                      .fail(n)
                : e && m((i = e.then))
                ? i.call(e, t, n)
                : t.apply(void 0, [e].slice(r));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }
    (k.Callbacks = function(r) {
        var e, n;
        r =
            'string' == typeof r
                ? ((e = r),
                  (n = {}),
                  k.each(e.match(R) || [], function(e, t) {
                      n[t] = !0;
                  }),
                  n)
                : k.extend({}, r);
        var i,
            t,
            o,
            a,
            s = [],
            u = [],
            l = -1,
            c = function() {
                for (a = a || r.once, o = i = !0; u.length; l = -1) {
                    t = u.shift();
                    while (++l < s.length)
                        !1 === s[l].apply(t[0], t[1]) &&
                            r.stopOnFalse &&
                            ((l = s.length), (t = !1));
                }
                r.memory || (t = !1), (i = !1), a && (s = t ? [] : '');
            },
            f = {
                add: function() {
                    return (
                        s &&
                            (t && !i && ((l = s.length - 1), u.push(t)),
                            (function n(e) {
                                k.each(e, function(e, t) {
                                    m(t)
                                        ? (r.unique && f.has(t)) || s.push(t)
                                        : t && t.length && 'string' !== w(t) && n(t);
                                });
                            })(arguments),
                            t && !i && c()),
                        this
                    );
                },
                remove: function() {
                    return (
                        k.each(arguments, function(e, t) {
                            var n;
                            while (-1 < (n = k.inArray(t, s, n))) s.splice(n, 1), n <= l && l--;
                        }),
                        this
                    );
                },
                has: function(e) {
                    return e ? -1 < k.inArray(e, s) : 0 < s.length;
                },
                empty: function() {
                    return s && (s = []), this;
                },
                disable: function() {
                    return (a = u = []), (s = t = ''), this;
                },
                disabled: function() {
                    return !s;
                },
                lock: function() {
                    return (a = u = []), t || i || (s = t = ''), this;
                },
                locked: function() {
                    return !!a;
                },
                fireWith: function(e, t) {
                    return (
                        a || ((t = [e, (t = t || []).slice ? t.slice() : t]), u.push(t), i || c()),
                        this
                    );
                },
                fire: function() {
                    return f.fireWith(this, arguments), this;
                },
                fired: function() {
                    return !!o;
                },
            };
        return f;
    }),
        k.extend({
            Deferred: function(e) {
                var o = [
                        ['notify', 'progress', k.Callbacks('memory'), k.Callbacks('memory'), 2],
                        [
                            'resolve',
                            'done',
                            k.Callbacks('once memory'),
                            k.Callbacks('once memory'),
                            0,
                            'resolved',
                        ],
                        [
                            'reject',
                            'fail',
                            k.Callbacks('once memory'),
                            k.Callbacks('once memory'),
                            1,
                            'rejected',
                        ],
                    ],
                    i = 'pending',
                    a = {
                        state: function() {
                            return i;
                        },
                        always: function() {
                            return s.done(arguments).fail(arguments), this;
                        },
                        catch: function(e) {
                            return a.then(null, e);
                        },
                        pipe: function() {
                            var i = arguments;
                            return k
                                .Deferred(function(r) {
                                    k.each(o, function(e, t) {
                                        var n = m(i[t[4]]) && i[t[4]];
                                        s[t[1]](function() {
                                            var e = n && n.apply(this, arguments);
                                            e && m(e.promise)
                                                ? e
                                                      .promise()
                                                      .progress(r.notify)
                                                      .done(r.resolve)
                                                      .fail(r.reject)
                                                : r[t[0] + 'With'](this, n ? [e] : arguments);
                                        });
                                    }),
                                        (i = null);
                                })
                                .promise();
                        },
                        then: function(t, n, r) {
                            var u = 0;
                            function l(i, o, a, s) {
                                return function() {
                                    var n = this,
                                        r = arguments,
                                        e = function() {
                                            var e, t;
                                            if (!(i < u)) {
                                                if ((e = a.apply(n, r)) === o.promise())
                                                    throw new TypeError('Thenable self-resolution');
                                                (t =
                                                    e &&
                                                    ('object' == typeof e ||
                                                        'function' == typeof e) &&
                                                    e.then),
                                                    m(t)
                                                        ? s
                                                            ? t.call(
                                                                  e,
                                                                  l(u, o, M, s),
                                                                  l(u, o, I, s)
                                                              )
                                                            : (u++,
                                                              t.call(
                                                                  e,
                                                                  l(u, o, M, s),
                                                                  l(u, o, I, s),
                                                                  l(u, o, M, o.notifyWith)
                                                              ))
                                                        : (a !== M && ((n = void 0), (r = [e])),
                                                          (s || o.resolveWith)(n, r));
                                            }
                                        },
                                        t = s
                                            ? e
                                            : function() {
                                                  try {
                                                      e();
                                                  } catch (e) {
                                                      k.Deferred.exceptionHook &&
                                                          k.Deferred.exceptionHook(e, t.stackTrace),
                                                          u <= i + 1 &&
                                                              (a !== I && ((n = void 0), (r = [e])),
                                                              o.rejectWith(n, r));
                                                  }
                                              };
                                    i
                                        ? t()
                                        : (k.Deferred.getStackHook &&
                                              (t.stackTrace = k.Deferred.getStackHook()),
                                          C.setTimeout(t));
                                };
                            }
                            return k
                                .Deferred(function(e) {
                                    o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)),
                                        o[1][3].add(l(0, e, m(t) ? t : M)),
                                        o[2][3].add(l(0, e, m(n) ? n : I));
                                })
                                .promise();
                        },
                        promise: function(e) {
                            return null != e ? k.extend(e, a) : a;
                        },
                    },
                    s = {};
                return (
                    k.each(o, function(e, t) {
                        var n = t[2],
                            r = t[5];
                        (a[t[1]] = n.add),
                            r &&
                                n.add(
                                    function() {
                                        i = r;
                                    },
                                    o[3 - e][2].disable,
                                    o[3 - e][3].disable,
                                    o[0][2].lock,
                                    o[0][3].lock
                                ),
                            n.add(t[3].fire),
                            (s[t[0]] = function() {
                                return (
                                    s[t[0] + 'With'](this === s ? void 0 : this, arguments), this
                                );
                            }),
                            (s[t[0] + 'With'] = n.fireWith);
                    }),
                    a.promise(s),
                    e && e.call(s, s),
                    s
                );
            },
            when: function(e) {
                var n = arguments.length,
                    t = n,
                    r = Array(t),
                    i = s.call(arguments),
                    o = k.Deferred(),
                    a = function(t) {
                        return function(e) {
                            (r[t] = this),
                                (i[t] = 1 < arguments.length ? s.call(arguments) : e),
                                --n || o.resolveWith(r, i);
                        };
                    };
                if (
                    n <= 1 &&
                    (W(e, o.done(a(t)).resolve, o.reject, !n),
                    'pending' === o.state() || m(i[t] && i[t].then))
                )
                    return o.then();
                while (t--) W(i[t], a(t), o.reject);
                return o.promise();
            },
        });
    var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (k.Deferred.exceptionHook = function(e, t) {
        C.console &&
            C.console.warn &&
            e &&
            $.test(e.name) &&
            C.console.warn('jQuery.Deferred exception: ' + e.message, e.stack, t);
    }),
        (k.readyException = function(e) {
            C.setTimeout(function() {
                throw e;
            });
        });
    var F = k.Deferred();
    function B() {
        E.removeEventListener('DOMContentLoaded', B), C.removeEventListener('load', B), k.ready();
    }
    (k.fn.ready = function(e) {
        return (
            F.then(e)['catch'](function(e) {
                k.readyException(e);
            }),
            this
        );
    }),
        k.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --k.readyWait : k.isReady) ||
                    ((k.isReady = !0) !== e && 0 < --k.readyWait) ||
                    F.resolveWith(E, [k]);
            },
        }),
        (k.ready.then = F.then),
        'complete' === E.readyState || ('loading' !== E.readyState && !E.documentElement.doScroll)
            ? C.setTimeout(k.ready)
            : (E.addEventListener('DOMContentLoaded', B), C.addEventListener('load', B));
    var _ = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ('object' === w(n)) for (s in ((i = !0), n)) _(e, t, s, n[s], !0, o, a);
            else if (
                void 0 !== r &&
                ((i = !0),
                m(r) || (a = !0),
                l &&
                    (a
                        ? (t.call(e, r), (t = null))
                        : ((l = t),
                          (t = function(e, t, n) {
                              return l.call(k(e), n);
                          }))),
                t)
            )
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
        },
        z = /^-ms-/,
        U = /-([a-z])/g;
    function X(e, t) {
        return t.toUpperCase();
    }
    function V(e) {
        return e.replace(z, 'ms-').replace(U, X);
    }
    var G = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    function Y() {
        this.expando = k.expando + Y.uid++;
    }
    (Y.uid = 1),
        (Y.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return (
                    t ||
                        ((t = {}),
                        G(e) &&
                            (e.nodeType
                                ? (e[this.expando] = t)
                                : Object.defineProperty(e, this.expando, {
                                      value: t,
                                      configurable: !0,
                                  }))),
                    t
                );
            },
            set: function(e, t, n) {
                var r,
                    i = this.cache(e);
                if ('string' == typeof t) i[V(t)] = n;
                else for (r in t) i[V(r)] = t[r];
                return i;
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)];
            },
            access: function(e, t, n) {
                return void 0 === t || (t && 'string' == typeof t && void 0 === n)
                    ? this.get(e, t)
                    : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function(e, t) {
                var n,
                    r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t)
                            ? t.map(V)
                            : (t = V(t)) in r
                            ? [t]
                            : t.match(R) || []).length;
                        while (n--) delete r[t[n]];
                    }
                    (void 0 === t || k.isEmptyObject(r)) &&
                        (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !k.isEmptyObject(t);
            },
        });
    var Q = new Y(),
        J = new Y(),
        K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;
    function ee(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (
                ((r = 'data-' + t.replace(Z, '-$&').toLowerCase()),
                'string' == typeof (n = e.getAttribute(r)))
            ) {
                try {
                    n =
                        'true' === (i = n) ||
                        ('false' !== i &&
                            ('null' === i
                                ? null
                                : i === +i + ''
                                ? +i
                                : K.test(i)
                                ? JSON.parse(i)
                                : i));
                } catch (e) {}
                J.set(e, t, n);
            } else n = void 0;
        return n;
    }
    k.extend({
        hasData: function(e) {
            return J.hasData(e) || Q.hasData(e);
        },
        data: function(e, t, n) {
            return J.access(e, t, n);
        },
        removeData: function(e, t) {
            J.remove(e, t);
        },
        _data: function(e, t, n) {
            return Q.access(e, t, n);
        },
        _removeData: function(e, t) {
            Q.remove(e, t);
        },
    }),
        k.fn.extend({
            data: function(n, e) {
                var t,
                    r,
                    i,
                    o = this[0],
                    a = o && o.attributes;
                if (void 0 === n) {
                    if (
                        this.length &&
                        ((i = J.get(o)), 1 === o.nodeType && !Q.get(o, 'hasDataAttrs'))
                    ) {
                        t = a.length;
                        while (t--)
                            a[t] &&
                                0 === (r = a[t].name).indexOf('data-') &&
                                ((r = V(r.slice(5))), ee(o, r, i[r]));
                        Q.set(o, 'hasDataAttrs', !0);
                    }
                    return i;
                }
                return 'object' == typeof n
                    ? this.each(function() {
                          J.set(this, n);
                      })
                    : _(
                          this,
                          function(e) {
                              var t;
                              if (o && void 0 === e)
                                  return void 0 !== (t = J.get(o, n))
                                      ? t
                                      : void 0 !== (t = ee(o, n))
                                      ? t
                                      : void 0;
                              this.each(function() {
                                  J.set(this, n, e);
                              });
                          },
                          null,
                          e,
                          1 < arguments.length,
                          null,
                          !0
                      );
            },
            removeData: function(e) {
                return this.each(function() {
                    J.remove(this, e);
                });
            },
        }),
        k.extend({
            queue: function(e, t, n) {
                var r;
                if (e)
                    return (
                        (t = (t || 'fx') + 'queue'),
                        (r = Q.get(e, t)),
                        n &&
                            (!r || Array.isArray(n)
                                ? (r = Q.access(e, t, k.makeArray(n)))
                                : r.push(n)),
                        r || []
                    );
            },
            dequeue: function(e, t) {
                t = t || 'fx';
                var n = k.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = k._queueHooks(e, t);
                'inprogress' === i && ((i = n.shift()), r--),
                    i &&
                        ('fx' === t && n.unshift('inprogress'),
                        delete o.stop,
                        i.call(
                            e,
                            function() {
                                k.dequeue(e, t);
                            },
                            o
                        )),
                    !r && o && o.empty.fire();
            },
            _queueHooks: function(e, t) {
                var n = t + 'queueHooks';
                return (
                    Q.get(e, n) ||
                    Q.access(e, n, {
                        empty: k.Callbacks('once memory').add(function() {
                            Q.remove(e, [t + 'queue', n]);
                        }),
                    })
                );
            },
        }),
        k.fn.extend({
            queue: function(t, n) {
                var e = 2;
                return (
                    'string' != typeof t && ((n = t), (t = 'fx'), e--),
                    arguments.length < e
                        ? k.queue(this[0], t)
                        : void 0 === n
                        ? this
                        : this.each(function() {
                              var e = k.queue(this, t, n);
                              k._queueHooks(this, t),
                                  'fx' === t && 'inprogress' !== e[0] && k.dequeue(this, t);
                          })
                );
            },
            dequeue: function(e) {
                return this.each(function() {
                    k.dequeue(this, e);
                });
            },
            clearQueue: function(e) {
                return this.queue(e || 'fx', []);
            },
            promise: function(e, t) {
                var n,
                    r = 1,
                    i = k.Deferred(),
                    o = this,
                    a = this.length,
                    s = function() {
                        --r || i.resolveWith(o, [o]);
                    };
                'string' != typeof e && ((t = e), (e = void 0)), (e = e || 'fx');
                while (a--) (n = Q.get(o[a], e + 'queueHooks')) && n.empty && (r++, n.empty.add(s));
                return s(), i.promise(t);
            },
        });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ne = new RegExp('^(?:([+-])=|)(' + te + ')([a-z%]*)$', 'i'),
        re = ['Top', 'Right', 'Bottom', 'Left'],
        ie = E.documentElement,
        oe = function(e) {
            return k.contains(e.ownerDocument, e);
        },
        ae = {composed: !0};
    ie.getRootNode &&
        (oe = function(e) {
            return k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument;
        });
    var se = function(e, t) {
            return (
                'none' === (e = t || e).style.display ||
                ('' === e.style.display && oe(e) && 'none' === k.css(e, 'display'))
            );
        },
        ue = function(e, t, n, r) {
            var i,
                o,
                a = {};
            for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
            for (o in ((i = n.apply(e, r || [])), t)) e.style[o] = a[o];
            return i;
        };
    function le(e, t, n, r) {
        var i,
            o,
            a = 20,
            s = r
                ? function() {
                      return r.cur();
                  }
                : function() {
                      return k.css(e, t, '');
                  },
            u = s(),
            l = (n && n[3]) || (k.cssNumber[t] ? '' : 'px'),
            c = e.nodeType && (k.cssNumber[t] || ('px' !== l && +u)) && ne.exec(k.css(e, t));
        if (c && c[3] !== l) {
            (u /= 2), (l = l || c[3]), (c = +u || 1);
            while (a--)
                k.style(e, t, c + l),
                    (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
                    (c /= o);
            (c *= 2), k.style(e, t, c + l), (n = n || []);
        }
        return (
            n &&
                ((c = +c || +u || 0),
                (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
                r && ((r.unit = l), (r.start = c), (r.end = i))),
            i
        );
    }
    var ce = {};
    function fe(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
            (r = e[c]).style &&
                ((n = r.style.display),
                t
                    ? ('none' === n &&
                          ((l[c] = Q.get(r, 'display') || null), l[c] || (r.style.display = '')),
                      '' === r.style.display &&
                          se(r) &&
                          (l[c] =
                              ((u = a = o = void 0),
                              (a = (i = r).ownerDocument),
                              (s = i.nodeName),
                              (u = ce[s]) ||
                                  ((o = a.body.appendChild(a.createElement(s))),
                                  (u = k.css(o, 'display')),
                                  o.parentNode.removeChild(o),
                                  'none' === u && (u = 'block'),
                                  (ce[s] = u)))))
                    : 'none' !== n && ((l[c] = 'none'), Q.set(r, 'display', n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e;
    }
    k.fn.extend({
        show: function() {
            return fe(this, !0);
        },
        hide: function() {
            return fe(this);
        },
        toggle: function(e) {
            return 'boolean' == typeof e
                ? e
                    ? this.show()
                    : this.hide()
                : this.each(function() {
                      se(this) ? k(this).show() : k(this).hide();
                  });
        },
    });
    var pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
            option: [1, "<select multiple='multiple'>", '</select>'],
            thead: [1, '<table>', '</table>'],
            col: [2, '<table><colgroup>', '</colgroup></table>'],
            tr: [2, '<table><tbody>', '</tbody></table>'],
            td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
            _default: [0, '', ''],
        };
    function ve(e, t) {
        var n;
        return (
            (n =
                'undefined' != typeof e.getElementsByTagName
                    ? e.getElementsByTagName(t || '*')
                    : 'undefined' != typeof e.querySelectorAll
                    ? e.querySelectorAll(t || '*')
                    : []),
            void 0 === t || (t && A(e, t)) ? k.merge([e], n) : n
        );
    }
    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            Q.set(e[n], 'globalEval', !t || Q.get(t[n], 'globalEval'));
    }
    (ge.optgroup = ge.option),
        (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
        (ge.th = ge.td);
    var me,
        xe,
        be = /<|&#?\w+;/;
    function we(e, t, n, r, i) {
        for (
            var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length;
            d < h;
            d++
        )
            if ((o = e[d]) || 0 === o)
                if ('object' === w(o)) k.merge(p, o.nodeType ? [o] : o);
                else if (be.test(o)) {
                    (a = a || f.appendChild(t.createElement('div'))),
                        (s = (de.exec(o) || ['', ''])[1].toLowerCase()),
                        (u = ge[s] || ge._default),
                        (a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2]),
                        (c = u[0]);
                    while (c--) a = a.lastChild;
                    k.merge(p, a.childNodes), ((a = f.firstChild).textContent = '');
                } else p.push(t.createTextNode(o));
        (f.textContent = ''), (d = 0);
        while ((o = p[d++]))
            if (r && -1 < k.inArray(o, r)) i && i.push(o);
            else if (((l = oe(o)), (a = ve(f.appendChild(o), 'script')), l && ye(a), n)) {
                c = 0;
                while ((o = a[c++])) he.test(o.type || '') && n.push(o);
            }
        return f;
    }
    (me = E.createDocumentFragment().appendChild(E.createElement('div'))),
        (xe = E.createElement('input')).setAttribute('type', 'radio'),
        xe.setAttribute('checked', 'checked'),
        xe.setAttribute('name', 't'),
        me.appendChild(xe),
        (y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (me.innerHTML = '<textarea>x</textarea>'),
        (y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue);
    var Te = /^key/,
        Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ee = /^([^.]*)(?:\.(.+)|)/;
    function ke() {
        return !0;
    }
    function Se() {
        return !1;
    }
    function Ne(e, t) {
        return (
            (e ===
                (function() {
                    try {
                        return E.activeElement;
                    } catch (e) {}
                })()) ==
            ('focus' === t)
        );
    }
    function Ae(e, t, n, r, i, o) {
        var a, s;
        if ('object' == typeof t) {
            for (s in ('string' != typeof n && ((r = r || n), (n = void 0)), t))
                Ae(e, s, n, r, t[s], o);
            return e;
        }
        if (
            (null == r && null == i
                ? ((i = n), (r = n = void 0))
                : null == i &&
                  ('string' == typeof n
                      ? ((i = r), (r = void 0))
                      : ((i = r), (r = n), (n = void 0))),
            !1 === i)
        )
            i = Se;
        else if (!i) return e;
        return (
            1 === o &&
                ((a = i),
                ((i = function(e) {
                    return k().off(e), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = k.guid++))),
            e.each(function() {
                k.event.add(this, t, i, r, n);
            })
        );
    }
    function De(e, i, o) {
        o
            ? (Q.set(e, i, !1),
              k.event.add(e, i, {
                  namespace: !1,
                  handler: function(e) {
                      var t,
                          n,
                          r = Q.get(this, i);
                      if (1 & e.isTrigger && this[i]) {
                          if (r.length)
                              (k.event.special[i] || {}).delegateType && e.stopPropagation();
                          else if (
                              ((r = s.call(arguments)),
                              Q.set(this, i, r),
                              (t = o(this, i)),
                              this[i](),
                              r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : (n = {}),
                              r !== n)
                          )
                              return e.stopImmediatePropagation(), e.preventDefault(), n.value;
                      } else
                          r.length &&
                              (Q.set(this, i, {
                                  value: k.event.trigger(
                                      k.extend(r[0], k.Event.prototype),
                                      r.slice(1),
                                      this
                                  ),
                              }),
                              e.stopImmediatePropagation());
                  },
              }))
            : void 0 === Q.get(e, i) && k.event.add(e, i, ke);
    }
    (k.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                v = Q.get(t);
            if (v) {
                n.handler && ((n = (o = n).handler), (i = o.selector)),
                    i && k.find.matchesSelector(ie, i),
                    n.guid || (n.guid = k.guid++),
                    (u = v.events) || (u = v.events = {}),
                    (a = v.handle) ||
                        (a = v.handle = function(e) {
                            return 'undefined' != typeof k && k.event.triggered !== e.type
                                ? k.event.dispatch.apply(t, arguments)
                                : void 0;
                        }),
                    (l = (e = (e || '').match(R) || ['']).length);
                while (l--)
                    (d = g = (s = Ee.exec(e[l]) || [])[1]),
                        (h = (s[2] || '').split('.').sort()),
                        d &&
                            ((f = k.event.special[d] || {}),
                            (d = (i ? f.delegateType : f.bindType) || d),
                            (f = k.event.special[d] || {}),
                            (c = k.extend(
                                {
                                    type: d,
                                    origType: g,
                                    data: r,
                                    handler: n,
                                    guid: n.guid,
                                    selector: i,
                                    needsContext: i && k.expr.match.needsContext.test(i),
                                    namespace: h.join('.'),
                                },
                                o
                            )),
                            (p = u[d]) ||
                                (((p = u[d] = []).delegateCount = 0),
                                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                                    (t.addEventListener && t.addEventListener(d, a))),
                            f.add &&
                                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
                            i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                            (k.event.global[d] = !0));
            }
        },
        remove: function(e, t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                v = Q.hasData(e) && Q.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || '').match(R) || ['']).length;
                while (l--)
                    if (
                        ((d = g = (s = Ee.exec(t[l]) || [])[1]),
                        (h = (s[2] || '').split('.').sort()),
                        d)
                    ) {
                        (f = k.event.special[d] || {}),
                            (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
                            (s =
                                s[2] &&
                                new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)')),
                            (a = o = p.length);
                        while (o--)
                            (c = p[o]),
                                (!i && g !== c.origType) ||
                                    (n && n.guid !== c.guid) ||
                                    (s && !s.test(c.namespace)) ||
                                    (r && r !== c.selector && ('**' !== r || !c.selector)) ||
                                    (p.splice(o, 1),
                                    c.selector && p.delegateCount--,
                                    f.remove && f.remove.call(e, c));
                        a &&
                            !p.length &&
                            ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                                k.removeEvent(e, d, v.handle),
                            delete u[d]);
                    } else for (d in u) k.event.remove(e, d + t[l], n, r, !0);
                k.isEmptyObject(u) && Q.remove(e, 'handle events');
            }
        },
        dispatch: function(e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s = k.event.fix(e),
                u = new Array(arguments.length),
                l = (Q.get(this, 'events') || {})[s.type] || [],
                c = k.event.special[s.type] || {};
            for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
            if (((s.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, s))) {
                (a = k.event.handlers.call(this, s, l)), (t = 0);
                while ((i = a[t++]) && !s.isPropagationStopped()) {
                    (s.currentTarget = i.elem), (n = 0);
                    while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped())
                        (s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace)) ||
                            ((s.handleObj = o),
                            (s.data = o.data),
                            void 0 !==
                                (r = (
                                    (k.event.special[o.origType] || {}).handle || o.handler
                                ).apply(i.elem, u)) &&
                                !1 === (s.result = r) &&
                                (s.preventDefault(), s.stopPropagation()));
                }
                return c.postDispatch && c.postDispatch.call(this, s), s.result;
            }
        },
        handlers: function(e, t) {
            var n,
                r,
                i,
                o,
                a,
                s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !('click' === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ('click' !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++)
                            void 0 === a[(i = (r = t[n]).selector + ' ')] &&
                                (a[i] = r.needsContext
                                    ? -1 < k(i, this).index(l)
                                    : k.find(i, this, null, [l]).length),
                                a[i] && o.push(r);
                        o.length && s.push({elem: l, handlers: o});
                    }
            return (l = this), u < t.length && s.push({elem: l, handlers: t.slice(u)}), s;
        },
        addProp: function(t, e) {
            Object.defineProperty(k.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e)
                    ? function() {
                          if (this.originalEvent) return e(this.originalEvent);
                      }
                    : function() {
                          if (this.originalEvent) return this.originalEvent[t];
                      },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e,
                    });
                },
            });
        },
        fix: function(e) {
            return e[k.expando] ? e : new k.Event(e);
        },
        special: {
            load: {noBubble: !0},
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, 'input') && De(t, 'click', ke), !1;
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, 'input') && De(t, 'click'), !0;
                },
                _default: function(e) {
                    var t = e.target;
                    return (
                        (pe.test(t.type) && t.click && A(t, 'input') && Q.get(t, 'click')) ||
                        A(t, 'a')
                    );
                },
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result &&
                        e.originalEvent &&
                        (e.originalEvent.returnValue = e.result);
                },
            },
        },
    }),
        (k.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
        }),
        (k.Event = function(e, t) {
            if (!(this instanceof k.Event)) return new k.Event(e, t);
            e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                      e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue)
                          ? ke
                          : Se),
                  (this.target =
                      e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && k.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[k.expando] = !0);
        }),
        (k.Event.prototype = {
            constructor: k.Event,
            isDefaultPrevented: Se,
            isPropagationStopped: Se,
            isImmediatePropagationStopped: Se,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                (this.isDefaultPrevented = ke), e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                (this.isPropagationStopped = ke), e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = ke),
                    e && !this.isSimulated && e.stopImmediatePropagation(),
                    this.stopPropagation();
            },
        }),
        k.each(
            {
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
                code: !0,
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
                which: function(e) {
                    var t = e.button;
                    return null == e.which && Te.test(e.type)
                        ? null != e.charCode
                            ? e.charCode
                            : e.keyCode
                        : !e.which && void 0 !== t && Ce.test(e.type)
                        ? 1 & t
                            ? 1
                            : 2 & t
                            ? 3
                            : 4 & t
                            ? 2
                            : 0
                        : e.which;
                },
            },
            k.event.addProp
        ),
        k.each({focus: 'focusin', blur: 'focusout'}, function(e, t) {
            k.event.special[e] = {
                setup: function() {
                    return De(this, e, Ne), !1;
                },
                trigger: function() {
                    return De(this, e), !0;
                },
                delegateType: t,
            };
        }),
        k.each(
            {
                mouseenter: 'mouseover',
                mouseleave: 'mouseout',
                pointerenter: 'pointerover',
                pointerleave: 'pointerout',
            },
            function(e, i) {
                k.event.special[e] = {
                    delegateType: i,
                    bindType: i,
                    handle: function(e) {
                        var t,
                            n = e.relatedTarget,
                            r = e.handleObj;
                        return (
                            (n && (n === this || k.contains(this, n))) ||
                                ((e.type = r.origType),
                                (t = r.handler.apply(this, arguments)),
                                (e.type = i)),
                            t
                        );
                    },
                };
            }
        ),
        k.fn.extend({
            on: function(e, t, n, r) {
                return Ae(this, e, t, n, r);
            },
            one: function(e, t, n, r) {
                return Ae(this, e, t, n, r, 1);
            },
            off: function(e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj)
                    return (
                        (r = e.handleObj),
                        k(e.delegateTarget).off(
                            r.namespace ? r.origType + '.' + r.namespace : r.origType,
                            r.selector,
                            r.handler
                        ),
                        this
                    );
                if ('object' == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this;
                }
                return (
                    (!1 !== t && 'function' != typeof t) || ((n = t), (t = void 0)),
                    !1 === n && (n = Se),
                    this.each(function() {
                        k.event.remove(this, e, n, t);
                    })
                );
            },
        });
    var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        qe = /<script|<style|<link/i,
        Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
        He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Oe(e, t) {
        return (
            (A(e, 'table') &&
                A(11 !== t.nodeType ? t : t.firstChild, 'tr') &&
                k(e).children('tbody')[0]) ||
            e
        );
    }
    function Pe(e) {
        return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e;
    }
    function Re(e) {
        return (
            'true/' === (e.type || '').slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute('type'),
            e
        );
    }
    function Me(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (Q.hasData(e) && ((o = Q.access(e)), (a = Q.set(t, o)), (l = o.events)))
                for (i in (delete a.handle, (a.events = {}), l))
                    for (n = 0, r = l[i].length; n < r; n++) k.event.add(t, i, l[i][n]);
            J.hasData(e) && ((s = J.access(e)), (u = k.extend({}, s)), J.set(t, u));
        }
    }
    function Ie(n, r, i, o) {
        r = g.apply([], r);
        var e,
            t,
            a,
            s,
            u,
            l,
            c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = m(d);
        if (h || (1 < f && 'string' == typeof d && !y.checkClone && Le.test(d)))
            return n.each(function(e) {
                var t = n.eq(e);
                h && (r[0] = d.call(this, e, t.html())), Ie(t, r, i, o);
            });
        if (
            f &&
            ((t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild),
            1 === e.childNodes.length && (e = t),
            t || o)
        ) {
            for (s = (a = k.map(ve(e, 'script'), Pe)).length; c < f; c++)
                (u = e),
                    c !== p && ((u = k.clone(u, !0, !0)), s && k.merge(a, ve(u, 'script'))),
                    i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, k.map(a, Re), c = 0; c < s; c++)
                    (u = a[c]),
                        he.test(u.type || '') &&
                            !Q.access(u, 'globalEval') &&
                            k.contains(l, u) &&
                            (u.src && 'module' !== (u.type || '').toLowerCase()
                                ? k._evalUrl &&
                                  !u.noModule &&
                                  k._evalUrl(u.src, {nonce: u.nonce || u.getAttribute('nonce')})
                                : b(u.textContent.replace(He, ''), u, l));
        }
        return n;
    }
    function We(e, t, n) {
        for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || k.cleanData(ve(r)),
                r.parentNode && (n && oe(r) && ye(ve(r, 'script')), r.parentNode.removeChild(r));
        return e;
    }
    k.extend({
        htmlPrefilter: function(e) {
            return e.replace(je, '<$1></$2>');
        },
        clone: function(e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l,
                c = e.cloneNode(!0),
                f = oe(e);
            if (!(y.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || k.isXMLDoc(e)))
                for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
                    (s = o[r]),
                        (u = a[r]),
                        void 0,
                        'input' === (l = u.nodeName.toLowerCase()) && pe.test(s.type)
                            ? (u.checked = s.checked)
                            : ('input' !== l && 'textarea' !== l) ||
                              (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++)
                        Me(o[r], a[r]);
                else Me(e, c);
            return 0 < (a = ve(c, 'script')).length && ye(a, !f && ve(e, 'script')), c;
        },
        cleanData: function(e) {
            for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (G(n)) {
                    if ((t = n[Q.expando])) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
                        n[Q.expando] = void 0;
                    }
                    n[J.expando] && (n[J.expando] = void 0);
                }
        },
    }),
        k.fn.extend({
            detach: function(e) {
                return We(this, e, !0);
            },
            remove: function(e) {
                return We(this, e);
            },
            text: function(e) {
                return _(
                    this,
                    function(e) {
                        return void 0 === e
                            ? k.text(this)
                            : this.empty().each(function() {
                                  (1 !== this.nodeType &&
                                      11 !== this.nodeType &&
                                      9 !== this.nodeType) ||
                                      (this.textContent = e);
                              });
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function() {
                return Ie(this, arguments, function(e) {
                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) ||
                        Oe(this, e).appendChild(e);
                });
            },
            prepend: function() {
                return Ie(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = Oe(this, e);
                        t.insertBefore(e, t.firstChild);
                    }
                });
            },
            before: function() {
                return Ie(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function() {
                return Ie(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType && (k.cleanData(ve(e, !1)), (e.textContent = ''));
                return this;
            },
            clone: function(e, t) {
                return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function() {
                        return k.clone(this, e, t);
                    })
                );
            },
            html: function(e) {
                return _(
                    this,
                    function(e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if (
                            'string' == typeof e &&
                            !qe.test(e) &&
                            !ge[(de.exec(e) || ['', ''])[1].toLowerCase()]
                        ) {
                            e = k.htmlPrefilter(e);
                            try {
                                for (; n < r; n++)
                                    1 === (t = this[n] || {}).nodeType &&
                                        (k.cleanData(ve(t, !1)), (t.innerHTML = e));
                                t = 0;
                            } catch (e) {}
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function() {
                var n = [];
                return Ie(
                    this,
                    arguments,
                    function(e) {
                        var t = this.parentNode;
                        k.inArray(this, n) < 0 &&
                            (k.cleanData(ve(this)), t && t.replaceChild(e, this));
                    },
                    n
                );
            },
        }),
        k.each(
            {
                appendTo: 'append',
                prependTo: 'prepend',
                insertBefore: 'before',
                insertAfter: 'after',
                replaceAll: 'replaceWith',
            },
            function(e, a) {
                k.fn[e] = function(e) {
                    for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++)
                        (t = o === i ? this : this.clone(!0)), k(r[o])[a](t), u.apply(n, t.get());
                    return this.pushStack(n);
                };
            }
        );
    var $e = new RegExp('^(' + te + ')(?!px)[a-z%]+$', 'i'),
        Fe = function(e) {
            var t = e.ownerDocument.defaultView;
            return (t && t.opener) || (t = C), t.getComputedStyle(e);
        },
        Be = new RegExp(re.join('|'), 'i');
    function _e(e, t, n) {
        var r,
            i,
            o,
            a,
            s = e.style;
        return (
            (n = n || Fe(e)) &&
                ('' !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = k.style(e, t)),
                !y.pixelBoxStyles() &&
                    $e.test(a) &&
                    Be.test(t) &&
                    ((r = s.width),
                    (i = s.minWidth),
                    (o = s.maxWidth),
                    (s.minWidth = s.maxWidth = s.width = a),
                    (a = n.width),
                    (s.width = r),
                    (s.minWidth = i),
                    (s.maxWidth = o))),
            void 0 !== a ? a + '' : a
        );
    }
    function ze(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            },
        };
    }
    !(function() {
        function e() {
            if (u) {
                (s.style.cssText =
                    'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
                    (u.style.cssText =
                        'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
                    ie.appendChild(s).appendChild(u);
                var e = C.getComputedStyle(u);
                (n = '1%' !== e.top),
                    (a = 12 === t(e.marginLeft)),
                    (u.style.right = '60%'),
                    (o = 36 === t(e.right)),
                    (r = 36 === t(e.width)),
                    (u.style.position = 'absolute'),
                    (i = 12 === t(u.offsetWidth / 3)),
                    ie.removeChild(s),
                    (u = null);
            }
        }
        function t(e) {
            return Math.round(parseFloat(e));
        }
        var n,
            r,
            i,
            o,
            a,
            s = E.createElement('div'),
            u = E.createElement('div');
        u.style &&
            ((u.style.backgroundClip = 'content-box'),
            (u.cloneNode(!0).style.backgroundClip = ''),
            (y.clearCloneStyle = 'content-box' === u.style.backgroundClip),
            k.extend(y, {
                boxSizingReliable: function() {
                    return e(), r;
                },
                pixelBoxStyles: function() {
                    return e(), o;
                },
                pixelPosition: function() {
                    return e(), n;
                },
                reliableMarginLeft: function() {
                    return e(), a;
                },
                scrollboxSize: function() {
                    return e(), i;
                },
            }));
    })();
    var Ue = ['Webkit', 'Moz', 'ms'],
        Xe = E.createElement('div').style,
        Ve = {};
    function Ge(e) {
        var t = k.cssProps[e] || Ve[e];
        return (
            t ||
            (e in Xe
                ? e
                : (Ve[e] =
                      (function(e) {
                          var t = e[0].toUpperCase() + e.slice(1),
                              n = Ue.length;
                          while (n--) if ((e = Ue[n] + t) in Xe) return e;
                      })(e) || e))
        );
    }
    var Ye = /^(none|table(?!-c[ea]).+)/,
        Qe = /^--/,
        Je = {position: 'absolute', visibility: 'hidden', display: 'block'},
        Ke = {letterSpacing: '0', fontWeight: '400'};
    function Ze(e, t, n) {
        var r = ne.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t;
    }
    function et(e, t, n, r, i, o) {
        var a = 'width' === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? 'border' : 'content')) return 0;
        for (; a < 4; a += 2)
            'margin' === n && (u += k.css(e, n + re[a], !0, i)),
                r
                    ? ('content' === n && (u -= k.css(e, 'padding' + re[a], !0, i)),
                      'margin' !== n && (u -= k.css(e, 'border' + re[a] + 'Width', !0, i)))
                    : ((u += k.css(e, 'padding' + re[a], !0, i)),
                      'padding' !== n
                          ? (u += k.css(e, 'border' + re[a] + 'Width', !0, i))
                          : (s += k.css(e, 'border' + re[a] + 'Width', !0, i)));
        return (
            !r &&
                0 <= o &&
                (u +=
                    Math.max(
                        0,
                        Math.ceil(e['offset' + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5)
                    ) || 0),
            u
        );
    }
    function tt(e, t, n) {
        var r = Fe(e),
            i = (!y.boxSizingReliable() || n) && 'border-box' === k.css(e, 'boxSizing', !1, r),
            o = i,
            a = _e(e, t, r),
            s = 'offset' + t[0].toUpperCase() + t.slice(1);
        if ($e.test(a)) {
            if (!n) return a;
            a = 'auto';
        }
        return (
            ((!y.boxSizingReliable() && i) ||
                'auto' === a ||
                (!parseFloat(a) && 'inline' === k.css(e, 'display', !1, r))) &&
                e.getClientRects().length &&
                ((i = 'border-box' === k.css(e, 'boxSizing', !1, r)), (o = s in e) && (a = e[s])),
            (a = parseFloat(a) || 0) + et(e, t, n || (i ? 'border' : 'content'), o, r, a) + 'px'
        );
    }
    function nt(e, t, n, r, i) {
        return new nt.prototype.init(e, t, n, r, i);
    }
    k.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = _e(e, 'opacity');
                        return '' === n ? '1' : n;
                    }
                },
            },
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                    o,
                    a,
                    s = V(t),
                    u = Qe.test(t),
                    l = e.style;
                if ((u || (t = Ge(s)), (a = k.cssHooks[t] || k.cssHooks[s]), void 0 === n))
                    return a && 'get' in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                'string' === (o = typeof n) &&
                    (i = ne.exec(n)) &&
                    i[1] &&
                    ((n = le(e, t, i)), (o = 'number')),
                    null != n &&
                        n == n &&
                        ('number' !== o || u || (n += (i && i[3]) || (k.cssNumber[s] ? '' : 'px')),
                        y.clearCloneStyle ||
                            '' !== n ||
                            0 !== t.indexOf('background') ||
                            (l[t] = 'inherit'),
                        (a && 'set' in a && void 0 === (n = a.set(e, n, r))) ||
                            (u ? l.setProperty(t, n) : (l[t] = n)));
            }
        },
        css: function(e, t, n, r) {
            var i,
                o,
                a,
                s = V(t);
            return (
                Qe.test(t) || (t = Ge(s)),
                (a = k.cssHooks[t] || k.cssHooks[s]) && 'get' in a && (i = a.get(e, !0, n)),
                void 0 === i && (i = _e(e, t, r)),
                'normal' === i && t in Ke && (i = Ke[t]),
                '' === n || n ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i) : i
            );
        },
    }),
        k.each(['height', 'width'], function(e, u) {
            k.cssHooks[u] = {
                get: function(e, t, n) {
                    if (t)
                        return !Ye.test(k.css(e, 'display')) ||
                            (e.getClientRects().length && e.getBoundingClientRect().width)
                            ? tt(e, u, n)
                            : ue(e, Je, function() {
                                  return tt(e, u, n);
                              });
                },
                set: function(e, t, n) {
                    var r,
                        i = Fe(e),
                        o = !y.scrollboxSize() && 'absolute' === i.position,
                        a = (o || n) && 'border-box' === k.css(e, 'boxSizing', !1, i),
                        s = n ? et(e, u, n, a, i) : 0;
                    return (
                        a &&
                            o &&
                            (s -= Math.ceil(
                                e['offset' + u[0].toUpperCase() + u.slice(1)] -
                                    parseFloat(i[u]) -
                                    et(e, u, 'border', !1, i) -
                                    0.5
                            )),
                        s &&
                            (r = ne.exec(t)) &&
                            'px' !== (r[3] || 'px') &&
                            ((e.style[u] = t), (t = k.css(e, u))),
                        Ze(0, t, s)
                    );
                },
            };
        }),
        (k.cssHooks.marginLeft = ze(y.reliableMarginLeft, function(e, t) {
            if (t)
                return (
                    (parseFloat(_e(e, 'marginLeft')) ||
                        e.getBoundingClientRect().left -
                            ue(e, {marginLeft: 0}, function() {
                                return e.getBoundingClientRect().left;
                            })) + 'px'
                );
        })),
        k.each({margin: '', padding: '', border: 'Width'}, function(i, o) {
            (k.cssHooks[i + o] = {
                expand: function(e) {
                    for (
                        var t = 0, n = {}, r = 'string' == typeof e ? e.split(' ') : [e];
                        t < 4;
                        t++
                    )
                        n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
                    return n;
                },
            }),
                'margin' !== i && (k.cssHooks[i + o].set = Ze);
        }),
        k.fn.extend({
            css: function(e, t) {
                return _(
                    this,
                    function(e, t, n) {
                        var r,
                            i,
                            o = {},
                            a = 0;
                        if (Array.isArray(t)) {
                            for (r = Fe(e), i = t.length; a < i; a++)
                                o[t[a]] = k.css(e, t[a], !1, r);
                            return o;
                        }
                        return void 0 !== n ? k.style(e, t, n) : k.css(e, t);
                    },
                    e,
                    t,
                    1 < arguments.length
                );
            },
        }),
        (((k.Tween = nt).prototype = {
            constructor: nt,
            init: function(e, t, n, r, i, o) {
                (this.elem = e),
                    (this.prop = n),
                    (this.easing = i || k.easing._default),
                    (this.options = t),
                    (this.start = this.now = this.cur()),
                    (this.end = r),
                    (this.unit = o || (k.cssNumber[n] ? '' : 'px'));
            },
            cur: function() {
                var e = nt.propHooks[this.prop];
                return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
            },
            run: function(e) {
                var t,
                    n = nt.propHooks[this.prop];
                return (
                    this.options.duration
                        ? (this.pos = t = k.easing[this.easing](
                              e,
                              this.options.duration * e,
                              0,
                              1,
                              this.options.duration
                          ))
                        : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : nt.propHooks._default.set(this),
                    this
                );
            },
        }).init.prototype = nt.prototype),
        ((nt.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType ||
                        (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                        ? e.elem[e.prop]
                        : (t = k.css(e.elem, e.prop, '')) && 'auto' !== t
                        ? t
                        : 0;
                },
                set: function(e) {
                    k.fx.step[e.prop]
                        ? k.fx.step[e.prop](e)
                        : 1 !== e.elem.nodeType ||
                          (!k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)])
                        ? (e.elem[e.prop] = e.now)
                        : k.style(e.elem, e.prop, e.now + e.unit);
                },
            },
        }).scrollTop = nt.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
        }),
        (k.easing = {
            linear: function(e) {
                return e;
            },
            swing: function(e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: 'swing',
        }),
        (k.fx = nt.prototype.init),
        (k.fx.step = {});
    var rt,
        it,
        ot,
        at,
        st = /^(?:toggle|show|hide)$/,
        ut = /queueHooks$/;
    function lt() {
        it &&
            (!1 === E.hidden && C.requestAnimationFrame
                ? C.requestAnimationFrame(lt)
                : C.setTimeout(lt, k.fx.interval),
            k.fx.tick());
    }
    function ct() {
        return (
            C.setTimeout(function() {
                rt = void 0;
            }),
            (rt = Date.now())
        );
    }
    function ft(e, t) {
        var n,
            r = 0,
            i = {height: e};
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i['margin' + (n = re[r])] = i['padding' + n] = e;
        return t && (i.opacity = i.width = e), i;
    }
    function pt(e, t, n) {
        for (
            var r, i = (dt.tweeners[t] || []).concat(dt.tweeners['*']), o = 0, a = i.length;
            o < a;
            o++
        )
            if ((r = i[o].call(n, t, e))) return r;
    }
    function dt(o, e, t) {
        var n,
            a,
            r = 0,
            i = dt.prefilters.length,
            s = k.Deferred().always(function() {
                delete u.elem;
            }),
            u = function() {
                if (a) return !1;
                for (
                    var e = rt || ct(),
                        t = Math.max(0, l.startTime + l.duration - e),
                        n = 1 - (t / l.duration || 0),
                        r = 0,
                        i = l.tweens.length;
                    r < i;
                    r++
                )
                    l.tweens[r].run(n);
                return (
                    s.notifyWith(o, [l, n, t]),
                    n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
                );
            },
            l = s.promise({
                elem: o,
                props: k.extend({}, e),
                opts: k.extend(!0, {specialEasing: {}, easing: k.easing._default}, t),
                originalProperties: e,
                originalOptions: t,
                startTime: rt || ct(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n;
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return (
                        e
                            ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
                            : s.rejectWith(o, [l, e]),
                        this
                    );
                },
            }),
            c = l.props;
        for (
            !(function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (
                        ((i = t[(r = V(n))]),
                        (o = e[n]),
                        Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                        n !== r && ((e[r] = o), delete e[n]),
                        (a = k.cssHooks[r]) && ('expand' in a))
                    )
                        for (n in ((o = a.expand(o)), delete e[r], o))
                            (n in e) || ((e[n] = o[n]), (t[n] = i));
                    else t[r] = i;
            })(c, l.opts.specialEasing);
            r < i;
            r++
        )
            if ((n = dt.prefilters[r].call(l, o, c, l.opts)))
                return m(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return (
            k.map(c, pt, l),
            m(l.opts.start) && l.opts.start.call(o, l),
            l
                .progress(l.opts.progress)
                .done(l.opts.done, l.opts.complete)
                .fail(l.opts.fail)
                .always(l.opts.always),
            k.fx.timer(k.extend(u, {elem: o, anim: l, queue: l.opts.queue})),
            l
        );
    }
    (k.Animation = k.extend(dt, {
        tweeners: {
            '*': [
                function(e, t) {
                    var n = this.createTween(e, t);
                    return le(n.elem, e, ne.exec(t), n), n;
                },
            ],
        },
        tweener: function(e, t) {
            m(e) ? ((t = e), (e = ['*'])) : (e = e.match(R));
            for (var n, r = 0, i = e.length; r < i; r++)
                (n = e[r]), (dt.tweeners[n] = dt.tweeners[n] || []), dt.tweeners[n].unshift(t);
        },
        prefilters: [
            function(e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l,
                    c,
                    f = 'width' in t || 'height' in t,
                    p = this,
                    d = {},
                    h = e.style,
                    g = e.nodeType && se(e),
                    v = Q.get(e, 'fxshow');
                for (r in (n.queue ||
                    (null == (a = k._queueHooks(e, 'fx')).unqueued &&
                        ((a.unqueued = 0),
                        (s = a.empty.fire),
                        (a.empty.fire = function() {
                            a.unqueued || s();
                        })),
                    a.unqueued++,
                    p.always(function() {
                        p.always(function() {
                            a.unqueued--, k.queue(e, 'fx').length || a.empty.fire();
                        });
                    })),
                t))
                    if (((i = t[r]), st.test(i))) {
                        if ((delete t[r], (o = o || 'toggle' === i), i === (g ? 'hide' : 'show'))) {
                            if ('show' !== i || !v || void 0 === v[r]) continue;
                            g = !0;
                        }
                        d[r] = (v && v[r]) || k.style(e, r);
                    }
                if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d))
                    for (r in (f &&
                        1 === e.nodeType &&
                        ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                        null == (l = v && v.display) && (l = Q.get(e, 'display')),
                        'none' === (c = k.css(e, 'display')) &&
                            (l
                                ? (c = l)
                                : (fe([e], !0),
                                  (l = e.style.display || l),
                                  (c = k.css(e, 'display')),
                                  fe([e]))),
                        ('inline' === c || ('inline-block' === c && null != l)) &&
                            'none' === k.css(e, 'float') &&
                            (u ||
                                (p.done(function() {
                                    h.display = l;
                                }),
                                null == l && ((c = h.display), (l = 'none' === c ? '' : c))),
                            (h.display = 'inline-block'))),
                    n.overflow &&
                        ((h.overflow = 'hidden'),
                        p.always(function() {
                            (h.overflow = n.overflow[0]),
                                (h.overflowX = n.overflow[1]),
                                (h.overflowY = n.overflow[2]);
                        })),
                    (u = !1),
                    d))
                        u ||
                            (v
                                ? 'hidden' in v && (g = v.hidden)
                                : (v = Q.access(e, 'fxshow', {display: l})),
                            o && (v.hidden = !g),
                            g && fe([e], !0),
                            p.done(function() {
                                for (r in (g || fe([e]), Q.remove(e, 'fxshow'), d))
                                    k.style(e, r, d[r]);
                            })),
                            (u = pt(g ? v[r] : 0, r, p)),
                            r in v || ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
            },
        ],
        prefilter: function(e, t) {
            t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
        },
    })),
        (k.speed = function(e, t, n) {
            var r =
                e && 'object' == typeof e
                    ? k.extend({}, e)
                    : {
                          complete: n || (!n && t) || (m(e) && e),
                          duration: e,
                          easing: (n && t) || (t && !m(t) && t),
                      };
            return (
                k.fx.off
                    ? (r.duration = 0)
                    : 'number' != typeof r.duration &&
                      (r.duration in k.fx.speeds
                          ? (r.duration = k.fx.speeds[r.duration])
                          : (r.duration = k.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = 'fx'),
                (r.old = r.complete),
                (r.complete = function() {
                    m(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue);
                }),
                r
            );
        }),
        k.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(se)
                    .css('opacity', 0)
                    .show()
                    .end()
                    .animate({opacity: t}, e, n, r);
            },
            animate: function(t, e, n, r) {
                var i = k.isEmptyObject(t),
                    o = k.speed(e, n, r),
                    a = function() {
                        var e = dt(this, k.extend({}, t), o);
                        (i || Q.get(this, 'finish')) && e.stop(!0);
                    };
                return (a.finish = a), i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
            },
            stop: function(i, e, o) {
                var a = function(e) {
                    var t = e.stop;
                    delete e.stop, t(o);
                };
                return (
                    'string' != typeof i && ((o = e), (e = i), (i = void 0)),
                    e && !1 !== i && this.queue(i || 'fx', []),
                    this.each(function() {
                        var e = !0,
                            t = null != i && i + 'queueHooks',
                            n = k.timers,
                            r = Q.get(this);
                        if (t) r[t] && r[t].stop && a(r[t]);
                        else for (t in r) r[t] && r[t].stop && ut.test(t) && a(r[t]);
                        for (t = n.length; t--; )
                            n[t].elem !== this ||
                                (null != i && n[t].queue !== i) ||
                                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
                        (!e && o) || k.dequeue(this, i);
                    })
                );
            },
            finish: function(a) {
                return (
                    !1 !== a && (a = a || 'fx'),
                    this.each(function() {
                        var e,
                            t = Q.get(this),
                            n = t[a + 'queue'],
                            r = t[a + 'queueHooks'],
                            i = k.timers,
                            o = n ? n.length : 0;
                        for (
                            t.finish = !0,
                                k.queue(this, a, []),
                                r && r.stop && r.stop.call(this, !0),
                                e = i.length;
                            e--;

                        )
                            i[e].elem === this &&
                                i[e].queue === a &&
                                (i[e].anim.stop(!0), i.splice(e, 1));
                        for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete t.finish;
                    })
                );
            },
        }),
        k.each(['toggle', 'show', 'hide'], function(e, r) {
            var i = k.fn[r];
            k.fn[r] = function(e, t, n) {
                return null == e || 'boolean' == typeof e
                    ? i.apply(this, arguments)
                    : this.animate(ft(r, !0), e, t, n);
            };
        }),
        k.each(
            {
                slideDown: ft('show'),
                slideUp: ft('hide'),
                slideToggle: ft('toggle'),
                fadeIn: {opacity: 'show'},
                fadeOut: {opacity: 'hide'},
                fadeToggle: {opacity: 'toggle'},
            },
            function(e, r) {
                k.fn[e] = function(e, t, n) {
                    return this.animate(r, e, t, n);
                };
            }
        ),
        (k.timers = []),
        (k.fx.tick = function() {
            var e,
                t = 0,
                n = k.timers;
            for (rt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || k.fx.stop(), (rt = void 0);
        }),
        (k.fx.timer = function(e) {
            k.timers.push(e), k.fx.start();
        }),
        (k.fx.interval = 13),
        (k.fx.start = function() {
            it || ((it = !0), lt());
        }),
        (k.fx.stop = function() {
            it = null;
        }),
        (k.fx.speeds = {slow: 600, fast: 200, _default: 400}),
        (k.fn.delay = function(r, e) {
            return (
                (r = (k.fx && k.fx.speeds[r]) || r),
                (e = e || 'fx'),
                this.queue(e, function(e, t) {
                    var n = C.setTimeout(e, r);
                    t.stop = function() {
                        C.clearTimeout(n);
                    };
                })
            );
        }),
        (ot = E.createElement('input')),
        (at = E.createElement('select').appendChild(E.createElement('option'))),
        (ot.type = 'checkbox'),
        (y.checkOn = '' !== ot.value),
        (y.optSelected = at.selected),
        ((ot = E.createElement('input')).value = 't'),
        (ot.type = 'radio'),
        (y.radioValue = 't' === ot.value);
    var ht,
        gt = k.expr.attrHandle;
    k.fn.extend({
        attr: function(e, t) {
            return _(this, k.attr, e, t, 1 < arguments.length);
        },
        removeAttr: function(e) {
            return this.each(function() {
                k.removeAttr(this, e);
            });
        },
    }),
        k.extend({
            attr: function(e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return 'undefined' == typeof e.getAttribute
                        ? k.prop(e, t, n)
                        : ((1 === o && k.isXMLDoc(e)) ||
                              (i =
                                  k.attrHooks[t.toLowerCase()] ||
                                  (k.expr.match.bool.test(t) ? ht : void 0)),
                          void 0 !== n
                              ? null === n
                                  ? void k.removeAttr(e, t)
                                  : i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                                  ? r
                                  : (e.setAttribute(t, n + ''), n)
                              : i && 'get' in i && null !== (r = i.get(e, t))
                              ? r
                              : null == (r = k.find.attr(e, t))
                              ? void 0
                              : r);
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!y.radioValue && 'radio' === t && A(e, 'input')) {
                            var n = e.value;
                            return e.setAttribute('type', t), n && (e.value = n), t;
                        }
                    },
                },
            },
            removeAttr: function(e, t) {
                var n,
                    r = 0,
                    i = t && t.match(R);
                if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
            },
        }),
        (ht = {
            set: function(e, t, n) {
                return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
        }),
        k.each(k.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var a = gt[t] || k.find.attr;
            gt[t] = function(e, t, n) {
                var r,
                    i,
                    o = t.toLowerCase();
                return (
                    n ||
                        ((i = gt[o]),
                        (gt[o] = r),
                        (r = null != a(e, t, n) ? o : null),
                        (gt[o] = i)),
                    r
                );
            };
        });
    var vt = /^(?:input|select|textarea|button)$/i,
        yt = /^(?:a|area)$/i;
    function mt(e) {
        return (e.match(R) || []).join(' ');
    }
    function xt(e) {
        return (e.getAttribute && e.getAttribute('class')) || '';
    }
    function bt(e) {
        return Array.isArray(e) ? e : ('string' == typeof e && e.match(R)) || [];
    }
    k.fn.extend({
        prop: function(e, t) {
            return _(this, k.prop, e, t, 1 < arguments.length);
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[k.propFix[e] || e];
            });
        },
    }),
        k.extend({
            prop: function(e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return (
                        (1 === o && k.isXMLDoc(e)) ||
                            ((t = k.propFix[t] || t), (i = k.propHooks[t])),
                        void 0 !== n
                            ? i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                                ? r
                                : (e[t] = n)
                            : i && 'get' in i && null !== (r = i.get(e, t))
                            ? r
                            : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = k.find.attr(e, 'tabindex');
                        return t
                            ? parseInt(t, 10)
                            : vt.test(e.nodeName) || (yt.test(e.nodeName) && e.href)
                            ? 0
                            : -1;
                    },
                },
            },
            propFix: {for: 'htmlFor', class: 'className'},
        }),
        y.optSelected ||
            (k.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function(e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                },
            }),
        k.each(
            [
                'tabIndex',
                'readOnly',
                'maxLength',
                'cellSpacing',
                'cellPadding',
                'rowSpan',
                'colSpan',
                'useMap',
                'frameBorder',
                'contentEditable',
            ],
            function() {
                k.propFix[this.toLowerCase()] = this;
            }
        ),
        k.fn.extend({
            addClass: function(t) {
                var e,
                    n,
                    r,
                    i,
                    o,
                    a,
                    s,
                    u = 0;
                if (m(t))
                    return this.each(function(e) {
                        k(this).addClass(t.call(this, e, xt(this)));
                    });
                if ((e = bt(t)).length)
                    while ((n = this[u++]))
                        if (((i = xt(n)), (r = 1 === n.nodeType && ' ' + mt(i) + ' '))) {
                            a = 0;
                            while ((o = e[a++])) r.indexOf(' ' + o + ' ') < 0 && (r += o + ' ');
                            i !== (s = mt(r)) && n.setAttribute('class', s);
                        }
                return this;
            },
            removeClass: function(t) {
                var e,
                    n,
                    r,
                    i,
                    o,
                    a,
                    s,
                    u = 0;
                if (m(t))
                    return this.each(function(e) {
                        k(this).removeClass(t.call(this, e, xt(this)));
                    });
                if (!arguments.length) return this.attr('class', '');
                if ((e = bt(t)).length)
                    while ((n = this[u++]))
                        if (((i = xt(n)), (r = 1 === n.nodeType && ' ' + mt(i) + ' '))) {
                            a = 0;
                            while ((o = e[a++]))
                                while (-1 < r.indexOf(' ' + o + ' '))
                                    r = r.replace(' ' + o + ' ', ' ');
                            i !== (s = mt(r)) && n.setAttribute('class', s);
                        }
                return this;
            },
            toggleClass: function(i, t) {
                var o = typeof i,
                    a = 'string' === o || Array.isArray(i);
                return 'boolean' == typeof t && a
                    ? t
                        ? this.addClass(i)
                        : this.removeClass(i)
                    : m(i)
                    ? this.each(function(e) {
                          k(this).toggleClass(i.call(this, e, xt(this), t), t);
                      })
                    : this.each(function() {
                          var e, t, n, r;
                          if (a) {
                              (t = 0), (n = k(this)), (r = bt(i));
                              while ((e = r[t++])) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                          } else (void 0 !== i && 'boolean' !== o) || ((e = xt(this)) && Q.set(this, '__className__', e), this.setAttribute && this.setAttribute('class', e || !1 === i ? '' : Q.get(this, '__className__') || ''));
                      });
            },
            hasClass: function(e) {
                var t,
                    n,
                    r = 0;
                t = ' ' + e + ' ';
                while ((n = this[r++]))
                    if (1 === n.nodeType && -1 < (' ' + mt(xt(n)) + ' ').indexOf(t)) return !0;
                return !1;
            },
        });
    var wt = /\r/g;
    k.fn.extend({
        val: function(n) {
            var r,
                e,
                i,
                t = this[0];
            return arguments.length
                ? ((i = m(n)),
                  this.each(function(e) {
                      var t;
                      1 === this.nodeType &&
                          (null == (t = i ? n.call(this, e, k(this).val()) : n)
                              ? (t = '')
                              : 'number' == typeof t
                              ? (t += '')
                              : Array.isArray(t) &&
                                (t = k.map(t, function(e) {
                                    return null == e ? '' : e + '';
                                })),
                          ((r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) &&
                              'set' in r &&
                              void 0 !== r.set(this, t, 'value')) ||
                              (this.value = t));
                  }))
                : t
                ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) &&
                  'get' in r &&
                  void 0 !== (e = r.get(t, 'value'))
                    ? e
                    : 'string' == typeof (e = t.value)
                    ? e.replace(wt, '')
                    : null == e
                    ? ''
                    : e
                : void 0;
        },
    }),
        k.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = k.find.attr(e, 'value');
                        return null != t ? t : mt(k.text(e));
                    },
                },
                select: {
                    get: function(e) {
                        var t,
                            n,
                            r,
                            i = e.options,
                            o = e.selectedIndex,
                            a = 'select-one' === e.type,
                            s = a ? null : [],
                            u = a ? o + 1 : i.length;
                        for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                            if (
                                ((n = i[r]).selected || r === o) &&
                                !n.disabled &&
                                (!n.parentNode.disabled || !A(n.parentNode, 'optgroup'))
                            ) {
                                if (((t = k(n).val()), a)) return t;
                                s.push(t);
                            }
                        return s;
                    },
                    set: function(e, t) {
                        var n,
                            r,
                            i = e.options,
                            o = k.makeArray(t),
                            a = i.length;
                        while (a--)
                            ((r = i[a]).selected = -1 < k.inArray(k.valHooks.option.get(r), o)) &&
                                (n = !0);
                        return n || (e.selectedIndex = -1), o;
                    },
                },
            },
        }),
        k.each(['radio', 'checkbox'], function() {
            (k.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t)) return (e.checked = -1 < k.inArray(k(e).val(), t));
                },
            }),
                y.checkOn ||
                    (k.valHooks[this].get = function(e) {
                        return null === e.getAttribute('value') ? 'on' : e.value;
                    });
        }),
        (y.focusin = 'onfocusin' in C);
    var Tt = /^(?:focusinfocus|focusoutblur)$/,
        Ct = function(e) {
            e.stopPropagation();
        };
    k.extend(k.event, {
        trigger: function(e, t, n, r) {
            var i,
                o,
                a,
                s,
                u,
                l,
                c,
                f,
                p = [n || E],
                d = v.call(e, 'type') ? e.type : e,
                h = v.call(e, 'namespace') ? e.namespace.split('.') : [];
            if (
                ((o = f = a = n = n || E),
                3 !== n.nodeType &&
                    8 !== n.nodeType &&
                    !Tt.test(d + k.event.triggered) &&
                    (-1 < d.indexOf('.') && ((d = (h = d.split('.')).shift()), h.sort()),
                    (u = d.indexOf(':') < 0 && 'on' + d),
                    ((e = e[k.expando]
                        ? e
                        : new k.Event(d, 'object' == typeof e && e)).isTrigger = r ? 2 : 3),
                    (e.namespace = h.join('.')),
                    (e.rnamespace = e.namespace
                        ? new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)')
                        : null),
                    (e.result = void 0),
                    e.target || (e.target = n),
                    (t = null == t ? [e] : k.makeArray(t, [e])),
                    (c = k.event.special[d] || {}),
                    r || !c.trigger || !1 !== c.trigger.apply(n, t)))
            ) {
                if (!r && !c.noBubble && !x(n)) {
                    for (
                        s = c.delegateType || d, Tt.test(s + d) || (o = o.parentNode);
                        o;
                        o = o.parentNode
                    )
                        p.push(o), (a = o);
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C);
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped())
                    (f = o),
                        (e.type = 1 < i ? s : c.bindType || d),
                        (l = (Q.get(o, 'events') || {})[e.type] && Q.get(o, 'handle')) &&
                            l.apply(o, t),
                        (l = u && o[u]) &&
                            l.apply &&
                            G(o) &&
                            ((e.result = l.apply(o, t)), !1 === e.result && e.preventDefault());
                return (
                    (e.type = d),
                    r ||
                        e.isDefaultPrevented() ||
                        (c._default && !1 !== c._default.apply(p.pop(), t)) ||
                        !G(n) ||
                        (u &&
                            m(n[d]) &&
                            !x(n) &&
                            ((a = n[u]) && (n[u] = null),
                            (k.event.triggered = d),
                            e.isPropagationStopped() && f.addEventListener(d, Ct),
                            n[d](),
                            e.isPropagationStopped() && f.removeEventListener(d, Ct),
                            (k.event.triggered = void 0),
                            a && (n[u] = a))),
                    e.result
                );
            }
        },
        simulate: function(e, t, n) {
            var r = k.extend(new k.Event(), n, {type: e, isSimulated: !0});
            k.event.trigger(r, null, t);
        },
    }),
        k.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    k.event.trigger(e, t, this);
                });
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return k.event.trigger(e, t, n, !0);
            },
        }),
        y.focusin ||
            k.each({focus: 'focusin', blur: 'focusout'}, function(n, r) {
                var i = function(e) {
                    k.event.simulate(r, e.target, k.event.fix(e));
                };
                k.event.special[r] = {
                    setup: function() {
                        var e = this.ownerDocument || this,
                            t = Q.access(e, r);
                        t || e.addEventListener(n, i, !0), Q.access(e, r, (t || 0) + 1);
                    },
                    teardown: function() {
                        var e = this.ownerDocument || this,
                            t = Q.access(e, r) - 1;
                        t ? Q.access(e, r, t) : (e.removeEventListener(n, i, !0), Q.remove(e, r));
                    },
                };
            });
    var Et = C.location,
        kt = Date.now(),
        St = /\?/;
    k.parseXML = function(e) {
        var t;
        if (!e || 'string' != typeof e) return null;
        try {
            t = new C.DOMParser().parseFromString(e, 'text/xml');
        } catch (e) {
            t = void 0;
        }
        return (
            (t && !t.getElementsByTagName('parsererror').length) || k.error('Invalid XML: ' + e), t
        );
    };
    var Nt = /\[\]$/,
        At = /\r?\n/g,
        Dt = /^(?:submit|button|image|reset|file)$/i,
        jt = /^(?:input|select|textarea|keygen)/i;
    function qt(n, e, r, i) {
        var t;
        if (Array.isArray(e))
            k.each(e, function(e, t) {
                r || Nt.test(n)
                    ? i(n, t)
                    : qt(n + '[' + ('object' == typeof t && null != t ? e : '') + ']', t, r, i);
            });
        else if (r || 'object' !== w(e)) i(n, e);
        else for (t in e) qt(n + '[' + t + ']', e[t], r, i);
    }
    (k.param = function(e, t) {
        var n,
            r = [],
            i = function(e, t) {
                var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n);
            };
        if (null == e) return '';
        if (Array.isArray(e) || (e.jquery && !k.isPlainObject(e)))
            k.each(e, function() {
                i(this.name, this.value);
            });
        else for (n in e) qt(n, e[n], t, i);
        return r.join('&');
    }),
        k.fn.extend({
            serialize: function() {
                return k.param(this.serializeArray());
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = k.prop(this, 'elements');
                    return e ? k.makeArray(e) : this;
                })
                    .filter(function() {
                        var e = this.type;
                        return (
                            this.name &&
                            !k(this).is(':disabled') &&
                            jt.test(this.nodeName) &&
                            !Dt.test(e) &&
                            (this.checked || !pe.test(e))
                        );
                    })
                    .map(function(e, t) {
                        var n = k(this).val();
                        return null == n
                            ? null
                            : Array.isArray(n)
                            ? k.map(n, function(e) {
                                  return {name: t.name, value: e.replace(At, '\r\n')};
                              })
                            : {name: t.name, value: n.replace(At, '\r\n')};
                    })
                    .get();
            },
        });
    var Lt = /%20/g,
        Ht = /#.*$/,
        Ot = /([?&])_=[^&]*/,
        Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Rt = /^(?:GET|HEAD)$/,
        Mt = /^\/\//,
        It = {},
        Wt = {},
        $t = '*/'.concat('*'),
        Ft = E.createElement('a');
    function Bt(o) {
        return function(e, t) {
            'string' != typeof e && ((t = e), (e = '*'));
            var n,
                r = 0,
                i = e.toLowerCase().match(R) || [];
            if (m(t))
                while ((n = i[r++]))
                    '+' === n[0]
                        ? ((n = n.slice(1) || '*'), (o[n] = o[n] || []).unshift(t))
                        : (o[n] = o[n] || []).push(t);
        };
    }
    function _t(t, i, o, a) {
        var s = {},
            u = t === Wt;
        function l(e) {
            var r;
            return (
                (s[e] = !0),
                k.each(t[e] || [], function(e, t) {
                    var n = t(i, o, a);
                    return 'string' != typeof n || u || s[n]
                        ? u
                            ? !(r = n)
                            : void 0
                        : (i.dataTypes.unshift(n), l(n), !1);
                }),
                r
            );
        }
        return l(i.dataTypes[0]) || (!s['*'] && l('*'));
    }
    function zt(e, t) {
        var n,
            r,
            i = k.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && k.extend(!0, e, r), e;
    }
    (Ft.href = Et.href),
        k.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Et.href,
                type: 'GET',
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    Et.protocol
                ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                accepts: {
                    '*': $t,
                    text: 'text/plain',
                    html: 'text/html',
                    xml: 'application/xml, text/xml',
                    json: 'application/json, text/javascript',
                },
                contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
                responseFields: {xml: 'responseXML', text: 'responseText', json: 'responseJSON'},
                converters: {
                    '* text': String,
                    'text html': !0,
                    'text json': JSON.parse,
                    'text xml': k.parseXML,
                },
                flatOptions: {url: !0, context: !0},
            },
            ajaxSetup: function(e, t) {
                return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e);
            },
            ajaxPrefilter: Bt(It),
            ajaxTransport: Bt(Wt),
            ajax: function(e, t) {
                'object' == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var c,
                    f,
                    p,
                    n,
                    d,
                    r,
                    h,
                    g,
                    i,
                    o,
                    v = k.ajaxSetup({}, t),
                    y = v.context || v,
                    m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event,
                    x = k.Deferred(),
                    b = k.Callbacks('once memory'),
                    w = v.statusCode || {},
                    a = {},
                    s = {},
                    u = 'canceled',
                    T = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (h) {
                                if (!n) {
                                    n = {};
                                    while ((t = Pt.exec(p)))
                                        n[t[1].toLowerCase() + ' '] = (
                                            n[t[1].toLowerCase() + ' '] || []
                                        ).concat(t[2]);
                                }
                                t = n[e.toLowerCase() + ' '];
                            }
                            return null == t ? null : t.join(', ');
                        },
                        getAllResponseHeaders: function() {
                            return h ? p : null;
                        },
                        setRequestHeader: function(e, t) {
                            return (
                                null == h &&
                                    ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                                    (a[e] = t)),
                                this
                            );
                        },
                        overrideMimeType: function(e) {
                            return null == h && (v.mimeType = e), this;
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (h) T.always(e[T.status]);
                                else for (t in e) w[t] = [w[t], e[t]];
                            return this;
                        },
                        abort: function(e) {
                            var t = e || u;
                            return c && c.abort(t), l(0, t), this;
                        },
                    };
                if (
                    (x.promise(T),
                    (v.url = ((e || v.url || Et.href) + '').replace(Mt, Et.protocol + '//')),
                    (v.type = t.method || t.type || v.method || v.type),
                    (v.dataTypes = (v.dataType || '*').toLowerCase().match(R) || ['']),
                    null == v.crossDomain)
                ) {
                    r = E.createElement('a');
                    try {
                        (r.href = v.url),
                            (r.href = r.href),
                            (v.crossDomain =
                                Ft.protocol + '//' + Ft.host != r.protocol + '//' + r.host);
                    } catch (e) {
                        v.crossDomain = !0;
                    }
                }
                if (
                    (v.data &&
                        v.processData &&
                        'string' != typeof v.data &&
                        (v.data = k.param(v.data, v.traditional)),
                    _t(It, v, t, T),
                    h)
                )
                    return T;
                for (i in ((g = k.event && v.global) &&
                    0 == k.active++ &&
                    k.event.trigger('ajaxStart'),
                (v.type = v.type.toUpperCase()),
                (v.hasContent = !Rt.test(v.type)),
                (f = v.url.replace(Ht, '')),
                v.hasContent
                    ? v.data &&
                      v.processData &&
                      0 === (v.contentType || '').indexOf('application/x-www-form-urlencoded') &&
                      (v.data = v.data.replace(Lt, '+'))
                    : ((o = v.url.slice(f.length)),
                      v.data &&
                          (v.processData || 'string' == typeof v.data) &&
                          ((f += (St.test(f) ? '&' : '?') + v.data), delete v.data),
                      !1 === v.cache &&
                          ((f = f.replace(Ot, '$1')),
                          (o = (St.test(f) ? '&' : '?') + '_=' + kt++ + o)),
                      (v.url = f + o)),
                v.ifModified &&
                    (k.lastModified[f] &&
                        T.setRequestHeader('If-Modified-Since', k.lastModified[f]),
                    k.etag[f] && T.setRequestHeader('If-None-Match', k.etag[f])),
                ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
                    T.setRequestHeader('Content-Type', v.contentType),
                T.setRequestHeader(
                    'Accept',
                    v.dataTypes[0] && v.accepts[v.dataTypes[0]]
                        ? v.accepts[v.dataTypes[0]] +
                              ('*' !== v.dataTypes[0] ? ', ' + $t + '; q=0.01' : '')
                        : v.accepts['*']
                ),
                v.headers))
                    T.setRequestHeader(i, v.headers[i]);
                if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
                if (
                    ((u = 'abort'),
                    b.add(v.complete),
                    T.done(v.success),
                    T.fail(v.error),
                    (c = _t(Wt, v, t, T)))
                ) {
                    if (((T.readyState = 1), g && m.trigger('ajaxSend', [T, v]), h)) return T;
                    v.async &&
                        0 < v.timeout &&
                        (d = C.setTimeout(function() {
                            T.abort('timeout');
                        }, v.timeout));
                    try {
                        (h = !1), c.send(a, l);
                    } catch (e) {
                        if (h) throw e;
                        l(-1, e);
                    }
                } else l(-1, 'No Transport');
                function l(e, t, n, r) {
                    var i,
                        o,
                        a,
                        s,
                        u,
                        l = t;
                    h ||
                        ((h = !0),
                        d && C.clearTimeout(d),
                        (c = void 0),
                        (p = r || ''),
                        (T.readyState = 0 < e ? 4 : 0),
                        (i = (200 <= e && e < 300) || 304 === e),
                        n &&
                            (s = (function(e, t, n) {
                                var r,
                                    i,
                                    o,
                                    a,
                                    s = e.contents,
                                    u = e.dataTypes;
                                while ('*' === u[0])
                                    u.shift(),
                                        void 0 === r &&
                                            (r = e.mimeType || t.getResponseHeader('Content-Type'));
                                if (r)
                                    for (i in s)
                                        if (s[i] && s[i].test(r)) {
                                            u.unshift(i);
                                            break;
                                        }
                                if (u[0] in n) o = u[0];
                                else {
                                    for (i in n) {
                                        if (!u[0] || e.converters[i + ' ' + u[0]]) {
                                            o = i;
                                            break;
                                        }
                                        a || (a = i);
                                    }
                                    o = o || a;
                                }
                                if (o) return o !== u[0] && u.unshift(o), n[o];
                            })(v, T, n)),
                        (s = (function(e, t, n, r) {
                            var i,
                                o,
                                a,
                                s,
                                u,
                                l = {},
                                c = e.dataTypes.slice();
                            if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                            o = c.shift();
                            while (o)
                                if (
                                    (e.responseFields[o] && (n[e.responseFields[o]] = t),
                                    !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                                    (u = o),
                                    (o = c.shift()))
                                )
                                    if ('*' === o) o = u;
                                    else if ('*' !== u && u !== o) {
                                        if (!(a = l[u + ' ' + o] || l['* ' + o]))
                                            for (i in l)
                                                if (
                                                    (s = i.split(' '))[1] === o &&
                                                    (a = l[u + ' ' + s[0]] || l['* ' + s[0]])
                                                ) {
                                                    !0 === a
                                                        ? (a = l[i])
                                                        : !0 !== l[i] &&
                                                          ((o = s[0]), c.unshift(s[1]));
                                                    break;
                                                }
                                        if (!0 !== a)
                                            if (a && e['throws']) t = a(t);
                                            else
                                                try {
                                                    t = a(t);
                                                } catch (e) {
                                                    return {
                                                        state: 'parsererror',
                                                        error: a
                                                            ? e
                                                            : 'No conversion from ' +
                                                              u +
                                                              ' to ' +
                                                              o,
                                                    };
                                                }
                                    }
                            return {state: 'success', data: t};
                        })(v, s, T, i)),
                        i
                            ? (v.ifModified &&
                                  ((u = T.getResponseHeader('Last-Modified')) &&
                                      (k.lastModified[f] = u),
                                  (u = T.getResponseHeader('etag')) && (k.etag[f] = u)),
                              204 === e || 'HEAD' === v.type
                                  ? (l = 'nocontent')
                                  : 304 === e
                                  ? (l = 'notmodified')
                                  : ((l = s.state), (o = s.data), (i = !(a = s.error))))
                            : ((a = l), (!e && l) || ((l = 'error'), e < 0 && (e = 0))),
                        (T.status = e),
                        (T.statusText = (t || l) + ''),
                        i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
                        T.statusCode(w),
                        (w = void 0),
                        g && m.trigger(i ? 'ajaxSuccess' : 'ajaxError', [T, v, i ? o : a]),
                        b.fireWith(y, [T, l]),
                        g &&
                            (m.trigger('ajaxComplete', [T, v]),
                            --k.active || k.event.trigger('ajaxStop')));
                }
                return T;
            },
            getJSON: function(e, t, n) {
                return k.get(e, t, n, 'json');
            },
            getScript: function(e, t) {
                return k.get(e, void 0, t, 'script');
            },
        }),
        k.each(['get', 'post'], function(e, i) {
            k[i] = function(e, t, n, r) {
                return (
                    m(t) && ((r = r || n), (n = t), (t = void 0)),
                    k.ajax(
                        k.extend(
                            {url: e, type: i, dataType: r, data: t, success: n},
                            k.isPlainObject(e) && e
                        )
                    )
                );
            };
        }),
        (k._evalUrl = function(e, t) {
            return k.ajax({
                url: e,
                type: 'GET',
                dataType: 'script',
                cache: !0,
                async: !1,
                global: !1,
                converters: {'text script': function() {}},
                dataFilter: function(e) {
                    k.globalEval(e, t);
                },
            });
        }),
        k.fn.extend({
            wrapAll: function(e) {
                var t;
                return (
                    this[0] &&
                        (m(e) && (e = e.call(this[0])),
                        (t = k(e, this[0].ownerDocument)
                            .eq(0)
                            .clone(!0)),
                        this[0].parentNode && t.insertBefore(this[0]),
                        t
                            .map(function() {
                                var e = this;
                                while (e.firstElementChild) e = e.firstElementChild;
                                return e;
                            })
                            .append(this)),
                    this
                );
            },
            wrapInner: function(n) {
                return m(n)
                    ? this.each(function(e) {
                          k(this).wrapInner(n.call(this, e));
                      })
                    : this.each(function() {
                          var e = k(this),
                              t = e.contents();
                          t.length ? t.wrapAll(n) : e.append(n);
                      });
            },
            wrap: function(t) {
                var n = m(t);
                return this.each(function(e) {
                    k(this).wrapAll(n ? t.call(this, e) : t);
                });
            },
            unwrap: function(e) {
                return (
                    this.parent(e)
                        .not('body')
                        .each(function() {
                            k(this).replaceWith(this.childNodes);
                        }),
                    this
                );
            },
        }),
        (k.expr.pseudos.hidden = function(e) {
            return !k.expr.pseudos.visible(e);
        }),
        (k.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }),
        (k.ajaxSettings.xhr = function() {
            try {
                return new C.XMLHttpRequest();
            } catch (e) {}
        });
    var Ut = {0: 200, 1223: 204},
        Xt = k.ajaxSettings.xhr();
    (y.cors = !!Xt && 'withCredentials' in Xt),
        (y.ajax = Xt = !!Xt),
        k.ajaxTransport(function(i) {
            var o, a;
            if (y.cors || (Xt && !i.crossDomain))
                return {
                    send: function(e, t) {
                        var n,
                            r = i.xhr();
                        if ((r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields))
                            for (n in i.xhrFields) r[n] = i.xhrFields[n];
                        for (n in (i.mimeType &&
                            r.overrideMimeType &&
                            r.overrideMimeType(i.mimeType),
                        i.crossDomain ||
                            e['X-Requested-With'] ||
                            (e['X-Requested-With'] = 'XMLHttpRequest'),
                        e))
                            r.setRequestHeader(n, e[n]);
                        (o = function(e) {
                            return function() {
                                o &&
                                    ((o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null),
                                    'abort' === e
                                        ? r.abort()
                                        : 'error' === e
                                        ? 'number' != typeof r.status
                                            ? t(0, 'error')
                                            : t(r.status, r.statusText)
                                        : t(
                                              Ut[r.status] || r.status,
                                              r.statusText,
                                              'text' !== (r.responseType || 'text') ||
                                                  'string' != typeof r.responseText
                                                  ? {binary: r.response}
                                                  : {text: r.responseText},
                                              r.getAllResponseHeaders()
                                          ));
                            };
                        }),
                            (r.onload = o()),
                            (a = r.onerror = r.ontimeout = o('error')),
                            void 0 !== r.onabort
                                ? (r.onabort = a)
                                : (r.onreadystatechange = function() {
                                      4 === r.readyState &&
                                          C.setTimeout(function() {
                                              o && a();
                                          });
                                  }),
                            (o = o('abort'));
                        try {
                            r.send((i.hasContent && i.data) || null);
                        } catch (e) {
                            if (o) throw e;
                        }
                    },
                    abort: function() {
                        o && o();
                    },
                };
        }),
        k.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1);
        }),
        k.ajaxSetup({
            accepts: {
                script:
                    'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
            },
            contents: {script: /\b(?:java|ecma)script\b/},
            converters: {
                'text script': function(e) {
                    return k.globalEval(e), e;
                },
            },
        }),
        k.ajaxPrefilter('script', function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET');
        }),
        k.ajaxTransport('script', function(n) {
            var r, i;
            if (n.crossDomain || n.scriptAttrs)
                return {
                    send: function(e, t) {
                        (r = k('<script>')
                            .attr(n.scriptAttrs || {})
                            .prop({charset: n.scriptCharset, src: n.url})
                            .on(
                                'load error',
                                (i = function(e) {
                                    r.remove(),
                                        (i = null),
                                        e && t('error' === e.type ? 404 : 200, e.type);
                                })
                            )),
                            E.head.appendChild(r[0]);
                    },
                    abort: function() {
                        i && i();
                    },
                };
        });
    var Vt,
        Gt = [],
        Yt = /(=)\?(?=&|$)|\?\?/;
    k.ajaxSetup({
        jsonp: 'callback',
        jsonpCallback: function() {
            var e = Gt.pop() || k.expando + '_' + kt++;
            return (this[e] = !0), e;
        },
    }),
        k.ajaxPrefilter('json jsonp', function(e, t, n) {
            var r,
                i,
                o,
                a =
                    !1 !== e.jsonp &&
                    (Yt.test(e.url)
                        ? 'url'
                        : 'string' == typeof e.data &&
                          0 ===
                              (e.contentType || '').indexOf('application/x-www-form-urlencoded') &&
                          Yt.test(e.data) &&
                          'data');
            if (a || 'jsonp' === e.dataTypes[0])
                return (
                    (r = e.jsonpCallback = m(e.jsonpCallback)
                        ? e.jsonpCallback()
                        : e.jsonpCallback),
                    a
                        ? (e[a] = e[a].replace(Yt, '$1' + r))
                        : !1 !== e.jsonp &&
                          (e.url += (St.test(e.url) ? '&' : '?') + e.jsonp + '=' + r),
                    (e.converters['script json'] = function() {
                        return o || k.error(r + ' was not called'), o[0];
                    }),
                    (e.dataTypes[0] = 'json'),
                    (i = C[r]),
                    (C[r] = function() {
                        o = arguments;
                    }),
                    n.always(function() {
                        void 0 === i ? k(C).removeProp(r) : (C[r] = i),
                            e[r] && ((e.jsonpCallback = t.jsonpCallback), Gt.push(r)),
                            o && m(i) && i(o[0]),
                            (o = i = void 0);
                    }),
                    'script'
                );
        }),
        (y.createHTMLDocument =
            (((Vt = E.implementation.createHTMLDocument('').body).innerHTML =
                '<form></form><form></form>'),
            2 === Vt.childNodes.length)),
        (k.parseHTML = function(e, t, n) {
            return 'string' != typeof e
                ? []
                : ('boolean' == typeof t && ((n = t), (t = !1)),
                  t ||
                      (y.createHTMLDocument
                          ? (((r = (t = E.implementation.createHTMLDocument('')).createElement(
                                'base'
                            )).href = E.location.href),
                            t.head.appendChild(r))
                          : (t = E)),
                  (o = !n && []),
                  (i = D.exec(e))
                      ? [t.createElement(i[1])]
                      : ((i = we([e], t, o)),
                        o && o.length && k(o).remove(),
                        k.merge([], i.childNodes)));
            var r, i, o;
        }),
        (k.fn.load = function(e, t, n) {
            var r,
                i,
                o,
                a = this,
                s = e.indexOf(' ');
            return (
                -1 < s && ((r = mt(e.slice(s))), (e = e.slice(0, s))),
                m(t) ? ((n = t), (t = void 0)) : t && 'object' == typeof t && (i = 'POST'),
                0 < a.length &&
                    k
                        .ajax({url: e, type: i || 'GET', dataType: 'html', data: t})
                        .done(function(e) {
                            (o = arguments),
                                a.html(
                                    r
                                        ? k('<div>')
                                              .append(k.parseHTML(e))
                                              .find(r)
                                        : e
                                );
                        })
                        .always(
                            n &&
                                function(e, t) {
                                    a.each(function() {
                                        n.apply(this, o || [e.responseText, t, e]);
                                    });
                                }
                        ),
                this
            );
        }),
        k.each(
            ['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'],
            function(e, t) {
                k.fn[t] = function(e) {
                    return this.on(t, e);
                };
            }
        ),
        (k.expr.pseudos.animated = function(t) {
            return k.grep(k.timers, function(e) {
                return t === e.elem;
            }).length;
        }),
        (k.offset = {
            setOffset: function(e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = k.css(e, 'position'),
                    c = k(e),
                    f = {};
                'static' === l && (e.style.position = 'relative'),
                    (s = c.offset()),
                    (o = k.css(e, 'top')),
                    (u = k.css(e, 'left')),
                    ('absolute' === l || 'fixed' === l) && -1 < (o + u).indexOf('auto')
                        ? ((a = (r = c.position()).top), (i = r.left))
                        : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
                    m(t) && (t = t.call(e, n, k.extend({}, s))),
                    null != t.top && (f.top = t.top - s.top + a),
                    null != t.left && (f.left = t.left - s.left + i),
                    'using' in t ? t.using.call(e, f) : c.css(f);
            },
        }),
        k.fn.extend({
            offset: function(t) {
                if (arguments.length)
                    return void 0 === t
                        ? this
                        : this.each(function(e) {
                              k.offset.setOffset(this, t, e);
                          });
                var e,
                    n,
                    r = this[0];
                return r
                    ? r.getClientRects().length
                        ? ((e = r.getBoundingClientRect()),
                          (n = r.ownerDocument.defaultView),
                          {top: e.top + n.pageYOffset, left: e.left + n.pageXOffset})
                        : {top: 0, left: 0}
                    : void 0;
            },
            position: function() {
                if (this[0]) {
                    var e,
                        t,
                        n,
                        r = this[0],
                        i = {top: 0, left: 0};
                    if ('fixed' === k.css(r, 'position')) t = r.getBoundingClientRect();
                    else {
                        (t = this.offset()),
                            (n = r.ownerDocument),
                            (e = r.offsetParent || n.documentElement);
                        while (
                            e &&
                            (e === n.body || e === n.documentElement) &&
                            'static' === k.css(e, 'position')
                        )
                            e = e.parentNode;
                        e &&
                            e !== r &&
                            1 === e.nodeType &&
                            (((i = k(e).offset()).top += k.css(e, 'borderTopWidth', !0)),
                            (i.left += k.css(e, 'borderLeftWidth', !0)));
                    }
                    return {
                        top: t.top - i.top - k.css(r, 'marginTop', !0),
                        left: t.left - i.left - k.css(r, 'marginLeft', !0),
                    };
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    var e = this.offsetParent;
                    while (e && 'static' === k.css(e, 'position')) e = e.offsetParent;
                    return e || ie;
                });
            },
        }),
        k.each({scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset'}, function(t, i) {
            var o = 'pageYOffset' === i;
            k.fn[t] = function(e) {
                return _(
                    this,
                    function(e, t, n) {
                        var r;
                        if (
                            (x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView), void 0 === n)
                        )
                            return r ? r[i] : e[t];
                        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : (e[t] = n);
                    },
                    t,
                    e,
                    arguments.length
                );
            };
        }),
        k.each(['top', 'left'], function(e, n) {
            k.cssHooks[n] = ze(y.pixelPosition, function(e, t) {
                if (t) return (t = _e(e, n)), $e.test(t) ? k(e).position()[n] + 'px' : t;
            });
        }),
        k.each({Height: 'height', Width: 'width'}, function(a, s) {
            k.each({padding: 'inner' + a, content: s, '': 'outer' + a}, function(r, o) {
                k.fn[o] = function(e, t) {
                    var n = arguments.length && (r || 'boolean' != typeof e),
                        i = r || (!0 === e || !0 === t ? 'margin' : 'border');
                    return _(
                        this,
                        function(e, t, n) {
                            var r;
                            return x(e)
                                ? 0 === o.indexOf('outer')
                                    ? e['inner' + a]
                                    : e.document.documentElement['client' + a]
                                : 9 === e.nodeType
                                ? ((r = e.documentElement),
                                  Math.max(
                                      e.body['scroll' + a],
                                      r['scroll' + a],
                                      e.body['offset' + a],
                                      r['offset' + a],
                                      r['client' + a]
                                  ))
                                : void 0 === n
                                ? k.css(e, t, i)
                                : k.style(e, t, n, i);
                        },
                        s,
                        n ? e : void 0,
                        n
                    );
                };
            });
        }),
        k.each(
            'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
                ' '
            ),
            function(e, n) {
                k.fn[n] = function(e, t) {
                    return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
                };
            }
        ),
        k.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            },
        }),
        k.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function(e, t) {
                return this.off(e, null, t);
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r);
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', n);
            },
        }),
        (k.proxy = function(e, t) {
            var n, r, i;
            if (('string' == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
                return (
                    (r = s.call(arguments, 2)),
                    ((i = function() {
                        return e.apply(t || this, r.concat(s.call(arguments)));
                    }).guid = e.guid = e.guid || k.guid++),
                    i
                );
        }),
        (k.holdReady = function(e) {
            e ? k.readyWait++ : k.ready(!0);
        }),
        (k.isArray = Array.isArray),
        (k.parseJSON = JSON.parse),
        (k.nodeName = A),
        (k.isFunction = m),
        (k.isWindow = x),
        (k.camelCase = V),
        (k.type = w),
        (k.now = Date.now),
        (k.isNumeric = function(e) {
            var t = k.type(e);
            return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e));
        }),
        'function' == typeof define &&
            define.amd &&
            define('jquery', [], function() {
                return k;
            });
    var Qt = C.jQuery,
        Jt = C.$;
    return (
        (k.noConflict = function(e) {
            return C.$ === k && (C.$ = Jt), e && C.jQuery === k && (C.jQuery = Qt), k;
        }),
        e || (C.jQuery = C.$ = k),
        k
    );
});

/**
 * Swiper 5.3.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://swiperjs.com
 *
 * Copyright 2014-2020 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: February 8, 2020
 */

!(function(e, t) {
    'object' == typeof exports && 'undefined' != typeof module
        ? (module.exports = t())
        : 'function' == typeof define && define.amd
        ? define(t)
        : ((e = e || self).Swiper = t());
})(this, function() {
    'use strict';
    var e =
            'undefined' == typeof document
                ? {
                      body: {},
                      addEventListener: function() {},
                      removeEventListener: function() {},
                      activeElement: {blur: function() {}, nodeName: ''},
                      querySelector: function() {
                          return null;
                      },
                      querySelectorAll: function() {
                          return [];
                      },
                      getElementById: function() {
                          return null;
                      },
                      createEvent: function() {
                          return {initEvent: function() {}};
                      },
                      createElement: function() {
                          return {
                              children: [],
                              childNodes: [],
                              style: {},
                              setAttribute: function() {},
                              getElementsByTagName: function() {
                                  return [];
                              },
                          };
                      },
                      location: {hash: ''},
                  }
                : document,
        t =
            'undefined' == typeof window
                ? {
                      document: e,
                      navigator: {userAgent: ''},
                      location: {},
                      history: {},
                      CustomEvent: function() {
                          return this;
                      },
                      addEventListener: function() {},
                      removeEventListener: function() {},
                      getComputedStyle: function() {
                          return {
                              getPropertyValue: function() {
                                  return '';
                              },
                          };
                      },
                      Image: function() {},
                      Date: function() {},
                      screen: {},
                      setTimeout: function() {},
                      clearTimeout: function() {},
                  }
                : window,
        i = function(e) {
            for (var t = 0; t < e.length; t += 1) this[t] = e[t];
            return (this.length = e.length), this;
        };
    function s(s, a) {
        var r = [],
            n = 0;
        if (s && !a && s instanceof i) return s;
        if (s)
            if ('string' == typeof s) {
                var o,
                    l,
                    d = s.trim();
                if (d.indexOf('<') >= 0 && d.indexOf('>') >= 0) {
                    var h = 'div';
                    for (
                        0 === d.indexOf('<li') && (h = 'ul'),
                            0 === d.indexOf('<tr') && (h = 'tbody'),
                            (0 !== d.indexOf('<td') && 0 !== d.indexOf('<th')) || (h = 'tr'),
                            0 === d.indexOf('<tbody') && (h = 'table'),
                            0 === d.indexOf('<option') && (h = 'select'),
                            (l = e.createElement(h)).innerHTML = d,
                            n = 0;
                        n < l.childNodes.length;
                        n += 1
                    )
                        r.push(l.childNodes[n]);
                } else
                    for (
                        o =
                            a || '#' !== s[0] || s.match(/[ .<>:~]/)
                                ? (a || e).querySelectorAll(s.trim())
                                : [e.getElementById(s.trim().split('#')[1])],
                            n = 0;
                        n < o.length;
                        n += 1
                    )
                        o[n] && r.push(o[n]);
            } else if (s.nodeType || s === t || s === e) r.push(s);
            else if (s.length > 0 && s[0].nodeType) for (n = 0; n < s.length; n += 1) r.push(s[n]);
        return new i(r);
    }
    function a(e) {
        for (var t = [], i = 0; i < e.length; i += 1) -1 === t.indexOf(e[i]) && t.push(e[i]);
        return t;
    }
    (s.fn = i.prototype), (s.Class = i), (s.Dom7 = i);
    var r = {
        addClass: function(e) {
            if (void 0 === e) return this;
            for (var t = e.split(' '), i = 0; i < t.length; i += 1)
                for (var s = 0; s < this.length; s += 1)
                    void 0 !== this[s] &&
                        void 0 !== this[s].classList &&
                        this[s].classList.add(t[i]);
            return this;
        },
        removeClass: function(e) {
            for (var t = e.split(' '), i = 0; i < t.length; i += 1)
                for (var s = 0; s < this.length; s += 1)
                    void 0 !== this[s] &&
                        void 0 !== this[s].classList &&
                        this[s].classList.remove(t[i]);
            return this;
        },
        hasClass: function(e) {
            return !!this[0] && this[0].classList.contains(e);
        },
        toggleClass: function(e) {
            for (var t = e.split(' '), i = 0; i < t.length; i += 1)
                for (var s = 0; s < this.length; s += 1)
                    void 0 !== this[s] &&
                        void 0 !== this[s].classList &&
                        this[s].classList.toggle(t[i]);
            return this;
        },
        attr: function(e, t) {
            var i = arguments;
            if (1 === arguments.length && 'string' == typeof e)
                return this[0] ? this[0].getAttribute(e) : void 0;
            for (var s = 0; s < this.length; s += 1)
                if (2 === i.length) this[s].setAttribute(e, t);
                else for (var a in e) (this[s][a] = e[a]), this[s].setAttribute(a, e[a]);
            return this;
        },
        removeAttr: function(e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this;
        },
        data: function(e, t) {
            var i;
            if (void 0 !== t) {
                for (var s = 0; s < this.length; s += 1)
                    (i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}),
                        (i.dom7ElementDataStorage[e] = t);
                return this;
            }
            if ((i = this[0])) {
                if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage)
                    return i.dom7ElementDataStorage[e];
                var a = i.getAttribute('data-' + e);
                return a || void 0;
            }
        },
        transform: function(e) {
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                (i.webkitTransform = e), (i.transform = e);
            }
            return this;
        },
        transition: function(e) {
            'string' != typeof e && (e += 'ms');
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                (i.webkitTransitionDuration = e), (i.transitionDuration = e);
            }
            return this;
        },
        on: function() {
            for (var e, t = [], i = arguments.length; i--; ) t[i] = arguments[i];
            var a = t[0],
                r = t[1],
                n = t[2],
                o = t[3];
            function l(e) {
                var t = e.target;
                if (t) {
                    var i = e.target.dom7EventData || [];
                    if ((i.indexOf(e) < 0 && i.unshift(e), s(t).is(r))) n.apply(t, i);
                    else
                        for (var a = s(t).parents(), o = 0; o < a.length; o += 1)
                            s(a[o]).is(r) && n.apply(a[o], i);
                }
            }
            function d(e) {
                var t = (e && e.target && e.target.dom7EventData) || [];
                t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
            }
            'function' == typeof t[1] && ((a = (e = t)[0]), (n = e[1]), (o = e[2]), (r = void 0)),
                o || (o = !1);
            for (var h, p = a.split(' '), c = 0; c < this.length; c += 1) {
                var u = this[c];
                if (r)
                    for (h = 0; h < p.length; h += 1) {
                        var v = p[h];
                        u.dom7LiveListeners || (u.dom7LiveListeners = {}),
                            u.dom7LiveListeners[v] || (u.dom7LiveListeners[v] = []),
                            u.dom7LiveListeners[v].push({listener: n, proxyListener: l}),
                            u.addEventListener(v, l, o);
                    }
                else
                    for (h = 0; h < p.length; h += 1) {
                        var f = p[h];
                        u.dom7Listeners || (u.dom7Listeners = {}),
                            u.dom7Listeners[f] || (u.dom7Listeners[f] = []),
                            u.dom7Listeners[f].push({listener: n, proxyListener: d}),
                            u.addEventListener(f, d, o);
                    }
            }
            return this;
        },
        off: function() {
            for (var e, t = [], i = arguments.length; i--; ) t[i] = arguments[i];
            var s = t[0],
                a = t[1],
                r = t[2],
                n = t[3];
            'function' == typeof t[1] && ((s = (e = t)[0]), (r = e[1]), (n = e[2]), (a = void 0)),
                n || (n = !1);
            for (var o = s.split(' '), l = 0; l < o.length; l += 1)
                for (var d = o[l], h = 0; h < this.length; h += 1) {
                    var p = this[h],
                        c = void 0;
                    if (
                        (!a && p.dom7Listeners
                            ? (c = p.dom7Listeners[d])
                            : a && p.dom7LiveListeners && (c = p.dom7LiveListeners[d]),
                        c && c.length)
                    )
                        for (var u = c.length - 1; u >= 0; u -= 1) {
                            var v = c[u];
                            r && v.listener === r
                                ? (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1))
                                : r &&
                                  v.listener &&
                                  v.listener.dom7proxy &&
                                  v.listener.dom7proxy === r
                                ? (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1))
                                : r ||
                                  (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1));
                        }
                }
            return this;
        },
        trigger: function() {
            for (var i = [], s = arguments.length; s--; ) i[s] = arguments[s];
            for (var a = i[0].split(' '), r = i[1], n = 0; n < a.length; n += 1)
                for (var o = a[n], l = 0; l < this.length; l += 1) {
                    var d = this[l],
                        h = void 0;
                    try {
                        h = new t.CustomEvent(o, {detail: r, bubbles: !0, cancelable: !0});
                    } catch (t) {
                        (h = e.createEvent('Event')).initEvent(o, !0, !0), (h.detail = r);
                    }
                    (d.dom7EventData = i.filter(function(e, t) {
                        return t > 0;
                    })),
                        d.dispatchEvent(h),
                        (d.dom7EventData = []),
                        delete d.dom7EventData;
                }
            return this;
        },
        transitionEnd: function(e) {
            var t,
                i = ['webkitTransitionEnd', 'transitionend'],
                s = this;
            function a(r) {
                if (r.target === this)
                    for (e.call(this, r), t = 0; t < i.length; t += 1) s.off(i[t], a);
            }
            if (e) for (t = 0; t < i.length; t += 1) s.on(i[t], a);
            return this;
        },
        outerWidth: function(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return (
                        this[0].offsetWidth +
                        parseFloat(t.getPropertyValue('margin-right')) +
                        parseFloat(t.getPropertyValue('margin-left'))
                    );
                }
                return this[0].offsetWidth;
            }
            return null;
        },
        outerHeight: function(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return (
                        this[0].offsetHeight +
                        parseFloat(t.getPropertyValue('margin-top')) +
                        parseFloat(t.getPropertyValue('margin-bottom'))
                    );
                }
                return this[0].offsetHeight;
            }
            return null;
        },
        offset: function() {
            if (this.length > 0) {
                var i = this[0],
                    s = i.getBoundingClientRect(),
                    a = e.body,
                    r = i.clientTop || a.clientTop || 0,
                    n = i.clientLeft || a.clientLeft || 0,
                    o = i === t ? t.scrollY : i.scrollTop,
                    l = i === t ? t.scrollX : i.scrollLeft;
                return {top: s.top + o - r, left: s.left + l - n};
            }
            return null;
        },
        css: function(e, i) {
            var s;
            if (1 === arguments.length) {
                if ('string' != typeof e) {
                    for (s = 0; s < this.length; s += 1) for (var a in e) this[s].style[a] = e[a];
                    return this;
                }
                if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(e);
            }
            if (2 === arguments.length && 'string' == typeof e) {
                for (s = 0; s < this.length; s += 1) this[s].style[e] = i;
                return this;
            }
            return this;
        },
        each: function(e) {
            if (!e) return this;
            for (var t = 0; t < this.length; t += 1)
                if (!1 === e.call(this[t], t, this[t])) return this;
            return this;
        },
        html: function(e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this;
        },
        text: function(e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this;
        },
        is: function(a) {
            var r,
                n,
                o = this[0];
            if (!o || void 0 === a) return !1;
            if ('string' == typeof a) {
                if (o.matches) return o.matches(a);
                if (o.webkitMatchesSelector) return o.webkitMatchesSelector(a);
                if (o.msMatchesSelector) return o.msMatchesSelector(a);
                for (r = s(a), n = 0; n < r.length; n += 1) if (r[n] === o) return !0;
                return !1;
            }
            if (a === e) return o === e;
            if (a === t) return o === t;
            if (a.nodeType || a instanceof i) {
                for (r = a.nodeType ? [a] : a, n = 0; n < r.length; n += 1)
                    if (r[n] === o) return !0;
                return !1;
            }
            return !1;
        },
        index: function() {
            var e,
                t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling); ) 1 === t.nodeType && (e += 1);
                return e;
            }
        },
        eq: function(e) {
            if (void 0 === e) return this;
            var t,
                s = this.length;
            return new i(e > s - 1 ? [] : e < 0 ? ((t = s + e) < 0 ? [] : [this[t]]) : [this[e]]);
        },
        append: function() {
            for (var t, s = [], a = arguments.length; a--; ) s[a] = arguments[a];
            for (var r = 0; r < s.length; r += 1) {
                t = s[r];
                for (var n = 0; n < this.length; n += 1)
                    if ('string' == typeof t) {
                        var o = e.createElement('div');
                        for (o.innerHTML = t; o.firstChild; ) this[n].appendChild(o.firstChild);
                    } else if (t instanceof i)
                        for (var l = 0; l < t.length; l += 1) this[n].appendChild(t[l]);
                    else this[n].appendChild(t);
            }
            return this;
        },
        prepend: function(t) {
            var s, a;
            for (s = 0; s < this.length; s += 1)
                if ('string' == typeof t) {
                    var r = e.createElement('div');
                    for (r.innerHTML = t, a = r.childNodes.length - 1; a >= 0; a -= 1)
                        this[s].insertBefore(r.childNodes[a], this[s].childNodes[0]);
                } else if (t instanceof i)
                    for (a = 0; a < t.length; a += 1)
                        this[s].insertBefore(t[a], this[s].childNodes[0]);
                else this[s].insertBefore(t, this[s].childNodes[0]);
            return this;
        },
        next: function(e) {
            return this.length > 0
                ? e
                    ? this[0].nextElementSibling && s(this[0].nextElementSibling).is(e)
                        ? new i([this[0].nextElementSibling])
                        : new i([])
                    : this[0].nextElementSibling
                    ? new i([this[0].nextElementSibling])
                    : new i([])
                : new i([]);
        },
        nextAll: function(e) {
            var t = [],
                a = this[0];
            if (!a) return new i([]);
            for (; a.nextElementSibling; ) {
                var r = a.nextElementSibling;
                e ? s(r).is(e) && t.push(r) : t.push(r), (a = r);
            }
            return new i(t);
        },
        prev: function(e) {
            if (this.length > 0) {
                var t = this[0];
                return e
                    ? t.previousElementSibling && s(t.previousElementSibling).is(e)
                        ? new i([t.previousElementSibling])
                        : new i([])
                    : t.previousElementSibling
                    ? new i([t.previousElementSibling])
                    : new i([]);
            }
            return new i([]);
        },
        prevAll: function(e) {
            var t = [],
                a = this[0];
            if (!a) return new i([]);
            for (; a.previousElementSibling; ) {
                var r = a.previousElementSibling;
                e ? s(r).is(e) && t.push(r) : t.push(r), (a = r);
            }
            return new i(t);
        },
        parent: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                null !== this[i].parentNode &&
                    (e
                        ? s(this[i].parentNode).is(e) && t.push(this[i].parentNode)
                        : t.push(this[i].parentNode));
            return s(a(t));
        },
        parents: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                for (var r = this[i].parentNode; r; )
                    e ? s(r).is(e) && t.push(r) : t.push(r), (r = r.parentNode);
            return s(a(t));
        },
        closest: function(e) {
            var t = this;
            return void 0 === e ? new i([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function(e) {
            for (var t = [], s = 0; s < this.length; s += 1)
                for (var a = this[s].querySelectorAll(e), r = 0; r < a.length; r += 1) t.push(a[r]);
            return new i(t);
        },
        children: function(e) {
            for (var t = [], r = 0; r < this.length; r += 1)
                for (var n = this[r].childNodes, o = 0; o < n.length; o += 1)
                    e
                        ? 1 === n[o].nodeType && s(n[o]).is(e) && t.push(n[o])
                        : 1 === n[o].nodeType && t.push(n[o]);
            return new i(a(t));
        },
        filter: function(e) {
            for (var t = [], s = 0; s < this.length; s += 1)
                e.call(this[s], s, this[s]) && t.push(this[s]);
            return new i(t);
        },
        remove: function() {
            for (var e = 0; e < this.length; e += 1)
                this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this;
        },
        add: function() {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var i, a;
            for (i = 0; i < e.length; i += 1) {
                var r = s(e[i]);
                for (a = 0; a < r.length; a += 1) (this[this.length] = r[a]), (this.length += 1);
            }
            return this;
        },
        styles: function() {
            return this[0] ? t.getComputedStyle(this[0], null) : {};
        },
    };
    Object.keys(r).forEach(function(e) {
        s.fn[e] = s.fn[e] || r[e];
    });
    var n = {
            deleteProps: function(e) {
                var t = e;
                Object.keys(t).forEach(function(e) {
                    try {
                        t[e] = null;
                    } catch (e) {}
                    try {
                        delete t[e];
                    } catch (e) {}
                });
            },
            nextTick: function(e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t);
            },
            now: function() {
                return Date.now();
            },
            getTranslate: function(e, i) {
                var s, a, r;
                void 0 === i && (i = 'x');
                var n = t.getComputedStyle(e, null);
                return (
                    t.WebKitCSSMatrix
                        ? ((a = n.transform || n.webkitTransform).split(',').length > 6 &&
                              (a = a
                                  .split(', ')
                                  .map(function(e) {
                                      return e.replace(',', '.');
                                  })
                                  .join(', ')),
                          (r = new t.WebKitCSSMatrix('none' === a ? '' : a)))
                        : (s = (r =
                              n.MozTransform ||
                              n.OTransform ||
                              n.MsTransform ||
                              n.msTransform ||
                              n.transform ||
                              n
                                  .getPropertyValue('transform')
                                  .replace('translate(', 'matrix(1, 0, 0, 1,'))
                              .toString()
                              .split(',')),
                    'x' === i &&
                        (a = t.WebKitCSSMatrix
                            ? r.m41
                            : 16 === s.length
                            ? parseFloat(s[12])
                            : parseFloat(s[4])),
                    'y' === i &&
                        (a = t.WebKitCSSMatrix
                            ? r.m42
                            : 16 === s.length
                            ? parseFloat(s[13])
                            : parseFloat(s[5])),
                    a || 0
                );
            },
            parseUrlQuery: function(e) {
                var i,
                    s,
                    a,
                    r,
                    n = {},
                    o = e || t.location.href;
                if ('string' == typeof o && o.length)
                    for (
                        r = (s = (o = o.indexOf('?') > -1 ? o.replace(/\S*\?/, '') : '')
                            .split('&')
                            .filter(function(e) {
                                return '' !== e;
                            })).length,
                            i = 0;
                        i < r;
                        i += 1
                    )
                        (a = s[i].replace(/#\S+/g, '').split('=')),
                            (n[decodeURIComponent(a[0])] =
                                void 0 === a[1] ? void 0 : decodeURIComponent(a[1]) || '');
                return n;
            },
            isObject: function(e) {
                return (
                    'object' == typeof e && null !== e && e.constructor && e.constructor === Object
                );
            },
            extend: function() {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
                    var a = e[s];
                    if (null != a)
                        for (var r = Object.keys(Object(a)), o = 0, l = r.length; o < l; o += 1) {
                            var d = r[o],
                                h = Object.getOwnPropertyDescriptor(a, d);
                            void 0 !== h &&
                                h.enumerable &&
                                (n.isObject(i[d]) && n.isObject(a[d])
                                    ? n.extend(i[d], a[d])
                                    : !n.isObject(i[d]) && n.isObject(a[d])
                                    ? ((i[d] = {}), n.extend(i[d], a[d]))
                                    : (i[d] = a[d]));
                        }
                }
                return i;
            },
        },
        o = {
            touch:
                (t.Modernizr && !0 === t.Modernizr.touch) ||
                !!(
                    t.navigator.maxTouchPoints > 0 ||
                    'ontouchstart' in t ||
                    (t.DocumentTouch && e instanceof t.DocumentTouch)
                ),
            pointerEvents:
                !!t.PointerEvent &&
                'maxTouchPoints' in t.navigator &&
                t.navigator.maxTouchPoints > 0,
            observer: 'MutationObserver' in t || 'WebkitMutationObserver' in t,
            passiveListener: (function() {
                var e = !1;
                try {
                    var i = Object.defineProperty({}, 'passive', {
                        get: function() {
                            e = !0;
                        },
                    });
                    t.addEventListener('testPassiveListener', null, i);
                } catch (e) {}
                return e;
            })(),
            gestures: 'ongesturestart' in t,
        },
        l = function(e) {
            void 0 === e && (e = {});
            var t = this;
            (t.params = e),
                (t.eventsListeners = {}),
                t.params &&
                    t.params.on &&
                    Object.keys(t.params.on).forEach(function(e) {
                        t.on(e, t.params.on[e]);
                    });
        },
        d = {components: {configurable: !0}};
    (l.prototype.on = function(e, t, i) {
        var s = this;
        if ('function' != typeof t) return s;
        var a = i ? 'unshift' : 'push';
        return (
            e.split(' ').forEach(function(e) {
                s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t);
            }),
            s
        );
    }),
        (l.prototype.once = function(e, t, i) {
            var s = this;
            if ('function' != typeof t) return s;
            function a() {
                for (var i = [], r = arguments.length; r--; ) i[r] = arguments[r];
                s.off(e, a), a.f7proxy && delete a.f7proxy, t.apply(s, i);
            }
            return (a.f7proxy = t), s.on(e, a, i);
        }),
        (l.prototype.off = function(e, t) {
            var i = this;
            return i.eventsListeners
                ? (e.split(' ').forEach(function(e) {
                      void 0 === t
                          ? (i.eventsListeners[e] = [])
                          : i.eventsListeners[e] &&
                            i.eventsListeners[e].length &&
                            i.eventsListeners[e].forEach(function(s, a) {
                                (s === t || (s.f7proxy && s.f7proxy === t)) &&
                                    i.eventsListeners[e].splice(a, 1);
                            });
                  }),
                  i)
                : i;
        }),
        (l.prototype.emit = function() {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var i,
                s,
                a,
                r = this;
            if (!r.eventsListeners) return r;
            'string' == typeof e[0] || Array.isArray(e[0])
                ? ((i = e[0]), (s = e.slice(1, e.length)), (a = r))
                : ((i = e[0].events), (s = e[0].data), (a = e[0].context || r));
            var n = Array.isArray(i) ? i : i.split(' ');
            return (
                n.forEach(function(e) {
                    if (r.eventsListeners && r.eventsListeners[e]) {
                        var t = [];
                        r.eventsListeners[e].forEach(function(e) {
                            t.push(e);
                        }),
                            t.forEach(function(e) {
                                e.apply(a, s);
                            });
                    }
                }),
                r
            );
        }),
        (l.prototype.useModulesParams = function(e) {
            var t = this;
            t.modules &&
                Object.keys(t.modules).forEach(function(i) {
                    var s = t.modules[i];
                    s.params && n.extend(e, s.params);
                });
        }),
        (l.prototype.useModules = function(e) {
            void 0 === e && (e = {});
            var t = this;
            t.modules &&
                Object.keys(t.modules).forEach(function(i) {
                    var s = t.modules[i],
                        a = e[i] || {};
                    s.instance &&
                        Object.keys(s.instance).forEach(function(e) {
                            var i = s.instance[e];
                            t[e] = 'function' == typeof i ? i.bind(t) : i;
                        }),
                        s.on &&
                            t.on &&
                            Object.keys(s.on).forEach(function(e) {
                                t.on(e, s.on[e]);
                            }),
                        s.create && s.create.bind(t)(a);
                });
        }),
        (d.components.set = function(e) {
            this.use && this.use(e);
        }),
        (l.installModule = function(e) {
            for (var t = [], i = arguments.length - 1; i-- > 0; ) t[i] = arguments[i + 1];
            var s = this;
            s.prototype.modules || (s.prototype.modules = {});
            var a = e.name || Object.keys(s.prototype.modules).length + '_' + n.now();
            return (
                (s.prototype.modules[a] = e),
                e.proto &&
                    Object.keys(e.proto).forEach(function(t) {
                        s.prototype[t] = e.proto[t];
                    }),
                e.static &&
                    Object.keys(e.static).forEach(function(t) {
                        s[t] = e.static[t];
                    }),
                e.install && e.install.apply(s, t),
                s
            );
        }),
        (l.use = function(e) {
            for (var t = [], i = arguments.length - 1; i-- > 0; ) t[i] = arguments[i + 1];
            var s = this;
            return Array.isArray(e)
                ? (e.forEach(function(e) {
                      return s.installModule(e);
                  }),
                  s)
                : s.installModule.apply(s, [e].concat(t));
        }),
        Object.defineProperties(l, d);
    var h = {
        updateSize: function() {
            var e,
                t,
                i = this.$el;
            (e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth),
                (t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight),
                (0 === e && this.isHorizontal()) ||
                    (0 === t && this.isVertical()) ||
                    ((e =
                        e -
                        parseInt(i.css('padding-left'), 10) -
                        parseInt(i.css('padding-right'), 10)),
                    (t =
                        t -
                        parseInt(i.css('padding-top'), 10) -
                        parseInt(i.css('padding-bottom'), 10)),
                    n.extend(this, {width: e, height: t, size: this.isHorizontal() ? e : t}));
        },
        updateSlides: function() {
            var e = this.params,
                i = this.$wrapperEl,
                s = this.size,
                a = this.rtlTranslate,
                r = this.wrongRTL,
                o = this.virtual && e.virtual.enabled,
                l = o ? this.virtual.slides.length : this.slides.length,
                d = i.children('.' + this.params.slideClass),
                h = o ? this.virtual.slides.length : d.length,
                p = [],
                c = [],
                u = [];
            function v(t) {
                return !e.cssMode || t !== d.length - 1;
            }
            var f = e.slidesOffsetBefore;
            'function' == typeof f && (f = e.slidesOffsetBefore.call(this));
            var m = e.slidesOffsetAfter;
            'function' == typeof m && (m = e.slidesOffsetAfter.call(this));
            var g = this.snapGrid.length,
                b = this.snapGrid.length,
                w = e.spaceBetween,
                y = -f,
                x = 0,
                T = 0;
            if (void 0 !== s) {
                var E, S;
                'string' == typeof w &&
                    w.indexOf('%') >= 0 &&
                    (w = (parseFloat(w.replace('%', '')) / 100) * s),
                    (this.virtualSize = -w),
                    a
                        ? d.css({marginLeft: '', marginTop: ''})
                        : d.css({marginRight: '', marginBottom: ''}),
                    e.slidesPerColumn > 1 &&
                        ((E =
                            Math.floor(h / e.slidesPerColumn) === h / this.params.slidesPerColumn
                                ? h
                                : Math.ceil(h / e.slidesPerColumn) * e.slidesPerColumn),
                        'auto' !== e.slidesPerView &&
                            'row' === e.slidesPerColumnFill &&
                            (E = Math.max(E, e.slidesPerView * e.slidesPerColumn)));
                for (
                    var C,
                        M = e.slidesPerColumn,
                        P = E / M,
                        z = Math.floor(h / e.slidesPerColumn),
                        k = 0;
                    k < h;
                    k += 1
                ) {
                    S = 0;
                    var $ = d.eq(k);
                    if (e.slidesPerColumn > 1) {
                        var L = void 0,
                            I = void 0,
                            D = void 0;
                        if ('row' === e.slidesPerColumnFill && e.slidesPerGroup > 1) {
                            var O = Math.floor(k / (e.slidesPerGroup * e.slidesPerColumn)),
                                A = k - e.slidesPerColumn * e.slidesPerGroup * O,
                                G =
                                    0 === O
                                        ? e.slidesPerGroup
                                        : Math.min(
                                              Math.ceil((h - O * M * e.slidesPerGroup) / M),
                                              e.slidesPerGroup
                                          );
                            (L =
                                (I = A - (D = Math.floor(A / G)) * G + O * e.slidesPerGroup) +
                                (D * E) / M),
                                $.css({
                                    '-webkit-box-ordinal-group': L,
                                    '-moz-box-ordinal-group': L,
                                    '-ms-flex-order': L,
                                    '-webkit-order': L,
                                    order: L,
                                });
                        } else
                            'column' === e.slidesPerColumnFill
                                ? ((D = k - (I = Math.floor(k / M)) * M),
                                  (I > z || (I === z && D === M - 1)) &&
                                      (D += 1) >= M &&
                                      ((D = 0), (I += 1)))
                                : (I = k - (D = Math.floor(k / P)) * P);
                        $.css(
                            'margin-' + (this.isHorizontal() ? 'top' : 'left'),
                            0 !== D && e.spaceBetween && e.spaceBetween + 'px'
                        );
                    }
                    if ('none' !== $.css('display')) {
                        if ('auto' === e.slidesPerView) {
                            var B = t.getComputedStyle($[0], null),
                                H = $[0].style.transform,
                                N = $[0].style.webkitTransform;
                            if (
                                (H && ($[0].style.transform = 'none'),
                                N && ($[0].style.webkitTransform = 'none'),
                                e.roundLengths)
                            )
                                S = this.isHorizontal() ? $.outerWidth(!0) : $.outerHeight(!0);
                            else if (this.isHorizontal()) {
                                var X = parseFloat(B.getPropertyValue('width')),
                                    V = parseFloat(B.getPropertyValue('padding-left')),
                                    Y = parseFloat(B.getPropertyValue('padding-right')),
                                    F = parseFloat(B.getPropertyValue('margin-left')),
                                    W = parseFloat(B.getPropertyValue('margin-right')),
                                    R = B.getPropertyValue('box-sizing');
                                S = R && 'border-box' === R ? X + F + W : X + V + Y + F + W;
                            } else {
                                var q = parseFloat(B.getPropertyValue('height')),
                                    j = parseFloat(B.getPropertyValue('padding-top')),
                                    K = parseFloat(B.getPropertyValue('padding-bottom')),
                                    U = parseFloat(B.getPropertyValue('margin-top')),
                                    _ = parseFloat(B.getPropertyValue('margin-bottom')),
                                    Z = B.getPropertyValue('box-sizing');
                                S = Z && 'border-box' === Z ? q + U + _ : q + j + K + U + _;
                            }
                            H && ($[0].style.transform = H),
                                N && ($[0].style.webkitTransform = N),
                                e.roundLengths && (S = Math.floor(S));
                        } else
                            (S = (s - (e.slidesPerView - 1) * w) / e.slidesPerView),
                                e.roundLengths && (S = Math.floor(S)),
                                d[k] &&
                                    (this.isHorizontal()
                                        ? (d[k].style.width = S + 'px')
                                        : (d[k].style.height = S + 'px'));
                        d[k] && (d[k].swiperSlideSize = S),
                            u.push(S),
                            e.centeredSlides
                                ? ((y = y + S / 2 + x / 2 + w),
                                  0 === x && 0 !== k && (y = y - s / 2 - w),
                                  0 === k && (y = y - s / 2 - w),
                                  Math.abs(y) < 0.001 && (y = 0),
                                  e.roundLengths && (y = Math.floor(y)),
                                  T % e.slidesPerGroup == 0 && p.push(y),
                                  c.push(y))
                                : (e.roundLengths && (y = Math.floor(y)),
                                  (T - Math.min(this.params.slidesPerGroupSkip, T)) %
                                      this.params.slidesPerGroup ==
                                      0 && p.push(y),
                                  c.push(y),
                                  (y = y + S + w)),
                            (this.virtualSize += S + w),
                            (x = S),
                            (T += 1);
                    }
                }
                if (
                    ((this.virtualSize = Math.max(this.virtualSize, s) + m),
                    a &&
                        r &&
                        ('slide' === e.effect || 'coverflow' === e.effect) &&
                        i.css({width: this.virtualSize + e.spaceBetween + 'px'}),
                    e.setWrapperSize &&
                        (this.isHorizontal()
                            ? i.css({width: this.virtualSize + e.spaceBetween + 'px'})
                            : i.css({height: this.virtualSize + e.spaceBetween + 'px'})),
                    e.slidesPerColumn > 1 &&
                        ((this.virtualSize = (S + e.spaceBetween) * E),
                        (this.virtualSize =
                            Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween),
                        this.isHorizontal()
                            ? i.css({width: this.virtualSize + e.spaceBetween + 'px'})
                            : i.css({height: this.virtualSize + e.spaceBetween + 'px'}),
                        e.centeredSlides))
                ) {
                    C = [];
                    for (var Q = 0; Q < p.length; Q += 1) {
                        var J = p[Q];
                        e.roundLengths && (J = Math.floor(J)),
                            p[Q] < this.virtualSize + p[0] && C.push(J);
                    }
                    p = C;
                }
                if (!e.centeredSlides) {
                    C = [];
                    for (var ee = 0; ee < p.length; ee += 1) {
                        var te = p[ee];
                        e.roundLengths && (te = Math.floor(te)),
                            p[ee] <= this.virtualSize - s && C.push(te);
                    }
                    (p = C),
                        Math.floor(this.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 &&
                            p.push(this.virtualSize - s);
                }
                if (
                    (0 === p.length && (p = [0]),
                    0 !== e.spaceBetween &&
                        (this.isHorizontal()
                            ? a
                                ? d.filter(v).css({marginLeft: w + 'px'})
                                : d.filter(v).css({marginRight: w + 'px'})
                            : d.filter(v).css({marginBottom: w + 'px'})),
                    e.centeredSlides && e.centeredSlidesBounds)
                ) {
                    var ie = 0;
                    u.forEach(function(t) {
                        ie += t + (e.spaceBetween ? e.spaceBetween : 0);
                    });
                    var se = (ie -= e.spaceBetween) - s;
                    p = p.map(function(e) {
                        return e < 0 ? -f : e > se ? se + m : e;
                    });
                }
                if (e.centerInsufficientSlides) {
                    var ae = 0;
                    if (
                        (u.forEach(function(t) {
                            ae += t + (e.spaceBetween ? e.spaceBetween : 0);
                        }),
                        (ae -= e.spaceBetween) < s)
                    ) {
                        var re = (s - ae) / 2;
                        p.forEach(function(e, t) {
                            p[t] = e - re;
                        }),
                            c.forEach(function(e, t) {
                                c[t] = e + re;
                            });
                    }
                }
                n.extend(this, {slides: d, snapGrid: p, slidesGrid: c, slidesSizesGrid: u}),
                    h !== l && this.emit('slidesLengthChange'),
                    p.length !== g &&
                        (this.params.watchOverflow && this.checkOverflow(),
                        this.emit('snapGridLengthChange')),
                    c.length !== b && this.emit('slidesGridLengthChange'),
                    (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset();
            }
        },
        updateAutoHeight: function(e) {
            var t,
                i = [],
                s = 0;
            if (
                ('number' == typeof e
                    ? this.setTransition(e)
                    : !0 === e && this.setTransition(this.params.speed),
                'auto' !== this.params.slidesPerView && this.params.slidesPerView > 1)
            )
                for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
                    var a = this.activeIndex + t;
                    if (a > this.slides.length) break;
                    i.push(this.slides.eq(a)[0]);
                }
            else i.push(this.slides.eq(this.activeIndex)[0]);
            for (t = 0; t < i.length; t += 1)
                if (void 0 !== i[t]) {
                    var r = i[t].offsetHeight;
                    s = r > s ? r : s;
                }
            s && this.$wrapperEl.css('height', s + 'px');
        },
        updateSlidesOffset: function() {
            for (var e = this.slides, t = 0; t < e.length; t += 1)
                e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
        },
        updateSlidesProgress: function(e) {
            void 0 === e && (e = (this && this.translate) || 0);
            var t = this.params,
                i = this.slides,
                a = this.rtlTranslate;
            if (0 !== i.length) {
                void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                var r = -e;
                a && (r = e),
                    i.removeClass(t.slideVisibleClass),
                    (this.visibleSlidesIndexes = []),
                    (this.visibleSlides = []);
                for (var n = 0; n < i.length; n += 1) {
                    var o = i[n],
                        l =
                            (r +
                                (t.centeredSlides ? this.minTranslate() : 0) -
                                o.swiperSlideOffset) /
                            (o.swiperSlideSize + t.spaceBetween);
                    if (t.watchSlidesVisibility) {
                        var d = -(r - o.swiperSlideOffset),
                            h = d + this.slidesSizesGrid[n];
                        ((d >= 0 && d < this.size - 1) ||
                            (h > 1 && h <= this.size) ||
                            (d <= 0 && h >= this.size)) &&
                            (this.visibleSlides.push(o),
                            this.visibleSlidesIndexes.push(n),
                            i.eq(n).addClass(t.slideVisibleClass));
                    }
                    o.progress = a ? -l : l;
                }
                this.visibleSlides = s(this.visibleSlides);
            }
        },
        updateProgress: function(e) {
            if (void 0 === e) {
                var t = this.rtlTranslate ? -1 : 1;
                e = (this && this.translate && this.translate * t) || 0;
            }
            var i = this.params,
                s = this.maxTranslate() - this.minTranslate(),
                a = this.progress,
                r = this.isBeginning,
                o = this.isEnd,
                l = r,
                d = o;
            0 === s
                ? ((a = 0), (r = !0), (o = !0))
                : ((r = (a = (e - this.minTranslate()) / s) <= 0), (o = a >= 1)),
                n.extend(this, {progress: a, isBeginning: r, isEnd: o}),
                (i.watchSlidesProgress || i.watchSlidesVisibility) && this.updateSlidesProgress(e),
                r && !l && this.emit('reachBeginning toEdge'),
                o && !d && this.emit('reachEnd toEdge'),
                ((l && !r) || (d && !o)) && this.emit('fromEdge'),
                this.emit('progress', a);
        },
        updateSlidesClasses: function() {
            var e,
                t = this.slides,
                i = this.params,
                s = this.$wrapperEl,
                a = this.activeIndex,
                r = this.realIndex,
                n = this.virtual && i.virtual.enabled;
            t.removeClass(
                i.slideActiveClass +
                    ' ' +
                    i.slideNextClass +
                    ' ' +
                    i.slidePrevClass +
                    ' ' +
                    i.slideDuplicateActiveClass +
                    ' ' +
                    i.slideDuplicateNextClass +
                    ' ' +
                    i.slideDuplicatePrevClass
            ),
                (e = n
                    ? this.$wrapperEl.find(
                          '.' + i.slideClass + '[data-swiper-slide-index="' + a + '"]'
                      )
                    : t.eq(a)).addClass(i.slideActiveClass),
                i.loop &&
                    (e.hasClass(i.slideDuplicateClass)
                        ? s
                              .children(
                                  '.' +
                                      i.slideClass +
                                      ':not(.' +
                                      i.slideDuplicateClass +
                                      ')[data-swiper-slide-index="' +
                                      r +
                                      '"]'
                              )
                              .addClass(i.slideDuplicateActiveClass)
                        : s
                              .children(
                                  '.' +
                                      i.slideClass +
                                      '.' +
                                      i.slideDuplicateClass +
                                      '[data-swiper-slide-index="' +
                                      r +
                                      '"]'
                              )
                              .addClass(i.slideDuplicateActiveClass));
            var o = e
                .nextAll('.' + i.slideClass)
                .eq(0)
                .addClass(i.slideNextClass);
            i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
            var l = e
                .prevAll('.' + i.slideClass)
                .eq(0)
                .addClass(i.slidePrevClass);
            i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass),
                i.loop &&
                    (o.hasClass(i.slideDuplicateClass)
                        ? s
                              .children(
                                  '.' +
                                      i.slideClass +
                                      ':not(.' +
                                      i.slideDuplicateClass +
                                      ')[data-swiper-slide-index="' +
                                      o.attr('data-swiper-slide-index') +
                                      '"]'
                              )
                              .addClass(i.slideDuplicateNextClass)
                        : s
                              .children(
                                  '.' +
                                      i.slideClass +
                                      '.' +
                                      i.slideDuplicateClass +
                                      '[data-swiper-slide-index="' +
                                      o.attr('data-swiper-slide-index') +
                                      '"]'
                              )
                              .addClass(i.slideDuplicateNextClass),
                    l.hasClass(i.slideDuplicateClass)
                        ? s
                              .children(
                                  '.' +
                                      i.slideClass +
                                      ':not(.' +
                                      i.slideDuplicateClass +
                                      ')[data-swiper-slide-index="' +
                                      l.attr('data-swiper-slide-index') +
                                      '"]'
                              )
                              .addClass(i.slideDuplicatePrevClass)
                        : s
                              .children(
                                  '.' +
                                      i.slideClass +
                                      '.' +
                                      i.slideDuplicateClass +
                                      '[data-swiper-slide-index="' +
                                      l.attr('data-swiper-slide-index') +
                                      '"]'
                              )
                              .addClass(i.slideDuplicatePrevClass));
        },
        updateActiveIndex: function(e) {
            var t,
                i = this.rtlTranslate ? this.translate : -this.translate,
                s = this.slidesGrid,
                a = this.snapGrid,
                r = this.params,
                o = this.activeIndex,
                l = this.realIndex,
                d = this.snapIndex,
                h = e;
            if (void 0 === h) {
                for (var p = 0; p < s.length; p += 1)
                    void 0 !== s[p + 1]
                        ? i >= s[p] && i < s[p + 1] - (s[p + 1] - s[p]) / 2
                            ? (h = p)
                            : i >= s[p] && i < s[p + 1] && (h = p + 1)
                        : i >= s[p] && (h = p);
                r.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0);
            }
            if (a.indexOf(i) >= 0) t = a.indexOf(i);
            else {
                var c = Math.min(r.slidesPerGroupSkip, h);
                t = c + Math.floor((h - c) / r.slidesPerGroup);
            }
            if ((t >= a.length && (t = a.length - 1), h !== o)) {
                var u = parseInt(this.slides.eq(h).attr('data-swiper-slide-index') || h, 10);
                n.extend(this, {snapIndex: t, realIndex: u, previousIndex: o, activeIndex: h}),
                    this.emit('activeIndexChange'),
                    this.emit('snapIndexChange'),
                    l !== u && this.emit('realIndexChange'),
                    (this.initialized || this.runCallbacksOnInit) && this.emit('slideChange');
            } else t !== d && ((this.snapIndex = t), this.emit('snapIndexChange'));
        },
        updateClickedSlide: function(e) {
            var t = this.params,
                i = s(e.target).closest('.' + t.slideClass)[0],
                a = !1;
            if (i) for (var r = 0; r < this.slides.length; r += 1) this.slides[r] === i && (a = !0);
            if (!i || !a) return (this.clickedSlide = void 0), void (this.clickedIndex = void 0);
            (this.clickedSlide = i),
                this.virtual && this.params.virtual.enabled
                    ? (this.clickedIndex = parseInt(s(i).attr('data-swiper-slide-index'), 10))
                    : (this.clickedIndex = s(i).index()),
                t.slideToClickedSlide &&
                    void 0 !== this.clickedIndex &&
                    this.clickedIndex !== this.activeIndex &&
                    this.slideToClickedSlide();
        },
    };
    var p = {
        getTranslate: function(e) {
            void 0 === e && (e = this.isHorizontal() ? 'x' : 'y');
            var t = this.params,
                i = this.rtlTranslate,
                s = this.translate,
                a = this.$wrapperEl;
            if (t.virtualTranslate) return i ? -s : s;
            if (t.cssMode) return s;
            var r = n.getTranslate(a[0], e);
            return i && (r = -r), r || 0;
        },
        setTranslate: function(e, t) {
            var i = this.rtlTranslate,
                s = this.params,
                a = this.$wrapperEl,
                r = this.wrapperEl,
                n = this.progress,
                o = 0,
                l = 0;
            this.isHorizontal() ? (o = i ? -e : e) : (l = e),
                s.roundLengths && ((o = Math.floor(o)), (l = Math.floor(l))),
                s.cssMode
                    ? (r[this.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = this.isHorizontal()
                          ? -o
                          : -l)
                    : s.virtualTranslate ||
                      a.transform('translate3d(' + o + 'px, ' + l + 'px, 0px)'),
                (this.previousTranslate = this.translate),
                (this.translate = this.isHorizontal() ? o : l);
            var d = this.maxTranslate() - this.minTranslate();
            (0 === d ? 0 : (e - this.minTranslate()) / d) !== n && this.updateProgress(e),
                this.emit('setTranslate', this.translate, t);
        },
        minTranslate: function() {
            return -this.snapGrid[0];
        },
        maxTranslate: function() {
            return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function(e, t, i, s, a) {
            var r;
            void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === i && (i = !0),
                void 0 === s && (s = !0);
            var n = this,
                o = n.params,
                l = n.wrapperEl;
            if (n.animating && o.preventInteractionOnTransition) return !1;
            var d,
                h = n.minTranslate(),
                p = n.maxTranslate();
            if (((d = s && e > h ? h : s && e < p ? p : e), n.updateProgress(d), o.cssMode)) {
                var c = n.isHorizontal();
                return (
                    0 === t
                        ? (l[c ? 'scrollLeft' : 'scrollTop'] = -d)
                        : l.scrollTo
                        ? l.scrollTo(
                              (((r = {})[c ? 'left' : 'top'] = -d), (r.behavior = 'smooth'), r)
                          )
                        : (l[c ? 'scrollLeft' : 'scrollTop'] = -d),
                    !0
                );
            }
            return (
                0 === t
                    ? (n.setTransition(0),
                      n.setTranslate(d),
                      i && (n.emit('beforeTransitionStart', t, a), n.emit('transitionEnd')))
                    : (n.setTransition(t),
                      n.setTranslate(d),
                      i && (n.emit('beforeTransitionStart', t, a), n.emit('transitionStart')),
                      n.animating ||
                          ((n.animating = !0),
                          n.onTranslateToWrapperTransitionEnd ||
                              (n.onTranslateToWrapperTransitionEnd = function(e) {
                                  n &&
                                      !n.destroyed &&
                                      e.target === this &&
                                      (n.$wrapperEl[0].removeEventListener(
                                          'transitionend',
                                          n.onTranslateToWrapperTransitionEnd
                                      ),
                                      n.$wrapperEl[0].removeEventListener(
                                          'webkitTransitionEnd',
                                          n.onTranslateToWrapperTransitionEnd
                                      ),
                                      (n.onTranslateToWrapperTransitionEnd = null),
                                      delete n.onTranslateToWrapperTransitionEnd,
                                      i && n.emit('transitionEnd'));
                              }),
                          n.$wrapperEl[0].addEventListener(
                              'transitionend',
                              n.onTranslateToWrapperTransitionEnd
                          ),
                          n.$wrapperEl[0].addEventListener(
                              'webkitTransitionEnd',
                              n.onTranslateToWrapperTransitionEnd
                          ))),
                !0
            );
        },
    };
    var c = {
        setTransition: function(e, t) {
            this.params.cssMode || this.$wrapperEl.transition(e), this.emit('setTransition', e, t);
        },
        transitionStart: function(e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex,
                s = this.params,
                a = this.previousIndex;
            if (!s.cssMode) {
                s.autoHeight && this.updateAutoHeight();
                var r = t;
                if (
                    (r || (r = i > a ? 'next' : i < a ? 'prev' : 'reset'),
                    this.emit('transitionStart'),
                    e && i !== a)
                ) {
                    if ('reset' === r) return void this.emit('slideResetTransitionStart');
                    this.emit('slideChangeTransitionStart'),
                        'next' === r
                            ? this.emit('slideNextTransitionStart')
                            : this.emit('slidePrevTransitionStart');
                }
            }
        },
        transitionEnd: function(e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex,
                s = this.previousIndex,
                a = this.params;
            if (((this.animating = !1), !a.cssMode)) {
                this.setTransition(0);
                var r = t;
                if (
                    (r || (r = i > s ? 'next' : i < s ? 'prev' : 'reset'),
                    this.emit('transitionEnd'),
                    e && i !== s)
                ) {
                    if ('reset' === r) return void this.emit('slideResetTransitionEnd');
                    this.emit('slideChangeTransitionEnd'),
                        'next' === r
                            ? this.emit('slideNextTransitionEnd')
                            : this.emit('slidePrevTransitionEnd');
                }
            }
        },
    };
    var u = {
        slideTo: function(e, t, i, s) {
            var a;
            void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === i && (i = !0);
            var r = this,
                n = e;
            n < 0 && (n = 0);
            var o = r.params,
                l = r.snapGrid,
                d = r.slidesGrid,
                h = r.previousIndex,
                p = r.activeIndex,
                c = r.rtlTranslate,
                u = r.wrapperEl;
            if (r.animating && o.preventInteractionOnTransition) return !1;
            var v = Math.min(r.params.slidesPerGroupSkip, n),
                f = v + Math.floor((n - v) / r.params.slidesPerGroup);
            f >= l.length && (f = l.length - 1),
                (p || o.initialSlide || 0) === (h || 0) && i && r.emit('beforeSlideChangeStart');
            var m,
                g = -l[f];
            if ((r.updateProgress(g), o.normalizeSlideIndex))
                for (var b = 0; b < d.length; b += 1)
                    -Math.floor(100 * g) >= Math.floor(100 * d[b]) && (n = b);
            if (r.initialized && n !== p) {
                if (!r.allowSlideNext && g < r.translate && g < r.minTranslate()) return !1;
                if (!r.allowSlidePrev && g > r.translate && g > r.maxTranslate() && (p || 0) !== n)
                    return !1;
            }
            if (
                ((m = n > p ? 'next' : n < p ? 'prev' : 'reset'),
                (c && -g === r.translate) || (!c && g === r.translate))
            )
                return (
                    r.updateActiveIndex(n),
                    o.autoHeight && r.updateAutoHeight(),
                    r.updateSlidesClasses(),
                    'slide' !== o.effect && r.setTranslate(g),
                    'reset' !== m && (r.transitionStart(i, m), r.transitionEnd(i, m)),
                    !1
                );
            if (o.cssMode) {
                var w = r.isHorizontal();
                return (
                    0 === t
                        ? (u[w ? 'scrollLeft' : 'scrollTop'] = -g)
                        : u.scrollTo
                        ? u.scrollTo(
                              (((a = {})[w ? 'left' : 'top'] = -g), (a.behavior = 'smooth'), a)
                          )
                        : (u[w ? 'scrollLeft' : 'scrollTop'] = -g),
                    !0
                );
            }
            return (
                0 === t
                    ? (r.setTransition(0),
                      r.setTranslate(g),
                      r.updateActiveIndex(n),
                      r.updateSlidesClasses(),
                      r.emit('beforeTransitionStart', t, s),
                      r.transitionStart(i, m),
                      r.transitionEnd(i, m))
                    : (r.setTransition(t),
                      r.setTranslate(g),
                      r.updateActiveIndex(n),
                      r.updateSlidesClasses(),
                      r.emit('beforeTransitionStart', t, s),
                      r.transitionStart(i, m),
                      r.animating ||
                          ((r.animating = !0),
                          r.onSlideToWrapperTransitionEnd ||
                              (r.onSlideToWrapperTransitionEnd = function(e) {
                                  r &&
                                      !r.destroyed &&
                                      e.target === this &&
                                      (r.$wrapperEl[0].removeEventListener(
                                          'transitionend',
                                          r.onSlideToWrapperTransitionEnd
                                      ),
                                      r.$wrapperEl[0].removeEventListener(
                                          'webkitTransitionEnd',
                                          r.onSlideToWrapperTransitionEnd
                                      ),
                                      (r.onSlideToWrapperTransitionEnd = null),
                                      delete r.onSlideToWrapperTransitionEnd,
                                      r.transitionEnd(i, m));
                              }),
                          r.$wrapperEl[0].addEventListener(
                              'transitionend',
                              r.onSlideToWrapperTransitionEnd
                          ),
                          r.$wrapperEl[0].addEventListener(
                              'webkitTransitionEnd',
                              r.onSlideToWrapperTransitionEnd
                          ))),
                !0
            );
        },
        slideToLoop: function(e, t, i, s) {
            void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === i && (i = !0);
            var a = e;
            return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s);
        },
        slideNext: function(e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var s = this.params,
                a = this.animating,
                r = this.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
            if (s.loop) {
                if (a) return !1;
                this.loopFix(), (this._clientLeft = this.$wrapperEl[0].clientLeft);
            }
            return this.slideTo(this.activeIndex + r, e, t, i);
        },
        slidePrev: function(e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var s = this.params,
                a = this.animating,
                r = this.snapGrid,
                n = this.slidesGrid,
                o = this.rtlTranslate;
            if (s.loop) {
                if (a) return !1;
                this.loopFix(), (this._clientLeft = this.$wrapperEl[0].clientLeft);
            }
            function l(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
            }
            var d,
                h = l(o ? this.translate : -this.translate),
                p = r.map(function(e) {
                    return l(e);
                }),
                c =
                    (n.map(function(e) {
                        return l(e);
                    }),
                    r[p.indexOf(h)],
                    r[p.indexOf(h) - 1]);
            return (
                void 0 === c &&
                    s.cssMode &&
                    r.forEach(function(e) {
                        !c && h >= e && (c = e);
                    }),
                void 0 !== c && (d = n.indexOf(c)) < 0 && (d = this.activeIndex - 1),
                this.slideTo(d, e, t, i)
            );
        },
        slideReset: function(e, t, i) {
            return (
                void 0 === e && (e = this.params.speed),
                void 0 === t && (t = !0),
                this.slideTo(this.activeIndex, e, t, i)
            );
        },
        slideToClosest: function(e, t, i, s) {
            void 0 === e && (e = this.params.speed),
                void 0 === t && (t = !0),
                void 0 === s && (s = 0.5);
            var a = this.activeIndex,
                r = Math.min(this.params.slidesPerGroupSkip, a),
                n = r + Math.floor((a - r) / this.params.slidesPerGroup),
                o = this.rtlTranslate ? this.translate : -this.translate;
            if (o >= this.snapGrid[n]) {
                var l = this.snapGrid[n];
                o - l > (this.snapGrid[n + 1] - l) * s && (a += this.params.slidesPerGroup);
            } else {
                var d = this.snapGrid[n - 1];
                o - d <= (this.snapGrid[n] - d) * s && (a -= this.params.slidesPerGroup);
            }
            return (
                (a = Math.max(a, 0)),
                (a = Math.min(a, this.slidesGrid.length - 1)),
                this.slideTo(a, e, t, i)
            );
        },
        slideToClickedSlide: function() {
            var e,
                t = this,
                i = t.params,
                a = t.$wrapperEl,
                r = 'auto' === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
                o = t.clickedIndex;
            if (i.loop) {
                if (t.animating) return;
                (e = parseInt(s(t.clickedSlide).attr('data-swiper-slide-index'), 10)),
                    i.centeredSlides
                        ? o < t.loopedSlides - r / 2 || o > t.slides.length - t.loopedSlides + r / 2
                            ? (t.loopFix(),
                              (o = a
                                  .children(
                                      '.' +
                                          i.slideClass +
                                          '[data-swiper-slide-index="' +
                                          e +
                                          '"]:not(.' +
                                          i.slideDuplicateClass +
                                          ')'
                                  )
                                  .eq(0)
                                  .index()),
                              n.nextTick(function() {
                                  t.slideTo(o);
                              }))
                            : t.slideTo(o)
                        : o > t.slides.length - r
                        ? (t.loopFix(),
                          (o = a
                              .children(
                                  '.' +
                                      i.slideClass +
                                      '[data-swiper-slide-index="' +
                                      e +
                                      '"]:not(.' +
                                      i.slideDuplicateClass +
                                      ')'
                              )
                              .eq(0)
                              .index()),
                          n.nextTick(function() {
                              t.slideTo(o);
                          }))
                        : t.slideTo(o);
            } else t.slideTo(o);
        },
    };
    var v = {
        loopCreate: function() {
            var t = this,
                i = t.params,
                a = t.$wrapperEl;
            a.children('.' + i.slideClass + '.' + i.slideDuplicateClass).remove();
            var r = a.children('.' + i.slideClass);
            if (i.loopFillGroupWithBlank) {
                var n = i.slidesPerGroup - (r.length % i.slidesPerGroup);
                if (n !== i.slidesPerGroup) {
                    for (var o = 0; o < n; o += 1) {
                        var l = s(e.createElement('div')).addClass(
                            i.slideClass + ' ' + i.slideBlankClass
                        );
                        a.append(l);
                    }
                    r = a.children('.' + i.slideClass);
                }
            }
            'auto' !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length),
                (t.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10))),
                (t.loopedSlides += i.loopAdditionalSlides),
                t.loopedSlides > r.length && (t.loopedSlides = r.length);
            var d = [],
                h = [];
            r.each(function(e, i) {
                var a = s(i);
                e < t.loopedSlides && h.push(i),
                    e < r.length && e >= r.length - t.loopedSlides && d.push(i),
                    a.attr('data-swiper-slide-index', e);
            });
            for (var p = 0; p < h.length; p += 1)
                a.append(s(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
            for (var c = d.length - 1; c >= 0; c -= 1)
                a.prepend(s(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass));
        },
        loopFix: function() {
            this.emit('beforeLoopFix');
            var e,
                t = this.activeIndex,
                i = this.slides,
                s = this.loopedSlides,
                a = this.allowSlidePrev,
                r = this.allowSlideNext,
                n = this.snapGrid,
                o = this.rtlTranslate;
            (this.allowSlidePrev = !0), (this.allowSlideNext = !0);
            var l = -n[t] - this.getTranslate();
            if (t < s)
                (e = i.length - 3 * s + t),
                    (e += s),
                    this.slideTo(e, 0, !1, !0) &&
                        0 !== l &&
                        this.setTranslate((o ? -this.translate : this.translate) - l);
            else if (t >= i.length - s) {
                (e = -i.length + t + s),
                    (e += s),
                    this.slideTo(e, 0, !1, !0) &&
                        0 !== l &&
                        this.setTranslate((o ? -this.translate : this.translate) - l);
            }
            (this.allowSlidePrev = a), (this.allowSlideNext = r), this.emit('loopFix');
        },
        loopDestroy: function() {
            var e = this.$wrapperEl,
                t = this.params,
                i = this.slides;
            e
                .children(
                    '.' +
                        t.slideClass +
                        '.' +
                        t.slideDuplicateClass +
                        ',.' +
                        t.slideClass +
                        '.' +
                        t.slideBlankClass
                )
                .remove(),
                i.removeAttr('data-swiper-slide-index');
        },
    };
    var f = {
        setGrabCursor: function(e) {
            if (
                !(
                    o.touch ||
                    !this.params.simulateTouch ||
                    (this.params.watchOverflow && this.isLocked) ||
                    this.params.cssMode
                )
            ) {
                var t = this.el;
                (t.style.cursor = 'move'),
                    (t.style.cursor = e ? '-webkit-grabbing' : '-webkit-grab'),
                    (t.style.cursor = e ? '-moz-grabbin' : '-moz-grab'),
                    (t.style.cursor = e ? 'grabbing' : 'grab');
            }
        },
        unsetGrabCursor: function() {
            o.touch ||
                (this.params.watchOverflow && this.isLocked) ||
                this.params.cssMode ||
                (this.el.style.cursor = '');
        },
    };
    var m,
        g,
        b,
        w,
        y,
        x,
        T,
        E,
        S,
        C,
        M,
        P,
        z,
        k,
        $,
        L = {
            appendSlide: function(e) {
                var t = this.$wrapperEl,
                    i = this.params;
                if ((i.loop && this.loopDestroy(), 'object' == typeof e && 'length' in e))
                    for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]);
                else t.append(e);
                i.loop && this.loopCreate(), (i.observer && o.observer) || this.update();
            },
            prependSlide: function(e) {
                var t = this.params,
                    i = this.$wrapperEl,
                    s = this.activeIndex;
                t.loop && this.loopDestroy();
                var a = s + 1;
                if ('object' == typeof e && 'length' in e) {
                    for (var r = 0; r < e.length; r += 1) e[r] && i.prepend(e[r]);
                    a = s + e.length;
                } else i.prepend(e);
                t.loop && this.loopCreate(),
                    (t.observer && o.observer) || this.update(),
                    this.slideTo(a, 0, !1);
            },
            addSlide: function(e, t) {
                var i = this.$wrapperEl,
                    s = this.params,
                    a = this.activeIndex;
                s.loop &&
                    ((a -= this.loopedSlides),
                    this.loopDestroy(),
                    (this.slides = i.children('.' + s.slideClass)));
                var r = this.slides.length;
                if (e <= 0) this.prependSlide(t);
                else if (e >= r) this.appendSlide(t);
                else {
                    for (var n = a > e ? a + 1 : a, l = [], d = r - 1; d >= e; d -= 1) {
                        var h = this.slides.eq(d);
                        h.remove(), l.unshift(h);
                    }
                    if ('object' == typeof t && 'length' in t) {
                        for (var p = 0; p < t.length; p += 1) t[p] && i.append(t[p]);
                        n = a > e ? a + t.length : a;
                    } else i.append(t);
                    for (var c = 0; c < l.length; c += 1) i.append(l[c]);
                    s.loop && this.loopCreate(),
                        (s.observer && o.observer) || this.update(),
                        s.loop
                            ? this.slideTo(n + this.loopedSlides, 0, !1)
                            : this.slideTo(n, 0, !1);
                }
            },
            removeSlide: function(e) {
                var t = this.params,
                    i = this.$wrapperEl,
                    s = this.activeIndex;
                t.loop &&
                    ((s -= this.loopedSlides),
                    this.loopDestroy(),
                    (this.slides = i.children('.' + t.slideClass)));
                var a,
                    r = s;
                if ('object' == typeof e && 'length' in e) {
                    for (var n = 0; n < e.length; n += 1)
                        (a = e[n]), this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1);
                    r = Math.max(r, 0);
                } else
                    (a = e),
                        this.slides[a] && this.slides.eq(a).remove(),
                        a < r && (r -= 1),
                        (r = Math.max(r, 0));
                t.loop && this.loopCreate(),
                    (t.observer && o.observer) || this.update(),
                    t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1);
            },
            removeAllSlides: function() {
                for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                this.removeSlide(e);
            },
        },
        I =
            ((m = t.navigator.platform),
            (g = t.navigator.userAgent),
            (b = {
                ios: !1,
                android: !1,
                androidChrome: !1,
                desktop: !1,
                iphone: !1,
                ipod: !1,
                ipad: !1,
                edge: !1,
                ie: !1,
                firefox: !1,
                macos: !1,
                windows: !1,
                cordova: !(!t.cordova && !t.phonegap),
                phonegap: !(!t.cordova && !t.phonegap),
                electron: !1,
            }),
            (w = t.screen.width),
            (y = t.screen.height),
            (x = g.match(/(Android);?[\s\/]+([\d.]+)?/)),
            (T = g.match(/(iPad).*OS\s([\d_]+)/)),
            (E = g.match(/(iPod)(.*OS\s([\d_]+))?/)),
            (S = !T && g.match(/(iPhone\sOS|iOS)\s([\d_]+)/)),
            (C = g.indexOf('MSIE ') >= 0 || g.indexOf('Trident/') >= 0),
            (M = g.indexOf('Edge/') >= 0),
            (P = g.indexOf('Gecko/') >= 0 && g.indexOf('Firefox/') >= 0),
            (z = 'Win32' === m),
            (k = g.toLowerCase().indexOf('electron') >= 0),
            ($ = 'MacIntel' === m),
            !T &&
                $ &&
                o.touch &&
                ((1024 === w && 1366 === y) ||
                    (834 === w && 1194 === y) ||
                    (834 === w && 1112 === y) ||
                    (768 === w && 1024 === y)) &&
                ((T = g.match(/(Version)\/([\d.]+)/)), ($ = !1)),
            (b.ie = C),
            (b.edge = M),
            (b.firefox = P),
            x &&
                !z &&
                ((b.os = 'android'),
                (b.osVersion = x[2]),
                (b.android = !0),
                (b.androidChrome = g.toLowerCase().indexOf('chrome') >= 0)),
            (T || S || E) && ((b.os = 'ios'), (b.ios = !0)),
            S && !E && ((b.osVersion = S[2].replace(/_/g, '.')), (b.iphone = !0)),
            T && ((b.osVersion = T[2].replace(/_/g, '.')), (b.ipad = !0)),
            E && ((b.osVersion = E[3] ? E[3].replace(/_/g, '.') : null), (b.ipod = !0)),
            b.ios &&
                b.osVersion &&
                g.indexOf('Version/') >= 0 &&
                '10' === b.osVersion.split('.')[0] &&
                (b.osVersion = g
                    .toLowerCase()
                    .split('version/')[1]
                    .split(' ')[0]),
            (b.webView =
                !(
                    !(S || T || E) ||
                    (!g.match(/.*AppleWebKit(?!.*Safari)/i) && !t.navigator.standalone)
                ) ||
                (t.matchMedia && t.matchMedia('(display-mode: standalone)').matches)),
            (b.webview = b.webView),
            (b.standalone = b.webView),
            (b.desktop = !(b.ios || b.android) || k),
            b.desktop &&
                ((b.electron = k),
                (b.macos = $),
                (b.windows = z),
                b.macos && (b.os = 'macos'),
                b.windows && (b.os = 'windows')),
            (b.pixelRatio = t.devicePixelRatio || 1),
            b);
    function D(i) {
        var a = this.touchEventsData,
            r = this.params,
            o = this.touches;
        if (!this.animating || !r.preventInteractionOnTransition) {
            var l = i;
            l.originalEvent && (l = l.originalEvent);
            var d = s(l.target);
            if (
                ('wrapper' !== r.touchEventsTarget || d.closest(this.wrapperEl).length) &&
                ((a.isTouchEvent = 'touchstart' === l.type),
                (a.isTouchEvent || !('which' in l) || 3 !== l.which) &&
                    !(
                        (!a.isTouchEvent && 'button' in l && l.button > 0) ||
                        (a.isTouched && a.isMoved)
                    ))
            )
                if (
                    r.noSwiping &&
                    d.closest(r.noSwipingSelector ? r.noSwipingSelector : '.' + r.noSwipingClass)[0]
                )
                    this.allowClick = !0;
                else if (!r.swipeHandler || d.closest(r.swipeHandler)[0]) {
                    (o.currentX = 'touchstart' === l.type ? l.targetTouches[0].pageX : l.pageX),
                        (o.currentY = 'touchstart' === l.type ? l.targetTouches[0].pageY : l.pageY);
                    var h = o.currentX,
                        p = o.currentY,
                        c = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
                        u = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
                    if (!c || !(h <= u || h >= t.screen.width - u)) {
                        if (
                            (n.extend(a, {
                                isTouched: !0,
                                isMoved: !1,
                                allowTouchCallbacks: !0,
                                isScrolling: void 0,
                                startMoving: void 0,
                            }),
                            (o.startX = h),
                            (o.startY = p),
                            (a.touchStartTime = n.now()),
                            (this.allowClick = !0),
                            this.updateSize(),
                            (this.swipeDirection = void 0),
                            r.threshold > 0 && (a.allowThresholdMove = !1),
                            'touchstart' !== l.type)
                        ) {
                            var v = !0;
                            d.is(a.formElements) && (v = !1),
                                e.activeElement &&
                                    s(e.activeElement).is(a.formElements) &&
                                    e.activeElement !== d[0] &&
                                    e.activeElement.blur();
                            var f = v && this.allowTouchMove && r.touchStartPreventDefault;
                            (r.touchStartForcePreventDefault || f) && l.preventDefault();
                        }
                        this.emit('touchStart', l);
                    }
                }
        }
    }
    function O(t) {
        var i = this.touchEventsData,
            a = this.params,
            r = this.touches,
            o = this.rtlTranslate,
            l = t;
        if ((l.originalEvent && (l = l.originalEvent), i.isTouched)) {
            if (!i.isTouchEvent || 'mousemove' !== l.type) {
                var d =
                        'touchmove' === l.type &&
                        l.targetTouches &&
                        (l.targetTouches[0] || l.changedTouches[0]),
                    h = 'touchmove' === l.type ? d.pageX : l.pageX,
                    p = 'touchmove' === l.type ? d.pageY : l.pageY;
                if (l.preventedByNestedSwiper) return (r.startX = h), void (r.startY = p);
                if (!this.allowTouchMove)
                    return (
                        (this.allowClick = !1),
                        void (
                            i.isTouched &&
                            (n.extend(r, {startX: h, startY: p, currentX: h, currentY: p}),
                            (i.touchStartTime = n.now()))
                        )
                    );
                if (i.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
                    if (this.isVertical()) {
                        if (
                            (p < r.startY && this.translate <= this.maxTranslate()) ||
                            (p > r.startY && this.translate >= this.minTranslate())
                        )
                            return (i.isTouched = !1), void (i.isMoved = !1);
                    } else if (
                        (h < r.startX && this.translate <= this.maxTranslate()) ||
                        (h > r.startX && this.translate >= this.minTranslate())
                    )
                        return;
                if (
                    i.isTouchEvent &&
                    e.activeElement &&
                    l.target === e.activeElement &&
                    s(l.target).is(i.formElements)
                )
                    return (i.isMoved = !0), void (this.allowClick = !1);
                if (
                    (i.allowTouchCallbacks && this.emit('touchMove', l),
                    !(l.targetTouches && l.targetTouches.length > 1))
                ) {
                    (r.currentX = h), (r.currentY = p);
                    var c = r.currentX - r.startX,
                        u = r.currentY - r.startY;
                    if (
                        !(
                            this.params.threshold &&
                            Math.sqrt(Math.pow(c, 2) + Math.pow(u, 2)) < this.params.threshold
                        )
                    ) {
                        var v;
                        if (void 0 === i.isScrolling)
                            (this.isHorizontal() && r.currentY === r.startY) ||
                            (this.isVertical() && r.currentX === r.startX)
                                ? (i.isScrolling = !1)
                                : c * c + u * u >= 25 &&
                                  ((v = (180 * Math.atan2(Math.abs(u), Math.abs(c))) / Math.PI),
                                  (i.isScrolling = this.isHorizontal()
                                      ? v > a.touchAngle
                                      : 90 - v > a.touchAngle));
                        if (
                            (i.isScrolling && this.emit('touchMoveOpposite', l),
                            void 0 === i.startMoving &&
                                ((r.currentX === r.startX && r.currentY === r.startY) ||
                                    (i.startMoving = !0)),
                            i.isScrolling)
                        )
                            i.isTouched = !1;
                        else if (i.startMoving) {
                            (this.allowClick = !1),
                                a.cssMode || l.preventDefault(),
                                a.touchMoveStopPropagation && !a.nested && l.stopPropagation(),
                                i.isMoved ||
                                    (a.loop && this.loopFix(),
                                    (i.startTranslate = this.getTranslate()),
                                    this.setTransition(0),
                                    this.animating &&
                                        this.$wrapperEl.trigger(
                                            'webkitTransitionEnd transitionend'
                                        ),
                                    (i.allowMomentumBounce = !1),
                                    !a.grabCursor ||
                                        (!0 !== this.allowSlideNext &&
                                            !0 !== this.allowSlidePrev) ||
                                        this.setGrabCursor(!0),
                                    this.emit('sliderFirstMove', l)),
                                this.emit('sliderMove', l),
                                (i.isMoved = !0);
                            var f = this.isHorizontal() ? c : u;
                            (r.diff = f),
                                (f *= a.touchRatio),
                                o && (f = -f),
                                (this.swipeDirection = f > 0 ? 'prev' : 'next'),
                                (i.currentTranslate = f + i.startTranslate);
                            var m = !0,
                                g = a.resistanceRatio;
                            if (
                                (a.touchReleaseOnEdges && (g = 0),
                                f > 0 && i.currentTranslate > this.minTranslate()
                                    ? ((m = !1),
                                      a.resistance &&
                                          (i.currentTranslate =
                                              this.minTranslate() -
                                              1 +
                                              Math.pow(
                                                  -this.minTranslate() + i.startTranslate + f,
                                                  g
                                              )))
                                    : f < 0 &&
                                      i.currentTranslate < this.maxTranslate() &&
                                      ((m = !1),
                                      a.resistance &&
                                          (i.currentTranslate =
                                              this.maxTranslate() +
                                              1 -
                                              Math.pow(
                                                  this.maxTranslate() - i.startTranslate - f,
                                                  g
                                              ))),
                                m && (l.preventedByNestedSwiper = !0),
                                !this.allowSlideNext &&
                                    'next' === this.swipeDirection &&
                                    i.currentTranslate < i.startTranslate &&
                                    (i.currentTranslate = i.startTranslate),
                                !this.allowSlidePrev &&
                                    'prev' === this.swipeDirection &&
                                    i.currentTranslate > i.startTranslate &&
                                    (i.currentTranslate = i.startTranslate),
                                a.threshold > 0)
                            ) {
                                if (!(Math.abs(f) > a.threshold || i.allowThresholdMove))
                                    return void (i.currentTranslate = i.startTranslate);
                                if (!i.allowThresholdMove)
                                    return (
                                        (i.allowThresholdMove = !0),
                                        (r.startX = r.currentX),
                                        (r.startY = r.currentY),
                                        (i.currentTranslate = i.startTranslate),
                                        void (r.diff = this.isHorizontal()
                                            ? r.currentX - r.startX
                                            : r.currentY - r.startY)
                                    );
                            }
                            a.followFinger &&
                                !a.cssMode &&
                                ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) &&
                                    (this.updateActiveIndex(), this.updateSlidesClasses()),
                                a.freeMode &&
                                    (0 === i.velocities.length &&
                                        i.velocities.push({
                                            position: r[this.isHorizontal() ? 'startX' : 'startY'],
                                            time: i.touchStartTime,
                                        }),
                                    i.velocities.push({
                                        position: r[this.isHorizontal() ? 'currentX' : 'currentY'],
                                        time: n.now(),
                                    })),
                                this.updateProgress(i.currentTranslate),
                                this.setTranslate(i.currentTranslate));
                        }
                    }
                }
            }
        } else i.startMoving && i.isScrolling && this.emit('touchMoveOpposite', l);
    }
    function A(e) {
        var t = this,
            i = t.touchEventsData,
            s = t.params,
            a = t.touches,
            r = t.rtlTranslate,
            o = t.$wrapperEl,
            l = t.slidesGrid,
            d = t.snapGrid,
            h = e;
        if (
            (h.originalEvent && (h = h.originalEvent),
            i.allowTouchCallbacks && t.emit('touchEnd', h),
            (i.allowTouchCallbacks = !1),
            !i.isTouched)
        )
            return (
                i.isMoved && s.grabCursor && t.setGrabCursor(!1),
                (i.isMoved = !1),
                void (i.startMoving = !1)
            );
        s.grabCursor &&
            i.isMoved &&
            i.isTouched &&
            (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
            t.setGrabCursor(!1);
        var p,
            c = n.now(),
            u = c - i.touchStartTime;
        if (
            (t.allowClick &&
                (t.updateClickedSlide(h),
                t.emit('tap click', h),
                u < 300 && c - i.lastClickTime < 300 && t.emit('doubleTap doubleClick', h)),
            (i.lastClickTime = n.now()),
            n.nextTick(function() {
                t.destroyed || (t.allowClick = !0);
            }),
            !i.isTouched ||
                !i.isMoved ||
                !t.swipeDirection ||
                0 === a.diff ||
                i.currentTranslate === i.startTranslate)
        )
            return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1);
        if (
            ((i.isTouched = !1),
            (i.isMoved = !1),
            (i.startMoving = !1),
            (p = s.followFinger ? (r ? t.translate : -t.translate) : -i.currentTranslate),
            !s.cssMode)
        )
            if (s.freeMode) {
                if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                if (p > -t.maxTranslate())
                    return void (t.slides.length < d.length
                        ? t.slideTo(d.length - 1)
                        : t.slideTo(t.slides.length - 1));
                if (s.freeModeMomentum) {
                    if (i.velocities.length > 1) {
                        var v = i.velocities.pop(),
                            f = i.velocities.pop(),
                            m = v.position - f.position,
                            g = v.time - f.time;
                        (t.velocity = m / g),
                            (t.velocity /= 2),
                            Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0),
                            (g > 150 || n.now() - v.time > 300) && (t.velocity = 0);
                    } else t.velocity = 0;
                    (t.velocity *= s.freeModeMomentumVelocityRatio), (i.velocities.length = 0);
                    var b = 1e3 * s.freeModeMomentumRatio,
                        w = t.velocity * b,
                        y = t.translate + w;
                    r && (y = -y);
                    var x,
                        T,
                        E = !1,
                        S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
                    if (y < t.maxTranslate())
                        s.freeModeMomentumBounce
                            ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S),
                              (x = t.maxTranslate()),
                              (E = !0),
                              (i.allowMomentumBounce = !0))
                            : (y = t.maxTranslate()),
                            s.loop && s.centeredSlides && (T = !0);
                    else if (y > t.minTranslate())
                        s.freeModeMomentumBounce
                            ? (y - t.minTranslate() > S && (y = t.minTranslate() + S),
                              (x = t.minTranslate()),
                              (E = !0),
                              (i.allowMomentumBounce = !0))
                            : (y = t.minTranslate()),
                            s.loop && s.centeredSlides && (T = !0);
                    else if (s.freeModeSticky) {
                        for (var C, M = 0; M < d.length; M += 1)
                            if (d[M] > -y) {
                                C = M;
                                break;
                            }
                        y = -(y =
                            Math.abs(d[C] - y) < Math.abs(d[C - 1] - y) ||
                            'next' === t.swipeDirection
                                ? d[C]
                                : d[C - 1]);
                    }
                    if (
                        (T &&
                            t.once('transitionEnd', function() {
                                t.loopFix();
                            }),
                        0 !== t.velocity)
                    ) {
                        if (
                            ((b = r
                                ? Math.abs((-y - t.translate) / t.velocity)
                                : Math.abs((y - t.translate) / t.velocity)),
                            s.freeModeSticky)
                        ) {
                            var P = Math.abs((r ? -y : y) - t.translate),
                                z = t.slidesSizesGrid[t.activeIndex];
                            b = P < z ? s.speed : P < 2 * z ? 1.5 * s.speed : 2.5 * s.speed;
                        }
                    } else if (s.freeModeSticky) return void t.slideToClosest();
                    s.freeModeMomentumBounce && E
                        ? (t.updateProgress(x),
                          t.setTransition(b),
                          t.setTranslate(y),
                          t.transitionStart(!0, t.swipeDirection),
                          (t.animating = !0),
                          o.transitionEnd(function() {
                              t &&
                                  !t.destroyed &&
                                  i.allowMomentumBounce &&
                                  (t.emit('momentumBounce'),
                                  t.setTransition(s.speed),
                                  t.setTranslate(x),
                                  o.transitionEnd(function() {
                                      t && !t.destroyed && t.transitionEnd();
                                  }));
                          }))
                        : t.velocity
                        ? (t.updateProgress(y),
                          t.setTransition(b),
                          t.setTranslate(y),
                          t.transitionStart(!0, t.swipeDirection),
                          t.animating ||
                              ((t.animating = !0),
                              o.transitionEnd(function() {
                                  t && !t.destroyed && t.transitionEnd();
                              })))
                        : t.updateProgress(y),
                        t.updateActiveIndex(),
                        t.updateSlidesClasses();
                } else if (s.freeModeSticky) return void t.slideToClosest();
                (!s.freeModeMomentum || u >= s.longSwipesMs) &&
                    (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
            } else {
                for (
                    var k = 0, $ = t.slidesSizesGrid[0], L = 0;
                    L < l.length;
                    L += L < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
                ) {
                    var I = L < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                    void 0 !== l[L + I]
                        ? p >= l[L] && p < l[L + I] && ((k = L), ($ = l[L + I] - l[L]))
                        : p >= l[L] && ((k = L), ($ = l[l.length - 1] - l[l.length - 2]));
                }
                var D = (p - l[k]) / $,
                    O = k < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                if (u > s.longSwipesMs) {
                    if (!s.longSwipes) return void t.slideTo(t.activeIndex);
                    'next' === t.swipeDirection &&
                        (D >= s.longSwipesRatio ? t.slideTo(k + O) : t.slideTo(k)),
                        'prev' === t.swipeDirection &&
                            (D > 1 - s.longSwipesRatio ? t.slideTo(k + O) : t.slideTo(k));
                } else {
                    if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
                    t.navigation &&
                    (h.target === t.navigation.nextEl || h.target === t.navigation.prevEl)
                        ? h.target === t.navigation.nextEl
                            ? t.slideTo(k + O)
                            : t.slideTo(k)
                        : ('next' === t.swipeDirection && t.slideTo(k + O),
                          'prev' === t.swipeDirection && t.slideTo(k));
                }
            }
    }
    function G() {
        var e = this.params,
            t = this.el;
        if (!t || 0 !== t.offsetWidth) {
            e.breakpoints && this.setBreakpoint();
            var i = this.allowSlideNext,
                s = this.allowSlidePrev,
                a = this.snapGrid;
            (this.allowSlideNext = !0),
                (this.allowSlidePrev = !0),
                this.updateSize(),
                this.updateSlides(),
                this.updateSlidesClasses(),
                ('auto' === e.slidesPerView || e.slidesPerView > 1) &&
                this.isEnd &&
                !this.params.centeredSlides
                    ? this.slideTo(this.slides.length - 1, 0, !1, !0)
                    : this.slideTo(this.activeIndex, 0, !1, !0),
                this.autoplay &&
                    this.autoplay.running &&
                    this.autoplay.paused &&
                    this.autoplay.run(),
                (this.allowSlidePrev = s),
                (this.allowSlideNext = i),
                this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow();
        }
    }
    function B(e) {
        this.allowClick ||
            (this.params.preventClicks && e.preventDefault(),
            this.params.preventClicksPropagation &&
                this.animating &&
                (e.stopPropagation(), e.stopImmediatePropagation()));
    }
    function H() {
        var e = this.wrapperEl;
        (this.previousTranslate = this.translate),
            (this.translate = this.isHorizontal() ? -e.scrollLeft : -e.scrollTop),
            -0 === this.translate && (this.translate = 0),
            this.updateActiveIndex(),
            this.updateSlidesClasses();
        var t = this.maxTranslate() - this.minTranslate();
        (0 === t ? 0 : (this.translate - this.minTranslate()) / t) !== this.progress &&
            this.updateProgress(this.translate),
            this.emit('setTranslate', this.translate, !1);
    }
    var N = !1;
    function X() {}
    var V = {
            init: !0,
            direction: 'horizontal',
            touchEventsTarget: 'container',
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            preventInteractionOnTransition: !1,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: 0.02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: 'slide',
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: 'column',
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: 0.5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: 0.85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: 'swiper-no-swiping',
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: 'swiper-container-',
            slideClass: 'swiper-slide',
            slideBlankClass: 'swiper-slide-invisible-blank',
            slideActiveClass: 'swiper-slide-active',
            slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
            slideVisibleClass: 'swiper-slide-visible',
            slideDuplicateClass: 'swiper-slide-duplicate',
            slideNextClass: 'swiper-slide-next',
            slideDuplicateNextClass: 'swiper-slide-duplicate-next',
            slidePrevClass: 'swiper-slide-prev',
            slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
            wrapperClass: 'swiper-wrapper',
            runCallbacksOnInit: !0,
        },
        Y = {
            update: h,
            translate: p,
            transition: c,
            slide: u,
            loop: v,
            grabCursor: f,
            manipulation: L,
            events: {
                attachEvents: function() {
                    var t = this.params,
                        i = this.touchEvents,
                        s = this.el,
                        a = this.wrapperEl;
                    (this.onTouchStart = D.bind(this)),
                        (this.onTouchMove = O.bind(this)),
                        (this.onTouchEnd = A.bind(this)),
                        t.cssMode && (this.onScroll = H.bind(this)),
                        (this.onClick = B.bind(this));
                    var r = !!t.nested;
                    if (!o.touch && o.pointerEvents)
                        s.addEventListener(i.start, this.onTouchStart, !1),
                            e.addEventListener(i.move, this.onTouchMove, r),
                            e.addEventListener(i.end, this.onTouchEnd, !1);
                    else {
                        if (o.touch) {
                            var n = !(
                                'touchstart' !== i.start ||
                                !o.passiveListener ||
                                !t.passiveListeners
                            ) && {passive: !0, capture: !1};
                            s.addEventListener(i.start, this.onTouchStart, n),
                                s.addEventListener(
                                    i.move,
                                    this.onTouchMove,
                                    o.passiveListener ? {passive: !1, capture: r} : r
                                ),
                                s.addEventListener(i.end, this.onTouchEnd, n),
                                i.cancel && s.addEventListener(i.cancel, this.onTouchEnd, n),
                                N || (e.addEventListener('touchstart', X), (N = !0));
                        }
                        ((t.simulateTouch && !I.ios && !I.android) ||
                            (t.simulateTouch && !o.touch && I.ios)) &&
                            (s.addEventListener('mousedown', this.onTouchStart, !1),
                            e.addEventListener('mousemove', this.onTouchMove, r),
                            e.addEventListener('mouseup', this.onTouchEnd, !1));
                    }
                    (t.preventClicks || t.preventClicksPropagation) &&
                        s.addEventListener('click', this.onClick, !0),
                        t.cssMode && a.addEventListener('scroll', this.onScroll),
                        t.updateOnWindowResize
                            ? this.on(
                                  I.ios || I.android
                                      ? 'resize orientationchange observerUpdate'
                                      : 'resize observerUpdate',
                                  G,
                                  !0
                              )
                            : this.on('observerUpdate', G, !0);
                },
                detachEvents: function() {
                    var t = this.params,
                        i = this.touchEvents,
                        s = this.el,
                        a = this.wrapperEl,
                        r = !!t.nested;
                    if (!o.touch && o.pointerEvents)
                        s.removeEventListener(i.start, this.onTouchStart, !1),
                            e.removeEventListener(i.move, this.onTouchMove, r),
                            e.removeEventListener(i.end, this.onTouchEnd, !1);
                    else {
                        if (o.touch) {
                            var n = !(
                                'onTouchStart' !== i.start ||
                                !o.passiveListener ||
                                !t.passiveListeners
                            ) && {passive: !0, capture: !1};
                            s.removeEventListener(i.start, this.onTouchStart, n),
                                s.removeEventListener(i.move, this.onTouchMove, r),
                                s.removeEventListener(i.end, this.onTouchEnd, n),
                                i.cancel && s.removeEventListener(i.cancel, this.onTouchEnd, n);
                        }
                        ((t.simulateTouch && !I.ios && !I.android) ||
                            (t.simulateTouch && !o.touch && I.ios)) &&
                            (s.removeEventListener('mousedown', this.onTouchStart, !1),
                            e.removeEventListener('mousemove', this.onTouchMove, r),
                            e.removeEventListener('mouseup', this.onTouchEnd, !1));
                    }
                    (t.preventClicks || t.preventClicksPropagation) &&
                        s.removeEventListener('click', this.onClick, !0),
                        t.cssMode && a.removeEventListener('scroll', this.onScroll),
                        this.off(
                            I.ios || I.android
                                ? 'resize orientationchange observerUpdate'
                                : 'resize observerUpdate',
                            G
                        );
                },
            },
            breakpoints: {
                setBreakpoint: function() {
                    var e = this.activeIndex,
                        t = this.initialized,
                        i = this.loopedSlides;
                    void 0 === i && (i = 0);
                    var s = this.params,
                        a = this.$el,
                        r = s.breakpoints;
                    if (r && (!r || 0 !== Object.keys(r).length)) {
                        var o = this.getBreakpoint(r);
                        if (o && this.currentBreakpoint !== o) {
                            var l = o in r ? r[o] : void 0;
                            l &&
                                [
                                    'slidesPerView',
                                    'spaceBetween',
                                    'slidesPerGroup',
                                    'slidesPerGroupSkip',
                                    'slidesPerColumn',
                                ].forEach(function(e) {
                                    var t = l[e];
                                    void 0 !== t &&
                                        (l[e] =
                                            'slidesPerView' !== e || ('AUTO' !== t && 'auto' !== t)
                                                ? 'slidesPerView' === e
                                                    ? parseFloat(t)
                                                    : parseInt(t, 10)
                                                : 'auto');
                                });
                            var d = l || this.originalParams,
                                h = s.slidesPerColumn > 1,
                                p = d.slidesPerColumn > 1;
                            h && !p
                                ? a.removeClass(
                                      s.containerModifierClass +
                                          'multirow ' +
                                          s.containerModifierClass +
                                          'multirow-column'
                                  )
                                : !h &&
                                  p &&
                                  (a.addClass(s.containerModifierClass + 'multirow'),
                                  'column' === d.slidesPerColumnFill &&
                                      a.addClass(s.containerModifierClass + 'multirow-column'));
                            var c = d.direction && d.direction !== s.direction,
                                u = s.loop && (d.slidesPerView !== s.slidesPerView || c);
                            c && t && this.changeDirection(),
                                n.extend(this.params, d),
                                n.extend(this, {
                                    allowTouchMove: this.params.allowTouchMove,
                                    allowSlideNext: this.params.allowSlideNext,
                                    allowSlidePrev: this.params.allowSlidePrev,
                                }),
                                (this.currentBreakpoint = o),
                                u &&
                                    t &&
                                    (this.loopDestroy(),
                                    this.loopCreate(),
                                    this.updateSlides(),
                                    this.slideTo(e - i + this.loopedSlides, 0, !1)),
                                this.emit('breakpoint', d);
                        }
                    }
                },
                getBreakpoint: function(e) {
                    if (e) {
                        var i = !1,
                            s = Object.keys(e).map(function(e) {
                                if ('string' == typeof e && e.startsWith('@')) {
                                    var i = parseFloat(e.substr(1));
                                    return {value: t.innerHeight * i, point: e};
                                }
                                return {value: e, point: e};
                            });
                        s.sort(function(e, t) {
                            return parseInt(e.value, 10) - parseInt(t.value, 10);
                        });
                        for (var a = 0; a < s.length; a += 1) {
                            var r = s[a],
                                n = r.point;
                            r.value <= t.innerWidth && (i = n);
                        }
                        return i || 'max';
                    }
                },
            },
            checkOverflow: {
                checkOverflow: function() {
                    var e = this.params,
                        t = this.isLocked,
                        i =
                            this.slides.length > 0 &&
                            e.slidesOffsetBefore +
                                e.spaceBetween * (this.slides.length - 1) +
                                this.slides[0].offsetWidth * this.slides.length;
                    e.slidesOffsetBefore && e.slidesOffsetAfter && i
                        ? (this.isLocked = i <= this.size)
                        : (this.isLocked = 1 === this.snapGrid.length),
                        (this.allowSlideNext = !this.isLocked),
                        (this.allowSlidePrev = !this.isLocked),
                        t !== this.isLocked && this.emit(this.isLocked ? 'lock' : 'unlock'),
                        t && t !== this.isLocked && ((this.isEnd = !1), this.navigation.update());
                },
            },
            classes: {
                addClasses: function() {
                    var e = this.classNames,
                        t = this.params,
                        i = this.rtl,
                        s = this.$el,
                        a = [];
                    a.push('initialized'),
                        a.push(t.direction),
                        t.freeMode && a.push('free-mode'),
                        t.autoHeight && a.push('autoheight'),
                        i && a.push('rtl'),
                        t.slidesPerColumn > 1 &&
                            (a.push('multirow'),
                            'column' === t.slidesPerColumnFill && a.push('multirow-column')),
                        I.android && a.push('android'),
                        I.ios && a.push('ios'),
                        t.cssMode && a.push('css-mode'),
                        a.forEach(function(i) {
                            e.push(t.containerModifierClass + i);
                        }),
                        s.addClass(e.join(' '));
                },
                removeClasses: function() {
                    var e = this.$el,
                        t = this.classNames;
                    e.removeClass(t.join(' '));
                },
            },
            images: {
                loadImage: function(e, i, s, a, r, n) {
                    var o;
                    function l() {
                        n && n();
                    }
                    e.complete && r
                        ? l()
                        : i
                        ? (((o = new t.Image()).onload = l),
                          (o.onerror = l),
                          a && (o.sizes = a),
                          s && (o.srcset = s),
                          i && (o.src = i))
                        : l();
                },
                preloadImages: function() {
                    var e = this;
                    function t() {
                        null != e &&
                            e &&
                            !e.destroyed &&
                            (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                            e.imagesLoaded === e.imagesToLoad.length &&
                                (e.params.updateOnImagesReady && e.update(),
                                e.emit('imagesReady')));
                    }
                    e.imagesToLoad = e.$el.find('img');
                    for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                        var s = e.imagesToLoad[i];
                        e.loadImage(
                            s,
                            s.currentSrc || s.getAttribute('src'),
                            s.srcset || s.getAttribute('srcset'),
                            s.sizes || s.getAttribute('sizes'),
                            !0,
                            t
                        );
                    }
                },
            },
        },
        F = {},
        W = (function(e) {
            function t() {
                for (var i, a, r, l = [], d = arguments.length; d--; ) l[d] = arguments[d];
                1 === l.length && l[0].constructor && l[0].constructor === Object
                    ? (r = l[0])
                    : ((a = (i = l)[0]), (r = i[1])),
                    r || (r = {}),
                    (r = n.extend({}, r)),
                    a && !r.el && (r.el = a),
                    e.call(this, r),
                    Object.keys(Y).forEach(function(e) {
                        Object.keys(Y[e]).forEach(function(i) {
                            t.prototype[i] || (t.prototype[i] = Y[e][i]);
                        });
                    });
                var h = this;
                void 0 === h.modules && (h.modules = {}),
                    Object.keys(h.modules).forEach(function(e) {
                        var t = h.modules[e];
                        if (t.params) {
                            var i = Object.keys(t.params)[0],
                                s = t.params[i];
                            if ('object' != typeof s || null === s) return;
                            if (!(i in r && 'enabled' in s)) return;
                            !0 === r[i] && (r[i] = {enabled: !0}),
                                'object' != typeof r[i] || 'enabled' in r[i] || (r[i].enabled = !0),
                                r[i] || (r[i] = {enabled: !1});
                        }
                    });
                var p = n.extend({}, V);
                h.useModulesParams(p),
                    (h.params = n.extend({}, p, F, r)),
                    (h.originalParams = n.extend({}, h.params)),
                    (h.passedParams = n.extend({}, r)),
                    (h.$ = s);
                var c = s(h.params.el);
                if ((a = c[0])) {
                    if (c.length > 1) {
                        var u = [];
                        return (
                            c.each(function(e, i) {
                                var s = n.extend({}, r, {el: i});
                                u.push(new t(s));
                            }),
                            u
                        );
                    }
                    var v, f, m;
                    return (
                        (a.swiper = h),
                        c.data('swiper', h),
                        a && a.shadowRoot && a.shadowRoot.querySelector
                            ? ((v = s(
                                  a.shadowRoot.querySelector('.' + h.params.wrapperClass)
                              )).children = function(e) {
                                  return c.children(e);
                              })
                            : (v = c.children('.' + h.params.wrapperClass)),
                        n.extend(h, {
                            $el: c,
                            el: a,
                            $wrapperEl: v,
                            wrapperEl: v[0],
                            classNames: [],
                            slides: s(),
                            slidesGrid: [],
                            snapGrid: [],
                            slidesSizesGrid: [],
                            isHorizontal: function() {
                                return 'horizontal' === h.params.direction;
                            },
                            isVertical: function() {
                                return 'vertical' === h.params.direction;
                            },
                            rtl: 'rtl' === a.dir.toLowerCase() || 'rtl' === c.css('direction'),
                            rtlTranslate:
                                'horizontal' === h.params.direction &&
                                ('rtl' === a.dir.toLowerCase() || 'rtl' === c.css('direction')),
                            wrongRTL: '-webkit-box' === v.css('display'),
                            activeIndex: 0,
                            realIndex: 0,
                            isBeginning: !0,
                            isEnd: !1,
                            translate: 0,
                            previousTranslate: 0,
                            progress: 0,
                            velocity: 0,
                            animating: !1,
                            allowSlideNext: h.params.allowSlideNext,
                            allowSlidePrev: h.params.allowSlidePrev,
                            touchEvents:
                                ((f = ['touchstart', 'touchmove', 'touchend', 'touchcancel']),
                                (m = ['mousedown', 'mousemove', 'mouseup']),
                                o.pointerEvents &&
                                    (m = ['pointerdown', 'pointermove', 'pointerup']),
                                (h.touchEventsTouch = {
                                    start: f[0],
                                    move: f[1],
                                    end: f[2],
                                    cancel: f[3],
                                }),
                                (h.touchEventsDesktop = {start: m[0], move: m[1], end: m[2]}),
                                o.touch || !h.params.simulateTouch
                                    ? h.touchEventsTouch
                                    : h.touchEventsDesktop),
                            touchEventsData: {
                                isTouched: void 0,
                                isMoved: void 0,
                                allowTouchCallbacks: void 0,
                                touchStartTime: void 0,
                                isScrolling: void 0,
                                currentTranslate: void 0,
                                startTranslate: void 0,
                                allowThresholdMove: void 0,
                                formElements:
                                    'input, select, option, textarea, button, video, label',
                                lastClickTime: n.now(),
                                clickTimeout: void 0,
                                velocities: [],
                                allowMomentumBounce: void 0,
                                isTouchEvent: void 0,
                                startMoving: void 0,
                            },
                            allowClick: !0,
                            allowTouchMove: h.params.allowTouchMove,
                            touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
                            imagesToLoad: [],
                            imagesLoaded: 0,
                        }),
                        h.useModules(),
                        h.params.init && h.init(),
                        h
                    );
                }
            }
            e && (t.__proto__ = e),
                (t.prototype = Object.create(e && e.prototype)),
                (t.prototype.constructor = t);
            var i = {
                extendedDefaults: {configurable: !0},
                defaults: {configurable: !0},
                Class: {configurable: !0},
                $: {configurable: !0},
            };
            return (
                (t.prototype.slidesPerViewDynamic = function() {
                    var e = this.params,
                        t = this.slides,
                        i = this.slidesGrid,
                        s = this.size,
                        a = this.activeIndex,
                        r = 1;
                    if (e.centeredSlides) {
                        for (var n, o = t[a].swiperSlideSize, l = a + 1; l < t.length; l += 1)
                            t[l] && !n && ((r += 1), (o += t[l].swiperSlideSize) > s && (n = !0));
                        for (var d = a - 1; d >= 0; d -= 1)
                            t[d] && !n && ((r += 1), (o += t[d].swiperSlideSize) > s && (n = !0));
                    } else for (var h = a + 1; h < t.length; h += 1) i[h] - i[a] < s && (r += 1);
                    return r;
                }),
                (t.prototype.update = function() {
                    var e = this;
                    if (e && !e.destroyed) {
                        var t = e.snapGrid,
                            i = e.params;
                        i.breakpoints && e.setBreakpoint(),
                            e.updateSize(),
                            e.updateSlides(),
                            e.updateProgress(),
                            e.updateSlidesClasses(),
                            e.params.freeMode
                                ? (s(), e.params.autoHeight && e.updateAutoHeight())
                                : (('auto' === e.params.slidesPerView ||
                                      e.params.slidesPerView > 1) &&
                                  e.isEnd &&
                                  !e.params.centeredSlides
                                      ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                                      : e.slideTo(e.activeIndex, 0, !1, !0)) || s(),
                            i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
                            e.emit('update');
                    }
                    function s() {
                        var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
                    }
                }),
                (t.prototype.changeDirection = function(e, t) {
                    void 0 === t && (t = !0);
                    var i = this.params.direction;
                    return (
                        e || (e = 'horizontal' === i ? 'vertical' : 'horizontal'),
                        e === i || ('horizontal' !== e && 'vertical' !== e)
                            ? this
                            : (this.$el
                                  .removeClass('' + this.params.containerModifierClass + i)
                                  .addClass('' + this.params.containerModifierClass + e),
                              (this.params.direction = e),
                              this.slides.each(function(t, i) {
                                  'vertical' === e ? (i.style.width = '') : (i.style.height = '');
                              }),
                              this.emit('changeDirection'),
                              t && this.update(),
                              this)
                    );
                }),
                (t.prototype.init = function() {
                    this.initialized ||
                        (this.emit('beforeInit'),
                        this.params.breakpoints && this.setBreakpoint(),
                        this.addClasses(),
                        this.params.loop && this.loopCreate(),
                        this.updateSize(),
                        this.updateSlides(),
                        this.params.watchOverflow && this.checkOverflow(),
                        this.params.grabCursor && this.setGrabCursor(),
                        this.params.preloadImages && this.preloadImages(),
                        this.params.loop
                            ? this.slideTo(
                                  this.params.initialSlide + this.loopedSlides,
                                  0,
                                  this.params.runCallbacksOnInit
                              )
                            : this.slideTo(
                                  this.params.initialSlide,
                                  0,
                                  this.params.runCallbacksOnInit
                              ),
                        this.attachEvents(),
                        (this.initialized = !0),
                        this.emit('init'));
                }),
                (t.prototype.destroy = function(e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    var i = this,
                        s = i.params,
                        a = i.$el,
                        r = i.$wrapperEl,
                        o = i.slides;
                    return void 0 === i.params || i.destroyed
                        ? null
                        : (i.emit('beforeDestroy'),
                          (i.initialized = !1),
                          i.detachEvents(),
                          s.loop && i.loopDestroy(),
                          t &&
                              (i.removeClasses(),
                              a.removeAttr('style'),
                              r.removeAttr('style'),
                              o &&
                                  o.length &&
                                  o
                                      .removeClass(
                                          [
                                              s.slideVisibleClass,
                                              s.slideActiveClass,
                                              s.slideNextClass,
                                              s.slidePrevClass,
                                          ].join(' ')
                                      )
                                      .removeAttr('style')
                                      .removeAttr('data-swiper-slide-index')),
                          i.emit('destroy'),
                          Object.keys(i.eventsListeners).forEach(function(e) {
                              i.off(e);
                          }),
                          !1 !== e &&
                              ((i.$el[0].swiper = null),
                              i.$el.data('swiper', null),
                              n.deleteProps(i)),
                          (i.destroyed = !0),
                          null);
                }),
                (t.extendDefaults = function(e) {
                    n.extend(F, e);
                }),
                (i.extendedDefaults.get = function() {
                    return F;
                }),
                (i.defaults.get = function() {
                    return V;
                }),
                (i.Class.get = function() {
                    return e;
                }),
                (i.$.get = function() {
                    return s;
                }),
                Object.defineProperties(t, i),
                t
            );
        })(l),
        R = {name: 'device', proto: {device: I}, static: {device: I}},
        q = {name: 'support', proto: {support: o}, static: {support: o}},
        j = {
            isEdge: !!t.navigator.userAgent.match(/Edge/g),
            isSafari: (function() {
                var e = t.navigator.userAgent.toLowerCase();
                return (
                    e.indexOf('safari') >= 0 && e.indexOf('chrome') < 0 && e.indexOf('android') < 0
                );
            })(),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent),
        },
        K = {name: 'browser', proto: {browser: j}, static: {browser: j}},
        U = {
            name: 'resize',
            create: function() {
                var e = this;
                n.extend(e, {
                    resize: {
                        resizeHandler: function() {
                            e &&
                                !e.destroyed &&
                                e.initialized &&
                                (e.emit('beforeResize'), e.emit('resize'));
                        },
                        orientationChangeHandler: function() {
                            e && !e.destroyed && e.initialized && e.emit('orientationchange');
                        },
                    },
                });
            },
            on: {
                init: function() {
                    t.addEventListener('resize', this.resize.resizeHandler),
                        t.addEventListener(
                            'orientationchange',
                            this.resize.orientationChangeHandler
                        );
                },
                destroy: function() {
                    t.removeEventListener('resize', this.resize.resizeHandler),
                        t.removeEventListener(
                            'orientationchange',
                            this.resize.orientationChangeHandler
                        );
                },
            },
        },
        _ = {
            func: t.MutationObserver || t.WebkitMutationObserver,
            attach: function(e, i) {
                void 0 === i && (i = {});
                var s = this,
                    a = new (0, _.func)(function(e) {
                        if (1 !== e.length) {
                            var i = function() {
                                s.emit('observerUpdate', e[0]);
                            };
                            t.requestAnimationFrame
                                ? t.requestAnimationFrame(i)
                                : t.setTimeout(i, 0);
                        } else s.emit('observerUpdate', e[0]);
                    });
                a.observe(e, {
                    attributes: void 0 === i.attributes || i.attributes,
                    childList: void 0 === i.childList || i.childList,
                    characterData: void 0 === i.characterData || i.characterData,
                }),
                    s.observer.observers.push(a);
            },
            init: function() {
                if (o.observer && this.params.observer) {
                    if (this.params.observeParents)
                        for (var e = this.$el.parents(), t = 0; t < e.length; t += 1)
                            this.observer.attach(e[t]);
                    this.observer.attach(this.$el[0], {
                        childList: this.params.observeSlideChildren,
                    }),
                        this.observer.attach(this.$wrapperEl[0], {attributes: !1});
                }
            },
            destroy: function() {
                this.observer.observers.forEach(function(e) {
                    e.disconnect();
                }),
                    (this.observer.observers = []);
            },
        },
        Z = {
            name: 'observer',
            params: {observer: !1, observeParents: !1, observeSlideChildren: !1},
            create: function() {
                n.extend(this, {
                    observer: {
                        init: _.init.bind(this),
                        attach: _.attach.bind(this),
                        destroy: _.destroy.bind(this),
                        observers: [],
                    },
                });
            },
            on: {
                init: function() {
                    this.observer.init();
                },
                destroy: function() {
                    this.observer.destroy();
                },
            },
        },
        Q = {
            update: function(e) {
                var t = this,
                    i = t.params,
                    s = i.slidesPerView,
                    a = i.slidesPerGroup,
                    r = i.centeredSlides,
                    o = t.params.virtual,
                    l = o.addSlidesBefore,
                    d = o.addSlidesAfter,
                    h = t.virtual,
                    p = h.from,
                    c = h.to,
                    u = h.slides,
                    v = h.slidesGrid,
                    f = h.renderSlide,
                    m = h.offset;
                t.updateActiveIndex();
                var g,
                    b,
                    w,
                    y = t.activeIndex || 0;
                (g = t.rtlTranslate ? 'right' : t.isHorizontal() ? 'left' : 'top'),
                    r
                        ? ((b = Math.floor(s / 2) + a + l), (w = Math.floor(s / 2) + a + d))
                        : ((b = s + (a - 1) + l), (w = a + d));
                var x = Math.max((y || 0) - w, 0),
                    T = Math.min((y || 0) + b, u.length - 1),
                    E = (t.slidesGrid[x] || 0) - (t.slidesGrid[0] || 0);
                function S() {
                    t.updateSlides(),
                        t.updateProgress(),
                        t.updateSlidesClasses(),
                        t.lazy && t.params.lazy.enabled && t.lazy.load();
                }
                if (
                    (n.extend(t.virtual, {from: x, to: T, offset: E, slidesGrid: t.slidesGrid}),
                    p === x && c === T && !e)
                )
                    return (
                        t.slidesGrid !== v && E !== m && t.slides.css(g, E + 'px'),
                        void t.updateProgress()
                    );
                if (t.params.virtual.renderExternal)
                    return (
                        t.params.virtual.renderExternal.call(t, {
                            offset: E,
                            from: x,
                            to: T,
                            slides: (function() {
                                for (var e = [], t = x; t <= T; t += 1) e.push(u[t]);
                                return e;
                            })(),
                        }),
                        void S()
                    );
                var C = [],
                    M = [];
                if (e) t.$wrapperEl.find('.' + t.params.slideClass).remove();
                else
                    for (var P = p; P <= c; P += 1)
                        (P < x || P > T) &&
                            t.$wrapperEl
                                .find(
                                    '.' +
                                        t.params.slideClass +
                                        '[data-swiper-slide-index="' +
                                        P +
                                        '"]'
                                )
                                .remove();
                for (var z = 0; z < u.length; z += 1)
                    z >= x &&
                        z <= T &&
                        (void 0 === c || e ? M.push(z) : (z > c && M.push(z), z < p && C.push(z)));
                M.forEach(function(e) {
                    t.$wrapperEl.append(f(u[e], e));
                }),
                    C.sort(function(e, t) {
                        return t - e;
                    }).forEach(function(e) {
                        t.$wrapperEl.prepend(f(u[e], e));
                    }),
                    t.$wrapperEl.children('.swiper-slide').css(g, E + 'px'),
                    S();
            },
            renderSlide: function(e, t) {
                var i = this.params.virtual;
                if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
                var a = i.renderSlide
                    ? s(i.renderSlide.call(this, e, t))
                    : s(
                          '<div class="' +
                              this.params.slideClass +
                              '" data-swiper-slide-index="' +
                              t +
                              '">' +
                              e +
                              '</div>'
                      );
                return (
                    a.attr('data-swiper-slide-index') || a.attr('data-swiper-slide-index', t),
                    i.cache && (this.virtual.cache[t] = a),
                    a
                );
            },
            appendSlide: function(e) {
                if ('object' == typeof e && 'length' in e)
                    for (var t = 0; t < e.length; t += 1) e[t] && this.virtual.slides.push(e[t]);
                else this.virtual.slides.push(e);
                this.virtual.update(!0);
            },
            prependSlide: function(e) {
                var t = this.activeIndex,
                    i = t + 1,
                    s = 1;
                if (Array.isArray(e)) {
                    for (var a = 0; a < e.length; a += 1) e[a] && this.virtual.slides.unshift(e[a]);
                    (i = t + e.length), (s = e.length);
                } else this.virtual.slides.unshift(e);
                if (this.params.virtual.cache) {
                    var r = this.virtual.cache,
                        n = {};
                    Object.keys(r).forEach(function(e) {
                        var t = r[e],
                            i = t.attr('data-swiper-slide-index');
                        i && t.attr('data-swiper-slide-index', parseInt(i, 10) + 1),
                            (n[parseInt(e, 10) + s] = t);
                    }),
                        (this.virtual.cache = n);
                }
                this.virtual.update(!0), this.slideTo(i, 0);
            },
            removeSlide: function(e) {
                if (null != e) {
                    var t = this.activeIndex;
                    if (Array.isArray(e))
                        for (var i = e.length - 1; i >= 0; i -= 1)
                            this.virtual.slides.splice(e[i], 1),
                                this.params.virtual.cache && delete this.virtual.cache[e[i]],
                                e[i] < t && (t -= 1),
                                (t = Math.max(t, 0));
                    else
                        this.virtual.slides.splice(e, 1),
                            this.params.virtual.cache && delete this.virtual.cache[e],
                            e < t && (t -= 1),
                            (t = Math.max(t, 0));
                    this.virtual.update(!0), this.slideTo(t, 0);
                }
            },
            removeAllSlides: function() {
                (this.virtual.slides = []),
                    this.params.virtual.cache && (this.virtual.cache = {}),
                    this.virtual.update(!0),
                    this.slideTo(0, 0);
            },
        },
        J = {
            name: 'virtual',
            params: {
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0,
                },
            },
            create: function() {
                n.extend(this, {
                    virtual: {
                        update: Q.update.bind(this),
                        appendSlide: Q.appendSlide.bind(this),
                        prependSlide: Q.prependSlide.bind(this),
                        removeSlide: Q.removeSlide.bind(this),
                        removeAllSlides: Q.removeAllSlides.bind(this),
                        renderSlide: Q.renderSlide.bind(this),
                        slides: this.params.virtual.slides,
                        cache: {},
                    },
                });
            },
            on: {
                beforeInit: function() {
                    if (this.params.virtual.enabled) {
                        this.classNames.push(this.params.containerModifierClass + 'virtual');
                        var e = {watchSlidesProgress: !0};
                        n.extend(this.params, e),
                            n.extend(this.originalParams, e),
                            this.params.initialSlide || this.virtual.update();
                    }
                },
                setTranslate: function() {
                    this.params.virtual.enabled && this.virtual.update();
                },
            },
        },
        ee = {
            handle: function(i) {
                var s = this.rtlTranslate,
                    a = i;
                a.originalEvent && (a = a.originalEvent);
                var r = a.keyCode || a.charCode;
                if (
                    !this.allowSlideNext &&
                    ((this.isHorizontal() && 39 === r) ||
                        (this.isVertical() && 40 === r) ||
                        34 === r)
                )
                    return !1;
                if (
                    !this.allowSlidePrev &&
                    ((this.isHorizontal() && 37 === r) ||
                        (this.isVertical() && 38 === r) ||
                        33 === r)
                )
                    return !1;
                if (
                    !(
                        a.shiftKey ||
                        a.altKey ||
                        a.ctrlKey ||
                        a.metaKey ||
                        (e.activeElement &&
                            e.activeElement.nodeName &&
                            ('input' === e.activeElement.nodeName.toLowerCase() ||
                                'textarea' === e.activeElement.nodeName.toLowerCase()))
                    )
                ) {
                    if (
                        this.params.keyboard.onlyInViewport &&
                        (33 === r || 34 === r || 37 === r || 39 === r || 38 === r || 40 === r)
                    ) {
                        var n = !1;
                        if (
                            this.$el.parents('.' + this.params.slideClass).length > 0 &&
                            0 === this.$el.parents('.' + this.params.slideActiveClass).length
                        )
                            return;
                        var o = t.innerWidth,
                            l = t.innerHeight,
                            d = this.$el.offset();
                        s && (d.left -= this.$el[0].scrollLeft);
                        for (
                            var h = [
                                    [d.left, d.top],
                                    [d.left + this.width, d.top],
                                    [d.left, d.top + this.height],
                                    [d.left + this.width, d.top + this.height],
                                ],
                                p = 0;
                            p < h.length;
                            p += 1
                        ) {
                            var c = h[p];
                            c[0] >= 0 && c[0] <= o && c[1] >= 0 && c[1] <= l && (n = !0);
                        }
                        if (!n) return;
                    }
                    this.isHorizontal()
                        ? ((33 !== r && 34 !== r && 37 !== r && 39 !== r) ||
                              (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)),
                          (((34 !== r && 39 !== r) || s) && ((33 !== r && 37 !== r) || !s)) ||
                              this.slideNext(),
                          (((33 !== r && 37 !== r) || s) && ((34 !== r && 39 !== r) || !s)) ||
                              this.slidePrev())
                        : ((33 !== r && 34 !== r && 38 !== r && 40 !== r) ||
                              (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)),
                          (34 !== r && 40 !== r) || this.slideNext(),
                          (33 !== r && 38 !== r) || this.slidePrev()),
                        this.emit('keyPress', r);
                }
            },
            enable: function() {
                this.keyboard.enabled ||
                    (s(e).on('keydown', this.keyboard.handle), (this.keyboard.enabled = !0));
            },
            disable: function() {
                this.keyboard.enabled &&
                    (s(e).off('keydown', this.keyboard.handle), (this.keyboard.enabled = !1));
            },
        },
        te = {
            name: 'keyboard',
            params: {keyboard: {enabled: !1, onlyInViewport: !0}},
            create: function() {
                n.extend(this, {
                    keyboard: {
                        enabled: !1,
                        enable: ee.enable.bind(this),
                        disable: ee.disable.bind(this),
                        handle: ee.handle.bind(this),
                    },
                });
            },
            on: {
                init: function() {
                    this.params.keyboard.enabled && this.keyboard.enable();
                },
                destroy: function() {
                    this.keyboard.enabled && this.keyboard.disable();
                },
            },
        };
    var ie = {
            lastScrollTime: n.now(),
            lastEventBeforeSnap: void 0,
            recentWheelEvents: [],
            event: function() {
                return t.navigator.userAgent.indexOf('firefox') > -1
                    ? 'DOMMouseScroll'
                    : (function() {
                          var t = 'onwheel' in e;
                          if (!t) {
                              var i = e.createElement('div');
                              i.setAttribute('onwheel', 'return;'),
                                  (t = 'function' == typeof i.onwheel);
                          }
                          return (
                              !t &&
                                  e.implementation &&
                                  e.implementation.hasFeature &&
                                  !0 !== e.implementation.hasFeature('', '') &&
                                  (t = e.implementation.hasFeature('Events.wheel', '3.0')),
                              t
                          );
                      })()
                    ? 'wheel'
                    : 'mousewheel';
            },
            normalize: function(e) {
                var t = 0,
                    i = 0,
                    s = 0,
                    a = 0;
                return (
                    'detail' in e && (i = e.detail),
                    'wheelDelta' in e && (i = -e.wheelDelta / 120),
                    'wheelDeltaY' in e && (i = -e.wheelDeltaY / 120),
                    'wheelDeltaX' in e && (t = -e.wheelDeltaX / 120),
                    'axis' in e && e.axis === e.HORIZONTAL_AXIS && ((t = i), (i = 0)),
                    (s = 10 * t),
                    (a = 10 * i),
                    'deltaY' in e && (a = e.deltaY),
                    'deltaX' in e && (s = e.deltaX),
                    e.shiftKey && !s && ((s = a), (a = 0)),
                    (s || a) &&
                        e.deltaMode &&
                        (1 === e.deltaMode ? ((s *= 40), (a *= 40)) : ((s *= 800), (a *= 800))),
                    s && !t && (t = s < 1 ? -1 : 1),
                    a && !i && (i = a < 1 ? -1 : 1),
                    {spinX: t, spinY: i, pixelX: s, pixelY: a}
                );
            },
            handleMouseEnter: function() {
                this.mouseEntered = !0;
            },
            handleMouseLeave: function() {
                this.mouseEntered = !1;
            },
            handle: function(e) {
                var t = e,
                    i = this,
                    a = i.params.mousewheel;
                i.params.cssMode && t.preventDefault();
                var r = i.$el;
                if (
                    ('container' !== i.params.mousewheel.eventsTarged &&
                        (r = s(i.params.mousewheel.eventsTarged)),
                    !i.mouseEntered && !r[0].contains(t.target) && !a.releaseOnEdges)
                )
                    return !0;
                t.originalEvent && (t = t.originalEvent);
                var o = 0,
                    l = i.rtlTranslate ? -1 : 1,
                    d = ie.normalize(t);
                if (a.forceToAxis)
                    if (i.isHorizontal()) {
                        if (!(Math.abs(d.pixelX) > Math.abs(d.pixelY))) return !0;
                        o = d.pixelX * l;
                    } else {
                        if (!(Math.abs(d.pixelY) > Math.abs(d.pixelX))) return !0;
                        o = d.pixelY;
                    }
                else o = Math.abs(d.pixelX) > Math.abs(d.pixelY) ? -d.pixelX * l : -d.pixelY;
                if (0 === o) return !0;
                if ((a.invert && (o = -o), i.params.freeMode)) {
                    var h = {time: n.now(), delta: Math.abs(o), direction: Math.sign(o)},
                        p = i.mousewheel.lastEventBeforeSnap,
                        c =
                            p &&
                            h.time < p.time + 500 &&
                            h.delta <= p.delta &&
                            h.direction === p.direction;
                    if (!c) {
                        (i.mousewheel.lastEventBeforeSnap = void 0), i.params.loop && i.loopFix();
                        var u = i.getTranslate() + o * a.sensitivity,
                            v = i.isBeginning,
                            f = i.isEnd;
                        if (
                            (u >= i.minTranslate() && (u = i.minTranslate()),
                            u <= i.maxTranslate() && (u = i.maxTranslate()),
                            i.setTransition(0),
                            i.setTranslate(u),
                            i.updateProgress(),
                            i.updateActiveIndex(),
                            i.updateSlidesClasses(),
                            ((!v && i.isBeginning) || (!f && i.isEnd)) && i.updateSlidesClasses(),
                            i.params.freeModeSticky)
                        ) {
                            clearTimeout(i.mousewheel.timeout), (i.mousewheel.timeout = void 0);
                            var m = i.mousewheel.recentWheelEvents;
                            m.length >= 15 && m.shift();
                            var g = m.length ? m[m.length - 1] : void 0,
                                b = m[0];
                            if (
                                (m.push(h), g && (h.delta > g.delta || h.direction !== g.direction))
                            )
                                m.splice(0);
                            else if (
                                m.length >= 15 &&
                                h.time - b.time < 500 &&
                                b.delta - h.delta >= 1 &&
                                h.delta <= 6
                            ) {
                                var w = o > 0 ? 0.8 : 0.2;
                                (i.mousewheel.lastEventBeforeSnap = h),
                                    m.splice(0),
                                    (i.mousewheel.timeout = n.nextTick(function() {
                                        i.slideToClosest(i.params.speed, !0, void 0, w);
                                    }, 0));
                            }
                            i.mousewheel.timeout ||
                                (i.mousewheel.timeout = n.nextTick(function() {
                                    (i.mousewheel.lastEventBeforeSnap = h),
                                        m.splice(0),
                                        i.slideToClosest(i.params.speed, !0, void 0, 0.5);
                                }, 500));
                        }
                        if (
                            (c || i.emit('scroll', t),
                            i.params.autoplay &&
                                i.params.autoplayDisableOnInteraction &&
                                i.autoplay.stop(),
                            u === i.minTranslate() || u === i.maxTranslate())
                        )
                            return !0;
                    }
                } else {
                    var y = {time: n.now(), delta: Math.abs(o), direction: Math.sign(o), raw: e},
                        x = i.mousewheel.recentWheelEvents;
                    x.length >= 2 && x.shift();
                    var T = x.length ? x[x.length - 1] : void 0;
                    if (
                        (x.push(y),
                        T
                            ? (y.direction !== T.direction || y.delta > T.delta) &&
                              i.mousewheel.animateSlider(y)
                            : i.mousewheel.animateSlider(y),
                        i.mousewheel.releaseScroll(y))
                    )
                        return !0;
                }
                return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1;
            },
            animateSlider: function(e) {
                return (
                    (e.delta >= 6 && n.now() - this.mousewheel.lastScrollTime < 60) ||
                    (e.direction < 0
                        ? (this.isEnd && !this.params.loop) ||
                          this.animating ||
                          (this.slideNext(), this.emit('scroll', e.raw))
                        : (this.isBeginning && !this.params.loop) ||
                          this.animating ||
                          (this.slidePrev(), this.emit('scroll', e.raw)),
                    (this.mousewheel.lastScrollTime = new t.Date().getTime()),
                    !1)
                );
            },
            releaseScroll: function(e) {
                var t = this.params.mousewheel;
                if (e.direction < 0) {
                    if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0;
                } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges) return !0;
                return !1;
            },
            enable: function() {
                var e = ie.event();
                if (this.params.cssMode)
                    return this.wrapperEl.removeEventListener(e, this.mousewheel.handle), !0;
                if (!e) return !1;
                if (this.mousewheel.enabled) return !1;
                var t = this.$el;
                return (
                    'container' !== this.params.mousewheel.eventsTarged &&
                        (t = s(this.params.mousewheel.eventsTarged)),
                    t.on('mouseenter', this.mousewheel.handleMouseEnter),
                    t.on('mouseleave', this.mousewheel.handleMouseLeave),
                    t.on(e, this.mousewheel.handle),
                    (this.mousewheel.enabled = !0),
                    !0
                );
            },
            disable: function() {
                var e = ie.event();
                if (this.params.cssMode)
                    return this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0;
                if (!e) return !1;
                if (!this.mousewheel.enabled) return !1;
                var t = this.$el;
                return (
                    'container' !== this.params.mousewheel.eventsTarged &&
                        (t = s(this.params.mousewheel.eventsTarged)),
                    t.off(e, this.mousewheel.handle),
                    (this.mousewheel.enabled = !1),
                    !0
                );
            },
        },
        se = {
            update: function() {
                var e = this.params.navigation;
                if (!this.params.loop) {
                    var t = this.navigation,
                        i = t.$nextEl,
                        s = t.$prevEl;
                    s &&
                        s.length > 0 &&
                        (this.isBeginning
                            ? s.addClass(e.disabledClass)
                            : s.removeClass(e.disabledClass),
                        s[this.params.watchOverflow && this.isLocked ? 'addClass' : 'removeClass'](
                            e.lockClass
                        )),
                        i &&
                            i.length > 0 &&
                            (this.isEnd
                                ? i.addClass(e.disabledClass)
                                : i.removeClass(e.disabledClass),
                            i[
                                this.params.watchOverflow && this.isLocked
                                    ? 'addClass'
                                    : 'removeClass'
                            ](e.lockClass));
                }
            },
            onPrevClick: function(e) {
                e.preventDefault(), (this.isBeginning && !this.params.loop) || this.slidePrev();
            },
            onNextClick: function(e) {
                e.preventDefault(), (this.isEnd && !this.params.loop) || this.slideNext();
            },
            init: function() {
                var e,
                    t,
                    i = this.params.navigation;
                (i.nextEl || i.prevEl) &&
                    (i.nextEl &&
                        ((e = s(i.nextEl)),
                        this.params.uniqueNavElements &&
                            'string' == typeof i.nextEl &&
                            e.length > 1 &&
                            1 === this.$el.find(i.nextEl).length &&
                            (e = this.$el.find(i.nextEl))),
                    i.prevEl &&
                        ((t = s(i.prevEl)),
                        this.params.uniqueNavElements &&
                            'string' == typeof i.prevEl &&
                            t.length > 1 &&
                            1 === this.$el.find(i.prevEl).length &&
                            (t = this.$el.find(i.prevEl))),
                    e && e.length > 0 && e.on('click', this.navigation.onNextClick),
                    t && t.length > 0 && t.on('click', this.navigation.onPrevClick),
                    n.extend(this.navigation, {
                        $nextEl: e,
                        nextEl: e && e[0],
                        $prevEl: t,
                        prevEl: t && t[0],
                    }));
            },
            destroy: function() {
                var e = this.navigation,
                    t = e.$nextEl,
                    i = e.$prevEl;
                t &&
                    t.length &&
                    (t.off('click', this.navigation.onNextClick),
                    t.removeClass(this.params.navigation.disabledClass)),
                    i &&
                        i.length &&
                        (i.off('click', this.navigation.onPrevClick),
                        i.removeClass(this.params.navigation.disabledClass));
            },
        },
        ae = {
            update: function() {
                var e = this.rtl,
                    t = this.params.pagination;
                if (
                    t.el &&
                    this.pagination.el &&
                    this.pagination.$el &&
                    0 !== this.pagination.$el.length
                ) {
                    var i,
                        a =
                            this.virtual && this.params.virtual.enabled
                                ? this.virtual.slides.length
                                : this.slides.length,
                        r = this.pagination.$el,
                        n = this.params.loop
                            ? Math.ceil((a - 2 * this.loopedSlides) / this.params.slidesPerGroup)
                            : this.snapGrid.length;
                    if (
                        (this.params.loop
                            ? ((i = Math.ceil(
                                  (this.activeIndex - this.loopedSlides) /
                                      this.params.slidesPerGroup
                              )) >
                                  a - 1 - 2 * this.loopedSlides && (i -= a - 2 * this.loopedSlides),
                              i > n - 1 && (i -= n),
                              i < 0 && 'bullets' !== this.params.paginationType && (i = n + i))
                            : (i =
                                  void 0 !== this.snapIndex
                                      ? this.snapIndex
                                      : this.activeIndex || 0),
                        'bullets' === t.type &&
                            this.pagination.bullets &&
                            this.pagination.bullets.length > 0)
                    ) {
                        var o,
                            l,
                            d,
                            h = this.pagination.bullets;
                        if (
                            (t.dynamicBullets &&
                                ((this.pagination.bulletSize = h
                                    .eq(0)
                                    [this.isHorizontal() ? 'outerWidth' : 'outerHeight'](!0)),
                                r.css(
                                    this.isHorizontal() ? 'width' : 'height',
                                    this.pagination.bulletSize * (t.dynamicMainBullets + 4) + 'px'
                                ),
                                t.dynamicMainBullets > 1 &&
                                    void 0 !== this.previousIndex &&
                                    ((this.pagination.dynamicBulletIndex += i - this.previousIndex),
                                    this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1
                                        ? (this.pagination.dynamicBulletIndex =
                                              t.dynamicMainBullets - 1)
                                        : this.pagination.dynamicBulletIndex < 0 &&
                                          (this.pagination.dynamicBulletIndex = 0)),
                                (o = i - this.pagination.dynamicBulletIndex),
                                (d =
                                    ((l = o + (Math.min(h.length, t.dynamicMainBullets) - 1)) + o) /
                                    2)),
                            h.removeClass(
                                t.bulletActiveClass +
                                    ' ' +
                                    t.bulletActiveClass +
                                    '-next ' +
                                    t.bulletActiveClass +
                                    '-next-next ' +
                                    t.bulletActiveClass +
                                    '-prev ' +
                                    t.bulletActiveClass +
                                    '-prev-prev ' +
                                    t.bulletActiveClass +
                                    '-main'
                            ),
                            r.length > 1)
                        )
                            h.each(function(e, a) {
                                var r = s(a),
                                    n = r.index();
                                n === i && r.addClass(t.bulletActiveClass),
                                    t.dynamicBullets &&
                                        (n >= o &&
                                            n <= l &&
                                            r.addClass(t.bulletActiveClass + '-main'),
                                        n === o &&
                                            r
                                                .prev()
                                                .addClass(t.bulletActiveClass + '-prev')
                                                .prev()
                                                .addClass(t.bulletActiveClass + '-prev-prev'),
                                        n === l &&
                                            r
                                                .next()
                                                .addClass(t.bulletActiveClass + '-next')
                                                .next()
                                                .addClass(t.bulletActiveClass + '-next-next'));
                            });
                        else {
                            var p = h.eq(i),
                                c = p.index();
                            if ((p.addClass(t.bulletActiveClass), t.dynamicBullets)) {
                                for (var u = h.eq(o), v = h.eq(l), f = o; f <= l; f += 1)
                                    h.eq(f).addClass(t.bulletActiveClass + '-main');
                                if (this.params.loop)
                                    if (c >= h.length - t.dynamicMainBullets) {
                                        for (var m = t.dynamicMainBullets; m >= 0; m -= 1)
                                            h.eq(h.length - m).addClass(
                                                t.bulletActiveClass + '-main'
                                            );
                                        h.eq(h.length - t.dynamicMainBullets - 1).addClass(
                                            t.bulletActiveClass + '-prev'
                                        );
                                    } else
                                        u
                                            .prev()
                                            .addClass(t.bulletActiveClass + '-prev')
                                            .prev()
                                            .addClass(t.bulletActiveClass + '-prev-prev'),
                                            v
                                                .next()
                                                .addClass(t.bulletActiveClass + '-next')
                                                .next()
                                                .addClass(t.bulletActiveClass + '-next-next');
                                else
                                    u
                                        .prev()
                                        .addClass(t.bulletActiveClass + '-prev')
                                        .prev()
                                        .addClass(t.bulletActiveClass + '-prev-prev'),
                                        v
                                            .next()
                                            .addClass(t.bulletActiveClass + '-next')
                                            .next()
                                            .addClass(t.bulletActiveClass + '-next-next');
                            }
                        }
                        if (t.dynamicBullets) {
                            var g = Math.min(h.length, t.dynamicMainBullets + 4),
                                b =
                                    (this.pagination.bulletSize * g - this.pagination.bulletSize) /
                                        2 -
                                    d * this.pagination.bulletSize,
                                w = e ? 'right' : 'left';
                            h.css(this.isHorizontal() ? w : 'top', b + 'px');
                        }
                    }
                    if (
                        ('fraction' === t.type &&
                            (r.find('.' + t.currentClass).text(t.formatFractionCurrent(i + 1)),
                            r.find('.' + t.totalClass).text(t.formatFractionTotal(n))),
                        'progressbar' === t.type)
                    ) {
                        var y;
                        y = t.progressbarOpposite
                            ? this.isHorizontal()
                                ? 'vertical'
                                : 'horizontal'
                            : this.isHorizontal()
                            ? 'horizontal'
                            : 'vertical';
                        var x = (i + 1) / n,
                            T = 1,
                            E = 1;
                        'horizontal' === y ? (T = x) : (E = x),
                            r
                                .find('.' + t.progressbarFillClass)
                                .transform('translate3d(0,0,0) scaleX(' + T + ') scaleY(' + E + ')')
                                .transition(this.params.speed);
                    }
                    'custom' === t.type && t.renderCustom
                        ? (r.html(t.renderCustom(this, i + 1, n)),
                          this.emit('paginationRender', this, r[0]))
                        : this.emit('paginationUpdate', this, r[0]),
                        r[this.params.watchOverflow && this.isLocked ? 'addClass' : 'removeClass'](
                            t.lockClass
                        );
                }
            },
            render: function() {
                var e = this.params.pagination;
                if (
                    e.el &&
                    this.pagination.el &&
                    this.pagination.$el &&
                    0 !== this.pagination.$el.length
                ) {
                    var t =
                            this.virtual && this.params.virtual.enabled
                                ? this.virtual.slides.length
                                : this.slides.length,
                        i = this.pagination.$el,
                        s = '';
                    if ('bullets' === e.type) {
                        for (
                            var a = this.params.loop
                                    ? Math.ceil(
                                          (t - 2 * this.loopedSlides) / this.params.slidesPerGroup
                                      )
                                    : this.snapGrid.length,
                                r = 0;
                            r < a;
                            r += 1
                        )
                            e.renderBullet
                                ? (s += e.renderBullet.call(this, r, e.bulletClass))
                                : (s +=
                                      '<' +
                                      e.bulletElement +
                                      ' class="' +
                                      e.bulletClass +
                                      '"></' +
                                      e.bulletElement +
                                      '>');
                        i.html(s), (this.pagination.bullets = i.find('.' + e.bulletClass));
                    }
                    'fraction' === e.type &&
                        ((s = e.renderFraction
                            ? e.renderFraction.call(this, e.currentClass, e.totalClass)
                            : '<span class="' +
                              e.currentClass +
                              '"></span> / <span class="' +
                              e.totalClass +
                              '"></span>'),
                        i.html(s)),
                        'progressbar' === e.type &&
                            ((s = e.renderProgressbar
                                ? e.renderProgressbar.call(this, e.progressbarFillClass)
                                : '<span class="' + e.progressbarFillClass + '"></span>'),
                            i.html(s)),
                        'custom' !== e.type &&
                            this.emit('paginationRender', this.pagination.$el[0]);
                }
            },
            init: function() {
                var e = this,
                    t = e.params.pagination;
                if (t.el) {
                    var i = s(t.el);
                    0 !== i.length &&
                        (e.params.uniqueNavElements &&
                            'string' == typeof t.el &&
                            i.length > 1 &&
                            1 === e.$el.find(t.el).length &&
                            (i = e.$el.find(t.el)),
                        'bullets' === t.type && t.clickable && i.addClass(t.clickableClass),
                        i.addClass(t.modifierClass + t.type),
                        'bullets' === t.type &&
                            t.dynamicBullets &&
                            (i.addClass('' + t.modifierClass + t.type + '-dynamic'),
                            (e.pagination.dynamicBulletIndex = 0),
                            t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                        'progressbar' === t.type &&
                            t.progressbarOpposite &&
                            i.addClass(t.progressbarOppositeClass),
                        t.clickable &&
                            i.on('click', '.' + t.bulletClass, function(t) {
                                t.preventDefault();
                                var i = s(this).index() * e.params.slidesPerGroup;
                                e.params.loop && (i += e.loopedSlides), e.slideTo(i);
                            }),
                        n.extend(e.pagination, {$el: i, el: i[0]}));
                }
            },
            destroy: function() {
                var e = this.params.pagination;
                if (
                    e.el &&
                    this.pagination.el &&
                    this.pagination.$el &&
                    0 !== this.pagination.$el.length
                ) {
                    var t = this.pagination.$el;
                    t.removeClass(e.hiddenClass),
                        t.removeClass(e.modifierClass + e.type),
                        this.pagination.bullets &&
                            this.pagination.bullets.removeClass(e.bulletActiveClass),
                        e.clickable && t.off('click', '.' + e.bulletClass);
                }
            },
        },
        re = {
            setTranslate: function() {
                if (this.params.scrollbar.el && this.scrollbar.el) {
                    var e = this.scrollbar,
                        t = this.rtlTranslate,
                        i = this.progress,
                        s = e.dragSize,
                        a = e.trackSize,
                        r = e.$dragEl,
                        n = e.$el,
                        o = this.params.scrollbar,
                        l = s,
                        d = (a - s) * i;
                    t
                        ? (d = -d) > 0
                            ? ((l = s - d), (d = 0))
                            : -d + s > a && (l = a + d)
                        : d < 0
                        ? ((l = s + d), (d = 0))
                        : d + s > a && (l = a - d),
                        this.isHorizontal()
                            ? (r.transform('translate3d(' + d + 'px, 0, 0)'),
                              (r[0].style.width = l + 'px'))
                            : (r.transform('translate3d(0px, ' + d + 'px, 0)'),
                              (r[0].style.height = l + 'px')),
                        o.hide &&
                            (clearTimeout(this.scrollbar.timeout),
                            (n[0].style.opacity = 1),
                            (this.scrollbar.timeout = setTimeout(function() {
                                (n[0].style.opacity = 0), n.transition(400);
                            }, 1e3)));
                }
            },
            setTransition: function(e) {
                this.params.scrollbar.el &&
                    this.scrollbar.el &&
                    this.scrollbar.$dragEl.transition(e);
            },
            updateSize: function() {
                if (this.params.scrollbar.el && this.scrollbar.el) {
                    var e = this.scrollbar,
                        t = e.$dragEl,
                        i = e.$el;
                    (t[0].style.width = ''), (t[0].style.height = '');
                    var s,
                        a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                        r = this.size / this.virtualSize,
                        o = r * (a / this.size);
                    (s =
                        'auto' === this.params.scrollbar.dragSize
                            ? a * r
                            : parseInt(this.params.scrollbar.dragSize, 10)),
                        this.isHorizontal()
                            ? (t[0].style.width = s + 'px')
                            : (t[0].style.height = s + 'px'),
                        (i[0].style.display = r >= 1 ? 'none' : ''),
                        this.params.scrollbar.hide && (i[0].style.opacity = 0),
                        n.extend(e, {trackSize: a, divider: r, moveDivider: o, dragSize: s}),
                        e.$el[
                            this.params.watchOverflow && this.isLocked ? 'addClass' : 'removeClass'
                        ](this.params.scrollbar.lockClass);
                }
            },
            getPointerPosition: function(e) {
                return this.isHorizontal()
                    ? 'touchstart' === e.type || 'touchmove' === e.type
                        ? e.targetTouches[0].clientX
                        : e.clientX
                    : 'touchstart' === e.type || 'touchmove' === e.type
                    ? e.targetTouches[0].clientY
                    : e.clientY;
            },
            setDragPosition: function(e) {
                var t,
                    i = this.scrollbar,
                    s = this.rtlTranslate,
                    a = i.$el,
                    r = i.dragSize,
                    n = i.trackSize,
                    o = i.dragStartPos;
                (t =
                    (i.getPointerPosition(e) -
                        a.offset()[this.isHorizontal() ? 'left' : 'top'] -
                        (null !== o ? o : r / 2)) /
                    (n - r)),
                    (t = Math.max(Math.min(t, 1), 0)),
                    s && (t = 1 - t);
                var l = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
                this.updateProgress(l),
                    this.setTranslate(l),
                    this.updateActiveIndex(),
                    this.updateSlidesClasses();
            },
            onDragStart: function(e) {
                var t = this.params.scrollbar,
                    i = this.scrollbar,
                    s = this.$wrapperEl,
                    a = i.$el,
                    r = i.$dragEl;
                (this.scrollbar.isTouched = !0),
                    (this.scrollbar.dragStartPos =
                        e.target === r[0] || e.target === r
                            ? i.getPointerPosition(e) -
                              e.target.getBoundingClientRect()[this.isHorizontal() ? 'left' : 'top']
                            : null),
                    e.preventDefault(),
                    e.stopPropagation(),
                    s.transition(100),
                    r.transition(100),
                    i.setDragPosition(e),
                    clearTimeout(this.scrollbar.dragTimeout),
                    a.transition(0),
                    t.hide && a.css('opacity', 1),
                    this.params.cssMode && this.$wrapperEl.css('scroll-snap-type', 'none'),
                    this.emit('scrollbarDragStart', e);
            },
            onDragMove: function(e) {
                var t = this.scrollbar,
                    i = this.$wrapperEl,
                    s = t.$el,
                    a = t.$dragEl;
                this.scrollbar.isTouched &&
                    (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
                    t.setDragPosition(e),
                    i.transition(0),
                    s.transition(0),
                    a.transition(0),
                    this.emit('scrollbarDragMove', e));
            },
            onDragEnd: function(e) {
                var t = this.params.scrollbar,
                    i = this.scrollbar,
                    s = this.$wrapperEl,
                    a = i.$el;
                this.scrollbar.isTouched &&
                    ((this.scrollbar.isTouched = !1),
                    this.params.cssMode &&
                        (this.$wrapperEl.css('scroll-snap-type', ''), s.transition('')),
                    t.hide &&
                        (clearTimeout(this.scrollbar.dragTimeout),
                        (this.scrollbar.dragTimeout = n.nextTick(function() {
                            a.css('opacity', 0), a.transition(400);
                        }, 1e3))),
                    this.emit('scrollbarDragEnd', e),
                    t.snapOnRelease && this.slideToClosest());
            },
            enableDraggable: function() {
                if (this.params.scrollbar.el) {
                    var t = this.scrollbar,
                        i = this.touchEventsTouch,
                        s = this.touchEventsDesktop,
                        a = this.params,
                        r = t.$el[0],
                        n = !(!o.passiveListener || !a.passiveListeners) && {
                            passive: !1,
                            capture: !1,
                        },
                        l = !(!o.passiveListener || !a.passiveListeners) && {
                            passive: !0,
                            capture: !1,
                        };
                    o.touch
                        ? (r.addEventListener(i.start, this.scrollbar.onDragStart, n),
                          r.addEventListener(i.move, this.scrollbar.onDragMove, n),
                          r.addEventListener(i.end, this.scrollbar.onDragEnd, l))
                        : (r.addEventListener(s.start, this.scrollbar.onDragStart, n),
                          e.addEventListener(s.move, this.scrollbar.onDragMove, n),
                          e.addEventListener(s.end, this.scrollbar.onDragEnd, l));
                }
            },
            disableDraggable: function() {
                if (this.params.scrollbar.el) {
                    var t = this.scrollbar,
                        i = this.touchEventsTouch,
                        s = this.touchEventsDesktop,
                        a = this.params,
                        r = t.$el[0],
                        n = !(!o.passiveListener || !a.passiveListeners) && {
                            passive: !1,
                            capture: !1,
                        },
                        l = !(!o.passiveListener || !a.passiveListeners) && {
                            passive: !0,
                            capture: !1,
                        };
                    o.touch
                        ? (r.removeEventListener(i.start, this.scrollbar.onDragStart, n),
                          r.removeEventListener(i.move, this.scrollbar.onDragMove, n),
                          r.removeEventListener(i.end, this.scrollbar.onDragEnd, l))
                        : (r.removeEventListener(s.start, this.scrollbar.onDragStart, n),
                          e.removeEventListener(s.move, this.scrollbar.onDragMove, n),
                          e.removeEventListener(s.end, this.scrollbar.onDragEnd, l));
                }
            },
            init: function() {
                if (this.params.scrollbar.el) {
                    var e = this.scrollbar,
                        t = this.$el,
                        i = this.params.scrollbar,
                        a = s(i.el);
                    this.params.uniqueNavElements &&
                        'string' == typeof i.el &&
                        a.length > 1 &&
                        1 === t.find(i.el).length &&
                        (a = t.find(i.el));
                    var r = a.find('.' + this.params.scrollbar.dragClass);
                    0 === r.length &&
                        ((r = s('<div class="' + this.params.scrollbar.dragClass + '"></div>')),
                        a.append(r)),
                        n.extend(e, {$el: a, el: a[0], $dragEl: r, dragEl: r[0]}),
                        i.draggable && e.enableDraggable();
                }
            },
            destroy: function() {
                this.scrollbar.disableDraggable();
            },
        },
        ne = {
            setTransform: function(e, t) {
                var i = this.rtl,
                    a = s(e),
                    r = i ? -1 : 1,
                    n = a.attr('data-swiper-parallax') || '0',
                    o = a.attr('data-swiper-parallax-x'),
                    l = a.attr('data-swiper-parallax-y'),
                    d = a.attr('data-swiper-parallax-scale'),
                    h = a.attr('data-swiper-parallax-opacity');
                if (
                    (o || l
                        ? ((o = o || '0'), (l = l || '0'))
                        : this.isHorizontal()
                        ? ((o = n), (l = '0'))
                        : ((l = n), (o = '0')),
                    (o = o.indexOf('%') >= 0 ? parseInt(o, 10) * t * r + '%' : o * t * r + 'px'),
                    (l = l.indexOf('%') >= 0 ? parseInt(l, 10) * t + '%' : l * t + 'px'),
                    null != h)
                ) {
                    var p = h - (h - 1) * (1 - Math.abs(t));
                    a[0].style.opacity = p;
                }
                if (null == d) a.transform('translate3d(' + o + ', ' + l + ', 0px)');
                else {
                    var c = d - (d - 1) * (1 - Math.abs(t));
                    a.transform('translate3d(' + o + ', ' + l + ', 0px) scale(' + c + ')');
                }
            },
            setTranslate: function() {
                var e = this,
                    t = e.$el,
                    i = e.slides,
                    a = e.progress,
                    r = e.snapGrid;
                t
                    .children(
                        '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]'
                    )
                    .each(function(t, i) {
                        e.parallax.setTransform(i, a);
                    }),
                    i.each(function(t, i) {
                        var n = i.progress;
                        e.params.slidesPerGroup > 1 &&
                            'auto' !== e.params.slidesPerView &&
                            (n += Math.ceil(t / 2) - a * (r.length - 1)),
                            (n = Math.min(Math.max(n, -1), 1)),
                            s(i)
                                .find(
                                    '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]'
                                )
                                .each(function(t, i) {
                                    e.parallax.setTransform(i, n);
                                });
                    });
            },
            setTransition: function(e) {
                void 0 === e && (e = this.params.speed);
                this.$el
                    .find(
                        '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]'
                    )
                    .each(function(t, i) {
                        var a = s(i),
                            r = parseInt(a.attr('data-swiper-parallax-duration'), 10) || e;
                        0 === e && (r = 0), a.transition(r);
                    });
            },
        },
        oe = {
            getDistanceBetweenTouches: function(e) {
                if (e.targetTouches.length < 2) return 1;
                var t = e.targetTouches[0].pageX,
                    i = e.targetTouches[0].pageY,
                    s = e.targetTouches[1].pageX,
                    a = e.targetTouches[1].pageY;
                return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2));
            },
            onGestureStart: function(e) {
                var t = this.params.zoom,
                    i = this.zoom,
                    a = i.gesture;
                if (((i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1), !o.gestures)) {
                    if (
                        'touchstart' !== e.type ||
                        ('touchstart' === e.type && e.targetTouches.length < 2)
                    )
                        return;
                    (i.fakeGestureTouched = !0), (a.scaleStart = oe.getDistanceBetweenTouches(e));
                }
                (a.$slideEl && a.$slideEl.length) ||
                ((a.$slideEl = s(e.target).closest('.swiper-slide')),
                0 === a.$slideEl.length && (a.$slideEl = this.slides.eq(this.activeIndex)),
                (a.$imageEl = a.$slideEl.find('img, svg, canvas')),
                (a.$imageWrapEl = a.$imageEl.parent('.' + t.containerClass)),
                (a.maxRatio = a.$imageWrapEl.attr('data-swiper-zoom') || t.maxRatio),
                0 !== a.$imageWrapEl.length)
                    ? (a.$imageEl.transition(0), (this.zoom.isScaling = !0))
                    : (a.$imageEl = void 0);
            },
            onGestureChange: function(e) {
                var t = this.params.zoom,
                    i = this.zoom,
                    s = i.gesture;
                if (!o.gestures) {
                    if (
                        'touchmove' !== e.type ||
                        ('touchmove' === e.type && e.targetTouches.length < 2)
                    )
                        return;
                    (i.fakeGestureMoved = !0), (s.scaleMove = oe.getDistanceBetweenTouches(e));
                }
                s.$imageEl &&
                    0 !== s.$imageEl.length &&
                    (o.gestures
                        ? (i.scale = e.scale * i.currentScale)
                        : (i.scale = (s.scaleMove / s.scaleStart) * i.currentScale),
                    i.scale > s.maxRatio &&
                        (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, 0.5)),
                    i.scale < t.minRatio &&
                        (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, 0.5)),
                    s.$imageEl.transform('translate3d(0,0,0) scale(' + i.scale + ')'));
            },
            onGestureEnd: function(e) {
                var t = this.params.zoom,
                    i = this.zoom,
                    s = i.gesture;
                if (!o.gestures) {
                    if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                    if (
                        'touchend' !== e.type ||
                        ('touchend' === e.type && e.changedTouches.length < 2 && !I.android)
                    )
                        return;
                    (i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1);
                }
                s.$imageEl &&
                    0 !== s.$imageEl.length &&
                    ((i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio)),
                    s.$imageEl
                        .transition(this.params.speed)
                        .transform('translate3d(0,0,0) scale(' + i.scale + ')'),
                    (i.currentScale = i.scale),
                    (i.isScaling = !1),
                    1 === i.scale && (s.$slideEl = void 0));
            },
            onTouchStart: function(e) {
                var t = this.zoom,
                    i = t.gesture,
                    s = t.image;
                i.$imageEl &&
                    0 !== i.$imageEl.length &&
                    (s.isTouched ||
                        (I.android && e.preventDefault(),
                        (s.isTouched = !0),
                        (s.touchesStart.x =
                            'touchstart' === e.type ? e.targetTouches[0].pageX : e.pageX),
                        (s.touchesStart.y =
                            'touchstart' === e.type ? e.targetTouches[0].pageY : e.pageY)));
            },
            onTouchMove: function(e) {
                var t = this.zoom,
                    i = t.gesture,
                    s = t.image,
                    a = t.velocity;
                if (
                    i.$imageEl &&
                    0 !== i.$imageEl.length &&
                    ((this.allowClick = !1), s.isTouched && i.$slideEl)
                ) {
                    s.isMoved ||
                        ((s.width = i.$imageEl[0].offsetWidth),
                        (s.height = i.$imageEl[0].offsetHeight),
                        (s.startX = n.getTranslate(i.$imageWrapEl[0], 'x') || 0),
                        (s.startY = n.getTranslate(i.$imageWrapEl[0], 'y') || 0),
                        (i.slideWidth = i.$slideEl[0].offsetWidth),
                        (i.slideHeight = i.$slideEl[0].offsetHeight),
                        i.$imageWrapEl.transition(0),
                        this.rtl && ((s.startX = -s.startX), (s.startY = -s.startY)));
                    var r = s.width * t.scale,
                        o = s.height * t.scale;
                    if (!(r < i.slideWidth && o < i.slideHeight)) {
                        if (
                            ((s.minX = Math.min(i.slideWidth / 2 - r / 2, 0)),
                            (s.maxX = -s.minX),
                            (s.minY = Math.min(i.slideHeight / 2 - o / 2, 0)),
                            (s.maxY = -s.minY),
                            (s.touchesCurrent.x =
                                'touchmove' === e.type ? e.targetTouches[0].pageX : e.pageX),
                            (s.touchesCurrent.y =
                                'touchmove' === e.type ? e.targetTouches[0].pageY : e.pageY),
                            !s.isMoved && !t.isScaling)
                        ) {
                            if (
                                this.isHorizontal() &&
                                ((Math.floor(s.minX) === Math.floor(s.startX) &&
                                    s.touchesCurrent.x < s.touchesStart.x) ||
                                    (Math.floor(s.maxX) === Math.floor(s.startX) &&
                                        s.touchesCurrent.x > s.touchesStart.x))
                            )
                                return void (s.isTouched = !1);
                            if (
                                !this.isHorizontal() &&
                                ((Math.floor(s.minY) === Math.floor(s.startY) &&
                                    s.touchesCurrent.y < s.touchesStart.y) ||
                                    (Math.floor(s.maxY) === Math.floor(s.startY) &&
                                        s.touchesCurrent.y > s.touchesStart.y))
                            )
                                return void (s.isTouched = !1);
                        }
                        e.preventDefault(),
                            e.stopPropagation(),
                            (s.isMoved = !0),
                            (s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX),
                            (s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY),
                            s.currentX < s.minX &&
                                (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, 0.8)),
                            s.currentX > s.maxX &&
                                (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, 0.8)),
                            s.currentY < s.minY &&
                                (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, 0.8)),
                            s.currentY > s.maxY &&
                                (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, 0.8)),
                            a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x),
                            a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y),
                            a.prevTime || (a.prevTime = Date.now()),
                            (a.x =
                                (s.touchesCurrent.x - a.prevPositionX) /
                                (Date.now() - a.prevTime) /
                                2),
                            (a.y =
                                (s.touchesCurrent.y - a.prevPositionY) /
                                (Date.now() - a.prevTime) /
                                2),
                            Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0),
                            Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0),
                            (a.prevPositionX = s.touchesCurrent.x),
                            (a.prevPositionY = s.touchesCurrent.y),
                            (a.prevTime = Date.now()),
                            i.$imageWrapEl.transform(
                                'translate3d(' + s.currentX + 'px, ' + s.currentY + 'px,0)'
                            );
                    }
                }
            },
            onTouchEnd: function() {
                var e = this.zoom,
                    t = e.gesture,
                    i = e.image,
                    s = e.velocity;
                if (t.$imageEl && 0 !== t.$imageEl.length) {
                    if (!i.isTouched || !i.isMoved)
                        return (i.isTouched = !1), void (i.isMoved = !1);
                    (i.isTouched = !1), (i.isMoved = !1);
                    var a = 300,
                        r = 300,
                        n = s.x * a,
                        o = i.currentX + n,
                        l = s.y * r,
                        d = i.currentY + l;
                    0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)),
                        0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
                    var h = Math.max(a, r);
                    (i.currentX = o), (i.currentY = d);
                    var p = i.width * e.scale,
                        c = i.height * e.scale;
                    (i.minX = Math.min(t.slideWidth / 2 - p / 2, 0)),
                        (i.maxX = -i.minX),
                        (i.minY = Math.min(t.slideHeight / 2 - c / 2, 0)),
                        (i.maxY = -i.minY),
                        (i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX)),
                        (i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY)),
                        t.$imageWrapEl
                            .transition(h)
                            .transform('translate3d(' + i.currentX + 'px, ' + i.currentY + 'px,0)');
                }
            },
            onTransitionEnd: function() {
                var e = this.zoom,
                    t = e.gesture;
                t.$slideEl &&
                    this.previousIndex !== this.activeIndex &&
                    (t.$imageEl.transform('translate3d(0,0,0) scale(1)'),
                    t.$imageWrapEl.transform('translate3d(0,0,0)'),
                    (e.scale = 1),
                    (e.currentScale = 1),
                    (t.$slideEl = void 0),
                    (t.$imageEl = void 0),
                    (t.$imageWrapEl = void 0));
            },
            toggle: function(e) {
                var t = this.zoom;
                t.scale && 1 !== t.scale ? t.out() : t.in(e);
            },
            in: function(e) {
                var t,
                    i,
                    a,
                    r,
                    n,
                    o,
                    l,
                    d,
                    h,
                    p,
                    c,
                    u,
                    v,
                    f,
                    m,
                    g,
                    b = this.zoom,
                    w = this.params.zoom,
                    y = b.gesture,
                    x = b.image;
                (y.$slideEl ||
                    ((y.$slideEl = this.clickedSlide
                        ? s(this.clickedSlide)
                        : this.slides.eq(this.activeIndex)),
                    (y.$imageEl = y.$slideEl.find('img, svg, canvas')),
                    (y.$imageWrapEl = y.$imageEl.parent('.' + w.containerClass))),
                y.$imageEl && 0 !== y.$imageEl.length) &&
                    (y.$slideEl.addClass('' + w.zoomedSlideClass),
                    void 0 === x.touchesStart.x && e
                        ? ((t = 'touchend' === e.type ? e.changedTouches[0].pageX : e.pageX),
                          (i = 'touchend' === e.type ? e.changedTouches[0].pageY : e.pageY))
                        : ((t = x.touchesStart.x), (i = x.touchesStart.y)),
                    (b.scale = y.$imageWrapEl.attr('data-swiper-zoom') || w.maxRatio),
                    (b.currentScale = y.$imageWrapEl.attr('data-swiper-zoom') || w.maxRatio),
                    e
                        ? ((m = y.$slideEl[0].offsetWidth),
                          (g = y.$slideEl[0].offsetHeight),
                          (a = y.$slideEl.offset().left + m / 2 - t),
                          (r = y.$slideEl.offset().top + g / 2 - i),
                          (l = y.$imageEl[0].offsetWidth),
                          (d = y.$imageEl[0].offsetHeight),
                          (h = l * b.scale),
                          (p = d * b.scale),
                          (v = -(c = Math.min(m / 2 - h / 2, 0))),
                          (f = -(u = Math.min(g / 2 - p / 2, 0))),
                          (n = a * b.scale) < c && (n = c),
                          n > v && (n = v),
                          (o = r * b.scale) < u && (o = u),
                          o > f && (o = f))
                        : ((n = 0), (o = 0)),
                    y.$imageWrapEl
                        .transition(300)
                        .transform('translate3d(' + n + 'px, ' + o + 'px,0)'),
                    y.$imageEl
                        .transition(300)
                        .transform('translate3d(0,0,0) scale(' + b.scale + ')'));
            },
            out: function() {
                var e = this.zoom,
                    t = this.params.zoom,
                    i = e.gesture;
                i.$slideEl ||
                    ((i.$slideEl = this.clickedSlide
                        ? s(this.clickedSlide)
                        : this.slides.eq(this.activeIndex)),
                    (i.$imageEl = i.$slideEl.find('img, svg, canvas')),
                    (i.$imageWrapEl = i.$imageEl.parent('.' + t.containerClass))),
                    i.$imageEl &&
                        0 !== i.$imageEl.length &&
                        ((e.scale = 1),
                        (e.currentScale = 1),
                        i.$imageWrapEl.transition(300).transform('translate3d(0,0,0)'),
                        i.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)'),
                        i.$slideEl.removeClass('' + t.zoomedSlideClass),
                        (i.$slideEl = void 0));
            },
            enable: function() {
                var e = this.zoom;
                if (!e.enabled) {
                    e.enabled = !0;
                    var t = !(
                            'touchstart' !== this.touchEvents.start ||
                            !o.passiveListener ||
                            !this.params.passiveListeners
                        ) && {passive: !0, capture: !1},
                        i = !o.passiveListener || {passive: !1, capture: !0};
                    o.gestures
                        ? (this.$wrapperEl.on('gesturestart', '.swiper-slide', e.onGestureStart, t),
                          this.$wrapperEl.on(
                              'gesturechange',
                              '.swiper-slide',
                              e.onGestureChange,
                              t
                          ),
                          this.$wrapperEl.on('gestureend', '.swiper-slide', e.onGestureEnd, t))
                        : 'touchstart' === this.touchEvents.start &&
                          (this.$wrapperEl.on(
                              this.touchEvents.start,
                              '.swiper-slide',
                              e.onGestureStart,
                              t
                          ),
                          this.$wrapperEl.on(
                              this.touchEvents.move,
                              '.swiper-slide',
                              e.onGestureChange,
                              i
                          ),
                          this.$wrapperEl.on(
                              this.touchEvents.end,
                              '.swiper-slide',
                              e.onGestureEnd,
                              t
                          ),
                          this.touchEvents.cancel &&
                              this.$wrapperEl.on(
                                  this.touchEvents.cancel,
                                  '.swiper-slide',
                                  e.onGestureEnd,
                                  t
                              )),
                        this.$wrapperEl.on(
                            this.touchEvents.move,
                            '.' + this.params.zoom.containerClass,
                            e.onTouchMove,
                            i
                        );
                }
            },
            disable: function() {
                var e = this.zoom;
                if (e.enabled) {
                    this.zoom.enabled = !1;
                    var t = !(
                            'touchstart' !== this.touchEvents.start ||
                            !o.passiveListener ||
                            !this.params.passiveListeners
                        ) && {passive: !0, capture: !1},
                        i = !o.passiveListener || {passive: !1, capture: !0};
                    o.gestures
                        ? (this.$wrapperEl.off(
                              'gesturestart',
                              '.swiper-slide',
                              e.onGestureStart,
                              t
                          ),
                          this.$wrapperEl.off(
                              'gesturechange',
                              '.swiper-slide',
                              e.onGestureChange,
                              t
                          ),
                          this.$wrapperEl.off('gestureend', '.swiper-slide', e.onGestureEnd, t))
                        : 'touchstart' === this.touchEvents.start &&
                          (this.$wrapperEl.off(
                              this.touchEvents.start,
                              '.swiper-slide',
                              e.onGestureStart,
                              t
                          ),
                          this.$wrapperEl.off(
                              this.touchEvents.move,
                              '.swiper-slide',
                              e.onGestureChange,
                              i
                          ),
                          this.$wrapperEl.off(
                              this.touchEvents.end,
                              '.swiper-slide',
                              e.onGestureEnd,
                              t
                          ),
                          this.touchEvents.cancel &&
                              this.$wrapperEl.off(
                                  this.touchEvents.cancel,
                                  '.swiper-slide',
                                  e.onGestureEnd,
                                  t
                              )),
                        this.$wrapperEl.off(
                            this.touchEvents.move,
                            '.' + this.params.zoom.containerClass,
                            e.onTouchMove,
                            i
                        );
                }
            },
        },
        le = {
            loadInSlide: function(e, t) {
                void 0 === t && (t = !0);
                var i = this,
                    a = i.params.lazy;
                if (void 0 !== e && 0 !== i.slides.length) {
                    var r =
                            i.virtual && i.params.virtual.enabled
                                ? i.$wrapperEl.children(
                                      '.' +
                                          i.params.slideClass +
                                          '[data-swiper-slide-index="' +
                                          e +
                                          '"]'
                                  )
                                : i.slides.eq(e),
                        n = r.find(
                            '.' +
                                a.elementClass +
                                ':not(.' +
                                a.loadedClass +
                                '):not(.' +
                                a.loadingClass +
                                ')'
                        );
                    !r.hasClass(a.elementClass) ||
                        r.hasClass(a.loadedClass) ||
                        r.hasClass(a.loadingClass) ||
                        (n = n.add(r[0])),
                        0 !== n.length &&
                            n.each(function(e, n) {
                                var o = s(n);
                                o.addClass(a.loadingClass);
                                var l = o.attr('data-background'),
                                    d = o.attr('data-src'),
                                    h = o.attr('data-srcset'),
                                    p = o.attr('data-sizes');
                                i.loadImage(o[0], d || l, h, p, !1, function() {
                                    if (null != i && i && (!i || i.params) && !i.destroyed) {
                                        if (
                                            (l
                                                ? (o.css('background-image', 'url("' + l + '")'),
                                                  o.removeAttr('data-background'))
                                                : (h &&
                                                      (o.attr('srcset', h),
                                                      o.removeAttr('data-srcset')),
                                                  p &&
                                                      (o.attr('sizes', p),
                                                      o.removeAttr('data-sizes')),
                                                  d &&
                                                      (o.attr('src', d), o.removeAttr('data-src'))),
                                            o.addClass(a.loadedClass).removeClass(a.loadingClass),
                                            r.find('.' + a.preloaderClass).remove(),
                                            i.params.loop && t)
                                        ) {
                                            var e = r.attr('data-swiper-slide-index');
                                            if (r.hasClass(i.params.slideDuplicateClass)) {
                                                var s = i.$wrapperEl.children(
                                                    '[data-swiper-slide-index="' +
                                                        e +
                                                        '"]:not(.' +
                                                        i.params.slideDuplicateClass +
                                                        ')'
                                                );
                                                i.lazy.loadInSlide(s.index(), !1);
                                            } else {
                                                var n = i.$wrapperEl.children(
                                                    '.' +
                                                        i.params.slideDuplicateClass +
                                                        '[data-swiper-slide-index="' +
                                                        e +
                                                        '"]'
                                                );
                                                i.lazy.loadInSlide(n.index(), !1);
                                            }
                                        }
                                        i.emit('lazyImageReady', r[0], o[0]);
                                    }
                                }),
                                    i.emit('lazyImageLoad', r[0], o[0]);
                            });
                }
            },
            load: function() {
                var e = this,
                    t = e.$wrapperEl,
                    i = e.params,
                    a = e.slides,
                    r = e.activeIndex,
                    n = e.virtual && i.virtual.enabled,
                    o = i.lazy,
                    l = i.slidesPerView;
                function d(e) {
                    if (n) {
                        if (
                            t.children('.' + i.slideClass + '[data-swiper-slide-index="' + e + '"]')
                                .length
                        )
                            return !0;
                    } else if (a[e]) return !0;
                    return !1;
                }
                function h(e) {
                    return n ? s(e).attr('data-swiper-slide-index') : s(e).index();
                }
                if (
                    ('auto' === l && (l = 0),
                    e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
                    e.params.watchSlidesVisibility)
                )
                    t.children('.' + i.slideVisibleClass).each(function(t, i) {
                        var a = n ? s(i).attr('data-swiper-slide-index') : s(i).index();
                        e.lazy.loadInSlide(a);
                    });
                else if (l > 1) for (var p = r; p < r + l; p += 1) d(p) && e.lazy.loadInSlide(p);
                else e.lazy.loadInSlide(r);
                if (o.loadPrevNext)
                    if (l > 1 || (o.loadPrevNextAmount && o.loadPrevNextAmount > 1)) {
                        for (
                            var c = o.loadPrevNextAmount,
                                u = l,
                                v = Math.min(r + u + Math.max(c, u), a.length),
                                f = Math.max(r - Math.max(u, c), 0),
                                m = r + l;
                            m < v;
                            m += 1
                        )
                            d(m) && e.lazy.loadInSlide(m);
                        for (var g = f; g < r; g += 1) d(g) && e.lazy.loadInSlide(g);
                    } else {
                        var b = t.children('.' + i.slideNextClass);
                        b.length > 0 && e.lazy.loadInSlide(h(b));
                        var w = t.children('.' + i.slidePrevClass);
                        w.length > 0 && e.lazy.loadInSlide(h(w));
                    }
            },
        },
        de = {
            LinearSpline: function(e, t) {
                var i,
                    s,
                    a,
                    r,
                    n,
                    o = function(e, t) {
                        for (s = -1, i = e.length; i - s > 1; )
                            e[(a = (i + s) >> 1)] <= t ? (s = a) : (i = a);
                        return i;
                    };
                return (
                    (this.x = e),
                    (this.y = t),
                    (this.lastIndex = e.length - 1),
                    (this.interpolate = function(e) {
                        return e
                            ? ((n = o(this.x, e)),
                              (r = n - 1),
                              ((e - this.x[r]) * (this.y[n] - this.y[r])) /
                                  (this.x[n] - this.x[r]) +
                                  this.y[r])
                            : 0;
                    }),
                    this
                );
            },
            getInterpolateFunction: function(e) {
                this.controller.spline ||
                    (this.controller.spline = this.params.loop
                        ? new de.LinearSpline(this.slidesGrid, e.slidesGrid)
                        : new de.LinearSpline(this.snapGrid, e.snapGrid));
            },
            setTranslate: function(e, t) {
                var i,
                    s,
                    a = this,
                    r = a.controller.control;
                function n(e) {
                    var t = a.rtlTranslate ? -a.translate : a.translate;
                    'slide' === a.params.controller.by &&
                        (a.controller.getInterpolateFunction(e),
                        (s = -a.controller.spline.interpolate(-t))),
                        (s && 'container' !== a.params.controller.by) ||
                            ((i =
                                (e.maxTranslate() - e.minTranslate()) /
                                (a.maxTranslate() - a.minTranslate())),
                            (s = (t - a.minTranslate()) * i + e.minTranslate())),
                        a.params.controller.inverse && (s = e.maxTranslate() - s),
                        e.updateProgress(s),
                        e.setTranslate(s, a),
                        e.updateActiveIndex(),
                        e.updateSlidesClasses();
                }
                if (Array.isArray(r))
                    for (var o = 0; o < r.length; o += 1)
                        r[o] !== t && r[o] instanceof W && n(r[o]);
                else r instanceof W && t !== r && n(r);
            },
            setTransition: function(e, t) {
                var i,
                    s = this,
                    a = s.controller.control;
                function r(t) {
                    t.setTransition(e, s),
                        0 !== e &&
                            (t.transitionStart(),
                            t.params.autoHeight &&
                                n.nextTick(function() {
                                    t.updateAutoHeight();
                                }),
                            t.$wrapperEl.transitionEnd(function() {
                                a &&
                                    (t.params.loop &&
                                        'slide' === s.params.controller.by &&
                                        t.loopFix(),
                                    t.transitionEnd());
                            }));
                }
                if (Array.isArray(a))
                    for (i = 0; i < a.length; i += 1) a[i] !== t && a[i] instanceof W && r(a[i]);
                else a instanceof W && t !== a && r(a);
            },
        },
        he = {
            makeElFocusable: function(e) {
                return e.attr('tabIndex', '0'), e;
            },
            addElRole: function(e, t) {
                return e.attr('role', t), e;
            },
            addElLabel: function(e, t) {
                return e.attr('aria-label', t), e;
            },
            disableEl: function(e) {
                return e.attr('aria-disabled', !0), e;
            },
            enableEl: function(e) {
                return e.attr('aria-disabled', !1), e;
            },
            onEnterKey: function(e) {
                var t = this.params.a11y;
                if (13 === e.keyCode) {
                    var i = s(e.target);
                    this.navigation &&
                        this.navigation.$nextEl &&
                        i.is(this.navigation.$nextEl) &&
                        ((this.isEnd && !this.params.loop) || this.slideNext(),
                        this.isEnd
                            ? this.a11y.notify(t.lastSlideMessage)
                            : this.a11y.notify(t.nextSlideMessage)),
                        this.navigation &&
                            this.navigation.$prevEl &&
                            i.is(this.navigation.$prevEl) &&
                            ((this.isBeginning && !this.params.loop) || this.slidePrev(),
                            this.isBeginning
                                ? this.a11y.notify(t.firstSlideMessage)
                                : this.a11y.notify(t.prevSlideMessage)),
                        this.pagination &&
                            i.is('.' + this.params.pagination.bulletClass) &&
                            i[0].click();
                }
            },
            notify: function(e) {
                var t = this.a11y.liveRegion;
                0 !== t.length && (t.html(''), t.html(e));
            },
            updateNavigation: function() {
                if (!this.params.loop && this.navigation) {
                    var e = this.navigation,
                        t = e.$nextEl,
                        i = e.$prevEl;
                    i &&
                        i.length > 0 &&
                        (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)),
                        t &&
                            t.length > 0 &&
                            (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t));
                }
            },
            updatePagination: function() {
                var e = this,
                    t = e.params.a11y;
                e.pagination &&
                    e.params.pagination.clickable &&
                    e.pagination.bullets &&
                    e.pagination.bullets.length &&
                    e.pagination.bullets.each(function(i, a) {
                        var r = s(a);
                        e.a11y.makeElFocusable(r),
                            e.a11y.addElRole(r, 'button'),
                            e.a11y.addElLabel(
                                r,
                                t.paginationBulletMessage.replace(/{{index}}/, r.index() + 1)
                            );
                    });
            },
            init: function() {
                this.$el.append(this.a11y.liveRegion);
                var e,
                    t,
                    i = this.params.a11y;
                this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl),
                    this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl),
                    e &&
                        (this.a11y.makeElFocusable(e),
                        this.a11y.addElRole(e, 'button'),
                        this.a11y.addElLabel(e, i.nextSlideMessage),
                        e.on('keydown', this.a11y.onEnterKey)),
                    t &&
                        (this.a11y.makeElFocusable(t),
                        this.a11y.addElRole(t, 'button'),
                        this.a11y.addElLabel(t, i.prevSlideMessage),
                        t.on('keydown', this.a11y.onEnterKey)),
                    this.pagination &&
                        this.params.pagination.clickable &&
                        this.pagination.bullets &&
                        this.pagination.bullets.length &&
                        this.pagination.$el.on(
                            'keydown',
                            '.' + this.params.pagination.bulletClass,
                            this.a11y.onEnterKey
                        );
            },
            destroy: function() {
                var e, t;
                this.a11y.liveRegion &&
                    this.a11y.liveRegion.length > 0 &&
                    this.a11y.liveRegion.remove(),
                    this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl),
                    this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl),
                    e && e.off('keydown', this.a11y.onEnterKey),
                    t && t.off('keydown', this.a11y.onEnterKey),
                    this.pagination &&
                        this.params.pagination.clickable &&
                        this.pagination.bullets &&
                        this.pagination.bullets.length &&
                        this.pagination.$el.off(
                            'keydown',
                            '.' + this.params.pagination.bulletClass,
                            this.a11y.onEnterKey
                        );
            },
        },
        pe = {
            init: function() {
                if (this.params.history) {
                    if (!t.history || !t.history.pushState)
                        return (
                            (this.params.history.enabled = !1),
                            void (this.params.hashNavigation.enabled = !0)
                        );
                    var e = this.history;
                    (e.initialized = !0),
                        (e.paths = pe.getPathValues()),
                        (e.paths.key || e.paths.value) &&
                            (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit),
                            this.params.history.replaceState ||
                                t.addEventListener('popstate', this.history.setHistoryPopState));
                }
            },
            destroy: function() {
                this.params.history.replaceState ||
                    t.removeEventListener('popstate', this.history.setHistoryPopState);
            },
            setHistoryPopState: function() {
                (this.history.paths = pe.getPathValues()),
                    this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1);
            },
            getPathValues: function() {
                var e = t.location.pathname
                        .slice(1)
                        .split('/')
                        .filter(function(e) {
                            return '' !== e;
                        }),
                    i = e.length;
                return {key: e[i - 2], value: e[i - 1]};
            },
            setHistory: function(e, i) {
                if (this.history.initialized && this.params.history.enabled) {
                    var s = this.slides.eq(i),
                        a = pe.slugify(s.attr('data-history'));
                    t.location.pathname.includes(e) || (a = e + '/' + a);
                    var r = t.history.state;
                    (r && r.value === a) ||
                        (this.params.history.replaceState
                            ? t.history.replaceState({value: a}, null, a)
                            : t.history.pushState({value: a}, null, a));
                }
            },
            slugify: function(e) {
                return e
                    .toString()
                    .replace(/\s+/g, '-')
                    .replace(/[^\w-]+/g, '')
                    .replace(/--+/g, '-')
                    .replace(/^-+/, '')
                    .replace(/-+$/, '');
            },
            scrollToSlide: function(e, t, i) {
                if (t)
                    for (var s = 0, a = this.slides.length; s < a; s += 1) {
                        var r = this.slides.eq(s);
                        if (
                            pe.slugify(r.attr('data-history')) === t &&
                            !r.hasClass(this.params.slideDuplicateClass)
                        ) {
                            var n = r.index();
                            this.slideTo(n, e, i);
                        }
                    }
                else this.slideTo(0, e, i);
            },
        },
        ce = {
            onHashCange: function() {
                var t = e.location.hash.replace('#', '');
                if (t !== this.slides.eq(this.activeIndex).attr('data-hash')) {
                    var i = this.$wrapperEl
                        .children('.' + this.params.slideClass + '[data-hash="' + t + '"]')
                        .index();
                    if (void 0 === i) return;
                    this.slideTo(i);
                }
            },
            setHash: function() {
                if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
                    if (
                        this.params.hashNavigation.replaceState &&
                        t.history &&
                        t.history.replaceState
                    )
                        t.history.replaceState(
                            null,
                            null,
                            '#' + this.slides.eq(this.activeIndex).attr('data-hash') || ''
                        );
                    else {
                        var i = this.slides.eq(this.activeIndex),
                            s = i.attr('data-hash') || i.attr('data-history');
                        e.location.hash = s || '';
                    }
            },
            init: function() {
                if (
                    !(
                        !this.params.hashNavigation.enabled ||
                        (this.params.history && this.params.history.enabled)
                    )
                ) {
                    this.hashNavigation.initialized = !0;
                    var i = e.location.hash.replace('#', '');
                    if (i)
                        for (var a = 0, r = this.slides.length; a < r; a += 1) {
                            var n = this.slides.eq(a);
                            if (
                                (n.attr('data-hash') || n.attr('data-history')) === i &&
                                !n.hasClass(this.params.slideDuplicateClass)
                            ) {
                                var o = n.index();
                                this.slideTo(o, 0, this.params.runCallbacksOnInit, !0);
                            }
                        }
                    this.params.hashNavigation.watchState &&
                        s(t).on('hashchange', this.hashNavigation.onHashCange);
                }
            },
            destroy: function() {
                this.params.hashNavigation.watchState &&
                    s(t).off('hashchange', this.hashNavigation.onHashCange);
            },
        },
        ue = {
            run: function() {
                var e = this,
                    t = e.slides.eq(e.activeIndex),
                    i = e.params.autoplay.delay;
                t.attr('data-swiper-autoplay') &&
                    (i = t.attr('data-swiper-autoplay') || e.params.autoplay.delay),
                    clearTimeout(e.autoplay.timeout),
                    (e.autoplay.timeout = n.nextTick(function() {
                        e.params.autoplay.reverseDirection
                            ? e.params.loop
                                ? (e.loopFix(),
                                  e.slidePrev(e.params.speed, !0, !0),
                                  e.emit('autoplay'))
                                : e.isBeginning
                                ? e.params.autoplay.stopOnLastSlide
                                    ? e.autoplay.stop()
                                    : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                                      e.emit('autoplay'))
                                : (e.slidePrev(e.params.speed, !0, !0), e.emit('autoplay'))
                            : e.params.loop
                            ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit('autoplay'))
                            : e.isEnd
                            ? e.params.autoplay.stopOnLastSlide
                                ? e.autoplay.stop()
                                : (e.slideTo(0, e.params.speed, !0, !0), e.emit('autoplay'))
                            : (e.slideNext(e.params.speed, !0, !0), e.emit('autoplay')),
                            e.params.cssMode && e.autoplay.running && e.autoplay.run();
                    }, i));
            },
            start: function() {
                return (
                    void 0 === this.autoplay.timeout &&
                    !this.autoplay.running &&
                        ((this.autoplay.running = !0),
                        this.emit('autoplayStart'),
                        this.autoplay.run(),
                        !0)
                );
            },
            stop: function() {
                return (
                    !!this.autoplay.running &&
                    void 0 !== this.autoplay.timeout &&
                        (this.autoplay.timeout &&
                            (clearTimeout(this.autoplay.timeout), (this.autoplay.timeout = void 0)),
                        (this.autoplay.running = !1),
                        this.emit('autoplayStop'),
                        !0)
                );
            },
            pause: function(e) {
                this.autoplay.running &&
                    (this.autoplay.paused ||
                        (this.autoplay.timeout && clearTimeout(this.autoplay.timeout),
                        (this.autoplay.paused = !0),
                        0 !== e && this.params.autoplay.waitForTransition
                            ? (this.$wrapperEl[0].addEventListener(
                                  'transitionend',
                                  this.autoplay.onTransitionEnd
                              ),
                              this.$wrapperEl[0].addEventListener(
                                  'webkitTransitionEnd',
                                  this.autoplay.onTransitionEnd
                              ))
                            : ((this.autoplay.paused = !1), this.autoplay.run())));
            },
        },
        ve = {
            setTranslate: function() {
                for (var e = this.slides, t = 0; t < e.length; t += 1) {
                    var i = this.slides.eq(t),
                        s = -i[0].swiperSlideOffset;
                    this.params.virtualTranslate || (s -= this.translate);
                    var a = 0;
                    this.isHorizontal() || ((a = s), (s = 0));
                    var r = this.params.fadeEffect.crossFade
                        ? Math.max(1 - Math.abs(i[0].progress), 0)
                        : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                    i.css({opacity: r}).transform('translate3d(' + s + 'px, ' + a + 'px, 0px)');
                }
            },
            setTransition: function(e) {
                var t = this,
                    i = t.slides,
                    s = t.$wrapperEl;
                if ((i.transition(e), t.params.virtualTranslate && 0 !== e)) {
                    var a = !1;
                    i.transitionEnd(function() {
                        if (!a && t && !t.destroyed) {
                            (a = !0), (t.animating = !1);
                            for (
                                var e = ['webkitTransitionEnd', 'transitionend'], i = 0;
                                i < e.length;
                                i += 1
                            )
                                s.trigger(e[i]);
                        }
                    });
                }
            },
        },
        fe = {
            setTranslate: function() {
                var e,
                    t = this.$el,
                    i = this.$wrapperEl,
                    a = this.slides,
                    r = this.width,
                    n = this.height,
                    o = this.rtlTranslate,
                    l = this.size,
                    d = this.params.cubeEffect,
                    h = this.isHorizontal(),
                    p = this.virtual && this.params.virtual.enabled,
                    c = 0;
                d.shadow &&
                    (h
                        ? (0 === (e = i.find('.swiper-cube-shadow')).length &&
                              ((e = s('<div class="swiper-cube-shadow"></div>')), i.append(e)),
                          e.css({height: r + 'px'}))
                        : 0 === (e = t.find('.swiper-cube-shadow')).length &&
                          ((e = s('<div class="swiper-cube-shadow"></div>')), t.append(e)));
                for (var u = 0; u < a.length; u += 1) {
                    var v = a.eq(u),
                        f = u;
                    p && (f = parseInt(v.attr('data-swiper-slide-index'), 10));
                    var m = 90 * f,
                        g = Math.floor(m / 360);
                    o && ((m = -m), (g = Math.floor(-m / 360)));
                    var b = Math.max(Math.min(v[0].progress, 1), -1),
                        w = 0,
                        y = 0,
                        x = 0;
                    f % 4 == 0
                        ? ((w = 4 * -g * l), (x = 0))
                        : (f - 1) % 4 == 0
                        ? ((w = 0), (x = 4 * -g * l))
                        : (f - 2) % 4 == 0
                        ? ((w = l + 4 * g * l), (x = l))
                        : (f - 3) % 4 == 0 && ((w = -l), (x = 3 * l + 4 * l * g)),
                        o && (w = -w),
                        h || ((y = w), (w = 0));
                    var T =
                        'rotateX(' +
                        (h ? 0 : -m) +
                        'deg) rotateY(' +
                        (h ? m : 0) +
                        'deg) translate3d(' +
                        w +
                        'px, ' +
                        y +
                        'px, ' +
                        x +
                        'px)';
                    if (
                        (b <= 1 && b > -1 && ((c = 90 * f + 90 * b), o && (c = 90 * -f - 90 * b)),
                        v.transform(T),
                        d.slideShadows)
                    ) {
                        var E = h
                                ? v.find('.swiper-slide-shadow-left')
                                : v.find('.swiper-slide-shadow-top'),
                            S = h
                                ? v.find('.swiper-slide-shadow-right')
                                : v.find('.swiper-slide-shadow-bottom');
                        0 === E.length &&
                            ((E = s(
                                '<div class="swiper-slide-shadow-' +
                                    (h ? 'left' : 'top') +
                                    '"></div>'
                            )),
                            v.append(E)),
                            0 === S.length &&
                                ((S = s(
                                    '<div class="swiper-slide-shadow-' +
                                        (h ? 'right' : 'bottom') +
                                        '"></div>'
                                )),
                                v.append(S)),
                            E.length && (E[0].style.opacity = Math.max(-b, 0)),
                            S.length && (S[0].style.opacity = Math.max(b, 0));
                    }
                }
                if (
                    (i.css({
                        '-webkit-transform-origin': '50% 50% -' + l / 2 + 'px',
                        '-moz-transform-origin': '50% 50% -' + l / 2 + 'px',
                        '-ms-transform-origin': '50% 50% -' + l / 2 + 'px',
                        'transform-origin': '50% 50% -' + l / 2 + 'px',
                    }),
                    d.shadow)
                )
                    if (h)
                        e.transform(
                            'translate3d(0px, ' +
                                (r / 2 + d.shadowOffset) +
                                'px, ' +
                                -r / 2 +
                                'px) rotateX(90deg) rotateZ(0deg) scale(' +
                                d.shadowScale +
                                ')'
                        );
                    else {
                        var C = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
                            M =
                                1.5 -
                                (Math.sin((2 * C * Math.PI) / 360) / 2 +
                                    Math.cos((2 * C * Math.PI) / 360) / 2),
                            P = d.shadowScale,
                            z = d.shadowScale / M,
                            k = d.shadowOffset;
                        e.transform(
                            'scale3d(' +
                                P +
                                ', 1, ' +
                                z +
                                ') translate3d(0px, ' +
                                (n / 2 + k) +
                                'px, ' +
                                -n / 2 / z +
                                'px) rotateX(-90deg)'
                        );
                    }
                var $ = j.isSafari || j.isUiWebView ? -l / 2 : 0;
                i.transform(
                    'translate3d(0px,0,' +
                        $ +
                        'px) rotateX(' +
                        (this.isHorizontal() ? 0 : c) +
                        'deg) rotateY(' +
                        (this.isHorizontal() ? -c : 0) +
                        'deg)'
                );
            },
            setTransition: function(e) {
                var t = this.$el;
                this.slides
                    .transition(e)
                    .find(
                        '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
                    )
                    .transition(e),
                    this.params.cubeEffect.shadow &&
                        !this.isHorizontal() &&
                        t.find('.swiper-cube-shadow').transition(e);
            },
        },
        me = {
            setTranslate: function() {
                for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
                    var a = e.eq(i),
                        r = a[0].progress;
                    this.params.flipEffect.limitRotation &&
                        (r = Math.max(Math.min(a[0].progress, 1), -1));
                    var n = -180 * r,
                        o = 0,
                        l = -a[0].swiperSlideOffset,
                        d = 0;
                    if (
                        (this.isHorizontal()
                            ? t && (n = -n)
                            : ((d = l), (l = 0), (o = -n), (n = 0)),
                        (a[0].style.zIndex = -Math.abs(Math.round(r)) + e.length),
                        this.params.flipEffect.slideShadows)
                    ) {
                        var h = this.isHorizontal()
                                ? a.find('.swiper-slide-shadow-left')
                                : a.find('.swiper-slide-shadow-top'),
                            p = this.isHorizontal()
                                ? a.find('.swiper-slide-shadow-right')
                                : a.find('.swiper-slide-shadow-bottom');
                        0 === h.length &&
                            ((h = s(
                                '<div class="swiper-slide-shadow-' +
                                    (this.isHorizontal() ? 'left' : 'top') +
                                    '"></div>'
                            )),
                            a.append(h)),
                            0 === p.length &&
                                ((p = s(
                                    '<div class="swiper-slide-shadow-' +
                                        (this.isHorizontal() ? 'right' : 'bottom') +
                                        '"></div>'
                                )),
                                a.append(p)),
                            h.length && (h[0].style.opacity = Math.max(-r, 0)),
                            p.length && (p[0].style.opacity = Math.max(r, 0));
                    }
                    a.transform(
                        'translate3d(' +
                            l +
                            'px, ' +
                            d +
                            'px, 0px) rotateX(' +
                            o +
                            'deg) rotateY(' +
                            n +
                            'deg)'
                    );
                }
            },
            setTransition: function(e) {
                var t = this,
                    i = t.slides,
                    s = t.activeIndex,
                    a = t.$wrapperEl;
                if (
                    (i
                        .transition(e)
                        .find(
                            '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
                        )
                        .transition(e),
                    t.params.virtualTranslate && 0 !== e)
                ) {
                    var r = !1;
                    i.eq(s).transitionEnd(function() {
                        if (!r && t && !t.destroyed) {
                            (r = !0), (t.animating = !1);
                            for (
                                var e = ['webkitTransitionEnd', 'transitionend'], i = 0;
                                i < e.length;
                                i += 1
                            )
                                a.trigger(e[i]);
                        }
                    });
                }
            },
        },
        ge = {
            setTranslate: function() {
                for (
                    var e = this.width,
                        t = this.height,
                        i = this.slides,
                        a = this.$wrapperEl,
                        r = this.slidesSizesGrid,
                        n = this.params.coverflowEffect,
                        l = this.isHorizontal(),
                        d = this.translate,
                        h = l ? e / 2 - d : t / 2 - d,
                        p = l ? n.rotate : -n.rotate,
                        c = n.depth,
                        u = 0,
                        v = i.length;
                    u < v;
                    u += 1
                ) {
                    var f = i.eq(u),
                        m = r[u],
                        g = ((h - f[0].swiperSlideOffset - m / 2) / m) * n.modifier,
                        b = l ? p * g : 0,
                        w = l ? 0 : p * g,
                        y = -c * Math.abs(g),
                        x = l ? 0 : n.stretch * g,
                        T = l ? n.stretch * g : 0;
                    Math.abs(T) < 0.001 && (T = 0),
                        Math.abs(x) < 0.001 && (x = 0),
                        Math.abs(y) < 0.001 && (y = 0),
                        Math.abs(b) < 0.001 && (b = 0),
                        Math.abs(w) < 0.001 && (w = 0);
                    var E =
                        'translate3d(' +
                        T +
                        'px,' +
                        x +
                        'px,' +
                        y +
                        'px)  rotateX(' +
                        w +
                        'deg) rotateY(' +
                        b +
                        'deg)';
                    if (
                        (f.transform(E),
                        (f[0].style.zIndex = 1 - Math.abs(Math.round(g))),
                        n.slideShadows)
                    ) {
                        var S = l
                                ? f.find('.swiper-slide-shadow-left')
                                : f.find('.swiper-slide-shadow-top'),
                            C = l
                                ? f.find('.swiper-slide-shadow-right')
                                : f.find('.swiper-slide-shadow-bottom');
                        0 === S.length &&
                            ((S = s(
                                '<div class="swiper-slide-shadow-' +
                                    (l ? 'left' : 'top') +
                                    '"></div>'
                            )),
                            f.append(S)),
                            0 === C.length &&
                                ((C = s(
                                    '<div class="swiper-slide-shadow-' +
                                        (l ? 'right' : 'bottom') +
                                        '"></div>'
                                )),
                                f.append(C)),
                            S.length && (S[0].style.opacity = g > 0 ? g : 0),
                            C.length && (C[0].style.opacity = -g > 0 ? -g : 0);
                    }
                }
                (o.pointerEvents || o.prefixedPointerEvents) &&
                    (a[0].style.perspectiveOrigin = h + 'px 50%');
            },
            setTransition: function(e) {
                this.slides
                    .transition(e)
                    .find(
                        '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
                    )
                    .transition(e);
            },
        },
        be = {
            init: function() {
                var e = this.params.thumbs,
                    t = this.constructor;
                e.swiper instanceof t
                    ? ((this.thumbs.swiper = e.swiper),
                      n.extend(this.thumbs.swiper.originalParams, {
                          watchSlidesProgress: !0,
                          slideToClickedSlide: !1,
                      }),
                      n.extend(this.thumbs.swiper.params, {
                          watchSlidesProgress: !0,
                          slideToClickedSlide: !1,
                      }))
                    : n.isObject(e.swiper) &&
                      ((this.thumbs.swiper = new t(
                          n.extend({}, e.swiper, {
                              watchSlidesVisibility: !0,
                              watchSlidesProgress: !0,
                              slideToClickedSlide: !1,
                          })
                      )),
                      (this.thumbs.swiperCreated = !0)),
                    this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass),
                    this.thumbs.swiper.on('tap', this.thumbs.onThumbClick);
            },
            onThumbClick: function() {
                var e = this.thumbs.swiper;
                if (e) {
                    var t = e.clickedIndex,
                        i = e.clickedSlide;
                    if (
                        !(
                            (i && s(i).hasClass(this.params.thumbs.slideThumbActiveClass)) ||
                            null == t
                        )
                    ) {
                        var a;
                        if (
                            ((a = e.params.loop
                                ? parseInt(s(e.clickedSlide).attr('data-swiper-slide-index'), 10)
                                : t),
                            this.params.loop)
                        ) {
                            var r = this.activeIndex;
                            this.slides.eq(r).hasClass(this.params.slideDuplicateClass) &&
                                (this.loopFix(),
                                (this._clientLeft = this.$wrapperEl[0].clientLeft),
                                (r = this.activeIndex));
                            var n = this.slides
                                    .eq(r)
                                    .prevAll('[data-swiper-slide-index="' + a + '"]')
                                    .eq(0)
                                    .index(),
                                o = this.slides
                                    .eq(r)
                                    .nextAll('[data-swiper-slide-index="' + a + '"]')
                                    .eq(0)
                                    .index();
                            a = void 0 === n ? o : void 0 === o ? n : o - r < r - n ? o : n;
                        }
                        this.slideTo(a);
                    }
                }
            },
            update: function(e) {
                var t = this.thumbs.swiper;
                if (t) {
                    var i =
                        'auto' === t.params.slidesPerView
                            ? t.slidesPerViewDynamic()
                            : t.params.slidesPerView;
                    if (this.realIndex !== t.realIndex) {
                        var s,
                            a = t.activeIndex;
                        if (t.params.loop) {
                            t.slides.eq(a).hasClass(t.params.slideDuplicateClass) &&
                                (t.loopFix(),
                                (t._clientLeft = t.$wrapperEl[0].clientLeft),
                                (a = t.activeIndex));
                            var r = t.slides
                                    .eq(a)
                                    .prevAll('[data-swiper-slide-index="' + this.realIndex + '"]')
                                    .eq(0)
                                    .index(),
                                n = t.slides
                                    .eq(a)
                                    .nextAll('[data-swiper-slide-index="' + this.realIndex + '"]')
                                    .eq(0)
                                    .index();
                            s =
                                void 0 === r
                                    ? n
                                    : void 0 === n
                                    ? r
                                    : n - a == a - r
                                    ? a
                                    : n - a < a - r
                                    ? n
                                    : r;
                        } else s = this.realIndex;
                        t.visibleSlidesIndexes &&
                            t.visibleSlidesIndexes.indexOf(s) < 0 &&
                            (t.params.centeredSlides
                                ? (s =
                                      s > a ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1)
                                : s > a && (s = s - i + 1),
                            t.slideTo(s, e ? 0 : void 0));
                    }
                    var o = 1,
                        l = this.params.thumbs.slideThumbActiveClass;
                    if (
                        (this.params.slidesPerView > 1 &&
                            !this.params.centeredSlides &&
                            (o = this.params.slidesPerView),
                        this.params.thumbs.multipleActiveThumbs || (o = 1),
                        (o = Math.floor(o)),
                        t.slides.removeClass(l),
                        t.params.loop || (t.params.virtual && t.params.virtual.enabled))
                    )
                        for (var d = 0; d < o; d += 1)
                            t.$wrapperEl
                                .children(
                                    '[data-swiper-slide-index="' + (this.realIndex + d) + '"]'
                                )
                                .addClass(l);
                    else for (var h = 0; h < o; h += 1) t.slides.eq(this.realIndex + h).addClass(l);
                }
            },
        },
        we = [
            R,
            q,
            K,
            U,
            Z,
            J,
            te,
            {
                name: 'mousewheel',
                params: {
                    mousewheel: {
                        enabled: !1,
                        releaseOnEdges: !1,
                        invert: !1,
                        forceToAxis: !1,
                        sensitivity: 1,
                        eventsTarged: 'container',
                    },
                },
                create: function() {
                    n.extend(this, {
                        mousewheel: {
                            enabled: !1,
                            enable: ie.enable.bind(this),
                            disable: ie.disable.bind(this),
                            handle: ie.handle.bind(this),
                            handleMouseEnter: ie.handleMouseEnter.bind(this),
                            handleMouseLeave: ie.handleMouseLeave.bind(this),
                            animateSlider: ie.animateSlider.bind(this),
                            releaseScroll: ie.releaseScroll.bind(this),
                            lastScrollTime: n.now(),
                            lastEventBeforeSnap: void 0,
                            recentWheelEvents: [],
                        },
                    });
                },
                on: {
                    init: function() {
                        !this.params.mousewheel.enabled &&
                            this.params.cssMode &&
                            this.mousewheel.disable(),
                            this.params.mousewheel.enabled && this.mousewheel.enable();
                    },
                    destroy: function() {
                        this.params.cssMode && this.mousewheel.enable(),
                            this.mousewheel.enabled && this.mousewheel.disable();
                    },
                },
            },
            {
                name: 'navigation',
                params: {
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: 'swiper-button-disabled',
                        hiddenClass: 'swiper-button-hidden',
                        lockClass: 'swiper-button-lock',
                    },
                },
                create: function() {
                    n.extend(this, {
                        navigation: {
                            init: se.init.bind(this),
                            update: se.update.bind(this),
                            destroy: se.destroy.bind(this),
                            onNextClick: se.onNextClick.bind(this),
                            onPrevClick: se.onPrevClick.bind(this),
                        },
                    });
                },
                on: {
                    init: function() {
                        this.navigation.init(), this.navigation.update();
                    },
                    toEdge: function() {
                        this.navigation.update();
                    },
                    fromEdge: function() {
                        this.navigation.update();
                    },
                    destroy: function() {
                        this.navigation.destroy();
                    },
                    click: function(e) {
                        var t,
                            i = this.navigation,
                            a = i.$nextEl,
                            r = i.$prevEl;
                        !this.params.navigation.hideOnClick ||
                            s(e.target).is(r) ||
                            s(e.target).is(a) ||
                            (a
                                ? (t = a.hasClass(this.params.navigation.hiddenClass))
                                : r && (t = r.hasClass(this.params.navigation.hiddenClass)),
                            !0 === t
                                ? this.emit('navigationShow', this)
                                : this.emit('navigationHide', this),
                            a && a.toggleClass(this.params.navigation.hiddenClass),
                            r && r.toggleClass(this.params.navigation.hiddenClass));
                    },
                },
            },
            {
                name: 'pagination',
                params: {
                    pagination: {
                        el: null,
                        bulletElement: 'span',
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: 'bullets',
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: function(e) {
                            return e;
                        },
                        formatFractionTotal: function(e) {
                            return e;
                        },
                        bulletClass: 'swiper-pagination-bullet',
                        bulletActiveClass: 'swiper-pagination-bullet-active',
                        modifierClass: 'swiper-pagination-',
                        currentClass: 'swiper-pagination-current',
                        totalClass: 'swiper-pagination-total',
                        hiddenClass: 'swiper-pagination-hidden',
                        progressbarFillClass: 'swiper-pagination-progressbar-fill',
                        progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
                        clickableClass: 'swiper-pagination-clickable',
                        lockClass: 'swiper-pagination-lock',
                    },
                },
                create: function() {
                    n.extend(this, {
                        pagination: {
                            init: ae.init.bind(this),
                            render: ae.render.bind(this),
                            update: ae.update.bind(this),
                            destroy: ae.destroy.bind(this),
                            dynamicBulletIndex: 0,
                        },
                    });
                },
                on: {
                    init: function() {
                        this.pagination.init(), this.pagination.render(), this.pagination.update();
                    },
                    activeIndexChange: function() {
                        this.params.loop
                            ? this.pagination.update()
                            : void 0 === this.snapIndex && this.pagination.update();
                    },
                    snapIndexChange: function() {
                        this.params.loop || this.pagination.update();
                    },
                    slidesLengthChange: function() {
                        this.params.loop && (this.pagination.render(), this.pagination.update());
                    },
                    snapGridLengthChange: function() {
                        this.params.loop || (this.pagination.render(), this.pagination.update());
                    },
                    destroy: function() {
                        this.pagination.destroy();
                    },
                    click: function(e) {
                        this.params.pagination.el &&
                            this.params.pagination.hideOnClick &&
                            this.pagination.$el.length > 0 &&
                            !s(e.target).hasClass(this.params.pagination.bulletClass) &&
                            (!0 === this.pagination.$el.hasClass(this.params.pagination.hiddenClass)
                                ? this.emit('paginationShow', this)
                                : this.emit('paginationHide', this),
                            this.pagination.$el.toggleClass(this.params.pagination.hiddenClass));
                    },
                },
            },
            {
                name: 'scrollbar',
                params: {
                    scrollbar: {
                        el: null,
                        dragSize: 'auto',
                        hide: !1,
                        draggable: !1,
                        snapOnRelease: !0,
                        lockClass: 'swiper-scrollbar-lock',
                        dragClass: 'swiper-scrollbar-drag',
                    },
                },
                create: function() {
                    n.extend(this, {
                        scrollbar: {
                            init: re.init.bind(this),
                            destroy: re.destroy.bind(this),
                            updateSize: re.updateSize.bind(this),
                            setTranslate: re.setTranslate.bind(this),
                            setTransition: re.setTransition.bind(this),
                            enableDraggable: re.enableDraggable.bind(this),
                            disableDraggable: re.disableDraggable.bind(this),
                            setDragPosition: re.setDragPosition.bind(this),
                            getPointerPosition: re.getPointerPosition.bind(this),
                            onDragStart: re.onDragStart.bind(this),
                            onDragMove: re.onDragMove.bind(this),
                            onDragEnd: re.onDragEnd.bind(this),
                            isTouched: !1,
                            timeout: null,
                            dragTimeout: null,
                        },
                    });
                },
                on: {
                    init: function() {
                        this.scrollbar.init(),
                            this.scrollbar.updateSize(),
                            this.scrollbar.setTranslate();
                    },
                    update: function() {
                        this.scrollbar.updateSize();
                    },
                    resize: function() {
                        this.scrollbar.updateSize();
                    },
                    observerUpdate: function() {
                        this.scrollbar.updateSize();
                    },
                    setTranslate: function() {
                        this.scrollbar.setTranslate();
                    },
                    setTransition: function(e) {
                        this.scrollbar.setTransition(e);
                    },
                    destroy: function() {
                        this.scrollbar.destroy();
                    },
                },
            },
            {
                name: 'parallax',
                params: {parallax: {enabled: !1}},
                create: function() {
                    n.extend(this, {
                        parallax: {
                            setTransform: ne.setTransform.bind(this),
                            setTranslate: ne.setTranslate.bind(this),
                            setTransition: ne.setTransition.bind(this),
                        },
                    });
                },
                on: {
                    beforeInit: function() {
                        this.params.parallax.enabled &&
                            ((this.params.watchSlidesProgress = !0),
                            (this.originalParams.watchSlidesProgress = !0));
                    },
                    init: function() {
                        this.params.parallax.enabled && this.parallax.setTranslate();
                    },
                    setTranslate: function() {
                        this.params.parallax.enabled && this.parallax.setTranslate();
                    },
                    setTransition: function(e) {
                        this.params.parallax.enabled && this.parallax.setTransition(e);
                    },
                },
            },
            {
                name: 'zoom',
                params: {
                    zoom: {
                        enabled: !1,
                        maxRatio: 3,
                        minRatio: 1,
                        toggle: !0,
                        containerClass: 'swiper-zoom-container',
                        zoomedSlideClass: 'swiper-slide-zoomed',
                    },
                },
                create: function() {
                    var e = this,
                        t = {
                            enabled: !1,
                            scale: 1,
                            currentScale: 1,
                            isScaling: !1,
                            gesture: {
                                $slideEl: void 0,
                                slideWidth: void 0,
                                slideHeight: void 0,
                                $imageEl: void 0,
                                $imageWrapEl: void 0,
                                maxRatio: 3,
                            },
                            image: {
                                isTouched: void 0,
                                isMoved: void 0,
                                currentX: void 0,
                                currentY: void 0,
                                minX: void 0,
                                minY: void 0,
                                maxX: void 0,
                                maxY: void 0,
                                width: void 0,
                                height: void 0,
                                startX: void 0,
                                startY: void 0,
                                touchesStart: {},
                                touchesCurrent: {},
                            },
                            velocity: {
                                x: void 0,
                                y: void 0,
                                prevPositionX: void 0,
                                prevPositionY: void 0,
                                prevTime: void 0,
                            },
                        };
                    'onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out'
                        .split(' ')
                        .forEach(function(i) {
                            t[i] = oe[i].bind(e);
                        }),
                        n.extend(e, {zoom: t});
                    var i = 1;
                    Object.defineProperty(e.zoom, 'scale', {
                        get: function() {
                            return i;
                        },
                        set: function(t) {
                            if (i !== t) {
                                var s = e.zoom.gesture.$imageEl
                                        ? e.zoom.gesture.$imageEl[0]
                                        : void 0,
                                    a = e.zoom.gesture.$slideEl
                                        ? e.zoom.gesture.$slideEl[0]
                                        : void 0;
                                e.emit('zoomChange', t, s, a);
                            }
                            i = t;
                        },
                    });
                },
                on: {
                    init: function() {
                        this.params.zoom.enabled && this.zoom.enable();
                    },
                    destroy: function() {
                        this.zoom.disable();
                    },
                    touchStart: function(e) {
                        this.zoom.enabled && this.zoom.onTouchStart(e);
                    },
                    touchEnd: function(e) {
                        this.zoom.enabled && this.zoom.onTouchEnd(e);
                    },
                    doubleTap: function(e) {
                        this.params.zoom.enabled &&
                            this.zoom.enabled &&
                            this.params.zoom.toggle &&
                            this.zoom.toggle(e);
                    },
                    transitionEnd: function() {
                        this.zoom.enabled &&
                            this.params.zoom.enabled &&
                            this.zoom.onTransitionEnd();
                    },
                    slideChange: function() {
                        this.zoom.enabled &&
                            this.params.zoom.enabled &&
                            this.params.cssMode &&
                            this.zoom.onTransitionEnd();
                    },
                },
            },
            {
                name: 'lazy',
                params: {
                    lazy: {
                        enabled: !1,
                        loadPrevNext: !1,
                        loadPrevNextAmount: 1,
                        loadOnTransitionStart: !1,
                        elementClass: 'swiper-lazy',
                        loadingClass: 'swiper-lazy-loading',
                        loadedClass: 'swiper-lazy-loaded',
                        preloaderClass: 'swiper-lazy-preloader',
                    },
                },
                create: function() {
                    n.extend(this, {
                        lazy: {
                            initialImageLoaded: !1,
                            load: le.load.bind(this),
                            loadInSlide: le.loadInSlide.bind(this),
                        },
                    });
                },
                on: {
                    beforeInit: function() {
                        this.params.lazy.enabled &&
                            this.params.preloadImages &&
                            (this.params.preloadImages = !1);
                    },
                    init: function() {
                        this.params.lazy.enabled &&
                            !this.params.loop &&
                            0 === this.params.initialSlide &&
                            this.lazy.load();
                    },
                    scroll: function() {
                        this.params.freeMode && !this.params.freeModeSticky && this.lazy.load();
                    },
                    resize: function() {
                        this.params.lazy.enabled && this.lazy.load();
                    },
                    scrollbarDragMove: function() {
                        this.params.lazy.enabled && this.lazy.load();
                    },
                    transitionStart: function() {
                        this.params.lazy.enabled &&
                            (this.params.lazy.loadOnTransitionStart ||
                                (!this.params.lazy.loadOnTransitionStart &&
                                    !this.lazy.initialImageLoaded)) &&
                            this.lazy.load();
                    },
                    transitionEnd: function() {
                        this.params.lazy.enabled &&
                            !this.params.lazy.loadOnTransitionStart &&
                            this.lazy.load();
                    },
                    slideChange: function() {
                        this.params.lazy.enabled && this.params.cssMode && this.lazy.load();
                    },
                },
            },
            {
                name: 'controller',
                params: {controller: {control: void 0, inverse: !1, by: 'slide'}},
                create: function() {
                    n.extend(this, {
                        controller: {
                            control: this.params.controller.control,
                            getInterpolateFunction: de.getInterpolateFunction.bind(this),
                            setTranslate: de.setTranslate.bind(this),
                            setTransition: de.setTransition.bind(this),
                        },
                    });
                },
                on: {
                    update: function() {
                        this.controller.control &&
                            this.controller.spline &&
                            ((this.controller.spline = void 0), delete this.controller.spline);
                    },
                    resize: function() {
                        this.controller.control &&
                            this.controller.spline &&
                            ((this.controller.spline = void 0), delete this.controller.spline);
                    },
                    observerUpdate: function() {
                        this.controller.control &&
                            this.controller.spline &&
                            ((this.controller.spline = void 0), delete this.controller.spline);
                    },
                    setTranslate: function(e, t) {
                        this.controller.control && this.controller.setTranslate(e, t);
                    },
                    setTransition: function(e, t) {
                        this.controller.control && this.controller.setTransition(e, t);
                    },
                },
            },
            {
                name: 'a11y',
                params: {
                    a11y: {
                        enabled: !0,
                        notificationClass: 'swiper-notification',
                        prevSlideMessage: 'Previous slide',
                        nextSlideMessage: 'Next slide',
                        firstSlideMessage: 'This is the first slide',
                        lastSlideMessage: 'This is the last slide',
                        paginationBulletMessage: 'Go to slide {{index}}',
                    },
                },
                create: function() {
                    var e = this;
                    n.extend(e, {
                        a11y: {
                            liveRegion: s(
                                '<span class="' +
                                    e.params.a11y.notificationClass +
                                    '" aria-live="assertive" aria-atomic="true"></span>'
                            ),
                        },
                    }),
                        Object.keys(he).forEach(function(t) {
                            e.a11y[t] = he[t].bind(e);
                        });
                },
                on: {
                    init: function() {
                        this.params.a11y.enabled &&
                            (this.a11y.init(), this.a11y.updateNavigation());
                    },
                    toEdge: function() {
                        this.params.a11y.enabled && this.a11y.updateNavigation();
                    },
                    fromEdge: function() {
                        this.params.a11y.enabled && this.a11y.updateNavigation();
                    },
                    paginationUpdate: function() {
                        this.params.a11y.enabled && this.a11y.updatePagination();
                    },
                    destroy: function() {
                        this.params.a11y.enabled && this.a11y.destroy();
                    },
                },
            },
            {
                name: 'history',
                params: {history: {enabled: !1, replaceState: !1, key: 'slides'}},
                create: function() {
                    n.extend(this, {
                        history: {
                            init: pe.init.bind(this),
                            setHistory: pe.setHistory.bind(this),
                            setHistoryPopState: pe.setHistoryPopState.bind(this),
                            scrollToSlide: pe.scrollToSlide.bind(this),
                            destroy: pe.destroy.bind(this),
                        },
                    });
                },
                on: {
                    init: function() {
                        this.params.history.enabled && this.history.init();
                    },
                    destroy: function() {
                        this.params.history.enabled && this.history.destroy();
                    },
                    transitionEnd: function() {
                        this.history.initialized &&
                            this.history.setHistory(this.params.history.key, this.activeIndex);
                    },
                    slideChange: function() {
                        this.history.initialized &&
                            this.params.cssMode &&
                            this.history.setHistory(this.params.history.key, this.activeIndex);
                    },
                },
            },
            {
                name: 'hash-navigation',
                params: {hashNavigation: {enabled: !1, replaceState: !1, watchState: !1}},
                create: function() {
                    n.extend(this, {
                        hashNavigation: {
                            initialized: !1,
                            init: ce.init.bind(this),
                            destroy: ce.destroy.bind(this),
                            setHash: ce.setHash.bind(this),
                            onHashCange: ce.onHashCange.bind(this),
                        },
                    });
                },
                on: {
                    init: function() {
                        this.params.hashNavigation.enabled && this.hashNavigation.init();
                    },
                    destroy: function() {
                        this.params.hashNavigation.enabled && this.hashNavigation.destroy();
                    },
                    transitionEnd: function() {
                        this.hashNavigation.initialized && this.hashNavigation.setHash();
                    },
                    slideChange: function() {
                        this.hashNavigation.initialized &&
                            this.params.cssMode &&
                            this.hashNavigation.setHash();
                    },
                },
            },
            {
                name: 'autoplay',
                params: {
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !0,
                        stopOnLastSlide: !1,
                        reverseDirection: !1,
                    },
                },
                create: function() {
                    var e = this;
                    n.extend(e, {
                        autoplay: {
                            running: !1,
                            paused: !1,
                            run: ue.run.bind(e),
                            start: ue.start.bind(e),
                            stop: ue.stop.bind(e),
                            pause: ue.pause.bind(e),
                            onVisibilityChange: function() {
                                'hidden' === document.visibilityState &&
                                    e.autoplay.running &&
                                    e.autoplay.pause(),
                                    'visible' === document.visibilityState &&
                                        e.autoplay.paused &&
                                        (e.autoplay.run(), (e.autoplay.paused = !1));
                            },
                            onTransitionEnd: function(t) {
                                e &&
                                    !e.destroyed &&
                                    e.$wrapperEl &&
                                    t.target === this &&
                                    (e.$wrapperEl[0].removeEventListener(
                                        'transitionend',
                                        e.autoplay.onTransitionEnd
                                    ),
                                    e.$wrapperEl[0].removeEventListener(
                                        'webkitTransitionEnd',
                                        e.autoplay.onTransitionEnd
                                    ),
                                    (e.autoplay.paused = !1),
                                    e.autoplay.running ? e.autoplay.run() : e.autoplay.stop());
                            },
                        },
                    });
                },
                on: {
                    init: function() {
                        this.params.autoplay.enabled &&
                            (this.autoplay.start(),
                            document.addEventListener(
                                'visibilitychange',
                                this.autoplay.onVisibilityChange
                            ));
                    },
                    beforeTransitionStart: function(e, t) {
                        this.autoplay.running &&
                            (t || !this.params.autoplay.disableOnInteraction
                                ? this.autoplay.pause(e)
                                : this.autoplay.stop());
                    },
                    sliderFirstMove: function() {
                        this.autoplay.running &&
                            (this.params.autoplay.disableOnInteraction
                                ? this.autoplay.stop()
                                : this.autoplay.pause());
                    },
                    touchEnd: function() {
                        this.params.cssMode &&
                            this.autoplay.paused &&
                            !this.params.autoplay.disableOnInteraction &&
                            this.autoplay.run();
                    },
                    destroy: function() {
                        this.autoplay.running && this.autoplay.stop(),
                            document.removeEventListener(
                                'visibilitychange',
                                this.autoplay.onVisibilityChange
                            );
                    },
                },
            },
            {
                name: 'effect-fade',
                params: {fadeEffect: {crossFade: !1}},
                create: function() {
                    n.extend(this, {
                        fadeEffect: {
                            setTranslate: ve.setTranslate.bind(this),
                            setTransition: ve.setTransition.bind(this),
                        },
                    });
                },
                on: {
                    beforeInit: function() {
                        if ('fade' === this.params.effect) {
                            this.classNames.push(this.params.containerModifierClass + 'fade');
                            var e = {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                spaceBetween: 0,
                                virtualTranslate: !0,
                            };
                            n.extend(this.params, e), n.extend(this.originalParams, e);
                        }
                    },
                    setTranslate: function() {
                        'fade' === this.params.effect && this.fadeEffect.setTranslate();
                    },
                    setTransition: function(e) {
                        'fade' === this.params.effect && this.fadeEffect.setTransition(e);
                    },
                },
            },
            {
                name: 'effect-cube',
                params: {
                    cubeEffect: {slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: 0.94},
                },
                create: function() {
                    n.extend(this, {
                        cubeEffect: {
                            setTranslate: fe.setTranslate.bind(this),
                            setTransition: fe.setTransition.bind(this),
                        },
                    });
                },
                on: {
                    beforeInit: function() {
                        if ('cube' === this.params.effect) {
                            this.classNames.push(this.params.containerModifierClass + 'cube'),
                                this.classNames.push(this.params.containerModifierClass + '3d');
                            var e = {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                resistanceRatio: 0,
                                spaceBetween: 0,
                                centeredSlides: !1,
                                virtualTranslate: !0,
                            };
                            n.extend(this.params, e), n.extend(this.originalParams, e);
                        }
                    },
                    setTranslate: function() {
                        'cube' === this.params.effect && this.cubeEffect.setTranslate();
                    },
                    setTransition: function(e) {
                        'cube' === this.params.effect && this.cubeEffect.setTransition(e);
                    },
                },
            },
            {
                name: 'effect-flip',
                params: {flipEffect: {slideShadows: !0, limitRotation: !0}},
                create: function() {
                    n.extend(this, {
                        flipEffect: {
                            setTranslate: me.setTranslate.bind(this),
                            setTransition: me.setTransition.bind(this),
                        },
                    });
                },
                on: {
                    beforeInit: function() {
                        if ('flip' === this.params.effect) {
                            this.classNames.push(this.params.containerModifierClass + 'flip'),
                                this.classNames.push(this.params.containerModifierClass + '3d');
                            var e = {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                spaceBetween: 0,
                                virtualTranslate: !0,
                            };
                            n.extend(this.params, e), n.extend(this.originalParams, e);
                        }
                    },
                    setTranslate: function() {
                        'flip' === this.params.effect && this.flipEffect.setTranslate();
                    },
                    setTransition: function(e) {
                        'flip' === this.params.effect && this.flipEffect.setTransition(e);
                    },
                },
            },
            {
                name: 'effect-coverflow',
                params: {
                    coverflowEffect: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: !0,
                    },
                },
                create: function() {
                    n.extend(this, {
                        coverflowEffect: {
                            setTranslate: ge.setTranslate.bind(this),
                            setTransition: ge.setTransition.bind(this),
                        },
                    });
                },
                on: {
                    beforeInit: function() {
                        'coverflow' === this.params.effect &&
                            (this.classNames.push(this.params.containerModifierClass + 'coverflow'),
                            this.classNames.push(this.params.containerModifierClass + '3d'),
                            (this.params.watchSlidesProgress = !0),
                            (this.originalParams.watchSlidesProgress = !0));
                    },
                    setTranslate: function() {
                        'coverflow' === this.params.effect && this.coverflowEffect.setTranslate();
                    },
                    setTransition: function(e) {
                        'coverflow' === this.params.effect && this.coverflowEffect.setTransition(e);
                    },
                },
            },
            {
                name: 'thumbs',
                params: {
                    thumbs: {
                        multipleActiveThumbs: !0,
                        swiper: null,
                        slideThumbActiveClass: 'swiper-slide-thumb-active',
                        thumbsContainerClass: 'swiper-container-thumbs',
                    },
                },
                create: function() {
                    n.extend(this, {
                        thumbs: {
                            swiper: null,
                            init: be.init.bind(this),
                            update: be.update.bind(this),
                            onThumbClick: be.onThumbClick.bind(this),
                        },
                    });
                },
                on: {
                    beforeInit: function() {
                        var e = this.params.thumbs;
                        e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0));
                    },
                    slideChange: function() {
                        this.thumbs.swiper && this.thumbs.update();
                    },
                    update: function() {
                        this.thumbs.swiper && this.thumbs.update();
                    },
                    resize: function() {
                        this.thumbs.swiper && this.thumbs.update();
                    },
                    observerUpdate: function() {
                        this.thumbs.swiper && this.thumbs.update();
                    },
                    setTransition: function(e) {
                        var t = this.thumbs.swiper;
                        t && t.setTransition(e);
                    },
                    beforeDestroy: function() {
                        var e = this.thumbs.swiper;
                        e && this.thumbs.swiperCreated && e && e.destroy();
                    },
                },
            },
        ];
    return (
        void 0 === W.use && ((W.use = W.Class.use), (W.installModule = W.Class.installModule)),
        W.use(we),
        W
    );
});

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(t, e) {
    for (var i = 0; i < e.length; i++) {
        var s = e[i];
        (s.enumerable = s.enumerable || !1),
            (s.configurable = !0),
            'value' in s && (s.writable = !0),
            Object.defineProperty(t, s.key, s);
    }
}
function _createClass(t, e, i) {
    return e && _defineProperties(t.prototype, e), i && _defineProperties(t, i), t;
}
var Sticky = (function() {
    function i() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : '',
            e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
        _classCallCheck(this, i),
            (this.selector = t),
            (this.elements = []),
            (this.version = '1.2.2'),
            (this.vp = this.getViewportSize()),
            (this.body = document.querySelector('body')),
            (this.options = {
                wrap: e.wrap || !1,
                marginTop: e.marginTop || 0,
                stickyFor: e.stickyFor || 0,
                stickyClass: e.stickyClass || null,
                stickyContainer: e.stickyContainer || 'body',
            }),
            (this.updateScrollTopPosition = this.updateScrollTopPosition.bind(this)),
            this.updateScrollTopPosition(),
            window.addEventListener('load', this.updateScrollTopPosition),
            window.addEventListener('scroll', this.updateScrollTopPosition),
            this.run();
    }
    return (
        _createClass(i, [
            {
                key: 'run',
                value: function() {
                    var e = this,
                        i = setInterval(function() {
                            if ('complete' === document.readyState) {
                                clearInterval(i);
                                var t = document.querySelectorAll(e.selector);
                                e.forEach(t, function(t) {
                                    return e.renderElement(t);
                                });
                            }
                        }, 10);
                },
            },
            {
                key: 'renderElement',
                value: function(t) {
                    var e = this;
                    (t.sticky = {}),
                        (t.sticky.active = !1),
                        (t.sticky.marginTop =
                            parseInt(t.getAttribute('data-margin-top')) || this.options.marginTop),
                        (t.sticky.stickyFor =
                            parseInt(t.getAttribute('data-sticky-for')) || this.options.stickyFor),
                        (t.sticky.stickyClass =
                            t.getAttribute('data-sticky-class') || this.options.stickyClass),
                        (t.sticky.wrap = !!t.hasAttribute('data-sticky-wrap') || this.options.wrap),
                        (t.sticky.stickyContainer = this.options.stickyContainer),
                        (t.sticky.container = this.getStickyContainer(t)),
                        (t.sticky.container.rect = this.getRectangle(t.sticky.container)),
                        (t.sticky.rect = this.getRectangle(t)),
                        'img' === t.tagName.toLowerCase() &&
                            (t.onload = function() {
                                return (t.sticky.rect = e.getRectangle(t));
                            }),
                        t.sticky.wrap && this.wrapElement(t),
                        this.activate(t);
                },
            },
            {
                key: 'wrapElement',
                value: function(t) {
                    t.insertAdjacentHTML('beforebegin', '<span></span>'),
                        t.previousSibling.appendChild(t);
                },
            },
            {
                key: 'activate',
                value: function(t) {
                    t.sticky.rect.top + t.sticky.rect.height <
                        t.sticky.container.rect.top + t.sticky.container.rect.height &&
                        t.sticky.stickyFor < this.vp.width &&
                        !t.sticky.active &&
                        (t.sticky.active = !0),
                        this.elements.indexOf(t) < 0 && this.elements.push(t),
                        t.sticky.resizeEvent ||
                            (this.initResizeEvents(t), (t.sticky.resizeEvent = !0)),
                        t.sticky.scrollEvent ||
                            (this.initScrollEvents(t), (t.sticky.scrollEvent = !0)),
                        this.setPosition(t);
                },
            },
            {
                key: 'initResizeEvents',
                value: function(t) {
                    var e = this;
                    (t.sticky.resizeListener = function() {
                        return e.onResizeEvents(t);
                    }),
                        window.addEventListener('resize', t.sticky.resizeListener);
                },
            },
            {
                key: 'destroyResizeEvents',
                value: function(t) {
                    window.removeEventListener('resize', t.sticky.resizeListener);
                },
            },
            {
                key: 'onResizeEvents',
                value: function(t) {
                    (this.vp = this.getViewportSize()),
                        (t.sticky.rect = this.getRectangle(t)),
                        (t.sticky.container.rect = this.getRectangle(t.sticky.container)),
                        t.sticky.rect.top + t.sticky.rect.height <
                            t.sticky.container.rect.top + t.sticky.container.rect.height &&
                        t.sticky.stickyFor < this.vp.width &&
                        !t.sticky.active
                            ? (t.sticky.active = !0)
                            : (t.sticky.rect.top + t.sticky.rect.height >=
                                  t.sticky.container.rect.top + t.sticky.container.rect.height ||
                                  (t.sticky.stickyFor >= this.vp.width && t.sticky.active)) &&
                              (t.sticky.active = !1),
                        this.setPosition(t);
                },
            },
            {
                key: 'initScrollEvents',
                value: function(t) {
                    var e = this;
                    (t.sticky.scrollListener = function() {
                        return e.onScrollEvents(t);
                    }),
                        window.addEventListener('scroll', t.sticky.scrollListener);
                },
            },
            {
                key: 'destroyScrollEvents',
                value: function(t) {
                    window.removeEventListener('scroll', t.sticky.scrollListener);
                },
            },
            {
                key: 'onScrollEvents',
                value: function(t) {
                    t.sticky.active && this.setPosition(t);
                },
            },
            {
                key: 'setPosition',
                value: function(t) {
                    this.css(t, {position: '', width: '', top: '', left: ''}),
                        this.vp.height < t.sticky.rect.height ||
                            !t.sticky.active ||
                            (t.sticky.rect.width || (t.sticky.rect = this.getRectangle(t)),
                            t.sticky.wrap &&
                                this.css(t.parentNode, {
                                    display: 'block',
                                    width: t.sticky.rect.width + 'px',
                                    height: t.sticky.rect.height + 'px',
                                }),
                            0 === t.sticky.rect.top && t.sticky.container === this.body
                                ? this.css(t, {
                                      position: 'fixed',
                                      top: t.sticky.rect.top + 'px',
                                      left: t.sticky.rect.left + 'px',
                                      width: t.sticky.rect.width + 'px',
                                  })
                                : this.scrollTop > t.sticky.rect.top - t.sticky.marginTop
                                ? (this.css(t, {
                                      position: 'fixed',
                                      width: t.sticky.rect.width + 'px',
                                      left: t.sticky.rect.left + 'px',
                                  }),
                                  this.scrollTop + t.sticky.rect.height + t.sticky.marginTop >
                                  t.sticky.container.rect.top + t.sticky.container.offsetHeight
                                      ? (t.sticky.stickyClass &&
                                            t.classList.remove(t.sticky.stickyClass),
                                        this.css(t, {
                                            top:
                                                t.sticky.container.rect.top +
                                                t.sticky.container.offsetHeight -
                                                (this.scrollTop + t.sticky.rect.height) +
                                                'px',
                                        }))
                                      : (t.sticky.stickyClass &&
                                            t.classList.add(t.sticky.stickyClass),
                                        this.css(t, {top: t.sticky.marginTop + 'px'})))
                                : (t.sticky.stickyClass && t.classList.remove(t.sticky.stickyClass),
                                  this.css(t, {position: '', width: '', top: '', left: ''}),
                                  t.sticky.wrap &&
                                      this.css(t.parentNode, {
                                          display: '',
                                          width: '',
                                          height: '',
                                      })));
                },
            },
            {
                key: 'update',
                value: function() {
                    var e = this;
                    this.forEach(this.elements, function(t) {
                        (t.sticky.rect = e.getRectangle(t)),
                            (t.sticky.container.rect = e.getRectangle(t.sticky.container)),
                            e.activate(t),
                            e.setPosition(t);
                    });
                },
            },
            {
                key: 'destroy',
                value: function() {
                    var e = this;
                    window.removeEventListener('load', this.updateScrollTopPosition),
                        window.removeEventListener('scroll', this.updateScrollTopPosition),
                        this.forEach(this.elements, function(t) {
                            e.destroyResizeEvents(t), e.destroyScrollEvents(t), delete t.sticky;
                        });
                },
            },
            {
                key: 'getStickyContainer',
                value: function(t) {
                    for (
                        var e = t.parentNode;
                        !e.hasAttribute('data-sticky-container') &&
                        !e.parentNode.querySelector(t.sticky.stickyContainer) &&
                        e !== this.body;

                    )
                        e = e.parentNode;
                    return e;
                },
            },
            {
                key: 'getRectangle',
                value: function(t) {
                    this.css(t, {position: '', width: '', top: '', left: ''});
                    for (
                        var e = Math.max(t.offsetWidth, t.clientWidth, t.scrollWidth),
                            i = Math.max(t.offsetHeight, t.clientHeight, t.scrollHeight),
                            s = 0,
                            n = 0;
                        (s += t.offsetTop || 0), (n += t.offsetLeft || 0), (t = t.offsetParent);

                    );
                    return {top: s, left: n, width: e, height: i};
                },
            },
            {
                key: 'getViewportSize',
                value: function() {
                    return {
                        width: Math.max(
                            document.documentElement.clientWidth,
                            window.innerWidth || 0
                        ),
                        height: Math.max(
                            document.documentElement.clientHeight,
                            window.innerHeight || 0
                        ),
                    };
                },
            },
            {
                key: 'updateScrollTopPosition',
                value: function() {
                    this.scrollTop =
                        (window.pageYOffset || document.scrollTop) - (document.clientTop || 0) || 0;
                },
            },
            {
                key: 'forEach',
                value: function(t, e) {
                    for (var i = 0, s = t.length; i < s; i++) e(t[i]);
                },
            },
            {
                key: 'css',
                value: function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t.style[i] = e[i]);
                },
            },
        ]),
        i
    );
})();
!(function(t, e) {
    'undefined' != typeof exports
        ? (module.exports = e)
        : 'function' == typeof define && define.amd
        ? define([], function() {
              return e;
          })
        : (t.Sticky = e);
})(this, Sticky);

/*! gumshoejs v5.1.2 | (c) 2019 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/gumshoe */
Element.prototype.closest ||
    (Element.prototype.matches ||
        (Element.prototype.matches =
            Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector),
    (Element.prototype.closest = function(t) {
        var e = this;
        if (!document.documentElement.contains(this)) return null;
        do {
            if (e.matches(t)) return e;
            e = e.parentElement;
        } while (null !== e);
        return null;
    })),
    (function() {
        if ('function' == typeof window.CustomEvent) return !1;
        function t(t, e) {
            e = e || {bubbles: !1, cancelable: !1, detail: void 0};
            var n = document.createEvent('CustomEvent');
            return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n;
        }
        (t.prototype = window.Event.prototype), (window.CustomEvent = t);
    })(),
    (function(t, e) {
        'function' == typeof define && define.amd
            ? define([], function() {
                  return e(t);
              })
            : 'object' == typeof exports
            ? (module.exports = e(t))
            : (t.Gumshoe = e(t));
    })(
        'undefined' != typeof global ? global : 'undefined' != typeof window ? window : this,
        function(t) {
            'use strict';
            var e = {
                    navClass: 'active',
                    contentClass: 'active',
                    nested: !1,
                    nestedClass: 'active',
                    offset: 0,
                    reflow: !1,
                    events: !0,
                },
                n = function(t, e, n) {
                    if (n.settings.events) {
                        var o = new CustomEvent(t, {bubbles: !0, cancelable: !0, detail: n});
                        e.dispatchEvent(o);
                    }
                },
                o = function(t) {
                    var e = 0;
                    if (t.offsetParent) for (; t; ) (e += t.offsetTop), (t = t.offsetParent);
                    return e >= 0 ? e : 0;
                },
                s = function(t) {
                    t &&
                        t.sort(function(t, e) {
                            return o(t.content) < o(e.content) ? -1 : 1;
                        });
                },
                r = function(e, n, o) {
                    var s = e.getBoundingClientRect(),
                        r = (function(t) {
                            return 'function' == typeof t.offset
                                ? parseFloat(t.offset())
                                : parseFloat(t.offset);
                        })(n);
                    return o
                        ? parseInt(s.bottom, 10) <
                              (t.innerHeight || document.documentElement.clientHeight)
                        : parseInt(s.top, 10) <= r;
                },
                c = function() {
                    return (
                        t.innerHeight + t.pageYOffset >=
                        Math.max(
                            document.body.scrollHeight,
                            document.documentElement.scrollHeight,
                            document.body.offsetHeight,
                            document.documentElement.offsetHeight,
                            document.body.clientHeight,
                            document.documentElement.clientHeight
                        )
                    );
                },
                i = function(t, e) {
                    var n = t[t.length - 1];
                    if (
                        (function(t, e) {
                            return !(!c() || !r(t.content, e, !0));
                        })(n, e)
                    )
                        return n;
                    for (var o = t.length - 1; o >= 0; o--) if (r(t[o].content, e)) return t[o];
                },
                l = function(t, e) {
                    if (e.nested && t.parentNode) {
                        var n = t.parentNode.closest('li');
                        n && (n.classList.remove(e.nestedClass), l(n, e));
                    }
                },
                a = function(t, e) {
                    if (t) {
                        var o = t.nav.closest('li');
                        o &&
                            (o.classList.remove(e.navClass),
                            t.content.classList.remove(e.contentClass),
                            l(o, e),
                            n('gumshoeDeactivate', o, {
                                link: t.nav,
                                content: t.content,
                                settings: e,
                            }));
                    }
                },
                u = function(t, e) {
                    if (e.nested) {
                        var n = t.parentNode.closest('li');
                        n && (n.classList.add(e.nestedClass), u(n, e));
                    }
                };
            return function(o, r) {
                var c,
                    l,
                    f,
                    d,
                    m,
                    v = {};
                (v.setup = function() {
                    (c = document.querySelectorAll(o)),
                        (l = []),
                        Array.prototype.forEach.call(c, function(t) {
                            var e = document.getElementById(decodeURIComponent(t.hash.substr(1)));
                            e && l.push({nav: t, content: e});
                        }),
                        s(l);
                }),
                    (v.detect = function() {
                        var t = i(l, m);
                        t
                            ? (f && t.content === f.content) ||
                              (a(f, m),
                              (function(t, e) {
                                  if (t) {
                                      var o = t.nav.closest('li');
                                      o &&
                                          (o.classList.add(e.navClass),
                                          t.content.classList.add(e.contentClass),
                                          u(o, e),
                                          n('gumshoeActivate', o, {
                                              link: t.nav,
                                              content: t.content,
                                              settings: e,
                                          }));
                                  }
                              })(t, m),
                              (f = t))
                            : f && (a(f, m), (f = null));
                    });
                var p = function(e) {
                        d && t.cancelAnimationFrame(d), (d = t.requestAnimationFrame(v.detect));
                    },
                    h = function(e) {
                        d && t.cancelAnimationFrame(d),
                            (d = t.requestAnimationFrame(function() {
                                s(l), v.detect();
                            }));
                    };
                v.destroy = function() {
                    f && a(f, m),
                        t.removeEventListener('scroll', p, !1),
                        m.reflow && t.removeEventListener('resize', h, !1),
                        (l = null),
                        (c = null),
                        (f = null),
                        (d = null),
                        (m = null);
                };
                return (
                    (m = (function() {
                        var t = {};
                        return (
                            Array.prototype.forEach.call(arguments, function(e) {
                                for (var n in e) {
                                    if (!e.hasOwnProperty(n)) return;
                                    t[n] = e[n];
                                }
                            }),
                            t
                        );
                    })(e, r || {})),
                    v.setup(),
                    v.detect(),
                    t.addEventListener('scroll', p, !1),
                    m.reflow && t.addEventListener('resize', h, !1),
                    v
                );
            };
        }
    );

/*! smooth-scroll v16.1.2 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
window.Element &&
    !Element.prototype.closest &&
    (Element.prototype.closest = function(e) {
        var t,
            n = (this.document || this.ownerDocument).querySelectorAll(e),
            o = this;
        do {
            for (t = n.length; 0 <= --t && n.item(t) !== o; );
        } while (t < 0 && (o = o.parentElement));
        return o;
    }),
    (function() {
        if ('function' == typeof window.CustomEvent) return;
        function e(e, t) {
            t = t || {bubbles: !1, cancelable: !1, detail: void 0};
            var n = document.createEvent('CustomEvent');
            return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
        }
        (e.prototype = window.Event.prototype), (window.CustomEvent = e);
    })(),
    (function() {
        for (
            var r = 0, e = ['ms', 'moz', 'webkit', 'o'], t = 0;
            t < e.length && !window.requestAnimationFrame;
            ++t
        )
            (window.requestAnimationFrame = window[e[t] + 'RequestAnimationFrame']),
                (window.cancelAnimationFrame =
                    window[e[t] + 'CancelAnimationFrame'] ||
                    window[e[t] + 'CancelRequestAnimationFrame']);
        window.requestAnimationFrame ||
            (window.requestAnimationFrame = function(e, t) {
                var n = new Date().getTime(),
                    o = Math.max(0, 16 - (n - r)),
                    a = window.setTimeout(function() {
                        e(n + o);
                    }, o);
                return (r = n + o), a;
            }),
            window.cancelAnimationFrame ||
                (window.cancelAnimationFrame = function(e) {
                    clearTimeout(e);
                });
    })(),
    (function(e, t) {
        'function' == typeof define && define.amd
            ? define([], function() {
                  return t(e);
              })
            : 'object' == typeof exports
            ? (module.exports = t(e))
            : (e.SmoothScroll = t(e));
    })(
        'undefined' != typeof global ? global : 'undefined' != typeof window ? window : this,
        function(q) {
            'use strict';
            var I = {
                    ignore: '[data-scroll-ignore]',
                    header: null,
                    topOnEmptyHash: !0,
                    speed: 500,
                    speedAsDuration: !1,
                    durationMax: null,
                    durationMin: null,
                    clip: !0,
                    offset: 0,
                    easing: 'easeInOutCubic',
                    customEasing: null,
                    updateURL: !0,
                    popstate: !0,
                    emitEvents: !0,
                },
                F = function() {
                    var n = {};
                    return (
                        Array.prototype.forEach.call(arguments, function(e) {
                            for (var t in e) {
                                if (!e.hasOwnProperty(t)) return;
                                n[t] = e[t];
                            }
                        }),
                        n
                    );
                },
                r = function(e) {
                    '#' === e.charAt(0) && (e = e.substr(1));
                    for (
                        var t, n = String(e), o = n.length, a = -1, r = '', i = n.charCodeAt(0);
                        ++a < o;

                    ) {
                        if (0 === (t = n.charCodeAt(a)))
                            throw new InvalidCharacterError(
                                'Invalid character: the input contains U+0000.'
                            );
                        (1 <= t && t <= 31) ||
                        127 == t ||
                        (0 === a && 48 <= t && t <= 57) ||
                        (1 === a && 48 <= t && t <= 57 && 45 === i)
                            ? (r += '\\' + t.toString(16) + ' ')
                            : (r +=
                                  128 <= t ||
                                  45 === t ||
                                  95 === t ||
                                  (48 <= t && t <= 57) ||
                                  (65 <= t && t <= 90) ||
                                  (97 <= t && t <= 122)
                                      ? n.charAt(a)
                                      : '\\' + n.charAt(a));
                    }
                    return '#' + r;
                },
                L = function() {
                    return Math.max(
                        document.body.scrollHeight,
                        document.documentElement.scrollHeight,
                        document.body.offsetHeight,
                        document.documentElement.offsetHeight,
                        document.body.clientHeight,
                        document.documentElement.clientHeight
                    );
                },
                x = function(e) {
                    return e
                        ? ((t = e), parseInt(q.getComputedStyle(t).height, 10) + e.offsetTop)
                        : 0;
                    var t;
                },
                H = function(e, t, n, o) {
                    if (t.emitEvents && 'function' == typeof q.CustomEvent) {
                        var a = new CustomEvent(e, {bubbles: !0, detail: {anchor: n, toggle: o}});
                        document.dispatchEvent(a);
                    }
                };
            return function(o, e) {
                var A,
                    a,
                    O,
                    C,
                    M = {};
                (M.cancelScroll = function(e) {
                    cancelAnimationFrame(C), (C = null), e || H('scrollCancel', A);
                }),
                    (M.animateScroll = function(i, c, e) {
                        M.cancelScroll();
                        var s = F(A || I, e || {}),
                            u = '[object Number]' === Object.prototype.toString.call(i),
                            t = u || !i.tagName ? null : i;
                        if (u || t) {
                            var l = q.pageYOffset;
                            s.header && !O && (O = document.querySelector(s.header));
                            var n,
                                o,
                                a,
                                m,
                                r,
                                d,
                                f,
                                h,
                                p = x(O),
                                g = u
                                    ? i
                                    : (function(e, t, n, o) {
                                          var a = 0;
                                          if (e.offsetParent)
                                              for (; (a += e.offsetTop), (e = e.offsetParent); );
                                          return (
                                              (a = Math.max(a - t - n, 0)),
                                              o && (a = Math.min(a, L() - q.innerHeight)),
                                              a
                                          );
                                      })(
                                          t,
                                          p,
                                          parseInt(
                                              'function' == typeof s.offset
                                                  ? s.offset(i, c)
                                                  : s.offset,
                                              10
                                          ),
                                          s.clip
                                      ),
                                y = g - l,
                                v = L(),
                                w = 0,
                                S =
                                    ((n = y),
                                    (a = (o = s).speedAsDuration
                                        ? o.speed
                                        : Math.abs((n / 1e3) * o.speed)),
                                    o.durationMax && a > o.durationMax
                                        ? o.durationMax
                                        : o.durationMin && a < o.durationMin
                                        ? o.durationMin
                                        : parseInt(a, 10)),
                                E = function(e, t) {
                                    var n,
                                        o,
                                        a,
                                        r = q.pageYOffset;
                                    if (e == t || r == t || (l < t && q.innerHeight + r) >= v)
                                        return (
                                            M.cancelScroll(!0),
                                            (o = t),
                                            (a = u),
                                            0 === (n = i) && document.body.focus(),
                                            a ||
                                                (n.focus(),
                                                document.activeElement !== n &&
                                                    (n.setAttribute('tabindex', '-1'),
                                                    n.focus(),
                                                    (n.style.outline = 'none')),
                                                q.scrollTo(0, o)),
                                            H('scrollStop', s, i, c),
                                            !(C = m = null)
                                        );
                                },
                                b = function(e) {
                                    var t, n, o;
                                    m || (m = e),
                                        (w += e - m),
                                        (d =
                                            l +
                                            y *
                                                ((n = r = 1 < (r = 0 === S ? 0 : w / S) ? 1 : r),
                                                'easeInQuad' === (t = s).easing && (o = n * n),
                                                'easeOutQuad' === t.easing && (o = n * (2 - n)),
                                                'easeInOutQuad' === t.easing &&
                                                    (o = n < 0.5 ? 2 * n * n : (4 - 2 * n) * n - 1),
                                                'easeInCubic' === t.easing && (o = n * n * n),
                                                'easeOutCubic' === t.easing &&
                                                    (o = --n * n * n + 1),
                                                'easeInOutCubic' === t.easing &&
                                                    (o =
                                                        n < 0.5
                                                            ? 4 * n * n * n
                                                            : (n - 1) * (2 * n - 2) * (2 * n - 2) +
                                                              1),
                                                'easeInQuart' === t.easing && (o = n * n * n * n),
                                                'easeOutQuart' === t.easing &&
                                                    (o = 1 - --n * n * n * n),
                                                'easeInOutQuart' === t.easing &&
                                                    (o =
                                                        n < 0.5
                                                            ? 8 * n * n * n * n
                                                            : 1 - 8 * --n * n * n * n),
                                                'easeInQuint' === t.easing &&
                                                    (o = n * n * n * n * n),
                                                'easeOutQuint' === t.easing &&
                                                    (o = 1 + --n * n * n * n * n),
                                                'easeInOutQuint' === t.easing &&
                                                    (o =
                                                        n < 0.5
                                                            ? 16 * n * n * n * n * n
                                                            : 1 + 16 * --n * n * n * n * n),
                                                t.customEasing && (o = t.customEasing(n)),
                                                o || n)),
                                        q.scrollTo(0, Math.floor(d)),
                                        E(d, g) || ((C = q.requestAnimationFrame(b)), (m = e));
                                };
                            0 === q.pageYOffset && q.scrollTo(0, 0),
                                (f = i),
                                (h = s),
                                u ||
                                    (history.pushState &&
                                        h.updateURL &&
                                        history.pushState(
                                            {smoothScroll: JSON.stringify(h), anchor: f.id},
                                            document.title,
                                            f === document.documentElement ? '#top' : '#' + f.id
                                        )),
                                'matchMedia' in q &&
                                q.matchMedia('(prefers-reduced-motion)').matches
                                    ? q.scrollTo(0, Math.floor(g))
                                    : (H('scrollStart', s, i, c),
                                      M.cancelScroll(!0),
                                      q.requestAnimationFrame(b));
                        }
                    });
                var t = function(e) {
                        if (
                            !e.defaultPrevented &&
                            !(0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey) &&
                            'closest' in e.target &&
                            (a = e.target.closest(o)) &&
                            'a' === a.tagName.toLowerCase() &&
                            !e.target.closest(A.ignore) &&
                            a.hostname === q.location.hostname &&
                            a.pathname === q.location.pathname &&
                            /#/.test(a.href)
                        ) {
                            var t, n;
                            try {
                                t = r(decodeURIComponent(a.hash));
                            } catch (e) {
                                t = r(a.hash);
                            }
                            if ('#' === t) {
                                if (!A.topOnEmptyHash) return;
                                n = document.documentElement;
                            } else n = document.querySelector(t);
                            (n = n || '#top' !== t ? n : document.documentElement) &&
                                (e.preventDefault(),
                                (function(e) {
                                    if (history.replaceState && e.updateURL && !history.state) {
                                        var t = q.location.hash;
                                        (t = t || ''),
                                            history.replaceState(
                                                {
                                                    smoothScroll: JSON.stringify(e),
                                                    anchor: t || q.pageYOffset,
                                                },
                                                document.title,
                                                t || q.location.href
                                            );
                                    }
                                })(A),
                                M.animateScroll(n, a));
                        }
                    },
                    n = function(e) {
                        if (
                            null !== history.state &&
                            history.state.smoothScroll &&
                            history.state.smoothScroll === JSON.stringify(A)
                        ) {
                            var t = history.state.anchor;
                            ('string' == typeof t &&
                                t &&
                                !(t = document.querySelector(r(history.state.anchor)))) ||
                                M.animateScroll(t, null, {updateURL: !1});
                        }
                    };
                M.destroy = function() {
                    A &&
                        (document.removeEventListener('click', t, !1),
                        q.removeEventListener('popstate', n, !1),
                        M.cancelScroll(),
                        (C = O = a = A = null));
                };
                return (
                    (function() {
                        if (
                            !(
                                'querySelector' in document &&
                                'addEventListener' in q &&
                                'requestAnimationFrame' in q &&
                                'closest' in q.Element.prototype
                            )
                        )
                            throw 'Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.';
                        M.destroy(),
                            (A = F(I, e || {})),
                            (O = A.header ? document.querySelector(A.header) : null),
                            document.addEventListener('click', t, !1),
                            A.updateURL && A.popstate && q.addEventListener('popstate', n, !1);
                    })(),
                    M
                );
            };
        }
    );

/**
 * SimpleBar.js - v5.1.0
 * Scrollbars, simpler.
 * https://grsmto.github.io/simplebar/
 *
 * Made by Adrien Denat from a fork by Jonathan Nicol
 * Under MIT License
 */

!(function(t, e) {
    'object' == typeof exports && 'undefined' != typeof module
        ? (module.exports = e())
        : 'function' == typeof define && define.amd
        ? define(e)
        : ((t = t || self).SimpleBar = e());
})(this, function() {
    'use strict';
    var t =
        'undefined' != typeof globalThis
            ? globalThis
            : 'undefined' != typeof window
            ? window
            : 'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
            ? self
            : {};
    function e(t, e) {
        return t((e = {exports: {}}), e.exports), e.exports;
    }
    var r,
        n,
        i,
        o = 'object',
        s = function(t) {
            return t && t.Math == Math && t;
        },
        a =
            s(typeof globalThis == o && globalThis) ||
            s(typeof window == o && window) ||
            s(typeof self == o && self) ||
            s(typeof t == o && t) ||
            Function('return this')(),
        c = function(t) {
            try {
                return !!t();
            } catch (t) {
                return !0;
            }
        },
        l = !c(function() {
            return (
                7 !=
                Object.defineProperty({}, 'a', {
                    get: function() {
                        return 7;
                    },
                }).a
            );
        }),
        u = {}.propertyIsEnumerable,
        f = Object.getOwnPropertyDescriptor,
        h = {
            f:
                f && !u.call({1: 2}, 1)
                    ? function(t) {
                          var e = f(this, t);
                          return !!e && e.enumerable;
                      }
                    : u,
        },
        d = function(t, e) {
            return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e};
        },
        p = {}.toString,
        v = function(t) {
            return p.call(t).slice(8, -1);
        },
        g = ''.split,
        y = c(function() {
            return !Object('z').propertyIsEnumerable(0);
        })
            ? function(t) {
                  return 'String' == v(t) ? g.call(t, '') : Object(t);
              }
            : Object,
        b = function(t) {
            if (null == t) throw TypeError("Can't call method on " + t);
            return t;
        },
        m = function(t) {
            return y(b(t));
        },
        x = function(t) {
            return 'object' == typeof t ? null !== t : 'function' == typeof t;
        },
        E = function(t, e) {
            if (!x(t)) return t;
            var r, n;
            if (e && 'function' == typeof (r = t.toString) && !x((n = r.call(t)))) return n;
            if ('function' == typeof (r = t.valueOf) && !x((n = r.call(t)))) return n;
            if (!e && 'function' == typeof (r = t.toString) && !x((n = r.call(t)))) return n;
            throw TypeError("Can't convert object to primitive value");
        },
        w = {}.hasOwnProperty,
        O = function(t, e) {
            return w.call(t, e);
        },
        _ = a.document,
        S = x(_) && x(_.createElement),
        A = function(t) {
            return S ? _.createElement(t) : {};
        },
        k =
            !l &&
            !c(function() {
                return (
                    7 !=
                    Object.defineProperty(A('div'), 'a', {
                        get: function() {
                            return 7;
                        },
                    }).a
                );
            }),
        L = Object.getOwnPropertyDescriptor,
        M = {
            f: l
                ? L
                : function(t, e) {
                      if (((t = m(t)), (e = E(e, !0)), k))
                          try {
                              return L(t, e);
                          } catch (t) {}
                      if (O(t, e)) return d(!h.f.call(t, e), t[e]);
                  },
        },
        T = function(t) {
            if (!x(t)) throw TypeError(String(t) + ' is not an object');
            return t;
        },
        j = Object.defineProperty,
        R = {
            f: l
                ? j
                : function(t, e, r) {
                      if ((T(t), (e = E(e, !0)), T(r), k))
                          try {
                              return j(t, e, r);
                          } catch (t) {}
                      if ('get' in r || 'set' in r) throw TypeError('Accessors not supported');
                      return 'value' in r && (t[e] = r.value), t;
                  },
        },
        W = l
            ? function(t, e, r) {
                  return R.f(t, e, d(1, r));
              }
            : function(t, e, r) {
                  return (t[e] = r), t;
              },
        z = function(t, e) {
            try {
                W(a, t, e);
            } catch (r) {
                a[t] = e;
            }
            return e;
        },
        C = e(function(t) {
            var e = a['__core-js_shared__'] || z('__core-js_shared__', {});
            (t.exports = function(t, r) {
                return e[t] || (e[t] = void 0 !== r ? r : {});
            })('versions', []).push({
                version: '3.2.1',
                mode: 'global',
                copyright: '© 2019 Denis Pushkarev (zloirock.ru)',
            });
        }),
        N = C('native-function-to-string', Function.toString),
        I = a.WeakMap,
        D = 'function' == typeof I && /native code/.test(N.call(I)),
        P = 0,
        V = Math.random(),
        F = function(t) {
            return 'Symbol(' + String(void 0 === t ? '' : t) + ')_' + (++P + V).toString(36);
        },
        B = C('keys'),
        H = function(t) {
            return B[t] || (B[t] = F(t));
        },
        q = {},
        $ = a.WeakMap;
    if (D) {
        var X = new $(),
            Y = X.get,
            G = X.has,
            U = X.set;
        (r = function(t, e) {
            return U.call(X, t, e), e;
        }),
            (n = function(t) {
                return Y.call(X, t) || {};
            }),
            (i = function(t) {
                return G.call(X, t);
            });
    } else {
        var Q = H('state');
        (q[Q] = !0),
            (r = function(t, e) {
                return W(t, Q, e), e;
            }),
            (n = function(t) {
                return O(t, Q) ? t[Q] : {};
            }),
            (i = function(t) {
                return O(t, Q);
            });
    }
    var K = {
            set: r,
            get: n,
            has: i,
            enforce: function(t) {
                return i(t) ? n(t) : r(t, {});
            },
            getterFor: function(t) {
                return function(e) {
                    var r;
                    if (!x(e) || (r = n(e)).type !== t)
                        throw TypeError('Incompatible receiver, ' + t + ' required');
                    return r;
                };
            },
        },
        J = e(function(t) {
            var e = K.get,
                r = K.enforce,
                n = String(N).split('toString');
            C('inspectSource', function(t) {
                return N.call(t);
            }),
                (t.exports = function(t, e, i, o) {
                    var s = !!o && !!o.unsafe,
                        c = !!o && !!o.enumerable,
                        l = !!o && !!o.noTargetGet;
                    'function' == typeof i &&
                        ('string' != typeof e || O(i, 'name') || W(i, 'name', e),
                        (r(i).source = n.join('string' == typeof e ? e : ''))),
                        t !== a
                            ? (s ? !l && t[e] && (c = !0) : delete t[e],
                              c ? (t[e] = i) : W(t, e, i))
                            : c
                            ? (t[e] = i)
                            : z(e, i);
                })(Function.prototype, 'toString', function() {
                    return ('function' == typeof this && e(this).source) || N.call(this);
                });
        }),
        Z = a,
        tt = function(t) {
            return 'function' == typeof t ? t : void 0;
        },
        et = function(t, e) {
            return arguments.length < 2
                ? tt(Z[t]) || tt(a[t])
                : (Z[t] && Z[t][e]) || (a[t] && a[t][e]);
        },
        rt = Math.ceil,
        nt = Math.floor,
        it = function(t) {
            return isNaN((t = +t)) ? 0 : (t > 0 ? nt : rt)(t);
        },
        ot = Math.min,
        st = function(t) {
            return t > 0 ? ot(it(t), 9007199254740991) : 0;
        },
        at = Math.max,
        ct = Math.min,
        lt = function(t) {
            return function(e, r, n) {
                var i,
                    o = m(e),
                    s = st(o.length),
                    a = (function(t, e) {
                        var r = it(t);
                        return r < 0 ? at(r + e, 0) : ct(r, e);
                    })(n, s);
                if (t && r != r) {
                    for (; s > a; ) if ((i = o[a++]) != i) return !0;
                } else for (; s > a; a++) if ((t || a in o) && o[a] === r) return t || a || 0;
                return !t && -1;
            };
        },
        ut = {includes: lt(!0), indexOf: lt(!1)}.indexOf,
        ft = function(t, e) {
            var r,
                n = m(t),
                i = 0,
                o = [];
            for (r in n) !O(q, r) && O(n, r) && o.push(r);
            for (; e.length > i; ) O(n, (r = e[i++])) && (~ut(o, r) || o.push(r));
            return o;
        },
        ht = [
            'constructor',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            'toLocaleString',
            'toString',
            'valueOf',
        ],
        dt = ht.concat('length', 'prototype'),
        pt = {
            f:
                Object.getOwnPropertyNames ||
                function(t) {
                    return ft(t, dt);
                },
        },
        vt = {f: Object.getOwnPropertySymbols},
        gt =
            et('Reflect', 'ownKeys') ||
            function(t) {
                var e = pt.f(T(t)),
                    r = vt.f;
                return r ? e.concat(r(t)) : e;
            },
        yt = function(t, e) {
            for (var r = gt(e), n = R.f, i = M.f, o = 0; o < r.length; o++) {
                var s = r[o];
                O(t, s) || n(t, s, i(e, s));
            }
        },
        bt = /#|\.prototype\./,
        mt = function(t, e) {
            var r = Et[xt(t)];
            return r == Ot || (r != wt && ('function' == typeof e ? c(e) : !!e));
        },
        xt = (mt.normalize = function(t) {
            return String(t)
                .replace(bt, '.')
                .toLowerCase();
        }),
        Et = (mt.data = {}),
        wt = (mt.NATIVE = 'N'),
        Ot = (mt.POLYFILL = 'P'),
        _t = mt,
        St = M.f,
        At = function(t, e) {
            var r,
                n,
                i,
                o,
                s,
                c = t.target,
                l = t.global,
                u = t.stat;
            if ((r = l ? a : u ? a[c] || z(c, {}) : (a[c] || {}).prototype))
                for (n in e) {
                    if (
                        ((o = e[n]),
                        (i = t.noTargetGet ? (s = St(r, n)) && s.value : r[n]),
                        !_t(l ? n : c + (u ? '.' : '#') + n, t.forced) && void 0 !== i)
                    ) {
                        if (typeof o == typeof i) continue;
                        yt(o, i);
                    }
                    (t.sham || (i && i.sham)) && W(o, 'sham', !0), J(r, n, o, t);
                }
        },
        kt = function(t) {
            if ('function' != typeof t) throw TypeError(String(t) + ' is not a function');
            return t;
        },
        Lt = function(t, e, r) {
            if ((kt(t), void 0 === e)) return t;
            switch (r) {
                case 0:
                    return function() {
                        return t.call(e);
                    };
                case 1:
                    return function(r) {
                        return t.call(e, r);
                    };
                case 2:
                    return function(r, n) {
                        return t.call(e, r, n);
                    };
                case 3:
                    return function(r, n, i) {
                        return t.call(e, r, n, i);
                    };
            }
            return function() {
                return t.apply(e, arguments);
            };
        },
        Mt = function(t) {
            return Object(b(t));
        },
        Tt =
            Array.isArray ||
            function(t) {
                return 'Array' == v(t);
            },
        jt =
            !!Object.getOwnPropertySymbols &&
            !c(function() {
                return !String(Symbol());
            }),
        Rt = a.Symbol,
        Wt = C('wks'),
        zt = function(t) {
            return Wt[t] || (Wt[t] = (jt && Rt[t]) || (jt ? Rt : F)('Symbol.' + t));
        },
        Ct = zt('species'),
        Nt = function(t, e) {
            var r;
            return (
                Tt(t) &&
                    ('function' != typeof (r = t.constructor) || (r !== Array && !Tt(r.prototype))
                        ? x(r) && null === (r = r[Ct]) && (r = void 0)
                        : (r = void 0)),
                new (void 0 === r ? Array : r)(0 === e ? 0 : e)
            );
        },
        It = [].push,
        Dt = function(t) {
            var e = 1 == t,
                r = 2 == t,
                n = 3 == t,
                i = 4 == t,
                o = 6 == t,
                s = 5 == t || o;
            return function(a, c, l, u) {
                for (
                    var f,
                        h,
                        d = Mt(a),
                        p = y(d),
                        v = Lt(c, l, 3),
                        g = st(p.length),
                        b = 0,
                        m = u || Nt,
                        x = e ? m(a, g) : r ? m(a, 0) : void 0;
                    g > b;
                    b++
                )
                    if ((s || b in p) && ((h = v((f = p[b]), b, d)), t))
                        if (e) x[b] = h;
                        else if (h)
                            switch (t) {
                                case 3:
                                    return !0;
                                case 5:
                                    return f;
                                case 6:
                                    return b;
                                case 2:
                                    It.call(x, f);
                            }
                        else if (i) return !1;
                return o ? -1 : n || i ? i : x;
            };
        },
        Pt = {
            forEach: Dt(0),
            map: Dt(1),
            filter: Dt(2),
            some: Dt(3),
            every: Dt(4),
            find: Dt(5),
            findIndex: Dt(6),
        },
        Vt = function(t, e) {
            var r = [][t];
            return (
                !r ||
                !c(function() {
                    r.call(
                        null,
                        e ||
                            function() {
                                throw 1;
                            },
                        1
                    );
                })
            );
        },
        Ft = Pt.forEach,
        Bt = Vt('forEach')
            ? function(t) {
                  return Ft(this, t, arguments.length > 1 ? arguments[1] : void 0);
              }
            : [].forEach;
    At({target: 'Array', proto: !0, forced: [].forEach != Bt}, {forEach: Bt});
    var Ht = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0,
    };
    for (var qt in Ht) {
        var $t = a[qt],
            Xt = $t && $t.prototype;
        if (Xt && Xt.forEach !== Bt)
            try {
                W(Xt, 'forEach', Bt);
            } catch (t) {
                Xt.forEach = Bt;
            }
    }
    var Yt = !('undefined' == typeof window || !window.document || !window.document.createElement),
        Gt = zt('species'),
        Ut = Pt.filter;
    At(
        {
            target: 'Array',
            proto: !0,
            forced: !(function(t) {
                return !c(function() {
                    var e = [];
                    return (
                        ((e.constructor = {})[Gt] = function() {
                            return {foo: 1};
                        }),
                        1 !== e[t](Boolean).foo
                    );
                });
            })('filter'),
        },
        {
            filter: function(t) {
                return Ut(this, t, arguments.length > 1 ? arguments[1] : void 0);
            },
        }
    );
    var Qt =
            Object.keys ||
            function(t) {
                return ft(t, ht);
            },
        Kt = l
            ? Object.defineProperties
            : function(t, e) {
                  T(t);
                  for (var r, n = Qt(e), i = n.length, o = 0; i > o; ) R.f(t, (r = n[o++]), e[r]);
                  return t;
              },
        Jt = et('document', 'documentElement'),
        Zt = H('IE_PROTO'),
        te = function() {},
        ee = function() {
            var t,
                e = A('iframe'),
                r = ht.length;
            for (
                e.style.display = 'none',
                    Jt.appendChild(e),
                    e.src = String('javascript:'),
                    (t = e.contentWindow.document).open(),
                    t.write('<script>document.F=Object</script>'),
                    t.close(),
                    ee = t.F;
                r--;

            )
                delete ee.prototype[ht[r]];
            return ee();
        },
        re =
            Object.create ||
            function(t, e) {
                var r;
                return (
                    null !== t
                        ? ((te.prototype = T(t)),
                          (r = new te()),
                          (te.prototype = null),
                          (r[Zt] = t))
                        : (r = ee()),
                    void 0 === e ? r : Kt(r, e)
                );
            };
    q[Zt] = !0;
    var ne = zt('unscopables'),
        ie = Array.prototype;
    null == ie[ne] && W(ie, ne, re(null));
    var oe,
        se,
        ae,
        ce = function(t) {
            ie[ne][t] = !0;
        },
        le = {},
        ue = !c(function() {
            function t() {}
            return (t.prototype.constructor = null), Object.getPrototypeOf(new t()) !== t.prototype;
        }),
        fe = H('IE_PROTO'),
        he = Object.prototype,
        de = ue
            ? Object.getPrototypeOf
            : function(t) {
                  return (
                      (t = Mt(t)),
                      O(t, fe)
                          ? t[fe]
                          : 'function' == typeof t.constructor && t instanceof t.constructor
                          ? t.constructor.prototype
                          : t instanceof Object
                          ? he
                          : null
                  );
              },
        pe = zt('iterator'),
        ve = !1;
    [].keys &&
        ('next' in (ae = [].keys())
            ? (se = de(de(ae))) !== Object.prototype && (oe = se)
            : (ve = !0)),
        null == oe && (oe = {}),
        O(oe, pe) ||
            W(oe, pe, function() {
                return this;
            });
    var ge = {IteratorPrototype: oe, BUGGY_SAFARI_ITERATORS: ve},
        ye = R.f,
        be = zt('toStringTag'),
        me = function(t, e, r) {
            t && !O((t = r ? t : t.prototype), be) && ye(t, be, {configurable: !0, value: e});
        },
        xe = ge.IteratorPrototype,
        Ee = function() {
            return this;
        },
        we =
            Object.setPrototypeOf ||
            ('__proto__' in {}
                ? (function() {
                      var t,
                          e = !1,
                          r = {};
                      try {
                          (t = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__')
                              .set).call(r, []),
                              (e = r instanceof Array);
                      } catch (t) {}
                      return function(r, n) {
                          return (
                              T(r),
                              (function(t) {
                                  if (!x(t) && null !== t)
                                      throw TypeError("Can't set " + String(t) + ' as a prototype');
                              })(n),
                              e ? t.call(r, n) : (r.__proto__ = n),
                              r
                          );
                      };
                  })()
                : void 0),
        Oe = ge.IteratorPrototype,
        _e = ge.BUGGY_SAFARI_ITERATORS,
        Se = zt('iterator'),
        Ae = function() {
            return this;
        },
        ke = function(t, e, r, n, i, o, s) {
            !(function(t, e, r) {
                var n = e + ' Iterator';
                (t.prototype = re(xe, {next: d(1, r)})), me(t, n, !1), (le[n] = Ee);
            })(r, e, n);
            var a,
                c,
                l,
                u = function(t) {
                    if (t === i && g) return g;
                    if (!_e && t in p) return p[t];
                    switch (t) {
                        case 'keys':
                        case 'values':
                        case 'entries':
                            return function() {
                                return new r(this, t);
                            };
                    }
                    return function() {
                        return new r(this);
                    };
                },
                f = e + ' Iterator',
                h = !1,
                p = t.prototype,
                v = p[Se] || p['@@iterator'] || (i && p[i]),
                g = (!_e && v) || u(i),
                y = ('Array' == e && p.entries) || v;
            if (
                (y &&
                    ((a = de(y.call(new t()))),
                    Oe !== Object.prototype &&
                        a.next &&
                        (de(a) !== Oe &&
                            (we ? we(a, Oe) : 'function' != typeof a[Se] && W(a, Se, Ae)),
                        me(a, f, !0))),
                'values' == i &&
                    v &&
                    'values' !== v.name &&
                    ((h = !0),
                    (g = function() {
                        return v.call(this);
                    })),
                p[Se] !== g && W(p, Se, g),
                (le[e] = g),
                i)
            )
                if (
                    ((c = {values: u('values'), keys: o ? g : u('keys'), entries: u('entries')}), s)
                )
                    for (l in c) (!_e && !h && l in p) || J(p, l, c[l]);
                else At({target: e, proto: !0, forced: _e || h}, c);
            return c;
        },
        Le = K.set,
        Me = K.getterFor('Array Iterator'),
        Te = ke(
            Array,
            'Array',
            function(t, e) {
                Le(this, {type: 'Array Iterator', target: m(t), index: 0, kind: e});
            },
            function() {
                var t = Me(this),
                    e = t.target,
                    r = t.kind,
                    n = t.index++;
                return !e || n >= e.length
                    ? ((t.target = void 0), {value: void 0, done: !0})
                    : 'keys' == r
                    ? {value: n, done: !1}
                    : 'values' == r
                    ? {value: e[n], done: !1}
                    : {value: [n, e[n]], done: !1};
            },
            'values'
        );
    (le.Arguments = le.Array), ce('keys'), ce('values'), ce('entries');
    var je = Object.assign,
        Re =
            !je ||
            c(function() {
                var t = {},
                    e = {},
                    r = Symbol();
                return (
                    (t[r] = 7),
                    'abcdefghijklmnopqrst'.split('').forEach(function(t) {
                        e[t] = t;
                    }),
                    7 != je({}, t)[r] || 'abcdefghijklmnopqrst' != Qt(je({}, e)).join('')
                );
            })
                ? function(t, e) {
                      for (var r = Mt(t), n = arguments.length, i = 1, o = vt.f, s = h.f; n > i; )
                          for (
                              var a,
                                  c = y(arguments[i++]),
                                  u = o ? Qt(c).concat(o(c)) : Qt(c),
                                  f = u.length,
                                  d = 0;
                              f > d;

                          )
                              (a = u[d++]), (l && !s.call(c, a)) || (r[a] = c[a]);
                      return r;
                  }
                : je;
    At({target: 'Object', stat: !0, forced: Object.assign !== Re}, {assign: Re});
    var We = zt('toStringTag'),
        ze =
            'Arguments' ==
            v(
                (function() {
                    return arguments;
                })()
            ),
        Ce = function(t) {
            var e, r, n;
            return void 0 === t
                ? 'Undefined'
                : null === t
                ? 'Null'
                : 'string' ==
                  typeof (r = (function(t, e) {
                      try {
                          return t[e];
                      } catch (t) {}
                  })((e = Object(t)), We))
                ? r
                : ze
                ? v(e)
                : 'Object' == (n = v(e)) && 'function' == typeof e.callee
                ? 'Arguments'
                : n;
        },
        Ne = {};
    Ne[zt('toStringTag')] = 'z';
    var Ie =
            '[object z]' !== String(Ne)
                ? function() {
                      return '[object ' + Ce(this) + ']';
                  }
                : Ne.toString,
        De = Object.prototype;
    Ie !== De.toString && J(De, 'toString', Ie, {unsafe: !0});
    var Pe = '\t\n\v\f\r                　\u2028\u2029\ufeff',
        Ve = '[' + Pe + ']',
        Fe = RegExp('^' + Ve + Ve + '*'),
        Be = RegExp(Ve + Ve + '*$'),
        He = function(t) {
            return function(e) {
                var r = String(b(e));
                return 1 & t && (r = r.replace(Fe, '')), 2 & t && (r = r.replace(Be, '')), r;
            };
        },
        qe = {start: He(1), end: He(2), trim: He(3)}.trim,
        $e = a.parseInt,
        Xe = /^[+-]?0[Xx]/,
        Ye =
            8 !== $e(Pe + '08') || 22 !== $e(Pe + '0x16')
                ? function(t, e) {
                      var r = qe(String(t));
                      return $e(r, e >>> 0 || (Xe.test(r) ? 16 : 10));
                  }
                : $e;
    At({global: !0, forced: parseInt != Ye}, {parseInt: Ye});
    var Ge = function(t) {
            return function(e, r) {
                var n,
                    i,
                    o = String(b(e)),
                    s = it(r),
                    a = o.length;
                return s < 0 || s >= a
                    ? t
                        ? ''
                        : void 0
                    : (n = o.charCodeAt(s)) < 55296 ||
                      n > 56319 ||
                      s + 1 === a ||
                      (i = o.charCodeAt(s + 1)) < 56320 ||
                      i > 57343
                    ? t
                        ? o.charAt(s)
                        : n
                    : t
                    ? o.slice(s, s + 2)
                    : i - 56320 + ((n - 55296) << 10) + 65536;
            };
        },
        Ue = {codeAt: Ge(!1), charAt: Ge(!0)},
        Qe = Ue.charAt,
        Ke = K.set,
        Je = K.getterFor('String Iterator');
    ke(
        String,
        'String',
        function(t) {
            Ke(this, {type: 'String Iterator', string: String(t), index: 0});
        },
        function() {
            var t,
                e = Je(this),
                r = e.string,
                n = e.index;
            return n >= r.length
                ? {value: void 0, done: !0}
                : ((t = Qe(r, n)), (e.index += t.length), {value: t, done: !1});
        }
    );
    var Ze = function(t, e, r) {
            for (var n in e) J(t, n, e[n], r);
            return t;
        },
        tr = !c(function() {
            return Object.isExtensible(Object.preventExtensions({}));
        }),
        er = e(function(t) {
            var e = R.f,
                r = F('meta'),
                n = 0,
                i =
                    Object.isExtensible ||
                    function() {
                        return !0;
                    },
                o = function(t) {
                    e(t, r, {value: {objectID: 'O' + ++n, weakData: {}}});
                },
                s = (t.exports = {
                    REQUIRED: !1,
                    fastKey: function(t, e) {
                        if (!x(t))
                            return 'symbol' == typeof t
                                ? t
                                : ('string' == typeof t ? 'S' : 'P') + t;
                        if (!O(t, r)) {
                            if (!i(t)) return 'F';
                            if (!e) return 'E';
                            o(t);
                        }
                        return t[r].objectID;
                    },
                    getWeakData: function(t, e) {
                        if (!O(t, r)) {
                            if (!i(t)) return !0;
                            if (!e) return !1;
                            o(t);
                        }
                        return t[r].weakData;
                    },
                    onFreeze: function(t) {
                        return tr && s.REQUIRED && i(t) && !O(t, r) && o(t), t;
                    },
                });
            q[r] = !0;
        }),
        rr = (er.REQUIRED, er.fastKey, er.getWeakData, er.onFreeze, zt('iterator')),
        nr = Array.prototype,
        ir = zt('iterator'),
        or = function(t, e, r, n) {
            try {
                return n ? e(T(r)[0], r[1]) : e(r);
            } catch (e) {
                var i = t.return;
                throw (void 0 !== i && T(i.call(t)), e);
            }
        },
        sr = e(function(t) {
            var e = function(t, e) {
                (this.stopped = t), (this.result = e);
            };
            (t.exports = function(t, r, n, i, o) {
                var s,
                    a,
                    c,
                    l,
                    u,
                    f,
                    h,
                    d = Lt(r, n, i ? 2 : 1);
                if (o) s = t;
                else {
                    if (
                        'function' !=
                        typeof (a = (function(t) {
                            if (null != t) return t[ir] || t['@@iterator'] || le[Ce(t)];
                        })(t))
                    )
                        throw TypeError('Target is not iterable');
                    if (void 0 !== (h = a) && (le.Array === h || nr[rr] === h)) {
                        for (c = 0, l = st(t.length); l > c; c++)
                            if ((u = i ? d(T((f = t[c]))[0], f[1]) : d(t[c])) && u instanceof e)
                                return u;
                        return new e(!1);
                    }
                    s = a.call(t);
                }
                for (; !(f = s.next()).done; )
                    if ((u = or(s, d, f.value, i)) && u instanceof e) return u;
                return new e(!1);
            }).stop = function(t) {
                return new e(!0, t);
            };
        }),
        ar = function(t, e, r) {
            if (!(t instanceof e))
                throw TypeError('Incorrect ' + (r ? r + ' ' : '') + 'invocation');
            return t;
        },
        cr = zt('iterator'),
        lr = !1;
    try {
        var ur = 0,
            fr = {
                next: function() {
                    return {done: !!ur++};
                },
                return: function() {
                    lr = !0;
                },
            };
        (fr[cr] = function() {
            return this;
        }),
            Array.from(fr, function() {
                throw 2;
            });
    } catch (t) {}
    var hr = function(t, e, r, n, i) {
            var o = a[t],
                s = o && o.prototype,
                l = o,
                u = n ? 'set' : 'add',
                f = {},
                h = function(t) {
                    var e = s[t];
                    J(
                        s,
                        t,
                        'add' == t
                            ? function(t) {
                                  return e.call(this, 0 === t ? 0 : t), this;
                              }
                            : 'delete' == t
                            ? function(t) {
                                  return !(i && !x(t)) && e.call(this, 0 === t ? 0 : t);
                              }
                            : 'get' == t
                            ? function(t) {
                                  return i && !x(t) ? void 0 : e.call(this, 0 === t ? 0 : t);
                              }
                            : 'has' == t
                            ? function(t) {
                                  return !(i && !x(t)) && e.call(this, 0 === t ? 0 : t);
                              }
                            : function(t, r) {
                                  return e.call(this, 0 === t ? 0 : t, r), this;
                              }
                    );
                };
            if (
                _t(
                    t,
                    'function' != typeof o ||
                        !(
                            i ||
                            (s.forEach &&
                                !c(function() {
                                    new o().entries().next();
                                }))
                        )
                )
            )
                (l = r.getConstructor(e, t, n, u)), (er.REQUIRED = !0);
            else if (_t(t, !0)) {
                var d = new l(),
                    p = d[u](i ? {} : -0, 1) != d,
                    v = c(function() {
                        d.has(1);
                    }),
                    g = (function(t, e) {
                        if (!e && !lr) return !1;
                        var r = !1;
                        try {
                            var n = {};
                            (n[cr] = function() {
                                return {
                                    next: function() {
                                        return {done: (r = !0)};
                                    },
                                };
                            }),
                                t(n);
                        } catch (t) {}
                        return r;
                    })(function(t) {
                        new o(t);
                    }),
                    y =
                        !i &&
                        c(function() {
                            for (var t = new o(), e = 5; e--; ) t[u](e, e);
                            return !t.has(-0);
                        });
                g ||
                    (((l = e(function(e, r) {
                        ar(e, l, t);
                        var i = (function(t, e, r) {
                            var n, i;
                            return (
                                we &&
                                    'function' == typeof (n = e.constructor) &&
                                    n !== r &&
                                    x((i = n.prototype)) &&
                                    i !== r.prototype &&
                                    we(t, i),
                                t
                            );
                        })(new o(), e, l);
                        return null != r && sr(r, i[u], i, n), i;
                    })).prototype = s),
                    (s.constructor = l)),
                    (v || y) && (h('delete'), h('has'), n && h('get')),
                    (y || p) && h(u),
                    i && s.clear && delete s.clear;
            }
            return (
                (f[t] = l),
                At({global: !0, forced: l != o}, f),
                me(l, t),
                i || r.setStrong(l, t, n),
                l
            );
        },
        dr = er.getWeakData,
        pr = K.set,
        vr = K.getterFor,
        gr = Pt.find,
        yr = Pt.findIndex,
        br = 0,
        mr = function(t) {
            return t.frozen || (t.frozen = new xr());
        },
        xr = function() {
            this.entries = [];
        },
        Er = function(t, e) {
            return gr(t.entries, function(t) {
                return t[0] === e;
            });
        };
    xr.prototype = {
        get: function(t) {
            var e = Er(this, t);
            if (e) return e[1];
        },
        has: function(t) {
            return !!Er(this, t);
        },
        set: function(t, e) {
            var r = Er(this, t);
            r ? (r[1] = e) : this.entries.push([t, e]);
        },
        delete: function(t) {
            var e = yr(this.entries, function(e) {
                return e[0] === t;
            });
            return ~e && this.entries.splice(e, 1), !!~e;
        },
    };
    var wr = {
            getConstructor: function(t, e, r, n) {
                var i = t(function(t, o) {
                        ar(t, i, e),
                            pr(t, {type: e, id: br++, frozen: void 0}),
                            null != o && sr(o, t[n], t, r);
                    }),
                    o = vr(e),
                    s = function(t, e, r) {
                        var n = o(t),
                            i = dr(T(e), !0);
                        return !0 === i ? mr(n).set(e, r) : (i[n.id] = r), t;
                    };
                return (
                    Ze(i.prototype, {
                        delete: function(t) {
                            var e = o(this);
                            if (!x(t)) return !1;
                            var r = dr(t);
                            return !0 === r ? mr(e).delete(t) : r && O(r, e.id) && delete r[e.id];
                        },
                        has: function(t) {
                            var e = o(this);
                            if (!x(t)) return !1;
                            var r = dr(t);
                            return !0 === r ? mr(e).has(t) : r && O(r, e.id);
                        },
                    }),
                    Ze(
                        i.prototype,
                        r
                            ? {
                                  get: function(t) {
                                      var e = o(this);
                                      if (x(t)) {
                                          var r = dr(t);
                                          return !0 === r ? mr(e).get(t) : r ? r[e.id] : void 0;
                                      }
                                  },
                                  set: function(t, e) {
                                      return s(this, t, e);
                                  },
                              }
                            : {
                                  add: function(t) {
                                      return s(this, t, !0);
                                  },
                              }
                    ),
                    i
                );
            },
        },
        Or =
            (e(function(t) {
                var e,
                    r = K.enforce,
                    n = !a.ActiveXObject && 'ActiveXObject' in a,
                    i = Object.isExtensible,
                    o = function(t) {
                        return function() {
                            return t(this, arguments.length ? arguments[0] : void 0);
                        };
                    },
                    s = (t.exports = hr('WeakMap', o, wr, !0, !0));
                if (D && n) {
                    (e = wr.getConstructor(o, 'WeakMap', !0)), (er.REQUIRED = !0);
                    var c = s.prototype,
                        l = c.delete,
                        u = c.has,
                        f = c.get,
                        h = c.set;
                    Ze(c, {
                        delete: function(t) {
                            if (x(t) && !i(t)) {
                                var n = r(this);
                                return (
                                    n.frozen || (n.frozen = new e()),
                                    l.call(this, t) || n.frozen.delete(t)
                                );
                            }
                            return l.call(this, t);
                        },
                        has: function(t) {
                            if (x(t) && !i(t)) {
                                var n = r(this);
                                return (
                                    n.frozen || (n.frozen = new e()),
                                    u.call(this, t) || n.frozen.has(t)
                                );
                            }
                            return u.call(this, t);
                        },
                        get: function(t) {
                            if (x(t) && !i(t)) {
                                var n = r(this);
                                return (
                                    n.frozen || (n.frozen = new e()),
                                    u.call(this, t) ? f.call(this, t) : n.frozen.get(t)
                                );
                            }
                            return f.call(this, t);
                        },
                        set: function(t, n) {
                            if (x(t) && !i(t)) {
                                var o = r(this);
                                o.frozen || (o.frozen = new e()),
                                    u.call(this, t) ? h.call(this, t, n) : o.frozen.set(t, n);
                            } else h.call(this, t, n);
                            return this;
                        },
                    });
                }
            }),
            zt('iterator')),
        _r = zt('toStringTag'),
        Sr = Te.values;
    for (var Ar in Ht) {
        var kr = a[Ar],
            Lr = kr && kr.prototype;
        if (Lr) {
            if (Lr[Or] !== Sr)
                try {
                    W(Lr, Or, Sr);
                } catch (t) {
                    Lr[Or] = Sr;
                }
            if ((Lr[_r] || W(Lr, _r, Ar), Ht[Ar]))
                for (var Mr in Te)
                    if (Lr[Mr] !== Te[Mr])
                        try {
                            W(Lr, Mr, Te[Mr]);
                        } catch (t) {
                            Lr[Mr] = Te[Mr];
                        }
        }
    }
    var Tr = 'Expected a function',
        jr = NaN,
        Rr = '[object Symbol]',
        Wr = /^\s+|\s+$/g,
        zr = /^[-+]0x[0-9a-f]+$/i,
        Cr = /^0b[01]+$/i,
        Nr = /^0o[0-7]+$/i,
        Ir = parseInt,
        Dr = 'object' == typeof t && t && t.Object === Object && t,
        Pr = 'object' == typeof self && self && self.Object === Object && self,
        Vr = Dr || Pr || Function('return this')(),
        Fr = Object.prototype.toString,
        Br = Math.max,
        Hr = Math.min,
        qr = function() {
            return Vr.Date.now();
        };
    function $r(t, e, r) {
        var n,
            i,
            o,
            s,
            a,
            c,
            l = 0,
            u = !1,
            f = !1,
            h = !0;
        if ('function' != typeof t) throw new TypeError(Tr);
        function d(e) {
            var r = n,
                o = i;
            return (n = i = void 0), (l = e), (s = t.apply(o, r));
        }
        function p(t) {
            var r = t - c;
            return void 0 === c || r >= e || r < 0 || (f && t - l >= o);
        }
        function v() {
            var t = qr();
            if (p(t)) return g(t);
            a = setTimeout(
                v,
                (function(t) {
                    var r = e - (t - c);
                    return f ? Hr(r, o - (t - l)) : r;
                })(t)
            );
        }
        function g(t) {
            return (a = void 0), h && n ? d(t) : ((n = i = void 0), s);
        }
        function y() {
            var t = qr(),
                r = p(t);
            if (((n = arguments), (i = this), (c = t), r)) {
                if (void 0 === a)
                    return (function(t) {
                        return (l = t), (a = setTimeout(v, e)), u ? d(t) : s;
                    })(c);
                if (f) return (a = setTimeout(v, e)), d(c);
            }
            return void 0 === a && (a = setTimeout(v, e)), s;
        }
        return (
            (e = Yr(e) || 0),
            Xr(r) &&
                ((u = !!r.leading),
                (o = (f = 'maxWait' in r) ? Br(Yr(r.maxWait) || 0, e) : o),
                (h = 'trailing' in r ? !!r.trailing : h)),
            (y.cancel = function() {
                void 0 !== a && clearTimeout(a), (l = 0), (n = c = i = a = void 0);
            }),
            (y.flush = function() {
                return void 0 === a ? s : g(qr());
            }),
            y
        );
    }
    function Xr(t) {
        var e = typeof t;
        return !!t && ('object' == e || 'function' == e);
    }
    function Yr(t) {
        if ('number' == typeof t) return t;
        if (
            (function(t) {
                return (
                    'symbol' == typeof t ||
                    ((function(t) {
                        return !!t && 'object' == typeof t;
                    })(t) &&
                        Fr.call(t) == Rr)
                );
            })(t)
        )
            return jr;
        if (Xr(t)) {
            var e = 'function' == typeof t.valueOf ? t.valueOf() : t;
            t = Xr(e) ? e + '' : e;
        }
        if ('string' != typeof t) return 0 === t ? t : +t;
        t = t.replace(Wr, '');
        var r = Cr.test(t);
        return r || Nr.test(t) ? Ir(t.slice(2), r ? 2 : 8) : zr.test(t) ? jr : +t;
    }
    var Gr = function(t, e, r) {
            var n = !0,
                i = !0;
            if ('function' != typeof t) throw new TypeError(Tr);
            return (
                Xr(r) &&
                    ((n = 'leading' in r ? !!r.leading : n),
                    (i = 'trailing' in r ? !!r.trailing : i)),
                $r(t, e, {leading: n, maxWait: e, trailing: i})
            );
        },
        Ur = 'Expected a function',
        Qr = NaN,
        Kr = '[object Symbol]',
        Jr = /^\s+|\s+$/g,
        Zr = /^[-+]0x[0-9a-f]+$/i,
        tn = /^0b[01]+$/i,
        en = /^0o[0-7]+$/i,
        rn = parseInt,
        nn = 'object' == typeof t && t && t.Object === Object && t,
        on = 'object' == typeof self && self && self.Object === Object && self,
        sn = nn || on || Function('return this')(),
        an = Object.prototype.toString,
        cn = Math.max,
        ln = Math.min,
        un = function() {
            return sn.Date.now();
        };
    function fn(t) {
        var e = typeof t;
        return !!t && ('object' == e || 'function' == e);
    }
    function hn(t) {
        if ('number' == typeof t) return t;
        if (
            (function(t) {
                return (
                    'symbol' == typeof t ||
                    ((function(t) {
                        return !!t && 'object' == typeof t;
                    })(t) &&
                        an.call(t) == Kr)
                );
            })(t)
        )
            return Qr;
        if (fn(t)) {
            var e = 'function' == typeof t.valueOf ? t.valueOf() : t;
            t = fn(e) ? e + '' : e;
        }
        if ('string' != typeof t) return 0 === t ? t : +t;
        t = t.replace(Jr, '');
        var r = tn.test(t);
        return r || en.test(t) ? rn(t.slice(2), r ? 2 : 8) : Zr.test(t) ? Qr : +t;
    }
    var dn = function(t, e, r) {
            var n,
                i,
                o,
                s,
                a,
                c,
                l = 0,
                u = !1,
                f = !1,
                h = !0;
            if ('function' != typeof t) throw new TypeError(Ur);
            function d(e) {
                var r = n,
                    o = i;
                return (n = i = void 0), (l = e), (s = t.apply(o, r));
            }
            function p(t) {
                var r = t - c;
                return void 0 === c || r >= e || r < 0 || (f && t - l >= o);
            }
            function v() {
                var t = un();
                if (p(t)) return g(t);
                a = setTimeout(
                    v,
                    (function(t) {
                        var r = e - (t - c);
                        return f ? ln(r, o - (t - l)) : r;
                    })(t)
                );
            }
            function g(t) {
                return (a = void 0), h && n ? d(t) : ((n = i = void 0), s);
            }
            function y() {
                var t = un(),
                    r = p(t);
                if (((n = arguments), (i = this), (c = t), r)) {
                    if (void 0 === a)
                        return (function(t) {
                            return (l = t), (a = setTimeout(v, e)), u ? d(t) : s;
                        })(c);
                    if (f) return (a = setTimeout(v, e)), d(c);
                }
                return void 0 === a && (a = setTimeout(v, e)), s;
            }
            return (
                (e = hn(e) || 0),
                fn(r) &&
                    ((u = !!r.leading),
                    (o = (f = 'maxWait' in r) ? cn(hn(r.maxWait) || 0, e) : o),
                    (h = 'trailing' in r ? !!r.trailing : h)),
                (y.cancel = function() {
                    void 0 !== a && clearTimeout(a), (l = 0), (n = c = i = a = void 0);
                }),
                (y.flush = function() {
                    return void 0 === a ? s : g(un());
                }),
                y
            );
        },
        pn = 'Expected a function',
        vn = '__lodash_hash_undefined__',
        gn = '[object Function]',
        yn = '[object GeneratorFunction]',
        bn = /^\[object .+?Constructor\]$/,
        mn = 'object' == typeof t && t && t.Object === Object && t,
        xn = 'object' == typeof self && self && self.Object === Object && self,
        En = mn || xn || Function('return this')();
    var wn = Array.prototype,
        On = Function.prototype,
        _n = Object.prototype,
        Sn = En['__core-js_shared__'],
        An = (function() {
            var t = /[^.]+$/.exec((Sn && Sn.keys && Sn.keys.IE_PROTO) || '');
            return t ? 'Symbol(src)_1.' + t : '';
        })(),
        kn = On.toString,
        Ln = _n.hasOwnProperty,
        Mn = _n.toString,
        Tn = RegExp(
            '^' +
                kn
                    .call(Ln)
                    .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
                    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
                '$'
        ),
        jn = wn.splice,
        Rn = Vn(En, 'Map'),
        Wn = Vn(Object, 'create');
    function zn(t) {
        var e = -1,
            r = t ? t.length : 0;
        for (this.clear(); ++e < r; ) {
            var n = t[e];
            this.set(n[0], n[1]);
        }
    }
    function Cn(t) {
        var e = -1,
            r = t ? t.length : 0;
        for (this.clear(); ++e < r; ) {
            var n = t[e];
            this.set(n[0], n[1]);
        }
    }
    function Nn(t) {
        var e = -1,
            r = t ? t.length : 0;
        for (this.clear(); ++e < r; ) {
            var n = t[e];
            this.set(n[0], n[1]);
        }
    }
    function In(t, e) {
        for (var r, n, i = t.length; i--; )
            if ((r = t[i][0]) === (n = e) || (r != r && n != n)) return i;
        return -1;
    }
    function Dn(t) {
        return (
            !(!Bn(t) || ((e = t), An && An in e)) &&
            ((function(t) {
                var e = Bn(t) ? Mn.call(t) : '';
                return e == gn || e == yn;
            })(t) ||
            (function(t) {
                var e = !1;
                if (null != t && 'function' != typeof t.toString)
                    try {
                        e = !!(t + '');
                    } catch (t) {}
                return e;
            })(t)
                ? Tn
                : bn
            ).test(
                (function(t) {
                    if (null != t) {
                        try {
                            return kn.call(t);
                        } catch (t) {}
                        try {
                            return t + '';
                        } catch (t) {}
                    }
                    return '';
                })(t)
            )
        );
        var e;
    }
    function Pn(t, e) {
        var r,
            n,
            i = t.__data__;
        return ('string' == (n = typeof (r = e)) || 'number' == n || 'symbol' == n || 'boolean' == n
          ? '__proto__' !== r
          : null === r)
            ? i['string' == typeof e ? 'string' : 'hash']
            : i.map;
    }
    function Vn(t, e) {
        var r = (function(t, e) {
            return null == t ? void 0 : t[e];
        })(t, e);
        return Dn(r) ? r : void 0;
    }
    function Fn(t, e) {
        if ('function' != typeof t || (e && 'function' != typeof e)) throw new TypeError(pn);
        var r = function() {
            var n = arguments,
                i = e ? e.apply(this, n) : n[0],
                o = r.cache;
            if (o.has(i)) return o.get(i);
            var s = t.apply(this, n);
            return (r.cache = o.set(i, s)), s;
        };
        return (r.cache = new (Fn.Cache || Nn)()), r;
    }
    function Bn(t) {
        var e = typeof t;
        return !!t && ('object' == e || 'function' == e);
    }
    (zn.prototype.clear = function() {
        this.__data__ = Wn ? Wn(null) : {};
    }),
        (zn.prototype.delete = function(t) {
            return this.has(t) && delete this.__data__[t];
        }),
        (zn.prototype.get = function(t) {
            var e = this.__data__;
            if (Wn) {
                var r = e[t];
                return r === vn ? void 0 : r;
            }
            return Ln.call(e, t) ? e[t] : void 0;
        }),
        (zn.prototype.has = function(t) {
            var e = this.__data__;
            return Wn ? void 0 !== e[t] : Ln.call(e, t);
        }),
        (zn.prototype.set = function(t, e) {
            return (this.__data__[t] = Wn && void 0 === e ? vn : e), this;
        }),
        (Cn.prototype.clear = function() {
            this.__data__ = [];
        }),
        (Cn.prototype.delete = function(t) {
            var e = this.__data__,
                r = In(e, t);
            return !(r < 0) && (r == e.length - 1 ? e.pop() : jn.call(e, r, 1), !0);
        }),
        (Cn.prototype.get = function(t) {
            var e = this.__data__,
                r = In(e, t);
            return r < 0 ? void 0 : e[r][1];
        }),
        (Cn.prototype.has = function(t) {
            return In(this.__data__, t) > -1;
        }),
        (Cn.prototype.set = function(t, e) {
            var r = this.__data__,
                n = In(r, t);
            return n < 0 ? r.push([t, e]) : (r[n][1] = e), this;
        }),
        (Nn.prototype.clear = function() {
            this.__data__ = {hash: new zn(), map: new (Rn || Cn)(), string: new zn()};
        }),
        (Nn.prototype.delete = function(t) {
            return Pn(this, t).delete(t);
        }),
        (Nn.prototype.get = function(t) {
            return Pn(this, t).get(t);
        }),
        (Nn.prototype.has = function(t) {
            return Pn(this, t).has(t);
        }),
        (Nn.prototype.set = function(t, e) {
            return Pn(this, t).set(t, e), this;
        }),
        (Fn.Cache = Nn);
    var Hn = Fn,
        qn = (function() {
            if ('undefined' != typeof Map) return Map;
            function t(t, e) {
                var r = -1;
                return (
                    t.some(function(t, n) {
                        return t[0] === e && ((r = n), !0);
                    }),
                    r
                );
            }
            return (function() {
                function e() {
                    this.__entries__ = [];
                }
                return (
                    Object.defineProperty(e.prototype, 'size', {
                        get: function() {
                            return this.__entries__.length;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (e.prototype.get = function(e) {
                        var r = t(this.__entries__, e),
                            n = this.__entries__[r];
                        return n && n[1];
                    }),
                    (e.prototype.set = function(e, r) {
                        var n = t(this.__entries__, e);
                        ~n ? (this.__entries__[n][1] = r) : this.__entries__.push([e, r]);
                    }),
                    (e.prototype.delete = function(e) {
                        var r = this.__entries__,
                            n = t(r, e);
                        ~n && r.splice(n, 1);
                    }),
                    (e.prototype.has = function(e) {
                        return !!~t(this.__entries__, e);
                    }),
                    (e.prototype.clear = function() {
                        this.__entries__.splice(0);
                    }),
                    (e.prototype.forEach = function(t, e) {
                        void 0 === e && (e = null);
                        for (var r = 0, n = this.__entries__; r < n.length; r++) {
                            var i = n[r];
                            t.call(e, i[1], i[0]);
                        }
                    }),
                    e
                );
            })();
        })(),
        $n =
            'undefined' != typeof window &&
            'undefined' != typeof document &&
            window.document === document,
        Xn =
            'undefined' != typeof global && global.Math === Math
                ? global
                : 'undefined' != typeof self && self.Math === Math
                ? self
                : 'undefined' != typeof window && window.Math === Math
                ? window
                : Function('return this')(),
        Yn =
            'function' == typeof requestAnimationFrame
                ? requestAnimationFrame.bind(Xn)
                : function(t) {
                      return setTimeout(function() {
                          return t(Date.now());
                      }, 1e3 / 60);
                  },
        Gn = 2;
    var Un = 20,
        Qn = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'],
        Kn = 'undefined' != typeof MutationObserver,
        Jn = (function() {
            function t() {
                (this.connected_ = !1),
                    (this.mutationEventsAdded_ = !1),
                    (this.mutationsObserver_ = null),
                    (this.observers_ = []),
                    (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
                    (this.refresh = (function(t, e) {
                        var r = !1,
                            n = !1,
                            i = 0;
                        function o() {
                            r && ((r = !1), t()), n && a();
                        }
                        function s() {
                            Yn(o);
                        }
                        function a() {
                            var t = Date.now();
                            if (r) {
                                if (t - i < Gn) return;
                                n = !0;
                            } else (r = !0), (n = !1), setTimeout(s, e);
                            i = t;
                        }
                        return a;
                    })(this.refresh.bind(this), Un));
            }
            return (
                (t.prototype.addObserver = function(t) {
                    ~this.observers_.indexOf(t) || this.observers_.push(t),
                        this.connected_ || this.connect_();
                }),
                (t.prototype.removeObserver = function(t) {
                    var e = this.observers_,
                        r = e.indexOf(t);
                    ~r && e.splice(r, 1), !e.length && this.connected_ && this.disconnect_();
                }),
                (t.prototype.refresh = function() {
                    this.updateObservers_() && this.refresh();
                }),
                (t.prototype.updateObservers_ = function() {
                    var t = this.observers_.filter(function(t) {
                        return t.gatherActive(), t.hasActive();
                    });
                    return (
                        t.forEach(function(t) {
                            return t.broadcastActive();
                        }),
                        t.length > 0
                    );
                }),
                (t.prototype.connect_ = function() {
                    $n &&
                        !this.connected_ &&
                        (document.addEventListener('transitionend', this.onTransitionEnd_),
                        window.addEventListener('resize', this.refresh),
                        Kn
                            ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
                              this.mutationsObserver_.observe(document, {
                                  attributes: !0,
                                  childList: !0,
                                  characterData: !0,
                                  subtree: !0,
                              }))
                            : (document.addEventListener('DOMSubtreeModified', this.refresh),
                              (this.mutationEventsAdded_ = !0)),
                        (this.connected_ = !0));
                }),
                (t.prototype.disconnect_ = function() {
                    $n &&
                        this.connected_ &&
                        (document.removeEventListener('transitionend', this.onTransitionEnd_),
                        window.removeEventListener('resize', this.refresh),
                        this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
                        this.mutationEventsAdded_ &&
                            document.removeEventListener('DOMSubtreeModified', this.refresh),
                        (this.mutationsObserver_ = null),
                        (this.mutationEventsAdded_ = !1),
                        (this.connected_ = !1));
                }),
                (t.prototype.onTransitionEnd_ = function(t) {
                    var e = t.propertyName,
                        r = void 0 === e ? '' : e;
                    Qn.some(function(t) {
                        return !!~r.indexOf(t);
                    }) && this.refresh();
                }),
                (t.getInstance = function() {
                    return this.instance_ || (this.instance_ = new t()), this.instance_;
                }),
                (t.instance_ = null),
                t
            );
        })(),
        Zn = function(t, e) {
            for (var r = 0, n = Object.keys(e); r < n.length; r++) {
                var i = n[r];
                Object.defineProperty(t, i, {
                    value: e[i],
                    enumerable: !1,
                    writable: !1,
                    configurable: !0,
                });
            }
            return t;
        },
        ti = function(t) {
            return (t && t.ownerDocument && t.ownerDocument.defaultView) || Xn;
        },
        ei = ai(0, 0, 0, 0);
    function ri(t) {
        return parseFloat(t) || 0;
    }
    function ni(t) {
        for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
        return e.reduce(function(e, r) {
            return e + ri(t['border-' + r + '-width']);
        }, 0);
    }
    function ii(t) {
        var e = t.clientWidth,
            r = t.clientHeight;
        if (!e && !r) return ei;
        var n = ti(t).getComputedStyle(t),
            i = (function(t) {
                for (var e = {}, r = 0, n = ['top', 'right', 'bottom', 'left']; r < n.length; r++) {
                    var i = n[r],
                        o = t['padding-' + i];
                    e[i] = ri(o);
                }
                return e;
            })(n),
            o = i.left + i.right,
            s = i.top + i.bottom,
            a = ri(n.width),
            c = ri(n.height);
        if (
            ('border-box' === n.boxSizing &&
                (Math.round(a + o) !== e && (a -= ni(n, 'left', 'right') + o),
                Math.round(c + s) !== r && (c -= ni(n, 'top', 'bottom') + s)),
            !(function(t) {
                return t === ti(t).document.documentElement;
            })(t))
        ) {
            var l = Math.round(a + o) - e,
                u = Math.round(c + s) - r;
            1 !== Math.abs(l) && (a -= l), 1 !== Math.abs(u) && (c -= u);
        }
        return ai(i.left, i.top, a, c);
    }
    var oi =
        'undefined' != typeof SVGGraphicsElement
            ? function(t) {
                  return t instanceof ti(t).SVGGraphicsElement;
              }
            : function(t) {
                  return t instanceof ti(t).SVGElement && 'function' == typeof t.getBBox;
              };
    function si(t) {
        return $n
            ? oi(t)
                ? (function(t) {
                      var e = t.getBBox();
                      return ai(0, 0, e.width, e.height);
                  })(t)
                : ii(t)
            : ei;
    }
    function ai(t, e, r, n) {
        return {x: t, y: e, width: r, height: n};
    }
    var ci = (function() {
            function t(t) {
                (this.broadcastWidth = 0),
                    (this.broadcastHeight = 0),
                    (this.contentRect_ = ai(0, 0, 0, 0)),
                    (this.target = t);
            }
            return (
                (t.prototype.isActive = function() {
                    var t = si(this.target);
                    return (
                        (this.contentRect_ = t),
                        t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
                    );
                }),
                (t.prototype.broadcastRect = function() {
                    var t = this.contentRect_;
                    return (this.broadcastWidth = t.width), (this.broadcastHeight = t.height), t;
                }),
                t
            );
        })(),
        li = function(t, e) {
            var r,
                n,
                i,
                o,
                s,
                a,
                c,
                l =
                    ((n = (r = e).x),
                    (i = r.y),
                    (o = r.width),
                    (s = r.height),
                    (a = 'undefined' != typeof DOMRectReadOnly ? DOMRectReadOnly : Object),
                    (c = Object.create(a.prototype)),
                    Zn(c, {
                        x: n,
                        y: i,
                        width: o,
                        height: s,
                        top: i,
                        right: n + o,
                        bottom: s + i,
                        left: n,
                    }),
                    c);
            Zn(this, {target: t, contentRect: l});
        },
        ui = (function() {
            function t(t, e, r) {
                if (
                    ((this.activeObservations_ = []),
                    (this.observations_ = new qn()),
                    'function' != typeof t)
                )
                    throw new TypeError('The callback provided as parameter 1 is not a function.');
                (this.callback_ = t), (this.controller_ = e), (this.callbackCtx_ = r);
            }
            return (
                (t.prototype.observe = function(t) {
                    if (!arguments.length)
                        throw new TypeError('1 argument required, but only 0 present.');
                    if ('undefined' != typeof Element && Element instanceof Object) {
                        if (!(t instanceof ti(t).Element))
                            throw new TypeError('parameter 1 is not of type "Element".');
                        var e = this.observations_;
                        e.has(t) ||
                            (e.set(t, new ci(t)),
                            this.controller_.addObserver(this),
                            this.controller_.refresh());
                    }
                }),
                (t.prototype.unobserve = function(t) {
                    if (!arguments.length)
                        throw new TypeError('1 argument required, but only 0 present.');
                    if ('undefined' != typeof Element && Element instanceof Object) {
                        if (!(t instanceof ti(t).Element))
                            throw new TypeError('parameter 1 is not of type "Element".');
                        var e = this.observations_;
                        e.has(t) && (e.delete(t), e.size || this.controller_.removeObserver(this));
                    }
                }),
                (t.prototype.disconnect = function() {
                    this.clearActive(),
                        this.observations_.clear(),
                        this.controller_.removeObserver(this);
                }),
                (t.prototype.gatherActive = function() {
                    var t = this;
                    this.clearActive(),
                        this.observations_.forEach(function(e) {
                            e.isActive() && t.activeObservations_.push(e);
                        });
                }),
                (t.prototype.broadcastActive = function() {
                    if (this.hasActive()) {
                        var t = this.callbackCtx_,
                            e = this.activeObservations_.map(function(t) {
                                return new li(t.target, t.broadcastRect());
                            });
                        this.callback_.call(t, e, t), this.clearActive();
                    }
                }),
                (t.prototype.clearActive = function() {
                    this.activeObservations_.splice(0);
                }),
                (t.prototype.hasActive = function() {
                    return this.activeObservations_.length > 0;
                }),
                t
            );
        })(),
        fi = 'undefined' != typeof WeakMap ? new WeakMap() : new qn(),
        hi = function t(e) {
            if (!(this instanceof t)) throw new TypeError('Cannot call a class as a function.');
            if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
            var r = Jn.getInstance(),
                n = new ui(e, r, this);
            fi.set(this, n);
        };
    ['observe', 'unobserve', 'disconnect'].forEach(function(t) {
        hi.prototype[t] = function() {
            var e;
            return (e = fi.get(this))[t].apply(e, arguments);
        };
    });
    var di = void 0 !== Xn.ResizeObserver ? Xn.ResizeObserver : hi,
        pi = null,
        vi = null;
    function gi() {
        if (null === pi) {
            if ('undefined' == typeof document) return (pi = 0);
            var t = document.body,
                e = document.createElement('div');
            e.classList.add('simplebar-hide-scrollbar'), t.appendChild(e);
            var r = e.getBoundingClientRect().right;
            t.removeChild(e), (pi = r);
        }
        return pi;
    }
    Yt &&
        window.addEventListener('resize', function() {
            vi !== window.devicePixelRatio && ((vi = window.devicePixelRatio), (pi = null));
        });
    var yi = function(t) {
            return function(e, r, n, i) {
                kt(r);
                var o = Mt(e),
                    s = y(o),
                    a = st(o.length),
                    c = t ? a - 1 : 0,
                    l = t ? -1 : 1;
                if (n < 2)
                    for (;;) {
                        if (c in s) {
                            (i = s[c]), (c += l);
                            break;
                        }
                        if (((c += l), t ? c < 0 : a <= c))
                            throw TypeError('Reduce of empty array with no initial value');
                    }
                for (; t ? c >= 0 : a > c; c += l) c in s && (i = r(i, s[c], c, o));
                return i;
            };
        },
        bi = {left: yi(!1), right: yi(!0)}.left;
    At(
        {target: 'Array', proto: !0, forced: Vt('reduce')},
        {
            reduce: function(t) {
                return bi(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
            },
        }
    );
    var mi = R.f,
        xi = Function.prototype,
        Ei = xi.toString,
        wi = /^\s*function ([^ (]*)/;
    !l ||
        'name' in xi ||
        mi(xi, 'name', {
            configurable: !0,
            get: function() {
                try {
                    return Ei.call(this).match(wi)[1];
                } catch (t) {
                    return '';
                }
            },
        });
    var Oi,
        _i,
        Si = function() {
            var t = T(this),
                e = '';
            return (
                t.global && (e += 'g'),
                t.ignoreCase && (e += 'i'),
                t.multiline && (e += 'm'),
                t.dotAll && (e += 's'),
                t.unicode && (e += 'u'),
                t.sticky && (e += 'y'),
                e
            );
        },
        Ai = RegExp.prototype.exec,
        ki = String.prototype.replace,
        Li = Ai,
        Mi =
            ((Oi = /a/),
            (_i = /b*/g),
            Ai.call(Oi, 'a'),
            Ai.call(_i, 'a'),
            0 !== Oi.lastIndex || 0 !== _i.lastIndex),
        Ti = void 0 !== /()??/.exec('')[1];
    (Mi || Ti) &&
        (Li = function(t) {
            var e,
                r,
                n,
                i,
                o = this;
            return (
                Ti && (r = new RegExp('^' + o.source + '$(?!\\s)', Si.call(o))),
                Mi && (e = o.lastIndex),
                (n = Ai.call(o, t)),
                Mi && n && (o.lastIndex = o.global ? n.index + n[0].length : e),
                Ti &&
                    n &&
                    n.length > 1 &&
                    ki.call(n[0], r, function() {
                        for (i = 1; i < arguments.length - 2; i++)
                            void 0 === arguments[i] && (n[i] = void 0);
                    }),
                n
            );
        });
    var ji = Li;
    At({target: 'RegExp', proto: !0, forced: /./.exec !== ji}, {exec: ji});
    var Ri = zt('species'),
        Wi = !c(function() {
            var t = /./;
            return (
                (t.exec = function() {
                    var t = [];
                    return (t.groups = {a: '7'}), t;
                }),
                '7' !== ''.replace(t, '$<a>')
            );
        }),
        zi = !c(function() {
            var t = /(?:)/,
                e = t.exec;
            t.exec = function() {
                return e.apply(this, arguments);
            };
            var r = 'ab'.split(t);
            return 2 !== r.length || 'a' !== r[0] || 'b' !== r[1];
        }),
        Ci = function(t, e, r, n) {
            var i = zt(t),
                o = !c(function() {
                    var e = {};
                    return (
                        (e[i] = function() {
                            return 7;
                        }),
                        7 != ''[t](e)
                    );
                }),
                s =
                    o &&
                    !c(function() {
                        var e = !1,
                            r = /a/;
                        return (
                            (r.exec = function() {
                                return (e = !0), null;
                            }),
                            'split' === t &&
                                ((r.constructor = {}),
                                (r.constructor[Ri] = function() {
                                    return r;
                                })),
                            r[i](''),
                            !e
                        );
                    });
            if (!o || !s || ('replace' === t && !Wi) || ('split' === t && !zi)) {
                var a = /./[i],
                    l = r(i, ''[t], function(t, e, r, n, i) {
                        return e.exec === ji
                            ? o && !i
                                ? {done: !0, value: a.call(e, r, n)}
                                : {done: !0, value: t.call(r, e, n)}
                            : {done: !1};
                    }),
                    u = l[0],
                    f = l[1];
                J(String.prototype, t, u),
                    J(
                        RegExp.prototype,
                        i,
                        2 == e
                            ? function(t, e) {
                                  return f.call(t, this, e);
                              }
                            : function(t) {
                                  return f.call(t, this);
                              }
                    ),
                    n && W(RegExp.prototype[i], 'sham', !0);
            }
        },
        Ni = Ue.charAt,
        Ii = function(t, e, r) {
            return e + (r ? Ni(t, e).length : 1);
        },
        Di = function(t, e) {
            var r = t.exec;
            if ('function' == typeof r) {
                var n = r.call(t, e);
                if ('object' != typeof n)
                    throw TypeError(
                        'RegExp exec method returned something other than an Object or null'
                    );
                return n;
            }
            if ('RegExp' !== v(t)) throw TypeError('RegExp#exec called on incompatible receiver');
            return ji.call(t, e);
        };
    Ci('match', 1, function(t, e, r) {
        return [
            function(e) {
                var r = b(this),
                    n = null == e ? void 0 : e[t];
                return void 0 !== n ? n.call(e, r) : new RegExp(e)[t](String(r));
            },
            function(t) {
                var n = r(e, t, this);
                if (n.done) return n.value;
                var i = T(t),
                    o = String(this);
                if (!i.global) return Di(i, o);
                var s = i.unicode;
                i.lastIndex = 0;
                for (var a, c = [], l = 0; null !== (a = Di(i, o)); ) {
                    var u = String(a[0]);
                    (c[l] = u), '' === u && (i.lastIndex = Ii(o, st(i.lastIndex), s)), l++;
                }
                return 0 === l ? null : c;
            },
        ];
    });
    var Pi = Math.max,
        Vi = Math.min,
        Fi = Math.floor,
        Bi = /\$([$&'`]|\d\d?|<[^>]*>)/g,
        Hi = /\$([$&'`]|\d\d?)/g;
    Ci('replace', 2, function(t, e, r) {
        return [
            function(r, n) {
                var i = b(this),
                    o = null == r ? void 0 : r[t];
                return void 0 !== o ? o.call(r, i, n) : e.call(String(i), r, n);
            },
            function(t, i) {
                var o = r(e, t, this, i);
                if (o.done) return o.value;
                var s = T(t),
                    a = String(this),
                    c = 'function' == typeof i;
                c || (i = String(i));
                var l = s.global;
                if (l) {
                    var u = s.unicode;
                    s.lastIndex = 0;
                }
                for (var f = []; ; ) {
                    var h = Di(s, a);
                    if (null === h) break;
                    if ((f.push(h), !l)) break;
                    '' === String(h[0]) && (s.lastIndex = Ii(a, st(s.lastIndex), u));
                }
                for (var d, p = '', v = 0, g = 0; g < f.length; g++) {
                    h = f[g];
                    for (
                        var y = String(h[0]), b = Pi(Vi(it(h.index), a.length), 0), m = [], x = 1;
                        x < h.length;
                        x++
                    )
                        m.push(void 0 === (d = h[x]) ? d : String(d));
                    var E = h.groups;
                    if (c) {
                        var w = [y].concat(m, b, a);
                        void 0 !== E && w.push(E);
                        var O = String(i.apply(void 0, w));
                    } else O = n(y, a, b, m, E, i);
                    b >= v && ((p += a.slice(v, b) + O), (v = b + y.length));
                }
                return p + a.slice(v);
            },
        ];
        function n(t, r, n, i, o, s) {
            var a = n + t.length,
                c = i.length,
                l = Hi;
            return (
                void 0 !== o && ((o = Mt(o)), (l = Bi)),
                e.call(s, l, function(e, s) {
                    var l;
                    switch (s.charAt(0)) {
                        case '$':
                            return '$';
                        case '&':
                            return t;
                        case '`':
                            return r.slice(0, n);
                        case "'":
                            return r.slice(a);
                        case '<':
                            l = o[s.slice(1, -1)];
                            break;
                        default:
                            var u = +s;
                            if (0 === u) return e;
                            if (u > c) {
                                var f = Fi(u / 10);
                                return 0 === f
                                    ? e
                                    : f <= c
                                    ? void 0 === i[f - 1]
                                        ? s.charAt(1)
                                        : i[f - 1] + s.charAt(1)
                                    : e;
                            }
                            l = i[u - 1];
                    }
                    return void 0 === l ? '' : l;
                })
            );
        }
    });
    var qi = function(t) {
        return Array.prototype.reduce.call(
            t,
            function(t, e) {
                var r = e.name.match(/data-simplebar-(.+)/);
                if (r) {
                    var n = r[1].replace(/\W+(.)/g, function(t, e) {
                        return e.toUpperCase();
                    });
                    switch (e.value) {
                        case 'true':
                            t[n] = !0;
                            break;
                        case 'false':
                            t[n] = !1;
                            break;
                        case void 0:
                            t[n] = !0;
                            break;
                        default:
                            t[n] = e.value;
                    }
                }
                return t;
            },
            {}
        );
    };
    function $i(t) {
        return t && t.ownerDocument && t.ownerDocument.defaultView
            ? t.ownerDocument.defaultView
            : window;
    }
    function Xi(t) {
        return t && t.ownerDocument ? t.ownerDocument : document;
    }
    var Yi = (function() {
        function t(e, r) {
            var n = this;
            (this.onScroll = function() {
                var t = $i(n.el);
                n.scrollXTicking || (t.requestAnimationFrame(n.scrollX), (n.scrollXTicking = !0)),
                    n.scrollYTicking ||
                        (t.requestAnimationFrame(n.scrollY), (n.scrollYTicking = !0));
            }),
                (this.scrollX = function() {
                    n.axis.x.isOverflowing && (n.showScrollbar('x'), n.positionScrollbar('x')),
                        (n.scrollXTicking = !1);
                }),
                (this.scrollY = function() {
                    n.axis.y.isOverflowing && (n.showScrollbar('y'), n.positionScrollbar('y')),
                        (n.scrollYTicking = !1);
                }),
                (this.onMouseEnter = function() {
                    n.showScrollbar('x'), n.showScrollbar('y');
                }),
                (this.onMouseMove = function(t) {
                    (n.mouseX = t.clientX),
                        (n.mouseY = t.clientY),
                        (n.axis.x.isOverflowing || n.axis.x.forceVisible) &&
                            n.onMouseMoveForAxis('x'),
                        (n.axis.y.isOverflowing || n.axis.y.forceVisible) &&
                            n.onMouseMoveForAxis('y');
                }),
                (this.onMouseLeave = function() {
                    n.onMouseMove.cancel(),
                        (n.axis.x.isOverflowing || n.axis.x.forceVisible) &&
                            n.onMouseLeaveForAxis('x'),
                        (n.axis.y.isOverflowing || n.axis.y.forceVisible) &&
                            n.onMouseLeaveForAxis('y'),
                        (n.mouseX = -1),
                        (n.mouseY = -1);
                }),
                (this.onWindowResize = function() {
                    (n.scrollbarWidth = n.getScrollbarWidth()), n.hideNativeScrollbar();
                }),
                (this.hideScrollbars = function() {
                    (n.axis.x.track.rect = n.axis.x.track.el.getBoundingClientRect()),
                        (n.axis.y.track.rect = n.axis.y.track.el.getBoundingClientRect()),
                        n.isWithinBounds(n.axis.y.track.rect) ||
                            (n.axis.y.scrollbar.el.classList.remove(n.classNames.visible),
                            (n.axis.y.isVisible = !1)),
                        n.isWithinBounds(n.axis.x.track.rect) ||
                            (n.axis.x.scrollbar.el.classList.remove(n.classNames.visible),
                            (n.axis.x.isVisible = !1));
                }),
                (this.onPointerEvent = function(t) {
                    var e, r;
                    (n.axis.x.track.rect = n.axis.x.track.el.getBoundingClientRect()),
                        (n.axis.y.track.rect = n.axis.y.track.el.getBoundingClientRect()),
                        (n.axis.x.isOverflowing || n.axis.x.forceVisible) &&
                            (e = n.isWithinBounds(n.axis.x.track.rect)),
                        (n.axis.y.isOverflowing || n.axis.y.forceVisible) &&
                            (r = n.isWithinBounds(n.axis.y.track.rect)),
                        (e || r) &&
                            (t.preventDefault(),
                            t.stopPropagation(),
                            'mousedown' === t.type &&
                                (e &&
                                    ((n.axis.x.scrollbar.rect = n.axis.x.scrollbar.el.getBoundingClientRect()),
                                    n.isWithinBounds(n.axis.x.scrollbar.rect)
                                        ? n.onDragStart(t, 'x')
                                        : n.onTrackClick(t, 'x')),
                                r &&
                                    ((n.axis.y.scrollbar.rect = n.axis.y.scrollbar.el.getBoundingClientRect()),
                                    n.isWithinBounds(n.axis.y.scrollbar.rect)
                                        ? n.onDragStart(t, 'y')
                                        : n.onTrackClick(t, 'y'))));
                }),
                (this.drag = function(e) {
                    var r = n.axis[n.draggedAxis].track,
                        i = r.rect[n.axis[n.draggedAxis].sizeAttr],
                        o = n.axis[n.draggedAxis].scrollbar,
                        s = n.contentWrapperEl[n.axis[n.draggedAxis].scrollSizeAttr],
                        a = parseInt(n.elStyles[n.axis[n.draggedAxis].sizeAttr], 10);
                    e.preventDefault(), e.stopPropagation();
                    var c =
                        ((('y' === n.draggedAxis ? e.pageY : e.pageX) -
                            r.rect[n.axis[n.draggedAxis].offsetAttr] -
                            n.axis[n.draggedAxis].dragOffset) /
                            (i - o.size)) *
                        (s - a);
                    'x' === n.draggedAxis &&
                        ((c =
                            n.isRtl && t.getRtlHelpers().isRtlScrollbarInverted
                                ? c - (i + o.size)
                                : c),
                        (c = n.isRtl && t.getRtlHelpers().isRtlScrollingInverted ? -c : c)),
                        (n.contentWrapperEl[n.axis[n.draggedAxis].scrollOffsetAttr] = c);
                }),
                (this.onEndDrag = function(t) {
                    var e = Xi(n.el),
                        r = $i(n.el);
                    t.preventDefault(),
                        t.stopPropagation(),
                        n.el.classList.remove(n.classNames.dragging),
                        e.removeEventListener('mousemove', n.drag, !0),
                        e.removeEventListener('mouseup', n.onEndDrag, !0),
                        (n.removePreventClickId = r.setTimeout(function() {
                            e.removeEventListener('click', n.preventClick, !0),
                                e.removeEventListener('dblclick', n.preventClick, !0),
                                (n.removePreventClickId = null);
                        }));
                }),
                (this.preventClick = function(t) {
                    t.preventDefault(), t.stopPropagation();
                }),
                (this.el = e),
                (this.minScrollbarWidth = 20),
                (this.options = Object.assign({}, t.defaultOptions, {}, r)),
                (this.classNames = Object.assign(
                    {},
                    t.defaultOptions.classNames,
                    {},
                    this.options.classNames
                )),
                (this.axis = {
                    x: {
                        scrollOffsetAttr: 'scrollLeft',
                        sizeAttr: 'width',
                        scrollSizeAttr: 'scrollWidth',
                        offsetSizeAttr: 'offsetWidth',
                        offsetAttr: 'left',
                        overflowAttr: 'overflowX',
                        dragOffset: 0,
                        isOverflowing: !0,
                        isVisible: !1,
                        forceVisible: !1,
                        track: {},
                        scrollbar: {},
                    },
                    y: {
                        scrollOffsetAttr: 'scrollTop',
                        sizeAttr: 'height',
                        scrollSizeAttr: 'scrollHeight',
                        offsetSizeAttr: 'offsetHeight',
                        offsetAttr: 'top',
                        overflowAttr: 'overflowY',
                        dragOffset: 0,
                        isOverflowing: !0,
                        isVisible: !1,
                        forceVisible: !1,
                        track: {},
                        scrollbar: {},
                    },
                }),
                (this.removePreventClickId = null),
                t.instances.has(this.el) ||
                    ((this.recalculate = Gr(this.recalculate.bind(this), 64)),
                    (this.onMouseMove = Gr(this.onMouseMove.bind(this), 64)),
                    (this.hideScrollbars = dn(
                        this.hideScrollbars.bind(this),
                        this.options.timeout
                    )),
                    (this.onWindowResize = dn(this.onWindowResize.bind(this), 64, {leading: !0})),
                    (t.getRtlHelpers = Hn(t.getRtlHelpers)),
                    this.init());
        }
        (t.getRtlHelpers = function() {
            var e = document.createElement('div');
            e.innerHTML =
                '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
            var r = e.firstElementChild;
            document.body.appendChild(r);
            var n = r.firstElementChild;
            r.scrollLeft = 0;
            var i = t.getOffset(r),
                o = t.getOffset(n);
            r.scrollLeft = 999;
            var s = t.getOffset(n);
            return {
                isRtlScrollingInverted: i.left !== o.left && o.left - s.left != 0,
                isRtlScrollbarInverted: i.left !== o.left,
            };
        }),
            (t.getOffset = function(t) {
                var e = t.getBoundingClientRect(),
                    r = Xi(t),
                    n = $i(t);
                return {
                    top: e.top + (n.pageYOffset || r.documentElement.scrollTop),
                    left: e.left + (n.pageXOffset || r.documentElement.scrollLeft),
                };
            });
        var e = t.prototype;
        return (
            (e.init = function() {
                t.instances.set(this.el, this),
                    Yt &&
                        (this.initDOM(),
                        (this.scrollbarWidth = this.getScrollbarWidth()),
                        this.recalculate(),
                        this.initListeners());
            }),
            (e.initDOM = function() {
                var t = this;
                Xi(this.el);
                if (
                    Array.prototype.filter.call(this.el.children, function(e) {
                        return e.classList.contains(t.classNames.wrapper);
                    }).length
                )
                    (this.wrapperEl = this.el.querySelector('.' + this.classNames.wrapper)),
                        (this.contentWrapperEl =
                            this.options.scrollableNode ||
                            this.el.querySelector('.' + this.classNames.contentWrapper)),
                        (this.contentEl =
                            this.options.contentNode ||
                            this.el.querySelector('.' + this.classNames.contentEl)),
                        (this.offsetEl = this.el.querySelector('.' + this.classNames.offset)),
                        (this.maskEl = this.el.querySelector('.' + this.classNames.mask)),
                        (this.placeholderEl = this.findChild(
                            this.wrapperEl,
                            '.' + this.classNames.placeholder
                        )),
                        (this.heightAutoObserverWrapperEl = this.el.querySelector(
                            '.' + this.classNames.heightAutoObserverWrapperEl
                        )),
                        (this.heightAutoObserverEl = this.el.querySelector(
                            '.' + this.classNames.heightAutoObserverEl
                        )),
                        (this.axis.x.track.el = this.findChild(
                            this.el,
                            '.' + this.classNames.track + '.' + this.classNames.horizontal
                        )),
                        (this.axis.y.track.el = this.findChild(
                            this.el,
                            '.' + this.classNames.track + '.' + this.classNames.vertical
                        ));
                else {
                    for (
                        this.wrapperEl = document.createElement('div'),
                            this.contentWrapperEl = document.createElement('div'),
                            this.offsetEl = document.createElement('div'),
                            this.maskEl = document.createElement('div'),
                            this.contentEl = document.createElement('div'),
                            this.placeholderEl = document.createElement('div'),
                            this.heightAutoObserverWrapperEl = document.createElement('div'),
                            this.heightAutoObserverEl = document.createElement('div'),
                            this.wrapperEl.classList.add(this.classNames.wrapper),
                            this.contentWrapperEl.classList.add(this.classNames.contentWrapper),
                            this.offsetEl.classList.add(this.classNames.offset),
                            this.maskEl.classList.add(this.classNames.mask),
                            this.contentEl.classList.add(this.classNames.contentEl),
                            this.placeholderEl.classList.add(this.classNames.placeholder),
                            this.heightAutoObserverWrapperEl.classList.add(
                                this.classNames.heightAutoObserverWrapperEl
                            ),
                            this.heightAutoObserverEl.classList.add(
                                this.classNames.heightAutoObserverEl
                            );
                        this.el.firstChild;

                    )
                        this.contentEl.appendChild(this.el.firstChild);
                    this.contentWrapperEl.appendChild(this.contentEl),
                        this.offsetEl.appendChild(this.contentWrapperEl),
                        this.maskEl.appendChild(this.offsetEl),
                        this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl),
                        this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),
                        this.wrapperEl.appendChild(this.maskEl),
                        this.wrapperEl.appendChild(this.placeholderEl),
                        this.el.appendChild(this.wrapperEl);
                }
                if (!this.axis.x.track.el || !this.axis.y.track.el) {
                    var e = document.createElement('div'),
                        r = document.createElement('div');
                    e.classList.add(this.classNames.track),
                        r.classList.add(this.classNames.scrollbar),
                        e.appendChild(r),
                        (this.axis.x.track.el = e.cloneNode(!0)),
                        this.axis.x.track.el.classList.add(this.classNames.horizontal),
                        (this.axis.y.track.el = e.cloneNode(!0)),
                        this.axis.y.track.el.classList.add(this.classNames.vertical),
                        this.el.appendChild(this.axis.x.track.el),
                        this.el.appendChild(this.axis.y.track.el);
                }
                (this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector(
                    '.' + this.classNames.scrollbar
                )),
                    (this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector(
                        '.' + this.classNames.scrollbar
                    )),
                    this.options.autoHide ||
                        (this.axis.x.scrollbar.el.classList.add(this.classNames.visible),
                        this.axis.y.scrollbar.el.classList.add(this.classNames.visible)),
                    this.el.setAttribute('data-simplebar', 'init');
            }),
            (e.initListeners = function() {
                var t = this,
                    e = $i(this.el);
                this.options.autoHide && this.el.addEventListener('mouseenter', this.onMouseEnter),
                    ['mousedown', 'click', 'dblclick'].forEach(function(e) {
                        t.el.addEventListener(e, t.onPointerEvent, !0);
                    }),
                    ['touchstart', 'touchend', 'touchmove'].forEach(function(e) {
                        t.el.addEventListener(e, t.onPointerEvent, {capture: !0, passive: !0});
                    }),
                    this.el.addEventListener('mousemove', this.onMouseMove),
                    this.el.addEventListener('mouseleave', this.onMouseLeave),
                    this.contentWrapperEl.addEventListener('scroll', this.onScroll),
                    e.addEventListener('resize', this.onWindowResize);
                var r = !1,
                    n = e.ResizeObserver || di;
                (this.resizeObserver = new n(function() {
                    r && t.recalculate();
                })),
                    this.resizeObserver.observe(this.el),
                    this.resizeObserver.observe(this.contentEl),
                    e.requestAnimationFrame(function() {
                        r = !0;
                    }),
                    (this.mutationObserver = new e.MutationObserver(this.recalculate)),
                    this.mutationObserver.observe(this.contentEl, {
                        childList: !0,
                        subtree: !0,
                        characterData: !0,
                    });
            }),
            (e.recalculate = function() {
                var t = $i(this.el);
                (this.elStyles = t.getComputedStyle(this.el)),
                    (this.isRtl = 'rtl' === this.elStyles.direction);
                var e = this.heightAutoObserverEl.offsetHeight <= 1,
                    r = this.heightAutoObserverEl.offsetWidth <= 1,
                    n = this.contentEl.offsetWidth,
                    i = this.contentWrapperEl.offsetWidth,
                    o = this.elStyles.overflowX,
                    s = this.elStyles.overflowY;
                (this.contentEl.style.padding =
                    this.elStyles.paddingTop +
                    ' ' +
                    this.elStyles.paddingRight +
                    ' ' +
                    this.elStyles.paddingBottom +
                    ' ' +
                    this.elStyles.paddingLeft),
                    (this.wrapperEl.style.margin =
                        '-' +
                        this.elStyles.paddingTop +
                        ' -' +
                        this.elStyles.paddingRight +
                        ' -' +
                        this.elStyles.paddingBottom +
                        ' -' +
                        this.elStyles.paddingLeft);
                var a = this.contentEl.scrollHeight,
                    c = this.contentEl.scrollWidth;
                (this.contentWrapperEl.style.height = e ? 'auto' : '100%'),
                    (this.placeholderEl.style.width = r ? n + 'px' : 'auto'),
                    (this.placeholderEl.style.height = a + 'px');
                var l = this.contentWrapperEl.offsetHeight;
                (this.axis.x.isOverflowing = c > n),
                    (this.axis.y.isOverflowing = a > l),
                    (this.axis.x.isOverflowing = 'hidden' !== o && this.axis.x.isOverflowing),
                    (this.axis.y.isOverflowing = 'hidden' !== s && this.axis.y.isOverflowing),
                    (this.axis.x.forceVisible =
                        'x' === this.options.forceVisible || !0 === this.options.forceVisible),
                    (this.axis.y.forceVisible =
                        'y' === this.options.forceVisible || !0 === this.options.forceVisible),
                    this.hideNativeScrollbar();
                var u = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
                    f = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
                (this.axis.x.isOverflowing = this.axis.x.isOverflowing && c > i - f),
                    (this.axis.y.isOverflowing = this.axis.y.isOverflowing && a > l - u),
                    (this.axis.x.scrollbar.size = this.getScrollbarSize('x')),
                    (this.axis.y.scrollbar.size = this.getScrollbarSize('y')),
                    (this.axis.x.scrollbar.el.style.width = this.axis.x.scrollbar.size + 'px'),
                    (this.axis.y.scrollbar.el.style.height = this.axis.y.scrollbar.size + 'px'),
                    this.positionScrollbar('x'),
                    this.positionScrollbar('y'),
                    this.toggleTrackVisibility('x'),
                    this.toggleTrackVisibility('y');
            }),
            (e.getScrollbarSize = function(t) {
                if ((void 0 === t && (t = 'y'), !this.axis[t].isOverflowing)) return 0;
                var e,
                    r = this.contentEl[this.axis[t].scrollSizeAttr],
                    n = this.axis[t].track.el[this.axis[t].offsetSizeAttr],
                    i = n / r;
                return (
                    (e = Math.max(~~(i * n), this.options.scrollbarMinSize)),
                    this.options.scrollbarMaxSize &&
                        (e = Math.min(e, this.options.scrollbarMaxSize)),
                    e
                );
            }),
            (e.positionScrollbar = function(e) {
                if ((void 0 === e && (e = 'y'), this.axis[e].isOverflowing)) {
                    var r = this.contentWrapperEl[this.axis[e].scrollSizeAttr],
                        n = this.axis[e].track.el[this.axis[e].offsetSizeAttr],
                        i = parseInt(this.elStyles[this.axis[e].sizeAttr], 10),
                        o = this.axis[e].scrollbar,
                        s = this.contentWrapperEl[this.axis[e].scrollOffsetAttr],
                        a =
                            (s =
                                'x' === e && this.isRtl && t.getRtlHelpers().isRtlScrollingInverted
                                    ? -s
                                    : s) /
                            (r - i),
                        c = ~~((n - o.size) * a);
                    (c =
                        'x' === e && this.isRtl && t.getRtlHelpers().isRtlScrollbarInverted
                            ? c + (n - o.size)
                            : c),
                        (o.el.style.transform =
                            'x' === e
                                ? 'translate3d(' + c + 'px, 0, 0)'
                                : 'translate3d(0, ' + c + 'px, 0)');
                }
            }),
            (e.toggleTrackVisibility = function(t) {
                void 0 === t && (t = 'y');
                var e = this.axis[t].track.el,
                    r = this.axis[t].scrollbar.el;
                this.axis[t].isOverflowing || this.axis[t].forceVisible
                    ? ((e.style.visibility = 'visible'),
                      (this.contentWrapperEl.style[this.axis[t].overflowAttr] = 'scroll'))
                    : ((e.style.visibility = 'hidden'),
                      (this.contentWrapperEl.style[this.axis[t].overflowAttr] = 'hidden')),
                    this.axis[t].isOverflowing
                        ? (r.style.display = 'block')
                        : (r.style.display = 'none');
            }),
            (e.hideNativeScrollbar = function() {
                (this.offsetEl.style[this.isRtl ? 'left' : 'right'] =
                    this.axis.y.isOverflowing || this.axis.y.forceVisible
                        ? '-' + this.scrollbarWidth + 'px'
                        : 0),
                    (this.offsetEl.style.bottom =
                        this.axis.x.isOverflowing || this.axis.x.forceVisible
                            ? '-' + this.scrollbarWidth + 'px'
                            : 0);
            }),
            (e.onMouseMoveForAxis = function(t) {
                void 0 === t && (t = 'y'),
                    (this.axis[t].track.rect = this.axis[t].track.el.getBoundingClientRect()),
                    (this.axis[t].scrollbar.rect = this.axis[
                        t
                    ].scrollbar.el.getBoundingClientRect()),
                    this.isWithinBounds(this.axis[t].scrollbar.rect)
                        ? this.axis[t].scrollbar.el.classList.add(this.classNames.hover)
                        : this.axis[t].scrollbar.el.classList.remove(this.classNames.hover),
                    this.isWithinBounds(this.axis[t].track.rect)
                        ? (this.showScrollbar(t),
                          this.axis[t].track.el.classList.add(this.classNames.hover))
                        : this.axis[t].track.el.classList.remove(this.classNames.hover);
            }),
            (e.onMouseLeaveForAxis = function(t) {
                void 0 === t && (t = 'y'),
                    this.axis[t].track.el.classList.remove(this.classNames.hover),
                    this.axis[t].scrollbar.el.classList.remove(this.classNames.hover);
            }),
            (e.showScrollbar = function(t) {
                void 0 === t && (t = 'y');
                var e = this.axis[t].scrollbar.el;
                this.axis[t].isVisible ||
                    (e.classList.add(this.classNames.visible), (this.axis[t].isVisible = !0)),
                    this.options.autoHide && this.hideScrollbars();
            }),
            (e.onDragStart = function(t, e) {
                void 0 === e && (e = 'y');
                var r = Xi(this.el),
                    n = $i(this.el),
                    i = this.axis[e].scrollbar,
                    o = 'y' === e ? t.pageY : t.pageX;
                (this.axis[e].dragOffset = o - i.rect[this.axis[e].offsetAttr]),
                    (this.draggedAxis = e),
                    this.el.classList.add(this.classNames.dragging),
                    r.addEventListener('mousemove', this.drag, !0),
                    r.addEventListener('mouseup', this.onEndDrag, !0),
                    null === this.removePreventClickId
                        ? (r.addEventListener('click', this.preventClick, !0),
                          r.addEventListener('dblclick', this.preventClick, !0))
                        : (n.clearTimeout(this.removePreventClickId),
                          (this.removePreventClickId = null));
            }),
            (e.onTrackClick = function(t, e) {
                var r = this;
                if ((void 0 === e && (e = 'y'), this.options.clickOnTrack)) {
                    var n = $i(this.el);
                    this.axis[e].scrollbar.rect = this.axis[e].scrollbar.el.getBoundingClientRect();
                    var i = this.axis[e].scrollbar.rect[this.axis[e].offsetAttr],
                        o = parseInt(this.elStyles[this.axis[e].sizeAttr], 10),
                        s = this.contentWrapperEl[this.axis[e].scrollOffsetAttr],
                        a = ('y' === e ? this.mouseY - i : this.mouseX - i) < 0 ? -1 : 1,
                        c = -1 === a ? s - o : s + o;
                    !(function t() {
                        var i, o;
                        -1 === a
                            ? s > c &&
                              ((s -= 40),
                              r.contentWrapperEl.scrollTo(
                                  (((i = {})[r.axis[e].offsetAttr] = s), i)
                              ),
                              n.requestAnimationFrame(t))
                            : s < c &&
                              ((s += 40),
                              r.contentWrapperEl.scrollTo(
                                  (((o = {})[r.axis[e].offsetAttr] = s), o)
                              ),
                              n.requestAnimationFrame(t));
                    })();
                }
            }),
            (e.getContentElement = function() {
                return this.contentEl;
            }),
            (e.getScrollElement = function() {
                return this.contentWrapperEl;
            }),
            (e.getScrollbarWidth = function() {
                try {
                    return 'none' ===
                        getComputedStyle(this.contentWrapperEl, '::-webkit-scrollbar').display ||
                        'scrollbarWidth' in document.documentElement.style ||
                        '-ms-overflow-style' in document.documentElement.style
                        ? 0
                        : gi();
                } catch (t) {
                    return gi();
                }
            }),
            (e.removeListeners = function() {
                var t = this,
                    e = $i(this.el);
                this.options.autoHide &&
                    this.el.removeEventListener('mouseenter', this.onMouseEnter),
                    ['mousedown', 'click', 'dblclick'].forEach(function(e) {
                        t.el.removeEventListener(e, t.onPointerEvent, !0);
                    }),
                    ['touchstart', 'touchend', 'touchmove'].forEach(function(e) {
                        t.el.removeEventListener(e, t.onPointerEvent, {capture: !0, passive: !0});
                    }),
                    this.el.removeEventListener('mousemove', this.onMouseMove),
                    this.el.removeEventListener('mouseleave', this.onMouseLeave),
                    this.contentWrapperEl.removeEventListener('scroll', this.onScroll),
                    e.removeEventListener('resize', this.onWindowResize),
                    this.mutationObserver.disconnect(),
                    this.resizeObserver.disconnect(),
                    this.recalculate.cancel(),
                    this.onMouseMove.cancel(),
                    this.hideScrollbars.cancel(),
                    this.onWindowResize.cancel();
            }),
            (e.unMount = function() {
                this.removeListeners(), t.instances.delete(this.el);
            }),
            (e.isWithinBounds = function(t) {
                return (
                    this.mouseX >= t.left &&
                    this.mouseX <= t.left + t.width &&
                    this.mouseY >= t.top &&
                    this.mouseY <= t.top + t.height
                );
            }),
            (e.findChild = function(t, e) {
                var r =
                    t.matches ||
                    t.webkitMatchesSelector ||
                    t.mozMatchesSelector ||
                    t.msMatchesSelector;
                return Array.prototype.filter.call(t.children, function(t) {
                    return r.call(t, e);
                })[0];
            }),
            t
        );
    })();
    return (
        (Yi.defaultOptions = {
            autoHide: !0,
            forceVisible: !1,
            clickOnTrack: !0,
            classNames: {
                contentEl: 'simplebar-content',
                contentWrapper: 'simplebar-content-wrapper',
                offset: 'simplebar-offset',
                mask: 'simplebar-mask',
                wrapper: 'simplebar-wrapper',
                placeholder: 'simplebar-placeholder',
                scrollbar: 'simplebar-scrollbar',
                track: 'simplebar-track',
                heightAutoObserverWrapperEl: 'simplebar-height-auto-observer-wrapper',
                heightAutoObserverEl: 'simplebar-height-auto-observer',
                visible: 'simplebar-visible',
                horizontal: 'simplebar-horizontal',
                vertical: 'simplebar-vertical',
                hover: 'simplebar-hover',
                dragging: 'simplebar-dragging',
            },
            scrollbarMinSize: 25,
            scrollbarMaxSize: 0,
            timeout: 1e3,
        }),
        (Yi.instances = new WeakMap()),
        (Yi.initDOMLoadedElements = function() {
            document.removeEventListener('DOMContentLoaded', this.initDOMLoadedElements),
                window.removeEventListener('load', this.initDOMLoadedElements),
                Array.prototype.forEach.call(
                    document.querySelectorAll('[data-simplebar]:not([data-simplebar="init"])'),
                    function(t) {
                        Yi.instances.has(t) || new Yi(t, qi(t.attributes));
                    }
                );
        }),
        (Yi.removeObserver = function() {
            this.globalObserver.disconnect();
        }),
        (Yi.initHtmlApi = function() {
            (this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this)),
                'undefined' != typeof MutationObserver &&
                    ((this.globalObserver = new MutationObserver(Yi.handleMutations)),
                    this.globalObserver.observe(document, {childList: !0, subtree: !0})),
                'complete' === document.readyState ||
                ('loading' !== document.readyState && !document.documentElement.doScroll)
                    ? window.setTimeout(this.initDOMLoadedElements)
                    : (document.addEventListener('DOMContentLoaded', this.initDOMLoadedElements),
                      window.addEventListener('load', this.initDOMLoadedElements));
        }),
        (Yi.handleMutations = function(t) {
            t.forEach(function(t) {
                Array.prototype.forEach.call(t.addedNodes, function(t) {
                    1 === t.nodeType &&
                        (t.hasAttribute('data-simplebar')
                            ? !Yi.instances.has(t) && new Yi(t, qi(t.attributes))
                            : Array.prototype.forEach.call(
                                  t.querySelectorAll(
                                      '[data-simplebar]:not([data-simplebar="init"])'
                                  ),
                                  function(t) {
                                      !Yi.instances.has(t) && new Yi(t, qi(t.attributes));
                                  }
                              ));
                }),
                    Array.prototype.forEach.call(t.removedNodes, function(t) {
                        1 === t.nodeType &&
                            (t.hasAttribute('[data-simplebar="init"]')
                                ? Yi.instances.has(t) && Yi.instances.get(t).unMount()
                                : Array.prototype.forEach.call(
                                      t.querySelectorAll('[data-simplebar="init"]'),
                                      function(t) {
                                          Yi.instances.has(t) && Yi.instances.get(t).unMount();
                                      }
                                  ));
                    });
            });
        }),
        (Yi.getOptions = qi),
        Yt && Yi.initHtmlApi(),
        Yi
    );
});
