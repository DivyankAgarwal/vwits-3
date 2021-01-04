import { Component, VERSION } from "@angular/core";
import { DemoPipe } from "./demo.pipe";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [DemoPipe]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  mydate = Date();
  customData = "abcd";
  myname = "";
  valUser = false;

  hello() {
    this.customData = this.myname;
  }
  formHello(data) {
    this.valUser = true;
    console.log(data.txtusername + " " + data.txtpassword);
  }
}
