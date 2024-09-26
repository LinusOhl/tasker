import { Tabs } from "@mantine/core";
import { useState } from "react";
import { CompletedTasksPanel } from "../organisms/CompletedTasksPanel";
import { OpenTasksPanel } from "../organisms/OpenTasksPanel/OpenTasksPanel";

export const TasksTabsNavigation = () => {
  const [activeTab, setActiveTab] = useState<string | null>("open_tasks");

  return (
    <Tabs value={activeTab} onChange={setActiveTab}>
      <Tabs.List grow>
        <Tabs.Tab value="open_tasks">Open tasks</Tabs.Tab>
        <Tabs.Tab value="completed_tasks">Completed tasks</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="open_tasks">{<OpenTasksPanel />}</Tabs.Panel>
      <Tabs.Panel value="completed_tasks">{<CompletedTasksPanel />}</Tabs.Panel>
    </Tabs>
  );
};
