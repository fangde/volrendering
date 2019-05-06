<template>
<canvas>

</canvas>
</template>
<script>
import {GPU} from 'gpu.js'
console.log(GPU)

const gpu=new GPU();
const settings={
    output:{x:128}
}
const kernel=gpu.createKernel(
    function(){
        return this.thread.x+10.0;
    },settings
)

console.log(kernel())

export default {
    
}
</script>
<style>

</style>
