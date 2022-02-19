function addUser()
{
    user_name = document.getElementById("player_name").value;
    localStorage.setItem("player_name", user_name);
    window.location = "kwitter_room.html";
}