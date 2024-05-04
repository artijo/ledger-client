import React from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "./ui/table"
  

const ExpendTable: React.FC = () => {
    return (
       <>
       <h1>Expend Items</h1>
       <Table>
  <TableCaption>Expend Items</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Date</TableHead>
      <TableHead>Title</TableHead>
      <TableHead>Description</TableHead>
      <TableHead>Cost</TableHead>
      <TableHead className="text-right">Action</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
        <TableCell>01/01/2021</TableCell>
        <TableCell>Salary</TableCell>
        <TableCell>Monthly Salary</TableCell>
        <TableCell>1000</TableCell>
        <TableCell className="text-right">Edit</TableCell>
    </TableRow>
  </TableBody>
</Table>

       </>
    );
}

export default ExpendTable;