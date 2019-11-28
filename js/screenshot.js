function readyScreenShot(){
    $("#btnSave").click(function() {
        html2canvas($("#main")[0], {
            allowTaint : true,
            useCORS : true,
            foreignObjectRendering : true,

            //removeContainer : true
        }).then(
            function(canvas){
                //canvas.toDataURL("image/png")
                Canvas2Image.saveAsPNG(canvas);
                //location.href = canvas.toDataURL('image/png').replace(/^data:image\/png/, 'data:application/octet-stream');
                /*var el = document.getElementById("capture_target");
                let img = canvas.toDataURL("image/png");
                img.saveAsPNG()
                el.download = '파일명.jpg';
                el.click();*/

                /*if (navigator.msSaveBlob) {
                    var blob = canvas.msToBlob();
                    return navigator.msSaveBlob(blob, '파일명.jpg');
                } else {
                    Canvas2Image
                    var el = document.getElementById("target");
                    el.href = canvas.toDataURL("image/jpeg");
                    el.setAttribute('crossorigin');
                    el.download = '파일명.jpg';
                    console.log(el);
                    el.click();
                }*/


                /*
                let el = document.getElementById("target");
                el.href = canvas.toDataURL("image/jpeg");
                el.download = '파일명.jpg';
                el.click();*/

                //Canvas2Image.saveAsPNG(canvas);
                //location.href = canvas.toDataURL('image/png').replace(/^data:image\/png/, 'data:application/octet-stream');
            });
    });
}