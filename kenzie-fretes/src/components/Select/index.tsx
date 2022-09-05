import { Select, styled } from "@mui/material"

const CustomSelect = styled(Select)({
  color: "#000",

  "& fieldset": {
    borderColor: "var(--color-secundary-50)",
  },
  "&:hover.MuiInputBase-root fieldset": {
    borderColor: "var(--color-secundary)",
  },
  "&.MuiInputBase-root.Mui-focused fieldset": {
    borderColor: "var(--color-secundary)",
  },

  "& .MuiSvgIcon-root": {
    color: "#000",
  },
})

export default CustomSelect
