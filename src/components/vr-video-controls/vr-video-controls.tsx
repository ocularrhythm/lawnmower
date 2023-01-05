import { 
  Component, 
  Host, 
  h,
  Prop,
  Event,
  EventEmitter,
  getAssetPath,
} from '@stencil/core';
import { Method } from '@stencil/sass/dist/declarations';

import { SceneElement } from '../../classes/components/SceneElement';
import { VRVideoControls } from '../../classes/components/vr-video-controls/VRVideoControls';

@Component({
  tag: 'vr-video-controls',
  styleUrl: 'vr-video-controls.scss',
  shadow: true,
})
export class VrVideoControls {
  // *** Required for positioning ***

  @Prop() public parent: SceneElement;

  @Prop() public position: number;

  @Prop() public depth: number;

  @Prop() public color: string = "#333333";
    
  @Prop() public width: number = 75;
  
  @Prop() public height: number = 30;

  @Prop() public x: number = 0;
    
  @Prop() public y: number = 10;
  
  @Prop() public z: number = 300;

  @Prop() public onPlay: Function;

  @Prop() public onPause: Function;

  @Prop() public onClose: Function;

  // *** Component specific

  @Event() public addToRoot: EventEmitter<SceneElement>;

  private _videoControls: VRVideoControls;

  @Method()
  public async getVisible(): Promise<boolean> {
    return new Promise((resolve) => {
      if (this._videoControls) resolve(this._videoControls.visible);
      else resolve(false);
    });
  }

  @Method()
  public async show(isPlaying: boolean): Promise<void> {
    return new Promise((resolve) => {
      if (this._videoControls) this._videoControls.show(isPlaying);

      resolve();
    });
  }

  @Method()
  public async hide(): Promise<void> {
    return new Promise((resolve) => {
      if (this._videoControls) this._videoControls.visible = false;

      resolve();
    });
  }

  componentWillLoad() {
    this._videoControls = new VRVideoControls(this.parent, {
      baseImagePath: getAssetPath('assets'),
      color: this.color,
      width: this.width,
      height: this.height,
      x: this.x,
      y: this.y,
      z: this.z
    });

    this._videoControls.onPlay = () => {
      if (this.onPlay) this.onPlay()
    }

    this._videoControls.onPause = () => {
      if (this.onPause) this.onPause()
    }

    this._videoControls.onClose = () => {
      if (this.onClose) this.onClose()
    }
  }

  componentDidLoad() {
    this.addToRoot.emit(this._videoControls);
  }

  render() {
    return (
      <Host />
    );
  }

}
