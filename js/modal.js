class VidameModal{
    constructor(el){
        this.el = document.querySelector(el);
        this.closeDiv = this.el.querySelector('div.modal-close');
        if (!this.closeDiv){
            this.closeDiv = document.createElement('div');
            this.closeDiv.classList.add('modal-close');
            this.closeDiv.innerHTML = '<span>X</span>';
            this.el.prepend(this.closeDiv);
        }
        this.overlay = document.querySelector('#overlay');
        if (!this.overlay){
            this.overlay = document.createElement('div');
            this.overlay.id = "overlay";
            document.body.append(this.overlay);
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
        this.closeDiv.addEventListener(
            'click',
            this.close.bind(this)
        );
        window.addEventListener(
            'keydown',
            this.onEscKey.bind(this)
        );
    }
            
    close(){
        this.el.classList.remove('modal-open');
        this.closeDiv.removeEventListener(
            'click',
            this.close.bind(this)
        );
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
            // TODO pas sûr que ça fonctionne !!!
        }
    }
}

let a, b;
let btn1 = document.querySelector('.btns button.btn:first-of-type');
let btn2 = document.querySelector('.btns button.btn:last-of-type');

window.addEventListener("load", _ => {
    a = new VidameModal('.box');
    b = new VidameModal('.box2');

    btn1.addEventListener('click', _ => {
        a.open()
    });

    btn2.addEventListener('click', _ => {
        b.open()
    });

});