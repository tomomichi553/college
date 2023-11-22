function act(){
    result=Math.floor(Math.random()*3)
    switch(result){
        case 0:
            window.confirm('大吉');
            break;
        case 1:
            window.confirm('中吉');
            break;
        case 2:
            window.confirm('小吉');
            break;
//コメント
    }
}