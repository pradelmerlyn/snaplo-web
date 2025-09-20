"use client";

import { Stack, Button, } from "@mui/material";

export default function ActionButtons() {
  return (
    <Stack
      direction="row"
      spacing={0.375}
      sx={{ flexShrink: 0, mt: { xs: 0.5, md: 0 } }}
    >
      {/* Buttons */}
      <Button
        variant="outlined"
        size="small"
        sx={{
          textTransform: "none",
          borderColor: "#d0d7de",
          color: "#24292f",
          fontSize: "0.65rem",
          fontWeight: 500,
          px: 1,
          py: 0.125,
          minWidth: "auto",
          height: 24,
          lineHeight: 1,
          "&:hover": {
            borderColor: "#bdbdbd",
            bgcolor: "rgba(0, 0, 0, 0.03)",
          },
        }}
      >
        Invite Borrower
      </Button>
      <Button
        variant="outlined"
        size="small"
        sx={{
          textTransform: "none",
          borderColor: "#d0d7de",
          color: "#24292f",
          fontSize: "0.65rem",
          fontWeight: 500,
          px: 1,
          py: 0.125,
          minWidth: "auto",
          height: 24,
          lineHeight: 1,
          "&:hover": {
            borderColor: "#bdbdbd",
            bgcolor: "rgba(0, 0, 0, 0.03)",
          },
        }}
      >
        Save Changes
      </Button>
      <Button
        variant="contained"
        size="small"
        sx={{
          textTransform: "none",
          bgcolor: "#0969da",
          color: "white",
          fontSize: "0.65rem",
          fontWeight: 500,
          px: 1,
          py: 0.125,
          minWidth: "auto",
          height: 24,
          lineHeight: 1,
          "&:hover": {
            bgcolor: "#085ac7",
          },
        }}
      >
        Reload Loan
      </Button>
    </Stack>
  );
}
