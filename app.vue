<template>
<canvas ref="render" width=100 height=100>

</canvas>
</template>
<script>


import {Create_Render,GPU} from './render.js'

export default {

    name: "GpuRender",

    data(){
        return {
        render:null
        }

    },
    mounted(){

        let canvas=this.$refs.render
        console.log('canvas',canvas)
        const gpu=new GPU({
            mode:"webgl",
            canvas:canvas})
        this.render=Create_Render(gpu)
        this.render()

    },
    methods:{
        draw(){
            
            this.render()
            
        }
    }
    
}
</script>
<style>

</style>
