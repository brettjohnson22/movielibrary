
function get(){
	$('.option').hide();
	$.ajax({
		type: 'GET',
		url: 'https://localhost:44382/api/values',
		success: function(data){
			$('#formTitle').html('All Movies');
			$('#allmovies').empty();
			$('#allmovies').append('<tr><td>Title</<td><td>Genre</td><td>Director</td><tr>');
			$.each(data, function (i, item){
				$('#allmovies').append('<tr><td>' + data[i].Title + '</td><td>' + data[i].Genre + '</td><td>' + data[i].DirectorName + '</td><td><button type="button" onclick="edit(' + i + ')">Edit</button></tr>');
			});
		}
	});
};

function post(){
	$.ajax({
		type: 'POST',
		url: 'https://localhost:44382/api/values',
		data: createData(),
		success: function(data){
			restart();
			$('#formTitle').html('Movie Added');
		}
	});
};

function put(id){
	var data = createData(id);
	$.ajax({
		type: 'PUT',
		url: 'https://localhost:44382/api/values/' + id,
		data: data,
		success: function(d){
			console.log(d);
			restart();
			$('#formTitle').html('Movie Updated');
		}
	});
};

function createData(id){
	if (arguments.length === 1) {
		var data = {
				Title: $('#titleInput')[0].value,
				Genre: $('#genreInput')[0].value,
				DirectorName: $('#directorInput')[0].value,
		}
	}
	else {
		var data = {
			"Title": $('#titleInput').val(),
			"Genre": $('#genreInput').val(),
			"DirectorName": $('#directorInput').val(),
		}
	}
		return data;
}

function restart(){
	$('#formTitle').empty();
	$('#movieForm').empty();
	$('#allmovies').empty();
	$('#searchChoice').empty();
	$('.option').show();
}

function singleForm(){
	$('.option').hide();
	$('#allmovies').empty();
	$('#formTitle').html('Search By Trait');
	$('#movieForm').html('Search:<br><input type="text" id="traitSearch"><br><br><input type="submit" value="Submit"><br><br>');
	$('#movieForm').attr('onsubmit', 'singleSearch()');
	$('#movieForm').on('submit', function(e){
		e.preventDefault();	
	});
	$('#searchChoice').html('<input type="radio" name="searchTrait" value="Title" id="titleSearch" >Title<input type="radio" name="searchTrait" value="Genre" id="genreSearch" > Genre<input type="radio" name="searchTrait" value="DirectorName" id="directorSearch">Director<br>')
}

function singleSearch(){
	$.ajax({
		type: 'GET',
		url: 'https://localhost:44382/api/values',
		success: function(data){
			$('#formTitle').html('Search Results');
			$('#allmovies').empty();
			$('#allmovies').html('<tr><td>Title</<td><td>Genre</td><td>Director</td><tr>');
			var checked = $('input:radio[name=searchTrait]:checked').val();
			$.each(data, function(i, item){
				if(data[i][checked] == $('#traitSearch').val()){
					$('#allmovies').append('<tr><td>' + data[i].Title + '</td><td>' + data[i].Genre + '</td><td>' + data[i].DirectorName + '</td></tr>')
				}
			})
		}
	});
}

function fullForm(name, action){
	$('.option').hide();
	$('#allmovies').empty();
	$('#formTitle').html(name);
	//onsubmit -- prevent default
    $('#movieForm').attr('onsubmit', action);
	$('#movieForm').on('submit', function(e){
		e.preventDefault();	
	});
	$('#movieForm').html('Title:<br><input type="text" id="titleInput"><br>Genre:<br><input type="text" id="genreInput"><br>Director:<br><input type="text" id="directorInput"><br><br><input type="submit" value="Submit">');
}

function edit(id){
	fullForm('Edit Selection', 'put(' + id + ')')
}