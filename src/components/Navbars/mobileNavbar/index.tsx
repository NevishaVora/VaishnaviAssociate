"use client"
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
// parent expand/collapse will use Add/Remove (plus/minus)
import RemoveIcon from '@mui/icons-material/Remove';
import { Collapse, List, ListItemButton } from '@mui/material';
import { Logos, Routes } from '@src/constant';
import { IMobileDrawerProps, IRoutesChild, IRoutes } from '@src/types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const MobileDrawer = ({ drawerToggle, setDrawerToggle }: IMobileDrawerProps) => {
    const [tabOpenIndex, setTabOpenIndex] = useState<null | number>(null);
    const router = useRouter();

    const handleTabClick = (index: number) => setTabOpenIndex((prevIndex: null | number) => (prevIndex === index ? null : index));

    const sideNavCloseHandler = () => setDrawerToggle(false)

    useEffect(() => {
        if (drawerToggle) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [drawerToggle]);

    return (
        <div onClick={(e) => { if (e.target === e.currentTarget) sideNavCloseHandler(); }} className={drawerToggle ? 'fixed inset-0 z-[9999] bg-[--shadow-color] lg:hidden' : 'hidden'}>
            <div className={`fixed top-0 left-0 w-full sm:w-[320px] h-full bg-[--white] transition-transform ease-in-out duration-500 overflow-y-auto ${drawerToggle ? 'translate-x-0' : '-translate-x-full'} z-[10000]`}>
                <div className="flex justify-between items-center pb-2 pt-2 px-4">
                    <button aria-label="Close mobile menu" onClick={sideNavCloseHandler} className="p-2">
                        <CloseIcon fontSize="medium" />
                    </button>

                    <div className="w-16 h-16 ml-7 flex items-center justify-center">
                        <Image
                            src={Logos.verticalBlackLogo}
                            alt="logo"
                            width={64}
                            height={64}
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
                <List component="nav" className='space-y-0'>
                    {Routes.map((val: IRoutes, index: number) => (
                        <div key={index} className='w-full '>
                            <ListItemButton >
                                <div className={`flex items-center justify-between gap-2 w-full border-b-2 border-[#CCD3D1] pb-1 tracking-wider transition-all ease-in-out duration-500`}>
                                    <li className='text-[18px] sm:text-[20px] capitalize font-semibold px-0 py-1 flex-1' onClick={() => {
                                        if (!val?.child) {
                                            router.push(val.path)
                                            sideNavCloseHandler()
                                        }
                                    }}>{val.name}</li>

                                    {val?.child && (
                                        <div className='p-2 cursor-pointer flex-shrink-0' onClick={(e) => { e.stopPropagation(); handleTabClick(index); }}>
                                            {tabOpenIndex === index ? <RemoveIcon /> : <AddIcon />}
                                        </div>
                                    )}
                                </div>
                            </ListItemButton>
                            {val?.child &&
                                <Collapse in={tabOpenIndex === index} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        {val?.child?.map((childRoute: IRoutesChild, idx: number) => {
                                            return (
                                                <div key={idx}>
                                                    <div className="px-4">
                                                        <h3 className="text-[16px] font-semibold text-[--secondary-theme-color] mb-1">
                                                            {childRoute.name}
                                                        </h3>

                                                        {childRoute?.child?.map((subChild, i) => (
                                                            <div
                                                                key={i}
                                                                className="pl-4 py-1 text-[15px] text-[--gray] cursor-pointer hover:text-[--primary-theme-color]"
                                                                onClick={() => {
                                                                    router.push(subChild.path);
                                                                    sideNavCloseHandler();
                                                                    setTabOpenIndex(null);
                                                                }}
                                                            >
                                                                 -  {subChild.name}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </List>
                                </Collapse>
                            }
                        </div>
                    ))}
                </List>
            </div>
        </div >
    )
}

export default MobileDrawer