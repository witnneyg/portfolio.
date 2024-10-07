import { Header } from "./components/header";
import { MainContent } from "./components/mainContent";

export function App() {
  return (
    <div>
      <Header />

      <div className="container mx-auto px-20 lg:px-36">
        <MainContent />
      </div>
    </div>
  );
}

export default App;
