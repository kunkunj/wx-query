import { Dep } from "../../main/dep";
import { Store } from "./store";

export function createStore(id, options) {
    Dep.addDep(id)
    return new Store(id,options)
}