
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
        <label for="txtTel" class="contact-form__label">Telefone {{currentUser.tel}}</label>
        <the-mask id="txtTel" class="contact-form__input" v-model="currentUser.tel" v-bind:masked="true" type="tel" :mask="['(##) ####-####', '(##) #####-####']" maxlength="15" />
      </div>
    </div>
    <div class="form__action">
      <button type="button" class="btn btn__link" @click="handleCloseModalContact">Cancelar</button>
      <button type="submit" class="btn btn__form" v-bind:disabled="currentUser.name == '' && currentUser.email == '' && currentUser.tel == ''">Salvar</button>
    </div>
  </form>
</template>

<script>
import { TheMask } from 'vue-the-mask'

export default {
  name: 'ContactForm',
  components: {
    TheMask
  },
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

      // melhorar a criacao de contato vario
      this.currentUser.key = null
      this.currentUser.name = ''
      this.currentUser.email = ''
      this.currentUser.tel = ''

      this.handleCloseModalContact()
    }
  }
}
</script>
