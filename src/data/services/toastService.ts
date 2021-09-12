import { toast } from 'react-toastify';

const configToast: any = {
    position: "bottom-right", // "top-left", "top-right", "warning", "error"
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
}

export function emitToastLoading(message: any): void {
    toast(message, Object.assign(configToast, {
        type: "loading"
    }));
}


export function emitToastInfo(message: any): void {
    toast(message, Object.assign(configToast, {
        type: "info"
    }));
}

export function emitToastSuccess(message: any): void {
    toast(message, Object.assign(configToast, {
        type: "success"
    }));
}

export function emitToastWarning(message: any): void {
    toast(message, Object.assign(configToast, {
        type: "warning"
    }));
}

export function emitToastError(message: any): void {
    toast(message, Object.assign(configToast, {
        type: "error"
    }));
}