import type { HealthStatus } from '../../hooks/useHealth';
import DangerIcon from '@mui/icons-material/Dangerous';
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import styles from './StatusIcon.module.scss';

interface StatusIconProps {
  healthStatus: HealthStatus;
}

const StatusIcon = ({ healthStatus }: StatusIconProps) => {
  if (healthStatus === 'Healthy') {
    return <CheckCircleIcon className={styles.healthy} />;
  } else if (healthStatus === 'Degraded') {
    return <WarningIcon className={styles.degraded} />;
  } else {
    return <DangerIcon className={styles.unhealthy} />;
  }
};

export default StatusIcon;
