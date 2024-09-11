import {
  ActionIcon,
  Button,
  Flex,
  Modal,
  Select,
  TextInput,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { getTaskPriorityNbr, getTaskStatusEnum } from "../../../helpers";
import { useAuth } from "../../../hooks/useAuth";
import { useCreateTask } from "../../../hooks/useCreateTask";
import type { CreateTaskData } from "../../../types/task.types";
import styles from "./TaskCreationModal.module.scss";

export const TaskCreationModal = () => {
  const { user } = useAuth();

  const [opened, { open, close }] = useDisclosure(false);

  const createTaskMutation = useCreateTask();
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [taskStatus, setTaskStatus] = useState<string | null>("");
  const [taskPriority, setTaskPriority] = useState<string | null>("");

  const handleTaskCreation = async () => {
    if (!user) return;

    // TODO: clean this up!
    if (!taskStatus || !taskPriority) return;

    const task: CreateTaskData = {
      title: taskTitle,
      description: taskDescription,
      status: getTaskStatusEnum(taskStatus),
      priority: getTaskPriorityNbr(taskPriority),
      createdById: user.id,
    };

    createTaskMutation.mutate({ taskData: task });

    // Close the modal
    close();
  };

  return (
    <>
      <Modal opened={opened} onClose={close} title={"Create new task"}>
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
            value={taskStatus}
            onChange={setTaskStatus}
          />
          <Select
            label={"Task priority"}
            placeholder="Choose priority"
            data={["Low", "Medium", "High"]}
            value={taskPriority}
            onChange={setTaskPriority}
          />
        </Flex>

        <Button onClick={handleTaskCreation}>Create task</Button>
      </Modal>

      <div className={styles.actionBtnContainer}>
        <ActionIcon size={64} radius={"xl"} onClick={open}>
          <FaPlus size={38} />
        </ActionIcon>
      </div>
    </>
  );
};
