'use client';

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from 'recharts';

import { ChartConfig, ChartContainer } from '@/components/shadcn-ui/ui/chart';
import { BucketListItem } from '@/models/src';

const chartData = [
  { browser: 'safari', visitors: 10009, fill: 'var(--color-safari)' },
];

const chartConfig = {
  visitors: {
    label: 'Visitors',
  },
  safari: {
    label: 'Safari',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig;

interface CompletedChartProps {
  userBucketList: BucketListItem[];
}

{
  /* <div className="transform scale-75">
<CompletedChart userBucketList={mocklist} />
</div> */
}

export const CompletedChart = ({ userBucketList }: CompletedChartProps) => {
  const completedListCnt = userBucketList.filter(
    (item) => item.completed,
  ).length;

  const endChart = -270 * (completedListCnt / userBucketList.length);

  return (
    <div
      className="flex flex-col bg-white"
      style={{ minHeight: '250px', minWidth: '250px' }}
    >
      <div className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="aspect-square max-h-[250px]"
        >
          <RadialBarChart
            width={100}
            height={100}
            data={chartData}
            innerRadius={80}
            outerRadius={140}
            startAngle={90}
            endAngle={!completedListCnt ? 90 : endChart}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[86, 74]}
            />
            <RadialBar dataKey="visitors" background />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 12}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {completedListCnt} / {userBucketList.length}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 24}
                          className="fill-muted-foreground"
                        >
                          達成したリスト
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </div>
    </div>
  );
};
