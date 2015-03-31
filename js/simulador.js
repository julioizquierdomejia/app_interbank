
var  vista1, conteCuentas, frecuente, conteLogin, btnAtras1, opeVista1, opeVista3, opeVista4, conteOperaciones, btnSiguiente, vista2, guia, guiaO, ahorroS, btnCuentas, btnMapa, btnCuentasOver, btnOperaciones, opeVista2, btnOperacionesOver, btnUs, conteMenu, vista3, pagosCyL, ubicacion1, ubicacion2, ubicacion3, btnUbicanos, btnSeguridad, btnComp, opeVista5, confirmarPago, vista4, btnCorreo, seg1, mandarEmail, animarMenu, conteUbicanos, btnTienda, btnNumCuentas, opt1, opt2, otd2, otd4, otd5, btnUbicanosOver, vistaT3, ahorroAsoles, aAmex, agilS, amex, transfDinero,btnSeguridadOver, btnPtajeta, btnTdinero1, btnTdinero2, btnTdinero5, otd3, btnTdinero3, btnTdinero3, conteSeguridad, btnSiguiente2, btnTdinero6, btnColor, btnColorsito, btnSiguienteSeguridad, otd6, btnTdinero7, opt4, opt5, otd1,prr;
var $os = 'apple';
var path;
var myGuia;
var opcPagoFrec = false;
var alphaBotones = 0.5;
var tipoDeCuenta;

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

		if ($os == 'android') {
			path = "img/simulador_android/";
		} else{
			path = "img/simulador_apple/";
		};

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
			{src: "login.jpg", id: "login"},
			{src: "compartir-1.jpg", id: "vista2"},
			{src: "guia.png", id: "guiaO"},
			{src: "cuentas.jpg", id: "btnCuentas"},
			{src: "cuentasOver.jpg", id: "btnCuentasOver"},
			{src: "operaciones.jpg", id: "btnOperaciones"},
			{src: "operacionesOver.jpg", id: "btnOperacionesOver"},
			{src: "ubicanos.jpg", id: "btnUbicanos"},
			{src: "ubicanosOver.jpg", id: "btnUbicanosOver"},
			{src: "seguridad.jpg", id: "btnSeguridad"},
			{src: "seguridadOver.jpg", id: "btnSeguridadOver"},
			{src: "compartir-2.jpg", id: "vista3"},
			{src: "lb.png", id: "vista4"},
			{src: "operacionesPagoRec.jpg", id: "opeVista1"},
			{src: "switch.png", id: "sw"},
			{src: "operacionesPagoRec2.jpg", id: "opeVista2"},
			{src: "operacionesPagoRec3.jpg", id: "opeVista3"},
			{src: "operacionesPagoRec4.jpg", id: "opeVista4"},
			{src: "operacionesPagoRec5.jpg", id: "opeVista5"},
			{src: "pagosCyL.jpg", id: "pagosCyL"},
			{src: "ubicacion1.jpg", id: "ubicacion1"},
			{src: "ubicacion2.jpg", id: "ubicacion2"},
			{src: "ubicacion3.jpg", id: "ubicacion3"},
			{src: "candado.jpg", id: "seguridad1"},
			{src: "boton.jpg", id: "btn"},
			{src: "operacionesPtarjeta1.jpg", id: "opt1"},
			{src: "operacionesPtarjeta2.jpg", id: "opt2"},
			{src: "ahorroAgilSoles.jpg", id: "ahorroAsoles"},
			{src: "ahorroAmex.jpg", id: "aAmex"},
			{src: "oTarjeta3.jpg", id: "vistaT3"},
			{src: "oTarjeta4.jpg", id: "vistaT4"},
			{src: "oTarjeta5.jpg", id: "vistaT5"},
			{src: "transfDinero1.jpg", id: "vistaTdinero1"},
			{src: "transfDinero2.jpg", id: "vistaTdinero2"},
			{src: "transfDinero3.jpg", id: "vistaTdinero3"},
			{src: "transfDinero4.jpg", id: "vistaTdinero4"},
			{src: "transfDinero5.jpg", id: "vistaTdinero5"},
			{src: "transfDinero6.jpg", id: "vistaTdinero6"},
			{src: "btnColores.jpg", id: "btnColor"}
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
			 x: 20, y: 236, scaleX:210, scaleY:32, alpha: alphaBotones
		})

		conteLogin.x = 0;

		conteLogin.addChild(btnSiguiente);

		btnSiguiente.on("click", cuentas);

		guia.x = 200; guia.y = 253;
		conteLogin.addChild(guia);
		stage.update();

        createjs.Ticker.setFPS(30);
        createjs.Ticker.addEventListener("tick", stage);


		stage.addChild(conteLogin);
		stage.removeChild(conteUbicanos);
		stage.removeChild(conteOperaciones);
		stage.removeChild(conteCuentas);
		stage.removeChild(conteSeguridad);
		stage.removeChild(conteMenu);
	}

	function cuentas() {

		tipoDeCuenta = 1;

		vista2 = new createjs.Bitmap(preload.getResult("vista2"));
		conteCuentas.addChild(vista2);

		ahorroS = new createjs.Bitmap(preload.getResult("btn")).set({
			 cursor: "pointer",
			 x: 255, y: 70, scaleX: 233, scaleY: 44, alpha: alphaBotones
		});
		agilS = new createjs.Bitmap(preload.getResult("btn")).set({
			 cursor: "pointer",
			 x: 255, y: 120, scaleX: 233, scaleY: 50, alpha: alphaBotones
		});
		amex = new createjs.Bitmap(preload.getResult("btn")).set({
			 cursor: "pointer",
			 x: 255, y: 180, scaleX: 233, scaleY: 44, alpha: alphaBotones
		});

		conteCuentas.addChild(ahorroS);
		conteCuentas.addChild(agilS);
		conteCuentas.addChild(amex);

		vista2.x = 250;

		conteCuentas.x = 0;

		console.log(animarMenu);

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

			conteCuentas.removeChild(btnColorsito);
			conteCuentas.removeChild(btnColor);
			conteCuentas.removeChild(vista4);

			vista3 = new createjs.Bitmap(preload.getResult("vista3"));
			btnNumCuentas = new createjs.Bitmap(preload.getResult("btn")).set({
			 cursor: "pointer",
			 x: 542, y: 60, scaleX: 120, scaleY: 20, alpha: alphaBotones
			});

			if($os=='android'){
				btnAtras1 = new createjs.Bitmap(preload.getResult("btn")).set({cursor: "pointer",x: 500, y:-50, scaleX: 30, scaleY: 32, alpha: alphaBotones});
			}else{
				btnAtras1 = new createjs.Bitmap(preload.getResult("btn")).set({cursor: "pointer",x: 500, y:0, scaleX: 30, scaleY: 32, alpha: alphaBotones});
			}

			btnComp = new createjs.Bitmap(preload.getResult("btn")).set({cursor: "pointer",x: 715, y:0, scaleX: 35, scaleY: 32, alpha: alphaBotones});

			conteCuentas.addChild(vista3);
			conteCuentas.addChild(btnNumCuentas);
			conteCuentas.addChild(btnComp);
			conteCuentas.addChild(btnAtras1);

			conteCuentas.x = -500;
			vista3.x = 500;

			guia.x = 735; guia.y = 17; 
			conteCuentas.addChild(guia);

			

			btnComp.on("click", cuentasEscena3);
			btnNumCuentas.on("click", colores);

			function cuentasEscena3(){

				vista4 = new createjs.Bitmap(preload.getResult("vista4")).set({
				 cursor: "pointer"
				});

				conteCuentas.addChild(vista4);

				vista4.x = 500;


				vista4.on("click", cuentasEscena2);
			}
		}

		function colores () {

			btnColor = new createjs.Bitmap(preload.getResult("btnColor"))
			btnColorsito = new createjs.Bitmap(preload.getResult("btn")).set({
			 cursor: "pointer",
			 x: 500, y: 0, scaleX: 250, scaleY: 426, alpha: alphaBotones
			});

			btnColor.x = 542; btnColor.y = 60;

			conteCuentas.addChild(btnColorsito);
			conteCuentas.addChild(btnColor);

			console.log("Tipo de cuenta ---->    " + tipoDeCuenta);

			switch (tipoDeCuenta){
				case 1: btnColorsito.on("click", cuentasEscena2); break;
				case 2: btnColorsito.on("click", cuentasEscena2agil); break;
				case 3: btnColorsito.on("click", cuentasEscena2amex); break;
			}
		}
		function cuentasEscena2agil(){

			conteCuentas.removeChild(btnColorsito);
			conteCuentas.removeChild(btnColor);

			tipoDeCuenta =2;

			vista3 = new createjs.Bitmap(preload.getResult("ahorroAsoles"));
			btnNumCuentas = new createjs.Bitmap(preload.getResult("btn")).set({
			 cursor: "pointer",
			 x: 542, y: 70, scaleX: 80, scaleY: 20, alpha: alphaBotones
			});
			btnAtras2 = new createjs.Bitmap(preload.getResult("btn")).set({
			 cursor: "pointer",
			 x: 500, y: 0, scaleX: 30, scaleY: 32, alpha: alphaBotones
			});
			btnComp = new createjs.Bitmap(preload.getResult("btn")).set({
			 cursor: "pointer",
			 x: 715, y: 0, scaleX: 35, scaleY: 32, alpha: alphaBotones
			});

			conteCuentas.addChild(vista3);
			conteCuentas.addChild(btnNumCuentas);
			conteCuentas.addChild(btnComp);
			conteCuentas.addChild(btnAtras2);

			conteCuentas.x = -500;
			vista3.x = 500;

			guia.x = 735; guia.y = 17; guia.alpha = 0.3;
			conteCuentas.addChild(guia);

			btnComp.on("click", cuentasEscena3);
			btnNumCuentas.on("click", colores);

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

			conteCuentas.removeChild(btnColorsito);
			conteCuentas.removeChild(btnColor);

			tipoDeCuenta =3;

			vista3 = new createjs.Bitmap(preload.getResult("aAmex"));
			btnNumCuentas = new createjs.Bitmap(preload.getResult("btn")).set({
			 cursor: "pointer",
			 x: 542, y: 70, scaleX: 150, scaleY: 20, alpha: alphaBotones
			});
			btnAtras3 = new createjs.Bitmap(preload.getResult("btn")).set({
			 cursor: "pointer",
			 x: 500, y: 0, scaleX: 30, scaleY: 32, alpha: alphaBotones
			});
			btnComp = new createjs.Bitmap(preload.getResult("btn")).set({
			 cursor: "pointer",
			 x: 715, y: 0, scaleX: 35, scaleY: 32, alpha: alphaBotones
			});

			conteCuentas.addChild(vista3);
			conteCuentas.addChild(btnNumCuentas);
			conteCuentas.addChild(btnComp);
			conteCuentas.addChild(btnAtras3);

			conteCuentas.x = -500;
			vista3.x = 500;

			guia.x = 735; guia.y = 17; guia.alpha = 0.3;
			conteCuentas.addChild(guia);

			btnComp.on("click", cuentasEscena3);
			btnNumCuentas.on("click", colores);

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
				 x: 5, y: 33, scaleX: 246, scaleY: 46, alpha: alphaBotones
				});

		if ($os == 'android') {
			prr = new createjs.Bitmap(preload.getResult("btn")).set({
					 cursor: "pointer",
					 x: 5, y: 82, scaleX:246, scaleY: 47, alpha: alphaBotones
					});
			transfDinero = new createjs.Bitmap(preload.getResult("btn")).set({
					 cursor: "pointer",
					 x: 5, y: 134, scaleX:246, scaleY: 47, alpha: alphaBotones
					});
		} else{
			prr = new createjs.Bitmap(preload.getResult("btn")).set({
					 cursor: "pointer",
					 x: 5, y: 88, scaleX:246, scaleY: 47, alpha: alphaBotones
					});
			transfDinero = new createjs.Bitmap(preload.getResult("btn")).set({
					 cursor: "pointer",
					 x: 5, y: 145, scaleX:246, scaleY: 47, alpha: alphaBotones
					});
		};

		

		conteOperaciones.addChild(prr);
		conteOperaciones.addChild(transfDinero);
		conteOperaciones.addChild(btnPtajeta);

		btnPtajeta.on("click", OperacionTarjeta);
		prr.on("click", OperacionesVista1);
		transfDinero.on("click", operacionesTransferir1);

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

			if ($os == 'android') {
				pt1 = new createjs.Bitmap(preload.getResult("btn")).set({
				 cursor: "pointer",
				 x: 1005, y: 56, scaleX:245, scaleY:49, alpha: alphaBotones
				});
				pt2 = new createjs.Bitmap(preload.getResult("btn")).set({
				 cursor: "pointer",
				 x: 1005, y: 130, scaleX:245, scaleY:49, alpha: alphaBotones
				});
			} else{
				pt1 = new createjs.Bitmap(preload.getResult("btn")).set({
				 cursor: "pointer",
				 x: 1005, y: 67, scaleX:245, scaleY:49, alpha: alphaBotones
				});
				pt2 = new createjs.Bitmap(preload.getResult("btn")).set({
				 cursor: "pointer",
				 x: 1005, y: 153, scaleX:245, scaleY:49, alpha: alphaBotones
				});
			};

			

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

			if ($os == 'android') {
				as2 = new createjs.Bitmap(preload.getResult("btn")).set({
				 cursor: "pointer",
				 x: 1255, y: 60, scaleX:245, scaleY:40, alpha: alphaBotones
				});
				aa2 = new createjs.Bitmap(preload.getResult("btn")).set({
				 cursor: "pointer",
				 x: 1255, y: 108, scaleX:245, scaleY:45, alpha: alphaBotones
				});
			} else{
				as2 = new createjs.Bitmap(preload.getResult("btn")).set({
				 cursor: "pointer",
				 x: 1255, y: 73, scaleX:245, scaleY:40, alpha: alphaBotones
				});
				aa2 = new createjs.Bitmap(preload.getResult("btn")).set({
				 cursor: "pointer",
				 x: 1255, y: 130, scaleX:245, scaleY:45, alpha: alphaBotones
				});
			};


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

			if ($os == 'android') {
				btnSiguiente2 = new createjs.Bitmap(preload.getResult("btn")).set({
				 cursor: "pointer",
				 x: 1520, y: 227, scaleX:210, scaleY:28, alpha: alphaBotones
				});
			} else{
				console.log("estoy a ki ---")
				btnSiguiente2 = new createjs.Bitmap(preload.getResult("btn")).set({
				 cursor: "pointer",
				 x: 1525, y: 320, scaleX:205, scaleY:35, alpha: alphaBotones
				});
			};

			opt3.x = 1500;
			conteOperaciones.x = -1500;

			guia.x = 1700; guia.y = 241;

			conteOperaciones.addChild(opt3);
			conteOperaciones.addChild(btnSiguiente2);
			conteOperaciones.addChild(guia);

			btnSiguiente2.on("click", OperacionTarjeta4);
		}

		function OperacionTarjeta4(){
			opt4 = new createjs.Bitmap(preload.getResult("vistaT4"));

			if ($os == 'android') {
				btnSiguiente3 = new createjs.Bitmap(preload.getResult("btn")).set({
				 cursor: "pointer",
				 x: 1770, y: 351, scaleX:210, scaleY:28, alpha: alphaBotones
				});
			} else{
				btnSiguiente3 = new createjs.Bitmap(preload.getResult("btn")).set({
				 cursor: "pointer",
				 x: 1780, y: 340, scaleX:205, scaleY:32, alpha: alphaBotones
				});
			};


			guia.x = 1950; guia.y = 367;

			opt4.x = 1750;
			conteOperaciones.x = -1750;

			conteOperaciones.addChild(opt4);
			conteOperaciones.addChild(btnSiguiente3);
			conteOperaciones.addChild(guia);

			btnSiguiente3.on("click", OperacionTarjeta5);
		}

		function OperacionTarjeta5(){
			opt5 = new createjs.Bitmap(preload.getResult("vistaT5"));

			opt5.x = 2000;
			conteOperaciones.x = -2000;

			conteOperaciones.addChild(opt5);


			var t=setTimeout(Operaciones, 2000);
		}

		function OperacionesVista1(){

			opeVista2 = new createjs.Bitmap(preload.getResult("opeVista2"));
			conteOperaciones.addChild(opeVista2);

			opeVista2.x = 250;
			conteOperaciones.x = -250;

			if ($os == 'android') {
				btnSiguiente = new createjs.Bitmap(preload.getResult("btn")).set({
				 cursor: "pointer",
				 x: 270, y: 346, scaleX:210, scaleY:32, alpha: alphaBotones
				});
			} else{
				btnSiguiente = new createjs.Bitmap(preload.getResult("btn")).set({
				 cursor: "pointer",
				 x: 275, y: 340, scaleX:198, scaleY:32, alpha: alphaBotones
				});
			};

			conteOperaciones.addChild(btnSiguiente);

			guia.x = 450; guia.y = 363;
			conteOperaciones.addChild(guia);

			btnSiguiente.on("click", OperacionesVista2);
		}

		function OperacionesVista2(){

			opeVista3 = new createjs.Bitmap(preload.getResult("opeVista3"));
			conteOperaciones.addChild(opeVista3);

			if ($os == 'android') {
				ahorroS = new createjs.Bitmap(preload.getResult("btn")).set({
				 cursor: "pointer",
				 x: 505, y: 60, scaleX: 233, scaleY: 44, alpha: alphaBotones
				});
			} else{
				ahorroS = new createjs.Bitmap(preload.getResult("btn")).set({
				 cursor: "pointer",
				 x: 505, y: 65, scaleX: 233, scaleY: 44, alpha: alphaBotones
				});
			};

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

			if ($os == 'android') {
				confirmarPago = new createjs.Bitmap(preload.getResult("btn")).set({
				 cursor: "pointer",
				 x: 520, y: 352, scaleX: 210, scaleY: 28, alpha: alphaBotones
				});
			} else{
				confirmarPago = new createjs.Bitmap(preload.getResult("btn")).set({
				 cursor: "pointer",
				 x: 530, y: 340, scaleX: 190, scaleY: 28, alpha: alphaBotones
				});
			};

			
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

			opeVista5.x = 750;
			conteOperaciones.x = -750;

			var t=setTimeout(Operaciones, 2000);

    	}

    	function operacionesTransferir1 () {
    		otd1 = new createjs.Bitmap(preload.getResult("vistaTdinero1"));

    		if ($os == 'android') {
				btnTdinero1 = new createjs.Bitmap(preload.getResult("btn")).set({
				cursor: "pointer",
				x: 2250, y: 58,scaleX: 250, scaleY: 49, alpha: alphaBotones
				});
				btnTdinero2 = new createjs.Bitmap(preload.getResult("btn")).set({
				cursor: "pointer",
				x: 2250, y: 150,scaleX: 250, scaleY: 49, alpha: alphaBotones
				});
			} else{
				btnTdinero1 = new createjs.Bitmap(preload.getResult("btn")).set({
				cursor: "pointer",
				x: 2250, y: 70,scaleX: 250, scaleY: 49, alpha: alphaBotones
				});
				btnTdinero2 = new createjs.Bitmap(preload.getResult("btn")).set({
				cursor: "pointer",
				x: 2250, y: 130,scaleX: 250, scaleY: 49, alpha: alphaBotones
				});
			};
			
    		otd1.x = 2250;
			conteOperaciones.x = -2250;

			conteOperaciones.addChild(otd1);
			conteOperaciones.addChild(btnTdinero1);
			conteOperaciones.addChild(btnTdinero2);


			btnTdinero1.on("click", operacionesTransferir2);
			btnTdinero2.on("click", operacionesTransferir2);
    	}

    	function operacionesTransferir2 () {
    		otd2 = new createjs.Bitmap(preload.getResult("vistaTdinero2"));

    		if ($os == 'android') {
				btnTdinero3 = new createjs.Bitmap(preload.getResult("btn")).set({
				cursor: "pointer",
				x: 2500, y: 56,scaleX: 250, scaleY: 45, alpha: alphaBotones
				});
				btnTdinero4 = new createjs.Bitmap(preload.getResult("btn")).set({
				cursor: "pointer",
				x: 2500, y: 115,scaleX: 250, scaleY: 47, alpha: alphaBotones
				});
			} else{
				btnTdinero3 = new createjs.Bitmap(preload.getResult("btn")).set({
				cursor: "pointer",
				x: 2500, y: 70,scaleX: 250, scaleY: 45, alpha: alphaBotones
				});
				btnTdinero4 = new createjs.Bitmap(preload.getResult("btn")).set({
				cursor: "pointer",
				x: 2500, y: 160,scaleX: 250, scaleY: 47, alpha: alphaBotones
				});
			};

    		otd2.x = 2500;
			conteOperaciones.x = -2500;

			conteOperaciones.addChild(otd2);
			conteOperaciones.addChild(btnTdinero3);
			conteOperaciones.addChild(btnTdinero4);


			btnTdinero3.on("click", operacionesTransferir3);
			btnTdinero4.on("click", operacionesTransferir3);
    	}

    	function operacionesTransferir3 () {
    		otd3 = new createjs.Bitmap(preload.getResult("vistaTdinero3"));
			btnTdinero5 = new createjs.Bitmap(preload.getResult("btn")).set({
			cursor: "pointer",
			x: 2770, y: 347,scaleX:210, scaleY:28, alpha: alphaBotones
			});

    		otd3.x = 2750;
			conteOperaciones.x = -2750;
		    guia.x = 2950; guia.y = 360;

			conteOperaciones.addChild(otd3);
			conteOperaciones.addChild(btnTdinero5);
			conteOperaciones.addChild(guia);


			btnTdinero5.on("click", operacionesTransferir4);
    	}
    	function operacionesTransferir4() {
    		otd4 = new createjs.Bitmap(preload.getResult("vistaTdinero4"));

    		if ($os == 'android') {
				btnTdinero6 = new createjs.Bitmap(preload.getResult("btn")).set({
				cursor: "pointer",
				x: 3020, y: 176,scaleX:210, scaleY:28, alpha: alphaBotones
				});
			} else{
				btnTdinero6 = new createjs.Bitmap(preload.getResult("btn")).set({
				cursor: "pointer",
				x: 3028, y: 193,scaleX:200, scaleY:28, alpha: alphaBotones
				});
			};

    		otd4.x = 3000;
			conteOperaciones.x = -3000;
		    guia.x = 3200; guia.y = 210;

			conteOperaciones.addChild(otd4);
			conteOperaciones.addChild(btnTdinero6);
			conteOperaciones.addChild(guia);


			btnTdinero6.on("click", operacionesTransferir5);
    	}
    	function operacionesTransferir5() {
    		otd5 = new createjs.Bitmap(preload.getResult("vistaTdinero5"));

    		if ($os == 'android') {
				btnTdinero7 = new createjs.Bitmap(preload.getResult("btn")).set({
				cursor: "pointer",
				x: 3270, y: 352,scaleX:210, scaleY:28, alpha: alphaBotones
				});
			} else{
				btnTdinero7 = new createjs.Bitmap(preload.getResult("btn")).set({
				cursor: "pointer",
				x: 3278, y: 335,scaleX:200, scaleY:32, alpha: alphaBotones
				});
			};

    		otd5.x = 3250;
			conteOperaciones.x = -3250;
		    guia.x = 3450; guia.y = 353;

			conteOperaciones.addChild(otd5);
			conteOperaciones.addChild(btnTdinero7);
			conteOperaciones.addChild(guia);


			btnTdinero7.on("click", operacionesTransferir6);
    	}
    	function operacionesTransferir6 () {
    		otd6 = new createjs.Bitmap(preload.getResult("vistaTdinero6"));

			otd6.x = 3500;
			conteOperaciones.x = -3500;

			conteOperaciones.addChild(otd6);

			var t=setTimeout(Operaciones, 2000);
    	}
	}

	function Ubicanos(){
		ubicacion1 = new createjs.Bitmap(preload.getResult("ubicacion1"));
		conteUbicanos.addChild(ubicacion1);
		btnTienda = new createjs.Bitmap(preload.getResult("btn")).set({
		cursor: "pointer",
		y: 89,scaleX: 250, scaleY: 49, alpha: alphaBotones
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
				x:259, y:346, scaleX: 112, scaleY: 33, alpha: alphaBotones
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
		btnSiguienteSeguridad = new createjs.Bitmap(preload.getResult("btn")).set({
				cursor: "pointer",
				x:30, y:148, scaleX:190, scaleY:33, alpha: alphaBotones
			});

		conteSeguridad.x = 0;		

		conteSeguridad.addChild(seg1);
		conteSeguridad.addChild(btnSiguienteSeguridad);

		btnSiguienteSeguridad.on("click", login);

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