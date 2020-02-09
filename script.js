window.onload = function(e) {
    let items = document.querySelectorAll('.items .item');
    for( let i = 0; i < items.length; i++) {
        items[i].onclick = function() {
           if(this.style.border != '1px solid red',
           this.style.backgroundColor != 'green' ) {
                this.style.border = '1px solid red';
                this.style.backgroundColor = 'green';
           }
           else {
            this.style.border = 'none';
            this.style.backgroundColor = '#eee';
           }
        }
    }
}