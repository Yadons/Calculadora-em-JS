(function  () { //função imediata!
    
    function criaCalculadora() {
        return {
            display: document.querySelector('.display'),            
            

            inicia() {
                this.cliqueBotoes(); 
                this.pressionaEnter();

            },

            voltarCursor() {
                this.display.focus();
            },

            pressionaEnter() {
                this.display.addEventListener('keypress', e => {
                    if (e.keyCode === 13) {
                        this.realizarConta();
                        this.voltarCursor();
                    }
                });
            },


            realizarConta() {
                let conta = this.display.value;
                try {
                    conta = eval(conta); 
                    if(!conta) { 
                        alert('Conta inválida!');
                        return;
                    }
                    this.display.value = String(conta);
                } catch (e) {
                    alert('Conta inválida!');
                    return;
                }
            },
            
            clearDisplay() {
                this.display.value = '';
            },

            apagaUm() {
                this.display.value = this.display.value.slice(0,-1);
            },


            cliqueBotoes() {
                document.addEventListener('click', function(e) { 
                    const el = e.target;
                    
                    if (el.classList.contains('btn-num')) {
                        this.btnParaDisplay(el.innerText);
                    }
                    if (el.classList.contains('btn-clear')) { 
                        this.clearDisplay();
                    }
                    if (el.classList.contains('btn-del')){
                        this.apagaUm();
                    }
                    if (el.classList.contains('btn-eq')) {
                        this.realizarConta();
                    
                    }
            
                    this.voltarCursor();
                    
                }.bind(this)); 
            },
            
            btnParaDisplay(valor) {
                this.display.value += valor;
            },


        };
    };




    const calculadora = criaCalculadora();
    calculadora.inicia();
}) ();
