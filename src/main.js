import { createApp } from "vue";
import App from "./App.vue";
import "./assets/style.css";
import primaryButton from "../src/globalComponents/primaryButton.vue";
import secondaryButton from "../src/globalComponents/secondaryButton.vue";
import InputAdd from "../src/globalComponents/InputAdd.vue";
import errorMsg from "../src/globalComponents/errorMsg.vue";
import Loader from "./globalComponents/Loader.vue";

const app = createApp(App);
app.component("secondaryButton", secondaryButton),
  app.component("primaryButton", primaryButton),
  app.component("InputAdd", InputAdd),
  app.component("errorMsg", errorMsg);
app.component("Loader", Loader);

app.mount("#app");
