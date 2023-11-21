import React from 'react';

const data = {
  prices: [
    { service: 'Behandlung', price: '69,00' },
    { service: 'House Sitting', price: '135,00' },
    { service: 'Kilometer-Geld', price: '0,50' },
  ],
  videos: [
    { label: 'Haupt Video', id: 'C0BKXLSm820' },
    { label: 'Video 1', id: 'bZyBYrGC7SI' },
    { label: 'Video 2', id: 'nVAsnKhB0n8' },
    { label: 'Video 3', id: 'IzC2FMNrrLA' },
    { label: 'Video 4', id: '15-i07oMoxc' },
  ],
};

const CustomComponent = () => {
  return (
    <div className="p-4">
      {/* Prices Section */}
      <div className="mb-8">
        <h2 className="font-bold text-lg mb-4">PREISE</h2>
        {data.prices.map((item, index) => (
          <div key={index} className="flex justify-between border-b-2 py-2">
            <span>{item.service}</span>
            <span>{item.price}</span>
          </div>
        ))}
      </div>

      {/* Videos Section */}
      <div>
        <h2 className="font-bold text-lg mb-4">VIDEOS</h2>
        <div className="mb-2">
          <span className="block mb-2">https://www.youtube.com/watch?v=CqvmUnG25dA</span>
        </div>
        {data.videos.map((video, index) => (
          <div key={index} className="flex items-center border-b-2 py-2">
            <label htmlFor={`video-${index}`} className="mr-4">{video.label}</label>
            <input
              type="text"
              id={`video-${index}`}
              value={video.id}
              readOnly
              className="flex-1 p-2 border rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomComponent;
