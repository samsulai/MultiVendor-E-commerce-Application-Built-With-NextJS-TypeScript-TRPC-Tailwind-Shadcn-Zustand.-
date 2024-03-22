'use client'
import { Product } from '@/payload-types'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { useCart } from '@/hooks/use-cart'
interface productProps {
product : Product
}
const AddToCartButton = ({product} : productProps) => {
    const { addItem } = useCart()
    const [success, setIsSuccess] = useState<boolean>(false)
    useEffect(() => {
        const timeout = setTimeout(() => {
          setIsSuccess(false)
        }, 2000)
    
        return () => clearTimeout(timeout)
      }, [success])
  return (
    <Button  onClick={() => {
        addItem(product)
        setIsSuccess(true)
      }} size='lg'
    className='w-full'>
{success ? 'Added' :  'Add To Cart'}
    </Button>
  )
}

export default AddToCartButton