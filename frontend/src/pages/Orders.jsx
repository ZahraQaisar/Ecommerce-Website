import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import axios from 'axios';
import { useEffect } from 'react';

const Orders = () => {

  const { backendUrl, token, currency } = useContext(ShopContext);

  const [orderData, setorderData] = useState([])

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null
      }
      const response = await axios.post(backendUrl + '/api/order/userorders', {}, { headers: { token } })
      console.log(response.data)
      setorderData(response.data.orders)
    } catch (error) {

    }
  }

  useEffect(() => {
    loadOrderData()
  }, [token])

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      <div>
        {
          orderData.slice(0, 4).map((order, index) => (
            <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
              <div className='flex items-start gap-6 text-sm'>
                <img className='w-16 sm:w-20' src={order.items[0]?.image[0]} alt="" />
                <div>
                  <p className='sm:text-base font-medium'>{order.items[0]?.name}</p>
                  <div className='flex items-center gap-3 mt-1 text-base text-gray-700'>
                    <p className='text-lg'>{currency}{order.items[0]?.price}</p>
                    <p>Quantity: {order.items[0]?.quantity}</p>
                    <p>Size: {order.items[0]?.size}</p>
                  </div>
                  <p className='mt-1'>
                    Date: <span className='text-gray-400'>
                      {new Date(order.date).toLocaleDateString()}
                    </span>
                  </p>
                  <p className='mt-2'>
                    Payment Method: <span className='text-gray-400'>
                      {order.paymentMethod}
                    </span>
                  </p>
                </div>
              </div>
              <div className='md:w-1/2 flex justify-between'>
                <div className='flex items-center gap-2'>
                  <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                  <p className='text-sm md:text-base'>{order.status}</p>
                </div>
                <button onClick={loadOrderData} className='border px-4 py-2 text-sm font-medium rounded-sm'>Track Order</button>
              </div>
            </div>
          ))
        }


      </div>
    </div>
  )
}

export default Orders
