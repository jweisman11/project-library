import { Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";
import { Controller, useForm } from "react-hook-form";

function ContactUs() {
  const { handleSubmit, reset, control } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <form>
      <Controller
        name={"textValue"}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField onChange={onChange} value={value} label={"Text Value"} />
        )}
      />
      <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
      <Button onClick={() => reset()} variant={"outlined"}>
        Reset
      </Button>
    </form>
  );
}

export default ContactUs;
