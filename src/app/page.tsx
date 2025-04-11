import { Footer } from "./components/footer/Footer";
import { Information } from "./components/Information";
import { Header } from "./components/header/Header";
import { Features } from "./features/Features";

export default function Home() {
  return (
    <div>
      <Information />
      <Header />
      <Features />
      <Footer />
    </div>
  );
}
