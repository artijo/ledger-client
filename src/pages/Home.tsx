import ChartExpend from "../components/ChartExpend";
import IncomeTable from "../components/IncomeTable";
import ExpendTable from "../components/ExpendTable";

import { useLedgerStore } from "../store";
import { useEffect } from "react";

const Home = () => {
    const fetchLedger = useLedgerStore((state:any) => state.fetchLedger);
    
    const ledger = useLedgerStore((state:any) => state.ledger);
    useEffect(() => {
        fetchLedger();
    }, []);
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
                    Balance
                    <p>500</p>
                </div>
            </div>
            <ChartExpend />
            <IncomeTable />
            <ExpendTable />
        </>
    );
    };

export default Home;