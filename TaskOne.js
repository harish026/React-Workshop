function EmpDetails() {
    var Eid=111;
    var name= "harish";
    var age = 21;
    var designation = " Software Developer intern";
    
    var getName = function(Eid) {
      if(Eid==111)
      {
          console.log("name of the Employee:"+name);
      }
        else
      {
          console.log("given Employee ID doesnot exist");
      }
    }
   var getAge = function(Eid) {
      if(Eid==111)
      {
          console.log("Age of the Employee :"+age);
      }
        else
      {
          console.log("given Employee ID doesnot exist");
      }
    }
  var getDesignation = function(Eid) {
      if(Eid==111)
      {
          console.log("Designation of the Employee :"+designation);
      }
        else
      {
          console.log("given Employee ID doesnot exist");
      }
    }

        return {
          Eid:Eid,
          name: name,
          age: age,
          designation:designation,
          getName: getName,
          getAge:getAge,
          getDesignation:getDesignation,
    }
  }
  
var E1 = EmpDetails();
var Name = E1.getName(111);
var age=E1.getAge(111);
var Designation=E1.getDesignation(111);
var Dname=E1.getName(121);
var DDesignation=E1.getDesignation(124);
var DDesignationage=E1.getAge(1111);
