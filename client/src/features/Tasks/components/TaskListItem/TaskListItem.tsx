import {
  Avatar,
  Badge,
  Box,
  Flex,
  Text,
  ThemeIcon,
  Title,
  Tooltip,
} from "@mantine/core";
import { FaChevronRight } from "react-icons/fa6";
import { Priority } from "../Priority/Priority";
import { getStatusColor } from "./TaskListItem.helper";

interface TaskListItemProps {
  title: string;
  description: string;
  status: string;
  assignee: string | string[];
  priority: string;
}

export const TaskListItem = ({
  title,
  description,
  status,
  assignee,
  priority,
}: TaskListItemProps) => {
  return (
    <Flex direction={"column"} p={"xs"}>
      {/* Header */}
      <Box ml={"auto"}>
        <Priority priority={priority} />
      </Box>

      {/* Body */}
      <Flex
        direction={"row"}
        justify={"space-between"}
        align={"center"}
        mt={"xs"}
      >
        <Flex direction={"column"} mb={"xs"}>
          <Title order={3}>{title}</Title>
          <Text>{description}</Text>
        </Flex>

        <ThemeIcon variant="transparent" c={"black"}>
          <FaChevronRight />
        </ThemeIcon>
      </Flex>

      {/* Footer */}
      <Flex gap={"xs"} justify={"space-between"} align={"center"}>
        <Badge size="md" variant="light" color={getStatusColor(status)}>
          {status}
        </Badge>

        {Array.isArray(assignee) ? (
          <Tooltip.Group>
            <Avatar.Group>
              {assignee.map((name) => (
                <Tooltip
                  key={name}
                  label={name}
                  events={{
                    hover: true,
                    focus: true,
                    touch: true,
                  }}
                >
                  <Avatar color="cyan" size={"sm"}>
                    {name}
                  </Avatar>
                </Tooltip>
              ))}
            </Avatar.Group>
          </Tooltip.Group>
        ) : (
          <Tooltip
            label={assignee}
            events={{
              hover: true,
              focus: true,
              touch: true,
            }}
          >
            <Avatar color="cyan" size={"sm"}>
              {assignee}
            </Avatar>
          </Tooltip>
        )}
      </Flex>
    </Flex>
  );
};
