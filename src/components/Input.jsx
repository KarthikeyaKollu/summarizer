import React,{useState} from 'react'
import SendIcon from '@mui/icons-material/Send';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
export const Input = () => {
    const [Submit, setSubmit] = useState(false)
    const [value, setvalue] = useState("")
    const handleSubmit =()=>{
        console.log(value);
        sendDataToParent(value);
        
    }
   
  return (
    <div className='flex flex-col w-full gap-2'>
     <form
          className='relative flex justify-center items-center'
          onSubmit={handleSubmit}
        >
          <AutoAwesomeIcon className='absolute left-0 my-2 ml-3 w-5'/>
         

          <input
            type='url'
            placeholder='Paste the article link'
            value={value}
            onChange={(e) =>setvalue(e.target.value)}
            required
            className='url_input peer' // When you need to style an element based on the state of a sibling element, mark the sibling with the peer class, and use peer-* modifiers to style the target element
          />
          <button
            type='submit'
            
            className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700 '
          >

             <SendIcon/>
          </button>
        </form>

    </div>
  )
}

