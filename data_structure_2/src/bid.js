function create_new_bid(current_activity_id){
    var activities = JSON.parse(localStorage.activities);
    activities[current_activity_id].bids.push('竞价1');
    activities[current_activity_id].biddings['竞价1']=[];
    localStorage.setItem('activities',JSON.stringify(activities));
}