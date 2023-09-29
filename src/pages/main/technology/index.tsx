import './index.less'
import { WordCloudChart } from './wordcloud';
const Technology: React.FC = () => {
  return <div className="technology-container">
    {/* <PieChart data={frameData} title='前端流行框架'/> */}
    <WordCloudChart/>
  </div>
}
export default Technology