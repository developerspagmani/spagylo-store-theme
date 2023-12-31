import TopBarNew from "../components/Header/topBarNew"
import Banner from "../components/Banner"
import Logo from "../components/Logo"
import ImageAndTextBlock from "../components/ImageAndTextBlock"
import StepsWithIcon from "../components/StepsWithIcon"
import ThreeImageBlock from "../components/ThreeImageBlock"
import NumberIconBlock from "../components/NumberIconBlock"
import TextAndImageBlock from "../components/TextAndImageBlock"
import TextAndFormBlock from "../components/TextAndFormBlock"
import datas from "../data/gifting-good-admin.json"


export async function getStaticProps() {
    return {
      props: {
        nav: {
          light: true,
        },
        title: "Gifting Good Admin",
      },
    }
}

export default function GiftingGoodAdmin(){

    return(
        <>
            {datas.map((data,index) => {
                return(
                    <Banner data={data} />
                )
            })}
            <ImageAndTextBlock/> 
            <StepsWithIcon/>
            <ThreeImageBlock/>  
            <NumberIconBlock/>
            <TextAndImageBlock/>
            <TextAndFormBlock/>
        </>
    )
}