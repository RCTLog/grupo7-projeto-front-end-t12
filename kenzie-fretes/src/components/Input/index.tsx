import { styled, TextField } from "@mui/material"

const CInput = styled(TextField)({
  width: "100%",
  "& label.Mui-focused": {
    color: "var(--color-primary)",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "var(--color-primary)",
    },
    "&:hover fieldset": {
      borderColor: "#eb570d",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#eb570d",
    },
  },
  "& input": {
    color: "#000",
  },
  "& label ": {
    color: "#000",
  },
})

export default CInput
