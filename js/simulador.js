
var partes, vista1, contenidos, btnSiguiente, vista2, guia, guiaO, ahorroS;
var path = "img/";
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

console.log("Entro------");

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
			{src: "simulador/bSiguiente.jpg", id: "bSiguiente"},
			{src: "simulador/guia.png", id: "guiaO"},
			{src: "simulador/ahorroSueldoSoles.jpg", id: "ahorroS"}
		];

		preload = new createjs.LoadQueue(true, "test/");

		// Use this instead to use tag loading
		//preload = new createjs.PreloadJS(false);

		preload.on("progress", handleProgress);
		preload.on("complete", handleComplete);
		preload.on("fileload", handleFileLoad);
		preload.loadManifest(manifest, true, path);

		createjs.Ticker.setFPS(30);

		contenidos = new createjs.Container();
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
		console.log(event.item);
		partes.push(item)

		inicio();
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
		var circle = new createjs.Shape();
		circle.graphics.beginFill("#e2e2e2").drawCircle(0, 0, 10);
		circle.alpha = 0.3;
		
		guiaO = new createjs.Bitmap(preload.getResult("guiaO")).set({
			 scaleX: 0.2, scaleY: 0.2, 
			 x: -11, y: -11,
			 //scaleX: 0.3, scaleY: 0.3, 
			 //x: -17, y: -17,
			 alpha: 0.5
		});

		createjs.Tween.get(guiaO, {loop: true}).to({scaleX: 0.4, scaleY: 0.4, alpha: 0, x: -23, y: -23}, 800, createjs.Ease.getPowInOut(4))

		guia.addChild(guiaO);

		guia.addChild(circle);
	}
	function inicio(){
		animGuia();

		vista1 = new createjs.Bitmap(preload.getResult("login"));
		contenidos.addChild(vista1);

		btnSiguiente = new createjs.Bitmap(preload.getResult("bSiguiente")).set({
			 cursor: "pointer",
			 x: 20, y: 236,
		});

		btnSiguiente.on("click", segundaVista);

		contenidos.addChild(btnSiguiente);

		stage.addChild(contenidos);

		guia.x = 200; guia.y = 253;
		contenidos.addChild(guia);

        createjs.Ticker.setFPS(30);
        createjs.Ticker.addEventListener("tick", stage)
	}

	function segundaVista () {
		vista2 = new createjs.Bitmap(preload.getResult("vista2"));
		contenidos.addChild(vista2);

		ahorroS = new createjs.Bitmap(preload.getResult("ahorroS")).set({
			 cursor: "pointer",
			 x: 255, y: 70,
		});

		contenidos.addChild(ahorroS);

		vista2.x = 250;

		guia.x = 450; guia.y = 93;
		contenidos.addChild(guia);

		createjs.Tween.get(contenidos, {loop: false}).to({x: -250}, 1000, createjs.Ease.getPowInOut(4))
	}
});