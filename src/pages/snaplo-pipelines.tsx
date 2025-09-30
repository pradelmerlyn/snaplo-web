"use client";

import { useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TablePagination,
} from "@mui/material";
import { getPipeline } from "../services/api/pipeline.service";
import { PipelineItem } from "../services/types/pipelines.types";

export default function PipelinePage() {
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState<PipelineItem[]>([]);
  const [total, setTotal] = useState(0);

  const [page, setPage] = useState(0); 
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await getPipeline({ pageIndex: page, pageSize: rowsPerPage });
        setRows(res.items || []);
        setTotal(res.totalCount || 0);
      } catch (err) {
        console.error("Pipeline fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page, rowsPerPage]);

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  return (
    <Box p={3}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Pipeline
      </Typography>

      {loading ? (
        <Box display="flex" justifyContent="center" py={5}>
          <CircularProgress />
        </Box>
      ) : (
        <Paper>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Loan Number</TableCell>
                  <TableCell>Borrower Name</TableCell>
                  <TableCell>Milestone</TableCell>
                  <TableCell>Lock Exp Date</TableCell>
                  <TableCell>Source</TableCell>
                  <TableCell align="right">Loan Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.loanGuid} hover>
                    <TableCell>{row.loanNumber}</TableCell>
                    <TableCell>{row.clientName}</TableCell>
                    <TableCell>{row.milestone}</TableCell>
                    <TableCell>
                      {row.lockExpirationDate
                        ? new Date(row.lockExpirationDate).toLocaleDateString()
                        : "-"}
                    </TableCell>
                    <TableCell>{row.source}</TableCell>
                    <TableCell align="right">
                      {row.loanAmount
                        ? row.loanAmount.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })
                        : "-"}
                    </TableCell>
                  </TableRow>
                ))}
                {!rows.length && (
                  <TableRow>
                    <TableCell colSpan={6} align="center">
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
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[5, 10, 20, 50]}
          />
        </Paper>
      )}
    </Box>
  );
}
