<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li v-for="(item,index) in goods" :key="index" class="menu_item">
            <span class="text border-1px">{{item.name}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'goods',
  data() {
    return {
      goods: [
        {name: '小笼包'},
        {name: '水饺'},
        {name: '灌汤包'},
        {name: '白粥'}
      ]
    }
  }
}
</script>

<style lang="stylus">
  .goods {
    display: flex;
  }
</style>


