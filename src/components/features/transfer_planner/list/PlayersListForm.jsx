import React from "react";
import {
  Select,
  MenuItem,
  TextField,
  FormControl,
  Box,
  Typography,
  InputLabel,
  FormLabel,
} from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { filterPlayers } from "../../../../features/players/playersSlice";
import { teamsList, roles } from "./data";
import ListButtons from "./ListButtons";
import PageController from "./PageController";

const PlayersListForm = ({ setPage, page, numOfPages, handleSettingPages }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      team: "ALL",
      role: "ALL",
    },
  });

  const handleSelectOnChange = (e, type) => {
    formik.setFieldValue(type, e.target.value);
    setPage(1);

    switch (type) {
      case "team":
        return dispatch(
          filterPlayers({ ...formik.values, team: e.target.value })
        );
      case "name":
        return dispatch(
          filterPlayers({ ...formik.values, name: e.target.value })
        );
      case "role":
        return dispatch(
          filterPlayers({ ...formik.values, role: e.target.value })
        );
      default:
        break;
    }
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box
        sx={{ display: "flex", gap: "1rem", width: "100%", alignItems: "end" }}
      >
        <FormControl>
          <InputLabel>Name</InputLabel>
          <TextField
            id="name"
            name="name"
            value={formik.values.name}
            onChange={(e) => handleSelectOnChange(e, "name")}
          ></TextField>
        </FormControl>
        <FormControl>
          <FormLabel>Team</FormLabel>
          <Select
            id="team"
            name="team"
            label="Team"
            value={formik.values.team}
            onChange={(e) => handleSelectOnChange(e, "team")}
            data-testid="select-button"
          >
            <MenuItem value="ALL">-</MenuItem>
            {teamsList.map((team) => (
              <MenuItem value={team.value} key={team.value}>
                {team.value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Role</FormLabel>
          <Select
            id="role"
            name="role"
            label="Role"
            value={formik.values.role}
            onChange={(e) => handleSelectOnChange(e, "role")}
          >
            <MenuItem value="ALL">-</MenuItem>
            {roles.map((role) => (
              <MenuItem value={role.role} key={role.role}>
                {role.value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <PageController
        handleSettingPages={handleSettingPages}
        page={page}
        numOfPages={numOfPages}
      />
    </Box>
  );
};

export default PlayersListForm;
