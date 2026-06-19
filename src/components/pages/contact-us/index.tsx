"use client";

import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Banner from "@src/components/banner";
import ContactForm from "@src/components/Forms/contactForm";

const ContactUs = () => {
    return (
        <div>
            <section className="contactUsBannerSection py-24 mt-24">
                <div className="mainContainer">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

                        {/* Left Side */}
                        <div>
                            <h1 className="text-[40px] md:text-[56px] font-light text-[--secondary-theme-color] mb-8">
                                Get in touch
                            </h1>

                            <p className="text-[--gray] text-lg leading-10 max-w-[650px]">
                                Proin volutpat consequat porttitor cras nullam gravida at.
                                Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem.
                                Arcu sed malesuada et magna.
                            </p>

                            <div className="mt-20 space-y-10">

                                <div className="flex items-start gap-5">
                                    <LocationOnOutlinedIcon
                                        className="text-gray-400 mt-1"
                                        sx={{ fontSize: 35 }}
                                    />

                                    <div>
                                        <p className="text-[--gray] text-[18px]">
                                            S.P.N Mansion 2, Kompally, Hyderabad
                                        </p>

                                        <p className="text-[--gray] text-[18px] mt-1">
                                            Jayabheri Park Rd. 500100
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-5">
                                    <CallOutlinedIcon
                                        className="text-gray-400"
                                        sx={{ fontSize: 35 }}
                                    />

                                    <p className="text-[--gray] text-[18px]">
                                        +91 9182258090
                                    </p>
                                </div>

                                <div className="flex items-center gap-5">
                                    <EmailOutlinedIcon
                                        className="text-gray-400"
                                        sx={{ fontSize: 35 }}
                                    />

                                    <p className="text-[--gray] text-[18px]">
                                        vaishnaviassociates18@gmail.com
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* Right Side Form */}
                        <div>
                            <ContactForm />
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;