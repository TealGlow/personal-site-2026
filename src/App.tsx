import styled from "styled-components";
import "./App.css";
import Sidebar from "./components/SidebarComponent";
import Content from "./components/Content";

function App() {
  return (
    <Container>
      <Sidebar />
      <Content />
    </Container>
  );
}

export default App;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
