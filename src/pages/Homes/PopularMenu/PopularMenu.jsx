import React from 'react';
import SectionTitle from '../../../Share/SectionTitle/SectionTitle';
import useMenu from '../../../Hooks/useMenu';
import MenuCart from '../../../Share/MenuCart/MenuCart';

const PopularMenu = () => {
   const [menus] = useMenu();
    return (
        <div className='p-5 lg:p-20 '>
            <SectionTitle subTitle={"---Check it out---"} heading={"FROM OUR MENU"}></SectionTitle>
            {/* display menu items */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
               {
                menus?.slice(0,6)?.map(item=>(
                    <MenuCart
                    item={item}
                    key={item._id}
                    ></MenuCart>
                ))
               }
            </div>
            <div className='mx-auto text-center mt-10'>
            <button className='btn  bg-white border-b-4 border-black hover:bg-yellow-500 hover:text-white  '>VIEW FULL MENU</button>
            </div>
        </div>
    );
};

export default PopularMenu;