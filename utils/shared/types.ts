export type User = {
  created_at: string;
  email: string;
  id: string;
  profile: string;
  updated_at: string;
  isLoggedin?: boolean;
};

export type Url = {
  id: string;

  description: string;

  shortUrl: string;

  url: string;

  owner: string;

  urlIdentifier: string;

  strikes: string[];

  strikesCount: number;

  title: string;
};
