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
    getTimeZone: async () =>{
        try {
            const response = await axios.get(`http://worldtimeapi.org/api/ip`)
            return response.data
        } catch (error) {
            console.log(error)
        }
    },
    getLocation: async () =>{
        try {
            const response = await axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=6d5a485a9e304f03a9a6c32c172e5d72`)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
}
export default Api;