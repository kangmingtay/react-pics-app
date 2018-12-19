import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ef645e6f761111258c4c5115788c27b1ca0fa38a4c624bb329b4b8babaf5a399' 
    }
});