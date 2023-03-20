import React from 'react';
import Img1 from "../../../assets/images/card colorsBg/4.png";
import Img2 from "../../../assets/images/card colorsBg/1.png";
import Img8 from "../../../assets/images/card colorsBg/8.png";
import SImg1 from "../../../assets/images/card colorsBg/s1.png";
import SImg2 from "../../../assets/images/card colorsBg/s2.png";
import SImg3 from "../../../assets/images/card colorsBg/s3.png";
import SImg4 from "../../../assets/images/card colorsBg/s4.png";
import SImg5 from "../../../assets/images/card colorsBg/s5.png";
import SImg6 from "../../../assets/images/card colorsBg/s6.png";
import User from "../../../assets/images/users/2.png";
import PrimaryOutletButton from '../../../components/Buttons/PrimaryOutletButton';

const CollectionFeatures = () => {
    return (
        <div className='bg-light_bg mt-[120px] py-[130px] xl:px-[120px]'>
            <div className='md:section-area-grid px-5'>
                <section className="col-span-12">
                    <h2 className='font-IntegralCF'>The amazing NFT art of the world here</h2>
                </section>

                <section className='col-span-12 md:col-span-6 xl:col-span-4 '>
                    <div className='flex gap-3'>
                        <div>
                            <img src={Img1} alt="img" className='max-w-[265px] w-full' />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <img src={SImg1} alt="img" className='max-w-[105px] w-full' />
                            <img src={SImg2} alt="img" className='max-w-[105px] w-full' />
                            <img src={SImg3} alt="img" className='max-w-[105px] w-full' />
                        </div>
                    </div>

                    <div className="mt-8">
                        <h4>The Futr Abstr</h4>
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-2'>
                                <img src={User} alt="img" />
                                <span className='text-DMSans text-sm font-medium'>by Arkhan</span>
                            </div>
                            <PrimaryOutletButton>Total 54 Items</PrimaryOutletButton>
                        </div>
                    </div>

                </section>
                <section className='col-span-12 md:col-span-6 xl:col-span-4 '>
                    <div className='flex gap-3'>
                        <div>
                            <img src={Img2} alt="img" className='max-w-[265px] w-full' />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <img src={SImg2} alt="img" className='max-w-[105px] w-full' />
                            <img src={SImg1} alt="img" className='max-w-[105px] w-full' />
                            <img src={SImg4} alt="img" className='max-w-[105px] w-full' />
                        </div>
                    </div>

                    <div className="mt-8">
                        <h4>The Futr Abstr</h4>
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-2'>
                                <img src={User} alt="img" />
                                <span className='text-DMSans text-sm font-medium'>by Arkhan</span>
                            </div>
                            <PrimaryOutletButton>Total 54 Items</PrimaryOutletButton>
                        </div>
                    </div>

                </section>
                <section className='col-span-12 md:col-span-6 xl:col-span-4 '>
                    <div className='flex gap-3'>
                        <div>
                            <img src={Img8} alt="img" className='max-w-[265px] w-full' />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <img src={SImg6} alt="img" className='max-w-[105px] w-full' />
                            <img src={SImg5} alt="img" className='max-w-[105px] w-full' />
                            <img src={SImg1} alt="img" className='max-w-[105px] w-full' />
                        </div>
                    </div>

                    <div className="mt-8">
                        <h4>The Futr Abstr</h4>
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-2'>
                                <img src={User} alt="img" />
                                <span className='text-DMSans text-sm font-medium'>by Arkhan</span>
                            </div>
                            <PrimaryOutletButton>Total 54 Items</PrimaryOutletButton>
                        </div>
                    </div>

                </section>

            </div>
        </div>
    );
};

export default CollectionFeatures;