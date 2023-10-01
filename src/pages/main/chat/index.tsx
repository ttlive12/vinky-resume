import React, { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Logo from '../../../assets/image/logo.png'
import { Button, Divider, Drawer, Dropdown, Empty, Input, MenuProps, Modal, Popconfirm, Space, Tooltip, message } from 'antd';
import './index.less'
import TextArea from 'antd/es/input/TextArea';
import Loading from '../../../assets/gif/loading.gif'
import CodeBlock from '../../../components/CodeBlock';
import { DeleteOutlined, InfoOutlined, SettingOutlined } from '@ant-design/icons';
import { getChatContent } from '../../../api/chat';


interface Chat {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

type ChatHistoryKeepType = {
  name: string;
  value: Chat[];
}

const ChatGPT: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState<Chat[]>(JSON.parse(window.localStorage.getItem('chat-history') as any) || []);
  const [userInput, setUserInput] = useState('');

  const [isModalOpen, setModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const [drawerOpen, setDrawerOpen] = useState(false);

  const deleteHistory = (index: number) => {
    setChatHistory(chatHistory.filter((_item, idx) => idx !== index))
  }
  useEffect(() => {
    if (!!chatHistory) {
      window.localStorage.setItem('chat-history', JSON.stringify(chatHistory));
    }
  }, [chatHistory])
  useEffect(() => { toBottom(); }, [])
  const toBottom = () => {
    if (divRef.current) {
      const element = divRef.current;
      const totalScrollHeight = element.scrollHeight;
      let currentScrollTop = element.scrollTop;
      const scrollStep = () => {
        currentScrollTop += (totalScrollHeight - currentScrollTop) / 60;

        if (Math.abs(totalScrollHeight - currentScrollTop) <= 1) {
          element.scrollTop = totalScrollHeight;
        } else {
          element.scrollTop = currentScrollTop;
          window.requestAnimationFrame(scrollStep);
        }
      }
      window.requestAnimationFrame(scrollStep);
    }
  }

  const handleUserInput = async () => {
    setUserInput('');
    const newUserMessage = { role: 'user', content: userInput };
    setChatHistory(prevChatHistory => prevChatHistory.concat(newUserMessage as any));
    toBottom();
    setLoading(true)
    try {
      const chatCompletionContent = await getChatContent(chatHistory.concat({ role: 'user', content: userInput }))
      const assistantMessage = { role: 'assistant', content: chatCompletionContent.data.response };
      setChatHistory(prevChatHistory => prevChatHistory.concat(assistantMessage as any));
      setLoading(false);
    } catch (e: any) {
      message.error(e);
      setLoading(false);
    }
  };
  const Delete = (index: number) => {
    return <Popconfirm title='确定删除此条记录吗？' okText='确定' cancelText="取消" onConfirm={() => { deleteHistory(index) }}><DeleteOutlined /></Popconfirm>
  }
  const items: MenuProps['items'] = [
    {
      label: <a onClick={() => { setChatHistory([]) }}>清空聊天记录</a>,
      key: '0',
    },
    {
      label: <a onClick={() => {
        setModalOpen(true);
      }}>保存聊天记录</a>,
      key: '1',
    },
    {
      label: <a onClick={() => { setDrawerOpen(true) }}>历史聊天记录</a>,
      key: '2',
    },
  ];

  return (

    <div className='chat-container'>
      <Modal title="保存聊天内容至本地" open={isModalOpen} onOk={() => {
        setModalOpen(false)
        if (!window.localStorage.getItem('chat-history-keep')) {
          window.localStorage.setItem('chat-history-keep', JSON.stringify([{ name: inputValue, value: chatHistory }]));
        } else {
          const historyArray = JSON.parse(window.localStorage.getItem('chat-history-keep') as string) as ChatHistoryKeepType[];
          if (historyArray.find((item) => item.name === inputValue)) {
            message.error('该记录已存在')
            return;
          }
          historyArray.push({ name: inputValue, value: chatHistory })
          window.localStorage.setItem('chat-history-keep', JSON.stringify(historyArray))
        }
        message.success('保存聊天记录成功')
      }} onCancel={() => { setModalOpen(false) }}>
        <Input placeholder="请输入记录名" value={inputValue} onChange={(e) => {
          setInputValue(e.target.value)
        }}></Input>
      </Modal>
      <Drawer title="历史聊天记录" placement="right" onClose={() => { setDrawerOpen(false) }} open={drawerOpen}>
        {!localStorage.getItem('chat-history-keep') && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='您还未保存任何聊天记录' />}
        {!!localStorage.getItem('chat-history-keep') && <ul>
          {(JSON.parse(localStorage.getItem('chat-history-keep') as string) as ChatHistoryKeepType[]).map((item, index) => <>
            <li key={index} className='keep-item'>
              <div className='name'>{index + 1}. {item.name}</div>
              <Space>
                <Popconfirm title='确定应用此条记录吗？' okText='确定' cancelText="取消" onConfirm={() => {
                  setChatHistory((JSON.parse(localStorage.getItem('chat-history-keep') as string) as ChatHistoryKeepType[])[index].value)
                  setDrawerOpen(false);
                }}>
                  <Button>应用</Button>
                </Popconfirm>
                <Popconfirm title='确定删除此条记录吗？' okText='确定' cancelText="取消" onConfirm={() => {
                  const newArr = (JSON.parse(localStorage.getItem('chat-history-keep') as string) as ChatHistoryKeepType[]).filter((_item: any, idx: number) => idx !== index)
                  localStorage.setItem('chat-history-keep', JSON.stringify(newArr))
                  setDrawerOpen(false);
                }}>
                  <Button>删除</Button>
                </Popconfirm>
              </Space>
            </li>
            <Divider />
          </>)}
        </ul>}

      </Drawer>
      <span className='title'>
        <span>聊天机器人 VGPT</span>
        <Tooltip placement="top" title='得到的结果信息量较大时需要等待较长时间' className='tip'>
          <Button icon={<InfoOutlined />} shape='circle' size='small' />
        </Tooltip>
      </span>

      <div className="chat-box" ref={divRef}>
        {loading &&
          <div className="loading-container">
            <img className='loading' src={Loading} />
          </div>
        }
        {chatHistory.map((chat, index) => (
          <div key={index}>
            <div>{chat.role === 'user' ?
              <div className='head-container'><span>YOU：</span>{Delete(index)}</div>
              :
              <div className='head-container'>
                <span className='center'><img src={Logo} className='img' />VGPT：</span>
                {Delete(index)}
              </div>
            }
              <ReactMarkdown components={{ code: CodeBlock as any }}>{chat.content}</ReactMarkdown>
            </div>
          </div>
        ))}
      </div>
      <div className="input-box">
        <TextArea value={userInput} onChange={(e) => setUserInput(e.target.value)} placeholder="请输入聊天内容" autoSize />
        <Button onClick={handleUserInput} className='send'>发送</Button>
        <Dropdown menu={{ items }} placement="top" trigger={['click']}>
          <Button icon={<SettingOutlined />} shape='circle' />
        </Dropdown>

      </div>
    </div>


  );
}

export default ChatGPT;
