import {configureStore} from "@reduxjs/toolkit"
import pasteReducer from "./pasteslices"

export const store = configureStore({
  reducer:{
      paste: pasteReducer
  }
})