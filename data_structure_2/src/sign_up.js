function render_sign_ups(){
    var activities=JSON.parse(localStorage.activities);
    return activities[localStorage.current_activity_id].sign_ups;
}