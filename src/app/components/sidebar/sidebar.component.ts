import { Component, OnInit } from '@angular/core';
import { identity } from 'rxjs';
import { isNullOrUndefined } from 'util';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    // { path: '/dashboard', title: 'Dashboard', icon: 'design_app', class: '' },
    // { path: '/icons', title: 'Icons', icon: 'education_atom', class: '' },
    // { path: '/maps', title: 'Maps', icon: 'location_map-big', class: '' },
    { path: '/notifications', title: 'Notifications', icon: 'ui-1_bell-53', class: '' },

    { path: '/perfil-usuario', title: 'Registro de usuarios', icon: 'users_single-02', class: '' },
    { path: '/table-list', title: 'Table List', icon: 'design_bullet-list-67', class: '' },
    { path: '/typography', title: 'Typography', icon: 'text_caps-small', class: '' },

];
interface EnumServiceItem {
    path: string; title: string; icon: string; visible: boolean;
}
declare interface RouteInfoFather {
    path: string;
    title: string;
    icon: string;
    visible: boolean;
    subMenu: Array<EnumServiceItem>
}
export const RoutesFather: RouteInfoFather[] = [
    {
        path: '/configuraciones', title: 'Configuraciones', visible: false, icon: 'loader_gear', subMenu: [
            { path: '/areas', title: 'Areas', icon: '', visible: false },
            { path: '/lugares', title: 'Lugares', icon: '', visible: false },
        ]
    },
    {
        path: '/eventos', title: 'Eventos', visible: false, icon: 'ui-1_calendar-60', subMenu: [
            { path: '/eventos/participacion', title: 'mis eventos', icon: '', visible: false },
            { path: '/eventos/crear', title: 'crear evento', icon: '', visible: false },
            { path: '/eventos/actuales', title: 'eventos actuales', icon: '', visible: false },
        ]
    },
    {
        path: '/asistencia', title: 'Asistencia', visible: false, icon: 'ui-2_like', subMenu: [
            { path: '/asistencia', title: 'asistencia', icon: '', visible: false },
        ]
    },
    {
        path: '/informe', title: 'Informes', visible: false, icon: 'education_paper', subMenu: [
            { path: '/informe', title: 'informes', icon: '', visible: false },
        ]
    },
];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
    isModifyUserProfile: boolean = false;
    menuItems: any[];
    menuItemsSingle: any[];
    itemActual = null;
    token: null;
    identity;
    closeResult: string;

    constructor(private modalService: NgbModal) { }

    ngOnInit() {
        this.menuItemsSingle = ROUTES.filter(menuItem => menuItem);

        //let permiso:string= !isNullOrUndefined(this.identity)?this.identity.permisoDTO.tipoPermiso:'';
        //if (permiso.toLocaleUpperCase() === "ADMINISTRADOR") {
        this.menuItems = RoutesFather.filter(menuItem => menuItem);
        //}

    }

    isMobileMenu() {
        if (window.innerWidth > 991) {
            return false;
        }
        return true;
    };

    activarItem(item) {
        this.itemActual = item;
    };

    modifyUserProfile() {
        console.log('entro a modificar')
        this.isModifyUserProfile = !this.isModifyUserProfile;
    }

    open(content) {
        this.modalService.dismissAll();
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
}
