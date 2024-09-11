import { Flex, Text, ThemeIcon } from "@mantine/core";
import { FaAngleDown, FaAngleUp, FaEquals } from "react-icons/fa6";
import { getPriorityColor, getPriorityText } from "./Priority.helper";

interface PriorityProps {
  priority: string;
}

export const Priority = ({ priority }: PriorityProps) => {
  const getPriorityIcon = () => {
    switch (priority) {
      case "0":
        return <FaAngleDown />;
      case "1":
        return <FaEquals />;
      case "2":
        return <FaAngleUp />;
      default:
        return <FaEquals />;
    }
  };

  return (
    <Flex align={"center"} gap={"xs"}>
      <Text>{getPriorityText(priority)}</Text>
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
