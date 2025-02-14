import logo from "../../public/pfp.png";
import Image from "next/image"

const HeroImage = ()  => {



    return(
        <>
          <Image
          src={logo}
          alt="logo"
          loading="eager"
          priority
          height={350}
          width={350}
        />
        </>
    )
}
export default HeroImage