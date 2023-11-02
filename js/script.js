import {contactList} from './data.js';

const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        contacts: contactList
      }
    },
    methods:{
      
    }
  }).mount('#app');
  
  
  //console.log(contactList)