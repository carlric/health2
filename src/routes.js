import patient from "./components/patient/patient.vue";
import patientdetail from "./components/patient/patientdetail.vue";
import patientedit from "./components/patient/patientedit.vue";
import home from "./components/home.vue";

export const routes = [
  { path: "/patient", component: patient },
  { path: "/patientdetail", component: patientdetail },
  { path: "/patientedit", component: patientedit },
  { path: "", component: home }
];
