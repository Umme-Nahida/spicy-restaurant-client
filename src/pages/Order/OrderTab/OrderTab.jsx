import React from 'react';
import Cart from '../../../Share/CategoryCart/Cart';

const OrderTab = ({items}) => {
    console.log(items)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 lg:gap-10 justify-items-center p-10'>
            {
                items?.map(item=>(
                    <Cart
                     key={item._id}
                     item={item}
                    ></Cart>
                ))
            }
        </div>
    );
};

export default OrderTab;