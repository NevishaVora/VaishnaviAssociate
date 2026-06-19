"use client";

import Image from "next/image";
import { InformationData, Logos } from "../../constant";

export default function LoginPage() {
    return (
        <section className="min-h-screen bg-[#f5f5f5] flex items-center justify-center p-4">
            <div className="w-full max-w-7xl grid lg:grid-cols-2 overflow-hidden">

                {/* Left Side Image */}
                <div className="hidden lg:block relative min-h-[700px]">
                    <Image
                        src="/images/home-vector.webp"
                        alt="login"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Right Side Form */}
                <div className="flex items-center justify-center px-6 md:px-12 py-10">
                    <div className="w-full max-w-md">

                        <div className="flex justify-center mb-10">
                            <Image
                                                        src={Logos.verticalBlackLogo}
                                                        alt="logo"
                                                        width={64}
                                                        height={64}
                                                        className="h-[64px] w-[64px] object-contain"
                                                    />
                        </div>

                        <h1 className="text-4xl font-light text-center text-black">
                            Sign in to your account
                        </h1>

                        <p className="text-center text-gray-500 mt-3 mb-10">
                            Get your OTP on WhatsApp for quick login.
                        </p>

                        <div>
                            <label className="block mb-2 text-lg font-medium">
                                Phone number
                            </label>

                            <input
                                type="tel"
                                placeholder=""
                                className="w-full h-14 border border-gray-300 rounded-xl px-4 outline-none focus:border-black"
                            />
                        </div>

                        <button
                            className="w-full bg-black text-white h-14 rounded-xl mt-8 text-xl font-medium hover:opacity-90 transition"
                        >
                            Sign In
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
}