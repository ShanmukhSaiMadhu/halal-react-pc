import { Stack } from "@mui/material";
import DrawerComp from "./components/DrawerComp";
import MainComp from "./components/MainComp";


function App() {
  return (
    <Stack direction='row' >
      <DrawerComp />
      <MainComp />
    </Stack>
  );
}

export default App;
