import axios from 'axios'
import Mock from 'mockjs'
import MockAdapter from 'axios-mock-adapter'
import {LoginUsers,NewsData,majorNewsData} from './data/data'

let _NewsData = NewsData
let _MajorNewsData = majorNewsData

export default {
    /**
    mock bootstrap
    **/

    bootstrap() {
        let mock = new MockAdapter(axios);
        //获取资讯列表
        mock.onGet('/content/news').reply(config => {
            let {page,status,title} = config.params
            let mockNewsData = _NewsData
            //将返回的状态值做处理
            mockNewsData.forEach((item,index) => {
                if(item.status === true){
                    item.status = '已发布'
                }else if(item.status === false){
                    item.status = '未发布'
                }
            })
            if(status !== '全部'){
                mockNewsData = mockNewsData.filter((item,index) => {
                    return item.status === status && item.title.includes(title)
                })
            }else{
                mockNewsData = mockNewsData.filter((item,index) => {
                    return item.title.includes(title)
                })
            }

            let total = mockNewsData.length

            mockNewsData = mockNewsData.filter((item, index) => {
                return index < 10 * page && index >= 10 * (page - 1)
            });

            return new Promise((resolve,reject) => {
                setTimeout(()=>{
                    resolve([200, {
                        total: total,
                        newslist: mockNewsData
                    }])
                },1000)
            })
        })

        //删除资讯
        mock.onGet('/content/delnews').reply(config => {
            let {id} = config.params
            _NewsData = _NewsData.filter((item,index) => {
                return !id.includes(item.id)
            })
            return new Promise((resolve,reject) => {
                setTimeout(() => {
                    resolve([200,{
                        code:0,
                        msg:'删除成功'
                    }])
                },500)
            })
        })

        //添加/编辑资讯
        mock.onGet('/content/addnews').reply(config => {
            let {title,source,channel,id} = config.params
            if(id){
                _NewsData.some((item,index) => {
                    if(item.id === id){
                        item.title = title
                        item.source = source
                        return true
                    }
                })
            }else{
                _NewsData.unshift({
                    id:Mock.Random.id(),
                    title:title,
                    publishdate:new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
                    source:source,
                    status:!!channel.length ? '已发布' : '未发布'
                })
            }

            return new Promise((resolve,reject) => {
                setTimeout(() => {
                    resolve([200,{
                        code:1,
                        msg:'添加成功'
                    }])
                },1000)
            })
        })

        //根据id取出资讯数据
        mock.onGet('/content/getDataById').reply(config => {
            let {id} = config.params
            let mockNewsDataById = _NewsData
            mockNewsDataById = mockNewsDataById.filter((item,index) => {
                return item.id === id
            })

            return new Promise((resolve,reject) => {
                setTimeout(() => {
                    resolve([200,{
                        data:mockNewsDataById
                    }])
                },500)
            })
        })

        //获取要闻数据
        mock.onGet('/content/majornews').reply(config => {
            let {title,page} = config.params
            let mockMajorNews = _MajorNewsData
            mockMajorNews = mockMajorNews.filter((item,index) => {
                return item.title.includes(title)
            })

            let total = mockMajorNews.length

            mockMajorNews = mockMajorNews.filter((item,index) => {
                return index < 10 * page && index >= 10 * (page - 1)
            })

            return new Promise((resolve,reject) => {
                setTimeout(()=>{
                    resolve([200, {
                        total: total,
                        majornewslist: mockMajorNews
                    }])
                },1000)
            })
        })

        //删除要闻数据
        mock.onGet('/content/delmajornews').reply(config => {
            let {id} = config.params
            _MajorNewsData = _MajorNewsData.filter((item,index) => {
                return !id.includes(item.id)
            })
            return new Promise((resolve,reject) => {
                setTimeout(() => {
                    resolve([200,{
                        code:0,
                        msg:'删除成功'
                    }])
                },500)
            })
        })
    }
}
