import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from "../header/header";
import { Menu } from '../menu/menu';
import HomePage from '../../../feature/home/page/home';
import { AppRouter } from '../router/app.route';


export type MenuOption = {
  label: string;
  path: string;
};

const menuOptions: MenuOption[] = [
  { label: "Step1", path: "/home" },
  { label: "Step2", path: "/step2" },
  { label: "Step3", path: "/step3" },
];

function App() {
  return (
    <div className="App">
      <Header>
        <Menu options={menuOptions}></Menu>
      </Header>
      <AppRouter menuOptions={menuOptions}></AppRouter>
    </div>
  );
}

export default App;