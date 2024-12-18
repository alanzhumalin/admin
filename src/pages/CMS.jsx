import React, { useState } from 'react';

const ContentManagement = () => {
  const [banner, setBanner] = useState('');
  const [promoMessage, setPromoMessage] = useState('');
  const [faq, setFaq] = useState([{ question: '', answer: '' }]);

  const handleBannerChange = (e) => setBanner(e.target.value);
  const handlePromoMessageChange = (e) => setPromoMessage(e.target.value);
  const handleFaqChange = (index, field, value) => {
    const newFaq = [...faq];
    newFaq[index][field] = value;
    setFaq(newFaq);
  };

  const handleAddFaq = () => {
    setFaq([...faq, { question: '', answer: '' }]);
  };

  const handleSave = () => {
    // Here you can make an API call to save the data
    console.log('Banner:', banner);
    console.log('Promo Message:', promoMessage);
    console.log('FAQs:', faq);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Content Management</h1>
      
      <div className="mb-4">
        <label htmlFor="banner" className="block text-lg font-semibold">Banner</label>
        <textarea
          id="banner"
          value={banner}
          onChange={handleBannerChange}
          className="w-full p-2 border border-gray-300"
          placeholder="Enter banner text"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="promoMessage" className="block text-lg font-semibold">Promotional Message</label>
        <textarea
          id="promoMessage"
          value={promoMessage}
          onChange={handlePromoMessageChange}
          className="w-full p-2 border border-gray-300"
          placeholder="Enter promotional message"
        />
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">FAQs</h2>
        {faq.map((item, index) => (
          <div key={index} className="mb-4">
            <div className="mb-2">
              <label className="block">Question</label>
              <input
                type="text"
                value={item.question}
                onChange={(e) => handleFaqChange(index, 'question', e.target.value)}
                className="w-full p-2 border border-gray-300"
                placeholder="Enter the question"
              />
            </div>
            <div className="mb-2">
              <label className="block">Answer</label>
              <textarea
                value={item.answer}
                onChange={(e) => handleFaqChange(index, 'answer', e.target.value)}
                className="w-full p-2 border border-gray-300"
                placeholder="Enter the answer"
              />
            </div>
          </div>
        ))}
        <button
          onClick={handleAddFaq}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add FAQ
        </button>
      </div>

      <button
        onClick={handleSave}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Save Content
      </button>
    </div>
  );
};

export default ContentManagement;
