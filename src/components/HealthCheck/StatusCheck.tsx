import { Paper } from '@mui/material';
import type { HealthCheckResult } from '../../hooks/useHealth';
import StatusIcon from './StatusIcon';
import TimeIcon from '@mui/icons-material/HourglassEmpty';

const StatusCheck = (status: HealthCheckResult) => {
  return (
    <>
      <Paper elevation={3} style={{ padding: '16px', margin: '16px 0' }}>
        <h2>{status.name}</h2>
        <div>
          <StatusIcon healthStatus={status.data.status} />
          {status.data.status}
        </div>
        <div><TimeIcon fontSize='small'/>Total Duration: {status.data.totalDuration}</div>
      </Paper>
    </>
  );
};

export default StatusCheck;
