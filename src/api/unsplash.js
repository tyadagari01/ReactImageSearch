import axios from 'axios';

export  default axios.create({
   baseURL: 'https://api.unsplash.com',
   headers: {
       Authorization: 'Client-ID 6e84d33113e68524316f0c276a9d5c538d4bd7394d7fe5abc5dfe031af4106cf'
   }
});