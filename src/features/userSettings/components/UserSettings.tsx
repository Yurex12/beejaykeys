import ErrorPage from "@/components/ErrorPage";
import Spinner from "@/components/Spinner";
import { useUser } from "@/features/auth/hooks/useUser";
import { useNavigate } from "react-router-dom";
import UpdateUserInfoForm from "./UpdateUserInfoForm";
import UpdateUserPasswordForm from "./UpdateUserPasswordForm";
import { useEffect } from "react";

function UserSettings() {
  const { isLoading, error, user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  if (isLoading) return <Spinner />;
  if (error) return <ErrorPage />;

  return (
    <section>
      <div className="mx-auto mt-20 space-y-10 px-8 py-5 pb-20 md:px-14">
        <h1 className="text-2xl font-extrabold text-gray-800 sm:text-3xl">
          Update your account
        </h1>

        <div className="rounded-md border border-gray-200 p-5">
          <h3 className="text-xl font-extrabold text-gray-600">
            Update user data
          </h3>
          <UpdateUserInfoForm />
        </div>

        <div className="rounded-md border border-gray-200 p-5">
          <h3 className="text-xl font-extrabold text-gray-600">
            Update user Password
          </h3>
          <UpdateUserPasswordForm />
        </div>
      </div>
    </section>
  );
}

export default UserSettings;
