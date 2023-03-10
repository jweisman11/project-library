import React, { useEffect } from "react";
import { Slider } from "@mui/material";
import { Controller } from "react-hook-form";

export const FormInputSlider = ({ name, control, setValue, label }) => {
  const [sliderValue, setSliderValue] = React.useState(0);

  useEffect(() => {
    if (sliderValue) setValue(name, sliderValue);
  }, [sliderValue]);

  const handleChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState, formState }) => (
        <Slider
          value={sliderValue}
          onChange={handleChange}
          marks={["urgent", "not urgent"]}
        />
      )}
    />
  );
};

export default FormInputSlider;
