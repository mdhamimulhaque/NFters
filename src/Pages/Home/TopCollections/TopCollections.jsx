import React from 'react';
import Img1 from "../../../assets/images/card colorsBg/4.png";
import Img2 from "../../../assets/images/card colorsBg/7.png";
import Img3 from "../../../assets/images/card colorsBg/5.png";
import Img4 from "../../../assets/images/card colorsBg/6.png";
import User from "../../../assets/images/users/2.png";
import User1 from "../../../assets/images/users/1.png";
import Icon1 from "../../../assets/images/icons/2.png";
import Icon3 from "../../../assets/images/icons/ethereum 3.png";
import Badge from "../../../assets/images/icons/verify 1.png";
import PrimaryCommonButton from '../../../components/Buttons/PrimaryCommonButton';
import PrimaryOutletButton from '../../../components/Buttons/PrimaryOutletButton';
import collectionImg1 from "../../../assets/images/collectins/1.png";
import collectionImg2 from "../../../assets/images/collectins/2.png";
import collectionImg3 from "../../../assets/images/collectins/3.png";
import collectionImg4 from "../../../assets/images/collectins/4.png";
import collectionImg5 from "../../../assets/images/collectins/5.png";

const TopCollections = () => {
    const userData = [
        {
            id: 1,
            name: 'The Futr Abstr',
            userImg: User1,
            icon: Icon3,
            eth: "0.25 ETH",
            range: "1 of 8",
            button: <PrimaryCommonButton>Place a bid</PrimaryCommonButton>,
            cardImg: Img2
        },
        {
            id: 2,
            name: 'The Futr Abstr',
            userImg: User1,
            icon: Icon3,
            eth: "0.25 ETH",
            range: "1 of 8",
            button: <PrimaryOutletButton>Place a bid</PrimaryOutletButton>,
            cardImg: Img3
        },
        {
            id: 3,
            name: 'The Futr Abstr',
            userImg: User1,
            icon: Icon3,
            eth: "0.25 ETH",
            range: "1 of 8",
            button: <PrimaryOutletButton>Place a bid</PrimaryOutletButton>,
            cardImg: Img4
        }
    ]

    const topCollectionsData = [
        {
            id: 1,
            name: 'CryptoFunks',
            img: collectionImg1,
            icon: Icon1,
            total: '19,769.39',
            average: '+26.52%',
            badge: true,
            isRedZone: false
        },
        {
            id: 2,
            name: 'CryptoFunks',
            img: collectionImg2,
            icon: Icon1,
            total: '19,769.39',
            average: '+26.52%',
            badge: false,
            isRedZone: true
        },
        {
            id: 3,
            name: 'CryptoFunks',
            img: collectionImg3,
            icon: Icon1,
            total: '19,769.39',
            average: '+26.52%',
            badge: false,
            isRedZone: false
        },
        {
            id: 4,
            name: 'CryptoFunks',
            img: collectionImg4,
            icon: Icon1,
            total: '19,769.39',
            average: '+26.52%',
            badge: true,
            isRedZone: false
        },
        {
            id: 5,
            name: 'CryptoFunks',
            img: collectionImg5,
            icon: Icon1,
            total: '19,769.39',
            average: '+26.52%',
            badge: false,
            isRedZone: true
        },
    ]
    return (
        <div className='mt-[120px] xl:px-[120px]'>
            <div className='md:section-area-grid px-5'>
                <section className="col-span-12 xl:col-span-8 flex justify-around xl:justify-start gap-2  xl:gap-8 flex-col md:flex-row">
                    <div className='large_card_area mb-10'>
                        <div className='bg-line_gray rounded-2xl'>
                            <img src={Img1} alt="img" className='transform hover:rotate-90 hover:scale-75 transition duration-300' />
                        </div>

                        <div className="flex justify-between mt-8">
                            <article className='flex gap-2'>
                                <div>
                                    <img src={User} alt="img" />
                                </div>
                                <div>
                                    <h4>The Futr Abstr</h4>
                                    <p className='text-DMSans text-sm text-light_text'>10 in the stock</p>
                                </div>
                            </article>

                            <article className='text-DMSans'>
                                <div className='text-dark_Gray_text text-xs mb-2 font-medium'>Highest Bid</div>
                                <div className='flex gap-2 items-center'>
                                    <div><img src={Icon1} alt="img" /></div>
                                    <div className='font-bold'>0.25 ETH</div>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className='small_card_area flex flex-col gap-8'>
                        {
                            userData.map(user =>
                                <div className='flex gap-2 lg:gap-10 xl:gap-4'>
                                    <div className='bg-line_gray rounded-2xl'>
                                        <img src={user.cardImg} alt="img" className='transform  hover:rotate-45 transition duration-300' />
                                    </div>
                                    <article key={user.id} className='flex flex-col gap-2'>
                                        <h4>{user.name}</h4>
                                        <div className='flex items-center gap-2 pt-1 pb-2'>
                                            <img src={user.userImg} alt="img" />
                                            <div className='flex items-center gap-1 border border-custom_green rounded-md p-2'>
                                                <img src={user.icon} alt="img" />
                                                <span className='text-custom_green font-DMSans bold text-xs'>{user.eth}</span>
                                            </div>
                                            <p className='text-liter_text text-sm'>{user.range}</p>
                                        </div>
                                        <div>{user.button}</div>
                                    </article>
                                </div>)
                        }

                    </div>
                </section>

                <aside className="col-span-12 xl:col-span-4 border-l border-collection_border pl-2 md:pl-12 mt-10 md:mt-0">
                    <article className='mb-5'>
                        <h4 className='font-IntegralCF '>Top Collections over </h4>
                        <p className='text-primary font-bold text-lg'>Last 7 days</p>
                    </article>
                    {
                        topCollectionsData.map((data, index) =>
                            <section key={data.id} className='flex items-center gap-6 border-b border-collection_border py-5'>
                                <span className='text-2xl font-DMSans font-bold'>{index + 1}</span>
                                <div className='relative'>
                                    <img src={data.img} alt="img" />
                                    {
                                        data.badge && <img src={Badge} alt="img" className='absolute top-[-6px] right-[-5px]' />
                                    }

                                </div>
                                <article >
                                    <p className='font-medium font-DMSans'>{data.name}</p>
                                    <div className='flex items-center gap-1'>
                                        <img src={data.icon} alt="img" />
                                        <p className='text-sm font-semibold font-Poppins text-collection_text'>{data.total}</p>
                                    </div>
                                </article>
                                <h2 className={`font-semibold text-xl font-Poppins ${data.isRedZone ? 'text-collection_text_color2' : 'text-collection_text_color1'} `}>{data.average}</h2>
                            </section>)
                    }

                </aside>
            </div>
        </div>
    );
};

export default TopCollections;