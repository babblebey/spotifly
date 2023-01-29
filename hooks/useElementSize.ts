interface useElementSizeProps {
    element: HTMLElement,
    callback: (element: HTMLElement, size?: DOMRectReadOnly) => void
}

const useElementSize = ({ element, callback }: useElementSizeProps) => {
    new ResizeObserver((entries) => {
        for (let entry of entries) {
            callback(element, entry.contentRect)
        }
    }).observe(element);
}
 
export default useElementSize;