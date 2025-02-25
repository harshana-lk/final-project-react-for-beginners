import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  // useBreakpointValue
  const showSidebar = useBreakpointValue({ base: false, lg: true });

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "footer"`,
        lg: `"nav nav" "aside main" "footer footer"`,
      }}
    >
      <GridItem area="nav" bg={"blue"}>
        <NavBar />
      </GridItem>

      {/* Using useBreakpointValue */}
      {showSidebar && (
        <GridItem area="aside" bg={"red"}>
          Side Bar
        </GridItem>
      )}
      <GridItem area="main" bg={"green"}>
        Main Content
      </GridItem>
      <GridItem area="footer" bg={"brown"}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
