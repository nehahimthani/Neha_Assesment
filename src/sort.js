_resetexperience = function(exp){
    if(exp.indexOf('yrs') >= 0){
        var temp = exp.replace('yrs','').split("-");
        temp = temp.map(function(item){
            return item.trim();
        })
        return temp.join('-');
    }
    if(exp.indexOf('to') >=0){
        var temp = exp.replace('to','').split("-");
        temp = temp.map(function(item){
            return item.trim();
        })
        return temp.join('-');
    }
    return 0;
}

temp1.jobsfeed.sort(function (a, b) { 
    console.log('b', b); 
    console.log('a', a); 
    b.experience = _resetexperience(b.experience);
    a.experience = _resetexperience(a.experience);   
    return +b.experience.split("-")[0] > +a.experience;
});