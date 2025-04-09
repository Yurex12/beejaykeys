export type DailyView = { date: string; views: number; dayName: string };

export type Stats = {
  uniqueVisitors: number;
  uniqueIpAddress: string[];
  dailyViews: DailyView[];
};
