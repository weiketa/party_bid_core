function create_new_bid(activity_name){
    var activities=JSON.parse(localStorage.activities);
    _.findWhere(activities,{name:activity_name}).bids.push({name:'竞价1',biddings:[]});
    localStorage.setItem('activities',JSON.stringify(activities));
}