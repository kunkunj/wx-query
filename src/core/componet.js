import { create } from '../main/create';
import { init } from '../main/init';
import { initComponet } from '../main/initComponet';
import { plugin } from '../main/plugin';
import { use } from '../main/use';

function wxComponet() {}
wxComponet.pages = [];
use(wxComponet);
create(wxComponet);
initComponet(wxComponet);
plugin(wxComponet);

export default wxComponet;
