import React, { useEffect, useState } from 'react';
import useAxiosSecure from './useAxiosSecure';

const useMenu = () => {
    const axiosSecure = useAxiosSecure()
    const [menus,setMenus] = useState([])
    const [loading,setLoading] = useState(true)
    
   useEffect(()=>{
    axiosSecure.get('/menus')
    .then(res=>{
      console.log(res.data)
      setMenus(res.data)
      setLoading(false)
    })
  
   },[])

    console.log(menus)
    return [menus,loading]
};

export default useMenu;