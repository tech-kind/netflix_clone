import axios from 'axios'

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
});

export default instance;

// 使い方
// instance.get('/foo-bar')
// https://api.themoviedb.org/3/foo-bar