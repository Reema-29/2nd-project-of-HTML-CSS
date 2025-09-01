
document.addEventListener('DOMContentLoaded', function(){
  const ham = document.querySelector('.hamburger');
  const sidebar = document.querySelector('.sidebar');
  if(ham && sidebar){
    ham.addEventListener('click', function(e){ e.stopPropagation(); sidebar.classList.toggle('open'); });
    document.addEventListener('click', function(e){
      if(!sidebar.contains(e.target) && !ham.contains(e.target) && sidebar.classList.contains('open')){
        sidebar.classList.remove('open');
      }
    });
  }
});
