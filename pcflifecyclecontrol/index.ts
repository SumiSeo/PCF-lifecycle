import { IInputs, IOutputs } from "./generated/ManifestTypes";
import userInfo from "../userinfo.json";
import { User } from "../types/UserType";

export class pcflifecyclecontrol
  implements ComponentFramework.StandardControl<IInputs, IOutputs>
{
  /**
   * Empty constructor.
   */
  private _container: HTMLDivElement;
  private _userList: HTMLUListElement;

  constructor() {
    console.log(userInfo);
    console.log(userInfo[0]);
  }

  /**
   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
   * Data-set values are not initialized here, use updateView.
   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
   * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
   * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
   */

  private createTab(userInfo: User[]) {
    console.log("create Tab is called");

    let li;
    userInfo.map((user: User) => {
      li = document.createElement("li") as HTMLLIElement;
      li.innerText = user.first_name;
      li.setAttribute("key", user.first_name);
      console.log(li);
      console.log(user);
      // this._userList.appendChild(li);
    });
    console.log("ul");
    console.log(this._userList);
  }

  public init(
    context: ComponentFramework.Context<IInputs>,
    notifyOutputChanged: () => void,
    state: ComponentFramework.Dictionary,
    container: HTMLDivElement
  ): void {
    // Add control initialization code
    this._container = container;
    this._container.style.backgroundColor = "yellow";
    this._container.innerHTML = context.parameters.Label.raw || "";
    console.log(this._container);
    this.createTab(userInfo);
    //let user add the new value and add json config list
  }

  /**
   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
   */
  public updateView(context: ComponentFramework.Context<IInputs>): void {
    // Add code to update control view

    this._container.innerHTML = context.parameters.Label.raw || "";
  }

  /**
   * It is called by the framework prior to a control receiving new data.
   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
   */
  public getOutputs(): IOutputs {
    return {};
  }

  /**
   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
   * i.e. cancelling any pending remote calls, removing listeners, etc.
   */
  public destroy(): void {
    // Add code to cleanup control if necessary
  }
}
