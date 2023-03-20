import React from 'react';

const PrimaryOutletButton = ({ children }) => (
    <button className="group relative overflow-hidden  bg-white commonBtn-outLate rounded-full py-4 px-8 font-DMSans text-xs font-bold">
        <div className="absolute inset-0 w-0 bg-primary transition-all duration-[250ms] ease-out group-hover:w-full"></div>
        <span className="relative text-primary group-hover:text-white">{children}</span>
    </button>
);

export default PrimaryOutletButton;