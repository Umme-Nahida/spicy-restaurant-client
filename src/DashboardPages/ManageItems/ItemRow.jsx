import React from "react";
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useMenu from "../../Hooks/useMenu";

const ItemRow = ({ item, index }) => {
  console.log(item);
  const axiosSecure = useAxiosSecure();
  const [,refetch]=useMenu()

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/deleteMenu/${id}`).then((res) => {
          console.log(res.data)
          if (res.data.deletedCount ===1){
            Swal.fire({
              title: "Deleted!",
              text: "this menu is deleted",
              icon: "success",
            });
            refetch()
          }
        });
      }
    });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle h-12 w-12">
            <img src={item.image} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>
        <h1>{item.name}</h1>
      </td>
      <td>${item.price} </td>
      <th>
        <button className="text-2xl">
          {" "}
          <FaEdit></FaEdit>{" "}
        </button>
      </th>
      <th>
        <button onClick={() => handleDelete(item._id)} className="text-2xl">
          {" "}
          <MdDelete></MdDelete>{" "}
        </button>
      </th>
    </tr>
  );
};

export default ItemRow;
