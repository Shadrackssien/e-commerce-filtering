import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Navigation />
      <Recommended />
      <Products />
    </div>
  );
}

export default App;
