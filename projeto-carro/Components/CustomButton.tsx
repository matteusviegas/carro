'use client';

import Image from 'next/image';
import { CustomButtonProps } from '@/types';


const CustomButton = ({title, containerSyles, handleClick,
   btnType}: CustomButtonProps) => {
  return (
    <div>
      <button
        disabled={false}
        type={btnType || "button" }    
        className={`custom-btn ${containerSyles}`}
        onClick={handleClick} 
      >
      <span className="flex-1">
  {title}
</span>

      </button>
    </div>
  );
};

export default CustomButton;
