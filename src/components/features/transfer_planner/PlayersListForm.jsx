import React from "react";
import {
  FormControl,
  InputLabel,
  Input,
  Select,
  MenuItem,
  Box,
  TextField,
} from "@mui/material";
import { Formik, Form, useFormik } from "formik";

const PlayersListForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      team: "ALL",
      role: "",
    },
  });

  return (
    <div>
      <form>
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
          onChange={formik.handleChange}
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
      </form>
    </div>
    // <FormControl sx={{ display: "flex" }}>
    //   <Box xs={4}>
    //     <InputLabel htmlFor="my-input">Player name</InputLabel>
    //     <Input id="name" />
    //   </Box>
    //   <Box >
    //     <InputLabel id="demo-simple-select-label">Age</InputLabel>
    //     <Select
    //       labelId="demo-simple-select-label"
    //       id="demo-simple-select"
    //       // value={age}
    //       label="Age"
    //       // onChange={handleChange}
    //     >
    //       <MenuItem value={10}>Ten</MenuItem>
    //       <MenuItem value={20}>Twenty</MenuItem>
    //       <MenuItem value={30}>Thirty</MenuItem>
    //     </Select>
    //   </Box>
    // </FormControl>
  );
};

export default PlayersListForm;
