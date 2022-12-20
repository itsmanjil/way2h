import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

export class Auth {
    static notify = (condition, value) => {
        if (condition === "success") {
            toast.success(value, {position: toast.POSITION.TOP_CENTER});
        } else if (condition === "error") {
            toast.error(value, {position: toast.POSITION.TOP_CENTER});
        } else if (condition === "warn") {
            toast.warn(value, {position: toast.POSITION.TOP_CENTER});
        }
    };
}