import type  { VideoWidget } from "apps/admin/widgets.ts";
interface Props {
    title?: string;
    video: VideoWidget;
}

export default function Manifest({
    title = "Title",
    video 
}: Props){
    return(
        <div class={"flex flex-col items-center gap-8 py-10 lg:py-20 px-5 lg:px-0"}>
            <h1 class={"text-[2.5rem] text-secondary font-bold"}>{title}</h1>
            <video width={796} height={447} controls autoplay class={"rounded-2xl"}  >
                <source src={video} type="video/mp4"/ >

            </video>
        </div>
    )
}

export function LoadingFallback () {
    return (
        <div class={`flex flex-col  animate-pulse items-center gap-8 mx-40 py-2`}>
            <div class={`w-72 h-10 bg-gray-200`}/>
            <div class={`w-[50rem] h-[28rem] bg-gray-200`}/>
        </div>
    )
  }