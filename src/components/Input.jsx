import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

export const Input = () => {
    const [value, setValue] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(value);
        // You can send data to parent component here
    };

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
            <form className='relative flex justify-center items-center' onSubmit={handleSubmit}>
                {/* Image input */}
                <label htmlFor="imageInput" className="cursor-pointer">
                    <AddPhotoAlternateIcon />
                    <input
                        id="imageInput"
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleImageChange}
                    />
                </label>

                {/* Show selected image preview */}
                {selectedImage && (
                    <div className=''>
                        <img
                            src={selectedImage}
                            alt="Selected"
                            style={{ maxWidth: '30px', maxHeight: '30px' }}
                        />
                    </div>
                )}

                {/* URL input */}
                <input
                    type='url'
                    placeholder='Paste the article link'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    required
                    className='url_input peer'
                />

                {/* Submit button */}
                <button
                    type='submit'
                    className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700 '
                >
                    <SendIcon />
                </button>
            </form>
        </div>
    );
};
