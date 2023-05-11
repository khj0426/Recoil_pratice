import React, { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import UserComponent from './Todo';
import Count from './Count';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Count />
        <Suspense fallback={<div>Loading...</div>}>
          <UserComponent />
        </Suspense>
      </RecoilRoot>
    </div>
  );
}

export default App;
