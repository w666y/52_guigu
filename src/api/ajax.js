/**
 * ajax 请求函数模块
 * 返回值是一个promise对象(异步返回的数据是response.data)
 */
import axios from 'axios'
import { reject } from 'core-js/fn/promise'
export default function ajax(url, data = {}, type = 'GET') {

    return new Promise((resolve, reject) =>{
        // 执行异步ajax请求
        let promise
        if (type === 'GET') {
            // 准备url query参数数据
            let dataStr = '' //数据拼接字符串
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&'
            })
            if (dataStr !== '') {
                dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
            }
            // 发送get请求
            promise = axios.get(url)
        } else {
            // 发送post请求
            promise = axios.post(url, data)
        }

        
       
        promise.then((response) =>{
            //成功调用resolve()
            resolve(response.data)
        })
        
        .catch((error) =>{
            //失败调用reject()
            reject(error)
        })
    })
   
    return promise

}