import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key:"6f36380d9f924d0ca553f0c5da8c727d"
    }
})