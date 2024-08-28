import React from "react";
import SectionTitle from "../../Share/SectionTitle/SectionTitle";
import useMenu from "../../Hooks/useMenu";
import ItemRow from "./ItemRow";


const ManageItems = () => {
  const [menus] = useMenu();
  console.log(menus);
  return (
    <div className="">
      <SectionTitle
        subTitle={"---Hurry Up!---"}
        heading={"MANAGE ALL ITEMS"}
      ></SectionTitle>
      <div className="bg-slate-100 m-20 p-10">
        <h1 className="text-4xl mb-5">Total items {menus?.length} </h1>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                menus?.map((item,index)=>(
                    <ItemRow
                    key={item._id}
                    item={item}
                    index={index}
                    ></ItemRow>
                ))
              }
            </tbody>
            
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
