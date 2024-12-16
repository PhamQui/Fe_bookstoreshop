import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://be-bookstoreshop.onrender.com'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
