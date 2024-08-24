import React from "react";
import SectionCover from "../../Share/SectionCover/SectionCover";
import bannerImg from "../../assets/menu/banner3.jpg"
import useMenu from "../../Hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import SectionTitle from "../../Share/SectionTitle/SectionTitle";
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"

const OurMenu = () => {
    const [menus] = useMenu();
    const offered = menus.filter((item)=>item.category === "offered")
    const salad = menus.filter((item)=>item.category === "salad")
    const pizza = menus.filter((item)=>item.category === "pizza")
    const soup = menus.filter((item)=> item.category === "soup")
    const dessert = menus.filter((item)=>item.category === "dessert")
    
  return (
    <div>
      {/* <SectionCover title={"OUR MENU"} img={bannerImg} text={"WOULD LIKE TO TRY A DISH"}></SectionCover> */}
      {/* offered category */}
      
      <MenuCategory item={offered} title={"offered"} img={bannerImg} text={"WOULD LIKE TO TRY A DISH"}></MenuCategory>
      {/* desser category */}
      <MenuCategory item={dessert} title={"dessert"} img={dessertImg} text={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
      {/* pizza category */}
      <MenuCategory item={pizza} title={"pizza"} img={pizzaImg} text={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
      {/* salad category */}
      <MenuCategory item={salad} title={"salad"} img={saladImg} text={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
      {/* soup category */}
      <MenuCategory item={soup} title={"soup"} img={soupImg} text={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
    </div>
  );
};

export default OurMenu;
