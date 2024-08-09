import { Box, Flex, Select, TextInput, Title } from "@mantine/core";
import { FaSearch } from "react-icons/fa";
import classes from "./OpenTasksPanel.module.scss";
import { TaskListItem } from "./TaskListItem/TaskListItem";

export const OpenTasksPanel = () => {
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
          />
          <Select
            label={"Task priority"}
            placeholder="All"
            data={["All", "Low", "Medium", "High"]}
          />
        </Flex>
      </Box>

      <Flex direction={"column"} className={classes.tasksContainer}>
        <TaskListItem
          title="Task title 1"
          description="Task description 1"
          status="In progress"
          assignee="JD"
          priority="High"
        />
        <TaskListItem
          title="Task title 2"
          description="Task description 2"
          status="In progress"
          assignee="MK"
          priority="Low"
        />
        <TaskListItem
          title="Task title 3"
          description="Task description 3"
          status="Not started"
          assignee="JD"
          priority="Low"
        />
        <TaskListItem
          title="Task title 4"
          description="Task description 4"
          status="In progress"
          assignee="SL"
          priority="Medium"
        />
        <TaskListItem
          title="Task title 5"
          description="Task description 5"
          status="Completed"
          assignee={["AC", "DC"]}
          priority="High"
        />
        <TaskListItem
          title="Task title 6"
          description="Task description 6"
          status="Completed"
          assignee="AC"
          priority="Low"
        />
      </Flex>
    </div>
  );
};
