import About from "@/components/About/About";
import BestProjects from "@/components/BestProjects/BestProjects";
import Contacts from "@/components/Contacts/Contacts";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";

export default function Home({ params }: { params: Promise<{ locale: string }> }) {
  return (
    <main className="w-screen h-screen bg-surfaceBackground-light dark:bg-surfaceBackground-dark text-textPrimary-light dark:text-textPrimary-dark">
      <Header />
      <section className="flex flex-col gap-[46px]">
        <Hero />
        <About />
        <BestProjects params={params} />
        <Contacts />
      </section>
      <Footer />
    </main>
  );
}
