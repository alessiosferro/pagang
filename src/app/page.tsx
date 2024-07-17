import Image from "next/image";

import hero from "../images/hero.jpg";
import monicaPeppe from "../images/monica-and-peppe.jpg";

export default function Home() {
  return (
    <main className="container full-height flex-column flex-center">
      <h1 className="hidden">Il sito della Palermo gang</h1>

      <div className="relative full-height flex-center">
        <q className="overlay text-center color-white lead">
          Taaaaanto!
        </q>

        <Image className="absolute center image rotate avatar no-shrink" src={hero.src} height={200} width={200}
               alt="A picture of our hero"/>
      </div>


      <div className="overlay offset-top">
        <Image alt="Two members of the gang" src={monicaPeppe.src} height={500} width={500} className="image center"/>
      </div>
    </main>
  );
}
