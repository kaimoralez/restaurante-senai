import { Footer } from "../../layout/footer/footer"
import { Header } from "../../layout/header/header"
import { SectionAbout } from "../../layout/sections/sectionAbout/sectionAbout"
import { SectionBenefits } from "../../layout/sections/sectionBenefits/sectionBenefits"
import { SectionMain } from "../../layout/sections/sectionMain/sectionMain"
import { SectionStats } from "../../layout/sections/sectionStats/sectionStats"

export const Home = () =>{
    return(
        <>
        <Header />
        <SectionMain />
        <SectionBenefits />
        <SectionAbout />
        <SectionStats />
        <Footer />
        </>
        

    )
}