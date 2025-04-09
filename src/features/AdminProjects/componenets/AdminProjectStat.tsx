type AdminProjectStatProps = {
  count: number;
  title: string;
  icon: React.ReactNode;
};
function AdminProjectStat({ count, title, icon }: AdminProjectStatProps) {
  return (
    <div className="flex-1 space-y-6 rounded-md border border-gray-200 p-5">
      <div className="flex items-center justify-between">
        <h3>{title} </h3>
        <div className="rounded-full bg-gray-100 p-3">{icon}</div>
      </div>
      <p className="text-2xl font-extrabold text-gray-800">{count}</p>
    </div>
  );
}

export default AdminProjectStat;
