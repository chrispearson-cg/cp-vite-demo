import './App.css';
import Drawer from './components/Drawer';
import TitleBar from './components/TitleBar';
import Content from './components/Content';
const App = () => {
  return (
    <>
      <TitleBar />
      <Drawer />
      <Content />
    </>
  );
};

export default App;
