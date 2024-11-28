import { mount } from "@vue/test-utils";
import Parent from "@/components/Parent.vue";
import Child from "@/components/Child.vue";

describe("Communication between Parent and Child components", () => {
  test("should send a message from the Child to the Parent", async () => {
    
    // Se monta el componente Parent.
    const wrapper = mount(Parent);
    // Se selecciona el componente Child.
    const child = wrapper.findComponent(Child);

    // Se envía un mensaje desde el componente Child al componente Parent.
    await child.setData({ message: "Hello Parent!" });    
    await child.find("button").trigger("click");

    // Se espera que el componente Parent reciba el mensaje enviado desde el componente Child.
    expect(wrapper.text()).toContain("Received data: Hello Parent!");
    // expect(wrapper.vm.receivedData).toBe("Hello Parent!");
  });
});
