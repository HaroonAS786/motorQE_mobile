import { configureStore } from '@reduxjs/toolkit'

import AuthReducer from '../reducers/AuthReducer'
import CheckoutReducer from '../reducers/CheckoutReducer'
import FormReducer from '../reducers/FormReducer'

export default configureStore({
  reducer: {
    AuthReducer,
    CheckoutReducer,
    FormReducer
  },
})