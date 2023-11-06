import { contactList } from './data.js';
import { findElement } from './utility.js';
import { getRndInteger } from './utility.js';
import { answers } from './data.js';
//aggiungere libreria per le date
const dt = luxon.DateTime;

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
      newMsgInput: null,
      searchInput: '',
      msgIndex: null,
      arrowIndex: null,
      sendBtn:false,
      showChat:false
    }
  },
  methods: {
    setContactIndex(ident) {
      const index = findElement(ident, this.contacts);
      this.activeContactIndex = index;
      this.showChat=true;
    },
    newMessage() {
      if (this.newMsgInput) {
        
        this.getActiveMsg.push(this.msgBuilder(this.newMsgInput, 'sent'));
        this.$nextTick(()=>{
          this.$refs.msg[this.$refs.msg.length - 1].scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        })

        setTimeout(this.autoAnswer, 1000)
      }
      this.newMsgInput = null;
      this.sendBtn=null;


    },
    autoAnswer() {
      const answer= answers[getRndInteger(0,9)]
      this.getActiveMsg.push(this.msgBuilder(answer, 'received'));
      this.$nextTick(()=>{
        this.$refs.msg[this.$refs.msg.length - 1].scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
      })
      
    },
    msgBuilder(str, status) {
      return {
        date: dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
        message: str,
        status: status
      }
    },
    findContact() {
      if (this.searchInput.length > 0) {
        //console.log(this.searchInput);
        const filteredArray = this.contacts.filter(el => el.name.contain(this.searchInput));
        return filteredArray
      }

    },
    deleteMsg(i) {
      if (this.getActiveMsg.length > 0) {
        this.getActiveMsg.splice(i, 1);
        this.msgIndex = null;
      } else {
        this.getActiveMsg.push('Non sono presenti messaggi')
        console.log(this.getActiveMsg);
      }

    },
    msgToggleDown(index) {
      if (this.msgIndex !== index) {
        this.msgIndex = index;
      } else {
        this.msgIndex = null;
      }


    },
    showArrow(index) {
      this.arrowIndex = index;
    },
    hideArrow() {
      this.arrowIndex = null
    }
  },
  computed: {
    getActiveContact() {
      return this.contacts[this.activeContactIndex]
    },
    getActiveMsg() {
      if (this.getActiveContact.messages.length > 0) {
        this.msgIndex = null;
        return this.getActiveContact.messages;
      }
    },
    filteredArray() {
      if (this.searchInput.length > 0) {
        //console.log(this.searchInput);
        return this.contacts.filter(el => el.name.toLowerCase().includes(this.searchInput.toLowerCase()));

      } else {
        return this.contacts
      }
    },
    showSendBtn(){
      if (this.newMsgInput) {
        this.sendBtn=true;
      }else{
        this.sendBtn=false;
      }
    }

  },
  mounted(){

  }
}).mount('#app');


//console.log(contactList)