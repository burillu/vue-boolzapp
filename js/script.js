import {contactList} from './data.js';

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
        }
      }
    },
    methods:{
      
    }
  }).mount('#app');
  
  
  //console.log(contactList)