function Activity(activity_name){
    this.name=activity_name;
    this.sign_ups=[];
    this.bids=[];
}
Activity.prototype.create=function(){
    var activities=JSON.parse(localStorage.activities);
        activities.push(this);
    localStorage.setItem('activities',JSON.stringify(activities));
}
Activity.prototype.active=function(){
    localStorage.setItem('current_activity',this.name);
}
