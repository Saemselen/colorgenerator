<template>
    <div class="header">
        <h2>color generator</h2>
        <ul>
            <li id="0" @click="changePage(0)">generate</li>
            <li id="1" @click="changePage(1)">browse</li>
        </ul>
    </div>
</template>

<script>
import { reactive } from "vue"

export default {
    setup(props, context) {
        const data = reactive({pageActive:0})

        const changePage = (id) => {
            data.pageActive = id
            context.emit("pageChanged", id)
        }
        return { changePage }
    }
}
</script>

<style scoped>
.header * {
    display: inline-block;
}
.header ul {
    float:right;
}
.header li, .header h2 {
    margin: 30px;
}
.header {
    border-bottom: 1px solid rgb(177, 177, 177);
}
</style>