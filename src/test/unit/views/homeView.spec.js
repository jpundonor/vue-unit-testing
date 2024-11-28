import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";

describe("HomeView", () => {
  test("testing the existence of the HomeView component", async () => {
    // Creando el router y deniendo la ruta y componente que mostrara la información.
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "/",
          name: "home",
          component: HomeView,
        },
      ],
    });

    // Se hace la redirección a la ruta / y se espera a que la redirección se complete.
    router.push("/");
    await router.isReady();

    // Se selecciona el componente HomeView y se verifica que exista.
    const wrapper = mount(HomeView, {
      global: {
        plugins: [router],
      },
    });

    // Se espera que el componente HomeView exista.
    expect(wrapper.findComponent(HomeView).exists()).toBe(true);
  });
});
