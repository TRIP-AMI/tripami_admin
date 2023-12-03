import StatisticDashboard from "@/components/Statistic/StatisticDashboard";
import BasicCalendar from "@/components/Calendar/BasicCalendar";

function DashboardPage() {
  return (
    <div className="wrap">
      <StatisticDashboard />
      <BasicCalendar />
    </div>
  );
}

export default DashboardPage;
