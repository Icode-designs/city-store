import pxTorem from "@/utils/pxToRem";

const breakpoints = {
  tablet: pxTorem(768),
  desktop: pxTorem(1200),
};

const QUERY = {
  TABLET: `(min-width: ${breakpoints.tablet})`,
  DESKTOP: `(min-width: ${breakpoints.desktop})`,
};

export default QUERY;
