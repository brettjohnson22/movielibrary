


function get(){
	$.ajax({
		type: 'GET',
		url: 'https://localhost:44382/api/values',
		success: function(data){
			$('#formTitle').html('All Movies');
			$('#allmovies').empty();
			$('#allmovies').append('<tr><td>Title</<td><td>Genre</td><td>Director</td><tr>');
			$.each(data, function (i, item){
				$('#allmovies').append('<tr><td>' + data[i].Title + '</td><td>' + data[i].Genre + '</td><td>' + data[i].DirectorName + '</td></tr>');
			});
		}
	});
};

$(document).ready(function(){
	$('#update').click(function(){
		$.ajax({
			url: 'https://localhost:44382/api/values',

		})
	})
})

function createForm(name, action){
	$('.option').hide();
	$('#allmovies').empty();
	$('#formTitle').html(name);
	//onsubmit -- prevent default
    $('#movieForm').attr('onsubmit', action);
	$('#movieForm').on('submit', function(e){
		e.preventDefault();	
	});
	$('#movieForm').html('Title:<br><input type="text" id="titleInput"><br>Genre:<br><input type="text" id="genreInput"><br>Director:<br><input type="text" id="directorInput"><br><input type="submit" value="Submit">');
}

function singleForm(){
	$('.option').hide();
	$('#allmovies').empty();
	$('#formTitle').html('Search By Trait');
	$('#movieForm').html('Search:<br><input type="text" id="traitSearch"><br><input type="submit" value="Submit">');
	$('#movieForm').attr('onsubmit', 'singleSearch()');
	$('#movieForm').on('submit', function(e){
		e.preventDefault();	
	});
	$('#searchChoice').html('<input type="radio" name="searchTrait" value="Director" id="titleSearch" >Title<input type="radio" name="searchTrait" value="Genre" id="genreSearch" > Genre<input type="radio" name="searchTrait" value="DirectorName" id="directorSearch">Director<br>')
}


function post(){
	$.ajax({
		type: 'POST',
		url: 'https://localhost:44382/api/values',
		data: createData(),
		success: function(data){
			console.log(data);
		}
	});
};

function createData(){
	var data = {
			"Title": $('#titleInput').val(),
			"Genre": $('#genreInput').val(),
			"DirectorName": $('#directorInput').val(),
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

function singleSearch(){
	$.ajax({
		type: 'GET',
		url: 'https://localhost:44382/api/values',
		success: function(data){
			$('#formTitle').html('Search Results');
			$('#allmovies').empty();
			$('#allmovies').html('<tr><td>Title</<td><td>Genre</td><td>Director</td><tr>');
			var checked = $('input:radio[name=searchTrait]:checked').val();
			//if($("#titleSearch").prop("checked", true)){
				$.each(data, function(i, item){
					if(data[i][checked] == $('#traitSearch').val()){
						$('#allmovies').append('<tr><td>' + data[i].Title + '</td><td>' + data[i].Genre + '</td><td>' + data[i].DirectorName + '</td></tr>')
					}
				})
			//}
			// else if($("#genreSearch").prop("checked", true)){
			// 	$.each(data, function(i, item){
			// 		if(data[i].Genre == $('traitSearch').val()){
			// 			$('#allmovies').append('<tr><td>' + data[i].Title + '</td><td>' + data[i].Genre + '</td><td>' + data[i].DirectorName + '</td></tr>')
			// 		}
			// 	})
			// }
			// else if($("#directorSearch").prop("checked", true)){
			// 	$.each(data, function(i, item){
			// 		if(data[i].DirectorName == $('traitSearch').val()){
			// 			$('#allmovies').append('<tr><td>' + data[i].Title + '</td><td>' + data[i].Genre + '</td><td>' + data[i].DirectorName + '</td></tr>')
			// 		}
			// 	})
			// }
		}
	});
}

var checked = $('input:radio[name=searchTrait]:checked').val();

//I want to search by attributes. Do I want to have the user choose which attribute to search by?