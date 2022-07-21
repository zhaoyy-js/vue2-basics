import { from } from "core-js/core/array";
import { get, post } from "./http";

export const zhuwenshuai = (url, params) => post(url, params);
export const zhenglongjun = (url, params) => get(url, params);

/* 
    示例
    import { zhuwenshuai, zhenglongjun } from "@/request/http";
    methods: {

        async zhuwenshuai() {
            try {
                let res = await zhuwenshuai("/login",params)
                console.log(res,'res')
            } catch (error) {
                这里捕获的error.message，是上层promise 封装抛出来的，具体提示字段要跟你们后台约定
                console.log(error.message)
            }
        }

        async zhenglongjun() {
            try {
                let res = await zhenglongjun("/login",params)
                console.log(res,'res')
            } catch (error) {
                这里捕获的error.message，是上层promise 封装抛出来的，具体提示字段要跟你们后台约定
                console.log(error.message)
            }
        }
        
    },
*/
