
export type ErrorShape = {
  code: string;          
  message: string;       
  details?: unknown;     
  status?: number;       
};

export class AppError extends Error {
  code: string;
  details?: unknown;
  status: number;

  constructor({ code, message, details, status = 500 }: ErrorShape) {
    super(message);
    this.code = code;
    this.details = details;
    this.status = status;
  }

  toJSON() {
    return { code: this.code, message: this.message, ...(this.details ? { details: this.details } : {}) };
  }
}

export function errorResponse(err: unknown, fallback: ErrorShape = { code: "INTERNAL", message: "Something went wrong.", status: 500 }) {

  if (err instanceof AppError) {
    return {
      status: err.status,
      body: err.toJSON(),
    };
  }
  if (err instanceof Error) {
    return {
      status: fallback.status ?? 500,
      body: { code: fallback.code, message: err.message || fallback.message },
    };
  }
  return {
    status: fallback.status ?? 500,
    body: { code: fallback.code, message: fallback.message },
  };
}

export function assert(condition: any, shape: ErrorShape): asserts condition {
  if (!condition) throw new AppError(shape);
}

export async function upstreamToAppError(res: Response, defaultCode = "UPSTREAM_ERROR") {
  const text = await res.text().catch(() => "");
  throw new AppError({
    code: defaultCode,
    message: res.status === 401 ? "Invalid credentials." : "Upstream request failed.",
    details: text,
    status: res.status || 502,
  });
}
