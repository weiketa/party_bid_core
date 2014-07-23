function render_sign_ups(current_activity){
    var sign_ups=JSON.parse(localStorage.sign_ups);
    var group_by_activity_id_sign_ups= _.groupBy(sign_ups,function(sign_up){return sign_up.activity_id});
    return  _.find(group_by_activity_id_sign_ups,function(sign_up,key){return key==current_activity});
}