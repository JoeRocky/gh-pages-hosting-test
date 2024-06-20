import { Suspense } from "solid-js";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";

import "@fontsource/inter"
import "~/output.css";

export default function App() {
  return (
    <Router 
        base={import.meta.env.SERVER_BASE_URL}
        root={props => <Suspense>{props.children}</Suspense>}
    >
      <FileRoutes />
    </Router>
  );
}