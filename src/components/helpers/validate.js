export default function(data) {
	let validData = {
		quote: 		{value: null, msg: null},
		timecode: 	{value: null, msg: null},
		screengrab: {value: null, msg: null},
		from: 		{value: null, msg: null},
		to: 		{value: null, msg: null},
		location: 	{value: null, msg: null},
		refThumb: 	{value: null, msg: null},
		refName: 	{value: null, msg: null},
		refIs: 		{value: null, msg: null},
		refCategory: {value: null, msg: null},
		refYear: 	{value: null, msg: null},
		wikipedia:  {value: null, msg: null},
		images: 	{value: null, msg: null},
		video: 		{value: null, msg: null},
		refNotes: 	{value: null, msg: null},
	};

	// if something is not valid, how do we communicate back? 
	// return {false, {data fields: err msg}
	
	//console.log("quote", data.quote);
	if (/(?:\/\/)/g.test(data.quote) === false)  { // no links
		validData.quote.val = data.quote;
	} else {
		validData.quote.val = false;
		validData.quote.msg = "Your quote appears to have a link in it. Please remove it."
	}

	//console.log("timecode", data.timecode);
	if (/(\d+):(\d\d)/.test(data.timecode)) {
		validData.timecode.value = data.timecode;
	} else {
		validData.timecode.value = false;
		validData.timecode.msg = "Timecode should be three or four numbers seperated by a colon - 09:18 or 9:18."
	}

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