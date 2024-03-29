<template>
  <div class="main-box">
    <button @click="add">添加</button>
    <div class="main-box-tab">
      <i @click="previous"></i>
      <i @click="next"></i>
      <div class="main-box-tab-content" ref="tabs">
        <div class="main-box-tab-roll">
          <div
            v-for="(item, index) in tabs"
            :key="index"
            :class="{
              'tab-item-action': actionName === item.name,
              'tab-item': actionName !== item.name,
            }"
            @click.stop="clickTab(item.name, index)"
          >
            <span>{{ item.meta.title }}</span>
            <i class="el-icon-close" @click.stop="close(item.name, index)"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="main-box-content">
      <div>{{ actionName }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {
      tabs: [],
      moveX: 0,
      count: 1,
      unoccupied: 0,
      tabsCount: 0,
      differ: 0,
      actionName: "test1",
    };
  },
  watch: {
    actionName(val) {
      let len = this.tabs.length;
      // 如有重复数据退出后续函数执行
      for (let i = 0; i < len; i++) {
        if (this.tabs[i].name === val) {
          this.$nextTick(() => {
            this.translateX(
              (i + 1 - this.tabsCount) * this.width - this.unoccupied
            );
          });
          return;
        }
      }

      this.tabs.push({
        name: `test${this.count}`,
        meta: {
          title: `test${this.count}`,
        },
      });
      this.$nextTick(() => {
        // (总共有多少个tabs - 未偏移时可见的元素个数) * 单个tab标签元素长度 - 被遮挡tab元素的可见部分的宽度
        this.translateX(
          (this.tabs.length - this.tabsCount) * this.width - this.unoccupied
        );
      });
    },
  },
  mounted() {
    this.tabs.push({
      name: `test${this.count}`,
      meta: {
        title: `test${this.count}`,
      },
    });
    this.$nextTick(() => {
      let tabs = this.$refs.tabs;
      let getStyle = getComputedStyle(tabs.children[0].children[0], null);
      let marginLeft = parseFloat(
        getStyle.marginLeft.substr(0, getStyle.marginLeft.length - 2)
      );
      let marginRight = parseFloat(
        getStyle.marginRight.substr(0, getStyle.marginRight.length - 2)
      );
      // 元素实际宽度 = 元素的宽度 + 外边距
      this.width =
        marginLeft + marginRight + tabs.children[0].children[0].offsetWidth;

      /**
       * 以下注释计算方式用于理解实现逻辑
       **/
      // // 可视区域能放入多少个元素 = 可视区域的宽度 / 子元素实际宽度
      // let num = tabs.offsetWidth / this.width

      // // 被遮挡tab元素的可见部分的宽度 = 可见区域的宽度 - (子元素实际宽度 * num转为整数)
      // this.unoccupied = tabs.offsetWidth - (this.width * parseInt(num))

      // 最终精简为取余（得数跟上面的计算是一样的）
      this.unoccupied = tabs.offsetWidth % this.width;
      // 计算相差数
      // 如果数字相差不大的话表示可视区域创建的tab肉眼看到是没有被遮挡的
      this.differ = this.width - this.unoccupied;
      // this.unoccupied和this.width比如相差1、2px，这时如果this.moveX为0，点击next肉眼是看不到有移动的。因为只移动了1、2px
      // 相差数小于10 unoccupied设置为单个tab的宽度
      this.unoccupied = this.differ < 10 ? this.width : this.unoccupied;
      // 转为整数
      this.tabsCount = parseInt(tabs.offsetWidth / this.width);
    });
  },
  methods: {
    add() {
      this.count++;
      this.actionName = `test${this.count}`;
    },

    /**
     * 切换tab标签页
     **/
    clickTab(name) {
      if (this.actionName !== name) {
        this.actionName = name;
      }
    },

    /**
     * 关闭tab标签页
     **/
    close(name, i) {
      let len = this.tabs.length;
      if (len > 1) {
        this.tabs.splice(i, 1);
        this.$nextTick(() => {
          // 关闭第0个标签，并且为选中状态的触发
          if (i === 0 && name === this.actionName) {
            this.clickTab(this.tabs[0].name);
          }
          // 关闭的标签为选中状态的触发
          else if (name === this.actionName) {
            this.clickTab(this.tabs[i - 1].name);
          }
          this.previous();
        });
      }
    },

    /**
     * 往右偏移
     **/
    next() {
      // scrollWidth获取不准确
      // 使用this.width * this.tabs.length计算出总长度
      let totalWidth = this.width * this.tabs.length;

      this.$nextTick(() => {
        let dom = this.$refs.tabs;

        // 可视区域 < 滚动区域（滚动区域大于可视区域才可以移动）
        // 移动距离 + 可视区域 = 滚动区域的宽度（上一次的宽度，当点击时才是实际宽度）< 滚动区域
        if (
          dom.clientWidth < totalWidth &&
          this.moveX + dom.clientWidth < totalWidth
        ) {
          let x = this.width - this.unoccupied;
          // this.moveX为0减去空余空间的宽度
          this.moveX += this.moveX ? this.width : x || this.width;

          if (this.moveX + dom.clientWidth > totalWidth) {
            this.moveX = this.moveX - this.width;
          }

          this.translateX(this.moveX);
        }
      });
    },

    /**
     * 往左偏移
     **/
    previous() {
      if (this.moveX > 0) {
        this.moveX -= this.width;
        this.translateX(this.moveX);
      }
    },

    /**
     * 开始移动dom
     **/
    translateX(x) {
      this.moveX = x < 0 ? 0 : x;
      this.$refs.tabs.children[0].style.transform = `translateX(-${this.moveX}px)`;
    },
  },
};
</script>

<style lang="scss" scoped>
.main-box {
  height: 500px;
  width: 500px;
  padding: 10px 20px 20px 20px;

  .main-box-tab {
    position: relative;
    padding: 10px 20px;
    overflow: hidden;

    & > i {
      position: absolute;
      cursor: pointer;
      bottom: 15px;

      &:nth-child(1) {
        left: 0;
      }

      &:nth-child(2) {
        right: 0;
      }
    }

    .main-box-tab-content {
      overflow: hidden;

      .main-box-tab-roll {
        transition: transform 0.5s;
        display: flex;
        align-items: center;

        div {
          flex-shrink: 0;
          cursor: pointer;
          width: 130px;
          /*width: 140px;*/
          height: 25px;
          margin: 0 5px;
          display: flex;
          align-items: center;
          justify-content: space-between;

          span,
          i {
            font-size: 12px;
          }

          span {
            margin-left: 10px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }

          i {
            margin-right: 10px;
          }
        }
      }
    }

    .tab-item {
      color: #cccccc;
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 0 1px 0 1px;
      border: 1px solid #052141;
    }

    .tab-item-action {
      color: #ffffff;
      background: rgba(0, 180, 255, 0.8);
      border-radius: 0 1px 0 1px;
      border: 1px solid #1e2088;
    }
  }

  .main-box-content {
    height: calc(100% - 70px);
    padding: 10px;
    border: 1px saddlebrown solid;
    background-size: 100% 100%;
  }
}
</style>
