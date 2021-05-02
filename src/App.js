import Navbar from "./components/Navbar";
import ShoppingContainer from "./components/ShoppingContainer";
import { AppProvider } from "./Context";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Navbar />
        <ShoppingContainer />
      </AppProvider>
    </div>
  );
}

export default App;
