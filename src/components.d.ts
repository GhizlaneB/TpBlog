/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/router';
import '@stencil/state-tunnel';
import {
  MatchResults,
  RouterHistory,
} from '@stencil/router';


export namespace Components {

  interface AppAdd {
    'history': RouterHistory;
  }
  interface AppAddAttributes extends StencilHTMLAttributes {
    'history'?: RouterHistory;
  }

  interface AppDetails {
    'history': RouterHistory;
    'match': MatchResults;
  }
  interface AppDetailsAttributes extends StencilHTMLAttributes {
    'history'?: RouterHistory;
    'match'?: MatchResults;
  }

  interface AppHome {}
  interface AppHomeAttributes extends StencilHTMLAttributes {}

  interface AppProfile {
    'match': MatchResults;
  }
  interface AppProfileAttributes extends StencilHTMLAttributes {
    'match'?: MatchResults;
  }

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}

  interface MyHome {
    'name': string;
  }
  interface MyHomeAttributes extends StencilHTMLAttributes {
    'name'?: string;
  }

  interface MyTable {
    'load': () => void;
    'name': string;
  }
  interface MyTableAttributes extends StencilHTMLAttributes {
    'name'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AppAdd': Components.AppAdd;
    'AppDetails': Components.AppDetails;
    'AppHome': Components.AppHome;
    'AppProfile': Components.AppProfile;
    'AppRoot': Components.AppRoot;
    'MyHome': Components.MyHome;
    'MyTable': Components.MyTable;
  }

  interface StencilIntrinsicElements {
    'app-add': Components.AppAddAttributes;
    'app-details': Components.AppDetailsAttributes;
    'app-home': Components.AppHomeAttributes;
    'app-profile': Components.AppProfileAttributes;
    'app-root': Components.AppRootAttributes;
    'my-home': Components.MyHomeAttributes;
    'my-table': Components.MyTableAttributes;
  }


  interface HTMLAppAddElement extends Components.AppAdd, HTMLStencilElement {}
  var HTMLAppAddElement: {
    prototype: HTMLAppAddElement;
    new (): HTMLAppAddElement;
  };

  interface HTMLAppDetailsElement extends Components.AppDetails, HTMLStencilElement {}
  var HTMLAppDetailsElement: {
    prototype: HTMLAppDetailsElement;
    new (): HTMLAppDetailsElement;
  };

  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {}
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLMyHomeElement extends Components.MyHome, HTMLStencilElement {}
  var HTMLMyHomeElement: {
    prototype: HTMLMyHomeElement;
    new (): HTMLMyHomeElement;
  };

  interface HTMLMyTableElement extends Components.MyTable, HTMLStencilElement {}
  var HTMLMyTableElement: {
    prototype: HTMLMyTableElement;
    new (): HTMLMyTableElement;
  };

  interface HTMLElementTagNameMap {
    'app-add': HTMLAppAddElement
    'app-details': HTMLAppDetailsElement
    'app-home': HTMLAppHomeElement
    'app-profile': HTMLAppProfileElement
    'app-root': HTMLAppRootElement
    'my-home': HTMLMyHomeElement
    'my-table': HTMLMyTableElement
  }

  interface ElementTagNameMap {
    'app-add': HTMLAppAddElement;
    'app-details': HTMLAppDetailsElement;
    'app-home': HTMLAppHomeElement;
    'app-profile': HTMLAppProfileElement;
    'app-root': HTMLAppRootElement;
    'my-home': HTMLMyHomeElement;
    'my-table': HTMLMyTableElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
