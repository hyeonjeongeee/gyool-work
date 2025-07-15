import axios from '@/plugins/axios.ts'

//리터럴 타입 제한
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

export const request = async <T = any>(options: RequestOptions): Promise<T> => {
    const { method, url, data, params, headers } = options

    const token = localStorage.getItem('accessToken');

    const defaultHeaders: Record<string, string> = token
        ? { Authorization: `Bearer ${token}` }
        : {}

    const combinedHeaders = {
        ...defaultHeaders,
        ...headers,
    }

    try {
        const response = await axios({
            method,
            url,
            headers: combinedHeaders,
            data: method !== 'get' ? data : undefined,
            params: method === 'get' ? params || data : undefined,
        })

        return response.data
    } catch (error: any) {
        console.error(`[HTTP ERROR] ${method.toUpperCase()} ${url}`, error)

        // 원하는 공통 에러 메시지 처리 가능
        // alert('요청 중 오류가 발생했습니다.')

        throw error
    }
}