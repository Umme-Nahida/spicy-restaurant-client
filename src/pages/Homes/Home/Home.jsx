import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../category/Category';
import Details from '../Details/Details';
import PopularMenu from '../PopularMenu/PopularMenu';
import Chef from '../Chef/Chef';
import Featured from '../Featured/Featured';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Details></Details>
            <PopularMenu></PopularMenu>
            <Chef></Chef>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;