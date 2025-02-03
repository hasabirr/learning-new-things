<template>

<slot>Ini adalah slot default karena parent component tidak memberikan data</slot> <br>
Murid: {{studentName}} <button @click="showData">Show Detail</button> <br>

</template>

<script>
export default {
    props : {
        studentName: String
    },
    emits: ['response'],
    methods: {
        showData() {
            this.$emit('response', this.studentName)
        }
    }
}

</script>