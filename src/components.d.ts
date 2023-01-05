/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { SceneElement } from "./classes/components/SceneElement";
export namespace Components {
    interface Vr360video {
        "depth": number;
        "parent": SceneElement;
        "pause": () => Promise<void>;
        "play": () => Promise<void>;
        "position": number;
        "src": string;
        "videoHieghtSegments": number;
        "videoRadius": number;
        "videoWidthSegments": number;
    }
    interface VrAsset {
        "activeAnimation": string;
        "depth": number;
        "getActiveAnimationName": () => Promise<string>;
        "getAnimationNames": () => Promise<Array<string>>;
        "parent": SceneElement;
        "position": number;
        "radius": number;
        "setActiveAnimation": (animationName: string) => Promise<void>;
        "setRotation": (x: number, y: number, z: number) => Promise<void>;
        "setXRotationSpeed": (rotationSpeed: number) => Promise<void>;
        "setYRotationSpeed": (rotationSpeed: number) => Promise<void>;
        "setZRotationSpeed": (rotationSpeed: number) => Promise<void>;
        "src": string;
        "xRotation": number;
        "xRotationSpeed": number;
        "yRotation": number;
        "yRotationSpeed": number;
        "zRotation": number;
        "zRotationSpeed": number;
    }
    interface VrDiv {
        "borderRadius": number;
        "color": string;
        "depth": number;
        "height"?: number;
        "horizontalAlign": string;
        "itemHorizontalAlign": string;
        "itemVerticalAlign": string;
        "layout": string;
        "margin"?: number;
        "opacity"?: number;
        "padding"?: number;
        "parent": SceneElement;
        "position": number;
        "verticalAlign": string;
        "width": number;
        "xRotation": number;
        "yRotation": number;
        "zRotation": number;
    }
    interface VrDocument {
        "hideModal": () => Promise<void>;
        "setLayout": (layoutId: string) => Promise<void>;
        "showModal": (id: string) => Promise<void>;
        "startingDistance": number;
    }
    interface VrImage {
        "borderRadius": number;
        "depth": number;
        "height": number;
        "modal": boolean;
        "parent": SceneElement;
        "position": number;
        "src": string;
        "visible": boolean;
        "width": number;
    }
    interface VrLayout {
        "depth": number;
        "id": string;
        "parent": SceneElement;
        "position": number;
    }
    interface VrModal {
        "backgroundColor": string;
        "borderColor": string;
        "borderRadius": number;
        "borderWidth": number;
        "closeButtonWidth": number;
        "getId": () => Promise<string>;
        "getUUID": () => Promise<string>;
        "height"?: number;
        "hide": () => Promise<void>;
        "id": string;
        "offset": number;
        "padding": number;
        "parent": SceneElement;
        "show": () => Promise<void>;
        "src": string;
        "width": number;
    }
    interface VrText {
        "backgroundColor": string;
        "borderRadius": number;
        "depth": number;
        "fontColor": string;
        "fontFamily": string;
        "fontSize": number;
        "height": number;
        "padding"?: number;
        "parent": SceneElement;
        "position": number;
        "text": string;
        "textDecoration": string;
        "width": number;
    }
    interface VrVideo {
        "depth": number;
        "height": number;
        "parent": SceneElement;
        "placeholder": number;
        "play360": boolean;
        "position": number;
        "src": string;
        "width": number;
    }
    interface VrVideoControls {
        "color": string;
        "depth": number;
        "getVisible": () => Promise<boolean>;
        "height": number;
        "hide": () => Promise<void>;
        "onClose": Function;
        "onPause": Function;
        "onPlay": Function;
        "parent": SceneElement;
        "position": number;
        "show": (isPlaying: boolean) => Promise<void>;
        "width": number;
        "x": number;
        "y": number;
        "z": number;
    }
}
export interface Vr360videoCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLVr360videoElement;
}
export interface VrAssetCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLVrAssetElement;
}
export interface VrImageCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLVrImageElement;
}
export interface VrModalCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLVrModalElement;
}
export interface VrTextCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLVrTextElement;
}
export interface VrVideoCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLVrVideoElement;
}
export interface VrVideoControlsCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLVrVideoControlsElement;
}
declare global {
    interface HTMLVr360videoElement extends Components.Vr360video, HTMLStencilElement {
    }
    var HTMLVr360videoElement: {
        prototype: HTMLVr360videoElement;
        new (): HTMLVr360videoElement;
    };
    interface HTMLVrAssetElement extends Components.VrAsset, HTMLStencilElement {
    }
    var HTMLVrAssetElement: {
        prototype: HTMLVrAssetElement;
        new (): HTMLVrAssetElement;
    };
    interface HTMLVrDivElement extends Components.VrDiv, HTMLStencilElement {
    }
    var HTMLVrDivElement: {
        prototype: HTMLVrDivElement;
        new (): HTMLVrDivElement;
    };
    interface HTMLVrDocumentElement extends Components.VrDocument, HTMLStencilElement {
    }
    var HTMLVrDocumentElement: {
        prototype: HTMLVrDocumentElement;
        new (): HTMLVrDocumentElement;
    };
    interface HTMLVrImageElement extends Components.VrImage, HTMLStencilElement {
    }
    var HTMLVrImageElement: {
        prototype: HTMLVrImageElement;
        new (): HTMLVrImageElement;
    };
    interface HTMLVrLayoutElement extends Components.VrLayout, HTMLStencilElement {
    }
    var HTMLVrLayoutElement: {
        prototype: HTMLVrLayoutElement;
        new (): HTMLVrLayoutElement;
    };
    interface HTMLVrModalElement extends Components.VrModal, HTMLStencilElement {
    }
    var HTMLVrModalElement: {
        prototype: HTMLVrModalElement;
        new (): HTMLVrModalElement;
    };
    interface HTMLVrTextElement extends Components.VrText, HTMLStencilElement {
    }
    var HTMLVrTextElement: {
        prototype: HTMLVrTextElement;
        new (): HTMLVrTextElement;
    };
    interface HTMLVrVideoElement extends Components.VrVideo, HTMLStencilElement {
    }
    var HTMLVrVideoElement: {
        prototype: HTMLVrVideoElement;
        new (): HTMLVrVideoElement;
    };
    interface HTMLVrVideoControlsElement extends Components.VrVideoControls, HTMLStencilElement {
    }
    var HTMLVrVideoControlsElement: {
        prototype: HTMLVrVideoControlsElement;
        new (): HTMLVrVideoControlsElement;
    };
    interface HTMLElementTagNameMap {
        "vr-360video": HTMLVr360videoElement;
        "vr-asset": HTMLVrAssetElement;
        "vr-div": HTMLVrDivElement;
        "vr-document": HTMLVrDocumentElement;
        "vr-image": HTMLVrImageElement;
        "vr-layout": HTMLVrLayoutElement;
        "vr-modal": HTMLVrModalElement;
        "vr-text": HTMLVrTextElement;
        "vr-video": HTMLVrVideoElement;
        "vr-video-controls": HTMLVrVideoControlsElement;
    }
}
declare namespace LocalJSX {
    interface Vr360video {
        "depth"?: number;
        "onAddToRoot"?: (event: Vr360videoCustomEvent<SceneElement>) => void;
        "onHideCurrentLayout"?: (event: Vr360videoCustomEvent<any>) => void;
        "onOnClick"?: (event: Vr360videoCustomEvent<any>) => void;
        "onShowCurrentLayout"?: (event: Vr360videoCustomEvent<any>) => void;
        "onViewCurrentLayout"?: (event: Vr360videoCustomEvent<any>) => void;
        "parent"?: SceneElement;
        "position"?: number;
        "src"?: string;
        "videoHieghtSegments"?: number;
        "videoRadius"?: number;
        "videoWidthSegments"?: number;
    }
    interface VrAsset {
        "activeAnimation"?: string;
        "depth"?: number;
        "onOnClick"?: (event: VrAssetCustomEvent<any>) => void;
        "parent"?: SceneElement;
        "position"?: number;
        "radius"?: number;
        "src"?: string;
        "xRotation"?: number;
        "xRotationSpeed"?: number;
        "yRotation"?: number;
        "yRotationSpeed"?: number;
        "zRotation"?: number;
        "zRotationSpeed"?: number;
    }
    interface VrDiv {
        "borderRadius"?: number;
        "color"?: string;
        "depth"?: number;
        "height"?: number;
        "horizontalAlign"?: string;
        "itemHorizontalAlign"?: string;
        "itemVerticalAlign"?: string;
        "layout"?: string;
        "margin"?: number;
        "opacity"?: number;
        "padding"?: number;
        "parent"?: SceneElement;
        "position"?: number;
        "verticalAlign"?: string;
        "width"?: number;
        "xRotation"?: number;
        "yRotation"?: number;
        "zRotation"?: number;
    }
    interface VrDocument {
        "startingDistance"?: number;
    }
    interface VrImage {
        "borderRadius"?: number;
        "depth"?: number;
        "height"?: number;
        "modal"?: boolean;
        "onOnClick"?: (event: VrImageCustomEvent<any>) => void;
        "onShowModalDialog"?: (event: VrImageCustomEvent<string>) => void;
        "parent"?: SceneElement;
        "position"?: number;
        "src"?: string;
        "visible"?: boolean;
        "width"?: number;
    }
    interface VrLayout {
        "depth"?: number;
        "id"?: string;
        "parent"?: SceneElement;
        "position"?: number;
    }
    interface VrModal {
        "backgroundColor"?: string;
        "borderColor"?: string;
        "borderRadius"?: number;
        "borderWidth"?: number;
        "closeButtonWidth"?: number;
        "height"?: number;
        "id"?: string;
        "offset"?: number;
        "onAddToRoot"?: (event: VrModalCustomEvent<SceneElement>) => void;
        "onOnClick"?: (event: VrModalCustomEvent<any>) => void;
        "padding"?: number;
        "parent"?: SceneElement;
        "src"?: string;
        "width"?: number;
    }
    interface VrText {
        "backgroundColor"?: string;
        "borderRadius"?: number;
        "depth"?: number;
        "fontColor"?: string;
        "fontFamily"?: string;
        "fontSize"?: number;
        "height"?: number;
        "onOnClick"?: (event: VrTextCustomEvent<any>) => void;
        "padding"?: number;
        "parent"?: SceneElement;
        "position"?: number;
        "text"?: string;
        "textDecoration"?: string;
        "width"?: number;
    }
    interface VrVideo {
        "depth"?: number;
        "height"?: number;
        "onOnClick"?: (event: VrVideoCustomEvent<any>) => void;
        "parent"?: SceneElement;
        "placeholder"?: number;
        "play360"?: boolean;
        "position"?: number;
        "src"?: string;
        "width"?: number;
    }
    interface VrVideoControls {
        "color"?: string;
        "depth"?: number;
        "height"?: number;
        "onAddToRoot"?: (event: VrVideoControlsCustomEvent<SceneElement>) => void;
        "onClose"?: Function;
        "onPause"?: Function;
        "onPlay"?: Function;
        "parent"?: SceneElement;
        "position"?: number;
        "width"?: number;
        "x"?: number;
        "y"?: number;
        "z"?: number;
    }
    interface IntrinsicElements {
        "vr-360video": Vr360video;
        "vr-asset": VrAsset;
        "vr-div": VrDiv;
        "vr-document": VrDocument;
        "vr-image": VrImage;
        "vr-layout": VrLayout;
        "vr-modal": VrModal;
        "vr-text": VrText;
        "vr-video": VrVideo;
        "vr-video-controls": VrVideoControls;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "vr-360video": LocalJSX.Vr360video & JSXBase.HTMLAttributes<HTMLVr360videoElement>;
            "vr-asset": LocalJSX.VrAsset & JSXBase.HTMLAttributes<HTMLVrAssetElement>;
            "vr-div": LocalJSX.VrDiv & JSXBase.HTMLAttributes<HTMLVrDivElement>;
            "vr-document": LocalJSX.VrDocument & JSXBase.HTMLAttributes<HTMLVrDocumentElement>;
            "vr-image": LocalJSX.VrImage & JSXBase.HTMLAttributes<HTMLVrImageElement>;
            "vr-layout": LocalJSX.VrLayout & JSXBase.HTMLAttributes<HTMLVrLayoutElement>;
            "vr-modal": LocalJSX.VrModal & JSXBase.HTMLAttributes<HTMLVrModalElement>;
            "vr-text": LocalJSX.VrText & JSXBase.HTMLAttributes<HTMLVrTextElement>;
            "vr-video": LocalJSX.VrVideo & JSXBase.HTMLAttributes<HTMLVrVideoElement>;
            "vr-video-controls": LocalJSX.VrVideoControls & JSXBase.HTMLAttributes<HTMLVrVideoControlsElement>;
        }
    }
}
