'use client';

import { CustomButtonProps } from '@/types';
import Image from 'next/image';
import { CustomButtonProps } from '@/types';

<<<<<<< HEAD
const CustomButton = ({title, containerStyles, handleClick}: CustomButtonProps) => {
=======

const CustomButton = ({title, containerSyles, handleClick,
   btnType}: CustomButtonProps) => {
>>>>>>> cd54550702621fa49bfcfeb785431f74b2a1789d
  return (
    <div>
      <button
        disabled={false}
<<<<<<< HEAD
        type="button"     
        className={`custom-btn ${containerStyles}`}
        onClick={(handleClick) => {}} 
      >
        <span className="flex-1">
          {title}
        </span>
=======
        type={btnType || "button" }    
        className={`custom-btn ${containerSyles}`}
        onClick={handleClick} 
      >
      <span className="flex-1">
  {title}
</span>

>>>>>>> cd54550702621fa49bfcfeb785431f74b2a1789d
      </button>
    </div>
  );
};

export default CustomButton;
