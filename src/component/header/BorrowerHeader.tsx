"use client";

import { Box, Typography, Stack, Chip, Divider } from "@mui/material";

export default function BorrowerHeader() {
  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={0}
      sx={{ flexWrap: "wrap", px: 5 }}
    >
      {/* Borrower Info */}
      <Stack sx={{ py: 0.5 }}>
        <Box sx={{ minWidth: 120, px: 1 }}>
          <Typography sx={{ fontSize: "0.7rem", lineHeight: 1.5, fontWeight: 600 }}>
            John Smith{" "}
            <Box
              component="span"
              sx={{
                width: 20,
                height: 20,
                fontSize: "0.65rem",
                fontWeight: 600,
                border: "1px solid #d0d7de",
                borderRadius: "50%",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#1976d2",
                backgroundColor: "#fff",
                ml: 0.5,
                verticalAlign: "middle",
              }}
            >
              +1
            </Box>
          </Typography>
          <Typography sx={{ fontSize: "0.7rem", lineHeight: 1.5 }}>
            FICO{" "}
            <Box component="span" fontWeight={600}>
              750
            </Box>
          </Typography>
        </Box>
      </Stack>

      {/* Address */}
      <Stack sx={{ py: 0.5 }}>
        <Box sx={{ minWidth: 120, px: 1 }}>
          <Typography sx={{ fontSize: "0.7rem", lineHeight: 1.5 }}>
            456 Main Street
          </Typography>
          <Typography sx={{ fontSize: "0.7rem", lineHeight: 1.5 }}>
            Brea, CA 98224
          </Typography>
        </Box>
      </Stack>

      {/* Milestone + Occupancy */}
      <Stack sx={{ py: 0.5 }}>
        <Box sx={{ minWidth: 160, px: 1 }}>
          <Typography sx={{ fontSize: "0.7rem", lineHeight: 1.5 }}>
            Milestone{" "}
            <Box component="span" fontWeight={600}>
              File Started
            </Box>
          </Typography>
          <Typography sx={{ fontSize: "0.7rem", lineHeight: 1.5 }}>
            Occupancy{" "}
            <Box component="span" fontWeight={600}>
              Primary Residence
            </Box>
          </Typography>
        </Box>
      </Stack>

      {/* Loan Details */}
      <Stack sx={{ py: 0.5 }}>
        <Box sx={{ minWidth: 200, px: 1 }}>
          <Stack direction="row" spacing={1.5}>
            <Box sx={{ minWidth: 120 }}>
              <Typography sx={{ fontSize: "0.7rem", lineHeight: 1.5 }}>
                Loan Amount{" "}
                <Box component="span" fontWeight={600}>
                  $400,000
                </Box>
              </Typography>
              <Typography sx={{ fontSize: "0.7rem", lineHeight: 1.5 }}>
                Loan Purpose{" "}
                <Box component="span" fontWeight={600}>
                  Purchase
                </Box>
              </Typography>
            </Box>

            <Box sx={{ minWidth: 120 }}>
              <Typography sx={{ fontSize: "0.7rem", lineHeight: 1.5 }}>
                Loan Program{" "}
                <Box component="span" fontWeight={600}>
                  CF30
                </Box>
              </Typography>
              <Typography sx={{ fontSize: "0.7rem", lineHeight: 1.5 }}>
                Loan Rate{" "}
                <Box component="span" fontWeight={600}>
                  4.50%
                </Box>
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Stack>

      {/* LTV + DTI */}
      <Stack sx={{ py: 0.5 }}>
        <Box sx={{ minWidth: 160, px: 1 }}>
          <Typography sx={{ fontSize: "0.7rem", lineHeight: 1.5 }}>
            LTV{" "}
            <Box component="span" fontWeight={600}>
              80%
            </Box>
          </Typography>
          <Typography sx={{ fontSize: "0.7rem", lineHeight: 1.5 }}>
            DTI{" "}
            <Box component="span" fontWeight={600}>
              12.995% | 14.699%
            </Box>
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
}
