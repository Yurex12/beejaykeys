import Card from "@/components/Card";

import { useServices } from "@/features/AdminServices/hooks/useServices";
import { HiOutlineChartBar, HiOutlineUserGroup } from "react-icons/hi";
import { HiOutlineMegaphone } from "react-icons/hi2";
import BrandServicesContainer from "./BrandServicesContainer";
import BrandServicesSkeleton from "./BrandServicesSkeleton";

function BrandServices() {
  const { services, isLoading, error } = useServices();
  if (isLoading)
    return (
      <BrandServicesContainer>
        <BrandServicesSkeleton />
      </BrandServicesContainer>
    );

  if (error) return null;

  if (!services?.length) return null;

  return (
    <BrandServicesContainer>
      {services.map((service) => {
        const updatedService = {
          ...service,
          title: `${service.skill.split("-").join(" ").charAt(0).toUpperCase()}${service.skill.split("-").join(" ").slice(1)}`,
          icon: (service.skill === "ambassadorship-&-influence" && (
            <HiOutlineMegaphone className="text-blue-400" />
          )) ||
            (service.skill === "project-marketing" && (
              <HiOutlineChartBar className="text-pink-400" />
            )) ||
            (service.skill === "community-management" && (
              <HiOutlineUserGroup className="text-green-400" />
            )) || <HiOutlineChartBar className="text-green-400" />,
        };
        return (
          <Card {...updatedService} key={service._id}>
            <ul className="flex flex-1 flex-wrap gap-x-2 gap-y-4">
              {service.roles.split(",").map((role) => (
                <li
                  className="rounded-full border border-gray-200 px-4 py-2 text-sm"
                  key={role}
                >
                  {role}
                </li>
              ))}
            </ul>
          </Card>
        );
      })}
    </BrandServicesContainer>
  );
}

export default BrandServices;
