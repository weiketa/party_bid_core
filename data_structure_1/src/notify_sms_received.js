function notify_sms_received(sms_json){
    if(localStorage.is_signing_up=='true'&&!check_apply_message_repeat(sms_json)){
        var apply_message=get_sign_up_message_data(sms_json);
        var activities=JSON.parse(localStorage.activities);
        activities[1].sign_ups.push(apply_message);
        localStorage.setItem('activities',JSON.stringify(activities));
        return;
    }
    if(localStorage.is_bidding=='true'&&is_signed_up(sms_json)&&!check_bid_message_repeat(sms_json)){
        var current_activity=localStorage.current_activity;
        var current_bid=localStorage.current_bid;
        var activities=JSON.parse(localStorage.activities);
        var bids=_.findWhere(activities,{name:current_activity}).bids;
        var biddings= _.findWhere(bids,{name:current_bid}).biddings;
        var sign_ups=_.findWhere(activities,{name:current_activity}).sign_ups;
        var bid_message_data=get_bid_message_data(sms_json);
        bid_message_data.name= (_.findWhere(sign_ups,{phone:bid_message_data.phone})).name;
        biddings.push(bid_message_data);
        localStorage.setItem('activities',JSON.stringify(activities));

    }

}
function check_apply_message_repeat(sms_json){
    var apply_phone=sms_json.messages[0].phone;
    var activities=JSON.parse(localStorage.activities);
    var current_activity=_.findWhere(activities,{name:'second activity'});
    if(_.find(current_activity.sign_ups,function(sign_up){return sign_up.phone==apply_phone})){
        return true;
    }
    return false;
}
function get_sign_up_message_data(sms_json) {
    var apply_name=sms_json.messages[0].message.substr(2);
    var apply_phone=sms_json.messages[0].phone;
    var apply_message={name:apply_name,phone:apply_phone};
    return apply_message;
}
function get_bid_message_data(sms_json) {
    var bid_price=sms_json.messages[0].message.substr(2);
    var bid_phone=sms_json.messages[0].phone;
    var bid_message={price:bid_price,phone:bid_phone};
    return bid_message;
}
function is_signed_up(sms_json) {
    var activities=JSON.parse(localStorage.activities);
    var current_activity=localStorage.current_activity;
    var sign_ups=_.findWhere(activities,{name:current_activity}).sign_ups;
    var bid_message_data=get_bid_message_data(sms_json);
    if(_.findWhere(sign_ups,{phone:bid_message_data.phone})){
        return true;
    }
    return false;
}
function check_bid_message_repeat(sms_json){
    var activities=JSON.parse(localStorage.activities);
    var current_activity=localStorage.current_activity;
    var current_bid=localStorage.current_bid;
    var bids=_.findWhere(activities,{name:current_activity}).bids;
    var biddings= _.findWhere(bids,{name:current_bid}).biddings;
    var bid_message_data=get_bid_message_data(sms_json);
    if(_.findWhere(biddings,{phone:bid_message_data.phone})){
        return true;
    }
    return false;
}
