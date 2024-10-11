import { Outlet } from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export function App() {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-20 lg:px-44">
        <Outlet />
      </div>

      <div className="bg-zinc-900">
        <Footer />
      </div>
    </div>
  );
}

export default App;
