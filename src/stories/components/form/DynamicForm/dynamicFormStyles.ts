import { SxProps } from "@mui/material";

export const gridSx: SxProps = {
  ".MuiGrid-item": {
    paddingTop: "8px",
  },
};

export const sectionContainerSx: SxProps = {
  ".MuiPaper-root": {
    borderRadius: "8px",
    ".MuiCardHeader-root": {
      paddingBottom: 0,
    },
  },
  ".MuiPaper-root.no-first-section": {
    marginTop: "1rem",
  },
};
