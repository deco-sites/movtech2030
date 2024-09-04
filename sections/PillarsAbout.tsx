import { RichText } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";


export interface Props {

    text?: RichText;
}

const topImageSrc = "https://deco-sites-assets.s3.sa-east-1.amazonaws.com/movtech2030/661995fe-329c-417e-907b-5a9d47000ae8/Pillars.png"
export default function PillarsAbout({
    text
}:Props){
    return(
        <div class={`flex flex-col items-center gap-10 lg:gap-20  text-center px-4 lg:px-20 pb-8 lg:pb-[7.5rem]`}>
            <Image src={topImageSrc} width={309} class={`lg:w-[45.56rem]`}/>
            <div 
            class={`text-sm lg:text-2xl text-center`}
            dangerouslySetInnerHTML={{__html: text || ""}}
            ></div>
        </div>
    )
}