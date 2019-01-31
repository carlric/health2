import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
//import BootstrapVue from '../node_modules/bootstrap-vue';
//import '../../node_modules/bootstrap/dist/css/bootstrap.css';
//import '../../node_modules/bootstrap-vue/dist/bootstrap-vue.css';
import VueRouter from "vue-router";
//import "./db.js";
// Import the Library


//import VuePouchDB from "vue-pouch-db";
// VuePouchDB Instance
//Vue.use(VuePouchDB);
////////////////////////////////////////////////////////////////////
//////////////////// POUCH DB /////////////////////////////////////
////////////////////////////////////////////////////////////////////
//import PouchDB from "pouchdb";
//import PouchDB from "pouchdb";

//PouchDB.plugin(require("pouchdb-find"));
//import lf from "pouchdb-find";
//import plf from "pouchdb-live-find";
//Vue.config.productionTip = false;
//import pouchVue from "pouchVue";

import PouchDB from "pouchdb-browser";
import lf from "pouchdb-find";
import plf from "pouchdb-live-find";
Vue.config.productionTip = false;

PouchDB.plugin(lf);
PouchDB.plugin(plf);

Vue.use(require("vue-pouch"), {
  pouch: PouchDB,
  defaultDB: "config"
});

// var db = new PouchDB("my_db");
// Vue.use(pouchVue, {
//   pouch: PouchDB, // optional if `PouchDB` is available on the global object
//   defaultDB:
//     "https://bba6ce8d-1191-4d98-8a1b-0ed9b1ef701d-bluemix.cloudant.com/todos" // this is used as a default connect/disconnect database
//   // optional - See `https://pouchdb.com/api.html#debug_mode` for valid settings
// });

// Vue.use(pouchVue, {
//   pouch: PouchDB, // optional if `PouchDB` is available on the global object
//   defaultDB:
//     "https://bba6ce8d-1191-4d98-8a1b-0ed9b1ef701d-bluemix.cloudant.com/todosoteDbName", // this is used as a default connect/disconnect database
//   debug: "*" // optional - See `https://pouchdb.com/api.html#debug_mode` for valid settings
// });
// //////////////////////////////////////////////////////////////////

import App from "./App.vue";
import { routes } from "./routes";
import Vuelidate from "vuelidate";

// var PouchDB = require("pouchdb");
// PouchDB.plugin(require("pouchdb-find"));
// PouchDB.plugin(require("pouchdb-live-find"));

Vue.use(Vuelidate);
Vue.use(BootstrapVue);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history" //no hash tag stile URL
});

new Vue({
  el: "#app",
  router: router,
  render: h => h(App)
});
