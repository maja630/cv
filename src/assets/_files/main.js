import { createApp } from "/node_modules/.vite/deps/vue.js?v=b9ecaf16";
import "/src/style.css?t=1701958213935";
import App from "/src/App.vue?t=1701956731177";
import router from "/src/router/router.js?t=1701958213935";

const app = createApp(App);
app.use(router);
app.mount("#app");
