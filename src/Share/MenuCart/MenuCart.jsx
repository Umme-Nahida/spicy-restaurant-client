import React from 'react';

const MenuCart = ({item}) => {
    // console.log(item)
    return (
        <div className='flex items-center gap-x-4'>
            <img src={item?.image} alt="" style={{borderRadius: "0px 200px 200px 200px"}} className='w-[100px] duration-500 hover:scale-110' />
            <div>
                <h1 className='text-2xl'>{item?.name}</h1>
                <p>{item?.recipe} </p>
            </div>
            <div>
                <p>${item?.price} </p>
            </div>
        </div>
    );
};

export default MenuCart;