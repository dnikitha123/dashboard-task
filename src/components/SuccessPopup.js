import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessPopup = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/create-ad'); 
    }, 600); 

    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <div className="success-popup d-flex justify-content-center align-items-center h-100">
      <div className="popup-content bg-blur">
        <h2 className="text-center">Success!</h2>
        <p className="text-center">Your data has been submitted successfully.</p>
      </div>
    </div>
  );
};

export default SuccessPopup;
