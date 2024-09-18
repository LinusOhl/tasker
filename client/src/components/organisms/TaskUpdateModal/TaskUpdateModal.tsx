import { Button, Flex, Modal, Select, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { TASK_PRIORITY, TASK_STATUS } from "../../../helpers";
import { useAuth } from "../../../hooks/useAuth";
import { useUpdateTask } from "../../../hooks/useUpdateTask";
import type { Task, UpdateTaskData } from "../../../types/task.types";
import {
  TASK_PRIORITY_LABELS,
  TASK_STATUS_LABELS,
} from "./TaskUpdateModal.helpers";

interface TaskUpdateModalProps {
  task: Task;
}

export const TaskUpdateModal = ({ task }: TaskUpdateModalProps) => {
  const { user } = useAuth();
  const [opened, { open, close }] = useDisclosure(false);
  const updateTaskMutation = useUpdateTask();

  const [taskData, setTaskData] = useState<UpdateTaskData>({
    title: task.title,
    description: task.description ?? "",
    status: task.status as TASK_STATUS,
    priority: task.priority as TASK_PRIORITY,
  });

  const handleInputChange = <K extends keyof UpdateTaskData>(
    field: K,
    value: UpdateTaskData[K],
  ) => {
    setTaskData((prev) => ({ ...prev, [field]: value }));
  };

  const handleUpdateTask = async () => {
    if (!user) return;

    const updatedTask: UpdateTaskData = {
      title: taskData.title,
      description: taskData.description,
      status: taskData.status,
      priority: taskData.priority,
    };

    updateTaskMutation.mutate({ taskId: task.id, taskData: updatedTask });
    close();
  };

  return (
    <>
      <Modal opened={opened} onClose={close} title="Edit task">
        <TextInput
          label="Task title"
          value={taskData.title}
          onChange={(e) => handleInputChange("title", e.target.value)}
        />
        <TextInput
          label="Task description"
          value={taskData.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
        />

        <Flex gap={"xs"}>
          <Select
            label={"Task status"}
            placeholder="Choose status"
            data={Object.values(TASK_STATUS_LABELS)}
            value={
              TASK_STATUS_LABELS[taskData.status ?? TASK_STATUS.NOT_STARTED]
            }
            onChange={(value) => {
              const status = Object.keys(TASK_STATUS_LABELS).find(
                (key) => TASK_STATUS_LABELS[key as TASK_STATUS] === value,
              );
              if (status) handleInputChange("status", status as TASK_STATUS);
            }}
          />
          <Select
            label={"Task priority"}
            placeholder="Choose priority"
            data={Object.values(TASK_PRIORITY_LABELS)}
            value={TASK_PRIORITY_LABELS[taskData.priority ?? TASK_PRIORITY.LOW]}
            onChange={(value) => {
              const priority = Object.keys(TASK_PRIORITY).find(
                (key) =>
                  TASK_PRIORITY_LABELS[Number(key) as TASK_PRIORITY] === value,
              );
              if (priority)
                handleInputChange(
                  "priority",
                  Number(priority) as TASK_PRIORITY,
                );
            }}
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
