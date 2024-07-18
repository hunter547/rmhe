import React, { Suspense } from "react";
import LoadingIcon from "./loading/LoadingIcon";

const Icon = ({ icon, width }: { icon: string; width: number }) => {
  const LazyIcon = React.lazy(() => import(`./${icon}`));
  return (
    <Suspense fallback={<LoadingIcon width={width} />}>
      <LazyIcon width={width} />
    </Suspense>
  );
};

export default Icon;
