// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});

var table = Ti.UI.createTableView();
win.add(table);

var AndroidMediaQuery = require('com.oxgcp.androidmediaquery');
Ti.API.info("module is => " + AndroidMediaQuery);


// get all photos
// var photos = AndroidMediaQuery.queryPhotos("all", null, null);
var photos = AndroidMediaQuery.queryPhotos('greater_than', 0, 30);

for (var i in photos) {
	var photo = photos[i];
	console.log(photo.id)
	var row = Ti.UI.createTableViewRow({
		width: Ti.UI.FILL,
		height: Ti.UI.SIZE,
		layout: 'vertical',
	});
	
	var info = Ti.UI.createLabel({
		text: photo.id + ') ' + photo.path,
	});
	row.add(info);
	
	var info2 = Ti.UI.createLabel({
		text: photo.width + 'x' + photo.height,
	});
	row.add(info2);

	var info3 = Ti.UI.createLabel({
		text: photo.gpsMethod + ' ' + photo.lat + ', ' + photo.lon,
	});
	row.add(info3);

	var info4 = Ti.UI.createLabel({
		text: photo.exif_lat + ', ' + photo.exif_lon,
	});
	row.add(info4);
	
	// var th = AndroidMediaQuery.getThumbnail(parseInt(photo.id), photo.path);
	var th = AndroidMediaQuery.createResizedImage(photo.path, null);//, photo.width || 0, photo.height || 0);
	
	// var blobStream = Ti.Stream.createStream({ source: th, mode: Ti.Stream.MODE_READ });
	// var tempBuffer = Ti.createBuffer({ length: th.length });
	// var bytes = blobStream.read(tempBuffer);
	// // 
	// blobStream.close();
	// blobStream = null;
	// // 
	// console.log("bytes :: ");
	// console.log(bytes);
	
	var img = Ti.UI.createImageView({
		// image: AndroidMediaQuery.replaceMimeType(tempBuffer.toBlob()),
		image: th,
		width: Ti.UI.SIZE,
		height: Ti.UI.SIZE,
	});
	row.add(img);

	// tempBuffer.clear();
	// tempBuffer = null;
	
	th = undefined;

	table.appendRow(row);
}




win.open();




