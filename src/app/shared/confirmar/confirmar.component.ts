import { Component, ViewChild } from '@angular/core';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Config } from './modelo/config';

@Component({
    selector: 'app-confirmar',
    templateUrl: './confirmar.component.html'
})
export class ConfirmarComponent {
    @ViewChild('template') template;
    private modalRef: NgbModalRef;
    private settings: NgbModalOptions = {
        size: 'sm',
        keyboard: false,
        backdrop: 'static',
        backdropClass : 'black-backdrop'
    };
    mensaje: string;
    aceptar: string;
    cancelar: string;
    private config: Config;

    constructor(private modalService: NgbModal) { }

    open(config: Config) {
        this.config = config;
        this.mensaje = config.mensaje;
        this.aceptar = config.aceptarTexto;
        this.cancelar = config.cancelarTexto;
        this.modalRef = this.modalService.open(this.template, this.settings);
        this.modalRef.result
            .then(() => this.modalRef.close())
            .catch(() => this.modalRef.close());
    }

    confirm(): void {
        this.modalRef.close();
        this.config.aceptarCallback();
    }

    decline(): void {
        this.modalRef.close();
        if (typeof (this.config.cancelarCallback) !== 'undefined') {
            this.config.cancelarCallback();
        }
    }
}
