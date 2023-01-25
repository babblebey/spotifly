export interface useResizerProps {
    resizer: HTMLElement,
    sidebar: HTMLElement,
    maxWidth: number,
    minWidth: number
}

const useResizer = ({ resizer, sidebar, maxWidth, minWidth }: useResizerProps) => {
    let xInitialPos: number;
    let initialWidth: number;

    // Mouse Down Event
    const mouseDownEventHandler = (e: MouseEvent) => {
        let computedWidth: string;

        xInitialPos = e.clientX; // -> Initial Position of Mouse on ClientX (x-axis)
        computedWidth = window.getComputedStyle(sidebar).width; // -> Compute Sidebar Width from window object
        initialWidth = parseInt(computedWidth, 10); // -> Get Current width of Sidebar at Mouse Initial Position in Integer

        // Mouse Move Event
        const mouseMoveEventHandler = (e: MouseEvent) => {
            let xCurrentPos: number;
            let liveWidth: number;
            
            xCurrentPos = e.clientX - xInitialPos; // -> Calculate Current Position of Mouse on ClientX (x-axis)
            liveWidth  = initialWidth + xCurrentPos; // -> Calculate Live Width

            // Set Sidebar Width - With a Minimum with of 'minWidth' and Maximum of 'maxWidth'
            if (liveWidth < maxWidth && liveWidth > minWidth) {
                sidebar.style.width = liveWidth + 'px';
            }
        }

        // Mouse Up Event - Remove all Listeners
        const mouseUpEventHandler = () => {
            document.removeEventListener('mouseup', mouseUpEventHandler);
            document.removeEventListener('mousemove', mouseMoveEventHandler);
        }

        // Add Listeners to Document
        document.addEventListener('mousemove', mouseMoveEventHandler);
        document.addEventListener('mouseup', mouseUpEventHandler);
    }

    // Add Listener to Resizer Element
    resizer.addEventListener('mousedown', mouseDownEventHandler);
}
 
export default useResizer;