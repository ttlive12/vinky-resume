import { ReactNode, useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import { UserOutlined, ToolOutlined, SolutionOutlined, ProjectOutlined, UnorderedListOutlined, VerticalLeftOutlined, CommentOutlined } from '@ant-design/icons'
import './index.less'
import Introduction from './introduction'
import Technology from './technology'
import Work from './work'
import Project from './project'
import ChatBot from './chat';
interface TabbarType {
  name: string;
  icon: ReactNode;
  component: ReactNode;
}
const tabbar: TabbarType[] = [
  { name: '个人信息', icon: <UserOutlined />, component: <Introduction /> },
  { name: '技术栈', icon: <ToolOutlined />, component: <Technology /> },
  { name: '项目经历', icon: <ProjectOutlined />, component: <Project /> },
  { name: '工作经历', icon: <SolutionOutlined />, component: <Work /> },
  { name: 'VGPT', icon: <CommentOutlined />, component: <ChatBot /> },
]

interface Props {
  closed: boolean,
  setClosed: (status: boolean) => void
}

const Main: React.FC<Props> = ({ closed, setClosed }) => {
  const [tabNow, setTabNow] = useState('个人信息')
  const isMobile = useMediaQuery({ query: " (max-device-width: 800px)" });
  return <div className="main-container">
    <div className="tabbar">
      {!isMobile && <div className="tabbar-item">
        <span className='tabbar-icon' onClick={() => { setClosed(!closed) }}>
          {!closed && <UnorderedListOutlined />}
          {closed && <VerticalLeftOutlined />}
        </span>
      </div>}
      {tabbar.map((item, index) => <div className={`tabbar-item ${item.name === tabNow ? 'now' : 'nonow'}`} key={index} onClick={() => {
        setTabNow(item.name);
      }}>
        <span className='tabbar-icon'>{item.icon}</span>
        <span className='tabbar-name'>{item.name}</span>
      </div>)}
    </div>
    <div className="show">
      {tabbar.find(item => item.name === tabNow)?.component}
    </div>
  </div>
}
export default Main