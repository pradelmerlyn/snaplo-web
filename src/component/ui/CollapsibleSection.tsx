"use client";

import { Box, Collapse, IconButton, Typography, useTheme } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { StyledPaper } from "@/theme/AppTheme";
import { useState } from "react";

interface Props {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function CollapsibleSection({
  title,
  children,
  defaultOpen = true,
}: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const theme = useTheme();

  return (
    <StyledPaper>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px={2}
        py={1}
        borderBottom={`1px solid ${theme.palette.divider}`}
      >
        <Typography
          fontWeight={600}
          fontSize={13}
          color={theme.palette.text.primary}
        >
          {title.toUpperCase()}
        </Typography>
        <IconButton onClick={() => setOpen(!open)} size="small">
          {open ? (
            <ExpandLess fontSize="small" />
          ) : (
            <ExpandMore fontSize="small" />
          )}
        </IconButton>
      </Box>
      <Collapse in={open} unmountOnExit>
        <Box px={2} pt={2} pb={1}>
          {children}
        </Box>
      </Collapse>
    </StyledPaper>
  );
}
