export const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "0":
      return "green";
    case "1":
      return "yellow";
    case "2":
      return "red";
    default:
      return "gray";
  }
};

export const getPriorityText = (priority: string) => {
  switch (priority) {
    case "0":
      return "Low";
    case "1":
      return "Medium";
    case "2":
      return "High";
    default:
      return "Unknown";
  }
};
