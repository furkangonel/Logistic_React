import React, { useState } from 'react';

const PhoneNumberDisplay = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleButtonClick = () => {
    const phoneNumber = '1234567890'; // Telefon numarasını burada tanımlayabilirsiniz veya başka bir kaynaktan alabilirsiniz.
    setPhoneNumber(phoneNumber);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Telefon Numarasını Göster</button>
      <p>{phoneNumber}</p>
    </div>
  );
};

export default PhoneNumberDisplay;
