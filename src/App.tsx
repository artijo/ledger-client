import LedgerForm from "./components/LedgerForm"
import { Routes, Route } from 'react-router-dom'
import Layout from "./Layout";

function App() {
  

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LedgerForm />} />
        <Route path="/add" element={<LedgerForm />} />
      </Routes>
    </Layout>
  )
}



export default App
