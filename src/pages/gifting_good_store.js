import Banner from "../components/Banner"
import TextAndImageBlock from "../components/TextAndImageBlock"
import StepsBlock from "../components/StepsBlock"
import ProductListBlock from "../components/ProductListingBlock"
import HelpBlock from "../components/HelpBlock"
import datas from "../data/gifting-good-store.json"

export async function getStaticProps() {
    return {
      props: {
        nav: {
          light: true,
        },
        title: "Gifting Good Store",
      },
    }
}

export default function GiftingGoodAdmin(){

        const renderBlocks = (block) => {
          switch (block.name) {
            case 'banner':
              return <Banner data={block.content} />;
            case 'card_buy_Steps':
              return <StepsBlock />;
            case 'product_list':
              return <ProductListBlock />;
            case 'text_and_image':
                return <TextAndImageBlock data={block.content} />;
            case 'subscription':
                return <HelpBlock />
            default:
              return null;
          }
        }
    

    return(
        <>
            {datas.map((data, index) => (
                <div key={index}>
                {data.blocks.map((block, innerIndex) => {
                    return(
                        <>{renderBlocks(block)}</> 
                    )}
                )}
                </div>
            ))}
        </>
    )
}