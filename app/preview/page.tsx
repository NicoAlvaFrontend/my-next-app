import { Header } from "../components/header/header.component";
import { HomeInformation } from "../components/homeInformation/homeInformation";
import { Presentation } from "../components/Presentation/presentation.component";


export default function Home() {
    return (
      <div>
        <HomeInformation/>
        <Presentation/>
      </div>
    );
  }