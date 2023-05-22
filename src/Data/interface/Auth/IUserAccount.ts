export interface IUserAccount {
  firstname: string;
  lastname: string;
  email: string;
}

export interface IUserSubscription {
  plan: string;
  end: string;
  active: boolean;
}

export interface IUserRequests {
  current: number;
  limit_day: number;
}
