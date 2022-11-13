import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <header className='header'>
            <div className='logo'>
                <Link href='/'>
                    <Image className='logo__image' src='/logo.svg' width='236' height='65' alt='ROBOTOMO1148' />
                </Link>
            </div>
            <nav>
                <ul className='nav'>
                    <li className='nav__item'><Link className='nav__link' href='/profile'>Profile</Link></li>
                    <li className='nav__item'><Link className='nav__link' href='/gamelog'>GameLog</Link></li>
                    <li className='nav__item'><Link className='nav__link' href='/photos'><s>Photos</s></Link></li>
                    <li className='nav__item'><Link className='nav__link' href='/goods'><s>Goods</s></Link></li>
                </ul>
            </nav>
            <style jsx>{`
                .header {
                    padding: 10px 22px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    // background: rgba(255, 255, 255, .8);
                }
                
                .logo {
                    max-width: 236px;
                }
                
                .logo__image {
                    filter: drop-shadow(0 2px 5px rgba(0, 0, 0, .4));
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
                
                .nav__link {
                    color: #fff;
                }
                
                a {
                    text-decoration: none;
                }
            `}</style>
        </header>
    )
}
