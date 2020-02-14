window.onload = function() {
  populateUsers();
};

let populateUsers = function() {
  fetch("https://randomuser.me/api?results=10")
    .then(function(res) {
      return res.json();
    })
    .then(function(payload) {
      payload.results.forEach(function(user, index) {
        let li = document.createElement("li");
        let img = document.createElement("img");
        let span = document.createElement("span");
        let ul = document.getElementById("users");
        img.setAttribute("src", user.picture.large);
        span.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`;
        let button = document.createElement("button");
        button.innerText = "Show My Email";
        button.setAttribute("data-email", user.email);
        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(button);
        button.addEventListener("click", function(event) {
          var clickedButton = event.target;
          var email = clickedButton.getAttribute("data-email");
          var clickedLi = clickedButton.parentElement;
          let emailSpan = document.createElement("span");
          emailSpan.innerText = email;
          clickedLi.appendChild(emailSpan);
          clickedLi.removeChild(clickedButton);
        });
        ul.appendChild(li);
      });
    });
};
