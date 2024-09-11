import { VideoWidget } from "apps/admin/widgets.ts";
/**
 * @title {{{personName}}}
 */
interface testiomonialWithVideo {
    text?: string;
    personName?: string;
    aboutPerson?: string;
    video: VideoWidget;
    placement: "left" | "right";
}

/**
 * @title {{{personName}}}
 */
interface testimonial {
    text?: string;
    personName?: string;
    aboutPerson?: string;
}

interface CTA {
    id?: string;
    href: string;
    text: string;
    outline?: boolean;
}

export interface Props {
    title?: string;
    testiomonialsVideos?: testiomonialWithVideo[];
    testimonialsText?: testimonial[];
    subTitle?: string;
    cta?: CTA;

}

const testimonialVideo_PLACEHOLDER:testiomonialWithVideo = {text: "orem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.", personName: "Vinicius Prates", aboutPerson: "Teacher", placement: "left", video: ""}
const testimonial_PLACEHOLDER:testimonial = {text: "orem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.", personName: "Vinicius Prates", aboutPerson: "Teacher"}
const PLACEMENT = {
    left: "flex-col md:flex-row-reverse",
    right: "flex-col md:flex-row",
  };

  
export default function ImpactsTestiominals({
    title = "Type your title here",
    testiomonialsVideos = [testimonialVideo_PLACEHOLDER, testimonialVideo_PLACEHOLDER, testimonialVideo_PLACEHOLDER],
    testimonialsText = [testimonial_PLACEHOLDER, testimonial_PLACEHOLDER, testimonial_PLACEHOLDER],
    subTitle = "Type your subTitle here",
    cta = { id: "change-me-1", href: "/", text: "Change me", outline: false }
} : Props){
    return(
        <div class={`flex flex-col items-center text-center px-4 lg:px-10 gap-[2.5rem] lg:gap-[6.25rem] py-[2.5rem] lg:py-[6.25rem]`}>
            <h1 class={`text-2xl lg:text-5xl text-accent`}>{title}</h1>
            <div class={`flex flex-col items-center gap-[2.5rem] lg:gap-[6.25rem]`}>
                {testiomonialsVideos.map((item) => (
                     <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm">
                     <div
                       class={`flex ${
                         PLACEMENT[item.placement]
                       } gap-12 md:gap-20 text-left items-center z-10`}
                     >
                       <iframe  className={`w-[350px] h-[200px] lg:w-[592px] lg:h-[307px] rounded-lg`} src={item.video} frameBorder={0}      
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        class={"rounded-[8px]"} >
        
                       </iframe>
                       <div class="w-full md:w-1/2 space-y-2 md:space-y-4 md:max-w-xl gap-6 z-10  text-left ">
                            <p class=" text-xs lg:text-xl italic">
                                {item.text}
                                </p>
                        
                        
                         <p class="text-sm lg:text-2xl font-bold text-primary">
                           {item.personName}
                         </p>
                        <p class={`text-sm  lg:text-2xl text-primary`}>{item.aboutPerson}</p>
                         
                       </div>
                     </div>
                   </div>
                ))}
            </div>
            <div class={`grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-10`}>

            <div className="grid grid-cols-1  gap-6">
                {testimonialsText.slice(0, 2).map((item, key) => (
                    <div
                    key={key}
                    className={`bg-primary text-info p-6 rounded-[4px] shadow-md flex flex-col`}
                    >
                        <p className="text-xl italic text-left mb-4">
                            {item.text}
                        </p>
                        
                        <div className="flex flex-row gap-2 mt-auto text-left">
                            <h4 className="text-md font-bold">
                                {item.personName}
                            </h4> |
                            <p className="text-md font-bold">{item.aboutPerson}</p>
                        </div>
                    </div>
                ))}
                
            </div>
            <div
                    className={`bg-primary text-info  p-6 rounded-[4px] shadow-md flex flex-col`}
                    >
                        <p className="text-xl italic text-left mb-4">
                            "{testimonialsText[2].text}"
                        </p>
                        
                        <div className="flex flex-row gap-2 mt-auto text-left">
                            <h4 className="text-md font-bold">
                                {testimonialsText[2].personName}
                            </h4> | 
                            <p className="text-md font-bold">{testimonialsText[2].aboutPerson}</p>
                        </div>
                    </div>
            </div>
            <h1 class={`text-2xl lg:text-[2.5rem] text-primary leading-9 lg:leading-[60px] font-bold`}>{subTitle}</h1>

            <a
                  href={cta?.href}
                  target={cta?.href.includes("http") ? "_blank" : "_self"}
                  class={`font-normal btn btn-primary text-sm  lg:text-xl text-[#EBFFFD] ${
                    cta.outline && "btn-outline"
                  }`}
                >
                  {cta?.text}
                </a>
        </div>
    )
}


