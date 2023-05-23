import React from "react";
import {
  Select,
  MenuItem,
  TextField,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { filterPlayers } from "../../../../features/players/playersSlice";

const PlayersListForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      team: "ALL",
      role: "",
    },
  });

  const handleSelectOnChange = (e) => {
    formik.setFieldValue("team", e.target.value);

    dispatch(filterPlayers({ ...formik.values, team: e.target.value }));
  };

  return (
    <div>
      <FormControl>
        <TextField
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
        ></TextField>
        <Select
          id="team"
          name="team"
          label="Team"
          value={formik.values.team}
          onChange={handleSelectOnChange}
          data-testid="select-button"
        >
          <MenuItem value="ALL">-</MenuItem>
          <MenuItem value="ARS">ARS</MenuItem>
          <MenuItem value="AVL">AVL</MenuItem>
          <MenuItem value="BOU">BOU</MenuItem>
          <MenuItem value="BRE">BRE</MenuItem>
          <MenuItem value="BHA">BHA</MenuItem>
          <MenuItem value="CFC">CFC</MenuItem>
          <MenuItem value="CRY">CRY</MenuItem>
          <MenuItem value="EVE">EVE</MenuItem>
          <MenuItem value="FUL">FUL</MenuItem>
          <MenuItem value="LEE">LEE</MenuItem>
          <MenuItem value="LEI">LEI</MenuItem>
          <MenuItem value="LIV">LIV</MenuItem>
          <MenuItem value="MCI">MCI</MenuItem>
          <MenuItem value="MUN">MUN</MenuItem>
          <MenuItem value="NEW">NEW</MenuItem>
          <MenuItem value="NFO">NFO</MenuItem>
          <MenuItem value="SOU">SOU</MenuItem>
          <MenuItem value="TOT">TOT</MenuItem>
          <MenuItem value="WHU">WHU</MenuItem>
          <MenuItem value="WOL">WOL</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default PlayersListForm;
