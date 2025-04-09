import { ReactElement } from "react";

type AnalyticsCardProps = {
  title: string;
  value: string | number;
  icon: ReactElement;
};

function AnalyticsCard({ title, value, icon }: AnalyticsCardProps) {
  return (
    <div className="space-y-4 rounded-lg border border-gray-200 p-6">
      <div className="flex items-center gap-x-5">
        <div className="rounded-full bg-green-50 p-4 text-2xl text-green-500">
          {icon}
        </div>
        <div>
          <p className="text-xl font-bold text-gray-800">{value}</p>
          <p className="text-gray-600">{title}</p>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsCard;
