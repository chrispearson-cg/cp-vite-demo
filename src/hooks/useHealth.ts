export type HealthStatus = 'Healthy' | 'Unhealthy' | 'Degraded';

export interface HealthEntry {
  data: Record<string, unknown>;
  duration: string;
  status: HealthStatus;
  tags: string[];
}

export interface HealthCheck {
  status: HealthStatus;
  totalDuration: string;
}
export interface HealthCheckResult {
  name: string;
  data: HealthCheck;
}

const statuses: HealthCheckResult[] = [
  {
    name: 'Health Check 1',
    data: {
      status: 'Healthy',
      totalDuration: '00:00:01.0293717',
    },
  },
  {
    name: 'Health Check 2',
    data: {
      status: 'Degraded',
      totalDuration: '00:00:02.1234567',
    },
  },
  {
    name: 'Health Check 3',
    data: {
      status: 'Unhealthy',
      totalDuration: '00:00:03.7654321',
    },
  }
];

const useHealth = (): HealthCheckResult[] => {
  return statuses;
};

export default useHealth;
