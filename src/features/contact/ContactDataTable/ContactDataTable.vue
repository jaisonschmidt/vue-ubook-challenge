<style scoped lang="scss" src="./ContactDataTable.scss"></style>

<template>
  <div class="contact-data-table">
    <div class="header">
      <div class="col">
        <div class="col-initial"></div>
        <div class="col-name">Contatos</div>
        <div class="col-email">E-mail</div>
        <div class="col-phone">Telefone</div>
        <div class="col-action"></div>
      </div>
    </div><!-- .header -->
    <div class="contact-item">
      <div class="col">
        <div class="col-initial">
          <span class="letter letter--A">A</span>
        </div>
        <div class="col-name">Alana</div>
        <div class="col-email">jaisonschmidt@gmail.com</div>
        <div class="col-phone">54 9 99776648</div>
        <div class="col-action">
          <button type="button" class="btn__action">
            <span class="icon-ic-edit"></span>
          </button>
          <button type="button" class="btn__action">
            <span class="icon-ic-delete"></span>
          </button>
        </div>
      </div>
    </div><!-- .contact-item -->
  </div>
</template>

<script>
export default {
  name: 'ContactDataTable'
}
</script>
