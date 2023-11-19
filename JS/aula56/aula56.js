/* // 1º-------------------------------------------------------------------------------
// Factory function (Função fábrica)
// Constructor function (Função construtora)
function criaPessoa(nome, sobrenome) {
    return {
        nome, 
        sobrenome,
        fala: function(assunto) {
            return `${this.nome} está ${assunto}.`;
        }
    };
}

const p1 = criaPessoa('Victor', 'Vieira');
console.log(p1.fala('falando sobre JS'));


// 2º-------------------------------------------------------------------------------
// Factory function (Função fábrica)
// Constructor function (Função construtora)
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,
        fala(assunto) {
            return `${this.nome} está ${assunto}.`;
        },
        altura,
        peso,
        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Victor', 'Vieira', 1.77, 85);
console.log(p1.imc());
const p2 = criaPessoa('Maria', 'Joaquina', 1.60, 42);
console.log(p2.imc());


// 3º-------------------------------------------------------------------------------
// Factory function (Função fábrica)
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,
        fala(assunto) {
            return `${this.nome} está ${assunto}.`;
        },
        altura,
        peso,
        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Victor', 'Vieira', 1.77, 85);
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.imc);


// 4º-------------------------------------------------------------------------------
// Factory function (Função fábrica)
// Constructor function (Função construtora)
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,
        
        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        
        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        
        fala(assunto = 'falando sobre NADA') {
            return `${this.nome} está ${assunto}.`;
        },
        
        altura,
        peso,
        
        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Victor', 'Vieira', 1.77, 85);
p1.nomeCompleto = 'Artur Vieira Silva';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala());
// ------------------------------------------------------------------------------- */


// 5º-------------------------------------------------------------------------------
// Factory function (Função fábrica)
// Constructor function (Função construtora)
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,
        
        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        
        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        
        fala(assunto = 'falando sobre NADA') {
            return `${this.nome} está ${assunto}.`;
        },
        
        altura,
        peso,
        
        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Victor', 'Vieira', 1.77, 85);
const p2 = criaPessoa('Artur', 'Vieira', 1.79, 90);
const p3 = criaPessoa('Cláudia', 'Vieira', 1.70, 50);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);


