const mockAlerts = ((d: Omit<Alert, 'id'>[]) => d.map((a, idx) => ({ id: idx + 1, ...a })))([
  {
    message: 'Doplnit formular',
    userId: 'oR2T4ZPJLZXJWnePKht5',
  },
  {
    message: 'Pripravit se na lecebny proces',
    userId: 'oR2T4ZPJLZXJWnePKht5',
  },
]);

type Alert = {
  id: number;
  message: string;
  userId: string;
};

export async function getAlertsByUser(opts: { userId: string }) {
  // TODO: Replace with DB call
  const alerts = mockAlerts.filter((a) => a.userId === opts.userId);
  return alerts;
}

export async function getAlertsCountByUser(opts: { userId: string }) {
  // TODO: Replace with DB call
  const alerts = mockAlerts.filter((a) => a.userId === opts.userId);
  return alerts.length;
}
