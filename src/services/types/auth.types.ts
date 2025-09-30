export type LoginCredentials = {
  userName: string;
  password: string;
  impersonateUser?: string | null;
};

export type AuthTokenResponse = {
  accessToken: string;
  tokenType?: string;         
  expiresIn?: number;         
  refreshToken?: string | null;
  scope?: string | null;
  [key: string]: unknown;
};

export type User = {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  roles?: string[];          
  avatarUrl?: string | null;
  [key: string]: unknown;
};

export type AuthSession = {
  token: string;              
  tokenType: string;
  expiresAt?: number;
  user?: User | null;
};
