class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' já ligado');
        }
        this.ligado = true;
    }

    desligado() {
        if(this.ligado) {
            console.log(this.nome + ' já desligado');
        }
        this.ligado = false;
    }
}

class Smarphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    ligar() {
        console.log('Voce alterou o método ligar');
    }

    falaOi() {
        console.log('oi');
    }
}

const s1 = new Smarphone('Samsung', 'Preto', 'Galaxy S10');
console.log(s1);

const t1 =  new Tablet('iPad', true);
t1.ligar();
t1.ligar();
t1.falaOi();