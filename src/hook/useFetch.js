import  {useState,useEffect} from 'react';
import axios from 'axios';
const useFetc = () =>{
    const [loader,setLoader] = useState(true);
    const [quiz, setQuiz] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:1500/api/quiz").then((res)=>{
            const data = res.data.data
            setQuiz(data);
            setLoader(false);
        })
    }, []);
    return {loader,quiz}
}
export default useFetc;