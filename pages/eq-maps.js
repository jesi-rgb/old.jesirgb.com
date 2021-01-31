import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("../components/Map.js"),
  {
    ssr: false,
  }
);

export default () => <DynamicComponentWithNoSSR />;
