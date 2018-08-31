<template>
	<div id="app">
			<keep-alive>
				<router-view v-if="$route.meta.keepAlive"></router-view>
			</keep-alive>
			<router-view v-if="!$route.meta.keepAlive"></router-view>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {
				isLogin: false,
			};
		},
		created(){
		},
		mounted() {
			this.homeLogin();
    	},
    	methods: {
	    	homeLogin(){//首屏区别加载
	    	}
    	}
	}

</script>

<style lang="scss">
</style>
