import { Box, Flex, Select, Text, TextInput, Title } from "@mantine/core";
import { useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useAuth } from "../../../hooks/useAuth";
import { useTasksByUserId } from "../../../hooks/useTasksByUserId";
import { TaskListItem } from "../../molecule/TaskListItem";
import classes from "./OpenTasksPanel.module.scss";

export const OpenTasksPanel = () => {
  const auth = useAuth();

  const { data: tasks } = useTasksByUserId(auth.user?.id ?? "");

  // State for search filtering
  const [searchInput, setSearchInput] = useState("");

  // Returns all tasks if no searchInput, otherwise the filtered tasks.
  const filteredTasks = useMemo(() => {
    if (!searchInput) return tasks;

    return tasks?.filter((task) =>
      task.title.toLowerCase().includes(searchInput.toLowerCase()),
    );
  }, [searchInput, tasks]);

  return (
    <div>
      <Box px={"xs"} mt={"md"}>
        <Title order={2}>Open tasks</Title>

        <TextInput
          placeholder="Search"
          leftSection={<FaSearch />}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />

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
        {filteredTasks?.length ? (
          filteredTasks.map((task) => (
            <TaskListItem
              key={task.id}
              id={task.id}
              title={task.title}
              description={task.description ?? ""}
              status={task.status}
              assignee={task.createdById.slice(0, 2)}
              priority={String(task.priority)}
            />
          ))
        ) : (
          <Text>No tasks found.</Text>
        )}
      </Flex>
    </div>
  );
};
