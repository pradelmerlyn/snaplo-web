"use client";

import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  Typography,
  IconButton,
  ThemeProvider,
  createTheme,
  useTheme,
} from "@mui/material";
import { Pill } from "@/theme/AppTheme";
import type { PipelineItem } from "@/services/types/pipelines.types";

const flatTableTheme = (outerTheme: any) =>
  createTheme({
    ...outerTheme,
    components: {
      MuiTableContainer: {
        styleOverrides: {
          root: {
            boxShadow: "none",
            border: "none",
          },
        },
      },
      MuiTableHead: {
        styleOverrides: {
          root: {
            backgroundColor: outerTheme.palette.grey[100],
            "& .MuiTableCell-root": {
              fontWeight: 600,
              color: outerTheme.palette.text.primary,
            },
          },
        },
      },
    },
  });

export default function PipelineTable({
  rows,
  total,
  page,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
  getDateTone,
  formatCurrency,
  formatDate,
}: {
  rows: PipelineItem[];
  total: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (e: unknown, newPage: number) => void;
  onRowsPerPageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  getDateTone: (iso?: string) => "default" | "warning" | "error";
  formatCurrency: (n?: number) => string;
  formatDate: (iso?: string) => string;
}) {
  const outerTheme = useTheme();
  const themed = flatTableTheme(outerTheme);

  const getMilestoneTone = (milestone?: string): "default" | "info" | "warning" | "error" => {
    const v = (milestone ?? "").toLowerCase().trim();

    if (v.includes("conditional")) return "warning";
    if (v === "decisioned") return "info";
    if (v.includes("declined") || v.includes("denied") || v.includes("canceled") || v.includes("cancelled")) {
      return "error";
    }
    return "default";
  };

  return (
    <ThemeProvider theme={themed}>
      <TableContainer component={Paper} elevation={0}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Loan Number</TableCell>
              <TableCell>Borrower Name</TableCell>
              <TableCell>Loan Officer</TableCell>
              <TableCell>Milestone</TableCell>
              <TableCell>Lock Exp Date</TableCell>
              <TableCell>Rate</TableCell>
              <TableCell align="left">Loan Amount</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              const dateTone = getDateTone(row.lockExpirationDate);
              const milestoneTone = getMilestoneTone(row.milestone);
              return (
                <TableRow key={row.loanGuid} hover>
                  <TableCell>
                    <Typography variant="body1" align="center">
                      {row.loanNumber}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1">{row.clientName}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1">{""}</Typography>
                  </TableCell>
                  <TableCell>
                    <Pill tone={milestoneTone}>{row.milestone || "—"}</Pill>
                  </TableCell>
                  <TableCell>
                    {row.lockExpirationDate ? (
                      <Pill tone={dateTone}>{formatDate(row.lockExpirationDate)}</Pill>
                    ) : (
                      "—"
                    )}
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1">
                   
                    </Typography>
                  </TableCell>
                  <TableCell align="left">{formatCurrency(row.loanAmount)}</TableCell>
                  <TableCell align="center">
                    <IconButton>
                      <img
                        src="/images/icons/more_outlined_icon.svg"
                        alt="More"
                        style={{ width: 18, height: 18 }}
                      />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
            {!rows.length && (
              <TableRow>
                <TableCell colSpan={8} align="center">
                  No data available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={total}
        page={page}
        onPageChange={onPageChange}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={onRowsPerPageChange}
        rowsPerPageOptions={[5, 10, 20, 50]}
      />
    </ThemeProvider>
  );
}
