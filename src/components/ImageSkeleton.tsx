import { ImgHTMLAttributes, useState } from "react";
import { Skeleton } from "./ui/skeleton";

type ImageSkeletonProps = ImgHTMLAttributes<HTMLImageElement> & {
  skeletonClassName: string;
};

function ImageSkeleton({
  src,
  alt,
  className = "",
  skeletonClassName = "",
  ...rest
}: ImageSkeletonProps) {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      {!loaded && <Skeleton className={skeletonClassName} />}
      {src && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          className={`object-cover ${loaded ? "block" : "hidden"} ${className}`}
          {...rest}
        />
      )}
    </>
  );
}

export default ImageSkeleton;
