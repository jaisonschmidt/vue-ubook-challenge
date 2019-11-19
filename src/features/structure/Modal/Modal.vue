<style scoped lang="scss" src="./Modal.scss"></style>

<template>
  <div role="dialog" class="modal" :style="{display: show ? 'flex' : 'none'}">
    <div class="modal__wrapper">
      <div class="modal__header">
        {{ title }}
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    show: Boolean,
    title: String
  }
}
</script>
