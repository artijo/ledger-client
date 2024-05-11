import LedgerForm from "./components/LedgerForm";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import IncomeTable from "./components/IncomeTable";
import ExpendTable from "./components/ExpendTable";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<LedgerForm />} />
            <Route path="/income" element={<IncomeTable />} />
            <Route path="/expend" element={<ExpendTable />} />
          </Routes>
        </Layout>
      </QueryClientProvider>
 
  );
}

export default App;
