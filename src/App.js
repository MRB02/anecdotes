import React, {useState} from 'react';
import './App.css';

function App() {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]


  
  const [selected, setSelected] = useState(0)
 


  const nextOne=()=>{
  if(selected<6) {
    setSelected(selected+1)
  }
  else {
    setSelected(0)
  }
  }

  const [votes, setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  });

  // console.log(vote);

  let voteSelected = votes[selected];

  function voted() {
    setVotes({ ...votes, [selected]: (voteSelected += 1) });
  }

  
 let m=-1,i,c=0;
 for(i=0; i<anecdotes.length; i++){
   if(votes[i]>m){
     m=votes[i];
     c+=i;
   }
 }
 
  return (
    <div className='app mx-auto mt-5 border border-secondary shadow p-3 mb-5 rounded'>
      <h1 className='text text-uppercase'>Anecdotes</h1>
      <h5 className='text text-start fw-normal py-4'> {anecdotes[selected]}</h5>
      <h6 className='text text-start fw-normal py-4'> has {voteSelected} vote</h6>
      
      <button 
      onClick={voted}
      className='btn btn-danger'>Vote</button>
      <button 
      className='btn btn-primary mx-3'
      onClick={nextOne} 
      >Next anecdote</button>
      <h2 className='text text-uppercase my-4'>Anecdote has most voted</h2>
      <p className='fw-normal text text-uppercase my-4'>
        "{anecdotes[c]}" <b> has {m} votes</b>  
      </p>
    </div>
  )
}

export default App;
