'use client'
import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";
const Hero = () => {
    const handleScroll = () => {

    }
    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero_title">Hero</h1>
                Find, book,

                <p className="hero_subtitle ">
                    Streaming your car rental experience with our effortless
                </p>
                <CustomButton
                    title="Expore Cars"
                    containerStyles="bg-primary-blue text-whire rounded-full mt-10"
                    handleClick={handleScroll}
                />
            </div>
<<<<<<< HEAD
<div className="hero_image-container"></div>
<div className="hero_image">
</div>
=======
            <p className="hero_subtitle ">
                Streaming your car rentals experience with our effortless
            </p>
            <CustomButton
                title="Expore Cars"
                containerSyles="bg-primary-blue text-whire rounded-full mt-10"
                handleClick={handleScroll} btnType={"button"}            />
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src="/hero.png" alt="hero"
                    fill className="object-contain"/>
                    <div className="hero__image-overlay"/>
                </div>
            </div>
>>>>>>> cd54550702621fa49bfcfeb785431f74b2a1789d
        </div>


    )
}
export default Hero