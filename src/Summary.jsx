import React from 'react';

const Summary = ({quizCount, summary , minutes, seconds})=>{
    const {wrong, correct} = summary;
   
     return (
      
      <div  className="text-center mt-7">
        
        { quizCount === correct && (
             <>
             <span>Congres ! All Right </span>
             <br />
             <span>{correct  * quizCount / 1} %  Score</span>
             </>
        )}    
            {wrong > 0 && (
             <>
             <span className='text-success'>Congrats !</span><br />
             <span className='text-success'>{correct  * quizCount / 1} % Score</span><br />
             <span >Time spend {
             minutes <10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}</span>
             <br />
             <span className='text-success'>You attempt {quizCount} questions and <br/> from that {correct} answer is correct.</span><br />
             </>
            )}
    
            <a href="http://localhost:3000/" className='btn btn-success mt-5'>Try Again</a>
       
    </div>
    )
}
export default Summary;