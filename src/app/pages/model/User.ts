export interface User {
    first_name : string;
    last_name : string;
    username : string;
    password : string;
    empId : string;
    address : string;
    city : string;
    state : string;
    country : string;
    pincode : number;
    about : string;
    drink : string;    
    smoke : string;
    emailId : string;
    marital_status : string;
    food_pref : string;
    restarant_pref : Array<string>;
    location_pref : Array<string>;
    projectId : Array<string>;
    admin : string;
    profile_pic : string;
  }