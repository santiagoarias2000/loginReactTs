import "./App.css";
import "../src/assets/css/style.css"
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { RouteComplete } from "./app/util/routes/RouteComplete";

const charging = <div>por favor sea paciente</div>;
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={charging}>
        <RouteComplete />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
