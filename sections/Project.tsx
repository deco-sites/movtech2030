import { ImageWidget, RichText } from "apps/admin/widgets.ts";

export interface CTA {
    id?: string;
    href: string;
    text: string;
    outline?: boolean;
  }

export interface Props {
    title?: string;
    image?: ImageWidget
    text?: RichText;
    cta?: CTA;
}


const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/772e246e-1959-46ac-a309-3f25ab20af6f";
export default function Project({
    title = "Type a title here",
    image = DEFAULT_IMAGE,
    text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur cursus, nunc ligula ultricies justo, nec lacinia nulla massa at justo. Suspendisse potenti. Integer non sagittis metus, sed tincidunt mauris. Nam accumsan orci vel nisl bibendum, quis euismod velit pulvinar. Curabitur at ante metus. Proin eget purus et nulla.", 
    cta = { id: "change-me-2", href: "/", text: "Change me", outline: false }
} : Props) {
    return(
        <div class={`flex flex-col items-center text-center px-4 lg:px-40 gap-[3.25rem] lg:gap-[3.75rem]`}>
            <h1 class={`text-sm lg:text-[1.75rem] uppercase tracking-wider py-5 px-[1.875rem] border-2 border-primary rounded-full`}>{title}</h1>
            <div class={`w-[21.875rem] h-[12.5rem] lg:w-[62.5rem]  lg:h-[35rem] bg-cover bg-center bg-no-repeat rounded-xl`} style={{backgroundImage: `url(${image})`}}>
                <div class=" inset-0 h-full bg-gradient-to-t from-white to-transparent opacity-100"></div>
            </div>
            <div
            class={`text-sm lg:text-2xl text-accent`}
            dangerouslySetInnerHTML={{
                __html: text
            }}
            ></div>
             <a
                  id={cta?.id}
                  href={cta?.href}
                  target={cta?.href.includes("http") ? "_blank" : "_self"}
                  class={`font-normal btn btn-primary text-xl text-[#EBFFFD] ${
                    cta.outline && "btn-outline"
                  }`}
                >
                  {cta?.text}
                </a>
        </div>
    )
}