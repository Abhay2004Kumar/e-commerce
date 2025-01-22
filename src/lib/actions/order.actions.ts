import { OrderItem } from "@/types"
import { round2 } from "../utils"
import { FREE_SHIPPING_THRESHOLD } from "../constants"

export const calcDeliveryDateAndPrice = async ({
  items,

}: {
  deliveryDateIndex?: number
  items: OrderItem[]

}) => {

  const itemsPrice = round2(
    items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  )

const shippingPrice = itemsPrice > FREE_SHIPPING_THRESHOLD ? 0 : 10

  const taxPrice = round2(itemsPrice * 0.15)
  const totalPrice = round2(
    itemsPrice +
      (shippingPrice ? round2(shippingPrice) : 0) +
      (taxPrice ? round2(taxPrice) : 0)
  )
  return {
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
  }
}

