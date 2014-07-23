function Activity(activity_name){
    this.id=localStorage.activity_id_generator;
    this.name=activity_name;
}

Activity.prototype.create=function(){
    var activities=JSON.parse(localStorage.activities);
    activities.push({id:this.id,name:this.name});
    localStorage.current_activity_id='0'
    localStorage.activity_id_generator=activities.length;
    localStorage.setItem('activities',JSON.stringify(activities));
}