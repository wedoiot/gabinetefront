import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import * as  _ from 'lodash';
//import { moment } from 'ngx-bootstrap/chronos/test/chain';
import * as moment from 'moment';
import accentFold from '../utilidades/texto/accentfold';

@Component({
    selector: 'app-multi-filtro',
    templateUrl: './multi-filtro.component.html',
    animations: [
        trigger('flyInOut', [
            state('in', style({ opacity: 1, transform: 'translateX(0)' })),
            transition('void => *', [
                style({
                    opacity: 0,
                    transform: 'translateX(-100%)'
                }),
                animate('0.5s ease-in')
            ]),
            transition('* => void', [
                animate('100ms ease-out', style({
                    opacity: 0,
                    transform: 'translateX(100%)'
                }))
            ])
        ])
    ]
})

export class MultiFiltroComponent {
    @ViewChild('content') content;
    @Input('campos') campos: { Id: string, Nombre: string, Valor: string, Tipo?: string }[];
    @Input('entidades') entidades: any[];
    @Output('filtrado') filtrado = new EventEmitter<any[]>();

    constructor() { }

    private filtrarTexto(iniciativasFiltradas: any[], campos: string[], valor: string) {
        return _.filter(iniciativasFiltradas, (elem) => {
            let camp = elem[campos[0]];
            for (let index = 1; index < campos.length; index++) {
                if (camp === null) {
                    return false;
                }
                camp = camp[campos[index]];
            }
            const campo = _.find(this.campos, (c) => c.Id === _.join(campos, '.'));
            if (campo.Tipo && campo.Tipo === 'Fecha') {
                return moment(camp).format('DD-MM-YYYY HH:mm').toLowerCase().indexOf(valor.toLowerCase()) > -1;
            }
            if (campo.Tipo && campo.Tipo === 'Lista') {
                return camp.toString()==valor;
            }
            if (camp === null) {
                return false;
            }
            return accentFold(camp.toLowerCase()).indexOf(accentFold(valor.toLowerCase())) > -1;
        });
    }

    private filtrarListas(iniciativasFiltradas: any[], campos: string[], valor: string) {
        return _.filter(iniciativasFiltradas, (elem) => {
            const arrayCamp = elem[campos[0].split('[]')[0]];
            for (let pos = 0; pos < arrayCamp.length; pos++) {
                let item = arrayCamp[pos];
                for (let index = 1; index < campos.length; index++) {
                    item = item[campos[index]];
                }
                if (accentFold(item.toLowerCase()).indexOf(accentFold(valor.toLowerCase())) > -1) {
                    return true;
                }
            }
            return false;
        });
    }

    filtrar() {
        let iniciativasFiltradas = this.entidades;
        _.forEach(_.filter(this.campos, (campo) => campo.Valor !== ''), (campo) => {
            const campos = campo.Id.split('.');
            if (campos[0].endsWith('[]')) {
                iniciativasFiltradas = this.filtrarListas(iniciativasFiltradas, campos, campo.Valor);
            } else {
                iniciativasFiltradas = this.filtrarTexto(iniciativasFiltradas, campos, campo.Valor);
            }
        });
        this.filtrado.emit(iniciativasFiltradas);
    }

    limpiar() {
        _.forEach(this.campos, (campo) => campo.Valor = '');
        this.filtrar();
    }
}
