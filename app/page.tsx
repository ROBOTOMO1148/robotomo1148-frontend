import { FC } from 'react';
import Link from "next/link";
import Image from "next/image";

const HomePage: FC = () => {
    return (
        <main className='main'>
            <div className="bottom">
                <Image className='wave' src='/wave.svg' width='1440' height='320' alt=''/>
                <div className="bottom__inner">
                    <div className='news'>
                        <Link href='/news' className="news__link">
                            <span className='news__title'>ROBOTOMO News</span>
                        </Link>
                        <div className="news__inner">
                            <div className="news__list">
                                <dl>
                                    <dt>2023.1.1</dt>
                                    <dd>
                                        <Link href=''>
                                            公式サイトオープン！公式サイトオープン！公式サイトオープン！公式サイトオープン！公式サイトオープン！公式サイトオープン！公式サイトオープン！公式サイトオープン！公式サイトオープン！公式サイトオープン！公式サイトオープン！
                                        </Link>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>2022.4</dt>
                                    <dd>
                                        <Link href=''>ロボトモ失踪</Link>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>2021.11</dt>
                                    <dd>
                                        <Link href=''>
                                            ロボトモ第1次デビューロボトモ第1次デビューロボトモ第1次デビューロボトモ第1次デビューロボトモ第1次デビューロボトモ第1次デビューロボトモ第1次デビューロボトモ第1次デビューロボトモ第1次デビュー
                                        </Link>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div className="socials">
                        <ul>
                            <li>
                                <a className='socials__link' href="https://twitter.com/ROBOTOMO1148/">
                                    <svg className='socials__icon socials__icon--twitter' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z"/></svg>
                                </a>
                            </li>
                            <li>
                                <a className='socials__link' href="https://youtube.com/@robotomo">
                                    <svg className='socials__icon socials__icon--youtube' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 9.333l5.333 2.662-5.333 2.672v-5.334zm14-4.333v14c0 2.761-2.238 5-5 5h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5zm-4 7c-.02-4.123-.323-5.7-2.923-5.877-2.403-.164-7.754-.163-10.153 0-2.598.177-2.904 1.747-2.924 5.877.02 4.123.323 5.7 2.923 5.877 2.399.163 7.75.164 10.153 0 2.598-.177 2.904-1.747 2.924-5.877z"/></svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <style jsx>{`
            .bottom {
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
            }
            
            .bottom__inner {
                padding: 0 22px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                background: #fefefe;
            }
            
            .wave {
                vertical-align: bottom;
                width: 100%;
                height: auto;
                filter: drop-shadow(3px -5px 3px rgba(2, 183, 236, .35));
            }
            
            .socials ul {
                margin: 0;
                padding: 0;
                display: flex;
            }
            
            .socials li {
                margin-left: 1rem;
                list-style: none;
            }
            
            .socials__link {
                display: block;
                transition: opacity .2s ease-in-out;
            }
            
            .socials__link:hover {
                opacity: .7
            }
            
            .socials__icon {
                width: 6.5rem;
                height: 6.5rem;
            }
            
            .socials__icon--twitter {
                fill: #1da1f2;
            }
            
            .socials__icon--youtube {
                fill: #f00;
            }
            
            .news {
                width: 100%;
                max-width: 600px;
            }
            
            .news__link {
                position: relative;
                bottom: -4rem;
                display: block;
                background: #f5eb11;
                padding: 30px 35px 25px 35px;
                transform: rotate(5deg);
                box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
            }
            
            .news__link:hover .news__title {
                color: #fff;
            }
            
            .news__title {
                position: relative;
                top: -2rem;
                display: block;
                transform: rotate(-5deg);
                font-size: 1.8rem;
                font-weight: 700;
                transition: color .2s ease-in-out;
                color: #444;
            }
            
            .news__inner {
                background: #f39d39;
                padding: 30px 35px 25px 40px;
                font-size: 1.2rem;
                color: #fff;
                transform: rotate(-1.5deg);
                box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
            }
            
            .news__list {
                transform: rotate(1.5deg);
            }
            
            dl {
                margin-top: 5px;
                display: flex;
            }
            
            dl:first-child {
                margin-top: 0;
            }
            
            dt {
                width: 8rem;
            }
            
            dd {
                font-size: 1.4rem;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                width: calc(100% - 8rem);
            }
            
            dd a {
                color: #fff;
                text-decoration: underline;
            }
        `}</style>
        </main>
    );
};

export default HomePage;
