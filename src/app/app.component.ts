import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  elementHeightArea = 90;
  movingPanelHeight = 200;


  movePanel(event: MouseEvent) {
    const maxMarginFromTop = (this.findOptionIndex(event.y) - 1) * this.elementHeightArea;
    const panelPosition = maxMarginFromTop - (this.movingPanelHeight / 2) + (this.elementHeightArea / 2);

    document.getElementById('moving-panel').style.marginTop = `${panelPosition.toString()}px`;
    document.getElementById('moving-panel').style.transition = 'margin 700ms';
  }


  findOptionIndex(yCoord: number) {


    for (let i = 0; i < 8; i++) {
      if (yCoord > i && yCoord < this.elementHeightArea * (i + 1)) {
        return i + 1;
      }
    }

  }

}
