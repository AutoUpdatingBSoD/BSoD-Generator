$("#btnSave").click(function() { 
        html2canvas($("#bsod")[0]).then((canvas) => {

                canvas.toBlob(function(blob) {
                    saveAs(blob, "BSOD.png"); 
                });
            });
        });
