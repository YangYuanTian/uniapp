<template>
	<view class="u-page">
		<u-navbar
			title="表单"
			@leftClick="navigateBack"
			safeAreaInsetTop
			fixed
			placeholder
		></u-navbar>
		<view class="u-demo-block">
			<text class="u-demo-block__title">订单提交</text>
			<view class="u-demo-block__content">
				<!-- 注意，如果需要兼容微信小程序，最好通过setRules方法设置rules规则 -->
				<u--form
					labelPosition="left"
					:model="model1"
					ref="form1"
				>
					<view v-for="x in 30" :key="x">
						<u-form-item
							label="订单号"
							prop="intro"
							borderBottom
							ref="item3"
							v-if="x<=items"
						>
							<u--input>
								
							</u--input>
						</u-form-item>
				
						<u-form-item
							label="下单价格"
							prop="intro"
							borderBottom
							ref="item3"
							v-if="x<=items"
						>
							<u--input>
								
							</u--input>
						</u-form-item>
						<u-button
						   @click="addItem()"
						   v-if="x==items"
						>
							增加
						</u-button>
					</view>
					
				</u--form>
				<u-button
					type="primary"
					text="提交"
					customStyle="margin-top: 50px"
					@click="submit"
				></u-button>
				<u-button
					type="error"
					text="重置"
					customStyle="margin-top: 10px"
					@click="reset"
				></u-button>
				<u-code
					ref="uCode"
					@change="codeChange"
					seconds="20"
					@start="disabled1 = true"
					@end="disabled1 = false"
				></u-code>
				<u-datetime-picker
					:show="showBirthday"
					:value="birthday"
					mode="date"
					closeOnClickOverlay
					@confirm="birthdayConfirm"
					@cancel="birthdayClose"
					@close="birthdayClose"
				></u-datetime-picker>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				items:1,
			}
		},
		onReady() {
			// 如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则
			this.$refs.form1.setRules(this.rules)
		},
		methods: {
			setID(id){
				this.id = id
			},
			addItem(){
				this.items++;
			},
			navigateBack() {
				uni.navigateBack()
			},
			
			submit() {
				
			},
			reset() {
				
			},
		},
		onLoad(option){
			this.setID(option.id)
		}
	}
</script>


<style lang="scss">
.button{
	font-size: 1em;
}
</style>