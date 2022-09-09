import { Button, styled } from "@mui/material";

const CButton = styled(Button)({
  "&.MuiButton-contained": {
    backgroundColor: "var(--color-secundary)",
    height: 48,
    width: "100%",
    "&:hover": {
      backgroundColor: "var(--color-secundary-50)",
      animation: "pulse 1s infinite",
    },
  },
  "&.MuiButton-outlined": {
    color: "#000",
    borderColor: "#eb570d",
    height: 48,
    width: "100%",
    "&:hover": {
      backgroundColor: "#eb570d",
      color: "#fff",
    },
  },
});

export default CButton;
