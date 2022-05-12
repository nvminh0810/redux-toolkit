import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
export default function StudentTable({
  students,
  citiesMap,
  onUpdate,
  onDelete,
}) {
  const renderStudents = (students) => {
    if (students && students.length > 0 && Object.keys(citiesMap).length > 0) {
      return students.map((student) => (
        <TableRow
          key={student.id}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {student.name}
          </TableCell>
          <TableCell>{student.age}</TableCell>
          <TableCell>{student.mark}</TableCell>
          <TableCell>{student.gender}</TableCell>
          <TableCell>
            {citiesMap[student.city] ? citiesMap[student.city].name : ""}
          </TableCell>
          <TableCell align="center">
            <IconButton
              aria-label="eidt"
              size="small"
              color="success"
              onClick={() => {
                onUpdate(student);
              }}
            >
              <ModeEditIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              size="small"
              color="error"
              onClick={() => {
                onDelete(student.id);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </TableCell>
        </TableRow>
      ));
    }
  };

  return (
    <TableContainer sx={{ maxHeight: 440 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Mark</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>City</TableCell>
            <TableCell align="center">Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderStudents(students)}</TableBody>
      </Table>
    </TableContainer>
  );
}
