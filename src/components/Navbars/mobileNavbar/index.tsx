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
    const [childTabOpenIndex, setChildTabOpenIndex] = useState<null | number>(null);
    const router = useRouter();

    const handleTabClick = (index: number) => setTabOpenIndex((prevIndex: null | number) => (prevIndex === index ? null : index));

    const handleChildTabClick = (index: number) => setChildTabOpenIndex((prevIndex: null | number) => (prevIndex === index ? null : index));

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
                                <div className={`flex items-center justify-between gap-2 w-full border-b-2 border-[#CCD3D1] pb-1 tracking-wider transition-all ease-in-out duration-500` }>
                                    <li className='!text-[20px] capitalize !font-semibold px-0 py-1 flex-1' onClick={() => {
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
                                                    <ListItemButton>
                                                        <div className={`flex items-center justify-between gap-2 w-full border-b-2 border-[#CCD3D1] hover:text-[--primary-theme-color] pb-1 hover:border-[--primary-theme-color] transition-all ease-in-out duration-500 tracking-wider ml-2`}  >
                                                            <li className='!text-[15px] capitalize !font-medium py-1 flex-1' onClick={() => {
                                                                handleChildTabClick(idx)
                                                            }}>{childRoute.name} </li>
                                                            {childRoute?.child && <div className='cursor-pointer flex-shrink-0' onClick={() => {
                                                                handleChildTabClick(idx)
                                                            }}>
                                                                <span>{childTabOpenIndex === idx ? <RemoveIcon /> : <AddIcon />}</span>
                                                            </div>}
                                                        </div>
                                                    </ListItemButton>
                                                    {childRoute?.child &&
                                                        <Collapse in={childTabOpenIndex === idx} timeout="auto" unmountOnExit>
                                                            <List component="div" disablePadding className='space-y-0'>
                                                                {childRoute?.child?.map((subChild: { name: string, path: string, image?: string }, i: number) => {
                                                                    return (
                                                                        <ListItemButton key={i}>
                                                                            <div className={`w-full hover:text-[--black] tracking-wider ml-5`} onClick={() => {
                                                                                router.push(subChild.path)
                                                                                sideNavCloseHandler()
                                                                                setTabOpenIndex(null)
                                                                                setChildTabOpenIndex(null)
                                                                            }} >
                                                                                <li className={`flex items-center space-x-2 !text-sm capitalize text-[--gray]`}>
                                                                                    {subChild.image && (
                                                                                        <Image src={subChild.image} alt='tech-logo' width={1000} height={1000} className='object-contain w-5' />
                                                                                    )}
                                                                                    <span>{subChild.name}</span>
                                                                                </li>
                                                                            </div>
                                                                        </ListItemButton>
                                                                    )
                                                                })}
                                                            </List>
                                                        </Collapse>}
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