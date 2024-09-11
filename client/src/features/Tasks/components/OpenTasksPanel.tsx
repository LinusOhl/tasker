import { Box, Flex, Select, TextInput, Title } from "@mantine/core";
import { FaSearch } from "react-icons/fa";
import { useAuth } from "../../../hooks/useAuth";
import { useTasksByUserId } from "../../../hooks/useTasksByUserId";
import classes from "./OpenTasksPanel.module.scss";
import { TaskListItem } from "./TaskListItem/TaskListItem";

export const OpenTasksPanel = () => {
  const auth = useAuth();

  const { data } = useTasksByUserId(auth.user?.id ?? "");

  return (
    <div>
      <Box px={"xs"} mt={"md"}>
        <Title order={2}>Open tasks</Title>

        <TextInput placeholder="Search" leftSection={<FaSearch />} />

        <Flex gap={"xs"}>
          <Select
            label={"Task status"}
            placeholder="All"
            data={["All", "Not started", "In progress", "Completed"]}
            defaultValue={"All"}
          />
          <Select
            label={"Task priority"}
            placeholder="All"
            data={["All", "Low", "Medium", "High"]}
            defaultValue={"All"}
          />
        </Flex>
      </Box>

      <Flex direction={"column"} className={classes.tasksContainer}>
        {data?.map((task) => (
          <TaskListItem
            key={task.id}
            title={task.title}
            description={task.description ?? ""}
            status={task.status}
            assignee={task.createdById.slice(0, 2)}
            priority={String(task.priority)}
          />
        ))}
      </Flex>
    </div>
  );
};
