var warriorPic = document.createElement('img');

var worldPics = [];

var picsToLoad = 0;

function countLoadedImagesAndLaunchIfReady() {
    picsToLoad--;
    if (picsToLoad == 0) {
        imageLoadingDoneSoStartGame();
    }
}

function beginLoadingImage(imgVar, fileName) {
    imgVar.onload = countLoadedImagesAndLaunchIfReady;
    imgVar.src = 'Images/' + fileName;
}

function loadImagesForWorldCode(worldCode, fileName) {
    worldPics[worldCode] = document.createElement('img');
    beginLoadingImage(worldPics[worldCode],fileName);
}

function loadImages() {
    var imageList = [
        {varName: warriorPic, theFile: 'warrior.png'},
        {worldType: WORLD_ROAD, theFile: 'world_road.png'},
        {worldType: WORLD_WALL, theFile: 'world_wall.png'},
        {worldType: WORLD_GOAL, theFile: 'world_goal.png'},
        {worldType: WORLD_TREE, theFile: 'world_tree.png'},
        {worldType: WORLD_FLAG, theFile: 'world_flag.png'}
    ];

    picsToLoad = imageList.length;

    for (var i=0; i<imageList.length; i++) {
        if (imageList[i].varName != undefined) {
            beginLoadingImage(imageList[i].varName, imageList[i].theFile);
        }
        else {
            loadImagesForWorldCode(imageList[i].worldType, imageList[i].theFile);
        }
    }
}