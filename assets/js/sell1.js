
$("#ans").on("click",function(){
	$(this).parent(".col").append('<div class="row"><div class="col"><label for="feature">Feature</label><input type="text" class="form-control" id="title" placeholder="feature" name="feature[]" ></div><div class="col"><label for="answer1">Description</label><input type="text" class="form-control" id="answer1" placeholder="description" name="answer[]" ><p>Different options should be seperated by commas. Eg:colour(feature) => black,white(description)</p></div></div>')
});
$("small").on("click",function(){
	$("#thisone").before('<div class="form-group"><div class="row"><div class="col"><label for="feature">Feature</label><input type="text" class="form-control" id="title" placeholder="feature" name="feature[]" ></div><div class="col"><label for="answer1">Description</label><input type="text" class="form-control" id="answer1" placeholder="description" name="answer[]" ><p>Different options should be seperated by commas. Eg:colour(feature) => black,white(description)</p></div></div><!-- <div class="col"><label for="description">Discription</label><input type="text" class="form-control" id="title" placeholder="Description" name="description[]" ></div> --></div>')
});