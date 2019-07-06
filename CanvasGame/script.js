let ctx;
let canvas;
let R = 0;
let G = 0;
let B = 0;

function draw() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    let body = document.querySelector("body");

    canvas.width = 640;
    canvas.height = 480;

    let mouse = { xNow: 0, yNow: 0, xFormer: 0, yFormer: 0, color: "black" };
    let isDrawing = false;

    console.log(mouse);

    canvas.addEventListener("mousemove", function (e) {
        let rect = e.target.getBoundingClientRect();
        ctx.lineWidth = document.getElementById("lineWidth").value;

        mouse.xNow = e.clientX - rect.left;
        mouse.yNow = e.clientY - rect.top;

        if (mouse.isDrawing) {
            console.log("drawing now");
            ctx.beginPath();
            ctx.moveTo(mouse.xFormer, mouse.yFormer);
            ctx.lineTo(mouse.xNow, mouse.yNow);
            ctx.lineCap = "round";
            ctx.stroke();
            mouse.xFormer = mouse.xNow;
            mouse.yFormer = mouse.yNow;
        }
    });

    canvas.addEventListener("mousedown", function (e) {
        console.log("mouse down");
        mouse.isDrawing = true;
        mouse.xFormer = mouse.xNow;
        mouse.yFormer = mouse.yNow;
    });

    body.addEventListener("mouseup", function (e) {
        console.log("mouse up");
        mouse.isDrawing = false;
    });




    let rRange = document.getElementById("rRange");
    let rText = document.getElementById("rText");
    let rChange = function () {
        penColorBy("R", rRange.value);
        rText.textContent = "R:" + rRange.value
    };
    rRange.addEventListener("change", rChange);
    rRange.addEventListener("mousemove", rChange);

    let gRange = document.getElementById("gRange");
    let gText = document.getElementById("gText");
    let gChange = function () {
        penColorBy("G", gRange.value);
        gText.textContent = "G:" + gRange.value;
    }
    gRange.addEventListener("change", gChange);
    gRange.addEventListener("mousemove", gChange);


    let bRange = document.getElementById("bRange");
    let bText = document.getElementById("bText");
    let bChange = function () {
        penColorBy("B", bRange.value);
        bText.textContent = "B:" + bRange.value;
    }
    bRange.addEventListener("change", bChange);
    bRange.addEventListener("mousemove", bChange);

    let lineWidthElement = document.getElementById("lineWidth");
    let lineWidthText = document.getElementById("lineWidthText");
    let widthChange = function () {
        lineWidthText.textContent = "ペンの太さ:" + lineWidthElement.value;
    }
    lineWidthElement.addEventListener("change", widthChange);
    lineWidthElement.addEventListener("mousemove", widthChange);

    let clear = document.getElementById("clear");
    clear.addEventListener("click", function () { ctx.clearRect(0, 0, canvas.width, canvas.height) });

    let save = document.getElementById("save");
    save.addEventListener("click", function () {
        //let drawing = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        //window.open(drawing, "save");


        if (canvas.msToBlob) {
            let blob = canvas.msToBlob();
            window.navigator.msSaveBlob(blob, "drawing.png");
        } else {

            let link = document.createElement("a");
            link.href = canvas.toDataURL("image/png");
            link.download = "drawing.png";
            link.click();

            /*
            let base64 = canvas.toDataURL("image/png");
            location.href = base64;
            
            //動かない
            let link = document.createElement("a");
            link.href = window.URL.createObjectURL(blob);
            link.click();
            */
            //一応動くがファイル名を指定できない
            //let drawing = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            //window.open(drawing);

        }
    });
}

function penColorByColor(color) {
    ctx.strokeStyle = color;
}

function penColorBy(RorGorB, value) {
    value = Math.max(0, value);
    value = Math.min(255, value);
    switch (RorGorB) {
        case "R":
            R = value;
            break;
        case "G":
            G = value;
            break;
        case "B":
            B = value;
            break;
        default:
            break;
    }
    console.log("color is now rgb(" + R + "," + G + "," + B + ")");
    penColorByRGB(R, G, B);
}

function penColorByRGB(R, G, B) {
    ctx.strokeStyle = "rgb(" + R + "," + G + "," + B + ")";
}

function setPen() {

}

function setEraser() {

}