function notify_sms_received(sms_json){
    if(localStorage.is_signing_up=='true'&&!check_apply_message_repeat(sms_json)){
        var apply_name=sms_json.messages[0].message.substr(2);
        var apply_phone=sms_json.messages[0].phone;
        var apply_message={name:apply_name,phone:apply_phone};
        var activities=JSON.parse(localStorage.activities);
        activities[1].sign_ups.push(apply_message);
        localStorage.setItem('activities',JSON.stringify(activities));
        return;
    }

}
function check_apply_message_repeat(sms_json){
    var apply_phone=sms_json.messages[0].phone;
    var activities=JSON.parse(localStorage.activities);
    var current_activity=_.findWhere(activities,{name:'second activity'})
    if(_.find(current_activity.sign_ups,function(sign_up){return sign_up.phone==apply_phone}))
        return true;
    return false;

}
