import Button from "./components/Button";
import Input from "./components/Input";
import ProgressCard from "./components/ProgressCard";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProjectList from "./pages/ProjectList";

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
      {" "}
      <Header />
      <ProgressCard
        percentage="70%"
        end="PLEASE LMS(2), pls."
        start="2022_05_31"
        table_name="friends are ignoring what they see, lol"
      />
      hi
      <header className="App-header">
        {/* <ProjectList /> */}
        <Login />
        <Signup />
        <Button
          is_color="is-primary"
          helpText="guys please, just look. Ask Lavine to hire me, pls."
        />
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
