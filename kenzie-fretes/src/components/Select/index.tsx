import { PlaceOutlined } from "@mui/icons-material"
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  styled,
} from "@mui/material"
import { ISelectStatesProps } from "./select.interfaces"

const CustomSelect = styled(Select)({
  color: "#000",

  "& fieldset": {
    borderColor: "var(--color-primary)",
  },
  "&:hover.MuiInputBase-root fieldset": {
    borderColor: "var(--color-primary)",
  },
  "&.MuiInputBase-root.Mui-focused fieldset": {
    borderColor: "var(--color-primary)",
  },

  "& .MuiSvgIcon-root": {
    color: "#000",
  },
})

export const SelectStates = ({ setState, Label, name }: ISelectStatesProps) => {
  return (
    <FormControl>
      <InputLabel
        id="origin"
        sx={{
          "&.Mui-focused": {
            color: "var(--color-primary)",
          },
        }}
      >
        {Label}
      </InputLabel>
      <CustomSelect
        id="origin"
        label={Label}
        variant="outlined"
        defaultValue="all"
        name={name}
        // onChange={(event) => {
        //   setState(`${event.target.value}`)
        // }}
        startAdornment={<PlaceOutlined />}
      >
        <MenuItem value="all">Todos</MenuItem>
        <MenuItem value="AC">AC</MenuItem>
        <MenuItem value="AL">AL</MenuItem>
        <MenuItem value="AP">AP</MenuItem>
        <MenuItem value="AM">AM</MenuItem>
        <MenuItem value="BA">BA</MenuItem>
        <MenuItem value="CE">CE</MenuItem>
        <MenuItem value="ES">ES</MenuItem>
        <MenuItem value="GO">GO</MenuItem>
        <MenuItem value="MA">MA</MenuItem>
        <MenuItem value="MT">MT</MenuItem>
        <MenuItem value="MS">MS</MenuItem>
        <MenuItem value="MG">MG</MenuItem>
        <MenuItem value="PA">PA</MenuItem>
        <MenuItem value="PB">PB</MenuItem>
        <MenuItem value="PR">PR</MenuItem>
        <MenuItem value="PE">PE</MenuItem>
        <MenuItem value="PI">PI</MenuItem>
        <MenuItem value="RJ">RJ</MenuItem>
        <MenuItem value="RN">RN</MenuItem>
        <MenuItem value="RS">RS</MenuItem>
        <MenuItem value="RO">RO</MenuItem>
        <MenuItem value="RR">RR</MenuItem>
        <MenuItem value="SC">SC</MenuItem>
        <MenuItem value="SP">SP</MenuItem>
        <MenuItem value="SE">SE</MenuItem>
        <MenuItem value="TO">TO</MenuItem>
        <MenuItem value="DF">DF</MenuItem>
      </CustomSelect>
    </FormControl>
  )
}

export default CustomSelect
