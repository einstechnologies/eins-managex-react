export type hidLoginRequest = {
  login: string;
  password: string;
};

export type hidLoginResponse = {
  session: string;
  ipaddress: string;
};
