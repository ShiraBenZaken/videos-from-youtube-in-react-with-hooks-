import axios from "axios";

const KEY = 'AIzaSyD_Tt_E-iaEjFNbhu8j83oTr3ZaufeLBeM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: KEY
  }
});