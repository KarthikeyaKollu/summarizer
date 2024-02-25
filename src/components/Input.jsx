import React,{useState} from 'react'
import SendIcon from '@mui/icons-material/Send';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
export const Input = () => {
    const [Submit, setSubmit] = useState(false)
    const [value, setvalue] = useState("")
    const handleSubmit =()=>{
        console.log(value);
        sendDataToParent(value);
        
    }
    const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle when a new image is selected
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
   
  return (
    <div className='flex flex-col w-full gap-2'>
     <form
          className='relative flex justify-center items-center'
          onSubmit={handleSubmit}
        >
          {/* <AutoAwesomeIcon className='absolute left-0 my-2 ml-3 w-5'/> */}

          <div>
      {/* Show the selected image if available */}
      {selectedImage && (
        <img
          src={selectedImage}
          alt="Selected"
          style={{ maxWidth: '300px', maxHeight: '300px' }}
        />
      )}

      {/* Clickable image to trigger file input */}
      <label htmlFor="imageInput">
        <AddPhotoAlternateIcon />
      </label>

      {/* Hidden file input triggered by the clickable image */}
      <input
        id="imageInput"
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
    </div>
          
         

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

