
import './App.css';
import AdminSidebar from './Components/Admin/AdminSidebar';
import Admin from './Pages/Admin/Admin';
import {Box} from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Admin />
      <Box>
        <AdminSidebar />
      </Box>
    </div>
  );
}

export default App;
