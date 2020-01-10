<template>
    <div class="test__row">
        <button class="test__button" @click="testInvoke()">
            Invoke Script
        </button>
    </div>
</template>

<script>
export default {
    name: 'Invoke',
    methods: {
        async testInvoke() {
            let invokeData = {
                dApp: "3MuN7D8r19zdvSpAd1L91Gs88bcgwUFy2mn",
                call: {
                    function: "faucet"
                }
            }
            await this.signer
                    .invoke(invokeData)
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