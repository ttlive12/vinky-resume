import { Timeline } from 'antd'
import './index.less'


interface TimeLineItemType {
  title: string;
  description: string;
  features: string[];
}

const tranTimeLineItem = ({ title, description, features }: TimeLineItemType) => {
  return {
    children: <div className='animate__animated animate__fadeIn'>
      <div style={{ fontFamily: 'serif', fontSize: '1.15rem', display: 'flex' }}>
        <span> {title}</span>
      </div>
      <span style={{ color: 'rgba(155, 89, 182,0.65)' }}>{description}</span>
      <ul>
        {features.map((feature) => <li>{feature}</li>)}
      </ul>
    </div>
  }
}

const timeLineItems: TimeLineItemType[] = [
  {
    title: '秦皇岛牛客科技有限公司',
    description: '职位：前端工程师 2023.05-至今',
    features: [
      '前端多个项目开发',
      '包括CCPC报名系统，河北省大学生创新创业年会系统，东秦闪送系统和东秦教代会提案系统'
    ]
  },
]

const Work: React.FC = () => {
  return <div className="work-container">
    <div className="title">实习经历</div>
    <Timeline
      className='timeline'
      mode="left"
      items={timeLineItems.map(item => tranTimeLineItem(item))}
    />
  </div>
}
export default Work