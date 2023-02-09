class CanvasDrawing {
    constructor(drawingPanel){
        this.canvas = document.querySelector(".canvas");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.context = this.canvas.getContext("2d"); // określić kontekst ponieważ jest to canvas
        this.context.lineCap = "round"; // wybranie zakończenia linii - zaokrąglone
        this.context.lineJoin = "round"; // wybranie łączenia linii - zaokraglone
        this.setLineWidth(1); //wartośc początkowa dla gruboości linii
        this.setLineColor("#000"); // wartośc początkowa dla koloru linii

        this.drawing = false;
        this.drawingPanel = drawingPanel;

        this.init();
    };

    setLineWidth = (width) => { // metoda określająca grubość linii
        this.context.lineWidth = width;
    };

    setLineColor = (color) => { // metoda określająca grubość linii
        this.context.strokeStyle = color;
    };

    init() {
        this.addListeners();
    };

    addListeners() {
        const canvas = this.canvas;

        canvas.addEventListener("mousedown", this.startDrawing);
        canvas.addEventListener("mousemove", this.draw);
        canvas.addEventListener("mouseup", this.stopDrawing);
        canvas.addEventListener("mouseout", this.stopDrawing);

        this.drawingPanel.addPanelListeners(this.setLineColor, this.setLineWidth);
    };

    startDrawing = (e) => {
        this.drawing = true;
        this.lastX = e.offsetX;
        this.lastY = e.offsetY;
    };

    stopDrawing = (e) => {
        this.drawing = false;
    };

    draw = (e) => {
        if(!this.drawing) return;
        const context = this.context;
        context.beginPath();
        context.moveTo(this.lastX, this.lastY);
        context.lineTo(e.offsetX, e.offsetY);
        context.stroke();
        [this.lastX, this.lastY] = [e.offsetX, e.offsetY]
    };
}

const canvasDrawing = new CanvasDrawing(drawingPanel);