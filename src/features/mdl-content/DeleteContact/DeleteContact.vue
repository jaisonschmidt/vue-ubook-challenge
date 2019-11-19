<style scoped lang="scss" src="./DeleteContact.scss"></style>

<template>
  <div class="delete-contact">
    <div class="delete-contact__wrapper">
      Deseja realmente excluir o contato?
    </div>
    <div class="form__action">
      <button
        type="button"
        class="btn btn__link"
        @click="handleCloseModalDeleteContact"
      >
        Cancelar
      </button>
      <button
        type="submit"
        class="btn btn__form"
        @click="handleConfirmModalDeleteContact"
      >
        Excluir
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeleteContact',
  methods: {
    handleCloseModalDeleteContact () {
      this.$emit('deleteContactCancel')
    },
    handleConfirmModalDeleteContact () {
      this.$emit('deleteContactConfirm')
    }
  }
}
</script>
