interface AppConfig {
  API_URL: string;
}

const config: AppConfig = {
  API_URL: window.__APP_CONFIG__?.API_URL ?? ""
};

export default config;