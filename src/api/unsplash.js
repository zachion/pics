import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 3bdd2155e12ef7fce68a7f3bc783707a77f35c327de897ac7988899d8c8747fb'
  }
});
