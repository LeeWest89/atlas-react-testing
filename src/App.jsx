import Footer from "./components/Footer";
import CoverArt from "./components/CoverArt";
import SongTitle from "./components/SongTitle";
import PlayControls from "./components/PlayControls";

function App() {
  return (
    <div className="h-full flex flex-col justify-between p-8 min-h-screen">
      <CoverArt />
      <SongTitle />
      <PlayControls />
      <Footer />
    </div>
  );
}

export default App;
