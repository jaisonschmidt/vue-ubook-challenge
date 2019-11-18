<style scoped lang="scss" src="./ContactEmpty.scss"></style>

<template>
  <div class="contact-empty">
    <div>
      <img src="@/assets/imgs/ic-book.svg" alt="Sem contatos">
    </div>
    <div class="contact-empty__message">
      Nenhum contato foi criado ainda.
    </div>
    <div>
      <button class="btn btn--lg btn__add">
        <span class="btn__ico">
          <span class="icon__el icon-ic-plus"></span>
        </span>
        <span class="btn__text">Criar contato</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactEmpty'
}
</script>
