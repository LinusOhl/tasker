export const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "Low":
      return "green";
    case "Medium":
      return "yellow";
    case "High":
      return "red";
    default:
      return "gray";
  }
};
