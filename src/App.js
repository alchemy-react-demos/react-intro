import './App.css';
import Header from './Header';
function App() {
  return (
    <div className="App">
      <Header text="Benny is cute!" foo="bar" />
      <Header />
    </div>
  );
}

export default App;
