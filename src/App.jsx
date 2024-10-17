import { TextField,Stack,Button } from '@mui/material'
import './App.css'
import { useState} from 'react'

function App() {
  
  const [interest,setInterest] = useState(0)
  const [principle,setPrinciple] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)
  const [invalidPrinciple,setInvalidPrinciple] = useState(false)
  const [invalidRate,setInvalidRate] = useState(false)
  const [invalidYear,setInvalidYear] = useState(false)


const validateInputs = (inputTag)=>{
console.log(typeof inputTag);
const {name,value} = inputTag
console.log(name,value);
console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
console.log(!!value.match(/^\d*\.?\d+$/));
if(name=="principle"){
  setPrinciple(value)
  if(!!value.match(/^\d*.?\d+$/)){
    setInvalidPrinciple(false)
  }else{
    setInvalidPrinciple(true)
  }
}else if(name=="rate"){
  setRate(value)
  if(!!value.match(/^\d*.?\d+$/)){
    setInvalidRate(false)
  }else{
    setInvalidRate(true)
  }
}else  if(name=="year") {
  setYear(value)
if(!!value.match(/^\d*.?\d+$/)){
  setInvalidYear(false)
}else{
  setInvalidYear(true)
}
}

  }

  const handleCalculate = (e)=>{
    e.preventDefault()
    console.log("inside handleCalculate");
    if(principle && rate && year){
      setInterest(principle*rate*year/100)
    }else{
      alert("Please fill the form completely!!!")
    }
  }

  const handleReset=()=>{
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInvalidPrinciple(false)
    setInvalidRate(false)
    setInvalidYear(false)
  }
    

  return (
    <div style={{width:'100%',minHeight:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark'>
    <div style={{width:'600px',boxShadow:'10px 5px 5px red;'}} className='bg-light rounded p-5'>
       <h3>Simple Interest Calculator</h3>
       <p>Calculate your simple interest Easily!</p>
       <div className='rounded bg-warning p-3 text-light text-center ' style={{boxShadow: "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"}}>
        <h1>₹ {interest}</h1>
        <p className='fw-bolder'>Total Simple Interest</p>
       </div>
       <form className='mt-5'>
        {/* Principle */}
        <div className='mb-3'>
        <TextField value={principle || ""} className='w-100' name='principle' onChange={(e)=>validateInputs(e.target)}  id="outlined-principle" label=" ₹ Principle Amount" variant="outlined" />
        </div>
        {/* indvalid principle */}
       {invalidPrinciple && <div className="mb-5 text-danger fw-bolder">
          Invalid Principle Amount
        </div>}

        {/* Rate */}
        <div className='mb-3'>
        <TextField  value={rate || ""}className='w-100' name='rate' onChange={(e)=>validateInputs(e.target)}  id="outlined-rate" label="Rate of Interest (%)" variant="outlined" />
        </div>

          {/* indvalid Rate */}
      {invalidRate && <div className="mb-5 text-danger fw-bolder">
          Invalid Rate
        </div>}

        {/* Year */}
        <div className='mb-3'>
        <TextField value={year || ""} className='w-100' name='year' onChange={(e)=>validateInputs(e.target)}  id="outlined-year" label="Time Period (Yr)" variant="outlined" />
        </div>
        {/*invalid Year */}
        {invalidYear && <div className="mb-5 text-danger fw-bolder">
          Invalid Year
        </div>}

        <Stack direction="row" spacing={2}>
        <Button  type='submit'onClick={handleCalculate} disabled={invalidPrinciple || invalidRate || invalidYear} variant="contained" style={{width:'50%',height:'70px'}} className='bg-dark'>CALCULATE</Button>
        <Button onClick={handleReset} variant="outlined" style={{width:'50%',height:'70px'}} className='border border-dark text-dark'>RESET</Button>
</Stack>
       </form>
       
    </div>
    </div>
  )
}

export default App