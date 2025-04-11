import { format, parseISO } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import useStats from "@/hooks/useStats";

import FilterOperation from "@/components/FilterOperation";
import { DailyView } from "@/features/Overview/types";

const chartConfig = {
  views: {
    label: "Views",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function Chart() {
  const [searchParams] = useSearchParams();
  const { stats, isLoading } = useStats();
  if (isLoading) return null;
  if (!stats) return null;

  const period = searchParams.get("period") || "7-days";

  let filteredStats: DailyView[];

  if (period === "7-days") {
    filteredStats = stats.dailyViews.filter((_, idx) => idx > 22);
  } else if (period === "15-days") {
    filteredStats = stats.dailyViews.filter((_, idx) => idx > 14);
  } else {
    filteredStats = stats.dailyViews;
  }

  const startDate = format(parseISO(filteredStats![0].date), "MMM dd, yyyy");
  const endDate = format(
    parseISO(filteredStats![filteredStats!.length - 1].date),
    "MMM dd, yyyy",
  );

  return (
    <Card className="mb-4">
      <CardHeader className="flex flex-col justify-between gap-y-2 md:flex-row">
        <div className="space-y-1">
          <CardTitle>Project Analytics</CardTitle>
          <CardDescription>
            {startDate} – {endDate}
          </CardDescription>
        </div>

        <div className="flex w-fit items-center justify-center">
          <FilterOperation
            options={[
              { value: "7-days", label: "7 days" },
              { value: "15-days", label: "15 days" },
              { value: "30-days", label: "30 days" },
            ]}
            filterField="period"
          />
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-72 w-full">
          <LineChart
            accessibilityLayer
            data={filteredStats}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />

            <XAxis
              dataKey="dayName"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              interval={0} // Force showing all ticks
              tickFormatter={(value) => value.substring(0, 3)} // "Monday" -> "Mon"
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="views"
              type="monotone"
              stroke="hsl(var(--chart-1))"
              strokeWidth={2}
              dot={{
                fill: "hsl(var(--chart-1))",
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Showing Daily views for the last {filteredStats!?.length} days
        </div>
      </CardFooter>
    </Card>
  );
}
