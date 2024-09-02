import { RichText } from "apps/admin/widgets.ts";
import Icon from "site/components/ui/Icon.tsx";

export interface CTA {
    id?: string;
    href: string;
    text: string;
    outline?: boolean;
}

/**
 * @title Pillar
 */
export interface Pillar {
    pillar: RichText;
}
export interface Props {
    title?: RichText;
    pillars?: Pillar[];
    paragraph?: RichText;
    cta?: CTA[];
}

const pillarPlaceholder:Pillar = {pillar: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero."}

export default function Pillars({
    title = "Type your title here",
    pillars = [pillarPlaceholder, pillarPlaceholder, pillarPlaceholder],
    paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec felis eu libero vestibulum malesuada. Cras malesuada neque sit amet lorem suscipit, a luctus elit convallis. Integer tincidunt, odio ac lacinia aliquam, purus ipsum gravida urna, vitae elementum justo urna nec nisl",
    cta = [ 
        { id: "change-me-1", href: "/", text: "Change me", outline: false },
        { id: "change-me-1", href: "/", text: "Change me", outline: false },
    ]
} : Props) {
    return(
        <div class={`flex flex-col items-center text-center gap-14 py-10 lg:py-[6.25rem] px-4 lg:px-[6.25rem]`}>
            <div class={`text-[2rem]`}
                dangerouslySetInnerHTML={{
                __html: title
            }}></div>
            <div class={`flex flex-col items-center lg:items-start bg-neutral border-[1px] border-primary p-8 gap-8 rounded-lg max-w-[43.125rem]`}>
                {pillars.map((item) => (
                  <div class={`flex flex-col text-center lg:text-start items-center lg:flex-row gap-6 justify-center`}>
                    <div class={"bg-primary text-white rounded-full p-2"}>
                        <Icon id="Check" size={24} />
                    </div>
                        <div class={`text-xl`} 
                    dangerouslySetInnerHTML={{
                        __html: item.pillar
                    }}> </div>
                  </div>
                ))}
            </div>

            <div class={`text-2xl`}
            dangerouslySetInnerHTML={{
                __html: paragraph
            }}
            ></div>

            <div class={`flex flex-col gap-14 items-center`}>
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