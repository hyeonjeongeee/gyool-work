import axios from '@/plugins/axios.ts'

//리터럴 타입 제한 => method 타입
type Method = 'get' | 'post' | 'put' | 'delete'


// requeset 옵션
// ? ==> 선택적 속성값 (있어도 되고 없어도 되는 값)
interface RequestOptions {
    method: Method
    url: string
    data?: any
    params?: any
    headers?: Record<string, string>
}
//request 함수정의
export const request = async <T = any>(options: RequestOptions): Promise<T> => {
    const { method, url, data, params, headers = {}  } = options;

    const token = localStorage.getItem('accessToken');
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }


    try {
        const response = await axios({
            method,
            url,
            headers,
            data: method !== 'get' ? data : undefined,
            params: method === 'get' ? params || data : undefined,
            withCredentials : true
        })


        const newAccessToken = response.headers['authorization'];
        if(newAccessToken){
            const tokenVal = newAccessToken.replace('Bearer ', '');
            localStorage.setItem('accessToken',tokenVal);
        }


        return response.data

    } catch (error: any) {

        console.log(error);
        throw error
    }
}