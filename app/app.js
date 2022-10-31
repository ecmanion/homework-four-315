


function initListeners() {
    $("#createAccountSubmit").click(function (e) {
        e.preventDefault();
        let firstName = $("#fName").val();
        let lastName = $("#lName").val();
        let email = $("#createEmail").val();
        let password = $("#createPassword").val();
        console.log("inputs " + firstName + " " + lastName + " " + email + " " + password);
    });

    $("#logSubmit").click(function (e) {
        e.preventDefault();
        let email = $("#logEmail").val();
        let password = $("#logPassword").val();
        console.log("inputs " + email + " " + password);
    });

    $("#createSubmit").click(function (e) {
        e.preventDefault();
        let recipeImg = $("#recipeImg").val();
        let recipeName = $("#recipeName").val();
        let recipeDes = $("#recipeDes").val();
        let recipeTT = $("#recipeTT").val();
        let recipeSS = $("#recipeSS").val();
        let ingredientOne = $("#ingredientOne").val();
        let ingredientTwo = $("#ingredientTwo").val();
        let ingredientThree = $("#ingredientThree").val();
        let instructionOne = $("#instructionOne").val();
        let instructionTwo = $("#instructionTwo").val();
        let instructionThree = $("#instructionThree").val();
        console.log("inputs " + recipeImg + " " + recipeName + " " + recipeDes + " " + recipeTT + " " + recipeSS + " " + ingredientOne + " " + ingredientTwo + " " + ingredientThree + " " + instructionOne + " " + instructionTwo + " " + instructionThree);
    });  
    
    $("#editSubmit").click(function (e) {
        e.preventDefault();
        let recipeImg = $("#recipeImg").val();
        let recipeName = $("#recipeName").val();
        let recipeDes = $("#recipeDes").val();
        let recipeTT = $("#recipeTT").val();
        let recipeSS = $("#recipeSS").val();
        let ingredientOne = $("#ingredientOne").val();
        let ingredientTwo = $("#ingredientTwo").val();
        let ingredientThree = $("#ingredientThree").val();
        let instructionOne = $("#instructionOne").val();
        let instructionTwo = $("#instructionTwo").val();
        let instructionThree = $("#instructionThree").val();
        console.log("inputs " + recipeImg + " " + recipeName + " " + recipeDes + " " + recipeTT + " " + recipeSS + " " + ingredientOne + " " + ingredientTwo + " " + ingredientThree + " " + instructionOne + " " + instructionTwo + " " + instructionThree);
    }); 
    
    
    $("#editButton").click(function (e) {
        e.preventDefault();

        let userObj = {
            recipeImg: "Picture of Brown Sugar Cookies",
            recipeName: "Brown Sugar Cookies",
            recipeDes: "30 minute warm Brown Sugar Cookies",
            recipeTT: "30 minutes",
            recipeSS: "12 cookies",
            ingredientOne: "butter",
            ingredientTwo: "flour",
            ingredientThree: "brown sugar",
            instructionOne: "Measure ingredients.",
            instructionTwo: "Beat together butter and brown sugar.",
            instructionThree: "Mix in flour."
        };
        console.log(userObj);
        $("#recipeImg").val(userObj.recipeImg);
        $("#recipeName").val(userObj.recipeName);
        $("#recipeDes").val(userObj.recipeDes);
        $("#recipeTT").val(userObj.recipeTT);
        $("#recipeSS").val(userObj.recipeSS);
        $("#ingredientOne").val(userObj.ingredientOne);
        $("#ingredientTwo").val(userObj.ingredientTwo);
        $("#ingredientThree").val(userObj.ingredientThree);
        $("#instructionOne").val(userObj.instructionOne);
        $("#instructionTwo").val(userObj.instructionTwo);
        $("#instructionThree").val(userObj.instructionThree);


    });
}

$(document).ready(function(){
    initListeners();
});

