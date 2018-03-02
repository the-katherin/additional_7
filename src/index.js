module.exports = function solveSudoku(matrix) {
var arr3i = 0;
var arr3j = 0;
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var numCount =0;
var newNum = [];
var filtered = [];
var filteredOne = [];
var filteredTwo = [];
var commonFilter =[];
var kaunt = 0;
var e;
var r;
var g;
var a;
var b;
var c;
var ro;
var co;
var nn;
var xx;
var yy;
var ww;
var qq;
var arr3e;
var arr3r;
var arr3ro;
var arr3co;
var empty;
var county;
var forHiddens;
var res = false;
var resu = false;
var first;
var second;
var alike;

function checkMatrix() {//пересмотреть
  for (e=0; e<9; e++) {
    for (r=0;r<9; e++) {
      if (matrix[e][r] ===0 || matrix[e][r].length === 2 || matrix[e][r].length === 3 || matrix[e][r].length === 4 || matrix[e][r].length === 5 || matrix[e][r].length === 6 ) {
        return true;
        }
    }
  }
}

function CheckValues () {
  var resu = false;
  ww=ro;
  qq=co;

  for(ro=0; ro<9; ro++) {
    for (co=0;co<9;co++) {
      if(matrix[ro][co].length>1) {
            for (var ro1=0; ro1<9; ro1++ ) { // РАЗНЫЕ СТРОКИ
                if (matrix[ro1][co].length === undefined) {
                  for (var bb=0; bb<matrix[ro][co].length; bb++) {
                      if(matrix[ro][co][bb]==matrix[ro1][co]) {

                        matrix[ro][co].splice(bb,1);

                        if(matrix[ro][co].length===1) {
                          matrix[ro][co] = matrix[ro][co][0];


                          resu = true;

                        }

                      }

                }
              }
            }
            for (var co1=0; co1<9; co1++ ) { // РАЗНЫЕ КОЛОНКИ
                if (matrix[ro][co1].length === undefined) {
                  for (bb=0; bb<matrix[ro][co].length; bb++) {
                      if(matrix[ro][co][bb]==matrix[ro][co1]) {

                        matrix[ro][co].splice(bb,1);

                        if(matrix[ro][co].length===1) {
                          matrix[ro][co] = matrix[ro][co][0];

                          resu = true;
                        }


                      }

                }
              }
            }
            if ((ro+1)%3===0) { // РАЗНЫЕ БЛОКИ
             arr3ro = ro+1;
             }
             else if ((ro+1)%3===2) {
               arr3ro = ro+2;
             }
             else {
               arr3ro = ro+3;
             }
             if ((co+1)%3===0) {
               arr3co = co+1;
               }
             else if ((co+1)%3===2) {
                 arr3co = co+2;
               }
               else {
                 arr3co = co+3;
               }
            for(var ro2=(arr3ro-3); ro2 < arr3ro; ro2++ ){
              for(var co2=(arr3co-3); co2<arr3co; co2++) {
                if (matrix[ro2][co2].length === undefined) {
                  for (bb=0; bb<matrix[ro][co].length; bb++) {

                      if(matrix[ro][co][bb]===matrix[ro2][co2]) {

                        matrix[ro][co].splice(bb,1);

                        if(matrix[ro][co].length===1) {
                          matrix[ro][co] = matrix[ro][co][0];

                          resu = true;
                        }

                      }

                }
              }
              }
            }



      }

    }
  }
ro=ww;
co=qq;
}




function Deleting () {
if (matrix[ro][co].length>1) {

 for (nn=0;nn<matrix[ro][co].length; nn++){
   if(matrix[ro][co][nn] === empty[0] ) {

     matrix[ro][co].splice(nn, 1);

     if (matrix[ro][co].length==1) {

       matrix[ro][co]=matrix[ro][co][0];
       empty[0] = matrix[ro][co];

          CheckValues ();
          CheckValues ();
          CheckValues ();
          CheckValues ();
          CheckValues ();
          county = 0;
          while(resu === true) {
            CheckValues ();
            county ++;
          }

     }
   }
 }
}
}
function DeleteInRow1 () {
  xx = ro;
  yy = co;
  for (ro=0; ro<9; ro++) {

    Deleting();
}
ro = xx;
co = yy;
}
function DeleteInCol1 () {
  xx = ro;
  yy = co;
  for (co=0; co<9; co++) {

    Deleting();
  }
  ro = xx;
  co = yy;
}



function DeleteInRow () {
  co = r;
  for (ro=0; ro<9; ro++) {

    Deleting();
}
}
function DeleteInCol () {
  ro = e;
  for (co=0; co<9; co++) {

    Deleting();
  }

}
function DeleteInBlock () {
  if ((e+1)%3===0) {
   arr3e = e+1;
   }
   else if ((e+1)%3===2) {
     arr3e = e+2;
   }
   else {
     arr3e = e+3;
   }
   if ((r+1)%3===0) {
     arr3r = r+1;
     }
   else if ((r+1)%3===2) {
       arr3r = r+2;
     }
     else {
       arr3r = r+3;
     }
  for(co=(arr3e-3); co < arr3e; co++ ){
    for(ro=(arr3r-3); ro<arr3r; ro++) {

      Deleting();
    }
  }

}




function Hiddens (forRow,forCol) {
 forHiddens = [];
 empty = [];
 for (e = forRow; e< (forRow+3); e++) {
   for(r = forCol; r<(forCol+3); r++) {

     if (matrix[e][r].length >1) {



            for (g=0;g<matrix[e][r].length; g++) {
              forHiddens.push(matrix[e][r][g]);
            }

       forHiddens = forHiddens.sort(); // сортим

        }
   else {

     continue;
   }
 }
 }

 for(a=0;a<forHiddens.length;a++) {

   if (forHiddens[a]===forHiddens[a+1] || forHiddens[a]===forHiddens[a-1]) {

      continue;
   }
   else {
     empty.push(forHiddens[a]);

   }
 }


if (empty.length===1) {
  res = true;

  for (e = forRow; e< (forRow+3); e++) {
    for(r = forCol; r<(forCol+3); r++) {
        if (matrix[e][r].length>1) {

             for (g=0;g<matrix[e][r].length; g++) {
               if(matrix[e][r][g] === empty[0] ) {

                 matrix[e][r] = empty[0];
                 if (e == 5 && r == 4) {

                 }
                 if (e == 5 && r == 3) {

                 }

                            DeleteInRow ();
                            DeleteInCol ();





                 break;

               }
               else {

                 continue;
               }
             }
        }
        else {
        continue;
        }
      }
    }



  }
}
// то ж самое для строчек


function HiddensInRow (){
  forHiddens = [];
   empty = [];
    for(r=0; r<9; r++) {

    if (matrix[e][r].length >1) {

           for (g=0;g<matrix[e][r].length; g++) {
             forHiddens.push(matrix[e][r][g]);
           }

      forHiddens = forHiddens.sort(); // сортим

       }
  else {

    continue;
  }
}


for(a=0;a<forHiddens.length;a++) {

  if (forHiddens[a]===forHiddens[a+1] || forHiddens[a]===forHiddens[a-1]) {

     continue;
  }
  else {
    empty.push(forHiddens[a]);

  }
}


if (empty.length===1) {

   for(r=0; r<9; r++) {
     if (matrix[e][r].length >1) {

            for (g=0;g<matrix[e][r].length; g++) {
              if(matrix[e][r][g] === empty[0] ) {

                matrix[e][r] = empty[0];
                if (e == 5 && r == 4) {

                }
                if (e == 5 && r == 3) {

                }
              DeleteInBlock ();
              DeleteInCol ();

                break;

              }
              else {

                continue;
              }
            }
       }
       else {
       continue;
       }
     }
// удаляем этот элемент в тройках и колонках

  }
 }






// то ж самое для столбцов

function HiddensInCol (){
  forHiddens = [];
   empty = [];
    for(e=0; e<9; e++) {

    if (matrix[e][r].length >1) {

           for (g=0;g<matrix[e][r].length; g++) {
             forHiddens.push(matrix[e][r][g]); // пушим в новый массив все возможные значения в 3Д
           }

      forHiddens = forHiddens.sort(); // сортим

       }
  else {

    continue;
  }
}


for(a=0;a<forHiddens.length;a++) { // ищем только тех, кто встречается один раз

  if (forHiddens[a]===forHiddens[a+1] || forHiddens[a]===forHiddens[a-1]) {

     continue;
  }
  else {
    empty.push(forHiddens[a]);

  }
}


if (empty.length===1) {
    for(e=0; e<9; e++) {
     if (matrix[e][r].length >1) {

            for (g=0;g<matrix[e][r].length; g++) {
              if(matrix[e][r][g] === empty[0] ) {


                matrix[e][r] = empty[0];

                DeleteInBlock ();
                DeleteInCol ();

                //CheckValues ();
                break;

              }
              else {

                continue;
              }
            }
       }
       else {
       continue;
       }
     }
  }
 }









function Lonely(boolka) {
var cycle =0;
while (cycle<=81) {
for (var i=0; i<9; i++) {
  for (var j=0; j<9; j++) {
    if (matrix[i][j] === 0) {

  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  newNum = numbers;
  for (var x=0; x < 9; x++ ) {
    if (matrix[x][j] === 0) {

      continue;
    }
    else if (matrix[x][j].length > 1 ) {

      continue;
    }
    else {
          numCount = 0;
          while (numCount < 9) {
            if (matrix[x][j] === numbers[numCount]) {
              newNum[numCount] = "f";

            }
            else {
              numCount ++;
            }
          }
        }
    }

    filteredOne = newNum.filter(noF => noF !== "f");

    if (filteredOne.length === 1) {
      matrix[i][j] = filteredOne[0];

      continue;
    }



     // для строк
     numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
     newNum = numbers;

     for (var y=0; y < 9; y++ ) {
       if (matrix[i][y] === 0) {

         continue;
       }
       else if (matrix[i][y].length > 1 ) {

         continue;
       }
       else {
             numCount = 0;
             while (numCount < 9) {
               if (matrix[i][y] === numbers[numCount]) {
                 newNum[numCount] = "f";

               }
               else {
                 numCount ++;
               }
             }
           }
       }

       filteredTwo = newNum.filter(noF => noF !== "f");

       if (filteredTwo.length === 1) {
         matrix[i][j] = filteredTwo[0];

         continue;
       }


    if ((i+1)%3===0) {
     arr3i = i+1;
     }
     else if ((i+1)%3===2) {
       arr3i = i+2;
     }
     else {
       arr3i = i+3;
     }
     if ((j+1)%3===0) {
       arr3j = j+1;
       }
     else if ((j+1)%3===2) {
         arr3j = j+2;
       }
       else {
         arr3j = j+3;
       }


     // в трехмерной матрице
     numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
     newNum = numbers;
     for (var s=(arr3i-3); s < arr3i; s++ ) {
         for (var z=(arr3j-3); z<arr3j; z++) {
           if (matrix[s][z] === 0) {

             continue;
           }
           else if (matrix[s][z].length > 1 ) {

             continue;
           }
           else {
           numCount = 0;
           while (numCount < 9) {
             if (matrix[s][z] === numbers[numCount]) {
               newNum[numCount] = "f";

             }
             else {
               numCount ++;

             }
           }
         }

       }
     }

     filtered = newNum.filter(noF => noF !== "f");

     if (filtered.length === 1) {
       matrix[i][j] = filtered[0];

       continue;
     }


    commonFilter = [];
    commonFilter = filtered.concat(filteredOne, filteredTwo);
    commonFilter = commonFilter.sort();

    kaunt = 0;
    while(kaunt<commonFilter.length) {
        if(commonFilter[kaunt]===commonFilter[(kaunt+1)] && commonFilter[(kaunt+1)] === commonFilter[(kaunt+2)]) {
        commonFilter.splice((kaunt+1), 2);

        kaunt ++;

      }
      else {
        commonFilter.splice(kaunt, 1);

      }
    }
    if (commonFilter.length === 1) {

        matrix[i][j] = commonFilter[0];

      continue;
      }
      else {
            if (boolka >= 1) {
          matrix[i][j] = commonFilter;

          }

      }






     }
   }
   }
  cycle ++;
}
if (boolka == 3) {
Hiddens(0,0);

Hiddens(0,3);

Hiddens(0,6);

Hiddens(3,0);

Hiddens(3,3);

Hiddens(3,6);

Hiddens(6,0);

Hiddens(6,3);

Hiddens(6,6);

for (e = 0; e< 9; e++) {
  HiddensInRow ();
}
for (r = 0; r< 9; r++) {

HiddensInCol ();
}



}


return matrix;
}
Lonely(0);
Lonely(1);
Lonely(3);
//Lonely(3);
console.log(matrix);
return matrix;

}
