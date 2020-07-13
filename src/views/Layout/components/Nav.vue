<template>
  <div class="header">
    <div class="title">智慧农业大数据分析系统</div>
    <ul class="navList">
      <template v-for="(item, index) in navList">
        <li
          :key="index"
          :class="item.class_true ? 'active' : ''"
          v-if="!item.hidden"
        >
          <router-link :to="item.path">
            <span class="navTxt">{{ item.meta.title }}</span>
            <div id="line"></div>
          </router-link>
          <dl v-if="item.children">
            <dt v-for="(i, index1) in item.children" :key="index1">
              <router-link :to="i.path">
                <span class="navTxt"> {{ i.meta.title }}</span>
              </router-link>
            </dt>
          </dl>
        </li>
      </template>
    </ul>
    <div class="userMsg">
      <div class="block">
        <el-avatar shape="circle" :size="20" :src="squareUrl"></el-avatar>
      </div>
      <div class="userName">forever</div>
      <div>
        |
      </div>
      <div class="logout" @click="logout">
        <span>退出</span>
        <i class="el-icon-remove"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      navIndex: 0,
      squareUrl:
        "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      navList: []
    };
  },
  mounted() {
    this.initActive();
  },
  watch: {
    $route() {
      this.initActive();
      // console.log(this.navList);
    }
  },
  methods: {
    initActive() {
      let navListArr = this.$router.options.routes[0].children;
      // console.log(this.navList);
      // 当前路由name
      let curRouteName = this.$route.name;
      // console.log(curRouteName);
      // 父级路由path
      let parentPath = "";
      navListArr.map(item => {
        // console.log(item);
        if (item.children) {
          item.children.map(j => {
            if (j.name === curRouteName) {
              parentPath = item.path;
            }
          });
        } else {
          // 没有子级，直接判断父级name
          if (item.name === curRouteName) {
            parentPath = item.path;
          }
        }
      });
      this.navList = this.$router.options.routes[0].children;
      this.navList.forEach(item => {
        // 判断父级path等于菜单数据path字段，设置样式选中
        // console.log(item.path);
        // item.class_true = false;
        if (parentPath === item.path) {
          item.class_true = true;
          // console.log(1);
        } else {
          item.class_true = false;
          // console.log(2);
        }
        // console.log(this.navList);
      });
      // console.log(this.navList);
    },
    logout() {
      this.$confirm("确认退出系统?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "退出成功"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消退出"
          });
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.header {
  background: $mainbgF20;
  margin-bottom: 10px;
  height: $NavHeight;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .title {
    font-size: 30px;
    margin-left: 35px;
  }
  .navList {
    height: 100%;
    // margin: 0;
    // border: 1px solid red;
    margin-left: -153px !important;
    li {
      float: left;
      // border: 1px solid blue;
      height: 100%;
      position: relative;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      // width: 130px;
      margin-left: 12px;
      margin-right: 12px;
      &.active {
        background-image: linear-gradient(#00b6a810, #00b6a850);
        #line {
          width: 100%;
          opacity: 1;
        }
      }
      &:hover {
        // background: #81b25b20;
        cursor: pointer;
        dl {
          dt {
            height: 50px;
            line-height: 50px;

            // opacity: 1;
          }
        }
        > a {
          // color: $maincolor;
          background-image: linear-gradient(#00b6a810, #00b6a850);
          span {
            transform: translateY(-5px);
          }
        }
        #line {
          width: 100%;
          opacity: 1;
        }
      }
      > a {
        color: #ffffff;
        text-decoration: none;
        display: inline-block;
        height: 50px;
        // font-weight: bold;
        padding: 0 15px;
        box-sizing: content-box;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        height: 100%;
        span {
          transition: all 0.2s linear;
        }
        #line {
          width: 0px;
          opacity: 0;
          height: 4px;
          border-radius: 2px;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          background-color: $maincolor;
          margin: 0 auto;
          transition: all 0.6s ease;
        }
        &:hover {
          text-decoration: none;
        }
        .navTxt {
          display: inline-block;
          width: 100%;
          font-size: 21px;
          text-align: center;
        }
      }
      dl {
        position: absolute;
        padding: 0;
        margin: 0;
        width: 100%;
        top: $NavHeight;
        z-index: 101;
        dt {
          background: $maincolor;
          text-align: center;
          height: 0;
          padding: 0;
          margin: 0;
          // opacity: 0;
          font-size: 18px;
          transition: all 0.8s ease;
          // border: 1px solid blue;
          overflow: hidden;
          // &:hover {
          //   background: $sencondcolor;
          // }
          > a {
            text-decoration: none;
            transition: all 0.5s ease;
            &:hover {
              background: #00000010;
              display: inline-block;
              width: 100%;
              height: 100%;
              transform: translateX(5px);
              > span {
                // color: red;
              }
            }
          }
        }
      }
    }
  }
  .userMsg {
    width: 13%;
    margin-right: 35px;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    > div {
      // border: 1px solid red;
      height: 100%;
      display: flex;
      align-items: center;
    }
    .userName {
      font-size: 16px;
      // color: red;
    }
    .logout {
      // border-left: 1px solid #ccc;
      // padding: 5px;
      &:hover {
        cursor: pointer;
        span,
        i {
          color: $maincolor;
        }
      }
      span {
        // border: 1px solid red;
      }
      i {
        // border: 1px solid red;
        font-size: 22px;
        margin: 0 5px;
        margin-bottom: -5px;
      }
    }
  }
}
</style>
