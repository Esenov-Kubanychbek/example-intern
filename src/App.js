import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavigationTwo from "./components/Header/NavigationTwo/NavigationTwo";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <NavigationTwo sticky='sticky'/>

      <Main />
      <Footer/>
    </div>
  );
}

export default App;
