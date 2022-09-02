import { Homepage } from "./pages/Homepage";
import MainRoutes from "./services/routes";

const App = () => {
  return (
    <>
      <div className="App">
        <Homepage />
      </div>
      <MainRoutes />
    </>
  );
};

export default App;
