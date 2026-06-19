"use client"

import { useState } from "react"
import Features from "@src/components/features"
import HomeBanner from "@src/components/homeBanner"
import Technologies from "@src/components/technologies"
import Image from "next/image"

const testimonials = [
    {
        image: "/images/techonologies/reactNative.png",
        name: "Sarah Johnson",
        designation: "Marketing Director",
        company: "TechCorp",
        text: "This product has completely transformed how our team works. The efficiency gains have been remarkable, and the support team is always responsive."
    },
    {
        image: "/images/techonologies/android.svg",
        name: "Michael Chen",
        designation: "CTO",
        company: "InnovateLabs",
        text: "We've tried many similar solutions, but this one stands out for its intuitive design and powerful features. It's been a game-changer for our development process."
    },
    {
        image: "/images/techonologies/flutter.svg",
        name: "Emma Wilson",
        designation: "Product Manager",
        company: "FutureSoft",
        text: "Outstanding service and exceptional quality. The implementation was smooth and the results exceeded our expectations."
    }
]

const Home = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <>
            <HomeBanner />

            <Technologies />

            <div className="relative">
                <Features />

                <div className="animatedBannerGradientCircle hidden sm:block absolute top-80 -left-48 h-[350px] w-[350px] rounded-full z-[-1] p-16 opacity-40">
                    <div className="w-full h-full bg-[--white] rounded-full"></div>
                </div>

                {/* Testimonials Section */}
                <section className="mainContainer py-10 md:py-20">

                    {/* Heading */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[--black]">
                            What Our{" "}
                            <span className="text-[--primary-color]">
                                Clients
                            </span>{" "}
                            Say
                        </h2>

                        <p className="text-[--gray] mt-4 text-base lg:text-lg">
                            Discover why leading companies trust our solutions
                            to drive their success
                        </p>
                    </div>

                    {/* Testimonial Card */}
                    <div className="relative overflow-hidden rounded-[32px] bg-black shadow-[0_25px_60px_rgba(0,0,0,0.15)] min-h-[380px] flex items-center px-8 lg:px-20 py-10">

                        {/* Right Glow */}
                        <div className="absolute top-0 right-0 h-[350px] w-[350px] bg-[--primary-color] opacity-20 blur-[140px]" />

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-14 items-center w-full">

                            {/* Left Image */}
                            <div className="flex justify-center">
                                <div className="relative">

                                    <div className="absolute inset-0 rounded-full bg-[--primary-color] blur-[45px] opacity-50 scale-110"></div>

                                    <div className="relative p-[5px] rounded-full border-[4px] border-[--primary-color]">
                                        <Image
                                            src={testimonials[activeIndex].image}
                                            alt={testimonials[activeIndex].name}
                                            width={100}
                                            height={100}
                                            className="w-[100px] h-[100px] object-contain"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Right Content */}
                            <div className="text-white">

                                <p className="text-[24px] md:text-[28px] lg:text-[34px] leading-[1.5] font-light max-w-[850px]">
                                    {testimonials[activeIndex].text}
                                </p>

                                <div className="mt-10 border-l-[3px] border-[--primary-color] pl-5">

                                    <h4 className="text-2xl lg:text-3xl font-semibold text-white">
                                        {testimonials[activeIndex].name}
                                    </h4>

                                    <p className="text-gray-400 text-lg lg:text-xl mt-2">
                                        {testimonials[activeIndex].designation},
                                        <span className="text-[--primary-color] ml-2">
                                            {testimonials[activeIndex].company}
                                        </span>
                                    </p>

                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Thumbnails */}
                    <div className="flex justify-center items-center gap-5 mt-12">

                        {testimonials.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`transition-all duration-300 rounded-full ${activeIndex === index
                                        ? "p-[4px] border-[3px] border-[--primary-color]"
                                        : "opacity-50 hover:opacity-100"
                                    }`}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={60}
                                    height={60}
                                    className="w-[60px] h-[60px] rounded-full object-cover"
                                />
                            </button>
                        ))}

                    </div>

                </section>
            </div>
        </>
    )
}

export default Home