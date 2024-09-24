import { Box, Flex, Select, Text, TextInput, Title } from "@mantine/core";
import { useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { TASK_PRIORITY, TASK_STATUS } from "../../../helpers";
import { useAuth } from "../../../hooks/useAuth";
import { useTasksByUserId } from "../../../hooks/useTasksByUserId";
import { TaskListItem } from "../../molecule/TaskListItem";
import classes from "./OpenTasksPanel.module.scss";

export const OpenTasksPanel = () => {
  const auth = useAuth();

  const { data: tasks } = useTasksByUserId(auth.user?.id ?? "");

  // State for search, status, and priority filtering
  const [searchInput, setSearchInput] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string | null>("All");
  const [selectedPriority, setSelectedPriority] = useState<string | null>(
    "All",
  );

  // Task status & priority options
  const statusOptions = [
    { value: "All", label: "All" },
    { value: TASK_STATUS.NOT_STARTED, label: "Not started" },
    { value: TASK_STATUS.IN_PROGRESS, label: "In progress" },
    { value: TASK_STATUS.COMPLETED, label: "Completed" },
  ];

  const priorityOptions = [
    { value: "All", label: "All" },
    { value: String(TASK_PRIORITY.LOW), label: "Low" },
    { value: String(TASK_PRIORITY.MEDIUM), label: "Medium" },
    { value: String(TASK_PRIORITY.HIGH), label: "High" },
  ];

  // Filters tasks based on searchInput, selectedStatus and/or selectedPriority, else returns all tasks
  const filteredTasks = useMemo(() => {
    return tasks?.filter((task) => {
      const matchesSearch = task.title
        .toLowerCase()
        .includes(searchInput.toLowerCase());

      const matchesStatus =
        selectedStatus === "All" || task.status === selectedStatus;

      const matchesPriority =
        selectedPriority === "All" ||
        task.priority === Number(selectedPriority);

      return matchesSearch && matchesStatus && matchesPriority;
    });
  }, [searchInput, selectedStatus, selectedPriority, tasks]);

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
            data={statusOptions}
            value={selectedStatus}
            onChange={setSelectedStatus}
            defaultValue={"All"}
          />
          <Select
            label={"Task priority"}
            placeholder="All"
            data={priorityOptions}
            value={selectedPriority}
            onChange={setSelectedPriority}
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
