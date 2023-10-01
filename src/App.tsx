import ParticlesComponet from './components/particle/particle';
import Main from './pages/main';
import Sketch from './pages/sketch';

import { useState } from 'react';
import './index.less';

const App: React.FC = () => {
  const [closed, setClosed] = useState(false);
  return (
    <>
      <ParticlesComponet />
      <div className="container animate__animated animate__zoomIn">
        <div className={`${closed ? 'hidden' : 'left'}`}>
          <Sketch />
        </div>
        <div className="main">
          <Main closed={closed} setClosed={setClosed} />
        </div>
      </div>
    </>
  );
};
export default App;
