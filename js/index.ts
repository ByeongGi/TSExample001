import { Observable } from '@reactivex/rxjs';
import * as http from "http";
import DiContainer from './com/springframework/core/DiContainer';
import Context from './com/springframework/core/Context';



const container: DiContainer = new DiContainer(new Context("Spirngframework"));

container.register();

console.log(container);
