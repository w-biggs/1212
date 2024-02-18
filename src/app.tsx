// @refresh reload
import { Component } from 'solid-js';
import { FileRoutes } from '@solidjs/start';
import { RouteSectionProps, Router } from '@solidjs/router';
import HeaderBar from './components/HeaderBar';
import './styles/global.scss';

const Layout: Component<RouteSectionProps> = (props) => (
  <div class='container'>
    <HeaderBar />
    {props.children}
  </div>
);

const App = () => {
  return (
    <Router root={Layout}>
      <FileRoutes />
    </Router>
  );
};

export default App;
