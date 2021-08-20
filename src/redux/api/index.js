import axios from 'axios';

const scheduleInstance = axios.create({
    withCredentials: false,
    baseURL: "https://api.tvmaze.com/schedule"
})

const scheduleAPI = {
    getSchedule(date){
        return scheduleInstance.get(`?country=US&date=${date}`)
    }
}

export {
    scheduleAPI
}

