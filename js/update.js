
var url = 'https://proxy.hxlstandard.org/data.json?strip-headers=on&url=https%3A//docs.google.com/spreadsheets/d/1HnLZh1hUuR6JKw0xwVtC4_a4o0ixREQf9EqN1LSy2D8/pub%3Fgid%3D137269997%26single%3Dtrue%26output%3Dcsv&force=1';
var url2 = 'https://proxy.hxlstandard.org/data.json?strip-headers=on&url=https%3A//docs.google.com/spreadsheets/d/15OC8U1lodClWj0LQ3dUi3sR1emtZxQx5ZDOIPZFgwgM/pub%3Fgid%3D0%26single%3Dtrue%26output%3Dcsv&force=1';

$.ajax(url, {
    success: function(data) {
      	$.ajax(url2, {
		    success: function(data) {
		        $('#status').text('Updated');
		    },
		    error: function(e,err) {
		        $('#status').text('Error');
		        console.log(e);
		        console.log(err);
		    }
		});
    },
    error: function(e,err) {
        $('#status').text('Error');
        console.log(e);
        console.log(err);
    }
});