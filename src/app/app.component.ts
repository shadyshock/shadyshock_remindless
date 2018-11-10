import { Component } from '@angular/core';

@Component({
  selector: "crx-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "crx";
  public toDo = "What's your focus today..!";
  public _cards = [
    {
      toDo:'hggjhjh',
      id:'45443',
      checked:false,
      hoveredInput : false
    },
    {
      toDo: 'hggjhjh',
      id: '45443',
      checked: false,
      hoveredInput : false
    },
    {
      toDo: 'hggjhjh',
      id: '45443',
      checked: false,
      hoveredInput : false
    }
  ];


  /**
   * Method to update the hovered todo Item
   * @param _toDoItem
   * @param _toDoId
   */
  _updateToDoList(_toDoItem,_toDoId) {
    try {
      this._cards[_toDoId]["toDo"] = _toDoItem;
    } catch (error) {
      console.log(error);
    }
  }
}
