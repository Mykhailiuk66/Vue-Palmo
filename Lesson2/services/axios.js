// 2.	Додайте за допомогою пакетного менеджеру бібліотеку Axios до проєкту. 
// Сформуйте в окремому файлі инстанс Axios, сконфігуруйте його та імпортуйте за потребою.

import axios from "axios"


const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com",
    headers: {
        'Content-Type': "application/json"
    }
})


export default axiosInstance