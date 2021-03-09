const canvas = document.getElementById("house");
const x = canvas.getContext("2d");

x.lineWidth = 4;
x.strokeStyle = "#1A281F";

// sky
x.beginPath();

x.rect(0, 0, 610, 610);

x.fillStyle = "#C0E8F9";
x.fill();

x.closePath();

// ground
x.beginPath();
x.rect(-2, 464, 614, 464);

x.stroke();

x.fillStyle = "#B9F18C";
x.fill();

x.closePath();

// tree trunks

x.beginPath();

x.rect(147, 378, 27, 94);
x.rect(462, 387, 23, 80);

x.stroke();

x.fillStyle = "#635255";
x.fill();

x.closePath();

// crown of trees
x.beginPath();
x.ellipse(157, 257, 138, 138, 0, 0, 2 * Math.PI);
x.ellipse(472, 293, 115, 115, 0, 0, 2 * Math.PI);
x.stroke();

x.fillStyle = "#B9F18C";
x.fill();

x.closePath();

// apples
x.beginPath();
// left tree apples
x.ellipse(99, 200, 10, 10, 0, 0, 2 * Math.PI);
x.moveTo(161, 151);
x.ellipse(161, 151, 10, 10, 0, 0, 2 * Math.PI);
x.moveTo(240, 212);
x.ellipse(240, 212, 10, 10, 0, 0, 2 * Math.PI);
x.moveTo(160, 240);
x.ellipse(160, 240, 10, 10, 0, 0, 2 * Math.PI);
x.moveTo(55, 275);
x.ellipse(55, 275, 10, 10, 0, 0, 2 * Math.PI);
x.moveTo(181, 282);
x.ellipse(181, 282, 10, 10, 0, 0, 2 * Math.PI);
x.moveTo(106, 345);
x.ellipse(106, 345, 10, 10, 0, 0, 2 * Math.PI);
x.moveTo(164, 345);
x.ellipse(164, 345, 10, 10, 0, 0, 2 * Math.PI);

// right tree apples

x.moveTo(472, 222);
x.ellipse(472, 222, 10, 10, 0, 0, 2 * Math.PI);
x.moveTo(531, 229);
x.ellipse(531, 229, 10, 10, 0, 0, 2 * Math.PI);
x.moveTo(551, 285);
x.ellipse(551, 285, 10, 10, 0, 0, 2 * Math.PI);
x.moveTo(449, 271);
x.ellipse(449, 271, 10, 10, 0, 0, 2 * Math.PI);
x.moveTo(503, 315);
x.ellipse(503, 315, 10, 10, 0, 0, 2 * Math.PI);
x.moveTo(409, 275);
x.ellipse(409, 275, 10, 10, 0, 0, 2 * Math.PI);
x.moveTo(423, 317);
x.ellipse(423, 317, 10, 10, 0, 0, 2 * Math.PI);
x.moveTo(471, 363);
x.ellipse(471, 363, 10, 10, 0, 0, 2 * Math.PI);
x.moveTo(518, 362);
x.ellipse(518, 362, 10, 10, 0, 0, 2 * Math.PI);

x.stroke();

x.fillStyle = "#CE7B91";
x.fill();

x.closePath();

// chimney
x.beginPath();
x.rect(205, 243, 24, 72);
x.stroke();

x.fillStyle = "#635255";
x.fill();

x.closePath();

// house walls
x.beginPath();
x.moveTo(305, 244);
x.lineTo(425, 370);
x.lineTo(425, 480);
x.lineTo(185, 480);
x.lineTo(185, 370);
x.lineTo(305, 244);

x.stroke();

x.fillStyle = "#E9EB87";
x.fill();
x.closePath();

// roof bottom
x.beginPath();
x.moveTo(165, 369);
x.lineTo(305, 217);
x.lineTo(447, 369);
x.lineTo(447, 392);
x.lineTo(305, 244);
x.lineTo(165, 392);
x.lineTo(165, 369);

x.stroke();

x.fillStyle = "#B8D3D1";
x.fill();

x.closePath();

// roof top
x.beginPath();
x.moveTo(165, 345);
x.lineTo(305, 193);
x.lineTo(447, 345);
x.lineTo(447, 369);
x.lineTo(305, 217);
x.lineTo(165, 369);
x.lineTo(165, 345);

x.stroke();

x.fillStyle = "#635255";
x.fill();

x.closePath();

// windows' frames
x.beginPath();
// top
x.moveTo(405, 357);
x.lineTo(207, 357);
x.lineTo(305, 254);
x.lineTo(405, 357);

// bottom left
x.rect(200, 380, 68, 82);

// bottom right
x.rect(278, 380, 131, 83);

x.stroke();

x.fillStyle = "#CE7B91";
x.fill();

x.closePath();

// windows' glass
x.beginPath();
// top left
x.moveTo(268, 350);
x.lineTo(268, 303);
x.lineTo(223, 350);
x.lineTo(268, 350);

// top right
x.moveTo(344, 350);
x.lineTo(344, 303);
x.lineTo(389, 350);
x.lineTo(344, 350);

// top center
x.moveTo(334, 294);
x.lineTo(334, 350);
x.lineTo(278, 350);
x.lineTo(278, 294);
x.lineTo(305, 263);
x.lineTo(334, 294);

// bottom left
x.rect(208, 388, 52, 66)

// bottom center
x.rect(286, 388, 78, 67);

// bottom right
x.rect(372, 388, 29, 67);

x.stroke();

x.fillStyle = "#C0E8F9";
x.fill();

x.closePath();

// bushes
x.beginPath();
// left bush
x.moveTo(147, 516);
x.bezierCurveTo(123, 518, 125, 475, 149, 485);
x.bezierCurveTo(115, 478, 141, 438, 160, 458);
x.bezierCurveTo(153, 417, 201, 412, 204, 454);
x.bezierCurveTo(231, 424, 264, 454, 247, 478);
x.bezierCurveTo(279, 471, 285, 514, 254, 516);
x.bezierCurveTo(251, 519, 151, 519, 147, 516);

// right bush
x.moveTo(426, 480);
x.bezierCurveTo(401, 479, 404, 448, 429, 449);
x.bezierCurveTo(416, 430, 434, 415, 466, 437);
x.bezierCurveTo(464, 408, 486, 401, 498, 432);
x.bezierCurveTo(511, 416, 537, 438, 526, 455);
x.bezierCurveTo(532, 446, 550, 473, 521, 478);
x.bezierCurveTo(516, 486, 426, 486, 426, 480);

x.stroke();

x.fillStyle = "#B9F18C";
x.fill();

x.closePath();