import React from 'react'

interface props {
    amount: number;
}
const Formatted = ({amount}:props) => {
    const formattedAmount =new Number(amount).toLocaleString("en-us",{
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
    })
  return (
    <span>{formattedAmount}</span>
  )
}

export default Formatted
