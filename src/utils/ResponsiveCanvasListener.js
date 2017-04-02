export default class ResponsiveCanvasListener {
    constructor(canvas, canvasContainer, callBack) {
        const origWidth = canvas.width;
        const origHeight = canvas.height;
        this.resizeCanvas = () => {
            const w = origWidth, h = origHeight;
            const iw = window.innerWidth, ih = window.innerHeight;
            const pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h;
            const sRatio = Math.min(xRatio, yRatio);
            canvas.width = w * pRatio * sRatio;
            canvas.height = h * pRatio * sRatio;
            canvas.style.width = w * sRatio + 'px';
            canvas.style.height = h * sRatio + 'px';
            if (canvasContainer) {
                canvasContainer.style.width = canvas.style.width;
                canvasContainer.style.height = canvas.style.height;
            }
            if (callBack) {
                callBack();
            }
        };
        window.addEventListener('resize', this.resizeCanvas);
        this.resizeCanvas();
    }

    destroy() {
        window.removeEventListener('resize', this.resizeCanvas);
    }
}