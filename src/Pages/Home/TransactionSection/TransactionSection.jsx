import React from 'react';
import Icon1 from "../../../assets/images/icons/icon-tr-1.png";
import Icon2 from "../../../assets/images/icons/icon-te-2.png";

const TransactionSection = () => {
    return (
        <div className='bg-light_bg mt-[120px] py-[130px] xl:px-[120px]'>
            <div className='md:section-area-grid px-5'>
                <section className="col-span-12 md:col-span-12 xl:col-span-4 mb-12 md:mb-0">
                    <h2 className='font-IntegralCF'>The amazing NFT art of the world here</h2>
                </section>
                <section className="col-span-12 md:col-span-6 xl:col-span-4 flex gap-3 mb-8 md:mb-0">
                    <span>
                        <img src={Icon1} alt="img" className='w-20' />
                    </span>
                    <div className='px-2 md:px-5 '>
                        <h4 className='text-IntegralCF mb-1'>Fast Transaction</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</p>
                    </div>
                </section>
                <section className="col-span-12 md:col-span-6 xl:col-span-4 flex gap-3 mb-8 md:mb-0">
                    <span>
                        <img src={Icon2} alt="img" className='w-20' />
                    </span>
                    <div className='px-2 md:px-2'>
                        <h4 className='text-IntegralCF mb-1'>Growth Transaction</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default TransactionSection;