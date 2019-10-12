var player1Color = 'rgb(255, 0, 0)';
var player2Color = 'rgb(0,180,0)';
var game_on = true;
var table = $('table tr');
function reportWin(num) {
  //$('p').text("Player "+num+" has won!").fadeIn('slow');

  /*My taaha is sexy. I wanna fuck her so hard that she is gonna feel sooo satisfied. */
  $('p').html("<span class=\"w3-animate-opacity\">"+"Player "+num+" has won!"+"</span>");
  $('td').unbind(); //Whatever the result may be, no symbols will be allowed to put on the squares after finishing a game unless the page is reloaded and a new game will start. 

}
function changeText(rowIndex,colIndex,txt,color) {
  
  //table.eq(rowIndex).find('td').eq(colIndex).text(txt).css('color',color).fadeIn(5000);

  /*My taaha is sexy. I wanna fuck her so hard that she is gonna feel sooo satisfied. */
  table.eq(rowIndex).find('td').eq(colIndex).html("<span class=\"w3-animate-opacity\">"+txt+"</span>").css('color',color);
}
function returnText(rowIndex,colIndex) {
  return table.eq(rowIndex).find('td').eq(colIndex).text();
}
function checkTd(rowIndex,colIndex) {
  var txt = returnText(rowIndex,colIndex);
  if(txt==="X"){
    return 1;
  } else if (txt==="O") {
    return 2;
  }else{
    return 0;
  }
}
function textMatchCheck(one,two,three){
  return (one===two && one===three && (one==="X" || one === "O" ) && one !== undefined);
}
function winCheck(){
  if(textMatchCheck(returnText(0,0),returnText(1,0),returnText(2,0))){
    console.log("verti");
    reportWin(checkTd(0,0));
    return 1;
  }else if (textMatchCheck(returnText(0,1),returnText(1,1),returnText(2,1))) {
    console.log("verti");
    reportWin(checkTd(0,1));
    return 1;
  }else if(textMatchCheck(returnText(0,2),returnText(1,2),returnText(2,2))){
    console.log("verti");
    reportWin(checkTd(0,2));
    return 1;
  }else if(textMatchCheck(returnText(0,0),returnText(0,1),returnText(0,2))){
  console.log("horiz");
  reportWin(checkTd(0,0));
  return 1;
}else if (textMatchCheck(returnText(1,0),returnText(1,1),returnText(1,2))) {
   console.log("horiz");
   reportWin(checkTd(1,0));
   return 1;
 }else if(textMatchCheck(returnText(2,0),returnText(2,1),returnText(2,2))){
   console.log("horiz");
   reportWin(checkTd(2,0));
   return 1;
 }else if(textMatchCheck(returnText(0,0),returnText(1,1),returnText(2,2))){
   console.log("diag");
   reportWin(checkTd(0,0));
   return 1;
 }else if(textMatchCheck(returnText(0,2),returnText(1,1),returnText(2,0))){
   console.log("diag");
   reportWin(checkTd(0,2));
   return 1;
 }else{
   return 0;
 }

}
var currentPlayer = 1;
$('p').text("Player "+currentPlayer+"\'s turn");
$('td').click(function(){
  var col = $(this).parent().children().index($(this));
  var row = $(this).parent().parent().children().index($(this).parent());
  console.log('Row: ' + row + ', Column: ' + col);
    var c=winCheck();
    if(checkTd(row,col) === 0) {
      if(currentPlayer===1){
        changeText(row,col,"X",player1Color);
         c=winCheck();
      }else{
        changeText(row,col,"O",player2Color);
         c=winCheck();
      }
      currentPlayer = currentPlayer* -1;
      if(c===0)
      { if(checkTd(0,0)!==0 && checkTd(0,1)!==0 && checkTd(0,2)!==0 && checkTd(1,0)!==0 && checkTd(1,1)!==0 && checkTd(1,2)!==0 && checkTd(2,0)!==0 && checkTd(2,1)!==0 && checkTd(2,2)!==0){
          
        //$('p').text("It's a draw");
          
          /*My taaha is sexy. I wanna fuck her so hard that she is gonna feel sooo satisfied. */
          $('p').html("<span class=\"w3-animate-opacity\">"+"It's a draw"+"</span>");
          $('td').unbind(); //Whatever the result may be, no symbols will be allowed to put on the squares after finishing a game unless the page is reloaded and a new game will start. 

        }else if(currentPlayer===1){

          //$('p').text("Player 1\'s turn");

          /*My taaha is sexy. I wanna fuck her so hard that she is gonna feel sooo satisfied. */
          $('p').html("<span class=\"w3-animate-opacity\">"+"Player 1\'s turn"+"</span>");
        }else if(currentPlayer===-1){

        //$('p').text("Player 2\'s turn");

        /*My taaha is sexy. I wanna fuck her so hard that she is gonna feel sooo satisfied. */
        $('p').html("<span class=\"w3-animate-opacity\">"+"Player 2\'s turn"+"</span>");
      }
      }
    }
});
