
import {  useState } from 'react'
import './App.css'
import { Form } from 'react-bootstrap'
// import img1 from './assets/luffy.jpg'
// import img2 from './assets/zoro.jpg'
// import img3 from './assets/zimbei.webp'
// // import img4 from './assets/bigmom.jpg'


function App() {
 const [Age,setAge] = useState(0)
 const [Weight,setWeight] = useState(0)
 const [Height,setHeight] = useState(0)
 const [bmi,setBmi] = useState(0);
 const [validAge,setvalidAge]=useState(true)
 const [validWeight,setvalidWeight]=useState(true)
 const [validHeight,setvalidHeight]=useState(true)
 const [msg,setMsg] = useState('')
 

 console.log(Age);
 const handlereset =()=>{
  setAge(0)
  setHeight(0)
  setBmi(0)
  setWeight(0)
  setvalidAge(true)
  setvalidHeight(true)
  setvalidWeight(true)
  setMsg('')
 }


 // /^\d*\.?\d*$/
 const validUserInput = (e)=>{
  const {name,value} = e.target
  console.log(`${name},${value}`);
  console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
  if(!!value.match(/^\d*\.?\d*$/)){
    if(name==='age'){
      setAge(value)
      setvalidAge(true)
    }else if(name==='weight'){
      setWeight(value)
      setvalidWeight(true)
    }else{
      setHeight(value)
      setvalidHeight(true)
    }
  }else{
    if(name==='age'){
      setAge(value)
      setvalidAge(false)
    }else if(name==='weight'){
      setWeight(value)
      setvalidWeight(false)
    }else{
      setHeight(value)
      setvalidHeight(false)
    }
  }
 }
 
 const handleCalculate = (e)=>{
  e.preventDefault()
  if(!Age || !Weight || !Height){
    alert("please fill the form completely")
  }else{
    var heightInMeters = Height / 100;

    // Calculate BMI
    var bmi = Weight / (heightInMeters * heightInMeters);
    setBmi(bmi.toFixed(1))
  
  if (bmi < 18.5) {
    setMsg("You need to bulk") 
} else if (bmi >= 18.5 && bmi < 25) {
  setMsg("You have an ideal frame!") 
} else if (bmi >= 25 && bmi < 30) {
    setMsg( "you need to cut!");
} else {
    setMsg("you are obese");
}
}
 }
 

  return (
    <>
      <div className='d-flex justify-content-center align-items-center wrapper  ' style={{width:'100%',height:'100vh'}}>
        
        <div style={{width:'600px'}} className='p-5  bg-dark'>
        <h3 className='text-light'>BMI Calculator</h3>
        <p className='text-light'>Calculate your BMI</p>
        <div style={{width:'100%',height:'200px'}} className='d-flex justify-content-center align-items-center rounded flex-column bg-secondary'>
          <h1  style={{height:'50px'}}>Your BMI : {bmi} </h1>
          
          <p className='fw-bolder'>{msg}</p>
         
        </div>
        <form  onSubmit={handleCalculate}>
          <div className='mt-3 mb-3'>
          <Form.Control size="lg" name='age' type="text" placeholder="Age" onChange={e=>validUserInput(e)} value={Age || ""}  />
          </div>
          {!validAge&&<div className='mb-3 text-danger fw-bolder'>
            Invalid Age
          </div>}
          <div className='mb-3'>
          <Form.Control size="lg" name='weight' type="text" placeholder="Weight in Kgs" onChange={e=>validUserInput(e)} value={Weight || ""} />
          </div>
          {!validWeight&&<div className='mb-3 text-danger fw-bolder'>
            Invalid Weight
          </div>}
          <div className='mb-3'>
          <Form.Control size="lg" name='height' type="text" placeholder="Height in cms" onChange={e=>validUserInput(e)} value={Height|| ""} />
          </div>
          {!validHeight&&<div className='mb-3 text-danger fw-bolder'>
            Invalid Height
            
          </div>}
          <div className='d-flex justify-content-between gap-2'>
            <button disabled={validAge&&validHeight&&validWeight?false:true} type='submit' style={{width:'50%',height:'70px'}} className='btn btn-danger'>Submit</button>
            <a onClick={handlereset} style={{width:'50%',height:'70px',padding:'20px'}} className='btn btn-secondary'>Reset</a>
          </div>
        </form>
        
        
        </div>
        </div>
      
    </>
  )
}

export default App;
