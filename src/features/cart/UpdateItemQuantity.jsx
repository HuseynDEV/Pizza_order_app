import React from 'react'
import Button from '../../ui/Button'
import {useDispatch} from 'react-redux'
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice'

const UpdateItemQuantity = ({ pizzaId, currentQuantity }) => {
    const dispatch = useDispatch()
    return (
        <div className='flex gap-1'>
            <Button type='round' onClick={() => dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
            {currentQuantity}
            <Button type='round' onClick={() => dispatch(increaseItemQuantity(pizzaId))}>+</Button>
        </div>
    )
}

export default UpdateItemQuantity