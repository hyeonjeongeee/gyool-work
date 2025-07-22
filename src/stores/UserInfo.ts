import { defineStore } from 'pinia';
import { reactive } from "vue";

export const useUserInfo = defineStore('user', ()=>{

    const user = reactive({
        id: '',
        name:'',
        email:'',
        role:''
    });

    const setUser = (userData : typeof user) => {
        Object.assign(user,userData);
        localStorage.setItem('userInfo',JSON.stringify(user))
    }

    const clearUser = () =>{
        localStorage.removeItem('userInfo');
        user.id = '' ;
        user.name = '';
        user.email = '';
        user.role = '';
    }

    const loadUser = () =>{
        const userJson = localStorage.getItem('userInfo')

        if(userJson){
            const parse = JSON.parse(userJson);

            Object.assign(user,parse)
        }
    }

    return{
        user,
        setUser,
        clearUser,
        loadUser
    }
})