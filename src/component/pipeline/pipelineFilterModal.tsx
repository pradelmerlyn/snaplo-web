"use client";

import { useEffect, useState } from "react";
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  FormGroup, FormControlLabel, Checkbox,
  FormControl, FormLabel, RadioGroup, Radio,
  Box, Button, Stack,
  styled
} from "@mui/material";
import { getMilestoneStatuses, getLockExpirations } from "@/services/api/lookup.service";
import type { LookupItem } from "@/services/types/lookup.types";

export type PipelineFilters = {
  milestones: string[];     
  lockExpiration: string;  
};

type Props = {
  open: boolean;
  initial?: PipelineFilters;
  onClose: () => void;
  onApply: (filters: PipelineFilters) => void;
};

export default function PipelineFilterModal({ open, initial, onClose, onApply }: Props) {
  const [milestones, setMilestones] = useState<LookupItem[]>([]);
  const [locks, setLocks] = useState<LookupItem[]>([]);
  const [selectedMilestones, setSelectedMilestones] = useState<string[]>(initial?.milestones ?? []);
  const [selectedLock, setSelectedLock] = useState<string>(initial?.lockExpiration ?? "");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const [ms, ls] = await Promise.all([getMilestoneStatuses(), getLockExpirations()]);
      if (!cancelled) {
        setMilestones(ms);
        setLocks(ls);
        if (initial) {
          setSelectedMilestones(initial.milestones ?? []);
          setSelectedLock(initial.lockExpiration ?? "");
        }
      }
    })();
    return () => { cancelled = true; };
  }, [open]); 

  const toggleMilestone = (key: string) => {
    setSelectedMilestones((prev) =>
      prev.includes(key) ? prev.filter((m) => m !== key) : [...prev, key]
    );
  };

  const CheckboxGroup = styled(Box)(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    gap: theme.spacing(0.5),
    "& .MuiFormControlLabel-root": {
      margin: 0,
      marginRight: theme.spacing(1),
      "& .MuiCheckbox-root": {
        padding: theme.spacing(0.25),
        "& .MuiSvgIcon-root": {
          fontSize: "16px",
        },
      },
      "& .MuiTypography-root": {
        fontSize: "11px",
      },
    },
  }));

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Filters</DialogTitle>
      <DialogContent dividers>
        <Stack spacing={3}>
          <Box>
            <FormLabel sx={{ mb: 1, display: "block" }}>Milestone Status</FormLabel>
            <FormGroup>
              {milestones.map((m) => (
                <FormControlLabel
                  key={m.id}
                  control={
                    <Checkbox
                      checked={selectedMilestones.includes(m.key)}
                      onChange={() => toggleMilestone(m.key)}
                    />
                  }
                  label={m.value}
                />
              ))}
            </FormGroup>
          </Box>

          <Box>
            <FormControl>
              <FormLabel sx={{ mb: 1 }}>Lock Expiration</FormLabel>
              <RadioGroup
                value={selectedLock}
                onChange={(e) => setSelectedLock(e.target.value)}
              >
                {locks.map((l) => (
                  <FormControlLabel
                    key={l.id}
                    value={l.key}
                    control={<Radio />}
                    label={l.value}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Box>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => {
          setSelectedMilestones([]);
          setSelectedLock("");
        }}>Clear</Button>
        <Button variant="contained" onClick={() => onApply({
          milestones: selectedMilestones,
          lockExpiration: selectedLock
        })}>
          Apply
        </Button>
      </DialogActions>
    </Dialog>
  );
}
