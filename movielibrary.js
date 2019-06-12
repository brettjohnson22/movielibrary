


function get(){
	$(function(){
		$.ajax({
			type: 'GET',
			url: 'https://localhost:44319/api/values',
			datatype: 'json',
			success: function(data){
				$('#allmovies').empty();
				$('#allmovies').append('<tr><td>Title</<td><td>Genre</td><td>Director</td><tr>')
				$.each(data, function (i, item){
					$('#allmovies').append('<tr><td>' + data[i].Title + '</td><td>' + data[i].Genre + '</td><td>' + data[i].DirectorName + '</td></tr>');
				});
			}
		});
	});
};

//