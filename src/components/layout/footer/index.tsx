"use client";

import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { InformationData, Logos } from "../../../constant";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[--primary-theme-color]/10">
      <div className="mainContainer py-10">

        {/* Top Row */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 pb-8">
          
          {/* Logo */}
          <div className="w-[130px]">
            <Image
              src={Logos.verticalBlackLogo}
              alt="OneHub Logo"
              width={500}
              height={200}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center gap-6 text-[--gray] text-sm lg:text-base">
            <Link
              href={`tel:${InformationData.contactNumber}`}
              className="flex items-center gap-2 hover:text-[--primary-theme-color] transition-all"
            >
              <CallIcon fontSize="small" />
              <span>{InformationData.contactNumber}</span>
            </Link>

            <Link
              href={`mailto:${InformationData.email}`}
              className="flex items-center gap-2 hover:text-[--primary-theme-color] transition-all"
            >
              <EmailIcon fontSize="small" />
              <span>{InformationData.email}</span>
            </Link>

            <Link
              href="/privacy-policy"
              className="hover:text-[--primary-theme-color] transition-all"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="hover:text-[--primary-theme-color] transition-all"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300"></div>

        {/* Bottom Row */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 pt-6">
          
          <p className="text-sm lg:text-base text-[--gray] text-center lg:text-left">
            © {new Date().getFullYear()} OneHub Solutions. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <Link
              href="#"
              target="_blank"
              className="text-[--gray] hover:text-[--primary-theme-color] transition-all"
            >
              <FacebookIcon />
            </Link>

            <Link
              href="#"
              target="_blank"
              className="text-[--gray] hover:text-[--primary-theme-color] transition-all"
            >
              <LinkedInIcon />
            </Link>

            <Link
              href="#"
              target="_blank"
              className="text-[--gray] hover:text-[--primary-theme-color] transition-all"
            >
              <InstagramIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;