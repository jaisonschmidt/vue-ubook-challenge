
<style scoped lang="scss" src="./ContactForm.scss"></style>

<template>
  <form class="contact-form ">
    <div class="contact-form__line">
      <label for="txtName" class="contact-form__label">Nome</label>
      <input type="text" id="txtName"  class="contact-form__input" required autofocus>
    </div>
    <div class="contact-form__line">
      <label for="txtEmail" class="contact-form__label">E-mail</label>
      <input type="email" id="txtEmail" class="contact-form__input">
    </div>
    <div class="contact-form__line">
      <label for="txtTel" class="contact-form__label">Telefone</label>
      <input type="tel" id="txtTel" class="contact-form__input">
    </div>
  </form>
</template>

<script>
export default {
  name: 'ContactForm'
}
</script>
