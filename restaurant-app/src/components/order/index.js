import React from 'react'
import OrderForm from "./OrderForm"
import { useForm } from '../../hooks/useForm'

const generateOderNumber = () => Math.floor(100000 + Math.random() * 999999).toString() // random 6 digit number

const getFreshModelObject = () => ({
    orderMasterId : 0,
    orderNumber : generateOderNumber(),
    customerId : 0,
    pMethon : 'none',
    gTotal : 0,
    deletedOrderItemIds: '', // deleted food items in a order
    irderDetails : []
})

export default function Order() {

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetFormControls
    } = useForm(getFreshModelObject)

    return(
        <div>
            <OrderForm
                {...{ values, errors, handleInputChange }}
            />
        </div>
    )
}