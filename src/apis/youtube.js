import axios from 'axios';


const KEY = 'AIzaSyCKCErClnmfUfU603eXZK8po4oI-8Gains'

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
       part: 'snippet',
       maxResults: 10,
       key: KEY
   }
});