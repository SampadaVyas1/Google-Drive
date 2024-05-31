import "./App.css";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./Router/AppRouter";
import Header from "./component/Header/Header";
import AppContext from "./context/AppContext";

function App() {
  return (
    <AppContext>
      <Header />
      <div className="wrapperContainer">
        <RouterProvider router={appRouter} />
      </div>
    </AppContext>
  );
}

export default App;
