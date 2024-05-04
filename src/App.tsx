import LedgerForm from "./components/LedgerForm"
import { Routes, Route } from 'react-router-dom'
import Layout from "./Layout";
import Home from "./pages/Home";

function App() {
  

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<LedgerForm />} />
      </Routes>
    </Layout>
  )
}



export default App
