'use client';

import React, {useState} from 'react';
import {ThemeProvider} from '@gravity-ui/uikit';

import {FontCase, GraduationCap, LayoutHeader, Moon, Sun} from '@gravity-ui/icons';
import {AsideHeader, FooterItem, MenuItem} from '@gravity-ui/navigation';

import styles from "@/app/page.module.css";
import Link from "next/link";
import {setCookie} from "cookies-next";
import {ToastContainer} from "react-toastify";

interface AppProps {
    children: React.ReactNode;
    compact?: string;
    theme?: string;
}

const DEFAULT_THEME = 'light';

export const App = ({children, compact, theme}: AppProps) => {
    const [isLight, setIsLight] = useState<boolean>(theme == DEFAULT_THEME);
    const [isCompact, setIsCompact] = useState(compact ? compact === 'true' : false);


    const menuItems: MenuItem[] = [
        {
            id: 'index',
            title: 'Home',
            icon: LayoutHeader,
            itemWrapper: (p, makeItem) => {
                return <Link className={styles.navLink} href={'/'}>{makeItem(p)}</Link>
            },
        },
        {
            id: 'createNewNote',
            title: 'New note',
            icon: FontCase,
            itemWrapper: (p, makeItem) => {
                return <Link className={styles.navLink} href={'/createNewNote'}>{makeItem(p)}</Link>
            },
        },
    ]

    const handleThemeChange = (isLight: boolean) => {
        if (!theme) {
            setCookie("theme", 'dark');
        } else {
            setCookie("theme", !isLight ? 'light' : 'dark');
        }
        setIsLight(!isLight);
    }

    const handleCompactChange = (isCompact: boolean) => {
        if (!compact) {
            setCookie("compact", false);
        } else {
            setCookie("compact", !isCompact);
        }
        setIsCompact(!isCompact);
    }

    return (
        <ThemeProvider theme={isLight ? 'light' : 'dark'}>
            <AsideHeader
                compact={isCompact}
                renderContent={() => children}
                menuItems={menuItems}
                onChangeCompact={() => handleCompactChange(isCompact)}
                logo={{
                    text: 'VK-test',
                    icon: GraduationCap,
                }}
                renderFooter={() => {
                    return <FooterItem compact={isCompact} item={{
                        id: 'theme',
                        title: isLight ? 'Dark' : 'Light',
                        icon: isLight ? Moon : Sun,
                        itemWrapper: (p, makeItem) => {
                            return (
                                <div className={styles.navLink}
                                     onClick={() => {
                                         handleThemeChange(isLight)
                                     }}
                                >
                                    {makeItem(p)}
                                </div>
                            )
                        },
                    }}/>
                }}
            />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </ThemeProvider>
    );
};
