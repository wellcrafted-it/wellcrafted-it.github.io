import { createTheme } from "flowbite-react";

const customTheme = createTheme({
  button: {
    color: {
      blue: "text-white bg-[#3678b6] border border-transparent enabled:hover:bg-[#4082bf] focus:ring-4 focus:ring-blue-300 dark:bg-[#3678b6] dark:hover:bg-[#4082bf] dark:focus:ring-blue-800",
    },
  },
  card: {
    root: {
      children: "flex h-full flex-col gap-4 p-6",
    },
  },
});

export default customTheme;
