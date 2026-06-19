"use client"
import ClearAllIcon from '@mui/icons-material/ClearAll';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LoginIcon from '@mui/icons-material/Login';
import { Popover } from '@mui/material';
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
    const [anchorElServices, setAnchorElServices] = useState<HTMLElement | null>(null)
    const [selectedTechnologies, setSelectedTechnologies] = useState<IRoutesChild[]>([])
    const router = useRouter()
    const pathname = usePathname()

    const popupOpenHandler = (event: React.MouseEvent<HTMLElement>) => setAnchorElServices(event.currentTarget)
    const popupCloseHandler = () => setAnchorElServices(null)
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
        popupCloseHandler()
        router.push(path)
    }

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null;

    return (
        <div className="fixed top-0 left-0 w-full z-50 flex flex-col">
            {/* Top Bar Banner */}
            {/* <div className="bg-black text-white py-2 px-4 flex justify-center items-center text-xs sm:text-sm font-semibold tracking-wide">
                <span className="opacity-90">Become a service provider?</span>
                <Link href="/login" className="text-white hover:text-[--primary-theme-color] underline ml-1.5 flex items-center gap-1 transition-all duration-300">
                    Click Here <ArrowForwardIcon style={{ fontSize: '15px' }} />
                </Link>
            </div> */}
            {/* Main Navbar */}
            <div className={`${isNavbarBg ? "bg-[--white] shadow-md border-b border-gray-100" : "bg-transparent"} w-full transition-all duration-300`}>
                <div className="mainContainer py-4 flex justify-between items-center">
                    <Link href="/" className="w-[80px] lg:w-[100px] 3xl:w-[120px] block">
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
                                <li className={`relative list-none text-[13px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] font-semibold hover:text-[--primary-theme-color] transition-all ease-in-out duration-500 p-1 cursor-pointer ${pathname === route.path && "!text-[--primary-theme-color]"}`}
                                    onClick={(e) => {
                                        if (route?.child && route?.child?.length > 0) {
                                            popupOpenHandler(e)
                                            setSelectedTechnologies(route?.child)
                                        } else {
                                            router.push(route.path)
                                        }
                                    }}><span>{route.name}</span> {route?.child && <KeyboardArrowDownOutlinedIcon style={{ fontSize: '16px' }} />}</li>
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
            <Popover
                open={Boolean(anchorElServices)}
                anchorEl={anchorElServices}
                onClose={popupCloseHandler}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                PaperProps={{
                    sx: {
                        width: '100vw',
                        left: 0,
                        right: 0,
                        margin: 0,
                        bgcolor: 'transparent',
                        boxShadow: 'none',
                    }
                }}
            >
                <div className="w-full flex justify-center">
                    <div className={`w-[95%] bg-white rounded-xl overflow-hidden mt-2 transform transition-all duration-300 ease-out ${Boolean(anchorElServices) ? 'shadow-2xl ring-1 ring-gray-200 scale-100 opacity-100 translate-y-0' : 'shadow-sm scale-95 opacity-0 -translate-y-2'}`}>
                        <div className={`py-7 px-8 w-full flex flex-wrap items-start justify-between gap-8`}> 
                            {selectedTechnologies?.map((technology: IRoutesChild, idx: number) => (
                                <div className={`space-y-2 min-w-[180px]`} key={idx}>
                                    <h1 className='text-lg font-semibold !mb-3 whitespace-nowrap truncate max-w-xs'>{technology.name}</h1>
                                    <ul className='space-y-1'>
                                        {technology?.child?.map((techChild: { name: string, path: string, image?: string }, i: number) => {
                                            return (
                                                <li
                                                    key={i}
                                                    className='py-[6px] px-2 rounded-lg text-[14px] font-medium text-[--gray] cursor-pointer tracking-wider hover:bg-[--background-color] hover:text-[--primary-theme-color] transition-all ease-in-out duration-500 whitespace-nowrap'
                                                    onClick={() => clickHandler(techChild.path)}
                                                >
                                                    {techChild.name}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Popover>
            <MobileDrawer drawerToggle={drawerToggle} setDrawerToggle={setDrawerToggle} />
        </div >
    )
}

export default Navbar