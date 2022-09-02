import { Button, styled } from "@mui/material";

const HeaderButton = styled(Button)({
  "&.MuiButton-contained": {
    color: "black",
    backgroundColor: "var(--grey-2)",
    height: 47,
    width: 154,
    "&:hover": {
      backgroundColor: "var(--grey-0)",
    },
  },
});

export default HeaderButton;
