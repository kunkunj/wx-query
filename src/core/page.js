import { create } from "../main/create";
import { init } from "../main/init";
import { plugin } from "../main/plugin";
import { use } from "../main/use";

function wxPage() {}

use(wxPage)
create(wxPage)
init(wxPage)
plugin(wxPage)

export default wxPage;
