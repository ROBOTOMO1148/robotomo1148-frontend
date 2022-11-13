import { FC } from 'react';
import Link from "next/link";

const HomePage: FC = () => {
    return (
        <main className='main'>
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
            <style jsx>{`
            .news {
                position: absolute;
                left: 22px;
                bottom: 0;
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
