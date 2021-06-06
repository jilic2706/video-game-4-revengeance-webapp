<template>
  <div
    v-for="item in items.slice(0,3)"
    :key="item.id"
    id="item-list"
  >
    <item :item="item" />
  </div>
</template>

<script>
import Item from "@/components/Item"
export default {
    props: ['items'],
    components: {
        Item
    }
}
</script>

<style scoped>
    
</style>