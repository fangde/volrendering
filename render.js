import {GPU} from 'gpu.js'







function Create_Render(gpu){


    const kernel=gpu.createKernel(
        function(){
            this.color(0,0,0,1)
        }
        ).setOutput([100,100])
        .setGraphical(true)

    return kernel    
}



export {Create_Render,GPU}