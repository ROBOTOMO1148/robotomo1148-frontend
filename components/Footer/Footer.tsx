import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <>
            <footer className='footer'>
                &copy; ROBOTOMO1148
            </footer>
            <style jsx>{`
            .footer {
                background: #fefefe;
                padding: 0 22px 10px;
                width: 100%;
                text-align: right;
                font-size: 1rem;
            }
            `}</style>
        </>
    )
}
