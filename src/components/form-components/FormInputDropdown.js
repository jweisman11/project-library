import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

const options = [
  {
    label: "Project A",
    value: "1",
  },
  {
    label: "Project B",
    value: "2",
  },
  { label: "Really really really really long Project Name", value: "3" },
];

function FormInputDropdown({ name, control, label }) {
  const generateSingleOptions = () => {
    return options.map((option) => {
      return (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      );
    });
  };

  return (
    <FormControl sx={{ width: 525 }}>
      <InputLabel>{label}</InputLabel>
      <Controller
        render={({ field: { onChange, value } }) => (
          <Select variant="standard" onChange={onChange} value={value}>
            {generateSingleOptions()}
          </Select>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  );
}

export default FormInputDropdown;
