//document.querySelector("#subscribe").addEventListener("click", function(){
    //console.log("this works")

    //if(this.checked){
    //    document.getElementById("emailDiv").style.display = "block";
    //}
    //else{
    //    document.getElementById("emailDiv").style.display = "none";
    //}
//});

//Challenge 1 part 1

//document.querySelector("#subscribe").addEventListener("click", function(){
  //  if(this.checked){
    //    document.querySelector("#emailDiv").style.display = "block";
    //}else{
      //  document.querySelector("#emailDiv").style.display = "none";
   // }
//})

//Challenge 1 part 2
//document.addEventListener("click", function() {
//    let currentTime = new Date();
//    alert("Current time: " + currentTime);
//})

//Challenge 2

//When the box is checked the “Billing Address” (#bill) shows up in the “Home Address” (#home) field
//When the box (#sameAddress) is checked you can’t edit the “Home Address” field
//Fix the Accessibility Error on the page

document.querySelector("#sameAddress").addEventListener("click", function(){
    console.log(this.checked)

    bill = document.querySelector("#bill")
    home = document.querySelector("#home")
    console.log("Home value is" + home.value)
    console.log("Bill value is" + bill.value)
    if(this.checked){
        home.value = bill.value
        home.disabled = true
    }
    else{
        console.log("Unset it")
        home.value = ""
        home.disabled = false
    }
})