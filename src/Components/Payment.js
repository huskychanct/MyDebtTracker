import React from 'react'

export const Payment = ({ payment }) => {
    const sign = payment.amount > 0 ? '-' : '+';

    return (
        (<li className={payment.amount > 0 ? 'plus' : 'minus'}>
            {payment.date} <span>{sign}${Math.abs(payment.amount)}</span><button className="delete-btn">x</button>
        </li>)
    )
}
