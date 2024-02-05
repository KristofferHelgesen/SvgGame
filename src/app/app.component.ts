import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public viewPort: string = "0 0 1920 1080";

  private gameIntervalID: number = 0;
  private colorIntervalID: number = 0;

  public playerOneX: number = 600;
  public playerOneY: number = 200;

  public bossX: number = 800;
  public bossY: number = 200;

  public bossColor = "black";

  ngOnInit(): void {
    if (confirm("Want to play a game? Hit the boss! Ready ?") === true) {
     this.initGame();
    }
  }


  initGame(){
      this.gameIntervalID = setInterval(() => {
        this.bossX = this.randomNumber(this.bossX);
        this.bossY = this.randomNumber(this.bossY);
        this.hasWon();
      }, 1000);

      this.colorIntervalID = setInterval(() => {
        this.bossColor = this.randomColor();
      }, 10);
  }

  hasWon(){
    if(this.bossX === this.playerOneX && this.bossY === this.playerOneY){
      alert("Congrats, you have slayed a rectangular monster boss 🤣");
      clearInterval(this.gameIntervalID);
      clearInterval(this.colorIntervalID);
      this.askToPlayAgain();
    }
  }
  @HostListener('document:keypress', ['$event'])
  movePlayer(event:KeyboardEvent) {
    switch (event.key){
      case "w":
        this.playerOneY = this.playerOneY - 10;
        break;
      case "s":
        this.playerOneY = this.playerOneY + 10;
        break;
      case "a":
        this.playerOneX = this.playerOneX - 10;
        break;
      case "d":
        this.playerOneX = this.playerOneX + 10;
        break;
      default:
        alert("Use the wasd keys to move");
    }
    this.hasWon();

  }

  private randomNumber(number:number){
    return Math.random() > 0.5 ?  number + 10 : number - 10
  }

  private askToPlayAgain() {
    if (confirm("Want to play again ?") === true) {
     this.initGame();
    }
  }

  private randomColor() {
    const o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
  }
}
