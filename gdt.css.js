


document.querySelectorAll('.gdt-dropdown-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
        btn.nextElementSibling.classList.toggle('show');
    });
});

document.querySelectorAll('.gdt-accordion-header').forEach(head=>{
    head.addEventListener('click', ()=>{
        let content = head.nextElementSibling;

        if (content.style.height === "0px" || content.style.height === "") {
            content.style.height = content.scrollHeight + "px";
        } else {
            content.style.height = "0px";
        }
    });
});


function gdtOpenTab(index){
    document.querySelectorAll('.gdt-tab').forEach((tab, i)=>{
        tab.classList.toggle('active', i === index);
    });
    document.querySelectorAll('.gdt-tab-content').forEach((c, i)=>{
        c.classList.toggle('show', i === index);
    });
}
