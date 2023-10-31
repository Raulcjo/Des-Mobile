import { Component } from "react";

export default class Pessoa{
    constructor(nome, idade){
        this.nome = nome,
        this.idade = idade
    }

    cumprimentar(){
        return`Olá, o meu nome é ${this.nome} e tenho ${this.idade} anos.`
    }

}