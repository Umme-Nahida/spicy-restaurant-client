import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useCartItem = () => {
    const axiosSecure = useAxiosSecure()
    const {refetch,data:cart} = useQuery({
        queryKey:['cart'],
        queryFn:async()=>{
            const res = await axiosSecure.get('/getCart')
            return res.data
        }
    })
    console.log(cart)
    return [cart,refetch]
};

export default useCartItem;