import "react";

declare module "react" {
  // Also allow CSS variables in `style` prop of HTML elements
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined;
  }
}
