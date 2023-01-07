<template>
  <div class="pagination">
    <button :disabled="pageNo === 1" @click="$emit('getPageNo', pageNo - 1)">上一页</button>
    <button v-if="startNumAndEndNum.start > 1" @click="$emit('getPageNo', 1)">1</button>
    <button v-if="startNumAndEndNum.start > 2">···</button>

    <button v-for="(page, index) in startNumAndEndNum.pageList" :key="index" :class="{ active: page === pageNo }" @click="$emit('getPageNo', page)">
      {{ page }}
    </button>

    <button v-if="startNumAndEndNum.end < totalPage - 1">···</button>
    <button v-if="startNumAndEndNum.end < totalPage" @click="$emit('getPageNo', totalPage)">{{ totalPage }}</button>
    <button :disabled="pageNo === totalPage" @click="$emit('getPageNo', pageNo + 1)">下一页</button>

    <button style="margin-left: 30px; padding: 0 10px">共{{ total }}条结果</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pageNo", "pageSize", "total", "continues"],
  computed: {
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    startNumAndEndNum() {
      let start = 0;
      let end = 0;
      if (this.continues > this.total) {
        start = 1;
        end = this.totalPage;
      } else {
        let gap = Math.floor(this.continues / 2);
        start = this.pageNo - gap;
        end = this.pageNo + gap;
        if (start < 1) {
          start = 1;
          end = this.continues;
        }
        if (end > this.totalPage) {
          end = this.totalPage;
          start = this.totalPage - this.continues + 1;
        }
      }
      let pageList = [];
      for (let i = 0; i < end - start + 1; i++) {
        pageList.push(start + i);
      }
      return { start, end, pageList };
    },
  },
  methods: {
    switchPage() {
      console.log("sdad");
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #e1251b;
      color: #fff;
    }
  }
}
</style>
