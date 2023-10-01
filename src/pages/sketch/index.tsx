import {
  GithubOutlined,
  MailOutlined,
  QqOutlined,
  WechatOutlined,
} from '@ant-design/icons';
import { Avatar, message } from 'antd';
import { ReactNode } from 'react';
import Logo from '../../assets/image/logo.png';
import Typewriter from '../../components/typeWriter';
import './index.less';

type ContactShowType = {
  icon: ReactNode;
  url?: string;
  copy?: string;
};

const contactShowList: ContactShowType[] = [
  {
    icon: <GithubOutlined className="icon" />,
    url: 'https://github.com/ttlive12',
  },
  { icon: <WechatOutlined className="icon" />, copy: 'lwqykst' },
  {
    icon: <QqOutlined className="icon" />,
    url: 'https://qm.qq.com/q/VLsW91rOM0',
  },
  { icon: <MailOutlined className="icon" />, copy: 'lwqykst@yeah.net' },
];
const Sketch: React.FC = () => {
  return (
    <div className="sketch-container">
      <div className="avatar">
        <Avatar size={100} src={Logo} />
      </div>
      <span className="title">Vinky</span>
      <Typewriter
        texts={['一个热爱技术的前端工程师', '一个善于学习新技术的学生']}
      />
      <div className="contact-list">
        {contactShowList.map((item: ContactShowType, index) => (
          <div
            className="icon-container"
            key={index}
            onClick={() => {
              if (!!item.url) {
                window.open(item.url, '_blank');
              } else if (item.copy) {
                navigator.clipboard
                  .writeText(item.copy)
                  .then(() => {
                    message.success('复制成功');
                  })
                  .catch((err) => {
                    message.error('复制失败：', err);
                  });
              }
            }}
          >
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Sketch;
