
<template>
	<scroll-view scroll-y=ture>
		<view>
			<tui-button plain 
				@click="getOrders()"
			>
				刷新订单
			</tui-button>

		
			<view 
				class="o  u-border"
				v-for="order in orders" :key="order" 
			>
				
				<view >
					<tui-card 
					    class="card"
						:image="{
							url: '/static/lizhi.jpg',
							height: 80, //图片高度
							width: 80, //图片宽度
							circle: true, //是否圆角
							full:ture,//是否 铺满 
							border:true,
						}"
						:title="{
							text: order.date
						}" 
						:tag="{
							text: order.date
						}"
						:header="{
							 line: false //是否去掉底部线条
						}"
					>
						<template v-slot:body>
							<view class="tui-default">
								{{order.desc}}
							</view>
							<view>
								<u-button
									@click="goReportOrder(order.id)"
								>
									报单
								</u-button>
								<u-button
									@click="setCipboard(order)"
								>
									点击复制
								</u-button>
							</view>
						</template>
						<template v-slot:footer>
							<view class="tui-default">
								返佣:{{order.reward}}
							</view>
						</template>
					</tui-card>
				</view>
			</view>
		</view>
		
		<u-divider text="没有更多了" :dashed="true"></u-divider>
	</scroll-view>
</template>

<script>
	import axios from "axios"
	
	let getOrders = function(orders){
		axios.post('http://175.178.238.195/scheme/get-all', {
		})
		  .then(function (response) {
			  
			  if (response.status !=  200){
				  alert("订单数据请求失败")
				  return
			  }
			  
			  let arr =  response.data.data.Schemes
			  
			  for(let  j = 0; j < arr.length; j++) {
					orders.push({
						"id": arr[j].id,
						"desc": arr[j].context,
						"date": arr[j].date,
						"reward": arr[j].reward
					})
			  } 
			  
		  })
		  .catch(function (error) {
			  alert("订单数据请求失败"+error);
		  });
	}
	
	
	export default {
		data() {
			return {
				orders:[]
			}
		},
		methods: {
			getOrders(){
				this.orders=[]
				getOrders(this.orders)
				uni.stopPullDownRefresh()
			},
			toDetails(order){
				uni.navigateTo({
					url:`../orderDetails/orderDetails?id=${order.id}&desc=${this.getOrderDesc(order)}`
				})
			},
			getOrderID(order){
				return order.id
			},
			getOrderDesc(order){
				return "日期:"+order.date+"\n"+order.desc+"\n"+"返佣:"+order.reward +"\n";
			},
			goReportOrder(id){
				uni.navigateTo({
					url:"../orderUpload/orderUpload?id="+id,
					fail(err) {
						alert(err);
					}
				})
			},
			setCipboard(order){
				 uni.setClipboardData({ data: order.desc })
			}
		},
		onPullDownRefresh(){
			this.getOrders()
		},
		onload() {
			alert("hello,world")
			this.getOrders()
		},
		onLaunch() {
			alert("hello,world")
			this.getOrders()
		},
		onInit() {
			this.getOrders()
		},
		onNavigationBarButtonTap() {
			this.getOrders()
		},
	}
</script>

<style lang="scss" scoped>
.o{
	font: 1.5em sans-serif;
}
// .card{
// 	margin: 20 20;
// }
</style>