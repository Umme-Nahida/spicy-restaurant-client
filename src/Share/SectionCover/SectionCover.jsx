import React from 'react';

const SectionCover = ({title,img,text}) => {
    return (
            <div
        className="hero min-h-[600px]"
        style={{
          backgroundImage:
            `url(${img})`,
        }}
      >
        {/* <div className="hero-overlay bg-opacity-60"></div> */}
        <div className="hero-content text-neutral-content text-center bg-black w-3/6 py-20 bg-opacity-80">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5">
              {text}
            </p>
          </div>
        </div>
      </div>
    );
};

export default SectionCover;