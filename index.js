let button=$('#submitButton')
let userName=$("#userName")
let comment=$("#comments")

$(button).click(function(event){
    event.preventDefault()
    $("#userDisplay").append(`<div class="commentsDiv"> 
    <div class="everythig">
    <div class="nameAndComment">
    <p>${userName.val()}</p>
    <p>${comment.val()}</p> 
    </div>
    <div class="removeAndEditButton">
    <div class="editButton">edit</div>
    <div class="removeComment">remove</div>
    </div>
    </div>
    <div class="noDisplay"> 
    <input  id="editComment" value="${comment.val()}" type="text">
    <input id="submitEdit"  type="submit">
   
    </div> 
    </div>`)
});
$("#userDisplay").on('click','.editButton',function(){
   let firstParent= $(this).parent()
   let secondParent=$(firstParent).parent()
   let thirdParent=$(secondParent).parent()
   let firstChild= $(thirdParent).children()[1];
   $(firstChild).toggleClass('noDisplay')
  
})
$("#userDisplay").on('click','#submitEdit',function(){
    let firstParent=$(this).parent();
    let firstchild=$(firstParent).children()[0];
    let savecomment=$(firstchild).val();
    let secondParent=$(firstchild).parent()
    let thirdParent=$(secondParent).parent()
    let secondchild=$(thirdParent).children()[0];
    let thirdchild=$(secondchild).children()[0];
    let fouthchild=$(thirdchild).children()[1];
    let updatedComment=$(fouthchild).text(savecomment)
   
})
$("#userDisplay").on('click','.removeComment',function(){
let firstparent = $(this).parent();
let secondParent=$(firstparent).parent();
let thirdParent=$(secondParent).parent();
$(thirdParent).remove()
})
