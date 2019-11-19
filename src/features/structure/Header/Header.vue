<style scoped lang="scss" src="./Header.scss"></style>

<template>
  <header class="header">
    <div class="logo__wrapper">
      <div>
        <img src="../../../assets/imgs/ic-logo.svg" class="header__logo" alt="UBook Logo">
      </div>
      <div v-if="showBtnCreateContact">
        <button class="btn btn__add" @click="handleClickNewContact">
          <span class="btn__ico">
            <span class="icon__el icon-ic-plus"></span>
          </span>
          <span class="btn__text">Criar contato</span>
        </button>
      </div>
    </div><!-- .logo__wrapper -->
    <div class="search__wrapper">
      <form class="search__form">
        <input class="input input__search" type="search" name="" placeholder="Buscar...">
        <button type="submit" class="search__btn-submit">
          <span class="icon-ic-search"></span>
        </button>
      </form>
    </div><!-- .search__wrapper -->
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    showBtnCreateContact: Boolean
  },
  methods: {
    handleClickNewContact () {
      this.$emit('openModalNewContact')
    }
  }
}
</script>
