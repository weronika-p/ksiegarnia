import { combineReducers } from "redux";
import booksReducer from "./books/booksReducer";
import headerReducer from "./header/headerReducer";
import basketReducer from "./basket/basketReducer";
import { reducer as formReducer } from "redux-form";
import shipmentReducer from "./shipment/shipmentReducer";

const rootReducer = combineReducers({
    books: booksReducer,
    search: headerReducer,
    basket: basketReducer,
    form: formReducer,
    shipment: shipmentReducer
  })

export default rootReducer