import { RichText } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";


export interface Props {

    text?: RichText;
}

const topImageSrc = "https://deco-sites-assets.s3.sa-east-1.amazonaws.com/movtech2030/14253d6e-fe52-4735-bc4b-9d772ae6fd02/Pilares.png"
export default function PillarsAbout({
    text
}:Props){
    return(
        <div class={`flex flex-col items-center gap-10 lg:gap-20 mt-[-20px] text-center px-4 lg:px-20 pb-8 `}>
            <Image src={topImageSrc} width={309} class={`lg:w-[45.56rem]`}/>
            <div 
            class={`text-sm lg:text-2xl text-center`}
            dangerouslySetInnerHTML={{__html: text || ""}}
            ></div>
        </div>
    )
}