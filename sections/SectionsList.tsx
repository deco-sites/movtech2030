import { Section } from "deco/blocks/section.ts";

/**
 * @title {{{text}}}
 */
export interface CTA {
    id?: string;
    href: string;
    text: string;
    outline?: boolean;
  }


export interface Props {
    sections?: Section[];
    cta?: CTA[];
}

const backgroundImg = "https://deco-sites-assets.s3.sa-east-1.amazonaws.com/movtech2030/12359a0f-11e7-43f4-b4de-f77b9c535be6/white-grafism.png"
export default function SectionList({sections, cta}  : Props){
    return(
        <div class={`flex flex-col items-center gap-10 py-10 lg:gap-[6.25rem] bg-contain bg-no-repeat bg-bottom`} style={{backgroundImage: `url(${backgroundImg})`}}>
            {sections?.map((item) => <item.Component {...item.props}/>)}
            <div class="flex items-center gap-3">
              {cta?.map((item) => (
                <a
                  key={item?.id}
                  id={item?.id}
                  href={item?.href}
                  target={item?.href.includes("http") ? "_blank" : "_self"}
                  class={`font-normal btn btn-primary text-xl text-[#EBFFFD] ${
                    item.outline && "btn-outline"
                  }`}
                >
                  {item?.text}
                </a>
              ))}
            </div>
        </div>
    )
}