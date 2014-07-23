function notify_sms_received(sms_json){
    if(localStorage.is_signing_up=='true'&&!check_apply_message_repeat(sms_json)){
        var sign_ups=JSON.parse(localStorage.sign_ups);
        var sign_ups_message_data=get_sign_up_message_data(sms_json);
        sign_ups.push({name:sign_ups_message_data.name,phone:sign_ups_message_data.phone,activity_id:localStorage.current_activity});
        localStorage.setItem('sign_ups',JSON.stringify(sign_ups));
    }
    if(localStorage.is_bidding=='true'&&is_signed_up(sms_json)&&!check_bid_message_repeat(sms_json)){
        var current_activity=localStorage.current_activity;
        var current_bid=localStorage.current_bid;
        var sign_ups=JSON.parse(localStorage.sign_ups);
        var bids = JSON.parse(localStorage.bids);
        var bid_message_data=get_bid_message_data(sms_json);
        var sign_up_name= _.find(sign_ups,function(sign_up){return sign_up.phone==bid_message_data.phone&&sign_up.activity_id==current_activity}).name;
        bids.push({name:current_bid,activity_id:current_activity,biddings:[{name:sign_up_name,phone:bid_message_data.phone,price:bid_message_data.price}]});
        localStorage.setItem('bids',JSON.stringify(bids));

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
    var sign_ups=JSON.parse(localStorage.sign_ups);
    if(_.find(sign_ups,function(sign_up){return sign_up.activity_id==localStorage.current_activity&&sign_up.phone==apply_message.phone})){
        return true;
    }
    return false;
}
function is_signed_up(sms_json) {
    var current_activity=localStorage.current_activity;
    var sign_ups=JSON.parse(localStorage.sign_ups);
    var bid_message_data=get_bid_message_data(sms_json);
    if(_.find(sign_ups,function(sign_up){return sign_up.phone==bid_message_data.phone&&sign_up.activity_id==current_activity})){
        return true;
    }
    return false;
}
function check_bid_message_repeat(sms_json){
    var current_activity=localStorage.current_activity;
    var current_bid=localStorage.current_bid;
    var bids= JSON.parse(localStorage.bids);
    var bid_message_data=get_bid_message_data(sms_json);
    var biddings=_.find(bids,function(bid){return bid.name==current_bid&&bid.activity_id==current_activity});
    if(_.findWhere(biddings,{phone:bid_message_data.phone})){
        return true;
    }
    return false;
}
