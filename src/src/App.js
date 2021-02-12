import React from "react";
import { useRoutes } from "hookrouter";
import routes from "./routes";

function App() {
    const routerResult = useRoutes(routes);
    return <div>{routerResult} </div>;
}

export default App;
