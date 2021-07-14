const dectotime = dec => {
    var temparr = new Array();
    temparr = dec.split('.');
    var hrs = temparr[0];
    var mins = (temparr[1] ? (temparr[1]/10 * 60).toString().substr(0, 2) : '00'); 
    return(
        hrs + ':' + mins
    )
}

const adddectotime = (dec, time) => {
    var [temparr, temparr2, temparr3] = new Array;
    var tempest = dectotime(dec);
    temparr = time.split(':');
    temparr2 = tempest.split(':');
    var newt1 = (Number(temparr[0] + '.' + temparr[1])).toFixed(2);
    var newt2 = (Number(temparr2[0] + '.' + temparr2[1])).toFixed(2);
    var newtsum = (Number(newt1) + Number(newt2)).toFixed(2);
    temparr3 = (newtsum.toString()).split('.');

    var condmin = ((Number(temparr3[1])-60) < 10) ? '0'+ (Number(temparr3[1])-60) : (Number(temparr3[1])-60);
    var condhrcond = ((Number(temparr3[0])) - 24)< 10 ? '0'+ ((Number(temparr3[0])) - 24) : ((Number(temparr3[0])) - 24);
    var condhr = ((Number(temparr3[0])) > 23 ? condhrcond : (Number(temparr3[0])));
    var totaltime = Number(temparr3[1]) > 59 ? (Number(condhr)+1) + ':' + condmin :  condhr + ':' + temparr3[1];

    return (
        totaltime
    )
}

const currenttime = (x='zz', y='HH:MM') => {
    if (x == 'HH:MM:SS'){
        return new Date().toLocaleString('zz',( [], { hour: '2-digit', minute: '2-digit', second: '2-digit' })); 
    } else {
        var p = new Date().toLocaleString(x,( [], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
        var q = new Date().toLocaleString(x,( [], { hour: '2-digit', minute: '2-digit' }));
        var z = ((y  == 'HH:MM:SS') ? p : q );

        return (
            z
        )
    }
}


export { dectotime , adddectotime, currenttime }