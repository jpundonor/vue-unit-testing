import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";

import AboutView from "@/views/AboutView.vue";

describe("AboutView", () => {
  test("testing the existence of the AboutView component", async () => {

    // Creando el router y deniendo la ruta y componente que mostrara la información.
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "/about",
          name: "about",
          component: AboutView,
        },
      ],
    });

    // Se hace la redirección a la ruta /about y se espera a que la redirección se complete.
    router.push("/about");
    await router.isReady();

    // Se selecciona el componente AboutView y se verifica que exista.
    const wrapper = mount(AboutView, {
      global: {
        plugins: [router],
      },
    });

    // Se espera que el componente AboutView exista.
    expect(wrapper.findComponent(AboutView).exists()).toBe(true);
  });
});
