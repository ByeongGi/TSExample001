/**
 * DiContainer
 * Interface 사용
 */
import Container from './Container';
import Context from './Context';

class DiContainer implements Container {
    
    context :Context;

    constructor(context : Context) {
        this.context = context;
    }

    register() {
        console.log("register!!!!!!");
    }

    execute(){
        // do something ! 
        return ;
    }

}

export default DiContainer;