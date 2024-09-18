import { Button, Flex, Modal, Select, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { getTaskStatusEnum } from "../../helpers";
import { useAuth } from "../../hooks/useAuth";
import { useUpdateTask } from "../../hooks/useUpdateTask";
import type { Task, UpdateTaskData } from "../../types/task.types";

interface TaskUpdateModalProps {
  task: Task;
}

export const TaskUpdateModal = ({ task }: TaskUpdateModalProps) => {
  const { user } = useAuth();

  const [opened, { open, close }] = useDisclosure(false);

  const updateTaskMutation = useUpdateTask();
  const [taskTitle, setTaskTitle] = useState<string>(task.title);
  const [taskDescription, setTaskDescription] = useState<string>(
    task.description ?? "",
  );
  const [taskStatus, setTaskStatus] = useState<string | null>(task.status);
  const [taskPriority, setTaskPriority] = useState<number | null>(
    task.priority,
  );

  console.log("taskTitle:", taskTitle);
  console.log("taskDescription:", taskDescription);
  console.log("taskStatus:", taskStatus);
  console.log("taskPriority:", taskPriority);

  const getCorrectTaskStatus = () => {
    switch (task.status) {
      case "NOT_STARTED":
        return "Not started";
      case "IN_PROGRESS":
        return "In progress";
      case "COMPLETED":
        return "Completed";
    }
  };

  const getCorrectTaskPriority = () => {
    switch (task.priority) {
      case 0:
        return "Low";
      case 1:
        return "Medium";
      case 2:
        return "High";
    }
  };

  const convertTaskPriority = (value: string) => {
    switch (value) {
      case "Low":
        return 0;
      case "Medium":
        return 1;
      case "High":
        return 2;
      default:
        return 0;
    }
  };

  const handleUpdateTask = async () => {
    if (!user) return;

    // TODO: clean this up!
    // if (!taskStatus || !taskPriority) return;

    const updatedTask: UpdateTaskData = {
      title: taskTitle,
      description: taskDescription,
      status: getTaskStatusEnum(taskStatus ?? ""),
      priority: taskPriority ?? 0,
    };

    console.log("updating task:", updatedTask);

    updateTaskMutation.mutate({ taskId: task.id, taskData: updatedTask });

    close();
  };

  return (
    <>
      <Modal opened={opened} onClose={close} title="Edit task">
        <TextInput
          label="Task title"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <TextInput
          label="Task description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />

        <Flex gap={"xs"}>
          <Select
            label={"Task status"}
            placeholder="Choose status"
            data={["Not started", "In progress", "Completed"]}
            value={getCorrectTaskStatus()}
            onChange={setTaskStatus}
          />
          <Select
            label={"Task priority"}
            placeholder="Choose priority"
            data={["Low", "Medium", "High"]}
            value={getCorrectTaskPriority()}
            onChange={(e) => setTaskPriority(convertTaskPriority(e ?? ""))}
          />
        </Flex>

        <Button onClick={handleUpdateTask}>Update task</Button>
      </Modal>

      <Button size="lg" variant="outline" onClick={open} fullWidth>
        Edit task
      </Button>
    </>
  );
};
