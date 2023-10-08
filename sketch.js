let data;
let pm25Max;
let pm25Min;


function preload() {
  data = loadTable("./Beijing-PM2.5.csv", "csv", "header");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  for (let i = 0; i < data.getRowCount(); i++) {
  let pm25 = data.getNum(i, "pm2.5");

  pm25Max = max(pm25Max,pm25);
  pm25Min = min(pm25Min, pm25);
  }
}

function draw() {
  background(255);
  noStroke();
  
    for (let i = 0; i < data.getRowCount(); i++) {
      let year = data.get(i, "year");
      let month = data.get(i, "month");

      if(year == 2010){
        x = map(month, 1, 12, 20, width-20 -width/12);
        fill(243, 100, 68)
      } else if(year == 2011){
        x = map(month, 1, 12, 20 + width/12/5, width-20 -width/12/5*4)
        fill(250, 197, 94)
      } else if(year == 2012){
        x = map(month, 1, 12, 20 + width/12/5*2, width-20 -width/12/5*3)
        fill(116,200,166)
      } else if(year == 2013){
        x = map(month, 1, 12, 20 + width/12/5*3, width-20 -width/12/5*2)
        fill(72, 196, 214)
      } else if (year == 2014){
        x = map(month, 1, 12, 20 + width/12/5*4, width-20 -width/12/5)
        fill(146, 99, 141)
      }

      // let x = map(month, 1, 12, 20, width-20);
      let day = data.get(i, "day");
      let y = map(day, 1, 31, height-20, 20);
      let pm25 = data.get(i, "pm2.5");
      let d = map(pm25, pm25Min, pm25Max, 2, 20);

      //draw ellipse
  ellipse(x, y, d, d);
  }
  noLoop();

  fill(170);
text( "/month" , 20, height-5);
text( "day/" , 0, height-20);
text("red-2010" + " yellow-2011 " + "green-2012 " + "blue-2013" +" purple-2014", 20,10)

}
