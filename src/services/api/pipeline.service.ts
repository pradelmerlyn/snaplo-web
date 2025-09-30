import api from "@/services/http/createClient";
import {
  PipelineRequest,
  PipelineResponse,
} from "@/services/types/pipelines.types";

const DEFAULT_REQUEST: PipelineRequest = {
  milestones: [],
  filter: "",
  loanNumber: "",
  lockExpiration: "",
  pageSize: 20,
  pageIndex: 0,
};

export async function getPipeline(
  payload?: Partial<PipelineRequest>
): Promise<PipelineResponse> {
  const body: PipelineRequest = { ...DEFAULT_REQUEST, ...(payload || {}) };
  const { data } = await api.post<PipelineResponse>("/pipeline", body);
  return data;
}
