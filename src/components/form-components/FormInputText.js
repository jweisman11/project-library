import React from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

function FormInputText({
  name,
  control,
  label,
  autoComplete,
  autoFocus,
  multiline,
  rows,
}) {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          required
          autoFocus={autoFocus}
          autoComplete={autoComplete}
          label={label}
          variant="outlined"
          multiline
          rows={rows}
        />
      )}
    />
  );
}

export default FormInputText;
