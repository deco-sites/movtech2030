import type { ImageWidget, RichText } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
    id?: string;
    href: string;
    text: string;
    outline?: boolean;
  }
  

/**
 * @title {{{title}}}
 */
export interface Props {
  
  title?: RichText;
  /** @format textarea */
  description?: string;
  image?: ImageWidget;
  cta?: CTA;
  placement?: "left" | "right";
  disableSpacing?: {
    top?: boolean;
    bottom?: boolean;
  };
}

const PLACEMENT = {
  left: "flex-col md:flex-row-reverse",
  right: "flex-col md:flex-row",
};

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/772e246e-1959-46ac-a309-3f25ab20af6f";

export default function ImageWithParagraph2({
  title = "Here's an intermediate size heading you can edit",
  description =
    "This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.",
  image = DEFAULT_IMAGE,
  placement = "left",
  cta,
  disableSpacing,
 
}: Props) {
  return (
    <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm">
      <div
        class={`flex ${
          PLACEMENT[placement]
        } gap-12 md:gap-20 text-left items-center z-10 ${
          disableSpacing?.top ? "" : "pt-12 lg:pt-28"
        } ${disableSpacing?.bottom ? "" : "pb-12 lg:pb-28"}`}
      >
        <div class="w-full md:w-1/2 rounded-md overflow-hidden">
          <Image
            width={592}
            height={448}
            class="object-fit z-10"
            sizes="(max-width: 592px) 100vw, 30vw"
            src={image}
            alt={image}
            decoding="async"
            loading="lazy"
          />
        </div>
        <div class="w-full md:w-1/2 space-y-2 md:space-y-4 md:max-w-xl gap-4 z-10 text-center lg:text-left ">
          <div class="text-2xl lg:text-4xl  leading-[54px] text-accent "
              dangerouslySetInnerHTML={{__html: title }}>
            
          </div>
          <p class=" text-md lg:text-xl leading-9">
            {description}
          </p>
          <a
                  id={cta?.id}
                  href={cta?.href}
                  target={cta?.href.includes("http") ? "_blank" : "_self"}
                  class={`font-normal btn btn-primary text-sm  lg:text-xl text-[#EBFFFD] ${
                    cta?.outline && "btn-outline"
                  }`}
                >
                  {cta?.text}
                </a>
        </div>
      </div>
    </div>
  );
}
