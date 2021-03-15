import Axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

// Cliente Axios
const clienteAxios = Axios.create({
    baseURL: `${BACKEND_URL}/api/camino`,
});

export default clienteAxios;
