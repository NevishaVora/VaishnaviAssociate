"use client"
import ClearAllIcon from '@mui/icons-material/ClearAll';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LoginIcon from '@mui/icons-material/Login';
import { IRoutesChild, IRoutes } from '@src/types';
import Image from "next/image";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from "react";
import { Logos, Routes } from '../../../constant';
import MobileDrawer from '../mobileNavbar';

const Navbar = () => {
    const [isMounted, setIsMounted] = useState<boolean>(false)
    const [drawerToggle, setDrawerToggle] = useState<boolean>(false)
    const [isNavbarBg, setIsNavbarBg] = useState<boolean>(false)
    const [hoveredMenu, setHoveredMenu] = useState<IRoutesChild[]>([])
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)
    const router = useRouter()
    const pathname = usePathname()

    const sideNavHandler = () => setDrawerToggle(true)

    const navbarBgVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 15) {
            setIsNavbarBg(true)
        }
        else {
            setIsNavbarBg(false)
        }
    };

    if (typeof window !== 'undefined') window.addEventListener('scroll', navbarBgVisible)

    const clickHandler = (path: string) => {
        setIsMegaMenuOpen(false)
        router.push(path)
    }

    useEffect(() => {
        setIsMounted(true)
    }, [])
    const allItems = hoveredMenu.flatMap(
        (category) => category.child || []
    );

    const chunkSize = Math.ceil(allItems.length / 4);

    const columns = [
        allItems.slice(0, chunkSize),
        allItems.slice(chunkSize, chunkSize * 2),
        allItems.slice(chunkSize * 2, chunkSize * 3),
        allItems.slice(chunkSize * 3),
    ];
    if (!isMounted) return null;

    return (
        <div className="fixed top-0 left-0 w-full z-50 flex flex-col relative">
            {/* Top Bar Banner */}
            {/* <div className="bg-black text-white py-2 px-4 flex justify-center items-center text-xs sm:text-sm font-semibold tracking-wide">
                <span className="opacity-90">Become a service provider?</span>
                <Link href="/login" className="text-white hover:text-[--primary-theme-color] underline ml-1.5 flex items-center gap-1 transition-all duration-300">
                    Click Here <ArrowForwardIcon style={{ fontSize: '15px' }} />
                </Link>
            </div> */}
            {/* Main Navbar */}
            <div className={`${isNavbarBg ? "bg-[--white] shadow-md border-b border-gray-100" : "bg-transparent"} w-full transition-all duration-500`}>
                <div className="mainContainer py-1 flex justify-between items-center">
                    <Link href="/" className="w-[60px] lg:w-[75px] block">
                        <Image
                            src={Logos.verticalBlackLogo}
                            alt="Vaishanvi Associate Solutions Logo"
                            width={1500}
                            height={1500}
                            className="w-full h-full object-contain"
                            priority
                        />
                    </Link>
                    <div className="navMenuItems hidden lg:flex items-center space-x-2 xl:space-x-4 2xl:space-x-5 3xl:space-x-7">
                        {Routes.map((route: IRoutes, index: number) => (
                            <React.Fragment key={index}>
                                <li
                                    className={`relative list-none text-[14px] xl:text-[14px] font-semibold font-semibold hover:text-[--primary-theme-color] transition-all ease-in-out duration-500 p-1 cursor-pointer ${pathname === route.path && "!text-[--primary-theme-color]"}`}
                                    onMouseEnter={() => {
                                        if (route?.child?.length) {
                                            setHoveredMenu(route.child)
                                            setIsMegaMenuOpen(true)
                                        }
                                    }}
                                    onClick={() => {
                                        if (!route?.child?.length) {
                                            router.push(route.path)
                                        }
                                    }}
                                ><span>{route.name}</span> {route?.child && <KeyboardArrowDownOutlinedIcon style={{ fontSize: '16px' }} />}</li>
                            </React.Fragment>
                        ))}
                    </div>
                    <div className='flex items-center space-x-4'>
                        <button aria-label="Open mobile menu" onClick={sideNavHandler} className='lg:hidden cursor-pointer p-1'>
                            <ClearAllIcon className={`text-[30px] md:text-[40px]`} />
                        </button>
                    </div>
                </div>
            </div>
            <div
                onMouseEnter={() => setIsMegaMenuOpen(true)}
                onMouseLeave={() => setIsMegaMenuOpen(false)}
                className={`
        absolute
        top-full
        left-1/2
        -translate-x-1/2
        w-[72%]
        mt-0
        z-50
        transition-all
        duration-300
        ease-out
        ${isMegaMenuOpen
                        ? "opacity-100 translate-y-0 visible"
                        : "opacity-0 -translate-y-3 invisible pointer-events-none"
                    }
    `}
            >
               <div className="bg-white rounded-xl border border-gray-100 px-8 py-6 shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
                    <div className="grid grid-cols-4 gap-x-12">

                        {columns.map((column, index) => (
                            <div key={index}>
                                {column.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="
                                mb-4
                                text-[14px]
                                font-semibold
                                text-[#1F2A44]
                                cursor-pointer
                                hover:text-[--primary-theme-color]
                                transition-all
                                duration-200
                                leading-[1.4]
                            "
                                        onClick={() => clickHandler(item.path)}
                                    >
                                        {item.name}
                                    </div>
                                ))}
                            </div>
                        ))}

                    </div>
                </div>
            </div>
            <MobileDrawer drawerToggle={drawerToggle} setDrawerToggle={setDrawerToggle} />
        </div >
    )
}

export default Navbar