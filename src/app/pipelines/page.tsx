"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  Box,
  CircularProgress,
  InputAdornment,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Paper,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { getPipeline } from "@/services/api/pipeline.service";
import { PipelineItem } from "@/services/types/pipelines.types";
import PipelineFilterModal, { PipelineFilters } from "@/component/pipeline/pipelineFilterModal";
import PipelineTable from "@/component/pipeline/pipelineTable";
import { SearchBox } from "@/theme/AppTheme";

const PageRoot = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  minHeight: "100vh",

  "& .MuiPaper-root": {
    borderRadius: 12,
    boxShadow: "0 2px 10px rgba(16,24,40,.08)",
    border: `1px solid ${alpha(theme.palette.common.black, 0.06)}`,
  },

  "& .MuiTableHead-root": {
    backgroundColor: theme.palette.grey[200],
  },
  "& .MuiTableHead-root .MuiTableCell-head": {
    color: theme.palette.grey[800],
    fontWeight: 600,
  },

  "& .MuiTableBody-root .MuiTableRow-root .MuiTableCell-root:first-of-type": {
    color: theme.palette.primary.dark,
    fontWeight: 600,
  },

  "& .pipelines-toggle-wrap": {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
    borderRadius: 10,
    border: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(0.5),
    backgroundColor: theme.palette.grey[100],
  },


  "& .pipelines-toggle-group": {
    borderRadius: 4,
     backgroundColor: theme.palette.grey[100],
  },
  "& .pipelines-toggle-group .MuiToggleButton-root": {
    textTransform: "none",
    paddingInline: theme.spacing(3),
    paddingBlock: theme.spacing(1),
    border: "1px solid",
    borderColor: theme.palette.divider,
    fontSize: "1rem",
     backgroundColor: theme.palette.grey[100],
  },
  "& .pipelines-toggle-group .MuiToggleButton-root.Mui-selected": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  "& .pipelines-toggle-group .MuiToggleButton-root.Mui-selected:hover": {
    backgroundColor: theme.palette.primary.dark,
  },

  "& .pipelines-search.MuiTextField-root": {
    borderRadius: 10,
    fontSize: "1rem",
  },
  "& .pipelines-search .MuiOutlinedInput-root": {
    borderRadius: 10,
  },
  "& .pipelines-search .MuiOutlinedInput-root input": {
    fontSize: "1rem",
  },

  "& .pipelines-filter-btn.MuiButton-root": {
    borderRadius: 10,
    fontSize: "1rem",
    textTransform: "none",
    paddingInline: theme.spacing(2),
    paddingBlock: theme.spacing(1),
  },
  "& .pipelines-filter-btn .MuiButton-startIcon": {
    marginRight: theme.spacing(1),
    "& > *:first-of-type": { fontSize: "1.125rem" },
  },
}));

export default function AppsPipelinesPage() {
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState<PipelineItem[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [loanNumberInput, setLoanNumberInput] = useState("");
  const [loanNumber, setLoanNumber] = useState("");

  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filters, setFilters] = useState<PipelineFilters>({ milestones: [], lockExpiration: "" });

  const [view, setView] = useState<"pipeline" | "prospect">("pipeline");

  const handleChange = (_: React.MouseEvent<HTMLElement>, newView: "pipeline" | "prospect" | null) => {
    if (newView !== null) setView(newView);
  };

  const queryKey = useMemo(() => {
    const sortedMilestones = [...(filters.milestones || [])].sort();
    return JSON.stringify({
      pageIndex: page,
      pageSize: rowsPerPage,
      loanNumber: loanNumber.trim(),
      milestones: sortedMilestones,
      lockExpiration: filters.lockExpiration || "",
    });
  }, [page, rowsPerPage, loanNumber, filters.milestones, filters.lockExpiration]);

  const lastQueryKeyRef = useRef<string>("");
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (lastQueryKeyRef.current === queryKey) return;
    lastQueryKeyRef.current = queryKey;

    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        const params = JSON.parse(queryKey);
        const res = await getPipeline(params);
        if (!mounted) return;
        setRows(res.items || []);
        setTotal(res.totalCount || 0);
      } catch {
        if (mounted) {
          setRows([]);
          setTotal(0);
        }
      } finally {
        mounted && setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, [queryKey]);

  const handleChangePage = (_: unknown, newPage: number) => setPage(newPage);
  const handleChangeRowsPerPage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  const applySearch = () => {
    setPage(0);
    setLoanNumber(loanNumberInput);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") applySearch();
  };

  const handleKeyUp = () => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      applySearch();
    }, 1500);
  };

  const now = useMemo(() => new Date(), []);
  const getDateTone = (iso?: string): "default" | "warning" | "error" => {
    if (!iso) return "default";
    const d = new Date(iso);
    const days = Math.ceil((d.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    if (days < 0) return "error";
    if (days <= 7) return "warning";
    return "default";
  };

  const formatCurrency = (n?: number) =>
    typeof n === "number" ? n.toLocaleString("en-US", { style: "currency", currency: "USD" }) : "—";

  const formatDate = (iso?: string) => (iso ? new Date(iso).toLocaleDateString() : "—");

  return (
    <PageRoot p={3}>
      <Paper>
        <Box mb={2} px={2} pt={2} display="flex" alignItems="center" justifyContent="space-between">
          <Box className="pipelines-toggle-wrap">
            <ToggleButtonGroup
              className="pipelines-toggle-group"
              value={view}
              exclusive
              onChange={handleChange}
            >
              <ToggleButton value="pipeline">Pipeline</ToggleButton>
              <ToggleButton value="prospect">Prospect</ToggleButton>
            </ToggleButtonGroup>
          </Box>

          <Box display="flex" alignItems="center" gap={1.5}>
            <SearchBox
              className="pipelines-search"
              placeholder="Search Loan Number…"
              value={loanNumberInput}
              onChange={(e) => setLoanNumberInput(e.target.value)}
              onKeyDown={handleKeyDown}
              onKeyUp={handleKeyUp}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon fontSize="small" />
                  </InputAdornment>
                ),
              }}
            />

            <Button
              className="pipelines-filter-btn"
              variant="outlined"
              color="primary"
              onClick={() => setFiltersOpen(true)}
              startIcon={
                <img src="/images/icons/filter_outlined_icon.svg" alt="Filter" style={{ width: 20, height: 20 }} />
              }
              sx={{
                color: "primary.main",
                borderColor: "primary.main",
                "&:hover": { borderColor: "primary.dark", color: "primary.dark" },
              }}
            >
              Filter
            </Button>
          </Box>
        </Box>

        <PipelineFilterModal
          open={filtersOpen}
          initial={filters}
          onClose={() => setFiltersOpen(false)}
          onApply={(f) => {
            setFilters(f);
            setFiltersOpen(false);
            setPage(0);
          }}
        />

        {loading ? (
          <Box display="flex" justifyContent="center" py={5}>
            <CircularProgress />
          </Box>
        ) : (
          <PipelineTable
            rows={rows}
            total={total}
            page={page}
            rowsPerPage={rowsPerPage}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            getDateTone={getDateTone}
            formatCurrency={formatCurrency}
            formatDate={formatDate}
          />
        )}
      </Paper>
    </PageRoot>
  );
}
