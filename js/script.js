import { contactList } from './data.js';
import { findElement } from './utility.js';

const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      contacts: contactList,
      user: {
        id: 'user',
        name: 'Michele',
        avatar: 'img/avatar_1.jpg',

      },
      activeContactIndex: 0,
      newMsgInput: ''
    }
  },
  methods: {
    setContactIndex(ident) {
      const index = findElement(ident, this.contacts);
      this.activeContactIndex = index;
    },
    newMessage() {

      this.getActiveMsg.push(this.msgBuilder(this.newMsgInput, 'sent'));
      this.newMsgInput = '';
      setTimeout(this.autoAnswer, 1000)

    },
    autoAnswer() {
      this.getActiveMsg.push(this.msgBuilder('ok', 'received'))
    },
    msgBuilder(str, status) {
      return {
        date: '02/11/2023 15:30:55',
        message: str,
        status: status
      }
    }
  },
  computed: {
    getActiveContact() {
      return this.contacts[this.activeContactIndex]
    },
    getActiveMsg() {
      return this.getActiveContact.messages;
    }
  }
}).mount('#app');


//console.log(contactList)