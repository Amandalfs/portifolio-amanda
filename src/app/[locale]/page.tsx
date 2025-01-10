import About from "@/components/About/About";
import BestProjects from "@/components/BestProjects/BestProjects";
import Contacts from "@/components/Contacts/Contacts";
import Hero from "@/components/Hero/Hero";

export default function Home({ params }: { params: Promise<{ locale: string }> }) {
  return (<section className="flex flex-col gap-[46px]">
        <Hero />
        <About />
        <BestProjects params={params} />
        <Contacts />
      </section>);
}
