import React, { useState } from 'react';
import "./Header.scss";
// import { translate } from 'google-translate-api'; 

function LanguageChanger() {
  const [language, setLanguage] = useState('english');

  const toggleLanguage = () => {
    const targetLanguage = language === 'english' ? 'or' : 'en'; 
    translateDocumentBody(targetLanguage);
    setLanguage(prevLanguage => (prevLanguage === 'english' ? 'odia' : 'english'));
  };

  const translateDocumentBody = async (targetLanguage) => {
    try {
      const { body } = document;
      const translatedBody = await translate(body, { to: targetLanguage });
      document.body.innerHTML = translatedBody.text;
    } catch (error) {
      console.error('Translation error:', error);
    }
  };

  const buttonText = language === 'english' ? 'Odia' : 'English';

  const languageClass = language === 'english' ? 'english' : 'odia';

  return (
    <div className={`language-changer-box ${languageClass}`}>
      <button onClick={toggleLanguage}>{buttonText}</button>
    </div>
  );
}

export default LanguageChanger;
