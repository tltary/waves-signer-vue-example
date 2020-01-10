<template>
    <div class="test__row">
        <button class="test__button" @click="testSendTransfer()">
            Send Transfer
        </button>
    </div>
</template>

<script>
export default {
    name: 'Transfer',
    methods: {
        async testSendTransfer() {
            let transferData = {
                recipient: "3MuN7D8r19zdvSpAd1L91Gs88bcgwUFy2mn",
                amount: 1
            }
            await this.signer
                    .transfer(transferData)
                    .broadcast()
                    .then((response) => {
                        console.log(response)
                    },
                    (error) => {
                        console.log(error)
                    })
        }
    }
}
</script>