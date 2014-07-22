function transform_bids_to_view_model(current_activity_id){
    var activities=JSON.parse(localStorage.activities);
    return activities[current_activity_id].bids;
}
function transform_biddings_to_view_model(current_activity_id,current_bid){
    var activities=JSON.parse(localStorage.activities);
    var biddings=activities[current_activity_id].biddings[current_bid];
    var group_by_price_biddings= _.groupBy(biddings,function(bid){return bid.price});
    var minimum_and_not_repeat_bid=_.find(group_by_price_biddings,function(bid){return bid.length==1});
    var sign_ups=activities[current_activity_id].sign_ups;
    minimum_and_not_repeat_bid[0].name= _.find(sign_ups,function(sign_up){return sign_up.phone==minimum_and_not_repeat_bid[0].phone}).name;
    return minimum_and_not_repeat_bid;
}