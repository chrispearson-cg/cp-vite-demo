import type { HealthCheckResult } from '../../hooks/useHealth';
import useHealth from '../../hooks/useHealth';
import StatusCheck from './StatusCheck';

const StatusList = () => {
  const status = useHealth();

  return (
    <>
      {status.map((check: HealthCheckResult, index: number) => (
        <StatusCheck key={index} {...check} />
      ))}
    </>
  );
};
export default StatusList;
