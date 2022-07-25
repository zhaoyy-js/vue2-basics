import { SOME_MUTATION, SOME_ACTIONS } from "./mutation-types";

/* 
  @params1 mutation接受 state作为第一个参数
  @params2 你可以向 store.commit 传入额外的参数，即 mutation 的 载荷（payload）
*/
export default {
  [SOME_MUTATION](state, params) {
    console.log("mutationList", params);
    state.count++;
  },
  [SOME_ACTIONS](state, params) {
    state.roleInfo = params;
  },
};
