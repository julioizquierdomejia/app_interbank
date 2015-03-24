(function (window) {
    // The class now receives parameters that are passed to the initalize() method (the constructor).
        function Guia(posX,posY)  {
        this.initialize(posX,posY);
    }
     
    Guia.prototype = new Container();
    Guia.prototype.Container_initialize = Guia.prototype.initialize;
    Guia.prototype.Container_tick = Guia.prototype._tick; 
     
    //The initialize method register the class variables with the pased parameters
    Guia.prototype.initialize = function (iconWidth,imgSrc,color,titleText) {
        this.Container_initialize();
        /*this._iconWidth = iconWidth;
        this._imgSrc = imgSrc; 
        this._color = color; 
        this._titleText = titleText;  
        console.log("Icon initialized : " + this._iconWidth+" - "+this._imgSrc+" - "+this._color+" - "+this._titleText);*/
        var circle = new createjs.Shape();
        circle.graphics.beginFill("#e2e2e2").drawCircle(0, 0, 10);
        circle.alpha = 0.5;
        
        guiaO = new createjs.Bitmap(preload.getResult("guiaO")).set({
             scaleX: 0.15, scaleY: 0.15, 
             x: posX, y: posY,
             //scaleX: 0.3, scaleY: 0.3, 
             //x: -17, y: -17,
             alpha: 0.5
        });

        createjs.Tween.get(guiaO, {loop: true}).to({scaleX: 0.4, scaleY: 0.4, alpha: 0, x: -23, y: -23}, 800, createjs.Ease.getPowInOut(4))

        this.addChild(guiaO);
        this.addChild(circle);
    }
     
     Guia.prototype._tick = function () {
        this.Container_tick();
               console.log("Icon Ticked");
    }
    window.Guia= Guia;
} (window));