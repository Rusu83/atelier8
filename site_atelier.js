var nume=[["POP DIANA","POPA ANDRADA","POPA DARIUS"],
          ["PORTILLO NICOLE","POTCOAVĂ ALEXANDRA","PUȘCAȘ LAURA","PUȘCAȘ ANDREEA"],
          ["RAD GHEORGHE","RADU ALEXANDRU","RONCEA GABRIEL","RUSU LAURENȚIU"],
          ["SAVA CRISTINA","SĂNDUȚĂ CRISTINA"]];
var numeperandurianterioare=[0,3,7,11];
var cheat=[[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[1,3],[2,0],[2,1],[2,2],[2,3],[3,0],[3,1]];
var butoane=[[],[],[],[],];
var lucrari=[];
var i,j,numeclar,l;
var stare=13;
var back,can;

function setup() {
  can=createCanvas(window.innerWidth,window.innerHeight);
  textAlign(CENTER,CENTER);
  l=height/6;
  back=createImg("studenti/back.jpg");
  back.hide();
  back.mousePressed(inapoi);
  back.size(width/10,height/10);
  back.position(height/10,height/10);
  for(i=0;i<4;i++)
    for(j=0;j<nume[i].length;j++){
      numeclar="studenti/"+nume[i][j].split(' ')[0]+nume[i][j].split(' ')[1]+"/nume.jpg";
      numeclar=numeclar.replace(/Ă/g,"A");
      numeclar=numeclar.replace(/Ș/g,"S");
      numeclar=numeclar.replace(/Ț/g,"T");
      butoane[i][j]=createImg(numeclar,nume[i][j]);
      butoane[i][j].hide();
      butoane[i][j].mousePressed(look);
      butoane[i][j].size(l,l);
      butoane[i][j].position((j+1)*(width-nume[i].length*l)/(nume[i].length+1)+j*l,height/5+i*((height*0.8-4*l)/4)+i*l);
      butoane[i][j].show();
    }
  lucrari[0]=createImg("studenti/reportaj.jpg");
  lucrari[1]=createImg("studenti/feature.jpg");
  lucrari[2]=createImg("studenti/interviu.jpg");
  lucrari[3]=createImg("studenti/relatare.jpg");
  lucrari[0].mousePressed(reportaj);
  lucrari[1].mousePressed(feature);
  lucrari[2].mousePressed(interviu);
  lucrari[3].mousePressed(relatare);
  lucrari[0].hide();
  lucrari[1].hide();
  lucrari[2].hide();
  lucrari[3].hide();
  lucrari[0].position(width/4-200,height/4);
  lucrari[1].position(200+(width-800)/5*2,height/4);
  lucrari[2].position((width-800)/5*3+400,height/4);
  lucrari[3].position(width-200-(width-800)/5,height/4);
}


function draw() {
  background(230, 230, 255);
  switch(stare){
      case 13:
        for(i=0;i<4;i++)
          for(j=0;j<nume[i].length;j++)
            butoane[i][j].show();
        textSize(height/20);
        textFont("Georgia");
        text("Lucrări atelier de presă scrisă\nSubgrupa 8", width/2,height/10);
        back.hide();
        lucrari[0].hide();
        lucrari[1].hide();
        lucrari[2].hide();
        lucrari[3].hide();
        break;
      default:
        back.show();
        for(i=0;i<4;i++)
          for(j=0;j<nume[i].length;j++)
            butoane[i][j].hide();
        text(nume[cheat[stare][0]][cheat[stare][1]], width/2,height/10);
        lucrari[0].show();
        lucrari[1].show();
        lucrari[2].show();
        lucrari[3].show();
        break;
  }
}

function look(){
  for(i=0;i<4;i++)
    for(j=0;j<nume[i].length;j++)
      if(over(butoane[i][j]))
        stare=numeperandurianterioare[i]+j;
}

function over(x){
  if(mouseX>x.position().x && mouseY>x.position().y && mouseX<x.position().x+x.width && mouseY<x.position().y+x.height)
    return true;
  else
    return false;
}

function reportaj(){
  locatie=nume[cheat[stare][0]][cheat[stare][1]];
  locatie="studenti/"+nume[cheat[stare][0]][cheat[stare][1]].split(' ')[0]+nume[cheat[stare][0]][cheat[stare][1]].split(' ')[1]+"/reportaj.html";
  locatie=locatie.replace(/Ă/g,"A");
  locatie=locatie.replace(/Ș/g,"S");
  locatie=locatie.replace(/Ț/g,"T");
  window.open(locatie);
}

function interviu(){
  locatie=nume[cheat[stare][0]][cheat[stare][1]];
  locatie="studenti/"+nume[cheat[stare][0]][cheat[stare][1]].split(' ')[0]+nume[cheat[stare][0]][cheat[stare][1]].split(' ')[1]+"/interviu.html";
  locatie=locatie.replace(/Ă/g,"A");
  locatie=locatie.replace(/Ș/g,"S");
  locatie=locatie.replace(/Ț/g,"T");
  window.open(locatie);
}

function feature(){
  locatie=nume[cheat[stare][0]][cheat[stare][1]];
  locatie="studenti/"+nume[cheat[stare][0]][cheat[stare][1]].split(' ')[0]+nume[cheat[stare][0]][cheat[stare][1]].split(' ')[1]+"/feature.html";
  locatie=locatie.replace(/Ă/g,"A");
  locatie=locatie.replace(/Ș/g,"S");
  locatie=locatie.replace(/Ț/g,"T");
  window.open(locatie);
}

function relatare(){
  locatie=nume[cheat[stare][0]][cheat[stare][1]];
  locatie="studenti/"+nume[cheat[stare][0]][cheat[stare][1]].split(' ')[0]+nume[cheat[stare][0]][cheat[stare][1]].split(' ')[1]+"/relatare.html";
  locatie=locatie.replace(/Ă/g,"A");
  locatie=locatie.replace(/Ș/g,"S");
  locatie=locatie.replace(/Ț/g,"T");
  window.open(locatie);
}

function inapoi(){
  stare=13;
}
