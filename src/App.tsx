import { Outlet } from "react-router-dom";
import { Header } from "./components/header";

// TODO: install react router dom

export function App() {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-20 lg:px-44">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
