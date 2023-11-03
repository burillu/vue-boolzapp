import {contactList} from './data.js';
import { findElement } from './utility.js';

const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        contacts: contactList,
        user:{
          id: 'user',
        name: 'Michele',
        avatar: 'img/avatar_1.jpg',
        
        },
        activeContactIndex:0
      }
    },
    methods:{
      setContactIndex(ident){
        const index= findElement(ident,this.contacts);
        this.activeContactIndex= index;
      }
    },
    computed:{
      getActiveContact(){
        return this.contacts[this.activeContactIndex]
      },
      getActiveMsg(){
        return this.getActiveContact.messages;
      }
    }
  }).mount('#app');
  
  
  //console.log(contactList)