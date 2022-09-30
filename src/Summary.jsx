import React from 'react';
import PriceCup from './img/cup.png'

const Summary = ({quizCount, summary , minutes, seconds})=>{
    const {correct} = summary;
   
     return (
      
      <div  className="text-center mt-7">
        <div className="card bg-white" >
        <img className='img-fluid mx-auto mt-2 imgSize' src={PriceCup} alt="" />
        <div className="card-body">

             <span className='text-dark font-weight-bold h5'>Congrats !</span><br />
             <span className='text-success font-weight-bold h3'>{correct  * quizCount / 1} % Score</span><br />
             <span className='font-weight-bold text-dark'>Time spend <span className='text-success'>{
             minutes <10 ? "0" + minutes : minutes}m:{seconds < 10 ? "0" + seconds : seconds}s</span> </span>
             <br />
             <span className='font-weight-bold text-dark'>You attempt <span className='text-blue'>{quizCount} questions</span> and <br/> from that <span className='text-success'>{correct} answer</span> is correct.</span><br />
               
            <a href="https://thurasimplequiz.netlify.app/" className='btn btn-success mt-3 car'>Try Again</a>

        </div>
        </div>
        
        
       
    </div>
    )
}
export default Summary;