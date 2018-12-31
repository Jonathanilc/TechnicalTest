import {ADD_PRODUCT, REMOVE_PRODUCT} from './Type'

export const add_product = (product) => ({type: ADD_PRODUCT,product});

export const remove_product = (size) => ({type: REMOVE_PRODUCT, size});