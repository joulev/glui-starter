import { Inter } from "next/font/google";
import { cn } from "~/lib/cn";
import "./globals.css";
import background from "./background.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "text-text-primary px-6 py-12 bg-cover bg-center bg-fixed bg-[#1c424d]"
        )}
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <div className="fixed bottom-6 left-6 text-xs text-text-tertiary">
          Photo by{" "}
          <a
            className="text-text-secondary hover:text-text-primary transition"
            href="https://unsplash.com/@danielleone?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          >
            Daniel Leone
          </a>{" "}
          on{" "}
          <a
            className="text-text-secondary hover:text-text-primary transition"
            href="https://unsplash.com/photos/silhouette-of-mountains-during-nigh-time-photography-v7daTKlZzaw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          >
            Unsplash
          </a>
        </div>
        {children}
      </body>
    </html>
  );
}
