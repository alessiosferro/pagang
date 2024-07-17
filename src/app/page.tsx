import Image from "next/image";

import hero from "../images/hero.jpg";

export default function Home() {
  return (
    <main className="container full-height flex-center">
      <Image className="image rotate avatar no-shrink" src={hero.src} height={300} width={300}
             alt="A picture of our hero"/>
    </main>
  );
}
