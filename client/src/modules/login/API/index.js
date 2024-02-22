import axios from "axios";
import { server } from "../../../constants"

const getSignFetch = async (value) => { // value[ email ] : 
    try {
        const result = await axios.post(server.GET_SIGN_URL, { value });
        if (result.data.isSuccess) {
            return result.data.formData;
        } else {
            return [];
        }
    } catch (err) { // status 404
        return null;
    }
}

export {
    // get
    getSignFetch,
    
    // update

    // insert

    // delete

}