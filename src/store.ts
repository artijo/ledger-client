import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import axios from "axios";
import { hostname } from "./host";

// type Store = {
//   count: number
//   increment: () => void
//   decrement: () => void
// }
// type useLedgerStore = {
//     ledger: {
//         income: number;
//         expense: number;
//         todayexpense: number;
//         thismonthexpense: number;
//     };
// };


export const useLedgerStore = create(

        (set) => ({
            ledger: {
                income: 0,
                expense: 0,
                todayexpense: 0,
                thismonthexpense: 0,
            },
            fetchLedger: async () => {
                try {
                    const res = await axios.get(`${hostname}/ledgers/overview`,{
                        headers: {
                            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRpam8ubWVAaG90bWFpbC5jb20iLCJpYXQiOjE3MTQ1NzMzNTF9.5haaboIVOqH5Xr8t2QwFl0HXUdm6QDfsH3siQCYQ76k`,
                        },
                    });
                    console.log(res.data);
                    set({ ledger: res.data });
                } catch (error) {
                    console.log(error);
                }
            },
        }),
);