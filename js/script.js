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
        avatar: 'https://www.shutterstock.com/image-vector/young-man-avatar-character-260nw-661669825.jpg',

      },
      activeContactIndex: 0,
      newMsgInput: '',
      searchInput:'',
      msgIndex:null
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
    },
    findContact(){
      if(this.searchInput.length>0){
        //console.log(this.searchInput);
        const filteredArray= this.contacts.filter(el=>el.name.contain(this.searchInput));
        return filteredArray
      }
      
    },
    deleteMsg(i){
      this.getActiveMsg.splice(i,1);
      this.msgIndex=null;
    },
    msgToggleDown(index){
      if (this.message !== index) {
        this.msgIndex=index;
      } else {
        this.msgIndex=null;
      }
      
      
    }
  },
  computed: {
    getActiveContact() {
      return this.contacts[this.activeContactIndex]
    },
    getActiveMsg() {
      this.msgIndex=null;
      return this.getActiveContact.messages;
    },
    filteredArray(){
      if(this.searchInput.length>0){
        //console.log(this.searchInput);
        return this.contacts.filter(el=>el.name.toLowerCase().includes(this.searchInput.toLowerCase()));
        
    } else{
      return this.contacts
    }
  }
}
}).mount('#app');


//console.log(contactList)