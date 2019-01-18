function setup(){
	createCanvas(800, 800)
}

class Toothpick {
	constructor(x, y, d) {
		this.dir = d

		if (this.dir == 1) {
			this.x1 = x - len/2
			this.x2 = x + len/2
			this.y1 = y
			this.y2 = y
		} else {
			this.x1 = x
			this.x2 = x
			this.y1 = y-len/2
			this.y2 = y+len/2
		}
	}
	show(){
		line(this.x1, this.y1, this.x2, this.y2)
	}
}

let x = 1
let y = 30
let len = 30

let pick = new Toothpick(x,y,0)
let picks = new Array()

let coordsV1 = new Array()
let coordsV2 = new Array()
let coordsH1 = new Array()
let coordsH2 = new Array()

let true_arr = new Array()
let true_check = new Array()

coordsV1.push([pick.x1, pick.y1])
coordsV2.push([pick.x2, pick.y2])

let forbidden_coordsV = new Array()
let forbidden_coordsH = new Array()

picks.push(pick)


function forbidden_coords(coord1,coord2){
	forbidden_crds = [];
	for (var k = 0; k < coord1.length; k++) {
		for (var j = 0; j < coord2.length; j++) {
			if (coord1[k].toString() == coord2[j].toString()) {
				forbidden_crds.push(coord1[k])
			}
		}
	}
	return forbidden_crds;
}


function addPicks(pick){
	let dir_ = 0
	let current_dir = pick.dir
	if (current_dir == 0) {

		for (i = 0; i < forbidden_coordsV.length; i++) {
			true_check.push(forbidden_coordsV[i].toString() != [pick.x1,pick.y1].toString())
			true_arr.push(true)
		}

			if(true_check.toString() == true_arr.toString()) {
				let pick_ = new Toothpick(pick.x1,pick.y1,1)
				coordsH1.push([pick_.x1, pick_.y1])
				coordsH2.push([pick_.x2, pick_.y2])
				picks.push(pick_)
			}

		true_check = [];
		true_arr = [];

		for (i = 0; i < forbidden_coordsV.length; i++) {
			true_check.push(forbidden_coordsV[i].toString() != [pick.x2,pick.y2].toString())
			true_arr.push(true)
		}

			if(true_check.toString() == true_arr.toString()) {
				pick_ = new Toothpick(pick.x2,pick.y2,1)
				coordsH1.push([pick_.x1, pick_.y1])
				coordsH2.push([pick_.x2, pick_.y2])
				picks.push(pick_)
			}
	
		true_check = [];
		true_arr = [];

	} else {
		for (i = 0; i < forbidden_coordsH.length; i++) {
			true_check.push(forbidden_coordsH[i].toString() != [pick.x1,pick.y1].toString())
			true_arr.push(true)
		}

			if(true_check.toString() == true_arr.toString()) {
				let pick_ = new Toothpick(pick.x1,pick.y1,0)
				coordsV1.push([pick_.x1, pick_.y1])
				coordsV2.push([pick_.x2, pick_.y2])
				picks.push(pick_)
			}

		true_check = [];
		true_arr = [];

		for (i = 0; i < forbidden_coordsH.length; i++) {
			true_check.push(forbidden_coordsH[i].toString() != [pick.x2,pick.y2].toString())
			true_arr.push(true)
		}

			if(true_check.toString() == true_arr.toString()) {
				pick_ = new Toothpick(pick.x2,pick.y2,0)
				coordsV1.push([pick_.x1, pick_.y1])
				coordsV2.push([pick_.x2, pick_.y2])
				picks.push(pick_)
			}
		true_check = [];
		true_arr = [];
	}
}

for (var l = 0; l < 295; l++) {
	//Add picks
	addPicks(picks[l])

	forbidden_coordsV = forbidden_coords(coordsV1,coordsV2)
	forbidden_coordsH = forbidden_coords(coordsH1,coordsH2)

}

function draw(){
	background(0)
	translate(400,350)
	noFill();
	stroke(255)

	for (var i = 0; i < picks.length; i++) {
		picks[i].show()
	}

}


