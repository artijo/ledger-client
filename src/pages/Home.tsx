import ChartExpend from "../components/ChartExpend";
import IncomeTable from "../components/IncomeTable";
import ExpendTable from "../components/ExpendTable";

import { useLedgerStore } from "../store";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

const Home = () => {
  const [cookies] = useCookies(["token"]);
  const fetchLedger = useLedgerStore((state: any) => state.fetchLedger);
  const ledger = useLedgerStore((state: any) => state.ledger);
  useEffect(() => {
    if (Object.keys(ledger).length === 0) fetchLedger();
  }, []);

  if (!cookies.token) {
    return <h1>Please Login</h1>;
  }
  return (
    <>
      <div className="flex gap-4">
        <div>
          Today Expend
          <p>{ledger.todayexpense}</p>
        </div>
        <div>
          Expend(Mounth)
          <p>{ledger.thismonthexpense}</p>
        </div>
        <div>
          Income
          <p>{ledger.income}</p>
        </div>
        <div>
          Expense
          <p>{ledger.expense}</p>
        </div>
      </div>
      <ChartExpend />
      <div className="lg:flex gap-4">
        <IncomeTable />
        <ExpendTable />
      </div>
    </>
  );
};

export default Home;
