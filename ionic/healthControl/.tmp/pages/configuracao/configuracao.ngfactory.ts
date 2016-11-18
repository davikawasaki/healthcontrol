/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './configuracao';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
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
import * as import19 from 'ionic-angular/config/config';
import * as import20 from '@angular/core/src/linker/element_ref';
import * as import21 from 'ionic-angular/navigation/view-controller';
import * as import22 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import23 from 'ionic-angular/components/app/app';
import * as import24 from 'ionic-angular/components/menu/menu-controller';
import * as import25 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import26 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import27 from 'ionic-angular/util/keyboard';
import * as import28 from '@angular/core/src/zone/ng_zone';
import * as import29 from 'ionic-angular/components/tabs/tabs';
var renderType_Configuracao_Host:import0.RenderComponentType = (null as any);
class _View_Configuracao_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _Configuracao_0_4:import3.Configuracao;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_Configuracao_Host0,renderType_Configuracao_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('page-configuracao',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_Configuracao0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Configuracao_0_4 = new import3.Configuracao(this.parentInjector.get(import8.NavController));
    this._appEl_0.initComponent(this._Configuracao_0_4,[],compView_0);
    compView_0.create(this._Configuracao_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.Configuracao) && (0 === requestNodeIndex))) { return this._Configuracao_0_4; }
    return notFoundResult;
  }
}
function viewFactory_Configuracao_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_Configuracao_Host === (null as any))) { (renderType_Configuracao_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,[],{})); }
  return new _View_Configuracao_Host0(viewUtils,parentInjector,declarationEl);
}
export const ConfiguracaoNgFactory:import10.ComponentFactory<import3.Configuracao> = new import10.ComponentFactory<import3.Configuracao>('page-configuracao',viewFactory_Configuracao_Host0,import3.Configuracao);
const styles_Configuracao:any[] = [];
var renderType_Configuracao:import0.RenderComponentType = (null as any);
class _View_Configuracao0 extends import1.AppView<import3.Configuracao> {
  _text_0:any;
  _el_1:any;
  _Header_1_3:import11.Header;
  _text_2:any;
  _el_3:any;
  /*private*/ _appEl_3:import2.AppElement;
  _Navbar_3_4:import12.Navbar;
  _text_4:any;
  _el_5:any;
  _ToolbarItem_5_3:import13.ToolbarItem;
  _query_Button_5_0:import14.QueryList<any>;
  _text_6:any;
  _el_7:any;
  _MenuToggle_7_3:import15.MenuToggle;
  _ToolbarItem_7_4:import13.ToolbarItem;
  _query_Button_7_0:import14.QueryList<any>;
  _text_8:any;
  _el_9:any;
  _Icon_9_3:import16.Icon;
  _text_10:any;
  _text_11:any;
  _text_12:any;
  _el_13:any;
  /*private*/ _appEl_13:import2.AppElement;
  _ToolbarTitle_13_4:import17.ToolbarTitle;
  _text_14:any;
  _text_15:any;
  _text_16:any;
  _text_17:any;
  _el_18:any;
  /*private*/ _appEl_18:import2.AppElement;
  _Content_18_4:import18.Content;
  _text_19:any;
  _text_20:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_Configuracao0,renderType_Configuracao,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_1 = this.renderer.createElement(parentRenderNode,'ion-header',(null as any));
    this._Header_1_3 = new import11.Header(this.parentInjector.get(import19.Config),new import20.ElementRef(this._el_1),this.renderer,this.parentInjector.get(import21.ViewController,(null as any)));
    this._text_2 = this.renderer.createText(this._el_1,'\n\n  ',(null as any));
    this._el_3 = this.renderer.createElement(this._el_1,'ion-navbar',(null as any));
    this.renderer.setElementAttribute(this._el_3,'class','toolbar');
    this._appEl_3 = new import2.AppElement(3,1,this,this._el_3);
    var compView_3:any = import22.viewFactory_Navbar0(this.viewUtils,this.injector(3),this._appEl_3);
    this._Navbar_3_4 = new import12.Navbar(this.parentInjector.get(import23.App),this.parentInjector.get(import21.ViewController,(null as any)),this.parentInjector.get(import8.NavController,(null as any)),this.parentInjector.get(import19.Config),new import20.ElementRef(this._el_3),this.renderer);
    this._appEl_3.initComponent(this._Navbar_3_4,[],compView_3);
    this._text_4 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_5 = this.renderer.createElement((null as any),'ion-buttons',(null as any));
    this.renderer.setElementAttribute(this._el_5,'left','');
    this.renderer.setElementAttribute(this._el_5,'start','');
    this._ToolbarItem_5_3 = new import13.ToolbarItem(this.parentInjector.get(import19.Config),new import20.ElementRef(this._el_5),this.renderer,this.parentInjector.get(import11.Toolbar,(null as any)),this._Navbar_3_4);
    this._query_Button_5_0 = new import14.QueryList<any>();
    this._text_6 = this.renderer.createText(this._el_5,'\n      ',(null as any));
    this._el_7 = this.renderer.createElement(this._el_5,'button',(null as any));
    this.renderer.setElementAttribute(this._el_7,'menuToggle','');
    this._MenuToggle_7_3 = new import15.MenuToggle(this.parentInjector.get(import24.MenuController),new import20.ElementRef(this._el_7),this.parentInjector.get(import21.ViewController,(null as any)),this._Navbar_3_4);
    this._ToolbarItem_7_4 = new import13.ToolbarItem(this.parentInjector.get(import19.Config),new import20.ElementRef(this._el_7),this.renderer,this.parentInjector.get(import11.Toolbar,(null as any)),this._Navbar_3_4);
    this._query_Button_7_0 = new import14.QueryList<any>();
    this._text_8 = this.renderer.createText(this._el_7,'\n        ',(null as any));
    this._el_9 = this.renderer.createElement(this._el_7,'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_9,'name','menu');
    this.renderer.setElementAttribute(this._el_9,'role','img');
    this._Icon_9_3 = new import16.Icon(this.parentInjector.get(import19.Config),new import20.ElementRef(this._el_9),this.renderer);
    this._text_10 = this.renderer.createText(this._el_7,'\n      ',(null as any));
    this._text_11 = this.renderer.createText(this._el_5,'\n    ',(null as any));
    this._text_12 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_13 = this.renderer.createElement((null as any),'ion-title',(null as any));
    this._appEl_13 = new import2.AppElement(13,3,this,this._el_13);
    var compView_13:any = import25.viewFactory_ToolbarTitle0(this.viewUtils,this.injector(13),this._appEl_13);
    this._ToolbarTitle_13_4 = new import17.ToolbarTitle(this.parentInjector.get(import19.Config),new import20.ElementRef(this._el_13),this.renderer,this.parentInjector.get(import11.Toolbar,(null as any)),this._Navbar_3_4);
    this._appEl_13.initComponent(this._ToolbarTitle_13_4,[],compView_13);
    this._text_14 = this.renderer.createText((null as any),'Configuração',(null as any));
    compView_13.create(this._ToolbarTitle_13_4,[[].concat([this._text_14])],(null as any));
    this._text_15 = this.renderer.createText((null as any),'\n  ',(null as any));
    compView_3.create(this._Navbar_3_4,[
      [].concat([this._el_5]),
      [],
      [],
      [].concat([
        this._text_4,
        this._text_12,
        this._el_13,
        this._text_15
      ]
      )
    ]
    ,(null as any));
    this._text_16 = this.renderer.createText(this._el_1,'\n\n',(null as any));
    this._text_17 = this.renderer.createText(parentRenderNode,'\n\n\n',(null as any));
    this._el_18 = this.renderer.createElement(parentRenderNode,'ion-content',(null as any));
    this.renderer.setElementAttribute(this._el_18,'padding','');
    this._appEl_18 = new import2.AppElement(18,(null as any),this,this._el_18);
    var compView_18:any = import26.viewFactory_Content0(this.viewUtils,this.injector(18),this._appEl_18);
    this._Content_18_4 = new import18.Content(this.parentInjector.get(import19.Config),new import20.ElementRef(this._el_18),this.renderer,this.parentInjector.get(import23.App),this.parentInjector.get(import27.Keyboard),this.parentInjector.get(import28.NgZone),this.parentInjector.get(import21.ViewController,(null as any)),this.parentInjector.get(import29.Tabs,(null as any)));
    this._appEl_18.initComponent(this._Content_18_4,[],compView_18);
    this._text_19 = this.renderer.createText((null as any),'\n\n',(null as any));
    compView_18.create(this._Content_18_4,[
      [],
      [].concat([this._text_19]),
      []
    ]
    ,(null as any));
    this._text_20 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_7,'click',this.eventHandler(this._handle_click_7_0.bind(this)));
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this.init([],[
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._text_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._text_15,
      this._text_16,
      this._text_17,
      this._el_18,
      this._text_19,
      this._text_20
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import16.Icon) && (9 === requestNodeIndex))) { return this._Icon_9_3; }
    if (((token === import15.MenuToggle) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._MenuToggle_7_3; }
    if (((token === import13.ToolbarItem) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._ToolbarItem_7_4; }
    if (((token === import13.ToolbarItem) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 11)))) { return this._ToolbarItem_5_3; }
    if (((token === import17.ToolbarTitle) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 14)))) { return this._ToolbarTitle_13_4; }
    if (((token === import12.Navbar) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 15)))) { return this._Navbar_3_4; }
    if (((token === import11.Header) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 16)))) { return this._Header_1_3; }
    if (((token === import18.Content) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 19)))) { return this._Content_18_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_3:any = '';
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._MenuToggle_7_3.menuToggle = currVal_3;
      this._expr_3 = currVal_3;
    }
    const currVal_5:any = 'menu';
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this._Icon_9_3.name = currVal_5;
      this._expr_5 = currVal_5;
    }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._Content_18_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_Button_7_0.dirty) {
        this._query_Button_7_0.reset([]);
        this._ToolbarItem_7_4._buttons = this._query_Button_7_0;
        this._query_Button_7_0.notifyOnChanges();
      }
      if (this._query_Button_5_0.dirty) {
        this._query_Button_5_0.reset([]);
        this._ToolbarItem_5_3._buttons = this._query_Button_5_0;
        this._query_Button_5_0.notifyOnChanges();
      }
    }
    const currVal_0:any = this._Navbar_3_4._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_3,'hidden',currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this._Navbar_3_4._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementClass(this._el_3,'statusbar-padding',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_4:any = this._MenuToggle_7_3.isHidden;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementProperty(this._el_7,'hidden',currVal_4);
      this._expr_4 = currVal_4;
    }
    const currVal_6:any = this._Icon_9_3._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementClass(this._el_9,'hide',currVal_6);
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = this._Content_18_4._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementClass(this._el_18,'statusbar-padding',currVal_7);
      this._expr_7 = currVal_7;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Navbar_3_4.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Icon_9_3.ngOnDestroy();
    this._Content_18_4.ngOnDestroy();
  }
  private _handle_click_7_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._MenuToggle_7_3.toggle()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_Configuracao0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.Configuracao> {
  if ((renderType_Configuracao === (null as any))) { (renderType_Configuracao = viewUtils.createRenderComponentType('/home/davikawasaki/GitHub/healthcontrol/ionic/healthControl/.tmp/pages/configuracao/configuracao.html',0,import9.ViewEncapsulation.None,styles_Configuracao,{})); }
  return new _View_Configuracao0(viewUtils,parentInjector,declarationEl);
}