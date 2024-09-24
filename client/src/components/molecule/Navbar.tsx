import { ActionIcon, Grid, Text } from "@mantine/core";
import { FaChevronLeft, FaFaceSmile } from "react-icons/fa6";

interface NavbarProps {
  location: string;
  showSettings?: boolean;
  goBack: () => void;
}

export const Navbar = ({
  location,
  showSettings = false,
  goBack,
}: NavbarProps) => {
  return (
    <Grid p={"sm"} justify="center" align="center">
      {/* Left section (go back button) */}
      <Grid.Col span={4} ta={"start"}>
        <ActionIcon
          aria-label="Go back"
          variant="transparent"
          color="dark"
          onClick={goBack}
        >
          <FaChevronLeft size={"22"} />
        </ActionIcon>
      </Grid.Col>

      {/* Center section (location text) */}
      <Grid.Col span={4} ta={"center"}>
        <Text size="lg" fw={"bold"}>
          {location}
        </Text>
      </Grid.Col>

      {/* Right section (settings button) */}
      <Grid.Col span={4} ta={"end"}>
        {showSettings && (
          <ActionIcon
            aria-label="Go back"
            variant="transparent"
            color="dark"
            onClick={() => console.log("to settings!")}
          >
            <FaFaceSmile size={"22"} />
          </ActionIcon>
        )}
      </Grid.Col>
    </Grid>
  );
};
