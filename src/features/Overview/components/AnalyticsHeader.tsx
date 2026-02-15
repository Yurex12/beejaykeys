import { useUser } from "@/features/auth/hooks/useUser";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AnalyticsHeader() {
  const { user } = useUser();

  if (!user) return null;

  return (
    <div className="flex flex-col-reverse justify-between gap-y-4 rounded-sm border border-gray-200 px-6 py-4 md:flex-row">
      <div className="space-y-1">
        <h1 className="text-xl font-bold">Welcome Back</h1>
        <p className="text-sm text-gray-500">
          Here&apos;s a quick view of your portfolio&apos;s current status.
        </p>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage src={user.image} />
            <AvatarFallback>{user.username.charAt(0)}</AvatarFallback>
          </Avatar>

          <div>
            <p className="text-sm font-semibold">
              {user.username.charAt(0).toUpperCase() + user.username.slice(1)}
            </p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}
