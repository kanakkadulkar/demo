import React from 'react';

const ImageComponent = () => {
  return (
    <div>
      <img
        src="src\components\image.jpg" // Replace with the actual path to your image
        alt="Description of the image" // Add a meaningful alt text for accessibility
        style={{ width: '100%', height: '1000px' }} // Set width to 100% and height to auto
      />
    </div>
  );
};

export default ImageComponent;