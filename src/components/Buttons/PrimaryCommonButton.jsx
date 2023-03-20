import React from 'react';

const PrimaryCommonButton = ({ children }) => (
    <button className="group btn commonBtn relative overflow-hidden">
        {children}
        <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/25 rounded-2xl">
        </div>
    </button>
);


export default PrimaryCommonButton;