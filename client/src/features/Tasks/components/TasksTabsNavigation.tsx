import { Tabs } from "@mantine/core";
import { useState } from "react";
import { ClosedTasksPanel } from "./ClosedTasksPanel";
import { OpenTasksPanel } from "./OpenTasksPanel";

export const TasksTabsNavigation = () => {
  const [activeTab, setActiveTab] = useState<string | null>("open_tasks");

  return (
    <Tabs value={activeTab} onChange={setActiveTab}>
      <Tabs.List grow>
        <Tabs.Tab value="open_tasks">Open tasks</Tabs.Tab>
        <Tabs.Tab value="closed_tasks">Closed tasks</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="open_tasks">{<OpenTasksPanel />}</Tabs.Panel>
      <Tabs.Panel value="closed_tasks">{<ClosedTasksPanel />}</Tabs.Panel>
    </Tabs>
  );
};
