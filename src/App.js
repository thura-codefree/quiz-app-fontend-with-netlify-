import React, {useState} from "react";
import useFetch from "./hook/useFetch";
import PacmanLoader from "react-spinners/PacmanLoader";


const App = () => {
        const {loader,quiz} = useFetch();
        const [activeQuize, setActiveQuize] = useState(0);
        const [activeAnswer,setActiveAnswer] = useState(false);
        const [summary, setSummary] = useState({correct:0, wrong:0});
 const renderActiveAnswer = (ans) =>{
            setActiveAnswer(ans)
        }
        const renderNext = ()=>{
        
            if(activeAnswer === false){
            return}

            setActiveQuize(activeQuize + 1);
            setActiveAnswer(false);
            if(activeAnswer.isCorrect){
                setSummary({correct:summary.correct + 1, wrong:summary.wrong})
            }else{
                setSummary({correct:summary.correct,  wrong:summary.wrong + 1});
            }
        };
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
        <>
        <div className = "container mt-3">
        <div className ="row justify-content-center ">
        {
        loader?
        <>
        <PacmanLoader color="#D9EEE1" className="mt-7" />
        <p className="mt-9">Please wait ....</p>
        </>
        :
        <div className="container">
        <div className="row">
        <div className="col-12 col-sm-12 col-md-6 mt-4 offset-md-3">
        <div>               
                {/* <h3 style={{color:"#FFFFFF"}}>MEAN STACK QUIZ APP</h3> */}
                <h3 style={mystyleh3}>Test your Coding Skills</h3>
                <h4 style={mystyleh4} className ="mb-3">React Quiz</h4>        
                <div className="card bg-dark rounded border-white shadow ">
                <div className="bg-success barWH text-center">
                <span className="text-dark ml-5 numOfQus">Question {activeQuize + 1} of {quiz.length}</span>
                <span><i className = "float-right bi bi-record-fill text-dark mr-1 "></i></span>
                <span><i className = "float-right bi bi-record-fill text-dark mr-1 "></i></span>
                <span><i className = "float-right bi bi-record-fill text-dark mr-1 "></i></span>
                
                </div>
                    <div className="card-body p-3">
                       <code className="text-success mt-3 mb-3 codeQuesFont">{quiz[activeQuize].question}</code>
                        <ul className="list-group ">
                            {quiz[activeQuize].answers.map((ans, indexNumber)=>(
                                <li key={indexNumber}  onClick={()=>renderActiveAnswer(ans)} className= {`liHover list-group-item p-1 mt-2 shadow border rounded-pill ${
                                    activeAnswer !== false && "disabled"
                                }
                                    ${
                                        activeAnswer !== false &&
                                        activeAnswer._id === ans._id &&
                                        activeAnswer.isCorrect === false &&
                                        "bg-danger"
                                    }
                                    ${ 
                                        activeAnswer !== false &&
                                        activeAnswer._id === ans._id &&
                                        activeAnswer.isCorrect === true &&
                                        "bg-success"
                                    }
                                    `}>
                                <span className="btn btn-sm bg-green text-white shadow-lg rounded-pill ml-2">
                                {ans.alphaBet}
                                </span>
                                <span className="ansFont">{ans.answer}</span>
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
                               <button className={`btn btn-success float-right ${activeAnswer === false && "disabled" }`
                             } onClick = {renderNext}>Next</button> 
                            </div> 
                    </div>
                </div>   
        </div>
        </div>
        </div>
        <code className ="footerText">Testing by Kyaw Thura</code>
        </div>
        }
        </div>
        </div>
        </>
   
    )
}
;

export default App;