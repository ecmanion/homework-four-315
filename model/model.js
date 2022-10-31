var MODEL = (function(){

var homeContent = `<div class="home">
<div class="home-image">
    <h1 class="home-title">Form Examples</h1>
</div>
</div>`;
var createContent = `<div class="form-outside">

<form onsubmit="initListeners();return false">
<h1>CREATE</h1>
    <label for="recipeImg">Add Recipe Image</label>
    <input id="recipeImg" type="text" name="recipeImg">
    <label for="recipeName">Recipe Name</label>
    <input id="recipeName" type="text" name="recipeName">
    <label for="recipeDes">Recipe Description</label>
    <input id="recipeDes" type="text" name="recipeDes">
    <label for="recipeTT">Recipe Total Time</label>
    <input id="recipeTT" type="text" name="recipeTT">
    <label for="recipeSS">Recipe Serving Size</label>
    <input id="recipeSS" type="text" name="recipeSS">
    <label for="ingredientOne">Ingredient #1</label>
    <input id="ingredientOne" type="text" name="ingredientOne">
    <label for="ingredientTwo">Ingredient #2</label>
    <input id="ingredientTwo" type="text" name="ingredientTwo">
    <label for="ingredientThree">Ingredient #3</label>
    <input id="ingredientThree" type="text" name="ingredientThree">
    <label for="instructionOne">Instruction #1</label>
    <input id="instructionOne" type="text" name="instructionOne">
    <label for="instructionTwo">Instruction #2</label>
    <input id="instructionTwo" type="text" name="instructionTwo">
    <label for="instructionThree">Instruction #3</label>
    <input id="instructionThree" type="text" name="instructionThree">
    <input type="submit" name="submit" id="createSubmit">
</form>
</div>`;
var editContent = `<div class="form-outside">
<form onsubmit="initListeners();return false">
<h1>EDIT</h1>
    <label for="recipeImg">Add Recipe Image</label>
    <input id="recipeImg" type="text" name="recipeImg">
    <label for="recipeName">Recipe Name</label>
    <input id="recipeName" type="text" name="recipeName">
    <label for="recipeDes">Recipe Description</label>
    <input id="recipeDes" type="text" name="recipeDes">
    <label for="recipeTT">Recipe Total Time</label>
    <input id="recipeTT" type="text" name="recipeTT">
    <label for="recipeSS">Recipe Serving Size</label>
    <input id="recipeSS" type="text" name="recipeSS">
    <label for="ingredientOne">Ingredient #1</label>
    <input id="ingredientOne" type="text" name="ingredientOne">
    <label for="ingredientTwo">Ingredient #2</label>
    <input id="ingredientTwo" type="text" name="ingredientTwo">
    <label for="ingredientThree">Ingredient #3</label>
    <input id="ingredientThree" type="text" name="ingredientThree">
    <label for="instructionOne">Instruction #1</label>
    <input id="instructionOne" type="text" name="instructionOne">
    <label for="instructionTwo">Instruction #2</label>
    <input id="instructionTwo" type="text" name="instructionTwo">
    <label for="instructionThree">Instruction #3</label>
    <input id="instructionThree" type="text" name="instructionThree">
    <input type="submit" name="submit" id="editSubmit">
    <button id="editButton">Edit</button>
</form>

</div>`;
var logContent = ` <div class="log">
<div class="title-log">
    <h1>Login Here!</h1>
    <form onsubmit="initListeners();return false">
        <input type="text" name="email" id="logEmail" placeholder="Email Address">
        <input type="text" name="password" id="logPassword" placeholder="Password">
        <input type="submit" placeholder="Login" id="logSubmit">
    </form>
</div>
<div class="title-create">
    <h1>Create Account!</h1>
    <form onsubmit="initListeners();return false">
        <input type="text" name="fName" id="fName" placeholder="First Name" />
        <input type="text" name="lName" id="lName" placeholder="Last Name">
        <input type="text" name="email" id="createEmail" placeholder="Email Address">
        <input type="text" name="password" id="createPassword" placeholder="Password">
        <input type="submit" placeholder="Create Account" id="createAccountSubmit">
    </form>
</div>
</div>`;



 function initOtherListeners() {

    $("a").click(function(e) {
        let btnId = e.currentTarget.id;
        MODEL.changePageContent(btnId);
    })

}

        
var _changePageContent = function(pageName) {
    let contentName = pageName + "Content";
    $("#app").html(eval(contentName));
     
    initOtherListeners();

}


return {
    changePageContent: _changePageContent,
}

})();


$(document).ready(function() {
    MODEL.changePageContent("home");
});