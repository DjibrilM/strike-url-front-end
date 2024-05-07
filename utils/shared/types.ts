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

  strikes: Strike[];

  strikesCount: number;

  title: string;
};

export type Strike = {
  id: string;
  status: string;
  country: string;
  countryCode: string;
  region: string;
  regionName: string;
  city: string;
  zip: string;
  lat: number;
  lon: number;
  timezone: string;
  url: Url;
  created_at:Date;
  updated_at: Date;
};
