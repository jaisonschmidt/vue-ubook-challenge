
<style scoped lang="scss" src="./ContactForm.scss"></style>

<template>
  <form class="contact-form" @submit="handleSubmitForm">
    <div class="contact-form__body">
      <div class="contact-form__line">
        <label for="txtName" class="contact-form__label">Nome</label>
        <input type="text" id="txtName" class="contact-form__input" v-model="currentUser.name" maxlength="120" required>
      </div>
      <div class="contact-form__line">
        <label for="txtEmail" class="contact-form__label">E-mail</label>
        <input type="email" id="txtEmail" class="contact-form__input" v-model="currentUser.email" maxlength="150">
      </div>
      <div class="contact-form__line contact-form__line--tel">
        <label for="txtTel" class="contact-form__label">Telefone</label>
        <input type="tel" id="txtTel" class="contact-form__input" v-model="currentUser.tel" maxlength="15">
      </div>
    </div>
    <div class="contact-form__action">
      <button type="button" class="btn btn__link" @click="handleCloseModalContact">Cancelar</button>
      <button type="submit" class="btn btn__form" v-bind:disabled="currentUser.name == '' && currentUser.email == '' && currentUser.tel == ''">Salvar</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'ContactForm',
  props: {
    contact: Object
  },
  computed: {
    currentUser () {
      return this.contact
    }
  },
  methods: {
    handleCloseModalContact () {
      this.$emit('closeModalNewContact')
    },
    handleSubmitForm (e) {
      e.preventDefault()

      if (this.currentUser.key === null) {
        this.$store.dispatch('addContactAction', { ...this.currentUser })
      } else {
        this.$store.dispatch('updateContactAction', { ...this.currentUser })
      }

      this.handleCloseModalContact()
    }
  }
}
</script>
