export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Shopfyn"
export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000"
export const APP_SLOGAN = process.env.NEXT_PUBLIC_APP_SLOGAN || "Money buys anything..."
export const APP_DESCRIPTION = process.env.NEXT_PUBLIC_APP_DESCRIPTION || "Shopfyn is a platform for buying and selling products online."

export const PAGE_SIZE = Number(process.env.NEXT_PUBLIC_PAGE_SIZE) || 9
export const FREE_SHIPPING_THRESHOLD = Number(process.env.NEXT_PUBLIC_FREE_SHIPPING_THRESHOLD) || 100
export const APP_COPYRIGHT = process.env.NEXT_PUBLIC_APP_COPYRIGHT || "Shopfyn © 2021"
export const SENDER_EMAIL = process.env.SENDER_EMAIL || 'onboarding@resend.dev' 
export const SENDER_NAME = process.env.SENDER_NAME || APP_NAME

export const AVAILABLE_PAYMENT_METHODS = [
    {
        name: 'PayPal',
        comission: 0,
        isDefault: true,
    },
    {
        name: 'Stripe',
        comission: 2.9,
        isDefault: false,
    },
    {
        name: 'Cash on Delivery',
        comission: 0,
        isDefault: false,
    },
    {
        name: 'Bank Transfer',
        comission: 0,
        isDefault: false,
    }
]

export const DEFAULT_PAYMENT_METHOD = process.env.DEFAULT_PAYMENT_METHOD || 'PayPal'

export const AVAILABLE_DELIVERY_DATES =[
    {
        name: 'Tomorrow',
        daysToDeliver: 2,
        shippingPrice: 14.6,
        freeShippingMinPrice: 0,
    },
    {
        name: 'Next week',
        daysToDeliver: 7,
        shippingPrice: 7.6,
        freeShippingMinPrice: 50,
    },
    {
        name: 'Next month',
        daysToDeliver: 30,
        shippingPrice: 0,
        freeShippingMinPrice: 100,
    }
]

