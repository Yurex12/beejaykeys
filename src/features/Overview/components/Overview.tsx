import { useUser } from "@/features/auth/hooks/useUser";
import AnalyticsCardContainer from "./AnalyticsCardContainer";
import AnalyticsHeader from "./AnalyticsHeader";
import Chart from "./Chart";
import { useProjects } from "@/features/AdminProjects/hooks/useProjects";
import useStats from "@/hooks/useStats";
import Spinner from "@/components/Spinner";
import NoData from "@/components/NoData";

export default function Overview() {
  const { isLoading: isFetchingUser, error: userError } = useUser();
  const { isLoading: isFetchingProjects, error: projectError } = useProjects();
  const { isLoading: isFetchingStats, error: statsError } = useStats();

  const isFetching = isFetchingUser || isFetchingStats || isFetchingProjects;

  if (isFetching) return <Spinner />;

  if (userError || projectError || statsError) return <NoData />;

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
