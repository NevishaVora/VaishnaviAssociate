"use client";

import { FeaturesData } from "../../constant";
import { IFeaturesData } from "@src/types";

const popularTags = [
    "Consultation",
    "Customer Support",
    "IT Solutions",
    "Marketing Strategy",
    "Financial Advisory",
    "Tax Assistance",
    "Business Growth",
    "Legal Services",
    "Project Management",
    "Digital Marketing",
    "SEO Optimization",
    "HR & Recruitment",
    "Brand Development",
    "E-commerce Solutions",
    "Freelance Services",
    "Software Development",
    "Cloud Services",
    "Cybersecurity",
];

const Features = () => {
    return (
        <section className="bg-[#f5f8fc] py-20">
            <div className="mainContainer">

                {/* Heading */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <span className="text-[--primary-theme-color] uppercase tracking-wider text-sm font-medium">
                        What We Provide
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-5">
                        Find Your Solution For Service
                    </h2>

                    <p className="text-gray-600 text-lg leading-relaxed">
                        Concerned about service issues? We're here with effective
                        solutions! Our commitment is to providing reliable,
                        high-quality services tailored to your needs.
                    </p>
                </div>

                {/* Services */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

                    {FeaturesData.slice(0, 3).map(
                        (val: IFeaturesData, index: number) => (
                            <div
                                key={index}
                                className="text-center lg:text-left"
                            >
                                {/* Icon */}
                                <div className="mb-6 flex justify-center lg:justify-start">
                                    <div className="w-20 h-20 rounded-full border border-[--primary-theme-color] flex items-center justify-center">
                                        <img
                                            src={val.image}
                                            alt={val.name}
                                            className="w-10 h-10 object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-4 leading-tight">
                                    {val.name}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 text-base lg:text-lg leading-8">
                                    {val.details}
                                </p>
                            </div>
                        )
                    )}
                </div>

                {/* Popular Tags Section */}
                <div className="mt-24 text-center">

                    <span className="text-[--primary-theme-color] uppercase tracking-wider text-sm font-medium">
                        Popular Tags
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-10">
                        Checkout Popular Tags
                    </h2>

                    <div className="flex flex-wrap justify-center gap-3 max-w-6xl mx-auto">
                        {popularTags.map((tag, index) => (
                            <div
                                key={index}
                                className="px-5 py-2.5 rounded-lg bg-white border border-gray-200 text-gray-700 text-base shadow-sm"
                            >
                                {tag}
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Features;