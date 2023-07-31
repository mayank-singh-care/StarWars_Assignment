import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { Skeleton } from "@mui/material";

const ListLoading = ({ rowsNum, colsNum }) => {
  return [...Array(rowsNum)].map((row, index) => (
    <TableRow key={index}>
      {[...Array(colsNum)].map((col, idx) => (
        <TableCell key={idx}>
          <Skeleton animation="wave" variant="text" />
        </TableCell>
      ))}
    </TableRow>
  ));
};

export default ListLoading;
