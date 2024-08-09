export const getStatusColor = (status: string) => {
  switch (status) {
    case "In progress":
      return "yellow";
    case "Not started":
      return "gray";
    case "Completed":
      return "green";
    default:
      return "black";
  }
};
