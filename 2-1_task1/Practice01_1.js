function simple_alert(){
    const judge = window.confirm('CLICK COMPLETE');

    var elem = document.getElementById("message")
    if(judge){
        elem.innerHTML="<p>OKがクリックされました!</p>";
    }else{
        elem.innerHTML="<p>キャンセルがクリックされました!</p>";
    }
}