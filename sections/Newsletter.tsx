export interface CTA {
    id?: string;
    href: string;
    text: string;
    outline?: boolean;
}

export interface Props {
    title?: string;
    cta?: CTA[];
    email?: string;
}

const backgroundGrafism =
    `https://deco-sites-assets.s3.sa-east-1.amazonaws.com/movtech2030/47a62ced-9e3f-4b5d-9f69-4c5deb942413/Background-GRAFISM.png`;
export default function Newsletter({
    title = "Type you title here",
    
    cta = [{ id: "change-me-1", href: "/", text: "Change me", outline: false }],
    email = "example@gmail.com",
}: Props) {
    return (
        <div
            class={`flex flex-col items-center w-[21.875rem] lg:w-[64rem] mx-auto gap-10 py-4 my-[3.75rem] lg:my-[6.25rem] lg:py-[3.75rem] bg-cover bg-no-repeat bg-center rounded-3xl`}
            style={{ backgroundImage: `url(${backgroundGrafism})` }}
        >
            <div class={`flex flex-col w-full px-4 lg:px-40 items-center gap-6`}>
                <h1 class={`text-2xl lg:text-5xl text-info font-bold`}>
                    {title}
                </h1>
                
            </div>
            <div class={`flex flex-col gap-10`}>

            {cta.map((item) => (
                <div class={`flex flex-col items-center gap-[0.625rem] lg:gap-5 `}>
                <a
                    href={item?.href}
                    target={item?.href.includes("http") ? "_blank" : "_self"}
                    class={`font-normal btn btn-info text-sm  lg:text-xl text-primary ${
                        item.outline && "btn-outline"
                    }`}
                    >
                    {item?.text}
                </a>
                
            </div>
            ))}
            </div>
            <a
                    href={`MAILTO:${email}`}
                    class={`text-info text-xs lg:text-[1.25rem]`}
                    >
                    {email}
                </a>

        </div>
    );
}
