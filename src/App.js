import './App.css';
import Header from './Header';
import Cat from './components/Cat';
import cats from './cats';
import background from './background.png';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <Header text="Benny is cute!" foo="bar" />
      <Header />
      {cats.map((cat) => (
        <Cat key={cat.name} image={cat.image} name={cat.name} url={cat.url} />
      ))}
    </div>
  );
}

export default App;
