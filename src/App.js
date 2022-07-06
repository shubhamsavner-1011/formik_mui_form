import './App.css';
import FormDemo from './Components/Form/FormDemo';
import FormikForm from './Components/Form/FormikForm';
import { MuiComponents } from './Components/Form/MuiComponents';
function App() {
  return (
  <div>
    <FormikForm/>
    <FormDemo/>
    {/* */}
    <MuiComponents/>
  </div>
  );
}

export default App;
