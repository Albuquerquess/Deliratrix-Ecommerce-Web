import React from 'react';
import Cookies from 'universal-cookie';

// @types
import { LogicCartProps, PriceItensProps, cartDataProps, ItemsAndPricesOnCookiesProps } from '../@types/LogicCart'

// Api
import Api from '../Services/Api';

// consts
import { INDEX_IDS } from '../Consts/urls'

const initialState = {
  handleAddItemToCart: (itemId: number) => {},
  handleRemoveItemToCart: (itemId: number) => {},
  getCartReport: () => {},
  contentIds: [0],
  priceIds: [0]
}

export const CartContext = React.createContext<LogicCartProps>(initialState)

export const CartProvider: React.FC = ({ children }) => {
  const [cartItem, setCartItem] = React.useState<number[]>([])
  const [priceItens, setPriceItens] = React.useState<PriceItensProps[]>([])
  const [contentIds, setContentIds] = React.useState<(number | undefined)[]>([])
  const [priceIds, setPriceIds] = React.useState<(number | undefined)[]>([])

  const cookies = new Cookies();

  function handleAddItemToCart(itemId: number, priceId: number) {
    setCartItem([...cartItem, itemId])
    cookies.set('CART-ITEM-ID-'+itemId, itemId, {maxAge: 604800})
  
  setPriceItens([...priceItens, {itemId, priceId}])
  cookies.set('PRICE-ITEM-ID-'+itemId, priceId)


  }
  function handleRemoveItemToCart(itemId: number) {
    setCartItem(cartItem.filter((item) => item !== itemId))
    cookies.remove('CART-ITEM-ID-'+itemId, {path: "*"})
    cookies.remove('PRICE-ITEM-ID-'+itemId, {path: "*"})
  }

  async function getCartReport() {
    async function getContentsAndPricesOnBackendById(contentIds: (number | undefined)[], priceIds: (number | undefined)[]) {
      
      const contents = await Api.get(INDEX_IDS, {params: {contentIds, priceIds}})
      return contents.data
    }

    async function getItemsAndPricesOnCookies() {
      const allCookies = cookies.getAll()
      
      const items = await Object.keys(allCookies).map(item => {
        const itemLabel = item.split('-')[0]
        if (itemLabel === 'CART') return Number(item.split('-')[3])
      })

      
      const prices = await Object.keys(allCookies).map(price => {
        const priceLabel = price.split('-')[0]
        if (priceLabel === 'PRICE') return Number(cookies.get(`PRICE-ITEM-ID-${price.split('-')[3]}`))
        
      })
      
      const itemsRef: (number | undefined)[] = items.filter(Boolean)
      const priceRef: (number | undefined)[] = prices.filter(Boolean)


      return {contentIds:itemsRef, priceIds: priceRef}
    }

    const {contentIds, priceIds}: ItemsAndPricesOnCookiesProps = await getItemsAndPricesOnCookies()
    setContentIds(contentIds)
    setPriceIds(priceIds)

    const contents: cartDataProps = await getContentsAndPricesOnBackendById(contentIds, priceIds)

    const subValue = contents.prices.reduce(
      (acc: number, curr: { price: number; }) => acc + curr.price, 0)

      // Discount está em 0 poois o sistêma não foi implementado

    const summaryData = {
      discount: 0,
      finalvalue: subValue - 0,
      items: contents.contents.length,
      subvalue: subValue
    }
    
    return [contents, summaryData]
  }

  return <CartContext.Provider value={{handleAddItemToCart, handleRemoveItemToCart, getCartReport, contentIds, priceIds}} >
      {children}
  </CartContext.Provider>;
}