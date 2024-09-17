import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon, { AvailableIcons } from "../components/ui/Icon.tsx";

 interface Socials {
  url:string;
  src: AvailableIcons;
  alt?: string;
  outline?: boolean;
}

export interface Nav {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  navigation?: {
    links: {
      label?: string;
      url?: string;
    }[];
    buttons: Socials[];
  };
}

export default function Footer({
  logo = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    alt: "Logo",
  },
  navigation = {
    links: [
      { label: "Home", url: "/" },
      { label: "About us", url: "/" },
      { label: "Princing", url: "/" },
      { label: "Contact", url: "/" },
    ],
    buttons: [
      { url: "https://www.google.com.br", src: "Bars3" , alt: "Icon 1", outline: false },
      { url: "https://www.google.com.br", src: "Bars3" , alt: "Icon 1", outline: false },
    ],
  },
}: Nav) {
  return (
    <nav class="drawer drawer-end lg:flex hidden border-t-[1px] border-primary ">
      <input id="mobile-drawer-nav" type="checkbox" class="drawer-toggle" />

      {/* main content */}
      <div class="drawer-content container lg:px-0 px-4 flex gap-8 items-center justify-between py-4">
        <a href="/">
          <Image src={logo.src || ""} width={100} height={65} alt={logo.alt} />
        </a>

        <div class="hidden items-center justify-between lg:flex w-full">
          <ul class="flex">
            {navigation.links.map((link) => (
              <li>
                <a
                  href={link.url}
                  aria-label={link.label}
                  class="link no-underline hover:underline p-4"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
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

        <label
          htmlFor="mobile-drawer-nav"
          class="flex lg:hidden btn btn-ghost drawer-button"
        >
          <Icon id="Bars3" size={24} strokeWidth={0.1} />
        </label>
      </div>

      
    </nav>
  );
}


export function LoadingFallback(){
  return(
   <div class={`flex flex-row justify-between py-8 px-8 lg:px-24`}>
      <div class={`w-[4.5rem] h-10 rounded-lg bg-gray-200 `}/>
      <div class={`flex flex-row gap-2 `}>

      <div class={`w-20 h-10 rounded-lg bg-gray-200 `}/>
      <div class={`w-20 h-10 rounded-lg bg-gray-200 `}/>
      <div class={`w-20 h-10 rounded-lg bg-gray-200 `}/>
      </div>
      
   </div>

  )
}