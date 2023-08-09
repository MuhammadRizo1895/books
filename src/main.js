import { createApp } from "vue";
import App from "./App.vue";
// import globalComponents from "./globalComponents";
import "./assets/style.css";
import primaryButton from '../src/globalComponents/primaryButton.vue'
import secondaryButton from '../src/globalComponents/secondaryButton.vue'

const app = createApp(App);
// globalComponents.map((component) => app.component(component.name, component));
app.component('primaryButton', primaryButton),
app.component('secondaryButton', secondaryButton)

app.mount("#app");
