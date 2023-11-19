import axios from "@/utils/request"

const apis = {
    register(formData) {
        return axios.post('api/user/register', formData);
    },
    login(formData) {
        return axios.post('api/user/login', formData)
    },
    calcIntest(objData) {
        return axios.post('api/rate/count', objData)
    },
    modifyRate(objData) {
        return axios.post('api/rate/update', objData)
    }

    // test() {
    //     return axios.get('api/user/current')
    // }
}
export default apis