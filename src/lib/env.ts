const getAppUrl = (): string => {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL;
  if (!appUrl) {
    throw new Error('NEXT_PUBLIC_APP_URL environment variable is not set');
  }
  return appUrl;
};

export const env = {
  APP_URL: getAppUrl(),
};
