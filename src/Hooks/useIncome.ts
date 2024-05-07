import axios from "axios";
import { useQuery } from "@tanstack/react-query";

type Income = {
  _id: string;
  date: string;
  title: string;
  description: string;
  amount: number;
  type: string;
  user: string;
  __v: number;
};

export const useIncome = () => {
  return useQuery<Income[]>({
    queryKey: ["income"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:4000/ledgers?type=income",{
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRpam8ubWVAaG90bWFpbC5jb20iLCJpYXQiOjE3MTQ1NzMzNTF9.5haaboIVOqH5Xr8t2QwFl0HXUdm6QDfsH3siQCYQ76k`,
      }});
      return res.data;
    },
  })
};