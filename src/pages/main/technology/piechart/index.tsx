import { Pie } from '@ant-design/plots';

type DataType = {
  type: string;
  value: number;
  color: string;
};

interface PieChartType {
  data: DataType[];
  title: string;
}

export const PieChart: React.FC<PieChartType> = ({ data, title }) => {
  const colors = data.map((d) => d.color);
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    color: colors, // 修改这里
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: (data: any) => data.type, // 修改这里
      style: {
        textAlign: 'center',
        fontSize: 20,
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: title,
      },
    },
  };
  //@ts-ignore
  return <Pie {...config} />;
};
