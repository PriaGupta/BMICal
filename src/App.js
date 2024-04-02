import React,{useState} from 'react';
import './index.css';

function App() {

  const [weight,setWeight]=useState(0)
  const [height,setHeight]=useState(0)
  const [bmi,setBmi] =useState('')
  const [message,setMessage]=useState('')

  let calculateBmi=(e)=>{
    e.preventDefault()

    if(weight===0 || height===0){
     alert('Please enter a valid weight and height')
    }
    else{
    let bmi=(weight/((height*height)/10000))
   
    setBmi(bmi.toFixed(2))  

    if(bmi<18.6){
      setMessage('You are underweight')
    }
    else if(bmi >=18.6 && bmi<24.9){
      setMessage('You are healthy')
    }
    else{
      setMessage('You are overweight')
    }
  }
  }

  let reload=()=>{
    window.location.reload()
  }

  return (
    <div className="main">
      <div className='container'>
        <div className='main-all'>
        <h2 className='head'>BMI Calculator</h2>
        <form onSubmit={calculateBmi}>     
        <div>
          <label>Height(cm)</label>
          <input value={height} onChange={(e)=>setHeight(e.target.value)}/>
         </div>
         <div>
          <label>Weight(kg)</label>
          <input value={weight} onChange={(e)=>setWeight(e.target.value)}/>
          </div>
          <div>
         <button className='btn' type='submit'>Submit</button>
         <button className='btn btn-primary' onClick={reload} type='submit' >Reload</button>
         </div>
        </form>

        <div className='end'>
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
</div>
      </div>
    </div>
  );
}

export default App;
