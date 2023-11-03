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
      activeContact(ident){
        const index= findElement(ident,this.contacts);
        this.activeContactIndex= index;
      }
    },
    computed:{

    }
  }).mount('#app');
  
  
  //console.log(contactList)