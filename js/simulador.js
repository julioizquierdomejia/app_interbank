
var  vista1, conteCuentas, frecuente, conteLogin, opeVista1, opeVista3, opeVista4, conteOperaciones, btnSiguiente, vista2, guia, guiaO, ahorroS, btnCuentas, btnMapa, btnCuentasOver, btnOperaciones, opeVista2, btnOperacionesOver, btnUs, conteMenu, vista3, pagosCyL, ubicacion1, ubicacion2, ubicacion3, btnUbicanos, btnSeguridad, btnComp, opeVista5, confirmarPago, vista4, btnCorreo, seg1, mandarEmail, animarMenu, conteUbicanos, btnTienda, btnNumCuentas, opt1, opt2, btnUbicanosOver, vistaT3, ahorroAsoles, aAmex, agilS, amex, transfDinero,btnSeguridadOver, btnPtajeta, conteSeguridad, prr;
var path = "img/";
var myGuia;
var opcPagoFrec = false;

$(document).ready(function(){
	var loaderBar;
	var canvas;
	var stage;
	var bar;
	var imageContainer;
	var currentImage;
	var loaderWidth;
	var loaderColor;
	var borderPadding;
	var preload;
	var oldItem;

	function init() {
		canvas = document.getElementById("myCanvas");
		stage = new createjs.Stage(canvas);
		stage.enableMouseOver(10);

		borderPadding = 10;

		var barHeight = 20;
		loaderColor = createjs.Graphics.getRGB(247, 247, 247);
		loaderBar = new createjs.Container();

		bar = new createjs.Shape();
		bar.graphics.beginFill(loaderColor).drawRect(0, 0, 1, barHeight).endFill();

		imageContainer = new createjs.Container();
		imageContainer.x = 430;
		imageContainer.y = 200;

		loaderWidth = 300;
		stage.addChild(imageContainer);

		var bgBar = new createjs.Shape();
		var padding = 3
		bgBar.graphics.setStrokeStyle(1).beginStroke(loaderColor).drawRect(-padding / 2, -padding / 2, loaderWidth + padding, barHeight + padding);

		loaderBar.x = canvas.width - loaderWidth >> 1;
		loaderBar.y = canvas.height - barHeight >> 1;
		loaderBar.addChild(bar, bgBar);

		stage.addChild(loaderBar);

		manifest = [
			{src: "simulador/login.jpg", id: "login"},
			{src: "simulador/compartir-1.jpg", id: "vista2"},
			{src: "simulador/guia.png", id: "guiaO"},
			{src: "simulador/cuentas.jpg", id: "btnCuentas"},
			{src: "simulador/cuentasOver.jpg", id: "btnCuentasOver"},
			{src: "simulador/operaciones.jpg", id: "btnOperaciones"},
			{src: "simulador/operacionesOver.jpg", id: "btnOperacionesOver"},
			{src: "simulador/ubicanos.jpg", id: "btnUbicanos"},
			{src: "simulador/ubicanosOver.jpg", id: "btnUbicanosOver"},
			{src: "simulador/seguridad.jpg", id: "btnSeguridad"},
			{src: "simulador/seguridadOver.jpg", id: "btnSeguridadOver"},
			{src: "simulador/compartir-2.jpg", id: "vista3"},
			{src: "simulador/lb.png", id: "vista4"},
			{src: "simulador/operacionesPagoRec.jpg", id: "opeVista1"},
			{src: "simulador/switch.png", id: "sw"},
			{src: "simulador/operacionesPagoRec2.jpg", id: "opeVista2"},
			{src: "simulador/operacionesPagoRec3.jpg", id: "opeVista3"},
			{src: "simulador/operacionesPagoRec4.jpg", id: "opeVista4"},
			{src: "simulador/operacionesPagoRec5.jpg", id: "opeVista5"},
			{src: "simulador/pagosCyL.jpg", id: "pagosCyL"},
			{src: "simulador/ubicacion1.jpg", id: "ubicacion1"},
			{src: "simulador/ubicacion2.jpg", id: "ubicacion2"},
			{src: "simulador/ubicacion3.jpg", id: "ubicacion3"},
			{src: "simulador/candado.jpg", id: "seguridad1"},
			{src: "simulador/boton.jpg", id: "btn"},
			{src: "simulador/operacionesPtarjeta1.jpg", id: "opt1"},
			{src: "simulador/operacionesPtarjeta2.jpg", id: "opt2"},
			{src: "simulador/ahorroAgilSoles.jpg", id: "ahorroAsoles"},
			{src: "simulador/ahorroAmex.jpg", id: "aAmex"},
			{src: "simulador/oTarjeta3.jpg", id: "vistaT3"}
		];

		preload = new createjs.LoadQueue(true, "test/");

		// Use this instead to use tag loading
		//preload = new createjs.PreloadJS(false);

		preload.on("progress", handleProgress);
		preload.on("complete", handleComplete);
		preload.on("fileload", handleFileLoad);
		preload.loadManifest(manifest, true, path);

		createjs.Ticker.setFPS(30);

		conteLogin = new createjs.Container();
		conteCuentas = new createjs.Container();
		conteOperaciones = new createjs.Container();
		conteMenu = new createjs.Container();
		guia = new createjs.Container();
		frecuente = new createjs.Container();
		conteUbicanos = new createjs.Container();
		conteSeguridad = new createjs.Container();
	}

	function stop() {
		if (preload != null) {
			preload.close();
		}
	}

	function handleProgress(event) {
		bar.scaleX = event.loaded * loaderWidth;
	}

	function handleFileLoad(event) {
		//login();
	}

	function handleComplete(event) {
		loaderBar.visible = false;
		stage.update();
		login();
	}

	init();
	
	function animGuia () {
		console.log("animGuia");
		var circle = new createjs.Shape();
		circle.graphics.beginFill("#e2e2e2").drawCircle(0, 0, 10);
		circle.alpha = 0.7;
		
		guiaO = new createjs.Bitmap(preload.getResult("guiaO")).set({
			 scaleX: 0.15, scaleY: 0.15, 
			 x: -8, y: -8,
			 //scaleX: 0.3, scaleY: 0.3, 
			 //x: -17, y: -17,
			 alpha: 0.7
		});

		createjs.Tween.get(guiaO, {loop: true}).to({scaleX: 0.4, scaleY: 0.4, alpha: 0, x: -23, y: -23}, 800, createjs.Ease.getPowInOut(4))

		guia.addChild(guiaO);
		guia.addChild(circle);	
	}
	function login(){
		animarMenu = true;

		animGuia();

		vista1 = new createjs.Bitmap(preload.getResult("login"));
		conteLogin.addChild(vista1);

		btnSiguiente = new createjs.Bitmap(preload.getResult("btn")).set({
			 cursor: "pointer",
			 x: 20, y: 236, scaleX:210, scaleY:32, alpha: 0.01
		})

		conteLogin.addChild(btnSiguiente);

		btnSiguiente.on("click", cuentas);

		stage.addChild(conteLogin);

		guia.x = 200; guia.y = 253;
		conteLogin.addChild(guia);
		stage.update();

        createjs.Ticker.setFPS(30);
        createjs.Ticker.addEventListener("tick", stage);
	}

	function cuentas() {

		vista2 = new createjs.Bitmap(preload.getResult("vista2"));
		conteCuentas.addChild(vista2);

		ahorroS = new createjs.Bitmap(preload.getResult("btn")).set({
			 cursor: "pointer",
			 x: 255, y: 70, scaleX: 233, scaleY: 44, alpha: 0.01
		});
		agilS = new createjs.Bitmap(preload.getResult("btn")).set({
			 cursor: "pointer",
			 x: 255, y: 120, scaleX: 233, scaleY: 50, alpha: 0.01
		});
		amex = new createjs.Bitmap(preload.getResult("btn")).set({
			 cursor: "pointer",
			 x: 255, y: 180, scaleX: 233, scaleY: 44, alpha: 0.01
		});

		conteCuentas.addChild(ahorroS);
		conteCuentas.addChild(agilS);
		conteCuentas.addChild(amex);

		vista2.x = 250;

		//conteCuentas.x = 0;

		if (animarMenu) {
			createjs.Tween.get(conteCuentas, {loop: false}).to({x: -250}, 700, createjs.Ease.getPowInOut(4));
		} 
		else{
			conteCuentas.x = -250;
		};
		createjs.Tween.get(conteLogin, {loop: false}).to({x: -250}, 700, createjs.Ease.getPowInOut(4));

		ahorroS.on("click", cuentasEscena2);
		agilS.on("click", cuentasEscena2agil);
		amex.on("click", cuentasEscena2amex);

		stage.addChild(conteCuentas);
		stage.removeChild(conteOperaciones);
		menu(1);

		animarMenu = false;
		function cuentasEscena2(){
			vista3 = new createjs.Bitmap(preload.getResult("vista3"));
			btnNumCuentas = new createjs.Bitmap(preload.getResult("btn")).set({
			 cursor: "pointer",
			 x: 161, y: 90, scaleX: 161, scaleY: 42, alpha: 0.01
			});
			btnComp = new createjs.Bitmap(preload.getResult("btn")).set({
			 cursor: "pointer",
			 x: 715, y: 0, scaleX: 35, scaleY: 32, alpha: 0.01
			});

			conteCuentas.addChild(vista3);
			//conteCuentas.addChild(btnNumCuentas);
			conteCuentas.addChild(btnComp);

			conteCuentas.x = -500;
			vista3.x = 500;

			guia.x = 735; guia.y = 17; 
			conteCuentas.addChild(guia);

			btnComp.on("click", cuentasEscena3);

			function cuentasEscena3(){

				vista4 = new createjs.Bitmap(preload.getResult("vista4")).set({
				 cursor: "pointer"
				});

				conteCuentas.addChild(vista4);

				vista4.x = 500;


				vista4.on("click", cuentasEscena2);
			}
		}
		function cuentasEscena2agil(){
			vista3 = new createjs.Bitmap(preload.getResult("ahorroAsoles"));
			btnNumCuentas = new createjs.Bitmap(preload.getResult("btn")).set({
			 cursor: "pointer",
			 x: 161, y: 90, scaleX: 161, scaleY: 42, alpha: 0.01
			});
			btnComp = new createjs.Bitmap(preload.getResult("btn")).set({
			 cursor: "pointer",
			 x: 715, y: 0, scaleX: 35, scaleY: 32, alpha: 0.01
			});

			conteCuentas.addChild(vista3);
			//conteCuentas.addChild(btnNumCuentas);
			conteCuentas.addChild(btnComp);

			conteCuentas.x = -500;
			vista3.x = 500;

			guia.x = 735; guia.y = 17; guia.alpha = 0.3;
			conteCuentas.addChild(guia);

			btnComp.on("click", cuentasEscena3);

			function cuentasEscena3(){

				vista4 = new createjs.Bitmap(preload.getResult("vista4")).set({
				 cursor: "pointer"
				});

				conteCuentas.addChild(vista4);

				vista4.x = 500;


				vista4.on("click", cuentasEscena2agil);
			}
		}
		function cuentasEscena2amex(){
			vista3 = new createjs.Bitmap(preload.getResult("aAmex"));
			btnNumCuentas = new createjs.Bitmap(preload.getResult("btn")).set({
			 cursor: "pointer",
			 x: 161, y: 90, scaleX: 161, scaleY: 42, alpha: 0.01
			});
			btnComp = new createjs.Bitmap(preload.getResult("btn")).set({
			 cursor: "pointer",
			 x: 715, y: 0, scaleX: 35, scaleY: 32, alpha: 0.01
			});

			conteCuentas.addChild(vista3);
			//conteCuentas.addChild(btnNumCuentas);
			conteCuentas.addChild(btnComp);

			conteCuentas.x = -500;
			vista3.x = 500;

			guia.x = 735; guia.y = 17; guia.alpha = 0.3;
			conteCuentas.addChild(guia);

			btnComp.on("click", cuentasEscena3);

			function cuentasEscena3(){

				vista4 = new createjs.Bitmap(preload.getResult("vista4")).set({
				 cursor: "pointer"
				});

				conteCuentas.addChild(vista4);

				vista4.x = 500;


				vista4.on("click", cuentasEscena2amex);
			}
		}
	}
	
	function Operaciones(){

		console.log(opcPagoFrec);

		opeVista1 = new createjs.Bitmap(preload.getResult("opeVista1"));
		conteOperaciones.addChild(opeVista1);
		btnPtajeta = new createjs.Bitmap(preload.getResult("btn")).set({
				 cursor: "pointer",
				 x: 5, y: 33, scaleX: 246, scaleY: 46, alpha: 0.01
				});
		prr = new createjs.Bitmap(preload.getResult("btn")).set({
				 cursor: "pointer",
				 x: 5, y: 82, scaleX:246, scaleY: 47, alpha: 0.01
				});
		transfDinero = new createjs.Bitmap(preload.getResult("btn")).set({
				 cursor: "pointer",
				 x: 5, y: 134, scaleX:246, scaleY: 47, alpha: 0.01
				});

		

		conteOperaciones.addChild(prr);
		conteOperaciones.addChild(transfDinero);
		conteOperaciones.addChild(btnPtajeta);

		btnPtajeta.on("click", OperacionTarjeta);
		prr.on("click", OperacionesVista1);
		transfDinero.on("click", OperacionesVista1);

		conteOperaciones.x = 0;
		stage.addChild(conteOperaciones);
		stage.removeChild(conteCuentas);

		if (opcPagoFrec) {

			pagosCyL = new createjs.Bitmap(preload.getResult("pagosCyL"));
			conteOperaciones.addChild(pagosCyL);

			pagosCyL.x = 0; pagosCyL.y = 201; pagosCyL.alpha = 0;

			createjs.Tween.get(pagosCyL, {loop: false}).wait(700).to({alpha: 1}, 400, createjs.Ease.getPowInOut(4));

			opcPagoFrec = false;
		};

		menu(2);
		animGuia();

		function OperacionTarjeta () {
			opt1 = new createjs.Bitmap(preload.getResult("opt1"));

			pt1 = new createjs.Bitmap(preload.getResult("btn")).set({
			 cursor: "pointer",
			 x: 1005, y: 56, scaleX:245, scaleY:49, alpha: 0.01
			});
			pt2 = new createjs.Bitmap(preload.getResult("btn")).set({
			 cursor: "pointer",
			 x: 1005, y: 130, scaleX:245, scaleY:49, alpha: 0.01
			});

			opt1.x = 1000;
			conteOperaciones.x = -1000;

			conteOperaciones.addChild(opt1);
			conteOperaciones.addChild(pt1);
			conteOperaciones.addChild(pt2);

			pt1.on("click", OperacionTarjeta2);
			pt2.on("click", OperacionTarjeta2);
		}

		function OperacionTarjeta2 () {
			opt2 = new createjs.Bitmap(preload.getResult("opt2"));
			as2 = new createjs.Bitmap(preload.getResult("btn")).set({
			 cursor: "pointer",
			 x: 1255, y: 60, scaleX:245, scaleY:40, alpha: 0.01
			});
			aa2 = new createjs.Bitmap(preload.getResult("btn")).set({
			 cursor: "pointer",
			 x: 1255, y: 108, scaleX:245, scaleY:45, alpha: 0.01
			});


			opt2.x = 1250;
			conteOperaciones.x = -1250;

			conteOperaciones.addChild(opt2);
			conteOperaciones.addChild(as2);
			conteOperaciones.addChild(aa2);


			as2.on("click", OperacionTarjeta3);
			aa2.on("click", OperacionTarjeta3);
		}

		function OperacionTarjeta3 () {
			opt3 = new createjs.Bitmap(preload.getResult("vistaT3"));
			btnSiguiente2 = new createjs.Bitmap(preload.getResult("btn")).set({
			 cursor: "pointer",
			 x: 1520, y: 227, scaleX:210, scaleY:28, alpha: 0.01
			});

			opt3.x = 1500;
			conteOperaciones.x = -1500;

			conteOperaciones.addChild(opt3);
			conteOperaciones.addChild(btnSiguiente2);
		}

		function OperacionesVista1(){

			opeVista2 = new createjs.Bitmap(preload.getResult("opeVista2"));
			conteOperaciones.addChild(opeVista2);

			opeVista2.x = 250;
			conteOperaciones.x = -250;

			btnSiguiente = new createjs.Bitmap(preload.getResult("btn")).set({
			 cursor: "pointer",
			 x: 270, y: 346, scaleX:210, scaleY:32, alpha: 0.01
			});
			
			conteOperaciones.addChild(btnSiguiente);

			guia.x = 450; guia.y = 363;
			conteOperaciones.addChild(guia);

			btnSiguiente.on("click", OperacionesVista2);
		}

		function OperacionesVista2(){

			opeVista3 = new createjs.Bitmap(preload.getResult("opeVista3"));
			conteOperaciones.addChild(opeVista3);

			ahorroS = new createjs.Bitmap(preload.getResult("btn")).set({
			 cursor: "pointer",
			 x: 505, y: 60, scaleX: 233, scaleY: 44, alpha: 0.01
			});

			conteOperaciones.addChild(ahorroS);
			
			opeVista3.x = 500;
			conteOperaciones.x = -500;

			guia.x = 700; guia.y = 80;
			conteOperaciones.addChild(guia);

			ahorroS.on("click", OperacionesVista3);
		}

		function OperacionesVista3(){

			opeVista4 = new createjs.Bitmap(preload.getResult("opeVista4"));
			conteOperaciones.addChild(opeVista4);

			confirmarPago = new createjs.Bitmap(preload.getResult("btn")).set({
			 cursor: "pointer",
			 x: 520, y: 352, scaleX: 210, scaleY: 28, alpha: 0.01
			});
			conteOperaciones.addChild(confirmarPago);

			opeVista4.x = 500;
			conteOperaciones.x = -500;

			frecuente.x = 670;
			frecuente.y = 300;

			conteOperaciones.addChild(frecuente);
			conteOperaciones.addChild(confirmarPago);

			var fondoGris = new createjs.Shape().set({
			 cursor: "pointer"
			});
		    fondoGris.graphics.beginFill('#EDEDED').drawRect(0, 0, 60, 16);
		    frecuente.addChild(fondoGris);

		    var selector = new createjs.Bitmap(preload.getResult("sw"));
		    frecuente.addChild(selector);

		    selector.x= -36;

		    selector.mask = fondoGris;

		    guia.x = 715; guia.y = 310;
			conteOperaciones.addChild(guia);

		    frecuente.on("click", animSwitch);

			function animSwitch () {
		    	createjs.Tween.get(selector, {loop: false}).to({x: 27}, 300, createjs.Ease.getPowInOut(4));

		    	guia.x = 705; guia.y = 366;

		    	confirmarPago.on("click", OperacionesVista4);

		    }
		}


	    function OperacionesVista4 () {

	    	opcPagoFrec =true;

    		opeVista5 = new createjs.Bitmap(preload.getResult("opeVista5"));
			conteOperaciones.addChild(opeVista5);

			conteOperaciones.addChild(opeVista5);

			opeVista5.x = 750;
			conteOperaciones.x = -750;

			var t=setTimeout(Operaciones, 2000);

    	}
	}

	function Ubicanos(){
		ubicacion1 = new createjs.Bitmap(preload.getResult("ubicacion1"));
		conteUbicanos.addChild(ubicacion1);
		btnTienda = new createjs.Bitmap(preload.getResult("btn")).set({
		cursor: "pointer",
		y: 89,scaleX: 250, scaleY: 49, alpha: 0.01
		});
		conteUbicanos.addChild(btnTienda);

		guia.x = 160; guia.y = 115;
		conteUbicanos.x = 0;

		btnTienda.on("click", UbicanosV2);

		stage.addChild(conteUbicanos);
		stage.removeChild(conteOperaciones);
		stage.removeChild(conteCuentas);
		menu(3);
		animGuia();
		conteUbicanos.addChild(guia);

		function UbicanosV2 () {
			ubicacion2 = new createjs.Bitmap(preload.getResult("ubicacion2"));
			conteUbicanos.addChild(ubicacion2);

			btnMapa = new createjs.Bitmap(preload.getResult("btn")).set({
				cursor: "pointer",
				x:259, y:346, scaleX: 112, scaleY: 33, alpha: 0.01
			});

			guia.x = 350; guia.y = 363;

			ubicacion2.x = 250;
			conteUbicanos.x = -250;			

			conteUbicanos.addChild(btnMapa);
			conteUbicanos.addChild(guia);
			
			btnMapa.on("click", verMapa);
		}
		function verMapa () {
			ubicacion3 = new createjs.Bitmap(preload.getResult("ubicacion3"));
			conteUbicanos.addChild(ubicacion3);

			ubicacion3.x = 500;
			conteUbicanos.x = -500;
		}
	}

	function Seguridad () {
		seg1 = new createjs.Bitmap(preload.getResult("seguridad1"));
		conteSeguridad.addChild(seg1);

		conteSeguridad.x = 0;		

		stage.addChild(conteSeguridad);
		stage.removeChild(conteUbicanos);
		stage.removeChild(conteOperaciones);
		stage.removeChild(conteCuentas);
		menu(4);
	}
	function menu(op){
		stage.removeChild(conteMenu);
		switch(op){
			case 1:
				btnC = new createjs.Bitmap(preload.getResult("btnCuentasOver")).set({
				 cursor: "pointer",
				});
				btnO = new createjs.Bitmap(preload.getResult("btnOperaciones")).set({
				 cursor: "pointer",
				});
				btnU = new createjs.Bitmap(preload.getResult("btnUbicanos")).set({
				 cursor: "pointer",
				});
				btnS = new createjs.Bitmap(preload.getResult("btnSeguridad")).set({
				 cursor: "pointer",
				});
				btnO.on("click", Operaciones);
				btnC.on("click", cuentas);
				btnU.on("click", Ubicanos);
				btnS.on("click", Seguridad);
				break;
			case 2:
				btnO = new createjs.Bitmap(preload.getResult("btnOperacionesOver")).set({
				 cursor: "pointer",
				});
				btnC = new createjs.Bitmap(preload.getResult("btnCuentas")).set({
				 cursor: "pointer",
				});
				btnU = new createjs.Bitmap(preload.getResult("btnUbicanos")).set({
				 cursor: "pointer",
				});
				btnS = new createjs.Bitmap(preload.getResult("btnSeguridad")).set({
				 cursor: "pointer",
				});
				btnC.on("click", cuentas);
				btnO.on("click", Operaciones);
				btnU.on("click", Ubicanos);
				btnS.on("click", Seguridad);
				break;
			case 3:
				btnC = new createjs.Bitmap(preload.getResult("btnCuentas")).set({
				 cursor: "pointer",
				});
				btnO = new createjs.Bitmap(preload.getResult("btnOperaciones")).set({
				 cursor: "pointer",
				});
				btnU = new createjs.Bitmap(preload.getResult("btnUbicanosOver")).set({
				 cursor: "pointer",
				});
				btnS = new createjs.Bitmap(preload.getResult("btnSeguridad")).set({
				 cursor: "pointer",
				});
				btnO.on("click", Operaciones);
				btnC.on("click", cuentas);
				btnU.on("click", Ubicanos);
				btnS.on("click", Seguridad);
				break;
			case 4:
				btnO = new createjs.Bitmap(preload.getResult("btnOperaciones")).set({
				 cursor: "pointer",
				});
				btnC = new createjs.Bitmap(preload.getResult("btnCuentas")).set({
				 cursor: "pointer",
				});
				btnU = new createjs.Bitmap(preload.getResult("btnUbicanos")).set({
				 cursor: "pointer",
				});
				btnS = new createjs.Bitmap(preload.getResult("btnSeguridadOver")).set({
				 cursor: "pointer",
				});
				btnC.on("click", cuentas);
				btnO.on("click", Operaciones);
				btnU.on("click", Ubicanos);
				btnS.on("click", Seguridad);
				break;
		}

		conteMenu.addChild(btnC);
		conteMenu.addChild(btnO);
		conteMenu.addChild(btnU);
		conteMenu.addChild(btnS);

		btnC.x = 0; btnC.y = 0;
		btnO.x = 58; btnO.y = 0;
		btnU.x = 130; btnU.y = 0;
		btnS.x = 189; btnS.y = 0;

		stage.addChild(conteMenu);


		if (animarMenu) {
			conteMenu.y = 426;
			createjs.Tween.get(conteMenu, {loop: false}).wait(200).to({y:391}, 700, createjs.Ease.getPowInOut(4))
		};
		
	}
});