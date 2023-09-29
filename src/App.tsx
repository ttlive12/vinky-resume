import Main from './pages/main'
import ParticlesComponet from './components/particle/particle'
import Sketch from "./pages/sketch"
import { useMediaQuery } from 'react-responsive';
import "./index.less"

const App: React.FC = () => {
  const isMobile = useMediaQuery({ query: " (max-device-width: 800px)" });
  const isDesktop = useMediaQuery({ query: " (min-device-width: 800px)" });

  return <>
    <ParticlesComponet />
    {
      isDesktop && <div className="container animate__animated animate__zoomIn">
        <div className="left">
          <Sketch />
        </div>
        <div className="main">
          <Main />
        </div>
      </div>
    }
    {
      isMobile && <div className="container animate__animated animate__zoomIn">
          <Sketch />
          <Main />
      </div>
    }
  </>
}
export default App