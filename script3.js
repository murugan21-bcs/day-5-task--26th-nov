{"Name":"Murugan",
"e mail id: muruganduraisamy17@gmail.com",
"contact no : 9344737697",
"qualification : B.sc(computer science)",
"passed out year:2021,"
"percentage : 85%",
"10th percentage : 70%",
"12th percentage : 65%",
"skill set" :,
        "1. c language",
        "2.  c++ language",
        "3.data structure",
         "4.RDBMS",
        "5. Java",
"Area of intrest:",
       "desktop engineer",
       "trainee",
       "information tecnology",
       "software developer",
"project work:",
  

      "Title: college fees automation systtem",
     
      "Topics: system specification",
              "system study",
              "system design",
              "system development",}

//json in using loop

var p = {
        "a1": "bmw",
        "a2": "audi",
        "a3": "benz"
    };
    
    for (var key in p) {
        if (p.hasOwnProperty(key)) {
            console.log(key + " -> " + p[key]);
        }
    }

//json in using for in loop

var persons = {
        deo: { age: 26, job: "trainee" },
        sam: { age: 28, job: "engineer" }
      };
       
      for (var user in persons) {
        console.log(`Name: ${user}, Age: ${persons[user].age}, Job: ${persons[user].job}`);
      }

//json using for of loop

  var persons ={
        deo: {age:24, job: "trainee"},
        sam: {age:25, job: "engineer"}
  };
  for (var user of persons){
        console.log("name: ${user}, age :${persons[user].age}, job:${persons[user].job}");
  }


// json using for each loop

  var persons ={
        deo:{age:23,job:"software developer"},
        sam:{age:28,job:"desktop engineer"}
  };
  for (var user each persons){
        console.log("name:${user},age:${persons[user].age},job:${persons[user].job}");
  }