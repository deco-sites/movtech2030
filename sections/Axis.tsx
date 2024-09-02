import { RichText } from "apps/admin/widgets.ts";
import Icon from "site/components/ui/Icon.tsx";
import { AvailableIcons } from "site/components/ui/Icon.tsx";

/**
 * @title {{{subTitle}}}
 */
export interface AxisInter {
    icon?: AvailableIcons;
    subTitle?: string;
    description?: string;
}

export interface Props {
    title?: RichText;
    axis?: AxisInter[];
}

const axisPlaceholder: AxisInter = {
    icon: "Brain",
    subTitle: "Subtitle",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

export default function Axis({
    title = "Type your title here",
    axis = [axisPlaceholder, axisPlaceholder, axisPlaceholder],
}: Props) {
    return (
        <div
            class={` flex flex-col gap-10 lg:gap-20 bg-primary items-center py-[3.75rem] lg:py-[6.25rem] px-4 lg:px-10 text-center lg:text-start `}
        >
            <div
                class="inline-block lg:text-[2.5rem] text-2xl leading-9 font-medium"
                dangerouslySetInnerHTML={{
                    __html: title,
                }}
            >
            </div>
            <div
                class={`flex flex-col lg:flex-row lg:items-start justify-start w-full gap-10 lg:gap-[3.75rem] p-10 lg:p-[3.75rem] bg-info rounded-3xl `}
            >
                {axis.map((content) => (
                    <div
                        class={`flex flex-col gap-8 leading-9 items-center justify-start h-full lg:items-start  lg:w-1/3 rounded-3xl`}
                    >
                        <Icon
                            id={content.icon!}
                            size={32}
                            stroke-width={0.1}
                            class={`p-1 rounded-md bg-primary`}
                        />
                        <h1 class={`text-secondary text-xl lg:text-4xl`}>
                            {content.subTitle}
                        </h1>
                        <p class={`text-sm lg:text-xl text-accent`}>
                            {content.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
