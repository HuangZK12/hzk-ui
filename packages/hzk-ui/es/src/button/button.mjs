import "./styles/index.css";
import { computed as r } from "vue";
import s from "../../_virtual/plugin-vue2_normalizer.mjs";
const u = {
  __name: "button",
  props: ["type"],
  setup(e) {
    const t = e;
    defineOptions({ name: "k-button" });
    const n = r(() => ({ [`ea-button--${t.type}`]: t.type }));
    return { __sfc: !0, buttonProps: t, buttonStyle: n };
  }
};
var _ = function() {
  var t = this, n = t._self._c, o = t._self._setupProxy;
  return n("button", { staticClass: "ea-button", class: o.buttonStyle }, [t._t("default")], 2);
}, a = [], l = /* @__PURE__ */ s(
  u,
  _,
  a,
  !1,
  null,
  null,
  null,
  null
);
const m = l.exports;
export {
  m as default
};
