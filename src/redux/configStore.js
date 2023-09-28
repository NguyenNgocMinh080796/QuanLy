import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { ListUserReducer } from './reducer/ListUserReducer'
import { ModalReducer } from './reducer/ModalReducer'
import { OutboundReducer } from './reducer/OutboundReducer'
import { TransferReducer } from './reducer/TransferReducer'
import { InboundReducer } from './reducer/InboundReducer'

const rootReducer = combineReducers({
    //Modal HOC
    ModalReducer: ModalReducer,
    //Data
    ListUserReducer: ListUserReducer,
    InboundReducer: InboundReducer,
    OutboundReducer: OutboundReducer,
    TransferReducer: TransferReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))