function render_bids(current_activity) {
    var bids=JSON.parse(localStorage.bids);
    var group_by_name_bids=_.groupBy(bids,function(bid){return bid.name});
    var bids_name=[];
    _.each(group_by_name_bids,function(bid_name,key){
        bids_name.push({name:key});
    });
    return bids_name;
}
function render_biddings(current_activity,current_bid) {
    var bids=JSON.parse(localStorage.bids);
    var sign_ups=JSON.parse(localStorage.sign_ups);
    var biddings= _.find(bids,function(bid){return bid.name==current_bid&&bid.activity_id==current_activity}).biddings;
    var group_by_price_biddings= _.groupBy(biddings,function(bidding){return bidding.price});
    var minimum_and_not_repeat_bid=_.find(group_by_price_biddings,function(bid){return bid.length==1});
    var bid_success_name= _.find(sign_ups,function(sign_up){return sign_up.phone==minimum_and_not_repeat_bid[0].phone&&sign_up.activity_id==current_activity}).name;
    minimum_and_not_repeat_bid[0].name=bid_success_name;
    return minimum_and_not_repeat_bid;
}