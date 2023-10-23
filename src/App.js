import "./App.css";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import AppProvider from "./AppContext";
function App() {
  return (
    <div>
      <AppProvider>
        <Header />
        <ProductList />
      </AppProvider>
    </div>
  );
}

export default App;
