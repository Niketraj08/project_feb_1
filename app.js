var istatus = document.querySelector("h5")

var btn= document .querySelector("#add")

var check= 0
btn.addEventListener("click", function(){
    if(check == 0){
        istatus.innerHTML = "Friend Request Sent"
        istatus.style.color = "green"
        btn.innerHTML = "Cancel Request"
        check = 1
    }
    else{
        istatus.innerHTML = "Friend Request Cancelled"
        istatus.style.color = "red"
        btn.innerHTML = "Add Friend"
        check = 0
    }
//    addFriend.style.backgroundColor = "green"
//    addFriend.innerHTML = "Request Sent"
})

