import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { ImageWithParagraphType } from "site/types.ts";
import ImageWithParagraph from "site/sections/ImageWithParagraph.tsx";


export interface CTA {
    id?: string;
    href: string;
    text: string;
    outline?: boolean;
  }
  
interface Props {
    imageLogo?: ImageWidget;
    title?: string;
    description?: string;
    IWPs?: ImageWithParagraphType[];
    cta?: CTA[];
}

const DEFAULT_IMAGE =
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/772e246e-1959-46ac-a309-3f25ab20af6f";

export default function WhoWeAre({
    imageLogo =
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    title = "Type your title here",
    description =
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mauris ipsum, r
        utrum eget sapien non, ultricies faucibus sem. Aenean velit ligula, vulputate non odio quis, lacinia gravida odio. `,
    IWPs = [{
        title: "Here's an intermediate size heading you can edit",
        description:
            "This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.",
        image: DEFAULT_IMAGE,
        placement: "left",
        disableSpacing : {top: true, bottom: true}
    }],
    cta = [{ id: "change-me-1", href: "/", text: "Change me", outline: false },]
}: Props) {
    return (
        <div id={`quem-somos`} class={`flex flex-col items-center mx-auto gap-[100px] py-[80px]`}>
            <div class={`flex flex-col items-center gap-[30px] text-center lg:px-[80px]`}>
                <Image src={imageLogo} width={135} height={89} />
                <h1 class="inline-block lg:text-5xl text-2xl leading-none font-bold text-primary">
                    {title}
                </h1>
                <p class="inline-block leading-9 text-xl  font-bold">
                    {description}
                </p>
            </div>

            <div class={`flex flex-col items-center gap-20 `}>
                {IWPs.map((content) => (
                     <ImageWithParagraph
                     title={content.title}
                     description={content.description}
                     image={content.image}
                     placement={content.placement}
                     disableSpacing={content.disableSpacing}
                 />
                ))}
            </div>

            <div class="flex items-center gap-3">
              {cta?.map((item) => (
                <a
                  key={item?.id}
                  id={item?.id}
                  href={item?.href}
                  target={item?.href.includes("http") ? "_blank" : "_self"}
                  class={`font-normal btn btn-primary text-sm  lg:text-xl text-[#EBFFFD] ${
                    item.outline && "btn-outline"
                  }`}
                >
                  {item?.text}
                </a>
              ))}
            </div>
        </div>
    );
}


export function LoadingFallback(){
    return(
        <div class={`flex flex-col items-center mx-40 py-20 gap-8 animate-pulse `}>
            <div class={`w-24 h-8 rounded-xl`}/>
        </div>
    )
}