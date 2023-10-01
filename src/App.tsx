import ParticlesComponet from './components/particle/particle';
import Main from './pages/main';
import Sketch from './pages/sketch';

import { PauseCircleOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { useState } from 'react';
import './index.less';

const App: React.FC = () => {
  const [closed, setClosed] = useState(false);
  const [showParticles, setShowParticles] = useState(true);
  return (
    <>
      {showParticles && <ParticlesComponet />}

      <div
        onClick={() => {
          setShowParticles(!showParticles);
        }}
        className="showBg"
      >
        {showParticles && <PauseCircleOutlined />}
        {!showParticles && <PlayCircleOutlined />}
      </div>

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
