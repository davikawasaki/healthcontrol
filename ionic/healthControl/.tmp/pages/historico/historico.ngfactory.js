/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './historico';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from 'ionic-angular/components/toolbar/toolbar';
import * as import12 from 'ionic-angular/components/navbar/navbar';
import * as import13 from 'ionic-angular/components/toolbar/toolbar-item';
import * as import14 from '@angular/core/src/linker/query_list';
import * as import15 from 'ionic-angular/components/menu/menu-toggle';
import * as import16 from 'ionic-angular/components/icon/icon';
import * as import17 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import18 from 'ionic-angular/components/content/content';
import * as import19 from 'ionic-angular/components/list/list';
import * as import20 from '@angular/common/src/directives/ng_for';
import * as import21 from 'ionic-angular/config/config';
import * as import22 from '@angular/core/src/linker/element_ref';
import * as import23 from 'ionic-angular/navigation/view-controller';
import * as import24 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import25 from 'ionic-angular/components/app/app';
import * as import26 from 'ionic-angular/components/menu/menu-controller';
import * as import27 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import28 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import29 from 'ionic-angular/util/keyboard';
import * as import30 from '@angular/core/src/zone/ng_zone';
import * as import31 from 'ionic-angular/components/tabs/tabs';
import * as import32 from 'ionic-angular/gestures/gesture-controller';
import * as import33 from '@angular/core/src/linker/template_ref';
import * as import34 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import35 from 'ionic-angular/components/item/item';
import * as import36 from 'ionic-angular/components/label/label';
import * as import37 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import38 from 'ionic-angular/util/form';
var renderType_Historico_Host = null;
var _View_Historico_Host0 = (function (_super) {
    __extends(_View_Historico_Host0, _super);
    function _View_Historico_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Historico_Host0, renderType_Historico_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Historico_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('page-historico', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_Historico0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Historico_0_4 = new import3.Historico(this.parentInjector.get(import8.NavController));
        this._appEl_0.initComponent(this._Historico_0_4, [], compView_0);
        compView_0.create(this._Historico_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_Historico_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.Historico) && (0 === requestNodeIndex))) {
            return this._Historico_0_4;
        }
        return notFoundResult;
    };
    return _View_Historico_Host0;
}(import1.AppView));
function viewFactory_Historico_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Historico_Host === null)) {
        (renderType_Historico_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_Historico_Host0(viewUtils, parentInjector, declarationEl);
}
export var HistoricoNgFactory = new import10.ComponentFactory('page-historico', viewFactory_Historico_Host0, import3.Historico);
var styles_Historico = [];
var renderType_Historico = null;
var _View_Historico0 = (function (_super) {
    __extends(_View_Historico0, _super);
    function _View_Historico0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Historico0, renderType_Historico, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Historico0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import11.Header(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import23.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        var compView_2 = import24.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import12.Navbar(this.parentInjector.get(import25.App), this.parentInjector.get(import23.ViewController, null), this.parentInjector.get(import8.NavController, null), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-buttons', null);
        this.renderer.setElementAttribute(this._el_4, 'left', '');
        this.renderer.setElementAttribute(this._el_4, 'start', '');
        this._ToolbarItem_4_3 = new import13.ToolbarItem(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import11.Toolbar, null), this._Navbar_2_4);
        this._query_Button_4_0 = new import14.QueryList();
        this._text_5 = this.renderer.createText(this._el_4, '\n      ', null);
        this._el_6 = this.renderer.createElement(this._el_4, 'button', null);
        this.renderer.setElementAttribute(this._el_6, 'menuToggle', '');
        this._MenuToggle_6_3 = new import15.MenuToggle(this.parentInjector.get(import26.MenuController), new import22.ElementRef(this._el_6), this.parentInjector.get(import23.ViewController, null), this._Navbar_2_4);
        this._ToolbarItem_6_4 = new import13.ToolbarItem(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_6), this.renderer, this.parentInjector.get(import11.Toolbar, null), this._Navbar_2_4);
        this._query_Button_6_0 = new import14.QueryList();
        this._text_7 = this.renderer.createText(this._el_6, '\n        ', null);
        this._el_8 = this.renderer.createElement(this._el_6, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_8, 'name', 'menu');
        this.renderer.setElementAttribute(this._el_8, 'role', 'img');
        this._Icon_8_3 = new import16.Icon(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_8), this.renderer);
        this._text_9 = this.renderer.createText(this._el_6, '\n      ', null);
        this._text_10 = this.renderer.createText(this._el_4, '\n    ', null);
        this._text_11 = this.renderer.createText(null, '\n    ', null);
        this._el_12 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_12 = new import2.AppElement(12, 2, this, this._el_12);
        var compView_12 = import27.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(12), this._appEl_12);
        this._ToolbarTitle_12_4 = new import17.ToolbarTitle(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_12), this.renderer, this.parentInjector.get(import11.Toolbar, null), this._Navbar_2_4);
        this._appEl_12.initComponent(this._ToolbarTitle_12_4, [], compView_12);
        this._text_13 = this.renderer.createText(null, 'Histórico', null);
        compView_12.create(this._ToolbarTitle_12_4, [[].concat([this._text_13])], null);
        this._text_14 = this.renderer.createText(null, '\n  ', null);
        compView_2.create(this._Navbar_2_4, [
            [].concat([this._el_4]),
            [],
            [],
            [].concat([
                this._text_3,
                this._text_11,
                this._el_12,
                this._text_14
            ])
        ], null);
        this._text_15 = this.renderer.createText(this._el_0, '\n\n', null);
        this._text_16 = this.renderer.createText(parentRenderNode, '\n\n\n', null);
        this._el_17 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this.renderer.setElementAttribute(this._el_17, 'padding', '');
        this._appEl_17 = new import2.AppElement(17, null, this, this._el_17);
        var compView_17 = import28.viewFactory_Content0(this.viewUtils, this.injector(17), this._appEl_17);
        this._Content_17_4 = new import18.Content(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_17), this.renderer, this.parentInjector.get(import25.App), this.parentInjector.get(import29.Keyboard), this.parentInjector.get(import30.NgZone), this.parentInjector.get(import23.ViewController, null), this.parentInjector.get(import31.Tabs, null));
        this._appEl_17.initComponent(this._Content_17_4, [], compView_17);
        this._text_18 = this.renderer.createText(null, '\n\n   ', null);
        this._el_19 = this.renderer.createElement(null, 'ion-list', null);
        this._List_19_3 = new import19.List(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_19), this.renderer, this.parentInjector.get(import32.GestureController));
        this._text_20 = this.renderer.createText(this._el_19, '\n    ', null);
        this._anchor_21 = this.renderer.createTemplateAnchor(this._el_19, null);
        this._appEl_21 = new import2.AppElement(21, 19, this, this._anchor_21);
        this._TemplateRef_21_5 = new import33.TemplateRef_(this._appEl_21, viewFactory_Historico1);
        this._NgFor_21_6 = new import20.NgFor(this._appEl_21.vcRef, this._TemplateRef_21_5, this.parentInjector.get(import34.IterableDiffers), this.ref);
        this._text_22 = this.renderer.createText(this._el_19, '\n  ', null);
        this._text_23 = this.renderer.createText(null, '\n\n\n', null);
        compView_17.create(this._Content_17_4, [
            [],
            [].concat([
                this._text_18,
                this._el_19,
                this._text_23
            ]),
            []
        ], null);
        this._text_24 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_6, 'click', this.eventHandler(this._handle_click_6_0.bind(this)));
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._text_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._text_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._anchor_21,
            this._text_22,
            this._text_23,
            this._text_24
        ], [disposable_0], []);
        return null;
    };
    _View_Historico0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import16.Icon) && (8 === requestNodeIndex))) {
            return this._Icon_8_3;
        }
        if (((token === import15.MenuToggle) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 9)))) {
            return this._MenuToggle_6_3;
        }
        if (((token === import13.ToolbarItem) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 9)))) {
            return this._ToolbarItem_6_4;
        }
        if (((token === import13.ToolbarItem) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 10)))) {
            return this._ToolbarItem_4_3;
        }
        if (((token === import17.ToolbarTitle) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 13)))) {
            return this._ToolbarTitle_12_4;
        }
        if (((token === import12.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._Navbar_2_4;
        }
        if (((token === import11.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 15)))) {
            return this._Header_0_3;
        }
        if (((token === import33.TemplateRef) && (21 === requestNodeIndex))) {
            return this._TemplateRef_21_5;
        }
        if (((token === import20.NgFor) && (21 === requestNodeIndex))) {
            return this._NgFor_21_6;
        }
        if (((token === import19.List) && ((19 <= requestNodeIndex) && (requestNodeIndex <= 22)))) {
            return this._List_19_3;
        }
        if (((token === import18.Content) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 23)))) {
            return this._Content_17_4;
        }
        return notFoundResult;
    };
    _View_Historico0.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        var currVal_3 = '';
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._MenuToggle_6_3.menuToggle = currVal_3;
            this._expr_3 = currVal_3;
        }
        var currVal_5 = 'menu';
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this._Icon_8_3.name = currVal_5;
            this._expr_5 = currVal_5;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Content_17_4.ngOnInit();
        }
        changes = null;
        var currVal_8 = this.context.listaHistorico;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this._NgFor_21_6.ngForOf = currVal_8;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_8, currVal_8);
            this._expr_8 = currVal_8;
        }
        if ((changes !== null)) {
            this._NgFor_21_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_21_6.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_6_0.dirty) {
                this._query_Button_6_0.reset([]);
                this._ToolbarItem_6_4._buttons = this._query_Button_6_0;
                this._query_Button_6_0.notifyOnChanges();
            }
            if (this._query_Button_4_0.dirty) {
                this._query_Button_4_0.reset([]);
                this._ToolbarItem_4_3._buttons = this._query_Button_4_0;
                this._query_Button_4_0.notifyOnChanges();
            }
        }
        var currVal_0 = this._Navbar_2_4._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_2, 'hidden', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this._Navbar_2_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_2, 'statusbar-padding', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_4 = this._MenuToggle_6_3.isHidden;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementProperty(this._el_6, 'hidden', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_6 = this._Icon_8_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_8, 'hide', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_7 = this._Content_17_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_17, 'statusbar-padding', currVal_7);
            this._expr_7 = currVal_7;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.ngAfterViewInit();
            }
        }
    };
    _View_Historico0.prototype.destroyInternal = function () {
        this._Icon_8_3.ngOnDestroy();
        this._Content_17_4.ngOnDestroy();
    };
    _View_Historico0.prototype._handle_click_6_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._MenuToggle_6_3.toggle() !== false);
        return (true && pd_0);
    };
    return _View_Historico0;
}(import1.AppView));
export function viewFactory_Historico0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Historico === null)) {
        (renderType_Historico = viewUtils.createRenderComponentType('/home/davikawasaki/GitHub/healthcontrol/ionic/healthControl/.tmp/pages/historico/historico.html', 0, import9.ViewEncapsulation.None, styles_Historico, {}));
    }
    return new _View_Historico0(viewUtils, parentInjector, declarationEl);
}
var _View_Historico1 = (function (_super) {
    __extends(_View_Historico1, _super);
    function _View_Historico1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Historico1, renderType_Historico, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Historico1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'item item-block');
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = import37.viewFactory_Item0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Item_0_4 = new import35.Item(this.parent.parentInjector.get(import38.Form), this.parent.parentInjector.get(import21.Config), new import22.ElementRef(this._el_0), this.renderer);
        this._ItemContent_0_5 = new import35.ItemContent();
        this._query_Label_0_0 = new import14.QueryList();
        this._query_Button_0_1 = new import14.QueryList();
        this._query_Icon_0_2 = new import14.QueryList();
        this._appEl_0.initComponent(this._Item_0_4, [], compView_0);
        this._text_1 = this.renderer.createText(null, '\n      ', null);
        this._el_2 = this.renderer.createElement(null, 'ion-label', null);
        this._Label_2_3 = new import36.Label(this.parent.parentInjector.get(import21.Config), new import22.ElementRef(this._el_2), this.renderer, null, null, null, null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(null, '\n      ', null);
        this._el_5 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_5, 'right', '');
        this._Label_5_3 = new import36.Label(this.parent.parentInjector.get(import21.Config), new import22.ElementRef(this._el_5), this.renderer, null, null, null, null);
        this._text_6 = this.renderer.createText(this._el_5, '', null);
        this._text_7 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_0_0.reset([
            this._Label_2_3,
            this._Label_5_3
        ]);
        this._Item_0_4.contentLabel = this._query_Label_0_0.first;
        compView_0.create(this._Item_0_4, [
            [],
            [].concat([
                this._el_2,
                this._el_5
            ]),
            [].concat([
                this._text_1,
                this._text_4,
                this._text_7
            ]),
            [],
            []
        ], null);
        var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7
        ], [disposable_0], []);
        return null;
    };
    _View_Historico1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import36.Label) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._Label_2_3;
        }
        if (((token === import36.Label) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Label_5_3;
        }
        if (((token === import35.Item) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Item_0_4;
        }
        if (((token === import35.ItemContent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._ItemContent_0_5;
        }
        return notFoundResult;
    };
    _View_Historico1.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_0_1.dirty) {
                this._query_Button_0_1.reset([]);
                this._Item_0_4._buttons = this._query_Button_0_1;
                this._query_Button_0_1.notifyOnChanges();
            }
            if (this._query_Icon_0_2.dirty) {
                this._query_Icon_0_2.reset([]);
                this._Item_0_4._icons = this._query_Icon_0_2;
                this._query_Icon_0_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_0_4.ngAfterContentInit();
            }
        }
        var currVal_1 = import4.interpolate(1, 'BPM:', this.context.$implicit.bpm, '');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setText(this._text_3, currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = import4.interpolate(1, 'Data:', this.context.$implicit.data, '');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_6, currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_Historico1.prototype._handle_click_0_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.context.openPage(this.context.$implicit) !== false);
        return (true && pd_0);
    };
    return _View_Historico1;
}(import1.AppView));
function viewFactory_Historico1(viewUtils, parentInjector, declarationEl) {
    return new _View_Historico1(viewUtils, parentInjector, declarationEl);
}