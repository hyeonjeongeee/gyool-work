import {defineStore} from 'pinia';
import {ref} from "vue";


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

    return {
        accessToken,
        setAccessToken,
        clearAccessToken,
        loadAccessToken
    };

})