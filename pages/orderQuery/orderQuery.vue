<template>
	<view  class="button">
		hello,world{{id}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:""
			}
		},
		methods: {
			setID(id){
				this.id = id
			}
		},
		onLoad(option){
			this.setID(option.id)
		}
	}
</script>

<style>
.button{
	font-size: 1em;
}
</style>