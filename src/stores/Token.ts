import {defineStore} from 'pinia';
import {ref} from "vue";
import {request} from "@/utils/request.ts"

export const useTokenStore = defineStore('token',()=>{

    const accessToken = ref('');

    const setAccessToken = (token: string)=>{
        accessToken.value = token;
        localStorage.setItem('accessToken',accessToken.value);
    }

    const clearAccessToken = () =>{
        accessToken.value = '';
        localStorage.removeItem('accessToken');
    }

    const loadAccessToken = () => {
        const token = localStorage.getItem('accessToken');
        if(token){
            accessToken.value = token
        }
    }

    const isTokenExpired = async () => {
        if (!accessToken.value) {
            return true;
        }

        const payload = JSON.parse(atob(accessToken.value.split('.')[1]));
        const exp = payload.exp;
        const now = Math.floor(Date.now() / 1000);

        if (exp < now) {
            try {
                const result = await request({ method: 'get', url: '/isExpired' });
                console.log(result)
                // 예시: 서버가 401 반환하면 catch로 넘어감
                if (result) {
                    return false; // 재발급 성공
                } else {
                    return true; // 재발급 실패
                }
            } catch (err) {
                console.log('refresh 실패 또는 만료', err);
                return true;
            }
        }

        return false; // 만료되지 않음
    };

    return {
        accessToken,
        setAccessToken,
        clearAccessToken,
        loadAccessToken,
        isTokenExpired
    };

})