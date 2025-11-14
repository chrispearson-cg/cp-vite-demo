import StatusCheck from "../components/HealthCheck/StatusCheck";
import useHealth, { type HealthCheckResult } from "../hooks/useHealth";


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
