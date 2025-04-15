'use client'
import React from "react";
import Image from "next/image";
import CustomButton from "./CUstomButton";
const Hero = () => {
    const handleScroll = () => {

    }
    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero_title">Hero</h1>
                Find, book,
            </div>
            <p className="hero_subtitle ">
                Streaming your car rental experience with our effortless
            </p>
            <CustomButton
                title="Expore Cars"
                containerStyles="bg-primary-blue text-whire rounded-full mt-10"
                handleClick={handleScroll}
            />
        </div>
    )
}
export default Hero