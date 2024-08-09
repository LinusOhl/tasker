import { Flex, Text, ThemeIcon } from "@mantine/core";
import { FaAngleDown, FaAngleUp, FaEquals } from "react-icons/fa6";
import { getPriorityColor } from "./Priority.helper";

interface PriorityProps {
  priority: string;
}

export const Priority = ({ priority }: PriorityProps) => {
  const getPriorityIcon = () => {
    switch (priority) {
      case "Low":
        return <FaAngleDown />;
      case "Medium":
        return <FaEquals />;
      case "High":
        return <FaAngleUp />;
      default:
        return <FaEquals />;
    }
  };

  return (
    <Flex align={"center"} gap={"xs"}>
      <Text>{priority}</Text>
      <ThemeIcon
        size={"sm"}
        variant="light"
        radius={"xl"}
        color={getPriorityColor(priority)}
      >
        {getPriorityIcon()}
      </ThemeIcon>
    </Flex>
  );
};
