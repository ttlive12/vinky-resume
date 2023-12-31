import {
  GithubOutlined,
  MailOutlined,
  MobileOutlined,
  QqOutlined,
  UserOutlined,
  WechatOutlined,
} from '@ant-design/icons';
import { Image, Space, Tag } from 'antd';
import { ReactNode } from 'react';
import NEU from '../../../assets/image/neu.png';
import './index.less';

interface UserInfoType {
  label: string;
  value: string;
  icon?: ReactNode;
}

const userInfo: UserInfoType[] = [
  { label: '姓名', value: '李文祺', icon: <UserOutlined /> },
  { label: '手机号', value: '17303368450', icon: <MobileOutlined /> },
  { label: '邮箱', value: 'lwqykst@yeah.net', icon: <MailOutlined /> },
  { label: '微信', value: 'lwqykst', icon: <WechatOutlined /> },
  { label: 'QQ', value: '1305338742', icon: <QqOutlined /> },
  { label: 'GitHub', value: 'ttlive12', icon: <GithubOutlined /> },
];

const Introduction: React.FC = () => {
  return (
    <div className="introduction-container">
      <div className="sub-item">
        <div className="title">
          <span>个人信息</span>
        </div>
        <div className="userinfo">
          {userInfo.map((item: UserInfoType, index: number) => (
            <div
              className="item animate__animated animate__fadeInDown"
              key={index}
            >
              <span className="label">
                {item.icon} {item.label}
              </span>
              <span className="value">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="sub-item">
        <div className="title">
          <span>教育背景</span>
        </div>
        <div className="school animate__animated animate__flipInY">
          <Image src={NEU} preview={false} className="neu" />
          <div className="info">
            <div className="school-title">
              <span
                style={{
                  marginRight: '0.5rem',
                }}
              >
                东北大学
              </span>
              <Tag color="blue">985</Tag>
              <Tag color="green">211</Tag>
              <Tag color="red">双一流</Tag>
            </div>
            <Space direction="vertical">
              <span>就读情况：大二在读</span>
              <span>专业：计算机科学与技术</span>
              <span>
                身份：NEUQ-ACM俱乐部第十届副会长，不洗碗工作室前端开发
              </span>
              <span>成绩：综测专业第三名</span>
              <span>
                获奖赛事：RoboCom-CAIP国赛，团体程序设计天梯赛吗，CCPC省赛，蓝桥杯等
              </span>
            </Space>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Introduction;
