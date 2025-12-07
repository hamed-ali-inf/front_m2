import { Sbar } from "../components/searchBar/Sbar";
import { Nav } from "../components/navbar/Nav";
import { Container } from "../components/Container/Container";
export function Home() {
    return (
        <div>
            <Nav />
            <Sbar />
            <div className="main-container">
                <Container title="News">
                <p>Welcome to the News page!</p>
                  <a href="/news">News</a>
            </Container>
            <Container title="Weather">
                <p>This is the Weather page!</p>
                  <a href="/weather">Weather</a>
            </Container>
            </div>
            
        </div>
      
    );
}
