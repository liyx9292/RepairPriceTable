<template>
  <div class="categorys" >
    <div class="categoryblock" v-if="!showTable">
      <div class="categorys-bar" v-for="(categorysArr, index) in categorys" :key="index">
        <!-- 一条4个选项 -->
        <div @click="selectSub(item, index, itx)"
          :class="['categorys-item', showSub[0] === index && showSub[1] === itx ? 'categorys-itemAct': '']" 
          v-for="(item, itx) in categorysArr" :key="itx">
          <img class="categorys-item-img" :src="item.image"/>
          <div class="categorys-item-text">{{item.name}}</div>
        </div>
        <!-- 二级菜单 -->
        <div class="categorys-sub" v-if="showSub[0] === index">
          <div class="subblocks">
            <div class="subitem" @click="selectTable(item)"
              v-for="(item, index) in subCategorys" :key="index">
              {{item.name}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 表格 -->
    <div class="tableView" v-if="showTable">
      <div class="tableTitle">
        {{selectSubtext}}价格明细表
      </div>
      <div class="table" v-html='tableContent' />
      <div class="tablebtn">返回</div>
    </div>
  </div>
</template>
<script>
import {GetCategorys, GetTable} from '../request/api'
export default {
  name: 'Category',
  data() {
    return {
      categorys: [],
      subCategorys: [],
      showSub: [-1, -1], // 行数 -1时不显示， 第二个参数是第几个
      selectSubtext: '',
      showTable: false,
      tableContent: '',
      pageData: {}
    }
  },
  methods: {
    selectSub(item,index, itx) {
      const selectItem = [index, itx]
      if (this.showSub[0] === selectItem[0] && this.showSub[1] === selectItem[1]) {
        this.showSub = [-1, -1]
        this.subCategorys = []
        return
      }
      this.showSub = selectItem
      this.subCategorys = item.category
    },
    selectTable(item) {
      this.showTable = true
      this.selectSubtext = item.name
      this.RequestTable(item.gplId)
    },
    RequestTable(id) {
      GetTable(id)
        .then(res => {
          this.tableContent = res.data.data
        })
    },
    handleArr(arr) {
      let length = arr.length
      const lastNum = length % 4
      this.spliceArr(arr, 0, lastNum)
    },
    spliceArr(arr, index, lastNum) {
      if (arr.length === lastNum) {
        this.categorys.push(arr)
      } else {
        const barArr = [arr[0], arr[1], arr[2], arr[3]]
        const nowArr = this.categorys
        nowArr[index] = barArr
        this.categorys = nowArr
        arr.splice(0, 4)
        this.spliceArr(arr, index + 1, lastNum)
      }
    },
    async Getlist() {
      const res = await GetCategorys()
      const array = res.data.data.data
      this.handleArr(array)
    }
  },
  mounted() {
    this.Getlist()
  },
}
</script>
<style lang="less" scoped>
.categorys {
  width: 100%;
  background: #fff;
  box-sizing: border-box;
  padding: 0 0.45rem;
  .categoryblock {
    width: 100%;
  }
  &-bar {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  &-item {
    display: inline-block;
    color: blue;
    box-sizing: border-box;
    padding: 0.5rem 0;
    width: 25%;
    &-img {
      width: 1.4rem;
      height: 1.4rem;
      display: block;
      margin: 0 auto;
    }
    &-text {
      color: #292D33;
      font-size: 0.36rem;
      text-align: center;
      margin-top: 0.2rem;
    }
  }
  &-itemAct {
    background: #f2f0f0;
  }
  // 子菜单
  &-sub {
    width: 100%;
    background: #f2f0f0;
    padding: 0 0.5rem;
    box-sizing: border-box;
    .subblocks {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      .subitem {
        width: 25%;
        height: 1.2rem;
        line-height: 1.2rem;
        text-align: center;
        color: #292D33;
        position: relative;
      }
      .subitem::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 100%;
        height: 2px;
        background: #fff;
      }
    }
  }
}
.tableView {
  width: 100%;
  height: 100vh;
  background: #fff;
  .tableTitle {
    font-size: 0.5rem;
    color: #292D33;
    text-align: center;
    margin-top: 0.5rem;
    margin-bottom: 0.8rem;
  }
  .tablebtn {
    width: 80%;
    height: 1rem;
    border-radius: 5px;
    color: #4592FD;
    border: 2px solid #4592FD;
    line-height: 1rem;
    text-align: center;
    margin: 0 auto;
    font-size: 0.4rem;
  }
}
</style>

