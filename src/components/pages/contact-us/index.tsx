"use client";

import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Banner from "@src/components/banner";
import ContactForm from "@src/components/Forms/contactForm";

const ContactUs = () => {
    return (
        <div>
           <section className="contactUsBannerSection py-24 mt-12 md:mt-24">
                <div className="mainContainer">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start">

                        {/* Left Side */}
                        <div>
                            <h1 className="text-[32px] md:text-[56px] font-light text-[--secondary-theme-color] mb-6 md:mb-8">
                                Get in touch
                            </h1>

                            <p className="text-[--gray] text-base md:text-lg leading-7 md:leading-10 max-w-full md:max-w-[650px]">
                                Proin volutpat consequat porttitor cras nullam gravida at.
                                Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem.
                                Arcu sed malesuada et magna.
                            </p>

                            <div className="mt-10 md:mt-20 space-y-8 md:space-y-10">

                                <div className="flex items-start gap-4 md:gap-5">
                                    <LocationOnOutlinedIcon
                                        className="text-gray-400 mt-0"
                                        sx={{ fontSize: { xs: 24, sm: 28, md: 35 } }}
                                    />

                                    <div>
                                        <p className="text-[--gray] text-sm md:text-[18px]">
                                            S.P.N Mansion 2, Kompally, Hyderabad
                                        </p>

                                        <p className="text-[--gray] text-sm md:text-[18px] mt-1">
                                            Jayabheri Park Rd. 500100
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 md:gap-5">
                                    <CallOutlinedIcon
                                        className="text-gray-400"
                                        sx={{ fontSize: { xs: 24, sm: 28, md: 35 } }}
                                    />

                                    <p className="text-[--gray] text-sm md:text-[18px]">
                                        +91 9182258090
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 md:gap-5">
                                    <EmailOutlinedIcon
                                        className="text-gray-400"
                                        sx={{ fontSize: { xs: 24, sm: 28, md: 35 } }}
                                    />

                                    <p className="text-[--gray] text-sm md:text-[18px] break-words">
                                        vaishnaviassociates.services@gmail.com
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