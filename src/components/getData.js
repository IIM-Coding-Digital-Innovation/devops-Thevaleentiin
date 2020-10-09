import axios from 'axios';

export const getData = (url) => {
    return new Promise((resolve, reject) => {
        axios.get(url).then(res => {
            resolve(res.data);
        }).catch(err => reject(err));
    });
};