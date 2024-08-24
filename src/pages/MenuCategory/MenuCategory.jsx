import React from 'react';
import MenuCart from '../../Share/MenuCart/MenuCart';
import SectionTitle from '../../Share/SectionTitle/SectionTitle';
import SectionCover from '../../Share/SectionCover/SectionCover';
import { Link } from 'react-router-dom';

const MenuCategory = ({item,title,img,text}) => {
    console.log(item)
    return (
        <div className='py-10'>
            {title && <SectionCover title={title} img={img} text={text}></SectionCover>}
            {title=== "offered" && <SectionTitle subTitle={"---Don't miss---"} heading={"TODAY'S OFFER"}></SectionTitle>}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 p-10'>
               {
                item.map(item=>(
                    <MenuCart
                    item={item}
                    key={item._id}
                    ></MenuCart>
                ))
               }
            </div>
            <div className='mx-auto text-center'>
            <Link to={`/order/${title}`}>
            <button className='btn  bg-white border-b-4 border-black hover:bg-yellow-500 hover:text-white  '>ORDER YOUR FAVOURITE FOOD</button>
            </Link>
            </div>
        </div>
    );
};

export default MenuCategory;