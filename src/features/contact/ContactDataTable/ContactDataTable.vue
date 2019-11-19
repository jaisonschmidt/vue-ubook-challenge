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
    <div class="table-body" is="transition-group" name="list">
      <div class="contact-item" v-for="(contact) in contacts" :key="contact.key">
        <div class="col">
          <div class="col-initial">
            <span class="letter" :class="`letter--${contact.name[0].toUpperCase()}`">{{contact.name[0]}}</span>
          </div>
          <div class="col-name">{{contact.name}}</div>
          <div class="col-email">{{contact.email}}</div>
          <div class="col-phone">{{contact.tel}}</div>
          <div class="col-action">
            <button type="button" class="btn__action" title="Editar contato" @click="() => handleClickUpdateContact(contact)">
              <span class="icon-ic-edit"></span>
            </button>
            <button type="button" class="btn__action" title="Excluir contato" @click="() => handleClickDeleteContact(contact)">
              <span class="icon-ic-delete"></span>
            </button>
          </div>
        </div>
      </div><!-- .contact-item -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactDataTable',
  methods: {
    handleClickUpdateContact (contact) {
      this.$emit('openModalUpdateContact', { ...contact })
    },
    handleClickDeleteContact (contact) {
      this.$emit('confirmDeleteContact', { ...contact })
    }
  },
  computed: {
    contacts () {
      return this.$store.getters.contacts.filter(contact => {
        return [contact.name, contact.email, contact.tel].join('|').toUpperCase().includes(this.$store.getters.filterText.toUpperCase())
      })
    }
  }
}
</script>
