import Mock from 'mockjs'

const LoginUsers = {
    id:1,
    username:'admin',
    password:111111,
    avatar:'http://sns-img.b0.upaiyun.com/dunzd/1710/1215/21/151549596251541507792881.jpg',
    name:'su sir'
}

const NewsData = []

const count = Math.floor(Math.random()*100)

for(let i = 0;i < count;i++){
    NewsData.push(Mock.mock({
        id:Mock.Random.id(),
        title:Mock.Random.ctitle(10,25),
        publishdate:Mock.Random.date(),
        source:Mock.Random.csentence(2,4),
        status:Mock.Random.boolean(3,7)
    }))
}

export {LoginUsers,NewsData}
