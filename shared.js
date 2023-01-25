var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var modalNoButton= document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav=document.querySelector('.mobile-nav')


for(let i=0; i<selectPlanButtons.length; i++)
{
    selectPlanButtons[i].addEventListener('click',function()
    {
        // modal.style.display='block';
        // backdrop.style.display='block';
        // modal.className='.open'; //this will override the complete class list
        modal.classList.add('open');
        backdrop.classList.add('open');


    });
}

backdrop.addEventListener('click',closeModal);
if(modalNoButton){
    modalNoButton.addEventListener('click',closeModal);

}

function closeModal()
{
    // mobileNav.style.display= 'none';
    // modal.style.display='none';
    // backdrop.style.display='none';
    mobileNav.classList.remove('open');
    if(modal){
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');

}

toggleButton.addEventListener('click', () => {
        // backdrop.style.display = 'block';
        // mobileNav.style.display= 'block';
        backdrop.classList.add('open');
        mobileNav.classList.add('open');
    })