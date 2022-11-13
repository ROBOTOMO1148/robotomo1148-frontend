import { FC, ReactNode } from 'react';
import '../styles/reset.css';
import '../styles/base.css';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

type Props = {
    children?: ReactNode;
}

const HomeLayout: FC<Props> = ({ children }) => {
    return (
        <html lang='ja'>
        <head>
            <title>robotomo1148 official web site</title>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;600&display=swap" rel="stylesheet"/>
        </head>
        <div className='page'>
            <Header/>
            {children}
            <Footer/>
        </div>
        </html>
    );
};


export default HomeLayout;
