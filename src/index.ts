import QRCode from "qrcode";

(() => {
	QRCode.toDataURL("Hello word", function (err: any, url: any) {
		console.log(url);
	});
})();
