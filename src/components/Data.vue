<template>
    <div class="test__row">
        <button class="test__button" @click="testSendData()">
            Send Data
        </button>
    </div>
</template>

<script>
export default {
    name: 'Data',
    methods: {
        async testSendData() {
            let date = new Date();
            let sendData = {
                data: [
                    {
                        key: "lastCall",
                        value: `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
                        type: 'string'
                    }
                ]
            }
            await this.signer
                    .data(sendData)
                    .broadcast()
                    .then((response) => {
                        console.log(response)
                    },
                    (error) => {
                        console.error(error)
                    })
        }
    }
}
</script>