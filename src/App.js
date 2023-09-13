import './App.css';

function Cup({ guest }) {
  return <h2>Tea cup for the guest #{guest}</h2>
}

function App() {
  let cups = [];

  for (let i = 1; i <= 12; i++) {
    cups.push(<Cup key={i} guest={i} />)
  }
  return cups;
}

export default App;
