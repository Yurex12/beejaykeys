import { useUser } from "@/features/auth/hooks/useUser";
import AnalyticsCardContainer from "./AnalyticsCardContainer";
import AnalyticsHeader from "./AnalyticsHeader";
import Chart from "./Chart";
import { useProjects } from "@/features/AdminProjects/hooks/useProjects";
import useStats from "@/hooks/useStats";
import Spinner from "@/components/Spinner";

export default function Overview() {
  const { isLoading: isFetchingUser } = useUser();
  const { isLoading: isFetchingProjects } = useProjects();
  const { isLoading: isFetchingStats } = useStats();

  const isFetching = isFetchingUser || isFetchingStats || isFetchingProjects;

  if (isFetching) return <Spinner />;

  return (
    <section>
      <div className="container mx-auto space-y-4 px-6 pb-6 pt-24 lg:h-screen lg:pb-0">
        <AnalyticsHeader />
        <AnalyticsCardContainer />
        <Chart />
      </div>
    </section>
  );
}
