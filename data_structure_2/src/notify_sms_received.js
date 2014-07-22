function notify_sms_received(sms_json){
    if(localStorage.is_signing_up=='true'&&!check_apply_message_repeat(sms_json)){
        var apply_message=get_sign_up_message_data(sms_json);
        var activities=JSON.parse(localStorage.activities);
        var current_activity_id=localStorage.current_activity_id;
        activities[current_activity_id].sign_ups.push(apply_message);
        localStorage.setItem('activities',JSON.stringify(activities));
}
    if(localStorage.is_bidding=='true'&&is_signed_up(sms_json)&&!check_bid_message_repeat(sms_json)){
        var current_activity_id=localStorage.current_activity_id;
        var current_bid=localStorage.current_bid;
        var activities=JSON.parse(localStorage.activities);
        var biddings= activities[current_activity_id].biddings;
        var bid_message_data=get_bid_message_data(sms_json);
        biddings[current_bid].push(bid_message_data);
        localStorage.setItem('activities',JSON.stringify(activities));

    }
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
function check_apply_message_repeat(sms_json){
    var apply_message=get_sign_up_message_data(sms_json);
    var activities=JSON.parse(localStorage.activities);
    var current_activity_id=localStorage.current_activity_id;
    if(_.findWhere(activities[current_activity_id].sign_ups,{phone:apply_message.phone})){
        return true;
    }
     return false;
}
function is_signed_up(sms_json) {
    var activities=JSON.parse(localStorage.activities);
    var current_activity_id=localStorage.current_activity_id;
    var sign_ups=activities[current_activity_id].sign_ups;
    var bid_message_data=get_bid_message_data(sms_json);
    if(_.findWhere(sign_ups,{phone:bid_message_data.phone})){
        return true;
    }
    return false;
}
function check_bid_message_repeat(sms_json){
    var activities=JSON.parse(localStorage.activities);
    var current_activity_id=localStorage.current_activity_id;
    var current_bid=localStorage.current_bid;
    var biddings= activities[current_activity_id].biddings;
    var bid_message_data=get_bid_message_data(sms_json);
    if(_.findWhere(biddings[current_bid],{phone:bid_message_data.phone})){
        return true;
    }
    return false;
}
