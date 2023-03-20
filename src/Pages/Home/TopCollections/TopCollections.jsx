import React from 'react';
import Img1 from "../../../assets/images/card colorsBg/4.png";
import Img2 from "../../../assets/images/card colorsBg/7.png";
import Img3 from "../../../assets/images/card colorsBg/5.png";
import Img4 from "../../../assets/images/card colorsBg/6.png";
import User from "../../../assets/images/users/2.png";
import User1 from "../../../assets/images/users/1.png";
import Icon1 from "../../../assets/images/icons/2.png";
import Icon3 from "../../../assets/images/icons/ethereum 3.png";
import PrimaryCommonButton from '../../../components/Buttons/PrimaryCommonButton';
import PrimaryOutletButton from '../../../components/Buttons/PrimaryOutletButton';

const TopCollections = () => {
    const userData = [
        {
            id: 1,
            name: 'The Futr Abstr',
            userImg: User1,
            icon: Icon3,
            eth: "0.25 ETH",
            range: "1 of 8",
            button: <PrimaryCommonButton>Place a bid</PrimaryCommonButton>
        },
        {
            id: 2,
            name: 'The Futr Abstr',
            userImg: User1,
            icon: Icon3,
            eth: "0.25 ETH",
            range: "1 of 8",
            button: <PrimaryOutletButton>Place a bid</PrimaryOutletButton>
        },
        {
            id: 3,
            name: 'The Futr Abstr',
            userImg: User1,
            icon: Icon3,
            eth: "0.25 ETH",
            range: "1 of 8",
            button: <PrimaryOutletButton>Place a bid</PrimaryOutletButton>
        }
    ]
    return (
        <div className='mt-[120px] xl:px-[120px]'>
            <div className='section-area-grid'>
                <section className="col-span-8 flex gap-10">
                    <div className='large_card_area'>
                        <div className='bg-light_bg rounded-2xl'>
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
                    <div className='small_card_area flex flex-col gap-10'>
                        {
                            userData.map(user => <article key={user.id} className='flex flex-col gap-2'>
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
                            </article>)
                        }

                    </div>
                </section>

                <section className="col-span-4">

                </section>
            </div>
        </div>
    );
};

export default TopCollections;