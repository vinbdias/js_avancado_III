export class Negociacao {
    
    constructor(data, quantidade, valor) {
        
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);
    }

    ordena(criterio) {

        this._negociacoes.sort(criterio);
    }

    inverteOrdem() {
        
        this._negociacoes.reverse();
    }   

    ehIgual(outraNegociacao) {

        return JSON.stringify(this) == JSON.stringify(outraNegociacao);
    } 
    
    get volume() {
        
        return this._quantidade * this._valor;
    }
    
    get data() {
        
        return new Date(this._data.getTime());
    }
    
    get quantidade() {
        
        return this._quantidade;
    }
    
    get valor() {
        
        return this._valor;
    }
}