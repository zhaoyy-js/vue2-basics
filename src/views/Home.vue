<template>
  <section>
    <div class="wraps">
      <h1>排行榜</h1>
      <div class="wraps-box">
        <img class="picture" src="../assets/girl.jpeg" alt="" />
      </div>
      <div class="wraps-header">
        <span>109</span>
        <span>locas Yan</span>
        <span>12</span>
      </div>
      <div class="wraps-ranking">
        <span>排名</span>
        <span>评分</span>
      </div>
      <div class="wraps-between" v-for="item in 6">
        <span>{{ item }}</span>
        <div>
          <img src="../assets/girl.jpeg" alt="" />
          <span>yasuo</span>
        </div>
        <span>48</span>
      </div>
    </div>

    <div class="productStar">
      <h1>积星规则</h1>
      <div class="productStar-btn">
        <span
          v-for="(item, index) in 5"
          :class="{ active: index === activeIndex }"
          @mouseover="activeIndex = index"
          >{{ item }}</span
        >
      </div>
      <img
        class="productStar-picture"
        :style="retSty"
        :src="mouseoverIndex"
        alt=""
      />
    </div>

    <div>
      {{ timeDemo }}
    </div>
  </section>
</template>

<script>
import Moment from "moment";
export default {
  name: "Home",
  data() {
    return {
      activeIndex: 0,
      timeDemo: Moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
    };
  },

  computed: {
    mouseoverIndex() {
      return require(`../assets/${this.activeIndex + 1}.jpg`);
    },
    retSty() {
      const { activeIndex } = this;
      let obj;
      switch (activeIndex) {
        case 0:
          obj = {
            width: "792px",
            height: "389px",
          };
          break;
        case 1:
          obj = {
            width: "769px",
            height: "655px",
          };
          break;
        case 2:
          obj = {
            width: "783px",
            height: "457px",
          };
          break;
        case 3:
          obj = {
            width: "763px",
            height: "313px",
          };
          break;
        case 4:
          obj = {
            width: "942px",
            height: "367px",
            position: "absolute",
            top: "128px",
          };
          break;
      }
      return obj;
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  background: gray;
  padding: 20px;

  display: flex;
  justify-content: space-between;
}
.wraps {
  width: 150px;
  height: 100%;
  border-radius: 20px;
  background: white;
  padding: 15px 12px;

  h1 {
    text-align: center;
    padding: 0;
    margin: 0;
  }

  &-box {
    text-align: center;
    margin-top: 10px;
    .picture {
      width: 100px;
      height: 100px;
      object-fit: contain;
      border-radius: 50%;
    }
  }

  &-header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid gray;

    span:nth-child(1) {
      color: blue;
    }
    span:nth-child(3) {
      color: blue;
    }
  }

  &-ranking {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid gray;
    padding-top: 20px;
    span {
      color: blue;
    }
  }

  &-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid gray;

    div {
      display: flex;
      align-items: center;
      padding: 10px 0;
      img {
        width: 30px;
        height: 30px;
        object-fit: contain;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
  }
}

.productStar {
  width: 760px;
  height: 80px;
  border-radius: 20px;
  background: white;
  padding: 20px;
  position: relative;

  h1 {
    margin: 0;
    padding: 0;
    text-align: center;
  }

  &-btn {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 10px;

    .active {
      background: blue;
      border-radius: 20px;
      color: white;
    }

    span {
      flex: 0.2;
      display: inline-block;
      text-align: center;
      padding: 10px;
      position: relative;
      cursor: pointer;

      &::before {
        position: absolute;
        right: 0;
        top: 0;
        content: "";
        height: 100%;
        width: 1px;

        background-color: gray;
      }
    }
  }

  &-picture {
    object-fit: contain;
  }
}
</style>
