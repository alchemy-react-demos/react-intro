import './App.css';
import Header from './Header';
import Cat from './components/Cat';
import cats from './cats';

function App() {
  return (
    <div className="App">
      <Header text="Benny is cute!" foo="bar" />
      <Header />
      {cats.map((cat) => (
        <Cat key={cat.name} name={cat.name} url={cat.url} />
      ))}
    </div>
  );
}

export default App;
