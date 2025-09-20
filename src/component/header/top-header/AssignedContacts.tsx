"use client";

import {
  Avatar,
  AvatarGroup,
} from "@mui/material";

export default function AssignedContacts() {
  return (
    <AvatarGroup
      max={5}
      sx={{
        "& .MuiAvatar-root": {
          width: 24,
          height: 24,
          fontSize: "0.625rem",
        },
        gap: "4px",
        ml: 0.5,
      }}
    >
      <Avatar sx={{ bgcolor: "#81c784" }}>SK</Avatar>
      <Avatar sx={{ bgcolor: "#f48fb1" }}>AG</Avatar>
      <Avatar sx={{ bgcolor: "#ffb74d" }}>KJ</Avatar>
      <Avatar sx={{ bgcolor: "#9e9e9e" }}>KP</Avatar>
      <Avatar
        sx={{
          bgcolor: "#fff",
          color: "#1976d2",
          border: "1px solid #d0d7de",
          fontWeight: 600,
        }}
      >
        +3
      </Avatar>
    </AvatarGroup>
  );
}
