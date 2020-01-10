<template>
    <div class="test__row">
        <button v-if="!address" class="test__button" @click="testLogin()">
            Authorization
        </button>
        <div v-else>
            <p>
                authorized as <br>
                {{address}}
            </p>
            <a :href="`https://wavesexplorer.com/testnet/address/${address}`" target="_blank">Check the Explorer</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            address: ''
        }
    },
    methods: {
        async testLogin() {
            await this.signer
                    .login()
                    .then((response) => {
                        this.address = response.address;
                    },
                    (error) => {
                        alert('Some error')
                    })
        }
    }
}
</script>