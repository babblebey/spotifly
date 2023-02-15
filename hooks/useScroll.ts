export interface scrollData {
    scrollHeight: number,
    scrollLeft: number,
    scrollTop: number,
    scrollWidth: number,
    viewportData: {
        offsetHeight: number,
        offsetLeft: number,
        offsetTop: number,
        offsetWidth: number
    }
}

interface useScrollProps {
    element: HTMLElement,
    callback: (data: scrollData) => void
}

const useScroll = ({element, callback}: useScrollProps) => {
    // Scroll Event
    const scrollEventHandler = (e: Event) => {
        // Get Event Target Element
        const target = e.target as HTMLElement;

        // Build Scroll Data 
        const data: scrollData = {
            scrollHeight: target.scrollHeight,
            scrollLeft: target.scrollLeft,
            scrollTop: target.scrollTop,
            scrollWidth: target.scrollWidth,
            viewportData: {
                offsetHeight: target.offsetHeight,
                offsetLeft: target.offsetLeft,
                offsetTop: target.offsetTop,
                offsetWidth: target.offsetWidth
            }
        }

        // Run Callback with Data avail to it
        callback(data)
    }

    // Add Scroll Event Listener to Element
    element.addEventListener('scroll', scrollEventHandler)
}
 
export default useScroll;