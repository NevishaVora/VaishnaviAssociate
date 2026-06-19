"use client";

import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { InformationData, Logos } from "../../../constant";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[--primary-theme-color]/10 text-[--gray]">
      <div className="mainContainer py-12">
        <div className="grid gap-14 lg:grid-cols-3">
          <div className="space-y-5">
            <div className="w-[150px]">
              <Image
                src={Logos.verticalBlackLogo}
                alt="Vaishnavi Associates Logo"
                width={500}
                height={200}
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="text-sm leading-7">
              Vaishnavi Associates provides trusted registration, loan, compliance and IT services for businesses across Ahmedabad and beyond.
            </p>
          </div>

          <div className="grid gap-8  mt-4 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[--primary-theme-color]">Company</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/registrations/trade-license" className="hover:text-[--primary-theme-color] transition-all">
                    Trade License
                  </Link>
                </li>
                <li>
                  <Link href="/loans/business-loan" className="hover:text-[--primary-theme-color] transition-all">
                    Business Loans
                  </Link>
                </li>
                <li>
                  <Link href="/compliance/itr-filing" className="hover:text-[--primary-theme-color] transition-all">
                    ITR Filing
                  </Link>
                </li>
        
                <li>
                  <Link href="/contact-us" className="hover:text-[--primary-theme-color] transition-all">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            
          </div>

          <div className="space-y-5 mt-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-[--primary-theme-color]">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <CallIcon fontSize="small" />
                <Link href={`tel:${InformationData.contactNumber}`} className="hover:text-[--primary-theme-color] transition-all">
                  {InformationData.contactNumber}
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <EmailIcon fontSize="small" />
                <Link href={`mailto:${InformationData.email}`} className="hover:text-[--primary-theme-color] transition-all">
                  {InformationData.email}
                </Link>
              </li>
              <li className="text-sm">
                <span className="font-semibold">Website: </span>
                <Link
                  href={InformationData.website}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[--primary-theme-color] transition-all"
                >
                  {InformationData.website.replace(/^https?:\/\//, "")}
                </Link>
              </li>
              <li className="text-sm">
                <span className="font-semibold">Address: </span>
                <span>{InformationData.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-10 pt-6 flex flex-col lg:flex-row items-center justify-between gap-4 text-sm">
          <p>© {new Date().getFullYear()} Vaishnavi Associates. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" target="_blank" className="text-[--gray] hover:text-[--primary-theme-color] transition-all">
              <FacebookIcon />
            </Link>
            <Link href="#" target="_blank" className="text-[--gray] hover:text-[--primary-theme-color] transition-all">
              <LinkedInIcon />
            </Link>
            <Link href="#" target="_blank" className="text-[--gray] hover:text-[--primary-theme-color] transition-all">
              <InstagramIcon />
            </Link>
            <Link href={`https://wa.me/918121923831`} target="_blank" className="text-[--gray] hover:text-[--primary-theme-color] transition-all">
              <WhatsAppIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;