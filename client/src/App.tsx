import { Suspense } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import './app.scss';

import UserContextProvider from './context/UserContextProvider';

import Main from './components/main/Main';
import RealEstate from './components/realestate/RealEstate';
import SignPage from './components/sign-page/SignPage';
import Publish from './components/publish/Publish';
import PublishBoard from './components/publish/publish-board/PublishBoard';
import PublishRealEstate from './components/publish/publish-realestate/PublishRealEstate';

function App(){
  return (
    <div>
      <BrowserRouter>
        <UserContextProvider>
          <Suspense fallback={<div>Loading..</div>}>
            <Routes>
                <Route path='/' element={ <Main />}>
                    <Route path='realestate/*' element={<RealEstate />}/>
                    <Route path='/*' element={<h1 style={{textAlign: 'center',marginTop: '200px'}}>UNDER CONSTRUCTION</h1>} />
                </Route>
                <Route path='/login' element={ <SignPage />}/>
                <Route path='/personal' element={null} />
                <Route path='/publish' element={ <Publish />}>
                    <Route path='' element={<PublishBoard />} />
                    <Route path='/publish/realestate' element={<PublishRealEstate />}/>
                </Route>
            </Routes>
          </Suspense>
        </UserContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
