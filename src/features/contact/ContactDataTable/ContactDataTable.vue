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
    <div class="contact-item" v-for="(contact, key) in contacts" :key="key">
      <div class="col">
        <div class="col-initial">
          <span class="letter" :class="`letter--${contact.name[0].toUpperCase()}`">{{contact.name[0]}}</span>
        </div>
        <div class="col-name">{{contact.name}}</div>
        <div class="col-email">{{contact.email}}</div>
        <div class="col-phone">{{contact.tel}}</div>
        <div class="col-action">
          <button type="button" class="btn__action" title="Editar contato" @click="() => handleClickUpdateContact(key, {...contact})">
            <span class="icon-ic-edit"></span>
          </button>
          <button type="button" class="btn__action" title="Excluir contato">
            <span class="icon-ic-delete"></span>
          </button>
        </div>
      </div>
    </div><!-- .contact-item -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ContactDataTable',
  methods: {
    handleClickUpdateContact (key, contact) {
      this.$emit('openModalUpdateContact', { key, ...contact })
    }
  },
  computed: {
    ...mapGetters([
      'contacts'
    ])
  }
}
</script>
