import {Hero} from "./components/Hero"
import {Input} from "./components/Input"
import {Output} from "./components/Output"
import React,{useState} from 'react'
import {ReceiptImage} from "./components/Temp"
const App = () => {
  const [value, setvalue] = useState("")
  const handleDataFromChild = (data) => {
    // Do something with the data received from the child
    console.log("Data received from child:", data);
    setvalue(data);
};

  return (
<main>
      {/* <div className='main'>
        <div className='gradient' />
      </div>

      <div className='app'>
        <Hero/>
       
        <Input sendDataToParent={handleDataFromChild}/>
        {value}
        <Output/>
      </div> */}

      <ReceiptImage/>
    </main>
  )
}

export default App
