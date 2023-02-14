function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}let number= 1;
let table;
let st;
function setup() {
  createCanvas(400, 400);
  background(220);
  table= new p5.Table();

  table.addColumn('x');
  table.addColumn('y');
  table.addColumn('Time');

  btn = createButton('Save table');
  btn.size(100,50);
  btn.mousePressed(SaveData);

}

function draw() {
}

function mouseClicked(){
  var newRow = table.addRow();

  newRow.setNum('x',mouseX);
  newRow.setNum('y',mouseY);
  newRow.setNum('Time', round(millis()/1000));


 
  if(mouseClicked) {
      textSize(20);
      fill(random(100,220), 100, 150);
      text(number, mouseX, mouseY-10);
      textSize(10);
      fill(0,0,0);
      text(mouseX, mouseX, mouseY);
      text(mouseY, mouseX , mouseY + 10);
      number++;
  }
}

function SaveData() {
  let st = saveTable;
    st = saveTable(table, 'clicks.csv')
}