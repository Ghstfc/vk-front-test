// index.js
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";
import React from "react";
import {App} from "@/components/App";
import {cookies} from "next/headers";
import {EffectorNext} from "@effector/next";


export default async function RootLayout({
                                             children,
                                         }: Readonly<{
    children: React.ReactNode;
}>) {

    const cook = await cookies()
    const theme = cook.get('theme')?.value
    const compact = cook.get('compact')?.value

    return (
        <html lang="en">
        <body>
        <EffectorNext>
            {/*header*/}
            <main>
                <App theme={theme} compact={compact}>
                    {children}
                </App>
            </main>
            {/*footer*/}
        </EffectorNext>
        </body>
        </html>
    );
}