import React from 'react';
import SectionTitle from '../../../Share/SectionTitle/SectionTitle';
import useMenu from '../../../Hooks/useMenu';
import Cart from '../../../Share/CategoryCart/Cart';

const Chef = () => {
    const [menus] = useMenu()
    return (
        <div className='my-10'>
           <SectionTitle subTitle={"---Should Try---"} heading={"CHEF RECOMMENDS"}></SectionTitle>
           {/* cart items */}
           <div className='grid grid-cols-1 lg:grid-cols-3 justify-items-center px-20'> 
            {
               menus.slice(0,3).map(item=>(
                <Cart
                key={item._id}
                item={item}
                ></Cart>
               ))
            }
           </div>
        </div>
    );
};

export default Chef;