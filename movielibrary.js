


function get(){
	$(function(){
		$.ajax({
			type: 'GET',
			url: 'https://localhost:44319/api/values',
			datatype: 'json',
			success: function(data){
				$('#formTitle').html('All Movies');
				$('#allmovies').empty();
				$('#allmovies').append('<tr><td>Title</<td><td>Genre</td><td>Director</td><tr>');
				$.each(data, function (i, item){
					$('#allmovies').append('<tr><td>' + data[i].Title + '</td><td>' + data[i].Genre + '</td><td>' + data[i].DirectorName + '</td></tr>');
				});
			}
		});
	});
};


function createForm(name, action){
	$('.option').hide();
	$('#allmovies').hide();
	$('#formTitle').html(name);
	//onsubmit -- prevent default
    $('#movieForm').attr('onsubmit', action);
	$('#movieForm').on('submit', function(e){
		e.preventDefault();	
	});
	$('#movieForm').html('Title:<br><input type="text" id="titleInput"><br>Genre:<br><input type="test" id="genreInput"><br>Director:<br><input type="text" id="directorInput"><br><input type="submit" value="Submit">');
}

function post(){
	let test = 4;
		$.ajax({
			type: 'POST',
			url: 'https://localhost:44319/api/values',
			crossDomain: true,
			headers: {
				"Content-Type": "application/json"
			},
			data: JSON.stringify(
			{
				"Title": $('#titleInput').val(),
				"Genre": $('#genreInput').val(),
				"DirectorName": $('#directorInput').val(),
			}),
			datatype: 'jsonp',
			success: function(data){
				console.log(data);
			}
		});
};

function restart(){
	$('#formTitle').empty();
	$('#movieForm').empty();
	$('.option').show();
	$('#allmovies').empty();
}
