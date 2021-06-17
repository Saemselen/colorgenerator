<template>
    <div class="generator">
        <div class="main">
            <p>Press 'space' to generate new palette</p>
            <div class="res" v-on:keyup.space="getPalette()">

            </div>
        </div>
    </div>  
</template>

<script>
import config from "../config.json"
import { reactive } from "vue"

export default {
    setup(props, context) {
        const data = reactive({mainPal:[]})

        const getPalette = () => {
            console.log("YEEZ")
        }

        return { data, getPalette }
    }
}
</script>

<style scoped>

</style>