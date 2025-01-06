let main_body = document.querySelector("#main_body");
let bot_current_status = document.querySelector("#user_status");
main_body.addEventListener("scroll", function (e) {
//    main_body.style.justifyContent="start";
//  console.log(e)
  let {scrollTop, clientHeight, scrollHeight} = e.target;
//  console.log(scrollTop,clientHeight,scrollHeight);
//  console.log(scrollTop+clientHeight < scrollHeight)
  if(scrollTop+clientHeight < scrollHeight){
  //  scrollTop(scrollHeight-clientHeight)
    scrollTop = scrollHeight;
  }
})

document.querySelector(".send").addEventListener("click", (e)=>{
  let text_input = document.querySelector(".text_input");
//  text_input.active="true";
  
  if(text_input.value!="" && text_input.value!=" "){
  //  main_body.style.justifyContent=""
    let user_input = document.createElement("p");
    user_input.innerHTML =text_input.value;
    user_input.classList.add("user_input");
    main_body.appendChild(user_input)
    let text = text_input.value.toLowerCase().split(" ");
    text_input.value = "";
    bot_current_status.innerHTML = "Typing...";
    
    setTimeout(()=>{
      let user_output = document.createElement("p");
      user_output.classList.add("user_output");
      if(text.includes("hi") || text.includes("hello") || text.includes("hey") || text.includes("hii")){
        user_output.innerHTML="Hi, I Am a ChatBot, How are you?"
      }
      else if(text.includes("how") && text.includes("are") && text.includes("you")){
        user_output.innerHTML = "I Am good what's about you";
      }
      else if(text.includes("am") && text.includes("fine")){
        user_output.innerHTML = "That's good! just tell me what you want to ask me/sohail."
      }
      else if(text.includes("loader") && text.includes("css")){
        user_output.innerHTML = "Loader by Universe.io :-<br><a href='https://uiverse.io/Nawsome/spicy-wolverine-85'>https://uiverse.io/Nawsome/spicy-wolverine-85</a>";
      }
      else if(text.includes("your") && text.includes("summary") && text.includes("profile")){
        user_output.innerHTML = "Summary or Profile :<br>A Passionate developer with storg foundation in HTML, CSS and JavaScript. Proficient in React Js and Responsive design principles."
      }
      else if(text.includes("your") && text.includes("projects") || (text.includes("your") && text.includes("project"))){
        user_output.innerHTML = 
        "My Top Three Projects : <br>1) <b>Movie Media :</b> Developed a Movie Searcher website using HTML, CSS, JavaScript, Tailwind CSS and React js.<br> 2) <b>InstaGram Clone :</b> Developed a instagram clone using HTML, CSS and JavaScript. I made this website fully responsive and use simillar function as Instagram as posible.<br> 3) <b>Tik-Tak-Toe Game :</b> Developed a tik-tak-toe game using HTML, CSS, JavaScript.";
      }
      else if(text.includes("random") && text.includes("advice") && text.includes("api")){
        user_output.innerHTML = "Random Advice API :-<br><a href='https://api.adviceslip.com/advice'>https://api.adviceslip.com/advice</a>";
      }
      else if(text.includes("vector") && (text.includes("images") || text.includes("image"))){
        user_output.innerHTML = "Pictographic Vector Images :-<br><a href='https://pictographic.azureedge.net/previews/oldschool/mtAHaJZh4FzyGgHTJENx.png'>Picotgraphic Free vector illustrations/Images</a>";
      }
      else if(text.includes("mahila") && text.includes("sammaan") && text.includes("yojna")){
        user_output.innerHTML = "कोड: G9RM3W8	केजरीवाल की योजना में आपका रेजिस्ट्रेशन हो गया है।	AAP"
      }
      else if(text.includes("icons") || text.includes("icon") && (text.includes("css"))){
        user_output.innerHTML = "CSS flatIcons link :-<br><a href='https://www.flaticon.com/free-icons/instagram'>https://www.flaticon.com/free-icons/instagram</a>";
      }
      else if(text.includes("random") && text.includes("image") && text.includes("api")){
        user_output.innerHTML = "Random Images API :-<br><a href='https://source.unplash.com/random'>https://source.unplash.com/random</a>";
      }
      
      else if(text.includes("mouse") && (text.includes("events") || text.includes("event"))){
        user_output.innerHTML = "JavaScript Mouse Events :-<br>1) Click Event :- when mouse click on somewhere in screen, click event has been executed.<br>2) Context Menu : Known as Mouse Right click it execute when user click on screen with mouse right click.<br>3) Mouseover : this event executed when mouse hovering over some element.<br>4) Mouseout : It fires when mouse leaving hovering over element.<br>5) Double Click : it fires when somthing clicked twice in sequence.<br>6) Mouseup : It fires when mouse button released.<br>7) Mousemove : It fires when the mouse moves.";
      }
      else if(text.includes("keyboard") && (text.includes("events") || text.includes("event"))){
        user_output.innerHTML = "JavaScript Keyboard Events :-<br>1) Keydown <br>2) Keyup."
      }
      else if(text.includes("form") && (text.includes("event") || text.includes("events"))){
        user_output.innerHTML = "JavaScript Form Events :-<br>1) Submit <br>2) Focus"
      }
      
      else if(text.includes("tailwind") && text.includes("cdn") && text.includes("css") || (text.includes("tailwind") && text.includes("cdn"))){
        user_output.innerHTML = "Tailwind CDN Link :-<br><a>https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp,container-queries</a>";
      }
      else if(text.includes("yourself") && text.includes("tell") && text.includes("about") || (text.includes("sohail") && text.includes("about's") && text.includes("tell"))){
        user_output.innerHTML="Sohail is a passionate frontend developer with strong foundation in HTML, CSS and JavaScript"
      }
      else if(text.includes("sohail") && text.includes("tik") && text.includes("tak") && text.includes("toe")){
        user_output.innerHTML = "Tik-Tak-Toe github link :-<br><a href='https://md-sohail-1.github.io/Tik-Tak-Toe-Game/'>https://md-sohail-1.github.io/Tik-Tak-Toe-Game/</a>"
      }
      else if(text.includes("sohail") && text.includes("digital") && text.includes("stop") && text.includes("watch")){
        user_output.innerHTML = "Digital stop watch Github link :-<br><a href='https://md-sohail-1.github.io/Digital-stop-watch/'>https://md-sohail-1.github.io/Digital-stop-watch/</a>"
      }
      else if(text.includes("sohail") && text.includes("age") || (text.includes("sohail") && text.includes("years"))){
        user_output.innerHTML="Sohail is 19 years old."
      }
      else if(text.includes("future") || text.includes("career") && (text.includes("sohail") && text.includes("plan"))){
        user_output.innerHTML="Sohail want to be frontend developer or web desinger in 2025"
      }
      else if(text.includes("react") && text.includes("create") && (text.includes("app") || text.includes("command"))){
        user_output.innerHTML="1) install npm, node & react.<br>2) npm create-react-app <q>project name</q> <br>3) cd <q>project name</q><br> 4) npm i <br>5) npm start <br>6) Open react app with O+enter."
      }
      else if(text.includes("react") && text.includes("vite") && (text.includes("app") || text.includes("command"))){
        user_output.innerHTML="1) install npm, node & react.<br>2) npm create vite@latest.<br>3) Enter <q>project name</q><br> 4) Select Framework for projects - react/angular/next/jquery etc.<br>5) Select language - js/tcs.<br>6) npm i.<br>7) cd <q>Project name</q><br>8) npm run dev."
      }
      else(
        user_output.innerHTML="hi how can i help you?, you ask me about Sohail."
      );
      main_body.appendChild(user_output);
      bot_current_status.innerHTML ="Message";
      window.navigator.vibrate(300);
    },1000)
  }
})
