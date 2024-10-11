(function () {
  const noop = () => {};
  let t = {};
  let e = {};
  let a = null;
  let n = { mark: noop, measure: noop };
  try {
    typeof window !== "undefined" && (t = window);
    typeof document !== "undefined" && (e = document);
    typeof MutationObserver !== "undefined" && (a = MutationObserver);
    typeof performance !== "undefined" && (n = performance);
  } catch (t) {}
  const { userAgent: o = "" } = t.navigator || {};
  const r = t;
  const i = e;
  const s = a;
  const c = n;
  const l = !!r.document;
  const f =
    !!i.documentElement &&
    !!i.head &&
    typeof i.addEventListener === "function" &&
    typeof i.createElement === "function";
  const u = ~o.indexOf("MSIE") || ~o.indexOf("Trident/");
  var m = "classic",
    d = "duotone",
    p = "sharp",
    g = "sharp-duotone",
    h = [m, d, p, g];
  var b = {
    classic: { 900: "fas", 400: "far", normal: "far", 300: "fal", 100: "fat" },
    sharp: { 900: "fass", 400: "fasr", 300: "fasl", 100: "fast" },
    "sharp-duotone": { 900: "fasds" },
  };
  var y = {
      kit: { fak: "kit", "fa-kit": "kit" },
      "kit-duotone": { fakd: "kit-duotone", "fa-kit-duotone": "kit-duotone" },
    },
    v = ["kit"];
  var x = /fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,
    k =
      /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i;
  var A = {
    "Font Awesome 5 Free": { 900: "fas", 400: "far" },
    "Font Awesome 5 Pro": { 900: "fas", 400: "far", normal: "far", 300: "fal" },
    "Font Awesome 5 Brands": { 400: "fab", normal: "fab" },
    "Font Awesome 5 Duotone": { 900: "fad" },
  };
  var w = {
      "Font Awesome 6 Free": { 900: "fas", 400: "far" },
      "Font Awesome 6 Pro": {
        900: "fas",
        400: "far",
        normal: "far",
        300: "fal",
        100: "fat",
      },
      "Font Awesome 6 Brands": { 400: "fab", normal: "fab" },
      "Font Awesome 6 Duotone": { 900: "fad" },
      "Font Awesome 6 Sharp": {
        900: "fass",
        400: "fasr",
        normal: "fasr",
        300: "fasl",
        100: "fast",
      },
      "Font Awesome 6 Sharp Duotone": { 900: "fasds" },
    },
    P = {
      classic: {
        "fa-brands": "fab",
        "fa-duotone": "fad",
        "fa-light": "fal",
        "fa-regular": "far",
        "fa-solid": "fas",
        "fa-thin": "fat",
      },
      sharp: {
        "fa-solid": "fass",
        "fa-regular": "fasr",
        "fa-light": "fasl",
        "fa-thin": "fast",
      },
      "sharp-duotone": { "fa-solid": "fasds" },
    },
    C = {
      classic: ["fas", "far", "fal", "fat"],
      sharp: ["fass", "fasr", "fasl", "fast"],
      "sharp-duotone": ["fasds"],
    },
    N = {
      classic: {
        fab: "fa-brands",
        fad: "fa-duotone",
        fal: "fa-light",
        far: "fa-regular",
        fas: "fa-solid",
        fat: "fa-thin",
      },
      sharp: {
        fass: "fa-solid",
        fasr: "fa-regular",
        fasl: "fa-light",
        fast: "fa-thin",
      },
      "sharp-duotone": { fasds: "fa-solid" },
    },
    O = {
      classic: {
        solid: "fas",
        regular: "far",
        light: "fal",
        thin: "fat",
        duotone: "fad",
        brands: "fab",
      },
      sharp: { solid: "fass", regular: "fasr", light: "fasl", thin: "fast" },
      "sharp-duotone": { solid: "fasds" },
    },
    S = {
      classic: {
        fa: "solid",
        fas: "solid",
        "fa-solid": "solid",
        far: "regular",
        "fa-regular": "regular",
        fal: "light",
        "fa-light": "light",
        fat: "thin",
        "fa-thin": "thin",
        fad: "duotone",
        "fa-duotone": "duotone",
        fab: "brands",
        "fa-brands": "brands",
      },
      sharp: {
        fa: "solid",
        fass: "solid",
        "fa-solid": "solid",
        fasr: "regular",
        "fa-regular": "regular",
        fasl: "light",
        "fa-light": "light",
        fast: "thin",
        "fa-thin": "thin",
      },
      "sharp-duotone": { fa: "solid", fasds: "solid", "fa-solid": "solid" },
    },
    I = ["solid", "regular", "light", "thin", "duotone", "brands"],
    M = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    E = M.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
    j = {
      GROUP: "duotone-group",
      SWAP_OPACITY: "swap-opacity",
      PRIMARY: "primary",
      SECONDARY: "secondary",
    },
    F = [
      ...Object.keys(C),
      ...I,
      "2xs",
      "xs",
      "sm",
      "lg",
      "xl",
      "2xl",
      "beat",
      "border",
      "fade",
      "beat-fade",
      "bounce",
      "flip-both",
      "flip-horizontal",
      "flip-vertical",
      "flip",
      "fw",
      "inverse",
      "layers-counter",
      "layers-text",
      "layers",
      "li",
      "pull-left",
      "pull-right",
      "pulse",
      "rotate-180",
      "rotate-270",
      "rotate-90",
      "rotate-by",
      "shake",
      "spin-pulse",
      "spin-reverse",
      "spin",
      "stack-1x",
      "stack-2x",
      "stack",
      "ul",
      j.GROUP,
      j.SWAP_OPACITY,
      j.PRIMARY,
      j.SECONDARY,
    ]
      .concat(M.map((t) => "".concat(t, "x")))
      .concat(E.map((t) => "w-".concat(t)));
  var z = {
      "Font Awesome Kit": { 400: "fak", normal: "fak" },
      "Font Awesome Kit Duotone": { 400: "fakd", normal: "fakd" },
    },
    L = {
      kit: { "fa-kit": "fak" },
      "kit-duotone": { "fa-kit-duotone": "fakd" },
    },
    D = { kit: { fak: "fa-kit" }, "kit-duotone": { fakd: "fa-kit-duotone" } },
    R = { kit: { kit: "fak" }, "kit-duotone": { "kit-duotone": "fakd" } };
  const T = "___FONT_AWESOME___";
  const H = 16;
  const U = "fa";
  const Y = "svg-inline--fa";
  const V = "data-fa-i2svg";
  const W = "data-fa-pseudo-element";
  const B = "data-fa-pseudo-element-pending";
  const q = "data-prefix";
  const _ = "data-icon";
  const G = "fontawesome-i2svg";
  const X = "async";
  const K = ["HTML", "HEAD", "STYLE", "SCRIPT"];
  const J = (() => {
    try {
      return true;
    } catch (t) {
      return false;
    }
  })();
  const Q = [m, p, g];
  function familyProxy(t) {
    return new Proxy(t, {
      get(t, e) {
        return e in t ? t[e] : t[m];
      },
    });
  }
  const Z = { ...S };
  Z[m] = { ...S[m], ...y.kit, ...y["kit-duotone"] };
  const $ = familyProxy(Z);
  const tt = { ...O };
  tt[m] = { ...tt[m], ...R.kit, ...R["kit-duotone"] };
  const et = familyProxy(tt);
  const at = { ...N };
  at[m] = { ...at[m], ...D.kit };
  const nt = familyProxy(at);
  const ot = { ...P };
  ot[m] = { ...ot[m], ...L.kit };
  const rt = familyProxy(ot);
  const it = x;
  const st = "fa-layers-text";
  const ct = k;
  const lt = { ...b };
  familyProxy(lt);
  const ft = [
    "class",
    "data-prefix",
    "data-icon",
    "data-fa-transform",
    "data-fa-mask",
  ];
  const ut = j;
  const mt = new Set();
  Object.keys(et[m]).map(mt.add.bind(mt));
  Object.keys(et[p]).map(mt.add.bind(mt));
  Object.keys(et[g]).map(mt.add.bind(mt));
  const dt = [...v, ...F];
  const pt = r.FontAwesomeConfig || {};
  function getAttrConfig(t) {
    var e = i.querySelector("script[" + t + "]");
    if (e) return e.getAttribute(t);
  }
  function coerce(t) {
    return t === "" || (t !== "false" && (t === "true" || t));
  }
  if (i && typeof i.querySelector === "function") {
    const t = [
      ["data-family-prefix", "familyPrefix"],
      ["data-css-prefix", "cssPrefix"],
      ["data-family-default", "familyDefault"],
      ["data-style-default", "styleDefault"],
      ["data-replacement-class", "replacementClass"],
      ["data-auto-replace-svg", "autoReplaceSvg"],
      ["data-auto-add-css", "autoAddCss"],
      ["data-auto-a11y", "autoA11y"],
      ["data-search-pseudo-elements", "searchPseudoElements"],
      ["data-observe-mutations", "observeMutations"],
      ["data-mutate-approach", "mutateApproach"],
      ["data-keep-original-source", "keepOriginalSource"],
      ["data-measure-performance", "measurePerformance"],
      ["data-show-missing-icons", "showMissingIcons"],
    ];
    t.forEach((t) => {
      let [e, a] = t;
      const n = coerce(getAttrConfig(e));
      n !== void 0 && n !== null && (pt[a] = n);
    });
  }
  const gt = {
    styleDefault: "solid",
    familyDefault: "classic",
    cssPrefix: U,
    replacementClass: Y,
    autoReplaceSvg: true,
    autoAddCss: true,
    autoA11y: true,
    searchPseudoElements: false,
    observeMutations: true,
    mutateApproach: "async",
    keepOriginalSource: true,
    measurePerformance: false,
    showMissingIcons: true,
  };
  pt.familyPrefix && (pt.cssPrefix = pt.familyPrefix);
  const ht = { ...gt, ...pt };
  ht.autoReplaceSvg || (ht.observeMutations = false);
  const bt = {};
  Object.keys(gt).forEach((t) => {
    Object.defineProperty(bt, t, {
      enumerable: true,
      set: function (e) {
        ht[t] = e;
        yt.forEach((t) => t(bt));
      },
      get: function () {
        return ht[t];
      },
    });
  });
  Object.defineProperty(bt, "familyPrefix", {
    enumerable: true,
    set: function (t) {
      ht.cssPrefix = t;
      yt.forEach((t) => t(bt));
    },
    get: function () {
      return ht.cssPrefix;
    },
  });
  r.FontAwesomeConfig = bt;
  const yt = [];
  function onChange(t) {
    yt.push(t);
    return () => {
      yt.splice(yt.indexOf(t), 1);
    };
  }
  const vt = H;
  const xt = { size: 16, x: 0, y: 0, rotate: 0, flipX: false, flipY: false };
  function bunker(t) {
    try {
      for (
        var e = arguments.length, a = new Array(e > 1 ? e - 1 : 0), n = 1;
        n < e;
        n++
      )
        a[n - 1] = arguments[n];
      t(...a);
    } catch (t) {
      if (!J) throw t;
    }
  }
  function insertCss(t) {
    if (!t || !f) return;
    const e = i.createElement("style");
    e.setAttribute("type", "text/css");
    e.innerHTML = t;
    const a = i.head.childNodes;
    let n = null;
    for (let t = a.length - 1; t > -1; t--) {
      const e = a[t];
      const o = (e.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(o) > -1 && (n = e);
    }
    i.head.insertBefore(e, n);
    return t;
  }
  const kt = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  function nextUniqueId() {
    let t = 12;
    let e = "";
    while (t-- > 0) e += kt[(Math.random() * 62) | 0];
    return e;
  }
  function toArray(t) {
    const e = [];
    for (let a = (t || []).length >>> 0; a--; ) e[a] = t[a];
    return e;
  }
  function classArray(t) {
    return t.classList
      ? toArray(t.classList)
      : (t.getAttribute("class") || "").split(" ").filter((t) => t);
  }
  function htmlEscape(t) {
    return ""
      .concat(t)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }
  function joinAttributes(t) {
    return Object.keys(t || {})
      .reduce(
        (e, a) => e + "".concat(a, '="').concat(htmlEscape(t[a]), '" '),
        "",
      )
      .trim();
  }
  function joinStyles(t) {
    return Object.keys(t || {}).reduce(
      (e, a) => e + "".concat(a, ": ").concat(t[a].trim(), ";"),
      "",
    );
  }
  function transformIsMeaningful(t) {
    return (
      t.size !== xt.size ||
      t.x !== xt.x ||
      t.y !== xt.y ||
      t.rotate !== xt.rotate ||
      t.flipX ||
      t.flipY
    );
  }
  function transformForSvg(t) {
    let { transform: e, containerWidth: a, iconWidth: n } = t;
    const o = { transform: "translate(".concat(a / 2, " 256)") };
    const r = "translate(".concat(e.x * 32, ", ").concat(e.y * 32, ") ");
    const i = "scale("
      .concat((e.size / 16) * (e.flipX ? -1 : 1), ", ")
      .concat((e.size / 16) * (e.flipY ? -1 : 1), ") ");
    const s = "rotate(".concat(e.rotate, " 0 0)");
    const c = { transform: "".concat(r, " ").concat(i, " ").concat(s) };
    const l = { transform: "translate(".concat((n / 2) * -1, " -256)") };
    return { outer: o, inner: c, path: l };
  }
  function transformForCss(t) {
    let {
      transform: e,
      width: a = H,
      height: n = H,
      startCentered: o = false,
    } = t;
    let r = "";
    r +=
      o && u
        ? "translate("
            .concat(e.x / vt - a / 2, "em, ")
            .concat(e.y / vt - n / 2, "em) ")
        : o
          ? "translate(calc(-50% + "
              .concat(e.x / vt, "em), calc(-50% + ")
              .concat(e.y / vt, "em)) ")
          : "translate(".concat(e.x / vt, "em, ").concat(e.y / vt, "em) ");
    r += "scale("
      .concat((e.size / vt) * (e.flipX ? -1 : 1), ", ")
      .concat((e.size / vt) * (e.flipY ? -1 : 1), ") ");
    r += "rotate(".concat(e.rotate, "deg) ");
    return r;
  }
  var At =
    ':host,:root{--fa-font-solid:normal 900 1em/1 "Font Awesome 6 Free";--fa-font-regular:normal 400 1em/1 "Font Awesome 6 Free";--fa-font-light:normal 300 1em/1 "Font Awesome 6 Pro";--fa-font-thin:normal 100 1em/1 "Font Awesome 6 Pro";--fa-font-duotone:normal 900 1em/1 "Font Awesome 6 Duotone";--fa-font-brands:normal 400 1em/1 "Font Awesome 6 Brands";--fa-font-sharp-solid:normal 900 1em/1 "Font Awesome 6 Sharp";--fa-font-sharp-regular:normal 400 1em/1 "Font Awesome 6 Sharp";--fa-font-sharp-light:normal 300 1em/1 "Font Awesome 6 Sharp";--fa-font-sharp-thin:normal 100 1em/1 "Font Awesome 6 Sharp";--fa-font-sharp-duotone-solid:normal 900 1em/1 "Font Awesome 6 Sharp Duotone"}svg:not(:host).svg-inline--fa,svg:not(:root).svg-inline--fa{overflow:visible;box-sizing:content-box}.svg-inline--fa{display:var(--fa-display,inline-block);height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-2xs{vertical-align:.1em}.svg-inline--fa.fa-xs{vertical-align:0}.svg-inline--fa.fa-sm{vertical-align:-.0714285705em}.svg-inline--fa.fa-lg{vertical-align:-.2em}.svg-inline--fa.fa-xl{vertical-align:-.25em}.svg-inline--fa.fa-2xl{vertical-align:-.3125em}.svg-inline--fa.fa-pull-left{margin-right:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-pull-right{margin-left:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-li{width:var(--fa-li-width,2em);top:.25em}.svg-inline--fa.fa-fw{width:var(--fa-fw-width,1.25em)}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{transform-origin:center center}.fa-layers-text{left:50%;top:50%;transform:translate(-50%,-50%);transform-origin:center center}.fa-layers-counter{background-color:var(--fa-counter-background-color,#ff253a);border-radius:var(--fa-counter-border-radius,1em);box-sizing:border-box;color:var(--fa-inverse,#fff);line-height:var(--fa-counter-line-height,1);max-width:var(--fa-counter-max-width,5em);min-width:var(--fa-counter-min-width,1.5em);overflow:hidden;padding:var(--fa-counter-padding,.25em .5em);right:var(--fa-right,0);text-overflow:ellipsis;top:var(--fa-top,0);transform:scale(var(--fa-counter-scale,.25));transform-origin:top right}.fa-layers-bottom-right{bottom:var(--fa-bottom,0);right:var(--fa-right,0);top:auto;transform:scale(var(--fa-layers-scale,.25));transform-origin:bottom right}.fa-layers-bottom-left{bottom:var(--fa-bottom,0);left:var(--fa-left,0);right:auto;top:auto;transform:scale(var(--fa-layers-scale,.25));transform-origin:bottom left}.fa-layers-top-right{top:var(--fa-top,0);right:var(--fa-right,0);transform:scale(var(--fa-layers-scale,.25));transform-origin:top right}.fa-layers-top-left{left:var(--fa-left,0);right:auto;top:var(--fa-top,0);transform:scale(var(--fa-layers-scale,.25));transform-origin:top left}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-2xs{font-size:.625em;line-height:.1em;vertical-align:.225em}.fa-xs{font-size:.75em;line-height:.0833333337em;vertical-align:.125em}.fa-sm{font-size:.875em;line-height:.0714285718em;vertical-align:.0535714295em}.fa-lg{font-size:1.25em;line-height:.05em;vertical-align:-.075em}.fa-xl{font-size:1.5em;line-height:.0416666682em;vertical-align:-.125em}.fa-2xl{font-size:2em;line-height:.03125em;vertical-align:-.1875em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:var(--fa-li-margin,2.5em);padding-left:0}.fa-ul>li{position:relative}.fa-li{left:calc(-1 * var(--fa-li-width,2em));position:absolute;text-align:center;width:var(--fa-li-width,2em);line-height:inherit}.fa-border{border-color:var(--fa-border-color,#eee);border-radius:var(--fa-border-radius,.1em);border-style:var(--fa-border-style,solid);border-width:var(--fa-border-width,.08em);padding:var(--fa-border-padding,.2em .25em .15em)}.fa-pull-left{float:left;margin-right:var(--fa-pull-margin,.3em)}.fa-pull-right{float:right;margin-left:var(--fa-pull-margin,.3em)}.fa-beat{animation-name:fa-beat;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-bounce{animation-name:fa-bounce;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1))}.fa-fade{animation-name:fa-fade;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-beat-fade{animation-name:fa-beat-fade;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-flip{animation-name:fa-flip;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-shake{animation-name:fa-shake;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin{animation-name:fa-spin;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,2s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin-reverse{--fa-animation-direction:reverse}.fa-pulse,.fa-spin-pulse{animation-name:fa-spin;animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,steps(8))}@media (prefers-reduced-motion:reduce){.fa-beat,.fa-beat-fade,.fa-bounce,.fa-fade,.fa-flip,.fa-pulse,.fa-shake,.fa-spin,.fa-spin-pulse{animation-delay:-1ms;animation-duration:1ms;animation-iteration-count:1;transition-delay:0s;transition-duration:0s}}@keyframes fa-beat{0%,90%{transform:scale(1)}45%{transform:scale(var(--fa-beat-scale,1.25))}}@keyframes fa-bounce{0%{transform:scale(1,1) translateY(0)}10%{transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em))}64%{transform:scale(1,1) translateY(0)}100%{transform:scale(1,1) translateY(0)}}@keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@keyframes fa-beat-fade{0%,100%{opacity:var(--fa-beat-fade-opacity,.4);transform:scale(1)}50%{opacity:1;transform:scale(var(--fa-beat-fade-scale,1.125))}}@keyframes fa-flip{50%{transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@keyframes fa-shake{0%{transform:rotate(-15deg)}4%{transform:rotate(15deg)}24%,8%{transform:rotate(-18deg)}12%,28%{transform:rotate(18deg)}16%{transform:rotate(-22deg)}20%{transform:rotate(22deg)}32%{transform:rotate(-12deg)}36%{transform:rotate(12deg)}100%,40%{transform:rotate(0)}}@keyframes fa-spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fa-rotate-90{transform:rotate(90deg)}.fa-rotate-180{transform:rotate(180deg)}.fa-rotate-270{transform:rotate(270deg)}.fa-flip-horizontal{transform:scale(-1,1)}.fa-flip-vertical{transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{transform:scale(-1,-1)}.fa-rotate-by{transform:rotate(var(--fa-rotate-angle,0))}.fa-stack{display:inline-block;vertical-align:middle;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;z-index:var(--fa-stack-z-index,auto)}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:var(--fa-inverse,#fff)}.fa-sr-only,.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.fa-sr-only-focusable:not(:focus),.sr-only-focusable:not(:focus){position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color,currentColor);opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color,currentColor);opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fa-duotone.fa-inverse,.fad.fa-inverse{color:var(--fa-inverse,#fff)}';
  function css() {
    const t = U;
    const e = Y;
    const a = bt.cssPrefix;
    const n = bt.replacementClass;
    let o = At;
    if (a !== t || n !== e) {
      const r = new RegExp("\\.".concat(t, "\\-"), "g");
      const i = new RegExp("\\--".concat(t, "\\-"), "g");
      const s = new RegExp("\\.".concat(e), "g");
      o = o
        .replace(r, ".".concat(a, "-"))
        .replace(i, "--".concat(a, "-"))
        .replace(s, ".".concat(n));
    }
    return o;
  }
  let wt = false;
  function ensureCss() {
    if (bt.autoAddCss && !wt) {
      insertCss(css());
      wt = true;
    }
  }
  var Pt = {
    mixout() {
      return { dom: { css: css, insertCss: ensureCss } };
    },
    hooks() {
      return {
        beforeDOMElementCreation() {
          ensureCss();
        },
        beforeI2svg() {
          ensureCss();
        },
      };
    },
  };
  const Ct = r || {};
  Ct[T] || (Ct[T] = {});
  Ct[T].styles || (Ct[T].styles = {});
  Ct[T].hooks || (Ct[T].hooks = {});
  Ct[T].shims || (Ct[T].shims = []);
  var Nt = Ct[T];
  const Ot = [];
  const listener = function () {
    i.removeEventListener("DOMContentLoaded", listener);
    St = 1;
    Ot.map((t) => t());
  };
  let St = false;
  if (f) {
    St = (i.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
      i.readyState,
    );
    St || i.addEventListener("DOMContentLoaded", listener);
  }
  function domready(t) {
    f && (St ? setTimeout(t, 0) : Ot.push(t));
  }
  function toHtml(t) {
    const { tag: e, attributes: a = {}, children: n = [] } = t;
    return typeof t === "string"
      ? htmlEscape(t)
      : "<"
          .concat(e, " ")
          .concat(joinAttributes(a), ">")
          .concat(n.map(toHtml).join(""), "</")
          .concat(e, ">");
  }
  function iconFromMapping(t, e, a) {
    if (t && t[e] && t[e][a]) return { prefix: e, iconName: a, icon: t[e][a] };
  }
  var It = function bindInternal4(t, e) {
    return function (a, n, o, r) {
      return t.call(e, a, n, o, r);
    };
  };
  /**
   * # Reduce
   *
   * A fast object `.reduce()` implementation.
   *
   * @param  {Object}   subject      The object to reduce over.
   * @param  {Function} fn           The reducer function.
   * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
   * @param  {Object}   thisContext  The context for the reducer.
   * @return {mixed}                 The final result.
   */ var Mt = function fastReduceObject(t, e, a, n) {
    var o,
      r,
      i,
      s = Object.keys(t),
      c = s.length,
      l = n !== void 0 ? It(e, n) : e;
    if (a === void 0) {
      o = 1;
      i = t[s[0]];
    } else {
      o = 0;
      i = a;
    }
    for (; o < c; o++) {
      r = s[o];
      i = l(i, t[r], r, t);
    }
    return i;
  };
  function ucs2decode(t) {
    const e = [];
    let a = 0;
    const n = t.length;
    while (a < n) {
      const o = t.charCodeAt(a++);
      if (o >= 55296 && o <= 56319 && a < n) {
        const n = t.charCodeAt(a++);
        if ((n & 64512) == 56320)
          e.push(((o & 1023) << 10) + (n & 1023) + 65536);
        else {
          e.push(o);
          a--;
        }
      } else e.push(o);
    }
    return e;
  }
  function toHex(t) {
    const e = ucs2decode(t);
    return e.length === 1 ? e[0].toString(16) : null;
  }
  function codePointAt(t, e) {
    const a = t.length;
    let n = t.charCodeAt(e);
    let o;
    if (n >= 55296 && n <= 56319 && a > e + 1) {
      o = t.charCodeAt(e + 1);
      if (o >= 56320 && o <= 57343)
        return 1024 * (n - 55296) + o - 56320 + 65536;
    }
    return n;
  }
  function normalizeIcons(t) {
    return Object.keys(t).reduce((e, a) => {
      const n = t[a];
      const o = !!n.icon;
      o ? (e[n.iconName] = n.icon) : (e[a] = n);
      return e;
    }, {});
  }
  function defineIcons(t, e) {
    let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const { skipHooks: n = false } = a;
    const o = normalizeIcons(e);
    typeof Nt.hooks.addPack !== "function" || n
      ? (Nt.styles[t] = { ...(Nt.styles[t] || {}), ...o })
      : Nt.hooks.addPack(t, normalizeIcons(e));
    t === "fas" && defineIcons("fa", e);
  }
  const { styles: Et, shims: jt } = Nt;
  const Ft = {
    [m]: Object.values(nt[m]),
    [p]: Object.values(nt[p]),
    [g]: Object.values(nt[g]),
  };
  let zt = null;
  let Lt = {};
  let Dt = {};
  let Rt = {};
  let Tt = {};
  let Ht = {};
  const Ut = {
    [m]: Object.keys($[m]),
    [p]: Object.keys($[p]),
    [g]: Object.keys($[g]),
  };
  function isReserved(t) {
    return ~dt.indexOf(t);
  }
  function getIconName(t, e) {
    const a = e.split("-");
    const n = a[0];
    const o = a.slice(1).join("-");
    return n !== t || o === "" || isReserved(o) ? null : o;
  }
  const build = () => {
    const lookup = (t) =>
      Mt(
        Et,
        (e, a, n) => {
          e[n] = Mt(a, t, {});
          return e;
        },
        {},
      );
    Lt = lookup((t, e, a) => {
      e[3] && (t[e[3]] = a);
      if (e[2]) {
        const n = e[2].filter((t) => typeof t === "number");
        n.forEach((e) => {
          t[e.toString(16)] = a;
        });
      }
      return t;
    });
    Dt = lookup((t, e, a) => {
      t[a] = a;
      if (e[2]) {
        const n = e[2].filter((t) => typeof t === "string");
        n.forEach((e) => {
          t[e] = a;
        });
      }
      return t;
    });
    Ht = lookup((t, e, a) => {
      const n = e[2];
      t[a] = a;
      n.forEach((e) => {
        t[e] = a;
      });
      return t;
    });
    const t = "far" in Et || bt.autoFetchSvg;
    const e = Mt(
      jt,
      (e, a) => {
        const n = a[0];
        let o = a[1];
        const r = a[2];
        o !== "far" || t || (o = "fas");
        typeof n === "string" && (e.names[n] = { prefix: o, iconName: r });
        typeof n === "number" &&
          (e.unicodes[n.toString(16)] = { prefix: o, iconName: r });
        return e;
      },
      { names: {}, unicodes: {} },
    );
    Rt = e.names;
    Tt = e.unicodes;
    zt = getCanonicalPrefix(bt.styleDefault, { family: bt.familyDefault });
  };
  onChange((t) => {
    zt = getCanonicalPrefix(t.styleDefault, { family: bt.familyDefault });
  });
  build();
  function byUnicode(t, e) {
    return (Lt[t] || {})[e];
  }
  function byLigature(t, e) {
    return (Dt[t] || {})[e];
  }
  function byAlias(t, e) {
    return (Ht[t] || {})[e];
  }
  function byOldName(t) {
    return Rt[t] || { prefix: null, iconName: null };
  }
  function byOldUnicode(t) {
    const e = Tt[t];
    const a = byUnicode("fas", t);
    return (
      e ||
      (a ? { prefix: "fas", iconName: a } : null) || {
        prefix: null,
        iconName: null,
      }
    );
  }
  function getDefaultUsablePrefix() {
    return zt;
  }
  const emptyCanonicalIcon = () => ({ prefix: null, iconName: null, rest: [] });
  function getCanonicalPrefix(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const { family: a = m } = e;
    const n = $[a][t];
    const o = et[a][t] || et[a][n];
    const r = t in Nt.styles ? t : null;
    const i = o || r || null;
    return i;
  }
  const Yt = {
    [m]: Object.keys(nt[m]),
    [p]: Object.keys(nt[p]),
    [g]: Object.keys(nt[g]),
  };
  function getCanonicalIcon(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const { skipLookups: a = false } = e;
    const n = {
      [m]: "".concat(bt.cssPrefix, "-").concat(m),
      [p]: "".concat(bt.cssPrefix, "-").concat(p),
      [g]: "".concat(bt.cssPrefix, "-").concat(g),
    };
    let o = null;
    let r = m;
    const i = h.filter((t) => t !== d);
    i.forEach((e) => {
      (t.includes(n[e]) || t.some((t) => Yt[e].includes(t))) && (r = e);
    });
    const s = t.reduce((t, e) => {
      const s = getIconName(bt.cssPrefix, e);
      if (Et[e]) {
        e = Ft[r].includes(e) ? rt[r][e] : e;
        o = e;
        t.prefix = e;
      } else if (Ut[r].indexOf(e) > -1) {
        o = e;
        t.prefix = getCanonicalPrefix(e, { family: r });
      } else
        s
          ? (t.iconName = s)
          : e === bt.replacementClass ||
            i.some((t) => e === n[t]) ||
            t.rest.push(e);
      if (!a && t.prefix && t.iconName) {
        const e = o === "fa" ? byOldName(t.iconName) : {};
        const a = byAlias(t.prefix, t.iconName);
        e.prefix && (o = null);
        t.iconName = e.iconName || a || t.iconName;
        t.prefix = e.prefix || t.prefix;
        t.prefix !== "far" ||
          Et.far ||
          !Et.fas ||
          bt.autoFetchSvg ||
          (t.prefix = "fas");
      }
      return t;
    }, emptyCanonicalIcon());
    (t.includes("fa-brands") || t.includes("fab")) && (s.prefix = "fab");
    (t.includes("fa-duotone") || t.includes("fad")) && (s.prefix = "fad");
    if (!s.prefix && r === p && (Et.fass || bt.autoFetchSvg)) {
      s.prefix = "fass";
      s.iconName = byAlias(s.prefix, s.iconName) || s.iconName;
    }
    if (!s.prefix && r === g && (Et.fasds || bt.autoFetchSvg)) {
      s.prefix = "fasds";
      s.iconName = byAlias(s.prefix, s.iconName) || s.iconName;
    }
    (s.prefix !== "fa" && o !== "fa") ||
      (s.prefix = getDefaultUsablePrefix() || "fas");
    return s;
  }
  class Library {
    constructor() {
      this.definitions = {};
    }
    add() {
      for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++)
        e[a] = arguments[a];
      const n = e.reduce(this._pullDefinitions, {});
      Object.keys(n).forEach((t) => {
        this.definitions[t] = { ...(this.definitions[t] || {}), ...n[t] };
        defineIcons(t, n[t]);
        const e = nt[m][t];
        e && defineIcons(e, n[t]);
        build();
      });
    }
    reset() {
      this.definitions = {};
    }
    _pullDefinitions(t, e) {
      const a = e.prefix && e.iconName && e.icon ? { 0: e } : e;
      Object.keys(a).map((e) => {
        const { prefix: n, iconName: o, icon: r } = a[e];
        const i = r[2];
        t[n] || (t[n] = {});
        i.length > 0 &&
          i.forEach((e) => {
            typeof e === "string" && (t[n][e] = r);
          });
        t[n][o] = r;
      });
      return t;
    }
  }
  let Vt = [];
  let Wt = {};
  const Bt = {};
  const qt = Object.keys(Bt);
  function registerPlugins(t, e) {
    let { mixoutsTo: a } = e;
    Vt = t;
    Wt = {};
    Object.keys(Bt).forEach((t) => {
      qt.indexOf(t) === -1 && delete Bt[t];
    });
    Vt.forEach((t) => {
      const e = t.mixout ? t.mixout() : {};
      Object.keys(e).forEach((t) => {
        typeof e[t] === "function" && (a[t] = e[t]);
        typeof e[t] === "object" &&
          Object.keys(e[t]).forEach((n) => {
            a[t] || (a[t] = {});
            a[t][n] = e[t][n];
          });
      });
      if (t.hooks) {
        const e = t.hooks();
        Object.keys(e).forEach((t) => {
          Wt[t] || (Wt[t] = []);
          Wt[t].push(e[t]);
        });
      }
      t.provides && t.provides(Bt);
    });
    return a;
  }
  function chainHooks(t, e) {
    for (
      var a = arguments.length, n = new Array(a > 2 ? a - 2 : 0), o = 2;
      o < a;
      o++
    )
      n[o - 2] = arguments[o];
    const r = Wt[t] || [];
    r.forEach((t) => {
      e = t.apply(null, [e, ...n]);
    });
    return e;
  }
  function callHooks(t) {
    for (
      var e = arguments.length, a = new Array(e > 1 ? e - 1 : 0), n = 1;
      n < e;
      n++
    )
      a[n - 1] = arguments[n];
    const o = Wt[t] || [];
    o.forEach((t) => {
      t.apply(null, a);
    });
  }
  function callProvided() {
    const t = arguments[0];
    const e = Array.prototype.slice.call(arguments, 1);
    return Bt[t] ? Bt[t].apply(null, e) : void 0;
  }
  function findIconDefinition(t) {
    t.prefix === "fa" && (t.prefix = "fas");
    let { iconName: e } = t;
    const a = t.prefix || getDefaultUsablePrefix();
    if (e) {
      e = byAlias(a, e) || e;
      return (
        iconFromMapping(_t.definitions, a, e) ||
        iconFromMapping(Nt.styles, a, e)
      );
    }
  }
  const _t = new Library();
  const noAuto = () => {
    bt.autoReplaceSvg = false;
    bt.observeMutations = false;
    callHooks("noAuto");
  };
  const Gt = {
    i2svg: function () {
      let t =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (f) {
        callHooks("beforeI2svg", t);
        callProvided("pseudoElements2svg", t);
        return callProvided("i2svg", t);
      }
      return Promise.reject(
        new Error("Operation requires a DOM of some kind."),
      );
    },
    watch: function () {
      let t =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      const { autoReplaceSvgRoot: e } = t;
      bt.autoReplaceSvg === false && (bt.autoReplaceSvg = true);
      bt.observeMutations = true;
      domready(() => {
        autoReplace({ autoReplaceSvgRoot: e });
        callHooks("watch", t);
      });
    },
  };
  const Xt = {
    icon: (t) => {
      if (t === null) return null;
      if (typeof t === "object" && t.prefix && t.iconName)
        return {
          prefix: t.prefix,
          iconName: byAlias(t.prefix, t.iconName) || t.iconName,
        };
      if (Array.isArray(t) && t.length === 2) {
        const e = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1];
        const a = getCanonicalPrefix(t[0]);
        return { prefix: a, iconName: byAlias(a, e) || e };
      }
      if (
        typeof t === "string" &&
        (t.indexOf("".concat(bt.cssPrefix, "-")) > -1 || t.match(it))
      ) {
        const e = getCanonicalIcon(t.split(" "), { skipLookups: true });
        return {
          prefix: e.prefix || getDefaultUsablePrefix(),
          iconName: byAlias(e.prefix, e.iconName) || e.iconName,
        };
      }
      if (typeof t === "string") {
        const e = getDefaultUsablePrefix();
        return { prefix: e, iconName: byAlias(e, t) || t };
      }
    },
  };
  const Kt = {
    noAuto: noAuto,
    config: bt,
    dom: Gt,
    parse: Xt,
    library: _t,
    findIconDefinition: findIconDefinition,
    toHtml: toHtml,
  };
  const autoReplace = function () {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { autoReplaceSvgRoot: e = i } = t;
    (Object.keys(Nt.styles).length > 0 || bt.autoFetchSvg) &&
      f &&
      bt.autoReplaceSvg &&
      Kt.dom.i2svg({ node: e });
  };
  function bootstrap(t) {
    if (l) {
      r.FontAwesome || (r.FontAwesome = Kt);
      domready(() => {
        autoReplace();
        callHooks("bootstrap");
      });
    }
    Nt.hooks = {
      ...Nt.hooks,
      addPack: (t, e) => {
        Nt.styles[t] = { ...(Nt.styles[t] || {}), ...e };
        build();
        autoReplace();
      },
      addPacks: (t) => {
        t.forEach((t) => {
          let [e, a] = t;
          Nt.styles[e] = { ...(Nt.styles[e] || {}), ...a };
        });
        build();
        autoReplace();
      },
      addShims: (t) => {
        Nt.shims.push(...t);
        build();
        autoReplace();
      },
    };
  }
  function domVariants(t, e) {
    Object.defineProperty(t, "abstract", { get: e });
    Object.defineProperty(t, "html", {
      get: function () {
        return t.abstract.map((t) => toHtml(t));
      },
    });
    Object.defineProperty(t, "node", {
      get: function () {
        if (!f) return;
        const e = i.createElement("div");
        e.innerHTML = t.html;
        return e.children;
      },
    });
    return t;
  }
  function asIcon(t) {
    let {
      children: e,
      main: a,
      mask: n,
      attributes: o,
      styles: r,
      transform: i,
    } = t;
    if (transformIsMeaningful(i) && a.found && !n.found) {
      const { width: t, height: e } = a;
      const n = { x: t / e / 2, y: 0.5 };
      o.style = joinStyles({
        ...r,
        "transform-origin": ""
          .concat(n.x + i.x / 16, "em ")
          .concat(n.y + i.y / 16, "em"),
      });
    }
    return [{ tag: "svg", attributes: o, children: e }];
  }
  function asSymbol(t) {
    let { prefix: e, iconName: a, children: n, attributes: o, symbol: r } = t;
    const i =
      r === true ? "".concat(e, "-").concat(bt.cssPrefix, "-").concat(a) : r;
    return [
      {
        tag: "svg",
        attributes: { style: "display: none;" },
        children: [{ tag: "symbol", attributes: { ...o, id: i }, children: n }],
      },
    ];
  }
  function makeInlineSvgAbstract(t) {
    const {
      icons: { main: e, mask: a },
      prefix: n,
      iconName: o,
      transform: r,
      symbol: i,
      title: s,
      maskId: c,
      titleId: l,
      extra: f,
      watchable: u = false,
    } = t;
    const { width: m, height: d } = a.found ? a : e;
    const p = n === "fak";
    const g = [
      bt.replacementClass,
      o ? "".concat(bt.cssPrefix, "-").concat(o) : "",
    ]
      .filter((t) => f.classes.indexOf(t) === -1)
      .filter((t) => t !== "" || !!t)
      .concat(f.classes)
      .join(" ");
    let h = {
      children: [],
      attributes: {
        ...f.attributes,
        "data-prefix": n,
        "data-icon": o,
        class: g,
        role: f.attributes.role || "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 ".concat(m, " ").concat(d),
      },
    };
    const b =
      p && !~f.classes.indexOf("fa-fw")
        ? { width: "".concat((m / d) * 16 * 0.0625, "em") }
        : {};
    u && (h.attributes[V] = "");
    if (s) {
      h.children.push({
        tag: "title",
        attributes: {
          id:
            h.attributes["aria-labelledby"] ||
            "title-".concat(l || nextUniqueId()),
        },
        children: [s],
      });
      delete h.attributes.title;
    }
    const y = {
      ...h,
      prefix: n,
      iconName: o,
      main: e,
      mask: a,
      maskId: c,
      transform: r,
      symbol: i,
      styles: { ...b, ...f.styles },
    };
    const { children: v, attributes: x } =
      a.found && e.found
        ? callProvided("generateAbstractMask", y) || {
            children: [],
            attributes: {},
          }
        : callProvided("generateAbstractIcon", y) || {
            children: [],
            attributes: {},
          };
    y.children = v;
    y.attributes = x;
    return i ? asSymbol(y) : asIcon(y);
  }
  function makeLayersTextAbstract(t) {
    const {
      content: e,
      width: a,
      height: n,
      transform: o,
      title: r,
      extra: i,
      watchable: s = false,
    } = t;
    const c = {
      ...i.attributes,
      ...(r ? { title: r } : {}),
      class: i.classes.join(" "),
    };
    s && (c[V] = "");
    const l = { ...i.styles };
    if (transformIsMeaningful(o)) {
      l.transform = transformForCss({
        transform: o,
        startCentered: true,
        width: a,
        height: n,
      });
      l["-webkit-transform"] = l.transform;
    }
    const f = joinStyles(l);
    f.length > 0 && (c.style = f);
    const u = [];
    u.push({ tag: "span", attributes: c, children: [e] });
    r &&
      u.push({ tag: "span", attributes: { class: "sr-only" }, children: [r] });
    return u;
  }
  function makeLayersCounterAbstract(t) {
    const { content: e, title: a, extra: n } = t;
    const o = {
      ...n.attributes,
      ...(a ? { title: a } : {}),
      class: n.classes.join(" "),
    };
    const r = joinStyles(n.styles);
    r.length > 0 && (o.style = r);
    const i = [];
    i.push({ tag: "span", attributes: o, children: [e] });
    a &&
      i.push({ tag: "span", attributes: { class: "sr-only" }, children: [a] });
    return i;
  }
  const { styles: Jt } = Nt;
  function asFoundIcon(t) {
    const e = t[0];
    const a = t[1];
    const [n] = t.slice(4);
    let o = null;
    o = Array.isArray(n)
      ? {
          tag: "g",
          attributes: { class: "".concat(bt.cssPrefix, "-").concat(ut.GROUP) },
          children: [
            {
              tag: "path",
              attributes: {
                class: "".concat(bt.cssPrefix, "-").concat(ut.SECONDARY),
                fill: "currentColor",
                d: n[0],
              },
            },
            {
              tag: "path",
              attributes: {
                class: "".concat(bt.cssPrefix, "-").concat(ut.PRIMARY),
                fill: "currentColor",
                d: n[1],
              },
            },
          ],
        }
      : { tag: "path", attributes: { fill: "currentColor", d: n } };
    return { found: true, width: e, height: a, icon: o };
  }
  const Qt = { found: false, width: 512, height: 512 };
  function maybeNotifyMissing(t, e) {
    J ||
      bt.showMissingIcons ||
      !t ||
      console.error(
        'Icon with name "'
          .concat(t, '" and prefix "')
          .concat(e, '" is missing.'),
      );
  }
  function findIcon(t, e) {
    let a = e;
    e === "fa" && bt.styleDefault !== null && (e = getDefaultUsablePrefix());
    return new Promise((n, o) => {
      if (a === "fa") {
        const a = byOldName(t) || {};
        t = a.iconName || t;
        e = a.prefix || e;
      }
      if (t && e && Jt[e] && Jt[e][t]) {
        const a = Jt[e][t];
        return n(asFoundIcon(a));
      }
      maybeNotifyMissing(t, e);
      n({
        ...Qt,
        icon:
          (bt.showMissingIcons && t && callProvided("missingIconAbstract")) ||
          {},
      });
    });
  }
  const noop$1 = () => {};
  const Zt =
    bt.measurePerformance && c && c.mark && c.measure
      ? c
      : { mark: noop$1, measure: noop$1 };
  const $t = 'FA "6.6.0"';
  const begin = (t) => {
    Zt.mark("".concat($t, " ").concat(t, " begins"));
    return () => end(t);
  };
  const end = (t) => {
    Zt.mark("".concat($t, " ").concat(t, " ends"));
    Zt.measure(
      "".concat($t, " ").concat(t),
      "".concat($t, " ").concat(t, " begins"),
      "".concat($t, " ").concat(t, " ends"),
    );
  };
  var te = { begin: begin, end: end };
  const noop$2 = () => {};
  function isWatched(t) {
    const e = t.getAttribute ? t.getAttribute(V) : null;
    return typeof e === "string";
  }
  function hasPrefixAndIcon(t) {
    const e = t.getAttribute ? t.getAttribute(q) : null;
    const a = t.getAttribute ? t.getAttribute(_) : null;
    return e && a;
  }
  function hasBeenReplaced(t) {
    return (
      t &&
      t.classList &&
      t.classList.contains &&
      t.classList.contains(bt.replacementClass)
    );
  }
  function getMutator() {
    if (bt.autoReplaceSvg === true) return ee.replace;
    const t = ee[bt.autoReplaceSvg];
    return t || ee.replace;
  }
  function createElementNS(t) {
    return i.createElementNS("http://www.w3.org/2000/svg", t);
  }
  function createElement(t) {
    return i.createElement(t);
  }
  function convertSVG(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const { ceFn: a = t.tag === "svg" ? createElementNS : createElement } = e;
    if (typeof t === "string") return i.createTextNode(t);
    const n = a(t.tag);
    Object.keys(t.attributes || []).forEach(function (e) {
      n.setAttribute(e, t.attributes[e]);
    });
    const o = t.children || [];
    o.forEach(function (t) {
      n.appendChild(convertSVG(t, { ceFn: a }));
    });
    return n;
  }
  function nodeAsComment(t) {
    let e = " ".concat(t.outerHTML, " ");
    e = "".concat(e, "Font Awesome fontawesome.com ");
    return e;
  }
  const ee = {
    replace: function (t) {
      const e = t[0];
      if (e.parentNode) {
        t[1].forEach((t) => {
          e.parentNode.insertBefore(convertSVG(t), e);
        });
        if (e.getAttribute(V) === null && bt.keepOriginalSource) {
          let t = i.createComment(nodeAsComment(e));
          e.parentNode.replaceChild(t, e);
        } else e.remove();
      }
    },
    nest: function (t) {
      const e = t[0];
      const a = t[1];
      if (~classArray(e).indexOf(bt.replacementClass)) return ee.replace(t);
      const n = new RegExp("".concat(bt.cssPrefix, "-.*"));
      delete a[0].attributes.id;
      if (a[0].attributes.class) {
        const t = a[0].attributes.class.split(" ").reduce(
          (t, e) => {
            e === bt.replacementClass || e.match(n)
              ? t.toSvg.push(e)
              : t.toNode.push(e);
            return t;
          },
          { toNode: [], toSvg: [] },
        );
        a[0].attributes.class = t.toSvg.join(" ");
        t.toNode.length === 0
          ? e.removeAttribute("class")
          : e.setAttribute("class", t.toNode.join(" "));
      }
      const o = a.map((t) => toHtml(t)).join("\n");
      e.setAttribute(V, "");
      e.innerHTML = o;
    },
  };
  function performOperationSync(t) {
    t();
  }
  function perform(t, e) {
    const a = typeof e === "function" ? e : noop$2;
    if (t.length === 0) a();
    else {
      let e = performOperationSync;
      bt.mutateApproach === X &&
        (e = r.requestAnimationFrame || performOperationSync);
      e(() => {
        const e = getMutator();
        const n = te.begin("mutate");
        t.map(e);
        n();
        a();
      });
    }
  }
  let ae = false;
  function disableObservation() {
    ae = true;
  }
  function enableObservation() {
    ae = false;
  }
  let ne = null;
  function observe(t) {
    if (!s) return;
    if (!bt.observeMutations) return;
    const {
      treeCallback: e = noop$2,
      nodeCallback: a = noop$2,
      pseudoElementsCallback: n = noop$2,
      observeMutationsRoot: o = i,
    } = t;
    ne = new s((t) => {
      if (ae) return;
      const o = getDefaultUsablePrefix();
      toArray(t).forEach((t) => {
        if (
          t.type === "childList" &&
          t.addedNodes.length > 0 &&
          !isWatched(t.addedNodes[0])
        ) {
          bt.searchPseudoElements && n(t.target);
          e(t.target);
        }
        t.type === "attributes" &&
          t.target.parentNode &&
          bt.searchPseudoElements &&
          n(t.target.parentNode);
        if (
          t.type === "attributes" &&
          isWatched(t.target) &&
          ~ft.indexOf(t.attributeName)
        )
          if (t.attributeName === "class" && hasPrefixAndIcon(t.target)) {
            const { prefix: e, iconName: a } = getCanonicalIcon(
              classArray(t.target),
            );
            t.target.setAttribute(q, e || o);
            a && t.target.setAttribute(_, a);
          } else hasBeenReplaced(t.target) && a(t.target);
      });
    });
    f &&
      ne.observe(o, {
        childList: true,
        attributes: true,
        characterData: true,
        subtree: true,
      });
  }
  function disconnect() {
    ne && ne.disconnect();
  }
  function styleParser(t) {
    const e = t.getAttribute("style");
    let a = [];
    e &&
      (a = e.split(";").reduce((t, e) => {
        const a = e.split(":");
        const n = a[0];
        const o = a.slice(1);
        n && o.length > 0 && (t[n] = o.join(":").trim());
        return t;
      }, {}));
    return a;
  }
  function classParser(t) {
    const e = t.getAttribute("data-prefix");
    const a = t.getAttribute("data-icon");
    const n = t.innerText !== void 0 ? t.innerText.trim() : "";
    let o = getCanonicalIcon(classArray(t));
    o.prefix || (o.prefix = getDefaultUsablePrefix());
    if (e && a) {
      o.prefix = e;
      o.iconName = a;
    }
    if (o.iconName && o.prefix) return o;
    o.prefix &&
      n.length > 0 &&
      (o.iconName =
        byLigature(o.prefix, t.innerText) ||
        byUnicode(o.prefix, toHex(t.innerText)));
    !o.iconName &&
      bt.autoFetchSvg &&
      t.firstChild &&
      t.firstChild.nodeType === Node.TEXT_NODE &&
      (o.iconName = t.firstChild.data);
    return o;
  }
  function attributesParser(t) {
    const e = toArray(t.attributes).reduce((t, e) => {
      t.name !== "class" && t.name !== "style" && (t[e.name] = e.value);
      return t;
    }, {});
    const a = t.getAttribute("title");
    const n = t.getAttribute("data-fa-title-id");
    if (bt.autoA11y)
      if (a)
        e["aria-labelledby"] = ""
          .concat(bt.replacementClass, "-title-")
          .concat(n || nextUniqueId());
      else {
        e["aria-hidden"] = "true";
        e.focusable = "false";
      }
    return e;
  }
  function blankMeta() {
    return {
      iconName: null,
      title: null,
      titleId: null,
      prefix: null,
      transform: xt,
      symbol: false,
      mask: { iconName: null, prefix: null, rest: [] },
      maskId: null,
      extra: { classes: [], styles: {}, attributes: {} },
    };
  }
  function parseMeta(t) {
    let e =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { styleParser: true };
    const { iconName: a, prefix: n, rest: o } = classParser(t);
    const r = attributesParser(t);
    const i = chainHooks("parseNodeAttributes", {}, t);
    let s = e.styleParser ? styleParser(t) : [];
    return {
      iconName: a,
      title: t.getAttribute("title"),
      titleId: t.getAttribute("data-fa-title-id"),
      prefix: n,
      transform: xt,
      mask: { iconName: null, prefix: null, rest: [] },
      maskId: null,
      symbol: false,
      extra: { classes: o, styles: s, attributes: r },
      ...i,
    };
  }
  const { styles: oe } = Nt;
  function generateMutation(t) {
    const e =
      bt.autoReplaceSvg === "nest"
        ? parseMeta(t, { styleParser: false })
        : parseMeta(t);
    return ~e.extra.classes.indexOf(st)
      ? callProvided("generateLayersText", t, e)
      : callProvided("generateSvgReplacementMutation", t, e);
  }
  let re = new Set();
  Q.map((t) => {
    re.add("fa-".concat(t));
  });
  Object.keys($[m]).map(re.add.bind(re));
  Object.keys($[p]).map(re.add.bind(re));
  Object.keys($[g]).map(re.add.bind(re));
  re = [...re];
  function onTree(t) {
    let e =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (!f) return Promise.resolve();
    const a = i.documentElement.classList;
    const hclAdd = (t) => a.add("".concat(G, "-").concat(t));
    const hclRemove = (t) => a.remove("".concat(G, "-").concat(t));
    const n = bt.autoFetchSvg
      ? re
      : Q.map((t) => "fa-".concat(t)).concat(Object.keys(oe));
    n.includes("fa") || n.push("fa");
    const o = [".".concat(st, ":not([").concat(V, "])")]
      .concat(n.map((t) => ".".concat(t, ":not([").concat(V, "])")))
      .join(", ");
    if (o.length === 0) return Promise.resolve();
    let r = [];
    try {
      r = toArray(t.querySelectorAll(o));
    } catch (t) {}
    if (!(r.length > 0)) return Promise.resolve();
    hclAdd("pending");
    hclRemove("complete");
    const s = te.begin("onTree");
    const c = r.reduce((t, e) => {
      try {
        const a = generateMutation(e);
        a && t.push(a);
      } catch (t) {
        J || (t.name === "MissingIcon" && console.error(t));
      }
      return t;
    }, []);
    return new Promise((t, a) => {
      Promise.all(c)
        .then((a) => {
          perform(a, () => {
            hclAdd("active");
            hclAdd("complete");
            hclRemove("pending");
            typeof e === "function" && e();
            s();
            t();
          });
        })
        .catch((t) => {
          s();
          a(t);
        });
    });
  }
  function onNode(t) {
    let e =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    generateMutation(t).then((t) => {
      t && perform([t], e);
    });
  }
  function resolveIcons(t) {
    return function (e) {
      let a =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      const n = (e || {}).icon ? e : findIconDefinition(e || {});
      let { mask: o } = a;
      o && (o = (o || {}).icon ? o : findIconDefinition(o || {}));
      return t(n, { ...a, mask: o });
    };
  }
  const render = function (t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const {
      transform: a = xt,
      symbol: n = false,
      mask: o = null,
      maskId: r = null,
      title: i = null,
      titleId: s = null,
      classes: c = [],
      attributes: l = {},
      styles: f = {},
    } = e;
    if (!t) return;
    const { prefix: u, iconName: m, icon: d } = t;
    return domVariants({ type: "icon", ...t }, () => {
      callHooks("beforeDOMElementCreation", { iconDefinition: t, params: e });
      if (bt.autoA11y)
        if (i)
          l["aria-labelledby"] = ""
            .concat(bt.replacementClass, "-title-")
            .concat(s || nextUniqueId());
        else {
          l["aria-hidden"] = "true";
          l.focusable = "false";
        }
      return makeInlineSvgAbstract({
        icons: {
          main: asFoundIcon(d),
          mask: o
            ? asFoundIcon(o.icon)
            : { found: false, width: null, height: null, icon: {} },
        },
        prefix: u,
        iconName: m,
        transform: { ...xt, ...a },
        symbol: n,
        title: i,
        maskId: r,
        titleId: s,
        extra: { attributes: l, styles: f, classes: c },
      });
    });
  };
  var ie = {
    mixout() {
      return { icon: resolveIcons(render) };
    },
    hooks() {
      return {
        mutationObserverCallbacks(t) {
          t.treeCallback = onTree;
          t.nodeCallback = onNode;
          return t;
        },
      };
    },
    provides(t) {
      t.i2svg = function (t) {
        const { node: e = i, callback: a = () => {} } = t;
        return onTree(e, a);
      };
      t.generateSvgReplacementMutation = function (t, e) {
        const {
          iconName: a,
          title: n,
          titleId: o,
          prefix: r,
          transform: i,
          symbol: s,
          mask: c,
          maskId: l,
          extra: f,
        } = e;
        return new Promise((e, u) => {
          Promise.all([
            findIcon(a, r),
            c.iconName
              ? findIcon(c.iconName, c.prefix)
              : Promise.resolve({
                  found: false,
                  width: 512,
                  height: 512,
                  icon: {},
                }),
          ])
            .then((c) => {
              let [u, m] = c;
              e([
                t,
                makeInlineSvgAbstract({
                  icons: { main: u, mask: m },
                  prefix: r,
                  iconName: a,
                  transform: i,
                  symbol: s,
                  maskId: l,
                  title: n,
                  titleId: o,
                  extra: f,
                  watchable: true,
                }),
              ]);
            })
            .catch(u);
        });
      };
      t.generateAbstractIcon = function (t) {
        let {
          children: e,
          attributes: a,
          main: n,
          transform: o,
          styles: r,
        } = t;
        const i = joinStyles(r);
        i.length > 0 && (a.style = i);
        let s;
        transformIsMeaningful(o) &&
          (s = callProvided("generateAbstractTransformGrouping", {
            main: n,
            transform: o,
            containerWidth: n.width,
            iconWidth: n.width,
          }));
        e.push(s || n.icon);
        return { children: e, attributes: a };
      };
    },
  };
  var se = {
    mixout() {
      return {
        layer(t) {
          let e =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const { classes: a = [] } = e;
          return domVariants({ type: "layer" }, () => {
            callHooks("beforeDOMElementCreation", { assembler: t, params: e });
            let n = [];
            t((t) => {
              Array.isArray(t)
                ? t.map((t) => {
                    n = n.concat(t.abstract);
                  })
                : (n = n.concat(t.abstract));
            });
            return [
              {
                tag: "span",
                attributes: {
                  class: ["".concat(bt.cssPrefix, "-layers"), ...a].join(" "),
                },
                children: n,
              },
            ];
          });
        },
      };
    },
  };
  var ce = {
    mixout() {
      return {
        counter(t) {
          let e =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const {
            title: a = null,
            classes: n = [],
            attributes: o = {},
            styles: r = {},
          } = e;
          return domVariants({ type: "counter", content: t }, () => {
            callHooks("beforeDOMElementCreation", { content: t, params: e });
            return makeLayersCounterAbstract({
              content: t.toString(),
              title: a,
              extra: {
                attributes: o,
                styles: r,
                classes: ["".concat(bt.cssPrefix, "-layers-counter"), ...n],
              },
            });
          });
        },
      };
    },
  };
  var le = {
    mixout() {
      return {
        text(t) {
          let e =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const {
            transform: a = xt,
            title: n = null,
            classes: o = [],
            attributes: r = {},
            styles: i = {},
          } = e;
          return domVariants({ type: "text", content: t }, () => {
            callHooks("beforeDOMElementCreation", { content: t, params: e });
            return makeLayersTextAbstract({
              content: t,
              transform: { ...xt, ...a },
              title: n,
              extra: {
                attributes: r,
                styles: i,
                classes: ["".concat(bt.cssPrefix, "-layers-text"), ...o],
              },
            });
          });
        },
      };
    },
    provides(t) {
      t.generateLayersText = function (t, e) {
        const { title: a, transform: n, extra: o } = e;
        let r = null;
        let i = null;
        if (u) {
          const e = parseInt(getComputedStyle(t).fontSize, 10);
          const a = t.getBoundingClientRect();
          r = a.width / e;
          i = a.height / e;
        }
        bt.autoA11y && !a && (o.attributes["aria-hidden"] = "true");
        return Promise.resolve([
          t,
          makeLayersTextAbstract({
            content: t.innerHTML,
            width: r,
            height: i,
            transform: n,
            title: a,
            extra: o,
            watchable: true,
          }),
        ]);
      };
    },
  };
  const fe = new RegExp('"', "ug");
  const ue = [1105920, 1112319];
  const me = { FontAwesome: { normal: "fas", 400: "fas" }, ...w, ...A, ...z };
  const de = Object.keys(me).reduce((t, e) => {
    t[e.toLowerCase()] = me[e];
    return t;
  }, {});
  const pe = Object.keys(de).reduce((t, e) => {
    const a = de[e];
    t[e] = a[900] || [...Object.entries(a)][0][1];
    return t;
  }, {});
  function hexValueFromContent(t) {
    const e = t.replace(fe, "");
    const a = codePointAt(e, 0);
    const n = a >= ue[0] && a <= ue[1];
    const o = e.length === 2 && e[0] === e[1];
    return { value: toHex(o ? e[0] : e), isSecondary: n || o };
  }
  function getPrefix(t, e) {
    const a = t.replace(/^['"]|['"]$/g, "").toLowerCase();
    const n = parseInt(e);
    const o = isNaN(n) ? "normal" : n;
    return (de[a] || {})[o] || pe[a];
  }
  function replaceForPosition(t, e) {
    const a = "".concat(B).concat(e.replace(":", "-"));
    return new Promise((n, o) => {
      if (t.getAttribute(a) !== null) return n();
      const s = toArray(t.children);
      const c = s.filter((t) => t.getAttribute(W) === e)[0];
      const l = r.getComputedStyle(t, e);
      const f = l.getPropertyValue("font-family");
      const u = f.match(ct);
      const m = l.getPropertyValue("font-weight");
      const d = l.getPropertyValue("content");
      if (c && !u) {
        t.removeChild(c);
        return n();
      }
      if (u && d !== "none" && d !== "") {
        const r = l.getPropertyValue("content");
        let s = getPrefix(f, m);
        const { value: d, isSecondary: p } = hexValueFromContent(r);
        const g = u[0].startsWith("FontAwesome");
        let h = byUnicode(s, d);
        let b = h;
        if (g) {
          const t = byOldUnicode(d);
          if (t.iconName && t.prefix) {
            h = t.iconName;
            s = t.prefix;
          }
        }
        if (
          !h ||
          p ||
          (c && c.getAttribute(q) === s && c.getAttribute(_) === b)
        )
          n();
        else {
          t.setAttribute(a, b);
          c && t.removeChild(c);
          const r = blankMeta();
          const { extra: l } = r;
          l.attributes[W] = e;
          findIcon(h, s)
            .then((o) => {
              const c = makeInlineSvgAbstract({
                ...r,
                icons: { main: o, mask: emptyCanonicalIcon() },
                prefix: s,
                iconName: b,
                extra: l,
                watchable: true,
              });
              const f = i.createElementNS("http://www.w3.org/2000/svg", "svg");
              e === "::before"
                ? t.insertBefore(f, t.firstChild)
                : t.appendChild(f);
              f.outerHTML = c.map((t) => toHtml(t)).join("\n");
              t.removeAttribute(a);
              n();
            })
            .catch(o);
        }
      } else n();
    });
  }
  function replace(t) {
    return Promise.all([
      replaceForPosition(t, "::before"),
      replaceForPosition(t, "::after"),
    ]);
  }
  function processable(t) {
    return (
      t.parentNode !== document.head &&
      !~K.indexOf(t.tagName.toUpperCase()) &&
      !t.getAttribute(W) &&
      (!t.parentNode || t.parentNode.tagName !== "svg")
    );
  }
  function searchPseudoElements(t) {
    if (f)
      return new Promise((e, a) => {
        const n = toArray(t.querySelectorAll("*"))
          .filter(processable)
          .map(replace);
        const o = te.begin("searchPseudoElements");
        disableObservation();
        Promise.all(n)
          .then(() => {
            o();
            enableObservation();
            e();
          })
          .catch(() => {
            o();
            enableObservation();
            a();
          });
      });
  }
  var ge = {
    hooks() {
      return {
        mutationObserverCallbacks(t) {
          t.pseudoElementsCallback = searchPseudoElements;
          return t;
        },
      };
    },
    provides(t) {
      t.pseudoElements2svg = function (t) {
        const { node: e = i } = t;
        bt.searchPseudoElements && searchPseudoElements(e);
      };
    },
  };
  let he = false;
  var be = {
    mixout() {
      return {
        dom: {
          unwatch() {
            disableObservation();
            he = true;
          },
        },
      };
    },
    hooks() {
      return {
        bootstrap() {
          observe(chainHooks("mutationObserverCallbacks", {}));
        },
        noAuto() {
          disconnect();
        },
        watch(t) {
          const { observeMutationsRoot: e } = t;
          he
            ? enableObservation()
            : observe(
                chainHooks("mutationObserverCallbacks", {
                  observeMutationsRoot: e,
                }),
              );
        },
      };
    },
  };
  const parseTransformString = (t) => {
    let e = { size: 16, x: 0, y: 0, flipX: false, flipY: false, rotate: 0 };
    return t
      .toLowerCase()
      .split(" ")
      .reduce((t, e) => {
        const a = e.toLowerCase().split("-");
        const n = a[0];
        let o = a.slice(1).join("-");
        if (n && o === "h") {
          t.flipX = true;
          return t;
        }
        if (n && o === "v") {
          t.flipY = true;
          return t;
        }
        o = parseFloat(o);
        if (isNaN(o)) return t;
        switch (n) {
          case "grow":
            t.size = t.size + o;
            break;
          case "shrink":
            t.size = t.size - o;
            break;
          case "left":
            t.x = t.x - o;
            break;
          case "right":
            t.x = t.x + o;
            break;
          case "up":
            t.y = t.y - o;
            break;
          case "down":
            t.y = t.y + o;
            break;
          case "rotate":
            t.rotate = t.rotate + o;
            break;
        }
        return t;
      }, e);
  };
  var ye = {
    mixout() {
      return { parse: { transform: (t) => parseTransformString(t) } };
    },
    hooks() {
      return {
        parseNodeAttributes(t, e) {
          const a = e.getAttribute("data-fa-transform");
          a && (t.transform = parseTransformString(a));
          return t;
        },
      };
    },
    provides(t) {
      t.generateAbstractTransformGrouping = function (t) {
        let { main: e, transform: a, containerWidth: n, iconWidth: o } = t;
        const r = { transform: "translate(".concat(n / 2, " 256)") };
        const i = "translate(".concat(a.x * 32, ", ").concat(a.y * 32, ") ");
        const s = "scale("
          .concat((a.size / 16) * (a.flipX ? -1 : 1), ", ")
          .concat((a.size / 16) * (a.flipY ? -1 : 1), ") ");
        const c = "rotate(".concat(a.rotate, " 0 0)");
        const l = { transform: "".concat(i, " ").concat(s, " ").concat(c) };
        const f = { transform: "translate(".concat((o / 2) * -1, " -256)") };
        const u = { outer: r, inner: l, path: f };
        return {
          tag: "g",
          attributes: { ...u.outer },
          children: [
            {
              tag: "g",
              attributes: { ...u.inner },
              children: [
                {
                  tag: e.icon.tag,
                  children: e.icon.children,
                  attributes: { ...e.icon.attributes, ...u.path },
                },
              ],
            },
          ],
        };
      };
    },
  };
  const ve = { x: 0, y: 0, width: "100%", height: "100%" };
  function fillBlack(t) {
    let e = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
    t.attributes && (t.attributes.fill || e) && (t.attributes.fill = "black");
    return t;
  }
  function deGroup(t) {
    return t.tag === "g" ? t.children : [t];
  }
  var xe = {
    hooks() {
      return {
        parseNodeAttributes(t, e) {
          const a = e.getAttribute("data-fa-mask");
          const n = a
            ? getCanonicalIcon(a.split(" ").map((t) => t.trim()))
            : emptyCanonicalIcon();
          n.prefix || (n.prefix = getDefaultUsablePrefix());
          t.mask = n;
          t.maskId = e.getAttribute("data-fa-mask-id");
          return t;
        },
      };
    },
    provides(t) {
      t.generateAbstractMask = function (t) {
        let {
          children: e,
          attributes: a,
          main: n,
          mask: o,
          maskId: r,
          transform: i,
        } = t;
        const { width: s, icon: c } = n;
        const { width: l, icon: f } = o;
        const u = transformForSvg({
          transform: i,
          containerWidth: l,
          iconWidth: s,
        });
        const m = { tag: "rect", attributes: { ...ve, fill: "white" } };
        const d = c.children ? { children: c.children.map(fillBlack) } : {};
        const p = {
          tag: "g",
          attributes: { ...u.inner },
          children: [
            fillBlack({
              tag: c.tag,
              attributes: { ...c.attributes, ...u.path },
              ...d,
            }),
          ],
        };
        const g = { tag: "g", attributes: { ...u.outer }, children: [p] };
        const h = "mask-".concat(r || nextUniqueId());
        const b = "clip-".concat(r || nextUniqueId());
        const y = {
          tag: "mask",
          attributes: {
            ...ve,
            id: h,
            maskUnits: "userSpaceOnUse",
            maskContentUnits: "userSpaceOnUse",
          },
          children: [m, g],
        };
        const v = {
          tag: "defs",
          children: [
            { tag: "clipPath", attributes: { id: b }, children: deGroup(f) },
            y,
          ],
        };
        e.push(v, {
          tag: "rect",
          attributes: {
            fill: "currentColor",
            "clip-path": "url(#".concat(b, ")"),
            mask: "url(#".concat(h, ")"),
            ...ve,
          },
        });
        return { children: e, attributes: a };
      };
    },
  };
  var ke = {
    provides(t) {
      let e = false;
      r.matchMedia &&
        (e = r.matchMedia("(prefers-reduced-motion: reduce)").matches);
      t.missingIconAbstract = function () {
        const t = [];
        const a = { fill: "currentColor" };
        const n = {
          attributeType: "XML",
          repeatCount: "indefinite",
          dur: "2s",
        };
        t.push({
          tag: "path",
          attributes: {
            ...a,
            d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
          },
        });
        const o = { ...n, attributeName: "opacity" };
        const r = {
          tag: "circle",
          attributes: { ...a, cx: "256", cy: "364", r: "28" },
          children: [],
        };
        e ||
          r.children.push(
            {
              tag: "animate",
              attributes: {
                ...n,
                attributeName: "r",
                values: "28;14;28;28;14;28;",
              },
            },
            { tag: "animate", attributes: { ...o, values: "1;0;1;1;0;1;" } },
          );
        t.push(r);
        t.push({
          tag: "path",
          attributes: {
            ...a,
            opacity: "1",
            d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
          },
          children: e
            ? []
            : [
                {
                  tag: "animate",
                  attributes: { ...o, values: "1;0;0;0;0;1;" },
                },
              ],
        });
        e ||
          t.push({
            tag: "path",
            attributes: {
              ...a,
              opacity: "0",
              d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
            },
            children: [
              { tag: "animate", attributes: { ...o, values: "0;0;1;1;0;0;" } },
            ],
          });
        return { tag: "g", attributes: { class: "missing" }, children: t };
      };
    },
  };
  var Ae = {
    hooks() {
      return {
        parseNodeAttributes(t, e) {
          const a = e.getAttribute("data-fa-symbol");
          const n = a !== null && (a === "" || a);
          t.symbol = n;
          return t;
        },
      };
    },
  };
  var we = [Pt, ie, se, ce, le, ge, be, ye, xe, ke, Ae];
  registerPlugins(we, { mixoutsTo: Kt });
  bunker(bootstrap);
})();
var t = {};
export { t as default };
