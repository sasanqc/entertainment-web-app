import Searchbar from "./components/Searchbar";
import Trending from "./components/Trending";
import Recommended from "./laout/Recommended";
import Sidebar from "./laout/Sidebar";

function App() {
  return (
    <main className="app">
      <Sidebar />
      <Searchbar />
      <div className="content">
        <Trending />
        <Recommended />
      </div>
    </main>
  );
}

export default App;
