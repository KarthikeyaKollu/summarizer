import {Hero} from "./components/Hero"
import {Input} from "./components/Input"
import {Output} from "./components/Output"
import React from 'react'

const App = () => {
  return (
<main>
      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='app'>
        <Hero/>
        <Input />
        <Output/>
      </div>
    </main>
  )
}

export default App
