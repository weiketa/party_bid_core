function render_sign_ups(current_activity){
    var activities=JSON.parse(localStorage.activities);
    return _.findWhere(activities,{name:current_activity}).sign_ups;
}