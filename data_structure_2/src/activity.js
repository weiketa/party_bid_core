function Activity(activity_name){
    this.name=activity_name;
}
Activity.prototype.create=function(){
    var activity_ids=JSON.parse(localStorage.activity_ids);
    var activities=JSON.parse(localStorage.activities);
    var activity_id=activity_ids.length+'';
    localStorage.activity_id_generator=activity_ids.length+1;
    activity_ids.push(activity_id);
    activities[activity_id]={name: this.name,sign_ups:[],bids:[],biddings:{}};
    localStorage.setItem('activities',JSON.stringify(activities));
    localStorage.setItem('activity_ids',JSON.stringify(activity_ids));
    localStorage.current_activity_id='0';
}