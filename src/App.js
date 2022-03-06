import "./App.css";
import {details} from './db';

function App() {
  return (
    <div className="container">
        {details.map(detail => {
          const {id, name, genre} = detail;
          return (
            <span key={id}>
              <h2>{name} {'->'} {genre}</h2>
            </span>
          )
        })}
    </div>
  );
}

export default App;
