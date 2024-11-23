import { createContext } from "react";
export const WorksFilterContext = createContext({
    showWorksFilter: false,
    toggleWorksFilter: () => {}
});
