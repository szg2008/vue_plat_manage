import axios from 'axios'

let base = ''

export const getNewsList = (params) => {

    return axios.get(`${base}/content/news`,{params:params})
}

export const delNewsData = (params) => {

    return axios.get(`${base}/content/delnews`,{params:params})
}

export const addNewsData = (params) => {

    return axios.get(`${base}/content/addnews`,{params:params})
}

export const getNewsDataById = (params) => {

    return axios.get(`${base}/content/getDataById`,{params:params})
}
