import { Cover } from "./components/cover/cover.component";
import { NavBar } from "./components/navbar/navbar.component";
import { Banner } from "./components/banner/banner.component";
import { Crew } from "./components/crew/crew.component";
import { Discography } from './components/discography/discography.component'
import { Vibe } from './components/vibe/vibe.component'


const App = () => {
  return (
    <div className="App">
      <Cover />
      <NavBar />
      <Banner />
      <Crew />
      <Discography />
      <Vibe />
    </div>
  );
}

export default App;
