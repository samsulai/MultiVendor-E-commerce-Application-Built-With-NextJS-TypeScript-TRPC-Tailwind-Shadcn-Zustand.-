"use client"
import React, { useEffect, useRef, useState } from 'react'
import { PRODUCT_CATEGORIES } from '@/config'
import NavItem from './NavItem'
import { useOnClickOutside } from '@/hooks/use-on-click-outside'
const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null)
  const isAnyOpen = activeIndex !== null
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveIndex(null)
      }
    }

    document.addEventListener('keydown', handler)

    return () => {
      document.removeEventListener('keydown', handler)
    }
  }, [])
  const navRef = useRef<HTMLDivElement | null>(null)
  useOnClickOutside(navRef, () => setActiveIndex(null))
    return (
    <div className='flex h-full gap-4' ref={navRef}> 
    {PRODUCT_CATEGORIES.map((category, i) => {
  const handleOpen = () => {
    if(activeIndex === i){
      setActiveIndex(null)
    }else{
      setActiveIndex(i)
    }
  }
  
const isOpen = activeIndex === i

  return (

    <NavItem  category={category} isOpen={isOpen} handleOpen={handleOpen}  key={category.value} isAnyOpen={isAnyOpen}/>
  )
    })}
      </div>
  )
}

export default NavItems