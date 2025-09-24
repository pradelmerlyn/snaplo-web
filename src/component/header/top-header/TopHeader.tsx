"use client";

import {
  Box,
  Typography,
  Stack,
  Button,
  Divider,
  useTheme,
} from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import AssignedContacts from "./AssignedContacts";
import ActionButtons from "./ActionButtons";

export default function TopHeader() {
  const theme = useTheme();

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        flexWrap: "wrap",
        px: 5,
        height: 20, // force overall tighter height if needed
      }}
    >
      {/* Left Group with vertical dividers */}
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        divider={<Divider orientation="vertical" flexItem />}
        sx={{ flexWrap: "wrap", rowGap: 0.1 }}
      >
        {/* Loan Number */}
        <Typography
          color="primary"
          variant="caption"
          sx={{
            fontWeight: 600,
            px: 0.125,
            lineHeight: 1.1,
          }}
        >
          #1234567890
        </Typography>

        {/* Unlocked Box */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            px: 0.5,
            py: 0.125,
            bgcolor: theme.palette.grey[100],
            borderRadius: "4px",
            height: 20,
          }}
        >
          <LockOpenIcon
            sx={{ fontSize: theme.typography.caption.fontSize, mr: 0.375 }}
          />
          <Typography
            variant="caption"
            sx={{
              fontWeight: 600,
              color: theme.palette.text.secondary,
              lineHeight: 1,
            }}
          >
            Unlocked
          </Typography>
        </Box>

        {/* Name and Role */}
        <Typography
          variant="caption"
          sx={{
            fontWeight: 600,
            lineHeight: 1,
            px: 0.125,
          }}
        >
          Matthew Lee{" "}
          <Box
            component="span"
            sx={{
              fontWeight: 400,
              color: theme.palette.text.secondary,
              ml: 0.125,
            }}
          >
            | Corporate
          </Box>
        </Typography>

        {/* Avatar Group */}
        <AssignedContacts />
      </Stack>

      {/* Right Group */}
      <ActionButtons />
    </Stack>
  );
}
