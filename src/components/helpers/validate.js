export default function(data) {
	let validData = {};

	// if something is not valid, how do we communicate back? 
	// return {false, {data fields: err msg}
	  console.log("quote", data.quote);
		console.log("timecode", data.timecode);
		console.log("screengrab", data.screengrab);
		console.log("from", data.from);
		console.log("to", data.to);
		console.log("location", data.location);
		console.log("refThumb", data.refThumb);
		console.log("refName", data.refName);
		console.log("refIs", data.refIs);
		console.log("refCategory", data.refCategory);
		console.log("refYear", data.refYear);
		console.log("wikipedia", data.wikipedia);
		console.log("images", data.images);
		console.log("video", data.video);
		console.log("refNotes", data.refNotes);

	return {status: true, data: validData};
}