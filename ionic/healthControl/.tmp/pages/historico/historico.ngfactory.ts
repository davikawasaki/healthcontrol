/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './historico';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/http/src/http';
import * as import9 from 'ionic-angular/navigation/nav-controller';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from 'ionic-angular/components/toolbar/toolbar';
import * as import13 from 'ionic-angular/components/navbar/navbar';
import * as import14 from 'ionic-angular/components/toolbar/toolbar-item';
import * as import15 from '@angular/core/src/linker/query_list';
import * as import16 from 'ionic-angular/components/menu/menu-toggle';
import * as import17 from 'ionic-angular/components/icon/icon';
import * as import18 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import19 from 'ionic-angular/components/content/content';
import * as import20 from 'ionic-angular/components/grid/grid';
import * as import21 from '@angular/common/src/directives/ng_if';
import * as import22 from 'ionic-angular/components/list/list';
import * as import23 from '@angular/common/src/directives/ng_for';
import * as import24 from 'ionic-angular/config/config';
import * as import25 from '@angular/core/src/linker/element_ref';
import * as import26 from 'ionic-angular/navigation/view-controller';
import * as import27 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import28 from 'ionic-angular/components/app/app';
import * as import29 from 'ionic-angular/components/menu/menu-controller';
import * as import30 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import31 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import32 from 'ionic-angular/util/keyboard';
import * as import33 from '@angular/core/src/zone/ng_zone';
import * as import34 from 'ionic-angular/components/tabs/tabs';
import * as import35 from '@angular/core/src/linker/template_ref';
import * as import36 from 'ionic-angular/gestures/gesture-controller';
import * as import37 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import38 from 'ionic-angular/components/spinner/spinner';
import * as import39 from '../../node_modules/ionic-angular/components/spinner/spinner.ngfactory';
import * as import40 from 'ionic-angular/components/item/item';
import * as import41 from 'ionic-angular/components/label/label';
import * as import42 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import43 from 'ionic-angular/util/form';
var renderType_Historico_Host:import0.RenderComponentType = (null as any);
class _View_Historico_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _Historico_0_4:import3.Historico;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_Historico_Host0,renderType_Historico_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('page-historico',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_Historico0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Historico_0_4 = new import3.Historico(this.parentInjector.get(import8.Http),this.parentInjector.get(import9.NavController));
    this._appEl_0.initComponent(this._Historico_0_4,[],compView_0);
    compView_0.create(this._Historico_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.Historico) && (0 === requestNodeIndex))) { return this._Historico_0_4; }
    return notFoundResult;
  }
}
function viewFactory_Historico_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_Historico_Host === (null as any))) { (renderType_Historico_Host = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,[],{})); }
  return new _View_Historico_Host0(viewUtils,parentInjector,declarationEl);
}
export const HistoricoNgFactory:import11.ComponentFactory<import3.Historico> = new import11.ComponentFactory<import3.Historico>('page-historico',viewFactory_Historico_Host0,import3.Historico);
const styles_Historico:any[] = [];
var renderType_Historico:import0.RenderComponentType = (null as any);
class _View_Historico0 extends import1.AppView<import3.Historico> {
  _el_0:any;
  _Header_0_3:import12.Header;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import2.AppElement;
  _Navbar_2_4:import13.Navbar;
  _text_3:any;
  _el_4:any;
  _ToolbarItem_4_3:import14.ToolbarItem;
  _query_Button_4_0:import15.QueryList<any>;
  _text_5:any;
  _el_6:any;
  _MenuToggle_6_3:import16.MenuToggle;
  _ToolbarItem_6_4:import14.ToolbarItem;
  _query_Button_6_0:import15.QueryList<any>;
  _text_7:any;
  _el_8:any;
  _Icon_8_3:import17.Icon;
  _text_9:any;
  _text_10:any;
  _text_11:any;
  _el_12:any;
  /*private*/ _appEl_12:import2.AppElement;
  _ToolbarTitle_12_4:import18.ToolbarTitle;
  _text_13:any;
  _text_14:any;
  _text_15:any;
  _text_16:any;
  _el_17:any;
  /*private*/ _appEl_17:import2.AppElement;
  _Content_17_4:import19.Content;
  _text_18:any;
  _el_19:any;
  _Row_19_3:import20.Row;
  _text_20:any;
  _anchor_21:any;
  /*private*/ _appEl_21:import2.AppElement;
  _TemplateRef_21_5:any;
  _NgIf_21_6:import21.NgIf;
  _text_22:any;
  _text_23:any;
  _el_24:any;
  _List_24_3:import22.List;
  _text_25:any;
  _anchor_26:any;
  /*private*/ _appEl_26:import2.AppElement;
  _TemplateRef_26_5:any;
  _NgFor_26_6:import23.NgFor;
  _text_27:any;
  _text_28:any;
  _text_29:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_Historico0,renderType_Historico,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-header',(null as any));
    this._Header_0_3 = new import12.Header(this.parentInjector.get(import24.Config),new import25.ElementRef(this._el_0),this.renderer,this.parentInjector.get(import26.ViewController,(null as any)));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'ion-navbar',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','toolbar');
    this._appEl_2 = new import2.AppElement(2,0,this,this._el_2);
    var compView_2:any = import27.viewFactory_Navbar0(this.viewUtils,this.injector(2),this._appEl_2);
    this._Navbar_2_4 = new import13.Navbar(this.parentInjector.get(import28.App),this.parentInjector.get(import26.ViewController,(null as any)),this.parentInjector.get(import9.NavController,(null as any)),this.parentInjector.get(import24.Config),new import25.ElementRef(this._el_2),this.renderer);
    this._appEl_2.initComponent(this._Navbar_2_4,[],compView_2);
    this._text_3 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_4 = this.renderer.createElement((null as any),'ion-buttons',(null as any));
    this.renderer.setElementAttribute(this._el_4,'left','');
    this.renderer.setElementAttribute(this._el_4,'start','');
    this._ToolbarItem_4_3 = new import14.ToolbarItem(this.parentInjector.get(import24.Config),new import25.ElementRef(this._el_4),this.renderer,this.parentInjector.get(import12.Toolbar,(null as any)),this._Navbar_2_4);
    this._query_Button_4_0 = new import15.QueryList<any>();
    this._text_5 = this.renderer.createText(this._el_4,'\n      ',(null as any));
    this._el_6 = this.renderer.createElement(this._el_4,'button',(null as any));
    this.renderer.setElementAttribute(this._el_6,'menuToggle','');
    this._MenuToggle_6_3 = new import16.MenuToggle(this.parentInjector.get(import29.MenuController),new import25.ElementRef(this._el_6),this.parentInjector.get(import26.ViewController,(null as any)),this._Navbar_2_4);
    this._ToolbarItem_6_4 = new import14.ToolbarItem(this.parentInjector.get(import24.Config),new import25.ElementRef(this._el_6),this.renderer,this.parentInjector.get(import12.Toolbar,(null as any)),this._Navbar_2_4);
    this._query_Button_6_0 = new import15.QueryList<any>();
    this._text_7 = this.renderer.createText(this._el_6,'\n        ',(null as any));
    this._el_8 = this.renderer.createElement(this._el_6,'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_8,'name','menu');
    this.renderer.setElementAttribute(this._el_8,'role','img');
    this._Icon_8_3 = new import17.Icon(this.parentInjector.get(import24.Config),new import25.ElementRef(this._el_8),this.renderer);
    this._text_9 = this.renderer.createText(this._el_6,'\n      ',(null as any));
    this._text_10 = this.renderer.createText(this._el_4,'\n    ',(null as any));
    this._text_11 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_12 = this.renderer.createElement((null as any),'ion-title',(null as any));
    this._appEl_12 = new import2.AppElement(12,2,this,this._el_12);
    var compView_12:any = import30.viewFactory_ToolbarTitle0(this.viewUtils,this.injector(12),this._appEl_12);
    this._ToolbarTitle_12_4 = new import18.ToolbarTitle(this.parentInjector.get(import24.Config),new import25.ElementRef(this._el_12),this.renderer,this.parentInjector.get(import12.Toolbar,(null as any)),this._Navbar_2_4);
    this._appEl_12.initComponent(this._ToolbarTitle_12_4,[],compView_12);
    this._text_13 = this.renderer.createText((null as any),'Histórico',(null as any));
    compView_12.create(this._ToolbarTitle_12_4,[[].concat([this._text_13])],(null as any));
    this._text_14 = this.renderer.createText((null as any),'\n  ',(null as any));
    compView_2.create(this._Navbar_2_4,[
      [].concat([this._el_4]),
      [],
      [],
      [].concat([
        this._text_3,
        this._text_11,
        this._el_12,
        this._text_14
      ]
      )
    ]
    ,(null as any));
    this._text_15 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_16 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_17 = this.renderer.createElement(parentRenderNode,'ion-content',(null as any));
    this.renderer.setElementAttribute(this._el_17,'padding','');
    this._appEl_17 = new import2.AppElement(17,(null as any),this,this._el_17);
    var compView_17:any = import31.viewFactory_Content0(this.viewUtils,this.injector(17),this._appEl_17);
    this._Content_17_4 = new import19.Content(this.parentInjector.get(import24.Config),new import25.ElementRef(this._el_17),this.renderer,this.parentInjector.get(import28.App),this.parentInjector.get(import32.Keyboard),this.parentInjector.get(import33.NgZone),this.parentInjector.get(import26.ViewController,(null as any)),this.parentInjector.get(import34.Tabs,(null as any)));
    this._appEl_17.initComponent(this._Content_17_4,[],compView_17);
    this._text_18 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._el_19 = this.renderer.createElement((null as any),'ion-row',(null as any));
    this.renderer.setElementAttribute(this._el_19,'class','display-flex center');
    this._Row_19_3 = new import20.Row();
    this._text_20 = this.renderer.createText(this._el_19,'\n    ',(null as any));
    this._anchor_21 = this.renderer.createTemplateAnchor(this._el_19,(null as any));
    this._appEl_21 = new import2.AppElement(21,19,this,this._anchor_21);
    this._TemplateRef_21_5 = new import35.TemplateRef_(this._appEl_21,viewFactory_Historico1);
    this._NgIf_21_6 = new import21.NgIf(this._appEl_21.vcRef,this._TemplateRef_21_5);
    this._text_22 = this.renderer.createText(this._el_19,'\n  ',(null as any));
    this._text_23 = this.renderer.createText((null as any),'\n   ',(null as any));
    this._el_24 = this.renderer.createElement((null as any),'ion-list',(null as any));
    this._List_24_3 = new import22.List(this.parentInjector.get(import24.Config),new import25.ElementRef(this._el_24),this.renderer,this.parentInjector.get(import36.GestureController));
    this._text_25 = this.renderer.createText(this._el_24,'\n    ',(null as any));
    this._anchor_26 = this.renderer.createTemplateAnchor(this._el_24,(null as any));
    this._appEl_26 = new import2.AppElement(26,24,this,this._anchor_26);
    this._TemplateRef_26_5 = new import35.TemplateRef_(this._appEl_26,viewFactory_Historico2);
    this._NgFor_26_6 = new import23.NgFor(this._appEl_26.vcRef,this._TemplateRef_26_5,this.parentInjector.get(import37.IterableDiffers),this.ref);
    this._text_27 = this.renderer.createText(this._el_24,'\n  ',(null as any));
    this._text_28 = this.renderer.createText((null as any),'\n',(null as any));
    compView_17.create(this._Content_17_4,[
      [],
      [].concat([
        this._text_18,
        this._el_19,
        this._text_23,
        this._el_24,
        this._text_28
      ]
      ),
      []
    ]
    ,(null as any));
    this._text_29 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_6,'click',this.eventHandler(this._handle_click_6_0.bind(this)));
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this._expr_8 = import7.UNINITIALIZED;
    this._expr_9 = import7.UNINITIALIZED;
    this.init([],[
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
      this._el_24,
      this._text_25,
      this._anchor_26,
      this._text_27,
      this._text_28,
      this._text_29
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import17.Icon) && (8 === requestNodeIndex))) { return this._Icon_8_3; }
    if (((token === import16.MenuToggle) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._MenuToggle_6_3; }
    if (((token === import14.ToolbarItem) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._ToolbarItem_6_4; }
    if (((token === import14.ToolbarItem) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._ToolbarItem_4_3; }
    if (((token === import18.ToolbarTitle) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 13)))) { return this._ToolbarTitle_12_4; }
    if (((token === import13.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 14)))) { return this._Navbar_2_4; }
    if (((token === import12.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 15)))) { return this._Header_0_3; }
    if (((token === import35.TemplateRef) && (21 === requestNodeIndex))) { return this._TemplateRef_21_5; }
    if (((token === import21.NgIf) && (21 === requestNodeIndex))) { return this._NgIf_21_6; }
    if (((token === import20.Row) && ((19 <= requestNodeIndex) && (requestNodeIndex <= 22)))) { return this._Row_19_3; }
    if (((token === import35.TemplateRef) && (26 === requestNodeIndex))) { return this._TemplateRef_26_5; }
    if (((token === import23.NgFor) && (26 === requestNodeIndex))) { return this._NgFor_26_6; }
    if (((token === import22.List) && ((24 <= requestNodeIndex) && (requestNodeIndex <= 27)))) { return this._List_24_3; }
    if (((token === import19.Content) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 28)))) { return this._Content_17_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    const currVal_3:any = '';
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._MenuToggle_6_3.menuToggle = currVal_3;
      this._expr_3 = currVal_3;
    }
    const currVal_5:any = 'menu';
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this._Icon_8_3.name = currVal_5;
      this._expr_5 = currVal_5;
    }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._Content_17_4.ngOnInit(); }
    const currVal_8:any = this.context.isReading;
    if (import4.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this._NgIf_21_6.ngIf = currVal_8;
      this._expr_8 = currVal_8;
    }
    changes = (null as any);
    const currVal_9:any = this.context.listaHistorico;
    if (import4.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this._NgFor_26_6.ngForOf = currVal_9;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import7.SimpleChange(this._expr_9,currVal_9);
      this._expr_9 = currVal_9;
    }
    if ((changes !== (null as any))) { this._NgFor_26_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_26_6.ngDoCheck(); }
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
    const currVal_0:any = this._Navbar_2_4._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_2,'hidden',currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this._Navbar_2_4._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementClass(this._el_2,'statusbar-padding',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_4:any = this._MenuToggle_6_3.isHidden;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementProperty(this._el_6,'hidden',currVal_4);
      this._expr_4 = currVal_4;
    }
    const currVal_6:any = this._Icon_8_3._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementClass(this._el_8,'hide',currVal_6);
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = this._Content_17_4._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementClass(this._el_17,'statusbar-padding',currVal_7);
      this._expr_7 = currVal_7;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Navbar_2_4.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Icon_8_3.ngOnDestroy();
    this._Content_17_4.ngOnDestroy();
  }
  private _handle_click_6_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._MenuToggle_6_3.toggle()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_Historico0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.Historico> {
  if ((renderType_Historico === (null as any))) { (renderType_Historico = viewUtils.createRenderComponentType('/home/davikawasaki/GitHub/healthcontrol/ionic/healthControl/.tmp/pages/historico/historico.html',0,import10.ViewEncapsulation.None,styles_Historico,{})); }
  return new _View_Historico0(viewUtils,parentInjector,declarationEl);
}
class _View_Historico1 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _Spinner_0_4:import38.Spinner;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_Historico1,renderType_Historico,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'ion-spinner',(null as any));
    this.renderer.setElementAttribute(this._el_0,'name','circles');
    this.renderer.setElementAttribute(this._el_0,'style','font-size: 5em;');
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import39.viewFactory_Spinner0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Spinner_0_4 = new import38.Spinner(this.parent.parentInjector.get(import24.Config),new import25.ElementRef(this._el_0),this.renderer);
    this._appEl_0.initComponent(this._Spinner_0_4,[],compView_0);
    compView_0.create(this._Spinner_0_4,[],(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import38.Spinner) && (0 === requestNodeIndex))) { return this._Spinner_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changed:boolean = true;
    changed = false;
    const currVal_0:any = 'circles';
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._Spinner_0_4.name = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    if (changed) { this._appEl_0.componentView.markAsCheckOnce(); }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._Spinner_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = this._Spinner_0_4.paused;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementClass(this._el_0,'spinner-paused',currVal_1);
      this._expr_1 = currVal_1;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_Historico1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_Historico1(viewUtils,parentInjector,declarationEl);
}
class _View_Historico2 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _Item_0_4:import40.Item;
  _ItemContent_0_5:import40.ItemContent;
  _query_Label_0_0:import15.QueryList<any>;
  _query_Button_0_1:import15.QueryList<any>;
  _query_Icon_0_2:import15.QueryList<any>;
  _text_1:any;
  _el_2:any;
  _Label_2_3:import41.Label;
  _text_3:any;
  _text_4:any;
  _text_5:any;
  _el_6:any;
  _Label_6_3:import41.Label;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  _Label_9_3:import41.Label;
  _text_10:any;
  _text_11:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_Historico2,renderType_Historico,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'ion-item',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','item item-block');
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import42.viewFactory_Item0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Item_0_4 = new import40.Item(this.parent.parentInjector.get(import43.Form),this.parent.parentInjector.get(import24.Config),new import25.ElementRef(this._el_0),this.renderer);
    this._ItemContent_0_5 = new import40.ItemContent();
    this._query_Label_0_0 = new import15.QueryList<any>();
    this._query_Button_0_1 = new import15.QueryList<any>();
    this._query_Icon_0_2 = new import15.QueryList<any>();
    this._appEl_0.initComponent(this._Item_0_4,[],compView_0);
    this._text_1 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_2 = this.renderer.createElement((null as any),'ion-label',(null as any));
    this._Label_2_3 = new import41.Label(this.parent.parentInjector.get(import24.Config),new import25.ElementRef(this._el_2),this.renderer,(null as any),(null as any),(null as any),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._text_5 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_6 = this.renderer.createElement((null as any),'ion-label',(null as any));
    this.renderer.setElementAttribute(this._el_6,'right','');
    this._Label_6_3 = new import41.Label(this.parent.parentInjector.get(import24.Config),new import25.ElementRef(this._el_6),this.renderer,(null as any),(null as any),(null as any),(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'',(null as any));
    this._text_8 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_9 = this.renderer.createElement((null as any),'ion-label',(null as any));
    this.renderer.setElementAttribute(this._el_9,'right','');
    this._Label_9_3 = new import41.Label(this.parent.parentInjector.get(import24.Config),new import25.ElementRef(this._el_9),this.renderer,(null as any),(null as any),(null as any),(null as any));
    this._text_10 = this.renderer.createText(this._el_9,'',(null as any));
    this._text_11 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._query_Label_0_0.reset([
      this._Label_2_3,
      this._Label_6_3,
      this._Label_9_3
    ]
    );
    this._Item_0_4.contentLabel = this._query_Label_0_0.first;
    compView_0.create(this._Item_0_4,[
      [],
      [].concat([
        this._el_2,
        this._el_6,
        this._el_9
      ]
      ),
      [].concat([
        this._text_1,
        this._text_4,
        this._text_5,
        this._text_8,
        this._text_11
      ]
      ),
      [],
      []
    ]
    ,(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_0.bind(this)));
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._text_11
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import41.Label) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._Label_2_3; }
    if (((token === import41.Label) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._Label_6_3; }
    if (((token === import41.Label) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._Label_9_3; }
    if (((token === import40.Item) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 11)))) { return this._Item_0_4; }
    if (((token === import40.ItemContent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 11)))) { return this._ItemContent_0_5; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
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
      if ((this.numberOfChecks === 0)) { this._Item_0_4.ngAfterContentInit(); }
    }
    const currVal_1:any = import4.interpolate(1,'BPM: ',this.context.$implicit.value,'');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setText(this._text_3,currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = import4.interpolate(1,'',this.parent.context.mySplit(this.context.$implicit.timestamp,0),'');
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setText(this._text_7,currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = import4.interpolate(1,'',this.parent.context.mySplit(this.context.$implicit.timestamp,1),'');
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setText(this._text_10,currVal_3);
      this._expr_3 = currVal_3;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.openPage(this.context.$implicit)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_Historico2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_Historico2(viewUtils,parentInjector,declarationEl);
}