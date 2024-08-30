import { ImageWidget } from "apps/admin/widgets.ts";

/**  
 * @title {{{title}}}
*/
export interface ImageWithParagraphType {

  title?: string;
  /** @format textarea */
  description?: string;
  image?: ImageWidget;
  placement?: "left" | "right";
  disableSpacing?: {
    top?: boolean;
    bottom?: boolean;
  };
}