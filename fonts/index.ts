import localFont from "@next/font/local"
import { NextFontWithVariable } from "@next/font"

export const circular: NextFontWithVariable = localFont({
    src: [
        {
            path: './CircularSp-Book.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: './CircularSp-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: './CircularSpTitle-Bold.woff2',
            weight: '800',
            style: 'normal',
        },
        {
            path: './CircularSpTitle-Black.woff2',
            weight: '900',
            style: 'normal',
        },
    ],
    variable: '--font-circular'
})