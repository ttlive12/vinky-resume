import { Tag, Timeline } from 'antd'
import './index.less'
import { ReactNode } from 'react'

const Tags: { [key: string]: ReactNode } = {
  React: <Tag color='#149eca'>React</Tag>,
  TypeScript: <Tag color='#3178c6'>TypeScript</Tag>,
  小程序: <Tag color='#1fd76d'>小程序</Tag>,
  Vite: <Tag color='#fdbf19'>Vite</Tag>,
  微信云开发: <Tag color='#7cd7a8'>微信云开发</Tag>,
  less: <Tag color='#1d365d'>less</Tag>,
}

interface TimeLineItemType {
  title: string;
  tags: string[];
  description: string;
  features: string[];
}

const tranTimeLineItem = ({ title, tags, description, features }: TimeLineItemType) => {
  return {
    children: <div className='animate__animated animate__fadeIn'>
      <div style={{ fontFamily: 'serif', fontSize: '1.15rem',display:'flex',flexWrap:'wrap'}}>
        <span> {title}</span>
        {tags.map((tag,index) => <span style={{ marginLeft: '0.2rem' ,display:'flex',alignItems:'center',justifyContent:'center'}} key={index}>{Tags[tag]}</span>)}
      </div>
      <span style={{ color: 'rgba(0,0,0,0.5)' }}>{description}</span>
      <ul>
        {features.map((feature) => <li>{feature}</li>)}
      </ul>
    </div>
  }
}

const timeLineItems: TimeLineItemType[] = [
  {
    title: '校内闪送平台',
    tags: ['React', 'TypeScript', '小程序', 'Vite'],
    description: '骑手端小程序 + Web端后台管理',
    features: [
      'Web端文件上传与下载',
      '实现小程序端上拉触底后的数据懒加载，提高程序效率'
    ]
  },
  {
    title: '河北省大学生创新创业年会系统',
    tags: ['React', 'TypeScript', '小程序'],
    description: '作品展示与投票小程序 + Web端后台管理',
    features: [
      'Web使用富文本编辑器库wangeditor上传作品信息，小程序端使用rich-text组件实现作品展示',
      '使用zustand实现轻量级状态管理'
    ]
  },
  {
    title: '中国大学生程序设计竞赛报名系统',
    tags: ['React', 'TypeScript', '小程序', 'Umi', 'less'],
    description: '比赛报名与管理小程序 + Web',
    features: [
      '实现小程序与Web交互，实现微信扫码登录逻辑',
    ]
  },
  {
    title: '院级评教小程序，校ACM俱乐部小程序',
    tags: ['TypeScript', '小程序', '微信云开发'],
    description: '',
    features: [
      '100%参与开发，均已经投入使用',
      '评教小程序设有管理员模式，可以导入导出学生列表，评教结果等',
      'ACM俱乐部小程序使用微信云开发实现全栈开发，云数据库存储信息，进行数据统计与分析'
    ]
  },
]

const Project: React.FC = () => {
  return <div className="project-container">
    <Timeline
      mode="left"
      items={timeLineItems.map(item => tranTimeLineItem(item))}
    />
  </div>
}
export default Project