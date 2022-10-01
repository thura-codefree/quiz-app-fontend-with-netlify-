import  {useState,useEffect} from 'react';
import axios from 'axios';
const useFetc = () =>{
    const [loader,setLoader] = useState(true);
    const [quiz, setQuiz] = useState([]);
    useEffect(()=>{
        axios.get("https://thuraquizapi.herokuapp.com/api/quiz").then((res)=>{
            const data = res.data;
            setQuiz(data);
            setLoader(false);
           
        })
    }, []);
    return {loader,quiz}
}
export default useFetc;