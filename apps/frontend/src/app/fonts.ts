import localFont from "next/font/local";
import {Source_Code_Pro} from "next/font/google";

export const calsans = localFont({
    src: "./fonts/CalSans-SemiBold.woff",
    weight: "400",
    preload: true,
});

export const sourceCode = Source_Code_Pro({
    preload: true,
    subsets: ["latin"],
})