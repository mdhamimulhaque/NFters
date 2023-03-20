import React from 'react';
import PrimaryCommonLargeButton from '../../../components/Buttons/PrimaryCommonLargeButton';
import Img1 from '../../../assets/images/card colorsBg/1.png';
import Img2 from '../../../assets/images/card colorsBg/2.png';
import Img3 from '../../../assets/images/card colorsBg/3.png';
import User from '../../../assets/images/users/1.png';
import Icon1 from '../../../assets/images/icons/icon1.png';
import Level from '../../../assets/images/label.png';
import DOT from '../../../assets/images/Dot.png';


const TopHeroSection = () => {
    return (
        <div className='section-area-grid'>
            <section className='col-span-12 lg:col-span-5 xl:col-span-6 relative'>
                <h1 className='max-w-[320px] md:max-w-[612px] w-full '>Discover, and collect Digital Art  NFTs </h1>
                <p className='max-w-[320px] md:max-w-[471px] w-full text-lg md:text-xl text-deep_gray font-DMSans pt-5 pb-10'>Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.</p>
                <PrimaryCommonLargeButton>Explore Now</PrimaryCommonLargeButton>
                <article className='flex flex-wrap gap-4 mt-[30px]'>
                    <span>
                        <h1>98k+</h1>
                        <p className='text-xl text-deep_gray'>Artwork</p>
                    </span>
                    <span>
                        <h1>12k+</h1>
                        <p className='text-xl text-deep_gray'>Auction</p>
                    </span>
                    <span>
                        <h1>15k+</h1>
                        <p className='text-xl text-deep_gray'>Artist</p>
                    </span>
                </article>
                <img src={DOT} alt="img" className='absolute left-[-50px] bottom-2 z-[-10]' />
            </section>

            <section className='col-span-12 lg:col-span-7 xl:col-span-6'>
                <div className='flex justify-start md:justify-center xl:justify-end'>
                    <div className="card_img_1 z-10 relative">
                        <div className='relative'>
                            <img src={Img1} alt="img" className='object-cover w-[320px] md:w-auto' />
                            <div className="user_info absolute top-6 left-6 text-white">
                                <h2>Abstr Gradient NFT</h2>
                                <div className='flex items-center gap-3 '>
                                    <img src={User} alt="img" />
                                    <h4>Arkhan17</h4>
                                </div>
                            </div>
                            <div className='bg-glass max-w-[300px] md:max-w-[348px] w-full rounded-md p-5 flex justify-between items-center absolute bottom-5 left-1/2 -translate-x-1/2'>
                                <div >
                                    <h4>Current Bid</h4>
                                    <div className='flex gap-3'>
                                        <img src={Icon1} alt="img" />
                                        <span>0.25 ETH</span>
                                    </div>
                                </div>
                                <div>
                                    <h4>Ends in</h4>
                                    <div className='font-bold text-DMSans flex gap-3 text-white'>
                                        <span>12h</span>
                                        <span>43m</span>
                                        <span>42s</span>
                                    </div>
                                </div>
                            </div>
                            <div className='absolute left-[-25px] md:left-[-65px] bottom-28'>
                                <img src={Level} alt="img" className='w-16 md:w-full' />
                            </div>

                        </div>
                        <img src={Img2} alt="img" className='absolute top-4 left-[15px] md:top-6 md:left-[82px] z-[-10] object-cover' />
                        <img src={Img3} alt="img" className='absolute  left-[40px] top-12 md:left-[164px] z-[-20] object-cover' />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TopHeroSection;