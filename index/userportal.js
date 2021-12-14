let history = document.getElementById('history');
history.style.display="none";
function hide_profile(){
    let profile = document.getElementById('profile');
    if(profile.style.display="none")
    {profile.style.display="block";
    history.style.display="none"
    }
};
function hide_history(){
    let history = document.getElementById('history');
    if(history.style.display="none"){
        profile.style.display="none";
        history.style.display="block";
    }
};


