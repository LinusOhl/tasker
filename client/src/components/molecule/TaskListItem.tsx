import {
  Avatar,
  Box,
  Flex,
  Text,
  ThemeIcon,
  Title,
  Tooltip,
} from "@mantine/core";
import { useNavigate } from "@tanstack/react-router";
import { FaChevronRight } from "react-icons/fa6";
import { Priority } from "../atom/Priority/Priority";
import { Status } from "../atom/Status/Status";

interface TaskListItemProps {
  id: string;
  title: string;
  description: string;
  status: string;
  assignee: string | string[];
  priority: string;
}

export const TaskListItem = ({
  id,
  title,
  description,
  status,
  assignee,
  priority,
}: TaskListItemProps) => {
  const navigate = useNavigate();

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

        <ThemeIcon
          variant="transparent"
          c={"black"}
          onClick={() => navigate({ to: `/tasks/${id}` })}
        >
          <FaChevronRight />
        </ThemeIcon>
      </Flex>

      {/* Footer */}
      <Flex gap={"xs"} justify={"space-between"} align={"center"}>
        <Status status={status} />

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
