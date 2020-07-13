<template>
  <div id="home">
    <!-- {{ sevenwether }} -->
    <el-select
      class="adressSel"
      v-model="value"
      placeholder="请选择"
      @change="setMapCenter(value)"
    >
      <el-option-group
        v-for="group in options"
        :key="group.label"
        :label="group.label"
      >
        <el-option
          v-for="item in group.options"
          :key="item.value"
          :label="item.label"
          :value="item.label"
        >
        </el-option>
      </el-option-group>
    </el-select>
    <Amap :pointList="pointList" @lgla="aaa" ref="amap"></Amap>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Amap from "../../components/Amap";
export default {
  name: "Home",
  components: {
    Amap
  },
  data() {
    return {
      pointList: [
        { lg: "114.039128", la: "41.895942" },
        { lg: "114.039128", la: "41.9" }
      ],
      options: [
        {
          label: "热门城市",
          options: [
            {
              value: "Shanghai",
              label: "上海"
            },
            {
              value: "Beijing",
              label: "北京"
            }
          ]
        },
        {
          label: "城市名",
          options: [
            {
              value: "Chengdu",
              label: "成都"
            },
            {
              value: "Shenzhen",
              label: "深圳"
            },
            {
              value: "Guangzhou",
              label: "广州"
            },
            {
              value: "Dalian",
              label: "大连"
            },
            {
              value: "Jiangning",
              label: "江宁陆郎"
            },
            {
              value: "Huade",
              label: "化德县"
            }
          ]
        }
      ],
      value: ""
    };
  },
  computed: {
    ...mapState({
      sevenwether: state => state.insect.sevenwether
    })
  },
  methods: {
    aaa(data) {
      console.log(data);
    },
    setMapCenter(data) {
      // console.log(data);
      this.$refs.amap.setMapCenter(data);
    }
  }
};
</script>
<style lang="scss" scoped>
#home {
  height: 100%;
  // border: 1px solid red;
  position: relative;
  .adressSel {
    position: absolute;
    right: 0;
    z-index: 104;
  }
}
</style>
