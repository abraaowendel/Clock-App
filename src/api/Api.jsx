import axios from "axios"

const Api = {
    getQuotes: async () =>{
        try {
            const response = await axios.get(`https://api.quotable.io/random`)
            return response.data
        } catch (error) {
            console.log(error)
        }
    },
    getIpLocal: async () =>{
        try {
            const baseURL = `https://api.ipbase.com/v2/info?ip=1.1.1.1&apikey=ZSkyynrX1S8FtMeRFNDxf00xzeA6HnV409gSa8Jl`
            const response = await axios.get(`${baseURL}`)
            return response.data
        } catch (error) {
            console.log(error)
        }
       
    },
    getWorldTime: async () =>{
        try {
            const baseURL = "http://worldtimeapi.org/api/ip"
            const response = await axios.get(`${baseURL}`)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
}
export default Api;