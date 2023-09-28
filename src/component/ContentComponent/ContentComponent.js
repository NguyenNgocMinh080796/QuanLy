import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ErrorComponent from '../ErrorComponent/ErrorComponent'
import ListUser from '../MasterData/Customer/ListUser'
import UserDetail from '../MasterData/Customer/UserDetail'
import Inbound from '../Execution/Inbound/Inbound'
import Outbound from '../Execution/Outbound/Outbound'
import Transfer from '../Execution/Transfer/Transfer'
import InboundDetail from '../Execution/Inbound/InboundDetail'
import OutboudDetail from '../Execution/Outbound/OutboudDetail'
import DetailTransfer from '../Execution/Transfer/DetailTransfer'
import HomeComponent from '../HomeComponent'

export default function ContentComponent() {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomeComponent />} />

                <Route path='/materials' element={<p>materials</p>} />

                <Route path='/customers' element={<ListUser />} />
                <Route path='/customers/userdetail' element={<UserDetail />} />

                <Route path='/inbound' element={<Inbound />} />
                <Route path='/inbound/inbounddetail' element={<InboundDetail />} />

                <Route path='/outbound' element={<Outbound />} />
                <Route path='/outbound/outbounddetail' element={<OutboudDetail />} />

                <Route path='/transfer' element={<Transfer />} />
                <Route path='/transfer/transferdetail' element={<DetailTransfer />} />

                <Route path='*' element={<ErrorComponent />} />
            </Routes>
        </>
    )
}
