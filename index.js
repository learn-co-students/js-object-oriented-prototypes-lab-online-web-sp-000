 function BoardMember(name, homeState, training){
   this.name = name
   this.homeState = homeState
   this.training = training

   BoardMember.protoype.veto = function(){
     return 'No, I must disagree'
   }
   BoardMemeber.protoype.approve = function(){
     return 'You can do that!'
   }
   BoardMemeber.protoype.doCharity = function(){
     return "I like to help people."
   }

   BoardMemeber.protoype.releasePressStatement = function(){
     return "You will see great things from Scuber."
   }

   BoardMemeber.protoype.sayHi = function(){
     return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
   }
 }
