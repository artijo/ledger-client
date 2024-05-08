import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";
import { hostname } from "./host";


export const useLedgerStore = create(
    persist(
        (set) => ({
            ledger: {
                // income: 0,
                // expense: 0,
                // todayexpense: 0,
                // thismonthexpense: 0,
            },
            fetchLedger: async () => {
                try {
                    const res = await axios.get(`${hostname}/ledgers/overview`,{
                        headers: {
                            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRpam8ubWVAaG90bWFpbC5jb20iLCJpYXQiOjE3MTQ1NzMzNTF9.5haaboIVOqH5Xr8t2QwFl0HXUdm6QDfsH3siQCYQ76k`,
                        },
                    });
                    set({ ledger: res.data });
                } catch (error) {
                    console.log(error);
                }
            },
        }),
        {
            name: "ledger-storage",
        }
    )
);

export const useUserStore = create(
    persist(
        (set) => ({
            user: null,
            setUser: (user:any) => set({ user }),
        }),
        {
            name: "user-storage",
        }
    )
);