import { FC, ReactNode } from 'react';
import '../styles/reset.css';
import '../styles/base.css';
import Header from "../components/Header/Header";

type Props = {
    children?: ReactNode;
}

const HomeLayout: FC<Props> = ({ children }) => {
    return (
        <html lang='ja'>
        <head>
            <title>robotomo1148 official web site</title>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;400&display=swap" rel="stylesheet"/>
        </head>
        <div className='page'>
            <Header/>
            {children}
            <footer className='footer'>
                &copy; ROBOTOMO1148
            </footer>
            <style jsx>{`
                .page {
                    position: relative;
                    min-height: 100vh;
                }
                
                .footer {
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    padding: 0 22px 10px;
                    width: 100%;
                    text-align: right;
                    font-size: 1rem;
                }
            `}</style>
        </div>
        </html>
    );
};


export default HomeLayout;
