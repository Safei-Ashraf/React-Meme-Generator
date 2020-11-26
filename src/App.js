import styles from './index.css';
import Header from './components/Header'
import MemeGenerator from './components/MemeGenerator';

function App() {
  return (
    <>
    <Header/>
    <div className="App">
     App itself
    </div>
    <MemeGenerator/>
    </>
  );
}

export default App;
