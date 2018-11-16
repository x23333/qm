interface IDrawerConfig {
  duration: number;
  ease: string;
  enterTransition: string;
  leaveTransition: string;
}
class Drawer implements IDrawerConfig {
  enterDOM: HTMLElement
  leaveDOM: HTMLElement
  _duration: number = 2
  _ease: string = "ease"
  enterTransition: string
  leaveTransition: string 

  constructor(opt) {
    this.enterDOM = opt.enterDOM;
    this.leaveDOM = opt.leaveDOM;
    this.initDOMStyle();
  }
  updateTransition () {
    this.enterTransition = `left: 0px; transition:left ${this.duration}s ${this.ease}`;
    this.leaveTransition = `transition: margin-left ${this.duration}s ${this.ease}`
  }
  initDOMStyle () {
    if(this.enterDOM && this.leaveDOM) {
      this.enterDOM.setAttribute("style",`transition: left;t ${this.duration}s ${this.ease}`);
      this.leaveDOM.setAttribute("style", `margin-left:200px; transition: margin-left ${this.duration}s ${this.ease}`)
    }
  }
  get duration () {
    return this._duration
  }
  set duration (duration: number) {
    this._duration = duration
  }
  get ease () {
    return this._ease;
  }
  set ease (ease: string) {
    this.ease = ease
  }
  enter() {
     if(this.enterDOM && this.leaveDOM) {
       this.enterDOM.setAttribute("style", `this.enterTransition`);
       this.leaveDOM.setAttribute("style", `this.leaveTransition`)
     }
  }
}