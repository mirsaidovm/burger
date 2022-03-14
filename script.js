const product = {
    plainBurger: {
        name: 'Гамбургер простой',
        price: 10000,
        kcall: 400,
        amount:0,
        get Sum(){
            return this.price * this.amount
        },
        get Kcall(){
            return this.amount * this.kcall
        }
    },
    freshBurger: {
        name: 'Гамбургер FRESH',
        price: 20500,
        kcall: 500,
        amount:0,
        get Sum(){
            return this.price * this.amount
        },
        get Kcall(){
            return this.amount * this.kcall
        }
    },
    freshCombo: {
        name: 'FRESH COMBO',
        price: 32000,
        kcall: 700,
        amount:0,
        get Sum(){
            return this.price * this.amount
        },
        get Kcall(){
            return this.amount * this.kcall
        }
    }
}

const extraProduct = {
    doubleMayonnaise: {
        name :'Двойной майонез',
        price: 2500,
        kcall:300
    },
    lettuce: {
        name: 'Салатный лист',
        price: 1000,
        kcall: 10
    },
    cheese: {
        name: 'Сыр',
        price: 4000,
        kcall: 100 
    }
}

const btnPlusOrMinus = document.querySelectorAll('.main__product-btn'),
      checkExtraProd = document.querySelectorAll('.main__product-checkbox'),
      addCart        = document.querySelector('.addCart'),
      receipt        = document.querySelector('.receipt'),
      peceiptOut     = document.querySelector('.receipt__window-out'),
      receiptWindow  = document.querySelector('.receipt__window');
      btnReceipt     = document.querySelector('.receipt__window-btn');
      
      for (let i = 0; i < btnPlusOrMinus.length; i++) {
          btnPlusOrMinus[i].addEventListener('click', function () { 
              plusOrMinus(this)
        })
      }
      function plusOrMinus(btn) { 
        const parent = btn.closest('.main__product'),
            parentId = parent.getAttribute('id'),
            out      = parent.querySelector('.main__product-num'),
            price    = parent.querySelector('.main__product-price span'),
            kcall    = parent.querySelector('.main__product-call span'),
            elemData = btn.getAttribute('data-symbol')
            
            if (elemData == '+' && product[parentId].amount < 10) {
                product[parentId].amount++;
            }else if (elemData == '-' && product[parentId].amount > 0){
                product[parentId].amount--;
            }
            out.innerHTML   = product[parentId].amount
            price.innerHTML = product[parentId].Sum
            kcall.innerHTML = product[parentId].Kcall
    } 
    // ::SELECTION