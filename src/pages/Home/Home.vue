<template>
  <div>
    <Header v-bind:showBtnCreateContact="(contacts.length === 0) ? false : true" v-on:openModalNewContact="handleShowModalNewContact"  />
    <!-- showed when not have contacts -->
    <ContactEmpty v-if="contacts.length === 0" v-on:openModalNewContact="handleShowModalNewContact" />
    <!-- showed when have contacts -->
    <ContactDataTable v-on:openModalUpdateContact="handleShowModalUpdateContact" v-on:confirmDeleteContact="handleOpenConfirmDeleteContact" v-else />

    <Modal v-bind:title="(actualContact.key === null) ? 'Criar novo contato' : 'Editar contato'" v-bind:show="showModalNewContact">
      <ContactForm v-on:closeModalNewContact="handleHideModalNewContact" v-bind:contact="actualContact" />
    </Modal>

    <Modal title="Excluir contato" v-bind:show="showModalConfirmDeleteContact">
      <DeleteContact v-on:deleteContactCancel="handleDeleteContactCancel" v-on:deleteContactConfirm="handleDeleteContactConfirm" />
    </Modal>

  </div>
</template>

<script>
import Header from '@/features/structure/Header/Header'
import ContactEmpty from '@/features/contact/ContactEmpty/ContactEmpty'
import ContactDataTable from '@/features/contact/ContactDataTable/ContactDataTable'
import ContactForm from '@/features/contact/ContactForm/ContactForm'
import Modal from '@/features/structure/Modal/Modal'
import DeleteContact from '@/features/mdl-content/DeleteContact/DeleteContact'

const NEW_USER = { key: null, name: '', email: '', tel: '' }

export default {
  name: 'Home',
  components: {
    Header,
    Modal,
    ContactEmpty,
    ContactDataTable,
    ContactForm,
    DeleteContact
  },
  computed: {
    contacts () {
      return this.$store.getters.contacts
    }
  },
  data: () => ({
    showModalNewContact: false,
    showModalConfirmDeleteContact: false,
    actualContact: NEW_USER
  }),
  methods: {
    handleShowModalNewContact () {
      this.actualContact = NEW_USER
      this.showModalNewContact = true
    },
    handleHideModalNewContact () {
      this.showModalNewContact = false
    },
    handleShowModalUpdateContact (contact) {
      this.actualContact = contact
      this.showModalNewContact = true
    },
    handleOpenConfirmDeleteContact (contact) {
      this.actualContact = contact
      this.showModalConfirmDeleteContact = true
    },
    handleDeleteContactCancel () {
      this.actualContact = NEW_USER
      this.showModalConfirmDeleteContact = false
    },
    handleDeleteContactConfirm () {
      this.showModalConfirmDeleteContact = false
      this.$store.dispatch('deleteContactAction', this.actualContact)
    }
  }
}
</script>
