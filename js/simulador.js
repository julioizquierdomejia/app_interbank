
var partes, vista1, conteCuentas, conteLogin, opeVista1, conteOperaciones, btnSiguiente, vista2, guia, guiaO, ahorroS, btnCuentas, btnCuentasOver, btnOperaciones, opeVista2, btnOperacionesOver, btnUs, conteMenu, vista3, btnComp, vista4, btnCorreo, mandarEmail, btnNumCuentas, prr;
var path = "img/";
var myGuia;
$(document).ready(function(){
	var loaderBar;
	var stage;
	var bar;
	var imageContainer;
	var currentImage;
	var loaderWidth;
	var loaderColor;
	var borderPadding;
	var preload;
	var oldItem;


	partes = new Array();

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
			{src: "simulador/bSiguiente.jpg", id: "btnSiguiente"},
			{src: "simulador/guia.png", id: "guiaO"},
			{src: "simulador/ahorroSueldoSoles.jpg", id: "ahorroS"},
			{src: "simulador/cuentas.jpg", id: "btnCuentas"},
			{src: "simulador/cuentasOver.jpg", id: "btnCuentasOver"},
			{src: "simulador/operaciones.jpg", id: "btnOperaciones"},
			{src: "simulador/operacionesOver.jpg", id: "btnOperacionesOver"},
			{src: "simulador/us.jpg", id: "btnUs"},
			{src: "simulador/compartir-2.jpg", id: "vista3"},
			{src: "simulador/btnCompartir.jpg", id: "btnComp"},
			{src: "simulador/compartir-3.jpg", id: "vista4"},
			{src: "simulador/btnCorreo.jpg", id: "btnCorreo"},
			{src: "simulador/btnNumCuentas.jpg", id: "btnNumCuentas"},
			{src: "simulador/mandarEmail.jpg", id: "mandarEmail"},
			{src: "simulador/operacionesPagoRec.jpg", id: "opeVista1"},
			{src: "simulador/PagarRecibosYrecargas.jpg", id: "prr"},
			{src: "simulador/operacionesPagoRec2.jpg", id: "opeVista2"},

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
		var item = event.item;
		partes.push(item)

		login();
		/*var image = event.result;
		console.log(event.target);
		var w = image.width;
		var h = image.height;

		var bmp = new createjs.Bitmap(image).set({
			 scaleX: 1, scaleY: 1,
			 regX: w / 2, regY: h / 2,
			 //rotation: Math.random() * 16 - 8,
			 //cursor: "pointer",
			 x: 0, y: 0
		});
		
		var container = new createjs.Container();
		container.addChild(bmp);
		imageContainer.addChild(container);
		stage.update();*/
	}

	function handleTweenChange(tween) {
		stage.update();
	}

	function tweenUpComplete(event) {
		imageContainer.addChildAt(currentItem, 0);
	}

	function handleComplete(event) {
		loaderBar.visible = false;
		stage.update();
	}

	init();

	
	function animGuia () {
		console.log("animGuia");
		var circle = new createjs.Shape();
		circle.graphics.beginFill("#e2e2e2").drawCircle(0, 0, 10);
		circle.alpha = 0.5;
		
		guiaO = new createjs.Bitmap(preload.getResult("guiaO")).set({
			 scaleX: 0.15, scaleY: 0.15, 
			 x: -8, y: -8,
			 //scaleX: 0.3, scaleY: 0.3, 
			 //x: -17, y: -17,
			 alpha: 0.5
		});

		createjs.Tween.get(guiaO, {loop: true}).to({scaleX: 0.4, scaleY: 0.4, alpha: 0, x: -23, y: -23}, 800, createjs.Ease.getPowInOut(4))

		guia.addChild(guiaO);
		guia.addChild(circle);	
	}
	function login(){
		animGuia();

		vista1 = new createjs.Bitmap(preload.getResult("login"));
		conteLogin.addChild(vista1);

		btnSiguiente = new createjs.Bitmap(preload.getResult("btnSiguiente")).set({
			 cursor: "pointer",
			 x: 20, y: 236,
		});

		conteLogin.addChild(btnSiguiente);

		btnSiguiente.on("click", cuentas);

		stage.addChild(conteLogin);

		guia.x = 200; guia.y = 253;
		conteLogin.addChild(guia);
		stage.update();

        createjs.Ticker.setFPS(30);
        createjs.Ticker.addEventListener("tick", stage)

		
	}
	function cuentas() {
		vista2 = new createjs.Bitmap(preload.getResult("vista2"));
		conteCuentas.addChild(vista2);

		ahorroS = new createjs.Bitmap(preload.getResult("ahorroS")).set({
			 cursor: "pointer",
			 x: 255, y: 70,
		});

		conteCuentas.addChild(ahorroS);

		vista2.x = 250;

		guia.x = 450; guia.y = 93;
		conteCuentas.addChild(guia);

		//conteCuentas.x = 0;

		createjs.Tween.get(conteCuentas, {loop: false}).to({x: -250}, 700, createjs.Ease.getPowInOut(4));
		createjs.Tween.get(conteLogin, {loop: false}).to({x: -250}, 700, createjs.Ease.getPowInOut(4));

		ahorroS.on("click", cuentasEscena2);

		stage.addChild(conteCuentas);
		menu(1);

		function cuentasEscena2(){
			vista3 = new createjs.Bitmap(preload.getResult("vista3"));
			btnNumCuentas = new createjs.Bitmap(preload.getResult("btnNumCuentas")).set({
			 cursor: "pointer",
			 x: 161, y: 90,
			});
			btnComp = new createjs.Bitmap(preload.getResult("btnComp")).set({
			 cursor: "pointer",
			 x: 715, y: 0,
			});

			conteCuentas.addChild(vista3);
			conteCuentas.addChild(btnNumCuentas);
			conteCuentas.addChild(btnComp);

			conteCuentas.x = -500;
			vista3.x = 500;

			guia.x = 735; guia.y = 17; guia.alpha = 0.3;
			conteCuentas.addChild(guia);

			btnComp.on("click", cuentasEscena3);

			function cuentasEscena3(){

				vista4 = new createjs.Bitmap(preload.getResult("vista4"));

				btnCorreo = new createjs.Bitmap(preload.getResult("btnCorreo")).set({
				 cursor: "pointer",
				 x: 764, y: 163,
				});

				conteCuentas.addChild(vista4);
				conteCuentas.addChild(btnCorreo);

				vista4.x = 750;
				conteCuentas.x = -750;

				guia.x = 950; guia.y = 178;
				conteCuentas.addChild(guia);

				btnCorreo.on("click", cuentasEscena4);

				function cuentasEscena4 () {
					console.log("Entro escena 4")
					mandarEmail = new createjs.Bitmap(preload.getResult("mandarEmail"));

					conteCuentas.addChild(mandarEmail);
					conteCuentas.x = -1000

					mandarEmail.x = 1000;

					guia.x = 110; guia.y = 10; guia.alpha = 0.3;
					conteMenu.addChild(guia);

				}
			}
		}
	}
	function Operaciones(){
		menu(2);

		opeVista1 = new createjs.Bitmap(preload.getResult("opeVista1"));
		conteOperaciones.addChild(opeVista1);

		prr = new createjs.Bitmap(preload.getResult("prr")).set({
				 cursor: "pointer",
				 x: 5, y: 82,
				});

		conteOperaciones.addChild(prr);

		prr.on("click", Operaciones);

		stage.addChild(conteOperaciones);
		stage.removeChild(conteCuentas);


		//*createjs.Tween.get(conteCuentas, {loop: false}).to({x: -250}, 700, createjs.Ease.getPowInOut(4))

		//ahorroS.on("click", escena2);
	}
	function menu(op){
		stage.removeChild(conteMenu);
		switch(op){
			case 1:
				btnC = new createjs.Bitmap(preload.getResult("btnCuentasOver")).set({
				 cursor: "default",
				});
				btnO = new createjs.Bitmap(preload.getResult("btnOperaciones")).set({
				 cursor: "pointer",
				});
				btnO.on("click", Operaciones);
				break;
			case 2:
				btnO = new createjs.Bitmap(preload.getResult("btnOperacionesOver")).set({
				 cursor: "default",
				});
				btnC = new createjs.Bitmap(preload.getResult("btnCuentas")).set({
				 cursor: "pointer",
				});
				btnC.on("click", cuentas);
				break;
		}


		btnUs = new createjs.Bitmap(preload.getResult("btnUs"));

		conteMenu.addChild(btnC);
		conteMenu.addChild(btnO);
		conteMenu.addChild(btnUs);

		btnC.x = 0; btnC.y = 0;
		btnO.x = 58; btnO.y = 0;
		btnUs.x = 130; btnUs.y = 0;

		stage.addChild(conteMenu);

		conteMenu.y = 426;

		createjs.Tween.get(conteMenu, {loop: false}).wait(200).to({y:391}, 700, createjs.Ease.getPowInOut(4))
	}
});