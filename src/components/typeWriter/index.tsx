import React, { useState, useEffect } from 'react';
import './index.less';

const Typewriter:React.FC<{texts:string[]}> = ({ texts }) => {
  const [content, setContent] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [pausing, setPausing] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (pausing) {
        setPausing(false);
        setDeleting(true);
      } else if (deleting) {
        setContent(content.slice(0, -1));
        if (content.length === 0) {
          setDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
          setCharIndex(0);
        } else {
          setCharIndex(charIndex - 1);
        }
      } else {
        setContent(content + texts[textIndex].charAt(charIndex));
        if (charIndex === texts[textIndex].length - 1) {
          setPausing(true);
        } else {
          setCharIndex(charIndex + 1);
        }
      }
    }, pausing ? 1000 : deleting ? 100 : 200); // 停顿时间、删除速度和打字速度可以自己调整
    return () => clearTimeout(timeout);
  }, [charIndex, content, deleting, pausing, textIndex, texts]);

  return (
    <div>
      {content}
      <span className="cursor">|</span> {/* 添加光标 */}
    </div>
  );
};

export default Typewriter;
