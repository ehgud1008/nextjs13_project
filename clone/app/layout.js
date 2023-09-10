//import React from "react";
import '@styles/global.css';
import Nav from "@components/Nav";

export const metadata = {
    title: "Project",
    description: 'NextJS 13 & React'
}

const RootLayout = ({children}) => {
    return (
        <html lang="ko">
            <body>
                    <div className='main'>
                        <div className='gradient'></div>
                    </div>
                    <main className='app'>
                        <Nav></Nav>
                        {children}
                    </main>
            </body>
        </html>
    )
}

export default RootLayout;