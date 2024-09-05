import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/**
 * @title {{{name}}}
 */
interface Testimonial {
    name?: string;
    companyName?: string;
    avatar?: ImageWidget;
    text?: string;
}
/**  
 * @title {{{text}}}
*/
interface CTA {
    id?: string;
    href: string;
    text: string;
    outline?: boolean;
}
export interface Props {
    title?: string;
    testimonials?: Testimonial[];
    cta?: CTA[];
}
const grafismImage = "https://deco-sites-assets.s3.sa-east-1.amazonaws.com/movtech2030/4d3a808c-c601-49b4-9348-8386c1620424/Linear-Grafism.png"
const defaultUserIcon =
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e";
const defaultText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla facilisi. Pellentesque in ipsum id orci porta dapibus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.";
export default function PartnersTestimonials({
    title = "Type your title here",
    testimonials = [{
        name: "Pessoa X",
        companyName: "Coca Cola",
        avatar: defaultUserIcon,
        text: defaultText,
    }, {
        name: "Pessoa Y",
        companyName: "Coca Cola",
        avatar: defaultUserIcon,
        text: defaultText,
    }, {
        name: "Pessoa Z",
        companyName: "Coca Cola",
        avatar: defaultUserIcon,
        text: defaultText,
    }],
    cta = [{ id: "change-me-1", href: "/", text: "Change me", outline: false }],
}: Props) {
    return (
        <div
            class={`flex flex-col items-center text-center gap-10 p-10 lg:gap-20 lg:p-[6.25rem] bg-primary bg-no-repeat bg-center`}
            style={{backgroundImage: `url(${grafismImage})`}}
        >
            <h1 class={`text-2xl lg:text-5xl text-info font-bold`}>{title}</h1>
            <div class={`grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-10`}>

            <div className="grid grid-cols-1  gap-6">
                {testimonials.slice(0, 2).map((testimonial, key) => (
                    <div
                    key={key}
                    className={`bg-white p-6 rounded-lg shadow-md flex flex-col`}
                    >
                        <p className="text-xl italic text-left mb-4">
                            {testimonial.text}
                        </p>
                        <Image
                            src={testimonial.avatar || defaultUserIcon}
                            width={40.72}
                            height={40.72}
                            class={`rounded-full lg:w-[67.5px] lg:h-[67.5px]`}
                            />
                        <div className="mt-auto text-left">
                            <h4 className="text-md font-bold">
                                {testimonial.name}
                            </h4>
                            <p className="text-md">{testimonial.companyName}</p>
                        </div>
                    </div>
                ))}
                
            </div>
            <div
                    className={`bg-white p-6 rounded-lg shadow-md flex flex-col`}
                    >
                        <p className="text-xl italic text-left mb-4">
                            {testimonials[2].text}
                        </p>
                        <Image
                            src={testimonials[2].avatar || defaultUserIcon}
                            width={40.72}
                            height={40.72}
                            class={`rounded-full lg:w-[67.5px] lg:h-[67.5px]`}
                            />
                        <div className="mt-auto text-left">
                            <h4 className="text-md font-bold">
                                {testimonials[2].name}
                            </h4>
                            <p className="text-md">{testimonials[2].companyName}</p>
                        </div>
                    </div>
            </div>

            <div class="flex items-center gap-3">
              {cta?.map((item) => (
                <a
                  key={item?.id}
                  id={item?.id}
                  href={item?.href}
                  target={item?.href.includes("http") ? "_blank" : "_self"}
                  class={`font-normal btn btn-info text-sm  lg:text-xl text-primary ${
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
