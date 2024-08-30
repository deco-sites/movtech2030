import type { ImageWidget, RichText } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon, { AvailableIcons } from "../components/ui/Icon.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

interface Socials {
  url:string;
  src: AvailableIcons;
  alt?: string;
  outline?: boolean;
}

export interface Props {
 
  title?: RichText;
  description?: RichText;
  peopleImage: ImageWidget;
  backGroundImage?:ImageWidget;
  cta?: CTA[];
  navigation?: {buttons: Socials[]};
}


export default function HeroFlats({
  title = "Click here to tweak this text however you want.",
  description =
    "This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.",
  peopleImage,
  backGroundImage,
    cta = [
    { id: "change-me-1", href: "/", text: "Change me", outline: false },
    { id: "change-me-2", href: "/", text: "Change me", outline: true },
  ],
  navigation = {
    
    buttons: [
      { url: "#", src: "Bars3" , alt: "Icon 1", outline: false },
      { url: "#", src: "Bars3" , alt: "Icon 1", outline: false },
    ],
  },
}: Props) {
  return (
    <nav class={`lg:container lg:mx-auto mx-4 `}>

      <div class={`flex flex-col items-center gap-8 bg-top  bg-[length:58rem_38rem] bg-no-repeat `} style={{backgroundImage: `url(${backGroundImage})`, }}>
      <div class="absolute inset-0 mt-24 h-[37.5rem] bg-gradient-to-t from-white to-transparent opacity-100"></div>

        <div
          class={`flex w-full xl:container xl:mx-auto py-10 mx-2 md:mx-10 z-10 flex-col items-center justify-center text-center
            gap-12 md:gap-20 `}>
          
          <div
            class={`mx-2  lg:mx-auto lg:px-10 lg:w-full space-y-4 gap-4 flex flex-col items-center justify-center `}
          >
            <Image src={peopleImage} width={1000} height={290}/>
            <div
              class="inline-block lg:text-[44px] text-4xl leading-none font-medium"
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            >
            </div>
            <div class="text-lg md:text-md leading-[150%]"
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            >              
            </div>
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
            <ul class="flex gap-3">
            {navigation.buttons?.map((item) => (
              <a
                key={item?.url}
                href={item?.url ?? "#"}
                target={item?.url.includes("http") ? "_blank" : "_self"}
                class={`font-normal btn btn-primary fill-[#EBFFFD] ${
                  item.outline && "btn-outline"
                }`}
              >
                <Icon id={item.src} size={24} strokeWidth={0.1}/>
              </a>
            ))}
          </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}


export function LoadingFallback () {
  return <div>loading...</div>
}