'use client';

import Image from 'next/image';

const CustomButton = () => {
  return (
    <div>
      <button
        disabled={false}
        type="button"     
        className="custom-btn"
        onClick={() => {}} 
      >
        <span className="flex-1">
          Title
        </span>
      </button>
    </div>
  );
};

export default CustomButton;
