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
    title?: string;
    sections?: Section[];
    text?: string;
    cta?: CTA[];
    disableBackGroundImage: boolean;
}

const backgroundImg = "https://deco-sites-assets.s3.sa-east-1.amazonaws.com/movtech2030/12359a0f-11e7-43f4-b4de-f77b9c535be6/white-grafism.png"
export default function SectionList({title, sections, text, cta, disableBackGroundImage = false}  : Props){
    return(
        <div class={`flex flex-col items-center text-center gap-10 py-10 lg:gap-[6.25rem] bg-contain bg-no-repeat bg-bottom`} style={disableBackGroundImage == false ? {backgroundImage: `url(${backgroundImg})`} : ""}>
            
            {title ? <h1 class={`text-[2rem] lg:text-5xl text-primary font-bold `}>{title}</h1> : null}
            {sections?.map((item) => <item.Component {...item.props}/>)}
            
            {text ? <h1 class={`text-2xl lg:text-[2rem] font-bold leading-9 px-4 lg:px-40`}>{text}</h1> : null}
            <div class="flex flex-col items-center px-4 gap-10 lg:gap-[3.75rem]">
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
    )
}