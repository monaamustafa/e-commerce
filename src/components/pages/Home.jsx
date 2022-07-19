import React from 'react'
import ItemsBar from '../home/ItemsBar'
import OfferBanner from '../home/OfferBanner'
import ProductCat from '../home/ProductCat'
import SliderBanner from '../home/SliderBanner'

export default function Home() {
  return (
    <>
    <SliderBanner/>
    <ItemsBar/>
    <ProductCat/>
    <OfferBanner/>
    </>
  )
}
