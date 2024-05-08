import ChartExpend from "../components/ChartExpend";
import IncomeTable from "../components/IncomeTable";
import ExpendTable from "../components/ExpendTable";

import { useLedgerStore } from "../store";
import { useEffect } from "react";

const Home = () => {
    const fetchLedger = useLedgerStore((state:any) => state.fetchLedger);
    const ledger = useLedgerStore((state:any) => state.ledger);
    console.log(ledger);
    useEffect(() => {
        //if ledger eqial empty object then fetchLedger
        if (Object.keys(ledger).length === 0) fetchLedger();
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