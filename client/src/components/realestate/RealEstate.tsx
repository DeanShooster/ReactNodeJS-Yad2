import { Route, Routes } from 'react-router';

import StateSell from './state-sell/StateSell';

const RealEstate = () => {
    return (
        <Routes>
            <Route path='/sell' element={ <StateSell /> } />
            <Route path='/rent' element={<h1 style={{textAlign: 'center',marginTop: '200px'}}>Rent Under Construction</h1>} />
            <Route path='/roommates' element={<h1 style={{textAlign: 'center',marginTop: '200px'}}>Roomates Under Construction</h1>} />
            <Route path='/commercial' element={<h1 style={{textAlign: 'center',marginTop: '200px'}}>Commercial Under Construction</h1>} />
        </Routes>
    )
};

export default RealEstate;