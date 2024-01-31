import { Avatar, ShellBar, ShellBarItem } from "@ui5/webcomponents-react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Home } from "./Home";
import { Detail } from "./Detail";
import { MyCustomElement } from "./MyCustomElement";
import { MyComponent } from "./MyComponent";

export function MyApp() {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("./");
  };
  return (
    <>
      <ShellBar
        primaryTitle="My App"
        logo={<img src={"/vite.svg"} />}
        profile={
          <Avatar>
            <img src={"Myimage.jpg"} />
          </Avatar>
        }
        onLogoClick={handleLogoClick}
      >
        <ShellBarItem icon="add" text="Add"></ShellBarItem>
      </ShellBar>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/custom" element={<MyCustomElement />} />
        <Route path="/bp" element={<MyComponent />} />
        <Route path="*" element={<Navigate replace to="/home" />} />
      </Routes>
    </>
  );
}
