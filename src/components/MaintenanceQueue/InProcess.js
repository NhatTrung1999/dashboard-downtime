import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";

function createData(
  openResquest,
  orderIdNumber,
  deptedTime,
  machineStatus,
  lineLocation,
  downtimeImpactOnProduction,
  machineResponse,
  OperatorId,
  mechanicId
) {
  return {
    openResquest,

    orderIdNumber,
    deptedTime,
    machineStatus,
    lineLocation,
    downtimeImpactOnProduction,
    machineResponse,
    OperatorId,
    mechanicId,
  };
}

const rows = [
  createData(
    "Overlock",
    "MR43028",
    "5 min",
    "Down",
    "A-6",
    "Line Shutdown",
    "5 min",
    "09938",
    "-"
  ),
  createData(
    "Med. Computer",
    "MR17392",
    "12 min",
    "Down",
    "A-2",
    "Line at 75% speed",
    "12 min",
    "24009",
    "-"
  ),
  createData(
    "DN Post",
    "MR12743",
    "4 min",
    "Down",
    "A-3",
    "Line at 75% speed",
    "4 min",
    "12126",
    "-"
  ),
];

export default function InProcess() {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Open Requests</TableCell>
            <TableCell align="right">Order ID Number</TableCell>
            <TableCell align="right">Depted Time</TableCell>
            <TableCell align="right">Machine Status</TableCell>
            <TableCell align="right">Line Location</TableCell>
            <TableCell align="right">Downtime's impact on production</TableCell>
            <TableCell align="right">Mechanic Response</TableCell>
            <TableCell align="right">Operator ID</TableCell>
            <TableCell align="right">Mechanic ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.openResquest}
              </TableCell>
              <TableCell align="right">{row.orderIdNumber}</TableCell>
              <TableCell align="right">{row.deptedTime}</TableCell>
              <TableCell align="right">{row.machineStatus}</TableCell>
              <TableCell align="right">{row.lineLocation}</TableCell>
              <TableCell align="right">
                {row.downtimeImpactOnProduction}
              </TableCell>
              <TableCell align="right">{row.machineResponse}</TableCell>
              <TableCell align="right">{row.OperatorId}</TableCell>
              <TableCell align="right">{row.mechanicId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
