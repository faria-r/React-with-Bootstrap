import logo from './logo.svg';
import './App.css';
import { Button, Spinner } from 'react-bootstrap';
import GridCard from './Components/GridCard/GridCard';
import Navigation from './Components/NAv/NAv';
import ToastDisplay from './Components/Toast/Toast';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
        <Button variant="warning">Warning</Button>
        <Spinner animation="grow" variant="danger" />
        <GridCard></GridCard>
        <ToastDisplay></ToastDisplay>

    </div>
  );
}

export default App;
