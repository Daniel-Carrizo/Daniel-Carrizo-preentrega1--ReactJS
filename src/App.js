import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
function App() {
  return (
<>
<Navbar/>
 {/* Use the ItemListContainer component with the updated message */}
 <ItemListContainer message="Aún no hay productos agregados" />
</>
  );
}

export default App;
