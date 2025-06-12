import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Dashboard from "./components/Dashboard";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <h1>Hello World</h1>
      <Dashboard />
    </Provider>
  );
};

export default App;
