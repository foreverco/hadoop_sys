<template>
  <div>
    <el-dialog
      :title="data.dialogTitleName"
      :visible.sync="data.dialog_stock_flag"
      @close="closeDialog"
      @opened="openDialog"
    >
      <div slot="footer" class="dialog-footer">
        <el-button type="success" size="mini" @click="submit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { reactive, watch } from "@vue/composition-api";
export default {
  name: "Insctdialog",
  props: {
    flag: {
      type: Boolean,
      default: false
    },
    editData: {
      type: Object,
      default: () => {}
    }
  },
  setup(props, { emit }) {
    /* data数据 */
    const data = reactive({
      // 弹框标题
      dialogTitleName: "虫情预警",
      // 弹框状态
      dialog_stock_flag: false,
      editInit: {}
    });
    watch(
      () => props.flag,
      newVale => (data.dialog_stock_flag = newVale)
    );
    /* methods */
    const close = () => {
      data.dialog_stock_flag = false;
      emit("update:flag", false);
    };
    const closeDialog = () => {
      close();
    };
    // 打开弹窗
    const openDialog = () => {
      // console.log(data.form);
      // 初始值处理
    };
    const submit = () => {
      close();
    };

    return {
      data,
      /* methods */
      openDialog,
      closeDialog,
      submit
    };
  }
};
</script>
<style lang="scss" scoped></style>
