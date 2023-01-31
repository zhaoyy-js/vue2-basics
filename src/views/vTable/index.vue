<template>
  <section>
    <el-table ref="filterTable" :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column
        prop="tag"
        label="标签"
        width="100"
        filter-placement="bottom-end"
      >
        <template slot="header">
          <el-popover placement="bottom" width="200" trigger="click">
            <div slot="reference">
              <span> 标签 </span>
              <i class="el-icon-search"></i>
            </div>
            <searchForm @search="search({ tag: $event })"></searchForm>
          </el-popover>
        </template>
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.tag === '家' ? 'primary' : 'success'"
            disable-transitions
            >{{ scope.row.tag }}</el-tag
          >
        </template>
      </el-table-column>
    </el-table>
  </section>
</template>

<script>
import searchForm from "./searchForm.vue";
export default {
  name: "vTable",
  components: {
    searchForm,
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          tag: "家",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          tag: "公司",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          tag: "家",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          tag: "公司",
        },
      ],
      content: "adf",
    };
  },
  methods: {
    search(val) {
      console.log(val);
    },
  },
};
</script>

<style lang="scss" scoped></style>
