var nrClick=0;
var firs;
var second;
var match=0;
var cards=[];
cards[0]="c1.jpg"
cards[1]="c2.jpg"
cards[2]="c7.jpg"
cards[3]="c4.jpg"
cards[4]="c5.jpg"
cards[5]="c5.jpg"
cards[6]="c3.jpg"
cards[7]="c8.jpg"
cards[8]="c7.jpg"
cards[9]="c8.jpg"
cards[10]="c6.jpg"
cards[11]="c3.jpg"
cards[12]="c6.jpg"
cards[13]="c1.jpg"
cards[14]="c2.jpg"
cards[15]="c4.jpg"

function alegere(card){
	if(nrClick==0)
	{
		first=card;
		document.images[card].src=cards[card];
		nrClick=1;
	}
	else if(nrClick==1)
	{
		nrClick=2;
		second=card;
		document.images[card].src=cards[card];
		timer=setInterval(control,500);
	}
	else{
		alert("you can click on an image once!!");
	}
}
function control(){
	clearInterval(timer);
	nrClick=0;
	if(cards[first]==cards[second]){
		match++;
		if(match==8)
		{alert("congratulations!!");
		}
	}else{
		document.images[first].src="fond.jpg";
		document.images[second].src="fond.jpg";
	}
}