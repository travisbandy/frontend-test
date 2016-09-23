"use strict";
    $(document).ready(function(){
	$('#selectmenu').change(function(){
	  var searchVal = $(this).val();
	  $('#search').attr('placeholder', 'Search in ' + searchVal);
	  $('#search-icon').removeAttr('class');
	  $('#search-icon').addClass('search-icon-' + searchVal)
	});
	});
