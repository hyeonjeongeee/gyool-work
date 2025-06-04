import {ElMessage} from 'element-plus';

export type MessageType = 'success' | 'warning' | 'info' | 'error';

export const showMsg =(type: MessageType, message: string): void => {
    ElMessage({
        type,
        message
    });
};