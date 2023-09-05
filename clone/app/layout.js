//import React from "react";
import '@styles/global.css';
import Nav from "@components/Nav";
//import Provider from '@components/Provider';

export const metadata = {
    title: "Project",
    description: 'NextJS 13 & React'
}

const RootLayout = ({children}) => {
    return (
        <html lang="ko">
            <body>
                {/* <Provider> */}
                    <div className='main'>
                        <div className='gradient'></div>
                    </div>
                    <main className='app'>
                        <Nav></Nav>
                        {children}
                    </main>
                {/* </Provider> */}
            </body>
        </html>
    )
}

export default RootLayout;