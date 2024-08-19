import chroma from "chroma-js"

export function hexToOKLCH(hex: string) {
    return chroma(hex).oklch()
}

export function oklchToHex(oklch: chroma.Color) {
    return chroma(oklch).hex()
}

export function hexToHSL(hex: string) {
    return chroma(hex).hsl()
}
export function oklchStringToSlice(oklch: string) {
    return chroma(oklch).oklch()
}
