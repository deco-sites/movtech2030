import type  { VideoWidget } from "apps/admin/widgets.ts";
import Video from "apps/website/components/Video.tsx";
interface Props {
    title?: string;
    video: VideoWidget;
}

export default function Manifest({
    title = "Title",
    video 
}: Props){
    return(
        <div class={"flex flex-col items-center py-16 gap-[32px] py-[40px] lg:py-[80px] px-[20px] lg:px-0"}>
            <h1 class={"text-[40px] text-secondary font-bold"}>{title}</h1>
            <video width={796} height={447} controls class={"rounded-[16px]"} >
                <source src={video} type="video/mp4"/>

            </video>
        </div>
    )
}

export function LoadingFallback () {
    return <div>loading...</div>
  }