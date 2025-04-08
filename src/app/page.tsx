import { Footer } from "./components/footer/Footer";
import { Information } from "./components/Information";
import { Header } from "./components/header/Header";
import { PageContent } from "./components/page-content/PageContent";

export default function Home() {
  return (
    <div className="">
      <Information />
      <Header />
      <PageContent />
      <Footer />
    </div>
  );
}
