import { useProjects } from "@/features/AdminProjects/hooks/useProjects";
import AnalyticsCard from "./AnalyticsCard";
import { FaChartLine, FaProjectDiagram, FaUser } from "react-icons/fa";
import useStats from "@/hooks/useStats";

function AnalyticsCardContainer() {
  const { projects } = useProjects();
  const { stats } = useStats();

  if (!projects) return null;
  if (!stats) return null;

  const mostViewedProject = projects.slice().sort((a, b) => b.views - a.views);

  const totalViews = projects.reduce((sum, project) => project.views + sum, 0);

  const uniqueVisitors = stats.uniqueVisitors;

  const analyticsData = [
    {
      title: "Total Unique Visitors",
      value: uniqueVisitors,
      icon: <FaUser />,
    },
    {
      title: "Most Viewed Project",
      value: `${mostViewedProject[0].name} (${mostViewedProject[0].views})`,
      icon: <FaChartLine />,
    },
    {
      title: "Total Views from All Projects",
      value: totalViews,

      icon: <FaProjectDiagram />,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {analyticsData.map((card, index) => (
        <AnalyticsCard
          key={index}
          title={card.title}
          value={card.value}
          icon={card.icon}
        />
      ))}
    </div>
  );
}

export default AnalyticsCardContainer;
