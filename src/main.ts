import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import { getStore } from "./store/useStore";

const app = createApp(App);
const store = getStore();

app.use(store);
app.use(router);
app.mount("#app");
