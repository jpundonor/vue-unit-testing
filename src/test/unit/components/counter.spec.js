import store from "@/store";

describe("Vuex Store", () => {
  test("should start the counter at 0", () => {
    expect(store.state.counter).toBe(0);
  });
  test("should increment the counter", () => {
    store.commit("increment");
    expect(store.state.counter).toBe(1);
  });
  test("should decrement the counter", () => {
    store.commit("decrement");
    expect(store.state.counter).toBe(0);
  });
});
