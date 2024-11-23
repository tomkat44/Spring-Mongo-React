import { definition } from "@fortawesome/free-solid-svg-icons/fa0";
import axios from 'axios'; 

export default axios.create({
    baseURL: 'http://localhost:8080',
    // headers: {"ngrok-skip-browser-warning" : "true"},
    // headers: {
    //     // "Cache-Control": "no-cache",
    //     // "Content-Type": "application/x-www-form-urlencoded",
    //     "Access-Control-Allow-Origin": "*",
    //   },
    
    
});