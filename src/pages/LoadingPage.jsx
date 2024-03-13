import React, { useEffect, useState } from 'react';
import './LoadingPage.css'; // Import CSS file for styling

const LoadingPage = () => {
  // State to manage whether the loading is complete
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // Simulate content loading for 3 seconds (replace this with your actual content loading code)
    const timer = setTimeout(() => {
      setLoadingComplete(true); // Set loading complete to true after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  // Return loading overlay if loading is not complete
  if (!loadingComplete) {
    return (
      <div className="loading-overlay">
        <div className="loader"></div>
      </div>
    );
  }

  // Return null if loading is complete
  return null;
};

export default LoadingPage;
