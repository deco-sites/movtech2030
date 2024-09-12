import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/**  
 * @title {{{altText}}}
*/
export interface Logo {
    src?: ImageWidget;
    /** @description text alternative */
    altText?: string;
  }

export interface Props {
    title?: string;
    sponsoringInstitutions?: {
        subTitle?: string;
        sponsorsLogos?: Logo[];
    }

    partners: {
        subTitle?: string;
        sponsorsLogos?: Logo[];
    }
}

const IMG_PLACEHODLER = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/03fbcc78-ca86-4616-a59a-b8aa18331a9c"

const IMGS_PLACEHODLER = Array(30).fill(0).map(() => ({
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/03fbcc78-ca86-4616-a59a-b8aa18331a9c",
    altText: "Logo",
  }));
  
      

export default function Partners({
    title = "Type your main title here",
    sponsoringInstitutions = { subTitle : "Type your sub title here", sponsorsLogos: [{src: IMG_PLACEHODLER, altText:"Logo"}, {src: IMG_PLACEHODLER, altText:"Logo"}, {src: IMG_PLACEHODLER, altText:"Logo"}]},
    partners = {subTitle: "Type your sub title here", sponsorsLogos: IMGS_PLACEHODLER}
} : Props) {
    return(
        <div id={`parceiros`} class={`flex flex-col gap-10 lg:gap-20 items-center text-center py-10 lg:py-[3.25rem]`}>
            <h1 class={`text-2xl lg:text-5xl font-bold`}>{title}</h1>
            <div class={`flex flex-col items-center  gap-[3.75rem]`}>
                <h2 class={`text-2xl lg:text-[2rem]`}>{sponsoringInstitutions?.subTitle}</h2>
                <div class={`grid grid-cols-3 gap-6 lg:gap-14 items-center`}>
                    {sponsoringInstitutions?.sponsorsLogos?.map((item) => (
                        <Image
                        src={item.src || ""}
                        alt={item.altText || ""}
                        width={100}
                        class={`lg:w-40`}
                      />
                    ))}
                </div>
            </div>
            <div class={`flex flex-col items-center gap-[3.75rem]`}>
                <h2 class={`text-2xl lg:text-[2rem]`}>{partners?.subTitle}</h2>
                <div class={`flex flex-wrap justify-center px-4 lg:px-40 gap-[0.925rem] lg:gap-[2rem] items-center`}>
                    {partners?.sponsorsLogos?.map((item) => (
                        <Image
                        src={item.src || ""}
                        alt={item.altText || ""}
                        width={50}
                        class={`lg:w-24`}
                      />
                    ))}
                </div>
            </div>
        </div>
    )
}