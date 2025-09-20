'use client';

import {
  Box,
  Divider,
} from '@mui/material';
import TopHeader from './top-header/TopHeader';
import BorrowerHeader from './BorrowerHeader';

export default function MainHeader() {
  return (
    <Box
      sx={{
        p: 1,
        bgcolor: "white",
        width: "100%",
        minWidth: 0,
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <TopHeader />
      <Divider sx={{ my: 2 }} />
      <BorrowerHeader />
      
    </Box>
  );
}