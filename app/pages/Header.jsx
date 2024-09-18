import Link from "next/link";
import { Button } from "@/components/ui/button";

// componentes
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white bg-primary">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Ale<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav e botao contrate-me */}
        <div className="hidden xl:flex items-center gap-8">
         <Nav />
         <Link href="/contact">
         <Button>Contrate-me</Button>
         </Link>  
        </div>


        {/*mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
        
export default Header;

