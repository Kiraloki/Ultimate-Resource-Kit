import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ obj }) {
  const [age, setAge] = React.useState(obj.options[0]);

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log("hi");
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 25 }}>
        <InputLabel id="demo-simple-select-standard-label">
          {obj.category}
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label={obj.category}
        >
          {obj.options.map((option) => {
            return <MenuItem value={option}>{option}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </div>
  );
}
