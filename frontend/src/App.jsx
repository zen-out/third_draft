import Button from "./components/Button";
import Input from "./components/Input";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Routes, BrowserRouter, Link, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function RequireAuth({ children, redirectTo }) {
  const isAuthenticated = useSelector((state) => state.authStore.auth);
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

function App() {
  const isAuthenticated = useSelector((state) => state.authStore.auth);
  return (
    <div className="p-6">
      <header className="App-header">
        <Login />
        <Signup />
        <Button is_color="is-primary" helpText="Sam, ask Lavine to hire me" />
        <Input
          icon_name="icon-highlighter"
          is_color="is-primary"
          placeholder="hello"
          help_text="think its meant to be"
        />
        <ul>
          <li>implement redux store first</li>
          <li>implement react router</li>
          <li>just create all inputs and buttons first that will do things</li>
          <li>manage all state</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
