import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [homeArray, setHomeArray] = useState([{
    name: '',
    description: '',
    images: '',
    notes: ''
  }]);

  useEffect(() => {
    fetch('http://localhost:8000/') // Adjust the URL to match your server
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        console.log(data); // Check what the API is actually returning
        setHomeArray(data.saltfish); // Adjust this based on the API response structure
      })
      .catch(err => console.error('Fetch error:', err));
  }, []); // Dependency array ensures the fetch runs only once on mount

  return (
    <div className='navbar-container'>
      <p>TEST Homepage</p>
      {/* Render the data for debugging */}
      <pre>{JSON.stringify(homeArray, null, 2)}</pre>
    </div>
  );
};

export default HomePage;
