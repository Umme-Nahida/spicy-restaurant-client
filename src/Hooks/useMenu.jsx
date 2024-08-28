import React, { useEffect, useState } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useMenu = () => {
    const axiosSecure = useAxiosSecure()
    
    const {refetch,data:menus}=useQuery({
      queryKey:['menus'],
      queryFn:async()=>{
        const res = await axiosSecure.get('/menus')
        return res.data
        
      }
    })
   
   

    console.log(menus)
    return [menus,refetch]
};

export default useMenu;