import { get, post } from "./http";

export const getToken = (params) => get('/link/token', params);
export const validate = (params)=>post('/link/validateLinkExpire',params)

/* 
    示例
    import { getToken, validate } from "@/request/api";
    methods: {

        async getToken() {
            let params = {}
            try {
                let res = await getToken(params)
                console.log(res,'res')
            } catch (error) {
                这里捕获的error.message，是上层promise 封装抛出来的，具体提示字段要跟你们后台约定
                console.log(error.message)
            }
        }

        async validate() {
            let params = {}
            try {
                let res = await validate(params)
                console.log(res,'res')
            } catch (error) {
                这里捕获的error.message，是上层promise 封装抛出来的，具体提示字段要跟你们后台约定
                console.log(error.message)
            }
        }
        
    },
*/
