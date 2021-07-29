import VueSimpleFilePicker from "./VueSimpleFilePicker.vue";

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("vue-simple-file-picker", VueSimpleFilePicker);
}

const plugin = {
  install
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

VueSimpleFilePicker.install = install;

export default VueSimpleFilePicker;