import './App.css';
import Header from './Header';
import Cat from './components/Cat';
import cats from './cats';
import background from './background.png';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <img src="benny.png" />
      <Header text="Benny is cute!" foo="bar" />
      <Header />
      <div className="cats-list">
        {cats.map((cat) => (
          <Cat key={cat.name} image={cat.image} name={cat.name} url={cat.url} />
        ))}
      </div>
    </div>
  );
}

export default App;
