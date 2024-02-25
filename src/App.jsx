import React, { useState } from 'react';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [responseMessage, setResponseMessage] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', selectedFile);

    const response = await fetch('http://127.0.0.1:5000/process-image', { // Replace with your backend URL
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    setResponseMessage(data.message);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Upload Image</button>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
}

export default App;
