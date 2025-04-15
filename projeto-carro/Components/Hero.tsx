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
            </div>
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
        </div>
    )
}
export default Hero