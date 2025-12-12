import StatusCheck from '../components/HealthCheck/StatusCheck';
import useHealth, { type HealthCheckResult } from '../hooks/useHealth';
import PageTitle from '../components/PageTitle';

const StatusList = () => {
  const status = useHealth();

  return (
    <>
      <PageTitle title="System Health Status" />
      {status.map((check: HealthCheckResult, index: number) => (
        <StatusCheck key={index} {...check} />
      ))}
    </>
  );
};
export default StatusList;
