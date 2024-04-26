<template>
	<div class="flex justify-center">
		<div
			id="blurDiv"
			class="mt-11 float-start m-auto z-0 grid grid-rows-3 grid-cols-4 w-[60%] gap-10 relative">
			<div
				class="h-96 w-64 rounded-lg space-y-16 m-auto space-x-9 shadow-2xl bg-neutral-50"
				v-for="item in sushiArr"
				:key="item.image">
				<div>
					<img
						class="bg-transparent block w-40 h-40 m-auto"
						:src="item.image"
						alt="image" />
					<h1 class="space-x-8 ml-6">
						<span class="uppercase text-lg pr-2">{{ item.label }}</span>
						<br />
						<span class="float-right text-xs relative pr-3"
							>{{ item.weight }}г</span
						>
					</h1>
					<p class="pl-4 mt-9 text-base h-8 text-gray-500">
						{{ item.ingredients }}
					</p>
				</div>
				<div class="flex justify-between mb-0 items-center mt-10">
					<h1 class="text-xl">{{ item.price }} ₽</h1>
					<button
						id="blurButton"
						@click="
							(): void => {
								addToOrder(item);
							}
						"
						type="button"
						class="px-4 h-8 w-24 hover:bg-[#100301] transition-colors 300ms ease-in bg-orange-950 text-white text-xs rounded-lg mr-5">
						В корзину
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { sushiArr } from '../arrays/sushi';
	import { order } from '../arrays/order';
	import type Sushi from '../arrays/sushi';
	import toggleDisable from '../layouts/default.vue';

	const addToOrder = (item: Sushi): void => {
		order.value.push({
			image: item.image,
			label: item.label,
			price: item.price,
			isLiked: item.isLiked,
			weight: item.weight,
			ingredients: item.ingredients,
			id: item.id,
			counter: item.counter,
			summary: item.summary,
		});
		console.log(toggleDisable.value);
	};
</script>

<style lang="scss" scoped></style>
