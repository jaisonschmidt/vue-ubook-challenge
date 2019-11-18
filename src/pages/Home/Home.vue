<template>
  <div>
    <Header />
    <ContactEmpty />
    <ContactDataTable />
    <Modal title="Criar novo contato" v-bind:show="false">
      <ContactForm />
    </Modal>
  </div>
</template>

<script>
import Header from '@/features/structure/Header/Header'
import Modal from '../../features/structure/Modal/Modal'
import ContactEmpty from '@/features/contact/ContactEmpty/ContactEmpty'
import ContactDataTable from '@/features/contact/ContactDataTable/ContactDataTable'
import ContactForm from '@/features/contact/ContactForm/ContactForm'

export default {
  name: 'Home',
  components: {
    Header,
    Modal,
    ContactEmpty,
    ContactDataTable,
    ContactForm
  }
}
</script>
