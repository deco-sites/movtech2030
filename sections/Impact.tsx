import { RichText } from "apps/admin/widgets.ts";

/**
 * @title {{{title}}}
 */
interface Impact {
    title?: string;
    text?: string;
}

interface Props {
    title?: string;
    text?: RichText;
    impacts?: Impact[]
}

const backGroundImageGrafism = "https://deco-sites-assets.s3.sa-east-1.amazonaws.com/movtech2030/12359a0f-11e7-43f4-b4de-f77b9c535be6/white-grafism.png"
const impactPlaceholder:Impact = {title:"999", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
export default function Impact({
    title = "Type your title here",
    text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    impacts = [impactPlaceholder, impactPlaceholder, impactPlaceholder, impactPlaceholder]
}: Props) {
    return(
        <div class={`flex flex-col items-center text-center gap-[3.75rem] lg:gap-[6.25rem] py-[3.75rem] px-4  lg:py-[6.25rem] bg-contain bg-top bg-no-repeat`} style={{backgroundImage: `url(${backGroundImageGrafism})`}}>
            <h1 class={`text-[2rem] lg:text-5xl text-primary font-bold `}>{title}</h1>
            <div class={`text-2xl lg:text-[2.5rem] lg:px-40`}
            dangerouslySetInnerHTML={{
                __html: text
            }}></div>
            <div class={`flex flex-col md:flex-row md:flex-wrap md:justify-items-center justify-center items-center gap-10 lg:gap-[5.625rem]`}>
                    {impacts.map((item) => (
                        <div class={`flex flex-col gap-6 md:w-[30rem] `}>
                            <h1 class={`text-5xl lg:text-[3.5rem] text-primary font-bold`}>{item.title}</h1>
                            <p class={`text-md lg:text-xl text-accent`}>{item.text}</p>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export function LoadingFallback(){
    return(
        <div class={`flex flex-col  animate-pulse items-center gap-8  py-20`}>
            <div class={`w-80 h-12 rounded-full bg-gray-200`}/>
            <div class={`w-80 lg:w-[60rem] h-10 rounded-full bg-gray-200`}/>
            <div class={`w-72 lg:w-[56rem] h-10 rounded-full bg-gray-200`}/>
            
            <div class={`flex flex-col py-10 md:flex-row md:flex-wrap md:justify-items-center justify-center items-center gap-10 lg:gap-[5.625rem]`}>
                <div class={`flex flex-col gap-6 md:w-[30rem] `}>
                    <div class={`bg-gray-200 w-32 h-8 rounded-xl`}/>
                    <div class={`bg-gray-200 w-56 h-5 rounded-xl`}/>
                    <div class={`bg-gray-200 w-40 h-5 rounded-xl`}/>
                </div>
                <div class={`flex flex-col gap-6 md:w-[30rem]`}>
                    <div class={`bg-gray-200 w-32 h-8 rounded-xl`}/>
                    <div class={`bg-gray-200 w-56 h-5 rounded-xl`}/>
                    <div class={`bg-gray-200 w-40 h-5 rounded-xl`}/>
                </div>
                <div class={`flex flex-col gap-6 md:w-[30rem]`}>
                    <div class={`bg-gray-200 w-32 h-8 rounded-xl`}/>
                    <div class={`bg-gray-200 w-56 h-5 rounded-xl`}/>
                    <div class={`bg-gray-200 w-40 h-5 rounded-xl`}/>
                </div>
                <div class={`flex flex-col gap-6 md:w-[30rem]`}>
                    <div class={`bg-gray-200 w-32 h-8 rounded-xl`}/>
                    <div class={`bg-gray-200 w-56 h-5 rounded-xl`}/>
                    <div class={`bg-gray-200 w-40 h-5 rounded-xl`}/>
                </div>
            </div>
        </div>
    )
}