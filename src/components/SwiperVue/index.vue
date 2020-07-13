<template>
  <div class="swiper-wrap">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(item, index) in sevenwether" :key="index">
        <ul
          class="daysMsg"
          :class="{ boxactive: activeIndex == index }"
          @click="changetqBox(index)"
        >
          <li>
            <span>{{ item.date }}</span>
            <!-- <span>{{ item.week }}</span> -->
          </li>
          <li>
            <span>{{ item.week }}</span>
          </li>
          <li>
            <span v-if="item.nowTem"
              ><b style="font-size:25px">{{ item.nowTem.tem.slice(0, 2) }}</b
              ><sup>℃</sup></span
            >
            <i style="font-size:25px" class="el-icon-upload"></i>
          </li>
          <li>
            <span style="color:#face45">{{ item.wea }}</span>
          </li>
          <li>
            <span>{{ item.tem1 }}</span>
            <span>/</span>
            <span>{{ item.tem2 }}</span>
          </li>
          <li>
            <span>{{ item.win[0] }} {{ item.win_speed }}</span>
          </li>
          <li>
            <span>{{ item.air_level }}</span>
          </li>
          <div class="botline" v-if="activeIndex == index"></div>
        </ul>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "swiper-example-navigation",
  title: "Navigation",
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    sevenwether: {
      type: Array,
      default: () => []
    },
    echartsTem: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    sevenwether: {
      handler(newVal) {
        // console.log(newVal);
        this.nowTem = newVal[0].hours.filter(item => {
          let nowTime = Number(new Date().getHours());
          let allTime = Number(item.day.slice(3, 5));
          return Math.abs(nowTime - allTime) < 2;
        })[0];
        this.sevenwether[0].nowTem = this.nowTem;
        // console.log(this.nowTem);
        // console.log(this.sevenwether[0]);
        // this.echartsTem = this.sevenwether[0];
        // console.log(this.echartsTem);
        this.$emit("update:echartsTem", this.sevenwether[0]);
      },
      deep: true
    }
  },
  data() {
    return {
      activeIndex: 0,
      nowTem: {},
      // echartsTem: {},
      tqBoxList: [
        {
          date: "06/19",
          week: "周五",
          cdate: "农历四月初八",
          tem: "18",
          type: "多云(实时)",
          hight: "22度",
          low: "28度",
          speed: "东北微风",
          level: "空气优"
        },
        {
          date: "06/19",
          week: "周五",
          cdate: "农历四月初八",
          tem: "18",
          type: "多云(实时)",
          hight: "22度",
          low: "28度",
          speed: "东北微风",
          level: "空气优"
        },
        {
          date: "06/19",
          week: "周五",
          cdate: "农历四月初八",
          tem: "18",
          type: "多云(实时)",
          hight: "22度",
          low: "28度",
          speed: "东北微风",
          level: "空气优"
        },
        {
          date: "06/19",
          week: "周五",
          cdate: "农历四月初八",
          tem: "18",
          type: "多云(实时)",
          hight: "22度",
          low: "28度",
          speed: "东北微风",
          level: "空气优"
        },
        {
          date: "06/19",
          week: "周五",
          cdate: "农历四月初八",
          tem: "18",
          type: "多云(实时)",
          hight: "22度",
          low: "28度",
          speed: "东北微风",
          level: "空气优"
        }
      ],
      swiperOption: {
        slidesPerView: 4,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  methods: {
    changetqBox(index) {
      this.activeIndex = index;
      // console.log(this.activeIndex);
      // console.log(this.sevenwether);
      this.$emit("update:echartsTem", this.sevenwether[index]);
      // console.log(this.echartsTem.date);
    }
  }
};
</script>

<style lang="scss">
.swiper-wrap {
  // border: 1px solid red;
  @include webkit(box-sizing, border-box);
  width: 100%;
  padding: 0 10px;
  &:hover {
    .swiper-button-prev,
    .swiper-button-next {
      // background: red;
      opacity: 0.5 !important;
    }
  }

  .daysMsg {
    @include webkit(box-sizing, border-box);
    // padding: 20px;
    width: 180px;
    height: 250px;
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: auto;
    position: relative;
    // .botline {
    //   border-bottom: 5px solid $maincolor;
    //   width: 100%;
    //   position: absolute;
    //   bottom: -5px;
    //   left: 0;
    //   z-index: 1001;
    // }
    &.boxactive {
      border: 1px solid #00b6a880 !important;
      @include webkit(box-shadow, inset 0 0 6px 0 $maincolor);
      background: #00000050;
    }
    &:hover {
      cursor: pointer;
      border: 1px solid #ffffff50;
      @include webkit(box-shadow, inset 0 0 6px 0 #ffffff50);
      background: #00000020;
    }
    li {
      width: 100%;
      // border: 1px solid red;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      letter-spacing: 5px;
      span {
        font-size: 12px;
      }
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    // background: red;
    opacity: 0;
    z-index: 101;
  }
}
</style>
