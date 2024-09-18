import { Avatar, Box, Button, Center, Flex, Text, Title } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";
import { Priority } from "../components/atom/Priority/Priority";
import { Status } from "../components/atom/Status/Status";
import { TaskUpdateModal } from "../components/organisms/TaskUpdateModal/TaskUpdateModal";
import { TASK_STATUS } from "../helpers";
import { useTaskById } from "../hooks/useTaskById";
import { useUpdateTask } from "../hooks/useUpdateTask";

const TaskView = () => {
  const { taskId } = Route.useParams();

  const { data } = useTaskById(taskId);

  const updateTaskMutation = useUpdateTask();

  const handleCompleteTask = () => {
    updateTaskMutation.mutate({
      taskId: taskId,
      taskData: { status: TASK_STATUS.COMPLETED },
    });
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Box px={"md"}>
      {/* Status and priority */}
      <Center py={"xl"}>
        <Flex direction={"column"} align={"center"} gap={"xs"}>
          <Flex align={"center"} gap={"xl"}>
            <Status status={data.status} />
            <Priority priority={String(data.priority)} />
          </Flex>

          <Text size="sm" c={"dimmed"}>
            {data.createdAt}
          </Text>
        </Flex>
      </Center>

      {/* Title and description */}
      <Box>
        <Title>{data.title}</Title>
        {data.description && <Text size="lg">{data.description}</Text>}
      </Box>

      {/* Avatar */}
      <Flex mt={"lg"} gap={"xs"} align={"center"}>
        <Avatar color="cyan" radius={"sm"} size={"lg"}>
          {data.createdById.slice(0, 2)}
        </Avatar>

        <Flex direction={"column"}>
          <Text size="md" fw={500} c={"dimmed"}>
            Assigned to
          </Text>
          <Text size="xl" fw={500}>
            {data.createdById.slice(0, 8)}
          </Text>
        </Flex>
      </Flex>

      {/* Actions */}
      <Flex direction={"column"} mt={"xl"} gap={"sm"}>
        <TaskUpdateModal task={data} />
        <Button size="lg" onClick={handleCompleteTask} fullWidth>
          Complete task
        </Button>
      </Flex>
    </Box>
  );
};

export const Route = createFileRoute("/tasks/$taskId")({
  component: TaskView,
});
