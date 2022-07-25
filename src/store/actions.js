/* 
    Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，
    因此你可以调用 context.commit 提交一个 mutation，
    或者通过 context.state 和 context.getters 来获取 state 和 getters。
    当我们在之后介绍到 Modules 时，你就知道 context 对象为什么不是 store 实例本身了
*/
import { SOME_ACTIONS } from "./mutation-types";

export default {
  async actionA({ commit }) {
    await commit(SOME_ACTIONS, { role: "admin", id: 0 });
  },

  async actionB({ dispatch, commit }) {
    await dispatch("actionA");
    await commit(SOME_ACTIONS, { role: "pass", id: 1 });
  },
};
