import { ActionIcon, Flex, Text } from "@mantine/core";
import { FaChevronLeft, FaFaceSmile } from "react-icons/fa6";

interface NavbarProps {
  location: string;
  goBack: () => void;
}

export const Navbar = ({ location, goBack }: NavbarProps) => {
  return (
    <Flex p={"sm"} justify={"space-between"} gap={"md"}>
      <ActionIcon
        aria-label="Go back"
        variant="transparent"
        color="dark"
        onClick={goBack}
      >
        <FaChevronLeft size={"22"} />
      </ActionIcon>

      <Text size="lg">{location}</Text>

      <ActionIcon
        aria-label="Go back"
        variant="transparent"
        color="dark"
        onClick={() => console.log("to settings!")}
      >
        <FaFaceSmile size={"22"} />
      </ActionIcon>
    </Flex>
  );
};
