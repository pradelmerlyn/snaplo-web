export interface PipelineRequest {
  milestones: string[];
  filter: string;
  loanNumber: string;
  lockExpiration: string;
  pageSize: number;
  pageIndex: number;
}

export interface PipelineItem {
  loanGuid: string;
  milestone: string;
  loanAmount?: number;
  taskCount: number;
  source: string;
  loanNumber: string;
  clientName: string;
  lockExpirationDate?: string;
}

export interface PipelineResponse {
  totalCount: number;
  items: PipelineItem[];
}
