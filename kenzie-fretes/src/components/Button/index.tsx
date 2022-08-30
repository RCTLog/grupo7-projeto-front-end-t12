import { Button, styled } from "@mui/material"

const CButton = styled(Button)({
  "&.MuiButton-contained": {
    backgroundColor: "var(--color-primary)",
    height: 48,
    width: "100%",
    "&:hover": {
      backgroundColor: "#eb570d",
    },
  },
  "&.MuiButton-outlined": {
    color: "#fff",
    borderColor: "#eb570d",
    height: 48,
    width: "100%",
    "&:hover": {
      backgroundColor: "#eb570d",
    },
  },
})

export default CButton
