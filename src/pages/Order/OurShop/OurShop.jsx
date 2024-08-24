import React, { useState } from "react";
import img from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SectionCover from "../../../Share/SectionCover/SectionCover";
import useMenu from "../../../Hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const OurShop = () => {
    const categories = ['salad','pizza','soup','dessert','drinks','offered']
    const {category} = useParams();
    const intialIndex = categories.indexOf(category)
    console.log(intialIndex)
    const [itemIndex, setItemIndex] = useState(intialIndex);

    const [menus] = useMenu()
    console.log(category)
    const offered = menus.filter((item)=>item.category === "offered")
    const salad = menus.filter((item)=>item.category === "salad")
    const pizza = menus.filter((item)=>item.category === "pizza")
    const soup = menus.filter((item)=> item.category === "soup")
    const dessert = menus.filter((item)=>item.category === "dessert")
    const drinks = menus.filter((item)=>item.category === "drinks")
    console.log(salad)
  return (
    <div>
      <SectionCover
        title={"Our Shop"}
        img={img}
        text={"WOULD YOU LIKE TO TRY A DISH"}
      ></SectionCover>

      {/* tabs */}
      <div className="p-20">
        <Tabs
          className='text-center'
          selectedIndex={itemIndex}
          onSelect={(index) => setItemIndex(index)}
        >
          <TabList>
            <Tab>salad</Tab>
            <Tab>pizza</Tab>
            <Tab>soup</Tab>
            <Tab>dessert</Tab>
            <Tab>drinks</Tab>
            <Tab>offered</Tab>
          </TabList>

          <TabPanel>
          <OrderTab items={salad}></OrderTab>
          </TabPanel>
          <TabPanel>
          <OrderTab items={pizza}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={soup}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={dessert}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={offered}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
