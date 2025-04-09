import { Skeleton } from "@/components/ui/skeleton";
import { useLinks } from "@/features/AdminLinks/hooks/useLinks";
import { FaInstagramSquare, FaTelegramPlane } from "react-icons/fa";
import { TbBrandX } from "react-icons/tb";
import { Link } from "react-router-dom";

function SocialLinks() {
  const { links, isLoading, error } = useLinks();

  if (isLoading) return <Skeleton className="h-8 w-60 bg-gray-200" />;

  if (error) return null;

  if (!links?.length) return null;

  return (
    <div className="flex space-x-4">
      {/* Telegram Icon */}
      <Link to={links[1].url}>
        <FaTelegramPlane
          className="h-6 w-6 text-gray-700"
          title={links[1].name}
        />
      </Link>
      {/* X (Twitter) Icon */}
      <Link to={links[2].url}>
        <TbBrandX className="h-6 w-6 text-gray-700" title={links[2].name} />
      </Link>
      {/* X (instagram) Icon */}
      <Link to={links[0].url}>
        <FaInstagramSquare
          className="h-6 w-6 text-gray-700"
          title={links[0].name}
        />
      </Link>
    </div>
  );
}

export default SocialLinks;
