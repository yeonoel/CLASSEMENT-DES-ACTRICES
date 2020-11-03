$(function(){


let $mainMenuItems = $('#main-menu ul').children('li');
let	totalmainMenuItems = $mainMenuItems.length;
let 	openedIndex = 2;

init = function (){
		bindEvent();
		if (validIndex(openedIndex)) {
			animateItem($mainMenuItems.eq(openedIndex), true, 700);
		}

	} ;

let bindEvent = () => {

	$mainMenuItems.children('.images').click(function()
		{
			var newIndex = $(this).parent().index(),
			$items = $mainMenuItems.eq(newIndex);
			if (openedIndex === newIndex) {

				animateItem($items, false, 250);
				openedIndex = -1;


			}else
			{
				if(validIndex(newIndex)){
					animateItem($mainMenuItems.eq(openedIndex), false, 250);
					openedIndex = newIndex;
					animateItem($items, true, 250)

				}
			}
		});
			$('.button').click(function(){

				var newIndex = $(this).index();
				$items = $mainMenuItems.eq(newIndex);
				if (openedIndex === newIndex) {

				animateItem($items, false, 250);
				openedIndex = -1;


			}else
			{
				if(validIndex(newIndex)){
					animateItem($mainMenuItems.eq(openedIndex), false, 250);
					openedIndex = newIndex;
					animateItem($items, true, 250)

				}
			}
			});

};

	

let validIndex = function(indexToCheck){
return (indexToCheck >= 0) && (indexToCheck < totalmainMenuItems);

};

let animateItem = function($items, toOpen, speed){
	let $colorImage = $items.find('.color'),
	itemParam = toOpen ? {width: "420px"} : {width: "140px"};
	colorImageParam = toOpen ? {left: "0px"} : {left: "140px"};
	$colorImage.animate(colorImageParam,speed);
	$items.animate(itemParam,speed);
};





init();


	
});