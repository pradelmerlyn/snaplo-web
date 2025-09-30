import api from "@/services/http/createClient";
import { LookupItem } from "@/services/types/lookup.types";

export async function getMilestoneStatuses(): Promise<LookupItem[]> {
  const { data } = await api.get<LookupItem[]>(
    "/lookup/mileStones",
  );
  return data;
}

export async function getLockExpirations(): Promise<LookupItem[]> {
  const { data } = await api.get<LookupItem[]>(
    "/lookup/lockExpiration"
  );
  return data;
}
