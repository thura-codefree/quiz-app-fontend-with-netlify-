import  {useState, useEffect} from 'react';
import useFetch from "./hook/useFetch";
import PacmanLoader from "react-spinners/PacmanLoader";
import Summary from "./Summary";
var timer;


const App = () => {
     
      const {loader,quiz} = useFetch(); // 
      const [activeQuize, setActiveQuize] = useState(0);
      const [activeAnswer,setActiveAnswer] = useState(false);
      const [summary, setSummary] = useState({correct:0, wrong:0});
      const [seconds, setSeconds] = useState(0);
      const [minutes, setMinutes] = useState(0);
      useEffect(()=>{
        if(activeQuize + 1 <= quiz.length ){
            timer = setInterval(()=>{

                setSeconds(seconds + 1);
                
                if(seconds === 59){
                    setMinutes(minutes + 1);
                    setSeconds(0);
                }
            }, 1000)
            return ()=> clearInterval(timer)
        }
        else{
            clearInterval(timer)
        }
        }
    )
      


     


      // li နှိပ်လိုက်တာနဲ့ လက်ရှိ အဖြေကို useState ကြေငြာထားတဲ့ activeAnswer ထဲကို map နဲ့ loop ပတ်ထားတဲ့ ans အဖြေတွေကို ထည့်ပေးတယ်
      // li tag ထဲမှာ onClick နဲ့ထည့်ရေးတယ်။
      // 
      const renderActiveAnswer = (dbAnswersInMapLoop) =>{
      setActiveAnswer(dbAnswersInMapLoop) 
      }
      // ပုံမှန်အမြဲတမ်းဆို  next button က useState ကြေငြာထားတဲ့ activeAsnser ကို  false ထားပြီး
      // button ကို disable အမြဲလုပ်ထားတယ် ၊ li tags နှိပ်လိုက်မှ renderActiveAnswer function နဲ့ activeAnswer ကို next button နှိပ်လိုက်တာနဲ့ useState ကြေငြာထားတဲ့ activeQuize ကို  setActiveQuize နဲ့ ပုံမှန် (၀) ကို 1 ထည့်ပေါင်းလို့ 
      // နောက်ထပ် loop ပတ်ထားတဲ့ quiz li tag တစ်ခု ထပ်ပေါ်တယ် 
      const renderNext = ()=>{
      if(activeAnswer === false){
      return} // activeAnswer က false ဆိုရင် အောက်က code ဆက်မ run ပဲ button ကို disable အတိုင်းပဲ ထားပါမယ်။ function ကို အလုပ်ဆက်မလုပ်စေပဲ ပြန်ထွက်ပါမယ်။
      setActiveQuize(activeQuize + 1);
      setActiveAnswer(false);
      if(activeAnswer.isCorrect){ 
      setSummary({correct:summary.correct + 1, wrong:summary.wrong})
      }else{
      setSummary({correct:summary.correct,  wrong:summary.wrong + 1});
      }
      };
      // jsx internel css
      const mystyleh3 = {
      fontWeight: 700,
      color: "#FEFEFE",
      textAlign: 'center'
      };
      const mystyleh4 = {
      fontWeight: 500,
      color: "#FFC0C7",
      textAlign: 'center'
      };
      return(
    <div className ="container mt-5">
        <div className="row bg-gray">
            <div className="col-12 col-sm-12 col-md-6 offset-md-3">
                {/* loader က true ဆိုရင် အောက်က code တွေကို ဆက်ပြီး run ပါမယ် */}
                {loader && (
                <>
                    <div className="d-flex justify-content-center text-center">
                    <PacmanLoader color="#D9EEE1" className="mt-7" />
                    <p color="#D9EEE1" className="mt-9">Please wait ....</p>
                    </div>
                </>
                )}
                {/* loader က true မဟုတ်ရင် ပြီးတော့ activeQuize ကို 1 ပေါင်းထားတဲ့နံပါတ်က 
                mongodb ထဲက quiz ဆိုတဲ့ db ရဲ့  length ညီပြီး ငယ်မယ်ဆိုမှ အောက်က code တွေကို run ပါမယ် */}
                {!loader && quiz.length >= activeQuize + 1 && (
                <>    
                        <h3 style={mystyleh3}>Test your Coding Skills</h3>
                        <h4 style={mystyleh4} className ="mb-3">React Quiz</h4>        
                        <div className="card bg-dark rounded border-white shadow ">
                            <div className="bg-success barWH text-center">
                                <span><i className = "float-left bi bi-record-fill text-blue ml-2 "></i></span>
                                <span><i className = "float-left bi bi-record-fill text-dark mr-1 "></i></span>
                                <span><i className = "float-left bi bi-record-fill text-white mr-1 "></i></span>
                                <span className="text-dark numOfQus">Question {activeQuize + 1} of {quiz.length}</span>
                                <span className="text-black float-right mr-2">{minutes<10? "0" + minutes : minutes}:{seconds<10? "0" + seconds : seconds}</span>
                            </div>
                            <div className="card-body p-3">
                                    {/* next button နှိပ်လိုက်တိုင်းမှ renderNext function ထဲမှာ activeQuize ကို 1 အမြဲတမ်းပေါင်းပေးပြီး
                                     quiz[] ရဲ့ index number ပြောင်းပေးသွားလို့ မေးခွန်း တွေပြောင်းပြောင်းသွားတယ်။  */}
                                    <code className="text-success mt-3 mb-3 codeQuesFont">{quiz[activeQuize].question}</code>
                                    <ul className="list-group ">
                                        {/* quiz ထဲမှ [activeQuize] က index number တွေ အမြဲ 1 တိုးသွားတဲ့အတွက်
                                         quiz ထဲကထွက်လာတဲ့ အဖြေတွေကို map နဲ့ တစ်ခုချင်းစီ loop ပတ်ပြီး li tags တွေနဲ့ ဖန်တီးယူတယ် */}
                                        {quiz[activeQuize].answers.map((anss, indexNumber)=>(
                                        <li key={indexNumber}  onClick={()=>renderActiveAnswer(anss)} className= {`liHover list-group-item p-1 mt-2 shadow border rounded-pill ${
                                            // next button မနှိပ်ခင် next button က disable ဖြစ်ပြီး activeAnswer ကလည်း false  ဖြစ်နေတဲ့ အချိန်မှာပဲ li tags က နှိပ်လို့ရပါမယ်။
                                            // activeAnswer က false မဟုတ်ပဲ true ဖြစ်ပြီး next button က နှိပ်လို့ရတယ် အခြေအနေမှာ
                                            // li tags တွေကို နှိပ်လို့မရစေချင်တော့လို့ disabled ပေးတယ်။
                                            activeAnswer !== false && "disabled"}
                                            ${
                                            activeAnswer !== false &&
                                            activeAnswer._id === anss._id &&
                                            activeAnswer.isCorrect === false &&
                                            "bg-danger"
                                            }
                                            ${ 
                                            activeAnswer !== false &&
                                            activeAnswer._id === anss._id &&
                                            activeAnswer.isCorrect === true &&
                                            "bg-success"
                                            }
                                            `}>
                                            <span className="btn btn-sm bg-green text-white shadow-lg rounded-pill ml-2">
                                            {anss.alphaBet}
                                            </span>
                                            <span className="ansFont">{anss.answer}</span>
                                        </li>
                                    ))}
                                    </ul>
                                    <div className="d-flex justify-content-between mt-5">
                                        <span>&nbsp;&nbsp;</span>
                                        {
                                        activeAnswer !== false && activeAnswer.isCorrect === true && (
                                        <span className="text-success ml-5">Correct Answer</span>
                                        )
                                        }
                                        {
                                        activeAnswer !== false && activeAnswer.isCorrect === false && (
                                        <span className="text-danger ml-5">Wrong Answer</span>
                                        )
                                        }
                                        <button className={`btn btn-success float-right ${activeAnswer === false && "disabled" }}`
                                        } onClick = {renderNext} >Next</button> 
                                    </div> 
                            </div>
                        </div>   
                </>
                )
            }
            {/* loader က true မဟုတ်ရင် ပြီးတော့ activeQuize ကို 1 ပေါင်းထားတဲ့နံပါတ်က 
                mongodb ထဲက quiz ဆိုတဲ့ db ရဲ့  length ထက်ကြီးမယ်ဆိုရင် အောက်က code တွေကို run ပါမယ် ပြီးတော့ ကိုယ်ဘာသာလုပ်ထားတဲ့ Summary component ကို ပြပါမယ် */}
            {!loader && quiz.length < activeQuize + 1 && <Summary  quizCount = {quiz.length} summary = {summary} minutes = {minutes} seconds = {seconds}/>}
            </div>
        </div>
      
    </div>

      );
      
}
export default App;