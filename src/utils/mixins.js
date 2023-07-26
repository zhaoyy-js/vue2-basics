export const mixin = {
  methods: {
    init() {
      document.oncontextmenu = new Function("event.returnValue=false");
      document.onselectstart = new Function("event.returnValue=false");
    },
  },
  created() {
    this.$nextTick()
      .then(() => {
        return new Promise((resolve) => {
          resolve(this.init);
        });
      })
      .then((res) => {
        res();
      });
  },
};
