import "./App.css";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import MenuSideBar from "./components/MenuSideBar";
import SectionInfo from "./components/SectionInfo";

function App() {
  return (
    <>
      <Header />
      <div style={{display: 'flex', width: '100%'}}>
        <MenuSideBar />
        <SectionInfo />
      </div>
    </>
  );
}

export default App;
