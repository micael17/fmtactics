function readyScreenShot(){
    $("#btnSave").click(function() {
        html2canvas($("#main")[0], {
            allowTaint : true,
            useCORS : true,
            foreignObjectRendering : true,
        }).then(
            async function(canvas){

                await $("html, body").scrollTop(0)
                
                let today = new Date();
                let year = today.getFullYear()
                let month = today.getMonth() + 1;
                let date = today.getDate();
                let filename = year + '_' + month + '_' + date + '_myfmtactics.png';

                if (navigator.msSaveBlob) {
                    let blob = canvas.msToBlob();
                    return navigator.msSaveBlob(blob, filename);
                } else {
                    let el = document.getElementById("capture_target");
                    el.href = canvas.toDataURL("image/jpeg");
                    el.setAttribute('crossorigin', 'anonymous');
                    el.download = filename;
                    el.click();
                }
            });
    });
}