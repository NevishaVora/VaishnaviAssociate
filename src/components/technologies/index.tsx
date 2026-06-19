"use client"
import { ITechnologiesChild, ITechnologies } from "@src/types"
import Image from "next/image"
import { useEffect, useState } from "react"
import { TechnologiesData } from "../../constant"
import { FaArrowRight } from "react-icons/fa"

const Technologies = () => {
    return (
        <section className="mainContainer py-20">
            <div className="text-center">
                <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold leading-tight">
                    Get Expert{" "}
                    <span className="bg-[--primary-theme-color]/10 text-[--primary-theme-color] px-3 rounded-xl">
                        Guidance
                    </span>{" "}
                    And Assured{" "}
                    <span className="bg-[--primary-theme-color]/10 text-[--primary-theme-color] px-3 rounded-xl">
                        Services
                    </span>
                </h1>

                <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mt-3">
                    All In One Hub!
                </h2>

                <p className="text-[--gray] max-w-3xl mx-auto mt-8 text-base md:text-lg">
                    Whether you're starting a new business, managing daily accounts,
                    or navigating compliance, One Hub Solutions is your digital
                    platform designed to simplify it all.
                </p>

                <button className="mt-10 bg-[--primary-theme-color] text-white px-6 py-3 rounded-full font-semibold inline-flex items-center gap-3">
                    <span>Get Started</span>

                    <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <FaArrowRight className="text-[--primary-theme-color] text-sm" />
                    </span>
                </button>
            </div>
        </section>
    );
};

export default Technologies;

