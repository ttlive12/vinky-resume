import { wordData } from './word'
import { WordCloud } from '@ant-design/plots';

export const WordCloudChart: React.FC = () => {
  const config = {
    data: wordData,
    wordField: 'name',
    weightField: 'value',
    colorField: 'name',
    wordStyle: {
      fontFamily: 'Verdana',
      fontSize: [30, 84],
      rotation: [0,10],
    },
    // 返回值设置成一个 [0, 1) 区间内的值，
    // 可以让每次渲染的位置相同（前提是每次的宽高一致）。
    random: () => 0.5,
    tooltip: false
  };
  // @ts-ignore
  return <WordCloud {...config} />;
};