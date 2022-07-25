/* 
    @params1 Getter 接受 state 作为其第一个参数：
    @params2 Getter 也可以接受其他 getter 作为第二个参数：
*/
export default {
  doneTodos: (state) => {
    return state.todos.filter((item) => {
      return item.id > 0 ? item : "";
    });
  },

  doneTodos2: (state, getters) => {
    return getters.doneTodos.length;
  },

  roleInfo: (state) => state.roleInfo,
};
