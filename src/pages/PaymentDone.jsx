import React from 'react';

function PaymentDone() {
  return (
    <div className="payment-success-container">
      <div className="success-animation">
        <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
          <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
          <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
        </svg>
      </div>
      
      <h1 className="success-title">Payment Successful!</h1>
      <p className="success-message">Thank you for your purchase. Your transaction has been completed successfully.</p>
      
      <a 
        href="https://chat.whatsapp.com/F0rNEK05loGG2eD2KTnGZm" 
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="whatsapp-icon">📱</span>
        Join Our WhatsApp Group
      </a>
      
      <p className="updates-text">For exclusive updates and offers</p>
    </div>
  );
}

export default PaymentDone;