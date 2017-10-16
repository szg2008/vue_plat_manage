import axios from 'axios'

let base = ''

/**********资讯*************/
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


/**********要闻***********/
export const getMajorNewsData = (params) => {

    return axios.get(`${base}/content/majornews`,{params:params})
}

export const delMajorNewsData = (params) => {
    return axios.get(`${base}/content/delmajornews`,{params:params})
}
