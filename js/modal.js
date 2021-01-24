class VidameModal{
    constructor(el){
        console.log(el)
        this.el = document.querySelector(el);
        console.log(this.el)
        this.overlay = document.querySelector('#overlay');
        if (!this.overlay){
            this.overlay = document.createElement('DIV');
            this.overlay.id = "overlay";
            document.body.appendChild(this.overlay);
        }
    }

    open(){
        document.body.classList.add('modal-on');
        this.el.style.display = 'block';
        window.setTimeout(_=>{
            this.overlay.style.display = 'block';
            this.el.classList.add('modal-open');
        },5);
        this.overlay.addEventListener(
            'click',
            this.close.bind(this),
            {once: true}
        );
        window.addEventListener(
            'keydown',
            this.onEscKey.bind(this)
        );
    }
            
    close(){
        this.el.classList.remove('modal-open');
        let that = this;
        this.el.addEventListener('transitionend', e =>{
            that.el.style.display = 'none';
            that.overlay.style.display = 'none';
            document.body.classList.remove('modal-on');
        }, {once: true});
    }

    onEscKey(e){
        if (e.key === "Escape") {
            this.close();
            window.removeEventListener('keydown', this.onEscKey.bind(this));
        }
    }
}

let a;
let btn1 = document.querySelector('.btns button.btn:first-of-type');
let btn2 = document.querySelector('.btns button.btn:last-of-type');

window.addEventListener("load", _ => {
    a = new VidameModal('.box');

    btn1.addEventListener('click', _ => {
        a.open()
    });

});