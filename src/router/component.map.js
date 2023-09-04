import React from "react";

export const componentMap = {
  Home: React.lazy(() => import("../pages/index")),
  About: React.lazy(() => import("../app/pages/About")),
  BlogPage: React.lazy(() => import("../app/pages/Blog/BlogPage")),
  BlogDetailPage: React.lazy(() => import("../app/pages/Blog/BlogDetailPage")),
};
