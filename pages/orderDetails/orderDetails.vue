<template>
	<view>
		<u--text
			type="primary"
			margin="0 0 8px 0"
			:text="desc"
		>
		</u--text>
		<u-button   
			class="button" 
			type="primary" 
			:ripple="true" 
			:plain="true" 
			shape="circle"
			@click="goReportOrder(id)"
		>
			报单
		</u-button>  
	
		<u-button 
			class="button"  
			type="primary" 
			:ripple="true"  
			:plain="true" 
			shape="circle"
			@click="goOrderInfo(id)"
		>
			查单
		</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:"",
				desc:"",
			}
		},
		methods: {
			goReportOrder(id){
				uni.navigateTo({
					url:"../orderUpload/orderUpload?id="+id,
					fail(err) {
						alert(err);
					}
				})
			},
			goOrderInfo(id){
				uni.navigateTo({
					url:"../orderQuery/orderQuery?id="+id,
					fail(err) {
						alert(err);
					}
				})
			}
		},
		onLoad(option) {
			this.id=option.id
			this.desc=option.desc
		}
	}
</script>

<style scoped>
.button{
	font-size: 1.3em;
	height: 2.5em;
	color: #8effa5;
}
</style>
