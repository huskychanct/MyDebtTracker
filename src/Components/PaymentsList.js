import React, { useContext } from 'react'
import { Payment } from './Payment'
import { GlobalContext } from '../context/GlobalState'

export const PaymentsList = () => {
    const { payments } = useContext(GlobalContext);

    return (
        <>
        <h3>Payment History</h3>
            <ul className="list">
                {payments.map(payment => (<Payment key={payment.id}payment={payment}/>))}
            </ul>
        </>
    )
}
