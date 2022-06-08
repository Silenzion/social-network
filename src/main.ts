import { createApp } from "vue";
import { createPinia } from "pinia";
import "@/assets/styles/index.scss";
import App from "@/App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import createRouter from "@/createRouter";
import vfmPlugin from "vue-final-modal";
const app = createApp(App);

app.use(ElementPlus);
app.use(vfmPlugin);
app.use(createPinia());
app.use(createRouter());
app.mount("#app");
