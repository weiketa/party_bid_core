function create_new_bid(current_activity){
    var bids = JSON.parse(localStorage.bids);
    bids.push({name:'竞价1',activity_id:current_activity,biddings:[]});
    localStorage.setItem('bids',JSON.stringify(bids));
}