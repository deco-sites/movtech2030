export interface CTA {
    id?: string;
    href: string;
    text: string;
    outline?: boolean;
}
/**
 * @title {{{title}}}
 */
interface Movement {
    title?: string;
    text?: string;
    cta: CTA;
}

export interface Props {
    title?: string;
    movementsList?: Movement[];
}

const placeHolder: Movement = {
    title: "Sub title",
    text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    cta: { id: "change-me-1", href: "/", text: "Change me", outline: false },
};
export default function InTheMedia({
    title = "Type your title",
    movementsList = [
        placeHolder,
        placeHolder,
        placeHolder,
        placeHolder,
        placeHolder,
    ],
    }: Props) {
        return (
        <div id={`midia`}
            class={`flex flex-col items-center  px-5 gap-[3.75rem] lg:gap-[6.25rem] py-[2.5rem] lg:py-[6.25rem]`}
        >
            <h1 class={`text-[2rem] lg:text-5xl`}>{title}</h1>
            <div
                class={`flex flex-col lg:flex-row lg:flex-wrap justify-center  gap-[4.5rem]`}
            >
                {movementsList.map((item) => (
                    <div
                        class={`flex flex-col gap-6 items-center lg:items-start w-80 `}
                    >
                        <h1
                            class={`text-md lg:text-xl px-[1.875rem] py-5 border-2 border-primary rounded-[3.75rem]`}
                        >
                            {item.title}
                        </h1>
                        <p class={`text-2xl font-bold text-accent`}>
                            {item.text}
                        </p>
                        <a
                            href={item?.cta.href}
                            target={item?.cta.href.includes("http")
                                ? "_blank"
                                : "_self"}
                            class={`font-normal btn btn-primary text-sm  lg:text-xl text-[#EBFFFD] ${
                                item.cta.outline && "btn-outline"
                            }`}
                        >
                            {item?.cta.text}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
