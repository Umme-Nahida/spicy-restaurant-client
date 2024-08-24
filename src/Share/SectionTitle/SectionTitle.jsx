import React from 'react';


const SectionTitle = ({subTitle,heading}) => {
    return (
        <div className='w-96 text-center mx-auto my-10'>
            <h5 className='text-base text-yellow-400 mb-2'>{subTitle}</h5>
            <h1 className='text-xl lg:text-2xl text-slate-400 uppercase font-semibold py-3 border-y-2  mx-auto'>{heading}</h1>
        </div>
    );
};

export default SectionTitle;