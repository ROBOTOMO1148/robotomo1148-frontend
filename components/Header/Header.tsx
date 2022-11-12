import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <header className='header'>
            <div className='logo'>
                <Link href='/'>
                    <Image src='/logo.svg' width='220' height='50' alt='ROBOTOMO1148' />
                </Link>
            </div>
            <nav>
                <ul className='nav'>
                    <li className='nav__item'><Link href='/profile'>Profile</Link></li>
                    <li className='nav__item'><Link href='/gamelog'>GameLog</Link></li>
                    <li className='nav__item'><Link href='/photos'><s>Photos</s></Link></li>
                </ul>
            </nav>
            <style jsx>{`
                .header {
                    padding: 10px 22px 0;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                
                .logo {
                    max-width: 220px;
                }
                
                .nav {
                    margin: 0;
                    padding: 0;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                
                .nav__item {
                    margin-left: 20px;
                    font-size: 1.4rem;
                    list-style: none;
                }
                
                a {
                    text-decoration: none;
                }
            `}</style>
        </header>
    )
}
