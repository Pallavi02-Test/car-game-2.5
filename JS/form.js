class Form{
    constructor(){
        this.input=createInput("");
        this.enterName=createElement('h3');
        this.button=createButton("Play");
        this.greeting=createElement('h3');
        this.title=createElement('h2');
        this.reset=createButton("Reset");
    }

    hide(){
        this.input.hide();
        this.enterName.hide();
        this.button.hide();
        this.greeting.hide();
        this.title.hide();
    }
    display(){
        this.title.html("Car Racing Game");
        this.title.position(displayWidth/2-50,0);
        this.enterName.html("Enter Your Name:");
        this.enterName.position(displayWidth/2-250,displayHeight/2-60)
        this.input.position(displayWidth/2-20,displayHeight/2-40);
        this.button.position(displayWidth/2+50,displayHeight/2);
        this.reset.position(displayWidth-100,20)
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            this.enterName.hide();
            player.name=this.input.value();
            playerCount=playerCount+1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello "+player.name)
            this.greeting.position(displayWidth/2-40,displayHeight/4);
        });

        this.reset.mousePressed(()=>{
            player.updateCount(0)
            game.update(0)
        })
    }
}