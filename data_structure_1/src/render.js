function transform_bids_to_view_model(current_activity){
    var activities=JSON.parse(localStorage.activities);
    var bids=_.findWhere(activities,{name:current_activity}).bids;
    return bids;
}
function transform_biddings_to_view_model(current_activity,current_bid) {
    var activities=JSON.parse(localStorage.activities);
    var bids=_.findWhere(activities,{name:current_activity}).bids;
    var biddings= _.findWhere(bids,{name:current_bid}).biddings;
    var group_by_bid_price= _.groupBy(biddings,function(bid){return bid.price});
    return  _.find(group_by_bid_price,function(bid){return bid.length==1});

}
