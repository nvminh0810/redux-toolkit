import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  LinearProgress,
} from "@mui/material";
import { useSelector } from "react-redux";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { deleteUser } from "../userSlice";
import { useNavigate } from "react-router-dom";

export default function UserTable({ users }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.user.loading);

  const handleOnUpdate = (user) => {
    navigate(`/users/${user.id}`, {
      state: user,
    });
  };

  const handleOnDelete = (userId) => {
    dispatch(deleteUser(userId));
  };

  const renderUsers = (users) => {
    if (users && users.length > 0) {
      return users.map((user) => (
        <TableRow
          key={user.name}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {user.name}
          </TableCell>
          <TableCell>{user.company}</TableCell>
          <TableCell>{user.role}</TableCell>
          <TableCell>{user.verified ? "Yes" : "No"}</TableCell>
          <TableCell>{user.status ? "Actived" : "Banned"}</TableCell>
          <TableCell align="center">
            <IconButton
              aria-label="eidt"
              size="small"
              color="success"
              onClick={() => {
                handleOnUpdate(user);
              }}
            >
              <ModeEditIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              size="small"
              color="error"
              onClick={() => {
                handleOnDelete(user.id);
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
    <TableContainer>
      {loading && <LinearProgress />}
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Verified</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="center">Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderUsers(users)}</TableBody>
      </Table>
    </TableContainer>
  );
}
