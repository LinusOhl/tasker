import { Badge } from "@mantine/core";
import { getStatusColor, getStatusText } from "./Status.helper";

interface StatusProps {
  status: string;
}

export const Status = ({ status }: StatusProps) => {
  return (
    <Badge size="md" variant="light" color={getStatusColor(status)}>
      {getStatusText(status)}
    </Badge>
  );
};
